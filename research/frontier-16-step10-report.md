# frontier-16 — Step 10 fatal-error report

**This is the owner pause.** Nothing in this run is `status: published`. All 324 items and 22 pages are still draft, and changing status remains the owner's publish action.

**Headline.** The mathematical closure is complete: **173 fatal defects were found; 170 were fixed, one was narrowed, and two unsupported draft items were withdrawn and durably deferred. No fatal defect remains open.** The engine-owned current-context receipt records 324/324 paired judge verdicts, no pending rejudge, no unadjudicated rejection, and no open fatal. The append-only defect ledger has 273 frontier-16 rows and no open row.

The level is **publishable on its mathematics**, but it is not yet ready for the status flip. Six pathway briefs gained pages and need owner-written sentences, and the engine must still rerun the terminal current-context gate, apply the reader-facing judge stamps, and make the close-out commit. The local report sandbox cannot execute the nested context-hash subprocesses, so its own terminal coverage and stamp probes are red for `spawnSync EPERM`; that limitation and the engine's green receipt are both recorded below.

## What was built

| batch | A page | items A + B | category |
|---:|---|---:|---|
| 1 | `the-inverse-function-theorem-completed` | 16 + 10 | real analysis |
| 1 | `convex-and-semicontinuous-functions-on-rn` | 31 + 13 | real analysis |
| 2 | `areas-of-elementary-plane-figures` | 15 + 6 | real analysis |
| 2 | `improper-and-parameter-dependent-multiple-integrals` | 15 + 4 | real analysis |
| 3 | `picard-lindelof-and-first-order-odes` | 26 + 8 | real analysis |
| 3 | `the-gauge-integral-and-cousins-lemma` | 18 + 9 | real analysis |
| 4 | `trigonometric-and-oscillatory-examples-in-one-variable` | 11 + 14 | real analysis |
| 5 | `measures-and-their-basic-properties` | 50 + 9 | measure theory |
| 6 | `the-seifert-van-kampen-theorem` | 15 + 5 | topology |
| 6 | `classification-of-covering-spaces` | 16 + 3 | topology |
| 7 | `analyticity-liouville-and-morera` | 22 + 8 | complex analysis |

| | outcome |
|---|---|
| pairs / pages | 11 A/B pairs; 22 draft pages |
| items | **324**: 235 on A pages and 89 on B companions |
| proof-bearing items | **271** |
| kinds | 87 theorem, 48 definition, 39 example, 37 lemma, 36 corollary, 33 false statement, 21 counterexample, 18 proposition, 5 remark |
| provenance.statement | 224 literature-derived, 84 AI-altered, 16 AI-generated |
| provenance.proof | 249 AI-altered, 22 AI-generated, 52 not-applicable, 1 not-supplied |
| judge ledger | 875 verdict rows and 987 transport-attempt rows |
| dependency shape | 1,670 `deps` edges: 529 same-run/same-batch, 1,141 backward to published content, **0 cross-batch** |
| special reference tiers | 5 orientation-only `forward_refs`, 0 `external_refs`, one `proved_here: false` fallback |

The sole external fallback is `rem-sine-period-arc-length-integrand-is-nonelementary`; its Hall citation, exact statement, failed local route, and necessity are complete. The 16 AI-generated Statements are examples, counterexamples, or the permitted direct corollary `cor-nonconstant-entire-function-has-dense-image`, and none is a dependency target. No published dependency was repaired, no published item was modified, and no item id was renamed.

Two scaffolded draft items were withdrawn at step 6: `lem-simple-polygon-has-an-interior-diagonal` and `cor-simple-polygon-triangulation-has-n-minus-two-triangles`. Their local route did not close under the page's general triangulation convention, every consumer was removed, and the corresponding source results remain explicit deferrals. No mathematical item was added at step 9.

## Reader and refuter coverage

| batch | independent reader | final items | proof contracts | coverage result |
|---:|---|---:|---:|---|
| 1 | `frontier-16-reader-1.md` | 70 | 61 | complete |
| 2 | `frontier-16-reader-2.md` | 40 (42 before the two withdrawals) | 33 | complete |
| 3 | `frontier-16-reader-3.md` | 61 | 53 | complete |
| 4 | `frontier-16-reader-4.md` | 25 | 22 | complete |
| 5 | `frontier-16-reader-5.md` | 59 | 44 | complete |
| 6 | `frontier-16-reader-6.md` | 39 | 35 | complete |
| 7 | `frontier-16-reader-7.md` | 30 | 23 | complete |

All seven readers were independent of the Betas that scaffolded and authored their batches. The three group-Alpha machine finding files contain 169 adjudicated reader/refuter findings: group a 47 (20 fatal, 27 nonfatal), group b 35 (16 fatal, 19 nonfatal), and group c 87 (41 fatal, 46 nonfatal). The defect ledger contains 78 fatal step-6 defects because `R5-3` correctly splits one reader finding into two defects.

Every reader finding that survived the reader's own recheck was confirmed. `R5-13` was withdrawn before adjudication. Group c reclassified `R7-7` and `R7-8` from fatal to nonfatal contract defects. Alpha extended or completed the reader repairs at `R1-6`, `R1-18`, `R6-4`, `R7-11` through `R7-14`, and the group-c refuter findings; no accepted reader repair was reverted. The two polygon items above were withdrawn rather than propped up with a false proof.

Read-only refuters produced 25 ledgered findings: 7 fatal and 18 nonfatal, all adjudicated by the owning Alpha. Group a's inverse/convexity/topology refuters and group c's analytic refuters wrote no content. Group b's three canonical `dispatch.mjs --role refuter` calls failed before mathematical output because the sandbox denied their transports; the in-session fallback refuters completed all 99 batch items and reported no defect, but their read-only status was prompt-enforced rather than process-enforced. That is a real independence caveat, not a missing read.

## Fatal defects, by defect type

Evidence is `research/defect-ledger.jsonl`, the three group-Alpha 6b reports and machine finding files, `research/frontier-16-alpha-step8.md`, the closure-recovery report, and `research/frontier-16-judge-adjudications.jsonl`. The grouping below is exhaustive: every fatal ledger row appears once and carries its item or scoped class plus its exact disposition.

### Invalid inference — 18

18 defects: 17 invalid proof routes and one arithmetic sign error. The dispositions are full or local proof repairs except for the unsupported polygon-diagonal item, which was withdrawn and deferred.

#### Arithmetic error inside a proof — 1

- `thm-finite-inclusion-exclusion-for-measures` — **fixed** (`frontier-16-b-R5-1`; caught at `6a-read` by `reader`). The induction step gave the negated term indexed by J the sign (-1)^(|J|+1), but its coefficient is (-1)^(|J|+2)=(-1)^(|J union {r+1}|+1). The sign, finite-measure inputs, final discharge, and contract are repaired.

#### Invalid proof inference — 17

- `lem-simple-polygon-has-an-interior-diagonal` — **deferred** (`frontier-16-b-R2-1`; caught at `6a-read` by `reader`). Steps 1.1 and 2.2 treated local sidedness, existence of an intervening polygon vertex, and containment of the selected segment as consequences of the diagonal definition. The cited sources explicitly require polygonal/Jordan separation unavailable at this order. The unsupported item and contract were withdrawn, every consumer was removed, and its harvested rows now defer the frugal strengthening.
- `thm-simple-polygon-admits-a-triangulation` — **fixed** (`frontier-16-b-R2-2`; caught at `6a-read` by `reader`). The original diagonal induction assumed without support that a diagonal splits the filled region into two smaller simple polygonal regions with precisely controlled union and intersection. The proof was replaced by a generic-projection vertical decomposition into commonly refined trapezoidal cells and triangles, matching the weaker general triangulation convention.
- `thm-peano-local-existence-for-continuous-odes` — **fixed** (`f16-c-r3-9`; caught at `6a-read` by `reader`). R3-9 — `thm-peano-local-existence-for-continuous-odes`, steps 1.1–2.1 — fatal.** The proof constructs Euler polygons only on `[t_0,t_0+h]`, hence only a one-sided solution. The batch's own definition requires a local solution interval to contain a nondegenerate neighborhood of `t_0` in the open time projection. No reflected construction or gluing step proves the other side. …
- `thm-osgood-uniqueness-criterion-for-first-order-odes` — **fixed** (`f16-c-r3-10`; caught at `6a-read` by `reader`). R3-10 — `thm-osgood-uniqueness-criterion-for-first-order-odes`, step 2.1 — fatal.** Replacing `sqrt(R)` by `sqrt(R+epsilon)` leads, after the chain rule, to an integral from `sqrt(epsilon)` to `sqrt(R(t)+epsilon)`, not the written integral from `epsilon` to `sqrt(R(t))+epsilon`. The latter would correspond to `sqrt(R)+epsilon`, which is not differentiable at zeros by the cited classical rules. …
- `thm-henstock-kurzweil-integrability-on-subintervals-and-additivity` — **fixed** (`f16-c-r3-13`; caught at `6a-read` by `reader`). R3-13 — `thm-henstock-kurzweil-integrability-on-subintervals-and-additivity`, step 1.1 — fatal.** Completing two subinterval partitions by one complement proves a Cauchy estimate between their sums; it does not by itself produce the subinterval integral value. Step 1.1 invokes no completeness or HK Cauchy criterion, so the forward half of the iff is not established. …
- `thm-hake-extension-theorem-for-henstock-kurzweil-integrals` — **fixed** (`f16-c-r3-17`; caught at `6a-read` by `reader`). R3-17 — `thm-hake-extension-theorem-for-henstock-kurzweil-integrals`, step 1.2 — fatal.** The reverse implication says only to choose one prefix gauge and “split” an arbitrary fine partition there. A fine cell can straddle that cut and cannot in general be split into tagged cells with the old tag. …
- `thm-saks-henstock-lemma` — **fixed** (`f16-c-r3-18`; caught at `6a-read` by `reader`). R3-18 — `thm-saks-henstock-lemma`, step 2.1 — fatal.** Completing positive- and negative-error cells with arbitrary fine complements does not bound the selected errors: the complement's own local errors may cancel them. The proof must choose locally accurate complement partitions (using subinterval integrability) and account for their error before comparing with the full integral. …
- `prop-covering-morphism-subgroup-criterion` — **fixed** (`f16-a-R6-002`; caught at `6a-read` by `reader`). A surjective local homeomorphism was called a covering by definition; the proof now constructs the full evenly-covered sheet family.
- `cex-uniqueness-does-not-require-local-lipschitz-continuity` — **fixed** (`f16-step8-005`; caught at `8-adjudicate` by `judge-deepseek`). Confirmed paired-judge defect: Step 2.1 claims f is concave on each half-line, but for x<0 the second derivative of f is positive, so f is convex there; the stated state modulus verification does not follow as written. The current item repairs the cited hypotheses, domain, construction, or inference identified by the finding.
- `ex-quadratic-ode-finite-time-blowup` — **fixed** (`f16-step8-030`; caught at `8-adjudicate` by `judge-deepseek`). Confirmed paired-judge defect: Step 2.1 invokes [L3] (maximal solution theorem for Picard-Lindelof IVPs) but the proof never establishes that y'=y^2 satisfies Picard-Lindelof hypotheses; no fact verifies local Lipschitz continuity of the vector field, so the maximal-solution conclusion is unlicensed. | Step 1.1 falsely says 1/y=1-t cannot approach zero at a finite boundary: it does as t approaches 1. …
- `lem-convex-set-and-closure-have-same-interior-and-boundary` — **fixed** (`f16-step8-038`; caught at `8-adjudicate` by `judge-deepseek`). Confirmed paired-judge defect: Step 2.1 asserts p_h is in B_A(p,r) for arbitrary h with small norm, but p_h lies in the affine hull A only when h belongs to W; the proof never restricts h to W, so the inclusion as written is false. The current item repairs the cited hypotheses, domain, construction, or inference identified by the finding.
- `prop-picard-iteration-converges-with-explicit-error-bounds` — **fixed** (`f16-step8-048`; caught at `8-adjudicate` by `judge-deepseek`). Confirmed paired-judge defect: Step 2.1 applies Weissinger's criterion, which requires a nonempty complete metric space, but the proof never establishes or cites that the invariant curve ball is complete; the page's completeness lemma is not referenced. …
- `thm-seifert-van-kampen` — **fixed** (`f16-step8-065`; caught at `8-adjudicate` by `judge-deepseek`). Confirmed paired-judge defect: The proof assumes in step 1.1 that a pushout P of the group diagram exists, but the cited definition only defines pushouts and no cited fact supplies one. The theorem claims pi1(X) is a pushout, so it must cite group pushout existence or discharge P; as written it is conditional. The current item repairs the cited hypotheses, domain, construction, or inference identified by the finding.
- `thm-semifinite-and-zero-infinity-decomposition` — **fixed** (`f16-step8-066`; caught at `8-adjudicate` by `judge-deepseek`). Confirmed paired-judge defect: Step 1.2 is unsupported: from the restriction to E being semifinite it claims L1 gives mu_sf(E)=mu(E), but L1 applies to a measure and its own semifinite part; the proof never cites that the restriction is a measure nor identifies the two semifinite parts. …
- `thm-simple-polygon-admits-a-triangulation` — **fixed** (`f16-step8-068`; caught at `8-adjudicate` by `judge-deepseek`). Confirmed paired-judge defect: Step 3.1 fails: at a reflex vertex on a wall with both edges on one side, a band from the other side has the vertex inside its wall side, giving a quadrilateral with a subdivided side; step 4.1's one-diagonal split does not yield a face-to-face triangulation. The current item repairs the cited hypotheses, domain, construction, or inference identified by the finding.
- `cex-uniqueness-does-not-require-local-lipschitz-continuity` — **fixed** (`f16-step8-076`; caught at `8-rejudge` by `judge-terra`). Step 2.1 called phi increasing and concave on the nonnegative half-line although phi was defined only through e^-1, and it omitted the logarithm derivative used to verify those properties. The repair confines phi and rho to their actual compact modulus interval and cites the logarithm fact.
- `lem-equicontinuous-bounded-rn-valued-curves-have-a-uniformly-convergent-subsequence` — **fixed** (`f16-step8-084`; caught at `8-rejudge` by `judge-deepseek`). The main diagonal construction repeatedly invoked existential convergent subsequences without a licensed countable selection or an explicit deterministic extractor. The rewritten proof builds a canonical least-index nested-cube extractor, recursively nests it, and proves the diagonal subsequence converges on a dense set before the equicontinuity argument.

### Incorrect dependency citation — 88

88 defects, the dominant class: 49 inflated, 25 truncated, 9 missing, 4 misattributed, and 1 corrupted citation. Facts were restored to the cited clause, rebound to the correct item, or supplied with the missing inline derivation; contracts and manifests were synchronized.

#### Corrupted citation text — 1

- `cor-holomorphic-functions-are-real-analytic-and-smooth` — **fixed** (`f16-c-r7-1`; caught at `6a-read` by `reader`).

#### Inflated cited clause — 49

- `cor-x-sine-of-one-over-x-is-not-differentiable-at-zero` — **fixed** (`f16-c-r4-3`; caught at `6a-read` by `reader`).
- `ex-x-squared-sine-of-one-over-x-squared` — **fixed** (`f16-c-r4-5`; caught at `6a-read` by `reader`).
- `ex-sine-harmonics-pointwise-bounded-without-uniform-subsequence` — **fixed** (`f16-c-r4-6`; caught at `6a-read` by `reader`).
- `lem-topologists-sine-curve-is-connected` — **fixed** (`f16-c-r4-8`; caught at `6a-read` by `reader`).
- `cex-topologists-sine-curve-connected-not-path-connected` — **fixed** (`f16-c-r4-10`; caught at `6a-read` by `reader`).
- `ex-tangent-homeomorphism-between-bounded-and-unbounded-spaces` — **fixed** (`f16-c-r4-11`; caught at `6a-read` by `reader`).
- `ex-sine-harmonic-series-pointwise-not-uniform` — **fixed** (`f16-c-r4-12`; caught at `6a-read` by `reader`).
- `fs-a-continuous-function-on-a-compact-interval-has-a-rectifiable-graph` — **fixed** (`f16-c-r4-13`; caught at `6a-read` by `reader`).
- `fs-an-open-c-one-map-has-invertible-derivative` — **fixed** (`f16-a-R1-003`; caught at `6a-read` by `reader`).
- `cor-positive-definite-hessian-implies-strict-convexity` — **fixed** (`f16-a-RB1C-004`; caught at `6b-adjudicate` by `refuter`).
- `cex-continuity-from-above-without-finite-first-measure` — **fixed** (`f16-step8-001`; caught at `8-adjudicate` by `judge-deepseek`).
- `cex-convex-function-with-empty-subdifferential-at-a-boundary-point` — **fixed** (`f16-step8-002`; caught at `8-adjudicate` by `judge-deepseek`).
- `cex-linear-bijection-need-not-preserve-jordan-content` — **fixed** (`f16-step8-004`; caught at `8-adjudicate` by `judge-terra`).
- `cor-holomorphic-mean-value-property` — **fixed** (`f16-step8-007`; caught at `8-adjudicate` by `judge-deepseek`).
- `cor-indefinite-henstock-kurzweil-integral-is-a-primitive` — **fixed** (`f16-step8-008`; caught at `8-adjudicate` by `judge-deepseek`).
- `cor-x-sine-of-one-over-x-is-not-differentiable-at-zero` — **fixed** (`f16-step8-010`; caught at `8-adjudicate` by `judge-terra`).
- `ex-completion-of-borel-dirac-measure` — **fixed** (`f16-step8-024`; caught at `8-adjudicate` by `judge-deepseek`).
- `ex-counting-measure-and-sigma-finiteness` — **fixed** (`f16-step8-025`; caught at `8-adjudicate` by `judge-terra`).
- `ex-dyadic-probability-measure-on-naturals` — **fixed** (`f16-step8-026`; caught at `8-adjudicate` by `judge-terra`).
- `ex-euclidean-norm-and-squared-norm-are-convex` — **fixed** (`f16-step8-027`; caught at `8-adjudicate` by `judge-deepseek`).
- `ex-polar-coordinates-as-a-local-diffeomorphism` — **fixed** (`f16-step8-029`; caught at `8-adjudicate` by `judge-deepseek`).
- `ex-sine-over-x-has-a-noncompact-henstock-kurzweil-integral` — **fixed** (`f16-step8-031`; caught at `8-adjudicate` by `judge-deepseek`).
- `ex-two-equation-implicit-system` — **fixed** (`f16-step8-032`; caught at `8-adjudicate` by `judge-deepseek`).
- `ex-unbounded-derivative-evaluated-by-henstock-kurzweil` — **fixed** (`f16-step8-033`; caught at `8-adjudicate` by `judge-deepseek`).
- `fs-continuity-from-above-without-finiteness` — **fixed** (`f16-step8-034`; caught at `8-adjudicate` by `judge-terra`).
- `fs-countable-additivity-without-disjointness` — **fixed** (`f16-step8-035`; caught at `8-adjudicate` by `judge-deepseek`).
- `fs-invertible-derivative-everywhere-gives-a-global-inverse` — **fixed** (`f16-step8-036`; caught at `8-adjudicate` by `judge-deepseek`).
- `lem-deck-transformations-correspond-to-normalizer-cosets` — **fixed** (`f16-step8-039`; caught at `8-adjudicate` by `judge-deepseek`).
- `lem-finite-sine-harmonic-sums` — **fixed** (`f16-step8-042`; caught at `8-adjudicate` by `judge-deepseek`).
- `lem-gaussian-integral-is-finite-and-positive` — **fixed** (`f16-step8-043`; caught at `8-adjudicate` by `judge-deepseek`).
- `lem-plane-gaussian-integral-in-polar-coordinates` — **fixed** (`f16-step8-044`; caught at `8-adjudicate` by `judge-deepseek`).
- `prop-covering-morphism-subgroup-criterion` — **fixed** (`f16-step8-046`; caught at `8-adjudicate` by `judge-deepseek`).
- `prop-pointwise-supremum-preserves-convexity` — **fixed** (`f16-step8-049`; caught at `8-adjudicate` by `judge-terra`).
- `thm-absolute-improper-multiple-integral-by-exhaustion` — **fixed** (`f16-step8-050`; caught at `8-adjudicate` by `judge-terra`).
- `thm-ck-euclidean-maps-closed-under-algebra-and-composition` — **fixed** (`f16-step8-051`; caught at `8-adjudicate` by `judge-deepseek`).
- `thm-comparison-test-for-improper-multiple-integrals` — **fixed** (`f16-step8-053`; caught at `8-adjudicate` by `judge-terra`).
- `thm-completion-of-a-measure-space` — **fixed** (`f16-step8-055`; caught at `8-adjudicate` by `judge-deepseek`).
- `thm-first-order-linear-ode-integrating-factor` — **fixed** (`f16-step8-057`; caught at `8-adjudicate` by `judge-deepseek`).
- `thm-fundamental-group-of-a-product` — **fixed** (`f16-step8-058`; caught at `8-adjudicate` by `judge-terra`).
- `thm-hessian-characterises-convexity` — **fixed** (`f16-step8-060`; caught at `8-adjudicate` by `judge-deepseek`).
- `thm-measures-on-countable-discrete-spaces-are-weighted-dirac-sums` — **fixed** (`f16-step8-061`; caught at `8-adjudicate` by `judge-deepseek`).
- `thm-nonnegative-improper-multiple-integral-by-exhaustion` — **fixed** (`f16-step8-062`; caught at `8-adjudicate` by `judge-deepseek`).
- `thm-peano-local-existence-for-continuous-odes` — **fixed** (`f16-step8-063`; caught at `8-adjudicate` by `judge-terra`).
- `thm-proper-local-diffeomorphisms-have-finite-diffeomorphic-sheets` — **fixed** (`f16-step8-064`; caught at `8-adjudicate` by `judge-terra`).
- `thm-shoelace-formula-for-simple-polygons` — **fixed** (`f16-step8-067`; caught at `8-adjudicate` by `judge-deepseek`).
- `thm-strict-separation-of-a-point-from-a-closed-convex-set` — **fixed** (`f16-step8-069`; caught at `8-adjudicate` by `judge-deepseek`).
- `ex-regular-and-nonregular-three-sheeted-wedge-coverings` — **fixed** (`f16-step8-075`; caught at `8-adjudicate` by `judge-deepseek`).
- `thm-ck-euclidean-maps-closed-under-algebra-and-composition` — **fixed** (`f16-step8-086`; caught at `8-rejudge` by `judge-deepseek`).
- `thm-proper-local-diffeomorphisms-have-finite-diffeomorphic-sheets` — **fixed** (`f16-step8-092`; caught at `8-rejudge` by `judge-terra`).

#### Misattributed dependency — 4

- `areas-of-elementary-plane-figures` — **fixed** (`frontier-16-b-R2-6`; caught at `6a-read` by `reader`).
- `thm-continuous-dependence-of-odes-on-initial-data-and-parameters` — **fixed** (`f16-c-c3-f2`; caught at `6b-adjudicate` by `refuter`).
- `cor-subdifferential-of-a-differentiable-convex-function-is-the-gradient` — **fixed** (`f16-a-R1-009`; caught at `6a-read` by `reader`).
- `cex-strictly-convex-function-with-a-singular-hessian` — **fixed** (`f16-a-R1-021`; caught at `6a-read` by `reader`).

#### Missing dependency or proof input — 9

- `cor-globally-lipschitz-odes-have-global-solutions` — **fixed** (`f16-c-r3-5`; caught at `6a-read` by `reader`).
- `ex-weierstrass-function-with-one-half-and-fifteen` — **fixed** (`f16-c-r4-1`; caught at `6a-read` by `reader`).
- `lem-finite-sine-harmonic-sums` — **fixed** (`f16-c-r4-2`; caught at `6a-read` by `reader`).
- `ex-sine-harmonics-pointwise-bounded-without-uniform-subsequence` — **fixed** (`f16-c-r4-7`; caught at `6a-read` by `reader`).
- `cex-topologists-sine-curve-connected-not-path-connected` — **fixed** (`f16-c-r4-9`; caught at `6a-read` by `reader`).
- `ex-two-equation-implicit-system` — **fixed** (`f16-a-R1-020`; caught at `6a-read` by `reader`).
- `fs-invertible-derivative-everywhere-gives-a-global-inverse` — **fixed** (`f16-a-R1-022`; caught at `6a-read` by `reader`).
- `lem-plane-gaussian-integral-in-polar-coordinates` — **fixed** (`f16-step8-085`; caught at `8-rejudge` by `judge-deepseek`).
- `thm-classification-of-connected-covering-spaces` — **fixed** (`f16-step8-088`; caught at `8-rejudge` by `judge-deepseek`).

#### Truncated cited clause — 25

- `thm-continuity-of-dominated-parameter-dependent-improper-integrals` — **fixed** (`frontier-16-b-R2-7`; caught at `6a-read` by `reader`).
- `thm-differentiation-under-dominated-improper-multiple-integrals` — **fixed** (`frontier-16-b-R2-8`; caught at `6a-read` by `reader`).
- `cex-differentiation-under-an-improper-integral-without-domination` — **fixed** (`frontier-16-b-R2-9`; caught at `6a-read` by `reader`).
- `ex-scaled-gaussian-parameter-integral` — **fixed** (`frontier-16-b-R2-10`; caught at `6a-read` by `reader`).
- `class:batch-5-contract-citations` — **fixed** (`frontier-16-b-R5-14`; caught at `6a-read` by `reader`). Affected proof-bearing ids: `thm-tonelli-for-nonnegative-double-series` · `fs-subsets-of-null-sets-are-always-measurable` · `prop-measure-monotonicity` · `prop-measure-of-a-set-difference` · `thm-finite-and-countable-subadditivity-of-measures` · `thm-continuity-from-below-for-measures` · `thm-continuity-from-above-for-measures` · `prop-counting-measure-is-a-measure` · `fs-continuity-from-above-without-finiteness` · `prop-two-set-measure-identity` · `thm-finite-inclusion-exclusion-for-measures` · `prop-null-symmetric-difference-preserves-measure` · `thm-countable-additivity-and-set-function-continuity` · `thm-first-borel-cantelli` · `thm-measure-of-set-liminf` · `thm-measure-of-set-limsup` · `cor-dominated-convergence-for-sets` · `prop-null-sets-form-a-sigma-ideal-in-a-complete-space` · `lem-completion-domain-is-a-sigma-algebra` · `lem-completed-measure-is-well-defined` · `thm-completion-of-a-measure-space` · `prop-restriction-is-a-measure` · `prop-dirac-measure-is-a-probability-measure` · `thm-nonnegative-weighted-sums-of-measures` · `thm-measures-on-finite-sigma-algebras-are-atomic` · `thm-measures-on-countable-discrete-spaces-are-weighted-dirac-sums` · `lem-semifinite-measures-have-arbitrarily-large-finite-subsets` · `thm-semifinite-part-is-a-measure` · `thm-semifinite-and-zero-infinity-decomposition` · `lem-finite-measure-uniqueness-on-a-pi-system` · `thm-measure-uniqueness-on-a-sigma-finite-pi-system` · `fs-generating-families-determine-measures` · `fs-every-finitely-additive-set-function-is-a-measure` · `fs-countable-additivity-without-disjointness` · `fs-zero-on-singletons-implies-zero-measure` · `ex-counting-measure-and-sigma-finiteness` · `ex-dirac-measure` · `ex-dyadic-probability-measure-on-naturals` · `ex-countable-cocountable-zero-infinity-measure` · `ex-completion-of-borel-dirac-measure` · `ex-borel-cantelli-for-shrinking-dyadic-intervals` · `cex-continuity-from-above-without-finite-first-measure` · `cex-free-ultrafilter-finitely-additive-probability` · `cex-generating-family-without-pi-system`.
- `cor-uniform-picard-lindelof-for-nearby-initial-values` — **fixed** (`f16-c-r3-4`; caught at `6a-read` by `reader`).
- `thm-comparison-tests-for-noncompact-henstock-kurzweil-integrals` — **fixed** (`f16-c-r3-29`; caught at `6a-read` by `reader`).
- `ex-x-squared-sine-of-one-over-x-squared` — **fixed** (`f16-c-r4-4`; caught at `6a-read` by `reader`).
- `thm-entire-polynomial-growth-is-polynomial` — **fixed** (`f16-c-r7-2`; caught at `6a-read` by `reader`).
- `thm-weierstrass-convergence-holomorphic-functions` — **fixed** (`f16-c-r7-3`; caught at `6a-read` by `reader`).
- `thm-classification-of-connected-covering-spaces` — **fixed** (`f16-step8-071`; caught at `8-adjudicate` by `judge-deepseek`).
- `cor-connected-coverings-of-circle-classified-by-nonnegative-integers` — **fixed** (`f16-step8-072`; caught at `8-adjudicate` by `judge-deepseek`).
- `cor-every-connected-covering-of-circle-is-regular` — **fixed** (`f16-step8-073`; caught at `8-adjudicate` by `judge-deepseek`).
- `ex-circle-covering-towers-follow-divisibility` — **fixed** (`f16-step8-074`; caught at `8-adjudicate` by `judge-terra`).
- `cor-lipschitz-ode-uniqueness-and-stability-estimate` — **fixed** (`f16-step8-077`; caught at `8-rejudge` by `judge-deepseek`).
- `ex-circle-covering-towers-follow-divisibility` — **fixed** (`f16-step8-080`; caught at `8-rejudge` by `judge-deepseek`).
- `ex-two-equation-implicit-system` — **fixed** (`f16-step8-081`; caught at `8-rejudge` by `judge-deepseek`).
- `ex-unbounded-derivative-evaluated-by-henstock-kurzweil` — **fixed** (`f16-step8-082`; caught at `8-rejudge` by `judge-deepseek`).
- `lem-deck-transformations-correspond-to-normalizer-cosets` — **fixed** (`f16-step8-083`; caught at `8-rejudge` by `judge-deepseek`).
- `thm-classical-weierstrass-function-nowhere-differentiable` — **fixed** (`f16-step8-087`; caught at `8-rejudge` by `judge-terra`).
- `thm-first-order-linear-ode-integrating-factor` — **fixed** (`f16-step8-089`; caught at `8-rejudge` by `judge-deepseek`).
- `thm-henstock-kurzweil-integrability-on-subintervals-and-additivity` — **fixed** (`f16-step8-090`; caught at `8-rejudge` by `judge-deepseek`).
- `lem-plane-gaussian-integral-in-polar-coordinates` — **fixed** (`f16-step8-093`; caught at `8-rejudge` by `judge-deepseek`).
- `thm-first-order-linear-ode-integrating-factor` — **fixed** (`f16-step8-094`; caught at `8-rejudge` by `judge-terra`).
- `thm-peano-local-existence-for-continuous-odes` — **fixed** (`f16-step8-095`; caught at `8-rejudge` by `judge-deepseek`).

### False or overstrong statement, title, or definition — 41

41 defects: false or overstrong claims, free or undefined symbols, and ill-typed Definitions. The current text scopes, types, or narrows each claim; the unsupported n-minus-two corollary was withdrawn.

#### False or overstrong Statement — 7

- `cor-simple-polygon-triangulation-has-n-minus-two-triangles` — **deferred** (`frontier-16-b-R2-3`; caught at `6a-read` by `reader`). The unqualified n-minus-two claim is false for the repaired triangulation convention, which permits subdivision vertices, and the original proof also assumed an unsupported diagonal split. The item and contract were withdrawn; source rows defer the frugal count to the later polygonal-separation/Euler development.
- `thm-monotonicity-of-the-henstock-kurzweil-integral` — **fixed** (`f16-c-r3-12`; caught at `6a-read` by `reader`). R3-12 — `thm-monotonicity-of-the-henstock-kurzweil-integral`, Statement line 36 — fatal.** The repeated sentence says `f<=g` alone implies `int f<=int g`, omitting the HK-integrability hypotheses from the proved Statement. For nonintegrable functions the displayed integrals are not defined. Alpha-c adjudicated confirmed_fatal and verified the repaired current disk text and owning batch contract.
- `def-order-of-zero-holomorphic-function` — **fixed** (`f16-c-r7-6`; caught at `6a-read` by `reader`). R7-6 — def-order-of-zero-holomorphic-function - **Location:** final sentence of the Definition. - **Defect:** the phrase “the infinite value records a zero germ” asserted local vanishing before the later factorization theorem proves that all Taylor coefficients zero imply vanishing on a neighbourhood. That later theorem cannot be a backward dependency of this definition. …
- `thm-fundamental-group-of-a-product` — **fixed** (`f16-a-R6-001`; caught at `6a-read` by `reader`). Naturality was asserted but not proved; the naturality square is now checked on every product-loop class.
- `lem-cauchy-estimates-on-concentric-subdiscs` — **fixed** (`f16-step8-037`; caught at `8-adjudicate` by `judge-terra`). Confirmed paired-judge defect: The second paragraph of the Statement omits any hypothesis that f is holomorphic on a neighbourhood of the radius-R circle. Thus f^(n)(z) need not exist, so that asserted implication is not well-formed. The current item repairs the cited hypotheses, domain, construction, or inference identified by the finding.
- `lem-weierstrass-low-frequency-difference-quotient-bound` — **fixed** (`f16-step8-045`; caught at `8-adjudicate` by `judge-deepseek`). Confirmed paired-judge defect: The m=0 case is ill-defined: x0 names both the fixed base point and the zeroth probe, so substituting m=0 makes the strict inequality assert 0<0. The proof needs m at least 1 or distinct notation. The current item repairs the cited hypotheses, domain, construction, or inference identified by the finding.
- `thm-finite-inclusion-exclusion-for-measures` — **fixed** (`f16-step8-056`; caught at `8-adjudicate` by `judge-deepseek`). Confirmed paired-judge defect: The recursive order in the statement is off by one: after the subsets of {0,...,m-1} it lists {m}, which is outside that index set. The proof adds r+1, i.e. m-1, so the right-hand sum is not well-defined as stated. The current item repairs the cited hypotheses, domain, construction, or inference identified by the finding.

#### False or overstrong title — 11

- `thm-triangle-content-and-base-height-formula` — **fixed** (`frontier-16-b-R2-4`; caught at `6a-read` by `reader`). The title asserted the base-height formula without the nonzero chosen-side condition present in the Statement and needed by the distance convention. It now says 'when the chosen side is nonzero' in both item and manifest.
- `def-completion-of-a-measure-space` — **fixed** (`frontier-16-b-R5-2`; caught at `6a-read` by `reader`). The title called the proposed domain a completion sigma-algebra before the countable-choice closure lemma and well-definedness lemma had discharged those obligations. It now names only the completion domain and proposed set function.
- `lem-completion-domain-is-a-sigma-algebra` — **fixed** (`frontier-16-b-R5-3a`; caught at `6a-read` by `reader`). The title omitted the Axiom of Countable Choice used to select a representation for every member of a countable family. The title and manifest now expose that hypothesis.
- `thm-completion-of-a-measure-space` — **fixed** (`frontier-16-b-R5-4`; caught at `6a-read` by `reader`). The theorem title asserted the completed extension unconditionally while the Statement and proof use countable choice for a disjoint completed sequence. The repaired title carries the hypothesis.
- `ex-completion-of-borel-dirac-measure` — **fixed** (`frontier-16-b-R5-5`; caught at `6a-read` by `reader`). The generated example title asserted the full-power-set completion without the Choice hypothesis used by the completion theorem and cardinality route. The title and manifest now begin 'Assuming choice'.
- `lem-vector-valued-continuous-curve-space-is-complete` — **fixed** (`f16-c-r3-3`; caught at `6a-read` by `reader`). R3-3 — `lem-vector-valued-continuous-curve-space-is-complete`, title and Statement — fatal.** The first sentence correctly assumes a nonempty compact interval, but the title and the repeated final Statement sentence omit nonemptiness. Empty intervals exist in the library and the displayed supremum metric is then undefined, so the broader claim is not established. …
- `lem-equicontinuous-bounded-rn-valued-curves-have-a-uniformly-convergent-subsequence` — **fixed** (`f16-c-r3-8`; caught at `6a-read` by `reader`). R3-8 — `lem-equicontinuous-bounded-rn-valued-curves-have-a-uniformly-convergent-subsequence`, title and repeated Statement sentence — fatal.** The precise first sentence requires a nonempty compact interval, but the title and repeated sentence assert the subsequence conclusion for an unqualified sequence of curves. Compactness of the common domain is essential and is used in step 2.1. …
- `cor-holomorphic-mean-value-property` — **fixed** (`f16-c-r7-5`; caught at `6a-read` by `reader`). R7-5 — cor-holomorphic-mean-value-property - **Location:** frontmatter title and the matching batch-manifest title. - **Defect:** “every compactly contained circle” was broader than the Statement and proof, which require the entire enclosed disc to lie inside a larger concentric holomorphy disc. For example, the unit circle is compactly contained in the annulus $1/2<|z|<3/2$, but its centre is outside that domain. …
- `thm-proper-local-diffeomorphisms-have-finite-diffeomorphic-sheets` — **fixed** (`f16-a-R1-002`; caught at `6a-read` by `reader`). The title claimed every target neighbourhood was sheeted; it now says near every target point.
- `thm-classical-weierstrass-function-nowhere-differentiable` — **fixed** (`f16-step8-052`; caught at `8-adjudicate` by `judge-deepseek`). Confirmed paired-judge defect: Title asserts the classical Weierstrass function is differentiable nowhere without the parameter hypothesis, but the proof only establishes this when ab>1+3pi/2; the title overstates the proved result. The current item repairs the cited hypotheses, domain, construction, or inference identified by the finding.
- `thm-supporting-hyperplane-at-a-boundary-point-of-a-convex-set` — **narrowed** (`f16-step8-070`; caught at `8-adjudicate` by `judge-deepseek`). Confirmed paired-judge defect: Proof establishes only the halfspace inequality. If the boundary point a is not in C, e.g. the unit-sphere boundary of an open ball, no point of C lies on the hyperplane through a, so the cited definition of support, which requires p in C on the hyperplane, is not satisfied. The final sentence and title are false. …

#### Ill-typed Definition or construction — 14

- `ex-finite-maximum-of-affine-functions-and-its-subdifferential` — **fixed** (`f16-a-R1-011`; caught at `6a-read` by `reader`). The affine data and ambient space were untyped; n,m, slopes, offsets, and x are now quantified.
- `def-ck-euclidean-maps-and-diffeomorphisms` — **fixed** (`f16-step8-012`; caught at `8-adjudicate` by `judge-deepseek`). Confirmed paired-judge defect: The sentence 'At k=1 this agrees with def-c-one-map-and-local-inverse' is unlicensed: componentwise scalar C^1 gives only continuous first partials, while the cited definition requires total differentiability; the equivalence needs thm-continuous-partial-derivatives-imply-total-differentiability, which is not cited. …
- `def-completion-of-a-measure-space` — **fixed** (`f16-step8-013`; caught at `8-adjudicate` by `judge-terra`). Confirmed paired-judge defect: The final sentence asserts that the completion theorem proves uniqueness and completeness, but it neither cites nor lists [[thm-completion-of-a-measure-space]] as a dependency. This substantive claim is unsupported within the item. The current item repairs the cited hypotheses, domain, construction, or inference identified by the finding.
- `def-finite-sigma-finite-and-semifinite-measures` — **fixed** (`f16-step8-014`; caught at `8-adjudicate` by `judge-deepseek`). Confirmed paired-judge defect: The definition starts 'Let (X,A,mu) be a measure space' but cites [[def-measure]], which defines only measures on sigma-algebras, not the triple of a measure space; that notion is defined in def-measure-space. This is an incorrect citation of a dependency. The current item repairs the cited hypotheses, domain, construction, or inference identified by the finding.
- `def-gauge-and-fine-tagged-partition` — **fixed** (`f16-step8-015`; caught at `8-adjudicate` by `judge-terra`). Confirmed paired-judge defect: The fine partial tagged partition definition never requires its cells to lie in [a,b]. A cell with tag in [a,b] but endpoints outside can satisfy the gauge containment, yet f and the local integrals on it are not defined. The current item repairs the cited hypotheses, domain, construction, or inference identified by the finding.
- `def-henstock-kurzweil-integral-on-a-noncompact-interval` — **fixed** (`f16-step8-016`; caught at `8-adjudicate` by `judge-terra`). Confirmed paired-judge defect: The definition invokes oriented integrals for missing left endpoints, but its cited oriented-integral definition explicitly extends only the Darboux integral, not the Henstock–Kurzweil integral. Thus the HK notation needed for that clause is not defined by the stated dependencies. …
- `def-locally-lipschitz-in-the-state-variable` — **fixed** (`f16-step8-017`; caught at `8-adjudicate` by `judge-terra`). Confirmed paired-judge defect: The parameter-family clause gives no parameter domain or quantified inequality, and does not require the compared values to have the same parameter. It therefore fails to define state-Lipschitz continuity uniformly in parameters despite the title. The current item repairs the cited hypotheses, domain, construction, or inference identified by the finding.
- `def-modulus-of-continuity-and-osgood-condition` — **fixed** (`f16-step8-018`; caught at `8-adjudicate` by `judge-terra`). Confirmed paired-judge defect: The state-modulus definition applies the inequality to every same-time pair in the set, but rho is defined only on [0,r0]. It never requires their distance to be at most r0 (or the set to have that diameter), so rho(norm x-y) can be undefined. The current item repairs the cited hypotheses, domain, construction, or inference identified by the finding.
- `def-nonnegative-extended-series` — **fixed** (`f16-step8-019`; caught at `8-adjudicate` by `judge-deepseek`). Confirmed paired-judge defect: thm-recursion provides only iteration of a fixed function A to A, but the partial-sum recursion uses a_n varying with n; no parameterized recursion result or product encoding is supplied, so uniqueness and existence of partial sums are not licensed. The current item repairs the cited hypotheses, domain, construction, or inference identified by the finding.
- `def-picard-operator-and-picard-iterates` — **fixed** (`f16-step8-020`; caught at `8-adjudicate` by `judge-deepseek`). Confirmed paired-judge defect: Cites thm-recursion, which requires a total function from a set to itself, but the Picard operator is only partially defined: its domain is curves whose graphs lie in F's domain, and T may leave B_r or that domain, so the recursion theorem does not justify the conditional definition. …
- `def-semifinite-part-of-a-measure` — **fixed** (`f16-step8-021`; caught at `8-adjudicate` by `judge-terra`). Confirmed paired-judge defect: The final sentence omits the Axiom of Countable Choice required by thm-semifinite-part-is-a-measure. That theorem proves the measure and equality claims only under countable choice, so the cross-reference overstates what it establishes. The current item repairs the cited hypotheses, domain, construction, or inference identified by the finding.
- `def-simple-polygonal-region-and-triangulation` — **fixed** (`f16-step8-022`; caught at `8-adjudicate` by `judge-terra`). Confirmed paired-judge defect: The definition uses compactness, interior, closure, and boundary of a subset of R2 without choosing or citing a metric/topology. The cited inner-product item defines an inner product and norm, but the cited notions require a metric space. The current item repairs the cited hypotheses, domain, construction, or inference identified by the finding.
- `def-wedge-of-pointed-spaces` — **fixed** (`f16-step8-023`; caught at `8-adjudicate` by `judge-terra`). Confirmed paired-judge defect: The cited disjoint-union definition has elements (x,i), but this definition declares a relation on (i,x). Thus the relation, and hence its quotient, is not defined on the cited underlying set. The current item repairs the cited hypotheses, domain, construction, or inference identified by the finding.
- `def-picard-operator-and-picard-iterates` — **fixed** (`f16-step8-079`; caught at `8-rejudge` by `judge-deepseek`). The Definition cited the total recursion theorem for an operator that may be undefined at an iterate, and invoked the Volterra equivalence without requiring the vector-field domain open. It also left n free. The repair defines partial iteration inductively, reserves recursion for the total self-map case, and fixes n and an open domain.

#### Undefined or free notation — 9

- `lem-completion-domain-is-a-sigma-algebra` — **fixed** (`frontier-16-b-R5-3b`; caught at `6a-read` by `reader`). The complement step wrote mu(Z) without the TeX command for the measure symbol, turning the load-bearing nullity expression into unrelated variables. It now reads $\mu(Z)=0$.
- `cex-uniqueness-does-not-require-local-lipschitz-continuity` — **fixed** (`f16-c-r3-30`; caught at `6a-read` by `reader`). R3-30 — `cex-uniqueness-does-not-require-local-lipschitz-continuity`, step 2.1 — fatal.** The proposed modulus `rho(r)=2r(1+|log r|)` is undefined at `r=0`, although a modulus is a function on `[0,r_0]` and the zero value is the boundary on which the witness depends. The continuous extension `rho(0)=0` and a positive-domain formula must be stated. …
- `def-base-and-height-for-plane-figures` — **fixed** (`f16-step8-011`; caught at `8-adjudicate` by `judge-deepseek`). Confirmed paired-judge defect: The definition uses d(w,Rv) as a distance on R^2 without supplying the metric. def-metric-bounded-diameter defines d only for an arbitrary metric space, and def-euclidean-inner-product defines only the norm, not the induced metric; the Euclidean metric (e.g. lem-metrics-on-rn) is never cited. …
- `lem-equicontinuous-bounded-rn-valued-curves-have-a-uniformly-convergent-subsequence` — **fixed** (`f16-step8-040`; caught at `8-adjudicate` by `judge-deepseek`). Confirmed paired-judge defect: Step 2.1 uses equicontinuity of R^n-valued curves, but the only cited definition, def-equicontinuity-and-boundedness-in-ck, is for real-valued families; no vector-valued definition is supplied or cited, so the finite-net argument is not licensed. | Step 1.1 calls J intersect Q a dense set but cites only L1 and L2. L1 says Q is countably infinite; …
- `lem-euler-polygonal-approximations-are-uniformly-bounded-and-equicontinuous` — **fixed** (`f16-step8-041`; caught at `8-adjudicate` by `judge-deepseek`). Confirmed paired-judge defect: Fact L1 overstates its cited source: the definition applies only to real-valued functions, but the proof uses it for R^n-valued Euler polygons with no coordinatewise reduction or vector-valued equicontinuity definition cited. | L1 cites a definition only for families in C(K,R), but restates it generically and step 2.1 applies it to Rn-valued Euler polygons. …
- `thm-comparison-tests-for-noncompact-henstock-kurzweil-integrals` — **fixed** (`f16-step8-054`; caught at `8-adjudicate` by `judge-deepseek`). Confirmed paired-judge defect: Step 2.1 uses f/g tending to positive infinity at an infinite missing endpoint, but the cited def-limits-at-infinity defines only finite limits at infinity and infinite limits at finite points; that case is undefined, so the stated implication is not established. | Step 1.1 says L1 gives the absolute-value integral bound, but L1 only gives monotonicity. …
- `thm-henstock-kurzweil-integrability-on-subintervals-and-additivity` — **fixed** (`f16-step8-059`; caught at `8-adjudicate` by `judge-deepseek`). Confirmed paired-judge defect: Step 2.1 cites [L3] from def-oriented-integral, which defines antisymmetry only for bounded Darboux-integrable functions, not for arbitrary Henstock-Kurzweil integrable f. For an HK function not Darboux integrable the oriented integral symbols are undefined, so the three-point identity is not established. …
- `def-locally-lipschitz-in-the-state-variable` — **fixed** (`f16-step8-078`; caught at `8-rejudge` by `judge-terra`). The Definition used R^n and its Euclidean norm without quantifying n. The repair fixes a natural n at least 1 before either the unparameterized or parameterized clause.
- `thm-peano-local-existence-for-continuous-odes` — **fixed** (`f16-step8-091`; caught at `8-rejudge` by `judge-terra`). The Statement used R^n without quantifying n, and L2 likewise omitted its source lemma's n at least 1 hypothesis. The repair quantifies natural n at least 1 in the Statement and restores that condition in L2.

### Missing hypothesis or choice scope — 22

22 defects: 18 ordinary domain/hypothesis omissions and 4 choice-scope omissions. The hypotheses were made reader-visible and propagated through dependent Facts and contracts.

#### Missing choice scope — 4

- `cor-finite-maximal-time-forces-escape-from-every-compact-set` — **fixed** (`f16-c-c3-f1`; caught at `6b-adjudicate` by `refuter`). The compact-escape proof selected countably many endpoint witnesses without a choice dependency. Alpha confirmed this as fatal missing choice scope; the final repair cites countable choice, well-ordering, and recursion, begins at selected index one, and produces an increasing subsequence. Alpha-c adjudicated confirmed_fatal and verified the repaired current disk text and owning batch contract.
- `lem-convex-set-and-closure-have-same-interior-and-boundary` — **fixed** (`f16-a-RB1C-001`; caught at `6b-adjudicate` by `refuter`). The basis and closure citations hid AC and AC_omega; both assumptions and exact Fact clauses are now reader-visible.
- `thm-supporting-hyperplane-at-a-boundary-point-of-a-convex-set` — **fixed** (`f16-a-RB1C-002`; caught at `6b-adjudicate` by `refuter`). The exterior sequence used AC_omega without stating it; the choice scope is now in the Statement, Facts, proof, and contract.
- `thm-euclidean-semicontinuity-epigraph-characterisations` — **fixed** (`f16-a-RB1C-003`; caught at `6b-adjudicate` by `refuter`). Failure of semicontinuity was turned into a sequence without AC_omega; the proof now forms a bad sublevel set and invokes sequential closure under the declared axiom.

#### Missing domain or theorem hypothesis — 18

- `lem-uniform-tail-control-for-dominated-improper-multiple-integrals` — **fixed** (`frontier-16-b-R2-5`; caught at `6a-read` by `reader`). The Statement used integrals of slices and differences without specifying an open domain, the map's domain, or local Riemann integrability; the proof also selected an exhaustion and passed signed limits without licensing them. The missing hypotheses and exact exhaustion/comparison/absolute-convergence inputs are now explicit.
- `prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation` — **fixed** (`f16-c-r3-1`; caught at `6a-read` by `reader`). R3-1 — `prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation`, Statement and [L2]/steps 1.1–2.1 — fatal.** The Statement never says that `I` is an interval with at least two elements. …
- `def-picard-operator-and-picard-iterates` — **fixed** (`f16-c-r3-2`; caught at `6a-read` by `reader`). R3-2 — `def-picard-operator-and-picard-iterates`, Definition — fatal.** `J=[t_0-h,t_0+h]` is introduced without `h>=0`, even though the library permits empty reversed closed intervals. Its final sentence also calls every fixed point a solution at `h=0`; on the singleton interval the fixed-point equation is defined but the library derivative is not. …
- `thm-first-order-linear-ode-integrating-factor` — **fixed** (`f16-c-r3-6`; caught at `6a-read` by `reader`). R3-6 — `thm-first-order-linear-ode-integrating-factor`, Statement and [L2]/step 1.1 — fatal.** “An interval containing `x_0`” includes the singleton `{x_0}`, where the library derivative is undefined and the displayed function is not a solution. …
- `lem-euler-polygonal-approximations-are-uniformly-bounded-and-equicontinuous` — **fixed** (`f16-c-r3-7`; caught at `6a-read` by `reader`). R3-7 — `lem-euler-polygonal-approximations-are-uniformly-bounded-and-equicontinuous`, Statement — fatal.** The interval `[t_0,t_0+h]` and positive meshes are used without the required `h>0`; for `h<0` the interval is empty under the library convention, and for `h=0` the asserted positive-mesh construction is not the one proved. …
- `thm-every-derivative-is-henstock-kurzweil-integrable` — **fixed** (`f16-c-r3-14`; caught at `6a-read` by `reader`). R3-14 — `thm-every-derivative-is-henstock-kurzweil-integrable`, Statement and step 1.1 — fatal.** The Statement permits `a=b`, but the library does not define `F'` on the isolated singleton domain, so `f=F'` is not a function on `[a,a]`. …
- `cor-henstock-kurzweil-integration-by-parts` — **fixed** (`f16-c-r3-15`; caught at `6a-read` by `reader`). R3-15 — `cor-henstock-kurzweil-integration-by-parts`, Statement — fatal.** No relation between `a` and `b` is stated. At `a=b` the derivatives on the isolated singleton are undefined; at `a>b` the domain interval is empty. The contract nevertheless marks identical endpoints as checked. Alpha-c adjudicated confirmed_fatal and verified the repaired current disk text and owning batch contract.
- `cor-henstock-kurzweil-substitution-for-derivatives` — **fixed** (`f16-c-r3-16`; caught at `6a-read` by `reader`). R3-16 — `cor-henstock-kurzweil-substitution-for-derivatives`, Statement — fatal.** The same missing `a<b` hypothesis leaves `phi'` undefined on a singleton and the compact HK integral undefined for reversed endpoints, while the contract marks the degenerate case checked. Alpha-c adjudicated confirmed_fatal and verified the repaired current disk text and owning batch contract.
- `thm-holomorphic-parameter-riemann-integral` — **fixed** (`f16-c-r7-4`; caught at `6a-read` by `reader`). R7-4 — thm-holomorphic-parameter-riemann-integral - **Location:** [L10], [L11], proof steps 1.1 and 4.1, and their contract citations. - **Defect:** [L10] did not state the cited theorem's conclusion that $t\mapsto\|h(t)\|_2$ is integrable. [L11] omitted integrability of $q$, so it wrote an ordinary Riemann integral for an arbitrary bounded function. …
- `thm-parametrized-implicit-function-theorem-with-higher-regularity` — **fixed** (`f16-a-R1-001`; caught at `6a-read` by `reader`). The quantifier excluded p=0 while the Statement claimed the parameter-free case; p is now natural and the proof covers the zero block.
- `lem-convex-function-bound-on-an-interior-cube` — **fixed** (`f16-a-R1-008`; caught at `6a-read` by `reader`). The sup norm requires positive ambient dimension; n>=1 is now explicit.
- `def-semicontinuity-on-euclidean-subsets` — **fixed** (`f16-a-R1-010`; caught at `6a-read` by `reader`). The Euclidean ball supplier requires n>=1; the definition and its dependent family now preserve that scope.
- `def-ck-euclidean-maps-and-diffeomorphisms` — **fixed** (`f16-a-R1-018`; caught at `6a-read` by `reader`). The componentwise Ck and diffeomorphism definitions omitted positive source/square dimensions; m,n and the formerly free q are now explicit.
- `thm-nearest-point-in-a-nonempty-closed-convex-set` — **fixed** (`f16-a-R1-019`; caught at `6a-read` by `reader`). The projection and separation chain cited positive-dimensional Euclidean compactness while omitting n>=1; the scope now propagates through the chain.
- `thm-zero-derivative-on-connected-open-euclidean-set-iff-constant` — **fixed** (`f16-a-RB1I-001`; caught at `6b-adjudicate` by `refuter`). The Statement permitted zero source or target dimension outside its total-derivative and vector-valued suppliers; m,q>=1 and the zero boundary row now match those scopes.
- `cor-finite-maximal-time-forces-escape-from-every-compact-set` — **fixed** (`f16-step8-006`; caught at `8-adjudicate` by `judge-deepseek`). Confirmed paired-judge defect: Fact [L1] omits the Picard-Lindelof hypothesis required by the cited lemma, and the statement never assumes the ODE is Picard-Lindelof; step 2.1 applies [L1] to a maximal solution without establishing its hypotheses. | Step 2.1 applies L1, whose cited lemma requires a solution of a Picard-Lindelof ODE, but this corollary assumes only a maximal solution on an open ODE domain. …
- `cor-lipschitz-ode-uniqueness-and-stability-estimate` — **fixed** (`f16-step8-009`; caught at `8-adjudicate` by `judge-deepseek`). Confirmed paired-judge defect: Step 1.1 invokes L1 and L3, but L1 requires the ODE vector field F to be continuous and L3 requires the vector integrand to be integrable; the statement assumes only a pairwise Lipschitz bound along the two solution trajectories, so neither hypothesis is established. …
- `prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation` — **fixed** (`f16-step8-047`; caught at `8-adjudicate` by `judge-terra`). Confirmed paired-judge defect: The statement omits that D is open and n is at least 1, both required by the cited definition of a first-order IVP. Thus “solves the IVP” is not defined for all stated data, and L1 is not licensed when n is 0. The current item repairs the cited hypotheses, domain, construction, or inference identified by the finding.

### Invalid witness — 4

4 defects. Each construction was replaced or restricted so that it actually satisfies the hypotheses and refutes or illustrates the stated claim.

#### Invalid witness — 4

- `cex-continuous-ode-with-nonunique-delayed-solutions` — **fixed** (`f16-c-r3-11`; caught at `6a-read` by `reader`). R3-11 — `cex-continuous-ode-with-nonunique-delayed-solutions`, Given and step 1.1 — fatal.** The witnesses are defined only for `t>=0`, putting the initial time at a one-sided endpoint. They therefore do not refute the later claim of uniqueness for a *local* solution, whose domain must contain a two-sided neighborhood of zero. …
- `cex-strictly-convex-function-with-a-singular-hessian` — **fixed** (`f16-a-R1-012`; caught at `6a-read` by `reader`). The n=0 witness did not refute positive definiteness; the construction and downstream Fact now require n>=1.
- `cex-generating-family-without-pi-system` — **fixed** (`f16-step8-003`; caught at `8-adjudicate` by `judge-deepseek`). Confirmed paired-judge defect: Step 3.1 claims the example violates exactly the pi-system hypothesis, but the cited uniqueness theorem also requires an increasing sequence in the generating family exhausting X. Here G has no such sequence, since no distinct member of G is contained in another. Thus the exactness claim is false. …
- `ex-irregular-pentagon-area-by-triangulation-and-shoelace` — **fixed** (`f16-step8-028`; caught at `8-adjudicate` by `judge-deepseek`). Confirmed paired-judge defect: Step 1.1 uses the uncited fact that positive successive edge cross products imply the polygon is convex and diagonals lie inside, and it converts determinants 8,16,6 into triangle contents without citing the triangle-content formula; [L1] only gives additivity. | Step 1.1 does not establish that the displayed chain is simple before invoking L1 and L2. …

## Fatal defects, by location

This is the same 173-row set cross-indexed by where the defect lived. The defect id links each entry to the type grouping above; the disposition is repeated so no location can hide an open result.

### Title — 11

- `thm-triangle-content-and-base-height-formula` — **fixed** (`frontier-16-b-R2-4`).
- `def-completion-of-a-measure-space` — **fixed** (`frontier-16-b-R5-2`).
- `lem-completion-domain-is-a-sigma-algebra` — **fixed** (`frontier-16-b-R5-3a`).
- `thm-completion-of-a-measure-space` — **fixed** (`frontier-16-b-R5-4`).
- `ex-completion-of-borel-dirac-measure` — **fixed** (`frontier-16-b-R5-5`).
- `lem-vector-valued-continuous-curve-space-is-complete` — **fixed** (`f16-c-r3-3`).
- `lem-equicontinuous-bounded-rn-valued-curves-have-a-uniformly-convergent-subsequence` — **fixed** (`f16-c-r3-8`).
- `cor-holomorphic-mean-value-property` — **fixed** (`f16-c-r7-5`).
- `thm-proper-local-diffeomorphisms-have-finite-diffeomorphic-sheets` — **fixed** (`f16-a-R1-002`).
- `thm-classical-weierstrass-function-nowhere-differentiable` — **fixed** (`f16-step8-052`).
- `thm-supporting-hyperplane-at-a-boundary-point-of-a-convex-set` — **narrowed** (`f16-step8-070`).

### Statement — 26

- `cor-simple-polygon-triangulation-has-n-minus-two-triangles` — **deferred** (`frontier-16-b-R2-3`).
- `lem-uniform-tail-control-for-dominated-improper-multiple-integrals` — **fixed** (`frontier-16-b-R2-5`).
- `prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation` — **fixed** (`f16-c-r3-1`).
- `thm-first-order-linear-ode-integrating-factor` — **fixed** (`f16-c-r3-6`).
- `lem-euler-polygonal-approximations-are-uniformly-bounded-and-equicontinuous` — **fixed** (`f16-c-r3-7`).
- `thm-monotonicity-of-the-henstock-kurzweil-integral` — **fixed** (`f16-c-r3-12`).
- `thm-every-derivative-is-henstock-kurzweil-integrable` — **fixed** (`f16-c-r3-14`).
- `cor-henstock-kurzweil-integration-by-parts` — **fixed** (`f16-c-r3-15`).
- `cor-henstock-kurzweil-substitution-for-derivatives` — **fixed** (`f16-c-r3-16`).
- `thm-parametrized-implicit-function-theorem-with-higher-regularity` — **fixed** (`f16-a-R1-001`).
- `lem-convex-function-bound-on-an-interior-cube` — **fixed** (`f16-a-R1-008`).
- `ex-finite-maximum-of-affine-functions-and-its-subdifferential` — **fixed** (`f16-a-R1-011`).
- `cex-strictly-convex-function-with-a-singular-hessian` — **fixed** (`f16-a-R1-012`).
- `thm-nearest-point-in-a-nonempty-closed-convex-set` — **fixed** (`f16-a-R1-019`).
- `thm-zero-derivative-on-connected-open-euclidean-set-iff-constant` — **fixed** (`f16-a-RB1I-001`).
- `cor-finite-maximal-time-forces-escape-from-every-compact-set` — **fixed** (`f16-step8-006`).
- `cor-lipschitz-ode-uniqueness-and-stability-estimate` — **fixed** (`f16-step8-009`).
- `lem-cauchy-estimates-on-concentric-subdiscs` — **fixed** (`f16-step8-037`).
- `lem-equicontinuous-bounded-rn-valued-curves-have-a-uniformly-convergent-subsequence` — **fixed** (`f16-step8-040`).
- `lem-euler-polygonal-approximations-are-uniformly-bounded-and-equicontinuous` — **fixed** (`f16-step8-041`).
- `lem-weierstrass-low-frequency-difference-quotient-bound` — **fixed** (`f16-step8-045`).
- `prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation` — **fixed** (`f16-step8-047`).
- `thm-comparison-tests-for-noncompact-henstock-kurzweil-integrals` — **fixed** (`f16-step8-054`).
- `thm-finite-inclusion-exclusion-for-measures` — **fixed** (`f16-step8-056`).
- `thm-henstock-kurzweil-integrability-on-subintervals-and-additivity` — **fixed** (`f16-step8-059`).
- `thm-peano-local-existence-for-continuous-odes` — **fixed** (`f16-step8-091`).

### Definition — 19

- `def-picard-operator-and-picard-iterates` — **fixed** (`f16-c-r3-2`).
- `def-order-of-zero-holomorphic-function` — **fixed** (`f16-c-r7-6`).
- `def-semicontinuity-on-euclidean-subsets` — **fixed** (`f16-a-R1-010`).
- `def-ck-euclidean-maps-and-diffeomorphisms` — **fixed** (`f16-a-R1-018`).
- `def-base-and-height-for-plane-figures` — **fixed** (`f16-step8-011`).
- `def-ck-euclidean-maps-and-diffeomorphisms` — **fixed** (`f16-step8-012`).
- `def-completion-of-a-measure-space` — **fixed** (`f16-step8-013`).
- `def-finite-sigma-finite-and-semifinite-measures` — **fixed** (`f16-step8-014`).
- `def-gauge-and-fine-tagged-partition` — **fixed** (`f16-step8-015`).
- `def-henstock-kurzweil-integral-on-a-noncompact-interval` — **fixed** (`f16-step8-016`).
- `def-locally-lipschitz-in-the-state-variable` — **fixed** (`f16-step8-017`).
- `def-modulus-of-continuity-and-osgood-condition` — **fixed** (`f16-step8-018`).
- `def-nonnegative-extended-series` — **fixed** (`f16-step8-019`).
- `def-picard-operator-and-picard-iterates` — **fixed** (`f16-step8-020`).
- `def-semifinite-part-of-a-measure` — **fixed** (`f16-step8-021`).
- `def-simple-polygonal-region-and-triangulation` — **fixed** (`f16-step8-022`).
- `def-wedge-of-pointed-spaces` — **fixed** (`f16-step8-023`).
- `def-locally-lipschitz-in-the-state-variable` — **fixed** (`f16-step8-078`).
- `def-picard-operator-and-picard-iterates` — **fixed** (`f16-step8-079`).

### Facts & Assumptions — 80

- `thm-continuity-of-dominated-parameter-dependent-improper-integrals` — **fixed** (`frontier-16-b-R2-7`).
- `thm-differentiation-under-dominated-improper-multiple-integrals` — **fixed** (`frontier-16-b-R2-8`).
- `cex-differentiation-under-an-improper-integral-without-domination` — **fixed** (`frontier-16-b-R2-9`).
- `ex-scaled-gaussian-parameter-integral` — **fixed** (`frontier-16-b-R2-10`).
- `cor-uniform-picard-lindelof-for-nearby-initial-values` — **fixed** (`f16-c-r3-4`).
- `thm-comparison-tests-for-noncompact-henstock-kurzweil-integrals` — **fixed** (`f16-c-r3-29`).
- `cor-x-sine-of-one-over-x-is-not-differentiable-at-zero` — **fixed** (`f16-c-r4-3`).
- `ex-x-squared-sine-of-one-over-x-squared` — **fixed** (`f16-c-r4-4`).
- `ex-x-squared-sine-of-one-over-x-squared` — **fixed** (`f16-c-r4-5`).
- `ex-sine-harmonics-pointwise-bounded-without-uniform-subsequence` — **fixed** (`f16-c-r4-6`).
- `ex-sine-harmonics-pointwise-bounded-without-uniform-subsequence` — **fixed** (`f16-c-r4-7`).
- `lem-topologists-sine-curve-is-connected` — **fixed** (`f16-c-r4-8`).
- `cex-topologists-sine-curve-connected-not-path-connected` — **fixed** (`f16-c-r4-9`).
- `cex-topologists-sine-curve-connected-not-path-connected` — **fixed** (`f16-c-r4-10`).
- `ex-tangent-homeomorphism-between-bounded-and-unbounded-spaces` — **fixed** (`f16-c-r4-11`).
- `ex-sine-harmonic-series-pointwise-not-uniform` — **fixed** (`f16-c-r4-12`).
- `fs-a-continuous-function-on-a-compact-interval-has-a-rectifiable-graph` — **fixed** (`f16-c-r4-13`).
- `cor-holomorphic-functions-are-real-analytic-and-smooth` — **fixed** (`f16-c-r7-1`).
- `thm-entire-polynomial-growth-is-polynomial` — **fixed** (`f16-c-r7-2`).
- `thm-weierstrass-convergence-holomorphic-functions` — **fixed** (`f16-c-r7-3`).
- `thm-holomorphic-parameter-riemann-integral` — **fixed** (`f16-c-r7-4`).
- `thm-continuous-dependence-of-odes-on-initial-data-and-parameters` — **fixed** (`f16-c-c3-f2`).
- `fs-an-open-c-one-map-has-invertible-derivative` — **fixed** (`f16-a-R1-003`).
- `cex-strictly-convex-function-with-a-singular-hessian` — **fixed** (`f16-a-R1-021`).
- `fs-invertible-derivative-everywhere-gives-a-global-inverse` — **fixed** (`f16-a-R1-022`).
- `lem-convex-set-and-closure-have-same-interior-and-boundary` — **fixed** (`f16-a-RB1C-001`).
- `cor-positive-definite-hessian-implies-strict-convexity` — **fixed** (`f16-a-RB1C-004`).
- `cex-continuity-from-above-without-finite-first-measure` — **fixed** (`f16-step8-001`).
- `cex-convex-function-with-empty-subdifferential-at-a-boundary-point` — **fixed** (`f16-step8-002`).
- `cex-linear-bijection-need-not-preserve-jordan-content` — **fixed** (`f16-step8-004`).
- `cor-holomorphic-mean-value-property` — **fixed** (`f16-step8-007`).
- `cor-indefinite-henstock-kurzweil-integral-is-a-primitive` — **fixed** (`f16-step8-008`).
- `cor-x-sine-of-one-over-x-is-not-differentiable-at-zero` — **fixed** (`f16-step8-010`).
- `ex-completion-of-borel-dirac-measure` — **fixed** (`f16-step8-024`).
- `ex-counting-measure-and-sigma-finiteness` — **fixed** (`f16-step8-025`).
- `ex-dyadic-probability-measure-on-naturals` — **fixed** (`f16-step8-026`).
- `ex-euclidean-norm-and-squared-norm-are-convex` — **fixed** (`f16-step8-027`).
- `ex-polar-coordinates-as-a-local-diffeomorphism` — **fixed** (`f16-step8-029`).
- `ex-sine-over-x-has-a-noncompact-henstock-kurzweil-integral` — **fixed** (`f16-step8-031`).
- `ex-two-equation-implicit-system` — **fixed** (`f16-step8-032`).
- `ex-unbounded-derivative-evaluated-by-henstock-kurzweil` — **fixed** (`f16-step8-033`).
- `fs-continuity-from-above-without-finiteness` — **fixed** (`f16-step8-034`).
- `fs-countable-additivity-without-disjointness` — **fixed** (`f16-step8-035`).
- `fs-invertible-derivative-everywhere-gives-a-global-inverse` — **fixed** (`f16-step8-036`).
- `lem-deck-transformations-correspond-to-normalizer-cosets` — **fixed** (`f16-step8-039`).
- `lem-finite-sine-harmonic-sums` — **fixed** (`f16-step8-042`).
- `lem-gaussian-integral-is-finite-and-positive` — **fixed** (`f16-step8-043`).
- `lem-plane-gaussian-integral-in-polar-coordinates` — **fixed** (`f16-step8-044`).
- `prop-covering-morphism-subgroup-criterion` — **fixed** (`f16-step8-046`).
- `prop-pointwise-supremum-preserves-convexity` — **fixed** (`f16-step8-049`).
- `thm-absolute-improper-multiple-integral-by-exhaustion` — **fixed** (`f16-step8-050`).
- `thm-ck-euclidean-maps-closed-under-algebra-and-composition` — **fixed** (`f16-step8-051`).
- `thm-comparison-test-for-improper-multiple-integrals` — **fixed** (`f16-step8-053`).
- `thm-completion-of-a-measure-space` — **fixed** (`f16-step8-055`).
- `thm-first-order-linear-ode-integrating-factor` — **fixed** (`f16-step8-057`).
- `thm-fundamental-group-of-a-product` — **fixed** (`f16-step8-058`).
- `thm-hessian-characterises-convexity` — **fixed** (`f16-step8-060`).
- `thm-measures-on-countable-discrete-spaces-are-weighted-dirac-sums` — **fixed** (`f16-step8-061`).
- `thm-nonnegative-improper-multiple-integral-by-exhaustion` — **fixed** (`f16-step8-062`).
- `thm-peano-local-existence-for-continuous-odes` — **fixed** (`f16-step8-063`).
- `thm-proper-local-diffeomorphisms-have-finite-diffeomorphic-sheets` — **fixed** (`f16-step8-064`).
- `thm-shoelace-formula-for-simple-polygons` — **fixed** (`f16-step8-067`).
- `thm-strict-separation-of-a-point-from-a-closed-convex-set` — **fixed** (`f16-step8-069`).
- `thm-classification-of-connected-covering-spaces` — **fixed** (`f16-step8-071`).
- `cor-connected-coverings-of-circle-classified-by-nonnegative-integers` — **fixed** (`f16-step8-072`).
- `cor-every-connected-covering-of-circle-is-regular` — **fixed** (`f16-step8-073`).
- `ex-circle-covering-towers-follow-divisibility` — **fixed** (`f16-step8-074`).
- `ex-regular-and-nonregular-three-sheeted-wedge-coverings` — **fixed** (`f16-step8-075`).
- `cor-lipschitz-ode-uniqueness-and-stability-estimate` — **fixed** (`f16-step8-077`).
- `ex-circle-covering-towers-follow-divisibility` — **fixed** (`f16-step8-080`).
- `ex-two-equation-implicit-system` — **fixed** (`f16-step8-081`).
- `ex-unbounded-derivative-evaluated-by-henstock-kurzweil` — **fixed** (`f16-step8-082`).
- `lem-deck-transformations-correspond-to-normalizer-cosets` — **fixed** (`f16-step8-083`).
- `thm-ck-euclidean-maps-closed-under-algebra-and-composition` — **fixed** (`f16-step8-086`).
- `thm-classical-weierstrass-function-nowhere-differentiable` — **fixed** (`f16-step8-087`).
- `thm-first-order-linear-ode-integrating-factor` — **fixed** (`f16-step8-089`).
- `thm-henstock-kurzweil-integrability-on-subintervals-and-additivity` — **fixed** (`f16-step8-090`).
- `thm-proper-local-diffeomorphisms-have-finite-diffeomorphic-sheets` — **fixed** (`f16-step8-092`).
- `lem-plane-gaussian-integral-in-polar-coordinates` — **fixed** (`f16-step8-093`).
- `thm-first-order-linear-ode-integrating-factor` — **fixed** (`f16-step8-094`).

### Proof, verification, or refutation step — 35

- `lem-simple-polygon-has-an-interior-diagonal` — **deferred** (`frontier-16-b-R2-1`).
- `thm-simple-polygon-admits-a-triangulation` — **fixed** (`frontier-16-b-R2-2`).
- `thm-finite-inclusion-exclusion-for-measures` — **fixed** (`frontier-16-b-R5-1`).
- `lem-completion-domain-is-a-sigma-algebra` — **fixed** (`frontier-16-b-R5-3b`).
- `cor-globally-lipschitz-odes-have-global-solutions` — **fixed** (`f16-c-r3-5`).
- `thm-peano-local-existence-for-continuous-odes` — **fixed** (`f16-c-r3-9`).
- `thm-osgood-uniqueness-criterion-for-first-order-odes` — **fixed** (`f16-c-r3-10`).
- `cex-continuous-ode-with-nonunique-delayed-solutions` — **fixed** (`f16-c-r3-11`).
- `thm-henstock-kurzweil-integrability-on-subintervals-and-additivity` — **fixed** (`f16-c-r3-13`).
- `thm-hake-extension-theorem-for-henstock-kurzweil-integrals` — **fixed** (`f16-c-r3-17`).
- `thm-saks-henstock-lemma` — **fixed** (`f16-c-r3-18`).
- `cex-uniqueness-does-not-require-local-lipschitz-continuity` — **fixed** (`f16-c-r3-30`).
- `ex-weierstrass-function-with-one-half-and-fifteen` — **fixed** (`f16-c-r4-1`).
- `lem-finite-sine-harmonic-sums` — **fixed** (`f16-c-r4-2`).
- `cor-finite-maximal-time-forces-escape-from-every-compact-set` — **fixed** (`f16-c-c3-f1`).
- `cor-subdifferential-of-a-differentiable-convex-function-is-the-gradient` — **fixed** (`f16-a-R1-009`).
- `ex-two-equation-implicit-system` — **fixed** (`f16-a-R1-020`).
- `thm-fundamental-group-of-a-product` — **fixed** (`f16-a-R6-001`).
- `prop-covering-morphism-subgroup-criterion` — **fixed** (`f16-a-R6-002`).
- `thm-supporting-hyperplane-at-a-boundary-point-of-a-convex-set` — **fixed** (`f16-a-RB1C-002`).
- `thm-euclidean-semicontinuity-epigraph-characterisations` — **fixed** (`f16-a-RB1C-003`).
- `cex-generating-family-without-pi-system` — **fixed** (`f16-step8-003`).
- `cex-uniqueness-does-not-require-local-lipschitz-continuity` — **fixed** (`f16-step8-005`).
- `ex-irregular-pentagon-area-by-triangulation-and-shoelace` — **fixed** (`f16-step8-028`).
- `ex-quadratic-ode-finite-time-blowup` — **fixed** (`f16-step8-030`).
- `lem-convex-set-and-closure-have-same-interior-and-boundary` — **fixed** (`f16-step8-038`).
- `prop-picard-iteration-converges-with-explicit-error-bounds` — **fixed** (`f16-step8-048`).
- `thm-seifert-van-kampen` — **fixed** (`f16-step8-065`).
- `thm-semifinite-and-zero-infinity-decomposition` — **fixed** (`f16-step8-066`).
- `thm-simple-polygon-admits-a-triangulation` — **fixed** (`f16-step8-068`).
- `cex-uniqueness-does-not-require-local-lipschitz-continuity` — **fixed** (`f16-step8-076`).
- `lem-equicontinuous-bounded-rn-valued-curves-have-a-uniformly-convergent-subsequence` — **fixed** (`f16-step8-084`).
- `lem-plane-gaussian-integral-in-polar-coordinates` — **fixed** (`f16-step8-085`).
- `thm-classification-of-connected-covering-spaces` — **fixed** (`f16-step8-088`).
- `thm-peano-local-existence-for-continuous-odes` — **fixed** (`f16-step8-095`).

### Page summary / page prose — 1

- `areas-of-elementary-plane-figures` — **fixed** (`frontier-16-b-R2-6`).

### Proof-contract row — 1

- `class:batch-5-contract-citations` — **fixed** (`frontier-16-b-R5-14`).

**Remark prose:** no fatal Remark defect was confirmed in this run. **Other page prose:** no fatal body-prose defect was confirmed beyond the `areas-of-elementary-plane-figures` summary row above.

## Judge comparison — outcomes, not rejection rates

Both lanes saw byte-identical frozen contexts. DeepSeek V4 Pro is the only cross-family reader in the run. Terra, the Sol authors, the Sol readers/refuters, and the Sol Alpha are all GPT-family; Terra/Alpha agreement is therefore same-family agreement, not corroboration.

| outcome over the append-only verdict ledger | DeepSeek V4 Pro | GPT 5.6 Terra |
|---|---:|---:|
| verdict rows | 450 | 425 |
| pass rows | 295 | 239 |
| rejection rows | 124 | 180 |
| null rows | 31 | 6 |
| adjudicated rejection candidates | 124 | 180 |
| confirmed-fatal lane findings | 67 | 76 |
| confirmed-nonfatal lane findings | 52 | 99 |
| false-positive lane findings | 5 | 5 |

Latest **usable** current-text agreement is 207 both-pass, 38 both-reject, 17 DeepSeek-only reject, 62 Terra-only reject, and 0 incomplete/null. Every current rejection has an exact-hash nonfatal or false-positive adjudication. Latest **attempt** agreement is 191 both-pass, 38 both-reject, 16 DeepSeek-only, 59 Terra-only, and 20 incomplete/null: those 20 latest calls were nulls, but an earlier usable verdict on the same current text remains valid. Across the complete ledger there are 37 null verdict rows (31 DeepSeek, 6 Terra); none counts as coverage or a mathematical verdict.

Owner-confirmed judge defects collapse 143 fatal lane findings into **95 distinct defect rows on 75 item ids**: 48 were found by both lanes, **19 by DeepSeek alone**, and **28 by Terra alone**. The DeepSeek-only set is the run's unique cross-family signal; the Terra-only set is independent-process evidence but not independent-family evidence.

### DeepSeek-only confirmed-fatal defects — 19

- `cex-uniqueness-does-not-require-local-lipschitz-continuity` — Invalid proof inference; **fixed** (`f16-step8-005`).
- `cor-indefinite-henstock-kurzweil-integral-is-a-primitive` — Inflated cited clause; **fixed** (`f16-step8-008`).
- `def-ck-euclidean-maps-and-diffeomorphisms` — Ill-typed Definition or construction; **fixed** (`f16-step8-012`).
- `def-finite-sigma-finite-and-semifinite-measures` — Ill-typed Definition or construction; **fixed** (`f16-step8-014`).
- `def-nonnegative-extended-series` — Ill-typed Definition or construction; **fixed** (`f16-step8-019`).
- `fs-invertible-derivative-everywhere-gives-a-global-inverse` — Inflated cited clause; **fixed** (`f16-step8-036`).
- `lem-convex-set-and-closure-have-same-interior-and-boundary` — Invalid proof inference; **fixed** (`f16-step8-038`).
- `lem-weierstrass-low-frequency-difference-quotient-bound` — False or overstrong Statement; **fixed** (`f16-step8-045`).
- `thm-classical-weierstrass-function-nowhere-differentiable` — False or overstrong title; **fixed** (`f16-step8-052`).
- `thm-finite-inclusion-exclusion-for-measures` — False or overstrong Statement; **fixed** (`f16-step8-056`).
- `thm-hessian-characterises-convexity` — Inflated cited clause; **fixed** (`f16-step8-060`).
- `thm-seifert-van-kampen` — Invalid proof inference; **fixed** (`f16-step8-065`).
- `thm-shoelace-formula-for-simple-polygons` — Inflated cited clause; **fixed** (`f16-step8-067`).
- `thm-simple-polygon-admits-a-triangulation` — Invalid proof inference; **fixed** (`f16-step8-068`).
- `thm-classification-of-connected-covering-spaces` — Truncated cited clause; **fixed** (`f16-step8-071`).
- `cor-every-connected-covering-of-circle-is-regular` — Truncated cited clause; **fixed** (`f16-step8-073`).
- `lem-equicontinuous-bounded-rn-valued-curves-have-a-uniformly-convergent-subsequence` — Invalid proof inference; **fixed** (`f16-step8-084`).
- `thm-classification-of-connected-covering-spaces` — Missing dependency or proof input; **fixed** (`f16-step8-088`).
- `thm-first-order-linear-ode-integrating-factor` — Truncated cited clause; **fixed** (`f16-step8-089`).

### Terra-only confirmed-fatal defects — 28

- `cex-linear-bijection-need-not-preserve-jordan-content` — Inflated cited clause; **fixed** (`f16-step8-004`).
- `cor-x-sine-of-one-over-x-is-not-differentiable-at-zero` — Inflated cited clause; **fixed** (`f16-step8-010`).
- `def-completion-of-a-measure-space` — Ill-typed Definition or construction; **fixed** (`f16-step8-013`).
- `def-gauge-and-fine-tagged-partition` — Ill-typed Definition or construction; **fixed** (`f16-step8-015`).
- `def-henstock-kurzweil-integral-on-a-noncompact-interval` — Ill-typed Definition or construction; **fixed** (`f16-step8-016`).
- `def-locally-lipschitz-in-the-state-variable` — Ill-typed Definition or construction; **fixed** (`f16-step8-017`).
- `def-modulus-of-continuity-and-osgood-condition` — Ill-typed Definition or construction; **fixed** (`f16-step8-018`).
- `def-semifinite-part-of-a-measure` — Ill-typed Definition or construction; **fixed** (`f16-step8-021`).
- `def-simple-polygonal-region-and-triangulation` — Ill-typed Definition or construction; **fixed** (`f16-step8-022`).
- `def-wedge-of-pointed-spaces` — Ill-typed Definition or construction; **fixed** (`f16-step8-023`).
- `ex-counting-measure-and-sigma-finiteness` — Inflated cited clause; **fixed** (`f16-step8-025`).
- `ex-dyadic-probability-measure-on-naturals` — Inflated cited clause; **fixed** (`f16-step8-026`).
- `fs-continuity-from-above-without-finiteness` — Inflated cited clause; **fixed** (`f16-step8-034`).
- `lem-cauchy-estimates-on-concentric-subdiscs` — False or overstrong Statement; **fixed** (`f16-step8-037`).
- `prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation` — Missing domain or theorem hypothesis; **fixed** (`f16-step8-047`).
- `prop-pointwise-supremum-preserves-convexity` — Inflated cited clause; **fixed** (`f16-step8-049`).
- `thm-absolute-improper-multiple-integral-by-exhaustion` — Inflated cited clause; **fixed** (`f16-step8-050`).
- `thm-comparison-test-for-improper-multiple-integrals` — Inflated cited clause; **fixed** (`f16-step8-053`).
- `thm-fundamental-group-of-a-product` — Inflated cited clause; **fixed** (`f16-step8-058`).
- `thm-peano-local-existence-for-continuous-odes` — Inflated cited clause; **fixed** (`f16-step8-063`).
- `thm-proper-local-diffeomorphisms-have-finite-diffeomorphic-sheets` — Inflated cited clause; **fixed** (`f16-step8-064`).
- `ex-circle-covering-towers-follow-divisibility` — Truncated cited clause; **fixed** (`f16-step8-074`).
- `cex-uniqueness-does-not-require-local-lipschitz-continuity` — Invalid proof inference; **fixed** (`f16-step8-076`).
- `def-locally-lipschitz-in-the-state-variable` — Undefined or free notation; **fixed** (`f16-step8-078`).
- `thm-classical-weierstrass-function-nowhere-differentiable` — Truncated cited clause; **fixed** (`f16-step8-087`).
- `thm-peano-local-existence-for-continuous-odes` — Undefined or free notation; **fixed** (`f16-step8-091`).
- `thm-proper-local-diffeomorphisms-have-finite-diffeomorphic-sheets` — Inflated cited clause; **fixed** (`f16-step8-092`).
- `thm-first-order-linear-ode-integrating-factor` — Truncated cited clause; **fixed** (`f16-step8-094`).

### Current model-only rejections after all repairs

DeepSeek-only (17), all adjudicated nonfatal/false-positive: `cor-injective-regular-ck-map-is-a-ck-diffeomorphism-onto-its-image` · `cor-lipschitz-ode-uniqueness-and-stability-estimate` · `ex-cousins-lemma-gives-heine-borel-on-an-interval` · `ex-unbounded-derivative-evaluated-by-henstock-kurzweil` · `fs-invertible-derivative-at-a-point-gives-a-local-inverse` · `lem-convex-set-and-closure-have-same-interior-and-boundary` · `lem-gaussian-square-is-the-plane-gaussian-integral` · `prop-counting-measure-is-a-measure` · `prop-two-set-measure-identity` · `rem-classical-counterparts-for-trigonometry-free-oscillators` · `thm-differentiable-convex-functions-and-gradient-inequality` · `thm-euclidean-semicontinuity-level-set-characterisations` · `thm-first-order-linear-ode-integrating-factor` · `thm-injective-regular-c-one-map-is-a-diffeomorphism-onto-its-image` · `thm-semifinite-and-zero-infinity-decomposition` · `thm-simple-polygon-admits-a-triangulation` · `thm-triangle-content-and-base-height-formula`.

Terra-only (62), all adjudicated nonfatal/false-positive: `cex-boundary-convergent-power-series-no-larger-holomorphic-disc` · `cex-convex-function-with-empty-subdifferential-at-a-boundary-point` · `cex-free-ultrafilter-finitely-additive-probability` · `cex-lower-semicontinuous-compact-function-without-a-maximum` · `cex-strictly-convex-function-with-a-singular-hessian` · `cex-topologists-sine-curve-connected-not-path-connected` · `cex-uniqueness-does-not-require-local-lipschitz-continuity` · `cor-proper-local-diffeomorphisms-have-constant-finite-fibres` · `def-jordan-exhaustion-of-an-open-set` · `ex-borel-cantelli-for-shrinking-dyadic-intervals` · `ex-circle-covering-towers-follow-divisibility` · `ex-countable-cocountable-zero-infinity-measure` · `ex-dirichlet-function-is-henstock-kurzweil-integrable` · `ex-distinct-basepoint-change-isomorphisms-on-two-circle-wedge` · `ex-finite-maximum-of-affine-functions-and-its-subdifferential` · `ex-holomorphy-of-integral-of-t-to-z` · `ex-polar-coordinates-as-a-local-diffeomorphism` · `ex-sine-period-arc-length-as-a-complete-elliptic-integral` · `ex-x-squared-sine-of-one-over-x-squared` · `fs-continuity-from-above-without-finiteness` · `fs-every-finitely-additive-set-function-is-a-measure` · `fs-every-fundamental-group-is-abelian` · `fs-every-smooth-map-of-the-plane-is-real-analytic` · `fs-van-kampen-with-disconnected-intersection` · `lem-antipodal-sphere-cover` · `lem-compact-local-homeomorphism-surjective-with-finite-fibres` · `lem-equicontinuous-bounded-rn-valued-curves-have-a-uniformly-convergent-subsequence` · `lem-locally-unique-ode-solutions-agree-and-glue-on-overlaps` · `lem-matrix-inversion-preserves-ck-regularity` · `lem-picard-operator-is-a-short-time-contraction` · `lem-plane-gaussian-integral-in-polar-coordinates` · `lem-vector-valued-continuous-curve-space-is-complete` · `lem-weierstrass-probe-points` · `lem-weissinger-fixed-point-criterion` · `prop-dirac-measure-is-a-probability-measure` · `prop-henstock-kurzweil-integral-is-unique` · `prop-measure-monotonicity` · `prop-null-symmetric-difference-preserves-measure` · `prop-picard-iteration-converges-with-explicit-error-bounds` · `prop-semicontinuity-agrees-on-the-real-line` · `thm-cauchy-criterion-for-noncompact-henstock-kurzweil-integrals` · `thm-ck-euclidean-maps-closed-under-algebra-and-composition` · `thm-classical-weierstrass-function-nowhere-differentiable` · `thm-continuity-of-dominated-parameter-dependent-improper-integrals` · `thm-euclidean-semicontinuity-epigraph-characterisations` · `thm-every-derivative-is-henstock-kurzweil-integrable` · `thm-finite-and-countable-subadditivity-of-measures` · `thm-finite-jensen-inequality-in-euclidean-space` · `thm-gronwall-integral-inequality` · `thm-henstock-kurzweil-cauchy-criterion` · `thm-henstock-kurzweil-integrability-on-subintervals-and-additivity` · `thm-holomorphic-parameter-riemann-integral` · `thm-jacobian-sign-is-constant-on-a-connected-regular-domain` · `thm-measure-of-set-liminf` · `thm-nearest-point-in-a-nonempty-closed-convex-set` · `thm-picard-lindelof-local-existence-and-uniqueness` · `thm-riemann-lebesgue-lemma-for-continuous-functions` · `thm-semifinite-part-is-a-measure` · `thm-separating-hyperplane-theorem-for-disjoint-convex-sets` · `thm-supporting-hyperplane-at-a-boundary-point-of-a-convex-set` · `thm-weierstrass-convergence-holomorphic-functions` · `thm-zero-derivative-on-connected-open-euclidean-set-iff-constant`.

## Items repaired more than once — twice-touched escalation

`touchlog report --min 2` finds 17 items with at least two actual repairs. All have current usable paired verdicts and no open fatal. “Converged” below means the final remaining rejection, if any, is exact-hash nonfatal or false-positive; it does not erase the repeated-repair history.

| item | repairs | current usable lane outcome | reading |
|---|---:|---|---|
| `lem-plane-gaussian-integral-in-polar-coordinates` | 3 | Terra-only nonfatal rejection | **Converged, high-caution.** Three successive applicability/citation defects; owner should read. |
| `thm-first-order-linear-ode-integrating-factor` | 3 | DeepSeek-only nonfatal rejection | **Converged.** Repeated citation precision, not a moving Statement. |
| `thm-peano-local-existence-for-continuous-odes` | 3 | both pass | **Converged but structurally suspect.** The third repair replaced the proof from its first construction onward; owner should read. |
| `cex-uniqueness-does-not-require-local-lipschitz-continuity` | 2 | Terra-only nonfatal rejection | Converged; the second repair corrected the domain/logarithm route. |
| `cor-lipschitz-ode-uniqueness-and-stability-estimate` | 2 | DeepSeek-only false positive | Converged; hypotheses and integral orientation are now explicit. |
| `def-locally-lipschitz-in-the-state-variable` | 2 | both pass | Converged; free dimension and later notation residue fixed. |
| `def-picard-operator-and-picard-iterates` | 2 | both pass | Converged; partial-recursion/domain typing repaired. |
| `ex-two-equation-implicit-system` | 2 | both pass | Converged; exact IFT hypotheses restored after the first repair. |
| `ex-unbounded-derivative-evaluated-by-henstock-kurzweil` | 2 | DeepSeek-only false positive | Converged; exact HK/trigonometric Facts restored. |
| `lem-deck-transformations-correspond-to-normalizer-cosets` | 2 | both reject nonfatally | Converged; both lanes now identify only the same sub-30-second omitted tag. |
| `lem-equicontinuous-bounded-rn-valued-curves-have-a-uniformly-convergent-subsequence` | 2 | Terra-only nonfatal rejection | Converged; diagonal construction was replaced and deterministic enumeration checked. |
| `thm-ck-euclidean-maps-closed-under-algebra-and-composition` | 2 | Terra-only false positive | Converged; the final induction is licensed by the Definition. |
| `thm-classical-weierstrass-function-nowhere-differentiable` | 2 | Terra-only nonfatal rejection | Converged; range and source-clause defects fixed. |
| `thm-henstock-kurzweil-integrability-on-subintervals-and-additivity` | 2 | Terra-only nonfatal rejection | Converged; Cauchy quantifiers and exact clause fixed. |
| `thm-proper-local-diffeomorphisms-have-finite-diffeomorphic-sheets` | 2 | both pass | Converged; title/domain and later compact-metric scope repaired. |
| `ex-circle-covering-towers-follow-divisibility` | 2 | Terra-only false positive | Converged; covering hypotheses and path-connectedness are explicit. |
| `thm-classification-of-connected-covering-spaces` | 2 | both pass | Converged; basepoint-change hypotheses and path lifting repaired. |

The broader escalation tool prints 75 ids because two lanes rejecting one version count as two refutations. The 17-row table above is the actual repeated-repair set; the other 58 are agreement or one repair plus repeated verdicts, not multiple edits.

## Cross-edge, receipt, and scope closure

The post-6b audit manifest contained 1,618 relationships. Lead Alpha read every one of its 1,099 non-same-batch rows: 1,094 published-backward edges and five orientation-only forward references. Step-8 repairs produced a net increase of 57 `deps` edges (47 published-backward and 10 same-batch); the repairing Alpha opened every new target, regenerated the owning contracts/manifests, and the final audit receipt now covers 1,685 declared relationships. The current logical graph has 1,141 published-backward edges, 529 same-batch edges, and zero cross-batch edges.

The five forward references are:

- `thm-proper-local-diffeomorphisms-have-finite-diffeomorphic-sheets` → `def-covering-map-and-evenly-covered-neighbourhoods` and `cor-connected-cover-of-a-simply-connected-space-is-trivial`;
- `def-simple-polygonal-region-and-triangulation` → `def-polygonal-arc-and-polygon` and `thm-polygonal-jordan-curve`;
- `rem-classical-counterparts-for-trigonometry-free-oscillators` → `ex-x-squared-sine-of-one-over-x-squared`.

`research/frontier-16-impact.json` uses the correct `pre-author` baseline and the final item-changing endpoint `after-step8-alpha-round-3`. It records 324 changed interfaces, 261 required consumers, 261 concrete `still-licensed` dispositions, and no pending row. Step 9 changed coverage records only, so `post-step9` has the same item hashes. No receipt baseline defaulted or was taken after authoring.

`research/frontier-16-audit-coverage.json` attests all 324 items, 271 proof-bearing items, and 1,685 relationships. It reconciles exactly two planned/authored dependency drifts:

- `cor-every-connected-covering-of-circle-is-regular`: a duplicated planned edge collapsed to one logical edge in authored frontmatter;
- `ex-circle-covering-towers-follow-divisibility`: the fatal covering-hypothesis repair added `prop-real-line-mod-integers-is-compact-and-path-connected`, used as F11 in step 2.1.

`research/frontier-16-spine-audit.json` contains 58/58 `read` attestations for proof-bearing items in the top 100 dependency cones, at the current scope hash.

Step 9 read all 148 deferred/out-of-scope harvest rows. All 148 stand; no theorem was built or dropped there. Ninety-five missing destinations, one item-id-as-destination, and one wrong destination were corrected. Eighty-five rows remain explicit `owner-decision` placements because no compatible unbuilt page exists or the natural home is already published; they are honest scope questions, not hidden mathematical blockers.

## Course-pathway receipt

`tools/pathway-sync.mjs` placed every new A page and left no category without a pathway and no page unplaceable.

| category / part | pages placed |
|---|---|
| complex analysis / `contours-and-cauchy` | `analyticity-liouville-and-morera` |
| measure theory / `sigma-algebras-and-borel-sets` | `measures-and-their-basic-properties` |
| real analysis / `the-riemann-integral` | `the-gauge-integral-and-cousins-lemma` |
| real analysis / `several-variables` | `picard-lindelof-and-first-order-odes`, `convex-and-semicontinuous-functions-on-rn`, `improper-and-parameter-dependent-multiple-integrals`, `the-inverse-function-theorem-completed` |
| real analysis / `curves-and-the-fundamental-theorems` | `areas-of-elementary-plane-figures`, `trigonometric-and-oscillatory-examples-in-one-variable` |
| topology / `homotopy-and-covering-spaces` | `classification-of-covering-spaces`, `the-seifert-van-kampen-theorem` |

Each of those six existing part briefs now covers material it does not mention. `pathway-sync` cannot write prose; the owner needs to add one mathematically descriptive sentence to each brief before publication. There are no `categoriesWithoutPathway` entries.

## Findings about the machinery, not the mathematics

1. **The step-7 sweep survived an engine loss, but orphaned calls caused duplicate spend.** Judge children kept landing valid append-only rows after the engine vanished; a resumed sweep reused coverage correctly, while a few replacement calls timed out after the orphan had already supplied the verdict. Verdict authority stayed correct; time/token use did not.
2. **Terra repeated the model-refresh availability failure from frontier-15.** It stalled at 303/324 current items with `failed to refresh available model`, then recovered after the engine was interrupted. Capacity refusal remained a null, never a verdict.
3. **A duplicate-engine race produced a stale blocker.** SESSION started a replacement while the original engine was still completing asynchronous work. The replacement wrote an empty-output step-7 failure; the original later overwrote the stale state and dispatched exactly one Alpha. No mathematical artifact was duplicated, but there is no process-level single-engine lock.
4. **The step-8 repair hook could not route unadjudicated rows.** The first Alpha adjudicated 229 rejection rows, while the completed ledger held 237. The gate correctly found eight omissions across six ids, but two repair rounds reran the battery without dispatching work because the hook handled `open_fatal` and not `unadjudicated`. A narrow recovery Alpha closed them; this routing gap outlives the run.
5. **The repair loop converged, but expensively.** The initial 105 fatal lane findings collapsed to 70 repaired item versions; closure recovery added five; rejudges found 20 further fatal defects, producing 17 repeatedly repaired items and three three-repair items. Closure is now exact, but Peano and the Gaussian polar lemma deserve owner attention.
6. **The report sandbox cannot run nested gate subprocesses.** `level-coverage --verify-current-context`, judge closure, `gate-liveness`, and `apply-judge-stamps --verify` all receive `spawnSync /usr/bin/node EPERM` here and falsely report zero coverage/unparsed output. Direct component gates pass, and the engine-owned current-context receipt is green. The report does not rewrite a gate to make itself pass.
7. **Recovery wrote `after-step8-alpha` three times.** `pre-step8` is unique and the explicit `post-step8` guard window passes, so the duplicate closing label did not license an edit; it is nevertheless ambiguous history.
8. **The bare status command in `AGENTS.md` is stale on Node 22.** `node tools/autopilot/bin/autopilot.mts status` fails on the `.mts` extension; `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status` works.
9. **Finite smoke is live but extremely thin.** It checks one cyclic-index claim in 1 of 271 proof-bearing items. The pass is bounded falsification evidence, not proof coverage.
10. **Two proof-contract shotgun warnings remain.** `thm-semifinite-and-zero-infinity-decomposition` and `thm-weierstrass-convergence-holomorphic-functions` cite several Facts in one step while neighbouring steps cite none. The responsible Alphas opened the uses and found them licensed; the shape remains weaker than precise per-step attribution.
11. **Group b's canonical refuter transport was unavailable.** Fallback readers completed the mathematical scope, but process-level read-only enforcement was unavailable in that lane.
12. **The reciprocal FTA backlink remains owner-bound.** `rem-fundamental-theorem-of-algebra-via-liouville` names both proof routes, but the published minimum-modulus theorem does not name the new Liouville proof. This is expository enrichment, not an obvious-falsehood repair, so no agent edited the published item.

## Verification state

| gate / receipt | current result | caveat |
|---|---|---|
| precheck | **green** — 4,540 checked, 0 failing | repo-wide |
| depcheck / fwdcheck / extcheck | **green** | one run-scope `cited-not-in-deps` warning: `lem-finite-circle-wedge-open-cover` names the van Kampen corollary only to say its independently proved cover satisfies that corollary's hypotheses; the link is non-load-bearing orientation, not a missing logical edge |
| rendercheck | **green** — 6,048 files, real KaTeX and YAML | no visual browser preview |
| prosecheck | **green** — 0 errors, 571 heuristic warnings | warnings are legacy; not individually re-triaged here |
| depsource | **green** — 0 unresolved | 529 current run-local deps are reported as not on a published page by design |
| pathcheck | **green** — 10 pathways, 0 errors/warnings | six briefs need owner prose despite structural validity |
| manifest-integrity / splice verify | **green** — 22/22 pages, no drift | |
| proof-contract | **green** — 271/271, 2 shotgun warnings | warnings named above |
| finite-smoke | **green but thin** — 1 check on 1/271 items | bounded evidence only |
| risk-report | **green** — 271 routed, no missing review | every high/critical item has an Alpha disposition |
| boundary-audit | **green** — 2,168 rows, 838 `not_applicable`, no detector candidate | regex detectors do not prove dispositions true; two false rows were found manually and repaired earlier |
| citation-fidelity | **green** — no missing quote; 2 advisory widening candidates | both are false positives in context: the items' Given/Statement already fixes `n=1` or `n≥1` |
| coverage checklist | **green** — 11 A pages, 579 harvest rows, 4 low-yield warnings | IFT, elementary area, van Kampen, and covering classification declines were read by Alpha |
| full-text source stamps | **green** — 43/43 | |
| URL liveness receipt | **green** — 37/37 retained URLs, 10 superseded originals excluded | generated before the final proof repairs; URLs did not change, and this sandbox cannot independently rerun network liveness |
| content policy | **green** — 324 scoped, 0 errors/warnings | |
| impact audit | **green** — 324 interfaces, 261/261 dispositions | correct pre-author baseline; no pending row |
| step8 guard | **green** — 75/75 edits licensed, 0 creation/deletion | explicit `pre-step8 → post-step8` window |
| spine receipt | **green** — 58/58 read | hash-bound |
| defect ledger | **green** — 273 rows, 0 errors, no open row | generated view refreshed over all 880 ledger rows |
| judge closure, engine receipt | **green** — 324/324, no rejudge/unadjudicated/open fatal | receipt is newer than every item edit |
| judge closure, report sandbox rerun | **red/unknown** — 0/324 due every context-hash child returning non-JSON | `spawnSync EPERM`; not mathematical evidence |
| frontmatter judge stamps | **pending** — 0/324 currently stamped | `10-commit` mechanically applies/verifies them; local verify hits the same EPERM |
| obligations | **green** — 0 rows, 0 errors | |

`node tools/defect-ledger.mjs stats --run frontier-16 --leakage --recurrence --json` reports no recurrence flag. It reports 230 leaked rows out of 273 rows carrying a concrete `should_have_caught`, principally `5-author → 6a-read` (103), `6a-read → 8-adjudicate` (75), and `8-adjudicate → 8-rejudge` (20). Those are workflow effectiveness signals, not open defects.

### Caveats that must survive the headline

- Step-6 authors, readers, refuters, Terra, and Alpha are all GPT-family. Only DeepSeek supplies cross-family scrutiny.
- The fresh terminal current-context and judge-stamp commands cannot run in this report sandbox. The engine must rerun them after this report; do not publish from the local false-red output or from trust alone.
- Latest-attempt judge output contains 20 null-latest ids, even though latest-usable current-text coverage is complete. The distinction is essential.
- Finite-smoke covers 1/271 proof-bearing items. It is not general verification.
- Harvest faithfulness was read at every stated locator by the three group Alphas; step 10 did not independently re-extract all 43 source bodies. The low-yield warnings are therefore group-Alpha attestations, not a second whole-level source audit.
- The 6c lead read 1,094 published-backward edges at post-6b. The net 47 new published edges present after fatal repairs were checked inside those repair passes rather than in a second monolithic 6c sweep.
- The local URL environment cannot supply an independent live recheck; the durable 37/37 receipt and 43/43 full-text stamps are the evidence.
- No item has a reader-facing `verification.judge` stamp yet. That is intentionally owned by `10-commit`, not evidence that the judge sweep was absent.
- Eighty-five honest scope rows still require an owner placement decision if those results are ever built. They do not invalidate the present pages.
- No page was visually previewed in a browser. `rendercheck` proves parseability, not presentation.

## What I recommend the owner read personally

1. `thm-peano-local-existence-for-continuous-odes` — the only repeatedly repaired theorem whose third fatal repair replaced the proof from its first construction onward. Both lanes now pass.
2. `lem-plane-gaussian-integral-in-polar-coordinates` and `thm-first-order-linear-ode-integrating-factor` — the other three-repair items. Their remaining single-lane findings are nonfatal, but repeated citation/applicability faults warrant an eye.
3. `thm-simple-polygon-admits-a-triangulation` together with the two withdrawn frugal polygon results. The general triangulation proof was replaced wholesale and the source's n-minus-two theorem does not survive the broader subdivision-vertex convention.
4. `thm-supporting-hyperplane-at-a-boundary-point-of-a-convex-set` — choice scope was restored and the title was narrowed because an open convex set need not contain its boundary contact point.
5. The DeepSeek-only repairs to `thm-seifert-van-kampen`, `thm-classification-of-connected-covering-spaces`, `thm-classical-weierstrass-function-nowhere-differentiable`, and `lem-weierstrass-low-frequency-difference-quotient-bound`. These are the strongest cross-family-only signals.
6. The six pathway briefs named in the course-pathway receipt, and the owner-bound reciprocal FTA backlink.

## Publish readiness

**Mathematics:** publishable. All 173 fatal defects are fixed, narrowed, or withdrawn; no open fatal, no unadjudicated current rejection, no pending rejudge, no open ledger row, and no unresolved dependency remains.

**Before the status flip:**

1. Add one mathematically descriptive sentence to each of the six pathway briefs listed above.
2. Let the engine's `10-report` gate rerun current-context coverage in its normal process environment; it must return 324/324 on the final tree.
3. Let `10-commit` apply and verify the judge stamps and make the close-out commit on `main`.
4. Decide whether to add the reciprocal published FTA backlink; this is optional enrichment, not a correctness blocker.
5. Perform the owner audit, then set `verification.audited` and change `status: draft` to `published`.

Nothing in this report changes a status field, publishes, pushes, or writes a new defect-ledger row.
