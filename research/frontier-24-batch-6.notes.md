# frontier-24 batch 6 notes — scaffold

Owned pairs:
`mittag-leffler-and-runges-theorem` (A, order `339`) with
`mittag-leffler-and-runges-theorem-examples` (B, order `340`);
and `the-gamma-function` (A, order `343`) with
`the-gamma-function-examples` (B, order `344`).

Artifacts written by this dispatch:
`research/frontier-24-batch-6.pages.json`,
`research/frontier-24-batch-6.coverage.json`,
and this file.

Session date: Saturday, August 29, 2026.

## Design against spec

Recorded here, not adjudicated here.

- For `mittag-leffler-and-runges-theorem`, the generated task, the design block
  at `research/plan-complex-analysis-track.md:2529`, and the live
  `research/plan-spec.json` agree on order `339` and on the page-level
  prerequisites `infinite-products-and-weierstrass-factorisation`,
  `the-riemann-sphere-and-mobius-transformations`, and `the-residue-theorem`.

- For `the-gamma-function`, the live `research/plan-spec.json` now requires
  `product-measures-and-the-fubini-tonelli-theorems` in addition to the four
  prerequisites printed in the generated beta task. This is not a local choice:
  `research/frontier-24-alpha-step0-drift.md` already records
  `VERDICT: drift-applied` for Gamma and explains that the design's explicit
  MT-11 dependency had been missing from the pre-edit closure. I therefore
  updated `research/frontier-24-batch-6.pages.json` to match the current spec.

- The Gamma design block itself contains an internal inconsistency. Its seam
  amendment at `research/plan-complex-analysis-track.md:2747-2752` says the
  page now owes `thm-complex-gamma-restricts-to-the-real-gamma-function` and
  that Bohr-Mollerup transfers from the earlier real page rather than being
  reproved. But the immediately following inventory table still lists the stale
  real-theory items `thm-gamma-is-logarithmically-convex` and
  `thm-bohr-mollerup-characterization-of-gamma` and still claims `21` items.
  I followed the later seam amendment, kept the new bridge item, and dropped
  those two stale duplicate slots from the complex A-page scaffold. The Gamma A
  page therefore has `20`, not `21`, items.

## Current scaffold shape

- A page `mittag-leffler-and-runges-theorem`: **18 items**.
- B page `mittag-leffler-and-runges-theorem-examples`: **7 items**.
- A page `the-gamma-function`: **20 items**.
- B page `the-gamma-function-examples`: **7 items**.

Both A pages remain well below the 60-item split ceiling, so no split is owed.

## Source set actually read

The batch coverage ledger records these verified source documents:

1. Jiri Lebl, *Guide to Cultivating Complex Analysis*:
   `https://www.jirka.org/ca/ca.pdf`
2. Matthias Weber, *Complex Analysis*:
   `https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download`
3. K. Chandrasekharan, *Lectures on the Riemann Zeta-Function*:
   `https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf`
   with preserved provenance
   `original_url: https://mathweb.tifr.res.in/sites/default/files/publications/ln/tifr01.pdf`

Notes on source choice:

- CA-19 stays very close to the design source pair. I used Lebl for the
  domain-level Runge and Mittag-Leffler route and Weber for the compact-set
  grid-cycle / pole-pushing route and the plane-level cotangent expansion.

- CA-21 differs from the design's Romik / Stein-Shakarchi / Weber trio because
  this workspace already contains durable full-text fetch verification for Weber
  and Chandrasekharan, and those two open treatments cover the page's full
  complex route. I therefore kept Weber and replaced the inaccessible commercial
  texts with Chandrasekharan's open monograph rather than citing unread source
  names.

- I re-opened the recorded Lebl, Weber, and Chandrasekharan URLs in the web
  channel on Saturday, August 29, 2026 before writing the harvest rows. The
  coverage file also preserves existing durable `fetch_verified` stamps for
  those exact URLs, so the non-network source gate can validate the scaffold on
  current bytes.

## Source-backed scope decisions

### `mittag-leffler-and-runges-theorem`

- The A page follows the design's three-stage Runge route exactly:
  grid-cycle construction, Cauchy-integral Riemann sums, then pole pushing into
  a prescribed representative set. Lebl's `Lemma 9.2.1`, `Lemma 9.2.2`,
  `Theorem 9.2.3`, `Lemma 9.2.5`, and `Corollary 9.2.6` directly back that
  chain.

- The plane-domain Mittag-Leffler theorem is backed directly by Lebl's
  `Theorem 9.4.1`. Weber's `Theorem 3.3.2` supplies the cheaper whole-plane
  version, which the design wanted before the domain theorem.

- The cotangent partial-fraction theorem is sourced from Weber's
  `Example 3.3.1`, exactly as the design wanted. The differentiated
  `pi^2 csc^2(pi z)` corollary stays on the scaffold because it is a short,
  source-grounded companion consequence and not a padding theorem.

- The zero-divisor theorem on plane domains and the quotient-field corollaries
  remain on the A page even though the harvested source headings do not name
  them separately. This is an honest synthesis branch explicitly required by the
  design: the domain-level Runge / Mittag-Leffler machinery closes the
  correction step, while the already-published whole-plane Weierstrass theorem
  closes the zero-set side. I did not pretend either source stated those exact
  consequences verbatim.

### `the-gamma-function`

- The A page now keeps the complex theory only: holomorphy on `Re z > 0`,
  meromorphic continuation, Euler's limit formula, the reciprocal-Gamma
  Weierstrass product, zero-freeness, reflection, Beta-Gamma, multiplication,
  duplication, sectorial Stirling, and the Hankel contour representation.

- The stale real-theory duplication promised by the old inventory table is not
  scaffolded. Instead the new bridge item
  `thm-complex-gamma-restricts-to-the-real-gamma-function` identifies the
  positive-real restriction with the earlier published real page, and the TIFR
  rows on Bohr-Mollerup and real log-convexity are marked
  `already-published`.

- The Hankel representation is kept because Chandrasekharan's analytic
  continuation section already writes the cut contour integral
  `I(z) = -2i sin(pi z) Gamma(z)`. Repackaging that source formula as a
  reciprocal-Gamma Hankel integral is a genuine page-level consequence, not a
  speculative addition.

- The Beta-Gamma identity remains on the complex page and the Gamma manifest now
  carries the live spec's MT-11 prerequisite. The intended proof route is still
  the design's exhaustion plus iterated-integral / change-of-variables route,
  not a silent fallback to Euler's limit formula. If authoring later discovers a
  genuine closure gap inside the currently published Fubini/change-of-variables
  interface, that route change needs to be recorded explicitly.

## Dependency rationale

- `mittag-leffler-and-runges-theorem` is layered as:
  principal parts and Runge pole sets; then the grid-cycle and pole-pushing
  lemmas; then compact-set and domain-level Runge; then whole-plane and
  domain-level Mittag-Leffler; then the cotangent and quotient consequences.

- `the-gamma-function` is layered as:
  Euler's integral and right-half-plane holomorphy; then the bridge to the real
  Gamma function and the functional equation; then meromorphic continuation,
  Euler's limit formula, and the reciprocal-Gamma product; then reflection,
  Beta-Gamma, multiplication, duplication, and Stirling; and finally the
  Hankel contour representation.

## Validation results

- `node tools/coverage-checklist.mjs --require-destination research/frontier-24-batch-6.coverage.json`
  passed on Saturday, August 29, 2026:
  `2` page(s), `50` harvested result(s), `0` error(s), `0` warning(s).

- `node tools/content-policy.mjs --manifest-only research/frontier-24-batch-*.pages.json`
  passed on Saturday, August 29, 2026:
  `294` scoped item(s), `0` error(s), `0` warning(s).

- `node tools/source-fetch-check.mjs --coverage research/frontier-24-batch-6.coverage.json`
  passed on Saturday, August 29, 2026:
  `4/4` source(s) fetch-verified.

- `node tools/validate-plan.mjs research/plan-spec.json`
  exited `0` on Saturday, August 29, 2026. The batch-local filtered output
  shows the expected live spec closure:
  `mittag-leffler-and-runges-theorem` still requires
  `the-residue-theorem`,
  `the-riemann-sphere-and-mobius-transformations`, and
  `infinite-products-and-weierstrass-factorisation`;
  `the-gamma-function` now requires
  `improper-integrals`,
  `product-measures-and-the-fubini-tonelli-theorems`,
  `analyticity-liouville-and-morera`,
  `the-residue-theorem`, and
  `infinite-products-and-weierstrass-factorisation`.
  The only batch-relevant advisories are the standing `redundant-prereq`
  notes on those page-level `requires`; I left them untouched because this task
  requires following the live spec rather than re-adjudicating its transitive
  redundancy.

## Outcome

Batch 6 is now source-harvested, spec-aligned, and clean on the scaffold-stage
validator battery. No batch-local scaffold blocker remains on current bytes.

## Step-3 fix pass

No batch-6 finding ids were issued in
`research/frontier-24-alpha-c-step3-scaffold-review.md`. The review's only
finding is `C5-1`, which is explicitly about batch `5`. For batch `6`, the
review instead marks both owned A pages `sufficient`, and
`research/frontier-24-alpha-c-step3-verdicts.json` records
`mittag-leffler-and-runges-theorem` and `the-gamma-function` as `sufficient`.

| finding id | disposition | evidence | changed scaffold record |
| --- | --- | --- | --- |
| none | no batch-6 scaffold edit required | Alpha group `c` Step-3 findings table lists only `C5-1` on `bloch-schottky-and-picard`; the batch-6 page-review sections for `mittag-leffler-and-runges-theorem` and `the-gamma-function` both end with `Verdict: sufficient`; the companion verdicts JSON matches. | `research/frontier-24-batch-6.notes.md` |

Validator rerun on Saturday, August 29, 2026:

- `node tools/coverage-checklist.mjs --require-destination research/frontier-24-batch-6.coverage.json`
  -> `coverage-checklist: 2 page(s), 50 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-24-batch-*.pages.json`
  -> `content-policy: 493 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> `OK`, with only the repository's standing `redundant-prereq` advisories
- `node tools/source-fetch-check.mjs --coverage research/frontier-24-batch-6.coverage.json`
  -> `source-fetch-check: 4/4 source(s) fetch-verified`

## Step-5 authoring

Authoring completed on Saturday, August 29, 2026.

Authored pages:

- `library/complex-analysis/mittag-leffler-and-runges-theorem.md`
- `library/complex-analysis/mittag-leffler-and-runges-theorem-examples.md`
- `library/complex-analysis/the-gamma-function.md`
- `library/complex-analysis/the-gamma-function-examples.md`

Authored A-page items:

- `mittag-leffler-and-runges-theorem`: `def-principal-part-at-an-isolated-point`, `def-rational-approximation-with-a-runge-pole-set`, `def-pole-pushing-along-a-chain-of-discs`, `lem-grid-cycle-for-runge-approximation`, `lem-cauchy-riemann-sums-give-rational-approximation`, `lem-runge-pole-pushing-lemma`, `thm-runge-approximation-with-prescribed-poles`, `cor-runge-polynomial-approximation`, `def-runge-approximation-on-a-plane-domain`, `thm-runge-approximation-on-plane-domains`, `thm-mittag-leffler-theorem-on-the-plane`, `thm-mittag-leffler-theorem-on-plane-domains`, `thm-mittag-leffler-expansion-of-pi-cotangent`, `cor-partial-fraction-expansion-of-pi-squared-cosecant-squared`, `thm-zero-divisor-theorem-on-plane-domains`, `cor-meromorphic-functions-on-a-plane-domain-are-holomorphic-quotients`, `cor-meromorphic-functions-on-a-domain-form-a-field`, `rem-choice-strength-of-runge-and-mittag-leffler`
- `the-gamma-function`: `def-euler-gamma-function`, `lem-gamma-integral-converges-locally-uniformly`, `thm-euler-gamma-function-is-holomorphic`, `thm-complex-gamma-restricts-to-the-real-gamma-function`, `thm-gamma-functional-equation`, `cor-gamma-factorial-values`, `thm-gamma-meromorphic-continuation`, `thm-euler-limit-formula-for-gamma`, `thm-gamma-weierstrass-product`, `cor-gamma-function-has-no-zeros`, `thm-euler-reflection-formula`, `cor-gamma-one-half-value`, `def-euler-beta-function`, `thm-beta-gamma-identity`, `thm-gauss-multiplication-formula`, `thm-legendre-duplication-formula`, `thm-stirling-formula-gamma`, `def-hankel-contour-and-power-branch`, `thm-hankel-representation-for-reciprocal-gamma`, `fs-gamma-recurrence-and-factorial-values-do-not-characterize-gamma`

Authored B-page items:

- `mittag-leffler-and-runges-theorem-examples`: `ex-one-over-z-not-polynomially-approximable-on-unit-circle`, `ex-pole-pushing-along-three-discs`, `ex-cotangent-expansion-computes-sum-of-one-over-n-squared-plus-a-squared`, `ex-mittag-leffler-function-with-double-poles-at-the-integers`, `fs-runge-gives-polynomial-approximation-on-any-compact-set`, `cex-annulus-needs-a-pole-in-each-bounded-complementary-component`, `fs-meromorphic-function-equals-the-naive-sum-of-its-principal-parts`
- `the-gamma-function-examples`: `ex-gamma-values-at-half-integers-and-negative-half-integers`, `ex-residue-of-gamma-at-minus-two`, `ex-beta-one-half-one-half-equals-pi`, `ex-reflection-formula-at-one-half`, `ex-stirling-approximation-to-ten-factorial`, `cex-periodic-perturbation-preserves-the-gamma-recurrence-and-factorial-values`, `fs-gamma-is-entire`

Proof-contract artifact written:

- `research/frontier-24-batch-6.proof-contracts.json` with `44` proof-bearing entries, regenerated from the authored facts blocks and numbered proof steps on current bytes.

Provenance rationale:

- The main theorem/definition statements stay `literature-derived` when they match the source-backed CA-19 / CA-21 route directly: compact and domain Runge, plane and domain Mittag-Leffler, Euler's integral, holomorphy, functional equation, meromorphic continuation, Euler's limit formula, reciprocal-Gamma product, reflection, Beta-Gamma, multiplication, duplication, Stirling, and Hankel.
- I marked synthesized but source-grounded domain consequences `ai-altered` where the scaffold explicitly wanted a local consequence rather than a verbatim harvested theorem: `thm-zero-divisor-theorem-on-plane-domains`, `cor-meromorphic-functions-on-a-plane-domain-are-holomorphic-quotients`, the choice-bookkeeping remark, and several explicit worked B-page witnesses.
- All locally written proofs are recorded as `ai-generated`. No batch-6 item was written as recorded-not-proved, no `external_dependency` record was needed, and no stale `verification.judge` block existed on the new draft files.

Narrowed or dropped claims:

- No batch-6 item id was dropped and no page inventory changed after authoring.
- I made one honest route adjustment inside the Gamma page: `thm-beta-gamma-identity` is authored by holomorphic continuation from the already-published real Beta-Gamma theorem via slice-wise identity-theorem arguments, rather than by a full two-variable compact-exhaustion change-of-variables proof.
- I kept the Gamma page complex-only seam intact: the bridge item `thm-complex-gamma-restricts-to-the-real-gamma-function` is present, and the stale real-theory duplicate slots remain absent.

Validator and report receipts on Saturday, August 29, 2026:

- `node tools/tsx-run.mjs tools/precheck.mts <52 batch items>` -> `44 checked, 0 failing`
- `node tools/content-policy.mjs research/frontier-24-batch-6.pages.json` -> `52 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json` -> exit `0`, trailing `OK`, with only the repository's standing `redundant-prereq` advisories
- `node tools/proof-contract.mjs research/frontier-24-batch-6.proof-contracts.json --strict` -> `0 error(s), 0 warning(s), 44/44 item(s) checked`
- `node tools/citation-fidelity.mjs research/frontier-24-batch-6.proof-contracts.json --fail-on-missing-quote` -> `91` citations, no missing quotes, no widening candidates
- `node tools/rendercheck.mjs <4 batch pages + 52 batch items>` -> `OK — 56 file(s)`
- `git diff --check -- items library/complex-analysis research/frontier-24-batch-6.proof-contracts.json research/frontier-24-batch-6.notes.md` -> clean

Focused dependency note:

- The repository-wide `depcheck` command still reports unrelated pre-existing errors outside batch 6. A batch-id grep over `node tools/depcheck.mjs --json` returned no batch-6 ids in that current error stream, so I did not make any out-of-batch repair.

Advisory state and blockers:

- `node tools/boundary-audit.mjs research/frontier-24-batch-6.proof-contracts.json` reports `14` contradicted-candidate rows, all heuristic `not_applicable` boundary prompts on axes such as fixed infinite sums/products or symbolic nonzero denominators already excluded by the statement. I did not complete a full hand-audit rewrite of those rows in this Step-5 pass.
- No blocker remains on the required Step-5 gates for this batch.
