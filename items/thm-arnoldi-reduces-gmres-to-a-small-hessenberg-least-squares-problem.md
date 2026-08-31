---
id: thm-arnoldi-reduces-gmres-to-a-small-hessenberg-least-squares-problem
kind: theorem
title: "Arnoldi reduces GMRES to a least-squares problem for the small Hessenberg matrix"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-gmres-iterate,
       thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization,
       thm-least-squares-solutions-and-normal-equation]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Yousef Saad, CSCI 8314 Set 13: Krylov subspace methods; Introduction; Krylov subspaces; Gram-Schmidt process (review); The Arnoldi process; FOM and GMRES"
      url: "https://classpages.cselabs.umn.edu/Spring-2019/csci8314/FILES/LecN13.pdf"
---

## Statement

Let $r_0=b-Ax_0\ne0$ and set $\beta=\|r_0\|_2$. Run Arnoldi on $(A,r_0)$
through step $m$ without breakdown, so that $v_1=r_0/\beta$. Then every vector
$x\in x_0+K_m(A,r_0)$ has the form $x=x_0+Q_my$ for some $y\in\mathbb F^m$, and

$$b-Ax=Q_{m+1}(\beta e_1-\bar H_my).$$

Consequently,

$$\min_{x\in x_0+K_m(A,r_0)}\|b-Ax\|_2 =\min_{y\in\mathbb F^m}\|\beta e_1-\bar H_my\|_2.$$

## Facts & Assumptions

**Given:** A linear system $Ax=b$, an initial guess $x_0$, the nonzero initial residual $r_0=b-Ax_0$, and an Arnoldi run on $(A,r_0)$ through step $m$ without breakdown.

[F1] A GMRES iterate minimizes the residual norm over $x_0+K_m(A,r_0)$ ([[def-gmres-iterate]]).

[L1] Arnoldi gives an orthonormal basis of $K_m(A,r_0)$ and the factorization $AQ_m=Q_{m+1}\bar H_m$ with $Q_{m+1}^\ast Q_{m+1}=I$ ([[thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization]]).

## Proof
**Proof technique:** direct.

1.1 By [L1], the columns of $Q_m$ form a basis of $K_m(A,r_0)$, so every $x\in x_0+K_m(A,r_0)$ can be written uniquely as $x=x_0+Q_my$. Since $r_0=\beta v_1=\beta Q_{m+1}e_1$ and $b-Ax_0=r_0$, one has $$b-Ax=r_0-AQ_my=Q_{m+1}\beta e_1-Q_{m+1}\bar H_my =Q_{m+1}(\beta e_1-\bar H_my).$$ [L1, construct, algebra]

2.1 The columns of $Q_{m+1}$ are orthonormal by [L1], so multiplying by $Q_{m+1}$ preserves the Euclidean norm. Therefore $$\|b-Ax\|_2=\|\beta e_1-\bar H_my\|_2.$$ Taking minima over the corresponding parametrized sets gives the stated small least-squares problem. This is the residual norm whose minimizers [F1] calls GMRES iterates. [F1, L1, step 1.1] ∎
