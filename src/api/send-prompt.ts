import axios from "axios";
import { getSession } from "../utils/session";
import { LANGFLOW_URI, TEST_MODE } from "../config";

type Opts = {
  token: string;
  trend: boolean;
};

type Payload = {
  trend?: string;
  text?: string;
  sessionInfo: {
    session: string;
    parameters: {
      test: boolean;
    };
  };
};

const sendPrompt = async (
  queryText: string,
  opts: Opts,
  country: string = "au",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> => {
  try {
    const payload: Payload = {
      sessionInfo: {
        session: getSession(),
        parameters: {
          test: TEST_MODE,
        },
      },
    };

    const countryParam = country === "global" ? "" : country;

    if (opts.trend) {
      payload.trend = queryText;
    } else {
      payload.text = queryText;
    }

    const { data } = await axios.post(LANGFLOW_URI, payload, {
      params: {
        country: countryParam,
      },
      headers: {
        Authorization: `Bearer ${opts.token}`,
      },
      withCredentials: true,
    });

    if (!data.richContent) {
      return {
        products: [],
        chips: [],
        message: data.textMessage,
        status: false,
      };
    }

    return {
      products: data.richContent.products || [],
      chips: data.richContent.chips,
      message: data.textMessage,
      status: true,
    };
  } catch (err) {
    console.error(err);
    return {
      products: [],
      chips: [],
      message: "I can't fetch the results right now. Please try again later.",
      status: false,
    };
  }
};

export default sendPrompt;
