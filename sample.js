<!-- ボタンクリック後の処理 -->
        //<script language="javascript" type="text/javascript">
            function clickMessageDisp() {
                var message = document.getElementById("input-message").value;
                message = "入力したメッセージ：" + message;
                document.getElementById("output-message").innerHTML = message;
            }
        //</script>
