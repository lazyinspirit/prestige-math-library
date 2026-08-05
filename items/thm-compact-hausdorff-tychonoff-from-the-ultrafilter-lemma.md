---
id: thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma
kind: theorem
title: "Assuming the ultrafilter lemma, an arbitrary product of compact Hausdorff spaces is compact"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-universal-net-cluster-points-are-limits, lem-continuous-images-of-universal-nets-are-universal, cor-compactness-via-universal-nets, thm-compactness-via-nets-filters-and-ultrafilters, def-product-topology, thm-product-universal-property, def-hausdorff-space, thm-hausdorff-iff-net-limits-are-unique]
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "WVU Math 581 Topology I"
      url: "https://math.wvu.edu/~jwojciec/teaching_files/2024_Spring-581/index.html"
    - title: "Tychonoff's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Tychonoff%27s_theorem"
    - title: "Boolean prime ideal theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Boolean_prime_ideal_theorem"
    - title: "Net (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Net_(mathematics)"
pipeline_run: null
---

## Statement

**Assume the ultrafilter lemma.** If $(X_i)_{i\in I}$ is any family of compact Hausdorff spaces, then $\prod_{i\in I}X_i$, with its product topology, is compact.

## Facts & Assumptions

**Given:** Compact Hausdorff spaces $X_i$, their product $P$, and a universal net $x_d$ in $P$.

[L1] A continuous image of a universal net is universal ([[lem-continuous-images-of-universal-nets-are-universal]]).

[L2] Assuming the ultrafilter lemma, a space is compact if and only if every universal net in it converges ([[cor-compactness-via-universal-nets]]).

[L3] In a Hausdorff space a net has at most one limit ([[thm-hausdorff-iff-net-limits-are-unique]]).

[L4] Basic product neighbourhoods restrict only finitely many coordinates ([[def-product-topology]]).



## Proof

**Proof technique:** constructive.

1.1 For every $i\in I$, the projection $\pi_i$ is continuous, so $\pi_i(x_d)$ is universal by [L1] and converges in compact $X_i$ by [L2]. Its limit $p_i$ is unique by [L3]. [L1, L2, L3]

2.1 The uniqueness in step 1.1 defines a point $p\in\prod_{i\in I}X_i$, namely the function $i\mapsto p_i$, rather than choosing a family of limits. [step 1.1, L3, construct]

2.2 Let $N$ be a neighbourhood of $p$ in $P$. By [L4], it contains a basic product neighbourhood restricting a finite set $J\subseteq I$; for each $i\in J$, the coordinate net is eventually in its prescribed neighbourhood of $p_i$. Directedness supplies one index after the finitely many thresholds, and after it $x_d\in N$. Thus $x_d\to p$. [step 1.1, L4]

3.1 Every universal net in $P$ converges by step 2.2. The converse direction of [L2] therefore makes $P$ compact. [step 2.2, L2, discharge-construct] ∎
