---
id: ex-beta-kernel-convergence-rational
kind: example
title: 'Convergence range of $x^{-p}(1+x)^{-q}$ on $(0,\infty)$ for rational exponents'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-mixed-improper-integral,
       thm-comparison-test-for-improper-integrals,
       thm-linearity-of-improper-integrals,
       thm-improper-p-test-rational, def-rational-power,
       lem-rational-power-laws, lem-rational-power-monotone]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William F. Trench, Introduction to Real Analysis, comparison-test examples"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Example

For rational $p,q$, the positive integral
$$\int_0^\infty x^{-p}(1+x)^{-q}dx$$
converges exactly when
$$p<1\quad\text{and}\quad p+q>1.$$

## Facts & Assumptions

**Given:** Rational exponents $p,q$ and the positive-domain kernel.

[L1] Positive rational powers obey the product, quotient, and monotonicity laws ([[def-rational-power]], [[lem-rational-power-laws]], [[lem-rational-power-monotone]]).

[L2] Two-sided eventual comparison by positive constant multiples gives equivalent improper convergence, using comparison in each direction and linearity for the constant multiples ([[thm-comparison-test-for-improper-integrals]], [[thm-linearity-of-improper-integrals]]).

[L3] The rational $p$-test gives the exact thresholds at zero and infinity ([[thm-improper-p-test-rational]]).

## Verification

**Proof technique:** direct.

1.1 For $0<x\le1$, one has $1\le1+x\le2$. If $q\ge0$, [L1] gives $2^{-q}\le(1+x)^{-q}\le1$; if $q<0$, it gives $1\le(1+x)^{-q}\le2^{-q}$. Thus the kernel is bounded above and below by positive constant multiples of $x^{-p}$, so [L2] and [L3] give convergence at zero exactly when $p<1$. [L1, L2, L3]

1.2 For $x\ge1$, $1/2\le x/(1+x)<1$. By [L1], the quotient of the kernel by $x^{-(p+q)}$ is $(x/(1+x))^q$ and lies between $2^{-q}$ and $1$ when $q\ge0$, and between $1$ and $2^{-q}$ when $q<0$. Hence [L2] and [L3] give convergence at infinity exactly when $p+q>1$. [L1, L2, L3]

2.1 The mixed definition requires both ends separately, so the full integral converges exactly under the two simultaneous inequalities. Positive bases ensure every rational power used above is defined, regardless of the signs of $p$ and $q$. [given] ∎
