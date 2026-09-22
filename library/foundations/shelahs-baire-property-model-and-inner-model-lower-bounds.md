---
page: shelahs-baire-property-model-and-inner-model-lower-bounds
title: "Shelah's Baire-Property Model and Inner-Model Lower Bounds"
status: published
items: [def-shelah-sweetness-model, lem-shelah-sweet-forcings-are-sigma-directed-ccc, lem-shelah-sweet-density-transfer-along-complete-suborders, thm-shelah-sweet-amalgamation-preserves-sweetness, def-shelah-universal-meagre-forcing, lem-shelah-universal-meagre-forcing-absorbs-old-nowhere-dense-sets, thm-shelah-universal-meagre-composition-preserves-sweetness, lem-shelah-continuous-unions-of-sweetness-models, thm-shelah-sweet-partial-isomorphism-extension, thm-shelah-ch-omega-one-sweet-construction, lem-shelah-real-name-capture-and-coded-meagre-unions, lem-shelah-homogeneous-truth-has-baire-representatives, def-shelah-hereditarily-ordinal-sequence-definable-model, lem-shelah-inner-model-is-closed-under-ambient-omega-sequences, thm-shelah-inner-model-satisfies-zf-and-dependent-choice, thm-shelah-inner-model-all-sets-of-reals-have-baire-property, thm-baire-property-model-equiconsistent-with-zfc, def-boldface-sigma-one-three-measurability, def-rapid-and-raisonnier-filters, lem-raisonnier-family-is-a-sigma-one-three-filter, thm-rapid-filters-are-not-lebesgue-measurable, lem-measurable-null-code-orders-bound-constructible-null-unions, lem-uniform-null-g-delta-capture-functions, thm-raisonnier-filter-is-rapid-from-null-code-measurability, lem-noninaccessibility-in-l-produces-a-real-with-correct-omega-one, thm-sigma-one-three-measurability-implies-omega-one-inaccessible-in-l, thm-all-real-sets-measurable-gives-an-inaccessible-inner-model, thm-measurability-of-all-real-sets-equiconsistent-with-an-inaccessible, thm-shelah-baire-model-separates-baire-property-from-measurability]
examples: []
---

This pair runs two independent consistency arguments through one page. The
upper branch builds Shelah's model of the Baire property from ZFC alone; the
lower branch shows that universal Lebesgue measurability is equiconsistent with
an inaccessible cardinal. Both branches are stated with their exact choice
costs, and neither consumes a recorded result.

**Quotient convention used throughout.** Several items below write $q\in Q/P$
for a complete suborder $P$ of $BA(Q)$, following Shelah's Section 7.1: the
quotient $Q/P=\{q\in Q:q$ is compatible in $Q$ with every condition of the
generic filter on $P\}$ is a $P$-name of a forcing notion below $Q$, and
$p\Vdash q\in Q/P$ holds exactly when every $p'\in P$ with $p'\le p$ is
compatible with $q$ ([[def-forcing-preorder-compatibility-and-filter]]). Two
elementary consequences are used repeatedly: the assertion is upward closed in
$q$, and it is monotone in $p$, so $p'\Vdash q\in Q/P$ for every $p'\le p$ with
$p\Vdash q\in Q/P$ and $p'\Vdash q'\in Q/P$ for every $q'\in Q$ with $q\le q'$.
The convention enters in
[[lem-shelah-sweet-density-transfer-along-complete-suborders]],
[[thm-shelah-sweet-amalgamation-preserves-sweetness]] and
[[thm-shelah-universal-meagre-composition-preserves-sweetness]], and it is the
only sense in which the expression $Q/P$ is used on this page.

The upper branch starts from sweetness models for forcing: a dense set with
countably many classes per level, directed classes, sequential lower bounds and
the transfer clause, together with the extension relation between models. Sweet
forcings are countable unions of directed sets and hence ccc; Claim 7.4's
uniform density transfer and the amalgamation theorem build new conditions along
a complete suborder; universal-meagre forcing and, under AC, its two-step composition
preserve sweetness and absorb all old closed nowhere-dense sets into one coded
meagre envelope. Continuous countable unions, the partial-isomorphism extension
and a CH-length bookkeeping recursion then produce one ccc complete Boolean
algebra of size $\omega_1$ whose countably generated complete subalgebras are
homogeneous enough to turn generic truth about a countable ordinal sequence
into an open approximation modulo meagre error. The hereditary
ordinal-sequence-definable inner model $N=HOD(S)$ satisfies ZF+DC, has the same
reals and ordinals, and every set of reals in it has the Baire property;
Shelah's published conclusion gives the equiconsistency of ZFC and ZF+DC plus
universal Baire property with no inaccessible hypothesis. The full-extension
definable-Baire clause comes directly from the same source theorem, not by
transferring witnesses upward from $N$.

The lower branch works from RAISONNIER filters: rapid filters extending the
Fréchet filter are non-measurable by Mokobodzki's argument, the Raisonnier
family $F(x)$ is a $\Sigma^1_3(x)$ filter, and the $\Sigma^1_2(x)$ null-code
order together with Fubini makes the constructible null union null, which makes
$F(x)$ rapid. Hence boldface $\Sigma^1_3$ measurability forces the ambient
$\omega_1$ to be inaccessible in $L$; with the published Solovay Levy-collapse
construction this is exactly the consistency strength of an inaccessible, and
the separating model shows that universal Baire property does not imply
universal measurability. The equiconsistency statements separately calibrate
the sufficient hypotheses for the two constructions; they are not used to
assert an unproved nonimplication between bare consistency statements.
