---
id: cex-sum-of-divergent-sequences-converges
kind: counterexample
title: "The sum of two divergent sequences can converge: $k + (-k)$"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-divergence-to-infinity, thm-of-archimedean, lem-of-naturals-positive, def-sequence, def-real-limit, lem-convergent-implies-bounded, def-field, def-ordered-field, def-real-order, def-abs-value, thm-algebra-of-limits]
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
      locator: "§3.4, the paragraph after Theorem 3.26 (printed pp. 46-47): the convergence of x_n + y_n does not imply the convergence of x_n and y_n separately, with the witness x_n = n and y_n = -n"
    - title: "Jiri Lebl, Basic Analysis I: Introduction to Real Analysis, Volume I (author-hosted complete book PDF)"
      url: "https://www.jirka.org/ra/realanal.pdf"
      locator: "§2.2, printed p. 66, the caution after Proposition 2.2.7: n^2/(n+1)-n converges although its two terms diverge, so limit arithmetic cannot be applied to them separately."
---

## Statement refuted

**Refuted claim:** if the sum $(x_k + y_k)$ of two sequences of reals converges,
then $(x_k)$ and $(y_k)$ both converge.

The witnesses are $x_k := k$ and $y_k := -k$, where $k$ denotes the canonical
natural of $\mathbb{R}$ ([[lem-of-naturals-positive]]): $(x_k)$ diverges to
$+\infty$ and $(y_k)$ to $-\infty$, while the sum is the constant sequence $0$,
which converges to $0$ ([[def-sequence]], [[def-real-limit]]). This is the
caution noted immediately after the algebra of limits: the clauses of
[[thm-algebra-of-limits]] may not be read backwards.

## Facts & Assumptions

**Given:** The sequences $x_k := k$ and $y_k := -k$, where the natural $k$ denotes its canonical image $k \cdot 1_{\mathbb{R}}$ in $\mathbb{R}$ ([[def-sequence]], [[lem-of-naturals-positive]]).

[F1] Divergence to signed infinity: $z_k \to +\infty$ when for every real $M$ there is $K$ with $z_k > M$ for all $k \ge K$; and $z_k \to -\infty$ when for every real $M$ there is $K$ with $z_k < M$ for all $k \ge K$ ([[def-divergence-to-infinity]]).

[F2] Archimedean property: for every real $x$ there is a natural number $n \ge 1$ with $x < n \cdot 1_{\mathbb{R}}$ ([[thm-of-archimedean]]).

[F3] Canonical naturals: for every $n \ge 1$ the element $n \cdot 1_{\mathbb{R}}$ is positive, and $n \mapsto n \cdot 1_{\mathbb{R}}$ is strictly increasing on $\{1, 2, 3, \dots\}$, hence preserves non-strict order there ([[lem-of-naturals-positive]]).

[F4] Order arithmetic in an ordered field: $a < b$ means $b - a$ is positive, so $a < b$ if and only if $-b < -a$; and trichotomy holds for the strict order ([[def-ordered-field]], [[def-real-order]]).

[F5] Field arithmetic: every element $u$ has an additive inverse $-u$ with $u + (-u) = 0$, and $u - u = 0$ ([[def-field]]).

[F6] Absolute value: $|u| = u$ whenever $u \ge 0$, so $|0| = 0$ ([[def-abs-value]]).

[F7] Convergence: a sequence $(z_k)$ converges to $z$ when for every rational $\varepsilon > 0$ there is $K$ with $|z_k - z| < \varepsilon$ for all $k \ge K$ ([[def-real-limit]]).

[F8] Every convergent sequence is bounded: if $(z_k)$ converges to $z$ then there is $M$ with $|z_k| \le M$ for every $k$ ([[lem-convergent-implies-bounded]]).

[F9] Boundedness: $(z_k)$ is bounded when there is a real $M$ with $|z_k| \le M$ for every $k \in \mathbb{N}$ ([[def-sequence]]).

[F10] A sequence diverging to $+\infty$ or to $-\infty$ is unbounded, and an unbounded sequence is not convergent — the latter being the contrapositive of [F8] ([[def-divergence-to-infinity]], [[lem-convergent-implies-bounded]], [[def-sequence]]).

[F11] Sum rule of the algebra of limits: if $(u_k)$ converges to $u$ and $(v_k)$ converges to $v$, then $u_k + v_k$ converges to $u + v$ ([[thm-algebra-of-limits]]).

## Counterexample

**Proof technique:** direct.

1.1 $(x_k) = (k)$ diverges to $+\infty$: given a real $M$, [F2] supplies a natural $N \ge 1$ with $M < N$, and for every $k \ge N$ the order preservation of [F3] gives $N \le k$, so $x_k > M$; this is the condition of [F1] with $K = N$. [given, F1, F2, F3]

1.2 $(y_k) = (-k)$ diverges to $-\infty$: given a real $M$, apply [F2] to $-M$ to get a natural $N \ge 1$ with $-M < N$; for every $k \ge N$ order preservation [F3] gives $N \le k$, and [F4] turns $-M < k$ into $-k < M$, so $y_k < M$ for all $k \ge N$. [given, F1, F2, F3, F4]

1.3 For every $k$ the sum is $x_k + y_k = k + (-k) = 0$, so the sum sequence is constantly $0$. [given, F5]

2.1 The constant sequence $0$ converges to $0$: for a rational $\varepsilon > 0$ and every $k$, $|0 - 0| = |0| = 0 < \varepsilon$ by [F6], so the threshold $K = 0$ witnesses the condition of [F7]. [step 1.3, F6, F7]

3.1 Neither summand converges: by steps 1.1 and 1.2 the sequences diverge to signed infinity, so by [F10] they are unbounded in the sense of [F9] and do not converge. Meanwhile the sum converges to $0$ by step 2.1, although the convergence hypothesis of the sum rule [F11] fails for both summands; hence the sum rule cannot be read backwards and the refuted claim fails. [step 1.1, step 1.2, step 2.1, F8, F9, F10, F11] ∎
