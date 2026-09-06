---
id: lem-koszul-differential-coordinate-formula
kind: lemma
title: "Koszul Differential Coordinate Formula"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-koszul-complex-of-a-sequence-with-coefficients, lem-exterior-algebra-basis-monomials]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Koszul complexes and regular sequences"
      url: "https://stacks.math.columbia.edu/tag/0621"
pipeline_run: frontier-31a
---

## Statement

For $I=(i_1<\cdots<i_p)$, $d(e_I\otimes m)=\sum_{j=1}^p(-1)^{j-1}e_{I\setminus i_j}\otimes x_{i_j}m$.

## Facts & Assumptions

**Given:** The rings, finite sequences, modules, and local hypotheses stated in the claim. The declared prerequisites used here are [[def-koszul-complex-of-a-sequence-with-coefficients]], [[lem-exterior-algebra-basis-monomials]].

## Proof

**Proof technique:** direct.

1.1 Apply the graded Leibniz rule to the ordered wedge and use $d(e_{i_j})=x_{i_j}$. [given, algebra]

2.1 Passing the differential through $j-1$ degree-one factors gives $(-1)^{j-1}$, yielding the formula. [step 1.1, algebra] ∎
