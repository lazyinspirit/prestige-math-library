---
id: def-csm-frontier-ssep-weak-heat-solution
kind: definition
title: "Weak heat solutions on the continuum torus"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
deps:
  - def-countable-choice
  - def-fourier-coefficients-and-trigonometric-polynomials
dependency_roles:
  def-countable-choice: mathematical-premise
  def-fourier-coefficients-and-trigonometric-polynomials: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: null
sources:
  references:
    - title: "S. R. S. Varadhan, Hydrodynamic Scaling, Chapter 4 lecture notes"
      url: "https://math.nyu.edu/~varadhan/Spring2012/Chapter4.pdf"
      locator: "Section 4.3, Theorem 4.3.1: weak heat-equation formulation on the continuum torus."
    - title: "Claudio Landim, Hydrodynamic Limit of Interacting Particle Systems, complete lecture notes"
      url: "https://math.arizona.edu/~sethuram/588/Landim.pdf"
      locator: "Chapter 2, Section 2.3, equation (2.6): integral weak formulation of the heat equation."
verification:
  precheck: pending
---

## Definition

Assume the Axiom of Countable Choice ($\mathrm{AC}_\omega$), meaning every at most countable family of nonempty sets has a choice function. Let $d\ge1$, let $\mathbb T^d=(\mathbb R/\mathbb Z)^d$ carry the normalized product Haar measure $dx$ with $dx(\mathbb T^d)=1$, and let $\rho_0$ be a real measurable function on $\mathbb T^d$ with $0\le\rho_0\le1$ almost everywhere. For a finite $T\ge0$, a **weak heat solution with datum $\rho_0$** is a family $(u_t)_{0\le t\le T}$ of real essentially bounded measurable-function classes (elements of $L^\infty(\mathbb T^d,dx;\mathbb R)$), with $u_0=\rho_0$ as a function class, such that for every complex-valued smooth periodic test function $G$, the map $t\mapsto\int_{\mathbb T^d}u_t(x)G(x)\,dx$ is continuous and

$$\int_{\mathbb T^d}u_t(x)G(x)\,dx=\int_{\mathbb T^d}\rho_0(x)G(x)\,dx+\int_0^t\int_{\mathbb T^d}u_s(x)\Delta G(x)\,dx\,ds$$

for every $0\le t\le T$. Here $\Delta=\sum_{i=1}^d\partial_{x_i}^2$ is the periodic Laplacian; equality of function classes means equality almost everywhere with respect to $dx$. For the Fourier convention on this torus, set $e_k(x)=\exp(2\pi i k\cdot x)$ for $k\in\mathbb Z^d$ and $\widehat f(k)=\int_{\mathbb T^d}f(x)e_{-k}(x)\,dx$ for $f\in L^1(\mathbb T^d,dx)$.

## Definition references

[[def-countable-choice]]

[[def-fourier-coefficients-and-trigonometric-polynomials]]
