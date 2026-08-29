---
id: fs-the-kernel-row-of-a-morphism-of-short-exact-sequences-is-short-exact
kind: false-statement
title: "FALSE: the kernel row of a morphism of short exact sequences is short exact"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-the-kernel-row-and-cokernel-row-of-a-morphism-of-short-exact-sequences-are-exact-at-two-nodes-each,
       cex-the-kernel-row-of-a-morphism-of-short-exact-sequences-need-not-be-short-exact]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, VIII.4"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: frontier-23
---

## Statement

For every morphism of short exact sequences in an abelian category, the induced
kernel row is short exact.

## Facts & Assumptions

**Given:** The universal short-exactness claim of the statement.

[L1] The general positive theorem gives exactness only at the first two nodes
([[thm-the-kernel-row-and-cokernel-row-of-a-morphism-of-short-exact-sequences-are-exact-at-two-nodes-each]]).

[L2] The multiplication-by-two diagram gives a failure of short exactness
([[cex-the-kernel-row-of-a-morphism-of-short-exact-sequences-need-not-be-short-exact]]).

## Refutation

**Proof technique:** direct.

1.1 The witness in [L2] is a morphism of short exact sequences whose kernel row is not short exact. Therefore the universal statement fails. [L2]

2.1 Item [L1] records the correct surviving assertion: two exact nodes, not a short exact row. [L1, step 1.1] ∎
