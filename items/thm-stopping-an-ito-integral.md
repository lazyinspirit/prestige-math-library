---
id: thm-stopping-an-ito-integral
kind: theorem
title: "Stopping an Ito integral"
status: draft
origin: pipeline
deps: [thm-localized-ito-integral, def-elementary-predictable-brownian-integrand, def-locally-square-integrable-predictable-brownian-integrand, def-continuous-time-stopping-time, def-continuous-time-adapted-process-and-martingale, def-progressively-measurable-and-predictable-process, def-ito-integral-for-square-integrable-predictable-processes, def-law-modification-and-indistinguishability-of-processes, def-axiom-of-choice, lem-ac-supplies-sequential-choices-for-probability-constructions]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Aad van der Vaart, Stochastic Integration and Differential Equations, Lemma 5.28 and Theorem 5.36"
      url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"
---

## Statement

Assume the Axiom of Choice and the standing hypothesis (H) of
[[def-elementary-predictable-brownian-integrand]]. Let $H$ be a locally
square-integrable predictable process
[[def-locally-square-integrable-predictable-brownian-integrand]] with localized
integral $H\cdot B$ [[thm-localized-ito-integral]], and let $\tau$ be a
stopping time [[def-continuous-time-stopping-time]]. Then the process
$s\mapsto(H\cdot B)_{s\wedge\tau}$ and the localized integral of the process
$1_{[0,\tau]}H$ are indistinguishable:
$$(H\cdot B)_{t\wedge\tau}=\int_0^t1_{[0,\tau]}(s)H_s\,dB_s\qquad\text{for every }t\ge0\text{, up to indistinguishability}.$$
In particular, for $H$ of finite energy this reduces to the stopping identity
of [[thm-localized-ito-integral]], and for $\tau\equiv\infty$ it is the
definition of the localized integral.

## Facts & Assumptions

**Given:** AC, the standing hypothesis (H), a locally square-integrable predictable $H$ with energy $A$ and canonical times $\tau_n$, its localized integral $H\cdot B$, and a stopping time $\tau$.

[F1] $1_{[0,\tau]}$ is predictable for every stopping time, and $1_{[0,\tau]}H$ is predictable and locally square-integrable with energy $\int_0^t1_{[0,\tau]}H^2ds\le A_t<\infty$ a.s.; its localized integral exists and is a continuous local martingale. [[def-progressively-measurable-and-predictable-process]] [[thm-localized-ito-integral]]

[F2] The canonical times $\tau_n$ satisfy $\tau_n\le n$, $\tau_n\uparrow\infty$ a.s., $1_{(0,\tau_n]}H$ has finite energy $EA_{t\wedge\tau_n}\le n$, and $(H\cdot B)^{\tau_n}$ is the finite-energy integral of $H1_{(0,\tau_n]}$; the finite-energy stopping identity gives $(G\cdot B)^{\sigma}_t=\int_0^tG1_{(0,\sigma]}dB$ for finite-energy $G$ and any stopping time $\sigma$. [[def-locally-square-integrable-predictable-brownian-integrand]] [[thm-localized-ito-integral]]

[F3] If $(\rho_k)$ is nondecreasing with $\rho_k\uparrow\infty$ a.s., each $H1_{(0,\rho_k]}$ has finite energy, and a continuous adapted $N$ with $N_0=0$ has $N^{\rho_k}$ indistinguishable from the finite-energy integral of $H1_{(0,\rho_k]}$ for every $k$, then $N$ is indistinguishable from the localized integral of $H$. [[thm-localized-ito-integral]]

[F4] Stopping preserves adaptedness and continuity, so $N:=(H\cdot B)^{\tau}$ is an adapted continuous process with $N_0=0$.  The proof below uses the original sequence $(\tau_n)\uparrow\infty$ to localize $N$; the bounded sequence $(\tau\wedge\tau_n)$ is not asserted to be a localizing sequence. [[def-continuous-time-adapted-process-and-martingale]] [[thm-localized-ito-integral]]

[F5] AC is declared for the ambient interfaces. [[def-axiom-of-choice]]

## Proof

**Proof technique:** direct.

1.1 Put $G:=1_{[0,\tau]}H$ and $N:=(H\cdot B)^{\tau}$, so that $N$ is adapted with continuous paths and $N_0=(H\cdot B)_0=0$ by [F4]; by [F1] the localized integral $G\cdot B$ exists and both $N$ and $G\cdot B$ are continuous local martingales. [F1, F4, given]

1.2 For every $k$ the stopped integral $(H\cdot B)^{\tau_k}$ is the finite-energy integral of $H1_{(0,\tau_k]}$ by [F2], and the finite-energy stopping identity applied with the stopping time $\tau$ gives $(H\cdot B)^{\tau\wedge\tau_k}=(H1_{(0,\tau_k]}\cdot B)^{\tau}=\int_0^tH1_{(0,\tau_k]}1_{(0,\tau]}dB$. [F2, given]

2.1 The integrand identity $H1_{(0,\tau_k]}1_{(0,\tau]}=G1_{(0,\tau\wedge\tau_k]}=G1_{(0,\tau_k]}$ holds for every $(s,\omega)$ with $s>0$, the three expressions differing at most at $s=0$, a $(\mathrm dt\otimes P)$-null set; hence $\int_0^tH1_{(0,\tau_k]}1_{(0,\tau]}dB$ equals the finite-energy integral of $G1_{(0,\tau_k]}$, and the canonical sequence $\rho_k:=\tau_k$ is nondecreasing with $\rho_k\uparrow\infty$ almost surely, while $G1_{(0,\rho_k]}$ has finite energy $E\int_0^tG_s^21_{(0,\rho_k]}ds\le EA_{t\wedge\rho_k}\le k$. [F2, step 1.2]

3.1 Steps 1.1, 1.2 and 2.1 verify the hypotheses of [F3] for the process $N=(H\cdot B)^{\tau}$ and the localizing sequence $(\rho_k)$: $N$ is adapted and continuous with $N_0=0$, and $N^{\rho_k}=(H\cdot B)^{\tau\wedge\tau_k}$ is indistinguishable from the finite-energy integral of $G1_{(0,\rho_k]}$ for every $k$. Therefore $N$ is indistinguishable from the localized integral $G\cdot B$, which is exactly the identity $(H\cdot B)_{t\wedge\tau}=\int_0^t1_{[0,\tau]}H\,dB$ up to indistinguishability. [F3, step 1.1, step 1.2, step 2.1]

4.1 The special cases are consistent: for $\tau\equiv\infty$ one has $1_{[0,\tau]}\equiv1$ and the identity is the definition of the localized integral; for finite-energy $H$ it is the finite-energy stopping identity [F2] used in the proof; and for a deterministic $\tau\equiv t_0$ it recovers the convention $\int_0^tH1_{[0,t_0]}dB=(H\cdot B)_{t\wedge t_0}$. AC enters only through the declared ambient interfaces [F5], and the localizing sequence $(\tau_n)$ is canonical. [F2, F5, step 3.1, given] ∎

## Source notes

Van der Vaart, Lemma 5.28, proves the finite-energy stopping identity, and Theorem 5.36 plus Lemma 5.33 extends it to the localized integral. The proof here packages the extension as an application of the characterization clause of the localized integral, with the canonical localizing sequence $\rho_k=\tau_k$ of $H$: the stopping identity for each $\tau_k$ is step 1.2, and the a.e. integrand identity of step 2.1 expresses $N^{\tau_k}$ as the integral of $G1_{(0,\tau_k]}$, so clause 3 of [[thm-localized-ito-integral]] applies with $\rho_k\uparrow\infty$.
