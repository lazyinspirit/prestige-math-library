---
id: lem-parabolic-projection-time-product-rule
kind: lemma
title: Time derivatives of fixed and differentiable comparison projections
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-bochner-integrable-function
  - def-countable-choice
  - def-parabolic-evolution-triple-and-energy-space
  - lem-parabolic-bochner-l2-approximate-identity
  - thm-bochner-integrability-criterion
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-holder-inequality-for-integrals
  - thm-bounded-linear-maps-commute-with-bochner-integration
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Christian Clason, Introduction to Finite Element Methods, lecture notes
      url: https://arxiv.org/pdf/1709.08618v2.pdf
      locator: "Chapter 12, §12.2, PDF p. 104: differentiating the fixed spatial Ritz projection in the semidiscrete residual."
    - title: Long Chen, Finite Element Methods for Parabolic Equations
      url: https://www.math.uci.edu/~chenlong/226/ParabolicEquation.pdf
      locator: "§2.4, pp. 5–6: the time derivative of the Ritz residual in the semidiscrete error equation."
verification: {}
---

## Statement

Assume Countable Choice. Let $X$ be a separable real Hilbert space and $Y$ a real Hilbert space, and
let $u\in H^1(0,T;X)$ (meaning
$u,u'\in L^2(0,T;X)$ with distribution derivative). It has a unique
continuous representative on $[0,T]$. Let
$P\in\mathcal L(X,Y)$ be a fixed bounded linear map. Then
$Pu\in H^1(0,T;Y)$ and $(Pu)'=Pu'$.

If instead $P:[0,T]\to\mathcal L(X,Y)$ is continuously differentiable in
operator norm, then $P(t)u(t)\in H^1(0,T;Y)$ and
$$\frac{d}{dt}(P(t)u(t))=P'(t)u(t)+P(t)u'(t)\quad\text{a.e.}$$
In particular, a differentiable time-dependent Ritz comparison contributes
the term $P'(t)u(t)$ to its residual derivative.

## Facts & Assumptions

**Given:** $T>0$, a separable real Hilbert space $X$, a real Hilbert space $Y$, the weak time-derivative convention,
$u\in H^1(0,T;X)$, and a fixed bounded map or an operator-norm $C^1$ family.

[F1] The Statement defines $H^1(0,T;X)$ by Bochner $L^2$ membership of the
function and distribution derivative, checked after every continuous scalar
functional; the $L^2$ classes use the strongly measurable convention
([[def-parabolic-evolution-triple-and-energy-space]]).

[F2] Strongly measurable functions with integrable norm are Bochner
integrable, and bounded linear maps commute with Bochner integration
([[thm-bochner-integrability-criterion]],
[[thm-bounded-linear-maps-commute-with-bochner-integration]]).

[F3] Smooth mollifiers converge to Bochner $L^2$ functions in local $L^2$
([[lem-parabolic-bochner-l2-approximate-identity]]).

[F4] Scalar Fubini changes the order of integration for absolutely integrable
functions on the finite product interval
([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F5] $L^2(0,T)$ is contained in $L^1(0,T)$ by Holder's inequality
([[thm-holder-inequality-for-integrals]]).

[A1] Countable Choice is an explicit hypothesis of the Bochner approximation
supplier ([[def-countable-choice]]).

## Proof
1.1 Let $g_1,g_2\in L^2(0,T;X)$ both satisfy the distributional derivative identity for $u$. Put $h=g_1-g_2$ and extend it by zero to $\mathbb R$. For every fixed $x^*\in X^*$ and every interior $t$ farther than $\epsilon$ from the endpoints, the scalar pairing of $\eta_\epsilon*h(t)$ with $x^*$ is zero: it is the zero distribution paired with $s\mapsto\eta_\epsilon(t-s)$. Since continuous linear functionals separate points, $\eta_\epsilon*h(t)=0$. By [F3] these convolutions converge to $h$ in $L^2$ on compact subintervals; exhausting $(0,T)$ proves $h=0$ a.e., so the weak derivative is unique. [A1, F1, F3, given]

2.1 The Bochner integral $G(t)=\int_0^t u'(s)ds$ exists by [F2] and [F5]. For each $x^*\in X^*$, scalar Fubini [F4] and integration by parts show that $G$ has weak derivative $u'$. Hence $w=u-G$ has zero distribution derivative. If $\psi\in C_c^\infty(0,T)$ has integral zero, its primitive is compactly supported, so $\int w\psi=0$ in $X$. Choose $\eta\in C_c^\infty(0,T)$ with integral one and put $c=\int w\eta$. Subtracting $(\int\psi)\eta$ shows that $w-c$ has zero distribution. As in step 1.1 its interior convolutions vanish, and [F3] makes them converge to $w-c$ locally in $L^2$. Thus $w=c$ a.e. and $u(t)=c+G(t)$ is a continuous representative. Any two continuous representatives equal a.e. agree everywhere, because their continuous difference vanishes on the dense set where they agree; hence this representative is unique. [F1, F2, F3, F4, F5, step 1.1, construct, algebra]

2.2 For fixed $P$, test the weak derivative identity for $u$ against $y^*\circ P\in X^*$ for arbitrary $y^*\in Y^*$. Boundedness of $P$ gives $\int_0^T y^*(Pu(t))\phi'(t)dt =-\int_0^T y^*(Pu'(t))\phi(t)dt.$ The right side is represented by the $L^2(Y)$ function $Pu'$, and uniqueness from step 1.1 gives $(Pu)'=Pu'$. [F1, F2, step 1.1, given]

3.1 For the operator-norm $C^1$ family, fix $y^*\in Y^*$ and put $\ell(t)=y^*\circ P(t)\in X^*$, so $\ell'(t)=y^*\circ P'(t)$. Use the representative $u(t)=c+\int_0^t u'(s)ds$ from step 2.1. For $\phi\in C_c^\infty(0,T)$, scalar Fubini and integration by parts give $$\int_0^T \ell(t)u(t)\phi'(t)dt=-\int_0^T\bigl(\ell'(t)u(t)+\ell(t)u'(t)\bigr)\phi(t)dt.$$ Indeed, substitute $c+\int_0^t u'(s)ds$ on the left, interchange the integrals over $0\le s\le t\le T$, and use $\int_s^T\ell(t)\phi'(t)dt=-\ell(s)\phi(s)-\int_s^T\ell'(t)\phi(t)dt$; a second Fubini interchange combines the $\ell'$ terms into $\ell'(t)u(t)$. Absolute integrability follows from boundedness of $\ell,\ell',\phi,\phi'$ and [F5]. Since this identity holds for all $y^*$ and $P'u,Pu'\in L^2(0,T;Y)$, the vector-valued weak derivative is $P'u+Pu'$. [F1, F4, F5, step 2.1, given, algebra]

4.1 The displayed derivative belongs to $L^2(0,T;Y)$ because $P$ and $P'$ are bounded on $[0,T]$ and $u,u'\in L^2(0,T;X)$. Hence $P(t)u(t)\in H^1(0,T;Y)$ with the asserted formula. [step 3.1, given, algebra] ∎
