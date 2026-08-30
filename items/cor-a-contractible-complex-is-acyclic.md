---
id: cor-a-contractible-complex-is-acyclic
kind: corollary
title: "A contractible complex is acyclic"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-contractible-complex, thm-a-chain-homotopy-equivalence-is-a-quasi-isomorphism]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
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

Every contractible chain complex is acyclic.

## Facts & Assumptions

**Given:** A contractible chain complex $C_\bullet$.

[L1] A contractible complex is chain homotopy equivalent to the zero complex ([[def-contractible-complex]]).

[L2] A chain homotopy equivalence is a quasi-isomorphism ([[thm-a-chain-homotopy-equivalence-is-a-quasi-isomorphism]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the unique map $C_\bullet\to0$ is a chain homotopy equivalence. [L1, given]

2.1 Then [L2] makes $C_\bullet\to0$ a quasi-isomorphism. Since the zero complex has zero homology in every degree, $H_n(C)=0$ for all $n$, so $C_\bullet$ is acyclic. [L2, step 1.1, algebra] ∎
