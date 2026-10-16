---
id: lem-qc-tensor-products-of-operator-matrix-units-form-a-basis
kind: lemma
title: "Tensor products of operator matrix units form a basis"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-real-and-complex-inner-product-space, def-dimension, def-linear-map, def-coordinate-column-and-matrix-of-a-linear-map, thm-unique-coordinates-with-respect-to-an-ordered-basis, def-qc-tensor-register-and-permutation, def-qc-tensor-map, lem-qc-tensor-product-basis-and-dimension]
justified_by: []
dependency_level: 3
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), §2.2.2"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "John Preskill, Quantum Computation, Chapter 3, §3.2.1"
      url: "https://www.preskill.caltech.edu/ph219/chap3_15.pdf"
---

## Statement

Let $H,H'$ be finite-dimensional (have finite bases by [[def-dimension]])
complex inner-product spaces with ordered
orthonormal bases $(e_u)_{u<n}$ and $(f_s)_{s<m}$. For $u,v<n$ and $s,t<m$
define $E_{uv}x:=\langle x,e_v\rangle e_u$ and
$F_{st}y:=\langle y,f_t\rangle f_s$. Then
$(E_{uv}\otimes F_{st})_{u,v,s,t}$ is a basis of
$\mathcal L(H\otimes H')$. Empty dimensions give the empty basis of the zero
endomorphism space. The root pairing is linear in its first argument, so the
displayed matrix-unit maps are linear.

## Facts & Assumptions

**Given:** The finite-dimensional spaces, their ordered orthonormal bases, and
the matrix-unit maps in the Statement.

[F1] [[def-qc-tensor-register-and-permutation]]: the tensor product has its
ordered product basis and product inner product.

[F2] [[lem-qc-tensor-product-basis-and-dimension]]: the product basis is
orthonormal, spans, and has dimension $nm$, including zero factors.

[F3] [[def-qc-tensor-map]]: the tensor of linear maps is the unique linear
extension of its action on elementary tensors.

[F4] [[def-coordinate-column-and-matrix-of-a-linear-map]] and
[[thm-unique-coordinates-with-respect-to-an-ordered-basis]]: an endomorphism
is determined by its coordinate columns on an ordered basis.

## Proof


1.1 For a product basis vector $e_{v'}\otimes f_{t'}$, [F3] gives $(E_{uv}\otimes F_{st})(e_{v'}\otimes f_{t'})=e_u\otimes f_s$ when $v'=v$ and $t'=t$, and gives $0$ otherwise, by orthonormality in [F1]. Thus each tensor matrix unit has a single coordinate $1$ and zeros elsewhere in the product basis. [given, F1, F2, F3, algebra]

2.1 Every endomorphism $T$ of $H\otimes H'$ has a unique coordinate coefficient $c_{(u,s),(v,t)}$ for the image of each product basis vector $e_v\otimes f_t$. The finite sum $\sum_{u,s,v,t}c_{(u,s),(v,t)}E_{uv}\otimes F_{st}$ has the same image as $T$ on each such basis vector by step 1.1; [F4] therefore makes it equal to $T$. The same coordinate entries show that this expression is unique. If $n=0$ or $m=0$, the product space is zero by [F2] and both the basis and sum are empty. [given, F2, F4, step 1.1, algebra] ∎

