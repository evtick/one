angular.module('demoCook', [])
        .controller('mainController', function($scope){
            $scope.aboutUs = {
                title : "Notre Equipe",
                introduction : "Have you ever felt worried that your party will not raise up to your guest expectations? In design, vertical rhythm is the structure that guides a reader's eye through the content. Good vertical rhythm makes a layout more balanced and beautiful and its content more readable. The time signature in sheet music visually depicts a song's rhythm, while for us, the lines of the baseline grid depict the rhythm of our content and give us guidelines."
            };
            
            $scope.speciality = {
                title : "Nos Spécialités",
                introduction : "Have you ever felt worried that your party will not raise up to your guest expectations? In design, vertical rhythm is the structure that guides a reader's eye through the content. Good vertical rhythm makes a layout more balanced and beautiful and its content more readable. The time signature in sheet music visually depicts a song's rhythm, while for us, the lines of the baseline grid depict the rhythm of our content and give us guidelines."
            };
            
            $scope.theme = "Restauration et événements spéciaux";
            
            $scope.feedback = {
                title : "Ce que nos clients disent",
                contents : [
                    {
                        body : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages. ",
                        name : "Jogn De, Birthday Event"
                    },
                    {
                        body : "Have you ever felt worried that your party will not raise up to your guest expectations? In design, vertical rhythm is the structure that guides a reader’s eye through the content. Good vertical rhythm makes a layout more balanced and beautiful and its content more readable. The time signature in sheet music visually depicts a song’s rhythm, while for us, the lines of the baseline grid depict the rhythm of our content and give us guidelines. ",
                        name : "Marta Kay, Business Cocktalil"
                    }
                ]
            };
            
            $scope.backgroundSlide = "http://wowthemes.net/demo/leroy/img/dummy1.jpg";
            $scope.contact = "Nous joindre";
    
            $scope.papers = [
                {
                    imageSrc : "http://wowthemes.net/demo/leroy/img/dummies/18.jpg",
                    downloadLinkTitle : "Premier",
                    title : "John Vandeley",
                    content : "Have you ever felt worried that your party will not raise up to your guest expectations? In design, vertical rhythm is the structure that guides a reader's eye through the content. Good vertical rhythm makes a layout more balanced and beautiful and its content more readable."
                },
                {
                    imageSrc : "http://wowthemes.net/demo/leroy/img/dummies/19.jpg",
                    downloadLinkTitle : "Deuxieme",
                    title : "Stephanie Hellen",
                    content : "Have you ever felt worried that your party will not raise up to your guest expectations? In design, vertical rhythm is the structure that guides a reader's eye through the content. Good vertical rhythm makes a layout more balanced and beautiful and its content more readable." 
                },
                {
                    imageSrc : "http://wowthemes.net/demo/leroy/img/dummies/19.jpg",
                    downloadLinkTitle : "Clone",
                    title : "Stephanie Hellen",
                    content : "Have you ever felt worried that your party will not raise up to your guest expectations? In design, vertical rhythm is the structure that guides a reader's eye through the content. Good vertical rhythm makes a layout more balanced and beautiful and its content more readable." 
                }
            ];
            
            $scope.cookMenus = [
                {
                    title : "APÉRITIFS",
                    contents : [
                        {
                            imageCssSrc : "http://wowthemes.net/demo/leroy/img/dummies/1.jpg",
                            hTitle : "Sweet, Sticky and Spicy Chicken",
                            body : "Pepperoni, mozzarella cheese and Italian seasonings are rolled together, baked to delicious perfection, then cut into bite-sized delights. Your guests will beg for the recipe!"
                            
                        },
                        {
                            imageCssSrc : "http://wowthemes.net/demo/leroy/img/dummies/2.jpg",
                            hTitle : "Sweet, Sticky and Spicy Chicken",
                            body : "Pepperoni, mozzarella cheese and Italian seasonings are rolled together, baked to delicious perfection, then cut into bite-sized delights. Your guests will beg for the recipe!"
                        }
                    ]
                },
                {
                    title : "MENU PRINCIPAL",
                    contents : [
                        {
                            imageCssSrc : "http://wowthemes.net/demo/leroy/img/dummies/4.jpg",
                            hTitle : "Sweet, Sticky and Spicy Chicken",
                            body : "Pepperoni, mozzarella cheese and Italian seasonings are rolled together, baked to delicious perfection, then cut into bite-sized delights. Your guests will beg for the recipe!"
                        },
                        {
                            imageCssSrc : "http://wowthemes.net/demo/leroy/img/dummies/6.jpg",
                            hTitle : "Sweet, Sticky and Spicy Chicken",
                            body : "Pepperoni, mozzarella cheese and Italian seasonings are rolled together, baked to delicious perfection, then cut into bite-sized delights. Your guests will beg for the recipe!"
                        }
                    ]
                },
                {
                    title : "DESSERTS",
                    contents : [
                        {
                            imageCssSrc : "http://wowthemes.net/demo/leroy/img/dummies/8.jpg",
                            hTitle : "Sweet, Sticky and Spicy Chicken",
                            body : "Pepperoni, mozzarella cheese and Italian seasonings are rolled together, baked to delicious perfection, then cut into bite-sized delights. Your guests will beg for the recipe!"
                        },
                        {
                            imageCssSrc : "http://wowthemes.net/demo/leroy/img/dummies/9.jpg",
                            hTitle : "Sweet, Sticky and Spicy Chicken",
                            body : "Pepperoni, mozzarella cheese and Italian seasonings are rolled together, baked to delicious perfection, then cut into bite-sized delights. Your guests will beg for the recipe!"
                        }
                    ]
                }
            ];
            
            $scope.isEditMode = false;
        });