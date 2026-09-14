---
id: cor-finite-dimensional-irreducible-representations-of-a-solvable-complex-lie-algebra-are-one-dimensional
kind: corollary
title: Irreducible representations of solvable complex Lie algebras are one-dimensional
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [thm-lies-theorem, def-irreducible-completely-reducible-and-faithful-lie-algebra-representation]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, Theorem 5.24"
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: "Theorem 5.24, printed p. 103"
---

## Statement

Every nonzero finite-dimensional irreducible complex representation of a
finite-dimensional solvable complex Lie algebra is one-dimensional.

## Facts & Assumptions

**Given:** A finite-dimensional solvable complex Lie algebra $\mathfrak g$ and
a nonzero finite-dimensional irreducible $\mathfrak g$-module $V$.

[L1] Lie's theorem gives a common eigenvector under these hypotheses
([[thm-lies-theorem]]).

[L2] An irreducible nonzero representation has no invariant subspaces other
than $0$ and the whole space
([[def-irreducible-completely-reducible-and-faithful-lie-algebra-representation]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], choose a common eigenvector $0\neq v\in V$. Its line $kv$ is a nonzero $\mathfrak g$-invariant subspace. [given, L1, algebra]

2.1 Irreducibility [L2] forces $kv=V$, so $\dim_{\mathbb C}V=1$. The zero module is excluded by the definition of irreducibility used here; if $\mathfrak g=0$, the same argument says an irreducible nonzero module is one-dimensional. [L2, step 1.1] ∎
