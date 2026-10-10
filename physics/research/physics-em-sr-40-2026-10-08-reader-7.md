# Reader 7 — independent review of batch 7

Run: `physics-em-sr-40-2026-10-08`. Role: Step 5a reader. All owned content remains draft; this report is an independent reading and repair record, not a judgment, publication stamp, or whole-library audit.

## Scope and opened inventory

Read the parent and workspace `CLAUDE.md`, workspace `README.md`, `SCHEMA.md`, `WORKFLOW.md`, the physics content model including statistical-evidence guidance, `briefs/reader.md`, and the exact batch manifest. The batch notes and proof contracts were evidence, not acceptance decisions. The import registry was opened to identify its structure; imports and mathematical originals were not edited. No rendered reader bundle was found among the current named batch artifacts, so current carriers were the entry point.

Both pages were opened completely:

- `library/special-relativity/sr-light-and-doppler.md` (A).
- `library/special-relativity/sr-light-and-doppler-examples.md` (B).

All 16 assigned carriers were opened and reviewed, with mathematical suppliers before their consumers. The page listing itself is not a dependency order: the pure mathematical examples were checked before the physical examples. Assigned inventory:

- `items/lem-sr-metric-duality-on-lorentz-vector-space.md`.
- `items/def-sr-affine-phase-and-wave-covector.md`.
- `items/lem-sr-future-causal-pairing-negative.md`.
- `items/lem-sr-null-covector-frame-data.md`.
- `items/lem-sr-null-covector-boost-transformation.md`.
- `items/lem-sr-phase-rate-along-worldline.md`.
- `items/def-sr-null-wave-covector-and-observer-frequency.md`.
- `items/post-sr-ideal-plane-wave-model.md`.
- `items/pthm-sr-null-wave-doppler-and-aberration.md`.
- `items/rem-sr-doppler-dimensional-restoration.md`.
- `items/ex-sr-doppler-longitudinal-beta-three-fifths.md`.
- `items/ex-sr-transverse-doppler-protocols-worked.md`.
- `items/ex-sr-aberration-worked-beta-three-fifths.md`.
- `items/ex-sr-phase-level-sets-and-null-generators.md`.
- `items/cex-sr-transverse-doppler-is-not-unshifted.md`.
- `items/ex-sr-null-covector-frame-data-worked.md`.

Local draft suppliers opened to their definitions or statements and proofs needed for the claims:

- Primitive geometry: `def-lorentz-form-and-inertia`, `lem-lorentz-form-has-orthonormal-basis`, `def-causal-classification-of-lorentz-vectors`, `def-affine-space-and-displacement`, `def-time-orientation-and-future-causal-sets`, `def-sr-affine-minkowski-model`, `def-inertial-frame-and-inertial-chart`, `lem-timelike-cone-has-two-convex-components`, `lem-future-oriented-inertial-frames-exist`, and `def-spatial-euclidean-structure-of-an-inertial-frame`. Complete relevant definitions/proofs were read, including recovery of portions initially truncated by tool output.
- Boosts and component changes: `def-lorentz-map-and-lorentz-group`, `def-lorentz-boost`, `lem-boost-is-proper-orthochronous-with-inverse`, `lem-inertial-chart-transitions-are-affine-lorentz`, and `thm-sr-tensor-and-current-transformation`. Their relevant bodies were read completely. `lem-lorentz-map-preserves-metric-and-causal-structure` was opened to its full statement; its general group proof was not independently audited.
- Smooth-field context: `def-ck-tensor-field-on-minkowski-space` was opened to its definition, and the corrected definition was subsequently checked over the needed sections. `lem-affine-minkowski-charts-form-a-smooth-atlas` and `lem-tangent-space-of-affine-minkowski-space-is-v` were opened to their statements. Their complete manifold-theory supplier cones were not audited; the owned constant-covector calculation can also be checked directly from affine basis substitution.
- Curves and clocks: `def-sr-regular-causal-curve-and-worldline`, `def-sr-proper-time`, `lem-sr-proper-time-parametrization`, `def-sr-four-velocity-and-four-acceleration`, and `thm-sr-proper-time-and-observer-decomposition`, with complete relevant bodies. Corrections made concurrently by the producer were rechecked at the affected clauses.
- Physical interpretation: `def-sr-si-units-and-coordinate-conventions`, `post-sr-ideal-clocks-and-light`, and `post-sr-inertial-covariance`, including their interpretation boundaries. The current corrected SI and ideal-light clauses were checked again when their bytes changed.

Published mathematical suppliers opened to the exact relevant interfaces, and where indicated their proofs:

- `def-algebraic-dual-and-linear-functional`, `thm-bilinear-forms-correspond-to-linear-maps-into-the-dual`, `thm-dual-family-is-a-basis-in-finite-dimension`, and `thm-cauchy-schwarz-finite`: complete carriers.
- `thm-sylvesters-law-of-inertia`: statement and complete proof; `thm-rank-nullity`: statement and complete proof; `cor-mean-value-theorem`: complete carrier; `thm-chain-rule`: full statement and relevant proof.
- Definitions: `def-linear-map`, `def-linear-isomorphism-and-invertible-linear-map`, `def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form`, `def-rank-and-nullity`, `def-definiteness-inertia-and-signature-data-over-the-reals`, `def-euclidean-inner-product`, `def-oriented-integral`, `def-derivative`, `def-vector-valued-derivative-and-integral`, and `def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space`, over the cited clauses.
- Exact statements: `thm-unique-coordinates-with-respect-to-an-ordered-basis`, `prop-orientations-and-positive-basis-classes-agree-in-positive-dimension`, `thm-algebra-of-derivatives`, `thm-algebra-of-continuous-functions`, `thm-continuous-implies-integrable`, `thm-ftc-first-part`, `thm-intermediate-value`, and `thm-monotonicity-of-the-integral`.

The root `../items/def-pi-via-first-positive-cosine-zero.md` was read as source context after finding no local imported trigonometric supplier. It was not edited or added as an unresolved logical edge. The angular convention was instead constructed locally with already available finite Riemann calculus. An automated metadata traversal also inspected dependency frontmatter further back; that is not claimed as reading or auditing all ancestral mathematics.

## Independent checks of claims

With signature (-+++), metric duality gives k-sharp=(-k0,k1,k2,k3). The future-cone coordinate inequalities and finite Cauchy–Schwarz prove k(n)<0 for nonzero future null k and future timelike n; the normalization denominators are positive. Frame data are uniquely determined with varpi>0 and |s|=1.

For a passive boost, the covector uses the inverse matrix, yielding varpi'=gamma(1-beta dot s)varpi. The denominator is positive by Cauchy–Schwarz and |beta|<1; future-null status is intrinsic, and the primed frame-data lemma gives the unit norm. The inverse boost returns the same covector. The transverse protocols were checked separately: beta dot s=0 gives gamma, while beta dot s=|beta|^2 gives 1/gamma. The axis and longitudinal cases, zero boost, wavelength reciprocals, and the rational aberration bijection were checked algebraically.

The kernel geometry example correctly distinguishes the radical line from nonzero null vectors: zero lies in the radical but is not called null, and every direction outside that line is spacelike. The arithmetic examples give frequency factors 1/2, 2, 5/4, 4/5, and 13/20 with their stated reciprocal wavelength factors. The pure frame-data example gives (-3/5,12/25,16/25) and returns the original data under the inverse boost. No AC or empirical premise is used.

The physical postulate adopts the phase and frequency reading; the theorem derives a consequence of that adoption. None of the owned items reports a measured outcome, statistical estimate, or empirical falsification. The source-free model permits an incoming-direction convention, not a deduction about an actual stellar source or detector.

## Repairs made and evidence

Seven assigned draft carriers were edited; neither page prose nor outside-batch carriers were edited.

1. `def-sr-affine-phase-and-wave-covector`: added the exact sum/scalar differentiation and continuity suppliers, and explicitly defined C1 curves on nondegenerate order-convex parameter sets, their tangent and included-endpoint convention. Affine chart transitions and finite linear combinations give chart independence. The former invocation of the chain rule alone did not state the rule for differentiating the four-term affine phase. The opened algebra-of-derivatives statement supplies that rule directly. No affine-phase, kernel, or null-covector conclusion was weakened.
2. `lem-sr-phase-rate-along-worldline`: put the proper-time chain-rule deduction before its use in the sign/monotonicity clause. Added the mean value theorem with its full continuity and open-interval differentiability hypotheses; a compact subinterval of the proper-time image establishes strict decrease, including endpoint comparisons. Adopted precheck's canonical phase numbering 1.1, 2.1, 3.1, 4.1. This closes a formerly silent monotonicity prerequisite.
3. `def-sr-null-wave-covector-and-observer-frequency`: explicitly assigned dimensionless phase and inverse-length covector components, and supplied the missing angular convention. A finite quarter-circle integral defines radian parameter a(t) and pi; the rational unit-circle parametrization has speed 2/(1+t^2). FTC, mean value theorem and IVT establish the required bijection. Reflection defines sine/cosine on [0,pi], verifies their norm identity and makes cosine strictly decreasing onto [-1,1]. Its inverse defines the angle between nonzero spatial vectors. This supplies pi, angle and cosine vocabulary locally without pretending an unimported mathematics result is a published local prerequisite.
4. `post-sr-ideal-plane-wave-model`: separated complete future-directed null lines (parameter in R) from their future half-line portions (parameter >=0), matching the general ideal-light supplier. Removed the inaccurate assertion that the SI definition itself excludes a quantum energy identification; the exclusion remains stated as this model's own boundary. The physical assumptions, frequency reading, and exclusions are retained.
5. `pthm-sr-null-wave-doppler-and-aberration`: updated the ray formulation consumed from the postulate; explicitly defined the aberration angles through the supplied inverse cosine and distinguished numerical axis components from vectors in different rest spaces. Made the general observer in the physical model explicitly inertial, consistent with its existing scope. Added the elementary inequalities proving the forward aberration map stays in [-1,1] before invoking its inverse. Restricted the longitudinal normalized-axis cases to nonzero beta and stated the zero-boost frequency/wavelength identities separately. All promised shift, direction and reciprocal wavelength formulas remain.
6. `ex-sr-aberration-worked-beta-three-fifths`: replaced the unsupported premise that a physical source exists with an explicit incoming-direction convention -s and -s'. Its exact axis-component comparison and stellar-aberration sign interpretation remain, with no source/detector or observational assertion introduced.
7. `lem-sr-null-covector-frame-data`: corrected the title's doubled TeX backslash before varpi. The statement and proof are unchanged.

The batch proof-contract file was updated for the affected citations, derivations, nonproof formulation review and endpoint worksheets. All assigned proof worksheets had their accidental self-step inputs removed, and prerequisite/use mappings were aligned with actual fact and earlier-step references. The Ck-field quotation and current SI/ideal-light anchors were refreshed after producer changes. Non-numbered definition explanations retain their explicit body citations; no fictional numbered facts were added to their contracts. No judgment or audit stamp was added. Edited carriers had no judge record remaining after the mandated stale-record removal pass.

Direct consumers within batch 7 were checked after the supplier clarifications, including the postulate, theorem, remark and all four physical B examples. The two mathematical B examples retain purely mathematical prerequisites and interpretations.

## Uneditable findings and concurrent corrections

The schema JSON records eight observations using existing subject IDs: two still-current defects and six historical supplier observations corrected by producers. Historical entries have observed_source=null: the original raw files were not captured at first reading, and the producer's pre-reader fingerprint alone does not prove the observed bytes. They do not allege that the corrected current text still contains the old defect.

**Current supplier defect:** `thm-sr-tensor-and-current-transformation`, Facts & Assumptions L1, identifies Lambda=M^{-1} as the matrix of the map L taking e_a to e'_a. The opened chart-transition supplier and this theorem's own step 2.3 instead make M that matrix and Lambda the matrix of L^{-1}. At beta=3/5 the respective first spatial column entries are +3/4 and -3/4. The correction is to state the distinction explicitly in L1. The assigned consumer is `lem-sr-null-covector-boost-transformation`; ownership is batch 2. Its correct clause (ii) is sufficient for the owned covector calculation, but the inaccurate supplier fact itself cannot be accepted unchanged. Severity: fatal citation inaccuracy. The findings JSON binds the current raw SHA-256 observed at the final check.

**Current B-page defect:** `sr-light-and-doppler-examples`, closing paragraph, first sentence, puts all six computations inside the adopted physical plane-wave model. The two mathematics-domain examples explicitly exclude physical interpretation and use only mathematical dependencies. The sentence must distinguish those two mathematical workups from the four conditional physical computations. B prose is outside the reader edit license. Severity: fatal false claim under the instruction that a defective summary claim is not excused as a short proof omission.

Historical observations, all left untouched by this reader and confirmed corrected in the cited current clauses:

- Batch 1, `def-sr-si-units-and-coordinate-conventions`, original Definition (1) and Status: numerical SI value of c called empirical. Current version correctly states the exact SI value and separate uncertainty of realizations/model testing.
- Batch 1, `post-sr-ideal-clocks-and-light`, original clause (ii) final sentence: the same inaccurate SI numerical-value qualification. Current version now distinguishes exact unit convention and adopted light interpretation.
- Batch 3, `def-sr-proper-time`, original Remarks, Well-definedness (iv): base change said to add the integral from s0 to s1; additivity requires subtraction. Current version says subtract.
- Batch 3, `def-sr-proper-time`, original Scope: zero density at one null point was used to infer constant integral. The smooth future-causal curve o+s e0+(s-s^3/3)e1 has density sqrt(2s^2-s^4), zero only at 0 on (-1/2,1/2). Current text correctly requires identically zero density on a null curve.
- Batch 2, `lem-inertial-chart-transitions-are-affine-lorentz`, original step 4.1: closed-cone inequalities were called future-causal without excluding zero. Current text separates the closed cone from nonzero causal vectors and uses invertibility. This is an immediately closable nonfatal proof qualification.
- Batch 3, `lem-sr-proper-time-parametrization`, original step 10.1: the affine curve was equated to E applied to its coordinates, omitting the origin and mixing A with V. Current text includes o+E and displacement difference quotients. This is an immediately closable nonfatal proof omission.

The other four historical claims are fatal as originally written; correction by the producer does not retroactively make the earlier formulations valid. No observed old defect is attributed to corrected current bytes.

## Sources actually read

- [Crowell, Special Relativity](https://archive.org/download/sr_20220102/sr.pdf), revision 2020-12-10: printed/PDF pages 55–59 and 134–141, especially sections 3.2, 6.4, 6.5 and 6.6.1. The web tool could not open the PDF, but direct retrieval succeeded (10,728,180 bytes), and local PyMuPDF extraction supplied the relevant text. Pages 134–135 were recovered separately after a truncated output. His opposite metric signature and covector spatial sign must be converted; the local formulas were checked independently. The transverse statements on pages 56 and 137 refer to different configurations. The source's reported experiments were read only as adjacent context, not incorporated as empirical premises or independently verified reports.
- [Einstein 1905](https://de.wikisource.org/wiki/Zur_Elektrodynamik_bewegter_K%C3%B6rper), section 7, journal pages 910–912, transcription lines 432–467: read the phase transformation, frequency and direction-cosine laws and the transverse specialization. Einstein's beta is the Lorentz factor, not the local dimensionless speed parameter. Amplitude/intensity discussion was read to identify its separate scope and was not imported into the owned phase model.
- [Murugesh, Relativity – Special Theory](https://www.iist.ac.in/sites/default/files/2025-06/relativity.pdf), Chapter 6, equations (6.1)–(6.17): read the phase-matching argument, wave four-vector, longitudinal shift, observer-frame transverse 1/gamma case, and aberration. Its apparent-source angles use the opposite direction to the local propagation vector; the rational signs were checked explicitly.
- [BIPM metre definition](https://www.bipm.org/en/si-base-units/metre), defining-value paragraph and exact-relation paragraph: checked that the SI numerical value of c is fixed exactly. Exact unit definition does not prove ideal-light dynamics or remove apparatus uncertainty.

No claim is made to have read every section of these books, all cited apparatus reports, or the complete mathematical import corpus.

## Validation actually run

- Reflow on all seven changed item paths: exit 0; no further reflow changes. Repeated on the theorem after its final zero-axis clarification.
- Precheck on all seven changed paths: final exit 0, five applicable proof/nonproof structures checked and zero failures; the two definitions correctly have no numbered proof section. The first phase-rate precheck requested canonical phase renumbering; that proposal was adopted and rerun successfully. The theorem was checked again after its final edit.
- Strict proof-contract check on the batch contract: final 16/16 items checked, zero errors and zero warnings. Initial new definition citation entries and incomplete use mappings failed; the definition citations were kept in their actual non-numbered body and the worksheets corrected.
- Citation-fidelity check on the batch contract: final 110 citations, every quotation found, no detected widening candidates. This is a mechanical screen, not a mathematical verdict.
- Rendercheck on seven changed carriers and both pages: exit 0, nine files; real KaTeX and renderer YAML parsing succeeded. A final single-theorem rendercheck after its last edit also passed.
- Exact Fraction computation: all six numerical direction/frequency cases, unit norms and inverse round trips passed. This checks arithmetic, not the physical applicability of the adopted model.
- Final proof-layout invocation batches all seven changed paths after final item edits/formatters: 7 items, 20 steps, zero defects.

## Page verdicts, consumer handoff and limitations

**A page `sr-light-and-doppler`: local arguments and prose are coherent after the repairs, with a remaining outside-batch supplier-fact correction owed in tensor-transformation L1.** The valid covector transformation is explicitly derived from the correctly stated supplier clause. This reader does not stamp acceptance of the defective supplier or publish the page.

**B page `sr-light-and-doppler-examples`: all six item calculations were checked; the closing summary requires the lead's prose correction.** Four are physical conditional computations and two are pure mathematical examples. No withdrawal is proposed.

Physical formulation clarification requires consumer coordination. The following outside-batch direct consumers were identified from their actual deps but their complete claims/proofs were not reviewed or edited in this one-batch dispatch: `def-sr-experiment-interface-vocabulary`, `exp-sr-stored-lithium-ion-doppler-time-dilation-2014`, `pthm-sr-specified-model-comparison`, `ex-sr-operational-record-arithmetic-worked`, `cex-sr-bounded-record-does-not-identify-the-parameter`, and `pthm-em-observer-field-and-doppler`. The lead must coordinate the relevant interface review, especially the complete-line/future-portion distinction and the supplied angular convention. No downstream result was inferred defective merely because it is a consumer.

Limits: no recursive whole-foundations audit; some remote suppliers were read only to their needed statements; no outside-batch consumer audit; no statistical/experimental-report acceptance; no whole-run gate attempt. Earlier tool truncations were recovered for the arguments relied upon, and producer updates were checked only at the relevant changed interfaces. Original bytes for the six historical observations are unavailable, so no pre-snapshot hash is claimed for them. Remaining current blockers are the supplier fact and the protected B-page sentence, both included in the findings JSON. Report and JSON are the task-authorized handoff artifacts.
