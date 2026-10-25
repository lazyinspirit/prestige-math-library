---
id: lem-linucb-trace-determinant-bound
kind: lemma
title: Trace control of the regularized design determinant
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
verification:
  precheck: pass
deps: [cor-real-spectral-theorem-for-self-adjoint-endomorphisms,
       def-determinant-of-a-square-matrix,
       def-euclidean-inner-product,
       def-matrix-product-and-identity-matrix,
       def-natural-logarithm,
       thm-am-gm,
       thm-determinant-multiplicative,
       thm-determinant-of-transpose,
       thm-determinant-of-a-triangular-matrix,
       thm-natural-logarithm-laws]
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
      locator: "§19.3, Lemma 19.4 proof, determinant and trace bound."
    - title: "Yasin Abbasi-Yadkori, Dávid Pál, and Csaba Szepesvári, Online Least Squares Estimation with Self-Normalized Processes: An Application to Bandit Problems"
      url: "https://arxiv.org/pdf/1102.2670"
      locator: "Lemma 4, PDF p. 4."
---

## Statement

Let $d,n\ge1$, let $\lambda>0$, let $L\ge0$, and let $a_1,\ldots,a_n\in\mathbb R^d$ satisfy $\|a_t\|_2\le L$. Put $V_t=\lambda I_d+\sum_{s=1}^t a_sa_s^{\mathsf T}$ and $V_0=\lambda I_d$, and define $\operatorname{tr}(M)=\sum_{i=1}^d M_{ii}$. Then

$$0<\det V_t\quad(0\le t\le n),\qquad \log\!\left(\frac{\det V_n}{\det V_0}\right)\le d\log\!\left(1+\frac{nL^2}{d\lambda}\right).$$

## Statement references

[Tor Lattimore and Csaba Szepesvári, *Bandit Algorithms*, §19.3, Lemma 19.4](https://tor-lattimore.com/downloads/book/book.pdf)

[Abbasi-Yadkori, Pál, and Szepesvári, Lemma 4](https://arxiv.org/pdf/1102.2670)

## Facts & Assumptions

**Given:** Positive integers $d,n$, reals $\lambda>0$ and $L\ge0$, and vectors $a_t\in\mathbb R^d$ with $\|a_t\|_2\le L$.

[F1] [[def-euclidean-inner-product]]: $\|x\|_2^2=x^{\mathsf T}x$ and the standard inner product is positive definite.

[F2] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: every real symmetric matrix has an orthonormal eigenbasis.

[F3] [[def-determinant-of-a-square-matrix]], [[thm-determinant-multiplicative]], and [[thm-determinant-of-transpose]]: determinant is defined by the Leibniz formula, is multiplicative, and is unchanged by transpose; a diagonal determinant is the product of its diagonal entries by [[thm-determinant-of-a-triangular-matrix]].

[F4] [[thm-am-gm]]: for positive reals $\mu_1,\ldots,\mu_d$, $\prod_i\mu_i\le(\frac1d\sum_i\mu_i)^d$.

[F5] [[thm-natural-logarithm-laws]]: the natural logarithm is strictly increasing on positive reals and $\log(x^d)=d\log x$ for $x>0$.

## Proof

1.1 For every nonzero $x\in\mathbb R^d$, $$x^{\mathsf T}V_nx=\lambda\|x\|_2^2+\sum_{t=1}^n(a_t^{\mathsf T}x)^2>0.$$ Thus $V_n$ is symmetric positive definite. By [F2], choose an orthogonal matrix $Q$ and positive eigenvalues $\mu_1,\ldots,\mu_d$ with $V_n=Q\operatorname{diag}(\mu_1,\ldots,\mu_d)Q^{\mathsf T}$. [given, F1, F2, algebra, choose]

1.2 For each $0\le t\le n$, $x^{\mathsf T}V_tx=\lambda\|x\|_2^2+\sum_{s=1}^t(a_s^{\mathsf T}x)^2>0$ for every nonzero $x$. Thus $V_t$ is symmetric positive definite. By [F2], write $V_t=Q_t\operatorname{diag}(\nu_1,\ldots,\nu_d)Q_t^{\mathsf T}$ with $Q_t$ orthogonal; positive definiteness gives $\nu_i>0$ for each $i$. By [F3], $\det(Q_t^{\mathsf T})=\det(Q_t)$ and $\det(\operatorname{diag}(\nu_1,\ldots,\nu_d))=\prod_i\nu_i$. Since $Q_t^{\mathsf T}Q_t=I_d$, multiplicativity gives $\det(Q_t)^2=1$, hence $\det V_t=\prod_i\nu_i>0$. [given, F1, F2, F3, algebra]

2.1 Since $Q^{\mathsf T}Q=I_d$, [F3] gives $(\det Q)^2=1$. Applying [F3] to the diagonalization yields $\det V_n=(\det Q)(\prod_i\mu_i)(\det Q^{\mathsf T})=\prod_i\mu_i>0$. Also, expanding the diagonal entries of $Q\operatorname{diag}(\mu_i)Q^{\mathsf T}$ gives $$\operatorname{tr}(V_n)=\sum_{j=1}^d\mu_j\sum_{i=1}^d Q_{ij}^2=\sum_{j=1}^d\mu_j,$$ because each column of $Q$ has Euclidean norm one. [step 1.1, F3, algebra]

3.1 By [F4] and step 2.1, $$\det V_n=\prod_i\mu_i\le\left(\frac{\sum_i\mu_i}{d}\right)^d=\left(\frac{\operatorname{tr}(V_n)}d\right)^d.$$ The definition of $V_n$ gives $\operatorname{tr}(V_n)=d\lambda+\sum_t\|a_t\|_2^2\le d\lambda+nL^2$. [given, step 2.1, F1, F4, algebra]

4.1 Since $V_0=\lambda I_d$ is diagonal, [F3] gives $\det V_0=\lambda^d>0$. Dividing step 3.1 by this positive number yields $$\frac{\det V_n}{\det V_0}\le\left(1+\frac{nL^2}{d\lambda}\right)^d.$$ [given, F3, step 3.1, algebra]

5.1 The two sides in step 4.1 are positive by steps 2.1 and 4.1. Applying the increasing natural logarithm and then [F5] gives the claimed bound. [step 2.1, step 4.1, step 1.2, F5, algebra] ∎
