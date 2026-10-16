---
id: thm-qc-finite-stinespring-dilation
kind: theorem
title: "Every finite-dimensional channel has a finite isometric dilation"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-real-and-complex-inner-product-space, def-dimension, def-adjoint-of-a-linear-map-between-inner-product-spaces, thm-adjoint-exists-and-is-unique-in-finite-dimension, prop-adjoint-algebra, def-qc-quantum-channel, def-qc-kraus-representation, def-qc-isometric-stinespring-representation, def-qc-partial-trace, def-qc-tensor-register-and-permutation, def-qc-tensor-map, prop-standard-coordinate-inner-products, lem-qc-tensor-product-basis-and-dimension, thm-qc-kraus-choi-equivalence, thm-qc-trace-preserving-kraus-normalization, thm-qc-partial-trace-characterization-and-basis-independence, lem-qc-linear-isometry-adjoint-identities]
justified_by: []
proof_strategy: direct
dependency_level: 7
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), Theorem 2.22"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "John Preskill, Quantum Computation, Chapter 3, §3.3.2"
      url: "https://www.preskill.caltech.edu/ph219/chap3_15.pdf"
---

## Statement

Let $H,K$ be finite-dimensional complex inner-product spaces and let
$\Phi:\mathcal L(H)\to\mathcal L(K)$ be a quantum channel. It has a finite
Kraus representation, and for any chosen such representation with $N$
operators $K_a:H\to K$ there are an $N$-dimensional environment $E$ and a
linear isometry $V:H\to K\otimes E$ such that
$$\Phi(X)=\operatorname{Tr}_E(VXV^\dagger)\quad\text{for every }X\in\mathcal L(H).$$

## Facts & Assumptions

**Given:** Finite-dimensional complex inner-product spaces $H,K$ and a channel
$\Phi:\mathcal L(H)\to\mathcal L(K)$.

[F1] [[def-qc-quantum-channel]]: a channel is completely positive and
trace-preserving.

[F2] [[thm-qc-kraus-choi-equivalence]]: complete positivity gives a finite
Kraus representation.

[F3] [[thm-qc-trace-preserving-kraus-normalization]]: for any such Kraus
representation, trace preservation gives $\sum_aK_a^\dagger K_a=I_H$.

[F4] [[def-qc-kraus-representation]]: the chosen family satisfies
$\Phi(X)=\sum_aK_aXK_a^\dagger$ for every $X$.

[F5] [[prop-standard-coordinate-inner-products]]: the standard basis of
$E=\mathbb C^N$ is orthonormal, including the empty basis when $N=0$.

[F6] [[def-qc-tensor-register-and-permutation]] and
[[lem-qc-tensor-product-basis-and-dimension]]: the tensor pairing is the
factorwise pairing and the ordered product basis is orthonormal.

[F7] [[def-qc-tensor-map]]: tensor maps act linearly on elementary tensors.

[F8] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]] and
[[thm-adjoint-exists-and-is-unique-in-finite-dimension]]: finite-dimensional
adjoints exist uniquely and satisfy their defining pairing identity.

[F9] [[prop-adjoint-algebra]]: adjoints reverse compatible compositions.

[F10] [[def-qc-partial-trace]] and
[[thm-qc-partial-trace-characterization-and-basis-independence]]: in the
product basis of $K\otimes E$, partial trace over $E$ sums the diagonal
environment blocks.

[F11] [[lem-qc-linear-isometry-adjoint-identities]]: a linear isometry $V$
satisfies $V^\dagger V=I_H$.

[L1] [[def-qc-isometric-stinespring-representation]]: a Stinespring
representation has the form $X\mapsto\operatorname{Tr}_E(VXV^\dagger)$.

## Proof


1.1 By [F1] and [F2], a finite Kraus family exists; take any such family $(K_a)_{a<N}$ for $\Phi$. Since $\Phi$ is trace-preserving, [F3] gives $\sum_{a<N}K_a^\dagger K_a=I_H$. Take $E=\mathbb C^N$ with its standard orthonormal basis $(u_a)_{a<N}$ and define $Vx=\sum_{a<N}K_ax\otimes u_a$. Each summand is linear in $x$ by [F7], so $V$ is linear. Orthogonality of $(u_a)$, the product pairing [F6], the adjoint identity [F8], and the Kraus normalization give $\|Vx\|^2=\sum_a\|K_ax\|^2 =\langle x,(\sum_aK_a^\dagger K_a)x\rangle_H=\|x\|^2$ for every $x$; thus $V$ is a linear isometry. By [F11], $V^\dagger V=I_H$. [given, F1, F2, F3, F5, F6, F7, F8, F11, algebra, choose, construct]

2.1 For each $b<N$, $y\in K$, and $x\in H$, the product pairing and [F8] give $\langle Vx,y\otimes u_b\rangle= \sum_a\langle K_ax,y\rangle\langle u_a,u_b\rangle= \langle K_bx,y\rangle=\langle x,K_b^\dagger y\rangle$. By uniqueness of the adjoint, $V^\dagger(y\otimes u_b)=K_b^\dagger y$. Therefore, on each product vector $y\otimes u_b$, $VXV^\dagger(y\otimes u_b)=\sum_{a<N}K_aXK_b^\dagger y\otimes u_a$. By [F10], taking the partial trace sums exactly the blocks with $a=b$, so $\operatorname{Tr}_E(VXV^\dagger)=\sum_{a<N}K_aXK_a^\dagger=\Phi(X)$ by [F4] for every $X$. This is the representation in [L1], with $\dim E=N$. If $N=0$, [F3] forces $I_H=0$, hence $H=0$; the empty sums and unique map give the same identities. [given, F3, F4, F5, F6, F8, F9, F10, L1, step 1.1, algebra] ∎

