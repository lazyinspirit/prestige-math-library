---
id: ex-retarded-delayed-feedback-euler
kind: example
title: "Delayed feedback gives an explicit two-block Euler recurrence"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-retarded-delay-equation-and-history-space
  - thm-retarded-delay-method-of-steps-well-posedness
  - alg-retarded-delay-euler-with-stored-history
  - thm-retarded-delay-euler-first-order-global-error
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "M. Zennaro, The Numerical Solution of Delay Differential Equations, Dobbiaco 2006 summer-school lecture notes"
      url: "https://dmi.units.it/dobbiaco/pre2006/dobbiaco06_Zennaro.pdf"
    - title: "Nicola Guglielmi and Ernst Hairer, Solving Delay Differential Equations, Chapter 1"
      url: "https://www.unige.ch/~hairer/preprints/ChapterDDE.pdf"
---

## Example

Let $\tau>0$, $a\in\mathbb R$, and consider $y'(t)=a y(t-\tau)$ with
history $\phi(s)=1$ on $[-\tau,0]$, through $T=2\tau$. This is the retarded
problem of [[def-retarded-delay-equation-and-history-space]], and its unique
solution is supplied by
[[thm-retarded-delay-method-of-steps-well-posedness]]. For $h=\tau/m$ with
integer $m\ge1$, apply
[[alg-retarded-delay-euler-with-stored-history]]. The exact endpoint error is
$$|y(2\tau)-Y_{2m}|=\frac{a^2\tau h}{2}.$$
It vanishes when $a=0$ and is first order in $h$ otherwise, in agreement with
[[thm-retarded-delay-euler-first-order-global-error]].

## Facts & Assumptions

**Given:** A fixed delay $\tau>0$, scalar coefficient $a$, constant history
$\phi=1$, target $2\tau$, and the aligned grid $h=\tau/m$.

[F1] The exact equation is $y'(t)=a y(t-\tau)$ with the given history; the
retarded method of steps gives its unique solution
([[def-retarded-delay-equation-and-history-space]],
[[thm-retarded-delay-method-of-steps-well-posedness]]).

[F2] The algorithm initializes exact history values and updates
$Y_{n+1}=Y_n+h aY_{n-m}$ ([[alg-retarded-delay-euler-with-stored-history]]).

[F3] Under grid alignment, compact-tube, and time-Lipschitz assumptions, this
algorithm has uniform first-order error for the returned interpolation
([[thm-retarded-delay-euler-first-order-global-error]]).

## Proof

1.1 On the first block $0\le t\le\tau$, the delayed value is $1$, so
$y(t)=1+at$. On the second block, writing $s=t-\tau\in[0,\tau]$, the delayed
value is $y(s)=1+as$, hence $y'(\tau+s)=a+a^2s$ and
$y(2\tau)=1+2a\tau+a^2\tau^2/2$. [F1, given, algebra]

2.1 The first Euler block gives $Y_j=1+ajh$ for $0\le j\le m$. On the second
block, [F2] gives $Y_{m+j+1}=Y_{m+j}+ahY_j$ for $0\le j<m$. Summing yields
$Y_{2m}=1+a\tau+a h\sum_{j=0}^{m-1}(1+ajh)$. Pairing the terms $j$ and
$m-1-j$ (and retaining the middle term when $m$ is odd) gives
$\sum_{j=0}^{m-1}j=m(m-1)/2$, so
$Y_{2m}=1+2a\tau+a^2h^2m(m-1)/2$. [F2, given, algebra]

3.1 Subtracting step 2.1 from step 1.1 and using $\tau=mh$ gives
$y(2\tau)-Y_{2m}=a^2h^2m/2=a^2\tau h/2$. Since this is nonnegative, its
absolute value is the claimed error, including $a=0$. On the first Euler
block, $|Y_j|\le1+|a|\tau$; on the second,
$|Y_{m+j}|\le1+|a|\tau+|a|\tau(1+|a|\tau)$ for $0\le j\le m$. The exact
solution is polynomial on each of the first three delay blocks: besides step
1.1, on $[2\tau,3\tau]$ it is
$y(2\tau+s)=y(2\tau)+(a+a^2\tau)s+(a^2/2)s^2+(a^3/6)s^3$. These formulas
give a common bounded tube independent of $h$. The data therefore satisfy
[F3] with $\eta=h_0=\tau$, because $f(t,x,z)=az$ is time-independent, the
history has zero second derivative, and the tube is compact. Thus the exact
error formula is consistent with the first-order guarantee. [F1, F2, F3,
step 1.1, step 2.1, given, algebra] ∎
