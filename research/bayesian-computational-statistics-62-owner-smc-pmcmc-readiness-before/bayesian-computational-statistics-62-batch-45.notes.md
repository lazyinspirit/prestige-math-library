# Batch 45 authoring notes — finite-horizon SMC CLTs and degeneracy

## Plan reconciliation

The task, track design (BCS-42, research/plan-bayesian-computational-statistics-track.md §189), and plan-spec.json agree on the A/B page IDs, titles, order 2130/2131, category and prerequisite page feynman-kac-particle-filters. plan-spec.json has no item inventory for this pair, so the design controls the new inventory. No page-metadata conflict was found. The 100-item page cap is respected: the A page has 12 items and its B companion has 8.

The design's mathematical scope has three material defects. I kept its source notation and formulas visible, wrote complete corrected branches where possible, and recorded the unresolved source-scope changes as escalations. The owner must reconcile the broad design claims before treating the narrower CLT and time-uniform results as replacements.

| Design/source claim | Exact evidence and affected items | Local treatment and owner decision needed |
| --- | --- | --- |
| The source recursive class Φ_t, with 1∈Φ_t, supplies finite post-resampling variance and both CLT outputs, including an initially weighted proposal. | cex-smc-clt-class-does-not-ensure-target-moment: at time 1, φ∈Φ_1 and 1∈Φ_1, V_1(φ)<∞, but Var_{π_1}(φ)=∞. The same item also gives an initial-proposal witness: bounded φ,1∈Φ_0 but V_0(φ)=∞ under an unbounded initial RN weight. | The source Φ interface remains explicit in def-smc-clt-function-classes-and-variance-recursions. A stronger recursive target-moment class Ψ carries the local proofs; Ψ_0 requires the initial weighted centered numerator moment. Owner: decide whether the design should state these additional hypotheses or supply a corrected broader result. |
| Residual formula R_t covers all positive-integer atoms, and a zero limiting fractional-remainder expectation makes every finite residual count deterministic. | cex-smc-residual-clt-fails-at-integer-weight-boundary: a two-state proposal with weights (2,2/3) has E r(u)=1/2 and formal R=0, but random finite floors yield a non-Gaussian limit. cex-smc-zero-residual-fraction-can-have-random-offspring: for N=3, event (A,C,B) has probability 3/16 and leaves one random residual child although E r(u)=0. | The source expression is recorded as a candidate only. The local residual CLT is proved for no positive-integer atoms or the exactly uniform weight case; the remaining branch is unassigned. Owner: reconcile the source theorem or add a supplier proving the precise integer-boundary cases. |
| Chopin Theorem 5's predecessor-state density ratios and likelihood bounds alone imply time-uniform V_t. | cex-smc-time-bound-fails-with-varying-proposals: with two states, g=1/2, f=1, and predecessor-independent q_t(1)=ε_t=2^{-t-2}, all displayed density ratios equal 1 but V_t=1/(16ε_t)+1/(16(1-ε_t))→∞. In Chopin Appendix A.4, the intermediate estimate υ_k≤C²\bar f/f does not follow from the stated predecessor-ratio bounds for varying proposals. | thm-smc-time-uniform-variance-bound-under-uniform-incremental-weights proves the separate bound under an explicit uniform incremental-weight bound and actual backward-operator oscillation contraction. It is not asserted to prove the design's Theorem 5 hypotheses. Owner: correct or replace the source condition set. |

The directly affected CLT carriers are lem-smc-multinomial-variance-unrolls, lem-smc-mutation-and-weighted-correction-clt, both selection CLT lemmas, both fixed-horizon CLT theorems, and the time-uniform theorem. Their local mathematical statements and proofs are complete under the displayed conditions; their Step 1 records are escalated because the controlling plan's broader claims remain unresolved. Other completed definitions, empirical-law results and examples are recorded ready as local draft authoring readiness only.

## Inventory, dependencies and levels

The manifest contains 20 unique items. Levels were computed from every current manifest for this run, then checked against each batch-45 label. The 124-page, 766-item graph has no structural errors or dependency cycles, and all batch-45 labels match recomputation. feynman-kac-particle-filters (batch 44, level 3) is the page prerequisite; external published suppliers do not raise the in-run item level. Five unrelated label mismatches make the run-wide level command exit nonzero; they are itemized below.

| Level | Batch-45 items |
| ---: | --- |
| 0 | def-dobrushin-coefficient-for-probability-kernels |
| 1 | lem-dobrushin-contraction-from-density-ratios |
| 2 | ex-smc-multinomial-ancestry-collapse |
| 4 | def-smc-clt-function-classes-and-variance-recursions |
| 5 | lem-smc-backward-operator-oscillation-bound, lem-smc-finite-horizon-empirical-law, lem-smc-multinomial-variance-unrolls, cex-smc-clt-class-does-not-ensure-target-moment, cex-smc-residual-clt-fails-at-integer-weight-boundary, cex-smc-zero-residual-fraction-can-have-random-offspring, ex-smc-dominant-weight-and-ess |
| 6 | lem-smc-multinomial-resampling-clt, lem-smc-mutation-and-weighted-correction-clt, lem-smc-residual-resampling-clt-away-from-integer-weights, thm-smc-time-uniform-variance-bound-under-uniform-incremental-weights, cex-smc-time-bound-fails-with-varying-proposals |
| 7 | thm-smc-multinomial-fixed-horizon-clt, thm-smc-residual-fixed-horizon-clt-away-from-integer-weights, ex-smc-bounded-weights-with-mixing |
| 8 | ex-smc-fixed-horizon-clt-does-not-give-time-uniform-accuracy |

The item inventory and each carrier's direct deps agree. Suppliers were authored in increasing in-run level. External direct dependencies are recorded in item frontmatter; their current statements/proofs were inspected where used. The B page's ESS example also depends on the current BCS-31 def-importance-weight-effective-sample-size; its weight-only diagnostic scope was checked against the definition and its transitive self-normalized-IS algorithm.

The batch-45 cross-dependency file records the required batch-44 page and exact BCS-41 item interfaces used by the SMC definition, empirical-law proof, mutation/selection CLTs and finite resampling examples. Current supplier bodies inspected include the Feynman–Kac target/normalizer definition, path RN theorem, SIR algorithm, multinomial/residual resampling algorithm, and expected offspring-count theorem. The source path target requires standard-Borel finite path laws and 0<Z_t<∞ before normalization; the path RN theorem requires initial and transition absolute continuity and measurable derivative versions. The residual algorithm floors finite normalized sample weights Nρ_i, so the proofs use r(υ_i/η_N(υ)), not a floor of a fixed limiting weight. Supplier authoring records are not treated as independent approval.

## Source harvest

research/bayesian-computational-statistics-62-batch-45.coverage.json records locators, the source's named statements/sections, each disposition, retrieval attempts and successful full-text stamps. Read full text for Chopin (Theorems 1–2, variance equations and Appendix A.1/A.4 proofs), Künsch (Theorem 4 with its complete proof and §4.3.1), Doucet–Johansen (§§3.4–3.7; its CLT display explicitly delegates proof), and the full Särkkä–Svensson second-edition Chapter 11 text. The book supports the SIR/resampling/ESS context, not the SMC CLT proof. These give two independent CLT proof treatments (Chopin and Künsch) plus a complete filtering textbook and tutorial context.

source-fetch-check --stamp verified 8/8 coverage entries (four full documents repeated across the two pages), each on its first attempt; there were no retrieval failures, recovery retries or dropped sources. coverage-checklist reports 2 pages, 43 harvested source results, 0 errors and 1 advisory: 7/28 A-page source results are scaffolded as new included items. The remaining results are explicitly inline or out of scope because they are source statements under audit, context or algorithms outside the assigned design; owner/Alpha should review that yield warning. No source was dropped to waive mathematical coverage.

## Scoped checks

- Item dependency graph: 20/20 assigned levels match recomputation from all 124 run pages (766 items); the full dependency graph has 0 cycle/structure errors. The run-wide `node tools/item-dependency-levels.mjs check --run bayesian-computational-statistics-62` exits nonzero on five pre-existing labels outside this batch: `ex-cylinder-gaussian-process-is-not-banach-valued` (declared 1, computed 2), `thm-gaussian-process-posterior-contraction` (10, 9), `ex-log-gaussian-uniform-density-posterior` (11, 10), `ex-binary-regression-logistic-intercept-gp` (11, 10), and `ex-fixed-design-gaussian-constant-process-and-unknown-scale` (11, 10). No out-of-scope files were changed.
- Scoped dependency check: depcheck --items-file /tmp/bcs45-item-ids.json --quiet passed selected item/page and prerequisite-cycle checks.
- Proof contracts: strict check covers all 20 assigned items, with exact supplier excerpts, mapped step claims/inputs and eight boundary dispositions per item; 0 errors, 0 warnings.
- Proof layout after the final carrier edits: 20 items, 67 numbered steps, 0 defects.
- Source retrieval: 8/8 full-text entries fetch-verified; 0 drops.
- Coverage checklist: 2 pages, 43 harvested results, 0 errors, 1 low-yield advisory described above.
- No test suite was added or run. No published content, shared plan, scheduler artifact, .autopilot state or owner verdict was edited.

## Step 1 records and handoff

All 20 batch-45 items have a research/bayesian-computational-statistics-62-step1-<item>.json record with the exact direct dependency list and current item/dependency hash. Thirteen are ready and seven are escalated; escalations are limited to the plan/source-scope mismatches in the table above. A ready record is local authoring readiness, not mathematical approval.

The shared active-run state was left untouched. The dispatch scheduling input was `17c13c2fd465e3d10d52824fd8e855172f1554647f2f93bfe89f4af7fffb04c4`; because the page manifest now has its authored inventory, the owner-managed scheduling artifact was not rewritten by this batch handoff.
