---
id: ex-graded-clifford-module-types-in-low-dimensions
kind: example
title: "Even-subalgebra types determine small graded Clifford modules"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-complex-clifford-classification-and-graded-products-examples
dependency_level: 8
deps:
  - def-real-quaternion-matrix-algebra-notation
  - def-clifford-graded-algebra-module-and-tensor-product
  - lem-clifford-zero-dimensional-algebra-is-base-field
  - lem-real-clifford-low-dimensional-models
  - lem-clifford-even-subalgebra-signature-identification
  - thm-graded-clifford-modules-and-real-complex-types
justified_by: []
landmark: false
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references: []
---

## Example

For signatures $(1,0)$, $(0,1)$, $(2,0)$, $(1,1)$, and $(0,2)$, the even subalgebras are respectively $\mathbb R$, $\mathbb R$, $\mathbb C$, $\mathbb R\oplus\mathbb R$, and $\mathbb C$. Hence their graded-simple module counts and coefficient types are respectively one real, one real, one complex, two real, and one complex.

## Facts & Assumptions

**Given:** The positive-square-first convention and the five real Clifford algebras in the Example.

[F1] The even subalgebra of $\mathrm{Cl}_{p,q}$ is $\mathrm{Cl}_{q,p-1}$ for $p>0$ and $\mathrm{Cl}_{0,q-1}$ for $p=0,q>0$ ([[lem-clifford-even-subalgebra-signature-identification]]).

[F2] Graded-simple Clifford modules correspond to simple modules over the even subalgebra; matrix algebra factors determine their coefficient types ([[thm-graded-clifford-modules-and-real-complex-types]]).

[F3] The Clifford algebra of the zero vector space over $\mathbb R$ is $\mathbb R$ ([[lem-clifford-zero-dimensional-algebra-is-base-field]]).

[F4] $\mathrm{Cl}_{0,1}\cong\mathbb C$ and $\mathrm{Cl}_{1,0}\cong\mathbb R\oplus\mathbb R$ ([[lem-real-clifford-low-dimensional-models]]).

## Verification

1.1 For $\mathrm{Cl}_{1,0}$ and $\mathrm{Cl}_{2,0}$, [F1] gives even algebras $\mathrm{Cl}_{0,0}$ and $\mathrm{Cl}_{0,1}$; [F3]–[F4] identify these with $\mathbb R$ and $\mathbb C$. For $\mathrm{Cl}_{0,1}$ and $\mathrm{Cl}_{0,2}$ it gives $\mathrm{Cl}_{0,0}=\mathbb R$ and $\mathrm{Cl}_{0,1}=\mathbb C$. For $\mathrm{Cl}_{1,1}$ it gives $\mathrm{Cl}_{1,0}=\mathbb R\oplus\mathbb R$ by [F4]. [given, F1, F3, F4, algebra]

2.1 The fields $\mathbb R$ and $\mathbb C$ each have one simple module of their own coefficient type, while $\mathbb R\oplus\mathbb R$ has two simple modules, one supported on each factor. Applying [F2] therefore gives the five counts and types in the Example. In every positive-dimensional case an invertible odd generator identifies the two parity components, so each resulting graded module has equal dimensions in degrees $0$ and $1$. [F2, step 1.1, algebra] ∎
