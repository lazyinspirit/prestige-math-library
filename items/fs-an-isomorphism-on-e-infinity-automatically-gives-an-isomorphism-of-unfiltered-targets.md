---
id: fs-an-isomorphism-on-e-infinity-automatically-gives-an-isomorphism-of-unfiltered-targets
kind: false-statement
title: An isomorphism on e infinity automatically gives an isomorphism of unfiltered targets
status: published
origin: pipeline
pipeline_run: phase-2-next-20
deps: ["lem-countable-sequence-groups-and-tail-filtrations", "def-r-page-of-the-spectral-sequence-of-a-filtered-complex", "thm-spectral-sequence-comparison-theorem", "prop-failure-of-separatedness-or-completeness-can-destroy-the-claimed-abutment", "lem-the-filtered-differential-induces-d-r-on-the-r-page"]
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

**False:** An isomorphism on $E^\infty$ automatically makes a compatible unfiltered target map an isomorphism, without finite or complete separated filtration hypotheses.

## Facts & Assumptions

[F1] [[lem-countable-sequence-groups-and-tail-filtrations]] constructs the inclusion $S\subset P$ of finite-support into all binary sequences, with separated tails, common completion $P$ and finite quotient identifications.

[F2] [[def-r-page-of-the-spectral-sequence-of-a-filtered-complex]] gives the graded initial page; [[lem-the-filtered-differential-induces-d-r-on-the-r-page]] gives its differentials from the chain differential. [[prop-failure-of-separatedness-or-completeness-can-destroy-the-claimed-abutment]] establishes the possible failure of recovery from these pages.

[F3] [[thm-spectral-sequence-comparison-theorem]] requires compatible target maps and finite or exhaustive separated complete target filtrations for its lifting conclusion.

## Refutation

**Given:** The inclusion $f:S[0]\to P[0]$ of complexes concentrated in degree zero, filtered by $F_{-m}=T_m$ for $m\ge0$ and the whole group for positive indices.

1.1 The induced graded map at $p=-m$ is the identity on $k=\mathbb Z/2$ via the coordinate $m$ identification $T_m/T_{m+1}\cong k$. All positive graded pieces are zero. Since both chain differentials vanish, every page differential is zero and these identifications persist on every page, including $E^\infty$ at positions $(-m,m)$. The homology targets are $S$ and $P$ themselves, with the same tails, and the induced target map is the inclusion. Its graded maps are precisely the page maps, so compatibility is satisfied. [F1, F2]

2.1 The constant-one sequence in $P$ is not in $S$, so this compatible target map is not surjective. Both filtrations are exhaustive ($F_0$ is full) and separated, but the source completion map is this same proper inclusion $S\to P$, hence is not an isomorphism. Thus the finite or complete-target lifting premise of [F3] fails on the source, while the limiting-page isomorphism holds. The index $m=0$ and zero positive levels were included in step 1.1, and the counterexample is choice-free. [F1, F3, step 1.1] ∎
