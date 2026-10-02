---
id: lem-riesz-transform-principal-value-kernel-formula
kind: lemma
title: "The Riesz transform is the principal value of its kernel, with the matching constant"
status: published
origin: pipeline
deps: [def-riesz-transforms-on-euclidean-space, lem-singular-kernel-sine-integral-under-countable-choice, thm-polar-coordinates-formula-for-lebesgue-measure, cor-volume-of-the-unit-n-ball, thm-real-gamma-functional-equation, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-dominated-convergence, def-convolution-of-a-tempered-distribution-with-a-schwartz-function, thm-fourier-transform-converts-allowed-tempered-convolutions-to-products, thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions, def-fourier-transform-of-a-tempered-distribution, thm-mean-value-inequality, thm-chain-rule, def-schwartz-space-and-its-seminorms, thm-linear-change-of-variables-for-lebesgue-measure, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-10-02
  precheck: pass
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, third edition"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Section 5.1.4, Proposition 5.1.14 and Lemma 5.1.15, printed pp. 325-327"
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes"
      url: "https://arxiv.org/pdf/0903.3845"
      locator: "Chapter 20, Proposition 20.3 and Lemma 20.4, printed pp. 115-119"
---

## Statement

Assume [[def-countable-choice|Countable Choice]], use the $e^{-2\pi ix\xi}$
convention, and let $K_j(x)=c_nx_j/|x|^{n+1}$ with
$c_n=\Gamma((n+1)/2)/\pi^{(n+1)/2}$ be the Riesz kernel of
[[def-riesz-transforms-on-euclidean-space]]. Then for every Schwartz function
$f\in\mathcal S(\mathbb R^n)$:

1. the truncated integrals $\int_{|y|>\varepsilon}K_j(y)f(x-y)\,dy$ converge as
   $\varepsilon\downarrow0$ for every $x\in\mathbb R^n$, with a limit that is
   continuous in $x$; and
2. that continuous function is a representative of the $L^2$ class $R_jf$,
   whose Fourier multiplier is $-i\xi_j/|\xi|$.

Existence of the principal value is asserted only for Schwartz $f$, pointwise
in $x$; no almost-everywhere convergence for general $L^2$ or $L^p$ inputs is
claimed.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $1\le j\le n$, the Riesz kernel $K_j$, the symbol $m_j(\xi)=-i\xi_j/|\xi|$ for $\xi\ne0$ with $m_j(0)=0$, and the operator $R_j=\mathcal F_2^{-1}M_{m_j}\mathcal F_2$ on $L^2(\mathbb R^n)$.

[F1] The Riesz kernel is $K_j(x)=c_nx_j/|x|^{n+1}$ with $0<c_n<\infty$, smooth and odd on $\mathbb R^n\setminus\{0\}$, and $|K_j(x)|\le c_n|x|^{-n}$; the operator $R_j$ is the bounded $L^2$ operator with symbol $m_j$. [[def-riesz-transforms-on-euclidean-space]]

[F2] For $S(T):=\int_0^T\frac{\sin u}{u}du$, one has $S(T)\to\frac\pi2$, $|S(T)|\le3$ for all $T\ge0$, and $\bigl|\int_A^B\frac{\sin u}{u}du\bigr|\le2/A$ when $1\le A<B$. Thus $\bigl|\int_A^B\frac{\sin u}{u}du\bigr|\le6$ for all $0<A<B$: use $|S(B)|+|S(A)|\le6$ if $A<1$, and the tail bound if $A\ge1$. [[lem-singular-kernel-sine-integral-under-countable-choice]]

[F3] Polar coordinates: $\int_{\mathbb R^n}h\,d\lambda_n=\int_0^\infty\int_{S^{n-1}}h(r\omega)r^{n-1}d\sigma(\omega)\,dr$ for nonnegative Borel $h$ and, by splitting real and imaginary parts into their positive and negative parts, for integrable complex Borel $h$, and the finite Borel measure $\sigma$ is uniquely determined by this property. [[thm-polar-coordinates-formula-for-lebesgue-measure]]

[F4] $V_m(1)=\pi^{m/2}/\Gamma(m/2+1)$ for $m\ge1$, and volumes scale as $V_m(\rho)=V_m(1)\rho^m$. [[cor-volume-of-the-unit-n-ball]]

[F5] Fubini for L^1 functions on a sigma-finite product. [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

[F6] Dominated convergence. [[thm-dominated-convergence]]

[F7] $(u*\varphi)(x)=\langle u_y,\varphi(x-y)\rangle$ defines the tempered convolution for $u\in\mathcal S'$ and Schwartz $\varphi$. [[def-convolution-of-a-tempered-distribution-with-a-schwartz-function]]

[F8] $\mathcal F(u*\varphi)=(\mathcal Fu)(\mathcal F\varphi)$ for $u\in\mathcal S'(\mathbb R^n)$ and Schwartz $\varphi$. [[thm-fourier-transform-converts-allowed-tempered-convolutions-to-products]]

[F9] Fourier transformation is a topological automorphism of $\mathcal S'(\mathbb R^n)$, hence injective. [[thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions]]

[F10] $\langle\mathcal Fu,\varphi\rangle=\langle u,\mathcal F\varphi\rangle$ with no conjugate on the right-hand side. [[def-fourier-transform-of-a-tempered-distribution]]

[F11] For a continuous curve $h:[a,b]\to\mathbb R^2$ differentiable on $(a,b)$, the bound $|h'(t)|\le D$ implies $|h(b)-h(a)|\le D(b-a)$. Identify $\mathbb C$ with $\mathbb R^2$ when applying this inequality. [[thm-mean-value-inequality]]

[F12] The real one-variable chain rule applies to compositions of real scalar functions; below it is applied separately to the real and imaginary parts of each coordinate section of $f$. [[thm-chain-rule]]

[F13] Schwartz seminorms: for every integer $N\ge0$ there is a finite constant $C_N(\varphi)$ with $|\varphi(x)|\le C_N(\varphi)(1+|x|)^{-N}$. [[def-schwartz-space-and-its-seminorms]]

[F14] Linear change of variables for Lebesgue measure. [[thm-linear-change-of-variables-for-lebesgue-measure]]

[F15] The Gamma function satisfies $\Gamma(1)=1$. [[thm-real-gamma-functional-equation]]

## Proof

**Proof technique:** direct.

1.1 Fix $f\in\mathcal S(\mathbb R^n)$ and $x\in\mathbb R^n$. Write $g_x(y):=f(x-y)-f(x)$, and put $D_k:=\sup_z|\partial_k f(z)|<\infty$ for $1\le k\le n$ by [F13], and set $M:=\sum_{k=1}^nD_k$. Join $x$ to $x-y$ by the $n$ coordinate segments with successive endpoints $z^{(k)}=x-\sum_{\ell=1}^k y_\ell e_\ell$, where $z^{(0)}=x$. On the $k$-th segment, the real one-variable chain rule [F12] on both components gives $(d/dt)f(z^{(k-1)}-t y_k e_k)=-y_k\partial_k f(z^{(k-1)}-t y_k e_k)$ for $0<t<1$; this follows from the definition of the coordinate partial derivative and is valid also when $y_k=0$, when the curve is constant. Applying [F11] to this complex curve viewed in $\mathbb R^2$ bounds its increment by $D_k|y_k|$. Telescoping gives $|g_x(y)|\le\sum_kD_k|y_k|\le M|y|$ for every $y$. Hence on $|y|<1$ the bound $|K_j(y)g_x(y)|\le c_nM|y|^{1-n}$ is integrable in $n$ dimensions, while $1+|y|\le(1+|x|)(1+|x-y|)$ and the Schwartz bound [F13] with $N=n+2$ give $|f(x-y)|\le C_{n+2}(f)(1+|x|)^{n+2}(1+|y|)^{-n-2}$. Thus on $|y|>1$, $|K_j(y)f(x-y)|\le c_nC_{n+2}(f)(1+|x|)^{n+2}|y|^{-n-2}$ is integrable. Since $\int_{\varepsilon<|y|<1}K_j(y)f(x)\,dy=0$ by oddness of $K_j$ and symmetry of the annulus, $\int_{|y|>\varepsilon}K_j(y)f(x-y)\,dy=\int_{\varepsilon<|y|<1}K_j(y)g_x(y)\,dy+\int_{|y|>1}K_j(y)f(x-y)\,dy$, and $\varepsilon\downarrow0$ in the first term yields the absolutely convergent limit $J(x):=\int_{|y|<1}K_j(y)g_x(y)\,dy+\int_{|y|>1}K_j(y)f(x-y)\,dy$. For $x_k\to x$, the sequence $(x_k)$ is bounded, so the tail constants $(1+|x_k|)^{n+2}$ have a common finite bound. This and the common small-ball bound $c_nM|y|^{1-n}$ supply integrable dominators for [F6]; continuity of $f$ gives pointwise convergence in both integrals, hence $J(x_k)\to J(x)$. [F1, F6, F11, F12, F13]

1.2 For $0<\varepsilon<R$ and $\xi\ne0$ put $\Lambda_{\varepsilon,R}(\xi):=\int_{\varepsilon<|y|<R}K_j(y)e^{-2\pi iy\cdot\xi}dy$. The cosine part of the integrand is odd in $y$, so it integrates to zero on the symmetric annulus, and $K_j(y)=c_ny_j/|y|^{n+1}$ gives $\Lambda_{\varepsilon,R}(\xi)=-ic_n\int_{\varepsilon<|y|<R}\frac{y_j}{|y|^{n+1}}\sin(2\pi y\cdot\xi)\,dy$. Polar coordinates [F3] turn this into $\Lambda_{\varepsilon,R}(\xi)=-ic_n\int_\varepsilon^R\frac{dr}{r}\int_{S^{n-1}}\omega_j\sin(2\pi r\,\xi\cdot\omega)\,d\sigma(\omega)$. [F1, F3]

1.3 For $\xi\ne0$ one has $\int_{S^{n-1}}\operatorname{sgn}(\xi\cdot\omega)\omega_j\,d\sigma(\omega)=A_n\frac{\xi_j}{|\xi|}$ with $A_n:=\int_{S^{n-1}}|\omega_1|\,d\sigma$: by [F3] the measure $\sigma$ is invariant under the orthogonal map $\omega\mapsto R\omega$, so substituting $\omega=R^{\mathsf T}u$ for an orthogonal map with $R(\xi/|\xi|)=e_1$ (take $R=I$ if $v:=\xi/|\xi|=e_1$, and otherwise take $R=I-2ww^{\mathsf T}/|w|^2$ with $w=v-e_1$) and reflecting $u_k\mapsto-u_k$ for $k\ne1$ (which preserves $\operatorname{sgn}(u_1)u_1$ and kills the other components by oddness) leaves only $A_n(R^{\mathsf T}e_1)_j=A_n\xi_j/|\xi|$. [F3, F14]

1.4 $A_n=2\pi^{(n-1)/2}/\Gamma((n+1)/2)$: compute $C:=\int_{B_n}|x_1|\,dx$ twice. Polar coordinates [F3] give $C=\int_0^1r^ndr\cdot A_n=A_n/(n+1)$; for $n\ge2$, slicing at $x_1=t$ gives, by [F5], [F14] and [F4], $C=\int_{-1}^1|t|V_{n-1}(1)(1-t^2)^{(n-1)/2}dt=2V_{n-1}(1)/(n+1)=2\pi^{(n-1)/2}/((n+1)\Gamma((n+1)/2))$, hence $A_n=(n+1)C=2V_{n-1}(1)=2\pi^{(n-1)/2}/\Gamma((n+1)/2)$. For $n=1$ the sphere is $S^0=\{-1,1\}$: the defining identity of [F3], applied to functions supported in the annulus $1<|x|<2$, shows that the measure $\sigma$ is the counting measure $\delta_{-1}+\delta_1$, so $A_1=\int_{S^0}|\omega_1|\,d\sigma=1+1=2$, while $2\pi^{0}/\Gamma(1)=2$ by $\Gamma(1)=1$ of [F15]. Hence $A_n=2\pi^{(n-1)/2}/\Gamma((n+1)/2)$ for every $n\ge1$, and $c_nA_n\pi/2=1$ by cancellation of $\Gamma((n+1)/2)$ and $\pi^{(n+1)/2}$. [F3, F4, F5, F14, F15]

2.1 In 1.2 let $R=1/\varepsilon$ and $\varepsilon\downarrow0$. For each fixed $\omega\in S^{n-1}$ with $\xi\cdot\omega\ne0$, the substitution $u=2\pi r(\xi\cdot\omega)$ (with orientation, [F2]) gives $\int_\varepsilon^{1/\varepsilon}\frac{\sin(2\pi r\,\xi\cdot\omega)}{r}dr\to\frac\pi2\operatorname{sgn}(\xi\cdot\omega)$; when $\xi\cdot\omega=0$ the integral is zero. In all cases [F2] bounds its absolute value by $6$, uniformly in $\varepsilon$ and $\omega$. Since the sphere has finite measure, [F6] on $S^{n-1}$ gives $\lim_{\varepsilon\downarrow0}\Lambda_{\varepsilon,1/\varepsilon}(\xi)=-ic_n\int_{S^{n-1}}\omega_j\frac\pi2\operatorname{sgn}(\xi\cdot\omega)\,d\sigma(\omega)=-i\frac{c_n\pi}{2}A_n\frac{\xi_j}{|\xi|}=-i\frac{\xi_j}{|\xi|}$ by 1.3 and the constant identity of 1.4. [step 1.2, step 1.3, step 1.4, F2, F6]

3.1 Define the tempered distribution $W_j$ by the symmetric principal-value pairing $\langle W_j,\varphi\rangle:=\lim_{\varepsilon\downarrow0}\int_{\varepsilon<|y|<1/\varepsilon}K_j(y)\varphi(y)\,dy$ for $\varphi\in\mathcal S$; the two-piece bound of 1.1 shows the limit exists, is finite, and is Schwartz-continuous. By [F10], $\langle\mathcal FW_j,\varphi\rangle=\langle W_j,\widehat\varphi\rangle=\lim_{\varepsilon\downarrow0}\int_{\varepsilon<|y|<1/\varepsilon}K_j(y)\widehat\varphi(y)\,dy$; the double integrand is absolutely integrable since $\int_{\varepsilon<|y|<1/\varepsilon}|K_j(y)|\,dy\int_{\mathbb R^n}|\varphi(\xi)|\,d\xi<\infty$, so [F5] applies, giving $\int_{\varepsilon<|y|<1/\varepsilon}K_j(y)\widehat\varphi(y)\,dy=\int_{\mathbb R^n}\varphi(\xi)\Lambda_{\varepsilon,1/\varepsilon}(\xi)\,d\xi$. By 2.1 the bracket converges to $-i\xi_j/|\xi|$ pointwise off the null set $\{\xi=0\}$, and by the uniform bound of 2.1 it is dominated by a constant times $|\varphi(\xi)|$; [F6] therefore yields $\langle\mathcal FW_j,\varphi\rangle=\int_{\mathbb R^n}\varphi(\xi)(-i\xi_j/|\xi|)\,d\xi$, i.e. $\mathcal FW_j=m_j$ as tempered distributions. [step 1.1, step 2.1, F5, F6, F10]

4.1 By [F8] and 3.1, $\mathcal F(W_j*f)=(\mathcal FW_j)(\mathcal Ff)=m_j\widehat f$; by [F1] the $L^2$ class $R_jf$ has Fourier transform $m_j\widehat f$ as well, so the two tempered distributions agree and [F9] gives $W_j*f=R_jf$. By [F7] and the definition of $W_j$ in 3.1, the value $(W_j*f)(x)=\langle W_j,f(x-\,\cdot\,)\rangle$ is exactly the limit $J(x)$ of 1.1; the continuity in 1.1 therefore makes $J$ a continuous representative of the $L^2$ class $R_jf$, and the truncated integrals $\int_{|y|>\varepsilon}K_j(y)f(x-y)dy$ converge to it at every $x$. [step 1.1, step 3.1, F1, F7, F8, F9] ∎
