class DataAcquisition {
  static TYPES = {
    LOCAL: "LOCAL",
    REMOTE: "REMOTE"
  };

  constructor() {
    this.points = {
      x: [],
      y: []
    };
  }

  get name() {
    /* to be implemente by subclass */
    return "";
  }

  async fetchDataPoints() {
    const data = await this.getData();

    this.points = this.formatData(data);
  }

  async getData() {
    /* to be implemente by subclass */
    return [];
  }

  formatData(data) {
    const points = {
      x: [],
      y: []
    };

    this.filterInvalidPoints(data).forEach(([x, y]) => {
      points.x.push(x);
      points.y.push(y);
    });

    return points;
  }

  filterInvalidPoints(data) {
    return data.filter(this.validatePoint);
  }

  validatePoint([x, y]) {
    return (
      new Date(x).toDateString() !== "Invalid Date" && typeof y === "number"
    );
  }
}

export default DataAcquisition;
