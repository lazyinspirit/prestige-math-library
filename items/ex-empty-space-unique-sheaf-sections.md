---
id: ex-empty-space-unique-sheaf-sections
kind: example
title: "The empty space has a unique sheaf section over the empty open set"
status: published
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-topological-space, def-sheaf-on-topological-space, lem-sheaf-section-over-empty-set-terminal]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Sheaves on Spaces, Section 2 and Remark 7.2"
      url: "https://stacks.math.columbia.edu/download/sheaves.pdf"
---

## Example

Let $X=\varnothing$. Then the only open set is $\varnothing$, and every sheaf
$\mathcal F$ on $X$ has exactly one section over that open set.

## Facts & Assumptions

**Given:** A sheaf $\mathcal F$ on the empty space.

[F1] A topology on the underlying set $\varnothing$ has only one open subset, namely $\varnothing$ ([[def-topological-space]]).

[L1] A sheaf has a unique section over the empty open set ([[lem-sheaf-section-over-empty-set-terminal]]).

## Verification

**Proof technique:** direct.

1.1 By [F1], there is no open set to consider except $\varnothing$, so the whole presheaf data of $\mathcal F$ is just the set $\mathcal F(\varnothing)$ together with its identity restriction map. [F1, given]

2.1 By [L1], this set $\mathcal F(\varnothing)$ is a singleton. Therefore every sheaf on the empty space has exactly one section over its only open set. [L1, step 1.1] ∎
