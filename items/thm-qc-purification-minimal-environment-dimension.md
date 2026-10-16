---
id: thm-qc-purification-minimal-environment-dimension
kind: theorem
title: The least purification environment dimension is the density rank
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 5
deps: [thm-qc-purification-existence-and-unitary-equivalence, thm-qc-schmidt-decomposition, def-qc-ensemble-and-purification, def-qc-tensor-register-and-permutation, def-qc-dirac-notation-conversion, def-qc-partial-trace, thm-qc-partial-trace-characterization-and-basis-independence, def-dimension, def-linear-combination-and-span, def-orthogonal-complement, thm-finite-dimensional-orthogonal-decomposition, thm-dimension-of-a-linear-subspace, cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, thm-orthogonal-nonzero-vectors-are-linearly-independent, cor-independent-set-is-no-larger-than-a-finite-spanning-set, def-rank-and-nullity]
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
    - title: John Watrous, The Theory of Quantum Information, §2.1.3, Theorem 2.10
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
    - title: "John Preskill, Quantum Computation, Chapter 2: Foundations I: States and Ensembles, §§2.4–2.5"
      url: https://www.preskill.caltech.edu/ph219/chap2_15.pdf
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §18.3"
      url: https://arxiv.org/pdf/1907.09415
---

## Statement

For a density operator $\rho$ on a nonzero finite-dimensional complex-inner-product space $H$, the least possible dimension of a finite auxiliary space $K$ for which $\rho$ has a purification in $H\otimes K$ is $\operatorname{rank}(\rho)$.

## Facts & Assumptions

**Given:** A density operator $\rho$ on $H$ and a finite-dimensional purification space $K$ whenever a purification in $H\otimes K$ is under consideration.

[F1] [[def-qc-ensemble-and-purification]]: a purification is a unit vector whose auxiliary partial trace is $\rho$.

[F2] [[thm-qc-schmidt-decomposition]]: a bipartite vector has a Schmidt decomposition with positive coefficients and orthonormal families in both factors.

[F3] [[thm-qc-purification-existence-and-unitary-equivalence]]: $\rho$ has a purification on an auxiliary space of dimension $\operatorname{rank}(\rho)$.

[F4] [[def-qc-tensor-register-and-permutation]], [[def-qc-dirac-notation-conversion]] and [[def-qc-partial-trace]]: the product basis uses the fixed factor order, $|x\rangle\langle y|$ acts by $z\mapsto\langle z,y\rangle x$, and partial trace contracts equal auxiliary basis indices.

[F5] [[thm-qc-partial-trace-characterization-and-basis-independence]]: the partial-trace formula may use the auxiliary Schmidt basis, independently of the originally fixed basis.

[F6] [[def-rank-and-nullity]]: the rank of a finite-dimensional endomorphism is the dimension of its image.

[F7] [[def-linear-combination-and-span]], [[def-orthogonal-complement]], [[thm-finite-dimensional-orthogonal-decomposition]], [[thm-dimension-of-a-linear-subspace]] and [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]: the span $L$ of the finite orthonormal family is a subspace, its orthogonal complement is finite-dimensional and has an orthonormal basis, and adjoining that basis completes the family to an orthonormal basis of $K$.

[F8] [[def-dimension]], [[thm-orthogonal-nonzero-vectors-are-linearly-independent]] and [[cor-independent-set-is-no-larger-than-a-finite-spanning-set]]: an orthonormal list is linearly independent, and in a finite-dimensional $K$ every linearly independent set has size at most $\dim K$.

## Proof

1.1 Let $\Psi\in H\otimes K$ purify $\rho$. By [F2], write $\Psi=\sum_{j=1}^s s_j u_j\otimes v_j$ with $s_j>0$ and orthonormal families in both factors. Let $L=\operatorname{span}\{v_1,\ldots,v_s\}$. By [F7], $L^\perp$ is finite-dimensional and $K=L\oplus L^\perp$; choose an orthonormal basis of $L^\perp$ and append it to $(v_j)$ to form an orthonormal basis of $K$. In this extended basis, the auxiliary partial-trace sum contracts the Schmidt terms to the diagonal terms only. By [F4]–[F5], $\rho=\operatorname{Tr}_K(|\Psi\rangle\langle\Psi|)=\sum_{j=1}^s s_j^2|u_j\rangle\langle u_j|$. This operator maps each $u_j$ to $s_j^2u_j$, and its image is contained in their span, so its image is exactly their $s$-dimensional span. By [F6], $s=\operatorname{rank}(\rho)$. By [F8], the orthonormal family $(v_j)$ is linearly independent and $K$ has a finite spanning basis of size $\dim K$, hence $s\le\dim K$. Therefore $\dim K\ge\operatorname{rank}(\rho)$. [F1, F2, F4, F5, F6, F7, F8, algebra]

2.1 By [F3], a purification exists with auxiliary dimension $\operatorname{rank}(\rho)$. Step 1.1 shows no purification can use a smaller dimension, so this dimension is the minimum. [F3, step 1.1] ∎

## Remarks

The argument uses finite-dimensional singular families and a finite orthonormal-basis extension; no arbitrary-index choice is used.
