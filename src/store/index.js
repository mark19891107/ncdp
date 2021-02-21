import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedID: "",
    toolbox: {
        list: {
          ".Prototype": {
            options: [
              {
                name: "id",
                title: "識別名稱",
                type: "text",
              },
              {
                name: "class",
                title: "css類別",
                type: "checklist",
                value: "#CLASS_LIST",
              },
              {
                name: "flex",
                title: "可伸縮",
                type: "text",
              },
            ],
          },
          Button: {
            attr: {
              desc: "按鈕",
            },
            events: {
              click: {
                desc: "按下按鈕",
              },
            },
            options: [
              {
                name: "title",
                title: "標題",
                type: "text",
              },
              {
                name: "disabled",
                title: "禁用",
                type: "bool",
              },
            ],
          },
          CheckList: {
            attr: {
              desc: "複選清單",
            },
            options: [
              {
                name: "style",
                title: "樣式",
                type: "list",
                value: [
                  {
                    default: true,
                    title: "核取方塊",
                    value: "checkbox",
                  },
                  {
                    title: "開關按鈕",
                    value: "button",
                  },
                ],
              },
              {
                name: "title",
                title: "標題",
                type: "text",
              },
              {
                name: "default",
                title: "預設值",
                type: "text",
              },
              {
                name: "items",
                title: "項目",
                type: "table",
                value: [
                  {
                    name: "title",
                    title: "項目標題",
                  },
                  {
                    name: "value",
                    title: "項目值",
                  },
                ],
              },
              {
                name: "type",
                title: "資料形式",
                type: "list",
                value: [
                  {
                    default: true,
                    title: "文字清單",
                    value: "normal",
                  },
                  {
                    title: "位元遮罩",
                    value: "bitmask",
                  },
                ],
              },
              {
                name: "multiline",
                title: "項目分行",
                type: "bool",
              },
            ],
          },
          Container: {
            attr: {
              container: true,
              desc: "元件容器",
            },
            options: [
              {
                name: "style",
                title: "樣式",
                type: "list",
                value: [
                  {
                    default: true,
                    title: "一般",
                    value: "normal",
                  },
                  {
                    title: "群組",
                    value: "fieldset",
                  },
                ],
              },
              {
                name: "align",
                title: "內容排列",
                type: "list",
                value: [
                  {
                    default: true,
                    title: "一般",
                    value: "block",
                  },
                  {
                    title: "單列",
                    value: "inline",
                  },
                  {
                    title: "伸縮欄",
                    value: "flexcol",
                  },
                  {
                    title: "伸縮列",
                    value: "flexrow",
                  },
                ],
              },
              {
                cond: {
                  style: "fieldset",
                },
                name: "check",
                title: "禁用開關",
                type: "bool",
              },
              {
                cond: {
                  style: "fieldset",
                },
                name: "legend",
                title: "標題",
                type: "text",
              },
            ],
          },
          Date: {
            attr: {
              desc: "日期選擇",
            },
            options: [
              {
                name: "style",
                title: "樣式",
                type: "list",
                value: [
                  {
                    default: true,
                    title: "單一日期",
                    value: "date",
                  },
                  {
                    title: "日期範圍",
                    value: "range",
                  },
                ],
              },
              {
                name: "format",
                title: "資料格式",
                type: "text",
              },
              {
                name: "disabled",
                title: "禁用",
                type: "bool",
              },
            ],
          },
          DropDown: {
            attr: {
              desc: "下拉式選單",
            },
            events: {
              change: {
                desc: "選擇項目變更",
              },
            },
            options: [
              {
                name: "style",
                title: "樣式",
                type: "list",
                value: [
                  {
                    default: true,
                    title: "一般",
                    value: "select",
                  },
                  {
                    title: "選單",
                    value: "menu",
                  },
                ],
              },
              {
                name: "title",
                title: "標題",
                type: "text",
              },
              {
                cond: {
                  style: "select",
                },
                name: "items",
                title: "項目定義",
                type: "table",
                value: [
                  {
                    name: "title",
                    title: "項目標題",
                  },
                  {
                    name: "value",
                    title: "項目值",
                  },
                  {
                    name: "group",
                    optional: true,
                    title: "群組",
                  },
                ],
              },
              {
                name: "default",
                title: "預設值",
                type: "text",
              },
              {
                name: "src",
                title: "動態定義",
                type: "href",
              },
              {
                name: "disabled",
                title: "禁用",
                type: "bool",
              },
            ],
          },
          Input: {
            attr: {
              desc: "輸入",
            },
            events: {
              change: {
                desc: "內容變更",
              },
            },
            options: [
              {
                name: "style",
                title: "樣式",
                type: "list",
                value: [
                  {
                    default: true,
                    title: "一般文字",
                    value: "text",
                  },
                  {
                    title: "數字",
                    value: "number",
                  },
                  {
                    title: "滑桿",
                    value: "range",
                  },
                ],
              },
              {
                name: "title",
                title: "標題",
                type: "text",
              },
              {
                name: "default",
                title: "預設值",
                type: "text",
              },
              {
                name: "disabled",
                title: "禁用",
                type: "text",
              },
              {
                cond: {
                  style: ["number", "range"],
                },
                name: "min",
                title: "最小值",
                type: "number",
              },
              {
                cond: {
                  style: ["number", "range"],
                },
                name: "max",
                title: "最大值",
                type: "number",
              },
              {
                cond: {
                  style: ["number", "range"],
                },
                name: "step",
                title: "最小單位",
                type: "number",
              },
              {
                cond: {
                  style: "text",
                },
                name: "size",
                title: "大小(字元數)",
                type: "number",
              },
              {
                cond: {
                  style: "text",
                },
                name: "maxlength",
                title: "可輸入字數",
                type: "number",
              },
              {
                cond: {
                  style: "text",
                },
                name: "pattern",
                title: "格式規範",
                type: "text",
              },
              {
                cond: {
                  style: "text",
                },
                name: "placeholder",
                title: "提示文字",
                type: "text",
              },
              {
                cond: {
                  style: ["text", "number"],
                },
                name: "align",
                title: "對齊",
                type: "list",
                value: [
                  {
                    default: true,
                    title: "左",
                    value: "left",
                  },
                  {
                    title: "中",
                    value: "center",
                  },
                  {
                    title: "右",
                    value: "right",
                  },
                ],
              },
              {
                cond: {
                  style: "text",
                },
                name: "transform",
                title: "文字轉換",
                type: "list",
                value: [
                  {
                    default: true,
                    title: "無",
                    value: "none",
                  },
                  {
                    title: "小寫",
                    value: "lowercase",
                  },
                  {
                    title: "大寫",
                    value: "uppercase",
                  },
                ],
              },
              {
                name: "readonly",
                title: "唯讀",
                type: "bool",
              },
            ],
          },
          MultiForm: {
            attr: {
              desc: "多重表單",
            },
            events: {
              hide: {
                desc: "隱藏表單",
                param: "name",
              },
              show: {
                desc: "顯示表單",
                param: "name",
              },
            },
            options: [
              {
                name: "style",
                title: "樣式",
                type: "list",
                value: [
                  {
                    default: true,
                    title: "頁籤列",
                    value: "tab",
                  },
                  {
                    title: "下拉選單",
                    value: "select",
                  },
                  {
                    title: "無線電鈕",
                    value: "radio",
                  },
                  {
                    title: "區段",
                    value: "section",
                  },
                ],
              },
              {
                name: "items",
                title: "項目定義",
                type: "table",
                value: [
                  {
                    name: "name",
                    title: "項目名稱",
                  },
                  {
                    name: "title",
                    title: "項目標題",
                  },
                  {
                    list: "#FORM_LIST",
                    name: "form",
                    title: "表單",
                  },
                ],
              },
            ],
          },
          Static: {
            attr: {
              desc: "靜態文字",
            },
            options: [
              {
                name: "style",
                title: "樣式",
                type: "list",
                value: [
                  {
                    default: true,
                    title: "純文字",
                    value: "text",
                  },
                  {
                    title: "HTML",
                    value: "html",
                  },
                  {
                    title: "圖片",
                    value: "image",
                  },
                ],
              },
              {
                cond: {
                  style: ["text", "html"],
                },
                name: "content",
                title: "內容",
                type: "text",
              },
              {
                name: "align",
                title: "對齊",
                type: "list",
                value: [
                  {
                    default: true,
                    title: "左",
                    value: "left",
                  },
                  {
                    title: "中",
                    value: "center",
                  },
                  {
                    title: "右",
                    value: "right",
                  },
                ],
              },
              {
                cond: {
                  style: "image",
                },
                name: "src",
                title: "資料來源",
                type: "href",
              },
            ],
          },
          Table: {
            attr: {
              desc: "表格",
            },
            options: [
              {
                name: "columns",
                title: "欄位定義",
                type: "table",
                value: [
                  {
                    name: "title",
                    title: "欄位標題",
                  },
                  {
                    name: "key",
                    title: "欄位鍵值",
                  },
                ],
              },
              {
                name: "title",
                title: "標題",
                type: "text",
              },
              {
                name: "src",
                title: "資料來源",
                type: "href",
              },
              {
                name: "page",
                title: "每頁顯示筆數",
                type: "number",
              },
            ],
          },
          TextArea: {
            attr: {
              desc: "多行文字輸入",
            },
            events: {
              change: {
                desc: "內容變更",
              },
            },
            options: [
              {
                name: "title",
                title: "標題",
                type: "text",
              },
              {
                name: "rows",
                title: "列數",
                type: "number",
              },
              {
                name: "cols",
                title: "行數",
                type: "number",
              },
              {
                name: "disabled",
                title: "禁用",
                type: "bool",
              },
              {
                name: "readonly",
                title: "唯讀",
                type: "bool",
              },
            ],
          },
        }
    },
    config: {
      id: "main",
      flex: 1,
      component: "Container",
      style: "normal",
      align: "flexcol", // block inline flexcol flexrow
      check: false,
      legend: "標題",
      elements: [
        {
          id: "header",
          class: ["navbar","navbar-light","bg-dark","text-white"],
          component: "Container",
          style: "normal",
          align: "inline", // block inline flexcol flexrow
          check: false,
          legend: "header",
          elements: [
            {
              component: "Static",
              style: "html",
              content: "<h1>NCDP Designer</h1>",
            },
          ],
        },
        {
          id: "body",
          component: "Container",
          class: ["mt-3"],
          style: "normal",
          align: "flexrow", // block inline flexcol flexrow
          check: false,
          legend: "body",
          elements: [
            {
              id: "menu",
              component: "Container",
              class: ["col-2"],
              style: "normal",
              align: "flexcol", // block inline flexcol flexrow
              check: false,
              legend: "menu",
              elements: [
                {
                  component: "Static",
                  style: "html",
                  content: "<h5>系統連結</h5>",
                },
                {
                  component: "Static",
                  style: "html",
                  content: "<a href='1.html'>系統1</a>",
                },
                {
                  component: "Static",
                  style: "html",
                  content: "<a href='1.html'>系統2</a>",
                },
                {
                  component: "Static",
                  style: "html",
                  content: "<a href='1.html'>系統3</a>",
                },
              ],
            },
            {
              id: "content",
              flex: 1,
              component: "Container",
              style: "normal",
              align: "flexcol", // block inline flexcol flexrow
              check: false,
              legend: "content",
              elements: [
                {
                  component: "Static",
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
