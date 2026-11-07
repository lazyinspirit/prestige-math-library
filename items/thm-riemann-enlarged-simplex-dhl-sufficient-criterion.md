---
dependency_level: 4
id: thm-riemann-enlarged-simplex-dhl-sufficient-criterion
kind: theorem
title: A choice-free Riemann enlarged-support sufficient criterion for prime clusters
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- lem-maynard-mixed-prime-coordinate-inverse-y-moments
- lem-riemann-simplex-tensor-box-approximation
- lem-maynard-s1-diagonal-form-with-error
- lem-nonnegative-prime-cluster-weights-detect-bounded-gaps
- def-admissible-prime-tuple
- def-prime-level-of-distribution
- def-liminf-consecutive-prime-gap-hm
justified_by: []
proof_strategy: direct
axiom_use: Finite arithmetic and proper Riemann integrals; no choice hypothesis is added.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: D. H. J. Polymath, Variants of the Selberg sieve, and bounded intervals containing many primes
    url: https://arxiv.org/pdf/1407.4897v4
    locator: Theorem3.12(i), printedpp15–16, and fullSection5.3, printedpp36–40
---

## Statement

Let $k\ge2,m\ge1$ be integers, $0<\varepsilon<1$, $A=1+\varepsilon$, $B=1-\varepsilon$, and suppose the primes have a given level $0<\theta<1$ with $A\theta<1$. Let $h_1,\ldots,h_k$ be distinct admissible integer shifts. Suppose $F$ is bounded, zero outside $\{t_i\ge0,\sum_i t_i\le A\}$, Riemann integrable with integrable coordinate sections, marginals and marginal squares. Put $I(F)=\int F^2>0$ and $J_{i,B}(F)=\int_{\sum_{l\ne i}t_l\le B}(\int_0^AF(t)dt_i)^2dt_{-i}$. If
$$\sum_{i=1}^kJ_{i,B}(F)>\frac{2m}{\theta}I(F),$$
then infinitely many positive integers $n$ have at least $m+1$ primes among $n+h_1,\ldots,n+h_k$, and $H_m\le\max_i h_i-\min_i h_i$. This is a proper Riemann sufficient criterion; no full $L^2$-equivalence-class or GEH assertion is made.

## Facts & Assumptions

**Given:** The data in the Statement. All integrals are proper Riemann integrals of zero extensions to enclosing rectangles.

[F1] [[lem-maynard-mixed-prime-coordinate-inverse-y-moments]] proves the prime-LOG bilinear asymptotic under the exact support condition $\alpha(\sigma_G+\sigma_H)<\min(\theta,1)$, with global power removal and full fixed endpoints.

[F2] [[lem-riemann-simplex-tensor-box-approximation]] gives finite smooth tensor approximation, uniform absolute envelope, marginal norm stability and $\beta_i\ge J_{i,B}(G)-C_{k,A}M^2h$.

[F3] [[lem-maynard-s1-diagonal-form-with-error]] gives the unqualified S1 asymptotic for any fixed smooth interior unit-simplex function at exponent less than $1/2$, including its $R^2(\log R)^{4k}$ CRT error.

[F4] [[lem-nonnegative-prime-cluster-weights-detect-bounded-gaps]] turns $S_2>mS_1$ with nonnegative finitely supported weights at arbitrarily large intervals into the entire cluster and gap conclusion; it applies to fixed signed integer shifts when $m<k$.

[F5] [[def-admissible-prime-tuple]] supplies an omitted residue for every prime; [[def-prime-level-of-distribution]] specifies the given full-weight endpoint level; [[def-liminf-consecutive-prime-gap-hm]] specifies $H_m$.

## Proof

1.1 Set $J(F)=\sum_iJ_{i,B}(F)$. Choose one fixed $0<\alpha<\theta/2$ with $\alpha J(F)>mI(F)$, for example a midpoint between $mI(F)/J(F)$ and $\theta/2$. Then $A\alpha<1/2$. Sectionwise Cauchy–Schwarz and proper Riemann Fubini give $J_{i,B}(F)\le AI(F)$, as proved in [F2]. The strict hypothesis consequently implies $2m<kA\theta<k$, so in particular $m<k$, without a new restriction. Let $M=\max(1,\|F\|_\infty)$. First choose $h>0$ with $\alpha kC_{k,A}M^2h$ smaller than one quarter of the strict margin $\alpha J(F)-mI(F)$, then choose $\eta>0$ sufficiently small in [F2]. Its norm continuity ensures that the resulting $G,G_i$ satisfy $I(G)>0$ and $\alpha\sum_i\beta_i>mI(G)$. All these functions are fixed before $N\to\infty$. [F2, given, construct, algebra]

2.1 Put $L=\alpha\log N$, $R=N^{A\alpha}$ and use the inverse-Y array of $G$ from [F1]. For $y=\log\log\log N$ and $W=\prod_{p\le y}p$, admissibility [F5] gives one residue $v$ such that $(v+h_i,W)=1$ for all $i$: choose a good residue at each of the finitely many primes and apply finite CRT. This is a finite construction, not sequence choice; the estimates below are uniform in such $v$. Set $w(n)=B_G(n)^2$ on $N\le n<2N$, $n\equiv v\pmod W$, and zero otherwise. Apply [F3] at exponent $A\alpha<1/2$ to the function $u\mapsto G(Au)$, whose sampled arrays coincide exactly. Its integral is $A^{-k}I(G)$, so [F3] yields $S_1=C_N[I(G)+o(1)]$, $C_N=Na^kL^k/W$, $a=\varphi(W)/W$. The endpoint error is $O(N^{2A\alpha}(\log N)^{4k})=o(C_N)$ and its uniform Euler errors are $o(C_N)$. [F1, F3, F5, step 1.1, algebra]

3.1 The full $G$ has outer support cutoff $A$ in every coordinate. Each $G_i$ has its other-coordinate cutoff $\sigma_i<B$ by [F2]. Thus $\alpha(A+\sigma_i)<\alpha(A+B)=2\alpha<\theta<1$, and also $2\alpha\sigma_i<2\alpha B<\theta$. Apply [F1] to $(G,G_i)$ and $(G_i,G_i)$ in coordinate $i$. For real numbers $b,g$, $b^2\ge2bg-g^2$. Multiply this inequality by the NONNEGATIVE prime-log weight and sum. Therefore [F1, F2, step 1.1, step 2.1, algebra]
$$T_i(G,G)\ge2T_i(G,G_i)-T_i(G_i,G_i)=C_NL[\beta_i+o(1)].$$
The full-square prime moment is only bounded below, never assumed to have an asymptotic at the larger full support. A zero $G_i$ satisfies the same formula with zero terms. The $k$ coordinates are fixed, so their errors may be summed. [F1, F2, step 1.1, algebra]

4.1 Define $S_2=\sum_nw(n)\sum_i1_{\mathbb P}(n+h_i)$. For all sufficiently large $N$, $\log(n+h_i)\le\log N+C_H$ with one fixed $C_H>0$, and $w(n)\ge0$. Hence $S_2\ge\sum_iT_i(G,G)/(\log N+C_H)\ge C_N[\alpha\sum_i\beta_i-o(1)]>mS_1$, by the strict fixed margin in step 1.1 and the asymptotic in step 2.1. Only full NONNEGATIVE weights were divided by a logarithm; no signed mixed prime-count sum was substituted. By [F4], at arbitrarily large $N$ the weights detect an integer with at least $m+1$ shifted primes. Its full unboundedness/gap argument gives infinitely many positive translates and $H_m$ at most the diameter. This proves every conclusion without a countable selection of good translates. [F4, step 1.1, step 2.1, step 3.1, algebra] ∎

## Source notes


**Statement adaptation:** Uses the EHbranch condition(1+epsilon)theta<1, with the exact source enlarged/truncated domains. Gives a properRiemann sufficient-witness version, not the fullL2supremum/GEH theorem; source nonnegative lowerbound is reconstructed through local mixedinverseYmoments. The actual source reading and local proof boundary are recorded in `source-reading-and-barriers.json`; this is not a claim of verbatim source wording or an external theorem input.
