---
id: lem-it-finite-cq-block-sum-is-a-state
kind: lemma
title: An orthogonal finite ensemble block sum is a density operator
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [def-qc-density-operator, def-qc-register-and-computational-basis, def-qc-tensor-register-and-permutation, cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, thm-non-negative-operator-characterisations, def-trace-of-an-endomorphism]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, §5.3.3"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, arXiv:1106.1445v8, §11.1"
      url: "https://arxiv.org/pdf/1106.1445v8"
---

## Statement

Let $X$ be a finite nonempty set, identify its labels with the computational orthonormal basis $(\xi_x)_{x\in X}$ of a register $H_X$ ([[def-qc-register-and-computational-basis]]), and define the orthogonal rank-one projection $\Pi_x:H_X\to H_X$ by $\Pi_x z:=\langle z,\xi_x\rangle\xi_x$ under the root linear-first convention. Let $H_B$ be a nonzero finite-dimensional complex inner-product space. For probabilities $p_x\ge0$ with $\sum_{x\in X}p_x=1$ and density operators $\rho_x$ on $H_B$, the operator

$$\rho_{XB}:=\sum_{x\in X}p_x\Pi_x\otimes\rho_x$$

is a density operator on $H_X\otimes H_B$.

## Facts & Assumptions

**Given:** The finite label set $X$, the register $H_X$, the space $H_B$, the probability vector $(p_x)$, and the density operators $(\rho_x)$ in the Statement.

[F1] [[def-qc-register-and-computational-basis]]: the computational vectors $(\xi_x)$ form an orthonormal basis of their finite register.

[F2] [[def-qc-density-operator]]: each $\rho_x$ is non-negative with trace one.

[F3] [[def-qc-tensor-register-and-permutation]]: the tensor product carries the product inner product and the displayed factor order.

[F4] [[thm-non-negative-operator-characterisations]]: a non-negative operator is self-adjoint with nonnegative quadratic form.

[F5] [[def-trace-of-an-endomorphism]]: trace is the sum of diagonal entries in any ordered basis.

## Proof

1.1 Every $v\in H_X\otimes H_B$ has a unique form $v=\sum_{x\in X}\xi_x\otimes v_x$. Orthonormality in [F1] and the product inner product in [F3] give $\langle\rho_{XB}v,v\rangle=\sum_xp_x\langle\rho_xv_x,v_x\rangle\ge0$ by [F2]. In the same product basis $\rho_{XB}$ is block diagonal with self-adjoint blocks $p_x\rho_x$, so it is self-adjoint and non-negative by [F4]. [given, F1, F2, F3, F4, algebra]

2.1 By [F5], $\operatorname{tr}(\rho_{XB})=\sum_xp_x\operatorname{tr}(\rho_x)=\sum_xp_x=1$. Thus $\rho_{XB}$ is a density operator by [F2]. [given, F2, F5, step 1.1, algebra] ∎

