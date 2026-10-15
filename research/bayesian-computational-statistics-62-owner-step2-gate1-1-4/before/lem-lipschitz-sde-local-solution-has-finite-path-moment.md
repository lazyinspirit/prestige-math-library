---
id: lem-lipschitz-sde-local-solution-has-finite-path-moment
kind: lemma
title: A Lipschitz SDE solution has a finite path-sup second moment
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
axiom_base: Full AC
deps:
  - def-ito-sde-and-strong-solution
  - def-continuous-brownian-ito-process
  - thm-multidimensional-ito-formula-for-brownian-driven-processes
  - thm-stopping-an-ito-integral
  - thm-ito-integral-process-has-a-continuous-martingale-version
  - thm-ito-isometry-and-linearity-in-predictable-l2
  - thm-doob-maximal-bound-for-the-ito-integral
  - def-continuous-time-stopping-time
  - lem-adapted-continuous-processes-are-progressively-measurable
  - def-progressively-measurable-and-predictable-process
  - lem-rat-embeds-dense
  - thm-fatou-lemma
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Ramon van Handel, Stochastic Calculus, Filtering, and Stochastic Control: Lecture Notes (ACM 217, Spring 2007), Chapter 5.1"
      url: "https://web.math.princeton.edu/~rvan/acm217/ACM217.pdf"
    - title: "A.W. van der Vaart, Martingales, Diffusions and Financial Mathematics (preliminary notes), Section 7.1"
      url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"
---

## Statement

Use the coefficient and initial-value hypotheses of
[[def-ito-sde-and-strong-solution]] on a finite horizon $[0,T]$. If $Y$ is
any adapted continuous solution of that SDE whose drift and diffusion
integrals are locally defined as in the Definition, then
$$E\sup_{0\le t\le T}|Y_t|^2<\infty.$$
Thus the usual local-integrability definition of strong solution entails the
path-sup square-integrability used by the Picard estimates.

## Facts & Assumptions

**Given:** a finite horizon $T\ge0$, the usual filtered Brownian space,
jointly Borel coefficients with global Lipschitz constant $L$ and linear-growth
constant $K$, an $\mathcal F_0$ initial value $X_0\in L^2$, and an adapted
continuous solution $Y$ satisfying the SDE integral identity.

[F1] A strong solution has adapted continuous paths, the stated initial value,
and locally defined drift and finite-coordinate Itô integrals. The resulting
process belongs to the continuous Brownian Itô-process class when its drift
variation and diffusion energy are finite almost surely.
[[def-ito-sde-and-strong-solution]] [[def-continuous-brownian-ito-process]]

[F2] Adapted continuous processes are predictable and progressive; the
multidimensional Itô formula applies to continuous Brownian Itô processes and
$C^{1,2}$ functions. Tonelli's theorem permits the expected time-integral
interchanges below for the nonnegative measurable coefficient and stopped
integrands. [[lem-adapted-continuous-processes-are-progressively-measurable]] [[def-progressively-measurable-and-predictable-process]] [[thm-multidimensional-ito-formula-for-brownian-driven-processes]] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[F3] For a stopping time, stopping an Itô integral is the same as integrating
against $1_{[0,\tau]}H$; a finite-energy integral is a mean-zero
square-integrable martingale and has the scalar Itô maximal bound.
[[thm-stopping-an-ito-integral]] [[thm-ito-integral-process-has-a-continuous-martingale-version]] [[thm-ito-isometry-and-linearity-in-predictable-l2]] [[thm-doob-maximal-bound-for-the-ito-integral]]

[F4] The first-hitting time of a continuous adapted path can be checked by
measurability of its supremum over rational times and the endpoint.
[[def-continuous-time-stopping-time]] [[lem-rat-embeds-dense]]

[F5] Fatou's lemma passes a pointwise almost-sure limit of nonnegative
variables to the lower bound on their expectations. [[thm-fatou-lemma]]

[F6] The Itô-integral and Itô-formula suppliers use Full AC, already included
in the SDE data convention. [[def-axiom-of-choice]]

## Proof

1.1 If $T=0$, $Y_0=X_0$ and the claim is $E|X_0|^2<\infty$. Suppose $T>0$. Use the everywhere-continuous representative permitted by [F1]; changing it on the $\mathcal F_0$-measurable continuity-null complement preserves the equation up to indistinguishability. Since $Y$ is continuous and adapted, [F2] gives the required progressive/predictable representatives. For $R>0$ define $\tau_R:=\inf\{s\in[0,T]:|Y_s|\ge R\}\wedge T$, with $\inf\emptyset=+\infty$. For $t<T$, $\{\tau_R\le t\}=\{\sup_{s\le t}|Y_s|\ge R\}$, which is $\mathcal F_t$-measurable because the supremum equals the supremum over rational times in $[0,t]$ and $t$ by [F4]; for $t\ge T$ the event is all of $\Omega$. Thus $\tau_R$ is a stopping time. On $[0,\tau_R]$ the process is bounded by $R$, unless $|X_0|\ge R$, when $\tau_R=0$. [F1, F2, F4, given]

2.1 The multidimensional Itô formula [F2] for $U(x)=1+|x|^2$, stopped at $\tau_R$, has drift $2Y_s\cdot b(s,Y_s)+\|\sigma(s,Y_s)\|_F^2$ and martingale integrand $2Y_s^{\mathsf T}\sigma(s,Y_s)$. By step 1.1 and the linear-growth bound, the stopped martingale integrand has finite energy on $[0,T]$, so [F3] and the stopping identity make its expectation zero. Since $2K|y|(1+|y|)\le3K(1+|y|^2)$ and $K^2(1+|y|)^2\le2K^2(1+|y|^2)$, the generator is at most $C_0(1+|y|^2)$, where $C_0=3K+2K^2$. Hence, for $g_R(t):=E(1+|Y_{t\wedge\tau_R}|^2)$, $g_R(t)\le E(1+|X_0|^2)+C_0\int_0^t g_R(s)ds.$ The stopped variables are integrable because $Y$ is bounded before the stop and $X_0\in L^2$. [F1, F2, F3, step 1.1, given]

3.1 Set $H_R(t)=E(1+|X_0|^2)+C_0\int_0^tg_R(s)ds$. Then $g_R\le H_R$ and $H_R'\le C_0H_R$ almost everywhere, so $(e^{-C_0t}H_R(t))'\le0$. Therefore $g_R(t)\le E(1+|X_0|^2)e^{C_0t}$. [step 2.1, algebra]

4.1 Take $R=n\in\mathbb N$ and let $n\to\infty$. Every continuous path on $[0,T]$ is bounded, so $Y_{t\wedge\tau_n}\to Y_t$ almost surely for each fixed $t$. Fatou's lemma [F5] gives $\sup_{t\le T}E|Y_t|^2\le E(1+|X_0|^2)e^{C_0T}=:M_T<\infty$. [F1, F5, step 3.1]

5.1 The growth bound and step 4.1 imply $E\int_0^T|b(s,Y_s)|^2ds\le2K^2T(1+M_T)$ and $E\int_0^T\|\sigma(s,Y_s)\|_F^2ds\le2K^2T(1+M_T)$. Pathwise Cauchy–Schwarz for the drift and finite-energy Itô theory therefore put $Y$ in the continuous Brownian Itô-process class of [F1]. The vector martingale part $N_t=(\sum_k\int_0^t\sigma^{ik}(s,Y_s)dW_s^k)_{i=1}^d$ satisfies $E\sup_{t\le T}|N_t|^2\le4mE\int_0^T\|\sigma(s,Y_s)\|_F^2ds,$ by the finite-coordinate inequality $|\sum_kz_k|^2\le m\sum_k|z_k|^2$ and the scalar bound in [F3]. Likewise, pathwise Cauchy–Schwarz gives $E\sup_{t\le T}|\int_0^tb(s,Y_s)ds|^2\le T E\int_0^T|b(s,Y_s)|^2ds$. Thus the SDE equation and $|X_0+D+N|^2\le3(|X_0|^2+|D|^2+|N|^2)$ imply $E\sup_{t\le T}|Y_t|^2<\infty$. AC is inherited exactly as recorded in [F6]. [F1, F2, F3, F6, step 4.1, given] ∎

## Sources

Van Handel, Chapter 5.1, Theorem 5.1.5, and van der Vaart, Section 7.1,
Theorem 7.8, both localize solutions and use growth estimates to establish
moment control. This lemma supplies the exact implication needed for
pathwise uniqueness among all locally integrable strong solutions.
