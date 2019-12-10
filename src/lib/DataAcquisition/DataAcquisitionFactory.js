import DataAcquisition from "./DataAcquisition";
import DataAcquisitionRemote from "./DataAcquisitionRemote";
import DataAcquisitionLocal from "./DataAcquisitionLocal";

async function DataAcquisitionFactory(type) {
  let dataAcquisitionInstance = null;

  switch (type) {
    case DataAcquisition.TYPES.LOCAL: {
      dataAcquisitionInstance = new DataAcquisitionLocal();
      break;
    }

    case DataAcquisition.TYPES.REMOTE: {
      dataAcquisitionInstance = new DataAcquisitionRemote();
      break;
    }

    default: {
      /* ERROR SOMETHING WENT WRONG */
    }
  }

  await dataAcquisitionInstance.fetchDataPoints();

  return dataAcquisitionInstance;
}

DataAcquisitionFactory.TYPES = DataAcquisition.TYPES;

export default DataAcquisitionFactory;
