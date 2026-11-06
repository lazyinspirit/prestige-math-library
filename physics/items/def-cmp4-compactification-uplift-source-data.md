---
id: def-cmp4-compactification-uplift-source-data
kind: definition
title: Compactification-specific uplift source data in a 4D moduli EFT
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 15
domain: physics
library: physics
category: string-theory
page: cmp-susy-breaking-soft-terms
deps:
  - def-cmp4-compactification-derived-moduli-eft-data
dependency_roles:
  def-cmp4-compactification-derived-moduli-eft-data: formulation-prerequisite
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
physical_scope: "A definition of source data for a compactification-derived, two-derivative four-dimensional Einstein-frame EFT. It assigns no universal source scaling and asserts no localized solution, uplift, or controlled string vacuum."
empirical_premises: []
sources:
  references:
    - title: "S. Kachru, R. Kallosh, A. Linde, and S. Trivedi, de Sitter Vacua in String Theory, arXiv:hep-th/0301240v2"
      url: "https://arxiv.org/pdf/hep-th/0301240v2"
      locator: "§III.B, equations (15)–(16), printed pp. 5–6; a source-specific one-modulus contribution with a warped coefficient."
    - title: "L. McAllister and F. Quevedo, Moduli Stabilization in String Theory, arXiv:2310.20559v1"
      url: "https://arxiv.org/pdf/2310.20559v1"
      locator: "§4.3, equations (116)–(123), printed pp. 36–38; warped anti-D3 uplift in the review's declared convention."
    - title: "L. McAllister, S. Moritz, R. Nally, and A. Schachner, Candidate de Sitter Vacua, arXiv:2406.13751v2"
      url: "https://arxiv.org/pdf/2406.13751v2"
      locator: "§3.3, equations (3.31)–(3.34), printed pp. 27–29; leading-order source normalization and control assumptions."
---

## Definition

Fix a local field patch and the four-dimensional Einstein-frame normalization of a compactification-derived two-derivative moduli EFT. A **compactification-specific uplift source datum** is a tuple consisting of a declared source sector and its contribution
$$\Delta V_{\rm src}(Z,\bar Z)=D f(Z,\bar Z)$$
to the scalar potential on that patch. Here $Z=(Z^I)$ is the stated list of retained complex scalar coordinates, $D$ is a real coefficient with units of energy density, and $f$ is a real dimensionless profile in the same coordinates. The tuple records the coefficient normalization and its frame conversion; whether the source is localized or smeared; the warp factor used; worldvolume fields and charges; the induced or shifted tadpole data; and the backreaction and correction terms retained, omitted, or separately bounded.

The profile and coefficient depend on the source action, geometry, warp convention, modulus coordinate, and Weyl normalization. This definition assigns no universal power of the total volume and does not identify a nilpotent-superfield parameterization with a localized string source. It is an EFT input record, not a derivation of that input.

## Definition references

[Kachru, Kallosh, Linde, and Trivedi, §III.B](https://arxiv.org/pdf/hep-th/0301240v2)

[McAllister and Quevedo, §4.3](https://arxiv.org/pdf/2310.20559v1)

[McAllister, Moritz, Nally, and Schachner, §3.3](https://arxiv.org/pdf/2406.13751v2)

[[def-cmp4-compactification-derived-moduli-eft-data]]
