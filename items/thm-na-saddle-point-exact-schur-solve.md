---
id: thm-na-saddle-point-exact-schur-solve
kind: theorem
title: "Exact Schur solve for a full-row-rank symmetric saddle system"
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-na-symmetric-saddle-point-system-and-block-preconditioners
  - thm-block-lu-factorisation-via-an-invertible-leading-block
  - thm-rank-nullity
proof_strategy: direct
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Michele Benzi, Gene H. Golub, and Jörg Liesen, Numerical solution of
        saddle point problems"
      url: "https://www.ime.unicamp.br/~pulino/MT404/TextosOnline/bgl04.pdf"
      locator: "§§3.1–3.2, printed pp. 14–17: block factorizations, Schur complements,
        and the full-row-rank invertibility condition."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Under the hypotheses of
[[def-na-symmetric-saddle-point-system-and-block-preconditioners]],
$S=BA^{-1}B^T$ is positive definite and hence invertible. For every
$f\in\mathbb R^n$ and $g\in\mathbb R^m$, the unique solution of
$$ \begin{pmatrix}A&B^T\\B&0\end{pmatrix} \begin{pmatrix}u\\p\end{pmatrix} =\begin{pmatrix}f\\g\end{pmatrix} $$
is
$$ p=S^{-1}(BA^{-1}f-g),\qquad u=A^{-1}(f-B^Tp). $$
The factorization used in this solve is the published block-LU factorization
[[thm-block-lu-factorisation-via-an-invertible-leading-block]].

## Facts & Assumptions

**Given:** $A$ symmetric positive definite, $B$ full row rank, and the
finite-dimensional symmetric saddle equations with right-hand side $(f,g)$.

[F1] The saddle matrix, pressure Schur matrix $S=BA^{-1}B^T$, and the two
equations are defined in
[[def-na-symmetric-saddle-point-system-and-block-preconditioners]].

[F2] If a square block matrix has an invertible leading block, it factorizes
through the Schur complement as
$$ \begin{pmatrix}A_{11}&A_{12}\\A_{21}&A_{22}\end{pmatrix} =\begin{pmatrix}I&0\\A_{21}A_{11}^{-1}&I\end{pmatrix} \begin{pmatrix}A_{11}&A_{12}\\0&A_{22}-A_{21}A_{11}^{-1}A_{12}\end{pmatrix} $$
([[thm-block-lu-factorisation-via-an-invertible-leading-block]]).

[F3] For a linear map between finite-dimensional spaces,
$\dim V=\dim\ker T+\dim\operatorname{im}T$
([[thm-rank-nullity]]).

## Proof
1.1 Positive definiteness of $A$ makes its kernel zero: if $Ax=0$, then $x^TAx=0$, so the positivity hypothesis forces $x=0$. Since $A$ is a square matrix on a finite-dimensional space, [F3] makes its image full-dimensional; thus $A$ is invertible. For nonzero $q\in\mathbb R^m$, full row rank gives $B^Tq\ne0$. Put $y=A^{-1}B^Tq$, which is nonzero. Then $$ q^TSq=(B^Tq)^TA^{-1}(B^Tq)=(Ay)^Ty=y^TAy>0. $$ Therefore $S$ is symmetric positive definite. [given, F1, F3, algebra]

2.1 Apply [F2] to $K$ with leading block $A$, upper-right block $B^T$, lower-left block $B$, and lower-right block $0$. Its trailing Schur complement is $0-BA^{-1}B^T=-S$. Hence $$ K=\begin{pmatrix}I&0\\BA^{-1}&I\end{pmatrix} \begin{pmatrix}A&B^T\\0&-S\end{pmatrix}, $$ and both diagonal blocks of the upper factor are invertible by the hypotheses and step 1.1. [F1, F2, step 1.1, algebra]

3.1 Solve the lower-triangular factor against $(f,g)$ first. It gives the intermediate vector $(f,g-BA^{-1}f)$. The second block row of the upper solve is $-Sp=g-BA^{-1}f$, so $p=S^{-1}(BA^{-1}f-g)$. The first row gives $u=A^{-1}(f-B^Tp)$. Substitution verifies $Au+B^Tp=f$ and $Bu=BA^{-1}f-Sp=g$. Invertibility of the diagonal blocks in step 2.1 makes both triangular solves unique, so this is the unique solution. [F1, step 2.1, algebra] ∎