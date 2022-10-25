/** Sắp xếp 3 số tăng dần
 *  
 * Khối 1:
 *  number1, number2, number3
 * Khối 2:
 *   Trong hàm
 *      + Lấy giá trị từ form
 *      + Kiểm tra điều kiện nhập số thực
 *      + Sắp xếp giá trị tăng dần 
 *              
 *      + Hiển thì kết quả
 *   Gắn hàm vào sự kiện click của button
 *   
 *   thông báo kết quả
 * Khối 3:
 *  3 số đã được sắp xếp
 */
 function sapXepTangDan(){
    var num1 = Number(document.getElementById("number1").value);
    var num2 = Number(document.getElementById("number2").value);
    var num3 = Number(document.getElementById("number3").value);
    var temp = 0;
    if(Number.isInteger(num1) && Number.isInteger(num2) && Number.isInteger(num3)){
        if(num1 > num2){
            temp = num1;
            num1 = num2;
            num2 = temp; 
        }
        if(num1 > num3){
            temp = num1;
            num1 = num3;
            num3 = temp;
        }
        if(num2 > num3){
            temp = num2;
            num2 = num3;
            num3 = temp;
        }
        
    }else{
        alert("Số bạn nhập không hợp lệ!!");
    }
   
    // console.log(num1,num2,num3);
    document.getElementById("result").innerHTML = num1+","+num2+","+num3;
}

document.getElementById("btnSapXep").onclick = sapXepTangDan;


/** Đếm Chẵn lẻ
 *  
 * Khối 1:
 *  edge1, edge2, edge3
 * Khối 2:
 *   Trong hàm
 *      + Lấy giá trị từ form
 *      + Kiểm tra điều kiện nhập số thực
 *          tạo biến đếm count : số chẵn
 *      + Kiểm tra chẵn lẻ 
 *              so1%2 == 0;
 *              count++;
 *           tương tự kiểm tra so2,so3   
 *        số chẵn = count;
 *        số lẻ = 3-count;      
 *      + Hiển thì kết quả
 *   Gắn hàm vào sự kiện click của button
 *   
 *  thông báo kết quả
 * Khối 3:
 *  tổng số chẵn, số lẻ
 */


function demChanLe() {
    var so1 = Number(document.getElementById("edge1").value);
    var so2 = Number(document.getElementById("edge2").value);
    var so3 = Number(document.getElementById("edge3").value);
    var count = 0;
    if(Number.isInteger(so1) && Number.isInteger(so2) && Number.isInteger(so3)){
        if(so1%2 == 0){
            count++;
        }
        if(so2%2 == 0){
           count++;
        }
        if(so3%2 == 0){
            count++;
        }
        
    }else{
        alert("Số bạn nhập không hợp lệ!!");
    }
    var sochan = count;
    var sole = 3 - count;
    document.getElementById("kqua").innerHTML = "Có "+sochan+" số chẵn"+", "+sole+" số lẻ";
}

document.getElementById("btnDemChanLe").onclick = demChanLe;


/** Đoán tam giác
 *  
 * Khối 1:
 *  canha, canhb, canhc
 * Khối 2:
 *   Trong hàm
 *      + Lấy giá trị từ form
 *      + Kiểm tra điều kiện nhập số cạnh tam giác
 *          canha + canhb > canhc && canha + canhc > canhb && canhb + canhc > canha
 *      + Kiểm tra tam giác cân, đều, vuông
 *                canha == canhb && canhb == canhc : đều
 *                canha == canhb || canhb == canhc || canha == canhc : cân
 *                Math.pow(canha,2) + Math.pow(canhb,2) == Math.pow(canhc,2) || Math.pow(canha,2) + Math.pow(canhc,2) == Math.pow(canhb,2) || Math.pow(canhb,2) + Math.pow(canhc,2) == Math.pow(canha,2) : vuông
 *      + Hiển thì kết quả
 *   Gắn hàm vào sự kiện click của button
 *   
 *   thông báo kết quả
 * Khối 3:
 *  tổng số chẵn, số lẻ
 */

function doanTamGiac() {
    var canha = Number(document.getElementById("canh1").value);
    var canhb = Number(document.getElementById("canh2").value);
    var canhc = Number(document.getElementById("canh3").value);
    
    if(canha + canhb > canhc && canha + canhc > canhb && canhb + canhc > canha){
        if(canha == canhb && canhb == canhc){
            document.getElementById("txtDoan").innerHTML = "Hình tam giác đều";
        }else if(canha == canhb || canhb == canhc || canha == canhc){
            document.getElementById("txtDoan").innerHTML = "Hình tam giác cân";
        }else if(Math.pow(canha,2) + Math.pow(canhb,2) == Math.pow(canhc,2) || Math.pow(canha,2) + Math.pow(canhc,2) == Math.pow(canhb,2) || Math.pow(canhb,2) + Math.pow(canhc,2) == Math.pow(canha,2) ){
            document.getElementById("txtDoan").innerHTML = "Hình tam giác vuông";
        }else{
            document.getElementById("txtDoan").innerHTML = "Hình tam giác thường";
        }
        
    }else{
        alert("Số cạnh tam giác không hợp lệ!!");
    }

}

document.getElementById("btnDoan").onclick = doanTamGiac;


/**
 * Khối 1: Inputs
 *  dad,mom,brother,sister
 * 
 * Khối 2:
 *  Tạo hàm gửi lời chào
 *      Trong hàm 
 *         + lấy giá trị từ form
 *         + dùng switch case so sanh giá trị => xuất thông báo
 * 
 * 
 * Gắn hàm vào sự kiện click button
 *  B3:Thông báo kết quả lên UI
 * 
 * Khối 3: Output
 *  Lời chào
 * 
 * 
 */


function guiLoichao(){
    var people = document.getElementById("selectpeople").value;
    switch(people){
        case "dad":
            document.getElementById("txtChao").innerHTML = "Xin chào Bố!";
            break;
        case "mom":
            document.getElementById("txtChao").innerHTML ="Xin chào Mẹ!";
            break;
        case "brother":
            document.getElementById("txtChao").innerHTML = "Xin chào Anh Trai!";
            break;
         case "sister":
            document.getElementById("txtChao").innerHTML = "Xin chào Em Gái!";
            break;       
        default:
            document.getElementById("txtChao").innerHTML = "Xin chào Người Lạ Ơi!";
            break;
    }
}

document.getElementById("btnChao").onclick = guiLoichao;