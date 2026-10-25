---
id: lem-ip-calderon-averaged-negative-bourgain-estimate
kind: lemma
title: Circle-averaged negative Bourgain estimate for rough vector fields
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - lem-ip-calderon-bourgain-cutoff-estimates
  - thm-plancherel
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-young-convolution-inequality
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Haberman and Tataru, Uniqueness in Calderón's problem with Lipschitz conductivities"
      url: "https://arxiv.org/pdf/1108.6068"
      locator: "Section 3, Lemma 3.1 and complete proof, printed pp. 9–13; the proof here retains explicit frequency dependence."
    - title: "Caro, García and Reyes, Stability of the Calderón problem for less regular conductivities"
      url: "https://arxiv.org/pdf/1205.2487"
      locator: "Section 3, equations (3.14)–(3.16), printed pp. 12–13."
dependency_level: 1
---

## Statement

Assume Countable Choice. Let $d\ge3$, $k\in\mathbb R^d$, and fix an oriented two-plane $P\perp k$. For a unit vector $\eta\in P$, let $\eta^\perp$ be its positive quarter turn. For $s\ge|k|/2$, put $r(s)=\sqrt{s^2-|k|^2/4}$ and
$$\zeta_\pm(s,\eta)=\pm s\eta+i(k/2\pm r(s)\eta^\perp).$$
These phases are null, have length $\sqrt2s$, and sum to $ik$. Use the unitary angular Fourier convention and the norms $\dot X_\zeta^b,X_\zeta^b$ with inhomogeneous weight $s+|p_\zeta|$, where $p_\zeta(\xi)=-|\xi|^2+2i\zeta\cdot\xi$. For a fixed $\phi\in C_c^\infty(\mathbb R^d)$, define
$$\mathcal A_{\lambda,k}(f):=\frac1\lambda\int_{S^1(P)}\int_\lambda^{2\lambda}\|\phi\operatorname{div}f\|_{\dot X_{\zeta_\pm(s,\eta)}^{-1/2}}^2\,ds\,d\eta.$$
Here $d\eta$ is arclength, either sign can be used, and the derivative is distributional. For $\lambda\ge100\sqrt{1+|k|^2}$ and $f\in L^2(\mathbb R^d;\mathbb C^d)$,
$$\mathcal A_{\lambda,k}(f)\le C\left(1+\frac{1+|k|^2}{\lambda}\right)\|f\|_2^2,$$
where $C$ depends only on $d,\phi$. If $f\in H^1$, also
$$\mathcal A_{\lambda,k}(f)\le\frac C\lambda\|\nabla f\|_2^2.$$
Let $\rho\in C_c^\infty(B(0,1))$ be nonnegative with integral $1$, put $\rho_h(x)=h^{-d}\rho(x/h)$, and define $\omega_2(f,h)=\sup_{|y|\le h}\|f(\cdot-y)-f\|_2$. For $h>0$ one consequently has
$$\mathcal A_{\lambda,k}(f)\le C_\rho\left[\frac{\|f\|_2^2}{\lambda h^2}+\left(1+\frac{1+|k|^2}{\lambda}\right)\omega_2(f,h)^2\right].$$

## Statement references

[[lem-ip-calderon-bourgain-cutoff-estimates|Localized homogeneous and inhomogeneous Fourier norms.]]

## Facts & Assumptions

**Given:** Countable Choice and the parameters, phases and vector field in the statement.

[F1] For any null phase of length $\sqrt2s$, multiplication by a fixed smooth compactly supported function maps $X^{-1/2}_\zeta$ to $\dot X^{-1/2}_\zeta$ with norm independent of $s\ge1$ and the phase directions. ([[lem-ip-calderon-bourgain-cutoff-estimates]])

[F2] The angular Fourier transform preserves $L^2$ norms and sends the divergence to multiplication by $i\xi\cdot$. Nonnegative frequency and parameter integrals can be interchanged. ([[thm-plancherel]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]])

[F3] Convolution with an $L^1$ kernel is bounded on $L^2$ by its $L^1$ norm. ([[thm-young-convolution-inequality]])

[A1] Countable Choice is assumed through [F1]–[F3]. ([[def-countable-choice]])

## Proof

**Given:** The data in the statement.

1.1 Direct expansion gives $\zeta_\pm\cdot\zeta_\pm=0$, $|\zeta_\pm|^2=2s^2$, and $\zeta_++\zeta_-=ik$. For either sign, writing $a=\xi\cdot\eta$, $b=\xi\cdot\eta^\perp$, the symbol satisfies $|p_\zeta(\xi)|\asymp\bigl||\xi|^2+k\cdot\xi\pm2r(s)b\bigr|+2s|a|$, with absolute constants. Put $R=|\xi|$, $A=|\Pi_P\xi|$, and $W(s,\eta,\xi)=R^2/(s+|p_\zeta(\xi)|)$. We prove the uniform kernel bound $\lambda^{-1}\int_{S^1}\int_\lambda^{2\lambda}W\,ds\,d\eta\le C(1+(1+|k|^2)/\lambda)$. If $R\le100\sqrt{1+|k|^2}$, the pointwise bound $W\le R^2/\lambda$ proves it. Otherwise $|k\cdot\xi|\le R^2/100$. If $A\le R^2/(100\lambda)$, then $2r(s)|b|\le4\lambda A\le R^2/25$ and the real part has absolute value at least $R^2/2$, giving $W\le2$. Thus only the case $A>R^2/(100\lambda)$ remains; here $R^2/A<100\lambda$. [given, algebra]

2.1 In this last case, on $|a|\ge A/2$ the imaginary part gives $W\le R^2/(\lambda A)\le100$. On the remaining angular set, partition into shells $E_j=\{2^{-j-2}A<|a|\le2^{-j-1}A\}$, $j\ge0$, ignoring the measure-zero set $a=0$. Each shell has arclength at most $C2^{-j}$, since $a=A\cos\theta$ and $|\sin\theta|\ge\sqrt3/2$ there. On each shell, $|b|\ge\sqrt3 A/2$ and the denominator is bounded below, up to an absolute constant, by $|B\pm2r(s)b|+\lambda(1+2^{-j-1}A)$, where $B=R^2+k\cdot\xi$ is independent of $s,\eta$. Since $dr/ds=s/r\ge1$ and the $r$-interval is contained in $[\lambda/2,2\lambda]$, integration in $s$ is bounded by integration in $r$ over this latter interval. For any interval $I$ of length at most $2\lambda$ and $c>0$, splitting at the zero of the affine function gives $\int_I(|B+2br|+c)^{-1}dr\le C|b|^{-1}\log(1+\lambda|b|/c)$. Therefore $\int_\lambda^{2\lambda}W\,ds\le C(R^2/A)\log(1+C A/(1+2^{-j-1}A))\le C\lambda(j+1)$. Multiplying by the shell measure and summing $\sum_{j\ge0}(j+1)2^{-j}<\infty$ proves the kernel bound of step 1.1. This proof treats all $A$, including $A=0$ via its earlier case, and its constants are independent of $k,P$. [step 1.1, algebra]

3.1 Initially let $f$ be Schwartz. By [F1], $\|\phi\operatorname{div}f\|_{\dot X^{-1/2}_\zeta}^2\le C\int |\xi\cdot\widehat f(\xi)|^2/(s+|p_\zeta(\xi)|)\,d\xi\le C\int W(s,\eta,\xi)|\widehat f(\xi)|^2d\xi$. Interchange the nonnegative integrals using [F2] and apply step 2.1 and Plancherel. This proves the first estimate. For $f\in H^1$, the simpler denominator bound $s+|p_\zeta|\ge s\ge\lambda$ gives $\|\phi\operatorname{div}f\|_{\dot X^{-1/2}_\zeta}^2\le C\lambda^{-1}\|\nabla f\|_2^2$; averaging over the parameter interval of length $\lambda$ and circle length $2\pi$ proves the second estimate. The same estimates hold for general $L^2$ and $H^1$ fields by Fourier truncation and smooth approximation. The limits match the distribution $\phi\operatorname{div}f$: convergence in the weighted negative space implies distributional convergence when tested against Schwartz functions, by reciprocal-weight Cauchy–Schwarz, and $L^2$ convergence of $f$ already implies distributional convergence of its derivative. [A1, F1, F2, step 2.1, algebra]

4.1 Write $f=f_h+(f-f_h)$ with $f_h=\rho_h*f$. Differentiation under the convolution, first for smooth fields and then by $L^2$ approximation, gives $\|\nabla f_h\|_2\le\|\nabla\rho_h\|_1\|f\|_2=C_\rho h^{-1}\|f\|_2$ by [F3]. Also $\|f-f_h\|_2\le\omega_2(f,h)$: at each $x$ apply the integral Cauchy–Schwarz inequality to the probability density $\rho_h(y)dy$, then integrate in $x$ and interchange nonnegative integrals to bound the squared norm by $\int\rho_h(y)\|f-f(\cdot-y)\|_2^2dy$. The support of $\rho_h$ is inside $|y|\le h$. Since $\|v+w\|^2\le2\|v\|^2+2\|w\|^2$, apply the $H^1$ estimate of step 3.1 to $f_h$ and its $L^2$ estimate to $f-f_h$. This yields the claimed mollified estimate after enlarging the constant. [F2, F3, step 3.1, algebra] ∎
