---
id: post-td-local-equilibrium-entropy-density
kind: postulate
title: Local-equilibrium caloric entropy density
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 5
physical_scope: Fixed-composition local-equilibrium patches of the rigid continuum model; this caloric relation is not asserted for arbitrary nonequilibrium states or every thermodynamic material.
deps: [def-td-rectangular-local-equilibrium-fields, post-td-concave-fundamental-entropy]
dependency_roles:
  def-td-rectangular-local-equilibrium-fields: formulation-prerequisite
  post-td-concave-fundamental-entropy: formulation-prerequisite
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Konstantin Likharev, Essential Graduate Physics: Statistical Mechanics, §§1.3 and 6.5"
      url: https://batch.libretexts.org/print/Letter/Finished/phys-32579/Full.pdf
      locator: Chapter 1, §1.3, heat capacity and thermodynamic entropy; Chapter 6, §6.5, continuum heat conduction
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics
      url: https://courses.physics.ucsd.edu/2010/Spring/physics210a/LECTURES/STATMECH.pdf
      locator: Complete 607-page lecture notes read; Chapter 2, §2.7.7, measuring entropy from heat capacity.
---

## Postulate

For the local-equilibrium medium of [[def-td-rectangular-local-equilibrium-fields]], adopt a local entropy-density map $s:\mathcal T\to\mathbb R$ measured in $\mathrm{J\,m^{-3}\,K^{-1}}$ with
$$\frac{ds}{dT}(T)=\frac{c(T)}{T},$$
where $c(T)=u'(T)>0$ is the volumetric heat capacity and $T>0$ is measured in kelvins. Equivalently, for a fixed reference $T_{\rm ref}\in\mathcal T$ and reference density $s_{\rm ref}\in\mathbb R$ in $\mathrm{J\,m^{-3}\,K^{-1}}$, set
$$s(T)=s_{\rm ref}+\int_{T_{\rm ref}}^T\frac{c(\theta)}{\theta}\,d\theta.$$
The volume integral of this field is the entropy assigned by this continuum model. This adopts a local thermodynamic relation extending the macroscopic entropy framework of [[post-td-concave-fundamental-entropy]]; it does not prove that every evolving medium has such a local entropy density or identify it with an arbitrary finite-system entropy function.

For constant $c(T)=c_0>0$, the adopted relation gives $s(T)=s_{\rm ref}+c_0\log(T/T_{\rm ref})$. This is a restricted constitutive specialization, not a universal equation of state.
