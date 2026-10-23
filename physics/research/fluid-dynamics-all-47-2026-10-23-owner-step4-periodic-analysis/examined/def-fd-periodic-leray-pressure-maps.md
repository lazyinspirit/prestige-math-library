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

Assume Countable Choice and fix $d\in\{1,2,3\}$. For a vector Fourier coefficient $a(k)\in\mathbb C^d$, define $(Pa)(k)=P_ka(k)$ for every $k\in\mathbb Z^d$, where $P_0=I$ and $P_k=I-kk^{\mathsf T}/|k|^2$ for $k\ne0$. For a tensor field $F=(F_{ij})_{i,j=1}^d$ with coefficients in any $H^s(Q_d)$, define the scalar pressure map $Q$ by $\widehat{QF}(0)=0$ and $\widehat{QF}(k)=-\sum_{i,j=1}^d k_i k_j|k|^{-2}\widehat F_{ij}(k)$ for $k\ne0$. For $q\in H^s(Q_d)$, define $\partial_jq\in H^{s-1}(Q_d)$ coefficientwise by $\widehat{\partial_jq}(k)=ik_j\widehat q(k)$; for vector fields set $\widehat{\nabla q}(k)=ik\widehat q(k)$, and for tensor fields set $\widehat{\operatorname{div}F}_i(k)=i\sum_jk_j\widehat F_{ij}(k)$. These derivative maps are bounded from $H^s$ to $H^{s-1}$. The multipliers $P$ and $Q$ are real-preserving and bounded on every $H^s$, $s\in\mathbb R$; $P$ is an orthogonal projection and commutes with these derivatives. For every $F$ and every $k\in\mathbb Z^d$, their exact identity is the coefficientwise equality
$$\widehat{\nabla QF}(k)=-(I-P_k)\widehat{\operatorname{div}F}(k).$$
In particular, both sides have zero coefficient at $k=0$.

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

2.1 Since $P_{-k}=P_k$ and the coefficient multiplier for $Q$ is real and even in $k$, both maps preserve conjugate symmetry and hence real fields. Multipliers commute with $ik_j$, so $P$ commutes with the coefficientwise derivative maps. For $k\ne0$, the $a$th component of the left side has coefficient
$$-i\sum_{i,j=1}^d k_a k_i k_j|k|^{-2}\widehat F_{ij}(k),$$
which is the $a$th component of $-(I-P_k)\widehat{\operatorname{div}F}(k)$ because $I-P_k=kk^{\mathsf T}/|k|^2$. At $k=0$ both sides vanish by the zero-frequency derivative convention. [given, F1, F2, step 1.1, algebra] ∎

