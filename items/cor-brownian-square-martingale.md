---
id: cor-brownian-square-martingale
kind: corollary
title: "The Brownian square martingale"
status: draft
origin: pipeline
deps: [thm-ito-formula-one-dimensional, def-continuous-brownian-ito-process, def-elementary-predictable-brownian-integrand, def-ito-integral-of-an-elementary-predictable-process, def-ito-integral-for-square-integrable-predictable-processes, thm-localized-ito-integral, thm-ito-integral-process-has-a-continuous-martingale-version, thm-ito-isometry-and-linearity-in-predictable-l2, def-locally-square-integrable-predictable-brownian-integrand, def-brownian-motion, def-standard-normal-and-normal-laws, lem-normal-density-has-total-mass-one, thm-tonelli-theorem-for-sigma-finite-product-spaces, def-continuous-time-adapted-process-and-martingale, def-axiom-of-choice, lem-ac-supplies-sequential-choices-for-probability-constructions, def-convergence-in-probability]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, equation (3.8)"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
---

## Statement

Assume the Axiom of Choice and the standing hypothesis (H) of
[[def-elementary-predictable-brownian-integrand]], and suppose the filtration
satisfies the usual conditions. Use the $\mathcal F_0$-normalized representative
of the standard Brownian motion whose paths are everywhere continuous and
which starts at $0$, and continue to denote it by $B$ [[def-brownian-motion]].
$$B_t^2-t=2\int_0^tB_s\,dB_s\qquad\text{up to indistinguishability},$$
so $B_t^2-t$ is a continuous square-integrable martingale relative to the
filtration with
$$E(B_t^2-t)=0,\qquad E\int_0^tB_s^2\,ds=\frac{t^2}{2},\qquad E(B_t^2-t)^2=2t^2 .$$

## Facts & Assumptions

**Given:** AC, (H), the usual conditions, the $\mathcal F_0$-normalized everywhere-continuous adapted representative of a standard Brownian motion $B$ with $B_0=0$ identically, and a finite horizon $T>0$.
 
[F1] **$B$ is a continuous Brownian Ito process.** Under the usual conditions the full event on which the Brownian paths are continuous and start at $0$ belongs to $\mathcal F_0$; setting the process to $0$ off that event preserves adaptedness, finite-dimensional laws, and the increment-independence hypothesis. The resulting everywhere-continuous adapted process is predictable and is a continuous Brownian Ito process with drift $0$ and diffusion coefficient $1$. [[def-continuous-brownian-ito-process]] [[def-brownian-motion]]
 
[F2] **Elementary and localized integral of the constant integrand class.** The one-block elementary process $1_{(0,T]}$ represents the same $L^2(\mathrm dt\otimes P)$ class as the constant process $1$, and its elementary integral is $\int_0^t1_{(0,T]}\,dB=B_t-B_0=B_t$. The $L^2$ integral depends only on that class, and the localized integral of the locally square-integrable constant representative is therefore $B$ up to indistinguishability. [[def-elementary-predictable-brownian-integrand]] [[def-ito-integral-of-an-elementary-predictable-process]] [[def-ito-integral-for-square-integrable-predictable-processes]] [[thm-localized-ito-integral]] [[def-locally-square-integrable-predictable-brownian-integrand]]
 
[F3] **Ito formula for the class.** For $f\in C^{1,2}([0,\infty)\times\mathbb R)$ the one-dimensional Ito formula of [[thm-ito-formula-one-dimensional]] gives $f(t,X_t)=f(0,X_0)+\int_0^t(\partial_tf+b\partial_xf+\tfrac12\sigma^2\partial^2_xf)(s,X_s)ds+\int_0^t\sigma_s\partial_xf(s,X_s)dB_s$ for every continuous Brownian Ito process $X=X_0+\int b+\int\sigma\,dB$, up to indistinguishability.
 
[F4] **Gaussian moments and Tonelli.** $B_s$ has law $N(0,s)$ with density $\phi_s(x)=(2\pi s)^{-1/2}e^{-x^2/(2s)}$ for $s>0$, whence $EB_s^2=s$; the function $(s,\omega)\mapsto B_s(\omega)^2$ is nonnegative and product measurable, so Tonelli gives $E\int_0^tB_s^2ds=\int_0^ts\,ds=t^2/2$. [[def-standard-normal-and-normal-laws]] [[def-brownian-motion]] [[lem-normal-density-has-total-mass-one]] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] [[def-convergence-in-probability]]
 
[F5] **True martingales from finite energy.** A finite-energy integral $\int H\,dB$ has a continuous version that is a square-integrable martingale with $E\int_0^tH\,dB=0$ and $E(\int_0^tH\,dB)^2=E\int_0^tH^2ds$. [[thm-ito-integral-process-has-a-continuous-martingale-version]] [[thm-ito-isometry-and-linearity-in-predictable-l2]] [[def-continuous-time-adapted-process-and-martingale]]
 
[F6] **AC bookkeeping.** Choice is declared for the ambient conditional-expectation and completeness interfaces. [[def-axiom-of-choice]]
 
 
 
 

## Proof

**Proof technique:** direct.
 
1.1 Apply [F3] to $X=B$ with $b=0$, $\sigma=1$ and $f(t,x)=x^2$, for which $\partial_tf=0$, $\partial_xf=2x$, $\partial^2_xf=2$; the drift coefficient is $\tfrac12\cdot1\cdot2=1$ and the stochastic coefficient is $2B_s$, so $B_t^2=B_0^2+\int_0^t1\,ds+2\int_0^tB_s\,dB_s=t+2\int_0^tB_s\,dB_s$ almost surely, the stochastic integral being the localized integral of the predictable locally square-integrable process $2B$. [F1, F2, F3]
 
1.2 Energy: the process $2B$ has $E\int_0^t(2B_s)^2ds=4\cdot t^2/2=2t^2<\infty$ by [F4], so by [F5] the integral $\int_0^tB_s\,dB_s$ is an $L^2$-martingale with mean $0$ and second moment $E(\int_0^tB_s\,dB_s)^2=E\int_0^tB_s^2ds=t^2/2$. [F4, F5]
 
2.1 Consequently $B_t^2-t=2\int_0^tB_s\,dB_s$ has mean $0$ and second moment $4\cdot t^2/2=2t^2$; since it is a continuous adapted process equal almost surely to a square-integrable martingale at every $t$ and both are continuous, it is itself (up to indistinguishability) that martingale, so it is a continuous square-integrable martingale. [F5, step 1.1, step 1.2]
 
3.1 Boundary and consistency cases: at $t=0$ both sides are $0$ because $B_0=0$ almost surely and the integral over an empty interval vanishes; the sign convention is fixed by the left-endpoint Ito integral, and the identity $B_t^2=2\int_0^tB_sdB_s+t$ shows that the quadratic-variation correction is exactly $t$, with the ordinary chain rule missing precisely this term; for $t\ge0$ the stated moments follow from step 2.1; and no additional choice is used beyond [F6] because the integrand $2B$ is continuous and the localization times are canonical. [F2, F6, step 2.1] ∎

## Source notes

Lawler, equation (3.8), computes this identity from the Ito formula for $x\mapsto x^2$; the martingale and moment statements are the finite-energy instance of the integral's martingale property, with the energy evaluated from the Gaussian second moment by Tonelli.
