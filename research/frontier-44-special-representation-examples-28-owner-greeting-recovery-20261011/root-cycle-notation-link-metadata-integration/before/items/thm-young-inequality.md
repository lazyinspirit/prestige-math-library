---
id: thm-young-inequality
kind: theorem
title: "Young's inequality for products (rational conjugate exponents)"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-weighted-am-gm-rational, def-rational-power, lem-rational-power-laws, def-rat-operations, def-rat-order, def-rationals, thm-rat-ordered-field, cor-of-one-positive, lem-of-q-embeds, lem-of-inverse-positive, lem-of-sign-rules]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "Finite inequalities (Cornell University)"
      url: "https://e.math.cornell.edu/people/belk/measuretheory/Inequalities.pdf"
    - title: "Young, Hölder, and Minkowski inequalities (Oregon State University)"
      url: "https://math.oregonstate.edu/~show/old/142_Luenberger.pdf"
    - title: "Young's inequality for products (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Young%27s_inequality_for_products"
    - title: "Hölder's inequality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/H%C3%B6lder%27s_inequality"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $p, q \in \mathbb{Q}$ with $p > 1$ and $q > 1$ ([[def-rat-order]]) be
**conjugate exponents**, that is

$$\frac{1}{p} + \frac{1}{q} = 1, \qquad \text{equivalently} \qquad q = \frac{p}{\,p-1\,}.$$

Then for all $a, b \in \mathbb{R}$ with $a \ge 0$ and $b \ge 0$,

$$ab \;\le\; \frac{a^{p}}{p} + \frac{b^{q}}{q},$$

with the rational powers of [[def-rational-power]] (its supplementary clause
gives $0^{p} = 0$, since $p > 0$) and with the rationals $p, q$ acting on
$\mathbb{R}$ through the canonical embedding ([[lem-of-q-embeds]]).

**The conjugate exponent is rational because $p$ is.** From
$\frac1q = 1 - \frac1p = \frac{p-1}{p}$ one gets $q = p/(p-1)$, a quotient of
rationals with nonzero denominator ([[def-rat-operations]]), hence a rational.
This is the observation that keeps Hölder and Minkowski inside the rational
world on this page.

## Facts & Assumptions

**Given:** Rationals $p, q > 1$ with $1/p + 1/q = 1$, and reals $a, b \ge 0$.

[L1] Weighted AM-GM with rational weights ([[thm-weighted-am-gm-rational]]): for $x_0, x_1 > 0$ and rationals $w_0, w_1 \ge 0$ with $w_0 + w_1 = 1$, $x_0^{\,w_0} x_1^{\,w_1} \le w_0 x_0 + w_1 x_1$.

[L2] Rational power laws ([[lem-rational-power-laws]], [[def-rational-power]]): for $u > 0$ and rationals $r, s$, $u^{r} > 0$ and $\big(u^{r}\big)^{s} = u^{rs}$, and $u^{1} = u$; and $0^{r} = 0$ for rational $r > 0$.

[L3] Rational arithmetic ([[def-rationals]], [[def-rat-operations]], [[def-rat-order]]): $q = p/(p-1)$ is a quotient of rationals with nonzero denominator, hence rational, and $p \cdot (1/p) = 1$. Moreover $\mathbb{Q}$ is itself a totally ordered field ([[thm-rat-ordered-field]]), which is what licenses the order arithmetic used on $p$ and $q$; being an ordered field it has $1 > 0$ ([[cor-of-one-positive]], which is where that fact is proved: [[thm-rat-ordered-field]] states totality, compatibility with addition and closure of the positives under multiplication, and not this), so $p > 1 > 0$ gives $p > 0$ by transitivity and hence $1/p > 0$, and likewise $1/q > 0$ ([[lem-of-inverse-positive]], claim 1, applied in $\mathbb{Q}$).

[L4] The embedding $\iota : \mathbb{Q} \to \mathbb{R}$ is an order-preserving field homomorphism, so $\iota(1/p) = \iota(p)^{-1} > 0$ ([[lem-of-q-embeds]], [[lem-of-inverse-positive]], [[lem-of-sign-rules]]).

## Proof

**Proof technique:** direct.

1.1 The pair $w_0 := 1/p$, $w_1 := 1/q$ is a legitimate system of rational weights: both are rational and positive because $p, q > 1 > 0$, and $w_0 + w_1 = 1$ by hypothesis. [given, L3, L4]

1.2 Degenerate cases: if $a = 0$ then the left-hand side is $0$ while the right-hand side is $0^{p}/p + b^{q}/q = b^{q}/q \ge 0$, since $0^{p} = 0$ for $p > 0$ and $b^{q} \ge 0$; the case $b = 0$ is symmetric, so the inequality holds whenever $a = 0$ or $b = 0$. [given, L2, L3, L4]

1.3 For $a > 0$ and $b > 0$, which is the only case in which this step is used, the left-hand factors simplify: $\big(a^{p}\big)^{1/p} = a^{p \cdot (1/p)} = a^{1} = a$ and, in the same way, $\big(b^{q}\big)^{1/q} = b$. [L2, L3]

2.1 Assume now $a > 0$ and $b > 0$, and put $x_0 := a^{p} > 0$ and $x_1 := b^{q} > 0$; applying weighted AM-GM with the weights of step 1.1 gives $\big(a^{p}\big)^{1/p}\big(b^{q}\big)^{1/q} \le \frac{1}{p} a^{p} + \frac{1}{q} b^{q}$. [step 1.1, L1, L2]

3.1 Substituting, $ab \le \frac{a^{p}}{p} + \frac{b^{q}}{q}$ for all $a, b > 0$, and together with the degenerate cases this proves the inequality for all $a, b \ge 0$. [step 2.1, step 1.3, step 1.2] ∎
