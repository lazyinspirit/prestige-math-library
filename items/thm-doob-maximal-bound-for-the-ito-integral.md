---
id: thm-doob-maximal-bound-for-the-ito-integral
kind: theorem
title: "Doob maximal bound for the Ito integral"
status: draft
origin: pipeline
deps: [thm-ito-integral-process-has-a-continuous-martingale-version, thm-doob-lp-maximal-inequality, thm-ito-isometry-and-linearity-in-predictable-l2, def-ito-integral-for-square-integrable-predictable-processes, def-elementary-predictable-brownian-integrand, def-continuous-time-adapted-process-and-martingale, def-law-modification-and-indistinguishability-of-processes, thm-monotone-convergence-for-the-integral, thm-tower-property-of-conditional-expectation, cor-cauchy-schwarz-for-random-variables, lem-rat-embeds-dense, def-axiom-of-choice, lem-ac-supplies-sequential-choices-for-probability-constructions]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Proposition 3.2.4"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
---

## Statement

Assume the Axiom of Choice and the standing hypothesis (H) of
[[def-elementary-predictable-brownian-integrand]]. Let $H$ be a predictable
process with $E\int_0^TH_s^2ds<\infty$, and let
$M_t=\int_0^tH_s\,dB_s$ be the continuous version of
[[thm-ito-integral-process-has-a-continuous-martingale-version]]. Then
$$E\sup_{0\le t\le T}|M_t|^2\le4\,E\int_0^TH_s^2\,ds .$$
The left-hand side is finite and does not depend on the chosen version, since
any two continuous versions are indistinguishable. Every continuous version of
the integral process satisfies the same bound.

## Facts & Assumptions

**Given:** AC, the standing hypothesis (H), a finite-energy predictable $H$ on $[0,T]$, and the continuous version $M$ with $M_t=\int_0^tH\,dB$ a.s. and $EM_t^2=E\int_0^tH^2ds$.

[F1] $M$ is an adapted continuous square-integrable martingale with $E M_t^2=E\int_0^tH^2ds$ for every $t\le T$, and $M_T$ is the integral class at $T$. [[thm-ito-integral-process-has-a-continuous-martingale-version]] [[thm-ito-isometry-and-linearity-in-predictable-l2]]

[F2] For each $m\ge1$ the sampled family $Y_k:=M_{kT/2^m}$, $0\le k\le2^m$, is a discrete martingale for the filtration $(\mathcal F_{kT/2^m})_k$, by the tower property; hence Doob's $L^2$ inequality gives $E\max_{k\le2^m}Y_k^2\le4E Y_{2^m}^2$. [[thm-tower-property-of-conditional-expectation]] [[thm-doob-lp-maximal-inequality]]

[F3] By the continuous-version theorem there is an event of probability one on which the path of $M$ is continuous on $[0,T]$. On that event its supremum equals the supremum over the dyadic grid union $D:=\bigcup_m\{kT/2^m\}$, which in turn is the increasing limit $\lim_m\max_{k\le2^m}|M_{kT/2^m}|$ because the grids are nested. [[lem-rat-embeds-dense]] [[thm-ito-integral-process-has-a-continuous-martingale-version]]

[F4] For $0\le Z_m\uparrow Z$, $EZ_m\uparrow EZ$, so the expectation of the supremum is the limit of the expectations of the finite-grid maxima. [[thm-monotone-convergence-for-the-integral]]

[F5] Two continuous versions of the same integral process are indistinguishable, so their path suprema agree almost surely. [[thm-ito-integral-process-has-a-continuous-martingale-version]] [[def-law-modification-and-indistinguishability-of-processes]]

[F6] AC is declared for the ambient interfaces. [[def-axiom-of-choice]]

## Proof

**Proof technique:** direct.

1.1 For fixed $m$ the finite-grid quantity $\max_{k\le2^m}|M_{kT/2^m}|^2$ is square-integrable, and [F2] gives $E\max_{k\le2^m}|M_{kT/2^m}|^2\le4EM_T^2=4E\int_0^TH^2ds$. [F1, F2]

1.2 As $m$ increases the grids $\{kT/2^m:0\le k\le2^m\}$ are nested, so the maxima increase pointwise to the measurable random variable $S_D:=\sup_{q\in D}|M_q|$. By [F3], $S_D=\sup_{t\in[0,T]}|M_t|$ almost surely. [F3]

2.1 Monotone convergence [F4] applies pointwise to $Z_m:=\max_{k\le2^m}|M_{kT/2^m}|^2\uparrow S_D^2$. Hence, using the almost-sure equality in step 1.2, $E\sup_{t\le T}|M_t|^2=ES_D^2=\lim_mEZ_m\le4E\int_0^TH^2ds$, and the bound is finite because the right-hand side is finite. [F1, F4, step 1.1, step 1.2]

3.1 Every continuous version $N$ of the integral satisfies the same identity $EN_t^2=E\int_0^tH^2ds$ and the same discrete martingale property, so the argument gives the bound for $N$; and $N$ is indistinguishable from $M$ by [F5], so the path suprema, and hence the expectations, agree. AC enters only through the declared ambient interfaces [F6]. [F5, F6, step 2.1] ∎

## Source notes

Lawler, Proposition 3.2.4, states the maximal bound for the completed integral and proves it by discrete Doob on refining grids. The form here follows exactly that route, with monotone convergence replacing the almost-sure subsequence criterion of Lawler's proof.
