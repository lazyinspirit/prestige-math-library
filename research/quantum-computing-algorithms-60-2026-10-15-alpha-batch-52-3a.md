# Batch 52 Step 3a adjudication

Run: `quantum-computing-algorithms-60-2026-10-15`; group: `batch-52`.

## Dependency-ordered review

### Level 0: polynomial matrix-function error

Reviewed the current statement and both proof steps against all six declared suppliers. Finite spectral calculus and Pythagoras give the pointwise squared-norm estimate, then the operator norm bound. The zero domain, empty spectrum, eta=0 and spectral endpoints are covered. Although Given says interval, the proof uses only the stated spectral containment and works for any subset I. No repair or decision is owed; the critical risk review is complete. Sources: current `items/thm-qa-28-polynomial-matrix-function-error.md` and its six linked suppliers. Next: median sampler and spectral output law.

### Level 14: median sampler and spectral law

The median sampler explicitly prepares each fresh trial and invokes only the coherent QPE prefix plus one readout. Positive epsilon and certified finite enclosures give terminating doubling and odd-integer searches. Its eigenstate caveat correctly avoids claiming concentration of a mixture about one eigenvalue. The spectral-law proof follows the exact finite QPE kernel, orthogonal spectral decomposition, Dirac convention and declared Lüders instrument. It covers degenerate eigenspaces, zero weights and positive-probability conditional branches. The reader's explicit finite-dimensional/Hermitian/unit-vector hypotheses are sound. Current reader-post hashes and pre/post changes are retained in the supplied snapshots. Spectral-law risk review complete. Next: QSVT component procedure and error/cost bound.

### Levels 15–16: QSVT and matrix-function bound

Checked the bounded real parity interfaces, reflected phase convention, positive OP1 tolerance, zero-target list (pi/2), declared LCU preparation/inverse/SELECT and failure propagation. The matrix-function proof correctly turns parity SV transforms into spectral polynomials, sums normalized component errors and keeps query, inverse, reflection, generation and compilation costs separate. Read the full Gilyén Lemma 22 proof in `research/quantum-algorithms-planning/sources/qa_r5/gilyen-qsvt.txt`, PDF pp. 23–24. Its bound applies to the conjugate phase lists and hence their real-part average.

Amended the matrix-function theorem's exactness caveat: exact execution of a phase list that only approximates p_j does not remove the certified polynomial deviation. For example, take a nonzero scalar H=1/2, zero target, J={0}, gamma=1, p=0, d=0, and the exactly implemented approximate list (0) certified with error one. Its block is I although all operations are exact; kappa=1 is needed. The corrected clause requires exact target realization before taking the kappa bounds zero. The general displayed inequality is unchanged. The exponential example has exact lists and meets the added qualification. The only outside item citing this theorem, `thm-qa-30-sdp-gibbs-state-error-cost`, assumes a total flagged-vector error and never uses the zero-kappa clause; no consumer repair is needed. No new dependency or manifest interface is required. Matrix-function risk review complete.

Owner polish alert (outside scope, not a substantial missing prerequisite): `lem-qa-24-qsvt-robustness-amplitude-bound`, step 5.1, describes applying step 4.1 to B/(1+delta),B; that literal application does not give its displayed second estimate. The immediate intended scaling argument uses V_B direct-sum V_0 and the same c,s rotation to compare B with B/(1+delta), at cost 2d sqrt(delta); this is exactly the second construction in Gilyén Lemma 22, PDF p.24. Step 4.1 also says “steps 2.1–2.2” though 2.2 does not exist; the actual ingredients are 2.1 and 3.1. These are nonfatal recoverable proof/citation polish, left for the supplier owner. No unsupported mathematical claim is imported.

Next: estimation guarantee and its duplicate-label finding, then the two examples.

### Level 16: additive spectral-estimation guarantee

Verified the six steps against the 26 declared dependencies: Q epsilon>=6pi gives circular tail at most 1/4; the principal lift is strictly inside (-1/2,1/2) even at lambda=+-1 and epsilon=1. The finite exponential-moment calculation, MVT logarithm bound and rational schedule searches are valid. Orthogonal readout projections and complex then finite-real Cauchy–Schwarz give total variation <=xi per independent fresh trial; product hybrids give r xi. The exact-grid two-point counterexample is valid for generic phase access and does not claim that its labels are the e^{iH} spectrum. The current eigenstate, phase-encoding and decoder hypotheses resolve the former generic-access ambiguity.

Confirmed `refuter:52:1` as nonfatal: two F5 declarations and two F6 declarations were present. Renamed the complex Cauchy–Schwarz fact F11 and readout fact F12, and updated only their step 3.1 citations. The logarithm F5/F6 uses retain their intended meanings. No mathematical claim changes. Reconciled the two reader-added dependencies with the owned manifest; the reader had already put them in the current source. Risk review complete.

Historical evidence recovery: the archived Step-2 spectral preimages contain the exact pre-reader median sampler (SHA256 70f4a3bae5f44caf8323464b5556ef3f7fd074b238383f3a68e6cff09746ad11). For the spectral law, guarantee and two-level example, selecting old/current line blocks from difflib.SequenceMatcher between that same archive and current files reconstructs bytes matching their immutable pre-reader SHA256 values exactly. This is a checked byte reconstruction, not assumed historical content. The example preimage already has the repaired pi<4 argument; its remaining defect is the out-of-domain negative kernel parameter. The spectral-law and guarantee preimages expose the missing phase representative/access hypotheses in addition to the reader-reported scope/Cauchy–Schwarz repairs. No historical uncertainty is asserted for these recovered carriers. The QSVT changes are supported by the reader's explicit parity/phase-source repair account and its exact post-reader raw hash; an exact complete preimage was not located, so no claim is made about every historical byte of that algorithm.

Next: the two examples and page summary; final local checks.

### Level 17: examples

`ex-qa-28-exponential-polynomial`: checked all three steps and twelve suppliers. The dilation squares to identity, its real reflected phase lists give 1 and -x, and LCU gives (I-iH)/2 at B=2. The spectral Taylor errors sum to 7/96 after normalization (5/162 at the second eigenvalue). These lists realize their targets exactly, so the amended matrix-function caveat is met. No repair; risk review complete.

`ex-qa-28-two-level-spectral-estimate`: accepted the canonical-representative repair of P_{-1/(4pi)} to P_{1-1/(4pi)}. The pre-reader kernel parameter violated its supplier's [0,1) domain despite periodicity of the underlying sum. Independently checked normalized masses 3/5,2/5; the explicit negative sine Taylor bound at 4 gives pi<4; Q eta=16/pi>4 gives tail<=1/6; the principal lift is strictly within the branch. The intervals are disjoint because 5/6>1/2 and the power-call sum is 127. This is a spectral-mixture guarantee, not concentration around a fixed eigenvalue. Risk review complete.

### Page and consumer dispositions

The touched A-page summary correctly distinguishes coherent postmeasurement state, kernel mixture, eigenstate-only median concentration and four parity-component QSVT. Its explicit certified-list or rational/exact-algebraic OP1 alternatives correctly replace an unspecified phase-generation step. Accept this repair. Item order within independent levels is compatible with its local dependencies.

For the reader-changed interfaces, inspected the actual direct uses: the median sampler's only result consumer is the estimation guarantee, which explicitly promises the prepared eigenstate and exact decoder; spectral-law consumers are the state-distribution justification, guarantee, two-level example and outside `lem-qa-30-spectral-minimum-shift`. All supply finite Hermitian systems and use the normalized kernel through its canonical representative. The outside shift lemma preserves one spectral index across coherent trials and derives its own schedule bound, so the fresh-preparation median definition does not force incorrect repreparation there. QSVT's result/example consumers supply bounded parity targets and keep implementation error explicit; the exponential example supplies exact lists of the right degree. Matrix-function theorem's outside Gibbs consumer assumes total vector error and does not invoke the corrected exactness clause. No outside surgical repair is necessary. Stable IDs are preserved; no withdrawal is proposed.

No defective published item was found. Published content was kept read-only; no published ledger entry or lock was needed. The outside draft robustness supplier polish alert above remains with its owner; its missing sentence has an explicit elementary closure, not an unmet substantial prerequisite.

## Review limits and engine boundary

This review checks the actual direct suppliers and the complete assigned proofs. It does not independently re-prove every transitive algebraic root-isolation implementation behind OP1. Read its current algorithm, correctness theorem and bound/model qualifications; the batch claims no unprovided finite Turing complexity. Exact source references consulted include Gilyén et al., https://arxiv.org/pdf/1806.01838, Lemma 22 PDF pp.23–24, through its complete cached text; other steps are derived locally from their linked statements rather than attributed to an unread external passage.

The live status command confirms this is an active Step-3 run with batch adjudications ongoing. It also reports the existing unrelated batch-12 construction identity blocker. No controller mutation, judging, decision stamping or gate cycle was initiated.

## Final dispositions and local checks

Eight obligations are recorded: median sampler `reviewed_no_defect` with `change_kind: audit_enrichment` (its prior eigenstate execution was sound; the generic preparation wording is clarification), spectral law/QSVT/page `accepted_repair`, matrix-function bound/estimation guarantee/two-level example `amended_repair`, and refuter:52:1 `confirmed_nonfatal`. Nine confirmed mathematical/interface/citation defects have closed ledger rows D001–D009, all owned at 3a-adjudicate. The contract-only reader change to the matrix bound initially enriched citations; its new substantive exactness-caveat repair is independently justified above. The two-level example's source is accepted unchanged, while its stale spectral-law contract quote was amended. All completed repairs have confidence 1.

The refuter's 03b06a9a3b126a2c8f3b9a4f789733c8c8548e590e1af94da23533f676869ad3 is retained as the scope's recorded observation fingerprint; it is not asserted to be the raw source hash. The actual pre-amendment guarantee source matches reader-post ccdb3b14cdd03088ebe34eb78a2f7477d776fd0543a8bec70ecea9a68930981a and contains the reported duplicate facts.

Checks actually run after the edits:

- Reflow: both edited theorem sources unchanged.
- Explicit two-item precheck: 2 checked, 0 failing.
- Strict owned-batch proof contracts: 7/7 checked, 0 errors, 0 warnings. An initial stale F1 quote in the two-level example was refreshed before this pass; that mechanical mismatch received no defect row.
- Owned-batch risk report before review and with --require-reviewed after review: 0 errors; all six critical entries have specific complete reviews.
- Explicit two-item rendercheck: both YAML and all math parse under the actual renderer/KaTeX.
- Final batched `node tools/proof-layout.mjs items/thm-qa-28-matrix-function-error-cost.md items/thm-qa-28-spectral-estimation-guarantee.md`: 2 items, 10 steps, 0 defects.
- Defect-ledger append validated the nine new rows and refreshed its generated view. JSON obligation identity/uniqueness is checked locally below; decision hashes are reserved for the engine.

No local mathematical escalation remains. The outside supplier polish alert and unrelated engine status blocker are reported above. No judging, stamping, certification or gate battery was performed.


## Root current-carrier metadata amendment

Original native mathematical acceptance remains above. Current source continuity and actual later contract/manifest maintenance are recorded in `research/quantum-computing-algorithms-60-2026-10-15-owner-step3-metadata-amendments/root-current-carrier-amendment.json`. The affected accepted-repair labels now honestly read amended_repair because the composite carrier differs from reader-post; no new execution, mathematical repair or historical observation is invented.
