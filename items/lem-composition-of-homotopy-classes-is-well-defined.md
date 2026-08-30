---
id: lem-composition-of-homotopy-classes-is-well-defined
kind: lemma
title: "Composition of homotopy classes is well defined"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-homotopy-classes-of-chain-maps, lem-chain-homotopy-is-compatible-with-addition-and-composition, prop-null-homotopic-maps-form-a-two-sided-additive-ideal]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "The Stacks Project, Section 13.8: The homotopy category"
      url: "https://stacks.math.columbia.edu/tag/05RN"
pipeline_run: frontier-25
---

## Statement

If $f,f':C_\bullet\to D_\bullet$ and $g,g':D_\bullet\to E_\bullet$ satisfy
$[f]=[f']$ and $[g]=[g']$, then
$$[g\circ f]=[g'\circ f'].$$
Thus composition on homotopy classes may be defined by
$$[g]\circ[f]:=[g\circ f].$$

## Facts & Assumptions

**Given:** Chain maps $f,f':C_\bullet\to D_\bullet$ and $g,g':D_\bullet\to E_\bullet$ with $[f]=[f']$ and $[g]=[g']$.

[L1] Equality of classes means that differences are null-homotopic ([[def-homotopy-classes-of-chain-maps]]).

[L2] Whiskering preserves chain homotopy ([[lem-chain-homotopy-is-compatible-with-addition-and-composition]]).

[L3] Null-homotopic maps form a two-sided additive ideal ([[prop-null-homotopic-maps-form-a-two-sided-additive-ideal]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the maps $f-f'$ and $g-g'$ are null-homotopic. Using [L3], $$gf-g'f'=(g-g')f'+g(f-f')$$ is a sum of two null-homotopic maps. [L1, L3, given, algebra]

2.1 The first summand in step 1.1 is null-homotopic by right whiskering, and the second is null-homotopic by left whiskering; this is exactly [L2] and [L3]. Hence $gf-g'f'$ is null-homotopic, so [L1] gives $[gf]=[g'f']$. [L1, L2, step 1.1, algebra] ∎
