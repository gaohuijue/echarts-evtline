define(function (require) {
    var zrUtil = require('zrender/lib/core/util');
    var PRIORITY = echarts.PRIORITY;

    require('./LineSeries');
    require('./LineView');

    echarts.registerVisual(zrUtil.curry(
        require('echarts/lib/visual/symbol'), 'evtline', 'circle', 'evtline'
    ));
    echarts.registerLayout(zrUtil.curry(
        require('echarts/lib/layout/points'), 'evtline'
    ));

    // Down sample after filter
    echarts.registerProcessor(PRIORITY.PROCESSOR.STATISTIC, zrUtil.curry(
        require('echarts/lib/processor/dataSample'), 'evtline'
    ));

    // In case developer forget to include grid component
    require('echarts/lib/component/gridSimple');
});
