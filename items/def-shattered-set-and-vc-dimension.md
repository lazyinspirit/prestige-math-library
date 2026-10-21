---
id: def-shattered-set-and-vc-dimension
kind: definition
title: "Indexed shattering and VC dimension of a binary class"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-shattering-and-vc-dimension
justified_by: []
aliases: []
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
    - title: "Mehryar Mohri, Afshin Rostamizadeh, and Ameet Talwalkar, Foundations of Machine Learning, 2nd ed., Definition 3.10"
      url: "https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1"
    - title: "Peter L. Bartlett and Shahar Mendelson, Rademacher and Gaussian Complexities: Risk Bounds and Structural Results, Theorem 6"
      url: "https://www.jmlr.org/papers/volume3/bartlett02a/bartlett02a.pdf"
---

## Definition

Let $(\mathcal X,\Sigma)$ be a nonempty measurable space and let $H$ be a nonempty class of measurable functions $h:\mathcal X\to\{0,1\}$. For an integer $m\ge0$ and an indexed tuple $\mathbf x=(x_1,\ldots,x_m)\in\mathcal X^m$, define its trace by

$$\operatorname{tr}_H(\mathbf x):=\{(h(x_1),\ldots,h(x_m)):h\in H\}\subseteq\{0,1\}^m.$$

The tuple $\mathbf x$ is **shattered by $H$** if $\operatorname{tr}_H(\mathbf x)=\{0,1\}^m$. Its coordinates are indexed: repeated instance points remain distinct coordinates, although their labels must agree for every $h\in H$. For $m=0$, $\mathbf x=()$ and $\{0,1\}^0=\{()\}$, so the empty tuple is shattered. The **VC dimension** of $H$ is

$$\operatorname{VCdim}(H):=\sup\{m\in\mathbb N_0:\text{some }\mathbf x\in\mathcal X^m\text{ is shattered by }H\}\in\mathbb N_0\cup\{+\infty\}.$$

## Definition references

[[def-shattering-and-vc-dimension]]: its current definition treats a family $\mathcal F\subseteq\mathcal P([n])$; on an indexed sample, identify each $h$ with the subset $\{i\in[m]:h(x_i)=1\}$, keeping repeated sample points at separate indices.

[Mohri et al., Definition 3.10](https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1): VC dimension of a hypothesis class.

[Bartlett and Mendelson, Theorem 6](https://www.jmlr.org/papers/volume3/bartlett02a/bartlett02a.pdf): sample-restricted VC dimension.
