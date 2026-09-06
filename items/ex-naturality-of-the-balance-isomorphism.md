---
id: ex-naturality-of-the-balance-isomorphism
kind: example
title: "Naturality of the balance isomorphism"
status: published
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-altered
deps: [prop-the-ext-balance-isomorphism-is-natural-in-both-variables, def-hom-double-complex-of-a-projective-and-an-injective-resolution]
generation:
  role: example
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
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2"
      url: https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf
pipeline_run: frontier-31a
---
## Example

For maps M' -> M and N -> N' draw the square of projective and injective Ext computations and verify that both routes agree through the total-complex comparison.

## Facts & Assumptions

**Given:** Morphisms $a:M'\to M$ and $b:N\to N'$ and supplied projective and injective resolution comparison maps lifting them.

## Verification

**Proof technique:** direct.

1.1 Precomposition by the projective comparison for $a$ and postcomposition by the injective comparison for $b$ define a morphism of first-quadrant Hom double complexes $\operatorname{Hom}(P(M),I(N))\to\operatorname{Hom}(P(M'),I(N'))$. It commutes with both $d_h$ and $d_v$. [given, algebra]

2.1 The induced map on the total complex restricts on the projective edge and the injective edge to the usual maps on their Hom complexes. Passing to cohomology makes the two edge-to-total quasi-isomorphism squares commute; therefore the balance isomorphism intertwines $\operatorname{Ext}^q(M,N)\to\operatorname{Ext}^q(M',N')$ for every $q$. [step 1.1, algebra] ∎
