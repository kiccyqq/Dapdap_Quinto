
        $(document).ready(function(Addname){
        alert("Hello Kiddos! Let's start learning in Mathematics");
            $('#div-addition').hide();
            $('#div-subtraction').hide();
            $('#div-multiplication').hide();
            $('#div-division').hide();
            $('#div-factorial').hide()
            $('#div-Pemdas').hide();
    });

    function Addname(){
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const name = urlParams.get('name');

        if (name !== null) {
            document.getElementById('welcomeName').innerHTML = "Welcome " + name + "! Please select a topic to learn.";
            document.getElementById('modalTitle').innerHTML = "Hi " + name + "!";
        }
    }
    

    function showDiv(name){
        if (name=="Addition"){
            $('#div-addition').slideToggle(3000);
            $('#main-menu').hide();
            $('#div-subtraction').hide();
            $('#div-multiplication').hide();
            $('#div-division').hide();
            $('#div-compare').hide()
            $('#div-multip').hide();
        }

        if (name=="Subtraction"){
            $('#div-subtraction').slideToggle(3000);
            $('#div-addition').hide();
            $('#main-menu').hide();
            $('#div-multiplication').hide();
            $('#div-division').hide();
            $('#div-compare').hide()
            $('#div-multip').hide();
        }

        if (name=="Multiplication"){
            $('#div-multiplication').slideToggle(3000);
            $('#div-addition').hide();
            $('#div-subtraction').hide();
            $('#main-menu').hide();
            $('#div-division').hide();
            $('#div-compare').hide()
            $('#div-multip').hide();
        }

        if (name=="Division"){
            $('#div-division').slideToggle(3000);
            $('#div-addition').hide();
            $('#div-subtraction').hide();
            $('#main-menu').hide();
            $('#div-multiplication').hide();
            $('#div-compare').hide()
            $('#div-multip').hide();
        }

        if (name=="CompNum"){
            $('#div-compare').slideToggle(3000);
            $('#div-addition').hide();
            $('#div-subtraction').hide();
            $('#main-menu').hide();
            $('#div-multiplication').hide();
            $('#div-multip').hide();
            $('#div-division').hide();
        }

        if (name=="MultiplicationTabs"){
            $('#div-multip').slideToggle(3000);
            $('#div-addition').hide();
            $('#div-subtraction').hide();
            $('#main-menu').hide();
            $('#div-multiplication').hide();
            $('#div-compare').hide();
            $('#div-division').hide();
        }

        if (name=="Menu"){
            $('#main-menu').slideToggle(3000);
            $('#div-addition').hide();
            $('#div-subtraction').hide();
            $('#div-multiplication').hide();
            $('#div-division').hide();
            $('#div-compare').hide()
            $('#div-multip').hide(); 
            $('#LectureAdd').hide();
            $('#VideosAdd').hide();
            $('#QuizAdd').hide();
            $('#LectureSub').hide();
            $('#QuizSub').hide();
            $('#VideosSub').hide();
            $('#LectureMul').hide();
            $('#QuizMul').hide();
            $('#VideosMul').hide();
            $('#LectureDiv').hide();
            $('#VideosDiv').hide();
            $('#QuizDiv').hide();
            $('#LectureCompare').hide();
            $('#VideosCompare').hide();
            $('#QuizCompare').hide();
            $('#QuizMultip').hide();
            $('#LectureMultip').hide();
            $('#VideosMultip').hide();

        }
    }

        function LectureComAddition(name){

            if (name == "LecMaterialsAdd"){
                $('#LectureAdd').slideToggle(3000);
                $('#VideosAdd').hide();
                $('#QuizAdd').hide();
                $('#div-addition').hide();
                $('#main-menu').hide();
            }
            if (name == "LecVideosAdd"){
                $('#VideosAdd').slideToggle(3000);
                $('#LectureAdd').hide();
                $('#QuizAdd').hide();
                $('#div-addition').hide();
            }

            if (name == "FunQuizAdd"){
                $('#QuizAdd').slideToggle(3000);
                $('#LectureAdd').hide();
                $('#VideosAdd').hide();
                $('#div-addition').hide();
            }

        }

            function LectureComSubration(name){
            if (name == "LecMaterialsSub"){
                $('#LectureSub').slideToggle(3000);
                $('#VideosSub').hide();
                $('#QuizSub').hide();
                $('#div-subtraction').hide();

            }

            if (name == "LecVideosSub"){
                $('#VideosSub').slideToggle(3000);
                $('#LectureSub').hide();
                $('#QuizSub').hide();
                $('#div-subtraction').hide();
            }

            if (name == "FunQuizSub"){
                $('#QuizSub').slideToggle(3000);
                $('#LectureSub').hide();
                $('#VideosSub').hide();
                $('#div-subtraction').hide();
            }

        }

        function LectureComMultiplication(name){
            if (name == "LecMaterialsMul"){
                $('#LectureMul').slideToggle(3000);
                $('#VideosMul').hide();
                $('#QuizSubMul').hide();
                $('#div-multiplication').hide();

            }

            if (name == "LecVideosMul"){
                $('#VideosMul').slideToggle(3000);
                $('#LectureMul').hide();
                $('#QuizMul').hide();
                $('#div-multiplication').hide();
            }

            if (name == "FunQuizMul"){
                $('#QuizMul').slideToggle(3000);
                $('#LectureMul').hide();
                $('#VideosMul').hide();
                $('#div-multiplication').hide();
            }
        }

        function LectureComDivision(name){
            if (name == "LecMaterialsDiv"){
                $('#LectureDiv').slideToggle(3000);
                $('#VideosDiv').hide();
                $('#QuizDiv').hide();
                $('#div-division').hide();

            }

            if (name == "LecVideosDiv"){
                $('#VideosDiv').slideToggle(3000);
                $('#LectureDiv').hide();
                $('#QuizDiv').hide();
                $('#div-division').hide();
            }

            if (name == "FunQuizDiv"){
                $('#QuizDiv').slideToggle(3000);
                $('#LectureDiv').hide();
                $('#VideosDiv').hide();
                $('#div-division').hide();
            }
        }

        function LectureComCompare(name){
            if (name == "LecMaterialsCompare"){
                $('#LectureCompare').slideToggle(3000);
                $('#VideosCompare').hide();
                $('#QuizCompare').hide();
                $('#div-compare').hide();

            }

            if (name == "LecVideosCompare"){
                $('#VideosCompare').slideToggle(3000);
                $('#LectureCompare').hide();
                $('#QuizCompare').hide();
                $('#div-compare').hide();
            }

            if (name == "FunQuizCompare"){
                $('#QuizCompare').slideToggle(3000);
                $('#LectureCompare').hide();
                $('#VideosCompare').hide();
                $('#div-compare').hide();
            }
        }

        function LectureComMultip(name){
            if (name == "LecMaterialsMultip"){
                $('#LectureMultip').slideToggle(3000);
                $('#VideosMultip').hide();
                $('#QuizMultip').hide();
                $('#div-multip').hide();

            }

            if (name == "LecVideosMultip"){
                $('#VideosMultip').slideToggle(3000);
                $('#LectureMultip').hide();
                $('#QuizMultip').hide();
                $('#div-multip').hide();
            }

            if (name == "FunQuizMultip"){
                $('#QuizMultip').slideToggle(3000);
                $('#LectureMultip').hide();
                $('#VideosMultip').hide();
                $('#div-multip').hide();
            }
        }
