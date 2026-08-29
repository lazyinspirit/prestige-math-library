---
id: prop-solvability-of-the-word-problem-is-independent-of-a-finite-generating-set
kind: proposition
title: "Solvability of the word problem does not depend on the chosen finite generating set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-word-problem-for-a-fixed-finite-presentation, prop-equality-of-words-in-a-presentation, thm-tietze-transformations-connect-finite-presentations]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles F. Miller III, Decision Problems for Groups - Survey and Reflections"
      url: "https://web.archive.org/web/20240413212033/https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=fcda888d3e64f281e85977c474764527421ce852"
pipeline_run: null
---

## Statement

Let $\mathcal P=\langle X\mid R\rangle$ and $\mathcal Q=\langle Y\mid S\rangle$
be finite presentations of isomorphic groups. Then the word problem is solvable
for $\mathcal P$ if and only if it is solvable for $\mathcal Q$.

## Facts & Assumptions

**Given:** Finite presentations $\mathcal P=\langle X\mid R\rangle$ and $\mathcal Q=\langle Y\mid S\rangle$ that present isomorphic groups.

[L1] Two finite presentations present isomorphic groups if and only if a finite sequence of Tietze transformations and inverses connects them. ([[thm-tietze-transformations-connect-finite-presentations]])

[L2] In a presentation, equality of represented elements is equivalent to membership of the difference word in the normal closure of the relators. ([[prop-equality-of-words-in-a-presentation]])

## Proof

**Proof technique:** direct.

1.1 By [L1], it is enough to show that each single Tietze transformation preserves solvability of the word problem. [L1, given]

2.1 A relator-addition or relator-deletion Tietze move does not change which words are trivial in the presented group, by the equality criterion [L2]. So the same decision procedure works before and after such a move. [L2, step 1.1]

2.2 A generator-addition move introduces one new generator $y$ together with a defining word $u(X)$. To decide whether a word in the enlarged alphabet is trivial, replace each $y^{\pm1}$ by $u(X)^{\pm1}$ and run the original algorithm on the resulting word. The inverse generator-deletion move is the same transport in the opposite direction. [L2, step 1.1, algebra]

3.1 Every finite Tietze chain transports a decision procedure step by step, so solvability for $\mathcal P$ is equivalent to solvability for $\mathcal Q$. [step 2.1, step 2.2, L1] ∎
