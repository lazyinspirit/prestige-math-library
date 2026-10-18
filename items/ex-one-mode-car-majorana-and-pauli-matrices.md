---
id: ex-one-mode-car-majorana-and-pauli-matrices
kind: example
title: One-Mode CAR and Its Two Majorana Matrices
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: car-algebras-majorana-generators-and-clifford-comparison-examples
dependency_level: 5
deps:
  - thm-finite-mode-car-clifford-majorana-isomorphism
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Example

For one mode, use the ordered orthonormal basis $e_\varnothing,e_{\{1\}}$ of $\mathcal F_1$. The annihilator and its adjoint are

$$ a=\begin{pmatrix}0&1\\0&0\end{pmatrix},\qquad a^\dagger=\begin{pmatrix}0&0\\1&0\end{pmatrix}. $$

The Majorana generators are the Pauli matrices

$$ \gamma_1=a+a^\dagger=\begin{pmatrix}0&1\\1&0\end{pmatrix},\qquad \gamma_2=i(a^\dagger-a)=\begin{pmatrix}0&-i\\i&0\end{pmatrix}. $$

## Facts & Assumptions
**Given:** The one-mode CAR algebra, the plus-$Q$ Clifford convention, and the ordered occupation basis $(e_\varnothing,e_{\{1\}})$.

[F1] The finite-mode matrix model and Majorana maps are those of [[thm-finite-mode-car-algebra-is-full-matrix-algebra]] and [[thm-finite-mode-car-clifford-majorana-isomorphism]].

## Verification

1.1 The displayed matrices act by $ae_\varnothing=0$, $ae_{\{1\}}=e_\varnothing$, $a^\dagger e_\varnothing=e_{\{1\}}$, and $a^\dagger e_{\{1\}}=0$. Thus $a^2=(a^\dagger)^2=0$, while $aa^\dagger=\operatorname{diag}(1,0)$ and $a^\dagger a=\operatorname{diag}(0,1)$, so $\{a,a^\dagger\}=I$. This verifies the one-mode CAR relations. [given, F1, algebra]

2.1 Substitution into the Majorana formulas gives the two displayed Pauli matrices. Direct multiplication gives $\gamma_1^2=\gamma_2^2=I$ and $\gamma_1\gamma_2+\gamma_2\gamma_1=0$; both matrices are self-adjoint. Hence they represent the two orthogonal plus-$Q$ Clifford generators. [given, F1, step 1.1, algebra]

3.1 The four matrices $aa^\dagger$, $a$, $a^\dagger$, and $a^\dagger a$ are respectively the matrix units $E_{00},E_{01},E_{10},E_{11}$, so the one-mode algebra is all of $M_2(\mathbb C)$, as asserted by the finite-mode theorem. [given, F1, algebra] ∎

