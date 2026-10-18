---
id: lem-gaussian-matrix-orthogonal-unitary-invariance-and-block-independence
kind: lemma
title: Orthogonal and unitary invariance of Gaussian matrix blocks
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-standard-real-and-normalized-complex-gaussian-matrix-law, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Halko, Martinsson, and Tropp, Finding Structure with Randomness, §10.1"
      url: "https://users.oden.utexas.edu/~pgm/Pubs/2010_HMT_random_review.pdf"
    - title: "Martinsson and Tropp, Randomized Numerical Linear Algebra: Foundations & Algorithms, §11.4.2"
      url: "https://arxiv.org/pdf/2002.01387"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice for the finite-dimensional Gaussian probability law.
Let $G\in F^{a\times b}$ have the iid Gaussian law of
[[def-standard-real-and-normalized-complex-gaussian-matrix-law]]. If $U,V$
are compatible orthogonal matrices for $F=\mathbb R$ or unitary matrices for
$F=\mathbb C$, then $U^*GV$ has the same iid law as $G$. In particular, if
$W\in F^{n\times n}$ is orthogonal/unitary and $\Omega\in F^{n\times\ell}$
is iid Gaussian, then any two disjoint row blocks of $W^*\Omega$ are
independent standard Gaussian matrices.

## Facts & Assumptions

**Given:** Countable Choice for the finite Gaussian law, and a finite iid Gaussian matrix and compatible orthogonal or unitary matrices.

[F1] [[def-standard-real-and-normalized-complex-gaussian-matrix-law]]: the joint density of $G$ is a constant times $e^{-\|G\|_F^2/2}$ over real coordinates in the real case and a constant times $e^{-\|G\|_F^2}$ in the normalized complex case; the entry coordinates are independent.

[A1] Countable Choice supplies the finite-dimensional Lebesgue measure used by the Gaussian densities ([[def-countable-choice]]).

## Proof

1.1 Regard a matrix as its finite list of real coordinates. Multiplying the independent scalar densities in [F1] gives joint density $C e^{-\|G\|_F^2/2}$ over $\mathbb R$ or $C'e^{-\|G\|_F^2}$ over $\mathbb C$. The maps $G\mapsto U^*GV$ are real-linear isometries for the Frobenius norm; their real Jacobian matrix $O$ satisfies $O^TO=I$, hence $|\det O|=1$. Change of variables therefore preserves the joint density, so the transformed matrix has the same law. [given, F1, A1, algebra]

2.1 The density in [F1] factors over all transformed entries because its exponent is the sum of the entrywise squared moduli and its normalizing constant is the product of the scalar normalizers. Thus the entries remain independent and each retains its original scalar law. [step 1.1, F1, algebra]

3.1 Apply the invariance with $U=W$ and $V=I$. Disjoint coordinate blocks of the resulting iid matrix have a joint density that factors into the product of their block densities, which is exactly independence; both blocks have their declared standard laws. [step 2.1, F1, algebra] ∎
