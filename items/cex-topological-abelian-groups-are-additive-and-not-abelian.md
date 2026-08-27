---
id: cex-topological-abelian-groups-are-additive-and-not-abelian
kind: counterexample
title: "Topological abelian groups are additive but not abelian"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-topological-group, def-additive-category, def-abelian-category]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "M. Megrelishvili, Lecture Notes in Topological Groups"
      url: "https://u.math.biu.ac.il/~megereli/TGrNotes070217.pdf"
pipeline_run: frontier-21
---

## Statement refuted

The category of topological abelian groups is abelian.

## Facts & Assumptions

**Given:** The category $\mathbf{TAb}$ of topological abelian groups and
continuous homomorphisms.

[L1] A topological group is a group with continuous multiplication and inverse
([[def-topological-group]]).

[L2] An abelian category is in particular additive, and it requires the
canonical coimage-to-image map to be an isomorphism
([[def-additive-category]], [[def-abelian-category]]).

## Counterexample

1.1 The category $\mathbf{TAb}$ is additive: hom-sets add pointwise, the one-point group is a zero object, and finite products agree with finite coproducts because for finitely many abelian groups the direct product and direct sum carry the same topology. [L1, L2]

2.1 Let $\mathbb R_d$ be the additive group of real numbers with the discrete topology and let $\mathbb R$ carry its usual topology. The identity homomorphism $\iota:\mathbb R_d\to\mathbb R$ is continuous, bijective, has zero kernel and zero cokernel, so its canonical coimage-to-image map is again $\iota$. But $\iota$ is not an isomorphism in $\mathbf{TAb}$, because the inverse map $\mathbb R\to\mathbb R_d$ is not continuous. Hence $\mathbf{TAb}$ is additive but not abelian. [L1, L2, step 1.1] ∎
