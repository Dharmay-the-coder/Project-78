var images = ["https://i.pinimg.com/736x/77/d4/15/77d41520a3f07995b184797a3734bf44.jpg", 
"https://us.123rf.com/450wm/dualororua/dualororua1710/dualororua171000193/88695052-vector-illustration-of-cute-little-girl-cartoon.jpg?ver=6", 
"https://image.shutterstock.com/image-vector/portrait-handsome-man-shirt-jeans-260nw-582282625.jpg", 
"https://www.seekpng.com/png/detail/270-2703114_questionnaire-for-smart-mom-cartoon.png",
"https://thumbs.dreamstime.com/b/cartoon-grandma-cute-vector-clip-art-illustration-simple-gradients-all-single-layer-57681194.jpg",
"https://i.pinimg.com/originals/d5/6c/d2/d56cd25436d0d3f56ad2f143750f7455.png",
"https://image.shutterstock.com/image-illustration/cute-style-young-mother-posing-260nw-561868150.jpg"];
var names = ["Dharmay Mehta", "Vidheesha Mehta", "Deven Mehta", "Beena Mehta", "Bhartiben Mehta", "Kishorbhai Mehta", "Neha Mehta(my aunt)"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 7
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName  = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
