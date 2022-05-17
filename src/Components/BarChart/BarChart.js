import * as d3 from "d3";
import React, { useRef, useEffect } from "react";

const BarChart = ({ width, height, data }) => {
  const ref = useRef();

  useEffect(() => {
    const svg = d3
      .select(ref.current)
      .attr("width", width)
      .attr("height", height)
      .style("overflow", "visible");
  }, []);

  useEffect(() => {
    draw();
  }, [data]);

  const draw = () => {
    const svg = d3.select(ref.current);
    var selection = svg.selectAll("rect").data(data);
    var yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .range([0, height - 100]);

    selection
      .transition()
      .duration(1500)
      .attr("height", (d) => yScale(d))
      .attr("y", (d) => height - yScale(d))
      .attr("fill", function (d) {
        return "rgb(" + Math.round(d * 8) + ",0," + Math.round(d * 10) + ")"; //Change the color of the bar depending on the value
      });

    selection
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 45)
      .attr("y", (d) => height)
      .attr("width", 40)
      .attr("height", 0)
      .attr("fill", function (d) {
        return "rgb(" + Math.round(d * 8) + ",0," + Math.round(d * 10) + ")"; //Change the color of the bar depending on the value
      })
      .transition()
      .duration(1500)
      .attr("height", (d) => yScale(d))
      .attr("y", (d) => height - yScale(d));

    selection
      .exit()
      .transition()
      .duration(1500)
      .attr("y", (d) => height)
      .attr("height", 0)
      .remove();
  };

  return (
    <div className="chart">
      <svg ref={ref}></svg>
    </div>
  );
};

export default BarChart;
