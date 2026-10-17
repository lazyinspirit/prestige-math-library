---
id: alg-dominating-thinning-for-time-varying-reaction-rates
kind: algorithm
title: "Dominating thinning for bounded time-varying propensities"
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
    - title: "David F. Anderson, Introduction to Stochastic Processes with Applications to Biology, Chapters 6–7"
      url: "https://people.math.wisc.edu/~dfanderson/605F11/Notes/StochBioOLD.pdf"
      locator: "Chapter 7, §7.2.2 time-dependent intensity discussion and §7.1.1 random time change, PDF pp. 185–186 and 196–197."
    - title: "David F. Anderson and Thomas G. Kurtz, Continuous Time Markov Chain Models for Chemical Reaction Networks"
      url: "https://people.math.wisc.edu/~dfanderson/papers/SURVEY_AndKurtz.pdf"
      locator: "§2.4, thinning construction and reaction-channel mark intervals, PDF pp. 10–12."
verification:
  precheck: pending
---

## Definition

**Inputs.** A finite or countable state set $E\subseteq\mathbb Z^d$, finitely many time-dependent propensities $a_j(t,x)$ from [[def-reaction-network-propensity-system-and-generator]], a finite horizon $T>0$, initial state $x_0$, optional candidate budget $B\in\mathbb N_0\cup\{\infty\}$ defaulting to $\infty$ (where $\mathbb N_0:=\{0,1,2,\ldots\}$), and a deterministic envelope $\Lambda<\infty$ with an admissibility certificate establishing
$$0\le\lambda(t,x):=\sum_{j=1}^R a_j(t,x)\le\Lambda\qquad(0\le t\le T, x\in E).$$
The global inequality is a precondition; the procedure does not verify the certificate exhaustively.
The random source supplies independent $E_n\sim\operatorname{Exp}(1)$ and $U_n\sim\operatorname{Unif}[0,1]$ sequences. Their countable product model uses Countable Choice and Dependent Choice; the unit exponential law and normalized unit-interval Lebesgue law are as in [[thm-exponential-and-weibull-survival-laws]], [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]], and [[thm-lebesgue-measure-of-a-box-of-every-kind]].

**Procedure.** Set $t=0$, $x=x_0$, and candidate counter $n=0$. If $\Lambda=0$, return the constant path through $T$ with status absorbed. Otherwise, while $t<T$:

1. If $n=B$, return the path prefix with status budget-exhausted.
2. Set $\tau=E_{n+1}/\Lambda$. If $t+\tau\ge T$, return the state held through $T$ with status horizon.
3. Set $t\leftarrow t+\tau$ and evaluate $\lambda(t,x)$. If $\lambda(t,x)>\Lambda$ at this candidate, stop with status invalid-envelope; this pointwise runtime check detects only violations at candidate times and states that are actually evaluated. The algorithm does not continue by clipping the rate.
4. If $U_{n+1}\ge\lambda(t,x)/\Lambda$, reject this candidate and leave $x$ unchanged; set $n\leftarrow n+1$ and continue. Otherwise choose the first $J$ such that
$$U_{n+1}\Lambda<\sum_{j=1}^J a_j(t,x),$$
set $x\leftarrow x+\nu_J$, append the marked event $(t,J,x)$, set $n\leftarrow n+1$, and continue.

A time-dependent propensity without a certified finite envelope is outside this algorithm; integrated-hazard inversion is a separate method and is not used here. If the loop reaches $t=T$, return status horizon. If the global precondition is false, the procedure need not detect that failure: status invalid-envelope is returned only when the pointwise check in step 3 encounters a violation. No path law is claimed under a false global envelope.
