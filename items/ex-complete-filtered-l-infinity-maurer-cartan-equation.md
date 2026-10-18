---
id: ex-complete-filtered-l-infinity-maurer-cartan-equation
kind: example
title: "A finite complete filtered L∞ Maurer–Cartan equation"
status: draft
dependency_level: 8
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-complete-filtered-l-infinity-algebra
  - def-field
  - def-maurer-cartan-element-of-complete-filtered-l-infinity-algebra
  - def-shifted-coalgebra-l-infinity-algebra
  - lem-square-zero-coderivation-is-higher-jacobi-identities
  - thm-filtered-l-infinity-maurer-cartan-series-converges
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-18}}
sources:
  references:
    - title: "Jean-Louis Loday and Bruno Vallette, Algebraic Operads, §13.2"
      url: "https://www.math.univ-paris13.fr/~vallette/Operads.pdf"
    - title: "Tom Lada and Jim Stasheff, Introduction to sh Lie algebras for physicists, sh Lie Structures"
      url: "https://arxiv.org/pdf/hep-th/9209099"
---

## Example

Let $V^1=kt$, $V^2=kc$, and $V^j=0$ in other degrees, so the shifted space
$W=V[1]$ has $W^0=kt$ and $W^1=kc$. Set $q_1=0$, define the graded-symmetric
map $q_2(t\odot t)=2c$, and let $q_n=0$ for $n\ge3$. Give $W$ the filtration
$F^1W=W$, $F^2W=kc$, and $F^rW=0$ for $r\ge3$. This is a complete filtered
L∞-algebra, and its Maurer–Cartan set consists only of $0$.

## Facts & Assumptions

**Given:** A characteristic-zero field $k$ and the operations and filtration
specified in the Example.

[F1] [[def-shifted-coalgebra-l-infinity-algebra]]: degree-one symmetric
operations on $W=V[1]$ define an L∞-algebra exactly when their coderivation
squares to zero.

[F2] [[lem-square-zero-coderivation-is-higher-jacobi-identities]]: the
square-zero condition is equivalent to the displayed unshuffle Jacobi
identities.

[F3] [[def-complete-filtered-l-infinity-algebra]]: completeness is the
bijection to compatible quotient cosets, and each $q_n$ must raise filtration
by the sum of input filtration indices.

[F4] [[thm-filtered-l-infinity-maurer-cartan-series-converges]]: the
Maurer–Cartan series for $w\in F^1W^0$ has a unique limit in $W^1$.

[F5] [[def-maurer-cartan-element-of-complete-filtered-l-infinity-algebra]]:
a Maurer–Cartan element is a degree-zero element of $F^1W$ where this series
is zero.

[F6] [[def-field]]: $k$ is a field, so $\lambda^2=0$ implies $\lambda=0$.

## Verification

1.1 The only nonzero operation is the degree-one map $q_2$; it is symmetric because $t$ has degree zero. Any nonzero nested operation would apply an outer $q_2$ to an inner output in $kc$, but $q_2(c,t)=q_2(t,c)=q_2(c,c)=0$. Thus every higher Jacobi expression in [F2] vanishes. By [F1]–[F2] these operations define an L∞-algebra. [given, F1, F2, construct, algebra]

2.1 The filtration is separated since $F^3W=0$. The compatible quotient cosets are determined by their representative in $W/F^3W=W$; conversely each $w\in W$ gives the compatible family $(w+F^rW)_{r\ge1}$. Hence the natural map in [F3] is bijective. Moreover $q_2(F^1W,F^1W)\subseteq kc=F^2W$ and $q_2(F^2W,F^1W)=q_2(F^1W,F^2W)=0\subseteq F^3W$; all other required filtration inclusions hold because $q_1=0$ and $q_n=0$ for $n\ge3$. This is complete filtered L∞ data. [F3, step 1.1, algebra]

3.1 Every degree-zero element has form $w=\lambda t$. Its Maurer–Cartan series from [F4] is $q_2(w,w)/2=\lambda^2c,$ because all other operations vanish. It is zero exactly when $\lambda=0$ by [F6]. Therefore the Maurer–Cartan set is $\{0\}$. [F4, F5, F6, step 2.1, algebra] ∎

