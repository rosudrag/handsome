import { dashboardWigetsReducer } from './dashboardWidgetsReducer';

const initialState = {
};

const mainReducer = (state = initialState, action) => {
	return {
        dashboardWidgets: dashboardWidgetsReducer(state.dashboardWidgets, action)
	};
};

export default mainReducer;
