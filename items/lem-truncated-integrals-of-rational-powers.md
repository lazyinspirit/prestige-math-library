---
id: lem-truncated-integrals-of-rational-powers
kind: lemma
title: "Truncated integrals of rational powers"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-rational-power, lem-rational-power-laws,
       lem-rational-power-monotone, thm-nth-roots-exist,
       thm-algebra-of-derivatives, thm-substitution,
       cor-primitives-of-a-continuous-function, thm-ftc-second-part,
       def-integer-power, def-canonical-natural, def-derivative]
justified_by: []
aliases: []
landmark: false
proof_strategy: computation
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William F. Trench, Introduction to Real Analysis, Examples 3.4.1–3"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Statement

For rational $p\ne1$ and $0<A<B$,
$$\int_A^B x^{-p}\,dx=\frac{B^{1-p}-A^{1-p}}{1-p}.$$
For $p=1$ and every positive integer $N$,
$$\int_1^{2^N}\frac{dx}{x}\ge\frac N2,\qquad \int_{2^{-N}}^1\frac{dx}{x}\ge\frac N2.$$

## Facts & Assumptions

**Given:** Positive endpoints $A<B$ and the stated rational exponent.

[L1] Positive rational powers satisfy the exponent, product, and monotonicity laws ([[def-rational-power]], [[lem-rational-power-laws]], [[lem-rational-power-monotone]]).

[L2] Proper substitution and the FTC evaluate integrals from verified primitives ([[thm-substitution]], [[thm-ftc-second-part]]).

[L3] Integer-power differentiation, the product rule, and the reciprocal rule follow from the derivative algebra ([[def-integer-power]], [[thm-algebra-of-derivatives]]).

## Proof

**Proof technique:** computation.

1.1 Write $p=m/q$ with an integer $m$ and a positive integer $q$. Substituting $x=t^q$ on the positive interval and using [L1]–[L3] reduces the integrand to $qt^{q-m-1}$. The integer-power rule gives primitive $qt^{q-m}/(q-m)$ when $m\ne q$. Substituting $t=x^{1/q}$ back gives $x^{1-p}/(1-p)$. The FTC proves the displayed formula. [L1, L2, L3]

2.1 On $[2^k,2^{k+1}]$, $1/x\ge2^{-(k+1)}$, so its integral is at least $1/2$. Adding the first $N$ dyadic blocks proves the first lower bound. The intervals $[2^{-(k+1)},2^{-k}]$ give the second in the same way. [given] ∎
