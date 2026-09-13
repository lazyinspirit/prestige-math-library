---
id: fs-differential-at-the-identity-determines-a-homomorphism-from-a-disconnected-lie-group
kind: false-statement
title: Differential at the identity determines a homomorphism from a disconnected Lie group
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-lie-group-homomorphism-isomorphism-and-automorphism, def-lie-group]
proof_strategy: counterexample
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: Proposition 3.9 and complete proof, printed page 31
    - title: Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed.
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2.pdf
      locator: Chapter I connectedness qualification
---

## Statement refuted

A homomorphism from a disconnected Lie group is determined by its differential
at the identity.

## Facts & Assumptions

**Given:** The finite discrete Lie group $G=\mathbb Z/2\mathbb Z$.

[F1] A smooth group homomorphism is a Lie-group homomorphism.
[[def-lie-group-homomorphism-isomorphism-and-automorphism]].

[F2] A discrete finite group is a zero-dimensional Lie group: every map between
discrete charts is smooth. [[def-lie-group]].

## Refutation

**Proof technique:** counterexample.

1.1 Let $F:G\to G$ be the identity and let $H:G\to G$ be the trivial homomorphism. Both are smooth by discreteness and hence are Lie-group homomorphisms by [F1]–[F2], but $F(1)=1\ne0=H(1)$. [F1, F2]

2.1 The tangent space of a zero-dimensional manifold at every point is the zero vector space. Thus $dF_0$ and $dH_0$ are both the unique map $0\to0$, despite $F\ne H$. [F2, step 1.1]

3.1 The witness is nonempty, zero-dimensional, and disconnected; it shows exactly why connectedness cannot be dropped. No metric, degeneracy beyond the deliberately zero tangent space, interval, endpoint, choice, or biconditional occurs. [F1, F2, step 1.1, step 2.1] ∎
