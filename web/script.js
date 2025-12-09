const API_URL = "http://localhost:3000/tasks";

const tasksContainer = document.getElementById("tasks-container");
const form = document.getElementById("task-form");
const formTitle = document.getElementById("form-title");
const inputId = document.getElementById("task-id");
const inputTitle = document.getElementById("title");
const inputDescription = document.getElementById("description");
const selectStatus = document.getElementById("status");
const cancelEditBtn = document.getElementById("cancel-edit");
const reloadBtn = document.getElementById("reload-btn");
const toastEl = document.getElementById("toast");

function showToast(message) {
  toastEl.textContent = message;
  toastEl.classList.add("show");
  setTimeout(() => toastEl.classList.remove("show"), 2300);
}

function statusLabel(status) {
  if (status === "in_progress") return "Em andamento";
  if (status === "done") return "Concluída";
  return "Pendente";
}

async function loadTasks() {
  tasksContainer.innerHTML =
    '<span style="font-size:.85rem;color:#9ca3af;">Carregando...</span>';
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    if (!Array.isArray(data) || data.length === 0) {
      tasksContainer.innerHTML =
        '<span style="font-size:.85rem;color:#9ca3af;">Nenhuma tarefa cadastrada ainda.</span>';
      return;
    }

    tasksContainer.innerHTML = "";
    data.forEach((task) => {
      const item = document.createElement("div");
      item.className = "task-item";

      item.innerHTML = `
        <div class="task-main">
          <div class="task-title">${task.title ?? "(sem título)"}</div>
          ${
            task.description
              ? `<div class="task-desc">${task.description}</div>`
              : ""
          }
          <div class="task-meta">
            <span class="badge ${task.status}">${statusLabel(
        task.status
      )}</span>
            ${
              task.createdAt
                ? `<span>Criada: ${new Date(
                    task.createdAt
                  ).toLocaleString("pt-BR")}</span>`
                : ""
            }
          </div>
        </div>
        <div class="task-actions">
          <button class="btn-icon edit">Editar</button>
          <button class="btn-icon delete">Excluir</button>
        </div>
      `;

      const editBtn = item.querySelector(".edit");
      const deleteBtn = item.querySelector(".delete");

      editBtn.addEventListener("click", () => startEdit(task));
      deleteBtn.addEventListener("click", () => deleteTask(task.id));

      tasksContainer.appendChild(item);
    });
  } catch (err) {
    console.error(err);
    tasksContainer.innerHTML =
      '<span style="font-size:.85rem;color:#f97373;">Erro ao carregar tarefas.</span>';
  }
}

function resetForm() {
  inputId.value = "";
  inputTitle.value = "";
  inputDescription.value = "";
  selectStatus.value = "pending";
  formTitle.textContent = "Nova tarefa";
  cancelEditBtn.style.display = "none";
}

function startEdit(task) {
  inputId.value = task.id;
  inputTitle.value = task.title || "";
  inputDescription.value = task.description || "";
  selectStatus.value = task.status || "pending";
  formTitle.textContent = "Editar tarefa";
  cancelEditBtn.style.display = "inline-flex";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

cancelEditBtn.addEventListener("click", () => {
  resetForm();
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const id = inputId.value;
  const body = {
    title: inputTitle.value.trim(),
    description: inputDescription.value.trim(),
    status: selectStatus.value,
  };

  if (!body.title) {
    showToast("O título é obrigatório.");
    return;
  }

  try {
    const res = await fetch(id ? `${API_URL}/${id}` : API_URL, {
      method: id ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      showToast("Erro ao salvar tarefa.");
      return;
    }

    resetForm();
    await loadTasks();
    showToast(id ? "Tarefa atualizada!" : "Tarefa criada!");
  } catch (err) {
    console.error(err);
    showToast("Erro de conexão com a API.");
  }
});

async function deleteTask(id) {
  if (!confirm("Tem certeza que deseja excluir essa tarefa?")) return;

  try {
    const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    if (res.status === 204 || res.ok) {
      await loadTasks();
      showToast("Tarefa excluída.");
    } else {
      showToast("Erro ao excluir tarefa.");
    }
  } catch (err) {
    console.error(err);
    showToast("Erro de conexão com a API.");
  }
}

reloadBtn.addEventListener("click", loadTasks);

loadTasks();
