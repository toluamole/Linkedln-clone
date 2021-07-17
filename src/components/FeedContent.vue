<template>
  <div class="feed_content bg-gray-50 flex justify-around">
    <section class="feed_content-left ">
      <div class="feed_content-left--identity-card border rounded-tl rounded-tr  text-center pb-10 w-60 bg-white">
        <img class="w-60 h-12 rounded-tl rounded-tr " src="@/assets/images/card-bg.svg" alt="" srcset="">
        <img class="w-20 h-20 relative z-10 -top-8 left-20 w-auto border-2 border-white rounded-full" :src="user.data.photoURL" alt="" srcset="">
        <div class="flex flex-col items-center">
          <h3 class="font-medium">{{user.data.displayName}}</h3>
          <p class="text-xs w-48 text-center">{{user.data.email}}</p>
        </div>
      </div>
      <div class="feed_content-left--identity-card border bg-white py-4 -mt-2 cursor-pointer">
        <div class="hover:bg-gray-100">
          <p class="text-xs font-medium ml-4">Connections</p>
          <h5 class="text-sm font-medium ml-4">Grow your network</h5>
        </div>
      </div>
      <div class="border bg-white py-4 -mt-2 hover:bg-gray-100 cursor-pointer">
        <p class="text-xs font-medium ml-4">Access Exclusive tools and insights</p>
        <h5 class="text-xs flex items-center font-medium ml-4 hover:text-blue-700">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" class="mercado-match" width="24" height="24" focusable="false">
            <path d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z" fill="#f8c77e"></path>
            <path d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z" fill="#e7a33e"></path>
          </svg>
          Try Premium Free for 1 month
        </h5>
      </div>
      <div class="border bg-white py-4 -mt-2 rounded-b-lg cursor-pointer hover:bg-gray-100">
        <h5 class="text-xs text-gray-900 flex items-center font-medium ml-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="#6B7280" width="16" height="16" focusable="false">
            <path d="M12 1H4a1 1 0 00-1 1v13.64l5-3.36 5 3.36V2a1 1 0 00-1-1z"></path>
          </svg>
          My items
        </h5>
      </div>
      <div class="flex flex-col items-left mt-6 pt-4 border rounded-tl rounded-tr pb-10 w-60 bg-white sticky top-0">
        <div class="recent ml-3">
          <span class="text-xs text-left">Recent</span>
          <ul class="flex flex-col justify-between mt-4">
            <li class="flex items-center text-xs text-gray-500 font-medium mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="#4B5563" class="mercado-match" width="16" height="16" focusable="false">
                <path d="M8.5 7h-1A1.5 1.5 0 006 8.5V14h4V8.5A1.5 1.5 0 008.5 7zM12.75 8h-.5A1.25 1.25 0 0011 9.25V14h3V9.25A1.25 1.25 0 0012.75 8z"></path>
                <circle cx="8" cy="4" r="2"></circle>
                <circle cx="12.5" cy="5.5" r="1.5"></circle>
                <path d="M3.75 8h-.5A1.25 1.25 0 002 9.25V14h3V9.25A1.25 1.25 0 003.75 8z"></path>
                <circle cx="3.5" cy="5.5" r="1.5"></circle>
              </svg>
              Front End Developer Group
            </li>
            <li class="flex items-center text-sm text-gray-500 font-medium mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="#4B5563" class="mercado-match" width="16" height="16" focusable="false">
                <path d="M8.5 7h-1A1.5 1.5 0 006 8.5V14h4V8.5A1.5 1.5 0 008.5 7zM12.75 8h-.5A1.25 1.25 0 0011 9.25V14h3V9.25A1.25 1.25 0 0012.75 8z"></path>
                <circle cx="8" cy="4" r="2"></circle>
                <circle cx="12.5" cy="5.5" r="1.5"></circle>
                <path d="M3.75 8h-.5A1.25 1.25 0 002 9.25V14h3V9.25A1.25 1.25 0 003.75 8z"></path>
                <circle cx="3.5" cy="5.5" r="1.5"></circle>
              </svg>
              Software & Technology
            </li>
            <li class="flex items-center text-sm text-gray-500 font-medium mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="#4B5563" class="mercado-match" width="16" height="16" focusable="false">
                <path d="M6.65 11h2l-.33 3h2l.33-3H14V9h-3.13l.26-2H14V5h-2.65l.33-3h-2l-.33 3h-2l.33-3h-2l-.33 3H2v2h3.13l-.26 2H2v2h2.65l-.33 3h2zm.48-4h2l-.26 2h-2z"></path>
              </svg>
              careers
              </li>
            <li class="flex items-center text-sm text-gray-500 font-medium mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="#4B5563" class="mercado-match" width="16" height="16" focusable="false">
                <path d="M6.65 11h2l-.33 3h2l.33-3H14V9h-3.13l.26-2H14V5h-2.65l.33-3h-2l-.33 3h-2l.33-3h-2l-.33 3H2v2h3.13l-.26 2H2v2h2.65l-.33 3h2zm.48-4h2l-.26 2h-2z"></path>
              </svg>
              management
              </li>
            <li class="flex items-center text-sm text-gray-500 font-medium mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="#4B5563" class="mercado-match" width="16" height="16" focusable="false">
                <path d="M6.65 11h2l-.33 3h2l.33-3H14V9h-3.13l.26-2H14V5h-2.65l.33-3h-2l-.33 3h-2l.33-3h-2l-.33 3H2v2h3.13l-.26 2H2v2h2.65l-.33 3h2zm.48-4h2l-.26 2h-2z"></path>
              </svg>
              motivation
            </li>
          </ul>
        </div>
        <div class="groups ml-3">
          <p class="text-xs text-left mt-4 text-blue-700 font-medium">Groups</p>
          <ul class="flex flex-col justify-between mt-2">
            <li class="flex items-center text-xs text-gray-500 font-medium mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="#4B5563" class="mercado-match" width="16" height="16" focusable="false">
                <path d="M8.5 7h-1A1.5 1.5 0 006 8.5V14h4V8.5A1.5 1.5 0 008.5 7zM12.75 8h-.5A1.25 1.25 0 0011 9.25V14h3V9.25A1.25 1.25 0 0012.75 8z"></path>
                <circle cx="8" cy="4" r="2"></circle>
                <circle cx="12.5" cy="5.5" r="1.5"></circle>
                <path d="M3.75 8h-.5A1.25 1.25 0 002 9.25V14h3V9.25A1.25 1.25 0 003.75 8z"></path>
                <circle cx="3.5" cy="5.5" r="1.5"></circle>
              </svg>
              Front End Developer Group
            </li>
            <li class="flex items-center text-sm text-gray-500 font-medium mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="#4B5563" class="mercado-match" width="16" height="16" focusable="false">
                <path d="M8.5 7h-1A1.5 1.5 0 006 8.5V14h4V8.5A1.5 1.5 0 008.5 7zM12.75 8h-.5A1.25 1.25 0 0011 9.25V14h3V9.25A1.25 1.25 0 0012.75 8z"></path>
                <circle cx="8" cy="4" r="2"></circle>
                <circle cx="12.5" cy="5.5" r="1.5"></circle>
                <path d="M3.75 8h-.5A1.25 1.25 0 002 9.25V14h3V9.25A1.25 1.25 0 003.75 8z"></path>
                <circle cx="3.5" cy="5.5" r="1.5"></circle>
              </svg>
              Software & Technology
            </li>
            <li class="flex items-center text-sm text-gray-500 font-medium mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="#4B5563" class="mercado-match" width="16" height="16" focusable="false">
                <path d="M8.5 7h-1A1.5 1.5 0 006 8.5V14h4V8.5A1.5 1.5 0 008.5 7zM12.75 8h-.5A1.25 1.25 0 0011 9.25V14h3V9.25A1.25 1.25 0 0012.75 8z"></path>
                <circle cx="8" cy="4" r="2"></circle>
                <circle cx="12.5" cy="5.5" r="1.5"></circle>
                <path d="M3.75 8h-.5A1.25 1.25 0 002 9.25V14h3V9.25A1.25 1.25 0 003.75 8z"></path>
                <circle cx="3.5" cy="5.5" r="1.5"></circle>
              </svg>
              Developers- Andriod, ios dev....
            </li>
            <li class="text-xs ml-4 text-gray-500 font-medium mb-2">See all</li>
          </ul>
        </div>
        <div class="events ml-3">
          <p class="text-xs text-left mt-4 text-blue-700 font-medium">Events</p>
          <p class="text-xs text-left mt-4 text-blue-700 font-medium">Followed Hastags</p>
          <ul class="flex flex-col justify-between mt-2">
            <li class="flex items-center text-xs text-gray-500 font-medium mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="#4B5563" class="mercado-match" width="16" height="16" focusable="false">
                <path d="M6.65 11h2l-.33 3h2l.33-3H14V9h-3.13l.26-2H14V5h-2.65l.33-3h-2l-.33 3h-2l.33-3h-2l-.33 3H2v2h3.13l-.26 2H2v2h2.65l-.33 3h2zm.48-4h2l-.26 2h-2z"></path>
              </svg>
              Career
            </li>
            <li class="flex items-center text-sm text-gray-500 font-medium mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="#4B5563" class="mercado-match" width="16" height="16" focusable="false">
                <path d="M6.65 11h2l-.33 3h2l.33-3H14V9h-3.13l.26-2H14V5h-2.65l.33-3h-2l-.33 3h-2l.33-3h-2l-.33 3H2v2h3.13l-.26 2H2v2h2.65l-.33 3h2zm.48-4h2l-.26 2h-2z"></path>
              </svg>
              management
            </li>
            <li class="flex items-center text-sm text-gray-500 font-medium mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="#4B5563" class="mercado-match" width="16" height="16" focusable="false">
                <path d="M6.65 11h2l-.33 3h2l.33-3H14V9h-3.13l.26-2H14V5h-2.65l.33-3h-2l-.33 3h-2l.33-3h-2l-.33 3H2v2h3.13l-.26 2H2v2h2.65l-.33 3h2zm.48-4h2l-.26 2h-2z"></path>
              </svg>
              motivation
            </li>
            <li class="flex items-center text-xs ml-4 text-gray-500 font-medium mb-2">Show more
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" preserveAspectRatio="xMinYMin meet" focusable="false" class="lazy-loaded">
                <path d="M8 9l5.93-4L15 6.54l-6.15 4.2a1.5 1.5 0 01-1.69 0L1 6.54 2.07 5z" fill="currentColor"></path>
              </svg>
            </li>
          </ul>
        </div>
      </div>
      <div class="border bg-white py-4 -mt-2 mb-10 rounded-b-lg cursor-pointer hover:bg-gray-100">
        <h5 class="text-sm text-center text-gray-400  font-medium">Discover more</h5>
      </div>
    </section>
     <!-- CENTER -->
    <section class="feed_content-center flex flex-col">
      <div class="feed_content-center--post flex flex-col border-2 border bg-white rounded-lg -ml-40 px-6 h-28 py-3">
        <div class="flex justify-between mb-2">
          <img class="w-12 h-12 mr-2 rounded-full" :src="user.data.photoURL" alt="" srcset="">
          <form @submit.prevent>
            <input @click="toggleInputModal()" class="feed_content-center--searchbar w-96 px-4 outline-none border border-gray-200 rounded-3xl h-12 bg-white-100 " type="text" placeholder="Start a post" v-model="post">
            <button type="submit" class="hidden">Send</button>
          </form>
          <!-- Modal Section -->
            <div class="modal">
              <div v-if="showInputModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                <div class="relative w-auto my-16 mx-auto max-w-xl">
                  <!--content-->
                  <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <!--header-->
                    <div class="flex items-start justify-between  border-b border-solid border-blueGray-200 rounded-t">
                      <h3 class="text-xl mt-3 ml-2 text-gray-700">
                        Create a post
                      </h3>
                      <button class=" border-0 text-black float-right text-3xl leading-none outline-none focus:outline-none" v-on:click="toggleInputModal()">
                        <span class="text-black h-12 w-6 text-3xl flex outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    <!--body-->
                    <div class="relative p-5 flex flex-col">
                      <div class="flex">
                        <img class="w-12 h-12 mr-2  rounded-full" :src="user.data.photoURL" alt="" srcset="">
                        <div class="feed_content-center--posts-info">
                          <h3 class="feed_content-center--posts-name text-md font-medium text-gray-900">{{user.data.displayName}}</h3>
                          <p class="feed_content-center--posts-description  text-xs">{{user.data.email}}</p>
                        </div>
                      </div>
                      <form @submit.prevent='submitPost'>
                        <input class="feed_content-center--text-area w-96 mb-36 px-4 outline-none h-12 bg-white-100 text-black-700 "
                        type="text" placeholder="What do you want to talk about ?" v-model="post">
                      </form>
                      <div v-if="imageData != null">
                          <img :src="picture" alt="preview" class="object-cover h-96 w-full">
                        </div>
                    </div>
                    <!--footer-->
                    <div class="flex items-center justify-between p-2 border-t border-solid border-blueGray-200 rounded-b">
                      <ul class="flex justify-between mt-2">
                        <li class="flex ml-4  cursor-pointer" v-on:click="toggleModal">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#4B5563" class="mercado-match" width="24" height="24" focusable="false">
                            <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
                          </svg>
                          <p  class="ml-2">Photo</p>
                        </li>
                        <li class="flex ml-4 cursor-pointer">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#4B5563" class="mercado-match" width="24" height="24" focusable="false">
                            <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
                          </svg>
                          <p  class="ml-2">Video</p>
                        </li>
                        <li class="flex ml-4 cursor-pointer">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#4B5563" class="mercado-match" width="24" height="24" focusable="false">
                            <path d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z"></path>
                          </svg>
                          <p  class="ml-2">Event</p>
                        </li>
                        <li class="flex ml-4 cursor-pointer">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#4B5563" class="mercado-match" width="24" height="24" focusable="false">
                            <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
                          </svg>
                          <p class="ml-2">Write Article</p>
                        </li>
                      </ul>
                      <button class="text-white bg-blue-700 border rounded-3xl border-solid border-blue-700 hover:border-blue-700
                        hover:bg-blue-900  active:bg-blue-600
                        lowercase text-lg font-medium px-4 py-0.5 outline-none focus:outline-none mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button" v-on:click="toggleInputModal()">
                        Post
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="showInputModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </div>
        </div>
        <div>
          <ul class="flex justify-between mt-2">
            <li class="flex  cursor-pointer" v-on:click="toggleModal()">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#70b5f9" class="mercado-match" width="24" height="24" focusable="false">
                <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
              </svg>
              <p  class="ml-2">Photo</p>
            </li>
            <li class="flex cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#7fc15e" class="mercado-match" width="24" height="24" focusable="false">
                <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
              </svg>
              <p  class="ml-2">Video</p>
            </li>
            <li class="flex cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#e7a33e" class="mercado-match" width="24" height="24" focusable="false">
                <path d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z"></path>
              </svg>
              <p  class="ml-2">Event</p>
            </li>
            <li class="flex cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#f5987e" class="mercado-match" width="24" height="24" focusable="false">
                <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
              </svg>
              <p class="ml-2">Write Article</p>
            </li>
            <!-- Modal Section -->
            <div class="modal">
              <!-- <button class="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" >
                Open regular modal
              </button> -->
              <div v-if="showModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                <div class="relative w-auto my-16 mx-auto max-w-lg">
                  <!--content-->
                  <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <!--header-->
                    <div class="flex items-start justify-between p-3 border-b border-solid border-blueGray-200 rounded-t">
                      <h3 class="text-xl text-gray-700">
                        Edit your photo
                      </h3>
                      <button class="p-1 border-0 text-black float-right text-3xl leading-none outline-none focus:outline-none" v-on:click="toggleModal()">
                        <span class="text-black h-12 w-6 text-3xl flex outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    <!--body-->
                    <div class="relative p-10 flex-auto">
                      <div class="flex flex-col items-center justify-center">
                        <!-- <div v-if="imageData != null">
                          <img :src="picture" alt="preview" class="object-cover h-96 w-full">
                        </div> -->
                        <input type="file" accept="image/*" ref="fileInput" class="invisible" @change="previewImage">
                        <!-- <input type="file" accept="image/*" src="" alt="" placeholder="input"> -->
                        <button @click="chooseFile" class="items-center border-0 px-2.5 py-1  text-base text-center text-blue-700 rounded font-medium hover:bg-blue-100 hover:rounded  cursor-pointer" for="image-upload">Select images to share</button>
                        <label for="image-upload"></label>
                      </div>
                    </div>
                    <!--footer-->
                    <div class="flex items-center justify-end p-2 border-t border-solid border-blueGray-200 rounded-b">
                      <button class="text-blue-700 bg-transparent border rounded-3xl border-solid border-blue-700 hover:border-blue-700
                      hover:bg-blue-100 hover:text-blue active:bg-blue-600
                      lowercase text-lg font-medium px-4 py-0.5 outline-none focus:outline-none mr-2 mb-1 ease-linear transition-all duration-150"
                      type="button" v-on:click="toggleModal()">
                        cancel
                      </button>
                      <button  class="text-gray-400  rounded-3xl bg-gray-200 font-medium cursor-not-allowed
                        px-5 py-2 text-sm outline-none focus:outline-none mr-2 mb-1 ease-linear transition-all duration-150"
                       type="button" v-on:click="toggleModal()">
                        Done
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </div>
          </ul>
        </div>
      </div>
      <!-- <div class="feed_content-center--posts flex -ml-40 border border-2 rounded-2xl bg-white mt-10 px-2 py-4 "> -->
        <li class="feed_content-center--posts flex -ml-40 border border-2 rounded-2xl bg-white mt-10 px-2 py-4 "
          v-for="(item, index) in posts" :key="index">
          <img class="w-12 h-12 mr-2 rounded-full" :src="item.photoURL" alt="" srcset="">
          <div class="feed_content-center--posts-info">
            <h3 class="feed_content-center--posts-name text-md font-medium text-gray-700">{{item.displayName}}</h3>
            <p class="feed_content-center--posts-description  text-xs">{{item.email}}</p>
            <p class="feed_content-center--posts-message font-normal text-black-50 mt-2 pl-0 text-justify items-start w-96 h-auto flex-wrap">{{item.posts}} </p>
            <!-- <div class="feed_content-center--posts-image" v-if="picture != null">
              <img :src="picture" alt="preview" srcset="" style="max-width: 150px; max-height:150px;">
            </div> -->
          </div>
        </li>
      <!-- </div> -->
    </section>
    <!-- FEED RIGHT-BAR -->
    <section class="feed_content-right flex flex-col border border-2 w-80 h-60 px-5 py-2 -ml-44 mt-2 bg-white rounded-xl">
      <h3 class="mb-4 text-md text-gray-700 font-medium">Today's top courses</h3>
      <ul>
        <li class="mb-2">
          <h5 class="text-sm text-gray-600 font-medium">1. Spotting Misinformation online</h5>
          <p class="text-xs text-gray-400 ml-4">Andrew Seaman</p>
        </li>
        <li class="mb-2">
          <h5 class="text-sm text-gray-600 font-medium">2. Scrum: The basics</h5>
          <p class="text-xs text-gray-400 ml-4">Kelly O'Connell</p>
        </li>
        <li class="mb-2">
          <h5 class="text-sm text-gray-600 font-medium">3. Critical Thinking</h5>
          <p class="text-xs text-gray-400 ml-4">Mike Figliuolo</p>
        </li>
      </ul>
      <span class="mt-4 text-sm font-medium text-gray-500 ml-4">Show More on Linkedln Learning</span>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import firebase from 'firebase'
import 'firebase/storage'
// import router from '@/router/index'
import db from '@/main'
export default {
  name: 'regular-modal',
  data () {
    return {
      post: '',
      posts: [],
      showModal: false,
      showInputModal: false,
      picture: '',
      imageData: null
      // uploadValue: null
      // userPost: []
    }
  },
  computed: {
    ...mapGetters([
      'user'
    ])
  },
  methods: {
    chooseFile () {
      this.$refs.fileInput.click()
    },
    toggleModal () {
      this.showModal = !this.showModal
    },
    toggleInputModal () {
      this.showInputModal = !this.showInputModal
    },
    submitPost () {
      if (this.user.data.uid) {
        db.collection('posts')
          .add({
            displayName: this.user.data.displayName,
            email: this.user.data.email,
            photoURL: this.user.data.photoURL,
            posts: this.post,
            photo: this.picture,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
          })
        this.post = ''
      }
    },
    previewImage (event) {
      this.uploadValue = 0
      this.picture = null
      this.imageData = event.target.files[0]
      this.onUpload()
    },
    onUpload () {
      this.picutre = null
      // Upload the the file to firestore storage
      const storageRef = firebase.storage().ref(`${this.imageData.name}`).put(this.imageData)
      storageRef.on('state_changed', snapshot => {
        this.uploadValue = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      }, error => { console.log(error.message) },
      () => {
        this.uploadValue = 100
        // get the image url from firebase firestore
        storageRef.snapshot.ref.getDownloadURL().then((url) => {
          this.picture = url
          console.log(this.picture)
        })
      }
      )
    }
  },
  created () {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        const userPost = []
        snapshot.forEach(doc => {
          userPost.push(doc.data())
          this.posts = userPost
        })
      })
  }
}
</script>
