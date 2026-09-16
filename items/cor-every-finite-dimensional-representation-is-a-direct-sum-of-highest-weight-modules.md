---
id: cor-every-finite-dimensional-representation-is-a-direct-sum-of-highest-weight-modules
kind: corollary
title: Every finite-dimensional module is a direct sum of highest-weight modules
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-highest-weight-classification-of-finite-dimensional-irreducible-representations, thm-weyls-complete-reducibility-theorem, def-irreducible-completely-reducible-and-faithful-lie-algebra-representation, def-integral-dominant-and-strictly-dominant-weights, def-direct-sum-of-a-family-of-modules, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Theorem 5.5 and Chapter V §4"
    - title: "Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras"
      url: "https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf"
      locator: "Corollary 8.24"
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $\mathfrak g$ be a finite-dimensional complex
semisimple Lie algebra with Cartan subalgebra $\mathfrak h$ and a fixed
positive system. Then every finite-dimensional representation $V$ of
$\mathfrak g$ is a finite direct sum of irreducible submodules
$$V=L(\lambda_1)\oplus\dots\oplus L(\lambda_N)$$
with dominant integral highest weights $\lambda_j$
([[def-integral-dominant-and-strictly-dominant-weights]]).

## Facts & Assumptions

**Given:** The Axiom of Choice, such $\mathfrak g,\mathfrak h$, a fixed positive system, and a finite-dimensional representation $V$.

[A1] The Axiom of Choice is assumed; it enters through the cited suppliers ([[def-axiom-of-choice]]).

[L1] Every finite-dimensional representation of a finite-dimensional semisimple Lie algebra over a characteristic-zero field is completely reducible: it is a direct sum of irreducible subrepresentations ([[thm-weyls-complete-reducibility-theorem]], [[def-irreducible-completely-reducible-and-faithful-lie-algebra-representation]], [[def-direct-sum-of-a-family-of-modules]]).

[L2] The finite-dimensional irreducible representations of $\mathfrak g$ are exactly the modules $L(\lambda)$ with $\lambda$ dominant integral ([[thm-highest-weight-classification-of-finite-dimensional-irreducible-representations]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] the module $V$ is a direct sum of irreducible subrepresentations $V=\bigoplus_{i\in I}V_i$. [L1, A1]

2.1 The index set $I$ is finite: each $V_i$ is nonzero, and a direct sum of nonzero subspaces of the finite-dimensional space $V$ has at most $\dim V$ summands; reindexing the finite set gives $V=V_1\oplus\dots\oplus V_N$. [L1, step 1.1]

3.1 By [L2] each summand $V_j$ is isomorphic to $L(\lambda_j)$ for a dominant integral weight $\lambda_j$, so $V=L(\lambda_1)\oplus\dots\oplus L(\lambda_N)$ with dominant integral highest weights. [L2, step 2.1]

4.1 This is the asserted finite decomposition. [step 3.1] ∎
