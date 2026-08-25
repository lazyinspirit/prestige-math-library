---
id: lem-a-downward-closed-family-shatters-each-of-its-members
kind: lemma
title: "If $\\mathcal{F}$ is closed under taking subsets then $\\mathcal{F}$ shatters every $F\\in\\mathcal{F}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-shattering-and-vc-dimension, lem-iterated-down-shifting-terminates-in-a-downward-closed-family, cor-cardinality-of-the-power-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "L. Babai and P. Frankl, Linear Algebra Methods in Combinatorics, §7.5"
      url: "https://users.renyi.hu/~p_erdos/1985-04.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal{F}\subseteq\mathcal{P}([n])$ be closed under taking subsets. Then
every member $F\in\mathcal{F}$ is shattered by $\mathcal{F}$.

## Facts & Assumptions

**Given:** a downward-closed family $\mathcal{F}\subseteq\mathcal{P}([n])$ and a set $F\in\mathcal{F}$.

[F1] A set is shattered when every subset of it occurs as a trace ([[def-shattering-and-vc-dimension]]).

## Proof

**Proof technique:** direct.

1.1 If $A\subseteq F$, then $A\in\mathcal{F}$ by downward closure and $A\cap F=A$. So every subset of $F$ is a trace of $\mathcal{F}$ on $F$. [F1, given]

2.1 Hence $\mathcal{F}\vert_F=\mathcal{P}(F)$, and $F$ is shattered by $\mathcal{F}$. [F1, step 1.1] ∎

## Remarks

- This is the step that converts the structural output of shifting into the size bound of Sauer-Shelah.
