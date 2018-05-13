import * as Tools from './tools'

import CategoryElem from './components/CategoryElem';
const categoryElem = new CategoryElem();

import PortfolioElem from './components/PortfolioElem';
const portfolioElem = new PortfolioElem();

import PopularPostersElem from './components/PopularPostersElem';
const popularPostersElem = new PopularPostersElem();

import TagsCloudElem from './components/TagsCloudElem';
const tagsCloudElem = new TagsCloudElem();

import categoryData from '../../data/categoryData';
import portfolioData from '../../data/portfolioData';
import popularPostesData from '../../data/popularPostesData';
import tagsCloudData from '../../data/tagsCloudData';

document.addEventListener("DOMContentLoaded", () => {
	categoryElem.buildDOM(categoryData);
	portfolioElem.buildDOM(portfolioData);
	popularPostersElem.buildDOM(popularPostesData);
	tagsCloudElem.buildDOM(tagsCloudData);
	scrollBtnInit();
});

window.addEventListener("load", () => {
	contentMarginTop();
});

function contentMarginTop() {
	const headElem = document.querySelector('#header');
	const mainElem = document.querySelector('#main');

	mainElem.style.paddingTop = headElem.clientHeight + 'px';
	Tools.onWindowResize(contentMarginTop);
}

function scrollBtnInit() {
	let btn = document.querySelector('#move-to-top');
	btn.addEventListener('click', Tools.scrollPageToTop);
}