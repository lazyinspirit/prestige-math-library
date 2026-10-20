---
id: def-scaffold-analysis-trajectory-and-errors
kind: definition
title: SCAFFOLD trajectories, client drift, control lag and tracking error
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - alg-scaffold
  - def-federated-objective-and-client-sampling
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-euclidean-inner-product
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Sai Praneeth Karimireddy et al., SCAFFOLD, Appendix E.1–E.2, equations (23)–(27)"
      url: https://cs.nyu.edu/~mohri/pub/scaffold.pdf
---

## Definition

Let $f_i:\mathbb R^d\to\mathbb R$ be client objectives and
$f=N^{-1}\sum_{i=1}^Nf_i$. Run SCAFFOLD for $R$ rounds with local step count
$K$, client sample size $S$, server iterates $x_0,\ldots,x_R$, and client
controls $c_i^r$ after round $r$. In each round, extend the local trajectory
$y_{i,0}^r=x_{r-1},y_{i,1}^r,\ldots,y_{i,K}^r$ to every client using the
same local update rule, including hypothetical paths for clients not selected
in that round. Generate these counterfactual paths using fresh local oracle randomness independently of the fresh client sample, so a selected path agrees with its actual local execution. Local paths use only the round-start model and controls and their own successive oracle draws. Oracle moment conditions in the results below are conditional on the full prequery history, including any earlier revealed draws in the current round. All expectations below are over client samples and local
stochastic-gradient draws.

The **round-$r$ client drift at gradient-query points** is
$$ E_r=\frac1{KN}\sum_{i=1}^N\sum_{k=1}^K \mathbb E\|y_{i,k-1}^r-x_{r-1}\|_2^2. $$
For every client and local-step index, initialize a stored anchor
$\alpha_{i,k}^0=x_0$ and stored gradient $\gamma_{i,k}^0=\nabla f_i(x_0)$.
After round $r$, if client $i$ was selected, set
$\alpha_{i,k}^r=y_{i,k-1}^r$ and let $\gamma_{i,k}^r$ be the actual
stochastic gradient draw used at that local query. If client $i$ was not
selected, retain both previous stored values. Thus the anchors and stored
gradients record the most recent query and its realized oracle output for
each local-step index.

When $f$ is convex with minimizer $x^\star$, the **round-$r$ convex control
lag** is the average second moment of the mean full-gradient error at the
stored anchors:
$$ C_r=\frac1N\sum_{i=1}^N\mathbb E\left\| \frac1K\sum_{k=1}^K\nabla f_i(\alpha_{i,k}^r) -\nabla f_i(x^\star)\right\|_2^2. $$
For the nonconvex analysis, the **round-$r$ control-tracking error** is
$$ \Xi_r=\frac1{KN}\sum_{i=1}^N\sum_{k=1}^K \mathbb E\|\alpha_{i,k}^r-x_r\|_2^2. $$
Thus $\Xi_0=0$ and each stored anchor records the point at which that client's
corresponding control-gradient sample was evaluated.

The query-point indexing in $E_r$ is deliberate: the gradient-difference
terms in the variance and drift recurrences are evaluated at $y_{i,k-1}^r$.
It is not interchangeable with an average over the post-update endpoints
$y_{i,k}^r$.

## Definition references

[[alg-scaffold|SCAFFOLD local updates, control updates and server update]]

[[def-federated-objective-and-client-sampling|Equal-client objective and fixed-size client sampling]]

[Karimireddy et al., SCAFFOLD, Appendix E.1–E.2, equations (23)–(27)](https://cs.nyu.edu/~mohri/pub/scaffold.pdf)

The local $C_r$ retains the randomness of the stored anchors inside the squared norm. Source equation (24) instead prints the squared norm of an expected control; the two quantities are different. The local definition above is the interface used in every local control-lag, drift and progress argument.
