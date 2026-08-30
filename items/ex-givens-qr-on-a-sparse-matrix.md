---
id: ex-givens-qr-on-a-sparse-matrix
kind: example
title: "Givens QR can zero selected entries of a sparse matrix one at a time"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries, thm-successive-householder-or-givens-transformations-produce-full-and-reduced-qr-with-operation-counts]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Givens rotations section"
      url: "https://fncbook.com/house/"
---

## Example

For
$$A=\begin{pmatrix}3&4\\4&3\\0&2\end{pmatrix},$$
first apply a Givens rotation in rows $1,2$ with $c=3/5$, $s=4/5$, then a
second Givens rotation in rows $2,3$ with
$c=-7/\sqrt{149}$, $s=10/\sqrt{149}$. The product zeros one selected entry at a
time and yields
$$R=\begin{pmatrix}5&\frac{24}{5}\\0&\frac{\sqrt{149}}{5}\\0&0\end{pmatrix}.$$

## Facts & Assumptions

**Given:** The displayed matrix $A$ and the two named Givens rotations.

[L1] Givens transformations are unitary and can annihilate a chosen second coordinate ([[thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries]]).

[L2] Successive Givens transformations produce QR factorizations ([[thm-successive-householder-or-givens-transformations-produce-full-and-reduced-qr-with-operation-counts]]).

## Verification

**Proof technique:** direct.

1.1 The first rotation $G_1=\begin{pmatrix}3/5&4/5&0\\-4/5&3/5&0\\0&0&1\end{pmatrix}$ sends the first column $(3,4,0)^{\mathsf T}$ to $(5,0,0)^{\mathsf T}$, so it zeros the $(2,1)$ entry while preserving the zero in position $(3,1)$. Applied to the second column, it gives $(24/5,-7/5,2)^{\mathsf T}$. [L1, algebra]
2.1 The second rotation $$G_2=\begin{pmatrix}1&0&0\\0&-7/\sqrt{149}&10/\sqrt{149}\\0&-10/\sqrt{149}&-7/\sqrt{149}\end{pmatrix}$$ acts only on rows $2,3$, so it keeps the first column fixed and sends $(-7/5,2)^{\mathsf T}$ to $(\sqrt{149}/5,0)^{\mathsf T}$. Hence $$R=G_2G_1A=\begin{pmatrix}5&24/5\\0&\sqrt{149}/5\\0&0\end{pmatrix},$$ the displayed upper-triangular matrix. [step 1.1, L1, algebra]
3.1 Since both rotations are unitary, $Q=(G_2G_1)^*$ and $A=QR$. This verifies the Givens QR factorisation promised by [L2]. [step 2.1, L2, algebra]
4.1 Steps 1.1-3.1 verify the example. [step 1.1, step 2.1, step 3.1] ∎
