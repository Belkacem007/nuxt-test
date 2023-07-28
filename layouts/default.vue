<template>
    <section class="container">
        <div class="dashboard-container">
            <div class="sidebar">
                <c-sidebar />
            </div>

            <div class="dashboard-main">
                <div class="element-panel">
                    <slot />
                </div>
            </div>


        </div>
    </section>
</template>