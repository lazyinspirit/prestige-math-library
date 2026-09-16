---
id: thm-trace-class-is-a-two-sided-banach-operator-ideal
kind: theorem
title: Trace class is a two sided Banach operator ideal
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [lem-nuclear-series-characterizes-trace-norm, def-trace-class-operator, def-absolute-value-and-singular-values-of-a-compact-operator, thm-hilbert-schmidt-operators-form-a-two-sided-ideal, thm-hilbert-adjoint-properties, def-operator-norm, def-bounded-linear-operator, lem-composition-operator-norm-inequality, def-metric-convergence, def-banach-space, def-norm-and-normed-space, def-hilbert-space, def-metric-space, def-infimum, def-dimension, def-countable-choice, def-square-summable-family-on-an-arbitrary-index-set]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §3.6, Lemmas 3.26 and 3.28–3.29 (printed pp. 95–100)"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Anthony W. Knapp, Advanced Real Analysis — Chapter II, §5"
      url: "https://www.math.stonybrook.edu/~aknapp/download/a2-realanal-inside.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$, $K$
and $L$ be real or complex Hilbert spaces ([[def-hilbert-space]]). Then:

1. the trace-class operators $\mathcal S_1(H,K)$ ([[def-trace-class-operator]])
   form a linear subspace of $\mathcal B(H,K)$ on which $\|\cdot\|_1$ is a norm,
   and
   $$\|T\|\le\|T\|_1\qquad\text{for every }T\in\mathcal S_1(H,K)$$
   ([[def-operator-norm]]);
2. if $T\in\mathcal S_1(H,K)$ and $A\in\mathcal B(K,L)$, $B\in\mathcal B(H_0,H)$
   are bounded linear operators on Hilbert spaces $H_0,L$, then
   $ATB\in\mathcal S_1(H_0,L)$ and
   $$\|ATB\|_1\le\|A\|\,\|T\|_1\,\|B\| ;$$
3. $(\mathcal S_1(H,K),\|\cdot\|_1)$ is a Banach space: every
   $\|\cdot\|_1$-Cauchy sequence in $\mathcal S_1(H,K)$ has a limit in
   $\mathcal S_1(H,K)$ to which it converges in $\|\cdot\|_1$
   ([[def-banach-space]], [[def-norm-and-normed-space]],
   [[def-metric-space]]).

## Facts & Assumptions

**Given:** Countable Choice, Hilbert spaces $H,H_0,K,L$, a trace-class operator $T$, bounded operators $A,B$, and the ideal and nuclear-series results.

[A1] **Nuclear characterization.** trace class means that $T$ has a nuclear representation $T=\sum_j\langle\cdot,u_j\rangle v_j$ (operator-norm convergence, $\sum_j\|u_j\|\|v_j\|<+\infty$); the trace norm is the infimum of the nuclear sums and is attained by the singular series; in particular $s_n(T)$ is zero-padded and $\|T\|=\sum_ns_n(T)\cdot\ldots$ is bounded by $\|T\|_1$, because $\|T\|=s_1(T)\le\sum_ns_n(T)=\|T\|_1$ ([[lem-nuclear-series-characterizes-trace-norm]], [[def-trace-class-operator]], [[def-absolute-value-and-singular-values-of-a-compact-operator]]).

[A2] **Infimum and series.** The infimum of a nonempty bounded-below set of reals is its greatest lower bound, so for every $\varepsilon>0$ there is an element below $\inf+\varepsilon$; absolute convergence of a scalar family implies summability of the finite-subset net, with the sum of the moduli bounding the modulus of the sum ([[def-infimum]], [[def-square-summable-family-on-an-arbitrary-index-set]], [[def-metric-convergence]]).

[A3] **Ideal calculus.** $\|SB\|_{HS}\le\|S\|\|B\|_{HS}$ and the Hilbert–Schmidt norm is adjoint-stable ([[thm-hilbert-schmidt-operators-form-a-two-sided-ideal]], [[thm-hilbert-adjoint-properties]]); $\|UV\|\le\|U\|\|V\|$ and $\|U^*\|=\|U\|$ for bounded operators ([[lem-composition-operator-norm-inequality]], [[def-bounded-linear-operator]], [[def-operator-norm]]).

[A4] **Cauchy sequences and subsequences.** A sequence in a metric space is Cauchy when for every real $\varepsilon>0$ there is $N$ with $d(x_m,x_n)<\varepsilon$ for $m,n\ge N$; under $\mathrm{AC}_\omega$ one may choose indices $m_1<m_2<\cdots$ with $\|T_{m_{k+1}}-T_{m_k}\|_1<2^{-k}$, and a Cauchy sequence with a convergent subsequence converges to the same limit ([[def-metric-space]], [[def-metric-convergence]], [[def-countable-choice]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice, the Hilbert spaces, the trace-class $T$ and bounded $A,B$.

1.1 **Operator norm dominated by the trace norm.** For trace-class $T$, [A1] gives $\|T\|=s_1(T)\le\sum_ns_n(T)=\|T\|_1$. [A1]

1.2 **Vector-space structure and triangle inequality.** Let $S,T$ be trace class and $a,b$ scalars. Given $\varepsilon>0$, [A1] and [A2] provide nuclear representations of $S$ and $T$ with sums $\le\|S\|_1+\varepsilon$ and $\le\|T\|_1+\varepsilon$; concatenating them, after multiplying the first by $a$ and the second by $b$, gives a nuclear representation of $aS+bT$ with sum $\le|a|(\|S\|_1+\varepsilon)+|b|(\|T\|_1+\varepsilon)$, so $aS+bT$ is trace class and $\|aS+bT\|_1\le|a|\,\|S\|_1+|b|\,\|T\|_1$; homogeneity is the special case $b=0$ and the triangle inequality the case $a=b=1$. The norm is definite: if $\|T\|_1=\sum_ns_n(T)=0$ then $s_1(T)=\|T\|=0$ by [A1], so $T=0$; it is nonnegative by definition. [A1, A2, algebra]

1.3 **Two-sided ideal estimate.** Let $T=\sum_j\langle\cdot,u_j\rangle v_j$ be nuclear and let $A,B$ be bounded. Then for every $x\in H_0$, $ATBx=A\sum_j\langle Bx,u_j\rangle v_j=\sum_j\langle x,B^*u_j\rangle Av_j$, a nuclear representation of $ATB$ with sum $\sum_j\|B^*u_j\|\|Av_j\|\le\|B\|\|A\|\sum_j\|u_j\|\|v_j\|$ by [A3]; taking the infimum over nuclear representations of $T$ via [A1] gives $\|ATB\|_1\le\|A\|\,\|T\|_1\,\|B\|$. [A1, A2, A3, algebra]

1.4 **Completeness.** Let $(T_m)$ be $\|\cdot\|_1$-Cauchy. Choose a subsequence $T_{m_1},T_{m_2},\dots$ with $\|T_{m_{k+1}}-T_{m_k}\|_1<2^{-k}$ [A4] and write $D_k:=T_{m_{k+1}}-T_{m_k}$. For $T_{m_1}$ and each $D_k$ choose by [A2] nuclear representations with sums at most $\|T_{m_1}\|_1+1$ and $\|D_k\|_1+2^{-k}$ respectively; concatenating all these representations produces a nuclear series whose total sum is at most $\|T_{m_1}\|_1+1+\sum_{k\ge1}(\|D_k\|_1+2^{-k})<+\infty$, so by [A1] its operator-norm limit $S$ is trace class, and the partial sums along the concatenation converge to $S$ in operator norm while the partial sums of the $D_k$ converge to the operator-norm limit of $(T_{m_k})$; uniqueness of limits identifies $S=\lim_kT_{m_k}$ in operator norm. For every $K$ the tail construction applied to $D_K,D_{K+1},\dots$ gives $\|S-T_{m_K}\|_1\le\sum_{k\ge K}(\|D_k\|_1+2^{-k})\to0$, so $T_{m_K}\to S$ in $\|\cdot\|_1$; by [A4] the original Cauchy sequence converges to $S$ in $\|\cdot\|_1$. [A1, A2, A4]

2.1 **Conclusion.** Claim 1 is [step 1.1] and [step 1.2], claim 2 is [step 1.3], and claim 3 is [step 1.4]; together $\mathcal S_1(H,K)$ with $\|\cdot\|_1$ is a normed space complete in its norm, that is a Banach space. [step 1.1, step 1.2, step 1.3, step 1.4, A1, A4] ∎

