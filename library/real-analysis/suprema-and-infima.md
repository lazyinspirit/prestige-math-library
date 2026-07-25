---
page: suprema-and-infima
title: "Suprema and Infima"
status: published
items: [def-bounded-set, def-infimum, def-max-min, lem-sup-unique,
        lem-reflection, thm-infimum-property, lem-sup-epsilon, lem-inf-epsilon,
        lem-max-is-sup, lem-finite-set-has-max, lem-sup-monotone,
        lem-sup-translate, lem-sup-scale, lem-sup-sum, rem-sup-conventions]
examples: [fs-sup-belongs-to-set, fs-every-set-has-sup]
---

**Objective.** This page builds the working toolkit for suprema and infima in
$\mathbb{R}$. It is the first page of analysis proper, once $\mathbb{R}$ has been
constructed and axiomatised on the earlier pages, and the analysis that follows
rests on it: completeness is used through the supremum, and the supremum is used
through the epsilon characterisation proved here.

The supremum itself is **not** defined here. The published
[[def-complete-ordered-field]] already defines upper bound, bounded above, least
upper bound, and the least-upper-bound property that distinguishes $\mathbb{R}$
from $\mathbb{Q}$. What that definition leaves open is everything one actually
computes with, and that is the content of this page.

Three things are worth watching. First, the **infimum is not assumed**: the
greatest-lower-bound property is proved, by reflecting a set through the origin
and applying the least-upper-bound property to $-S$, so $\inf S = -\sup(-S)$ is a
theorem rather than a second axiom. Second, the **epsilon characterisation**, that
an upper bound $u$ is the supremum exactly when every $u - \varepsilon$ is beaten
by some element of the set, is the form used in practice, and both directions are
proved. Third, the arithmetic: suprema commute with translation, with positive
scaling, and with sums of sets, while negative scaling exchanges supremum and
infimum.

The two false statements guard the errors that follow from thinking of the
supremum as a maximum. A supremum **need not belong to its set**, and a set
**need not have one at all**: the least-upper-bound property requires the set to
be nonempty and bounded above, and each hypothesis fails on its own witness, the
empty set for the first and the set of canonical naturals of $\mathbb{R}$ for the
second. Distinguishing supremum
from maximum is the whole point of the definitions of maximum and minimum given
here, and of the lemma identifying when the two coincide.
