---
id: def-height-and-width-of-a-finite-poset
kind: definition
title: "Height and width of a nonempty finite poset"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-antichain-and-poset-covers, def-finite-cardinality, thm-subset-of-a-finite-set,
       thm-well-ordering-principle, def-chain]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-03
    scope: published-audit-targeted
    context_sha256: cb627008ad9d90cd02860c8cd98498494d8e66b013ecbc48e0e4be0c2d0428f8
    item_sha256: c1814fb5c028238103c2eeb9151323803a3bdd4919a977d17dd467725b2c179e
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
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

The maxima exist. A chain is a subset of $P$ whose elements are pairwise
comparable and an antichain one whose distinct elements are pairwise incomparable
([[def-chain]], [[def-antichain-and-poset-covers]]); each is a subset of $P$,
hence finite with cardinality at most $|P|$ by [[thm-subset-of-a-finite-set]].
The possible cardinalities therefore form nonempty subsets of the finite set
$\{0,1,\ldots,|P|\}$ — the empty subset is vacuously both a chain and an
antichain, so $0$ occurs, and every singleton is both, so some cardinality $1$
occurs. A nonempty finite set of natural numbers has a greatest member,
as follows from [[thm-well-ordering-principle]] by applying leastness to the
corresponding differences from $|P|$. Thus $h(P)$ and $w(P)$ are natural
numbers with $1\le h(P),w(P)\le |P|$.

The empty poset is excluded so that $h(P)$ and $w(P)$ are at least $1$: on the
empty poset the only chain and the only antichain are empty, so both maxima would
be $0$ and every statement below with a nonzero lower bound would need a separate
convention.
