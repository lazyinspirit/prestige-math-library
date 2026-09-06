---
id: cor-countable-independent-copies-exist
kind: corollary
title: "Countably many independent copies of a prescribed law exist"
status: draft
origin: pipeline
deps: [thm-countable-product-of-probability-spaces, cor-coordinate-random-elements-on-a-countable-product-are-independent, def-law-or-distribution-of-a-random-element, def-countable-choice, def-dependent-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, Section 2.1.4"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Statement

Assume countable choice and dependent choice. Every probability measure $\nu$
on $(S,\Sigma)$ is the common law of a countable independent family of
$S$-valued random elements.

## Facts & Assumptions

**Given:** Countable choice, dependent choice, and a measurable probability space $(S,\Sigma,\nu)$.

[F1] Under countable choice and dependent choice, the canonical countable
product probability measure exists. ([[thm-countable-product-of-probability-spaces]])

[F2] Its canonical coordinates have their prescribed laws and are independent.
([[cor-coordinate-random-elements-on-a-countable-product-are-independent]])

## Proof

1.1 Apply [F1] with $E_n=S$ and $\mu_n=\nu$ for every $n$, and write $X_n$ for its coordinate maps. [F1]

2.1 By [F2], every $X_n$ has law $\nu$ and every finite subfamily is independent; this is the required independent-copy sequence. [F2] ∎
