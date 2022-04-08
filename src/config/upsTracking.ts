import { UPS_ACCESS_KEY, UPS_PASSWORD, UPS_URL, UPS_USERNAME } from "./common";
import axios, { AxiosRequestConfig } from "axios";

const upsTrack = async (id: string) => {
  var config = {
    method: "get",
    url: `${UPS_URL}${id}`,
    headers: {
      AccessLicenseNumber: UPS_ACCESS_KEY,
      Username: UPS_USERNAME,
      Password: UPS_PASSWORD,
    },
  };
  let response = await axios(<AxiosRequestConfig>config)
    .then(function (response): string {
      let res = response.data;
      let final_res = res?.trackResponse?.shipment[0]?.package[0].activity[0];
      return final_res;
    })
    .catch(function (error) {
      return error;
    });
  return response;
};

export default upsTrack;
