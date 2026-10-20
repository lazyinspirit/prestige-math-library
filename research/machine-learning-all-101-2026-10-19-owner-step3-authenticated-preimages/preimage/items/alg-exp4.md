---
id: alg-exp4
kind: algorithm
title: Exp4 with unbiased estimated rewards
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-contextual-bandit-protocol
  - alg-hedge
  - def-bandit-importance-weighted-estimator
  - def-random-element-and-real-random-variable
  - def-real-exponential-function-and-e
  - cor-exponential-reciprocal-and-positivity
justified_by:
  - lem-exp4-updates-are-well-defined
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Tor Lattimore and Csaba Szepesvári, Bandit Algorithms"
      url: "https://tor-lattimore.com/downloads/book/book.pdf"
      locator: "Chapter 18 §18.3, Algorithm 11, PDF pp. 229–230 / printed pp. 228–229."
    - title: "Peter Auer, Nicolò Cesa-Bianchi, Yoav Freund, and Robert Schapire, The Nonstochastic Multiarmed Bandit Problem"
      url: "https://homepages.math.uic.edu/~lreyzin/papers/auer02.pdf"
      locator: "§7, Figure 5 and proof of Theorem 7.1, PDF pp. 18–19 / SIAM printed pp. 66–67; the uniform-exploration mixture is not used here."
verification:
  precheck: n/a
---

## Definition

Given integers $n\ge1$, $k>1$, $M>1$, a learning rate $\eta>0$, and an instance from the contextual bandit protocol with finite expert advice, initialize $Q_{1,m}=1/M$ for $m\in[M]$. For rounds $t=1,\ldots,n$, perform the following operations:

1. Receive the advice matrix $E(t)$, whose $m$th row is $E(t)_m\in\Delta_k$.

2. Form the action distribution
$$
P_{t,i}=\sum_{m=1}^M Q_{t,m}E(t)_{m,i},\qquad i\in[k].
$$

3. Draw a measurable action $A_t\in[k]$ with conditional probabilities $\mathbb P(A_t=i\mid\mathcal F_{t-1})=P_{t,i}$ and observe only $X_t=x_{t,A_t}$.

4. For each $i\in[k]$, form
$$
\widehat X_{t,i}=1-\frac{\mathbf 1\{A_t=i\}(1-X_t)}{P_{t,i}}.
$$
When $P_{t,i}=0$, the action $A_t=i$ is impossible; in this case the quotient term is defined to be zero on every possible outcome.

5. For each expert $m\in[M]$, form its estimated reward
$$
\widetilde X_{t,m}=\sum_{i=1}^kE(t)_{m,i}\widehat X_{t,i}
$$
and update the expert distribution by
$$
Q_{t+1,m}=\frac{Q_{t,m}\exp(\eta\widetilde X_{t,m})}{\sum_{r=1}^M Q_{t,r}\exp(\eta\widetilde X_{t,r})}.
$$

The output is $(Q_t,P_t,A_t,X_t,\widehat X_t,\widetilde X_t)_{t=1}^n$ and $Q_{n+1}$. All arithmetic is over exact real numbers, and the procedure assumes a probability space carrying the stated finite-valued measurable draws. This is the $\gamma=0$ Exp4 update; no regret guarantee for bounded-loss Hedge is part of the algorithm.

## Definition references

[[def-contextual-bandit-protocol|Contextual bandit protocol]]: the fixed oblivious reward/advice instance, action set, observed reward, and pre-action history used here.

[[alg-hedge|Normalized exponential weights]]: the full-information algorithm uses normalized exponential weights; this is notation only, not a regret result for the present unbounded estimates.

[[def-bandit-importance-weighted-estimator|Importance-weighted loss estimate]]: on coordinates with positive sampling probability, the quotient term is the standard estimate of loss $1-X_t$; the zero-probability convention is handled locally here.

[[def-random-element-and-real-random-variable|Measurable finite actions]]: each action draw is a measurable finite-valued random element.

[[def-real-exponential-function-and-e|Real exponential]]: the update uses the real exponential function.

[[cor-exponential-reciprocal-and-positivity|Exponential positivity]]: exponential weights are positive for every finite real input.

[[lem-exp4-updates-are-well-defined|Exp4 well-definedness]]: the separate result proves finite estimates, simplex mixtures, positive expert weights and finite-horizon completion, including zero-probability actions.
