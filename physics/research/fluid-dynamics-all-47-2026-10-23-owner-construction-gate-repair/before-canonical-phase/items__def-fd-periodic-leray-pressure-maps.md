---
id: def-fd-periodic-leray-pressure-maps
kind: definition
title: "Periodic Leray and pressure maps"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-fd-periodic-fourier-sobolev-spaces
  - def-countable-choice
dependency_roles:
  def-fd-periodic-fourier-sobolev-spaces: mathematical-premise
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
    - title: "Erick Schulz, Introduction to the Navier–Stokes Equations, McGill MATH 595 notes (2014)"
      url: "https://www.math.mcgill.ca/gantumur/math595f14/Notes.pdf"
      locator: "§§2.1.1–2.1.2, §2.1.5.2, §4.1.1; Fourier, weak derivatives, product estimate and Leray projection."
    - title: "Terence Tao, 254A Notes 1: Local well-posedness of the Navier–Stokes equations (2018)"
      url: "https://terrytao.wordpress.com/2018/09/16/254a-notes-1-local-well-posedness-of-the-navier-stokes-equations/"
      locator: "Periodic pressure/Leray discussion and Sobolev Proposition 35 / Exercise 36."
---

## Definition

Assume Countable Choice and fix $d\in\{1,2,3\}$. For a vector Fourier coefficient $a(k)\in\mathbb C^d$, define $(Pa)(0)=a(0)$ and $(Pa)(k)=P_ka(k)$ for $k\ne0$, where $P_k=I-kk^{\mathsf T}/|k|^2$. For a tensor field $F=(F_{ij})_{i,j=1}^d$ with coefficients in any $H^s(Q_d)$, define the scalar pressure map $Q$ by $\widehat{QF}(0)=0$ and $\widehat{QF}(k)=-\sum_{i,j=1}^d k_i k_j|k|^{-2}\widehat F_{ij}(k)$ for $k\ne0$. These formulas define real-preserving bounded maps on every $H^s$, $s\in\mathbb R$; $P$ is an orthogonal projection and commutes with derivatives. With $(\operatorname{div}F)_i=\sum_j\partial_jF_{ij}$, they satisfy $\nabla QF=-(I-P)\operatorname{div}F$ as Fourier distributions.

## Definition references

[Erick Schulz, Introduction to the Navier–Stokes Equations, McGill MATH 595 notes (2014)](https://www.math.mcgill.ca/gantumur/math595f14/Notes.pdf).

[Terence Tao, 254A Notes 1: Local well-posedness of the Navier–Stokes equations (2018)](https://terrytao.wordpress.com/2018/09/16/254a-notes-1-local-well-posedness-of-the-navier-stokes-equations/).

## Facts & Assumptions

**Given:** The hypotheses and conventions stated in the formulation.

[F1] [[def-fd-periodic-fourier-sobolev-spaces]]: Fourier coefficients represent the real periodic Sobolev coefficient space, with $\widehat f(-k)=\overline{\widehat f(k)}$.

[F2] [[def-countable-choice]]: Countable Choice is an explicit assumption of the periodic Fourier coefficient framework.

## Proof

**Given:** $d\in\{1,2,3\}$, Countable Choice, and the coefficient spaces in [F1].

1.1 For $k\ne0$, $P_k$ is real symmetric, $P_k^2=P_k$, and its range is $k^\perp$; $P_0=I$. Thus each multiplier is an orthogonal projection of norm at most one. The scalar multiplier defining $Q$ has absolute value at most $\sum_{i,j}|k_i k_j|/|k|^2\le d$, so both maps preserve every weighted $\ell^2$ norm up to a dimension-dependent constant. [given, F1, algebra]

1.2 Since $P_{-k}=P_k$ and the coefficient multiplier for $Q$ is real and even in $k$, both maps preserve conjugate symmetry and hence real fields. Multipliers commute with $ik_j$, so $P$ commutes with weak derivatives. For $k\ne0$, the $i$th component of $\nabla QF$ has coefficient
$-i\sum_{a,j} k_i k_a k_j|k|^{-2}\widehat F_{aj}(k)$, which is exactly the $i$th coefficient of $-(I-P_k)\widehat{\operatorname{div}F}(k)$. At $k=0$ both sides vanish. [given, F1, F2, step 1.1, algebra] ∎
