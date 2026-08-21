# Frontier 16 — Step-8 closure recovery

Run: `frontier-16`  
Role: lead Alpha, GPT 5.6 Sol  
Frozen baseline: `pre-step8` at `2026-08-20T16:45:01.729Z`  
Prior durable record preserved: `research/frontier-16-alpha-step8.md`

## Scope recovery

I treated `research/frontier-16-judge-closure.json`'s six-id `unadjudicated` array as the scope source, then joined the append-only judge and adjudication ledgers on the exact key `(id, model, context_sha256)`. The judge ledger has 685 rows. Before this recovery the adjudication ledger had 229 rows; the exact join produced eight substantive `keep: false` rows and excluded null, capacity, and transport rows. No existing adjudication was replaced, reordered, or reinterpreted.

The guard-form `item_sha256` was computed from each pre-edit item with the entire `verification:` block excluded. Each full digest matched the `pre-step8` touch snapshot's 16-hex prefix. The judge-ledger `item_sha256` was not reused.

## Omitted adjudications

| Item | Model | Context SHA-256 | Guard item SHA-256 | Outcome | Evidence and disposition |
|---|---|---|---|---|---|
| `cor-connected-coverings-of-circle-classified-by-nonnegative-integers` | Terra | `c692f10b55ee5085b10781a2e53ec53646b23f1501cd7bcaebc01b6eab671330` | `f31d6829bfc9e7d96fbdcb7da0b7229cb331de06297d669b94c1f9b8d1b65282` | `confirmed_fatal` / `dependency_citation` | F3 replaced the sheet-index theorem's nonempty path-connected-total-space hypothesis by “connected covering.” The cited theorem does not license that shortening. |
| `ex-circle-covering-towers-follow-divisibility` | Terra | `9934a8fc535a96b9956957260be821cc3a4dda7d745ec776c79147771a28696e` | `f6a86dee20e246fe49944fcb135f020e04b030a8250bac6fd8509338b33ec65c` | `confirmed_fatal` / `dependency_citation` | F2 made the same inaccurate sheet-index shortening and step 3.1 did not establish path-connectedness of the source total space before applying it. |
| `ex-regular-and-nonregular-three-sheeted-wedge-coverings` | Terra | `74c45507bac945eb0166a852eb4143334562b9949691111bb10350af338d1ddf` | `a9e2ba259868751567f8da78eb96c9d1646b5ce6e8fe373d28762a197b755d9c` | `confirmed_fatal` / `dependency_citation` | F10 attributed an arbitrary-small-wedge radial contraction to a wedge Definition and an open-cover lemma whose Statements supply only the tagged quotient and one standard deformation-retract overlap. |
| `thm-classification-of-connected-covering-spaces` | DeepSeek | `5853c630867504068ee7756ff09a71ed9d1a87d67bd48162fd7f4de78da51cb0` | `97efd502710e33bb0857bfa734d62eb2ab871fe8126d702209eecef0b966d438` | `confirmed_fatal` / `dependency_citation` | L3 omitted the basepoint-change lemma's path-connected-total-space hypothesis and was applied to coverings assumed only connected. This is the cross-family-only rejection in the omitted set and was confirmed directly from the cited Statement. |
| `cor-every-connected-covering-of-circle-is-regular` | DeepSeek | `c85263c7796b67bb536d554196999c83f4433c5e8863e81db557f05035eaaa3a` | `629dd23afd7171b30b3bf197a5e9ccd23fc1f02e43ec5b66521fc1daba4b7967` | `confirmed_fatal` / `dependency_citation` | L1 omitted both the regularity theorem's path-connected-total-space hypothesis and its path-connected locally path-connected base hypotheses. Step 1.1 establishes them, but the cited Fact itself was inaccurate. |
| `cor-connected-coverings-of-circle-classified-by-nonnegative-integers` | DeepSeek | `c692f10b55ee5085b10781a2e53ec53646b23f1501cd7bcaebc01b6eab671330` | `f31d6829bfc9e7d96fbdcb7da0b7229cb331de06297d669b94c1f9b8d1b65282` | `confirmed_fatal` / `dependency_citation` | The lane independently identified the same missing path-connected-total-space condition in F3 and step 3.1. It shares defect-ledger row `f16-step8-072` with Terra. |
| `prop-counting-measure-is-a-measure` | DeepSeek | `09ce2c2cc4865a8d498c5122a835910fcb67d7f4f10dc506856833af0e5b5dde` | `e3bf1e597b343552df87049818c9fc434c5d6af9e97d199c25f461a96e88b8f4` | `confirmed_nonfatal` | Finite disjoint-union cardinality in step 1.1 and “an infinite set has more than $m$ distinct points” in step 2.2 are direct finite arguments from the cited definition of finite set. A competent reader closes both within 30 seconds. R1 therefore licenses no mutation, and none was made. |
| `ex-regular-and-nonregular-three-sheeted-wedge-coverings` | DeepSeek | `74c45507bac945eb0166a852eb4143334562b9949691111bb10350af338d1ddf` | `a9e2ba259868751567f8da78eb96c9d1646b5ce6e8fe373d28762a197b755d9c` | `confirmed_fatal` / `dependency_citation` | F6 omitted the regularity theorem's total-space and base hypotheses, and F7 omitted the sheet-index theorem's path-connected-total-space hypothesis. The two wedge findings are consolidated as one item-version defect-ledger row, `f16-step8-075`, with both adjudication references. |

Exactly eight rows were appended to `research/frontier-16-judge-adjudications.jsonl`, bringing it to 237 rows with no duplicate exact key. The five repaired item versions produced five defect-ledger rows, `f16-step8-071` through `f16-step8-075`; paired lanes share a row.

## Licensed repairs

- `thm-classification-of-connected-covering-spaces`: restored the exact L2/L3 hypotheses and proved that every connected covering total space is locally path-connected, hence path-connected, before the based-isomorphism or basepoint-change results are applied.
- `cor-connected-coverings-of-circle-classified-by-nonnegative-integers`: restored F3's exact hypothesis and derived path-connectedness of every classified connected circle cover from lifted local path-connectedness before counting sheets.
- `cor-every-connected-covering-of-circle-is-regular`: restored every hypothesis of the cited regular-covering characterization. Its existing first step supplies those hypotheses.
- `ex-circle-covering-towers-follow-divisibility`: restored F2's exact hypothesis and proved the source cover $E_m$ path-connected before computing the morphism's sheet number.
- `ex-regular-and-nonregular-three-sheeted-wedge-coverings`: restricted F10 to what its sources state, proved the arbitrarily small wedge neighbourhood path-connected directly from quotient-arc coordinates, restored the F6/F7 hypotheses, and proved both realized connected covers path-connected before applying regularity and sheet count.

No Statement, title, page prose, page frontmatter, status, or judge row changed. The repairs changed five item files. Their dependency changes were propagated through `research/frontier-16-batch-6.pages.json`, `research/plan-spec.json`, and `research/frontier-16-splice-6.json`; their citations, step maps, boundaries, and current risk reviews were regenerated in the owning batch contract and re-merged into `research/frontier-16-proof-contracts.json`. The impact receipt remains 324 changed interfaces and 261 reviewed consumers, with no new pending disposition, and now names the closing `after-step8-alpha` snapshot.

## Exact rejudge set

The five newly repaired ids extend the prior 70-item set to exactly 75 items. No unedited page-mate is included:

```text
cex-continuity-from-above-without-finite-first-measure
cex-convex-function-with-empty-subdifferential-at-a-boundary-point
cex-generating-family-without-pi-system
cex-linear-bijection-need-not-preserve-jordan-content
cex-uniqueness-does-not-require-local-lipschitz-continuity
cor-connected-coverings-of-circle-classified-by-nonnegative-integers
cor-every-connected-covering-of-circle-is-regular
cor-finite-maximal-time-forces-escape-from-every-compact-set
cor-holomorphic-mean-value-property
cor-indefinite-henstock-kurzweil-integral-is-a-primitive
cor-lipschitz-ode-uniqueness-and-stability-estimate
cor-x-sine-of-one-over-x-is-not-differentiable-at-zero
def-base-and-height-for-plane-figures
def-ck-euclidean-maps-and-diffeomorphisms
def-completion-of-a-measure-space
def-finite-sigma-finite-and-semifinite-measures
def-gauge-and-fine-tagged-partition
def-henstock-kurzweil-integral-on-a-noncompact-interval
def-locally-lipschitz-in-the-state-variable
def-modulus-of-continuity-and-osgood-condition
def-nonnegative-extended-series
def-picard-operator-and-picard-iterates
def-semifinite-part-of-a-measure
def-simple-polygonal-region-and-triangulation
def-wedge-of-pointed-spaces
ex-circle-covering-towers-follow-divisibility
ex-completion-of-borel-dirac-measure
ex-counting-measure-and-sigma-finiteness
ex-dyadic-probability-measure-on-naturals
ex-euclidean-norm-and-squared-norm-are-convex
ex-irregular-pentagon-area-by-triangulation-and-shoelace
ex-polar-coordinates-as-a-local-diffeomorphism
ex-quadratic-ode-finite-time-blowup
ex-regular-and-nonregular-three-sheeted-wedge-coverings
ex-sine-over-x-has-a-noncompact-henstock-kurzweil-integral
ex-two-equation-implicit-system
ex-unbounded-derivative-evaluated-by-henstock-kurzweil
fs-continuity-from-above-without-finiteness
fs-countable-additivity-without-disjointness
fs-invertible-derivative-everywhere-gives-a-global-inverse
lem-cauchy-estimates-on-concentric-subdiscs
lem-convex-set-and-closure-have-same-interior-and-boundary
lem-deck-transformations-correspond-to-normalizer-cosets
lem-equicontinuous-bounded-rn-valued-curves-have-a-uniformly-convergent-subsequence
lem-euler-polygonal-approximations-are-uniformly-bounded-and-equicontinuous
lem-finite-sine-harmonic-sums
lem-gaussian-integral-is-finite-and-positive
lem-plane-gaussian-integral-in-polar-coordinates
lem-weierstrass-low-frequency-difference-quotient-bound
prop-covering-morphism-subgroup-criterion
prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation
prop-picard-iteration-converges-with-explicit-error-bounds
prop-pointwise-supremum-preserves-convexity
thm-absolute-improper-multiple-integral-by-exhaustion
thm-ck-euclidean-maps-closed-under-algebra-and-composition
thm-classical-weierstrass-function-nowhere-differentiable
thm-classification-of-connected-covering-spaces
thm-comparison-test-for-improper-multiple-integrals
thm-comparison-tests-for-noncompact-henstock-kurzweil-integrals
thm-completion-of-a-measure-space
thm-finite-inclusion-exclusion-for-measures
thm-first-order-linear-ode-integrating-factor
thm-fundamental-group-of-a-product
thm-henstock-kurzweil-integrability-on-subintervals-and-additivity
thm-hessian-characterises-convexity
thm-measures-on-countable-discrete-spaces-are-weighted-dirac-sums
thm-nonnegative-improper-multiple-integral-by-exhaustion
thm-peano-local-existence-for-continuous-odes
thm-proper-local-diffeomorphisms-have-finite-diffeomorphic-sheets
thm-seifert-van-kampen
thm-semifinite-and-zero-infinity-decomposition
thm-shoelace-formula-for-simple-polygons
thm-simple-polygon-admits-a-triangulation
thm-strict-separation-of-a-point-from-a-closed-convex-set
thm-supporting-hyperplane-at-a-boundary-point-of-a-convex-set
```

## Verification

- Exact rejection join: 685 judge rows, 237 adjudication rows, zero duplicate adjudication keys, zero missing valid rejection rows.
- Step-8 guard against `pre-step8`: 75 changed, 75 licensed, zero creations, zero deletions, zero errors. The same result holds against the refreshed `after-step8-alpha` closing snapshot.
- Judge closure with pending rejudge allowed: scope 324; 249 covered by byte-identical current item text; `needs_rejudge` exactly 75; `unadjudicated: []`; `open_fatal: []`. `closed` remains false only because the engine still owes those 75 paired rejudges.
- The ordinary `level-coverage --judge-only --verify-current-context` command was run. In this local Codex sandbox its 324 `judge.mts --context-hash` subprocesses returned non-JSON, the same environment limitation recorded by the prior lead, and it conservatively wrote 324 pending ids. I therefore recomputed the closure through the gate's byte-identical-item clause using `itemHashJudge`, the selected-lane verdict rows, exact adjudication keys, and current guard hashes, and restored the machine receipt to the exact 249/75 result. The engine's normal stage process must re-run the standard probe before dispatching `8-rejudge`.
- Targeted precheck: five repaired items passed; reflow changed none.
- Proof controls: strict contract 271/271 with zero errors and the two inherited shotgun-bracket warnings; finite smoke one applicable check passed; risk report zero errors; boundary audit no template or contradicted disposition; citation fidelity no missing quote, with two unrelated inherited advisory candidates.
- Repository controls: depcheck, fwdcheck, extcheck, rendercheck, prosecheck, depsource, pathcheck, manifest integrity, splice verification, content policy, validate-plan, impact audit, and `git diff --check` have zero hard errors. Pathcheck retains its expected draft-unplaced warnings.
- Defect ledger: 250 `frontier-16` rows checked, zero errors; generated view refreshed.

No judge or rejudge was run, and nothing was published, committed, or pushed.
