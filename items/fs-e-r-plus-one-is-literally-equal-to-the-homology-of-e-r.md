---
id: fs-e-r-plus-one-is-literally-equal-to-the-homology-of-e-r
kind: false-statement
title: E r plus one is literally equal to the homology of e r
deps: ["def-homological-spectral-sequence", "lem-abelian-group-model-for-spectral-sequence-computations"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Charles A. Weibel, An Introduction to Homological Algebra, Chapter 5
      url: https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf
    - title: Romyar Sharifi, Homological Algebra
      url: https://math.ucla.edu/~sharifi/homalg.pdf
status: draft
origin: pipeline
pipeline_run: phase-2-catchup-24
proof_strategy: direct
---



## Statement

It is false that literal equality $E^{r+1}=H(E^r)$ is required in the definition of a spectral sequence.

## Facts & Assumptions

**Given:** The tagged two-element groups $G_r$, with their transported operations.

[F1] The definition supplies isomorphisms $H(E^r)\to E^{r+1}$ ([[def-homological-spectral-sequence]]).

[F2] ℤ/2 and copies with transported addition are abelian-group objects ([[lem-abelian-group-model-for-spectral-sequence-computations]]).

## Refutation

**Proof technique:** direct.

1.1 For each r≥0 put $G_r=\{(r,a):a\in\mathbb Z/2\}$ with $(r,a)+(r,b)=(r,a+b)$. Put $G_r$ at (0,0), zero elsewhere and let every differential be zero. The group laws follow immediately by transport from [F2]. Model its homology quotient as the set of singleton cosets $\{\{(r,a)\}:a\in\mathbb Z/2\}$. [F1, F2]

2.1 Define $\alpha_r(\{(r,a)\})=(r+1,a)$. It is additive and has inverse $(r+1,a)\mapsto\{(r,a)\}$, giving the exact data of [F1]. These homology elements are singleton sets, whereas ordered pairs (in the standard set model $(x,y)=\{\{x\},\{x,y\}\}$) at r+1 have two elements as soon as r+1 differs from a. This occurs for some a since ℤ/2 has two distinct elements. Therefore this chosen model of $H(G_r)$ is not literally $G_{r+1}$, although $α_r$ is an isomorphism. [F1, F2, step 1.1] ∎

## Source notes

[Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), §5.2 pp.122–125 and Definitions 5.4.2–4 pp.132–133; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), §4.1 pp.87–89 and Definition 4.2.1 p.90.
