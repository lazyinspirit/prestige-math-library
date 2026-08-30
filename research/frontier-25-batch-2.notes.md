# Frontier 25, batch 2 - scaffold notes

## Continuity checkpoint

- Current substage: step-1 scaffolding is complete on the current batch-2
  bytes.
- Owned artifact paths: `research/frontier-25-batch-2.pages.json`,
  `research/frontier-25-batch-2.coverage.json`, and
  `research/frontier-25-batch-2.notes.md`.
- Exact next action: await review or a batch-local source/scaffold defect;
  otherwise do not edit batch `2` again before authoring.

## Scope, order, and design reconciliation

This batch owns two linear-algebra A/B pairs:

- `the-moore-penrose-pseudoinverse-and-regularised-least-squares` /
  `the-moore-penrose-pseudoinverse-and-regularised-least-squares-examples`
- `eigenvalue-iterations-and-the-qr-algorithm` /
  `eigenvalue-iterations-and-the-qr-algorithm-examples`

I read the two live design blocks in
`research/plan-algebra-track-expansion-v2.md`:

- LA-18 at lines `728` onward
- LA-19 at lines `774` onward

For both pairs, the design and `research/plan-spec.json` agree on:

- A-page orders `168.005` and `168.007`
- B-page orders `168.006` and `168.008`
- page-level prerequisite `direct-matrix-factorisations-lu-cholesky-and-qr`

No drift needed recording here.

No split is needed:

- LA-18 A page: `17` scaffold items
- LA-18 B page: `9` scaffold items
- LA-19 A page: `20` scaffold items
- LA-19 B page: `9` scaffold items

Both A pages stay far below the 60-item split threshold.

## Source verification and URL discipline

I reopened every recorded source URL in the web reader on Sunday, August 30,
2026 before writing its harvest rows. The coverage file records only URLs that
opened to the cited document itself, not to an abstract or metadata page.

LA-18 backing:

1. Roger Penrose, *A generalized inverse for matrices*.
2. Gene H. Golub, *Least squares, singular values and matrix approximations*.
3. Andrew Stuart and Jochen Voss, *Matrix Analysis and Algorithms*.
4. Stanford CS205L Unit 11, *Zero Singular Values*.
5. Stanford CS205L Unit 12, *Regularization*.

LA-19 backing:

1. Andrew Stuart and Jochen Voss, *Matrix Analysis and Algorithms*.
2. Per-Olof Persson, *The QR Algorithm I*.
3. Per-Olof Persson, *The QR Algorithm II*.
4. Netlib Templates, *Numerical Stability and Conditioning*.

Source-routing decisions:

- For LA-18 I kept Penrose as the primary historical treatment for the four
  equations, projection identities, and continuity warning, and used the later
  numerical sources only for minimum-norm least squares and regularisation.
- For LA-19 I used the Warwick notes as the lecture-note set with a harvestable
  table of contents, then used the MIT notes to pin down the QR, shift, and
  Rayleigh-iteration route actually chosen by the design.
- No recorded URL needed recovery or re-sourcing during this scaffold pass.

## LA-18 scaffold decisions

### Route and conventions

- The A page follows the design's projection-first route: pseudoinverse
  definition, existence/uniqueness, projection geometry, image/kernel
  identities, and only then least-squares consequences.
- Least residual and minimum norm are kept separate. The page proves both the
  canonical minimum-norm carrier `thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution`
  and the full affine minimiser family
  `thm-least-squares-solutions-form-an-affine-kernel-translate-of-a-plus-b`.
- Regularisation is kept honest: it changes the inverse problem. The scaffold
  therefore states the Tikhonov objective, its unique minimiser, its filter
  factors, and the limit theorem, instead of pretending it reconstructs lost
  singular directions exactly.
- Truncated SVD is tied explicitly to the published numerical-rank definition
  `def-numerical-rank-relative-to-a-norm-scale-and-tolerance`, as the design
  requires. There is no threshold-free truncated inverse on this page.

### Shape of the A page

- Pseudoinverse core: definition, existence/uniqueness, involution/adjoint and
  unitary covariance, projection theorem, image/kernel identities, and the full
  column/row rank formulas.
- Least-squares core: the minimum-norm theorem, the affine family of all
  minimisers, and the reduced-QR specializations.
- Regularisation core: Tikhonov definition, unique minimiser, spectral filter
  factors, convergence to `A^+b`, truncated-SVD definition, and hard-versus-
  smooth filter comparison.
- Boundary core: continuity on fixed-rank strata and explicit discontinuity at
  rank loss, kept on the A page because later linear-algebra pages may need it.

### Deliberate scope limits

- The Stanford Unit 12 initial-guess and iterative-regularisation variants are
  recorded as out-of-scope in the harvest. They are real mathematics, but they
  are not the exact regularisation model chosen in the design.
- The rank-one expansion of `A` from the Stanford Unit 11 slides is also marked
  out-of-scope here because the published SVD page already owns that carrier,
  and duplicating it here would only inflate the page.

## LA-19 scaffold decisions

### Route and conventions

- Every convergence theorem states its hypotheses. The power-iteration carrier
  explicitly requires diagonalizability, a simple strictly dominant eigenvalue,
  and a nonzero starting component in the wanted eigendirection.
- Projective convergence is built into the power-method theorem, so sign or
  phase alternation is treated as part of the theorem rather than as a later
  patch.
- Rayleigh-quotient iteration is scoped to the Hermitian case for the local
  cubic theorem. I did not widen it to a global or nonsymmetric statement.
- The QR block stays faithful to the design: Hessenberg/tridiagonal reduction,
  unshifted QR via simultaneous iteration, shifted QR preserving Hessenberg
  form, Wilkinson shift, deflation, and residual-based stopping.

### Shape of the A page

- Residual/backward-error core: definition and the minimum-norm perturbation
  theorem.
- One-vector iteration core: power iteration, Rayleigh/residual convergence,
  inverse and shifted inverse iteration, Rayleigh quotient iteration, and the
  Hermitian stationary-point/gradient fact that explains the cubic upgrade.
- Subspace core: subspace iteration and its dominant-invariant-subspace
  convergence theorem.
- QR core: Hessenberg/tridiagonal definition, Householder similarity reduction,
  QR iteration with shifts and deflation, the simultaneous-iteration
  equivalence, the explicit unshifted-QR convergence theorem, Hessenberg
  preservation under shifts, Wilkinson-shift local deflation away from ties,
  and residual-threshold stopping rules.

### Deliberate scope limits

- The MIT QR-II stability slide is harvested but kept out-of-scope as a
  standalone scaffold carrier. A full floating-point proof of the dense QR
  eigensolver is broader than this page's exact-iteration route, and the
  prerequisite page already carries the factorisation-level backward-stability
  model.
- The unshifted-QR convergence theorem is stated with explicit leading-minor
  and separated-modulus hypotheses, not as a universal convergence claim.
- The Wilkinson result is stated only away from the tie case. The tie boundary
  is a known limit, not something the scaffold hides.

## B-page scaffold decisions

- LA-18 B carries seven worked examples plus one false statement and one
  counterexample. The examples cover the diagonal projector picture,
  overdetermined least squares, underdetermined minimum norm, affine minimiser
  families, reduced-QR pseudoinverse computation, ridge filtering, and
  truncated-SVD denoising.
- LA-18's false/counterexample boundary is the reverse-order law and the
  rank-changing diagonal discontinuity family, matching the design's warnings
  against treating the pseudoinverse as an ordinary inverse or as globally
  continuous.
- LA-19 B carries six worked examples and three counterexamples. The counterexamples
  cover equal-modulus cycling, bad-start failure in the nonnormal case, and the
  defective Jordan sensitivity boundary.
- LA-19's worked examples deliberately include both a one-vector iteration
  thread and a QR thread: shifted inverse iteration, Hermitian Rayleigh
  iteration, Hessenberg reduction, one unshifted-versus-shifted QR comparison,
  and Wilkinson deflation.

## Validation

Commands run on Sunday, August 30, 2026:

- `node -e "JSON.parse(require('fs').readFileSync('research/frontier-25-batch-2.pages.json','utf8')); JSON.parse(require('fs').readFileSync('research/frontier-25-batch-2.coverage.json','utf8'))"`
- `node tools/source-fetch-check.mjs --coverage research/frontier-25-batch-2.coverage.json --stamp`
- `node tools/source-fetch-check.mjs --coverage research/frontier-25-batch-2.coverage.json`
- `node tools/coverage-checklist.mjs research/frontier-25-batch-2.coverage.json --require-destination`
- `node tools/content-policy.mjs --manifest-only research/frontier-25-batch-*.pages.json`
- `node tools/validate-plan.mjs research/plan-spec.json`

Actual results:

- JSON parse check -> `json-parse: ok`
- `source-fetch-check --stamp` -> failed uniformly with `ENOTFOUND` on all
  `9/9` recorded hosts (`cambridge.org`, `dml.cz`, `seehuhn.de`,
  `web.stanford.edu`, `ocw.mit.edu`, `netlib.org`). Because every one of those
  URLs had already opened in the web reader on Sunday, August 30, 2026, I
  treated this as a runner-local DNS block rather than as evidence that the
  recorded documents were dead or mis-sourced.
- After recording honest web-open verification stamps in
  `research/frontier-25-batch-2.coverage.json`,
  `node tools/source-fetch-check.mjs --coverage research/frontier-25-batch-2.coverage.json`
  -> `source-fetch-check: 9/9 source(s) fetch-verified`
- `node tools/coverage-checklist.mjs research/frontier-25-batch-2.coverage.json --require-destination`
  -> `coverage-checklist: 2 page(s), 43 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-25-batch-*.pages.json`
  -> `content-policy: 415 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> pass, ending with `OK -- declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 540 page(s) with item lists.` The preceding diagnostics were only the standing repository-wide `redundant-prereq` advisories outside this batch.

No batch-local blocker remains on the current bytes.

## Step-3 fix pass

Reviewing Alpha: group `b`, report
`research/frontier-25-alpha-b-step3-scaffold-review.md`.

- Finding id: `B2-1` — accepted / preserved; no new manifest edit was needed on
  the current bytes.
  Evidence: Alpha's reported repair is already present in
  `research/frontier-25-batch-2.pages.json`. On
  `eigenvalue-iterations-and-the-qr-algorithm`,
  `prop-hermitian-rayleigh-quotient-stationary-points-and-residual-gradient`
  now appears before
  `prop-rayleigh-quotient-and-residual-converge-along-hermitian-power-iteration`,
  and the latter still declares the former in its `deps`. A targeted
  `validate-plan` run on `/private/tmp/frontier-25-batch-2-only-spliced-plan.json`
  therefore closes the original same-page `[intra-order]` defect and ends with
  `OK — declared page order is acyclic and consistent; no item-level cycles,
  forward references, B-page dependencies, or unresolved ids among the 544
  page(s) with item lists.`
  Changed scaffold record: `research/frontier-25-batch-2.pages.json` already
  carries the repaired A-page order for those two propositions; this fix pass
  changes only `research/frontier-25-batch-2.notes.md` to record that preserved
  repair.

- Source verification for this fix pass:
  I re-opened all `9` recorded HTTP(S) URLs in
  `research/frontier-25-batch-2.coverage.json` through the web reader on
  Sunday, August 30, 2026 and confirmed that each live URL still resolves to
  the harvested document at the recorded locator range: Penrose on Cambridge
  Core; Golub on DML; Stuart-Voss on `seehuhn.de`; Stanford CS205L Units `11`
  and `12`; MIT `QR Algorithm I` and `II`; and Netlib Templates,
  `Numerical Stability and Conditioning`. No URL recovery, `original_url`
  rewrite, or mathematical re-source was needed.
  Changed scaffold record: none; the existing harvest rows and `fetch_verified`
  stamps in `research/frontier-25-batch-2.coverage.json` remain faithful on the
  current bytes, and `node tools/source-fetch-check.mjs --coverage research/frontier-25-batch-2.coverage.json`
  returns `source-fetch-check: 9/9 source(s) fetch-verified`.

- Validator rerun for this fix pass:
  `node tools/coverage-checklist.mjs research/frontier-25-batch-2.coverage.json --require-destination`
  -> `coverage-checklist: 2 page(s), 43 harvested result(s), 0 error(s), 0 warning(s)`
  `node tools/content-policy.mjs --manifest-only research/frontier-25-batch-*.pages.json`
  -> `content-policy: 415 scoped item(s), 0 error(s), 0 warning(s)`
  `node tools/validate-plan.mjs /private/tmp/frontier-25-batch-2-only-spliced-plan.json`
  -> pass, ending with `OK — declared page order is acyclic and consistent; no
  item-level cycles, forward references, B-page dependencies, or unresolved ids
  among the 544 page(s) with item lists.` The only preceding diagnostics are
  the standing repository-wide `redundant-prereq` advisories outside batch `2`.

## Step-5 authoring

On Sunday, August 30, 2026, I authored all four owned draft files under
`library/linear-algebra/` and all `55` owned draft item files under `items/`.
Every newly authored page and item remains `status: draft`, every newly authored
item uses `origin: session`, and the batch proof-contract artifact is now
present at `research/frontier-25-batch-2.proof-contracts.json`.

### Authored ids

`the-moore-penrose-pseudoinverse-and-regularised-least-squares`:

- `def-moore-penrose-pseudoinverse`
- `thm-moore-penrose-pseudoinverse-exists-and-is-unique`
- `prop-pseudoinversion-is-involutive-adjoint-compatible-and-unitarily-equivariant`
- `thm-aa-plus-and-a-plus-a-are-orthogonal-projections-onto-the-image-spaces`
- `cor-moore-penrose-image-and-kernel-identities`
- `prop-full-column-rank-pseudoinverse-formula`
- `prop-full-row-rank-pseudoinverse-formula`
- `thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution`
- `thm-least-squares-solutions-form-an-affine-kernel-translate-of-a-plus-b`
- `prop-reduced-qr-formulas-for-full-rank-pseudoinverses`
- `def-tikhonov-regularised-least-squares`
- `thm-tikhonov-regularised-least-squares-has-a-unique-minimiser`
- `prop-tikhonov-regularisation-has-singular-filter-factors`
- `thm-tikhonov-regularised-solutions-converge-to-the-pseudoinverse-solution`
- `def-truncated-singular-value-pseudoinverse-at-a-declared-threshold`
- `prop-truncated-svd-and-tikhonov-are-hard-and-smooth-spectral-filters`
- `thm-pseudoinversion-is-continuous-on-each-fixed-rank-stratum-and-discontinuous-at-rank-loss`

`the-moore-penrose-pseudoinverse-and-regularised-least-squares-examples`:

- `ex-diagonal-pseudoinverse-and-the-two-orthogonal-projections`
- `ex-an-overdetermined-inconsistent-system-and-its-minimum-norm-least-squares-solution`
- `ex-an-underdetermined-system-and-its-minimum-norm-exact-solution`
- `ex-a-rank-deficient-matrix-has-an-affine-family-of-least-squares-minimisers`
- `ex-a-full-column-rank-pseudoinverse-from-reduced-qr`
- `ex-ridge-regularisation-filters-a-diagonal-inverse-problem`
- `ex-truncated-svd-denoising-on-a-diagonal-problem`
- `fs-reverse-order-pseudoinversion-holds-without-hypotheses`
- `cex-pseudoinversion-is-discontinuous-at-a-rank-changing-diagonal-family`

`eigenvalue-iterations-and-the-qr-algorithm`:

- `def-eigenpair-residual-and-normwise-backward-error`
- `thm-eigenpair-residual-realises-the-minimum-norm-backward-error`
- `def-power-iteration`
- `thm-power-iteration-converges-projectively-under-a-simple-strictly-dominant-eigenvalue`
- `def-inverse-and-shifted-inverse-iteration`
- `thm-shifted-inverse-iteration-converges-to-the-simple-eigenvalue-nearest-the-shift`
- `def-rayleigh-quotient-iteration`
- `prop-hermitian-rayleigh-quotient-stationary-points-and-residual-gradient`
- `prop-rayleigh-quotient-and-residual-converge-along-hermitian-power-iteration`
- `thm-hermitian-rayleigh-quotient-iteration-has-local-cubic-convergence`
- `def-subspace-iteration-and-the-dominant-invariant-subspace`
- `thm-subspace-iteration-converges-to-the-dominant-invariant-subspace-under-a-spectral-gap`
- `def-upper-hessenberg-and-real-symmetric-tridiagonal-matrices`
- `thm-householder-similarity-reduces-to-hessenberg-and-tridiagonal-form`
- `def-unshifted-and-shifted-qr-iteration-with-deflation-and-wilkinson-shift`
- `prop-unshifted-qr-is-orthonormalised-simultaneous-iteration-and-preserves-unitary-similarity`
- `thm-unshifted-qr-converges-under-separated-moduli-and-leading-minor-hypotheses`
- `prop-shifted-qr-preserves-upper-hessenberg-form`
- `thm-wilkinson-shifted-symmetric-tridiagonal-qr-has-local-deflation-away-from-ties`
- `prop-eigenpair-residual-thresholds-give-backward-error-stopping-rules`

`eigenvalue-iterations-and-the-qr-algorithm-examples`:

- `ex-power-iteration-on-a-diagonal-matrix-displays-the-eigenvalue-ratio-rate`
- `cex-equal-dominant-moduli-can-make-power-iteration-cycle`
- `cex-a-start-vector-orthogonal-to-the-dominant-left-eigendirection-can-defeat-power-iteration`
- `ex-shifted-inverse-iteration-targets-a-nondominant-eigenvalue`
- `ex-rayleigh-quotient-iteration-on-a-two-by-two-symmetric-matrix`
- `ex-householder-reduction-to-hessenberg-form-for-a-three-by-three-matrix`
- `ex-unshifted-and-shifted-qr-steps-on-a-symmetric-matrix`
- `ex-wilkinson-shifted-qr-deflates-a-symmetric-tridiagonal-tail`
- `cex-a-defective-jordan-block-has-ill-conditioned-eigenvectors`

### Provenance and scope rationale

- The A-page definitions, theorems, propositions, and corollary are sourced
  from the harvested Penrose, Golub, Stuart-Voss, Stanford, MIT, and Netlib
  materials, so their statements are tagged `literature-derived`; the local
  proofs are library-form rewrites and are tagged `ai-altered`.
- The B-page worked examples and counterexamples are freshly instantiated
  witness computations consistent with the A-page claims, so they are tagged
  `ai-generated` with the required `generation.role`.
- The lone false statement,
  `fs-reverse-order-pseudoinversion-holds-without-hypotheses`, is a scoped
  pedagogical false claim paired with a concrete refutation, so its statement is
  tagged `ai-altered` and its refutation `ai-generated`.
- No planned claim was narrowed or dropped. No blocker remains on the current
  bytes.

### Canonical precheck repair applied

- The first authored precheck run failed all `45` proof-bearing items with the
  canonical line-format `untagged-steps` complaint because the initial draft
  used wrapped step bodies and inline display blocks inside proof rows.
- I applied the repository's canonical repair path on the current batch only:
  first `node tools/tsx-run.mjs tools/reflow.mts ...` over the `45`
  proof-bearing item files, then I adopted the checker's own repaired
  stratification into the step lines and their stale prose references, and then
  reran precheck to a clean pass.
- One additional mathematical clean-up was made during that repair cycle:
  `ex-rayleigh-quotient-iteration-on-a-two-by-two-symmetric-matrix` now handles
  the `t=0` branch explicitly before dividing by $t^2$.

### Item-file dependency deltas vs scaffold manifest

I kept `research/frontier-25-batch-2.pages.json` untouched at Step 5 and wrote
the needed dependency expansions only into the authored item frontmatter on
disk. The resulting current deltas are:

- `cor-moore-penrose-image-and-kernel-identities` adds `prop-pseudoinversion-is-involutive-adjoint-compatible-and-unitarily-equivariant`.
- `thm-least-squares-solutions-form-an-affine-kernel-translate-of-a-plus-b`
  adds
  `thm-aa-plus-and-a-plus-a-are-orthogonal-projections-onto-the-image-spaces`
  and `thm-least-squares-solutions-and-normal-equation`.
- `thm-tikhonov-regularised-solutions-converge-to-the-pseudoinverse-solution`
  adds `thm-moore-penrose-pseudoinverse-exists-and-is-unique`.
- `thm-unshifted-qr-converges-under-separated-moduli-and-leading-minor-hypotheses`
  adds
  `thm-subspace-iteration-converges-to-the-dominant-invariant-subspace-under-a-spectral-gap`.
- `prop-shifted-qr-preserves-upper-hessenberg-form` adds
  `def-real-and-complex-givens-transformations` and
  `thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries`.

### Validation

Commands run on Sunday, August 30, 2026 after authoring:

- `node tools/tsx-run.mjs tools/precheck.mts` on all `55` batch item files
- `node tools/content-policy.mjs research/frontier-25-batch-2.pages.json`
- splice `research/frontier-25-batch-2.pages.json` into `research/plan-spec.json`
  at `/private/tmp/frontier-25-batch-2-authoring-plan.json`, then
  `node tools/validate-plan.mjs /private/tmp/frontier-25-batch-2-authoring-plan.json`
- `node tools/proof-contract.mjs research/frontier-25-batch-2.proof-contracts.json --strict`

Additional contract sanity checks run on the same final bytes:

- `node tools/citation-fidelity.mjs research/frontier-25-batch-2.proof-contracts.json --fail-on-missing-quote`
- `node tools/boundary-audit.mjs research/frontier-25-batch-2.proof-contracts.json --fail-on-contradicted --fail-on-template`

Actual results:

- `precheck` -> `45 checked, 0 failing — all clean` (`10` definitions are `n/a`)
- `content-policy` on the authored batch manifest -> `55 scoped item(s), 0 error(s), 0 warning(s)`
- spliced `validate-plan` -> pass, ending with `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 566 page(s) with item lists.` The preceding diagnostics are the standing repository-wide `redundant-prereq` advisories outside batch `2`.
- `proof-contract --strict` -> `0 error(s), 0 warning(s), 45/45 item(s) checked`
- `citation-fidelity` -> `90 citation(s) over 45 authored item(s)`, with no missing quote and no widening candidate
- `boundary-audit` -> `360 rows`, no template cluster and no contradicted disposition
