import DataAcquisition from "./DataAcquisition";
import localFile from "./timeseriesdata.json";

class DataAcquisitionLocal extends DataAcquisition {
  get name() {
    return "Local Data";
  }

  async fetchDataPoints() {
    const data = this.getData();

    this.points = this.formatData(data);
  }

  getData() {
    return localFile;
  }
}

export default DataAcquisitionLocal;
