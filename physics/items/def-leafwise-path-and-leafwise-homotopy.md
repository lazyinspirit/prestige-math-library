---
id: def-leafwise-path-and-leafwise-homotopy
kind: definition
title: "Leafwise paths and leafwise homotopy relative to endpoints"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 0
deps:
  - def-homotopy-relative-and-path-homotopy
  - def-leaf-of-a-regular-foliation
  - def-product-topology
  - lem-homotopy-reflexive-and-symmetric
  - lem-homotopy-transitivity-by-reparametrisation
  - thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds
  - thm-regular-foliations-and-integrable-distributions-correspond
  - def-second-countable-space
  - cor-interval-uncountable
  - def-countable-choice
  - thm-smooth-inverse-function-theorem-on-manifolds
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs)"
      url: "https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf"
    - title: "Eckhard Meinrenken, Lie Groupoids and Lie Algebroids, lecture notes (University of Toronto MAT1341, Fall 2017)"
      url: "https://www.math.toronto.edu/mein/teaching/MAT1341_LieGroupoids/Groupoids.pdf"
    - title: "Leiden NCG seminar, Noncommutative Geometry of Foliations (2023 seminar notes)"
      url: "https://ncg-leiden.github.io/foliation2023/foliation_notes.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Let $F$ be a regular foliation of a smooth manifold $M$ with its leaves
([[def-leaf-of-a-regular-foliation]]). A **leafwise path** for $F$ is a
continuous map $a:[0,1]\to M$ whose image is contained in a single leaf of $F$.
Thus a leafwise path from $x$ to $y$ has both endpoints in one leaf, and continuity is required in the topology of $M$.

A **leafwise homotopy relative to endpoints** between leafwise paths $a,b$ with
the same endpoints $x,y$ is a continuous map
$H:[0,1]\times[0,1]\to M$ on the product space ([[def-product-topology]]) with

$$H(0,t)=a(t),\qquad H(1,t)=b(t),\qquad H(s,0)=x,\qquad H(s,1)=y$$

for all $s,t\in[0,1]$, such that $t\mapsto H(s,t)$ is a leafwise path for every
$s$. This is a path homotopy relative to the endpoints in the sense of
[[def-homotopy-relative-and-path-homotopy]] carrying one extra condition: every
time slice lies in a single leaf. Leafwise paths $a,b$ are **leafwise homotopic
relative to endpoints**, written $a\simeq b$, when such an $H$ exists.

**Leafwise homotopy relative to endpoints is an equivalence relation** on
leafwise paths with fixed endpoints. Reflexivity and symmetry are
[[lem-homotopy-reflexive-and-symmetric]] applied to the constant and reversed
deformations, which keep every time slice leafwise when the original map does;
transitivity is the concatenation of homotopies supplied by
[[lem-homotopy-transitivity-by-reparametrisation]], whose piecewise-linear
reparametrisation again keeps every time slice leafwise. Two leafwise paths are
**homotopic relative to endpoints** when they are equivalent in this relation.

## Leaf topology under Countable Choice

Under $\mathrm{AC}_\omega$ ([[def-countable-choice]]), every continuous map
from a locally connected space into $M$ whose image lies in one leaf is
continuous into that leaf's intrinsic manifold topology. Here is the needed
local argument. The leaf $L$ is a second-countable injectively immersed
manifold with plaque charts
([[thm-regular-foliations-and-integrable-distributions-correspond]],
[[thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds]]).
In any foliation chart $U$ its distinct plaques in $L$ are disjoint nonempty
open subsets of $L$: plaque inclusions and intrinsic leaf charts are locally
diffeomorphic since their tangent images both equal $TF$ and the smooth inverse function
theorem applies ([[thm-smooth-inverse-function-theorem-on-manifolds]]). An enumerated basis
of $L$ ([[def-second-countable-space]]) assigns to each such plaque the least
index of a nonempty basic open set contained in it, so there are at most
countably many plaques and at most countably many transverse coordinate values.
If $f:C\to U\cap L$ is continuous and $C$ is connected, every transverse
coordinate of $f$ is constant: two distinct values would force all intermediate
values by connectedness (otherwise the two open half-lines at a missing value
separate $C$), contradicting [[cor-interval-uncountable]]. The connected image
then lies in one connected component of that level set, hence in one plaque.
For a general locally connected domain, take connected open neighborhoods
inside $f^{-1}(U)$. On each such neighborhood $f$ maps continuously into the
embedded plaque, whose topology is its intrinsic leaf-chart topology. This
proves the assertion. It applies to intervals and squares, so the paths and
homotopies above agree with intrinsic leaf paths and homotopies; in particular
$\pi_1(L,x)$ uses the intrinsic leaf topology.
