<template>
  <div id="app">
    <LaButton :label="'Primary'" kind="primary"/> |
    <LaButton :label="'Primary field'" kind="primary" size="field"/>  |
    <LaButton :label="'Primary small'" kind="primary" size="small"/>
    <br/><br/>
    <LaButton :label="'Secondary'" kind="secondary"/> |
    <LaButton :label="'Secondary field'" kind="secondary" size="field"/> |
    <LaButton :label="'Secondary small'" kind="secondary" size="small"/>
    <br/><br/>
    <LaButton :label="'Tertiary'" kind="tertiary"/> |
    <LaButton :label="'Tertiary field'" kind="tertiary" size="field"/> |
    <LaButton :label="'Tertiary small'" kind="tertiary" size="small"/>
  </div>
</template>

<script>
import LaButton from './components/LaButton'
export default {
  components: {
    LaButton
  }
}
</script>
