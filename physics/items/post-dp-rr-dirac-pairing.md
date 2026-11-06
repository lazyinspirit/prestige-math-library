---
id: post-dp-rr-dirac-pairing
kind: postulate
title: RR Electric Magnetic Dirac Pairing Convention
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 10
domain: physics
library: physics
deps:
- post-type-ii-dp-brane-dbi-wz-action
- def-supergravity-conventions-and-normalizations
- post-type-iia-two-derivative-supergravity-action
- post-type-iib-two-derivative-supergravity-pseudoaction
dependency_roles:
  post-type-ii-dp-brane-dbi-wz-action: formulation-prerequisite
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
  post-type-iia-two-derivative-supergravity-action: formulation-prerequisite
  post-type-iib-two-derivative-supergravity-pseudoaction: formulation-prerequisite
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
physical_scope: Adopted minimal Dirac quantization condition for electric and magnetic charges of a mutually dual RR field
  in the stated source normalization; excludes a global flux-quantization derivation and separately flags the self-dual D3
  field.
sources:
  references:
  - title: J. Polchinski, S. Chaudhuri, and C. V. Johnson, Notes on D-Branes, arXiv:hep-th/9602052v2
    url: https://arxiv.org/pdf/hep-th/9602052v2
    locator: Lecture IV §4.1, equations (4.1)–(4.2), PDF pp. 31–32; RR electric/magnetic Dirac quantization and D-brane charge
      units.
  - title: J. Polchinski, Dirichlet-Branes and Ramond-Ramond Charges, arXiv:hep-th/9510017v3
    url: https://arxiv.org/pdf/hep-th/9510017v3
    locator: §2, PDF pp. 2–4; RR charge normalization and Dirac quantization.
verification:
  precheck: pending
  sources_checked:
    date: 2026-11-05
    scope: Recorded source, statement and proof-status review for this postulate in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step5-substantive-review; delegated by /root under owner authorization
---

## Postulate

For a mutually electric/magnetic RR pair associated with a Dp and D$(6-p)$, $0\le p\le6$, $p\ne3$, write the independent field-strength kinetic term as $-\frac{\alpha_p}{2}\int F_{p+2}\wedge *F_{p+2}$, where $\alpha_p>0$ is its kinetic normalization. The adopted massless Type IIA and Type IIB bulk actions give $\alpha_p=(2\kappa_0^2)^{-1}$ for the independent RR forms; the same normalization is used for their dual fields. In the source normalization of [[post-type-ii-dp-brane-dbi-wz-action]], set the electric and magnetic charge units to $q_e=\mu_p$ and $q_m=\mu_{6-p}$. Adopt the Dirac lattice
$$\frac{q_eq_m}{\alpha_p}=2\pi n,\qquad n\in\mathbb Z.$$
Thus the dimensionless source-normalized Dp pairing is $2\kappa_0^2\mu_p\mu_{6-p}=2\pi n$; a pair with product $2\pi$ is the minimal nonzero Dirac unit. This is a quantization postulate, not a consequence of local supergravity Bianchi identities alone. It does not derive global RR flux quantization. The Type IIB self-dual five-form case at $p=3$ requires a separate treatment and is not inferred from this convention.

## Statement References

[Polchinski, Chaudhuri, and Johnson, Lecture IV §4.1](https://arxiv.org/pdf/hep-th/9602052v2)

[Polchinski, §2](https://arxiv.org/pdf/hep-th/9510017v3)
