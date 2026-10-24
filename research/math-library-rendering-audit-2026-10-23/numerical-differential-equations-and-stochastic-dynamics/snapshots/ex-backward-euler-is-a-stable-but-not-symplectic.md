---
id: ex-backward-euler-is-a-stable-but-not-symplectic
kind: example
title: Backward Euler is A-stable but not symplectic
status: published
origin: pipeline
dependency_level: 0
deps: [def-symplectic-form-and-symplectic-manifold]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Ernst Hairer, Geometric Numerical Integration, TU München Lecture 2: Symplectic integrators"
      url: "https://www.unige.ch/~hairer/poly_geoint/week2.pdf"
      locator: "PDF pp. 1–2"
    - title: "Nikolaj Nordkvist and Poul G. Hjorth, Classical Mechanics and Symplectic Integration"
      url: "https://backend.orbit.dtu.dk/ws/files/2512495/lecture_notes-1.pdf"
      locator: "§3.5, PDF p. 40"
---

## Example

Backward Euler on the oscillator $y'=Ay$, $A=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$, is A-stable but not symplectic for any $h>0$. Here A-stable means its scalar stability function has modulus at most one for every $z$ with $\operatorname{Re}z\le0$.

## Facts & Assumptions

**Given:** The backward Euler equation $y^+=y+hAy^+$, $h>0$, and the canonical matrix $J=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$.

[F1] A one-step matrix on this scalar test equation has stability function $R(z)$ defined by $y^+=R(h\lambda)y$ when $y'=\lambda y$; A-stability is the modulus condition in the Example.

[F2] In dimension two, $S^TJS=(\det S)J$, by direct multiplication.

## Verification

1.1 For $y'=\lambda y$, backward Euler gives $(1-h\lambda)y^+=y$, so $R(z)=1/(1-z)$ wherever defined. If $\operatorname{Re}z\le0$, then $|1-z|^2=1-2\operatorname{Re}z+|z|^2\ge1$, whence $|R(z)|\le1$ and the method is A-stable. [given, F1, algebra]

2.1 For the oscillator, $I-hA=\begin{pmatrix}1&-h\\h&1\end{pmatrix}$, so $S_{BE}=(I-hA)^{-1}=\frac1{1+h^2}\begin{pmatrix}1&h\\-h&1\end{pmatrix},\qquad \det S_{BE}=\frac1{1+h^2}<1.$ By [F2], $S_{BE}^TJS_{BE}=(\det S_{BE})J\ne J$. It is therefore not symplectic. [F2, algebra] ∎
