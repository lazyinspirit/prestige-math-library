---
id: "lem-w-one-two-is-a-hilbert-space"
kind: "lemma"
title: "The Sobolev space $H^1$ is a Hilbert space"
status: published
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 0
deps:
  - "cor-inner-product-induces-a-norm"
  - "def-complex-lp-and-euclidean-test-function-conventions"
  - "def-countable-choice"
  - "def-hilbert-space"
  - "def-hk-and-hk-zero-notation"
  - "def-inner-product-space"
  - "def-l-p-space-as-a-quotient-by-null-functions"
  - "def-real-and-complex-inner-product-space"
  - "def-sobolev-space-wkp-and-its-norm"
  - "def-wkp-zero-as-a-sobolev-closure"
  - "lem-closed-subspace-of-a-banach-space-is-banach"
  - "lem-l-two-with-the-integral-pairing-is-a-hilbert-space"
  - "lem-sobolev-norm-is-well-defined-and-definite"
  - "thm-complex-holder-minkowski-and-the-quotient-norm"
  - "thm-holder-inequality-for-integrals"
  - "thm-metric-closure-characterisation"
  - "thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§3.5, the $H^1$ inner product and the associated norm, printed pp. 58–60"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext, 2011, complete 614-page text)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
      locator: "§9.1, the Hilbert structure of $W^{1,2}$ and the inner product $\\int(\\nabla u\\cdot\\nabla v+uv)$, printed pp. 263–271"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (archived 2025 author manuscript)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§10.1, $H^1(U)$ with the inner product used to solve the Dirichlet problem, printed pp. 223–226"
---

## Statement

Assume Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be open, $n\ge1$, and $\mathbb K\in\{\mathbb R,\mathbb C\}$. On $H^1(\Omega)=W^{1,2}(\Omega;\mathbb K)$ ([[def-sobolev-space-wkp-and-its-norm]], [[def-hk-and-hk-zero-notation]]) define $$(u,v)_{H^1}:=(u,v)_{L^2}+\sum_{i=1}^n(D_iu,D_iv)_{L^2},$$ with the $L^2$ inner product of [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]. Then $(\cdot,\cdot)_{H^1}$ is an inner product on the Sobolev classes whose induced norm is the $W^{1,2}$ norm of [[def-sobolev-space-wkp-and-its-norm]], and $H^1(\Omega)$ is a Hilbert space for it. The zero-boundary space $H^1_0(\Omega)$ is a closed subspace of $H^1(\Omega)$ ([[def-wkp-zero-as-a-sobolev-closure]]) and hence a Hilbert space for the restricted inner product. The pairing is linear in the first argument and conjugate-linear in the second, in the convention of [[def-real-and-complex-inner-product-space]].

## Facts & Assumptions

**Given:** Countable Choice; an open $\Omega\subseteq\mathbb R^n$, $n\ge1$; a field $\mathbb K\in\{\mathbb R,\mathbb C\}$; the space $H^1(\Omega)=W^{1,2}(\Omega;\mathbb K)$ with index set $\mathcal A_1=\{\alpha\in\mathbb N_0^n:|\alpha|\le1\}=\{0,e_1,\ldots,e_n\}$ and the pairing $(u,v)_{H^1}:=(u,v)_{L^2}+\sum_{i=1}^n(D_iu,D_iv)_{L^2}$.

[F1] Sobolev structure: each $D^\alpha u$ is a well-defined $L^2$ class and the $W^{1,2}$ norm is $\|u\|_{W^{1,2}}=\bigl(\sum_{\alpha\in\mathcal A_1}\|D^\alpha u\|_{L^2}^2\bigr)^{1/2}$; $H^1(\Omega)=W^{1,2}(\Omega;\mathbb K)$ by notation ([[def-sobolev-space-wkp-and-its-norm]], [[def-hk-and-hk-zero-notation]], [[lem-sobolev-norm-is-well-defined-and-definite]], [[def-countable-choice]]).

[F2] $L^2$ is a Hilbert space for the integral pairing: on real $L^2$ the pairing $\int fg$ and on complex $L^2$ the pairing $\int f\overline g$ are well-defined inner products with $\langle f,f\rangle=\|f\|_2^2$, complete for the quotient $L^2$ norm ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]], [[def-l-p-space-as-a-quotient-by-null-functions]], [[thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]], [[def-complex-lp-and-euclidean-test-function-conventions]]).

[F3] An inner product is linear in the first argument, conjugate-symmetric, and positive definite; its induced length is a norm, and a Hilbert space is an inner-product space complete for that norm ([[def-inner-product-space]], [[def-real-and-complex-inner-product-space]], [[cor-inner-product-induces-a-norm]], [[def-hilbert-space]]).

[F4] H\"older: for $L^2$ classes $f,g$, $\bigl|\int f\overline g\bigr|\le\|f\|_2\|g\|_2$, with the real form $|\int fg|\le\|f\|_2\|g\|_2$ ([[thm-complex-holder-minkowski-and-the-quotient-norm]], [[thm-holder-inequality-for-integrals]]).

[F5] $C_c^\infty(\Omega;\mathbb K)$ is a $\mathbb K$-vector space of test functions, and $H^1_0(\Omega)$ is its closure in $H^1$: explicitly, $u\in H^1_0(\Omega)$ if and only if for every $\delta>0$ there is a test function $\varphi$ with $\|u-\varphi\|_{W^{1,2}}<\delta$. A closure is closed and is the smallest closed superset ([[def-complex-lp-and-euclidean-test-function-conventions]], [[def-wkp-zero-as-a-sobolev-closure]], [[thm-metric-closure-characterisation]]).

[F6] A closed linear subspace of a Banach space, with the restricted norm, is a Banach space ([[lem-closed-subspace-of-a-banach-space-is-banach]]).



## Proof

1.1 The pairing is a well-defined inner product: each summand $(D^\alpha u,D^\alpha v)_{L^2}$ is the $L^2$ pairing of the well-defined classes $D^\alpha u$ and $D^\alpha v$, hence representative-independent; each is linear in the first argument and conjugate-linear in the second over $\mathbb K$, and conjugate-symmetric. A finite sum of maps with these properties again has them, so $(u,v)_{H^1}$ is well defined on classes, linear in $u$, conjugate-linear in $v$ and conjugate-symmetric. It is positive definite, since $(u,u)_{H^1}=\sum_{\alpha\in\mathcal A_1}\|D^\alpha u\|_{L^2}^2\ge0$ equals $0$ only when every $D^\alpha u=0$, in particular $u=D^0u=0$, while $u=0$ plainly gives $0$. [F1, F2, F3]

1.2 $H^1_0(\Omega)$ is a linear subspace. It contains the zero class, as the zero test function shows. Let $u,v\in H^1_0(\Omega)$ and $a,b\in\mathbb K$, and let $\delta>0$. Using the test-function approximation of [F5], choose test functions $\varphi,\psi$ with $\|u-\varphi\|_{W^{1,2}}<\delta/(2(|a|+|b|+1))$ and $\|v-\psi\|_{W^{1,2}}<\delta/(2(|a|+|b|+1))$; then $a\varphi+b\psi$ is again a test function, and $\|(au+bv)-(a\varphi+b\psi)\|_{W^{1,2}}\le|a|\,\|u-\varphi\|_{W^{1,2}}+|b|\,\|v-\psi\|_{W^{1,2}}<\delta$. So $au+bv\in H^1_0(\Omega)$; the space is a subspace and, being a closure, it is closed in $H^1(\Omega)$. [F5, algebra]

2.1 Its induced norm is the Sobolev norm: $(u,u)_{H^1}=\sum_{\alpha\in\mathcal A_1}\|D^\alpha u\|_{L^2}^2=\|u\|_{W^{1,2}}^2$, so the induced length is $\|u\|_{W^{1,2}}$. [F1, F2, step 1.1, algebra]

3.1 Completeness: let $(u_m)$ be a Cauchy sequence in $H^1$. For each $\alpha\in\mathcal A_1$ the inequality $\|D^\alpha u_m-D^\alpha u_l\|_{L^2}\le\|u_m-u_l\|_{W^{1,2}}$ shows that $(D^\alpha u_m)_m$ is Cauchy in $L^2$, so it has a limit class $f_\alpha$. Fix $i$ and a test function $\varphi$. The weak-derivative identity gives $\int_\Omega u_m\,D_i\varphi\,dx=-\int_\Omega D_iu_m\,\varphi\,dx$ for every $m$; H\"older's inequality makes both sides converge to $\int_\Omega f_0\,D_i\varphi\,dx$ and $-\int_\Omega f_i\,\varphi\,dx$, respectively, where $f_0$ is the limit of the classes $u_m=D^0u_m$. Hence $\int f_0D_i\varphi=-\int f_i\varphi$ for every test function $\varphi$, so $f_0\in W^{1,2}(\Omega;\mathbb K)$ with $D_if_0=f_i$, and $\|u_m-f_0\|_{W^{1,2}}^2=\sum_{\alpha\in\mathcal A_1}\|D^\alpha u_m-f_\alpha\|_{L^2}^2\to0$. Thus every Cauchy sequence in $H^1$ converges in $H^1$: the space is complete in its Sobolev norm. [F1, F2, F4, step 2.1]

4.1 Consequences for the pairing: by steps 1.1, 2.1 the pairing is an inner product inducing the Sobolev norm, and by step 3.1 the space is complete for that norm; therefore $H^1(\Omega)$ is a Hilbert space over $\mathbb K$ for the pairing. [F1, F3, step 1.1, step 2.1, step 3.1]

5.1 $H^1_0(\Omega)$ is a Hilbert space: it is a closed linear subspace of the Hilbert space $H^1(\Omega)$, hence complete for the restricted norm by [F6] applied to the underlying Banach space, and the restriction of the inner product is an inner product whose induced norm is the restriction of the Sobolev norm. [F3, F5, F6, step 4.1, step 1.2]

6.1 The pairing $(\cdot,\cdot)_{H^1}$ is therefore an inner product on $H^1(\Omega)$ inducing the $W^{1,2}$ norm, making $H^1(\Omega)$ a Hilbert space, while $H^1_0(\Omega)$ is a closed subspace and a Hilbert space for the restricted pairing; the pairing is linear in the first argument and conjugate-linear in the second, as required. [step 4.1, step 5.1] ∎ 