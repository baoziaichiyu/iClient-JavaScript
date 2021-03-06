/* Copyright© 2000 - 2018 SuperMap Software Co.Ltd. All rights reserved.* This program are made available under the terms of the Apache License, Version 2.0* which accompanies this distribution and is available at/r* http://www.apache.org/licenses/LICENSE-2.0.html.*/
import {SuperMap} from '../SuperMap';
import {Util} from '../commontypes/Util';

/**
 * @class SuperMap.iPortalMapsQueryParam
 * @classdesc iPortal 地图资源查询参数。
 * @category iPortal/Online
 * @param {Object} params - iPortal 地图资源查询具体参数。
 *
 */
export class IPortalMapsQueryParam {

    constructor(params) {
        params = params || {};
        this.userNames = null;
        this.tags = null;
        this.suggest = false;
        this.sourceTypes = null;
        this.keywords = null;
        this.epsgCode = null;
        this.orderBy = null;
        this.currentPage = null;
        this.pageSize = null;
        this.dirIds = null;
        this.isNotInDir = false;
        this.updateStart = null;
        this.updateEnd = null;
        this.visitStart = null;
        this.visitEnd = null;
        this.filterFields = null;
        Util.extend(this, params);
    }

}

SuperMap.iPortalMapsQueryParam = IPortalMapsQueryParam;

