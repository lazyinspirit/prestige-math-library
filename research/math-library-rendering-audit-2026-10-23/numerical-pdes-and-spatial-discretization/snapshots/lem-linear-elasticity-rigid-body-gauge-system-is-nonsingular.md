---
id: lem-linear-elasticity-rigid-body-gauge-system-is-nonsingular
kind: lemma
title: "The rigid-body gauge system is nonsingular"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [alg-linear-elasticity-rigid-body-nullspace-gauge]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Long Chen, Introduction to Linear Elasticity and Its Finite Element Approximation (complete 13-page notes)"
      url: "https://cpb-us-e2.wpmucdn.com/sites.uci.edu/dist/5/3624/files/2019/01/elasticity.pdf"
      locator: "§1, printed pp. 1–2, and §5, printed p. 12: rigid-motion invariance of strain and the resulting stiffness nullspace."
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element Methods and Applications (complete 691-page text)"
      url: "https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf"
      locator: "Chapter 3, §§3.2 and 3.4, printed pp. 140–173: finite-dimensional matrix kernels and solvability."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $K$ and $R$ satisfy the input hypotheses of [[alg-linear-elasticity-rigid-body-nullspace-gauge]]. Then $\begin{bmatrix}K&R\\R^T&0\end{bmatrix}$ is nonsingular. For $R^Tf=0$, its unique solution with right-hand side $\begin{bmatrix}f\\0\end{bmatrix}$ has $\gamma=0$ and is the unique $u$ satisfying $Ku=f$ and $R^Tu=0$.

## Facts & Assumptions

**Given:** A symmetric positive-semidefinite $K\in\mathbb R^{N\times N}$, a full-column-rank $R$ with $\ker K=\operatorname{range}R$, and a compatible load $f$ with $R^Tf=0$.

[F1] The gauge algorithm forms the augmented system $Ku+R\gamma=f$, $R^Tu=0$ under precisely these input hypotheses. ([[alg-linear-elasticity-rigid-body-nullspace-gauge]])

## Proof

1.1 Suppose $(x,\eta)$ lies in the nullspace of the augmented matrix. Then $Kx+R\eta=0$ and $R^Tx=0$. Multiplying the first equation by $x^T$ gives $x^TKx+x^TR\eta=0$, and the second equation makes the second term zero; hence $x^TKx=0$. [given, F1, algebra]

2.1 For any $y\in\mathbb R^N$ and $t\in\mathbb R$, positive semidefiniteness gives $(x+ty)^TK(x+ty)=2t y^TKx+t^2y^TKy\ge0$. If $y^TKx\ne0$, choosing $t$ with the opposite sign and sufficiently small magnitude makes the right side negative. Thus $y^TKx=0$ for every $y$, so $Kx=0$. [given, step 1.1, algebra]

3.1 Since $\ker K=\operatorname{range}R$, write $x=Ra$. Then $0=R^Tx=R^TRa$; full column rank makes $R^TR$ positive definite, so $a=0$ and $x=0$. The first null equation now gives $R\eta=0$, and full column rank yields $\eta=0$. The augmented square matrix is injective and therefore nonsingular by finite-dimensional rank-nullity. [given, step 2.1, algebra]

4.1 Nonsingularity gives a unique solution for every right-hand side. For the right-hand side $[f;0]$, multiply $Ku+R\gamma=f$ by $R^T$. Symmetry of $K$ and $KR=0$ imply $R^TK=0$, so $R^TR\gamma=R^Tf=0$ and positive definiteness gives $\gamma=0$. Hence $Ku=f$ and $R^Tu=0$. Conversely, any vector satisfying those two equations with multiplier zero solves the augmented system, so its uniqueness follows from step 3.1. [given, F1, step 3.1, algebra] ∎