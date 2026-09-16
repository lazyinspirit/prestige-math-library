---
id: ex-ito-formula-for-brownian-powers
kind: example
title: "Ito formula for Brownian powers"
status: draft
origin: pipeline
deps: [thm-ito-formula-one-dimensional, cor-brownian-square-martingale, def-brownian-motion, def-continuous-brownian-ito-process, def-locally-square-integrable-predictable-brownian-integrand, thm-localized-ito-integral, thm-ito-integral-process-has-a-continuous-martingale-version, thm-ito-isometry-and-linearity-in-predictable-l2, lem-gaussian-even-moment-bound-for-brownian-increments, thm-tonelli-theorem-for-sigma-finite-product-spaces, def-continuous-time-adapted-process-and-martingale, def-axiom-of-choice, thm-choice-implies-dependent-implies-countable-choice, def-elementary-predictable-brownian-integrand]
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Section 3.3"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
---

## Example

Assume the Axiom of Choice and the standing hypothesis (H) of
[[def-elementary-predictable-brownian-integrand]]. For a standard Brownian
motion $B$ and every integer $n\ge2$, up to indistinguishability,
$$B_t^n=n\int_0^tB_s^{n-1}\,dB_s+\frac{n(n-1)}{2}\int_0^tB_s^{n-2}\,ds .$$
Consequently the polynomial processes
$$B_t^2-t,\qquad B_t^3-3tB_t$$
are continuous martingales, with $B_t^2-t=2\int_0^tB_s\,dB_s$ the case $n=2$.

## Facts & Assumptions

**Given:** AC, (H), a standard Brownian motion $B$, an integer $n\ge2$, and a finite horizon $T>0$.
 
[F1] **Ito formula.** For $f\in C^{1,2}([0,\infty)\times\mathbb R)$ and any continuous Brownian Ito process $X$, $f(t,X_t)=f(0,X_0)+\int_0^t(\partial_tf+\tfrac12\sigma^2\partial^2_xf)(s,X_s)ds+\int_0^t\sigma_s\partial_xf(s,X_s)dB_s$ when the drift is $0$, up to indistinguishability. [[thm-ito-formula-one-dimensional]] [[def-continuous-brownian-ito-process]]
 
[F2] **Gaussian moments and energy.** For $0\le s<t$, $E|B_t-B_s|^{2m}=(2m-1)!!(t-s)^m$; in particular $EB_s^{2m}=c_ms^m$ with $c_m=(2m-1)!!<\infty$, so for $n\ge2$ and any $t$, $E\int_0^tB_s^{2(n-1)}ds=\int_0^tc_{n-1}s^{n-1}ds<\infty$ by Tonelli. [[lem-gaussian-even-moment-bound-for-brownian-increments]] [[def-brownian-motion]] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]
 
[F3] **Finite-energy integrals are true martingales.** If $E\int_0^tH^2ds<\infty$ then the localized integral $\int H\,dB$ has a continuous version that is a square-integrable martingale with mean zero on $[0,t]$; a process equal up to indistinguishability to such an integral plus a deterministic continuous function of $t$ is a martingale exactly when that function is constant. [[thm-localized-ito-integral]] [[thm-ito-integral-process-has-a-continuous-martingale-version]] [[thm-ito-isometry-and-linearity-in-predictable-l2]] [[def-locally-square-integrable-predictable-brownian-integrand]] [[def-continuous-time-adapted-process-and-martingale]]
 
[F4] **AC bookkeeping.** Choice is declared for the ambient completeness interface. [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]
 
 
 
 

## Verification

**Proof technique:** direct.
 
1.1 Applying [F1] with $X=B$, drift $0$, diffusion coefficient $1$ and $f(x)=x^n$ gives $\partial_tf=0$, $\partial_xf=nx^{n-1}$ and $\partial^2_xf=n(n-1)x^{n-2}$, hence $B_t^n=n\int_0^tB_s^{n-1}dB_s+\frac{n(n-1)}{2}\int_0^tB_s^{n-2}ds$ up to indistinguishability; the stochastic integral is the localized integral of the predictable process $nB^{n-1}$ and the Lebesgue integral is finite almost surely because the path is continuous on $[0,t]$. [F1]
 
2.1 Martingale property: for $n\ge2$ the energy $E\int_0^tB_s^{2(n-1)}ds$ is finite by [F2], so the stochastic integral $n\int_0^tB_s^{n-1}dB_s$ is a true square-integrable martingale by [F3] with mean zero; and $\int_0^tB_s^{n-2}ds$ is a continuous adapted process of finite variation. [F2, F3, step 1.1]
 
3.1 The cases $n=2$ and $n=3$: for $n=2$ the formula reads $B_t^2=2\int_0^tB_sdB_s+t$, the square identity of [[cor-brownian-square-martingale]], and subtracting the deterministic clock $t$ gives $B_t^2-t=2\int_0^tB_sdB_s$, a martingale. For $n=3$ the formula reads $B_t^3=3\int_0^tB_s^2dB_s+3\int_0^tB_sds$; applying the space-time Ito formula [F1] to $f(t,x)=x^3-3tx$ gives $\partial_tf=-3x$, $\partial_xf=3x^2$, $\partial^2_xf=6x$ and drift coefficient $-3x+3x=0$, so $B_t^3-3tB_t=3\int_0^t(B_s^2-s)dB_s$, which is a true martingale by step 2.1 applied to the integrand $3(B^2-s)$ of finite energy $9E\int_0^t(B_s^2-s)^2ds<\infty$ (finite by [F2] and the triangle inequality). [F2, F3, step 2.1]
 
4.1 Boundary and consistency cases: for $n=2$ the drift coefficient $n(n-1)/2=1$ matches the quadratic-variation term of $x^2$; for $n=1$ the same formula would read $B_t=\int_0^t1\,dB_s+0$, which is the definition; the case $n=0$ (the constant $1$) is not covered by the displayed range $n\ge2$ and is trivial; at $t=0$ both sides vanish; for $n=2$ at $t=0$ the identities are $0=0$; the finite-energy hypothesis fails for $n<2$ in the form of a negative power and is not used; AC enters only through [F4]. [F2, F3, F4, step 3.1] ∎

## Source notes

Lawler, Section 3.3, derives the power identities by applying Ito's formula to $x\mapsto x^n$; the martingale claim is the finite-energy instance of the integral's martingale property, with the required Gaussian moments supplied by [[lem-gaussian-even-moment-bound-for-brownian-increments]].
