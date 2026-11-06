---
id: post-green-schwarz-superstring-model
kind: postulate
title: "Green Schwarz Superstring Model"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
category: string-theory
library: physics
dependency_level: 2
domain: physics
physical_scope: "Adopted flat ten-dimensional Type II Green–Schwarz worldsheet action in Lorentzian conformal gauge. It asserts the source-defined classical kappa symmetry but no covariant quantum measure or quantum-consistency result."
deps:
  - def-st-string-tension-alpha-prime
dependency_roles:
  def-st-string-tension-alpha-prime: formulation-prerequisite
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Nathan Berkovits, Origin of the Pure Spinor and Green-Schwarz Formalisms, arXiv:1503.03080v3"
      url: "https://arxiv.org/pdf/1503.03080v3"
      locator: "§3.3, PDF p. 18 (printed p. 17), equations (3.35)–(3.40): conformal-gauge GS action and kappa transformations."
    - title: "Nathan Berkovits, ICTP Lectures on Covariant Quantization of the Superstring, arXiv:hep-th/0209059v1"
      url: "https://arxiv.org/pdf/hep-th/0209059v1"
      locator: "§§3.1–3.2, printed pp. 17–22: Green–Schwarz constraints, pure-spinor variables, and flat-space quantization."
verification:
  precheck: pass
  sources_checked:
    date: 2026-11-05
    scope: Recorded source, statement and proof-status review for this postulate in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step5-substantive-review; delegated by /root under owner authorization
---

## Postulate

Adopt the flat ten-dimensional Type II Green–Schwarz superstring as a classical worldsheet model. Let $\Omega\subset\mathbb R^2$ be an open Lorentzian worldsheet coordinate patch with dimensionless coordinates $(\tau,\sigma)$; all displayed action densities are integrated over $\Omega$. Let $M=\mathbb R^{1,9}$ with $\eta=\operatorname{diag}(-,+,\ldots,+)$, and fix a finite-dimensional real Grassmann algebra $\Lambda$. The bosonic field is a smooth even Grassmann-valued map $X:\Omega\to\Lambda_{\bar0}\otimes\mathbb R^{1,9}$; its body $X_{\mathrm{body}}:\Omega\to M$ is obtained by the augmentation $\Lambda\to\mathbb R$ that kills all Grassmann generators. Extend $\eta$ and the gamma pairings coefficientwise over $\Lambda$. This even field space includes the nilpotent variations $\delta_\kappa X$ displayed below. The fermionic fields are smooth maps $\theta^I:\Omega\to\Lambda_{\bar 1}\otimes S_I$ for $I=1,2$, where each $S_I$ is a fixed real sixteen-dimensional Majorana–Weyl module of $\operatorname{Spin}(1,9)$; the two modules have opposite chiralities in Type IIA and equal chiralities in Type IIB. Grassmann-valued integrals are taken coefficientwise. The action below is the Lorentzian conformal-gauge expression; its local kappa symmetry is the symmetry of the worldsheet-metric formulation with the inherited constraints and metric compensation specified below.

Use worldsheet orientation $d\tau\wedge d\sigma$ (so $\epsilon^{\tau\sigma}=+1$). The coordinates $X^m$ have length dimension one and the Grassmann-odd spinors have length dimension $1/2$. Use symmetric ten-dimensional gamma matrices for each chirality, with
$$\gamma_m^{\alpha\beta}\gamma_{n\beta\gamma}+\gamma_n^{\alpha\beta}\gamma_{m\beta\gamma}=2\eta_{mn}\delta^\alpha_\gamma,$$
and the corresponding hatted-index identity for $\theta^2$. Set $\partial_\pm=\partial_\tau\pm\partial_\sigma$ and define the two supersymmetric pullbacks
$$\Pi_\pm^m=\partial_\pm X^m+\frac12\left(\theta^1\gamma^m\partial_\pm\theta^1+\theta^2\gamma^m\partial_\pm\theta^2\right).$$
Adopt $\alpha'>0$ with dimension $[\alpha']=\mathrm{length}^2$, and set $T=1/(2\pi\alpha')$. Adopt the conformal-gauge action
$$S_{GS}=T\int_\Omega d\tau d\sigma\left[-\frac12\Pi_+^m\Pi_{-m}-\frac12\partial_\tau X^m(\theta^1\gamma_m\partial_\sigma\theta^1-\theta^2\gamma_m\partial_\sigma\theta^2)+\frac12\partial_\sigma X^m(\theta^1\gamma_m\partial_\tau\theta^1-\theta^2\gamma_m\partial_\tau\theta^2)+\frac14(\theta^1\gamma_m\partial_\tau\theta^1)(\theta^2\gamma^m\partial_\sigma\theta^2)-\frac14(\theta^1\gamma_m\partial_\sigma\theta^1)(\theta^2\gamma^m\partial_\tau\theta^2)\right],$$
The Wess–Zumino terms use the actual $\partial_\tau,\partial_\sigma$ derivatives in Berkovits (3.36); $\Pi_-$ and $\Pi_+$ are respectively that source's $\Pi$ and $\overline\Pi$. A bilinear $\theta^I\gamma^m\partial_a\theta^I$ uses the matching lower-index block.

Retain the two metric constraints
$$\Pi_-^m\Pi_{-m}=0,\qquad \Pi_+^m\Pi_{+m}=0.$$
For smooth compactly supported Grassmann-odd parameter fields $\kappa^1:\Omega\to\Lambda_{\bar1}\otimes S_1^*$ and $\kappa^2:\Omega\to\Lambda_{\bar1}\otimes S_2^*$ of length dimension $-1/2$, the adopted kappa transformations are
$$\delta_\kappa\theta^{1\alpha}=\Pi_-^m(\gamma_m)^{\alpha\beta}\kappa^1_\beta,\qquad \delta_\kappa\theta^{2\hat\alpha}=\Pi_+^m(\gamma_m)^{\hat\alpha\hat\beta}\kappa^2_{\hat\beta},\qquad \delta_\kappa X^m=\frac12\bigl(\delta_\kappa\theta^1\gamma^m\theta^1+\delta_\kappa\theta^2\gamma^m\theta^2\bigr).$$
The induced pullback variations, obtained from their definitions and Grassmann antisymmetry, are
$$\delta_\kappa\Pi_\pm^m=\delta_\kappa\theta^1\gamma^m\partial_\pm\theta^1+\delta_\kappa\theta^2\gamma^m\partial_\pm\theta^2.$$
On the metric-constraint surface they obey the chiral projection constraints
$$\Pi_{-m}(\gamma^m)_{\alpha\beta}\delta_\kappa\theta^{1\beta}=0,\qquad \Pi_{+m}(\gamma^m)_{\hat\alpha\hat\beta}\delta_\kappa\theta^{2\hat\beta}=0,$$
because the two successive gamma contractions equal $\Pi_-^2$ and $\Pi_+^2$, respectively. These are the spinorial constraints parameterized by (3.37)–(3.38) in the source.

The metric compensation is part of the adopted local symmetry. Denote the two zweibein components in the parent worldsheet action by $e,\widehat e$, normalized so that their first metric variation at conformal gauge couples as $T\int_\Omega d\tau d\sigma\,(\delta e\,\Pi_-^2+\delta\widehat e\,\Pi_+^2)$. Their transformations in this gauge are
$$\delta_\kappa e=\kappa^1_\alpha\partial_-\theta^{1\alpha},\qquad \delta_\kappa\widehat e=\kappa^2_{\hat\alpha}\partial_+\theta^{2\hat\alpha}.$$
For this source comparison, write $S_L$ for Berkovits's auxiliary $L$-dependent constraint term, which is not a field term in the adopted fixed-metric action. With compactly supported kappa parameters, the source's equation (3.40) is its variation,
$$\delta_\kappa S_L=+T\int_\Omega d\tau d\sigma\,\bigl[\Pi_-^2(\kappa^1_\alpha\partial_-\theta^{1\alpha})+\Pi_+^2(\kappa^2_{\hat\alpha}\partial_+\theta^{2\hat\alpha})\bigr].$$
Berkovits states that this cancels the variation of the Green–Schwarz action, so the latter has the opposite variation,
$$\delta_\kappa S_{GS}=-T\int_\Omega d\tau d\sigma\,\bigl[\Pi_-^2(\kappa^1_\alpha\partial_-\theta^{1\alpha})+\Pi_+^2(\kappa^2_{\hat\alpha}\partial_+\theta^{2\hat\alpha})\bigr].$$
This is canceled by the displayed zweibein variation before imposing conformal gauge, and the net variation vanishes on the retained metric constraints. Thus the fixed-metric action is not asserted invariant off shell under an arbitrary local parameter while the metric variation is discarded. Parameters preserving the gauge must also preserve its zweibein gauge condition, or be accompanied by a compensating worldsheet gauge transformation. The auxiliary twistor-like variables in the source's (3.35) and (3.39) are not additional fields of the adopted GS action; they are the source's route to these classical transformations.

This postulate asserts these classical flat-space action, constraints and local gauge transformations. It does not assert a covariant quantum measure or a quantum-consistency result.

## Postulate references

[[def-st-string-tension-alpha-prime]]

[Nathan Berkovits, Origin of the Pure Spinor and Green-Schwarz Formalisms, arXiv:1503.03080v3, §3.3, (3.35)–(3.40)](https://arxiv.org/pdf/1503.03080v3)

[Nathan Berkovits, ICTP Lectures on Covariant Quantization of the Superstring, arXiv:hep-th/0209059v1, §§3.1–3.2](https://arxiv.org/pdf/hep-th/0209059v1)
