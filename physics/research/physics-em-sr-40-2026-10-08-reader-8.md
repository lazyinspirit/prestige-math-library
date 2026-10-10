# Reader 8 — batch 8

Run `physics-em-sr-40-2026-10-08`, independent Step 5a reader. All content remains draft. This is a reader report, not judgment, publication approval or empirical certification.

## Opened inventory and review

Read the mandatory parent/workspace instructions, README, schema, workflow, content model (including statistical evidence), reader brief, exact batch manifest and owner direction. Opened both assigned pages in `library/special-relativity/`: `sr-energy-momentum` and `sr-energy-momentum-examples`. Opened all assigned carriers and reviewed their titles, statements/definitions, facts, proof/verification/counterexample steps and nonproof boundaries. Reviewed the batch proof contract, using its entries as evidence rather than adopting its verdicts. Checked exact contract citation excerpts against current suppliers: no mismatches remain after the affected excerpts were updated.

Assigned items (each path is `items/<id>.md`):

- `def-sr-observed-energy-momentum-and-kinetic-energy`
- `lem-sr-energy-momentum-observer-identities`
- `lem-sr-four-momentum-in-inertial-frame`
- `def-sr-proper-time-derivative-and-four-force`
- `lem-sr-four-force-and-work-energy-identities`
- `def-sr-total-four-momentum-and-invariant-mass`
- `lem-sr-finite-future-causal-sums`
- `lem-sr-center-of-momentum-frame`
- `def-sr-collision-datum-and-conservation`
- `lem-sr-collision-necessary-conditions`
- `post-sr-massive-particle-dynamics`
- `post-sr-ideal-massless-particle-momentum`
- `pthm-sr-momentum-and-four-force`
- `ex-sr-four-momentum-at-beta-three-fifths`
- `ex-sr-four-momentum-boost-to-rest`
- `ex-sr-equal-mass-head-on-collision-mass`
- `ex-sr-perfectly-inelastic-collision-rest-mass`
- `ex-sr-null-pair-invariant-mass`
- `ex-sr-stationary-target-threshold`
- `cex-sr-massless-momentum-not-mu-at-zero-mass`
- `cex-sr-kinetic-energy-is-observer-dependent`

Additional suppliers opened below. Some were read in full; for larger external suppliers only the relevant definition, statement and/or proof portions were read. Local geometric suppliers were followed into their relevant arguments; the imported foundational closure was not exhaustively audited.

- `def-affine-space-and-displacement`
- `def-lorentz-form-and-inertia`
- `def-causal-classification-of-lorentz-vectors`
- `def-time-orientation-and-future-causal-sets`
- `def-sr-affine-minkowski-model`
- `lem-lorentz-form-has-orthonormal-basis`
- `def-inertial-frame-and-inertial-chart`
- `lem-timelike-cone-has-two-convex-components`
- `lem-future-oriented-inertial-frames-exist`
- `def-spatial-euclidean-structure-of-an-inertial-frame`
- `def-lorentz-orthogonality-and-orthogonal-complement`
- `def-sr-regular-causal-curve-and-worldline`
- `def-sr-proper-time`
- `lem-sr-proper-time-parametrization`
- `def-sr-four-velocity-and-four-acceleration`
- `thm-sr-proper-time-and-observer-decomposition`
- `def-lorentz-map-and-lorentz-group`
- `def-lorentz-boost`
- `lem-boost-is-proper-orthochronous-with-inverse`
- `lem-inertial-chart-transitions-are-affine-lorentz`
- `thm-sr-tensor-and-current-transformation`
- `def-sr-si-units-and-coordinate-conventions`
- `def-oriented-minkowski-volume-form`
- `def-linear-map`
- `def-finite-sum-in-a-commutative-monoid`
- `thm-induction-principle`
- `def-rational-power`
- `lem-rational-power-laws`
- `thm-cauchy-schwarz-finite`
- `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`
- `def-vector-valued-derivative-and-integral`
- `thm-algebra-of-derivatives`
- `thm-chain-rule`
- `thm-real-power-continuity-and-derivatives`
- `thm-real-power-agrees-with-rational-exponent`
- `def-sine-and-cosine-by-power-series`
- `def-pi-via-first-positive-cosine-zero`
- `thm-sine-cosine-signs-monotonicity-and-ranges`
- `def-principal-inverse-sine-and-cosine`
- `def-euclidean-inner-product`
- `def-interval`
- `def-derivative`
- `lem-affine-minkowski-charts-form-a-smooth-atlas`
- `lem-lorentz-map-preserves-metric-and-causal-structure`
- `def-ck-tensor-field-on-minkowski-space`
- `lem-tangent-space-of-affine-minkowski-space-is-v`

The geometry fixes affine events, the (-+++) metric, future orientation, inertial frames, differentiable worldlines, proper time, normalized four-velocity and observer rest projection. The direct checks establish energy positivity, the mass shell, kinetic-energy rest criterion, passive boost formulas, constant/variable-mass derivative identities, future-cone sums and their equality cases, COM construction, side mass inequalities and thresholds. All eight worked items were checked explicitly, including gamma=5/4, the 5m/2 head-on mass, alternative outgoing decompositions, null-pair masses and E>=7mc²/2 when mu=m. No empirical premise is used by the assigned proofs. Mathematical items retain exclusively mathematical logical dependencies.

## Repairs and evidence

| Carrier / location | Confirmed defect and repair |
|---|---|
| `def-sr-observed-energy-momentum-and-kinetic-energy`, Definition (b),(d) | The claim that T requires independent mass data was false under P=mU with eta(U,U)=-c². Added the short calculation eta(P,P)=-m²c², hence m=m(P), and defined the resulting dependence on (P,n). |
| `lem-sr-energy-momentum-observer-identities`, F9 and step 2.2 | F9 omitted the nonzero condition for causal vectors; restored it. Step 2.2 incorrectly inferred nonnegativity from eta(P,P)<=0. Replaced that inference by positive definiteness of eta on n-perp, supplied by observer decomposition (c). |
| `lem-sr-four-momentum-in-inertial-frame`, Statement/Given (c), F7 and step 4.1 | Added the essential unit-direction hypothesis and beta=(v/c)s; recorded B(0)=I and retained its explicit proof branch. Distinguished the passive coordinate column from the intrinsic vector in the null-case proof. |
| `def-sr-total-four-momentum-and-invariant-mass`, Definition (c) | q was evaluated on arbitrary nonzero totals although its declared domain is the future closed cone. Used the existing projection formula h_e0 on all V and stated its agreement with q on future causal inputs, preserving the broader geometric definition. |
| `lem-sr-center-of-momentum-frame`, Statement (b); A-page summary | Unqualified uniqueness up to spatial rotations omitted the independently arbitrary origin. Specified fixed-origin uniqueness and retained origin freedom in the summary. |
| `lem-sr-finite-future-causal-sums`, step 2.2 | A single witness did not explicitly prove the stated general nonparallel-null implication. Added eta(P1,P2)<0 from the already proved equality characterization, then eta(P1+P2,P1+P2)<0, retaining the concrete witness. |
| `lem-sr-collision-necessary-conditions`, (d), F12 and steps 2.4–2.5 | The incoming list was not restricted to two legs although Q=P1+P2 was assumed. Added exactly two incoming null legs. Defined theta=arccos(s1 dot s2), cosine and pi through exact imported suppliers; supplied endpoint equivalences and tags rather than assuming undeclared trigonometry. The formulas and all angular cases are preserved. |
| `lem-sr-four-force-and-work-energy-identities`, (d), F8 | Explicitly defined F=dot P for variable positive mass by the general derivative construction, distinct from the constant-mass four-force naming clause. Added the exact real/rational-power agreement supplier for differentiation of gamma. |
| `post-sr-massive-particle-dynamics`, scope and (iii),(iv) | Its scope excluded massless legs while consumers used mixed and single-null collision balance. Explicitly adopted balance for complete on-shell massive and/or separately defined ideal massless leg lists. Defined H_c^+ and F:D->V, D subset A x H_c^+, along a given C2 massive worldline, with force units and no unstated off-worldline regularity or solution-existence assertion. No process is asserted. |
| `post-sr-ideal-massless-particle-momentum`, (i) | Removed the inaccurate attribution of the expression mU to the four-velocity definition; the normalized expression is explained directly. |
| `pthm-sr-momentum-and-four-force`, scope, (b),(c), step 1.6 | Distinguished the variable-mass mathematical identity from adopted constant-mass dynamics. Made the timelike/null system clauses separate conditional cases. Proved the single-null collision impossibility under its own incoming hypothesis and the explicitly applicable balance premise, rather than importing the massive-incoming setup. Explicitly handled an empty outgoing massive list: its mass sum is zero, and the same incoming invariant-mass identity yields the threshold by rearrangement. |
| `ex-sr-four-momentum-at-beta-three-fifths`, steps 2.1 and 4.1 | q is V-valued, not an R3 column. Replaced the mismatched equality by q=(3mc/4)e1 and separately stated its coordinates. Arithmetic is unchanged. |
| Source-reference descriptions in `def-sr-total-four-momentum-and-invariant-mass`, `def-sr-collision-datum-and-conservation`, `lem-sr-finite-future-causal-sums`, `post-sr-massive-particle-dynamics` | Carroll p.30 (1.113) discusses local stress-energy conservation conditional on matter equations, not a finite collision theorem. Corrected the reference descriptions and retained Crowell as finite-collision context. |

Updated all 13 changed-item contracts, their changed derivation/input records and relevant boundary/source evidence; updated exact consumer citation excerpts affected by local and concurrent upstream repairs. Existing physics-review verdict fields were preserved, not newly awarded. No judge records were present to remove. No withdrawal proposed. No B-page prose, another batch carrier, import, page manifest or plan was edited.

## Source evidence

- Carroll, [Lecture Notes](https://arxiv.org/pdf/gr-qc/9712019), printed pp.26–27, (1.97)–(1.102): proper time, normalized timelike velocity, massive momentum, frame energy and proper-time force. Printed p.30, (1.113) and surrounding qualification: local stress-energy conservation, with matter equations required. Read these relevant passages, not the full notes.
- Crowell, [Special Relativity](https://archive.org/download/sr_20220102/sr.pdf), retained `research/first-principles-2026-10-03/relativity/reader-taylor/source/crowell-sr.txt`: pp.88–91 (momentum, invariants and COM), pp.93–94 (single incoming photon obstruction), pp.96–97 (massive momentum and separate massless case), pp.103–106 (isolation, force and work). The retrieved original URL failed in this session; the retained extraction was read. No experiment values were adopted.
- Reall, [archived notes](https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf), retained `research/first-principles-2026-10-03/relativity/reader-gourgoulhon/sources/reall-part3-gr.txt`: section6.3 pp.63–64, (6.15)–(6.19), and section7.4 p.86 COM paragraph. The latter is linearized-gravity context, corroboration only; the flat finite-vector claims were checked locally. Browser retrieval failed; retained passages were used.
- BIPM, [metre definition](https://www.bipm.org/en/si-base-units/metre): fixed numerical SI c, distinct from uncertain unit realizations and physical applicability.

The imported trigonometric and real/rational-power suppliers are published pinned snapshots in `research/math-imports.json`; their relevant definitions/statements and arguments were opened. No imported bytes were changed.

## Consumer review

Within batch8, checked all direct and indirect consumers of the repaired definitions/claims against their stated hypotheses. In particular the worked null example already constructs the trivially conserving two-leg incoming datum, unit boost examples already use a unit coordinate direction, and the force/theorem consumers distinguish constant from variable mass. The mathematical interfaces retain the same normalized massive and future-causal domains and all sound promised formulas.

Outside batch8, opened the following current consumer statements and relevant uses, read-only:

- `lem-sr-uniform-low-speed-expansion-of-observer-quantities`
- `pthm-sr-newtonian-p-e-correspondence`
- `rem-sr-newtonian-bridge-limits-and-failures`
- `cex-sr-uniform-low-speed-remainder-fails-near-light-speed`
- `def-sr-experiment-interface-vocabulary`
- `post-em-lorentz-coupling`
- `pthm-em-electrostatic-work`
- `pthm-em-electric-dipole-torque`
- `pthm-em-relativistic-lorentz-force`
- `post-sr-matter-models-and-evolution`
- `pthm-sr-local-stress-energy-conservation`
- `pthm-sr-integrated-conservation-for-isolated-matter`
- `rem-sr-continuum-force-and-conservation-scope`

The low-speed consumers use m=m(P) and unchanged energy/momentum formulas; operational vocabulary uses the observer-identification clause. EM consumers stipulate positive constant mass and C2 worldlines in a prescribed C1 external tensor field, so the explicit force-domain formulation is compatible. Continuum consumers use massive-particle readings or timelike invariant mass, not the repaired null-pair list hypothesis. No further consumer edit was required by these interface repairs. This was a focused interface review, not whole-item certification of these outside consumers.

## Uneditable findings and concurrent source changes

Four defects were independently observed in earlier-batch suppliers, then corrected on disk concurrently. They remain in the JSON as historical uneditable findings as required by the dispatch; severity records the original defect. The original raw byte hashes were not retained. Consequently `observed_source` is null for each; corrected current source is never represented as the old defective snapshot.

- `lem-sr-proper-time-parametrization`, Proof, step 10.1, original equality x composed with rho = E composed with (y composed with rho). The observed proof identified an A-valued affine curve with a V-valued map and omitted the frame origin. The correct reconstruction is x composed with rho = o + E(y composed with rho); displacement difference quotients then give the claimed derivative. The source was corrected concurrently to this reconstruction. Exact original raw bytes were not retained, so observed_source is null; corrected current bytes are not asserted to be the observed defect. Consumer: `def-sr-proper-time-derivative-and-four-force`.
- `thm-sr-proper-time-and-observer-decomposition`, Proof, steps 1.2 and 2.1, basis choice and assertion n^0 > |n_s|. Step 1.2 originally fixed an eta-orthonormal basis with e0 timelike, without requiring e0 future. Step 2.1 inferred n^0>0 for a future unit n; in a basis with past e0, n=e0 negated has n^0=-1. Choosing e0 future, by negating it when needed, closes this short gap. The current source now explicitly makes that choice. Original raw bytes were not retained; this is historical evidence and observed_source is null. Consumer: `def-sr-observed-energy-momentum-and-kinetic-energy`.
- `lem-inertial-chart-transitions-are-affine-lorentz`, Statement (iii), Proof step 1.3 and final converse in step 5.1: L inverse applied to coordinate columns. The observed source defined L:V to V but wrote x_L(p)=L inverse(x(p)-x(c)), whose argument lies in R4. The coordinate operator must be the matrix M_L=E inverse composed with L composed with E, so the formula uses M_L inverse. The current source now supplies this distinction. No exact hash of the original observed bytes was retained; observed_source is null and no current corrected hash is presented as old evidence. Consumer: `lem-sr-four-momentum-in-inertial-frame`.
- `def-sr-si-units-and-coordinate-conventions`, Definition, clause 1 and final Status paragraph, original statements that the numerical SI value of c is empirical. The observed definition called the numerical value of c an empirical parameter and repeated that it is empirical in Status. BIPM defines the metre by fixing c exactly to 299792458 m/s: https://www.bipm.org/en/si-base-units/metre. Unit realization and model applicability still involve empirical uncertainty, but the SI numerical value does not. The current carrier has been corrected concurrently to the exact-unit convention. Severity describes the original false public claim; original raw bytes were not retained, so observed_source is null. Consumer: `post-sr-massive-particle-dynamics`.

Current targeted follow-up reading confirms the affine reconstruction, future-basis choice, conjugated coordinate operator and exact SI convention have been corrected. These historical findings do not assert that the old defect remains in the current source.

## Validation, page verdicts and blocker

For each of the 13 changed item paths, ran the prescribed `tsx-run.mjs tools/physics-support/reflow.mts` and `tsx-run.mjs tools/physics-support/precheck.mts`: all exit0; proofs and nonproof structures passed, definitions correctly produced zero proof checks. After the final item edit/formatter, ran one batched `node tools/physics-support/proof-layout.mjs <all 13 paths>`: **13 items,79 steps,0 defects**, exit0. Scoped `rendercheck.mjs` on all21 assigned items plus both pages: **23 files clean**, exit0, with actual KaTeX and renderer YAML parsing. These are local format/render checks, not independent proof judgments.

- **A page `sr-energy-momentum`:** conditional mathematical/physical claims are sound after the listed repairs and current supplier corrections; summary repaired. Ready for Step5b content review, with the plan integration blocker below.
- **B page `sr-energy-momentum-examples`:** all8 items independently checked; the V-valued momentum notation repair was made in its assigned item. Page prose was read and left unchanged. Ready for Step5b review conditional on the suppliers.

**Owner integration blocker:** the new angle citations require the existing published P homes `sine-cosine-and-the-definition-of-pi` and `further-trigonometric-identities-and-inverses` in the A-page plan/manifest `requires`. Both P entries already exist globally, but batch8's `requires` currently omits them. Reader authority excludes `research/plan-spec.json` and page manifests, so no planning edits were made. The added real/rational-power agreement supplier is on the already-reached elementary-functions prerequisite closure. Record this prerequisite declaration during lead/owner integration before native dependency gates. Because the plan is not a schema-permitted finding subject and the A-page prose was repaired, this integration obligation is recorded here and in coverage_note rather than misrouted as an unchanged carrier defect.

No current unresolved mathematical claim or empirical premise was identified beyond the historical supplier findings and that declaration obligation. Source reading was limited to relevant passages; some imported foundational and auxiliary geometric suppliers were opened at statement level only. This report does not claim an exhaustive transitive-corpus audit, source-byte certification, empirical validation or judgment.
