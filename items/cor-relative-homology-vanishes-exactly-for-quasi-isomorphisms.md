---
id: cor-relative-homology-vanishes-exactly-for-quasi-isomorphisms
kind: corollary
title: "Relative homology vanishes exactly for quasi-isomorphisms"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-relative-homology-of-a-chain-map, thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic, def-exactness-of-a-complex-at-a-degree-and-acyclic-complex]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-26
---

## Statement

For a chain map $f:C_\bullet\to D_\bullet$, the following are equivalent:

1. $f$ is a quasi-isomorphism.
2. $H_n(D,C;f)=0$ for every $n$.

## Facts & Assumptions

**Given:** A chain map $f:C_\bullet\to D_\bullet$.

[L1] Relative homology is the homology of the mapping cone
([[def-relative-homology-of-a-chain-map]]).

[L2] A chain map is a quasi-isomorphism exactly when its cone is acyclic
([[thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic]]).

[L3] Acyclic means vanishing homology in every degree
([[def-exactness-of-a-complex-at-a-degree-and-acyclic-complex]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the condition $H_n(D,C;f)=0$ for all $n$ is exactly the condition that all homology objects of $\operatorname{Cone}(f)$ vanish. [L1, given, algebra]

2.1 By [L3], vanishing of all homology objects means that $\operatorname{Cone}(f)$ is acyclic, and then [L2] identifies this with $f$ being a quasi-isomorphism. This proves both directions of the equivalence. [L2, L3, step 1.1, algebra] ∎
