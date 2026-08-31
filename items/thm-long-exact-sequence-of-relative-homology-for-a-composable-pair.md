---
id: thm-long-exact-sequence-of-relative-homology-for-a-composable-pair
kind: theorem
title: "The long exact sequence of relative homology for a composable pair"
status: published
origin: pipeline
landmark: true
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-relative-homology-of-a-chain-map,
       thm-the-cone-long-exact-sequence,
       lem-the-three-cone-calculation-for-a-composite-chain-map,
       thm-a-chain-homotopy-equivalence-is-a-quasi-isomorphism,
       thm-a-chain-map-induces-a-well-defined-map-on-homology]
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "The Stacks Project, Section 12.13: Complexes"
      url: "https://stacks.math.columbia.edu/tag/010V"
pipeline_run: frontier-27
---

## Statement

For composable chain maps in an abelian category
$$C_\bullet\xrightarrow{f}D_\bullet\xrightarrow{g}E_\bullet,$$
there is an exact sequence
$$\cdots\to H_n(D,C;f)\to H_n(E,C;gf)\to H_n(E,D;g)\to H_{n-1}(D,C;f)\to\cdots.$$

## Facts & Assumptions

**Given:** Composable chain maps $C_\bullet\xrightarrow{f}D_\bullet\xrightarrow{g}E_\bullet$ in an abelian category.

[L1] Relative homology of a chain map is the homology of its mapping cone ([[def-relative-homology-of-a-chain-map]]).

[L2] Every chain map has a cone long exact sequence ([[thm-the-cone-long-exact-sequence]]).

[L3] For the induced map $\alpha:\operatorname{Cone}(f)\to\operatorname{Cone}(gf)$, the cone $\operatorname{Cone}(\alpha)$ is chain-homotopy equivalent to $\operatorname{Cone}(g)$ ([[lem-the-three-cone-calculation-for-a-composite-chain-map]]).

[L4] Every chain-homotopy equivalence is a quasi-isomorphism ([[thm-a-chain-homotopy-equivalence-is-a-quasi-isomorphism]]).

[L5] Every chain map induces a well-defined map on homology ([[thm-a-chain-map-induces-a-well-defined-map-on-homology]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L2] to the induced chain map $\alpha:\operatorname{Cone}(f)\to\operatorname{Cone}(gf)$. This gives an exact sequence $$\cdots\to H_n(\operatorname{Cone}(f))\to H_n(\operatorname{Cone}(gf))\to H_n(\operatorname{Cone}(\alpha))\to H_{n-1}(\operatorname{Cone}(f))\to\cdots.$$ [L2, given, construct]

2.1 Rewrite the first two terms by [L1]. By [L3] there is a chain-homotopy equivalence $\Phi:\operatorname{Cone}(\alpha)\to\operatorname{Cone}(g)$; [L4] makes $\Phi$ a quasi-isomorphism, and [L5] therefore gives isomorphisms on homology. So $H_n(\operatorname{Cone}(\alpha))\cong H_n(\operatorname{Cone}(g))$, and rewriting the last term with [L1] yields exactly the displayed long exact sequence of relative homology for the composable pair. [L1, L3, L4, L5, step 1.1, algebra] ∎
