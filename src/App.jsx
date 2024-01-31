import { useEffect, useState } from "react";
import "./App.css";
import { Form, Result } from "./components";

import SurfaceSDK, { Command, View } from "@pipedrive/app-extensions-sdk";
const sdk = new SurfaceSDK();

import pipedrive from "pipedrive";
const defaultClient = new pipedrive.ApiClient();
defaultClient.authentications.api_key.apiKey = "e1ba9b2a3279d7f1f9c42589923c1a11b74bd5ac";

function App() {
  // states
  const [isLoading, setIsLoading] = useState(false);
  const [dealId, setDealId] = useState(null);

  const [formData, setFormData] = useState({
    firstName: null,
    lastName: null,
    phone: null,
    email: null,
    jobType: null,
    jobSource: null,
    jobDesc: null,
    address: null,
    city: null,
    state: null,
    zipcode: null,
    area: null,
    startDate: null,
    startTime: null,
    endTime: null,
    technician: null,
  });

  // handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  function handleSumbit(e) {
    e.preventDefault();
    addDeal();
  }

  async function redirectToDeal() {
    await sdk.execute(Command.REDIRECT_TO, {
      view: View.DEALS,
      id: dealId,
    });
    await sdk.execute(Command.CLOSE_MODAL);
  }

  // functions
  async function addDeal() {
    try {
      setIsLoading(true);

      const api = new pipedrive.DealsApi(defaultClient);
      const { firstName, lastName, phone, email, jobType, jobSource, jobDesc, address, city, state, zipcode, area, startDate, startTime, endTime, technician } = formData;

      let opts = pipedrive.NewDeal.constructFromObject({
        "title": `${firstName} ${lastName}`,
        "1315bcc8e03c837c91bdf2d7db199f76f5f6b61f": firstName,
        "acbc07998ff697ef83125779fe67db04800de9eb": lastName,
        "ae5c06403794960e64a75abaa75aeb1d97f4bcf2": phone,
        "df36600d735db774955f2e35ee2d1ece55907051": email,
        "121652394b7d1931e815b7fb033445a1e864209c": jobType,
        "b58fdc7e1a1b92f83b91308386796be99524522f": jobSource,
        "e35baa5e5056b8202713edd9515a5721a38efbb1": jobDesc,
        "5887959b35f6482141178cccd11199304de2027b": address,
        "2f78ff0aa5b20046d14921b38834f0f8d8ad35ba": city,
        "eeeff9bd515dbad502cf286935d54991b25f17ff": state,
        "a170245e6572ff87084771597dce8709ac6f9225": zipcode,
        "ed5c51664df2d5143aecce13dace9e89f495ca82": area,
        "90749e2d33ef526f6bed1577de4517119b31f2a1": startDate,
        "8062bac8b9f425d3382b616ea49688843d703d57": startTime,
        "4eed049ff3be09fe2e9ec76ec4b2c438bfeb5803": endTime,
        "859f6c766b87158de65fc75c8ebcdd0fe7bfc51d": technician,
      });

      const response = await api.addDeal(opts);

      if (response.success) {
        const notesApi = new pipedrive.NotesApi(defaultClient);
        await notesApi.addNote({
          content: `Job successfully created! Deal id - ${response.data.id}`,
          deal_id: response.data.id,
        });

        await notesApi.addNote({
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque mollitia explicabo, recusandae commodi maxime rem alias deleniti repellendus quos consectetur consequatur pariatur.",
          deal_id: response.data.id,
        });

        setDealId(response.data.id);
      }
    } catch (err) {
      const errorToLog = err.context?.body || err;
      console.log("Adding failed", errorToLog);
    }
  }

  // first render
  useEffect(() => {
    sdk.initialize({ size: { height: 650, width: 1000 } });
  }, []);

  return (
    <>
      {dealId ? <Result redirectToDeal={redirectToDeal} />
        : <Form handleChange={handleChange} handleSumbit={handleSumbit} formData={formData} isLoading={isLoading} /> 
      }
    </>
  );
}

export default App;
