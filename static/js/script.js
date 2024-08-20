
document.addEventListener('DOMContentLoaded', function(){
    var tombolInput = document.getElementById('input-list');
    var kontainerToDo = document.getElementById('list-undone-container');
    var kontainerTodoSelesai = document.getElementById('list-content-container');
    var listUndone = document.getElementById('list-undone');
    var listDone = document.getElementById('list-done');
    var elemenForm = document.querySelector('body main form');
    const SAVED_EVENT = 'saved-todo';
    const STORAGE_KEY = 'TODO_APPS';

    var arrayToDo = [];
    visibilitasList();
    loadDataFromStorage();
    transformasi();
        tombolInput.addEventListener('click', function(){
        var inputData = document.getElementById('inputForm').value;
        
        hapusPlaceholder();

        if(apakahKosong(inputData)){
            peringatan(inputData);
        }
        else{
            buatTodo(inputData);
            hapusPeringatan();
            renderTodo();
        }
    });

    function renderTodo(){
        kontainerToDo.innerHTML = '';
        kontainerTodoSelesai.innerHTML = '';
        visibilitasList();
            for(var item of arrayToDo){
                if(!item.isDone){
                    tampilTodo(item);
                }
                else{
                    tampilTodoSelesai(item);
                }
            }
            simpanKeLocalStorage();
            transformasi();
    }

    function generateId(){
        return +new Date;
    }

    function generateObject(id, task, isDone){
        return {
            id,
            task,
            isDone
        }
    }

    function hapusTodo(item){
        arrayToDo = arrayToDo.filter(itemBaru => itemBaru !== item);
        simpanKeLocalStorage();
        renderTodo();
    }

    function buatTodo(inputData){
        arrayToDo.push(generateObject(generateId(), inputData, false));
        console.log('Data Di push ke array')
        simpanKeLocalStorage();
        
        transformasi();
    }

    function selesaikanTodo(item){
        item.isDone = true;

        renderTodo();
    }

    function batalSelesai(item){
        item.isDone = !item.isDone;
        renderTodo();
    }

    function tampilTodoSelesai(item){
        var containerList = document.createElement('div');
        containerList.classList.add('flex');
        containerList.classList.add('flex-row');
        containerList.style.justifyContent = 'space-between';
        containerList.style.paddingInline = '1rem';
        containerList.classList.add('gap-x-1.5');

        var taskSelesai = document.createElement('p');
        taskSelesai.innerText = item.task;

        var buttonHapus = document.createElement('button');
        buttonHapus.id = 'button-hapus';
        var iconHapus = document.createElement('img');
        iconHapus.src = 'static/svg/trash.svg';
        buttonHapus.append(iconHapus);

        

        buttonHapus.addEventListener('click', function(){
            hapusTodo(item);
        })

        var buttonBatal = document.createElement('button');
        buttonBatal.id = 'button-batal';
        var iconBatal = document.createElement('img');
        iconBatal.src = 'static/svg/undo.svg';
        buttonBatal.append(iconBatal);

        buttonBatal.addEventListener('click', function(){
            batalSelesai(item);
        })

        var kontainerTombol = document.createElement('div');
        kontainerTombol.className = 'list-tombol';
        kontainerTombol.classList.add('flex');
        kontainerTombol.classList.add('flex-row');
        kontainerTombol.classList.add('gap-x-1');
        kontainerTombol.append(buttonBatal, buttonHapus);

        containerList.append(taskSelesai, kontainerTombol);
        containerList.classList.add('border-slate-700');

        kontainerTodoSelesai.append(containerList);

    }

    function tampilTodo(item){
        
        var containerList = document.createElement('div');
        containerList.classList.add('flex');
        containerList.classList.add('flex-row');
        containerList.style.justifyContent = 'space-between';
        containerList.style.paddingInline = '1rem';
        containerList.classList.add('gap-x-1.5');
        containerList.style.position = 'relative';
        containerList.classList.add('border-black');
        
        var iconDone = document.createElement('img');
        iconDone.src = 'static/svg/done.svg'

        var buttonDone = document.createElement('button');
        buttonDone.id = 'done-button';
        
        var taskElement = document.createElement('p');
        taskElement.innerText = item.task;
        
        buttonDone.append(iconDone);
        containerList.append(taskElement, buttonDone);

        kontainerToDo.append(containerList);

        buttonDone.addEventListener('click', function(){
            selesaikanTodo(item);
        });
    }

    function hapusPlaceholder(){
        document.getElementById('inputForm').value = '';
    }

    function peringatan(inputData){
            var peringatan = document.createElement('p');
            peringatan.style.color = 'red';
            peringatan.style.fontSize = '1.1rem';
            peringatan.textContent = 'Anda Harus Mengisi Form!!';
            peringatan.className = 'peringatan'
            document.getElementById('list-undone').append(peringatan);
    }

    function hapusPeringatan(){
        peringatanElements = document.getElementById('list-undone').getElementsByClassName('peringatan');
            if(peringatanElements !== null){
                for (var i = peringatanElements.length - 1; i >= 0; i--) {
                peringatanElements[i].remove();
                }
            }
    }

    function apakahKosong(inputData){
        if(inputData.trim() == ''){
            return true;
        }
        else{
            return false;
        }
    }

    function visibilitasList(){
        listUndone.style.display = 'none';
        listDone.style.display = 'none';
        if(arrayToDo.length > 0){
           if(arrayToDo.some(item => item.isDone == true)){
             listDone.style.display = 'flex';
             listDone.classList.add('animate-ping');
             elemenForm.classList.add('form-move-up');
           }
            if(arrayToDo.some(item => item.isDone == false)){
             listUndone.style.display = 'flex';
             listUndone.style.display = 'animate-ping';
             elemenForm.classList.add('form-move-up');
           }
        }
        else if (arrayToDo < 0){
          if(elemenForm.classList.contains('form-move-up')){
            elemenForm.classList.remove('form-move-up');
          }
        }
    }

   function transformasi(){
      if(arrayToDo.length >= 1){
            document.getElementById('form-input').classList.add('translate-y-52');
            document.getElementById('form-input').style.position = 'absolute';
        }
        else if (arrayToDo.length === 0){
            document.getElementById('form-input').classList.remove('translate-y-52');
            document.getElementById('form-input').style.position = '';
        }
}


    function cekLocalStrorage(){
        if(typeof(localStorage) === undefined){
            alert('Browser kamu tidak mendukung local storage');
            return false;
        }

        return true;
    }

    function simpanKeLocalStorage(){
        if(cekLocalStrorage()){
            const parsed = JSON.stringify(arrayToDo);
            localStorage.setItem(STORAGE_KEY, parsed);
            document.dispatchEvent(new Event(SAVED_EVENT));
            console.log('Data Berhasil Disimpan')
        }
    }

    document.addEventListener(SAVED_EVENT, function(){
        console.log(localStorage.getItem(STORAGE_KEY));
    })

    function loadDataFromStorage(){
        const serializedData = localStorage.getItem(STORAGE_KEY);
        var data = JSON.parse(serializedData);
        if(data != null){
           for(const todo of data){
            arrayToDo.push(todo);
           }
        }
        renderTodo();
    }
})

