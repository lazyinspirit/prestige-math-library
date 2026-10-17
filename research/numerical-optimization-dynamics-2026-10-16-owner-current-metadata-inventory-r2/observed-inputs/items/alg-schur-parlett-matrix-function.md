---
id: alg-schur-parlett-matrix-function
kind: algorithm
title: "Finite Schur–Parlett recurrence with block merging and inconclusive statuses"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 7
deps:
  - def-analytic-primary-matrix-function
  - alg-exact-jordan-block-analytic-evaluation
  - thm-exact-jordan-block-analytic-evaluation-correct
  - def-real-and-complex-schur-forms
  - alg-finite-budget-francis-schur-reduction
  - def-sylvester-operator-and-separation-number
  - thm-sylvester-unique-solvability-spectral-separation
  - alg-bartels-stewart-sylvester-equation
  - thm-bartels-stewart-sylvester-exact-correctness
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Jan Zur, Matrix Functions, TU Berlin full lecture notes"
      url: "https://www.tu.berlin/fileadmin/www/40000110/Dauer-Wimis/Jan_Zur/matrix_functions_zur.pdf"
    - title: "Philip I. Davies and Nicholas J. Higham, A Schur–Parlett Algorithm for Computing Matrix Functions"
      url: "https://eprints.maths.manchester.ac.uk/156/1/paper.pdf"
---

## Definition

Input a finite complex matrix $A\in\mathbb C^{n\times n}$, $n\ge1$, a
holomorphic function $f$ on a neighborhood of $\sigma(A)$ with the finite
derivative data required by the diagonal block evaluators, Schur controls, a
Sylvester separation threshold $\tau\ge0$, an initial partition of
$\{1,\ldots,n\}$ into nonempty contiguous intervals, and a finite table of
exact Jordan certificates indexed by contiguous diagonal block intervals.
The partition and certificates are supplied inputs; a missing certificate for
any current block returns missing-jordan-data.

1. Call [[alg-finite-budget-francis-schur-reduction]] in its complex branch.
   Propagate any non-Schur status. Treat its returned $Q,T$ as candidates.
2. Verify by exact arithmetic that $Q^*Q=I$, $A=QTQ^*$, and $T$ is upper
   triangular. If any identity fails, return schur-certificate-failure. The
   computed Schur routine's residual diagnostic alone does not pass this test.
3. Start from the supplied contiguous block partition of $T$. For each block
   $T_{ii}$ call [[alg-exact-jordan-block-analytic-evaluation]] with its exact
   Jordan certificate and return value $F_{ii}$. If a certificate or required
   derivative is missing, return missing-jordan-data.
4. Visit block pairs by increasing distance $j-i$. Form
   $$C_{ij}=F_{ii}T_{ij}-T_{ij}F_{jj} +\sum_{i<k<j}(F_{ik}T_{kj}-T_{ik}F_{kj}).$$
   Call [[alg-bartels-stewart-sylvester-equation]] on
   $T_{ii}F_{ij}+F_{ij}(-T_{jj})=C_{ij}$ with threshold $\tau$. If it returns
   `success`, store its exact solution as $F_{ij}$. If it returns `singular-pivot` or
   `pivot-separation-failure` and the partition has multiple blocks, merge the
   contiguous blocks from $i$ through $j$, discard their old diagonal data,
   and restart step 3. Each merge reduces the block count, so there are at most
   $n-1$ merges. Any other non-success status is returned as
   inconclusive-sylvester with its underlying status.
5. Return the factored value $QFQ^*$ with status parlett-success.

The procedure makes no floating-point stability or error-bound claim. Its
success branch requires exact Schur and local solve certificates.
