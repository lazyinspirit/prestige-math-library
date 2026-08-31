---
id: thm-minres-minimizes-the-euclidean-residual-over-the-hermitian-krylov-space
kind: theorem
title: "For Hermitian $A$, including the indefinite case, MINRES minimizes the Euclidean residual over $x_0+K_m(A,r_0)$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-minres-iterate-from-the-lanczos-tridiagonalization,
       thm-hermitian-arnoldi-collapses-to-the-lanczos-three-term-recurrence,
       thm-arnoldi-reduces-gmres-to-a-small-hessenberg-least-squares-problem,
       cor-gmres-minimizes-the-residual-over-the-affine-krylov-space]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard Barrett et al., Templates for the Solution of Linear Systems: Building Blocks for Iterative Methods"
      url: "https://www.netlib.org/templates/templates.html"
---

## Statement

Let $A$ be Hermitian, let $x_0$ be an initial guess for $Ax=b$, let
$r_0=b-Ax_0$, and let $x_m$ be an $m$th MINRES iterate from the Lanczos
tridiagonal least-squares problem. Then

$$\|b-Ax_m\|_2=\min_{x\in x_0+K_m(A,r_0)}\|b-Ax\|_2.$$

This remains valid when $A$ is Hermitian indefinite.

## Facts & Assumptions

**Given:** A Hermitian matrix $A$, an initial guess $x_0$, the residual
$r_0=b-Ax_0$, and an $m$th MINRES iterate $x_m$.

[F1] A MINRES iterate has the form $x_m=x_0+Q_my_m$, where $y_m$ minimizes
$$\|\beta e_1-\bar T_my\|_2$$
for the Lanczos tridiagonalization
([[def-minres-iterate-from-the-lanczos-tridiagonalization]]).

[L1] For Hermitian $A$, Arnoldi collapses to the Lanczos factorization with
tridiagonal $\bar T_m$
([[thm-hermitian-arnoldi-collapses-to-the-lanczos-three-term-recurrence]]).

[L2] Arnoldi reduces GMRES to the small least-squares problem
$$\min_y\|\beta e_1-\bar H_my\|_2$$
([[thm-arnoldi-reduces-gmres-to-a-small-hessenberg-least-squares-problem]]).

[L3] GMRES minimizes the Euclidean residual over $x_0+K_m(A,r_0)$
([[cor-gmres-minimizes-the-residual-over-the-affine-krylov-space]]).

## Proof
**Proof technique:** direct.

1.1 By [L1], the Hermitian Arnoldi factorization uses the same orthonormal Krylov basis $Q_m$ as Arnoldi but with $\bar H_m=\bar T_m$ tridiagonal. Therefore the least-squares problem in [L2] is exactly the Lanczos least-squares problem recorded in [F1]. [F1, L1, L2]

2.1 Step 1.1 shows that the vector $x_m=x_0+Q_my_m$ coming from [F1] is also the GMRES iterate at step $m$. Applying [L3] gives $$\|b-Ax_m\|_2=\min_{x\in x_0+K_m(A,r_0)}\|b-Ax\|_2.$$ Neither step 1.1 nor [L3] uses positive definiteness, only Hermitian structure, so the same conclusion holds for Hermitian indefinite $A$. [F1, L3, step 1.1] ∎
