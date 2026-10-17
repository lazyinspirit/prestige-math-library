---
id: ex-spd-square-root-and-polar-factor
kind: example
title: "A positive diagonal Gram matrix gives a nontrivial polar factor"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - thm-non-negative-square-root-exists-and-is-unique
  - thm-polar-decomposition
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Sheldon Axler, Linear Algebra Done Right, fourth edition"
      url: "https://linear.axler.net/LADR4e.pdf"
    - title: "Nicholas J. Higham, Computing the Polar Decomposition—with Applications"
      url: "https://eprints.maths.manchester.ac.uk/694/1/high86p.pdf"
---

## Example

For
$$A=\begin{pmatrix}0&-2\\1&0\end{pmatrix},$$
the Gram matrix is positive diagonal, its positive square root is nontrivial,
and the polar isometry is a quarter-turn.

## Facts & Assumptions

**Given:** The displayed real matrix $A$.

[F1] A nonnegative matrix has a unique nonnegative square root
([[thm-non-negative-square-root-exists-and-is-unique]]).

[F2] The polar decomposition has positive factor $\sqrt{A^*A}$ and isometry
factor $S$ with $A=S\sqrt{A^*A}$ ([[thm-polar-decomposition]]).

## Verification

1.1 Direct multiplication gives $A^*A=\begin{pmatrix}1&0\\0&4\end{pmatrix}$, and $H=\begin{pmatrix}1&0\\0&2\end{pmatrix}$ is positive with $H^2=A^*A$. By [F1], $H$ is the unique nonnegative square root. [given, F1, algebra]

2.1 Put $S=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$. Then $S^*S=I$ and $SH=A$, so [F2] identifies $S$ as the polar isometry and $H$ as its positive factor. [F2, step 1.1, algebra] ∎
