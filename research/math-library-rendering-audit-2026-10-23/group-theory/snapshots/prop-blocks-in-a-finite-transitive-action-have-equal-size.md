---
id: prop-blocks-in-a-finite-transitive-action-have-equal-size
kind: proposition
title: "Blocks in a finite transitive action have a common size"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-block-and-block-system-for-a-group-action, def-group-action]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory, Chapter 4"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
    - title: "K. Conrad, Transitive Group Actions"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/transitive.pdf"
pipeline_run: null
---

## Statement

Let $G$ act transitively on a finite set $\Omega$, and let $\mathcal B$ be a
block system. Then any two blocks in $\mathcal B$ have the same finite
cardinality. In particular, if $B \in \mathcal B$, then $\Omega$ is a disjoint
union of finitely many copies of $B$, so $|B|$ divides $|\Omega|$.

## Facts & Assumptions

**Given:** A transitive action of $G$ on a finite set $\Omega$ and a block system $\mathcal B$.

[L1] A transitive action sends any chosen point to any other point by some element of $G$ ([[def-group-action]]).

[L2] A block system is a partition of $\Omega$ into blocks, and if $B$ is a block then every translate $g \cdot B$ is again a block ([[def-block-and-block-system-for-a-group-action]]).

## Proof

**Proof technique:** direct.

1.1 Let $B,C \in \mathcal B$. Choose $b \in B$ and $c \in C$. By transitivity there is $g \in G$ with $g \cdot b = c$. [L1, choose]

2.1 Since $g \cdot b \in (g \cdot B) \cap C$, the two blocks $g \cdot B$ and $C$ meet. Because $\mathcal B$ is a partition into blocks, they are equal. [step 1.1, L2]

3.1 The map $B \to C$, $x \mapsto g \cdot x$, is a bijection because every group element acts bijectively on $\Omega$. Hence $|B| = |C|$. [step 2.1, algebra]

4.1 As $B$ and $C$ were arbitrary, all blocks in $\mathcal B$ have the same size. Since the blocks are pairwise disjoint and cover the finite set $\Omega$, the cardinality of any block divides $|\Omega|$. [step 3.1, given] ∎
