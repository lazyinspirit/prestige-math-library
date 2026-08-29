---
id: thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized
kind: theorem
title: "Induced matrix norms are compatible with matrix-vector multiplication, submultiplicative, and satisfy ||I|| = 1"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-induced-matrix-p-norm, def-matrix-product-and-identity-matrix, thm-matrix-multiplication-laws, lem-p-norms-are-norms-and-induce-the-published-metrics]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "James Demmel, Math 221 Lecture 3: Vector Norms, Matrix Norms, and Condition Numbers"
      url: "https://web.archive.org/web/20250328021224if_/https://people.eecs.berkeley.edu/~demmel/ma221_Fall09/Lectures/Lecture_03.html"
---



## Statement

Let $p\in\mathbb{Q}$ with $p\ge 1$ and let $m,n,q\in\mathbb{N}$, with the
induced $p$-norms of [[def-induced-matrix-p-norm]].

1. **Compatibility.** For every $A\in M_{m\times n}(\mathbb{R})$ and every
   $x\in\mathbb{R}^{n}$,
   $$\lVert Ax\rVert_p\;\le\;\lVert A\rVert_p\,\lVert x\rVert_p.$$
2. **Submultiplicativity.** For every $A\in M_{m\times n}(\mathbb{R})$ and
   $B\in M_{n\times q}(\mathbb{R})$,
   $$\lVert AB\rVert_p\;\le\;\lVert A\rVert_p\,\lVert B\rVert_p.$$
3. **Normalisation.** For every $n\ge 1$,
   $$\lVert I_n\rVert_p=1,$$
   where $I_n$ is the identity matrix of [[def-matrix-product-and-identity-matrix]];
   at $n=0$ the unique empty matrix $I_0\in M_0(\mathbb{R})$ has
   $\lVert I_0\rVert_p=0$, the convention of [[def-induced-matrix-p-norm]].

## Facts & Assumptions

**Given:** A rational $p\ge 1$, natural numbers $m,n,q$, matrices
$A\in M_{m\times n}(\mathbb{R})$, $B\in M_{n\times q}(\mathbb{R})$, and vectors
$x\in\mathbb{R}^{n}$.

[L1] $\lVert\cdot\rVert_p$ is a norm on $\mathbb{R}^{n}$ and on
$\mathbb{R}^{m}$: in particular $\lVert 0\rVert_p=0$ and
$\lVert\lambda y\rVert_p=|\lambda|\lVert y\rVert_p$ ([[lem-p-norms-are-norms-and-induce-the-published-metrics]]).

[L2] The induced norm is
$\lVert A\rVert_p=\sup\{\lVert Ay\rVert_p:\lVert y\rVert_p\le 1\}$
([[def-induced-matrix-p-norm]]).

[L3] Matrix multiplication is associative, so $(AB)x=A(Bx)$; it is also
unital, so $I_nx=x$ for $n\ge 1$ ([[thm-matrix-multiplication-laws]],
[[def-matrix-product-and-identity-matrix]]).

## Proof

**Proof technique:** direct.

1.1 For $x=0$ the compatibility claim reads $0\le \lVert A\rVert_p\cdot 0$, which is true by [L1] and [L2]. [L1, L2, algebra]

1.2 For $x\ne 0$ the vector $\lVert x\rVert_p>0$ by [L1], so $\lVert Ax\rVert_p/\lVert x\rVert_p=\lVert A(x/\lVert x\rVert_p)\rVert_p$ by homogeneity of [L1]. [L1, algebra]

1.3 For $x=0$ both sides of claim 2 are $0$, using [L1] and [L3]. [L1, L3, algebra]

1.4 For $n\ge 1$ every $x\ne 0$ attains ratio one: by [L3], $\lVert I_nx\rVert_p=\lVert x\rVert_p$, so $\lVert I_nx\rVert_p/\lVert x\rVert_p=1$, and the supremum in [L2] is therefore $1$, which is claim 3 for $n\ge 1$. [L2, L3, algebra]

1.5 At $n=0$ the space $\mathbb{R}^{0}$ has only the zero vector, so the definition of [[def-induced-matrix-p-norm]] assigns $\lVert I_0\rVert_p=0$, which is the stated exceptional value. [L2, algebra]

2.1 The scaled vector $x/\lVert x\rVert_p$ has $p$-norm $1$, so $\lVert A(x/\lVert x\rVert_p)\rVert_p\le\lVert A\rVert_p$ by [L2]; combining step 1.2 with this bound gives $\lVert Ax\rVert_p\le\lVert A\rVert_p\lVert x\rVert_p$, which with step 1.1 proves claim 1. [step 1.2, L2, algebra]

3.1 For $x\ne 0$ associativity of [L3] gives $\lVert(AB)x\rVert_p=\lVert A(Bx)\rVert_p$, and applying claim 1 first to $A$ at the vector $Bx$ and then to $B$ at the vector $x$ gives $\lVert A(Bx)\rVert_p\le\lVert A\rVert_p\lVert Bx\rVert_p\le\lVert A\rVert_p\lVert B\rVert_p\lVert x\rVert_p$. [step 2.1, L3, algebra]

4.1 Dividing step 3.1 by the positive number $\lVert x\rVert_p$ and taking the supremum over all nonzero $x$ in the definition of [L2] gives $\lVert AB\rVert_p\le\lVert A\rVert_p\lVert B\rVert_p$; with step 1.3 this is claim 2. [step 3.1, L1, L2, algebra]

5.1 Claims 1, 2 and 3 are steps 2.1, 4.1, 1.4 and 1.5 respectively. [step 2.1, step 4.1, step 1.4, step 1.5] ∎
