---
id: thm-compactness-via-nets-filters-and-ultrafilters
kind: theorem
title: "Assuming the ultrafilter lemma, compactness is equivalent to every net having a cluster point, every net having a convergent subnet, every filter having a cluster point, and every ultrafilter converging"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-net-cluster-point-iff-convergent-subnet, thm-net-filter-convergence-dictionary, lem-ultrafilter-cluster-points-are-limits, thm-ultrafilter-lemma, thm-compact-iff-fip, def-compact-space, def-filter-convergence-and-cluster-point]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "WVU Math 581 Topology I"
      url: "https://math.wvu.edu/~jwojciec/teaching_files/2024_Spring-581/index.html"
    - title: "Net (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Net_(mathematics)"
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "Filter (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Filter_(set_theory)"
    - title: "Boolean prime ideal theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Boolean_prime_ideal_theorem"
pipeline_run: null
---

## Statement

**Assume the ultrafilter lemma.** For a topological space $X$, the following are equivalent:

1. $X$ is compact;
2. every net in $X$ has a cluster point;
3. every net in $X$ has a convergent subnet;
4. every filter on $X$ has a cluster point;
5. every ultrafilter on $X$ converges.

## Facts & Assumptions

**Given:** A topological space $X$ and the ultrafilter lemma.

[L1] Compactness is equivalent to every family of closed sets with the finite-intersection property having nonempty intersection; moreover, a family of subsets of $X$ has the finite-intersection property exactly when it is contained in a filter on $X$ ([[thm-compact-iff-fip]], clauses 1 and 2).

[L2] A net has $p$ as a cluster point exactly when it has a subnet converging to $p$ ([[thm-net-cluster-point-iff-convergent-subnet]]).

[L3] A net and its tail filter have the same cluster points, and a filter and its derived net have the same cluster points ([[thm-net-filter-convergence-dictionary]]).

[L4] Every filter extends to an ultrafilter ([[thm-ultrafilter-lemma]]), and every cluster point of an ultrafilter is its limit ([[lem-ultrafilter-cluster-points-are-limits]]).



## Proof

**Proof technique:** direct.

1.1 Suppose $X$ is compact and $\mathcal F$ is a filter. The closed family $\{\overline A:A\in\mathcal F\}$ has the finite-intersection property, because a finite intersection of members of $\mathcal F$ is nonempty and is contained in the corresponding intersection of closures. By [L1], choose $p\in\bigcap_{A\in\mathcal F}\overline A$. [L1]

1.2 If every filter has a cluster point, apply this to a net's tail filter and use [L3]; hence 4 implies 2. By [L2], conditions 2 and 3 are equivalent. [L2, L3]

1.3 Conversely, if every net has a cluster point and $\mathcal F$ is a filter, its derived net has a cluster point, which is also a cluster point of $\mathcal F$ by [L3]. Hence 2 implies 4. [L3]

1.4 Condition 4 implies 5 because an ultrafilter is a filter and [L4] turns its cluster point into a limit. [L4]

1.5 Suppose every ultrafilter converges and let $\mathcal C$ be a family of closed subsets of $X$ with the finite-intersection property. Clause 2 of [L1] gives a filter containing $\mathcal C$, and [L4] extends it to an ultrafilter $\mathcal U$. [L1, L4]

2.1 Every neighbourhood of $p$ meets every $A\in\mathcal F$, since $p\in\overline A$; thus $p$ is a cluster point of $\mathcal F$. Hence 1 implies 4. [step 1.1, L1]

2.2 Let $p$ be a limit of $\mathcal U$. For $C\in\mathcal C$, every neighbourhood of $p$ belongs to $\mathcal U$ and meets $C\in\mathcal U$; therefore $p\in\overline C=C$. Thus $\bigcap\mathcal C\ne\varnothing$, and [L1] gives compactness. [step 1.5, L1]

3.1 The implications in steps 2.1, 1.2, 1.3, 1.4 and 2.2 establish all five equivalences. [step 2.1, step 1.2, step 1.3, step 1.4, step 2.2] ∎
