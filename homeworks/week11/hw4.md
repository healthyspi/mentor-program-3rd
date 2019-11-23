## 請說明雜湊跟加密的差別在哪裡，為什麼密碼要雜湊過後才存入資料庫
雜湊：無法逆向解出原始輸入，雜湊不可逆的特性，很適合密碼

密碼：可以透過解密得到原文，分為對稱式加解密演算法和非對稱式加解密演算法

## 請舉出三種不同的雜湊函數
SHA系列 MD4,MD5

## 請去查什麼是 Session，以及 Session 跟 Cookie 的差別
Session：一段時間內的狀態紀錄，讓 Request 變成 stateful 的機制

Cookie：實踐 session 機制的一種方法

##  `include`、`require`、`include_once`、`require_once` 的差別
1. require 和 include 兩者都是用來引入資料，once 都是避免重複引入
2. 在執行時如果發生錯誤 Require will produce a fatal error (E_COMPILE_ERROR) and stop the script. Include will only produce a warning (E_WARNING) and the script will continue.
