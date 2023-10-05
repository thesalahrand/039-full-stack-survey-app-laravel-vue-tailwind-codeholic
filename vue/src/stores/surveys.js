import { ref } from 'vue'
import { defineStore } from 'pinia'
// import axiosClient from '../axios'

export const useSurveysStore = defineStore('surveys', () => {
  const surveys = ref([
    {
      id: 100,
      title: 'simply dummy text of the printing',
      slug: 'simply-dummy-text-of-the-printing',
      status: 'draft',
      image:
        'https://lh5.googleusercontent.com/p/AF1QipOf_7_j5ZsueH6hgCTIaFbEi1mgzQTs7XSfRMTQ=w408-h306-k-no',
      description:
        "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      created_at: '2023-10-02 06:00:00',
      updated_at: '2023-10-02 06:00:00',
      expire_date: '2023-10-31 06:00:00'
    },
    {
      id: 101,
      title: 'make a type specimen book',
      slug: 'make-a-type-specimen-book',
      status: 'draft',
      image:
        'https://lh5.googleusercontent.com/p/AF1QipOf_7_j5ZsueH6hgCTIaFbEi1mgzQTs7XSfRMTQ=w408-h306-k-no',
      description:
        "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      created_at: '2023-10-02 06:00:00',
      updated_at: '2023-10-02 06:00:00',
      expire_date: '2023-10-31 06:00:00'
    },
    {
      id: 102,
      title: 'Letraset sheets containing Lorem',
      slug: 'Letraset-sheets-containing-Lorem',
      status: 'draft',
      image:
        'https://lh5.googleusercontent.com/p/AF1QipOf_7_j5ZsueH6hgCTIaFbEi1mgzQTs7XSfRMTQ=w408-h306-k-no',
      description:
        "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      created_at: '2023-10-02 06:00:00',
      updated_at: '2023-10-02 06:00:00',
      expire_date: '2023-10-31 06:00:00'
    },
    {
      id: 103,
      title: 'web page editors now',
      slug: 'web-page-editors-now',
      status: 'draft',
      image:
        'https://lh5.googleusercontent.com/p/AF1QipOf_7_j5ZsueH6hgCTIaFbEi1mgzQTs7XSfRMTQ=w408-h306-k-no',
      description:
        "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      created_at: '2023-10-02 06:00:00',
      updated_at: '2023-10-02 06:00:00',
      expire_date: '2023-10-31 06:00:00'
    },
    {
      id: 104,
      title: ' many variations of passages',
      slug: ' many-variations-of-passages',
      status: 'draft',
      image:
        'https://lh5.googleusercontent.com/p/AF1QipOf_7_j5ZsueH6hgCTIaFbEi1mgzQTs7XSfRMTQ=w408-h306-k-no',
      description:
        "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      created_at: '2023-10-02 06:00:00',
      updated_at: '2023-10-02 06:00:00',
      expire_date: '2023-10-31 06:00:00'
    }
  ])

  return { surveys }
})
