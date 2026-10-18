---
id: thm-bernstein-convex-hull-and-positivity
kind: theorem
title: Bernstein control values bound a piecewise polynomial
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-piecewise-bernstein-representation, def-binomial-coefficient, def-canonical-natural, thm-binomial-theorem, lem-nat-trichotomy, lem-of-naturals-positive, lem-finite-sum-laws, lem-finite-set-has-max, def-max-min, def-integer-power]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Rida T. Farouki, The Bernstein polynomial basis: a centennial retrospective, Computer Aided Geometric Design 29 (2012), pp. 379–419"
      url: https://faculty.engineering.ucdavis.edu/farouki/wp-content/uploads/sites/51/2021/07/Bernstein-polynomial-basis.pdf
---

## Statement

On each cell of a representation from [[def-piecewise-bernstein-representation]], the polynomial value lies between the minimum and maximum of that cell's controls. In particular, nonnegative controls imply a nonnegative polynomial throughout the cell. If every cell has nonnegative controls and adjacent endpoint controls agree, the piecewise function is continuous and nonnegative on the entire partition. This is a control-value guarantee; positivity at a finite set of sample nodes alone is not among the hypotheses.

## Facts & Assumptions

**Given:** A finite Bernstein representation over a real interval, with integer degrees and real control values.

[F1] [[def-piecewise-bernstein-representation]]: each basis term is $B_{k,n}(t)=\iota\binom nk t^k(1-t)^{n-k}$ and a cell polynomial is their finite weighted sum.

[F2] [[thm-binomial-theorem]]: for real $x,y$ and a natural $n$, $(x+y)^n=\sum_{k<n+1}\iota\binom nk x^k y^{n-k}$.

[F3] [[def-binomial-coefficient]]: each $\binom nk$ is a natural number.

[F4] [[lem-nat-trichotomy]]: the order on naturals is total, so a natural is zero or positive.

[F5] [[def-canonical-natural]]: the canonical embedding sends zero to zero and sends each successor to the previous image plus one.

[F6] [[lem-of-naturals-positive]]: in an ordered field, the canonical image of a positive natural is positive.

[F7] [[lem-finite-sum-laws]]: finite sums preserve termwise inequalities, and finite products of nonnegative reals are nonnegative.

[F8] [[lem-finite-set-has-max]]: every nonempty finite list of real numbers has both a maximum and a minimum.

[F9] [[def-max-min]]: a maximum (minimum) is an element of a set that bounds it above (below).

[F10] [[def-integer-power]]: for natural exponents, $1^0=1$ and $1^{n+1}=1^n\cdot1$.

## Proof
1.1 Fix a cell and $t\in[0,1]$. Both $t$ and $1-t$ are nonnegative, so their natural powers are nonnegative by induction using the recursive definition [F10] and closure of nonnegative reals under multiplication. By [F3]–[F4], $\binom nk$ is a natural that is either zero or positive; [F5] sends its zero case to zero, and [F6] sends its positive case to a positive real. Thus every $B_{k,n}(t)\ge0$. [F1, F3, F4, F5, F6, F10, given, algebra, induction]

1.2 Apply [F2] with $x=t$ and $y=1-t$. Since $t+(1-t)=1$, [F10] and induction give $1^n=1$, so the displayed Bernstein basis terms sum to one. [F1, F2, F10, given, induction, algebra]

2.1 By [F8]–[F9], let $c_{\min}$ and $c_{\max}$ be the minimum and maximum of the finite control list. For each $k$, [F1], step 1.1, and [F7] give $c_{\min}B_{k,n}(t)\le c_{i,k}B_{k,n}(t)\le c_{\max}B_{k,n}(t)$: the control differences and basis weights are nonnegative, so their products are nonnegative. Summing with [F7] and using step 1.2 gives $c_{\min}\le p_i(x)\le c_{\max}$. Therefore nonnegative controls imply $p_i(x)\ge0$. Applying this cellwise gives nonnegativity on the partition, and matching adjacent endpoint controls give continuity by the endpoint values $B_{0,n}(0)=B_{n,n}(1)=1$ and all other endpoint basis values zero. [step 1.1, step 1.2, F1, F7, F8, F9, algebra] ∎
