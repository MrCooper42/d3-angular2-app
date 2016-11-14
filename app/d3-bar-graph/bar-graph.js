'use strict';

const width = 400;
const height = 300;
const padding = 100;
const barPadding = 5;

d3.json('matches1.json', function(data) {
  console.log(data.matches[0], "first data point");
})

d3.select('body')
.append('h1')
.text('Let\'s build a bar graph!')

const svg = d3.select('body')
.append('svg')
.attr('width', width)
.attr('height', height)
.style('padding', padding)

d3.json('salesData.json', function(data) {
  console.log(data, "data", data[0], "data first index");
  let xScale = d3.scaleBand()
    .domain(data.map((d) => d.day))
    .range([0, width])

  let yScale = d3.scaleLinear()
    .domain([0, d3.max(data, (d) => d.sales)])
    .range([0, height]);

  let xAxis = d3.axisBottom(xScale);

  let yAxis = d3.axisLeft(yScale)
    .ticks(5);

  svg.append('g')
    .attr('transform', `translate(0, ${height})`)
    .call(xAxis);

  svg.append('g')
    .call(yAxis);

  svg.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .on('click', (d) => alert(`Best seller: ${d.bestSeller}`))
    .attr('x', (d, i) => i * (width / data.length))
    .attr('y', (d) => height - yScale(d.sales))
    .attr('width', width / data.length - barPadding)
    .attr('height', (d) => yScale(d.sales))
    .attr('fill', '#3399ff')
      .transition()
      .duration(2000)
      .ease(d3.easeLinear)
    .attr('fill', (d) => {
      let max = d3.max(data, (d) => d.sales);
      let min = d3.min(data, (d) => d.sales);

      if (d.sales === min) {
        return '#ff3300';
      } else if (d.sales === max) {
        return '#66ff66';
      } else {
        return '#3399ff'
      }
    });

    svg.selectAll('text.label')
      .data(data)
      .enter()
      .append('text')
      .attr('class', 'label')
      .text((d) => d.sales)
      .attr('text-anchor', 'middle')
      .attr('x', (d, i) => i * (width / data.length) + (width / data.length - barPadding) / 2)
      .attr('y', (d) => height - yScale(d.sales) + 20)
      .attr('font-family', 'sans-serif')
      .attr('font-size', '11px')
      .attr('fill', 'white');
});
