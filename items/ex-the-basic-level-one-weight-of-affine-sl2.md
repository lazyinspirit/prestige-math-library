---
id: ex-the-basic-level-one-weight-of-affine-sl2
kind: example
title: The basic level one weight of affine sl2
status: draft
origin: pipeline
deps: [lem-affine-central-coroot-from-the-transpose-null-ray, thm-integrability-criterion-for-simple-highest-weight-kac-moody-modules, prop-integrable-affine-highest-weights-have-nonnegative-integral-level, thm-finite-affine-indefinite-trichotomy-for-indecomposable-gcms, def-realization-of-a-generalized-cartan-matrix, def-kac-moody-integral-and-dominant-integral-weights]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Kleshchev, Lectures on Infinite Dimensional Lie Algebras
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
    - title: Perrin, Introduction to Kac-Moody Groups and Lie Algebras
      url: https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf
proof_strategy: direct
---

## Example

For $A=\begin{pmatrix}2&-2\\-2&2\end{pmatrix}$ indexed by $0,1$, fix a Cartan complement and prescribe any complex value there. The weight $\Lambda_0$ with $\Lambda_0(h_0)=1$, $\Lambda_0(h_1)=0$ and that complementary value is dominant integral. Its intrinsic central coroot is $c_A=h_0+h_1$, its level is one, and $L_A(\Lambda_0)$ is integrable and infinite dimensional. This is an intrinsic GCM statement; the complementary value does not specify a loop degree normalization.

## Facts & Assumptions

**Given:** The displayed matrix and a fixed complementary Cartan value.

[F1] The primitive positive transpose null vector defines the intrinsic central coroot ([[lem-affine-central-coroot-from-the-transpose-null-ray]]).

[F2] Dominant integral weights give integrable simple highest-weight modules ([[thm-integrability-criterion-for-simple-highest-weight-kac-moody-modules]]).

[F3] Positive-level nonzero highest-weight modules are infinite dimensional ([[prop-integrable-affine-highest-weights-have-nonnegative-integral-level]]).

[F4] An indecomposable GCM with a positive null vector is affine ([[thm-finite-affine-indefinite-trichotomy-for-indecomposable-gcms]]).

[F5] The minimal realization has independent coroots and dimension $2n-\operatorname{rank}A$ ([[def-realization-of-a-generalized-cartan-matrix]]).

[F6] Dominance and integrality concern only the simple-coroot labels ([[def-kac-moody-integral-and-dominant-integral-weights]]).

## Verification

1.1 The matrix has diagonal entries $2$, negative off-diagonal entries and a connected two-vertex graph, so it is an indecomposable GCM. Multiplication gives $A(1,1)^t=(0,0)^t$ and the first row is nonzero while the second is its negative, so the rank is one. F4 makes it affine. Since $A^t=A$, its positive primitive transpose null vector is $(1,1)$, whose entries have gcd one. F1 therefore gives $c_A=h_0+h_1$. [F1, F4, given]

1.2 By F5 the Cartan has dimension $4-1=3$ with independent $h_0,h_1$. Fix a complementary vector $z$ so that $(h_0,h_1,z)$ is a basis. For the prescribed $t\in\mathbb C$, the formula $\Lambda_0(a h_0+b h_1+c z)=a+ct$ defines a unique linear functional with the required values. Its labels $1,0$ satisfy F6, independently of $t$. [F5, F6, given]

2.1 Evaluating the coroot from 1.1 gives $\Lambda_0(c_A)=1+0=1$. F2 gives integrability of the nonzero simple highest-weight module, and F3 gives infinite dimension. The vanishing second label and arbitrary complementary scalar are both retained, including $t=0$. No zero-level or loop-normalization claim is inferred. All constructions use a finite basis and explicit coordinates, with no AC. [F2, F3, step 1.1, step 1.2] ∎
