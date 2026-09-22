---
id: thm-trace-class-is-a-two-sided-banach-operator-ideal
kind: theorem
title: Trace class is a two sided Banach operator ideal
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [lem-nuclear-series-characterizes-trace-norm, def-trace-class-operator, def-absolute-value-and-singular-values-of-a-compact-operator, lem-finite-rank-operators-are-compact, thm-norm-limit-of-compact-operators-is-compact, thm-hilbert-adjoint-properties, def-operator-norm, def-bounded-linear-operator, lem-composition-operator-norm-inequality, def-metric-convergence, def-banach-space, def-norm-and-normed-space, def-hilbert-space, def-metric-space, def-infimum, def-dimension, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
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

[A1] **Nuclear characterization.** For a compact operator $R$, trace class is equivalent to having a nuclear representation $R=\sum_j\langle\cdot,u_j\rangle v_j$ (operator-norm convergence, $\sum_j\|u_j\|\|v_j\|<+\infty$); the trace norm is the infimum of the nuclear sums and is attained by the singular series. In particular, for trace-class $R$, $s_n(R)$ is zero-padded and $\|R\|=s_1(R)$ is bounded by $\|R\|_1$, because $\|R\|=s_1(R)\le\sum_ns_n(R)=\|R\|_1$ ([[lem-nuclear-series-characterizes-trace-norm]], [[def-trace-class-operator]], [[def-absolute-value-and-singular-values-of-a-compact-operator]]).

[A2] **Infimum and series.** The infimum of a nonempty bounded-below set of reals is its greatest lower bound, so for every $\varepsilon>0$ there is an element below $\inf+\varepsilon$ ([[def-infimum]]).  Convergence of the zero-based partial-sum sequences occurring below is interpreted as in [[def-metric-convergence]].

[A3] **Operator and adjoint calculus.** For composable bounded operators, $\|UV\|\le\|U\|\|V\|$; a bounded operator between Hilbert spaces has a bounded adjoint with $\|U^*\|=\|U\|$ ([[lem-composition-operator-norm-inequality]], [[thm-hilbert-adjoint-properties]], [[def-bounded-linear-operator]], [[def-operator-norm]]).

[A4] **Cauchy sequences and subsequences.** A sequence in a metric space is Cauchy when for every real $\varepsilon>0$ there is $N$ with $d(x_m,x_n)<\varepsilon$ for $m,n\ge N$; under $\mathrm{AC}_\omega$ one may choose indices $m_1<m_2<\cdots$ with $\|T_{m_{k+1}}-T_{m_k}\|_1<2^{-k}$, and a Cauchy sequence with a convergent subsequence converges to the same limit ([[def-metric-space]], [[def-metric-convergence]], [[def-countable-choice]]).

[A5] **Compactness of nuclear limits.** Finite-rank bounded operators are compact, and under $\mathrm{AC}_\omega$ an operator-norm limit of compact operators into a Banach space is compact ([[lem-finite-rank-operators-are-compact]], [[thm-norm-limit-of-compact-operators-is-compact]], [[def-hilbert-space]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice, the Hilbert spaces, the trace-class $T$ and bounded $A,B$.

1.1 **Operator norm dominated by the trace norm.** For trace-class $T$, [A1] gives $\|T\|=s_1(T)\le\sum_ns_n(T)=\|T\|_1$. [A1]

1.2 **Vector-space structure and triangle inequality.** Let $S,T$ be trace class and $a,b$ scalars. Given $\varepsilon>0$, [A1] and [A2] provide nuclear representations of $S$ and $T$ with sums $\le\|S\|_1+\varepsilon$ and $\le\|T\|_1+\varepsilon$; interleaving them, after multiplying the first by $a$ and the second by $b$, gives a nuclear series converging in operator norm to $aS+bT$ with sum $\le|a|(\|S\|_1+\varepsilon)+|b|(\|T\|_1+\varepsilon)$. Its partial sums have finite rank, so [A5] makes $aS+bT$ compact; [A1] now makes it trace class and bounds its trace norm by that nuclear sum. Letting $\varepsilon\downarrow0$ gives $\|aS+bT\|_1\le|a|\,\|S\|_1+|b|\,\|T\|_1$; homogeneity follows by also applying the bound to $a^{-1}(aT)$ when $a\ne0$ (and is immediate for $a=0$), and the triangle inequality is the case $a=b=1$. The norm is definite: if $\|T\|_1=\sum_ns_n(T)=0$ then $s_1(T)=\|T\|=0$ by [A1], so $T=0$; it is nonnegative by definition. [A1, A2, A5, algebra]

1.3 **Two-sided ideal estimate.** Let $T=\sum_j\langle\cdot,u_j\rangle v_j$ be nuclear and let $A,B$ be bounded. Then for every $x\in H_0$, $ATBx=A\sum_j\langle Bx,u_j\rangle v_j=\sum_j\langle x,B^*u_j\rangle Av_j$, and the finite-rank partial sums converge to $ATB$ in operator norm because composition is operator-norm continuous [A3]. Their nuclear sum satisfies $\sum_j\|B^*u_j\|\|Av_j\|\le\|B\|\|A\|\sum_j\|u_j\|\|v_j\|$ by [A3]. Thus $ATB$ is compact by [A5], and [A1] makes it trace class with trace norm bounded by this sum; taking the infimum over nuclear representations of $T$ gives $\|ATB\|_1\le\|A\|\,\|T\|_1\,\|B\|$. [A1, A2, A3, A5, algebra]

2.1 **Completeness.** Let $(T_m)$ be $\|\cdot\|_1$-Cauchy. Choose a subsequence $T_{m_1},T_{m_2},\dots$ with $\|T_{m_{k+1}}-T_{m_k}\|_1<2^{-k}$ [A4] and write $D_k:=T_{m_{k+1}}-T_{m_k}$. For $T_{m_1}$ and each $D_k$ choose by [A2] nuclear representations with sums at most $\|T_{m_1}\|_1+1$ and $\|D_k\|_1+2^{-k}$ respectively. Flattening these countably many positive-integer-indexed series by a fixed pairing of positive integers produces one nuclear series with total sum at most $\|T_{m_1}\|_1+1+\sum_{k\ge1}(\|D_k\|_1+2^{-k})<+\infty$. The nuclear-tail estimate makes its finite-rank partial sums converge in operator norm to a bounded operator $S$, and [A5] makes $S$ compact; [A1] therefore makes $S$ trace class. Absolute operator-norm convergence permits regrouping, and the grouped partial sums are $T_{m_1}+\sum_{k<K}D_k=T_{m_K}$, so $T_{m_K}\to S$ in operator norm. For every $K$ the tail representation made from $D_K,D_{K+1},\dots$ gives $\|S-T_{m_K}\|_1\le\sum_{k\ge K}(\|D_k\|_1+2^{-k})\to0$ by [A1] and [step 1.2]; hence $T_{m_K}\to S$ in $\|\cdot\|_1$, and by [A4] the original Cauchy sequence converges to $S$ in $\|\cdot\|_1$. [A1, A2, A4, A5, step 1.2]

3.1 **Conclusion.** Claim 1 is [step 1.1] and [step 1.2], claim 2 is [step 1.3], and claim 3 is [step 2.1]; together $\mathcal S_1(H,K)$ with $\|\cdot\|_1$ is a normed space complete in its norm, that is a Banach space. [step 1.1, step 1.2, step 1.3, step 2.1, A1, A4] ∎
