<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div
          class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
        >
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Taskname
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Kunde
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Von
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Bis
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Dauer
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">X</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                  <input
                    type="text"
                    placeholder="Taskname"
                    class=" focus:ring-indigo-500 px-1 py-1 focus:border-indigo-500 block w-full sm:text-sm border-gray-100 border-1 border-solid rounded-md"
                  />
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <input
                    type="text"
                    placeholder="Kunde"
                    class=" focus:ring-indigo-500 px-1 py-1 focus:border-indigo-500 block w-full sm:text-sm border-gray-100 border-1 border-solid rounded-md"
                  />
                </td>

                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <input
                    type="text"
                    placeholder="Von"
                    class=" focus:ring-indigo-500 px-1 py-1 focus:border-indigo-500 block w-full sm:text-sm border-gray-100 border-1 border-solid rounded-md"
                  />
                </td>

                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <input
                    type="text"
                    placeholder="Bis"
                    class=" focus:ring-indigo-500 px-1 py-1 focus:border-indigo-500 block w-full sm:text-sm border-gray-100 border-1 border-solid rounded-md"
                  />
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <input
                    type="text"
                    placeholder="Kunde"
                    class=" focus:ring-indigo-500 px-1 py-1 focus:border-indigo-500 block w-full sm:text-sm border-gray-100 border-1 border-solid rounded-md"
                  />
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                >
                  <a
                    href="#"
                    class="text-red-600 hover:text-red-900"
                    v-on:click="addTimeEntry()"
                    >Delete</a
                  >
                </td>
              </tr>

              <!-- More items... -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TimeEntryList",
  props: {
    entries: [],
  },
  methods: {
    addTimeEntry() {
      const timeEntry = { name: "Test", kunde: "Test", von: "10", bis: "11" };
      this.$store.dispatch("addTimeEntry", timeEntry);
      console.log(this.$store.state);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
