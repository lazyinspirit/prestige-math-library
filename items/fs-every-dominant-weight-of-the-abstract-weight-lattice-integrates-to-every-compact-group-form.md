---
id: fs-every-dominant-weight-of-the-abstract-weight-lattice-integrates-to-every-compact-group-form
kind: false-statement
title: Not every abstract dominant weight integrates
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-highest-weight-classification-for-a-compact-connected-lie-group, prop-root-and-weight-lattice-sandwich-for-a-compact-semisimple-group, def-axiom-of-choice, def-root-lattice-coroot-lattice-weight-lattice-and-coweight-lattice]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter V §8, Theorem 5.110 (analytic integrality)"
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Every dominant weight in the abstract weight lattice
$P$ integrates to a representation of every compact group form with the given
Lie algebra.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice, the group $SO(3)$ (the adjoint form of type $A_1$) with maximal torus $T$, and the fundamental weight $\omega$ of the type $A_1$ root system.

[L1] Irreducible finite-dimensional representations of a compact connected $G$ are classified by the dominant elements of the *actual* character lattice $X^*(T)$ ([[thm-highest-weight-classification-for-a-compact-connected-lie-group]]).

[L2] For type $A_1$ the weight lattice is $P=\mathbb Z\omega$ with root lattice $Q=2\mathbb Z\omega$, and the adjoint form has character lattice $X^*(T)=Q$ ([[prop-root-and-weight-lattice-sandwich-for-a-compact-semisimple-group]], [[def-root-lattice-coroot-lattice-weight-lattice-and-coweight-lattice]]).

## Refutation

**Proof technique:** direct.

1.1 The fundamental weight $\omega$ is dominant in $P$, and it is not an element of $Q=2\mathbb Z\omega$; hence for the adjoint form $SO(3)$, whose character lattice is $Q$ by [L2], the weight $\omega$ lies outside $X^*(T)$. [L2]

2.1 If some irreducible finite-dimensional representation of $SO(3)$ had highest weight $\omega$, then $\omega$ would be a dominant element of the actual character lattice $X^*(T)$ by the classification in [L1]; this contradicts step 1.1. [L1, step 1.1]

3.1 Therefore $\omega$ is a dominant weight of the abstract weight lattice that does not integrate to the compact group form $SO(3)$; the correct statement is the classification by dominant elements of the actual character lattice $X^*(T)$, between $Q$ and $P$, and the failure is exactly the finite central quotient obstructing the descent of the $SU(2)$-representation of highest weight $\omega$. [L1, step 1.1, step 2.1] ∎
