# 字符串子串匹配KMP算法

## 时间复杂度

O(m + n)

## 空间复杂度
O(n)

## 说明
KMP算法思想为：利用之前已经部分匹配这个有效信息，保持目标串位置i不回溯，通过修改模式串位置j，让模式串尽量地移动到有效的位置

![深入了解](https://blog.csdn.net/v_july_v/article/details/7041827)


## 实现

```javascript
// 字符串子串匹配 KMP算法
function KMP(str, pattern) {
    // 获取模式子串的next数组
    var next = getNext(pattern);

    var strIndex = 0,
        patternIndex = 0;
    
    while (strIndex < str.length && patternIndex < pattern.length) {
        // 模式串next数组第一位是-1，这里需要判断此边界情况
        // 目标串与模式串该位置相同，则继续往下匹配
        if (patternIndex === -1 || str[strIndex] === pattern[patternIndex]) {
            patternIndex++;
            strIndex++;
        }
        // 不相同，则更新模式串匹配位置的下标（从next数组中取），防止计算冗余
        else {
            patternIndex = next[patternIndex];
        }
    }
    
    // 能够匹配完模式串，则返回模式串首个字符在目标串中的位置
    if (patternIndex === pattern.length) {
        return strIndex - patternIndex;
    } else {
        return -1;
    }
}

// 获取模式串的next数组，next数组为KMP算法的核心
function getNext(pattern) {
    // 设置第一位的next值为-1
    var next = [-1];
    // 以下两个值指代位置模式串中位置i所对应的next值为k
    var i = 0;
    var k = -1;
    
    while (i < pattern.length) {
        // 初始时，或者后缀与前缀相等
        if (k === -1 || pattern[i] === pattern[k]) {
            // 对应于推导公式 next[i + 1] = k + 1;
            next[++i] = ++k;
        }
        
        // 否则递归更新k值
        else {
            k = next[k];
        }
    }

    return next;
}

// 测试
function findIndex(str, pattern) {
    console.log('indexOf:', str.indexOf(pattern));
    console.log('KMP:', KMP(str, pattern));
}

findIndex('abcddsadadaddsadsd', 'ddsad'); // -1  -1

findIndex('BBC ABCDAB ABCDABCDABDE', 'ABCDABD'); // 15  15



```
