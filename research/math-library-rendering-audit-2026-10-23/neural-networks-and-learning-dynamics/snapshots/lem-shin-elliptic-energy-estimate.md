---
id: lem-shin-elliptic-energy-estimate
kind: lemma
title: "Elliptic H1 error estimate from the source coefficient bound"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-shin-elliptic-divergence-form-operator
  - def-sobolev-space-wkp-and-its-norm
  - def-wkp-zero-as-a-sobolev-closure
  - def-countable-choice
  - thm-holder-inequality-for-integrals
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Shin, Darbon, and Karniadakis, On the Convergence of Physics-Informed Neural Networks for Linear Second-Order Elliptic and Parabolic Type PDEs"
      url: "https://arxiv.org/pdf/2004.01806"
      locator: "Assumption 3.3 and Appendix E, proof of Theorem 3.9"
---

## Statement

Assume Countable Choice. Let $U\subset\mathbb R^d$ be bounded Lipschitz. Let $A=(a_{ij})$ be a bounded measurable real symmetric matrix field, uniformly elliptic with eigenvalues at least $\lambda_0>0$, and let $b,c,d$ be bounded measurable real coefficient fields satisfying
$$\lambda_0^{-2}(\|b(x)\|^2+\|c(x)\|^2)+\lambda_0^{-1}|d(x)|\le v^2\qquad(x\in U).$$
For the divergence operator, with all divergence derivatives interpreted distributionally,
$$L[e]=\sum_{i,j}D_i(a_{ij}D_j e)+\sum_iD_i(b_i e)+\sum_i c_iD_i e+de,$$
every real $e\in H^1_0(U)\cap C^2(U)\cap C^0(\bar U)$ for which the distribution $L[e]$ is represented by an $L^2(U)$ function satisfies
$$\|e\|_{H^1(U)}^2\le C_E\bigl(\|L[e]\|_{L^2(U)}^2+\|e\|_{L^2(U)}^2\bigr),$$
where $C_E$ depends only on $\lambda_0$ and $v$. The zero-trace condition is required for the integration by parts.

## Statement references
[Shin et al., Appendix E: source elliptic H1 error estimate and coefficient bound](https://arxiv.org/pdf/2004.01806)

[Shin et al., Appendix E: energy estimate, with the lower-order coefficient absorption written out here](https://arxiv.org/pdf/2004.01806)

## Facts & Assumptions

**Given:** The bounded Lipschitz domain, uniformly elliptic symmetric matrix, coefficient bound, zero-trace function, and divergence operator in the Statement.

[A1] Countable Choice is the explicit premise of the zero-boundary Sobolev closure convention ([[def-countable-choice]], [[def-wkp-zero-as-a-sobolev-closure]]).

[F1] $H^1(U)=W^{1,2}(U)$ has norm squared $\|e\|_{L^2(U)}^2+\|\nabla e\|_{L^2(U)}^2$ ([[def-sobolev-space-wkp-and-its-norm]]).

[F2] The divergence operator uses the positive-principal-part convention displayed in [[def-shin-elliptic-divergence-form-operator]].

[F3] $H^1_0(U)$ is the $H^1$-closure of $C_c^\infty(U)$, and the $H^1$ norm contains the $L^2$ norm and weak-gradient norm ([[def-wkp-zero-as-a-sobolev-closure]], [[def-sobolev-space-wkp-and-its-norm]]).

[F4] Hölder's integral inequality at exponents $p=q=2$ bounds the $L^2$ pairings used below ([[thm-holder-inequality-for-integrals]]).

## Proof

**Proof strategy:** integrate against the zero-trace error and absorb lower-order terms by explicit square inequalities.

1.1 By [F3], choose $\phi_n\in C_c^\infty(U)$ with $\phi_n\to e$ in $H^1(U)$. The distributional definition of each divergence term and the ordinary test-function integration by parts give $$\int_U\phi_nL[e]\,dx=-\int_U a_{ij}D_j eD_i\phi_n\,dx-\int_U b_i eD_i\phi_n\,dx+\int_U c_iD_i e\,\phi_n\,dx+\int_U d e\,\phi_n\,dx.$$ All coefficients are bounded and $e,\nabla e,L[e]\in L^2$, so [F4] makes each term continuous under $H^1$ convergence. Taking $n\to\infty$ and using [F2] yields $$-\int_U eL[e]\,dx=\int_U a_{ij}D_j eD_i e\,dx+\int_U b_i eD_i e\,dx-\int_U c_i eD_i e\,dx-\int_U d e^2\,dx.$$ The principal term is at least $\lambda_0\|\nabla e\|_2^2$ by ellipticity. [given, A1, F2, F3, F4, algebra]

2.1 The coefficient bound gives $\|b\|^2+\|c\|^2\le\lambda_0^2v^2$ and $|d|\le\lambda_0v^2$. Hence the absolute value of the two first-order terms is at most $\sqrt2\lambda_0|v|\|e\|_2\|\nabla e\|_2$ by [F4], and the zero-order term is at most $\lambda_0v^2\|e\|_2^2$. The scalar bound $\sqrt2\lambda_0|v|xy\le\frac{\lambda_0}{2}y^2+\lambda_0v^2x^2$ follows by expanding $(\sqrt{\lambda_0/2}\,y-\sqrt{\lambda_0}|v| x)^2\ge0$. Therefore $$-\int_U eL[e]\,dx\ge\frac{\lambda_0}{2}\|\nabla e\|_2^2-2\lambda_0v^2\|e\|_2^2.$$ [given, F4, step 1.1, algebra]

3.1 Since $L[e]\in L^2(U)$, [F4] and step 2.1 imply $$\frac{\lambda_0}{2}\|\nabla e\|_2^2\le\|L[e]\|_2\|e\|_2+2\lambda_0v^2\|e\|_2^2.$$ The elementary square inequality $xy\le x^2/(2\lambda_0)+\lambda_0y^2/2$ follows from $(x/\sqrt{\lambda_0}-\sqrt{\lambda_0}y)^2\ge0$ and gives $$\frac{\lambda_0}{2}\|\nabla e\|_2^2\le\frac{1}{2\lambda_0}\|L[e]\|_2^2+\left(\frac{\lambda_0}{2}+2\lambda_0v^2\right)\|e\|_2^2.$$ Dividing by $\lambda_0/2$ yields $$\|\nabla e\|_2^2\le\lambda_0^{-2}\|L[e]\|_2^2+(1+4v^2)\|e\|_2^2.$$ By [F1], adding $\|e\|_2^2$ gives the claimed $H^1$ estimate with $C_E=\max\{\lambda_0^{-2},2+4v^2\}$. [F1, F4, step 2.1, algebra] ∎

