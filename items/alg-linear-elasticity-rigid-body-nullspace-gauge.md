---
id: alg-linear-elasticity-rigid-body-nullspace-gauge
kind: algorithm
title: "Algebraic gauge for a rigid-body stiffness nullspace"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: []
justified_by: [lem-linear-elasticity-rigid-body-gauge-system-is-nonsingular]
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Long Chen, Introduction to Linear Elasticity and Its Finite Element Approximation (complete 13-page notes)"
      url: "https://cpb-us-e2.wpmucdn.com/sites.uci.edu/dist/5/3624/files/2019/01/elasticity.pdf"
      locator: "§1, printed pp. 1–2, and §5, printed p. 12: rigid motions do not change strain or stress and must be respected in discretization."
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element Methods and Applications (complete 691-page text)"
      url: "https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf"
      locator: "Chapter 3, §§3.2 and 3.4, printed pp. 140–173: singular saddle matrices, kernels, and finite-dimensional stability."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Let $K\in\mathbb R^{N\times N}$ be symmetric positive semidefinite, let $R\in\mathbb R^{N\times r}$ have full column rank and satisfy $\ker K=\operatorname{range}R$, and let $f\in\mathbb R^N$ be compatible in the sense $R^Tf=0$. Define the gauge solve as the procedure:

1. Form the square augmented matrix and right-hand side
$$
\begin{bmatrix}K&R\\R^T&0\end{bmatrix},\qquad \begin{bmatrix}f\\0\end{bmatrix}.
$$
2. Solve for $(u,\gamma)\in\mathbb R^N\times\mathbb R^r$.
3. Return $u$, which is the representative satisfying $R^Tu=0$.

The input hypotheses must be checked for the particular stiffness matrix. The procedure does not identify an omitted nullspace or assert a load is compatible.
