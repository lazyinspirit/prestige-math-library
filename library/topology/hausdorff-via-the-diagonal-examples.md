---
page: hausdorff-via-the-diagonal-examples
title: "Hausdorff via the Diagonal: Examples and Counterexamples"
status: draft
items: []
examples: [ex-the-diagonal-of-the-real-line-is-closed,
           ex-the-diagonal-in-the-cofinite-and-cocountable-topologies,
           ex-the-graph-of-a-continuous-real-function-is-closed,
           cex-a-closed-graph-without-continuity,
           ex-two-continuous-real-functions-agreeing-on-the-rationals-are-equal,
           cex-two-maps-into-an-indiscrete-space-agreeing-on-a-dense-set,
           ex-a-finite-hausdorff-space-is-discrete,
           ex-separating-a-point-from-a-finite-set-in-a-hausdorff-space]
---

**Objective.** This page is the worked companion to Hausdorff via the Diagonal,
linked under Prerequisites above. That page proves the diagonal criterion and its
consequences; this one computes the diagonal, the graph and the agreement set in
concrete spaces, and exhibits the failures that mark each hypothesis as
necessary. The concrete witnesses are built from $\mathbb{R}$ with its usual
topology, from its square, and from the standard topologies of
[[def-standard-topologies]]; where a clause is stated for an arbitrary space
instead, the clause says so.

**Computing the diagonal.**
[[ex-the-diagonal-of-the-real-line-is-closed]] separates a point $(a,b)$ with
$a \ne b$ from $\Delta_{\mathbb{R}}$ by the box of two intervals of radius
$|a-b|/2$, and the triangle inequality is what closes the argument; the radius is
exactly the Hausdorff separation of $a$ from $b$ in $\mathbb{R}$, which is what
the criterion's abstract box specialises to here.
[[ex-the-diagonal-in-the-cofinite-and-cocountable-topologies]] goes the other
way: on an infinite set with the cofinite topology, and on $\mathbb{R}$ with the
cocountable topology, no two nonempty open sets are disjoint, so every basic open
box meets the diagonal and the closure of the diagonal is the whole square. Both
spaces are $T_1$, which is the separation of $T_1$ from $T_2$ seen through the
square. That example also records the degenerate case the general phrasing hides:
on a countably infinite set the cocountable topology is the discrete topology,
whose diagonal is closed.

**Graphs.** [[ex-the-graph-of-a-continuous-real-function-is-closed]] feeds an
$\varepsilon$-$\delta$ hypothesis to a theorem about topological spaces through
the dictionary of [[lem-real-and-metric-notions-agree]], and concludes that the
graph of any continuous $f : \mathbb{R} \to \mathbb{R}$ is closed in
$\mathbb{R}^2$. [[cex-a-closed-graph-without-continuity]] then shows that the
converse fails even when the codomain is Hausdorff: the function equal to $1/x$
off $0$ and to $0$ at $0$ has closed graph, is continuous at every nonzero point,
and is discontinuous at $0$, so its set of discontinuities is exactly $\{0\}$.
Since a closed graph over a compact codomain does force continuity, the same
witness shows that $\mathbb{R}$ is not compact. The hypothesis that repairs the
implication is compactness of the codomain, and a separation hypothesis there
does nothing.

**Agreement sets.**
[[ex-two-continuous-real-functions-agreeing-on-the-rationals-are-equal]] derives
the density of the rationals in the sense of [[def-dense-top]] from the statement
that a rational lies strictly between any two reals, and concludes that a
continuous real function is determined by its values at the rationals.
[[cex-two-maps-into-an-indiscrete-space-agreeing-on-a-dense-set]] removes the
separation hypothesis on the codomain and computes an agreement set that is dense
and not closed, namely $\mathbb{Q}$ itself; and it observes that into a two-point
indiscrete codomain the agreement set may be made *any* subset of the domain
whatever, so that without the Hausdorff condition the agreement set carries no
topological information at all.

**Where the criterion says nothing, and where compactness is free.** [[ex-a-finite-hausdorff-space-is-discrete]] shows that a finite Hausdorff
space is discrete — the Hausdorff hypothesis being used only to obtain $T_1$ —
and that its square is discrete too, so the diagonal is closed for the trivial
reason that every subset is. That is the degenerate end of the criterion.
[[ex-separating-a-point-from-a-finite-set-in-a-hausdorff-space]] is the other
small case: a finite subset of *any* space is compact, at the cost of one finite
choice ([[lem-finite-choice]]), so the compact separation clauses of
[[thm-compact-subset-of-a-hausdorff-space-is-closed]] specialise to separating a
point from a finite set and to the closedness of finite subsets of a Hausdorff
space.
