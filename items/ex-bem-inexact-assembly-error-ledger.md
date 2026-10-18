---
id: ex-bem-inexact-assembly-error-ledger
kind: example
title: A two-by-two inexact assembly ledger
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 10
deps: [thm-bem-matrix-perturbation-transfer]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Francisco-Javier Sayas, First Steps in the Boundary Element Method (2015 lecture notes)"
      url: https://team-pancho.github.io/teaching/math838/BEM.pdf
      locator: "Chapter 1 §1.3, PDF pp. 6–8: finite-dimensional energy Galerkin systems."
    - title: "Martin Costabel, Boundary Integral Operators on Lipschitz Domains: Elementary Results (1988)"
      url: https://costabel.perso.math.cnrs.fr/publis/Co88_Lip.pdf
      locator: "§4, printed pp. 620–622: coercivity and Galerkin stability."
---

## Example

Use Euclidean norm on $X=\mathbb R^2$ and exact matrix/load
$$A=\begin{pmatrix}2&1\\1&2\end{pmatrix},\qquad f=\binom10.$$
Approximate it by
$$\widetilde A=A+E,\qquad E=\begin{pmatrix}1/100&0\\0&-1/100\end{pmatrix},\qquad \widetilde f=f.$$
The exact coercivity and continuity constants are $c=1$ and $C=3$. The defect matrix is $E=\operatorname{diag}(1/100,-1/100)$, so $\|E\|_2=1/100<1/50$; take the conservative certified $\delta=1/50$, load defect $\eta=0$, and $\|F_h\|=1$. The perturbed solve is
$$\widetilde u=\binom{19900/29999}{-10000/29999},$$
while $u=(2/3,-1/3)$. The transfer theorem gives the certified error $\|u-\widetilde u\|_2\le1/49$; the exact rational difference is also smaller than $1/49$.

This is a finite algebraic error ledger illustrating how a certified assembly defect enters the perturbation theorem; it does not assert that this particular matrix is a panel matrix from a specified mesh.

## Facts & Assumptions

**Given:** The exact two-dimensional bilinear form, its perturbed matrix, the Euclidean norm, and the transfer theorem.

[F1] If $\delta<c$, a matrix defect and load defect give the stated Galerkin error bound ([[thm-bem-matrix-perturbation-transfer]]).

## Proof


1.1 The eigenvectors $(1,1)$ and $(1,-1)$ of $A$ have eigenvalues $3$ and $1$, respectively. Hence $x^TAx\ge\|x\|_2^2$ and $\|A\|_2=3$, so $c=1$, $C=3$. The defect matrix is diagonal with entries $\pm1/100$, so $\|E\|_2=1/100<1/50$; alternatively $\|E\|_2\le\|E\|_F=\sqrt2/100<1/50$. Thus $\delta=1/50$ is a certified Euclidean operator defect. [given, algebra]

1.2 The determinant of $\widetilde A$ is $(201\cdot199)/10000-1=29999/10000$, and its inverse applied to $f$ gives $\widetilde u=(19900/29999,-10000/29999)^T$. The exact inverse of $A$ gives $u=(2/3,-1/3)^T$. Their difference is $(-298/89997,-1/89997)^T$, whose squared norm is $88805/89997^2<1/49^2$ because $88805\cdot2401=213220805<8099460009=89997^2$. [given, algebra]

2.1 The discrete space here is the whole two-dimensional space, so the exact Galerkin best-approximation term vanishes; $c=1$, $\delta=1/50$, $\eta=0$, and $\|F_h\|=1$. Applying [F1] gives $\|u-\widetilde u\|_2\le\frac{(1/50)}{1-1/50}=\frac1{49},$ which agrees with the direct rational check in step 1.2. [F1, step 1.1, step 1.2, given, algebra] ∎

