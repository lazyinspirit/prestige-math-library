---
id: thm-a-chain-homotopy-equivalence-is-a-quasi-isomorphism
kind: theorem
title: "A chain homotopy equivalence is a quasi-isomorphism"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-chain-homotopy-equivalence, thm-chain-homotopic-maps-induce-the-same-map-on-homology, prop-homology-respects-identities-and-composition, def-quasi-isomorphism]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "Joseph J. Rotman, An Introduction to Homological Algebra, 2nd ed."
      url: "https://dokumen.pub/an-introduction-to-homological-algebra-2nbsped-9780387245270-9780387683249.html"
pipeline_run: frontier-25
---

## Statement

Every chain homotopy equivalence is a quasi-isomorphism.

## Facts & Assumptions

**Given:** A chain homotopy equivalence $f:C_\bullet\to D_\bullet$ with homotopy inverse $g:D_\bullet\to C_\bullet$.

[L1] A chain homotopy equivalence has maps $g$ with $$gf\simeq1_C,\qquad fg\simeq1_D$$ ([[def-chain-homotopy-equivalence]]).

[L2] Chain-homotopic maps induce the same map on homology ([[thm-chain-homotopic-maps-induce-the-same-map-on-homology]]).

[L3] Homology respects identities and composition ([[prop-homology-respects-identities-and-composition]]).

[L4] A quasi-isomorphism is a chain map inducing isomorphisms on all homology objects ([[def-quasi-isomorphism]]).

## Proof

**Proof technique:** direct.

1.1 From [L1] and [L2], the homotopies $gf\simeq1_C$ and $fg\simeq1_D$ imply $$H_n(g)H_n(f)=1_{H_n(C)},\qquad H_n(f)H_n(g)=1_{H_n(D)}$$ for every $n\in\mathbb Z$. [L1, L2, given, algebra]

2.1 By [L3], the equalities in step 1.1 say exactly that each $H_n(f)$ has inverse $H_n(g)$. Therefore every $H_n(f)$ is an isomorphism, and [L4] makes $f$ a quasi-isomorphism. [L3, L4, step 1.1, algebra] ∎
