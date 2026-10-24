---
id: cex-countable-car-representations-are-not-all-fock
kind: counterexample
title: The Countable-Mode CAR Algebra Has a Non-Fock-Equivalent Irreducible Representation
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: car-algebras-majorana-generators-and-clifford-comparison-examples
dependency_level: 10
deps:
  - thm-countable-mode-car-has-inequivalent-irreducible-representations
justified_by: []
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement refuted

The false statement is: every irreducible representation of the countably infinite-mode CAR C*-algebra is unitarily equivalent to its occupation-space Fock representation.

Let $\pi_F$ be the Fock representation on $\mathcal F_\infty$, and let $\alpha$ exchange every annihilator with its creator. Then $\pi_F\circ\alpha$ is irreducible and is not unitarily equivalent to $\pi_F$.

## Facts & Assumptions
**Given:** The countably infinite-mode CAR algebra, its Fock representation, and the particle-hole automorphism.

[F1] The representation $\pi_F\circ\alpha$ is irreducible and inequivalent to $\pi_F$ ([[thm-countable-mode-car-has-inequivalent-irreducible-representations]]).

## Counterexample

1.1 The automorphism $\alpha(a_j)=a_j^\dagger$ is defined on the same countable-mode CAR algebra, so composing the Fock representation with $\alpha$ gives another representation of that algebra. [given, F1, construct]

2.1 By [F1], this representation is irreducible but not unitarily equivalent to $\pi_F$. It is therefore a counterexample to the universal claim that every irreducible representation is Fock-equivalent. [given, F1, step 1.1, algebra] ∎

