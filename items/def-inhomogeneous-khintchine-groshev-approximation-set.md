---
id: def-inhomogeneous-khintchine-groshev-approximation-set
kind: definition
title: "Inhomogeneous Khintchine–Groshev approximation set"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-khintchine-groshev-matrix-approximation-set
verification:
  precheck: n/a
sources:
  references:
    - title: "Dani, Laurent, and Nogueira, Multi-dimensional metric approximation by primitive points, §1"
      url: "https://arxiv.org/pdf/1310.5535v2"
    - title: "Allen and Beresnevich, A mass transference principle for systems of linear forms and Duffin–Schaeffer-type theorems, §2.2"
      url: "https://arxiv.org/pdf/1703.10015v2"
---

## Definition

Let $n,m\ge1$ be integers, let $\psi:\mathbb N\to[0,\infty)$, and let $y=(y_1,\ldots,y_m)\in[0,1)^m$ be a fixed target. With $q$, $p$, the max norm, and the matrix product as in the homogeneous Khintchine–Groshev definition, set

$$W_{n,m}(\psi;y):=\left\{X\in[0,1]^{n\times m}:\ \|qX+p-y\|_\infty<\psi(\|q\|_\infty)\text{ for infinitely many }(q,p)\in(\mathbb Z^n\setminus\{0\})\times\mathbb Z^m\right\}.$$

The target $y$ is fixed throughout this definition; a theorem that asserts a property for almost every target is a separate quantifier over $y$.

## Definition references

[Dani, Laurent, and Nogueira, *Multi-dimensional metric approximation by primitive points*, §1](https://arxiv.org/pdf/1310.5535v2)

[Allen and Beresnevich, *A Mass Transference Principle for Systems of Linear Forms and Its Applications*, §2.2](https://arxiv.org/pdf/1703.10015v2)
