---
id: cex-unbounded-with-convergent-subsequence
kind: counterexample
title: "The sequence $1, 1, 2, 1, 3, 1, 4, \\dots$ is unbounded and has a convergent subsequence"
status: draft
origin: session
deps: [fs-convergent-subsequence-implies-bounded, lem-alternating-sequence, def-subsequential-limit, def-sequence, def-bounded-set, def-real-limit, lem-convergent-implies-bounded, thm-of-archimedean, lem-of-naturals-positive, lem-of-abs-value, thm-bolzano-weierstrass, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
cx_machine_verified: false
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Bolzano-Weierstrass theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bolzano%E2%80%93Weierstrass_theorem"
    - title: "Subsequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subsequence"
    - title: "T. Tao, Analysis I, 3rd ed., §6.6"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
---

## Statement refuted

**Refuted claim:** a sequence of reals with a convergent subsequence is bounded,
which is the converse of [[thm-bolzano-weierstrass]]
([[fs-convergent-subsequence-implies-bounded]], [[def-sequence]]).

The witness is the interleaving

$$1,\; 1,\; 2,\; 1,\; 3,\; 1,\; 4,\; \dots$$

whose terms at even indices are $1, 2, 3, \dots$ and whose terms at odd indices
are all $1$. It is unbounded, and its odd-indexed subsequence is constant, hence
convergent. The refutation is carried out in full in
[[fs-convergent-subsequence-implies-bounded]]; this item records the witness and
adds the computation of its subsequential limit set.

## Facts & Assumptions

**Given:** The strictly increasing index maps $e, o$ of [[lem-alternating-sequence]], whose ranges partition $\mathbb{N}$, and the sequence $(y_n)$ of reals with $y_n := (j+1)\cdot 1_{\mathbb{R}}$ when $n = e_j$ and $y_n := 1$ when $n = o_j$ ([[def-sequence]]).

[L1] The witness: $(y_n)$ is well defined, the subsequence $(y_{o_j})$ is constantly $1$ and converges to $1$, and $(y_n)$ is unbounded ([[fs-convergent-subsequence-implies-bounded]]).

[L2] The index maps are strictly increasing and their ranges partition $\mathbb{N}$ ([[lem-alternating-sequence]]).

[L3] Canonical naturals: positive for $m \ge 1$ and strictly increasing in the index ([[lem-of-naturals-positive]]); the Archimedean property ([[thm-of-archimedean]]).

[L4] Boundedness of a sequence and of a subset of $\mathbb{R}$ ([[def-sequence]], [[def-bounded-set]]); a constant sequence converges to its value ([[def-real-limit]]); and every convergent sequence of reals is bounded ([[lem-convergent-implies-bounded]]).

[L5] Subsequential limits ([[def-subsequential-limit]]).

[L6] Absolute value: $|t| = t$ for $t \ge 0$ ([[lem-of-abs-value]]); trichotomy of the order ([[def-complete-ordered-field]], [[def-ordered-field]]).

[L7] Bolzano-Weierstrass: every bounded sequence of reals has a convergent subsequence ([[thm-bolzano-weierstrass]]).

[L8] The refuted claim: a sequence of reals with a convergent subsequence is bounded.

## Counterexample

**Proof technique:** direct.

1.1 $(y_n)$ has a convergent subsequence, namely the constant subsequence along $o$, which converges to $1$; so it satisfies the hypothesis of the claim. [given, L1, L2, L4, L5, L8]

1.2 $(y_n)$ is unbounded: no real $M$ satisfies $|y_n| \le M$ at every index. [given, L1, L3, L4, L6]

2.1 The claim is therefore refuted: a convergent subsequence does not force boundedness, and the converse of Bolzano-Weierstrass fails. [step 1.1, step 1.2, L7, L8]

3.1 The subsequential limit set of $(y_n)$ is exactly $\{1\}$. It contains $1$ by step 1.1. Conversely, let $(y_{n_i})$ converge; a convergent sequence is bounded, and along the even indices the values $y_{e_j} = j+1$ exceed every bound, so only finitely many $n_i$ can lie in the range of $e$; all later $n_i$ lie in the range of $o$, where the value is $1$, so the subsequence is eventually constantly $1$ and its limit is $1$. [step 1.1, step 1.2, L2, L3, L4, L5] ∎

## Remarks

- **A one-point subsequential limit set does not imply convergence.** By step 3.1
  the set is $\{1\}$, yet the sequence is unbounded and hence divergent. What is
  true is the converse implication: a convergent sequence has exactly one
  subsequential limit ([[def-subsequential-limit]]). So the subsequential limit
  set being a single point is necessary and not sufficient for convergence, and
  the missing hypothesis is boundedness.

- **The interleaving is what makes the example work, and it needs the partition.**
  Defining $(y_n)$ by cases on whether $n$ is even or odd is legitimate only
  because every natural number is exactly one of the two
  ([[lem-alternating-sequence]]). That is the same fact that makes the two
  subsequences between them exhaust the sequence.

- **Compare the bounded case.** With the unbounded branch replaced by a second
  constant, the same interleaving gives a bounded divergent sequence with two
  subsequential limits ([[ex-two-subsequential-limits]]). Bolzano-Weierstrass
  applies there and produces one of the two; here it does not apply at all, and
  the conclusion nevertheless happens to hold, which is exactly why the converse
  is not a theorem.
