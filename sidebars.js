/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: "doc",
      id: "index",
      label: "技术文档"
    },
    {
      type: 'category',
      label: 'CICD',
      link: {
        type: 'doc',
        id: 'CICD/index',
      },
      items: [
        'CICD/Docker笔记',
        'CICD/DevOps学习笔记',
        'CICD/jenkins-install',
        'CICD/声明式pipeline语法',
        {
          type: 'doc',
          id:  'CICD/share-library',
          label: 'jenkins共享库'
        },
        'CICD/jenkins-api',
        'CICD/jenkins源码学习',
        'CICD/Kubernetes',
      ],
    },
    {
      type: 'category',
      label: 'python',
      items: [
        "python/正则表达式",
      ],
    },
    {
      type: 'category',
      label: 'Django',
      items: [
        "Django/DjangoAdmin使用",
        "Django/DjangoRESTFramework总结",
        "Django/Django基础学习笔记",
        "Django/django目录结构建议",
        "Django/Django集成任务队列Celery",
      ],
    },
    {
      type: 'category',
      label: '部署学习',
      items: [
        "部署学习/nginx",
      ]
    },
    {
      type: 'category',
      label: '线上问题',
      items: [
        "线上问题/慢查询导致服务无法响应",
      ]
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
