---
id: thm-rattle-scaled-solve-residual-error-budget
kind: theorem
title: Scaled RATTLE residuals bound the finite solve trajectory error
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-regular-holonomic-phase-space-and-dynamics
  - def-regular-classical-rattle-step-map
  - lem-rattle-scaled-position-and-momentum-branches
  - alg-finite-budget-rattle-step-with-scaled-residuals
  - def-implicit-residual-and-algebraic-error-units
  - lem-regular-holonomic-phase-residuals-control-distance-to-phase-manifold
  - thm-mean-value-inequality-for-total-derivatives
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
axiom_use: "No choice principle is used."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ernst Hairer, Christian Lubich, and Gerhard Wanner, Geometric Numerical Integration, 2nd ed., Chapter VII.1.4, pp. 245–247"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/63242/1/131.pdf"
    - title: "Robert I. McLachlan, Klas Modin, Olivier Verdier, and Matt Wilkins, Geometric Generalisations of SHAKE and RATTLE, Foundations of Computational Mathematics 14 (2014), 339–370, §§4.1 and 4.3"
      url: "https://arxiv.org/pdf/1207.3367"
---

## Statement

On a compact regular chart, let $(q_1,p_1)$ be the exact RATTLE step from a consistent input $(q,p)\in\mathcal M$, and let $(\widetilde q_1,\widetilde p_1)$ be a successful output of [[alg-finite-budget-rattle-step-with-scaled-residuals]] whose branch iterates remain in the neighborhoods of [[lem-rattle-scaled-position-and-momentum-branches]]. Define
$$\varepsilon_q=\|h^{-2}c(\widetilde q_1)\|_2,\qquad \varepsilon_p=\|h^{-1}J(\widetilde q_1)M^{-1}\widetilde p_1\|_2.$$
For sufficiently small $0<|h|$, there is a chart-uniform constant $C$ such that
$$\|\widetilde q_1-q_1\|\le Ch^2\varepsilon_q,\qquad \|\widetilde p_1-p_1\|\le C|h|(\varepsilon_q+\varepsilon_p).$$
For a repeated finite-solve trajectory, restore each successful output using a local retraction from [[lem-regular-holonomic-phase-residuals-control-distance-to-phase-manifold]] before using it as the next input. If the two scaled residuals are bounded by a fixed sufficiently small $\varepsilon$ at each step on a fixed-time grid, the restored trajectory differs from the exact-solve RATTLE trajectory by $O(\varepsilon)$ uniformly on the grid. If instead both residuals are at most $C_0h^2$, the difference is $O(h^2)$, and the unscaled position and tangency residuals of each unprojected solver output are respectively $O(h^4)$ and $O(h^3)$. The finite solver's raw output need not be consistent, so this global statement is specifically for the restored trajectory.

## Facts & Assumptions

**Given:** A compact regular chart, a consistent input $(q,p)$, exact and approximate multiplier iterates in the selected branch neighborhoods, and the scaled residuals in the Statement.

[F1] [[def-regular-classical-rattle-step-map]]: the exact updates use the impulses $hJ(q)^T\lambda$, $hJ(q_1)^T\mu$, and impose $c(q_1)=0$, $J(q_1)M^{-1}p_1=0$.

[F2] [[lem-rattle-scaled-position-and-momentum-branches]]: the scaled equations have unique smooth roots, and their multiplier Jacobians tend to $-A(q)$, uniformly invertible on the compact chart.

[F3] [[alg-finite-budget-rattle-step-with-scaled-residuals]]: on its success status the algorithm returns iterates with the scaled residual norms $\varepsilon_q,\varepsilon_p$ defined above.

[F4] [[def-implicit-residual-and-algebraic-error-units]]: a residual norm is not a forward-error bound without a separate inverse or stability estimate.

[F5] [[thm-mean-value-inequality-for-total-derivatives]]: a uniform derivative bound on a convex neighborhood yields a uniform Lipschitz estimate.

[F6] [[lem-regular-holonomic-phase-residuals-control-distance-to-phase-manifold]]: finitely many local smooth retractions cover the compact regular phase set, and all satisfy the uniform bound $\|\Pi_j(q,p)-(q,p)\|\le C(\|c(q)\|_2+\|J(q)M^{-1}p\|_2)$.

## Proof

1.1 For $F_q(\lambda)=h^{-2}c(q_1(\lambda))$, [F2] gives $D_\lambda F_q=-A(q)+o(1)$ uniformly on the branch ball. Shrink it so $\|A(q)^{-1}(D_\lambda F_q+A(q))\|\le\frac12$. The derivative of $G(\lambda)=A(q)^{-1}F_q(\lambda)+\lambda$ is then bounded by $1/2$. Since $F_q(\lambda)=0$ at the exact root $\lambda$, [F5] along the segment to $\widetilde\lambda$ gives $\|G(\widetilde\lambda)-G(\lambda)\|\le\frac12\|\widetilde\lambda-\lambda\|$. As $A^{-1}F_q(\widetilde\lambda)=G(\widetilde\lambda)-G(\lambda)-(\widetilde\lambda-\lambda)$, it follows that $\|\widetilde\lambda-\lambda\|\le2\|A(q)^{-1}\|\varepsilon_q$. This inverse estimate is needed because [F4] alone does not convert residual size to state error. [F2, F3, F4, F5, given, algebra]

2.1 The position formula gives $\widetilde q_1-q_1=-h^2M^{-1}J(q)^T(\widetilde\lambda-\lambda)$ and $\widetilde p_{1/2}-p_{1/2}=-hJ(q)^T(\widetilde\lambda-\lambda)$. The uniform matrix bounds and step 1.1 yield $\|\widetilde q_1-q_1\|\le Ch^2\varepsilon_q$ and $\|\widetilde p_{1/2}-p_{1/2}\|\le C|h|\varepsilon_q$. [F1, step 1.1, algebra]

2.2 For fixed $\widetilde\lambda$, the final scaled tangency residual is affine in $\mu$ with derivative exactly $-A(\widetilde q_1)$. Uniform invertibility bounds the distance from $\widetilde\mu$ to the exact momentum root for this $\widetilde\lambda$ by $C\varepsilon_p$. The smooth momentum branch in [F2] changes that exact root by at most $C\varepsilon_q$ when $\widetilde\lambda$ replaces $\lambda$, using step 1.1 and the uniform branch derivative bound. [F2, F3, F5, step 1.1]

3.1 In the final momentum formula, the initial half-momentum difference contributes $O(|h|\varepsilon_q)$ by step 2.1; changing the position in the smooth force and constraint Jacobian contributes $O(|h|^3\varepsilon_q)$; changing the final multiplier contributes $O(|h|(\varepsilon_q+\varepsilon_p))$ by step 2.2. Their sum proves $\|\widetilde p_1-p_1\|\le C|h|(\varepsilon_q+\varepsilon_p)$ and hence the one-step estimates. [F1, step 1.1, step 2.1, step 2.2, algebra]

4.1 The residual definitions give $\|c(\widetilde q_1)\|=|h|^2\varepsilon_q$ and $\|J(\widetilde q_1)M^{-1}\widetilde p_1\|=|h|\varepsilon_p$. Choose a neighborhood $U_j$ from [F6] containing the output, using a fixed ordering of the finite cover to make the selection definite. Its local retraction changes the output by at most $C(|h|^2\varepsilon_q+|h|\varepsilon_p)\le C|h|(\varepsilon_q+\varepsilon_p)$ for $|h|\le1$. Together with step 3.1, the restored update from a consistent state differs from its exact RATTLE update by at most $C|h|(\varepsilon_q+\varepsilon_p)$. [F1, F2, F3, F6, step 3.1, algebra]

5.1 The selected exact RATTLE map is smooth in state and equals the identity at $h=0$ by [F2], so on a compact convex chart its derivative is bounded by $1+Lh$ for small positive $h$. By [F5] it is Lipschitz with that factor. Therefore the error against the exact-solve RATTLE trajectory obeys $e_{n+1}\le(1+Lh)e_n+C h(\varepsilon_q+\varepsilon_p)$. Iterating the geometric sum gives $e_N\le C_T\varepsilon$ for fixed residual bound $\varepsilon$, and $e_N\le C_T h^2$ when each residual is at most $C_0h^2$. In the latter case the unscaled residuals are exactly $h^2\varepsilon_q$ and $h\varepsilon_p$, hence $O(h^4)$ and $O(h^3)$. [F2, F5, step 4.1, algebra] ∎
