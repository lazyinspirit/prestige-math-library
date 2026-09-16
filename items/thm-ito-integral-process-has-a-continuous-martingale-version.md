---
id: thm-ito-integral-process-has-a-continuous-martingale-version
kind: theorem
title: "The Ito integral process has a continuous martingale version"
status: draft
origin: pipeline
deps: [def-ito-integral-for-square-integrable-predictable-processes, thm-ito-isometry-and-linearity-in-predictable-l2, lem-general-ito-integral-is-independent-of-the-approximating-sequence-and-ae-representative, thm-density-of-elementary-predictable-processes-in-predictable-l2, thm-ito-isometry-for-elementary-integrands, def-ito-integral-of-an-elementary-predictable-process, def-elementary-predictable-brownian-integrand, def-continuous-time-adapted-process-and-martingale, def-law-modification-and-indistinguishability-of-processes, thm-doob-lp-maximal-inequality, thm-monotone-convergence-for-the-integral, thm-tower-property-of-conditional-expectation, thm-basic-algebra-and-order-properties-of-conditional-expectation, def-conditional-expectation-as-an-ae-class, cor-cauchy-schwarz-for-random-variables, lem-rat-embeds-dense, def-axiom-of-choice, thm-choice-implies-dependent-implies-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Aad van der Vaart, Stochastic Integration and Differential Equations, Theorem 5.26"
      url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Proposition 3.2.4"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
---

## Statement

Assume the Axiom of Choice and the standing hypothesis (H) of
[[def-elementary-predictable-brownian-integrand]]. Let $H$ be a predictable
process with $E\int_0^TH_s^2ds<\infty$ for every finite $T$. Then there is an
adapted process $M=(M_t)_{t\ge0}$ with continuous paths such that
$M_t=\int_0^tH_s\,dB_s$ almost surely for every $t\ge0$
[[def-ito-integral-for-square-integrable-predictable-processes]], and $M$ is a
square-integrable martingale relative to $(\mathcal F_t)$
[[def-continuous-time-adapted-process-and-martingale]]: $EM_t^2=E\int_0^tH_s^2ds<\infty$
for every $t$. Any two such versions are indistinguishable
[[def-law-modification-and-indistinguishability-of-processes]]; in particular
the continuous version is unique up to indistinguishability, and it is the only
continuous square-integrable martingale whose value at each deterministic $t$
is the integral class.

## Facts & Assumptions

**Given:** AC, the standing hypothesis (H), a finite-energy predictable $H$ with $E\int_0^TH^2ds<\infty$ for all finite $T$, and a horizon $T>0$.

[F1] For every $\delta>0$ there is a bounded elementary predictable $G$ with $\|H-G\|_{L^2(\mathrm dt\otimes P)}<\delta$; choosing the least admissible index in an enumeration of the elementary pairs makes the selection explicit. [[thm-density-of-elementary-predictable-processes-in-predictable-l2]]

[F2] For elementary $J$ the process $I(J)$ is a continuous square-integrable martingale with $E(I_t(J)-I_s(J))^2=E\int_s^tJ^2du$ for $s\le t$, and $E I_T(J)^2=E\int_0^TJ^2du$. [[def-ito-integral-of-an-elementary-predictable-process]] [[thm-ito-isometry-for-elementary-integrands]]

[F3] Doob's $L^2$ maximal inequality: for a discrete martingale $Y_0,\dots,Y_N$ with $Y_N\in L^2$, $E\max_{k\le N}|Y_k|^2\le4E|Y_N|^2$; the sampled family $(I_{kT/2^m}(J))_k$ is a discrete martingale for the filtration $(\mathcal F_{kT/2^m})_k$, by the tower property. [[thm-doob-lp-maximal-inequality]] [[thm-tower-property-of-conditional-expectation]]

[F4] If a sequence $0\le Z_n\uparrow Z$ of nonnegative random variables increases pointwise, then $E Z_n\uparrow E Z$; the dyadic grids $D_m:=\{kT/2^m:0\le k\le2^m\}$ are nested with union the dyadic rationals of $[0,T]$, so $\sup_{q\in D}|I_q(J)|=\lim_m\max_{q\in D_m}|I_q(J)|$. [[thm-monotone-convergence-for-the-integral]]

[F5] The rationals are dense in $\mathbb R$, and each rational is a limit of dyadic rationals $k/2^n$; a continuous function on $[0,T]$ therefore satisfies $\sup_{t\in[0,T]}|f(t)|=\sup_{q\in D}|f(q)|$. [[lem-rat-embeds-dense]]

[F6] For every $t$ the class $\int_0^tH\,dB$ is the $L^2(P)$-limit of $I_t(H^n)$ for every admissible elementary sequence $H^n\to H$, and $\|\int_0^tH\,dB\|_2^2=E\int_0^tH^2ds$; the integration map is linear and isometric in the predictable $L^2$ variable. [[def-ito-integral-for-square-integrable-predictable-processes]] [[lem-general-ito-integral-is-independent-of-the-approximating-sequence-and-ae-representative]] [[thm-ito-isometry-and-linearity-in-predictable-l2]]

[F7] If $X_n\to X$ in $L^2(P)$ then $E|X_n-X|\le\|X_n-X\|_2\to0$, and conditional expectations are $L^1$-contractive: $\|E[X_n\mid\mathcal G]-E[X\mid\mathcal G]\|_1\le E|X_n-X|$. [[cor-cauchy-schwarz-for-random-variables]] [[thm-basic-algebra-and-order-properties-of-conditional-expectation]]

[F8] AC is declared for the ambient interfaces; the construction itself fixes an explicit least-index sequence. [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]

## Proof

**Proof technique:** direct.

1.1 Fix $T>0$ and choose, by [F1] with tolerance $2^{-2n}$ and the least admissible index, bounded elementary predictable $H^n$ with $\|H^n-H\|_{L^2(\mathrm dt\otimes P)}\le2^{-2n}$; write $X^n_t:=I_t(H^n)$ for the continuous elementary process of [F2]. [F1, F2, given]

1.2 For every elementary predictable $J$ and every $S>0$, $E\sup_{t\le S}|I_t(J)|^2\le4E\int_0^SJ^2du$: on the full-measure event where $I(J)$ is continuous, [F5] identifies the supremum over $[0,S]$ with the supremum over the dyadic rationals, [F4] writes the latter as the increasing limit of the finite maxima over the nested grids $D_m$, [F3] bounds $E\max_{q\in D_m}|I_q(J)|^2\le4E|I_S(J)|^2=4E\int_0^SJ^2du$ for every $m$, and monotone convergence passes the bound to the limit. [F2, F3, F4, F5]

2.1 For each $n$, $H^{n+1}-H^n$ is elementary on a common refinement and $\|H^{n+1}-H^n\|_{L^2(\mathrm dt\otimes P)}\le2^{-2(n+1)}+2^{-2n}\le2^{1-2n}$; applying step 1.2 to $J=H^{n+1}-H^n$ gives $E a_n^2\le4\bigl(2^{1-2n}\bigr)^2=2^{4-4n}$ for $a_n:=\sup_{t\le T}|X^{n+1}_t-X^n_t|$. [F2, step 1.1, step 1.2]

3.1 Consequently $E\sum_{n\ge1}2^na_n^2=\sum_{n\ge1}2^nEa_n^2\le\sum_{n\ge1}2^{4-3n}<\infty$ by monotone convergence for the nonnegative series, so $\sum_n2^na_n^2<\infty$ almost surely; the Cauchy--Schwarz inequality $\sum_na_n=\sum_n(2^{n/2}a_n)2^{-n/2}\le\bigl(\sum_n2^na_n^2\bigr)^{1/2}\bigl(\sum_n2^{-n}\bigr)^{1/2}$ then gives $\sum_na_n<\infty$ almost surely, on an event $A_T$ of probability one. [F7, step 2.1]

4.1 On $A_T$ the sequence $X^n$ converges uniformly on $[0,T]$ to a limit; define $M^{(T)}_t:=\limsup_nX^n_t$ for $t\in[0,T]$, which is $\mathcal F_t$-measurable as a limit superior of $\mathcal F_t$-measurable random variables and satisfies $M^{(T)}_t=\lim_nX^n_t$ almost surely for every $t$; on $A_T$ the paths of $M^{(T)}$ are continuous, being uniform limits of continuous paths. [F2, step 3.1]

5.1 For every $t\in[0,T]$ the sequence $X^n_t=I_t(H^n)$ converges to $\int_0^tH\,dB$ in $L^2(P)$ by [F6] applied to the truncations $H^n1_{[0,t]}\to H1_{[0,t]}$; combined with step 4.1 and the almost-sure uniqueness of limits, $M^{(T)}_t=\int_0^tH\,dB$ almost surely for every $t\in[0,T]$. [F6, step 4.1]

5.2 For $0\le s\le t\le T$ and $n$, $E[X^n_t\mid\mathcal F_s]=X^n_s$ by [F2], and step 3.1 makes $X^n_t\to M^{(T)}_t$ and $X^n_s\to M^{(T)}_s$ in $L^1(P)$ as well, so [F7] lets the conditional expectations pass to the limit: $E[M^{(T)}_t\mid\mathcal F_s]=M^{(T)}_s$ almost surely. [F2, F7, step 3.1, step 4.1]

5.3 For every $t\in[0,T]$, $E(M^{(T)}_t)^2=\lim_nE(X^n_t)^2=\lim_nE\int_0^t(H^n)^2ds=E\int_0^tH^2ds<\infty$, using [F6] and the $L^2$-norm continuity of the elementary integrals; hence $M^{(T)}$ is square-integrable. [F6, step 2.1, step 4.1]

6.1 Steps 4.1, 5.1, 5.2 and 5.3 show that $M^{(T)}$ is an adapted continuous square-integrable martingale version on $[0,T]$. If $N$ is another continuous version on $[0,T]$, then $M^{(T)}_q=N_q$ almost surely for each rational $q\in[0,T]$; intersecting the countably many full-measure events and invoking continuity gives $M^{(T)}=N$ on a single event of probability one, so any two continuous versions are indistinguishable. [F5, step 4.1, step 5.1, step 5.2, step 5.3]

7.1 Apply the construction on the horizons $T=m$, $m=1,2,\dots$; two versions on adjacent horizons agree on the smaller one by the uniqueness of step 6.1 applied there, since the restriction of the larger-horizon version is a continuous version on the smaller horizon. Define $M_t:=\liminf_mM^{(m)}_t$ for every $t\ge0$, which is $\mathcal F_t$-measurable as a limit inferior of $\mathcal F_t$-measurable random variables; on the intersection of the countably many agreement events (a full-measure event) the sequence $M^{(m)}_t(\omega)$ is eventually constant, equal to the common value of the versions from the least $m\ge\max(t,1)$ onwards, so $M$ is well defined almost surely, is adapted, has continuous paths (each $M^{(m)}$ is continuous and they agree on the overlap), is a square-integrable martingale with $EM_t^2=E\int_0^tH^2ds$, and satisfies $M_t=\int_0^tH\,dB$ almost surely for every $t\ge0$. Uniqueness up to indistinguishability on $[0,\infty)$ follows from the same rationals-and-continuity argument. AC enters only through the declared ambient interfaces and the least-index selections of step 1.1. [step 6.1, F8, given] ∎

## Source notes

Van der Vaart, Theorem 5.26(iii), obtains the continuous version from Doob's maximal inequality applied to the elementary approximants and a summable-error argument; Lawler, Proposition 3.2.4, proves the same statement with a subsequence criterion. The proof here follows the summable-error route, which is why no almost-sure-subsequence theorem is needed: the weighted series $\sum_n2^na_n^2$ is summable in expectation, and Cauchy--Schwarz converts it into almost-sure summability of the sup norms.
