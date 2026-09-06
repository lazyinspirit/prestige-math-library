---
id: def-h-five-overlap-chain-relation-in-a-comb-block
kind: definition
title: "The $H_5$-overlap-chain relation in one comb block"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-h-zero-through-h-five, def-comb-in-a-graph]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Huang, Ju, and Zhou, Erdős-Hajnal beyond the five-vertex path, proof of Lemma 6.4"
      url: "https://arxiv.org/html/2606.06258v2"
---

## Definition

Fix a comb block $B_i$. Let $X_i$ be the set of vertices of $B_i$ that lie in
an induced $H_5$. For $d,d'\in X_i$, write $d\sim_{H_5}d'$ when there is a
finite sequence $d=d_1,\ldots,d_m=d'$ in $X_i$ such that each consecutive
pair $d_r,d_{r+1}$ lies in one induced copy of $H_5$ contained in $B_i$.

This is the **$H_5$-overlap-chain relation**. Its equivalence classes are the
**$H_5$-overlap classes** of $B_i$. The relation is reflexive (the length-one
sequence), symmetric (reverse a chain), and transitive (concatenate chains).
