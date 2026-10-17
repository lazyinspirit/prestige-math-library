# Batch 35 Step 3a adjudication

Run: `numerical-optimization-dynamics-2026-10-16`; group: `batch-35`.

Scope: eleven touched obligations, no page obligations, no reader/refuter findings. The original scope group `d` is unchanged. Review follows the generated item order. This report records local review, not judgment or certification.

Completed level 0: `lem-chebyshev-rkc-bounds-and-endpoint-derivatives`. Checked the complete proof and direct supplier statements: Chebyshev recurrence, multiple-angle identities, trigonometric range/zero/shift/addition facts, degree, derivative rules and induction. Both endpoint cases and indices 0,1,2 are sound; strict exterior growth is restricted to n>=1. Recurrence differentiation verifies both derivative formulas. No AC use. Alpha risk review recorded in the batch contract. No repair or decision owed for this unchanged item.

Level 2 review and historical comparison are recorded below.

Completed level 2: read all three changed algorithms and the linear RKC2/tableau definitions. Exact pre-reader item bytes recovered from `research/numerical-optimization-dynamics-2026-10-16-owner-step2-owner-final-binding-before/items/`; SHA-256 matches each pre snapshot. Diffs confirm procedural clarification of RKC1 nonautonomous execution, removal of true property assertions from RKC2/SSPRK definitions, and the coordinate-to-Frechet bridge in order-conditions step 1.1. These are sound expository/procedure enrichments, with unchanged recurrence, coefficients, domains and mathematical conclusions. No false mathematical preimage claim identified, so no confirmed defect row is manufactured. The four text changes are retained.

Order-condition proof reviewed coefficient by coefficient: fourth-order exact coefficients in the stated order are 1/24,1/24,1/8,1/24. Fixed finite tableau, compact convex tube and bounded derivatives supply uniform remainders. No necessity claim. Exact direct differentiability/Taylor/Banach/norm/IVP supplier statements checked; Alpha risk review complete.

Consumer discovery: all item references to the three algorithms are within batch 35 (the RKC stability and perturbation results, SSP result, nonlinear RKC2 theorem, and RKC examples). Their actual uses are reviewed below; no outside consumer requiring repair identified.

Completed initial level 3 items: perturbation convolution and Euler/midpoint/RK4 orders/stability reviewed in full, with exact spectral/linear/polynomial supplier statements. The U convolution handles s=1, rho=0, and both spectral endpoints; the triangular error sum and output scaling are sound. All RK4 coefficient sums and scalar stage expansions check; both directions of the Euler/midpoint interval equivalences hold. Alpha risk reviews complete. The perturbation carrier is unchanged; only its algorithm quotation was refreshed, so its touched verdict is reviewed_no_defect/audit_enrichment.

Completed `prop-rkc-stability-intervals-and-stage-degree`: verified nonlinear scalar/matrix recurrence cancellation, exact degrees, normalizations and spectral contraction. Zero initial state is handled polynomially. RKC1 real interval is exact; RKC2 interval is only certified. Alpha risk review complete; unchanged item and refreshed algorithm quote merit reviewed_no_defect/audit_enrichment.

Completed level 3: SSP tableau and four third-order sums derived directly from execution; convexity preserves C and bounds each stage functional by its initial value, under the exact FE premises at the three actual times. The time-kink example gives zero midpoint output and exact h^2/8; restricting to any small fixed tube still makes the defect/h^3 unbounded. Both Alpha risk reviews complete. SSP contract-only quotation change is reviewed_no_defect/audit_enrichment. No new defect found.

Completed `thm-nonlinear-rkc2-order-two-and-global-error`: found and repaired one nonfatal false intermediate equality in step 1.1. The bracket `6(j-1)^2-3(j-2)^2+6` is `3j^2`, so the numerator must be `3 b_j j^2`. The preceding recurrence, subsequent `(j^2-1)/(s^2-1)`, and Statement remain unchanged. The contract derivation mirror is corrected. No judge stamp was present; this is a single-factor correction, not a material rewrite. Provenance already records an AI-generated proof; manifest and contract interfaces remain valid.

Reviewed fixed-s increment and second-order expansions, shared scalar coefficient d_s=1/2, and both Lipschitz inductions. Reviewed the full current `thm-global-error-from-one-step-defect-and-stability` and its recurrence proof: p=2,C0=0, admitted common tube, and L_s=0/L_s>0 cases match. Compact convex tube inside the open domain has positive margin. Exact definition, Taylor, chain, Banach and exponential premises checked. Alpha risk review complete, no unresolved prerequisite.

Completed level 4 examples: exponential finite-product argument gives nonzero absolute error constants exp(-1)/2, exp(-1)/6, exp(-1)/120; all asymptotics are for h=1/N tending to zero. Nonnormal witness recomputes AA^T and A^TA and expands e2 to (2,1/2), norm sqrt(17)/2. Heat example has h*rho=100<=128, eight evaluations versus at least fifty Euler substeps, with no accuracy comparison. Equal prescribed errors at A=0 give epsilon*s(s+1)/2, including epsilon=0,s=1, and attain the reviewed bound. Both remaining Alpha risk reviews complete; the three RKC example texts are unchanged and only contract algorithm quotations changed. No further defects.

Sources consulted externally: [Almuslimani–Vilmart, Explicit stabilized integrators for stiff optimal control problems](https://www.unige.ch/~vilmart/paper_optimal_control_alm_vil.pdf), §2.2.1 equations (11)–(14), PDF pp.6–7, and §2.2.2 equations (16)–(21), PDF pp.8–9; [Sommeijer–Shampine–Verwer, RKC](https://ir.cwi.nl/pub/109/0109D.pdf), §2 equation (2.1), journal p.317. Checked the zero-damping specialization: w0=1, w1=3/(s^2-1), b_j=(j^2-1)/(3j^2) with b0=b1=b2=1/4. Literature distinguishes classical nonlinear recurrence (19) from linear-oriented recurrence (21); local items preserve that distinction. These source checks supplement the local proofs, and do not replace them.

Current status: all routed items and risk-only obligations reviewed. One nonfatal computation correction; no Statement/Definition changed by Alpha, no outside affected consumer repair, no published defect found, no escalation. Final local checks and decision coverage are recorded below.

Local checks completed after the final item edit:

- Reflow on `items/thm-nonlinear-rkc2-order-two-and-global-error.md`: unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-nonlinear-rkc2-order-two-and-global-error.md --json`: 1 proof checked, 0 failed, pass.
- `node tools/rendercheck.mjs items/thm-nonlinear-rkc2-order-two-and-global-error.md`: 1 file, no YAML/math/render errors.
- `node tools/proof-contract.mjs research/numerical-optimization-dynamics-2026-10-16-batch-35.proof-contracts.json --strict`: 18/18 items, 0 errors, 0 warnings.
- Risk report run before review and repeated with `--require-reviewed`: 18 items routed, 0 errors; all ten HIGH/CRITICAL Alpha risk reviews complete.
- Final required `node tools/proof-layout.mjs items/thm-nonlinear-rkc2-order-two-and-global-error.md`: 1 item, 6 steps, 0 defects.
- Owned batch cross-batch dependency rows updated with independent current interface evidence; `node tools/frontier-dependency-ledger.mjs refresh --run numerical-optimization-dynamics-2026-10-16`: refreshed and deduplicated.

Historical evidence: all eleven touched rows have exact archived pre-contract matches in `research/numerical-optimization-dynamics-2026-10-16-owner-final-metadata-preparation/final-r5-ready-after-all-references-20261016T1218/inputs/research/numerical-optimization-dynamics-2026-10-16-batch-35.proof-contracts.json`. Comparing these with current contracts confirms seven supplier-quotation refreshes and the order-condition derivation enrichment, plus Alpha risk reviews and the one corrected theorem derivation. All current touched item bytes match the post snapshot except the intentionally repaired theorem. No missing historical preimage or historical uncertainty.

Disposition: ten `reviewed_no_defect` decisions with `change_kind: audit_enrichment`, retaining the sound reader clarifications and seven contract quotation updates; one `amended_repair` for the theorem factor, `repair_confidence: 1`, referencing the closed row `nod-20261016-b35-rkc2-abscissa-factor`. The original true time-coordinate/tableau identities and omitted regularity bridge are elementary expository issues, not confirmed false mathematical claims; no artificial ledger defects are assigned to them.

Published findings: none. Blockers and owner decisions required: none. All eleven obligations are decided; no reader/refuter/page obligations were added. No judgment, stamping, agent dispatch, or gate battery initiated. Engine owns current hash stamps and gates.
