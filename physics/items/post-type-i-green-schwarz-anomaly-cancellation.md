---
id: post-type-i-green-schwarz-anomaly-cancellation
kind: postulate
title: Type I Green Schwarz Anomaly Cancellation
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 7
domain: physics
library: physics
deps:
  - def-supergravity-conventions-and-normalizations
  - post-heterotic-type-i-ten-dimensional-n1-supergravity-action
dependency_roles:
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
  post-heterotic-type-i-ten-dimensional-n1-supergravity-action: formulation-prerequisite
physical_scope: "Source-reported local Green–Schwarz field and anomaly-polynomial input for perturbative ten-dimensional SO(32) Type-I N=1 theory, with a coefficient-consistent linearized descent law. It does not claim a local anomaly computation, full nonlinear gauge transformations, global anomaly cancellation, or a quantitative counterterm normalization."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Washington Taylor, TASI Lectures on Supergravity and String Vacua in Various Dimensions"
      url: "https://arxiv.org/pdf/1104.2051v2"
      locator: "§2.4, equations (25)–(31), printed pp. 14–16, Green–Schwarz field-strength transformation and factorization."
      source_key: "R4:R4-SUGRA-14T:S1"
    - title: "Mohammad R. Garousi, S-duality in higher-derivative corrections of heterotic supergravity"
      url: "https://arxiv.org/pdf/2502.00357v5"
      locator: "§1, equations (3)–(6), printed pp. 2–3, source's distinction between heterotic NS–NS and Type-I RR two-forms."
      source_key: "R4:R4-SUGRA-14T:S2"
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-05
  sources_checked:
    date: 2026-11-04
    scope: Recorded source, statement and proof-status review for this postulate in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6-luna; native-step3-independent-reader; delegated by /root under owner authorization
---

## Postulate

For the perturbative ten-dimensional $SO(32)$ Type-I $N=1$ branch, adopt Taylor's source-reported anomaly-polynomial and Green–Schwarz field input in its own trace convention; write $\operatorname{Tr}_{T}$ for his adjoint gauge trace and $\operatorname{tr}_{T}$ for his tangent trace. Work locally on a smooth source-free patch $U$ of the ten-dimensional Lorentzian spacetime, and let $P_{SO(32)}\to U$ be the restricted smooth principal gauge bundle and $A$ its connection from the preceding postulate, with curvature $F_A=dA+A\wedge A$. In a chosen local orthonormal frame, let $\Omega_1$ be the Lorentz connection used in this Type-I descent convention, with curvature $R_T=d\Omega_1+\Omega_1\wedge\Omega_1$. Let $C_2\in\Omega^2(U)$ be the RR potential and let $\omega_Y,\omega_R\in\Omega^3(U)$ be local Chern–Simons forms satisfying $d\omega_Y=\operatorname{Tr}_{T}(F_A\wedge F_A)$ and $d\omega_R=\operatorname{tr}_{T}(R_T\wedge R_T)$. In the linearized-connection descent convention, where $F_A=dA$ and $R_T=d\Omega_1$ in the variation terms, take smooth infinitesimal parameters $\Lambda\in\Omega^0(U,\operatorname{ad}P_{SO(32)})$ and $\Theta\in\Omega^0(U,\mathfrak{so}(1,9))$, with $\delta A=d\Lambda$, $\delta\Omega_1=d\Theta$, $\delta\omega_Y=d\operatorname{Tr}_{T}(\Lambda F_A)$, and $\delta\omega_R=d\operatorname{tr}_{T}(\Theta R_T)$. The modified field and transformations are

$$H_3=dC_2-\omega_Y+30\omega_R,\qquad \delta C_2=\operatorname{Tr}_{T}(\Lambda F_A)-30\operatorname{tr}_{T}(\Theta R_T),\qquad \delta A=d\Lambda,\qquad \delta\Omega_1=d\Theta.$$

Adopt

$$\widehat I_{12}=-\frac1{768}Y_4X_8,\qquad Y_4=\operatorname{tr}_{T}R_T^2-\frac1{30}\operatorname{Tr}_{T}F_A^2,$$

$$X_8=\operatorname{tr}_{T}R_T^4+\frac14(\operatorname{tr}_{T}R_T^2)^2-\frac1{30}\operatorname{Tr}_{T}F_A^2\,\operatorname{tr}_{T}R_T^2+\frac13\operatorname{Tr}_{T}F_A^4-\frac1{900}(\operatorname{Tr}_{T}F_A^2)^2.$$

At the stated linearized order, these transformations give $\delta H_3=0$ by the displayed descent equations. The source reports a Green–Schwarz coupling proportional to $\int_U C_2\wedge X_8$; its numerical coefficient is not fixed for later use in this item. This is a quantum-consistency premise, not a local chiral-anomaly computation, a proof that every configuration is globally anomaly-free, or the heterotic NS–NS $B_2$ formulation.

## Postulate references

[Washington Taylor, §2.4](https://arxiv.org/pdf/1104.2051v2)

[Mohammad R. Garousi, §1](https://arxiv.org/pdf/2502.00357v5)

## Facts & Assumptions

**Given:** The gauge group is $SO(32)$, the theory is treated in its weakly coupled Type-I tree-level field basis, and all traces are those defined above.

[F1] [[post-heterotic-type-i-ten-dimensional-n1-supergravity-action]] fixes the Type-I branch's RR potential as $C_2$, distinct from heterotic $B_2$. This action postulate is itself conditional on the conventions item below.

[A1] [[def-supergravity-conventions-and-normalizations]] supplies the ten-dimensional signature, unit, form-norm, and frame conventions. Its full current definition was inspected, matches these uses, and is now listed in batch 56's A-page manifest. These are the adopted conventions used by this postulate; the anomaly input retains its stated physical scope.

## Remarks

Taylor's factorization is a source-reported anomaly result. The item does not import its broad conclusion that the two familiar gauge groups exhaust all consistent ten-dimensional $N=1$ theories; only the displayed $SO(32)$ Type-I interface is adopted.

Taylor §2.4, equation (25), sets the Lorentz coefficient in $H_3$ to $k=30$ but prints the adjacent Lorentz term in $\delta B$ without this factor. Under the same $d\omega_R=\operatorname{tr}_{T}(R_T\wedge R_T)$ and linearized descent convention adopted above, that printed term does not cancel the variation of $+30\omega_R$; the coefficient $-30$ above is the one that makes $\delta H_3=0$. No full nonabelian or nonlinear Lorentz transformation is inferred from Taylor's linearized formulas.
