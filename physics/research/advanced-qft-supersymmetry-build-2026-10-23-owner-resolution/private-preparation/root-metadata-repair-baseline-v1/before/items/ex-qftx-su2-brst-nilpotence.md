---
id: ex-qftx-su2-brst-nilpotence
kind: example
title: Component Check of the SU(2) BRST Differential
status: draft
origin: session
dependency_level: 2
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps:
  - def-qftx-nonabelian-brst-complex
  - lem-qftx-nonabelian-brst-nilpotence
dependency_roles:
  def-qftx-nonabelian-brst-complex: mathematical-premise
  lem-qftx-nonabelian-brst-nilpotence: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references: []
verification:
  precheck: pending
---

## Example

Let $\mathfrak g=\mathfrak{su}(2)$ with basis $T_a=-\tfrac{i}{2}\sigma_a$, where

$$
\sigma_1=\begin{pmatrix}0&1\\1&0\end{pmatrix},\qquad \sigma_2=\begin{pmatrix}0&-i\\i&0\end{pmatrix},\qquad \sigma_3=\begin{pmatrix}1&0\\0&-1\end{pmatrix}.
$$

Then $[T_a,T_b]=\epsilon_{ab}{}^cT_c$. Use the defining representation on $V=\mathbb C^2$, so $\rho(T_a)=T_a$, and let $U\subseteq\mathbb R^n$ be a nonempty open set. On the finite-jet algebra with even gauge potential $A_\mu=A_\mu^aT_a$, odd ghosts $c^a$, and a homogeneous matter field $\psi:U\to\mathbb C^2$, define

$$sA_\mu^a=\partial_\mu c^a+\epsilon^a{}_{bc}A_\mu^bc^c,\qquad sc^a=-\frac12\epsilon^a{}_{bc}c^bc^c,\qquad s\psi=-c^aT_a\psi.$$

The operator $s$ squares to zero on these generators and their formal spacetime jets.

## Example references

[[def-qftx-nonabelian-brst-complex|Finite-jet BRST algebra and sign convention]]

[[lem-qftx-nonabelian-brst-nilpotence|General nilpotence proof]]

## Facts & Assumptions

**Given:** The displayed basis, representation, fields, and local BRST formulas.

[A1] $\epsilon^a{}_{bc}$ is the totally antisymmetric symbol with $\epsilon^1{}_{23}=1$.

[F1] [[def-qftx-nonabelian-brst-complex]]: for an even gauge potential, odd ghost, and parity-preserving Lie-algebra representation, $sA_\mu=\partial_\mu c+[A_\mu,c]$, $sc=-\tfrac12[c,c]$, $s\psi=-\rho(c)\psi$, and $s(D_I\Phi)=D_I(s\Phi)$.

[F2] [[lem-qftx-nonabelian-brst-nilpotence]]: these formulas square to zero on all finite-jet polynomials whenever the Lie-algebra Jacobi and representation identities hold.

## Verification

1.1 Direct multiplication gives $\sigma_1\sigma_2=i\sigma_3$, $\sigma_2\sigma_1=-i\sigma_3$, $\sigma_2\sigma_3=i\sigma_1$, $\sigma_3\sigma_2=-i\sigma_1$, $\sigma_3\sigma_1=i\sigma_2$, and $\sigma_1\sigma_3=-i\sigma_2$, while $\sigma_a^2=I$. Hence $[T_a,T_b]=(-i/2)^2[\sigma_a,\sigma_b]=\epsilon_{ab}{}^cT_c$ by [A1]. Matrix commutators satisfy Jacobi because the Jacobiator expands to $XYZ-YXZ-ZXY+ZYX+YZX-ZYX-XYZ+XZY+ZXY-XZY-YZX+YXZ=0$, so these structure constants obey Jacobi. Since $\rho(T_a)=T_a$, the same commutator identity is the representation identity. Substitution into [F1] gives exactly the three component formulas. [A1, F1, algebra]

2.1 The hypotheses of [F2] now hold for $\mathfrak{su}(2)$ and its defining representation. Applying that lemma gives $s^2=0$ on the generators, every total-derivative jet, and their finite graded-polynomial algebra. [F2, step 1.1] ∎
