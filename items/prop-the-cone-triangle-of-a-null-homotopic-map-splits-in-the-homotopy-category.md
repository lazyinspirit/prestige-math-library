---
id: prop-the-cone-triangle-of-a-null-homotopic-map-splits-in-the-homotopy-category
kind: proposition
title: "The cone triangle of a null-homotopic map splits in the homotopy category"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-homotopic-maps-have-chain-isomorphic-mapping-cones, prop-the-cone-of-the-zero-map-is-the-direct-sum-with-a-shift, def-homotopy-category-of-chain-complexes, thm-the-homotopy-category-is-additive, def-cone-triangle-of-a-chain-map, def-chain-homotopy]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 13.9: Cones and termwise split sequences"
      url: "https://stacks.math.columbia.edu/tag/014D"
pipeline_run: frontier-26
---

## Statement

If a chain map $f:C_\bullet\to D_\bullet$ is null-homotopic, then its cone
triangle is isomorphic in [[def-homotopy-category-of-chain-complexes]] to the
split triangle
$$C_\bullet\xrightarrow{0}D_\bullet\to D_\bullet\oplus C[1]_\bullet\to C[1]_\bullet.$$

## Facts & Assumptions

**Given:** A null-homotopic chain map $f:C_\bullet\to D_\bullet$.

[L1] Null-homotopic maps are chain-homotopic to the zero map
([[def-chain-homotopy]]).

[L2] Homotopic maps have isomorphic mapping cones
([[lem-homotopic-maps-have-chain-isomorphic-mapping-cones]]).

[L3] The cone of the zero map is $D\oplus C[1]$ as a complex
([[prop-the-cone-of-the-zero-map-is-the-direct-sum-with-a-shift]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the map $f$ is chain-homotopic to $0:C_\bullet\to D_\bullet$. Applying [L2] gives a chain isomorphism $$\operatorname{Cone}(f)\cong\operatorname{Cone}(0).$$ [L1, L2, given, algebra]

2.1 Using [L3], this identifies $\operatorname{Cone}(f)$ with $D_\bullet\oplus C[1]_\bullet$. Therefore the cone triangle of $f$ is isomorphic in the homotopy category to the displayed split triangle. [L3, step 1.1, algebra] ∎
