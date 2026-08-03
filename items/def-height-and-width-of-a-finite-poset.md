---
id: def-height-and-width-of-a-finite-poset
kind: definition
title: "Height and width of a nonempty finite poset"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-antichain-and-poset-covers, def-finite-cardinality, thm-subset-of-a-finite-set, thm-well-ordering-principle]
justified_by: []
aliases: []
landmark: true
verification:
  audited: 2026-07-31
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "M. Keller and W. T. Trotter, Applied Combinatorics, §6.4"
      url: "https://appliedcombinatorics.org/book/s_posets_dilworth.html"
pipeline_run: null
---

## Definition

Let $P$ be a nonempty finite poset. Its **height** is

$$h(P):=\max\{\,|C|:C\subseteq P\text{ is a chain}\,\},$$

and its **width** is

$$w(P):=\max\{\,|A|:A\subseteq P\text{ is an antichain}\,\}.$$

Here $|P|$ and the cardinalities below are finite cardinalities
([[def-finite-cardinality]]).

The maxima exist. Every chain and antichain is a subset of $P$, hence is finite
and has cardinality at most $|P|$ by
[[thm-subset-of-a-finite-set]]. The possible cardinalities therefore form
nonempty subsets of the finite set $\{1,\ldots,|P|\}$: singleton subsets show
nonemptiness. A nonempty finite set of natural numbers has a greatest member,
as follows from [[thm-well-ordering-principle]] by applying leastness to the
corresponding differences from $|P|$. Thus $h(P)$ and $w(P)$ are natural
numbers with $1\le h(P),w(P)\le |P|$.

The empty poset is excluded so that neither definition needs a convention for
the maximum of an empty collection.
