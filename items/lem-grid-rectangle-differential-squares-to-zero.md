---
id: lem-grid-rectangle-differential-squares-to-zero
kind: lemma
title: "The three grid rectangle differentials square to zero"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - alg-grid-knot-floer-complex
  - lem-grid-rectangle-boundary-square-zero-and-filtration
dependency_level: 4
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Peter S. Ozsvath, Andras I. Stipsicz, and Zoltan Szabo, Grid Homology for Knots and Links, Lemma 4.6.7 and §13.2"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "Printed pp.77–83 and 252–254; rectangle-domain pairings for the minus and full filtered differentials"
    - title: "Ciprian Manolescu, Peter Ozsvath, and Sucharit Sarkar, A combinatorial description of knot Floer homology, §1"
      url: "https://arxiv.org/pdf/math/0607691"
      locator: "Grid complex and the pairwise cancellation proving its differential squares to zero"
---

## Statement

For every one-component toroidal grid and each of the tilde, associated-graded minus, and full filtered minus modes, the differential defined by the grid-complex algorithm satisfies $\partial^2=0$ over its stated coefficient ring.

## Statement references

[[alg-grid-knot-floer-complex|The three finite grid differential definitions]]

[[lem-grid-rectangle-boundary-square-zero-and-filtration|Rectangle-composition pairings and annulus weights]]

## Facts & Assumptions

**Given:** A one-component toroidal grid $G$ and one of the three differential modes defined by the algorithm.

[F1] [[alg-grid-knot-floer-complex]] defines each differential as a finite sum over empty-state rectangles, with the stated mode-specific marking restriction and coefficient.

[F2] [[lem-grid-rectangle-boundary-square-zero-and-filtration]] proves that every non-annular two-rectangle composite has two equal contributions and that the only possible annular contributions either vanish by mode restriction or occur twice with the same monomial.

## Proof

1.1 Fix initial and terminal states $\mathbf x,\mathbf z$. The coefficient of $\mathbf z$ in $\partial^2\mathbf x$ is the sum over all ordered pairs of counted empty rectangles with an intermediate state. By [F2], every non-annular composite contributes in a pair of decompositions with equal coefficient, and so its total is zero in $\mathbb F_2$. [F1, F2, given]

2.1 If $\mathbf z\ne\mathbf x$, all composites are non-annular and step 1.1 gives zero coefficient. If $\mathbf z=\mathbf x$, the only additional composites are thin annuli; [F2] shows these are excluded in the first two modes and cancel in the full filtered mode. Thus every matrix coefficient of $\partial^2$ is zero, for every mode. [F2, step 1.1, algebra] ∎
