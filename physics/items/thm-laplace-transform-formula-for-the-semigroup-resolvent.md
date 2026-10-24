---
id: thm-laplace-transform-formula-for-the-semigroup-resolvent
kind: theorem
title: "Laplace transform formula for the resolvent"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 5
deps:
  - def-dependent-choice
  - def-resolvent-of-a-closed-operator
  - def-infinitesimal-generator-of-a-c-zero-semigroup
  - lem-integrated-semigroup-orbits-belong-to-the-generator-domain
  - lem-semigroup-generator-commutes-with-orbits-on-its-domain
  - thm-generators-are-closed-and-densely-defined
  - lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves
  - lem-linearity-of-the-bochner-integral
  - lem-average-convergence-of-a-continuous-banach-valued-function
  - thm-exponential-bound-for-a-c-zero-semigroup
  - lem-bochner-integral-norm-inequality
  - def-bochner-integrable-function
  - thm-bochner-integrability-criterion
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Klaus-Jochen Engel and Rainer Nagel, One-Parameter Semigroups for Linear Evolution Equations, Graduate Texts in Mathematics 194 (complete author-hosted monograph)"
      url: "https://www.math.uni-tuebingen.de/de/forschung/agfa/members/engel-nagel_one-parameter-semigroups.pdf/%40%40download/file/engel-nagel_one-parameter-semigroups.pdf"
      locator: "Chapter II Section 1, Theorem 1.10, printed pp. 55-56"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 11 Section 11.4, Lemma 11.13, printed pp. 262-263"
    - title: "Mathew A. Johnson, Math 951 Lecture Notes, Chapter 6: Introduction to Semigroup Methods, University of Kansas (complete 37-page chapter)"
      url: "https://matjohn.ku.edu/sites/matjohn/files/files/Math951Notes_Ch6A.pdf"
      locator: "Chapter 6 Section 2.2, the Laplace-transform derivation following Theorem 3, printed p. 14"
verification:
  precheck: pass
---

## Statement

Assume Dependent Choice ([[def-dependent-choice]]). Let $(T(t))_{t\ge0}$ be a strongly continuous semigroup on a Banach space $X$ with generator $A$, and let $M\ge1$, $\omega\in\mathbb R$ satisfy $\|T(t)\| \le Me^{\omega t}$ for all $t\ge0$ ([[thm-exponential-bound-for-a-c-zero-semigroup]]). Then for every real $\lambda>\omega$: $\lambda\in\rho(A)$; for every $x\in X$ the improper Bochner integral $$\int_0^\infty e^{-\lambda t}T(t)x\,dt:=\lim_{R\to\infty}\int_0^R e^{-\lambda t}T(t)x\,dt$$ converges in $X$; and $$R(\lambda,A)x=\int_0^\infty e^{-\lambda t}T(t)x\,dt,\qquad \|R(\lambda,A)\| \le\frac{M}{\lambda-\omega}.$$ In particular $(\omega,\infty)\subseteq\rho(A)$.

## Facts & Assumptions

**Given:** Dependent Choice; A strongly continuous semigroup $(T(t))_{t\ge0}$ on a Banach space $X$ with generator $A$, constants $M\ge1$, $\omega\in\mathbb R$ with $\|T(t)\|\le Me^{\omega t}$, and a real $\lambda>\omega$; for $R>0$, $J_Rx:=\int_0^Re^{-\lambda t}T(t)x\,dt$.

[F1] The exponential bound and the Bochner framework: continuous curves on compact intervals are Bochner integrable, $\|\int_Eh\|\le\int_E\|h\|$, and $X$ is complete ([[thm-exponential-bound-for-a-c-zero-semigroup]], [[def-bochner-integrable-function]], [[thm-bochner-integrability-criterion]], [[lem-bochner-integral-norm-inequality]]).

[F2] The generator is closed and densely defined ([[thm-generators-are-closed-and-densely-defined]]), for $x\in D(A)$ the orbit is differentiable with $T(t)x\in D(A)$ and $T(t)Ax=AT(t)x$ ([[lem-semigroup-generator-commutes-with-orbits-on-its-domain]]), and the fundamental theorem of calculus holds for continuous curves with continuous derivative ([[lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves]], [[def-infinitesimal-generator-of-a-c-zero-semigroup]]).

[F3] Linearity of the Bochner integral ([[lem-linearity-of-the-bochner-integral]]), and average convergence for continuous curves ([[lem-average-convergence-of-a-continuous-banach-valued-function]]).

[F4] Resolvent vocabulary: $\rho(A)$ consists of the scalars with $\lambda I-A$ bijective and bounded inverse, and then $R(\lambda,A)=(\lambda I-A)^{-1}\in\mathcal B(X)$ ([[def-resolvent-of-a-closed-operator]]).



## Proof

**Proof technique:** direct: define the Laplace integral as a norm limit of finite integrals, verify the two inverse identities on $D(A)$, and transfer them to $X$ by closedness and density.

1.1 Convergence and bound: for $0<R<R'$ the curves $e^{-\lambda t}T(t)x$ are continuous, hence Bochner integrable on compacts, and [F1] gives $\|J_{R'}x-J_Rx\|\le\int_R^{R'}Me^{(\omega-\lambda)t}\|x\|\,dt\le M\|x\|\frac{e^{(\omega-\lambda)R}}{\lambda-\omega}\to0$ as $R\to\infty$. Thus $(J_Rx)_R$ is Cauchy for every $x$, so $Jx:=\lim_{R\to\infty}J_Rx$ exists, and the same estimate at $R=0$ gives $\|Jx\|\le\frac{M}{\lambda-\omega}\|x\|$; the map $x\mapsto Jx$ is linear. [F1, F3]

1.2 For $x\in D(A)$ the curve $g(t):=e^{-\lambda t}T(t)x$ is differentiable with $g'(t)=-\lambda e^{-\lambda t}T(t)x+e^{-\lambda t}T(t)Ax=-e^{-\lambda t}(\lambda I-A)T(t)x$ by [F2]. The pair curve $t\mapsto(e^{-\lambda t}T(t)x,e^{-\lambda t}T(t)Ax)$ is continuous with values in the closed graph $\Gamma(A)\subseteq X\oplus X$, so its Bochner integral lies in $\Gamma(A)$: approximate the pair uniformly on $[0,R]$ by step functions sampled at partition points. Each simple integral is a finite linear combination of graph vectors, hence lies in the graph; the coordinate integrals converge by the norm inequality, and closedness retains their limit. Thus consequently $J_Rx\in D(A)$ and $AJ_Rx=\int_0^Re^{-\lambda t}T(t)Ax\,dt$. [F2]

2.1 Hence, for $x\in D(A)$, $(\lambda I-A)J_Rx=\lambda J_Rx-AJ_Rx=\int_0^R g'(t)\,dt\cdot(-1)$; more explicitly $\lambda J_Rx-AJ_Rx=\int_0^Re^{-\lambda t}(\lambda T(t)x-T(t)Ax)dt=-\int_0^Rg'(t)\,dt=x-e^{-\lambda R}T(R)x$ by the fundamental theorem of calculus [F2], and $\|e^{-\lambda R}T(R)x\|\le Me^{(\omega-\lambda)R}\|x\|\to0$ as $R\to\infty$. [F2, step 1.2]

3.1 Passing to the limit $R\to\infty$ in the identity of [step 2.1]: $J_Rx\to Jx$ and $(\lambda I-A)J_Rx\to x$; since $A$ is closed (hence $\lambda I-A$ is closed), the pair limit gives $Jx\in D(A)$ and $(\lambda I-A)Jx=x$ for every $x\in D(A)$. [F2, step 1.1, step 2.1]

3.2 Likewise $J(\lambda I-A)x=\lim_{R\to\infty}J_R(\lambda I-A)x=\lim_{R\to\infty}\bigl(\lambda J_Rx-AJ_Rx\bigr)=x$ for every $x\in D(A)$, by the same computation as [step 2.1]; note that $(\lambda I-A)x\in X$ is a fixed vector to which the definition of $J$ applies. [F3, step 2.1]

4.1 $\lambda I-A$ is injective: if $(\lambda I-A)x=0$ for $x\in D(A)$, then $x=J(\lambda I-A)x=J0=0$ by [step 3.2]. It is also surjective: for $y\in X$ choose $y_n\in D(A)$ with $y_n\to y$ (density, [F2]); then $(J y_n)$ converges to $Jy$ and $(\lambda I-A)Jy_n=y_n\to y$, so closedness of $\lambda I-A$ gives $Jy\in D(A)$ and $(\lambda I-A)Jy=y$. [F2, step 3.1, step 3.2]

5.1 Therefore $\lambda I-A:D(A)\to X$ is bijective with inverse $J$, which is bounded with $\|J\|\le M/(\lambda-\omega)$; hence $\lambda\in\rho(A)$ and $R(\lambda,A)=J=\int_0^\infty e^{-\lambda t}T(t)x\,dt$ as an improper Bochner integral, with $\|R(\lambda,A)\|\le M/(\lambda-\omega)$. As $\lambda>\omega$ was arbitrary, $(\omega,\infty)\subseteq\rho(A)$. [F4, step 1.1, step 4.1] ∎
