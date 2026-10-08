---
page: large-spherical-metric-flags-and-the-moussong-girth-theorem
title: "Large Spherical Metric Flags and the Moussong Girth Theorem"
status: draft
items:
  - def-cg-large-spherical-metric-flag-and-almost-negative-matrix
  - lem-cg-cat-zero-products-and-cat-one-joins
  - lem-cg-metric-flag-links-and-local-cat-one
  - def-cg-coxeter-nerve-and-moussong-metric
  - lem-cg-minimum-nonshrinkable-loop-and-radial-vertex-insertion
  - thm-cg-large-metric-flag-short-loop-radial-contradiction
  - thm-cg-large-metric-flag-complexes-are-cat-one
  - cor-cg-coxeter-nerve-is-cat-one-and-has-girth-at-least-two-pi
examples: []
---

A finite piecewise spherical complex is **large** here when each simplex has Gram off-diagonal entries at most zero, equivalently when each edge has length at least $\pi/2$. It is **metric flag** when a pairwise adjacent vertex set spans a simplex exactly when its prescribed cosine matrix is positive definite. This metric criterion allows cliques that are not filled when their Gram matrix is singular or indefinite.

The page's authored chain connects that local matrix condition to the CAT(1) property and to the Coxeter nerve. Its proofs use compact untruncated components, confined radial insertion, and dimension induction. The page remains draft pending the build's independent review and publication controls.

## Large spherical metric flags

[[def-cg-large-spherical-metric-flag-and-almost-negative-matrix]] fixes the edge-length convention, the almost-negative matrix with value $-1$ on nonedges, the positive-definite metric-flag test, and the Schur-complement description of face links. It does not assert CAT(1) curvature.

[[lem-cg-cat-zero-products-and-cat-one-joins]] proves the CAT(0) product and CAT(1) spherical-join facts used by the local models. [[lem-cg-metric-flag-links-and-local-cat-one]] proves that face links remain large metric flag complexes, identifies the local spherical-cone charts, and states the curvature step conditionally on CAT(1) for all smaller-dimensional links.

[[def-cg-coxeter-nerve-and-moussong-metric]] constructs the nerve from the positive-definite principal submatrices of the Coxeter cosine form. It distinguishes prescribed one-cell lengths from global chain distances and defines the finite truncated angular metric across disconnected components.

## The short-loop route

For a finite large metric flag complex that is locally CAT(1) and not CAT(1), the short-loop supplier applies to its compact untruncated geodesic components and gives an attained minimum nonshrinkable circle under AC. The radial-insertion lemma reduces a minimum loop chosen to maximize vertex visits to a locally geodesic loop in the 1-skeleton with at most three vertices. Its proof establishes the CAT(1) vertex link from a small local chart, develops only the actual excursion trace, and inserts its centre by a constant-length homotopy inside that trace cone. The first-exit and tangent-direction arguments then force the loop to follow edges in [[lem-cg-minimum-nonshrinkable-loop-and-radial-vertex-insertion]].

[[thm-cg-large-metric-flag-short-loop-radial-contradiction]] proves the short edge-loop count, the three-edge Gram determinant calculation, and the corner shortening. Together with the minimum-loop reduction, these steps prove that a finite locally CAT(1) large metric flag complex is CAT(1).

## Coxeter nerve and CAT(1)

[[thm-cg-large-metric-flag-complexes-are-cat-one]] supplies the zero-dimensional base, the component reduction, and the dimension-induction link step. The short-loop contradiction theorem closes the induction and gives CAT(1) in every finite dimension.

[[cor-cg-coxeter-nerve-is-cat-one-and-has-girth-at-least-two-pi]] uses the finite-type/positive-definite dictionary to identify the nerve as a large metric flag complex and then transfers CAT(1) and girth conclusions to all face links. The induction theorem yields these conclusions. Its AC assumption is explicit and propagates from finite spherical minimizing geodesics and the Bowditch short-loop argument.

The proof route does not consume Moussong's Lemma 9.11. Möller gives a counterexample to that lemma in its stated generality; the repair for the hyperbolicity criterion remains outside this page's claims. This page asserts no Coxeter-group hyperbolicity theorem.

## Companion examples

The companion [[large-spherical-metric-flags-and-the-moussong-girth-theorem-examples]] gives two explicit calculations: the affine $\widetilde A_2$ nerve and the contrast between a filled all-right triangle and a disconnected universal-Coxeter nerve. Their local matrix and metric conclusions are checked directly.

## Prerequisites

The required earlier pages are [[cat-comparison-link-criteria-and-local-globalization]], [[finite-coxeter-diagrams-and-complete-classification]], and [[short-loop-polygons-and-quantitative-energy-decrease]]. Dependency evidence and source locators are recorded in the batch manifest and coverage file.
