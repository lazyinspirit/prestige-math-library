---
id: ex-harmonic-functions-of-planar-brownian-motion
kind: example
title: "Harmonic functions of planar Brownian motion"
status: draft
origin: pipeline
deps: [thm-space-time-harmonic-functions-yield-brownian-local-martingales, def-d-dimensional-brownian-motion, def-brownian-motion, def-c-c-and-c-c-infinity-on-rn, def-continuous-time-stopping-time, def-continuous-time-adapted-process-and-martingale, def-locally-square-integrable-predictable-brownian-integrand, thm-localized-ito-integral, thm-ito-integral-process-has-a-continuous-martingale-version, thm-ito-isometry-and-linearity-in-predictable-l2, lem-a-compact-set-inside-a-bounded-open-set-admits-an-explicit-compactly-supported-cutoff, def-continuity-real, def-axiom-of-choice, thm-choice-implies-dependent-implies-countable-choice, def-elementary-predictable-brownian-integrand]
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Section 3.7"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
---

## Example

Assume the Axiom of Choice and the standing hypothesis (H) of
[[def-elementary-predictable-brownian-integrand]]. For planar Brownian motion
$B=(B^1,B^2)$ [[def-d-dimensional-brownian-motion]], the processes
$$B^1_tB^2_t,\qquad (B^1_t)^2-(B^2_t)^2$$
are continuous local martingales, and after stopping at the first exit from any
bounded domain they become true square-integrable martingales.

## Facts & Assumptions

**Given:** AC, (H), planar Brownian motion $B$, the functions $f(y_1,y_2)=y_1y_2$ and $g(y_1,y_2)=y_1^2-y_2^2$, a radius $R>0$ and the exit time $\tau_R:=\inf\{t\ge0:|B_t|\ge R\}$.
 
[F1] **Space-time harmonic functions.** If $U\subseteq[0,\infty)\times\mathbb R^2$ is open, $f\in C^{1,2}(U)$ has $\partial_tf+\tfrac12\Delta f=0$ on $U$, and $(0,0)\in U$, then $f(t,B_t)$ stopped at the first exit of a compact subdomain containing $(0,0)$ is a true square-integrable martingale, and on the stochastic interval up to the exit of $U$ the process is a continuous local martingale. [[thm-space-time-harmonic-functions-yield-brownian-local-martingales]] [[def-d-dimensional-brownian-motion]]
 
[F2] **Harmonicity.** For $p(y_1,y_2)=y_1y_2$ one has $\partial_{11}p=\partial_{22}p=0$, so $\Delta p=0$; for $q(y_1,y_2)=y_1^2-y_2^2$ one has $\partial_{11}q=2$ and $\partial_{22}q=-2$, so $\Delta q=0$; both are $C^2$ on $\mathbb R^2$ and time-independent, hence satisfy $\partial_t+\tfrac12\Delta=0$ on $[0,\infty)\times\mathbb R^2$. [[def-c-c-and-c-c-infinity-on-rn]]
 
[F3] **Bounded gradients on bounded domains.** On the disc $\{|y|\le R\}$ the gradients $\nabla p=(y_2,y_1)$ and $\nabla q=(2y_1,-2y_2)$ are bounded by $R$ and $2R$ respectively, so the stopped integrands in the localization of [F1] have finite energy and the stopped integrals are true square-integrable martingales. [[thm-space-time-harmonic-functions-yield-brownian-local-martingales]] [[def-locally-square-integrable-predictable-brownian-integrand]] [[thm-ito-integral-process-has-a-continuous-martingale-version]] [[thm-ito-isometry-and-linearity-in-predictable-l2]]
 
[F4] **AC bookkeeping.** Choice is declared for the ambient conditional-expectation and completeness interfaces. [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]
 
 
 
 

## Verification

**Proof technique:** direct.
 
1.1 The two functions are space-time harmonic: by [F2] both have vanishing Laplacian and no time dependence, so [F1] applies with $U=[0,\infty)\times\mathbb R^2$ and starting point $(0,0)$; hence $B^1_tB^2_t=p(B_t)$ and $(B^1_t)^2-(B^2_t)^2=q(B_t)$ are continuous local martingales. [F1, F2]
 
2.1 Stopping at a bounded domain: fix $R>0$ and let $\tau_R$ be the first exit of the disc of radius $R$; the stopped processes $p(B_{t\wedge\tau_R})$ and $q(B_{t\wedge\tau_R})$ are the stopped pieces of the local martingales of step 1.1, and by the bounded-gradient estimate [F3] the corresponding integrands are bounded on the disc, so each stopped process is a true square-integrable martingale. [F1, F3, step 1.1]
 
3.1 Explicit form of the stopped integrals: from [F1] with the cancellation of the drift, $p(B_{t\wedge\tau_R})=p(0)+\int_0^{t\wedge\tau_R}(B^2_s\,dB^1_s+B^1_s\,dB^2_s)$ and $q(B_{t\wedge\tau_R})=q(0)+\int_0^{t\wedge\tau_R}(2B^1_s\,dB^1_s-2B^2_s\,dB^2_s)$, so the martingale representation is explicit. [F1, F2, step 2.1]
 
4.1 Boundary and consistency cases: at $t=0$ both processes start at $0$; for $R\to\infty$ the local martingales are recovered as limits of the stopped martingales; the harmonic functions are not bounded on the whole plane, which is why the local-martingale statement needs the bounded-domain stopping and why the true-martingale claim is made only for bounded domains; for $B$ starting at the origin the disc contains the starting point for every $R>0$; and AC enters only through [F4]. [F1, F3, F4, step 2.1] ∎

## Source notes

Lawler, Section 3.7, records these planar examples of harmonic functions of Brownian motion; the bounded-domain statement is the square-integrability claim of the space-time harmonic theorem, applied to the explicit gradients.
