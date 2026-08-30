---
id: cex-a-quasi-isomorphism-that-is-not-an-isomorphism-of-complexes
kind: counterexample
title: "A quasi-isomorphism that is not an isomorphism of complexes"
status: published
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-quasi-isomorphism,
       fs-every-quasi-isomorphism-is-an-isomorphism-of-complexes,
       thm-abelian-groups-form-an-abelian-category]
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-24
---

## Statement refuted

Every quasi-isomorphism of complexes is an isomorphism of complexes.

## Facts & Assumptions

**Given:** The inclusion of the zero complex into $$0\to\mathbb Z\xrightarrow{1_{\mathbb Z}}\mathbb Z\to0.$$

[L1] $\mathbf{Ab}$ is an abelian category ([[thm-abelian-groups-form-an-abelian-category]]).

[L2] The A-page false statement is indeed false ([[fs-every-quasi-isomorphism-is-an-isomorphism-of-complexes]]).

## Counterexample

**Proof technique:** direct.

1.1 The target complex is acyclic, because both the kernel and cokernel of $1_{\mathbb Z}$ are zero. The source zero complex is acyclic as well, so the inclusion induces isomorphisms on all homology groups. [L1, given, algebra]

2.1 The target complex is nonzero while the source is zero, so the inclusion is not invertible. Thus this is a concrete counterexample, as asserted by [L2]. [L2, step 1.1] ∎
