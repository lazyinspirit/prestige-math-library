---
id: thm-finite-group-randomization-validity
kind: theorem
title: "Finite-group orbit-rank validity"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps:
  - def-finite-group-randomization-test
  - def-orbit-rank-p-value
  - lem-finite-multiset-randomized-rank-is-uniform
  - def-finite-probability-space-and-event
  - lem-finite-probability-basic-laws
  - def-conditional-probability
  - def-independent-random-elements
proof_strategy: direct
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Peter B. Stark, Statistics 240 Lecture Notes, Part 8: Resampling Methods, §1.3, PDF pp. 10–11"
      url: "https://www.stat.berkeley.edu/~stark/Teach/S240/Notes/ch8.pdf"
    - title: "Jesse Hemerik and Jelle Goeman, Exact testing with random permutations, Sections 2–3"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6405018/"
---

## Statement

In a finite-group randomization setup, fix a null law invariant under the group action. Conditional on every orbit $O$ with positive probability, the data are uniform on the distinct points of $O$. For the orbit ranks of [[def-orbit-rank-p-value]], the inclusive p-value $p_0$ is superuniform under the null, and the independent-uniform tie-randomized value $p_U$ is Uniform$(0,1)$ conditionally on each positive-probability orbit. Consequently, $p_U$ is also Uniform$(0,1)$ unconditionally.

## Facts & Assumptions

**Given:** A finite set $\Omega$, finite group $G$ acting on $\Omega$, statistic $T$, invariant null law $P$, and the two orbit-rank definitions.

[F1] A finite-group randomization setup specifies a finite probability space, a finite group action, a statistic, and null-law invariance under every group element. [[def-finite-group-randomization-test]]

[F2] The inclusive and tie-randomized orbit ranks count group elements with multiplicity and divide by $|G|$. [[def-orbit-rank-p-value]]

[F3] In a finite probability space, event probability is the sum of outcome weights; positive-probability conditioning uses the ratio definition. [[def-finite-probability-space-and-event]], [[def-conditional-probability]], [[lem-finite-probability-basic-laws]]

[F4] For a list of $m$ real values, the tie-randomized upper rank is uniform and its inclusive upper rank is superuniform when the index is uniform. [[lem-finite-multiset-randomized-rank-is-uniform]]

[F5] The tie randomizer is independent of the observed data. [[def-independent-random-elements]]

[A1] Every null law in the statement satisfies the invariance condition in [F1].

[A2] The independent tie randomizer has the uniform law on $[0,1]$, as stipulated by the Statement.

## Proof

1.1 Fix a positive-probability orbit $O$ and points $x,y\in O$. Choose $h\in G$ with $y=h\cdot x$. Invariance gives $P(X=y)=P(h\cdot X=y)=P(X=h^{-1}\cdot y)=P(X=x)$. Thus all $|O|$ distinct points have equal mass; by [F3] their conditional probabilities given $X\in O$ are each $1/|O|$. [A1, F1, F3, given, choose, algebra]

2.1 For fixed $x\in O$, define its stabilizer $G_x:=\{g\in G:g\cdot x=x\}$. If $y=h\cdot x$, then $\{g:g\cdot x=y\}=hG_x$: every $hg$ with $g\in G_x$ sends $x$ to $y$, and if $g\cdot x=y$ then $h^{-1}g\in G_x$. Hence every distinct point of $O$ occurs exactly $|G_x|$ times in the group-transformed list. The strict and tied counts and denominator in [F2] all have this same factor, so the group-average ranks equal the ranks computed on the distinct orbit points. [F1, F2, step 1.1, construct, algebra]

3.1 Conditional on $O$, [step 1.1] makes the observed orbit point a uniform index in the finite list $(T(y))_{y\in O}$. By [F5] and [A2], the randomizer remains independent and uniform. Apply [F4] to this list and use [step 2.1]: $p_U$ is Uniform$(0,1)$ and $P(p_0\le u\mid X\in O)\le u$ for every $u\in[0,1]$. [F2, F4, F5, A2, step 1.1, step 2.1]

4.1 The positive-probability orbits form a finite partition up to null orbits. Summing the conditional superuniform bounds from step 3.1 with weights $P(X\in O)$ gives $P(p_0\le u)\le u$; summing the conditional uniform laws gives $p_U\sim\operatorname{Unif}(0,1)$. The argument applies to each invariant null law. Only finite counting is used, so no choice axiom is needed. [step 3.1, F3, algebra] ∎
