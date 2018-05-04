<template>
<div class="a">
    <slot></slot>    
</div>
</template>
<style>
.a{
    background-color: white;
    box-shadow: 0 0 24px rgba(0, 0, 0, 0.3);
    padding: 3rem;
    width: 420px;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 15px;
}
</style>
