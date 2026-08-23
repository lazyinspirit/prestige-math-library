---
id: fs-every-conservative-right-adjoint-is-monadic
kind: false-statement
title: "FALSE: every conservative right adjoint is monadic"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cex-a-conservative-functor-that-is-not-monadic, def-conservative-functor, def-monadic-and-strictly-monadic-functor]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "D. Mehrle, Category Theory Part III, Example 5.20(d)"
      url: "https://pi.math.cornell.edu/~dmehrle/notes/partiii/cattheory_partiii_notes.pdf"
pipeline_run: null
---

## Statement

**False claim:** every conservative right adjoint is monadic.

## Facts & Assumptions

**Given:** The underlying-set functor from torsion-free abelian groups.

[L1] Torsion-free abelian groups give a conservative right adjoint that is not monadic ([[cex-a-conservative-functor-that-is-not-monadic]]).

[L2] A conservative functor reflects isomorphisms ([[def-conservative-functor]]).

## Refutation

**Proof technique:** direct.

1.1 Apply the false implication to the underlying-set functor $U:\mathbf{TFAb}\to\mathbf{Set}$ from [L1]. [L1]

1.2 The functor has a left adjoint and reflects isomorphisms, so it is a conservative right adjoint and satisfies the antecedent by [L1] and [L2]. [L1, L2]

2.1 Its comparison misses abelian groups with nonzero torsion, so [L1] says it is not monadic. The antecedent is true and the conclusion false for this functor, refuting the claim. [L1, step 1.2] ∎
