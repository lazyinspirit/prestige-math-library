---
id: def-finite-product-chaos-input
kind: definition
title: Finite product-law polynomial-chaos input data
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [def-independent-random-elements, thm-independent-random-elements-have-product-joint-law]
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: No choice axiom is used; only a finite product of probability laws is involved.
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: Dongbin Xiu and George Em Karniadakis, The Wiener–Askey Polynomial Chaos for Stochastic Differential Equations, §§1, 4–6
      url: https://www.sci.utah.edu/~dxiu/Papers/XiuK_SISC02.pdf
    - title: Dongbin Xiu, Fast Numerical Methods for Stochastic Computations, §§2–4
      url: https://publications.sci.utah.edu/publications/xiu09/Xiu_CiCP2009.pdf
---

## Definition

Fix an integer $d\ge1$, independent real random variables
$Y_1,\ldots,Y_d$ with marginal Borel probability laws $\rho_1,\ldots,\rho_d$,
and a degree cutoff vector $p=(p_1,\ldots,p_d)\in\mathbb N_0^d$. Their joint
law is $\rho=\rho_1\otimes\cdots\otimes\rho_d$ on $\mathbb R^d$, as in
[[thm-independent-random-elements-have-product-joint-law]]. For a Borel
probability law $\rho_j$ on $\mathbb R$, define
$$\operatorname{supp}(\rho_j):=\{x\in\mathbb R:\rho_j(U)>0\text{ for every open }U\ni x\}.$$
The complement is a union of zero-measure members of the countable rational
interval basis, so countable additivity gives
$\rho_j(\operatorname{supp}(\rho_j))=1$. Set
$\Gamma=\prod_{j=1}^d\operatorname{supp}(\rho_j)$ and give it the trace Borel
sigma-algebra from $\mathbb R^d$. The product rectangle formula gives
$\rho(\Gamma)=1$. Whenever the measure space is written as
$(\Gamma,\mathcal B(\Gamma),\rho)$, $\rho$ denotes the restriction of the
product law on $\mathbb R^d$ to $\mathcal B(\Gamma)$; it is therefore a
probability measure. The product rectangle formula also identifies this
restriction with the finite product of the marginal laws restricted to their
supports. The cutoff vector $p$ is **admissible** when, for every
$j=1,\ldots,d$,
$$\int |y|^{2p_j}\,d\rho_j(y)<\infty$$
and the monomial Gram matrix
$$G_j=(\int y^{r+s}\,d\rho_j(y))_{0\le r,s\le p_j}$$
is positive definite, meaning $c^T G_jc>0$ for each nonzero
$c\in\mathbb R^{p_j+1}$. Throughout the pair, assume the selected cutoff
vector is admissible. The admissible degree box is
$\{\alpha\in\mathbb N_0^d:0\le\alpha_j\le p_j\text{ for every }j\}$.
Admissibility gives a finite inner product on each stated polynomial space.
It is only a finite-degree condition; it does not assert that polynomials are
dense in any $L^2(\rho_j)$.
