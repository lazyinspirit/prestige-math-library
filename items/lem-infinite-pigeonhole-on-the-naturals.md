---
id: lem-infinite-pigeonhole-on-the-naturals
kind: lemma
title: "Every finite colouring of $\\mathbb N$ has an infinite colour class, in ZF"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-countable, thm-the-strong-pigeonhole-principle, thm-sum-rule, def-finite-cardinality, def-natural-numbers]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "I. B. Leader, Ramsey Theory, proof of Theorem 1"
      url: "https://www.dpmms.cam.ac.uk/~par31/notes/ramsey.pdf"
pipeline_run: null
---

## Statement

Every colouring of $\mathbb N$ ([[def-natural-numbers]]) by a nonempty finite set of colours has an infinite colour class in the sense of [[def-countable]]. The finite notions are those of [[def-finite-cardinality]], and the result is stronger than any fixed finite pigeonhole conclusion from [[thm-the-strong-pigeonhole-principle]].

## Facts & Assumptions

**Given:** A function $c:\mathbb N\to C$ with $C$ nonempty and finite.

[L1] A finite disjoint union is finite with $\lvert A \cup B\rvert = \lvert A\rvert + \lvert B\rvert$ ([[thm-sum-rule]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose every fibre $c^{-1}(\{i\})$, for $i\in C$, is finite. These fibres are pairwise disjoint and their union is $\mathbb N$. [assume-contra]

2.1 Iterating [L1] over the finite set $C$ makes their union finite. This contradicts the infinitude of $\mathbb N$, so at least one fibre is infinite. [step 1.1, L1, discharge-contradiction] ∎

