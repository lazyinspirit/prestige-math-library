---
id: ex-two-squeeze-computations
kind: example
title: "Two squeeze computations: $1/((k+1)\\sqrt{k+1}) \\to 0$ and $(k+(-1)^k)/(k+1) \\to 1$"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-squeeze, thm-algebra-of-limits, ex-the-reciprocal-of-k-plus-one-is-null, fs-bounded-implies-convergent, thm-of-square-roots, lem-of-square-monotone, lem-of-inverse-positive, prop-of-multiply-inequalities, lem-of-sign-rules, def-field, def-ordered-field, def-sequence, def-real-limit, def-abs-value, lem-of-add-order, cor-of-one-positive, thm-induction-principle, lem-of-naturals-positive]
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
      locator: "§3.4 Theorem 3.23 (Sandwich), printed pp. 45-46, and Example 3.24, printed p. 46: squeeze with equal bound limits and its failure when those limits differ."
    - title: "Jiri Lebl, Basic Analysis I: Introduction to Real Analysis, Volume I (author-hosted complete book PDF)"
      url: "https://www.jirka.org/ra/realanal.pdf"
      locator: "§2.2 Example 2.2.2, printed pp. 61-62: 1/(n sqrt(n)) tends to 0 by squeeze; §2.1.4 Exercise 2.1.6, printed p. 59: n/(n^2+1)."
---

## Example

(i) The sequence $a_k := \big((k+1)\sqrt{k+1}\big)^{-1}$ converges to $0$,
squeezed between the constant sequence $0$ and $(k+1)^{-1}$. (ii) With $(s_k)$
the alternating sequence of [[fs-bounded-implies-convergent]], the sequence
$b_k := (k + s_k)/(k+1)$ converges to $1$, squeezed between
$1 - 2(k+1)^{-1}$ and the constant $1$. Both use [[thm-squeeze]]; in (ii) the
middle sequence is not presented as a sum of two sequences whose limits are
known in advance, which is what the squeeze theorem is for.

## Facts & Assumptions

**Given:** For every natural $k$ the reals $\sqrt{k+1}$ with $k+1 = \sigma(k)$ ([[def-sequence]]), the sequence $u_k := (k+1)^{-1}$, and the alternating sequence $(s_k)$ with $s_0 = 1$, $s_{\sigma(k)} = -s_k$ ([[fs-bounded-implies-convergent]]); the sequences $a_k := \big((k+1)\sqrt{k+1}\big)^{-1}$ and $b_k := (k+s_k)/(k+1)$.

[F1] Squeeze theorem: if $a_k \le x_k \le b_k$ eventually and $(a_k)$, $(b_k)$ both converge to the same real $L$, then $(x_k)$ converges to $L$ ([[thm-squeeze]]).

[F2] Sum and scalar clauses of the algebra of limits: if $(p_k)$ converges to $p$ and $(q_k)$ converges to $q$, then $p_k + q_k$ converges to $p + q$; and $c\,p_k$ converges to $c\,p$ for every real $c$ ([[thm-algebra-of-limits]]).

[F3] $(u_k) = ((k+1)^{-1})$ converges to $0$ and every $u_k$ is positive ([[ex-the-reciprocal-of-k-plus-one-is-null]]).

[F4] The recursion $s_0 = 1$, $s_{\sigma(k)} = -s_k$ defines the alternating sequence $(s_k)$ ([[fs-bounded-implies-convergent]]).

[F5] Induction principle ([[thm-induction-principle]]).

[F6] Square roots: every real $a \ge 0$ has a unique $s \ge 0$ with $s^2 = a$, written $\sqrt{a}$ ([[thm-of-square-roots]]).

[F7] Monotonicity of squaring on nonnegatives: for $a, b \ge 0$, $a \le b \iff a^2 \le b^2$ ([[lem-of-square-monotone]]).

[F8] Inverses of positives: $a > 0$ implies $a^{-1} > 0$; and $0 < a < b$ implies $0 < b^{-1} < a^{-1}$ ([[lem-of-inverse-positive]]).

[F9] Multiplying inequalities of nonnegatives: $0 \le x \le y$ and $0 \le u \le v$ imply $xu \le yv$ ([[prop-of-multiply-inequalities]]).

[F10] Sign rules: a product of two nonnegatives is nonnegative, and for $c > 0$, $x < y$ implies $xc < yc$ ([[lem-of-sign-rules]]).

[F11] Field arithmetic: every nonzero element has an inverse and multiplication distributes over addition ([[def-field]]).

[F12] Order arithmetic: the positives are closed under addition and trichotomy holds, so $2 := 1+1$ is positive and $2 \ne 0$ ([[def-ordered-field]], [[cor-of-one-positive]]).

[F13] Convergence: $(z_k)$ converges to $z$ when for every rational $\varepsilon > 0$ there is $K$ with $|z_k - z| < \varepsilon$ for all $k \ge K$ ([[def-real-limit]]).

[F14] Canonical naturals: $k+1 \ge 1$ and $k+1 > 0$, hence $k+1 \ne 0$, for every natural $k$; the map $n \mapsto n \cdot 1_{\mathbb{R}}$ is strictly increasing, hence preserves non-strict order, on $\{1, 2, 3, \dots\}$ ([[lem-of-naturals-positive]]).

[F15] Absolute value: $|u| = u$ whenever $u \ge 0$, so $|0| = 0$ ([[def-abs-value]]).

## Verification

**Proof technique:** direct.

1.1 For every real $c$ the constant sequence $c$ converges to $c$: given a rational $\varepsilon > 0$, $|c - c| = |0| = 0 < \varepsilon$ at every index by [F15], so the threshold $K = 0$ witnesses [F13]. [F13, F15]

1.2 The sequence $(u_k) = ((k+1)^{-1})$ converges to $0$ with every term positive. [given, F3]

1.3 By induction [F5], $s_k \in \{1, -1\}$ for every $k$: $s_0 = 1$; and if $s_k = \pm 1$ then $s_{\sigma(k)} = -s_k = \mp 1$ by [F4]. [given, F4, F5]

1.4 For every $k$ one has $\sqrt{k+1} \ge 1$: by [F6], $\sqrt{k+1} \ge 0$ and $(\sqrt{k+1})^2 = k+1$, while $1 \le k+1$ by [F14] with $1^2 = 1 \le k+1$, so the equivalence [F7] at the nonnegative pair $1, \sqrt{k+1}$ gives $1 \le \sqrt{k+1}$. [given, F6, F7, F14]

2.1 For every $k$, $0 \le a_k \le u_k$: put $A := (k+1)\sqrt{k+1}$ and $B := k+1$, so that $A - B = (k+1)(\sqrt{k+1} - 1) \ge 0$ by [F9] and [F10], because both factors are nonnegative by [F14] and step 1.4; hence $0 < B \le A$, and reciprocal reversal [F8] gives $a_k = A^{-1} \le B^{-1} = u_k$, while $a_k > 0$ by [F8]. [step 1.4, F8, F9, F10, F14]

2.2 For every $k$, the denominator $k+1$ is nonzero by [F14], and the middle sequence is bounded by the two claimed bounds: if $s_k = 1$ then $b_k = (k+1)/(k+1) = 1$; if $s_k = -1$ then $b_k = (k-1)/(k+1) = 1 - 2(k+1)^{-1} = 1 - 2u_k$. In both cases $1 - 2u_k \le b_k \le 1$: since $2u_k > 0$ by [F3], [F10] and [F12], one has $1-2u_k<1$. If $s_k=1$ the upper bound is attained and the lower inequality is strict; if $s_k=-1$ the lower bound is attained and the upper inequality is strict. [step 1.3, given, F3, F10, F11, F12, F14]

2.3 The lower bound converges: $-2u_k \to (-2)\cdot 0 = 0$ by the scalar clause of [F2] applied to step 1.2, and $1 - 2u_k = 1 + (-2u_k) \to 1 + 0 = 1$ by the sum clause applied to the constant sequence $1$ of step 1.1 and $(-2u_k)$. [step 1.1, step 1.2, F2]

3.1 Squeeze for $a_k$: the constant sequence $0$ converges to $0$ by step 1.1, $(u_k)$ converges to $0$ by step 1.2, and $0 \le a_k \le u_k$ at every index by step 2.1; so [F1] gives $a_k \to 0$. [step 1.1, step 1.2, step 2.1, F1]

4.1 Squeeze for $b_k$: the lower bound converges to $1$ by step 2.3, the constant sequence $1$ converges to $1$ by step 1.1, and $1 - 2u_k \le b_k \le 1$ at every index by step 2.2; so [F1] gives $b_k \to 1$. [step 1.1, step 2.2, step 2.3, F1] ∎
