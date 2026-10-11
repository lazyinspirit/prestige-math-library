---
id: ex-an-alternating-null-sequence
kind: example
title: "The alternating sequence $(-1)^k/(k+1)$ converges to $0$"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [fs-bounded-implies-convergent, lem-null-times-bounded, ex-the-reciprocal-of-k-plus-one-is-null, def-sequence, def-real-limit, thm-recursion, thm-induction-principle, lem-of-abs-value, def-abs-value, def-real-order, cor-of-one-positive, lem-of-sign-rules, def-ordered-field, def-field]
justified_by: []
aliases: []
landmark: false
dependency_level: 4
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  scraped: []
  references:
    - title: "John K. Hunter, An Introduction to Real Analysis (complete author-hosted lecture notes, 307 pp.)"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
      locator: "§3.4 Theorem 3.26 (printed pp. 46-47): the product clause is proved by first bounding the convergent factors, the mechanism this example isolates; §3.3 Example 3.15 (printed pp. 42-43): the sequence (-1)^{n+1} diverges"
    - title: "Jiri Lebl, Basic Analysis I: Introduction to Real Analysis, Volume I (author-hosted complete book PDF)"
      url: "https://www.jirka.org/ra/realanal.pdf"
      locator: "§2.1.4 Exercises 2.1.3 and 2.1.7(b), printed p. 59: an alternating decaying sequence and an exercise separating convergence of a sequence from convergence of its absolute values."
---

## Example

Let $(s_k)$ be the sequence with $s_0 = 1$ and $s_{\sigma(k)} = -s_k$ — the
sequence usually written $(-1)^k$, introduced and proved non-convergent as a
bounded sequence in [[fs-bounded-implies-convergent]]. The sequence
$y_k := s_k (k+1)^{-1}$ converges to $0$ ([[def-real-limit]]): a null sequence
may oscillate in sign at every term. The proof is the null-times-bounded lemma
([[lem-null-times-bounded]]) applied to the null sequence of
[[ex-the-reciprocal-of-k-plus-one-is-null]] and the bounded sequence $(s_k)$, so
no estimate depending on the sign pattern is needed.

## Facts & Assumptions

**Given:** The unique sequence $(s_k)$ of reals with $s_0 = 1$ and $s_{\sigma(k)} = -s_k$ ([[thm-recursion]]), the sequence $y_k := s_k (k+1)^{-1}$ ([[def-sequence]]), and the sequence $u_k := (k+1)^{-1}$.

[F1] The recursion: $(s_k)$ is the unique sequence with $s_0 = 1$ and $s_{\sigma(k)} = -s_k$ for every $k$ ([[fs-bounded-implies-convergent]]).

[F2] Induction principle: if $P(0)$ holds and $P(k)$ implies $P(\sigma(k))$ for every $k$, then $P(k)$ holds for every natural $k$ ([[thm-induction-principle]]).

[F3] Absolute value is even: $|-u| = |u|$ ([[lem-of-abs-value]]).

[F4] Absolute value: $|u| = u$ if $u \ge 0$ and $|u| = -u$ if $u < 0$ ([[def-abs-value]]).

[F5] $(u_k) = ((k+1)^{-1})$ converges to $0$ and every term is positive ([[ex-the-reciprocal-of-k-plus-one-is-null]]).

[F6] Null times bounded: if $(z_k)$ converges to $0$ and $(w_k)$ is bounded, then $(z_k w_k)$ converges to $0$ ([[lem-null-times-bounded]]).

[F7] Boundedness: $(z_k)$ is bounded when there is a real $M$ with $|z_k| \le M$ for every $k \in \mathbb{N}$ ([[def-sequence]]).

[F8] $0 < 1$ in $\mathbb{R}$ ([[cor-of-one-positive]]).

## Verification

**Proof technique:** direct.

1.1 By induction [F2], $|s_k| = 1$ for every $k$: the base is $|s_0| = |1| = 1$, valid because $1 \ge 0$ by [F8] and $|u| = u$ for $u \ge 0$ by [F4]; and if $|s_k| = 1$ then $|s_{\sigma(k)}| = |-s_k| = |s_k| = 1$ by the recursion [F1] and [F3]. [given, F1, F2, F3, F4, F8]

1.2 The sequence $(u_k) = ((k+1)^{-1})$ converges to $0$. [given, F5]

2.1 Hence $(s_k)$ is bounded with bound $1$: $|s_k| = 1 \le 1$ for every $k$, which is the condition of [F7] with $M = 1$. [step 1.1, F7]

3.1 The product $y_k = s_k u_k$ is the product of the bounded sequence $(s_k)$ of step 2.1 and the null sequence $(u_k)$ of step 1.2, so [F6] gives $y_k \to 0$; no hypothesis on the sign pattern of $(s_k)$ beyond boundedness is used. [step 2.1, step 1.2, F6] ∎
