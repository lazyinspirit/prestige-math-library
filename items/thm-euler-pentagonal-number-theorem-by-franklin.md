---
id: thm-euler-pentagonal-number-theorem-by-franklin
kind: theorem
title: "Euler's pentagonal number theorem by Franklin's involution"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [cor-distinct-partitions-have-product-generating-function,
       def-partition-counting-functions-and-restricted-families,
       def-ferrers-young-diagram-conjugate-partition-and-durfee-square]
justified_by: []
aliases: []
landmark: true
proof_strategy: sign-reversing-involution
verification:
  audited: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Andrew Lin, 18.212 S19 Algebraic Combinatorics, Lecture 21: Partition theory (cont.). Franklin's combinatorial proof of Euler's pentagonal number theorem and more"
      url: "https://ocw.mit.edu/courses/18-212-algebraic-combinatorics-spring-2019/a01850ea8d13145b190c70cc02976f57_MIT18_212S19_lec21.pdf"
    - title: "Darij Grinberg, Enumerative Combinatorics: class notes"
      url: "https://www.cip.ifi.lmu.de/~grinberg/t/19fco/n/n.pdf"
pipeline_run: null
---

## Statement

In $\mathbb{Z}\llbracket x\rrbracket$,

$$\prod_{m \ge 1}(1-x^m)=\sum_{r \in \mathbb{Z}}(-1)^r x^{r(3r-1)/2}.$$

Equivalently,

$$\prod_{m \ge 1}(1-x^m)=1+\sum_{r \ge 1}(-1)^r\left(x^{r(3r-1)/2}+x^{r(3r+1)/2}\right).$$

## Facts & Assumptions

**Given:** for each $n \ge 0$, let $q_e(n)$ and $q_o(n)$ denote the numbers of partitions of $n$ into an even, respectively odd, number of distinct parts.

[F1] A partition into distinct parts is a finite strictly decreasing list of positive integers; $q_e(n)$ and $q_o(n)$ count the even-length and odd-length such partitions of $n$ ([[def-partition-counting-functions-and-restricted-families]]).

[F2] Expanding $\prod_{m \ge 1}(1-x^m)$ chooses each part size $m$ either not at all or once, with sign $-1$ when it is chosen, so the coefficient of $x^n$ is $q_e(n)-q_o(n)$.

## Proof

**Proof technique:** sign-reversing involution.

1.1 Let $\lambda=(\lambda_1>\cdots>\lambda_\ell)$ be a nonempty partition into distinct parts. Write $s=\lambda_\ell$ for its smallest part, and let $t$ be the largest index such that $\lambda_i=\lambda_1-i+1$ for every $1 \le i \le t$. Thus the first $t$ rows form the maximal upper-right staircase. If $s \le t$ and $\lambda \ne (2s-1,2s-2,\dots,s)$, define $\alpha(\lambda)$ by deleting the last part $s$ and adding $1$ to each of the first $s$ parts. If $s>t$ and $\lambda \ne (2t,2t-1,\dots,t+1)$, define $\beta(\lambda)$ by subtracting $1$ from each of the first $t$ parts and adjoining a new last part $t$. [F1, construct]

2.1 In the first case of step 1.1, the partition $\alpha(\lambda)$ is still distinct: the first $s$ parts remain strictly decreasing, the last changed part satisfies $\lambda_s+1>\lambda_{s+1}$ because those rows were consecutive, and deleting the old last part decreases the number of parts by $1$. The first $s$ parts of $\alpha(\lambda)$ are consecutive and its smallest part is larger than $s$, so $\alpha(\lambda)$ falls under the second construction with parameter $t=s$, and $\beta(\alpha(\lambda))=\lambda$. [step 1.1, algebra]

2.2 In the second case of step 1.1, the partition $\beta(\lambda)$ is still distinct: maximality of $t$ gives $\lambda_t-1>\lambda_{t+1}$, while the new last part $t$ is smaller than the previous smallest part because $s>t$. The first $t$ parts of $\beta(\lambda)$ are consecutive and its smallest part is exactly $t$, so $\beta(\lambda)$ falls under the first construction with parameter $s=t$, and $\alpha(\beta(\lambda))=\lambda$. Thus steps 2.1 and 2.2 define a sign-reversing involution on all nonexceptional nonempty distinct partitions. [step 1.1, algebra]

2.3 The empty partition contributes the constant term $1$. The only nonempty distinct partitions excluded from step 1.1 are the two staircase families $(2k-1,2k-2,\dots,k)$ and $(2k,2k-1,\dots,k+1)$. Their sizes are $k+(k+1)+\cdots+(2k-1)=k(3k-1)/2$ and $(k+1)+(k+2)+\cdots+2k=k(3k+1)/2$, and each has exactly $k$ parts, so each contributes the sign $(-1)^k$. [step 1.1, algebra]

3.1 By step 2.2, all nonexceptional nonempty distinct partitions cancel in opposite-parity pairs. Step 2.3 leaves only the empty partition and the two exceptional staircase families, so [F2] gives $\prod_{m \ge 1}(1-x^m)=1+\sum_{k \ge 1}(-1)^k(x^{k(3k-1)/2}+x^{k(3k+1)/2})$, equivalently the two-sided sum over $r \in \mathbb{Z}$. [F2, step 2.2, step 2.3] ∎
