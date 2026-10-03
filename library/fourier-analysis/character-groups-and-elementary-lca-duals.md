---
page: character-groups-and-elementary-lca-duals
title: "Character Groups and Elementary LCA Duals"
status: draft
items: [lem-unit-circle-is-a-compact-metrizable-topological-group,
        lem-compact-open-topology-on-a-discrete-domain-is-pointwise,
        lem-circle-neighbourhood-arc-contains-no-nontrivial-subgroup,
        lem-continuous-characters-of-the-real-line-are-exponentials,
        def-pontryagin-dual-and-compact-open-topology,
        lem-compact-open-character-group-operations-are-continuous,
        lem-character-evaluation-pairing-is-jointly-continuous,
        lem-pointwise-limits-of-characters-are-characters,
        lem-dual-homomorphisms-are-continuous-and-functorial,
        lem-dual-identity-neighbourhood-is-compact,
        thm-dual-of-an-lca-group-is-locally-compact-abelian,
        thm-compact-groups-have-discrete-duals-and-discrete-groups-have-compact-duals,
        lem-duals-of-finite-products-and-discrete-direct-sums]
examples: []
---

This page builds the character group of an abelian topological group with the
compact-open topology and proves the elementary properties of the Pontryagin
dual that do not require inversion theory: the dual is a Hausdorff topological
abelian group, evaluation is jointly continuous for locally compact Hausdorff
domains, pointwise limits preserve homomorphisms and preserve continuous
characters along equicontinuous families, duals of finite products and of discrete direct sums are
computed, and the two one-way implications between compactness and discreteness
are proved. Characters take values in the multiplicative unit circle
$\mathbb T=\{z\in\mathbb C:|z|=1\}$, which is identified with the published
circle $\mathbb R/\mathbb Z$ by an explicit topological group isomorphism; the
dual is written multiplicatively and groups are written additively.

The local prerequisites are proved on this page rather than cited from outside
it: the unit circle is a compact metrizable topological abelian group; on a
discrete domain the compact-open topology is the topology of pointwise
convergence; the arc $\{|z-1|<1\}$ contains no nontrivial subgroup; continuous
characters of the real line are exactly the exponentials
$t\mapsto\exp(2\pi i\xi t)$; and pointwise limits along equicontinuous families
of characters are characters. The compact-open neighbourhood $N=\{\gamma:
\gamma(K)\subseteq\{|z-1|\le1/2\}\}$ of the identity is equicontinuous and
compact, which yields local compactness of the dual of a locally compact
abelian group by Ascoli's sufficiency theorem; the Axiom of Choice is used
exactly there, in Tychonoff's theorem, and in the compact-lift theorem behind
the annihilator computation, and is declared on the items that use it.

The dual homomorphism lemma states continuity of pullback along an arbitrary
continuous homomorphism and, for a closed subgroup of a locally compact
abelian group, identifies the dual of the quotient with the annihilator. The
two compact/discrete implications are deliberately one-way, and the direct-sum
statement is made only for the discrete topology on an algebraic direct sum:
it explicitly disclaims the subspace topology of a product of non-discrete
factors. The companion page collects the four elementary dual computations
(finite cyclic groups, the circle, the integers, and Euclidean space).
