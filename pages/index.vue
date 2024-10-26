<script setup lang="ts"></script>

<template>
  <div>
    <!--    <Navbar />-->

    <main>
      <div
        class="relative pt-16 pb-32 flex content-center items-center justify-center"
        style="min-height: 75vh"
      >
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style="
            background-image: url(&quot;https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1267&amp;q=80&quot;);
          "
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div class="pr-12">
                <h1 class="text-white font-semibold text-5xl">Alain Marquez</h1>
                <p class="mt-4 text-lg text-gray-300">
                  Front-end software engineer
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style="height: 70px"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
      <section class="pb-20 bg-gray-300 -mt-24">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap">
            <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400"
                  >
                    <MdiIcon icon="mdiFaceAgent" />
                  </div>
                  <h6 class="text-xl font-semibold">Awarded Agency</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    Divide details about your product or agency work into parts.
                    A paragraph describing a feature will be enough.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400"
                  >
                    <MdiIcon icon="mdiFileFind" />
                  </div>
                  <h6 class="text-xl font-semibold">Free Revisions</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    Keep you user engaged by providing meaningful information.
                    Remember that by this time, the user is curious.
                  </p>
                </div>
              </div>
            </div>
            <div class="pt-6 w-full md:w-4/12 px-4 text-center">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400"
                  >
                    <MdiIcon icon="mdiDomain" />
                  </div>
                  <h6 class="text-xl font-semibold">Verified Company</h6>
                  <p class="mt-2 mb-4 text-gray-600">
                    Write a few lines about each one. A paragraph describing a
                    feature will be enough. Keep you user engaged!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap items-center">
            <div class="w-10/12 md:w-7/12 lg:6/12 mx-auto relative py-20">
              <h1 class="text-3xl text-center font-bold">Experience</h1>
              <div class="border-l-2 mt-10">
                <!-- Card 1 -->
                <div
                  class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0"
                >
                  <!-- Dot Follwing the Left Vertical Line -->
                  <div
                    class="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"
                  ></div>

                  <!-- Line that connecting the box with the vertical line -->
                  <div class="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

                  <!-- Content that showing in the box -->
                  <div class="flex-auto">
                    <h1 class="text-lg">Day 1</h1>
                    <h1 class="text-xl font-bold">
                      Orientation and Briefing on Uniliver basics
                    </h1>
                    <h3>Classroom</h3>
                  </div>
                  <a href="#" class="text-center text-white hover:text-gray-300"
                    >Download materials</a
                  >
                </div>

                <!-- Card 2 -->
                <div
                  class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-pink-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0"
                >
                  <!-- Dot Follwing the Left Vertical Line -->
                  <div
                    class="w-5 h-5 bg-pink-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"
                  ></div>

                  <!-- Line that connecting the box with the vertical line -->
                  <div class="w-10 h-1 bg-pink-300 absolute -left-10 z-0"></div>

                  <!-- Content that showing in the box -->
                  <div class="flex-auto">
                    <h1 class="text-lg">Day 1</h1>
                    <h1 class="text-xl font-bold">
                      Orientation and Briefing on Uniliver basics
                    </h1>
                    <h3>Classroom</h3>
                  </div>
                  <a href="#" class="text-center text-white hover:text-gray-300"
                    >Download materials</a
                  >
                </div>

                <!-- Card 3 -->
                <div
                  class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-green-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0"
                >
                  <!-- Dot Follwing the Left Vertical Line -->
                  <div
                    class="w-5 h-5 bg-green-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"
                  ></div>

                  <!-- Line that connecting the box with the vertical line -->
                  <div
                    class="w-10 h-1 bg-green-300 absolute -left-10 z-0"
                  ></div>

                  <!-- Content that showing in the box -->
                  <div class="flex-auto">
                    <h1 class="text-lg">Day 1</h1>
                    <h1 class="text-xl font-bold">
                      Orientation and Briefing on Uniliver basics
                    </h1>
                    <h3>Classroom</h3>
                  </div>
                  <a href="#" class="text-center text-white hover:text-gray-300"
                    >Download materials</a
                  >
                </div>

                <!-- Card 4 -->
                <div
                  class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-purple-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0"
                >
                  <!-- Dot Follwing the Left Vertical Line -->
                  <div
                    class="w-5 h-5 bg-purple-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"
                  ></div>

                  <!-- Line that connecting the box with the vertical line -->
                  <div
                    class="w-10 h-1 bg-purple-300 absolute -left-10 z-0"
                  ></div>

                  <!-- Content that showing in the box -->
                  <div class="flex-auto">
                    <h1 class="text-lg">Day 1</h1>
                    <h1 class="text-xl font-bold">
                      Orientation and Briefing on Uniliver basics
                    </h1>
                    <h3>Classroom</h3>
                  </div>
                  <a href="#" class="text-center text-white hover:text-gray-300"
                    >Download materials</a
                  >
                </div>

                <!-- Card 5 -->
                <div
                  class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-yellow-600 text-white rounded mb-10 flex-col md:flex-row"
                >
                  <!-- Dot Follwing the Left Vertical Line -->
                  <div
                    class="w-5 h-5 bg-yellow-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 -mt-2 md:mt-0"
                  ></div>

                  <!-- Line that connecting the box with the vertical line -->
                  <div
                    class="w-10 h-1 bg-yellow-300 absolute -left-10 z-0"
                  ></div>

                  <!-- Content that showing in the box -->
                  <div class="flex-auto">
                    <h1 class="text-lg">Day 1</h1>
                    <h1 class="text-xl font-bold">
                      Orientation and Briefing on Uniliver basics
                    </h1>
                    <h3>Classroom</h3>
                  </div>
                  <a href="#" class="text-center text-white hover:text-gray-300"
                    >Download materials</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <!--    <Footer />-->
  </div>
</template>

<style lang="postcss" scoped>
.badge {
  @apply inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700;
  &:hover {
    @apply bg-gray-300;
  }
}
</style>
