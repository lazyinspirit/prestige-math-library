---
id: thm-inexact-proximal-gradient-summable-error-bound
kind: theorem
title: "Summable certified prox errors preserve an O(1/k) best-iterate bound"
status: draft
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Mark Schmidt, Nicolas Le Roux, and Francis Bach, Convergence Rates of Inexact Proximal-Gradient Methods for Convex Optimization, Proposition 1 and Appendix §6.1"
      url: "https://arxiv.org/pdf/1109.2415"
---

## Statement

Under the inexact proximal-gradient model of [[alg-certified-inexact-proximal-gradient-and-fista]], suppose $F=f+g$ has a minimizer $x_*$ and let $\eta_k\ge0$ be the certified errors. Then for every $N\ge1$,
$$\min_{1\le k\le N}\bigl(F(x_k)-F(x_*)\bigr)\le\frac{L\|x_0-x_*\|_2^2/2+\sum_{k=1}^N\eta_k}{N}.$$
If $\sum_{k=1}^\infty\eta_k<\infty$, then $F(x_k)-F(x_*)\to0$. This gives a best-iterate bound; no last-iterate $O(1/k)$ rate is asserted.

## Facts & Assumptions

**Given:** The certified inexact proximal-gradient sequence, its nonnegative errors and a minimizer.

[F1] [[alg-certified-inexact-proximal-gradient-and-fista]]: at step $k$, $y_k=x_{k-1}$ and the point $x_k$ has certificate error $\eta_k\ge0$.

[F2] [[lem-inexact-proximal-gradient-one-step-estimate]]: with $z=x_*$,
$$F(x_*)\ge F(x_k)+\frac{L}{2}\|x_k-x_{k-1}\|_2^2+L\langle x_{k-1}-x_*,x_k-x_{k-1}\rangle-\eta_k.$$

## Proof

1.1 By [F1], $y_k=x_{k-1}$ at each proximal-gradient call. Put $d_k=x_k-x_{k-1}$. The norm identity and [F2] give $$F(x_k)-F(x_*)\le\frac{L}{2}\bigl(\|x_{k-1}-x_*\|_2^2-\|x_k-x_*\|_2^2\bigr)+\eta_k.$$ Summing from $1$ to $N$ telescopes the squared distances and yields $\sum_{k=1}^N(F(x_k)-F(x_*))\le L\|x_0-x_*\|_2^2/2+\sum_{k=1}^N\eta_k$. The minimum of $N$ real numbers is at most their average, proving the finite-$N$ bound. [F1, F2, given, algebra]

2.1 Each gap is nonnegative because $x_*$ minimizes $F$. If the error series is summable, step 1.1 bounds the partial sums of the nonnegative gaps uniformly by $L\|x_0-x_*\|_2^2/2+\sum_{k\ge1}\eta_k$. A nonnegative sequence with bounded partial sums has terms tending to zero: otherwise some $\varepsilon>0$ would be exceeded infinitely often and the partial sums would be unbounded. [given, step 1.1, contradiction, algebra] ∎
