---
id: rem-r-native-topology-scope
kind: remark
title: "Which results on this page use the order of $\\mathbb{R}$ and therefore have no general-topological analogue"
status: published
origin: session
deps: [def-metric-space, def-metric-topology, def-metric-ball, lem-real-line-is-a-metric-space,
       def-metric-interior-closure-boundary, thm-metric-closure-characterisation,
       thm-metric-sequential-closure, def-metric-bounded-diameter,
       fs-boundedness-is-a-topological-property,
       def-interior-closure-boundary-r, def-limit-point-r,
       lem-sequential-characterisation-of-closure-r,
       lem-compact-implies-closed-and-bounded-r,
       thm-open-subsets-of-r-structure, thm-connected-subsets-of-r-are-intervals, thm-heine-borel-r, thm-compact-iff-sequentially-compact-r, def-open-cover-r, thm-heine-borel-characterisation-r, thm-open-set-algebra-r, thm-closure-characterisations-r, def-open-and-closed-in-r, def-neighbourhood-r, def-connected-r, def-interval, def-bounded-set, thm-nested-interval-property, thm-bolzano-weierstrass, fs-closed-bounded-compact-without-completeness]
justified_by: []
forward_refs: [cex-closed-bounded-in-q-not-compact, def-topological-space, def-metrizable-space]
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Open set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Open_set"
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
    - title: "Connected space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Connected_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

This page builds the topology of $\mathbb{R}$ out of the order and the absolute
value alone: a neighbourhood is an interval ([[def-neighbourhood-r]]), and open
and closed are defined from neighbourhoods ([[def-open-and-closed-in-r]]). Some
of what follows uses nothing else about $\mathbb{R}$, and some of it is written
in order vocabulary from beginning to end. This remark separates the two, so a
reader knows which results are candidates for reuse elsewhere and which are not
even statable elsewhere. **It asserts nothing about topological spaces in
general: they are developed later in this library, on the page of
[[def-topological-space]] and [[def-metrizable-space]], where the metric
development becomes a special case, but no claim about them is made or needed
here and nothing below rests on them.**

**Results that use only the definitions.** [[thm-open-set-algebra-r]] and
[[thm-closure-characterisations-r]] use openness, closedness, closure and the
nesting property of neighbourhoods, together with the comparison of two positive
radii, and nothing beyond that. Neither the least-upper-bound property nor the
Archimedean property appears in either proof, and their statements mention no
interval, no bound and no order, so those statements would still make sense
wherever a notion of neighbourhood is available, however it arises.

**Results that cannot be separated from the order of $\mathbb{R}$.** Four
results on this page depend on the order. For the first three the order is in
what they say and not merely in how they are proved; for the fourth it is in the
proof only, and the bullet says so.

- [[thm-open-subsets-of-r-structure]] says that an open set is a countable
  disjoint union of **open intervals**. An interval is defined by the order
  ([[def-interval]]), the components are the classes of an equivalence relation
  defined by order-convexity, and the identification of a component as an
  interval is carried out with $\sup$ and $\inf$. Delete the order and there is
  no statement left to prove.
- [[thm-connected-subsets-of-r-are-intervals]] characterises connectedness by
  **order-convexity**. Connectedness itself is defined without the order
  ([[def-connected-r]]), but the property it is being equated with is an order
  property, so the theorem is a bridge between an order notion and a topological
  one and exists only where both are present.
- [[thm-heine-borel-r]] and [[thm-heine-borel-characterisation-r]] speak of
  **closed bounded intervals** and of **bounded** sets. Boundedness is an order
  notion ([[def-bounded-set]]), and the proof of the first is a bisection, which
  uses the midpoint and hence the field operations as well. The completeness of
  $\mathbb{R}$ enters through [[thm-nested-interval-property]].
- [[thm-compact-iff-sequentially-compact-r]] routes **both** implications
  through the previous item, whose backward half spends the least-upper-bound
  property, and its **forward** implication additionally uses
  [[thm-bolzano-weierstrass]], which spends that property again; the backward
  implication does not use Bolzano-Weierstrass at all. Its statement mentions
  only compactness and sequences ([[def-open-cover-r]]), so unlike the three
  above it *is* statable without an order; the dependence lies entirely in the
  proof. This library provides no other proof, so nothing here licenses the
  equivalence outside $\mathbb{R}$.

**Where the dependence on completeness is visible rather than merely present.**
[[fs-closed-bounded-compact-without-completeness]] refutes, inside this library,
the claim that closed and bounded implies compact in an arbitrary ordered field,
and [[cex-closed-bounded-in-q-not-compact]] names the witness in $\mathbb{Q}$.
That is the sharpest statement this page makes about the limits of its own
results: the Heine-Borel characterisation is not a formal consequence of the
definitions, and it fails in the nearest ordered field that is not complete.

**The metric topology of $\mathbb{R}$ is the topology of this page.** This
library does develop metric spaces ([[def-metric-space]],
[[def-metric-topology]]), and $\mathbb{R}$ under $d(x,y) = |x-y|$ is one of them
([[lem-real-line-is-a-metric-space]]). The two resulting notions of *open subset
of $\mathbb{R}$* are not merely equivalent but literally the same condition, and
unfolding the definitions is the whole of the proof: claim 2 of that lemma gives
$B(x,r) = (x-r,\ x+r)$, which is exactly the neighbourhood $N_r(x)$ of
[[def-neighbourhood-r]], so "every point of $U$ admits a ball inside $U$" and
"every point of $U$ admits a neighbourhood inside $U$"
([[def-open-and-closed-in-r]]) say the same thing word for word. This page still
proves everything from the order directly, so that nothing here rests on the
metric development; the identification is recorded so that a reader moving
between the two pages knows they are looking at one topology and not two.
Because the two collections of open sets are one collection, everything built
from them is one notion as well. The interior, closure and boundary of
[[def-interior-closure-boundary-r]] and of
[[def-metric-interior-closure-boundary]] are the same three sets, since each
side characterises them in both of the same two ways, pointwise by
neighbourhoods and by extremality among the open subsets and the closed
supersets ([[thm-closure-characterisations-r]],
[[thm-metric-closure-characterisation]]); limit point, isolated point, adherent
point and dense are defined by literally the same condition on the two sides
([[def-limit-point-r]]), once $N_\varepsilon(x)$ and $B(x,\varepsilon)$ are
recognised as the same set; and
[[lem-sequential-characterisation-of-closure-r]] is the case $X = \mathbb{R}$ of
[[thm-metric-sequential-closure]], spending the axiom of countable choice in the
same one of the two directions.

**Bounded means the same here as it does in the metric development, and that
agreement is not a topological fact.** [[def-bounded-set]] calls
$A \subseteq \mathbb{R}$ bounded when it has both a lower and an upper bound,
while [[def-metric-bounded-diameter]] calls it bounded when it is empty or lies
inside some ball of $(\mathbb{R}, d_{\mathbb{R}})$. The two conditions hold of
exactly the same subsets of $\mathbb{R}$. If $A \subseteq B(x_0,r) = (x_0 - r,\
x_0 + r)$ ([[lem-real-line-is-a-metric-space]], claim 2, [[def-metric-ball]])
then $x_0 - r$ and $x_0 + r$ bound $A$ below and above; conversely, if
$\ell \le a \le u$ for every $a \in A$ and $A \ne \varnothing$, then $\ell \le u$
and $A \subseteq B(\ell,\ u - \ell + 1)$, the radius being at least $1$ and hence
positive; and an empty $A$ is bounded under both definitions, vacuously under the
first and by the explicit empty clause of the second. So the word **bounded** in
[[thm-heine-borel-characterisation-r]] may be read in either sense without
changing which sets the theorem names.

What may not be done is to read that theorem as a statement about the topology.
Boundedness is a property of the metric and not of the topology it induces
([[fs-boundedness-is-a-topological-property]]): the metric
$\rho(u,v) = \min\{|u-v|,\ 1\}$ induces exactly the open sets of this page, and
under it every subset of $\mathbb{R}$, including $\mathbb{R}$ itself, is
bounded. Since the open sets are unchanged, compactness ([[def-open-cover-r]])
is unchanged too, and $\mathbb{R}$ is not compact, being unbounded in the order
sense ([[lem-compact-implies-closed-and-bounded-r]]); yet $\mathbb{R}$ is closed,
and $\rho$-bounded. So "closed and bounded implies compact" is false for $\rho$
and true for $d_{\mathbb{R}}$, on one and the same topology. The identification
in the previous paragraph is with the usual metric specifically, and Heine-Borel
is a theorem about that metric and the order it comes from, not about the
topology alone.

**What is deliberately not claimed.** Whether the results above have analogues in
a setting carrying a topology with no order available at all, and whether
compactness and sequential compactness agree there, are questions about general
topological spaces. This library takes those questions up on a later page, where
[[def-metrizable-space]] identifies the metric development, this page's topology
included, as a special case of the general one; but nothing on **this** page
proves anything about general spaces, and the reader should take no assertion
about them from here. What is claimed here is narrower and
is checkable line by line against the proofs: in the four results listed above,
the order of $\mathbb{R}$ is used, and in three of them it is used in the
statement itself.
