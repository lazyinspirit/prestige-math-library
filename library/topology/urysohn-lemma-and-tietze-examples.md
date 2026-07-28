---
page: urysohn-lemma-and-tietze-examples
title: "Urysohn's Lemma and the Tietze Extension Theorem: Examples and Counterexamples"
status: draft
items: []
examples: [ex-a-urysohn-function-on-the-real-line,
           ex-the-first-dyadic-levels-of-the-urysohn-construction,
           ex-the-metric-urysohn-function-costs-no-choice,
           ex-every-closed-subset-of-the-line-is-a-zero-set,
           ex-tietze-extension-from-a-closed-interval-of-the-line,
           cex-a-continuous-function-on-a-non-closed-subspace-with-no-extension,
           ex-sierpinski-space-is-normal-and-not-completely-regular,
           cex-tietze-fails-in-a-t1-space-that-is-not-normal]
---

**Objective.** This page is the worked companion to Urysohn's Lemma and the
Tietze Extension Theorem, linked under Prerequisites above. That page proves
Urysohn's lemma and Tietze's extension theorem abstractly, by a
dependent-choice recursion; this one writes down explicit witnesses in
$\mathbb{R}$ and in hand-built spaces, and marks the boundary of each theorem
with a counterexample.

**Urysohn functions, written down and computed.**
[[ex-a-urysohn-function-on-the-real-line]] writes an explicit continuous
function separating $(-\infty,0]$ from $[1,\infty)$ in $\mathbb{R}$ and checks
it against the definition. [[ex-the-first-dyadic-levels-of-the-urysohn-construction]]
exhibits, for the same two sets, a family of open sets indexed by several
dyadic rationals satisfying the shrinking property the abstract construction
requires. [[ex-the-metric-urysohn-function-costs-no-choice]] gives the
distance-ratio formula that separates any two disjoint closed sets of a
metric space outright, with no choice principle spent.

**The zero-set and extension theorems, illustrated on $\mathbb{R}$.**
[[ex-every-closed-subset-of-the-line-is-a-zero-set]] exhibits a closed subset
of $\mathbb{R}$ as both a zero set and a $G_\delta$, directly from the
metric. [[ex-tietze-extension-from-a-closed-interval-of-the-line]] extends a
continuous function on $[0,1]$ to all of $\mathbb{R}$ by an explicit
clamp-composition, alongside the extension the abstract theorem supplies.

**Two witnesses that a hypothesis is not decoration.**
[[cex-a-continuous-function-on-a-non-closed-subspace-with-no-extension]]
shows that the reciprocal function on $(0,1]$ has no continuous extension to
$\mathbb{R}$ at all, so closedness of the subspace cannot be dropped from
Tietze's theorem. [[ex-sierpinski-space-is-normal-and-not-completely-regular]]
reads Sierpinski space as a normal space that is not completely regular, so
$T_1$ cannot be dropped from the corollary closing the separation chain.
[[cex-tietze-fails-in-a-t1-space-that-is-not-normal]] gives the companion
witness on the $T_1$ side of Tietze's theorem: in the $K$-topology on
$\mathbb{R}$, a closed set carries a continuous two-valued function with no
continuous extension, because the ambient space is $T_1$ but not normal.
