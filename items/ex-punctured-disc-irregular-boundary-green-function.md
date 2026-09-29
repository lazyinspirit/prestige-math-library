---
id: ex-punctured-disc-irregular-boundary-green-function
kind: example
title: "An irregular puncture does not force the Green kernel to vanish"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps:
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - def-complex-domain
  - def-countable-choice
  - def-green-function-plane-domain
  - def-perron-envelope-for-the-plane-dirichlet-problem
  - def-perron-family-for-the-plane-dirichlet-problem
  - def-plane-harmonic-function
  - def-plane-subharmonic-function
  - def-unit-disc-upper-half-plane-and-blaschke-factor
  - ex-green-function-disc-with-nonzero-pole
  - lem-log-modulus-is-harmonic-off-its-centre
  - lem-perron-family-is-nonempty-and-bounded
  - lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity
  - thm-c-two-characterization-of-plane-subharmonicity
  - thm-conformal-invariance-of-plane-harmonicity
  - thm-green-function-exists-on-bounded-plane-domains
sources:
  references:
    - title: "Axler, Bourdon and Ramey, Harmonic Function Theory, 2nd ed., Chapter 11"
      url: https://www.axler.net/HFT.pdf
      locator: "Chapter 11, printed pp. 223-237: irregular boundary points, the punctured disc and Perron solutions"
    - title: "Boris Khoruzhenko, LTCC Potential Theory lecture notes, Sections 4.1-4.2"
      url: https://maths.qmul.ac.uk/~boris/potential_th_notes.pdf
      locator: "Sections 4.1-4.2, PDF pp. 34-39: harmonic measure and the logarithmic Green kernel on punctured domains"
    - title: "E. B. Saff, Logarithmic Potential Theory with Applications to Approximation Theory, Section 3"
      url: https://arxiv.org/pdf/1010.3760
      locator: "Section 3, PDF pp. 19-25: Green functions with a logarithmic pole"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
---

## Example

Assume Countable Choice. Let $\mathbb D=\{|z|<1\}$ be the unit disc, let
$\Omega:=\mathbb D\setminus\{0\}$ be the punctured disc, and let $a\in\Omega$,
so that $0<|a|<1$. Then the canonical Green function of $\Omega$ at $a$ exists
and agrees with the restriction of the disc kernel,
$$g_\Omega(z,a)=g_{\mathbb D}(z,a)=\log\Bigl|\frac{1-\overline az}{z-a}\Bigr|\qquad(z\in\Omega\setminus\{a\}),$$
and consequently
$$\lim_{\substack{z\to0\\ z\in\Omega}}g_\Omega(z,a)=\log\frac1{|a|}>0,$$
although $0$ is a boundary point of $\Omega$. Thus a definition of the Green
kernel that demanded the value $0$ at every Euclidean boundary point would
exclude the canonical Green kernel of $\mathbb D\setminus\{0\}$.

## Facts & Assumptions

**Given:** The unit disc $\mathbb D$ and its Blaschke data ([[def-unit-disc-upper-half-plane-and-blaschke-factor]]), the punctured disc $\Omega=\mathbb D\setminus\{0\}$, a point $a\in\Omega$ with modulus and conjugate as in [[def-complex-conjugate-real-imaginary-part-and-modulus]], the canonical Green kernel of [[def-green-function-plane-domain]], Perron families and envelopes of [[def-perron-family-for-the-plane-dirichlet-problem]] and [[def-perron-envelope-for-the-plane-dirichlet-problem]], harmonicity of [[def-plane-harmonic-function]], subharmonicity of [[def-plane-subharmonic-function]], complex domains of [[def-complex-domain]], and Countable Choice ([[def-countable-choice]]).

[F1] A logarithmic-pole candidate at $a$ on a proper plane domain is a nonnegative function that is harmonic off $a$ and whose sum with $\log|z-a|$ extends harmonically across $a$; the canonical Green function $g_\Omega(\cdot,a)$ is the pointwise least candidate, when that least member exists ([[def-green-function-plane-domain]]).

[F2] Assume Countable Choice. For a bounded complex domain $\Omega$ and $a\in\Omega$, put $F_a(z):=-\log|z-a|$, $b_a:=F_a|_{\partial\Omega}$ and $h_a:=H_{b_a}$; then $g_\Omega(z,a):=F_a(z)-h_a(z)$ is the canonical positive Green kernel of $\Omega$ at $a$, so the canonical candidate exists ([[thm-green-function-exists-on-bounded-plane-domains]]).

[F3] For the unit disc and $a\ne0$ one has $g_{\mathbb D}(z,a)=\log\bigl|(1-\overline az)/(z-a)\bigr|$ for $z\in\mathbb D\setminus\{a\}$; the function is positive and harmonic on $\mathbb D\setminus\{a\}$ and tends to $0$ as $|z|\to1$ ([[ex-green-function-disc-with-nonzero-pole]]).

[F4] A function $v:\Omega\to[-\infty,\infty)$ is a Perron lower function for $(\Omega,\varphi)$ when it is subharmonic on $\Omega$ and $\limsup_{z\to\zeta}v(z)\le\varphi(\zeta)$ for every $\zeta\in\partial\Omega$ ([[def-perron-family-for-the-plane-dirichlet-problem]]).

[F5] The Perron envelope is $U_\varphi(z)=\sup\{v(z):v\in\mathcal P(\varphi,\Omega)\}$ and its regularization is $H_\varphi(z)=\lim_{\rho\downarrow0}\sup\{U_\varphi(w):w\in\Omega,\ |w-z|<\rho\}$ ([[def-perron-envelope-for-the-plane-dirichlet-problem]]).

[F6] For a bounded complex domain and a continuous datum $\varphi$ with $M=\max_{\partial\Omega}\varphi$, every $v\in\mathcal P(\varphi,\Omega)$ satisfies $v\le M$ on $\Omega$ ([[lem-perron-family-is-nonempty-and-bounded]]).

[F7] The function $\log|\cdot|$ is harmonic on $\mathbb C\setminus\{0\}$ ([[lem-log-modulus-is-harmonic-off-its-centre]]), and precomposition of a harmonic function with a holomorphic map on an open set is harmonic ([[thm-conformal-invariance-of-plane-harmonicity]]).

[F8] A $C^2$ function with $\Delta u\ge0$ is subharmonic, so every harmonic function is subharmonic ([[thm-c-two-characterization-of-plane-subharmonicity]]), and every nonnegative linear combination of subharmonic functions is subharmonic ([[lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity]]); in particular a subharmonic function plus a harmonic function, and a subharmonic function minus a harmonic function, is subharmonic.

## Verification

**Proof technique:** direct.

1.1 As a subset of $\mathbb C$, the punctured disc $\Omega$ is open, bounded and nonempty. It is path-connected: write $z=\rho e^{i\theta}$ with $0<\rho<1$. The radial segment $t\mapsto((1-t)\rho+t/2)e^{i\theta}$, $0\le t\le1$, joins $z$ to $z/(2|z|)=e^{i\theta}/2$ while staying at radii strictly between $0$ and $1$; a circular arc of radius $1/2$ then joins that point to $1/2$. Thus the path stays in $\Omega$ and avoids $0$. Hence $\Omega$ is a bounded complex domain in the sense of [[def-complex-domain]]. [given]

2.1 Since $\Omega$ is open, $\partial\Omega=\overline\Omega\setminus\Omega$, and $\overline\Omega=\overline{\mathbb D}$: the unit disc is contained in the closure of $\Omega$ and every point of $\partial\mathbb D$ is a limit of points of $\Omega$, while $0$ is not in $\Omega$. Hence $$\partial\Omega=\overline{\mathbb D}\setminus(\mathbb D\setminus\{0\})=(\overline{\mathbb D}\setminus\mathbb D)\cup\{0\}=\{|z|=1\}\cup\{0\},$$ so every boundary point of $\Omega$ is either the puncture $0$ or a point of the unit circle. [step 1.1, given]

3.1 The function $F_a(z)=-\log|z-a|$ is continuous on the boundary of $\Omega$: $|z-a|\ge\min\{1-|a|,|a|\}>0$ for $z\in\partial\Omega$ by step 2.1, since $a\ne0$ and $|a|<1$. Define $h(z):=-\log|1-\overline az|$ for $z\in\mathbb D$. The polynomial $1-\overline az$ is holomorphic and nowhere zero on $\mathbb D$, because $|\overline az|\le|a|<1$, so $h$ is harmonic on $\mathbb D$ by [F7], and in particular on $\Omega$. [F7, step 2.1, given]

4.1 On the unit circle, $|1-\overline a\xi|=|\xi-a|$ for $|\xi|=1$: indeed $|1-\overline a\xi|=|\xi|\,|\overline\xi-\overline a|=|\xi-a|$. Consequently $h(\xi)=-\log|\xi-a|=F_a(\xi)$ on $|\xi|=1$, while $h(0)=0$; the function $h$ is continuous on the closed unit disc, being a composition of continuous functions that is harmonic on the open disc. [step 3.1, given, algebra]

4.2 For $z\in\mathbb D\setminus\{a\}$ the identity $$F_a(z)-h(z)=-\log|z-a|+\log|1-\overline az|=\log\Bigl|\frac{1-\overline az}{z-a}\Bigr|=g_{\mathbb D}(z,a)$$ holds by [F3]; so the difference of the singular term $F_a$ and the harmonic function $h$ is exactly the disc kernel. [F3, step 3.1, algebra]

5.1 Every Perron lower function for the datum $b:=F_a|_{\partial\Omega}$ is dominated by $h$. Let $v\in\mathcal P(b,\Omega)$ and $\varepsilon>0$, and put $w:=v-h+\varepsilon\log|z|$ on $\Omega$. This $w$ is subharmonic on $\Omega$: $v$ is subharmonic by [F4], $h$ is harmonic on $\Omega$ by step 3.1, and $\log|z|$ is harmonic on $\Omega\subseteq\mathbb C\setminus\{0\}$ by [F7], so [F8] applies to $v+(-h)+\varepsilon\log|z|$. At a boundary point $\xi$ with $|\xi|=1$ one has $\limsup_{z\to\xi}v(z)\le b(\xi)=F_a(\xi)$ by [F4] and step 3.1, while $-h(z)\to-F_a(\xi)$ by step 4.1 and $\varepsilon\log|z|\to0$, so $\limsup_{z\to\xi}w(z)\le F_a(\xi)-F_a(\xi)+0=0$. At the puncture, [F4] applied at $0$ gives $\limsup_{z\to0}v(z)\le b(0)=-\log|a|$, and this value is finite, so $v$ is bounded above on a small punctured neighbourhood of $0$, $h$ is bounded there by step 4.1, and $\varepsilon\log|z|\to-\infty$; hence $\limsup_{z\to0}w(z)=-\infty\le0$. Thus $w$ is subharmonic on $\Omega$ and has boundary limsup at most $0$ at every boundary point, over the two boundary cases and a general $\varepsilon>0$. [F4, F7, F8, step 3.1, step 4.1]

6.1 By steps 1.1 and 2.1 the hypotheses of [F4] and [F6] apply to the bounded complex domain $\Omega$ with the continuous zero datum, so step 5.1 gives $w\in\mathcal P(0,\Omega)$ and [F6] gives $w\le0$, that is $v\le h-\varepsilon\log|z|$ on $\Omega$. Since $-\log|z|>0$ on $\Omega$ and $\varepsilon>0$ is arbitrary, letting $\varepsilon\downarrow0$ yields $v\le h$ on $\Omega$. [F4, F6, step 1.1, step 2.1, step 5.1]

6.2 Conversely, each function $h+\varepsilon\log|z|$ with $\varepsilon>0$ is a Perron lower function for the datum $b$. It is subharmonic on $\Omega$ because $h$ is harmonic there by step 3.1 and $\varepsilon\log|z|$ is harmonic there by [F7], and at every boundary point the limsup condition of [F4] holds: at $|\xi|=1$ the limit is $h(\xi)+\varepsilon\log1=F_a(\xi)=b(\xi)$ by step 4.1, and at $0$ the function tends to $-\infty\le b(0)$ because $h$ stays bounded near $0$ by step 4.1 while $\varepsilon\log|z|\to-\infty$. Hence [F5] gives $U_b\ge h+\varepsilon\log|z|$ on $\Omega$ for every $\varepsilon>0$, and letting $\varepsilon\downarrow0$ gives $U_b\ge h$ on $\Omega$; step 5.1 gave $U_b\le h$ because the supremum of a family all of whose members are at most $h$ is at most $h$. [F4, F5, F7, step 3.1, step 4.1, step 5.1]

7.1 Therefore $U_b=h$ on $\Omega$. Since $h$ is continuous on $\Omega$ by step 3.1, the regularized envelope of [F5] is $$H_b(z)=\lim_{\rho\downarrow0}\sup\{h(w):w\in\Omega,\ |w-z|<\rho\}=h(z)\qquad(z\in\Omega).$$ [F5, step 3.1, step 5.1, step 6.2]

8.1 Step 1.1 makes $\Omega$ a bounded complex domain and $a\in\Omega$, so [F2] applies with $b_a=b$ and $h_a=H_b$: the canonical Green kernel of $\Omega$ at $a$ exists and equals $$g_\Omega(z,a)=F_a(z)-H_b(z)=F_a(z)-h(z)=g_{\mathbb D}(z,a)\qquad(z\in\Omega\setminus\{a\}),$$ the last equality by step 4.2. In particular $\Omega$ is Greenian at $a$ and the canonical kernel is the restriction of the disc kernel. [F1, F2, step 4.2, step 7.1]

9.1 Since $a\ne0$, the point $0$ lies in $\mathbb D\setminus\{a\}$ and the formula of [F3] extends continuously to it, giving $g_{\mathbb D}(0,a)=\log|1/(0-a)|=\log(1/|a|)$. By step 8.1 the same formula represents $g_\Omega(\cdot,a)$ on $\Omega\setminus\{a\}$, so $$\lim_{z\to0}g_\Omega(z,a)=\log\frac1{|a|},$$ and this value is strictly positive because $0<|a|<1$. By step 2.1 the puncture $0$ is a boundary point of $\Omega$, so the canonical Green kernel does not vanish at this Euclidean boundary point, and a definition requiring vanishing at every Euclidean boundary point would exclude it. [F3, step 2.1, step 8.1]

10.1 Countable Choice is used exactly through the cited existence theorem [F2], which supplies both the existence of the canonical kernel on the bounded domain $\Omega$ and its identification with $F_a-H_b$; the disc formula of [F3], the Perron comparisons of steps 5.1, 6.2 and 7.1, and the puncture limit of step 9.1 use no choice principle. [F2, F3, step 5.1, step 6.2, step 7.1, step 9.1] ∎
