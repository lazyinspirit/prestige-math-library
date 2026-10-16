---
id: thm-qc-tensor-map-composition-and-adjoint
kind: theorem
title: "Tensor maps preserve composition, identities, and adjoints"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - lem-composition-and-identity-linear-maps
  - def-qc-tensor-map
  - def-real-and-complex-inner-product-space
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - thm-adjoint-exists-and-is-unique-in-finite-dimension
  - lem-qc-tensor-product-basis-and-dimension
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
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
    - title: "John Watrous, The Theory of Quantum Information"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Appendix A.6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

Let $(T_k:H_k\to K_k)_{k<n}$ and $(S_k:K_k\to L_k)_{k<n}$ be finite ordered
families of linear maps between finite-dimensional complex inner-product
spaces. Then

$$\left(\bigotimes_{k<n}S_k\right)\left(\bigotimes_{k<n}T_k\right)=\bigotimes_{k<n}(S_kT_k),\qquad \bigotimes_{k<n}I_{H_k}=I_{\otimes_{k<n}H_k},\qquad \left(\bigotimes_{k<n}T_k\right)^*=\bigotimes_{k<n}T_k^*.$$

In the first formula, $S_kT_k$ means $S_k\circ T_k$. Here $I_{H_k}$ denotes
the identity map $x\mapsto x$. All adjoints use the
repository pairing, linear in the first argument. The empty tensor-map
identity is the identity map $z\mapsto z$ on $\mathbb C$.

## Facts & Assumptions

**Given:** The finite ordered families of spaces and linear maps in the
Statement.

[F1] The tensor map is the unique linear extension of its action on elementary
tensors ([[def-qc-tensor-map]]).

[F2] Elementary tensors in the specified product basis form an orthonormal
basis and span ([[lem-qc-tensor-product-basis-and-dimension]]).

[F3] Every linear map between finite-dimensional inner-product spaces has a
unique adjoint ([[thm-adjoint-exists-and-is-unique-in-finite-dimension]]).

[F4] An adjoint $T^*$ satisfies
$\langle Tx,y\rangle=\langle x,T^*y\rangle$
([[def-adjoint-of-a-linear-map-between-inner-product-spaces]]).

[F5] Each root inner product is linear in the first argument and
conjugate-linear in the second
([[def-real-and-complex-inner-product-space]]).

[F6] Every finite-dimensional real or complex inner-product space has an
orthonormal basis, with the empty basis in dimension zero
([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]).

[F7] Identity maps and compatible composites of linear maps are linear
([[lem-composition-and-identity-linear-maps]]).

## Proof

1.1 By [F7], each $S_kT_k$ is linear and the composite of the two tensor maps is linear, so [F1] applies to both sides. On an elementary tensor $\bigotimes_{k<n}x_k$, the left side of the composition identity equals $\bigotimes_{k<n}S_k(T_kx_k)$ by [F1], which is the value of the right side. Since elementary tensors span by [F2], the two linear maps are equal. [given, F1, F2, F7]

1.2 By [F6], choose orthonormal bases for the finite factor spaces. For elementary tensors $x=\bigotimes_{k<n}x_k$ and $y=\bigotimes_{k<n}y_k$, the product pairing in [F2] and the factor adjoint identities in [F4] give $\langle(\bigotimes_kT_k)x,y\rangle =\prod_k\langle T_kx_k,y_k\rangle =\prod_k\langle x_k,T_k^*y_k\rangle =\langle x,\bigotimes_kT_k^*y_k\rangle$. The pairing is extended using the first-linear convention [F5]. [F2, F3, F4, F5, F6, choose]

2.1 Each factor identity and the identity on the tensor space are linear by [F7]. The tensor map $\bigotimes_{k<n}I_{H_k}$ fixes every elementary tensor by [F1]. The identity map does too; spanning in [F2] gives equality. If $n=0$, both maps are the identity on $\mathbb C$. [step 1.1, F1, F2, F7, algebra]

3.1 Sesquilinearity and spanning extend the identity in step 1.2 to all $x,y$. By existence and uniqueness in [F3] and the defining condition [F4], $(\bigotimes_kT_k)^*=\bigotimes_kT_k^*$. For $n=0$ both sides are the identity on $\mathbb C$; zero-dimensional factors are covered because the product bases may be empty. [step 1.2, F2, F3, F4, F5, F6, algebra] ∎


