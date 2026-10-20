---
id: def-neural-operator
kind: definition
title: "Neural operator between function spaces"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-feedforward-neural-network
  - def-banach-space
  - def-continuous-real-functions-on-a-compact-metric-space
  - def-measure-space
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-integrable-real-and-complex-functions-and-their-integrals
  - def-integral-over-a-measurable-set
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Kovachki et al., Neural Operator: Learning Maps Between Function Spaces With Applications to PDEs"
      url: "https://arxiv.org/pdf/2108.08481"
      locator: "Definition 3, equations (13)–(17), §3.1"
    - title: "Lu, Jin, and Karniadakis, DeepONet: Learning nonlinear operators for identifying differential equations based on the universal approximation theorem of operators"
      url: "https://arxiv.org/pdf/1910.03193"
      locator: "§2, branch/trunk representation; independent fixed-sensor architecture"
---

## Definition

Let $D\subset\mathbb R^d$ and $D'\subset\mathbb R^{d'}$ be bounded domains. Let $A$ and $U$ be real Banach spaces of scalar functions whose elements have continuous representatives on $\bar D$ and $\bar D'$, respectively, and suppose the inclusions into $C(\bar D)$ and $C(\bar D')$ are continuous. A **neural operator** is a composition of a pointwise lifting map, finitely many integral-kernel layers, and a pointwise projection map. A layer with channel dimensions $q_t,q_{t+1}\ge1$ has the form
$$v_{t+1}(x)=\sigma_t\!\left(W_tv_t(x)+\int_D\kappa_t(x,y)v_t(y)\,dy+b_t(x)\right),\qquad x\in\bar D,$$
where $v_t:\bar D\to\mathbb R^{q_t}$ is continuous, $W_t\in\mathbb R^{q_{t+1}\times q_t}$, $\kappa_t:\bar D\times\bar D\to\mathbb R^{q_{t+1}\times q_t}$ and $b_t:\bar D\to\mathbb R^{q_{t+1}}$ are continuous, and the scalar activation $\sigma_t$ is applied coordinatewise. The lifting and projection maps are finite feedforward networks applied pointwise, with their input and output channel dimensions chosen to make the composition well-defined. All integrals are Lebesgue integrals, which exist because the integrands are continuous on a compact set.

For the compact-uniform universality theorem, the source uses a specified subclass. For a continuous activation $\sigma_2$, an **affine kernel-integral layer** is a map
$$S(f)(x)=\int_D\kappa(x,y)f(y)\,dy+b(x),$$
where the matrix-valued kernel $\kappa$ is a finite feedforward network with activation $\sigma_2$ applied to $(x,y)$ and $b$ is such a network applied to $x$. An $N$-layer operator in the theorem is a composition of one such input layer, $N-1$ intermediate affine kernel-integral layers each followed by the coordinatewise activation $\sigma_1$, and a final output integral with a matrix-valued kernel given by a feedforward network with activation $\sigma_3$ on $(x,y)$. The theorem's class has no learned pointwise lifting or projection map, and its intermediate local matrix terms are zero. It is a subfamily of the general architecture just defined.

The diagram records the composition order: a pointwise lift, integral-kernel layers on $D$, and a pointwise output projection. Each $\mathcal K_t$ box denotes the integral layer defined above; arrows denote function composition and do not assert a theorem.

```tikz
\begin{tikzpicture}[>=stealth,node distance=2.7cm]
  \node[draw,rounded corners,minimum width=2cm,align=center] (a) {$a\in A$};
  \node[draw,rounded corners,minimum width=2cm,align=center,right of=a] (p) {$P$ pointwise lift};
  \node[draw,rounded corners,minimum width=2cm,align=center,right of=p] (k) {$\sigma_t,\mathcal K_t$\ integral layers};
  \node[draw,rounded corners,minimum width=2cm,align=center,right of=k] (q) {$Q$ pointwise projection};
  \node[draw,rounded corners,minimum width=2cm,align=center,right of=q] (g) {$G(a)\in U$};
  \draw[->] (a) -- (p);
  \draw[->] (p) -- (k);
  \draw[->] (k) -- (q);
  \draw[->] (q) -- (g);
\end{tikzpicture}
```

This schematic is only a depiction of the composition defined above; it is not used in the discretization or universality proofs.

## Definition references
[[[def-feedforward-neural-network|feedforward neural network]]]

[[[def-banach-space|banach space]]]

[[[def-continuous-real-functions-on-a-compact-metric-space|continuous real functions on a compact metric space]]]

[[[def-measure-space|measure space]]]

[[[def-lebesgue-measure-and-the-lebesgue-sigma-algebra|lebesgue measure and the lebesgue sigma algebra]]]

[[[def-integrable-real-and-complex-functions-and-their-integrals|integrable real and complex functions and their integrals]]]

[[[def-integral-over-a-measurable-set|integral over a measurable set]]]

[Kovachki et al., Definition 3 and equations (13)–(17): integral-kernel neural-operator layers](https://arxiv.org/pdf/2108.08481)

[Lu et al., §2: fixed-sensor branch network and output-coordinate trunk network](https://arxiv.org/pdf/1910.03193)

