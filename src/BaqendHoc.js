import React, { Component } from 'react'
import PropTypes from 'prop-types'

const baqendHoc = (ComponentToWrap) => {
  return class BaqendComponent extends Component {
    static get contextTypes() {
      return {
        db: PropTypes.object.isRequired
      }
    }

    constructor() {
      super()
      this.state = {
        isReady: false,
        db: null
      }
    }

    componentWillMount() {
      const { db } = this.context
      db.then((db) => {
        this.setState({
          isReady: true,
          db: db
        })
      })
    }

    render() {
      const component = this.state.isReady ? <ComponentToWrap { ...this.props } db={this.state.db} /> : null
      return (
        component
      )
    }
  }

}
export default baqendHoc
