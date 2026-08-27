---
id: lem-blocks-from-different-mixed-block-classes-form-pure-pairs
kind: lemma
title: "Blocks from distinct mixed-block classes are pure to each other"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-quotient-blockade-by-mixed-block-reachability, def-mixed-block-reachability-relation-on-a-blockade, def-edges-between-sets-and-pure-mixed-pairs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Lemma 6.1(2)"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Statement

Let $A$ and $B$ be blocks of a blockade $\mathcal L$. If $A$ and $B$ lie in
different blocks of the quotient blockade $\mathcal L/\mathcal M$, then
$(A,B)$ is a pure pair.

## Facts & Assumptions

**Given:** A blockade $\mathcal L$ with quotient blockade $\mathcal L/\mathcal M$, and original blocks $A,B$ of $\mathcal L$ lying in different quotient blocks.

[L1] Two original blocks lie in the same quotient block exactly when they are related by the mixed-block reachability relation $\mathcal M$ ([[def-quotient-blockade-by-mixed-block-reachability]]).

[L2] By definition, if two blocks are mixed, then they are joined by a length-one mixed chain and hence are $\mathcal M$-related ([[def-mixed-block-reachability-relation-on-a-blockade]], [[def-edges-between-sets-and-pure-mixed-pairs]]).

## Proof

**Proof technique:** direct.

1.1 Suppose for contradiction that $(A,B)$ is mixed. Then [L2] gives a mixed chain of length one from $A$ to $B$, so $A\,\mathcal M\,B$. [L2, assume-contra]

2.1 By [L1], $\mathcal M$-related blocks lie in the same quotient block of $\mathcal L/\mathcal M$. This contradicts the hypothesis that $A$ and $B$ lie in different quotient blocks. [step 1.1, L1, discharge-contradiction]

3.1 Therefore $(A,B)$ is not mixed, hence it is pure. [step 2.1] ∎
