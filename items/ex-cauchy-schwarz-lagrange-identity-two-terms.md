---
id: ex-cauchy-schwarz-lagrange-identity-two-terms
kind: example
title: "The two-term Lagrange identity and Cauchy-Schwarz"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-cauchy-schwarz-finite, def-finite-sum, lem-finite-sum-laws, lem-of-square-positive, def-integer-power, lem-power-laws, lem-of-mult-neg, thm-of-square-roots, lem-of-zero-mult]
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
    - title: "John K. Hunter, An Introduction to Real Analysis (author-hosted complete lecture notes, University of California at Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
      locator: "Chapter 13 §13.7, Theorem 13.91 (Cauchy-Schwarz, proved by expanding a square), printed pp. 295-296"
---

## Example

For all reals $a_0, a_1, b_0, b_1$, with two-entry sums as in
[[def-finite-sum]],

$$(a_0^{2} + a_1^{2})(b_0^{2} + b_1^{2}) - (a_0b_0 + a_1b_1)^{2} = (a_0b_1 - a_1b_0)^{2};$$

consequently

$$(a_0b_0 + a_1b_1)^{2} \;\le\; (a_0^{2} + a_1^{2})(b_0^{2} + b_1^{2}),$$

with equality exactly when $a_0b_1 = a_1b_0$. That equality criterion is the
two-entry form of the proportionality clause of [[thm-cauchy-schwarz-finite]]:
by the equality clause of that theorem, equality in its squared inequality holds
if and only if the two lists are proportional, and the display above shows that
for two entries equality holds if and only if $a_0b_1 - a_1b_0$ vanishes. The
instance $a_0 := 1$, $a_1 := 2$, $b_0 := 3$, $b_1 := 4$ reads
$5\cdot 25 - 121 = 4 = (-2)^{2}$.

## Facts & Assumptions

**Given:** Reals $a_0, a_1, b_0, b_1$, with $A := a_0^{2} + a_1^{2}$, $B := b_0^{2} + b_1^{2}$, $C := a_0b_0 + a_1b_1$ and $D := a_0b_1 - a_1b_0$.

[L1] Two-entry sums and their laws ([[def-finite-sum]], [[lem-finite-sum-laws]]): $\sum_{k<2} c_k = c_0 + c_1$, sums are additive and scale, and a sum of nonnegative terms is nonnegative.

[L2] Definition of powers ([[def-integer-power]]): $x^{0} = 1$ and $x^{j+1} = x^{j}x$ for every real $x$ and natural $j$; in particular $x^{2} = x \cdot x$.

[L3] Laws of natural exponents ([[lem-power-laws]]): $(uv)^{n} = u^{n}v^{n}$ and $\big(u^{m}\big)^{n} = u^{mn}$ for all reals $u, v$ and naturals $m, n$; in particular $a_0^{2}b_1^{2} = (a_0b_1)^{2}$.

[L4] Sign rules ([[lem-of-mult-neg]]): $(-u)v = -(uv)$ and $(-u)(-v) = uv$ for all reals $u, v$, which is what turns the middle term $-\,2(a_0b_1)(a_1b_0)$ into the two cross terms of a square.

[L5] Squares ([[lem-of-square-positive]], [[lem-of-zero-mult]]): $u^{2} > 0$ for every $u \ne 0$, while $0^{2} = 0 \cdot 0 = 0$; hence $u^{2} \ge 0$ for every real $u$, and $u^{2} = 0$ holds exactly for $u = 0$.

[L6] Cauchy-Schwarz, squared form ([[thm-cauchy-schwarz-finite]]): $\big(\sum_{k<n} a_kb_k\big)^{2} \le \big(\sum_{k<n} a_k^{2}\big)\big(\sum_{k<n} b_k^{2}\big)$ for all reals and every natural $n$, with equality if and only if the two lists are proportional, that is, there is a pair $(\lambda, \mu) \ne (0,0)$ with $\lambda a_k = \mu b_k$ for all $k < n$; the root form of that theorem is a restatement through [[thm-of-square-roots]].

## Verification

**Proof technique:** direct.

1.1 The two-entry evaluations of [L1] give $A = a_0^{2} + a_1^{2}$, $B = b_0^{2} + b_1^{2}$, $C = a_0b_0 + a_1b_1$ and $D = a_0b_1 - a_1b_0$, all four being real numbers determined by the given data. [given, L1]

1.2 The identity: expanding both products by distributivity and collecting terms by [L2] and [L3], $AB - C^{2} = a_0^{2}b_0^{2} + a_0^{2}b_1^{2} + a_1^{2}b_0^{2} + a_1^{2}b_1^{2} - \big(a_0^{2}b_0^{2} + 2(a_0b_1)(a_1b_0) + a_1^{2}b_1^{2}\big)$, and the outer terms cancel, leaving $a_0^{2}b_1^{2} - 2(a_0b_1)(a_1b_0) + a_1^{2}b_0^{2}$, which is $(a_0b_1)^{2} - 2(a_0b_1)(a_1b_0) + (a_1b_0)^{2} = (a_0b_1 - a_1b_0)^{2} = D^{2}$; the sign of the cross term is the rule of [L4]. [L2, L3, L4, algebra]

1.3 The square $D^{2}$ is nonnegative and vanishes only at $D = 0$: if $D \ne 0$ then $D^{2} > 0$ by [L5], and if $D = 0$ then $D^{2} = 0 \cdot 0 = 0$ by [L5] and [L2]. [L2, L5, algebra]

2.1 Substituting step 1.2 into step 1.3 gives $AB - C^{2} = D^{2} \ge 0$, that is $C^{2} \le AB$; and equality $C^{2} = AB$ holds exactly when $D^{2} = 0$, which by step 1.3 means exactly $D = 0$, that is $a_0b_1 = a_1b_0$. [step 1.2, step 1.3, algebra]

2.2 The instance: at $a_0 = 1$, $a_1 = 2$, $b_0 = 3$, $b_1 = 4$ direct evaluation gives $A = 1 + 4 = 5$, $B = 9 + 16 = 25$, $C = 3 + 8 = 11$ and $D = 4 - 6 = -2$, so that $5\cdot 25 - 121 = 4 = (-2)^{2}$, in agreement with the identity of step 1.2. [step 1.2, L2, algebra]

3.1 The equality criteria agree: by [L6] applied at $n = 2$, equality $C^{2} = AB$ holds if and only if the lists $(a_0,a_1)$ and $(b_0,b_1)$ are proportional in the symmetric sense; by step 2.1 the same equality holds if and only if $D = 0$; hence $a_0b_1 = a_1b_0$ holds exactly when the two-entry lists are proportional, which is the identification claimed between the local criterion and the clause of [L6]. [step 2.1, L6]

4.1 Collecting the results: the identity of step 1.2 holds for all reals, step 2.1 gives the inequality with its equality criterion, step 3.1 identifies that criterion with the two-entry proportionality clause of [L6], and step 2.2 verifies the numerical instance, completing the example. [step 1.2, step 2.1, step 2.2, step 3.1, L1, L6] ∎
