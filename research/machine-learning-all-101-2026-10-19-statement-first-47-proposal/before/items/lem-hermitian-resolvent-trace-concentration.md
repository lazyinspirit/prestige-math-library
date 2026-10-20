---
id: lem-hermitian-resolvent-trace-concentration
kind: lemma
title: "Concentration of the normalized complex Hermitian resolvent trace"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - lem-hermitian-rank-one-resolvent-update-and-trace-norm-bound
  - thm-independent-random-elements-have-product-joint-law
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - cor-markov-inequality-for-random-variables
  - cor-first-borel-cantelli-lemma-for-events
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Z. D. Bai, B. Q. Miao, and G. M. Pan, On Asymptotics of Eigenvectors of Large Sample Covariance Matrix"
      url: "https://arxiv.org/pdf/0708.1720"
    - title: "Z. D. Bai and J. W. Silverstein, Spectral Analysis of Large Dimensional Random Matrices, 2nd ed."
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf"
---

## Statement

For each positive integer $n$, let $Y_{n,1},\ldots,Y_{n,N_n}$ be independent random vectors in $\mathbb C^n$, let $B_n=\sum_{j=1}^{N_n}Y_{n,j}Y_{n,j}^*$, and assume $N_n/n\to\kappa\in(0,\infty)$. Fix $z=u+i\eta$ with $u\in\mathbb R$ and $\eta>0$, and define
$$M_n(z):=\frac1n\operatorname{tr}(B_n-zI)^{-1}.$$
Then for every $t>0$,
$$\mathbb P\{|M_n(z)-\mathbb E M_n(z)|>t\}\le4\exp\!\left(-\frac{t^2n^2\eta^2}{4N_n}\right),$$
and $M_n(z)-\mathbb E M_n(z)\to0$ almost surely.

## Statement references

Bai, Miao, and Pan, §2, printed pp. 12–13 ([full paper PDF](https://arxiv.org/pdf/0708.1720)).

Bai and Silverstein, Chapter 3, §3.3, printed pp. 53–55 ([full book PDF](https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf)).

## Facts & Assumptions

**Given:** Independent complex columns $Y_{n,j}$, the normalized resolvent trace, and $z=u+i\eta$ with $\eta>0$.

[F1] Adding one positive rank-one term changes the unnormalized Hermitian resolvent trace by at most $1/\eta$ ([[lem-hermitian-rank-one-resolvent-update-and-trace-norm-bound]]).

[F2] Independent random elements have product joint law ([[thm-independent-random-elements-have-product-joint-law]]).

[F3] Fubini's theorem permits integration in either order on the finite product spaces used to define the conditional averages ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F4] A summable sequence of event probabilities has probability zero of occurring infinitely often ([[cor-first-borel-cantelli-lemma-for-events]]).

[F5] For a nonnegative random variable $Y$ and $a>0$, $\mathbb P(Y>a)\le\mathbb E[Y]/a$ ([[cor-markov-inequality-for-random-variables]]).

## Proof

**Given:** The hypotheses and notation of the Statement.

1.1 Replacing one column $Y_{n,j}$ by any other vector removes one positive rank-one term and adds another. Applying [F1] twice shows that $\operatorname{tr}(B_n-zI)^{-1}$ changes by at most $2/\eta$, so the real and imaginary parts of $M_n(z)$ each have coordinate oscillation at most $c_n:=2/(n\eta)$. [given, F1, algebra]

2.1 Let $f$ be either real part of $M_n(z)$ and use [F2]–[F3] to form its product-integral Doob averages $F_j$ over the first $j$ columns, integrating the remaining columns against their marginal laws. Boundedness $|\operatorname{tr}(B_n-zI)^{-1}|\le n/\eta$ makes these integrals finite. Then $D_j:=F_j-F_{j-1}$ has conditional mean zero and lies, conditionally on the first $j-1$ columns, in an interval of length at most $c_n$ by step 1.1. [given, F2, F3, step 1.1, construct]

3.1 If a real random variable $D$ has mean zero and lies in an interval of width $c$, then $\log\mathbb E e^{\lambda D}$ has second derivative equal to a variance under an exponentially tilted law, at most $c^2/4$; the variance bound follows from $\mathbb E[(D-a)(b-D)]\ge0$ for interval endpoints $a\le D\le b$. Since the log moment and its first derivative vanish at $0$, integrating twice gives $\mathbb E e^{\lambda D}\le e^{\lambda^2c^2/8}$. Apply this conditional estimate to each $D_j$, iterate, and use [F5] with $\lambda=4t/(N_nc_n^2)$ to obtain each one-sided tail $\mathbb P\{f-\mathbb Ef\ge t\}\le e^{-2t^2/(N_nc_n^2)}$. The same bound applies to the lower tail and to the imaginary part. If a complex number has modulus greater than $t$, one of its real or imaginary parts has magnitude greater than $t/\sqrt2$, so the union bound and $c_n=2/(n\eta)$ give the displayed probability inequality. [F5, step 2.1, algebra]

4.1 Since $N_n/n\to\kappa\in(0,\infty)$, for every fixed $t>0$ the step 3.1 bound is at most $4e^{-a_t n}$ for all sufficiently large $n$ and some $a_t>0$. The probabilities are summable. Apply [F4] for $t=1/m$, $m\ge1$, and intersect the resulting countable probability-one events to conclude $M_n(z)-\mathbb E M_n(z)\to0$ almost surely. [given, F4, step 3.1, algebra] ∎

## Proof references

Bai, Miao, and Pan, §2, equations (2.1)–(2.3), printed pp. 12–13 ([full paper PDF](https://arxiv.org/pdf/0708.1720)).
