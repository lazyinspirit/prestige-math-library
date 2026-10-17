---
id: lem-rosenbrock-stage-residual-certificate
title: "A computed shifted-system residual has a certified upper bound"
kind: lemma
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
  - lem-product-of-one-plus-deltas-gives-theta-n
  - thm-cauchy-schwarz-finite
  - def-abs-value
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - lem-of-abs-value
  - lem-of-triangle-inequality
proof_strategy: direct
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Chapter 1.1: Floating-point numbers"
      url: "https://fncbook.com/floating-point/"
      locator: "§1.1–§1.1.3: operationwise relative rounding model and range failures"
    - title: "David Bindel, CS 6210 Matrix Computations, Lecture 4: Floating-point summation and dot products"
      url: "https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-09-10.html"
      locator: "Lecture 4, sections ‘Dot products’ and ‘Beyond first order’"
---

## Statement

Let $d\ge1$, $M\in\mathbb R^{d\times d}$, and $x,b\in\mathbb R^d$ be stored real data. Use successful sequential left-to-right dot products and componentwise subtraction in the operationwise model of [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]], with unit roundoff $u>0$ and $du<1$. Put
$$\widehat v_i:=\operatorname{fl}\Bigl(\sum_{j<d}M_{ij}x_j\Bigr),\qquad \widehat r:=\operatorname{fl}(\widehat v-b),\qquad \gamma_d:=\frac{du}{1-du}.$$
For $\|M\|_F=(\sum_{i,j<d}M_{ij}^2)^{1/2}$, define
$$W:=\gamma_d\|M\|_F\|x\|_2+u(\|\widehat v\|_2+\|b\|_2).$$
Then
$$\|\widehat r-(Mx-b)\|_2\le W,\qquad \|Mx-b\|_2\le\|\widehat r\|_2+W.$$
If a norm in these formulas is replaced by an exact or certified upper bound, the resulting value of $\|\widehat r\|_2+W$ remains a certified upper bound for the exact residual.

## Facts & Assumptions

**Given:** The stated successful operationwise evaluations, stored data, and unit roundoff.

[F1] [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]]: each successful real product, addition, or subtraction has relative error at most $u$, and zero operations are exact.

[F2] [[lem-product-of-one-plus-deltas-gives-theta-n]]: a product of $d$ factors $1+\delta_j$ with $|\delta_j|\le u$ and $du<1$ differs from one by at most $\gamma_d=du/(1-du)$.

[F3] [[thm-cauchy-schwarz-finite]]: for real lists $a,b$ of length $d$, $|\sum_j a_jb_j|\le(\sum_j a_j^2)^{1/2}(\sum_j b_j^2)^{1/2}$.

[F4] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: the Euclidean norm satisfies the triangle inequality; [[lem-of-abs-value]]: $|ab|=|a||b|$; and [[lem-of-triangle-inequality]]: $|a+b|\le|a|+|b|$.

## Proof

**Given:** The data in the Statement.

1.1 Fix a row $i$ and put $a_j=M_{ij}x_j$. By [F1], write each rounded product as $p_j=a_j(1+\pi_j)$ and each rounded addition as $s_{j+1}=(s_j+p_j)(1+\eta_j)$, starting with $s_1=p_0$, where $|\pi_j|,|\eta_j|\le u$. For an exact zero operation choose its error parameter to be zero. Unrolling this finite recursion gives $\widehat v_i=\sum_{j<d}a_jc_j$, where $c_0=(1+\pi_0)\prod_{k=1}^{d-1}(1+\eta_k)$ and $c_j=(1+\pi_j)\prod_{k=j}^{d-1}(1+\eta_k)$ for $1\le j<d$. Each coefficient has at most $d$ factors; pad it with factors one and apply [F2] to obtain $|c_j-1|\le\gamma_d$, also when $d=1$. Thus [F4] gives $|\widehat v_i-(Mx)_i|\le\gamma_d\sum_{j<d}|M_{ij}x_j|$, including zero rows and cancellation. [given, F1, F2, F4, algebra]

1.2 Each successful componentwise subtraction has an error $e_i=\widehat r_i-(\widehat v_i-b_i)$ with $|e_i|\le u|\widehat v_i-b_i|$ by [F1]; this includes exact zero results. Squaring and summing gives $\|e\|_2\le u\|\widehat v-b\|_2\le u(\|\widehat v\|_2+\|b\|_2)$ by [F4]. [given, F1, F4, algebra]

2.1 By [F3], $\sum_{j<d}|M_{ij}x_j|\le(\sum_{j<d}M_{ij}^2)^{1/2}\|x\|_2$. Squaring the row bounds from step 1.1, summing over $i$, and taking the nonnegative square root gives $\|\widehat v-Mx\|_2\le\gamma_d\|M\|_F\|x\|_2$. [step 1.1, F3, algebra]

3.1 Since $\widehat r-(Mx-b)=(\widehat v-Mx)+e$, the triangle inequality and steps 2.1 and 1.2 give the first bound. The triangle inequality also gives $\|Mx-b\|_2\le\|\widehat r\|_2+\|\widehat r-(Mx-b)\|_2$, proving the second bound; increasing any norm input to a certified upper bound preserves it. [step 2.1, step 1.2, F4, algebra] ∎
