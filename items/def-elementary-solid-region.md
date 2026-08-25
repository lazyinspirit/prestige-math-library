---
id: def-elementary-solid-region
kind: definition
title: "Elementary solid regions: one boundary presentation adapted in all three coordinate directions"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-simple-solid-region-in-a-coordinate-direction, def-adapted-outward-boundary-presentation-of-a-simple-solid-region, def-finitely-patched-regular-surface-and-integrals, def-metric-interior-closure-boundary]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "G. Strang and E. Herman, Calculus Volume 3 (OpenStax), section 6.8"
      url: "https://openstax.org/books/calculus-volume-3/pages/6-8-the-divergence-theorem"
    - title: "J. Feldman, A. Rechnitzer and E. Yeager, CLP-4 Vector Calculus (University of British Columbia), section 4.2"
      url: "https://personal.math.ubc.ca/~CLP/CLP4/clp_4_vc/clp_4_vc.html"
pipeline_run: null
---

## Definition

An **elementary solid region** is a compact set $E\subseteq\mathbb R^3$ supplied with a simple description in each of the three coordinate directions ([[def-simple-solid-region-in-a-coordinate-direction]]) together with one compatible finite patch presentation of $\partial E$ that is adapted to a simple description of $E$ in each of the three coordinate directions ([[def-adapted-outward-boundary-presentation-of-a-simple-solid-region]], [[def-finitely-patched-regular-surface-and-integrals]]).

Explicitly, the data are: three simple descriptions $(x,D_x,\gamma^x_1,\gamma^x_2)$, $(y,D_y,\gamma^y_1,\gamma^y_2)$ and $(z,D_z,\gamma^z_1,\gamma^z_2)$, each describing the same set $E$; one compatible finite patch presentation $\Sigma=\bigl((D_1,\varphi_1),\ldots,(D_P,\varphi_P)\bigr)$ whose patch images cover $\partial E$ and are contained in $\partial E$; and, for each of the three directions $k$, a partition of $\{1,\ldots,P\}$ into sublists $\Sigma^{+}_k,\Sigma^{-}_k,\Sigma^{0}_k$ making $\Sigma$ adapted to the $k$th description. The boundary is that of [[def-metric-interior-closure-boundary]].

**One presentation, three partitions.** The patch list is the same in all three directions; only the sorting of its indices into upper, lower and lateral changes with $k$. That is what makes the three single-direction flux identities statements about one and the same boundary integral, and it is the whole content of the word "elementary" here.

## Remarks

- **The descriptions and the presentation are supplied data.** Nothing above is inferred from the set $E$: a compact set may admit several simple descriptions in a given direction, several compatible presentations of its boundary, and several sortings of a presentation, and no claim is made that any of these exists for an arbitrary compact set or that it is unique when it does. The convention matches the one [[def-type-i-type-ii-and-elementary-green-regions]] uses in the plane, where the decomposition is likewise part of the data.

- **A patch may be lateral in one direction and a face in another.** The six faces of a box illustrate both: the top and bottom faces are the upper and lower sublists for $k=z$ and lateral for $k=x$ and $k=y$. What cannot happen is a patch lateral in all three directions, and that is [[cor-every-face-of-an-elementary-solid-region-is-outward-oriented]].

- **What is not assumed.** The solid need not be convex, its boundary need not be connected, and no patch is required to be a graph over a coordinate plane. Conversely, nothing here asserts that every compact solid with a piecewise smooth boundary can be presented this way; [[rem-the-reach-of-the-classical-divergence-and-stokes-theorems]] states what is and is not covered.
