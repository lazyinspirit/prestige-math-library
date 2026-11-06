---
id: def-gts-general-landau-ginzburg-matrix-factorization-data
kind: definition
title: General Landau–Ginzburg matrix-factorization data
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
page: gts-hms-landau-ginzburg-categories
dependency_level: 0
deps: []
dependency_roles: {}
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Alexander Polishchuk and Arkady Vaintrob, Chern characters and Hirzebruch–Riemann–Roch formula for matrix factorizations, arXiv:1002.2116v3"
      url: https://arxiv.org/pdf/1002.2116v3
      locator: "§2.1, Definition 2.1.1 and equation (2.3), printed pp. 15–16: the finite-projective commutative-algebra definition and Hom differential. Here the same algebraic construction is applied to finite-rank locally free sheaves and global sheaf maps on the stated ringed space; no singularity, generation or equivalence theorem is imported."
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
---

## Definition

Let $k$ be a field, let $(Y,\mathcal O_Y)$ be a ringed space with commutative structure sheaf of $k$-algebras, and let $W\in\Gamma(Y,\mathcal O_Y)$. A **matrix factorization of $W$** is a finite-rank locally free $\mathbb Z/2$-graded $\mathcal O_Y$-module $E=E^{\bar0}\oplus E^{\bar1}$ together with an odd $\mathcal O_Y$-linear endomorphism $\delta_E$ such that $\delta_E^2=W\operatorname{id}_E$. A morphism of parity $p\in\mathbb Z/2$ from $E$ to another factorization $F$ is a global section of the parity-$p$ part of the sheaf $\mathcal H om_{\mathcal O_Y}(E,F)$. Composition is composition of sheaf maps.

This definition records the objects and graded morphism modules only. The differential and category axioms are separate mathematical claims; no quotient, idempotent completion, equivalence with a singularity category, or generation claim is included here.

