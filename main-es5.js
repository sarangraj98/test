(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (self["webpackChunkngx_admin"] = self["webpackChunkngx_admin"] || []).push([["main"], {
    /***/
    98255: function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    43127: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NbSimpleRoleProvider": function NbSimpleRoleProvider() {
          return (
            /* binding */
            _NbSimpleRoleProvider
          );
        },

        /* harmony export */
        "NB_CORE_PROVIDERS": function NB_CORE_PROVIDERS() {
          return (
            /* binding */
            _NB_CORE_PROVIDERS
          );
        },

        /* harmony export */
        "CoreModule": function CoreModule() {
          return (
            /* binding */
            _CoreModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _nebular_auth__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! @nebular/auth */
      86665);
      /* harmony import */


      var _nebular_security__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! @nebular/security */
      51938);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! rxjs */
      25917);
      /* harmony import */


      var _module_import_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./module-import-guard */
      65239);
      /* harmony import */


      var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./utils */
      89535);
      /* harmony import */


      var _data_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./data/users */
      63288);
      /* harmony import */


      var _data_electricity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./data/electricity */
      60315);
      /* harmony import */


      var _data_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./data/smart-table */
      98152);
      /* harmony import */


      var _data_user_activity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./data/user-activity */
      74345);
      /* harmony import */


      var _data_orders_chart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./data/orders-chart */
      44304);
      /* harmony import */


      var _data_profit_chart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./data/profit-chart */
      21806);
      /* harmony import */


      var _data_traffic_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./data/traffic-list */
      33530);
      /* harmony import */


      var _data_earning__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./data/earning */
      99222);
      /* harmony import */


      var _data_orders_profit_chart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./data/orders-profit-chart */
      38691);
      /* harmony import */


      var _data_traffic_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./data/traffic-bar */
      41360);
      /* harmony import */


      var _data_profit_bar_animation_chart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./data/profit-bar-animation-chart */
      59322);
      /* harmony import */


      var _data_temperature_humidity__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./data/temperature-humidity */
      16363);
      /* harmony import */


      var _data_solar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./data/solar */
      55453);
      /* harmony import */


      var _data_traffic_chart__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./data/traffic-chart */
      25870);
      /* harmony import */


      var _data_stats_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./data/stats-bar */
      41401);
      /* harmony import */


      var _data_country_order__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./data/country-order */
      87141);
      /* harmony import */


      var _data_stats_progress_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./data/stats-progress-bar */
      1166);
      /* harmony import */


      var _data_visitors_analytics__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./data/visitors-analytics */
      75797);
      /* harmony import */


      var _data_security_cameras__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./data/security-cameras */
      96358);
      /* harmony import */


      var _mock_users_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./mock/users.service */
      33167);
      /* harmony import */


      var _mock_electricity_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./mock/electricity.service */
      34050);
      /* harmony import */


      var _mock_smart_table_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./mock/smart-table.service */
      76608);
      /* harmony import */


      var _mock_user_activity_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./mock/user-activity.service */
      41922);
      /* harmony import */


      var _mock_orders_chart_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./mock/orders-chart.service */
      25252);
      /* harmony import */


      var _mock_profit_chart_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./mock/profit-chart.service */
      87850);
      /* harmony import */


      var _mock_traffic_list_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./mock/traffic-list.service */
      99415);
      /* harmony import */


      var _mock_earning_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./mock/earning.service */
      40615);
      /* harmony import */


      var _mock_orders_profit_chart_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./mock/orders-profit-chart.service */
      45644);
      /* harmony import */


      var _mock_traffic_bar_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./mock/traffic-bar.service */
      54679);
      /* harmony import */


      var _mock_profit_bar_animation_chart_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./mock/profit-bar-animation-chart.service */
      30463);
      /* harmony import */


      var _mock_temperature_humidity_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./mock/temperature-humidity.service */
      89725);
      /* harmony import */


      var _mock_solar_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./mock/solar.service */
      749);
      /* harmony import */


      var _mock_traffic_chart_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./mock/traffic-chart.service */
      45428);
      /* harmony import */


      var _mock_stats_bar_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./mock/stats-bar.service */
      36961);
      /* harmony import */


      var _mock_country_order_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./mock/country-order.service */
      9329);
      /* harmony import */


      var _mock_stats_progress_bar_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./mock/stats-progress-bar.service */
      22938);
      /* harmony import */


      var _mock_visitors_analytics_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./mock/visitors-analytics.service */
      57819);
      /* harmony import */


      var _mock_security_cameras_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ./mock/security-cameras.service */
      63952);
      /* harmony import */


      var _mock_mock_data_module__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ./mock/mock-data.module */
      68206);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var socialLinks = [{
        url: 'https://github.com/akveo/nebular',
        target: '_blank',
        icon: 'github'
      }, {
        url: 'https://www.facebook.com/akveo/',
        target: '_blank',
        icon: 'facebook'
      }, {
        url: 'https://twitter.com/akveo_inc',
        target: '_blank',
        icon: 'twitter'
      }];
      var DATA_SERVICES = [{
        provide: _data_users__WEBPACK_IMPORTED_MODULE_2__.UserData,
        useClass: _mock_users_service__WEBPACK_IMPORTED_MODULE_21__.UserService
      }, {
        provide: _data_electricity__WEBPACK_IMPORTED_MODULE_3__.ElectricityData,
        useClass: _mock_electricity_service__WEBPACK_IMPORTED_MODULE_22__.ElectricityService
      }, {
        provide: _data_smart_table__WEBPACK_IMPORTED_MODULE_4__.SmartTableData,
        useClass: _mock_smart_table_service__WEBPACK_IMPORTED_MODULE_23__.SmartTableService
      }, {
        provide: _data_user_activity__WEBPACK_IMPORTED_MODULE_5__.UserActivityData,
        useClass: _mock_user_activity_service__WEBPACK_IMPORTED_MODULE_24__.UserActivityService
      }, {
        provide: _data_orders_chart__WEBPACK_IMPORTED_MODULE_6__.OrdersChartData,
        useClass: _mock_orders_chart_service__WEBPACK_IMPORTED_MODULE_25__.OrdersChartService
      }, {
        provide: _data_profit_chart__WEBPACK_IMPORTED_MODULE_7__.ProfitChartData,
        useClass: _mock_profit_chart_service__WEBPACK_IMPORTED_MODULE_26__.ProfitChartService
      }, {
        provide: _data_traffic_list__WEBPACK_IMPORTED_MODULE_8__.TrafficListData,
        useClass: _mock_traffic_list_service__WEBPACK_IMPORTED_MODULE_27__.TrafficListService
      }, {
        provide: _data_earning__WEBPACK_IMPORTED_MODULE_9__.EarningData,
        useClass: _mock_earning_service__WEBPACK_IMPORTED_MODULE_28__.EarningService
      }, {
        provide: _data_orders_profit_chart__WEBPACK_IMPORTED_MODULE_10__.OrdersProfitChartData,
        useClass: _mock_orders_profit_chart_service__WEBPACK_IMPORTED_MODULE_29__.OrdersProfitChartService
      }, {
        provide: _data_traffic_bar__WEBPACK_IMPORTED_MODULE_11__.TrafficBarData,
        useClass: _mock_traffic_bar_service__WEBPACK_IMPORTED_MODULE_30__.TrafficBarService
      }, {
        provide: _data_profit_bar_animation_chart__WEBPACK_IMPORTED_MODULE_12__.ProfitBarAnimationChartData,
        useClass: _mock_profit_bar_animation_chart_service__WEBPACK_IMPORTED_MODULE_31__.ProfitBarAnimationChartService
      }, {
        provide: _data_temperature_humidity__WEBPACK_IMPORTED_MODULE_13__.TemperatureHumidityData,
        useClass: _mock_temperature_humidity_service__WEBPACK_IMPORTED_MODULE_32__.TemperatureHumidityService
      }, {
        provide: _data_solar__WEBPACK_IMPORTED_MODULE_14__.SolarData,
        useClass: _mock_solar_service__WEBPACK_IMPORTED_MODULE_33__.SolarService
      }, {
        provide: _data_traffic_chart__WEBPACK_IMPORTED_MODULE_15__.TrafficChartData,
        useClass: _mock_traffic_chart_service__WEBPACK_IMPORTED_MODULE_34__.TrafficChartService
      }, {
        provide: _data_stats_bar__WEBPACK_IMPORTED_MODULE_16__.StatsBarData,
        useClass: _mock_stats_bar_service__WEBPACK_IMPORTED_MODULE_35__.StatsBarService
      }, {
        provide: _data_country_order__WEBPACK_IMPORTED_MODULE_17__.CountryOrderData,
        useClass: _mock_country_order_service__WEBPACK_IMPORTED_MODULE_36__.CountryOrderService
      }, {
        provide: _data_stats_progress_bar__WEBPACK_IMPORTED_MODULE_18__.StatsProgressBarData,
        useClass: _mock_stats_progress_bar_service__WEBPACK_IMPORTED_MODULE_37__.StatsProgressBarService
      }, {
        provide: _data_visitors_analytics__WEBPACK_IMPORTED_MODULE_19__.VisitorsAnalyticsData,
        useClass: _mock_visitors_analytics_service__WEBPACK_IMPORTED_MODULE_38__.VisitorsAnalyticsService
      }, {
        provide: _data_security_cameras__WEBPACK_IMPORTED_MODULE_20__.SecurityCamerasData,
        useClass: _mock_security_cameras_service__WEBPACK_IMPORTED_MODULE_39__.SecurityCamerasService
      }];

      var _NbSimpleRoleProvider = /*#__PURE__*/function (_nebular_security__WE) {
        _inherits(_NbSimpleRoleProvider, _nebular_security__WE);

        var _super = _createSuper(_NbSimpleRoleProvider);

        function _NbSimpleRoleProvider() {
          _classCallCheck(this, _NbSimpleRoleProvider);

          return _super.apply(this, arguments);
        }

        _createClass(_NbSimpleRoleProvider, [{
          key: "getRole",
          value: function getRole() {
            // here you could provide any role based on any auth flow
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_42__.of)('guest');
          }
        }]);

        return _NbSimpleRoleProvider;
      }(_nebular_security__WEBPACK_IMPORTED_MODULE_41__.NbRoleProvider);

      var _NB_CORE_PROVIDERS = [].concat(_toConsumableArray(_mock_mock_data_module__WEBPACK_IMPORTED_MODULE_40__.MockDataModule.forRoot().providers), DATA_SERVICES, _toConsumableArray(_nebular_auth__WEBPACK_IMPORTED_MODULE_43__.NbAuthModule.forRoot({
        strategies: [_nebular_auth__WEBPACK_IMPORTED_MODULE_43__.NbDummyAuthStrategy.setup({
          name: 'email',
          delay: 3000
        })],
        forms: {
          login: {
            socialLinks: socialLinks
          },
          register: {
            socialLinks: socialLinks
          }
        }
      }).providers), [_nebular_security__WEBPACK_IMPORTED_MODULE_41__.NbSecurityModule.forRoot({
        accessControl: {
          guest: {
            view: '*'
          },
          user: {
            parent: 'guest',
            create: '*',
            edit: '*',
            remove: '*'
          }
        }
      }).providers, {
        provide: _nebular_security__WEBPACK_IMPORTED_MODULE_41__.NbRoleProvider,
        useClass: _NbSimpleRoleProvider
      }, _utils__WEBPACK_IMPORTED_MODULE_1__.AnalyticsService, _utils__WEBPACK_IMPORTED_MODULE_1__.LayoutService, _utils__WEBPACK_IMPORTED_MODULE_1__.PlayerService, _utils__WEBPACK_IMPORTED_MODULE_1__.SeoService, _utils__WEBPACK_IMPORTED_MODULE_1__.StateService]);

      var _CoreModule = /*#__PURE__*/function () {
        function _CoreModule(parentModule) {
          _classCallCheck(this, _CoreModule);

          (0, _module_import_guard__WEBPACK_IMPORTED_MODULE_0__.throwIfAlreadyLoaded)(parentModule, 'CoreModule');
        }

        _createClass(_CoreModule, null, [{
          key: "forRoot",
          value: function forRoot() {
            return {
              ngModule: _CoreModule,
              providers: _toConsumableArray(_NB_CORE_PROVIDERS)
            };
          }
        }]);

        return _CoreModule;
      }();

      _CoreModule.ɵfac = function CoreModule_Factory(t) {
        return new (t || _CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_44__["ɵɵinject"](_CoreModule, 12));
      };

      _CoreModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_44__["ɵɵdefineNgModule"]({
        type: _CoreModule
      });
      _CoreModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_44__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_45__.CommonModule], _nebular_auth__WEBPACK_IMPORTED_MODULE_43__.NbAuthModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_44__["ɵɵsetNgModuleScope"](_CoreModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_45__.CommonModule],
          exports: [_nebular_auth__WEBPACK_IMPORTED_MODULE_43__.NbAuthModule]
        });
      })();
      /***/

    },

    /***/
    87141: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CountryOrderData": function CountryOrderData() {
          return (
            /* binding */
            _CountryOrderData
          );
        }
        /* harmony export */

      });

      var _CountryOrderData = function _CountryOrderData() {
        _classCallCheck(this, _CountryOrderData);
      };
      /***/

    },

    /***/
    99222: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EarningData": function EarningData() {
          return (
            /* binding */
            _EarningData
          );
        }
        /* harmony export */

      });

      var _EarningData = function _EarningData() {
        _classCallCheck(this, _EarningData);
      };
      /***/

    },

    /***/
    60315: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ElectricityData": function ElectricityData() {
          return (
            /* binding */
            _ElectricityData
          );
        }
        /* harmony export */

      });

      var _ElectricityData = function _ElectricityData() {
        _classCallCheck(this, _ElectricityData);
      };
      /***/

    },

    /***/
    44304: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OrdersChartData": function OrdersChartData() {
          return (
            /* binding */
            _OrdersChartData
          );
        }
        /* harmony export */

      });

      var _OrdersChartData = function _OrdersChartData() {
        _classCallCheck(this, _OrdersChartData);
      };
      /***/

    },

    /***/
    38691: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OrdersProfitChartData": function OrdersProfitChartData() {
          return (
            /* binding */
            _OrdersProfitChartData
          );
        }
        /* harmony export */

      });

      var _OrdersProfitChartData = function _OrdersProfitChartData() {
        _classCallCheck(this, _OrdersProfitChartData);
      };
      /***/

    },

    /***/
    59322: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfitBarAnimationChartData": function ProfitBarAnimationChartData() {
          return (
            /* binding */
            _ProfitBarAnimationChartData
          );
        }
        /* harmony export */

      });

      var _ProfitBarAnimationChartData = function _ProfitBarAnimationChartData() {
        _classCallCheck(this, _ProfitBarAnimationChartData);
      };
      /***/

    },

    /***/
    21806: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfitChartData": function ProfitChartData() {
          return (
            /* binding */
            _ProfitChartData
          );
        }
        /* harmony export */

      });

      var _ProfitChartData = function _ProfitChartData() {
        _classCallCheck(this, _ProfitChartData);
      };
      /***/

    },

    /***/
    96358: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SecurityCamerasData": function SecurityCamerasData() {
          return (
            /* binding */
            _SecurityCamerasData
          );
        }
        /* harmony export */

      });

      var _SecurityCamerasData = function _SecurityCamerasData() {
        _classCallCheck(this, _SecurityCamerasData);
      };
      /***/

    },

    /***/
    98152: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SmartTableData": function SmartTableData() {
          return (
            /* binding */
            _SmartTableData
          );
        }
        /* harmony export */

      });

      var _SmartTableData = function _SmartTableData() {
        _classCallCheck(this, _SmartTableData);
      };
      /***/

    },

    /***/
    55453: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SolarData": function SolarData() {
          return (
            /* binding */
            _SolarData
          );
        }
        /* harmony export */

      });

      var _SolarData = function _SolarData() {
        _classCallCheck(this, _SolarData);
      };
      /***/

    },

    /***/
    41401: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StatsBarData": function StatsBarData() {
          return (
            /* binding */
            _StatsBarData
          );
        }
        /* harmony export */

      });

      var _StatsBarData = function _StatsBarData() {
        _classCallCheck(this, _StatsBarData);
      };
      /***/

    },

    /***/
    1166: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StatsProgressBarData": function StatsProgressBarData() {
          return (
            /* binding */
            _StatsProgressBarData
          );
        }
        /* harmony export */

      });

      var _StatsProgressBarData = function _StatsProgressBarData() {
        _classCallCheck(this, _StatsProgressBarData);
      };
      /***/

    },

    /***/
    16363: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TemperatureHumidityData": function TemperatureHumidityData() {
          return (
            /* binding */
            _TemperatureHumidityData
          );
        }
        /* harmony export */

      });

      var _TemperatureHumidityData = function _TemperatureHumidityData() {
        _classCallCheck(this, _TemperatureHumidityData);
      };
      /***/

    },

    /***/
    41360: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TrafficBarData": function TrafficBarData() {
          return (
            /* binding */
            _TrafficBarData
          );
        }
        /* harmony export */

      });

      var _TrafficBarData = function _TrafficBarData() {
        _classCallCheck(this, _TrafficBarData);
      };
      /***/

    },

    /***/
    25870: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TrafficChartData": function TrafficChartData() {
          return (
            /* binding */
            _TrafficChartData
          );
        }
        /* harmony export */

      });

      var _TrafficChartData = function _TrafficChartData() {
        _classCallCheck(this, _TrafficChartData);
      };
      /***/

    },

    /***/
    33530: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TrafficListData": function TrafficListData() {
          return (
            /* binding */
            _TrafficListData
          );
        }
        /* harmony export */

      });

      var _TrafficListData = function _TrafficListData() {
        _classCallCheck(this, _TrafficListData);
      };
      /***/

    },

    /***/
    74345: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserActivityData": function UserActivityData() {
          return (
            /* binding */
            _UserActivityData
          );
        }
        /* harmony export */

      });

      var _UserActivityData = function _UserActivityData() {
        _classCallCheck(this, _UserActivityData);
      };
      /***/

    },

    /***/
    63288: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserData": function UserData() {
          return (
            /* binding */
            _UserData
          );
        }
        /* harmony export */

      });

      var _UserData = function _UserData() {
        _classCallCheck(this, _UserData);
      };
      /***/

    },

    /***/
    75797: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VisitorsAnalyticsData": function VisitorsAnalyticsData() {
          return (
            /* binding */
            _VisitorsAnalyticsData
          );
        }
        /* harmony export */

      });

      var _VisitorsAnalyticsData = function _VisitorsAnalyticsData() {
        _classCallCheck(this, _VisitorsAnalyticsData);
      };
      /***/

    },

    /***/
    9329: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CountryOrderService": function CountryOrderService() {
          return (
            /* binding */
            _CountryOrderService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      25917);
      /* harmony import */


      var _data_country_order__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../data/country-order */
      87141);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _CountryOrderService = /*#__PURE__*/function (_data_country_order__) {
        _inherits(_CountryOrderService, _data_country_order__);

        var _super2 = _createSuper(_CountryOrderService);

        function _CountryOrderService() {
          var _this;

          _classCallCheck(this, _CountryOrderService);

          _this = _super2.apply(this, arguments);
          _this.countriesCategories = ['Sofas', 'Furniture', 'Lighting', 'Tables', 'Textiles'];
          _this.countriesCategoriesLength = _this.countriesCategories.length;
          return _this;
        }

        _createClass(_CountryOrderService, [{
          key: "generateRandomData",
          value: function generateRandomData(nPoints) {
            return Array.from(Array(nPoints)).map(function () {
              return Math.round(Math.random() * 20);
            });
          }
        }, {
          key: "getCountriesCategories",
          value: function getCountriesCategories() {
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.countriesCategories);
          }
        }, {
          key: "getCountriesCategoriesData",
          value: function getCountriesCategoriesData(country) {
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.generateRandomData(this.countriesCategoriesLength));
          }
        }]);

        return _CountryOrderService;
      }(_data_country_order__WEBPACK_IMPORTED_MODULE_0__.CountryOrderData);

      _CountryOrderService.ɵfac = /*@__PURE__*/function () {
        var ɵCountryOrderService_BaseFactory;
        return function CountryOrderService_Factory(t) {
          return (ɵCountryOrderService_BaseFactory || (ɵCountryOrderService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](_CountryOrderService)))(t || _CountryOrderService);
        };
      }();

      _CountryOrderService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _CountryOrderService,
        factory: _CountryOrderService.ɵfac
      });
      /***/
    },

    /***/
    40615: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EarningService": function EarningService() {
          return (
            /* binding */
            _EarningService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      25917);
      /* harmony import */


      var _data_earning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../data/earning */
      99222);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _EarningService = /*#__PURE__*/function (_data_earning__WEBPAC) {
        _inherits(_EarningService, _data_earning__WEBPAC);

        var _super3 = _createSuper(_EarningService);

        function _EarningService() {
          var _this2;

          _classCallCheck(this, _EarningService);

          _this2 = _super3.apply(this, arguments);
          _this2.currentDate = new Date();
          _this2.currentValue = Math.random() * 1000;
          _this2.ONE_DAY = 24 * 3600 * 1000;
          _this2.pieChartData = [{
            value: 50,
            name: 'Bitcoin'
          }, {
            value: 25,
            name: 'Tether'
          }, {
            value: 25,
            name: 'Ethereum'
          }];
          _this2.liveUpdateChartData = {
            bitcoin: {
              liveChart: [],
              delta: {
                up: true,
                value: 4
              },
              dailyIncome: 45895
            },
            tether: {
              liveChart: [],
              delta: {
                up: false,
                value: 9
              },
              dailyIncome: 5862
            },
            ethereum: {
              liveChart: [],
              delta: {
                up: false,
                value: 21
              },
              dailyIncome: 584
            }
          };
          return _this2;
        }

        _createClass(_EarningService, [{
          key: "getDefaultLiveChartData",
          value: function getDefaultLiveChartData(elementsNumber) {
            var _this3 = this;

            this.currentDate = new Date();
            this.currentValue = Math.random() * 1000;
            return Array.from(Array(elementsNumber)).map(function (item) {
              return _this3.generateRandomLiveChartData();
            });
          }
        }, {
          key: "generateRandomLiveChartData",
          value: function generateRandomLiveChartData() {
            this.currentDate = new Date(+this.currentDate + this.ONE_DAY);
            this.currentValue = this.currentValue + Math.random() * 20 - 11;

            if (this.currentValue < 0) {
              this.currentValue = Math.random() * 100;
            }

            return {
              value: [[this.currentDate.getFullYear(), this.currentDate.getMonth(), this.currentDate.getDate()].join('/'), Math.round(this.currentValue)]
            };
          }
        }, {
          key: "getEarningLiveUpdateCardData",
          value: function getEarningLiveUpdateCardData(currency) {
            var data = this.liveUpdateChartData[currency.toLowerCase()];
            var newValue = this.generateRandomLiveChartData();
            data.liveChart.shift();
            data.liveChart.push(newValue);
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(data.liveChart);
          }
        }, {
          key: "getEarningCardData",
          value: function getEarningCardData(currency) {
            var data = this.liveUpdateChartData[currency.toLowerCase()];
            data.liveChart = this.getDefaultLiveChartData(150);
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(data);
          }
        }, {
          key: "getEarningPieChartData",
          value: function getEarningPieChartData() {
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.pieChartData);
          }
        }]);

        return _EarningService;
      }(_data_earning__WEBPACK_IMPORTED_MODULE_0__.EarningData);

      _EarningService.ɵfac = /*@__PURE__*/function () {
        var ɵEarningService_BaseFactory;
        return function EarningService_Factory(t) {
          return (ɵEarningService_BaseFactory || (ɵEarningService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](_EarningService)))(t || _EarningService);
        };
      }();

      _EarningService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _EarningService,
        factory: _EarningService.ɵfac
      });
      /***/
    },

    /***/
    34050: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ElectricityService": function ElectricityService() {
          return (
            /* binding */
            _ElectricityService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      25917);
      /* harmony import */


      var _data_electricity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../data/electricity */
      60315);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ElectricityService = /*#__PURE__*/function (_data_electricity__WE) {
        _inherits(_ElectricityService, _data_electricity__WE);

        var _super4 = _createSuper(_ElectricityService);

        function _ElectricityService() {
          var _this4;

          _classCallCheck(this, _ElectricityService);

          _this4 = _super4.call(this);
          _this4.listData = [{
            title: '2015',
            months: [{
              month: 'Jan',
              delta: '0.97',
              down: true,
              kWatts: '816',
              cost: '97'
            }, {
              month: 'Feb',
              delta: '1.83',
              down: true,
              kWatts: '806',
              cost: '95'
            }, {
              month: 'Mar',
              delta: '0.64',
              down: true,
              kWatts: '803',
              cost: '94'
            }, {
              month: 'Apr',
              delta: '2.17',
              down: false,
              kWatts: '818',
              cost: '98'
            }, {
              month: 'May',
              delta: '1.32',
              down: true,
              kWatts: '809',
              cost: '96'
            }, {
              month: 'Jun',
              delta: '0.05',
              down: true,
              kWatts: '808',
              cost: '96'
            }, {
              month: 'Jul',
              delta: '1.39',
              down: false,
              kWatts: '815',
              cost: '97'
            }, {
              month: 'Aug',
              delta: '0.73',
              down: true,
              kWatts: '807',
              cost: '95'
            }, {
              month: 'Sept',
              delta: '2.61',
              down: true,
              kWatts: '792',
              cost: '92'
            }, {
              month: 'Oct',
              delta: '0.16',
              down: true,
              kWatts: '791',
              cost: '92'
            }, {
              month: 'Nov',
              delta: '1.71',
              down: true,
              kWatts: '786',
              cost: '89'
            }, {
              month: 'Dec',
              delta: '0.37',
              down: false,
              kWatts: '789',
              cost: '91'
            }]
          }, {
            title: '2016',
            active: true,
            months: [{
              month: 'Jan',
              delta: '1.56',
              down: true,
              kWatts: '789',
              cost: '91'
            }, {
              month: 'Feb',
              delta: '0.33',
              down: false,
              kWatts: '791',
              cost: '92'
            }, {
              month: 'Mar',
              delta: '0.62',
              down: true,
              kWatts: '790',
              cost: '92'
            }, {
              month: 'Apr',
              delta: '1.93',
              down: true,
              kWatts: '783',
              cost: '87'
            }, {
              month: 'May',
              delta: '2.52',
              down: true,
              kWatts: '771',
              cost: '83'
            }, {
              month: 'Jun',
              delta: '0.39',
              down: false,
              kWatts: '774',
              cost: '85'
            }, {
              month: 'Jul',
              delta: '1.61',
              down: true,
              kWatts: '767',
              cost: '81'
            }, {
              month: 'Aug',
              delta: '1.41',
              down: true,
              kWatts: '759',
              cost: '76'
            }, {
              month: 'Sept',
              delta: '1.03',
              down: true,
              kWatts: '752',
              cost: '74'
            }, {
              month: 'Oct',
              delta: '2.94',
              down: false,
              kWatts: '769',
              cost: '82'
            }, {
              month: 'Nov',
              delta: '0.26',
              down: true,
              kWatts: '767',
              cost: '81'
            }, {
              month: 'Dec',
              delta: '1.62',
              down: true,
              kWatts: '760',
              cost: '76'
            }]
          }, {
            title: '2017',
            months: [{
              month: 'Jan',
              delta: '1.34',
              down: false,
              kWatts: '789',
              cost: '91'
            }, {
              month: 'Feb',
              delta: '0.95',
              down: false,
              kWatts: '793',
              cost: '93'
            }, {
              month: 'Mar',
              delta: '0.25',
              down: true,
              kWatts: '791',
              cost: '92'
            }, {
              month: 'Apr',
              delta: '1.72',
              down: false,
              kWatts: '797',
              cost: '95'
            }, {
              month: 'May',
              delta: '2.62',
              down: true,
              kWatts: '786',
              cost: '90'
            }, {
              month: 'Jun',
              delta: '0.72',
              down: false,
              kWatts: '789',
              cost: '91'
            }, {
              month: 'Jul',
              delta: '0.78',
              down: true,
              kWatts: '784',
              cost: '89'
            }, {
              month: 'Aug',
              delta: '0.36',
              down: true,
              kWatts: '782',
              cost: '88'
            }, {
              month: 'Sept',
              delta: '0.55',
              down: false,
              kWatts: '787',
              cost: '90'
            }, {
              month: 'Oct',
              delta: '1.81',
              down: true,
              kWatts: '779',
              cost: '86'
            }, {
              month: 'Nov',
              delta: '1.12',
              down: true,
              kWatts: '774',
              cost: '84'
            }, {
              month: 'Dec',
              delta: '0.52',
              down: false,
              kWatts: '776',
              cost: '95'
            }]
          }];
          _this4.chartPoints = [490, 490, 495, 500, 505, 510, 520, 530, 550, 580, 630, 720, 800, 840, 860, 870, 870, 860, 840, 800, 720, 200, 145, 130, 130, 145, 200, 570, 635, 660, 670, 670, 660, 630, 580, 460, 380, 350, 340, 340, 340, 340, 340, 340, 340, 340, 340];
          _this4.chartData = _this4.chartPoints.map(function (p, index) {
            return {
              label: index % 5 === 3 ? "".concat(Math.round(index / 5)) : '',
              value: p
            };
          });
          return _this4;
        }

        _createClass(_ElectricityService, [{
          key: "getListData",
          value: function getListData() {
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.listData);
          }
        }, {
          key: "getChartData",
          value: function getChartData() {
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.chartData);
          }
        }]);

        return _ElectricityService;
      }(_data_electricity__WEBPACK_IMPORTED_MODULE_0__.ElectricityData);

      _ElectricityService.ɵfac = function ElectricityService_Factory(t) {
        return new (t || _ElectricityService)();
      };

      _ElectricityService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _ElectricityService,
        factory: _ElectricityService.ɵfac
      });
      /***/
    },

    /***/
    68206: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MockDataModule": function MockDataModule() {
          return (
            /* binding */
            _MockDataModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./users.service */
      33167);
      /* harmony import */


      var _electricity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./electricity.service */
      34050);
      /* harmony import */


      var _smart_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./smart-table.service */
      76608);
      /* harmony import */


      var _user_activity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-activity.service */
      41922);
      /* harmony import */


      var _orders_chart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./orders-chart.service */
      25252);
      /* harmony import */


      var _profit_chart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./profit-chart.service */
      87850);
      /* harmony import */


      var _traffic_list_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./traffic-list.service */
      99415);
      /* harmony import */


      var _periods_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./periods.service */
      67168);
      /* harmony import */


      var _earning_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./earning.service */
      40615);
      /* harmony import */


      var _orders_profit_chart_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./orders-profit-chart.service */
      45644);
      /* harmony import */


      var _traffic_bar_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./traffic-bar.service */
      54679);
      /* harmony import */


      var _profit_bar_animation_chart_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./profit-bar-animation-chart.service */
      30463);
      /* harmony import */


      var _temperature_humidity_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./temperature-humidity.service */
      89725);
      /* harmony import */


      var _solar_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./solar.service */
      749);
      /* harmony import */


      var _traffic_chart_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./traffic-chart.service */
      45428);
      /* harmony import */


      var _stats_bar_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./stats-bar.service */
      36961);
      /* harmony import */


      var _country_order_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./country-order.service */
      9329);
      /* harmony import */


      var _stats_progress_bar_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./stats-progress-bar.service */
      22938);
      /* harmony import */


      var _visitors_analytics_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./visitors-analytics.service */
      57819);
      /* harmony import */


      var _security_cameras_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./security-cameras.service */
      63952);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var SERVICES = [_users_service__WEBPACK_IMPORTED_MODULE_0__.UserService, _electricity_service__WEBPACK_IMPORTED_MODULE_1__.ElectricityService, _smart_table_service__WEBPACK_IMPORTED_MODULE_2__.SmartTableService, _user_activity_service__WEBPACK_IMPORTED_MODULE_3__.UserActivityService, _orders_chart_service__WEBPACK_IMPORTED_MODULE_4__.OrdersChartService, _profit_chart_service__WEBPACK_IMPORTED_MODULE_5__.ProfitChartService, _traffic_list_service__WEBPACK_IMPORTED_MODULE_6__.TrafficListService, _periods_service__WEBPACK_IMPORTED_MODULE_7__.PeriodsService, _earning_service__WEBPACK_IMPORTED_MODULE_8__.EarningService, _orders_profit_chart_service__WEBPACK_IMPORTED_MODULE_9__.OrdersProfitChartService, _traffic_bar_service__WEBPACK_IMPORTED_MODULE_10__.TrafficBarService, _profit_bar_animation_chart_service__WEBPACK_IMPORTED_MODULE_11__.ProfitBarAnimationChartService, _temperature_humidity_service__WEBPACK_IMPORTED_MODULE_12__.TemperatureHumidityService, _solar_service__WEBPACK_IMPORTED_MODULE_13__.SolarService, _traffic_chart_service__WEBPACK_IMPORTED_MODULE_14__.TrafficChartService, _stats_bar_service__WEBPACK_IMPORTED_MODULE_15__.StatsBarService, _country_order_service__WEBPACK_IMPORTED_MODULE_16__.CountryOrderService, _stats_progress_bar_service__WEBPACK_IMPORTED_MODULE_17__.StatsProgressBarService, _visitors_analytics_service__WEBPACK_IMPORTED_MODULE_18__.VisitorsAnalyticsService, _security_cameras_service__WEBPACK_IMPORTED_MODULE_19__.SecurityCamerasService];

      var _MockDataModule = /*#__PURE__*/function () {
        function _MockDataModule() {
          _classCallCheck(this, _MockDataModule);
        }

        _createClass(_MockDataModule, null, [{
          key: "forRoot",
          value: function forRoot() {
            return {
              ngModule: _MockDataModule,
              providers: [].concat(SERVICES)
            };
          }
        }]);

        return _MockDataModule;
      }();

      _MockDataModule.ɵfac = function MockDataModule_Factory(t) {
        return new (t || _MockDataModule)();
      };

      _MockDataModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({
        type: _MockDataModule
      });
      _MockDataModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({
        providers: [].concat(SERVICES),
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](_MockDataModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule]
        });
      })();
      /***/

    },

    /***/
    25252: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OrdersChartService": function OrdersChartService() {
          return (
            /* binding */
            _OrdersChartService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _data_orders_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../data/orders-chart */
      44304);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _periods_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./periods.service */
      67168);

      var _OrdersChartService = /*#__PURE__*/function (_data_orders_chart__W) {
        _inherits(_OrdersChartService, _data_orders_chart__W);

        var _super5 = _createSuper(_OrdersChartService);

        function _OrdersChartService(period) {
          var _this5;

          _classCallCheck(this, _OrdersChartService);

          _this5 = _super5.call(this);
          _this5.period = period;
          _this5.year = ['2012', '2013', '2014', '2015', '2016', '2017', '2018'];
          _this5.data = {};
          _this5.data = {
            week: _this5.getDataForWeekPeriod(),
            month: _this5.getDataForMonthPeriod(),
            year: _this5.getDataForYearPeriod()
          };
          return _this5;
        }

        _createClass(_OrdersChartService, [{
          key: "getDataForWeekPeriod",
          value: function getDataForWeekPeriod() {
            return {
              chartLabel: this.getDataLabels(42, this.period.getWeeks()),
              linesData: [[184, 267, 326, 366, 389, 399, 392, 371, 340, 304, 265, 227, 191, 158, 130, 108, 95, 91, 97, 109, 125, 144, 166, 189, 212, 236, 259, 280, 300, 316, 329, 338, 342, 339, 329, 312, 288, 258, 221, 178, 128, 71], [158, 178, 193, 205, 212, 213, 204, 190, 180, 173, 168, 164, 162, 160, 159, 158, 159, 166, 179, 195, 215, 236, 257, 276, 292, 301, 304, 303, 300, 293, 284, 273, 262, 251, 241, 234, 232, 232, 232, 232, 232, 232], [58, 137, 202, 251, 288, 312, 323, 324, 311, 288, 257, 222, 187, 154, 124, 100, 81, 68, 61, 58, 61, 69, 80, 96, 115, 137, 161, 186, 210, 233, 254, 271, 284, 293, 297, 297, 297, 297, 297, 297, 297, 297, 297]]
            };
          }
        }, {
          key: "getDataForMonthPeriod",
          value: function getDataForMonthPeriod() {
            return {
              chartLabel: this.getDataLabels(47, this.period.getMonths()),
              linesData: [[5, 63, 113, 156, 194, 225, 250, 270, 283, 289, 290, 286, 277, 264, 244, 220, 194, 171, 157, 151, 150, 152, 155, 160, 166, 170, 167, 153, 135, 115, 97, 82, 71, 64, 63, 62, 61, 62, 65, 73, 84, 102, 127, 159, 203, 259, 333], [6, 83, 148, 200, 240, 265, 273, 259, 211, 122, 55, 30, 28, 36, 50, 68, 88, 109, 129, 146, 158, 163, 165, 173, 187, 208, 236, 271, 310, 346, 375, 393, 400, 398, 387, 368, 341, 309, 275, 243, 220, 206, 202, 207, 222, 247, 286, 348], [398, 348, 315, 292, 274, 261, 251, 243, 237, 231, 222, 209, 192, 172, 152, 132, 116, 102, 90, 80, 71, 64, 58, 53, 49, 48, 54, 66, 84, 104, 125, 142, 156, 166, 172, 174, 172, 167, 159, 149, 136, 121, 105, 86, 67, 45, 22]]
            };
          }
        }, {
          key: "getDataForYearPeriod",
          value: function getDataForYearPeriod() {
            return {
              chartLabel: this.getDataLabels(42, this.year),
              linesData: [[190, 269, 327, 366, 389, 398, 396, 387, 375, 359, 343, 327, 312, 298, 286, 276, 270, 268, 265, 258, 247, 234, 220, 204, 188, 172, 157, 142, 128, 116, 106, 99, 95, 94, 92, 89, 84, 77, 69, 60, 49, 36, 22], [265, 307, 337, 359, 375, 386, 393, 397, 399, 397, 390, 379, 365, 347, 326, 305, 282, 261, 241, 223, 208, 197, 190, 187, 185, 181, 172, 160, 145, 126, 105, 82, 60, 40, 26, 19, 22, 43, 82, 141, 220, 321], [9, 165, 236, 258, 244, 206, 186, 189, 209, 239, 273, 307, 339, 365, 385, 396, 398, 385, 351, 300, 255, 221, 197, 181, 170, 164, 162, 161, 159, 154, 146, 135, 122, 108, 96, 87, 83, 82, 82, 82, 82, 82, 82]]
            };
          }
        }, {
          key: "getDataLabels",
          value: function getDataLabels(nPoints, labelsArray) {
            var labelsArrayLength = labelsArray.length;
            var step = Math.round(nPoints / labelsArrayLength);
            return Array.from(Array(nPoints)).map(function (item, index) {
              var dataIndex = Math.round(index / step);
              return index % step === 0 ? labelsArray[dataIndex] : '';
            });
          }
        }, {
          key: "getOrdersChartData",
          value: function getOrdersChartData(period) {
            return this.data[period];
          }
        }]);

        return _OrdersChartService;
      }(_data_orders_chart__WEBPACK_IMPORTED_MODULE_0__.OrdersChartData);

      _OrdersChartService.ɵfac = function OrdersChartService_Factory(t) {
        return new (t || _OrdersChartService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_periods_service__WEBPACK_IMPORTED_MODULE_1__.PeriodsService));
      };

      _OrdersChartService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _OrdersChartService,
        factory: _OrdersChartService.ɵfac
      });
      /***/
    },

    /***/
    45644: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OrdersProfitChartService": function OrdersProfitChartService() {
          return (
            /* binding */
            _OrdersProfitChartService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      25917);
      /* harmony import */


      var _data_orders_profit_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../data/orders-profit-chart */
      38691);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _data_orders_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../data/orders-chart */
      44304);
      /* harmony import */


      var _data_profit_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../data/profit-chart */
      21806);

      var _OrdersProfitChartService = /*#__PURE__*/function (_data_orders_profit_c) {
        _inherits(_OrdersProfitChartService, _data_orders_profit_c);

        var _super6 = _createSuper(_OrdersProfitChartService);

        function _OrdersProfitChartService(ordersChartService, profitChartService) {
          var _this6;

          _classCallCheck(this, _OrdersProfitChartService);

          _this6 = _super6.call(this);
          _this6.ordersChartService = ordersChartService;
          _this6.profitChartService = profitChartService;
          _this6.summary = [{
            title: 'Marketplace',
            value: 3654
          }, {
            title: 'Last Month',
            value: 946
          }, {
            title: 'Last Week',
            value: 654
          }, {
            title: 'Today',
            value: 230
          }];
          return _this6;
        }

        _createClass(_OrdersProfitChartService, [{
          key: "getOrderProfitChartSummary",
          value: function getOrderProfitChartSummary() {
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(this.summary);
          }
        }, {
          key: "getOrdersChartData",
          value: function getOrdersChartData(period) {
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(this.ordersChartService.getOrdersChartData(period));
          }
        }, {
          key: "getProfitChartData",
          value: function getProfitChartData(period) {
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(this.profitChartService.getProfitChartData(period));
          }
        }]);

        return _OrdersProfitChartService;
      }(_data_orders_profit_chart__WEBPACK_IMPORTED_MODULE_0__.OrdersProfitChartData);

      _OrdersProfitChartService.ɵfac = function OrdersProfitChartService_Factory(t) {
        return new (t || _OrdersProfitChartService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_data_orders_chart__WEBPACK_IMPORTED_MODULE_1__.OrdersChartData), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_data_profit_chart__WEBPACK_IMPORTED_MODULE_2__.ProfitChartData));
      };

      _OrdersProfitChartService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _OrdersProfitChartService,
        factory: _OrdersProfitChartService.ɵfac
      });
      /***/
    },

    /***/
    67168: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PeriodsService": function PeriodsService() {
          return (
            /* binding */
            _PeriodsService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _PeriodsService = /*#__PURE__*/function () {
        function _PeriodsService() {
          _classCallCheck(this, _PeriodsService);
        }

        _createClass(_PeriodsService, [{
          key: "getYears",
          value: function getYears() {
            return ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'];
          }
        }, {
          key: "getMonths",
          value: function getMonths() {
            return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
          }
        }, {
          key: "getWeeks",
          value: function getWeeks() {
            return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
          }
        }]);

        return _PeriodsService;
      }();

      _PeriodsService.ɵfac = function PeriodsService_Factory(t) {
        return new (t || _PeriodsService)();
      };

      _PeriodsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _PeriodsService,
        factory: _PeriodsService.ɵfac
      });
      /***/
    },

    /***/
    30463: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfitBarAnimationChartService": function ProfitBarAnimationChartService() {
          return (
            /* binding */
            _ProfitBarAnimationChartService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      25917);
      /* harmony import */


      var _data_profit_bar_animation_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../data/profit-bar-animation-chart */
      59322);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ProfitBarAnimationChartService = /*#__PURE__*/function (_data_profit_bar_anim) {
        _inherits(_ProfitBarAnimationChartService, _data_profit_bar_anim);

        var _super7 = _createSuper(_ProfitBarAnimationChartService);

        function _ProfitBarAnimationChartService() {
          var _this7;

          _classCallCheck(this, _ProfitBarAnimationChartService);

          _this7 = _super7.call(this);
          _this7.data = {
            firstLine: _this7.getDataForFirstLine(),
            secondLine: _this7.getDataForSecondLine()
          };
          return _this7;
        }

        _createClass(_ProfitBarAnimationChartService, [{
          key: "getDataForFirstLine",
          value: function getDataForFirstLine() {
            return this.createEmptyArray(100).map(function (_, index) {
              var oneFifth = index / 5;
              return (Math.sin(oneFifth) * (oneFifth - 10) + index / 6) * 5;
            });
          }
        }, {
          key: "getDataForSecondLine",
          value: function getDataForSecondLine() {
            return this.createEmptyArray(100).map(function (_, index) {
              var oneFifth = index / 5;
              return (Math.cos(oneFifth) * (oneFifth - 10) + index / 6) * 5;
            });
          }
        }, {
          key: "createEmptyArray",
          value: function createEmptyArray(nPoints) {
            return Array.from(Array(nPoints));
          }
        }, {
          key: "getChartData",
          value: function getChartData() {
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.data);
          }
        }]);

        return _ProfitBarAnimationChartService;
      }(_data_profit_bar_animation_chart__WEBPACK_IMPORTED_MODULE_0__.ProfitBarAnimationChartData);

      _ProfitBarAnimationChartService.ɵfac = function ProfitBarAnimationChartService_Factory(t) {
        return new (t || _ProfitBarAnimationChartService)();
      };

      _ProfitBarAnimationChartService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _ProfitBarAnimationChartService,
        factory: _ProfitBarAnimationChartService.ɵfac
      });
      /***/
    },

    /***/
    87850: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfitChartService": function ProfitChartService() {
          return (
            /* binding */
            _ProfitChartService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _data_profit_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../data/profit-chart */
      21806);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _periods_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./periods.service */
      67168);

      var _ProfitChartService = /*#__PURE__*/function (_data_profit_chart__W) {
        _inherits(_ProfitChartService, _data_profit_chart__W);

        var _super8 = _createSuper(_ProfitChartService);

        function _ProfitChartService(period) {
          var _this8;

          _classCallCheck(this, _ProfitChartService);

          _this8 = _super8.call(this);
          _this8.period = period;
          _this8.year = ['2012', '2013', '2014', '2015', '2016', '2017', '2018'];
          _this8.data = {};
          _this8.data = {
            week: _this8.getDataForWeekPeriod(),
            month: _this8.getDataForMonthPeriod(),
            year: _this8.getDataForYearPeriod()
          };
          return _this8;
        }

        _createClass(_ProfitChartService, [{
          key: "getDataForWeekPeriod",
          value: function getDataForWeekPeriod() {
            var nPoint = this.period.getWeeks().length;
            return {
              chartLabel: this.period.getWeeks(),
              data: [this.getRandomData(nPoint), this.getRandomData(nPoint), this.getRandomData(nPoint)]
            };
          }
        }, {
          key: "getDataForMonthPeriod",
          value: function getDataForMonthPeriod() {
            var nPoint = this.period.getMonths().length;
            return {
              chartLabel: this.period.getMonths(),
              data: [this.getRandomData(nPoint), this.getRandomData(nPoint), this.getRandomData(nPoint)]
            };
          }
        }, {
          key: "getDataForYearPeriod",
          value: function getDataForYearPeriod() {
            var nPoint = this.year.length;
            return {
              chartLabel: this.year,
              data: [this.getRandomData(nPoint), this.getRandomData(nPoint), this.getRandomData(nPoint)]
            };
          }
        }, {
          key: "getRandomData",
          value: function getRandomData(nPoints) {
            return Array.from(Array(nPoints)).map(function () {
              return Math.round(Math.random() * 500);
            });
          }
        }, {
          key: "getProfitChartData",
          value: function getProfitChartData(period) {
            return this.data[period];
          }
        }]);

        return _ProfitChartService;
      }(_data_profit_chart__WEBPACK_IMPORTED_MODULE_0__.ProfitChartData);

      _ProfitChartService.ɵfac = function ProfitChartService_Factory(t) {
        return new (t || _ProfitChartService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_periods_service__WEBPACK_IMPORTED_MODULE_1__.PeriodsService));
      };

      _ProfitChartService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _ProfitChartService,
        factory: _ProfitChartService.ɵfac
      });
      /***/
    },

    /***/
    63952: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SecurityCamerasService": function SecurityCamerasService() {
          return (
            /* binding */
            _SecurityCamerasService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      25917);
      /* harmony import */


      var _data_security_cameras__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../data/security-cameras */
      96358);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _SecurityCamerasService = /*#__PURE__*/function (_data_security_camera) {
        _inherits(_SecurityCamerasService, _data_security_camera);

        var _super9 = _createSuper(_SecurityCamerasService);

        function _SecurityCamerasService() {
          var _this9;

          _classCallCheck(this, _SecurityCamerasService);

          _this9 = _super9.apply(this, arguments);
          _this9.cameras = [{
            title: 'Camera #1',
            source: 'assets/images/camera1.jpg'
          }, {
            title: 'Camera #2',
            source: 'assets/images/camera2.jpg'
          }, {
            title: 'Camera #3',
            source: 'assets/images/camera3.jpg'
          }, {
            title: 'Camera #4',
            source: 'assets/images/camera4.jpg'
          }];
          return _this9;
        }

        _createClass(_SecurityCamerasService, [{
          key: "getCamerasData",
          value: function getCamerasData() {
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.cameras);
          }
        }]);

        return _SecurityCamerasService;
      }(_data_security_cameras__WEBPACK_IMPORTED_MODULE_0__.SecurityCamerasData);

      _SecurityCamerasService.ɵfac = /*@__PURE__*/function () {
        var ɵSecurityCamerasService_BaseFactory;
        return function SecurityCamerasService_Factory(t) {
          return (ɵSecurityCamerasService_BaseFactory || (ɵSecurityCamerasService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](_SecurityCamerasService)))(t || _SecurityCamerasService);
        };
      }();

      _SecurityCamerasService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _SecurityCamerasService,
        factory: _SecurityCamerasService.ɵfac
      });
      /***/
    },

    /***/
    76608: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SmartTableService": function SmartTableService() {
          return (
            /* binding */
            _SmartTableService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _data_smart_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../data/smart-table */
      98152);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _SmartTableService = /*#__PURE__*/function (_data_smart_table__WE) {
        _inherits(_SmartTableService, _data_smart_table__WE);

        var _super10 = _createSuper(_SmartTableService);

        function _SmartTableService() {
          var _this10;

          _classCallCheck(this, _SmartTableService);

          _this10 = _super10.apply(this, arguments);
          _this10.data = [{
            id: 1,
            firstName: 'Mark',
            lastName: 'Otto',
            username: '@mdo',
            email: 'mdo@gmail.com',
            age: '28'
          }, {
            id: 2,
            firstName: 'Jacob',
            lastName: 'Thornton',
            username: '@fat',
            email: 'fat@yandex.ru',
            age: '45'
          }, {
            id: 3,
            firstName: 'Larry',
            lastName: 'Bird',
            username: '@twitter',
            email: 'twitter@outlook.com',
            age: '18'
          }, {
            id: 4,
            firstName: 'John',
            lastName: 'Snow',
            username: '@snow',
            email: 'snow@gmail.com',
            age: '20'
          }, {
            id: 5,
            firstName: 'Jack',
            lastName: 'Sparrow',
            username: '@jack',
            email: 'jack@yandex.ru',
            age: '30'
          }, {
            id: 6,
            firstName: 'Ann',
            lastName: 'Smith',
            username: '@ann',
            email: 'ann@gmail.com',
            age: '21'
          }, {
            id: 7,
            firstName: 'Barbara',
            lastName: 'Black',
            username: '@barbara',
            email: 'barbara@yandex.ru',
            age: '43'
          }, {
            id: 8,
            firstName: 'Sevan',
            lastName: 'Bagrat',
            username: '@sevan',
            email: 'sevan@outlook.com',
            age: '13'
          }, {
            id: 9,
            firstName: 'Ruben',
            lastName: 'Vardan',
            username: '@ruben',
            email: 'ruben@gmail.com',
            age: '22'
          }, {
            id: 10,
            firstName: 'Karen',
            lastName: 'Sevan',
            username: '@karen',
            email: 'karen@yandex.ru',
            age: '33'
          }, {
            id: 11,
            firstName: 'Mark',
            lastName: 'Otto',
            username: '@mark',
            email: 'mark@gmail.com',
            age: '38'
          }, {
            id: 12,
            firstName: 'Jacob',
            lastName: 'Thornton',
            username: '@jacob',
            email: 'jacob@yandex.ru',
            age: '48'
          }, {
            id: 13,
            firstName: 'Haik',
            lastName: 'Hakob',
            username: '@haik',
            email: 'haik@outlook.com',
            age: '48'
          }, {
            id: 14,
            firstName: 'Garegin',
            lastName: 'Jirair',
            username: '@garegin',
            email: 'garegin@gmail.com',
            age: '40'
          }, {
            id: 15,
            firstName: 'Krikor',
            lastName: 'Bedros',
            username: '@krikor',
            email: 'krikor@yandex.ru',
            age: '32'
          }, {
            'id': 16,
            'firstName': 'Francisca',
            'lastName': 'Brady',
            'username': '@Gibson',
            'email': 'franciscagibson@comtours.com',
            'age': 11
          }, {
            'id': 17,
            'firstName': 'Tillman',
            'lastName': 'Figueroa',
            'username': '@Snow',
            'email': 'tillmansnow@comtours.com',
            'age': 34
          }, {
            'id': 18,
            'firstName': 'Jimenez',
            'lastName': 'Morris',
            'username': '@Bryant',
            'email': 'jimenezbryant@comtours.com',
            'age': 45
          }, {
            'id': 19,
            'firstName': 'Sandoval',
            'lastName': 'Jacobson',
            'username': '@Mcbride',
            'email': 'sandovalmcbride@comtours.com',
            'age': 32
          }, {
            'id': 20,
            'firstName': 'Griffin',
            'lastName': 'Torres',
            'username': '@Charles',
            'email': 'griffincharles@comtours.com',
            'age': 19
          }, {
            'id': 21,
            'firstName': 'Cora',
            'lastName': 'Parker',
            'username': '@Caldwell',
            'email': 'coracaldwell@comtours.com',
            'age': 27
          }, {
            'id': 22,
            'firstName': 'Cindy',
            'lastName': 'Bond',
            'username': '@Velez',
            'email': 'cindyvelez@comtours.com',
            'age': 24
          }, {
            'id': 23,
            'firstName': 'Frieda',
            'lastName': 'Tyson',
            'username': '@Craig',
            'email': 'friedacraig@comtours.com',
            'age': 45
          }, {
            'id': 24,
            'firstName': 'Cote',
            'lastName': 'Holcomb',
            'username': '@Rowe',
            'email': 'coterowe@comtours.com',
            'age': 20
          }, {
            'id': 25,
            'firstName': 'Trujillo',
            'lastName': 'Mejia',
            'username': '@Valenzuela',
            'email': 'trujillovalenzuela@comtours.com',
            'age': 16
          }, {
            'id': 26,
            'firstName': 'Pruitt',
            'lastName': 'Shepard',
            'username': '@Sloan',
            'email': 'pruittsloan@comtours.com',
            'age': 44
          }, {
            'id': 27,
            'firstName': 'Sutton',
            'lastName': 'Ortega',
            'username': '@Black',
            'email': 'suttonblack@comtours.com',
            'age': 42
          }, {
            'id': 28,
            'firstName': 'Marion',
            'lastName': 'Heath',
            'username': '@Espinoza',
            'email': 'marionespinoza@comtours.com',
            'age': 47
          }, {
            'id': 29,
            'firstName': 'Newman',
            'lastName': 'Hicks',
            'username': '@Keith',
            'email': 'newmankeith@comtours.com',
            'age': 15
          }, {
            'id': 30,
            'firstName': 'Boyle',
            'lastName': 'Larson',
            'username': '@Summers',
            'email': 'boylesummers@comtours.com',
            'age': 32
          }, {
            'id': 31,
            'firstName': 'Haynes',
            'lastName': 'Vinson',
            'username': '@Mckenzie',
            'email': 'haynesmckenzie@comtours.com',
            'age': 15
          }, {
            'id': 32,
            'firstName': 'Miller',
            'lastName': 'Acosta',
            'username': '@Young',
            'email': 'milleryoung@comtours.com',
            'age': 55
          }, {
            'id': 33,
            'firstName': 'Johnston',
            'lastName': 'Brown',
            'username': '@Knight',
            'email': 'johnstonknight@comtours.com',
            'age': 29
          }, {
            'id': 34,
            'firstName': 'Lena',
            'lastName': 'Pitts',
            'username': '@Forbes',
            'email': 'lenaforbes@comtours.com',
            'age': 25
          }, {
            'id': 35,
            'firstName': 'Terrie',
            'lastName': 'Kennedy',
            'username': '@Branch',
            'email': 'terriebranch@comtours.com',
            'age': 37
          }, {
            'id': 36,
            'firstName': 'Louise',
            'lastName': 'Aguirre',
            'username': '@Kirby',
            'email': 'louisekirby@comtours.com',
            'age': 44
          }, {
            'id': 37,
            'firstName': 'David',
            'lastName': 'Patton',
            'username': '@Sanders',
            'email': 'davidsanders@comtours.com',
            'age': 26
          }, {
            'id': 38,
            'firstName': 'Holden',
            'lastName': 'Barlow',
            'username': '@Mckinney',
            'email': 'holdenmckinney@comtours.com',
            'age': 11
          }, {
            'id': 39,
            'firstName': 'Baker',
            'lastName': 'Rivera',
            'username': '@Montoya',
            'email': 'bakermontoya@comtours.com',
            'age': 47
          }, {
            'id': 40,
            'firstName': 'Belinda',
            'lastName': 'Lloyd',
            'username': '@Calderon',
            'email': 'belindacalderon@comtours.com',
            'age': 21
          }, {
            'id': 41,
            'firstName': 'Pearson',
            'lastName': 'Patrick',
            'username': '@Clements',
            'email': 'pearsonclements@comtours.com',
            'age': 42
          }, {
            'id': 42,
            'firstName': 'Alyce',
            'lastName': 'Mckee',
            'username': '@Daugherty',
            'email': 'alycedaugherty@comtours.com',
            'age': 55
          }, {
            'id': 43,
            'firstName': 'Valencia',
            'lastName': 'Spence',
            'username': '@Olsen',
            'email': 'valenciaolsen@comtours.com',
            'age': 20
          }, {
            'id': 44,
            'firstName': 'Leach',
            'lastName': 'Holcomb',
            'username': '@Humphrey',
            'email': 'leachhumphrey@comtours.com',
            'age': 28
          }, {
            'id': 45,
            'firstName': 'Moss',
            'lastName': 'Baxter',
            'username': '@Fitzpatrick',
            'email': 'mossfitzpatrick@comtours.com',
            'age': 51
          }, {
            'id': 46,
            'firstName': 'Jeanne',
            'lastName': 'Cooke',
            'username': '@Ward',
            'email': 'jeanneward@comtours.com',
            'age': 59
          }, {
            'id': 47,
            'firstName': 'Wilma',
            'lastName': 'Briggs',
            'username': '@Kidd',
            'email': 'wilmakidd@comtours.com',
            'age': 53
          }, {
            'id': 48,
            'firstName': 'Beatrice',
            'lastName': 'Perry',
            'username': '@Gilbert',
            'email': 'beatricegilbert@comtours.com',
            'age': 39
          }, {
            'id': 49,
            'firstName': 'Whitaker',
            'lastName': 'Hyde',
            'username': '@Mcdonald',
            'email': 'whitakermcdonald@comtours.com',
            'age': 35
          }, {
            'id': 50,
            'firstName': 'Rebekah',
            'lastName': 'Duran',
            'username': '@Gross',
            'email': 'rebekahgross@comtours.com',
            'age': 40
          }, {
            'id': 51,
            'firstName': 'Earline',
            'lastName': 'Mayer',
            'username': '@Woodward',
            'email': 'earlinewoodward@comtours.com',
            'age': 52
          }, {
            'id': 52,
            'firstName': 'Moran',
            'lastName': 'Baxter',
            'username': '@Johns',
            'email': 'moranjohns@comtours.com',
            'age': 20
          }, {
            'id': 53,
            'firstName': 'Nanette',
            'lastName': 'Hubbard',
            'username': '@Cooke',
            'email': 'nanettecooke@comtours.com',
            'age': 55
          }, {
            'id': 54,
            'firstName': 'Dalton',
            'lastName': 'Walker',
            'username': '@Hendricks',
            'email': 'daltonhendricks@comtours.com',
            'age': 25
          }, {
            'id': 55,
            'firstName': 'Bennett',
            'lastName': 'Blake',
            'username': '@Pena',
            'email': 'bennettpena@comtours.com',
            'age': 13
          }, {
            'id': 56,
            'firstName': 'Kellie',
            'lastName': 'Horton',
            'username': '@Weiss',
            'email': 'kellieweiss@comtours.com',
            'age': 48
          }, {
            'id': 57,
            'firstName': 'Hobbs',
            'lastName': 'Talley',
            'username': '@Sanford',
            'email': 'hobbssanford@comtours.com',
            'age': 28
          }, {
            'id': 58,
            'firstName': 'Mcguire',
            'lastName': 'Donaldson',
            'username': '@Roman',
            'email': 'mcguireroman@comtours.com',
            'age': 38
          }, {
            'id': 59,
            'firstName': 'Rodriquez',
            'lastName': 'Saunders',
            'username': '@Harper',
            'email': 'rodriquezharper@comtours.com',
            'age': 20
          }, {
            'id': 60,
            'firstName': 'Lou',
            'lastName': 'Conner',
            'username': '@Sanchez',
            'email': 'lousanchez@comtours.com',
            'age': 16
          }];
          return _this10;
        }

        _createClass(_SmartTableService, [{
          key: "getData",
          value: function getData() {
            return this.data;
          }
        }]);

        return _SmartTableService;
      }(_data_smart_table__WEBPACK_IMPORTED_MODULE_0__.SmartTableData);

      _SmartTableService.ɵfac = /*@__PURE__*/function () {
        var ɵSmartTableService_BaseFactory;
        return function SmartTableService_Factory(t) {
          return (ɵSmartTableService_BaseFactory || (ɵSmartTableService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](_SmartTableService)))(t || _SmartTableService);
        };
      }();

      _SmartTableService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _SmartTableService,
        factory: _SmartTableService.ɵfac
      });
      /***/
    },

    /***/
    749: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SolarService": function SolarService() {
          return (
            /* binding */
            _SolarService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      25917);
      /* harmony import */


      var _data_solar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../data/solar */
      55453);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _SolarService = /*#__PURE__*/function (_data_solar__WEBPACK_) {
        _inherits(_SolarService, _data_solar__WEBPACK_);

        var _super11 = _createSuper(_SolarService);

        function _SolarService() {
          var _this11;

          _classCallCheck(this, _SolarService);

          _this11 = _super11.apply(this, arguments);
          _this11.value = 42;
          return _this11;
        }

        _createClass(_SolarService, [{
          key: "getSolarData",
          value: function getSolarData() {
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.value);
          }
        }]);

        return _SolarService;
      }(_data_solar__WEBPACK_IMPORTED_MODULE_0__.SolarData);

      _SolarService.ɵfac = /*@__PURE__*/function () {
        var ɵSolarService_BaseFactory;
        return function SolarService_Factory(t) {
          return (ɵSolarService_BaseFactory || (ɵSolarService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](_SolarService)))(t || _SolarService);
        };
      }();

      _SolarService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _SolarService,
        factory: _SolarService.ɵfac
      });
      /***/
    },

    /***/
    36961: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StatsBarService": function StatsBarService() {
          return (
            /* binding */
            _StatsBarService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      25917);
      /* harmony import */


      var _data_stats_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../data/stats-bar */
      41401);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _StatsBarService = /*#__PURE__*/function (_data_stats_bar__WEBP) {
        _inherits(_StatsBarService, _data_stats_bar__WEBP);

        var _super12 = _createSuper(_StatsBarService);

        function _StatsBarService() {
          var _this12;

          _classCallCheck(this, _StatsBarService);

          _this12 = _super12.apply(this, arguments);
          _this12.statsBarData = [300, 520, 435, 530, 730, 620, 660, 860];
          return _this12;
        }

        _createClass(_StatsBarService, [{
          key: "getStatsBarData",
          value: function getStatsBarData() {
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.statsBarData);
          }
        }]);

        return _StatsBarService;
      }(_data_stats_bar__WEBPACK_IMPORTED_MODULE_0__.StatsBarData);

      _StatsBarService.ɵfac = /*@__PURE__*/function () {
        var ɵStatsBarService_BaseFactory;
        return function StatsBarService_Factory(t) {
          return (ɵStatsBarService_BaseFactory || (ɵStatsBarService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](_StatsBarService)))(t || _StatsBarService);
        };
      }();

      _StatsBarService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _StatsBarService,
        factory: _StatsBarService.ɵfac
      });
      /***/
    },

    /***/
    22938: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StatsProgressBarService": function StatsProgressBarService() {
          return (
            /* binding */
            _StatsProgressBarService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      25917);
      /* harmony import */


      var _data_stats_progress_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../data/stats-progress-bar */
      1166);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _StatsProgressBarService = /*#__PURE__*/function (_data_stats_progress_) {
        _inherits(_StatsProgressBarService, _data_stats_progress_);

        var _super13 = _createSuper(_StatsProgressBarService);

        function _StatsProgressBarService() {
          var _this13;

          _classCallCheck(this, _StatsProgressBarService);

          _this13 = _super13.apply(this, arguments);
          _this13.progressInfoData = [{
            title: 'Today’s Profit',
            value: 572900,
            activeProgress: 70,
            description: 'Better than last week (70%)'
          }, {
            title: 'New Orders',
            value: 6378,
            activeProgress: 30,
            description: 'Better than last week (30%)'
          }, {
            title: 'New Comments',
            value: 200,
            activeProgress: 55,
            description: 'Better than last week (55%)'
          }];
          return _this13;
        }

        _createClass(_StatsProgressBarService, [{
          key: "getProgressInfoData",
          value: function getProgressInfoData() {
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.progressInfoData);
          }
        }]);

        return _StatsProgressBarService;
      }(_data_stats_progress_bar__WEBPACK_IMPORTED_MODULE_0__.StatsProgressBarData);

      _StatsProgressBarService.ɵfac = /*@__PURE__*/function () {
        var ɵStatsProgressBarService_BaseFactory;
        return function StatsProgressBarService_Factory(t) {
          return (ɵStatsProgressBarService_BaseFactory || (ɵStatsProgressBarService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](_StatsProgressBarService)))(t || _StatsProgressBarService);
        };
      }();

      _StatsProgressBarService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _StatsProgressBarService,
        factory: _StatsProgressBarService.ɵfac
      });
      /***/
    },

    /***/
    89725: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TemperatureHumidityService": function TemperatureHumidityService() {
          return (
            /* binding */
            _TemperatureHumidityService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      25917);
      /* harmony import */


      var _data_temperature_humidity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../data/temperature-humidity */
      16363);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _TemperatureHumidityService = /*#__PURE__*/function (_data_temperature_hum) {
        _inherits(_TemperatureHumidityService, _data_temperature_hum);

        var _super14 = _createSuper(_TemperatureHumidityService);

        function _TemperatureHumidityService() {
          var _this14;

          _classCallCheck(this, _TemperatureHumidityService);

          _this14 = _super14.apply(this, arguments);
          _this14.temperatureDate = {
            value: 24,
            min: 12,
            max: 30
          };
          _this14.humidityDate = {
            value: 87,
            min: 0,
            max: 100
          };
          return _this14;
        }

        _createClass(_TemperatureHumidityService, [{
          key: "getTemperatureData",
          value: function getTemperatureData() {
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.temperatureDate);
          }
        }, {
          key: "getHumidityData",
          value: function getHumidityData() {
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.humidityDate);
          }
        }]);

        return _TemperatureHumidityService;
      }(_data_temperature_humidity__WEBPACK_IMPORTED_MODULE_0__.TemperatureHumidityData);

      _TemperatureHumidityService.ɵfac = /*@__PURE__*/function () {
        var ɵTemperatureHumidityService_BaseFactory;
        return function TemperatureHumidityService_Factory(t) {
          return (ɵTemperatureHumidityService_BaseFactory || (ɵTemperatureHumidityService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](_TemperatureHumidityService)))(t || _TemperatureHumidityService);
        };
      }();

      _TemperatureHumidityService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _TemperatureHumidityService,
        factory: _TemperatureHumidityService.ɵfac
      });
      /***/
    },

    /***/
    54679: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TrafficBarService": function TrafficBarService() {
          return (
            /* binding */
            _TrafficBarService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      25917);
      /* harmony import */


      var _data_traffic_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../data/traffic-bar */
      41360);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _periods_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./periods.service */
      67168);

      var _TrafficBarService = /*#__PURE__*/function (_data_traffic_bar__WE) {
        _inherits(_TrafficBarService, _data_traffic_bar__WE);

        var _super15 = _createSuper(_TrafficBarService);

        function _TrafficBarService(period) {
          var _this15;

          _classCallCheck(this, _TrafficBarService);

          _this15 = _super15.call(this);
          _this15.period = period;
          _this15.data = {};
          _this15.data = {
            week: _this15.getDataForWeekPeriod(),
            month: _this15.getDataForMonthPeriod(),
            year: _this15.getDataForYearPeriod()
          };
          return _this15;
        }

        _createClass(_TrafficBarService, [{
          key: "getDataForWeekPeriod",
          value: function getDataForWeekPeriod() {
            return {
              data: [10, 15, 19, 7, 20, 13, 15],
              labels: this.period.getWeeks(),
              formatter: '{c0} MB'
            };
          }
        }, {
          key: "getDataForMonthPeriod",
          value: function getDataForMonthPeriod() {
            return {
              data: [0.5, 0.3, 0.8, 0.2, 0.3, 0.7, 0.8, 1, 0.7, 0.8, 0.6, 0.7],
              labels: this.period.getMonths(),
              formatter: '{c0} GB'
            };
          }
        }, {
          key: "getDataForYearPeriod",
          value: function getDataForYearPeriod() {
            return {
              data: [10, 15, 19, 7, 20, 13, 15, 19, 11],
              labels: this.period.getYears(),
              formatter: '{c0} GB'
            };
          }
        }, {
          key: "getTrafficBarData",
          value: function getTrafficBarData(period) {
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this.data[period]);
          }
        }]);

        return _TrafficBarService;
      }(_data_traffic_bar__WEBPACK_IMPORTED_MODULE_0__.TrafficBarData);

      _TrafficBarService.ɵfac = function TrafficBarService_Factory(t) {
        return new (t || _TrafficBarService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_periods_service__WEBPACK_IMPORTED_MODULE_1__.PeriodsService));
      };

      _TrafficBarService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: _TrafficBarService,
        factory: _TrafficBarService.ɵfac
      });
      /***/
    },

    /***/
    45428: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TrafficChartService": function TrafficChartService() {
          return (
            /* binding */
            _TrafficChartService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      25917);
      /* harmony import */


      var _data_traffic_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../data/traffic-chart */
      25870);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _TrafficChartService = /*#__PURE__*/function (_data_traffic_chart__) {
        _inherits(_TrafficChartService, _data_traffic_chart__);

        var _super16 = _createSuper(_TrafficChartService);

        function _TrafficChartService() {
          var _this16;

          _classCallCheck(this, _TrafficChartService);

          _this16 = _super16.apply(this, arguments);
          _this16.data = [300, 520, 435, 530, 730, 620, 660, 860];
          return _this16;
        }

        _createClass(_TrafficChartService, [{
          key: "getTrafficChartData",
          value: function getTrafficChartData() {
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.data);
          }
        }]);

        return _TrafficChartService;
      }(_data_traffic_chart__WEBPACK_IMPORTED_MODULE_0__.TrafficChartData);

      _TrafficChartService.ɵfac = /*@__PURE__*/function () {
        var ɵTrafficChartService_BaseFactory;
        return function TrafficChartService_Factory(t) {
          return (ɵTrafficChartService_BaseFactory || (ɵTrafficChartService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](_TrafficChartService)))(t || _TrafficChartService);
        };
      }();

      _TrafficChartService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _TrafficChartService,
        factory: _TrafficChartService.ɵfac
      });
      /***/
    },

    /***/
    99415: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TrafficListService": function TrafficListService() {
          return (
            /* binding */
            _TrafficListService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      25917);
      /* harmony import */


      var _data_traffic_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../data/traffic-list */
      33530);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _periods_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./periods.service */
      67168);

      var _TrafficListService = /*#__PURE__*/function (_data_traffic_list__W) {
        _inherits(_TrafficListService, _data_traffic_list__W);

        var _super17 = _createSuper(_TrafficListService);

        function _TrafficListService(period) {
          var _this17;

          _classCallCheck(this, _TrafficListService);

          _this17 = _super17.call(this);
          _this17.period = period;

          _this17.getRandom = function (roundTo) {
            return Math.round(Math.random() * roundTo);
          };

          _this17.data = {};
          _this17.data = {
            week: _this17.getDataWeek(),
            month: _this17.getDataMonth(),
            year: _this17.getDataYear()
          };
          return _this17;
        }

        _createClass(_TrafficListService, [{
          key: "getDataWeek",
          value: function getDataWeek() {
            var _this18 = this;

            var getFirstDateInPeriod = function getFirstDateInPeriod() {
              var weeks = _this18.period.getWeeks();

              return weeks[weeks.length - 1];
            };

            return this.reduceData(this.period.getWeeks(), getFirstDateInPeriod);
          }
        }, {
          key: "getDataMonth",
          value: function getDataMonth() {
            var _this19 = this;

            var getFirstDateInPeriod = function getFirstDateInPeriod() {
              var months = _this19.period.getMonths();

              return months[months.length - 1];
            };

            return this.reduceData(this.period.getMonths(), getFirstDateInPeriod);
          }
        }, {
          key: "getDataYear",
          value: function getDataYear() {
            var _this20 = this;

            var getFirstDateInPeriod = function getFirstDateInPeriod() {
              var years = _this20.period.getYears();

              return "".concat(parseInt(years[0], 10) - 1);
            };

            return this.reduceData(this.period.getYears(), getFirstDateInPeriod);
          }
        }, {
          key: "reduceData",
          value: function reduceData(timePeriods, getFirstDateInPeriod) {
            var _this21 = this;

            return timePeriods.reduce(function (result, timePeriod, index) {
              var hasResult = result[index - 1];
              var prevDate = hasResult ? result[index - 1].comparison.nextDate : getFirstDateInPeriod();
              var prevValue = hasResult ? result[index - 1].comparison.nextValue : _this21.getRandom(100);

              var nextValue = _this21.getRandom(100);

              var deltaValue = prevValue - nextValue;
              var item = {
                date: timePeriod,
                value: _this21.getRandom(1000),
                delta: {
                  up: deltaValue <= 0,
                  value: Math.abs(deltaValue)
                },
                comparison: {
                  prevDate: prevDate,
                  prevValue: prevValue,
                  nextDate: timePeriod,
                  nextValue: nextValue
                }
              };
              return [].concat(_toConsumableArray(result), [item]);
            }, []);
          }
        }, {
          key: "getTrafficListData",
          value: function getTrafficListData(period) {
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this.data[period]);
          }
        }]);

        return _TrafficListService;
      }(_data_traffic_list__WEBPACK_IMPORTED_MODULE_0__.TrafficListData);

      _TrafficListService.ɵfac = function TrafficListService_Factory(t) {
        return new (t || _TrafficListService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_periods_service__WEBPACK_IMPORTED_MODULE_1__.PeriodsService));
      };

      _TrafficListService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: _TrafficListService,
        factory: _TrafficListService.ɵfac
      });
      /***/
    },

    /***/
    41922: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserActivityService": function UserActivityService() {
          return (
            /* binding */
            _UserActivityService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      25917);
      /* harmony import */


      var _data_user_activity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../data/user-activity */
      74345);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _periods_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./periods.service */
      67168);

      var _UserActivityService = /*#__PURE__*/function (_data_user_activity__) {
        _inherits(_UserActivityService, _data_user_activity__);

        var _super18 = _createSuper(_UserActivityService);

        function _UserActivityService(periods) {
          var _this22;

          _classCallCheck(this, _UserActivityService);

          _this22 = _super18.call(this);
          _this22.periods = periods;

          _this22.getRandom = function (roundTo) {
            return Math.round(Math.random() * roundTo);
          };

          _this22.data = {};
          _this22.data = {
            week: _this22.getDataWeek(),
            month: _this22.getDataMonth(),
            year: _this22.getDataYear()
          };
          return _this22;
        }

        _createClass(_UserActivityService, [{
          key: "generateUserActivityRandomData",
          value: function generateUserActivityRandomData(date) {
            return {
              date: date,
              pagesVisitCount: this.getRandom(1000),
              deltaUp: this.getRandom(1) % 2 === 0,
              newVisits: this.getRandom(100)
            };
          }
        }, {
          key: "getDataWeek",
          value: function getDataWeek() {
            var _this23 = this;

            return this.periods.getWeeks().map(function (week) {
              return _this23.generateUserActivityRandomData(week);
            });
          }
        }, {
          key: "getDataMonth",
          value: function getDataMonth() {
            var _this24 = this;

            var currentDate = new Date();
            var days = currentDate.getDate();
            var month = this.periods.getMonths()[currentDate.getMonth()];
            return Array.from(Array(days)).map(function (_, index) {
              var date = "".concat(index + 1, " ").concat(month);
              return _this24.generateUserActivityRandomData(date);
            });
          }
        }, {
          key: "getDataYear",
          value: function getDataYear() {
            var _this25 = this;

            return this.periods.getYears().map(function (year) {
              return _this25.generateUserActivityRandomData(year);
            });
          }
        }, {
          key: "getUserActivityData",
          value: function getUserActivityData(period) {
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this.data[period]);
          }
        }]);

        return _UserActivityService;
      }(_data_user_activity__WEBPACK_IMPORTED_MODULE_0__.UserActivityData);

      _UserActivityService.ɵfac = function UserActivityService_Factory(t) {
        return new (t || _UserActivityService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_periods_service__WEBPACK_IMPORTED_MODULE_1__.PeriodsService));
      };

      _UserActivityService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: _UserActivityService,
        factory: _UserActivityService.ɵfac
      });
      /***/
    },

    /***/
    33167: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserService": function UserService() {
          return (
            /* binding */
            _UserService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      25917);
      /* harmony import */


      var _data_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../data/users */
      63288);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _UserService = /*#__PURE__*/function (_data_users__WEBPACK_) {
        _inherits(_UserService, _data_users__WEBPACK_);

        var _super19 = _createSuper(_UserService);

        function _UserService() {
          var _this26;

          _classCallCheck(this, _UserService);

          _this26 = _super19.apply(this, arguments);
          _this26.time = new Date();
          _this26.users = {
            nick: {
              name: 'Nick Jones',
              picture: 'assets/images/nick.png'
            },
            eva: {
              name: 'Eva Moor',
              picture: 'assets/images/eva.png'
            },
            jack: {
              name: 'Jack Williams',
              picture: 'assets/images/jack.png'
            },
            lee: {
              name: 'Lee Wong',
              picture: 'assets/images/lee.png'
            },
            alan: {
              name: 'Alan Thompson',
              picture: 'assets/images/alan.png'
            },
            kate: {
              name: 'Kate Martinez',
              picture: 'assets/images/kate.png'
            }
          };
          _this26.types = {
            mobile: 'mobile',
            home: 'home',
            work: 'work'
          };
          _this26.contacts = [{
            user: _this26.users.nick,
            type: _this26.types.mobile
          }, {
            user: _this26.users.eva,
            type: _this26.types.home
          }, {
            user: _this26.users.jack,
            type: _this26.types.mobile
          }, {
            user: _this26.users.lee,
            type: _this26.types.mobile
          }, {
            user: _this26.users.alan,
            type: _this26.types.home
          }, {
            user: _this26.users.kate,
            type: _this26.types.work
          }];
          _this26.recentUsers = [{
            user: _this26.users.alan,
            type: _this26.types.home,
            time: _this26.time.setHours(21, 12)
          }, {
            user: _this26.users.eva,
            type: _this26.types.home,
            time: _this26.time.setHours(17, 45)
          }, {
            user: _this26.users.nick,
            type: _this26.types.mobile,
            time: _this26.time.setHours(5, 29)
          }, {
            user: _this26.users.lee,
            type: _this26.types.mobile,
            time: _this26.time.setHours(11, 24)
          }, {
            user: _this26.users.jack,
            type: _this26.types.mobile,
            time: _this26.time.setHours(10, 45)
          }, {
            user: _this26.users.kate,
            type: _this26.types.work,
            time: _this26.time.setHours(9, 42)
          }, {
            user: _this26.users.kate,
            type: _this26.types.work,
            time: _this26.time.setHours(9, 31)
          }, {
            user: _this26.users.jack,
            type: _this26.types.mobile,
            time: _this26.time.setHours(8, 0)
          }];
          return _this26;
        }

        _createClass(_UserService, [{
          key: "getUsers",
          value: function getUsers() {
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.users);
          }
        }, {
          key: "getContacts",
          value: function getContacts() {
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.contacts);
          }
        }, {
          key: "getRecentUsers",
          value: function getRecentUsers() {
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.recentUsers);
          }
        }]);

        return _UserService;
      }(_data_users__WEBPACK_IMPORTED_MODULE_0__.UserData);

      _UserService.ɵfac = /*@__PURE__*/function () {
        var ɵUserService_BaseFactory;
        return function UserService_Factory(t) {
          return (ɵUserService_BaseFactory || (ɵUserService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](_UserService)))(t || _UserService);
        };
      }();

      _UserService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _UserService,
        factory: _UserService.ɵfac
      });
      /***/
    },

    /***/
    57819: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VisitorsAnalyticsService": function VisitorsAnalyticsService() {
          return (
            /* binding */
            _VisitorsAnalyticsService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      25917);
      /* harmony import */


      var _data_visitors_analytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../data/visitors-analytics */
      75797);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _periods_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./periods.service */
      67168);

      var _VisitorsAnalyticsService = /*#__PURE__*/function (_data_visitors_analyt) {
        _inherits(_VisitorsAnalyticsService, _data_visitors_analyt);

        var _super20 = _createSuper(_VisitorsAnalyticsService);

        function _VisitorsAnalyticsService(periodService) {
          var _this27;

          _classCallCheck(this, _VisitorsAnalyticsService);

          _this27 = _super20.call(this);
          _this27.periodService = periodService;
          _this27.pieChartValue = 75;
          _this27.innerLinePoints = [94, 188, 225, 244, 253, 254, 249, 235, 208, 173, 141, 118, 105, 97, 94, 96, 104, 121, 147, 183, 224, 265, 302, 333, 358, 375, 388, 395, 400, 400, 397, 390, 377, 360, 338, 310, 278, 241, 204, 166, 130, 98, 71, 49, 32, 20, 13, 9];
          _this27.outerLinePoints = [85, 71, 59, 50, 45, 42, 41, 44, 58, 88, 136, 199, 267, 326, 367, 391, 400, 397, 376, 319, 200, 104, 60, 41, 36, 37, 44, 55, 74, 100, 131, 159, 180, 193, 199, 200, 195, 184, 164, 135, 103, 73, 50, 33, 22, 15, 11];
          return _this27;
        }

        _createClass(_VisitorsAnalyticsService, [{
          key: "generateOutlineLineData",
          value: function generateOutlineLineData() {
            var months = this.periodService.getMonths();
            var outerLinePointsLength = this.outerLinePoints.length;
            var monthsLength = months.length;
            return this.outerLinePoints.map(function (p, index) {
              var monthIndex = Math.round(index / 4);
              var label = index % Math.round(outerLinePointsLength / monthsLength) === 0 ? months[monthIndex] : '';
              return {
                label: label,
                value: p
              };
            });
          }
        }, {
          key: "getInnerLineChartData",
          value: function getInnerLineChartData() {
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this.innerLinePoints);
          }
        }, {
          key: "getOutlineLineChartData",
          value: function getOutlineLineChartData() {
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this.generateOutlineLineData());
          }
        }, {
          key: "getPieChartData",
          value: function getPieChartData() {
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this.pieChartValue);
          }
        }]);

        return _VisitorsAnalyticsService;
      }(_data_visitors_analytics__WEBPACK_IMPORTED_MODULE_0__.VisitorsAnalyticsData);

      _VisitorsAnalyticsService.ɵfac = function VisitorsAnalyticsService_Factory(t) {
        return new (t || _VisitorsAnalyticsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_periods_service__WEBPACK_IMPORTED_MODULE_1__.PeriodsService));
      };

      _VisitorsAnalyticsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: _VisitorsAnalyticsService,
        factory: _VisitorsAnalyticsService.ɵfac
      });
      /***/
    },

    /***/
    65239: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "throwIfAlreadyLoaded": function throwIfAlreadyLoaded() {
          return (
            /* binding */
            _throwIfAlreadyLoaded
          );
        }
        /* harmony export */

      });

      function _throwIfAlreadyLoaded(parentModule, moduleName) {
        if (parentModule) {
          throw new Error("".concat(moduleName, " has already been loaded. Import Core modules in the AppModule only."));
        }
      }
      /***/

    },

    /***/
    30553: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AnalyticsService": function AnalyticsService() {
          return (
            /* binding */
            _AnalyticsService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      45435);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);

      var _AnalyticsService = /*#__PURE__*/function () {
        function _AnalyticsService(location, router) {
          _classCallCheck(this, _AnalyticsService);

          this.location = location;
          this.router = router;
          this.enabled = false;
        }

        _createClass(_AnalyticsService, [{
          key: "trackPageViews",
          value: function trackPageViews() {
            var _this28 = this;

            if (this.enabled) {
              this.router.events.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.filter)(function (event) {
                return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd;
              })).subscribe(function () {
                ga('send', {
                  hitType: 'pageview',
                  page: _this28.location.path()
                });
              });
            }
          }
        }, {
          key: "trackEvent",
          value: function trackEvent(eventName) {
            if (this.enabled) {
              ga('send', 'event', eventName);
            }
          }
        }]);

        return _AnalyticsService;
      }();

      _AnalyticsService.ɵfac = function AnalyticsService_Factory(t) {
        return new (t || _AnalyticsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
      };

      _AnalyticsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _AnalyticsService,
        factory: _AnalyticsService.ɵfac
      });
      /***/
    },

    /***/
    89535: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LayoutService": function LayoutService() {
          return (
            /* reexport safe */
            _layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService
          );
        },

        /* harmony export */
        "AnalyticsService": function AnalyticsService() {
          return (
            /* reexport safe */
            _analytics_service__WEBPACK_IMPORTED_MODULE_1__.AnalyticsService
          );
        },

        /* harmony export */
        "PlayerService": function PlayerService() {
          return (
            /* reexport safe */
            _player_service__WEBPACK_IMPORTED_MODULE_2__.PlayerService
          );
        },

        /* harmony export */
        "SeoService": function SeoService() {
          return (
            /* reexport safe */
            _seo_service__WEBPACK_IMPORTED_MODULE_4__.SeoService
          );
        },

        /* harmony export */
        "StateService": function StateService() {
          return (
            /* reexport safe */
            _state_service__WEBPACK_IMPORTED_MODULE_3__.StateService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./layout.service */
      65915);
      /* harmony import */


      var _analytics_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./analytics.service */
      30553);
      /* harmony import */


      var _player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./player.service */
      74169);
      /* harmony import */


      var _state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./state.service */
      19366);
      /* harmony import */


      var _seo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./seo.service */
      93285);
      /***/

    },

    /***/
    65915: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LayoutService": function LayoutService() {
          return (
            /* binding */
            _LayoutService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      79765);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      47349);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      65792);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      54395);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _LayoutService = /*#__PURE__*/function () {
        function _LayoutService() {
          _classCallCheck(this, _LayoutService);

          this.layoutSize$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
          this.layoutSizeChange$ = this.layoutSize$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.shareReplay)({
            refCount: true
          }));
        }

        _createClass(_LayoutService, [{
          key: "changeLayoutSize",
          value: function changeLayoutSize() {
            this.layoutSize$.next();
          }
        }, {
          key: "onChangeLayoutSize",
          value: function onChangeLayoutSize() {
            return this.layoutSizeChange$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.delay)(1));
          }
        }, {
          key: "onSafeChangeLayoutSize",
          value: function onSafeChangeLayoutSize() {
            return this.layoutSizeChange$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.debounceTime)(350));
          }
        }]);

        return _LayoutService;
      }();

      _LayoutService.ɵfac = function LayoutService_Factory(t) {
        return new (t || _LayoutService)();
      };

      _LayoutService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _LayoutService,
        factory: _LayoutService.ɵfac
      });
      /***/
    },

    /***/
    74169: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Track": function Track() {
          return (
            /* binding */
            _Track
          );
        },

        /* harmony export */
        "PlayerService": function PlayerService() {
          return (
            /* binding */
            _PlayerService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _Track = function _Track() {
        _classCallCheck(this, _Track);
      };

      var _PlayerService = /*#__PURE__*/function () {
        function _PlayerService() {
          _classCallCheck(this, _PlayerService);

          this.playlist = [{
            name: 'Don\'t Wanna Fight',
            artist: 'Alabama Shakes',
            url: 'https://p.scdn.co/mp3-preview/6156cdbca425a894972c02fca9d76c0b70e001af',
            cover: 'assets/images/cover1.jpg'
          }, {
            name: 'Harder',
            artist: 'Daft Punk',
            url: 'https://p.scdn.co/mp3-preview/92a04c7c0e96bf93a1b1b1cae7dfff1921969a7b',
            cover: 'assets/images/cover2.jpg'
          }, {
            name: 'Come Together',
            artist: 'Beatles',
            url: 'https://p.scdn.co/mp3-preview/83090a4db6899eaca689ae35f69126dbe65d94c9',
            cover: 'assets/images/cover3.jpg'
          }];
        }

        _createClass(_PlayerService, [{
          key: "random",
          value: function random() {
            this.current = Math.floor(Math.random() * this.playlist.length);
            return this.playlist[this.current];
          }
        }, {
          key: "next",
          value: function next() {
            return this.getNextTrack();
          }
        }, {
          key: "prev",
          value: function prev() {
            return this.getPrevTrack();
          }
        }, {
          key: "getNextTrack",
          value: function getNextTrack() {
            if (this.current === this.playlist.length - 1) {
              this.current = 0;
            } else {
              this.current++;
            }

            return this.playlist[this.current];
          }
        }, {
          key: "getPrevTrack",
          value: function getPrevTrack() {
            if (this.current === 0) {
              this.current = this.playlist.length - 1;
            } else {
              this.current--;
            }

            return this.playlist[this.current];
          }
        }]);

        return _PlayerService;
      }();

      _PlayerService.ɵfac = function PlayerService_Factory(t) {
        return new (t || _PlayerService)();
      };

      _PlayerService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _PlayerService,
        factory: _PlayerService.ɵfac
      });
      /***/
    },

    /***/
    93285: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SeoService": function SeoService() {
          return (
            /* binding */
            _SeoService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @nebular/theme */
      42522);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      45435);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      46782);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      79765);

      var _SeoService = /*#__PURE__*/function () {
        function _SeoService(router, document, platformId) {
          _classCallCheck(this, _SeoService);

          this.router = router;
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
          this.isBrowser = (0, _angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(platformId);
          this.dom = document;

          if (this.isBrowser) {
            this.createCanonicalTag();
          }
        }

        _createClass(_SeoService, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
          }
        }, {
          key: "createCanonicalTag",
          value: function createCanonicalTag() {
            this.linkCanonical = this.dom.createElement('link');
            this.linkCanonical.setAttribute('rel', 'canonical');
            this.dom.head.appendChild(this.linkCanonical);
            this.linkCanonical.setAttribute('href', this.getCanonicalUrl());
          }
        }, {
          key: "trackCanonicalChanges",
          value: function trackCanonicalChanges() {
            var _this29 = this;

            if (!this.isBrowser) {
              return;
            }

            this.router.events.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(function (event) {
              return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd;
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe(function () {
              _this29.linkCanonical.setAttribute('href', _this29.getCanonicalUrl());
            });
          }
        }, {
          key: "getCanonicalUrl",
          value: function getCanonicalUrl() {
            return this.dom.location.origin + this.dom.location.pathname;
          }
        }]);

        return _SeoService;
      }();

      _SeoService.ɵfac = function SeoService_Factory(t) {
        return new (t || _SeoService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NB_DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.PLATFORM_ID));
      };

      _SeoService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
        token: _SeoService,
        factory: _SeoService.ɵfac
      });
      /***/
    },

    /***/
    19366: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StateService": function StateService() {
          return (
            /* binding */
            _StateService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      26215);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      25917);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      70409);
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @nebular/theme */
      42522);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _StateService = /*#__PURE__*/function () {
        function _StateService(directionService) {
          var _this30 = this;

          _classCallCheck(this, _StateService);

          this.layouts = [{
            name: 'One Column',
            icon: 'nb-layout-default',
            id: 'one-column',
            selected: true
          }, {
            name: 'Two Column',
            icon: 'nb-layout-two-column',
            id: 'two-column'
          }, {
            name: 'Center Column',
            icon: 'nb-layout-centre',
            id: 'center-column'
          }];
          this.sidebars = [{
            name: 'Sidebar at layout start',
            icon: 'nb-layout-sidebar-left',
            id: 'start',
            selected: true
          }, {
            name: 'Sidebar at layout end',
            icon: 'nb-layout-sidebar-right',
            id: 'end'
          }];
          this.layoutState$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.layouts[0]);
          this.sidebarState$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.sidebars[0]);
          this.alive = true;
          directionService.onDirectionChange().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.takeWhile)(function () {
            return _this30.alive;
          })).subscribe(function (direction) {
            return _this30.updateSidebarIcons(direction);
          });
          this.updateSidebarIcons(directionService.getDirection());
        }

        _createClass(_StateService, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.alive = false;
          }
        }, {
          key: "updateSidebarIcons",
          value: function updateSidebarIcons(direction) {
            var _this$sidebars = _slicedToArray(this.sidebars, 2),
                startSidebar = _this$sidebars[0],
                endSidebar = _this$sidebars[1];

            var isLtr = direction === _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbLayoutDirection.LTR;
            var startIconClass = isLtr ? 'nb-layout-sidebar-left' : 'nb-layout-sidebar-right';
            var endIconClass = isLtr ? 'nb-layout-sidebar-right' : 'nb-layout-sidebar-left';
            startSidebar.icon = startIconClass;
            endSidebar.icon = endIconClass;
          }
        }, {
          key: "setLayoutState",
          value: function setLayoutState(state) {
            this.layoutState$.next(state);
          }
        }, {
          key: "getLayoutStates",
          value: function getLayoutStates() {
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(this.layouts);
          }
        }, {
          key: "onLayoutState",
          value: function onLayoutState() {
            return this.layoutState$.asObservable();
          }
        }, {
          key: "setSidebarState",
          value: function setSidebarState(state) {
            this.sidebarState$.next(state);
          }
        }, {
          key: "getSidebarStates",
          value: function getSidebarStates() {
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(this.sidebars);
          }
        }, {
          key: "onSidebarState",
          value: function onSidebarState() {
            return this.sidebarState$.asObservable();
          }
        }]);

        return _StateService;
      }();

      _StateService.ɵfac = function StateService_Factory(t) {
        return new (t || _StateService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbLayoutDirectionService));
      };

      _StateService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _StateService,
        factory: _StateService.ɵfac
      });
      /***/
    },

    /***/
    73747: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FooterComponent": function FooterComponent() {
          return (
            /* binding */
            _FooterComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _FooterComponent = function _FooterComponent() {
        _classCallCheck(this, _FooterComponent);
      };

      _FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || _FooterComponent)();
      };

      _FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _FooterComponent,
        selectors: [["ngx-footer"]],
        decls: 0,
        vars: 0,
        template: function FooterComponent_Template(rf, ctx) {},
        styles: [".nb-theme-default   [_nghost-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.nb-theme-default   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  text-align: center;\n}\n\n.nb-theme-dark   [_nghost-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.nb-theme-dark   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  text-align: center;\n}\n\n.nb-theme-cosmic   [_nghost-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.nb-theme-cosmic   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  text-align: center;\n}\n\n.nb-theme-corporate   [_nghost-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.nb-theme-corporate   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  text-align: center;\n}"]
      });
      /***/
    },

    /***/
    77842: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HeaderComponent": function HeaderComponent() {
          return (
            /* binding */
            _HeaderComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      46782);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      88002);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      79765);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @nebular/theme */
      42522);
      /* harmony import */


      var _core_data_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../@core/data/users */
      63288);
      /* harmony import */


      var _core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../@core/utils */
      89535);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _nebular_security__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @nebular/security */
      51938);

      function HeaderComponent_nb_option_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var theme_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", theme_r2.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", theme_r2.name, "");
        }
      }

      function HeaderComponent_nb_action_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-action", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "nb-user", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nbContextMenu", ctx_r1.userMenu)("onlyPicture", ctx_r1.userPictureOnly)("name", ctx_r1.user == null ? null : ctx_r1.user.name)("picture", ctx_r1.user == null ? null : ctx_r1.user.picture);
        }
      }

      var _c0 = function _c0() {
        return ["view", "user"];
      };

      var _HeaderComponent = /*#__PURE__*/function () {
        function _HeaderComponent(sidebarService, menuService, themeService, userService, layoutService, breakpointService) {
          _classCallCheck(this, _HeaderComponent);

          this.sidebarService = sidebarService;
          this.menuService = menuService;
          this.themeService = themeService;
          this.userService = userService;
          this.layoutService = layoutService;
          this.breakpointService = breakpointService;
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
          this.userPictureOnly = false;
          this.themes = [{
            value: 'default',
            name: 'Light'
          }, {
            value: 'dark',
            name: 'Dark'
          }, {
            value: 'cosmic',
            name: 'Cosmic'
          }, {
            value: 'corporate',
            name: 'Corporate'
          }];
          this.currentTheme = 'default';
          this.userMenu = [{
            title: 'Profile'
          }, {
            title: 'Log out'
          }];
        }

        _createClass(_HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this31 = this;

            this.currentTheme = this.themeService.currentTheme;
            this.userService.getUsers().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe(function (users) {
              return _this31.user = users.any;
            });

            var _this$breakpointServi = this.breakpointService.getBreakpointsMap(),
                xl = _this$breakpointServi.xl;

            this.themeService.onMediaQueryChange().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  currentBreakpoint = _ref2[1];

              return currentBreakpoint.width < xl;
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe(function (isLessThanXl) {
              return _this31.userPictureOnly = isLessThanXl;
            });
            this.themeService.onThemeChange().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(function (_ref3) {
              var name = _ref3.name;
              return name;
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe(function (themeName) {
              return _this31.currentTheme = themeName;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next();
            this.destroy$.complete();
          }
        }, {
          key: "changeTheme",
          value: function changeTheme(themeName) {
            this.themeService.changeTheme(themeName);
          }
        }, {
          key: "toggleSidebar",
          value: function toggleSidebar() {
            this.sidebarService.toggle(true, 'menu-sidebar');
            this.layoutService.changeLayoutSize();
            return false;
          }
        }, {
          key: "navigateHome",
          value: function navigateHome() {
            this.menuService.navigateHome();
            return false;
          }
        }]);

        return _HeaderComponent;
      }();

      _HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || _HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbSidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_data_users__WEBPACK_IMPORTED_MODULE_0__.UserData), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_utils__WEBPACK_IMPORTED_MODULE_1__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbMediaBreakpointsService));
      };

      _HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _HeaderComponent,
        selectors: [["ngx-header"]],
        decls: 17,
        vars: 4,
        consts: [[1, "header-container"], [1, "logo-container"], ["href", "#", 1, "sidebar-toggle", 3, "click"], ["icon", "menu-2-outline"], ["href", "#", 1, "logo", 3, "click"], ["status", "primary", 3, "selected", "selectedChange"], [3, "value", 4, "ngFor", "ngForOf"], ["size", "small"], [1, "control-item"], ["type", "rotate-layout"], ["icon", "email-outline", 1, "control-item"], ["icon", "bell-outline", 1, "control-item"], ["class", "user-action", 4, "nbIsGranted"], [3, "value"], [1, "user-action"], [3, "nbContextMenu", "onlyPicture", "name", "picture"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_2_listener() {
              return ctx.toggleSidebar();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "nb-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_4_listener() {
              return ctx.navigateHome();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Admin-");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "nb-select", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectedChange", function HeaderComponent_Template_nb_select_selectedChange_8_listener($event) {
              return ctx.changeTheme($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, HeaderComponent_nb_option_9_Template, 2, 2, "nb-option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "nb-actions", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "nb-action", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "nb-search", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "nb-action", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "nb-action", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, HeaderComponent_nb_action_16_Template, 2, 4, "nb-action", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("selected", ctx.currentTheme);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.themes);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nbIsGranted", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c0));
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbIconComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbActionsComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbActionComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbSearchComponent, _nebular_security__WEBPACK_IMPORTED_MODULE_8__.NbIsGrantedDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbOptionComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbUserComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbContextMenuDirective],
        styles: [".nb-theme-default   [_nghost-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n.nb-theme-default   [_nghost-%COMP%]   .logo-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: calc(16rem - 1.25rem);\n}\n.nb-theme-default   [_nghost-%COMP%]   nb-action[_ngcontent-%COMP%] {\n  height: auto;\n  display: flex;\n  align-content: center;\n}\n.nb-theme-default   [_nghost-%COMP%]   nb-user[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.nb-theme-default   [_nghost-%COMP%]     nb-search button {\n  padding: 0 !important;\n}\n.nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: auto;\n  display: contents;\n}\n.nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #8f9bb3;\n}\n[dir=ltr]   .nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%] {\n  padding-right: 1.25rem;\n}\n[dir=rtl]   .nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%] {\n  padding-left: 1.25rem;\n}\n.nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n}\n.nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  padding: 0 1.25rem;\n  font-size: 1.75rem;\n  white-space: nowrap;\n  text-decoration: none;\n}\n[dir=ltr]   .nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  border-left: 1px solid #edf1f7;\n}\n[dir=rtl]   .nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  border-right: 1px solid #edf1f7;\n}\n@media (max-width: 767.98px) {\n  .nb-theme-default   [_nghost-%COMP%]   .control-item[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .nb-theme-default   [_nghost-%COMP%]   .user-action[_ngcontent-%COMP%] {\n    border: none;\n    padding: 0;\n  }\n}\n@media (max-width: 575.98px) {\n  .nb-theme-default   [_nghost-%COMP%]   nb-select[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.nb-theme-dark   [_nghost-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n.nb-theme-dark   [_nghost-%COMP%]   .logo-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: calc(16rem - 1.25rem);\n}\n.nb-theme-dark   [_nghost-%COMP%]   nb-action[_ngcontent-%COMP%] {\n  height: auto;\n  display: flex;\n  align-content: center;\n}\n.nb-theme-dark   [_nghost-%COMP%]   nb-user[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.nb-theme-dark   [_nghost-%COMP%]     nb-search button {\n  padding: 0 !important;\n}\n.nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: auto;\n  display: contents;\n}\n.nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #8f9bb3;\n}\n[dir=ltr]   .nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%] {\n  padding-right: 1.25rem;\n}\n[dir=rtl]   .nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%] {\n  padding-left: 1.25rem;\n}\n.nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n}\n.nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  padding: 0 1.25rem;\n  font-size: 1.75rem;\n  white-space: nowrap;\n  text-decoration: none;\n}\n[dir=ltr]   .nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  border-left: 1px solid #151a30;\n}\n[dir=rtl]   .nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  border-right: 1px solid #151a30;\n}\n@media (max-width: 767.98px) {\n  .nb-theme-dark   [_nghost-%COMP%]   .control-item[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .nb-theme-dark   [_nghost-%COMP%]   .user-action[_ngcontent-%COMP%] {\n    border: none;\n    padding: 0;\n  }\n}\n@media (max-width: 575.98px) {\n  .nb-theme-dark   [_nghost-%COMP%]   nb-select[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.nb-theme-cosmic   [_nghost-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n.nb-theme-cosmic   [_nghost-%COMP%]   .logo-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: calc(16rem - 1.25rem);\n}\n.nb-theme-cosmic   [_nghost-%COMP%]   nb-action[_ngcontent-%COMP%] {\n  height: auto;\n  display: flex;\n  align-content: center;\n}\n.nb-theme-cosmic   [_nghost-%COMP%]   nb-user[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.nb-theme-cosmic   [_nghost-%COMP%]     nb-search button {\n  padding: 0 !important;\n}\n.nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: auto;\n  display: contents;\n}\n.nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #b4b4db;\n}\n[dir=ltr]   .nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%] {\n  padding-right: 1.25rem;\n}\n[dir=rtl]   .nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%] {\n  padding-left: 1.25rem;\n}\n.nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n}\n.nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  padding: 0 1.25rem;\n  font-size: 1.75rem;\n  white-space: nowrap;\n  text-decoration: none;\n}\n[dir=ltr]   .nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  border-left: 1px solid #1b1b38;\n}\n[dir=rtl]   .nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  border-right: 1px solid #1b1b38;\n}\n@media (max-width: 767.98px) {\n  .nb-theme-cosmic   [_nghost-%COMP%]   .control-item[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .nb-theme-cosmic   [_nghost-%COMP%]   .user-action[_ngcontent-%COMP%] {\n    border: none;\n    padding: 0;\n  }\n}\n@media (max-width: 575.98px) {\n  .nb-theme-cosmic   [_nghost-%COMP%]   nb-select[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.nb-theme-corporate   [_nghost-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n.nb-theme-corporate   [_nghost-%COMP%]   .logo-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: calc(16rem - 1.25rem);\n}\n.nb-theme-corporate   [_nghost-%COMP%]   nb-action[_ngcontent-%COMP%] {\n  height: auto;\n  display: flex;\n  align-content: center;\n}\n.nb-theme-corporate   [_nghost-%COMP%]   nb-user[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.nb-theme-corporate   [_nghost-%COMP%]     nb-search button {\n  padding: 0 !important;\n}\n.nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: auto;\n  display: contents;\n}\n.nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #8f9bb3;\n}\n[dir=ltr]   .nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%] {\n  padding-right: 1.25rem;\n}\n[dir=rtl]   .nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%] {\n  padding-left: 1.25rem;\n}\n.nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n}\n.nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  padding: 0 1.25rem;\n  font-size: 1.75rem;\n  white-space: nowrap;\n  text-decoration: none;\n}\n[dir=ltr]   .nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  border-left: 1px solid #edf1f7;\n}\n[dir=rtl]   .nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  border-right: 1px solid #edf1f7;\n}\n@media (max-width: 767.98px) {\n  .nb-theme-corporate   [_nghost-%COMP%]   .control-item[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .nb-theme-corporate   [_nghost-%COMP%]   .user-action[_ngcontent-%COMP%] {\n    border: none;\n    padding: 0;\n  }\n}\n@media (max-width: 575.98px) {\n  .nb-theme-corporate   [_nghost-%COMP%]   nb-select[_ngcontent-%COMP%] {\n    display: none;\n  }\n}"]
      });
      /***/
    },

    /***/
    1213: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HeaderComponent": function HeaderComponent() {
          return (
            /* reexport safe */
            _header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent
          );
        },

        /* harmony export */
        "FooterComponent": function FooterComponent() {
          return (
            /* reexport safe */
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent
          );
        },

        /* harmony export */
        "SearchInputComponent": function SearchInputComponent() {
          return (
            /* reexport safe */
            _search_input_search_input_component__WEBPACK_IMPORTED_MODULE_2__.SearchInputComponent
          );
        },

        /* harmony export */
        "TinyMCEComponent": function TinyMCEComponent() {
          return (
            /* reexport safe */
            _tiny_mce_tiny_mce_component__WEBPACK_IMPORTED_MODULE_3__.TinyMCEComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./header/header.component */
      77842);
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./footer/footer.component */
      73747);
      /* harmony import */


      var _search_input_search_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./search-input/search-input.component */
      39631);
      /* harmony import */


      var _tiny_mce_tiny_mce_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tiny-mce/tiny-mce.component */
      49030);
      /***/

    },

    /***/
    39631: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SearchInputComponent": function SearchInputComponent() {
          return (
            /* binding */
            _SearchInputComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _c0 = ["input"];

      var _SearchInputComponent = /*#__PURE__*/function () {
        function _SearchInputComponent() {
          _classCallCheck(this, _SearchInputComponent);

          this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.isInputShown = false;
        }

        _createClass(_SearchInputComponent, [{
          key: "showInput",
          value: function showInput() {
            this.isInputShown = true;
            this.input.nativeElement.focus();
          }
        }, {
          key: "hideInput",
          value: function hideInput() {
            this.isInputShown = false;
          }
        }, {
          key: "onInput",
          value: function onInput(val) {
            this.search.emit(val);
          }
        }]);

        return _SearchInputComponent;
      }();

      _SearchInputComponent.ɵfac = function SearchInputComponent_Factory(t) {
        return new (t || _SearchInputComponent)();
      };

      _SearchInputComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _SearchInputComponent,
        selectors: [["ngx-search-input"]],
        viewQuery: function SearchInputComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
          }
        },
        outputs: {
          search: "search"
        },
        decls: 3,
        vars: 2,
        consts: [[1, "control-icon", "ion", "ion-ios-search", 3, "click"], ["placeholder", "Type your search request here...", 3, "blur", "input"], ["input", ""]],
        template: function SearchInputComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchInputComponent_Template_i_click_0_listener() {
              return ctx.showInput();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function SearchInputComponent_Template_input_blur_1_listener() {
              return ctx.hideInput();
            })("input", function SearchInputComponent_Template_input_input_1_listener($event) {
              return ctx.onInput($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hidden", !ctx.isInputShown);
          }
        },
        styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]   i.control-icon[_ngcontent-%COMP%]::before {\n  font-size: 2.3rem;\n}\n[_nghost-%COMP%]   i.control-icon[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  margin-left: 1rem;\n  width: 15rem;\n  transition: width 0.2s ease;\n}\n[_nghost-%COMP%]   input.hidden[_ngcontent-%COMP%] {\n  width: 0;\n  margin: 0;\n}\n[_nghost-%COMP%]     search-input input {\n  background: transparent;\n}"]
      });
      /***/
    },

    /***/
    49030: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TinyMCEComponent": function TinyMCEComponent() {
          return (
            /* binding */
            _TinyMCEComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      38583);

      var _TinyMCEComponent = /*#__PURE__*/function () {
        function _TinyMCEComponent(host, locationStrategy) {
          _classCallCheck(this, _TinyMCEComponent);

          this.host = host;
          this.locationStrategy = locationStrategy;
          this.editorKeyup = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        }

        _createClass(_TinyMCEComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this32 = this;

            tinymce.init({
              target: this.host.nativeElement,
              plugins: ['link', 'paste', 'table'],
              skin_url: "".concat(this.locationStrategy.getBaseHref(), "assets/skins/lightgray"),
              setup: function setup(editor) {
                _this32.editor = editor;
                editor.on('keyup', function () {
                  _this32.editorKeyup.emit(editor.getContent());
                });
              },
              height: '320'
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            tinymce.remove(this.editor);
          }
        }]);

        return _TinyMCEComponent;
      }();

      _TinyMCEComponent.ɵfac = function TinyMCEComponent_Factory(t) {
        return new (t || _TinyMCEComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.LocationStrategy));
      };

      _TinyMCEComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _TinyMCEComponent,
        selectors: [["ngx-tiny-mce"]],
        outputs: {
          editorKeyup: "editorKeyup"
        },
        decls: 0,
        vars: 0,
        template: function TinyMCEComponent_Template(rf, ctx) {},
        encapsulation: 2
      });
      /***/
    },

    /***/
    38203: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OneColumnLayoutComponent": function OneColumnLayoutComponent() {
          return (
            /* reexport safe */
            _one_column_one_column_layout__WEBPACK_IMPORTED_MODULE_0__.OneColumnLayoutComponent
          );
        },

        /* harmony export */
        "TwoColumnsLayoutComponent": function TwoColumnsLayoutComponent() {
          return (
            /* reexport safe */
            _two_columns_two_columns_layout__WEBPACK_IMPORTED_MODULE_1__.TwoColumnsLayoutComponent
          );
        },

        /* harmony export */
        "ThreeColumnsLayoutComponent": function ThreeColumnsLayoutComponent() {
          return (
            /* reexport safe */
            _three_columns_three_columns_layout__WEBPACK_IMPORTED_MODULE_2__.ThreeColumnsLayoutComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _one_column_one_column_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./one-column/one-column.layout */
      6405);
      /* harmony import */


      var _two_columns_two_columns_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./two-columns/two-columns.layout */
      3247);
      /* harmony import */


      var _three_columns_three_columns_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./three-columns/three-columns.layout */
      60839);
      /***/

    },

    /***/
    6405: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OneColumnLayoutComponent": function OneColumnLayoutComponent() {
          return (
            /* binding */
            _OneColumnLayoutComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nebular/theme */
      42522);
      /* harmony import */


      var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../components/header/header.component */
      77842);
      /* harmony import */


      var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../components/footer/footer.component */
      73747);

      var _c0 = [[["nb-menu"]], [["router-outlet"]]];
      var _c1 = ["nb-menu", "router-outlet"];

      var _OneColumnLayoutComponent = function _OneColumnLayoutComponent() {
        _classCallCheck(this, _OneColumnLayoutComponent);
      };

      _OneColumnLayoutComponent.ɵfac = function OneColumnLayoutComponent_Factory(t) {
        return new (t || _OneColumnLayoutComponent)();
      };

      _OneColumnLayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _OneColumnLayoutComponent,
        selectors: [["ngx-one-column-layout"]],
        ngContentSelectors: _c1,
        decls: 9,
        vars: 0,
        consts: [["windowMode", ""], ["fixed", ""], ["tag", "menu-sidebar", "responsive", "", 1, "menu-sidebar"]],
        template: function OneColumnLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-layout", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nb-layout-header", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ngx-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nb-sidebar", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "nb-layout-column");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](6, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "nb-layout-footer", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "ngx-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbLayoutComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbLayoutHeaderComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbSidebarComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbLayoutColumnComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbLayoutFooterComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
        styles: [".nb-theme-default   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable {\n  padding-top: 2.25rem;\n}\n\n.nb-theme-dark   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable {\n  padding-top: 2.25rem;\n}\n\n.nb-theme-cosmic   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable {\n  padding-top: 2.25rem;\n}\n\n.nb-theme-corporate   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable {\n  padding-top: 2.25rem;\n}"]
      });
      /***/
    },

    /***/
    60839: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ThreeColumnsLayoutComponent": function ThreeColumnsLayoutComponent() {
          return (
            /* binding */
            _ThreeColumnsLayoutComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nebular/theme */
      42522);
      /* harmony import */


      var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../components/header/header.component */
      77842);
      /* harmony import */


      var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../components/footer/footer.component */
      73747);

      var _c0 = [[["nb-menu"]], [["router-outlet"]]];
      var _c1 = ["nb-menu", "router-outlet"];

      var _ThreeColumnsLayoutComponent = function _ThreeColumnsLayoutComponent() {
        _classCallCheck(this, _ThreeColumnsLayoutComponent);
      };

      _ThreeColumnsLayoutComponent.ɵfac = function ThreeColumnsLayoutComponent_Factory(t) {
        return new (t || _ThreeColumnsLayoutComponent)();
      };

      _ThreeColumnsLayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _ThreeColumnsLayoutComponent,
        selectors: [["ngx-three-columns-layout"]],
        ngContentSelectors: _c1,
        decls: 11,
        vars: 0,
        consts: [["windowMode", ""], ["fixed", ""], ["tag", "menu-sidebar", "responsive", "", 1, "menu-sidebar"], [1, "small"]],
        template: function ThreeColumnsLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-layout", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nb-layout-header", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ngx-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nb-sidebar", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "nb-layout-column", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "nb-layout-column");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](7, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "nb-layout-column", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "nb-layout-footer", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "ngx-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbLayoutComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbLayoutHeaderComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbSidebarComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbLayoutColumnComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbLayoutFooterComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
        styles: [".nb-theme-default   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable {\n  padding-top: 2.25rem;\n}\n\n.nb-theme-dark   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable {\n  padding-top: 2.25rem;\n}\n\n.nb-theme-cosmic   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable {\n  padding-top: 2.25rem;\n}\n\n.nb-theme-corporate   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable {\n  padding-top: 2.25rem;\n}"]
      });
      /***/
    },

    /***/
    3247: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TwoColumnsLayoutComponent": function TwoColumnsLayoutComponent() {
          return (
            /* binding */
            _TwoColumnsLayoutComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @nebular/theme */
      42522);
      /* harmony import */


      var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../components/header/header.component */
      77842);
      /* harmony import */


      var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../components/footer/footer.component */
      73747);

      var _c0 = [[["nb-menu"]], [["router-outlet"]]];
      var _c1 = ["nb-menu", "router-outlet"];

      var _TwoColumnsLayoutComponent = function _TwoColumnsLayoutComponent() {
        _classCallCheck(this, _TwoColumnsLayoutComponent);
      };

      _TwoColumnsLayoutComponent.ɵfac = function TwoColumnsLayoutComponent_Factory(t) {
        return new (t || _TwoColumnsLayoutComponent)();
      };

      _TwoColumnsLayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _TwoColumnsLayoutComponent,
        selectors: [["ngx-two-columns-layout"]],
        ngContentSelectors: _c1,
        decls: 10,
        vars: 0,
        consts: [["windowMode", ""], ["fixed", ""], ["tag", "menu-sidebar", "responsive", "", 1, "menu-sidebar"], [1, "small"]],
        template: function TwoColumnsLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-layout", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nb-layout-header", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ngx-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nb-sidebar", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "nb-layout-column", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "nb-layout-column");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](7, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "nb-layout-footer", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "ngx-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }
        },
        directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbLayoutComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbLayoutHeaderComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbSidebarComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbLayoutColumnComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbLayoutFooterComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
        styles: [".nb-theme-default   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable {\n  padding-top: 2.25rem;\n}\n\n.nb-theme-dark   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable {\n  padding-top: 2.25rem;\n}\n\n.nb-theme-cosmic   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable {\n  padding-top: 2.25rem;\n}\n\n.nb-theme-corporate   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable {\n  padding-top: 2.25rem;\n}"]
      });
      /***/
    },

    /***/
    5180: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CapitalizePipe": function CapitalizePipe() {
          return (
            /* binding */
            _CapitalizePipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _CapitalizePipe = /*#__PURE__*/function () {
        function _CapitalizePipe() {
          _classCallCheck(this, _CapitalizePipe);
        }

        _createClass(_CapitalizePipe, [{
          key: "transform",
          value: function transform(input) {
            return input && input.length ? input.charAt(0).toUpperCase() + input.slice(1).toLowerCase() : input;
          }
        }]);

        return _CapitalizePipe;
      }();

      _CapitalizePipe.ɵfac = function CapitalizePipe_Factory(t) {
        return new (t || _CapitalizePipe)();
      };

      _CapitalizePipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "ngxCapitalize",
        type: _CapitalizePipe,
        pure: true
      });
      /***/
    },

    /***/
    34896: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CapitalizePipe": function CapitalizePipe() {
          return (
            /* reexport safe */
            _capitalize_pipe__WEBPACK_IMPORTED_MODULE_0__.CapitalizePipe
          );
        },

        /* harmony export */
        "PluralPipe": function PluralPipe() {
          return (
            /* reexport safe */
            _plural_pipe__WEBPACK_IMPORTED_MODULE_1__.PluralPipe
          );
        },

        /* harmony export */
        "RoundPipe": function RoundPipe() {
          return (
            /* reexport safe */
            _round_pipe__WEBPACK_IMPORTED_MODULE_2__.RoundPipe
          );
        },

        /* harmony export */
        "TimingPipe": function TimingPipe() {
          return (
            /* reexport safe */
            _timing_pipe__WEBPACK_IMPORTED_MODULE_3__.TimingPipe
          );
        },

        /* harmony export */
        "NumberWithCommasPipe": function NumberWithCommasPipe() {
          return (
            /* reexport safe */
            _number_with_commas_pipe__WEBPACK_IMPORTED_MODULE_4__.NumberWithCommasPipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _capitalize_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./capitalize.pipe */
      5180);
      /* harmony import */


      var _plural_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./plural.pipe */
      94681);
      /* harmony import */


      var _round_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./round.pipe */
      47315);
      /* harmony import */


      var _timing_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./timing.pipe */
      36244);
      /* harmony import */


      var _number_with_commas_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./number-with-commas.pipe */
      34138);
      /***/

    },

    /***/
    34138: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NumberWithCommasPipe": function NumberWithCommasPipe() {
          return (
            /* binding */
            _NumberWithCommasPipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _NumberWithCommasPipe = /*#__PURE__*/function () {
        function _NumberWithCommasPipe() {
          _classCallCheck(this, _NumberWithCommasPipe);
        }

        _createClass(_NumberWithCommasPipe, [{
          key: "transform",
          value: function transform(input) {
            return new Intl.NumberFormat().format(input);
          }
        }]);

        return _NumberWithCommasPipe;
      }();

      _NumberWithCommasPipe.ɵfac = function NumberWithCommasPipe_Factory(t) {
        return new (t || _NumberWithCommasPipe)();
      };

      _NumberWithCommasPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "ngxNumberWithCommas",
        type: _NumberWithCommasPipe,
        pure: true
      });
      /***/
    },

    /***/
    94681: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PluralPipe": function PluralPipe() {
          return (
            /* binding */
            _PluralPipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _PluralPipe = /*#__PURE__*/function () {
        function _PluralPipe() {
          _classCallCheck(this, _PluralPipe);
        }

        _createClass(_PluralPipe, [{
          key: "transform",
          value: function transform(input, label) {
            var pluralLabel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
            input = input || 0;
            return input === 1 ? "".concat(input, " ").concat(label) : pluralLabel ? "".concat(input, " ").concat(pluralLabel) : "".concat(input, " ").concat(label, "s");
          }
        }]);

        return _PluralPipe;
      }();

      _PluralPipe.ɵfac = function PluralPipe_Factory(t) {
        return new (t || _PluralPipe)();
      };

      _PluralPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "ngxPlural",
        type: _PluralPipe,
        pure: true
      });
      /***/
    },

    /***/
    47315: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RoundPipe": function RoundPipe() {
          return (
            /* binding */
            _RoundPipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _RoundPipe = /*#__PURE__*/function () {
        function _RoundPipe() {
          _classCallCheck(this, _RoundPipe);
        }

        _createClass(_RoundPipe, [{
          key: "transform",
          value: function transform(input) {
            return Math.round(input);
          }
        }]);

        return _RoundPipe;
      }();

      _RoundPipe.ɵfac = function RoundPipe_Factory(t) {
        return new (t || _RoundPipe)();
      };

      _RoundPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "ngxRound",
        type: _RoundPipe,
        pure: true
      });
      /***/
    },

    /***/
    36244: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TimingPipe": function TimingPipe() {
          return (
            /* binding */
            _TimingPipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _TimingPipe = /*#__PURE__*/function () {
        function _TimingPipe() {
          _classCallCheck(this, _TimingPipe);
        }

        _createClass(_TimingPipe, [{
          key: "transform",
          value: function transform(time) {
            if (time) {
              var minutes = Math.floor(time / 60);
              var seconds = Math.floor(time % 60);
              return "".concat(this.initZero(minutes)).concat(minutes, ":").concat(this.initZero(seconds)).concat(seconds);
            }

            return '00:00';
          }
        }, {
          key: "initZero",
          value: function initZero(time) {
            return time < 10 ? '0' : '';
          }
        }]);

        return _TimingPipe;
      }();

      _TimingPipe.ɵfac = function TimingPipe_Factory(t) {
        return new (t || _TimingPipe)();
      };

      _TimingPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "timing",
        type: _TimingPipe,
        pure: true
      });
      /***/
    },

    /***/
    50439: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CORPORATE_THEME": function CORPORATE_THEME() {
          return (
            /* binding */
            _CORPORATE_THEME
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @nebular/theme */
      42522);

      var baseThemeVariables = _nebular_theme__WEBPACK_IMPORTED_MODULE_0__.CORPORATE_THEME.variables;
      var _CORPORATE_THEME = {
        name: 'corporate',
        base: 'corporate',
        variables: {
          temperature: {
            arcFill: ['#ffa36b', '#ffa36b', '#ff9e7a', '#ff9888', '#ff8ea0'],
            arcEmpty: baseThemeVariables.bg2,
            thumbBg: baseThemeVariables.bg2,
            thumbBorder: '#ffa36b'
          },
          solar: {
            gradientLeft: baseThemeVariables.primary,
            gradientRight: baseThemeVariables.primary,
            shadowColor: 'rgba(0, 0, 0, 0)',
            secondSeriesFill: baseThemeVariables.bg2,
            radius: ['80%', '90%']
          },
          traffic: {
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            yAxisSplitLine: 'rgba(0, 0, 0, 0)',
            lineBg: baseThemeVariables.primary,
            lineShadowBlur: '0',
            itemColor: baseThemeVariables.border4,
            itemBorderColor: baseThemeVariables.border4,
            itemEmphasisBorderColor: baseThemeVariables.primaryLight,
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            shadowLineShadow: 'rgba(0, 0, 0, 0)',
            gradFrom: baseThemeVariables.bg,
            gradTo: baseThemeVariables.bg
          },
          electricity: {
            tooltipBg: baseThemeVariables.bg,
            tooltipLineColor: baseThemeVariables.fgText,
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            axisLineColor: baseThemeVariables.border3,
            xAxisTextColor: baseThemeVariables.fg,
            yAxisSplitLine: baseThemeVariables.separator,
            itemBorderColor: baseThemeVariables.primary,
            lineStyle: 'solid',
            lineWidth: '4',
            lineGradFrom: baseThemeVariables.primary,
            lineGradTo: baseThemeVariables.primary,
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: 'rgba(0, 0, 0, 0)',
            areaGradTo: 'rgba(0, 0, 0, 0)',
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)'
          },
          bubbleMap: {
            titleColor: baseThemeVariables.fgText,
            areaColor: baseThemeVariables.bg4,
            areaHoverColor: baseThemeVariables.fgHighlight,
            areaBorderColor: baseThemeVariables.border5
          },
          profitBarAnimationEchart: {
            textColor: baseThemeVariables.fgText,
            firstAnimationBarColor: baseThemeVariables.primary,
            secondAnimationBarColor: baseThemeVariables.success,
            splitLineStyleOpacity: '1',
            splitLineStyleWidth: '1',
            splitLineStyleColor: baseThemeVariables.separator,
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;'
          },
          trafficBarEchart: {
            gradientFrom: baseThemeVariables.warningLight,
            gradientTo: baseThemeVariables.warning,
            shadow: baseThemeVariables.warningLight,
            shadowBlur: '0',
            axisTextColor: baseThemeVariables.fgText,
            axisFontSize: '12',
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal'
          },
          countryOrders: {
            countryBorderColor: baseThemeVariables.border4,
            countryFillColor: baseThemeVariables.bg4,
            countryBorderWidth: '1',
            hoveredCountryBorderColor: baseThemeVariables.primary,
            hoveredCountryFillColor: baseThemeVariables.primaryLight,
            hoveredCountryBorderWidth: '1',
            chartAxisLineColor: baseThemeVariables.border4,
            chartAxisTextColor: baseThemeVariables.fg,
            chartAxisFontSize: '16',
            chartGradientTo: baseThemeVariables.primary,
            chartGradientFrom: baseThemeVariables.primaryLight,
            chartAxisSplitLine: baseThemeVariables.separator,
            chartShadowLineColor: baseThemeVariables.primaryLight,
            chartLineBottomShadowColor: baseThemeVariables.primary,
            chartInnerLineColor: baseThemeVariables.bg2
          },
          echarts: {
            bg: baseThemeVariables.bg,
            textColor: baseThemeVariables.fgText,
            axisLineColor: baseThemeVariables.fgText,
            splitLineColor: baseThemeVariables.separator,
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: baseThemeVariables.primary,
            areaOpacity: '0.7'
          },
          chartjs: {
            axisLineColor: baseThemeVariables.separator,
            textColor: baseThemeVariables.fgText
          },
          orders: {
            tooltipBg: baseThemeVariables.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: baseThemeVariables.border4,
            axisFontSize: '16',
            axisTextColor: baseThemeVariables.fg,
            yAxisSplitLine: baseThemeVariables.separator,
            itemBorderColor: baseThemeVariables.primary,
            lineStyle: 'solid',
            lineWidth: '4',
            // first line
            firstAreaGradFrom: baseThemeVariables.bg3,
            firstAreaGradTo: baseThemeVariables.bg3,
            firstShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            // second line
            secondLineGradFrom: baseThemeVariables.primary,
            secondLineGradTo: baseThemeVariables.primary,
            secondAreaGradFrom: 'rgba(0, 0, 0, 0)',
            secondAreaGradTo: 'rgba(0, 0, 0, 0)',
            secondShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            // third line
            thirdLineGradFrom: baseThemeVariables.success,
            thirdLineGradTo: baseThemeVariables.successLight,
            thirdAreaGradFrom: 'rgba(0, 0, 0, 0)',
            thirdAreaGradTo: 'rgba(0, 0, 0, 0)',
            thirdShadowLineDarkBg: 'rgba(0, 0, 0, 0)'
          },
          profit: {
            bg: baseThemeVariables.bg,
            textColor: baseThemeVariables.fgText,
            axisLineColor: baseThemeVariables.border4,
            splitLineColor: baseThemeVariables.separator,
            areaOpacity: '1',
            axisFontSize: '16',
            axisTextColor: baseThemeVariables.fg,
            // first bar
            firstLineGradFrom: baseThemeVariables.bg3,
            firstLineGradTo: baseThemeVariables.bg3,
            firstLineShadow: 'rgba(0, 0, 0, 0)',
            // second bar
            secondLineGradFrom: baseThemeVariables.primary,
            secondLineGradTo: baseThemeVariables.primary,
            secondLineShadow: 'rgba(0, 0, 0, 0)',
            // third bar
            thirdLineGradFrom: baseThemeVariables.success,
            thirdLineGradTo: baseThemeVariables.success,
            thirdLineShadow: 'rgba(0, 0, 0, 0)'
          },
          orderProfitLegend: {
            firstItem: baseThemeVariables.success,
            secondItem: baseThemeVariables.primary,
            thirdItem: baseThemeVariables.bg3
          },
          visitors: {
            tooltipBg: baseThemeVariables.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '1',
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: baseThemeVariables.border4,
            axisFontSize: '16',
            axisTextColor: baseThemeVariables.fg,
            yAxisSplitLine: baseThemeVariables.separator,
            itemBorderColor: baseThemeVariables.primary,
            lineStyle: 'dotted',
            lineWidth: '6',
            lineGradFrom: '#ffffff',
            lineGradTo: '#ffffff',
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: baseThemeVariables.primary,
            areaGradTo: baseThemeVariables.primaryLight,
            innerLineStyle: 'solid',
            innerLineWidth: '1',
            innerAreaGradFrom: baseThemeVariables.success,
            innerAreaGradTo: baseThemeVariables.success
          },
          visitorsLegend: {
            firstIcon: baseThemeVariables.success,
            secondIcon: baseThemeVariables.primary
          },
          visitorsPie: {
            firstPieGradientLeft: baseThemeVariables.success,
            firstPieGradientRight: baseThemeVariables.success,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            firstPieRadius: ['65%', '90%'],
            secondPieGradientLeft: baseThemeVariables.warning,
            secondPieGradientRight: baseThemeVariables.warningLight,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieRadius: ['63%', '92%'],
            shadowOffsetX: '-4',
            shadowOffsetY: '-4'
          },
          visitorsPieLegend: {
            firstSection: baseThemeVariables.warning,
            secondSection: baseThemeVariables.success
          },
          earningPie: {
            radius: ['65%', '100%'],
            center: ['50%', '50%'],
            fontSize: '22',
            firstPieGradientLeft: baseThemeVariables.success,
            firstPieGradientRight: baseThemeVariables.success,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieGradientLeft: baseThemeVariables.primary,
            secondPieGradientRight: baseThemeVariables.primary,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            thirdPieGradientLeft: baseThemeVariables.warning,
            thirdPieGradientRight: baseThemeVariables.warning,
            thirdPieShadowColor: 'rgba(0, 0, 0, 0)'
          },
          earningLine: {
            gradFrom: baseThemeVariables.primary,
            gradTo: baseThemeVariables.primary,
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;'
          }
        }
      };
      /***/
    },

    /***/
    25838: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "COSMIC_THEME": function COSMIC_THEME() {
          return (
            /* binding */
            _COSMIC_THEME
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @nebular/theme */
      42522);

      var baseThemeVariables = _nebular_theme__WEBPACK_IMPORTED_MODULE_0__.COSMIC_THEME.variables;
      var _COSMIC_THEME = {
        name: 'cosmic',
        base: 'cosmic',
        variables: {
          temperature: {
            arcFill: ['#2ec7fe', '#31ffad', '#7bff24', '#fff024', '#f7bd59'],
            arcEmpty: baseThemeVariables.bg2,
            thumbBg: '#ffffff',
            thumbBorder: '#ffffff'
          },
          solar: {
            gradientLeft: baseThemeVariables.primary,
            gradientRight: baseThemeVariables.primary,
            shadowColor: 'rgba(0, 0, 0, 0)',
            secondSeriesFill: baseThemeVariables.bg2,
            radius: ['70%', '90%']
          },
          traffic: {
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(50, 50, 89); border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            yAxisSplitLine: baseThemeVariables.separator,
            lineBg: baseThemeVariables.border2,
            lineShadowBlur: '14',
            itemColor: baseThemeVariables.border2,
            itemBorderColor: baseThemeVariables.border2,
            itemEmphasisBorderColor: baseThemeVariables.primary,
            shadowLineDarkBg: baseThemeVariables.border3,
            shadowLineShadow: baseThemeVariables.border3,
            gradFrom: baseThemeVariables.bg,
            gradTo: baseThemeVariables.bg2
          },
          electricity: {
            tooltipBg: baseThemeVariables.bg,
            tooltipLineColor: baseThemeVariables.fgText,
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            axisLineColor: baseThemeVariables.border3,
            xAxisTextColor: baseThemeVariables.fg,
            yAxisSplitLine: baseThemeVariables.separator,
            itemBorderColor: baseThemeVariables.border2,
            lineStyle: 'dotted',
            lineWidth: '6',
            lineGradFrom: baseThemeVariables.success,
            lineGradTo: baseThemeVariables.warning,
            lineShadow: baseThemeVariables.bg4,
            areaGradFrom: baseThemeVariables.bg2,
            areaGradTo: baseThemeVariables.bg3,
            shadowLineDarkBg: baseThemeVariables.bg3
          },
          bubbleMap: {
            titleColor: baseThemeVariables.fgText,
            areaColor: baseThemeVariables.bg4,
            areaHoverColor: baseThemeVariables.fgHighlight,
            areaBorderColor: baseThemeVariables.border5
          },
          profitBarAnimationEchart: {
            textColor: baseThemeVariables.fgText,
            firstAnimationBarColor: baseThemeVariables.primary,
            secondAnimationBarColor: baseThemeVariables.success,
            splitLineStyleOpacity: '1',
            splitLineStyleWidth: '1',
            splitLineStyleColor: baseThemeVariables.border2,
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;'
          },
          trafficBarEchart: {
            gradientFrom: baseThemeVariables.warningLight,
            gradientTo: baseThemeVariables.warning,
            shadow: baseThemeVariables.warningLight,
            shadowBlur: '5',
            axisTextColor: baseThemeVariables.fgText,
            axisFontSize: '12',
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal'
          },
          countryOrders: {
            countryBorderColor: baseThemeVariables.border4,
            countryFillColor: baseThemeVariables.bg3,
            countryBorderWidth: '1',
            hoveredCountryBorderColor: baseThemeVariables.primary,
            hoveredCountryFillColor: baseThemeVariables.primaryLight,
            hoveredCountryBorderWidth: '1',
            chartAxisLineColor: baseThemeVariables.border4,
            chartAxisTextColor: baseThemeVariables.fg,
            chartAxisFontSize: '16',
            chartGradientTo: baseThemeVariables.primary,
            chartGradientFrom: baseThemeVariables.primaryLight,
            chartAxisSplitLine: baseThemeVariables.separator,
            chartShadowLineColor: baseThemeVariables.primaryLight,
            chartLineBottomShadowColor: baseThemeVariables.primary,
            chartInnerLineColor: baseThemeVariables.bg2
          },
          echarts: {
            bg: baseThemeVariables.bg,
            textColor: baseThemeVariables.fgText,
            axisLineColor: baseThemeVariables.fgText,
            splitLineColor: baseThemeVariables.separator,
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: baseThemeVariables.primary,
            areaOpacity: '1'
          },
          chartjs: {
            axisLineColor: baseThemeVariables.separator,
            textColor: baseThemeVariables.fgText
          },
          orders: {
            tooltipBg: baseThemeVariables.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: baseThemeVariables.border4,
            axisFontSize: '16',
            axisTextColor: baseThemeVariables.fg,
            yAxisSplitLine: baseThemeVariables.separator,
            itemBorderColor: baseThemeVariables.primary,
            lineStyle: 'solid',
            lineWidth: '4',
            // first line
            firstAreaGradFrom: baseThemeVariables.bg2,
            firstAreaGradTo: baseThemeVariables.bg2,
            firstShadowLineDarkBg: baseThemeVariables.bg2,
            // second line
            secondLineGradFrom: baseThemeVariables.primary,
            secondLineGradTo: baseThemeVariables.primary,
            secondAreaGradFrom: 'rgba(161, 110, 255, 0.8)',
            secondAreaGradTo: 'rgba(161, 110, 255, 0.5)',
            secondShadowLineDarkBg: baseThemeVariables.primary,
            // third line
            thirdLineGradFrom: baseThemeVariables.success,
            thirdLineGradTo: baseThemeVariables.successLight,
            thirdAreaGradFrom: 'rgba(0, 214, 143, 0.7)',
            thirdAreaGradTo: 'rgba(0, 214, 143, 0.4)',
            thirdShadowLineDarkBg: baseThemeVariables.success
          },
          profit: {
            bg: baseThemeVariables.bg,
            textColor: baseThemeVariables.fgText,
            axisLineColor: baseThemeVariables.border4,
            splitLineColor: baseThemeVariables.separator,
            areaOpacity: '1',
            axisFontSize: '16',
            axisTextColor: baseThemeVariables.fg,
            // first bar
            firstLineGradFrom: baseThemeVariables.bg2,
            firstLineGradTo: baseThemeVariables.bg2,
            firstLineShadow: 'rgba(0, 0, 0, 0)',
            // second bar
            secondLineGradFrom: baseThemeVariables.primary,
            secondLineGradTo: baseThemeVariables.primary,
            secondLineShadow: 'rgba(0, 0, 0, 0)',
            // third bar
            thirdLineGradFrom: baseThemeVariables.success,
            thirdLineGradTo: baseThemeVariables.successLight,
            thirdLineShadow: 'rgba(0, 0, 0, 0)'
          },
          orderProfitLegend: {
            firstItem: baseThemeVariables.success,
            secondItem: baseThemeVariables.primary,
            thirdItem: baseThemeVariables.bg2
          },
          visitors: {
            tooltipBg: baseThemeVariables.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '1',
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: baseThemeVariables.border4,
            axisFontSize: '16',
            axisTextColor: baseThemeVariables.fg,
            yAxisSplitLine: baseThemeVariables.separator,
            itemBorderColor: baseThemeVariables.primary,
            lineStyle: 'dotted',
            lineWidth: '6',
            lineGradFrom: '#ffffff',
            lineGradTo: '#ffffff',
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: baseThemeVariables.primary,
            areaGradTo: baseThemeVariables.primaryLight,
            innerLineStyle: 'solid',
            innerLineWidth: '1',
            innerAreaGradFrom: baseThemeVariables.success,
            innerAreaGradTo: baseThemeVariables.success
          },
          visitorsLegend: {
            firstIcon: baseThemeVariables.success,
            secondIcon: baseThemeVariables.primary
          },
          visitorsPie: {
            firstPieGradientLeft: baseThemeVariables.success,
            firstPieGradientRight: baseThemeVariables.successLight,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            firstPieRadius: ['70%', '90%'],
            secondPieGradientLeft: baseThemeVariables.warning,
            secondPieGradientRight: baseThemeVariables.warningLight,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieRadius: ['60%', '95%'],
            shadowOffsetX: '0',
            shadowOffsetY: '3'
          },
          visitorsPieLegend: {
            firstSection: baseThemeVariables.warning,
            secondSection: baseThemeVariables.success
          },
          earningPie: {
            radius: ['65%', '100%'],
            center: ['50%', '50%'],
            fontSize: '22',
            firstPieGradientLeft: baseThemeVariables.success,
            firstPieGradientRight: baseThemeVariables.success,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieGradientLeft: baseThemeVariables.primary,
            secondPieGradientRight: baseThemeVariables.primary,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            thirdPieGradientLeft: baseThemeVariables.warning,
            thirdPieGradientRight: baseThemeVariables.warning,
            thirdPieShadowColor: 'rgba(0, 0, 0, 0)'
          },
          earningLine: {
            gradFrom: baseThemeVariables.primary,
            gradTo: baseThemeVariables.primary,
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;'
          }
        }
      };
      /***/
    },

    /***/
    95497: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DARK_THEME": function DARK_THEME() {
          return (
            /* binding */
            _DARK_THEME
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @nebular/theme */
      42522);

      var baseThemeVariables = _nebular_theme__WEBPACK_IMPORTED_MODULE_0__.DARK_THEME.variables;
      var _DARK_THEME = {
        name: 'dark',
        base: 'dark',
        variables: {
          temperature: {
            arcFill: [baseThemeVariables.primary, baseThemeVariables.primary, baseThemeVariables.primary, baseThemeVariables.primary, baseThemeVariables.primary],
            arcEmpty: baseThemeVariables.bg2,
            thumbBg: baseThemeVariables.bg2,
            thumbBorder: baseThemeVariables.primary
          },
          solar: {
            gradientLeft: baseThemeVariables.primary,
            gradientRight: baseThemeVariables.primary,
            shadowColor: 'rgba(0, 0, 0, 0)',
            secondSeriesFill: baseThemeVariables.bg2,
            radius: ['80%', '90%']
          },
          traffic: {
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            yAxisSplitLine: baseThemeVariables.separator,
            lineBg: baseThemeVariables.border4,
            lineShadowBlur: '1',
            itemColor: baseThemeVariables.border4,
            itemBorderColor: baseThemeVariables.border4,
            itemEmphasisBorderColor: baseThemeVariables.primary,
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            shadowLineShadow: 'rgba(0, 0, 0, 0)',
            gradFrom: baseThemeVariables.bg2,
            gradTo: baseThemeVariables.bg2
          },
          electricity: {
            tooltipBg: baseThemeVariables.bg,
            tooltipLineColor: baseThemeVariables.fgText,
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            axisLineColor: baseThemeVariables.border3,
            xAxisTextColor: baseThemeVariables.fg,
            yAxisSplitLine: baseThemeVariables.separator,
            itemBorderColor: baseThemeVariables.primary,
            lineStyle: 'solid',
            lineWidth: '4',
            lineGradFrom: baseThemeVariables.primary,
            lineGradTo: baseThemeVariables.primary,
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: baseThemeVariables.bg2,
            areaGradTo: baseThemeVariables.bg2,
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)'
          },
          bubbleMap: {
            titleColor: baseThemeVariables.fgText,
            areaColor: baseThemeVariables.bg4,
            areaHoverColor: baseThemeVariables.fgHighlight,
            areaBorderColor: baseThemeVariables.border5
          },
          profitBarAnimationEchart: {
            textColor: baseThemeVariables.fgText,
            firstAnimationBarColor: baseThemeVariables.primary,
            secondAnimationBarColor: baseThemeVariables.success,
            splitLineStyleOpacity: '1',
            splitLineStyleWidth: '1',
            splitLineStyleColor: baseThemeVariables.separator,
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;'
          },
          trafficBarEchart: {
            gradientFrom: baseThemeVariables.warningLight,
            gradientTo: baseThemeVariables.warning,
            shadow: baseThemeVariables.warningLight,
            shadowBlur: '0',
            axisTextColor: baseThemeVariables.fgText,
            axisFontSize: '12',
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal'
          },
          countryOrders: {
            countryBorderColor: baseThemeVariables.border4,
            countryFillColor: baseThemeVariables.bg3,
            countryBorderWidth: '1',
            hoveredCountryBorderColor: baseThemeVariables.primary,
            hoveredCountryFillColor: baseThemeVariables.primaryLight,
            hoveredCountryBorderWidth: '1',
            chartAxisLineColor: baseThemeVariables.border4,
            chartAxisTextColor: baseThemeVariables.fg,
            chartAxisFontSize: '16',
            chartGradientTo: baseThemeVariables.primary,
            chartGradientFrom: baseThemeVariables.primaryLight,
            chartAxisSplitLine: baseThemeVariables.separator,
            chartShadowLineColor: baseThemeVariables.primaryLight,
            chartLineBottomShadowColor: baseThemeVariables.primary,
            chartInnerLineColor: baseThemeVariables.bg2
          },
          echarts: {
            bg: baseThemeVariables.bg,
            textColor: baseThemeVariables.fgText,
            axisLineColor: baseThemeVariables.fgText,
            splitLineColor: baseThemeVariables.separator,
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: baseThemeVariables.primary,
            areaOpacity: '0.7'
          },
          chartjs: {
            axisLineColor: baseThemeVariables.separator,
            textColor: baseThemeVariables.fgText
          },
          orders: {
            tooltipBg: baseThemeVariables.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: baseThemeVariables.border4,
            axisFontSize: '16',
            axisTextColor: baseThemeVariables.fg,
            yAxisSplitLine: baseThemeVariables.separator,
            itemBorderColor: baseThemeVariables.primary,
            lineStyle: 'solid',
            lineWidth: '4',
            // first line
            firstAreaGradFrom: baseThemeVariables.bg3,
            firstAreaGradTo: baseThemeVariables.bg3,
            firstShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            // second line
            secondLineGradFrom: baseThemeVariables.primary,
            secondLineGradTo: baseThemeVariables.primary,
            secondAreaGradFrom: 'rgba(51, 102, 255, 0.2)',
            secondAreaGradTo: 'rgba(51, 102, 255, 0)',
            secondShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            // third line
            thirdLineGradFrom: baseThemeVariables.success,
            thirdLineGradTo: baseThemeVariables.successLight,
            thirdAreaGradFrom: 'rgba(0, 214, 143, 0.2)',
            thirdAreaGradTo: 'rgba(0, 214, 143, 0)',
            thirdShadowLineDarkBg: 'rgba(0, 0, 0, 0)'
          },
          profit: {
            bg: baseThemeVariables.bg,
            textColor: baseThemeVariables.fgText,
            axisLineColor: baseThemeVariables.border4,
            splitLineColor: baseThemeVariables.separator,
            areaOpacity: '1',
            axisFontSize: '16',
            axisTextColor: baseThemeVariables.fg,
            // first bar
            firstLineGradFrom: baseThemeVariables.bg3,
            firstLineGradTo: baseThemeVariables.bg3,
            firstLineShadow: 'rgba(0, 0, 0, 0)',
            // second bar
            secondLineGradFrom: baseThemeVariables.primary,
            secondLineGradTo: baseThemeVariables.primary,
            secondLineShadow: 'rgba(0, 0, 0, 0)',
            // third bar
            thirdLineGradFrom: baseThemeVariables.success,
            thirdLineGradTo: baseThemeVariables.successLight,
            thirdLineShadow: 'rgba(0, 0, 0, 0)'
          },
          orderProfitLegend: {
            firstItem: baseThemeVariables.success,
            secondItem: baseThemeVariables.primary,
            thirdItem: baseThemeVariables.bg3
          },
          visitors: {
            tooltipBg: baseThemeVariables.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: baseThemeVariables.border4,
            axisFontSize: '16',
            axisTextColor: baseThemeVariables.fg,
            yAxisSplitLine: baseThemeVariables.separator,
            itemBorderColor: baseThemeVariables.primary,
            lineStyle: 'dotted',
            lineWidth: '6',
            lineGradFrom: '#ffffff',
            lineGradTo: '#ffffff',
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: baseThemeVariables.primary,
            areaGradTo: baseThemeVariables.primaryLight,
            innerLineStyle: 'solid',
            innerLineWidth: '1',
            innerAreaGradFrom: baseThemeVariables.success,
            innerAreaGradTo: baseThemeVariables.success
          },
          visitorsLegend: {
            firstIcon: baseThemeVariables.success,
            secondIcon: baseThemeVariables.primary
          },
          visitorsPie: {
            firstPieGradientLeft: baseThemeVariables.success,
            firstPieGradientRight: baseThemeVariables.success,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            firstPieRadius: ['70%', '90%'],
            secondPieGradientLeft: baseThemeVariables.warning,
            secondPieGradientRight: baseThemeVariables.warningLight,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieRadius: ['60%', '97%'],
            shadowOffsetX: '0',
            shadowOffsetY: '0'
          },
          visitorsPieLegend: {
            firstSection: baseThemeVariables.warning,
            secondSection: baseThemeVariables.success
          },
          earningPie: {
            radius: ['65%', '100%'],
            center: ['50%', '50%'],
            fontSize: '22',
            firstPieGradientLeft: baseThemeVariables.success,
            firstPieGradientRight: baseThemeVariables.success,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieGradientLeft: baseThemeVariables.primary,
            secondPieGradientRight: baseThemeVariables.primary,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            thirdPieGradientLeft: baseThemeVariables.warning,
            thirdPieGradientRight: baseThemeVariables.warning,
            thirdPieShadowColor: 'rgba(0, 0, 0, 0)'
          },
          earningLine: {
            gradFrom: baseThemeVariables.primary,
            gradTo: baseThemeVariables.primary,
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;'
          }
        }
      };
      /***/
    },

    /***/
    20546: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DEFAULT_THEME": function DEFAULT_THEME() {
          return (
            /* binding */
            _DEFAULT_THEME
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @nebular/theme */
      42522);

      var baseThemeVariables = _nebular_theme__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_THEME.variables;
      var _DEFAULT_THEME = {
        name: 'default',
        base: 'default',
        variables: {
          temperature: {
            arcFill: [baseThemeVariables.primary, baseThemeVariables.primary, baseThemeVariables.primary, baseThemeVariables.primary, baseThemeVariables.primary],
            arcEmpty: baseThemeVariables.bg2,
            thumbBg: baseThemeVariables.bg2,
            thumbBorder: baseThemeVariables.primary
          },
          solar: {
            gradientLeft: baseThemeVariables.primary,
            gradientRight: baseThemeVariables.primary,
            shadowColor: 'rgba(0, 0, 0, 0)',
            secondSeriesFill: baseThemeVariables.bg2,
            radius: ['80%', '90%']
          },
          traffic: {
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            yAxisSplitLine: baseThemeVariables.separator,
            lineBg: baseThemeVariables.border4,
            lineShadowBlur: '1',
            itemColor: baseThemeVariables.border4,
            itemBorderColor: baseThemeVariables.border4,
            itemEmphasisBorderColor: baseThemeVariables.primary,
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            shadowLineShadow: 'rgba(0, 0, 0, 0)',
            gradFrom: baseThemeVariables.bg2,
            gradTo: baseThemeVariables.bg2
          },
          electricity: {
            tooltipBg: baseThemeVariables.bg,
            tooltipLineColor: baseThemeVariables.fgText,
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            axisLineColor: baseThemeVariables.border3,
            xAxisTextColor: baseThemeVariables.fg,
            yAxisSplitLine: baseThemeVariables.separator,
            itemBorderColor: baseThemeVariables.primary,
            lineStyle: 'solid',
            lineWidth: '4',
            lineGradFrom: baseThemeVariables.primary,
            lineGradTo: baseThemeVariables.primary,
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: baseThemeVariables.bg2,
            areaGradTo: baseThemeVariables.bg2,
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)'
          },
          bubbleMap: {
            titleColor: baseThemeVariables.fgText,
            areaColor: baseThemeVariables.bg4,
            areaHoverColor: baseThemeVariables.fgHighlight,
            areaBorderColor: baseThemeVariables.border5
          },
          profitBarAnimationEchart: {
            textColor: baseThemeVariables.fgText,
            firstAnimationBarColor: baseThemeVariables.primary,
            secondAnimationBarColor: baseThemeVariables.success,
            splitLineStyleOpacity: '1',
            splitLineStyleWidth: '1',
            splitLineStyleColor: baseThemeVariables.separator,
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;'
          },
          trafficBarEchart: {
            gradientFrom: baseThemeVariables.warningLight,
            gradientTo: baseThemeVariables.warning,
            shadow: baseThemeVariables.warningLight,
            shadowBlur: '0',
            axisTextColor: baseThemeVariables.fgText,
            axisFontSize: '12',
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal'
          },
          countryOrders: {
            countryBorderColor: baseThemeVariables.border4,
            countryFillColor: baseThemeVariables.bg3,
            countryBorderWidth: '1',
            hoveredCountryBorderColor: baseThemeVariables.primary,
            hoveredCountryFillColor: baseThemeVariables.primaryLight,
            hoveredCountryBorderWidth: '1',
            chartAxisLineColor: baseThemeVariables.border4,
            chartAxisTextColor: baseThemeVariables.fg,
            chartAxisFontSize: '16',
            chartGradientTo: baseThemeVariables.primary,
            chartGradientFrom: baseThemeVariables.primaryLight,
            chartAxisSplitLine: baseThemeVariables.separator,
            chartShadowLineColor: baseThemeVariables.primaryLight,
            chartLineBottomShadowColor: baseThemeVariables.primary,
            chartInnerLineColor: baseThemeVariables.bg2
          },
          echarts: {
            bg: baseThemeVariables.bg,
            textColor: baseThemeVariables.fgText,
            axisLineColor: baseThemeVariables.fgText,
            splitLineColor: baseThemeVariables.separator,
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: baseThemeVariables.primary,
            areaOpacity: '0.7'
          },
          chartjs: {
            axisLineColor: baseThemeVariables.separator,
            textColor: baseThemeVariables.fgText
          },
          orders: {
            tooltipBg: baseThemeVariables.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: baseThemeVariables.border4,
            axisFontSize: '16',
            axisTextColor: baseThemeVariables.fg,
            yAxisSplitLine: baseThemeVariables.separator,
            itemBorderColor: baseThemeVariables.primary,
            lineStyle: 'solid',
            lineWidth: '4',
            // first line
            firstAreaGradFrom: baseThemeVariables.bg3,
            firstAreaGradTo: baseThemeVariables.bg3,
            firstShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            // second line
            secondLineGradFrom: baseThemeVariables.primary,
            secondLineGradTo: baseThemeVariables.primary,
            secondAreaGradFrom: 'rgba(51, 102, 255, 0.2)',
            secondAreaGradTo: 'rgba(51, 102, 255, 0)',
            secondShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            // third line
            thirdLineGradFrom: baseThemeVariables.success,
            thirdLineGradTo: baseThemeVariables.successLight,
            thirdAreaGradFrom: 'rgba(0, 214, 143, 0.2)',
            thirdAreaGradTo: 'rgba(0, 214, 143, 0)',
            thirdShadowLineDarkBg: 'rgba(0, 0, 0, 0)'
          },
          profit: {
            bg: baseThemeVariables.bg,
            textColor: baseThemeVariables.fgText,
            axisLineColor: baseThemeVariables.border4,
            splitLineColor: baseThemeVariables.separator,
            areaOpacity: '1',
            axisFontSize: '16',
            axisTextColor: baseThemeVariables.fg,
            // first bar
            firstLineGradFrom: baseThemeVariables.bg3,
            firstLineGradTo: baseThemeVariables.bg3,
            firstLineShadow: 'rgba(0, 0, 0, 0)',
            // second bar
            secondLineGradFrom: baseThemeVariables.primary,
            secondLineGradTo: baseThemeVariables.primary,
            secondLineShadow: 'rgba(0, 0, 0, 0)',
            // third bar
            thirdLineGradFrom: baseThemeVariables.success,
            thirdLineGradTo: baseThemeVariables.successLight,
            thirdLineShadow: 'rgba(0, 0, 0, 0)'
          },
          orderProfitLegend: {
            firstItem: baseThemeVariables.success,
            secondItem: baseThemeVariables.primary,
            thirdItem: baseThemeVariables.bg3
          },
          visitors: {
            tooltipBg: baseThemeVariables.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '1',
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: baseThemeVariables.border4,
            axisFontSize: '16',
            axisTextColor: baseThemeVariables.fg,
            yAxisSplitLine: baseThemeVariables.separator,
            itemBorderColor: baseThemeVariables.primary,
            lineStyle: 'dotted',
            lineWidth: '6',
            lineGradFrom: '#ffffff',
            lineGradTo: '#ffffff',
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: baseThemeVariables.primary,
            areaGradTo: baseThemeVariables.primaryLight,
            innerLineStyle: 'solid',
            innerLineWidth: '1',
            innerAreaGradFrom: baseThemeVariables.success,
            innerAreaGradTo: baseThemeVariables.success
          },
          visitorsLegend: {
            firstIcon: baseThemeVariables.success,
            secondIcon: baseThemeVariables.primary
          },
          visitorsPie: {
            firstPieGradientLeft: baseThemeVariables.success,
            firstPieGradientRight: baseThemeVariables.success,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            firstPieRadius: ['70%', '90%'],
            secondPieGradientLeft: baseThemeVariables.warning,
            secondPieGradientRight: baseThemeVariables.warningLight,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieRadius: ['60%', '97%'],
            shadowOffsetX: '0',
            shadowOffsetY: '0'
          },
          visitorsPieLegend: {
            firstSection: baseThemeVariables.warning,
            secondSection: baseThemeVariables.success
          },
          earningPie: {
            radius: ['65%', '100%'],
            center: ['50%', '50%'],
            fontSize: '22',
            firstPieGradientLeft: baseThemeVariables.success,
            firstPieGradientRight: baseThemeVariables.success,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieGradientLeft: baseThemeVariables.primary,
            secondPieGradientRight: baseThemeVariables.primary,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            thirdPieGradientLeft: baseThemeVariables.warning,
            thirdPieGradientRight: baseThemeVariables.warning,
            thirdPieShadowColor: 'rgba(0, 0, 0, 0)'
          },
          earningLine: {
            gradFrom: baseThemeVariables.primary,
            gradTo: baseThemeVariables.primary,
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;'
          }
        }
      };
      /***/
    },

    /***/
    19466: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ThemeModule": function ThemeModule() {
          return (
            /* binding */
            _ThemeModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @nebular/theme */
      42522);
      /* harmony import */


      var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @nebular/eva-icons */
      73749);
      /* harmony import */


      var _nebular_security__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @nebular/security */
      51938);
      /* harmony import */


      var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./components */
      1213);
      /* harmony import */


      var _pipes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pipes */
      34896);
      /* harmony import */


      var _layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./layouts */
      38203);
      /* harmony import */


      var _styles_theme_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./styles/theme.default */
      20546);
      /* harmony import */


      var _styles_theme_cosmic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./styles/theme.cosmic */
      25838);
      /* harmony import */


      var _styles_theme_corporate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./styles/theme.corporate */
      50439);
      /* harmony import */


      var _styles_theme_dark__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./styles/theme.dark */
      95497);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var NB_MODULES = [_nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbLayoutModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbMenuModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbUserModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbActionsModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbSearchModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbSidebarModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbContextMenuModule, _nebular_security__WEBPACK_IMPORTED_MODULE_8__.NbSecurityModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbButtonModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbSelectModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbIconModule, _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_9__.NbEvaIconsModule];
      var COMPONENTS = [_components__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _components__WEBPACK_IMPORTED_MODULE_0__.FooterComponent, _components__WEBPACK_IMPORTED_MODULE_0__.SearchInputComponent, _components__WEBPACK_IMPORTED_MODULE_0__.TinyMCEComponent, _layouts__WEBPACK_IMPORTED_MODULE_2__.OneColumnLayoutComponent, _layouts__WEBPACK_IMPORTED_MODULE_2__.ThreeColumnsLayoutComponent, _layouts__WEBPACK_IMPORTED_MODULE_2__.TwoColumnsLayoutComponent];
      var PIPES = [_pipes__WEBPACK_IMPORTED_MODULE_1__.CapitalizePipe, _pipes__WEBPACK_IMPORTED_MODULE_1__.PluralPipe, _pipes__WEBPACK_IMPORTED_MODULE_1__.RoundPipe, _pipes__WEBPACK_IMPORTED_MODULE_1__.TimingPipe, _pipes__WEBPACK_IMPORTED_MODULE_1__.NumberWithCommasPipe];

      var _ThemeModule = /*#__PURE__*/function () {
        function _ThemeModule() {
          _classCallCheck(this, _ThemeModule);
        }

        _createClass(_ThemeModule, null, [{
          key: "forRoot",
          value: function forRoot() {
            return {
              ngModule: _ThemeModule,
              providers: _toConsumableArray(_nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbThemeModule.forRoot({
                name: 'default'
              }, [_styles_theme_default__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_THEME, _styles_theme_cosmic__WEBPACK_IMPORTED_MODULE_4__.COSMIC_THEME, _styles_theme_corporate__WEBPACK_IMPORTED_MODULE_5__.CORPORATE_THEME, _styles_theme_dark__WEBPACK_IMPORTED_MODULE_6__.DARK_THEME]).providers)
            };
          }
        }]);

        return _ThemeModule;
      }();

      _ThemeModule.ɵfac = function ThemeModule_Factory(t) {
        return new (t || _ThemeModule)();
      };

      _ThemeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
        type: _ThemeModule
      });
      _ThemeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule].concat(NB_MODULES), _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](_ThemeModule, {
          declarations: [_components__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _components__WEBPACK_IMPORTED_MODULE_0__.FooterComponent, _components__WEBPACK_IMPORTED_MODULE_0__.SearchInputComponent, _components__WEBPACK_IMPORTED_MODULE_0__.TinyMCEComponent, _layouts__WEBPACK_IMPORTED_MODULE_2__.OneColumnLayoutComponent, _layouts__WEBPACK_IMPORTED_MODULE_2__.ThreeColumnsLayoutComponent, _layouts__WEBPACK_IMPORTED_MODULE_2__.TwoColumnsLayoutComponent, _pipes__WEBPACK_IMPORTED_MODULE_1__.CapitalizePipe, _pipes__WEBPACK_IMPORTED_MODULE_1__.PluralPipe, _pipes__WEBPACK_IMPORTED_MODULE_1__.RoundPipe, _pipes__WEBPACK_IMPORTED_MODULE_1__.TimingPipe, _pipes__WEBPACK_IMPORTED_MODULE_1__.NumberWithCommasPipe],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbLayoutModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbMenuModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbUserModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbActionsModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbSearchModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbSidebarModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbContextMenuModule, _nebular_security__WEBPACK_IMPORTED_MODULE_8__.NbSecurityModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbButtonModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbSelectModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_7__.NbIconModule, _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_9__.NbEvaIconsModule],
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _pipes__WEBPACK_IMPORTED_MODULE_1__.CapitalizePipe, _pipes__WEBPACK_IMPORTED_MODULE_1__.PluralPipe, _pipes__WEBPACK_IMPORTED_MODULE_1__.RoundPipe, _pipes__WEBPACK_IMPORTED_MODULE_1__.TimingPipe, _pipes__WEBPACK_IMPORTED_MODULE_1__.NumberWithCommasPipe, _components__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _components__WEBPACK_IMPORTED_MODULE_0__.FooterComponent, _components__WEBPACK_IMPORTED_MODULE_0__.SearchInputComponent, _components__WEBPACK_IMPORTED_MODULE_0__.TinyMCEComponent, _layouts__WEBPACK_IMPORTED_MODULE_2__.OneColumnLayoutComponent, _layouts__WEBPACK_IMPORTED_MODULE_2__.ThreeColumnsLayoutComponent, _layouts__WEBPACK_IMPORTED_MODULE_2__.TwoColumnsLayoutComponent]
        });
      })();
      /***/

    },

    /***/
    90158: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "routes": function routes() {
          return (
            /* binding */
            _routes
          );
        },

        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _nebular_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @nebular/auth */
      86665);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _routes = [{
        path: 'pages',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_pages_pages_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./pages/pages.module */
          18950)).then(function (m) {
            return m.PagesModule;
          });
        }
      }, {
        path: 'auth',
        component: _nebular_auth__WEBPACK_IMPORTED_MODULE_0__.NbAuthComponent,
        children: [{
          path: '',
          component: _nebular_auth__WEBPACK_IMPORTED_MODULE_0__.NbLoginComponent
        }, {
          path: 'login',
          component: _nebular_auth__WEBPACK_IMPORTED_MODULE_0__.NbLoginComponent
        }, {
          path: 'register',
          component: _nebular_auth__WEBPACK_IMPORTED_MODULE_0__.NbRegisterComponent
        }, {
          path: 'logout',
          component: _nebular_auth__WEBPACK_IMPORTED_MODULE_0__.NbLogoutComponent
        }, {
          path: 'request-password',
          component: _nebular_auth__WEBPACK_IMPORTED_MODULE_0__.NbRequestPasswordComponent
        }, {
          path: 'reset-password',
          component: _nebular_auth__WEBPACK_IMPORTED_MODULE_0__.NbResetPasswordComponent
        }]
      }, {
        path: '',
        redirectTo: 'pages',
        pathMatch: 'full'
      }, {
        path: '**',
        redirectTo: 'pages'
      }];
      var config = {
        useHash: false
      };

      var _AppRoutingModule = function _AppRoutingModule() {
        _classCallCheck(this, _AppRoutingModule);
      };

      _AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || _AppRoutingModule)();
      };

      _AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _AppRoutingModule
      });
      _AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(_routes, config)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    55041: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _core_utils_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./@core/utils/analytics.service */
      30553);
      /* harmony import */


      var _core_utils_seo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./@core/utils/seo.service */
      93285);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _AppComponent = /*#__PURE__*/function () {
        function _AppComponent(analytics, seoService) {
          _classCallCheck(this, _AppComponent);

          this.analytics = analytics;
          this.seoService = seoService;
        }

        _createClass(_AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.analytics.trackPageViews();
            this.seoService.trackCanonicalChanges();
          }
        }]);

        return _AppComponent;
      }();

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_utils_analytics_service__WEBPACK_IMPORTED_MODULE_0__.AnalyticsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_utils_seo_service__WEBPACK_IMPORTED_MODULE_1__.SeoService));
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["ngx-app"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet],
        encapsulation: 2
      });
      /***/
    },

    /***/
    36747: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      75835);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _core_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./@core/core.module */
      43127);
      /* harmony import */


      var _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./@theme/theme.module */
      19466);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @nebular/theme */
      42522);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /**
       * @license
       * Copyright Akveo. All Rights Reserved.
       * Licensed under the MIT License. See License.txt in the project root for license information.
       */


      var _AppModule = function _AppModule() {
        _classCallCheck(this, _AppModule);
      };

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbSidebarModule.forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbMenuModule.forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbDatepickerModule.forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbDialogModule.forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbWindowModule.forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbToastrModule.forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbChatModule.forRoot({
          messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY'
        }), _core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule.forRoot(), _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__.ThemeModule.forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbSidebarModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbMenuModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbDatepickerModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbDialogModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbWindowModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbToastrModule, _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbChatModule, _core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule, _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__.ThemeModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule]
        });
      })();
      /***/

    },

    /***/
    92340: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      });
      /**
       * @license
       * Copyright Akveo. All Rights Reserved.
       * Licensed under the MIT License. See License.txt in the project root for license information.
       */
      // The file contents for the current environment will overwrite these during build.
      // The build system defaults to the dev environment which uses `environment.ts`, but if you do
      // `ng build --env=prod` then `environment.prod.ts` will be used instead.
      // The list of which env maps to which file can be found in `.angular-cli.json`.


      var _environment = {
        production: false
      };
      /***/
    },

    /***/
    14431: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);
      /**
       * @license
       * Copyright Akveo. All Rights Reserved.
       * Licensed under the MIT License. See License.txt in the project root for license information.
       */


      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/

    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();