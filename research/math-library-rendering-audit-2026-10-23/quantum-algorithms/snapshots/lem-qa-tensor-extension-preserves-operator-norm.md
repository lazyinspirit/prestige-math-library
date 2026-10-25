---
id: lem-qa-tensor-extension-preserves-operator-norm
kind: lemma
title: Operator Norm Is Unchanged by Spectator Registers
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 4
deps: [def-qc-tensor-register-and-permutation, def-qc-tensor-map, lem-qc-tensor-product-basis-and-dimension, thm-qc-wire-permutation-is-unitary, def-operator-norm-on-a-finite-dimensional-inner-product-space, cor-operator-norm-submultiplicative-and-t-star-t-identity]
axiom_use: "No choice axiom is used; the bases are specified and the finite-dimensional operator norm attains its maximum."
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, §1.1.3"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
      locator: "§1.1.3, PDF pp.31–34: induced spectral/operator norm and unitary invariance; the tensor-with-identity equality is proved locally here"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Appendix A.6"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "Appendix A.6, finite tensor-product basis conventions; the operator-norm estimate is proved locally here"
---

## Statement

Let $S$ and $R$ be nonzero finite-dimensional complex inner-product spaces with specified finite orthonormal bases, and let $T:S\to S$ be linear. With the product inner product on $S\otimes R$,

$$\lVert T\otimes I_R\rVert=\lVert T\rVert.$$

If $P$ is a unitary wire permutation on a finite ordered tensor register, then conjugating an endomorphism $A$ by $P$ preserves its operator norm: $\lVert PAP^{-1}\rVert=\lVert A\rVert$. Thus a one- or two-register gate has the same operator norm after identity factors are added on spectators and its wires are moved to their declared positions.

## Facts & Assumptions

**Given:** Nonzero finite-dimensional complex inner-product spaces $S,R$ with specified orthonormal bases, a linear endomorphism $T$ of $S$, their ordered tensor register, and a unitary wire permutation $P$ when the conjugation clause is used.

[F1] The lexicographically ordered elementary product vectors form an orthonormal basis and their squared norms are computed by the product inner product ([[lem-qc-tensor-product-basis-and-dimension]]).

[F2] The tensor map $T\otimes I_R$ acts on elementary tensors by $s\otimes r\mapsto Ts\otimes r$ ([[def-qc-tensor-map]]).

[F3] The operator norm is $0$ on a zero-dimensional domain; on a nonzero finite-dimensional domain, $\lVert T\rVert=\max_{\lVert s\rVert=1}\lVert Ts\rVert$ ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]]).

[F4] Compatible products satisfy $\lVert AB\rVert\le\lVert A\rVert\lVert B\rVert$ ([[cor-operator-norm-submultiplicative-and-t-star-t-identity]]).

[F5] A wire permutation is unitary and therefore preserves vector norms ([[thm-qc-wire-permutation-is-unitary]]).

## Proof

**Proof technique:** direct.

**Given:** The spaces, map and register above.

1.1 Write the specified orthonormal bases as $f_0,\ldots,f_{a-1}$ for $S$ and $e_0,\ldots,e_{d-1}$ for $R$; $a,d\ge1$. By [F1], $f_k\otimes e_j$ form an orthonormal basis of $S\otimes R$. Expand $v=\sum_{k<a,j<d}c_{kj}f_k\otimes e_j$ and set $v_j=\sum_{k<a}c_{kj}f_k$. Grouping this finite sum gives $v=\sum_{j<d}v_j\otimes e_j$, while orthonormality gives $\lVert v\rVert^2=\sum_{j<d}\lVert v_j\rVert^2$. By [F2], $(T\otimes I_R)v=\sum_{j<d}Tv_j\otimes e_j$. Hence [F3] gives $\lVert(T\otimes I_R)v\rVert^2=\sum_{j<d}\lVert Tv_j\rVert^2\le\lVert T\rVert^2\sum_{j<d}\lVert v_j\rVert^2=\lVert T\rVert^2\lVert v\rVert^2$, so $\lVert T\otimes I_R\rVert\le\lVert T\rVert$. [given, F1, F2, F3, algebra]

2.1 Choose a unit vector $s\in S$ attaining the maximum in [F3], and choose a unit vector $e\in R$. The product inner product gives $\lVert s\otimes e\rVert=1$, and [F2] gives $\lVert(T\otimes I_R)(s\otimes e)\rVert=\lVert Ts\rVert=\lVert T\rVert$. Thus $\lVert T\otimes I_R\rVert\ge\lVert T\rVert$, proving the first equality. [given, F1, F2, F3, step 1.1, choose, algebra]

3.1 If the tensor register is zero-dimensional, both $A$ and $PAP^{-1}$ have operator norm $0$ by [F3], proving the conjugation equality. Otherwise [F5] shows that $P$ and $P^{-1}$ preserve norms, so each has operator norm $1$ by [F3]. Submultiplicativity [F4] gives $\lVert PAP^{-1}\rVert\le\lVert A\rVert$. Applying the same inequality to $A=P^{-1}(PAP^{-1})P$ gives the reverse inequality. Therefore $\lVert PAP^{-1}\rVert=\lVert A\rVert$ in every case. [given, F3, F4, F5, algebra] ∎
