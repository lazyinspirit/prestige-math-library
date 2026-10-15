# Batch 12 authoring notes — Posterior consistency at a KL projection

## Inventory, levels, and scope

This assignment contains eight A items and five B examples (13 total, below the 100-item page cap). Direct `deps` are synchronized between the carriers and `research/bayesian-computational-statistics-62-batch-12.pages.json`; the level calculation counts only in-run item suppliers.

| Level | Item | In-run suppliers |
|---:|---|---|
| 0 | `def-kl-projection-set-and-relative-kl-neighborhoods` | none |
| 1 | `def-likelihood-tilted-measure-at-kl-projection` | KL projection definition |
| 2 | `lem-likelihood-tilted-measure-is-sigma-finite` | likelihood-tilt definition |
| 2 | `lem-kl-neighborhood-prior-mass-likelihood-denominator-lower-bound` | KL projection and likelihood-tilt definitions |
| 3 | `lem-product-likelihood-tilt-has-product-density` | tilt definition; sigma-finiteness lemma |
| 4 | `prop-compact-kl-projection-tests-under-fractional-moment-continuity` | product-tilt lemma and earlier definitions |
| 4 | `lem-exponential-test-posterior-splitting-at-kl-projection` | denominator and product-tilt lemmas |
| 5 | `thm-posterior-consistency-at-kl-projection` | denominator and exponential-test splitting lemmas |
| 1 | `ex-distant-alternatives-without-uniform-tests` | KL projection definition |
| 1 | `ex-nonunique-kl-projection-set` | KL projection definition |
| 3 | `ex-likelihood-tilt-can-have-mass-above-one` | KL/tilt definitions; sigma-finiteness lemma |
| 3 | `ex-likelihood-tilt-can-have-mass-below-one` | KL/tilt definitions; sigma-finiteness lemma |
| 3 | `ex-unique-kl-projection-finite-model` | KL/tilt definitions; sigma-finiteness lemma |

The batch-level input assigns batch 12 level 4 with prerequisite batch 11. Its row in the current shared dependency file agrees. The dispatch task pins scheduling input `13dcdb124988dd5353b5a1d0feeb8e4d22f2de4f7f94cd436aa58d6b464dcf92`; the shared dependency artifact currently carries input hash `d5afbc58d190a5bd47a64f06af255e64c3a9c76360785bf50274409a59aba610`. This digest mismatch is recorded for owner/engine reconciliation; the shared scheduling file was not edited.

## Plan comparison and cross-batch inputs

The BCS-09 design section in `research/plan-bayesian-computational-statistics-track.md` names both BCS-07 (`posterior-consistency-and-tests`) and BCS-08 (`iid-posterior-contraction`) as page prerequisites. The BCS-09 entry in `research/plan-spec.json` and this dispatch require only BCS-08. Following the controlling plan-spec, the A page keeps `requires: ["iid-posterior-contraction"]`. BCS-07 is recorded as a design/plan-spec conflict, not added as a false logical item dependency.

I inspected the actual BCS-08 A page and theorem item, `items/thm-iid-posterior-contraction-by-entropy-and-prior-mass.md`. Its interface is an in-probability contraction result with same-metric entropy, sieve-tail, and local KL/log-square prior-mass hypotheses. The page edge is retained for planned sequencing; BCS-09 does not invoke the BCS-08 conclusion as a proof premise. The inspection is recorded in `research/bayesian-computational-statistics-62-batch-12.cross-batch-dependencies.json` and does not imply supplier acceptance.

I also inspected the actual BCS-07 page and theorem body because the design lists it. That theorem is a well-specified dominated IID result with its own summable testing conditions. Its conclusion is not used by BCS-09. No BCS-07 item dependency is added. The BCS-09 model, direction of KL, full possibly nonunique minimizer set, unnormalized tilt convention, and almost-sure target are retained from the controlling plan and design.

The draft adds `lem-product-likelihood-tilt-has-product-density` as an A-page intermediate result. This supplies the exact product-measure identity needed by both test proofs and removes a direct definition/helper cycle: the tilt definition defines a set function; a later lemma proves it is sigma-finite; the product lemma then constructs its finite products and identifies their density.

## Source reading and dispositions

Three full-text treatments were inspected: the complete Kleijn–van der Vaart article, the relevant proof sections of Kleijn's full book manuscript, and §§1–3 of the Ramamoorthi–Sriram–Martin paper. The article and the book supply two independent treatments, including a book-length source; the third paper is an additional independent treatment. The exact URLs, locators, not-read scopes, supported items, and result dispositions are in the coverage JSON. `source-fetch-check --stamp` retrieved and stamped all three full texts. There were no retrieval failures, so no `source_resolution` entries were made.

The source statements are not used in place of local proofs. The compact test construction, likelihood-denominator argument, product-density identity, and exponential-test posterior split have local arguments. The finite discrete examples are original calculations; the source references give context for misspecified KL projections and likelihood tilts, not the displayed numerical models.

## Owner escalation: weak tests under unnormalized tilts

The main theorem statement is retained at the planned scope, but its proof is marked `not-supplied` and its Step 1 decision is `escalated`. The exact unresolved bridge is the source's Lemma 3.3, which upgrades merely vanishing type-I and uniform type-II errors to exponential errors before applying Lemma 4.1. In the printed proof (pp. 374–375), the source first splits the type-II calculation according to `||Q_theta||`, then defines block variables `Z_{j,n}=-Y_{j,n}+Q_theta^N Y_{j,n}` and invokes Hoeffding under `Q_theta^n`. Under the local convention, `Q_theta` is sigma-finite with mass `q_theta`, not necessarily a probability. Integrating the displayed variable under `Q_theta^N` gives `Q_theta^N(Y_{j,n})(q_theta^N-1)`, so it is not centered when `q_theta^N != 1`; `Q_theta^N Y_{j,n}` is not an expectation under a probability product law. No valid probability normalization or replacement Hoeffding bound for that branch was verified.

This is not a counterexample to the posterior-consistency theorem. It is a proof gap affecting the upgrade for all allowed `q_theta`, including `q_theta < 1`, `q_theta = 1`, `q_theta > 1`, and infinite mass. The issue is concrete: in the two-point model `p0=(1/1000,999/1000)`, `pa=(10^-6,999999/10^6)`, `pb=(1,0)`, `a` is the unique finite KL minimizer while `Q_b(X)=1000`. Thus unnormalized mass greater than one occurs within the stated KL-projection setup.

Proposed owner placement: before the final theorem, supply a corrected and fully proved weak-test-to-exponential-test bridge for sigma-finite unnormalized tilts, or repair the source Lemma 3.3 route with hypotheses and a proof that cover every tilt mass allowed by the planned theorem. A result only for probability-normalized tilts or for `q_theta <= 1` would leave part of the current theorem unsupported. No assumption was silently strengthened and no conclusion was weakened.

The source's Corollary 4.2 prints posterior mass outside the KL-minimizer neighborhood converging to `1`. Corollary 4.1 applied to that outside set gives `0`; the controlling plan also requires `0`. The item uses `0` and records this source typo, while leaving the separate proof bridge escalated.

## Scoped checks and readiness

The assigned item graph is acyclic, all local suppliers precede consumers, all 13 carrier/manifest level labels match, and the maximum item level is 5. Final scoped results:

- `precheck.mts`: 10 proof-bearing items checked, 0 failures.
- `proof-layout.mjs`: 13 changed items, 33 proof steps, 0 defects.
- `proof-contract.mjs --strict`: 13 contracts checked, 0 errors, 0 warnings.
- `depcheck.mjs` on the assigned item list: 701-item / 276-page dependency closure, 0 errors, 0 warnings.
- `content-policy.mjs`: 13 items, 0 errors, 0 warnings; `manifest-deps.mjs`: 13 items, no missing dependencies, no errors.
- `rendercheck.mjs`: 13 items and 2 pages checked, no errors or warnings.
- `source-fetch-check.mjs --stamp`: 3/3 full texts retrieved and stamped, 3/3 resolved, no failures or drops.
- Scoped dependency-level recomputation: 13 items, maximum level 5, no cycle; all carrier and manifest labels agree.
- `step1-decisions.mjs`: 12 items recorded `ready` with current closed inputs; `thm-posterior-consistency-at-kl-projection` recorded `escalated` for the proof gap above. These records report authoring status, not independent approval.

Run-wide checks retain two out-of-scope integration issues. `item-dependency-levels.mjs check` reports the unrelated `ex-cylinder-gaussian-process-is-not-banach-valued` label at 1 where its computed level is 2. `batch-dependency-levels.mjs check` reports the shared dependency artifact's stale input digest; batch 12's stored level/prerequisite row still agrees with this dispatch. Run-wide proof-contract coverage reports 573 missing contracts from other batches; this batch's 13 contracts are present and pass strict scoped validation. These shared/run-wide files were not edited.

Readiness means authoring completeness only; it is not independent mathematical approval. The main theorem remains escalated pending owner reconciliation of the bridge above.

## Run state

The current autopilot status remains `running`, with stage `1-scaffold` held by an unrelated malformed YAML title in `items/ex-uniform-endpoint-bootstrap-failure-and-m-out-of-n-remedy.md` (`title: Uniform endpoint: ...`) and an owner repair/recertification blocker. No autopilot state, shared plan, shared verdict, or other pair's carrier was changed for this assignment.

## Owner refuted original weak-test claim and completed true replacement

bayesian-computational-statistics-62-owner-consistency-final-integration.json and bayesian-computational-statistics-62-owner-consistency-final-readiness-resolution.json replace the obsolete unresolved-main disposition. Root constructed exact heavy-tail normalized finite-KL counterexample, same reviewer independently verified it, and full local corrected sufficient theorem/splitting/randomwalk proofs supplied. a.s.typeI+expuniformtypeII retains arbitrarysigmafinite/nonunique scope. Actual downstream BvM consumers preserve explicit rootn premises. strict4/4zeroerrors/warnings, finalexplicitlayout4items19steps0defects, sourcefetch4/4(1new),15current authoringrecords. Earlier user-choice question obsolete. No independent native review or gate waived.
