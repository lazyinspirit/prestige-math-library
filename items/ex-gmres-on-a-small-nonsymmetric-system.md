---
id: ex-gmres-on-a-small-nonsymmetric-system
kind: example
title: "GMRES on a small nonsymmetric system becomes a two- or three-dimensional least-squares problem"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-arnoldi-reduces-gmres-to-a-small-hessenberg-least-squares-problem]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Yousef Saad, CSCI 8314 Set 13: Krylov subspace methods; Introduction; Krylov subspaces; Gram-Schmidt process (review); The Arnoldi process; FOM and GMRES"
      url: "https://classpages.cselabs.umn.edu/Spring-2019/csci8314/FILES/LecN13.pdf"
---

## Example

Consider

$$A=\begin{pmatrix}2&1\\0&1\end{pmatrix},\qquad b=e_2,\qquad x_0=0.$$

Then $r_0=e_2$, so the one-step Arnoldi basis is
$v_1=e_2$, $v_2=e_1$, and

$$\bar H_1=\begin{pmatrix}1\\1\end{pmatrix}.$$

Thus one-step GMRES minimizes

$$\|e_1-\bar H_1 y\|_2=\left\|\begin{pmatrix}1-y\\-y\end{pmatrix}\right\|_2,$$

whose minimizer is $y=\tfrac12$. Hence

$$x_1=\frac12 e_2.$$

## Facts & Assumptions

**Given:** The system $Ax=b$ with the displayed $A,b,x_0$.

[L1] Arnoldi reduces GMRES to the least-squares problem
$\min_y \|\beta e_1-\bar H_my\|_2$
([[thm-arnoldi-reduces-gmres-to-a-small-hessenberg-least-squares-problem]]).

## Verification
**Proof technique:** direct.

1.1 Since $r_0=e_2$, one has $\beta=1$ and $v_1=e_2$. Also $Av_1=(1,1)^\mathsf T$, so $h_{11}=1$ and the normalized residual is $v_2=e_1$ with $h_{21}=1$. Hence $\bar H_1=\begin{pmatrix}1\\1\end{pmatrix}$. [L1, algebra]

2.1 By [L1], one-step GMRES minimizes $\|(1-y,-y)^\mathsf T\|_2^2=(1-y)^2+y^2$, whose derivative is $-2+4y$, so the minimizer is $y=\tfrac12$. Therefore $x_1=x_0+Q_1y=\frac12 e_2$. [L1, step 1.1, algebra] ∎