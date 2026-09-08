---
id: "lem-tree-predecessors-and-common-extensions"
kind: "lemma"
title: "Tree predecessors and compatibility"
status: "draft"
origin: "pipeline"
deps: ["def-set-theoretic-tree-and-levels"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
sources:
  references:
    - title: "Monk, Set theory following Jech (2024), Chapter 9, printed p65 (tree terminology; normality conventions adapted)"
      url: "https://euclid.colorado.edu/~monkd/jech.pdf"
justified_by: []
forward_refs: []
proof_strategy: "direct"
verification:
  precheck: "pass"
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
---

## Statement

Each node $t$ in a tree has exactly one predecessor of each height $\beta<\operatorname{ht}(t)$. If $s,t\le_Tu$, then $s,t$ are comparable. Strict tree order strictly increases height, and every level is an antichain.

## Facts & Assumptions

**Given:** A tree $T$ with the strict and reflexive order conventions just defined.

[F1] The strict predecessors $P_t$ are well-ordered and $\operatorname{ht}(t)$ is their ordinal order type. [[def-set-theoretic-tree-and-levels]]

## Proof

1.1 Let $\alpha=\operatorname{ht}(t)$ and let $e:\alpha\to P_t$ be its order isomorphism. For $\beta<\alpha$, transitivity and order reflection give $P_{e(\beta)}=e[\beta]$. Thus $\operatorname{ht}(e(\beta))=\beta$. Conversely every predecessor is $e(\gamma)$ for exactly one $\gamma<\alpha$ and has height $\gamma$, proving existence and uniqueness. [F1]

1.2 If $s,t\le_Tu$ and either equals $u$, they are comparable. Otherwise both belong to the well-ordered set $P_u$, so its linear order compares them. This includes $s=t$. [F1, given]

2.1 If $s<_Tt$, step 1.1 puts $s=e(\beta)$ at some $\beta<\operatorname{ht}(t)$, so $\operatorname{ht}(s)<\operatorname{ht}(t)$. Distinct nodes of one level therefore cannot be comparable; each level is an antichain. For a root the predecessor assertion has no indices, and empty levels satisfy the antichain assertion vacuously. [step 1.1] ∎
