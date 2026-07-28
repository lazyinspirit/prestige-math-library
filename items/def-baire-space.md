---
id: def-baire-space
kind: definition
title: "Baire space: a topological space in which every countable intersection of dense open subsets is dense"
status: draft
origin: session
deps: [def-topological-space, def-dense-top, def-sequence, def-interior-closure-boundary-top, def-natural-numbers]
justified_by: []
aliases: []
landmark: true
short: "Baire space"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Baire space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Baire_space"
    - title: "Baire category theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Baire_category_theorem"
pipeline_run: null
---

## Definition

A topological space $(X, \mathcal{T})$ ([[def-topological-space]]) is a **Baire
space** when

> for every sequence $(U_n)_{n \in \mathbb{N}}$ of subsets of $X$ that are open
> and dense in $X$ ([[def-dense-top]], [[def-sequence]],
> [[def-natural-numbers]]), the intersection $\bigcap_{n \in \mathbb{N}} U_n$ is
> dense in $X$.

As everywhere in this library $\mathbb{N}$ contains $0$, so the sequence starts
at $U_0$ and an index range copied from a text that starts at $1$ must be shifted
before it is used here.

**The condition unwound.** Denseness of $A \subseteq X$ says $\overline{A} = X$
([[def-interior-closure-boundary-top]]), equivalently that $A$ meets every
nonempty open subset of $X$ ([[def-dense-top]]). So the Baire condition reads:

> for every sequence $(U_n)$ of dense open sets and every nonempty open
> $W \subseteq X$ there is a point of $W$ lying in every $U_n$.

That is the form every proof below uses, and it is the form in which the
condition is checked: one produces a single point, in a given nonempty open set,
belonging to all of the $U_n$ at once.

**The intersection itself need not be open.** Nothing in the definition asserts
that $\bigcap_n U_n$ is open, and in general it is not; what is asserted is only
that it is dense. A finite intersection of dense open sets is dense and open, and
that much holds in every space; the content of the definition is entirely in the
passage to a countable family.

**Why the meager formulation is not given here.** The usual equivalent phrasing
says that a countable union of nowhere dense sets has empty interior, or that a
nonempty open set is not meager. This page does not state it, because the
notions of nowhere dense and meager available to it are
[[def-nowhere-dense-meager]], which is stated for subsets of $\mathbb{R}$ and not
for subsets of an arbitrary topological space; restating them here in general
would create a second notion under the same name. The definition above is stated
in terms of denseness alone, which [[def-dense-top]] does define for an arbitrary
space, and it is equivalent to the meager formulation wherever both are
available.

## Remarks

**What the definition is for.** It isolates exactly the hypothesis under which a
countable family of "large" open sets still has a large intersection, and that is
the hypothesis a great many existence arguments run on: to produce an object with
countably many properties, one shows that each property is enjoyed by a dense open
set and then takes a point of the intersection. Nothing about the ambient space is
assumed here beyond the definition, so the notion applies to spaces with no metric
and no countability property.

**Which spaces satisfy it, and at what cost.** Every locally compact Hausdorff
space is a Baire space, assuming dependent choice
([[thm-baire-category-locally-compact-hausdorff]]); the corresponding statement
for complete metric spaces, and the exact choice principles the several versions
of the Baire category theorem are equivalent to over ZF, are recorded in
[[rem-baire-category-choice-strength]], which this library states and does not
prove.
