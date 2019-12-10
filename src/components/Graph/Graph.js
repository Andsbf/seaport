import React from "react";
/* Using the plotly.js-basic-dist instead of plotly.js because
plotly.js lib leads to heaps issues when building the project.
This is an known issue to at the library, link below:
https://github.com/plotly/react-plotly.js/issues/135
*/
import Plotly from "plotly.js-basic-dist";
import createPlotlyComponent from "react-plotly.js/factory";
const Plot = createPlotlyComponent(Plotly);

export default function Graph({ data }) {
  return (
    <Plot
      data={[
        {
          x: data.points.x,
          y: data.points.y,
          type: "scatter",
          mode: "lines+points",
          marker: { color: "red" }
        }
      ]}
      layout={{
        title: data.name,
        autosize: true
      }}
      useResizeHandler={true}
      style={{ width: "100%", height: "100%" }}
    />
  );
}
