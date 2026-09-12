---
id: prop-failure-of-separatedness-or-completeness-can-destroy-the-claimed-abutment
kind: proposition
title: Failure of separatedness or completeness can destroy the claimed abutment
status: published
origin: pipeline
pipeline_run: phase-2-next-20
deps: ["lem-countable-sequence-groups-and-tail-filtrations", "def-r-page-of-the-spectral-sequence-of-a-filtered-complex", "def-weak-convergence-of-a-spectral-sequence", "def-strong-convergence-of-a-spectral-sequence", "lem-abelian-group-model-for-spectral-sequence-computations", "lem-the-filtered-differential-induces-d-r-on-the-r-page", "thm-the-next-page-is-the-homology-of-the-current-page", "def-induced-filtration-on-homology"]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra, Chapter 5"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
    - title: "The Stacks Project, Homological Algebra"
      url: "https://stacks.math.columbia.edu/download/homology.pdf"
---

## Statement

Failure of separatedness or completeness can invalidate recovery of a claimed target from the limiting page. There is a nonseparated filtered complex with nonzero homology and every spectral page zero. There is a separated exhaustive, but incomplete, filtered complex with $E^1=0$ and nonzero homology. An object and its completion can also have the same associated-graded spectral pages and nonisomorphic homology targets. All three examples below are choice-free.

## Facts & Assumptions

[F1] [[lem-countable-sequence-groups-and-tail-filtrations]] gives $k=\mathbb Z/2$, the finite-support group $S\subset P=k^{\mathbb N}$, their tails $T_m$, quotients $k^m$, separatedness, completions and different cardinalities.

[F2] [[lem-abelian-group-model-for-spectral-sequence-computations]] licenses the abelian-group complexes and their subgroup kernels and coset homology quotients.

[F3] [[def-r-page-of-the-spectral-sequence-of-a-filtered-complex]], [[lem-the-filtered-differential-induces-d-r-on-the-r-page]] and [[thm-the-next-page-is-the-homology-of-the-current-page]] give the graded initial page, induced differential and homology transitions.

[F4] [[def-induced-filtration-on-homology]] uses actual homology images. [[def-weak-convergence-of-a-spectral-sequence]] identifies only the graded target; [[def-strong-convergence-of-a-spectral-sequence]] additionally requires separation and completeness.

## Proof

**Given:** The groups in [F1]. All omitted chain degrees are zero.

1.1 Put $C_0=k$ with zero differential and $F_pC_0=k$ for every integer $p$. Each graded quotient is $k/k=0$, so $E^0=0$ and every later page is zero by successive homology. But $H_0(C)=k$ and every homology filtration term equals $k$, whose intersection is nonzero. The zero limiting page agrees with the zero associated graded of this target; it does not imply that the target is zero. Thus this is weak convergence without separatedness or strong convergence. [F2, F3, F4]

1.2 Next take $C_1=S$, $C_0=P$, with differential the inclusion. On either nonzero degree set $F_{-m}C_j=T_mC_j$ for $m\ge0$ and $F_pC_j=C_j$ for $p>0$. The inclusion preserves every tail, so these are subcomplexes. The filtration is increasing and exhaustive because $F_0C=C$. Its intersection is zero in both degrees, but its degree-one completion map is the proper inclusion $S\to P$; hence the filtered complex is incomplete. [F1, F2]

2.1 For $p=-m\le0$, the successive quotient in either nonzero chain degree is $T_m/T_{m+1}\cong k$, by the coordinate $m$ map with zero-extension inverse. The induced differential between these two graded terms is the identity of $k$. For $p>0$ the quotient is zero. Thus every fixed-$p$ graded complex is either $k\xrightarrow{1}k$ in degrees $1,0$ or the zero complex; its homology vanishes. Hence $E^1=0$, and all later pages vanish. In contrast $H_1(C)=0$ and $H_0(C)=P/S$; the constant-one sequence gives a nonzero class because it is not finitely supported. [F1, F2, F3, step 1.2]

3.1 Every $x\in P$ differs from its tail obtained by deleting coordinates $0,\ldots,m-1$ by an element of $S$. Thus $T_mP\to P/S$ is surjective for every $m$, and the induced homology filtration has $F_pH_0(C)=P/S$ for every integer $p$. This explains the lost target: the limiting zero page agrees with a zero associated graded, while the homology filtration is nonseparated. The chain complex's incompleteness was already checked in step 1.2; no complete-convergence theorem applies to it. [F1, F4, step 1.2, step 2.1]

4.1 Finally take the zero-differential complexes $S[0]$ and $P[0]$ with the same tail filtrations. Their associated-graded terms are $k$ at $(p,q)=(-m,m)$ for each $m\ge0$, and zero elsewhere. Every spectral differential is zero because the chain differential is zero, so these graded identifications persist on every page. Their homology targets are respectively $S$ and $P$, which are not isomorphic even as sets by [F1]. The inclusion induces the page isomorphisms and is the completion map, but is not onto on homology. Thus equal graded pages cannot replace the missing completeness hypothesis. The initial level $m=0$, zero positive levels and empty deleted prefix all satisfy the displayed formulas. Every construction uses fixed coordinates or finite truncations, without AC. [F1, F3, F4, step 2.1] ∎
