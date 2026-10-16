---
id: lem-qa-19-hadamard-uniform-state-preparation
kind: lemma
title: Hadamard preparation of a uniform binary state
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 11
deps:
  - def-qc-register-and-computational-basis
  - def-qc-tensor-register-and-permutation
  - def-qc-tensor-map
  - thm-qc-computational-basis-orthonormal
  - def-qc-circuit-cost-model
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Chapter 2 §2.1.2, PDF p.21 (printed p.9) for the Hadamard matrix and PDF p.26 (printed p.14), Eq. (2.1), for H^{\\otimes n}|0^n\\rangle as the uniform state; the full tensor proof and conditional gate count are supplied locally."
---

## Statement

For an integer $n\ge0$, give each factor of the ordered register
$V_n=(\mathbb C^2)^{\otimes n}$ the basis $(e_0,e_1)$ and define the
one-qubit matrix
$$H:=\frac1{\sqrt2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}.$$
Then $H$ is unitary and
$$H^{\otimes n}e_{0^n}=2^{-n/2}\sum_{x\in\{0,1\}^n}e_x.$$
For $n=0$, the tensor product is $\mathbb C$, the empty word is the sole
basis label, and $H^{\otimes0}$ is the identity. The preparation uses exactly
$n$ one-qubit $H$ gates when $H$ is primitive in the declared circuit model;
otherwise its implementation and synthesis costs must be supplied there.

## Facts & Assumptions

**Given:** $n\ge0$, the ordered computational register, and the stated matrix $H$.

[F1] [[def-qc-register-and-computational-basis]]: a qubit has ordered basis
$(e_0,e_1)$, and $e_{0^n}$ denotes the corresponding register basis vector.

[F2] [[def-qc-tensor-register-and-permutation]]: tensor-register basis vectors
are ordered products of the factor bases; the empty tensor product is $\mathbb C$.

[F3] [[thm-qc-computational-basis-orthonormal]]: the ordered computational
basis is orthonormal.

[F4] [[def-qc-circuit-cost-model]]: a circuit gate count counts its finite
one- and multi-qubit gate instances, separately from oracle-query and
circuit-description costs.

[F5] [[def-qc-tensor-map]]: the tensor map is the unique linear map that acts
factorwise on elementary tensors, with the empty tensor map equal to the
identity on $\mathbb C$.

## Proof

**Proof technique:** direct.

1.1 Direct multiplication gives $H^*H=I_2$. Also $He_0=(e_0+e_1)/\sqrt2$, so $H$ is a unitary one-qubit operation in the specified basis. [given, F1, F3, algebra]

1.2 By the tensor-map rule [F5], $H^{\otimes n}e_{0^n}=(He_0)^{\otimes n} =2^{-n/2}(e_0+e_1)^{\otimes n} =2^{-n/2}\sum_{x\in\{0,1\}^n}e_x.$ The last equality distributes the finite tensor product over its two-term factors, choosing exactly one of $e_0,e_1$ at each position; the ordered product basis in [F2] identifies these choices with the binary words $x$. For $n=0$, both sides are the scalar $1$ in $\mathbb C$, the empty sum-index set convention gives its single empty word, and [F5] makes the empty tensor map the identity. The basis vectors are distinct orthonormal vectors by [F3], so the right side has norm one. [F1, F2, F3, F5, algebra]

2.1 By [F5], the construction applies one copy of $H$ to each of the $n$ tensor factors and no oracle operation. It therefore has $n$ one-qubit gate instances when $H$ is primitive, as counted by [F4]; if it is not primitive, the declared synthesis cost is required. At $n=0$ the circuit has no gates. [given, F4, F5, algebra] ∎
