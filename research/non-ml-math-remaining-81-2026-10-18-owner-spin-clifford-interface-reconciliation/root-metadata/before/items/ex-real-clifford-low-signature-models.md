---
id: ex-real-clifford-low-signature-models
kind: example
title: "Low-signature real Clifford algebras as C, H, and matrix algebras"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-complex-clifford-classification-and-graded-products-examples
dependency_level: 7
deps:
  - def-real-quaternion-matrix-algebra-notation
  - lem-real-clifford-low-dimensional-models
  - thm-real-complex-clifford-algebra-classification
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

With $v^2=Q(v)1$ and signatures ordered $(+^p,-^q)$, the five signatures $(1,0)$, $(0,1)$, $(2,0)$, $(1,1)$, and $(0,2)$ give respectively

$$
\mathbb R\oplus\mathbb R,\qquad \mathbb C,\qquad M_2(\mathbb R),\qquad M_2(\mathbb R),\qquad \mathbb H.
$$

This checks the sign and indexing conventions at the smallest dimensions.

## Facts & Assumptions

**Given:** The five standard real forms listed above.

[F1] The real classification table depends on $p-q\bmod8$ and the total dimension ([[thm-real-complex-clifford-algebra-classification]]).

[F2] The low-dimensional generator maps give $\mathrm{Cl}_{1,0}=\mathbb R\oplus\mathbb R$, $\mathrm{Cl}_{0,1}=\mathbb C$, $\mathrm{Cl}_{2,0}=M_2(\mathbb R)$, $\mathrm{Cl}_{1,1}=M_2(\mathbb R)$, and $\mathrm{Cl}_{0,2}=\mathbb H$ ([[lem-real-clifford-low-dimensional-models]]).

## Verification

1.1 For $(p,q)=(1,0)$, $n=1$ and $r=1$, so [F1] gives $\mathbb R\oplus\mathbb R$. For $(0,1)$, $r=7$, giving $\mathbb C$. For $(2,0)$, $n=2,r=2$, giving $M_2(\mathbb R)$; for $(1,1)$, $r=0$, also $M_2(\mathbb R)$; and for $(0,2)$, $r=6$, giving $\mathbb H$. [given, F1, algebra]

2.1 The models in [F2] verify those five substitutions by sending the generators respectively to $(1,-1)$, $i\in\mathbb C$, the two positive matrices $A,B_+$, the positive/negative matrices $A,B_-$, and the quaternion units $i,j$. In the matrix cases $A^2=B_+^2=I$, $B_-^2=-I$, and each displayed pair anticommutes; the four images of ordered monomials form a matrix basis. In the quaternion case $1,i,j,ij=k$ form the real basis. Thus the table entries agree with explicit relation-preserving models and the PBW dimensions. [F2, algebra] ∎
