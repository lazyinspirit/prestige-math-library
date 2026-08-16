---
id: thm-complex-analytic-functions-closed-under-algebra-quotients-and-composition
kind: theorem
title: "Complex analytic functions are closed under finite linear combinations, products, quotients with nonzero denominator, and composition"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-complex-analytic-function, prop-sums-and-scalar-multiples-of-complex-power-series, prop-cauchy-products-of-complex-power-series, lem-local-composition-of-complex-power-series, lem-local-reciprocal-of-complex-power-series]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Power-series supplementary notes, Colby College"
      url: "https://personal.colby.edu/~erandles/papers/Past_Courses/Supplementary_Notes.pdf"
pipeline_run: null
---

## Statement

On their natural domains, finite complex linear combinations and products of analytic functions are analytic; $f/g$ is analytic where $g\ne0$; and $F\circ f$ is analytic wherever $f$ maps into the domain of $F$.

## Facts & Assumptions

**Given:** Analytic functions with the domain conditions in the Statement.

[L1] Analyticity supplies a convergent local power-series representation at every point ([[def-complex-analytic-function]]).

[L2] Sums and scalar multiples are represented coefficientwise on a common disc ([[prop-sums-and-scalar-multiples-of-complex-power-series]]).

[L3] Products are represented by Cauchy-product coefficients on a common disc ([[prop-cauchy-products-of-complex-power-series]]).

[L4] Local compositions and reciprocals have convergent local power-series expansions under their stated centre and nonzero-constant hypotheses ([[lem-local-composition-of-complex-power-series]], [[lem-local-reciprocal-of-complex-power-series]]).

## Proof

**Proof technique:** direct.

1.1 Fix a point in the relevant natural domain and choose local series for all participating functions by [L1], shrinking to a common disc when necessary. [L1, choose]

2.1 Apply [L2] to finite linear combinations and [L3] to products. [step 1.1, L2, L3]

2.2 If $g$ is nonzero at the point, its local series has nonzero constant term, so [L4] gives a reciprocal series and [L3] gives $f/g$; for composition, recenter the outer series at the inner value and apply [L4]. [step 1.1, L3, L4]

3.1 Each construction supplies a convergent power-series representation near every point of its stated domain, so each result is analytic by [L1]. [step 2.1, step 2.2, L1] ∎
