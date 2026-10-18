---
id: ex-two-mode-car-occupation-matrix-units
kind: example
title: Two-Mode CAR Signs and a Matrix Unit
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: car-algebras-majorana-generators-and-clifford-comparison-examples
dependency_level: 5
deps:
  - lem-finite-mode-car-occupation-matrix-units
  - thm-finite-mode-car-algebra-is-full-matrix-algebra
justified_by: []
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
verification:
  precheck: pass
---

## Example

Order the two-mode occupation basis as $e_\varnothing,e_{\{1\}},e_{\{2\}},e_{\{1,2\}}$. The operators defined by the finite occupation formulas are

$$ a_1=\begin{pmatrix}0&1&0&0\\0&0&0&0\\0&0&0&1\\0&0&0&0\end{pmatrix},\qquad a_1^\dagger=\begin{pmatrix}0&0&0&0\\1&0&0&0\\0&0&0&0\\0&0&1&0\end{pmatrix}, $$

$$ a_2=\begin{pmatrix}0&0&1&0\\0&0&0&-1\\0&0&0&0\\0&0&0&0\end{pmatrix},\qquad a_2^\dagger=\begin{pmatrix}0&0&0&0\\0&0&0&0\\1&0&0&0\\0&-1&0&0\end{pmatrix}. $$

The minus signs occur when mode $2$ is toggled while mode $1$ is occupied.

## Facts & Assumptions
**Given:** The two-mode occupation basis and the operators in [[lem-finite-mode-car-occupation-matrix-units]].

[F1] For two modes, $N_j=a_j^\dagger a_j$ is the projection onto basis states containing $j$, and $P_\varnothing=(I-N_1)(I-N_2)$ projects onto $e_\varnothing$ ([[lem-finite-mode-car-occupation-matrix-units]]).

[F2] The universal two-mode CAR algebra is $M_4(\mathbb C)$ ([[thm-finite-mode-car-algebra-is-full-matrix-algebra]]).

## Verification

1.1 Reading columns of the displayed matrices gives $a_1e_{\{1,2\}}=e_{\{2\}}$ and $a_2e_{\{1,2\}}=-e_{\{1\}}$. Applying the operators in the reverse order gives $a_2a_1e_{\{1,2\}}=e_\varnothing$ and $a_1a_2e_{\{1,2\}}=-e_\varnothing$, while both products vanish on the other three basis vectors. Hence $\{a_1,a_2\}=0$. The adjoint matrices give the corresponding creation relations, and their same-mode products satisfy $a_je_S=0$ when $j\notin S$, $a_j^\dagger e_{S}=0$ when $j\in S$, and $\{a_j,a_j^\dagger\}=I$ on each of the four basis vectors. [given, F1, algebra]

2.1 For the mixed distinct-mode relation, on $e_{\{1\}}$ one has $a_1a_2^\dagger e_{\{1\}}=-e_{\{2\}}$ and $a_2^\dagger a_1e_{\{1\}}=e_{\{2\}}$; on $e_\varnothing,e_{\{2\}},e_{\{1,2\}}$ both terms sum to zero by the displayed matrices. Thus $\{a_1,a_2^\dagger\}=0$. This confirms the sign convention for modes in the order $1<2$. [given, step 1.1, algebra]

3.1 By [F1], $P_\varnothing=\operatorname{diag}(1,0,0,0)$. The operator $a_1^\dagger P_\varnothing a_2$ sends $e_{\{2\}}$ to $e_{\{1\}}$ and kills the other three basis vectors, so it is the matrix unit $E_{\{1\},\{2\}}$. Together with the general formula in [F1], this is one explicit off-diagonal matrix unit inside the algebra $M_4(\mathbb C)$ of [F2]. [given, F1, F2, step 2.1, algebra] ∎

