---
id: lem-cotlar-inequality-for-maximal-truncations
kind: lemma
title: "Cotlar's inequality for maximal truncations"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [thm-exponential-beats-every-polynomial, lem-euclidean-balls-have-positive-finite-lebesgue-measure, def-calderon-zygmund-kernel-and-principal-value-operator, def-centered-and-uncentered-hardy-littlewood-maximal-functions, def-convolution-of-a-tempered-distribution-with-a-schwartz-function, def-convolution-of-two-functions-on-rn, def-countable-choice, def-maximal-truncated-singular-integral, def-mollifier-family-generated-by-a-unit-mass-smooth-bump, def-schwartz-space-and-its-seminorms, lem-radially-decreasing-kernels-are-dominated-by-the-maximal-function, prop-mollifier-families-are-l-one-approximate-identities, thm-tempered-convolution-is-smooth-with-polynomial-growth, thm-tonelli-theorem-for-sigma-finite-product-spaces]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, third edition"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Theorem 5.3.4 (Cotlar's inequality) and its proof, printed pp. 364–365"
    - title: "Mark Williams, Notes on Harmonic Analysis"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "Theorem 3.8 (Cotlar's inequality) and its proof, printed pp. 11–12"
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $k:\mathbb R^n\setminus\{0\}\to\mathbb C$ satisfy the pointwise size bound
$|k(x)|\le A_1|x|^{-n}$, the $\delta$-Hölder smoothness bound
$|k(x-y)-k(x)|\le A_2'|y|^\delta|x|^{-n-\delta}$ for
$|x|\ge2|y|>0$ with $0<\delta\le1$, and the cancellation bound
$\sup_{0<r<R}|\int_{r<|x|<R}k(x)\,dx|\le A_3$. Let $W$ be a principal-value
distribution extending $k$ ([[def-calderon-zygmund-kernel-and-principal-value-operator]])
and let $T$ be the convolution operator with $W$, bounded on
$L^2(\mathbb R^n)$. Then for every $f\in\mathcal S(\mathbb R^n)$ and almost
every $x$,
$$T^*f(x)\le M(Tf)(x)+C_{n,\delta}(A_1+A_2'+A_3)Mf(x),$$
where $M$ is the centered Hardy–Littlewood maximal operator of
[[def-centered-and-uncentered-hardy-littlewood-maximal-functions]] and $T^*$ is
the maximal truncated operator of [[def-maximal-truncated-singular-integral]].

## Facts & Assumptions

**Given:** Countable Choice; $n\ge1$; $0<\delta\le1$; a kernel $k$ with the size, Hölder and cancellation bounds; a principal-value distribution $W$ extending $k$; the convolution operator $T$ with $W$, bounded on $L^2$; a Schwartz function $f$; a point $x\in\mathbb R^n$; a scale $\varepsilon>0$; the canonical dimension-dependent nonnegative radially nonincreasing $\varphi\in C_c^\infty(\mathbb R^n)$ with $\int\varphi=1$ and $\operatorname{supp}\varphi\subseteq B(0,1/2)$, and its mollifiers $\varphi_\varepsilon(y)=\varepsilon^{-n}\varphi(y/\varepsilon)$ ([[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]]; the approximate-identity properties are recorded in [[prop-mollifier-families-are-l-one-approximate-identities]]).

[F1] $T_\varepsilon f(x)=\int_{|y|\ge\varepsilon}k(y)f(x-y)\,dy$ is absolutely convergent and $T^*f(x)=\sup_{\varepsilon>0}|T_\varepsilon f(x)|$ ([[def-maximal-truncated-singular-integral]]).

[F2] For $u\in\mathcal S'$ and $\psi\in\mathcal S$, $(u*\psi)(x)=\langle u_y,\psi(x-y)\rangle$ defines a smooth function of polynomial growth, and $Tf=W*f$ is the convolution of the tempered distribution $W$ with the Schwartz function $f$ ([[def-convolution-of-a-tempered-distribution-with-a-schwartz-function]], [[thm-tempered-convolution-is-smooth-with-polynomial-growth]]).

[F3] A principal-value distribution $W$ for $k$ has a sequence $\delta_j\downarrow0$ such that it satisfies $\langle W,\psi\rangle=\lim_{j\to\infty}\int_{|z|\ge\delta_j}k(z)\psi(z)\,dz$ for every $\psi\in\mathcal S(\mathbb R^n)$ ([[def-calderon-zygmund-kernel-and-principal-value-operator]]).

[F4] If $\omega\ge0$ is measurable, radially nonincreasing and integrable and $g\in L^1_{\mathrm{loc}}$, then $\int |g(x-y)|\omega(y)\,dy\le\|\omega\|_1Mg(x)$ for every $x$ ([[lem-radially-decreasing-kernels-are-dominated-by-the-maximal-function]]).

[F5] Convolution of functions $g,h$ on $\mathbb R^n$ is $g*h(x)=\int g(x-y)h(y)\,dy$, whenever the integral converges absolutely ([[def-convolution-of-two-functions-on-rn]]); on $\sigma$-finite products a nonnegative product-measurable integrand may be integrated in either order ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]); the Schwartz conventions are those of [[def-schwartz-space-and-its-seminorms]].



[F6] Exponentials dominate every fixed polynomial at positive infinity, and Euclidean balls of positive radius have positive finite Lebesgue measure. ([[thm-exponential-beats-every-polynomial]], [[lem-euclidean-balls-have-positive-finite-lebesgue-measure]])

## Proof

1.1 Fix the auxiliary bump once as a function of dimension only: let $a(t)=e^{-1/t}$ for $t>0$ and $a(t)=0$ otherwise, put $\rho(y)=a(1-16|y|^2)$ and $\varphi(y)=c_n\rho(y)$ with $c_n=(\int\rho)^{-1}$. The derivatives of $a$ on $t>0$ have the form $P_k(1/t)e^{-1/t}$, with $P_{k+1}(s)=s^2(P_k(s)-P_k'(s))$; [F6] makes each derivative and its difference quotient tend to zero at $t=0$, proving smoothness across that point. Thus $\rho$ is smooth, supported in the closed radius-$1/4$ ball, nonnegative and radially nonincreasing since $a'(t)\ge0$. Its mass is finite by boundedness and compact support, and positive since it is bounded below by $a(3/4)>0$ on the radius-$1/8$ ball, which has positive measure by [F6]. This gives the required unit-mass bump with support inside $B(0,1/2)$. All its derivative bounds and $c_n$ depend only on $n$. For fixed $\varepsilon>0$ put $k^{(\varepsilon)}=k\mathbf1_{\{|\cdot|\ge\varepsilon\}}$ and $R_\varepsilon=k^{(\varepsilon)}-W*\varphi_\varepsilon$. By [F2,F3], $W*\varphi_\varepsilon$ is smooth and equals the principal-value limit $\lim_{j\to\infty}\int_{|z|\ge\delta_j}k(z)\varphi_\varepsilon(x-z)\,dz$. This need not be an absolutely convergent integral near $z=0$. If $|x|\ge2\varepsilon$, the support condition $|x-z|\le\varepsilon/2$ implies $|z|\ge3\varepsilon/2$, so in that region the same formula is an ordinary absolutely convergent integral. Near the origin retain the principal-value limit and use the cancellation estimate in the next step. [F2, F3, F6, given, construct]

1.2 Case $|x|<2\varepsilon$. Write $(W*\varphi_\varepsilon)(x)=\lim_{j\to\infty}\bigl(I_1^{(\delta)}+I_2^{(\delta)}+I_3^{(\delta)}\bigr)$ along $\delta=\delta_j$ for all sufficiently large $j$ such that $0<\delta_j<\varepsilon/4$, with the three pieces obtained by inserting $\varphi_\varepsilon(y)=\varphi_\varepsilon(x)+\bigl(\varphi_\varepsilon(y)-\varphi_\varepsilon(x)\bigr)$ and splitting at $|x-y|=\varepsilon/4$: $I_1^{(\delta)}=\int_{|x-y|>\varepsilon/4}k(x-y)\varphi_\varepsilon(y)\,dy$, $I_2^{(\delta)}=\int_{\delta\le|x-y|\le\varepsilon/4}k(x-y)\bigl(\varphi_\varepsilon(y)-\varphi_\varepsilon(x)\bigr)dy$, and $I_3^{(\delta)}=\varphi_\varepsilon(x)\int_{\delta\le|x-y|\le\varepsilon/4}k(x-y)\,dy$; the three pieces are absolutely convergent and their sum is the truncation $\int_{|x-y|\ge\delta}k(x-y)\varphi_\varepsilon(y)\,dy$. Here $|I_1^{(\delta)}|\le A_1(4/\varepsilon)^n\int\varphi_\varepsilon=A_14^n\varepsilon^{-n}$ because $|k(x-y)|\le A_1|x-y|^{-n}$ on the domain; $|I_2^{(\delta)}|\le \|\nabla\varphi_\varepsilon\|_\infty A_1\int_{|x-y|\le\varepsilon/4}|x-y|^{-n}|x-y|\,dy\le C_{\varphi}A_1\varepsilon^{-n}$ by the mean value theorem, the bound $|k|\le A_1|\cdot|^{-n}$ and polar coordinates of the punctured ball; and $|I_3^{(\delta)}|\le\|\varphi_\varepsilon\|_\infty A_3\le C_\varphi A_3\varepsilon^{-n}$ by the cancellation bound after the substitution $z=x-y$. Finally $|k^{(\varepsilon)}(x)|\le A_1|x|^{-n}\mathbf 1_{\{|x|\ge\varepsilon\}}\le A_1\varepsilon^{-n}$. Hence $|R_\varepsilon(x)|\le C_{n,\varphi}(A_1+A_3)\varepsilon^{-n}\le C_{n,\delta,\varphi}(A_1+A_2'+A_3)\varepsilon^\delta(\varepsilon+|x|)^{-n-\delta}$, the last inequality because $|x|<2\varepsilon$ gives $(\varepsilon+|x|)^{-n-\delta}\ge(3\varepsilon)^{-n-\delta}$. [F3, given, algebra]

2.1 Case $|x|\ge2\varepsilon$ of the error bound. Since $\varphi_\varepsilon$ is supported in $|y|\le\varepsilon/2$, for $|x|\ge2\varepsilon$ one has $|x|\ge2|y|$ on the support, so $k^{(\varepsilon)}(x)=k(x)$ and, substituting $z=x-y$ in the formula of step 1.1, $$R_\varepsilon(x)=k(x)-\int k(x-y)\varphi_\varepsilon(y)\,dy=\int\bigl[k(x)-k(x-y)\bigr]\varphi_\varepsilon(y)\,dy,$$ whence the Hölder bound gives $|R_\varepsilon(x)|\le A_2'\int|y|^\delta\varphi_\varepsilon(y)\,dy\,|x|^{-n-\delta}=A_2'C_\varphi\varepsilon^\delta|x|^{-n-\delta}\le A_2'C_\varphi2^{n+\delta}\varepsilon^\delta(\varepsilon+|x|)^{-n-\delta}$. [F3, given, algebra]

3.1 The convolution identity is $T_\varepsilon f=((Tf)*\varphi_\varepsilon)+f*R_\varepsilon$. Indeed, by the bounds in steps 1.2 and 2.1, $R_\varepsilon$ is integrable and its convolution with $f$ converges absolutely; $k^{(\varepsilon)}*f=T_\varepsilon f$ also converges absolutely by the size bound and Schwartz decay. For the remaining term use the distribution pairing rather than interchange nonabsolute kernel integrals. The compactly supported integral $\int\varphi_\varepsilon(y)f(x-y-\cdot)\,dy$ converges in every Schwartz seminorm: all derivatives of $f$ decay rapidly, uniformly over $y$ in the fixed compact support. Continuity of the tempered distribution $W$ therefore permits its pairing to pass through that integral. This gives $(W*f)*\varphi_\varepsilon=W*(f*\varphi_\varepsilon)$. Applying the same argument to $\int f(x-z)\varphi_\varepsilon(z-\cdot)\,dz$ gives $f*(W*\varphi_\varepsilon)=W*(f*\varphi_\varepsilon)$: its Schwartz seminorms are bounded by integrals of $|f(x-z)|(1+|z|)^N$, finite for every $N$. Hence $f*(k^{(\varepsilon)}-R_\varepsilon)=(W*f)*\varphi_\varepsilon$, proving the identity. [F1, F2, F5, step 1.2, step 2.1, algebra]

3.2 Steps 2.1 and 1.2 together show that for every $\varepsilon>0$ and every $x\in\mathbb R^n$, $$|R_\varepsilon(x)|\le C_{n,\delta}(A_1+A_2'+A_3)\,\varepsilon^\delta(\varepsilon+|x|)^{-n-\delta}=C_{n,\delta}(A_1+A_2'+A_3)\,\omega_\varepsilon(x),$$ where $\omega(x):=(1+|x|)^{-n-\delta}$, $\omega_\varepsilon(y)=\varepsilon^{-n}\omega(y/\varepsilon)$, and $\omega$ is nonnegative, radially nonincreasing and integrable; note $\varepsilon^\delta(\varepsilon+|x|)^{-n-\delta}=\varepsilon^{-n}(1+|x|/\varepsilon)^{-n-\delta}$. [step 2.1, step 1.2, algebra]

4.1 First term bound: $|((Tf)*\varphi_\varepsilon)(x)|\le\int|Tf(x-y)|\varphi_\varepsilon(y)\,dy\le\|\varphi_\varepsilon\|_1M(Tf)(x)=M(Tf)(x)$, using that $\varphi_\varepsilon$ is radially nonincreasing with $\int\varphi_\varepsilon=1$ and applying the domination lemma [F4] with $g=Tf$ (a smooth function of polynomial growth, hence locally integrable). [F4, step 3.1, given, algebra]

4.2 Second term bound: $|(f*R_\varepsilon)(x)|\le\int|f(x-y)|\,|R_\varepsilon(y)|\,dy\le C_{n,\delta}(A_1+A_2'+A_3)\int|f(x-y)|\,\omega_\varepsilon(y)\,dy\le C_{n,\delta}(A_1+A_2'+A_3)\|\omega\|_1Mf(x)$ by step 3.2 and the domination lemma [F4] applied to $\omega_\varepsilon$, which is radially nonincreasing, integrable with $\|\omega_\varepsilon\|_1=\|\omega\|_1$. [F4, step 3.2, given, algebra]

5.1 For every $\varepsilon>0$ and every $x$, steps 3.1, 4.1 and 4.2 give $|T_\varepsilon f(x)|\le M(Tf)(x)+C_{n,\delta}(A_1+A_2'+A_3)\|\omega\|_1Mf(x)$; taking the supremum over $\varepsilon>0$ and using [F1] yields the asserted inequality with $C_{n,\delta}$ redefined to absorb $\|\omega\|_1=\int(1+|y|)^{-n-\delta}dy<\infty$, in particular for almost every $x$. [F1, step 4.1, step 4.2] ∎
