---
dependency_level: 2
id: def-polynomial-sequence-on-a-filtered-group
kind: definition
title: Polynomial sequences on filtered groups
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-filtered-nilpotent-lie-group-and-nilmanifold
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Ben Green and Terence Tao, The quantitative behaviour of polynomial orbits on nilmanifolds
      url: https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p02-p.pdf
      locator: Definition 1.8, printed p. 470; Definition 6.1, printed pp. 497–498
    - title: Bob Hough, Math 639 Lecture 16, Equidistribution on nilmanifolds
      url: https://www.math.stonybrook.edu/~rdhough/mat639-spring17/lectures/lecture16.pdf
      locator: Polynomial sequence definition, pp. 19–20
---

## Definition

Let $G_\bullet$ be a filtration of degree $d$, and put $G_i=\{e\}$ for
$i>d$. For a map $g:\mathbb Z\to G$ and $h\in\mathbb Z$, define its right
difference by

$$\partial_hg(n)=g(n+h)g(n)^{-1}.$$

The map $g$ is a **polynomial sequence with coefficients in $G_\bullet$**,
written $g\in\operatorname{poly}(\mathbb Z,G_\bullet)$, if
$\partial_{h_i}\cdots\partial_{h_1}g(n)\in G_i$ for every $i\geq1$, all
$h_1,\ldots,h_i\in\mathbb Z$, and all $n\in\mathbb Z$. The degree is at most
$d$. For a polynomial $p:\mathbb Z\to\mathbb R/\mathbb Z$, put
$\Delta p(n)=p(n+1)-p(n)$ and
$\|x\|_{\mathbb R/\mathbb Z}=\min_{k\in\mathbb Z}|x-k|$ for $x\in\mathbb R$.
For $N\geq1$, define

$$\|p\|_{C^\infty[N]}=\max_{1\leq j\leq d}N^j\|\Delta^jp(0)\|_{\mathbb R/\mathbb Z},$$

with value $0$ when $d=0$.

## Definition references

[Green and Tao, Definitions 1.8 and 6.1](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p02-p.pdf)

[Hough, Math 639 Lecture 16](https://www.math.stonybrook.edu/~rdhough/mat639-spring17/lectures/lecture16.pdf)
