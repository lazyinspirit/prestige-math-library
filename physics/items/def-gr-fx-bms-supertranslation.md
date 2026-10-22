---
id: def-gr-fx-bms-supertranslation
kind: definition
title: "Bondi supertranslations and their action on the shear"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 3
physical_scope: "Defines the fixed-frame supertranslation action on formal smooth Bondi data; the full asymptotic symmetry group and its charge algebra are outside scope, and no distinguished ten-parameter subgroup of Minkowski translations and proper orthochronous Lorentz transformations is selected."
deps:
  - def-gr-fx-bondi-expansion
  - def-countable-choice
dependency_roles:
  def-gr-fx-bondi-expansion: mathematical-premise
  def-countable-choice: mathematical-premise
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Andrew Strominger, Lectures on the Infrared Structure of Gravity and Gauge Theory, Princeton University Press (2018), full lecture notes arXiv:1703.05448: §5.2.1, Eqs. (5.2.1)-(5.2.6), and §5.2.1 discussion of the absence of a preferred Poincare subgroup"
      url: "https://arxiv.org/pdf/1703.05448"
    - title: "Thomas Mädler and Jeffrey Winicour, Bondi-Sachs Formalism, arXiv:1609.01731 (2016), full 31-page PDF: §4, Eqs. (78)-(80), BMS generators and the finite supertranslation of retarded time and shear"
      url: "https://arxiv.org/pdf/1609.01731"
verification:
  precheck: n/a
---

## Definition

Assume Countable Choice for the smooth Lorentzian boundary conventions inherited from [[def-gr-fx-bondi-expansion]]. On its formal boundary $\mathcal I^+=I\times S^2$, let $\ell_{\mathcal I}=\partial_u$ be the null-generator direction and let $q_{AB}$ be the unit round metric on the cuts; the degenerate boundary metric is $q_{AB}dx^A dx^B$ with kernel $\mathbb R\ell_{\mathcal I}$. A **fixed Bondi frame** here means the chosen Bondi-Sachs chart and gauge $(u,r,x^A)$ of [[def-gr-fx-bondi-expansion]], including $g_{rr}=g_{rA}=0$ and $\det\gamma=\det q$, with the round cut metric $q_{AB}$ held fixed. It is a chart/gauge choice, not an observer congruence or tetrad. An **infinitesimal supertranslation** is the asymptotic vector field parametrized by a smooth real function $f:S^2\to\mathbb R$ whose leading boundary action is $\delta_fu=f(x)$ and whose leading bulk generator is

$$\xi_f=f\,\partial_u-\frac1rD^Af\,\partial_A+\frac12D^AD_Af\,\partial_r+O(r^{-1})\partial_u+O(r^{-2})\partial_A+O(r^{-1})\partial_r.$$

The displayed leading terms preserve Bondi gauge and the fixed round cut metric to the asymptotic orders used here; the omitted terms are not part of this definition. We use the active convention $\delta_f=\mathcal L_{\xi_f}$. Its action on the shear and news of [[def-gr-fx-bondi-expansion]] is

$$\delta_f C_{AB}=fN_{AB}-2D_AD_Bf+q_{AB}D^CD_Cf,\qquad \delta_f N_{AB}=f\,\partial_uN_{AB}.$$

The **finite active boundary supertranslation** with parameter $f$ is the map $\Phi_f(u,x)=(u+f(x),x)$ on
$$\mathcal D_f:=\{(u,x)\in I\times S^2:u+f(x)\in I\}.$$
It is a diffeomorphism from $\mathcal D_f$ onto $\mathcal D_{-f}$, with inverse $\Phi_{-f}$. If $I=\mathbb R$, it is a diffeomorphism of all of $\mathcal I^+$; for a shorter retarded-time interval the action is defined on this overlap only. In the same active convention, its induced action on the boundary shear and news is

$$C^{(f)}_{AB}(u,x)=C_{AB}(u+f(x),x)-2D_AD_Bf(x)+q_{AB}D^CD_Cf(x),\qquad N^{(f)}_{AB}(u,x)=N_{AB}(u+f(x),x),\quad (u,x)\in\mathcal D_f.$$

Differentiating these formulas for the parameter $tf$ at $t=0$ recovers the infinitesimal formulas above. This definition gives only the boundary action and induced shear/news; it does not specify the full finite bulk coordinate transformation.

The function $f$ carries length units when the retarded coordinate $u$ is read in SI geometric coordinates; the sphere derivatives and angular coordinates are dimensionless. The Hessian term is trace-free because $q^{AB}q_{AB}=2$. When $N_{AB}=0$, an infinitesimal supertranslation therefore changes a time-independent shear by the sphere trace-free Hessian while leaving the news zero.

## Definition references

[[def-gr-fx-bondi-expansion]]

[[def-countable-choice]]

## Remarks

This definition gives the infinitesimal action and the finite boundary action on its natural domain in one Bondi frame. Mädler–Winicour write the finite retarded-coordinate change passively; the active sign used here is fixed by the infinitesimal convention above. The full asymptotic symmetry group, its Lorentz extension and charge algebra remain outside scope. The ten-parameter subgroup referred to here is $\mathbb R^{1,3}\rtimes SO^+(1,3)$, where $SO^+(1,3)=\{A\in GL(4,\mathbb R):A^{\mathsf T}\eta A=\eta,\det A=1,\ A\text{ preserves the future cone}\}$ and $\eta=\operatorname{diag}(-1,1,1,1)$. In a larger asymptotically flat framework, selecting a particular embedding of this subgroup requires additional frame or vacuum structure; different choices are related by supertranslations. The definition is classical and does not assert a soft-graviton quantization result.
