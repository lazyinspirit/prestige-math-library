---
id: def-finite-kullback-leibler-divergence
kind: definition
title: Finite Kullback–Leibler divergence
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-finite-probability-vector
  - def-finite-f-divergence
  - def-natural-logarithm
  - lem-finite-kl-generator-is-admissible
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 7, §7.1"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-2022.pdf"
    - title: "Tim van Erven and Peter Harremoës, Rényi Divergence and Kullback-Leibler Divergence, §I-A and Theorem 5"
      url: "https://arxiv.org/pdf/1206.2459"
---

## Definition

For probability vectors $P=(p_x)$ and $Q=(q_x)$ on the same finite
nonempty alphabet, their **Kullback–Leibler divergence** (or **relative
entropy**) in the stated direction from $P$ to $Q$ is
$$D(P\|Q):=\sum_{x:p_x>0}p_x\log\frac{p_x}{q_x}.$$
The logarithm is natural. If $p_x>0$ and $q_x=0$ for at least one $x$, set
$D(P\|Q)=+\infty$. If $p_x=0$, its contribution is zero, including when
$q_x=0$; equivalently, $0\log(0/q_x)=0$. When $P\ll Q$, all ratios in the
sum are positive and finite.

The generator $f(t)=t\log t$ is admissible for
[[def-finite-f-divergence]] by
[[lem-finite-kl-generator-is-admissible]]. Its boundary values
$f(0)=0$ and $f_\infty=+\infty$ make that f-divergence exactly the displayed
KL formula, including the singular-support case.
