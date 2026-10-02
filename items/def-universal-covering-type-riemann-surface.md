---
id: def-universal-covering-type-riemann-surface
kind: definition
title: "Spherical, parabolic and hyperbolic universal-covering types"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
landmark: false
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-riemann-surface-and-holomorphic-atlas
  - def-universal-covering-space
  - def-covering-map-and-evenly-covered-neighbourhoods
  - def-simply-connected
  - def-semilocally-simply-connected-space
  - def-biholomorphic-map
  - prop-topological-manifolds-are-locally-compact-and-locally-path-connected
  - thm-connected-and-locally-path-connected-implies-path-connected
  - thm-convex-subsets-have-trivial-fundamental-group
  - thm-universal-cover-existence
  - thm-universal-cover-uniqueness-and-dominating-property
  - lem-holomorphic-structure-lifts-to-covering-surface
  - thm-uniformization-simply-connected-riemann-surfaces
  - lem-three-simply-connected-models-are-inequivalent
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Donald E. Marshall, The Uniformization Theorem"
      url: "https://sites.math.washington.edu/~marshall/math_536/uniformizationII.pdf"
      locator: "PDF pp. 6-9, the Uniformization Theorem and its two cases; PDF p. 15, Comments on the statement"
    - title: "Mikhail Lyubich, Dynamics of Quadratic Polynomials, Vol. I"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 1 section 5, printed pp. 115-118 (the disc, plane and sphere models and the classification of surfaces by their universal cover)"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Definition

Let $X$ be a connected Riemann surface
([[def-riemann-surface-and-holomorphic-atlas]]); assume the Axiom of Choice
([[def-axiom-of-choice]]) throughout.

**The holomorphic universal cover.** A **universal covering space** of $X$ is a
covering map $p:\widetilde X\to X$ with $\widetilde X$ simply connected
([[def-universal-covering-space]],
[[def-covering-map-and-evenly-covered-neighbourhoods]],
[[def-simply-connected]]).

*Existence.* A Riemann surface is a topological $2$-manifold without boundary,
hence locally compact and locally path connected, and every point has a
neighbourhood basis of path-connected open sets
([[prop-topological-manifolds-are-locally-compact-and-locally-path-connected]]);
being connected and locally path connected, $X$ is path connected
([[thm-connected-and-locally-path-connected-implies-path-connected]]). It is
semilocally simply connected in the sense of
[[def-semilocally-simply-connected-space]]: given $x\in X$ and a chart whose
image is an open disc, the chart domain $U$ is homeomorphic to a disc, a
nonempty convex subset of $\mathbb R^2$, hence simply connected
([[thm-convex-subsets-have-trivial-fundamental-group]]), so every loop in $U$
is null in $U$, therefore null in $X$, and the inclusion induces the trivial
map on fundamental groups. The existence theorem
([[thm-universal-cover-existence]]) therefore supplies at least one universal
covering space $p:\widetilde X\to X$.

*Holomorphic structure.* By
[[lem-holomorphic-structure-lifts-to-covering-surface]] (which uses Countable
Choice, a consequence of the Axiom of Choice) the topological universal cover
carries a complex structure, unique for which the projection is a holomorphic
unbranched covering, and with it $\widetilde X$ is a second-countable Riemann
surface and every deck transformation is biholomorphic. **The holomorphic
universal cover** of $X$ means $\widetilde X$ with this structure.

**The type.** The simply connected Riemann surface $\widetilde X$ is
biholomorphic to exactly one of the Riemann sphere $\widehat{\mathbb C}$, the
complex plane $\mathbb C$ and the unit disc $\mathbb D$
([[thm-uniformization-simply-connected-riemann-surfaces]]). Accordingly $X$ is

- **spherical** when its holomorphic universal cover is biholomorphic to
  $\widehat{\mathbb C}$,
- **parabolic** when its holomorphic universal cover is biholomorphic to
  $\mathbb C$,
- **hyperbolic** when its holomorphic universal cover is biholomorphic to
  $\mathbb D$.

**Well-definedness.** The label is independent of the universal cover chosen.
Let $p:\widetilde X\to X$ and $q:\widetilde Y\to X$ be two universal covers and
fix basepoints over the same point of $X$. By
[[thm-universal-cover-uniqueness-and-dominating-property]] there is a unique
continuous map $\varphi:\widetilde X\to\widetilde Y$ over $X$ (that is,
$q\circ\varphi=p$), and it is a homeomorphism, since the same statement applied
with the roles exchanged produces its inverse. The lifted complex structures of
[[lem-holomorphic-structure-lifts-to-covering-surface]] make $p$ and $q$
holomorphic unbranched coverings, hence local biholomorphisms; on a small open
set of $\widetilde X$ on which $q$ is injective the map $\varphi$ equals the
composite of $p$ with the holomorphic local inverse of $q$, so $\varphi$ is
holomorphic, and symmetrically for $\varphi^{-1}$. Thus $\varphi$ is a
biholomorphism ([[def-biholomorphic-map]]), the two universal covers are
biholomorphic, and they determine the same one of the three models. Exactly one
label occurs, for two reasons: the uniformization theorem presents $X$'s cover
as one of the three models, and no two of the three are biholomorphic
([[lem-three-simply-connected-models-are-inequivalent]]), so two labels cannot
both apply. The three labels are therefore exhaustive and mutually exclusive
for connected Riemann surfaces.

## Remark

**Terminology.** This is the geometric classification by the universal cover.
It is not the potential-theoretic Greenian/parabolic/exceptional vocabulary of
harmonic function theory; a Riemann surface that is hyperbolic in the present
sense need not be Greenian, and no implication between the two classifications
is asserted or used on this page. The word "parabolic" here records that the
plane is the universal cover, nothing more.

**Choice accounting.** The definition itself records a property of $X$: the
existence of the cover uses only the manifold structure of $X$, while Countable
Choice enters through the lifted holomorphic structure
([[lem-holomorphic-structure-lifts-to-covering-surface]]) and full choice
through the uniformization theorem
([[thm-uniformization-simply-connected-riemann-surfaces]]). No further
selection is made: the type is defined by the biholomorphism class of a cover
that is proved independent of the choice of cover.
