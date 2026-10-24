---
id: alg-dyadic-brownian-bridge-increment-tree
kind: algorithm
title: Dyadic Brownian bridge increment tree
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-d-dimensional-brownian-motion
  - def-multivariate-normal-law
  - def-axiom-of-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Mike Giles, Monte Carlo Methods, Module 4: Monte Carlo path simulation, Brownian bridge, pp. 27–30"
      url: "https://people.maths.ox.ac.uk/~gilesm/mc/module_4/module_4_1.pdf"
---

## Definition

Assume the Axiom of Choice as in the finite-dimensional Gaussian and Brownian
interfaces. Let $m\ge1$ be a finite integer. A node represents an interval
$[u,u+h]$, where $h>0$, and has an already sampled parent increment
$\Delta W\in\mathbb R^m$. Draw a fresh
vector $Z\sim N_m(0,(h/4)I_m)$ independently of the parent and of every
innovation used at another node. Store the two child increments
$$\Delta W_L=\tfrac12\Delta W+Z,\qquad \Delta W_R=\tfrac12\Delta W-Z.$$

For a finite ordered list of $q\in\mathbb N_0$ split requests, each naming an
existing leaf, apply the rule once to each requested leaf and retain every
parent. Process a rejected trial's left child before its right child; if a
child is later refined, draw a new independent innovation for it. Each request
replaces one leaf by two children, so the result is a finite rooted tree with
the sampled increments, interval lengths, and left-to-right order. Never
discard a sampled parent and redraw a replacement for the same interval. The
procedure assigns increments at dyadic tree nodes; it does not by itself
define values at nondyadic times or prove that the node-selection rule is
predictable. In an adaptive run, a finite work budget supplies a finite list
of requests.

Conditional on a fixed parent, the child sum is fixed and their conditional
cross-covariance is $-(h/4)I_m$, so they are not conditionally independent.
The exact unconditional Brownian increment laws at fixed dyadic depth are
proved separately on the A page; this procedure makes no law claim for a
data-dependent set of requested leaves.

## Remarks

One requested split is pictured below. Arrows record parent-to-child
refinement, not independent draws: the same innovation $Z$ enters with
opposite signs. The parent remains stored, and either child can later be
split using a fresh innovation if named by the finite ordered request list.

```tikz
\begin{tikzpicture}
\node (P) at (0,0) {$[u,u+h],\quad \Delta W\in\mathbb R^m$};
\node (L) at (-3,-1.7) {$[u,u+h/2]$};
\node (R) at (3,-1.7) {$[u+h/2,u+h]$};
\node at (-3,-2.3) {$\Delta W_L=\frac{1}{2}\Delta W+Z$};
\node at (3,-2.3) {$\Delta W_R=\frac{1}{2}\Delta W-Z$};
\draw[->] (P) -- (L);
\draw[->] (P) -- (R);
\node at (0,-3.2) {$Z\sim N_m(0,(h/4)I_m)$};
\node at (0,-3.9) {$\Delta W_L+\Delta W_R=\Delta W$};
\end{tikzpicture}
```

For fixed $\Delta W$, the two children have conditional cross-covariance
$-(h/4)I_m$: their centered fluctuations are $Z$ and $-Z$. This picture
illustrates the defined split only; it does not assert unconditional laws
for data-dependent leaves. The algorithm and its stated qualifications are
independent of the illustration.
