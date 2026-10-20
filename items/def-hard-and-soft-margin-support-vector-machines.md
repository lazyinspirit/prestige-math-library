---
id: def-hard-and-soft-margin-support-vector-machines
kind: definition
title: Hard- and soft-margin support-vector machines with an unpenalized bias
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-positive-semidefinite-kernels-and-reproducing-kernel-hilbert-spaces
  - def-hilbert-space
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: 'Hastie, Tibshirani, and Friedman, The Elements of Statistical Learning, 2nd ed., corrected 12th printing'
      url: 'https://gitlab.com/primishra/Books/-/raw/main/ESLII_print12.pdf'
      locator: 'Section 12.2.1, printed pp. 420–421; Sections 12.3.1–12.3.3, printed pp. 423–430.'
    - title: 'Rasmussen and Williams, Gaussian Processes for Machine Learning'
      url: 'https://gaussianprocess.org/gpml/chapters/RW6.pdf'
      locator: 'Section 6.4.1, printed pp. 141–144.'
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Definition

Let $X$ be a set, let $\mathcal H$ be a real Hilbert space, and let $\phi:X\to\mathcal H$ be a feature map. Define its kernel by $k(x,z):=\langle\phi(x),\phi(z)\rangle_{\mathcal H}$. For a finite labeled sample $(x_i,y_i)_{i=1}^n$ with $n\ge1$, $x_i\in X$, and $y_i\in\{-1,+1\}$, the **soft-margin support-vector machine** with cost $C>0$ is

$$\min_{w\in\mathcal H,\ b\in\mathbb R,\ \xi\in\mathbb R^n}\ \frac12\|w\|_{\mathcal H}^2+C\sum_{i=1}^n\xi_i$$

subject to

$$y_i\bigl(\langle w,\phi(x_i)\rangle_{\mathcal H}+b\bigr)\ge1-\xi_i,\qquad \xi_i\ge0\quad(1\le i\le n).$$

The bias $b$ is unpenalized. The associated real score is $s_{w,b}(x):=\langle w,\phi(x)\rangle_{\mathcal H}+b$. If a binary label is required, use the deterministic rule $+1$ when $s_{w,b}(x)\ge0$ and $-1$ otherwise. The score is not defined as a probability, and this optimization includes no probability-calibration map.

The **hard-margin** problem removes the slack variables and minimizes $\frac12\|w\|_{\mathcal H}^2$ subject to $y_i(\langle w,\phi(x_i)\rangle_{\mathcal H}+b)\ge1$ for every $i$. In this library, “margin-separable sample” means exactly that this hard-margin feasible set is nonempty; no hard-margin conclusion is asserted for a sample that fails this condition.

## Definition references

[Hastie, Tibshirani, and Friedman, *The Elements of Statistical Learning*, §§12.2.1 and 12.3.1–12.3.3](https://gitlab.com/primishra/Books/-/raw/main/ESLII_print12.pdf)

[Rasmussen and Williams, *Gaussian Processes for Machine Learning*, §6.4.1](https://gaussianprocess.org/gpml/chapters/RW6.pdf)

[[def-positive-semidefinite-kernels-and-reproducing-kernel-hilbert-spaces]]

[[def-hilbert-space]]
