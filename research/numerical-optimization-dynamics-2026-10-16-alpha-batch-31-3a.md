# Batch 31 Step 3a adjudication

Run: `numerical-optimization-dynamics-2026-10-16`; group: `batch-31`.

Review proceeds in the generated dependency order. No agents or judge cycles are used.

## Level 1

`alg-explicit-poisson-tau-leaping`: accepted reader repair. The finite grid, finite scalar Poisson parameters, product conditional law, zero-rate absorption, invalid-endpoint holding, and finite-budget prefix branches specify the output. For B=0 and positive rate, no draw is made; for a zero rate, absorption takes precedence. The source definition requires an actual x0 in E, excluding empty E for this execution. Removing procedure-level complexity/property assertions is consistent with the algorithm contract. Poisson mass normalization and moments and the reaction-system Definition were read in full. No additional repair is necessary. Its consumers use the count law and endpoint semantics, which are preserved.

Initial checkpoint: risk-report ran successfully (16 routed items). The completed higher-level reviews, finding disposition and final checks are recorded below.

## Level 2

`lem-poisson-tau-leap-moment-and-covariance-identities`: Read all three proof steps and the reaction-system, algorithm and scalar Poisson suppliers. Finite parameters give finite second moments; conditional independence removes cross covariances; trace covariance plus squared mean gives the third identity. h=0, all rates zero, one channel and zero increments give the displayed zero/scalar cases. Audit enrichment only; mathematical carrier unchanged.

`ex-chemical-langevin-near-empty-poisson-birth`: Read steps 1.1–4.1 and all direct supplier statements and relevant Brownian/Poisson construction proofs. AC is explicit and inherited by normal/Brownian existence and future-increment interfaces. Independent increments give the constant-rate Poisson generator; affine Brownian motion is Markov and its Taylor remainder is O(h^(3/2)). Integration by parts gives normal moments; the Poisson factorial third moment gives the exact cubic difference mu/V^2. Positive V, lambda,T exclude the degenerate variance; the Gaussian negative tail tends to 1/2 as V mu tends to zero. The unbounded cubic payoff is explicitly excluded from the general bounded-payoff theorem. Accepted reader repair; manifest dependency mirror needs synchronization.

`ex-poisson-tau-leap-negative-population-pure-death`: Read both verification steps and each of the four direct suppliers. At x0=1, invalidity is exactly K>=2; its probability is 1-exp(-ch)(1+ch)>0 for c,h>0, with leading term c^2 h^2/2. The exact model takes its only positive-rate transition from 1 to absorbing 0. h=0 is excluded, with zero limiting defect; no assertion extends the rates to negative physical states. Audit enrichment only.

All three risk reviews are complete. No mathematical item edits at this level; the CLE manifest mirror will be reconciled within batch 31. Next: coupled-level variance.

## Level 3

`thm-minimum-intensity-tau-leap-level-variance`: accepted reader repair. Read all six proof steps and every direct supplier. Shared counts cancel; bounded rates on the integer lattice give |delta_j|<=L||x-z||, including zero extensions outside E. First-half increment moments are O(h); conditioning the second centered residual on the full first-half history kills its cross term. For nonzero lattice error ||e||>=1 controls linear errors, yielding u_next<=(1+Ch)u+Ch^2 from u0=0. T/(2h) iterations give O(h), and bounded payoff variance is controlled by lattice disagreement probability. h>1 uses the trivial 4||g||^2 bound. Common x0 and h0=T correct the omitted hypotheses. Coarse half-counts have fixed conditional coarse marginal, so accumulating them gives the 2h leap. No change needed.

Risk review complete. Next: guarded algorithm, finite Dynkin identity and one-step weak defect.

## Level 4

`alg-critical-reaction-binomial-guarded-tau-leaping`: Read the full defining procedure and all seven direct prerequisite interfaces. Finite E, nonzero jumps and x0 in E make each capacity finite and nonnegative. Empty critical set skips SSA; a nonempty restricted system preserves admissible positive-rate destinations. Fresh SSA streams determine the first event before tau; independent uniforms give the sequential binomial law even with random delta. Every p is nonnegative and p>1 returns a prefix; recomputed capacities protect each accepted noncritical update. Critical poststate is checked separately. Budget B=0, zero rate, p=0/1, no event and horizon equality have explicit branches. Countable Choice/DC are declared for stream construction and the exact event interface. Reader removed unproved properties from the algorithm; no new correctness theorem is asserted.

`lem-bounded-rate-reaction-generator-dynkin-identity`: Read all three proof steps, the finite-state exactness proof, race proof, stream and choice interfaces. Bounded total rate gives uniform zero/one/multiple-event errors at most O(delta^2), including zero-increment marked events. Finite state set and continuous time derivatives give a uniform o(delta) expansion. Summation over deterministic partitions telescopes; finite marked event count makes the integrand piecewise continuous, with deterministic bounds permitting dominated convergence. Absorbing F reduces to the fundamental theorem of calculus; zero rates and T=0 yield the expected identities. Density-lattice use is by integer relabeling, not by assuming an infinite-state Dynkin theorem. No defect found.

`lem-poisson-tau-leap-one-step-weak-defect`: Confirmed refuter:31:1: max over empty E was undefined. Replaced A by max({0} union {sum_j a_j(x):x in E}) and explicitly proved the empty-E identity-kernel case. Read all steps and all nine actual prerequisite interfaces. For nonempty E the zero, single and multiple-count errors sum to 2 G A^2 h^2; the factorial second moment controls multiple counts. The exact event split gives the same bound by conditioning after the first event. Zero increments remain marked and cause no error. Absorbing outside states have zero defect, so the supremum on the entire lattice is valid. h=0 and A=0 give zero bounds. Direct consumer weak-order theorem requires x0 in E and uses only the unchanged operator bound; no consumer edit is needed. No outside direct consumer was found.

All level-4 risk reviews are complete. The weak-defect Statement repair preserves every nonempty-state bound and covers E empty without introducing a process on an empty initial-state space: its absorbing extension is the identity kernel on the full lattice. No supplier outside batch 31 was edited. Next: density model estimate, weak order and examples.

## Level 5

`thm-density-scaled-chemical-langevin-model-error`: Read all proof steps, generator Definition, finite Dynkin lemma and choice interfaces. For fixed V, the translated bounded lattice region has finitely many states and exit destinations; y=V(x-x0) gives integer channel increments. C3 extension and segment bound imply Taylor remainder M||nu_j||^3/(6V^3), multiplied by Va_j. Stopped backward equation cancels the CLE generator in Dynkin; time derivative vanishes on absorbing exit states by the assumed boundary values. The terminal and initial values give the expectation difference. Integrating gives TM sum A_j||nu_j||^3/(6V^2). The two separate exit probabilities each carry 2G. Existence, regularity and global payoff bounds are assumptions, and M need not be uniform in V unless supplied; no discretization or universal uniform-volume claim is inferred. No defect found.

`thm-poisson-tau-leap-weak-order-one-with-exit-bound`: Read all three steps and all eight prerequisite interfaces. x0 in E excludes empty E, so its unchanged maximum equals the repaired supplier A. Markov contractions and the noncommutative telescoping identity give N times the one-step 4A^2h^2 bound. Positive one-event destinations remain in E, while the total-count factorial moment bounds invalid-step probability by A^2h^2/2 before exit. Union over N steps gives A^2Th/2, with freezing thereafter. Bounded g is required globally because a leap can exit; rates are bounded only on finite E and zero outside. h=0 is interpreted only in the zero-time kernel limit, while the stated grid uses positive duration; N=0 would mean T=0 and the expectation/exit assertions are trivial. No consumer repair needed after the supplier maximum repair. Audit enrichment accepted.

`ex-binomial-guard-prevents-invalid-counts-but-changes-noise`: Read the three verification steps and all eight direct suppliers. n>=1 and 0<=nc<n make the sole channel noncritical; tau=min(h,h,1/c)=h and critical SSA is skipped. p=1/2 and capacity n imply 0<=K_B<=n, mean n/2 and variance n/4 from independent Bernoulli trials. The Poisson counterpart has mean and variance n/2 and positive mass above n. n=1,nc=0 and B=1 are valid boundary witnesses. Choice assumptions are declared for the general procedure and no SSA call is inferred in this example. No statement about the general guarded algorithm preserving Poisson error or variance is made. Audit enrichment only.

`ex-stiff-reversible-explicit-leap-mean-amplification`: Read both verification steps and all six supplier interfaces. With c1,c2>0 and finite M>=1, Dynkin for coordinate f yields an absolutely continuous linear mean equation. The integrating factor proves the exact mean. One-step Poisson moments give amplification 1-lambda h, exceeding unit magnitude exactly beyond 2/lambda for positive h; equality at 2/lambda is neutral. For c1=c2=r, x0=0 and h=3/(2r), the leap mean is 3M/2 whereas the exact mean is M(1-exp(-3))/2. Invalid endpoints are retained, and no global multi-step recurrence past invalidity is claimed. Audit enrichment only.

All four level-5 risk reviews are complete. Next: MLMC prerequisite interfaces and the page obligation.

## Level 6 and page

`cor-mlmc-complexity-for-poisson-tau-leaping`: Read both proof steps, the three MLMC prerequisite carriers in full, and the actual weak-bias/coupled-variance suppliers. The common dyadic hierarchy has alpha=beta=1; bounded g gives an integrable target, square-integrable corrections and a finite base variance that is bounded by C h0 after enlarging C for fixed T>0. Shared/residual coupling costs at most a fixed multiple of R per fine step under the declared ideal unit-cost convention, so correction cost is O(h_l^-1). The generic theorem requires alpha>=1/2 and beta>0, satisfied here. Its deterministic positive integer sample allocation controls sampling variance and bias, including its O(epsilon^-1) rounding cost; the beta=1 branch gives epsilon^-2(log epsilon^-1)^2. Independent blocks are required by the generic estimator. No guarded-binomial correctness or error estimate is imported. Audit enrichment only.

`tau-leaping-and-reaction-diffusion-model-error`: accepted reader repair. Read the whole current page. Its finite-state weak-error and exit qualification, integer-lattice shared-count variance, smooth stopped-backward-solution model-error qualification, and guarded algorithm status/no-Poisson-guarantee qualifications agree with the actual item interfaces. Removing the unsupported event-count SSA cost comparison is sound. Item presentation order is independent of the generated adjudication order and introduces no mathematical circularity.

All twelve HIGH/CRITICAL current risk reviews are complete. No published mathematical defect found in the actual uses reviewed; no published item edit or published-ledger entry is required.

## Finding, repairs and consumer propagation

`refuter:31:1`: confirmed_fatal, completely repaired, confidence 1. The refuter observed-carrier fingerprint `1fbc25d29a4b87a4f62dc6e5c9da1ea5719c53864dfc15b82d3618dbceb87c32` equals the canonical composite hash of the frozen post-reader item/contract/manifest carrier. The pre-edit raw item hash `751bf0925c9e083e4217b9b2f84f3a516b2c752ad9fddd2d40f4f3501ff7979f` equals both frozen item hashes. This is a bound current defect, with no historical-byte uncertainty. The repaired maximum includes zero and the proof explicitly disposes of E empty. Its three quantitative bounds remain unchanged.

All eleven touched raw item hashes matched the post-reader snapshot before this adjudication. Four had source edits (the two algorithms, coupled variance theorem and CLE example); the other seven touched carriers had contract enrichment only. The weak-defect lemma is the only item edited during this adjudication. Its Statement and proof provenance are now ai-altered; the source URLs remain present and no judge record existed to invalidate.

Direct consumer search over items and library pages found only batch-31 uses of the edited reader interfaces and the repaired lemma. Explicit-leap consumers use its preserved product count law and invalid-state convention. The guarded example uses its empty-critical-set first binomial step; MLMC cites the guard only to exclude transfer of guarantees. The variance theorem's sole logical consumer, MLMC, imports its common-start finite-state hypotheses. The CLE example has only its examples-page presentation consumer, whose support and unbounded-payoff qualifications remain correct. The repaired lemma's sole logical consumer is the weak-order theorem: x0 in E ensures nonempty E, so its A agrees exactly with the repaired A. No consumer needs a mathematical edit and no next-hop propagation is triggered. Stable IDs and proposed withdrawals are retained (none proposed here).

Batch metadata amendments: synchronize the three Brownian dependencies in the CLE manifest row; refresh all owned full reaction-system Definition quotes after the batch-10 zero-inclusive maximum repair; refresh the weak-order contract's quote of the repaired lemma; correct two stale boundary-step locators and add explicit Definition locators to the guarded algorithm's existing checks. These are metadata/audit amendments, not extra mathematical defects. The initial strict contract check found two unanchored guarded-algorithm boundary evidence strings; both now name the actual Definition/procedure locations. No mechanical failure received a defect row.

## Sources and scope limits

Direct local mathematical suppliers were read at their actual Definition/Statement and relevant proof locations, as specified in the item reviews above. No supplier acceptance or mathematical certification is inferred from existing stamps. This is not a recursive audit of all foundational transitive suppliers.

Primary-source cross-checks in this session:

- [Gillespie (2001)](https://moodle2.units.it/pluginfile.php/293921/mod_resource/content/1/Gillespie_2001_Approximate_accelerated_stochastic_simulation_of_chemically_reacting_systems.pdf), §III equations (16)–(18) and §IV equations (19)–(20): independent frozen-rate Poisson counts and the separate large-count condition for the Gaussian approximation. The local finite-state estimates are proved directly.
- [Anderson–Higham](https://strathprints.strath.ac.uk/36279/1/8509181.pdf), §6 equations (16)–(18), Algorithm 2 (PDF pp. 11–13), and Algorithm 3/Theorem 2 (PDF pp. 14–15): shared/residual intensities, frozen coarse rates, and equal initial states. The local theorem proves its own bounded lattice estimate and distinguishes the exact event-time construction.
- [Li Lecture 21](https://www.math.pku.edu.cn/teachers/litj/notes/appl_stoch/lect21.pdf), §§3.2–3.4 (PDF pp. 3–6): CLE scaling, sequential capacity binomial procedure, altered finite-capacity noise, and reversible-system mean amplification. Local examples independently verify these calculations.
- [Giles](https://people.maths.ox.ac.uk/gilesm/files/opre.pdf), Theorem 3.1 (PDF pp. 5–6): the conditional alpha/beta/cost-rate interface agrees with the fully read local supplier; no SDE-specific convergence result is imported into the reaction model.

The browser could not retrieve the cited Li 2007 paper in this session. Its proof is not substituted for any missing prerequisite: the elementary finite-state event expansions, partition argument and operator telescoping are completely authored and independently checked locally. Earlier reports' source readings remain attributed to those reports. No mathematical uncertainty requiring escalation remains in these assigned obligations.

## Final dispositions

| Obligation | Verdict | Closed defect |
| --- | --- | --- |
| `touched:31:alg-explicit-poisson-tau-leaping` | accepted_repair | `nod-20261016-b31-3a-explicit-procedure` |
| `touched:31:lem-poisson-tau-leap-moment-and-covariance-identities` | reviewed_no_defect | none (audit enrichment) |
| `touched:31:ex-chemical-langevin-near-empty-poisson-birth` | amended_repair | `nod-20261016-b31-3a-cle-generator` |
| `touched:31:ex-poisson-tau-leap-negative-population-pure-death` | reviewed_no_defect | none (audit enrichment) |
| `touched:31:thm-minimum-intensity-tau-leap-level-variance` | amended_repair | `nod-20261016-b31-3a-variance-initial-data` |
| `touched:31:alg-critical-reaction-binomial-guarded-tau-leaping` | amended_repair | `nod-20261016-b31-3a-guarded-procedure` |
| `touched:31:lem-poisson-tau-leap-one-step-weak-defect` | amended_repair | `nod-20261016-b31-3a-empty-rate-maximum` |
| `refuter:31:1` | confirmed_fatal | `nod-20261016-b31-3a-empty-rate-maximum` |
| `touched:31:thm-poisson-tau-leap-weak-order-one-with-exit-bound` | reviewed_no_defect | none (audit enrichment) |
| `touched:31:ex-binomial-guard-prevents-invalid-counts-but-changes-noise` | reviewed_no_defect | none (audit enrichment) |
| `touched:31:ex-stiff-reversible-explicit-leap-mean-amplification` | reviewed_no_defect | none (audit enrichment) |
| `touched:31:cor-mlmc-complexity-for-poisson-tau-leaping` | reviewed_no_defect | none (audit enrichment) |
| `page:31:tau-leaping-and-reaction-diffusion-model-error` | accepted_repair | `nod-20261016-b31-3a-page-cost` |

The verdict amendments for the guarded procedure and variance theorem retain the sound reader mathematical text and add current contract evidence; the CLE amendment also reconciles its dependency mirror. Each completed repair has repair_confidence 1. The touched weak-defect decision and refuter finding explicitly share one closed row for the same repaired carrier; the page has its own summary-locus row. The four original reader mathematical repairs and the separately changed summary are retained rather than reversed.

## Final local validation and handoff

- Initial risk-report: 16 items, no tool errors. Required risk-report with --require-reviewed: all twelve HIGH/CRITICAL reviews complete, zero errors.
- Changed-item reflow completed; precheck passed (one proof checked, no failures).
- Final explicit proof-layout invocation: `node tools/proof-layout.mjs items/lem-poisson-tau-leap-one-step-weak-defect.md`: one item, three steps, zero defects. No item edits followed it.
- Changed-item rendercheck: one file, zero errors; all math spans and frontmatter parse with the actual renderer.
- Batch strict proof-contract check: 16/16 items, zero errors or warnings after the two boundary-locator corrections.
- Batch citation-fidelity: 70 citations, every quote found in its declared source section; no widening candidates from its three detectors. These are mechanical results, supplemented by the mathematical reviews above.
- Local decision/ledger consistency: exactly thirteen owed obligations, six distinct fixed defect rows with matching subjects and 3a-adjudicate ownership, and exactly twelve complete risk reviews. Current page raw bytes equal the frozen reader-result page hash.

Changed local carriers: one item; batch-31 contracts and page manifest; the task-named report and decisions; append-only confirmed rows plus the generated defect-ledger view; and the owned-consumer section of the frontier dependency ledger. No published content, other batch, schedule, engine state, original reader/refuter evidence, or snapshot was edited. Shared ledger additions by other workers are preserved.

No unresolved mathematical blocker or escalation remains for this dispatch. The reader's Brownian manifest-mirror blocker is resolved here; old authoring scheduling/context observations remain historical owner evidence and confer no authority to change engine state. Next action belongs to the engine: stamp current decision hashes, collect the dispatch and run its gate battery. No stamp, judge call, certification, publication or commit was performed here.


## Focused actual full-battery correction (2026-10-16T16:46:19.203019+00:00)

Fresh focused session; no original-session continuity or old source reading is claimed. The entire preceding report is preserved verbatim as historical evidence. Scope is only `alg-critical-reaction-binomial-guarded-tau-leaping` and its owned empty-boundary contract row. Read the complete actual Definition before the correction and the exact guarded source proposal. The dispatched `proposed/source.diff` path is absent; the actual supplied diff is `research/numerical-optimization-dynamics-2026-10-16-owner-step3-render-tauleap31-20261016T162951073901Z/source.diff`, and its single line join matches the proposed source bytes. All current carriers matched the full-byte preimages in `research/numerical-optimization-dynamics-2026-10-16-ROOT-step3-gate-r1-native-followups/b31/before-guards.json`; the source also matched the rendering proposal preimage.

Confirmed nonfatal rendering defect `nod-b31-gate-multiline-binomial-display` (breaking-runtime / ill-formed, definition): procedure step 3's binomial count/state-update display occupied two physical source lines. Replaced only the newline and three continuation spaces immediately after `\qquad` with one ASCII space. The result equals the exact guarded proposed source. Every mathematical token, instruction, frontmatter field, dependency, provenance field and all other source bytes are preserved; no Definition interface change, consumer re-review or new mathematical coverage is claimed.

Confirmed nonfatal contract mismatch `nod-b31-gate-empty-boundary-evidence` (accuracy / contract-row): the owned `contracts.alg-critical-reaction-binomial-guarded-tau-leaping.boundaries[0]` marked the genuine empty cases not_applicable. Replaced that row alone with the exact specific `empty` / `checked` proposal from `numerical-optimization-dynamics-2026-10-16-owner-step3-boundary-r1-non77/operations.json`. Actual anchors: Definition Inputs excludes an absent initial state by requiring x_0 in E; Procedure initializes P=[(0,x_0)]; step 2 assigns +infinity to the empty positive-propensity noncritical minimum and skips critical SSA for empty C(x); step 3 has no iterations for an empty noncritical set, returns critical-interface-required for positive propensity at zero capacity, and sets K_j=0 at zero capacity and zero propensity without division or a trial draw. The positive-capacity branch alone forms p_j and the binomial sum. No operational branch was altered.

The existing `touched:31:alg-critical-reaction-binomial-guarded-tau-leaping` acceptance remains amended_repair with repair_confidence 1; its prior evidence and defect reference are retained and the two focused proposal IDs are appended. All other decisions, original finding verdicts, risk reviews, manifest, source/birth/creator histories and merged contracts remain unchanged. Fixed ledger rows are proposals only at `research/numerical-optimization-dynamics-2026-10-16-ROOT-step3-gate-r1-native-followups/b31/proposed-fixed-rows.json`; the shared ledger was not written. No hashes were calculated or refreshed. No validator, formatter, proof-layout, precheck, test, gate, certification, judge or native control was run. Root owns decision seals, mandatory explicit changed-item proof-layout, ledger append and the full next battery. No guard drift or unresolved gap was encountered in this focused correction.
