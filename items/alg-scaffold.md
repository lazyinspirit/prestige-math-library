---
id: alg-scaffold
kind: algorithm
title: SCAFFOLD with client and server control variates
status: published
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
    - title: "Sai Praneeth Karimireddy et al., SCAFFOLD: Stochastic Controlled Averaging for Federated Learning, §§4–5 and Algorithm 1"
      url: https://cs.nyu.edu/~mohri/pub/scaffold.pdf
    - title: "Eduard Gorbunov, Filip Hanzely, Peter Richtárik, Local SGD: Unified Theory and New Efficient Methods, §4.2"
      url: https://proceedings.mlr.press/v130/gorbunov21a/gorbunov21a.pdf
    - title: "Yuejie Chi and Zhize Li, Advances in Federated Optimization: Efficiency, Resiliency, and Privacy, slides 34–35"
      url: https://users.ece.cmu.edu/~yuejiec/papers/FedOpt_tutorial.pdf
    - title: "Kun Yuan, Optimization for Deep Learning, Lecture 14: Federated Learning, slides 24–30"
      url: https://github.com/kunyuan827/kunyuan827.github.io/raw/master/resources/Lec14_FL.pdf
---

## Definition

The inputs are positive integers $N,d,R,K,S$ with $1\le S\le N$, objective
functions $f_i:\mathbb R^d\to\mathbb R$, an initial
server model $x_0\in\mathbb R^d$, client controls $c_i^0\in\mathbb R^d$,
positive step sizes $\eta_l,\eta_g$, a local stochastic-gradient oracle
$g_i$, and a control-update option from $\{\mathrm I,\mathrm{II}\}$. Set
$c^0=N^{-1}\sum_i c_i^0$. The random client sample in each round is
independent of that round's fresh local-oracle randomness; no independence
among distinct clients' oracle draws is required here.

For each round $r=1,\ldots,R$, independently sample a uniform fixed-size
subset $\mathcal S_r$ of $S$ clients. At the start of this round, write
$x=x_{r-1}$, $c=c^{r-1}$, and $c_i=c_i^{r-1}$. For every selected client
$i$, initialize $y_{i,0}=x$ and, for $k=1,\ldots,K$, call $g_i$ at
$y_{i,k-1}$ and update
$$ y_{i,k}=y_{i,k-1}-\eta_l\bigl(g_i(y_{i,k-1})-c_i+c\bigr). $$
After its $K$ local steps, a selected client updates its control using either

- **Option I:** call $g_i$ at the round-start model $x_{r-1}$ and set
  $c_i^+=g_i(x)$; or
- **Option II:** set
  $c_i^+=c_i-c+(K\eta_l)^{-1}(x-y_{i,K})$.

The client sends $\Delta x_i=y_{i,K}-x$ and
$\Delta c_i=c_i^+-c_i$. Unselected clients retain their controls. The server
forms
$$ \Delta x=\frac1S\sum_{i\in\mathcal S_r}\Delta x_i,\qquad \Delta c=\frac1S\sum_{i\in\mathcal S_r}\Delta c_i $$
and updates
$$x_r=x+\eta_g\Delta x,\qquad c^r=c^{r-1}+\frac SN\Delta c.$$
The selected clients set $c_i^r=c_i^+$ and unselected clients set
$c_i^r=c_i^{r-1}$. Thus $c^r=N^{-1}\sum_i c_i^r$ whenever
$c^{r-1}=N^{-1}\sum_i c_i^{r-1}$ held before the round. The general
procedure permits zero initial controls; the convergence rates stated below
use the explicitly stated gradient-consistent initialization
$c_i^0=\nabla f_i(x_0)$. Repeat through round $R$ and return the model and
control trajectories $((x_r,c^r,(c_i^r)_{i=1}^N))_{r=0}^R$.

The following schematic records only the communication flow. Its vertices are
the server and the selected clients; the arrow labels are exactly the
quantities sent in each direction. The local updates and server equations above,
not the schematic, define the procedure.

```tikz
\begin{tikzpicture}[>=stealth]
\node[draw,rounded corners] (server) at (0,0) {Server: $(x,c)$};
\node[draw,rounded corners] (clients) at (5,0) {Selected clients $i\in\mathcal S$};
\draw[->] (server) to[bend left=18] node[above] {$(x,c)$} (clients);
\draw[->] (clients) to[bend left=18] node[below] {$(\Delta x_i,\Delta c_i)$} (server);
\end{tikzpicture}
```

## Definition references

[[def-federated-objective-and-client-sampling|Equal-client objective and fixed-size client sampling]]

[Karimireddy et al., SCAFFOLD, §§4–5 and Algorithm 1](https://cs.nyu.edu/~mohri/pub/scaffold.pdf)

[Gorbunov et al., Local SGD: Unified Theory and New Efficient Methods, §4.2](https://proceedings.mlr.press/v130/gorbunov21a/gorbunov21a.pdf)

[Chi and Li, Advances in Federated Optimization, slides 34–35](https://users.ece.cmu.edu/~yuejiec/papers/FedOpt_tutorial.pdf)

[Yuan, Optimization for Deep Learning, Lecture 14: Federated Learning, slides 24–30](https://github.com/kunyuan827/kunyuan827.github.io/raw/master/resources/Lec14_FL.pdf)

## Remarks

Theorem III's rates below do not assume bounded gradient dissimilarity. The
separate Hessian-dissimilarity improvement in Theorem IV is proved only for
quadratic client functions and is not asserted here for general smooth losses.
The procedure transmits model and control updates but supplies no
differential-privacy guarantee.

## Remarks references

[Karimireddy et al., SCAFFOLD, Theorems III–IV and §4](https://cs.nyu.edu/~mohri/pub/scaffold.pdf)
