---
id: thm-markov-chain-law-is-determined-by-initial-law-and-kernel
kind: theorem
title: "A Markov-chain law is determined by its initial law and kernel"
status: draft
origin: pipeline
deps: [def-axiom-of-choice, thm-finite-dimensional-laws-of-a-markov-chain, thm-a-process-law-on-cylinder-space-is-determined-by-finite-dimensional-distributions]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, Section 5.1"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
      locator: "Theorem 5.1.1 and formula (5.1.2), printed pp. 268-269"
---

## Statement

Assume Choice. Two time-homogeneous Markov chains on the same measurable state
space with the same initial law $\mu$ and the same transition kernel $K$ have
the same finite-dimensional distributions. Consequently their induced laws on
the canonical path space equipped with its cylinder sigma-algebra are equal.

## Facts & Assumptions

**Given:** Choice and two $K$-chains with initial law $\mu$.

[F1] Every finite-dimensional law of a Markov chain is the iterated integral determined by its initial law and iterated kernels. ([[thm-finite-dimensional-laws-of-a-markov-chain]])

[F2] A process law on countable-coordinate cylinder space is determined by its finite-dimensional distributions. ([[thm-a-process-law-on-cylinder-space-is-determined-by-finite-dimensional-distributions]])

## Proof

1.1 For every finite increasing time list, [F1] gives the same iterated [F1] integral for both processes because their $\mu$ and $K$ agree. This includes a single time, time zero, empty rectangle events, and the full rectangle. Therefore all their finite-dimensional distributions coincide. [F1]

2.1 Push both processes forward by their path maps. The two induced [F2, step 1.1] probabilities have the finite-dimensional distributions compared in step 1.1, so [F2] makes them equal on the cylinder sigma-algebra. Choice enters through [F1]'s conditional-expectation argument; [F2] adds no new selection. [F2, step 1.1] ∎
