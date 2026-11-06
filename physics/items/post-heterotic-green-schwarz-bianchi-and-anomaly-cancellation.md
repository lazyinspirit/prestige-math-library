---
id: post-heterotic-green-schwarz-bianchi-and-anomaly-cancellation
kind: postulate
title: Heterotic Green Schwarz Bianchi And Anomaly Cancellation
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
physical_scope: "The first-order local Green–Schwarz Bianchi input in the perturbative heterotic field basis with McOrist–Picard's antihermitian matrix-trace normalization, and a separately normalized ten-dimensional anomaly-polynomial factorization using Taylor's tangent curvature. No global anomaly cancellation, differential-cohomology construction, source contribution, or trace conversion between the two conventions is asserted."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Jock McOrist and Sebastien Picard, Stringy Corrections to Heterotic SU(3)-Geometry"
      url: "https://arxiv.org/pdf/2507.02388v1"
      locator: "§1.1, equations (1.1)–(1.2), printed pp. 1–2, and Appendix B.1, equations (B.6)–(B.8), printed pp. 45–47, for the string-frame normalization, antihermitian matrix trace, and generator normalization."
      source_key: "R4:R4-SUGRA-14:S2"
    - title: "Washington Taylor, TASI Lectures on Supergravity and String Vacua in Various Dimensions"
      url: "https://arxiv.org/pdf/1104.2051v2"
      locator: "§2.4, equations (25)–(31), printed pp. 14–16, Type-I/heterotic Green–Schwarz and ten-dimensional anomaly-polynomial conventions."
      source_key: "R4:R4-SUGRA-14:S1"
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  sources_checked:
    date: 2026-11-04
    scope: Recorded source, statement and proof-status review for this postulate in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6-luna; native-step3-independent-reader; delegated by /root under owner authorization
---

## Postulate

In the perturbative heterotic field basis through the displayed first $\alpha'$ correction, work on a nonempty open set $U$ of the smooth oriented Lorentzian ten-manifold $(M,g)$ from the preceding postulate, with all fields and connections smooth on $U$ and with no localized source current in this local relation. Restrict the gauge bundle and geometric connection of the preceding postulate to $U$, write their curvature as $F_A\in\Omega^2(U,\operatorname{ad}P_G)$, and let $B_2\in\Omega^2(U)$ be a local two-form potential with field strength $H_3\in\Omega^3(U)$. Define the tangent connections by $(\nabla^\pm_M V)^N=(\nabla^{\mathrm{LC}}_M V)^N\pm\tfrac12(H_3)_M{}^N{}_P V^P$ for a smooth vector field $V$, and write $R_H:=R_+$ for the curvature of $\nabla^+$. In the McOrist–Picard Bianchi convention the gauge curvature is represented by antihermitian matrices. Write $\operatorname{Tr}_{H}$ and $\operatorname{tr}_{H}$ for the gauge and tangent instances of that source's ordinary matrix trace, which McOrist–Picard denote by $\operatorname{tr}$. In the chosen gauge matrix representation its generators $T_a$ are normalized by $\operatorname{Tr}_{H}(T_aT_b)=-\delta_{ab}$, and $F_A=dA+A\wedge A$. For the tangent term, $\operatorname{tr}_{H}(R_H\wedge R_H)$ is the ordinary endomorphism trace of the curvature acting on $TU$; this does not assert that the invariant bilinear form on the noncompact real algebra $\mathfrak{so}(1,9)$ is negative definite. McOrist–Picard's string-frame conversion fixes the displayed coefficient in the convention whose action normalization has $\kappa_{\mathrm{MP}}^2/g_{\mathrm{YM,MP}}^2=\alpha'/4$, where $\kappa_{\mathrm{MP}}$ and $g_{\mathrm{YM,MP}}$ are that source's gravitational and gauge couplings, not the spacetime metric $g$. Choose local Chern–Simons 3-forms $\omega_{3,\mathrm{YM}}$ and $\omega_{3,\mathrm L}$ satisfying $d\omega_{3,\mathrm{YM}}=\operatorname{Tr}_{H}(F_A\wedge F_A)$ and $d\omega_{3,\mathrm L}=\operatorname{tr}_{H}(R_H\wedge R_H)$. Adopt the perturbative local relation, understood order-by-order in $\alpha'$, 

$$H_3=dB_2+\frac{\alpha'}4(\omega_{3,\mathrm{YM}}-\omega_{3,\mathrm L}),\qquad dH_3=\frac{\alpha'}4\left(\operatorname{Tr}_{H}(F_A\wedge F_A)-\operatorname{tr}_{H}(R_H\wedge R_H)\right).$$

Separately, in Taylor's anomaly-polynomial convention, choose a local orthonormal frame and let $\Omega_T$ be the local tangent/Lorentz connection used there; its curvature is $R_T=d\Omega_T+\Omega_T\wedge\Omega_T$. This is the tangent curvature denoted $R$ in Taylor's anomaly polynomial; it is not the Hull curvature $R_H$ in the Bianchi identity. Let $\operatorname{Tr}_{T}$ be Taylor's adjoint gauge trace and $\operatorname{tr}_{T}$ his tangent trace. For the source's admissible $so(32)$ or $e_8\oplus e_8$ gauge data, adopt

$$\widehat I_{12}=-\frac1{768}Y_4X_8,\qquad Y_4=\operatorname{tr}_{T}R_T^2-\frac1{30}\operatorname{Tr}_{T}F_A^2,$$

$$X_8=\operatorname{tr}_{T}R_T^4+\frac14(\operatorname{tr}_{T}R_T^2)^2-\frac1{30}\operatorname{Tr}_{T}F_A^2\,\operatorname{tr}_{T}R_T^2+\frac13\operatorname{Tr}_{T}F_A^4-\frac1{900}(\operatorname{Tr}_{T}F_A^2)^2.$$

The Bianchi identity and the anomaly-polynomial factorization are separate adopted physical inputs in their stated conventions. They do not assert a conversion between $\operatorname{Tr}_{H},\operatorname{tr}_{H}$ and $\operatorname{Tr}_{T},\operatorname{tr}_{T}$, a local reconstruction of the chiral determinant, or global anomaly cancellation.

## Postulate references

[Jock McOrist and Sebastien Picard, §1.1](https://arxiv.org/pdf/2507.02388v1)

[Jock McOrist and Sebastien Picard, Appendix B.1](https://arxiv.org/pdf/2507.02388v1)

[Washington Taylor, §2.4](https://arxiv.org/pdf/1104.2051v2)

## Facts & Assumptions

**Given:** $\alpha'>0$ is the length-squared parameter of the named string convention. The Chern–Simons equations are local and source-free; global bundle and differential-cohomology data are not included.

[F1] [[post-heterotic-type-i-ten-dimensional-n1-supergravity-action]] adopts the heterotic field branch with NS–NS potential $B_2$ and the $E_8\times E_8$ or $\operatorname{Spin}(32)/\mathbb Z_2$ gauge group. That local postulate is itself conditional on the convention supplier below.

[A1] [[def-supergravity-conventions-and-normalizations]] supplies the signature, unit, $\alpha'$, form-norm, and frame conventions recorded in the preceding postulate. Its full current definition was inspected, matches these uses, and is now listed in batch 56's A-page manifest. These are the adopted conventions used by this postulate; the Bianchi and anomaly inputs retain their stated physical scope.

## Remarks

The canonical plan's Chern–Simons derivative labels the gauge trace as $\operatorname{Tr}$ but writes $\operatorname{tr}$ in the Bianchi formula. The carrier uses one consistently labeled McOrist–Picard gauge characteristic form in both places; this is a notation correction, not a conversion to Taylor's anomaly-polynomial trace convention. Taylor's $R_T$ and the heterotic Hull curvature $R_H$ are separate connection choices and are never identified here. The separate Type-I RR Bianchi input is recorded by its own postulate.
