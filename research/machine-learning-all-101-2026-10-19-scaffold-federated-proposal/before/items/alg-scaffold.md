---
id: alg-scaffold
kind: algorithm
title: SCAFFOLD with client and server control variates
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

For equal-client objectives $f_1,\ldots,f_N:\mathbb R^d\to\mathbb R$, the
server stores a model $x$ and control vector $c$, and client $i$ stores a
control vector $c_i$. The initial controls satisfy
$c=N^{-1}\sum_{i=1}^N c_i$. In each round, sample a uniform fixed-size subset
$\mathcal S$ of $S$ clients. Each selected client initializes $y_{i,0}=x$ and
for $k=1,\ldots,K$ computes a local stochastic gradient $g_i(y_{i,k-1})$ and
updates
$$ y_{i,k}=y_{i,k-1}-\eta_l\bigl(g_i(y_{i,k-1})-c_i+c\bigr). $$
After its $K$ local steps, a selected client updates its control using either

- **Option I:** $c_i^+=g_i(x)$, evaluated at the server model from the start
  of the round; or
- **Option II:** $c_i^+=c_i-c+(K\eta_l)^{-1}(x-y_{i,K})$.

The client sends $\Delta x_i=y_{i,K}-x$ and
$\Delta c_i=c_i^+-c_i$. Unselected clients retain their controls. The server
forms
$$ \Delta x=\frac1S\sum_{i\in\mathcal S}\Delta x_i,\qquad \Delta c=\frac1S\sum_{i\in\mathcal S}\Delta c_i $$
and updates
$$ x^+=x+\eta_g\Delta x,\qquad c^+=c+\frac SN\Delta c. $$
The selected clients set $c_i\leftarrow c_i^+$. Thus
$c^+=N^{-1}\sum_i c_i^+$ whenever $c=N^{-1}\sum_i c_i$ held before the
round. The general procedure permits zero initial controls; the convergence
rates stated below use the explicitly stated gradient-consistent initialization
$c_i^0=\nabla f_i(x_0)$ and $c^0=N^{-1}\sum_i c_i^0$.

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
