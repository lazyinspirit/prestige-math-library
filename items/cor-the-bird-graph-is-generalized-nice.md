---
id: cor-the-bird-graph-is-generalized-nice
kind: corollary
title: "The singleton Bird family is generalized nice"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [cor-the-singleton-family-containing-bird-has-property-star, lem-the-e-graph-and-the-bird-are-leaf-reducible, thm-property-star-and-leaf-reducibility-imply-generalized-niceness, def-generalized-nice-finite-family, def-property-star-for-a-finite-family, def-bird-graph-and-co-bird-graph, def-leaf-reducible-finite-family]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Lemma 4.5 and Section 6.2"
      url: "https://arxiv.org/pdf/2606.06258v2"
---

## Statement

The singleton finite family $\{\mathrm{Bird}\}$ is generalized nice.

## Facts & Assumptions

**Given:** The singleton family $\{\mathrm{Bird}\}$.

[L1] The singleton family $\{\mathrm{Bird}\}$ has property $(*)$, with its special-vertex comb trigger in co-Bird-free graphs ([[cor-the-singleton-family-containing-bird-has-property-star]]).

[L2] The singleton family $\{\mathrm{Bird}\}$ is leaf-reducible: deleting the added leaf $w$ from Bird gives the bull, and the reduced singleton family has the Erdős-Hajnal property ([[lem-the-e-graph-and-the-bird-are-leaf-reducible]]).

[L3] If a finite family has property $(*)$ and is leaf-reducible, then it is generalized nice ([[thm-property-star-and-leaf-reducibility-imply-generalized-niceness]]).

[L4] Generalized niceness of a finite family $\mathcal F$ is the four-outcome schema quantified over $\overline{\mathcal F}$-free graphs ([[def-generalized-nice-finite-family]]).

[L5] Property $(*)$ for a finite family $\mathcal F$ is a condition on $\overline{\mathcal F}$-free graphs, and leaf-reducibility asks that deleting one leaf from one member produce a family with the Erdős-Hajnal property ([[def-property-star-for-a-finite-family]], [[def-leaf-reducible-finite-family]]).

[L6] co-Bird is the complement of the Bird graph ([[def-bird-graph-and-co-bird-graph]]).

## Proof

**Proof technique:** direct specialization of the property-$(*)$-plus-leaf-reducibility implication to the family $\{\mathrm{Bird}\}$.

1.1 The family $\{\mathrm{Bird}\}$ satisfies both hypotheses of [L3]: property $(*)$ by [L1] and leaf-reducibility by [L2]. [L1, L2, L5]

2.1 Applying [L3] to the finite family $\{\mathrm{Bird}\}$ gives that $\{\mathrm{Bird}\}$ is generalized nice. [step 1.1, L3]

3.1 The ambient class of that generalized-niceness condition is the class of graphs free of $\overline{\{\mathrm{Bird}\}}=\{\mathrm{co}\text{-}\mathrm{Bird}\}$ by [L4] and [L6], and step 2.1 is exactly the assertion of the statement. [step 2.1, L4, L6] ∎

## Remarks

- This is the direct specialization of the source's Lemma 4.5 to $\mathcal F=\{\mathrm{Bird}\}$; the companion E corollary is the analogous specialization to $\{\mathcal E\}$, and the two are independent instances of the same published implication.
- **No Choice.** The argument is finite and makes no selection from a family of nonempty sets.
