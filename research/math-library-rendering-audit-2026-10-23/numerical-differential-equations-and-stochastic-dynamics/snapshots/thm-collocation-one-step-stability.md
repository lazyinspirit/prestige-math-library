---
id: thm-collocation-one-step-stability
kind: theorem
title: Small-step collocation maps are Lipschitz stable
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-collocation-quadrature-tableau
  - lem-collocation-quadrature-matrix-well-defined
  - thm-cauchy-schwarz-and-the-euclidean-norm
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: Ernst Hairer, Syvert P. Nørsett, and Gerhard Wanner, Solving Ordinary Differential Equations I, 2nd ed., Chapter II §II.7
      url: https://moodle.utc.fr/file.php/336/Hairer_Noersett_Wanner._Solving_ordinary_differential_equations_vol.1._Nonstiff_problems_2ed._revised_Springer_2008_ISBN_3540566708_593s_MNd_.pdf
    - title: Mathew F. Causley and David C. Seal, On the convergence of spectral deferred correction methods, Communications in Applied Mathematics and Computational Science 14 (2019), §3
      url: https://arxiv.org/pdf/1706.06245
---

## Statement

Let $f$ be $L$-Lipschitz in state on a common invariant stage tube, and let the collocation stage branches for initial states $u,v$ lie in that tube. If $hL\|Q\|_\infty\le1/2$, then
$$\|U(u)-U(v)\|_{\infty,2}\le2\|u-v\|_2.$$
Consequently the collocation step map $\Psi_h(u)=u+h\sum_jb_j f(t+c_jh,U_j(u))$ satisfies
$$\|\Psi_h(u)-\Psi_h(v)\|_2\le(1+2hL\|b\|_1)\|u-v\|_2,\qquad \|b\|_1:=\sum_j|b_j|.$$

## Facts & Assumptions

**Given:** A collocation tableau, two admissible initial states and their selected collocation stages in one common tube, a state Lipschitz constant $L$, and $hL\|Q\|_\infty\le1/2$.

[F1] [[def-collocation-quadrature-tableau]]: $U(u)=\mathbf1u+hQF(U(u))$ and $\Psi_h(u)=u+h\sum_jb_jF_j(U(u))$.

[F2] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: the Euclidean norm satisfies the triangle inequality and is homogeneous.

[F3] [[def-collocation-quadrature-tableau]] defines $\|Q\|_\infty=\max_i\sum_j|Q_{ij}|$; [[lem-collocation-quadrature-matrix-well-defined]] proves its entries are finite.

[A1] Both assumed stage branches exist in the same set where the state-Lipschitz bound in the Statement applies, and all stage values are admissible.

## Proof

1.1 Subtract the stage equations in [F1] for $u$ and $v$. The branches are the ones assumed in the Statement; the block triangle inequality [F2], state Lipschitz bound [A1], and row-sum definition [F3] give $\|U(u)-U(v)\|_{\infty,2}\le\|u-v\|_2+hL\|Q\|_\infty\|U(u)-U(v)\|_{\infty,2}.$ Since $hL\|Q\|_\infty\le1/2$, moving the last term to the left yields the stated factor $2$. [A1, F1, F2, F3, algebra]

2.1 Subtract the endpoint formulas in [F1]. By [F2] and the same state Lipschitz bound, $\|\Psi_h(u)-\Psi_h(v)\|_2\le\|u-v\|_2+hL\sum_j|b_j|\|U_j(u)-U_j(v)\|_2.$ Apply step 1.1 and the definition of $\|b\|_1$ to obtain the asserted one-step bound. [A1, F1, F2, step 1.1, algebra] ∎
