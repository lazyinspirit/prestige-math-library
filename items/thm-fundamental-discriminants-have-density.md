---
id: thm-fundamental-discriminants-have-density
kind: theorem
title: "Positive and negative fundamental discriminants have equal density"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps: [def-fundamental-quadratic-discriminant, def-squarefree-positive-integer, def-number-theoretic-mobius-function, thm-euler-product-for-riemann-zeta, cor-basel-sum-by-residues]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Bhargava, Shankar, and Tsimerman, On the Davenport–Heilbronn Theorems and Second-Order Terms, equation (60)"
      url: "https://arxiv.org/pdf/1005.0672"
      locator: "§8.5, equation (60)"
    - title: "J. S. Milne, Algebraic Number Theory, §5"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "§5, quadratic discriminants"
verification: {}
---

## Statement

For $X>0$, let $D_+(X)$ be the set of positive fundamental quadratic discriminants less than $X$, and let $D_-(X)$ be the set of negative fundamental quadratic discriminants $D$ with $-X<D<0$. Then
$$|D_+(X)|=\frac{3}{\pi^2}X+O(\sqrt X),\qquad |D_-(X)|=\frac{3}{\pi^2}X+O(\sqrt X).$$
In particular, both counts divided by $X$ tend to $3/\pi^2$.

## Statement references

[[def-fundamental-quadratic-discriminant]]

[Bhargava, Shankar, and Tsimerman, §8.5, equation (60)](https://arxiv.org/pdf/1005.0672)

[Milne, *Algebraic Number Theory*, §5](https://www.jmilne.org/math/CourseNotes/ANTc.pdf)

## Facts & Assumptions

**Given:** A real $X>0$ and the fundamental-discriminant convention in the definition.

[F1] For $n\ge1$, $\mu(n)^2$ is $1$ exactly when $n$ is squarefree and is $0$ otherwise; the Möbius function vanishes on integers divisible by a prime square. [[def-number-theoretic-mobius-function]] [[def-squarefree-positive-integer]]

[F2] The Euler product at $2$ and the Basel sum give $\prod_{p>2}(1-p^{-2})=(1-2^{-2})^{-1}/\zeta(2)=8/\pi^2$. [[thm-euler-product-for-riemann-zeta]] [[cor-basel-sum-by-residues]]

[F3] A nonzero integer $D$ is fundamental exactly when it is squarefree with $D\equiv1\pmod4$, or $D=4m$ with $m$ squarefree and $m\equiv2$ or $3\pmod4$. [[def-fundamental-quadratic-discriminant]]

## Proof
1.1 For $a\in\{1,3\}$ and $Y\ge1$, let $S_a(Y)$ count positive squarefree $n\le Y$ with $n\equiv a\pmod4$. The identity $1_{n\text{ squarefree}}=\sum_{d^2\mid n}\mu(d)$ follows by multiplying $1-1$ over the primes whose squares divide $n$. Since $n$ is odd, only odd $d$ occur and $d^2\equiv1\pmod4$. For each such $d$, the number of $m\le Y/d^2$ with $m\equiv a\pmod4$ is $Y/(4d^2)+O(1)$. Summing over $d\le\sqrt Y$ gives $$S_a(Y)=\frac{Y}{4}\sum_{\substack{d\le\sqrt Y\\d\text{ odd}}}\frac{\mu(d)}{d^2}+O(\sqrt Y)=\frac{2Y}{\pi^2}+O(\sqrt Y),$$ where absolute convergence and [F2] evaluate the limiting sum as $\prod_{p>2}(1-p^{-2})$, and its tail is $O(Y^{-1/2})$. [F1, F2, algebra]

2.1 A positive squarefree integer $n\equiv2\pmod4$ has the form $2m$ with $m$ odd squarefree. Thus its count up to $Y$ is $S_1(Y/2)+S_3(Y/2)=2Y/\pi^2+O(\sqrt Y)$. The same residue counts apply to absolute values of negative integers. [step 1.1, algebra]

3.1 By [F3], the positive discriminants consist of squarefree $D\equiv1\pmod4$ up to $X$, and $D=4m$ with squarefree $m\equiv2,3\pmod4$ up to $X/4$. Steps 1.1–1.2 give $2X/\pi^2+4(X/4)/\pi^2+O(\sqrt X)=3X/\pi^2+O(\sqrt X)$. [F3, step 1.1, step 2.1, algebra]

4.1 For negative $D$, the odd case $D=-n\equiv1\pmod4$ has $n\equiv3\pmod4$ and contributes $2X/\pi^2+O(\sqrt X)$. In the even case $D=-4n$, the condition $-n\equiv2,3\pmod4$ means $n\equiv2,1\pmod4$; the range is $n<X/4$, so this contributes $4(X/4)/\pi^2+O(\sqrt X)$. Adding gives the negative count in the statement. Dividing both estimates by $X$ proves the limits. [F3, step 1.1, step 2.1, algebra] ∎
