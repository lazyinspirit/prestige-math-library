---
id: cor-cohomology-over-a-field-is-dual-to-homology-for-finite-dimensional-complexes
title: "Cohomology over a field is dual to homology for finite-dimensional complexes"
kind: corollary
status: draft
origin: pipeline
deps: ["thm-universal-coefficient-theorem-for-cohomology-over-a-pid", "prop-modules-over-a-field-are-projective-flat-and-injective"]
proof_strategy: direct
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

For a chain complex of finite-dimensional vector spaces over $k$, evaluation gives $H^n\operatorname{Hom}_k(C,k)\cong\operatorname{Hom}_k(H_nC,k)$.

## Proof

**Given:** the cohomological UCT sequence over the field $k$.

1.1 Every $k$-module is injective, so $\operatorname{Ext}^1_k(H_{n-1}C,k)=0$. [given]

2.1 Thus the UCT evaluation map is an isomorphism to the algebraic dual of $H_nC$; finite dimensionality ensures this is the usual finite-dimensional duality convention. [step 1.1] ∎
