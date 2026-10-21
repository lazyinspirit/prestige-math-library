# Batch 18 authoring notes

## Plan comparison and current run

- The run is inverse-problems-knot-theory-all-109-2026-10-19, role beta,
  batch 18, assigned pair linear-gaussian-inverse-posteriors-and-tikhonov.
- The controlling IP-18 design at
  research/plan-inverse-problems-track.md specifies two A results:
  thm-ip-finite-linear-gaussian-posterior and
  cor-ip-gaussian-map-equals-tikhonov-minimizer. Its B leaves cover singular
  prior covariance, prior preconditioning, and a non-Gaussian MAP/mean mismatch.
- The matching research/plan-spec.json page rows agree on page IDs, titles,
  category, order, companion and requires interfaces, but have empty item
  arrays as pre-authoring scaffolds. No identity, scope or prerequisite conflict
  was found; this batch fills the inventories from the controlling design.
- The authoritative batch-level dependency record has batch 18 at level 3 with
  prerequisite batch 16. The assigned page requires IP-16, the published
  finite-Gaussian-process posterior page and the published Moore–Penrose and
  finite Tikhonov pages. Those declared interfaces are retained.
- The live .autopilot/inverse-problems-knot-theory-all-109-2026-10-19 status
  was recomputed from disk: Step 1 scaffold is still active, with no writer in
  flight. Its owner hold names other batches, not batch 18. The current Git head
  was inspected; unrelated working-tree changes are outside this assignment.

## Item checkpoint: lem-ip-singular-gaussian-support-and-pseudoinverse

- Claim: for a finite positive-semidefinite Gaussian covariance, the affine
  support is m + Ran(C); in orthonormal range coordinates C=UΛUᵀ, the
  pseudoinverse is UΛ⁻¹Uᵀ, and the law is the affine image
  m+UΛ^(1/2)Z. The rank-zero case is explicit.
- Direct dependencies: def-axiom-of-choice,
  def-multivariate-normal-law,
  thm-non-negative-operator-characterisations,
  thm-non-negative-square-root-exists-and-is-unique,
  thm-nondegenerate-multivariate-normal-law-has-density,
  def-moore-penrose-pseudoinverse, and
  thm-moore-penrose-pseudoinverse-exists-and-is-unique.
- Placement and item level: A page 3032; level 0 because none of these suppliers
  belongs to this run.
- Source context: Clason, Regularization of Inverse Problems, Chapter 13,
  printed pp. 127–131 / PDF pp. 129–133,
  https://arxiv.org/pdf/2001.00617; Dashti–Stuart, The Bayesian Approach to
  Inverse Problems, §§3.1–3.2,
  https://arxiv.org/pdf/1302.6989. The exact rank-deficient support and
  pseudoinverse-coordinate argument is proved locally.
- The full source dossier records the complete reads at
  research/inverse-problems-planning-2026-10-18/sources/reader-1.md and
  research/inverse-problems-planning-2026-10-18/sources/reader-3.md.
  Existing full-text fetch evidence is available in batch 2 and batch 16;
  this batch will preserve those exact successful fetch records. No retrieval
  failure occurred, so no source_resolution record is applicable.
- The helper proof is complete in the current carrier. Its contract records
  four numbered derivations, exact supplier excerpts and the rank-zero,
  intermediate-rank, and full-rank boundaries. Final scoped checks pass; the
  Step 1 decision is recorded below.

## Item checkpoint: thm-ip-finite-linear-gaussian-posterior

- Claim: for finite $X\sim N_n(m_0,C_0)$, $Y=AX+\eta$ with independent
  $\eta\sim N_m(0,\Gamma)$ and $\Gamma\succ0$, the pointwise Gaussian
  potential update is proper for every datum and equals the finite-GP
  conditional-law version with
  $m_0+C_0A^T(AC_0A^T+\Gamma)^{-1}(y-Am_0)$ and
  $C_0-C_0A^T(AC_0A^T+\Gamma)^{-1}AC_0$. The proof uses only the observed
  positive-definite matrix inverse and explicitly includes rank zero.
- Direct in-run suppliers: IP-16's
  def-ip-misfit-evidence-and-posterior-law (level 2) and
  thm-ip-function-space-posterior-propriety (level 3), plus the new
  lem-ip-singular-gaussian-support-and-pseudoinverse (level 0). The
  theorem's item level is 4.
- The current full bodies of both IP-16 suppliers were inspected. The
  definition gives the fixed-data potential update and separates it from the
  data-indexed conditional version; the propriety theorem is choice-free and
  applies here with $D=\mathbb R^n$, a proper Gaussian prior, $\Phi\ge0$,
  $M_1=0$, and $\int e^{M_1}\,d\mu_0=1$. Both carriers are still draft; this
  body inspection makes no independent acceptance claim.
- Other verified interfaces: the published finite Gaussian-process posterior
  theorem permits singular prior and predictive covariance blocks when the
  observed block is positive definite and gives an all-datum version; the
  current multivariate-normal and positive-definite density suppliers state
  their AC branches. The new theorem states that AC branch and separately uses
  the choice-free IP-16 propriety result.
- Sources: Clason, Chapter 13, printed pp. 127–131 / PDF pp. 129–133,
  https://arxiv.org/pdf/2001.00617; Dashti–Stuart, §§3.1–3.2 and §4.1,
  https://arxiv.org/pdf/1302.6989. Clason's calculation assumes isotropic
  positive-definite prior/noise covariances; the general $\Gamma$ and
  singular-$C_0$ calculation is local. Dashti–Stuart gives the potential
  posterior formula only as a data-marginal-a.s. version; the finite-GP
  supplier supplies the all-datum version used here.
- Source caveat: the printed §4.1 Theorem 4.2 positivity proof infers a
  uniform finite bound for a continuous potential on a merely bounded
  positive-mass set. That inference is not valid in general. The run's actual
  IP-16 propriety supplier uses a separately proved support-neighborhood
  argument, and this finite Gaussian case also has the directly checked
  nonnegative-potential envelope. The source caveat does not leave this
  theorem blocked.
- No retrieval failure occurred; the exact successful Clason and Dashti
  fetch records in batch 2 and batch 16 are carried into this coverage. The
  theorem contract records eight numbered derivations and exact supplier
  excerpts. Final scoped checks pass; the Step 1 decision is recorded below.

## Item checkpoint: cor-ip-gaussian-map-equals-tikhonov-minimizer

- Claim: on the affine prior support, the finite Gaussian posterior density
  has a unique mode equal to its mean and to the unique minimizer of the
  covariance-weighted Tikhonov objective using $C_0^\dagger$. The rank-zero
  branch is defined as the unique point of the singleton support. No
  unrestricted minimizer claim is made for singular $C_0$.
- Direct in-run suppliers: thm-ip-finite-linear-gaussian-posterior
  (level 4) and
  lem-ip-singular-gaussian-support-and-pseudoinverse (level 0); item level
  is 5. The direct published optimization interfaces are
  def-tikhonov-regularised-least-squares and
  thm-tikhonov-regularised-least-squares-has-a-unique-minimiser, specialized
  to $\lambda=1$ after prior whitening.
- Source scope: Clason Chapter 13 proves the full-rank isotropic Gaussian
  MAP/Tikhonov and posterior-mean/MAP special case; its warning explicitly
  says the equality need not hold for non-Gaussian models. The proof here
  locally handles general positive-definite $\Gamma$, singular $C_0$, and the
  density on the finite-dimensional affine support.
- The proof contract records four numbered derivations, exact supplier
  excerpts and the positive-rank, singular-support and rank-zero boundaries.
  The page manifest and coverage record are synchronized; final scoped checks
  pass and the Step 1 decision is recorded below.

## B-page item checkpoints

- ex-ip-singular-state-gaussian-posterior fixes $C_0=\operatorname{diag}(1,0)$,
  $A=I_2$, $\Gamma=I_2$, and $y=(2,3)$. Direct substitution gives posterior
  mean $(1,0)$, covariance $\operatorname{diag}(1/2,0)$, and support-restricted
  Tikhonov minimizer $(1,0)$. Its direct in-run dependencies are the posterior
  theorem, MAP corollary, and singular-support helper; level 6.
- ex-ip-prior-whitened-tikhonov-posterior uses
  $C_0=\operatorname{diag}(4,1)$, $\Gamma=\operatorname{diag}(1,4)$,
  $A=I_2$, and $y=(2,4)$. Prior whitening $L=\operatorname{diag}(2,1)$ and
  data whitening $W=\operatorname{diag}(1,1/2)$ produce
  $D=\operatorname{diag}(2,1/2)$, $b=(2,2)$ and the $\lambda=1$ Tikhonov
  minimizer $z=(4/5,4/5)$; the original parameter is $(8/5,4/5)$.
  Dependencies: posterior theorem, MAP corollary and the finite Tikhonov
  definition/theorem; level 6.
- cex-ip-nongaussian-map-differs-from-posterior-mean refutes the universal
  density-mode/mean claim with a uniform prior on $[0,1]$, unit Gaussian
  noise, and datum $0$. The posterior density is proportional to
  $e^{-\theta^2/2}\mathbf 1_{[0,1]}$, with unique MAP $0$ and mean
  $(1-e^{-1/2})/\int_0^1e^{-t^2/2}dt>0$. It demonstrates the Gaussian
  hypotheses' boundary; level 6 through the MAP corollary.
- These finite calculations are local verification arguments. The three B
  contracts record seven derivations, exact supplier excerpts, relevant
  boundary cases and concrete finite checks. The checks reproduce the rank-one
  posterior and minimizer, the anisotropic whitening values, and a Simpson
  estimate of the counterexample's positive posterior mean ($0.4598622293$, with normalizer
  $0.8556243919$); exact positivity follows from the displayed integral.
  Final scoped checks pass and the Step 1 decisions are recorded below.

The A/B page carriers place three mathematical items on A and the three
planned leaves on B; both Markdown bodies are empty. The A/B manifest mirrors
all six statements, dependency lists and item levels. The cross-batch file
records the two actual IP-16 supplier bodies inspected above, both explicitly
remaining draft.

## Final validation and Step 1 readiness

- `precheck.mts`: six proof-bearing items checked, zero failures.
- `proof-layout.mjs`: six items, 23 numbered steps, zero defects.
- `rendercheck.mjs`: six items and both page carriers checked, zero errors or
  warnings. Both page files contain frontmatter only.
- Editorial scan: all six complete Statement/Example/Statement-refuted
  sections are free of inline hyperlinks; references follow their own sections.
- Focused `depcheck.mjs`: six owned items and both A/B pages checked, zero
  errors or warnings. `content-policy.mjs`: six items, zero errors or warnings.
- Strict proof contract: six of six items, zero errors or warnings; the
  independent manifest-to-contract inventory comparison also found six of six
  entries. `proof-contract-coverage.mjs` could not initialize its run-wide
  frontier scope because the separate `khovanov-to-floer-spectral-sequence`
  page has an empty/invalid inventory; no batch-18 item was named as the cause.
- `coverage-checklist.mjs`: one A page and six harvested results, zero errors
  or warnings. `source-fetch-check.mjs --stamp`: two of two sources verified
  and resolved, zero newly stamped.
- The run-wide dependency-level command reports 150 errors elsewhere in the
  218-page run, including empty scaffolds and pre-existing level mismatches.
  The run-wide dependency computation reports no batch-18 error: the six owned
  items match levels 0, 4, 5, 6, 6 and 6, computed through the actual in-run
  supplier graph. The two batch-16 supplier bodies are present and interface-
  checked; their draft status is not an acceptance claim.
- The native `step1-decisions.mjs check` reports the six owned items closed
  with no batch-18 work rows. At the final check, 315 of 608 run items were
  ready; the remaining work rows were 293 other items and 104 empty pages.
- The six owned items are recorded `ready` with their examined direct
  dependencies. Readiness records document Step 1 completion only and do not
  infer independent review, approval or publication.

No batch-18 authoring obligation remains. The two run-wide validator blockers
above are outside this pair's write boundary and are left for their owners.

## Active autopilot status

- Recomputed from disk at 2026-10-18 22:01 UTC: the run is still running,
  stage `1-scaffold` is 42/109 covered, no writer is in flight, and batch 18
  appears in the missing-unit list. The stage counts successful dispatch
  result records, so the local batch artifacts and six ready records have not
  yet been credited as dispatch coverage.
- The current stage blockers require owner repair and recertification and
  report invalid unit prerequisites from a YAML parse error in the separate
  `def-based-string-link-and-labeled-link-peripheral-system` item. Both are
  outside this pair's write boundary; no run state or verdict was changed.
