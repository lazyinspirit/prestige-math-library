---
id: def-neural-tangent-kernel
kind: definition
title: The neural tangent kernel of a differentiable parameterized function
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-inner-product-space
  - def-total-derivative-in-euclidean-space
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Arthur Jacot, Franck Gabriel, and Clément Hongler, Neural Tangent Kernel: Convergence and Generalization in Neural Networks"
      url: "https://arxiv.org/pdf/1806.07572"
      locator: "§3 and §4.1, printed pp. 3–5; the parameter Jacobian Gram kernel"
    - title: "Lénaïc Chizat, Edouard Oyallon, and Francis Bach, On Lazy Training in Differentiable Programming"
      url: "https://arxiv.org/pdf/1812.07956"
      locator: "§1.1 and §2.1, printed pp. 2–4; the differential and its associated tangent operator"
---

## Definition

Let $P,q\ge1$, let $\Omega\subseteq\mathbb R^P$ be open, let $X$ be a set, and let $f:\Omega\times X\to\mathbb R^q$. Fix $\theta\in\Omega$ and suppose that for each $x\in X$ the map $\vartheta\mapsto f(\vartheta,x)$ is totally differentiable at $\theta$, meaning it has a linear first-order approximation with remainder $o(\|\vartheta-\theta\|_2)$. Write $D_\theta f(\theta,x)\in\mathbb R^{q\times P}$ for its derivative matrix in the standard Euclidean coordinates. The matrix-valued neural tangent kernel at $\theta$ is

$$K_\theta(x,x'):=D_\theta f(\theta,x)\,D_\theta f(\theta,x')^{T}\in\mathbb R^{q\times q}.$$

Equivalently, for $1\le a,b\le q$,
$$\bigl(K_\theta(x,x')\bigr)_{ab}=\sum_{p=1}^{P}\partial_{\theta_p}f_a(\theta,x)\,\partial_{\theta_p}f_b(\theta,x').$$
For a scalar-output model this is the scalar kernel $\sum_{p=1}^{P}\partial_{\theta_p}f(\theta,x)\partial_{\theta_p}f(\theta,x')$.

## Definition references

[Jacot, Gabriel, and Hongler, §§3–4.1, parameter Jacobian Gram kernel](https://arxiv.org/pdf/1806.07572)

[Chizat, Oyallon, and Bach, §§1.1 and 2.1, differential and tangent operator](https://arxiv.org/pdf/1812.07956)

[[def-total-derivative-in-euclidean-space|Total derivative as the linear first-order approximation]]

[[def-inner-product-space|The standard Euclidean inner product]]
