---
id: fs-subsequence-convergence-implies-convergence
kind: false-statement
title: "FALSE: a convergent subsequence forces the sequence to converge"
status: draft
origin: session
deps: [lem-subsequence-inherits-limit, def-sequence, def-real-limit, fs-bounded-implies-convergent, lem-index-map-grows]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Subsequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subsequence"
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "T. Tao, Analysis I, 3rd ed., §6.6"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

**False claim:** if some subsequence of a sequence $(x_k)$ of reals converges,
then $(x_k)$ itself converges ([[def-sequence]], [[def-real-limit]]).

The true statement in this direction runs the other way:
[[lem-subsequence-inherits-limit]] says that if the *sequence* converges then
*every* subsequence converges, to the same limit. Reversing it needs "every", not
"some".

## Facts & Assumptions

**Given:** The alternating sequence $(s_k)$ of reals and the index map $n : \mathbb{N} \to \mathbb{N}$ constructed in [[fs-bounded-implies-convergent]], namely the unique sequences with $s_0 = 1$, $s_{\sigma(k)} = -s_k$, and $n_0 = 0$, $n_{\sigma(j)} = \sigma(\sigma(n_j))$ ([[def-sequence]]).

[L1] Established in [[fs-bounded-implies-convergent]]: the map $n$ is strictly increasing; $s_{n_j} = 1$ for every $j$; and $(s_k)$ does not converge.

[L2] A constant sequence converges to its value ([[def-real-limit]], [[def-sequence]]).

[L3] Subsequences are the composites along strictly increasing index maps ([[def-sequence]], [[lem-index-map-grows]]).

[L4] Every subsequence of a convergent sequence converges to the same limit ([[lem-subsequence-inherits-limit]]), and a sequence is a subsequence of itself along the identity index map, which is strictly increasing ([[def-sequence]]).

## Refutation

**Proof technique:** direct.

1.1 The map $n$ is strictly increasing, so $(s_{n_j})_j$ is a subsequence of $(s_k)$, and $s_{n_j} = 1$ for every $j$, so this subsequence is the constant sequence with value $1$. [L1, L3]

2.1 A constant sequence converges to its value, so the subsequence $(s_{n_j})_j$ converges to $1$. [step 1.1, L2]

3.1 The sequence $(s_k)$ therefore has a convergent subsequence, while $(s_k)$ itself does not converge; the claim is false. [step 2.1, L1]

4.1 The corrected statement puts "every" where the false claim put "some": a sequence $(x_k)$ of reals converges to $x$ if and only if every subsequence of $(x_k)$ converges to $x$. The forward direction is [L4]; the backward direction is immediate, because $(x_k)$ is a subsequence of itself along the identity index map, and applying the hypothesis to that subsequence is already the conclusion. [step 3.1, L4] ∎

## Remarks

- The witness is the same alternating sequence that refutes [[fs-bounded-implies-convergent]]. Its subsequence along the index map $n$, the even indices, is constant $1$, and its subsequence along the index map $m$, the odd indices, is constant $-1$; either one alone converges, and it is the disagreement between them that kills convergence of the whole sequence, by the divergence test in [[lem-subsequence-inherits-limit]].

- A second repair exists and is **not proved here**: if $(x_k)$ is Cauchy ([[lem-convergent-implies-cauchy]] records the converse implication) and some subsequence converges to $x$, then $(x_k)$ converges to $x$. That is the standard bridge from Cauchy to convergence, it belongs with the completeness material on the next page of this track, and it is mentioned here only to make clear which extra hypothesis repairs the false claim. Nothing above uses it.

- A useful way to remember the asymmetry: a subsequence sees only part of the sequence, so it can only ever certify what happens along the indices it keeps. Convergence is a statement about all indices, and no single subsequence carries that information.
