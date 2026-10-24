---
page: coxeter-artin-and-hecke-interfaces-examples
title: "Coxeter, Artin, and Hecke Interfaces — Examples"
status: published
requires: [coxeter-artin-and-hecke-interfaces]
items: [ex-cg-type-a-artin-projection-and-positive-lifts,
        cex-cg-artin-positive-lift-is-not-a-homomorphism,
        ex-cg-quadratic-hecke-normalizations-s-equals-q-t,
        cex-cg-faithful-canonical-realization-need-not-be-reflection-faithful]
examples: []
---

This companion is a dependency leaf: its entries test the constructions of
[[coxeter-artin-and-hecke-interfaces]] and use only that page's prerequisite
closure.

For the standard type-$A_{n-1}$ system the examples run the whole
presentation-level dictionary. Composing the type-$A$ isomorphism $W\cong S_n$
with the projection of the Artin group produces the surjection
$\pi_n:G_n\to S_n$ with $\pi_n(\sigma_i)=(i\ i+1)$; the same assignment on the
monoid of positive words gives a negative-free section $w\mapsto b_w$ which is
injective and satisfies $\pi^{+}_n(b_w)=w$. Two explicit computations exhibit
the mechanism: for $n\ge3$, the length-additive pair $s_1,s_2$ satisfies
$b_{s_1}b_{s_2}=b_{s_1s_2}$, while the longest element of $S_3$ shows the
independence of the lift from the chosen reduced expression through the braid
move. Because the two presentations coincide word for word, the positive Artin
monoid is identified with the published positive braid monoid by the universal
properties; no embedding into the group or geometric model is claimed.

The companion counterexample exhibits the converse boundary of the length
criterion: for a single generator the element $b_{s^{2}}=b_1$ is the empty-word
class, while $b_sb_s=[ss]$ is distinguished by the class length, so the positive
lift is not a monoid homomorphism and its composite with $\gamma$ is not a group
homomorphism. The precise dropped hypothesis is length additivity.

On the Hecke side the examples compare the quadratic normalizations
$S=qT$ with $Q=q^{2}$, the opposite-sign form and the Soergel-calculus form, and
record the rank-one Kazhdan–Lusztig conversion, so that coefficients are
compared only after the substitution; no canonical basis or positivity
statement is constructed. The final counterexample isolates the
reflection-faithfulness boundary: in the rank-two system $m(s,t)=\infty$ (the
$\tilde A_1$ diagram) the canonical representation is faithful, yet its one-dimensional
radical is the only full fixed space of codimension one of an element of $W$, so the two simple
reflections share a fixed hyperplane and the realization is not reflection
faithful; arguments assuming reflection faithfulness must supply a
realization satisfying that hypothesis separately.
