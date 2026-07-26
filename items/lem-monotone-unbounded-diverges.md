---
id: lem-monotone-unbounded-diverges
kind: lemma
title: "A nondecreasing sequence that is not bounded above diverges to $+\\infty$"
status: draft
origin: session
deps: [def-monotone-sequence, def-divergence-to-infinity, def-sequence, def-bounded-set, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Monotone convergence theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monotone_convergence_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (Thm 3.14 and Def. 3.15)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §2.2"
      url: "https://www.jirka.org/ra/"
---

## Statement

Let $(x_k)$ be a nondecreasing sequence of reals ([[def-sequence]],
[[def-monotone-sequence]]) whose range $S = \{x_k : k \in \mathbb{N}\}$ is not
bounded above ([[def-bounded-set]]). Then $(x_k)$ diverges to $+\infty$
([[def-divergence-to-infinity]]): for every $M \in \mathbb{R}$ there is
$K \in \mathbb{N}$ with $x_k > M$ for all $k \ge K$.

Read together with the monotone convergence theorem this says that a nondecreasing
sequence has exactly two possible behaviours, with nothing in between: it
converges to the supremum of its range, or it runs away to $+\infty$.

## Facts & Assumptions

**Given:** A nondecreasing sequence $(x_k)$ of reals whose range $S = \{x_k : k \in \mathbb{N}\}$ is not bounded above.

[L1] Monotonicity: $x_j \le x_k$ whenever $j \le k$ ([[def-monotone-sequence]]).

[L2] Bounded above: $S$ is bounded above exactly when some $M \in \mathbb{R}$ satisfies $s \le M$ for every $s \in S$ ([[def-bounded-set]]).

[L3] Trichotomy: for reals $s$ and $M$, exactly one of $s < M$, $s = M$, $s > M$ holds, so the failure of $s \le M$ is $s > M$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

[L4] Divergence to $+\infty$: $x_k \to +\infty$ when for every $M \in \mathbb{R}$ there is $K \in \mathbb{N}$ such that $x_k > M$ for all $k \ge K$ ([[def-divergence-to-infinity]]).

[L5] Every element of $S$ is a term of the sequence, and conversely ([[def-sequence]]).

## Proof

**Proof technique:** direct.

1.1 Let $M \in \mathbb{R}$ be arbitrary. Since $S$ is not bounded above, $M$ is not an upper bound of $S$, so some $s \in S$ fails $s \le M$. [given, L2]

2.1 By trichotomy that $s$ satisfies $s > M$, and being an element of $S$ it is a term: fix $K \in \mathbb{N}$ with $s = x_K$, so $x_K > M$. [step 1.1, L3, L5, choose]

3.1 For every $k \ge K$ monotonicity gives $x_K \le x_k$, hence $x_k \ge x_K > M$ and so $x_k > M$. [step 2.1, L1]

4.1 For every real $M$ an index $K$ has been produced with $x_k > M$ for all $k \ge K$, which is exactly divergence to $+\infty$. [step 3.1, L4] ∎

## Remarks

- **Only "not bounded above" is used, not unboundedness of the sequence.** For a
  nondecreasing sequence the two coincide, since such a sequence is bounded below
  by $x_0$ ([[def-monotone-sequence]]), so a nondecreasing sequence is unbounded
  exactly when its range is not bounded above. The hypothesis is stated in the
  one-sided form because that is the form the proof consumes.

- **The dual statement holds with the same proof**: a nonincreasing sequence
  whose range is not bounded below diverges to $-\infty$. Reflecting through the
  origin turns one into the other.

- **$+\infty$ is not a limit.** [[def-divergence-to-infinity]] is deliberately
  not a case of [[def-real-limit]]: a sequence diverging to $+\infty$ is
  unbounded, hence not convergent ([[lem-convergent-implies-bounded]]), and the
  arrow in $x_k \to +\infty$ is an abbreviation for the displayed quantifier
  statement and never an equation.

- The companion statement is [[thm-monotone-convergence]]: between them, a
  nondecreasing sequence converges to the supremum of its range or diverges to
  $+\infty$, with no third possibility.
