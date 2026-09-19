---
id: rem-nonregular-or-nonfree-symplectic-quotients-need-not-be-manifolds
kind: remark
title: Nonregular or nonfree symplectic quotients need not be manifolds
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-marsden-weinstein-meyer-symplectic-reduction, lem-differential-of-the-moment-map-and-orbit-orthogonal-identity, prop-regularity-of-a-moment-map-is-equivalent-to-local-freeness, def-countable-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf
      locator: Lecture 24, §24.5 Orbifolds, printed pages 150--151
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §8.1, Remarks before and after Theorem 8.3, printed page 101
---

## Remark

The reduction theorem of this page assumes that the value of the moment map is
regular and that the stabilizer acts freely and properly on the level
([[thm-marsden-weinstein-meyer-symplectic-reduction]]). Both hypotheses are
load-bearing, and nothing on this page asserts a smooth quotient without them:

* if the value is not regular, the image of the differential is only
  $\operatorname{ann}(\mathfrak g_p)$ and the level need not be a submanifold
  of the ambient symplectic manifold at all
  ([[lem-differential-of-the-moment-map-and-orbit-orthogonal-identity]]);
* if the action on the level is not free, the quotient is only an orbifold or
  a stratified space in general. For the weighted circle actions
  $e^{i\theta}\cdot(z_1,z_2)=(e^{ik\theta}z_1,e^{i\ell\theta}z_2)$ the quotient
  of a level is a weighted projective space, and the stabilizers of the
  coordinate axes produce cone points of orders $k$ and $\ell$; the classical
  teardrop and football orbifolds arise this way (da Silva, §24.5).

The counterexample `cex-zero-angular-momentum-level-with-nonfree-points-is-singular`
on the companion examples page exhibits the failure of freeness on the zero
angular-momentum level. Singular reduction, slice normal forms, orbifold
structures and the stratified symplectic category are deferred to later
development; they are named here as boundaries of the present theorem and are
not used as suppliers anywhere on this page.
