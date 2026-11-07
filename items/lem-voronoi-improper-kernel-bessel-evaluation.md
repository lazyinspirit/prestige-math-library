---
dependency_level: 3
id: lem-voronoi-improper-kernel-bessel-evaluation
kind: lemma
title: "Evaluation of Meurman's improper kernel in the local Bessel normalization"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps: [lem-voronoi-damped-sine-cosine-kernel-asymptotic, def-voronoi-bessel-k-y-functions, lem-voronoi-bessel-k-y-series-converge, lem-voronoi-bessel-k-y-differential-recurrences, lem-integer-order-bessel-recurrences-and-ode, thm-termwise-differentiation-of-complex-power-series, lem-harmonic-sum-asymptotic, thm-integration-by-parts, thm-substitution-for-improper-integrals, thm-holomorphic-parameter-riemann-integral, thm-weierstrass-convergence-holomorphic-functions, thm-identity-theorem-holomorphic-functions, def-complex-logarithms-principal-logarithm-and-complex-powers, cor-principal-logarithm-is-holomorphic-on-the-slit-plane]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Tom Meurman, A simple proof of Voronoi's identity, Astérisque 209 (1992), 265–274"
      url: "https://numdam.org/item/AST_1992__209__265_0.pdf"
      locator: "Printed p.266, Bessel evaluation attributed there to Watson; the proof below reconstructs the integral locally"
    - title: "Aleksandar Ivić, Topics in Recent Zeta-Function Theory, Chapter 3"
      url: "https://bibliotheque.imo.universite-paris-saclay.fr/media/filer_public/86/6d/866d1cf0-a942-4f8a-9d30-7cb3b03e1b1c/i_ivic-66.pdf"
      locator: "Formulas (3.1), (3.4)–(3.7), Bessel normalization"
---

## Statement

For $z>0$ let $H_m=\sum_{j=1}^mj^{-1}$ and define
$$J_0(z)=\sum_{m\ge0}\frac{(-1)^m(z^2/4)^m}{(m!)^2},\qquad I_0(z)=\sum_{m\ge0}\frac{(z^2/4)^m}{(m!)^2},$$
$$K_0(z)=-(\log(z/2)+\gamma)I_0(z)+\sum_{m\ge1}\frac{H_m(z^2/4)^m}{(m!)^2},$$
$$Y_0(z)=\frac2\pi(\log(z/2)+\gamma)J_0(z)+\frac2\pi\sum_{m\ge1}\frac{(-1)^{m+1}H_m(z^2/4)^m}{(m!)^2},\qquad K_1=-K_0',\quad Y_1=-Y_0'.$$
Here $\gamma$ is the Euler–Mascheroni constant. For every $t>0$ the improper Riemann integral converges separately at zero and infinity and satisfies
$$\int_0^\infty\cos(2\pi u)\sin(2\pi t/u)\,du=-\sqrt t\left[K_1(4\pi\sqrt t)+\frac\pi2Y_1(4\pi\sqrt t)\right].$$

## Statement references

[Meurman, printed p.266](https://numdam.org/item/AST_1992__209__265_0.pdf)

[Ivić, Chapter 3](https://bibliotheque.imo.universite-paris-saclay.fr/media/filer_public/86/6d/866d1cf0-a942-4f8a-9d30-7cb3b03e1b1c/i_ivic-66.pdf)

## Facts & Assumptions

**Given:** The series normalization and $t>0$. Integrals are proper or separately improper Riemann integrals, componentwise for complex functions.

[F1] [[lem-voronoi-damped-sine-cosine-kernel-asymptotic]] proves existence of $F(t,0)$ and $F(t,v)\to F(t,0)$ for $F(t,v)=\int_0^\infty e^{-v(u+t/u)}\cos(2\pi u)\sin(2\pi t/u)du$.

[F2] [[def-voronoi-bessel-k-y-functions]], [[lem-voronoi-bessel-k-y-series-converge]], and [[lem-voronoi-bessel-k-y-differential-recurrences]] give the local smooth functions and $(zK_1)'=-zK_0$. [[lem-integer-order-bessel-recurrences-and-ode]] gives the $I_0$ differential equation and $J_0'=-J_1$.

[F3] [[thm-termwise-differentiation-of-complex-power-series]] differentiates convergent complex power series. [[def-complex-logarithms-principal-logarithm-and-complex-powers]] and [[cor-principal-logarithm-is-holomorphic-on-the-slit-plane]] give the holomorphic principal logarithm and derivative $1/z$ on the slit plane.

[F4] [[thm-holomorphic-parameter-riemann-integral]] treats finite-interval holomorphic parameter integrals and their derivatives; [[thm-weierstrass-convergence-holomorphic-functions]] passes these properties through locally uniform truncations. [[thm-identity-theorem-holomorphic-functions]] applies on connected right half-planes.

[F5] [[thm-integration-by-parts]] and [[thm-substitution-for-improper-integrals]] apply componentwise on compact truncations, with endpoint passage when the indicated tails vanish.

[F6] [[lem-harmonic-sum-asymptotic]] gives $H_N-\log N\to\gamma$.

## Proof

1.1 The defined real $K_0$ solves $r^2K_0''+rK_0'-r^2K_0=0$ by $(rK_1)'=-rK_0$ and $K_1=-K_0'$. Its series gives $K_0(r)=-\log(r/2)-\gamma+o(1)$ at zero. The harmonic-number coefficient series extend to entire functions: $H_m\le m+1$, and on every complex disc the series of every fixed derivative is bounded by a convergent series of the form $C_R(m+1)^jR^{2m}/(m!)^2$. With the principal logarithm they therefore define holomorphic $K_0$ on the slit plane, with derivative $-K_1$ there. [F2, F3]

1.2 For $r>0$ define $H(r)=\tfrac12\int_0^\infty e^{-s-r^2/(4s)}ds/s$. On any compact positive $r$ interval, its integrand and every fixed $r$ derivative are bounded near zero by a polynomial in $s^{-1}$ times $e^{-a^2/(4s)}$, and near infinity by a polynomial times $e^{-s}$. Thus differentiated improper integrals converge uniformly. Finite-interval differentiation followed by these uniform tails proves twice differentiability. Direct computation gives $H''+H'/r-H=\tfrac12\int_0^\infty(d/ds)[e^{-s-r^2/(4s)}/s]ds=0$; both endpoint values of the expression being differentiated are zero. [F5, algebra]

2.1 Put $\eta=r/2$. Substituting $s\mapsto\eta^2/s$ in the part $0<s<\eta$ gives $H(r)=\int_\eta^\infty e^{-s-\eta^2/s}ds/s$. Therefore $H(r)=\int_\eta^\infty e^{-s}ds/s+O(\eta)$, because $|1-e^{-\eta^2/s}|\le\eta^2/s$ and $\eta^2\int_\eta^\infty s^{-2}ds=\eta$. Integration by parts gives $\lim_{\eta\downarrow0}[\int_\eta^\infty e^{-s}ds/s+\log\eta]=\int_0^\infty e^{-s}\log s\,ds$. The latter improper integral converges absolutely at both ends. [F5, step 1.2, algebra]

2.2 For real $z>0$, the extended series satisfy $K_0(-iz)=-(\pi/2)Y_0(z)+(i\pi/2)J_0(z)$: insert $\operatorname{Log}(-iz/2)=\log(z/2)-i\pi/2$ and $I_0(-iz)=J_0(z)$, and match the harmonic-number coefficients. Differentiating in real $z$ and using $J_0'=-J_1$, $Y_1=-Y_0'$, and $K_1=-K_0'$ gives $K_1(-iz)=-(\pi/2)J_1(z)-(i\pi/2)Y_1(z)$. Both $J_1(z)$ and $Y_1(z)$ are real for positive real $z$. [F2, F3, step 1.1, algebra]

3.1 To evaluate this constant without importing a gamma derivative, let $g_N(s)=(1-s/N)^N$ on $0\le s\le N$ and zero otherwise. On compact positive $s$ intervals $g_N\to e^{-s}$ uniformly; always $0\le g_N\le e^{-s}$. The integral of $|\log s|$ on $(0,\eta)$ and of $e^{-s}\log s$ on $(T,\infty)$ can be made arbitrarily small uniformly in $N$. Truncating to $[\eta,T]$ therefore proves $\int g_N(s)\log s\,ds\to\int e^{-s}\log s\,ds$ by uniform convergence of proper integrals. Substituting $s=Nt$ and integrating by parts with primitive $[1-(1-t)^{N+1}]/(N+1)$ gives $\int_0^1(1-t)^N\log t\,dt=-H_{N+1}/(N+1)$: the remaining integrand is $[(1-t)^{N+1}-1]/t=-\sum_{j=0}^N(1-t)^j$, and all boundary terms have their displayed finite limits. Hence $\int g_N\log s=N(\log N-H_{N+1})/(N+1)\to-\gamma$ by [F6]. Together with step 2.1 this proves $H(r)=-\log(r/2)-\gamma+o(1)$. [F5, F6, step 2.1]

4.1 The difference $h=H-K_0$ solves the homogeneous modified Bessel equation and tends to zero at zero. The solution $I_0(r)>0$ has $I_0(r)=1+O(r^2)$. Its Wronskian with $h$ satisfies $(h'I_0-hI_0')'=-(h'I_0-hI_0')/r$, so division and integration give $h(r)=I_0(r)[C+D\int_{r_0}^r ds/(sI_0(s)^2)]$. The integral is $\log r+O(1)$ near zero. Boundedness forces $D=0$, and the zero limit forces $C=0$. Therefore $H=K_0$ on the positive real axis. [F2, F5, step 1.1, step 1.2, step 3.1, algebra]

5.1 In $H(r)$ substitute $s=(r/2)e^w$ to obtain $K_0(r)=\int_0^\infty e^{-r\cosh w}dw$. The right side is holomorphic on $\operatorname{Re}z>0$: finite truncations use [F4], and on a compact parameter set $\operatorname{Re}z\ge\delta>0$ every derivative tail is dominated by $\cosh^j(w)e^{-\delta\cosh w}$, whose improper integral tail tends uniformly to zero. Thus [F4] and the identity theorem extend the identity to that half-plane and give $K_1(z)=\int_0^\infty\cosh(w)e^{-z\cosh w}dw$. [F4, F5, step 1.1, step 4.1]

6.1 For real $p,q>0$, substituting $u=\sqrt{q/p}e^w$ gives $\int_0^\infty e^{-pu-q/u}du=2\sqrt{q/p}K_1(2\sqrt{pq})$: the odd $\sinh w$ contribution vanishes over $\mathbb R$ and the even $\cosh w$ contribution is step 5.1. Both sides are separately holomorphic for $\operatorname{Re}p,\operatorname{Re}q>0$. For the integral, truncate and use [F4]; on compact parameter sets $\operatorname{Re}p\ge\delta$, $\operatorname{Re}q\ge\delta$, all parameter derivative tails are uniformly bounded by polynomial multiples of $e^{-\delta(u+u^{-1})}$. For the right side use $\sqrt{pq}=\exp[(\operatorname{Log}p+\operatorname{Log}q)/2]$ and $\sqrt{q/p}=\exp[(\operatorname{Log}q-\operatorname{Log}p)/2]$; the first has positive real part because the sum of arguments lies in $(-\pi,\pi)$. Fixing real $q$ first extends equality to every right-half-plane $p$ by the one-variable identity theorem; fixing that complex $p$ then extends equality to every right-half-plane $q$. [F3, F4, F5, step 5.1]

7.1 Put $c=2\pi$, $\rho=\sqrt{v^2+c^2}$, and $v>0$. Product-to-sum expresses $F(t,v)$ as one half the imaginary part of the sum of the two Laplace integrals with $(p,q)=(v-ic,t(v-ic))$ and $(p,q)=(v+ic,t(v-ic))$. Applying step 6.1 with its specified branches gives $F(t,v)=\sqrt t\operatorname{Im}[K_1(2\sqrt t(v-ic))+(v-ic)K_1(2\sqrt t\rho)/\rho]$. The sign between the two terms is positive because the second sine phase is $-cu+ct/u$. [F1, step 6.1, algebra]

8.1 Let $v\downarrow0$. By [F1] the left side tends to the stated improper integral. On the right, $K_1$ is analytic near $-i4\pi\sqrt t$ by step 1.1. Step 2.2 shows that its imaginary part there is $-(\pi/2)Y_1(4\pi\sqrt t)$; the second term tends to $-iK_1(4\pi\sqrt t)$ and contributes $-K_1(4\pi\sqrt t)$. This proves the claimed evaluation. [F1, step 1.1, step 2.2, step 7.1] ∎
