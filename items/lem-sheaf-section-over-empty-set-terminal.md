---
id: lem-sheaf-section-over-empty-set-terminal
kind: lemma
title: "A set-valued sheaf has a unique section over the empty open set"
status: published
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-sheaf-on-topological-space]
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
    - title: "The Stacks Project, Sheaves on Spaces, Remark 7.2"
      url: "https://stacks.math.columbia.edu/download/sheaves.pdf"
---

## Statement

Let $\mathcal F$ be a sheaf of sets on a topological space $X$. Then
$\mathcal F(\varnothing)$ is a singleton.

## Facts & Assumptions

**Given:** A sheaf $\mathcal F$ on $X$.

[L1] A sheaf satisfies locality and gluing for every open cover, including the
empty cover of $\varnothing$ ([[def-sheaf-on-topological-space]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] to the empty cover of $\varnothing$. The empty family of local sections is vacuously compatible, so gluing produces at least one section $s\in\mathcal F(\varnothing)$. [L1, given]

2.1 Let $t\in\mathcal F(\varnothing)$. Then $t$ also restricts to the same empty family on the empty cover. By the uniqueness part of [L1], one has $t=s$. Therefore $\mathcal F(\varnothing)=\{s\}$. [L1, step 1.1] ∎
