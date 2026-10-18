---
id: lem-gaussian-matrix-orthogonal-unitary-invariance-and-block-independence
kind: lemma
title: Orthogonal and unitary invariance of Gaussian matrix blocks
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-standard-real-and-normalized-complex-gaussian-matrix-law, def-countable-choice, cor-lebesgue-measure-is-invariant-under-orthogonal-linear-maps]
proof_strategy: direct
provenance:
  statement: ai-altered
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

[F1] [[def-standard-real-and-normalized-complex-gaussian-matrix-law]]: when $ab>0$, the joint density of $G$ is a constant times $e^{-\|G\|_F^2/2}$ over real coordinates in the real case and a constant times $e^{-\|G\|_F^2}$ in the normalized complex case; the entry coordinates are independent. When $a=0$ or $b=0$, the law is the point mass at the empty matrix.

[F2] Under Countable Choice, a real orthogonal coordinate map preserves Lebesgue measurable sets and their measure ([[cor-lebesgue-measure-is-invariant-under-orthogonal-linear-maps]]). The pullback therefore preserves nonnegative integrals: first this holds for indicators by the set identity, then for nonnegative simple functions by finite linearity, and finally for all nonnegative functions by their defining simple-function suprema.

[A1] Countable Choice supplies the finite-dimensional Lebesgue measure used by the Gaussian densities ([[def-countable-choice]]).

## Proof

1.1 If there are no entry coordinates, the matrix is deterministic and its law is unchanged. Otherwise regard the matrix as its finite list of real coordinates. Multiplying the independent scalar densities in [F1] gives joint density $C e^{-\|G\|_F^2/2}$ over $\mathbb R$ or $C'e^{-\|G\|_F^2}$ over $\mathbb C$. The maps $G\mapsto U^*GV$ are real-linear isometries for the Frobenius norm; their real Jacobian matrix $O$ satisfies $O^TO=I$, hence $|\det O|=1$. By [F2], this real orthogonal map preserves measure, also in the complex case viewed in $\mathbb R^{2ab}$. Its inverse preserves the Frobenius norm, so integrating over the preimage of any Borel set gives the same density integral over that set. Hence the transformed matrix has the same law. [given, F1, F2, A1, algebra]

2.1 In the nonempty-coordinate case, the density in [F1] factors over all transformed entries because its exponent is the sum of the entrywise squared moduli and its normalizing constant is the product of the scalar normalizers. Thus the entries remain independent and each retains its original scalar law. For an empty matrix the assertion about entries is vacuous. [step 1.1, F1, algebra]

3.1 Apply the invariance with $U=W$ and $V=I$. For two nonempty disjoint row blocks, integrating out the other entries leaves the product of their block densities, which proves independence and the declared standard block laws. An empty block has the prescribed deterministic law and is independent of every other block, since each event for it has probability zero or one. [step 2.1, F1, algebra] ∎
