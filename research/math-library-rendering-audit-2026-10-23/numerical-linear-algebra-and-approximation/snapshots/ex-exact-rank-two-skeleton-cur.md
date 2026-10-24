---
id: ex-exact-rank-two-skeleton-cur
kind: example
title: "An exact rank-two CUR reconstruction from a nonsingular cross"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps:
  - def-cur-reconstruction-cores
  - def-moore-penrose-pseudoinverse
  - thm-moore-penrose-pseudoinverse-exists-and-is-unique
  - thm-skeleton-cur-exactness
dependency_level: 2
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
---

## Example

Take
$A=\begin{bmatrix}1&0&1\\0&1&1\\1&1&2\end{bmatrix}$,
and select $I=J=(1,2)$. The resulting skeleton CUR factors reconstruct $A$ exactly.

## Facts & Assumptions

**Given:** The displayed matrix $A$ and ordered row and column selections $I=J=(1,2)$.

[A1] The matrix and index lists are exactly those stated in the Example.

[F1] [[def-cur-reconstruction-cores]]: $C=A(:,J)$, $R=A(I,:)$, $W=A(I,J)$, and the skeleton reconstruction is $CW^\dagger R$.

[F2] [[thm-skeleton-cur-exactness]]: if $\operatorname{rank}(A)=\operatorname{rank}(W)=k$, then $CW^\dagger R=A$.

[F3] [[def-moore-penrose-pseudoinverse]]: a Moore-Penrose inverse satisfies the four Penrose equations.

[F4] [[thm-moore-penrose-pseudoinverse-exists-and-is-unique]]: every finite matrix has a unique Moore-Penrose inverse.



**Given:** $A$ and $I,J$ from [A1].

## Verification

1.1 Direct extraction gives $C=\begin{bmatrix}1&0\\0&1\\1&1\end{bmatrix}$, $R=\begin{bmatrix}1&0&1\\0&1&1\end{bmatrix}$, and $W=I_2$. Since $I_2$ satisfies the four Penrose equations [F3], uniqueness [F4] gives $W^\dagger=I_2$; [F1] therefore gives the reconstruction $CR$. [given, A1, F1, F3, F4, algebra]

2.1 Multiplication yields $CR=\begin{bmatrix}1&0&1\\0&1&1\\1&1&2\end{bmatrix}=A$. The identity $I_2$ satisfies the Penrose equations [F3], hence equals $W^\dagger$ by uniqueness [F4]. The third row of $A$ is the sum of the first two, and the first two are independent, so $\operatorname{rank}(A)=2=\operatorname{rank}(W)$. Hence [F2] also applies and confirms the exact skeleton CUR identity. [A1, F2, F3, F4, step 1.1, algebra] ∎
