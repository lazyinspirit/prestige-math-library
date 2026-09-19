---
id: ex-integral-of-a-deterministic-step-function-against-brownian-motion
kind: example
title: "A deterministic step integrand"
status: draft
origin: pipeline
deps: [def-ito-integral-of-an-elementary-predictable-process, def-ito-integral-for-square-integrable-predictable-processes, def-elementary-predictable-brownian-integrand, cor-deterministic-ito-integrals-are-gaussian, def-standard-normal-and-normal-laws, def-axiom-of-choice, lem-ac-supplies-sequential-choices-for-probability-constructions]
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Section 3.2.2"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
---

## Example

Assume the Axiom of Choice and the standing hypothesis (H) of
[[def-elementary-predictable-brownian-integrand]]. Let
$h=\sum_{k=0}^{m-1}a_k1_{(t_k,t_{k+1}]}$ be a deterministic step function on
$[0,T]$, with real coefficients $a_k$ and partition
$0=t_0<\cdots<t_m=T$. Then
$$\int_0^th_s\,dB_s=\sum_{k=0}^{m-1}a_k\bigl(B_{t\wedge t_{k+1}}-B_{t\wedge t_k}\bigr)\qquad(0\le t\le T),$$
and at the terminal time the integral has law
$N\bigl(0,\sum_ka_k^2(t_{k+1}-t_k)\bigr)$; in particular it has mean $0$ and
variance $\int_0^Th^2ds$.

## Facts & Assumptions

**Given:** AC, the standing hypothesis (H), a deterministic step function $h=\sum_ka_k1_{(t_k,t_{k+1}]}$ on $[0,T]$ and $t\in[0,T]$.

[F1] A deterministic step function is an elementary predictable integrand with coefficients $a_k\in\mathcal F_{t_k}$ (constants), and its elementary integral is the finite sum $\sum_ka_k(B_{t\wedge t_{k+1}}-B_{t\wedge t_k})$; the general integral agrees with the elementary one on this subspace. [[def-elementary-predictable-brownian-integrand]] [[def-ito-integral-of-an-elementary-predictable-process]] [[def-ito-integral-for-square-integrable-predictable-processes]]

[F2] For deterministic $h\in L^2[0,T]$ the integral is centered normal with variance $\int_0^Th^2ds$. [[cor-deterministic-ito-integrals-are-gaussian]] [[def-standard-normal-and-normal-laws]]

[F3] AC is declared for the ambient interfaces. [[def-axiom-of-choice]]

## Verification

**Proof technique:** direct.

1.1 Substituting the deterministic coefficients into the definition gives the displayed finite sum for every $t$, and at $t=T$ it is $\sum_ka_k(B_{t_{k+1}}-B_{t_k})$, a linear combination of the independent increments over the partition intervals. [F1, given]

2.1 The squared $L^2[0,T]$ norm of $h$ is $\int_0^Th^2ds=\sum_ka_k^2(t_{k+1}-t_k)$, so by [F2] the law of the terminal integral is $N(0,\sum_ka_k^2(t_{k+1}-t_k))$, with mean $0$ and that variance. [F2, step 1.1]

3.1 The cases are covered: a single-interval step ($m=1$, $a_0=a$) gives $a(B_T-B_0)=aB_T$ of law $N(0,a^2T)$; the degenerate case $a_k=0$ for some $k$ contributes zero variance on that block; and $h=0$ gives the Dirac law $N(0,0)$ at $0$. AC enters only through [F3]. [F2, F3, step 2.1, given] ∎

## Source notes

Lawler, Section 3.2.2, defines the integral of a simple process exactly as this finite sum; the distribution statement is the deterministic-step instance of the deterministic-integrand corollary.
