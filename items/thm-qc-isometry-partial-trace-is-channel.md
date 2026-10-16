---
id: thm-qc-isometry-partial-trace-is-channel
kind: theorem
title: "An isometry followed by partial trace is a channel"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-real-and-complex-inner-product-space, def-adjoint-of-a-linear-map-between-inner-product-spaces, thm-adjoint-exists-and-is-unique-in-finite-dimension, prop-adjoint-algebra, lem-inner-product-pairing-is-nondegenerate-and-norm-is-homogeneous, def-trace-of-an-endomorphism, prop-trace-is-linear, thm-trace-of-ab-equals-trace-of-ba, cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, def-qc-isometric-stinespring-representation, def-qc-partial-trace, def-qc-completely-positive-map, def-qc-quantum-channel, def-qc-kraus-representation, thm-qc-kraus-map-completely-positive, def-qc-tensor-register-and-permutation, lem-qc-tensor-product-basis-and-dimension, lem-qc-linear-isometry-adjoint-identities, thm-qc-partial-trace-characterization-and-basis-independence]
justified_by: []
proof_strategy: direct
dependency_level: 6
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), §2.2.2"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "John Preskill, Quantum Computation, Chapter 3, §3.3.2"
      url: "https://www.preskill.caltech.edu/ph219/chap3_15.pdf"
---

## Statement

Let $H,K,E$ be finite-dimensional complex inner-product spaces and let
$V:H\to K\otimes E$ be a linear isometry. Then
$$\Phi(X)=\operatorname{Tr}_E(VXV^\dagger),\qquad X\in\mathcal L(H),$$
is a quantum channel from $H$ to $K$.

## Facts & Assumptions

**Given:** Finite-dimensional complex inner-product spaces $H,K,E$ and a
linear isometry $V:H\to K\otimes E$.

[F1] [[def-qc-isometric-stinespring-representation]]: the represented map is
$X\mapsto\operatorname{Tr}_E(VXV^\dagger)$ and the isometry satisfies
$V^\dagger V=I_H$ by [[lem-qc-linear-isometry-adjoint-identities]].

[F2] [[def-qc-tensor-register-and-permutation]] and
[[lem-qc-tensor-product-basis-and-dimension]]: if $(f_\alpha)$ and $(u_a)$
are orthonormal bases of $K$ and $E$, then $(f_\alpha\otimes u_a)$ is an
orthonormal basis of $K\otimes E$ with the displayed factor order.

[F3] [[def-qc-partial-trace]] and
[[thm-qc-partial-trace-characterization-and-basis-independence]]: for any
such output and environment bases,
$(\operatorname{Tr}_E R)_{\alpha\beta}=\sum_aR_{(\alpha,a),(\beta,a)}$.

[F4] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]],
[[thm-adjoint-exists-and-is-unique-in-finite-dimension]], and
[[prop-adjoint-algebra]]: finite-dimensional adjoints exist uniquely, obey
their defining pairing identity, and reverse compatible compositions.

[F5] [[lem-inner-product-pairing-is-nondegenerate-and-norm-is-homogeneous]]:
inner-product pairings separate vectors.

[F6] [[thm-qc-kraus-map-completely-positive]]: every finite Kraus sum is
completely positive.

[F7] [[thm-trace-of-ab-equals-trace-of-ba]]: for compatible rectangular maps,
the traces of the two products agree.

[F8] [[prop-trace-is-linear]]: trace is linear over finite sums.

[F9] [[def-qc-quantum-channel]]: a channel is a complex-linear completely
positive map that preserves trace on every input operator.

## Proof


1.1 Choose ordered orthonormal bases $(f_\alpha)$ of $K$ and $(u_a)$ of $E$ by finite-dimensional orthonormal-basis existence. For each $a$, define the linear map $P_a:K\otimes E\to K$ on the product basis by $P_a(f_\alpha\otimes u_b)=f_\alpha$ if $b=a$ and $0$ otherwise. Its adjoint satisfies $P_a^\dagger f_\alpha=f_\alpha\otimes u_a$: both sides have the same pairing with every product basis vector by [F2] and [F4]. Linearity extends the equality of pairings to every first argument, and [F5] then makes the vectors equal. For any $R\in\mathcal L(K\otimes E)$, the $(\alpha,\beta)$ entry of $\sum_aP_aRP_a^\dagger$ is $\sum_aR_{(\alpha,a),(\beta,a)}$, which is the defining coordinate of $\operatorname{Tr}_E R$ by [F3]. Thus $\operatorname{Tr}_E R=\sum_aP_aRP_a^\dagger$. [given, F2, F3, F4, F5, choose, construct, algebra]

2.1 Put $L_a=P_aV:H\to K$. By [F4], $L_a^\dagger=V^\dagger P_a^\dagger$. Substituting $R=VXV^\dagger$ into step 1.1 gives $\Phi(X)=\sum_aP_aVXV^\dagger P_a^\dagger= \sum_aL_aXL_a^\dagger$ for every $X$. This is a finite Kraus representation, so [F6] makes $\Phi$ completely positive. [given, F1, F4, F6, step 1.1, algebra]

3.1 On each product basis vector $f_\alpha\otimes u_b$, the sum $\sum_aP_a^\dagger P_a$ acts as the identity; hence $\sum_aP_a^\dagger P_a=I_{K\otimes E}$. By [F4] and [F1], $\sum_aL_a^\dagger L_a=V^\dagger(\sum_aP_a^\dagger P_a)V =V^\dagger V=I_H$. Rectangular trace cyclicity [F7] and trace linearity [F8] then give, for every $X\in\mathcal L(H)$, $\operatorname{tr}_K\Phi(X)=\sum_a\operatorname{tr}_K(L_aXL_a^\dagger) =\operatorname{tr}_H(X\sum_aL_a^\dagger L_a)=\operatorname{tr}_H X$. The complete positivity from step 2.1 and this trace identity are exactly the channel conditions [F9]. Empty bases and sums give the same identities when $E=0$; the isometry equation then forces $H=0$. [given, F1, F4, F7, F8, F9, step 2.1, algebra] ∎

