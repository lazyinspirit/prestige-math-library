---
id: fs-consecutive-differences-null-implies-cauchy
kind: false-statement
title: "FALSE: if $|x_{k+1} - x_k| \\to 0$ then $(x_k)$ is Cauchy"
status: published
origin: session
deps: [def-real-limit, def-sequence, def-contractive-sequence, thm-contractive-implies-cauchy, thm-of-square-roots, lem-power-difference-factorisation, lem-power-monotone, lem-power-laws, def-integer-power, lem-of-inverse-positive, cor-archimedean-reciprocal, thm-of-archimedean, lem-cauchy-sequence-bounded, lem-of-abs-value, lem-of-naturals-positive, def-complete-ordered-field, def-ordered-field]
justified_by: []
forward_refs: [cex-sqrt-k-differences-null-not-cauchy, cex-strictly-decreasing-gaps-no-limit]
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
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "R. Bartle and D. Sherbert, Introduction to Real Analysis, 4th ed., §3.5"
      url: "https://en.wikipedia.org/wiki/Fixed-point_iteration"
    - title: "J. Lebl, Basic Analysis I, §2.4"
      url: "https://www.jirka.org/ra/"
---

## Statement

**False claim:** if $(x_k)$ is a sequence of reals whose consecutive differences
tend to $0$, that is $|x_{k+1} - x_k| \to 0$ ([[def-sequence]],
[[def-real-limit]]), then $(x_k)$ is Cauchy.

The claim is the tempting misreading of the Cauchy condition. Being Cauchy
requires $|x_m - x_k|$ to be small for **all** large $m$ and $k$; the hypothesis
above controls only the case $m = k+1$, and finitely many small steps still
accumulate without bound.

The witness is $x_k = \sqrt k$, refuted below and recorded separately as
the named counterexample of the companion page. Its consecutive differences are
$\sqrt{k+1} - \sqrt k = 1/(\sqrt{k+1} + \sqrt k)$, which tend to $0$, while the
sequence itself is unbounded and so cannot be Cauchy
([[lem-cauchy-sequence-bounded]]).

**What is true in this direction** is [[thm-contractive-implies-cauchy]]: if the
differences shrink *geometrically*, with a single ratio $c < 1$ working at every
index ([[def-contractive-sequence]]), then the sequence is Cauchy. The gap
between the two hypotheses is exactly the uniform ratio.

## Facts & Assumptions

**Given:** The sequence $(x_k)$ of reals with $x_k := \sqrt{k}$, where $k$ denotes the canonical natural $k \cdot 1_{\mathbb{R}}$ and $\sqrt{\cdot}$ the nonnegative square root ([[def-sequence]]).

[L1] Square roots: every $a \ge 0$ has a unique $s \ge 0$ with $s^2 = a$, written $\sqrt a$ ([[thm-of-square-roots]], [[def-integer-power]]).

[L2] Powers and order: for $a, b \ge 0$ and $n \ge 1$, $a < b$ exactly when $a^n < b^n$, and $a \le b$ exactly when $a^n \le b^n$; and $a \ge 0$ gives $a^n \ge 0$ ([[lem-power-monotone]]).

[L3] Factorisation at $n = 2$: $b^2 - a^2 = (b-a)(b+a)$ ([[lem-power-difference-factorisation]]); and $(uv)^n = u^n v^n$, so $(1/t)^2 = 1/t^2$ for $t \ne 0$ ([[lem-power-laws]]).

[L4] Canonical naturals: $n \cdot 1_{\mathbb{R}} > 0$ for $n \ge 1$, $0 \cdot 1_{\mathbb{R}} = 0$, and $m \mapsto m \cdot 1_{\mathbb{R}}$ is strictly increasing ([[lem-of-naturals-positive]]).

[L5] Reciprocals: $a > 0$ gives $1/a > 0$, and $0 < a < b$ gives $0 < 1/b < 1/a$ ([[lem-of-inverse-positive]]).

[L6] Archimedean property, in both forms: for every real $x$ there is a natural $n \ge 1$ with $x < n$, and for every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[thm-of-archimedean]], [[cor-archimedean-reciprocal]]).

[L7] Absolute value: $|t| \ge 0$, $|t| \ge t$, and $|t| = t$ for $t \ge 0$ ([[lem-of-abs-value]]).

[L8] Every Cauchy sequence of reals is bounded ([[lem-cauchy-sequence-bounded]]).

[L9] Convergence to $0$, boundedness, and the Cauchy condition; it suffices to test a real $\varepsilon > 0$ ([[def-real-limit]], [[def-sequence]]).

[L10] Trichotomy of the order on $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

[L11] The refuted claim: a sequence of reals whose consecutive differences tend to $0$ is Cauchy.

## Refutation

**Proof technique:** direct.

1.1 Each $x_k = \sqrt k$ is defined and $\ge 0$, since the canonical natural $k$ satisfies $k \ge 0$; and $x_{k+1} > 0$ for every $k$, since $k+1 \ge 1$ gives $k + 1 > 0$ and hence $\sqrt{k+1} > 0$. [given, L1, L2, L4]

1.2 $(x_k)$ is not bounded. Let $M \in \mathbb{R}$ and put $M' := |M| \ge M$, so $M' \ge 0$. By [L6] fix a natural $n \ge 1$ with $(M')^2 < n$. Then $(x_n)^2 = n > (M')^2$ with $x_n \ge 0$ and $M' \ge 0$, so $x_n > M' \ge M$, and $|x_n| = x_n > M$. [given, L1, L2, L4, L6, L7]

2.1 For every $k$: $(\sqrt{k+1} - \sqrt k)(\sqrt{k+1} + \sqrt k) = (\sqrt{k+1})^2 - (\sqrt k)^2 = (k+1) - k = 1$, and $\sqrt{k+1} + \sqrt k \ge \sqrt{k+1} > 0$, so $\sqrt{k+1} - \sqrt k = 1/(\sqrt{k+1} + \sqrt k) > 0$. [step 1.1, L1, L3, L5]

2.2 A Cauchy sequence of reals is bounded, so an unbounded sequence is not Cauchy; by step 1.2 no real $M$ bounds $(|x_k|)$, so $(x_k)$ is not Cauchy. [step 1.2, L8, L9, L10]

3.1 Hence $|x_{k+1} - x_k| = \sqrt{k+1} - \sqrt{k} = 1/(\sqrt{k+1}+\sqrt k) \le 1/\sqrt{k+1}$, the last inequality because $0 < \sqrt{k+1} \le \sqrt{k+1} + \sqrt k$. [step 2.1, L5, L7]

4.1 Let $\varepsilon > 0$ be real. By [L6] fix a natural $n \ge 1$ with $1/n < \varepsilon^2$. For every $k \ge n$ we have $k + 1 > n > 0$, so $1/(k+1) < 1/n < \varepsilon^2$. [step 3.1, L4, L5, L6, choose]

5.1 Taking square roots in step 4.1: $\big(1/\sqrt{k+1}\big)^2 = 1/(k+1) < \varepsilon^2$ with both $1/\sqrt{k+1} \ge 0$ and $\varepsilon > 0$, so $1/\sqrt{k+1} < \varepsilon$, and therefore $|x_{k+1} - x_k| < \varepsilon$ for every $k \ge n$. [step 3.1, step 4.1, L2, L3, L5]

6.1 The real $\varepsilon > 0$ was arbitrary, so the consecutive differences of $(x_k)$ tend to $0$: the sequence satisfies the hypothesis of the claim. [step 5.1, L9, L11]

7.1 The sequence $x_k = \sqrt k$ therefore has consecutive differences tending to $0$ and is not Cauchy: the claim is false. [step 6.1, step 2.2, L11] ∎

## Remarks

- **The failure is not marginal.** The witness does not merely fail to be Cauchy;
  it is unbounded, and indeed $\sqrt k \to +\infty$. The consecutive differences
  are of size roughly $1/(2\sqrt k)$, so they are null, but their partial sums
  telescope to $\sqrt m - \sqrt k$, which is large when $m$ is much larger than
  $k$. Nothing about "small steps" constrains what many steps accumulate to.

- **The repair is a uniform ratio, not a faster rate.** It is tempting to think
  that a fast enough decay of the gaps would suffice, and in a sense that is
  true, since summability of the gaps implies Cauchy; but the hypothesis
  available in practice is the contractive one, a single $c < 1$ with
  $|x_{k+2} - x_{k+1}| \le c|x_{k+1} - x_k|$, and that is what
  [[thm-contractive-implies-cauchy]] consumes. Merely having each gap smaller
  than the last is not enough either, which is the separate witness
  [[cex-strictly-decreasing-gaps-no-limit]].

- **Both false statements on this page have the same shape.** A condition that
  looks like the Cauchy condition, but at only one pair of indices per step, is
  not the Cauchy condition. The other one is
  [[fs-convergent-subsequence-implies-bounded]], where a condition holding along
  one subsequence is mistaken for a condition on the sequence.

- The witness is recorded as the named counterexample
  [[cex-sqrt-k-differences-null-not-cauchy]], which adds the sharper statement
  that $\sqrt k$ diverges to $+\infty$.
