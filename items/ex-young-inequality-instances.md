---
id: ex-young-inequality-instances
kind: example
title: "Young's inequality at $p = q = 2$ and at $p = 3$, $q = 3/2$"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-young-inequality, thm-weighted-am-gm-rational, thm-am-gm, def-rational-power, lem-rational-power-laws, lem-of-square-monotone, thm-nth-roots-exist, lem-power-laws]
justified_by: []
aliases: []
landmark: false
dependency_level: 9
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
    - title: "John K. Hunter, An Introduction to Real Analysis (author-hosted complete lecture notes, University of California at Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
      locator: "Chapter 13 §13.7, Theorem 13.94 (Young's inequality; equality iff a^p = b^{p'}) and the p = 2 reduction to Proposition 2.8, printed pp. 296-297"
---

## Example

(i) At the conjugate pair $p = q = 2$, [[thm-young-inequality]] reads
$ab \le \frac{a^{2}}{2} + \frac{b^{2}}{2}$ for all $a, b \ge 0$, with equality
exactly when $a = b$; the instance $a := 4$, $b := 9$ gives
$36 \le 97/2$.

(ii) At $p := 3$ and $q := 3/2$, conjugate since $\frac13 + \frac23 = 1$, it
reads $ab \le \frac{a^{3}}{3} + \frac{2}{3}\,b^{3/2}$; the instance $a := 2$,
$b := 4$ gives $8$ on both sides.

## Facts & Assumptions

**Given:** Reals $a, b \ge 0$ for the general statements, the instance $a = 4$, $b = 9$ for (i), and the instance $a = 2$, $b = 4$ for (ii).

[L1] Young's inequality ([[thm-young-inequality]]): for conjugate rationals $p, q > 1$, that is $\frac1p + \frac1q = 1$, and all reals $a, b \ge 0$, $ab \le \frac{a^{p}}{p} + \frac{b^{q}}{q}$, with the rational powers of [[def-rational-power]] and its supplementary clause $0^{p} = 0$ for $p > 0$.

[L2] AM-GM ([[thm-am-gm]]): for $n = 2$ and nonnegative entries $u, v$, $\sqrt{uv} \le (u+v)/2$, equivalently $uv \le \big((u+v)/2\big)^{2}$, with equality exactly when $u = v$. On positive entries, [[thm-weighted-am-gm-rational]] with weights $1/2, 1/2$ gives the same inequality; its statement does not include an equality clause or zero bases.

[L3] Roots and powers ([[thm-nth-roots-exist]], [[def-rational-power]], [[lem-rational-power-laws]]): for $c \ge 0$, $c^{1/2}$ is the unique nonnegative $s$ with $s^{2} = c$; $u^{2}v^{2} = (uv)^{2}$ by the product law; and $\big(4^{1/2}\big)^{3} = 4^{3/2} = 8$ since $4^{1/2} = 2$ and $2^{3} = 8$.

[L4] Monotonicity of squaring ([[lem-of-square-monotone]]): for $u, v \ge 0$, $u \le v$ holds exactly when $u^{2} \le v^{2}$; in particular $a^{2} = b^{2}$ with $a, b \ge 0$ gives $a = b$.

[L5] Integer powers ([[lem-power-laws]]): $a^{3} = a^{2}a$ and $2^{3} = 8$, $9^{2} = 81$, $4^{2} = 16$ by evaluation.

## Verification

**Proof technique:** direct.

1.1 Part (i), the inequality: $p = q = 2$ are conjugate since $\frac12 + \frac12 = 1$, so [L1] gives $ab \le \frac{a^{2}}{2} + \frac{b^{2}}{2}$ for all $a, b \ge 0$. [L1, algebra]

1.2 Part (i), the equality clause, by AM-GM: for $a, b \ge 0$ the entries $a^{2}, b^{2}$ are nonnegative, their geometric mean is $(a^{2}b^{2})^{1/2} = ab$, because $ab \ge 0$ and $(ab)^{2} = a^{2}b^{2}$ by [L3] make $ab$ the unique nonnegative square root of $a^{2}b^{2}$, and their arithmetic mean is $(a^{2}+b^{2})/2$; [L2] gives $(a^{2}+b^{2})/2 \ge ab$ with equality exactly when $a^{2} = b^{2}$, which for $a, b \ge 0$ holds exactly when $a = b$ by [L4]; so equality in (i) is exactly $a = b$. [L2, L3, L4]

1.3 Part (ii), the inequality and its instance: $\frac13 + \frac23 = 1$ by rational arithmetic, so [L1] applies at $p = 3$, $q = 3/2$; at $a = 2$, $b = 4$ the first term is $a^{3}/3 = 8/3$ and the second is $(2/3)b^{3/2} = (2/3)\big(4^{1/2}\big)^{3} = (2/3)\cdot 8 = 16/3$ by [L3] and [L5], and the right-hand sum is $8/3 + 16/3 = 8 = ab$, so both sides are equal at this instance. [L1, L3, L5, algebra]

2.1 Part (i), the instance: $a = 4$, $b = 9$ give left-hand side $4\cdot 9 = 36$ and right-hand side $(16+81)/2 = 97/2$, with $36 = 72/2 \le 97/2$, and $4 \ne 9$ so the inequality is strict, consistent with the equality clause of step 1.2. [step 1.2, L5, algebra]

3.1 Summary: (i) holds with equality exactly at $a = b$ (steps 1.1, 1.2) and the instance $4, 9$ is strict (step 2.1); (ii) holds at the conjugate pair $3, 3/2$ and its instance $2, 4$ has equality on both sides (step 1.3); the equality clause proved in (i) is a property of that instance of [L1] via AM-GM, not a claim about the general Young inequality. [step 1.1, step 1.2, step 2.1, step 1.3, L1, L2] ∎
