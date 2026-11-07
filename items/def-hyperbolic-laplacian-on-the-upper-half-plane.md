---
id: def-hyperbolic-laplacian-on-the-upper-half-plane
kind: definition
title: "Hyperbolic Laplacian on the Upper Half-Plane"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-modular-group-action-on-the-upper-half-plane
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Austin Lei, Automorphic Forms Learning Seminar Notes (Columbia University, Fall 2024)"
      url: "https://www.math.columbia.edu/~aghosh/ALNotes12.pdf"
      locator: "§3.1: the positive-sign hyperbolic Laplacian on the upper half-plane."
    - title: "A. Knightly and C. Li, Kuznetsov's Trace Formula and the Hecke Eigenvalues of Maass Forms, Memoirs of the AMS 224 (2012), arXiv:1202.0189v1"
      url: "https://arxiv.org/pdf/1202.0189v1"
      locator: "§4.1, printed pp. 26–27: the weight-zero Laplace operator convention."
---

## Definition

Let $\mathbb H=\{x+iy:x,y\in\mathbb R,\ y>0\}$ be the upper half-plane,
with hyperbolic metric $ds^2=y^{-2}(dx^2+dy^2)$ and area measure
$d\mu=y^{-2}\,dx\,dy$. On $C^\infty(\mathbb H)$ define the positive-sign
hyperbolic Laplacian by

$$\Delta_{\mathbb H}f(x+iy):=-y^2\left(\frac{\partial^2 f}{\partial x^2}+\frac{\partial^2 f}{\partial y^2}\right).$$

The eigenvalue convention is $\Delta_{\mathbb H}f=\lambda f$.

## Definition references

[[def-modular-group-action-on-the-upper-half-plane]]
