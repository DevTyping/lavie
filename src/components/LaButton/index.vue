<template>
  <button class="inline-block btn btn-default pr-4 pl-4" :class="btnClassOpts">
    {{ label }}
  </button>
</template>

<script>
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
</script>

<style>
@import "../../css/lavie";

.btn-default {
  height: 48px;
}

.btn-field {
  height: 40px;
}

.btn-small {
  height: 32px;
}

.btn-primary {
  background: var(--interactive-01);
  color: var(--text-04);
  border: 1px solid var(--interactive-01);
}

.btn-primary:hover {
  background: var(--hover-primary);
  border: 1px solid var(--hover-primary);
}

.btn-secondary {
  background: var(--interactive-02);
  color: var(--text-04);
  border: 1px solid var(--interactive-02);
}

.btn-secondary:hover {
  background: var(--hover-secondary);
  border: 1px solid var(--hover-secondary);
}

.btn-tertiary {
  background: var(--inverse-01);
  color: var(--interactive-01);
  border: 1px solid var(--interactive-01);
}

.btn-tertiary:hover {
  background: var(--hover-tertiary);
  color: var(--text-04);
  border: 1px solid var(--hover-tertiary);
}

.btn-danger {
  background: var(--danger);
  color: var(--text-04);
  border: 1px solid var(--danger);
}

.btn-danger:hover {
  background: var(--hover-danger);
  border: 1px solid var(--hover-danger);
}
</style>
