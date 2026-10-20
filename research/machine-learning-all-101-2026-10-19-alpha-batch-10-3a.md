# Batch 10 Step 3a adjudication

Run: `machine-learning-all-101-2026-10-19`; group: `batch-10`.

Reviewed in generated dependency order. Three decision obligations; seven risk reviews. No agents, judge, stamps, or engine gates initiated.

## def-source-target-distributions-and-shift

Checked nonempty measurable spaces, marginal probability normalization, rectangle preimages for loss composition, extended nonnegative risk, and measurable kernel section integrals against the exact seven supplier statements. Kernels are supplied, not asserted to exist; equality is outside one target-null measurable set and absolute continuity has target-to-source orientation. Zero loss, identical point masses and empty exceptional sets are valid; no choice or iff claim. Sugiyama §2 PDF pp.3–4 gives the shared conditional-law setting; the general-space formulation is explicit locally. No diagrams or interrupted Definition links.

Disposition: risk review complete; no repair or decision obligation. Next: next routed dependency level.

## lem-covariate-shift-joint-law-density

Checked all four steps and fourteen declared supplier statements: AC supplies a finite nonnegative RN version w0 for the probability marginals, kernel integration gives total density mass one, rectangle section integrals use only finite scalars, change of measure transfers to target marginal, and target-a.e. kernel equality identifies rectangle probabilities. Finite-measure uniqueness applies to the generating rectangle pi-system with equal total mass. Any other version differs only on a source-marginal-null set whose cylinder is source-joint-null; null integrals handle even infinite representatives. Absolute continuity follows setwise. Zero weights and null rectangles cause no division. Sugiyama §3.1 is the density-model motivation, not a substitute for this proof. No additional choice, diagrams, or interrupted Statement links.

Disposition: risk review complete; no repair or decision obligation. Next: next routed dependency level.

## thm-covariate-shift-importance-weighting

Checked both steps against joint-density lemma and change-of-measure theorem: singleton predictor class satisfies the measurability supplier, loss is nonnegative, AC and target absolute continuity are retained, and r(x,y)=w(x) is the joint density. Change of measure yields extended-integral equality and the explicitly assumed weighted integrability makes the common value finite. Zero loss and unbounded weights are allowed when the weighted loss is integrable; no bounded-weight or converse assertion. Sugiyama §3.1 supplies the density importance-weight identity. No diagrams or interrupted Statement links.

Disposition: risk review complete; no repair or decision obligation. Next: next routed dependency level.

## thm-discrepancy-domain-adaptation-bound

Checked all five proof steps and six cited supplier statements. Rectangle preimages ensure loss measurability; monotonicity and additivity justify both integrated triangle routes. The finite pairwise-risk assumption prevents infinity-minus-infinity in discrepancy; infinite supremum or target labeling risk makes the extended bound valid without subtraction. Both assumed minimizers belong to H; no existence is inferred and no choice is needed. Both routes have identical common terms, so their minimum is valid, including infinite common terms. Independent reading of Mansour arXiv v3 Definition 4 and Theorem 8 Eq.(11), HTML lines 105–111 and 172–188, confirms the minimum and both proof routes in the source. Corrected only the inaccurate reader attribution; retained the sound integral-supplier proof enrichment. Statement unchanged; no diagrams or interrupted Statement links.

Decisions: touched carrier `amended_repair`; `refuter:10:1` is `confirmed_fatal` for inaccurate source attribution (not a false mathematical bound). Repair confidence: 1. Exact evidence: [Mansour v3 Theorem 8](https://arxiv.org/html/0902.3430v3), Eq. (11), lines 172–188. Native pre/post snapshots and authenticated full preimages show that the reader introduced the incorrect annotation while adding correct integral suppliers. Restored accurate credit and retained those suppliers. No Statement/Definition change or consumer propagation is triggered. Next: target-risk theorem at the same dependency level.

## thm-target-risk-bound-by-source-risk-divergence-and-joint-error

Checked all four proof steps and all six cited dependencies. Binary error and disagreement events are explicitly measurable; integrated indicator inequalities and the marginal identity give target error <= target error of g plus target disagreement, and source disagreement <= the two source errors (if h differs from g, one differs from y). The factor one-half matches the scaled divergence. Nonempty H gives finite joint-error infimum in [0,2]; an approximate minimizer for each fixed eta suffices without attainment or simultaneous choice. Zero errors, singleton H, identical marginals and endpoint risks are admitted. Ben-David Theorem 2 proof printed pp.157–158 gives the population triangle argument; the local proof extends it to joint random labels and unattained infima. Retained the reader integral-supplier enrichment; missing explicit integral citations were nonfatal, immediately recoverable background, not a false claim. Statement unchanged; no diagrams or interrupted Statement links.

Decision: `reviewed_no_defect`, `change_kind: audit_enrichment`, `defect_ids: []`. The retained reader additions make elementary integral prerequisites explicit; they do not repair a false inference. Authenticated full pre/post files match the native snapshot item hashes (36fd10aa… to 12541043…); the only differences are three integral suppliers, three facts and their proof uses. No statement change, outside consumer repair or escalation. Next: level 5 examples.

## ex-label-shift-identical-input-laws-has-large-joint-error

Checked all three verification steps and four direct dependencies. On the one-point space the two constants exhaust H; risks are (0,1) and (1,0), so both joint sums equal one and lambda=1. Equal marginals give divergence zero for empty self-disagreement and full cross-disagreement events. The bound is sharp at h0, and deleting lambda fails as 1<=0. Opposite deterministic kernels differ on a target-mass-one set, so the importance-weighting hypothesis fails; no misuse of the AC-assuming identity occurs. No choices, diagrams, interrupted Example links, or outside repairs.

Disposition: risk review complete; no repair or decision obligation.

## ex-support-mismatch-prevents-covariate-weighting

Checked all three verification steps and three dependencies. The constant delta-zero conditional kernel disintegrates both finite joint laws. The event {1} has source marginal zero and target marginal one, refuting target absolute continuity despite equal kernels. Every nonnegative measurable candidate weight, including infinite values on the null event, has integral zero over it by the null-integral supplier, so cannot represent target mass one. Importance weighting is not invoked without its hypothesis. No choice, diagrams, interrupted Example links or outside repairs.

Disposition: risk review complete; no repair or decision obligation.

## Final evidence and dispositions

Exactly three owed obligations are recorded in `research/machine-learning-all-101-2026-10-19-alpha-batch-10-3a-decisions.json`: the discrepancy touched carrier is amended, its refuter finding is confirmed fatal and repaired, and the target-risk touched carrier is reviewed without defect as audit enrichment. The one actual defect is closed as `machine-learning-all-101-2026-10-19-3a-batch-10-mansour-attribution` in `research/defect-ledger.jsonl`, with references to both discrepancy decisions. No defect row was created for routine integral elaboration or manifest synchronization.

Historical comparison uses full authenticated original files under `research/machine-learning-all-101-2026-10-19-owner-step3-authenticated-preimages/preimage/items/` and reader-post files under `research/machine-learning-all-101-2026-10-19-owner-step3-authenticated-reader-post/batch-10/sources/items/`. Both changed theorem pre/post item hashes match their native snapshots exactly. The discrepancy reader-post typed carrier, hashed with canonical sorted keys, matches the refuter observation fingerprint `f77f7fd68491f1e92c449ed50852d1b0b8ac4121547fbed46a61515dda185cb8`. Thus this finding is bound to the original observed carrier; there is no missing historical preimage or unbound historical disposition.

The only item edited during this adjudication is `items/thm-discrepancy-domain-adaptation-bound.md`, in Statement references. Its mathematical Statement and proof are unchanged from reader-post. Source metadata and provenance remain accurate (`literature-derived` statement, `ai-altered` proof); no material rewrite or judge record invalidation applies. The batch manifest now includes the actual reader-added integral dependencies for both touched theorems, without changing inventories, page metadata, or published status. The source-evidence artifact has an explicit Step 3a source-attribution correction. The owned-consumer record was appended to `briefs/tasks/frontier-dependency-ledger.md`.

## Sources independently consulted

- [Mansour, Mohri, and Rostamizadeh, arXiv:0902.3430v3](https://arxiv.org/html/0902.3430v3), §2.1 for expected pairwise losses, Definition 4 (lines 105–111), and complete Theorem 8 statement and proof (lines 172–188). The source has both routes and their minimum. The local finite-pairwise-integral hypothesis makes the discrepancy well formed even when its supremum is infinite.
- [Sugiyama, Learning under Non-stationarity](https://www.ms.k.u-tokyo.ac.jp/sugi/2012/CSAreview.pdf), §2, PDF pp. 3–4, shared conditional label law and test risk; §3.1.1, PDF p. 5, target/source density ratio and expectation identity. The local arguments explicitly supply measurable-space, absolute-continuity, null-set and integrability qualifications.
- [Ben-David et al., A Theory of Learning from Different Domains](https://link.springer.com/content/pdf/10.1007/s10994-009-5152-4.pdf), Theorem 2 proof, printed pp. 157–158 / PDF pp. 7–8: full population triangle argument before empirical substitution. Local binary joint-law events allow random labels, and the infimum argument does not require the source's attained ideal hypothesis.

Every direct item supplier used by the seven reviewed items was opened at its exact Statement or Definition, including the kernel, likelihood-ratio, null-integral, measure-uniqueness, risk-measurability, divergence, and elementary integration interfaces. This is review of their actual cited use, not a new full audit of the published prerequisite closure. No defective published supplier was found in those uses, so no published-consumer ledger entry or lock was needed. There were no routed page-only obligations. No diagrams occur in the reviewed item arguments, and none is needed for these measure identities, inequalities or explicit atomic examples. All ten batch statements/definitions/example descriptions were independently checked for uninterrupted presentation; no violations were found.

## Local validation and handoff

- `risk-report.mjs` was run before risk recording and then with `--require-reviewed`: all seven HIGH/CRITICAL reviews complete, zero errors across the ten-item batch. After the attribution correction the discrepancy score drops from 10 to 8; it remains CRITICAL and fully reviewed.
- `reflow.mts items/thm-discrepancy-domain-adaptation-bound.md`: unchanged.
- `precheck.mts` on both touched theorems: 2 checked, 0 failing.
- `rendercheck.mjs` on both touched theorems: YAML and all math parse, no errors.
- `proof-layout.mjs items/thm-discrepancy-domain-adaptation-bound.md` was run once after the final item edit and formatter: 1 item, 5 steps, 0 defects.
- `proof-contract.mjs` on the batch contract with `--strict`: 10/10 items checked, 0 errors; one `shotgun-bracket` warning for broad F1–F6 tags in target-risk step 1.1. Each cited fact is used there; later eta steps legitimately use earlier steps and the Given data. No mathematical defect follows from this warning.
- Direct `inspectStatement` check over all ten manifest items: zero errors.
- Ledger append completed with its serialized append tool and regenerated view. Decisions have exactly the two touched obligations and one flagged obligation, with one shared closed row for the same attribution defect.

Blockers: none. No outside repairs, withdrawals, published edits, judgment, decision stamping, engine gate battery, publication, or commit was performed. The active `.autopilot/` status confirms this run is in Step 3a; engine-owned stamping, validation and transitions remain with the driver.
