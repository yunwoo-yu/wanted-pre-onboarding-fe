import axios from "axios";

const apiUrl =
  "https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production";

const headerType = "Content-Type:applocation/json";
const access_token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwic3ViIjo0LCJpYXQiOjE2NTk5MDQyMTUsImV4cCI6MTY2MDUwOTAxNX0.DyUCCsIGxIl8i_sGFCa3uQcyEDb9dChjbl40h3JWJNc";

export const userInstance = axios.create({
  baseURL: apiUrl,
  headers: { headerType },
});

export const todoInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: access_token,
  },
});

export const createPutTodoInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    headerType,
    Authorization: access_token,
  },
});
