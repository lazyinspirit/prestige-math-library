# Batch 29 Step 3a adjudication

Run: `physics-non-fluid-129-2026-10-21-r2`; group: `batch-29`.

Read workspace instructions, scope, item-order task, reader report/findings, refuter findings, and immutable pre/post snapshots. Six routed obligations; no page obligation. No agents, judgments, stamps or engine transitions are authorized.

## Completed lower-level reviews

`lem-gr-fx-null-normal-plane-and-screen`: checked its full projection, inertia, local future normal pair, quotient, affine derivative, symmetry and boost proof against exact current supplier statements. No defect. The rank-two normal plane is distinct from the radical normal line of a null hypersurface. AComega only; no global trivialization or orientation asserted. Complete risk review recorded.

`def-gr-fx-null-screen-geometry`: checked every definition, branch-specific quotient bundle, regular locus, focal rank loss and optical endomorphism; complete risk review recorded. Its sole TikZ diagram has correct future rays, tangent-plane schematic and normalization; no proof depends on it.

## Index form — completed

`touched:29:lem-gr-fx-null-screen-index-form`: amended repair. The reader's statement clarification is sound. Its proof step 3.1 incorrectly presumed the E_0 representative was tangent to S; in general the timelike orientation field has a tangential component. Added a(1-lambda/L)ell to the E-lift, with initial value X in T_pS and zero final value. Metric compatibility and D_lambda ell=0 leave both integral contractions unchanged. The slice correction is now O(s^2) as claimed. Statement unchanged; no outside consumer repair is triggered. The focal lemma's F3/step 4.1 requires ell-orthogonality, not membership in E, and is supplied by this corrected lift. Complete risk review recorded; checks pending final batch pass.

## Raychaudhuri — completed

`refuter:29:2`: confirmed fatal, repaired with confidence 1. Corrected title to “Null Raychaudhuri and focal-point bound”; updated manifest title. The Statement proves surface focal rank loss, whereas `def-gr-jacobi-field-and-conjugate-instant` Definition (d) requires a nonzero Jacobi field vanishing at both point endpoints. A round Minkowski sphere supplies a concrete distinction: inward surface focal rank loss at R occurs although flat-space Jacobi fields vanishing at 0 and R are zero. The Riccati, screen Ricci trace and reciprocal-expansion comparison are valid under the stated hypotheses. No Statement/Definition change, so no consumer interface propagation. Complete risk review recorded.

## Focal boundary and published prerequisite — completed

Read all seven steps and current cited interfaces. Jacobi uniqueness makes Jprime(lambda0) nonzero, including the endpoint case lambda0=L1 via local extension. The positive chi boundary term cancels; W(lambda0)=-Jprime yields a negative direction. Fixing the perturbation before smoothing gives the stated H1 estimates. The coefficient h integrates to I(V,V)<0. The correction by s^2 a n has normalized squared speed h-2a-prime at s=0; the local inverse, compact-graph ODE continuation and intermediate value argument fix a(0)=a(L)=0 and give exact causal speed with a timelike subinterval. Negative pairing with N persists uniformly; push-up(c) applies with AComega/DC. No completeness claim follows.

F3 and proof 4.1 now explicitly select the corrected ell-orthogonal lift with actual tangent initial value, rather than risk reading “orthogonal lift” as the E-lift. This is a surgical proof/citation clarification downstream of the index proof correction; its Statement is unchanged. Complete risk review recorded.

`reader:29:1`: confirmed nonfatal, recorded for published maintenance. The direct Definition names beta without a formula/link, but the declared smoothness theorem's F1 identifies `def-the-standard-flat-function`, whose exact Definition is beta(t)=exp(-1/t) for t>0 and zero otherwise. The theorem's proof establishes smoothness and flatness by the polynomial-in-1/t derivative formula and exponential decay. For every real t at least one of t,1-t is positive, so the denominator is everywhere positive. Thus sigma is smooth, in [0,1], constant outside [0,1], and has bounded derivative on the compact interval. These are exactly F12/step 3.1's requirements; no undefined mathematical choice remains in the owned use. The missing direct definition citation is an immediate transitive lookup, not a false construction. Published source remains unchanged; its direct definition/prerequisite maintenance remains OPEN in the published ledger. No historical unbound observation is claimed.

## Examples — completed

`touched:29:ex-gr-fx01-1`: accepted repair. The reader's M, N and radial-vector definitions type the same explicit Minkowski computation correctly. Checked future normalization, expansions +/-2/R, inward screen factor 1-lambda/R and first zero at R. Its timelike segment has squared interval 4R(R-lambda)<0 on the stated range; excluding lambda=R is essential. No additional item edit needed.

`touched:29:ex-gr-fx01-2`: amended repair; `refuter:29:1`: confirmed nonfatal. Retained the reader's explicit setup, future-set definitions and conditional focusing bound. Moved the quotient-map differentiation to step 2.1 before using it: at fixed lambda-prime the transverse derivative adds e^f lambda-prime X(f) ell, hence Ahat=A at corresponding parameters and Ahat-prime=e^f A-prime. This derives Bhat=e^f B, the trace/shear laws and weight two for every Raychaudhuri term. Step 3.1 reuses that result to prove geometric rank-loss and causal-boundary invariance. The actual reparametrized domain is stated; no common full-U interval is presumed. Zero boost/expansion and transverse-dependent boosts checked. Complete risk review recorded.

## Decisions, consumers and historical evidence

The decisions file contains exactly six owed obligations: three touched, one reader and two flagged. Seven closed adjudication rows were appended at `caught_at_stage: 3a-adjudicate`: index statement typing, index actual initial lift, Minkowski data, boost setup/hypotheses, boost optical derivation, focal title, and published step citation. The published row uses `nonfatal-recorded`; it does not claim a published repair. Only the flagged decision owns the boost optical-derivation row in `defect_ids`, while the touched boost decision owns its original setup/hypothesis repair. Every reader/flagged obligation references exactly one row. All completed repairs have confidence 1. No judgment record existed on the edited items; none was issued.

Immutable `step3-hash-29-pre.json` and `-post.json` show changes only to the three reader-touched items/contracts; page hashes and original manifests were unchanged. Current raw sphere bytes match the immutable post-reader item hash, and the unchanged normal/screen raw hashes also match. Index, boost, focal and Raychaudhuri now differ because of the Alpha edits recorded above; their current raw hashes are listed below. Their initial current text was reviewed against the reader report and preserved original Statement mirrors, without asserting an unperformed bytewise comparison of the unavailable pre-reader proof bodies. The pre-reader authored manifest preserved each original Statement quoted during this review, including the parallel-null-frame wording and unqualified displayed boost bound. The reader report records the proof changes. Full pre-reader source bodies were not recovered, so this report does not assert a complete bytewise historical proof diff. These are reviews of actual documented reader repairs and their independently checked current arguments, not owner-authorized substitutions for unknown changes. No finding is routed with `observation_basis: unbound`, and no owner historical resolution is asserted.

Reader Statement clarifications required consumer checks. Searching current `items/` and `library/` for the three changed IDs found only the owned A/B placements and focal-boundary consumer. Checked that consumer's actual field, endpoint and second-variation uses; clarified its lift selection as described above. No outside item uses the changed interfaces, no page prose changed, and no further hop is triggered. Alpha changed no Statement/Definition. Owning statement mirrors for all three reader repairs and the corrected Raychaudhuri title are now synchronized. The stale cross-batch row for `def-gr-spacelike-initial-data-and-constraints` is retained as removed; nine omitted existing published-supplier use rows were added with specific evidence. These are records of current prerequisites, not new content dependencies. Frontier ledger updated; stable IDs/inventories retained and no withdrawal proposed.

## Source and scope record

Exact current local supplier interfaces read (definitions or theorem statements, not assumed from review stamps):

- Normal geometry: `items/def-gr-smooth-lorentzian-objects.md` Definition (a)–(c); `def-embedded-submanifold-and-slice-chart` Definition; `def-gr-metric-selected-connection` Definition (a)–(e); `thm-gr-nondegenerate-levi-civita-and-tensor-derivative` Statement (a)–(c); `def-covariant-derivative-along-a-curve` Definition including endpoints; `thm-sylvesters-law-of-inertia` Statement; `def-countable-choice` Definition.
- Optical/curvature: `items/def-gr-curvature-tensor-and-derived-tensors.md` Definition (a)–(c); `thm-gr-jacobi-equation-and-geodesic-deviation` Statement (a)–(d); `thm-gr-curvature-algebraic-symmetries` Statement (a)–(d); `def-gr-jacobi-field-and-conjugate-instant` Definition (b)–(d). Local batch suppliers were read in full.
- Focal/causal: `items/thm-gr-local-geodesics-and-exponential-map.md` Statement (a)–(d); `def-gr-causal-curves-and-reachability` Definition (a)–(c); `def-dependent-choice` Definition; `thm-gr-convex-normal-neighborhoods` Statement (a)–(c); `thm-gr-normal-neighborhood-causal-cone` Statement (a)–(d); `thm-smooth-dependence-of-ode-solutions-on-parameters`, `thm-smooth-inverse-function-theorem-on-manifolds`, `thm-intermediate-value` Statements; `lem-gr-push-up-rule` Statement, especially (c).
- Smooth cutoff: `items/def-the-standard-smooth-step-function.md` Definition/Remarks, `thm-the-standard-flat-function-is-smooth-and-flat-at-zero` complete Statement/Facts/Proof, `def-the-standard-flat-function` exact piecewise Definition, and `lem-exponential-decay-dominates-every-inverse-power` complete argument. The transitive exponential asymptotic theorem was used only through the latter's exact stated premise; no whole ancestor audit is claimed.

External passages actually opened and read: [Gourgoulhon–Jaramillo](https://arxiv.org/pdf/gr-qc/0503113), §5.6 equations (5.64)–(5.67), printed pp.72–73, and §6.2 equations (6.5)–(6.8), printed p.83; [Witten](https://www.claymath.org/wp-content/uploads/2022/03/WittenLectures.pdf), §8.4 equations (8.24)–(8.41), printed pp.81–84, and §8.5 equations (8.42)–(8.52), printed pp.85–86. They support the geometric split, affine evolution and surface-versus-point initial conditions. Their normalizations are translated to the local g(ell,k)=-2 convention; the local proofs independently establish the boundary sign and exact causal correction. No full-book or full-PDF reading is asserted. PDF text extraction locally was unavailable (`pdftotext` absent); relevant text was read through the browser's PDF extraction.

All seven items are mathematical geometry/calculation carriers; no postulate, Einstein equation, measurement, sampling model or empirical premise enters their proofs. Local dimensional readings are conventions rather than empirical conclusions. The sole TikZ diagram is in the screen Definition and was checked; neither page contains prose or another diagram requiring repair. Imported/published mathematical bytes and the root mathematics workspace remain read-only.

## Focused checks and owner handoff

After source edits, ran `node tools/tsx-run.mjs tools/physics-support/reflow.mts` on the four Alpha-edited item paths. It only changed wrapping in the focal item. Then:

- `node tools/tsx-run.mjs tools/physics-support/precheck.mts` on the complete seven-item selection: six proof-bearing items checked, zero failures; the definition has no proof body.
- `node tools/physics-support/proof-contract.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-29.proof-contracts.json --strict`: seven of seven checked, zero errors/warnings. An initial stale F3 quotation was repaired by matching the current index Statement, then the check passed.
- `node tools/physics-support/risk-report.mjs` on that contract was run before risk reviews and with `--require-reviewed` afterward: six HIGH/CRITICAL items have complete, specific Alpha reviews; zero errors.
- `node tools/physics-support/rendercheck.mjs` on all seven items and both assigned pages: nine files pass YAML/math checks.
- Required final `node tools/physics-support/proof-layout.mjs` invocation, batching index, Raychaudhuri, focal, sphere and boost paths after final source edits/formatter: five items, 22 steps, zero defects. No item was edited afterward.
- `node tools/physics-support/defect-ledger.mjs validate --run physics-non-fluid-129-2026-10-21-r2 --ledger /tmp/physics-b29-ledger.jsonl`, selecting the seven new batch-29 rows: seven checked, zero errors. Temporary file contains an exact projection of canonical rows, not replacement ledger evidence.

Run-wide ledger validation was also attempted and reported seven unrelated taxonomy errors: batch-14 `degree-zero-false-positive` has location `proof`; batch-14 `projector-title` has subclass `claim-mismatch`; batch-14 `curvature-radial-sign` has subclass `incorrect-computation` and location `proof`; batch-28 `unsupported-gauge-title` and `constitutive-fragment` each use subclass `claim-mismatch`; batch-26 `choice-context-edge` has location `deps`. Exact affected IDs are `physics-non-fluid-129-2026-10-21-r2-3a-batch-14-degree-zero-false-positive`, `physics-non-fluid-129-2026-10-21-r2-3a-batch-14-projector-title`, `physics-non-fluid-129-2026-10-21-r2-3a-batch-14-curvature-radial-sign`, `physics-non-fluid-129-2026-10-21-r2-3a-batch-28-unsupported-gauge-title`, `physics-non-fluid-129-2026-10-21-r2-3a-batch-28-constitutive-fragment`, and `physics-non-fluid-129-2026-10-21-r2-3a-batch-26-choice-context-edge`. These are outside this dispatch and remain owner routing work; no mechanical defect rows or repairs were made for them.

Batch 29 has no unresolved mathematical prerequisite or outside-consumer repair. Published step direct-definition maintenance remains OPEN with a nonfatal recorded owned-use disposition. The engine owns decision hash stamping and the gate battery; none was run or claimed here. No publication, commit, push, agent dispatch or judge cycle was initiated.


Current raw carrier hashes at handoff (no acceptance stamp):

| Item | SHA-256 |
|---|---|
| `lem-gr-fx-null-normal-plane-and-screen` | `b32ca381bcb5d64611ef7ead8289a28a9b3fb1f4442b97228198880eadcdaf54` |
| `def-gr-fx-null-screen-geometry` | `aa73d8e4aa99afbc8f7195ba4a50b2682b42875f9b4f6d67c486d9bab3678334` |
| `prop-gr-fx-null-raychaudhuri` | `1e1ab8fe5f81df7afe362c5faf7ae88b04fbd9007205dd243cd4d74d851d1f39` |
| `lem-gr-fx-null-screen-index-form` | `e809e349067ac7f92401443b5390847194e1eabad8a04ae3568f5de10146fda8` |
| `lem-gr-fx-null-focal-boundary-exclusion` | `24a4548dedd539d61101a49a42dd3a8cf44666caaa801874056b286106989c03` |
| `ex-gr-fx01-1` | `efd78f164eb73225049e1a60752d95e6e3aadc755b277a7f31983e98eeee85ad` |
| `ex-gr-fx01-2` | `06c130dd8d3fc2bee37be952414f032597023a5ab68bda31508bc8fb56159d1d` |
