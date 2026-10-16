---
id: lem-qa-hidden-coset-state-law
kind: lemma
title: Discarding the hiding register yields a coset-state mixture
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 16
deps:
  - alg-qa-finite-abelian-hidden-subgroup-sample
  - def-qc-dirac-notation-conversion
  - def-qc-coherent-function-oracle
  - def-qc-partial-trace
  - def-qa-finite-abelian-hidden-subgroup-problem
  - def-qc-circuit-denotational-semantics
  - def-qc-register-and-computational-basis
  - def-qc-tensor-register-and-permutation
  - lem-qc-tensor-product-basis-and-dimension
  - def-qc-density-operator
  - def-non-negative-and-positive-operator
  - def-trace-of-an-endomorphism
  - prop-trace-is-linear
  - thm-qc-computational-basis-orthonormal
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

Let $G$ be finite abelian, $H\le G$, $N=|G|$, and $h=|H|$. Write $\mathcal C_H:=\{g+H:g\in G\}$ for the set of distinct additive cosets, where $g+H:=\{g+h':h'\in H\}$. Start with the uniform group state, evaluate an exact hiding oracle into a fresh output register, then discard that register. On the group register the resulting density matrix is
$$\rho_G=\frac{h}{N}\sum_{C\in\mathcal C_H}|C\rangle\langle C|,\qquad |C\rangle:=h^{-1/2}\sum_{g\in C}|g\rangle.$$
Thus it is the uniform mixture of one normalized coset state for each distinct coset.

## Facts & Assumptions

**Given:** A finite abelian group $G$, a subgroup $H\le G$, an exact hiding function $F$ satisfying the promise in [[def-qa-finite-abelian-hidden-subgroup-problem]], and the coherent XOR action in [[def-qc-coherent-function-oracle]].

[F1] The hiding promise is $F(g)=F(g')$ exactly when $g-g'\in H$. ([[def-qa-finite-abelian-hidden-subgroup-problem]])

[F2] On a valid group code $x=\operatorname{code}_G(g)$, the total Boolean extension equals $\eta(F(g))$; its XOR oracle maps $|x,y\rangle$ to $|x,y\oplus\eta(F(g))\rangle$. ([[def-qa-finite-abelian-hidden-subgroup-problem]], [[def-qc-coherent-function-oracle]])

[L1] The partial trace over the output register contracts equal output-basis indices and sums them, in the declared register order. ([[def-qc-partial-trace]])

[F3] The group and output registers are ordered tensor products of $Q_2$ factors ([[def-qc-register-and-computational-basis]]). Each factor's computational basis is orthonormal ([[thm-qc-computational-basis-orthonormal]]); the tensor-register inner product is the product of the factor inner products ([[def-qc-tensor-register-and-permutation]]), so the lexicographic product computational basis is orthonormal by the factor-basis theorem ([[lem-qc-tensor-product-basis-and-dimension]]). This includes either empty register.

[F4] A density operator is a nonnegative endomorphism of trace one, and nonnegativity requires self-adjointness and a nonnegative quadratic form. ([[def-qc-density-operator]], [[def-non-negative-and-positive-operator]])

[F5] In a fixed ordered basis, the endomorphism trace is the finite sum of diagonal entries of its coordinate matrix; the coordinate matrix of a finite sum is the corresponding sum of matrices, so matrix-trace linearity gives trace linearity for the finite sums used here. ([[def-trace-of-an-endomorphism]], [[prop-trace-is-linear]])

[F6] The rank-one operator $|x\rangle\langle y|$ sends $v$ to $\langle v,y\rangle_{\rm root}x$. ([[def-qc-dirac-notation-conversion]])

## Proof

1.1 Write $N=|G|$ and $h=|H|$. The oracle output on the initial state is $|\Psi\rangle=N^{-1/2}\sum_{g\in G}|\operatorname{code}_G(g)\rangle|\eta(F(g))\rangle$. The unreduced density matrix has terms $N^{-1}|\operatorname{code}_G(g)\rangle\langle\operatorname{code}_G(g')|\otimes|\eta(F(g))\rangle\langle\eta(F(g'))|$. By [L1] and output-register orthonormality [F3], tracing out the second register retains exactly the pairs with $\eta(F(g))=\eta(F(g'))$. Injectivity of $\eta$ in [F2] makes this equivalent to $F(g)=F(g')$. [given, F1, F2, F3, L1, algebra]

2.1 By [F1], the retained pairs are exactly those lying in a common coset $C\in G/H$. Translation gives $|C|=h$. By [F3], the vectors $|g\rangle$ are orthonormal, so $\langle C,C\rangle=h^{-1}\sum_{g,g'\in C}\langle g,g'\rangle=1$ for $|C\rangle:=h^{-1/2}\sum_{g\in C}|g\rangle$. Hence $\rho_G=N^{-1}\sum_{C\in G/H}\sum_{g,g'\in C}|g\rangle\langle g'|$. The rank-one matrix $|C\rangle\langle C|$ has diagonal entries $1/h$ on the $h$ labels in $C$ and zero elsewhere, so its trace is $1$ by [F5]. Put $P_C:=|C\rangle\langle C|$. By [F6], $P_Cv=\langle v,C\rangle_{\rm root}|C\rangle$, and for all $u,v$ the root pairing gives $\langle P_Cu,v\rangle_{\rm root}=\langle u,C\rangle_{\rm root}\langle C,v\rangle_{\rm root}=\langle u,P_Cv\rangle_{\rm root}$. Thus $P_C$ is self-adjoint. Also $\langle |C\rangle\langle C|v,v\rangle_{\rm root}=|\langle v,C\rangle_{\rm root}|^2\ge0$. Therefore $|C\rangle\langle C|=h^{-1}\sum_{g,g'\in C}|g\rangle\langle g'|$. [F1, F3, F5, F6, step 1.1, construct]

3.1 Substitution gives $\rho_G=(h/N)\sum_{C\in G/H}|C\rangle\langle C|$. The real positive weighted sum of the self-adjoint summands in step 2.1 is self-adjoint, and its quadratic form is the corresponding weighted sum of nonnegative quadratic forms. Thus $\rho_G$ is nonnegative by [F4]. The cosets partition the $N$ group elements into blocks of size $h$, so there are $N/h$ distinct cosets and the weights sum to $(h/N)(N/h)=1$. By trace linearity [F5] and the unit trace of each summand, $\operatorname{tr}(\rho_G)=1$. Thus [F4] makes $\rho_G$ a density operator, and the formula is the uniform mixture over distinct cosets. [F4, F5, step 2.1, algebra] ∎

## Remarks

The proof uses discard/partial trace. It does not replace discarding by a measured output; a separate measurement branch is unnecessary for this reduced-state identity.
