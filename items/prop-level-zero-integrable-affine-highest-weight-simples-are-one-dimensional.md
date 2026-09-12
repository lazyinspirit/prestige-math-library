---
id: prop-level-zero-integrable-affine-highest-weight-simples-are-one-dimensional
kind: proposition
title: Level zero integrable affine highest weight simples are one dimensional
status: published
origin: pipeline
deps: [lem-affine-central-coroot-from-the-transpose-null-ray, lem-dominance-is-necessary-for-an-integrable-highest-weight-module]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-12
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

## Statement

An irreducible integrable highest-weight module for an indecomposable affine GCM, of intrinsic level zero, is one dimensional and its derived algebra acts trivially. Complementary Cartan directions may still act by nonzero scalars. In fact the same conclusion holds for any nonzero integrable cyclic highest-weight module of level zero.

## Facts & Assumptions

**Given:** A nonzero integrable highest-weight module with highest vector $v$ of weight $\lambda$ and level zero.

[F1] The intrinsic central coroot is $c_A=\sum_i b_i h_i$ with every $b_i$ a positive integer, and its scalar is $\lambda(c_A)$ ([[lem-affine-central-coroot-from-the-transpose-null-ray]]).

[F2] Dominance and the exact terminal simple-root string powers hold in any such integrable module ([[lem-dominance-is-necessary-for-an-integrable-highest-weight-module]]).

## Proof

1.1 By F2, every label $m_i=\lambda(h_i)$ is a nonnegative integer. The zero-level hypothesis and F1 give $0=\sum_i b_i m_i$. Since every coefficient is positive, a positive label would make this sum strictly positive. Hence every $m_i=0$. The terminal assertion in F2 now gives $f_i v=0$ for every $i$. Each $e_i v=0$ by the highest-vector condition, and every $h\in\mathfrak h$ acts on $v$ by $\lambda(h)$. [F1, F2, given]

2.1 Thus the nonzero line $\mathbb Cv$ is invariant under all generators $e_i,f_i,\mathfrak h$ and therefore under their Lie algebra and enveloping algebra. As $v$ generates the module, the module equals that line and has dimension one. On a one-dimensional representation every action is scalar, so for any $x,y$, the commutator acts by $\rho(x)\rho(y)-\rho(y)\rho(x)=0$. All of the derived algebra therefore acts trivially. The argument kills the simple-coroot labels, but it imposes no vanishing on values of $\lambda$ outside their span; these remain the scalar actions of complementary Cartan directions. [step 1.1, given]

3.1 This proves the asserted irreducible case and the stronger cyclic case without using irreducibility. The zero-module exception is excluded by $v\ne0$; the zero-level endpoint was used essentially in 1.1 and no positive-level conclusion is inferred here. There is no choice of bases or infinite family of witnesses: the single line is specified by $v$, and all label comparisons are finite. No AC or character formula enters. [step 1.1, step 2.1] ∎
