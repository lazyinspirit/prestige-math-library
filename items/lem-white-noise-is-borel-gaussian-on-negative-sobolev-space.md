---
id: lem-white-noise-is-borel-gaussian-on-negative-sobolev-space
kind: lemma
title: White noise is a Borel Gaussian law on the negative Sobolev space
status: published
origin: pipeline
deps:
  - def-countable-choice
  - def-identically-distributed-and-iid-random-variables
  - def-negative-sobolev-space-for-white-noise
  - lem-density-normal-laws-and-square-summable-gaussian-series
  - thm-continuity-from-above-for-measures
  - thm-monotone-convergence-for-the-integral
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: Castillo and Nickl, Nonparametric Bernstein–von Mises theorems in Gaussian white noise, §1.2, equations (7)–(8), printed pp. 2005–2006
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/AOS1133.pdf
    - title: Giné and Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models, §7.3.4, printed pp. 594–595
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf
    - title: Ray, Adaptive Bernstein–von Mises theorems in Gaussian white noise, §2.1, printed pp. 5–6
      url: https://arxiv.org/pdf/1407.3397
axiom_use: Countable choice suffices for the local scalar density-normal normalization and calculus bridge. The Borel coefficient-series realization, trace estimate and non-L2 argument add no full choice; no characteristic-function uniqueness is used.
dependency_level: 1
---

## Statement

Assume countable choice. Let $(\psi_{lk})$ be the wavelet or trigonometric basis from [[def-negative-sobolev-space-for-white-noise]]. Let $Z_{lk}$ be mutually independent real random variables with density $g(x)=(2\pi)^{-1/2}e^{-x^2/2}$. Define the formal white-noise coefficient sequence $W=(Z_{lk})$. For every $\delta>1/2$, this sequence is almost surely an element of $H(\delta)$ and is a Borel Gaussian random element there. Its law $N$ is a Borel probability on $H(\delta)$. For an infinite-dimensional basis, white noise is not an $L^2([0,1])$-valued random element. Here Gaussian means that each continuous real linear functional has a centered law $N(0,v)$ in the density convention of [[lem-density-normal-laws-and-square-summable-gaussian-series]]; in particular, for $L(c)=\sum_jd_jc_j$ its variance is $\sum_jd_j^2$ whenever this pairing is continuous on $H(\delta)$.

## Facts & Assumptions

[F1] [[def-negative-sobolev-space-for-white-noise]]: $H(\delta)$ has squared norm $\sum_{l,k}a_l^{-1}(\log a_l)^{-2\delta}|c_{lk}|^2$, and its finite-level coordinate projections converge in that norm.

[F2] [[def-identically-distributed-and-iid-random-variables]]: Independent identically distributed coordinates are mutually independent; here their common density is given explicitly in the statement.

[F3] [[thm-monotone-convergence-for-the-integral]]: The expectation of an increasing sequence of nonnegative random variables increases to the expectation of its pointwise limit.

[F4] [[thm-continuity-from-above-for-measures]]: For decreasing events in a probability space, the probability of their intersection is the limit of their probabilities.

[F5] [[lem-density-normal-laws-and-square-summable-gaussian-series]]: Under countable choice the density normal laws have mean and variance equal to their parameters, and a probability limit of finite independent centered normal sums has the normal law with limiting variance. Its proof uses density convolution and a CDF sandwich, without characteristic-function uniqueness or full choice.

**Given:** Countable choice, the countable basis and independent coordinates $Z_{lk}$ with the displayed standard normal density.

## Proof

1.1 Write $w_l=a_l^{-1}(\log a_l)^{-2\delta}$. In the wavelet case, the trace sum is a finite coarsest term plus $\sum_{l\ge1}2^lw_l=(\log2)^{-2\delta}\sum_{l\ge1}l^{-2\delta}$. On each block $2^m\le l<2^{m+1}$, the sum of $l^{-r}$ is between $2^m2^{-r(m+1)}$ and $2^m2^{-rm}$; hence these blocks form a convergent geometric series when $r>1$, while for $r\le1$ their contributions are bounded below by a fixed positive constant and the series diverges. For trigonometric coefficients with bounded multiplicities, the block $2^m\le |l|<2^{m+1}$ contributes between constant multiples of $m^{-2\delta}$ to $\sum_{l\ge2}[l(\log l)^{2\delta}]^{-1}$. The same comparison therefore gives finiteness exactly when $\delta>1/2$. Thus the trace $T_\delta:=\sum_{l,k}w_l$ is finite in either case. [F1, algebra]

2.1 Let $S_m$ be the sum of $w_lZ_{lk}^2$ over the first $m$ coordinates in the fixed countable enumeration. These nonnegative partial sums increase to $S=\sum_{l,k}w_lZ_{lk}^2$, and [F3] gives $\mathbb ES=\lim_m\mathbb ES_m=\sum_{l,k}w_l=T_\delta$. The mean and second moment of each coordinate are $0$ and $1$ by [F5]. If $S=\infty$ on a set of probability $p>0$, then $\mathbb ES\ge Rp$ for every $R>0$, impossible; hence $S<\infty$ almost surely. [F2, F3, F5, step 1.1, algebra]

3.1 On that probability-one event, the finite-coordinate sums of $W$ are Cauchy in $H(\delta)$ because the squared norm of every tail is the corresponding tail of the convergent series $S$. Completeness gives a limit in $H(\delta)$. The Cauchy event is measurable, and the partial sums are measurable; their pointwise limit on that event is measurable as an $H(\delta)$-valued map because the space is separable. Setting it to zero on the measurable complement gives a Borel random element. [F1, step 2.1]

4.1 Let $e_j$ be the unit vector of the weighted sequence Hilbert space supported on coordinate $j$ and let $b_j=L(e_j)$ for a continuous real linear functional $L$. For each finite set $F$, boundedness applied to $\sum_{j\in F}b_je_j$ gives $\sum_{j\in F}b_j^2\le\|L\|^2$, so $\sum_jb_j^2<\infty$. Since the weights $w_j$ are bounded, $v:=\sum_jw_jb_j^2<\infty$. The finite-coordinate projections of $W$ converge almost surely in $H(\delta)$ by step 3.1, so continuity gives $L(W)=\lim_m\sum_{j\le m}\sqrt{w_j}b_jZ_j$ almost surely. By [F5] this limit has exactly the density normal law $N(0,v)$. Thus $W$ is centered Gaussian. For a continuous coefficient pairing $L(c)=\sum_jd_jc_j$, one has $b_j=d_j/\sqrt{w_j}$, giving $v=\sum_jd_j^2$. [F1, F2, F5, step 3.1, algebra]

5.1 Enumerate the infinite basis as $(\psi_j)_{j\ge1}$, write its white-noise coordinates as $Z_j$, and let $A_j=\{|Z_j|\ge1\}$. The displayed normal density is positive on $[1,2]$, so $p:=\mathbb P(A_j)>0$; independence gives $\mathbb P(\bigcap_{j=m}^{m+q}A_j^c)=(1-p)^{q+1}$. By [F4], $\mathbb P(\bigcap_{j\ge m}A_j^c)=0$ for each $m$, so the event that only finitely many $A_j$ occur, a countable union of these intersections, has probability zero: disjointify that union by replacing its $m$th event $E_m$ with $E_m\setminus\bigcup_{i<m}E_i$, and use countable additivity and monotonicity to sum zero probabilities. Therefore $\sum_{j\le n}Z_j^2$ is unbounded almost surely. If the same $H(\delta)$ element were represented by an $L^2$ function, the coefficient embedding in [F1] would identify its $L^2$ coefficients with $Z_j$. The finite Pythagorean identity, applied to the projection onto $\psi_1,\dots,\psi_n$, would then give $\sum_{j\le n}Z_j^2\le\|W\|_2^2$ for every $n$, a contradiction. [F1, F2, F4, given, algebra] ∎
