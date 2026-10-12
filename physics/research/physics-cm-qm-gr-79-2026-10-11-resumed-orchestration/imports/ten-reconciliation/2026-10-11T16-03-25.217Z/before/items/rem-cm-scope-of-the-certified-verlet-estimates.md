---
id: rem-cm-scope-of-the-certified-verlet-estimates
kind: remark
title: 'Scope of the certified velocity-Verlet estimates: exact arithmetic, compact tubes, roundoff, and absent all-time claims'
status: draft
origin: pipeline
domain: mathematics
dependency_level: 18
deps:
- prop-cm-drift-kick-and-verlet-preserve-the-canonical-form
- lem-cm-verlet-local-truncation-error-is-cubic
- thm-cm-verlet-finite-time-error-is-quadratic
- lem-cm-roundoff-accumulation-in-one-step-schemes
- thm-cm-analytic-verlet-energy-on-exponential-times
- lem-cm-separate-roundoff-energy-accumulation
- def-cm-splitting-hamiltonian-and-verlet-map
dependency_roles:
  prop-cm-drift-kick-and-verlet-preserve-the-canonical-form: mathematical-premise
  lem-cm-verlet-local-truncation-error-is-cubic: mathematical-premise
  thm-cm-verlet-finite-time-error-is-quadratic: mathematical-premise
  lem-cm-roundoff-accumulation-in-one-step-schemes: mathematical-premise
  thm-cm-analytic-verlet-energy-on-exponential-times: mathematical-premise
  lem-cm-separate-roundoff-energy-accumulation: mathematical-premise
  def-cm-splitting-hamiltonian-and-verlet-map: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
  - title: 'E. Hairer, Geometric Numerical Integration (TU Munchen 2010), Lecture 2 ''Symplectic integrators'', Sections 1-5: symplecticity, symmetry and order of the Stormer-Verlet scheme, printed pages 1-14'
    url: https://www.unige.ch/~hairer/poly_geoint/week2.pdf
  - title: 'E. Hairer, Geometric Numerical Integration (TU Munchen 2010), Lecture 3 ''Backward error analysis'', Sections 1-4: the modified equation, its formal divergence, and the separation of exact-arithmetic analysis from numerical observation, printed pages 1-12'
    url: https://www.unige.ch/~hairer/poly_geoint/week3.pdf
verification:
  precheck: pass
---

## Exact scope of the certified estimates

The results [[prop-cm-drift-kick-and-verlet-preserve-the-canonical-form]], [[lem-cm-verlet-local-truncation-error-is-cubic]] and [[thm-cm-verlet-finite-time-error-is-quadratic]] are mathematical statements about the deterministic maps $D_h$, $K_h$ and $V_h$ of [[def-cm-splitting-hamiltonian-and-verlet-map]] in exact arithmetic. Symplecticity is an algebraic identity for the derivative, not a numerical observation. The finite-time bound holds only under the stated hypotheses: the potential is $C^3$ on a convex tube, the step obeys $|h|\le h_1$, and *both* the exact orbit and the numerical iterates remain in the compact set $K_1$ for the whole interval $[0,T]$. The constants are unoptimised and depend on the data through the listed sup-norms; no claim is made that the bound is attained or that it predicts observed errors.

## Roundoff and arithmetic

[[lem-cm-roundoff-accumulation-in-one-step-schemes]] treats rounding only through the explicit additive model: if each computed step differs from the exact map by at most $\eta$, the deviation from the exact iterates is at most $\eta((1+Lh)^n-1)/(Lh)$. That lemma assumes the bound $\eta$; floating-point arithmetic is not analysed here, and no IEEE-754 or machine-epsilon statement is made. In particular the exact symplecticity above does not persist under rounding, and the separate [[lem-cm-separate-roundoff-energy-accumulation]] gives a conditional linear energy perturbation term $C_Gn\eta$ for analytic data and compact retained computed points; it does not derive a bound on machine rounding.

## Absent claims

The finite-time results alone do not assert (i) conservation of the original energy $H$ under $V_h$; (ii) uniform-in-time boundedness of the energy error beyond finite $T$; (iii) existence of a *convergent* modified Hamiltonian series for $V_h$; (iv) any statement about adaptive steps, variable step sizes or non-separable Hamiltonians; or (v) any physically interpreted energy, mass or time step. The analytic backward-error refinement on this page, [[thm-cm-analytic-verlet-energy-on-exponential-times]], replaces (ii) for analytic data by an exponentially small defect on exponentially long discretised times, under its own explicit hypotheses, and still does not assert (i) or (iii). The physical reading of $M$, $V$ and $h$ belongs to the consuming classical-mechanics pages, which add their own postulates and empirical qualifications.
