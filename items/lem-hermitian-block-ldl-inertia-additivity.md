---
id: lem-hermitian-block-ldl-inertia-additivity
kind: lemma
title: Block LDL congruence adds the Hermitian pivot inertias
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps: [lem-complex-hermitian-inertia-congruence, thm-complex-spectral-theorem-for-normal-endomorphisms]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Nicholas J. Higham, Numerical Linear Algebra and Matrix Analysis, MIMS EPrint 2015.103, §5.6"
      url: "https://eprints.maths.manchester.ac.uk/2411/01/covered/MIMS_ep2015_103.pdf"
---

## Statement

Let $k\ge1$, $m\ge0$, and let $H=\begin{pmatrix}D&B^*\\B&C\end{pmatrix}\in\mathbb C^{(k+m)\times(k+m)}$ be Hermitian, where $D=D^*\in\mathbb C^{k\times k}$ is nonsingular, $B\in\mathbb C^{m\times k}$, and $C=C^*\in\mathbb C^{m\times m}$. Define the Schur complement $S=C-BD^{-1}B^*$. Inertia triples are added coordinatewise, and the $0\times0$ matrix has inertia $(0,0,0)$. Then
$$
\operatorname{inertia}(H)=\operatorname{inertia}(D)+\operatorname{inertia}(S),
$$
where the triples are added coordinatewise.

## Facts & Assumptions

**Given:** $H,D,B,C,S$ as in the statement.

[F1] Nonsingular complex congruence preserves Hermitian inertia ([[lem-complex-hermitian-inertia-congruence]]).

[F2] A Hermitian matrix has an orthonormal eigenbasis with real eigenvalues ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

## Proof

1.1 Set $L=\begin{pmatrix}I&0\\BD^{-1}&I\end{pmatrix}$. It is invertible, with inverse $\begin{pmatrix}I&0\\-BD^{-1}&I\end{pmatrix}$. Direct block multiplication gives $H=L\begin{pmatrix}D&0\\0&S\end{pmatrix}L^*$, so $H$ is congruent to $\operatorname{diag}(D,S)$. [given, algebra]

2.1 Since $D=D^*$ and $D$ is invertible, $(D^{-1})^*=(D^*)^{-1}=D^{-1}$. Therefore $(BD^{-1}B^*)^*=BD^{-1}B^*$, and $C=C^*$ gives $S^*=S$. By [F1], $\operatorname{inertia}(H)=\operatorname{inertia}(\operatorname{diag}(D,S))$. If $m=0$, the trailing block is empty and its inertia is $(0,0,0)$ by the stated convention. If $m>0$, [F2] diagonalizes the Hermitian matrices $D$ and $S$ separately; concatenating their orthonormal eigenbases diagonalizes the block diagonal matrix, so its positive, negative and zero counts are the sums of the corresponding counts for $D$ and $S$. [given, F1, F2, step 1.1, algebra] ∎

