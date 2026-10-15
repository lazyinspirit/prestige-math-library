# Batch 10 authoring notes — Hellinger geometry and posterior consistency

## Scope, plan, and conflicts

- The controlling owner direction and current batch assignment govern. The assigned A page has four items and the B page has two examples; all six draft carriers and both page summaries remain within the 100-item page cap.
- The BCS-07 paragraph in `research/plan-bayesian-computational-statistics-track.md` says the page requires BCS-01 and BCS-02. The canonical `research/plan-spec.json` entry, generated assignment, and current batch-10 manifest instead require `posterior-propriety-and-dominated-bayes-formula` and `minimax-lower-bounds-and-information-theoretic-methods`. The assignment and current manifest are controlling for this dispatch, so those two requirements are retained. No mathematical statement was weakened to resolve the metadata conflict.
- The A page now mentions the theorem's KL-to-Hellinger support consequence. The B page summary already accurately covers its two finite examples and the A-page counterexample; no change was needed there.
- The cross-batch interface matrix lists `def-identifiability-of-an-estimand` but omits the BCS-07 counterexample and finite example as consumers. Their exact dependencies are retained; the mismatch is recorded in the cross-batch input for owner reconciliation.

## Inventory and dependency levels

The scaffold manifest inventory and logical dependencies were checked before authoring. Direct in-pair edges are Hellinger definition → Hellinger/TV comparison → posterior-consistency theorem → finite identifiable example. The counterexample and sharp factor-of-two example depend on the Hellinger comparison, but not on the consistency theorem. No cycles were found.

| Level | Items |
|---|---|
| 0 | `def-hellinger-distance-for-dominated-laws` |
| 1 | `thm-hellinger-tv-comparison-under-library-convention` |
| 2 | `thm-posterior-consistency-under-prior-mass-and-tests`; `cex-identifiability-alone-does-not-imply-posterior-consistency`; `ex-l1-distance-convention-factor-of-two` |
| 3 | `ex-identifiable-finite-model` |

Batch 10 remains at batch dependency level 2 and requires batch 5. The assigned carrier levels and manifest level labels agree with these edges. The main theorem's direct dependency list no longer names three stale, absent scaffold IDs: `def-bayesian-model-with-prior`, `def-posterior-normalizer-and-propriety`, and `thm-posterior-probability-when-evidence-is-finite-positive`. The theorem states the proper prior, kernel, density, and posterior-filler hypotheses itself; it cites the actual published `thm-bayes-formula-for-dominated-kernels` for the posterior-kernel formula and proves the needed denominator bound locally. The BCS-05 page-level requirement remains intact. This avoids inventing suppliers while retaining every mathematical hypothesis.

## Supplier and mathematical checks

- I inspected the actual Batch-5 page and item bodies. The evidence-normalizer definition and finite-positive propriety proposition are present with current Step-1 readiness records. BCS-05 itself remains a draft authoring prerequisite, not an independently accepted or published result. Its own page requirements (BCS-01 and the dominated-experiment page) and the current prior/kernel definition were also checked. The published dominated-kernel Bayes formula body and proof were read for its proper-prior, sigma-finite data measure, joint-density, finite-positive fibre, and null-fibre filler hypotheses.
- The minimax lower-bounds page is published. Its actual content confirms the directional KL, Pinsker, and library event-supremum TV conventions. The assigned theorem assumes tests directly and does not borrow a minimax conclusion.
- The identifiability definition's published body states injectivity of the parameter-to-law map. Both uses match it exactly. No absent item supplier remains; current supplier bodies and relevant proofs were checked. Availability and author-readiness do not assert independent acceptance.
- The Hellinger definition proves square-root measurability and finiteness from supplied finite-valued densities. The comparison theorem constructs the finite canonical measure `P+Q`, proves invariance, derives event-supremum TV as half the density L1 distance, and proves both inequalities with the correct normalization.
- The posterior theorem spells out a proper prior, probability kernel, well-specified truth, jointly measurable normalized density, KL support, measurable metric complements, summable test errors, and the finite-positive posterior/filler convention. The proof derives product-density normalization, the log-ratio denominator bound (including KL-section measurability and likelihood positivity for prior-almost every parameter along the sample), exponential block tests, numerator integrability, and the almost-sure conclusion. It separately proves measurable Hellinger balls and `h^4 <= 2 KL` under the library TV convention. AC is declared for imported KL, density, and Pinsker conventions; the local supplied-density arguments make no arbitrary density selection.
- The counterexample uses an injective countable Bernoulli family with KL support and a discrete metric, proves the posterior stays on its nontruth support, and proves no uniform tests can work. The finite example verifies normalized densities, injectivity, KL support, both Hoeffding tail bounds, and the exact separation endpoints. The point-mass example verifies L1 distance 2, TV distance 1, and Hellinger distance `sqrt(2)`.

## Source record

The coverage ledger records full-text reading, locators, supported item IDs, and disposition for each harvested result. Two independent accessible full-text treatments were inspected for the A-page results:

- B. J. K. Kleijn, *Lectures on Nonparametric Bayesian Statistics* (full 134-page PDF): §8.1 equation (8.2); §7.3 Theorem 7.5 and proof, including block test amplification; §7.8 denominator/test proof; §9.4 Lemma 9.8.
- Kleijn and van der Vaart, *The Bernstein–von Mises Theorem under Misspecification* (full 29-page PDF): §4.1 Lemma 4.1 and proof and Corollaries 4.1–4.2.

Ghosal, Ghosh, and van der Vaart (2000) was not read: after searching the author/institution repository, VU portal, and Project Euclid, its full text remained unavailable through the initial attempt plus five recovery attempts. The coverage ledger marks it dropped with the full attempt/search history and item-specific alternative proofs/dependencies. No claim or excerpt is attributed to it; dropping it does not drop mathematical coverage.

## Scoped checks and handoff

- Pair-local dependency recomputation checked 6/6 items and 8 in-pair edges; every assigned dependency-level label matches its computed level, with no cycle. The manifest dependency-array check reports 6 items, 0 errors. Focused `depcheck` passed for the six assigned items and their prerequisite cycle checks.
- `proof-contract --strict`: 6/6 items, 30 step derivations, 83 exact supplier citations, 0 errors and 0 warnings. `precheck`: 5 proof-bearing items, 0 failures after reviewing and adopting its dependency-layer renumbering. `proof-layout`: 6 files, 30 steps, 0 defects.
- `rendercheck`: all 6 items and 2 assigned pages pass KaTeX and YAML parsing. Content policy: 6 scoped items, 0 errors and 0 warnings.
- `source-fetch-check --stamp` verified and stamped both accessible full-text sources (2/3); a follow-up non-writing check confirms 3/3 sources resolved, including the documented GGV drop.
- `batch-dependency-levels.mjs check` reports the shared run artifact stale after the assigned manifest edits. The recomputed batch-10 batch level and prerequisite set remain level 2 / batch 5. This shared scheduling file is left for the owner to regenerate.
- A read-only run-wide `frontier-dependency-ledger.collect` was blocked by two Batch-25 rows with invalid `status: unresolved` in `research/bayesian-computational-statistics-62-batch-25.cross-batch-dependencies.json`: page edge `variational-inference-and-evidence-lower-bound` → `numerical-optimization-for-statistical-computation` and item edge `thm-elbo-kl-decomposition` → `thm-kullback-leibler-is-nonnegative`. The batch-10 input itself contains only its declared in-run edge to Batch 5 and passes the local ownership/shape check. No batch-25 file was changed.
- The earlier autopilot status scan showed an unrelated Batch-1 Stage-1 YAML parse handoff failure. A repeat status scan did not finish within 35 seconds and was stopped; no autopilot state was written. That failure is outside this assignment.
- The prescribed `node tools/step1-decisions.mjs record` command was attempted for all six items and failed before writing any record. `loadStep3` parses every run coverage file and stops at `research/bayesian-computational-statistics-62-batch-26.coverage.json:173`, where a JSON string contains an invalid unescaped `\|`. All six batch-10 readiness records remain missing. This is outside the assigned batch and was left for the owner to repair; no records were fabricated or escalated around the failed run snapshot. The BCS-05 prerequisite items themselves have current `ready`, `owner:false` records, which denote author readiness only, not independent approval.

## Owner recovered missing readiness handoff after shared JSON repair

After successful native producer completion and actual current run JSON parsing, owner recorded only previously missing Step1 author-readiness artifacts from the actual completed handoff. The historical malformed coverage26, YAML title and cross-row incidents above remain recorded at their original time; those shared blockers have since been repaired. No mathematical source changed and no new independent proof acceptance or gate waiver is inferred. Existing older ready records remain subject to the final stable formatting/metadata/hash pass.
