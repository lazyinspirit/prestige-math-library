---
id: thm-absolute-improper-convergence-implies-convergence
kind: theorem
title: "Absolute convergence implies improper convergence"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-absolute-and-conditional-improper-convergence,
       thm-cauchy-criterion-for-improper-integrals,
       cor-integrability-of-absolute-values-products-and-lattice-operations,
       lem-limit-preserves-order,
       lem-improper-integral-splitting-and-tail-invariance]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William F. Trench, Introduction to Real Analysis, Theorem 8.3.4"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Statement

Every absolutely convergent improper integral converges. Moreover, on a one-ended interval,
$$\left|\int f\right|\le\int|f|.$$
For a mixed interval the same conclusion applies separately to each singular-end piece.

## Facts & Assumptions

**Given:** Convergence of the improper integral of $|f|$.

[L1] On every compact interval, $|\int_u^vf|\le\int_u^v|f|$ ([[cor-integrability-of-absolute-values-products-and-lattice-operations]]).

[L2] The improper Cauchy criterion characterizes convergence ([[thm-cauchy-criterion-for-improper-integrals]]).

[L3] Inequalities persist under finite limits ([[lem-limit-preserves-order]]).

## Proof

**Proof technique:** direct.

1.1 By the Cauchy criterion [L2], remote tail integrals of $|f|$ are arbitrarily small. The proper inequality [L1] makes the corresponding tail integrals of $f$ no larger in absolute value. A second application of [L2] proves convergence of $\int f$.

1.2 Apply [L1] on compact truncations and pass to their finite limits using [L3] to obtain the displayed inequality.

2.1 For a mixed integral, absolute convergence is required on every piece. Steps 1.1–1.2 apply piecewise, and finite addition completes the claim. ∎
