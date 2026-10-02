---
page: harmonic-hardy-classes-and-fatou-boundary-limits-examples
title: "Harmonic Hardy Classes and Fatou Boundary Limits: Examples and Counterexamples"
status: draft
requires: [harmonic-hardy-classes-and-fatou-boundary-limits]
items: []
examples:
  - ex-poisson-extension-of-an-indicator-arc
  - ex-poisson-boundary-atom-in-h-one
  - cex-radial-boundary-limit-does-not-force-tangential-limit
---

The examples test the boundary theory of
[[harmonic-hardy-classes-and-fatou-boundary-limits]] on explicit data. The
Poisson extension of the indicator of a proper open arc is computed in full: it
stays strictly between zero and one, its radial $L^1$ norm equals the arc
measure, its nontangential boundary values are one on the interior of the arc
and zero on the interior of the complement, and at each endpoint the radial
limit is one half even though the indicator itself has no two-sided boundary
limit there.

A boundary point mass produces a positive harmonic function in $h^1$ with norm
one whose boundary measure is singular with respect to $m$, so no $L^1$
density represents it; this separates the measure representation of $h^1$ from
the density case. The counterexample then shows that radial convergence at a
boundary point does not control tangential behaviour: a bounded
$\{0,1\}$-valued boundary function is built whose Poisson extension tends
radially to zero at the point $1$ while remaining bounded below along a
tangential sequence approaching $1$, in accordance with the almost-everywhere
nontangential Fatou theorem.
