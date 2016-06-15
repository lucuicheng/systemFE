'use strict';

var appDirective = angular.module('appDirective', []);

//触摸指令 触摸
appDirective.directive('ngTouchstart', [function () {
    return function (scope, element, attr) {
        element.on('touchstart', function (event) {
            scope.$apply(function () {
                scope.$eval(attr.ngTouchstart);
            });
        });
    };
}]);

//触摸指令 松开
appDirective.directive('ngTouchend', [function () {
    return function (scope, element, attr) {
        element.on('touchend', function (event) {
            scope.$apply(function () {
                scope.$eval(attr.ngTouchend);
            });
        });
    };
}]);

//触摸指令 判断方向 所有
appDirective.directive('ngTouchend', [function () {
    return function (scope, element, attr) {
        element.on('touchend', function (event) {
            scope.$apply(function () {
                scope.$eval(attr.ngTouchend);
            });
        });
    };
}]);

//触摸指令-长按
appDirective.directive('ngTouchLong', ['$timeout', function ($timeout) {
    return function ($scope, element, attr) {

        //禁用弹出菜单,element需要转换成dom对象
        element.get(0).addEventListener('contextmenu',
            function (event) {
                event.preventDefault();
            }, false
        );

        //开始按住
        element.on('touchstart', function (event) {

            $scope.timePromise = $timeout(function () {//开始计时，
                $scope.$apply(function () {//长按调用的方法,
                    $scope.$eval(attr.ngTouchLong);
                });

            }, 800);

        });

        //离开取消长按效果
        element.on('touchend', function (event) {
            $timeout.cancel($scope.timePromise);
        });
    };
}]);

//滑动指令-向上
appDirective.directive('swipeUp', [function () {
    return function ($scope, element, attr) {
        var startX, startY, endX, endY, moveX, moveY;

        //禁用弹出菜单,element需要转换成dom对象
        element.get(0).addEventListener('contextmenu',
            function (event) {
                event.preventDefault();
            }, false
        );

        function startStopScrolling(touchEvent) {
            var touch = touchEvent.touches[0];
            startX = touch.pageX;
            startY = touch.pageY;

            //阻值页面行为
            //touchEvent.preventDefault();
        };
        element.get(0).addEventListener('touchstart', startStopScrolling, false);

        function moveScrolling(touchEvent) {
            var touch = touchEvent.touches[0];
            moveX = touch.pageX;
            moveY = touch.pageY;

            var positionX = (parseInt(moveX) - parseInt(startX));
            var positionY = (parseInt(moveY) - parseInt(startY));

            if (Math.abs(positionY) > Math.abs(positionX) && positionY < 0) {
                $scope.$apply(function () {
                    $scope.$eval(attr.swipeUp);
                });
            }

        };
        element.get(0).addEventListener('touchmove', moveScrolling, false);
    };
}]);

//滑动指令-向左
appDirective.directive('swipeLeft', [function () {
    return function ($scope, element, attr) {
        var startX, startY, endX, endY, moveX, moveY;

        //禁用弹出菜单,element需要转换成dom对象
        element.get(0).addEventListener('contextmenu',
            function (event) {
                event.preventDefault();
            }, false
        );

        function startStopScrolling(touchEvent) {
            var touch = touchEvent.touches[0];
            startX = touch.pageX;
            startY = touch.pageY;

            //阻值页面行为
            //touchEvent.preventDefault();
        };
        element.get(0).addEventListener('touchstart', startStopScrolling, false);

        function moveScrolling(touchEvent) {
            var touch = touchEvent.touches[0];
            moveX = touch.pageX;
            moveY = touch.pageY;

            var positionX = (parseInt(moveX) - parseInt(startX));
            var positionY = (parseInt(moveY) - parseInt(startY));

            if (Math.abs(positionX) > Math.abs(positionY) && positionX < 0) {
                $scope.$apply(function () {
                    $scope.$eval(attr.swipeLeft);
                });
            }

        };
        element.get(0).addEventListener('touchmove', moveScrolling, false);
    };
}]);

//滑动指令-向下
appDirective.directive('swipeDown', [function () {
    return function ($scope, element, attr) {
        var startX, startY, endX, endY, moveX, moveY;

        //禁用弹出菜单,element需要转换成dom对象
        element.get(0).addEventListener('contextmenu',
            function (event) {
                event.preventDefault();
            }, false
        );

        function startStopScrolling(touchEvent) {
            var touch = touchEvent.touches[0];
            startX = touch.pageX;
            startY = touch.pageY;

            //阻值页面行为
            //touchEvent.preventDefault();
        };
        element.get(0).addEventListener('touchstart', startStopScrolling, false);

        function moveScrolling(touchEvent) {
            var touch = touchEvent.touches[0];
            moveX = touch.pageX;
            moveY = touch.pageY;

            var positionX = (parseInt(moveX) - parseInt(startX));
            var positionY = (parseInt(moveY) - parseInt(startY));

            if (Math.abs(positionY) > Math.abs(positionX) && positionY > 0) {
                $scope.$apply(function () {
                    $scope.$eval(attr.swipeDown);
                });
            }

        };
        element.get(0).addEventListener('touchmove', moveScrolling, false);
    };
}]);

//滑动指令-向右
appDirective.directive('swipeRight', [function () {
    return function ($scope, element, attr) {
        var startX, startY, endX, endY, moveX, moveY;

        //禁用弹出菜单,element需要转换成dom对象
        element.get(0).addEventListener('contextmenu',
            function (event) {
                event.preventDefault();
            }, false
        );

        function startStopScrolling(touchEvent) {
            var touch = touchEvent.touches[0];
            startX = touch.pageX;
            startY = touch.pageY;

            //阻值页面行为
            //touchEvent.preventDefault();
        };
        element.get(0).addEventListener('touchstart', startStopScrolling, false);

        function moveScrolling(touchEvent) {
            var touch = touchEvent.touches[0];
            moveX = touch.pageX;
            moveY = touch.pageY;

            var positionX = (parseInt(moveX) - parseInt(startX));
            var positionY = (parseInt(moveY) - parseInt(startY));

            if (Math.abs(positionX) > Math.abs(positionY) && positionX > 0) {
                $scope.$apply(function () {
                    $scope.$eval(attr.swipeRight);
                });
            }

        };
        element.get(0).addEventListener('touchmove', moveScrolling, false);
    };
}]);

/**
 * 翻页指令
 */
appDirective.directive('pageChange', function ($location, $state, $rootScope) {
    return {
        restrict: "EA",
        controller: ["$scope", "$rootScope", function ($scope, $rootScope) {
            //$rootScope.pageClass = 'resume-page-up';
        }],
        link: function ($scope, element, attr) {
            var startX, startY, endX, endY, moveX, moveY;

            //禁用弹出菜单,element需要转换成dom对象
            element.get(0).addEventListener('contextmenu',
                function (event) {
                    event.preventDefault();
                }, false
            );

            function start(touchEvent) {
                var touch = touchEvent.touches[0];
                startX = touch.pageX;
                startY = touch.pageY;

                //阻值页面行为
                touchEvent.preventDefault();
            };
            element.get(0).addEventListener('touchstart', start, false);

            var path = $location.path();
            var pageCtrl = element.parents("body").find("ul.page");
            var currentPage = pageCtrl.attr('current-page');
            var totalPage = pageCtrl.attr('total-page');
            var pageClass = 'resume-page-up';

            function move(touchEvent) {
                var touch = touchEvent.changedTouches[0];
                moveX = touch.pageX;
                moveY = touch.pageY;

                var positionX = (parseInt(moveX) - parseInt(startX));
                var positionY = (parseInt(moveY) - parseInt(startY));

                //TODO 限制设置为长宽的百分比
                if (Math.abs(positionY) > Math.abs(positionX) && positionY < 0 && Math.abs(positionY) >= 100) {//向上
                    currentPage++;
                    if (currentPage > totalPage) {//末页
                        currentPage = totalPage;
                        return;
                    }
                    pageClass = 'resume-page-up';
                }
                else if (Math.abs(positionY) > Math.abs(positionX) && positionY > 0 && Math.abs(positionY) >= 100) {//向下
                    currentPage--;
                    if (currentPage < 1) {//首页
                        currentPage = 1;
                        return;
                    }
                    pageClass = 'resume-page-down';
                }
                $rootScope.pageClass = pageClass;
                //console.log('-----' + $rootScope.pageClass);

                pageCtrl.attr('current-page', currentPage);
                pageCtrl.find('li:eq(' + (parseInt(currentPage) - 1) + ')').trigger('click');
            };
            element.get(0).addEventListener('touchend', move, false);
        }
    }
});

/**
 * 导航自动收缩
 */
appDirective.directive('navShrink', function ($location, $state, $compile, $rootScope) {
    return {
        restrict: "EA",
        controller: ["$scope", "$rootScope", function ($scope, $rootScope) {
            //$rootScope.pageClass = 'resume-page-up';
        }],
        link: function ($scope, element, attr) {
            var height = 0
            $("div[class^='row nav-']").each(function () {//复制一份导航内容所有
                var _class = $(this).prop('class');
                var _name = $(this).attr('name');
                height += parseInt($(this).height());

                if(_class.indexOf('nav-img') < 0) {
                    var _content = '<div class="copy ' + _class + ' fixed" name="' + _name + '">' + $(this).html() + '</div>';
                    _content = $compile(_content)($scope);//动态编译，html代码片段
                    $(this).after(_content);
                }
            });

            $('.jump-top').on('click', function() {
                $('html, body').animate({scrollTop:0}, '500');
            });

            $(window).scroll(function () {//超过一定距离显示导航,及回到顶部按钮
                if ($(window).scrollTop() >= height) {
                    $('.copy').addClass('show');
                    $('.jump-top').addClass('show');

                } else {
                    $('.copy').removeClass('show');
                    $('.jump-top').removeClass('show');

                };
            });

        }
    }
});

/**
 * 内容自动展开或者收缩
 */
appDirective.directive('expandOrContract', function ($location, $state, $rootScope) {
    return {
        restrict: "EA",
        controller: ["$scope", "$rootScope", function ($scope, $rootScope) {
            $scope.operateClass = 'glyphicon-triangle-bottom';
        }],
        link: function ($scope, element, attr) {
            element.on('click', function() {
                $(this).toggleClass('glyphicon-triangle-top');
                $('div[name=' + attr.expandOrContract + ']').toggleClass('contract');
            });
        }
    }
});

/**
 * 导航内容展开或者收缩
 */
appDirective.directive('navExpandOrContract', function ($location, $state, $rootScope) {
    return {
        restrict: "EA",
        controller: ["$scope", "$rootScope", function ($scope, $rootScope) {
            $scope.operateClass = 'glyphicon-triangle-bottom';
        }],
        link: function ($scope, element, attr) {
            var count = $('.nav-label').find('div').length;
            if(count > 12) {//导航标题超过12个时隐藏
                $('.glyphicon-menu-down').removeClass('hidden-sm hidden-md hidden-lg');
            }

            element.on('click', function() {
                $(this).toggleClass('glyphicon-menu-down glyphicon-menu-up');
                $(this).parents('div[name=' + attr.navExpandOrContract + ']').toggleClass('nav-contract');
            });
        }
    }
});

/**
 *内容自动展开或者收缩 一般栅格
 */
appDirective.directive('th', function ($location, $state, $rootScope) {
    return {
        restrict: "EA",
        controller: ["$scope", "$rootScope", function ($scope, $rootScope) {
            $scope.operateClass = 'glyphicon-triangle-bottom';
        }],
        link: function ($scope, element, attr) {
            element.on('click', function() {
                $('div[name=' + attr.th + ']').removeClass('datas-line');
                $('div[name=' + attr.th + ']').removeClass('col-md-6');
                $('div[name=' + attr.th + ']').removeClass('col-md-12');
                $('div[name=' + attr.th + ']').addClass('anime-datas');
                $('div[name=' + attr.th + ']').addClass('col-md-4');
            });
        }
    }
});

/**
 *内容自动展开或者收缩 行列表形式
 */
appDirective.directive('thList', function ($location, $state, $rootScope) {
    return {
        restrict: "EA",
        controller: ["$scope", "$rootScope", function ($scope, $rootScope) {
            $scope.operateClass = 'glyphicon-triangle-bottom';
        }],
        link: function ($scope, element, attr) {
            element.on('click', function() {
                $('div[name=' + attr.thList + ']').removeClass('col-md-4');
                $('div[name=' + attr.thList + ']').removeClass('col-md-6');
                $('div[name=' + attr.thList + ']').addClass('col-md-12');
                $('div[name=' + attr.thList + ']').addClass('anime-datas');
                $('div[name=' + attr.thList + ']').addClass('datas-line');
            });
        }
    }
});

/**
 * 内容自动展开或者收缩 大栅格
 */
appDirective.directive('thLarge', function ($location, $state, $rootScope) {
    return {
        restrict: "EA",
        controller: ["$scope", "$rootScope", function ($scope, $rootScope) {
            $scope.operateClass = 'glyphicon-triangle-bottom';
        }],
        link: function ($scope, element, attr) {
            element.on('click', function() {
                $('div[name=' + attr.thLarge + ']').removeClass('datas-line');
                $('div[name=' + attr.thLarge + ']').removeClass('col-md-4');
                $('div[name=' + attr.thLarge + ']').removeClass('col-md-12');
                $('div[name=' + attr.thLarge + ']').addClass('anime-datas');
                $('div[name=' + attr.thLarge + ']').addClass('col-md-6');
            });
        }
    }
});

/**
 * 认证指令，处理成功|失败的提示信息
 */
appDirective.directive('login', function ($location, $state, commonService, AUTH_EVENTS) {
    return {
        restrict: 'A',
        link: function ($scope, elem, attr) {
            var loginSuccess = function () {
                commonService.openOperateModel(null, null, '', {});//跳转到登录成功页
            };

            var loginFailed = function () {
                commonService.openOperateModel(null, null, '', {});
            };

            $scope.$on(AUTH_EVENTS.loginSuccess, loginSuccess);//登录成功
            $scope.$on(AUTH_EVENTS.loginFailed, loginFailed);//登录失败
        }
    };
});

/**
 * 认证权限信息指令，处理页面权限的提示信息
 */
appDirective.directive('authInfo',
    function ($location, $state, commonService, AUTH_EVENTS) {
        return {
            restrict: 'A',
            link: function ($scope, $rootScope, elem, attr) {
                var notAuthenticatedInfo = function () {
                    console.log('not Authenticated');
                    commonService.openOperateModel(null, null, '', {});
                };

                var notAuthorizedInfo = function () {
                    console.log('not Authorized');
                    commonService.openOperateModel(null, null, '', {});
                };

                var sessionTimeoutInfo = function () {
                    console.log('session timeout');
                    commonService.openOperateModel(null, null, '', {});
                };

                $scope.$on(AUTH_EVENTS.notAuthenticated, notAuthenticatedInfo);//没有认证
                $scope.$on(AUTH_EVENTS.notAuthorized, notAuthorizedInfo);//没有授权
                $scope.$on(AUTH_EVENTS.sessionTimeout, sessionTimeoutInfo)//登录超时
            }
        };
    });

/**
 * 播放指令-播放
 */
appDirective.directive("ngPlay", ["$timeout", "$interval", function (timer, $interval) {
    return {
        restrict: "A",
        link: function ($scope, elem, attr) {
            timer(function () {
                var playWay = attr.playWay;//音频播放方式

                elem.on('click', function () {
                    var src = attr.ngPlay;//音频来源
                    var playSrc = elem.attr('play-src');//新的音频来源

                    if (playSrc != null && typeof(playSrc) != 'undefined') {
                        src = playSrc;
                    }

                    var audio = null;
                    if (!(elem.find('audio').length > 0 )) {//第一次创建
                        elem.append('<audio src="' + src + '"></audio>');
                        audio = elem.find('audio').get(0);//坑点
                    } else {//已经存在时判断
                        audio = elem.find('audio').get(0);
                        console.log($(audio).attr('src') + "\n" + src);
                        if ($(audio).attr('src') != src) {//新来源时重建,否在还是同样的audio
                            elem.find('audio').remove();
                            elem.append('<audio src="' + src + '"></audio>');
                            audio = elem.find('audio').get(0);
                        }
                    }

                    $scope.timePromise = $interval(function () {//开始计时
                        if (audio.ended) {
                            elem.find('.audio-icon').css({
                                'background-image': "url('http://wx.dfzhgx.com/images/audio-icon.png')"
                            });
                            $interval.cancel($scope.timePromise);
                        }
                        console.log(1)
                    }, 10);

                    if (audio.paused) {
                        elem.find('.audio-icon').css({
                            'background-image': "url('http://wx.dfzhgx.com/images/audio-icon.gif')"
                        });
                        audio.play();
                        return;
                    } else if (audio.play) {
                        elem.find('.audio-icon').css({
                            'background-image': "url('http://wx.dfzhgx.com/images/audio-icon.png')"
                        });
                        audio.pause();
                    }


                });

            }, 0);
        }
    };
}]);


/**
 * 选择指令-选择
 */
appDirective.directive("customSelect", ["$timeout", function (timer) {
    return {
        restrict: "A",
        link: function ($scope, elem, attr) {
            timer(function () {

                elem.on('click', function () {

                    if (elem.find('.audio-edit').attr('class').indexOf('selected') < 0) {
                        $('.audio-edit').removeClass('selected');
                        elem.find('.audio-edit').addClass('selected');
                    } else {
                        elem.find('.audio-edit').removeClass('selected');
                    }

                });

            }, 0);
        }
    };
}]);

/**
 * 渲染后处理1
 */
appDirective.directive("handleHtmlPart", ["$timeout", function (timer) {
    return {
        restrict: "A",
        link: function ($scope, elem, attr) {
            timer(function () {
                //alert($(elem.context).text());
                $scope.$watch(function () {

                    elem.find('img').parent().css({'margin': '0rem'});
                    elem.find('p').each(function () {
                        if ($(this).text() != null && $(this).text().trim().length == 4) {
                            $(this).css({'font-size': '1.6rem', 'color': '#333333'});
                        }
                    });

                });
            }, 0);
        }
    };
}]);

/**
 * 轮播指令
 */
appDirective.directive("owlCarousel", ["$timeout", function (timer) {
    return {
        restrict: "A",
        link: function ($scope, elem, attr) {
            timer(function () {
                //alert($(elem.context).text());
                $scope.$watch(function () {
                    if ($scope.list != null) {
                        var owl = $("#owl-demo");

                        owl.owlCarousel({
                            navigation: false,
                            slideSpeed: 400,
                            pagination: false,
                            paginationSpeed: 400,
                            singleItem: true,
                            rewindNav: false,
                            dragBeforeAnimFinish: true,
                            mouseDrag: false,
                            touchDrag: true,

                            afterMove: function () {
                                elem.attr('data-current', this.owl.currentItem)//标记播放到第几个
                                $scope.$apply(function () {
                                    $scope.$eval(attr.owlCarousel);
                                });
                            },
                        });
                    }
                });
            }, 0);
        }
    };
}]);

/**
 * 侧边内容，相对之前一个标准的指令插件
 */
appDirective.directive('sideContent', ['$rootScope', function ($rootScope) {
    return {
        restrict: "EA",
        controller: function($scope, $element){
            $scope.topContent = '测试侧边栏'
            $scope.leftContent = "上面三行语句都可以正确执行，因为首先它们都是赋值语句，而不是声明语句；其次它们的圆括号都不属于模式的一部分。第一行语句中，模式是取数组的第一个成员，跟圆括号无关；第二行语句中，模式是p，而不是d；第三行语句与第一行语句的性质一致。上面三行语句都可以正确执行，因为首先它们都是赋值语句，而不是声明语句；其次它们的圆括号都不属于模式的一部分。第一行语句中，模式是取数组的第一个成员，跟圆括号无关；第二行语句中，模式是p，而不是d；第三行语句与第一行语句的性质一致。"
            $scope.rightContent = "上面三行语句都可以正确执行，因为首先它们都是赋值语句，而不是声明语句；其次它们的圆括号都不属于模式的一部分。第一行语句中，模式是取数组的第一个成员，跟圆括号无关；第二行语句中，模式是p，而不是d；第三行语句与第一行语句的性质一致。上面三行语句都可以正确执行，因为首先它们都是赋值语句，而不是声明语句；其次它们的圆括号都不属于模式的一部分。第一行语句中，模式是取数组的第一个成员，跟圆括号无关；第二行语句中，模式是p，而不是d；第三行语句与第一行语句的性质一致。";
        },
        scope: {
            topContent:'=',
            toptType:'@',
            leftContent: '=',
            leftType: '@',
            rightContent: '=',
            rightType: '@',
        },
        templateUrl: 'modules/common/views/side.html',
        link: function ($scope, elem, attr) {

            $scope.showLeft = false;
            $scope.showRight = false;

            var changeContent = function (status) {
                var change = {};
                if(status) {
                    change.scroll = true;
                    change.blur = true;
                } else {
                    change.scroll = false;
                    change.blur = false;
                }
                $rootScope.$broadcast('changeContent', change);
            }

            $scope.showLeftSide = function() {
                $scope.showLeft = !$scope.showLeft;
                changeContent($scope.showLeft || $scope.showRight);
            };

            $scope.showRightSide = function() {
                $scope.showRight = !$scope.showRight;
                changeContent($scope.showLeft || $scope.showRight);
            };

            $scope.$on('resetSide', function (event, reset) {
                $scope.showLeft = reset.showLeft;
                $scope.showRight = reset.showRight;
            });
        }
    };
}]);

/**
 * 中间主体内容，相对之前一个标准的指令插件
 */
appDirective.directive('centerContent', ['$rootScope', function ($rootScope) {
    return {
        restrict: "EA",
        controller: function($scope, $element){
            $scope.content = "上面三行语句都可以正确执行，因为首先它们都是赋值语句，而不是声明语句；其次它们的圆括号都不属于模式的一部分。第一行语句中，模式是取数组的第一个成员，跟圆括号无关；第二行语句中，模式是p，而不是d；第三行语句与第一行语句的性质一致。上面三行语句都可以正确执行，因为首先它们都是赋值语句，而不是声明语句；其次它们的圆括号都不属于模式的一部分。第一行语句中，模式是取数组的第一个成员，跟圆括号无关；第二行语句中，模式是p，而不是d；第三行语句与第一行语句的性质一致。";
        },
        scope: {
            content:'=',
            contentUrl:'@',
            type:'@'
        },
        templateUrl: 'modules/common/views/content.html',
        link: function ($scope, elem, attr) {

            $scope.resetSide = function () {
                $scope.scroll = false;
                $scope.blur = false;

                var reset = {};
                reset.showLeft = false;
                reset.showRight = false;
                $rootScope.$broadcast('resetSide', reset);
            }

            $scope.$on('changeContent', function (event, change) {
                $scope.scroll = change.scroll;
                $scope.blur = change.blur;
            });

        }
    };
}]);

/**
 * 语言切换，另一种相对之前的一个标准的指令插件
 */
appDirective.directive('language', ['$translate', function ($translate) {
    return {
        restrict: "EA",
        controller: function($scope, $element){
            $scope.changeLanguage = function (langKey) {
                $translate.use(langKey)
            }
        },
        scope: {
            name:'@',
            key:'@',
        },
        template: '<div class="label label-default" translate="{{name}}" ng-click="changeLanguage(key)"></div>',
        link: function ($scope, elem, attr) {

            $scope.resetSide = function () {
                $scope.scroll = false;
                $scope.blur = false;

                var reset = {};
                reset.showLeft = false;
                reset.showRight = false;
                $rootScope.$broadcast('resetSide', reset);
            }

            $scope.$on('changeContent', function (event, change) {
                $scope.scroll = change.scroll;
                $scope.blur = change.blur;
            });

        }
    };
}]);

/**
 * 下拉刷新指令
 */
appDirective.directive('loadingLabel', [function () {
    return {
        restrict: "EA",
        templateUrl: 'modules/common/views/loadingLabel.html',
        link: function ($scope, elem, attr) {

            var startX, startY, endX, endY, moveX, moveY, canMove, startLoad;

            var maxH = $(window).height();
            var maxW = $(window).width();

            var minH = maxH / 10;
            var minW = maxW / 6;

            /**
             * 手指开始触摸
             */
            function startStopScrolling(touchEvent) {
                var touch = touchEvent.touches[0];
                startX = touch.pageX;
                startY = touch.pageY;
            };
            document.addEventListener('touchstart', startStopScrolling, false);

            /**
             * 手指离开
             */
            function endMoveScrolling(touchEvent) {
                var touch = touchEvent.changedTouches[0];
                endX = touch.pageX;
                endY = touch.pageY;

                //离开时恢复默认事件
                touchEvent.returnValue = true;

                //开始并处理刷新时的数据
                if (startLoad) {
                    $scope.$apply(function () {

                        $scope.refresh()
                            .then(function (data) {//先处理数据

                                $scope.result = data.result;

                                return data;//必须返回让下一个步骤处理
                            }, function (error) {
                                return error;//同样必须返回让下一个步骤处理
                            })
                            .then(function (data) {//数据处理结束后，页面开始动态效果

                                $(".data-list").css({
                                    'transform': 'translateY(0px)',
                                    '-webkit-transform': 'translateY(0px)',
                                    '-moz-transform': 'translateY(0px)',
                                    'transition': 'all 500ms ease 0s',
                                    '-moz-transition': 'all 500ms ease 0s',
                                    '-webkit-transition': 'all 500ms ease 0s',
                                    '-o-transition': 'all 500ms ease 0s'
                                });
                                startLoad = false;//刷新结束

                            }, function (error) {

                            });

                    });
                } else {//未满足刷新条件时，下拉自动回到原位置
                    $(".data-list").css({
                        'transform': 'translateY(0px)',
                        '-webkit-transform': 'translateY(0px)',
                        '-moz-transform': 'translateY(0px)',
                        'transition': 'all 500ms ease 0s',
                        '-moz-transition': 'all 500ms ease 0s',
                        '-webkit-transition': 'all 500ms ease 0s',
                        '-o-transition': 'all 500ms ease 0s'
                    });
                }

            };
            document.addEventListener('touchend', endMoveScrolling, false);

            /**
             * 手指移动
             */
            function moveScrolling(touchEvent) {
                var touch = touchEvent.touches[0];

                moveX = touch.pageX;
                moveY = touch.pageY;

                $(window).scroll(function () {//判断滚动的位置，滚动到顶部后吧，页面处于取消默认事件状态，开始下移数据区域
                    if ($(window).scrollTop() == 0) {
                        canMove = false;
                    } else {
                        canMove = true;
                    }
                    ;
                });

                if (!canMove) {
                    //取消默认事件，无法滚动
                    touchEvent.preventDefault();

                    //手指向下滑动，下移数据区域
                    if (startY <= moveY) {
                        var height = (parseInt(moveY) - parseInt(startY));

                        //计算下移的位置、距离等
                        var minH = 100;
                        var maxH = parseInt(3 * $(window).height() / 4);
                        var percent = (parseFloat(height / minH)).toFixed(2);

                        //开始下移一段
                        if (height <= minH && height >= 40) {
                            height = height - 40;

                            $(".data-list").css({
                                'transform': 'translateY(' + height + 'px)',
                                '-webkit-transform': 'translateY(' + height + 'px)',
                                '-moz-transform': 'translateY(' + height + 'px)',

                                'transition': 'all 0ms linear 0s',
                                '-moz-transition': 'all 0ms linear 0s',
                                '-webkit-transition': 'all 0ms linear 0s',
                                '-o-transition': 'all 0ms linear 0s'
                            });
                        } else if (height > minH) {//超过下移区域后才能刷新
                            startLoad = true;
                        }

                    }
                }
                ;

                if (startY >= moveY) {//手指向上滑动，恢复默认事件
                    touchEvent.returnValue = true;
                }

            };
            document.addEventListener('touchmove', moveScrolling, false);
        }
    };
}]);
