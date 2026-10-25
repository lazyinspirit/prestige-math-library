---
id: lem-koszul-generator-contraction-homotopy
kind: lemma
title: "Koszul Generator Contraction Homotopy"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-koszul-complex-of-a-sequence-with-coefficients, lem-exterior-multiplication-koszul-sign-rule, def-chain-homotopy]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Koszul complexes and regular sequences"
      url: "https://stacks.math.columbia.edu/tag/0621"
pipeline_run: frontier-31a
---

## Statement

For each $i$, exterior multiplication by $e_i$ is a degree-$1$ homotopy satisfying $d(e_i\wedge-)+(e_i\wedge-)d=x_i\operatorname{id}$ on $K(\mathbf x;M)$.

## Facts & Assumptions

**Given:** The rings, finite sequences, modules, and local hypotheses stated in the claim. The declared prerequisites used here are [[def-koszul-complex-of-a-sequence-with-coefficients]], [[lem-exterior-multiplication-koszul-sign-rule]], [[def-chain-homotopy]].

## Proof

**Proof technique:** direct.

1.1 Let $h_i(z)=e_i\wedge z$. The graded Leibniz rule gives $d h_i(z)+h_i d(z)=d(e_i)z=x_i z$. [given, algebra]

2.1 Thus $h_i$ is a chain homotopy from multiplication by $x_i$ to zero, with no division or characteristic assumption. [step 1.1, algebra] ∎

