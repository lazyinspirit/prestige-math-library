# Batch 4 Step 3a adjudication

Run: `physics-non-fluid-129-2026-10-21-r2`; group: `batch-4`; scope: batch 4 only.

Reviewed the dispatch, ordered task, workspace rules, scope, reader report/findings, refuter JSON and pre/post snapshots. Obligations: `refuter:4:1`, `refuter:4:2`, and `touched:4:ex-emx-impedance-sign-check`.

## Level 0 checkpoint

`def-emx-finite-energy-boundary-model`: complete Definition and twelve direct supplier interfaces checked. Face measures are finite Borel pushforwards, affine chart changes have absolute Jacobian one, and the product theorem applies to finite boundary measure and sigma-finite time measure. Static positive coefficient bounds make energy finite and nonnegative. PEC uses exactly graph closure; impedance explicitly assumes a Green-compatible L2 pair, without claiming a general trace or solution existence. Spatial variation is adopted locally. Countable Choice, SI units, zero fields, Y=0, excluded degeneracy and open time domain are explicit. Complete risk review recorded in the owning contract. No defect found.

Next: finish the surface-divergence finding, then the C1 representation lemma and its risk review before higher-level consumers.

## Surface-divergence findings and level 1 representation checkpoint

`refuter:4:1` and `refuter:4:2`: **false_positive**. The complete eight-page [Chen note](https://www.math.uci.edu/~chenlong/226/Maxwellweakform.pdf) was downloaded successfully with curl after web open returned HTTP 502. Section 3.2 starts on PDF page 4 and continues onto page 5. The paragraph immediately following equation (9) explicitly introduces intrinsic surface curl/divergence using tangent-plane metrics, followed by their trace relationships. Both current locators correctly name section 3.2, PDF page 5. No citation repair is warranted. Closed false-positive ledger dispositions preserve the original findings and their fatal severity without asserting an actual defect.

`def-emx-surface-divergence`: the tangent gradient is uniquely determined by the positive Euclidean pairing on the tangent plane; compactness bounds it and L1(K) makes the weak pairing finite. Empty S and zero K cause no failure. The definition does not promise a continuous density.

`lem-emx-surface-divergence-c1-representation`: all four steps and ten direct supplier statements checked. Regular C2 charts give positive C1 area density; C1 components give the continuous coordinate expression. Compact chart supports justify zero extension, rectangular C1 integration by parts and L1 Fubini. Finite nonnegative ambient cutoffs give a positive denominator near S. The partition-gradient terms sum to zero. Local tests identify the global density with each local formula; continuous-density localization gives uniqueness. The empty surface and zero field are valid. Countable Choice is inherited from the surface measure, with no stronger choice use. Complete risk review recorded; no content edit.

Next: weak-energy theorem, rough-field counterexample, sheet continuity, then touched impedance example.

## Remaining level 1 risk reviews

`pthm-emx-weak-poynting-uniqueness`: all six steps and five direct suppliers checked. The norm difference quotient justifies the symmetric quadratic derivative. Cauchy–Schwarz controls every limit. PEC approximation spends only Countable Choice, with both field and curl converging in L2. For impedance, Green compatibility is an explicit admissibility premise; tangency gives nonnegative outward power and L2 boundary data make it L1 in time. Integration is on compact subintervals of the open I. Coercivity proves precisely the written homogeneous zero-initial-data forward conclusion. Step 5.1's difference language must be read for an admissible homogeneous field: the abstract single-pair Green premise alone does not prove closure under subtracting arbitrary solution/boundary pairs. No stronger two-solution assertion is used to establish the stated zero-data conclusion, which follows directly by applying step 4.1 to the given homogeneous field. Zero fields, Y=0 and t=t0 are covered. Complete risk review recorded.

Source reading: Chen sections 1–3.2, PDF pp.1–5, and Beisert section 8.2, printed pp.8.1–8.2, equations (8.3)–(8.9). The current direct Beisert download places these on PDF pp.87–88, one page later than the indexed web copy/existing PDF locator; the printed section and equation locators recover the exact source. These provide smooth-field context; the weak theorem is proved locally.

`cex-emx-rough-field-energy-limit`: all three steps and seven direct suppliers checked. Coulomb solution part (d) gives local L1 regularity and exact distributional div/curl. The constant worldline is proper on I; zero B and J complete the adopted Maxwell identities. Interior shells give q^2/(8 pi epsilon0)(1/delta-2/R), unbounded as delta tends to zero for nonzero q. Thus local L1 energy and local L2 field membership fail, although the distributional equations hold. q=0 is excluded; delta=0 is never substituted in an ordinary shell integral. There is no mass, self-force, empirical or renormalization inference. Complete risk review recorded.

Next: level 2 sheet continuity and touched impedance example.

## Level 2 sheet continuity checkpoint

`pthm-emx-sheet-charge-continuity`: all nine steps, 22 direct supplier statements, and the complete published stationary-jump proof checked. The published supplier explicitly fixes its sheet densities stationary in time. The local theorem honestly reuses its proof argument rather than claiming its Statement covers time-dependent densities. That proof's spatial jumps and coefficient extraction do not time-differentiate the densities. The local proof separately establishes the regular time derivative using fixed-side indicators, joint one-sided C1 extensions, compact-test Fubini and integration by parts. Distributional derivative commutation then gives source compatibility. The surface divergence density is jointly continuous by its chart formula, and time bumps followed by surface localization give pointwise balance. The normal-current jump sign is plus for n from minus to plus. Empty and zero sheets cause no exception; moving and edged sheets remain excluded. Vacuum substitution retains the adopted postulate and epsilon0=(mu0 c^2)^-1. Complete risk review recorded.

The retrieved Beisert equations (5.20)–(5.21) are on printed p.5.6 / PDF p.66, immediately after the section starts on printed p.5.5 / PDF p.65. Existing locators identify the section start; equation numbers recover the exact continuation. This pagination precision does not affect a proof premise. No published supplier defect requiring repair was found.

Next: complete the impedance example's reader-delta/diagram review and scoped validation.

## Touched impedance example

`touched:4:ex-emx-impedance-sign-check`: **accepted_repair**, `repair_confidence: 1`. The sole item delta is the diagram caption: replacing the new sign-case qualification with its original caption in memory reproduces the exact frozen pre-reader SHA256 `9f763152eb44bf2332def352402d129caa3c614f0181710c6a99364fdbfc912e`. Current raw SHA256 is the exact frozen post-reader `cac22c2b6b673e62256a1330b54cb23ce2496f4b939d571c11dec4c71e256442`. This is a verified preimage reconstruction, not a claim to have recovered absent archive bytes. The older Step-2 archive has a different hash and was not substituted for the Step-3 preimage.

All three verification steps and four actual suppliers checked. The right-handed tangent basis gives Y E0^2 outward power; the negative wall law reverses it. The conditional reverse-law energy identity is derived from the PDE and Green compatibility directly, with all solution hypotheses retained. The TikZ arrows, labels, axes and outward-normal symbol match the explicitly positive representative case; negative amplitude reverses both arrows and the two zero cases are explicit. The diagram illustrates the result; the proof is independent of it. No additional diagram is needed in the remaining six carriers. Complete risk review recorded.

## Scope and consumers

No item or page content was changed by Alpha. All seven current raw item hashes equal the immutable post-reader snapshot. The reader changed only a diagram caption and associated finite-check contract, so no Statement, Definition, physical scope or empirical qualification changed. No direct or indirect consumer interface repair is triggered. Batch 4's cross-batch input remains the correct empty array: its logical suppliers are same-batch or pre-existing published/imported context. No new pair, page, prerequisite, withdrawal, publication or judge record was created. Imported mathematics and published carriers remain read-only. All physical conclusions are conditional model deductions; this batch contains no reported experiment or statistical inference.

## Checks and handoff

Completed local checks (all final executions exit 0):

- `node tools/physics-support/proof-contract.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-4.proof-contracts.json --strict`: 7/7 items, 0 errors, 0 warnings.
- `node tools/tsx-run.mjs tools/physics-support/precheck.mts` with the seven explicit batch item paths: 5 proof-bearing items checked, 0 failures. A prior direct Node invocation could not load `.mts`; the supported tsx launcher above resolved that mechanical invocation error.
- `node tools/physics-support/rendercheck.mjs` with seven explicit item paths and the two assigned pages: 9 files, valid YAML and KaTeX.
- `node tools/physics-support/risk-report.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-4.proof-contracts.json` before risk authoring, then with `--require-reviewed`: 0 errors; complete reviews for all six CRITICAL items.
- Final `node tools/physics-support/proof-layout.mjs` with all five proof-bearing batch items, including the reader-touched example: 5 items, 25 steps, 0 defects.
- Exact obligation inventory: three decisions, one per owed obligation, each with a closed ledger row. All seven current item raw hashes match the frozen post-reader snapshot.

There is no substantial unmet prerequisite or owner blocker for the routed obligations. Source-reading limits: inspected the complete Chen sections 1–3.2 and the relevant Beisert interface/energy sections, current direct supplier statements, and proof-critical supplier arguments as identified above; no corpus-wide transitive audit is claimed. Chen retrieved PDF raw SHA256: `150764780cbbfce7095bdb29cc1dc3c6ffcd4f7cf921deda6ba9df8fb331050a`. The printed section/equation locators control the Beisert pagination variation described above.

Engine owns decision stamping and the gate battery; no judge cycle, stamping, self-certification, dispatch, publication or empirical validation was performed.
