---
id: thm-the-symmetric-group-has-the-coxeter-presentation
kind: theorem
title: "The symmetric group has the Coxeter presentation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-finite-symmetric-group-and-permutation-notation, lem-symmetric-group-is-a-group, thm-adjacent-transpositions-generate-the-symmetric-group, thm-von-dyck]
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Michael Muger, Tensor Categories: A Selective Guided Tour, Section 4"
      url: "https://arxiv.org/pdf/0804.3587"
---

## Statement

For $n\ge2$, the symmetric group $S_n$ has the presentation

$$S_n=\langle s_1,\dots,s_{n-1}\mid s_i^2=1,\ s_is_{i+1}s_i=s_{i+1}s_is_{i+1},\ s_is_j=s_js_i\ (|i-j|>1)\rangle,$$

where, after relabelling the underlying set $n=\{0,\ldots,n-1\}$ as
$\{1,\ldots,n\}$, $s_i$ corresponds to the adjacent transposition
$(i\ i+1)$. For
$n=0,1$, the trivial group has the empty presentation.

## Facts & Assumptions

**Given:** The symmetric group $S_n$ and the adjacent transpositions $\tau_i=(i\ i+1)$.

[L1] The group $S_n$ is defined on $n=\{0,\ldots,n-1\}$; conjugating by the
order-preserving bijection $k\mapsto k+1$ identifies it with the conventional
symmetric group on $\{1,\ldots,n\}$ and transports adjacent transpositions
([[def-finite-symmetric-group-and-permutation-notation]]).

[F1] Muger states in Section 4 that the symmetric groups have the presentation $$S_n=\langle \sigma_1,\ldots,\sigma_{n-1}\mid \sigma_i^2=1,\ \sigma_i\sigma_{i+1}\sigma_i=\sigma_{i+1}\sigma_i\sigma_{i+1},\ \sigma_i\sigma_j=\sigma_j\sigma_i\ (|i-j|>1)\rangle.$$

## Proof

**Proof technique:** direct.

1.1 For $n\ge2$, [F1] is exactly the displayed presentation on the conventional labels $1,\ldots,n$, and [L1] transports those generators to permutations of the library's underlying set $n$. [F1, L1]

2.1 For $n=0$ and $n=1$, there are no adjacent transpositions and $S_n$ is the trivial group, so the empty presentation applies. [L1, algebra] ∎
