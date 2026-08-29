---
id: def-induced-matrix-p-norm
kind: definition
title: "The matrix norm induced by a published vector p-norm"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, def-matrix-product-and-identity-matrix, thm-all-norms-on-rn-are-equivalent]
aliases: []
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "James Demmel, Math 221 Lecture 3: Vector Norms, Matrix Norms, and Condition Numbers"
      url: "https://web.archive.org/web/20250328021224if_/https://people.eecs.berkeley.edu/~demmel/ma221_Fall09/Lectures/Lecture_03.html"
    - title: "L. N. Trefethen and D. Bau III, Numerical Linear Algebra, Lecture 3"
      url: "https://djvu.online/file/DTGVxlxBwTy0n"
---

## Definition

Let $m,n\in\mathbb{N}$, let $p\in\mathbb{Q}$ with $p\ge 1$, and let
$A=(a_{ij})\in M_{m\times n}(\mathbb{R})$ be a real matrix
([[def-matrix-product-and-identity-matrix]]), regarded as the linear map
$x\mapsto Ax$ from $\mathbb{R}^{n}$ to $\mathbb{R}^{m}$ with the published
$p$-norms ([[def-p-norms-on-rn]]). The **matrix $p$-norm induced by**
$\lVert\cdot\rVert_{p}$ is

$$\lVert A\rVert_{p}\;:=\;\sup\Bigl\{\,\lVert Ax\rVert_{p}\;:\;x\in\mathbb{R}^{n},\ \lVert x\rVert_{p}\le 1\,\Bigr\}.$$

When $n\ge1$, the following three displayed quantities are the same number:

$$\lVert A\rVert_p=\sup_{\lVert x\rVert_p\le 1}\lVert Ax\rVert_p=\sup_{\lVert x\rVert_p=1}\lVert Ax\rVert_p=\sup_{x\ne 0}\frac{\lVert Ax\rVert_p}{\lVert x\rVert_p},$$

the equalities following from positive homogeneity of $\lVert\cdot\rVert_p$
([[lem-p-norms-are-norms-and-induce-the-published-metrics]], axiom (N2)) and
the equality $\lVert 0\rVert_p=0$.

**The value is a finite nonnegative real.** For $n\ge 1$ the norms
$\lVert\cdot\rVert_p$ and $\lVert\cdot\rVert_2$ are equivalent by
[[thm-all-norms-on-rn-are-equivalent]], so there is $C>0$ with
$\lVert x\rVert_\infty\le C\lVert x\rVert_p$ for every $x$. For every $i<m$,
$|(Ax)_i|\le\sum_{j<n}|a_{ij}|\,|x_j|\le\bigl(\sum_{j<n}|a_{ij}|\bigr)\lVert x\rVert_\infty\le C\bigl(\sum_{j<n}|a_{ij}|\bigr)\lVert x\rVert_p$,
so $\lVert Ax\rVert_p\le \bigl(\sum_{i<m}(\sum_{j<n}|a_{ij}|)^{p}\bigr)^{1/p}C\lVert x\rVert_p$;
hence the supremum over the unit ball is at most the finite constant
$\bigl(\sum_{i<m}(\sum_{j<n}|a_{ij}|)^{p}\bigr)^{1/p}C$.

**The induced infinity norm is a separate named case.** When $m,n\ge1$, define

$$\lVert A\rVert_\infty\;:=\;\sup\Bigl\{\,\lVert Ax\rVert_\infty\;:\;x\in\mathbb R^n,\ \lVert x\rVert_\infty\le 1\,\Bigr\}.$$

As in the rational-$p$ case, positive homogeneity gives

$$\lVert A\rVert_\infty=\sup_{\lVert x\rVert_\infty\le 1}\lVert Ax\rVert_\infty=\sup_{\lVert x\rVert_\infty=1}\lVert Ax\rVert_\infty=\sup_{x\ne 0}\frac{\lVert Ax\rVert_\infty}{\lVert x\rVert_\infty}.$$

The supremum is finite because for every $i<m$ one has
$|(Ax)_i|\le\sum_{j<n}|a_{ij}|\,|x_j|\le\bigl(\sum_{j<n}|a_{ij}|\bigr)\lVert x\rVert_\infty$,
so

$$\lVert Ax\rVert_\infty\le\max_{i<m}\sum_{j<n}|a_{ij}|\,\lVert x\rVert_\infty.$$

**At $n=0$ the convention is explicit.** The only element of $\mathbb{R}^{0}$
is the zero vector, the only matrix $A\in M_{m\times 0}(\mathbb{R})$ is the
empty matrix, and the unit-ball definition gives $\lVert A\rVert_{p}=0$.
The unit sphere and the set of nonzero vectors are empty, so the two ratio
formulas above are not asserted in this case.

The induced quantity is a norm on the matrix space $M_{m\times n}(\mathbb{R})$:
for each rational $p\ge1$, and likewise for the separately named
$\infty$-case when $m,n\ge1$, separation, absolute homogeneity and the triangle
inequality follow from the same three axioms of the underlying vector norm
([[lem-p-norms-are-norms-and-induce-the-published-metrics]]) through the
defining supremum. The compatibility with matrix-vector multiplication, the
submultiplicativity and the value on identity matrices are
[[thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized]];
the explicit value at $p=1$ and the separate $\infty$-formula are
[[thm-induced-one-and-infinity-matrix-norms-are-max-column-and-row-sums]].

## Remarks

- **At $p=2$ this is the published operator norm.** The vector $2$-norm is the
  Euclidean norm ([[lem-p-norms-are-norms-and-induce-the-published-metrics]]),
  so the induced $2$-norm of a real matrix is the operator norm of the
  published spectral/SVD page; [[thm-operator-norm-is-the-largest-singular-value]]
  identifies it with the largest singular value. No second operator norm is
  introduced here.

- **Only rational $p\ge 1$ are used.** The published
  [[def-p-norms-on-rn]] exist for rational exponents only, and this definition
  inherits that restriction verbatim; no statement on this page ranges $p$
  over a real interval.
