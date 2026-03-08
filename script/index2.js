// Testing Code
// document.addEventListener('DOMContentLoaded', () => {
//     const signInBtn = document.getElementById('signInBtn');
//     const loginSection = document.getElementById('loginSection');
//     const dashboardSection = document.getElementById('dashboardSection');
//     const issuesContainer = document.getElementById('issuesContainer');
//     const spinner = document.getElementById('spin');
//     let allIssues = [];

    // --- 1. UI HELPERS ---

    // const toggleLoading = (isLoading) => {
    //     if (isLoading) {
    //         spinner.classList.remove('hidden');
    //         issuesContainer.classList.add('hidden');
    //     } else {
    //         spinner.classList.add('hidden');
    //         issuesContainer.classList.remove('hidden');
    //     }
    // };

    // Highlights the active filter button
    // const setActiveButton = (activeId) => {
    //     const buttons = ['btnAll', 'btnOpen', 'btnClosed'];
    //     buttons.forEach(id => {
    //         const btn = document.getElementById(id);
    //         if (id === activeId) {
    //             // Active style (filled primary)
    //             btn.classList.add('btn-primary', 'text-white');
    //             btn.classList.remove('btn-outline');
    //         } else {
    //             // Inactive style (outline)
    //             btn.classList.remove('btn-primary', 'text-white');
    //             btn.classList.add('btn-outline');
    //         }
    //     });
    // };

    // --- 2. LOGIN LOGIC ---
    // signInBtn.addEventListener('click', () => {
    //     const u = document.getElementById('username').value;
    //     const p = document.getElementById('password').value;

    //     // Using your credentials
    //     if (u === 'admin' && p === 'admin123') {
    //         loginSection.classList.add('hidden');
    //         dashboardSection.classList.remove('hidden');
    //         fetchIssues(); 
    //     } else {
    //         const msg = document.getElementById('loginMessage');
    //         msg.textContent = "Invalid Credentials!";
    //         msg.classList.remove('hidden');
    //     }
    // });

    // --- 3. DATA FETCHING ---
    // async function fetchIssues(query = '') {
    //     toggleLoading(true);
    //     const url = query 
    //         ? `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${query}`
    //         : `https://phi-lab-server.vercel.app/api/v1/lab/issues`;

    //     try {
    //         const res = await fetch(url);
    //         const data = await res.json();
    //         allIssues = data.data || data; 
            
    //         renderCards(allIssues);
    //         updateFilterCounts();
    //         setActiveButton('btnAll'); // Reset to 'All' on search/load
    //     } catch (err) {
    //         console.error("Error:", err);
    //         document.getElementById('issueHeadline').innerText = "Network Error";
    //     } finally {
    //         toggleLoading(false); // Immediate hide once data is ready
    //     }
    // }

    // --- 4. RENDER CARDS ---
//     function renderCards(issues) {
//         issuesContainer.innerHTML = '';
//         document.getElementById('issueHeadline').innerText = `${issues.length} Issues`;

//         if (issues.length === 0) {
//             issuesContainer.innerHTML = `<p class="text-center col-span-full py-10 text-gray-400">No issues found.</p>`;
//             return;
//         }

//         issues.forEach(issue => {
//             const isOpen = issue.status.toLowerCase() === 'open';
//             const borderCol = isOpen ? 'bg-success' : 'bg-purple-600';
//             const icon = isOpen ? './assets/Open-Status.png' : './assets/Closed-Status.png';

//             const card = document.createElement('div');
//             card.className = "card bg-base-100 border border-base-200 shadow-sm rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-shadow";
//             card.onclick = () => showDetail(issue.id);
            
//             const p = issue.priority.toLowerCase();
            
//             let priorityClass = 'bg-gray-100 text-gray-400 border-none'; 
// if (p === 'high') {
//     priorityClass = 'bg-red-50 text-red-500 border-none';
// } else if (p === 'medium') {
//     priorityClass = 'bg-orange-50 text-orange-400 border-none';
// }

// Handle date logic for the card
// const displayDate = issue.date ? issue.date : new Date().toLocaleDateString('en-GB');

// card.innerHTML = `
//     <div class="h-1 ${borderCol} w-full"></div>
//     <div class="card-body p-5 gap-2">
//         <!-- Header: Status Icon and Priority -->
//         <div class="flex justify-between items-center">
//             <img src="${icon}" class="w-6 h-6">
//             <span class="badge badge-sm font-bold uppercase ${priorityClass}">${issue.priority}</span>
//         </div>

//         <!-- Title and Description -->
//         <h2 class="font-bold text-gray-800 line-clamp-1 text-lg">${issue.title}</h2>
//         <p class="text-xs text-gray-500 line-clamp-2 mb-2">${issue.description}</p>

//         <!-- Static Labels from image -->
//         <div class="flex gap-2 mb-2">
//             <span class="badge bg-red-50 text-red-400 border-none text-[10px] py-3 px-2 gap-1">
//                 <i class="fa-solid fa-bug"></i> BUG
//             </span>
//             <span class="badge bg-orange-50 text-orange-400 border-none text-[10px] py-3 px-2 gap-1">
//                 <i class="fa-solid fa-circle-info"></i> HELP WANTED
//             </span>
//         </div>

//         <!-- Divider Line -->
//         <div class="border-t border-gray-100 my-1"></div>

//         <!-- Footer: ID/Author and Date on separate lines -->
//         <div class="flex flex-col gap-1 mt-1">
//             <span class="text-[12px] text-gray-500 font-medium">#${issue.id} by ${issue.author}</span>
//             <span class="text-[12px] text-gray-400">${displayDate}</span>
//         </div>
//     </div>
// `;
// issuesContainer.appendChild(card);
//         });
//     }

    // --- 5. SEARCH & FILTER EVENTS ---
// --- DYNAMIC SEARCH FUNCTIONALITY ---
// This filters the existing 'allIssues' array as the user types
// document.getElementById('searchInput').addEventListener('input', (e) => {
//     const searchTerm = e.target.value.toLowerCase();
    
//     const filtered = allIssues.filter(issue => 
//         issue.title.toLowerCase().includes(searchTerm) || 
//         issue.description.toLowerCase().includes(searchTerm)
//     );
    
//     renderCards(filtered);
// });

// --- NEW ISSUE FORM FUNCTIONALITY ---
// document.getElementById('newIssueForm').addEventListener('submit', (e) => {
//     e.preventDefault(); // Stop page refresh

//     // 1. Collect data from form
//     const newIssue = {
//         id: allIssues.length + 1, // Temporary ID
//         title: document.getElementById('newTitle').value,
//         description: document.getElementById('newDesc').value,
//         priority: document.getElementById('newPriority').value,
//         author: document.getElementById('newAuthor').value,
//         status: 'open', // Default for new issues
//         date: new Date().toLocaleDateString('en-US') // Today's date
//     };

//     // 2. Add to local array (so search/filter still works)
//     allIssues.unshift(newIssue); 

//     // 3. Re-render UI
//     renderCards(allIssues);
//     updateFilterCounts();

//     // 4. Cleanup
//     e.target.reset(); // Clear form
//     document.getElementById('newIssueModal').close(); // Close modal
    
//     // Optional: Scroll to top to see new card
//     window.scrollTo({ top: 0, behavior: 'smooth' });
// });

// // Helper function to handle the "Loading" state for filters
// const handleFilter = (activeBtnId, filterLogic) => {
//     setActiveButton(activeBtnId); // Highlight the button immediately
//     toggleLoading(true);          // Show the spinner

//     // Wait for 1.5 seconds (1500ms) before rendering cards
//     setTimeout(() => {
//         const filtered = filterLogic();
//         renderCards(filtered);
//         toggleLoading(false);     // Hide the spinner
//     }, 800); 
// };

// document.getElementById('btnAll').onclick = () => {
//     handleFilter('btnAll', () => allIssues);
// };

// document.getElementById('btnOpen').onclick = () => {
//     handleFilter('btnOpen', () => allIssues.filter(i => i.status.toLowerCase() === 'open'));
// };

// document.getElementById('btnClosed').onclick = () => {
//     handleFilter('btnClosed', () => allIssues.filter(i => i.status.toLowerCase() === 'closed'));
// };

// function updateFilterCounts() {
//     const openNum = allIssues.filter(i => i.status.toLowerCase() === 'open').length;
//     const closedNum = allIssues.filter(i => i.status.toLowerCase() === 'closed').length;
//     document.getElementById('btnOpen').innerText = `Open (${openNum})`;
//     document.getElementById('btnClosed').innerText = `Closed (${closedNum})`;
// }


//     // Modal
//     async function showDetail(id) {
//     const modal = document.getElementById('issueDetailModal');
//     const modalBody = document.getElementById('modalBody');
    
//     modal.showModal();
//     modalBody.innerHTML = `
//         <div class="flex justify-center items-center p-20">
//             <span class="loading loading-spinner loading-lg text-primary"></span>
//         </div>`;

//     try {
//         const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`);
//         const result = await res.json();
//         const item = result.data;

//         // --- DATE FIX ---
//         // If item.date exists, use it. Otherwise, use today's date as a fallback.
//         const displayDate = item.date ? item.date : new Date().toLocaleDateString('en-GB'); 

//         const isOpened = item.status.toLowerCase() === 'open';
//         const statusClass = isOpened ? 'bg-[#00B074] text-white' : 'bg-purple-600 text-white';
        
//         const p = item.priority.toLowerCase();
//         let priorityBadge = 'bg-gray-100 text-gray-500'; 
//         if (p === 'high') priorityBadge = 'bg-[#FF5A5F] text-white'; 
//         if (p === 'medium') priorityBadge = 'bg-[#FF9F43] text-white'; 

//         modalBody.innerHTML = `
//             <div class="p-2">
//                 <h3 class="font-extrabold text-3xl text-gray-800 mb-4">${item.title}</h3>
                
//                 <div class="flex items-center gap-2 mb-6 text-gray-400 text-sm">
//                     <span class="badge border-none px-4 py-3 font-medium ${statusClass}">
//                         ${isOpened ? 'Opened' : 'Closed'}
//                     </span>
//                     <span>•</span>
//                     <span>Opened by <b class="text-gray-600">${item.author}</b></span>
//                     <span>•</span>
//                     <!-- THE DATE APPEARS HERE -->
//                     <span class="font-medium">${displayDate}</span>
//                 </div>

//                 <div class="flex gap-2 mb-8">
//                     <span class="badge bg-red-50 text-red-400 border-red-100 py-3 gap-1">
//                         <i class="fa-solid fa-bug text-[10px]"></i> BUG
//                     </span>
//                     <span class="badge bg-orange-50 text-orange-400 border-orange-100 py-3 gap-1">
//                         <i class="fa-solid fa-circle-info text-[10px]"></i> HELP WANTED
//                     </span>
//                 </div>

//                 <p class="text-gray-500 leading-relaxed text-lg mb-10">
//                     ${item.description}
//                 </p>

//                 <div class="bg-[#F8F9FD] rounded-2xl p-6 flex justify-between items-center mb-6">
//                     <div>
//                         <p class="text-gray-400 text-sm mb-1">Assignee:</p>
//                         <p class="font-bold text-gray-800 text-lg">${item.author}</p>
//                     </div>
//                     <div>
//                         <p class="text-gray-400 text-sm mb-1">Priority:</p>
//                         <span class="badge border-none px-6 py-4 font-bold uppercase ${priorityBadge}">
//                             ${item.priority}
//                         </span>
//                     </div>
//                 </div>

//                 <div class="modal-action">
//                     <button class="btn bg-[#4B00FF] hover:bg-[#3A00CC] text-white border-none px-10 rounded-xl" 
//                             onclick="issueDetailModal.close()">
//                         Close
//                     </button>
//                 </div>
//             </div>
//         `;
//     } catch (err) {
//         modalBody.innerHTML = `<div class="p-10 text-center text-red-500">Error loading details.</div>`;
//     }
// }

// });
