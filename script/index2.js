// document.addEventListener('DOMContentLoaded', () => {
//     const signInBtn = document.getElementById('signInBtn');
//     const loginSection = document.getElementById('loginSection');
//     const dashboardSection = document.getElementById('dashboardSection');
//     const issuesContainer = document.getElementById('issuesContainer');
//     const searchInput = document.getElementById('searchInput');
//     const searchBtn = document.getElementById('searchBtn');

//     let allIssues = [];

//     // 1. LOGIN LOGIC
//     signInBtn.addEventListener('click', () => {
//         const u = document.getElementById('username').value;
//         const p = document.getElementById('password').value;
//         if (u === ' ' && p === ' ') {
//             loginSection.classList.add('hidden');
//             dashboardSection.classList.remove('hidden');
//             fetchIssues(); // Load API data after login
//         } else {
//             const msg = document.getElementById('loginMessage');
//             msg.textContent = "Invalid Credentials!";
//             msg.classList.remove('hidden');
//         }
//     });

//     // 2. FETCH DATA FROM API
//     async function fetchIssues(query = '') {
//         const url = query 
//             ? `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${query}`
//             : `https://phi-lab-server.vercel.app/api/v1/lab/issues`;

//         try {
//             const res = await fetch(url);
//             const data = await res.json();
//             allIssues = data.data || data; 
//             renderCards(allIssues);
//             updateFilterCounts();
//         } catch (err) {
//             console.error("Error:", err);
//             document.getElementById('issueHeadline').innerText = "Failed to load data.";
//         }
//     }

//     // 3. RENDER CARDS
//     function renderCards(issues) {
//         issuesContainer.innerHTML = '';
//         document.getElementById('issueHeadline').innerText = `${issues.length} Issues Found`;

//         issues.forEach(issue => {
//             const isOpen = issue.status.toLowerCase() === 'open';
//             const borderCol = isOpen ? 'bg-success' : 'bg-purple-600';
//             const icon = isOpen ? './assets/Open-Status.png' : './assets/Closed-Status.png';

//             const card = document.createElement('div');
//             card.className = "card bg-base-100 border border-base-200 shadow-sm rounded-lg overflow-hidden cursor-pointer hover:shadow-md";
//             card.onclick = () => showDetail(issue.id);
            
//             card.innerHTML = `
//                 <div class="h-1 ${borderCol} w-full"></div>
//                 <div class="card-body p-5 gap-2">
//                     <div class="flex justify-between">
//                         <img src="${icon}" class="w-5 h-5">
//                         <span class="badge badge-sm font-bold uppercase ${issue.priority === 'high' ? 'badge-error' : 'badge-ghost'}">${issue.priority}</span>
//                     </div>
//                     <h2 class="font-bold text-gray-800 line-clamp-1">${issue.title}</h2>
//                     <p class="text-xs text-gray-500 line-clamp-2">${issue.description}</p>
//                     <div class="mt-2 text-[10px] text-gray-400">#${issue.id} by ${issue.author}</div>
//                 </div>
//             `;
//             issuesContainer.appendChild(card);
//         });
//     }

//     // 4. MODAL DETAIL
//     async function showDetail(id) {
//         const modal = document.getElementById('issueDetailModal');
//         const modalBody = document.getElementById('modalBody');
//         modal.showModal();
//         modalBody.innerHTML = `<span class="loading loading-spinner loading-lg"></span>`;

//         try {
//             const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`);
//             const result = await res.json();
//             const item = result.data;

//             modalBody.innerHTML = `
//                 <h3 class="font-bold text-2xl">${item.title}</h3>
//                 <div class="badge ${item.status === 'open' ? 'badge-success' : 'badge-secondary'} my-2">${item.status}</div>
//                 <p class="py-4 text-gray-600">${item.description}</p>
//                 <div class="divider"></div>
//                 <p class="text-sm"><b>Author:</b> ${item.author} | <b>Date:</b> ${item.date}</p>
//                 <div class="modal-action">
//                     <button class="btn" onclick="issueDetailModal.close()">Close</button>
//                 </div>
//             `;
//         } catch (err) {
//             modalBody.innerHTML = "Error loading details.";
//         }
//     }

//     // 5. SEARCH & FILTER EVENTS
//     searchBtn.addEventListener('click', () => fetchIssues(searchInput.value));

//     document.getElementById('btnAll').onclick = () => renderCards(allIssues);
//     document.getElementById('btnOpen').onclick = () => renderCards(allIssues.filter(i => i.status.toLowerCase() === 'open'));
//     document.getElementById('btnClosed').onclick = () => renderCards(allIssues.filter(i => i.status.toLowerCase() === 'closed'));

//     function updateFilterCounts() {
//         const openNum = allIssues.filter(i => i.status.toLowerCase() === 'open').length;
//         const closedNum = allIssues.filter(i => i.status.toLowerCase() === 'closed').length;
//         document.getElementById('btnOpen').innerText = `Open (${openNum})`;
//         document.getElementById('btnClosed').innerText = `Closed (${closedNum})`;
//     }
// });
