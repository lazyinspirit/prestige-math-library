---
id: lem-it-quantum-entropy-support-and-finiteness
kind: lemma
title: Joint state support is contained in the tensor product of its marginal supports
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [def-it-finite-dimensional-quantum-relative-entropy, lem-it-partial-traces-of-a-state-are-states, def-qc-density-operator, def-qc-partial-trace, def-qc-first-factor-partial-trace, def-qc-tensor-register-and-permutation, thm-qc-partial-trace-positive-and-trace-preserving, thm-non-negative-operator-characterisations]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, §5.2.2"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, arXiv:1106.1445v8, §11.1"
      url: "https://arxiv.org/pdf/1106.1445v8"
---

## Statement

For a state $\rho_{AB}$ on a finite-dimensional bipartite space, with marginals $\rho_A=\operatorname{Tr}_B\rho_{AB}$ and $\rho_B=\operatorname{Tr}_A\rho_{AB}$,

$$\operatorname{supp}(\rho_{AB})\subseteq\operatorname{supp}(\rho_A)\otimes\operatorname{supp}(\rho_B)=\operatorname{supp}(\rho_A\otimes\rho_B).$$

Consequently $D(\rho_{AB}\|\rho_A\otimes\rho_B)$ is finite.

## Facts & Assumptions

**Given:** A finite-dimensional bipartite density operator $\rho_{AB}$ and the partial traces in the Statement.

[F1] [[def-qc-density-operator]]: a density operator is non-negative with trace one; its support is the orthogonal complement of its kernel.

[F2] [[def-qc-partial-trace]]: the second-factor marginal has entries $(\rho_A)_{ii'}=\sum_j(\rho_{AB})_{(i,j),(i',j)}$.

[F3] [[def-qc-first-factor-partial-trace]]: the first-factor marginal has entries $(\rho_B)_{jj'}=\sum_i(\rho_{AB})_{(i,j),(i,j')}$. 

[F4] [[lem-it-partial-traces-of-a-state-are-states]]: both marginals are density operators.

[F5] [[thm-non-negative-operator-characterisations]]: every non-negative operator has a factorization $R=S^*S$, so zero quadratic form at $v$ implies $Rv=0$.

[F6] [[thm-non-negative-operator-characterisations]]: a non-negative operator has an orthonormal eigenbasis with nonnegative eigenvalues.

## Proof

1.1 Choose an orthonormal basis $(b_j)$ of $H_B$. If $u\in\ker\rho_A$, then [F2] gives $0=\langle\rho_Au,u\rangle=\sum_j\langle\rho_{AB}(u\otimes b_j),u\otimes b_j\rangle$. Every term is nonnegative by [F1], so every term is zero. By [F5], write $\rho_{AB}=S^*S$; a zero quadratic form then gives $S(u\otimes b_j)=0$ and hence $\rho_{AB}(u\otimes b_j)=0$. Since $(b_j)$ spans $H_B$, $\rho_{AB}$ annihilates $\ker\rho_A\otimes H_B$. [given, F1, F2, F5, choose, algebra]

2.1 Choose an orthonormal basis $(a_i)$ of $H_A$. If $v\in\ker\rho_B$, then [F3] similarly gives $0=\langle\rho_Bv,v\rangle=\sum_i\langle\rho_{AB}(a_i\otimes v),a_i\otimes v\rangle$. Positivity and [F5] show that $\rho_{AB}$ annihilates $H_A\otimes\ker\rho_B$. [given, F1, F3, F5, choose, algebra]

3.1 Self-adjointness of $\rho_{AB}$ implies its range is orthogonal to both subspaces annihilated in steps 1.1 and 2.1. Using the orthogonal decompositions $H_A=\operatorname{supp}(\rho_A)\oplus\ker\rho_A$ and $H_B=\operatorname{supp}(\rho_B)\oplus\ker\rho_B$, the intersection of their orthogonal complements is $\operatorname{supp}(\rho_A)\otimes\operatorname{supp}(\rho_B)$. For non-negative $\rho_{AB}$ its range equals its support by [F6]. The product spectral decomposition also gives $\operatorname{supp}(\rho_A\otimes\rho_B)=\operatorname{supp}(\rho_A)\otimes\operatorname{supp}(\rho_B)$. Hence the stated inclusion holds, and the QRE support condition in [[def-it-finite-dimensional-quantum-relative-entropy]] makes the divergence finite. [F1, F4, F6, step 1.1, step 2.1, algebra] ∎

