---
id: fs-convergent-subsequence-implies-bounded
kind: false-statement
title: "FALSE: a sequence with a convergent subsequence is bounded (the converse of Bolzano-Weierstrass)"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-bolzano-weierstrass, lem-alternating-sequence, def-subsequential-limit, def-sequence, def-real-limit, thm-of-archimedean, lem-of-naturals-positive, lem-of-abs-value, def-complete-ordered-field, def-ordered-field]
justified_by: []
forward_refs: [cex-unbounded-with-convergent-subsequence]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Bolzano-Weierstrass theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bolzano%E2%80%93Weierstrass_theorem"
    - title: "Subsequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subsequence"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.6"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
---

## Statement

**False claim:** if a sequence $(y_n)$ of reals has a convergent subsequence,
then $(y_n)$ is bounded ([[def-sequence]], [[def-subsequential-limit]]).

This is the converse of [[thm-bolzano-weierstrass]], which says that
boundedness implies the existence of a convergent subsequence. The implication
does not reverse, and it fails as badly as it can: a sequence can be unbounded
and still have a *constant* subsequence.

The witness is the interleaving $1, 1, 2, 1, 3, 1, 4, \dots$, in which the terms
at even indices run through $1, 2, 3, \dots$ and every odd-indexed term is $1$.
It is recorded separately as the named counterexample of the companion page. The
even and odd index maps are supplied by [[lem-alternating-sequence]], which also
supplies what makes the definition legitimate: every natural number is an even
index or an odd index, and never both.

## Facts & Assumptions

**Given:** The strictly increasing index maps $e, o : \mathbb{N} \to \mathbb{N}$ of [[lem-alternating-sequence]], whose ranges partition $\mathbb{N}$, and the sequence $(y_n)$ of reals defined by cases on that partition: $y_n := (j+1) \cdot 1_{\mathbb{R}}$ when $n = e_j$, and $y_n := 1$ when $n = o_j$ ([[def-sequence]]).

[L1] The index maps: $e$ and $o$ are strictly increasing, and every natural number is $e_j$ for exactly one $j$, or $o_j$ for exactly one $j$, and never both ([[lem-alternating-sequence]]).

[L2] Canonical naturals: $m \cdot 1_{\mathbb{R}} > 0$ for $m \ge 1$, and $m \mapsto m \cdot 1_{\mathbb{R}}$ is strictly increasing ([[lem-of-naturals-positive]]).

[L3] Archimedean property: for every real $x$ there is a natural $m \ge 1$ with $x < m \cdot 1_{\mathbb{R}}$ ([[thm-of-archimedean]]).

[L4] Absolute value: $|t| \ge t$ always, and $|t| = t$ when $t \ge 0$ ([[lem-of-abs-value]]).

[L5] A constant sequence converges to its value, and a sequence is bounded when some real $M$ satisfies $|y_n| \le M$ at every index ([[def-sequence]], [[def-real-limit]]).

[L6] Subsequences and subsequential limits: for strictly increasing $n$, $(y_{n_j})$ is a subsequence, and its limit is a subsequential limit of $(y_n)$ ([[def-sequence]], [[def-subsequential-limit]]).

[L7] Trichotomy of the order on $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

[L8] The refuted claim: a sequence of reals with a convergent subsequence is bounded.

## Refutation

**Proof technique:** direct.

1.1 The sequence $(y_n)$ is well defined: by [L1] each $n \in \mathbb{N}$ falls under exactly one of the two clauses, and the index $j$ realising it is unique, so exactly one value is assigned to each $n$. [given, L1]

2.1 The subsequence along $o$ is the constant sequence with value $1$: for every $j$, $y_{o_j} = 1$ by the second clause. Since $o$ is strictly increasing, this is a subsequence of $(y_n)$. [step 1.1, L1, L6]

2.2 The subsequence along $e$ takes the value $y_{e_j} = (j+1)\cdot 1_{\mathbb{R}}$ for every $j$. [step 1.1, L1]

3.1 The constant subsequence $(y_{o_j})$ converges, to $1$, so $(y_n)$ has a convergent subsequence and $1$ is a subsequential limit of it: $(y_n)$ satisfies the hypothesis of the claim. [step 2.1, L5, L6, L8]

3.2 $(y_n)$ is not bounded. Let $M \in \mathbb{R}$ be arbitrary. By [L3] fix a natural $m \ge 1$ with $|M| < m \cdot 1_{\mathbb{R}}$, and take $j := m - 1 \in \mathbb{N}$, which is legitimate since $m \ge 1$. Then $y_{e_j} = m \cdot 1_{\mathbb{R}} > |M| \ge M$, and $y_{e_j} > 0$ gives $|y_{e_j}| = y_{e_j} > M$. So no real $M$ satisfies $|y_n| \le M$ at every index. [step 2.2, L2, L3, L4, L5, L7]

4.1 The sequence $(y_n)$ therefore has a convergent subsequence and is unbounded: the claim is false. [step 3.1, step 3.2, L8] ∎

## Remarks

- **What survives is exactly Bolzano-Weierstrass in the stated direction.**
  Boundedness gives a convergent subsequence ([[thm-bolzano-weierstrass]]); a
  convergent subsequence gives nothing about the sequence. The correct
  strengthening on the other side is not boundedness at all but a Cauchy
  hypothesis: a Cauchy sequence with a convergent subsequence does converge, and
  is bounded, by [[lem-cauchy-with-convergent-subsequence]] and
  [[lem-cauchy-sequence-bounded]].

- **One subsequence is never evidence about a sequence.** The same point in a
  different form is [[fs-subsequence-convergence-implies-convergence]] on the
  previous page: a convergent subsequence does not force convergence. Here it
  does not even force boundedness, which is weaker, so this is the sharper
  failure of the two.

- **The witness is as extreme as possible in one direction and as tame as
  possible in the other.** Its subsequential limit set is exactly $\{1\}$, a
  single point, while the sequence itself is unbounded; so having a one-point
  subsequential limit set does not imply convergence either, and
  [[def-subsequential-limit]] records that consequence.

- The witness is recorded as the named counterexample
  [[cex-unbounded-with-convergent-subsequence]], which also computes its
  subsequential limit set.
