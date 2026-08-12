---
id: fs-colimits-in-grp-are-computed-on-underlying-sets
kind: false-statement
title: "FALSE: colimits in Grp are computed by taking the Set-colimit of the underlying diagram"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-grp-is-complete-and-cocomplete, prop-empty-limits-and-colimits-are-terminal-and-initial-objects, prop-groups-and-homomorphisms-form-category-grp, prop-sets-and-functions-form-category-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: empty-diagram
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, Section 3.6"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Statement refuted

The underlying set of every colimit in $\mathbf{Grp}$ is the colimit of the
underlying Set-diagram.

## Facts & Assumptions

**Given:** The empty diagram in $\mathbf{Grp}$.

[L1] $\mathbf{Grp}$ has all small colimits
([[thm-grp-is-complete-and-cocomplete]]).

[L2] An empty-diagram colimit is an initial object
([[prop-empty-limits-and-colimits-are-terminal-and-initial-objects]]).

[F1] Groups and homomorphisms form $\mathbf{Grp}$, while sets and functions
form $\mathbf{Set}$
([[prop-groups-and-homomorphisms-form-category-grp]],
[[prop-sets-and-functions-form-category-set]]).

## Refutation

**Proof technique:** empty diagram.

1.1 By [L1] and [L2], the empty-diagram colimit in $\mathbf{Grp}$ is its initial object, the trivial group. Its underlying set is a singleton. [L1, L2, F1]

1.2 The underlying diagram is still empty. Its Set-colimit is the initial set $\varnothing$ by [L2], not a singleton. [L2, F1]

2.1 Thus the underlying-set functor does not preserve even the empty colimit, and the universal statement is false. [step 1.1, step 1.2] ∎
