---
page: operator-algebraic-states-and-gns-representations
title: "Operator-Algebraic States and GNS Representations"
status: draft
requires:
  - algebraic-representation-and-tensor-symmetry-map
  - group-c-star-algebras-and-the-fell-unitary-dual
items:
  - lem-matrix-algebra-is-a-c-star-algebra
examples: []
---

This page routes C*-algebra states and GNS representations to the existing
general results and supplies the finite-matrix C*-algebra fact used by the
worked examples. It introduces no new general GNS theorem.

## Reading prerequisite

The planned representation and tensor gateway is
[[algebraic-representation-and-tensor-symmetry-map]]. The group C*-algebra
prerequisite is [[group-c-star-algebras-and-the-fell-unitary-dual]].

## States on C*-algebras

For a complex C*-algebra $A$, a state is a bounded positive linear functional
of norm one ([[def-state-on-a-c-star-algebra]]). Under the Axiom of Choice,
[[lem-c-star-state-gns-purity-and-polish-state-space]] constructs its general
GNS representation: a nondegenerate bounded *-representation with a unit
cyclic vector, using the inner product linear in its first variable. The same
item proves uniqueness up to a unique pointed unitary. Its additional clauses
retain their stated hypotheses: purity is equivalent to irreducibility;
separability is assumed for the separable-Hilbert-space and Polish pure-state
conclusions; and the nonunital state-space clause uses norm-one restrictions
from the minimal unitization.

## Group-positive-type GNS

[[thm-gns-construction-for-topological-groups]] has a different input: a
topological group $G$ and a continuous positive-type function
$\varphi:G\to\mathbb C$. Under AC it constructs a strongly continuous unitary
group representation from that function. This theorem does not replace GNS
for a state on an arbitrary C*-algebra. The group C*-algebra route on
[[group-c-star-algebras-and-the-fell-unitary-dual]] retains its locally compact
group, Haar measure, and $L^1(G)$ hypotheses.

## Inner-product convention

The mathematical convention throughout this route is first-variable-linear.
The published QFT Fock convention in
[def-qft-fock-and-test-spaces](../../physics/items/def-qft-fock-and-test-spaces.md)
is second-variable-linear, with $\langle u,v\rangle_2=(v,u)_1$. When comparing
the GNS coefficient, translate
$$\langle\pi(a)\xi,\xi\rangle_1=\langle\xi,\pi(a)\xi\rangle_2.$$
The matrix examples on the companion page use the mathematical convention.
