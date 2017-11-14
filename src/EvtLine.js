import * as echarts from 'echarts/src/echarts';
import * as zrUtil from 'zrender/src/core/util';

import './LineSeries';
import './LineView';
import visualSymbol from 'echarts/src/visual/symbol';
import layoutPoints from 'echarts/src/layout/points';
import dataSample from 'echarts/src/processor/dataSample';
// In case developer forget to include grid component
import 'echarts/src/component/gridSimple';

echarts.registerVisual(zrUtil.curry(
    visualSymbol, 'evtline', 'circle', 'evtline'
));
echarts.registerLayout(zrUtil.curry(
    layoutPoints, 'evtline'
));

// Down sample after filter
echarts.registerProcessor(echarts.PRIORITY.PROCESSOR.STATISTIC, zrUtil.curry(
    dataSample, 'evtline'
));
