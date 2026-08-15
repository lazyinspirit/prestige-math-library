---
id: thm-riesz-representation-in-finite-dimensions
kind: theorem
title: "Finite-dimensional Riesz representation: every functional is uniquely $v\\mapsto\\langle v,w\\rangle$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, thm-bessel-inequality-and-finite-parseval-identity, lem-inner-product-pairing-is-nondegenerate-and-norm-is-homogeneous, def-algebraic-dual-and-linear-functional]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Sheldon Axler, Linear Algebra Done Right, 4th ed., result 6.42'
      url: 'https://linear.axler.net/LADR4e.pdf'
pipeline_run: null
---

## Statement

Let $V$ be a finite-dimensional real or complex inner product space, with the inner product linear in its first argument. For every linear functional $f:V\to\mathbb F$, there is a unique $w\in V$ such that

$$f(v)=\langle v,w\rangle\qquad\text{for every }v\in V.$$

The map $w\mapsto(v\mapsto\langle v,w\rangle)$ is a conjugate-linear bijection from $V$ to its algebraic dual. This includes $V=0$.

## Facts & Assumptions

**Given:** A finite-dimensional inner product space $V$ and a linear functional $f$.

[L1] The space $V$ has a finite orthonormal basis ([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]).

[L2] An orthonormal basis $(e_i)$ gives $v=\sum_i\langle v,e_i\rangle e_i$ ([[thm-bessel-inequality-and-finite-parseval-identity]]).

[L3] If $\langle v,z\rangle=0$ for every $v$, then $z=0$ ([[lem-inner-product-pairing-is-nondegenerate-and-norm-is-homogeneous]]).

[L4] The algebraic dual consists of all linear functionals from $V$ to its scalar field ([[def-algebraic-dual-and-linear-functional]]).

## Proof

**Proof technique:** direct.

1.1 Choose an orthonormal basis $(e_0,\ldots,e_{n-1})$ by [L1] and define $w=\sum_{i<n}\overline{f(e_i)}e_i$. [L1, choose]

2.1 For $v\in V$, [L2] and linearity of $f$ give $f(v)=\sum_i\langle v,e_i\rangle f(e_i)$. Conjugate-linearity in the second argument makes the right side equal to $\langle v,w\rangle$. [step 1.1, L2, L4, algebra]

3.1 If $w'$ is another representative, then $\langle v,w-w'\rangle=0$ for every $v$, so [L3] gives $w=w'$. [step 2.1, L3]

4.1 The assignment $w\mapsto\langle\,\cdot\,,w\rangle$ is conjugate-linear because the inner product is conjugate-linear in its second argument. Existence makes it surjective and uniqueness makes it injective. When $V=0$, the chosen basis and both sums are empty and the same argument applies. [step 1.1, step 2.1, step 3.1, L4] ∎
