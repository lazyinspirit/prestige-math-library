---
id: def-finite-block-source-code
kind: definition
title: "Fixed-length lossless block codes and error probability"
status: published
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Robert M. Gray, Entropy and Information Theory, corrected edition"
      url: "https://ee.stanford.edu/~gray/it.pdf"
      locator: "Chapter 8 §§8.2–8.4, printed pp.153–164: finite-past information, stationary componentwise SMB, nonergodic and AMS entropy-transfer proofs."
---
## Definition

Consider a finite nonempty alphabet $\mathcal A$, a positive integer $n$, a probability law $P_n$ on $\mathcal A^n$, and a rate $R\ge0$ in bits per symbol. A rate-$R$ fixed-length block code consists of a nonempty message set $M\subseteq\{0,1\}^{\lfloor nR\rfloor}$, an encoder $e:\mathcal A^n\to M$, and a decoder $d:M\to\mathcal A^n$. Thus $|M|\le2^{\lfloor nR\rfloor}$ and every message is a binary word of the same length.

The code is lossless when $d(e(x))=x$ for every $x\in\mathcal A^n$; equivalently, $e$ is injective and $d$ is its inverse on the image. For a code with block error, define its success set by $S=\{x\in\mathcal A^n:d(e(x))=x\}$ and its error probability by $P_n(S^c)$. The encoder restricted to $S$ is injective, so $|S|\le|M|\le 2^{\lfloor nR\rfloor}$.

## Facts & Assumptions

**Given:** A finite nonempty alphabet $\mathcal A$, a positive integer $n$, a probability law $P_n$ on $\mathcal A^n$, and a rate $R\ge0$.

[F1] [[def-finite-alphabet-stationary-source]]: the source alphabet is finite.

## Proof

**Given:** The finite block domain, rate-$R$ message set, and encoder and decoder maps in the Definition.

1.1 If $d(e(x))=x$ for every $x\in\mathcal A^n$, then $e$ is injective: $e(x)=e(y)$ implies $x=d(e(x))=d(e(y))=y$. Conversely, if $e$ is injective, its inverse on the image is well-defined; a decoder is lossless exactly when it agrees with that inverse there, and its values off the image are irrelevant. [F1, given, algebra]

2.1 If $x,y\in S$ and $e(x)=e(y)$, then $x=d(e(x))=d(e(y))=y$. Thus $e$ restricted to $S$ is injective, and the finite set $S$ has cardinality at most $|M|\le2^{\lfloor nR\rfloor}$. Its error probability is $P_n(S^c)$ by definition. [given, step 1.1, algebra] ∎
