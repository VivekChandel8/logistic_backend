import { fedExAuth, fedExTrack } from "../config/fedexTracking";
import upsTrack from "../config/upsTracking";
import { findAndUpdateData, findData } from "../services/logistic.service";

const cronJobFunc = async () => {
  let logistic_data = await findData({});

  logistic_data.forEach(async (data, index) => {
    let tracking: string = data.tracking;
    if (tracking && tracking.substring(0, 2) === "1Z") {
      let trackingStatus: any = await upsTrack(tracking);
      if (trackingStatus && trackingStatus?.status?.description) {
        let add = trackingStatus?.status?.description;
        await findAndUpdateData(
          { _id: data._id.toString() },
          { trackingStatus: add },
          { new: true }
        );
      }
    } else {
      let auth = await fedExAuth();
      if (auth?.access_token) {
        let trackingStatus = await fedExTrack(tracking, auth.access_token);
        console.log(trackingStatus);
        if (trackingStatus && trackingStatus?.description) {
          let add = trackingStatus?.description;
          await findAndUpdateData(
            { _id: data._id.toString() },
            { trackingStatus: add },
            { new: true }
          );
        }
      }
    }
  });
};

// const fedExCronJob = async () => {
//   let logistic_data = await findData({});

//   logistic_data.forEach(async (data, index) => {
//     let tracking: string = data.tracking;
//     if (tracking && tracking.substring(0, 2) === "1Z") {
//       let trackingStatus: any = await upsTrack(tracking);
//       if (trackingStatus && trackingStatus?.status?.description) {
//         let add = trackingStatus?.status?.description;
//         await findAndUpdateData(
//           { _id: data._id.toString() },
//           { trackingStatus: add },
//           { new: true }
//         );
//       }
//     }
//   });
// };

export { cronJobFunc };
