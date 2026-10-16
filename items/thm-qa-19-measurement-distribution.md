---
id: thm-qa-19-measurement-distribution
kind: theorem
title: The measurement law for a finite continuous-time walk
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 3
deps:
  - def-qa-19-continuous-time-walk
  - thm-qa-19-matrix-exponential-unitary-properties
  - def-qc-pure-state-and-ray
  - thm-qc-ray-projector-well-defined-and-bijective
  - def-qc-projective-measurement
  - thm-qc-projective-measurement-outcome-law
  - def-qc-dirac-notation-conversion
  - def-real-and-complex-inner-product-space
  - def-trace-of-an-endomorphism
  - thm-bessel-inequality-and-finite-parseval-identity
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 17 §17.1
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Chapter 17 §17.1, PDF pp.81–82 (printed p.74 on PDF p.82): the finite walk state is a vector in an orthonormal vertex basis."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 9 §9.1"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Chapter 9 §9.1, printed pp.71–72/PDF pp.83–84: unitary evolution of a finite Hamiltonian state."
---

## Statement

Let $V$ be a nonzero finite-dimensional complex inner-product space, let
$(e_y)_{y\in Y}$ be a finite orthonormal basis, and let $\phi\in V$ be a unit
vector. Measuring the pure state $[\phi]$ by the projective measurement onto
the basis lines outputs $y\in Y$ with probability
$$p_\phi(y)=|\langle \phi,e_y\rangle|^2,\qquad \sum_{y\in Y}p_\phi(y)=1.$$
In particular, for self-adjoint $H:V\to V$, real $t$, and unit $\psi$, the
walk output $\phi=U_H(t)\psi$ is unit and
$p_t(y)=|\langle U_H(t)\psi,e_y\rangle|^2$. For an initial vertex $e_x$, the
probability of observing vertex $y$ is $|\langle U_H(t)e_x,e_y\rangle|^2$.

## Facts & Assumptions
**Given:** The nonzero space, orthonormal basis, and unit vector $\phi$ in the
Statement. For its walk specialization, also take self-adjoint $H$, real $t$,
and a unit input $\psi$ with $\phi=U_H(t)\psi$.

[F1] [[thm-qa-19-matrix-exponential-unitary-properties]]: $U_H(t)$ is unitary,
so it preserves the norm and $U_H(t)\psi$ is unit.

[F2] [[def-qc-pure-state-and-ray]]: a pure state is a ray represented by any
unit vector.

[F3] [[thm-qc-ray-projector-well-defined-and-bijective]]: for a unit
representative $u$, $P_u=|u\rangle\langle u|$ is a nonnegative rank-one
projection with trace one.

[F4] [[def-qc-projective-measurement]]: orthogonal projections summing to the
identity form a projective measurement, and its weight on $\rho$ is
$\operatorname{tr}(\rho P_y)$.

[F5] [[thm-qc-projective-measurement-outcome-law]]: for a density operator and
a finite projective measurement, these weights lie in $[0,1]$ and sum to one.

[F6] [[def-qc-dirac-notation-conversion]]: $|x\rangle\langle y|$ acts by
$z\mapsto\langle z,y\rangle_{\rm root}x$.

[F7] [[def-trace-of-an-endomorphism]]: trace is the sum of diagonal entries in
any ordered basis.

[F8] [[thm-bessel-inequality-and-finite-parseval-identity]]: if $(e_y)$ is an
orthonormal basis, then $v=\sum_y\langle v,e_y\rangle e_y$ and
$\sum_y|\langle v,e_y\rangle|^2=\|v\|^2$.

[F9] [[def-real-and-complex-inner-product-space]]: the root inner product is
linear in its first argument and conjugate-symmetric.

## Proof

**Proof technique:** direct.

1.1 The vector $\phi$ is unit by hypothesis. In the walk specialization, [F1] also shows $U_H(t)\psi$ is unit. [given, F1]

1.2 For each $y$, define $P_yz:=\langle z,e_y\rangle e_y$. Orthonormality gives $P_y^2=P_y$ and $P_yP_{y'}=0$ for $y\ne y'$. By [F6] and [F9], $\langle P_yz,w\rangle=\langle z,e_y\rangle\langle e_y,w\rangle =\langle z,P_yw\rangle$, so $P_y^*=P_y$. The basis expansion in [F8] gives $\sum_yP_y=I_V$. Hence $(P_y)_{y\in Y}$ is the basis projective measurement in [F4]. [given, F4, F6, F8, F9, algebra]

1.3 The ray $[\phi]$ has density operator $P_\phi$ by [F2]–[F3]. By [F4]–[F5] its probability at $y$ is $\operatorname{tr}(P_\phi P_y)\in[0,1]$. In the basis $(e_z)$, $P_y e_z=0$ for $z\ne y$ and $P_y e_y=e_y$; [F6] gives $P_\phi e_y=\langle e_y,\phi\rangle\phi$. Therefore [F7] yields $\operatorname{tr}(P_\phi P_y)=\langle e_y,\phi\rangle \langle\phi,e_y\rangle=|\langle\phi,e_y\rangle|^2$. [given, F2, F3, F4, F5, F6, F7, algebra]

2.1 Summing the formula in step 1.3 and applying [F8] gives $\sum_y p_\phi(y)=\|\phi\|^2=1$. Substituting $\phi=U_H(t)\psi$ in the walk specialization gives the stated walk law and vertex formula. [step 1.1, step 1.3, F8, algebra] ∎
