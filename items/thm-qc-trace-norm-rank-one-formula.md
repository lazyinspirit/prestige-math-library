---
id: thm-qc-trace-norm-rank-one-formula
kind: theorem
title: Trace Norm Rank One Formula
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 1
deps:
  - def-qc-trace-norm
  - def-singular-values-of-an-endomorphism
  - thm-non-negative-operator-characterisations
  - thm-non-negative-square-root-exists-and-is-unique
  - def-qc-dirac-notation-conversion
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - thm-adjoint-exists-and-is-unique-in-finite-dimension
  - def-real-and-complex-inner-product-space
  - def-linear-map
justified_by: []
proof_strategy: direct
axiom_use: None; the proof uses a finite rank-one calculation and finite spectral theory.
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
    - title: John Watrous, The Theory of Quantum Information (2018 author-hosted draft), Chapter 1, §§1.1.1–1.1.3
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6 (2026-08-27), Appendices A.5 and A.10"
      url: https://arxiv.org/pdf/1907.09415v6
---

## Statement

Let $H,K$ be finite-dimensional complex inner-product spaces, $x\in K$,
$y\in H$, and $|x\rangle\langle y|:H\to K$ the rank-one linear map
([[def-linear-map]]) from [[def-qc-dirac-notation-conversion]]. Then

$$\big\||x\rangle\langle y|\big\|_1=\|x\|\,\|y\|.$$

## Facts & Assumptions
**Given:** Finite-dimensional complex inner-product spaces $H,K$ and vectors
$x\in K$, $y\in H$.

[F1] The rank-one map acts by
$Az=\langle z,y\rangle_{H,\mathrm{root}}x$
([[def-qc-dirac-notation-conversion]]).

[F2] The root inner product is linear in the first argument, conjugate-linear
in the second, and $\|v\|^2=\langle v,v\rangle$ with $\|v\|\ge0$
([[def-real-and-complex-inner-product-space]]).

[F3] The adjoint is characterized by
$\langle Tv,w\rangle=\langle v,T^*w\rangle$, and finite-dimensional adjoints
exist uniquely ([[def-adjoint-of-a-linear-map-between-inner-product-spaces]],
[[thm-adjoint-exists-and-is-unique-in-finite-dimension]]).

[F4] Singular values are the eigenvalues, with multiplicity, of
$|A|=\sqrt{A^*A}$ ([[def-singular-values-of-an-endomorphism]]).

[F5] A self-adjoint operator with nonnegative eigenvalues is non-negative;
every non-negative operator has a unique non-negative square root
([[thm-non-negative-operator-characterisations]],
[[thm-non-negative-square-root-exists-and-is-unique]]).

[F6] The trace norm sums all domain singular values
([[def-qc-trace-norm]]).

## Proof

1.1 If $x=0$ or $y=0$, [F1] makes $A=|x\rangle\langle y|$ the zero map. Then [F6] gives $\|A\|_1=0$, while [F2] gives $\|x\|\|y\|=0$. [given, F1, F2, F6]

1.2 Suppose $x,y\ne0$. For $z\in H$ and $w\in K$, [F1]–[F2] give $$\langle Az,w\rangle_K=\langle z,y\rangle_H\langle x,w\rangle_K =\langle z,\langle w,x\rangle_K y\rangle_H.$$ Thus the adjoint identity [F3] gives $A^*w=\langle w,x\rangle_Ky$, and therefore $A^*Az=\|x\|^2\langle z,y\rangle_H y$. [F1, F2, F3, algebra]

2.1 Let $e=y/\|y\|$ and put $\lambda=\|x\|^2\|y\|^2$. Step 1.2 gives $A^*Ae=\lambda e$ and $A^*Az=0$ whenever $z\perp e$. Every $z\in H$ has the decomposition $z=\langle z,e\rangle e+(z-\langle z,e\rangle e)$, whose second term is orthogonal to $e$; the two summands intersect only at $0$. Therefore $H=\operatorname{span}\{e\}\oplus e^\perp$, and $A^*A$ acts by $\lambda$ on the first summand and by $0$ on the second. [F2, step 1.2, algebra]

3.1 Define $R$ on the direct sum $H=\operatorname{span}\{e\}\oplus e^\perp$ by $Re=\|x\|\|y\|e$ and $Rz=0$ for $z\perp e$, extending linearly. For $z,w\in H$, put $c=\langle z,e\rangle$ and $d=\langle w,e\rangle$. Then $\langle Rz,w\rangle=\|x\|\|y\|c\overline d=\langle z,Rw\rangle$, so $R$ is self-adjoint; its eigenvalues are $\|x\|\|y\|$ on $\operatorname{span}\{e\}$ and $0$ on $e^\perp$. These eigenvalues are nonnegative, so [F5] makes $R$ non-negative. It satisfies $R^2=A^*A$ by step 2.1. Uniqueness in [F5] gives $R=|A|=\sqrt{A^*A}$. Its eigenvalues are $\|x\|\|y\|$ once and $0$ on $e^\perp$, so [F4] and [F6] give $\|A\|_1=\|x\|\|y\|$. Together with step 1.1 this proves the formula, including zero vectors and zero-dimensional spaces. [F2, F4, F5, F6, step 1.1, step 2.1, algebra] ∎
