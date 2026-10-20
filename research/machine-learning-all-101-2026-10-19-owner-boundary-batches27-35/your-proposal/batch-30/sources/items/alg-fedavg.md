---
id: alg-fedavg
kind: algorithm
title: Federated averaging (FedAvg)
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-federated-objective-and-client-sampling
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "H. Brendan McMahan et al., Communication-Efficient Learning of Deep Networks from Decentralized Data, §2 and Algorithm 1"
      url: https://proceedings.mlr.press/v54/mcmahan17a/mcmahan17a.pdf
    - title: "Sai Praneeth Karimireddy et al., SCAFFOLD: Stochastic Controlled Averaging for Federated Learning, Algorithm 2"
      url: https://cs.nyu.edu/~mohri/pub/scaffold.pdf
    - title: "Yuejie Chi and Zhize Li, Advances in Federated Optimization: Efficiency, Resiliency, and Privacy, tutorial slides 29–31"
      url: https://users.ece.cmu.edu/~yuejiec/papers/FedOpt_tutorial.pdf
    - title: "Kun Yuan, Optimization for Deep Learning, Lecture 14: Federated Learning, slides 7–16 and 28–30"
      url: https://github.com/kunyuan827/kunyuan827.github.io/raw/master/resources/Lec14_FL.pdf
---

## Definition

The inputs are positive integers $N,d,R,K,S$ with $1\le S\le N$, an initial
server model $x_0\in\mathbb R^d$, client objectives for the chosen mode and
their local oracle procedures $g_i$, positive step sizes $\eta_l,\eta_g$,
and one aggregation mode from the two modes below. In count-weighted
deployment mode the objectives are $F_i$ and the inputs also include positive
integer record counts $n_1,\ldots,n_N$, with
$n=\sum_i n_i$. A call to $g_i$ returns a gradient vector according to its
supplied deterministic or stochastic local-oracle rule; the client-sample
randomness in a round is independent of that round's fresh oracle randomness.
In uniform-client analysis mode the objectives are $f_i$.

For each round $r=1,\ldots,R$, independently draw a uniform fixed-size subset
$\mathcal S_r$ of $S$ clients from $\{1,\ldots,N\}$. For every selected client $i$, initialize
$y_{i,0}=x_{r-1}$ and for $k=1,\ldots,K$ call $g_i$ at $y_{i,k-1}$ and update
$$ y_{i,k}=y_{i,k-1}-\eta_l g_i(y_{i,k-1}),\qquad 1\le k\le K, $$
The client sends its model difference $y_{i,K}-x_{r-1}$ to the server. Use one
of the following aggregation branches in every round:

1. **Count-weighted deployment mode.** With positive client record counts
   $n_i$ and $n=\sum_i n_i$, set
$$ x_r=x_{r-1}+\eta_g\sum_{i\in\mathcal S_r}\frac{n_i}{n} (y_{i,K}-x_{r-1}). $$
   Equivalently, each unselected client contributes its unchanged model
   $x_{r-1}$ to the full count-weighted average.

2. **Uniform-client analysis mode.** Set
$$ x_r=x_{r-1}+\frac{\eta_g}{S} \sum_{i\in\mathcal S_r}(y_{i,K}-x_{r-1}). $$
   The equal-client convergence result on this page uses this mode and the
   objective $f=N^{-1}\sum_i f_i$.

After the selected clients finish the round, apply the chosen branch to obtain
$x_r$. Repeat through round $R$. Return the finite server trajectory
$x_0,\ldots,x_R$.

## Definition references

[[def-federated-objective-and-client-sampling|Federated objectives and uniform client sampling]]

[McMahan et al., PMLR 54 (2017), §2 and Algorithm 1](https://proceedings.mlr.press/v54/mcmahan17a/mcmahan17a.pdf)

[Karimireddy et al., SCAFFOLD, Algorithm 2](https://cs.nyu.edu/~mohri/pub/scaffold.pdf)

[Chi and Li, Advances in Federated Optimization, slides 29–31](https://users.ece.cmu.edu/~yuejiec/papers/FedOpt_tutorial.pdf)

[Yuan, Optimization for Deep Learning, Lecture 14: Federated Learning, slides 7–16 and 28–30](https://github.com/kunyuan827/kunyuan827.github.io/raw/master/resources/Lec14_FL.pdf)

## Remarks

The count-weighted deployment mode and uniform-client analysis mode are
different update rules when the $n_i$ are unequal. The strongly convex rate
proved on this page applies only to the uniform-client mode and the equal-client
objective. McMahan et al. give the algorithm and empirical experiments; those
experiments do not prove a general convergence rate or a differential-privacy
guarantee.

## Remarks references

[McMahan et al., PMLR 54 (2017), §§2–4](https://proceedings.mlr.press/v54/mcmahan17a/mcmahan17a.pdf)
