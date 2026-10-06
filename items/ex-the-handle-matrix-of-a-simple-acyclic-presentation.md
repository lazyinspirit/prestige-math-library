---
id: ex-the-handle-matrix-of-a-simple-acyclic-presentation
kind: example
title: The handle matrix of a simple acyclic presentation
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 16
deps:
- def-determinant-of-a-square-matrix
- def-matrix-product-and-identity-matrix
- def-middle-handle-intersection-matrix-of-an-h-cobordism
- lem-acyclicity-makes-the-simply-connected-middle-handle-matrix-unimodular
- lem-handle-slides-reduce-a-unimodular-middle-handle-matrix-to-the-identity
- thm-smith-normal-form-existence-over-a-pid
- def-countable-choice
- lem-whitney-trick-realizes-algebraic-middle-handle-cancellation-geometrically
- lem-middle-handle-pairs-with-one-geometric-intersection-cancel
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow, Princeton University Press 1965; scanned edition with searchable text layer)
    url: https://www.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf
    locator: Introduction and §§1--9, printed pp. 1--113; §5 and §7, printed pp. 45--66 and 79--92
  - title: Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, Oxford University Press 2002; complete electronic copy)
    url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
    locator: Chapter 8 §§8.1--8.2, printed pp. 147--163 (electronic pp. 154--170)
verification:
  precheck: pass
---
## Example

The matrix $A=\begin{pmatrix}2&1\\1&1\end{pmatrix}$ lies in
$\operatorname{GL}_2(\mathbb Z)$ (its determinant is $1$). It is carried to the
identity by the following elementary operations, each of the kinds realised
geometrically by handle slides, renaming and reorientation: interchange the two
rows, giving $\begin{pmatrix}1&1\\2&1\end{pmatrix}$; subtract twice row $1$ from
row $2$, giving $\begin{pmatrix}1&1\\0&-1\end{pmatrix}$; subtract column $1$
from column $2$, giving $\begin{pmatrix}1&0\\0&-1\end{pmatrix}$; multiply row
$2$ by $-1$, giving $I_2$. Consequently, under $\mathrm{AC}_\omega$ ([[def-countable-choice]]), a connected simply connected h-cobordism of dimension $n+1\ge6$, presented in indices $k,k+1$, $2\le k\le n-2$, with two
middle handles of each of two adjacent indices and intersection matrix $A$ can
be slid to a presentation with matrix $I_2$, after which the Whitney trick
produces a cancelling pair configuration and the pairs cancel; this is the
finite model for the diagonalisation and cancellation steps of the theorem
([[def-middle-handle-intersection-matrix-of-an-h-cobordism]]).

## Facts & Assumptions

**Given:** The integer matrix $A=\begin{pmatrix}2&1\\1&1\end{pmatrix}$ and the square matrices $I_2$, together with the displayed sequence of row and column operations.

[F1] The determinant of a $2\times2$ matrix is $ad-bc$, and a square integer matrix is invertible over $\mathbb Z$ exactly when its determinant is a unit; the identity matrix satisfies $\det I_2=1$ ([[def-determinant-of-a-square-matrix]], [[def-matrix-product-and-identity-matrix]]).

[F2] An invertible integer matrix is carried to the identity by finitely many row and column additions, interchanges and sign changes, and the general Smith normal form theorem gives the diagonal target, while the handle-matrix reduction lemma proves its finite elementary implementation over $\mathbb Z$ ([[thm-smith-normal-form-existence-over-a-pid]], [[lem-handle-slides-reduce-a-unimodular-middle-handle-matrix-to-the-identity]]).

[F3] Under countable choice and the simply connected h-cobordism dimension/index hypotheses, a presentation with handles only in two adjacent middle indices $k,k+1$ and invertible middle-handle matrix is unimodular, and each elementary row or column operation is realised on the presentation by a handle slide, a renumbering or a reorientation, all preserving the presented manifold relative to the incoming boundary ([[lem-acyclicity-makes-the-simply-connected-middle-handle-matrix-unimodular]], [[lem-handle-slides-reduce-a-unimodular-middle-handle-matrix-to-the-identity]]).

## Verification

**Proof technique:** direct.

1.1 The determinant of $A$ is $2\cdot1-1\cdot1=1$, so by [F1] the matrix $A$ is invertible over $\mathbb Z$ with $A\in\operatorname{GL}_2(\mathbb Z)$ and inverse $\begin{pmatrix}1&-1\\-1&2\end{pmatrix}$, whose product with $A$ is the identity. [F1, given]

1.2 The displayed operations transform $A$ into $I_2$: interchanging the rows gives $\begin{pmatrix}1&1\\2&1\end{pmatrix}$; subtracting twice the first row from the second gives $\begin{pmatrix}1&1\\0&-1\end{pmatrix}$; subtracting the first column from the second gives $\begin{pmatrix}1&0\\0&-1\end{pmatrix}$; multiplying the second row by $-1$ gives $\begin{pmatrix}1&0\\0&1\end{pmatrix}=I_2$. Each step is a row or column addition, an interchange or a sign change, so the sequence is exactly the reduction of [F2]. [F1, F2, given]

2.1 If a two-index h-cobordism presentation with matrix $A$ satisfies the stated dimension, simple-connectivity and countable-choice hypotheses, [F3] realizes exactly these four operations by slides, relabeling and reorientation, preserving the manifold relative to the incoming face. Its matrix becomes $I_2$. Then [[lem-whitney-trick-realizes-algebraic-middle-handle-cancellation-geometrically]] and [[lem-middle-handle-pairs-with-one-geometric-intersection-cancel]] give geometric cancellation and the product presentation. This is conditional on such a handle presentation; invertibility of an arbitrary integer matrix alone is not an existence construction of a cobordism. [F2, F3, step 1.2] ∎
