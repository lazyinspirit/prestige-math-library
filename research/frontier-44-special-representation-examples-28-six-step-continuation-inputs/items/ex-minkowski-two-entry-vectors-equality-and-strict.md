---
id: ex-minkowski-two-entry-vectors-equality-and-strict
kind: example
title: "Minkowski for two-entry vectors: equality and strict cases"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-minkowski-finite, thm-cauchy-schwarz-finite, thm-of-square-roots, lem-of-square-monotone, def-rational-power, lem-rational-power-laws, def-finite-sum, lem-finite-sum-laws, def-integer-power, lem-of-abs-value, def-abs-value, ex-cauchy-schwarz-lagrange-identity-two-terms]
justified_by: []
aliases: []
landmark: false
dependency_level: 11
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John K. Hunter, An Introduction to Real Analysis (author-hosted complete lecture notes, University of California at Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
      locator: "Chapter 13 §13.7, Corollary 13.92 (Minkowski for p = 2) and Theorem 13.96 (general p), printed pp. 296, 298-299"
---

## Example

For all reals $x_0, x_1, y_0, y_1$,

$$\big((x_0+y_0)^{2} + (x_1+y_1)^{2}\big)^{1/2} \;\le\; \big(x_0^{2} + x_1^{2}\big)^{1/2} + \big(y_0^{2} + y_1^{2}\big)^{1/2},$$

and equality holds exactly when $x_0y_1 = x_1y_0$ and
$x_0y_0 + x_1y_1 \ge 0$. Two instances: for $x = (3,4)$ and $y = (6,8)$ both
sides are $15$; for $x = (3,4)$ and $y = (4,-3)$ the left-hand side is
$\sqrt{50} = 5\sqrt{2}$ and the right-hand side is $10$, so the inequality is
strict.

## Facts & Assumptions

**Given:** Reals $x_0, x_1, y_0, y_1$, with $A := x_0^{2}+x_1^{2}$, $B := y_0^{2}+y_1^{2}$, $C := x_0y_0 + x_1y_1$, and the two instance pairs.

[L1] Minkowski's inequality ([[thm-minkowski-finite]]): for rational $p \ge 1$, $\big(\sum_{k<n}|a_k+b_k|^{p}\big)^{1/p} \le \big(\sum_{k<n}|a_k|^{p}\big)^{1/p} + \big(\sum_{k<n}|b_k|^{p}\big)^{1/p}$; at $p = 2$ the middle exponents $1/p = 2$ are the integer square.

[L2] Two-entry sums ([[def-finite-sum]], [[lem-finite-sum-laws]]): $\sum_{k<2} c_k = c_0 + c_1$, with additivity and scaling.

[L3] Absolute values and squares ([[lem-of-abs-value]], [[def-abs-value]], [[def-integer-power]]): $|z| \ge 0$, $|z|^{2} = z^{2}$, and $|0| = 0$.

[L4] Square roots and rational powers ([[thm-of-square-roots]], [[def-rational-power]], [[lem-rational-power-laws]]): for $u, v \ge 0$, $u^{1/2} = \sqrt{u}$ is the unique nonnegative square root of $u$, and $\sqrt{u}\sqrt{v} = \sqrt{uv}$ by the product law; so $(A+B+2C)^{1/2}$ and $\sqrt{A}+\sqrt{B}$ are the nonnegative square roots of the two squared quantities below.

[L5] Monotonicity of squaring ([[lem-of-square-monotone]]): for nonnegative $u, v$, $u = v$ holds exactly when $u^{2} = v^{2}$; equivalently $u < v$ exactly when $u^{2} < v^{2}$.

[L6] The two-term Lagrange identity ([[ex-cauchy-schwarz-lagrange-identity-two-terms]]): $(x_0^{2}+x_1^{2})(y_0^{2}+y_1^{2}) - (x_0y_0+x_1y_1)^{2} = (x_0y_1 - x_1y_0)^{2}$, that is $AB - C^{2} = (x_0y_1-x_1y_0)^{2}$, and the square vanishes exactly when $x_0y_1 = x_1y_0$; also $C^{2} \le AB$.

## Verification

**Proof technique:** direct.

1.1 The inequality, from [L1] at $p = 2$: since $|z|^{2} = z^{2}$ by [L3], the three sums are $|x_0+y_0|^{2}+|x_1+y_1|^{2} = (x_0+y_0)^{2}+(x_1+y_1)^{2}$, $|x_0|^{2}+|x_1|^{2} = A$ and $|y_0|^{2}+|y_1|^{2} = B$ by [L2], so $\big((x_0+y_0)^{2}+(x_1+y_1)^{2}\big)^{1/2} \le \sqrt{A}+\sqrt{B}$, which is the displayed inequality with the notation of [L4]. [L1, L2, L3, L4, algebra]

1.2 The squared quantities: expanding by [L2] and [L4], $(x_0+y_0)^{2}+(x_1+y_1)^{2} = A + 2C + B$ and $(\sqrt{A}+\sqrt{B})^{2} = A + B + 2\sqrt{A}\sqrt{B} = A + B + 2\sqrt{AB}$, the last step by the product law of [L4]; both quantities are nonnegative. [L2, L4, algebra]

2.1 The equality criterion: by [L5] applied to the two nonnegative sides of step 1.1 — squared through step 1.2 — equality holds exactly when $A+2C+B = A+B+2\sqrt{AB}$, that is exactly when $C = \sqrt{AB}$; and $C = \sqrt{AB}$ holds exactly when $C \ge 0$ and $C^{2} = AB$, since $\sqrt{AB}$ is the unique nonnegative square root of $AB$ by [L4]; by [L6] one has $AB - C^{2} = (x_0y_1-x_1y_0)^{2}$, so $C^{2} = AB$ holds exactly when $x_0y_1 = x_1y_0$; hence equality in the displayed inequality holds exactly when $x_0y_1 = x_1y_0$ and $C = x_0y_0 + x_1y_1 \ge 0$, and this derivation covers zero vectors because it never divides. [step 1.1, step 1.2, L4, L5, L6, algebra]

3.1 First instance, equality: for $x = (3,4)$ and $y = (6,8)$ one has $A = 9+16 = 25$, $B = 36+64 = 100$ and $x+y = (9,12)$ with squared length $9^{2}+12^{2} = 81+144 = 225 = 15^{2}$, so the left-hand side is $\sqrt{225} = 15$ while the right-hand side is $\sqrt{25}+\sqrt{100} = 5+10 = 15$, an equality; the criterion of step 2.1 is met, since $x_0y_1-x_1y_0 = 3\cdot 8 - 4\cdot 6 = 24-24 = 0$ and $C = 3\cdot 6 + 4\cdot 8 = 50 \ge 0$. [step 1.1, step 2.1, L4, algebra]

3.2 Second instance, strictness: for $x = (3,4)$ and $y = (4,-3)$ one has $x+y = (7,1)$ with squared length $49+1 = 50$, so the left-hand side is $\sqrt{50} = \sqrt{25}\sqrt{2} = 5\sqrt{2}$ by [L4], while $A = B = 25$ gives the right-hand side $5+5 = 10$; since $2 < 4 = 2^{2}$ gives $\sqrt{2} < 2$ by [L5] and $5 > 0$ preserves the strict inequality, $5\sqrt{2} < 10$, so the inequality is strict here; and $x_0y_1 - x_1y_0 = 3\cdot(-3)-4\cdot 4 = -25 \ne 0$, consistent with the criterion of step 2.1. [step 2.1, L4, L5, algebra]

4.1 Summary: the displayed inequality is Minkowski at $p = 2$ (step 1.1), equality holds exactly under the two stated conditions (step 2.1), the pair $(3,4)$, $(6,8)$ attains equality (step 3.1: the left side is $15$ and so is the right side $5+10$), and the pair $(3,4)$, $(4,-3)$ is strict (step 3.2); both criteria are checked against the determinant in each instance. [step 1.1, step 2.1, step 3.1, step 3.2, L1, L6] ∎
