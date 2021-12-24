import { useState } from 'react'

import { useStoreState, useStoreActions } from 'easy-peasy'

import Header from './Header'
import Modal from './Modal'
import LoginModal from './LoginModal'
import RegistrationModal from './RegistrationModal'

export default function Layout(props) {
  const showModal = useStoreState(state => state.modals.showModal)
  const showLoginModal = useStoreState(state => state.modals.showLoginModal)
  const showRegistrationModal = useStoreState(
    state => state.modals.showRegistrationModal
  )

  const setHideModal = useStoreActions(actions => actions.modals.setHideModal)
  const setShowRegistrationModal = useStoreActions(
    actions => actions.modals.setShowRegistrationModal
  )
  const setShowLoginModal = useStoreActions(
    actions => actions.modals.setShowLoginModal
  )

  return (
    <div>
      <Header />
      <main>{props.content}</main>
      {showModal && (
        <Modal close={() => setHideModal()}>
          {showLoginModal && (
            <LoginModal
              showSignup={() => {
                setShowRegistrationModal()
              }}
            />
          )}
          {showRegistrationModal && (
            <RegistrationModal
              showLogin={() => {
                setShowLoginModal()
              }}
            />
          )}
        </Modal>
      )}

      <style jsx="true">{`
        main {
          position: relative;
          max-width: 56em;
          background-color: white;
          padding: 2em;
          margin: 0 auto;
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
