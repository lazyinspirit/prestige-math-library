---
id: rem-qft-formal-renormalization-physical-status
kind: remark
domain: physics
library: physics
title: Scope of the Euclidean distribution-extension identity
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
dependency_level: 5
deps:
  - prop-qft-four-dimensional-log-scale-anomaly
  - def-axiom-of-choice
dependency_roles:
  prop-qft-four-dimensional-log-scale-anomaly: mathematical-premise
  def-axiom-of-choice: mathematical-premise
physical_scope: "A scope clarification for one four-dimensional Euclidean distribution-extension identity; it asserts no measured running parameter, Lorentzian observable, or continuum field theory."
empirical_premises: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Quantum Field Theory, author-hosted lecture notes, Chapter 3, Interacting Fields"
      url: "https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S3.html"
      locator: "Complete Chapter 3 HTML, perturbative interaction discussion."
---

## Physical status

Assume the Axiom of Choice ([[def-axiom-of-choice]]) as in
[[prop-qft-four-dimensional-log-scale-anomaly]]. That proposition gives an
exact Euclidean distribution-extension identity for the specified punctured
kernel $u(x)=1/(16\pi^4|x|^4)$: changing its cutoff scale changes the
extension by $(8\pi^2)^{-1}\log(\mu/\nu)\delta_0$. Its statement
explicitly classifies it as a Euclidean distribution identity. By itself it
does not say that an experimentally measured parameter changes with energy
scale, choose which extension a physical model uses, or define a measurement
procedure. It constructs no Lorentzian field theory. This remark asserts
neither existence nor nonexistence of a field theory obtained by taking a
continuum limit and supplies no empirical claim.
