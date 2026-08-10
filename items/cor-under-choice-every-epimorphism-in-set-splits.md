---
id: cor-under-choice-every-epimorphism-in-set-splits
kind: corollary
title: "Under the Axiom of Choice, every epimorphism in $\\mathbf{Set}$ is a split epimorphism"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-monomorphisms-and-epimorphisms-in-set, def-split-monomorphism-and-split-epimorphism, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Chapter 1"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. Every epimorphism in $\mathbf{Set}$ is a split
epimorphism.

## Facts & Assumptions

**Given:** An epimorphism $p:X\to Y$ in $\mathbf{Set}$.

[L1] Epimorphisms in $\mathbf{Set}$ are precisely surjections ([[thm-monomorphisms-and-epimorphisms-in-set]]).

[L2] The Axiom of Choice selects an element from every member of a set-indexed family of nonempty sets ([[def-axiom-of-choice]]), and a split epimorphism has a right inverse ([[def-split-monomorphism-and-split-epimorphism]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], every fibre $p^{-1}(\{y\})$ for $y\in Y$ is nonempty. [given, L1]

2.1 By [L2], choose $s(y)\in p^{-1}(\{y\})$ for every $y\in Y$; if $Y$ is empty this is the unique empty function, so the same construction covers that boundary case. [step 1.1, L2, choose]

3.1 Then $p(s(y))=y$ for every $y$, so $p\circ s=1_Y$ and $p$ is split epic. [step 2.1, L2] ∎

