---
id: def-locally-square-integrable-predictable-brownian-integrand
kind: definition
title: "Locally square-integrable predictable Brownian integrands"
status: draft
origin: pipeline
deps: [def-progressively-measurable-and-predictable-process, def-elementary-predictable-brownian-integrand, def-continuous-time-stopping-time, def-ito-integral-for-square-integrable-predictable-processes, thm-tonelli-theorem-for-sigma-finite-product-spaces, def-axiom-of-choice, lem-ac-supplies-sequential-choices-for-probability-constructions]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Aad van der Vaart, Stochastic Integration and Differential Equations, Sections 5.4-5.5"
      url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"
---

## Definition

Assume the Axiom of Choice and the standing hypothesis (H) of
[[def-elementary-predictable-brownian-integrand]]. Let
$H=(H_s)_{s\ge0}$ be a predictable process
[[def-progressively-measurable-and-predictable-process]]. Its **energy
process** is
$$A_t(\omega):=\int_0^tH_s(\omega)^2\,ds,\qquad t\ge0,$$
the integral of the nonnegative function $s\mapsto H_s(\omega)^2$; it may be
$+\infty$. The process $H$ is **locally square-integrable** when
$$A_t<\infty\ \text{almost surely for every finite }t\ge0 .$$
No uniform bound over $t$ and no bound on $E A_t$ is imposed; the localization
below converts the almost-sure finiteness into finite energy.

The following properties are part of the definition and are used in items 16
to 18.

1. **Measurability and adaptation of the energy.** $A$ is well defined and
   adapted: for each $t$ the map $(s,\omega)\mapsto H_s(\omega)^21_{[0,t]}(s)$
   is product measurable, so Tonelli
   [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] expresses
   $A_t=\int_0^\infty H_s^21_{[0,t]}(s)\,ds$ as an integral of measurable
   sections and, for $t'\le t$, the section computation over $[0,t]$ shows
   that $A_t$ is $\mathcal F_t$-measurable (the integral of a nonnegative
   measurable function is measurable in the parameter). The maps
   $t\mapsto A_t(\omega)$ are nondecreasing, and for almost every $\omega$ they
   are finite-valued and continuous on $[0,\infty)$: on $[0,n]$ the
   nonnegative integrand $H^2$ has finite integral $A_n(\omega)<\infty$ for
   almost every $\omega$, and dominated convergence applied on the finite
   interval gives $A_t\to A_{t_0}$ as $t\to t_0$ along sequences, hence
   continuity.

2. **Canonical localization times.** For $n\ge1$ put
   $$\sigma_n:=\inf\{t\ge0:A_t\ge n\},\qquad\inf\emptyset:=+\infty,\qquad \tau_n:=\sigma_n\wedge n .$$
   Then $\tau_n\le n$ everywhere, the sequence $(\tau_n)$ is nondecreasing and
   $\tau_n\uparrow\infty$ almost surely: on the full-measure event
   $\bigcap_{m\ge1}\{A_m<\infty\}$ one has $\sigma_n>m$ for all $n>A_m(\omega)$,
   hence $\tau_n>m$ eventually. Each $\tau_n$ is a stopping time for
   $(\mathcal F_t)$ [[def-continuous-time-stopping-time]]: for $t\ge n$ the
   event $\{\tau_n\le t\}$ is $\Omega\in\mathcal F_t$, and for $t<n$ the
   continuity and monotonicity of $A$ give the identity
   $$\{\tau_n\le t\}=\{\sigma_n\le t\}=\{A_t\ge n\}\in\mathcal F_t .$$

3. **The localization localizes the energy.** For every $n$ and every
   $t\ge0$,
   $$A_{t\wedge\tau_n}\le n\qquad\text{identically},$$
   because $A$ is nondecreasing, $t\wedge\tau_n\le\tau_n\le n$, and
   $A_{\tau_n}\le n$: if $\sigma_n<n$ then continuity gives
   $A_{\sigma_n}=n$ and $\tau_n=\sigma_n$, while if $\sigma_n\ge n$ then
   $\tau_n=n$ and $A_n\le n$ by the definition of $\sigma_n$ as an infimum.
   Consequently
   $$E\int_0^tH_s^21_{(0,\tau_n]}(s)\,ds=E\,A_{t\wedge\tau_n}\le n<\infty,$$
   so $H1_{(0,\tau_n]}$ is a predictable integrand of finite energy and its
   $L^2$ integral exists by
   [[def-ito-integral-for-square-integrable-predictable-processes]]. The same
   holds for $H1_{[0,\tau_n]}$, which differs from $H1_{(0,\tau_n]}$ only at
   $s=0$, a null set for $\mathrm dt\otimes P$.

4. **Predictability of the truncations.** The process $1_{[0,\tau_n]}$ is
   predictable for every stopping time $\tau_n$, by the generator computation
   recorded in [[def-progressively-measurable-and-predictable-process]], and
   the products $H1_{(0,\tau_n]}$ and $H1_{[0,\tau_n]}$ are therefore
   predictable, being products of predictable functions.

These conventions are the only sense in which the definition localizes: the
times $\tau_n$ are canonical functions of the energy process, so no auxiliary
sequence of stopping times is selected, and the constants $n$ are the natural
numbers. AC is declared because the ambient $L^2$ integral interface assumes
it; the definition of the energy process and of the times $\tau_n$ uses no
choice beyond that interface.
