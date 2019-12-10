import DataAcquisition from "./DataAcquisition";
import Auth from "../Auth/Auth";

class DataAcquisitionRemote extends DataAcquisition {
  get name() {
    return "Remote Data";
  }

  async fetchDataPoints() {
    const data = await this.getData();

    this.points = this.formatData(data);
  }

  async getData() {
    const token = await Auth.fetchToken();

    const httpResponse = await fetch(this.apiEndpoint, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const json = await httpResponse.json();

    return json;
  }

  get apiEndpoint() {
    return "https://domainservices.dhigroup.com/api/timeseries/mclite-timeseries/Telemetry%7CCatchment%20rainfall%7C6790_HUDINJA_SKOFJA_VAS_Rainfall.dfs0%20%5Bweighted%5D/values";
  }
}

export default DataAcquisitionRemote;
