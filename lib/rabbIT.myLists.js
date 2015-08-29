/*
 * rabbIT.myLists
 * https://github.com/alandelacanal/myLists
 *
 * Copyright (c) 2015 alan.delacanal
 * Licensed under the MIT license.
   exports.awesome = function() {
    return 'awesome';
 */

(function(exports) {

  	'use strict';
    exports.Tools: {
        getAppClientInfo: function (clienId) {
            $.ajax({
                type: "POST",
                contentType: "application/json",
                url: configurationServiceUrl + "/GetAppClientData",
                dataType: "json",
                data: JSON.stringify({ id: _clientApp }),
                success: function (data, textStatus) {
                    if (data.GetAppClientDataResult.status == "success") {
                        return data.GetAppClientDataResponse.data;
                    }
                    else {
                        console.error("Error in GetAppClientDataResponse: " + data.GetAppClientDataResult.message);
                    }
                },
                error: function (textStatus, errorThrown) {
                    console.error("Error in GetAppClientDataResponse");
                }
            })
        },
        getList: function (clienId, listId) {                
            $.ajax({
                type: "POST",
                contentType: "application/json",
                url: configurationServiceUrl + "/GetPriceList",
                dataType: "json",
                data: JSON.stringify({ appClient: clienId, listId: listId }),
                success: function (data, textStatus) {
                    if (data.GetAppClientDataResult.status == "success") {
                        return data.GetAppClientDataResponse.data;
                    }
                    else {
                        console.error("Error in GetAppClientDataResponse: " + data.GetAppClientDataResult.message);
                    }
                },
                error: function (textStatus, errorThrown) {
                    console.error("Error in GetAppClientDataResponse");
                }
            })
        }

        return {
        	Tools: {
                getAppClientInfo: MyLists.Tools.getAppClientInfo,
                getList: MyLists.Tools.getList
            }

        }
    };

}(typeof exports === 'object' && exports || this));
