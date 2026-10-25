---
id: def-standard-product-torus-as-a-compact-lie-group
kind: definition
title: "The standard product torus as a compact Lie group"
status: "published"
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 0
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-one-parameter-subgroup-of-a-lie-group
  - def-exponential-map-of-a-lie-group
  - def-the-one-dimensional-torus-and-normalized-haar-integral
  - prop-real-line-mod-integers-is-compact-and-path-connected
  - thm-finite-products-of-compact-spaces
  - thm-product-of-connected-spaces
  - def-torus-and-maximal-torus-in-a-compact-lie-group
  - def-smooth-manifold
  - def-lie-group
  - def-smooth-map-between-manifolds-with-boundary
  - prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure
  - prop-a-map-into-a-product-is-smooth-iff-its-components-are-smooth
  - prop-relative-cw-inclusions-are-cofibrations
  - def-compactly-generated-based-space-and-well-pointed-object
  - thm-heine-borel-rn
  - thm-compactness-agrees-with-metric-compactness
  - thm-closed-subspace-of-a-compact-space-is-compact
  - thm-compactness-under-continuous-maps
  - thm-compact-subset-of-a-hausdorff-space-is-closed
  - lem-open-or-closed-surjection-is-quotient
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-one-parameter-subgroup-of-a-lie-group: mathematical-premise
  def-exponential-map-of-a-lie-group: mathematical-premise
  def-the-one-dimensional-torus-and-normalized-haar-integral: mathematical-premise
  prop-real-line-mod-integers-is-compact-and-path-connected: mathematical-premise
  thm-finite-products-of-compact-spaces: mathematical-premise
  thm-product-of-connected-spaces: mathematical-premise
  def-torus-and-maximal-torus-in-a-compact-lie-group: mathematical-premise
  def-smooth-manifold: mathematical-premise
  def-lie-group: mathematical-premise
  def-smooth-map-between-manifolds-with-boundary: mathematical-premise
  prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure: mathematical-premise
  prop-a-map-into-a-product-is-smooth-iff-its-components-are-smooth: mathematical-premise
  prop-relative-cw-inclusions-are-cofibrations: mathematical-premise
  def-compactly-generated-based-space-and-well-pointed-object: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-compactness-agrees-with-metric-compactness: mathematical-premise
  thm-closed-subspace-of-a-compact-space-is-compact: mathematical-premise
  thm-compactness-under-continuous-maps: mathematical-premise
  thm-compact-subset-of-a-hausdorff-space-is-closed: mathematical-premise
  lem-open-or-closed-surjection-is-quotient: mathematical-premise
justified_by: []
axiom_strength: "ZF + AC"
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "Chapter 0, “Cell Complexes” and “Operations on Spaces,” printed pp. 5–8: the circle cell structure, product cells, and the product topology for finite cell complexes."
landmark: false
---

## Definition

Assume the full Axiom of Choice. For a nonnegative integer $r$, let
$T=(\mathbb R/\mathbb Z)^r$ with the quotient topology and coordinatewise
addition. On each circle factor, for every open interval $I\subset\mathbb R$
of length less than $1$, use the chart
$q(I)\to I$ given by the unique lift through the quotient map
$q:\mathbb R\to\mathbb R/\mathbb Z$; give $T$ the product smooth structure.
Write $\mathfrak t=T_0T$. For $1\leq i\leq r$, let $e_i$ be the tangent vector
at $0$ to the one-parameter subgroup
$s\mapsto(0,\ldots,[s],\ldots,0)$ in the $i$th coordinate. These vectors form
the period-one basis of $\mathfrak t$, and $e_i^*$ denotes its dual basis.
The standard Lie exponential is normalized by
$\exp_T(s e_i)=(0,\ldots,[s],\ldots,0)$ for every $s\in\mathbb R$.
For $r=0$, use the one-point group and the empty basis. This convention makes
$T$ a compact connected abelian Lie group, hence a torus in the sense of the
standard compact-Lie-group definition; its identity inclusion is a cofibration,
so this based group is well-pointed.

## Definition references

[Axiom of Countable Choice] [[def-countable-choice]]

[Quotient circle topology and group structure] [[def-the-one-dimensional-torus-and-normalized-haar-integral]]

[Compactness and path connectedness of the quotient circle] [[prop-real-line-mod-integers-is-compact-and-path-connected]]

[Definition of a torus as a compact connected abelian Lie group] [[def-torus-and-maximal-torus-in-a-compact-lie-group]]

[Definition of a one-parameter subgroup] [[def-one-parameter-subgroup-of-a-lie-group]]

[Definition of the Lie exponential] [[def-exponential-map-of-a-lie-group]]

[Canonical product smooth structure] [[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]]

[Smooth maps into finite products] [[prop-a-map-into-a-product-is-smooth-iff-its-components-are-smooth]]

[Relative CW inclusions have the homotopy extension property] [[prop-relative-cw-inclusions-are-cofibrations]]

[Compactly generated based spaces and well-pointedness] [[def-compactly-generated-based-space-and-well-pointed-object]]

## Facts & Assumptions

**Given:** AC, a nonnegative integer $r$, and the coordinate product $T=(\mathbb R/\mathbb Z)^r$.

[A1] Assume the full Axiom of Choice. [[def-axiom-of-choice]]

[F1] $\mathrm{AC}_\omega$ means that every sequence of nonempty sets has an indexed choice function. [[def-countable-choice]]

[F2] Under $\mathrm{AC}_\omega$, $\mathbb R/\mathbb Z$ is the quotient topological group, each class has a representative in $[0,1)$, it is compact Hausdorff and second-countable, and its quotient map is open. [[def-the-one-dimensional-torus-and-normalized-haar-integral]]

[F3] The quotient circle is path connected; finite products of compact spaces are compact, and finite products of connected spaces are connected. [[prop-real-line-mod-integers-is-compact-and-path-connected]] [[thm-finite-products-of-compact-spaces]] [[thm-product-of-connected-spaces]]

[F4] A torus is a compact connected abelian Lie group. [[def-torus-and-maximal-torus-in-a-compact-lie-group]]

[F5] Products of smooth manifolds have the canonical product smooth structure, and a map into a finite product is smooth exactly when its components are smooth. [[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]] [[prop-a-map-into-a-product-is-smooth-iff-its-components-are-smooth]]

[F6] A smooth Lie group is a group with a finite-dimensional smooth-manifold structure for which multiplication and inversion are smooth. [[def-lie-group]] [[def-smooth-manifold]] [[def-smooth-map-between-manifolds-with-boundary]]

[F7] An inclusion of a relative CW subcomplex has the homotopy extension property and is a cofibration. [[prop-relative-cw-inclusions-are-cofibrations]]

[F8] The based-space convention is compactly generated and weak Hausdorff; well-pointed means the basepoint inclusion is a cofibration. [[def-compactly-generated-based-space-and-well-pointed-object]]

[F9] Under $\mathrm{AC}_\omega$, every $X\in\mathfrak t$ determines a unique one-parameter subgroup $\gamma_X$ with $\gamma_X'(0)=X$, and $\exp_T(X)=\gamma_X(1)$. [[def-one-parameter-subgroup-of-a-lie-group]] [[def-exponential-map-of-a-lie-group]]

[F10] The interval $[0,1]$ is compact in its usual metric by the real-line clause of [[thm-heine-borel-rn]], and hence in its usual topology by [[thm-compactness-agrees-with-metric-compactness]], claims 1–2.

[F11] A closed subspace of a compact space is compact. [[thm-closed-subspace-of-a-compact-space-is-compact]], claim 1.

[F12] A continuous map sends every compact subset of its domain to a compact subset of its target. [[thm-compactness-under-continuous-maps]], claim 1.

[F13] Every compact subset of a Hausdorff space is closed. [[thm-compact-subset-of-a-hausdorff-space-is-closed]], claim 3.

[F14] A continuous closed surjection is a quotient map. [[lem-open-or-closed-surjection-is-quotient]], clause 2.

## Proof

1.1 By [A1], for any sequence $(A_n)$ of nonempty sets the family
$\mathcal F=\{A_n:n\in\mathbb N\}$ has a choice function $g$. The composite
$n\mapsto g(A_n)$ is an indexed selector, even if some sets $A_n$ repeat.
Thus [F1] holds and supplies the countable-choice premise in the quotient
circle definition [F2]. [A1, F1, F2, construct]

1.2 For one factor, [F2] makes each quotient interval $q(I)$ open because
$q$ is open, and $q|_I$ is injective because $I$ has length less than $1$.
Its inverse chart is continuous: $q|_I$ is a continuous open bijection onto
$q(I)$. These charts cover the circle. If two charts overlap, local lifts
differ by an integer; this integer is locally constant, so each transition
map is locally a translation and hence smooth. The charts therefore define a
smooth one-manifold without boundary compatible with the quotient topology.
[F2, construct]

2.1 Addition and inversion on one factor are smooth in these charts. Near any
pair of points, choose local real lifts $x,y$ and an output chart around their
sum; after shrinking the input intervals, the coordinate expression for
addition is $x+y$ plus one fixed integer. Near any point, choose local lifts
for it and its inverse; the coordinate expression for inversion is $-x$ plus
one fixed integer. Both expressions are smooth. With the group law already
given by [F2], this is a Lie group by [F6]. Its underlying circle is compact,
Hausdorff and connected by [F2] and [F3], and it is abelian by the quotient
addition law. [F2, F3, F6, step 1.2, algebra]

3.1 Iterate the binary product smooth-structure construction in [F5] over the
finite number $r$ of factors. Multiplication and inversion are componentwise
products of the smooth one-factor maps in step 2.1; iterating the binary
component criterion in [F5] makes both operations smooth. The finite product
is compact by [F3], connected by [F3], and abelian coordinatewise. It is
therefore a compact connected abelian Lie group, hence a torus by [F4], of
dimension $r$. The coordinate curves
$\gamma_i(s)=(0,\ldots,[s],\ldots,0)$ are smooth group homomorphisms by the
quotient charts and coordinate group law, so [F9] applies. Their derivatives
at zero form the coordinate basis of $T_0T$, and
$\gamma_i(s+1)=\gamma_i(s)$, so each has period one. For any $t\in\mathbb R$,
$s\mapsto\gamma_i(ts)$ is a smooth group homomorphism with initial derivative
$t e_i$; uniqueness in [F9] makes it $\gamma_{t e_i}$. Therefore
$\exp_T(t e_i)=\gamma_{t e_i}(1)=\gamma_i(t)$, as needed for the stated
normalization. For $r=0$, the empty product is the one-point Lie group and
these assertions hold with empty basis. [F3, F4, F5, F6, F9, step 1.1, step 2.1, given, algebra]

4.1 The circle has a finite CW structure with one vertex $[0]$ and one open
$1$-cell, the image of $(0,1)$; its characteristic interval has both
endpoints attached to that vertex. For $T$, index product cells by subsets
$J\subseteq\{1,\ldots,r\}$: coordinates in $J$ lie in the open $1$-cell and
all other coordinates equal $[0]$. Each cell is an open cube of dimension
$|J|$, its closure meets only cells indexed by subsets of $J$, and its
characteristic cube is the product of the factor characteristic intervals;
identify each closed cube with a closed disk of the same dimension. The map
$q^r:[0,1]^r\to T$ is a continuous surjection because every coordinate class
has a representative in $[0,1]$ by [F2]. If $x\ne y$ in $T$, some coordinate
$k$ has $x_k\ne y_k$; choose disjoint open neighborhoods of $x_k$ and $y_k$
in the Hausdorff circle from [F2]. Their inverse images under the $k$th
coordinate projection are disjoint open neighborhoods of $x$ and $y$ in the
product topology, so $T$ is Hausdorff. The cube $[0,1]^r$ is compact by
[F10] and the finite-product theorem in [F3], including the one-point empty
product when $r=0$. If $K$ is closed in that cube, [F11] makes $K$ compact;
continuity of $q^r$ and [F12] make $q^r(K)$ compact; and the just-proved
Hausdorff property of $T$ and [F13] make $q^r(K)$ closed in $T$. Thus $q^r$
is closed as well as continuous and surjective, so [F14] makes it a quotient
map. It is the
characteristic map for the top cell. Every lower-cell characteristic cube is
obtained by precomposing $q^r$ with the continuous coordinate insertion that
fixes omitted coordinates at $0$, so the quotient topology of $q^r$ already
makes every characteristic map continuous; conversely $q^r$ is itself one of
those maps. Hence this quotient topology is exactly the weak topology
determined by the finitely many characteristic cubes. This gives a finite CW
structure with the identity as a $0$-cell. The singleton
identity is a subcomplex, so [F7] gives the homotopy extension property for
its inclusion. [F2, F3, F7, F10, F11, F12, F13, F14, step 1.1, step 3.1, construct]

5.1 The compact Hausdorff space $T$ is compactly generated: its identity map
from the compact Hausdorff space $T$ tests every open subset in the
compactly-generated topology. For every compact Hausdorff space $C$ and continuous
map $f:C\to T$, [F12] makes $f(C)$ compact, and [F13] makes $f(C)$ closed
in the Hausdorff space $T$ established in step 4.1. This is precisely weak
Hausdorffness. Together with the cofibration from step 4.1,
[F8] shows that the based group is well-pointed. [F3, F8, F12, F13, step 4.1, construct] ∎
