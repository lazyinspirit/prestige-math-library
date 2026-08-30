---
id: fs-the-snake-lemma-is-just-a-pair-of-short-exact-kernel-and-cokernel-rows
kind: false-statement
title: "FALSE: the snake lemma is just a pair of short exact kernel and cokernel rows"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-the-kernel-row-and-cokernel-row-of-a-morphism-of-short-exact-sequences-are-exact-at-two-nodes-each,
       cex-the-kernel-row-of-a-morphism-of-short-exact-sequences-need-not-be-short-exact,
       thm-snake-lemma-in-an-abelian-category]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, Lemma VIII.4.5"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: frontier-24
---

## Statement

The snake lemma says nothing beyond the separate kernel-row and cokernel-row
statements for a morphism of short exact sequences.

## Facts & Assumptions

**Given:** A morphism of short exact sequences.

[L1] The kernel and cokernel rows are only partially exact on their own
([[thm-the-kernel-row-and-cokernel-row-of-a-morphism-of-short-exact-sequences-are-exact-at-two-nodes-each]]).

[L2] The kernel row need not be short exact
([[cex-the-kernel-row-of-a-morphism-of-short-exact-sequences-need-not-be-short-exact]]).

[L3] The snake lemma adds the connecting morphism and the missing middle
exactness ([[thm-snake-lemma-in-an-abelian-category]]).

## Refutation

1.1 The theorem [L1] only gives two-node exactness for the kernel row and two-node exactness for the cokernel row, and [L2] shows that nothing stronger is automatic. [L1, L2]

2.1 By contrast, [L3] produces the connecting morphism and the exactness through it. So the snake lemma contains strictly more information than the separate kernel-row and cokernel-row statements. [L3, step 1.1] ∎
