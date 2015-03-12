 angular
    .module("appAngular", [])
    .controller("ToDoCtrl", ["$scope",
    function ($scope) 
    {
        $scope.actuals = [
            { name: "Покормить кота", priority: 'Средний', performer: "Iгор" },
            { name: 'Изучить ASP.NET', priority: 'Высокий', performer: 'Iгор' },
            { name: 'Спаааааать!!!', priority: 'Низкий', performer: 'Вениамин' }
        ];
        $scope.archives = [
          { name: 'Съесть пиццу', priority: 'Средний', performer: 'Вова' }
        ];

        $scope.newnote = {
            name: "",
            priority: "",
            performer: ""
        };

        $scope.actualLength = function () {
            return $scope.actuals.length;
        };

        $scope.addNote = function () {
            if (($scope.newnote.name != "") && ($scope.newnote.performer != "") && (($scope.newnote.priority == 'Высокий') || ($scope.newnote.priority == 'Средний') || ($scope.newnote.priority == 'Низкий')))
            {
                $scope.actuals.push({
                    name: $scope.newnote.name,
                    priority: $scope.newnote.priority,
                    performer: $scope.newnote.performer
                });
                $scope.newnote.name = "";
                $scope.newnote.priority = "";
                $scope.newnote.performer = "";
            } else
            { alert("Не все поля заполнены или не выбран приоритет"); }
        }

        $scope.deleteNote = function (note) {
            var i = $scope.actuals.indexOf(note);
            $scope.actuals.splice(i, 1);
        }

        $scope.completeNote = function (selectName, selectPrior, SelectPerf, note) {
            $scope.archives.push({
                name: selectName,
                priority: selectPrior,
                performer: SelectPerf
            });
            $scope.deleteNote(note);
        }

        $scope.deleteArchive = function (selected_note) {
            var i = $scope.archives.indexOf(selected_note);
            $scope.archives.splice(i, 1);
        }

    }]);
