---
id: lem-qc-finite-isometry-unitary-extension
kind: lemma
title: "A finite isometry extends after finite ancilla padding"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-register-and-computational-basis
  - def-qc-tensor-register-and-permutation
  - def-dimension
  - cor-tensor-products-of-finite-free-modules-and-dimension
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
  - thm-finite-dimensional-orthogonal-decomposition
  - def-linear-isometry-and-orthogonal-or-unitary-operator
justified_by: []
dependency_level: 2
proof_strategy: direct
axiom_use: "None; only finite-dimensional bases and orthogonal complements are used."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Preskill, Quantum Computation, Chapter 3: Foundations II: Measurement and Evolution"
      url: "https://www.preskill.caltech.edu/ph219/chap3_15.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

Let $H,K,E$ be nonzero finite-dimensional complex inner-product spaces and let $V:H\to K\otimes E$ be a linear isometry. Put $h=\dim H$, $k=\dim K$, and $e=\dim E$. Let $A=Q_{ke}$ and $B=Q_h$ be the finite-level registers from [[def-qc-register-and-computational-basis]], with first computational basis vectors $a_0$ and $b_0$. Then there is a surjective linear isometry
$$W:H\otimes A\longrightarrow K\otimes E\otimes B$$
such that $W(x\otimes a_0)=Vx\otimes b_0$ for every $x\in H$.

## Facts & Assumptions

**Given:** Nonzero finite-dimensional complex inner-product spaces $H,K,E$ and a linear isometry $V:H\to K\otimes E$.

[F1] [[def-qc-register-and-computational-basis]]: for every integer $d\ge1$, $Q_d=\mathbb C^d$ has the standard coordinate pairing and standard ordered basis. Directly, $\langle e_i,e_j\rangle=\sum_{r<d}\delta_{ri}\delta_{rj}=\delta_{ij}$, so its computational basis is orthonormal and the specified first vectors of $A=Q_{ke}$ and $B=Q_h$ have norm one.

[F2] [[def-qc-tensor-register-and-permutation]]: the product inner product on elementary tensors is the product of the factor inner products.

[F3] [[cor-tensor-products-of-finite-free-modules-and-dimension]]: finite tensor-product dimensions multiply, including zero-dimensional factors.

[F4] [[thm-finite-dimensional-orthogonal-decomposition]]: a subspace of a finite-dimensional inner-product space and its orthogonal complement form an internal direct sum.

[F5] [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]: every finite-dimensional inner-product space has an orthonormal basis, including the empty basis.

[F6] [[def-linear-isometry-and-orthogonal-or-unitary-operator]]: a linear isometry preserves norms, and a surjective isometry is an isometric isomorphism.

## Proof


1.1 Since $h,k,e\ge1$, the registers $A=Q_{ke}$ and $B=Q_h$ are nonzero. By [F1] and [F3], $\dim(H\otimes A)=hke=\dim(K\otimes E\otimes B)$. [given, F1, F3, algebra]

1.2 Choose an orthonormal basis $(u_i)_{i<h}$ of $H$ using [F5]. By [F2], $(u_i\otimes a_0)_{i<h}$ is orthonormal in $H\otimes A$. The complex polarization identity for the first-linear inner-product convention, $$\langle x,y\rangle=\tfrac14\bigl(\|x+y\|^2-\|x-y\|^2+i\|x+iy\|^2-i\|x-iy\|^2\bigr),$$ and the linearity and norm preservation of $V$ from [F6] give $\langle Vu_i,Vu_j\rangle=\langle u_i,u_j\rangle=\delta_{ij}$. Since $b_0$ has norm one by [F1], the product inner product [F2] makes $(Vu_i\otimes b_0)_{i<h}$ orthonormal in $K\otimes E\otimes B$. The linear map sending $u_i\otimes a_0$ to $Vu_i\otimes b_0$ is therefore an isometry between the two $h$-dimensional subspaces they span. [given, F1, F2, F5, F6, algebra]

2.1 Let $S$ and $T$ be those two spans. By [F4], each ambient space is the orthogonal direct sum of its span and orthogonal complement. Choose orthonormal bases of $S^\perp$ and $T^\perp$ by [F5], of lengths $p$ and $q$. Concatenate each with the corresponding $h$-vector orthonormal list from step 1.2. Each concatenated list spans its ambient space by the direct-sum decomposition. It is linearly independent: a zero linear combination splits as $s+z=0$ with $s$ in the span and $z$ in its orthogonal complement, so directness gives $s=z=0$, and independence within each list makes every coefficient zero. Thus the concatenated lists are bases; by the definition of dimension, their lengths give $hke=h+p$ and $hke=h+q$ using step 1.1. Hence $p=q$, establishing equal complement dimensions and giving completed orthonormal bases of the full input and output spaces. [step 1.1, step 1.2, F4, F5, choose, algebra]

3.1 Map the completed input basis bijectively to the completed output basis, using the prescribed map on $(u_i\otimes a_0)$. Its linear extension is surjective and preserves inner products because it sends one orthonormal basis to another. It is the required $W$ by [F6]. Linearity gives $W(x\otimes a_0)=Vx\otimes b_0$ for all $x$. The argument uses only finite basis choices, not a choice axiom. [given, step 1.2, step 2.1, F6, construct] ∎

## Remarks

This is a finite-dimensional existence statement only. It gives no decomposition of $W$ into a fixed finite gate alphabet and no gate or bit-cost bound.

