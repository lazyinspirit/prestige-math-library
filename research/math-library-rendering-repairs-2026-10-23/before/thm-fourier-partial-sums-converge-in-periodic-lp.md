---
id: thm-fourier-partial-sums-converge-in-periodic-lp
kind: theorem
title: "Periodic Fourier partial sums converge in the strict Lp range"
status: published
origin: pipeline
deps: [lem-fourier-partial-sums-are-uniformly-bounded-on-periodic-lp, thm-fejer-convergence-in-lp, lem-fourier-partial-sums-are-dirichlet-convolutions, lem-fejer-kernel-is-a-positive-approximate-identity, def-dirichlet-and-fejer-kernels, def-cesaro-and-abel-means-of-a-fourier-series, def-period-one-fourier-coefficients-partial-sums-and-convolution, lem-fourier-partial-sum-operator-norm-equals-the-lebesgue-constant, thm-sequential-uniform-boundedness-under-countable-choice, thm-complex-lp-completeness-and-almost-everywhere-subsequences, thm-complex-holder-minkowski-and-the-quotient-norm, thm-integral-triangle-inequality, thm-tonelli-theorem-for-sigma-finite-product-spaces, def-the-one-dimensional-torus-and-normalized-haar-integral, def-countable-choice, def-complex-lp-and-euclidean-test-function-conventions]
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
      locator: "Chapter 9, Examples 9.3-9.4 and Theorem 9.5, printed pp. 54-56"
---

## Statement

Assume [[def-countable-choice|Countable Choice]], and use the torus conventions
of [[def-period-one-fourier-coefficients-partial-sums-and-convolution]] and
[[def-the-one-dimensional-torus-and-normalized-haar-integral]]: the torus
$\mathbb T=\mathbb R/\mathbb Z$ carries normalized Haar measure $m$ with
$m(\mathbb T)=1$, and $S_Nf=\sum_{|k|\le N}\widehat f(k)e_k$ for
$f\in L^p(\mathbb T;\mathbb C)$.

1. For every $1<p<\infty$ and every $f\in L^p(\mathbb T;\mathbb C)$,
   $$\|S_Nf-f\|_p\longrightarrow0\qquad(N\to\infty).$$
2. At the endpoints the operator norms grow at least as the Lebesgue
   constants. For every $N\ge1$,
   $$\|S_N\|_{L^1\to L^1}\ \ge\ \int_{\mathbb T}|D_N|\,dm\ \ge\ \frac{1}{3\pi}\log(N+1),\qquad \|S_N\|_{L^\infty\to L^\infty}\ \ge\ \int_{\mathbb T}|D_N|\,dm\ \ge\ \frac{1}{3\pi}\log(N+1).$$
   Hence both families $\left(\|S_N\|_{L^1\to L^1}\right)_{N\ge0}$ and
   $\left(\|S_N\|_{L^\infty\to L^\infty}\right)_{N\ge0}$ are unbounded, and
   there exist $f\in L^1(\mathbb T;\mathbb C)$ and
   $g\in L^\infty(\mathbb T;\mathbb C)$ such that $(S_Nf)$ fails to converge
   in $L^1(\mathbb T;\mathbb C)$ and $(S_Ng)$ fails to converge in
   $L^\infty(\mathbb T;\mathbb C)$.

No failure of weak-type $(1,1)$ or of any endpoint mapping weaker than norm
convergence is asserted.

## Facts & Assumptions

**Given:** Countable Choice, the torus conventions of [[def-period-one-fourier-coefficients-partial-sums-and-convolution]] and [[def-the-one-dimensional-torus-and-normalized-haar-integral]], and the $L^p(\mathbb T;\mathbb C)$ norms of [[def-complex-lp-and-euclidean-test-function-conventions]].

[F1] The torus integral is normalized, $m(\mathbb T)=1$, and translation invariant: $\int_{\mathbb T}h(x-t)\,dm(x)=\int_{\mathbb T}h(u)\,dm(u)$ for integrable $h$. The character $e_k(x)=e^{2\pi ikx}$, the coefficient $\widehat f(k)=\int_0^1f(t)e^{-2\pi ikt}dt$, the partial sum $S_Nf=\sum_{|k|\le N}\widehat f(k)e_k$, trigonometric polynomials and torus convolution $(f*g)(x)=\int_0^1f(x-t)g(t)dt$ are defined as in the cited definition, as is $\|f\|_p$ for the normalized measure. [[def-period-one-fourier-coefficients-partial-sums-and-convolution]] [[def-the-one-dimensional-torus-and-normalized-haar-integral]]

[F2] For every one-period integrable $f$, every $N\ge0$ and every $x$, $S_Nf(x)=(f*D_N)(x)=\int_0^1f(x-t)D_N(t)dt$. [[lem-fourier-partial-sums-are-dirichlet-convolutions]]

[F3] $D_N=1+2\sum_{k=1}^N\cos(2\pi kt)$ is real, even, continuous and bounded, $\int_{\mathbb T}D_N\,dm=1$, and $\|D_N\|_1<\infty$. The Fejer kernel $F_M=\frac1{M+1}\sum_{j=0}^MD_j$ satisfies $F_M\ge0$ and $\int_{\mathbb T}F_M\,dm=1$, so $\|F_M\|_1=1$. [[def-dirichlet-and-fejer-kernels]] [[lem-fejer-kernel-is-a-positive-approximate-identity]]

[F4] For $g\in L^p(\mathbb T;\mathbb C)$ and $1\le p<\infty$ the Cesaro means satisfy $\sigma_Mg=g*F_M$, are trigonometric polynomials, and $\|\sigma_Mg-g\|_p\to0$; hence trigonometric polynomials are dense in $L^p(\mathbb T;\mathbb C)$. For a trigonometric polynomial $P$ one has $S_NP=P$ whenever $N\ge\deg P$. [[thm-fejer-convergence-in-lp]] [[def-cesaro-and-abel-means-of-a-fourier-series]]

[F5] For every $1<p<\infty$ one has $C_p:=\sup_{N\ge0}\|S_N\|_{L^p\to L^p}<\infty$. [[lem-fourier-partial-sums-are-uniformly-bounded-on-periodic-lp]]

[F6] For every $N\ge1$, $\|S_N:C(\mathbb T)\to C(\mathbb T)\|=\int_{\mathbb T}|D_N|\,dm\ge\frac1{3\pi}\log(N+1)$. [[lem-fourier-partial-sum-operator-norm-equals-the-lebesgue-constant]]

[F7] For integrable complex $h$ one has $|\int h\,dm|\le\int|h|\,dm$ and $\|f+g\|_p\le\|f\|_p+\|g\|_p$; Tonelli's theorem applies to nonnegative measurable functions on the finite product $\mathbb T\times\mathbb T$. [[thm-integral-triangle-inequality]] [[thm-complex-holder-minkowski-and-the-quotient-norm]] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[F8] For every $1\le p\le\infty$ the space $L^p(\mathbb T;\mathbb C)$ is complete. [[thm-complex-lp-completeness-and-almost-everywhere-subsequences]]

[F9] (Sequential uniform boundedness.) If $X$ is a Banach space, $Y$ a normed space over the same field, and $T_k:X\to Y$, $k\in\mathbb N$, are bounded linear maps with $\|T_kx\|\le M_x$ for every $k$ and every $x\in X$, then $\sup_k\|T_k\|<\infty$. [[thm-sequential-uniform-boundedness-under-countable-choice]]

## Proof

**Proof technique:** direct.

1.1 For $f\in L^\infty(\mathbb T;\mathbb C)$, the convolution formula [F2] and the integral triangle inequality [F7] give $|S_Nf(x)|\le\int_{\mathbb T}|f(x-t)|\,|D_N(t)|\,dm(t)\le\|f\|_\infty\|D_N\|_1$ for every $x$, so $S_N$ is bounded on $L^\infty$ with $\|S_Nf\|_\infty\le\|f\|_\infty\|D_N\|_1$. For $f\in L^1(\mathbb T;\mathbb C)$, Tonelli and the translation invariance of [F1] give $\|S_Nf\|_1\le\int_{\mathbb T}\int_{\mathbb T}|f(x-t)|\,|D_N(t)|\,dm(t)dm(x)=\|f\|_1\|D_N\|_1$, so $S_N$ is bounded on $L^1$. Both bounds are finite by [F3]. [F1, F2, F3, F7, given, algebra]

1.2 For all $M,N\ge0$ one has $S_N(F_M)=F_M*D_N=D_N*F_M=\sigma_M(D_N)$: the first equality is [F2], the second is the substitution $t\mapsto x-t$ in the absolutely convergent torus convolution, and the third is [F4]. Since $\|F_M\|_1=1$ by [F3], the identity and the Fejer convergence of [F4] give $\|S_N(F_M)-D_N\|_1=\|\sigma_M(D_N)-D_N\|_1\to0$ as $M\to\infty$. [F1, F2, F3, F4, algebra]

1.3 For $N\ge1$, the unit ball of $C(\mathbb T)$ is contained in the unit ball of $L^\infty(\mathbb T;\mathbb C)$, and for continuous $f$ the partial sum $S_Nf$ is a trigonometric polynomial, whose essential supremum equals its supremum; hence $\|S_N\|_{L^\infty\to L^\infty}\ge\|S_N:C(\mathbb T)\to C(\mathbb T)\|=\int_{\mathbb T}|D_N|\,dm\ge\frac1{3\pi}\log(N+1)$ by [F6]. [F2, F6, algebra]

1.4 Let $1<p<\infty$, $f\in L^p(\mathbb T;\mathbb C)$ and $\varepsilon>0$. By [F4] choose a trigonometric polynomial $P$ with $\|f-P\|_p<\varepsilon/(C_p+2)$, where $C_p$ is the finite bound of [F5]. For $N\ge\deg P$ one has $S_NP=P$ by [F4], so the triangle inequality [F7] and the bound [F5] give $\|S_Nf-f\|_p\le\|S_N(f-P)\|_p+\|P-f\|_p\le(C_p+1)\|f-P\|_p<\varepsilon$. Hence $S_Nf\to f$ in $L^p$ for every $1<p<\infty$. [F4, F5, F7, algebra]

2.1 For fixed $N\ge0$ and every $M\ge0$, step 1.2 and [F3] give $\|S_N(F_M)\|_1\le\|S_N\|_{1\to1}\|F_M\|_1=\|S_N\|_{1\to1}$, while $\|S_N(F_M)\|_1\to\|D_N\|_1$; therefore $\|S_N\|_{L^1\to L^1}\ge\|D_N\|_1=\int_{\mathbb T}|D_N|\,dm$. [step 1.2, F3, algebra]

3.1 By step 1.3 and step 2.1, for every $N\ge1$ both endpoint norms satisfy $\max\left(\|S_N\|_{L^1\to L^1},\|S_N\|_{L^\infty\to L^\infty}\right)\ge\int_{\mathbb T}|D_N|\,dm\ge\frac1{3\pi}\log(N+1)$, and $\frac1{3\pi}\log(N+1)\to\infty$. Hence $\sup_N\|S_N\|_{L^1\to L^1}=\sup_N\|S_N\|_{L^\infty\to L^\infty}=\infty$, which is the norm-growth assertion of part 2. [step 1.3, step 2.1, algebra]

4.1 Suppose no $f\in L^1(\mathbb T;\mathbb C)$ failed to converge. Then each $f$ would have $\sup_N\|S_Nf\|_1<\infty$, and since $L^1(\mathbb T;\mathbb C)$ is Banach by [F8] and each $S_N$ is a bounded linear operator on it by step 1.1, the sequential uniform boundedness principle [F9] would give $\sup_N\|S_N\|_{L^1\to L^1}<\infty$, contradicting step 3.1. Hence there is $f\in L^1(\mathbb T;\mathbb C)$ with $\sup_N\|S_Nf\|_1=\infty$; if $(S_Nf)$ converged to some $g$ in $L^1$, then $\|S_Nf\|_1\le\|g\|_1+1$ for all large $N$, a contradiction. So $(S_Nf)$ does not converge in $L^1$. [step 1.1, step 3.1, F8, F9, given]

4.2 The same argument with $L^\infty(\mathbb T;\mathbb C)$ in place of $L^1(\mathbb T;\mathbb C)$: each $S_N$ is bounded on $L^\infty$ by step 1.1, this space is Banach by [F8], and $\sup_N\|S_N\|_{L^\infty\to L^\infty}=\infty$ by step 3.1, so [F9] supplies $g\in L^\infty(\mathbb T;\mathbb C)$ with $\sup_N\|S_Ng\|_\infty=\infty$, and $(S_Ng)$ does not converge in $L^\infty$. [step 1.1, step 3.1, F8, F9, given]

5.1 Step 1.4 proves part 1, and steps 4.1 and 4.2 together with the norm lower bounds of steps 1.3 and 2.1 prove part 2. [step 1.4, step 4.1, step 4.2, step 1.3, step 2.1] ∎
