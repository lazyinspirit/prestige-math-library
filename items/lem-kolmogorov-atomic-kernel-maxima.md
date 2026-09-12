---
id: "lem-kolmogorov-atomic-kernel-maxima"
kind: "lemma"
title: "Kolmogorov atomic kernel maxima"
deps: ["lem-kolmogorov-simultaneous-phase-approximation", "lem-closed-form-and-size-bounds-for-the-dirichlet-kernel", "prop-countable-subsets-of-rn-are-lebesgue-null", "def-axiom-of-choice"]
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Grafakos, Classical Fourier Analysis, third edition
      url: https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf
      locator: Lemma 4.2.3, printed pp.256–258
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume AC. For every integer $n\ge4$ there are $t_j\in((j-1)/n,j/n)$, $1\le j\le n$, such that $1,t_1,\ldots,t_n$ are rationally independent and, for $B_L(x)=n^{-1}\sum_{j=1}^nD_L(x-t_j)$, $\sup_{L\ge1}|B_L(x)|\ge c\log n$ almost everywhere on $\mathbb T$. One may take $c=1/(4\pi)$, with the natural logarithm. In particular such $n$ are arbitrarily large.

## Facts & Assumptions

[F1] Rationally independent phases with the constant one admit simultaneous approximation at positive integer times [[lem-kolmogorov-simultaneous-phase-approximation]].

[F2] Off the integers, $D_L(y)=\sin((2L+1)\pi y)/\sin(\pi y)$ [[lem-closed-form-and-size-bounds-for-the-dirichlet-kernel]].

[F3] Countable subsets of the real line are Lebesgue null under countable choice [[prop-countable-subsets-of-rn-are-lebesgue-null]].

[F4] Assume AC [[def-axiom-of-choice]].

## Proof

**Given:** An integer $n\ge4$ and AC.

1.1 At step $j$, the rational linear span of $1,t_1,\ldots,t_{j-1}$ is countable: enumerate rational tuples by listing integer numerators and positive denominators of bounded absolute size, then increase the bound; evaluate each tuple. F3 makes this span null. The open cell $((j-1)/n,j/n)$ has measure $1/n>0$, so contains a point $t_j$ outside the span. Finite induction chooses these points and proves their independence. Let $V$ be their full rational linear span with one; the same enumeration makes $V$ countable and null. AC supplies the countable-choice measure hypotheses in F3; selecting this fixed finite tuple adds no arbitrary-index choice. [F3, F4]

2.1 Fix $x\in[0,1)\setminus V$ and write $y_j=x-t_j$. If $q_0+\sum_jq_jy_j=0$ for rational coefficients, put $q=\sum_jq_j$. If $q=0$, independence of $1,t_1,\ldots,t_n$ forces all coefficients zero. If $q\ne0$, the equation puts $x=(\sum_jq_jt_j-q_0)/q$ in $V$, impossible. Thus $1,y_1,\ldots,y_n$ are independent, and none of the $y_j$ is an integer. [step 1.1]

3.1 Set $z_j=i e^{-\pi iy_j}\operatorname{sgn}(\sin(\pi y_j))$, which has modulus one. Apply F1 with error $1/2$ to obtain $L\ge1$. Multiplying the approximation by $e^{\pi iy_j}\operatorname{sgn}(\sin(\pi y_j))$ shows $|e^{(2L+1)\pi iy_j}\operatorname{sgn}(\sin(\pi y_j))-i|<1/2$. Its imaginary part exceeds $1/2$, hence F2 gives $D_L(y_j)>1/(2|\sin(\pi y_j)|)\ge1/(2\pi|y_j|)$. All terms have the same positive sign; there is no cancellation in their average. [F1, F2, step 2.1]

4.1 Let $k\in\{1,\ldots,n\}$ be the cell index with $(k-1)/n\le x<k/n$. Cell placement implies $|x-t_j|\le(|j-k|+1)/n$. At least one side from $k$ to an endpoint contains $m+1\ge n/2$ indices with distances $\ell=0,\ldots,m$. Therefore $n^{-1}\sum_j|x-t_j|^{-1}\ge\sum_{\ell=0}^m(\ell+1)^{-1}\ge\log(m+2)\ge\log(n/2)\ge(\log n)/2$. The harmonic bound follows by integrating $1/t$ over each $[\ell+1,\ell+2]$, where it is at most $1/(\ell+1)$. Step 3.1 now gives $B_L(x)>(\log n)/(4\pi)$. This holds off the single countable null set $V$, proving the assertion with the stated uniform constant. Grid endpoints are covered by the half-open choice of k; singular points $t_j$ were excluded in step 2.1. [step 1.1, step 2.1, step 3.1] ∎
