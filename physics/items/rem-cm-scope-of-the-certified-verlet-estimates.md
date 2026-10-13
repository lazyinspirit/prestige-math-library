---
id: rem-cm-scope-of-the-certified-verlet-estimates
kind: remark
title: 'Scope of the certified velocity-Verlet estimates: exact arithmetic, compact tubes, roundoff, and absent all-time claims'
status: published
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

[[lem-cm-roundoff-accumulation-in-one-step-schemes]] treats rounding only through explicit hypotheses. On a metric state set $(X,d)$, fix $L\ge0$, $h>0$ and $\eta\ge0$. The exact map $V:X\to X$ must satisfy $d(V(x),V(y))\le(1+Lh)d(x,y)$ for every $x,y\in X$. The exact iterates $z_{j+1}=V(z_j)$ and computed states $x_j\in X$ must start at the common initial state $x_0=z_0\in X$, with $d(x_{j+1},V(x_j))\le\eta$ at each computed step. Under these conditions, $d(x_n,z_n)\le\eta((1+Lh)^n-1)/(Lh)$ for $L>0$ (or $d(x_n,z_n)\le n\eta$ for $L=0$). This lemma assumes the residual and map-Lipschitz bounds; floating-point arithmetic is not analysed here, and no IEEE-754 or machine-epsilon statement is made. For Verlet, a suitable one-step bound for $V_h$ must be established separately: the exact-field derivative constant $L_1$ in [[thm-cm-verlet-finite-time-error-is-quadratic]] bounds exact-flow stability and does not supply that map hypothesis. In particular the exact symplecticity above is not guaranteed under rounding, and the separate [[lem-cm-separate-roundoff-energy-accumulation]] gives a conditional linear energy perturbation term $C_Gn\eta$ for analytic data, the stated sufficiently small fixed positive real step, and computed points $x_j\in K$ with residual $\|x_{j+1}-\Psi_h(x_j)\|\le\eta$, provided both straight comparison segments $[x_{j+1},\Psi_h(x_j)]$ and $[\Psi_h(x_j),\varphi_{H_h}^{h}(x_j)]$ lie in the controlled neighbourhood $D(\rho/8)$. Here $H_h$ is the finite modified Hamiltonian and $\varphi_{H_h}^{h}$ its time-$h$ flow from the cited lemma; its domain and bounded-gradient hypotheses are essential to this energy estimate. The residual bound and segment containment are adopted deterministic hypotheses, and no bound on machine rounding is derived.

## Absent claims

The finite-time results alone do not assert (i) conservation of the original energy $H$ under $V_h$; (ii) uniform-in-time boundedness of the energy error beyond finite $T$; (iii) existence of a *convergent* modified Hamiltonian series for $V_h$; (iv) any statement about adaptive steps, variable step sizes or non-separable Hamiltonians; or (v) any physically interpreted energy, mass or time step. The analytic backward-error refinement on this page, [[thm-cm-analytic-verlet-energy-on-exponential-times]], replaces (ii) for analytic data by an exponentially small defect on exponentially long discretised times, under its own explicit hypotheses, and still does not assert (i) or (iii). The physical reading of $M$, $V$ and $h$ belongs to the consuming classical-mechanics pages, which add their own postulates and empirical qualifications.
