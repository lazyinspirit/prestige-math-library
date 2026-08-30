---
id: cex-a-snake-configuration-whose-kernel-row-is-not-short-exact
kind: counterexample
title: "A snake configuration whose kernel row is not short exact"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [thm-snake-lemma-in-an-abelian-category,
       cex-the-kernel-row-of-a-morphism-of-short-exact-sequences-need-not-be-short-exact,
       thm-abelian-groups-form-an-abelian-category]
justified_by: []
landmark: false
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, VIII.4"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: frontier-24
---

## Statement refuted

In every snake configuration, the induced kernel row is already short exact.

## Facts & Assumptions

**Given:** The multiplication-by-two snake configuration from
[[cex-the-kernel-row-of-a-morphism-of-short-exact-sequences-need-not-be-short-exact]].

[L1] That published example already shows the kernel row can fail to be short
exact ([[cex-the-kernel-row-of-a-morphism-of-short-exact-sequences-need-not-be-short-exact]]).

[L2] The snake lemma repairs the failure by adding the connecting morphism
([[thm-snake-lemma-in-an-abelian-category]]).

## Counterexample

1.1 By [L1], the chosen diagram is a valid snake configuration in $\mathbf{Ab}$ whose kernel row is $$0 \to 0 \to 0 \to \mathbb Z/2,$$ and that row is not short exact. [L1]

2.1 Nevertheless [L2] adds the connecting morphism $$\mathbb Z/2 \to \mathbb Z/2,$$ after which the full snake sequence is exact. So the kernel row alone is not the whole story. [L2, step 1.1] ∎
