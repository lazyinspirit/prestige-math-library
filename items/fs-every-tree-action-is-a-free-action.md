---
id: fs-every-tree-action-is-a-free-action
kind: false-statement
title: "FALSE: every tree action is free"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-fundamental-group-acts-on-its-bass-serre-tree]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Jean-Pierre Serre, Trees"
      url: "https://www.scribd.com/document/551505445/Jean-Pierre-Serre-Trees-Springer-Verlag-1980"
pipeline_run: null
---

## Statement

Every action of a group on a tree is free.

## Facts & Assumptions

**Given:** The Bass-Serre action for a graph of groups.

[L1] In the Bass-Serre action, vertex stabilizers are conjugates of the chosen vertex groups. ([[thm-fundamental-group-acts-on-its-bass-serre-tree]])

## Refutation

**Proof technique:** direct.

1.1 If a graph of groups has a nontrivial vertex group $G_v$, then [L1] says that $G_v$ fixes the corresponding vertex of the Bass-Serre tree. [L1, given]

2.1 So this tree action has a nonidentity stabilizer and is not free. Therefore the statement is false. [step 1.1, algebra] ∎
