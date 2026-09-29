---
id: lem-analytic-boundary-green-corrector-is-smooth
kind: lemma
title: "Green correctors are smooth at analytic boundaries"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps:
  - cor-holomorphic-functions-are-real-analytic-and-smooth
  - thm-c-two-characterization-of-plane-subharmonicity
  - def-countable-choice
  - cor-complex-power-series-sums-are-analytic
  - cor-power-series-sums-are-smooth-with-coefficient-formula
  - def-barrier-and-regular-boundary-point
  - def-complex-series-power-series-and-absolute-convergence
  - def-real-analytic-function
  - lem-log-modulus-is-harmonic-off-its-centre
  - lem-local-subharmonic-peak-function-globalizes
  - lem-planar-barrier-controls-perron-solutions
  - thm-c2-holomorphic-components-are-harmonic
  - thm-conformal-invariance-of-plane-harmonicity
  - thm-green-function-exists-on-bounded-plane-domains
  - thm-harmonic-and-holomorphic-schwarz-reflection-principles
  - thm-holomorphic-inverse-function-theorem
  - thm-plane-harmonic-functions-are-smooth-and-real-analytic
sources:
  references:
    - title: "Mikhail Lyubich, Dynamics of Quadratic Polynomials, Vol. I, Appendix 1, Sections 10.1-10.9"
      url: https://www.math.stonybrook.edu/~mlyubich/book.pdf
      locator: "Sections 10.3 and 10.7, printed pp. 164-166 and 169-170: smooth Green correctors at analytic boundaries and barrier regularity"
    - title: "Axler, Bourdon and Ramey, Harmonic Function Theory, 2nd ed., Chapter 11"
      url: https://www.axler.net/HFT.pdf
      locator: "Chapter 11, printed pp. 223-237: reflection across analytic boundary arcs and Perron regularity"
    - title: "E. B. Saff, Logarithmic Potential Theory with Applications to Approximation Theory, Section 3"
      url: https://arxiv.org/pdf/1010.3760
      locator: "Section 3, PDF pp. 19-25: boundary regularity of the Green function for smooth domains"
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $D\subseteq\mathbb C$ be a bounded complex domain whose boundary is a
compact real-analytic curve: for every $\zeta\in\partial D$ there are an open
interval $(-\varepsilon,\varepsilon)$, a real-analytic parametrization
$\gamma:(-\varepsilon,\varepsilon)\to\mathbb C$ with $\gamma(0)=\zeta$ and
$\gamma'(0)\ne0$, and a neighbourhood $U$ of $\zeta$ with
$\partial D\cap U=\gamma\bigl((-\varepsilon,\varepsilon)\bigr)$ for which
$D\cap U$ is one of the two components of
$U\setminus\gamma\bigl((-\varepsilon,\varepsilon)\bigr)$. Let $a\in D$ and let
$g_D(\cdot,a)$ be the canonical Green kernel of
[[thm-green-function-exists-on-bounded-plane-domains]], with Perron corrector
$h_a:=-\log|\cdot-a|-g_D(\cdot,a)$. Then every boundary point of $D$ is regular
([[def-barrier-and-regular-boundary-point]]), the corrector $h_a$ extends to a
function of class $C^2$ on the closure $\overline D$, and consequently
$g_D(\cdot,a)=-\log|\cdot-a|-h_a$ extends to a $C^2$ function on
$\overline D\setminus\{a\}$ whose trace on $\partial D$ is identically zero.
The extension is obtained locally from a holomorphic chart and the odd
harmonic reflection across the analytic arc.

## Facts & Assumptions

**Given:** Countable Choice and a bounded complex domain $D\subseteq\mathbb C$ with the real-analytic boundary parametrizations of the statement, a point $a\in D$, and $\zeta\in\partial D$ with its parametrization $\gamma:(-\varepsilon,\varepsilon)\to\mathbb C$ and neighbourhood $U$ ([[def-real-analytic-function]]). Green kernels and Perron correctors are those of [[thm-green-function-exists-on-bounded-plane-domains]].

[F1] For the bounded domain $D$ and $a\in D$, the canonical Green kernel exists and equals $g_D(z,a)=F_a(z)-h_a(z)$ with $F_a=-\log|\cdot-a|$ and $h_a=H_{b_a}$ the regularized Perron envelope of $b_a=F_a|_{\partial D}$; $h_a$ is harmonic on $D$ and bounded, $g_D(\cdot,a)$ is positive and harmonic on $D\setminus\{a\}$, and $g_D(z,a)\to0$ as $z\to\eta\in\partial D$ through $D$ at every regular boundary point $\eta$ ([[thm-green-function-exists-on-bounded-plane-domains]]).

[F2] Suppose there are a neighbourhood $U_0$ of a boundary point $\eta$ and a subharmonic $q$ on $D\cap U_0$ with: $q<0$ on $D\cap U_0$; $q(z)\to0$ as $z\to\eta$; and $\sup\{q(z):z\in D\cap\partial W\}<0$ for some smaller neighbourhood $W\Subset U_0$ of $\eta$. Then $D$ has a global barrier at $\eta$, hence $\eta$ is regular ([[lem-local-subharmonic-peak-function-globalizes]], [[lem-planar-barrier-controls-perron-solutions]]).

[F3] If a function $u$ is harmonic on $\mathbb D^+=\{|z|<1,\ \operatorname{Im}z>0\}$, continuous on its closure and vanishes on $(-1,1)$, then its odd reflection $U(z)=u(z)$ for $\operatorname{Im}z\ge0$ and $U(z)=-u(\overline z)$ for $\operatorname{Im}z<0$ is harmonic on the full unit disc ([[thm-harmonic-and-holomorphic-schwarz-reflection-principles]]); every harmonic function is smooth, indeed real-analytic ([[thm-plane-harmonic-functions-are-smooth-and-real-analytic]]).

[F4] If $f$ is nonconstant and holomorphic on a complex domain and $f'(a)\ne0$, then $f$ is biholomorphic between neighbourhoods of $a$ and $f(a)$ ([[thm-holomorphic-inverse-function-theorem]]).

[F5] A real-analytic $\gamma$ equals its convergent power series $\gamma(t)=\sum_{n\ge0}c_nt^n$ near $0$ ([[def-real-analytic-function]]); the same series with complex coefficients converges on a disc in $\mathbb C$ and defines a holomorphic function there ([[def-complex-series-power-series-and-absolute-convergence]], [[cor-complex-power-series-sums-are-analytic]]), whose derivative at $0$ is the coefficient $c_1$ ([[cor-power-series-sums-are-smooth-with-coefficient-formula]]).

[F6] The function $\log|\cdot|$ is harmonic on $\mathbb C\setminus\{0\}$, composition with a holomorphic map preserves harmonicity, holomorphic functions have smooth real and imaginary components ([[cor-holomorphic-functions-are-real-analytic-and-smooth]]), and the $C^2$ real and imaginary components of a holomorphic function are harmonic ([[lem-log-modulus-is-harmonic-off-its-centre]], [[thm-conformal-invariance-of-plane-harmonicity]], [[thm-c2-holomorphic-components-are-harmonic]]); harmonic functions are subharmonic by the $C^2$ Laplacian criterion ([[thm-c-two-characterization-of-plane-subharmonicity]]). Thus $F_a=-\log|\cdot-a|$ is harmonic, and smooth, on $D\setminus\{a\}$.

[F7] Countable Choice supplies a choice function for every countable family of nonempty sets ([[def-countable-choice]]). The Green-kernel existence and regular-boundary clause of [F1] inherit this hypothesis; [F1] is used at steps 5.1, 6.1 and 7.1.

## Proof

**Proof technique:** direct.

1.1 Complexifying the chart: by [F5] the parametrization satisfies $\gamma(t)=\sum_{n\ge0}c_nt^n$ for $|t|$ small, with $c_0=\zeta$ and $c_1=\gamma'(0)\ne0$. The complex power series $\Gamma(w):=\sum_{n\ge0}c_nw^n$ converges on a disc $D(0,r_0)$ and defines a holomorphic function there with $\Gamma(t)=\gamma(t)$ for real $|t|<r_0$ and $\Gamma'(0)=c_1\ne0$. By [F4] the map $\Gamma$ restricts to a biholomorphism from some disc $D(0,r)\subseteq D(0,r_0)$ onto an open neighbourhood $V$ of $\zeta$, and the two components of $D(0,r)\setminus(-r,r)$ map onto the two components of $V\setminus\gamma((-r,r))$, the latter being an arc of $\partial D$ when $r\le\varepsilon$. Replacing $\gamma$ by $t\mapsto\gamma(-t)$ if necessary, we may assume $\Gamma$ maps the upper half-disc $\mathbb D^+_r:=\{w:|w|<r,\ \operatorname{Im}w>0\}$ onto $D\cap V$. [F5, F4, given]

2.1 A local peak on the domain: define, for $w\in\mathbb D^+_r$, $$q(w):=-\operatorname{Re}\sqrt{-iw},$$ with the principal square root. Since $w\mapsto\sqrt{-iw}$ is holomorphic on the half-disc --- there $-iw$ has positive real part, so it avoids $(-\infty,0]$ --- both components of that holomorphic square root are smooth by [F6], so the $C^2$ components theorem makes $q$ harmonic and the Laplacian criterion makes it subharmonic on $\mathbb D^+_r$. Writing $w=\rho e^{i\varphi}$ with $0<\varphi<\pi$ gives $-iw=\rho e^{i(\varphi-\pi/2)}$ with $\varphi-\pi/2\in(-\pi/2,\pi/2)$, so $\sqrt{-iw}=\sqrt\rho\,e^{i(\varphi-\pi/2)/2}$ and $$q(w)=-\sqrt\rho\cos\Bigl(\frac\varphi2-\frac\pi4\Bigr)\le-\frac{\sqrt\rho}{\sqrt2}<0,$$ because $|\varphi/2-\pi/4|<\pi/4$; moreover $q(w)\to0$ as $w\to0$. Hence $q\circ\Gamma^{-1}$ is subharmonic (by [F6], applied to the holomorphic $\Gamma^{-1}$) and negative on $D\cap V$, and it tends to $0$ at $\zeta$. [F6, F4, step 1.1, algebra]

3.1 The peak is bounded away from $0$ on the boundary of a smaller neighbourhood. Let $W:=\Gamma\bigl(D(0,r/2)\bigr)$. Then $W$ is a neighbourhood of $\zeta$ with $W\Subset V$, and $D\cap\partial W=\Gamma\bigl(\mathbb D^+_r\cap\{|w|=r/2\}\bigr)$ by step 1.1; on that set $\rho=r/2$, so step 2.1 gives $\sup\{q(\Gamma^{-1}(z)):z\in D\cap\partial W\}\le-(r/2)^{1/2}/\sqrt2<0$. [step 1.1, step 2.1, algebra]

4.1 Conclusion of regularity: step 3.1 verifies hypothesis 3 of [F2] for the subharmonic function $q\circ\Gamma^{-1}$ of step 2.1, whose hypotheses 1 and 2 were also verified there; hence $D$ has a global barrier at $\zeta$ and $\zeta$ is a regular boundary point by [F2]. As $\zeta\in\partial D$ was arbitrary, every boundary point of $D$ is regular. [F2, step 2.1, step 3.1]

5.1 Smoothness near the arc by reflection: Countable Choice [F7] licenses the Green kernel and its regular-boundary limits from [F1]. Fix $\zeta$ and keep the chart $\Gamma$ of step 1.1. Choose $0<R<r$ small enough that $\overline{D(0,R)}$ remains in the chart and $\Gamma(\overline{\mathbb D^+_R})\subseteq\overline D\setminus\{a\}$; this is possible since $\Gamma(0)=\zeta\ne a$, while step 1.1 puts the open upper half-disc in $D$ and its real diameter on $\partial D$. Define $G(w):=g_D(\Gamma(w),a)$ for $w\in\mathbb D^+_R$. Then $G$ is harmonic there by [F6], since $g_D(\cdot,a)$ is harmonic on $D\setminus\{a\}$ by [F1] and $\Gamma$ is holomorphic. At a real $t\in(-R,R)$ define the boundary value $G(t):=0$. This is a continuous extension across the diameter: whenever $w_n$ approaches $t$ from the upper half-disc, $\Gamma(w_n)\in D$ approaches the regular boundary point $\Gamma(t)$, so [F1] and step 4.1 give $G(w_n)\to0$. On the upper semicircle of radius $R$, the image lies in $D$ except at its two real endpoints; the same interior continuity and regular-boundary limits give continuity on the whole closed half-disc. Rescale by $w\mapsto w/R$ and apply [F3]; the odd reflection is harmonic on $D(0,R)$ and smooth there. Choose $0<r_1<R$; its restriction to $\overline{\mathbb D^+_{r_1}}$ is therefore $C^2$, including the real diameter near $0$. [F1, F7, F3, F6, step 1.1, step 4.1]

6.1 The corrector near the arc is $C^2$: on the smaller closed half-disc $\overline{\mathbb D^+_{r_1}}$ of step 5.1 one has $$h_a\bigl(\Gamma(w)\bigr)=F_a\bigl(\Gamma(w)\bigr)-G(w)$$ for interior $w$, and this equality extends continuously to its real diameter using the regular boundary values. The reflected extension of $G$ is $C^2$ by step 5.1. Also $F_a\circ\Gamma$ is smooth on a neighbourhood of this closed half-disc: its compact image lies in $\overline D\setminus\{a\}$, hence at positive distance from $a$, and $F_a=-\log|\cdot-a|$ is smooth on the ambient open set $\mathbb C\setminus\{a\}$. Thus $F_a\circ\Gamma-G$ gives a $C^2$ extension of $h_a\circ\Gamma$ across the real diameter. Transport through the local biholomorphism $\Gamma$ gives a $C^2$ extension of $h_a$ to an ambient neighbourhood of the boundary arc near $\zeta$. [F1, F6, step 5.1, algebra]

7.1 Since $\zeta$ was arbitrary, step 6.1 supplies a $C^2$ ambient extension near every boundary point; interior harmonicity supplies smoothness at every interior point. On overlaps the restrictions of these extensions to $D$ equal the same $h_a$, and continuity makes their boundary values and one-sided derivatives agree on $\overline D$. The extensions need not agree outside $D$; their local existence is exactly the asserted $C^2$ regularity on the closure. Finally $g_D(z,a)=-\log|z-a|-h_a(z)$ for $z\in D\setminus\{a\}$; since $-\log|\cdot-a|$ is smooth away from $a$, $g_D(\cdot,a)$ is $C^2$ on $\overline D\setminus\{a\}$ in the same local-extension sense, and its trace on $\partial D$ vanishes by the boundary limits of [F1] in step 4.1. [F1, F6, step 4.1, step 6.1] ∎
