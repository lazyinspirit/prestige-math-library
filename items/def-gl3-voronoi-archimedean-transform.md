---
dependency_level: 0
id: def-gl3-voronoi-archimedean-transform
kind: definition
title: "Archimedean Transform in the GL3 Voronoi Formula"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
verification:
  precheck: n/a
sources:
  references:
    - title: "Stephen D. Miller and Wilfried Schmid, Automorphic Distributions, L-functions, and Voronoi Summation for GL(3), §5.4"
      url: "https://arxiv.org/pdf/math/0408100v3"
    - title: "Stephen D. Miller and Wilfried Schmid, Distributions and Analytic Continuation of Dirichlet Series, §6.1"
      url: "https://arxiv.org/pdf/math/0403030v1"
pipeline_run: number-theory-all-141-2026-10-25
---

## Definition

Let $\mathcal S(\mathbb R)$ be the space of smooth functions $f$ for which $\sup_{x\in\mathbb R}|x^m f^{(n)}(x)|<\infty$ for every pair of nonnegative integers $m,n$. Let $\mathcal S_{\mathrm{sis}}(\mathbb R)$ be the space of smooth functions on $\mathbb R\setminus\{0\}$ which decay rapidly, together with every derivative, as $|x|\to\infty$, and which, near $0$, are finite sums of terms
$$(\operatorname{sgn}x)^\eta|x|^\beta\sum_{k=0}^{N}(\log|x|)^k f_k(x),$$
where $\eta\in\{0,1\}$, $N\geq0$ is an integer, $\beta\in\mathbb C$, and each $f_k$ is smooth near $0$. For $\eta\in\{0,1\}$, $\operatorname{Re}\alpha>0$, and $f\in\mathcal S(\mathbb R)$, define
$$T_{\alpha,\eta}f(x)=\int_{\mathbb R}f(1/u)(\operatorname{sgn}u)^\eta|u|^{-\alpha-1}e(-xu)\,du,\qquad x\ne0,$$
where $e(t)=\exp(2\pi i t)$. The integral is absolutely convergent: rapid decay of $f(1/u)$ controls it near $u=0$, and $\operatorname{Re}\alpha>0$ controls it as $|u|\to\infty$.

## Definition references

[Miller and Schmid, *Automorphic Distributions, L-functions, and Voronoi Summation for GL(3)*, §5.4](https://arxiv.org/pdf/math/0408100v3)

[Miller and Schmid, *Distributions and Analytic Continuation of Dirichlet Series*, §6.1](https://arxiv.org/pdf/math/0403030v1)

