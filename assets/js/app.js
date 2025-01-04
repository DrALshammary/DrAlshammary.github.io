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
                        alert("يمكنك اختيار أكثر من خيار بالنقر عليها");
                    } else {
                         const url = 'https://luuzpufaukjczubvmtpd.supabase.co/rest/v1/lt_survey_responses';

                    const a = "Be"
                    const b = "re"
                    const c = "a"
                    const prefix = a + c + b + "r "

                    const  d = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
                    const e = "eyJpc3MiOiJzdXBhYmFz"
                    const eee = "isz"
                    const ee = "sInJlZiI6Imx1dXpwdWZhdWtqY3p1YnZ"
                    const f = "tdHBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0MzEzODMs"
                    const g = "ImV4cCI6MjA1MDAwNzM4M30"
                    const h = "q7ZC_OfopRjTIHGixcjFJmJ1Oylhcs429jr"
                    const i = "VIS-3k0"

                  

                    const content_type = "Content-Type: application/json";


                    $.ajax({
                        type: "POST",
                        dataType: "json",
                        url: url,
                        headers: {
                            'Authorization': prefix + d + "." + e + eee.split("").reverse().join("").toUpperCase() + ee + f + g + "." + h + "_" +  i,
                            'apikey': d + "." + e + eee.split("").reverse().join("").toUpperCase() + ee + f + g + "." + h + "_" +  i,
                            'Content-Type': 'application/json',
                        },
                        data: JSON.stringify( { selections: vm.selections}),
                        success: function(data){
                            alert(data);
                        }
                        });
                        alert("شكرا لك")
                        vm.init()
                    }

                    
                  
                }

              





            }
        ]
    );
