---
id: def-tgr-finite-cutoff-outside-entropy
kind: definition
title: Finite-regulator outside density and entropy
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-linear-map
  - def-coordinate-column-and-matrix-of-a-linear-map
  - thm-unique-coordinates-with-respect-to-an-ordered-basis
  - def-qc-tensor-register-and-permutation
  - def-non-negative-and-positive-operator
  - def-qc-density-operator
  - def-trace-of-a-square-matrix
  - def-trace-of-an-endomorphism
  - def-it-von-neumann-entropy
  - thm-non-negative-operator-characterisations
dependency_roles:
  def-linear-map: mathematical-premise
  def-coordinate-column-and-matrix-of-a-linear-map: mathematical-premise
  thm-unique-coordinates-with-respect-to-an-ordered-basis: mathematical-premise
  def-qc-tensor-register-and-permutation: mathematical-premise
  def-non-negative-and-positive-operator: mathematical-premise
  def-qc-density-operator: mathematical-premise
  def-trace-of-a-square-matrix: mathematical-premise
  def-trace-of-an-endomorphism: mathematical-premise
  def-it-von-neumann-entropy: mathematical-premise
  thm-non-negative-operator-characterisations: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, Chapter 2, section 2.1.3
      url: https://jhwatrous.github.io/TQI.2.pdf
    - title: John Watrous, The Theory of Quantum Information, Chapter 5, section 5.2.1
      url: https://jhwatrous.github.io/TQI.5.pdf
    - title: John Preskill, Quantum Shannon Theory, Chapter 2, section 2.3
      url: https://www.preskill.caltech.edu/ph219/chap2_15.pdf
    - title: John Preskill, Quantum Shannon Theory, Chapter 10, section 10.2
      url: https://www.preskill.caltech.edu/ph219/chap10_6A_2025.pdf
---

## Definition

Let $H_{\rm in}$ and $H_{\rm out}$ be nonzero finite-dimensional complex inner-product spaces, and let $\rho$ be a density operator on $H_{\rm in}\otimes H_{\rm out}$. Choose orthonormal bases $(e_i)_{i=1}^{d_{\rm in}}$ and $(f_a)_{a=1}^{d_{\rm out}}$, and use the ordered product basis $(e_i\otimes f_a)$, with the $H_{\rm in}$ index first. The outside density $\rho_{\rm out}:H_{\rm out}\to H_{\rm out}$ is the linear map whose matrix entries in $(f_a)$ are

$$ (\rho_{\rm out})_{ab}:=\sum_{i=1}^{d_{\rm in}}\rho_{(i,a),(i,b)}. $$

Fix $k_B>0$ as a real scale. If $\lambda_1,\ldots,\lambda_{d_{\rm out}}$ are the eigenvalues of $\rho_{\rm out}$ counted with multiplicity, define

$$ S_{\rm out}(\rho;H_{\rm in},H_{\rm out}):=-k_B\sum_{j=1}^{d_{\rm out}}\lambda_j\log\lambda_j, $$

where $\log$ is the natural logarithm and $0\log0:=0$. The finite matrix argument below proves that $\rho_{\rm out}$ is a density operator and that the displayed endomorphism is basis-independent, so $S_{\rm out}$ is a finite real number independent of the chosen bases. In this mathematical definition $k_B$ is only a positive scalar; no physical units or model are asserted.

## Definition references

[[def-linear-map]]

[[def-coordinate-column-and-matrix-of-a-linear-map]]

[[thm-unique-coordinates-with-respect-to-an-ordered-basis]]

[[def-qc-tensor-register-and-permutation]]

[[def-non-negative-and-positive-operator]]

[[def-qc-density-operator]]

[[def-trace-of-an-endomorphism]]

[[def-it-von-neumann-entropy]]

[Watrous, The Theory of Quantum Information, Chapter 2, section 2.1.3](https://jhwatrous.github.io/TQI.2.pdf)

[Watrous, The Theory of Quantum Information, Chapter 5, section 5.2.1](https://jhwatrous.github.io/TQI.5.pdf)

[Preskill, Quantum Shannon Theory, Chapter 2, section 2.3](https://www.preskill.caltech.edu/ph219/chap2_15.pdf)

[Preskill, Quantum Shannon Theory, Chapter 10, section 10.2](https://www.preskill.caltech.edu/ph219/chap10_6A_2025.pdf)

## Facts & Assumptions

**Given:** Nonzero finite-dimensional complex inner-product spaces $H_{\rm in},H_{\rm out}$; a density operator $\rho$ on their ordered tensor product; orthonormal bases of each factor; and a fixed real $k_B>0$.

[F1] [[def-qc-density-operator]]: on a nonzero finite-dimensional complex inner-product space, a density operator is a non-negative endomorphism of trace one.

[F2] [[def-non-negative-and-positive-operator]]: a non-negative operator is self-adjoint and has non-negative quadratic form on every vector.

[F3] [[def-qc-tensor-register-and-permutation]]: the factor order is retained, the ordered product of the chosen orthonormal factor bases is an orthonormal basis of $H_{\rm in}\otimes H_{\rm out}$, and the tensor-product inner product on elementary tensors is the product of the factor inner products; that convention is linear in the first argument.

[F4] [[def-linear-map]]: a linear map is a function between vector spaces over the same field that preserves linear combinations.

[F5] [[def-coordinate-column-and-matrix-of-a-linear-map]]: the column for an input basis vector is the coordinate column of its image in the output basis.

[F6] [[thm-unique-coordinates-with-respect-to-an-ordered-basis]]: coordinates in a finite ordered basis are unique.

[F7] [[def-trace-of-a-square-matrix]] defines matrix trace as the sum of diagonal entries; [[def-trace-of-an-endomorphism]] defines endomorphism trace by a matrix in any ordered basis and establishes basis-independence.

[F8] [[def-it-von-neumann-entropy]]: for a finite density operator, entropy is the finite spectral sum $-\sum_{\lambda_j>0}\lambda_j\ln\lambda_j$, with zero-eigenvalue contribution $0$ and natural logarithms.

[F9] [[thm-non-negative-operator-characterisations]]: a non-negative endomorphism of a finite-dimensional complex inner-product space has an orthonormal eigenbasis with nonnegative real eigenvalues.

## Proof

1.1 For each basis vector $f_b$, prescribe $\rho_{\rm out}f_b:=\sum_{a=1}^{d_{\rm out}}(\sum_{i=1}^{d_{\rm in}}\rho_{(i,a),(i,b)})f_a$. The product basis in [F3] supplies the matrix entries of $\rho$, and [F4]–[F6] give a unique linear extension from the prescribed images; its matrix is exactly the displayed formula. [given, F3, F4, F5, F6, construct, algebra]

1.2 Since $\rho$ is self-adjoint by [F1]–[F2], its matrix satisfies $\overline{\rho_{(i,b),(i,a)}}=\rho_{(i,a),(i,b)}$, so $\rho_{\rm out}$ is self-adjoint. For every $y\in H_{\rm out}$, expansion in $(f_a)$ gives $\langle\rho_{\rm out}y,y\rangle=\sum_i\langle\rho(e_i\otimes y),e_i\otimes y\rangle\ge0$ by [F2]–[F3]. Its trace is $\sum_a(\rho_{\rm out})_{aa}=\sum_{i,a}\rho_{(i,a),(i,a)}=\operatorname{tr}\rho=1$ by [F1] and [F7]; hence $\rho_{\rm out}$ is a density operator by [F1]. [given, F1, F2, F3, F7, algebra]

1.3 For every endomorphism $B$ of $H_{\rm out}$, define $I_{\rm in}\otimes B$ on the product basis by $(I_{\rm in}\otimes B)(e_i\otimes f_b):=e_i\otimes Bf_b$; [F3]–[F6] give its unique linear extension. For arbitrary $x,y$, expansion in the chosen bases shows this map sends $x\otimes y$ to $x\otimes By$, so it is independent of those bases. Finite matrix multiplication gives $\operatorname{tr}(\rho_{\rm out}B)=\sum_{i,a,b}\rho_{(i,a),(i,b)}B_{ba}=\operatorname{tr}(\rho(I_{\rm in}\otimes B))$. The right side is therefore basis-independent. If a second choice produced $\widetilde\rho_{\rm out}$, then $\operatorname{tr}((\widetilde\rho_{\rm out}-\rho_{\rm out})B)=0$ for all $B$; taking $B$ to be the matrix unit with sole nonzero entry in row $b$, column $a$ gives $\operatorname{tr}((\widetilde\rho_{\rm out}-\rho_{\rm out})B)=(\widetilde\rho_{\rm out}-\rho_{\rm out})_{ab}$, so every entry of the difference is zero. Thus the endomorphism is basis-independent. [given, F3, F4, F5, F6, F7, algebra]

2.1 By [F9], $\rho_{\rm out}$ has an orthonormal eigenbasis with nonnegative real eigenvalues; [F7] and step 1.2 show their sum is $\operatorname{tr}(\rho_{\rm out})=1$, so each lies in $[0,1]$. The finite spectral sum in [F8] is therefore real, with zero eigenvalues contributing $0$ by convention. Its eigenvalue multiset is intrinsic to the endomorphism, and step 1.3 proves that endomorphism is basis-independent; multiplying by the fixed real $k_B$ preserves finiteness and basis-independence. [given, F7, F8, F9, step 1.2, step 1.3, algebra] ∎
