---
id: lem-gr-dust-symmetric-hyperbolic-reduction
kind: lemma
title: "The symmetric-tensor curl symbol is skew-adjoint with norm at most the wave number, giving positivity of the dust principal block"
status: draft
origin: session
domain: mathematics
dependency_level: 9
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-dust-reduction-variables-and-gauge, def-gr-dust-electric-magnetic-weyl-variables-and-schouten]
dependency_roles:
  def-gr-dust-reduction-variables-and-gauge: mathematical-premise
  def-gr-dust-electric-magnetic-weyl-variables-and-schouten: mathematical-premise
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 4.2 (The Einstein-Euler System): the hyperbolic reduction of the Einstein-Euler system, the positivity conditions on specific enthalpy and speed of sound (4.38), the frame variables and their reduced equations, and the pressure-free (dust) subsidiary system of Sections 4.2.4-4.2.5, equations (4.26)-(4.48) and (4.56)-(4.63)"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
verification:
  precheck: pending
---

## Statement

Let $V$ be the real vector space of symmetric $3\times3$ matrices with the
positive Frobenius product $\langle B,B'\rangle=B^{ij}B'_{ij}$, and for
$\xi\in\mathbb R^3$ define
$$C(\xi):V\to V,\qquad (C(\xi)B)_{ij}=\epsilon_{kl(i}\xi^kB_{j)}{}^l ,$$
with indices raised and lowered by the Euclidean metric and $\epsilon$ the
Levi-Civita symbol on the spatial frame of
[[def-gr-dust-reduction-variables-and-gauge]]. Then:

**(a)** $C(\xi)$ is skew-adjoint: $\langle C(\xi)B,B'\rangle=-\langle B,C(\xi)B'\rangle$;

**(b)** $\|C(\xi)\|\le|\xi|$ for the operator norm induced by the Frobenius
product;

**(c)** the block operator $\left(\begin{smallmatrix}0&C(\xi)\\-C(\xi)&0\end{smallmatrix}\right)$
on $V\oplus V$ is symmetric (self-adjoint) with operator norm at most $|\xi|$;

**(d)** if $\zeta$ is a covector with $\zeta(U)=z$ and spatial part
$\zeta_\perp$, the symbol matrix
$\left(\begin{smallmatrix}zI&C(\zeta_\perp)\\-C(\zeta_\perp)&zI\end{smallmatrix}\right)$
is positive definite whenever $z>|\zeta_\perp|$, in particular for every
future-positive timelike conormal $\zeta$; hence the reduced dust system is
symmetric hyperbolic with positive time matrix on a spacelike initial surface.

## Facts & Assumptions

**Given:** the three-dimensional Euclidean frame data, the tensor $C(\xi)$ and a covector $\zeta$ as in (d).

[L1] Epsilon identities on the spatial frame: $\epsilon_{ijk}\epsilon^{ilm}=\delta_j{}^l\delta_k{}^m-\delta_j{}^m\delta_k{}^l$ and $\epsilon_{ijk}\epsilon^{ijk}=6$ ([[def-gr-dust-reduction-variables-and-gauge]]).

[L2] The antisymmetric part of the Frobenius pairing is a rotation: for any $\xi$, the map $A(\xi):\mathbb R^3\to\mathbb R^3$, $A(\xi)v=\xi\times v$, is skew-adjoint with $\|A(\xi)\|=|\xi|$; and $C(\xi)$ is the induced action of $A(\xi)$ on symmetric tensors restricted to the two slots, $C(\xi)B=\tfrac12(A(\xi)B+B A(\xi)^{\mathsf T})$ up to index conventions. [L2]

[L3] For skew-adjoint $C$, the real block $J=\left(\begin{smallmatrix}0&C\\-C&0\end{smallmatrix}\right)$ is self-adjoint and $\|J(v,w)\|^2=\|Cw\|^2+\|Cv\|^2\le\|C\|^2(\|v\|^2+\|w\|^2)$; therefore $\langle(v,w),(zI+J)(v,w)\rangle\ge(z-\|C\|)(\|v\|^2+\|w\|^2)$ ([[def-gr-dust-electric-magnetic-weyl-variables-and-schouten]] is the only ambient convention needed). [L3]

## Proof

**Proof technique:** direct.

1.1 (Skew-adjointness (a).) Compute $\langle C(\xi)B,B'\rangle=\epsilon_{kl(i}\xi^kB_{j)}{}^lB'^{ij}$. Using the symmetry of $B,B'$ to symmetrize the $i,j$ pair and the epsilon identity [L1], this equals $-\epsilon_{kl(i}\xi^kB'_{j)}{}^lB^{ij}=-\langle B,C(\xi)B'\rangle$. [L1, algebra]

1.2 (Norm bound (b).) By [L2], $C(\xi)$ is the average of the actions on the two slots of the skew-adjoint rotation $A(\xi)$, which has operator norm $|\xi|$ on each slot; the norm of the sum of two contractions is at most the sum of the norms, so $\|C(\xi)\|\le\tfrac12(|\xi|+|\xi|)=|\xi|$. [L2, algebra]

2.1 (Blocks and positivity (c), (d).) Self-adjointness of the block follows from (a): its adjoint is $\left(\begin{smallmatrix}0&-C(\xi)^*\\C(\xi)^*&0\end{smallmatrix}\right)=\left(\begin{smallmatrix}0&C(\xi)\\-C(\xi)&0\end{smallmatrix}\right)$. For (d), [L3] gives that the quadratic form of the symbol matrix is at least $z-\|C(\zeta_\perp)\|\ge z-|\zeta_\perp|>0$ on unit vectors, so the time matrix is positive definite; a future-positive timelike conormal satisfies $z>\vert\zeta_\perp\vert$ by the standard covector classification. Combining with the transport and algebraic blocks of [[lem-gr-dust-reduced-evolution-equations]] gives the symmetric hyperbolic form of the reduced dust system. [step 1.1, step 1.2, L3, algebra] ∎



- **Role.** This is the symbol-theoretic core of the dust hyperbolicity claim; it is independent of the metric dynamics and is a finite-dimensional linear-algebra statement.
