---
id: alg-finite-budget-schur-qz-riccati-candidate-extraction
kind: algorithm
title: "Finite-budget CARE and DARE candidate extraction from ordered Schur and QZ forms"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-standard-continuous-and-discrete-riccati-equations
  - alg-finite-budget-francis-schur-reduction
  - thm-finite-budget-francis-schur-termination-and-status
  - alg-finite-budget-qz-iteration-with-deflation-and-residual
  - prop-finite-budget-qz-iteration-terminates-and-preserves-pencil-equivalence
  - thm-computed-qz-pair-has-certified-backward-error
  - alg-finite-budget-stable-block-reordering-for-schur-and-qz
  - thm-finite-budget-stable-block-reordering-correctness-and-status
  - thm-uniform-linear-residual-solution-enclosure
  - thm-outward-rounded-operations-are-isotone-and-dag-sound
justified_by: [lem-riccati-finite-budget-wrappers-return-a-status]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Peter Benner and Lihong Feng, Model Reduction for Dynamical Systems, Lecture 8"
      url: "https://www.mpi-magdeburg.mpg.de/2943737/lecture8.pdf"
      locator: "slides 26–29, Schur-vector method and Riccati numerical methods"
    - title: "Federico Poloni, Lecture notes on Riccati-type matrix equations"
      url: "https://pages.di.unipi.it/fpoloni/videolezioni/phd25/notes.pdf"
      locator: "§5.1, invariant-subspace solution recovery"
---

## Definition

Inputs are finite CARE or DARE data from [[def-standard-continuous-and-discrete-riccati-equations]], finite Schur or QZ sweep budgets, an adjacent-swap budget $K$, a scalar/evaluator work budget $W$, a positive local separation threshold $\eta$, and the exact arithmetic controller or bounded outward evaluator for [[alg-finite-budget-stable-block-reordering-for-schur-and-qz]]. For CARE form $H=\begin{bmatrix}A&-G\\-Q&-A^*\end{bmatrix}$; for DARE form $N=\begin{bmatrix}A&0\\-Q&I\end{bmatrix}$ and $M=\begin{bmatrix}I&G\\0&A^*\end{bmatrix}$. The procedure never forms $A^{-1}$ and does not require a separately supplied ordered basis.

1. For CARE, run [[alg-finite-budget-francis-schur-reduction]] on $H$. For DARE, run [[alg-finite-budget-qz-iteration-with-deflation-and-residual]] on $(N,M)$. Propagate any budget, range, invariant-pattern, or pencil-regularity failure as an explicit inconclusive status. The returned residuals and factor backward-error certificates are those specified by the corresponding supplier items; they are not interpreted as structure-preserving perturbations.
2. On a successful reduction, invoke [[alg-finite-budget-stable-block-reordering-for-schur-and-qz]] with the CARE strict-left-half-plane selector or DARE strict-unit-disk selector and required selected dimension $n$. Propagate every non-ordered result as its explicit status, including boundary-spectrum, separation-inconclusive, swap-separation-inconclusive, arithmetic-inconclusive, range-failure, swap-budget-exhausted, and work-budget-exhausted. The source algorithm's exact product factors and [F6] certify ordering of the represented computed form and preserve the original unstructured reduction residual. For CARE take the first $n$ columns of the updated Schur factor; for DARE take the first $n$ columns of the updated **right** QZ factor, never the left factor. If the relevant exact factor or residual certificate is unavailable, keep the corresponding diagnostic inconclusive.
3. Write the ordered stable basis as $U=\begin{bmatrix}U_1\\U_2\end{bmatrix}$. Estimate $\|U_1^{-1}\|_2$ using the supplied verified linear-residual certificate; if invertibility or a finite bound cannot be certified, return graph-block-inconclusive.
4. Solve $X_0U_1=U_2$ by a finite verified linear solve; do not form an explicit inverse. Set $\widehat X=(X_0+X_0^*)/2$. Compute and report the actual Riccati residual, Hermitian symmetry defect, the DARE matrix $R+B^*\widehat X B$ when applicable, the graph-block bound, and the actual closed-loop spectral certificate. Any failed positivity or stability check returns candidate-rejected; unavailable certificates return inconclusive. No residual by itself certifies the stabilizing branch or a nearby positive $Q,R$.

This is the finite candidate-extraction stage for the ordered Schur/QZ solvers. Its ordering prerequisite is the finite adjacent-block routine and correctness theorem cited above; a successful order applies to the represented computed form, with the separately stated diagnostics still required for Riccati acceptance.

