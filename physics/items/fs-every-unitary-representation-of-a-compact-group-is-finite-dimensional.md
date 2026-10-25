---
id: fs-every-unitary-representation-of-a-compact-group-is-finite-dimensional
kind: false-statement
title: A compact group can have infinite-dimensional unitary representations
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-left-and-right-regular-unitary-representations-on-l-two-of-a-compact-lie-group, thm-peter-weyl-for-compact-lie-groups, def-axiom-of-choice, cor-irreducible-characters-are-orthonormal-class-functions]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §3 (the regular representation on L2(G))"
proof_strategy: direct
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Choice. Every unitary representation of a compact Lie group
is finite-dimensional.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice; the group $G=S^1$ with its normalized Haar measure and the circle characters $z\mapsto z^n$, $n\in\mathbb Z$.

[L1] On $L^2(G)$ the left regular representation $(L_xf)(y)=f(x^{-1}y)$ is a well-defined unitary representation of $G$ on a Hilbert space ([[def-left-and-right-regular-unitary-representations-on-l-two-of-a-compact-lie-group]]).

[L2] The characters of the torus are the maps $z\mapsto z^n$, $n\in\mathbb Z$, and distinct characters are pairwise orthonormal in $L^2(S^1)$; in particular $\{z\mapsto z^n:n\in\mathbb Z\}$ is an infinite orthonormal family ([[thm-peter-weyl-for-compact-lie-groups]], [[cor-irreducible-characters-are-orthonormal-class-functions]]).

## Refutation

**Proof technique:** direct.

1.1 The family $(z\mapsto z^n)_{n\in\mathbb Z}$ is orthonormal in $L^2(S^1)$ by [L2]; an orthonormal family of infinitely many nonzero vectors has no finite spanning set, because vectors in a finite-dimensional space are subject to the finite bound on the cardinality of linearly independent families; hence $L^2(S^1)$ is infinite-dimensional. [L2]

2.1 By [L1] the left regular representation makes $L^2(S^1)$ a unitary representation of the compact Lie group $S^1$; it is infinite-dimensional by step 1.1. [L1, step 1.1]

3.1 Hence there exists a unitary representation of a compact Lie group that is not finite-dimensional, so the statement of this item is false; Peter–Weyl decomposes the regular representation into finite-dimensional pieces but does not make the whole Hilbert space finite-dimensional. [L1, step 2.1] ∎
