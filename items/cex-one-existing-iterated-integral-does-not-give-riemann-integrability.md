---
id: cex-one-existing-iterated-integral-does-not-give-riemann-integrability
kind: counterexample
title: "One existing iterated integral does not imply multiple Riemann integrability"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-riemann-fubini-on-product-rectangles, def-dirichlet-and-thomae-functions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, Exercise 10.2.8"
      url: "https://www.jirka.org/ra/realanal2.pdf"
pipeline_run: null
---

## Statement refuted

**False claim.** If one ordinary iterated Riemann integral of a bounded function on a rectangle exists, then the function is Riemann integrable on the rectangle.

## Facts & Assumptions

**Given:** On $[-1,1]\times[0,1]$, let $f(x,y)=x$ for rational $y$ and $f(x,y)=0$ for irrational $y$.

[L1] Rational and irrational numbers are dense, and the Dirichlet function takes the values $1$ and $0$ on them respectively ([[def-dirichlet-and-thomae-functions]]).

[L2] For an integrable function, Riemann--Fubini makes the lower and upper section-integral envelopes integrable with the same multiple integral ([[thm-riemann-fubini-on-product-rectangles]]).

## Counterexample

**Proof technique:** direct.

1.1 For each fixed $y$, the $x$-section is either $x\mapsto x$ or zero; both have integral $0$ on $[-1,1]$. Hence the $x$-first iterated integral exists and is $0$. [given]

1.2 For fixed $x\ne0$, density in [L1] makes every lower and upper Darboux sum of the $y$-section equal to the interval length times $\min(x,0)$ and $\max(x,0)$ respectively. Thus the section is nonintegrable, and integrating its lower and upper integral functions in $x$ gives $-1/2$ and $1/2$. [L1, given]

2.1 If $f$ were multiply Riemann integrable, [L2] would force those two envelope integrals to agree. They do not, so $f$ is not Riemann integrable although the iteration in step 1.1 exists. This refutes the claim. [L2, step 1.1, step 1.2] ∎
