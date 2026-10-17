---
id: lem-truncated-cg-iterates-are-krylov-vectors
kind: lemma
title: "Interior truncated-CG iterates lie in their generated Krylov subspaces"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-truncated-cg-trust-region-step
  - def-krylov-subspace-of-a-matrix-and-start-vector
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, second edition"
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "Chapter 7, §7.1, Algorithm 7.2, printed pp. 170–171 / PDF pp. 188–189: truncated-CG iterates and search directions."
---

## Statement

For the interior recurrence of [[alg-truncated-cg-trust-region-step]], before
it exits at the boundary, nonpositive curvature, residual tolerance, or inner
cap, its vectors satisfy
$$z_j\in K_j(B,-g),\qquad r_j,d_j\in K_{j+1}(B,-g),$$
where $K_j$ is the Krylov subspace of
[[def-krylov-subspace-of-a-matrix-and-start-vector]].

## Facts & Assumptions

**Given:** $B$, a nonzero $g$, and the interior recurrence of the truncated-CG
procedure.

[F1] [[alg-truncated-cg-trust-region-step]]: $z_0=0$, $r_0=g$, $d_0=-r_0$;
an interior update is
$z_{j+1}=z_j+\alpha_jd_j$,
$r_{j+1}=r_j+\alpha_jBd_j$, and
$d_{j+1}=-r_{j+1}+\beta_{j+1}d_j$.

[F2] [[def-krylov-subspace-of-a-matrix-and-start-vector]]:
$K_m(B,-g)=\operatorname{span}\{-g,B(-g),\ldots,B^{m-1}(-g)\}$,
$K_0=\{0\}$, and multiplication by $B$ sends $K_m$ into $K_{m+1}$.

## Proof

**Given:** The hypotheses in the Statement.

1.1 At $j=0$, [F1] gives $z_0=0\in K_0$,
$r_0=g\in K_1(B,-g)$ because $g$ and $-g$ span the same line, and
$d_0=-g\in K_1(B,-g)$. [given, F1, F2]

1.2 Suppose the inclusions hold at an interior index $j$. By [F2],
$Bd_j\in K_{j+2}$, while $z_j\in K_j\subseteq K_{j+1}$ and
$r_j,d_j\in K_{j+1}$. The first two recurrences in [F1] therefore give
$z_{j+1}\in K_{j+1}$ and $r_{j+1}\in K_{j+2}$. The last recurrence gives
$d_{j+1}\in K_{j+2}$. This proves the inclusions at the next interior index.
[step 1.1, F1, F2, induction, algebra]

2.1 Induction over the finite sequence of interior updates proves the stated
Krylov-subspace membership at every iterate before a specified exit. [step 1.1, step 1.2, induction] ∎
