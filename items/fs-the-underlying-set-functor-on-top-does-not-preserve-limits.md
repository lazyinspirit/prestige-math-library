---
id: fs-the-underlying-set-functor-on-top-does-not-preserve-limits
kind: false-statement
title: "FALSE: the underlying-set functor Top→Set fails to preserve some small limit"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-top-is-complete-and-cocomplete-and-its-underlying-set-functor-preserves-both, def-preservation-reflection-creation-continuity-and-cocontinuity]
justified_by: []
aliases: []
landmark: false
proof_strategy: theorem-refutation
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, Proposition 3.6.2"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Statement refuted

The underlying-set functor $U:\mathbf{Top}\to\mathbf{Set}$ does not preserve
all small limits.

## Facts & Assumptions

**Given:** The underlying-set functor $U$.

[L1] $\mathbf{Top}$ is complete, and $U$ preserves every small limit and
colimit
([[thm-top-is-complete-and-cocomplete-and-its-underlying-set-functor-preserves-both]]).

[F1] Preservation means the image of every limiting cone is limiting
([[def-preservation-reflection-creation-continuity-and-cocontinuity]]).

## Refutation

**Proof technique:** apply the proved construction.

1.1 For each small Top-diagram, [L1] constructs its limit on exactly the underlying Set-limit and adds the initial topology. Applying $U$ removes that topology and leaves the Set-limit cone unchanged. [L1]

2.1 Therefore every image cone is limiting in $\mathbf{Set}$, which is preservation by [F1]. The asserted counterexample cannot exist, so the statement is false. [F1, step 1.1]

3.1 This does not claim reflection: a Set-limiting underlying cone need not already carry the initial topology required for a Top-limit. [F1] ∎
