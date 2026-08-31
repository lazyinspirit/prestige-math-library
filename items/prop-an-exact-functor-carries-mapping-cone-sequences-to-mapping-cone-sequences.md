---
id: prop-an-exact-functor-carries-mapping-cone-sequences-to-mapping-cone-sequences
kind: proposition
title: "An exact functor carries mapping-cone sequences to mapping-cone sequences"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-exact-functor-between-abelian-categories, thm-a-left-or-right-exact-functor-between-abelian-categories-is-additive, prop-an-additive-functor-applies-degreewise-to-complexes-and-chain-maps, def-mapping-cone-of-a-chain-map, def-canonical-inclusion-and-projection-for-a-mapping-cone, def-shift-of-a-chain-complex]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.7: Additive functors"
      url: "https://stacks.math.columbia.edu/tag/010N"
    - title: "The Stacks Project, Section 13.9: Cones and termwise split sequences"
      url: "https://stacks.math.columbia.edu/tag/014D"
pipeline_run: frontier-26
---

## Statement

Let $F:\mathcal A\to\mathcal B$ be an exact functor between abelian categories.
For every chain map $f:C_\bullet\to D_\bullet$, there is a natural chain
isomorphism
$$F(\operatorname{Cone}(f))\cong \operatorname{Cone}(F(f)),$$
compatible with the canonical inclusion and projection maps, so $F$ carries the
mapping-cone sequence of $f$ to the mapping-cone sequence of $F(f)$.

## Facts & Assumptions

**Given:** An exact functor $F:\mathcal A\to\mathcal B$ and a chain map $f:C_\bullet\to D_\bullet$.

[L1] Exact functors are additive
([[thm-a-left-or-right-exact-functor-between-abelian-categories-is-additive]]).

[L2] Additive functors apply degreewise to complexes and chain maps
([[prop-an-additive-functor-applies-degreewise-to-complexes-and-chain-maps]]).

[L3] The cone differential is
$$d(y,x)=(d^D(y)+f(x),-d^C(x))$$
([[def-mapping-cone-of-a-chain-map]]).

[L4] The canonical inclusion and projection are the obvious coordinate maps
([[def-canonical-inclusion-and-projection-for-a-mapping-cone]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], $F$ preserves direct sums and the scalar $-1$. Therefore $F(\operatorname{Cone}(f))_n$ is $$F(D_n\oplus C_{n-1})\cong F(D_n)\oplus F(C_{n-1}),$$ and under this identification the differential is $$(F(d^D),F(f),-F(d^C)).$$ [L1, L2, L3, given, algebra]

2.1 The displayed differential is exactly the cone differential of $F(f)$ from [L3], so the degreewise biproduct identification is a chain isomorphism $F(\operatorname{Cone}(f))\cong\operatorname{Cone}(F(f))$. The coordinate maps in [L4] are preserved under the same identification, so the full cone sequence is transported naturally. [L3, L4, step 1.1, algebra] ∎
