import axios from "axios";

const containerNumber = "MRSU1344054";

export async function testMaerskTracking() {
  try {
    const response = await axios.get(
      `https://api.maersk.com/synergy/tracking/${containerNumber}`,
      {
        params: {
          operator: "MAEU",
        },
        headers: {
          accept: "application/json",
          "api-version": "v2",
        },
      }
    );

    console.log("Request successful");
    console.log(response.data);
  } catch (error) {
    console.error("Maersk request failed");

    if (axios.isAxiosError(error)) {
      console.error("Status:", error.response?.status);
      console.error("Response:", error.response?.data);
    } else {
      console.error(error);
    }
  }
}

