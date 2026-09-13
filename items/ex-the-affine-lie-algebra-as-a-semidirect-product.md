---
id: ex-the-affine-lie-algebra-as-a-semidirect-product
kind: example
title: The affine Lie algebra as a semidirect product
status: draft
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-semidirect-product-of-lie-algebras]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, semidirect products in §3.3"
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
---

## Example

The Lie algebra of affine transformations of $V$ is
$\mathfrak{gl}(V)\ltimes V$, with bracket

$$[(A,u),(B,v)]=([A,B],Av-Bu).$$

## Facts & Assumptions

**Given:** A vector space $V$, with $\mathfrak{gl}(V)$ acting on the abelian
Lie algebra $V$ by evaluation.

[L1] The semidirect bracket is that of
[[def-semidirect-product-of-lie-algebras]].

## Verification

**Proof technique:** direct block-matrix computation.

1.1 Represent $(A,u)$ on $V\oplus k$ by $M(A,u)=\begin{pmatrix}A&u\\0&0\end{pmatrix}$, where $u:k\to V$ sends $1$ to $u$. Multiplication gives $M(A,u)M(B,v)=\begin{pmatrix}AB&Av\\0&0\end{pmatrix}$. [construct, algebra]

2.1 Subtracting the reversed product yields $[M(A,u),M(B,v)]=M([A,B],Av-Bu)$, exactly the bracket in [L1] because $V$ is abelian. [step 1.1, L1, algebra]

3.1 Thus the block realization identifies the affine Lie algebra with the stated semidirect product. [step 2.1] ∎
