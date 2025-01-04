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

                    if (vm.selections.length  == 0 ) {
                        alert("Please select one or more options");
                    } else {
                         const url = 'https://luuzpufaukjczubvmtpd.supabase.co/rest/v1/lt_survey_responses';
                   const api_key = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1dXpwdWZhdWtqY3p1YnZtdHBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0MzEzODMsImV4cCI6MjA1MDAwNzM4M30.q7ZC_OfopRjTIHGixcjFJmJ1Oylhcs429jr_VIS-3k0';
                   const api = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1dXpwdWZhdWtqY3p1YnZtdHBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0MzEzODMsImV4cCI6MjA1MDAwNzM4M30.q7ZC_OfopRjTIHGixcjFJmJ1Oylhcs429jr_VIS-3k0'
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
                        data: JSON.stringify( { selections: vm.selections}),
                        success: function(data){
                            alert(data);
                        }
                        });
                        alert("Thank You!")
                    }

                    
                  
                }

              





            }
        ]
    );
