---
id: ex-siegel-hyperbolic-curve-finiteness
kind: example
title: A genus-two curve with a finite set of S-integral points
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 28
deps:
  - def-axiom-of-choice
  - def-number-field
  - def-s-integers-and-s-units-of-a-number-field
  - def-s-integral-points-on-an-affine-curve
  - def-algebraic-curve-over-field
  - def-genus-euler-characteristic-curve
  - thm-projective-space-proper-over-base
  - thm-normalization-glues-integral-finite-type-curves
  - thm-regular-equals-smooth-over-perfect-field
  - lem-function-with-poles-defines-map-p1
  - def-etale-morphism-schemes
  - lem-finite-etale-algebra-module-presentation-and-rank
  - thm-riemann-hurwitz-complete
  - def-ramification-index-curve-map
  - lem-curve-different-local-support-and-index-bound
  - lem-degree-pullback-divisor-finite-morphism-curves
  - thm-siegel-finiteness-of-integral-points-on-hyperbolic-curves
justified_by: []
proof_strategy: direct
axiom_use: "AC is inherited from the Siegel and curve suppliers; its genus-two rational-point input remains escalated."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Faltings–Wüstholz et al., Rational Points, Chapter IV §4 and Chapter V §5
      url: https://yhzhumath.github.io/Mordell2024/RP.pdf
      locator: Genus-at-least-two rational-point finiteness and Siegel's integral-point theorem
    - title: J. S. Milne, Abelian Varieties, version 2.0, Chapter IV §5
      url: https://www.jmilne.org/math/CourseNotes/AV.pdf
      locator: Siegel reduction to genus-at-least-two rational points
---

## Example

Assume the Axiom of Choice. Let $S$ be any finite set of rational primes, put $R=\mathbb Z[1/p:p\in S]$, and let $C/\mathbb Q$ be the smooth proper curve with function field $\mathbb Q(x,y)$ subject to $y^2=x^5-x$. The map $x:C\to\mathbb P^1_{\mathbb Q}$ has degree $2$ and is branched at the five distinct roots of $x^5-x$ and at infinity, so $C$ has genus $2$ and a unique rational point $\infty$ above infinity. For the affine model $\mathcal U=\operatorname{Spec}R[x,y]/(y^2-x^5+x)$ of $C\setminus\{\infty\}$, the set of $R$-sections is finite. It contains the integral points $(0,0)$, $(1,0)$, and $(-1,0)$.

## Example references

[[def-number-field]]

[[def-s-integers-and-s-units-of-a-number-field]]

[[def-algebraic-curve-over-field]]

[[def-genus-euler-characteristic-curve]]

[[def-s-integral-points-on-an-affine-curve]]

[Faltings–Wüstholz et al., *Rational Points*, Chapter IV §4 and Chapter V §5](https://yhzhumath.github.io/Mordell2024/RP.pdf)

[Milne, *Abelian Varieties*, Chapter IV §5](https://www.jmilne.org/math/CourseNotes/AV.pdf)

## Facts & Assumptions

**Given:** AC; a finite set $S$ of rational primes; $R=\mathbb Z[1/p:p\in S]$; and the function-field equation $y^2=x^5-x$.

[A1] AC is assumed by the Siegel theorem used below. [[def-axiom-of-choice]]

[F1] The polynomial $f(x)=x^5-x$ is squarefree over $\overline{\mathbb Q}$. If $f(c)=f'(c)=0$, then $c^4=1/5$ and $0=f(c)=c(c^4-1)=-4c/5$, forcing $c=0$, which contradicts $c^4=1/5$.

[F2] The projective closure of an integral finite-type affine curve in $\mathbb P^2$ is an integral proper curve. Its normalization in its own function field is finite, normal, and proper; a normal curve is regular, and a regular finite-type curve over the perfect field $\mathbb Q$ is smooth. [[thm-projective-space-proper-over-base]] [[thm-normalization-glues-integral-finite-type-curves]] [[thm-regular-equals-smooth-over-perfect-field]]

[F3] A nonconstant rational function on a smooth proper normal curve induces a finite locally free map to $\mathbb P^1$ whose degree is its function-field degree. [[lem-function-with-poles-defines-map-p1]]

[F4] For a finite separable map of smooth proper curves, the different coefficient at a point is $e-1$ when the residue extension is separable and the ramification index is invertible in the residue field; Riemann–Hurwitz gives $2g(C)-2=2(-2)+\deg R$ for a degree-two map to $\mathbb P^1$. [[def-ramification-index-curve-map]] [[lem-curve-different-local-support-and-index-bound]] [[thm-riemann-hurwitz-complete]]

[F5] A monogenic finite algebra whose defining polynomial has invertible formal derivative is finite étale. [[def-etale-morphism-schemes]] [[lem-finite-etale-algebra-module-presentation-and-rank]]

[F6] For a finite morphism of degree $2$ between smooth proper curves, the sum of the geometric fibre multiplicities is $2$. Thus a geometric point with ramification index $2$ is the unique point above its image. [[lem-degree-pullback-divisor-finite-morphism-curves]]

[F7] The sections of the displayed affine model over $R$ are its $S$-integral points relative to that model. [[def-s-integral-points-on-an-affine-curve]]

[L1] The main theorem [[thm-siegel-finiteness-of-integral-points-on-hyperbolic-curves]] gives finiteness here because $g(C)=2$, but its Mordell–Faltings supplier is still escalated. The example's finiteness conclusion is conditional on that supplier becoming proof-closed.

[F8] A number field is a finite extension of $\mathbb Q$; for the finite set $S$ of rational primes, $R=\mathbb Z[1/p:p\in S]$ is its ring of $S$-integers. [[def-number-field]] [[def-s-integers-and-s-units-of-a-number-field]]

[F9] A curve over a field is separated, finite type, geometrically integral, and one-dimensional; smoothness and properness are additional properties. Its genus is $\dim H^1(C,\mathcal O_C)$. [[def-algebraic-curve-over-field]] [[def-genus-euler-characteristic-curve]]

## Proof

1.1 The derivative of $f(x)=x^5-x$ is $5x^4-1$. If $c$ were a common root of $f$ and $f'$, then $c^4=1/5$ and $f(c)=c(c^4-1)=-4c/5=0$, so $c=0$, contradicting $c^4=1/5$. Thus [F1] shows the five finite roots are distinct. At a simple root the valuation of $f$ is one, so $f$ is not a square in $\overline{\mathbb Q}(x)$; hence $y^2=f(x)$ is geometrically integral. The affine curve is smooth because a singular point would satisfy $y=0$ and $f(x)=f'(x)=0$. Take its projective closure in $\mathbb P^2$ and normalize it in its function field. By [F2] this gives a finite proper normal curve, which is smooth over $\mathbb Q$. By [F3], the rational function $x$ induces a finite map to $\mathbb P^1$, and the nonsquare relation makes its function-field degree two. [F1, F2, F3, given, construct]

2.1 At each of the five simple finite roots $a$, the local equation has $v_a(f)=1$, so $2w(y)=e\,v_a(f)=e$ forces the ramification index $e$ to be even; since the map has degree two, $e=2$. At every other finite point $f$ is a unit and $2y$ is a unit, so [F5] makes the local algebra finite étale. At infinity, $v_\infty(f)=-5$ is odd; for any extension valuation $w$, the relation $2w(y)=w(f)=-5e$ again forces $e=2$, so [F6] gives one geometric point above infinity. These six simple branch points are all the ramification points. Their residue fields are $\overline{\mathbb Q}$, so [F4] gives different coefficient $e-1=1$ at each and zero elsewhere. By [F4], $2g(C)-2=2(-2)+6=2,$ so $g(C)=2$. The point above infinity is unique and therefore rational over $\mathbb Q$. The smooth affine chart over $\mathbb A^1$ has coordinate ring $\mathbb Q[x,y]/(y^2-x^5+x)$ and is the complement of that point; define the same polynomial algebra $R[x,y]/(y^2-x^5+x)$ over $R$. Its base change to $\mathbb Q$ is this affine chart. Monicity in $y$ makes it free of rank two over $R[x]$, hence flat over $R$. [F2, F3, F4, F5, F6, step 1.1, algebra]

3.1 By [F7], the section set is the $S$-integral point set of $C\setminus\{\infty\}$. Since the compactifying curve has genus $2$, [L1] gives its finiteness. Direct substitution verifies $(0,0)$, $(1,0)$, and $(-1,0)$ satisfy the equation; their coordinates belong to every ring $R$ above, so they define sections. [F7, L1, given, step 2.1, algebra] ∎

## Proof status

Escalated. The curve calculation and the three displayed integral points are verified directly. Finiteness depends on the actual Mordell–Faltings supplier, whose proof remains unclosed.
