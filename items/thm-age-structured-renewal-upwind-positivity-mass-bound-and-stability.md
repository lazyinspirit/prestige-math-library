---
id: thm-age-structured-renewal-upwind-positivity-mass-bound-and-stability
kind: theorem
title: Positivity, L1 growth and data stability of the renewal finite-volume step
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-age-structured-renewal-transport-problem
  - alg-age-structured-positive-birth-quadrature
  - alg-age-structured-renewal-upwind-finite-volume
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
axiom_base: No choice axiom is used; the argument is finite-dimensional summation and matrix positivity.
provenance:
  statement: literature-derived
  proof: ai-generated
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Benoît Perthame, Introduction to Structured Equations in Biology, full lecture notes"
      url: "https://www.math.cmu.edu/cna/LectureNotesFiles/Perthame.pdf"
      locator: "Chapter 2, Theorem 2.3 and its full proof, PDF pp. 18–20: L1 upwind estimate and contraction for the semi-discrete renewal scheme."
    - title: "MATH 575 lecture notes, §9 Finite difference methods for the transport equation"
      url: "https://ow3.math.rutgers.edu/~falk/math575/lecture16.pdf"
      locator: "Complete five-page PDF; §9, printed pp. 56–57/PDF pp. 1–2: the upwind coefficients form a convex combination under CFL."
---

## Statement

For the bounded fertility rate in the age model, write $\beta_\infty:=\|\beta\|_\infty$. Whenever [[alg-age-structured-positive-birth-quadrature]] returns an estimate for nonnegative cell masses and a bounded nonnegative fertility rate with upper bound $\beta_\infty$, its birth value satisfies $0\le B_h\le\beta_\infty\sum_jM_j$.

In the update of [[alg-age-structured-renewal-upwind-finite-volume]], suppose the initial masses are nonnegative, the CFL holds, and each cell quadrature has nonnegative weights summing to $\Delta a$. Then all updated masses remain nonnegative and, with $N_h^k=\sum_{j=1}^J M_j^k$,

$$N_h^{k+1}\le(1+\Delta t\,\beta_\infty)N_h^k.$$

For two runs with the same grid, rates and quadrature rule but different nonnegative initial mass vectors $M^0,\widetilde M^0$, the one-step difference satisfies

$$\|M^{k+1}-\widetilde M^{k+1}\|_{\ell^1}\le(1+\Delta t\,\beta_\infty)\|M^k-\widetilde M^k\|_{\ell^1}.$$

## Facts & Assumptions

**Given:** The age model, positive birth quadrature and finite-volume update in [[def-age-structured-renewal-transport-problem]], [[alg-age-structured-positive-birth-quadrature]] and [[alg-age-structured-renewal-upwind-finite-volume]].

[F1] [[alg-age-structured-positive-birth-quadrature]]: each cell quadrature has nonnegative weights with total weight $\Delta a$, so its birth contribution is nonnegative and at most $\beta_\infty M_j$.

[F2] [[alg-age-structured-renewal-upwind-finite-volume]]: $M_j^{k+1}=M_j^k-\Delta t(F_j^k-F_{j-1}^k)-\Delta t\mu_jM_j^k$, with $F_0^k=B_h^k$, $F_j^k=M_j^k/\Delta a$ for $j\ge1$, and $\Delta t/\Delta a+\Delta t\mu_\infty\le1$.

[A1] The initial masses in both runs are nonnegative, and both runs use the same rates and positive quadrature rule.

## Proof

1.1 In midpoint mode, each of the $q_j$ samples has weight $\Delta a/q_j>0$, so the weights sum to the cell width. In capped-adaptive mode, every returned estimate is a finite sum of Simpson panel estimates on its leaf intervals; a two-panel Simpson block has weights proportional to $(1,4,1)$, all positive, and their sum is the block width. The leaf intervals partition the cell, so the combined weights are nonnegative and sum to its width, including when a cap is reached. Hence the cell contribution lies between $0$ and $u_j\beta_\infty\Delta a=\beta_\infty M_j$, and summing over cells gives the stated birth bound. A failure returns no estimate. [F1, construct, algebra]

1.2 Substituting $F_j^k=M_j^k/\Delta a$ in [F2] gives $M_1^{k+1}=(1-\lambda-\Delta t\mu_1)M_1^k+\Delta t B_h^k$ and, for $j\ge2$, $M_j^{k+1}=(1-\lambda-\Delta t\mu_j)M_j^k+\lambda M_{j-1}^k$. The CFL makes every displayed coefficient nonnegative, while [F1] makes $B_h^k\ge0$; induction in $k$ proves nonnegativity. [A1, F1, F2, induction, algebra]

2.1 Summing [F2] over cells telescopes the fluxes to $F_J^k-F_0^k$, hence $N_h^{k+1}=N_h^k-\Delta t F_J^k+\Delta t B_h^k-\Delta t\sum_j\mu_jM_j^k$. Since $F_J^k,\mu_j,M_j^k\ge0$ and step 1.1 gives $B_h^k\le\beta_\infty N_h^k$, the asserted mass-growth inequality follows. [F1, F2, step 1.1, algebra]

3.1 The update is a linear matrix with nonnegative entries by step 1.2. In each column, transport and mortality leave total coefficient at most $1$, because outflow or mortality removes mass; the birth quadrature adds at most $\Delta t\beta_\infty$ to that column by step 1.1. Thus its induced $\ell^1$ norm is at most $1+\Delta t\beta_\infty$. Applying this matrix to $M^k-\widetilde M^k$ proves the difference estimate. [A1, F1, step 1.1, step 1.2, algebra] ∎
