---
id: cex-an-exhaustive-nonseparated-filtration-with-the-wrong-naive-abutment
kind: counterexample
title: An exhaustive nonseparated filtration with the wrong naive abutment
status: draft
origin: pipeline
pipeline_run: phase-2-next-20
deps: ["prop-failure-of-separatedness-or-completeness-can-destroy-the-claimed-abutment", "lem-abelian-group-model-for-spectral-sequence-computations", "lem-countable-sequence-groups-and-tail-filtrations", "def-induced-filtration-on-homology", "def-r-page-of-the-spectral-sequence-of-a-filtered-complex", "lem-the-filtered-differential-induces-d-r-on-the-r-page", "thm-the-next-page-is-the-homology-of-the-current-page"]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
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

## Statement refuted

It is false that an exhaustive filtered complex with zero limiting page must have zero actual homology. A nonseparated chain filtration gives one counterexample; an exhaustive separated but incomplete chain filtration gives another.

## Facts & Assumptions

[F1] [[lem-abelian-group-model-for-spectral-sequence-computations]] supplies $k=\mathbb Z/2$ and subgroup homology quotients. [[lem-countable-sequence-groups-and-tail-filtrations]] supplies $S\subset P$, tails $T_m$ and the proper completion $S\to P$.

[F2] [[def-r-page-of-the-spectral-sequence-of-a-filtered-complex]], [[lem-the-filtered-differential-induces-d-r-on-the-r-page]] and [[thm-the-next-page-is-the-homology-of-the-current-page]] give the graded page, its differential and successive homology pages.

[F3] [[def-induced-filtration-on-homology]] uses images in actual homology. [[prop-failure-of-separatedness-or-completeness-can-destroy-the-claimed-abutment]] distinguishes these failures from legitimate weak graded identifications.

## Counterexample

**Given:** First $C=k[0]$ with $F_pC=C$ at every integer index; second the inclusion complex $K_1=S\hookrightarrow K_0=P$ with $F_{-m}=T_m$ for $m\ge0$ and full positive pieces.

1.1 In the first example every graded quotient is $k/k=0$, so every page is zero. But $H_0(C)=k\ne0$ and $F_pH_0(C)=k$ for every $p$, by the identity inclusion of the whole subcomplex. Its filtration is exhaustive, nonseparated, and has zero associated graded. Thus its zero limiting page can identify with its zero graded homology without implying zero homology. The filtration is not finite, since no piece is zero. [F1, F2, F3]

1.2 In the second example the inclusion preserves every tail, so the pieces are subcomplexes. Both chain filtrations are exhaustive ($F_0$ is full) and separated, but the degree-one completion map is the nonsurjective $S\to P$. At $p=-m$ each of the degree-one and degree-zero graded groups is $T_m/T_{m+1}=k$ via coordinate $m$, and the graded differential is the identity. At $p>0$ both graded groups are zero. Therefore $E^1(K)=0$ and every later page vanishes. [F1, F2]

2.1 The inclusion is injective, so $H_1(K)=0$, while $H_0(K)=P/S$. The constant-one sequence represents a nonzero class. For any $x\in P$ and any $m$, delete its first $m$ coordinates to obtain $t\in T_mP$. The difference $x-t$ has finite support, so $[x]=[t]$ in $P/S$. Thus the homology image of every tail subcomplex is all of $P/S$, and $F_pH_0(K)=P/S$ at every index. The chain filtration was separated, but its homology filtration is not. This example fails chain completeness and finite bounds; the first fails separation already on chains. Neither is a counterexample to a theorem that requires these missing hypotheses. Empty deleted prefixes at $m=0$, zero other degrees and every positive filtration index obey the same calculations, without AC. [F1, F3, step 1.1, step 1.2] ∎
