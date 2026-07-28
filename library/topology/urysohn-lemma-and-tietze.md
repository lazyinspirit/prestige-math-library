---
page: urysohn-lemma-and-tietze
title: "Urysohn's Lemma and the Tietze Extension Theorem"
status: draft
items: [def-the-dyadic-rationals-of-the-unit-interval,
        lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function,
        thm-urysohn-lemma, cor-urysohns-lemma-closes-the-separation-chain,
        lem-a-uniformly-approximable-real-valued-map-is-continuous,
        thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set,
        thm-tietze-extension-theorem, cor-tietze-for-unbounded-and-open-interval-valued-maps,
        thm-a-locally-compact-hausdorff-space-is-completely-regular,
        cor-a-compact-hausdorff-space-is-tychonoff,
        rem-the-choice-cost-of-urysohns-lemma-and-of-tietzes-theorem]
examples: [fs-every-normal-space-is-completely-regular,
           fs-a-continuous-real-function-on-any-subspace-of-a-normal-space-extends]
---

**Objective.** Urysohn's lemma separates two disjoint closed sets of a normal
space by a continuous real-valued function; Tietze's extension theorem
extends a continuous function on a closed subspace of a normal space to the
whole space. This page proves both, under the Axiom of Dependent Choice, and
develops the mechanism each proof shares: a family of open sets indexed by the
dyadic rationals of $[0,1]$, nested by closure, defines the separating or
extending function as an infimum.

**The mechanism.** [[def-the-dyadic-rationals-of-the-unit-interval]] fixes the
dyadic rationals of $[0,1]$ level by level and proves their density.
[[lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function]] shows,
without any choice principle, that a family of open sets indexed by those
dyadics with closures nested inside the next member defines a continuous map
into $[0,1]$; every choice-consuming step of the page happens earlier, in
building such a family, never in this lemma.

**Urysohn's lemma and its converse.** [[thm-urysohn-lemma]] builds a nested
dyadic family by dependent choice and proves that a normal space's disjoint
closed sets are separated by a continuous function into $[0,1]$; it also
proves the converse, that a space with this separation property is normal,
with no choice principle. [[cor-urysohns-lemma-closes-the-separation-chain]]
applies the lemma to a point and a closed set in a normal $T_1$ space,
supplying the arrow $T_4 \Rightarrow T_{3\frac12}$ and assembling it with the
implications already proved elsewhere into the full classical separation
chain.

**Tietze's extension theorem.** [[lem-a-uniformly-approximable-real-valued-map-is-continuous]]
proves that a real-valued function approximable to any tolerance by a
continuous function is itself continuous, and in particular that a series of
continuous functions dominated termwise by a convergent series of constants
has a continuous sum. [[thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set]]
combines this with Urysohn's lemma to characterise perfect normality: a
normal space is perfectly normal exactly when every closed set is the zero
set of a continuous function. [[thm-tietze-extension-theorem]] combines it
with a geometrically decaying series of Urysohn functions to extend a
continuous map on a closed subspace into $[a,b]$, and proves the converse:
the extension property characterises normality.
[[cor-tietze-for-unbounded-and-open-interval-valued-maps]] widens the target
from a closed bounded interval to $\mathbb{R}$ and to an open interval,
composing the bounded case with an explicit homeomorphism.

**Compactness and complete regularity.** [[thm-a-locally-compact-hausdorff-space-is-completely-regular]]
applies Urysohn's lemma inside the one-point compactification of a locally
compact Hausdorff space to show it is completely regular, hence Tychonoff.
[[cor-a-compact-hausdorff-space-is-tychonoff]] records the compact Hausdorff
case directly, together with Urysohn separation for its own disjoint closed
sets.

**Choice cost.** [[rem-the-choice-cost-of-urysohns-lemma-and-of-tietzes-theorem]]
accounts for where each theorem on this page spends dependent choice, where
the perfect-normality theorem separately performs a step shaped like
countable choice and discharges it as an instance of dependent choice, and
which results — the dyadic-scale lemma, the $M$-test, and the metric case of
every theorem here — use no choice principle at all.

**False statements** mark the boundary of what normality alone supplies.
[[fs-every-normal-space-is-completely-regular]] refutes normality without
$T_1$ implying complete regularity, using Sierpinski space.
[[fs-a-continuous-real-function-on-any-subspace-of-a-normal-space-extends]]
refutes the extension property for a subspace that is not closed, using the
reciprocal function on $(0,1]$.
