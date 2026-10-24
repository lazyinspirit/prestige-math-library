---
id: thm-parity-of-transposition-factorisations-is-well-defined
kind: theorem
title: 'Every transposition factorisation of $\sigma$ has parity $(-1)^{\operatorname{inv}(\sigma)}$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-transpositions-generate-the-symmetric-group, lem-a-transposition-reverses-inversion-sign,
       thm-induction-principle]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'T. W. Judson, Abstract Algebra: Theory and Applications, §5.1, Lemma 5.5 and Theorem 5.6'
      url: 'https://judsonbooks.org/aata-files/aata-20140815.pdf'
    - title: 'Stanford Math 51H, Permutations'
      url: 'https://math.stanford.edu/~lms/jpg/perms.pdf'
pipeline_run: null
---

## Statement

If $\sigma=\tau_1\cdots\tau_r$ is any factorisation of a finite permutation
into transpositions, then

$$(-1)^r=(-1)^{\operatorname{inv}(\sigma)}.$$

Consequently any two transposition factorisations of the same permutation have
the same parity, and every transposition factorisation of the identity has even
length.

## Facts & Assumptions

**Given:** A natural $n$ and a factorisation $\sigma=\tau_1\cdots\tau_r$ in $S_n$, where each $\tau_i$ is a transposition.

[L1] Every finite permutation has a transposition factorisation, and multiplying a permutation on either side by one transposition reverses its inversion sign ([[thm-transpositions-generate-the-symmetric-group]], [[lem-a-transposition-reverses-inversion-sign]]).

## Proof

**Proof technique:** direct.

1.1 The identity has no inversions, so the empty factorisation has inversion sign $1=(-1)^0$. [given, L1]

2.1 Starting with the identity and multiplying successively by the $r$ transpositions, [L1] reverses the inversion sign once at each multiplication; after $r$ multiplications the resulting sign is therefore $(-1)^r$. [step 1.1, L1]

3.1 The resulting permutation is $\sigma$, so $(-1)^r=(-1)^{\operatorname{inv}(\sigma)}$. Applying this equality to any two factorisations proves equal parity, and applying it to the identity gives even length. [step 2.1, L1] ∎
