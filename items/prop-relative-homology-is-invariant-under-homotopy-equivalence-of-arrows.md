---
id: prop-relative-homology-is-invariant-under-homotopy-equivalence-of-arrows
kind: proposition
title: "Relative homology is invariant under homotopy equivalence of arrows"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-relative-homology-of-a-chain-map, prop-cones-preserve-chain-homotopy-equivalences-of-arrows, thm-a-chain-homotopy-equivalence-is-a-quasi-isomorphism, thm-a-chain-map-induces-a-well-defined-map-on-homology]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 13.9: Cones and termwise split sequences"
      url: "https://stacks.math.columbia.edu/tag/014D"
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-26
---

## Statement

If two chain maps are related by a homotopy equivalence of arrows in the sense
of [[prop-cones-preserve-chain-homotopy-equivalences-of-arrows]], then their
relative homology objects are naturally isomorphic in every degree.

## Facts & Assumptions

**Given:** Chain maps $f$ and $g$ together with a homotopy equivalence of arrows
from $f$ to $g$.

[L1] Relative homology is defined by
$$H_n(D,C;f)=H_n(\operatorname{Cone}(f))$$
([[def-relative-homology-of-a-chain-map]]).

[L2] The induced map on cones is a chain-homotopy equivalence
([[prop-cones-preserve-chain-homotopy-equivalences-of-arrows]]).

[L3] Every chain-homotopy equivalence is a quasi-isomorphism
([[thm-a-chain-homotopy-equivalence-is-a-quasi-isomorphism]]).

[L4] A chain map induces a well-defined map on homology
([[thm-a-chain-map-induces-a-well-defined-map-on-homology]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], there is a chain-homotopy equivalence $$\Phi:\operatorname{Cone}(f)\to\operatorname{Cone}(g).$$ Then [L3] makes $\Phi$ a quasi-isomorphism. [L2, L3, given, algebra]

2.1 Applying [L4] to $\Phi$ yields isomorphisms $$H_n(\operatorname{Cone}(f))\xrightarrow{\sim}H_n(\operatorname{Cone}(g))$$ for all $n$. Rewriting both sides with [L1] gives the claimed natural isomorphisms of relative homology objects. [L1, L4, step 1.1, algebra] ∎
