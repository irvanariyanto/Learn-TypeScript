var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 1] = "Male";
    Gender[Gender["Female"] = 2] = "Female";
    Gender[Gender["Unknown"] = -1] = "Unknown";
})(Gender || (Gender = {}));
;
var jenisKelamin = Gender.Male;
console.log(jenisKelamin);
var Category;
(function (Category) {
    Category["Handphone"] = "HANDPHONE";
    Category["Komputer"] = "KOMPUTER";
})(Category || (Category = {}));
var productCategory = Category.Handphone;
console.log(productCategory);
