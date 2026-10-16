---
id: lem-qa-21-robust-one-step-oaa-isometry
kind: lemma
title: Robust one-step OAA including ancilla leakage
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 17
deps:
  - alg-qa-21-one-step-oblivious-amplification
  - thm-qa-21-oblivious-amplification-block-identity
  - def-qa-21-oblivious-reflection
  - thm-qc-reflection-unitary-involution
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - cor-operator-norm-submultiplicative-and-t-star-t-identity
  - cor-triangle-inequality-for-inner-product-norm
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
  - def-linear-isometry-and-orthogonal-or-unitary-operator
  - def-qc-tensor-register-and-permutation
  - def-qc-tensor-map
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
  - def-qc-register-and-computational-basis
  - thm-qc-computational-basis-orthonormal
  - lem-qc-linear-isometry-adjoint-identities
  - thm-qc-isometric-encoding-projector
justified_by: []
proof_strategy: direct
axiom_use: None; all decompositions and tensor registers are finite-dimensional.
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
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 28 §28.3
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Eq. (28.25), printed p.142; the full ancilla-leakage bound below is proved locally."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §9.3 and Exercise 9"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Printed pp.74–76; the robust isometry estimate including leakage is proved locally."
---

## Statement

Let $S$ be a nonzero finite-dimensional system space, let $A$ be the complete clean-ancilla register, let $Jx=|0_A\rangle\otimes x$, and put $\Pi=JJ^\dagger$, $R_0=I-2\Pi$. Suppose $W$ is unitary, $J^\dagger WJ=M/2$, $V:S\to S$ is unitary, and $\|M-V\|\le\eta\le1/100$. For
$$C:=-WR_0W^\dagger R_0W$$
one has the clean-input isometry bound
$$\|CJ-JV\|\le10\sqrt{\eta}.$$
The estimate includes residual ancilla leakage; it does not assert exact cleanup for nonzero $\eta$.

## Facts & Assumptions

**Given:** The finite system and ancilla spaces, the stated block condition, unitaries $W,V$, and $0\le\eta\le1/100$.

[L1] [[alg-qa-21-one-step-oblivious-amplification]] fixes the chronological circuit $-WR_0W^\dagger R_0W$.

[F1] [[thm-qa-21-oblivious-amplification-block-identity]]: $J^\dagger WR_0W^\dagger R_0WJ=-3M/2+MM^\dagger M/2$ when $J^\dagger WJ=M/2$.

[F2] [[def-qa-21-oblivious-reflection]]: $R_0=I-2\Pi$ for the projector $\Pi$ onto the entire clean coefficient/work ancilla, tensored with identity on the system.

[F3] [[thm-qc-reflection-unitary-involution]]: $R_0$ is a unitary involution.

[F4] [[def-linear-isometry-and-orthogonal-or-unitary-operator]]: a unitary preserves every vector norm.

[F5] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: the operator norm is the maximum norm on unit vectors.

[F6] [[cor-triangle-inequality-for-inner-product-norm]] and [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]: the vector norm is homogeneous, satisfies the triangle inequality, and obeys Cauchy–Schwarz.

[F7] [[cor-operator-norm-submultiplicative-and-t-star-t-identity]]: $\|AB\|\le\|A\|\|B\|$ and $\|T^\dagger T\|=\|T\|^2$.

[F8] [[def-qc-tensor-register-and-permutation]] and [[def-qc-tensor-map]]: product registers have the product inner product and $T\otimes I$ acts factorwise.

[F9] [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]: every finite-dimensional inner-product space has an orthonormal basis.

[F10] [[def-qc-register-and-computational-basis]] and [[thm-qc-computational-basis-orthonormal]]: the distinguished clean register vector is a unit vector. Together with [F8], the clean injection $Jx=|0_A\rangle\otimes x$ is an isometry; [[lem-qc-linear-isometry-adjoint-identities]] gives $J^\dagger J=I$, and [[thm-qc-isometric-encoding-projector]] makes $\Pi=JJ^\dagger$ the orthogonal projection onto its image.

## Proof

**Given:** As in Facts & Assumptions.

1.1 By [F10], $J^\dagger J=I$ and $\Pi$ is an orthogonal projection. By the circuit order in [L1], the factors in $C$ are unitary by [F2]–[F4], so $CJ$ is an isometry. Put $D:=J^\dagger CJ$. By [F1] and the minus sign in $C$, $D=3M/2-MM^\dagger M/2$. Write $E=M-V$. For every unit vector $x$, $\|Mx\|\le\|Vx\|+\|Ex\|\le1+\eta$, so $\|M\|\le1+\eta$ by [F5]. For each endomorphism $T$ of the nonzero space $S$, Cauchy–Schwarz gives $\|Tx\|=\max_{\|y\|=1}|\langle Tx,y\rangle|$ (with $Tx=0$ immediate), hence $\|T\|=\max_{\|x\|=\|y\|=1}|\langle Tx,y\rangle|$. The adjoint identity interchanges the unit vectors, so $\|T^\dagger\|=\|T\|$; in particular $\|M^\dagger\|\le1+\eta$ and $\|E^\dagger\|=\|E\|\le\eta$. [given, L1, F1, F2, F3, F4, F5, F6, F10, algebra]

2.1 Since $VV^\dagger V=V$, $MM^\dagger M-V=(M-V)M^\dagger M+V(M^\dagger-V^\dagger)M+VV^\dagger(M-V)$. For every unit vector, apply the vector triangle inequality [F6] and [F7] to these three terms; using $\|E^\dagger\|=\|E\|\le\eta$ and $\|V\|=\|V^\dagger\|=1$ from [F4] gives $\|MM^\dagger M-V\|\le\eta((1+\eta)^2+(1+\eta)+1)$. Maximizing over unit vectors by [F5], $\|D-V\|\le\frac32\eta+\frac12\eta((1+\eta)^2+(1+\eta)+1)\le4\eta$ for $\eta\le1/100$. [given, F4, F5, F6, F7, step 1.1, algebra]

2.2 Let $L=(I-\Pi)CJ$. Since $\Pi=JJ^\dagger$ and $J^\dagger J=I$ by [F10], $CJ=JD+L$ and $J^\dagger L=J^\dagger(I-JJ^\dagger)CJ=J^\dagger CJ-(J^\dagger J)J^\dagger CJ=0$. Hence both cross terms vanish in $(CJ)^\dagger CJ=(JD+L)^\dagger(JD+L)$, and $D^\dagger D+L^\dagger L=(CJ)^\dagger CJ=I$ because $C$ and $J$ are isometries. Thus $L^\dagger L=I-D^\dagger D$ and $\|L\|^2=\|I-D^\dagger D\|$ by [F7]. [given, F2, F3, F4, F7, F10, step 1.1, algebra]

3.1 Set $\delta=\|D-V\|\le4\eta$ by step 2.1. For every unit vector $x$, $\|Dx\|\le\|Vx\|+\|(D-V)x\|\le1+\delta$, so $\|D\|\le1+\delta$. Since $V^\dagger V=I$, $I-D^\dagger D=(V-D)^\dagger D+V^\dagger(V-D)$; the vector triangle inequality [F6] and [F7] therefore give $\|(I-D^\dagger D)x\|\le\delta\|D\|+\delta\le\delta(2+\delta)$ for unit $x$. Maximizing by [F5], $\|I-D^\dagger D\|\le\delta(2+\delta)\le4\eta(2+4\eta)\le9\eta$. Thus $\|L\|\le3\sqrt{\eta}$. [given, F4, F5, F6, F7, step 2.1, step 2.2, algebra]

4.1 From $CJ-JV=J(D-V)+L$, for every unit $x$ the vector triangle inequality [F6] and the isometry of $J$ in [F10] give $\|(CJ-JV)x\|\le\|D-V\|+\|L\|\le4\eta+3\sqrt\eta$. Maximizing by [F5] and using $\eta\le1/100$ yields $\|CJ-JV\|\le10\sqrt\eta$. [F4, F5, F6, F10, step 2.1, step 3.1, algebra]

5.1 For any finite reference space $R$, choose an orthonormal basis $(e_j)$ by [F9] and write $\xi=\sum_jx_j\otimes e_j$. By [F8], $\|(CJ-JV)\otimes I_R\,\xi\|^2=\sum_j\|(CJ-JV)x_j\|^2\le(10\sqrt\eta)^2\sum_j\|x_j\|^2=(10\sqrt\eta)^2\|\xi\|^2$. Thus the same clean-input isometry bound holds with any finite reference, including entangled inputs. [F5, F8, F9, F10, step 4.1, algebra] ∎
