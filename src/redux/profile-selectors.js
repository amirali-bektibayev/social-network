import {createSelector} from "reselect";

const getProfilePhoto = (state) => {
    return state.profile.profile
}

export const getProfileSelector = createSelector(getProfilePhoto,
    (users) => {
    return users.filter(u => true);
})

