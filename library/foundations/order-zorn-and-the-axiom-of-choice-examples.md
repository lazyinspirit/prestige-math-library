---
page: order-zorn-and-the-axiom-of-choice-examples
title: "Order, Zorn's Lemma, and the Axiom of Choice: Examples and Counterexamples"
status: draft
items: []
examples: [ex-finite-choice-by-induction, ex-canonical-choice-on-naturals,
           ex-russells-socks, ex-powerset-is-chain-complete,
           ex-zorn-poset-of-chains, cex-maximal-not-greatest,
           cex-zorn-hypothesis-fails, cex-progressive-map-without-fixed-point]
---

**Objective.** This page is the worked companion to
[[order-zorn-and-the-axiom-of-choice|Order, Zorn's Lemma, and the Axiom of Choice]].
Everything here is an example or a counterexample: the definitions and theorems
are proved there, and the purpose of this page is to make each of that page's
hypotheses visible by removing it and watching the conclusion fail.

The first three items draw the line the Axiom of Choice is there to cross. A
choice function for three sets is written out by listing its three values, and
the induction that proves the finite case is exactly that process stated in
general. A choice function for the nonempty subsets of $\mathbb{N}$ is written
out by a rule, $S \mapsto \min S$, even though the family is infinite: what makes
the choice free is the well-ordering, not the size. Russell's shoes and socks
then separates the two ingredients. From infinitely many pairs of shoes "take the
left one" is a rule and the choice function is a theorem of ZF; from infinitely
many pairs of socks nothing distinguishes a member, and the existence of a choice
function is the axiom itself. That last half is quoted, not proved: the
independence from ZF is established by forcing, or by a permutation model of set
theory with atoms together with a theorem transferring the conclusion to ZF, and
this library contains neither, and saying so is part of the point.

The next two items are the order theory that Zorn's lemma actually runs on. The
power set of any set is chain-complete, with union as supremum and $\emptyset$ at
the bottom, and the argument proves rather more, since it never uses that the
family is a chain. The chains of an arbitrary poset, ordered by inclusion, are
chain-complete too, but usually only just: as soon as $P$ has two incomparable
elements, an arbitrary union of chains need not be a chain, so that poset is not
a complete lattice, and chain-completeness is therefore the right hypothesis
rather than a weakened one. (The hedge is needed: if $P$ happens to be totally
ordered then every subset of $P$ is a chain, the poset of chains is all of
$\mathcal{P}(P)$, and it *is* a complete lattice.) That second poset is
the one Zorn's lemma builds inside its own proof, so the example is the engine of
the theorem, run on its own.

The three counterexamples remove one hypothesis each. A maximal element is not a
greatest element: in the three-element poset of proper subsets of $\{1,2\}$ there
are two maximal elements and no greatest one, which is the standard way to
misapply Zorn's lemma. The chain hypothesis of Zorn's lemma cannot be dropped:
$(\mathbb{N}, \le)$ is nonempty, totally ordered, well ordered and entirely
familiar, and it has no maximal element, because the chain $\mathbb{N}$ has no
upper bound. Chain-completeness cannot be dropped from Bourbaki-Witt either: on
the same $(\mathbb{N}, \le)$, the successor map is progressive, is even order
preserving, and has no fixed point at all. The last two are one defect seen at
two heights, a missing upper bound and a missing supremum, and adjoining a single
top element repairs both at once.
