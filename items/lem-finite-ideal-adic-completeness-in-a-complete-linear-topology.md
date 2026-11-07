---
dependency_level: 0
id: lem-finite-ideal-adic-completeness-in-a-complete-linear-topology
kind: lemma
title: Finite-ideal adic completeness in a complete linear topology
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
- def-dependent-choice
- def-separated-and-complete-filtered-module
- def-adic-completion-of-a-module
proof_strategy: direct
sources:
  references:
  - title: Peter Schneider, The perfectoid open unit disk (2015), §1; complete local
      reconstruction of the adic and filtered arguments
    url: https://www.uni-muenster.de/FB10/u/pschnei/publ/misc/perfectoid-disk.pdf
---

## Statement

Assume Dependent Choice. Let $S$ be a commutative ring with a Hausdorff complete topology having a countable decreasing neighborhood basis of zero consisting of ideals $F_n$, for $n\ge1$. Completeness means that $S\to\varprojlim_nS/F_n$ is an isomorphism. Let $J=(g_1,\ldots,g_r)$ be a finitely generated ideal whose powers tend to zero in this topology: for every $n$ there is $m$ with $J^m\subseteq F_n$. Then $S$ is $J$-adically complete and Hausdorff. In particular this applies to $J=(a)$ whenever $S$ is complete Hausdorff for an ideal $I$ containing $a$. Neither $S$ nor $I$ is assumed Noetherian. Empty generating lists and the zero ring are included.

## Statement references

[Schneider, The perfectoid open unit disk, §1](https://www.uni-muenster.de/FB10/u/pschnei/publ/misc/perfectoid-disk.pdf)

## Facts & Assumptions

**Given:** Dependent Choice and the objects and hypotheses of the Statement.

[A1] Dependent Choice supplies a sequence of successive choices from a serial relation. ([[def-dependent-choice]])

[F1] A countably filtered module is separated when its filtration has intersection zero, and complete when its canonical map to the inverse limit of quotients is an isomorphism. The $J$-adic filtration consists of the powers of $J$. ([[def-separated-and-complete-filtered-module]], [[def-adic-completion-of-a-module]])

## Proof

1.1 Every Cauchy sequence for the given topology converges: for each $n$ its residues modulo $F_n$ are eventually constant, and these constants form a compatible inverse-limit element. Conversely this residue characterization shows convergence to its unique preimage in $S$. The ideals $F_n$ are open and closed, since every coset of each is open. [given, F1, algebra]

1.2 The intersection of the powers of $J$ is zero, since those powers eventually lie in each $F_n$ and the given topology is Hausdorff. If $J=0$, the $J$-adic topology is discrete and its completion map is the identity. Suppose henceforth a finite generating list is given and $J\ne0$. [given, F1, algebra]

2.1 Given a compatible element of $\varprojlim_{n\ge1}S/J^n$, use [A1] to choose representatives $x_n\in S$. Compatibility implies $d_n:=x_{n+1}-x_n\in J^n$. The sequence $(x_n)$ is Cauchy for the original topology, since a tail difference is a finite sum of terms in a prescribed $F_m$ once the powers of $J$ lie there. Let $x\in S$ be its limit by step 1.1. [A1, F1, step 1.1, given, choose, construct]

3.1 Fix $N\ge1$. The finitely many monomials $g^\alpha=g_1^{\alpha_1}\cdots g_r^{\alpha_r}$ with $|\alpha|=N$ generate $J^N$. Since $J^n=J^NJ^{n-N}$ for $n\ge N$, write $d_n=\sum_{|\alpha|=N}g^\alpha c_{\alpha,n}$ with $c_{\alpha,n}\in J^{n-N}$. Choose these finite decompositions for all $n\ge N$ under [A1]. For each $\alpha$ the series $\sum_{n\ge N}c_{\alpha,n}$ is Cauchy in the original linear topology: eventually all its terms lie in any given ideal $F_m$, which then also contains every finite tail sum. By step 1.1 it has a sum $y_\alpha\in S$. Continuity of multiplication by each fixed $g^\alpha$ and finiteness of the monomial list give $x-x_N=\sum_{|\alpha|=N}g^\alpha y_\alpha\in J^N$. [A1, step 2.1, step 1.1, algebra, choose]

4.1 Thus $x$ represents every specified residue modulo $J^N$, proving surjectivity of the completion map. Its injectivity is step 1.2, so [F1] proves $J$-adic completeness. For $J=(a)$ and the $I$-adic original topology, $a^mS\subseteq I^m$, so its powers tend to zero as required. If $S$ is the zero ring all the quotient maps are identities on a singleton. No assertion that a finitely generated ideal is closed in the original topology was used. [F1, step 1.2, step 3.1, algebra] ∎
