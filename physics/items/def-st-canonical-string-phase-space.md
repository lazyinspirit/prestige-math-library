---
id: def-st-canonical-string-phase-space
kind: definition
title: Canonical Phase Space for the Flat String
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: physics
library: physics
deps: [def-st-flat-bosonic-string-model]
dependency_roles:
  def-st-flat-bosonic-string-model: formulation-prerequisite
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
physical_scope: "Classical equal-time canonical variables and their Poisson bracket for the flat bosonic string; no quantization or Hilbert-space claim."
sources:
  references:
    - title: "David Tong, Lectures on String Theory, arXiv:0908.0333v3, University of Cambridge Part III lecture notes"
      url: "https://arxiv.org/pdf/0908.0333v3"
      locator: "§2.2, PDF pp. 42–48: canonical variables, constraints, and classical oscillator modes."
    - title: "Barton Zwiebach, A First Course in String Theory, second edition, Cambridge University Press, 2009"
      url: "https://pierre.ag.gerard.web.ulb.be/textbooks/books/A_First_Course_In_String_Theory.pdf"
      locator: "§24.1, printed p. 570, equations (24.4)–(24.6): canonical momentum density and Hamiltonian."
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Fix a constant-$\tau$ slice of the flat-string worldsheet. Its spatial domain is $J=\mathbb R/(2\pi\mathbb Z)$ for a closed string and the interior $J=(0,\pi)$ for an open string. The unreduced canonical data are smooth maps $X:J\to\mathbb R^D$ and smooth target-covector-valued spatial densities $\Pi_\mu(\sigma)\,d\sigma$, with target indices raised and lowered by $\eta$. Here unreduced means that equations of motion, metric constraints and boundary conditions have not yet been imposed on these equal-time data. Under an orientation-preserving spatial reparameterization $\widetilde\sigma=f(\sigma)$, $\widetilde\Pi_\mu(\widetilde\sigma)=\Pi_\mu(\sigma)/f'(\sigma)$ and $\widetilde X(\widetilde\sigma)=X(\sigma)$.

Use units $\hbar=c=1$, dimensionless $\tau,\sigma$, and $[X]=L$. Normalize the canonical pairing by $\Theta_{(X,\Pi)}(\delta X,\delta\Pi)=\int_J\Pi_\mu\delta X^\mu\,d\sigma$, with no additional numerical or tension factor; it has units of action, hence is dimensionless in these units. Thus $[\Pi_\mu]=L^{-1}$, and $\int_J\Pi_\mu\,d\sigma$, when finite, has momentum units. On the open interior this pairing is evaluated on variations with compact support. For an adopted Lagrangian density $\mathcal L$ depending on $\partial_\tau X$ and no higher time derivatives, the physical identification of this covector is the Legendre prescription $\Pi_\mu=\partial\mathcal L/\partial(\partial_\tau X^\mu)$; the kinematic bracket itself does not choose $\mathcal L$.

For a differentiable functional $F(X,\Pi)$, its variational derivatives are the smooth coefficient fields in $\delta F=\int_J[(\delta F/\delta X^\mu)\delta X^\mu+(\delta F/\delta\Pi_\mu)\delta\Pi_\mu]\,d\sigma$. Restrict to functionals with these derivatives periodic on the circle, or compactly supported in the open interior, so the following integral exists. Define

$$\{F,G\}:=\int_J\left(\frac{\delta F}{\delta X^\mu}\frac{\delta G}{\delta\Pi_\mu}-\frac{\delta F}{\delta\Pi_\mu}\frac{\delta G}{\delta X^\mu}\right)d\sigma.$$

For the closed string the fields and test functions are periodic; for the open-string interior, test functions used in smeared functionals have compact support in $(0,\pi)$, so integrations by parts have no endpoint terms. Before suppressing the action unit, $[\{F,G\}]=[F][G]/[\mathrm{action}]$; in the adopted units the bracket has dimension $[F][G]$. This is the classical canonical bracket convention, not a quantum commutator or a positive inner product.

## Definition references

[[def-st-flat-bosonic-string-model]]
