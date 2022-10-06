<template>
  <div class="projectContainer" @click="onClick(id)">
    <div class="projectMainInfo">
      <img v-bind:src=logo class="projectLogo" alt="">
      <p class="projectName">{{ name }}</p>
    </div>
    <p class="projectStatus">{{ isActive ? "Active" : "No Active"}}</p>
    <div class="projectActivity">
      <div class="activityPeriod">
        <p>time this week</p>
        <p>this month</p>
        <p>total</p>
      </div>
      <div class="activityTime">
        <p>00:00:00</p>
        <p>00:00:00</p>
        <p>00:00:00</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Project',
  props:{
    id: Number,
    name: String,
    logo: String,
    isActive: Number,
    onClick: Function
  }
}
</script>
<style>
.projectContainer{
  border-radius: 10px;
  width: 100%;
  padding: 20px;
  background: #fff;
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  justify-content: space-between;
}
.projectMainInfo{
  display: flex;
  align-items: center;
}
.projectName{
  font-size: 30px;
  font-weight: 700;
  margin: 0 0 0 40px;
}
.projectLogo{
  width: 70px;
  height: 70px;
}
.projectStatus{
  margin: 0;
  color: #1f8420;
  font-size: 27px;
}
.projectActivity{
  display: flex;
  align-items: center;
}
.activityTime{
  margin-left: 30px;
  font-weight: 700;
}
</style>
