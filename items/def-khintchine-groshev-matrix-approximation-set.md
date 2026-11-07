---
id: def-khintchine-groshev-matrix-approximation-set
kind: definition
title: "Khintchine–Groshev approximation set for systems of linear forms"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
verification:
  precheck: n/a
sources:
  references:
    - title: "Victor Beresnevich and Sanju Velani, Classical Metric Diophantine Approximation Revisited: the Khintchine–Groshev Theorem, §§1–2"
      url: "https://arxiv.org/pdf/0811.0809v3"
    - title: "Victor Beresnevich, Felipe Ramírez, and Sanju Velani, Metric Diophantine Approximation: Aspects of Recent Work, §4.6"
      url: "https://arxiv.org/pdf/1601.01948v1"
    - title: "Glyn Harman, Metric Number Theory, Chapter 4.6"
      url: "https://djvu.online/file/DZdHsCBaK3OrN"
---

## Definition

Let $n,m\ge1$ be integers, let $\mathbb N=\{1,2,3,\ldots\}$, and let $\psi:\mathbb N\to[0,\infty)$. For a vector $u=(u_1,\ldots,u_d)\in\mathbb R^d$, put $\|u\|_\infty:=\max_{1\le i\le d}|u_i|$. Regard $X=(x_{ij})$ as an $n\times m$ real matrix, let $q=(q_1,\ldots,q_n)\in\mathbb Z^n\setminus\{0\}$ be a row vector, and let $p=(p_1,\ldots,p_m)\in\mathbb Z^m$. The product $qX$ is the row in $\mathbb R^m$ whose $j$th coordinate is $\sum_{i=1}^n q_i x_{ij}$, and $\|q\|_\infty=\max_{1\le i\le n}|q_i|$.

The homogeneous Khintchine–Groshev approximation set is

$$W_{n,m}(\psi):=\left\{X\in[0,1]^{n\times m}:\ \|qX+p\|_\infty<\psi(\|q\|_\infty)\text{ for infinitely many }(q,p)\in(\mathbb Z^n\setminus\{0\})\times\mathbb Z^m\right\}.$$

For fixed $X$ and $q$, the displayed inequality permits only finitely many $p$, so “infinitely many $(q,p)$” is equivalently “for $q$ with unbounded $\|q\|_\infty$.” The plus sign is the convention for the integer offset; replacing $p$ by $-p$ gives the same set. Lebesgue measure on the unit cube is denoted by $|\cdot|$.

## Definition references

[Beresnevich and Velani, *Classical Metric Diophantine Approximation Revisited*, §§1–2](https://arxiv.org/pdf/0811.0809v3)

[Beresnevich, Ramírez, and Velani, *Metric Diophantine Approximation: Aspects of Recent Work*, §4.6](https://arxiv.org/pdf/1601.01948v1)

[Harman, *Metric Number Theory*, Chapter 4.6](https://djvu.online/file/DZdHsCBaK3OrN)
