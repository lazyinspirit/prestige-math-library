---
id: lem-sda-doubling-composition-and-psd-invariants
kind: lemma
title: "The DARE doubling recurrence composes two Riccati steps and preserves
  positive semidefiniteness"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - alg-finite-budget-structure-preserving-doubling-for-dare
  - def-standard-continuous-and-discrete-riccati-equations
  - thm-non-negative-square-root-exists-and-is-unique
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Federico Poloni, Lecture notes on Riccati-type matrix equations"
      url: "https://pages.di.unipi.it/fpoloni/videolezioni/phd25/notes.pdf"
      locator: "§5.2, DARE structure-preserving doubling formulas and subspace
        iteration"
    - title: "A.A. Stoorvogel and A. Saberi, The discrete algebraic Riccati equation
        and linear matrix inequality, Memorandum COSOR 94-16"
      url: "https://pure.tue.nl/ws/portalfiles/portal/2465804/427410.pdf"
      locator: "§2, finite and infinite generalized eigenvalues"
verification:
  precheck: pass
---

## Statement

For Hermitian $G,H\succeq0$, define $\Phi_G(X)=X(I+GX)^{-1}$ and $f(X)=H+A^*\Phi_G(X)A$ on $X\succeq0$. One step of the exact inverse recurrence in [[alg-finite-budget-structure-preserving-doubling-for-dare]] is well-defined, preserves $G_j,H_j\succeq0$, and its updated triple satisfies
$$f\circ f(X)=H_1+A_1^*X(I+G_1X)^{-1}A_1,$$
where
$$A_1=A(I+GH)^{-1}A,\quad G_1=G+A(I+GH)^{-1}GA^*,\quad H_1=H+A^*H(I+GH)^{-1}A.$$
Consequently, starting from $(A,G,H)$, the exact recurrence satisfies $H_j=f^{2^j}(0)$ after $j$ updates. These claims concern exact arithmetic; the rounded branch has only its separately reported diagnostics.

## Facts & Assumptions

**Given:** Finite matrices $A$ and Hermitian positive-semidefinite $G,H$ over $F\in\{\mathbb R,\mathbb C\}$.

[F1] [[alg-finite-budget-structure-preserving-doubling-for-dare]]: the exact-mode update formulas are $A_1=A(I+GH)^{-1}A$, $G_1=G+A(I+GH)^{-1}GA^*$, and $H_1=H+A^*H(I+GH)^{-1}A$.

[F2] [[def-standard-continuous-and-discrete-riccati-equations]]: for $G=BR^{-1}B^*$, the DARE map is $X\mapsto Q+A^*X(I+GX)^{-1}A$.

[F3] [[thm-non-negative-square-root-exists-and-is-unique]]: a positive-semidefinite matrix has a positive-semidefinite square root.

## Proof

1.1 If $(I+GH)v=0$, then multiplication by $v^*H$ gives $v^*Hv+(Hv)^*G(Hv)=0.$ Both terms are nonnegative, so $Hv=0$ and then $v=0$. Thus $I+GH$ is invertible; the same argument applies to $I+HG$. The identities $(I+GH)^{-1}G=G(I+HG)^{-1} =G^{1/2}(I+G^{1/2}HG^{1/2})^{-1}G^{1/2},$ $H(I+GH)^{-1}=(I+HG)^{-1}H =H^{1/2}(I+H^{1/2}GH^{1/2})^{-1}H^{1/2}$ follow by multiplication and the push-through identity. Their middle matrices are positive definite, so both displayed products are Hermitian positive semidefinite. Therefore the updates in [F1] give $G_1,H_1\succeq0$ and use only an inverse already proved to exist. [F1, F3, algebra]

1.2 For any invertible displayed factors, direct multiplication gives the resolvent identity $\Phi_G(X)-\Phi_G(Y)=(I+XG)^{-1}(X-Y)(I+GY)^{-1},$ and the push-through identity $(I+UV)^{-1}U=U(I+VU)^{-1}$. For $X\succ0$, $\Phi_G(X)^{-1}=X^{-1}+G$. Put $U=\Phi_G(X)$ and $Y=A^*UA$. Applying the resolvent identity at $H+Y$ and $H$ gives $\Phi_G(H+Y)-\Phi_G(H)=(I+(H+Y)G)^{-1}Y(I+GH)^{-1}.$ Since $I+(H+Y)G=(I+HG)+YG$, multiplication verifies $(I+(H+Y)G)^{-1}Y=(I+HG)^{-1}Y\bigl(I+G(I+HG)^{-1}Y\bigr)^{-1}.$ Substituting $Y=A^*UA$ and applying push-through twice rewrites this difference as $(I+HG)^{-1}A^*\bigl(U^{-1}+AG(I+HG)^{-1}A^*\bigr)^{-1}A(I+GH)^{-1}.$ Using $U^{-1}=X^{-1}+G$ and [F1], the middle inverse is $X(I+G_1X)^{-1}$. Now $f(f(X))-H_1=A^*\bigl(\Phi_G(H+Y)-\Phi_G(H)\bigr)A$. Its left factor is $A^*(I+HG)^{-1}A^*=A_1^*$ and its right factor is $A(I+GH)^{-1}A=A_1$. Adding $H_1=H+A^*\Phi_G(H)A$ proves the composition formula for $X\succ0$. [F1, F2, algebra]

2.1 For singular $X\succeq0$, replace it by $X+\varepsilon I$ in step 1.2 and let $\varepsilon\downarrow0$. Step 1.1 guarantees every $I+G(X+\varepsilon I)$ and $I+G_1(X+\varepsilon I)$ is invertible; matrix inversion is continuous at these invertible limits. Hence the composition identity extends to every $X\succeq0$, including singular $A$ and singular $X$. By induction on $j$, the updated Riccati map is $f^{2^j}$ and its value at zero is $H_j$. [F1, step 1.1, step 1.2, induction, algebra] ∎
