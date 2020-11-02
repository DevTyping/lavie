export default {
  name: 'LaButton',
  props: {
    label: {
      type: String,
      default: 'Button'
    },
    kind: {
      type: String,
      default: 'primary',
      validator: val => ['primary', 'secondary', 'tertiary', 'ghost', 'danger', 'danger-primary'].includes(val)
    },
    size: { type: String, default: undefined, validator: val => ['', 'field', 'small'].includes(val) },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    btnClassOpts () {
      let classes = []
      if (this.primary === true) {
        classes.push('btn-primary')
      }

      if (this.kind) {
        classes.push(`btn-${this.kind.toLowerCase()}`)
      }

      if (this.size === 'small' || (this.size === undefined && this.small)) {
        classes.push('btn-small')
      }
      if (this.size === 'field') {
        classes.push('btn-field')
      }

      if (this.disabled) {
        classes.push('btn-disabled')
      }
      return classes.join(' ')
    }
  }
}
