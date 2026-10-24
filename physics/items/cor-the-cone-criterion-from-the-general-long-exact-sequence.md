---
id: cor-the-cone-criterion-from-the-general-long-exact-sequence
kind: corollary
title: "The cone criterion from the general long exact sequence"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-the-cone-long-exact-sequence,
       thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic,
       def-exactness-of-a-complex-at-a-degree-and-acyclic-complex]
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

For a chain map $f:C_\bullet\to D_\bullet$, the cone $\operatorname{Cone}(f)$ is
acyclic if and only if $f$ is a quasi-isomorphism. This is exactly the same
criterion already recorded on the mapping-cone page.

## Facts & Assumptions

**Given:** A chain map $f:C_\bullet\to D_\bullet$.

[L1] The cone long exact sequence has the form $$\cdots\to H_n(C)\xrightarrow{H_n(f)}H_n(D)\to H_n(\operatorname{Cone}(f))\to H_{n-1}(C)\to\cdots$$ ([[thm-the-cone-long-exact-sequence]]).

[L2] Acyclic means vanishing homology in every degree ([[def-exactness-of-a-complex-at-a-degree-and-acyclic-complex]]).

[L3] The mapping-cone page already proves the same equivalence ([[thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic]]).

## Proof

**Proof technique:** direct.

1.1 If $\operatorname{Cone}(f)$ is acyclic, then the middle terms in [L1] vanish by [L2]. Exactness therefore makes every $H_n(f)$ both monic and epic, so $f$ is a quasi-isomorphism. [L1, L2, given, algebra]

2.1 If $f$ is a quasi-isomorphism, then every map $H_n(f)$ in [L1] is an isomorphism. Exactness forces each $H_n(\operatorname{Cone}(f))$ to vanish, so the cone is acyclic by [L2]. This is the same criterion already established in [L3]. [L1, L2, L3, given, algebra] ∎

