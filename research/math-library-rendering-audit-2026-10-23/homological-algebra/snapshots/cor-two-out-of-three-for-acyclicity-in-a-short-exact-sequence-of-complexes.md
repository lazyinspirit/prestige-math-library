---
id: cor-two-out-of-three-for-acyclicity-in-a-short-exact-sequence-of-complexes
kind: corollary
title: "Two-out-of-three for acyclicity in a short exact sequence of complexes"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-long-exact-sequence-in-homology,
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

In a short exact sequence of complexes
$$0\to A_\bullet\to B_\bullet\to C_\bullet\to0,$$
if any two of $A_\bullet$, $B_\bullet$, and $C_\bullet$ are acyclic, then so is
the third.

## Facts & Assumptions

**Given:** A short exact sequence $0\to A_\bullet\to B_\bullet\to C_\bullet\to0$ of complexes.

[L1] The sequence carries a long exact sequence in homology ([[thm-long-exact-sequence-in-homology]]).

[L2] Acyclic means vanishing homology in every degree ([[def-exactness-of-a-complex-at-a-degree-and-acyclic-complex]]).

## Proof

**Proof technique:** direct.

1.1 If $A_\bullet$ and $C_\bullet$ are acyclic, then for every $n$ the exact window $$H_n(A)\to H_n(B)\to H_n(C)$$ has zero outer terms by [L2]. Exactness from [L1] therefore gives $H_n(B)=0$ for all $n$. [L1, L2, given, algebra]

1.2 If $A_\bullet$ and $B_\bullet$ are acyclic, then the exact window $$H_n(B)\to H_n(C)\to H_{n-1}(A)$$ has zero outer terms, so $H_n(C)=0$ for all $n$. [L1, L2, given, algebra]

2.1 If $B_\bullet$ and $C_\bullet$ are acyclic, then the exact window $$H_n(C)\to H_{n-1}(A)\to H_{n-1}(B)$$ has zero outer terms, so $H_{n-1}(A)=0$ for all $n$. Thus the remaining complex is acyclic in every case. [L1, L2, given, algebra] ∎
