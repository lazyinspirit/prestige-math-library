---
id: alg-exp3
kind: algorithm
title: Exp3 with importance-weighted loss feedback
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-bandit-importance-weighted-estimator
  - alg-hedge
  - def-real-exponential-function-and-e
  - cor-exponential-reciprocal-and-positivity
  - def-random-element-and-real-random-variable
justified_by:
  - thm-exp3-expected-regret
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Tor Lattimore and Csaba Szepesvári, Bandit Algorithms"
      url: "https://tor-lattimore.com/downloads/book/book.pdf"
      locator: "§11.3, Algorithm 9 and Eq. (11.7), PDF pp. 161–162 / printed pp. 152–153."
    - title: "Peter Auer, Nicolò Cesa-Bianchi, Yoav Freund, and Robert Schapire, The Nonstochastic Multiarmed Bandit Problem"
      url: "https://homepages.math.uic.edu/~lreyzin/papers/auer02.pdf"
      locator: "§3, Figure 1, PDF p. 6 / SIAM printed p. 53; its version mixes in uniform exploration."
verification:
  precheck: n/a
---

## Definition

Let $k>1$ and $n\ge1$ be integers, and let $\eta>0$. Use the finite-arm bandit protocol with rewards in $[0,1]$ and conditional sampling as specified in the bandit importance-weighted estimator definition. Initialize $\widehat S_{0,i}=0$ for each $i\in[k]$. For rounds $t=1,\ldots,n$, perform the following operations:

1. Set
   $$
   P_{t,i}=\frac{\exp(\eta\widehat S_{t-1,i})}{\sum_{j=1}^k\exp(\eta\widehat S_{t-1,j})},\qquad i\in[k].
   $$
2. Draw a measurable finite-valued action $A_t$ with conditional probabilities $\mathbb P(A_t=i\mid\mathcal F_{t-1})=P_{t,i}$, and observe only $X_t=x_{t,A_t}$.
3. Form the loss estimates $\widehat Y_{t,i}=\mathbf1\{A_t=i\}(1-X_t)/P_{t,i}$ and reward estimates $\widehat X_{t,i}=1-\widehat Y_{t,i}$ for every $i\in[k]$.
4. Update $\widehat S_{t,i}=\widehat S_{t-1,i}+\widehat X_{t,i}$ for every $i\in[k]$.

The output is $(P_t,A_t,X_t,\widehat X_t,\widehat Y_t)_{t=1}^n$ and $\widehat S_n$. These operations use exact real arithmetic. The procedure assumes a probability space carrying the stated measurable draws; it makes no probability-space construction claim. Normalizing the weights $\exp(\eta\widehat S_{t-1,i})$ is the exponential-weights step used by Hedge.

## Definition references

[[def-bandit-importance-weighted-estimator]]: the finite-arm reward protocol and loss/reward estimate definitions used at each round.

[[alg-hedge]]: initialize equal weights, normalize exponentials, draw an action, and update after feedback.

[[def-real-exponential-function-and-e]]: the real exponential used in the unnormalized weights.

[[cor-exponential-reciprocal-and-positivity]]: every exponential weight is positive.

[[def-random-element-and-real-random-variable]]: each sampled arm is a measurable finite-valued random element.
