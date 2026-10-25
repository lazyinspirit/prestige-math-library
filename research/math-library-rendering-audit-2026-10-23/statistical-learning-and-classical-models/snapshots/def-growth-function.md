---
id: def-growth-function
kind: definition
title: "Growth function of a binary hypothesis class"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-shattered-set-and-vc-dimension
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
    - title: "Mehryar Mohri, Afshin Rostamizadeh, and Ameet Talwalkar, Foundations of Machine Learning, 2nd ed., Definition 3.6 and equation (3.19)"
      url: "https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1"
    - title: "Peter L. Bartlett and Shahar Mendelson, Rademacher and Gaussian Complexities: Risk Bounds and Structural Results, Theorem 6"
      url: "https://www.jmlr.org/papers/volume3/bartlett02a/bartlett02a.pdf"
---

## Definition

Let $(\mathcal X,\Sigma)$ be a nonempty measurable space and let $H$ be a nonempty class of measurable binary functions on $\mathcal X$. For each integer $m\ge0$, the **growth function** of $H$ is

$$\Pi_H(m):=\sup_{\mathbf x\in\mathcal X^m}|\operatorname{tr}_H(\mathbf x)|.$$

The supremum is a maximum because each trace size is an integer between $1$ and $2^m$ and $\mathcal X^m$ is nonempty. In particular, $\Pi_H(0)=1$. A finite indexed tuple is shattered exactly when its trace has size $2^m$, so $\operatorname{VCdim}(H)=\sup\{m\in\mathbb N_0:\Pi_H(m)=2^m\}$.

## Definition references

[[def-shattered-set-and-vc-dimension]]: $\operatorname{tr}_H(\mathbf x)$ is the set of binary label vectors on the indexed tuple $\mathbf x$, and shattering means that this trace is all of $\{0,1\}^m$.

[Mohri et al., Definition 3.6 and equation (3.19)](https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1): the growth function counts distinct dichotomies on a sample.

[Bartlett and Mendelson, Theorem 6](https://www.jmlr.org/papers/volume3/bartlett02a/bartlett02a.pdf): restriction of a class to a fixed sample and its empirical VC dimension.
