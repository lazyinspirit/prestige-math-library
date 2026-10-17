---
id: thm-computed-francis-schur-backward-error
kind: theorem
title: "A computed Francis Schur factorization has a conditional normwise backward-error bound"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps: [alg-finite-budget-francis-schur-reduction, lem-two-sided-scaled-householder-similarity-error, lem-unitary-similarity-error-accumulation]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "David Bindel, CS 6210 Matrix Computations, Hessenberg QR iteration"
      url: https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-10-29.html
---

## Statement

Suppose the finite reduction returns a product $Q$ of exact unitary reflector representatives and computed factor $\widehat T$, after any finite successful prefix or completed run. Index all Hessenberg and QR updates by $j$, including each pure deflation as an identity-transform stage with zero arithmetic coefficient. Suppose
$$\widehat H_j=P_j^*(\widehat H_{j-1}+E_j+D_j)P_j,\qquad \|E_j\|_F\le\alpha_j\|\widehat H_{j-1}\|_F,$$
where $D_j$ records the exact deflation zero writes and each $P_j$ is the exact stored-vector representative. Then
$$\widehat T=Q^*(A+\Delta)Q,\qquad \|\Delta\|_F\le\sum_j\alpha_j\|\widehat H_{j-1}\|_F+\sum_j\|D_j\|_F.$$
The conditional assertion holds for any certified nonnegative $\alpha_j$. For the actual specified real/complex arithmetic, [[lem-two-sided-scaled-householder-similarity-error]] proves $\alpha_j=a_j+b_j+a_jb_j$ under its arithmetic/range and active-dimension hypotheses: use the target-overwrite left coefficient when a matrix column is targeted, the separate-block left coefficient for an external polynomial vector, and always the right separate-block coefficient. It covers initialization as well as all chase steps. Identity branches have zero arithmetic error. Deflation remains separate.

This completes a concrete implementation-level normwise backward bound. A rounded dense realization of $Q$ retains its separate orthogonality residual. Budget, stagnation, Schur-type-undecided and arithmetic/invariant failures retain their statuses; a backward bound for a finite prefix does not establish a completed Schur form or unconditional convergence. No same-size forward eigenvalue error is inferred for a nonnormal matrix. A norm certificate requires exact evaluation or rigorous upper allowances, not an uncorrected rounded diagnostic.

## Facts & Assumptions

**Given:** The finite exact-factor representation and local relations; for the concrete instance use the successful operationwise arithmetic and actual overwrite choices.

[F1] [[alg-finite-budget-francis-schur-reduction]] records all factors, target operations and deflation writes with finite controls and explicit statuses.

[F2] [[lem-unitary-similarity-error-accumulation]] turns the finite local relations into a backward perturbation bounded by the sum of their Frobenius norms.

[F3] [[lem-two-sided-scaled-householder-similarity-error]] proves the actual matching real/complex two-sided coefficient $a+b+ab$.

[A1] For the general conditional assertion, the displayed local inequalities with nonnegative $\alpha_j$ are hypotheses. For the specified arithmetic they are supplied by [F3], rather than a false universal $3\gamma_m$ claim.

## Proof

1.1 Apply [F2] to the finite recorded sequence in [F1], including the initialization updates and each explicit deflation. It gives $\widehat T=Q^*(A+\Delta)Q$ with $\|\Delta\|_F\le\sum_j(\|E_j\|_F+\|D_j\|_F)$. Substituting [A1] proves the conditional bound. [given, F1, F2, A1, algebra]

1.2 For the actual arithmetic, [F3] supplies each required $E_j$ and its coefficient from the actual matrix-target or separate-panel use. A preceding deflation cannot increase the Frobenius norm, so the same coefficient bounds the update relative to the pre-deflation matrix. Substitution into step 1.1 proves the concrete bound. No step uses Schur convergence, so the finite-prefix assertion and the retained status distinctions follow. [F1, F3, step 1.1, algebra] ∎
