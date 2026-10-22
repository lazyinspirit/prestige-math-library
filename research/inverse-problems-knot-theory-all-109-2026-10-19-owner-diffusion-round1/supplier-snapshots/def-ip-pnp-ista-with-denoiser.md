---
id: def-ip-pnp-ista-with-denoiser
kind: definition
title: "Plug-and-play ISTA with a denoiser"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-ip-learned-reconstruction-estimator
  - def-euclidean-inner-product
justified_by: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: "The recursion is deterministic and uses no choice axiom. This is an ideal plug-in-map definition and does not assert that the map was fitted or trained."
sources:
  references:
    - title: "Xiaojian Xu, Yu Sun, Jiaming Liu, Brendt Wohlberg, and Ulugbek S. Kamilov, Provable Convergence of Plug-and-Play Priors with MMSE Denoisers, IEEE Signal Processing Letters 27 (2020), arXiv:2005.07685"
      url: "https://arxiv.org/pdf/2005.07685"
      locator: "§1, equations (6a)–(6b), PnP-ISTA update."
    - title: "Neal Parikh and Stephen Boyd, Proximal Algorithms, Foundations and Trends in Optimization 1(3) (2014)"
      url: "https://web.stanford.edu/~boyd/papers/pdf/prox_algs.pdf"
      locator: "§4.2, equation (4.6), proximal-gradient iteration before the proximal replacement."
verification:
  precheck: n/a
---

## Definition

Let $n\ge1$, $\sigma,\gamma>0$, let $g:\mathbb R^n\to\mathbb R$ be continuously differentiable, let $\widetilde D_\sigma:\mathbb R^n\to\mathbb R^n$ be a deterministic denoiser map, and choose $x_0\in\mathbb R^n$. Define
$$z_t=x_{t-1}-\gamma\nabla g(x_{t-1}),\qquad x_t=\widetilde D_\sigma(z_t)\quad(t=1,2,\ldots).$$
The output is the sequence $(x_t)_{t\ge0}$. This definition imposes no convexity, proximal representation, exact-MMSE identity, or convergence property on $\widetilde D_\sigma$.

The diagram depicts the data flow for one update; the displayed recurrence, not the diagram, defines the iteration.

~~~tikz
\begin{tikzpicture}[x=1.3cm,y=0.9cm,>=stealth]
  \node at (0,0) (old) {$x_{t-1}$};
  \node at (3,0) (grad) {$z_t=x_{t-1}-\gamma\nabla g(x_{t-1})$};
  \node at (7,0) (den) {$x_t=\widetilde D_\sigma(z_t)$};
  \draw[->] (old) -- (grad);
  \draw[->] (grad) -- (den);
  \draw[->,rounded corners] (den.south) -- (7,-1) -- (0,-1) -- (old.south);
\end{tikzpicture}
~~~

## Definition references

[[def-ip-learned-reconstruction-estimator]]
