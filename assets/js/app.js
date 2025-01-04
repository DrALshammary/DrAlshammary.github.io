angular.module('questionaire-platform', [
    'app.pages'
]);


angular.module('app.pages', [])
    .controller(
        'QuestionnaireB', 
        ['$scope', '$rootScope', 
            function($scope, $rootScope) {


                let vm = this;
                vm.selections = []




                vm.init = function () {
                    vm.selections = []
                }

                vm.toggleSelection = function (sel) {
                    if (vm.selections.includes(sel)) {
                        // refactor....
                        var arrCopy =  []
                        for (i of vm.selections) {
                            if (i !== sel) {
                                arrCopy.push(i)
                            }
                        }
                        vm.selections = arrCopy
                    } else {
                        vm.selections.push(sel)
                    }
                    console.log(vm.selections)
                }

                vm.isSelected = function(sel) {
                    return vm.selections.includes(sel)
                }

                vm.saveSelections = function() {
                    alert("Thank You!")
                   const url = 'https://luuzpufaukjczubvmtpd.supabase.co/rest/v1/lt_survey_responses';
                   const api_key = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRreXdwanl3ZnVqeGNnZnNkZGtpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc3Mzc3NTEsImV4cCI6MjAxMzMxMzc1MX0.U7oMU2FsO4vutdrecHMTpZMNtzc1swHalthT_6ShxgM';
                   const api = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRreXdwanl3ZnVqeGNnZnNkZGtpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc3Mzc3NTEsImV4cCI6MjAxMzMxMzc1MX0.U7oMU2FsO4vutdrecHMTpZMNtzc1swHalthT_6ShxgM';
                   const content_type = "Content-Type: application/json";


                    $.ajax({
                        type: "POST",
                        dataType: "json",
                        url: url,
                        headers: {
                            'Authorization': api_key,
                            'apikey': api,
                            'Content-Type': 'application/json',
                        },
                        data: JSON.stringify( { rating: rating}),
                        success: function(data){
                            alert(data);
                        }
                    });
                }

              





            }
        ]
    );
