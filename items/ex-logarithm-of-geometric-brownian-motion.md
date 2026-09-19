---
id: ex-logarithm-of-geometric-brownian-motion
kind: example
title: "Logarithm of geometric Brownian motion"
status: draft
origin: pipeline
deps: [thm-ito-formula-one-dimensional, def-brownian-motion, def-continuous-brownian-ito-process, def-continuity-real, thm-heine-cantor-r, def-locally-square-integrable-predictable-brownian-integrand, thm-localized-ito-integral, thm-stopping-an-ito-integral, def-continuous-time-stopping-time, def-convergence-in-probability, def-axiom-of-choice, lem-ac-supplies-sequential-choices-for-probability-constructions, def-elementary-predictable-brownian-integrand]
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
[[def-elementary-predictable-brownian-integrand]]. Let $x>0$, let $\mu$ and
$\sigma$ be real and define, explicitly,
$$X_t:=x\exp\Bigl(\bigl(\mu-\tfrac{\sigma^2}{2}\bigr)t+\sigma B_t\Bigr),\qquad t\ge0 .$$
Then $X$ is a positive continuous Brownian Ito process with
$$dX_t=\mu X_t\,dt+\sigma X_t\,dB_t,\qquad d\log X_t=\bigl(\mu-\tfrac{\sigma^2}{2}\bigr)dt+\sigma\,dB_t,$$
both up to indistinguishability. No existence theorem for stochastic
differential equations is asserted: the process $X$ is defined by the displayed
formula.

## Facts & Assumptions

**Given:** AC, (H), a standard Brownian motion $B$, reals $x>0,\mu,\sigma$, and a finite horizon $T>0$.
 
[F1] **Ito formula and class structure.** For $g\in C^{1,2}([0,\infty)\times\mathbb R)$ and $X$ a continuous Brownian Ito process with drift $b$ and diffusion coefficient $\varsigma$, $dg(t,X_t)=(\partial_tg+b\partial_xg+\tfrac12\varsigma^2\partial^2_xg)(t,X_t)dt+\varsigma_t\partial_xg(t,X_t)dB_t$ up to indistinguishability; $B$ itself is a class process with drift $0$ and diffusion coefficient $1$. [[thm-ito-formula-one-dimensional]] [[def-continuous-brownian-ito-process]] [[def-brownian-motion]]
 
[F2] **Positivity and compactness on the horizon.** $X_t>0$ for every $t$; on the compact interval $[0,T]$ the continuous positive path $t\mapsto X_t$ attains a positive minimum and a finite maximum, so for almost every $\omega$ there is an integer $m=m(\omega)>\max\{x,1/x\}$ with $1/m<X_t<m$ for all $t\le T$. For integers $m>\max\{x,1/x\}$, the exit times $\rho_m:=\inf\{t\ge0:X_t\notin(1/m,m)\}$ therefore satisfy $\rho_m\uparrow\infty$ almost surely. [[def-continuity-real]] [[thm-heine-cantor-r]] [[def-continuous-time-stopping-time]]
 
[F3] **Localized integration.** For a locally square-integrable predictable $H$ the localized integral exists and the stopping identity identifies its stopped pieces with finite-energy integrals; on the event $\{t\le\rho\}$ the integral of $H1_{[0,\rho]}$ and that of $H$ agree. [[thm-localized-ito-integral]] [[thm-stopping-an-ito-integral]] [[def-locally-square-integrable-predictable-brownian-integrand]] [[def-convergence-in-probability]]
 
[F4] **AC bookkeeping.** Choice is declared for the ambient completeness interface. [[def-axiom-of-choice]]
 
 
 
 

## Verification

**Proof technique:** direct.
 
1.1 First identity: apply [F1] to $g(t,y)=x\exp((\mu-\sigma^2/2)t+\sigma y)$ along $X=B$, so $b=0$ and $\varsigma=1$; then $\partial_tg=(\mu-\sigma^2/2)g$, $\partial_yg=\sigma g$ and $\partial^2_{yy}g=\sigma^2g$, and the drift coefficient is $(\mu-\sigma^2/2)g+\tfrac12\sigma^2g=\mu g$; hence $dX_t=\mu X_tdt+\sigma X_tdB_t$ up to indistinguishability, and $X$ is positive by its explicit definition. [F1, given]
 
1.2 Second identity on the localized region: fix an integer $m>\max\{x,1/x\}$, let $\rho_m$ be the exit time of $(1/m,m)$ as in [F2], and replace $\log$ by a $C^2$ function equal to $\log$ on a neighbourhood of $[1/m,m]$ and compactly supported in $(0,\infty)$. Applying [F1] and the stopping identity gives
$$\log X_{t\wedge\rho_m}=\log x+\int_0^t1_{\{s\le\rho_m\}}(\mu-\sigma^2/2)\,ds+\int_0^t1_{\{s\le\rho_m\}}\sigma\,dB_s.$$
Indeed, on $[1/m,m]$ the first two derivatives are $1/y$ and $-1/y^2$, so the drift is $\mu-\sigma^2/2$ and the diffusion coefficient is $\sigma$. Equivalently, for $t\le\rho_m$, $\log X_t=\log x+(\mu-\sigma^2/2)t+\sigma B_t$. [F1, F2, F3, step 1.1]
 
2.1 Removing the localization: by [F2] one has $\rho_m\uparrow\infty$ almost surely along the compactness of the positive continuous path, so for each fixed $t$ the event $\{t\le\rho_m\}$ has probability tending to $1$; the identity of step 1.2 therefore holds for every $t$ almost surely and, since both sides are continuous processes, up to indistinguishability. Hence $d\log X_t=(\mu-\sigma^2/2)dt+\sigma dB_t$. [F2, F3, step 1.2]
 
3.1 Boundary and consistency cases: at $t=0$ the identities read $X_0=x$ and $\log X_0=\log x$; for $\sigma=0$ the formulas reduce to the deterministic exponential and its logarithm; for $\mu=0$ the drift of $\log X$ is $-\sigma^2/2$, the correct Ito correction; $x>0$ is required for the logarithm, and the positivity of $X$ is what removes the localization in step 2.1; the formulas are pathwise identities of the explicitly defined process, not existence statements for an SDE; and AC enters only through [F4]. [F1, F2, F4, step 2.1] ∎

## Source notes

Lawler, Section 3.3, computes the geometric Brownian motion and its logarithm by Ito's formula; the second identity is applied on the localized region $\{1/m\le X\le m\}$ so that the logarithm is a genuine $C^2$ function there.
