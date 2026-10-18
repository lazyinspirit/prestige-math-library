---
id: def-finite-block-source-code
kind: definition
title: "Fixed-length lossless block codes and error probability"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-finite-alphabet-stationary-source
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; finite-alphabet sums and code constructions are explicit, and cited measure-theoretic results retain their stated hypotheses."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Robert M. Gray, Entropy and Information Theory, corrected edition"
      url: "https://ee.stanford.edu/~gray/it.pdf"
      locator: "Chapter 8 §§8.2–8.4, printed pp.153–164: finite-past information, stationary componentwise SMB, nonergodic and AMS entropy-transfer proofs."
---
## Definition

Consider a finite alphabet $\mathcal A$, a positive integer $n$, and a decoder output set.

A fixed-length lossless block code of rate $R$ bits per symbol is an injective map from $\mathcal A^n$ into a message set of size at most $2^{\lfloor nR\rfloor}$; the decoder is its inverse on the image.

A code with block error is a pair of encoder and decoder maps whose success set is the set of source blocks decoded correctly; its error probability is the law of the complement of that set. The codebook cardinality bounds the size of the success set by the number of messages.

## Facts & Assumptions

**Given:** A finite alphabet $\mathcal A$, a positive integer $n$, and a decoder output set.

[F1] [[def-finite-alphabet-stationary-source]]: the source alphabet is finite.

## Proof

**Given:** The finite block domain $\mathcal A^n$.

1.1 A fixed-length lossless block code of rate $R$ bits per symbol is an injective map from $\mathcal A^n$ into a message set of size at most $2^{\lfloor nR\rfloor}$; the decoder is its inverse on the image. [F1, given, algebra]

2.1 A code with block error is a pair of encoder and decoder maps whose success set is the set of source blocks decoded correctly; its error probability is the law of the complement of that set. The codebook cardinality bounds the size of the success set by the number of messages. [given, step 1.1, algebra] ∎
