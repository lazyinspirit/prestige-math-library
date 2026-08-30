---
id: ex-the-special-linear-group-as-a-regular-level-set
kind: example
title: "The special linear group is a codimension-one embedded submanifold"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-a-regular-level-set-is-an-embedded-submanifold, def-determinant-of-a-square-matrix, thm-determinant-multiplicative, cor-inverse-matrix-by-adjugate, thm-total-derivative-computes-directional-and-partial-derivatives, thm-algebra-of-derivatives]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, Level Sets"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
---

## Example

For $n\ge1$, the special linear group

$$SL(n,\mathbb R)=\{A\in M_n(\mathbb R):\det A=1\}$$

is an embedded codimension-one submanifold of the Euclidean space
$M_n(\mathbb R)\cong\mathbb R^{n^2}$.

## Facts & Assumptions

**Given:** The determinant map $\det:M_n(\mathbb R)\to\mathbb R$.

[L1] A nonempty regular level set of a map into an $n$-manifold is an embedded
submanifold of codimension $n$
([[thm-a-regular-level-set-is-an-embedded-submanifold]]).

[F1] The determinant is multiplicative, and an invertible matrix has inverse
given by the adjugate formula
([[def-determinant-of-a-square-matrix]], [[thm-determinant-multiplicative]],
[[cor-inverse-matrix-by-adjugate]]).

[L2] Euclidean differentials are computed by one-variable directional
derivatives and the usual derivative algebra
([[thm-total-derivative-computes-directional-and-partial-derivatives]],
[[thm-algebra-of-derivatives]]).

## Verification
**Proof technique:** direct.

1.1 Let $A\in SL(n,\mathbb R)$ and $H\in M_n(\mathbb R)$. Using [F1], for small $t$ one has $\det(A+tH)=\det(A)\det(I+tA^{-1}H)=\det(I+tA^{-1}H)$ because $\det(A)=1$. Differentiating at $t=0$ with [L2] gives $D(\det)_A(H)=\operatorname{tr}(A^{-1}H)$. [F1, L2, given]

2.1 This linear functional is surjective, because $D(\det)_A(A/n)=\operatorname{tr}(I/n)=1$. Hence $1$ is a regular value of the determinant. [step 1.1]

3.1 The level set is nonempty because $\det I_n=1$. By [L1], $\det^{-1}(1)=SL(n,\mathbb R)$ is therefore an embedded codimension-one submanifold. [L1, step 2.1, algebra] ∎
