---
id: ex-the-reciprocal-of-k-plus-one-is-null
kind: example
title: "The sequence $1/(k+1)$ converges to $0$"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-sequence, def-real-limit, def-real-numbers, def-real-order, def-abs-value, def-field, def-ordered-field, def-complete-ordered-field, lem-rat-embeds-dense, lem-rat-archimedean, lem-of-inverse-positive, lem-of-naturals-positive, lem-nat-order-add-compatible, def-nat-order, def-nat-addition]
justified_by: []
aliases: []
landmark: false
dependency_level: 1
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
      locator: "§3.3 Definition 3.10 and Example 3.14 (printed pp. 41-42): the epsilon-N definition of convergence and the Archimedean proof that 1/n tends to 0"
    - title: "Jiri Lebl, Basic Analysis I: Introduction to Real Analysis, Volume I (author-hosted complete book PDF)"
      url: "https://www.jirka.org/ra/realanal.pdf"
      locator: "§2.1 Definition 2.1.2 and Example 2.1.4 (printed pp. 51-53): convergence defined as 'for every epsilon > 0 there is an M', with 1/n tending to 0 proved from the Archimedean property"
---

## Example

The sequence of reals $x_k := (k+1)^{-1}$, with $k+1 = \sigma(k)$ the successor
of $k$ read in $\mathbb{R}$ through the canonical-natural embedding
([[lem-of-naturals-positive]]), converges to $0$ ([[def-real-limit]],
[[def-sequence]]). Every term is defined and positive. This is the real-sequence
counterpart of the rational null sequence $1/n$ of the construction page, and it
is the reference null sequence of this page: the later examples and
counterexamples compute with it. The argument spends only density of
$\mathbb{Q}$ in $\mathbb{R}$ ([[lem-rat-embeds-dense]]), the Archimedean
property of $\mathbb{Q}$ ([[lem-rat-archimedean]]) and reciprocal reversal
([[lem-of-inverse-positive]]); no completeness beyond the Archimedean property
and no choice principle is used.

## Facts & Assumptions

**Given:** A real number $\varepsilon > 0$, and for every natural $k$ the real $x_k := (k+1)^{-1}$, where $k+1 = \sigma(k)$ is the successor of $k$ read in $\mathbb{R}$ through the canonical-natural embedding ([[def-sequence]], [[lem-of-naturals-positive]]).

[F1] Density of $\mathbb{Q}$ in $\mathbb{R}$: strictly between any two reals lies a rational, so for every real $\varepsilon > 0$ there is a rational $q$ with $0 < q < \varepsilon$ ([[lem-rat-embeds-dense]]).

[F2] The rationals are Archimedean: for every rational $\varepsilon > 0$ there is a natural $n \ge 1$ with $n^{-1} < \varepsilon$ ([[lem-rat-archimedean]]).

[F3] Reciprocation reverses order on positives: $0 < a < b$ implies $0 < b^{-1} < a^{-1}$, and $a > 0$ implies $a^{-1} > 0$ ([[lem-of-inverse-positive]]).

[F4] Canonical naturals: for every $n \ge 1$ the element $n \cdot 1_{\mathbb{R}}$ is positive, and the map $n \mapsto n \cdot 1_{\mathbb{R}}$ is strictly increasing on $\{1, 2, 3, \dots\}$, hence preserves non-strict order there ([[lem-of-naturals-positive]]).

[F5] Order is compatible with addition in $\mathbb{N}$: $m \le n \iff m + k \le n + k$, and $m < n \iff m + k < n + k$; and $m \le n$ with $m \ne n$ reads $m < n$ ([[lem-nat-order-add-compatible]], [[def-nat-order]]).

[F6] Absolute value: $|u| = u$ whenever $u \ge 0$ ([[def-abs-value]]).

[F7] Convergence: a sequence $(z_k)$ of reals converges to $z$ when for every rational $\varepsilon > 0$ there is $K$ with $|z_k - z| < \varepsilon$ for all $k \ge K$ ([[def-real-limit]]).

## Verification

**Proof technique:** direct.

1.1 Let a real $\varepsilon > 0$ be given. By [F1] choose a rational $q$ with $0 < q < \varepsilon$, and by [F2] choose a natural $N \ge 1$ with $N^{-1} < q$. [given, F1, F2, choose]

2.1 For every natural $k \ge N$ one has $N + 1 \le k + 1$ by [F5]. Read in $\mathbb{R}$ through the canonical-natural embedding, [F4] gives $0 < N < N+1$ since $N \ge 1$, and $N+1 \le k+1$ because $N+1 \le k+1$ is either an equality of naturals, when the images agree, or a strict inequality of naturals at least $2$, when [F4] makes the images strictly increase. [step 1.1, F4, F5, algebra]

3.1 For such $k$, apply [F3] to $0 < N < N+1$ to get $(N+1)^{-1} < N^{-1}$; and $(k+1)^{-1} \le (N+1)^{-1}$ because $N+1 \le k+1$ is an equality or a strict inequality of positive reals, the strict case being [F3] again. Chaining with step 1.1, $(k+1)^{-1} \le (N+1)^{-1} < N^{-1} < q < \varepsilon$. [step 2.1, step 1.1, F3, algebra]

4.1 Every term is positive: $k + 1 \ge 1$ in $\mathbb{N}$, so $k+1 > 0$ by [F4] and $(k+1)^{-1} > 0$ by [F3]; and $|x_k - 0| = |x_k| = (k+1)^{-1}$ by [F6]. With step 3.1 this gives $|x_k - 0| < \varepsilon$ for all $k \ge N$. [step 3.1, F3, F4, F6]

5.1 Steps 1.1 through 4.1 were run for an arbitrary real $\varepsilon > 0$, hence in particular for every rational $\varepsilon > 0$, and the threshold $N$ produced witnesses the convergence condition of [F7]. Therefore $x_k \to 0$. [step 1.1, step 4.1, F7] ∎
