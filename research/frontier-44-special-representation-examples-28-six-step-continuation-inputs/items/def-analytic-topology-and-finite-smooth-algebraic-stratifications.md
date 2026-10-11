---
id: def-analytic-topology-and-finite-smooth-algebraic-stratifications
kind: definition
title: "Analytic topology and finite smooth algebraic stratifications of complex varieties"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 0
deps: [def-classical-algebraic-prevariety-regular-maps-and-varieties,
       def-morphism-locally-ringed-spaces, def-topological-space,
       def-subspace-topology-top, def-metric-topology, lem-metrics-on-rn,
       def-complex-numbers-and-arithmetic,
       rem-complex-euclidean-space-dictionary,
       def-embedding-dimension-and-regular-local-ring,
       lem-algebra-of-continuous-real-maps-on-a-space,
       thm-componentwise-limits-and-continuity, def-connected-space,
       def-interior-closure-boundary-top, def-constructible-subset-variety,
       def-continuous-map-top]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Mark Goresky, Lecture Notes on Sheaves and Perverse Sheaves, version of June 26, 2026"
      url: "https://www.math.ias.edu/~goresky/pdf/all2.pdf"
      locator: "8.1-8.2 (stratifications and the frontier axiom), 1(d) (locally constant sheaves), 9.1-9.2 (constructible sheaves and the bounded constructible derived category)"
---

## Definition

Let $X$ be a classical algebraic variety over $\mathbb C$ in the sense of
[[def-classical-algebraic-prevariety-regular-maps-and-varieties]]: a separated
quasi-compact locally ringed space over $\mathbb C$ with a finite cover by
affine models $Z\subseteq\mathbb C^n$, the morphisms being the regular maps,
i.e. the morphisms of locally ringed spaces over $\mathbb C$
([[def-morphism-locally-ringed-spaces]]).

(a) **Analytic topology.** An affine model $Z\subseteq\mathbb C^n$ carries the
subspace topology of the Euclidean topology of $\mathbb C^n$
([[lem-metrics-on-rn]], [[def-metric-topology]],
[[rem-complex-euclidean-space-dictionary]],
[[def-complex-numbers-and-arithmetic]]). If $Z_1,Z_2\subseteq X$ are affine
models and $\varphi:Z_1\to Z_2$ is the structure-sheaf isomorphism, then on
$Z_1\cap Z_2$ the maps $\varphi$ and $\varphi^{-1}$ are given locally by
polynomial quotient functions
([[def-classical-algebraic-prevariety-regular-maps-and-varieties]]) and are
therefore continuous for the Euclidean topologies: polynomial functions are
continuous, and a quotient is continuous wherever its denominator does not
vanish ([[lem-algebra-of-continuous-real-maps-on-a-space]],
[[thm-componentwise-limits-and-continuity]]). Hence the topologies transported
from the two affine models agree on the overlap, so the affine-model topologies
glue to a unique topology on the underlying set of $X$
([[def-topological-space]], [[def-subspace-topology-top]]): the **analytic
topology** of $X$. Every regular map of complex classical varieties is
continuous for the analytic topologies, by the same local description
([[def-continuous-map-top]]), and the analytic topology refines the Zariski
topology because polynomial zero sets are Euclidean closed. Whenever a complex
algebraic variety is used as a topological space below it carries the analytic
topology, and each subvariety carries the subspace topology.

(b) **Smooth points.** Let $S$ be a classical variety over $\mathbb C$ and let
$x\in S$. The point $x$ is a **smooth point of $S$** if its algebraic local ring
$\mathcal O_{S,x}$ is a regular local ring: a nonzero Noetherian local ring
whose maximal ideal $\mathfrak m_x$ satisfies
$\dim_{\mathbb C}(\mathfrak m_x/\mathfrak m_x^2)=\dim\mathcal O_{S,x}$
([[def-embedding-dimension-and-regular-local-ring]]). The residue field at a
classical complex point is $\mathbb C$. The variety $S$ is **smooth** if every
point is smooth. This intrinsic algebraic condition does not require a Zariski
neighbourhood to be algebraically isomorphic to an open subset of affine space.

(c) **Finite smooth algebraic stratifications.** A **finite smooth algebraic
stratification with the frontier condition** of $X$ is a finite decomposition
$X=\coprod_{\alpha\in A}S_\alpha$ into pairwise disjoint nonempty connected
locally closed subsets $S_\alpha\subseteq X$ — the **strata** — such that each
$S_\alpha$, with its reduced induced algebraic structure, is a smooth algebraic
subvariety of $X$; and such that for every $\alpha$ the closure
$\overline{S_\alpha}$ of $S_\alpha$ in $X$ is a union of strata. The latter is
the **frontier condition**: the frontier
$\overline{S_\alpha}\setminus S_\alpha$ of every stratum is a union of strata
([[def-connected-space]], [[def-interior-closure-boundary-top]]).

**The induced structure is the polynomial-quotient function sheaf, not a
restriction of $\mathcal O_X$.** A locally closed $S\subseteq X$ is, locally
inside an affine model $Z\subseteq\mathbb C^n$, the set of points with $h\neq0$
and $f_1=\dots=f_r=0$ for polynomials $h,f_1,\dots,f_r$ on $Z$
([[def-constructible-subset-variety]],
[[def-classical-algebraic-prevariety-regular-maps-and-varieties]]); the map
$z\mapsto(z,1/h(z))$ identifies it with the affine model
$\{(z,t):th(z)=1,\ f_1(z)=\dots=f_r(z)=0\}\subseteq\mathbb C^{n+1}$, and its
**reduced induced structure sheaf** is the one transported along this
identification: locally functions of the form $a/b$ with $b$ nonvanishing on the
set. The ambient restriction $\mathcal O_X|_S$ is not used, since already at the
origin of the affine line the ambient stalk is the local ring of the line while
the stalk of the reduced point is $\mathbb C$. An open subset of an affine model
is a union of principal open subsets, and each principal open subset is again an
affine model, so every locally closed subvariety of $X$ is a classical variety
for the induced structure sheaf. No existence theorem for stratifications, no
common-refinement theorem and no choice principle is asserted: nothing is
selected, and all cited suppliers are choice-free.
