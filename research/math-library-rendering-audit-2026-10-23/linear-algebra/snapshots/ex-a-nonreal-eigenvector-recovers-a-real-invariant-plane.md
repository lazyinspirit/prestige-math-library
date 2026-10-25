---
id: ex-a-nonreal-eigenvector-recovers-a-real-invariant-plane
kind: example
title: "One nonreal eigenvector reconstructs the invariant real plane of a rotation-scaling block"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-a-nonreal-eigenvector-produces-an-invariant-real-two-plane]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Complexification (notes)"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/complexification.pdf"
---

## Example

Let $T:\mathbb R^2\to\mathbb R^2$ have matrix

$$A=\begin{pmatrix}1&-1\\ 1&1\end{pmatrix}.$$

The eigenvalue $\lambda=1+i$ has the eigenvector $w=(1,-i)=u+iv$ with $u=(1,0)$ and $v=(0,-1)$. The corollary reconstructs from $w$ alone the $T$-invariant real plane $\operatorname{span}_{\mathbb R}\{u,v\}=\mathbb R^2$ and the rotation-scaling block: in the ordered basis $(u,-v)=(e_1,e_2)$ the matrix of $T$ is the displayed $A$ itself, which has the standard form $\bigl(\begin{smallmatrix}a&-b\\ b&a\end{smallmatrix}\bigr)$ with $a=b=1$.

## Facts & Assumptions

**Given:** The operator $T$ with the displayed matrix $A$ and the vector $w=(1,-i)$.

[L1] A nonreal eigenvector $u+iv$ with eigenvalue $a+bi$, $b\ne0$, yields independent $u,v$, an invariant real plane, and the matrix $\bigl(\begin{smallmatrix}a&-b\\ b&a\end{smallmatrix}\bigr)$ in the ordered basis $(u,-v)$ ([[cor-a-nonreal-eigenvector-produces-an-invariant-real-two-plane]]).

## Verification

**Proof technique:** direct.

1.1 The characteristic polynomial is $\det(xI-A)=(x-1)^2+1=x^2-2x+2$, whose roots are $1\pm i$, both nonreal. [algebra]

1.2 For $\lambda=1+i$, the equation $(A-\lambda I)w=0$ is $-ix-y=0$ and $x-iy=0$, so $y=-ix$; the choice $x=1$ gives $w=(1,-i)=u+iv$ with $u=(1,0)$ and $v=(0,-1)$. [algebra]

2.1 Applying [L1] with $a=b=1$: $u$ and $v$ are $\mathbb R$-linearly independent, $\operatorname{span}_{\mathbb R}\{u,v\}=\mathbb R^2$ is $T$-invariant, and in the ordered basis $(u,-v)=(e_1,e_2)$ the matrix of $T$ is $\bigl(\begin{smallmatrix}a&-b\\ b&a\end{smallmatrix}\bigr)=\bigl(\begin{smallmatrix}1&-1\\ 1&1\end{smallmatrix}\bigr)=A$. [L1, step 1.2]

2.2 The conjugate vector $\sigma(w)=(1,i)$ is an eigenvector with eigenvalue $1-i$, as recorded in [L1]. [L1, step 1.2]

3.1 Steps 2.1 and 2.2 reconstruct the invariant plane and the block from the single nonreal eigenvector. [step 2.1, step 2.2] ∎
