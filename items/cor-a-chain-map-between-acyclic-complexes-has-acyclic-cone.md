---
id: cor-a-chain-map-between-acyclic-complexes-has-acyclic-cone
kind: corollary
title: "A chain map between acyclic complexes has an acyclic cone"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-the-cone-long-exact-sequence,
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
pipeline_run: frontier-27
---

## Statement

If $f:C_\bullet\to D_\bullet$ is a chain map and both $C_\bullet$ and
$D_\bullet$ are acyclic, then $\operatorname{Cone}(f)$ is acyclic.

## Facts & Assumptions

**Given:** A chain map $f:C_\bullet\to D_\bullet$ between acyclic complexes.

[L1] The cone long exact sequence exists ([[thm-the-cone-long-exact-sequence]]).

[L2] Acyclic means vanishing homology in every degree ([[def-exactness-of-a-complex-at-a-degree-and-acyclic-complex]]).

## Proof

**Proof technique:** direct.

1.1 In the cone long exact sequence from [L1], every copy of $H_n(C)$ and $H_n(D)$ is zero by [L2]. [L1, L2, given, algebra]

2.1 Exactness then forces every $H_n(\operatorname{Cone}(f))$ to vanish as well. Hence the cone is acyclic. [L1, L2, step 1.1, algebra] ∎

