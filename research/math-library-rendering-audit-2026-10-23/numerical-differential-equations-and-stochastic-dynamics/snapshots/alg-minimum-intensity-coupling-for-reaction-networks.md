---
id: alg-minimum-intensity-coupling-for-reaction-networks
kind: algorithm
title: "Minimum-intensity coupling of reaction networks"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-dominating-thinning-for-time-varying-reaction-rates
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
  - thm-lebesgue-measure-is-a-complete-measure
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "David F. Anderson, Introduction to Stochastic Processes with Applications to Biology, Chapters 6–7"
      url: "https://people.math.wisc.edu/~dfanderson/605F11/Notes/StochBioOLD.pdf"
      locator: "Chapter 7, §7.3.1, common Poisson-clock coupling, PDF pp. 202–204."
    - title: "David F. Anderson and Thomas G. Kurtz, Continuous Time Markov Chain Models for Chemical Reaction Networks"
      url: "https://people.math.wisc.edu/~dfanderson/papers/SURVEY_AndKurtz.pdf"
      locator: "§2.4, Poisson superposition and channel-thinning construction, PDF pp. 10–12."
verification:
  precheck: pending
---

## Definition

**Inputs.** Two finite-state reaction systems $X$ and $Y$ with the same finite channel labels $j=1,\ldots,R$. Their state sets may differ, and channel $j$ has respective increments $\nu_j^X,\nu_j^Y$ and propensities $a_j^X(x),a_j^Y(y)$ as in [[def-reaction-network-propensity-system-and-generator]]. Supply an initial pair $(x_0,y_0)$, a horizon $T>0$, and an optional candidate budget $B\in\mathbb N_0\cup\{\infty\}$, defaulting to $\infty$, where $\mathbb N_0:=\{0,1,2,\ldots\}$.

For each channel set
$$M_j:=\max\left\{\max_{x\in E_X}a_j^X(x),\max_{y\in E_Y}a_j^Y(y)\right\},\qquad M:=\sum_{j=1}^R M_j.$$
These are finite because both state sets are finite. Supply mutually independent $E_n\sim\operatorname{Exp}(1)$ and $U_n\sim\operatorname{Unif}[0,1]$ for $n\ge1$. The countable input product uses Countable Choice and Dependent Choice; the exponential law is that of [[thm-exponential-and-weibull-survival-laws]]. For the uniform law, [[thm-lebesgue-measure-is-a-complete-measure]] makes the set function in [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]] a measure, and [[thm-lebesgue-measure-of-a-box-of-every-kind]] gives its restriction to $[0,1]$ mass one and interval probabilities equal to lengths.

**Procedure.** Set $t=0$, $(x,y)=(x_0,y_0)$, and $n=0$. If $M=0$, return the two constant paths through $T$ with status absorbed. Otherwise define fixed mark blocks $I_j=[b_{j-1},b_j)$, where $b_0=0$ and $b_j=M^{-1}\sum_{k=1}^jM_k$; omit empty blocks when $M_j=0$, and include the endpoint $1$ in the last nonempty block. While $t<T$:

1. If $n=B$, return the pair of path prefixes with status budget-exhausted.
2. Set $\tau=E_{n+1}/M$. If $t+\tau\ge T$, return both paths held through $T$ with status horizon.
3. Set $t\leftarrow t+\tau$. Find the unique nonempty block $I_j$ containing $U_{n+1}$ and set $v=(U_{n+1}-b_{j-1})/(M_j/M)$. Fire channel $j$ in $X$ if $v<a_j^X(x)/M_j$, and fire it in $Y$ if $v<a_j^Y(y)/M_j$. If both fire, record a shared event and update both states; if only one fires, record its residual event and update only that state; if neither fires, reject the candidate and leave both states fixed. Increment $n$ once for every candidate, including a rejected candidate. Endpoint marks have probability zero, so the last-block convention at $U_{n+1}=1$ does not affect the path law.

The candidate mark block for channel $j$ has length $M_j/M$. Within it the two acceptance intervals start at the same endpoint and have respective lengths $a_j^X(x)/M$ and $a_j^Y(y)/M$. Thus their overlap has candidate intensity $\min(a_j^X(x),a_j^Y(y))$, and the two residual portions have intensities $(a_j^X(x)-a_j^Y(y))_+$ and $(a_j^Y(y)-a_j^X(x))_+$. The budget counts candidates, so an exhausted budget returns only an incomplete prefix. No logarithmic event-selection cost is claimed.
