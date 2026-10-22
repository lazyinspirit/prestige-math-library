---
id: def-nrqmx-planar-two-particle-configuration-space
kind: definition
domain: mathematics
library: mathematics
title: "The collision-free unordered configuration space of two planar points"
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 0
deps:
  - def-topological-space
  - def-subspace-topology-top
  - def-quotient-topology
dependency_roles:
  def-topological-space: mathematical-premise
  def-subspace-topology-top: mathematical-premise
  def-quotient-topology: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation, §II.A.1"
      url: "https://arxiv.org/pdf/0707.1889"
---

## Definition

Give $\mathbb R^4$ its Euclidean topology, whose basic open sets are the
Euclidean open balls, and write a point as an ordered pair $(x,y)$ with
$x,y\in\mathbb R^2$. The **ordered configuration space** is the subspace
$$F_2(\mathbb R^2):=\{(x,y)\in\mathbb R^2\times\mathbb R^2:x\ne y\}$$
with the subspace topology. The transposition acts by $(x,y)\mapsto(y,x)$.
The **unordered configuration space of two distinct planar points** is
$$C_2(\mathbb R^2):=F_2(\mathbb R^2)/\bigl((x,y)\sim(y,x)\bigr)$$
with the quotient topology of the canonical projection
$q:F_2(\mathbb R^2)\to C_2(\mathbb R^2)$. We write its points as unordered
sets $\{x,y\}$; equality in this set means equality up to transposition.
The diagonal $x=y$ is excluded, so collisions are not points of this space.

The topology on each finite Cartesian coordinate space used below is its
Euclidean topology; on a finite product it is equivalently the topology with
basis the products of open sets in the factors.

## Definition references

[[def-topological-space]]

[[def-subspace-topology-top]]

[[def-quotient-topology]]

## Remarks

This is a mathematical configuration space. Its definition alone makes no
claim about a physical particle species, exchange statistics, or a realized
holonomy.
