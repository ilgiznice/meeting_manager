import { CALENDAR, EDITOR } from './constants'

export const calendar = {
  selectDate: ({ date }) => ({ type: CALENDAR.SELECT_DATE, date }),
  changeMonth: ({ monthIncrement }) => ({ type: CALENDAR.CHANGE_MONTH, monthIncrement }),
}

export const editor = {
  toggle: () => ({ type: EDITOR.TOGGLE }),
  fields: {
    participant: ({ participant }) => ({ type: EDITOR.FIELDS.PARTICIPANT, participant }),
    description: ({ description }) => ({ type: EDITOR.FIELDS.DESCRIPTION, description }),
  },
  save: ({ id, date }) => ({ type: EDITOR.SAVE, id, date }),
  edit: ({ id }) => ({ type: EDITOR.EDIT, id }),
  remove: ({ id }) => ({ type: EDITOR.REMOVE, id }),
}
