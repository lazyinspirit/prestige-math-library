---
id: post-heterotic-type-i-ten-dimensional-n1-supergravity-action
kind: postulate
title: Heterotic Type I Ten Dimensional N1 Supergravity Action
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 6
domain: physics
library: physics
deps:
  - def-supergravity-conventions-and-normalizations
dependency_roles:
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
physical_scope: "Adopted ten-dimensional N=1 heterotic and SO(32) Type-I low-energy field-content and tree-level dilaton-weight data, in separate string-frame branches. This does not specify every component coefficient or trace conversion, identify the branches by S-duality, or assert a solution."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Washington Taylor, TASI Lectures on Supergravity and String Vacua in Various Dimensions"
      url: "https://arxiv.org/pdf/1104.2051v2"
      locator: "§§2.1–2.4, especially §§2.2 and 2.4, printed pp. 9–16, for ten-dimensional N=1 field content, Type-I gauge weight, and anomaly context; §3.3.4, printed pp. 28–29, for the heterotic Spin(32)/Z2 global form."
      source_key: "R4:R4-SUGRA-13:S1"
    - title: "Mohammad R. Garousi, S-duality in higher-derivative corrections of heterotic supergravity"
      url: "https://arxiv.org/pdf/2502.00357v5"
      locator: "§1, equation (1), printed p. 1, for the genus/boundary coupling expansion; equations (3)–(6), especially leading actions (4)–(5), printed pp. 2–3, for the separate heterotic and Type-I field, RR two-form, and dilaton-weight conventions."
      source_key: "R4:R4-SUGRA-13:S2"
verification:
  precheck: pass
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

Adopt two separate perturbative ten-dimensional $N=1$ supergravity-plus-Yang–Mills low-energy branches on a smooth oriented Lorentzian ten-manifold $(M,g)$ with signature $(-,+,\ldots,+)$. The metric $g$ is smooth, and in each branch the dilaton is a smooth real dimensionless scalar field $\Phi:M\to\mathbb R$; denote the separate heterotic and Type-I dilatons by $\Phi_H$ and $\Phi_I$. The heterotic branch has gauge group $G_H=E_8\times E_8$ or $\operatorname{Spin}(32)/\mathbb Z_2$; the $SO(32)$ Type-I branch has gauge group $G_I=SO(32)$. For the group $G$ of either branch, let $P_G\to M$ be a supplied smooth principal $G$-bundle with a smooth connection $A$. On a local trivialization $U\subseteq M$, $A$ is a $\mathfrak g$-valued one-form and its curvature is the $\mathfrak g$-valued two-form $F_A=dA+A\wedge A$; globally $F_A\in\Omega^2(M,\operatorname{ad}P_G)$. We use this geometric connection normalization. In natural units with length-valued spacetime coordinates, the connection one-form is dimensionless, so its components have dimension length$^{-1}$ and the curvature components have dimension length$^{-2}$. A source-specific rescaling of component gauge fields, and all trace and kinetic-term normalizations, are left unspecified unless separately supplied. A spin structure is supplied in each branch; no existence of such a structure is asserted. If $S_+$ and $S_-$ are its real Majorana–Weyl spin bundles in the convention of [[def-supergravity-conventions-and-normalizations]], the smooth gravitino, dilatino, and adjoint gaugino have types $\psi\in\Gamma(S_+\otimes T^*M)$, $\lambda\in\Gamma(S_-)$, and $\chi\in\Gamma(S_+\otimes\operatorname{ad}P_G)$, respectively. The two-form sector has local smooth potentials: in the heterotic branch the NS–NS potential $B_2\in\Omega^2(U)$, and in the Type-I branch the Ramond–Ramond potential $C_2\in\Omega^2(U)$. Both heterotic closed gravity/dilaton terms and the gauge kinetic term have tree-level multiplier $e^{-2\Phi_H}$. In the Type-I branch the closed gravity/dilaton terms have tree-level multiplier $e^{-2\Phi_I}$, and the open-string disk gauge kinetic term has multiplier $e^{-\Phi_I}$. Here tree-level means the leading perturbative string-coupling contribution: the sphere for closed-string terms and the disk for the Type-I open-string gauge term. This postulate fixes the stated fields and dilaton weights, not all component coefficients or trace normalizations; it does not assert an S-duality map or equality of the two branch actions.

## Postulate references

[Washington Taylor, §§2.2, 2.4, and 3.3.4](https://arxiv.org/pdf/1104.2051v2)

[Mohammad R. Garousi, §1](https://arxiv.org/pdf/2502.00357v5)

## Facts & Assumptions

**Given:** Each branch is taken separately in its weak-coupling, low-energy string-frame regime. The dilatons $\Phi_H$ and $\Phi_I$ are dimensionless; $\alpha'>0$ has dimension length squared, and $\hbar=c=1$.

[A1] [[def-supergravity-conventions-and-normalizations]] gives the signature, unit, form-norm, ten-dimensional $\alpha'$ and coupling, gravitational-normalization, and frame conventions used here. Its full current definition was inspected and matches these conventions, and it is now listed in batch 56's A-page manifest. These are the adopted conventions used by this postulate; its physical conclusions remain conditional on the stated low-energy branch. The actual source-normalization symbol $\kappa$ in Garousi is not identified with $\kappa_0$ in this item.

## Remarks

The two actions are adopted as source-reported low-energy frameworks. Garousi's separate field dictionary is context only; no duality map is assumed in this item. Higher-derivative gauge and curvature terms, their trace conversions, and a complete fermionic component action require their own exact conventions before use.
