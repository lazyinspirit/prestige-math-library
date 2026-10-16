---
id: thm-qc-isometric-encoding-projector
kind: theorem
title: An isometric quantum encoding gives an orthogonal code projector
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 3
deps: [def-adjoint-of-a-linear-map-between-inner-product-spaces, def-linear-isometry-and-orthogonal-or-unitary-operator, def-linear-map, def-qc-quantum-code-isometry-and-code-projector, def-real-and-complex-inner-product-space, lem-inner-product-pairing-is-nondegenerate-and-norm-is-homogeneous, lem-qc-linear-isometry-preserves-inner-products, prop-adjoint-algebra, thm-adjoint-exists-and-is-unique-in-finite-dimension, thm-dimension-of-a-linear-subspace, thm-rank-nullity, thm-self-adjoint-idempotents-are-exactly-orthogonal-projections]
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
    - title: Richard Cleve, Quantum Information Processing course notes, §§36.1 and 37.3
      url: https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf
    - title: John Preskill, Quantum Computation, Chapter 7, §§7.1 and 7.4.1
      url: https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf
---

## Statement

Let $\mathcal H_L,\mathcal H_P$ be finite-dimensional complex inner-product spaces and let $V:\mathcal H_L\to\mathcal H_P$ be a linear isometry. Then $V^*V=I_{\mathcal H_L}$. Consequently $P:=VV^*$ is self-adjoint and idempotent and is the orthogonal projection onto $\operatorname{im}V$. If $K=\dim\mathcal H_L$ and $N=\dim\mathcal H_P$, then $0\le K\le N$; when $K=1$ the code is a line, and when $K=N$ the code subspace is all of $\mathcal H_P$ and $P=I_{\mathcal H_P}$.

## Facts & Assumptions

**Given:** Finite-dimensional complex inner-product spaces $\mathcal H_L,\mathcal H_P$, with pairing linear in the first argument, and a norm-preserving linear map $V:\mathcal H_L\to\mathcal H_P$.

[F1] [[def-real-and-complex-inner-product-space]]: The complex inner product is linear in its first argument and conjugate-linear in its second.

[F2] [[lem-qc-linear-isometry-preserves-inner-products]]: A linear isometry between finite-dimensional complex inner-product spaces preserves the first-linear inner product.

[F3] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]]: The adjoint satisfies $\langle Vx,z\rangle_P=\langle x,V^*z\rangle_L$.

[F4] [[thm-adjoint-exists-and-is-unique-in-finite-dimension]]: Such an adjoint exists uniquely for finite-dimensional inner-product spaces.

[F5] [[lem-inner-product-pairing-is-nondegenerate-and-norm-is-homogeneous]]: Inner-product pairings separate vectors.

[F6] [[prop-adjoint-algebra]]: $(ST)^*=T^*S^*$ and $T^{**}=T$ for compatible finite-dimensional maps.

[F7] [[thm-self-adjoint-idempotents-are-exactly-orthogonal-projections]]: A finite-dimensional endomorphism is an orthogonal projection exactly when it is self-adjoint and idempotent; its range is the projected subspace.

[F8] [[thm-rank-nullity]]: For a finite-dimensional domain, $\dim V=\dim\ker T+\dim\operatorname{im}T$.

[F9] [[thm-dimension-of-a-linear-subspace]]: A subspace of a finite-dimensional space has dimension at most the ambient dimension and equals the ambient space when dimensions agree.

## Proof


1.1 Norm preservation and [F2] give $\langle Vx,Vy\rangle_P=\langle x,y\rangle_L$ for all $x,y$, since each of the four norms in the polarization formula is preserved. [F1, F2, given]

2.1 The adjoint exists by [F4]. By [F3] and step 1.1, $\langle x,(V^*V-I)y\rangle_L=0$ for every $x$. Conjugate symmetry from [F1] and nondegeneracy [F5] imply $(V^*V-I)y=0$ for every $y$. Thus $V^*V=I$. [F1, F3, F4, F5, step 1.1]

3.1 With $P=VV^*$, [F6] gives $P^*=VV^*=P$, and step 2.1 gives $P^2=V(V^*V)V^*=VV^*=P$. [F6, step 2.1, given]

4.1 For every $z\in\mathcal H_P$, $Pz=V(V^*z)$ belongs to $\operatorname{im}V$. Conversely, $P(Vx)=V(V^*V)x=Vx$, so every vector in $\operatorname{im}V$ lies in $\operatorname{im}P$. Therefore $\operatorname{im}P=\operatorname{im}V$, and [F7] identifies $P$ as the orthogonal projection onto the code subspace. [F7, step 2.1, step 3.1, given]

5.1 If $Vx=0$, norm preservation gives $\|x\|=0$, hence $x=0$ by positive definiteness [F1]; so $V$ is injective. [F8] yields $\dim\operatorname{im}V=K$, and [F9] gives $K\le N$. Also $0\le K$ because dimensions are natural numbers. If $K=1$, the image is a line. If $K=N$, [F9] gives $\operatorname{im}V=\mathcal H_P$, so step 4.1 gives $P=I$. [F1, F8, F9, step 4.1, given] ∎

## Remarks

The root inner product is linear in the first argument; no bra-ket convention is imported. The norm-preservation implication is proved locally in [[lem-qc-linear-isometry-preserves-inner-products]], so this argument uses no choice principle.
