---
id: thm-long-exact-sequence-in-cohomology
kind: theorem
title: "The long exact sequence in cohomology"
status: draft
origin: pipeline
landmark: true
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-long-exact-sequence-in-homology,
       def-cochain-complex-in-an-abelian-category,
       def-cohomology-object-of-a-cochain-complex]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "The Stacks Project, Section 12.13: Complexes"
      url: "https://stacks.math.columbia.edu/tag/010V"
    - title: "Romyar Sharifi, Homological Algebra"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
pipeline_run: frontier-27
---

## Statement

Let
$$0\to A^\bullet\to B^\bullet\to C^\bullet\to0$$
be a short exact sequence of cochain complexes in an abelian category. Then
there is a natural exact sequence
$$\cdots\to H^n(A)\to H^n(B)\to H^n(C)\xrightarrow{\partial^n}H^{n+1}(A)\to H^{n+1}(B)\to H^{n+1}(C)\to\cdots.$$

## Facts & Assumptions

**Given:** A short exact sequence $0\to A^\bullet\to B^\bullet\to C^\bullet\to0$ of cochain complexes.

[L1] A cochain complex may be read as a reindexed chain complex with $(C^\sharp)_n=C^{-n}$ ([[def-cochain-complex-in-an-abelian-category]]).

[L2] The cohomology object $H^n(C)$ is the homology of that reindexed chain complex in degree $-n$ ([[def-cohomology-object-of-a-cochain-complex]]).

[L3] Short exact sequences of chain complexes carry long exact sequences in homology ([[thm-long-exact-sequence-in-homology]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the given short exact sequence of cochain complexes is the same data as a short exact sequence of reindexed chain complexes. Applying [L3] gives a long exact sequence in homology for those chain complexes. [L1, L3, given, construct]

2.1 Replace each term $H_{-n}(X^\sharp)$ by $H^n(X)$ using [L2]. Under the same reindexing, the connecting map from degree $-n$ homology to degree $-n-1$ homology becomes a map $$\partial^n:H^n(C)\to H^{n+1}(A).$$ This is the displayed long exact cohomology sequence. [L1, L2, step 1.1, algebra] ∎

