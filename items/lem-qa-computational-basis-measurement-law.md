---
id: lem-qa-computational-basis-measurement-law
kind: lemma
title: "Computational-basis measurement weights are squared amplitudes"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 3
deps:
  - def-qc-dirac-notation-conversion
  - thm-qc-computational-basis-orthonormal
  - def-qc-projective-measurement
  - def-qc-povm-and-outcome-law
  - def-qc-density-operator
  - def-trace-of-an-endomorphism
  - thm-qc-unit-vector-projector-is-density
justified_by: []
proof_strategy: direct
axiom_use: "No Choice is used; the computation is a finite diagonal trace in the specified orthonormal basis."
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
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes (arXiv:1907.09415v6, 2026)"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "Chapter 3 §§3.1–3.3, PDF pp.35–39: the measurement probabilities in Simon's one-sample procedure."
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms (updated November 2020)"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
      locator: "§6.1, PDF pp.11–13: computational-basis measurements and the Born weights in Simon's algorithm."
---
## Statement

Let $(|y\rangle)_{y\in\mathcal Y}$ be a finite ordered orthonormal computational basis, let $\psi=\sum_{y\in\mathcal Y}a_y|y\rangle$ be a unit vector, and put $\rho=|\psi\rangle\langle\psi|$. For the computational-basis projective measurement with $P_y=|y\rangle\langle y|$, the associated POVM weight is
$$
p(y)=\operatorname{tr}(\rho P_y)=|a_y|^2.
$$
In particular these weights are nonnegative and sum to one.

## Facts & Assumptions

**Given:** A finite ordered orthonormal computational basis $(|y\rangle)_{y\in\mathcal Y}$ and a unit vector $\psi=\sum_y a_y|y\rangle$.

[F1] [[def-qc-dirac-notation-conversion]]: $|u\rangle\langle v|$ sends $z$ to $\langle z,v\rangle_{\rm root}u$, and the root inner product is linear in its first argument.

[F2] [[thm-qc-computational-basis-orthonormal]]: computational register bases are orthonormal.

[F3] [[thm-qc-unit-vector-projector-is-density]] and [[def-qc-density-operator]]: the outer product of a unit vector is a nonnegative trace-one density operator.

[F4] [[def-qc-projective-measurement]]: a finite projective measurement has outcome weights $\operatorname{tr}(\rho P_y)$ for its projections $P_y$.

[F5] [[def-qc-povm-and-outcome-law]]: a finite POVM assigns the outcome weight $\operatorname{tr}(\rho E_y)$ to effect $E_y$.

[F6] [[def-trace-of-an-endomorphism]]: trace is the sum of diagonal matrix entries in any finite-dimensional basis.

## Proof

1.1 By [F1] and [F2], $P_y|z\rangle=\delta_{y,z}|y\rangle$; hence the $P_y$ are pairwise orthogonal self-adjoint idempotents and sum to the identity, as can be checked on every basis vector. For $z=\sum_w b_w|w\rangle$, $\langle P_yz,z\rangle_{\rm root}=|b_y|^2\ge0$, so these projections are POVM effects by [F4]–[F5]. Also $\langle y,\psi\rangle_{\rm root}=\overline{a_y}$, so $\rho P_y|z\rangle=0$ for $z\ne y$ and $\rho P_y|y\rangle=\overline{a_y}\psi$. The coefficient of $|y\rangle$ in this last vector is $|a_y|^2$. Thus the only nonzero diagonal entry of $\rho P_y$ in this basis is $|a_y|^2$, and [F6] gives $\operatorname{tr}(\rho P_y)=|a_y|^2$. [given, F1, F2, F4, F5, F6, algebra]

2.1 The vector projector $\rho$ is a density operator by [F3]. The computational-basis projective measurement and its associated POVM law [F4]–[F5] therefore assign weight $\operatorname{tr}(\rho P_y)=|a_y|^2$ to outcome $y$. Since the basis is orthonormal and $\|\psi\|=1$, $\sum_y|a_y|^2=1$; each term is nonnegative. Hence the weights form a probability distribution. [given, F2, F3, F4, F5, step 1.1, algebra] ∎
