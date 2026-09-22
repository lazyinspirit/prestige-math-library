---
id: ex-harmonic-functions-of-planar-brownian-motion
kind: example
title: "Harmonic functions of planar Brownian motion"
status: draft
origin: pipeline
deps: [thm-space-time-harmonic-functions-yield-brownian-local-martingales, def-d-dimensional-brownian-motion, def-brownian-motion, def-natural-and-usual-augmented-brownian-filtrations, def-c-c-and-c-c-infinity-on-rn, def-continuous-time-stopping-time, def-continuous-time-adapted-process-and-martingale, def-locally-square-integrable-predictable-brownian-integrand, thm-localized-ito-integral, thm-stopping-an-ito-integral, thm-ito-integral-process-has-a-continuous-martingale-version, thm-ito-isometry-and-linearity-in-predictable-l2, lem-a-compact-set-inside-a-bounded-open-set-admits-an-explicit-compactly-supported-cutoff, def-continuity-real, def-axiom-of-choice, lem-ac-supplies-sequential-choices-for-probability-constructions, def-elementary-predictable-brownian-integrand]
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
[[def-elementary-predictable-brownian-integrand]]. Equip planar Brownian
motion $B=(B^1,B^2)$ with its usual augmented natural filtration and use its
everywhere-continuous, zero-start normalization (which changes it only on an
$\mathcal F_0$-null event). Then the processes
$$B^1_tB^2_t,\qquad (B^1_t)^2-(B^2_t)^2$$
are continuous local martingales, and after stopping at the first exit from any
origin-centred disc they become true square-integrable martingales.

## Facts & Assumptions

**Given:** AC, (H), planar Brownian motion $B$ under the usual conditions, the functions $f(y_1,y_2)=y_1y_2$ and $g(y_1,y_2)=y_1^2-y_2^2$, a radius $R>0$ and the exit time $\tau_R:=\inf\{t\ge0:|B_t|\ge R\}$. [[def-natural-and-usual-augmented-brownian-filtrations]]
 
[F1] **Space-time harmonic functions.** If $U\subseteq[0,\infty)\times\mathbb R^2$ is open, $f\in C^{1,2}(U)$ has $\partial_tf+\tfrac12\Delta f=0$ on $U$, and $(0,0)\in U$, then $f(t,B_t)$ stopped at the first exit of a compact subdomain containing $(0,0)$ is a true square-integrable martingale, and on the stochastic interval up to the exit of $U$ the process is a continuous local martingale. [[thm-space-time-harmonic-functions-yield-brownian-local-martingales]] [[def-d-dimensional-brownian-motion]]
 
[F2] **Harmonicity.** For $p(y_1,y_2)=y_1y_2$ one has $\partial_{11}p=\partial_{22}p=0$, so $\Delta p=0$; for $q(y_1,y_2)=y_1^2-y_2^2$ one has $\partial_{11}q=2$ and $\partial_{22}q=-2$, so $\Delta q=0$; both are $C^2$ on $\mathbb R^2$ and time-independent, hence satisfy $\partial_t+\tfrac12\Delta=0$ on $[0,\infty)\times\mathbb R^2$. [[def-c-c-and-c-c-infinity-on-rn]]
 
[F3] **Bounded gradients on bounded domains.** On the disc $\{|y|\le R\}$ the gradients $\nabla p=(y_2,y_1)$ and $\nabla q=(2y_1,-2y_2)$ are bounded by $R$ and $2R$ respectively, so the stopped integrands in the localization of [F1] have finite energy and the stopped integrals are true square-integrable martingales. [[thm-space-time-harmonic-functions-yield-brownian-local-martingales]] [[def-locally-square-integrable-predictable-brownian-integrand]] [[thm-ito-integral-process-has-a-continuous-martingale-version]] [[thm-ito-isometry-and-linearity-in-predictable-l2]]
 
[F4] **AC bookkeeping.** Full AC supplies the inherited Brownian construction, conditional-expectation and completeness interfaces, as well as the choice assumptions of the space-time harmonic theorem. [[def-axiom-of-choice]]
 
 
 
 

## Verification

**Proof technique:** direct.
 
1.1 The two functions are space-time harmonic: by [F2] both have vanishing Laplacian and no time dependence, so the lifetime-local assertion [F1] applies with the relatively open set $U=[0,\infty)\times\mathbb R^2$, whose lifetime is infinity. Hence $B^1_tB^2_t=p(B_t)$ and $(B^1_t)^2-(B^2_t)^2=q(B_t)$ are continuous local martingales. [F1, F2]
 
2.1 Time-capped stopping: fix $R>0$ and for each integer $n\ge1$ set $K_n=[0,n]\times\{y:|y|\le R\}$. This is a compact subset of $U=[0,\infty)\times\mathbb R^2$ containing $(0,0)$ in its relative interior; the exit time in [F1] is exactly $\tau_{K_n}=n\wedge\tau_R$. The harmonic theorem makes this a stopping time and supplies its stopped integral identity and square-integrable martingale. Also $\{\tau_R\le t\}=\{\tau_{K_n}\le t\}$ whenever $n>t$, so $\tau_R$ is a stopping time. Given any finite horizon $T$, choose an integer $n>T$; then $t\wedge\tau_{K_n}=t\wedge\tau_R$ for every $0\le t\le T$. Thus the compact-stopped process and integral from [F1] coincide with the disc-stopped ones throughout that horizon. This proves the disc-stopped martingale property for every pair of finite times without treating a spatial disc as compact space-time. [F1, F3, step 1.1]

 
3.1 Explicit form of the stopped integrals: from [F1] and the stopping identity, $$p(B_{t\wedge\tau_R})=\int_0^t1_{[0,\tau_R]}(s)(B^2_s\,dB^1_s+B^1_s\,dB^2_s),$$ $$q(B_{t\wedge\tau_R})=\int_0^t1_{[0,\tau_R]}(s)(2B^1_s\,dB^1_s-2B^2_s\,dB^2_s).$$ On each finite horizon the integrands agree with the bounded predictable compact-stopped integrands from step 2.1, including the endpoint indicator; their squared Euclidean norms are bounded by $R^2$ and $4R^2$. Thus each scalar component has finite expected energy and the finite sums are square-integrable martingales. The identities hold up to indistinguishability: intersect the probability-one identities for integer horizons. [F1, F2, F3, step 2.1]
 
4.1 Boundary and consistency cases: at $t=0$ both processes start at $0$; as integer $R\to\infty$, every continuous path is bounded on each compact time interval, so $\tau_R\to\infty$ and the stopped processes eventually equal the unstopped ones on that interval; the proof here asserts square-integrability after disc stopping using bounded gradients; unboundedness on the plane alone is not an obstruction to a true martingale, and no such obstruction is claimed; for $B$ starting at the origin the disc contains the starting point for every $R>0$; and AC enters only through [F4]. [F1, F3, F4, step 2.1] ∎

## Source notes

Lawler, Section 3.7, records these planar examples of harmonic functions of Brownian motion; the disc-stopped statement follows from its compact space-time version through the explicit time caps of step 2.1 and the displayed bounded gradients.
