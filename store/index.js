export const state = () => ({
  counter: 0,
  vacancies: [
    {
      title: 'Vacancy 1',
      description: 'Descr 1',
      dates: [
        { starttime: 1, endtime: 2, price: 30, type: SHIFT_TYPES.AMBULANCE },
        { starttime: 1, endtime: 2, price: 50, type: SHIFT_TYPES.CONSULTATION },
      ],
    },
    {
      title: 'Another vac',
      description: 'Descr 2',
      dates: [
        { starttime: 1, endtime: 2, price: 30, type: SHIFT_TYPES.AMBULANCE },
        { starttime: 1, endtime: 2, price: 50, type: SHIFT_TYPES.CONSULTATION },
      ],
    },
  ],
})

export const getters = {
  getCounter(state) {
    return state.counter
  },
}

export const mutations = {
  increment(state) {
    state.counter++
  },
}

export const actions = {
  async fetchCounter({ state }) {
    // make request
    const res = { data: 10 }
    state.counter = res.data
    return res.data
  },
}

export const SHIFT_TYPES = {
  CONSULTATION: 'Consultation',
  TELEPHONE: 'Telephone',
  AMBULANCE: 'Ambulance',
}
