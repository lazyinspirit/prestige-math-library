---
id: prop-a-split-extension-is-direct-product-iff-its-complement-centralizes-the-kernel
kind: proposition
title: "A split extension is a direct product exactly when its complement centralizes the kernel"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-a-complement-induces-the-conjugation-action-on-the-kernel, prop-semidirect-product-is-direct-iff-action-is-trivial]
proof_strategy: iff
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
---

## Statement

Let

$$1\to N\xrightarrow{i}E\xrightarrow{\pi}Q\to1$$

be a split group extension, and let $C\le E$ be a complement to $i(N)$. Then
$E$ is the internal direct product of $i(N)$ and $C$ if and only if every
element of $C$ commutes with every element of $i(N)$.

## Facts & Assumptions

**Given:** The displayed split extension and a complement $C\le E$.

[L1] The complement $C$ induces an action of $Q$ on $N$ by conjugation
([[lem-a-complement-induces-the-conjugation-action-on-the-kernel]]).

[L2] In a semidirect product, the internal decomposition is direct exactly when
the action is trivial ([[prop-semidirect-product-is-direct-iff-action-is-trivial]]).

## Proof

**Proof technique:** iff.

1.1 By [L1], the split extension is equivalent to the semidirect-product extension defined by the complement-induced action of $Q$ on $N$. [given, L1]

2.1 If every element of $C$ commutes with every element of $i(N)$, then each conjugation automorphism from step 1.1 is the identity. So the induced action is trivial, and [L2] makes the decomposition a direct product. [L1, L2, step 1.1]

3.1 Conversely, if the decomposition is a direct product, then the induced action is trivial by [L2]. Therefore the conjugation of $i(N)$ by every element of $C$ is the identity, so $C$ centralizes $i(N)$. [L1, L2, step 1.1] ∎
