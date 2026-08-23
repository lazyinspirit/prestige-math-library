---
id: lem-a-given-ultrafilter-on-a-compact-hausdorff-space-has-a-unique-limit
kind: lemma
title: "A given ultrafilter on a compact Hausdorff space has a unique limit"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-compact-space, def-hausdorff-space, def-filter-convergence-and-cluster-point, def-ultrafilter, thm-compact-iff-fip, lem-ultrafilter-cluster-points-are-limits]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "J. Goubault-Larrecq, Algebras of filter-related monads: I. Ultrafilters and Manes' theorem"
      url: "https://topology.lmf.cnrs.fr/algebras-of-the-filter-related-monads-i-ultrafilters-and-manes-theorem/"
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Corollary 5.5.6"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

Every ultrafilter on a compact Hausdorff space converges to exactly one point. This statement concerns a given ultrafilter and uses no ultrafilter-extension or other choice principle.

## Facts & Assumptions

**Given:** A compact Hausdorff space $X$ and an ultrafilter $\mathcal U$ on $X$.

[L1] Compactness is equivalent to the assertion that every family of closed subsets with the finite-intersection property has nonempty intersection ([[thm-compact-iff-fip]]).

[L2] Every cluster point of an ultrafilter is a limit of that ultrafilter ([[lem-ultrafilter-cluster-points-are-limits]]).

[L3] Distinct points in a Hausdorff space have disjoint open neighbourhoods ([[def-hausdorff-space]]).

## Proof

**Proof technique:** direct.

1.1 The closed members of $\mathcal U$ have the finite-intersection property: a finite intersection remains in the filter and cannot be empty. [given, algebra]

2.1 By compactness and [L1], choose a point $x$ in the intersection of all closed members of $\mathcal U$. If $X=\varnothing$, no ultrafilter exists, so the universal assertion is vacuous. [step 1.1, L1, choose]

3.1 For every $A\in\mathcal U$, its closure also belongs to $\mathcal U$ and contains $x$; hence every neighbourhood of $x$ meets every member of $\mathcal U$. Thus $x$ is a cluster point and therefore a limit by [L2]. [step 2.1, L2]

4.1 If $x$ and $y$ were distinct limits, [L3] would give disjoint open neighbourhoods $V$ of $x$ and $W$ of $y$. Both would belong to $\mathcal U$, forcing $V\cap W=\varnothing$ into the filter, a contradiction. Hence the limit is unique, including in a singleton space. [step 3.1, L3, algebra] ∎
