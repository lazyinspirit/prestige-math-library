---
id: thm-gram-inner-product-on-exterior-powers-is-positive-definite
kind: theorem
title: "The Gram formula gives a well-defined positive-definite inner product on exterior powers, and $\\|v_1\\wedge\\cdots\\wedge v_k\\|^2$ is the Gram determinant"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-gram-inner-product-on-kth-exterior-power, def-gram-matrix-and-gram-determinant, thm-gram-determinant-detects-linear-independence, thm-increasing-basis-wedges-form-a-basis, thm-a-decomposable-wedge-is-nonzero-exactly-for-independent-vectors, thm-universal-property-and-uniqueness-of-exterior-powers, cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, thm-determinant-of-transpose, def-inner-product-space]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Reyer Sjamaar, Manifolds and Differential Forms, §8.1"
      url: "https://pi.math.cornell.edu/~sjamaar/manifolds/manifold.pdf"
---

## Statement

Let $V$ be a finite-dimensional real inner product space of dimension $n$, and let $0\le k\le n$. The formula

$$\langle v_1\wedge\cdots\wedge v_k,\ w_1\wedge\cdots\wedge w_k\rangle=\det\bigl(\langle v_i,w_j\rangle\bigr)_{i,j\le k}$$

defines a well-defined inner product on $\Lambda^kV$ in the sense of [[def-inner-product-space]]. In particular, for every list $(v_1,\ldots,v_k)$,

$$\|v_1\wedge\cdots\wedge v_k\|^2=\det G(v_1,\ldots,v_k),$$

the Gram determinant of [[def-gram-matrix-and-gram-determinant]], which vanishes exactly when the list is dependent.

## Facts & Assumptions

**Given:** A finite-dimensional real inner product space $V$ of dimension $n$, a degree $0\le k\le n$, and lists of length $k$ in $V$.

[L1] The intended pairing is the displayed determinant formula, with descent through the quotient in each slot ([[def-gram-inner-product-on-kth-exterior-power]]).

[L2] The Gram matrix is $G(v_1,\ldots,v_k)=(\langle v_i,v_j\rangle)_{i,j}$, with empty determinant $1$ ([[def-gram-matrix-and-gram-determinant]]).

[L3] The Gram determinant is nonnegative, and positive exactly for independent lists ([[thm-gram-determinant-detects-linear-independence]]).

[L4] The increasing-index wedges of an orthonormal basis form a basis of $\Lambda^kV$ ([[thm-increasing-basis-wedges-form-a-basis]]).

[L5] Alternating multilinear maps factor uniquely through $\Lambda^kV$ ([[thm-universal-property-and-uniqueness-of-exterior-powers]]).

[L6] A finite-dimensional inner product space has an orthonormal basis ([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]).

[L7] The determinant is unchanged by transposition: $\det(M^{\mathsf T})=\det M$ ([[thm-determinant-of-transpose]]).

## Proof

**Proof technique:** direct.


1.1 For a fixed list $(w_1,\ldots,w_k)$, the assignment $(v_1,\ldots,v_k)\mapsto\det(\langle v_i,w_j\rangle)$ is $k$-linear and alternating in the $v$'s (determinant multilinear in rows, zero on a repeated row), so by [L5] it descends to a unique linear functional on $\Lambda^kV$; symmetrically in the second slot. This is the well-defined bilinear pairing of [L1]. [L1, L5]

1.2 By [L1] and [L2], the pure-wedge norm square is $\|v_1\wedge\cdots\wedge v_k\|^2=\det G(v_1,\ldots,v_k)$. [L1, L2]

1.3 Symmetry: $\langle\beta,\alpha\rangle=\det(\langle w_j,v_i\rangle)=\det\bigl((\langle v_i,w_j\rangle)^{\mathsf T}\bigr)=\langle\alpha,\beta\rangle$ by [L7]. [L2, L7]

2.1 Choose an orthonormal basis $(e_1,\ldots,e_n)$ by [L6]; by [L4] the wedges $e_I$ form a basis of $\Lambda^kV$, and by step 1.2 the pairing satisfies $\langle e_I,e_J\rangle=\det$ of the identity submatrix, which is $1$ when $I=J$ and $0$ otherwise. [step 1.2, L2, L4, L6]

2.2 The norm-square formula of step 1.2 is the claimed Gram-determinant identity, and by [L3] that determinant is nonnegative and vanishes exactly for dependent lists, matching the independence criterion of [[thm-a-decomposable-wedge-is-nonzero-exactly-for-independent-vectors]]. [step 1.2, L3]

3.1 Expanding $\alpha=\sum_Ic_Ie_I$ in the basis of step 2.1 gives $\langle\alpha,\alpha\rangle=\sum_Ic_I^2\ge0$, with equality exactly when every $c_I=0$, i.e. $\alpha=0$; with steps 1.1 and 1.3 this is a positive-definite inner product. [step 1.1, step 1.3, step 2.1, algebra]

4.1 Steps 1.1, 2.2 and 3.1 prove well-definedness, the Gram-determinant formula, and positive definiteness. [step 1.1, step 1.2, step 2.2, step 3.1] ∎
