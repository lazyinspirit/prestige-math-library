---
id: lem-tdmath-diagonal-self-adjointness
kind: lemma
title: "Diagonal multiplication is self-adjoint"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps: ["def-adjoint-of-a-densely-defined-unbounded-operator","def-real-and-complex-inner-product-space","def-square-summable-family-on-an-arbitrary-index-set","def-tdmath-diagonal-operator-model","thm-cauchy-schwarz-in-an-inner-product-space"]
justified_by: []
dependency_roles: {"def-adjoint-of-a-densely-defined-unbounded-operator":"mathematical-premise","def-real-and-complex-inner-product-space":"mathematical-premise","def-square-summable-family-on-an-arbitrary-index-set":"mathematical-premise","def-tdmath-diagonal-operator-model":"mathematical-premise","thm-cauchy-schwarz-in-an-inner-product-space":"mathematical-premise"}
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics (work in progress, dated 12 October 2026)"
      url: "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf"
      locator: "Complete 635-page PDF retrieved; §§4.2–4.6, printed pp.192–217, for microcanonical, canonical, quantum trace and grand-canonical constructions."
---

## Statement

For the diagonal model [[def-tdmath-diagonal-operator-model]], the operator $H_E$ is densely defined and self-adjoint on $\ell^2(I)$.

## Facts & Assumptions

**Given:** As stated in the item.

[F1] [[def-tdmath-diagonal-operator-model]]: $H_E$ has domain $\{x:\sum_i|E_ix_i|^2<\infty\}$ and acts coordinatewise by multiplication by the real numbers $E_i$.

[F2] [[def-adjoint-of-a-densely-defined-unbounded-operator]]: the adjoint domain consists of those $y$ for which $x\mapsto\langle H_Ex,y\rangle$ on $D(H_E)$ is represented by inner product with a vector of $\ell^2(I)$.

[F3] [[def-square-summable-family-on-an-arbitrary-index-set]] and [[def-real-and-complex-inner-product-space]]: square summability is the finite-subset sum condition, and the inner product is linear in the first argument.

[F4] [[thm-cauchy-schwarz-in-an-inner-product-space]]: $|\langle x,y\rangle|\le\|x\|\|y\|$.

## Proof

**Given:** The diagonal operator of [[def-tdmath-diagonal-operator-model]] with real entries $E_i$.

1.1 Every finitely supported sequence belongs to $D(H_E)$. For $x\in\ell^2(I)$, the tails of its square-sum can be made arbitrarily small, so finite-coordinate truncations converge in norm to $x$; finite-support vectors are therefore dense in $\ell^2(I)$. [F1, F3, F4]

1.2 For $x,y\in D(H_E)$, Cauchy–Schwarz [F4] makes $\sum_i|E_ix_i\overline{y_i}|$ finite, and reality of $E_i$ gives $\langle H_Ex,y\rangle=\sum_iE_ix_i\overline{y_i}=\langle x,H_Ey\rangle$. Thus $H_E$ is symmetric. [F1, F3]

2.1 If $y\in D(H_E^*)$, there is $z\in\ell^2(I)$ such that $\langle H_Ex,y\rangle=\langle x,z\rangle$ for every $x\in D(H_E)$. Taking $x=u_i$ gives $E_i\overline{y_i}=\overline{z_i}$, hence $z_i=E_iy_i$ for every $i$; since $z\in\ell^2(I)$, $y\in D(H_E)$ and $H_E^*y=H_Ey$. Conversely symmetry in step 1.2 shows every $y\in D(H_E)$ is in $D(H_E^*)$ with that value. Therefore $D(H_E^*)=D(H_E)$ and $H_E^*=H_E$. [F1, F2, step 1.2] ∎
