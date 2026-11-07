---
id: post-type-i-open-string-sector
kind: postulate
title: "Type I Open String Sector"
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
category: string-theory
library: physics
dependency_level: 12
domain: physics
physical_scope: "Adopted perturbative flat ten-dimensional Type I open-string model input with 32 space-filling D9-branes and the orthogonal Chan–Paton projection. Tadpole cancellation and open-sector anomaly cancellation are separate results."
deps:
  - def-type-i-closed-worldsheet-projection
dependency_roles:
  def-type-i-closed-worldsheet-projection: formulation-prerequisite
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Timo Weigand, Introduction to String Theory, Winter term 2011/12"
      url: "https://www.thphys.uni-heidelberg.de/courses/weigand/Strings11-12.pdf"
      locator: "Chapters 6.5–6.9, printed pp. 140–154: RNS spectrum/GSO, Type I projection, and heterotic construction."
    - title: "Masashi Kawahira, Shotaro Kawanago, Shota Saito, and Hiroki Wada, Anomalies and discrete torsion in Type II and Type I worldsheet theories, arXiv:2608.30774v1"
      url: "https://arxiv.org/pdf/2608.30774v1"
      locator: "§4.1–4.2 and Appendix A.2: DPin structure, closed Type I anomaly decomposition, and explicit exclusion of open strings."
verification:
  precheck: pass
---

## Postulate

Adopt the flat ten-dimensional Type I open-string sector with 32 space-filling D9-branes and Chan–Paton factors in the orthogonal orientifold projection, giving Lie algebra so(32) and global gauge group Spin(32)/Z2. This is an adopted perturbative model input. The cancellation of the Klein-bottle, annulus, and Möbius-strip RR tadpole and the associated open-string gauge/gravitational anomalies are separate deductions, not contained in the postulate.

## Postulate references

[Timo Weigand, Introduction to String Theory, Winter term 2011/12](https://www.thphys.uni-heidelberg.de/courses/weigand/Strings11-12.pdf)

[Masashi Kawahira, Shotaro Kawanago, Shota Saito, and Hiroki Wada, Anomalies and discrete torsion in Type II and Type I worldsheet theories, arXiv:2608.30774v1](https://arxiv.org/pdf/2608.30774v1)

The D9-branes fill all ten target dimensions. Chan–Paton indices are labels on oriented open-string endpoints and the adopted orientifold projection is orthogonal. The source-reported global group is Spin(32)/Z₂, with Lie algebra so(32). The cited source derives the value 32 in its one-loop RR tadpole discussion; here the brane number and Chan–Paton choice are model data, while a local tadpole or open-anomaly proof is not supplied. The Type I anomaly reference explicitly studies only closed worldsheets.
