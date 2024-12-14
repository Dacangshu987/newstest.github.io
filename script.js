// 展示流行语详情
function showDetails(id) {
    const detailsElement = document.getElementById(`details-${id}`);
    const button = document.querySelector(`#${id} .show-more`);
    
    // Toggle the visibility of the details
    if (detailsElement.style.display === "none" || detailsElement.style.display === "") {
        detailsElement.style.display = "block";
        button.textContent = "收起";
    } else {
        detailsElement.style.display = "none";
        button.textContent = "了解更多";
    }
}

// 页面加载完成后初始化
document.addEventListener("DOMContentLoaded", function() {
    // 默认情况下，隐藏所有流行语的详情
    const details = document.querySelectorAll(".details");
    details.forEach(function(detail) {
        detail.style.display = "none";
    });
});
