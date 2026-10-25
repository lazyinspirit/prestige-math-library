---
page: classical-complex-algebraic-actions-and-affine-embeddings
title: "Classical Complex Algebraic Actions and Affine Embeddings"
status: published
requires: [classical-affine-varieties-coordinate-rings-morphisms-and-rational-maps-interface,
           dimension-constructible-images-and-dimensions-of-fibres]
items: [lem-classical-affine-algebraic-set-product-coordinate-ring,
        def-rational-action-on-affine-variety,
        prop-affine-algebraic-actions-coordinate-ring-coaction,
        lem-complex-affine-group-comodule-local-finiteness,
        thm-coordinate-ring-of-affine-action-is-locally-finite,
        lem-torus-rational-modules-and-gradings,
        thm-affine-algebraic-action-embeds-equivariantly-in-finite-dimensional-module]
examples: []
---

This page develops the classical complex theory of algebraic group actions on
affine algebraic sets and the finite-dimensional linear models of those
actions. A complex affine algebraic group is a nonempty affine algebraic set
whose multiplication and inversion are morphisms; its coordinate ring
$H=\mathbb C[G]$ then carries the Hopf maps $\Delta$, $\varepsilon$ and $S$
coming from the group law, and the product-of-sets interface
$\mathbb C[X]\otimes\mathbb C[Y]\cong\mathbb C[X\times Y]$ is proved first, for
possibly empty or reducible sets, to make those maps and all later tensor
identifications well defined. An algebraic left action is a morphism
$G\times X\to X$ satisfying the usual identity and associativity laws, and a
rational $G$-module is a complex vector space in which every vector lies in a
finite-dimensional stable subspace on which $G$ acts algebraically. The
function convention used throughout is the inverse pullback
$(r(g)f)(x)=f(g^{-1}x)$ with its equivalent right-comodule form, deliberately
separated from the direct-action pullback that evaluates to $f(gx)$.

The action/coaction dictionary is the bridge between geometry and algebra:
algebraic left actions on an affine algebraic set $X$ correspond bijectively
to unital algebra maps $\delta:\mathbb C[X]\to H\otimes\mathbb C[X]$ satisfying
$(\Delta\otimes\operatorname{id})\delta=(\operatorname{id}\otimes\delta)\delta$
and $(\varepsilon\otimes\operatorname{id})\delta=\operatorname{id}$, and
equivariant morphisms correspond to coaction-intertwining algebra maps. On the
comodule side, every finite subset of a right $H$-comodule lies in a
finite-dimensional subcomodule on which the evaluated action is algebraic, so
the coordinate ring of any algebraic affine action is a locally finite
rational $G$-module whose action preserves multiplication and the unit. No
irreducibility, connectedness or reductivity is assumed anywhere: the
arguments keep reducible and empty algebraic sets and disconnected groups.

For the torus $T=(\mathbb C^*)^r$ the theory becomes a lattice grading. Right
$H$-comodules, equivalently rational $T$-modules, correspond to direct-sum
gradings $V=\bigoplus_m V_m$ with $t\cdot v=t^mv$ on $V_m$, and intertwining
maps are exactly the degree-preserving linear maps; a coordinate-ring action
corresponds to an algebra grading with $1\in A_0$ and
$A_mA_n\subseteq A_{m+n}$, and conversely every such grading of a finitely
generated reduced complex algebra is realized by an affine algebraic
$T$-action. Function weights are opposite to point-coordinate weights:
$f(tx)=t^{-m}f(x)$ for $f$ of degree $m$, so $A_0$ consists of the invariant
functions.

The closing theorem embeds the whole action linearly: for any algebraic action
of a complex affine algebraic group $G$ on an affine algebraic set $X$ there
is a finite-dimensional rational submodule $W\subseteq\mathbb C[X]$
generating the coordinate ring such that evaluation
$\mathrm{ev}:X\to W^*$, $\mathrm{ev}(x)(w)=w(x)$, is an equivariant
isomorphism onto a closed invariant algebraic subset for the dual action
$(g\lambda)(w)=\lambda(g^{-1}w)$. This is an embedding of the acted-on set,
not a linearity statement about the group, which need not act faithfully.

The Axiom of Choice enters exactly through the published classical affine
Nullstellensatz route used by the morphism antiequivalence and by the
realization of graded algebras, and it is declared on the coaction
dictionary, the coordinate-ring local-finiteness theorem, the affine
realization clause of the torus dictionary, and the embedding theorem; the
product lemma, the group and action definitions, and the vector-space
comodule lemma are choice-free. The companion page computes the torus weights,
exhibits an abstract non-algebraic action, and works out the translation
action on the parabola.
