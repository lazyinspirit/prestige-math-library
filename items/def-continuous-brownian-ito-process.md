---
id: def-continuous-brownian-ito-process
kind: definition
title: "Continuous Brownian Ito processes"
status: draft
origin: pipeline
deps: [def-elementary-predictable-brownian-integrand, def-progressively-measurable-and-predictable-process, def-locally-square-integrable-predictable-brownian-integrand, thm-localized-ito-integral, def-d-dimensional-brownian-motion, def-brownian-motion, def-continuous-time-adapted-process-and-martingale, def-continuous-time-filtration-and-all-pairs-martingale, def-axiom-of-choice, lem-ac-supplies-sequential-choices-for-probability-constructions]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Aad van der Vaart, Martingales, Diffusions and Financial Mathematics (preliminary notes), Section 5.9"
      url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"
---

## Definition

Assume the Axiom of Choice and the standing hypothesis (H) of
[[def-elementary-predictable-brownian-integrand]]: $B$ is a standard Brownian
motion on a filtered probability space, adapted to $(\mathcal F_t)_{t\ge0}$,
with $B_t-B_s$ independent of $\mathcal F_s$ of law $N(0,t-s)$ for $0\le s<t$.

1. **Real continuous Brownian Ito process.** A real process
   $X=(X_t)_{t\ge0}$ is a **continuous Brownian Ito process** when there are
   * a finite real $\mathcal F_0$-measurable $X_0$,
   * a real progressively measurable process $b=(b_s)_{s\ge0}$
     [[def-progressively-measurable-and-predictable-process]] with
     $\int_0^t|b_s|\,ds<\infty$ almost surely for every finite $t\ge0$, and
   * a real predictable process $\sigma=(\sigma_s)_{s\ge0}$, locally
     square-integrable in the sense that $\int_0^t\sigma_s^2\,ds<\infty$
     almost surely for every finite $t$
     [[def-locally-square-integrable-predictable-brownian-integrand]],

   such that, up to indistinguishability of processes,
   $$X_t=X_0+\int_0^tb_s\,ds+\int_0^t\sigma_s\,dB_s,\qquad t\ge0,$$
   where the first integral is the pathwise Lebesgue integral of $s\mapsto
   b_s(\omega)$ and the second is the localized Ito integral
   $\sigma\cdot B$ of [[thm-localized-ito-integral]]. One writes
   $\displaystyle dX_t=b_t\,dt+\sigma_t\,dB_t$ for the display, and $b$ is
   called the **drift** and $\sigma$ the **diffusion coefficient** of this
   representation.

2. **Multidimensional Brownian-driven process.** Let $d\ge1$ and $m\ge1$ be
   finite integers, let $B=(B^1,\dots,B^m)$ be a standard $m$-dimensional
   Brownian motion [[def-d-dimensional-brownian-motion]] that is adapted to
   $(\mathcal F_t)$ and whose vector increment $B_t-B_s$ is independent of
   $\mathcal F_s$ for $0\le s<t$, let $X_0$ be a finite
   $\mathcal F_0$-measurable $\mathbb R^d$-valued random vector, let $b$ be an
   $\mathbb R^d$-valued progressively measurable process with
   $\int_0^t|b^i_s|\,ds<\infty$ a.s. for every $i$ and finite $t$, and let
   $\sigma=(\sigma^{ik})$ be an $\mathbb R^{d\times m}$-valued predictable
   process, each entry predictable
   [[def-progressively-measurable-and-predictable-process]], with
   $\int_0^t(\sigma^{ik}_s)^2\,ds<\infty$ a.s. for every $i,k$ and finite $t$.
   Then
   $$X^i_t=X^i_0+\int_0^tb^i_s\,ds+\sum_{k=1}^m\int_0^t\sigma^{ik}_s\,dB^k_s, \qquad i=1,\dots,d,$$
   defines an $\mathbb R^d$-valued **continuous Brownian Ito process** driven by
   $B$, again up to indistinguishability.

The following well-definedness clauses are part of the definition and are used
throughout.

3. **The drift integral is a genuine pathwise integral.** Progressive
   measurability of $b$ makes $(s,\omega)\mapsto b_s(\omega)$ measurable for
   $\mathcal B([0,t])\otimes\mathcal F_t$ on $[0,t]\times\Omega$ for each
   $t$; on the almost-sure event where $\int_0^t|b_s|\,ds<\infty$ the function
   $s\mapsto b_s(\omega)$ is Lebesgue integrable on $[0,t]$, and
   $t\mapsto\int_0^tb_s(\omega)\,ds$ is absolutely continuous, hence
   continuous, on every finite interval. The value is finite almost surely for
   each $t$, and the two exceptional null events at times $s\le t$ are
   intersected only countably often when a finite horizon is fixed.

4. **The stochastic integral exists, is unique and is continuous.** By
   [[def-locally-square-integrable-predictable-brownian-integrand]] and
   [[thm-localized-ito-integral]] the localized integral $\sigma\cdot B$ is a
   well-defined adapted process with continuous paths, unique up to
   indistinguishability, and each of its finite-energy pieces is a
   square-integrable martingale. Consequently $X$ itself is adapted and has
   continuous paths, $X_t$ is finite almost surely for each $t$, and
   $M^i_t:=\sum_k\int_0^t\sigma^{ik}_s\,dB^k_s$ is a continuous local
   martingale relative to $(\mathcal F_t)$ in the sense of
   [[def-continuous-time-adapted-process-and-martingale]] for every $i$.

5. **The coefficients are not part of the process.** A continuous Brownian Ito
   process may admit several representations $X=X_0+b\cdot\mathrm{Leb}
   +\sigma\cdot B$ with different $(b,\sigma)$, even for the same Brownian
   motion and filtration; conversely, two processes with the same displayed
   integral representation and the same $X_0$ are indistinguishable. Every
   statement on this page that mentions a decomposition uses only properties
   common to all representations of the given process, and the quadratic
   covariation below is defined from $X$ itself and not from $(b,\sigma)$.

6. **The class is closed under stopping and under linear combinations.** If
   $X$ is a continuous Brownian Ito process as in clause 1 and $\tau$ is a
   stopping time [[def-continuous-time-stopping-time]], then $X^\tau$,
   interpreted as $X_{t\wedge\tau}$ on the almost-sure event where $X$ is
   continuous, is again a continuous Brownian Ito process with coefficients
   $b1_{[0,\tau]}$ and $\sigma1_{[0,\tau]}$ and initial value $X_0$: the
   Lebesgue identity is pathwise, and the stochastic identity is the stopping
   identity of [[thm-localized-ito-integral]], clause 4. Finite linear
   combinations are handled componentwise.

7. **No pathwise integral against Brownian motion is defined.** The display
   defines the stochastic integral only as the localized limit of
   [[thm-localized-ito-integral]]; no integral $\int_0^tH_s(\omega)\,dB_s(\omega)$
   along the individual path is asserted, and the page's examples show that
   the pathwise Riemann--Stieltjes route is unavailable.

No choice beyond the declared AC of the ambient interfaces enters the
construction: the coefficients $b,\sigma$ and the process are given data, and
the canonically localized integral is constructed in
[[thm-localized-ito-integral]]. The Axiom of Choice is declared because the
conditional-expectation and $L^2$ interfaces used downstream assume it, and
the countable-choice obligations inherited from those interfaces are declared
as dependencies of this item.
