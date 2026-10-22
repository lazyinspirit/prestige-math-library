---
id: ex-gr-fx10-1
kind: example
title: "Nonflat anisotropic Kasner exponents"
status: published
origin: pipeline
domain: mathematics
dependency_level: 4
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps:
  - def-gr-fx-bianchi-i-data
  - def-gr-fx-bianchi-i-curvature
  - lem-gr-fx-bianchi-i-curvature-components
  - prop-gr-fx-kasner-vacuum
  - prop-gr-fx-bianchi-shear-decay
dependency_roles:
  def-gr-fx-bianchi-i-data: mathematical-premise
  def-gr-fx-bianchi-i-curvature: mathematical-premise
  lem-gr-fx-bianchi-i-curvature-components: mathematical-premise
  prop-gr-fx-kasner-vacuum: mathematical-premise
  prop-gr-fx-bianchi-shear-decay: mathematical-premise
sources:
  references:
    - title: "Rishabh Jha, Introduction to Hamiltonian Formulation of General Relativity and Homogeneous Cosmologies, SciPost Physics Lecture Notes 73 (2023), arXiv:2204.03537v2, Section 4.3.1, equations (159)–(172), printed pp. 36–38 (PDF pp. 37–39)"
      url: "https://arxiv.org/pdf/2204.03537"
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Example

On any nonempty open interval $I\subseteq(0,\infty)$, the exponents $(p_1,p_2,p_3)=(-1/3,2/3,2/3)$ with $a_i=A_i(t/t_0)^{p_i}$, $A_i>0$ lengths in metres and $t_0>0$ a time in seconds, give a nonstatic Ricci-flat diagonal Bianchi I metric. Its directional expansion rates are unequal, the scalar $\sigma^2:=\frac12\sum_i(H_i-H)^2$ equals $1/(3t^2)$, and its curvature component $R_{0101}=-4a_1^2/(9t^2)$ is nonzero. Thus the Riemann tensor is nonzero and the metric is not flat.

## Example references

[[def-gr-fx-bianchi-i-data]]

[[def-gr-fx-bianchi-i-curvature]]

[[lem-gr-fx-bianchi-i-curvature-components]]

[[prop-gr-fx-kasner-vacuum]]

[[prop-gr-fx-bianchi-shear-decay]]

## Facts & Assumptions

**Given:** The stated power-law Bianchi I metric with $A_i>0$, $t_0>0$, and $t\in I\subseteq(0,\infty)$, in the inherited $\mathrm{AC}_\omega$ context.

[A1] The Bianchi I product and quotient construction carries $\mathrm{AC}_\omega$ and no stronger choice principle ([[def-gr-fx-bianchi-i-data]]).

[F1] The rates, mean expansion, volume and shear scalar are $H_i=\dot a_i/a_i$, $H=\frac13\sum_iH_i$, $V=\prod_i a_i$ and $\sigma^2=\frac12\sum_i(H_i-H)^2$ ([[def-gr-fx-bianchi-i-data]]).

[F2] The C2 connection and curvature use the coordinate order $R^a{}_{bcd}$ and the definitions of $\operatorname{Ric}$ and $G$ stated on this page ([[def-gr-fx-bianchi-i-curvature]]).

[F3] $R_{0i0i}=-a_i^2(\dot H_i+H_i^2)$ and $\operatorname{Ric}_{00},\operatorname{Ric}_{ii}$ have the explicit component formulas in the curvature lemma ([[lem-gr-fx-bianchi-i-curvature-components]]).

[F4] For a nonstatic power-law Bianchi I metric, $\operatorname{Ric}=0$ exactly when $\sum_i p_i=\sum_i p_i^2=1$ ([[prop-gr-fx-kasner-vacuum]]).

[F5] With isotropic diagonal source, $V(H_i-H_j)$ is constant and $\sigma^2=C\,V^{-2}$, where $C$ has units $\mathrm{m}^6\mathrm{s}^{-2}$; the zero source is isotropic ([[prop-gr-fx-bianchi-shear-decay]]).

## Verification

**Proof technique:** direct finite substitution and one explicit curvature component.

1.1 Work under the inherited $\mathrm{AC}_\omega$ context [A1]. For $p=(-1/3,2/3,2/3)$, $\sum_i p_i=1$ and $\sum_i p_i^2=1/9+4/9+4/9=1$; none of the exponents is zero, so [F4] gives the Ricci-flat conclusion. [given, A1, F4, algebra]

2.1 The rates are $H_1=-1/(3t)$ and $H_2=H_3=2/(3t)$, so $H=1/(3t)$, $V=A_1A_2A_3(t/t_0)$ and $\sigma^2=\frac12\bigl(4/9+1/9+1/9\bigr)t^{-2}=1/(3t^2)$. By Ricci-flatness from step 1.1 and the definition in [F2], $\mathcal R=0$ and $G^i{}_i=0$ for every $i$. Thus the spatial equations in [F5] hold with $\Lambda=0$ and isotropic source $Q_i=0$, giving $V^2\sigma^2=(A_1A_2A_3)^2/(3t_0^2)$. [step 1.1, F1, F2, F5, algebra]

3.1 From [F3], $R_{0101}=-a_1^2(\dot H_1+H_1^2)=-a_1^2\bigl(1/(3t^2)+1/(9t^2)\bigr)=-4a_1^2/(9t^2)\ne0$ throughout $I$. Thus the metric has nonzero curvature and is not flat, while step 1.1 established Ricci-flatness. [step 1.1, F2, F3, algebra] ∎
