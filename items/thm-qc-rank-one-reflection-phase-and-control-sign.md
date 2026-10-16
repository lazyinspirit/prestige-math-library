---
id: thm-qc-rank-one-reflection-phase-and-control-sign
kind: theorem
title: Rank-One Reflection Is Ray-Invariant and Its Signs Differ Under Control
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-reflection
  - def-qc-pure-state-and-ray
  - def-qc-controlled-unitary-access
  - def-qc-inverse-unitary-access
  - thm-qc-reflection-unitary-involution
  - def-qc-dirac-notation-conversion
  - thm-self-adjoint-idempotents-are-exactly-orthogonal-projections
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - thm-adjoint-exists-and-is-unique-in-finite-dimension
  - def-real-and-complex-inner-product-space
  - def-inner-product-norm
  - thm-finite-dimensional-isometry-characterisations
  - thm-qc-computational-basis-orthonormal
  - def-qc-tensor-register-and-permutation
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
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
    - title: "John Preskill, Quantum Computation, Chapter 6: Quantum Algorithms"
      url: https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf
dependency_level: 10
---

## Statement

Let $H$ be a finite-dimensional complex-inner-product space and let $\psi\in H$ be a unit vector. Then $\Pi_\psi=|\psi\rangle\langle\psi|$ is a rank-one orthogonal projection, and $\Pi_{\lambda\psi}=\Pi_\psi$ for every $|\lambda|=1$. Therefore $R_\psi=2\Pi_\psi-I$ and $S_\psi=I-2\Pi_\psi$ are well-defined on the ray. Standalone they differ by the global scalar $-1$; when controlled in control-first order,

$$C(S_\psi)=(Z_C)C(R_\psi),\qquad Z_C=\operatorname{diag}(I,-I).$$

Let $C=Q_2$ be the control qubit with ordered basis $|0\rangle,|1\rangle$, and set $|\pm\rangle=(|0\rangle\pm|1\rangle)/\sqrt2$. For input $|+\rangle\otimes\psi$, $C(S_\psi)$ produces $| -\rangle\otimes\psi$ and $C(R_\psi)$ produces $|+\rangle\otimes\psi$, so the control sign is relative rather than a target-wide global phase. If $a\in H$ is a specified unit input denoted $|0\rangle$ in an access model, $U:H\to H$ is unitary, and $\psi=Ua$, define $R_a=2|a\rangle\langle a|-I$ and $S_a=I-2|a\rangle\langle a|$ as in [[def-qc-reflection]]. Then $UR_aU^\dagger=R_\psi$ and $US_aU^\dagger=S_\psi$. This conjugation uses the separately supplied inverse call $U^\dagger$; the equality itself grants no such access.

## Facts & Assumptions

**Given:** A unit vector $\psi$ in a finite-dimensional complex-inner-product space, with the root pairing linear in its first argument.

[L1] [[def-qc-dirac-notation-conversion]] defines $|\psi\rangle\langle\psi|x=\langle x,\psi\rangle_{\rm root}\psi$. Its current draft definition body was read.

[L2] [[def-qc-pure-state-and-ray]] defines rays under nonzero scalar multiplication. Its current draft definition body was read; this theorem proves the projector phase identity directly, without relying on that item's separate projector-well-definedness result.

[L3] [[def-qc-reflection]] fixes $R_\Pi=2\Pi-I$, $S_\Pi=I-2\Pi$, and the explicit direct, controlled, and $UR_0U^\dagger$ access conventions. Its carrier is present in this batch.

[L4] [[thm-qc-reflection-unitary-involution]] proves the projector identities and controlled-sign relation. Its carrier is present in this batch; QC07's page and items are now present as draft manifest entries, but not independently accepted.

[L5] [[def-qc-inverse-unitary-access]] makes availability and charge of the inverse call a separate access-model declaration. Its current draft definition and proof were read.

[L6] [[thm-qc-computational-basis-orthonormal]] proves the control basis $|0\rangle,|1\rangle$ is orthonormal.

[L7] [[def-qc-tensor-register-and-permutation]] defines the product pairing after ordered orthonormal bases are specified for the factors and proves the pairing is independent of those choices.

[F1] [[def-real-and-complex-inner-product-space]]: $\langle\cdot,\cdot\rangle$ is linear in the first argument and conjugate-linear in the second.

[F2] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]]: $T^*$ is characterized by $\langle Tv,w\rangle=\langle v,T^*w\rangle$.

[F3] [[thm-adjoint-exists-and-is-unique-in-finite-dimension]]: every linear map between finite-dimensional inner-product spaces has a unique adjoint.

[F4] [[thm-self-adjoint-idempotents-are-exactly-orthogonal-projections]]: a self-adjoint idempotent is the orthogonal projection onto its range.

[F5] [[def-inner-product-norm]]: $\|v\|=\sqrt{\langle v,v\rangle}$.

[F6] [[thm-finite-dimensional-isometry-characterisations]]: a finite-dimensional isometry is unitary and its adjoint is its inverse.

[F7] [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]: every finite-dimensional inner-product space has an orthonormal basis; this supplier occurs in the dependency closure of [F6].

## Proof

1.1 By [L1], $\Pi_\psi x=\langle x,\psi\rangle_{\rm root}\psi$. Then $\Pi_\psi^2x=\langle x,\psi\rangle\langle\psi,\psi\rangle\psi=\Pi_\psi x$. Also $\langle\Pi_\psi x,y\rangle=\langle x,\psi\rangle\langle\psi,y\rangle=\langle x,\Pi_\psi y\rangle$ by [F1] and [F2]; uniqueness [F3] gives $\Pi_\psi^*=\Pi_\psi$. Its image is contained in $\mathbb C\psi$ and $\Pi_\psi\psi=\psi$, hence its range is exactly one-dimensional. [given, L1, F1, F2, F3, algebra]

2.1 The self-adjoint idempotent result [F4] makes $\Pi_\psi$ an orthogonal projection. For $|\lambda|=1$, [L1] and [F1] give $\Pi_{\lambda\psi}x=\langle x,\lambda\psi\rangle\lambda\psi=\overline\lambda\lambda\langle x,\psi\rangle\psi=\Pi_\psi x$ for every $x$. [step 1.1, L1, F1, F4, algebra]

3.1 If $v$ is any other unit representative of the ray of $\psi$, [L2] gives $v=c\psi$ for some nonzero scalar $c$. By [F1] and [F5], $1=\|v\|^2=\langle c\psi,c\psi\rangle=|c|^2\langle\psi,\psi\rangle=|c|^2$, so $|c|=1$. Step 2.1 then gives $\Pi_v=\Pi_\psi$, and both reflection signs depend only on the ray. [L2, F1, F5, step 2.1, algebra]

4.1 Applying [L4] to $\Pi_\psi$ gives both standalone reflections as unitary involutions and $C(S_\psi)=(Z_C)C(R_\psi)$. Since $S_\psi=-R_\psi$, their standalone outputs differ only by the scalar $-1$ and represent the same ray. [L3, L4, step 3.1, algebra]

5.1 Choose an ordered orthonormal basis of $H$ using [F7]. Together with the control basis from [L6], it supplies the factor bases required by [L7], whose proof shows the pairing is independent of this choice. Because $\psi\in\operatorname{ran}\Pi_\psi$, [L4] gives $R_\psi\psi=\psi$ and $S_\psi\psi=-\psi$. The controlled input $|+\rangle\otimes\psi$ therefore becomes $|+\rangle\otimes\psi$ under $C(R_\psi)$ and $| -\rangle\otimes\psi$ under $C(S_\psi)$. Since $|\pm\rangle=(|0\rangle\pm|1\rangle)/\sqrt2$, [L6] gives $\langle+,-\rangle=\frac12(\langle0,0\rangle-\langle0,1\rangle+\langle1,0\rangle-\langle1,1\rangle)=0$ and $\langle+,+\rangle=\langle-,-\rangle=1$. By [L7], the two joint outputs are unit and orthogonal. Orthogonal nonzero vectors are not nonzero scalar multiples, so the ray definition [L2] makes the output rays distinct and the control sign relative. [given, L2, L4, L6, L7, F7, step 1.1, step 4.1, choose, algebra]

6.1 Let $U$ be unitary and let $\psi=Ua$ for the specified unit input $a\in H$. For any $z\in H$, [L1] gives $U|a\rangle\langle a|U^\dagger z=U\bigl(\langle U^\dagger z,a\rangle_{\rm root}a\bigr)=\langle U^\dagger z,a\rangle_{\rm root}\psi$. The adjoint identity [F2] with $v=a,w=z$, followed by conjugate symmetry [F1], gives $\langle U^\dagger z,a\rangle_{\rm root}=\langle z,Ua\rangle_{\rm root}=\langle z,\psi\rangle_{\rm root}$. Thus $U|a\rangle\langle a|U^\dagger=\Pi_\psi$ as operators. By [F6], $UU^\dagger=U^\dagger U=I$, so conjugating $R_a=2|a\rangle\langle a|-I$ and $S_a=I-2|a\rangle\langle a|$ gives $R_\psi$ and $S_\psi$, respectively. The algebraic equality does not grant the calls: [L5] requires inverse availability and its cost to be stated separately. [given, L1, L3, L5, F1, F2, F6, algebra] ∎
