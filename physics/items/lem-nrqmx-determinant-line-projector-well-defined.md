---
id: lem-nrqmx-determinant-line-projector-well-defined
kind: lemma
domain: mathematics
library: mathematics
title: The determinant-line projector is smooth and rank one
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 2
deps:
  - def-nrqmx-determinant-line-projector
  - def-exterior-algebra-of-a-vector-space
  - thm-exterior-powers-are-functorial
  - thm-the-matrix-of-an-exterior-power-is-the-signed-minor-matrix
  - thm-increasing-basis-wedges-form-a-basis
dependency_roles:
  def-nrqmx-determinant-line-projector: mathematical-premise
  def-exterior-algebra-of-a-vector-space: mathematical-premise
  thm-exterior-powers-are-functorial: mathematical-premise
  thm-the-matrix-of-an-exterior-power-is-the-signed-minor-matrix: mathematical-premise
  thm-increasing-basis-wedges-form-a-basis: mathematical-premise
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Keith Conrad, Exterior Powers
      url: https://kconrad.math.uconn.edu/blurbs/linmultialg/extmod.pdf
      locator: Sections 3, 4, and 6, especially Theorem 6.1.
---

## Statement

For the projector of [[def-nrqmx-determinant-line-projector]], $Q(x)=\bigwedge^mP(x)$ is a $C^2$ orthogonal projector of rank one. Its range is exactly $\det E_P(x)=\bigwedge^m\operatorname{im}P(x)$, so these ranges form the determinant line bundle.

## Statement references

[[def-nrqmx-determinant-line-projector]]

[[thm-exterior-powers-are-functorial]]

[[thm-increasing-basis-wedges-form-a-basis]]

## Facts & Assumptions

**Given:** A $C^2$ orthogonal projector $P(x)$ of constant rank $m$ on $\mathbb C^r$, with $1\le m\le r$.

[F1] [[def-nrqmx-determinant-line-projector]] defines $Q=\bigwedge^mP$ and the orthonormal wedge inner product.

[F2] [[thm-exterior-powers-are-functorial]] gives $\bigwedge^m(I)=I$ and $\bigwedge^m(P^2)=(\bigwedge^mP)^2$.

[F3] [[thm-the-matrix-of-an-exterior-power-is-the-signed-minor-matrix]] gives the $(I,J)$ matrix entry of $\bigwedge^m T$ as $\det T_{I,J}$ in the ordered wedge basis.

[F4] [[thm-increasing-basis-wedges-form-a-basis]] gives the standard wedge basis of $\bigwedge^m\mathbb C^r$.

## Proof

**Given:** [F1]–[F4].

1.1 In the standard orthonormal wedge basis from [F4], the matrix entry of $\bigwedge^m T$ in row $I$, column $J$ is $\det T_{I,J}$ by [F3]. Consequently $[(\bigwedge^mT)^*]_{I,J}=\overline{\det T_{J,I}}=\det (T^*)_{I,J}$, so $(\bigwedge^mT)^*=\bigwedge^m(T^*)$. Applying this to $P=P^*$ shows $Q=Q^*$. [F1, F3, F4, algebra]

2.1 Functoriality [F2] gives $Q^2=\bigwedge^m(P^2)=\bigwedge^mP=Q$. Hence $Q$ is a Hermitian idempotent by step 1.1; for $x=Qy$ and $Qz=0$, $\langle x,z\rangle=\langle Qy,z\rangle=\langle y,Qz\rangle=0$, so its range and kernel are orthogonal and it is the orthogonal projection onto its range. [F1, F2, step 1.1, algebra]

3.1 Every decomposable wedge in the image of $Q$ is a wedge of $m$ vectors in $\operatorname{im}P$, so the full image lies in $\bigwedge^m\operatorname{im}P$. Conversely, for a basis $v_1,\ldots,v_m$ of the $m$-dimensional range of $P$, $Q(v_1\wedge\cdots\wedge v_m)=v_1\wedge\cdots\wedge v_m\ne0$. The increasing-wedge basis theorem [F4], applied to this basis of the range, says $\bigwedge^m\operatorname{im}P$ is one-dimensional; thus it equals $\operatorname{im}Q$ and $Q$ has rank one. [F2, F4, step 2.1]

4.1 Each matrix entry of $Q(x)$ is a polynomial minor in the entries of $P(x)$ by [F3], hence is $C^2$. Together with step 2.1 this proves that $Q$ is a $C^2$ rank-one orthogonal projector with the stated range, and its ranges form the determinant line subbundle. [F3, step 2.1, step 3.1] ∎
