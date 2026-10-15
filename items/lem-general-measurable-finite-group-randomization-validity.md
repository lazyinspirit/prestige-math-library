---
id: lem-general-measurable-finite-group-randomization-validity
kind: lemma
title: Finite-group rank validity on a measurable sample space
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-group
  - def-group-action
  - lem-finite-multiset-randomized-rank-is-uniform
  - def-independent-random-elements
  - def-measurable-function-between-measurable-spaces
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - thm-arithmetic-and-lattice-operations-preserve-measurability
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Jesse Hemerik and Jelle Goeman, Exact Testing with Random Permutations, Sections 2–3"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6405018/"
    - title: "Peter B. Stark, Statistics 240 Lecture Notes, Part 8: Resampling Methods, §1.3"
      url: "https://www.stat.berkeley.edu/~stark/Teach/S240/Notes/ch8.pdf"
---

## Statement

Let a finite group $G$ act on a measurable space $(\mathsf S,\mathcal S)$ by
measurable maps, and let $P$ be an invariant probability law: $P(g^{-1}A)=P(A)$
for every $g\in G$ and $A\in\mathcal S$. For a measurable statistic
$T:\mathsf S\to\mathbb R$, define

$$p_0(x)=\frac{\#\{g\in G:T(g\cdot x)\ge T(x)\}}{|G|},\qquad p_U(x,u)=\frac{\#\{g:T(g\cdot x)>T(x)\}+u\#\{g:T(g\cdot x)=T(x)\}}{|G|}.$$

If $X\sim P$ and $U$ is independent uniform on $[0,1]$, then $p_0(X)$ is
superuniform and $p_U(X,U)$ is uniform on $[0,1]$. The sample space need not
be finite; only the acting group is finite.

## Facts & Assumptions

**Given:** A finite group action by measurable maps, an invariant probability law, a measurable real statistic, and an independent uniform tie randomizer.

[F1] [[def-group]] and [[def-group-action]]: $G$ is a group acting with $e\cdot x=x$ and $(gh)\cdot x=g\cdot(h\cdot x)$; hence right multiplication by a fixed element is a bijection of $G$.

[F2] [[def-measurable-function-between-measurable-spaces]]: the action maps and $T$ are measurable. [[def-product-sigma-algebra-and-finite-product-sigma-algebras]] makes the coordinate projections on $\mathsf S\times[0,1]$ measurable, and [[thm-arithmetic-and-lattice-operations-preserve-measurability]] preserves measurability under the finite sums and products in the rank formulas.

[F3] [[lem-finite-multiset-randomized-rank-is-uniform]]: for a finite list of real numbers, an independent uniform index gives a superuniform inclusive upper rank and a uniform tie-randomized upper rank.

[F4] [[def-independent-random-elements]]: the uniform group element and the tie randomizer are independent of the data and of each other.

## Proof

**Given:** The hypotheses in the Statement. Prove both rank conclusions.

1.1 Fix $x\in\mathsf S$ and form the finite list $(T(g\cdot x))_{g\in G}$. For any $h\in G$, the list $(T(g\cdot(h\cdot x)))_{g\in G}$ has exactly the same multiset of values, because right multiplication $g\mapsto gh$ is a bijection of $G$ by [F1]. Therefore, when $H$ is uniform on $G$, $p_0(H\cdot x)$ and $p_U(H\cdot x,U)$ are exactly the inclusive and tie-randomized ranks of a uniform index in this list. [F1, F3, construct]

1.2 For each $g$, $x\mapsto T(g\cdot x)$ is measurable by [F2]. Its difference from $T(x)$ is measurable, so the indicators of the strict and equal comparisons are measurable; finite sums and products with the second coordinate $u$ remain measurable by [F2]. Thus $p_0$ and the joint map $(x,u)\mapsto p_U(x,u)$ are measurable. [F2, given, algebra]

1.3 Let $H$ be uniform on $G$, independent of $(X,U)$. For every measurable $A$, $P(H\cdot X\in A)=|G|^{-1}\sum_{h\in G}P(X\in h^{-1}A)=P(A)$ by invariance. Since $H$ is independent of $U$, the pair $(H\cdot X,U)$ has the same law as $(X,U)$. [F4, given, algebra]

2.1 For each fixed $x$, steps 1.1–1.2 and [F3] give $P_H(p_0(H\cdot x)\le t)\le t$ for $0\le t\le1$, and $p_U(H\cdot x,U)$ is uniform. Integrating these statements over $X$, then using equality in law from step 1.3, proves the two conclusions for $p_0(X)$ and $p_U(X,U)$. No choice principle is used: all group averages and ranks are finite. [F3, step 1.1, step 1.2, step 1.3, algebra] ∎
