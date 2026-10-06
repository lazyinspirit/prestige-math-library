---
id: lem-existence-of-schwartz-functions-with-flat-fourier-transform-at-the-origin
kind: lemma
title: "Schwartz functions with prescribed flatness of the Fourier transform at the origin"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-schwartz-space-and-its-seminorms, def-ck-and-multi-index-notation-in-several-variables, def-the-standard-smooth-step-function, def-countable-choice, thm-chain-rule, thm-newton-leibniz-with-interior-derivative, thm-riemann-fubini-on-product-rectangles, thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions, cor-c-one-change-of-variables-for-l-one-functions]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: "Shai Dekel, Gerard Kerkyacharian, George Kyriazis, Pencho Petrushev, A New Proof of the Atomic Decomposition of Hardy Spaces, Constructive Theory of Functions (Sozopol 2016), pp. 59-73"
      url: "https://people.math.sc.edu/pencho/Publications/DKKP-Sozopol-2016.pdf"
      locator: "Lemma 1 and its proof, printed pp. 61-62 (PDF pp. 3-4): the finite-difference construction $\\phi(x)=x^{-1}\\Delta_h^m\\Theta(x)$ and its tensor-product extension"
    - title: "Juha Kinnunen, Harmonic Analysis (Aalto University lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/harmonic_analysis.pdf"
      locator: "ch. 1, section 1.2 and Remark 1.11, pp. 9-13 (smooth bumps and the constructions used in the density argument)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Countable Choice. Let $n\ge1$. For every integer $m\ge1$ there is a real, even function
$\varphi\in C_c^\infty(\mathbb R^n)$ with
$$\operatorname{supp}\varphi\subseteq B(0,1),\qquad \int_{\mathbb R^n}\varphi\ne0, \qquad \int_{\mathbb R^n}x^\alpha\varphi(x)\,dx=0\ \text{ for }0<|\alpha|\le m .$$
Equivalently, under the Fourier convention of
[[thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions]],
$\widehat\varphi(0)\ne0$ and $\partial^\alpha\widehat\varphi(0)=0$ for every
multi-index with $0<|\alpha|\le m$. The construction is uniform in $m$: a
single one-dimensional finite-difference construction achieves every
prescribed finite flatness order, and its tensor product is used.

## Facts & Assumptions

**Given:** Countable Choice, an integer $n\ge1$ and an integer $m\ge1$. The multi-index notation is that of [[def-ck-and-multi-index-notation-in-several-variables]] and the seminorms are those of [[def-schwartz-space-and-its-seminorms]].

[A1] Countable Choice is assumed, in particular for the Fourier differentiation identity and the Lebesgue change-of-variables formula cited below ([[def-countable-choice]]).

[F1] There is a smooth bump: with $\sigma$ the standard smooth step function of [[def-the-standard-smooth-step-function]], which is smooth, vanishes on $(-\infty,0]$ and equals $1$ on $[1,\infty)$, the function $\theta(x):=\sigma(\tfrac1{16}-x^2)$ is smooth (composition of the smooth functions $\sigma$ and $x\mapsto\tfrac1{16}-x^2$, [[thm-chain-rule]]), even, positive on $(-1/4,1/4)$ (where $\tfrac1{16}-x^2\in(0,\tfrac1{16}]$ and $\sigma>0$ on $(0,\infty)$) and supported in $[-1/4,1/4]$ (where $\tfrac1{16}-x^2\ge0$).

[F2] Newton-Leibniz with an interior derivative: if $G$ is continuous on
$[a,b]$, differentiable on $(a,b)$ and $G'=g$ there with $g$ Riemann
integrable, then $\int_a^bg=G(b)-G(a)$
([[thm-newton-leibniz-with-interior-derivative]]). Applied inductively this
gives, for $f\in C^m(\mathbb R)$ and $h>0$, the iterated integral
representation
$$\Delta_h^mf(x)=\int_{[-h,h]^m}f^{(m)}(x+s_1+\cdots+s_m)\,ds_1\cdots ds_m, \qquad \Delta_hf(x)=f(x+h)-f(x-h).$$
There is no factorial prefactor in this representation: each finite-difference
factor introduces one integration over $[-h,h]$. Any factorial below comes
from evaluating the derivative $f^{(m)}$, not from the integration formula.

[F3] Under the Fourier convention of [[thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions]], for $\varphi\in\mathcal S$ and every multi-index $\alpha$ one has $\partial^\alpha\widehat\varphi(0)=(-2\pi i)^{|\alpha|} \int_{\mathbb R^n}x^\alpha\varphi(x)\,dx$; equivalently, if all mixed moments $\int x^\alpha\varphi$, $0<|\alpha|\le m$, vanish then $\partial^\alpha\widehat\varphi(0)=0$ for those $\alpha$, and conversely.

[F4] Riemann Fubini on a product rectangle factors the integral of a continuous compactly supported tensor product; the coordinate dilation uses the change-of-variables formula ([[thm-riemann-fubini-on-product-rectangles]], [[cor-c-one-change-of-variables-for-l-one-functions]]).



**Proof technique:** finite differences of a bump in one dimension, then tensor product, dilation and normalisation.

## Proof

**Proof technique:** constructive.

1.1 Reduction to even order. If $m$ is odd, replace it by $m+1$: a function whose moments vanish through order $m+1$ also has all moments vanishing through order $m$. We may therefore assume $m\ge2$ is even, and we write $h=1/(8m)$. This uses no choice. [given, construct]

1.2 The one-dimensional construction. Let $\theta$ be the even bump of [F1] and put $\Theta(x)=\theta(x+1/2)-\theta(x-1/2)$. Then $\Theta\in C_c^\infty(\mathbb R)$ is real, odd, and supported in $[-3/4,-1/4]\cup[1/4,3/4]$; moreover $\Theta(x)=-\theta(x-1/2)<0$ on $(1/4,3/4)$ and $\Theta(x)=\theta(x+1/2)>0$ on $(-3/4,-1/4)$. Define $\phi(x)=x^{-1}\Delta^m_h\Theta(x)$. Since $\operatorname{supp}\Delta^m_h\Theta\subseteq[-3/4-mh,3/4+mh]=[-7/8,7/8]$ and is bounded away from $0$, the factor $x^{-1}$ is smooth on a neighbourhood of that support, so $\phi\in C_c^\infty(\mathbb R)$ with support in $[-7/8,7/8]$. The reflection operator $(Pf)(x)=f(-x)$ satisfies $P\Delta_h=-\Delta_hP$; since $\Theta$ is odd and $m$ is even, $\Delta_h^m\Theta$ is odd, so $\phi$ is even and real. [F1, given, algebra]

1.3 The flatness of the one-dimensional Fourier transform. For $1\le\nu\le m$, differentiating $\widehat\phi(\xi)=\int e^{-2\pi i\xi x}\phi(x)\,dx$ under the integral sign and using the polynomial identity $\Delta_h^m(x^{\nu-1})=0$ (the $m$-th finite difference of a polynomial of degree $\nu-1\le m-1$ vanishes) gives $$\widehat\phi^{(\nu)}(0)=(-2\pi i)^\nu\int_{\mathbb R}x^{\nu-1}\Delta_h^m\Theta(x)\,dx=(-2\pi i)^\nu\int_{\mathbb R}\bigl(\Delta_h^mx^{\nu-1}\bigr)(x)\,\Theta(x)\,dx=0,$$ where the middle equality is the self-adjointness $\int f\,(\Delta_h^m g)=\int(\Delta_h^mf)\,g$ of the even-order finite difference, which follows from the translation invariance of Lebesgue measure and $(\Delta_h)^*=-\Delta_h$. [A1, algebra]

1.4 Nonvanishing of the mean. Using self-adjointness again, $$\int_{\mathbb R}\phi=\int_{\mathbb R}x^{-1}\Delta_h^m\Theta(x)\,dx=\int_{\mathbb R}\bigl(\Delta_h^mx^{-1}\bigr)(x)\,\Theta(x)\,dx .$$ On the support of $\Theta$ one has $|x|\ge1/4$, and all points $x+s_1+\cdots+s_m$ in the iterated integral representation of [F2] stay on the same side of zero. Since $m$ is even, $(x^{-1})^{(m)}=m!x^{-m-1}$ has the sign of $x$, while $\Theta$ has the opposite sign on each of its two support components. Thus the integrand $(\Delta_h^mx^{-1})\Theta$ has one constant sign and there is no cancellation. By [F2], $$\Delta_h^m(x^{-1})(x)=m!\int_{[-h,h]^m}(x+s_1+\cdots+s_m)^{-m-1}\,ds_1\cdots ds_m.$$ The integrand has a constant sign on this box, so its absolute value is the integral of the absolute value. The factor $m!$ comes from $(x^{-1})^{(m)}$; the iterated integral contributes the box volume $(2h)^m$. Therefore $$|\Delta_h^m(x^{-1})(x)|=m!\int_{[-h,h]^m}|x+s_1+\cdots+s_m|^{-m-1}\,ds_1\cdots ds_m\ge(2h)^mm!(7/8)^{-m-1}$$ for every $x\in\operatorname{supp}\Theta$, because $|x+s_1+\cdots+s_m|\le 3/4+mh=7/8$. Hence $$\Bigl|\int_{\mathbb R}\phi\Bigr|=\int_{\mathbb R}\bigl|\Delta_h^mx^{-1}\bigr|\,|\Theta|\ge(2h)^mm!(7/8)^{-m-1}\int_{\mathbb R}|\Theta|>0,$$ since $\Theta$ is continuous and not identically zero. [A1, F2, algebra]

2.1 The tensor product and its moments. Put $\psi(x)=\phi(x_1)\phi(x_2)\cdots\phi(x_n)$ and $\Psi(x)=\psi(\lambda x)$ with $\lambda=\sqrt n+1>7\sqrt n/8$; then $\Psi\in C_c^\infty(\mathbb R^n)$ is real and even and $\operatorname{supp}\Psi\subseteq[-7/(8\lambda),7/(8\lambda)]^n\subseteq B(0,1)$, since the euclidean circumradius of that cube is $(7/8)\sqrt n/\lambda<(7/8)\sqrt n/(7\sqrt n/8)=1$. For a multi-index $\alpha$ with $0<|\alpha|\le m$ the substitution $x=\lambda^{-1}t$ gives the factorisation $$\int_{\mathbb R^n}x^\alpha\Psi(x)\,dx=\lambda^{-n-|\alpha|}\prod_{j=1}^n\int_{\mathbb R}t^{\alpha_j}\phi(t)\,dt .$$ If $\alpha_j=0$ the corresponding factor is $\int\phi\ne0$ by step 1.4; if $\alpha_j\ge1$ then $\alpha_j\le|\alpha|\le m$, and $\int t^{\alpha_j}\phi(t)\,dt=0$ by step 1.3 combined with [F3] applied in one dimension. Hence every factor with $\alpha_j\ge1$ vanishes and the product is zero. [A1, step 1.3, step 1.4, F3, F4, algebra]

3.1 Normalisation and conclusion. Step 2.1 gives $\int\Psi=\lambda^{-n}\bigl(\int\phi\bigr)^n\ne0$, so $$\varphi=\Bigl(\int_{\mathbb R^n}\Psi\Bigr)^{-1}\Psi$$ is real, even, smooth and compactly supported in $B(0,1)$, with $\int\varphi=1$ and all moments $\int x^\alpha\varphi$, $0<|\alpha|\le m$, still vanishing. The Fourier form of the statement follows from the differentiation identity of [F3] and $\widehat\Psi(0)=\int\Psi\ne0$, together with the linearity of the Fourier transform under the real scalar normalisation. This proves the lemma. [A1, step 2.1, F3, discharge-construct] ∎
