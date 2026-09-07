---
id: "prop-binary-digit-restriction-hausdorff-dimension"
kind: "proposition"
title: "Digit-position density determines Hausdorff dimension"
deps: ["def-binary-digit-restriction-set", "thm-hausdorff-mass-distribution-principle", "thm-hausdorff-dimension-critical-exponent", "thm-hausdorff-one-measure-is-lebesgue-outer-measure-on-the-line", "thm-lebesgue-measure-of-a-box-of-every-kind", "thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable", "thm-geometric-series", "thm-heine-borel-characterisation-r", "thm-cantor-set-ternary-description"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: Bishop–Peres Examples 1.3.2,1.4.2; §1.3 grid comparison
      url: https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
status: "draft"
origin: "pipeline"
---

## Statement

Assume the Axiom of Countable Choice. For every $S\subseteq\mathbb N_+$, the set $A_S$ is compact and

$$\dim_H A_S=\liminf_{n\to\infty}\frac{a_S(n)}n.$$

If $\mathbb N_+\setminus S$ is infinite, then $\mathcal H^1(A_S)=\lambda_1(A_S)=0$. If both $S$ and its complement are infinite, $A_S$ is uncountable. Finite $S$, including $S=\varnothing$, gives a finite set of dimension zero.

## Facts & Assumptions

**Given:** The objects, conventions, and hypotheses in the statement above.

[F1] $A_S$ is the set of allowed binary sums with digits outside $S$ fixed to zero; $a_S(n)$ counts the allowed positions through $n$. [[def-binary-digit-restriction-set]]

[F2] Under the standing Countable Choice hypothesis, a finite Borel measure with positive outer mass and small-set diameter bound $Cr^t$ proves dimension at least $t$. [[thm-hausdorff-mass-distribution-principle]]

[F3] For finite nonnegative exponents, measure is infinite below the critical dimension and zero above it; finite positive measure identifies the critical exponent. [[thm-hausdorff-dimension-critical-exponent]]

[F4] Under the standing Countable Choice hypothesis, on the real line $\mathcal H^1=\lambda_1^*$ on every subset. [[thm-hausdorff-one-measure-is-lebesgue-outer-measure-on-the-line]]

[F5] Under the standing Countable Choice hypothesis, intervals of any endpoint convention have Lebesgue measure their length. [[thm-lebesgue-measure-of-a-box-of-every-kind]]

[F6] A pointwise limit of measurable extended-real functions is measurable. [[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]]

[F7] Geometric tails of ratio $1/2$ sum to their expected powers of two. [[thm-geometric-series]]

[F8] A subset of the real line is compact if and only if it is closed and bounded. [[thm-heine-borel-characterisation-r]]

## Proof

1.1 For an allowed prefix $b_1,\ldots,b_n$, with positions starting at one, put $p=\sum_{k\le n}b_k2^{-k}$. The closed intervals $[p,p+2^{-n}]$, one for each prefix, form a $2^{a_S(n)}$-member cover $K_n$ of $A_S$, and $K_{n+1}\subseteq K_n\subseteq[0,1]$. Conversely, if $x\in\bigcap_nK_n$, among the finitely branching allowed prefixes whose intervals contain $x$ there is a branch: at each step take the first child with extensions of arbitrarily large depth, which exists because there are finitely many children. Its prefix sums tend to $x$ since the tail bound is $2^{-n}$. Thus $A_S=\bigcap_nK_n$ is closed and bounded, hence compact. This retains both expansions at endpoints. [F1, F7, F8]

2.1 Write $d=\liminf a_S(n)/n$. For any $t>d$, choose $u$ with $d<u<t$. Infinitely many $n$ have $a_S(n)<un$; the corresponding covers have $t$-cost at most $2^{-n(t-u)}\to0$ and diameters $2^{-n}\to0$. At each fixed scale these arbitrarily cheap covers prove $\mathcal H^t(A_S)=0$. Thus $\dim_H A_S\le d$. If $S$ is finite then $A_S$ is finite, its singleton covers cost zero for positive exponents, and $d=0$; this includes the empty position set. [F1, F3, step 1.1]

2.2 For infinite $S$ list its elements increasingly as $k_1<k_2<\cdots$. On $[0,1)$ put $b_j(u)=\lfloor2^ju\rfloor-2\lfloor2^{j-1}u\rfloor$ and $T(u)=\sum_{j\ge1}b_j(u)2^{-k_j}$. Each partial sum is a finite Borel step function, and convergence follows from the geometric tail. Hence $T$ is Borel measurable. Set $\nu(B)=\lambda_1(\{u\in[0,1):T(u)\in B\})$ for Borel $B$. Borel preimages preserve disjoint unions, so countable additivity follows directly from that of Lebesgue measure. This is a probability with $\nu(A_S)=1$. [F5, F6, F7, step 1.1]

2.3 The level-$n$ cover has total length $2^{a_S(n)-n}$. An infinite complement means $n-a_S(n)\to\infty$, so $\lambda_1(A_S)=0$ by those covers; compactness supplies measurability. The line equality gives $\mathcal H^1(A_S)=0$. [F4, F5, step 1.1]

3.1 Each prescribed first $j$ binary digits of $u$ describes one half-open dyadic interval of length $2^{-j}$, hence mass $2^{-j}$. A real number has at most two binary expansions: at the first differing digit, equality of the sums requires the full possible tail $\sum_{k>n}2^{-k}=2^{-n}$, forcing the two opposite constant tails. Therefore a fibre $T^{-1}(\{x\})$ is contained, for every $n$, in at most two prefix events of mass $2^{-a_S(n)}$. Since $a_S(n)\to\infty$, every singleton has $\nu$-mass zero. Away from endpoints, any level-$n$ dyadic cell can receive only its own allowed prefix. Its mass, with either closed or half-open endpoints, is consequently at most $2^{-a_S(n)}$. [F5, F7, step 2.2]

4.1 If $0<t<d$, then for all sufficiently large $n$, $a_S(n)\ge tn$. A closed interval of length $r$ with $2^{-n}\le r<2^{1-n}$ meets at most three closed dyadic cells of length $2^{-n}$; the strict upper bound includes boundary contacts. Its mass is at most $3\,2^{-a_S(n)}\le3r^t$. Any nonempty bounded set lies in a closed interval of the same diameter, and diameter-zero sets have zero mass by the preceding step. Apply mass distribution with $\nu(A_S)=1$ to get $\dim_H A_S\ge t$. Let $t$ increase to $d$. When $d=0$, nonnegativity gives the lower bound directly. This proves the dimension formula also at $d=1$. [F2, step 2.2, step 3.1, step 2.1]

5.1 If $S$ and its complement are both infinite, insert arbitrary infinite bits successively at the positions $k_j$. Two different bit sequences first differ at some $k_j$; the maximal possible allowed tail is strictly less than $2^{-k_j}$ because some later position is forbidden. Their sums are distinct. Infinite bit sequences are uncountable by the diagonal argument (a purported enumeration is defeated by changing its $j$th bit at position $j$). Thus this injection proves uncountability of $A_S$. [F1, F7] ∎
