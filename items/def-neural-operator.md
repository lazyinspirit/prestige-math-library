---
id: def-neural-operator
kind: definition
title: "Neural operator between function spaces"
status: published
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

Let $D\subset\mathbb R^d$ and $D'\subset\mathbb R^{d'}$ be bounded domains. Let $A$ and $U$ be real Banach spaces of scalar functions whose elements have continuous representatives on $\bar D$ and $\bar D'$, respectively, and suppose the inclusions into $C(\bar D)$ and $C(\bar D')$ are continuous when these continuous-function spaces carry the supremum norm. In the continuous-function setting, a **neural operator** is a composition of a pointwise lifting map, finitely many integral-kernel layers, and a pointwise projection map. A layer with channel dimensions $q_t,q_{t+1}\ge1$ has the form
$$v_{t+1}(x)=\sigma_t\!\left(W_tv_t(x)+\int_D\kappa_t(x,y)v_t(y)\,dy+b_t(x)\right),\qquad x\in\bar D,$$
where $v_t:\bar D\to\mathbb R^{q_t}$ is continuous, $W_t\in\mathbb R^{q_{t+1}\times q_t}$, $\kappa_t:\bar D\times\bar D\to\mathbb R^{q_{t+1}\times q_t}$ and $b_t:\bar D\to\mathbb R^{q_{t+1}}$ are continuous, and the scalar activation $\sigma_t$ is applied coordinatewise. The lifting and projection maps are finite feedforward networks applied pointwise, with their input and output channel dimensions chosen to make the composition well-defined. All integrals are Lebesgue integrals, which exist because the integrands are continuous on a compact set. For distinct input and output domains the final integral layer has kernel on $\bar D'\times\bar D$, integrates over $D$, and has zero local matrix term; subsequent projection acts on $\bar D'$. For any stronger specified output space, the selected composition is required actually to map into that space.

The **integral universality subclass** is defined separately on $L^1(D;\mathbb R^{q_0})$, including almost-everywhere equivalence classes. Fix continuous activations $\sigma_1,\sigma_2,\sigma_3$ with $\sigma_1$ of at most linear growth, $N\ge2$, and channel dimensions $q_1,\ldots,q_N\ge1$. For $0\le t\le N-1$ let
$$S_t(v)(x)=\int_D\kappa_t(x,y)v(y)\,dy+b_t(x),\qquad x\in\bar D,$$
where $\kappa_t:\mathbb R^d\times\mathbb R^d\to\mathbb R^{q_{t+1}\times q_t}$ and $b_t:\mathbb R^d\to\mathbb R^{q_{t+1}}$ are finite MLPs with hidden activation $\sigma_2$ and affine output. Set $v_1=S_0(a)$, $v_2=S_1(v_1)$, and $v_{t+1}=S_t(\sigma_1(v_t))$ for $2\le t\le N-1$. An element of $\mathrm{NO}_N$ is
$$G(a)(x)=\int_D\kappa_N(x,y)v_N(y)\,dy,\qquad x\in\bar D',$$
where $\kappa_N:\mathbb R^{d'}\times\mathbb R^d\to\mathbb R^{q_{\mathrm{out}}\times q_N}$ is a finite MLP with activation $\sigma_3$ and affine output. There are exactly $N-2$ intermediate $\sigma_1$ activations. Scalar input and output mean $q_0=q_{\mathrm{out}}=1$. The final integral is over $D$, with output variable in $D'$. This class has identity lifting and projection and zero local matrix terms. It specializes the architectural scheme with its first layer extended to $L^1$ classes; it does not require continuous input representatives.

The first integral is invariant under null changes and obeys $\|S_0(a)\|_\infty\le\|\kappa_0\|_\infty\|a\|_1+\|b_0\|_\infty$. Uniform continuity of its kernel on the compact product implies continuity of its output by the same $L^1$ estimate. All later fields are continuous and bounded, so their integrals and activations are defined; the output is continuous on $\bar D'$. Viewing it in a stronger Banach space $U$ requires the selected kernels actually to produce outputs in $U$. The universality theorem constructs such kernels; arbitrary continuous kernels alone do not guarantee this condition.

For equal input and output domains, the diagram records the composition order: a pointwise lift, integral-kernel layers on $D$, and a pointwise output projection. Each $\mathcal K_t$ box denotes the integral layer defined above; arrows denote function composition and do not assert a theorem.

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
[[def-feedforward-neural-network|feedforward neural network]]

[[def-banach-space|banach space]]

[[def-continuous-real-functions-on-a-compact-metric-space|continuous real functions on a compact metric space]]

[[def-measure-space|measure space]]

[[def-lebesgue-measure-and-the-lebesgue-sigma-algebra|lebesgue measure and the lebesgue sigma algebra]]

[[def-integrable-real-and-complex-functions-and-their-integrals|integrable real and complex functions and their integrals]]

[[def-integral-over-a-measurable-set|integral over a measurable set]]

[Kovachki et al., Definition 3 and equations (13)–(17): integral-kernel neural-operator layers](https://arxiv.org/pdf/2108.08481)

[Lu et al., §2: fixed-sensor branch network and output-coordinate trunk network](https://arxiv.org/pdf/1910.03193)

