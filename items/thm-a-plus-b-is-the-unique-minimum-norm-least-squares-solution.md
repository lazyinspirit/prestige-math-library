---
id: thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution
kind: theorem
title: "For every right-hand side $b$, $A^+b$ is the unique least-squares solution of minimum Euclidean norm"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-moore-penrose-image-and-kernel-identities,
       thm-aa-plus-and-a-plus-a-are-orthogonal-projections-onto-the-image-spaces,
       thm-least-squares-solutions-and-normal-equation,
       thm-adjoint-kernel-and-range-orthogonality]
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Gene H. Golub, Least squares, singular values and matrix approximations"
      url: "https://dml.cz/bitstream/handle/10338.dmlcz/700449/AplMat_11-1966-5_17.pdf"
    - title: "Stanford CS205L, Unit 11: Zero Singular Values"
      url: "https://web.stanford.edu/class/cs205l/assets/unit_11_svd_pinv_solns.pdf"
---

## Statement

Let $\mathbb F\in\{\mathbb R,\mathbb C\}$, let
$A\in M_{m\times n}(\mathbb F)$, and let $b\in\mathbb F^m$. Then $A^+b$ is
a least-squares solution of $Ax=b$, and among all least-squares solutions it
is the unique one of minimum Euclidean norm.

## Facts & Assumptions

**Given:** A scalar field $\mathbb F\in\{\mathbb R,\mathbb C\}$, a matrix
$A\in M_{m\times n}(\mathbb F)$, and a right-hand side $b\in\mathbb F^m$.

[L1] $AA^+$ is the orthogonal projection onto $\operatorname{im}A$ ([[thm-aa-plus-and-a-plus-a-are-orthogonal-projections-onto-the-image-spaces]]).

[L2] $\operatorname{im}A^+=\operatorname{im}A^*$
([[cor-moore-penrose-image-and-kernel-identities]]).

[L3] Least-squares minimisers are exactly the solutions of
$A^*(Ax-b)=0$, and any two minimisers differ by an element of $\ker A$
([[thm-least-squares-solutions-and-normal-equation]]).

[L4] $\ker A^*=(\operatorname{im}A)^\perp$
([[thm-adjoint-kernel-and-range-orthogonality]]).

[L5] $\operatorname{im}A^*=(\ker A)^\perp$
([[thm-adjoint-kernel-and-range-orthogonality]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $AA^+b$ is the orthogonal projection of $b$ onto $\operatorname{im}A$. Therefore the residual $b-AA^+b$ lies in $(\operatorname{im}A)^\perp=\ker A^*$ by [L4], so $A^*(AA^+b-b)=0$ and [L3] shows that $A^+b$ is a least-squares minimiser. [L1, L3, L4]

1.2 By [L2] and [L5], $A^+b\in\operatorname{im}A^+=\operatorname{im}A^*=(\ker A)^\perp$. Thus
$A^+b$ is orthogonal to every vector in $\ker A$. [L2, L5, algebra]

2.1 Let $x$ be any least-squares minimiser. By [L3], $x-A^+b\in\ker A$, so $x=A^+b+z$ for some $z\in\ker A$. Step 1.2 then gives $$ \|x\|_2^2=\|A^+b\|_2^2+\|z\|_2^2\ge \|A^+b\|_2^2. $$ [L3, step 1.2, algebra]

3.1 Equality in step 2.1 holds only when $z=0$, so the least-squares minimiser of minimum Euclidean norm is unique and equals $A^+b$. [step 2.1, algebra]

4.1 Step 1.1 proves the least-squares claim and steps 2.1 and 3.1 prove the minimum-norm claim. [step 1.1, step 2.1, step 3.1] ∎
