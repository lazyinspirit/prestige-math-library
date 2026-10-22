---
id: lem-emg-fx-finite-step-termination
kind: lemma
title: "Finite arithmetic termination and cost"
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 2
proof_strategy: direct
deps:
  - def-emg-fx-cochain-maxwell
  - alg-emg-fx-leapfrog-cochains
dependency_roles:
  def-emg-fx-cochain-maxwell: mathematical-premise
  alg-emg-fx-leapfrog-cochains: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Ralf Hiptmair, Maxwell’s Equations: Continuous and Discrete, ETH Research Report 2015-18"
      url: "https://www.sam.math.ethz.ch/sam_reports/reports_final/reports2015/2015-18.pdf"
      locator: "Complete 56-page report inspected. §§3.1–3.3, printed pp. 23–26 (PDF pp. 24–27), for the finite-coordinate cochain setting; the operation-count proof here is local."
    - title: "Davit Harutyunyan, Adaptive Vector Finite Element Methods for the Maxwell Equations, University of Twente dissertation (2007)"
      url: "https://ris.utwente.nl/ws/portalfiles/portal/6041555/thesis_Harutyunyan.pdf"
      locator: "Complete 210-page dissertation inspected. Ch. 6, §§6.7–6.9, printed pp. 169–174 (PDF pp. 179–184), for the finite matrix evolution context; the exact rational termination and arithmetic count are proved here."
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

For rational admissible input matrices and initial state, positive rational step size $\tau$, and finite $N\geq0$, the specified finite leapfrog algorithm returns after finitely many exact rational arithmetic operations, with the stated $N+1$ states and the exact rational inverse $M_1^{-1}$. A dense implementation uses $O(n_1^3)$ rational arithmetic operations for the one-time elimination and $O(n_1^2+n_1n_2+n_2^2)$ per update. Retaining all input matrices $D_0,D_1,D_2,M_1,M_2$, the computed inverse, and all $N+1$ states uses $O(n_1n_0+n_1^2+n_1n_2+n_2^2+n_2n_3+(N+1)(n_1+n_2))$ rational entries. These are arithmetic-operation and storage counts only; they give no bound on rational bit growth, floating-point roundoff, linear-solve residuals, or continuum accuracy.

## Statement references

[[def-emg-fx-cochain-maxwell]]

[[alg-emg-fx-leapfrog-cochains]]

## Facts & Assumptions

**Given:** Rational finite cochain matrices with positive-definite $M_1$, rational initial coordinates, $\tau\in\mathbb Q_{>0}$ and finite $N\in\mathbb N_0$.

[F1] [[def-emg-fx-cochain-maxwell]]: $M_1$ is symmetric positive definite on $C^1$, and all spaces and matrices are finite-dimensional.

[F2] [[alg-emg-fx-leapfrog-cochains]]: the algorithm uses a fixed-order Gauss–Jordan elimination without row swaps, returning an error only if a diagonal pivot is zero, then executes $N$ updates by finite matrix-vector products.

## Proof

1.1 If $n_1>0$, the initial trailing block $S_1=M_1$ is symmetric positive definite by [F1]. After eliminating the first $j-1$ columns without row swaps, the left augmented block has form $\begin{pmatrix}I_{j-1}&A\\0&S_j\end{pmatrix}$, where $S_j$ is the remaining Schur complement. Write $S_j=\begin{pmatrix}p&r^{\mathsf T}\\r&C\end{pmatrix}$. Since $S_j$ is positive definite, $p>0$, so the prescribed diagonal pivot is nonzero. The row operations in column $j$ replace the remaining block by $S_{j+1}=C-rp^{-1}r^{\mathsf T}$. For any nonzero $y$, put $x=-p^{-1}r^{\mathsf T}y$; then $(x,y)\neq0$ and $y^{\mathsf T}S_{j+1}y=(x,y)^{\mathsf T}S_j(x,y)>0$. Hence $S_{j+1}$ is positive definite. Induction proves that every no-row-swap pivot is positive and the error branch is unreachable. Each row operation is invertible; after the last column the left block is the identity, so the right block is exactly $M_1^{-1}$. For $n_1=0$, the inverse is the unique empty matrix and there are no pivot steps. [given, F1, F2, algebra]

2.1 The input entries are rational. Each row operation uses addition, subtraction, multiplication, or division by a nonzero rational pivot from step 1.1, so every intermediate entry and the final inverse remain rational. The elimination loop has exactly $n_1$ finite iterations; consequently it terminates with an exact rational output. [given, F2, step 1.1, algebra]

3.1 Dense no-row-swap Gauss–Jordan elimination performs $O(n_1^2)$ row-entry updates per pivot column and hence $O(n_1^3)$ arithmetic operations. Each evolution step uses matrix-vector products with costs $O(n_1^2)$ for $M_1^{-1}d$, $O(n_1n_2)$ for each multiplication by $D_1$ or $D_1^{\mathsf T}$, and $O(n_2^2)$ for $M_2b$. There are exactly $N$ such steps. The matrices $D_0,D_1,D_2,M_1,M_2$ have respectively $n_1n_0,n_1n_2,n_3n_2,n_1^2,n_2^2$ entries; the inverse adds $n_1^2$, and the $N+1$ states add $(N+1)(n_1+n_2)$ entries. Their total is bounded by the stated storage order. When $N=0$, the initial state is returned without an update; when $n_1=0$ or $n_2=0$, the corresponding empty products and loops are finite and the same bounds remain valid. No bit-size or floating-point estimate follows from an arithmetic-operation count. [given, F2, step 2.1, algebra] ∎
