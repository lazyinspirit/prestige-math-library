---
id: cex-cauchy-mean-value-quotient-form-needs-a-nonvanishing-derivative
kind: counterexample
title: "With $f(x) = x^{3}$ and $g(x) = x^{2}$ on $[-1,1]$ the quotient form $\\frac{f(b)-f(a)}{g(b)-g(a)} = \\frac{f'(c)}{g'(c)}$ is meaningless because $g(b) = g(a)$, while the product form of Cauchy's theorem still holds"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-cauchy-mean-value, thm-rolle, def-derivative, lem-derivative-of-a-power, lem-power-monotone, def-integer-power, def-interval, thm-algebra-of-continuous-functions, def-continuity-real, lem-of-sign-rules, def-canonical-natural, lem-of-naturals-positive, def-field, def-limit-point-r]
justified_by: []
aliases: []
landmark: false
short: "the quotient form of Cauchy's theorem"
proof_strategy: direct
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Mean value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mean_value_theorem"
    - title: "Rolle's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Rolle%27s_theorem"
    - title: "J. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** let $a, b \in \mathbb{R}$ with $a < b$ and let
$f, g : [a,b] \to \mathbb{R}$ be continuous on $[a,b]$
([[def-continuity-real]]) and differentiable at every point of $(a,b)$
([[def-derivative]]). Then there is $c \in (a,b)$ with

$$\frac{f(b)-f(a)}{g(b)-g(a)} \;=\; \frac{f'(c)}{g'(c)} .$$

This is the shape in which Cauchy's mean value theorem is usually remembered,
and it is not what [[thm-cauchy-mean-value]] says. It is false as stated,
because under the hypotheses given neither quotient need be a real number at
all. The witness below makes both denominators vanish.

## Facts & Assumptions

**Given:** The reals $a := -1$ and $b := 1$ and the functions $f, g : [-1,1] \to \mathbb{R}$ with $f(x) := x^{3}$ and $g(x) := x^{2}$ ([[def-integer-power]], [[def-interval]]); numerals denote canonical naturals ([[def-canonical-natural]]).

[L1] Power rule and restriction ([[lem-derivative-of-a-power]], claim 2, and [[def-derivative]]): $x \mapsto x^{n}$ on $\mathbb{R}$ is differentiable at every real $c$ with derivative $\iota(n)c^{\,n-1}$; every point of the order-convex set $[-1,1]$, which has at least two elements, is a limit point of it ([[def-limit-point-r]], [[def-interval]]); and a function differentiable at such a point stays differentiable there after restriction, with the same derivative.

[L2] Continuity ([[thm-algebra-of-continuous-functions]], claim 5, [[def-continuity-real]]): $x \mapsto x^{n}$ is continuous at every point of its domain.

[L3] Cauchy's mean value theorem ([[thm-cauchy-mean-value]]), in its product form: under the hypotheses above there is $c \in (a,b)$ with $\bigl(f(b)-f(a)\bigr)g'(c) = \bigl(g(b)-g(a)\bigr)f'(c)$.

[L4] Rolle's theorem ([[thm-rolle]]): a function continuous on $[a,b]$, differentiable at every point of $(a,b)$ and taking equal values at the endpoints has a vanishing derivative somewhere in $(a,b)$.

[L5] Signs and powers ([[def-integer-power]], [[lem-of-sign-rules]], [[lem-power-monotone]]): the recursion $a^{n+1} = a^{n}a$ with $a^{0} = 1$ gives $(-1)^{2} = (-1)(-1) = 1$, the product of two negatives being positive ([[lem-of-sign-rules]]), and $(-1)^{3} = (-1)^{2}(-1) = -1$; that $1^{n} = 1$ for every natural $n$ is claim 4 of [[lem-power-monotone]] and is not read off [[def-integer-power]].

[L6] Canonical naturals ([[def-canonical-natural]], [[lem-of-naturals-positive]]): $\iota(1) = 1$, $\iota(m+n) = \iota(m)+\iota(n)$ and $\iota(mn) = \iota(m)\iota(n)$ for $m, n \ge 1$; in particular $\iota(2)\iota(2) = \iota(4) > 0$, so $\iota(4) \ne 0$.

[L7] Division by $0$ is not defined: $0$ has no multiplicative inverse in a field ([[def-field]]).

## Counterexample

**Proof technique:** direct.

1.1 By [L2] both $f$ and $g$ are continuous on $[-1,1]$, and by [L1] both are differentiable at every $c \in [-1,1]$, with $f'(c) = \iota(3)c^{2}$ and $g'(c) = \iota(2)c^{1} = \iota(2)c$, using [L5] for $c^{1} = c$. So the pair $(f,g)$ satisfies every hypothesis of the refuted claim, and of [L3], with $a = -1$ and $b = 1$. [L1, L2, L5]

1.2 By [L5], $f(1) = 1$, $f(-1) = -1$, $g(1) = 1$ and $g(-1) = 1$. Hence $f(b)-f(a) = 1 - (-1) = \iota(2)$ and $g(b)-g(a) = 1 - 1 = 0$. [L5, L6]

2.1 The left-hand side of the refuted claim names no real number: its denominator $g(b)-g(a)$ is $0$ by step 1.2, and $0$ has no inverse by [L7]. So there is no $c$ for which the asserted equation holds, since the equation cannot even be formed; the claim fails on this pair. [step 1.2, L7]

2.2 The right-hand side fails as well at one point of the interval: $g'(0) = \iota(2) \cdot 0 = 0$ by step 1.1, so the quotient $f'(c)/g'(c)$ is undefined at $c = 0$, again by [L7]. [step 1.1, L7]

2.3 **The product form is untouched.** By [L3] there is $c \in (-1,1)$ with $\bigl(f(b)-f(a)\bigr)g'(c) = \bigl(g(b)-g(a)\bigr)f'(c)$, which by steps 1.1 and 1.2 reads $\iota(2)\,\iota(2)c = 0 \cdot \iota(3)c^{2}$, that is $\iota(4)c = 0$; since $\iota(4) \ne 0$ by [L6], this forces $c = 0$. And $c = 0$ does lie in $(-1,1)$ and does satisfy the identity, both sides being $0$. So [L3] holds on this pair, with $c = 0$ its only admissible point. [step 1.1, step 1.2, L3, L6]

3.1 The vanishing of $g(b)-g(a)$ is not an accident of the choice. By step 1.2 one has $g(-1) = g(1)$, so [L4] already forces $g'$ to vanish at some point of $(-1,1)$, and by step 2.3 that point is $c = 0$, the same point the product form produces. So on this pair every quotient the refuted claim writes down is undefined, while [L3] is satisfied; the quotient form needs hypotheses the product form does not, and as stated it is false. [step 2.1, step 2.2, step 2.3, L4] ∎

## Remarks

- **What the quotient form would need.** Two extra hypotheses, and they are of different kinds: $g(b) \ne g(a)$, a condition on the endpoints, and $g'(c) \ne 0$ at the point produced, a condition on a point one does not choose. The second is the awkward one, since the theorem hands back a $c$ and says nothing about it. This is why [[thm-cauchy-mean-value]] is stated as a product identity in this library, with no hypothesis on $g'$ at all.

- **A cheaper repair than a hypothesis on $g'$.** If $g(b) \ne g(a)$ then, by [[thm-rolle]] read contrapositively, nothing forces $g'$ to vanish; and the product identity may then be divided by $g(b)-g(a)$ to give $\bigl(f(b)-f(a)\bigr)/\bigl(g(b)-g(a)\bigr) \cdot g'(c) = f'(c)$, which is a true statement with no division by $g'(c)$ anywhere. That is the form worth remembering.

- **The witness is the smallest natural one.** $g(x) = x^{2}$ is even and the interval is symmetric about $0$, which is the whole of the mechanism; any even $g$ on a symmetric interval does the same. The choice $f(x) = x^{3}$ only makes $f(b) - f(a)$ nonzero, so that the failure is not hidden by both sides vanishing for a trivial reason.
