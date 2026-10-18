---
id: alg-finite-budget-schur-qz-riccati-candidate-extraction
kind: algorithm
title: "Finite-budget CARE and DARE candidate extraction from ordered Schur and
  QZ forms"
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
  - lem-neumann-inverse-norm-bound
  - cor-operator-norm-submultiplicative-and-t-star-t-identity
  - thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison
  - thm-care-local-residual-ball-certificate
  - thm-dare-local-residual-ball-certificate
justified_by: [ lem-riccati-finite-budget-wrappers-return-a-status ]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Peter Benner and Lihong Feng, Model Reduction for Dynamical Systems,
        Lecture 8"
      url: "https://www.mpi-magdeburg.mpg.de/2943737/lecture8.pdf"
      locator: "slides 26–29, Schur-vector method and Riccati numerical methods"
    - title: "Federico Poloni, Lecture notes on Riccati-type matrix equations"
      url: "https://pages.di.unipi.it/fpoloni/videolezioni/phd25/notes.pdf"
      locator: "§5.1, invariant-subspace solution recovery"
verification:
  precheck: n/a
---

## Definition

Inputs are finite CARE or DARE data from [[def-standard-continuous-and-discrete-riccati-equations]], finite Schur or QZ sweep budgets, an adjacent-swap budget $K$, a scalar/evaluator work budget $W$, a positive local separation threshold $\eta$, and the exact arithmetic controller or bounded outward evaluator for [[alg-finite-budget-stable-block-reordering-for-schur-and-qz]]. The budget $W$ also charges every graph-product enclosure and local acceptance comparison. The graph stage also takes finite dyadic proposals $R_g,\widehat Y$ for a point inverse and solution matrix, together with outward enclosures of the exact product-factor entries and the certificate data required by the applicable local residual-ball theorem. If a proposal, enclosure, or certificate is unavailable, the corresponding graph or acceptance result is inconclusive. For CARE form $H=\begin{bmatrix}A&-G\\-Q&-A^*\end{bmatrix}$; for DARE form $N=\begin{bmatrix}A&0\\-Q&I\end{bmatrix}$ and $M=\begin{bmatrix}I&G\\0&A^*\end{bmatrix}$. The procedure never forms $A^{-1}$ and does not require a separately supplied ordered basis.

Each local residual-ball packet contains its proposed radius, residual and inverse-norm bounds, norm bounds, and the required Lyapunov or Stein witness matrices with exact factorization witnesses for positive-definite and positive-semidefinite inequalities. Check all supplied matrix equalities exactly and all scalar bounds with the finite outward evaluator. A missing witness or unresolved comparison returns inconclusive; failure of a sufficient residual-ball test alone does not reject a candidate.

1. For CARE, run [[alg-finite-budget-francis-schur-reduction]] on $H$. For DARE, run [[alg-finite-budget-qz-iteration-with-deflation-and-residual]] on $(N,M)$. Propagate any budget, range, invariant-pattern, or pencil-regularity failure as an explicit inconclusive status. The returned residuals and factor backward-error certificates are those specified by the corresponding supplier items; they are not interpreted as structure-preserving perturbations.
2. On a successful reduction, invoke [[alg-finite-budget-stable-block-reordering-for-schur-and-qz]] with the CARE strict-left-half-plane selector or DARE strict-unit-disk selector and required selected dimension $n$. Propagate every non-ordered result as its explicit status, including boundary-spectrum, separation-inconclusive, swap-separation-inconclusive, arithmetic-inconclusive, range-failure, swap-budget-exhausted, and work-budget-exhausted. The returned exact product factors, together with [[thm-finite-budget-stable-block-reordering-correctness-and-status]], certify ordering of the represented computed form and transport the original unstructured reduction residual. For CARE take the first $n$ columns of the updated Schur factor; for DARE take the first $n$ columns of the updated **right** QZ factor, never the left factor. If the relevant exact factor or residual certificate is unavailable, keep the corresponding diagnostic inconclusive.
3. Write the ordered exact product basis as $U=\begin{bmatrix}U_1\\U_2\end{bmatrix}$ and view the supplied $n\times n$ matrix $\widehat Y$ by columns $\widehat y_j$. Enclose the entries of $A_g=U_1^*$ and $B_g=U_2^*$ by finite outward rectangles. Using the supplied dyadic proposals, outward-evaluate $I-R_gA_g$ once and let $q$ be an upper bound for its Frobenius norm; the same enclosure applies to every matrix in the product of entry rectangles. If $q\ge1$ or the enclosure is unavailable, return graph-block-inconclusive. For each column $b_j$ of $B_g$, outward-evaluate the full uniform residual enclosure $R_g(b_j-A_g\widehat y_j)$ over the rectangles and choose a common finite upper bound $r$ for its Euclidean norm. If any enclosure fails, return graph-block-inconclusive. Apply [[thm-uniform-linear-residual-solution-enclosure]] to each column: the exact system $A_gY=B_g$ has a unique solution and each column is within $r/(1-q)$ of the corresponding column of $\widehat Y$. Moreover $A_g$ and hence $U_1$ are invertible, and $\|U_1^{-1}\|_2\le\|R_g\|_F/(1-q)$ by the Neumann bound and submultiplicativity. Return this bound as the graph-block certificate; no explicit inverse is formed.
4. Set $X_0=\widehat Y^*$ and $\widehat X=(X_0+X_0^*)/2$. Compute outward enclosures for the CARE or DARE residual, the Hermitian symmetry defect, and, for DARE, $R+B^*\widehat X B$. Validate the supplied certificate packet against the hypotheses of [[thm-care-local-residual-ball-certificate]] or [[thm-dare-local-residual-ball-certificate]], respectively. If the theorem certifies a unique stabilizing root in the stated ball, return the candidate, residual data, graph-block bound, stability witness and certified root ball. A direct exact witness that the candidate fails a required positivity or stability condition returns candidate-rejected; failure of a sufficient theorem test or unavailable data returns inconclusive. No residual by itself certifies the stabilizing branch or a nearby positive $Q,R$.

This is the finite candidate-extraction stage for the ordered Schur/QZ solvers. Its ordering prerequisite is the finite adjacent-block routine and correctness theorem cited above; a successful order applies to the represented computed form, with the separately stated diagnostics still required for Riccati acceptance.

