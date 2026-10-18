# Batch 17 Step 3a adjudication

Run: `non-ml-math-remaining-81-2026-10-18`; group: `batch-17`.

## Dependency-order checkpoints

### Level 0: distortion supplier (batch 11, read only)

Independently read current Definition, its batch-11 manifest entry, and proof contract (no entry, appropriate for a definition). Current formula still sums 0 through n−1 without declaring block coordinates. Batch-17 consumer explicitly uses 1 through n. The routed reader/refuter observation is confirmed as an unresolved interface defect, not refuted by the consumer's self-contained corrected formula. Supplier pre-reader and routing fingerprints remain those in the scope file. Required owner action: batch 11 must explicitly declare zero-based blocks or use the run's 1-based coordinates, synchronize its manifest, and inspect actual consumers. No supplier edit or closure claimed. Decisions reader:17:1 and refuter:17:1 remain escalated; no fabricated closed defect row. No substantial mathematical lemma is missing: the missing prerequisite is a well-defined compatible block-distortion interface.

### Level 2: covering selection

Reviewed all four steps and exact cited definitions/type bounds. Row rounding on positive support gives a nonempty conditional type uniformly over source-typical blocks. Polynomial cardinality losses are dominated by the positive rate slack. The first-success conditioning law and conditional type uniformity follow by independence, including one-letter and zero-mass cases. No defect found; risk review complete.

### Level 2: random-bin packing

Reviewed all four steps, conditional fans and independent bin labels. The proof requires a sufficiently small fixed typicality tolerance, absent from the Statement's decoder specification. With k=1, binary U,S, probabilities (.4,.1,.1,.4), tolerance 2 includes independent marginal blocks with probability tending to one. At M=ceil(exp(.1n)), B=1 and eta=.05 the asserted rate condition holds (I(U;S)≈.1927), but the expected number of wrong tuples diverges on E_n. The complete local repair explicitly quantifies a sufficiently small positive tolerance. The existing proof already chooses it uniformly over finitely many changed subsets. Selection independence, dropping the changed-index indicator and bin collision probabilities are valid. Risk review completes after this quantifier repair; no new prerequisite or choice axiom.

### Level 4: Wyner–Ziv code Definition

Accepted reader repair: the explicitly declared coordinates and local d_n now agree. Finite nonempty alphabets, finite bounded distortion, natural rates, subsequence/limsup operational convention and U-X-Y are correctly stated. D_min is attained by U=X and a pointwise finite minimizer; a minimizing side-information-only map gives D_max. All five actual item consumers were opened: the cardinality lemma, continuity lemma, main theorem and two WZ examples. They use the finite test-channel definition and the normalized 1-based distortion; no further source repair is necessary. The batch-11 supplier escalation remains open.

### Level 5: auxiliary cardinality

Current item is identical to reader-pre/post; only its contract quotation changed. Reviewed every step. Linear dependence of (q_u,a_u) for more than |X|+1 weights preserves source marginal, total weight and distortion. Choosing the sign increases conditional entropy and hence decreases I(X;U|Y); boundary weights remove a label. Zero source rows are arbitrary and harmless. The assumed feasible channel ensures the final compact feasible set is nonempty. Finite decoder maps, entropy continuity at zero, Heine–Borel and extreme value give attainment. No AC. Contract-only touch is audit enrichment, reviewed_no_defect, defect_ids empty.

### Level 6: convexity and continuity

Accepted the reader proof repair, including the essential correction of the infeasible D<D_min branch to +infinity. Checked nonnegativity from ln(s)<=s−1, nested feasible sets, independent finite time sharing, the interior secant inequalities, compact nested sublevel sets at D_min and interpolation with the zero-rate channel at D_max. D_min=D_max gives the constant-zero feasible branch; singleton and zero-mass source laws cause no exception. Entropy is continuous at zero by the explicit 2 sqrt(t) bound, so the endpoint compactness argument is valid. The final proof is longer than strictly necessary but mathematically complete. Statement unchanged; no propagation required. Risk review complete.

### Level 7: Berger–Tung inner bound

Read all steps and actual cited suppliers. Separate codebooks meet the complementary-selection hypothesis. Backward tolerance selection makes each selected auxiliary jointly typical by conditional-type-uniform Markov typicality (the hypergeometric proof was read). Product test channels give H(U_S|X_S,U_Sc)=sum_i H(U_i|X_i), yielding precisely the required changed-subset exponent. Ceilings cost at most log(2)/n; alpha/3 is a common positive packing slack. One deterministic code controls the common exceptional event, hence all distortion coordinates simultaneously. Increasing blocklength diagonalization and finite time sharing give the boundary and convex hull. Singleton complement, deterministic laws and zero rates satisfy the same bounds. The source uses the packing lemma only at a sufficiently small tolerance in step 1.2, so no consumer repair is needed. Risk complete; no separate decision owed.

### Level 7: finite Wyner–Ziv theorem

Read all eight steps, including the interleaved converse and achievability. The converse uses W=f(X^n), U_i=(W,Y^{-i}), memorylessness to obtain U_i-X_i-Y_i, and conditional entropy monotonicity to obtain sum_i I(X_i;U_i|Y_i). Independent time index preserves the Markov condition and reconstructs the actual decoder output. Continuity closes the limsup converse, including D_min. Covering, type-uniform Markov typicality and independent bins apply to the exact stated source ensemble; the packing tolerance is already chosen small in step 1.2. Ceiling errors fit the positive slack. A finite deterministic realization and diagonal blocklengths attain the boundary, even I(U;Y)=0. No operational claim is imported from a citation. Reader changed only the contract quotation, so verdict reviewed_no_defect, audit_enrichment, defect_ids empty. Risk complete.

### Level 8: lossless and no-side-information examples

Berger–Tung: identity U_i=X_i gives zero Hamming distortion and all Slepian–Wolf inequalities, including S=[k]. Checked the matching direction too: any zero-distortion test channel has H(X_S|U_all)=0; since U_Sc-X_Sc-X_S, conditioning on X_Sc cannot increase H(X_S|U_Sc), giving I(X_S;U_S|U_Sc)=H(X_S|U_Sc)>=H(X_S|X_Sc). Thus the inner bound cannot enlarge the Slepian–Wolf region, including under convexification. The brief authored proof's omitted immediate inequality is nonfatal polish, not a false claim.

Wyner–Ziv lossless: zero expected Hamming distortion forces X=g(Y,U) a.s., so every feasible objective equals H(X|Y), attained by U=X. The Slepian–Wolf point (H(X|Y),H(Y)) satisfies every subset constraint. This compares rates, not an inference from vanishing letter error to vanishing block error.

No side information: deterministic Y makes reconstruction a function of U. Data processing gives the ordinary-infimum lower bound, while U=hat X realizes every ordinary feasible channel in the WZ definition. All units are nats and the definition permits arbitrary finite auxiliaries before cardinality reduction. Infeasible D gives two empty infima (+infinity). Only the reader's contract quotation changed; verdict reviewed_no_defect, audit_enrichment, defect_ids empty. All three risk reviews complete.

## Recorded decisions and history

Exactly seven routed decisions: two supplier escalations, two accepted reader repairs (repair_confidence=1), and three contract-only audit enrichments. Exact preimages for both source changes were recovered under `research/non-ml-math-remaining-81-2026-10-18-owner-stationary-coding-route-reconciliation/appendix-batch17-postdrain-quotes/before/items/` and match the immutable pre hashes. Current five touched source hashes match immutable post hashes. No historical-byte uncertainty is claimed.

Local packing repair decision (risk-only routed carrier, no invented eighth obligation): accepted complete quantifier repair, repair_confidence=1, closed defect `non-ml-math-remaining-81-2026-10-18-b17-3a-packing-tolerance`. Manifest Statement and both consumer contract source excerpts synchronized. Both actual item consumers were inspected and already choose a sufficiently small tolerance; no propagation or outside repair required. There is no prior judge stamp on this carrier. Closed reader repair rows: `non-ml-math-remaining-81-2026-10-18-b17-3a-local-block-distortion` and `non-ml-math-remaining-81-2026-10-18-b17-3a-infeasible-zero-branch`. Supplier open row: `non-ml-math-remaining-81-2026-10-18-b17-3a-block-coordinate-interface`; both escalated findings refer to this same causal defect. Escalated findings cannot honestly reference a closed row until owner repair/resolution.

## Sources and review extent

The mathematical arguments above were checked independently from the authored proofs, rather than accepted from the reader/refuter reports. Opened all routed carriers, both statistical coding helpers, the selected-codeword Markov proof, finite typical-set/type-class suppliers and every direct cited mathematical supplier statement used in the nine high-risk arguments. Checked the finite entropy/CMI/KL/chain-rule definitions and results; IID multisource and support/typicality model; both lossy and lossless coding conventions; Slepian–Wolf and finite data processing; and exact Heine–Borel/extreme-value hypotheses. This is not a proof audit of every deep foundational ancestor.

Authoritative comparison: [El Gamal–Kim notes](https://arxiv.org/pdf/1001.3404v3), Lecture 12 printed pp.16–17, 21–27 (PDF pp.301–307), finite WZ formula, covering/binning analysis, auxiliary converse and limiting step; Lecture 13 printed pp.4–13 (PDF pp.314–319), two-terminal inner bound, conditional Markov lemma, error exponents and time sharing. The notes' two-terminal statement is comparison evidence; the local k-terminal proof's finite-subset argument is independently reviewed above. [Wyner–Ziv 1976](https://www.mit.edu/~6.454/www_fall_2001/kusuma/wynerziv.pdf), Theorem 1 and remarks (printed pp.2–3), Appendix Theorem A2 (printed p.9), confirms the finite cardinality/attainment and convexity formulation. Its endpoint hypotheses do not replace the local compactness argument at arbitrary D_min. Web PDF screenshots failed (cache miss); extracted text supplied the relevant passages. A local pdftotext attempt was unavailable, so it supplies no evidence. No claim to have read the other bibliography books or Barros dissertation is made.

## Local validation and handoff

- `node tools/proof-contract.mjs research/non-ml-math-remaining-81-2026-10-18-batch-17.proof-contracts.json --strict`: 0 errors, 0 warnings, 11/11 checked.
- `node tools/risk-report.mjs research/non-ml-math-remaining-81-2026-10-18-batch-17.proof-contracts.json`: run before review; nine HIGH/CRITICAL carriers routed.
- Same risk command with `--require-reviewed`: 0 errors; all nine specific reviews complete.
- `node tools/tsx-run.mjs tools/reflow.mts items/lem-it-finite-random-bin-packing-bound.md`: unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-it-finite-random-bin-packing-bound.md`: PASS, 1 checked, 0 failing.
- `node tools/rendercheck.mjs items/lem-it-finite-random-bin-packing-bound.md`: OK, 1 file, actual YAML and KaTeX parse.
- After final item edit/reflow, `node tools/proof-layout.mjs items/lem-it-finite-random-bin-packing-bound.md`: 1 item, 4 steps, 0 defects.
- Defect ledger append tool validated and appended four rows (three fixed, one open); no false closure of supplier findings.

Only one item was edited by Alpha; the reader's two source repairs were retained. Published carriers remain read-only; no published defect was identified and no published ledger edit was needed. Frontier and owned cross-batch records retain the unresolved producer issue and prior evidence. Active run checked from `.autopilot/` status and current git log: native Step 3 is active, no control command issued. No judging, stamp, certification, publication, stage transition or engine gate battery was run. Owner action remains supplier-first resolution of batch-11 distortion coordinates; downstream local arguments are self-contained on the current bounded single-letter and normalized 1-based block definitions.

Engine handoff detail: the packing lemma was routed for substantive risk review but was not reader-touched, so the immutable scope owes no `touched:17:lem-it-finite-random-bin-packing-bound` decision. Its new closed local defect is recorded in the report and risk_review without adding an unauthorized eighth obligation. The engine/owner must register the self-detected repair's supplemental decision route before mechanical closure can own that ledger row. This is a routing follow-through requirement, not a claimed gate pass; the worker did not edit scope, snapshots or stamps. The two original supplier escalations likewise remain outstanding.


## Owner supplier repair addendum

The supplier now defines normalized distortion on explicit ordered 1-based n-tuples and gives the equal formula for every integer coordinate origin by i=a+t-1. This retains all existing zero-based stationary, shifted random-cut, 1-based IID and WZ uses, including extended nonnegative distortions, expectations and strict excess events. Only the finite maximum clause requires finite nonempty alphabets. Same supplier reviewer checked the complete45-item and8-page use closure and the exact final native consumer deltas; root independently verified the finite reindexing and maximum domain, guarded every55actual consumer/IID-context carrier, installed the source before its actual citation mirrors, and retained the current WZ local repair. No consumer mathematical source change is needed. The original producer snapshots/foreign observations, native report and runtime execution remain historical evidence; this focused repair/acceptance is explicitly root-owned.

Append-only fixed successor: `non-ml-math-remaining-81-2026-10-18-b17-3a-block-coordinate-interface-owner-fixed`. Current hashes are bound through native group stamping.
