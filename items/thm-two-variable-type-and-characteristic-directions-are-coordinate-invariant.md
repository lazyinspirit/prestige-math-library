---
id: thm-two-variable-type-and-characteristic-directions-are-coordinate-invariant
kind: theorem
title: "In two variables, type and characteristic directions are coordinate invariant"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-principal-symbol-under-a-c-one-coordinate-change,
       def-characteristic-covector-hypersurface-and-noncharacteristic-data,
       lem-characteristic-hypersurface-is-independent-of-defining-function,
       def-two-variable-second-order-discriminant]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Victor Ivrii, Partial Differential Equations"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-pde/"
---

## Statement

For a scalar second-order equation in two variables, the sign of the
discriminant $\Delta=B^2-AC$ is unchanged by a smooth local coordinate change.
Moreover, the characteristic directions are exactly the tangent directions whose
normal covectors are characteristic, so they are also coordinate invariant.

## Facts & Assumptions

**Given:** A second-order principal part $A u_{xx}+2B u_{xy}+C u_{yy}$ and a smooth local coordinate change with Jacobian matrix $J$.

[L1] The discriminant is $B^2-AC$ for a two-variable second-order principal part ([[def-two-variable-second-order-discriminant]]).

[L2] Under a smooth coordinate change, the transformed principal symbol is the old symbol evaluated on the pulled-back covector ([[lem-principal-symbol-under-a-c-one-coordinate-change]]).

[L3] Characteristic hypersurfaces are defined by vanishing of the principal symbol on their conormal, and that notion is independent of the defining function ([[def-characteristic-covector-hypersurface-and-noncharacteristic-data]], [[lem-characteristic-hypersurface-is-independent-of-defining-function]]).

## Proof

**Proof technique:** direct.

1.1 Write the quadratic symbol matrix as $M=\begin{pmatrix}A&B\\ B&C\end{pmatrix}$. By [L2], if $x=\Phi(y)$ has Jacobian $J=D\Phi(y)$, then the transformed principal symbol is $\widetilde p_2(y,\eta)=p_2(\Phi(y),J^{-T}\eta)=\eta^T(J^{-1}MJ^{-T})\eta$, so the new matrix is $M'=J^{-1}MJ^{-T}$. Therefore $\det M'=(\det J)^{-2}\det M$, and because [L1] gives $\Delta=-\det M$, the transformed discriminant is $(\det J)^{-2}\Delta$; its sign is unchanged. [L1, L2]

2.1 If a $C^1$ curve is written locally as $\phi(x,y)=0$, then its tangent vector $v=(\dot x,\dot y)$ is annihilated by the normal covector $d\phi=(\phi_x,\phi_y)$, so in two dimensions $d\phi$ is a quarter-turn of $v$ up to a nonzero scalar; the curve is characteristic exactly when $p_2(d\phi)=0$ by [L3], equivalently when $A(dy)^2-2B\,dx\,dy+C(dx)^2=0$, and because [L3] makes characteristic conormals coordinate invariant, the corresponding tangent directions are coordinate invariant as well. [L3, step 1.1] ∎
