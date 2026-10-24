---
id: def-classical-weierstrass-function
kind: definition
title: "The classical Weierstrass function"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-series-of-real-functions, def-sine-and-cosine-by-power-series,
       def-pi-via-first-positive-cosine-zero, def-integer-power, def-integers,
       lem-int-embeds-rat, lem-rat-embeds-dense,
       cor-trigonometric-parity-and-pythagorean-identity, thm-geometric-series]
aliases: []
landmark: true
short: "$W_{a,b}(x)=\\sum a^n\\cos(b^n\\pi x)$"
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "Jeff Calder, Weierstrass's Non-Differentiable Function, Theorem 1"
      url: "https://www-users.cse.umn.edu/~jwcalder/104F14/weierstrass-function.pdf"
    - title: "John K. Hunter, An Introduction to Real Analysis, Example 9.24"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Let $0<a<1$ and let $b>1$ be an odd integer. The integers and rationals are
identified with their canonical copies in $\mathbb R$ ([[def-integers]],
[[lem-int-embeds-rat]], [[lem-rat-embeds-dense]]), and powers are those of
[[def-integer-power]]. The **classical Weierstrass function** with parameters
$a,b$ is

$$W_{a,b}(x):=\sum_{n=0}^{\infty}a^n\cos(b^n\pi x).$$

The sum begins at $n=0$. For each $x$, the estimate
$|a^n\cos(b^n\pi x)|\le a^n$ follows from
[[cor-trigonometric-parity-and-pythagorean-identity]], and
$\sum_{n=0}^{\infty}a^n$ converges by [[thm-geometric-series]] since $0<a<1$.
Thus the displayed series converges absolutely and defines a real number at
every $x$. Continuity of the resulting function is proved in
[[thm-classical-weierstrass-series-converges-uniformly]].

## Remarks

The restriction that $b$ be odd is not needed for convergence. It enters the
probe-point identities used in the nowhere-differentiability argument, where
odd powers preserve parity.
