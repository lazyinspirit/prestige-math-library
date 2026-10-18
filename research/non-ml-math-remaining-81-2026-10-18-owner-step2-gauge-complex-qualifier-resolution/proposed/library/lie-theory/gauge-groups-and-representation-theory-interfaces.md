---
page: gauge-groups-and-representation-theory-interfaces
title: "Gauge Groups and Representation-Theoretic Interfaces"
status: draft
items:
  - def-smooth-principal-g-bundle
  - def-principal-connection-and-vertical-curvature
  - def-gauge-group-of-a-smooth-principal-bundle
  - prop-gauge-transformations-act-on-principal-connections
  - prop-gauge-transformations-induce-associated-bundle-automorphisms
examples: []
---

This page separates the finite-dimensional structure group $G$, its Lie
algebra $\mathfrak g=T_eG$, a principal $G$-bundle $P\to M$, its principal
connection/curvature, and the gauge group $\mathcal G(P)$ of automorphisms
over the identity of $M$. The local connection items use horizontal
distributions and vertical-valued curvature; the gauge-action result proves
how these objects transform. No physical gauge postulate or path-integral
claim is a premise.

Companion: [[gauge-groups-and-representation-theory-interfaces-examples]].

## Global groups and representation lattices

The Lie algebra is the tangent space at the identity with its supplied bracket
([[def-lie-bracket-on-the-tangent-space-of-a-lie-group]]); that tangent-bracket
definition assumes $\mathrm{AC}_\omega$. The group $G$ also has global
topology and multiplication. Those data are not interchangeable:
[[cex-the-circle-and-line-have-isomorphic-one-dimensional-lie-algebras-but-are-not-isomorphic-lie-groups]]
compares $(\mathbb R,+)$ and $S^1$. Under countable choice,
[[thm-connected-lie-groups-are-central-quotients-of-their-simply-connected-integrations]]
states that every connected real Lie group is a discrete central quotient of
its simply connected cover; the countable-choice hypothesis is part of that
statement.

For a simply connected compact semisimple group with root lattice $Q$ and
weight lattice $P$, the Axiom of Choice version of
[[prop-central-quotients-correspond-to-intermediate-character-lattices]]
identifies its central quotients with intermediate character lattices
$Q\subseteq X\subseteq P$. Assuming AC and fixing a maximal torus $T$ and a
positive system, the highest-weight classification for a compact connected
group labels its finite-dimensional continuous irreducible complex representations
by dominant characters in the actual $X^*(T)$
([[thm-highest-weight-classification-for-a-compact-connected-lie-group]]).
The comparison with the complexified derived Lie algebra and descent along a
finite central cover, whose kernel must act trivially, is given under those
same assumptions by
[[prop-differentiation-relates-compact-group-and-complexified-lie-algebra-highest-weights]].
Thus the full weight lattice of the simply connected form does not label
representations of every central quotient; the $SU(2)\to SO(3)$ example in
[[cex-the-full-weight-lattice-does-not-integrate-to-every-central-quotient-group]]
records the odd-weight obstruction. These existing results are reused with
their stated connectedness, compactness, semisimplicity, continuity, and axiom
hypotheses; they are not reproved here.

## Principal bundles and gauge action

The topological right-principal-bundle definition is
[[def-principal-g-bundle-and-associated-fiber-bundle]]. This page adds its
smooth local-triviality interface, then defines principal connections by
right-invariant horizontal complements and curvature as a vertical-valued
two-form. The gauge group is the group of smooth equivariant bundle
automorphisms covering $\operatorname{id}_M$, not the structure group $G$
and not its Lie algebra. Pushforward gives its action on connections and
transports curvature. For every smooth finite-dimensional representation
$\rho:G\to\operatorname{GL}(V)$, a gauge transformation also induces an
automorphism of $P\times_\rho V$ and a linear action on its smooth sections.
The smooth tangent-bundle convention used for principal connections carries
the declared $\mathrm{AC}_\omega$ assumption; the gauge group and associated
representation maps themselves are choice-free.

For comparison, the library's connection on a smooth vector bundle and its
curvature are defined separately in
[[def-connection-on-a-smooth-vector-bundle]] and
[[def-curvature-of-a-vector-bundle-connection]]. The earlier
[[ex-gauge-transformation-of-a-connection-one-form]] is a line-bundle frame
calculation; this page adds the principal-bundle automorphism group and its
action without conflating those connection conventions.

## Reading route

The planned prerequisites are
[[algebraic-representation-and-tensor-symmetry-map]] and
[[real-forms-and-real-semisimple-lie-algebras]]. Their page edges organize the
reading path; each local item's logical dependencies name the exact results it
uses. The real-forms page concerns real Lie algebras and does not state a
physical gauge assumption.
