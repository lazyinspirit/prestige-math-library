---
id: thm-frullani-integral-proper-factor
kind: theorem
title: "Frullani's formula with its proper integral factor"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-improper-integral-at-infinity,
       def-improper-integral-at-a-finite-endpoint, def-mixed-improper-integral,
       thm-substitution, thm-linearity-of-the-integral,
       thm-monotonicity-of-the-integral, def-continuity-real,
       def-limits-at-infinity, def-oriented-integral,
       cor-integrability-of-absolute-values-products-and-lattice-operations]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William F. Trench, Introduction to Real Analysis, Frullani integral exercise"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Statement

Let $a,b>0$, and let $f:[0,\infty)\to\mathbb R$ be continuous with finite limit $L=\lim_{x\to\infty}f(x)$. Then the mixed improper integral converges and
$$\int_0^\infty\frac{f(ax)-f(bx)}{x}\,dx
=(f(0)-L)\int_a^b\frac{dt}{t},$$
where the factor on the right is a proper oriented Riemann integral.

## Facts & Assumptions

**Given:** Positive $a,b$ and a continuous $f$ with finite limit $L$ at infinity.

[L1] Proper substitution applies on every compact interval away from zero ([[thm-substitution]]).

[L2] A continuous function approaches its value at zero uniformly after the arguments $\varepsilon t$ are restricted to the fixed compact interval between $a$ and $b$ ([[def-continuity-real]]).

[L3] The limit at infinity is uniform for $Rt$ when $t$ stays in that same positive compact interval ([[def-limits-at-infinity]]).

[L4] Proper integral errors are bounded by interval length times a uniform bound ([[thm-monotonicity-of-the-integral]]).

## Proof

**Proof technique:** direct.

1.1 Assume first $a<b$. Substitution on $[\varepsilon,R]$ and cancellation give [given]
$$\int_\varepsilon^R\frac{f(ax)-f(bx)}x,dx
=\int_a^b\frac{f(\varepsilon t)}t,dt-
\int_a^b\frac{f(Rt)}t,dt.$$

2.1 By [L2] and [L4], the first proper integral tends to $f(0)\int_a^b dt/t$ as $\varepsilon\downarrow0$. By [L3] and [L4], the second tends to $L\int_a^b dt/t$ as $R\to\infty$. The two limits exist independently, so the mixed improper integral converges and has the displayed value. [step 1.1, L2, L3, L4]

3.1 The case $a=b$ is zero on both sides. If $a>b$, interchange $a,b$ in step 2.1; both the numerator and the oriented proper factor change sign. [step 2.1] ∎
