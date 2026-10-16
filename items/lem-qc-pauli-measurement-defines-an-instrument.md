---
id: lem-qc-pauli-measurement-defines-an-instrument
kind: lemma
title: Pauli projectors define a finite measurement instrument
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-qc-pauli-measurement-branch-semantics
  - lem-qc-pauli-measurement-projectors
  - def-qc-instrument-and-conditional-state
  - def-qc-completely-positive-map
  - lem-qc-finite-ancilla-amplification-is-block-map
  - def-qc-tensor-register-and-permutation
  - def-non-negative-and-positive-operator
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
  - thm-trace-of-ab-equals-trace-of-ba
justified_by: []
dependency_level: 10
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: John Watrous, Understanding Quantum Information and Computation, Lesson 14 §14.1
      url: https://jhwatrous.github.io/UQIC.pdf
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §20.2"
      url: https://arxiv.org/pdf/1907.09415
---

## Statement

Let $H$ be a nonzero finite-dimensional complex inner-product space and let
$M$ be a Hermitian Pauli observable on $H$ with $M^2=I_H$. Put
$P_b=(I_H+(-1)^bM)/2$ and define
$\mathcal I_b(X)=P_bXP_b$ for $b\in\{0,1\}$. Then the maps
$(\mathcal I_0,\mathcal I_1)$ form a finite instrument from $H$ to $H$. For
every density operator $\rho$ on $H$, the outcome weight of branch $b$ is
$\operatorname{Tr}(\rho P_b)$.

## Facts & Assumptions

**Given:** The data in the Statement.

[F1] The setup gives $\mathcal I_b(X)=P_bXP_b$ and the projectors $P_b$.

[F2] [[lem-qc-pauli-measurement-projectors]]: $P_b^\dagger=P_b$,
$P_b^2=P_b$, $P_0+P_1=I$, and $P_0P_1=P_1P_0=0$.

[F3] [[def-qc-completely-positive-map]]: complete positivity means that for
every finite ancilla dimension $r\ge1$, the block amplification
$\mathcal I_b^{(r)}$ preserves nonnegative operators.

[F4] [[lem-qc-finite-ancilla-amplification-is-block-map]]: if
$X=[X_{ij}]$ is the block matrix of an operator on $H\otimes\mathbb C^r$,
then $\mathcal I_b^{(r)}(X)=[\mathcal I_b(X_{ij})]$.

[F5] [[def-qc-tensor-register-and-permutation]]: the ordered product inner
product on $H\otimes\mathbb C^r$ makes its ancilla basis orthonormal.

[F6] [[def-non-negative-and-positive-operator]]: a nonnegative operator is
self-adjoint and has nonnegative quadratic form on every vector.

[F7] [[thm-trace-of-ab-equals-trace-of-ba]]: trace is cyclic for compatible
finite-dimensional endomorphisms.

[F8] [[def-qc-instrument-and-conditional-state]]: a finite family of
completely positive branch maps is an instrument when the sum of their
output traces equals the input trace for every operator; its branch weight on
a density operator $\rho$ is $\operatorname{Tr}(\mathcal I_b(\rho))$.

## Proof

**Given:** The data in the Statement.

1.1 Each $\mathcal I_b$ is complex-linear because matrix multiplication distributes over finite sums and scalars: $P_b(aX+cY)P_b=aP_bXP_b+cP_bYP_b$. [F1, algebra]

1.2 Fix $r\ge1$, take an orthonormal basis $(e_j)_{j<r}$ of the ancilla, and write $X=[X_{ij}]$ for a nonnegative operator on $H\otimes\mathbb C^r$. Self-adjointness of $X$ by [F6] gives $X_{ij}^\dagger=X_{ji}$: for $\xi,\eta\in H$, $\langle X_{ij}\xi,\eta\rangle =\langle X(\xi\otimes e_j),\eta\otimes e_i\rangle =\langle \xi\otimes e_j,X(\eta\otimes e_i)\rangle =\langle \xi,X_{ji}\eta\rangle$ by the product pairing [F5]. Consequently the blocks $P_bX_{ij}P_b$ satisfy the same adjoint relation, so $\mathcal I_b^{(r)}(X)$ is self-adjoint. [F2, F4, F5, F6, given, algebra]

1.3 For every operator $X$, cyclicity [F7] and idempotence [F2] give $\operatorname{Tr}(\mathcal I_0(X))+\operatorname{Tr}(\mathcal I_1(X)) =\operatorname{Tr}(XP_0)+\operatorname{Tr}(XP_1) =\operatorname{Tr}(X(P_0+P_1))=\operatorname{Tr}(X)$. For a density operator $\rho$, the same calculation gives $\operatorname{Tr}(\mathcal I_b(\rho))=\operatorname{Tr}(\rho P_b)$, the branch trace. [F1, F2, F7, algebra]

2.1 Write $v=\sum_{j<r}v_j\otimes e_j$ and $w=\sum_{j<r}P_bv_j\otimes e_j$. By [F4] and the product pairing [F5], $\langle\mathcal I_b^{(r)}(X)v,v\rangle =\sum_{i,j<r}\langle P_bX_{ij}P_bv_j,v_i\rangle =\sum_{i,j<r}\langle X_{ij}P_bv_j,P_bv_i\rangle =\langle Xw,w\rangle\ge0$. Thus the ampliation preserves nonnegative operators. Since $r$ was arbitrary, $\mathcal I_b$ is completely positive by [F3]. [F2, F3, F4, F5, F6, step 1.2, algebra]

3.1 The two maps are completely positive by step 2.1 and their total output trace equals the input trace by step 1.3. They therefore form a finite instrument by [F8]. [F8, step 2.1, step 1.3]

4.1 By the branch-weight clause of [F8], the outcome weight on $\rho$ is $\operatorname{Tr}(\mathcal I_b(\rho))$. Step 1.3 identifies this with $\operatorname{Tr}(\rho P_b)$. [F8, step 1.3, step 3.1] ∎

## Sources

Watrous Lesson 14 §14.1, PDF pp. 405–407, treats the two Pauli branches as a
projective measurement; de Wolf §20.2, PDF pp. 186–188, gives their branch
maps and probabilities. Complete positivity and trace preservation are
verified locally from the block definition and the two projector identities.
