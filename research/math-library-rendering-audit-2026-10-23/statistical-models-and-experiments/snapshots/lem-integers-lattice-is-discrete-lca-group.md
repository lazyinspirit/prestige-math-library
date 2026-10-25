---
id: lem-integers-lattice-is-discrete-lca-group
kind: lemma
title: "The integer lattice is a discrete locally compact abelian group"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - thm-int-comm-ring
  - def-group
  - def-standard-topologies
  - def-product-topology
  - def-continuous-map-top
  - def-topological-group
  - def-hausdorff-space
  - def-compact-space
  - def-locally-compact-space
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Oxford Mathematical Institute, Harmonic Analysis lecture notes, characters of Z^d, Section 2.1, pp. 17–18"
      url: "https://www.maths.ox.ac.uk/system/files/media/HarmAnLectureNotes.pdf"
---

## Statement

For every integer $d\ge1$, equip $\mathbb Z^d$ with coordinatewise addition and
its discrete topology. Then it is a locally compact Hausdorff abelian
(topological) group. Every function from this discrete space to a topological
space is continuous.

## Facts & Assumptions

**Given:** An integer $d\ge1$, coordinatewise addition on $\mathbb Z^d$, and
the discrete topology.

[F1] [[thm-int-comm-ring]] and [[def-group]]: addition on $\mathbb Z$ is an
abelian group operation; in coordinates, the same associativity,
commutativity, zero, and inverse laws hold on $\mathbb Z^d$.

[F2] [[def-standard-topologies]]: in the discrete topology every subset is
open.

[F3] [[def-product-topology]]: products have the product topology, whose basic
open sets restrict coordinates by open subsets.

[F4] [[def-continuous-map-top]]: a map is continuous when its open-set
preimages are open.

[F5] [[def-topological-group]]: a group with a topology is a topological group
when multiplication and inversion are continuous.

[F6] [[def-hausdorff-space]]: distinct points must have disjoint open
neighbourhoods to be Hausdorff.

[F7] [[def-compact-space]]: every finite topological space, in particular a
singleton, is compact.

[F8] [[def-locally-compact-space]]: a space is locally compact when each point
has a compact neighbourhood.

## Proof

**Proof technique:** verify the algebraic and topological properties directly.

1.1 The additive group of $\mathbb Z$ is abelian by [F1]. Coordinatewise addition on $\mathbb Z^d$ is associative and commutative, has the zero vector as identity, and sends $x$ to $-x$ coordinatewise as its inverse. Hence $\mathbb Z^d$ is an abelian group. [F1, given, algebra]

1.2 For distinct $x,y\in\mathbb Z^d$, the singleton sets $\{x\}$ and $\{y\}$ are disjoint open neighbourhoods by [F2], so the space is Hausdorff by [F6]. Each singleton $\{x\}$ is finite and hence compact by [F7]; it is an open neighbourhood of $x$ by [F2]. Thus the space is locally compact by [F8]. [F2, F6, F7, F8, given]

2.1 The product topology on $\mathbb Z^d\times\mathbb Z^d$ is discrete: for each pair $(x,y)$, the basic open set $\{x\}\times\{y\}$ is its singleton by [F2, F3]. Therefore coordinatewise addition $\mathbb Z^d\times\mathbb Z^d\to\mathbb Z^d$ and inversion $\mathbb Z^d\to\mathbb Z^d$ are continuous by [F4]. By [F5] the group is a topological group, and with step 1.2 it is locally compact Hausdorff abelian. Every map from $\mathbb Z^d$ is continuous by [F2, F4]. [F2, F3, F4, F5, step 1.1, step 1.2, given] ∎