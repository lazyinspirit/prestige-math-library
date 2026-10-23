---
id: thm-fd-periodic-pressure-recovery
kind: theorem
title: "Pressure recovery for smooth periodic incompressible velocity"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-fd-periodic-fourier-sobolev-spaces
  - def-fd-periodic-leray-pressure-maps
  - lem-fd-periodic-fourier-embedding-products
  - def-countable-choice
dependency_roles:
  def-fd-periodic-fourier-sobolev-spaces: mathematical-premise
  def-fd-periodic-leray-pressure-maps: mathematical-premise
  lem-fd-periodic-fourier-embedding-products: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Terence Tao, 254A Notes 1: Local well-posedness of the Navier–Stokes equations (2018)"
      url: "https://terrytao.wordpress.com/2018/09/16/254a-notes-1-local-well-posedness-of-the-navier-stokes-equations/"
      locator: "Periodic pressure/Leray discussion and Sobolev Proposition 35 / Exercise 36."
    - title: "Erick Schulz, Introduction to the Navier–Stokes Equations, McGill MATH 595 notes (2014)"
      url: "https://www.math.mcgill.ca/gantumur/math595f14/Notes.pdf"
      locator: "§§2.1.1–2.1.2, §2.1.5.2, §4.1.1; Fourier, weak derivatives, product estimate and Leray projection."
---

## Statement

Assume Countable Choice. Let $d\in\{1,2,3\}$, let $s>d/2+1$, and let $u\in H^s(Q_d;\mathbb R^d)$ satisfy $\operatorname{div}u=0$ distributionally. Then $u\otimes u\in H^s$, the mean-zero scalar $\pi=Q(u\otimes u)$ belongs to $H^s$, and in $H^{s-1}$,
$$P(u\cdot\nabla u)=u\cdot\nabla u+\nabla\pi.$$
Among mean-zero periodic distributions satisfying the identity, this pressure is unique. The formula is a torus pressure recovery result and asserts no wall pressure regularity.

## Statement references

[Terence Tao, 254A Notes 1: Local well-posedness of the Navier–Stokes equations (2018)](https://terrytao.wordpress.com/2018/09/16/254a-notes-1-local-well-posedness-of-the-navier-stokes-equations/).

[Erick Schulz, Introduction to the Navier–Stokes Equations, McGill MATH 595 notes (2014)](https://www.math.mcgill.ca/gantumur/math595f14/Notes.pdf).

## Facts & Assumptions

**Given:** The hypotheses and conventions stated in the formulation.

[F1] [[def-countable-choice]]: countable families of nonempty sets admit a choice function.

[F2] [[def-fd-periodic-fourier-sobolev-spaces]]: $H^s$ is the weighted Fourier coefficient completion on the normalized periodic torus.

[F3] [[lem-fd-periodic-fourier-embedding-products]]: when $\sigma>d/2$, multiplication is continuous $H^\sigma\times H^\sigma\to H^\sigma$, and when $\sigma>1+d/2$, $H^\sigma$ embeds in $C^1$.

[F4] [[def-fd-periodic-leray-pressure-maps]]: $P$ and $Q$ are the stated bounded Fourier multipliers and $\nabla QF=-(I-P)\operatorname{div}F$.

## Proof

**Given:** Countable Choice, $d\in\{1,2,3\}$, $s>d/2+1$, and divergence-free $u\in H^s$.

1.1 Since $s>d/2$, [F3] gives $u\otimes u\in H^s$. The bounded map $Q$ in [F4] therefore gives a mean-zero $\pi=Q(u\otimes u)\in H^s$. Also $s-1>d/2$, so [F3] places $u\cdot\nabla u$ in $H^{s-1}$. [given, F2, F3, F4]

1.2 The distributional product rule, justified by smooth Fourier truncation and the $C^1$ convergence supplied by [F3], gives
$\operatorname{div}(u\otimes u)_i=\sum_j\partial_j(u_i u_j)=u\cdot\nabla u_i+u_i\operatorname{div}u=u\cdot\nabla u_i$.
Applying the multiplier identity in [F4] yields $\nabla\pi=-(I-P)(u\cdot\nabla u)$, hence the asserted decomposition. [given, F3, F4, step 1.1, algebra]

1.3 If another periodic distribution $\widetilde\pi$ gives the same decomposition, then $\nabla(\widetilde\pi-\pi)=0$. For every $k\ne0$, its Fourier coefficient is annihilated by multiplication by $ik$, and hence is zero; only the constant mode may remain. Both pressures have zero mean, so the constant is zero. [given, F1, F2, step 1.2, algebra] ∎
