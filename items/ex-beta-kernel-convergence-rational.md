---
id: ex-beta-kernel-convergence-rational
kind: example
title: "Convergence range of $x^{-p}(1+x)^{-q}$ on $(0,\infty)$ for rational exponents"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-mixed-improper-integral,
       cor-limit-comparison-test-for-improper-integrals,
       thm-improper-p-test-rational, def-rational-power,
       lem-rational-power-laws, lem-rational-power-monotone,
       thm-algebra-of-function-limits]
justified_by: []
aliases: []
landmark: false
proof_strategy: cases
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

[L1] Positive rational powers obey the quotient and limit laws ([[def-rational-power]], [[lem-rational-power-laws]], [[thm-algebra-of-function-limits]]).

[L2] Positive functions with a finite positive quotient limit have equivalent improper convergence ([[cor-limit-comparison-test-for-improper-integrals]]).

[L3] The rational $p$-test gives the exact thresholds at zero and infinity ([[thm-improper-p-test-rational]]).

## Verification

**Proof technique:** cases.

1.1 Near zero, divide the kernel by $x^{-p}$. The quotient $(1+x)^{-q}$ tends to one, so [L2] and [L3] give convergence at zero exactly when $p<1$.

1.2 At infinity, divide by $x^{-(p+q)}$. By [L1], the quotient is $(x/(1+x))^q$, which tends to one. Thus [L2] and [L3] give convergence at infinity exactly when $p+q>1$.

2.1 The mixed definition requires both ends separately, so the full integral converges exactly under the two simultaneous inequalities. Positive bases ensure every rational power used above is defined, regardless of the signs of $p$ and $q$. ∎
