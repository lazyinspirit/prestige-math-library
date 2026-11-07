---
id: lem-gl2-trilinear-integral-normalization-constant
kind: lemma
title: "The GL2 Trilinear Integral Normalizing Constant"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - thm-beta-gamma-identity
  - thm-euler-reflection-formula
  - def-euler-gamma-function
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "S. D. Miller and W. Schmid, The Rankin–Selberg Method for Automorphic Distributions"
      url: "https://arxiv.org/pdf/math/0605783v1"
      locator: "§4, equation (4.16), printed pp. 19–20; the proof here evaluates the integral directly."
---

## Statement

Let $x,y,z$ be pairwise distinct real numbers, let $\delta\in\{0,1\}$,
and let $\alpha,\beta\in\mathbb C$ satisfy
$\operatorname{Re}\alpha>0$, $\operatorname{Re}\beta>0$, and
$\operatorname{Re}(\alpha+\beta)<1$. Powers of positive real numbers use
the real logarithm. Set
$$G_0(w)=2(2\pi)^{-w}\Gamma(w)\cos(\pi w/2),\qquad G_1(w)=2i(2\pi)^{-w}\Gamma(w)\sin(\pi w/2).$$
The following improper integral converges absolutely and has the indicated value:
$$\int_{\mathbb R}\left(\frac{\operatorname{sgn}((y-t)(t-x))}{\operatorname{sgn}((y-z)(z-x))}\right)^\delta |x-t|^{\alpha-1}|y-t|^{\beta-1}|z-t|^{-\alpha-\beta}\,dt=\frac{(-1)^\delta G_\delta(\alpha)G_\delta(\beta)}{G_0(\alpha+\beta)}|x-y|^{\alpha+\beta-1}|x-z|^{-\beta}|y-z|^{-\alpha}.$$
The values at the three excluded points do not affect the integral. The
denominator on the right is nonzero in this domain. No choice principle is
assumed.

## Statement references

[[def-euler-gamma-function|Euler's Gamma function]]

## Facts & Assumptions

**Given:** The parameters, points, parity, and positive-real power convention in the Statement.

[F1] [[thm-beta-gamma-identity]]: $B(p,q)=\Gamma(p)\Gamma(q)/\Gamma(p+q)$ for $\operatorname{Re}p,\operatorname{Re}q>0$; the Beta integral uses the positive-real logarithm.

[F2] [[thm-euler-reflection-formula]]: $\Gamma(w)\Gamma(1-w)=\pi/\sin(\pi w)$ for nonintegral $w$.

## Proof

**Given:** The data in the Statement; write $h=\alpha+\beta$.

1.1 Near $x$ and $y$, absolute convergence reduces respectively to $\operatorname{Re}\alpha>0$ and $\operatorname{Re}\beta>0$. Near $z$ it reduces to $\operatorname{Re}h<1$. At infinity the absolute integrand is $O(|t|^{-2})$. Thus splitting at $x,y,z$ gives an absolutely convergent improper integral. [given, algebra]

2.1 Make the real projective substitution $u=(t-x)(y-z)/((t-z)(y-x))$. It sends $x,y,z$ to $0,1,\infty$. Direct subtraction gives $u-1=(x-z)(t-y)/((t-z)(y-x))$ and $|du/dt|=|(y-z)(x-z)/(y-x)|\,|t-z|^{-2}$. Consequently the sign quotient in the Statement is $\operatorname{sgn}(u(u-1))$, and the positive-real absolute-power factors, including the absolute Jacobian, become $|x-y|^{h-1}|x-z|^{-\beta}|y-z|^{-\alpha}|u|^{\alpha-1}|1-u|^{\beta-1}\,du$. Split into intervals before substitution; the pole of the substitution causes no boundary contribution because of absolute convergence. The desired integral is therefore the displayed scalar factor times $C_\delta=\int_{\mathbb R}\operatorname{sgn}(u(u-1))^\delta |u|^{\alpha-1}|1-u|^{\beta-1}\,du$. [step 1.1, algebra]

3.1 On $(0,1)$ the sign is $-1$, so this part of $C_\delta$ is $(-1)^\delta B(\alpha,\beta)$. On $(-\infty,0)$ put $v=-u/(1-u)$; this gives $B(\alpha,1-h)$. On $(1,\infty)$ put $v=(u-1)/u$; this gives $B(\beta,1-h)$. All three Beta integrals have parameters with positive real parts. Hence $C_\delta=(-1)^\delta B(\alpha,\beta)+B(\alpha,1-h)+B(\beta,1-h)$. [step 2.1, F1, algebra]

4.1 Apply [F1] and [F2] to the expression in step 3.1. Since $0<\operatorname{Re}\alpha,\operatorname{Re}\beta,\operatorname{Re}h<1$, none is an integer and the reflection denominators are nonzero. The result is $C_\delta=\Gamma(\alpha)\Gamma(\beta)\Gamma(h)^{-1}((-1)^\delta+(\sin(\pi\alpha)+\sin(\pi\beta))/\sin(\pi h))$. Put $A=\pi\alpha/2$, $B=\pi\beta/2$. The elementary sine addition identities give the bracket as $2\cos A\cos B/\cos(A+B)$ for $\delta=0$, and as $2\sin A\sin B/\cos(A+B)$ for $\delta=1$. Substituting the definitions of $G_0,G_1$ proves $C_\delta=(-1)^\delta G_\delta(\alpha)G_\delta(\beta)/G_0(h)$. [step 3.1, F1, F2, algebra]

5.1 Reflection also shows $\Gamma(h)\ne0$ in this strip, while $\cos(\pi h/2)\ne0$ because its zeros are the odd integers. Thus $G_0(h)\ne0$. Insert the value of $C_\delta$ from step 4.1 into step 2.1 to obtain the stated formula with its legitimate denominator. Every split and substitution was finite and explicit. [step 2.1, step 4.1, F2, algebra] ∎
