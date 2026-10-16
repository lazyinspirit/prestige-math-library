---
id: lem-qc-coherent-record-isometry
kind: lemma
title: "A finite instrument has an isometric coherent record"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-instrument-and-conditional-state
  - lem-qc-instrument-output-space-is-nonzero
  - thm-qc-kraus-choi-equivalence
  - def-qc-kraus-representation
  - thm-qc-instrument-kraus-normalization
  - def-qc-register-and-computational-basis
  - def-qc-tensor-register-and-permutation
  - def-qc-tensor-map
  - def-qc-partial-trace
  - def-qc-projective-measurement
  - def-qc-dirac-notation-conversion
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - thm-adjoint-exists-and-is-unique-in-finite-dimension
justified_by: []
dependency_level: 7
proof_strategy: direct
axiom_use: "None; only finitely many outcome and Kraus indices occur."
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
    - title: "John Watrous, The Theory of Quantum Information (2018 author-hosted draft), §§2.2.2 and 2.3.2"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "John Preskill, Quantum Computation, Chapter 3: Foundations II: Measurement and Evolution"
      url: "https://www.preskill.caltech.edu/ph219/chap3_15.pdf"
---

## Statement

Let $(\mathcal I_a)_{a\in\Omega}$ be a finite instrument from a nonzero finite-dimensional complex inner-product space $H$ to a finite-dimensional complex inner-product space $K$. Fix an order on its finite nonempty outcome set $\Omega$, with $m=|\Omega|$. There are a common integer $r\ge1$ and Kraus families $(M_{a,j})_{0\le j<r}$, padding shorter families by zero operators, such that
$$\sum_{a\in\Omega}\sum_{j<r}M_{a,j}^\dagger M_{a,j}=I_H.$$
Let $E=Q_m\otimes Q_r$ with its ordered product basis $(e_a\otimes f_j)_{a,j}$, and define
$$Vx:=\sum_{a\in\Omega}\sum_{j<r}M_{a,j}x\otimes e_a\otimes f_j\in K\otimes E.$$
Then $V$ is a linear isometry. Let $\Pi_a$ be the projection on $E$ which keeps exactly the basis vectors $e_a\otimes f_j$. For every $X\in\mathcal L(H)$,
$$\operatorname{Tr}_E\!\left((I_K\otimes\Pi_a)VXV^\dagger(I_K\otimes\Pi_a)\right)=\mathcal I_a(X).$$
The first record register stores the observed outcome $a$; the second index $j$ is hidden environment data.

## Facts & Assumptions

**Given:** A finite instrument, its nonempty finite outcome set $\Omega$, a fixed ordering of $\Omega$, and its input and output spaces $H,K$.

[F1] [[def-qc-instrument-and-conditional-state]]: every outcome map is completely positive, and the sum of its output traces equals the input trace for every input operator.

[F2] [[thm-qc-kraus-choi-equivalence]]: every finite-dimensional completely positive map $\mathcal L(H)\to\mathcal L(K)$ has a finite Kraus representation.

[F3] [[def-qc-kraus-representation]]: a finite Kraus family $(M_j)$ represents $\Phi$ when $\Phi(X)=\sum_j M_jXM_j^\dagger$ for every input operator $X$.

[F4] [[thm-qc-instrument-kraus-normalization]]: for finite branch Kraus families of an instrument, $\sum_{a,j}M_{a,j}^\dagger M_{a,j}=I_H$.

[F5] [[def-qc-register-and-computational-basis]]: for positive integers $m,r$, $Q_m$ and $Q_r$ have ordered orthonormal bases indexed by their levels.

[F6] [[def-qc-tensor-register-and-permutation]]: the ordered tensor product has the product inner product, so the basis $(e_a\otimes f_j)$ is orthonormal.

[F7] [[def-qc-projective-measurement]]: a finite family of pairwise orthogonal self-adjoint projections summing to identity is a projective measurement.

[F8] [[def-qc-tensor-map]]: tensor maps act on elementary tensors by applying each factor map in its factor.

[F9] [[def-qc-partial-trace]]: the partial trace over a finite basis of the second factor sums the diagonal second-factor matrix entries.

[F10] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]]: $\langle Mx,y\rangle=\langle x,M^\dagger y\rangle$, using the repository first-linear convention.

[F11] [[thm-adjoint-exists-and-is-unique-in-finite-dimension]]: every map between finite-dimensional inner-product spaces has a unique adjoint, so $V^\dagger$ is defined.

[F12] [[lem-qc-instrument-output-space-is-nonzero]]: existence of a finite instrument from nonzero $H$ forces its finite-dimensional output space $K$ to be nonzero.

[F13] [[def-qc-dirac-notation-conversion]]: the rank-one map $|u\rangle\langle v|$ sends $z$ to $\langle z,v\rangle u$ in the repository's first-linear convention.

## Proof


1.1 By [F12], $K$ is nonzero. For each $a\in\Omega$, complete positivity in [F1] and [F2] supplies a finite Kraus family for $\mathcal I_a$ as in [F3]. Let $r$ be the maximum of their finitely many lengths and $1$; append zero operators to shorter lists until every list has length $r$. These finitely many choices are made successively over $\Omega$, so no choice axiom is used. [given, F1, F2, F3, F12, choose]

1.2 Define $P_a e_b=e_b$ if $b=a$ and $0$ otherwise on $Q_m$, and put $\Pi_a=P_a\otimes I_{Q_r}$. The basis definitions show $P_a$ is self-adjoint and idempotent, the $P_a$ are pairwise orthogonal and sum to $I_{Q_m}$, so [F7] makes them a projective measurement. By [F8], $\Pi_a(e_b\otimes f_j)$ equals $e_b\otimes f_j$ if $b=a$ and $0$ otherwise; since these basis vectors are orthonormal and span $E$, $\Pi_a$ is the orthogonal projection onto the subspace with observed label $a$. [given, F5, F6, F7, F8, construct]

2.1 The branch families in step 1.1 are the instrument's finite branch Kraus families, so [F4] gives $\sum_{a,j<r}M_{a,j}^\dagger M_{a,j}=I_H$. Since $m,r\ge1$, the registers in [F5] exist. [given, step 1.1, F4, F5, algebra]

3.1 For $x,y\in H$, orthogonality of the product record basis [F6] and the adjoint identity [F10] give $\langle Vx,Vy\rangle=\sum_{a,j}\langle M_{a,j}x,M_{a,j}y\rangle =\sum_{a,j}\langle x,M_{a,j}^\dagger M_{a,j}y\rangle =\langle x,y\rangle$ by step 2.1. Thus the finite sum defines a linear isometry. [given, step 2.1, F6, F10, construct]

4.1 The adjoint $V^\dagger$ in the claimed operator identity exists by [F11]. Expanding the isometry gives $$VXV^\dagger=\sum_{b,c\in\Omega}\sum_{j,k<r}M_{b,j}XM_{c,k}^\dagger\otimes|e_b\otimes f_j\rangle\langle e_c\otimes f_k|.$$ Applying $I_K\otimes\Pi_a$ on both sides kills terms unless $b=c=a$. The partial-trace formula [F9] then keeps only the diagonal hidden entries $j=k$, leaving $\sum_{j<r}M_{a,j}XM_{a,j}^\dagger=\mathcal I_a(X)$ by [F3]. The rank-one record operators have the action specified by [F13]. Thus only $a$ is recorded as the outcome; $j$ is traced out. [given, step 1.1, step 1.2, F3, F8, F9, F11, F13, algebra] ∎

