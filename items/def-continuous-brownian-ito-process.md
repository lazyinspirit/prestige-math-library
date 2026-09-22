---
id: def-continuous-brownian-ito-process
kind: definition
title: "Continuous Brownian Ito processes"
status: draft
origin: pipeline
deps: [def-elementary-predictable-brownian-integrand, def-progressively-measurable-and-predictable-process, def-locally-square-integrable-predictable-brownian-integrand, thm-localized-ito-integral, def-d-dimensional-brownian-motion, def-brownian-motion, def-continuous-time-adapted-process-and-martingale, def-continuous-time-filtration-and-all-pairs-martingale, def-axiom-of-choice, lem-ac-supplies-sequential-choices-for-probability-constructions, thm-tonelli-theorem-for-sigma-finite-product-spaces]
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
For this localized-calculus definition the filtration satisfies the usual
conditions, as required by
[[def-locally-square-integrable-predictable-brownian-integrand]].

1. **Real continuous Brownian Ito process.** A real progressively measurable process
   $X=(X_t)_{t\ge0}$ is a **continuous Brownian Ito process** when there are
   * a finite real $\mathcal F_0$-measurable $X_0$,
   * a real progressively measurable process $b=(b_s)_{s\ge0}$
     [[def-progressively-measurable-and-predictable-process]] with
     $\int_0^t|b_s|\,ds<\infty$ almost surely for every finite $t\ge0$, and
   * a real predictable process $\sigma=(\sigma_s)_{s\ge0}$, locally
     square-integrable in the sense that $\int_0^t\sigma_s^2\,ds<\infty$
     almost surely for every finite $t$
     [[def-locally-square-integrable-predictable-brownian-integrand]],

   such that, up to equality at all times on a measurable probability-one event,
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
   $\int_0^t|b^i_s|\,ds<\infty$ almost surely for every $i$ and finite $t$, and let
   $\sigma=(\sigma^{ik})$ be an $\mathbb R^{d\times m}$-valued predictable
   process, each entry predictable
   [[def-progressively-measurable-and-predictable-process]], with
   $\int_0^t(\sigma^{ik}_s)^2\,ds<\infty$ almost surely for every $i,k$ and finite $t$.
   Then
   $$X^i_t=X^i_0+\int_0^tb^i_s\,ds+\sum_{k=1}^m\int_0^t\sigma^{ik}_s\,dB^k_s, \qquad i=1,\dots,d,$$
   defines an $\mathbb R^d$-valued **continuous Brownian Ito process** driven by
   $B$, using the progressive integral versions of [[thm-localized-ito-integral]]. Other progressive representatives agreeing on one measurable full event at every time represent the same process. No claim is made that an arbitrary null-path modification remains adapted.

The following well-definedness clauses are part of the definition and are used
throughout.

3. **The drift integral is a genuine pathwise integral.** Progressive
   measurability gives measurable sections and makes the positive and negative
   integrals $\mathcal F_t$-measurable by the parameter-integral part of Tonelli
   [[thm-tonelli-theorem-for-sigma-finite-product-spaces]], applied to Lebesgue measure on $[0,t]$ and the probability measure on $\mathcal F_t$.
   On the event where both extended integrals are finite, their difference is
   the drift integral; set it to zero otherwise. This is an adapted measurable
   convention, is finite everywhere, and on one probability-one event is
   absolutely continuous on every finite interval (take the countable
   intersection over integer horizons). It is progressive: the map
   $(t,\omega)\mapsto\int_0^tb_s(\omega)\,ds$, with the preceding finite-value
   convention, is measurable on every $[0,T]\times\Omega$ by parameter
   integration, and is adapted. Thus the definition uses the standard
   almost-sure drift and local-energy classes under the usual conditions.

4. **The stochastic integral exists, is unique and is continuous.** By
   [[def-locally-square-integrable-predictable-brownian-integrand]] and
   [[thm-localized-ito-integral]] the localized integral $\sigma\cdot B$ is a
   well-defined adapted process with continuous paths, unique up to
   indistinguishability, and each of its finite-energy pieces is a
   square-integrable martingale. The displayed integral representative is progressive; $X$ is adapted by its required progressive measurability and has
   continuous paths, $X_t$ is finite almost surely for each $t$, and
   $M^i_t:=\sum_k\int_0^t\sigma^{ik}_s\,dB^k_s$ is a continuous local
   martingale relative to $(\mathcal F_t)$ in the sense of
   [[def-continuous-time-adapted-process-and-martingale]] for every $i$, with the common energy localizers described in clause 6.

5. **The coefficients are not part of the process.** A continuous Brownian Ito
   process may admit several representations $X=X_0+b\cdot\mathrm{Leb}
   +\sigma\cdot B$ with different pointwise representatives $(b,\sigma)$ (for example, altering a coefficient only at the single time zero), even for the same Brownian
   motion and filtration; this does not assert nonuniqueness of their equivalence classes modulo $\mathrm dt\otimes P$; conversely, two processes with the same displayed
   integral representation and the same $X_0$ are indistinguishable. Every
   statement on this page that mentions a decomposition uses only properties
   common to all representations of the given process. The separate
   quadratic-covariation definition that follows this item on its owning page
   is formulated from $X$ itself and not from $(b,\sigma)$; no
   quadratic-covariation definition is made inside this item.

6. **The class is closed under stopping and under linear combinations.**
   If $\tau$ is a stopping time, the literal stopped process $X^\tau$ is
   progressive. Indeed on $[0,T]\times\Omega$ the map
   $(t,\omega)\mapsto(t\wedge\tau(\omega),\omega)$ is measurable into
   $\mathcal B([0,T])\otimes\mathcal F_T$: the truncated time $\tau\wedge T$
   is $\mathcal F_T$-measurable, minimum is continuous, and rectangle inverse
   images give the assertion. Compose with the progressive restriction of $X$.
   Its drift is $b1_{[0,\tau]}$ and its diffusion is
   $\sigma1_{[0,\tau]}$; these retain almost-sure integrability and the required
   progressive/predictable measurability. The drift identity is pathwise.
   For the stochastic identity, apply the finite-energy stopping identity of
   [[thm-localized-ito-integral]], clause 4, on the canonical energy intervals
   of $\sigma$. The truncated integrand has finite energy on these same
   intervals. Comparing its canonical intervals with them at their pairwise
   minima by clause 4 identifies the localized integrals there. Countably
   many full-event agreements and exhaustion then give the identity at all
   times on one full event. Thus stopping closure uses localization, not a
   direct application of clause 4 to a possibly infinite-energy integrand.
   For finitely many coefficients, use the common continuous energy
   $E_t=\sum_{i,k}\int_0^t(\sigma^{ik}_s)^2ds$ and times
   $\kappa_n=\inf\{t:E_t\ge n\}\wedge n$, $n\ge1$.
   The same continuous-energy test as in the local-integrability definition
   makes these stopping times increasing to infinity almost surely, and bounds
   every stopped coefficient's expected energy by $n$. The preceding
   pairwise-minimum comparison shows that every integral stopped there is its
   finite-energy integral. Finite sums of these square-integrable martingales
   are martingales: finite sums preserve adaptation and integrability, and summing the integral test over any $A\in\mathcal F_s$ proves the conditional-expectation identity; hence their sums
   are local martingales with this common sequence. For fixed real constants,
   finite linear combinations of processes driven by the same vector Brownian
   motion have the combined coefficients. Their integrability follows from
   the triangle inequality and $(\sum_{j=1}^r u_j)^2\le r\sum_j u_j^2$.

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
