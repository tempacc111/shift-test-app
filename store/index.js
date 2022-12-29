export const state = () => ({
  counter: 0,
  vacancies: [
    {
      id: 1,
      title: 'Vacancy 1',
      description: 'Descr 1',
      dates: [
        {
          shiftdate: '11-11-2020',
          starttime: 1,
          endtime: 2,
          price: 30,
          type: SHIFT_TYPES.AMBULANCE,
        },
        {
          shiftdate: '12-11-2020',
          starttime: 1,
          endtime: 2,
          price: 50,
          type: SHIFT_TYPES.CONSULTATION,
        },
      ],
    },
    {
      id: 2,
      title: 'Another vac',
      description: 'Descr 2',
      dates: [
        {
          shiftdate: '11-11-2020',
          starttime: 1,
          endtime: 2,
          price: 30,
          type: SHIFT_TYPES.AMBULANCE,
        },
        {
          shiftdate: '13-11-2020',
          starttime: 1,
          endtime: 2,
          price: 50,
          type: SHIFT_TYPES.CONSULTATION,
        },
      ],
    },
  ],
})

export const getters = {
  getVacancies(state) {
    return state.vacancies
  },
}

export const mutations = {
  ADD_VACANCY(state, payload) {
    state.vacancies.push(payload)
  },
  EDIT_VACANCY(state, payload) {
    state.vacancies = [
      ...state.vacancies.filter((element) => element.id !== payload.id),
      payload,
    ]
  },
}

export const SHIFT_TYPES = {
  CONSULTATION: 'Consultation',
  TELEPHONE: 'Telephone',
  AMBULANCE: 'Ambulance',
}
