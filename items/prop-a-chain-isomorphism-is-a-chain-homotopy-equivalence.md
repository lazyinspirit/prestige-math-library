---
id: prop-a-chain-isomorphism-is-a-chain-homotopy-equivalence
kind: proposition
title: "A chain isomorphism is a chain homotopy equivalence"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-chain-homotopy-equivalence, prop-identities-and-composites-of-chain-maps-are-chain-maps]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-25
---

## Statement

If a chain map $f:C_\bullet\to D_\bullet$ admits a chain map
$g:D_\bullet\to C_\bullet$ with
$$g\circ f=1_C,\qquad f\circ g=1_D,$$
then $f$ is a chain homotopy equivalence.

## Facts & Assumptions

**Given:** Chain maps $f:C_\bullet\to D_\bullet$ and $g:D_\bullet\to C_\bullet$ with $gf=1_C$ and $fg=1_D$.

[L1] A homotopy equivalence is a chain map with a homotopy inverse up to homotopy ([[def-chain-homotopy-equivalence]]).

[L2] Identities and composites of chain maps are chain maps ([[prop-identities-and-composites-of-chain-maps-are-chain-maps]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], the composites $gf$ and $fg$ are chain maps, and by hypothesis they are exactly the identity chain maps. [L2, given]

2.1 Exact equality implies chain homotopy, via the zero homotopies. Therefore $g$ is a homotopy inverse of $f$, and [L1] shows that $f$ is a chain homotopy equivalence. [L1, step 1.1, algebra] ∎
