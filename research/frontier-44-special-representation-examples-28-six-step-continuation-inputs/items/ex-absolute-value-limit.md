---
id: ex-absolute-value-limit
kind: example
title: "The absolute value of the limit, and the limit of the absolute value"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [ex-the-reciprocal-of-k-plus-one-is-null, thm-algebra-of-limits, lem-limit-abs, lem-limit-unique, def-sequence, def-real-limit, def-abs-value, def-real-order, def-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, prop-of-reciprocal-order]
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
      locator: "§3.4 Corollary 3.25 (printed p. 46): x_n tends to x implies |x_n| tends to |x|, proved from the reverse triangle inequality"
    - title: "Jiri Lebl, Basic Analysis I: Introduction to Real Analysis, Volume I (author-hosted complete book PDF)"
      url: "https://www.jirka.org/ra/realanal.pdf"
      locator: "§2.2 Proposition 2.2.7 (printed pp. 65-66): convergence of absolute values, with the note that the converse is false (Exercise 2.1.7(b))"
---

## Example

Let $x_k := (k+1)^{-1} - 1$. Then $x_k \to -1$, and $|x_k| \to 1 = |-1|$
([[lem-limit-abs]], [[def-real-limit]]). Since $|x_k| = 1 - (k+1)^{-1}$
converges to $1$ while $x_k$ converges to $-1 \ne 1$, this separates the two
halves of [[lem-limit-abs]]: the absolute value of the limit is recovered from
the absolute values, but the limit itself is not, and the reversal of the
implication fails for a nonzero limit exactly as it does for the boundedness
direction discussed in the remarks of that item.

## Facts & Assumptions

**Given:** The sequences $x_k := (k+1)^{-1} - 1$ and $u_k := (k+1)^{-1}$, where $k+1 = \sigma(k)$ is read in $\mathbb{R}$ through the canonical-natural embedding ([[def-sequence]]).

[F1] $(u_k)$ converges to $0$ and every $u_k$ is positive ([[ex-the-reciprocal-of-k-plus-one-is-null]]).

[F2] Sum clause of the algebra of limits: if $(p_k)$ converges to $p$ and $(q_k)$ converges to $q$, then $p_k + q_k$ converges to $p + q$ ([[thm-algebra-of-limits]]).

[F3] Absolute values of limits: if $(z_k)$ converges to $z$ then $(|z_k|)$ converges to $|z|$ ([[lem-limit-abs]]).

[F4] Uniqueness of limits: if $(z_k)$ converges to $z$ and to $z'$, then $z = z'$ ([[lem-limit-unique]]).

[F5] Absolute value: $|u| = u$ if $u \ge 0$ and $|u| = -u$ if $u < 0$; so $|0| = 0$ and $|-1| = -(-1) = 1$ because $-1 < 0$ ([[def-abs-value]]).

[F6] Reciprocals against $1$: for $r > 0$, $r \ge 1 \iff 0 < r^{-1} \le 1$ ([[prop-of-reciprocal-order]]).

[F7] $0 < 1$ in $\mathbb{R}$ ([[cor-of-one-positive]]).

[F8] Translation invariance: $a < b$ implies $a + c < b + c$ ([[lem-of-add-order]]).

[F9] Convergence: $(z_k)$ converges to $z$ when for every rational $\varepsilon > 0$ there is $K$ with $|z_k - z| < \varepsilon$ for all $k \ge K$ ([[def-real-limit]]).

[F10] Field arithmetic: $u - v = u + (-v)$, $-(u - v) = v - u$, and $-( -1) = 1$ ([[def-field]]).

[F11] Trichotomy: for all reals $u, v$ exactly one of $u < v$, $u = v$, $v < u$ holds ([[def-ordered-field]], [[def-real-order]]).

## Verification

**Proof technique:** direct.

1.1 The sequence $(u_k)$ converges to $0$ with every term positive. [given, F1]

1.2 For every real $c$ the constant sequence $c$ converges to $c$: given a rational $\varepsilon > 0$ and any index $k$, $|c - c| = |0| = 0 < \varepsilon$ by [F5], so the threshold $K = 0$ witnesses the condition of [F9]. [F5, F9]

2.1 The sum $x_k = u_k + (-1)$ converges to $0 + (-1) = -1$ by the sum clause [F2] applied to step 1.1 and to the constant sequence $-1$ of step 1.2. [step 1.1, step 1.2, F2]

2.2 For every $k$ one has $0 < u_k \le 1$: positivity is [F1], and $u_k \le 1$ is the case $r = k+1 \ge 1$ of [F6]. Hence $x_k = u_k - 1 \le 0$ and, by the negative case of [F5], $|x_k| = -x_k = 1 - u_k$. [step 1.1, F1, F5, F6, F10]

3.1 Hence $|x_k| \to |-1| = 1$: step 2.1 and [F3] give $|x_k| \to |-1|$, and $|-1| = 1$ because $-1 < 0$ by [F7] and [F8], so [F5] gives $|-1| = -(-1) = 1$ by [F10]. [step 2.1, F3, F5, F7, F8, F10]

4.1 If the implication of [F3] could be reversed at this limit, then $|x_k| \to 1$ would give $x_k \to 1$; but $x_k \to -1$ by step 2.1, so uniqueness [F4] would force $-1 = 1$, which is false since $-1 < 0 < 1$ by [F7] and [F8] together with trichotomy [F11]. So the reversal fails for the nonzero limit $-1$, while by step 3.1 the absolute values do converge to $|-1| = 1$, which is exactly the separation claimed. [step 2.1, step 3.1, F4, F7, F8, F11] ∎
