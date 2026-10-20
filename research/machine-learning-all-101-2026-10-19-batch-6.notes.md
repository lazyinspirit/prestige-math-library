# Batch 6 authoring notes

Run: `machine-learning-all-101-2026-10-19`  
Pair: `algorithmic-stability-and-generalization`  
Scope: assigned A/B pages, their draft items, and batch-6 evidence only.

## Controlling plan and interface reconciliation

- Read the complete current ML-05 section in `research/plan-machine-learning-track.md` and the matching entry in `research/plan-spec.json`. Their claim scope and proof route agree: Bousquet–Elisseeff deletion stability; the expected gap; two separate high-probability bounds with AC through McDiarmid; and the convex RKHS regularized-ERM bound. The task's page `requires` entries for concentration and Rademacher are page context; only the Rademacher comparison example uses an ML-04 result.
- Source convention made explicit in `def-uniform-algorithmic-stability` and `thm-strongly-convex-regularized-erm-stability`: the deletion output in a size-$m$ comparison retains the original denominator $m$. Bousquet–Elisseeff define the omitted-sample objective this way in equation (20), then prove the RKHS constant in Theorem 22. Re-normalizing a deleted sample by $m-1$ changes the algorithm and does not satisfy the same bound in general. For example, with $m=2$, $S=(0,1)$, $ell(f,y)=|f-y|$, $lambda=100$, and the one-dimensional kernel $K=1$, the full minimizer is $0$ while the re-normalized one-point deleted minimizer is $1/200$; the test-loss change at $y=0$ is $0.005$, larger than the proposed $1/(2\lambda m)=0.0025$. The fixed-$m$ deleted objective gives minimizer $1/400$ and is the cited Bousquet–Elisseeff convention.
- Bousquet–Elisseeff Theorem 12's LOO proof writes $\beta_{m-1}\le\beta_m$ after describing a nonincreasing sequence, which is the opposite inequality for a nonincreasing sequence. The local LOO coordinate-oscillation proof will not use that comparison: when one coordinate changes, place the two alternative observations and their $m-2$ common retained observations in one size-$m$ indexed sample; the two LOO training samples are its two deletions, giving a $2\beta_m$ loss change. This preserves the planned constants and monotonicity convention with a complete local argument.
- Scheduling evidence conflict: the batch-6 dispatch prompts give input SHA-256 `69025dde350f98b7148b6e768b5696a275290fe171748be48746b2924054386`; the current `research/machine-learning-all-101-2026-10-19-batch-dependency-levels.json` records `input_sha256` `ae5958f3538e11bf0c79b52ca607ed705f1fd575eae21b6d734fffbe1c15ae0c`. Both identify batch 6 at dependency level 3 requiring batch 5. This is recorded in `batch-6.dependency-inputs.json`; the shared scheduler artifact is left to the owner.

## Scaffold inventory and item levels

The inventory, direct logical dependencies, and item dependency levels are recorded in `research/machine-learning-all-101-2026-10-19-batch-6.pages.json` before item carriers were created.

| Item | Level | Direct in-run suppliers |
|---|---:|---|
| `def-uniform-algorithmic-stability` | 0 | none |
| `thm-strongly-convex-regularized-erm-stability` | 1 | `def-uniform-algorithmic-stability` |
| `thm-uniform-stability-expected-generalization` | 2 | `def-uniform-algorithmic-stability`, `def-supervised-learning-problem`, `def-population-and-empirical-risk` |
| `thm-uniform-stability-high-probability-generalization` | 3 | `def-uniform-algorithmic-stability`, `thm-uniform-stability-expected-generalization`, `def-supervised-learning-problem`, `def-population-and-empirical-risk` |
| `ex-strongly-convex-regularized-loss-stability` | 2 | `def-uniform-algorithmic-stability`, `def-supervised-learning-problem`, `def-population-and-empirical-risk`, `thm-strongly-convex-regularized-erm-stability` |
| `ex-one-nearest-neighbor-has-unit-deletion-instability` | 2 | `def-uniform-algorithmic-stability`, `def-supervised-learning-problem`, `def-population-and-empirical-risk` |
| `ex-stability-versus-training-accuracy-and-rademacher-bound` | 3 | `def-uniform-algorithmic-stability`, `def-supervised-learning-problem`, `def-population-and-empirical-risk`, `def-rademacher-complexity`, `thm-rademacher-uniform-generalization` |

External mathematical suppliers include `def-identically-distributed-and-iid-random-variables`, finite-product measure uniqueness, Fubini for $L^1$, `thm-mcdiarmid-bounded-differences`, `def-axiom-of-choice`, and Cauchy–Schwarz. Their relevant statements/proofs were inspected. No A-page helper item was needed beyond the four planned interfaces.

## Supplier body and readiness observations

- ML-01: read `def-supervised-learning-problem`, `def-population-and-empirical-risk`, and `lem-population-and-empirical-risk-are-measurable`. Their Step-1 records exist and say `ready`; the full-run snapshot/hash check is still pending. The stability theorems explicitly assume the sample-dependent loss and risk maps are measurable rather than inferring a selector-measurability result from the fixed-predictor lemma.
- ML-04: read the current `def-rademacher-complexity`, `thm-rademacher-uniform-generalization` statement and proof, and the required A-page inventory. Their Step-1 records exist and say `ready`; hash currency is still pending. The prior theorem record separately notes an open ML-02 page-context edge; this batch uses only its stated finite-class comparison interface and does not infer page acceptance from that record.
- MSF-18: read the published concentration page and `thm-mcdiarmid-bounded-differences` statement/proof. McDiarmid explicitly assumes AC and requires an integrable measurable function with deterministic coordinate oscillations; the high-probability item carries those assumptions and declares AC as a direct dependency.
- Measure prerequisites: inspected the published IID definition, product-measure rectangle/uniqueness theorem, Fubini theorem and its Tonelli supplier, and Cauchy–Schwarz statement/proof. These are cited only where the local proofs use them.

## Full-text source reading

- Bousquet and Elisseeff, “Stability and Generalization,” JMLR 2 (2002), full 28-page PDF: `https://www.jmlr.org/papers/volume2/bousquet02a/bousquet02a.pdf`. Inspected Definitions 6 and 8, Lemma 7, the full Theorem 12 proof (printed pp. 503–508), equations (19)–(20), Lemmas 20–21, Theorem 22 and its proof, and the separate bounded-loss warning/Lemma 23 (printed pp. 512–516). The local arguments reprove the claimed bounds; the source does not replace a local proof.
- Mohri, Rostamizadeh, and Talwalkar, *Foundations of Machine Learning*, 2nd ed. (MIT Press, 2018), complete 505-page PDF: `https://moodle2.units.it/pluginfile.php/757669/mod_resource/content/1/Mohri%20et%20al.%20-%202018%20-%20Foundations%20of%20machine%20learning.pdf`. Inspected Definition 14.1, the full Theorem 14.2 proof (printed pp. 334–336), objective (14.6), Definition 14.3, and the full Proposition 14.4 proof (printed pp. 336–339). This independently treats replacement stability and the RKHS bound; its replacement coefficient is kept distinct from the deletion coefficient.
- `source-fetch-check --stamp` has not yet been run. No retrieval failed, so no `source_resolution` recovery record is applicable.

## Checks and next actions

- Scaffold JSON parses; item-level checks and all item carrier/proof-layout checks are pending until after the final carrier edits.
- Final readiness must use `node tools/step1-decisions.mjs record` against the actual repository/full run only. If the current incomplete frontier prevents the ordinary snapshot, preserve each attempted command and its exact error here and leave the affected items `escalated`.
- Next: author A-page suppliers in item-level order, then the B-page examples; update these notes after each item; finish source coverage/evidence, proof contracts, cross-batch rows, dependency inputs, scoped checks, and readiness decisions.

## Item checkpoint — `def-uniform-algorithmic-stability`

- Authored the complete deletion-stability definition with ambient sample size retained by the deletion operation, a permutation-invariance convention, nonincreasing coefficient sequence, and the derived replacement coefficient $2\beta_n$. This is the first supplier item on the A page.
- Logical dependencies: none; `dependency_level: 0` in the scaffold manifest.
- Sources read in full at the relevant passages: Bousquet–Elisseeff, Definitions 6 and 8, printed pp. 503–504, official full PDF `https://www.jmlr.org/papers/volume2/bousquet02a/bousquet02a.pdf`; Mohri et al., Definition 14.1, printed p. 334, complete book PDF `https://moodle2.units.it/pluginfile.php/757669/mod_resource/content/1/Mohri%20et%20al.%20-%202018%20-%20Foundations%20of%20machine%20learning.pdf`. The book uses replacement stability; the item preserves the deletion convention and records the factor-two conversion explicitly.
- Decision: item authored as planned; no unresolved mathematical dependency. The `source-fetch-check --stamp` and final mechanical checks remain pending; no source retrieval failed, so no `source_resolution` recovery record exists.
- Next: prove the regularized RKHS stability theorem at level 1, using this exact deletion interface and the original-$m$ normalization.

## Item checkpoint — `thm-strongly-convex-regularized-erm-stability`

- Authored the fixed-$m$ deletion theorem for a measurable RKHS supervised loss: attained full and deleted minimizers, convex $\sigma$-Lipschitz cost, bounded kernel diagonal, and $\beta_m\le\sigma^2\kappa^2/(2\lambda m)$. The statement explicitly says the result supplies no uniform bounded-loss constant.
- The proof is local: the quadratic penalty gives a $\lambda\|f-g\|^2$ objective gap for each minimizer; adding the full/deleted gaps cancels the common data terms, and the reproducing property plus Cauchy–Schwarz converts the norm gap to the uniform loss bound. Uniqueness of each minimizer gives permutation invariance. The deleted objective retains denominator $m$.
- Dependencies: `def-uniform-algorithmic-stability`, `def-supervised-learning-problem`, `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`; manifest level 1. Source locators: Bousquet–Elisseeff equations (19)–(20), Lemmas 20–21, Theorem 22 proof, printed pp. 512–515; Mohri et al. Proposition 14.4 proof, printed pp. 337–339 (replacement convention comparison).
- Decision: claim and proof drafted with no unresolved mathematical gap. Full source stamps, final proof-layout and dependency checks, and supplier hash checks remain pending.
- Next: author the expected generalization theorem at level 2, including the choice-free IID/product-integral argument and its LOO expectation consequence.

## Item checkpoint — `thm-uniform-stability-expected-generalization`

- Authored the planned training-gap upper bound $2\beta_m$ and leave-one-out-gap upper bound $\beta_m$, plus the deterministic risk-change bound $|R_P(A_S)-R_P(A_{S\setminus i})|\le\beta_m$ used to keep the high-probability proof's coordinate argument local. The statement specifies the supervised loss, product sample, boundedness, measurability, ambient-size deletion outputs, and choice-free branch.
- Dependencies: `def-uniform-algorithmic-stability`, ML-01 `def-supervised-learning-problem` and `def-population-and-empirical-risk`, published IID and finite-product sigma-algebra definitions/results, product-measure uniqueness, $L^1$ Fubini, integrability, integral linearity, and the integral triangle inequality. In-run level is 2 from the current ML-01 risk supplier at level 1; no cycle was introduced.
- Proof route: adjoin one independent product coordinate, use product-rectangle invariance for the swap identity, then use two deletion comparisons for expected training gap. For LOO, condition by product integration on the retained observations and integrate the pointwise deletion-stability inequality; the same pointwise argument proves deterministic risk-change stability. This proof is choice-free.
- Sources: Bousquet–Elisseeff Lemma 7 and proof, printed pp. 503–504, JMLR full PDF; Mohri et al. Theorem 14.2 complete proof, printed pp. 334–336, full second-edition book PDF. URLs and source dispositions are recorded above and will be stamped in batch coverage.
- Decision: proof drafted. Scoped precheck and final proof-layout have not yet been run. No mathematical gap identified; full-run readiness/hash checks for current ML-01 records and source fetch stamps remain pending.
- Next: author the high-probability theorem at level 3, carrying AC explicitly through McDiarmid and proving both coordinate-oscillation bounds locally.

## Item checkpoint — `thm-uniform-stability-high-probability-generalization`

- Authored the two separate probability bounds with the planned constants: training risk $2\beta_m+(4m\beta_m+M)\sqrt{\log(1/\delta)/(2m)}$ and LOO risk $\beta_m+(4m\beta_m+M)\sqrt{\log(1/\delta)/(2m)}$. The statement carries AC, common bounded loss, product-IID sampling, sample-map measurability, and the nonincreasing deletion sequence.
- Dependencies: the local stability definition and expected theorem; current ML-01 supervised/risk definitions; published IID definition, natural-log definition/laws, AC axiom, and McDiarmid theorem. Item level 3 follows from the level-2 expected theorem.
- Proof route: replacement of one coordinate changes population risk by at most $2\beta_m$ and empirical risk by at most $2\beta_m+M/m$. For LOO, a size-$m$ indexed sample containing both replacement values supplies the two size-$(m-1)$ training sets as deletions, so all $j\ne k$ LOO terms change by at most $2\beta_m$ without comparing $\beta_{m-1}$ with $\beta_m$. The $j=k$ term costs at most $M/m$. Both coordinate bounds are $4\beta_m+M/m$; expected terms come from the preceding theorem. The zero-oscillation case and $m=1$ boundary are stated in the proof.
- Sources: Bousquet–Elisseeff Theorem 12 and complete proof, printed pp. 506–508; Mohri et al. Theorem 14.2 and complete replacement-convention proof, printed pp. 334–336. The source's LOO proof's $\beta_{m-1}$ inequality is not used.
- Decision: proof drafted with no unresolved mathematical gap. Scoped precheck, proof-layout, source stamps, and full-run supplier-hash checks remain pending.
- Next: author the level-2 finite absolute-loss RKHS example and then the level-2 nearest-neighbor witness.

## Item checkpoint — `ex-strongly-convex-regularized-loss-stability`

- Authored a one-point RKHS example with Bernoulli labels, absolute loss, and the same fixed-$m$ deletion objective. The minimizer for any retained index set is the clipped $(p_J-r_J)/(2\lambda m)$ formula; all predictions lie in $[0,1]$, loss bound is $M=1$, and the theorem gives $\beta_m\le1/(2\lambda m)$. Population and empirical risk formulas are stated explicitly.
- Dependencies: `def-uniform-algorithmic-stability`, `def-supervised-learning-problem`, `def-population-and-empirical-risk`, `thm-strongly-convex-regularized-erm-stability`; level 2.
- Verification proves the minimizer on $[0,1]$, rules out minima on both outside intervals including the empty retained set, checks the loss and Lipschitz constants, and applies the local RKHS theorem. No source beyond those local suppliers is needed for the generated finite example.
- Decision: argument drafted; scoped precheck/proof-layout and supplier hash checks remain pending.
- Next: author the level-2 nearest-neighbor deletion witness.

## Item checkpoint — `ex-one-nearest-neighbor-has-unit-deletion-instability`

- Authored a permutation-invariant 1-nearest-neighbor rule with majority voting among tied nearest points and tie-to-zero resolution. For every $m\ge2$, the one-point-at-0 / $m-1$-copies-at-10 sample has empirical risk zero, while deleting the point at 0 changes loss at test point $(1,1)$ from 1 to 0. The zero-one loss range gives the matching upper bound, so $\beta_m=1$ exactly.
- Dependencies: `def-uniform-algorithmic-stability`, `def-supervised-learning-problem`, `def-population-and-empirical-risk`; level 2.
- Verification checks permutation invariance, both nearest-point comparisons, the empirical average, and the supremum upper/lower bounds. Scoped precheck/proof-layout and supplier hash checks remain pending.
- Next: author the level-3 stability/training-accuracy and Rademacher comparison example.

## Item checkpoint — `ex-stability-versus-training-accuracy-and-rademacher-bound`

- Authored the finite $N$-point example with a zero-risk constant learner and an unstable memorizer that has zero training risk but population risk $(N-1)/N$. The one-sided Rademacher complexity of the full loss class at $m=1$ is exactly $1/2$, making the two-sided class-wide bound no sharper than the trivial unit loss range. AC is assumed only for that Rademacher theorem; the finite calculations are choice-free.
- Dependencies: `def-uniform-algorithmic-stability`, ML-01 supervised/risk definitions, batch-5 `def-rademacher-complexity` and `thm-rademacher-uniform-generalization`, published IID, natural-log definition/laws, and AC items; level 3.
- Verification checks measurable finite class, permutation invariance, both learners' population/training risks and deletion coefficients, the two-sign average, and the theorem's confidence term. Scoped precheck/proof-layout and current supplier hash checks remain pending.
- Decision: all seven planned items now have draft carriers and complete local arguments. Source stamps, proof contracts, final scoped checks, and ordinary full-run readiness recording remain outstanding.
- Next: create the A/B frontmatter-only page files, finish source coverage/evidence and proof contracts, then run scoped dependency/precheck/layout checks and ordinary readiness recording.

## Source retrieval checkpoint

- `node tools/source-fetch-check.mjs --coverage research/machine-learning-all-101-2026-10-19-batch-6.coverage.json --stamp` exited 0 and fetched/stamped both sources. `node tools/source-fetch-check.mjs --coverage research/machine-learning-all-101-2026-10-19-batch-6.source-coverage.json --stamp` exited 0 and confirmed both copied content-bound stamps without a new fetch.
- Bousquet–Elisseeff JMLR PDF: 308350 bytes, 28 pages, stamp `340bd6bdb2f973f4`, at `2026-10-18T23:22:23.424Z`.
- Mohri et al. second-edition PDF: 8702755 bytes, 505 pages, stamp `02a84bb2eba4c4fb`, at `2026-10-18T23:22:27.406Z`.
- Detailed locators, item dispositions, full-text readings, and 24 additional logical-supplier inspections are in `research/machine-learning-all-101-2026-10-19-batch-6.source-evidence.json`; the fetch stamps are in both batch coverage files. No retrieval failed, so there is no source-resolution retry/drop/escalation record.

## Final reconciliation and validation — 2026-10-18 UTC

- Final A/B inventory is seven items across the assigned A/B pair, below the 100-item cap. Both page files remain YAML-frontmatter-only with empty bodies. The claim sections are link-free; their references remain in the immediately following `Definition references`, `Statement references`, or `Example references` sections.
- Final item levels remain `def-uniform-algorithmic-stability` 0, `thm-strongly-convex-regularized-erm-stability` 1, `thm-uniform-stability-expected-generalization` 2, `thm-uniform-stability-high-probability-generalization` 3, `ex-strongly-convex-regularized-loss-stability` 2, `ex-one-nearest-neighbor-has-unit-deletion-instability` 2, and `ex-stability-versus-training-accuracy-and-rademacher-bound` 3. Recomputing from all 101 run manifests and actual in-run supplier levels matched all seven labels. The RKHS theorem's direct dependencies were narrowed to the local stability definition and published Cauchy–Schwarz supplier; its proof states the measurability and attainment hypotheses directly. The manifest and carriers agree.
- Mathematical correction: the high-probability proof initially used the threshold $c\sqrt{\log(1/\delta)/(2m)}$ while claiming the McDiarmid tail probability was $\delta$. Since there are $m$ coordinate bounds equal to $c$, both applications now use $t=c\sqrt{m\log(1/\delta)/2}$, which gives $\exp(-2t^2/(mc^2))=\delta$ and converts to the statement's $(4m\beta_m+M)\sqrt{\log(1/\delta)/(2m)}$ term. The proof also explicitly cites IID independence. The `m=1` LOO case and zero-oscillation case remain handled.
- `research/machine-learning-all-101-2026-10-19-batch-6.proof-contracts.json` covers all seven items, all 22 numbered proof steps, and all 36 fact-to-supplier citations with exact current excerpts. It records each step's inputs, all eight standard boundary dispositions, and finite checks for the three examples. `node tools/proof-contract.mjs ... --strict` passes with 0 errors and 0 warnings.
- Final scoped mechanical results: precheck passed all six proof-bearing carriers (the definition is n/a); `node tools/proof-layout.mjs` passed 7 items/22 steps/0 defects; rendercheck passed all 7 carriers and 2 pages; content-policy passed 7 scoped items/0 errors/0 warnings; the coverage checklist passed 1 page/9 harvested results/0 errors/0 warnings; scoped depcheck passed the 7 items and its 640-item/275-page prerequisite-cycle closure. A separate page/statement audit confirmed empty page bodies, no links inside complete claim sections, and no page-cap violation. `source-fetch-check --stamp` reverified both source stamps (2/2, 0 new stamps).

### Readiness records and unresolved supplier checks

- Native `step1-decisions record` records were written without `--owner`: `def-uniform-algorithmic-stability` and `thm-strongly-convex-regularized-erm-stability` are `ready`; both records' dependency-bound hashes were checked current after final edits.
- The other five records are `escalated` with their examined dependencies and exact blockers: `thm-uniform-stability-expected-generalization`, `thm-uniform-stability-high-probability-generalization`, `ex-strongly-convex-regularized-loss-stability`, and `ex-one-nearest-neighbor-has-unit-deletion-instability` await full-run hash/currency verification of batch-2 `def-supervised-learning-problem` and/or `def-population-and-empirical-risk`. Their bodies and stated hypotheses were inspected; current Step-1 rows say ready, but the hash recheck is open. The high-probability item also depends on the escalated expected theorem. `ex-stability-versus-training-accuracy-and-rademacher-bound` additionally awaits batch-5 `def-rademacher-complexity`, `thm-rademacher-uniform-generalization`, and the required Rademacher page-context check; those bodies were inspected, but hash/currency remains open. The Rademacher theorem's separate ML-02 page-context note is not used as a proof premise.
- `batch-6.cross-batch-dependencies.json` keeps the published concentration page verified and the Rademacher page plus affected batch-2 and batch-5 item edges open. Those items are present and their interfaces were used to complete the proofs/examples; no absent supplier content or approval is represented as complete.

### Owner-level run reconciliation

- The dispatch records input SHA-256 `69025dde350f98b7148b6e768b5696a275290fe171748be48746b2924054386` and declares prerequisite batch 5. A current derived graph at `2026-10-18T23:43:19.750Z` computed batch 6 at level 3 with required batches `[2, 5]`, because the actual batch-6 item dependencies also use batch-2 ML-01 items. At that check the shared scheduler artifact stored input SHA-256 `29ea310cc07551424801e9880c98a70864c3f28ee142e944d94d84c6785ea3ed`; recomputation produced `302b4eaf63a30de49e0009abf33793319bcc4a0d46c970d2536dc6cc7522c6eb`. `node tools/batch-dependency-levels.mjs check --run machine-learning-all-101-2026-10-19` reported `Stale batch dependency levels ...; recompute before authoring`. The shared scheduler artifact was left untouched; the exact observed check is preserved in `batch-6.dependency-inputs.json`.
- Full-run `proof-contract-coverage` could not load the entire frontier: it returned `Empty or invalid frontier page inventory active-querying-version-spaces-and-abstention`. The full Step-1 check reports 1,172 items, 996 ready, and remains open with other batches' missing records and empty scaffold inventories. This prevents declaring global coverage complete; no other pair's files were edited.
- Owner reconciliation needed: rederive the shared batch graph against live manifests and the dispatch input, verify the open batch-2 and batch-5 hashes/page context, and complete the unrelated empty inventories before the global coverage gate can close. The local pair is fully drafted and mechanically checked; the five escalations above remain explicit. These author records are not independent approval.
