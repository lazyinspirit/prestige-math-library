---
id: ex-symplectic-euler-harmonic-oscillator
kind: example
title: Kick-then-drift symplectic Euler on the harmonic oscillator
status: draft
origin: pipeline
dependency_level: 2
deps:
  - alg-local-symplectic-euler-step
  - def-symplectic-form-and-symplectic-manifold
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Ernst Hairer, Geometric Numerical Integration, TU München Lecture 2: Symplectic integrators"
      url: "https://www.unige.ch/~hairer/poly_geoint/week2.pdf"
      locator: "PDF p. 1"
    - title: "Nikolaj Nordkvist and Poul G. Hjorth, Classical Mechanics and Symplectic Integration"
      url: "https://backend.orbit.dtu.dk/ws/files/2512495/lecture_notes-1.pdf"
      locator: "§3.5, PDF p. 40"
---

## Example

For $H(q,p)=\tfrac12(q^2+p^2)$ on $\mathbb R^2$, the kick-then-drift symplectic Euler step is
$$\begin{pmatrix}q^+\\p^+\end{pmatrix}=\begin{pmatrix}1-h^2&h\\-h&1\end{pmatrix}\begin{pmatrix}q\\p\end{pmatrix}.$$
For every real $h$, this matrix is symplectic. The original Hamiltonian need not be exactly conserved.

## Facts & Assumptions

**Given:** $V(q)=q^2/2$, $M=1$, the local kick-then-drift algorithm, and $J=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$.

[F1] The method applies $p^+=p-hV'(q)$ and then $q^+=q+hp^+$. [[alg-local-symplectic-euler-step]]

[F2] For $S=\begin{pmatrix}a&b\\c&d\end{pmatrix}$, multiplication gives $S^TJS=\begin{pmatrix}0&ad-bc\\bc-ad&0\end{pmatrix}=(\det S)J$.

## Verification

1.1 Since $V'(q)=q$, [F1] gives $p^+=p-hq$ and $q^+=q+h(p-hq)=(1-h^2)q+hp$, which is the displayed matrix. [given, F1, algebra]

2.1 Its determinant is $(1-h^2)\cdot1-h(-h)=1$. By [F2], $S^TJS=J$, verifying symplecticity. [F2, step 1.1, algebra] ∎
