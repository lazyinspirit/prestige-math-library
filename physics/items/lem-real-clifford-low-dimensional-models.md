---
id: lem-real-clifford-low-dimensional-models
kind: lemma
title: "Low-dimensional real Clifford algebra models"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-complex-clifford-classification-and-graded-products
dependency_level: 4
deps:
  - def-real-quaternion-matrix-algebra-notation
  - thm-complex-numbers-form-a-field
  - def-clifford-algebra-of-a-quadratic-space
  - thm-universal-property-of-clifford-algebra
  - thm-clifford-pbw-basis-and-associated-graded
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Jean Gallier, Clifford Algebras, Clifford Groups, and a Generalization of the Quaternions: The Pin and Spin Groups, §1.6"
      url: https://arxiv.org/pdf/0805.0311
    - title: "Konstantin Wernli, Lecture Notes on Spin Geometry, §1.4.1, Proposition 1.4.5 and Table 1.1"
      url: https://arxiv.org/pdf/1911.09766
---

## Statement

Use the positive-square-first convention $Q_{p,q}=\sum_{i=1}^p x_i^2-\sum_{j=1}^q x_{p+j}^2$, and let $M_2(D)$ have the meaning in [[def-real-quaternion-matrix-algebra-notation]]. Then

| Signature | Algebra |
|---|---|
| $(1,0)$ | $\mathbb R\oplus\mathbb R$ |
| $(0,1)$ | $\mathbb C$ |
| $(2,0)$ | $M_2(\mathbb R)$ |
| $(1,1)$ | $M_2(\mathbb R)$ |
| $(0,2)$ | $\mathbb H$ |

## Facts & Assumptions

**Given:** The real Clifford quotient with relation $v^2=Q(v)1$, the displayed standard signatures, and the coefficient algebras $\mathbb C,\mathbb H,M_2(\mathbb R)$.

[F1] In the Clifford quotient, each canonical generator satisfies $\bar v^{\,2}=Q(v)1$ ([[def-clifford-algebra-of-a-quadratic-space]]).

[F2] A linear map from a quadratic space to a unital associative algebra that satisfies every square relation extends uniquely to its Clifford algebra ([[thm-universal-property-of-clifford-algebra]]).

[F3] For an ordered basis of an $n$-dimensional quadratic space, the increasing square-free Clifford monomials form a basis of size $2^n$ ([[thm-clifford-pbw-basis-and-associated-graded]]).

[F4] The real algebra $\mathbb H$ has basis $1,i,j,k$ with $ij=k$ ([[def-real-quaternion-matrix-algebra-notation]]); every complex number has a unique form $a+bi$, so $1,i$ is a real basis of $\mathbb C$ ([[thm-complex-numbers-form-a-field]]).

## Proof

**Proof technique:** explicit representations and dimension comparison.

1.1 For $\mathrm{Cl}_{1,0}$, send its positive generator to $(1,-1)\in\mathbb R\oplus\mathbb R$; every multiple $x e$ then squares to $x^2(1,1)$, so [F2] gives a homomorphism. Its image contains $(1,1)$ and $(1,-1)$, which span the target over $\mathbb R$, and [F3] gives dimension $2$ on the source, so the map is an isomorphism. For $\mathrm{Cl}_{0,1}$, send its negative generator to $i\in\mathbb C$; every multiple $x e$ squares to $-x^2$, and the images $1,i$ are a basis, so [F2]–[F3] give an isomorphism. [given, F2, F3, F4, construct]

1.2 Let $A=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$, $B_+=\begin{pmatrix}0&1\\1&0\end{pmatrix}$, and $B_-=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$. Direct multiplication gives $A^2=B_+^2=I$, $B_-^2=-I$, and $AB_+=-B_+A$, $AB_-=-B_-A$. Hence $(xA+yB_+)^2=(x^2+y^2)I$ and $(xA+yB_-)^2=(x^2-y^2)I$ for all real $x,y$, so [F2] gives the required homomorphisms from $\mathrm{Cl}_{2,0}$ and $\mathrm{Cl}_{1,1}$. In each case the images of $1$, the two generators, and their product are the four linearly independent matrices $I,A,B_+,B_-$ in some order, so the maps are surjective; [F3] gives dimension $4$ on each source, making both maps isomorphisms. [given, F1, F2, F3, construct, algebra]

2.1 Send the two negative generators of $\mathrm{Cl}_{0,2}$ to $i,j\in\mathbb H$. They square to $-1$ and anticommute, so every linear combination $xi+yj$ squares to $-(x^2+y^2)$ and [F2] gives a homomorphism. Its image contains $1,i,j,ij=k$, the basis in [F4]; [F3] gives dimension $4$ on the source, so this homomorphism is an isomorphism. [given, F1, F2, F3, F4, construct] ∎
