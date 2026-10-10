# Reader 11 — batch 11

Run: `physics-em-sr-40-2026-10-08`. Independent Step 5a reader of current authored draft carriers. This report is a reader assessment, not a judge stamp or publication receipt.

## Opened inventory and coverage

Both assigned pages were opened completely: `library/special-relativity/sr-newtonian-bridge.md` (A; editable prose) and `library/special-relativity/sr-newtonian-bridge-examples.md` (B; read-only prose). Every assigned item's metadata, title, body, facts, argument, remarks and current batch-contract entry were examined:

- `items/def-sr-newtonian-comparison-quantities.md`
- `items/lem-sr-uniform-low-speed-taylor-remainder.md`
- `items/lem-sr-uniform-low-speed-expansion-of-observer-quantities.md`
- `items/def-sr-galilean-limiting-charts.md`
- `items/lem-sr-uniform-galilean-limit-of-boost-charts.md`
- `items/pthm-sr-newtonian-p-e-correspondence.md`
- `items/rem-sr-newtonian-bridge-limits-and-failures.md`
- `items/ex-sr-low-speed-expansion-at-beta-one-fifth.md`
- `items/ex-sr-uniform-galilean-chart-bound-worked.md`
- `items/cex-sr-uniform-low-speed-remainder-fails-near-light-speed.md`

The following in-run suppliers were opened. Definitions and postulates were checked at their relevant clauses; the complete arguments of the observer-decomposition theorem, observer-identity lemma, four-momentum lemma, boost-is-proper lemma and inertial-transition lemma were read. Other supplier statements/definitions were used with their explicit hypotheses and draft proof status, without claiming a fresh whole-item audit:

- `items/def-lorentz-form-and-inertia.md`
- `items/def-causal-classification-of-lorentz-vectors.md`
- `items/def-time-orientation-and-future-causal-sets.md`
- `items/def-sr-affine-minkowski-model.md`
- `items/def-inertial-frame-and-inertial-chart.md`
- `items/def-spatial-euclidean-structure-of-an-inertial-frame.md`
- `items/def-sr-si-units-and-coordinate-conventions.md`
- `items/lem-lorentz-form-has-orthonormal-basis.md`
- `items/lem-timelike-cone-has-two-convex-components.md`
- `items/def-sr-regular-causal-curve-and-worldline.md`
- `items/def-sr-proper-time.md`
- `items/def-sr-four-velocity-and-four-acceleration.md`
- `items/lem-sr-proper-time-parametrization.md`
- `items/thm-sr-proper-time-and-observer-decomposition.md`
- `items/def-sr-observed-energy-momentum-and-kinetic-energy.md`
- `items/lem-sr-energy-momentum-observer-identities.md`
- `items/def-lorentz-boost.md`
- `items/lem-sr-four-momentum-in-inertial-frame.md`
- `items/post-sr-massive-particle-dynamics.md`
- `items/post-sr-ideal-massless-particle-momentum.md`
- `items/lem-future-oriented-inertial-frames-exist.md`
- `items/lem-boost-is-proper-orthochronous-with-inverse.md`
- `items/thm-sr-tensor-and-current-transformation.md`
- `items/lem-inertial-chart-transitions-are-affine-lorentz.md`
- `items/def-lorentz-map-and-lorentz-group.md`
- `items/lem-lorentz-map-preserves-metric-and-causal-structure.md`

The following imported mathematical supplier statements, definitions and relevant facts were opened. Their local bytes match `research/math-imports.json` (30 suppliers); neither imports nor the original mathematics workspace were edited or refreshed:

- `items/cor-taylor-remainder-bound.md`
- `items/cor-taylor-lagrange-and-cauchy-remainders.md`
- `items/thm-taylor-schlomilch-roche-remainder.md`
- `items/cor-triangle-inequality-for-inner-product-norm.md`
- `items/def-abs-value.md`
- `items/def-integer-power.md`
- `items/def-interval.md`
- `items/def-linear-map.md`
- `items/def-rational-power.md`
- `items/def-vector-valued-derivative-and-integral.md`
- `items/lem-derivative-of-a-power.md`
- `items/lem-of-abs-value.md`
- `items/lem-of-inverse-positive.md`
- `items/lem-of-triangle-inequality.md`
- `items/lem-rational-power-laws.md`
- `items/lem-rational-power-monotone.md`
- `items/thm-algebra-of-derivatives.md`
- `items/thm-cauchy-schwarz-finite.md`
- `items/thm-chain-rule.md`
- `items/thm-of-archimedean.md`
- `items/thm-of-square-roots.md`
- `items/thm-real-power-agrees-with-rational-exponent.md`
- `items/thm-real-power-continuity-and-derivatives.md`
- `items/def-ordered-field.md`
- `items/thm-path-connected-implies-connected.md`
- `items/def-connected-component-and-quasicomponent.md`
- `items/thm-cauchy-schwarz-and-the-euclidean-norm.md`
- `items/def-change-of-basis-matrix.md`
- `items/thm-unique-coordinates-with-respect-to-an-ordered-basis.md`
- `items/def-vector-space.md`

Mandatory instructions were read, recovering truncated output in bounded sections. Current batch manifests, the batch proof contracts, import registry and relevant current owner direction were checked. The owned arguments were checked along their supplier-to-consumer chains; some primitive supplier clauses were retrieved on demand after an initial carrier retrieval. No rendered evidence bundle appeared in the scoped search, so current carriers were the evidence entry point. The report does not claim re-auditing the entire recursive published supplier library or inspecting unrelated pages.

## Local repairs and evidence

All ten assigned items changed; the changes below are the complete substantive edit inventory. Nine items also received the common source-locator corrections described afterward. No item was withdrawn, narrowed to avoid a proof, judged, stamped or published. No old `verification.judge` record existed in the owned pre-edit carriers; none was added.

| Carrier | Defect repaired and exact evidence |
|---|---|
| `def-sr-newtonian-comparison-quantities` | Definition (a) cited the definition of a linear map for scalar multiplication. Replaced that citation/dependency with `def-vector-space`, whose Definition supplies the map `F x V -> V`. The formulas, domains and physical scope are unchanged. |
| `lem-sr-uniform-low-speed-taylor-remainder` | Facts [L6] silently used scalar triangle inequality, absent from the cited absolute-value lemma. Added `lem-of-triangle-inequality` and its contract citation. The original remark inferred impossibility of any global bound merely from divergence of the chosen upper-bound constant; that inference is insufficient. Added Proof 8.1: at `z_N=1-N^{-2}`, the exact remainder is `N-1-z_N/2>N-3/2`; choose `N>max(2,B+3/2)` by `thm-of-archimedean` to refute `|f(z)-1-z/2|<=B z^2` on `[0,1)`. Existing Taylor statements and constants are preserved. |
| `def-sr-galilean-limiting-charts` | The identification at `C=c` asserted an inertial chart using a boost definition that expressly does not prove its Lorentz property. Added `lem-boost-is-proper-orthochronous-with-inverse` (i),(iii), and constructed the frame `e'_a=B^{-1}e_a`; its coordinate map is `E^{-1}B(p-o)`. This establishes orthonormality, future orientation and positive orientation as well as the coordinate substitution. No variation of the adopted `c` is inferred. |
| `lem-sr-uniform-galilean-limit-of-boost-charts` | Title and remarks suggested failure on arbitrary unbounded regions, whereas clause (d) proves failure on the whole chart domain. Corrected that language and exhibited the unbounded subset `{(0,x):delta(v,x)=0}` where both errors vanish. The full whole-domain failure, bounded-region rate and epsilon threshold remain. Updated the affected contract and the local dependency levels of this lemma and its definition/example after adding the boost supplier. |
| `lem-sr-uniform-low-speed-expansion-of-observer-quantities` | Fact [L6] and Proof 2.3 confused scalar absolute value with a vector norm. Explicitly cited the rest-space norm of the observer theorem (c) for homogeneity, and used the Taylor supplier (b)'s already established `|f(z)-1|` bound. All energy/momentum remainder formulas, the rest case and speed interval are retained. |
| `pthm-sr-newtonian-p-e-correspondence` | Proof 1.2 ambiguously listed kilogram among the momentum/energy units; 2.1 called the list including `m(P)=m` “rest energy.” Assigned units to each quantity explicitly and stated rest energy as `mc^2`, distinguishing it from invariant mass. The physical Statement and scope did not change. Refreshed two contract quotations after the SI supplier was independently corrected during this reader turn. |
| `rem-sr-newtonian-bridge-limits-and-failures` | Clause (i) named a state with prescribed gamma without an explicit construction or justification of future direction. Added `w=c sqrt(1-gamma^{-2})e`, `U=c gamma(n+w/c)`, and the timelike segment from `n` to `n+w/c`, invoking the time-orientation definition and path-component theorem (3). Clause (iii)'s assertion of failure on all unbounded regions was false; replaced it with the precise whole-domain failure. Physical scope and all valid unboundedness conclusions remain. |
| `ex-sr-low-speed-expansion-at-beta-one-fifth` | Example (c) used an exact equality with a rounded intermediate decimal; removed that equality. Replaced undefined “sharp to about 7%” wording by the explicit fractional overestimate `K(z0)z^2/R(z)-1`, approximately `0.0704665951`. Verification 2.1 now names that same ratio. All previous exact formulas and bound values remain. |
| `ex-sr-uniform-galilean-chart-bound-worked` | Example treated the vector `x'` as a scalar, mixed rounded decimals into allegedly exact inequalities, called computations “observed,” and claimed ten-place rounding even for one-place factors. Defined `x'=g_C e1`, exact deviations/bounds separately, and tabulated their rounded evaluations. Stated the rounding exceptions and used “computed.” Replaced Fact [L5]'s unrelated rational-exponent citation with `def-ordered-field` and explicit positive-cone arithmetic. Verification 1.1 now establishes `t'<1` for every `C>1` by separating the numerator-sign cases. The exact `z1=1/900` and `C_epsilon=30` argument is preserved. |
| `cex-sr-uniform-low-speed-remainder-fails-near-light-speed` | Proof 2.1 asserted the unstated implication from negative pairing with `n` to future direction. Replaced it by the explicit continuous timelike path `n+s w_N/c`, its norm computation and the path-component theorem (3); declared the suppliers. In 4.1 replaced an unproved monotonicity assertion by the direct bound `N-3/2+1/(2N^2)>N-3/2>=1/2`. Corrected malformed power wording in [L4]. The same fixed `n,e`, exact states, absolute/relative divergences and Archimedean witness remain. |

A-page prose now says the chart limit fails on the whole chart domain; B-page prose was not edited. The B summary makes the same correct bounded-region/example and speed-domain claims after the item repairs. Physical assumptions, predictions and numerical computations remain distinct from observations: the two numerical examples are model calculations; no measurements, sampling model, precision or empirical support were invented.

Affected entries of `research/physics-em-sr-40-2026-10-08-batch-11.proof-contracts.json` were updated for the new supplier uses, repaired deductions, boundary evidence and current quotations. The strict checker validates all ten entries. The merged run-wide contract artifact was not edited by this batch reader.

## Source fidelity

- [Lebl, Basic Analysis I](https://www.jirka.org/ra/realanal.pdf): read Section 4.3, Theorem 4.3.2 and its complete proof, printed pp. 172–173 (PDF pages 172–173). It assumes continuous derivatives through order n on the closed interval and an existing derivative of order n+1 on its interior; distinct expansion/evaluation points yield the Lagrange remainder. Corrected the Taylor lemma's erroneous Section 5.4 locator. The local explicit remainder constant is derived here, not quoted from the textbook.
- [MIT OCW, Lecture 17](https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec17.pdf): read the Taylor statement and remainder discussion on pp. 1–2; they agree with the n=1 use. The item retains its original course lecture-notes URL, whose index links this PDF. No full-course reading is claimed.
- [Crowell, Special Relativity](https://archive.org/download/sr_20220102/sr.pdf): the browser endpoint initially failed, but the complete 246-page PDF was retrieved with curl and read using PyMuPDF. Read Section 4.2 pp. 82–86, Example 8 p. 91, Section 4.3.4 p. 96 and problems 11–12 p. 116. Section 4.3.4 is on p. 96, not p. 95, and the expansion problems are on p. 116, not p. 117. Corrected these locators in the nine owned carriers citing Crowell. The source supports the energy/momentum formulas and Newtonian-limit motivation; the uniform estimates and explicit thresholds are local arguments. Source experiment narratives are not adopted as empirical premises of this batch.
- [Carroll, gr-qc/9712019v1](https://arxiv.org/pdf/gr-qc/9712019): read the proper-time/momentum discussion at printed pp. 26–27, especially equations (1.98)–(1.101), and the Newtonian-limit assumptions/equations at printed pp. 105–106. Removed nonexistent subsection labels “1.5”/“4.1” from the nine owned source entries, keeping exact chapter, page and equation locators. The c=1 source is restored to the local x0=ct convention.
- [Tong, General Relativity](https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf): read the gravity-action expansion around equations (1.21)–(1.22), printed p. 17, with the following explanation on p. 18. It motivates a slow-motion expansion and does not establish the local Galilean uniform threshold. No wider source-section audit is claimed.

## Uneditable findings and concurrent supplier corrections

These subjects belong to other exact current-run batches. They were not edited here. The findings JSON retains the observed historical defects, as required when another writer corrects a supplier during the reader turn.

1. `lem-sr-energy-momentum-observer-identities` (batch 8), Facts & Assumptions [F9]: the observed text said a vector is causal exactly when `eta(v,v)<=0`, thus including zero, contrary to the opened causal-classification definition. This is a false fact/citation and needs the explicit nonzero qualification. Assigned direct consumer: `lem-sr-uniform-low-speed-expansion-of-observer-quantities`. Original observed raw SHA-256 `7bbad0f33e43aabcc0e526eb0b56952809a692bdef9036b78fe64305aba9461c` exactly matches batch 8's immutable pre-reader fingerprint. That match binds bytes actually read, rather than serving as an unobserved baseline. At handoff another writer had corrected [F9] to include `v!=0`.
2. Same supplier, Proof 2.2: the observed inference from `eta(P,P)<=0` and `eta(q,q)=eta(P,P)+E^2/c^2` to `eta(q,q)>=0` is invalid; a nonpositive summand alone does not establish the sign of the sum. The claim is true and the opened rest-space positivity in [F2] closes the short proof gap immediately. Classified nonfatal. Same consumer and observed pre hash as above. At handoff another writer had replaced the inference by positive definiteness on `n-perp`.
3. `lem-inertial-chart-transitions-are-affine-lorentz` (batch 2), Proof 5.1, the math span `c:=o\'`: invalid LaTeX prime syntax caused a real KaTeX parse failure. The intended origin is the already defined primed event `o'`. Assigned consumer: `pthm-sr-newtonian-p-e-correspondence`, reached through `lem-sr-four-momentum-in-inertial-frame -> thm-sr-tensor-and-current-transformation -> lem-inertial-chart-transitions-are-affine-lorentz`. The defective source and its statement/proof were opened after the renderer diagnostic; its observed raw hash was `497ee74665dcbc5f128624cc1ee1cc85abc12be5ef815b6a75464b8b696e775b`. This differed from batch 2's pre-reader fingerprint. Another writer subsequently replaced the span with `c:=o'`; therefore neither pre nor current can bind the originally observed bytes, and `observed_source` is null. The historical defect is retained with this explicit byte-binding limitation. It was a fatal rendering defect, not a refutation of the algebraic theorem.

A mistakenly issued renderer `--help` invocation ignored that flag and scanned the corpus. Its incidental unrelated diagnostics are not a scoped audit or additional coverage. Only the relevant in-run chart-transition target was opened and assessed from that output. Explicit-path render checks were subsequently run for the assigned frontier and the two corrected suppliers; both pass.

## Verification and page verdicts

- Reflow: all ten changed items, exit 0; final output unchanged. After the last scalar-multiplication citation edit, its reflow was repeated, exit 0.
- Precheck: all ten changed paths, seven proof-bearing items checked, zero failures; three nonproof carriers have no numbered proof obligation. The last edited definition's precheck also exited 0.
- Final batched `node tools/physics-support/proof-layout.mjs items/<id>.md ...`: all ten changed paths, **58 steps, zero defects**, exit 0, after final item edits/formatting. Each numbered step is separated, has valid trailing tags, and the final step has tagged QED.
- Strict batch proof-contract check: **10/10 items, zero errors and warnings**, exit 0.
- Explicit-path rendercheck: **12 assigned files, no errors**, exit 0. Focused check of the two corrected external suppliers: **2 files, no errors**, exit 0.
- Arithmetic: **30 ten-place roundings** checked against exact rational intervals, with square roots bracketed using integer square roots at denominator 10^60. All displayed rounded example values are covered, including the two ratios computed before rounding. Strict remainder/bound comparisons and both C=30 whole-region bounds below 1/100 were verified. These are computational checks of the specified formulas, not proof stamps or empirical data.
- Selected dependency closure: all targets resolve, no logical cycle, no mathematical item depends on physical material; every owned dependency has a role. All 30 opened mathematical imports retain pinned local bytes.

**A-page reader verdict:** locally repaired and sound within the stated fixed-c massive-particle/auxiliary-chart scopes. The entire correspondence, exact inversion, zero-speed case and bounded-domain uniformity remain. The historical external defects were corrected by other writers; no current local blocker was identified.

**B-page reader verdict:** its unchanged prose and three repaired examples agree with the A-page results. Exact radical values, rounding conventions, C=30 tolerance witness and the future timelike high-gamma family check out. No current local blocker was identified.

No unresolved mathematical uncertainty or proposed withdrawal remains in the owned batch. Historical uneditable findings are routed for the Step 5b lead to reconcile against the producers' repairs. This review does not certify unrelated suppliers, source books in full, empirical applicability, or publication readiness.
