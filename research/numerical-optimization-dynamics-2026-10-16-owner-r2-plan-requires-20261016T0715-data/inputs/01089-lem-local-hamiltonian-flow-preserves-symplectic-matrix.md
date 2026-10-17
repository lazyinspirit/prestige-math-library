---
id: lem-local-hamiltonian-flow-preserves-symplectic-matrix
kind: lemma
title: A smooth local Hamiltonian flow preserves the canonical symplectic matrix
status: draft
origin: pipeline
dependency_level: 0
deps:
  - def-hamiltonian-vector-field-and-hamiltonian-function
  - lem-c1-euclidean-maximal-flow-with-c2-upgrade
  - thm-symmetry-of-higher-mixed-partials
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Ernst Hairer, Geometric Numerical Integration, TU München Lecture 1: Hamiltonian systems"
      url: "https://www.unige.ch/~hairer/poly_geoint/week1.pdf"
      locator: "PDF pp. 5–9"
    - title: "Nikolaj Nordkvist and Poul G. Hjorth, Classical Mechanics and Symplectic Integration"
      url: "https://backend.orbit.dtu.dk/ws/files/2512495/lecture_notes-1.pdf"
      locator: "§3.5, PDF pp. 40–41"
---

## Statement

Let $U\subseteq\mathbb R^{2d}$ be open, $H\in C^\infty(U)$, $J=\begin{pmatrix}0&I\\-I&0\end{pmatrix}$, and $X_H=J\nabla H$. Let $\varphi_t$ be the local flow on any open set where it is defined. At each initial state and time for which the intervening trajectory lies in $U$, its derivative satisfies
$$D\varphi_t(z)^T J D\varphi_t(z)=J.$$
This is a local, choice-free variational proof; no completeness is asserted.

## Facts & Assumptions

**Given:** The open set, smooth Hamiltonian, canonical matrix, and local Hamiltonian flow.

[F1] The library convention is $\iota_{X_H}\omega=dH$. [[def-hamiltonian-vector-field-and-hamiltonian-function]]

[F2] The local flow is $C^1$ in its initial state and its derivative solves $Y'=DX_H(\varphi_t(z))Y$, $Y(0)=I$. [[lem-c1-euclidean-maximal-flow-with-c2-upgrade]]

[F3] The Hessian of a smooth scalar function is symmetric. [[thm-symmetry-of-higher-mixed-partials]]

## Proof

**Proof technique:** differentiate the pulled-back constant matrix along the variational equation.

1.1 In canonical coordinates [F1] gives $X_H=J\nabla H$, hence $A(z):=DX_H(z)=J\nabla^2H(z)$. By [F3] the Hessian is symmetric, and $J^T=-J$, $J^2=-I$; therefore $A^TJ+JA=0$. [F1, F3, algebra]

2.1 Set $Y(t)=D\varphi_t(z)$. By [F2], $Y'=A(\varphi_t(z))Y$ and $Y(0)=I$. The product rule gives $\frac d{dt}(Y^TJY)=Y^T(A^TJ+JA)Y=0$ by step 1.1. Thus $Y(t)^TJY(t)=Y(0)^TJY(0)=J$ throughout the local time interval. [F2, step 1.1, algebra] ∎
