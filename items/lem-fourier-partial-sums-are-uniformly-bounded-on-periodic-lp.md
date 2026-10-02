---
id: lem-fourier-partial-sums-are-uniformly-bounded-on-periodic-lp
kind: lemma
title: "Uniform Lp bounds for periodic Fourier partial sums"
status: published
origin: pipeline
deps: [def-period-one-fourier-coefficients-partial-sums-and-convolution, def-conjugate-function-on-the-circle, thm-marcel-riesz-conjugate-function-theorem, thm-fejer-convergence-in-lp, def-cesaro-and-abel-means-of-a-fourier-series, thm-finite-measure-l-r-includes-into-l-p-for-p-less-r, lem-trigonometric-characters-are-orthonormal, thm-complex-holder-minkowski-and-the-quotient-norm, def-the-one-dimensional-torus-and-normalized-haar-integral, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes"
      url: "https://arxiv.org/pdf/0903.3845"
      locator: "Chapter 9, formula (9.1) and the proof setup of Theorem 9.5, printed pp. 55-56"
---

## Statement

Assume [[def-countable-choice|Countable Choice]] and let $1<p<\infty$. With the
torus conventions of
[[def-period-one-fourier-coefficients-partial-sums-and-convolution]], write
$\|S_N\|:=\|S_N\|_{L^p(\mathbb T;\mathbb C)\to L^p(\mathbb T;\mathbb C)}$ for
the operator norm of the $N$-th Fourier partial sum. Then

$$\sup_{N\ge0}\|S_N\|<\infty .$$

Moreover the bound is explicit: with $M:=\|C_p\|$ the norm of the
$L^p$ extension of the conjugate function supplied by
[[thm-marcel-riesz-conjugate-function-theorem]], one has
$\sup_{N\ge0}\|S_N\|\le 2+M$.

## Facts & Assumptions

**Given:** Countable Choice, $1<p<\infty$, and the torus conventions of [[def-period-one-fourier-coefficients-partial-sums-and-convolution]]: characters $e_k(x)=e^{2\pi ikx}$, coefficients $\widehat f(k)=\int_0^1f(t)e^{-2\pi ikt}\,dt$, partial sums $S_Nf=\sum_{|k|\le N}\widehat f(k)e_k$, trigonometric polynomials, and convolution.

[F1] The torus carries the normalized translation-invariant Haar integral $m$ with $m(\mathbb T)=1$, and $|\int_{\mathbb T}f\,dm|\le\|f\|_1$ for $f\in L^1(\mathbb T)$. [[def-the-one-dimensional-torus-and-normalized-haar-integral]] [[def-period-one-fourier-coefficients-partial-sums-and-convolution]]

[F2] The conjugate function $C$ is defined on trigonometric polynomials coefficientwise by $\widehat{Cg}(k)=-i\operatorname{sgn}(k)\widehat g(k)$; it is complex-linear, kills constants, and the characters satisfy $e_ae_l=e_{a+l}$. [[def-conjugate-function-on-the-circle]]

[F3] For every $1<p<\infty$ the operator $C$ extends uniquely to a bounded complex-linear $C_p$ on $L^p(\mathbb T;\mathbb C)$ with $\|C_p\|=M<\infty$, and $C_p1=0$. [[thm-marcel-riesz-conjugate-function-theorem]]

[F4] For $1\le p<\infty$ and $f\in L^p(\mathbb T;\mathbb C)$, the Cesaro means $\sigma_Nf=\frac1{N+1}\sum_{j=0}^NS_jf$ are trigonometric polynomials and $\|\sigma_Nf-f\|_p\to0$; hence the trigonometric polynomials are dense in $L^p(\mathbb T;\mathbb C)$. [[thm-fejer-convergence-in-lp]] [[def-cesaro-and-abel-means-of-a-fourier-series]]

[F5] On the finite measure space $\mathbb T$ one has $\|f\|_1\le\|f\|_p$ for $1\le p<\infty$. [[thm-finite-measure-l-r-includes-into-l-p-for-p-less-r]]

[F6] Complex $L^p$ carries the norm structure of [[thm-complex-holder-minkowski-and-the-quotient-norm]], so the triangle inequality applies to finite sums.

[F7] A trigonometric polynomial whose Fourier coefficients all vanish is the zero polynomial; equivalently, a finite family of distinct characters is linearly independent. [[lem-trigonometric-characters-are-orthonormal]]

## Proof

**Proof technique:** direct.

1.1 Define $P_+g:=\frac12(g+iC_pg)+\frac12\Bigl(\int_{\mathbb T}g\,dm\Bigr)\mathbf 1$ for $g\in L^p(\mathbb T;\mathbb C)$, with $\mathbf 1$ the constant function. Then $P_+$ is complex-linear and bounded with $\|P_+g\|_p\le(1+\tfrac M2)\|g\|_p$, where $M=\|C_p\|$: indeed the triangle inequality of [F6] gives $\|\frac12(g+iC_pg)\|_p\le\frac12(1+M)\|g\|_p$, and $\|\frac12(\int g)\mathbf 1\|_p=\frac12|\int g|\le\frac12\|g\|_1\le\frac12\|g\|_p$ by [F1] and [F5]. [F1, F3, F5, F6]

1.2 For a trigonometric polynomial $p$ one has $P_+p=\sum_{k\ge0}\widehat p(k)e_k$. Indeed [F2] gives $\widehat{(p+iCp)}(k)=(1+\operatorname{sgn}k)\widehat p(k)$, so $\frac12(p+iCp)$ has coefficients $\widehat p(k)$ for $k>0$, $\frac12\widehat p(0)$ at $k=0$, and $0$ for $k<0$; the constant function $\mathbf 1$ has coefficients $1$ at $k=0$ and $0$ elsewhere, and $\int_{\mathbb T}p\,dm=\widehat p(0)$, so adding $\frac12\widehat p(0)\mathbf 1$ yields exactly the coefficients $\widehat p(k)$ for $k\ge0$ and $0$ for $k<0$. [F1, F2]

1.3 For $a\in\mathbb Z$ define the modulation $M_ah:=e_ah$, a complex-linear map on $L^p(\mathbb T;\mathbb C)$. Since $|e_a|=1$, one has $|M_ah|=|h|$ pointwise and hence $\|M_ah\|_p=\|h\|_p$: each $M_a$ is an isometry. For a trigonometric polynomial $h$ and every $k$, the coefficients satisfy $\widehat{M_ah}(k)=\widehat h(k-a)$, because $e_ae_l=e_{a+l}$ in [F2] gives $\int e_ah\,e_{-k}\,dm=\int h\,e_{-(k-a)}\,dm$. [F2, F6]

1.4 $S_N$ is bounded on $L^p$: for $f\in L^p$ each $|\widehat f(k)|\le\|f\|_1\le\|f\|_p$ by [F1] and [F5], so the defining finite sum gives $\|S_Nf\|_p\le\sum_{|k|\le N}\|f\|_p=(2N+1)\|f\|_p$. [F1, F5, F6]

2.1 For every trigonometric polynomial $p$ and every $N\ge1$, $S_Np=M_{-N}P_+M_Np-M_{N+1}P_+M_{-(N+1)}p$. Indeed, by 1.2 and 1.3 the left-hand side of the identity has coefficients $\widehat{(M_{-N}P_+M_Np)}(k)=\widehat{(P_+M_Np)}(k+N)=\mathbf 1_{\{k+N\ge0\}}\widehat p(k)$, and $\widehat{(M_{N+1}P_+M_{-(N+1)}p)}(k)=\mathbf 1_{\{k-(N+1)\ge0\}}\widehat p(k)$; their difference has coefficients $\mathbf 1_{\{|k|\le N\}}\widehat p(k)=\widehat{S_Np}(k)$ for every $k$, and two trigonometric polynomials with equal coefficients are equal by [F7]. [step 1.2, step 1.3, F7]

2.2 The right-hand side of 2.1 defines a bounded operator on $L^p$ with norm at most $2(1+\frac M2)=2+M$: by 1.3 each modulation is an isometry and by 1.1 $\|P_+\|\le1+\frac M2$, so the triangle inequality of [F6] bounds the difference of the two composites by $2(1+\frac M2)$. [step 1.1, step 1.3, F6]

3.1 The identity of 2.1 holds for every $f\in L^p(\mathbb T;\mathbb C)$, not only for trigonometric polynomials: both sides are bounded operators on $L^p$ by 1.4 and 2.2, they agree on the set of trigonometric polynomials, and that set is dense in $L^p$ by [F4]; two bounded operators agreeing on a dense set agree everywhere. [step 1.4, step 2.1, step 2.2, F4]

4.1 By 3.1 and 2.2, $\|S_Nf\|_p\le(2+M)\|f\|_p$ for every $f\in L^p$ and every $N\ge1$, while for $N=0$ step 1.4 gives $\|S_0f\|_p=|\widehat f(0)|\le\|f\|_p\le(2+M)\|f\|_p$. Hence $\|S_N\|\le2+M$ for every $N\ge0$ and $\sup_{N\ge0}\|S_N\|\le2+M<\infty$, which is the assertion. [step 1.4, step 2.2, step 3.1] ∎
