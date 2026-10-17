---
id: alg-finite-budget-rattle-step-with-scaled-residuals
kind: algorithm
title: Finite budget RATTLE solve with scaled constraint residuals
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-regular-classical-rattle-step-map
  - lem-rattle-scaled-position-and-momentum-branches
  - lem-regular-holonomic-phase-residuals-control-distance-to-phase-manifold
  - def-implicit-residual-and-algebraic-error-units
  - alg-newton-chord-implicit-residual-with-factorization-reuse
justified_by: []
forward_refs: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Ernst Hairer, Christian Lubich, and Gerhard Wanner, Geometric Numerical Integration, 2nd ed., Chapter VII.1"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/63242/1/131.pdf"
    - title: "Robert I. McLachlan, Klas Modin, Olivier Verdier, and Matt Wilkins, Geometric Generalisations of SHAKE and RATTLE, Foundations of Computational Mathematics 14 (2014), 339–370"
      url: "https://arxiv.org/pdf/1207.3367"
verification:
  precheck: n/a
---

## Definition

Fix a compact regular chart and an input $(q,p)\in\mathcal M$, a signed $h$ with $0<|h|<h_0$, local branch balls $U_q,U_p$ from [[lem-rattle-scaled-position-and-momentum-branches]], initial multiplier guesses $\lambda_{\mathrm{init}}\in U_q$, $\mu_{\mathrm{init}}\in U_p$, tolerances $\varepsilon_q,\varepsilon_p\ge0$, and finite correction budgets $N_q,N_p\in\mathbb N_0$. The routine returns either an approximate state and both scaled residual norms, or a failure status and the last valid iterate.

1. Form
$$F_q(\lambda)=h^{-2}c\!\left(q+hM^{-1}\left(p-\frac h2\nabla V(q)-hJ(q)^T\lambda\right)\right).$$
Run [[alg-newton-chord-implicit-residual-with-factorization-reuse]] on $F_q$ in chord mode with refresh period $1$, domain $U_q$, initial value $\lambda_{\mathrm{init}}$, tolerance $\varepsilon_q$, and budget $N_q$. If it does not return its residual-tolerance status, return that status with the actual scaled residual and do not continue.

2. For its returned $\widetilde\lambda$, compute $\widetilde p_{1/2}=p-\frac h2\nabla V(q)-hJ(q)^T\widetilde\lambda$ and $\widetilde q_1=q+hM^{-1}\widetilde p_{1/2}$. Form
$$F_p(\mu)=h^{-1}J(\widetilde q_1)M^{-1}\left(\widetilde p_{1/2}-\frac h2\nabla V(\widetilde q_1)-hJ(\widetilde q_1)^T\mu\right).$$
Run the same supplier procedure on $F_p$ in chord mode with refresh period $1$, domain $U_p$, initial value $\mu_{\mathrm{init}}$, tolerance $\varepsilon_p$, and budget $N_p$. On any non-success status, return it with the actual scaled tangency residual.

3. If both calls meet their residual tolerances, set
$$\widetilde p_1=\widetilde p_{1/2}-\frac h2\nabla V(\widetilde q_1)-hJ(\widetilde q_1)^T\widetilde\mu$$
and return $(\widetilde q_1,\widetilde p_1)$, the norms $\|F_q(\widetilde\lambda)\|_2$, $\|F_p(\widetilde\mu)\|_2$, and status “residual tolerances met”.

For $h=0$, return $(q,p)$ with status “exact identity”. If the input is inconsistent, a branch ball is not supplied, an evaluation is undefined, a trial leaves its branch ball, a Jacobian factorization fails, or either budget expires, return the corresponding failure status and do not claim a RATTLE step. A successful output with nonzero residuals need not lie in $\mathcal M$; applying the routine again requires a consistent input, for example one restored by [[lem-regular-holonomic-phase-residuals-control-distance-to-phase-manifold]]. The supplier status “root” means only that its stated residual tolerance was met; it does not certify an exact root or a forward-error bound. No finite budget is claimed to succeed on every input.
