---
page: character-groups-and-elementary-lca-duals-examples
title: "Character Groups and Elementary LCA Duals — Examples"
status: published
items: []
examples: [ex-pontryagin-dual-of-the-circle-is-the-integers,
           ex-pontryagin-dual-of-the-integers-is-the-circle,
           ex-pontryagin-dual-of-a-finite-cyclic-group,
           ex-pontryagin-dual-of-euclidean-space]
---

These computations exercise the character-group conventions of the companion
page: characters are continuous homomorphisms into the multiplicative unit
circle $\mathbb T$, the dual carries pointwise multiplication and the
compact-open topology, and groups are written additively.

The dual of the discrete group $\mathbb Z$ is the circle, by the canonical
isomorphism $z\mapsto(n\mapsto z^{n})$, which is proved to be an isomorphism of
topological groups with continuous inverse given by evaluation at $1$. The dual
of the circle is $\mathbb Z$: every continuous endomorphism of the circle is a
power map $z\mapsto z^{n}$ for a unique integer $n$, obtained by precomposing
with $t\mapsto\exp(2\pi it)$ from $\mathbb R$ and applying the classification
of continuous characters of the line; periodicity forces the frequency to be an integer,
and the correspondence is a homeomorphism because both sides are discrete.
For a finite cyclic group the dual is again the same group, computed for the
presented group $\mathbb Z/N\mathbb Z$ through the $N$-th roots of unity with
no choice of generator, and for Euclidean space the dual is Euclidean space,
with the duality $x\mapsto\exp(2\pi i\xi\cdot x)$ and the unique frequency
vector $\xi\in\mathbb R^{n}$. The circle example is recorded under the Axiom of
Countable Choice as scaffolded, although the proof given on the page is in fact
choice-free.
