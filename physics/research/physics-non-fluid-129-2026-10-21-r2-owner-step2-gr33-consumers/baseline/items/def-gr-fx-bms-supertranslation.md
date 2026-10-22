---
id: def-gr-fx-bms-supertranslation
kind: definition
title: "Bondi supertranslations and their action on the shear"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 3
physical_scope: "Defines the fixed-frame supertranslation action on formal smooth Bondi data; the full BMS representation and charge algebra are deferred, and no preferred Poincare subgroup is selected."
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
    - title: "Thomas Mädler and Jeffrey Winicour, Bondi-Sachs Formalism, arXiv:1609.01731 (2016), full 31-page PDF: §4, BMS asymptotic symmetry and shear transformation"
      url: "https://arxiv.org/pdf/1609.01731"
verification:
  precheck: n/a
---

## Definition

Assume Countable Choice for the smooth Lorentzian boundary conventions inherited from [[def-gr-fx-bondi-expansion]]. On its formal boundary $\mathcal I^+=I\times S^2$, let $\ell_{\mathcal I}=\partial_u$ be the null-generator direction and let $q_{AB}$ be the unit round metric on the cuts; the degenerate boundary metric is $q_{AB}dx^A dx^B$ with kernel $\mathbb R\ell_{\mathcal I}$. In a fixed Bondi frame with $q_{AB}$ held fixed, an **infinitesimal supertranslation** is the asymptotic vector field parametrized by a smooth real function $f:S^2\to\mathbb R$ whose leading boundary action is $\delta_fu=f(x)$ and whose leading bulk generator is

$$\xi_f=f\,\partial_u-\frac1rD^Af\,\partial_A+\frac12D^AD_Af\,\partial_r+O(r^{-1})\partial_u+O(r^{-2})\partial_A+O(r^{-1})\partial_r.$$

The displayed leading terms preserve Bondi gauge and the fixed round cut metric to the asymptotic orders used here; the omitted terms are not part of this definition. We use the active convention $\delta_f=\mathcal L_{\xi_f}$. Its action on the shear and news of [[def-gr-fx-bondi-expansion]] is

$$\delta_f C_{AB}=fN_{AB}-2D_AD_Bf+q_{AB}D^CD_Cf,\qquad \delta_f N_{AB}=f\,\partial_uN_{AB}.$$

The function $f$ carries length units when the retarded coordinate $u$ is read in SI geometric coordinates; the sphere derivatives and angular coordinates are dimensionless. The Hessian term is trace-free because $q^{AB}q_{AB}=2$. When $N_{AB}=0$, an infinitesimal supertranslation therefore changes a time-independent shear by the sphere trace-free Hessian while leaving the news zero.

## Definition references

[[def-gr-fx-bondi-expansion]]

[[def-countable-choice]]

## Remarks

This definition fixes only the infinitesimal supertranslation action in one Bondi frame. It does not define finite transformations on all of $I\times S^2$, the full Lorentz extension, a BMS representation, a charge algebra, or a preferred Poincare subgroup. In the full BMS setting, a Poincare subgroup requires additional frame or vacuum structure; the supertranslation freedom conjugates different choices. The definition is classical and does not assert a soft-graviton quantization result.
