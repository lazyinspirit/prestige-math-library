---
id: thm-hadamard-three-lines
kind: theorem
title: "Hadamard three-lines theorem"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-bounded-strip-maximum-principle, thm-complex-exponential-is-entire-with-derivative-itself, thm-chain-rule-for-complex-derivatives, thm-complex-exponential-addition-and-real-extension, def-complex-logarithms-principal-logarithm-and-complex-powers, def-natural-logarithm, thm-natural-logarithm-laws, def-real-power, thm-real-power-continuity-and-derivatives, thm-dedekind-complete]
justified_by: []
forward_refs: []
aliases: []
landmark: true
short: "Vertical suprema are log-convex"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. A. Tropp, Matrix Analysis, Theorem 7.13"
      url: "https://tropp.caltech.edu/notes/Tro22-Matrix-Analysis-LN.pdf"
pipeline_run: null
---

## Statement

For a bounded function continuous on the closed strip and holomorphic inside, the vertical-line supremum is log-convex.

Precisely, let $S=\{z:0\le\operatorname{Re}z\le1\}$, let $f:S\to\mathbb C$ be bounded and continuous and holomorphic on the open strip, and define
$$M(x):=\sup_{y\in\mathbb R}|f(x+iy)|\qquad(0\le x\le1).$$
Then, for $0<\theta<1$,
$$M(\theta)\le M(0)^{1-\theta}M(1)^\theta.$$
More generally, for $0\le x_0<x_1\le1$ and $0<t<1$,
$$M((1-t)x_0+tx_1)\le M(x_0)^{1-t}M(x_1)^t.$$
Both displayed inequalities are asserted only for strictly interior parameters, $0<\theta<1$ and $0<t<1$, so both exponents are strictly positive and the positive-exponent convention $0^s=0$ applies when a boundary supremum is zero ([[def-real-power]]); the excluded endpoint expressions $M(0)^0$ and $M(1)^0$ would be the undefined $0^0$ when that supremum vanishes.

## Facts & Assumptions

**Given:** The strip $S$, a function $f$ satisfying the hypotheses, and the finite nonnegative suprema $M(x)$, whose existence follows from boundedness and completeness ([[thm-dedekind-complete]]). The complex exponential is entire ([[thm-complex-exponential-is-entire-with-derivative-itself]]), holomorphic compositions obey the complex chain rule ([[thm-chain-rule-for-complex-derivatives]]), and the exponential addition law, positive-base logarithm laws, and continuity of real powers are supplied by [[thm-complex-exponential-addition-and-real-extension]], [[def-natural-logarithm]], [[thm-natural-logarithm-laws]], and [[thm-real-power-continuity-and-derivatives]].

[L1] A bounded function continuous on the closed strip, holomorphic inside, and of modulus at most one on both boundary lines has modulus at most one throughout the strip ([[lem-bounded-strip-maximum-principle]]).

[L2] For $a>0$ and real $x$, the real power is $a^x=\exp(x\log a)$ ([[def-real-power]]).

[L3] For nonzero complex $z$ and complex $w$, the principal power is $z^w_{\mathrm{pr}}=\exp(w\operatorname{Log}z)$ ([[def-complex-logarithms-principal-logarithm-and-complex-powers]]).

## Proof

**Proof technique:** direct.

1.1 Fix $\delta>0$ and define $$G_\delta(z):=f(z)\exp((z-1)\log(M(0)+\delta))\exp(-z\log(M(1)+\delta)).$$ This is the positive-base principal-power normalization of [L2] and [L3]; it is bounded and continuous on $S$ and holomorphic inside. [L2, L3, given]

2.1 On $z=iy$, the two exponential factors have moduli $(M(0)+\delta)^{-1}$ and $1$, so $|G_\delta(iy)|\le M(0)/(M(0)+\delta)\le1$. On $z=1+iy$, their moduli are $1$ and $(M(1)+\delta)^{-1}$, so the same bound holds. By [L1], $|G_\delta(z)|\le1$ throughout $S$. [step 1.1, L1, given, algebra]

3.1 At $z=\theta+iy$ with $0<\theta<1$, step 2.1 rearranges to $|f(z)|\le(M(0)+\delta)^{1-\theta}(M(1)+\delta)^\theta$. Taking the supremum over $y$ and letting $\delta$ decrease to $0$ gives $M(\theta)\le M(0)^{1-\theta}M(1)^\theta$. Both exponents $1-\theta$ and $\theta$ are strictly positive, so the limit is correct including either zero boundary supremum, where the convention of [L2] reads the vanishing factor as $0$. [step 2.1, L2, given, algebra]

4.1 For $0\le x_0<x_1\le1$, apply step 3.1 to the rescaled strip function $w\mapsto f(x_0+(x_1-x_0)w)$. Its boundary suprema are $M(x_0)$ and $M(x_1)$, so the resulting inequality is the asserted log-convexity at $(1-t)x_0+tx_1$. [step 3.1, algebra] ∎
