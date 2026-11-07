---
id: lem-mrt-truncated-meansquare-conditional-assembly
kind: lemma
title: "Conditional assembly of the complex truncated MRT mean-square input"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps:
  - thm-montgomery-vaughan-mean-square-for-dirichlet-polynomials
  - thm-monotonicity-of-the-integral
  - thm-ftc-second-part
  - thm-natural-logarithm-laws
  - lem-mrt-complex-short-interval-fourier-transfer
sources:
  references:
    - title: "Matomäki–Radziwiłł–Tao, An averaged form of Chowla's conjecture, v3, Appendix A, Theorem A.2, corrected Proposition A.3, and (A.7), pp. 21–28; conditional local assembly"
      url: https://arxiv.org/pdf/1503.05121v3
---

## Statement

Let $X\ge e^{20}$, $2\le P\le Q\le X$, $0<\eta<1/6$, $M\ge0$, and $t_*\in[-X,X]$. Let $a_n$ be complex coefficients of modulus at most one, supported on integers in $[X,2X]$. Put
$$F(s)=\sum_{X\le n\le2X}a_nn^{-s},\quad A=(\log X)^{1/16},\quad \delta=(\log X)^{-1/16},\quad E=\frac{(\log Q)^{1/3}}{P^{1/6-\eta}}+(\log X)^{-1/50}.$$
For $T\in[1,X/2]$ define $\mathcal R_T=\varnothing$ if $M\ge\frac18\log\log X$, and otherwise define $\mathcal R_T=\{t\in[-T,T]:|t-t_*|\le A\}$. Suppose there are constants $C_o,C_r\ge1$ satisfying both following hypotheses:

(i) For every $1\le T\le X/2$ with $M\ge1$,
$$\int_{[-T,T]\setminus\mathcal R_T}|F(1+it)|^2dt\le C_o(1+TQ/X)E.$$
(ii) If $1\le M<\frac18\log\log X$, then for every real $y\in[X,2X]$ and every real $t$ with $|t-t_*|\le A$,
$$\left|\sum_{X\le n\le y}a_nn^{-it}\right|\le C_r y\left(\frac{e^{-M/2}}{1+|t-t_*|}+\delta\right).$$
Then a constant $C$, depending only on $C_o,C_r$ and the absolute mean-value constant, satisfies, for every $T\ge1$,
$$\int_{-T}^T|F(1+it)|^2dt\le C(1+TQ/X)(E+e^{-M}).$$

For every $h\ge\max(3,Q)$,
$$\frac1X\int_X^{2X}|D_h(x)|^2dx\ll_{C_o,C_r} e^{-M}+\frac{(\log h)^{1/3}}{P^{1/6-\eta}}+(\log X)^{-1/50}.$$
Both frequency signs are included. Replacing the half-open short sum by the closed sum changes its values only at finitely many starts and leaves the integral unchanged. Hypotheses (i) and (ii) are assumptions, not conclusions of this lemma. No multiplicative-function estimate is asserted without them.

## Statement references

[Corrected MRT Appendix A, Theorem A.2, Proposition A.3 and (A.7)](https://arxiv.org/pdf/1503.05121v3)

[[thm-montgomery-vaughan-mean-square-for-dirichlet-polynomials]]

## Facts & Assumptions

**Given:** All parameters and conditional estimates in the Statement.

[F1] [[thm-montgomery-vaughan-mean-square-for-dirichlet-polynomials]] gives $\int_0^L|\sum_{n\le N}b_nn^{-it}|^2dt\ll(N+L)\sum_{n\le N}|b_n|^2$ for $L\ge2$ and complex coefficients.

[F2] [[thm-monotonicity-of-the-integral]] permits comparison of nonnegative finite-interval integrals.

[F3] [[thm-ftc-second-part]] evaluates finite integrals from their primitives.

[F4] [[thm-natural-logarithm-laws]] supplies the increasing natural logarithm and its quotient law.

[A1] The off-resonance estimate (i) in the Statement is assumed for the actual $F$.

[A2] The resonant summatory estimate (ii) in the Statement is assumed uniformly in both $y$ and $t$.

[F5] [[lem-mrt-complex-short-interval-fourier-transfer]] gives the full-frequency transfer bound for these finite complex coefficients and $1\le h\le X$, with an absolute constant $C_p$.

## Proof

1.1 Apply [F1] on $[0,2T]$ after translating $[-T,T]$; translation multiplies each coefficient by a number of modulus one. Take $N=\lfloor2X\rfloor$ and coefficients $b_n=a_n/n$, zero outside the given support. Their squared norm is at most $(X+1)/X^2\ll1/X$, so for all $T\ge1$, $\int_{-T}^T|F(1+it)|^2dt\ll1+T/X$. Also $QE\ge Q^{5/6+\eta}(\log Q)^{1/3}\ge2^{5/6}(\log2)^{1/3}>0$, a fixed positive lower bound. If $T\ge X/2$, then $1+T/X\le3T/X\ll(TQ/X)E$, which proves the desired estimate in this range. If $M<1$, the same mean-value bound suffices for every $T$, since $e^{-M}\ge e^{-1}$ and $Q\ge1$. [given, F1, F4, algebra]

1.2 It remains that $1\le T<X/2$ and $M\ge1$. If $\mathcal R_T$ is nonempty, [A2] applies. Write $S_t(y)=\sum_{X\le n\le y}a_nn^{-it}$ and $B_t=e^{-M/2}/(1+|t-t_*|)+\delta$. Finite summation by parts gives exactly $F(1+it)=S_t(2X)/(2X)+\int_X^{2X}S_t(y)y^{-2}dy$: each term with index $n$ contributes $a_nn^{-it}((2X)^{-1}+\int_n^{2X}y^{-2}dy)=a_nn^{-it}/n$. This termwise verification includes either integer endpoint. Hence $|F(1+it)|\le C_r(1+\log2)B_t$ on $\mathcal R_T$. [given, A2, F2, F3, F4, algebra]

2.1 The inequality $(u+v)^2\le2u^2+2v^2$ and step 1.2 give $\int_{\mathcal R_T}|F(1+it)|^2dt\ll C_r^2(e^{-M}+A\delta^2)$. Indeed $\int_{-A}^A(1+|u|)^{-2}du=2(1-(1+A)^{-1})\le2$, and $\mathcal R_T$ has length at most $2A$. Now $A\delta^2=(\log X)^{-1/16}\le(\log X)^{-1/50}\le E$. If $\mathcal R_T$ is empty its integral is zero. Add [A1] to obtain the claimed mean-square estimate for the remaining range, and combine with step 1.1 to cover all $T\ge1$. [step 1.2, step 1.1, A1, F2, F3, given, algebra]

3.1 Let $\max(3,Q)\le h\le X$, $U=X/h\ge1$, and $B=E+e^{-M}$. The first integral in [F5] is at most $C(1+Q/h)B$. For every $V\ge U$, the band integral is at most the integral on $[-2V,2V]$, so its contribution after multiplication by $U/V$ is at most $C(U/V+2Q/h)B$. Since $Q/h\le1$ and $U/V\le1$, the entire right side of [F5] is at most $5C_pCB$. Finally $Q\le h$ implies $(\log Q)^{1/3}\le(\log h)^{1/3}$. [F5, F2, F4, step 2.1, given, algebra]

4.1 If $h\ge X$, then for every $x\in[X,2X]$ all supported terms with $n>x$ are included in both sums of length $h$ and $X$. Thus $D_h(x)=(X/h)D_X(x)$. Apply step 3.1 at $h=X$ and use $X/h\le1$ and $\log X\le\log h$. The finitely many endpoints where closed and half-open sums differ have zero integral, as is seen by enclosing them in intervals of arbitrarily small total length and using boundedness. This proves the full conditional short-interval assertion. [step 3.1, F2, F4, given, algebra] ∎
