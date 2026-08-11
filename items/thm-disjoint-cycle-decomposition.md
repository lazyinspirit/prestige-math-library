---
id: thm-disjoint-cycle-decomposition
kind: theorem
title: 'Every permutation of a finite set is a product of pairwise disjoint cycles, uniquely up to reordering and cyclic rotation'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-permutation-support-disjoint-cycles-and-cycle-type, lem-disjoint-cycles-commute,
       def-group-action, def-orbit-and-stabilizer, thm-orbits-partition-the-set,
       def-generated-subgroup, lem-cyclic-subgroup-is-the-set-of-powers]
justified_by: []
aliases: []
landmark: true
short: 'Disjoint-cycle decomposition'
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'T. W. Judson, Abstract Algebra: Theory and Applications, §5.1, Theorem 5.3'
      url: 'https://judsonbooks.org/aata-files/aata-20140815.pdf'
    - title: 'J. S. Milne, Group Theory, Proposition 4.26'
      url: 'https://www.jmilne.org/math/CourseNotes/GT.pdf'
pipeline_run: null
---

## Statement

Every permutation of a finite set is a product of pairwise disjoint cycles,
uniquely up to reordering the factors and cyclically rotating the entries within
each cycle. The identity permutation has the empty disjoint-cycle decomposition.

## Facts & Assumptions

**Given:** A finite set $X$ and a permutation $\sigma\in\operatorname{Sym}(X)$; the cyclic subgroup $\langle\sigma\rangle$ acts on $X$ by evaluation.

[L1] A disjoint-cycle decomposition is a product of pairwise disjoint cycles of length at least $2$; its omitted one-cycles are the fixed points ([[def-permutation-support-disjoint-cycles-and-cycle-type]]).

[L2] For a left action, the distinct orbits partition the acted-on set ([[thm-orbits-partition-the-set]]).

[L3] The cyclic subgroup $\langle\sigma\rangle$ is exactly the set of integer powers $\{\sigma^r:r\in\mathbb Z\}$ ([[lem-cyclic-subgroup-is-the-set-of-powers]]).

[L4] Cycles with disjoint supports commute ([[lem-disjoint-cycles-commute]]).

## Proof

**Proof technique:** direct.

1.1 The evaluation rule is an action by the Given, and [L3] identifies its orbit at $x$ as $\{\sigma^r(x):r\in\mathbb Z\}$; by [L2] these orbits partition $X$. [given, L2, L3]

2.1 Fix an orbit $O$. Since $O$ is finite, the sequence $x,\sigma(x),\sigma^2(x),\ldots$ first repeats; bijectivity of $\sigma$ makes the first repeated value $x$. If the least positive return time is $d$, then $O=\{x,\sigma(x),\ldots,\sigma^{d-1}(x)\}$ and $\sigma$ restricts to the cycle $(x\,\sigma(x)\,\ldots\,\sigma^{d-1}(x))$; when $d=1$, $x$ is fixed. [step 1.1, L1]

3.1 The cycles obtained from the non-singleton orbits have pairwise disjoint supports, and their product agrees with $\sigma$ on each orbit and fixes every singleton orbit. Their product is therefore $\sigma$; if every orbit is a singleton, this is the empty product. [step 2.1, L1, L2]

4.1 In any disjoint-cycle decomposition of $\sigma$, [L4] allows powers to be taken factor by factor, while every factor except the unique one supporting a given point fixes that point. Thus successive powers of $\sigma$ move the point exactly around that factor's support, so the support is the point's intrinsic $\langle\sigma\rangle$-orbit. Hence the factor supports are forced, and the cycle on each support is forced up to its starting point, which is cyclic rotation; only the order of the disjoint factors remains free. [step 3.1, L1, L2, L3, L4] ∎
