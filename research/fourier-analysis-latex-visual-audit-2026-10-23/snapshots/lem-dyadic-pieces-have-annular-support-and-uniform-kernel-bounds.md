---
id: lem-dyadic-pieces-have-annular-support-and-uniform-kernel-bounds
kind: lemma
title: "Dyadic pieces have annular Fourier support and uniformly bounded rescaled kernels"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
deps: [lem-existence-of-a-smooth-inhomogeneous-dyadic-frequency-partition, def-inhomogeneous-dyadic-frequency-partition, thm-fourier-inversion-on-schwartz-space, thm-fourier-transform-maps-schwartz-space-continuously-to-itself, thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms, lem-schwartz-functions-and-all-derivatives-are-integrable, thm-young-convolution-inequality, def-schwartz-space-and-its-seminorms, def-ck-and-multi-index-notation-in-several-variables, def-countable-choice, thm-lebesgue-measure-of-a-box-of-every-kind]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Theorem 6.1.2, the kernel conditions (6.1.3) and the estimates (6.1.17)-(6.1.19), printed pp. 420-424"
    - title: "Terence Tao, Math 247A Lecture Notes 4 (UCLA, Fall 2006)"
      url: "https://www.math.ucla.edu/~tao/247a.1.06f/notes4.pdf"
      locator: "Proposition 5.3 proof, the bounds on $\\check\\psi_j$ and $\\nabla\\check\\psi_j$, printed p. 23"
    - title: "Mark Williams, Notes on Harmonic Analysis (January 11, 2022)"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "(5.11), the rescaled convolution kernels, printed p. 18"
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). With the fixed partition
and notation of [[def-inhomogeneous-dyadic-frequency-partition]]:

1. for $j\ge1$ the kernel $K_j=\mathcal F^{-1}\varphi_j$ lies in
   $\mathcal S(\mathbb R^n)$ and satisfies
   $$K_j(x)=2^{(j-1)n}K_1(2^{j-1}x)\qquad(x\in\mathbb R^n)$$
   and $\int_{\mathbb R^n}K_j=0$; also $\tilde K_j\in\mathcal S$, with
   $\tilde K_j=K_{j-1}+K_j+K_{j+1}$ (a finite sum of Schwartz kernels; no
   scaling law for the companions);
2. for every $N\ge0$ there are constants $C_N,C_N'<\infty$ depending only on
   $n,\psi,N$ with
   $$|K_j(x)|\le C_N2^{jn}(1+2^j|x|)^{-N},\qquad |\tilde K_j(x)|\le C_N'2^{jn}(1+2^j|x|)^{-N}$$
   for all $j\ge1$ and $x\in\mathbb R^n$, while $K_0,\tilde K_0\in\mathcal S$;
3. consequently $\|K_j\|_1\le C$ and $\|\tilde K_j\|_1\le C$ uniformly in $j$,
   and for $f\in L^p(\mathbb R^n;\mathbb C)$, $1\le p\le\infty$,
   $$\|f*K_j\|_p\le C\|f\|_p,\qquad\|f*\tilde K_j\|_p\le C\|f\|_p$$
   uniformly in $j\ge0$, that is $\|\Delta_jf\|_p\le C\|f\|_p$ and
   $\|\tilde\Delta_jf\|_p\le C\|f\|_p$.

## Facts & Assumptions

**Given:** the fixed partition $(\varphi_j)$ of [[lem-existence-of-a-smooth-inhomogeneous-dyadic-frequency-partition]] with its companion sequence $(\tilde\varphi_j)$ and the kernels $K_j=\mathcal F^{-1}\varphi_j$, $\tilde K_j=\mathcal F^{-1}\tilde\varphi_j$ of [[def-inhomogeneous-dyadic-frequency-partition]]; an integer $N\ge0$.

[F1] The symbols satisfy $\varphi_0=\psi$, $\varphi_j(\xi)=\psi(2^{-j}\xi)-\psi(2^{-(j-1)}\xi)$ for $j\ge1$ and $\tilde\varphi_j=\varphi_{j-1}+\varphi_j+\varphi_{j+1}$ with $\varphi_{-1}=0$; $\psi$ is Schwartz, $\psi(0)=1$ and $\psi=0$ for $|\xi|\ge2$; and $\varphi_j(\xi)=\varphi_1(2^{-(j-1)}\xi)$ for $j\ge1$ ([[lem-existence-of-a-smooth-inhomogeneous-dyadic-frequency-partition]], [[def-inhomogeneous-dyadic-frequency-partition]]).

[F2] $K_j,\tilde K_j\in\mathcal S(\mathbb R^n)$, $\mathcal F K_j=\varphi_j$ and $\mathcal F\tilde K_j=\tilde\varphi_j$ ([[thm-fourier-transform-maps-schwartz-space-continuously-to-itself]]); for $h\in\mathcal S(\mathbb R^n)$ the inversion formula $h(x)=\int_{\mathbb R^n}\widehat h(\xi)e^{2\pi ix\cdot\xi}\,d\xi$ holds with an absolutely convergent integral ([[thm-fourier-inversion-on-schwartz-space]]), and for $L^1$ functions the distributional transform is the regular distribution of the integral transform ([[thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms]]), so the integral transform of the integrable function $K_j$ equals $\varphi_j$ pointwise.

[F3] For $n\ge1$, if $h\in\mathcal S(\mathbb R^n)$ then $h\in L^1(\mathbb R^n)$ ([[lem-schwartz-functions-and-all-derivatives-are-integrable]]), and for every $N\ge0$ the quantity $\sup_{u\in\mathbb R^n}(1+|u|)^N|h(u)|$ is finite and bounded by a finite sum of the seminorms $p_{\alpha0}(h)$, because $(1+|u|)^N\le C_N\sum_{|\alpha|\le N}|u^\alpha|$ ([[def-schwartz-space-and-its-seminorms]], [[def-ck-and-multi-index-notation-in-several-variables]]).

[F4] Young's inequality: for $1\le p\le\infty$, $f\in L^p$ and $g\in L^1$ the convolution $f*g$ is defined almost everywhere and $\|f*g\|_p\le\|f\|_p\|g\|_1$ ([[thm-young-convolution-inequality]]).

## Proof

**Proof technique:** direct.

1.1 Rescaling law for the pieces. For $j\ge1$ and every $\xi$, $\varphi_j(\xi)=\psi(2^{-j}\xi)-\psi(2^{-(j-1)}\xi)=\varphi_1(2^{-(j-1)}\xi)$, because $\varphi_1(2^{-(j-1)}\xi)=\psi(2^{-1}2^{-(j-1)}\xi)-\psi(2^{-(j-1)}\xi)$, and more generally $\varphi_{k+j-1}(\xi)=\varphi_k(2^{-(j-1)}\xi)$ for every $k\ge1$ by the same computation with $k$ in place of $1$. The companions are sums, not rescalings: $\tilde\varphi_j=\varphi_{j-1}+\varphi_j+\varphi_{j+1}$, hence $\tilde K_j=K_{j-1}+K_j+K_{j+1}$ by linearity of the inverse transform, and no rescaling law is claimed for them. [F1, algebra]

2.1 Rescaling law for the kernels. Since $K_1=\mathcal F^{-1}\varphi_1\in\mathcal S$ and $K_j=\mathcal F^{-1}\varphi_j=\mathcal F^{-1}\bigl(\varphi_1(2^{-(j-1)}\cdot)\bigr)$ by step 1.1, the inversion formula applied at $x$ gives $K_j(x)=\int\varphi_1(2^{-(j-1)}\xi)e^{2\pi ix\cdot\xi}\,d\xi$; substituting $\xi=2^{j-1}\eta$, $d\xi=2^{(j-1)n}d\eta$, this becomes $K_j(x)=2^{(j-1)n}\int\varphi_1(\eta)e^{2\pi i(2^{j-1}x)\cdot\eta}\,d\eta=2^{(j-1)n}K_1(2^{j-1}x)$. For the companions, step 1.1 gives $\tilde K_j=K_{j-1}+K_j+K_{j+1}$ (the inverse transform is linear and each $K_i$ lies in $\mathcal S$); a finite sum of Schwartz kernels again lies in $\mathcal S$. [F1, F2, step 1.1, algebra]

3.1 Mean zero of the high-frequency kernels. For $j\ge1$ the integral $\widehat K_j(0)=\int_{\mathbb R^n}K_j(x)\,dx$ is the value at the origin of the integral transform of $K_j$, which by [F2] equals $\varphi_j(0)$; since $\psi(0)=1$ by [F1], $\varphi_j(0)=\psi(0)-\psi(0)=0$. [F1, F2, step 2.1, algebra]

3.2 Pointwise decay. Fix $N\ge0$. By [F3] applied to $K_1$ there is $A_N<\infty$, depending only on $n,\psi,N$, with $|K_1(u)|\le A_N(1+|u|)^{-N}$ for all $u$; since $1+2^j|x|\le2(1+2^{j-1}|x|)$ for $j\ge1$, step 2.1 gives, for $j\ge1$, $|K_j(x)|=2^{(j-1)n}|K_1(2^{j-1}x)|\le A_N2^{(j-1)n}(1+2^{j-1}|x|)^{-N}\le A_N2^{N+n}2^{jn}(1+2^j|x|)^{-N}$, so the asserted bound holds with $C_N:=A_N2^{N+n}$. For the companions, step 2.1 writes $\tilde K_j=K_{j-1}+K_j+K_{j+1}$; summing the bounds just proved for these three kernels, and for $j=1$ also the Schwartz bound of $K_0$ from [F3], gives $|\tilde K_j(x)|\le C_N'2^{jn}(1+2^j|x|)^{-N}$ after absorbing the fixed factors $3$, $2^N$ and $2^n$ into $C_N'$. Since $K_0=\mathcal F^{-1}\psi$ and $\tilde K_0=\mathcal F^{-1}\tilde\varphi_0$ are inverse transforms of Schwartz functions, both lie in $\mathcal S$ by [F2]. [F2, F3, step 2.1, algebra]

4.1 Uniform $L^1$ bounds. Take $N=n+1$ in step 3.2 and substitute $u=2^jx$: for $j\ge1$, $\int|K_j|\le C_N2^{jn}\int(1+2^j|x|)^{-N}dx=C_N\int(1+|u|)^{-N}du=:C<\infty$, and likewise $\int|\tilde K_j|\le C'_N\int(1+|u|)^{-N}du\le C$ after enlarging $C$; the integrals are finite: on $|u|\le1$ the integrand is bounded and the ball lies in a finite-volume box; on $2^k<|u|\le2^{k+1}$ its integral is at most $2^{-k(n+1)}(2^{k+2})^n=2^{2n-k}$, and $\sum_{k\ge0}2^{-k}<\infty$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]]). For $j=0$, [F3] gives $\|K_0\|_1+\|\tilde K_0\|_1<\infty$, and these two constants are absorbed into $C$. [F3, step 3.2, algebra]

5.1 Uniform $L^p$ bounds. For $f\in L^p$, $1\le p\le\infty$, Young's inequality [F4] applied to $f$ and $K_j\in L^1$ gives $\|f*K_j\|_p\le\|K_j\|_1\|f\|_p\le C\|f\|_p$, and likewise for $\tilde K_j$, uniformly in $j\ge0$. [F4, step 4.1, algebra]

6.1 Clauses 1, 2 and 3 are steps 2.1 with 3.1, step 3.2 and steps 4.1 with 5.1, respectively. [step 1.1, step 2.1, step 3.1, step 3.2, step 4.1, step 5.1] ∎
