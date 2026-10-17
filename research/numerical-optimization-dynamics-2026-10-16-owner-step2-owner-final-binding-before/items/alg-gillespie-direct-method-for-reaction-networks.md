---
id: alg-gillespie-direct-method-for-reaction-networks
kind: algorithm
title: "Gillespie direct method with horizon and budget statuses"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-countable-choice
  - def-dependent-choice
  - def-independent-random-elements
  - def-law-or-distribution-of-a-random-element
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-random-element-and-real-random-variable
  - def-reaction-network-propensity-system-and-generator
  - thm-countable-product-of-probability-spaces
  - thm-exponential-and-weibull-survival-laws
  - thm-lebesgue-measure-of-a-box-of-every-kind
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Daniel T. Gillespie, Exact Stochastic Simulation of Coupled Chemical Reactions"
      url: "https://www.ma.imperial.ac.uk/~nsjones/gillespie_1977.pdf"
      locator: "§III.C, especially equations (18)–(21) and the stated initialization/loop, journal pp. 2344–2346 / PDF pp. 5–7."
    - title: "David F. Anderson, Introduction to Stochastic Processes with Applications to Biology, Chapters 6–7"
      url: "https://people.math.wisc.edu/~dfanderson/605F11/Notes/StochBioOLD.pdf"
      locator: "Chapter 7, §7.2.1, Algorithm 2, PDF pp. 195–196."
verification:
  precheck: pending
---

## Definition

**Inputs.** A finite state set $E\subseteq\mathbb Z^d$, a finite-channel reaction propensity system from [[def-reaction-network-propensity-system-and-generator]], an initial state $x_0\in E$, a horizon $T>0$, and an optional event budget $B\in\mathbb N_0\cup\{\infty\}$, defaulting to $\infty$, where $\mathbb N_0:=\{0,1,2,\ldots\}$. The random source is a sequence $(E_n,U_n)_{n\ge1}$ with $E_n\sim\operatorname{Exp}(1)$ and $U_n$ uniform on $[0,1]$, all coordinates mutually independent. The countable product construction for these input laws uses Countable Choice and Dependent Choice by [[thm-countable-product-of-probability-spaces]]; the exponential law uses Countable Choice by [[thm-exponential-and-weibull-survival-laws]], and the uniform law is normalized Lebesgue measure on the unit interval by [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]] and [[thm-lebesgue-measure-of-a-box-of-every-kind]].

**Procedure.** Set $t=0$, $x=x_0$, $n=0$, and record the initial state. While $t<T$:

1. Compute $\lambda(x)=\sum_{j=1}^R a_j(x)$. If $\lambda(x)=0$, keep the state equal to $x$ through $T$ and return status absorbed.
2. If $n=B$, return the path prefix through $(t,x)$ with status budget-exhausted; this status does not assert that the horizon was reached.
3. Set $\tau=E_{n+1}/\lambda(x)$. If $t+\tau\ge T$, keep the state equal to $x$ through $T$ and return status horizon.
4. Set $J$ to the least index with $U_{n+1}<\lambda(x)^{-1}\sum_{j=1}^J a_j(x)$. If the null event $U_{n+1}=1$ occurs, use the largest index with $a_j(x)>0$. This rule never selects a zero-rate channel.
5. Set $t\leftarrow t+\tau$, $x\leftarrow x+\nu_J$, append the marked event $(t,J,x)$, and set $n\leftarrow n+1$.

If the loop reaches $t=T$, return the path through $T$ with status horizon. Each event uses a linear scan of the $R$ propensities and a linear cumulative channel search; no update-tree acceleration is part of this procedure. If $B<\infty$ and the budget expires before $T$, the returned prefix is incomplete.

The procedure assumes an ideal independent random source with the displayed laws. It makes no claim that a finite-state pseudorandom generator supplies independent exact exponential or uniform variables.
