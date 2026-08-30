# frontier-24 · Beta-3 · batch notes — `direct-matrix-factorisations-lu-cholesky-and-qr` (step 1 scaffold)

Run `frontier-24`, batch `3`, one A/B pair, category `linear-algebra`.
Author: Beta-3. Session date: Saturday, August 29, 2026.
Design sections read:
[research/plan-algebra-track-expansion-v2.md](/Users/ianx/Projects/prestige-math-library/research/plan-algebra-track-expansion-v2.md:675)
and
[research/frontier-24-alpha-step0-drift.md](/Users/ianx/Projects/prestige-math-library/research/frontier-24-alpha-step0-drift.md:17).

Artifacts owned by this batch:
`research/frontier-24-batch-3.pages.json`,
`research/frontier-24-batch-3.coverage.json`,
and this file.

---

## 1. Shape and split check

- `direct-matrix-factorisations-lu-cholesky-and-qr` (A): **24 items**.
- `direct-matrix-factorisations-lu-cholesky-and-qr-examples` (B): **10 items**.

The A page stays well below the 60-item ceiling, so no split is proposed.

High-level shape:

- The page starts with **triangular solves**, because every direct factorisation
  spends them and the design explicitly wants their correctness, uniqueness, and
  scalar-operation count stated rather than left implicit.
- The LU block is deliberately split into **three distinct scopes**:
  unpivoted normalised LU/LDU, block LU with its Schur complement, and PLU with
  partial pivoting. The design warns that these hypotheses are not
  interchangeable, so I kept their items separate instead of hiding them inside
  one omnibus theorem.
- The PLU stability theorem is placed **after** the exact PLU existence theorem
  and depends on the LA-16 floating-point model, `theta_n` lemma, and
  dot-product bound. This keeps conditioning and arithmetic-model assumptions on
  the earlier page where the design put them.
- The Cholesky block keeps the **positive-diagonal convention visible** at the
  definition level, so uniqueness and the semidefinite failure are spent
  honestly. I localized the Hermitian positive-definite convention inside the
  definition item rather than assuming a pre-existing matrix-level definition
  that the library does not actually have on disk.
- The QR block treats **abstract existence as already published** and owns only
  the computational constructions, their dense operation counts, Householder
  backward stability, the exact rank-profile theorem for column-pivoted QR, and
  the least-squares consequence that avoids condition-number squaring.

## 2. Design control and drift

The generated task requires that design-vs-spec disagreements be recorded here
and that `research/plan-spec.json` win locally if any appear.

### Finding 1 — no design/spec drift for this pair

- The design block `LA-17` and the live plan spec agree on the A-page order
  `168.003`, the B-page order `168.004`, and the direct page prerequisite
  `matrix-norms-condition-numbers-and-numerical-stability`.
- The run's drift record at
  [research/frontier-24-alpha-step0-drift.md](/Users/ianx/Projects/prestige-math-library/research/frontier-24-alpha-step0-drift.md:17)
  already marks this pair `no-drift`.

No batch-local prerequisite or order repair was needed.

## 3. Source stack and support

Only the A page carries the harvest ledger; the B page is a leaf companion of
worked examples and counterexamples.

### Source list

- Tobin A. Driscoll and Richard J. Braun, *Fundamentals of Numerical
  Computation*:
  `https://fncbook.com/efficiency/`,
  `https://fncbook.com/pivoting/`,
  `https://fncbook.com/structure/`,
  `https://fncbook.com/qr/`,
  and
  `https://fncbook.com/house/`
- David Bindel, Cornell CS 4220, Spring 2026:
  `https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-02-09.html`,
  `https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-02-23.html`,
  `https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-02-25.html`,
  and
  `https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-02-13.html`

This keeps the design's required two-treatment backing: one textbook treatment
plus one independent full lecture-note treatment.

### What these support in the scaffold

- The FNC textbook is the **primary treatment** for direct factorisations as an
  algorithmic lane: triangular substitution and its cost, row pivoting, PLU,
  Cholesky, full/thin QR, Householder and Givens constructions, and the dense
  QR flop counts.
- Cornell's notes are the independent treatment for the **ownership seams the
  design cares about most**: block LU from explicit block algebra, the Cholesky
  recursion and positive-definiteness converse, the distinction between pivoting
  for existence versus stability, the practical Householder-versus-Gram-Schmidt
  boundary, and factor selection through column-pivoted QR.
- The QR least-squares theorem is backed from both sides: FNC gives the thin-QR
  solve explicitly, while Cornell states the same reduced solve in the
  computational lecture narrative rather than only as an abstract QR existence
  corollary.

## 4. Dependency rationale and proof strategy

- **Triangular solves come first and stay elementary.** Their proof needs only
  the triangular-system definition, induction over rows, and a rowwise flop sum.
  Every later solve theorem on the page cites this item rather than reproving
  it.
- **Unpivoted LU is built in the exact block-elimination order.** The block LU
  theorem is the real engine, and the leading-principal-minor criterion is then
  an induction with determinant bookkeeping. The separate multiplier theorem
  keeps the "what elimination stores" statement visible for later examples and
  fill-in.
- **PLU is not smuggled in as just 'LU with row swaps'.** I introduced a
  dedicated permutation/pivoting definition item, then a pure existence theorem,
  and only after that the floating-point backward-error theorem. This matches
  the design's trap that existence, conventions, and stability are different
  obligations.
- **Cholesky is treated as a positive-definite factorisation, not just a fast
  algorithm.** The main theorem proves the exact equivalence with Hermitian
  positive definiteness and uniqueness under the positive-diagonal convention;
  the real symmetric leading-principal-minor test is then attached as a second
  theorem rather than merged into the existence proof.
- **Computational QR does not re-mint the published abstract QR theorem.** The
  abstract factorisation stays `already-published`; this page owns the reflector
  and rotation tools, the constructive dense QR algorithms, Householder
  backward stability, the exact rank-profile statement for column-pivoted QR,
  and the reduced-QR least-squares route that avoids the normal-equation
  condition square.

## 5. Local scaffold choices that matter later

- **Hermitian positive definite is made explicit inside the Cholesky
  definition.** The library has form-level Hermitian vocabulary and a real
  symmetric positive definiteness criterion, but it does not have a standalone
  published matrix-level HPD definition to cite. I therefore wrote the minimal
  local convention instead of pretending it already exists.
- **The Schur-complement seam is used but not widened.** LA-17 cites the
  published form-page Schur-complement idea in notes and source harvest, but the
  new block LU item only owns the matrix-factorisation use that this page
  genuinely needs.
- **Column-pivoted QR is kept exact and deliberately modest.** The theorem only
  gives the rank-r leading triangular block and zero trailing block. I did not
  promote greedy pivoting into a strong rank-revealing theorem, exactly as the
  design forbids.
- **QR existence is not duplicated.** The new QR definition item is explicitly
  computational and references the published square QR theorem only as prior
  interface.

## 6. Known limits and downstream caution

- This page does **not** build complete pivoting, rook pivoting, sparse direct
  solvers, or data-structure-specific cache blocking. The block LU item is the
  honest matrix-algebra statement needed later, not a performance-engineering
  page.
- The page does **not** promote column-pivoted QR into a strong rank-revealing
  or approximation theorem. Low-rank approximation and regularisation stay with
  `the-moore-penrose-pseudoinverse-and-regularised-least-squares`.
- The page does **not** widen Cholesky into indefinite `LDL^T` factorisation.
  The design only asked for positive-definite Cholesky, and the indefinite
  inertia story already belongs to the published bilinear-forms page.
- The page does **not** compare Householder QR with Gram-Schmidt as a separate
  stability theorem. Gram-Schmidt remains background and caution, while the new
  owned stability statement is Householder QR under LA-16's arithmetic model.

## 7. Validator results

Commands run on Saturday, August 29, 2026:

- `node tools/coverage-checklist.mjs research/frontier-24-batch-3.coverage.json --require-destination`
- `node tools/content-policy.mjs --manifest-only research/frontier-24-batch-*.pages.json`
- `node tools/validate-plan.mjs research/plan-spec.json`
- `node tools/source-fetch-check.mjs --coverage research/frontier-24-batch-3.coverage.json --stamp`
- `node tools/url-sweep.mjs --coverage research/frontier-24-batch-3.coverage.json --out /tmp/frontier-24-batch-3-url-liveness.json --recover --fail-on-dead`
- `git diff --check -- research/frontier-24-batch-3.pages.json research/frontier-24-batch-3.coverage.json research/frontier-24-batch-3.notes.md`

Results:

- `coverage-checklist`:
  `coverage-checklist: 1 page(s), 41 harvested result(s), 0 error(s), 0 warning(s)`
- whole-run `content-policy --manifest-only`:
  `content-policy: 91 scoped item(s), 0 error(s), 0 warning(s)`
- `validate-plan` passed on the live plan and ended with:

  ```text
  OK — declared page order is acyclic and consistent; no item-level cycles, forward
  references, B-page dependencies, or unresolved ids among the 512 page(s) with item lists.
  NOTE: 781 planned page(s) carry no item list yet (marked * above). Their reading
  order is guaranteed; their item dependencies are not yet asserted, so re-run this
  after writing each page's items.
  ```

- `source-fetch-check --stamp` failed on every external URL from the shell with
  transport-wide DNS resolution errors:

  ```text
  ERROR fetch-check-dead: direct-matrix-factorisations-lu-cholesky-and-qr: https://fncbook.com/efficiency/ — ENOTFOUND
  ERROR fetch-check-dead: direct-matrix-factorisations-lu-cholesky-and-qr: https://fncbook.com/pivoting/ — ENOTFOUND
  ERROR fetch-check-dead: direct-matrix-factorisations-lu-cholesky-and-qr: https://fncbook.com/structure/ — ENOTFOUND
  ERROR fetch-check-dead: direct-matrix-factorisations-lu-cholesky-and-qr: https://fncbook.com/qr/ — ENOTFOUND
  ERROR fetch-check-dead: direct-matrix-factorisations-lu-cholesky-and-qr: https://fncbook.com/house/ — ENOTFOUND
  ERROR fetch-check-dead: direct-matrix-factorisations-lu-cholesky-and-qr: https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-02-09.html — ENOTFOUND
  ERROR fetch-check-dead: direct-matrix-factorisations-lu-cholesky-and-qr: https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-02-23.html — ENOTFOUND
  ERROR fetch-check-dead: direct-matrix-factorisations-lu-cholesky-and-qr: https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-02-25.html — ENOTFOUND
  ERROR fetch-check-dead: direct-matrix-factorisations-lu-cholesky-and-qr: https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-02-13.html — ENOTFOUND
  source-fetch-check: 0/9 source(s) fetch-verified (0 newly stamped), 9 FAILED
  ```

- `url-sweep` produced the same shell-side transport failure and no archive
  recovery:

  ```text
  url-sweep: 0/9 live; 9 failed; 0 recoverable from the archive; 0 suspect -> /tmp/frontier-24-batch-3-url-liveness.json
  FAIL 0 https://fncbook.com/efficiency/ — curl: (6) Could not resolve host: fncbook.com
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://fncbook.com/house/ — curl: (6) Could not resolve host: fncbook.com
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://fncbook.com/pivoting/ — curl: (6) Could not resolve host: fncbook.com
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://fncbook.com/qr/ — curl: (6) Could not resolve host: fncbook.com
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://fncbook.com/structure/ — curl: (6) Could not resolve host: fncbook.com
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-02-09.html — curl: (6) Could not resolve host: www.cs.cornell.edu
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-02-13.html — curl: (6) Could not resolve host: www.cs.cornell.edu
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-02-23.html — curl: (6) Could not resolve host: www.cs.cornell.edu
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-02-25.html — curl: (6) Could not resolve host: www.cs.cornell.edu
    no archived snapshot under any host variant — re-sourcing is justified here
  ```

- `git diff --check` on the three edited batch artifacts was clean.

Step-1 blocker at close:

- The scaffold structure is green.
- The batch coverage harvest is green.
- Durable fetch and liveness receipts are red only because this runner cannot
  resolve external hosts from the shell. The exact cited URLs were nevertheless
  opened and read through the web reader during this scaffold pass, so I kept
  the verified URLs and did **not** fabricate `fetch_verified` stamps or replace
  sources merely to satisfy a transport-wide shell failure.

Orchestrator resolution on Saturday, August 29, 2026:

- The orchestrator reran `source-fetch-check --stamp` from the network-enabled
  parent environment: `9/9 source(s) fetch-verified (9 newly stamped)`.
- The orchestrator reran `url-sweep --recover --fail-on-dead` from the same
  environment: `9/9 live; 0 failed; 0 recoverable; 0 suspect`.
- The shell-DNS blocker is resolved; the coverage ledger now carries genuine
  fetch receipts for every cited URL.

## Step-3 fix pass

No batch-3 finding ids were issued in
`research/frontier-24-alpha-b-step3-scaffold-review.md`. The review's findings
table lists only `B9-1` and `B9-2`, both explicitly on batch `9`, while the
page-review section for `direct-matrix-factorisations-lu-cholesky-and-qr` ends
with `Verdict: sufficient`. The companion
`research/frontier-24-alpha-b-step3-verdicts.json` likewise records batch `3`
as `sufficient`.

| finding id | disposition | evidence | changed scaffold record |
| --- | --- | --- | --- |
| none | no batch-3 scaffold edit required | Alpha group `b` Step-3 findings table names only `B9-1` and `B9-2` on the two batch-9 differential-geometry pages; the batch-3 page-review section for `direct-matrix-factorisations-lu-cholesky-and-qr` concludes `Verdict: sufficient`; the companion verdicts JSON matches. | `research/frontier-24-batch-3.notes.md` |

Source verification for this fix pass on Saturday, August 29, 2026:

- I re-opened all nine recorded batch-3 source URLs through the web reader at
  the locators recorded in `research/frontier-24-batch-3.coverage.json`. The
  five FNC pages still expose the harvested sections on flop counting and
  triangular solves, row pivoting and PLU stability, matrix structure and
  Cholesky, QR factorization and least squares, and computing QR
  factorizations. The four Cornell lecture pages still expose the harvested
  headings for blocked LU and Cholesky, least squares and QR, factor selection
  and pivoted QR, and the February 13, 2026 notes on definiteness and
  structure. Changed scaffold record: no URL recovery, archive substitution, or
  re-sourcing was needed.

Validator rerun on Saturday, August 29, 2026:

- `node tools/coverage-checklist.mjs research/frontier-24-batch-3.coverage.json --require-destination`
  -> `coverage-checklist: 1 page(s), 41 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-24-batch-*.pages.json`
  -> `content-policy: 493 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> `OK`, with only the repository's standing `redundant-prereq` advisories
- `node tools/source-fetch-check.mjs --coverage research/frontier-24-batch-3.coverage.json`
  -> `source-fetch-check: 9/9 source(s) fetch-verified`

## Step-5 authoring

Authoring completed on Saturday, August 29, 2026, for the full batch-3 A/B
pair.

Authored page files:

- `library/linear-algebra/direct-matrix-factorisations-lu-cholesky-and-qr.md`
- `library/linear-algebra/direct-matrix-factorisations-lu-cholesky-and-qr-examples.md`

Authored A-page item ids:

- `def-forward-and-back-substitution-for-triangular-systems`
- `thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost`
- `def-normalised-lu-factorisation`
- `def-ldu-factorisation`
- `thm-normalised-lu-and-ldu-factorisations-are-unique`
- `def-block-lu-factorisation`
- `thm-block-lu-factorisation-via-an-invertible-leading-block`
- `thm-unpivoted-unit-lower-lu-exists-iff-leading-principal-minors-are-nonzero`
- `thm-gaussian-elimination-multipliers-produce-the-normalised-lu-factors`
- `def-permutation-matrix-partial-pivoting-and-pivot-growth`
- `thm-plu-factorisation-exists-for-every-square-matrix-and-detects-singularity`
- `thm-gaussian-elimination-with-partial-pivoting-computes-a-nearby-factorisation-with-pivot-growth-bound`
- `def-cholesky-factorisation-with-positive-diagonal`
- `thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique`
- `thm-positive-leading-principal-minors-are-equivalent-to-positive-cholesky-pivots`
- `thm-cholesky-solves-hermitian-positive-definite-systems-and-has-half-the-lu-factorisation-cost`
- `def-householder-reflector`
- `def-real-and-complex-givens-transformations`
- `thm-householder-reflectors-and-givens-transformations-are-unitary-and-annihilate-targeted-entries`
- `def-full-reduced-and-column-pivoted-computational-qr-factorisations`
- `thm-successive-householder-or-givens-transformations-produce-full-and-reduced-qr-with-operation-counts`
- `thm-householder-qr-is-backward-stable-in-the-standard-floating-point-model`
- `thm-exact-column-pivoted-qr-of-a-rank-r-matrix-has-an-invertible-leading-block-and-zero-trailing-block`
- `thm-reduced-qr-solves-full-column-rank-least-squares-without-squaring-the-condition-number`

Authored B-page item ids:

- `cex-invertible-matrix-can-fail-unpivoted-lu-at-the-first-pivot`
- `ex-plu-factorisation-by-hand`
- `ex-ldu-factorisation-and-its-unique-diagonal-pivots`
- `ex-block-lu-factorisation-and-a-schur-complement-solve`
- `ex-cholesky-factorisation-and-solve`
- `cex-indefinite-and-semidefinite-matrices-fail-positive-diagonal-cholesky`
- `ex-householder-qr-factorisation-by-hand`
- `ex-givens-qr-on-a-sparse-matrix`
- `ex-reduced-qr-least-squares-versus-normal-equations`
- `ex-sparse-gaussian-elimination-can-create-fill-in`

Proof-contract output authored:

- `research/frontier-24-batch-3.proof-contracts.json`

Provenance rationale:

- Core definitions and theorem statements are standard source-backed numerical
  linear algebra results, so they were tagged `literature-derived` except where
  the authored text materially narrowed or localized the claim.
- Worked examples and counterexamples were written as source-backed but
  concretely adapted witnesses, so most were tagged `ai-altered`; the proofs are
  local authored derivations and were tagged `ai-generated` or `ai-altered`
  according to how directly they followed the source example.
- The proof-contract citation rows were regenerated from the final on-disk items
  so the contract reflects the proof actually written after the precheck-format
  repairs.

Narrowed or corrected claims:

- `thm-normalised-lu-and-ldu-factorisations-are-unique` was deliberately
  narrowed from the scaffold wording to the nonzero-pivot case. The stronger
  blanket uniqueness claim is false: zero pivots leave lower-triangular data
  undetermined, so the authored theorem now states the honest uniqueness domain.
- The Householder stability item was authored under the planned manifest id
  `thm-householder-qr-is-backward-stable-in-the-standard-floating-point-model`;
  I corrected an initial local overlong id ending in
  `...standard-relative-floating-point-model` so the authored item and page match
  the batch manifest exactly.
- No planned item was dropped.

Validator evidence for Step 5:

- `node tools/tsx-run.mjs tools/precheck.mts` on the 25 proof-bearing batch-3
  items -> `25 checked, 0 failing — all clean`
- `node tools/validate-plan.mjs research/plan-spec.json` -> `OK`, with only the
  repository's standing `redundant-prereq` advisories outside this batch
- `node tools/content-policy.mjs research/frontier-24-batch-3.pages.json`
  -> `content-policy: 34 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/rendercheck.mjs` on the two new page files plus the 34 batch-3
  item files -> `OK — 36 file(s)`
- `node tools/proof-contract.mjs research/frontier-24-batch-3.proof-contracts.json --strict`
  -> `proof-contract: 0 error(s), 0 warning(s), 25/25 item(s) checked`

Blockers:

- No live Step-5 blocker remains on batch 3.
