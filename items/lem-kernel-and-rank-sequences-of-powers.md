---
id: lem-kernel-and-rank-sequences-of-powers
kind: lemma
title: "Kernel and rank sequences of powers stabilise once equality occurs"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-kernel-and-image-of-a-linear-map, def-rank-and-nullity, thm-rank-nullity]
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Results 8.1-8.3"
      url: "https://linear.axler.net/LADR4e.pdf"
pipeline_run: null
---

## Statement

Let $T$ be an endomorphism of a finite-dimensional vector space $V$. For every $k\ge0$,
$$\ker T^k\subseteq\ker T^{k+1},\qquad \operatorname{im}T^{k+1}\subseteq\operatorname{im}T^k,$$
so the nullities weakly increase and the ranks weakly decrease. If $\ker T^m=\ker T^{m+1}$ for some $m\ge0$—equivalently, if $\operatorname{rank}T^m=\operatorname{rank}T^{m+1}$—then for every $r\ge0$,
$$\ker T^{m+r}=\ker T^m,\qquad \operatorname{im}T^{m+r}=\operatorname{im}T^m.$$

## Facts & Assumptions

**Given:** An endomorphism $T$ of a finite-dimensional vector space $V$.

[L1] The kernel and image of a linear map are $\ker S=\{v:S(v)=0\}$ and $\operatorname{im}S=\{S(v):v\in V\}$ ([[def-kernel-and-image-of-a-linear-map]]).

[L2] Rank and nullity are the dimensions of the image and kernel ([[def-rank-and-nullity]]).

[L3] For an endomorphism $S$ of $V$, $\dim V=\operatorname{nullity}S+\operatorname{rank}S$ ([[thm-rank-nullity]]).

## Proof

**Proof technique:** induction.

1.1 If $T^kv=0$, then $T^{k+1}v=0$, and every $T^{k+1}v$ equals $T^k(Tv)$; hence the displayed kernel and image inclusions hold, and [L2] turns them into the asserted dimension inequalities. [L1, L2, algebra]

1.2 Assume $\ker T^m=\ker T^{m+1}$. The equality $\ker T^{m+0}=\ker T^m$ is the base case. [base]

2.1 By [L3], equality of the two consecutive kernel dimensions is equivalent to equality of the two consecutive ranks; together with the inclusions in step 1.1, either dimension equality is equivalent to equality of the corresponding subspaces. [step 1.1, L2, L3]

2.2 If $\ker T^{m+r}=\ker T^m$ and $v\in\ker T^{m+r+1}$, then $T^rv\in\ker T^{m+1}=\ker T^m$, so $v\in\ker T^{m+r}$; the reverse inclusion is in step 1.1, completing the induction on $r$. [step 1.1, ih]

3.1 Applying [L3] to every $T^{m+r}$ shows that the later images all have the same dimension as $\operatorname{im}T^m$; the nested image inclusions from step 1.1 therefore make them equal, completing the claim. [step 1.1, step 1.2, step 2.2, L3, discharge-induction] ∎
