---
id: alg-next-reaction-random-time-change-method
kind: algorithm
title: "Next-reaction method by internal Poisson clocks"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-countable-choice
  - def-dependent-choice
  - def-independent-random-elements
  - def-law-or-distribution-of-a-random-element
  - def-random-element-and-real-random-variable
  - def-reaction-network-propensity-system-and-generator
  - thm-countable-product-of-probability-spaces
  - thm-exponential-and-weibull-survival-laws
justified_by:
  - thm-finite-state-gillespie-and-next-reaction-exactness
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "David F. Anderson, Introduction to Stochastic Processes with Applications to Biology, Chapters 6–7"
      url: "https://people.math.wisc.edu/~dfanderson/605F11/Notes/StochBioOLD.pdf"
      locator: "Chapter 7, §7.2.2, Algorithm 3 and equation (7.5), PDF pp. 195–197."
    - title: "David F. Anderson and Thomas G. Kurtz, Continuous Time Markov Chain Models for Chemical Reaction Networks"
      url: "https://people.math.wisc.edu/~dfanderson/papers/SURVEY_AndKurtz.pdf"
      locator: "§§2.2 and 2.6, random time change equation (2.6) and its next-reaction interpretation, PDF pp. 7 and 14."
verification:
  precheck: pending
---

## Definition

**Inputs.** A finite state set $E\subseteq\mathbb Z^d$, a finite-channel time-homogeneous system from [[def-reaction-network-propensity-system-and-generator]], initial state $x_0\in E$, horizon $T>0$, and optional reaction-event budget $B\in\mathbb N_0\cup\{\infty\}$, defaulting to $\infty$, where $\mathbb N_0:=\{0,1,2,\ldots\}$. Supply independent unit exponential increments $E_{j,k}\sim\operatorname{Exp}(1)$ for $1\le j\le R$ and $k\ge1$. The countable product construction uses Countable Choice and Dependent Choice by [[thm-countable-product-of-probability-spaces]]; the exponential law assumes Countable Choice by [[thm-exponential-and-weibull-survival-laws]].

**Initialization.** Set $t=0$, $x=x_0$, $n=0$, internal times $A_j=0$, threshold indices $m_j=1$, and next thresholds $S_j=E_{j,1}$ for each channel.

**Procedure.** At each state $x$:

1. Compute $a_j(x)$ for every channel. If $\lambda(x)=0$, return the constant path through $T$ with status absorbed.
2. If $n=B$, return the path prefix with status budget-exhausted. For each $j$, set $\Delta_j=(S_j-A_j)/a_j(x)$ when $a_j(x)>0$ and $\Delta_j=+\infty$ when $a_j(x)=0$.
3. Let $\Delta=\min_j\Delta_j$. If $t+\Delta>T$, return the path held at $x$ through $T$ with status horizon.
4. Let $J$ be the least minimizing channel (ties have probability zero). For every channel set $A_j\leftarrow A_j+a_j(x)\Delta$. Set $t\leftarrow t+\Delta$, $x\leftarrow x+\nu_J$, append the marked event, then set $m_J\leftarrow m_J+1$ and $S_J\leftarrow S_J+E_{J,m_J}$; finally set $n\leftarrow n+1$.

On the returned time interval (through $T$ unless the budget is exhausted), the internal time is $A_j(t)=\int_0^t a_j(X_{s-})\,ds$, and almost surely the random-time-change representation is
$$X_t=X_0+\sum_{j=1}^R\nu_jY_j(A_j(t)),$$
where $S_{j,k}=\sum_{q=1}^k E_{j,q}$ and $Y_j(u)=\#\{k:S_{j,k}\le u\}$. An event at exactly $T$ is recorded before returning. If the loop reaches $t=T$, return the path through $T$ with status horizon. With unlimited budget, [[thm-finite-state-gillespie-and-next-reaction-exactness]] proves the Poisson threshold-clock laws and equality with the direct method's reaction path law. The implementation scans all $R$ channels at each event; no logarithmic update-tree cost is claimed.
