---
id: lem-curved-p1-interpolation-scaling
kind: lemma
title: "P1 interpolation scaling on uniformly curved cells"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-isoparametric-curved-cell-map
  - thm-local-finite-element-interpolation-estimates
  - thm-lagrange-point-evaluation-threshold-on-reference-simplex
  - lem-c-k-boundary-flattening-preserves-wkp-locally
  - def-axiom-of-choice
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Part III, Chapter 11"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap11.pdf
    - title: "Joachim Schöberl, Numerical Methods for Partial Differential Equations, §4.2"
      url: https://jschoeberl.github.io/iFEM/_downloads/900feda304f95ee42fd24abe742d7564/numpde.pdf
verification:
  precheck: pass
---

## Statement

Assume AC and Countable Choice. In dimension two let $K=\Psi(\widetilde K)$, where $\widetilde K$ is a shape-regular affine triangle of diameter comparable to $h_K$, and $\Psi$ extends to a $C^2$ diffeomorphism on a neighborhood of $\overline{\widetilde K}$. Assume $\|D\Psi\|_\infty+\|D\Psi^{-1}\|_\infty+\|D^2\Psi\|_\infty+\|J_\Psi^{-1}\|_\infty$ are uniformly bounded. Let $v$ denote its continuous representative and set $I_Kv=(I_{\widetilde K}(v\circ\Psi))\circ\Psi^{-1}$, the mapped nodal P1 interpolant. For $v\in H^2(K)$, $\|v-I_Kv\|_{L^2(K)}\le C h_K^2\|v\|_{H^2(K)}$ and $|v-I_Kv|_{H^1(K)}\le C h_K\|v\|_{H^2(K)}$, with $C$ uniform over the family.

## Facts & Assumptions

**Given:** AC and Countable Choice; a uniformly shape-regular affine triangle family; uniformly bi-Lipschitz $C^2$ cell maps with bounded second derivatives and Jacobian inverse; and $v\in H^2(K)$.

[F1] [[thm-local-finite-element-interpolation-estimates]]: under Countable Choice and, for automatic nodal boundedness, AC, on a shape-regular affine mesh, the nodal P1 interpolant of an $H^2$ function has $L^2$ error at most $Ch_K^2|v|_{H^2}$ and $H^1$ seminorm error at most $Ch_K|v|_{H^2}$.

[F2] [[def-isoparametric-curved-cell-map]]: admissible maps are diffeomorphisms with positive Jacobian and uniform derivative and inverse bounds.

[F3] AC is used for continuous-representative nodal evaluation in [F5] and its automatic nodal-boundedness application in [F1]; Countable Choice is used through [F1] and [F4] ([[def-axiom-of-choice]], [[def-countable-choice]]).

[F4] [[lem-c-k-boundary-flattening-preserves-wkp-locally]]: under Countable Choice, composition with a $C^2$ diffeomorphism and its inverse having bounded derivatives through order two is bounded on local $W^{2,2}$ spaces, with the weak derivatives given by the chain-rule polynomials.

[F5] [[thm-lagrange-point-evaluation-threshold-on-reference-simplex]]: under AC, in dimension $d=2$, point evaluation is bounded on $W^{2,2}$ because $2>d/p=1$, so the nodal values are defined for the continuous representative.

## Proof

1.1 First apply [F4] to $w=v\circ\Psi$ on the interiors of the reference and curved cells. The maps extend to a $C^2$ diffeomorphism on neighborhoods of the compact cell closures, and the stated derivative, inverse-derivative, and Jacobian bounds give $w\in H^2(\widetilde K)$ with $\|w\|_{H^2(\widetilde K)}\le C\|v\|_{H^2(K)}$. Now [F5] supplies the unique continuous representative $\widetilde v$ of $w$ on $\overline{\widetilde K}$, so its three reference-vertex values are defined. The function $\widetilde v\circ\Psi^{-1}$ is continuous on $\overline K$ and represents $v$, by the inverse-composition part of [F4]. If $g$ is any other continuous representative of $v$ on $\overline K$, then $g\circ\Psi$ is a continuous representative of $w$ and equals $\widetilde v$ by [F5]; hence the representative on $K$ is unique. Its values at the curved-cell vertices are exactly the pulled-back nodal values. Applying [F4] to the inverse map also gives the uniform $L^2$ and $H^1$ norm bounds needed when the interpolation error is pushed back to $K$. [F2, F4, F5, given, algebra]

2.1 Apply [F1] to $w$ on the affine triangle $\widetilde K$. The mapped interpolant is exactly $(I_{\widetilde K}w)\circ\Psi^{-1}$ because its three nodal values are those of $v$ at the three image vertices. The affine estimates give $\|w-I_{\widetilde K}w\|_{L^2(\widetilde K)}\le C h_K^2\|w\|_{H^2(\widetilde K)}$ and $|w-I_{\widetilde K}w|_{H^1(\widetilde K)}\le Ch_K\|w\|_{H^2(\widetilde K)}$, using the assumed diameter comparability. [F1, F5, step 1.1, given]

3.1 Push the error through $\Psi^{-1}$ using step 1.1. The resulting uniform norm bounds are the two claimed estimates. AC is used in [F5] for the continuous representative and nodal evaluations, including the automatic nodal-boundedness application in [F1]; Countable Choice is used through [F1] and [F4]. [F1, F2, F3, F4, F5, step 1.1, step 2.1] ∎
