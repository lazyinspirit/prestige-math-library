---
id: cex-delete-only-relator-rewriting-can-require-lengthening
kind: counterexample
title: 'In $\langle a,b\mid aba^{-1}b^{-1}\rangle$, the trivial word $a^2b^2a^{-2}b^{-2}$ is stuck under free cancellation and delete-only relator rewriting'
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-group-presentation, def-group, lem-group-power-laws]
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

Use the same narrow delete-only procedure: freely cancel adjacent inverse
pairs, or delete a contiguous occurrence of the displayed relator or its
inverse, but never insert a relator and never lengthen the word.

The false claim is that this procedure reduces every identity word to the empty
word. In $\langle a,b\mid aba^{-1}b^{-1}\rangle$, the word
$a^2b^2a^{-2}b^{-2}$ represents the identity but admits no delete-only step.
Any rewriting path from this word to the empty word using relator insertions
and deletions must therefore begin by lengthening it.

## Facts & Assumptions

**Given:** The presentation $G=\langle a,b\mid aba^{-1}b^{-1}\rangle$, the expanded eight-letter word $w=a^2b^2a^{-2}b^{-2}$, and the delete-only procedure just stated.

[L1] In a presented group, every displayed relator becomes the identity, as do all consequences forced by normality ([[def-group-presentation]]).

[L2] If $gh=hg$, then $(gh)^n=g^nh^n$ ([[lem-group-power-laws]]).

[F1] Group multiplication is associative, has a two-sided identity, and has two-sided inverses ([[def-group]]).

## Counterexample

**Proof technique:** direct.

1.1 The relator $aba^{-1}b^{-1}=e$ gives $ab=ba$; hence [L2] gives $a^2b^2=(ab)^2$, and $a^2b^2a^{-2}b^{-2}=a^2b^2(a^2b^2)^{-1}=e$. [L1, L2, F1]

1.2 The eight-letter word $a,a,b,b,a^{-1},a^{-1},b^{-1},b^{-1}$ has no adjacent inverse pair. [given]

1.3 Its five length-four windows are $aabb$, $abba^{-1}$, $bba^{-1}a^{-1}$, $ba^{-1}a^{-1}b^{-1}$, and $a^{-1}a^{-1}b^{-1}b^{-1}$; none is the relator $aba^{-1}b^{-1}$ or its inverse $bab^{-1}a^{-1}$. [given]

2.1 The nonempty identity word is therefore stuck under the delete-only procedure; since its first move in any nonconstant relator-rewriting path cannot be a cancellation or deletion, such a path must begin with an insertion and increase the length. [step 1.1, step 1.2, step 1.3] ∎
