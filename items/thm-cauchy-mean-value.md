---
id: thm-cauchy-mean-value
kind: theorem
title: "Cauchy's mean value theorem: for $f, g$ continuous on $[a,b]$ with $a<b$ and differentiable on $(a,b)$ there is $c \\in (a,b)$ with $\\bigl(f(b)-f(a)\\bigr)g'(c) = \\bigl(g(b)-g(a)\\bigr)f'(c)$; no hypothesis on $g'$ is needed in this product form"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-rolle, thm-algebra-of-derivatives, def-derivative, thm-algebra-of-continuous-functions, def-continuity-real, def-interval]
justified_by: []
forward_refs: [cex-cauchy-mean-value-quotient-form-needs-a-nonvanishing-derivative]
aliases: [thm-extended-mean-value-theorem]
landmark: true
short: "Cauchy's mean value theorem"
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 5 (Thm 5.9)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §4.2"
      url: "https://www.jirka.org/ra/"
    - title: "J. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $a, b \in \mathbb{R}$ with $a < b$ and let $f, g : [a,b] \to \mathbb{R}$ be
continuous on $[a,b]$ ([[def-continuity-real]], [[def-interval]]) and
differentiable at every point of $(a,b)$ as functions on $[a,b]$
([[def-derivative]]). Then there is $c \in (a,b)$ with

$$\bigl(f(b)-f(a)\bigr)\,g'(c) \;=\; \bigl(g(b)-g(a)\bigr)\,f'(c) .$$

**The statement is a product identity, and that is deliberate.** The familiar
quotient form

$$\frac{f(b)-f(a)}{g(b)-g(a)} \;=\; \frac{f'(c)}{g'(c)}$$

is not asserted here, and it is not equivalent: its left side needs
$g(b) \ne g(a)$ and its right side needs $g'(c) \ne 0$, and neither follows from
the hypotheses. The product form above needs neither, holds under exactly the
hypotheses stated, and specialises to the quotient form whenever both
denominators happen to be nonzero. The companion page exhibits an $f$ and a $g$
for which the quotient form is meaningless while the product form holds.

## Facts & Assumptions

**Given:** Reals $a < b$ and functions $f, g : [a,b] \to \mathbb{R}$, both continuous on $[a,b]$ and both differentiable at every point of $(a,b)$.

[L1] Rolle's theorem ([[thm-rolle]]): a function continuous on $[a,b]$, differentiable at every point of $(a,b)$ and taking equal values at $a$ and at $b$ has a vanishing derivative at some point of $(a,b)$.

[L2] Algebra of continuous functions ([[thm-algebra-of-continuous-functions]], claim 1): sums and scalar multiples of functions continuous on a set are continuous on that set.

[L3] Algebra of derivatives ([[thm-algebra-of-derivatives]], claims 1 and 2): at a limit point of the common domain, a sum of functions differentiable there is differentiable with the sum of the derivatives, and a scalar multiple with the scalar multiple of the derivative.

[L4] Every point of $(a,b)$ lies in $[a,b]$ and is a limit point of $[a,b]$, since $[a,b]$ is order-convex with at least two elements when $a < b$ ([[def-derivative]], [[def-interval]]).

## Proof

**Proof technique:** direct.

1.1 Put $\lambda := f(b) - f(a)$ and $\mu := g(b) - g(a)$, two reals, and define $h : [a,b] \to \mathbb{R}$ by $h(x) := \lambda\,g(x) - \mu\,f(x)$. [construct]

2.1 $h$ is continuous on $[a,b]$, being the sum of the scalar multiples $\lambda g$ and $(-\mu) f$ of two functions continuous on $[a,b]$. [step 1.1, L2]

2.2 $h$ is differentiable at every $c \in (a,b)$ with $h'(c) = \lambda\,g'(c) - \mu\,f'(c)$: such a $c$ is a limit point of $[a,b]$ by [L4], and $f$ and $g$ are differentiable there, so the scalar-multiple and sum rules of [L3] apply on the domain $[a,b]$. [step 1.1, L3, L4]

2.3 $h(a) = h(b)$. Expanding, $h(a) = \bigl(f(b)-f(a)\bigr)g(a) - \bigl(g(b)-g(a)\bigr)f(a) = f(b)g(a) - f(a)g(a) - g(b)f(a) + g(a)f(a) = f(b)g(a) - g(b)f(a)$, and $h(b) = \bigl(f(b)-f(a)\bigr)g(b) - \bigl(g(b)-g(a)\bigr)f(b) = f(b)g(b) - f(a)g(b) - g(b)f(b) + g(a)f(b) = g(a)f(b) - f(a)g(b)$. The two expressions are the same. [step 1.1, algebra]

3.1 By steps 2.1, 2.2 and 2.3 the function $h$ satisfies every hypothesis of [L1], so there is $c \in (a,b)$ with $h'(c) = 0$, that is $\lambda\,g'(c) - \mu\,f'(c) = 0$, that is $\bigl(f(b)-f(a)\bigr)g'(c) = \bigl(g(b)-g(a)\bigr)f'(c)$. [step 2.1, step 2.2, step 2.3, L1] ∎

## Remarks

- **Where the auxiliary function comes from.** $h$ is built so that the two cross terms $f(a)g(a)$ and $f(b)g(b)$ cancel against themselves at the two endpoints, leaving the same antisymmetric expression $f(b)g(a) - f(a)g(b)$ at each. Nothing is optimised and nothing is guessed: the two coefficients are forced, up to a common scalar, by the requirement $h(a) = h(b)$.

- **The ordinary mean value theorem is the case $g(x) = x$**, and it is recorded as the next item rather than reproved. Cauchy's theorem is the more general statement and is proved first for that reason, not because it is harder: it costs one application of Rolle either way.

- **What fails in the quotient form.** If $g(a) = g(b)$ the left side is not a real number at all, and the theorem still says something: it says $\bigl(f(b)-f(a)\bigr)g'(c) = 0$ for some $c \in (a,b)$. That is the case worked out in [[cex-cauchy-mean-value-quotient-form-needs-a-nonvanishing-derivative]].
