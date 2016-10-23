import {FixedScaleAxis} from './fixed-scale-axis';

describe('FixedScaleAxis', function () {
  it('should order the tick array', function () {
    var ticks = [10, 5, 0, -5, -10];
    var axisUnit = {
      pos: 'y',
      len: 'height',
      dir: 'vertical',
      rectStart: 'y2',
      rectEnd: 'y1',
      rectOffset: 'x1'
    };
    var data = [[{x: 1, y: 10}, {x: 2, y: 5}, {x: 3, y: -5}]];
    var chartRect = {
      'padding': {'top': 15, 'right': 15, 'bottom': 5, 'left': 10},
      'y2': 15,
      'y1': 141,
      'x1': 50,
      'x2': 269
    };
    var options = {
      'offset': 40,
      'position': 'start',
      'labelOffset': {'x': 0, 'y': 0},
      'showLabel': true,
      'showGrid': true,
      'scaleMinSpace': 20,
      'onlyInteger': false,
      'ticks': ticks
    };
    var fsaxis = new FixedScaleAxis(axisUnit, data, chartRect, options);
    expect(fsaxis.ticks).toEqual([-10, -5, 0, 5, 10]);
  });
});