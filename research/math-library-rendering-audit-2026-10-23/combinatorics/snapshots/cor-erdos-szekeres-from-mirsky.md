---
id: cor-erdos-szekeres-from-mirsky
kind: corollary
title: "The Erdős-Szekeres monotone subsequence theorem follows by applying Mirsky's theorem to the index-value poset"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-mirsky-finite-posets, def-a-monotone-sublist-of-a-finite-list-of-reals, thm-the-strong-pigeonhole-principle, def-partial-order]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-07-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Keller and W. T. Trotter, Applied Combinatorics, §6.4"
      url: "https://appliedcombinatorics.org/book/s_posets_dilworth.html"
pipeline_run: null
---

## Statement

Let $r,s\ge1$ be natural numbers. Every pairwise distinct finite list of reals
of length $(r-1)(s-1)+1$ has a strictly increasing sublist of length $r$ or a
strictly decreasing sublist of length $s$.

## Facts & Assumptions

**Given:** Natural numbers $r,s\ge1$ and a pairwise distinct list $(a_i)_{i<N}$ of reals with $N=(r-1)(s-1)+1$.

[F1] A sublist is selected by strictly increasing indices; it is strictly increasing, respectively decreasing, when its values strictly increase, respectively decrease ([[def-a-monotone-sublist-of-a-finite-list-of-reals]]).

[F2] A partial order is reflexive, antisymmetric, and transitive ([[def-partial-order]]).

[L1] Mirsky's theorem says that a nonempty finite poset of height $h$ can be covered by $h$ antichains ([[thm-mirsky-finite-posets]]).

[L2] If $f:A\to B$ is a function between finite sets and every fibre has at most $q$ elements, then $|A|\le q|B|$ ([[thm-the-strong-pigeonhole-principle]], by contraposition).

## Proof

**Proof technique:** direct.

1.1 If $r=1$ or $s=1$, any one-term sublist has the required kind, so assume $r,s\ge2$. [given, F1]

1.2 On the index set $\{0,\ldots,N-1\}$ define $i\preceq j$ when $i\le j$ and $a_i\le a_j$. The relation is reflexive and transitive componentwise, while $i\preceq j\preceq i$ forces $i=j$, so it is a partial order. Its chains, read in increasing index order, give strictly increasing sublists because the values are pairwise distinct. [given, F1, F2]

2.1 Suppose there is no strictly increasing sublist of length $r$. Then the index-value poset has height at most $r-1$, so [L1] covers its indices by at most $r-1$ antichains. After ordering the covering antichains and removing from each one the indices already assigned to an earlier one, they form a partition into at most $r-1$ antichains. [step 1.2, L1]

2.2 In an antichain of the index-value poset, increasing the indices strictly decreases the corresponding values: if $i<j$ then $a_i<a_j$ would make $i\prec j$, while equality is excluded. Hence, if there is no strictly decreasing sublist of length $s$, every such antichain has at most $s-1$ members. [step 1.2, F1]

3.1 Under the simultaneous absence of both required sublists, map each index to the part containing it in the partition from step 2.1. There are at most $r-1$ parts, and step 2.2 says that every fibre has at most $s-1$ elements. Thus [L2] gives $N\le(r-1)(s-1)$, contradicting $N=(r-1)(s-1)+1$. [step 2.1, step 2.2, L2]

4.1 Therefore at least one of the two sublists exists: a strictly increasing one of length $r$, or a strictly decreasing one of length $s$. [step 1.1, step 3.1] ∎
