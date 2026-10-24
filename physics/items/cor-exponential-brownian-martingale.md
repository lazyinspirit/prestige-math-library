---
id: cor-exponential-brownian-martingale
kind: corollary
title: "The exponential Brownian martingale"
status: published
origin: pipeline
deps: [thm-ito-formula-one-dimensional, def-continuous-brownian-ito-process, def-brownian-motion, def-standard-normal-and-normal-laws, lem-normal-density-has-total-mass-one, cor-c-one-change-of-variables-for-l-one-functions, lem-brownian-gaussian-covariance-is-equivalent-to-independent-stationary-normal-increments, def-elementary-predictable-brownian-integrand, def-locally-square-integrable-predictable-brownian-integrand, thm-localized-ito-integral, thm-ito-integral-process-has-a-continuous-martingale-version, thm-ito-isometry-and-linearity-in-predictable-l2, def-continuous-time-adapted-process-and-martingale, def-conditional-expectation-as-an-ae-class, thm-tower-property-of-conditional-expectation, lem-conditioning-a-known-variable-and-an-independent-variable, thm-taking-out-what-is-known, def-axiom-of-choice, lem-ac-supplies-sequential-choices-for-probability-constructions]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Section 3.3"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Choice and the standing hypothesis (H) of
[[def-elementary-predictable-brownian-integrand]], and suppose the filtration
satisfies the usual conditions. Use the $\mathcal F_0$-normalized representative
of the standard Brownian motion that is set to $0$ off its measurable
probability-one continuity event, and continue to denote it by $B$. For every
real $\theta$, the process
$$Z_t:=\exp\Bigl(\theta B_t-\frac{\theta^2t}{2}\Bigr),\qquad t\ge0,$$
is a positive continuous martingale with $EZ_t=1$ for every $t$, and
$$Z_t=1+\theta\int_0^tZ_s\,dB_s\qquad\text{up to indistinguishability},$$
the integral being the localized Ito integral of the predictable locally
square-integrable process $\theta Z$.

## Facts & Assumptions

**Given:** AC, (H), the usual conditions, the $\mathcal F_0$-normalized everywhere-continuous adapted representative of the standard Brownian motion $B$, a real parameter $\theta$, and a finite horizon $T>0$.
 
[F1] **Class structure.** Under the usual conditions the continuity event is in $\mathcal F_0$, so setting $B$ to $0$ off it preserves adaptedness, all finite-dimensional laws, and the increment-independence hypothesis while making every path continuous. The normalized $B$ is therefore predictable and is a continuous Brownian Ito process with drift $0$ and diffusion coefficient $1$; the exponential process $Z$ is everywhere continuous and adapted, hence predictable, and locally bounded, hence locally square-integrable as an integrand. [[def-continuous-brownian-ito-process]] [[def-brownian-motion]] [[def-locally-square-integrable-predictable-brownian-integrand]]
 
[F2] **Ito formula.** For $f\in C^{1,2}([0,\infty)\times\mathbb R)$ the one-dimensional Ito formula holds for every continuous Brownian Ito process, so $f(t,B_t)=f(0,0)+\int_0^t(\partial_tf+\tfrac12\partial^2_xf)(s,B_s)ds+\int_0^t\partial_xf(s,B_s)dB_s$ up to indistinguishability. [[thm-ito-formula-one-dimensional]]
 
[F3] **Gaussian increments and exponential moment.** For $0\le s<t$ the increment $B_t-B_s$ is independent of $\mathcal F_s$ with law $N(0,t-s)$; for $N$ with law $N(0,\sigma^2)$, $\sigma>0$, and real $\lambda$, $$Ee^{\lambda N}=e^{\lambda^2\sigma^2/2}.$$ Indeed, substituting $x=\sigma y$ in the density $(2\pi\sigma^2)^{-1/2}e^{-x^2/(2\sigma^2)}$ and completing the square gives $e^{\lambda^2\sigma^2/2}\int(2\pi)^{-1/2}e^{-(y-\lambda\sigma)^2/2}dy=e^{\lambda^2\sigma^2/2}$ by the translation change of variables and [[lem-normal-density-has-total-mass-one]]; the degenerate case $\sigma=0$ gives $Ee^{\lambda N}=1$. [[def-standard-normal-and-normal-laws]] [[lem-brownian-gaussian-covariance-is-equivalent-to-independent-stationary-normal-increments]] [[def-brownian-motion]] [[cor-c-one-change-of-variables-for-l-one-functions]]
 
[F4] **Conditional expectation tools.** If $X$ is integrable and independent of $\mathcal F_s$, then $E[X\mid\mathcal F_s]=EX$. If $Y$ is finite and $\mathcal F_s$-measurable and $X,YX\in L^1$, then $E[YX\mid\mathcal F_s]=YE[X\mid\mathcal F_s]$; the latter theorem also proves that $YE[X\mid\mathcal F_s]$ is integrable. [[lem-conditioning-a-known-variable-and-an-independent-variable]] [[thm-taking-out-what-is-known]] [[def-conditional-expectation-as-an-ae-class]] [[thm-tower-property-of-conditional-expectation]] [[def-continuous-time-adapted-process-and-martingale]]
 
[F5] **Integral interfaces.** A finite-energy integral $\int H\,dB$ has a continuous version that is a square-integrable martingale with mean zero and isometry $E(\int_0^tH\,dB)^2=E\int_0^tH^2ds$; the localized integral exists for locally square-integrable predictable integrands. [[thm-localized-ito-integral]] [[thm-ito-integral-process-has-a-continuous-martingale-version]] [[thm-ito-isometry-and-linearity-in-predictable-l2]] [[def-elementary-predictable-brownian-integrand]]
 
[F6] **AC bookkeeping.** Choice is declared for the conditional-expectation interface. [[def-axiom-of-choice]]
 
 
 
 

## Proof

**Proof technique:** direct.
 
1.1 Apply [F2] to $f(t,x)=e^{\theta x-\theta^2t/2}$: $\partial_tf=-\tfrac{\theta^2}{2}f$, $\partial_xf=\theta f$, $\partial^2_xf=\theta^2f$, so $\partial_tf+\tfrac12\partial^2_xf=-\tfrac{\theta^2}{2}f+\tfrac{\theta^2}{2}f=0$ and $Z_t=Z_0+\theta\int_0^tZ_s\,dB_s=1+\theta\int_0^tZ_s\,dB_s$ almost surely, the integral being the localized integral of the predictable process $\theta Z$ of [F1] and [F5]. [F1, F2, F5]
 
1.2 Martingale property by direct conditioning: let $0\le s\le t$. Formula [F3] applied to $B_s$, $B_t$, and $U:=B_t-B_s$ shows that $Z_s$, $Z_t$, and $Y:=\exp(\theta U-\theta^2(t-s)/2)$ are integrable, with expectations $1,1,1$, respectively. On the full-measure event where the path of $B$ is continuous, $Z_s$ is finite and $\mathcal F_s$-measurable, $Z_t=Z_sY$, and $Y$ is independent of $\mathcal F_s$. Hence [F4] first gives $E[Y\mid\mathcal F_s]=1$ and then, because $Y$ and $Z_sY=Z_t$ are integrable, gives $E[Z_t\mid\mathcal F_s]=Z_sE[Y\mid\mathcal F_s]=Z_s$ almost surely. [F3, F4, given]
 
2.1 Integrability and positivity: $Z_t>0$ identically, and the Gaussian calculation in step 1.2 gives $EZ_t=1$ for every $t$; together with the conditional identity, this makes $Z$ a true martingale with unit mean at every time. [F3, step 1.2]
 
3.1 Boundary and consistency cases: for $\theta=0$ the formula gives $Z\equiv1$ and the integral representation reduces to $1=1$; for $t=0$ both sides equal $1$; for $s=0$ the conditional identity is the unconditional mean; the degenerate case $t-s=0$ in [F3] gives the exponential of the zero increment; positive or negative $\theta$ are treated identically, and the integrand $\theta Z$ is locally square-integrable because $Z$ is locally bounded on finite horizons; the representation is an almost-sure identity of continuous processes, hence indistinguishability. AC enters only through [F6]. [F3, F6, step 1.1, step 1.2] ∎

## Source notes

Lawler, Section 3.3, derives the exponential martingale by Ito's formula and checks its integrability through the Gaussian exponential moment. The exponential moment is computed here from the normal density by completing the square and the translation change of variables, so the martingale property is not assumed.
