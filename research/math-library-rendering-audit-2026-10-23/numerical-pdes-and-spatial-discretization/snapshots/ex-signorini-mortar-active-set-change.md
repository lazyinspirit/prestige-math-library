---
id: ex-signorini-mortar-active-set-change
kind: example
title: "A two-gap contact model changes its active set with the load"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 9
deps: [ thm-signorini-mortar-contact-kkt-and-complementarity ]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Rolf H. Krause and Barbara I. Wohlmuth, Multigrid Methods for Mortar
        Finite Elements, complete 7-page paper"
      url: "https://publications.imp.fu-berlin.de/1852/1/paper_emg99_mortar.pdf"
      locator: "§2, printed pp. 2–3: dual multiplier basis and the saddle-point
        convention."
verification:
  precheck: pass
---

## Statement

Consider the reduced two-gap variational inequality with stiffness $A=\begin{pmatrix}2&-1\\-1&2\end{pmatrix}$: for a load $f\in\mathbb R^2$, find $g\in\mathbb R_+^2$ such that $(Ag-f)\cdot(z-g)\ge0$ for every $z\in\mathbb R_+^2$. Its complementarity form is $Ag-f=\rho$, $g_i\ge0$, $\rho_i\ge0$, and $\rho_i g_i=0$. The scaling $\rho_i=d_i\lambda_i$ matches [[thm-signorini-mortar-contact-kkt-and-complementarity]], where $d_i>0$ is the diagonal dual-pair weight and $\lambda_i$ is the multiplier coefficient. For $f^{(1)}=(1,1/5)^T$, both gaps are positive and no constraint is active. For $f^{(2)}=(1,-1)^T$, the second constraint alone is active, with $g=(1/2,0)^T$ and $\rho=(0,1/2)^T$. This is an algebraic reduced model; the chosen matrix is not asserted to arise from a particular geometric mesh.

## Facts & Assumptions

**Given:** The complementarity sign convention of [[thm-signorini-mortar-contact-kkt-and-complementarity]] and the matrix $A$ above.

[F1] The mortar stationarity pairs nodal reactions $d_i\lambda_i$ with the corresponding gap coordinates, and each coefficient and gap is nonnegative with zero product. ([[thm-signorini-mortar-contact-kkt-and-complementarity]])

## Proof

1.1 The vectors $(1,1)^T$ and $(1,-1)^T$ are eigenvectors of $A$ with eigenvalues $1$ and $3$, so $A$ is symmetric positive definite. Also $A^{-1}=\frac13\begin{pmatrix}2&1\\1&2\end{pmatrix}$. For $f^{(1)}=(1,1/5)^T$, the unconstrained solution is $g=A^{-1}f^{(1)}=(11/15,7/15)^T$, which has positive entries, and $Ag-f^{(1)}=0$. Thus every VI test has zero residual and the complementarity equations hold with $\rho=0$. The scaling between $\rho_i$ and the mortar coefficient $\lambda_i$ agrees with [F1]. [F1, given, algebra]

1.2 For $f^{(2)}=(1,-1)^T$, take $g=(1/2,0)^T$ and compute $Ag=(1,-1/2)^T$, so $Ag-f^{(2)}=(0,1/2)^T=\rho$. Both vectors are componentwise nonnegative and $\rho_1g_1=0=\rho_2g_2$. For every $z\in\mathbb R_+^2$, $\rho\cdot(z-g)=\rho_2z_2\ge0$, so this is the VI solution with exactly the second gap active. [given, algebra]

2.1 Let $e_1,e_2$ be the standard coordinate vectors and write $r:=Ag-f$. If $g\ge0$, $r\ge0$, and $r_i g_i=0$, then for every $z\ge0$, $r\cdot(z-g)=\sum_i r_i z_i-\sum_i r_i g_i=\sum_i r_i z_i\ge0$, so the complementarity equations imply the VI. Conversely, suppose $g$ solves the VI. If $g_i>0$, choose $0<t<g_i$ and test with $z=g+te_i$ and $z=g-te_i$; the two inequalities give $r_i\ge0$ and $r_i\le0$, hence $r_i=0$. If $g_i=0$, test with $z=g+te_i$ for any $t>0$ to get $r_i\ge0$. Thus $r\ge0$ and $r_i g_i=0$ for both coordinates, proving equivalence. If $g,\widetilde g$ both solve the VI for the same load, testing with each other and adding gives $-(g-\widetilde g)^TA(g-\widetilde g)\ge0$. The eigenvalues computed in step 1.1 are positive, so $A$ is positive definite and this forces $g=\widetilde g$; then $\rho=Ag-f$ is also unique. Thus the displayed complementarity solutions are the unique ones for their respective loads. [step 1.1, step 1.2, given, algebra] ∎
