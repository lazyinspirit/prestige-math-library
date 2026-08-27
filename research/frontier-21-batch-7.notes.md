# frontier-21 batch 7 notes — step 1 scaffold

Owned pair: `the-lebesgue-and-riemann-integrals-compared` (A, order 288.017)
with `the-lebesgue-and-riemann-integrals-compared-examples` (B, order 288.018).

Artifacts written in this dispatch:
`research/frontier-21-batch-7.pages.json`,
`research/frontier-21-batch-7.coverage.json`,
and this file. Nothing else was edited.

## Design against spec

Recorded, not adjudicated here.

- The MT-9 design block at `research/plan-measure-theory-track.md` lines
  2486-2569 names a long prerequisite list:
  MT-8, MT-4, MT-6, `the-riemann-integral`,
  `the-riemann-integral-in-rn-and-jordan-content`,
  `improper-integrals`,
  `bounded-variation-and-riemann-stieltjes`,
  `cantor-set-baire-and-measure-zero`,
  and `the-fundamental-theorems-of-calculus`.
- `research/plan-spec.json` now gives the current immediate `requires` for MT-9
  as `the-lebesgue-integral-and-the-convergence-theorems-examples` and
  `improper-integrals`.
- `research/frontier-21-alpha-step0-drift.md` already records the run-level
  adjudication: the transitive closure from
  `the-lebesgue-integral-and-the-convergence-theorems-examples` already contains
  every other named prerequisite from the design block, and Alpha added the one
  real missing edge, `improper-integrals`, to the spec.

Per the dispatch, I did not choose between the design's long prerequisite prose
and the spec inside the batch. I followed the current spec and recorded the
disagreement here.

## Scope and duplicate-control choices

- I did **not** re-mint the Lebesgue-null restatement of Lebesgue's criterion.
  That is already published as
  `cor-riemann-integrability-and-lebesgue-null-discontinuity-sets`, so MT-9
  only needs to cite it in authoring.
- I also did **not** re-mint the Jordan/Lebesgue agreement theorem or the
  strict-inclusion Jordan witness. Those are already published as
  `thm-jordan-measurable-sets-are-lebesgue-measurable-with-equal-content` and
  `cex-rational-points-in-unit-square-have-no-jordan-content`.
- `thm-discontinuity-set-is-f-sigma` already exists, exactly as the MT-9 design
  asked step 1 to check, so the batch cites it instead of duplicating it.
- Thomae's function and the general false statement
  `fs-pointwise-limit-of-riemann-integrable-is-integrable` are already
  published elsewhere. I did not duplicate either claim. Their MT-9 role is
  absorbed by authoring-time summary prose and by the new open-dense monotone
  `L^1` limit example.
- The B-page Dirichlet comparison witness is intentionally scaffolded as a new
  synthesis example even though its two constituents are already published:
  `cex-dirichlet-function-is-positive-but-has-zero-lebesgue-integral` and
  `cex-dirichlet-is-not-riemann-integrable`. The new item is the seam-page
  comparison statement, not a silent duplicate of either constituent.
- I **did** add a dedicated local witness for the false upgrade
  `Riemann integrable => Borel`: the new B-page false statement
  `fs-every-riemann-integrable-function-is-borel-measurable` uses the
  measurable-non-Borel Cantor-subset route already built on MT-5, but spends it
  on the interval-integrability seam MT-9 actually needs.
- The two candidate-for-undeferral catalogue remarks,
  `rem-semicontinuous-not-ae-riemann` and
  `rem-null-set-not-discontinuity-set`, are scaffolded here as proof-bearing
  B-page counterexamples exactly because the design says MT-9 should discharge
  them with already-in-scope machinery.
- Arzela's bounded convergence theorem is scaffolded as the Riemann corollary
  the design wants. Its measure-theoretic bounded-convergence source theorem is
  already published as `cor-bounded-convergence-on-a-finite-measure-space`, so
  MT-9 only adds the Riemann comparison wrapper.

## Source set actually read

Independent textbook treatments harvested for this pair:

1. Richard F. Bass, *Real Analysis for Graduate Students*, Version 5.0.
   Read the chapter-9 table-of-contents row, Section 9.1 through Theorem 9.1
   and Examples 9.2-9.3, and Exercises 9.2, 9.4, 9.6, and 9.7.
2. Richard L. Wheeden and Antoni Zygmund, *Measure and Integral: An
   Introduction to Real Analysis*.
   Read Section 5 from the heading `Riemann and Lebesgue Integrals` through
   Theorems (5.52) and (5.53), Corollary (10.32), and Theorem (11.11).
3. John K. Hunter, *Measure Theory*.
   Read Section 2.6 from the heading `Borel sets` through Example 2.22 for the
   explicit measurable-non-Borel subset of the Cantor set.

This satisfies the standing requirement of two independent primary treatments
with harvestable tables of contents, plus a third independent lecture-note
treatment for the repaired non-Borel witness.

## Route and trap compliance

- The main comparison theorem is routed through Darboux step envelopes and the
  completeness of Lebesgue measure, exactly as the design requires. The notes
  and scaffold do **not** weaken that to a bare citation of measurability.
- The Borel-function consequence is kept as a cheap corollary of the envelope
  lemma, since that is the design's stated consequence and uses no new
  machinery.
- The improper-integral agreement theorem is restricted to the nonnegative
  half-line case the design actually wants. The sign-changing failure is pushed
  to the B-page sine counterexample.
- The Riemann-Stieltjes agreement theorem uses the precise
  right-continuous-increasing `F : R -> R` and the `(a,b]` convention of the
  published Lebesgue-Stieltjes page. I did not blur it to `[a,b]`, which would
  ignore the possible atom at `a`.
- The false upgrade `Riemann integrable => Borel` is now discharged locally by
  the indicator of a measurable non-Borel subset of the Cantor set. That keeps
  the witness inside the current closure and avoids pretending that the
  already-published abstract MT-5 measurable/non-Borel function example is
  automatically an interval-integrability comparison example.
- The open-dense monotone-limit example now uses the already-published dense
  open small-measure set rather than a generated fat-Cantor variant. The item
  still gives the exact failure mode the design asks for.
- No item in this scaffold rests on a later page. There are no forward
  references.

## Item census

- A page `the-lebesgue-and-riemann-integrals-compared`: 6 items.
- B page `the-lebesgue-and-riemann-integrals-compared-examples`: 6 items.

The A page is well below the 60-item split ceiling, so no split is proposed.

## Item-shape summary

### A page

The A page is reduced to the genuinely missing seam results:

1. the Darboux-envelope lemma that makes completeness visible;
2. the main Riemann/Lebesgue agreement theorem;
3. the Borel almost-everywhere consequence;
4. Arzela's bounded convergence theorem for Riemann integrals;
5. nonnegative improper-integral agreement on a half-line;
6. the Riemann-Stieltjes/Lebesgue-Stieltjes agreement theorem.

This keeps MT-9 centered on the comparisons the library still lacks, while
letting already-published MT-4 and real-analysis material do the rest.

### B page

The B page concentrates on comparison witnesses rather than reprinting earlier
real-analysis examples:

- the Dirichlet-function seam example;
- the local false-statement witness showing that a Riemann integrable function
  need not be Borel measurable;
- the monotone `L^1` limit of Riemann-integrable indicators;
- the sine-integral counterexample discharging `rem-improper-riemann-not-lebesgue`;
- the fat-Cantor semicontinuity counterexample discharging
  `rem-semicontinuous-not-ae-riemann`;
- the null-set / discontinuity-set counterexample discharging
  `rem-null-set-not-discontinuity-set`.

Thomae's function and the already-published general pointwise-limit refutation
should still be mentioned in authoring-time summary prose, but they are not
duplicated as batch items.

## Known limits and open risks

- Several design obligations are already published on other pages and therefore
  cannot appear in MT-9 page frontmatter at step 5, because the step-5 contract
  says the authored page must list exactly the batch's planned items. Those
  already-published obligations therefore need explicit summary prose on the
  authored pages rather than extra manifest rows.
- `cex-the-sine-integral-is-improperly-riemann-integrable-and-not-lebesgue-integrable`
  should cite the existing improper-integral item
  `cex-sine-over-x-is-only-conditionally-convergent` rather than recomputing the
  conditional-convergence half from scratch at step 5.

## Validation checklist

Commands to run after writing the scaffold:

```bash
node tools/coverage-checklist.mjs --require-destination research/frontier-21-batch-7.coverage.json
node tools/content-policy.mjs --manifest-only research/frontier-21-batch-*.pages.json
node tools/validate-plan.mjs research/plan-spec.json
node tools/source-fetch-check.mjs --coverage research/frontier-21-batch-7.coverage.json --stamp
node tools/source-fetch-check.mjs --coverage research/frontier-21-batch-7.coverage.json
node tools/url-sweep.mjs --coverage research/frontier-21-batch-7.coverage.json --out /tmp/frontier-21-batch-7-url-liveness.json --recover --fail-on-dead
```

The command results are recorded below after execution.

## Validation results

- `node tools/coverage-checklist.mjs --require-destination research/frontier-21-batch-7.coverage.json`
  passed: `1` page, `27` harvested results, `0` errors, `0` warnings.
- `node tools/content-policy.mjs --manifest-only research/frontier-21-batch-*.pages.json`
  passed: `433` scoped items, `0` errors, `0` warnings.
- `node tools/validate-plan.mjs research/plan-spec.json`
  exited `0` on Thursday, August 27, 2026. The run still prints the
  repository's existing `redundant-prereq` advisory stream outside this batch,
  but there was no MT-9-specific cycle, forward-reference, or B-page-leaf
  failure.
- Historical step-1 shell-network checks for the pre-repair 2-source scaffold:
- `node tools/source-fetch-check.mjs --coverage research/frontier-21-batch-7.coverage.json --stamp`
  failed for both source URLs with the same resolver error `EAI_AGAIN`.
  Exact failures:
  - `https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf`
  - `https://djvu.online/file/u1gYJemR8hzMe`
- `node tools/source-fetch-check.mjs --coverage research/frontier-21-batch-7.coverage.json`
  then failed, correctly, because no `fetch_verified` stamps exist after the
  resolver failure: `0/2 source(s) fetch-verified, 2 FAILED`.
- `node tools/url-sweep.mjs --coverage research/frontier-21-batch-7.coverage.json --out /tmp/frontier-21-batch-7-url-liveness.json --recover --fail-on-dead`
  failed `0/2` live on Thursday, August 27, 2026, with the same DNS-level
  problem:
  - `curl: (6) Could not resolve host: djvu.online`
  - `curl: (6) Could not resolve host: draft-r-bass-scholar.media.uconn.edu`
  The receipt was still written to
  `/tmp/frontier-21-batch-7-url-liveness.json`.

What was still verified despite the shell-network blocker:

- On Thursday, August 27, 2026, I opened and read both cited sources through
  the web-research channel at the exact chapter/section locators recorded in
  `research/frontier-21-batch-7.coverage.json`.
- No `fetch_verified` object was fabricated.
- I did **not** re-source Bass or Wheeden-Zygmund. The cited texts were
  readable in the browsing channel, so the failures above are local shell DNS
  failures, not evidence that the recorded source texts are dead or unavailable.

Exact remaining action for an environment with working shell DNS:

```bash
node tools/source-fetch-check.mjs --coverage research/frontier-21-batch-7.coverage.json --stamp
node tools/source-fetch-check.mjs --coverage research/frontier-21-batch-7.coverage.json
node tools/url-sweep.mjs --coverage research/frontier-21-batch-7.coverage.json --out /tmp/frontier-21-batch-7-url-liveness.json --recover --fail-on-dead
```

## Step-3 fix pass

- `C7-1` — `applied`. Evidence: MT-9 explicitly lists the false upgrade
  `Riemann integrable => Borel`, and the Alpha review correctly identified that
  the step-1 scaffold left it without a local witness. I re-read Hunter
  `Measure Theory`, Section 2.6 through Example 2.22, which gives the
  measurable non-Borel Cantor-subset route; together with the published Cantor
  homeomorphism items and `cor-riemann-integrability-and-lebesgue-null-discontinuity-sets`,
  that closes the missing B-page witness inside the current run's closure.
- Changed scaffold record: `research/frontier-21-batch-7.pages.json` now adds
  `fs-every-riemann-integrable-function-is-borel-measurable` to the B page.
- Changed scaffold record: `research/frontier-21-batch-7.coverage.json` now
  adds Hunter Section 2.6 / Example 2.22 and a canonical disposition for the
  new false-statement item.
- Changed scaffold record: `research/frontier-21-batch-7.notes.md` now updates
  the source ledger, B-page census and shape summary, the resolved risk note,
  the validator outputs, and this fix-pass receipt.
- Required validators rerun on Thursday, August 27, 2026:
  `coverage-checklist: 1 page(s), 27 harvested result(s), 0 error(s), 0 warning(s)`.
- Required validators rerun on Thursday, August 27, 2026:
  `content-policy: 433 scoped item(s), 0 error(s), 0 warning(s)`.
- Required validators rerun on Thursday, August 27, 2026:
  `validate-plan: OK`, with only the standing repository-wide
  `redundant-prereq` advisories.
- Source note for this fix pass: I re-read the added Hunter source through the
  web-research channel. I did **not** rerun `source-fetch-check` or `url-sweep`
  in the shell during the fix pass, so the DNS-blocked source-fetch notes above
  remain a historical record of the original step-1 scaffold only.

## Step-5 authoring

- Session date: Thursday, August 27, 2026.
- Authored page files:
  `library/measure-theory/the-lebesgue-and-riemann-integrals-compared.md`
  and
  `library/measure-theory/the-lebesgue-and-riemann-integrals-compared-examples.md`.
- Authored item ids:
  `lem-riemann-integrable-function-has-borel-darboux-envelopes`,
  `thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral`,
  `cor-riemann-integrable-function-is-almost-everywhere-equal-to-a-borel-function`,
  `thm-arzela-bounded-convergence-for-riemann-integrals`,
  `thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line`,
  `thm-riemann-stieltjes-integral-agrees-with-lebesgue-stieltjes-integral`,
  `ex-indicator-of-the-rationals-is-lebesgue-integrable-with-integral-zero-and-not-riemann-integrable`,
  `fs-every-riemann-integrable-function-is-borel-measurable`,
  `ex-open-dense-set-indicator-is-a-monotone-l-one-limit-of-riemann-integrable-functions-but-is-not-riemann-integrable`,
  `cex-the-sine-integral-is-improperly-riemann-integrable-and-not-lebesgue-integrable`,
  `cex-semicontinuous-function-almost-everywhere-equal-to-no-riemann-integrable-function`,
  `cex-a-null-set-that-is-no-functions-discontinuity-set`.
- Authored contract artifact: `research/frontier-21-batch-7.proof-contracts.json`.

- Provenance rationale:
  The six theorem/lemma carriers on the A page, the Hunter-based false
  statement, and the sine-integral counterexample remain source-backed
  literature-derived or ai-altered statements because they are the harvested
  comparison results or a sourced repair witness.
  The seam-only synthesis items
  `cor-riemann-integrable-function-is-almost-everywhere-equal-to-a-borel-function`,
  `ex-indicator-of-the-rationals-is-lebesgue-integrable-with-integral-zero-and-not-riemann-integrable`,
  `ex-open-dense-set-indicator-is-a-monotone-l-one-limit-of-riemann-integrable-functions-but-is-not-riemann-integrable`,
  `cex-semicontinuous-function-almost-everywhere-equal-to-no-riemann-integrable-function`,
  and
  `cex-a-null-set-that-is-no-functions-discontinuity-set`
  are tagged `ai-generated` statements with the schema-required generation
  roles because they are local comparison or boundary witnesses assembled from
  earlier published machinery rather than copied source theorem headings.
- Claim-shape note:
  I did not narrow or drop any planned batch-7 item.
  The only statement-shape strengthening is internal to
  `lem-riemann-integrable-function-has-borel-darboux-envelopes`:
  the written lemma records not only zero envelope gap but also equality of the
  two envelope integrals with the common Riemann value, because the proof
  establishes that stronger statement and the downstream theorem spends it.
- Choice-strength note:
  `fs-every-riemann-integrable-function-is-borel-measurable` explicitly assumes
  the Axiom of Choice, because its witness is the measurable-non-Borel Cantor
  subset route from Hunter Example 2.22 and the positive-outer-measure
  nonmeasurable-subset theorem.

- Validator receipts on the current authored bytes:
  `node tools/tsx-run.mjs tools/precheck.mts ...12 batch-7 items...`
  -> pass, `12 checked, 0 failing`.
  `node tools/content-policy.mjs research/frontier-21-batch-7.pages.json`
  -> pass, `12 scoped item(s), 0 error(s), 0 warning(s)`.
  `node tools/validate-plan.mjs research/plan-spec.json`
  -> ended `OK`; it still prints the repository's standing
  `redundant-prereq` advisories outside this batch, but no batch-7-specific
  cycle, forward-reference, unresolved-id, or B-leaf failure was introduced by
  this authoring pass.
  Additional contract checks run on Thursday, August 27, 2026:
  `node tools/proof-contract.mjs research/frontier-21-batch-7.proof-contracts.json --strict`
  -> pass, `12/12 item(s) checked`.
  `node tools/citation-fidelity.mjs research/frontier-21-batch-7.proof-contracts.json --fail-on-missing-quote`
  -> pass, `88 citation(s)`, no missing quotes, no widening candidates.
  `node tools/boundary-audit.mjs research/frontier-21-batch-7.proof-contracts.json --fail-on-contradicted --fail-on-template`
  -> pass, `96 rows`, no template clusters, no contradicted dispositions.

- Blockers:
  none local to batch 7 after authoring.
  The historical shell DNS issue on the newly added Hunter coverage source is
  unchanged because Step 5 did not modify coverage or source stamps, but it is
  not a mathematical blocker on the authored page pair.
