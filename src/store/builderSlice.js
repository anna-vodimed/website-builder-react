import { createSlice } from '@reduxjs/toolkit'

export const builderSlice = createSlice({
	name: 'builder',
	initialState: {
		current: {},
		history: []
	},
	reducers: {
		saveBlockState: (state, action) => {
			const currentBlock = state.current.blocks.find(e => e.id === action.id)
            currentBlock.attributes = action.attributes.slice()
		},
		deleteBlock: (state, id) => {
		    state.current.blocks = state.current.blocks.filter(e => e.id !== id).slice()
		},
		saveProject: (state) => {
		    // удаляем из истории старую версию расчёта и сохраняем новую
		    state.history = state.history.filter(e => e.id !== state.current.id)

		    const copy = Object.assign({}, state.current)
		    copy.saveTime = Date.now()

		    state.history.push(copy)

		    // Toast.open({
		    //   message: 'Проект успешно сохранён в историю',
		    //   position: 'is-bottom',
		    //   type: 'is-success',
		    //   duration: 3000
		    // })
        },
		createNewSite: (state, siteName) => {
		    const id = Math.random().toString(36).substring(7)
		    const template = {
		      id,
		      siteName,
		      saveTime: null,
		      options: {
		        grid: false,
		        width: 960,
		        height: 960
		      },
		      blocks: []
		    }

		    state.current = Object.assign({}, template)
		},
		openHistoryProject: (state, id) => {
		    const findInHistory = state.history.find(e => e.id === id)
		    state.current = Object.assign({}, findInHistory)
		},
		deleteHistoryProject: (state, id) => {
		    state.history = state.history.filter(e => e.id !== id).slice()
		}

	}
})


export const { saveBlockState, createNewSite } = builderSlice.actions
export default builderSlice.reducer