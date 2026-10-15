---
id: post-rpm-external-charge-action
kind: postulate
title: "External-field charged-particle action"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 2
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Adopted dynamics for one massive charged test body on a prescribed smooth time-oriented Lorentzian background, on finite timelike curve segments contained in a local potential domain. The background metric and external electromagnetic two-form are fixed; the model excludes self-field evaluation, self-gravity, radiation reaction, variable mass or charge, and any global-potential or global-solution claim."
deps:
  - def-rpm-charge-spin-model
dependency_roles:
  def-rpm-charge-spin-model: formulation-prerequisite
sources:
  references:
    - title: "David Tong, General Relativity, author-hosted Chapter 1 lecture-note excerpt"
      url: "https://www.davidtong.org/pdfs/teaching/general-relativity/gr1.pdf"
      locator: "Complete 55-page Chapter 1 excerpt; §1.1 fixed-endpoint Euler–Lagrange variation and §1.2.3, especially equation (1.21), printed pp. 8–28. The curved local variation is proved from inspected mathematical suppliers."
    - title: "Eric Poisson, Adam Pound and Ian Vega, The Motion of Point Particles in Curved Spacetime, author manuscript arXiv:1102.0529v3 (2011)"
      url: "https://arxiv.org/html/1102.0529v3"
      locator: "Complete author manuscript, arXiv v3, §5.2.1: curved charged-particle interaction/action and worldline equation, with the singular self-field limitation kept separate from the prescribed external-field model."
verification: {}
---

## Postulate

Adopt the following motion principle for the massive charged test body of [[def-rpm-charge-spin-model]]. On any finite segment $z:[a,b]\to O$ in a local potential domain, with $z$ a $C^2$ future-timelike curve and fixed endpoints, the physical trajectories of this idealized model are the stationary points of

$$S[z]=-mc\int_a^b\sqrt{-g(z',z') }\,d\lambda+q\int_a^b A(z')\,d\lambda,$$

where $\lambda$ is an orientation-preserving curve parameter (use seconds for SI evaluation), $A$ is the prescribed $C^2$ external potential, $F=dA$, $m>0$ is constant rest mass, $q$ is constant charge, and $c$ is the SI conversion constant. With $\lambda=\tau$ in seconds, coordinates in metres and $A$ in tesla metres, $S$ has units joule seconds. The potential and metric are fixed inputs, independent of the particle path. This is a local action postulate: no global potential is assumed, and a global field equation or global trajectory is not part of the postulate. Its Euler–Lagrange consequence is proved separately in [[pthm-rpm-external-charge-action-equivalence]].

This model describes a test body: it does not evaluate the body's own field, include self-gravity, or adopt radiation reaction, variable mass or charge, electric dipole forces, or spin-dependent translational forces. The postulate is an adopted model assumption, not a deduction from the electromagnetic field equations or a claim that nature follows this action.

## Remark

For dependent deductions, the adopted premise is that on a finite fixed-endpoint timelike segment in a local potential domain, the model trajectory is stationary for the displayed action. The potential and metric are fixed inputs, $m>0$ and $q$ are constant, and this premise asserts neither a global potential nor global trajectory existence.
