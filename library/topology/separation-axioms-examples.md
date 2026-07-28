---
page: separation-axioms-examples
title: "Separation Axioms: the Hierarchy: Examples and Counterexamples"
status: published
items: []
examples: [ex-sierpinski-space-is-t0-normal-and-not-regular,
           ex-the-particular-point-topology-in-the-separation-hierarchy,
           ex-the-cofinite-topology-in-the-separation-hierarchy,
           ex-the-cocountable-topology-in-the-separation-hierarchy,
           ex-the-discrete-and-indiscrete-extremes-of-the-hierarchy,
           ex-closed-subsets-of-the-line-as-zero-sets-and-g-delta-sets,
           ex-the-ordinal-spaces-omega-plus-one-and-omega-one,
           cex-the-deleted-tychonoff-plank-is-not-normal]
---

**Objective.** This page is the worked companion to Separation Axioms: the
Hierarchy, linked under Prerequisites above. That page defines the axioms and
proves the implications between them; this one places concrete spaces in the
hierarchy. Seven examples locate a space each, and one counterexample supplies a
Hausdorff space that is not normal. Every witness is built from the standard
topologies of [[def-standard-topologies]], from the usual topology of
$\mathbb{R}$, or from the ordinal spaces the main page mints, so nothing here
rests on a construction that is not already available.

**The bottom two rungs, and why the adjectives carry no information about
points.** [[ex-sierpinski-space-is-t0-normal-and-not-regular]] takes the
two-point space $\{a,b\}$ with open sets $\varnothing$, $\{b\}$ and the whole
set: it is $T_0$, it is normal because no two disjoint closed sets are both
nonempty, and it is neither $T_1$ nor regular, the only open set containing the
closed point being the whole space. So normality without $T_1$ places a space
nowhere.
[[ex-the-particular-point-topology-in-the-separation-hierarchy]] generalises the
picture and separates two failures by size: the particular-point topology is
always $T_0$, it is not $T_1$ and not regular as soon as the set has two points,
and it is not normal as soon as the set has three. The two-point case is
Sierpinski space, which *is* normal, so the extra point in the last clause is
not slack.

**A $T_1$ space that fails everything above.**
[[ex-the-cofinite-topology-in-the-separation-hierarchy]] shows that on an
infinite set the cofinite topology is $T_1$ and that no two nonempty open sets
are disjoint, from which the failure of the Hausdorff, regularity and normality
conditions all follow at once. This is the coarsest $T_1$ topology on a set, so
it is the first place to look for such a witness.
[[ex-the-cocountable-topology-in-the-separation-hierarchy]] does the same on
$\mathbb{R}$ with the at most countable sets as the closed sets, and adds the
feature that makes it interesting: a convergent sequence there is eventually
constant, so limits are unique although the space is not Hausdorff. That is the
worked form of the main page's
[[fs-unique-sequential-limits-imply-hausdorff]].

**The two extremes.**
[[ex-the-discrete-and-indiscrete-extremes-of-the-hierarchy]] verifies directly
that a discrete space satisfies every axiom on the main page, and that the
indiscrete topology on two points is regular, completely regular, normal,
completely normal and perfectly normal while failing $T_0$. The second half is
the convention point made concrete: all five unnumbered adjectives
together are compatible with a space that distinguishes no pair of its points,
and that is precisely what the numerals $T_3$ to $T_6$ add.

**The metric case, made explicit on the line.**
[[ex-closed-subsets-of-the-line-as-zero-sets-and-g-delta-sets]] specialises the
main page's metric theorem to $\mathbb{R}$: a nonempty closed $A$ is the zero set
of $x \mapsto d(x,A)$ and equals $\bigcap_n \{x : d(x,A) < 1/(n+1)\}$, worked out
for $[0,1]$, where the intersection is of the intervals
$(-1/(n+1),\ 1 + 1/(n+1))$, and for $\{0\}$, where it is the standard
presentation of a point as a $G_\delta$. The converse is false, $(0,1)$ being a
$G_\delta$ that is not closed.

**Ordinal spaces, and the sequence that cannot climb.**
[[ex-the-ordinal-spaces-omega-plus-one-and-omega-one]] identifies $\omega + 1$ as
a convergent sequence together with its limit — every natural number is isolated
and the sequence $x_k = k$ converges to $\omega$ and to nothing else — and then
shows, assuming countable choice, that every sequence in $[0,\omega_1)$ lies
inside an at most countable initial segment, so that no sequence has cofinal
range. Sequences simply cannot reach the top of $\omega_1$.

**The counterexample.**
[[cex-the-deleted-tychonoff-plank-is-not-normal]] deletes the corner
$(\omega_1,\omega)$ from $(\omega_1+1) \times (\omega+1)$ and shows that the
remaining space is Hausdorff while its two disjoint closed sets
$\{\omega_1\} \times \omega$ and $\omega_1 \times \{\omega\}$ have no disjoint
open neighbourhoods. The argument is the boundedness of countable subsets of
$\omega_1$ applied to the countably many left endpoints that an open set
containing the first of those two sets must supply, and the ordinals it uses are
defined as *least* elements rather than selected, so the only choice principle
spent is the countable one inherited from
[[thm-countable-subsets-of-omega-one-are-bounded]]. What is claimed is exactly
that the plank is Hausdorff and not normal; its regularity, the normality of the
undeleted plank, and the standard readings of the example as a failure of
heredity or of productivity are not asserted here, since each of them needs
machinery that is not available at this point in the reading order.
