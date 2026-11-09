---
id: lem-author-b02e51f9da03-stable-invariants
kind: lemma
title: Stable triviality fixes the K-zero class and determinant
status: published
domain: mathematics
deps:
  - def-stably-free-bundles
  - def-vector-bundle-classes
  - def-exterior-determinant-bundles
  - math:def-axiom-of-choice
dependency_roles:
  def-stably-free-bundles: mathematical-premise
  def-vector-bundle-classes: mathematical-premise
  def-exterior-determinant-bundles: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 12
---

## Statement
Assume AC. If a rank-$r$ bundle $E$ on a noetherian affine scheme $X$ has a stable trivialization $E\oplus\mathcal O_X^N\cong\mathcal O_X^{r+N}$, then $[E]=r[\mathcal O_X]$ in the article\'s perfect spectral $K_0(X)$, and $\det E\cong\mathcal O_X$. Here $\det E=\Lambda^rE$ is the determinant line. These conclusions use the actual stable isomorphism; they do not assert that the bundle itself is trivial.

## Facts & Assumptions

**Given:** The data and hypotheses in the statement, AC and the article's fixed universe bounds where its K-theory is used.

**Goal:** Establish the stated conclusion.

[F1] The affine comparison takes vector-bundle exact-sequence classes to the article perfect spectral object classes. [[def-vector-bundle-classes]]

[F2] Determinants are the top exterior powers with their local wedge bases. [[def-exterior-determinant-bundles]]

[F3] The stable trivialization is the actual isomorphism in [[def-stably-free-bundles]].

## Proof

1.1 The split exact-sequence relation gives $[E]+N[\mathcal O_X]=(r+N)[\mathcal O_X]$. Subtract the common class in the abelian group to obtain $[E]=r[\mathcal O_X]$, and use [F1] to read it in the spectral group. [F1, F3, algebra]

2.1 Take top exterior powers of the stable isomorphism. Wedge the local basis of $E$ before the standard basis of the trivial summand; this gives $\det(E\oplus\mathcal O_X^N)\cong\det E$. The construction glues because changes of frame act by their determinant. The determinant of $\mathcal O_X^{r+N}$ is canonically trivial, so $\det E$ is trivial. [F2, F3, step 1.1, construct] ∎
