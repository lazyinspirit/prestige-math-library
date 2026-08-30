---
id: thm-least-squares-solutions-form-an-affine-kernel-translate-of-a-plus-b
kind: theorem
title: "Every least-squares solution has the form $A^+b+(I-A^+A)z$, and the same affine family specializes to exact solutions when $b\\in\\operatorname{im}A$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-moore-penrose-image-and-kernel-identities,
       thm-aa-plus-and-a-plus-a-are-orthogonal-projections-onto-the-image-spaces,
       thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution,
       thm-least-squares-solutions-and-normal-equation,
       thm-adjoint-kernel-and-range-orthogonality]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Gene H. Golub, Least squares, singular values and matrix approximations"
      url: "https://dml.cz/bitstream/handle/10338.dmlcz/700449/AplMat_11-1966-5_17.pdf"
---

## Statement

Let $A\in M_{m\times n}(\mathbb F)$ and $b\in\mathbb F^m$. A vector $x$ is a
least-squares solution of $Ax=b$ if and only if

$$x=A^+b+(I-A^+A)z$$

for some $z\in\mathbb F^n$. If $b\in\operatorname{im}A$, then the same family is
exactly the full solution set of $Ax=b$.

## Facts & Assumptions

**Given:** A matrix $A$ and a right-hand side $b$.

[L1] $A^+b$ is a least-squares minimiser, and every least-squares minimiser differs from it by an element of $\ker A$ ([[thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution]], [[thm-least-squares-solutions-and-normal-equation]]).

[L2] $A^+A$ is the orthogonal projection onto $\operatorname{im}A^*$ ([[thm-aa-plus-and-a-plus-a-are-orthogonal-projections-onto-the-image-spaces]]).

[L3] $\operatorname{im}A^*=(\ker A)^\perp$
([[thm-adjoint-kernel-and-range-orthogonality]]).

## Proof

**Proof technique:** direct.

1.1 By [L2] and [L3], $A^+A$ is the orthogonal projection onto $(\ker A)^\perp$. Therefore $I-A^+A$ is the orthogonal projection onto $\ker A$. In particular, its image is $\ker A$ and it vanishes on $(\ker A)^\perp$. [L2, L3, algebra]

2.1 By [L1], every least-squares minimiser has the form $A^+b+u$ with $u\in\ker A$. Since step 1.1 says every $u\in\ker A$ equals $(I-A^+A)z$ for some $z$, every least-squares minimiser has the stated form. [L1, step 1.1]

2.2 Conversely, if $x=A^+b+(I-A^+A)z$, then step 1.1 gives $(I-A^+A)z\in\ker A$. Hence $x$ differs from the least-squares minimiser $A^+b$ by a kernel vector, so [L1] implies that $x$ is again a least-squares minimiser. [L1, step 1.1, algebra]

3.1 If $b\in\operatorname{im}A$, then the least-squares residual can be $0$. Thus the least-squares minimisers are exactly the exact solutions of $Ax=b$, and steps 2.1-2.1 identify that exact solution set with the same affine family. [L1, step 2.1, step 2.2]

4.1 Steps 2.1 and 2.2 prove the if-and-only-if description, and step 3.1 gives the consistent specialisation. [step 2.1, step 2.2, step 3.1] ∎
