import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedID: "",
    config: {
      id: "main",
      flex: 1,
      component: "container",
      style: "normal",
      align: "flexcol", // block inline flexcol flexrow
      check: false,
      legend: "標題",
      elements: [
        {
          id: "header",
          class: ["navbar","navbar-light","bg-dark","text-white"],
          component: "container",
          style: "normal",
          align: "inline", // block inline flexcol flexrow
          check: false,
          legend: "header",
          elements: [
            {
              component: "static",
              style: "html",
              content: "<h1>NCDP Designer</h1>",
            },
          ],
        },
        {
          id: "body",
          component: "container",
          class: ["mt-3"],
          style: "normal",
          align: "flexrow", // block inline flexcol flexrow
          check: false,
          legend: "body",
          elements: [
            {
              id: "menu",
              component: "container",
              class: ["col-2"],
              style: "normal",
              align: "flexcol", // block inline flexcol flexrow
              check: false,
              legend: "menu",
              elements: [
                {
                  component: "static",
                  style: "html",
                  content: "<h5>系統連結</h5>",
                },
                {
                  component: "static",
                  style: "html",
                  content: "<a href='1.html'>系統1</a>",
                },
                {
                  component: "static",
                  style: "html",
                  content: "<a href='1.html'>系統2</a>",
                },
                {
                  component: "static",
                  style: "html",
                  content: "<a href='1.html'>系統3</a>",
                },
              ],
            },
            {
              id: "content",
              flex: 1,
              component: "container",
              style: "normal",
              align: "flexcol", // block inline flexcol flexrow
              check: false,
              legend: "content",
              elements: [
                {
                  component: "static",
                  style: "html",
                  content: "this is content",
                  id: "contentHTML"
                },
              ],
            },
          ],
        },
      ],
    },
  },
  mutations: {
    updateComponentByID(state, payload) {
      state.selectedID = payload;
    }
  },
  actions: {},
  modules: {}
});
