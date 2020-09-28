// ==UserScript==
// @name         V2EX remove Custom background
// @namespace    https://github.com/demon-zhonglin/v2ex-remove-custom-background
// @version      0.1
// @description  去除用户自定义页面背景特效
// @author       You
// @match        https://v2ex.com/*
// @match        https://*.v2ex.com/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  const wrapperNode = document.querySelector('#Wrapper');
  wrapperNode.style.backgroundColor = '#e2e2e2'
  wrapperNode.style.backgroundImage = 'url(/static/img/shadow_light.png)'
  wrapperNode.style.backgroundRepeat = 'repeat-x'
})();