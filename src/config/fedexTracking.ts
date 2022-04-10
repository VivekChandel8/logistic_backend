import {
  CLIENT_ID,
  CLIENT_SECRET,
  FEDEX_AUTH_ENDPOINT,
  FEDEX_TRACK_ENDPOINT,
  GRANT_TYPE,
} from "./common";
import axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios";

const fedExAuth = async () => {
  var config = {
    method: "POST",
    url: FEDEX_AUTH_ENDPOINT,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: new URLSearchParams({
      grant_type: GRANT_TYPE,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    }),
  };
  let response = await axios(<AxiosRequestConfig>config)
    .then(function (response): string {
      let res = response.data;
      return res;
    })
    .catch(function (error) {
      return error;
    });
  return response;
};
const fedExTrack = async (id: string, auth: string) => {
  const url: string | undefined = FEDEX_TRACK_ENDPOINT;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${auth}`,
  };
  const body = JSON.stringify({
    trackingInfo: [
      {
        trackingNumberInfo: {
          trackingNumber: id,
        },
      },
    ],
    includeDetailedScans: true,
  });
  let response = await axios
    .post(<string>url, body, { headers })
    .then(function (response): string {
      let res = response.data;
      let final_res =
        res?.output?.completeTrackResults[0]?.trackResults[0]
          .latestStatusDetail;
      return final_res;
    })
    .catch(function (error) {
      return error;
    });
  return response;
};

export { fedExAuth, fedExTrack };
