---
id: rem-gts-log-btt-source-proof-route-and-gap
kind: remark
title: Logarithmic BTT source route and local reconstruction
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 5
deps:
- def-axiom-of-choice
- def-gts-log-cy-pair-toric-degeneration-and-scattering-data
- def-gts-log-deformation-functor-over-toric-artin-base
- lem-gts-curved-thom-whitney-control-of-log-deformations
- lem-gts-proper-log-hodge-and-pregluing-total-class-lifting
- lem-gts-curved-bv-all-class-artin-lifting
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-gts-log-cy-pair-toric-degeneration-and-scattering-data: mathematical-premise
  def-gts-log-deformation-functor-over-toric-artin-base: mathematical-premise
  lem-gts-curved-thom-whitney-control-of-log-deformations: mathematical-premise
  lem-gts-proper-log-hodge-and-pregluing-total-class-lifting: mathematical-premise
  lem-gts-curved-bv-all-class-artin-lifting: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
  - title: Simon Felten and Andrea Petracci, The Logarithmic Bogomolov–Tian–Todorov
      Theorem
    url: https://arxiv.org/pdf/2010.13656v3
    locator: Theorem 1.1; §§3.2–3.4; Theorems 3.3 and 3.7, Lemma 3.1, Proposition
      2.8
verification:
  precheck: n/a
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
---

## Statement

Felten–Petracci Theorem 1.1 reports the full logarithmic BTT interface: for any characteristic-zero field $k$, sharp toric monoid $Q$, and proper saturated log-smooth $X_0\to\operatorname{Spec}(Q\to k)$ with trivial relative log-canonical line, the full functor on $\mathbf{Art}_{k\llbracket Q\rrbracket}$ is smooth. The source separates a $Q=0$ Thom–Whitney/Cartan-homotopy argument and a $Q\ne0$ tower-lifting argument; its Theorem 3.7 defers the algebraization of the Chan–Leung–Ma method.

Under AC, the local reconstruction now supplies the missing arguments directly: [[lem-gts-curved-thom-whitney-control-of-log-deformations]] constructs the full curved geometric control, [[lem-gts-proper-log-hodge-and-pregluing-total-class-lifting]] proves central E1 and all-Artin pregluing total-class lifting for proper central fibres, and [[lem-gts-curved-bv-all-class-artin-lifting]] proves lifting of every given classical class. The resulting theorem consumes this explicit chain rather than this source-report remark or a deferred source proof. This correction does not assert that a source citation alone proves its conclusion, nor change the SNC qualification $K_X(D)\cong\mathcal O_X$ into $K_X\cong\mathcal O_X$.

## Source references

[[def-gts-log-cy-pair-toric-degeneration-and-scattering-data]]

[[def-gts-log-deformation-functor-over-toric-artin-base]]

[[lem-gts-curved-thom-whitney-control-of-log-deformations]]

[[lem-gts-proper-log-hodge-and-pregluing-total-class-lifting]]

[[lem-gts-curved-bv-all-class-artin-lifting]]
