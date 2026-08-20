---
id: cex-zero-iterated-integrals-without-a-double-integral
kind: counterexample
title: "A nonnegative function can have both iterated integrals zero and no double Riemann integral"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-sections-and-iterated-riemann-integrals, thm-multidimensional-riemann-criterion, thm-euclid-infinitude-of-primes, thm-of-archimedean, lem-q-and-irrationals-dense-r, lem-riemann-integral-unchanged-by-content-zero-modification]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Statement refuted

If a bounded nonnegative function on $[0,1]^2$ has both ordinary iterated Riemann integrals and they are equal, then it has a double Riemann integral.

## Facts & Assumptions

**Given:** Let $E$ consist of all $(k/p,\ell/p)$ with $p$ prime and $1\le k,\ell<p$, and let $f:=1_E$ on $[0,1]^2$.

[L1] Sections and ordinary iterated Riemann integrals are defined by integrating each fixed-coordinate section and then its section-integral function ([[def-sections-and-iterated-riemann-integrals]]).

[L2] A bounded function on a rectangle is Riemann integrable only if grids can make $U(f,P)-L(f,P)$ arbitrarily small ([[thm-multidimensional-riemann-criterion]]).

[L3] The irrationals are dense in $\mathbb R$ ([[lem-q-and-irrationals-dense-r]]).

[L4] Changing a bounded integrand on a finite, hence content-zero, set does not change its Riemann integral ([[lem-riemann-integral-unchanged-by-content-zero-modification]]).

[L5] For every finite list of primes there is a prime outside that list ([[thm-euclid-infinitude-of-primes]]).

[L6] For every real bound there is a natural number larger than it ([[thm-of-archimedean]]).

## Counterexample

**Proof technique:** direct.

1.1 A fixed coordinate $x\in[0,1]$ belongs to at most one prime grid, because a fraction $k/p$ with $1\le k<p$ is reduced and its prime denominator is unique. Thus each horizontal and vertical section of $E$ is finite; covering its finitely many points by intervals of arbitrarily small total length gives content zero, so [L4] makes every section of $f$ integrable with value zero. By [L1], both iterated integrals are zero. [L1, L4, algebra]

1.2 By [L5] and [L6], primes are unbounded, so in every nonempty open rectangle in the unit square a sufficiently fine prime grid supplies a point of $E$. By [L3], the same rectangle contains a point with irrational first coordinate, which is outside $E$. Hence both $E$ and its complement are dense in the square. [L3, L5, L6, choose]

2.1 Every nondegenerate grid cell therefore has supremum $1$ and infimum $0$, so every Darboux gap equals the area of the unit square, namely $1$. By [L2], $f$ is not double Riemann integrable. [step 1.2, L2]

3.1 Step 1.1 gives equal iterated integrals although step 2.1 gives no double integral, refuting the Statement. [step 1.1, step 2.1] ∎
