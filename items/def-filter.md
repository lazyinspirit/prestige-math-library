---
id: def-filter
kind: definition
title: "Filter on a set"
status: published
origin: session
deps: []
justified_by: []
aliases: [def-proper-filter]
landmark: false
short: "filter on $X$"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Filter (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Filter_(set_theory)"
    - title: "Filter (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Filter_(mathematics)"
    - title: "N. Bourbaki, General Topology: Chapters 1-4, Ch. I §6"
      url: "https://link.springer.com/book/9783540642411"
pipeline_run: null
---

## Definition

Let $X$ be a set. A family $\mathcal{F} \subseteq \mathcal{P}(X)$ of subsets of
$X$ is a **filter on $X$** when it satisfies:

- **(F1)** *nontriviality*: $X \in \mathcal{F}$;
- **(F2)** *properness*: $\emptyset \notin \mathcal{F}$;
- **(F3)** *closure under pairwise intersection*: if $A, B \in \mathcal{F}$ then
  $A \cap B \in \mathcal{F}$;
- **(F4)** *upward closure in $X$*: if $A \in \mathcal{F}$ and
  $A \subseteq B \subseteq X$ then $B \in \mathcal{F}$.

The set of all filters on $X$ is written $\mathrm{Filt}(X)$. It is a subset of
$\mathcal{P}(\mathcal{P}(X))$, hence a set, and it is ordered by inclusion:
$\mathcal{F} \subseteq \mathcal{G}$ is read "$\mathcal{G}$ is **finer** than
$\mathcal{F}$", and $\mathcal{F}$ is **coarser** than $\mathcal{G}$.

**Convention: filters are proper.** Condition (F2) is part of the definition
throughout this library, so "filter" always means "proper filter". The competing
convention drops (F2), calls the resulting objects filters, and says **proper
filter** for one that omits $\emptyset$. The two conventions differ by exactly one
object, since (F4) forces any family satisfying (F1), (F3) and (F4) that contains
$\emptyset$ to be all of $\mathcal{P}(X)$: if $\emptyset \in \mathcal{F}$ then
$\emptyset \subseteq B \subseteq X$ gives $B \in \mathcal{F}$ for every
$B \subseteq X$. That single extra object is the **improper filter**
$\mathcal{P}(X)$. This library follows the more widely adopted convention, in
which the improper filter is not a filter; a reader arriving from the other
convention should read every unqualified "filter" below as "proper filter".

## Remarks

- **The intuition is "large".** Read $A \in \mathcal{F}$ as "$A$ is a large subset
  of $X$", where largeness is relative to $\mathcal{F}$. Then (F1) says the whole
  space is large, (F2) says the empty set is not, (F3) says two large sets
  overlap largely, and (F4) says a superset of a large set is large. Properness
  is what stops "large" from being vacuous: without (F2) every subset counts as
  large and the notion carries no information, which is the mathematical reason
  the improper filter is excluded rather than a matter of taste.
- **$X \neq \emptyset$ follows.** By (F1) the set $X$ belongs to $\mathcal{F}$ and
  by (F2) the set $\emptyset$ does not, so $X \neq \emptyset$. Equivalently, there
  are **no filters on the empty set**: $\mathcal{P}(\emptyset) = \{\emptyset\}$,
  and any filter on $\emptyset$ would have to contain $\emptyset$ by (F1) and omit
  it by (F2). No hypothesis "$X \neq \emptyset$" is therefore needed anywhere
  below; it is delivered by the existence of a filter.
- **(F3) extends to any finite list of members** and not beyond: an intersection
  of infinitely many members of a filter is usually not a member, and demanding
  that it be one is a strictly stronger notion. The families that generate
  filters by finite intersections are exactly those with the finite intersection
  property ([[def-finite-intersection-property]], [[lem-fip-generates-filter]]).
- Filters are usually presented by a smaller family that they are generated from,
  a **filter base** ([[def-filter-base]], [[lem-filter-base-generates]]), because
  writing out every superset is neither possible nor informative.
- The maximal filters under the inclusion order recorded above are the
  **ultrafilters** ([[def-ultrafilter]]), and every filter is contained in one
  ([[thm-ultrafilter-lemma]]). Maximal here means maximal, not greatest: as soon
  as $X$ has two distinct points $x \neq y$ there is no finest filter, since a
  filter containing every filter would contain the principal filters at $x$ and
  at $y$, hence both $\{x\}$ and $\{y\}$, hence their intersection $\emptyset$,
  which (F2) forbids. Incomparability of those two principal filters is not the
  reason: incomparable elements are perfectly compatible with a greatest element
  above them both, and reading "maximal" as "greatest" is the error recorded in
  [[fs-maximal-is-greatest]]. The argument is set out in [[def-ultrafilter]].
