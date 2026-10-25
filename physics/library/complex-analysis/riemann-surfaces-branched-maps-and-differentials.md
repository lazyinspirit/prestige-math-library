---
page: riemann-surfaces-branched-maps-and-differentials
title: "Riemann Surfaces, Branched Maps, and Differentials"
status: published
items:
  - lem-planar-piecewise-analytic-region-triangulation
  - lem-index-of-graph-bounded-region-boundary
  - def-riemann-surface-and-holomorphic-atlas
  - lem-nonsingular-complex-algebraic-curve-holomorphic-charts
  - def-holomorphic-and-meromorphic-map-of-riemann-surfaces
  - lem-finite-analytic-chart-triangulation-compact-riemann-surface
  - def-meromorphic-differential-on-a-riemann-surface
  - thm-local-normal-form-holomorphic-map-riemann-surfaces
  - def-ramification-index-and-branch-value
  - thm-residue-theorem-compact-riemann-surface
  - lem-pullback-order-of-meromorphic-differentials-under-branched-maps
  - thm-proper-holomorphic-map-riemann-surfaces-has-degree
  - thm-topological-classification-compact-riemann-surfaces
  - def-genus-and-euler-characteristic-compact-riemann-surface
  - thm-riemann-hurwitz-formula
examples: []
---

This page develops the Riemann-surface interface of complex analysis: holomorphic
atlases, holomorphic and meromorphic maps, meromorphic differentials with their
orders and residues, ramification, and the two global theorems that organise the
subject here, the residue theorem on a compact Riemann surface and the
Riemann–Hurwitz formula.

The two opening lemmas are the local plane-geometry input: a compact plane
region bounded by finitely many piecewise real-analytic curves admits a finite
triangulation by curvilinear triangles avoiding any prescribed finite set, and
the positively oriented boundary of a graph-bounded region has winding number
one at interior points and zero outside. The chartwise construction on a
compact Riemann surface gives rectifiable graph-bounded cells with a common
boundary subdivision, and also a face-to-face topological refinement. The
residue theorem places poles in the original cell interiors and cancels their
paired subedge integrals, without Stokes or de Rham input. Nonsingular complex
algebraic curves are shown to
carry holomorphic charts through the several-variable implicit function
theorem, so the algebraic examples of the companion page are honest Riemann
surfaces.

Branched maps are treated through the local normal form $z\mapsto z^{e}$: it
defines the ramification index, supplies the local multiplicity count, and makes
the pullback order formula $\operatorname{ord}_x(f^\ast\eta)=e_x\operatorname{ord}_{f(x)}(\eta)+e_x-1$
local and explicit. From it the page proves that a proper nonconstant
holomorphic map of Riemann surfaces is onto, has finite fibres, and has a degree
$d$ computed as a weighted fibre count, and that off the branch locus the map is
a genuine $d$-sheeted covering.

The last three items are global and carry the Axiom of Choice exactly through
the in-run classification of compact connected surfaces: a compact Riemann
surface is oriented by its holomorphic atlas and is homeomorphic to a sphere
with a unique number of handles; that number is the genus, with
$\chi=2-2g$; and Riemann–Hurwitz computes the genus change of a degree-$d$
branched cover as $2g(X)-2=d(2g(Y)-2)+\sum(e_x-1)$. The finite face-to-face topological refinement makes the
Euler-characteristic count in that proof honest,
and the classification chain from which these three items inherit the Axiom of
Choice is an in-run construction whose remaining obligations are tracked in the
run's dependency records.
