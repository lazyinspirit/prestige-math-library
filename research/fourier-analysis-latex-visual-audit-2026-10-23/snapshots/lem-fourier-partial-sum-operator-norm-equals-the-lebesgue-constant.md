---
id: lem-fourier-partial-sum-operator-norm-equals-the-lebesgue-constant
kind: lemma
title: Fourier partial-sum operator norm equals the Lebesgue constant
deps: [lem-fourier-partial-sums-are-dirichlet-convolutions, def-dirichlet-and-fejer-kernels, def-operator-norm, lem-closed-form-and-size-bounds-for-the-dirichlet-kernel]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references: [{title: 'Laugesen, Harmonic Analysis Lecture Notes', url: 'https://arxiv.org/pdf/0903.3845', locator: 'ch. 8, Theorem 8.2 proof pp. 48–49; ch. 9, Example 9.3 pp. 54–55'}, {title: 'Grafakos, Classical Fourier Analysis, third edition', url: 'https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf', locator: '§3.4.3, Proposition 3.4.6 proof, p. 211, harmonic-sum lower estimate'}]
status: published
origin: pipeline
proof_strategy: 'Upper bound by the convolution integral. For the lower bound use the real continuous test f_delta(u)=D_N(x0-u)/max(delta,|D_N(x0-u)|). Its norm is at most one and the integral differs from integral |D_N| by at most delta. No discontinuous sign function is admitted as a continuous test. Include the necessary lower-bound calculation inline: for m=0,...,N-1 integrate over [(m+1/6)/(2N+1),(m+5/6)/(2N+1)] where |sin((2N+1)pi t)|>=1/2 and sin(pi t)<=pi t. Sum the resulting logarithms, bounded below by a constant times sum_{m=0}^{N-1}1/(m+1). This is explicitly reused mathematical content because the published Lebesgue-constant item is B-homed and unavailable as a logical target; do not mint a second growth theorem.'
---

## Statement

On $\mathbb T=\mathbb R/\mathbb Z$ with Haar mass one, for each integer $N\ge0$ and each prescribed $x_0\in\mathbb T$, let $T_{N,x_0}f=S_Nf(x_0)$. Over either $\mathbb R$ or $\mathbb C$, on the continuous periodic functions with supremum norm,

$$\|T_{N,x_0}\|=\|S_N:C(\mathbb T)\to C(\mathbb T)\|=\int_{\mathbb T}|D_N(t)|\,dm(t).$$

For $N\ge1$ these norms are at least $\frac{1}{3\pi}\log(N+1)$, and hence are unbounded as $N\to\infty$.

## Facts & Assumptions

**Given:** An integer $N\ge0$, a point $x_0\in\mathbb T$, and either scalar field, with normalized Haar measure.

[F1] For every one-period integrable $f$, every $N\ge0$ and every $x$, $S_Nf(x)=\int_0^1 f(x-t)D_N(t)\,dt$ ([[lem-fourier-partial-sums-are-dirichlet-convolutions]]).

[F2] $D_N(t)=1+2\sum_{k=1}^N\cos(2\pi kt)$ is real, even, continuous and has integral one ([[def-dirichlet-and-fejer-kernels]]).

[F3] The norm of a bounded linear map is the supremum of its output norms over the closed unit ball ([[def-operator-norm]]).

[F4] For $t\notin\mathbb Z$, $D_N(t)=\sin((2N+1)\pi t)/\sin(\pi t)$; at integers it equals $2N+1$ ([[lem-closed-form-and-size-bounds-for-the-dirichlet-kernel]]).

## Proof

**Proof technique:** direct estimates and continuous approximation.

1.1 Put $L_N=\int_0^1|D_N(t)|\,dt$. The convolution formula gives $|S_Nf(x)|\le L_N\|f\|_\infty$ for every $x$. Finite Fourier sums are linear and continuous as functions of $x$, so both maps in the statement are bounded linear maps and $\|T_{N,x_0}\|\le\|S_N\|\le L_N$. [F1, F3]

1.2 For $N\ge1$ and $0\le j\le N-1$, set $a_j=(j+1/6)/(2N+1)$ and $b_j=(j+5/6)/(2N+1)$. These disjoint intervals lie in $(0,1/2)$. On them $|\sin((2N+1)\pi t)|\ge1/2$ and $0<\sin(\pi t)\le\pi t$, so $L_N\ge\frac{1}{2\pi}\sum_{j=0}^{N-1}\int_{a_j}^{b_j}dt/t$. Each integral is at least $(b_j-a_j)/b_j=\frac{2/3}{j+5/6}\ge\frac{2}{3(j+1)}$. [F4, algebra]

2.1 For $\delta>0$ define $f_\delta(u)=D_N(x_0-u)/\max\{\delta,|D_N(x_0-u)|\}$. The denominator is positive, so this is a real continuous periodic function with norm at most one, also admissible in the complex space. Writing $a=|D_N(x_0-u)|$, we have $0\le a-a^2/\max\{\delta,a\}\le\delta$. Changing variables in the periodic integral yields $0\le L_N-T_{N,x_0}f_\delta\le\delta$. Thus $\|T_{N,x_0}\|\ge L_N-\delta$ for every $\delta>0$, proving both norm identities. Zeros of the kernel cause no discontinuity in this test. [F1, F2, F3, step 1.1]

3.1 Consequently $L_N\ge\frac{1}{3\pi}\sum_{j=1}^N1/j\ge\frac{1}{3\pi}\int_1^{N+1}dt/t=\frac{1}{3\pi}\log(N+1)$. For $N=0$, $D_0=1$ and both norms equal one by the already proved identities (the test $f=1$ attains the value). This covers the initial index and proves the asserted unboundedness. [F2, step 2.1, step 1.2, algebra] ∎


## Context

The harmonic lower estimate is included here to support the functional and operator norm assertion. It reuses the classical Lebesgue-constant calculation; it is not a separate growth theorem.
