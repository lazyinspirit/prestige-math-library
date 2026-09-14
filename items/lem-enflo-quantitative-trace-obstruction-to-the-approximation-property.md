---
id: lem-enflo-quantitative-trace-obstruction-to-the-approximation-property
kind: lemma
title: "Enflo's quantitative localized-trace obstruction"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-enflo-finite-support-localized-trace-system, def-approximation-property-and-bounded-approximation-property]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Per Enflo, A counterexample to the approximation problem in Banach spaces"
      url: "https://projecteuclid.org/journals/acta-mathematica/volume-130/issue-none/A-counterexample-to-the-approximation-problem-in-Banach-spaces/10.1007/BF02392270.pdf"
      locator: "Lemmas 1-3 and complete proofs, pp.310-311"
pipeline_run: phase-2-next-18
---

## Statement

Let $B$ have a dense linearly independent generator with property A. Suppose
there are pairwise disjoint nonempty finite subsets $M_m$ of the generator and
constants $a>1$, $K>0$ such that

$$|M_{m+1}|>|M_m|^a$$

and, for every bounded finite-expansion operator $T$,

$$\left|\widetilde{\operatorname{Tr}}(M_{m+1},T) -\widetilde{\operatorname{Tr}}(M_m,T)\right| \le \frac{K\|T\|}{\log |M_m|}.$$

Then every bounded finite-rank operator $T$ satisfies

$$\|I-T\|_{(M_m)}\ge 1-\frac{C\|T\|}{\log |M_m|}, \qquad C:=\frac{K}{1-a^{-1}}.$$

Consequently $B$ has no $\lambda$-BAP for any finite $\lambda$.

## Facts & Assumptions

[L1] Finite-expansion matrices, normalized localized trace, property A, and
$\|\cdot\|_{(M)}$ have the fixed-generator meanings of
[[def-enflo-finite-support-localized-trace-system]].

[L2] $\lambda$-BAP gives norm-$\lambda$ finite-rank approximations uniformly
on each compact set
([[def-approximation-property-and-bounded-approximation-property]]).

## Proof

**Proof technique:** direct.

**Given:** The objects and hypotheses in the Statement.

1.1 Every bounded finite-rank $T$ is an operator-norm limit of finite-rank [given, L1]
finite-expansion operators. Indeed, choose a finite basis $f_1,\ldots,f_r$ of
$T(B)$ and bounded coefficient functionals $b_j$ with
$Tx=\sum_jb_j(x)f_j$. Approximate each $f_j$ by a finite linear combination
$f_j'$ of the dense generators so that
$T'x=\sum_jb_j(x)f_j'$ has $\|T-T'\|<\varepsilon$. Each $T'e_k$ has finite
expansion. [L1, finite-dimensional coordinates, dense span]

2.1 If $T$ is finite expansion and $e_k\in M$, property A gives [given, L1, step 1.1]

$$|a_{kk}|\le\frac{\|Te_k\|}{\|e_k\|}\le\|T\|_{(M)}.$$

Averaging over $M$ yields
$|\widetilde{\operatorname{Tr}}(M,T)|\le\|T\|_{(M)}$. [L1, property A]

3.1 If $T$ is also finite rank, its range is spanned by finitely many of the [given, L1, step 2.1]
vectors $Te_j$, hence is contained in the span of a finite subset of the
generator. Because the $M_k$ are disjoint, its diagonal coefficients on $M_k$
vanish for all sufficiently large $k$. Thus
$\widetilde{\operatorname{Tr}}(M_k,T)\to0$. [L1, finite rank, disjointness]

4.1 Apply step 2.1 to $I-T$ on $M_m$ and telescope step 3.1: [given, step 2.1, step 3.1]

$$\begin{aligned} \|I-T\|_{(M_m)} &\ge|1-\widetilde{\operatorname{Tr}}(M_m,T)|\\ &\ge1-K\|T\|\sum_{k=m}^{\infty}\frac1{\log|M_k|}. \end{aligned}$$

The growth hypothesis gives
$\log|M_k|>a^{k-m}\log|M_m|$, so the geometric sum is at most
$((1-a^{-1})\log|M_m|)^{-1}$. This proves the estimate for finite-rank
finite-expansion $T$. [steps 2.1, 3.1, trace hypothesis, geometric series]

5.1 For arbitrary bounded finite-rank $T$, take the approximants from step 1.1 [given, step 1.1, step 4.1]
and pass to the limit in the operator norm, the restriction norm, and the
right-hand side. This proves the displayed estimate in full generality.
[steps 1.1, 4.1]

6.1 If $B$ had $\lambda$-BAP, choose $m$ with [given, L2, step 5.1]
$C\lambda/\log|M_m|<1/2$. The unit ball of finite-dimensional $[M_m]$ is
compact, so [L2] would give a finite-rank $T$ with $\|T\|\le\lambda$ and
$\|I-T\|_{(M_m)}<1/2$, contradicting step 5.1. [L2, step 5.1, finite-dimensional
compactness] ∎
