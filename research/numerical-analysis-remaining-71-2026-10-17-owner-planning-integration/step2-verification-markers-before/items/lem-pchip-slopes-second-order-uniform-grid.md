---
id: lem-pchip-slopes-second-order-uniform-grid
kind: lemma
title: PCHIP slopes are second-order accurate on uniform nonstationary grids
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [alg-pchip-slope-selection, lem-pchip-slope-selection-well-defined, def-continuity-and-derivative-on-real-interval, cor-mean-value-theorem, thm-intermediate-value, lem-taylor-integral-remainder, cor-boundedness-theorem-r, thm-heine-borel-r, lem-finite-set-has-max]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "F. N. Fritsch and J. Butland, A Method for Constructing Local Monotone Piecewise Cubic Interpolants, SIAM Journal on Scientific and Statistical Computing 5 (1984), pp. 300–304"
      url: https://anthonylloyd.github.io/public/interp/pchip/A_method_for_constructing_local_monotone_picewise_cubic_interpolants_fritsch1984.pdf
---

## Statement

Let $f$ be $C^3$ on an open interval containing $[a,b]$, and suppose $|f'(x)|\ge c>0$ for every $x\in[a,b]$. For a uniform grid $x_j=a+jh$, $j=0,\ldots,N$, with $N\ge2$ and $h=(b-a)/N$, let $m_j$ be the slopes selected by [[alg-pchip-slope-selection]] from the values $f(x_j)$. There are constants $C,h_0>0$, depending on $f$, $c$, and $[a,b]$, such that for every such grid with $h<h_0$,
$$\max_{0\le j\le N}|m_j-f'(x_j)|\le Ch^2.$$

## Facts & Assumptions

**Given:** A $C^3$ real function on an open neighborhood of a compact interval, a positive lower bound for $|f'|$, and a uniform grid with at least three nodes.

[F1] [[alg-pchip-slope-selection]]: interior slopes use the weighted harmonic formula when neighboring secants have the same nonzero sign; the one-sided endpoint estimate is $((2h_0+h_1)d_0-h_0d_1)/(h_0+h_1)$, followed by a sign clip and an opposite-sign cap.

[F2] [[lem-pchip-slope-selection-well-defined]]: for admissible inputs every selected slope is a finite real number and every formula denominator is nonzero.

[F3] [[def-continuity-and-derivative-on-real-interval]]: $C^3$ on an open interval means derivatives through order three exist and are continuous there.

[F4] [[cor-mean-value-theorem]]: for a function continuous on a closed interval and differentiable in its interior, its secant slope equals its derivative at some interior point.

[F5] [[thm-intermediate-value]]: a continuous real function on a closed interval takes every value between its endpoint values.

[F6] [[lem-taylor-integral-remainder]]: if derivatives through order $r+1$ are continuous, the degree-$r$ Taylor polynomial at $c$ has remainder bounded by $M|x-c|^{r+1}/(r+1)!$ when $|f^{(r+1)}|\le M$ on the segment.

[F7] [[cor-boundedness-theorem-r]]: a continuous real function on a compact subset of $\mathbb R$ is bounded there.

[F8] [[thm-heine-borel-r]]: every closed interval $[u,v]$ with $u\le v$ is compact.

[F9] [[lem-finite-set-has-max]]: every finite list of real numbers has a maximum.

## Proof
1.1 By [F3], $f'$ is continuous. It cannot take both a positive and a negative value on $[a,b]$, since [F5] would then give a zero of $f'$, contradicting $|f'|\ge c$. Thus $f'$ has one sign throughout. On each grid cell [F4] gives $d_j=f'(\xi_j)$ for some interior $\xi_j$, so all secants have that sign and $|d_j|\ge c$. Admissibility of the grid gives $x_0<\cdots<x_N$, so $a<b$; [F8] makes $[a,b]$ compact. Since $f'$, $f''$, and $f'''$ are continuous by [F3], [F7] supplies $M_1,M_2,M_3\ge0$ with $|f'|\le M_1$, $|f''|\le M_2$, and $|f'''|\le M_3$ on $[a,b]$. [F3, F4, F5, F7, F8, given]

1.2 Fix an interior node $x_k$ and set $s=f'(x_k)$ and $q=f''(x_k)$. Applying [F6] with degree two at $x_k$ to $x_k-h$ and $x_k+h$ and dividing the remainders by $h$ gives $d_{k-1}=s-hq/2+e_-$ and $d_k=s+hq/2+e_+$, where $|e_-|,|e_+|\le M_3h^2/6$. Since $|s|\ge c$, for sufficiently small $h$ both secants stay bounded away from zero. The identity $1/(s+u)=1/s-u/s^2+u^2/(s^2(s+u))$ then gives, with a uniform constant, $1/d_{k-1}=1/s+hq/(2s^2)+O(h^2)$ and $1/d_k=1/s-hq/(2s^2)+O(h^2)$. [F3, F6, given, algebra]

2.1 On a uniform grid the two weights in [F1] are both $3h$, so the interior slope equals $2/(1/d_{k-1}+1/d_k)$. The first-order terms in step 1.2 cancel, giving $1/d_{k-1}+1/d_k=2/s+O(h^2)$. Since $|s|\le M_1$, the leading term has magnitude at least $2/M_1$; thus the denominator stays bounded away from zero for sufficiently small $h$, and its reciprocal yields $m_k=s+O(h^2)$ with a constant uniform in $k$. [F1, F2, step 1.2, given, algebra]

2.2 At the left endpoint, [F6] at $a$ gives $d_0=f'(a)+hf''(a)/2+O(M_3h^2)$ and $d_1=f'(a)+3hf''(a)/2+O(M_3h^2)$, by expanding $f(a+h)$ and $f(a+2h)$. Therefore the raw endpoint estimate in [F1] is $\widehat m_0=(3d_0-d_1)/2=f'(a)+O(M_3h^2)$. For small $h$ it has the sign of $f'(a)$; step 1.1 gives that same sign for $d_0,d_1$, so neither the sign clip nor the opposite-sign cap changes it. Reflecting the expansions at $b$ gives the identical $O(h^2)$ error for $m_N$. [F1, F2, F6, step 1.1, given, algebra]

3.1 The interior and endpoint estimates above use the bounds $M_1,M_2,M_3$ and $c^{-1}$ on the fixed interval; their constants and smallness thresholds are therefore uniform in the node index. Taking a common maximum for the error constants and a common positive minimum for the thresholds gives $C,h_0$ valid at every interior node and both endpoints. The finite list $|m_j-f'(x_j)|$, $0\le j\le N$, has a maximum by [F9], and the uniform pointwise estimate bounds it by $Ch^2$. [step 2.1, step 2.2, F9, given] ∎
