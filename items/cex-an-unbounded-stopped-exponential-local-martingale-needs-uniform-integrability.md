---
id: cex-an-unbounded-stopped-exponential-local-martingale-needs-uniform-integrability
kind: counterexample
title: "An unbounded stopped exponential martingale needs uniform integrability"
status: draft
origin: pipeline
deps: [cor-exponential-brownian-martingale, def-brownian-motion, def-continuous-time-stopping-time, def-uniformly-integrable-family, thm-uniform-integrability-plus-probability-convergence-implies-l1-convergence, thm-law-of-the-iterated-logarithm-for-brownian-motion-at-infinity, thm-doob-lp-maximal-inequality, thm-doob-l1-maximal-inequality, cor-absolute-value-and-powers-of-a-martingale-are-submartingales, thm-optional-sampling-for-bounded-stopping-times, thm-dominated-convergence, def-continuous-time-filtration-and-all-pairs-martingale, def-continuity-real, thm-heine-cantor-r, def-convergence-in-probability, def-elementary-predictable-brownian-integrand, def-conditional-expectation-as-an-ae-class, def-axiom-of-choice, lem-ac-supplies-sequential-choices-for-probability-constructions, def-wiener-measure-on-continuous-path-space, def-natural-and-usual-augmented-brownian-filtrations, thm-monotone-convergence-for-the-integral, cor-cauchy-schwarz-for-random-variables, thm-bolzano-weierstrass, lem-rat-embeds-dense, thm-intermediate-value]
proof_strategy: direct
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Sections 3.3 and 4.1"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
---

## Statement refuted

The inference "if $Z$ is a positive continuous local martingale with $Z_0=1$ and
$\tau<\infty$ almost surely, then $EZ_{t\wedge\tau}=1$ for all $t$ implies
$EZ_\tau=1$" is false: the equality of the stopped expectations at finite times
does not by itself justify optional stopping at an unbounded stopping time. Assume AC and the standing hypothesis (H) of
[[def-elementary-predictable-brownian-integrand]]. Choose an everywhere-continuous zero-start Brownian realization as in
[[def-wiener-measure-on-continuous-path-space]], normalizing the zero-start
event as well, and equip this representative with its own usual augmented
natural filtration [[def-natural-and-usual-augmented-brownian-filtrations]].
The witness is $Z_t=\exp(B_t-t/2)$ and
$\tau=\inf\{t\ge0:Z_t=1/2\}$; for this pair $EZ_{t\wedge\tau}=1$ for every finite
$t$, $\tau<\infty$ almost surely, yet $Z_{t\wedge\tau}\to1/2$ almost surely and
$EZ_\tau=1/2\ne1$, and the stopped family is not uniformly integrable.

## Facts & Assumptions

**Given:** AC, (H), an everywhere-continuous zero-start standard Brownian motion $B$ equipped with its usual augmented natural filtration, the process $Z_t=\exp(B_t-t/2)$, the level $1/2$, the stopping time $\tau=\inf\{t:Z_t=1/2\}$, and $t>0$.
 
[F1] **Exponential martingale.** $Z$ is a positive continuous martingale with $EZ_t=1$ for every $t$, and for $\theta=2$ the same statement applied to $\exp(2B_t-2t)$ gives $Ee^{2B_t}=e^{2t}$, hence $EZ_t^2=Ee^{2B_t-t}=e^{t}<\infty$. [[cor-exponential-brownian-martingale]] [[def-brownian-motion]]
 
[F2] **The level set is hit.** On the full-measure event of continuity, $\log Z_t=B_t-t/2\to-\infty$ as $t\to\infty$ because $B_t/t\to0$ almost surely by the law of the iterated logarithm; hence $Z_t\to0$, while $Z_0=1>1/2$, so the intermediate value theorem gives that the continuous path attains the value $1/2$ at some finite time and $\tau<\infty$ almost surely. [[thm-law-of-the-iterated-logarithm-for-brownian-motion-at-infinity]] [[def-continuity-real]] [[def-brownian-motion]] [[thm-intermediate-value]]
 
[F3] **$\tau$ is a stopping time.** Every path of $Z$ is continuous, so for $t>0$ the event $\{\tau\le t\}$ equals $\bigcap_{m\ge1}\bigcup_{q\in\mathbb Q\cap[0,t]}\{|Z_q-1/2|<1/m\}$ identically. A finite infimum of hit times is itself a hit, by continuity and a sequence of hit times decreasing to that infimum. A hit in $[0,t]$ is approximated by rational times; conversely, approximate contacts $q_m\in[0,t]$ have a convergent subsequence by Bolzano–Weierstrass, and continuity gives a hit at its limit. AC permits these countable selections, with positive indices reindexed from zero if required. At $t=0$ the hit event is empty since $Z_0=1$. Every displayed event is $\mathcal F_t$-measurable, so no null-set transfer is needed. [[def-continuous-time-stopping-time]] [[thm-bolzano-weierstrass]] [[lem-rat-embeds-dense]] [[def-continuity-real]]

[F4] **Finite-grid sampling and maximal domination.** The restriction of the all-pairs martingale $Z$ to a finite deterministic grid is a discrete martingale; extend it constantly after the last index. The bounded discrete optional-sampling theorem and the discrete Doob $L^2$ inequality then apply on that grid. Monotone convergence applies to the increasing squares of maxima over nested grids, and Cauchy–Schwarz turns the resulting $L^2$ bound into an integrable dominating supremum. The grid passage is proved in step 1.1. [[thm-optional-sampling-for-bounded-stopping-times]] [[thm-doob-lp-maximal-inequality]] [[thm-monotone-convergence-for-the-integral]] [[cor-cauchy-schwarz-for-random-variables]] [[thm-dominated-convergence]] [[def-continuous-time-filtration-and-all-pairs-martingale]]
 
[F5] **Uniform integrability and $L^1$ limits.** If a sequence converges almost surely and is uniformly integrable, then it converges in $L^1$ (a.s. convergence implies probability convergence by dominated convergence of the error-event indicators). Hence its expectations converge to that of the limit. [[thm-uniform-integrability-plus-probability-convergence-implies-l1-convergence]] [[def-uniformly-integrable-family]] [[def-convergence-in-probability]]
 
[F6] **AC bookkeeping.** AC is inherited from the Brownian and conditional-expectation interfaces and permits the countable selections of hit times and rational approximate contacts in [F3]. [[def-axiom-of-choice]]
 
 
 
 

## Counterexample

**Proof technique:** direct.
 
1.1 Finite-time means: fix $0<t<\infty$ and the nested grids $r_{j,n}=jt2^{-n}$, $0\le j\le2^n$. Put $S_n=\max_jZ_{r_{j,n}}$. Discrete Doob and [F1] give $ES_n^2\le4EZ_t^2=4e^t$. The grids are nested and dense, and all paths are continuous, so $S_n\uparrow S=\sup_{s\le t}Z_s$. Thus $S$ is measurable, and monotone convergence gives $ES^2\le4e^t$; Cauchy–Schwarz with the constant one yields $ES\le2e^{t/2}<\infty$. Let $J_n=\lceil 2^n(\tau\wedge t)/t\rceil$, an integer-valued stopping time for this grid, since $\{J_n\le j\}=\{\tau\wedge t\le r_{j,n}\}$ belongs to $\mathcal F_{r_{j,n}}$. It is bounded by $2^n$. Discrete optional sampling therefore gives $EZ_{r_{J_n,n}}=EZ_0=1$. These sampled variables converge pointwise to $Z_{\tau\wedge t}$ by continuity and are bounded by the integrable $S$. Dominated convergence proves $EZ_{\tau\wedge t}=1$. At $t=0$ the identity is immediate. [F1, F3, F4, given]
 
1.2 Limit of the stopped variables: since $\tau<\infty$ almost surely by [F2], for almost every $\omega$ and every $t>\tau(\omega)$ one has $Z_{t\wedge\tau}(\omega)=Z_\tau(\omega)=1/2$, so $Z_{t\wedge\tau}\to1/2$ almost surely as $t\to\infty$. Define the terminal variable as $1/2$ on the null event $\{\tau=\infty\}$ as well; it is measurable by finite-time stopped approximation on $\{\tau<\infty\}$. [F2, given]
 
2.1 The contradiction: if the family $(Z_{t\wedge\tau})_{t\ge0}$ were uniformly integrable, then its subfamily at integer times $t=n$ would be uniformly integrable, so [F5] and step 1.2 would give $L^1$ convergence of that sequence and $\lim_nEZ_{n\wedge\tau}=E[1/2]=1/2$; but step 1.1 gives $EZ_{t\wedge\tau}=1$ for every finite $t$. Since $1\ne1/2$, the family is not uniformly integrable, and the unsupported unit-mean conclusion at the unbounded time $\tau$ fails: $EZ_\tau=1/2\ne1=EZ_0$. [F4, F5, step 1.1, step 1.2]
 
3.1 Boundary and consistency cases: for bounded stopping times $\tau\wedge n$ the identity $EZ_{\tau\wedge n}=1$ does hold, whereas no deterministic bound on $\tau$ can hold almost surely: if $\tau\le T$ a.s., step 1.1 at $T$ would give $1=EZ_\tau=1/2$; the stopping time is finite almost surely, so almost-sure finiteness alone is not enough; the martingale is positive and has $EZ_t=1$ for every finite $t$, so terminal integrability at finite times is not the missing hypothesis; the witness exhibits both the failed conclusion ($E Z_\tau=1$) and the failed hypothesis (uniform integrability of the stopped family); and AC enters only through [F6]. [F1, F4, F6, step 2.1] ∎

## Source notes

The witness is verified directly from the exponential martingale's Gaussian-conditioning argument, the Brownian LIL and discrete sampling. Only the martingale and moment conclusions of cor-exponential-brownian-martingale are used; its separate Ito integral representation is not invoked. The nested-grid argument supplies the continuous supremum bound required for finite-time dominated convergence.
