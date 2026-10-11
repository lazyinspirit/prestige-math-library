---
id: cex-squeeze-with-unequal-bound-limits
kind: counterexample
title: "The squeeze theorem needs the two bounds to share their limit"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-squeeze, fs-bounded-implies-convergent, thm-induction-principle, lem-of-abs-value, def-abs-value, def-real-order, def-sequence, def-real-limit, def-ordered-field, lem-of-add-order, cor-of-one-positive, lem-of-sign-rules, thm-recursion]
justified_by: []
aliases: []
landmark: false
dependency_level: 4
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John K. Hunter, An Introduction to Real Analysis (complete author-hosted lecture notes, 307 pp.)"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
      locator: "§3.4 Example 3.24 (printed p. 46): for x_n = -1, y_n = 1 and z_n = (-1)^{n+1} the bracketing holds but (z_n) does not converge, with the preceding sentence that equal limits are essential"
    - title: "Jiri Lebl, Basic Analysis I: Introduction to Real Analysis, Volume I (author-hosted complete book PDF)"
      url: "https://www.jirka.org/ra/realanal.pdf"
      locator: "§2.2 Lemma 2.2.1 and the sentence before it (printed pp. 61-62): the squeeze lemma is stated with both bounds converging to the same limit L"
---

## Statement refuted

**Refuted claim:** if $a_k \le x_k \le b_k$ eventually and $(a_k)$ and $(b_k)$
both converge, then $(x_k)$ converges.

The witnesses are the constant sequences $a_k := -1$ and $b_k := 1$ together
with the alternating sequence $x_k := s_k$ of
[[fs-bounded-implies-convergent]]; the inequalities hold at every index, the two
bounds converge to $-1$ and $1$ respectively, and $(s_k)$ does not converge. So
[[thm-squeeze]] genuinely needs the two limit values to coincide, not merely the
two bounds to exist.

## Facts & Assumptions

**Given:** The unique sequences $(s_k)$ of reals with $s_0 = 1$ and $s_{\sigma(k)} = -s_k$ for every $k$ ([[thm-recursion]]), and the constant sequences $a_k := -1$, $b_k := 1$, $x_k := s_k$ ([[def-sequence]]).

[F1] The sequence $(s_k)$ is the alternating sequence of [[fs-bounded-implies-convergent]]: it is introduced there by the recursion $s_0 = 1$, $s_{\sigma(k)} = -s_k$ ([[fs-bounded-implies-convergent]]).

[F2] $(s_k)$ does not converge ([[fs-bounded-implies-convergent]]).

[F3] Absolute value is even: $|-u| = |u|$ ([[lem-of-abs-value]]).

[F4] Induction principle: if $P(0)$ holds and $P(k)$ implies $P(\sigma(k))$ for every $k$, then $P(k)$ holds for every natural $k$ ([[thm-induction-principle]]).

[F5] Absolute value: $|u| = u$ if $u \ge 0$ and $|u| = -u$ if $u < 0$; so $|0| = 0$, $|1| = 1$ and, for any $u$, the equality $|u| = 1$ forces $u = 1$ when $u \ge 0$ and $u = -1$ when $u < 0$ ([[def-abs-value]]).

[F6] Trichotomy: for all reals $u, v$ exactly one of $u < v$, $u = v$, $v < u$ holds, and the order is transitive ([[def-ordered-field]]).

[F7] $0 < 1$, so by adding constants $-1 < 1$ and in particular $1 \ne -1$, while $-1 \le 1$ ([[cor-of-one-positive]], [[lem-of-add-order]]).

[F8] Convergence: $(z_k)$ converges to $z$ when for every rational $\varepsilon > 0$ there is $K$ with $|z_k - z| < \varepsilon$ for all $k \ge K$ ([[def-real-limit]]).

[F9] Squeeze theorem: if $a_k \le x_k \le b_k$ eventually and $(a_k)$, $(b_k)$ both converge to the same real $L$, then $(x_k)$ converges to $L$ ([[thm-squeeze]]).

## Counterexample

**Proof technique:** direct.

1.1 By induction [F4], $|s_k| = 1$ for every $k$: the base is $|s_0| = |1| = 1$ by [F5], and if $|s_k| = 1$ then $|s_{\sigma(k)}| = |-s_k| = |s_k| = 1$ by [F3] and the recursion [F1]. [given, F1, F3, F4, F5]

1.2 The constant sequences converge to their values: given a rational $\varepsilon > 0$, the estimates $|-1 - (-1)| = |0| = 0 < \varepsilon$ and $|1 - 1| = |0| = 0 < \varepsilon$ hold at every index by [F5], so the threshold $K = 0$ witnesses the condition of [F8] in each case. [F5, F8]

1.3 $(s_k)$ does not converge by [F2], and the two limits $-1$ and $1$ are distinct by [F7]. [F2, F7]

2.1 Consequently $s_k \in \{1, -1\}$ for every $k$: if $s_k \ge 0$ then $s_k = |s_k| = 1$ by [F5], while if $s_k < 0$ then $s_k = -|s_k| = -1$ by [F5]; trichotomy [F6] makes the two cases exhaustive. In both cases $-1 \le s_k \le 1$ by [F7]. [step 1.1, F5, F6, F7]

3.1 Steps 2.1 and 1.2 give $a_k \le x_k \le b_k$ at every index (hence eventually) with $(a_k) \to -1$ and $(b_k) \to 1$, while by step 1.3 the middle sequence does not converge; since the two bound limits differ, the equal-limit hypothesis of [F9] fails and the squeeze gives no conclusion — and indeed the conclusion is false. [step 1.2, step 1.3, step 2.1, F9] ∎
