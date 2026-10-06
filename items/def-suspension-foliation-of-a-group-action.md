---
id: def-suspension-foliation-of-a-group-action
kind: definition
title: "The suspension foliation of a representation of the fundamental group"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 1
deps:
  - prop-quotient-foliation-under-a-free-proper-foliated-action
  - lem-the-deck-group-of-a-covering-acts-by-a-covering-space-action
  - thm-deck-group-of-a-universal-cover-is-the-fundamental-group
  - def-universal-covering-space
  - def-covering-space-action
  - def-group-action
  - def-diffeomorphism-and-local-diffeomorphism-of-manifolds
  - def-smooth-manifold
  - prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure
  - prop-deck-transformations-are-determined-by-one-point-and-act-freely
  - def-covering-map-and-evenly-covered-neighbourhoods
  - def-compact-space
  - thm-compactness-under-continuous-maps
  - def-countable-choice
  - thm-universal-cover-existence
  - prop-components-of-a-topological-manifold-are-open-and-at-most-countable
  - thm-countable-union-of-countable
  - thm-fundamental-group-laws
  - cor-convex-subsets-of-rn-are-contractible
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Eckhard Meinrenken, Lie Groupoids and Lie Algebroids, lecture notes (University of Toronto MAT1341, Fall 2017)"
      url: "https://www.math.toronto.edu/mein/teaching/MAT1341_LieGroupoids/Groupoids.pdf"
    - title: "Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs)"
      url: "https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Assume Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $B$
be a connected smooth manifold with base point $b_0$
([[def-smooth-manifold]]), let $F$ be a smooth manifold, let
$p:\widetilde B\to B$ be a universal cover with a fixed point
$\tilde b_0$ over $b_0$
([[def-universal-covering-space]]), and let
$\rho:\pi_1(B,b_0)\to\operatorname{Diff}(F)$ be a homomorphism into the
diffeomorphism group of $F$ ([[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]).
The universal cover has a canonical smooth manifold structure with $p$ a
local diffeomorphism. To include the second-countability prerequisite, choose
a countable cover of $B$ by coordinate balls: for each nonempty member of
an enumerated basis that is contained in some coordinate ball, use
$\mathrm{AC}_\omega$ to select one such ball. These selected balls cover $B$
because its coordinate balls form a neighborhood basis. Each is simply connected by its
convex coordinates ([[cor-convex-subsets-of-rn-are-contractible]]; a
zero-dimensional connected base is a single point). Each pairwise intersection
has at most countably many connected components, and they are path connected
([[prop-components-of-a-topological-manifold-are-open-and-at-most-countable]]).
Using $\mathrm{AC}_\omega$, choose a point in each nonempty overlap component
and a path from it to a chosen center in each of the two balls. A subdivided
loop can move every junction to the selected overlap point along a path in
that component; paths with the resulting fixed endpoints inside a ball are
homotopic by simple connectivity. Thus each loop class is represented by a
finite word in countably many selected connecting paths. This proves that
$\pi_1(B,b_0)$ is at most countable (finite words over a countable set are
countable under [[thm-countable-union-of-countable]]). The sheets over each
ball are indexed by this countable fibre. Lifting the countable coordinate
cover gives a countable smooth atlas on $\widetilde B$: transitions are
restrictions of base-chart transitions. The total space is Hausdorff, since
points over different base points are separated downstairs, and points in
one fibre lie in disjoint sheets. The lifted atlas also makes every deck
transformation smooth with smooth inverse. The cover exists because $B$ is
path connected, locally path connected and semilocally simply connected
([[thm-universal-cover-existence]]).

Using the isomorphism
$\pi_1(B,b_0)\cong\operatorname{Deck}(\widetilde B\to B)$
([[thm-deck-group-of-a-universal-cover-is-the-fundamental-group]]), take the deck identification defined by lifted endpoints starting at
$\tilde b_0$, and let
$\pi_1(B,b_0)$ act on the product $\widetilde B\times F$
([[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]])
diagonally by

$$\gamma\cdot(x,y):=\bigl(\gamma\cdot x,\ \rho(\gamma)(y)\bigr).$$

This is a **free and properly discontinuous action by diffeomorphisms**, so
that the quotient-foliation proposition applies in the form recorded below.
It is free: $\gamma\cdot(x,y)=(x,y)$ forces $\gamma x=x$ on the connected total
space $\widetilde B$, and a deck transformation fixing a point is the identity
([[prop-deck-transformations-are-determined-by-one-point-and-act-freely]]). It
is properly discontinuous: projections of compact sets are compact
([[thm-compactness-under-continuous-maps]]), and if a compact
$K\subseteq\widetilde B\times F$ meets $\gamma K$ then the compact projection
$C\subseteq\widetilde B$ of $K$ meets $\gamma C$, so it suffices to show that
$\{\gamma:\gamma C\cap C\neq\varnothing\}$ is finite for a compact
$C\subseteq\widetilde B$. Suppose $\gamma_1,\gamma_2,\dots$ are distinct with
points $x_n,\gamma_nx_n\in C$ for every $n$. The manifold $\widetilde B$ is
locally Euclidean, hence first countable, and a sequence in a compact
first-countable space has a convergent subsequence: the closed tails have the
finite intersection property, so they have a common point, and a nested
neighbourhood basis at that point produces the subsequence. Passing to
subsequences twice we may therefore assume $x_n\to x$ and
$\gamma_nx_n\to y$ with $x,y\in C$ ([[def-compact-space]]). Let $W$ be a connected
evenly covered coordinate neighbourhood of $p(x)$ and let $U$ be the sheet of
$p^{-1}(W)$ containing $x$
([[def-covering-map-and-evenly-covered-neighbourhoods]]); choose a connected
open neighbourhood $\Omega$ of $y$ with $p(\Omega)\subseteq W$ on which $p$ is
injective, which exists because $p$ is a local homeomorphism. For all large
$n$ one has $x_n\in U$ and $\gamma_nx_n\in\Omega$. Now $\gamma_n(U)$ is
connected with $p(\gamma_n(U))=p(U)=W$, so it is a sheet over $W$; and
$\Omega$ is connected with $p(\Omega)\subseteq W$, so $\Omega$ lies in a
single sheet over $W$, which must be $\gamma_n(U)$ because $\gamma_nx_n$ lies
in both. Hence $\gamma_n(U)$ is the same sheet $S$ over $W$ for all large $n$,
and $\gamma_n|_U=(p|_S)^{-1}\circ(p|_U)$ for all large $n$. Two deck
transformations of the connected cover $\widetilde B$ agreeing on the
nonempty open set $U$ are equal
([[prop-deck-transformations-are-determined-by-one-point-and-act-freely]]),
so $\gamma_m=\gamma_n$ for all large $m,n$, contradicting distinctness. Hence
only finitely many $\gamma$ meet $C$, and therefore only finitely many meet
$K$. The action is in particular a covering-space action
([[def-covering-space-action]],
[[lem-the-deck-group-of-a-covering-acts-by-a-covering-space-action]]).

The product foliation of $\widetilde B\times F$ by the leaves
$\widetilde B\times\{y\}$ ($y\in F$) is a regular foliation of codimension
$\dim F$, and it is invariant under the action, since
$\gamma\cdot(\widetilde B\times\{y\})=\widetilde B\times\{\rho(\gamma)y\}$.
By [[prop-quotient-foliation-under-a-free-proper-foliated-action]] the quotient
$M_\rho:=(\widetilde B\times F)/\pi_1(B,b_0)$ is therefore a smooth manifold,
the orbit map $\pi:\widetilde B\times F\to M_\rho$ is a covering map, and the
product foliation descends to a regular foliation $F_\rho$ of $M_\rho$ of
codimension $\dim F$. This foliation is the **suspension foliation** of the
representation $\rho$.
