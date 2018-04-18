/**
 * Leaflet 示例配置文件：包含示例的分类、名称、缩略图、文件路径
 */
var identification = {
    name: "Leaflet"
};
var exampleConfig = {
    "iServer": {
        name: "iServer",
        name_en: "iServer",
        content: {
            "map": {
                name: "地图",
                name_en: "map service",
                content: [{
                    name: "4326底图",
                    name_en: "4326 coordinate system",
                    thumbnail: "l_tiledMapLayer4326.png",
                    fileName: "01_tiledMapLayer4326"
                }, {
                    name: "3857底图",
                    name_en: "3857 coordinate system",
                    thumbnail: "l_tiledMapLayer3857.png",
                    fileName: "01_tiledMapLayer3857"
                }, {
                    name: "4326底图(image)",
                    name_en: "4326 coordinate system(image)",
                    thumbnail: "l_imageMapLayer4326.png",
                    fileName: "01_imageMapLayer4326"
                }, {
                    name: "3857底图(image)",
                    name_en: "3857 coordinate system(image)",
                    thumbnail: "l_imageMapLayer3857.png",
                    fileName: "01_imageMapLayer3857"
                }, {
                    name: "地图叠加",
                    name_en: "overlay tile layer",
                    thumbnail: "l_overlayTiledMapLayer.png",
                    fileName: "01_overlayTiledMapLayer"

                }, {
                    name: "平面坐标系底图",
                    name_en: "planar coordinate system",
                    thumbnail: "l_tiledMapLayerNonEarth.png",
                    fileName: "01_tiledMapLayerNonEarth"
                }, {
                    name: "自定义比例尺",
                    name_en: "custom scale",
                    thumbnail: "l_tiledMapLayerProj4.png",
                    fileName: "01_tiledMapLayerProj4"
                }, {
                    name: "地图信息",
                    name_en: "map query service",
                    thumbnail: "l_mapService.png",
                    fileName: "01_mapService"

                }, {
                    name: "距离测量",
                    name_en: "distance measurement service",
                    thumbnail: "l_measure-distance.png",
                    fileName: "01_measure_distance"
                }, {
                    name: "面积测量",
                    name_en: "area measurement service",
                    thumbnail: "l_measure-area.png",
                    fileName: "01_measure_area"
                }, {
                    name: "图层信息",
                    name_en: "layer service",
                    thumbnail: "l_layerService.png",
                    fileName: "01_layerService"
                }, {
                    name: "范围查询",
                    name_en: "bounds query",
                    thumbnail: "l_mapQueryByBounds.png",
                    fileName: "01_mapQueryByBounds"
                }, {
                    name: "距离查询",
                    name_en: "distance query",
                    thumbnail: "l_mapQueryByDistance.png",
                    fileName: "01_mapQueryByDistance"
                }, {
                    name: "几何查询",
                    name_en: "geometry query",
                    thumbnail: "l_mapQueryByGeometry.png",
                    fileName: "01_mapQueryByGeometry"
                }, {
                    name: "SQL查询",
                    name_en: "SQL query",
                    thumbnail: "l_mapQueryBySQL.png",
                    fileName: "01_mapQueryBySQL"
                }]
            },
            "data": {
                name: "数据",
                name_en: "data service",
                content: [{
                    name: "ID查询",
                    name_en: "ID query",
                    thumbnail: "l_getFeatureByIDs.png",
                    fileName: "02_getFeatureByIDs"
                }, {
                    name: "SQL查询",
                    name_en: "SQL query",
                    thumbnail: "l_getFeatureBySQL.png",
                    fileName: "02_getFeatureBySQL"
                }, {
                    name: "范围查询",
                    name_en: "bounds query",
                    thumbnail: "l_getFeatureByBounds.png",
                    fileName: "02_getFeatureByBounds"
                }, {
                    name: "几何查询",
                    name_en: "geometry query",
                    thumbnail: "l_getFeatureByGeometry.png",
                    fileName: "02_getFeatureByGeometry"
                }, {
                    name: "缓冲区查询",
                    name_en: "buffer query",
                    thumbnail: "l_getFeatureByBuffer.png",
                    fileName: "02_getFeatureByBuffer"
                }, {
                    name: "栅格查询",
                    name_en: "data gridcell query",
                    thumbnail: "l_getGridCellInfos.png",
                    fileName: "02_getGridCellInfos"
                }, {
                    name: "字段信息",
                    name_en: "field service",
                    thumbnail: "l_fieldsService.png",
                    fileName: "02_fieldsService"
                }, {
                    name: "字段查询统计",
                    name_en: "field statistics service",
                    thumbnail: "l_fieldStatistics.png",
                    fileName: "02_fieldStatistics"
                }, {
                    name: "地物编辑",
                    name_en: "data editing",
                    thumbnail: "l_editFeatures.png",
                    fileName: "02_editFeatures"
                }]
            },
            "theme": {
                name: "专题图",
                name_en: "server thematic service",
                content: [{
                    name: "点密度专题图",
                    name_en: "dot density",
                    thumbnail: "l_themeDotDensity.png",
                    fileName: "03_themeDotDensity"
                }, {
                    name: "等级符号专题图",
                    name_en: "graduated symbol",
                    thumbnail: "l_themeGraduatedSymbol.png",
                    fileName: "03_themeGraduatedSymbol"
                }, {
                    name: "统计专题图",
                    name_en: "statistical chart",
                    thumbnail: "l_themeGraph.png",
                    fileName: "03_themeGraph"
                }, {
                    name: "矩阵标签专题图",
                    name_en: "label",
                    thumbnail: "l_themeLabel.png",
                    fileName: "03_themeLabel"
                }, {
                    name: "分段专题图",
                    name_en: "range",
                    thumbnail: "l_themeRange.png",
                    fileName: "03_themeRange"
                }, {
                    name: "单值专题图",
                    name_en: "unique",
                    thumbnail: "l_themeUnique.png",
                    fileName: "03_themeUnique"
                }, {
                    name: "栅格分段专题图",
                    name_en: "grid range",
                    thumbnail: "l_themeGridRange.png",
                    fileName: "03_themeGridRange"
                }, {
                    name: "栅格单值专题图",
                    name_en: "grid unique",
                    thumbnail: "l_themeGridUnique.png",
                    fileName: "03_themeGridUnique"
                }]
            },
            "spatialAnalyst": {
                name: "空间分析",
                name_en: "spatial analysis service",
                content: [{
                    name: "数据集缓冲区分析",
                    name_en: "buffer",
                    thumbnail: "l_bufferAnalystService.png",
                    fileName: "04_bufferAnalystService"
                }, {
                    name: "几何对象缓冲区分析",
                    name_en: "buffer-geometry",
                    thumbnail: "l_bufferAnalystService-geometry.png",
                    fileName: "04_bufferAnalystService_geometry"
                }, {
                    name: "数据集泰森多边形",
                    name_en: "thiessen-dataset",
                    thumbnail: "l_thiessenAnalystService-datasets.png",
                    fileName: "04_thiessenAnalystService_datasets"
                }, {
                    name: "几何泰森多边形",
                    name_en: "thiessen-geometry",
                    thumbnail: "l_thiessenAnalystService-geometry.png",
                    fileName: "04_thiessenAnalystService_geometry"
                }, {
                    name: "叠加分析",
                    name_en: "overlay",
                    thumbnail: "l_overlayAnalystService.png",
                    fileName: "04_overlayAnalystService"
                }, {
                    name: "表面分析",
                    name_en: "surface",
                    thumbnail: "l_surfaceAnalystService.png",
                    fileName: "04_surfaceAnalystService"
                }, {
                    name: "动态分段",
                    name_en: "dynamic segmentation",
                    thumbnail: "l_generateSpatialDataService.png",
                    fileName: "04_generateSpatialDataService"
                }, {
                    name: "点定里程",
                    name_en: "route calculate measure",
                    thumbnail: "l_routeCalculateMeasureService.png",
                    fileName: "04_routeCalculateMeasureService"
                }, {
                    name: "里程定点",
                    name_en: "route locator - point",
                    thumbnail: "l_routeLocatorService_point.png",
                    fileName: "04_routeLocatorService_point"
                }, {
                    name: "里程定线",
                    name_en: "route locator - line",
                    thumbnail: "l_routeLocatorService_line.png",
                    fileName: "04_routeLocatorService_line"
                }, {
                    name: "点密度插值分析",
                    name_en: "point density analysis",
                    thumbnail: "l_interpolationAnalystService-Density.png",
                    fileName: "04_interpolationAnalystService_Density"
                }, {
                    name: "反距离加权插值分析",
                    name_en: "inverse distance weighted analysis",
                    thumbnail: "l_interpolationAnalystService-IDW-dataset.png",
                    fileName: "04_interpolationAnalystService_IDW_dataset"
                }, {
                    name: "普通克吕金插值分析",
                    name_en: "Kriging interpolation",
                    thumbnail: "l_interpolationAnalystService-Kriging.png",
                    fileName: "04_interpolationAnalystService_Kriging"
                }, {
                    name: "泛克吕金插值分析",
                    name_en: "KrigingUniversal interpolation",
                    thumbnail: "l_interpolationAnalystService_KrigingUniversal.png",
                    fileName: "04_interpolationAnalystService_KrigingUniversal"
                }, {
                    name: "径向基函数插值分析",
                    name_en: "radial basis function interpolation",
                    thumbnail: "l_interpolationAnalystService_RBF.png",
                    fileName: "04_interpolationAnalystService_RBF"
                }, {
                    name: "离散点插值分析",
                    name_en: "discrete point interpolation",
                    thumbnail: "l_interpolationAnalystService_IDW_geometry.png",
                    fileName: "04_interpolationAnalystService_IDW_geometry"
                }, {
                    name: "地形曲率计算",
                    name_en: "terrain curvature calculation",
                    thumbnail: "l_terrainCurvatureCalculationService.png",
                    fileName: "04_terrainCurvatureCalculationService"
                }, {
                    name: "栅格代数运算",
                    name_en: "math expression",
                    thumbnail: "l_mathExpressionAnalysisService.png",
                    fileName: "04_mathExpressionAnalysisService"
                }, {
                    name: "核密度分析",
                    name_en: "kernel density",
                    thumbnail: "l_densityKernelAnalystService.png",
                    fileName: "04_densityKernelAnalystService"
                }, {
                    name: "几何对象批量空间分析",
                    name_en: "batchAnalyst_geometry",
                    thumbnail: "l_geometryBatchAnalystService.png",
                    fileName: "04_geometryBatchAnalystService"
                }, {
                    name: "几何对象批量叠加分析",
                    name_en: "overlayBatchAnalyst_geometry",
                    thumbnail: "l_geometryOverlayBatchAnalystService.png",
                    fileName: "04_geometryOverlayBatchAnalystService"
                }]
            },
            "networkAnalyst": {
                name: "网络分析",
                name_en: "network analysis service",
                content: [{
                    name: "服务区分析",
                    name_en: "service area",
                    thumbnail: "l_findServiceAreas.png",
                    fileName: "05_findServiceAreas"
                }, {
                    name: "最近设施分析",
                    name_en: "closest facilities",
                    thumbnail: "l_findClosetFacilitiesService.png",
                    fileName: "05_findClosestFacilitiesService"
                }, {
                    name: "选址分区分析",
                    name_en: "find location",
                    thumbnail: "l_findLocationService.png",
                    fileName: "05_findLocationService"
                }, {
                    name: "多旅行商分析-物流配送",
                    name_en: "multi-traveler - logistics",
                    thumbnail: "l_findMTSPPathsService.png",
                    fileName: "05_findMTSPPathsService"
                }, {
                    name: "旅行商分析-质检巡查",
                    name_en: "traveler - quality inspection",
                    thumbnail: "l_findTSPPathsService.png",
                    fileName: "05_findTSPPathsService"
                }, {
                    name: "最佳路径分析",
                    name_en: "best path",
                    thumbnail: "l_findPathService.png",
                    fileName: "05_findPathService"
                }]
            },
            "trafficTransferAnalyst": {
                name: "交通换乘",
                name_en: "traffic transfer analysis",
                content: [{
                    name: "交通换乘",
                    name_en: "traffic transfer",
                    thumbnail: "l_trafficTransferAnalystService.png",
                    fileName: "06_trafficTransferAnalystService"
                }]
            },
            "processingService": {
                name: "分布式分析",
                name_en: "distributed analysis services",
                content: [{
                    name: "密度分析",
                    name_en: "density",
                    thumbnail: "kernelDensityJobService.png",
                    fileName: "kernelDensityJobService"
                }, {
                    name: "点聚合分析",
                    name_en: "mesh summary",
                    thumbnail: "SummaryMeshJobService.png",
                    fileName: "SummaryMeshJobService"
                }, {
                    name: "单对象查询分析",
                    name_en: "single object query",
                    thumbnail: "l_singleObjectQueryJob.png",
                    fileName: "singleObjectQueryJobService"
                }, {
                    name: "叠加分析",
                    name_en: "overlay",
                    thumbnail: "l_overlayJobService.png",
                    fileName: "overlayGeoJobService"
                }, {
                    name: "缓冲区分析",
                    name_en: "buffer",
                    thumbnail: "l_buffersAnalystJobService.png",
                    fileName: "buffersAnalystJobService"
                }, {
                    name: "区域汇总分析",
                    name_en: "regional summary",
                    thumbnail: "SummaryRegionJobService.png",
                    fileName: "SummaryRegionJobService"
                }, {
                    name: "矢量裁剪分析",
                    name_en: "vector clip",
                    thumbnail: "l_vectorClipJob.png",
                    fileName: "vectorClipJobService"
                }, {
                    name: "属性汇总分析",
                    name_en: "summary attributes",
                    thumbnail: "l_summaryAttributes.png",
                    fileName: "summaryAttributesJobService"
                }, {
                    name: "拓扑检查分析",
                    name_en: "topology validator",
                    thumbnail: "l_topologyValidatorJobService.png",
                    fileName: "topologyValidatorJobService"
                }]
            },
            "addressMatch": {
                name: "地址匹配",
                name_en: "address matching service",
                content: [{
                    name: "地址匹配",
                    name_en: "address match",
                    thumbnail: "l_addressService.png",
                    fileName: "addressMatchService"
                }]
            },
            "dataFlow": {
                name: "实时数据",
                name_en: "data flow service",
                content: [{
                    name: "实时数据",
                    name_en: "data flow",
                    thumbnail: "dataflow.gif",
                    fileName: "dataFlowService"
                }]
            },
            "security": {
                name: "安全",
                name_en: "security",
                content: [{
                    name: "安全认证",
                    name_en: "security certification",
                    thumbnail: "l_iserver_security.png",
                    fileName: "iServerSecurity"
                }]
            }
        }
    },
    "iPortal": {
        name: "iPortal",
        name_en: "iPortal",
        content: {
            "ip_map": {
                name: "地图",
                name_en: "web map",
                content: [{
                    name: "举办过奥运会的城市",
                    name_en: "city hosted the Olympic Games",
                    thumbnail: "l_iPortalWebmap.png",
                    fileName: "iPortalWebmap"
                }]
            },
            "ip_security": {
                name: "安全",
                name_en: "security",
                content: [{
                    name: "安全认证",
                    name_en: "security certification",
                    thumbnail: "l_iportalSecurity.png",
                    fileName: "iPortalSecurity"
                }]
            },
            "ip_querymaps": {
                name: "地图列表",
                name_en: "web map list",
                content: [{
                    name: "地图列表",
                    name_en: "web map list",
                    thumbnail: "l_iPortalQueryMaps.png",
                    fileName: "iPortalQueryMaps"
                }]
            }
        }
    },
    "Online": {
        name: "Online",
        name_en: "Online",
        content: {
            "ol_map": {
                name: "地图",
                name_en: "web map",
                content: [{
                    name: "黄龙溪徒步",
                    name_en: "Huanglongxi walking",
                    thumbnail: "l_onlineWebmap.png",
                    fileName: "onlineWebmap"
                }]
            },
            "ol_security": {
                name: "安全",
                name_en: "security",
                content: [{
                    name: "安全认证",
                    name_en: "security certification",
                    thumbnail: "l_onlineSecurity.png",
                    fileName: "onlineSecurity"
                }]
            }
        }
    },
    "iManager": {
        name: "iManager",
        name_en: "iManager",
        content: {
            "im_node": {
                name: "节点",
                name_en: "node",
                content: [{
                    name: "节点管理",
                    name_en: "node management",
                    thumbnail: "imanagerNodeManager.png",
                    fileName: "iManagerNodeManager"
                }]
            }
        }
    },
    "Elasticsearch": {
        name: "Elasticsearch",
        name_en: "Elasticsearch",
        content: {
            "es_viz": {
                name: "可视化",
                name_en: "visualization",
                content: [{
                    name: "热力/格网图",
                    name_en: "heat/grid map",
                    thumbnail: "l_ESHeatMap.gif",
                    fileName: "ESHeatMap"
                }, {
                    name: "航班监控",
                    name_en: "flight monitor",
                    thumbnail: "l_PlanesMonitor.gif",
                    fileName: "PlanesMonitor"
                }]
            }
        }
    },
    "viz": {
        name: "可视化",
        name_en: "visualization",
        content: {
            "heat": {
                name: "热力图",
                name_en: "heat map",
                content: [{
                    name: "随机点",
                    name_en: "random points",
                    thumbnail: "l_heat.png",
                    fileName: "12_heatMap"
                }, {
                    name: "纽约出租车上车点",
                    name_en: "NY taxi car point",
                    thumbnail: "l_heatmap_nyc.png",
                    fileName: "12_heatMap_NY"
                }, {
                    name: "随机点(Classic)",
                    name_en: "random points (Classic)",
                    thumbnail: "l_heatMapLayer.png",
                    fileName: "heatMapLayer"
                }, {
                    name: "2000年到2015年地震热力图(Classic)",
                    name_en: "Earthquake heat map (2000-2015)",
                    thumbnail: "l_earthquakeHeatMap.png",
                    fileName: "earthquakeHeatMap"
                }]
            },
            "animate": {
                name: "动画",
                name_en: "animation",
                content: [{
                    name: "闪烁点",
                    name_en: "flashing points",
                    thumbnail: "l_pulse.gif",
                    fileName: "12_pulse"
                }]
            },
            "cluster": {
                name: "聚合",
                name_en: "cluster",
                content: [{
                    name: "点聚合",
                    name_en: "marker cluster",
                    thumbnail: "l_markerCluster.png",
                    fileName: "12_markerCluster"
                }]
            },
            "graphicLayer": {
                name: "高效率点图层",
                name_en: "high efficiency point layer",
                content: [
                    {
                        name: "纽约出租车18万点",
                        name_en: "points of 180K NY taxis",
                        thumbnail: "l_graphicLayer.png",
                        fileName: "12_graphicLayer"
                    }, {
                        name: "随机点-三叶草",
                        name_en: "random points(clover)",
                        thumbnail: "l_graphicLayerClover.png",
                        fileName: "12_graphicLayerClover"
                    }, {
                        name: "纽约18万出租车-符号绘制",
                        name_en: "picture drawing of 180K NY taxis",
                        thumbnail: "l_graphicLayerImage.png",
                        fileName: "12_graphicLayerImage"
                    }
                ]
            },
            // "D3Theme": {
            //     name: "D3-单值专题图",
            //     content: null
            // },
            "ECharts": {
                name: "ECharts",
                name_en: "ECharts",
                content: [
                    {
                        name: "全国空气质量图",
                        name_en: "scatter",
                        thumbnail: "l_echartsEffectScatter.png",
                        fileName: "echartsEffectScatter"
                    }, {
                        name: "迁徙图",
                        name_en: "migration",
                        thumbnail: "l_echartsGeoLines.gif",
                        fileName: "echartsGeoLines"
                    }, {
                        name: "热力图",
                        name_en: "heat map",
                        thumbnail: "l_echartsHeatmap.png",
                        fileName: "echartsHeatmap"
                    }, {
                        name: "线路图",
                        name_en: "line",
                        thumbnail: "l_echartsLinesBus.png",
                        fileName: "echartsLinesBus"
                    }, {
                        name: "线特效",
                        name_en: "line effect",
                        thumbnail: "l_echartsLinesEffect.gif",
                        fileName: "echartsLinesEffect"
                    }, {
                        name: "折线图",
                        name_en: "line chart",
                        thumbnail: "l_echartsLineMarker.png",
                        fileName: "echartsLineMarker"
                    }, {
                        name: "柱状图",
                        name_en: "bar chart",
                        thumbnail: "l_echartsBar.png",
                        fileName: "echartsBar"
                    }, {
                        name: "散点图",
                        name_en: "scatter chart",
                        thumbnail: "l_echartsScatter.png",
                        fileName: "echartsScatter"
                    }, {
                        name: "饼图",
                        name_en: "pie chart",
                        thumbnail: "l_echartsPie.png",
                        fileName: "echartsPie"
                    }, {
                        name: "世界飞机航线图",
                        name_en: "Airplane route map",
                        thumbnail: "l_echartsLinesAirline.png",
                        fileName: "echartsLinesAirline"
                    }, {
                        name: "微博签到图",
                        name_en: "weibo scatter",
                        thumbnail: "l_echartsScatterWeibo.png",
                        fileName: "echartsScatterWeibo"
                    }, {
                        name: "方形图",
                        name_en: "binning on Map",
                        thumbnail: "l_echartsCellMap.png",
                        fileName: "echartsCellMap"
                    }, {
                        name: "2008到2017年地震情况统计",
                        name_en: "2008 to 2017 years of earthquake statistics",
                        thumbnail: "l_echartsEarthquake.png",
                        fileName: "echartsEarthquake"
                    }, {
                        name: "2018年2月北京房价",
                        name_en: "Beijing house prices of Lianjia(2018.2)",
                        thumbnail: "l_echartsLianjiaGridLayer.png",
                        fileName: "echartsGridMapLayer"
                    }, {
                        name: "2百万点数据绘制北京道路网络图",
                        name_en: "Use lines to draw 2 millions Beijing streets",
                        thumbnail: "l_echartsLinesMillionsBeijingRoads.png",
                        fileName: "echarts_linesDrawMillionsBeijingRoadsNetwork"
                    }, {
                        name: "4百万点数据绘制全国铁路网络图",
                        name_en: "Use lines to draw 4 millions Chinese railways",
                        thumbnail: "l_echartsLinesMillionsRailway.png",
                        fileName: "echarts_linesDrawMillionsRailwaysNetwork"
                    }, {
                        name: "1千4百万数据绘制全国水系图",
                        name_en: "Use lines to draw 14 millions Chinese water system",
                        thumbnail: "l_echartsLinesMillionsWaterSystem.png",
                        fileName: "echarts_linesDrawMillionsWaterSystem"
                    }, {
                        name: "2千5百万数据绘制全国道路网络图",
                        name_en: "Use lines to draw 25 millions Chinese roads",
                        thumbnail: "l_echartsLinesMillionsRoads.png",
                        fileName: "echarts_linesDrawMillionsRoadsNetwork_50WFeatures"
                    }, {
                        name: "1百40万数据绘制纽约出租车分布图",
                        name_en: "Use scatter to draw 1.4 millions New York Taxi Points",
                        thumbnail: "l_echartScatterMillionsNewYorkTaxi.png",
                        fileName: "echarts_scatterDrawMillionsNewYorkTaxiPoints"
                    }
                ]

            },
            "MapV": {
                name: "MapV",
                name_en: "MapV",
                content: [{
                    name: "蜂巢图",
                    name_en: "honeycomb",
                    thumbnail: "l_mapVLayer_honeycomb.png",
                    fileName: "mapVLayerHoneycomb"
                }, {
                    name: "纽约出租车上车点",
                    name_en: "NY taxi car point",
                    thumbnail: "l_mapVLayer_point.png",
                    fileName: "mapVLayerPoint"
                }, {
                    name: "通勤图",
                    name_en: "OD",
                    thumbnail: "l_mapvLayer_csvCar.png",
                    fileName: "mapVLayerCSVCar"
                }, {
                    name: "强边界图",
                    name_en: "force edge bundling",
                    thumbnail: "l_mapvLayer_forceEdgeBunding.gif",
                    fileName: "mapVLayerForceEdgeBunding"
                }, {
                    name: "迁徙图",
                    name_en: "migration",
                    thumbnail: "l_mapvLayer_qianxi.gif",
                    fileName: "mapVLayerQianxi"
                }, {
                    name: "动态轨迹",
                    name_en: "dynamic trajectory",
                    thumbnail: "l_mapvLayer_polylineTime.gif",
                    fileName: "mapVLayerPolylineTime"
                }, {
                    name: "简单线",
                    name_en: "simple line",
                    thumbnail: "l_mapvLayer_polyline.png",
                    fileName: "mapVLayerPolylineSimple"
                }, {
                    name: "强度线",
                    name_en: "line density",
                    thumbnail: "l_mapvLayer_polylineIntensity.png",
                    fileName: "mapVLayerPolylineIntensity"
                }, {
                    name: "面",
                    name_en: "simple polygon",
                    thumbnail: "l_mapvLayer_polygon.png",
                    fileName: "mapVLayerPolygon"
                }, {
                    name: "北京乡镇分布",
                    name_en: "village of beijing",
                    thumbnail: "l_mapvLayer_polygonBuildings.png",
                    fileName: "mapVLayerPolygonBuildings"
                }, {
                    name: "2018年2月北京房价",
                    name_en: "Beijing house prices of Lianjia(2018.2)",
                    thumbnail: "l_mapvLianjia.png",
                    fileName: "mapvLianjiaData"
                }]
            },
            "D3": {
                name: "D3",
                name_en: "D3",
                content: [{
                    name: "单值专题图",
                    name_en: "unique thematic layer",
                    thumbnail: "l_d3UniqueThemeLayer.png",
                    fileName: "d3UniqueThemeLayer"
                }, {
                    name: "分段专题图",
                    name_en: "range thematic layer",
                    thumbnail: "l_d3RangeThemeLayer.png",
                    fileName: "d3RangeThemeLayer"
                }, {
                    name: "蜂巢图",
                    name_en: "honeycomb layer",
                    thumbnail: "l_d3HexbinLayer.png",
                    fileName: "d3HexbinLayer"
                }]
            },
            "extrusion": {
                name: "OSMBuildings",
                name_en: "OSMBuildings",
                content: [{
                    name: "建筑立体效果",
                    name_en: "OSMBuildings",
                    thumbnail: "l_osmbuildings.png",
                    fileName: "osmbuildings"
                }]
            },
            "tileVectorLayer": {
                name: "矢量瓦片",
                name_en: "vector tile layer",
                content: [
                    {
                        name: "默认风格",
                        name_en: "normal style",
                        thumbnail: "l_tileVectorLayer_normal.png",
                        fileName: "vectorTileLayerNormal"
                    }, {
                        name: "月夜风格",
                        name_en: "night style",
                        thumbnail: "l_tileVectorLayer_night.png",
                        fileName: "vectorTileLayerNight"
                    }, {
                        name: "强边界风格",
                        name_en: "boundray style",
                        thumbnail: "l_tileVectorLayer_boundray.png",
                        fileName: "vectorTileLayerBoundary"
                    }, {
                        name: "深夜蓝黑风格",
                        name_en: "dark-blue style",
                        thumbnail: "l_tileVectorLayer_darkBlue.png",
                        fileName: "vectorTileLayerDarkBlue"
                    }, {
                        name: "HelloKitty风格",
                        name_en: "hellokitty style",
                        thumbnail: "l_tileVectorLayer_helloKitty.png",
                        fileName: "vectorTileLayerHelloKitty"
                    }, {
                        name: "淡雅绿风格",
                        name_en: "natural style",
                        thumbnail: "l_tileVectorLayer_natural.png",
                        fileName: "vectorTileLayerNatural"
                    }, {
                        name: "默认风格(MVT)",
                        name_en: "normal(MVT)",
                        thumbnail: "l_tileVectorLayer_normal.png",
                        fileName: "vectorTileLayerMVT"

                    }, {
                        name: "默认风格(MVT 4326)",
                        name_en: "normal(MVT 4326)",
                        thumbnail: "l_tileVectorLayer_mvt4326.png",
                        fileName: "vectorTileLayerMVT_4326"

                    }
                ]
            },
            "themeLayer": {
                name: "客户端专题图",
                name_en: "client thematic layer",
                content: [{
                    name: "单值专题图",
                    name_en: "unique",
                    thumbnail: "l_uniqueThemeLayer.png",
                    fileName: "uniqueThemeLayer"
                }, {
                    name: "分段专题图",
                    name_en: "range",
                    thumbnail: "l_rangeThemeLayer.png",
                    fileName: "rangeThemeLayer"
                }, {
                    name: "等级符号专题图",
                    name_en: "rank symbol",
                    thumbnail: "l_rankSymbolThemeLayer.png",
                    fileName: "rankSymbolThemeLayer"
                }, {
                    name: "标签专题图",
                    name_en: "label ",
                    thumbnail: "l_labelThemeLayer.png",
                    fileName: "labelThemeLayer"
                }, {
                    name: "图表专题图",
                    name_en: "statistical chart",
                    thumbnail: "l_graphThemeLayer.png",
                    fileName: "graphThemeLayer"
                }]
            }
        }
    },
    "plot": {
        name: "标绘",
        name_en: "plot",
        content: {
            "draw": {
                name: "点线面绘制",
                name_en: "draw",
                content: [{
                    name: "绘制与修改",
                    name_en: "draw and modify",
                    thumbnail: "l_drawAndModify.png",
                    fileName: "drawAndModify"
                }, {
                    name: "捕捉与修改",
                    name_en: "snap and modify",
                    thumbnail: "l_snapAndModify.png",
                    fileName: "snapAndModify"
                }]
            }
        }
    },
    "clientSpatialAnalyst": {
        name: "客户端分析",
        name_en: "client spatial analysis",
        content: {
            "Turf": {
                name: "Turf",
                content: [{
                    name: "插值分析",
                    name_en: "interpolation analysis",
                    thumbnail: "l_interpolationAnalysis.png",
                    fileName: "turf_interpolationAnalysis"
                }, {
                    name: "分类分析",
                    name_en: "classification analysis",
                    thumbnail: "l_classificationAnalysis.png",
                    fileName: "turf_classificationAnalysis"
                }, {
                    name: "格网分析",
                    name_en: "grid analysis",
                    thumbnail: "l_gridAnalysis.png",
                    fileName: "turf_gridAnalysis"
                }, {
                    name: "测量计算",
                    name_en: "measurement",
                    thumbnail: "l_turf_measurement.png",
                    fileName: "turf_measurement"
                }]
            }
        }
    },
    "control": {
        name: "控件",
        name_en: "control",
        content: {
            "changeTileVersion": {
                name: "缓存切换",
                name_en: "tile version switch",
                content: [{
                    name: "多版本缓存切换控件",
                    name_en: "tile version switch control",
                    thumbnail: "l_changeTileVersion.png",
                    fileName: "changeTileVersion"
                }]
            },
            "leafletOfficialControl": {
                name: "基础控件",
                name_en: "base control",
                content: [{
                    name: "缩放控件",
                    name_en: "zoom control",
                    thumbnail: "l_controler_zoom.png",
                    fileName: "controler_zoom"
                }, {
                    name: "比例尺控件",
                    name_en: "scaleline control",
                    thumbnail: "l_controler_scaleline.png",
                    fileName: "controler_scaleline"
                }, {
                    name: "版权控件",
                    name_en: "attribution control",
                    thumbnail: "l_controler_attribution.png",
                    fileName: "controler_attribution"
                }, {
                    name: "图层切换",
                    name_en: "layer switch control",
                    thumbnail: "l_controler_layerswitcher.png",
                    fileName: "controler_layerswitcher"
                }, {
                    name: "自定义图标",
                    name_en: "markers with custom icons",
                    thumbnail: "l_controler_markersWithCustomIcons.png",
                    fileName: "controler_markersWithCustomIcons"
                }, {
                    name: "卷帘",
                    name_en: "roller blinds",
                    thumbnail: "l_controler_layerswitch.png",
                    fileName: "controler_layerswitch"
                }, {
                    name: "鹰眼图",
                    name_en: "overview map control",
                    thumbnail: "l_controler_overviewMap.png",
                    fileName: "controler_overviewMap"
                }]
            }
        }
    },
    "OGC": {
        name: "OGC",
        name_en: "OGC",
        content: {
            "WMTS": {
                name: "WMTS",
                name_en: "WMTS",
                content: [{
                    name: "WMTS图层",
                    name_en: "WMTS layer",
                    thumbnail: "l_WMTSLayer.png",
                    fileName: "WMTSLayer"
                }]
            },
            "WMS": {
                name: "WMS",
                name_en: "WMS",
                content: [{
                    name: "WMS图层",
                    name_en: "WMS layer",
                    thumbnail: "l_WMSLayer.png",
                    fileName: "WMSLayer"
                }]
            }
        }
    },
    "mapping": {
        name: "互联网地图",
        name_en: "Internet map",
        content: {
            "Baidu": {
                name: "百度地图",
                name_en: "baidu map",
                content: [{
                    name: "百度地图",
                    name_en: "baidu layer",
                    thumbnail: "l_baiduLayer.png",
                    fileName: "baiduLayer"
                }]
            },
            "Tianditu": {
                name: "天地图",
                name_en: "tianditu",
                content: [{
                    name: "天地图-墨卡托",
                    name_en: "tianditu-mercator",
                    thumbnail: "l_tiandituLayer_mercator.png",
                    fileName: "tiandituLayer_mercator"
                }, {
                    name: "天地图-经纬度",
                    name_en: "tianditu-ll",
                    thumbnail: "l_tiandituLayer_ll.png",
                    fileName: "tiandituLayer_ll"
                }]
            },
            "cloud": {
                name: "超图云",
                name_en: "SuperMap Cloud",
                content: [{
                    name: "超图云地图",
                    name_en: "SuperMap Cloud layer",
                    thumbnail: "l_cloudLayer.png",
                    fileName: "cloudLayer"
                }]
            }
        }
    }

};

/**
 *key值：为exampleConfig配置的key值或者fileName值
 *      （为中间节点时是key值，叶结点是fileName值）
 *value值：fontawesome字体icon名
 *不分层
 */
var sideBarIconConfig = {
    "iServer": "fa-server",
    "iPortal": "fa-desktop",
    "Online": "fa-cloud",
    "iManager": "fa-group",
    "Elasticsearch": "fa-tasks",
    "plot": "fa-edit",
    "control": "fa-sliders",
    "clientSpatialAnalyst": "fa-object-group",
    "viz": "fa-map",
    "OGC": "fa-globe",
    "mapping": "fa-send"
};

/**
 *key值：为exampleConfig配置的key值
 *value值：fontawesome字体icon名
 *与sideBarIconConfig的区别：sideBarIconConfig包括侧边栏所有层级目录的图标，exampleIconConfig仅包括一级标题的图标
 */
var exampleIconConfig = {
    "iServer": "fa-server",
    "iPortal": "fa-desktop",
    "Online": "fa-cloud",
    "iManager": "fa-group",
    "Elasticsearch": "fa-tasks",
    "plot": "fa-edit",
    "control": "fa-sliders",
    "clientSpatialAnalyst": "fa-object-group",
    "viz": "fa-map",
    "OGC": "fa-globe",
    "mapping": "fa-send"
};