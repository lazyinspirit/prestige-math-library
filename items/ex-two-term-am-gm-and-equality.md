---
id: ex-two-term-am-gm-and-equality
kind: example
title: "The two-term AM-GM inequality, its equality case, and $x + x^{-1} \\ge 2$"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-am-gm, def-rational-power, lem-rational-power-laws, def-integer-power, lem-of-square-monotone, thm-of-square-roots, lem-power-monotone, thm-nth-roots-exist]
justified_by: []
aliases: []
landmark: false
dependency_level: 7
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
    - title: "Jiří Lebl, Basic Analysis I: Introduction to Real Analysis, Volume I, version 6.3, 15 May 2026 (author-hosted complete book)"
      url: "https://www.jirka.org/ra/realanal.pdf"
      locator: "Chapter 1 §1.2.5, Exercise 1.2.7 (two-term AM-GM with equality iff x = y), printed p. 34"
    - title: "John K. Hunter, An Introduction to Real Analysis (author-hosted complete lecture notes, University of California at Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
      locator: "Chapter 2 §2.4, Proposition 2.8 (2xy ≤ x² + y², equality iff x = y) and the following two-term geometric-mean paragraph, printed pp. 26-27"
---

## Example

(a) For all $a, b \ge 0$,

$$\frac{a+b}{2} \;\ge\; \sqrt{ab}, \qquad \text{equivalently} \qquad ab \le \Big(\frac{a+b}{2}\Big)^{2},$$

with equality in either form exactly when $a = b$.

(b) Consequently, for every $x > 0$, $x + x^{-1} \ge 2$, with equality exactly
when $x = 1$.

## Facts & Assumptions

**Given:** Reals $a, b \ge 0$ for part (a), a real $x > 0$ for part (b), and the display abbreviations $A := (a+b)/2$, $G := (ab)^{1/2}$.

[L1] Arithmetic-geometric mean ([[thm-am-gm]]): for $n = 2$ and entries $a, b \ge 0$, $\prod_{k<2} a_k \le A^{2}$, equivalently $G \le A$, with equality in either form exactly when $a = b$.

[L2] Roots and square roots ([[thm-nth-roots-exist]], [[thm-of-square-roots]], [[def-rational-power]]): for $c \ge 0$, $c^{1/2} = \sqrt{c}$ is the unique $s \ge 0$ with $s^{2} = c$, and it is positive when $c > 0$; in particular $1^{1/2} = 1$.

[L3] Rational power and integer power algebra ([[lem-rational-power-laws]], [[def-integer-power]]): $x\cdot x^{-1} = 1$ for $x \ne 0$, where $x^{-1} = (x^{1})^{-1}$ is the inverse; and $1^{1/2} = 1$. For $x > 0$, the inverse $x^{-1}$ is positive by claim 1 of [[lem-rational-power-laws]] at the exponent $-1$.

[L4] Monotonicity of squaring ([[lem-of-square-monotone]]): for $u, v \ge 0$, $u \le v$ holds exactly when $u^{2} \le v^{2}$; consequently a nonnegative $s$ with $s^{2} = c$ is the unique square root of $c$.

[L5] Monotonicity of powers ([[lem-power-monotone]]): $y \mapsto y^{j}$ is strictly increasing on the nonnegatives for $j \ge 1$ and $1^{j} = 1$; so $0 \le y < 1$ gives $y^{2} < 1$ and $y > 1$ gives $y^{2} > 1$.

## Verification

**Proof technique:** direct.

1.1 Part (a). Since $a, b \ge 0$ we have $A = (a+b)/2 \ge 0$ and $G = (ab)^{1/2} \ge 0$ with $G^{2} = ab$ by [L2]; the theorem [L1] gives $G^{2} = ab \le A^{2}$, and the monotonicity of squaring on the nonnegatives [L4] turns $G^{2} \le A^{2}$ into the equivalent $G \le A$, that is $\sqrt{ab} \le (a+b)/2$; conversely $G \le A$ gives $ab = G^{2} \le A^{2}$, so the two displayed forms are equivalent for all $a, b \ge 0$; and the equality clause of [L1] gives $ab = A^{2}$ exactly when $a = b$, equivalently $G = A$ exactly when $a = b$ by [L4], which is the equality assertion in both forms. [L1, L2, L4, algebra]

2.1 Part (b). Let $x > 0$ and apply part (a), as established in step 1.1, to the nonnegative pair $x$ and $x^{-1}$: the product is $x\cdot x^{-1} = 1$ by [L3], so the geometric mean is $1^{1/2} = 1$ by [L2] and [L3], and the arithmetic mean is $(x + x^{-1})/2$; hence $1 \le (x + x^{-1})/2$, that is $x + x^{-1} \ge 2$; equality holds exactly when $x = x^{-1}$ by the equality clause of step 1.1, and $x = x^{-1}$ holds exactly when $x^{2} = 1$, since multiplying $x = x^{-1}$ by $x$ gives $x^{2} = 1$, while $x^{2} = 1$ gives $x = x\cdot 1 = x\,(x\cdot x^{-1}) = (x\cdot x)\,x^{-1} = 1\cdot x^{-1} = x^{-1}$; finally, for $x > 0$ the equation $x^{2} = 1$ holds exactly at $x = 1$, because $0 < x < 1$ gives $x^{2} < 1$ and $x > 1$ gives $x^{2} > 1$ by [L5] while $x = 1$ gives $x^{2} = 1$. [step 1.1, L2, L3, L5, algebra]

3.1 The two claims are therefore proved: part (a) with its equality case for all nonnegative $a, b$ (step 1.1), and part (b) for every $x > 0$ with equality exactly at $x = 1$ (step 2.1). [step 1.1, step 2.1, L1] ∎
