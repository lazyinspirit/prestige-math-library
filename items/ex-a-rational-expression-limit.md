---
id: ex-a-rational-expression-limit
kind: example
title: "A rational expression in $k$: $(2(k+1)+3)/(5(k+1)+1) \\to 2/5$"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [ex-the-reciprocal-of-k-plus-one-is-null, thm-algebra-of-limits, def-sequence, def-real-limit, def-field, def-ordered-field, def-abs-value, lem-of-naturals-positive, cor-of-one-positive]
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
      locator: "§3.4 Theorem 3.26 and the paragraph after it (printed pp. 46-47): sums, scalar multiples and products of convergent sequences, with the warning that the sum rule may not be read backwards"
    - title: "Jiri Lebl, Basic Analysis I: Introduction to Real Analysis, Volume I (author-hosted complete book PDF)"
      url: "https://www.jirka.org/ra/realanal.pdf"
      locator: "§2.1 Exercise 2.1.5 and Example 2.1.8 (printed pp. 54, 59): n/(n+1) tends to 1 and the direct estimate (n^2+1)/(n^2+n) tends to 1; §2.2 after Proposition 2.2.7 (printed p. 66): expressions such as 1 + 1/n - 100/n^2 evaluated by the algebra of limits"
---

## Example

The sequence $x_k := \dfrac{2(k+1)+3}{5(k+1)+1}$ converges to $2/5$
([[def-real-limit]]). The point is method: an explicit rational expression of
$k$ is evaluated from the algebra of limits ([[thm-algebra-of-limits]]) once a
single null sequence is known, without an $\varepsilon$-estimate fitted to the
expression. Dividing numerator and denominator by the positive factor $k+1$
turns the expression into a quotient of two affine expressions in the null
sequence $(k+1)^{-1}$ of [[ex-the-reciprocal-of-k-plus-one-is-null]].

## Facts & Assumptions

**Given:** The sequence $x_k := (2(k+1)+3)/(5(k+1)+1)$ for $k \in \mathbb{N}$, where $k+1 = \sigma(k)$ is read in $\mathbb{R}$ through the canonical-natural embedding ([[def-sequence]], [[lem-of-naturals-positive]]).

[F1] The sequence $u_k := (k+1)^{-1}$ converges to $0$ and every term $u_k$ is positive ([[ex-the-reciprocal-of-k-plus-one-is-null]]).

[F2] Linearity clauses of the algebra of limits: if $(p_k)$ converges to $p$ and $(q_k)$ converges to $q$, then $p_k + q_k$ converges to $p + q$, and for every real $c$ the scalar multiple $c\,p_k$ converges to $c\,p$ ([[thm-algebra-of-limits]]).

[F3] Quotient clause of the algebra of limits: if $(p_k)$ converges to $p$ and $(q_k)$ converges to $q$ with $q \ne 0$ and $q_k \ne 0$ for every $k$, then $p_k/q_k$ converges to $p/q$ ([[thm-algebra-of-limits]]).

[F4] Canonical naturals: $k+1 \ge 1$ for every $k$, and $n \mapsto n \cdot 1_{\mathbb{R}}$ is strictly increasing and positive on $\{1, 2, 3, \dots\}$, hence preserves non-strict order there; in particular $2, 3, 5$ denote positive reals ([[lem-of-naturals-positive]]).

[F5] Field arithmetic: every nonzero element has a multiplicative inverse $uu^{-1} = 1$, multiplication distributes over addition, and $0 \ne 1$ ([[def-field]]).

[F6] Absolute value: $|u| = u$ whenever $u \ge 0$, so $|0| = 0$ and $|c - c| = |0| = 0$ for every real $c$ ([[def-abs-value]]).

[F7] Convergence: a sequence $(z_k)$ converges to $z$ when for every rational $\varepsilon > 0$ there is $K$ with $|z_k - z| < \varepsilon$ for all $k \ge K$ ([[def-real-limit]]).

[F9] Order arithmetic: the positives are closed under addition and trichotomy holds, so an element that is a sum of positives is positive and in particular nonzero ([[def-ordered-field]]).

[F10] $0 < 1$ in $\mathbb{R}$ ([[cor-of-one-positive]]).

## Verification

**Proof technique:** direct.

1.1 For every $k$ the factor $k+1$ is positive by [F4] and hence nonzero by trichotomy [F9], so multiplying numerator and denominator by $(k+1)^{-1}$ and distributing is legitimate: $x_k = \big(2 + 3(k+1)^{-1}\big)\big/\big(5 + (k+1)^{-1}\big)$. [given, F4, F5, F9, algebra]

1.2 The sequence $u_k = (k+1)^{-1}$ converges to $0$ and every $u_k$ is positive. [given, F1]

1.3 For every real $c$ the constant sequence $c$ converges to $c$: given a rational $\varepsilon > 0$, the estimate $|c - c| = |0| = 0 < \varepsilon$ of [F6] holds at every index, so the threshold $K = 0$ witnesses the condition of [F7]. [F6, F7]

2.1 The numerator converges: $3u_k \to 3 \cdot 0 = 0$ by the scalar clause of [F2], and $2 + 3u_k \to 2 + 0 = 2$ by the sum clause applied to the constant sequence $2$ of step 1.3 and $3u_k$. [step 1.2, step 1.3, F2]

3.1 The denominator converges and is nowhere zero: as in step 2.1, $5 + u_k \to 5 + 0 = 5$ by [F2] applied to the constant sequence $5$ of step 1.3 and $u_k$; and $5 + u_k > 0$ for every $k$, since $5 > 0$ by [F4] and [F10], $u_k > 0$ by step 1.2, and sums of positives are positive by [F9]. [step 1.2, step 1.3, F2, F4, F9, F10]

4.1 The limit of the denominator is nonzero: $5 > 0$ by [F4] and [F10], so $5 \ne 0$ by trichotomy [F9]. The quotient clause [F3] applied to the numerator of step 2.1 ($\to 2$), the denominator of step 3.1 ($\to 5$, nowhere zero) and the value $5 \ne 0$ gives $x_k \to 2/5$, using the identified form of step 1.1. [step 1.1, step 2.1, step 3.1, F3, F4, F9, F10] ∎
