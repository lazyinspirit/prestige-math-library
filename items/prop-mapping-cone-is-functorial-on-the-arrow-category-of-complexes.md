---
id: prop-mapping-cone-is-functorial-on-the-arrow-category-of-complexes
kind: proposition
title: "Mapping cone is functorial on the arrow category of complexes"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-morphism-of-chain-maps, thm-a-morphism-of-chain-maps-induces-a-chain-map-of-cones, def-category-of-chain-complexes]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 13.9: Cones and termwise split sequences"
      url: "https://stacks.math.columbia.edu/tag/014D"
pipeline_run: frontier-26
---

## Statement

The assignment
$$f\longmapsto \operatorname{Cone}(f),\qquad (a,b)\longmapsto \operatorname{Cone}(a,b)$$
defines a functor from the arrow category of [[def-category-of-chain-complexes]]
to the category of chain complexes.

## Facts & Assumptions

**Given:** Chain maps and morphisms of chain maps in the arrow category.

[L1] Every morphism of chain maps induces a chain map of cones
([[thm-a-morphism-of-chain-maps-induces-a-chain-map-of-cones]]).

[L2] A morphism of chain maps is a commuting square in the category of chain
complexes ([[def-morphism-of-chain-maps]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], every arrow-category morphism $(a,b)$ is sent to the block map $(y,x)\mapsto(b(y),a(x))$ on cones, so objects and morphisms are assigned. [L1, L2, given, algebra]

2.1 If $(a,b)$ and $(a',b')$ are composable, then the block formula shows $$\operatorname{Cone}(a',b')\operatorname{Cone}(a,b)=\operatorname{Cone}(a'a,b'b),$$ and identity squares give identity block maps. Thus the assignment preserves composition and identities, hence is a functor. [L2, step 1.1, algebra] ∎
