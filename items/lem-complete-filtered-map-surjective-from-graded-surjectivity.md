---
dependency_level: 0
id: lem-complete-filtered-map-surjective-from-graded-surjectivity
kind: lemma
title: Surjectivity of a complete filtered map from its graded maps
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
- def-dependent-choice
- def-separated-and-complete-filtered-module
proof_strategy: direct
sources:
  references:
  - title: Peter Schneider, The perfectoid open unit disk (2015), §1; complete local
      reconstruction of the adic and filtered arguments
    url: https://www.uni-muenster.de/FB10/u/pschnei/publ/misc/perfectoid-disk.pdf
---

## Statement

Assume Dependent Choice. Let $A=F_0A\supseteq F_1A\supseteq\cdots$ and $B=G_0B\supseteq G_1B\supseteq\cdots$ be decreasing filtrations by subgroups of abelian groups. Assume $A$ is separated and complete and $\bigcap_nG_nB=0$. Let $f:A\to B$ be a homomorphism with $f(F_nA)\subseteq G_nB$. If every induced map $F_nA/F_{n+1}A\to G_nB/G_{n+1}B$ is surjective, for $n\ge0$, then $f$ is surjective. No completeness assumption on $B$ is needed.

## Statement references

[Schneider, The perfectoid open unit disk, §1](https://www.uni-muenster.de/FB10/u/pschnei/publ/misc/perfectoid-disk.pdf)

## Facts & Assumptions

**Given:** Dependent Choice and the objects and hypotheses of the Statement.

[A1] Dependent Choice supplies a sequence of successive choices from a serial relation. ([[def-dependent-choice]])

[F1] Separatedness and completeness are the intersection-zero and inverse-limit-isomorphism conditions for a countable filtration; abelian groups are modules over $\mathbb Z$. ([[def-separated-and-complete-filtered-module]])

## Proof

1.1 Fix $b\in B$. Starting with residual $r_0=b\in G_0B$, graded surjectivity lets us choose $a_n\in F_nA$ such that $r_n-f(a_n)\in G_{n+1}B$ whenever $r_n\in G_nB$. Set $r_{n+1}=r_n-f(a_n)$. This serial recursion has an infinite sequence under [A1]. The partial sums $s_N=\sum_{n<N}a_n$ satisfy $b-f(s_N)=r_N\in G_NB$. [A1, given, choose, construct]

2.1 The partial sums are Cauchy for the $F$-filtration and hence converge to $a\in A$ by [F1]. For every $N$, the difference $a-s_N$ lies in $F_NA$: later differences lie there and an open subgroup in the filtration topology is closed. Therefore $f(a)-f(s_N)\in G_NB$, and step 1.1 gives $b-f(a)\in G_NB$. Intersecting over $N$ and using separatedness of $B$ yields $f(a)=b$. [F1, step 1.1, given, algebra]

3.1 Since $b$ was arbitrary, $f$ is surjective. If $A=0$, graded surjectivity gives $G_nB=G_{n+1}B$ for every $n$, and separatedness forces $B=0$, consistent with the proof. Finite or eventually constant filtrations require no separate limiting assumption. [step 2.1, given, algebra] ∎
