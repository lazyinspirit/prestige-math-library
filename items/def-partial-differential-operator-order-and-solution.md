---
id: def-partial-differential-operator-order-and-solution
kind: definition
title: "Scalar partial differential equations, order, and classical solutions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-09-05
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Victor Ivrii, Partial Differential Equations"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
---

## Definition

Let $\Omega\subseteq\mathbb R^n$ be open, let $m\ge1$, and let

$$F:\Omega\times\mathbb R^{N(m,n)}\to\mathbb R$$

be a function of the point $x$ and of the jet coordinates
$z_\alpha\;(|\alpha|\le m)$, where $N(m,n)$ is the number of multi-indices of
length at most $m$. Assume that $F$ depends nontrivially on at least one jet
coordinate. A scalar **partial differential equation of order at most $m$** is
an equation

$$F\bigl(x,(D^\alpha u(x))_{|\alpha|\le m}\bigr)=0$$

for an unknown scalar field $u:\Omega\to\mathbb R$.

Its **order** is the largest $|\alpha|$ for which $F$ depends nontrivially on
$z_\alpha$. A **classical solution** of an equation of order at most $m$ is a
function $u\in C^m(\Omega)$ satisfying the displayed equation at every
$x\in\Omega$.

If $\Sigma\subseteq\Omega$ is a codimension-one surface, prescribing values of
$u$ and possibly of some derivatives on $\Sigma$ is **Cauchy data**. If
$\partial\Omega$ is used instead, the prescribed values are **boundary data**.
