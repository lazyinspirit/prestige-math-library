---
id: thm-sigma-algebra-generated-by-a-countable-partition
kind: theorem
title: "A countable partition generates exactly the unions of its blocks, and the resulting sigma-algebra is countable exactly for a finite partition"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-generated-sigma-algebra-exists-and-is-minimal, def-countable, lem-subset-of-countable, thm-cantor-powerset, thm-schroder-bernstein, def-sigma-algebra]
aliases: []
landmark: true
short: "Sigma-algebra of a partition"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. F. Bass, Real Analysis for Graduate Students, version 5.0, Examples 2.4-2.6"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
    - title: "T. Tao, An Introduction to Measure Theory, Exercise 1.4.10"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Statement

Let $(P_i)_{i\in I}$ be an at most countable partition of $X$: its blocks are
nonempty and pairwise disjoint, and their union is $X$. Then

$$\sigma_X(\{P_i:i\in I\})=\left\{\bigcup_{i\in S}P_i:S\subseteq I\right\}.$$

The map $S\mapsto\bigcup_{i\in S}P_i$ is a bijection from $\mathcal P(I)$ onto
this sigma-algebra. If $I$ has $k$ members, the sigma-algebra has $2^k$ members,
including $k=0$ when $X=\varnothing$. The generated sigma-algebra is at most
countable if and only if the partition is finite.

## Facts & Assumptions

**Given:** An at most countable partition $(P_i)_{i\in I}$ of $X$.

[L1] A generated sigma-algebra is the smallest sigma-algebra containing its generators ([[thm-generated-sigma-algebra-exists-and-is-minimal]]).

[L2] At most countable means finite or countably infinite ([[def-countable]]), and a sigma-algebra is closed under countable unions ([[def-sigma-algebra]]).

[L3] A set is not equinumerous with its power set ([[thm-cantor-powerset]]), and injections both ways imply equinumerosity ([[thm-schroder-bernstein]]).

[L4] Every subset of an at most countable set is at most countable ([[lem-subset-of-countable]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathcal U:=\{\bigcup_{i\in S}P_i:S\subseteq I\}$. The empty union is empty; the complement of the union indexed by $S$ is the union indexed by $I\setminus S$; and countable unions correspond to unions of the indexing subsets. Thus $\mathcal U$ is a sigma-algebra containing every block. [given, algebra]

2.1 By [L1], $\sigma_X(\{P_i:i\in I\})\subseteq\mathcal U$. Conversely, every $S\subseteq I$ is at most countable by [L4], so $\bigcup_{i\in S}P_i$ is a countable union of generators and belongs to the generated sigma-algebra by [L2]. Hence equality holds. [step 1.1, L1, L2, L4]

3.1 Pairwise disjointness and nonemptiness make $S\mapsto\bigcup_{i\in S}P_i$ injective, and step 2.1 makes it surjective. For $|I|=k<\infty$, its domain has $2^k$ members; when $k=0$, the partition is possible exactly for $X=\varnothing$ and the sigma-algebra is $\{\varnothing\}$. [step 2.1, construct]

4.1 If $I$ is countably infinite and the generated sigma-algebra were at most countable, step 3.1 would inject $\mathcal P(I)$ into $\mathbb N$. Since $I\approx\mathbb N$, [L3] would then force $I\approx\mathcal P(I)$, contradicting Cantor's theorem. Together with the finite case of step 3.1, this proves both directions of the final equivalence. [step 3.1, L2, L3] ∎
