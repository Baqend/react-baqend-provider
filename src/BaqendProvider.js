import { Component, Children } from 'react'
import PropTypes from 'prop-types'

class BaqendProvider extends Component {
  getChildContext() {
   const { db } = this.props
   return { db }
  }

  render() {
    return Children.only(this.props.children)
  }
}

BaqendProvider.propTypes = {
  db: PropTypes.object.isRequired,
}

BaqendProvider.childContextTypes = {
  db: PropTypes.object.isRequired,
}

export default BaqendProvider
