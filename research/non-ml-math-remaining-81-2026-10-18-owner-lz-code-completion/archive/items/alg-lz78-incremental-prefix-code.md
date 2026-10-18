---
id: alg-lz78-incremental-prefix-code
kind: algorithm
title: "Finite-block LZ78 incremental prefix code"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-finite-alphabet-stationary-source
  - def-finite-support-binary-prefix-code
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; finite-alphabet sums and code constructions are explicit, and cited measure-theoretic results retain their stated hypotheses."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
---
## Statement

Defines the finite-block LZ78 parser, parent-index Elias-delta serialization, fixed-width symbols, and the explicit terminal symbol used to end every codeword.

## Facts & Assumptions

**Given:** A finite alphabet $\mathcal A$ of size $q\ge2$, an input word $x_0^{n-1}\in\mathcal A^n$, and a new terminator $\#$ not in $\mathcal A$.

[F1] [[def-finite-alphabet-stationary-source]] fixes the finite source alphabet.

[F2] [[def-finite-support-binary-prefix-code]]: a finite code is prefix-free when no distinct codeword is a proper prefix of another.

## Proof

**Given:** The alphabet, input, terminator and empty-root convention in the statement.

1.1 Start with dictionary $D[0]=\epsilon$. At each iteration, let $w$ be the longest dictionary word that prefixes the unread suffix of $x_0^{n-1}\#$, let $c$ be the next symbol, output the record $(i(w),c)$, and append $wc$ to the dictionary unless $c=\#$. The terminator guarantees a next symbol. [F1, given, algebra]

1.2 The decoder starts with the same root. For record $(i,c)$ it emits $D[i]c$ and appends that word unless $c=\#$. The new phrase was not already in the dictionary: otherwise its length-$|w|$ prefix would not be the longest available match, or its last symbol would already have been read as a phrase. Thus ordinary phrases are distinct. [F1, step 1.1, algebra]

1.3 The phrase list is serialized by a prefix code for the nonnegative parent index followed by a fixed-width code for $c\in\mathcal A\cup\{\#\}$. The decoder recognizes the final record by its symbol $\#$; since $\#$ occurs only once at the very end, no valid terminated record list is a proper prefix of another. The parser and decoder therefore specify a lossless incremental code. [F2, step 1.1, step 1.2, algebra] ∎
