---
id: thm-inexact-fista-weighted-error-bound
kind: theorem
title: "Weighted prox-error summability preserves an O(1/k^2) FISTA bound"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 8
deps:
  - alg-certified-inexact-proximal-gradient-and-fista
  - lem-inexact-fista-energy-estimate
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

Under the certified inexact FISTA model of [[alg-certified-inexact-proximal-gradient-and-fista]], suppose $F=f+g$ has a minimizer $x_*$. For each $k\ge1$,
$$F(x_k)-F(x_*)\le\frac{2L}{(k+1)^2}\left(\|x_0-x_*\|_2^2+\frac2L\sum_{j=1}^k j^2\eta_j\right).$$
In particular, weighted summability $\sum_{j\ge1}j^2\eta_j<\infty$ preserves an $O(1/k^2)$ objective bound under this certificate model.

## Facts & Assumptions

**Given:** The certified inexact FISTA sequence, its errors, and a minimizer.

[F1] [[lem-inexact-fista-energy-estimate]]: the potential after $k$ calls is at most $\|x_0-x_*\|_2^2+(2/L)\sum_{j=1}^k t_j^2\eta_j$.

[F2] [[alg-certified-inexact-proximal-gradient-and-fista]]: $t_1=1$ and $t_{j+1}=(1+\sqrt{1+4t_j^2})/2$.

## Proof

1.1 Sum the recurrence [F1] through step $k$ and discard the nonnegative squared potential. This gives $$F(x_k)-F(x_*)\le\frac{L}{2t_k^2}\left(\|x_0-x_*\|_2^2+\frac2L\sum_{j=1}^k t_j^2\eta_j\right).$$ [F1, given, algebra]

2.1 Since $\sqrt{1+4t_j^2}\le2t_j+1$ for $t_j\ge0$, [F2] gives $t_{j+1}\le t_j+1$ and induction yields $t_j\le j$. The lower bound $\sqrt{1+4t_j^2}\ge2t_j$ gives $t_k\ge(k+1)/2$. Therefore $t_j^2\eta_j\le j^2\eta_j$ and $1/(2t_k^2)\le2/(k+1)^2$; substitution into step 1.1 proves the displayed estimate. [F2, step 1.1, given, induction, algebra] ∎
