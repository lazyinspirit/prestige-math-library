---
id: lem-finite-span-orthogonal-projection-in-inner-product-space
kind: lemma
title: Projection onto a finite-dimensional subspace of an inner-product space
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: Sergei Treil, Linear Algebra Done Wrong, Chapter 5 §5.3.2
      url: https://www.math.brown.edu/streil/papers/LADW/HTML_2026_04-30/Ch5.html
---

## Statement

Let $H$ be a real inner-product space and $V\subseteq H$ a finite-dimensional
subspace. For each $f\in H$ there is a unique $p\in V$ such that $f-p$ is
orthogonal to $V$, meaning $\langle f-p,v\rangle=0$ for every $v\in V$.
For every $v\in V$,
$$\|f-v\|^2=\|f-p\|^2+\|p-v\|^2.$$
In particular, $\|f\|^2=\|p\|^2+\|f-p\|^2$.

## Statement references

[[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases|Every finite-dimensional inner-product space has an orthonormal basis, with the empty basis in dimension zero.]]

[Treil, Linear Algebra Done Wrong, Chapter 5 §5.3.2](https://www.math.brown.edu/streil/papers/LADW/HTML_2026_04-30/Ch5.html)

## Facts & Assumptions

**Given:** A real inner-product space $H$, a finite-dimensional subspace $V\subseteq H$, and $f\in H$.

[F1] Every finite-dimensional real inner-product space has an orthonormal basis; the basis is empty when the dimension is zero. [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 Choose an orthonormal basis $e_1,\ldots,e_r$ of $V$ by [F1], allowing $r=0$, and set $p=\sum_{j=1}^r\langle f,e_j\rangle e_j$. For each $\ell$, orthonormality gives $\langle f-p,e_\ell\rangle=\langle f,e_\ell\rangle-\sum_{j=1}^r\langle f,e_j\rangle\langle e_j,e_\ell\rangle=0$; since the basis spans $V$, $f-p$ is orthogonal to $V$. [F1, given, choose, construct, algebra]

2.1 For any $v\in V$, $p-v\in V$ and $f-p$ is orthogonal to $V$. Expanding the squared norm of $f-v=(f-p)+(p-v)$ therefore gives $\|f-v\|^2=\|f-p\|^2+\|p-v\|^2$. If $q\in V$ also has $f-q$ orthogonal to $V$, then $p-q=(f-q)-(f-p)$ lies in $V^\perp$ and in $V$, hence $\|p-q\|^2=0$ and $p=q$. Taking $v=0$ gives the stated norm identity. [given, step 1.1, algebra] ∎
