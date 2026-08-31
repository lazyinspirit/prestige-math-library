---
id: cor-gmres-minimizes-the-residual-over-the-affine-krylov-space
kind: corollary
title: "GMRES minimizes the residual norm over the affine Krylov space $x_0+K_m(A,r_0)$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-gmres-iterate,
       thm-arnoldi-reduces-gmres-to-a-small-hessenberg-least-squares-problem]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Lloyd N. Trefethen and David Bau III, Numerical Linear Algebra"
      url: "https://djvu.online/file/DTGVxlxBwTy0n"
---

## Statement

If $y_m$ minimizes $\|\beta e_1-\bar H_my\|_2$ in the Arnoldi coordinates of
the previous theorem, then

$$x_m:=x_0+Q_my_m$$

is a GMRES iterate. Equivalently, GMRES minimizes the residual norm over the
affine Krylov space $x_0+K_m(A,r_0)$.

## Facts & Assumptions

**Given:** The Arnoldi parametrization from the GMRES reduction theorem and a
vector $y_m$ minimizing $\|\beta e_1-\bar H_my\|_2$.

[F1] A GMRES iterate is, by definition, a residual minimizer over
$x_0+K_m(A,r_0)$ ([[def-gmres-iterate]]).

[L1] Arnoldi identifies the residual norm on $x_0+K_m(A,r_0)$ with the small
least-squares norm $\|\beta e_1-\bar H_my\|_2$
([[thm-arnoldi-reduces-gmres-to-a-small-hessenberg-least-squares-problem]]).

## Proof
**Proof technique:** direct.

1.1 By [L1], every $x\in x_0+K_m(A,r_0)$ has the form $x=x_0+Q_my$, and for that $x$ one has $$\|b-Ax\|_2=\|\beta e_1-\bar H_my\|_2.$$ [L1]

2.1 Since $y_m$ minimizes the right-hand side, the vector $x_m=x_0+Q_my_m$ minimizes the left-hand side over the whole affine Krylov space. By [F1], that is exactly the GMRES condition. [F1, step 1.1] ∎