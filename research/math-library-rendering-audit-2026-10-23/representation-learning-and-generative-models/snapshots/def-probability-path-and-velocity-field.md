---
id: def-probability-path-and-velocity-field
kind: definition
title: Probability paths and velocity fields
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-borel-sigma-algebra
  - def-measure
  - def-probability-measure
justified_by: []
axiom_use: No choice principle is used; the reference measure and endpoint law are given.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Yaron Lipman et al., Flow Matching for Generative Modeling, §§2–3"
      url: "https://arxiv.org/html/2210.02747"
    - title: "Peter Holderrieth and Ezra Erives, Introduction to Flow Matching and Diffusion Models, §§3.1–3.2"
      url: "https://arxiv.org/html/2506.02070"
    - title: "Filippo Santambrogio, Optimal Transport for Applied Mathematicians, §4.1.2, Definition 4.1"
      url: "https://math.univ-lyon1.fr/~santambrogio/OTAM-cvgmt.pdf"
verification:
  precheck: n/a
---

## Definition

Fix an integer $d\ge1$, a sigma-finite measure $\lambda$ on the Borel subsets of $\mathbb R^d$, and a Borel probability measure $\pi$ on $\mathbb R^d$. Here sigma-finite means that there are Borel sets $E_n$ with $\mathbb R^d=\bigcup_{n\ge1}E_n$ and $\lambda(E_n)<\infty$ for each $n$. A **conditional probability-density path** with endpoint law $\pi$ is a function measurable for $\mathcal B([0,1])\otimes\mathcal B(\mathbb R^d)\otimes\mathcal B(\mathbb R^d)$ on time, state, and endpoint variables
$$\rho:[0,1]\times\mathbb R^d\times\mathbb R^d\to[0,\infty]$$
such that, for every $t\in[0,1]$, $\int_{\mathbb R^d}\rho_t(x\mid x_1)\,\lambda(dx)=1$ for $\pi$-almost every endpoint $x_1$. Its **mixture function** is
$$p_t(x):=\int_{\mathbb R^d}\rho_t(x\mid x_1)\,\pi(dx_1).$$
For a vector field $u_t(x\mid x_1)=(u_t^1,\ldots,u_t^d)$ measurable for the same product sigma-algebra, call it a **conditional velocity field** for $\rho$ when, for $\pi$-almost every $x_1$, $\rho_t(\cdot\mid x_1)$ and every component of $\rho_t(\cdot\mid x_1)u_t(\cdot\mid x_1)$ are continuously differentiable in $(t,x)$ on $(0,1)\times\mathbb R^d$, the functions $\rho_t$ and $\rho_tu_t^j$ are locally integrable there with respect to $dt\,\lambda(dx)$, and
$$\int_0^1\!\int_{\mathbb R^d}\rho_t(x\mid x_1)\left(\partial_t\varphi(t,x)+\sum_{j=1}^d u_t^j(x\mid x_1)\partial_{x_j}\varphi(t,x)\right)\lambda(dx)\,dt=0$$
for every continuously differentiable real function $\varphi$ with compact support in $(0,1)\times\mathbb R^d$. Here $dt$ denotes the supplied Lebesgue measure on time, and local integrability means absolute integrability on every compact subset. This is the **conditional continuity equation** for the measures $\rho_t(\cdot\mid x_1)\lambda$. In the Lebesgue-reference case $\lambda(dx)=dx$, its classical form under the stated differentiability is
$$\partial_t\rho_t(x\mid x_1)+\sum_{j=1}^d\partial_{x_j}\!\left(\rho_t(x\mid x_1)u_t^j(x\mid x_1)\right)=0$$
on $(0,1)\times\mathbb R^d$. This unweighted divergence formula is not the convention for a general reference measure. Only the interior-time equation is imposed; no endpoint continuity or existence or uniqueness of an ODE flow is asserted. At any $(t,x)$ where $0<p_t(x)<\infty$ and the numerator is a finite componentwise Lebesgue integral, the **marginal velocity field** is
$$u_t(x):=\frac{\int_{\mathbb R^d}\rho_t(x\mid x_1)u_t(x\mid x_1)\,\pi(dx_1)}{p_t(x)}.$$
This definition assigns no value to the quotient where $p_t(x)=0$ or $p_t(x)=\infty$, or where the numerator is not finite.

## Definition references

[[def-probability-measure|Probability measures and probability spaces]]

[[def-measure|Measures on sigma-algebras]]

[[def-borel-sigma-algebra|The Borel sigma-algebra]]

[Lipman et al., §§2–3](https://arxiv.org/html/2210.02747)

[Holderrieth and Erives, §§3.1–3.2](https://arxiv.org/html/2506.02070)

[Santambrogio, §4.1.2, Definition 4.1: the distributional continuity equation for measures](https://math.univ-lyon1.fr/~santambrogio/OTAM-cvgmt.pdf)
