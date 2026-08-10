---
id: cex-delete-only-relator-rewriting-is-order-dependent
kind: counterexample
title: 'In $\langle a,b\mid ab,\ aba\rangle$, delete-only relator rewriting sends $aba$ either to the empty word or to the stuck word $a$'
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-group-presentation, def-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Statement refuted

Use the following specific procedure: freely cancel adjacent inverse pairs or
delete a contiguous occurrence of either displayed relator or its inverse, but
never insert a relator and never lengthen the word.

The false claim is that the terminal string produced by this procedure is
independent of the order of deletions. In $\langle a,b\mid ab,aba\rangle$, the
word $aba$ has one deletion path to the empty word and another to the stuck
word $a$.

## Facts & Assumptions

**Given:** The presentation $G=\langle a,b\mid ab,aba\rangle$, the word $aba$, and the delete-only procedure just stated.

[F1] In a presented group, every displayed relator becomes the identity ([[def-group-presentation]]).

[F2] Group multiplication is associative and has a two-sided identity ([[def-group]]).

## Counterexample

**Proof technique:** direct.

1.1 The relations $ab=e$ and $aba=e$ give $a=(ab)a=e$ and then $b=e$, so every word represents the identity in $G$. [F1, F2]

1.2 Deleting the occurrence of the relator $aba$ from the whole word $aba$ gives the empty word. [given]

1.3 Deleting the prefix $ab$ gives the one-letter word $a$, which has no inverse pair and contains none of $ab$, $aba$, $b^{-1}a^{-1}$, or $a^{-1}b^{-1}a^{-1}$; hence it is stuck. [given]

2.1 The two allowed first deletions end at different terminal strings, $\varepsilon$ and $a$, even though step 1.1 shows that both represent the same group element; therefore the procedure is order-dependent. [step 1.1, step 1.2, step 1.3] ∎
