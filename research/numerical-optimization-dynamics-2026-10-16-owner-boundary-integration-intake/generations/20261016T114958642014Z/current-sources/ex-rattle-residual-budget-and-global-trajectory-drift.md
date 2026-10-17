---
id: ex-rattle-residual-budget-and-global-trajectory-drift
kind: example
title: A fixed RATTLE residual budget allows an O(epsilon) drift envelope
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - thm-rattle-scaled-solve-residual-error-budget
  - lem-rattle-scaled-position-and-momentum-branches
  - thm-mean-value-inequality-for-total-derivatives
  - lem-regular-holonomic-phase-residuals-control-distance-to-phase-manifold
  - def-implicit-residual-and-algebraic-error-units
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
axiom_use: "No choice principle is used."
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Ernst Hairer, Christian Lubich, and Gerhard Wanner, Geometric Numerical Integration, 2nd ed., Chapter VII.1.4, pp. 245–247"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/63242/1/131.pdf"
    - title: "Robert I. McLachlan, Klas Modin, Olivier Verdier, and Matt Wilkins, Geometric Generalisations of SHAKE and RATTLE, Foundations of Computational Mathematics 14 (2014), 339–370, §4.3"
      url: "https://arxiv.org/pdf/1207.3367"
---

## Example

Fix compact phase tubes $\mathcal C_0\subset\operatorname{relint}(\mathcal C_1)$ in a convex phase-coordinate chart with closure inside a regular chart, and $T>0$. Put $h=T/N$ and suppose the exact-solve RATTLE iterates from the common initial state stay in $\mathcal C_0$ for the grids considered. Suppose every finite RATTLE solve succeeds, its branch iterates stay in the selected local balls over $\mathcal C_1$, and its scaled residuals are bounded by a fixed sufficiently small $\varepsilon>0$. After each output apply the consistency retraction from [[lem-regular-holonomic-phase-residuals-control-distance-to-phase-manifold]] before the next step. For sufficiently small $h$, the restored trajectory stays in $\mathcal C_1$ and has an $O(T\varepsilon)$ global error envelope relative to exact-solve RATTLE; refinement alone does not force this upper bound to vanish. If both scaled residual tolerances are instead $O(h^2)$, the global solver contribution is $O(h^2)$, while the unprojected solver outputs have position and tangency residuals $O(h^4)$ and $O(h^3)$. These are upper bounds; they do not assert a matching lower bound or that residual tolerances alone certify forward error.

## Facts & Assumptions

**Given:** The compact phase tubes and fixed horizon $T>0$ in the Example, step $h=T/N$, successful finite RATTLE solves with multiplier iterates in the selected branch balls, the consistency restoration specified there, and the scaled residual hypotheses.

[F1] [[thm-rattle-scaled-solve-residual-error-budget]]: on a compact phase tube, for the restored trajectory per-step perturbations are bounded by $C|h|(\varepsilon_q+\varepsilon_p)$; $O(h^2)$ scaled residuals yield an $O(h^2)$ global error relative to exact-solve RATTLE.

[F2] [[lem-rattle-scaled-position-and-momentum-branches]]: on a compact phase tube the selected exact map is smooth in local coordinates with uniformly bounded derivatives and is the identity at $h=0$.

[F3] [[thm-mean-value-inequality-for-total-derivatives]]: a uniform derivative bound on a convex chart gives the corresponding Lipschitz bound.

[F4] [[def-implicit-residual-and-algebraic-error-units]]: a residual norm is not a forward-error estimate without a separate inverse or stability bound.

## Verification

1.1 For $\varepsilon_q,\varepsilon_p\le\varepsilon$ at every step, [F1] gives, until a first exit from $\mathcal C_1$, the recurrence $e_{n+1}\le(1+Lh)e_n+2Ch\varepsilon$ for the restored trajectory. Iteration yields $e_N\le2CTe^{LT}\varepsilon$. Choose $\varepsilon$ so this is less than the coordinate distance from $\mathcal C_0$ to the boundary of $\mathcal C_1$; then no first exit occurs, and the uniform upper-bound envelope holds. It need not shrink as $h\to0$. [F1, F2, F3, given, algebra]

2.1 If instead $\varepsilon_q,\varepsilon_p\le Kh^2$, [F1] makes each additive perturbation at most $2CKh^3$, and the same sum gives global error $O(h^2)$; for sufficiently small $h$ this is below the tube margin, so again there is no first exit. The unscaled residuals are $h^2\varepsilon_q=O(h^4)$ and $h\varepsilon_p=O(h^3)$. [F1, step 1.1, algebra]

3.1 These bounds rely on the inverse and stability estimates in [F1]. As [F4] states, the residual-tolerance status alone is not a forward-error certificate; the explicit consistency restoration is also part of this repeated-step example. [F1, F4, step 2.1] ∎
