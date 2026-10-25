---
id: def-mod-two-degree-of-a-map-to-a-sphere
kind: definition
title: The mod-two degree of a map to a sphere
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 0
deps:
- def-integers-modulo-n
- def-smooth-manifold
- def-compact-space
- def-euclidean-spheres-and-closed-balls
- def-regular-and-critical-points-and-values
- thm-smooth-inverse-function-theorem-on-manifolds
- prop-smooth-maps-are-continuous
- thm-morse-sard-for-smooth-manifolds
- thm-regular-value-formula-for-degree
- def-degree-of-a-proper-smooth-map-by-compact-support-cohomology
- def-countable-choice
justified_by:
- lem-mod-two-degree-is-well-defined-and-homotopy-invariant
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
  - title: 'Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)'
    url: https://people.math.harvard.edu/~dafr/bordism.pdf
    locator: 'Theorem 2.37(ii), printed p.23: the isomorphism $[M,S^m]\to\mathbb Z/2$ given by the mod 2 degree'
  - title: John Milnor, Topology from the Differentiable Viewpoint
    url: https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf
    locator: Section 7, concluding Hopf discussion, the mod 2 degree and the nonorientable Hopf theorem, printed p.51
  - title: Victor Guillemin and Alan Pollack, Differential Topology
    url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
    locator: Chapter 2, Section 4, definition and invariance of $\deg_2$, printed pp.82-84
---
## Definition

Let $M$ be a closed smooth $m$-manifold with $m\ge1$, so that $M$ is compact
and has empty boundary ([[def-smooth-manifold]], [[def-compact-space]]), and let
$f:M\to S^m$ be smooth, where $S^m\subseteq\mathbb R^{m+1}$ is the Euclidean
unit sphere ([[def-euclidean-spheres-and-closed-balls]]). A point $y\in S^m$ is
a **regular value** of $f$ when every point of $f^{-1}(y)$ is a regular point
of $f$ ([[def-regular-and-critical-points-and-values]]). For a regular value
$y$ of $f$ define
$$\deg_2(f):=|f^{-1}(y)|\bmod 2\;\in\;\mathbb Z/2\mathbb Z,$$
the **mod-two degree** of $f$, the parity of the number of points of the
regular fibre, computed in the quotient set $\mathbb Z/2\mathbb Z$
([[def-integers-modulo-n]]). The empty fibre is allowed and contributes the
parity of the empty set, namely $0$; in particular a constant map has mod-two
degree $0$, since a value different from its image has empty fibre and is
vacuously regular.

No orientation of $M$ is required, and no orientation of $S^m$ is used: only
the *number* of points of the fibre enters. This is what distinguishes the
invariant from the integer degree of
[[def-degree-of-a-proper-smooth-map-by-compact-support-cohomology]], which is
defined for oriented source and target and counts points with signs. When $M$
is nonempty, connected and oriented and $m\ge1$, the signed count of the same fibre is the integer
degree of $f$ by [[thm-regular-value-formula-for-degree]], and reducing that
identity modulo two gives $\deg_2(f)\equiv\deg(f)\pmod2$.

Two things are *not* asserted by this definition and are proved in
[[lem-mod-two-degree-is-well-defined-and-homotopy-invariant]], which is why
that lemma is recorded in `justified_by`. First, the parity of the fibre is
independent of the regular value chosen, so the notation $\deg_2(f)$ denotes a
single element of $\mathbb Z/2\mathbb Z$ rather than a value attached to a
pair $(f,y)$; until that is known, the displayed formula defines a candidate
value for each supplied regular value. Second, homotopic maps have equal
mod-two degree, so $\deg_2$ descends to free homotopy classes.

The fibre is finite whenever $y$ is a regular value, so the parity is a
cardinality of a finite set and no cardinal arithmetic is involved. Indeed,
every $p\in f^{-1}(y)$ is a regular point, and since $\dim M=\dim S^m=m$ the
differential $df_p$ is an isomorphism of tangent spaces; the inverse function
theorem for smooth maps of manifolds
([[thm-smooth-inverse-function-theorem-on-manifolds]]) then makes $f$ a local
diffeomorphism at $p$, so $f$ is injective on some neighbourhood of $p$ and the
fibre is discrete in the sense that each of its points is isolated in it. The
fibre is closed because $f$ is continuous ([[prop-smooth-maps-are-continuous]])
and $\{y\}$ is closed, and a closed discrete subset of the compact space $M$ is
finite: the family consisting of $M\smallsetminus f^{-1}(y)$ and of all open neighbourhoods meeting the fibre in exactly one point is an open cover of the compact space $M$, and a finite subcover selects finitely many of those neighbourhoods, each meeting the fibre in exactly one point, so the fibre is finite.
Assuming $\mathrm{AC}_\omega$ ([[def-countable-choice]]), regular values exist by Sard's theorem for smooth manifolds
([[thm-morse-sard-for-smooth-manifolds]]), whose statement in this library
assumes the Axiom of Countable Choice $\mathrm{AC}_\omega$; this definition
itself makes no choice and uses no orientation, and the choice assumption
enters only through the existence of regular values and through the
well-definedness lemma.
