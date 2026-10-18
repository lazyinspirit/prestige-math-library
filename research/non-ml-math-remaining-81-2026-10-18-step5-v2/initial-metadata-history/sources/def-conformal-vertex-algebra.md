---
id: def-conformal-vertex-algebra
kind: definition
title: Conformal vertex algebra of CFT type
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-vertex-algebra-state-field
  - def-virasoro-algebra
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Christophe Nozaradan, Introduction to Vertex Algebras, §§4.2–4.3
      url: https://arxiv.org/pdf/0809.1380
    - title: Yi-Zhi Huang, James Lepowsky, and Lin Zhang, Logarithmic Tensor Category Theory for Generalized Modules for a Conformal Vertex Algebra, I, §2
      url: https://arxiv.org/pdf/1012.4193
    - title: Chongying Dong and Cuipo Jiang, Rationality of Vertex Operator Algebras, §2
      url: https://arxiv.org/pdf/math/0607679
---

## Definition

A **conformal vertex algebra of CFT type** is a complex vertex algebra $V$ in the sense of [[def-vertex-algebra-state-field]], with a specified vector $\omega\in V$ and scalar $c\in\mathbb C$, such that, writing
$$
Y(\omega,z)=\sum_{n\in\mathbb Z}L(n)z^{-n-2},
$$
the operators $L(n)$ and scalar central action $c$ satisfy the Virasoro relations of [[def-virasoro-algebra]], and $L(-1)=T$. In addition, $L(0)$ is diagonalizable, $V_n:=\{v\in V:L(0)v=nv\}$ gives $V=\bigoplus_{n\ge0}V_n$, every $V_n$ is finite dimensional, and $V_0=\mathbb C\mathbf1$. Under this page's convention, this is a vertex operator algebra of CFT type. The grading and the CFT-type condition are part of the definition; they do not follow from the vertex-algebra axioms alone.

The conformal weight of $v\in V_n$ is $n$. A conformal vector, a grading, and the nonnegative grading condition are additional data beyond an ordinary vertex algebra.
