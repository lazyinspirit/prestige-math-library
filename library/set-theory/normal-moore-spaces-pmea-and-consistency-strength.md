---
page: normal-moore-spaces-pmea-and-consistency-strength
title: "Normal Moore Spaces, PMEA, and Consistency Strength"
status: published
items: [def-moore-spaces-and-developments, def-normalized-families-and-collectionwise-normality, lem-metrizable-spaces-are-collectionwise-normal, thm-moore-spaces-are-subparacompact, lem-collectionwise-normal-moore-spaces-are-screenable, lem-sigma-cellular-base-yields-a-compatible-metric, thm-normal-screenable-moore-spaces-are-metrizable, thm-collectionwise-normal-moore-spaces-are-metrizable, def-q-sets-and-heath-moore-space-interface, lem-solovay-almost-disjoint-extension-under-ma, lem-ma-produces-an-uncountable-q-set, thm-bing-q-set-moore-space-is-normal-and-nonmetrizable, thm-ma-not-ch-normal-nonmetrizable-moore-space, def-product-measure-extension-axioms-pmea-and-pmea-sigma, lem-pmea-three-quarter-separation-estimate, thm-pmea-normal-low-character-spaces-are-collectionwise-normal, thm-pmea-implies-normal-moore-space-conjecture, thm-strongly-compact-relative-consistency-normal-moore, def-fleissner-hyp-covering-interface, lem-ladder-separation-from-hyp, def-dodd-jensen-covering-and-square-package, thm-dodd-jensen-covering-supplies-fleissner-hyp-data, thm-no-inner-model-measurable-implies-fleissner-hyp, thm-fleissner-normal-moore-space-construction, thm-ch-normal-nonmetrizable-moore-space, cor-v-equals-l-refutes-normal-moore-space-conjecture, thm-fleissner-hyp-normal-nonmetrizable-moore-space, thm-normal-moore-implies-inner-model-measurable, thm-formal-nmsc-consistency-lower-bound, thm-normal-moore-consistency-strength-sandwich, rem-omega-one-strongly-compact-normal-moore-refinement]
examples: []
---

This page develops the normal Moore space problem from its two topological
ingredients, Bing's metrization theory and the Q-set construction of separable
counterexamples, into the measure-theoretic and inner-model interfaces that
decide its consistency strength. It is built on the choice-strength page that
supplies the DMC/DC landscape, and on the measure-theory and large-cardinal
pages listed in its prerequisites.

The topological spine is as follows. A Moore space is a regular $T_1$ space
carrying a development, and developments may always be taken decreasing; a
metrizable space is collectionwise normal, every Moore space is subparacompact,
and a collectionwise normal Moore space is screenable. Any space with a
$\sigma$-cellular base is metrizable, by an explicit level metric, and this
converts the screenability of a normal Moore space into metrizability: a normal
screenable Moore space is metrizable, and hence so is every collectionwise
normal Moore space. That last equivalence is Bing's classical theorem, and it
makes the normal Moore space conjecture equivalent to the question whether
every normal Moore space is collectionwise normal.

The counterexample side begins with Q-sets: an uncountable set of reals all of
whose subsets are relatively $G_\delta$. Under Martin's axiom and the failure of
the continuum hypothesis, every set of reals of cardinality $\omega_1$ is a
Q-set, and Bing's tangent-disk construction turns any uncountable Q-set into a
separable normal nonmetrizable Moore space, whose axis part is closed discrete
and therefore obstructs metrizability. So $\mathrm{MA}+\lnot\mathrm{CH}$ refutes
the normal Moore space conjecture.

The measure-theoretic side is the product measure extension axiom PMEA and its
countably additive weakening PMEA-$\sigma$: every fair-coin product measure on
$2^\lambda$ extends to a full power-set measure with the stated additivity. The
three-quarter separation estimate turns a normal space with a discrete family
and small local bases into a collectionwise normal one, so PMEA makes every
normal space of character below the continuum collectionwise normal, and
PMEA-$\sigma$ already does so for first countable spaces. Since Moore spaces are
first countable, PMEA-$\sigma$ alone proves the normal Moore space conjecture,
and PMEA is consistent relative to a strongly compact cardinal.

The inner-model side records the covering interface that closes the circle: HYP
is the combinatorial axiom combining a singular strong limit cardinal of
countable cofinality, the $\kappa$-continuum hypothesis, and a nonreflecting
stationary set, and the ladders of that set can be separated level by level.
The Dodd-Jensen covering and square package produces HYP data from the
nonexistence of inner models with measurable cardinals. Fleissner's
construction is then carried out in full: from the level data --- the
cofinal sequence of cardinals, $2^\kappa = \kappa^+$, the stationary set of
cofinality-$\omega$ ordinals and the ladder separation --- the page builds the
space $F \cup Q$ with its basic sets $B(\sigma) = [\sigma] \cup C(\sigma)$,
proves the development and the uniform base, proves normality through the
club and the two separation cases, and proves non-metrizability through the
stafull extraction, the Erdős–Rado/Ramsey colouring and the closing chain. The
CH instance is the case $\kappa = \omega$, $\kappa_n = n$, with the ladder
separation proved directly; $V = L$ therefore refutes the normal Moore space
conjecture, the failure of the conjecture yields an inner model with a
measurable cardinal, the metatheoretic consistency lower bound follows, and with the
strongly compact upper bound this is the consistency-strength sandwich for
NMSC.
