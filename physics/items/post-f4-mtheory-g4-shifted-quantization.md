---
id: post-f4-mtheory-g4-shifted-quantization
kind: postulate
title: Shifted M-theory G4 quantization on a resolved Calabi–Yau fourfold
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 9
domain: physics
library: physics
category: string-theory
deps:
- def-axiom-of-choice
- def-f4-crepant-resolution-and-matter-surface
- def-gts-compact-calabiyau-manifold-conventions
- def-m2-brane-worldvolume-action
- post-mtheory-shifted-g4-quantization
- post-m2-m5-tension-normalizations
- thm-f4-p1-of-underlying-real-bundle-equals-c1-square-minus-two-c2
- thm-naturality-normalization-and-whitney-sum-for-chern-classes
- lem-gts-first-chern-class-of-complex-bundle-equals-determinant
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-f4-crepant-resolution-and-matter-surface: mathematical-premise
  def-gts-compact-calabiyau-manifold-conventions: mathematical-premise
  def-m2-brane-worldvolume-action: formulation-prerequisite
  post-mtheory-shifted-g4-quantization: formulation-prerequisite
  post-m2-m5-tension-normalizations: formulation-prerequisite
  thm-f4-p1-of-underlying-real-bundle-equals-c1-square-minus-two-c2: mathematical-premise
  thm-naturality-normalization-and-whitney-sum-for-chern-classes: mathematical-premise
  lem-gts-first-chern-class-of-complex-bundle-equals-determinant: mathematical-premise
axiom_strength: Full AC for the characteristic-class and compact Kahler harmonic-theory inputs.
physical_scope: Conditional free-period specialization of the source-reported M-theory flux-anomaly shift to a smooth compact
  resolved Calabi–Yau fourfold internal slice with trivial external rank-three tangent bundle and the stated M2/Wess–Zumino
  normalization. The actual generic supplier gives only the image of the integral-to-de-Rham map; torsion, differential C-field
  data, nontrivial external normal bundles, singular spaces, and whether c2 is even in a given resolution remain outside the
  claim.
empirical_premises: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
  - title: Edward Witten, On Flux Quantization in M-Theory and the Effective Action, arXiv:hep-th/9609122v2
    url: https://arxiv.org/pdf/hep-th/9609122v2
    locator: §§2.1–2.3, printed pp. 3–7, spin-manifold shifted flux class and membrane anomaly motivation.
  - title: Andrés Collinucci and Raffaele Savelli, On Flux Quantization in F-Theory, arXiv:1011.6388v2
    url: https://arxiv.org/pdf/1011.6388v2
    locator: §2, printed pp. 3–5, the CY4 Chern-class conversion; §3, pp. 5–8, evenness only for the stated smooth global-Weierstrass
      class and singular-resolution caveats.
  - title: Timo Weigand, TASI Lectures on F-theory, arXiv:1806.01854v1
    url: https://arxiv.org/pdf/1806.01854v1
    locator: §9.1, printed pp. 84–86, flux quantization conventions and the resolved-model qualification.
verification:
  precheck: n/a
  sources_checked:
    date: 2026-11-05
    scope: Recorded source, statement and proof-status review for this postulate in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step5-substantive-review; delegated by /root under owner authorization
---

## Postulate

Assume Full AC. Let $T^{1,0}\widehat Y_4$ denote the holomorphic tangent bundle and $T_{\mathbb R}Y_{11}$ the real tangent bundle. Let $\widehat Y_4$ be a smooth compact connected resolved Calabi–Yau fourfold in the broad compact Calabi–Yau convention, so $K_{\widehat Y_4}$ is holomorphically trivial and $c_1(T^{1,0}\widehat Y_4)=0$. Let $Y_{11}$ be a finite-dimensional Hausdorff second-countable oriented smooth eleven-manifold without boundary, with a smooth Lorentzian metric $g$ of signature $(-,+,\ldots,+)$ and a time orientation $\tau$, a continuous choice of timelike-cone component. Supply a smooth principal $\mathrm{Spin}^+(10,1)$-bundle $P\to Y_{11}$ and an equivariant two-sheeted covering $\Lambda:P\to F^+_{g,\tau}Y_{11}$ of its oriented time-oriented orthonormal frame bundle. Work componentwise with path-connected components of CW homotopy type. Let $i:\widehat Y_4\hookrightarrow Y_{11}$ be an internal slice for which
$$i^*T_{\mathbb R}Y_{11}\cong (T^{1,0}\widehat Y_4)_{\mathbb R}\oplus\varepsilon^3_{\mathbb R};$$
thus the external rank-three real tangent bundle is trivial along the slice. Restrict the closed curvature to the slice. Let $G_{4,CJS}$ denote the CJS-convention internal curvature and put $g_4=[G_{4,CJS}]/((2\pi)^3\ell_p^3)$. Define the unit-M2-coupled local potential and curvature by $C_{3,M}=T_{M2}C_{3,CJS}$ and $G_{4,M}=T_{M2}G_{4,CJS}$. Conditional on the adopted tension $T_{M2}=(2\pi)^{-2}\ell_p^{-3}$ and identifying this rescaled curvature with the curvature in the Witten shift, the correctly typed CY4 conclusion is the free-period condition
$$g_4+\frac12\rho_{\widehat Y_4}\bigl(c_2(T^{1,0}\widehat Y_4)\bigr)\in\operatorname{im}\!\left(\rho_{\widehat Y_4}:H^4(\widehat Y_4;\mathbb Z)\to H^4_{\mathrm{dR}}(\widehat Y_4;\mathbb R)\right).$$
This is a conditional specialization of the generic postulate, not a claim of a unique integral lift or a second quantization postulate.

## Postulate references

[[def-axiom-of-choice]]

[[def-f4-crepant-resolution-and-matter-surface]]

[[def-m2-brane-worldvolume-action]]

[[post-mtheory-shifted-g4-quantization]]

[[post-m2-m5-tension-normalizations]]

[[thm-f4-p1-of-underlying-real-bundle-equals-c1-square-minus-two-c2]]

[[def-gts-compact-calabiyau-manifold-conventions]]

[[thm-naturality-normalization-and-whitney-sum-for-chern-classes]]

## Facts & Assumptions

**Given:** Full AC and A smooth compact resolved Calabi–Yau fourfold in the stated convention; the postulates below are physical premises and not consequences of the source-free CJS equations.

[F1] [[post-mtheory-shifted-g4-quantization]] currently adopts the free-period condition $[G_4/(2\pi)]_{\mathrm{dR}}-\rho_Y(\lambda)/2\in\operatorname{im}\rho_Y$ on the oriented time-oriented Lorentzian spin eleven-manifold specified in the Postulate, with $2\lambda=p_1$ a separate physical input. Its current Step 1 readiness record is missing; torsion and differential C-field data are explicitly excluded.

[F2] [[post-m2-m5-tension-normalizations]] currently adopts $T_{M2}=(2\pi)^{-2}\ell_p^{-3}$ in its R4 CJS electric/magnetic convention, and [[def-m2-brane-worldvolume-action]] currently has Wess–Zumino coefficient $T_{M2}$ in the CJS potential convention. The action has a current Step 1 ready record, while the tension postulate currently lacks one. The action does not set the absolute tension, and the tension postulate does not itself identify the Witten curvature.

[F3] [[thm-f4-p1-of-underlying-real-bundle-equals-c1-square-minus-two-c2]] gives $p_1((T^{1,0}\widehat Y_4)_{\mathbb R})=c_1(T^{1,0}\widehat Y_4)^2-2c_2(T^{1,0}\widehat Y_4)$. Its base hypotheses apply here: $\widehat Y_4$ is a compact smooth submanifold of the second-countable $Y_{11}$, hence paracompact Hausdorff, compactly generated weak Hausdorff, and of CW homotopy type; its smooth holomorphic tangent bundle is numerable. It is the local mathematical result proved above.

[F4] [[thm-naturality-normalization-and-whitney-sum-for-chern-classes]] gives naturality and the Whitney formula for complex vector bundles. On the internal slice, $i^*T_{\mathbb R}Y_{11}\cong (T^{1,0}\widehat Y_4)_{\mathbb R}\oplus\varepsilon^3_{\mathbb R}$, so naturality of the Pontryagin class and the trivial real summand give $i^*p_1(T_{\mathbb R}Y_{11})=p_1((T^{1,0}\widehat Y_4)_{\mathbb R})$.

[F5] [[def-gts-compact-calabiyau-manifold-conventions]] supplies a holomorphically trivial canonical bundle $K_{\widehat Y_4}$. The compact connected smooth base is path connected, paracompact Hausdorff CGWH and of CW homotopy type, and its tangent bundle is numerable. Hence [[lem-gts-first-chern-class-of-complex-bundle-equals-determinant]] applies: $c_1(T^{1,0}\widehat Y_4)=c_1(\det T^{1,0}\widehat Y_4)$. The determinant line is $K_{\widehat Y_4}^*$, which is trivial by dualizing the specified trivialization, so this integral class is zero by the normalization of Chern classes. This supplies the integral tangent-class conclusion, rather than attributing it to the CY convention alone.

## Conditional normalization check

The current M2 action [F2] has Wess–Zumino term $+T_{M2}\int C_{3,CJS}$, so the unit-coupled local potential is defined by $C_{3,M}=T_{M2}C_{3,CJS}$. Since this is a constant rescaling, it preserves potential patch transitions and gives $G_{4,M}=T_{M2}G_{4,CJS}$ on the global curvature, without assuming a global potential. The actual tension input [F2] then gives $[G_{4,M}/(2\pi)]=[G_{4,CJS}]/((2\pi)^3\ell_p^3)=g_4$. This unit identity is conditional on identifying the physical Witten curvature with this rescaled CJS curvature; the tension supplier lacks a current Step 1 readiness record, and the action coefficient alone does not establish that physical identification.

For the internal inclusion $i$, coefficient extension and cochain pullback commute; restriction to smooth singular chains commutes; and de Rham integration is natural because $\int_\sigma i^*\omega=\int_{i\circ\sigma}\omega$. Thus pulling the free-period condition [F1] back to the slice sends its integral-image term into $\operatorname{im}\rho_{\widehat Y_4}$. The tangent splitting in [F4] and the CY convention [F5] give $\rho_{\widehat Y_4}(i^*\lambda)=\frac12\rho_{\widehat Y_4}(p_1((T^{1,0}\widehat Y_4)_{\mathbb R}))=-\rho_{\widehat Y_4}(c_2(T^{1,0}\widehat Y_4))$, where $p_1$ is the Pontryagin class of the underlying real bundle and $c_2$ is the Chern class of the holomorphic tangent bundle; the equalities are in real de Rham cohomology and any 2-torsion in $\lambda$ is killed by coefficient extension. Substitution with the unit identity above yields the displayed free-period condition. This does not prove the physical quantization premise, a unique integral lift, or evenness of $c_2$.

The design's shorthand $g_4+c_2/2\in H^4(\widehat Y_4;\mathbb Z)$ is replaced here by the current generic supplier's typed free-period statement in $\operatorname{im}\rho$; the supplier does not retain torsion or specify an integral lift. Collinucci–Savelli's separate parity argument makes the free-period shift integral for their restricted smooth global-Weierstrass subclass only. Their argument is not extended to every singular or resolved fourfold.

