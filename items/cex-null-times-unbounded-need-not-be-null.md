---
id: cex-null-times-unbounded-need-not-be-null
kind: counterexample
title: "A null sequence times an unbounded sequence need not be null: $(k+1)^{-1}\\cdot(k+1) = 1$"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [ex-the-reciprocal-of-k-plus-one-is-null, lem-null-times-bounded, def-divergence-to-infinity, thm-of-archimedean, lem-of-naturals-positive, lem-nat-order-add-compatible, def-field, def-sequence, def-real-limit, def-abs-value, def-ordered-field, cor-of-one-positive, lem-rat-embeds-dense, def-real-order, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: false
dependency_level: 3
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
      locator: "§3.4, proof of the product clause of Theorem 3.26 (printed pp. 46-47): the proof uses boundedness of the convergent factor, which is what this counterexample shows cannot be dropped"
    - title: "Jiri Lebl, Basic Analysis I: Introduction to Real Analysis, Volume I (author-hosted complete book PDF)"
      url: "https://www.jirka.org/ra/realanal.pdf"
      locator: "§2.2 Exercise 2.2.6 (printed p. 71): the quotients z_n = x_n/y_n and w_n = y_n/x_n for x_n = 1/n^2, y_n = 1/n, where hypothesis failures block Proposition 2.2.5"
---

## Statement refuted

**Refuted claim:** if $(x_k)$ converges to $0$, then the product $x_k y_k$
converges to $0$ for every sequence $(y_k)$ of reals.

The witnesses are $x_k := (k+1)^{-1}$ and $y_k := k+1$, where $k+1 = \sigma(k)$
is read in $\mathbb{R}$ through the canonical-natural embedding
([[lem-of-naturals-positive]]): $(x_k)$ is null
([[ex-the-reciprocal-of-k-plus-one-is-null]]) and $(y_k)$ diverges to $+\infty$,
but $x_k y_k = 1$ for every $k$, so the product does not converge to $0$: its
distance from $0$ is $1$ at every index, and the rational test value
$\varepsilon = 1$ never passes. The boundedness hypothesis of
[[lem-null-times-bounded]] therefore cannot be dropped; it is the only hypothesis
that lemma uses beyond convergence of the null factor.

## Facts & Assumptions

**Given:** The sequences $x_k := (k+1)^{-1}$ and $y_k := k+1$, where $k+1 = \sigma(k)$ is the successor of $k$ read in $\mathbb{R}$ through the canonical-natural embedding ([[def-sequence]], [[lem-of-naturals-positive]]).

[F1] $(x_k)$ converges to $0$ and every term $x_k$ is positive ([[ex-the-reciprocal-of-k-plus-one-is-null]]).

[F2] Divergence to $+\infty$: $y_k \to +\infty$ means that for every real $M$ there is $K$ with $y_k > M$ for all $k \ge K$ ([[def-divergence-to-infinity]]).

[F3] Archimedean property: for every real $x$ there is a natural number $n \ge 1$ with $x < n \cdot 1_{\mathbb{R}}$ ([[thm-of-archimedean]]).

[F4] Canonical naturals: for every $n \ge 1$ the element $n \cdot 1_{\mathbb{R}}$ is positive, and $n \mapsto n \cdot 1_{\mathbb{R}}$ is strictly increasing on $\{1, 2, 3, \dots\}$, hence preserves non-strict order there ([[lem-of-naturals-positive]]).

[F5] Order is compatible with addition in $\mathbb{N}$: for all naturals $m, n, k$ one has $m \le n \iff m + k \le n + k$ ([[lem-nat-order-add-compatible]]).

[F6] Field arithmetic: every nonzero element $u$ has a multiplicative inverse $u^{-1}$ with $u \cdot u^{-1} = 1$ ([[def-field]]).

[F7] The boundedness hypothesis: if $(x_k)$ converges to $0$ and $(y_k)$ is bounded, then $(x_k y_k)$ converges to $0$ ([[lem-null-times-bounded]]).

[F8] Absolute value: $|u| = u$ whenever $u \ge 0$ ([[def-abs-value]]).

[F9] Convergence: a sequence $(z_k)$ of reals converges to $z$ when for every rational $\varepsilon > 0$ there is $K$ with $|z_k - z| < \varepsilon$ for all $k \ge K$ ([[def-real-limit]]).

[F10] Strict order: for all reals $u, v$ exactly one of $u < v$, $u = v$, $v < u$ holds, so $u < u$ is false ([[def-ordered-field]]).

[F11] $0 < 1$ in $\mathbb{R}$ ([[cor-of-one-positive]]).

[F12] The map $q \mapsto \hat q$ is an embedding of ordered fields, so the rational $1$ is identified with the real $1$ ([[lem-rat-embeds-dense]]).

[F13] Boundedness: $(z_k)$ is bounded when there is a real $M$ with $|z_k| \le M$ for every $k \in \mathbb{N}$ ([[def-sequence]]).

## Counterexample

**Proof technique:** direct.

1.1 $(y_k) = (k+1)$ diverges to $+\infty$: given a real $M$, [F3] supplies a natural $N \ge 1$ with $M < N$, and for every $k \ge N$ one has $N + 1 \le k + 1$ by [F5], hence $N < N+1 \le k+1$ by [F4], so $y_k = k+1 > M$; this is exactly the condition of [F2] with $K = N$. [given, F2, F3, F4, F5]

1.2 $(x_k)$ converges to $0$ and every term $x_k$ is positive by [F1]. [given, F1]

1.3 For every $k$ the factor $k+1$ is nonzero, and field arithmetic [F6] gives $x_k y_k = (k+1)^{-1}(k+1) = 1$. [given, F4, F6, algebra]

2.1 The product sequence is therefore constantly $1$. At the rational test value $\varepsilon := 1$, identified with its real image by [F12] and positive by [F11], the convergence condition of [F9] would require $|x_k y_k - 0| < 1$ for all large $k$; but $|x_k y_k - 0| = |1| = 1$ by [F8] and [F11], and $1 < 1$ is false by [F10]. So no threshold satisfies the test: the product does not converge to $0$. [step 1.3, F8, F9, F10, F11, F12, algebra]

3.1 The refutation is complete: $(x_k)$ is null by step 1.2, $(y_k)$ diverges to $+\infty$ by step 1.1, and the product fails to converge to $0$ by step 2.1. Moreover $(y_k)$ is not bounded in the sense of [F13]: if $|y_k| \le M$ held for every $k$, then for an index beyond the threshold belonging to the real $M$ of step 1.1 one would have both $y_k > M$ and $y_k \le |y_k| \le M$. Since [F7] is true under the additional boundedness hypothesis with the same conclusion, the hypothesis is exactly what the counterexample removes, and it cannot be dropped. [step 1.1, step 1.2, step 2.1, F7, F13] ∎
