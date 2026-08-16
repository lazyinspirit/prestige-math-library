---
id: thm-power-ranks-determine-nilpotent-jordan-blocks
kind: theorem
title: "Power ranks determine every nilpotent Jordan-block multiplicity"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-nilpotent-jordan-string-basis, lem-kernel-and-rank-sequences-of-powers, def-rank-and-nullity, thm-rank-nullity]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "S. Treil, Linear Algebra Done Wrong, Chapter 9, Sections 4.3-4.4"
      url: "https://www.math.brown.edu/streil/papers/LADW/LADW_2017-09-04.pdf"
pipeline_run: null
---

## Statement

Let $N$ be nilpotent on a finite-dimensional vector space. Put $d_k=\dim\ker N^k$ and $\rho_k=\operatorname{rank}N^k$ for $k\ge0$, so $d_0=0$ and $\rho_0=\dim V$. For every $k\ge1$,
$$\#\{\text{blocks of size at least }k\}=d_k-d_{k-1}=\rho_{k-1}-\rho_k,$$
and
$$\#\{\text{blocks of size exactly }k\}=2d_k-d_{k-1}-d_{k+1}=\rho_{k-1}-2\rho_k+\rho_{k+1}.$$
Thus either the nullities or the ranks of all powers determine the multiset of nilpotent Jordan blocks. On the zero space all sequences are zero and the block multiset is empty.

## Facts & Assumptions

**Given:** A nilpotent endomorphism $N$ of a finite-dimensional vector space.

[L1] There is a basis in which $N$ is a direct sum of nilpotent Jordan blocks ([[thm-nilpotent-jordan-string-basis]]).

[L2] For every $k\ge0$, $\ker T^k\subseteq\ker T^{k+1}$ and $\operatorname{im}T^{k+1}\subseteq\operatorname{im}T^k$; and if $\ker T^m=\ker T^{m+1}$ for some $m\ge0$ — equivalently $\operatorname{rank}T^m=\operatorname{rank}T^{m+1}$ — then $\ker T^{m+r}=\ker T^m$ and $\operatorname{im}T^{m+r}=\operatorname{im}T^m$ for every $r\ge0$ ([[lem-kernel-and-rank-sequences-of-powers]]).

[L3] Nullity and rank are the dimensions of the kernel and image ([[def-rank-and-nullity]]).

[L4] Rank-nullity gives $\dim V=\dim\ker S+\dim\operatorname{im}S$ for every endomorphism $S$ of $V$ ([[thm-rank-nullity]]).

## Proof

**Proof technique:** direct.

1.1 On a block $J_m(0)$, $\dim\ker J_m(0)^k=\min(k,m)$; its contribution to $d_k-d_{k-1}$ is therefore $1$ exactly when $m\ge k$, and $0$ otherwise. Summing across the block basis from [L1] gives the first nullity formula. [L1, L3, algebra]

2.1 Subtracting the number of blocks of size at least $k+1$ from the number of blocks of size at least $k$ gives $2d_k-d_{k-1}-d_{k+1}$ blocks of exact size $k$. [step 1.1, algebra]

3.1 Fact [L4] gives $d_k+\rho_k=\dim V$ for every $k$, so replacing each $d_k$ in steps 1.1-2.1 gives the two rank formulas. For the tail, first dispose of $V=0$: there the block multiset is empty, every $d_k$ and $\rho_k$ is zero, and both formulas read $0=0$. So assume $V\ne0$, in which case the basis of [L1] has at least one block and a largest block size $m^*$ exists; step 1.1 gives $\dim\ker J_m(0)^k=\min(k,m)=m$ for every block and every $k\ge m^*$, so $d_k=\dim V$ and $\rho_k=0$ for all $k\ge m^*$. In particular $\ker N^{m^*}=\ker N^{m^*+1}$, which is the hypothesis of [L2], and [L2] then gives the stabilised tail beyond the largest block. [step 1.1, step 2.1, L1, L2, L3, L4, algebra]

4.1 These formulas recover every block multiplicity, including size one and the endpoint after the largest block; when $V=0$ each quantity and each recovered multiplicity is zero. [step 1.1, step 2.1, step 3.1] ∎
