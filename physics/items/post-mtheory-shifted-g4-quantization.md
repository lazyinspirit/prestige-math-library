---
id: post-mtheory-shifted-g4-quantization
kind: postulate
title: Shifted G4 quantization in M theory
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 7
domain: physics
library: physics
deps:
  - post-eleven-dimensional-cjs-supergravity-action
  - def-pontryagin-classes-by-complexification
  - def-eleven-dimensional-spin-structure-and-majorana-bundle
  - lem-second-countable-smooth-manifolds-have-cw-homotopy-type
  - def-axiom-of-choice
  - lem-mtheory-integral-to-de-rham-period-map
dependency_roles:
  post-eleven-dimensional-cjs-supergravity-action: formulation-prerequisite
  def-pontryagin-classes-by-complexification: mathematical-premise
  def-eleven-dimensional-spin-structure-and-majorana-bundle: formulation-prerequisite
  lem-second-countable-smooth-manifolds-have-cw-homotopy-type: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  lem-mtheory-integral-to-de-rham-period-map: mathematical-premise
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Source-reported free-period condition for a smooth, second-countable spin eleven-dimensional spacetime with closed four-form curvature; torsion and differential C-field data are explicitly outside the displayed condition."
sources:
  references:
    - title: "Edward Witten, On Flux Quantization in M-Theory and the Effective Action, arXiv:hep-th/9609122v2"
      url: "https://arxiv.org/pdf/hep-th/9609122v2"
      locator: "§2.2, PDF pp. 5–7; shifted G4 flux quantization and the spin-class input."
verification:
  precheck: pending
  sources_checked:
    date: 2026-11-05
    scope: Recorded source, statement and proof-status review for this postulate in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step5-substantive-review; delegated by /root under owner authorization
---

## Postulate

Let $Y$ be a finite-dimensional, Hausdorff, second-countable oriented smooth eleven-manifold without boundary, equipped with a smooth Lorentzian metric $g$ of signature $(-,+,\ldots,+)$ and a time orientation $\tau$: a continuous choice of one component of the timelike cone $\{v\in T_yY:g_y(v,v)<0\}$ at every $y\in Y$. Supply a spin structure in the convention of the eleven-dimensional spin supplier: a smooth principal $\mathrm{Spin}^+(10,1)$-bundle $P\to Y$ and an equivariant two-sheeted covering $\Lambda:P\to F_{g,\tau}^+Y$ over $\operatorname{id}_Y$, where $F_{g,\tau}^+Y$ is the bundle of oriented, time-oriented orthonormal frames. Work componentwise, with each connected component path connected and of CW type. Let $G_4\in\Omega^4(Y;\mathbb R)$ be a smooth closed real four-form in the source's unit-membrane-coupling normalization. This postulate specifies only curvature-level data: the closed form, the integral spin class below, and their de Rham period condition. No global C-field object, descent data, holonomy, or differential-cohomology lift is assumed or constructed; any local three-form potentials are additional data and are not used in the condition. Write $H^4(Y;\mathbb Z)$ for singular cohomology and let $\rho_Y:H^4(Y;\mathbb Z)\to H^4_{\mathrm{dR}}(Y;\mathbb R)$ be the coefficient-to-period map constructed from the standard cohomology comparisons. Adopt the source-reported spin class $\lambda\in H^4(Y;\mathbb Z)$ satisfying $2\lambda=p_1(TY)$ as an additional physical topological input. Then adopt the free-period condition
$$\left[\frac{G_4}{2\pi}\right]_{\mathrm{dR}}-\frac12\rho_Y(\lambda) \in \operatorname{im}\!\left(\rho_Y:H^4(Y;\mathbb Z)\to H^4_{\mathrm{dR}}(Y;\mathbb R)\right).$$
Here unit-membrane-coupling normalization means the following local convention in $\hbar=c=1$ units. Whenever an additional smooth local potential $c_3\in\Omega^3(U;\mathbb R)$ on an open $U\subseteq Y$ is supplied with $dc_3=G_4|_U$, its electric membrane factor is $\exp(i\int_{\Sigma_3}X^*c_3)$ for a smooth map $X:\Sigma_3\to U$ from a compact oriented smooth three-manifold without boundary. The coefficient in this exponent is $+1$ and the integral is dimensionless; in length-valued coordinates the components of $c_3$ and $G_4$ have dimensions length$^{-3}$ and length$^{-4}$. This specifies a local factor only, not a globally single-valued membrane amplitude independently of the fermion factor.

This is the typed de Rham form of the source's shifted integral-period statement. It is an anomaly/quantization postulate, not a theorem of ordinary cohomology and not a consequence of the local CJS field equations. The CJS carrier instead defines $F_4=dC_3$ with dimensionless components of $C_3$; it does not identify $F_4$ with the normalized $G_4$. If an additional constant electric coupling $q>0$ of dimension length$^{-3}$ is supplied through a local membrane term $+q\int_{\Sigma_3}X^*C_3$, the corresponding conversion is $c_3=qC_3$ and $G_4|_U=qF_4|_U$. No value of $q$, or identification with a membrane tension, follows from the source-free CJS action or is needed for the displayed condition on $G_4$. A globally defined CJS potential yields an exact rescaled curvature and alone cannot represent a nonzero real flux class. The displayed condition forgets torsion and does not specify a global C-field or a differential-cohomology refinement.

## Statement References

[Witten, §2.2](https://arxiv.org/pdf/hep-th/9609122v2)

## Facts & Assumptions

**Given:** The oriented, time-oriented smooth Lorentzian eleven-manifold $(Y,g,\tau)$ with its supplied spin lift, a closed curvature form $G_4$, the source-reported integral class $\lambda$, and the adopted quantization premise.

[F1] The R4 CJS carrier defines $F_4=dC_3$ in supergravity units, with dimensionless potential components and a globally defined potential in its source-free exact sector ([[post-eleven-dimensional-cjs-supergravity-action]]). The unit-coupled $G_4$ convention is specified separately in the Postulate; conversion requires an additional membrane coupling $q$, giving $c_3=qC_3$ and $G_4=qF_4$ on the supplied potential patch. The CJS carrier supplies no such coupling.

[F2] The eleven-dimensional spin carrier defines $\mathrm{Spin}^+(10,1)$ and its covering of the oriented, time-orientation-preserving Lorentz group; a spin structure is the supplied equivariant covering $\Lambda:P\to F_{g,\tau}^+Y$ over the identity, on the oriented, time-oriented Lorentzian manifold $(Y,g,\tau)$ ([[def-eleven-dimensional-spin-structure-and-majorana-bundle]]). No existence assertion for an arbitrary Lorentzian manifold is used.

[F3] Pontryagin classes are defined by complexification over a CW-type base under full choice; for a real bundle, $p_1=(-1)c_2(E_{\mathbb C})$ ([[def-pontryagin-classes-by-complexification]]).

[F4] A second-countable smooth manifold has CW homotopy type under the stated choice premise ([[lem-second-countable-smooth-manifolds-have-cw-homotopy-type]]).

[A3] The characteristic-class definition is applied separately on each path-connected CW-type component of $Y$.

[F5] The map $\rho_Y$ is well defined and kills torsion ([[lem-mtheory-integral-to-de-rham-period-map]]).

[A1] Full choice is assumed as required by the pinned Pontryagin-class definition ([[def-axiom-of-choice]]).

[A2] The source-reported spin divisibility $p_1(TY)=2\lambda$ and the shifted flux condition are adopted physical premises; the Pontryagin definition does not prove spin divisibility.

## Remarks

The condition controls the image in real de Rham cohomology only. Applications with torsion, boundaries, localized sources, or singular spacetime require additional relative or differential-cohomology data.
