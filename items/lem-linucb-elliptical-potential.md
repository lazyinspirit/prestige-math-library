---
id: lem-linucb-elliptical-potential
kind: lemma
title: The elliptical-potential bound for ridge design matrices
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
verification:
  precheck: pass
deps: [def-cholesky-factorisation-with-positive-diagonal,
       def-determinant-of-a-square-matrix,
       def-euclidean-inner-product,
       def-matrix-product-and-identity-matrix,
       def-natural-logarithm,
       def-ring-matrix-product-identity-and-transpose,
       lem-determinant-rank-one-update-over-a-commutative-ring,
       thm-adjugate-identity-over-a-commutative-ring,
       thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique,
       thm-determinant-multiplicative,
       thm-determinant-of-a-triangular-matrix,
       thm-determinant-of-transpose,
       thm-logarithm-derivative-and-integral,
       thm-natural-logarithm-laws,
       thm-monotonicity-of-the-integral,
       thm-real-square-matrix-invertible-iff-determinant-nonzero]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Tor Lattimore and Csaba Szepesvári, Bandit Algorithms"
      url: "https://tor-lattimore.com/downloads/book/book.pdf"
      locator: "§19.3, complete proof of Lemma 19.4."
    - title: "Yasin Abbasi-Yadkori, Dávid Pál, and Csaba Szepesvári, Online Least Squares Estimation with Self-Normalized Processes: An Application to Bandit Problems"
      url: "https://arxiv.org/pdf/1102.2670"
      locator: "Lemma 4, PDF pp. 4–5."
---

## Statement

Let $d,n\ge1$, let $\lambda>0$, let $V_0=\lambda I_d$, and let $a_1,\ldots,a_n\in\mathbb R^d$. Define $V_t=V_{t-1}+a_ta_t^{\mathsf T}$ and $u_t=a_t^{\mathsf T}V_{t-1}^{-1}a_t$ for $1\le t\le n$. Then every $V_t$ is positive definite, $u_t\ge0$, and

$$\det V_t=\det V_{t-1}(1+u_t)\quad(1\le t\le n),\qquad \sum_{t=1}^n\min\{1,u_t\}\le2\log\!\left(\frac{\det V_n}{\det V_0}\right).$$

## Statement references

[Tor Lattimore and Csaba Szepesvári, *Bandit Algorithms*, §19.3, Lemma 19.4](https://tor-lattimore.com/downloads/book/book.pdf)

[Abbasi-Yadkori, Pál, and Szepesvári, Lemma 4](https://arxiv.org/pdf/1102.2670)

## Facts & Assumptions

**Given:** Positive integers $d,n$, a real $\lambda>0$, and vectors $a_1,\ldots,a_n\in\mathbb R^d$.

[F1] [[def-euclidean-inner-product]] and [[def-matrix-product-and-identity-matrix]]: $x^{\mathsf T}y=\langle x,y\rangle$ and $x^{\mathsf T}Mx=\langle x,Mx\rangle$ in standard coordinates.

[F2] [[def-cholesky-factorisation-with-positive-diagonal]] and [[thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique]]: a real symmetric positive-definite matrix $V$ factors as $V=LL^{\mathsf T}$ with $L$ lower triangular and positive diagonal.

[F3] [[def-determinant-of-a-square-matrix]], [[thm-determinant-multiplicative]], [[thm-determinant-of-transpose]], and [[thm-determinant-of-a-triangular-matrix]]: determinant is defined by the Leibniz formula, is multiplicative, is unchanged by transpose, and for triangular $L$ equals the product of its diagonal entries.

[F4] [[lem-determinant-rank-one-update-over-a-commutative-ring]]: $\det(V+uv^{\mathsf T})=\det(V)+v^{\mathsf T}\operatorname{adj}(V)u$.

[F5] [[thm-adjugate-identity-over-a-commutative-ring]]: $V\operatorname{adj}(V)=\det(V)I$.

[F6] [[thm-real-square-matrix-invertible-iff-determinant-nonzero]]: a real square matrix with nonzero determinant is invertible.

[F7] [[thm-logarithm-derivative-and-integral]] and [[thm-monotonicity-of-the-integral]]: for $x\ge0$, $\log(1+x)=\int_1^{1+x} ds/s$, and pointwise inequalities between integrable functions on an increasing interval give the corresponding integral inequality.

[F8] [[thm-natural-logarithm-laws]]: $\log(xy)=\log x+\log y$ for positive $x,y$.

## Proof

1.1 For every $t\ge0$ and nonzero $x\in\mathbb R^d$, $$x^{\mathsf T}V_tx=\lambda\|x\|_2^2+\sum_{s=1}^t(a_s^{\mathsf T}x)^2>0.$$ Each $V_t$ is symmetric, so it is positive definite. [given, F1, algebra]

1.2 If $u=0$, then $\min\{1,u\}=0=2\log(1+u)$. If $u>0$, the interval $[1,1+u]$ is nondegenerate, so [F7] and $1/s\ge1/(1+u)$ on that interval give $\log(1+u)\ge u/(1+u)$. If $0<u\le1$, then $u/(1+u)\ge u/2$; if $u\ge1$, then $u/(1+u)\ge1/2$. Thus $\min\{1,u\}\le2\log(1+u)$ in every case. [F7, algebra]

2.1 By [F2]–[F3], write $V_t=L_tL_t^{\mathsf T}$ with positive diagonal. Then $\det V_t=(\det L_t)^2=(\prod_{i=1}^d(L_t)_{ii})^2>0$, so [F6] makes $V_t$ invertible. In particular $u_t$ is defined. [step 1.1, F2, F3, F6]

3.1 The inverse of a positive-definite matrix is positive definite: if $a_t\ne0$ and $y=V_{t-1}^{-1}a_t$, then $y\ne0$ and $u_t=a_t^{\mathsf T}V_{t-1}^{-1}a_t=y^{\mathsf T}V_{t-1}y>0$; if $a_t=0$, then $u_t=0$. Thus $u_t\ge0$. [step 1.1, step 2.1, F1, algebra]

3.2 Apply [F4] with $u=v=a_t$ and $V=V_{t-1}$. Since [F5] and invertibility in step 2.1 give $\operatorname{adj}(V_{t-1})=\det(V_{t-1})V_{t-1}^{-1}$, the result is $\det V_t=\det V_{t-1}(1+u_t)$. [step 2.1, F4, F5, algebra]

4.1 Divide the update identities of step 3.2 by the positive determinants of step 2.1 and multiply them for $t=1,\ldots,n$. This gives $\det V_n/\det V_0=\prod_{t=1}^n(1+u_t)$, hence $\log(\det V_n/\det V_0)=\sum_{t=1}^n\log(1+u_t)$ by [F8]. [step 2.1, step 3.2, F8, algebra]

5.1 Apply step 1.2 to each nonnegative $u_t$ from step 3.1 and sum. Step 4.1 identifies the sum of logarithms with $\log(\det V_n/\det V_0)$, proving the claimed bound. [step 3.1, step 4.1, step 1.2, algebra] ∎
