---
id: lem-two-level-prime-bin-frequency-moment-bound
kind: lemma
title: Two-level prime-bin frequency moment bound
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
proof_strategy: direct
axiom_use: No choice axiom is used; the frequency set is a finite union of compact intervals.
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
- lem-prime-power-product-moment-by-positive-divisor-convolution
sources:
  references:
  - title: Kaisa Matomäki and Maksym Radziwiłł, Multiplicative Functions in Short Intervals
    url: https://arxiv.org/pdf/1501.04585v4
    locator: Proposition 1, equation 25 and subsequent moment estimate, printed pp. 25–26. This local bound retains the exact moment and support hypotheses.
---

## Statement

Let $X\ge1$, $T\ge1$, $Y_1\ge2$, $Y_2\ge1$, $H_1\ge2$, $\alpha,\beta\ge0$, and put $k=\lceil\log Y_2/\log Y_1\rceil$. Let $|c_p|,|d_p|,|a_m|\le1$, and define
$$Q_1(s)=\sum_{Y_1\le p<Y_1e^{1/H_1}}c_pp^{-s},\quad Q_2(s)=\sum_{p\in\mathcal P_2}d_pp^{-s},\quad R(s)=\sum_{X/Y_2\le m\le2X/Y_2}a_mm^{-s},$$
where $\mathcal P_2$ is any finite prime set. Suppose $\mathcal E\subset[-T,T]$ is a finite union of compact intervals and isolated points, and on $\mathcal E$ one has
$$|Q_1(1+it)|\ge Y_1^{-\beta},\qquad |Q_2(1+it)|\le Y_2^{-\alpha}.$$
Then, with an absolute implied constant,
$$\int_{\mathcal E}|Q_2(1+it)R(1+it)|^2dt\ll Y_2^{-2\alpha}Y_1^{2\beta k}\left(\frac TX+2^kY_1\right)(k!)^2.$$
For $Y_2=1$ the convention is $k=0$, $Q_1^0=1$, and $0!=1$. This is a single two-level frequency bound, not the full multiscale proposition.

## Facts & Assumptions

**Given:** The data and frequency hypotheses in the Statement.

[F1] With $k=\lceil\log Y_2/\log Y_1\rceil$, a prime polynomial supported on $[Y_1,2Y_1]$ and a polynomial supported on $[X/Y_2,2X/Y_2]$ satisfy $$\int_{-T}^T|Q(1+it)^kA(1+it)|^2dt\ll(T/X+2^kY_1)(k!)^2.$$ The interface includes $k=0$. [[lem-prime-power-product-moment-by-positive-divisor-convolution]]

## Proof

1.1 Since $H_1\ge2$, $e^{1/H_1}<2$, so the support of $Q_1$ lies in $[Y_1,2Y_1]$. On $\mathcal E$, the two size assumptions imply $$|Q_2(1+it)R(1+it)|^2\le Y_2^{-2\alpha}Y_1^{2\beta k}|Q_1(1+it)^kR(1+it)|^2.$$ This also holds at $k=0$, when $Y_2=1$ and the middle factor is one. [given, algebra]

2.1 Integrate the pointwise inequality over the finite components of $\mathcal E$ and enlarge the nonnegative integral to $[-T,T]$. The coefficients of $Q_1$ and $R$ have modulus at most one and satisfy the exact support hypotheses of [F1]. Applying [F1] gives the displayed bound. Isolated points contribute zero, and empty supports give zero on the left. [F1, step 1.1, given, algebra] ∎
