---
id: post-rpm-external-charge-action
kind: postulate
title: "External-field charged-particle action"
status: published
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
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr1.pdf"
      locator: "Author-hosted Chapter 1 excerpt; §1.1 fixed-endpoint Euler–Lagrange variation and §1.2.3, equation (1.20), printed pp. 8–28. Equation (1.20) uses the interaction sign -q A_mu dx^mu; this library adopts +q A(U) with its own electromagnetic tensor convention, so the source is contextual and does not supply the library sign or curved-background assumption. The cited section gives action context only; this postulate separately adopts a prescribed smooth external potential and makes no empirical claim."
    - title: "Eric Poisson, Adam Pound and Ian Vega, The Motion of Point Particles in Curved Spacetime, author manuscript arXiv:1102.0529v3 (2011)"
      url: "https://arxiv.org/pdf/1102.0529v3"
      locator: "Author manuscript, arXiv v3, §18.1, equations (18.3)–(18.7), printed pp. 96–97: the proper-length particle action, electromagnetic interaction e∫A_mu dz^mu, reparameterization invariance, and the Lorentz-force equation. The source varies a coupled field-particle system and warns that its point-particle equation is only formal because the self-field is singular on the worldline; it is cited as context, not as a derivation of this prescribed smooth external-field model."
verification:
  sources_checked:
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    by: "Completed delegated workflow source/scope reviewers and adjudicators; owner accepted existing evidence"
---

## Postulate

Adopt the following motion principle for the massive charged test body of [[def-rpm-charge-spin-model]]. Let $a<b$ be finite real parameters and let $z:[a,b]\to O$ be a $C^2$ future-directed timelike segment in a local potential domain, with its endpoint events fixed in the variations. A change from this parameter interval to another compact interval $[\tilde a,\tilde b]$ is admissible when it is a $C^2$ diffeomorphism $\phi:[\tilde a,\tilde b]\to[a,b]$ with $\phi'(\lambda)>0$ throughout; the same oriented segment is then represented by $\tilde z=z\circ\phi$. In any chosen representation write $\gamma:[\alpha,\beta]\to O$ and let $\lambda$ denote its parameter; the choice $\lambda=\tau$ is included when the curve is parameterized by proper time as in [[def-rpm-charge-spin-model]]. Use seconds for the parameter in SI evaluation.

For each such parameterized segment, the physical trajectories of this idealized model are the stationary points of

$$S[\gamma]=-mc\int_\alpha^\beta\sqrt{-g(\gamma',\gamma') }\,d\lambda+q\int_\alpha^\beta A(\gamma')\,d\lambda,$$

where $A$ is the prescribed $C^2$ external potential, $F=dA$, $m>0$ is constant rest mass, $q$ is constant charge, and $c>0$ is the SI conversion constant. A local fixed-endpoint variation is a $C^2$ family $\gamma_\epsilon:[\alpha,\beta]\to O$, defined for $\epsilon$ near $0$, with $\gamma_0=\gamma$, each $\gamma_\epsilon$ future timelike, and $\gamma_\epsilon(\alpha)=\gamma(\alpha)$ and $\gamma_\epsilon(\beta)=\gamma(\beta)$; the local variation field is supported in a coordinate chart. The segment is stationary when $\left.\frac{d}{d\epsilon}S[\gamma_\epsilon]\right|_{\epsilon=0}=0$ for every such variation. A reparameterization acts on the whole family by $\gamma_\epsilon\mapsto\gamma_\epsilon\circ\phi$. With $\lambda=\tau$ in seconds, coordinates in metres and $A$ in tesla metres, $S$ has units joule seconds. The potential and metric are fixed inputs, independent of the particle path. This is a local action postulate: no global potential is assumed, and a global field equation or global trajectory is not part of the postulate. Reparameterization invariance and its implication for stationarity are proved separately in [[pthm-rpm-external-charge-action-equivalence]].

This model describes a test body: it does not evaluate the body's own field, include self-gravity, or adopt radiation reaction, variable mass or charge, electric dipole forces, or spin-dependent translational forces. The postulate is an adopted model assumption, not a deduction from the electromagnetic field equations or a claim that nature follows this action.

## Remark

For dependent deductions, the adopted premise is that on a finite fixed-endpoint timelike segment in a local potential domain, the model trajectory is stationary for the displayed action. The potential and metric are fixed inputs, $m>0$ and $q$ are constant, and this premise asserts neither a global potential nor global trajectory existence. The admissible parameter changes are the $C^2$ orientation-preserving diffeomorphisms specified above.
