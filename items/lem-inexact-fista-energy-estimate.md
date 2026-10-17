---
id: lem-inexact-fista-energy-estimate
kind: lemma
title: "FISTA energy recurrence with certified proximal errors"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 7
deps:
  - alg-certified-inexact-proximal-gradient-and-fista
  - lem-inexact-proximal-gradient-one-step-estimate
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Mark Schmidt, Nicolas Le Roux, and Francis Bach, Convergence Rates of Inexact Proximal-Gradient Methods for Convex Optimization, §3 and Appendix §6.2"
      url: "https://arxiv.org/pdf/1109.2415"
---

## Statement

Let $x_k,y_k,t_k$ be the certified inexact FISTA iterates of [[alg-certified-inexact-proximal-gradient-and-fista]], with errors $\eta_k\ge0$, and let $x_*$ minimize $F=f+g$. Set $t_0=0$, $u_0=x_0-x_*$, and $u_k=t_kx_k-(t_k-1)x_{k-1}-x_*$. Then
$$\frac{2t_k^2}{L}(F(x_k)-F(x_*))+\|u_k\|_2^2\le\frac{2t_{k-1}^2}{L}(F(x_{k-1})-F(x_*))+\|u_{k-1}\|_2^2+\frac{2t_k^2}{L}\eta_k,$$
with the $k=1$ previous objective term interpreted as zero.

## Facts & Assumptions

**Given:** The inexact FISTA recurrence, certified errors and a minimizer in the Statement.

[F1] [[alg-certified-inexact-proximal-gradient-and-fista]]: $t_1=1$, $y_1=x_0$, $x_k$ satisfies the stated certificate, $t_{k+1}=(1+\sqrt{1+4t_k^2})/2$ and hence $t_{k+1}(t_{k+1}-1)=t_k^2$, and $y_k=x_{k-1}+((t_{k-1}-1)/t_k)(x_{k-1}-x_{k-2})$ for $k\ge2$.

[F2] [[lem-inexact-proximal-gradient-one-step-estimate]]: $F(z)\ge F(x_k)+(L/2)\|x_k-y_k\|_2^2+L\langle y_k-z,x_k-y_k\rangle-\eta_k$ for every $z$.

## Proof

1.1 The recurrence [F1] gives $t_k\ge1$ for every $k$, so $z_k=(1-1/t_k)x_{k-1}+(1/t_k)x_*$ is a convex combination. It also gives $t_k(y_k-z_k)=u_{k-1}$ and $u_k=u_{k-1}+t_k(x_k-y_k)$, including $k=1$ with $z_1=x_*$. [F1, given, induction, algebra]

2.1 For $k\ge2$, convexity gives $F(z_k)\le(1-1/t_k)F(x_{k-1})+(1/t_k)F(x_*)$. Apply [F2] at $y_k,z_k$; the same multiplication and norm expansion as in step 1.1 yield $$\frac{2t_k^2}{L}(F(x_k)-F(x_*))\le\frac{2t_k(t_k-1)}{L}(F(x_{k-1})-F(x_*))+\|u_{k-1}\|_2^2-\|u_k\|_2^2+\frac{2t_k^2}{L}\eta_k.$$ Use $t_k(t_k-1)=t_{k-1}^2$ to obtain the stated recurrence. For $k=1$, [F2] with $z=x_*$ gives the same base inequality directly, and $t_1=1$ leaves the previous objective term zero. [F1, F2, step 1.1, given, algebra] ∎
