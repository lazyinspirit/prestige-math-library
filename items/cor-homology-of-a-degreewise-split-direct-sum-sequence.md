---
id: cor-homology-of-a-degreewise-split-direct-sum-sequence
kind: corollary
title: "Homology of a chain-split direct-sum sequence"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-the-connecting-morphism-vanishes-for-a-chain-split-short-exact-sequence,
       thm-long-exact-sequence-in-homology]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-27
---

## Statement

If
$$0\to A_\bullet\to B_\bullet\to C_\bullet\to0$$
is a chain-split short exact sequence of complexes, then for every $n$ there is
an isomorphism
$$H_n(B)\cong H_n(A)\oplus H_n(C).$$

## Facts & Assumptions

**Given:** A chain-split short exact sequence $0\to A_\bullet\to B_\bullet\to C_\bullet\to0$ of complexes.

[L1] In a chain-split short exact sequence, every connecting morphism is zero ([[prop-the-connecting-morphism-vanishes-for-a-chain-split-short-exact-sequence]]).

[L2] Every short exact sequence of complexes has a long exact homology sequence ([[thm-long-exact-sequence-in-homology]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], the long exact homology sequence breaks in each degree into a short exact sequence $$0\to H_n(A)\to H_n(B)\to H_n(C)\to0.$$ [L1, L2, given, algebra]

2.1 Because the short exact sequence is chain split, the middle complex is degreewise isomorphic to $A_\bullet\oplus C_\bullet$ with block-diagonal differential. Hence $$Z_n(B)\cong Z_n(A)\oplus Z_n(C),\qquad B_n(B)\cong B_n(A)\oplus B_n(C),$$ and quotienting cycles by boundaries gives $$H_n(B)\cong H_n(A)\oplus H_n(C).$$ [step 1.1, algebra] ∎

