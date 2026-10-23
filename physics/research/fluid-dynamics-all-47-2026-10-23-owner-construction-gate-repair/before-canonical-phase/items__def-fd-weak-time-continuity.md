---
id: def-fd-weak-time-continuity
kind: definition
title: Weak time continuity and energy spaces
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps: [def-fd-periodic-solenoidal-spaces]
dependency_roles:
  def-fd-periodic-solenoidal-spaces: mathematical-premise
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Leonid Ryzhik, Math 256B Lecture Notes, version 2024"
      url: "https://virtualmath1.stanford.edu/~ryzhik/notes-256B-24.pdf"
      locator: "§5.5, printed p. 48."
    - title: "L. C. Berselli and S. Spirito, On the Existence of Leray–Hopf Weak Solutions to the Navier–Stokes Equations, Fluids 6(1), 42 (2021)"
      url: "https://www.mdpi.com/2311-5521/6/1/42/pdf"
      locator: "§2.1, printed p. 4, and Definition 1 in §3, printed p. 6."
---

## Definition

Let $H,V,H^{-r}$ be the spaces of Periodic solenoidal Fourier spaces, let
$T>0$, and identify time-dependent functions that agree almost everywhere.
A map $u:[0,T]\to H$ is in $C_w([0,T];H)$ when
$t\mapsto (u(t),h)_H$ is continuous for each fixed $h\in H$. A map
$u:(0,T)\to X$ into a separable Hilbert space $X$ is strongly measurable
when it is an almost-everywhere pointwise limit of measurable simple
$X$-valued maps. For $1\le p<\infty$, $L^p(0,T;X)$ consists of strongly
measurable maps with $\int_0^T\|u(t)\|_X^pdt<\infty$; $L^\infty(0,T;X)$
uses the essential supremum norm. In this page, $L^p_{\rm loc}(0,\infty;X)$
means membership on every finite interval $(0,T)$. These conventions also
apply with $X=V$ and $X=H^{-r}$.

## Definition references

[Leonid Ryzhik, *Math 256B Lecture Notes*, §5.5, p. 48](https://virtualmath1.stanford.edu/~ryzhik/notes-256B-24.pdf).

[Berselli and Spirito, *On the Existence of Leray–Hopf Weak Solutions*, §2.1 and Definition 3.1, pp. 4, 6](https://www.mdpi.com/2311-5521/6/1/42/pdf).

## Facts & Assumptions

**Given:** The spaces $H,V,H^{-r}$ from [[def-fd-periodic-solenoidal-spaces]], a finite interval $[0,T]$, and the Hilbert inner product on $H$.

[F1] [[def-fd-periodic-solenoidal-spaces]]: $H$ and $V$ are real Hilbert spaces with the stated Fourier norms; $H^{-r}$ is the weighted Fourier coefficient space.

## Proof

1.1 The weak-continuity clause is the continuity of all scalar coordinate maps $u\mapsto(u,h)_H$ and therefore defines a topology on $H$; its definition makes no assertion of norm continuity. [given, F1]

1.2 Strong measurability and the displayed Bochner $L^p$ conditions specify measurable equivalence classes and their norms; the local notation is exactly the conjunction of those conditions over finite $T$. No representative-dependent time value is assigned by these spaces. [given, F1, step 1.1] ∎
