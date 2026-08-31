---
id: prop-a-chain-map-with-contractible-cone-becomes-an-isomorphism-in-the-homotopy-category
kind: proposition
title: "A chain map with contractible cone becomes an isomorphism in the homotopy category"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-a-chain-map-is-a-homotopy-equivalence-exactly-when-its-cone-is-contractible, def-homotopy-category-of-chain-complexes]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 13.8: The homotopy category"
      url: "https://stacks.math.columbia.edu/tag/05RN"
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-26
---

## Statement

If $\operatorname{Cone}(f)$ is contractible, then the morphism represented by
$f$ is an isomorphism in the homotopy category.

## Facts & Assumptions

**Given:** A chain map $f:C_\bullet\to D_\bullet$ with contractible cone.

[L1] A chain map is a chain-homotopy equivalence exactly when its cone is
contractible
([[thm-a-chain-map-is-a-homotopy-equivalence-exactly-when-its-cone-is-contractible]]).

[L2] Morphisms in the homotopy category are homotopy classes of chain maps
([[def-homotopy-category-of-chain-complexes]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the map $f$ has a homotopy inverse $g:D_\bullet\to C_\bullet$. [L1, given, algebra]

2.1 Passing to homotopy classes as in [L2], the relations $gf\simeq1_C$ and $fg\simeq1_D$ become $$[g][f]=[1_C],\qquad [f][g]=[1_D].$$ Hence $[f]$ is an isomorphism in the homotopy category. [L2, step 1.1, algebra] ∎
