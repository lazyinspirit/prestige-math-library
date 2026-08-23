---
id: thm-real-beta-gamma-identity
kind: theorem
title: 'The real Beta--Gamma identity'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-real-gamma-function-by-the-euler-integral, def-real-beta-integral, thm-real-gamma-euler-integral-convergence, thm-real-beta-integral-convergence, thm-nonnegative-improper-multiple-integral-by-exhaustion, thm-riemann-fubini-on-product-rectangles, thm-change-of-variables-for-compact-jordan-sets, thm-multidimensional-integral-properties]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "University of Toronto MAT237Y1, The Gamma Function and the Beta Function, §2.2(b)"
      url: "https://www.math.toronto.edu/campesat/ens/1920/gamma-beta.pdf"
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 6 §1(vi)"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
pipeline_run: null
---

## Statement

For $p,q>0$, $B(p,q)=\Gamma(p)\Gamma(q)/\Gamma(p+q)$.

## Facts & Assumptions

**Given:** Positive reals $p,q$ and the nonnegative function $x^{p-1}y^{q-1}e^{-(x+y)}$ on the open first quadrant.

[F1] If $f:D\to[0,\infty)$ is locally Riemann integrable and $(K_j)$ is a compact Jordan exhaustion, then $\int_Df=\sup_j\int_{K_j}f$, independently of the exhaustion ([[thm-nonnegative-improper-multiple-integral-by-exhaustion]]).

[F2] If $g:U\to\mathbb R^n$ is injective and $C^1$ with invertible derivative on an open set, $K\subseteq U$ is compact Jordan, and $f$ is bounded on $g(K)$, then $f$ is integrable exactly when $(f\circ g)|\det Dg|$ is, and their integrals are equal ([[thm-change-of-variables-for-compact-jordan-sets]]).

[F3] If $A,B$ are nondegenerate closed rectangles, $f$ is integrable on $A\times B$, and every section in one coordinate order is integrable, then the ordinary iterated integral in that order exists and equals the multiple integral ([[thm-riemann-fubini-on-product-rectangles]]).

## Proof

**Proof technique:** direct.

1.1 On compact rectangles inside the first quadrant, [F3] factors the integral as a product of one-variable integrals. Passing through rectangular exhaustion by [F1] gives total improper integral $\Gamma(p)\Gamma(q)$. [F1, F3]

1.2 On compact rectangles inside $(0,\infty)\times(0,1)$ use $x=rt$, $y=r(1-t)$. The map is injective, its absolute Jacobian is $r$, and [F2] transforms the integrand times Jacobian into $r^{p+q-1}e^{-r}t^{p-1}(1-t)^{q-1}$. [F2, algebra]

2.1 A fixed nested family of such compact rectangles maps to a cofinal exhaustion of the first quadrant. By [F1] the limit is independent of this exhaustion, and by [F3] the transformed integral factors as $\Gamma(p+q)B(p,q)$. [step 1.1, step 1.2, F1, F3]

3.1 Gamma is positive on the positive axis, so division of the equality in step 2.1 by $\Gamma(p+q)$ gives the claimed identity. [step 2.1, algebra] ∎
