import firebase from 'firebase'
import router from '@/router/index'
import db from '@/main'
const state = {
  user: {
    loggedIn: false,
    data: null
  }
}
const getters = {
  user (state) {
    return state.user
  }
}
const actions = {
  fetchUser ({ commit }, user) {
    commit('SET_LOGGED_IN', user !== null)
    if (user) {
      commit('SET_USER', {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid
      }
      )
    } else {
      commit('SET_USER', null)
    }
  },
  register ({ commit }, form) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then(() => {
        alert('Successfully registered! Please login.')
        router.push({ name: 'Login' })
      })
      .catch(error => {
        alert(error.message)
      })
  },
  signInWithGoogle () {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        // The signed-in user info.
        return db
          .collection('users')
          .doc(result.user.uid)
          .set({
            name: result.user.displayName,
            displayName: result.user.displayName,
            email: result.user.email,
            photoURL: result.user.photoURL,
            uid: result.user.uid
          })
          .then(() => {
            // alert('Successfully Signed in!.')
            router.push({ name: 'Feed' })
          })
      })
      .catch(error => {
        alert(error.message)
      })
  }
}
const mutations = {
  SET_LOGGED_IN (state, value) {
    state.user.loggedIn = value
  },
  SET_USER (state, data) {
    state.user.data = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
