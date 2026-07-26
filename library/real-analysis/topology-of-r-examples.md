---
page: topology-of-r-examples
title: "Topology of $\\mathbb{R}$: Examples and Counterexamples"
status: published
items: []
examples: [ex-open-set-decomposed-into-components,
           ex-closure-interior-boundary-of-q,
           ex-reciprocals-with-zero-are-compact,
           ex-closed-interval-is-perfect,
           cex-intersection-of-shrinking-intervals-not-open,
           cex-half-open-interval-neither-open-nor-closed,
           cex-open-cover-of-unit-interval-no-finite-subcover,
           cex-closed-bounded-in-q-not-compact,
           cex-rationals-in-an-interval-are-disconnected,
           cex-closed-set-with-an-isolated-point-is-not-perfect,
           cex-unbounded-closed-set-not-compact]
---

**Objective.** This page is the worked companion to the Topology of $\mathbb{R}$
page, linked under Prerequisites above. There are no new definitions and no new
theorems here: four examples carry out a computation in full, and seven
counterexamples exhibit the witnesses behind the three false statements recorded
on the previous page and behind the hypotheses of its main theorems.

**The discipline is that nothing is asserted by inspection.** Saying "clearly
$[0,1)$ is not open" is not a proof, and the habit of saying it hides which
point the failure happens at and why. Every verification here names the point,
produces the radius, and checks the inequality. The four examples do the same on
the positive side: the components of an explicit open set are identified as the
classes of the relation that defines them
([[ex-open-set-decomposed-into-components]]); the closure, interior and boundary
of $\mathbb{Q}$ are computed from density in both directions
([[ex-closure-interior-boundary-of-q]]); a compact set is verified to be closed
and bounded point by point ([[ex-reciprocals-with-zero-are-compact]]); and a
closed interval is verified to have no isolated points, which gives a second and
independent proof that it is uncountable ([[ex-closed-interval-is-perfect]]).

**Each counterexample deletes exactly one hypothesis.** The shrinking intervals
$(-1/k, 1/k)$ delete finiteness from the algebra of open sets and their
intersection $\{0\}$ is not open
([[cex-intersection-of-shrinking-intervals-not-open]]). The half-open interval
$[0,1)$ shows that open and closed are not two values of one property
([[cex-half-open-interval-neither-open-nor-closed]]). The cover
$\{(1/k, 1)\}$ of $(0,1)$ has no finite subcover
([[cex-open-cover-of-unit-interval-no-finite-subcover]]), and $\mathbb{Z}$
together with $(0,1)$ shows that neither hypothesis of Heine-Borel can be
dropped ([[cex-unbounded-closed-set-not-compact]]). A closed set with one
isolated point is not perfect
([[cex-closed-set-with-an-isolated-point-is-not-perfect]]).

**Two witnesses are about $\mathbb{Q}$, and they are the same phenomenon twice.**
The set of nonnegative rationals with square below $2$ is closed and bounded in
$\mathbb{Q}$ and not compact there
([[cex-closed-bounded-in-q-not-compact]]), and $\mathbb{Q} \cap [0,2]$ contains
every rational between its endpoints and is nevertheless disconnected as a
subset of $\mathbb{R}$ ([[cex-rationals-in-an-interval-are-disconnected]]). In
both cases the number that would spoil the pleasant behaviour, $\sqrt 2$, exists
in $\mathbb{R}$ and is missing from $\mathbb{Q}$; that single absence is what
completeness buys, and it is why Heine-Borel and the characterisation of
connected sets are theorems about $\mathbb{R}$ and not about ordered fields.

**Index ranges are stated and checked.** Sequences and families here are indexed
by $\mathbb{N}$, which contains $0$, while the reciprocals $1/k$ require
$k \ge 1$; every family below that runs over $k \ge 1$ says so, and the cover of
$(0,1)$ has an empty first member, $(1/1, 1) = \varnothing$, which is recorded
rather than quietly dropped.
