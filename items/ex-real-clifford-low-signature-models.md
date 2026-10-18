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
  - thm-universal-property-of-clifford-algebra
  - thm-clifford-pbw-basis-and-associated-graded
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

[F2] The low-dimensional algebra identifications are $\mathrm{Cl}_{1,0}\cong\mathbb R\oplus\mathbb R$, $\mathrm{Cl}_{0,1}\cong\mathbb C$, $\mathrm{Cl}_{2,0}\cong M_2(\mathbb R)$, $\mathrm{Cl}_{1,1}\cong M_2(\mathbb R)$, and $\mathrm{Cl}_{0,2}\cong\mathbb H$ ([[lem-real-clifford-low-dimensional-models]]).

[F3] A linear map satisfying every quadratic square relation extends uniquely to a unital Clifford-algebra homomorphism ([[thm-universal-property-of-clifford-algebra]]).

[F4] Ordered square-free monomials form a Clifford basis, of dimension $2^n$ in dimension $n$ ([[thm-clifford-pbw-basis-and-associated-graded]]).

[F5] The coefficient algebras have real bases $1,i$ for $\mathbb C$ and $1,i,j,k$ for $\mathbb H$, with $i^2=j^2=-1$ and $ij=-ji=k$ in $\mathbb H$ ([[def-real-quaternion-matrix-algebra-notation]]).

## Verification

1.1 For $(p,q)=(1,0)$, $n=1$ and $r=1$, so [F1] gives $\mathbb R\oplus\mathbb R$. For $(0,1)$, $r=7$, giving $\mathbb C$. For $(2,0)$, $n=2,r=2$, giving $M_2(\mathbb R)$; for $(1,1)$, $r=0$, also $M_2(\mathbb R)$; and for $(0,2)$, $r=6$, giving $\mathbb H$. [given, F1, algebra]

1.2 Set $A=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$, $B_+=\begin{pmatrix}0&1\\1&0\end{pmatrix}$, and $B_-=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$. Direct multiplication gives $A^2=B_+^2=I$, $B_-^2=-I$, $AB_+=-B_+A=B_-$, and $AB_-=-B_-A=B_+$. Thus $(xA+yB_+)^2=(x^2+y^2)I$ and $(xA+yB_-)^2=(x^2-y^2)I$. The four matrices $I,A,B_+,B_-$ are linearly independent: a zero linear combination has diagonal entries $a+b=a-b=0$ and off-diagonal entries $c+d=c-d=0$, forcing all coefficients to vanish. [given, construct, algebra]

2.1 For the five signatures in order, send the standard generators to $(1,-1)$, to $i\in\mathbb C$, to $A,B_+$, to $A,B_-$, and to $i,j\in\mathbb H$. The one-generator images have the required squares; step 1.2 checks every linear combination in both matrix cases; and [F5] gives $(xi+yj)^2=-(x^2+y^2)$ in the quaternion case. Hence [F3] extends each linear map to a unital algebra homomorphism. The images of the ordered monomials are respectively the real bases $(1,1),(1,-1)$; $1,i$; $I,A,B_+,B_-$; $I,A,B_-,B_+$; and $1,i,j,k$. They span each target and are linearly independent by step 1.2 and [F5], and the source dimensions are $2,2,4,4,4$ by [F4]. Each homomorphism is therefore an isomorphism, explicitly realizing [F2] and agreeing with step 1.1. [F2, F3, F4, F5, step 1.1, step 1.2, construct, algebra] ∎
