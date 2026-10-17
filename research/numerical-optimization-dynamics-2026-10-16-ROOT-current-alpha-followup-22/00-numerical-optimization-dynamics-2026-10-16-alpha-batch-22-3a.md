# Batch 22 Step 3a adjudication

Run: `numerical-optimization-dynamics-2026-10-16`; group: `batch-22`.

Scope: seven touched obligations, no page, reader-finding or refuter-finding obligations. Reader and refuter artifacts both contain empty findings. Pre/post snapshots show item and contract changes for each touched item, with unchanged manifest fingerprints. Current mathematical carriers are reviewed independently; reader reports are evidence rather than verdicts.

## Completed items (dependency order)

### Level 0: lem-c1-ode-flow-on-common-tube

Accepted reader repair to Proof 1.2: extending the bounded continuous coefficient to an open interval permits continuation also when the maximal endpoint equals b. Checked steps 1.1–4.1 against the current eleven supplier statements. Convex K keeps comparison segments admissible; compactness bounds and uniformly controls D_y f. The nonzero-increment Gronwall remainder proves total differentiability uniformly in t; the second Gronwall comparison proves continuity of S. Endpoint extension of A and bounded S′ exclude maximal endpoints at b as well as before b. Empty U is vacuous; h=0 needs no division. Unique linear IVPs require no AC. Reader endpoint clarification accepted. Sources: current items named in its deps, specifically Volterra equivalence, Gronwall, Heine–Cantor, vector integral inequality, curve mean-value inequality, chain rule, local/maximal ODE existence and C1/derivative/Jacobian definitions. Bibliographic Verfürth is context; no external theorem is imported. Risk review complete.

### Level 1: prop-multiple-shooting-residual-zero-iff-bvp-solution

Accepted reader repair to Statement and steps 2.1–3.1. Explicit C1 segment curves and (s0,sN) in D_B make the joined object and boundary row well typed. Continuity rows identify endpoint values; both one-sided derivatives at a join equal the same f(t_i,y(t_i)), so the finite piecewise C1 curve is C1. Conversely restriction of a BVP and assumed IVP uniqueness annihilate every continuity row. Checked N=1, zero residual and both directions. Dependencies: current BVP definition and local Picard–Lindelof uniqueness statement. No AC.

### Level 1: prop-shooting-residual-zero-iff-bvp-solution

Checked both implications and uniqueness against the current BVP definition and Picard–Lindelof statement. For each queried s in U, the exact shot is explicitly C1, its graph is admissible as an IVP, and its endpoint pair belongs to D_B. R=0 therefore supplies the only missing BVP equation. Conversely IVP uniqueness identifies every BVP with initial s with that shot and its boundary row vanishes. Empty U is vacuous; no arbitrary-start existence or AC is inferred. Reader domain/regularity repair accepted. Sources: items/def-nonlinear-two-point-bvp-and-boundary-residual.md, items/thm-picard-lindelof-local-existence-and-uniqueness.md.


### Level 2: lem-midpoint-bvp-discrete-linearized-inverse

Checked Proof 1.1–4.1 and current midpoint/continuous-operator definitions, local and maximal ODE existence, Gronwall, chain rule and Euclidean completeness statements. Extending A by endpoint values justifies X through b. Kernel triviality implies Q=B1+B2X(b) injective and square invertible. Midpoint differentiation has factors I±hC_i/2; geometric inverses are bounded for small h. Uniform continuity gives normalized transfer defects o(1), whose h-weighted sum is o(1) since Nh=b−a; products are bounded by exp(C0(b−a)). Q_h converges to Q, so its inverse and the forced recurrence give a uniform block maximum norm bound. N≥1 and h>0; all midpoint evaluations lie in the open smooth neighborhood for small h. No AC or nonlinear convergence imported. Reader endpoint clarification accepted.

### Level 2: prop-midpoint-residual-zero-is-collocation

Checked all three proof steps against the normalized residual definition and BVP endpoint equation. h=(b−a)/N>0 permits multiplication and division in the two implications. Linear interpolation gives midpoint state (Y_i+Y_{i+1})/2 and constant slope (Y_{i+1}−Y_i)/h, so the equivalent wording is exact on every cell; no globally C1 or exact ODE solution is asserted. N=1 and zero rows work unchanged; D_h supplies all evaluation domains. No choice.

### Level 2: prop-multiple-shooting-residual-block-jacobian

Checked all steps and current chain-rule, common-tube flow, certified-evaluator and residual definitions. Each continuity row depends only on s_i and s_{i+1}; derivatives are DΨ_i and −I. Boundary derivatives occupy distinct columns 0 and N even for N=1. Domain and C1 are explicit hypotheses, with common-tube/evaluator facts only supplying the two map choices under their respective conditions. Numerical derivatives are for the numerical map. Dimensions are (N+1)d square; no invertibility or convergence is claimed. No AC.

### Level 2: prop-shooting-residual-derivative

Checked steps 1.1–3.1 using current chain-rule, total derivative, Jacobian, common-tube flow and evaluator interfaces. The derivative of s↦(s,Ψ(s)) applied to v is (v,DΨ(s)v), so DB gives D1B+D2B DΨ with correct dimensions and order. Continuous derivative entries establish C1. B is C1 on an open neighborhood of the entire graph; exact and approximate endpoint choices retain their own prerequisites. Numerical derivative is not identified with exact-flow sensitivity. Empty U is vacuous; no AC.

### Level 3: alg-multiple-shooting-for-nonlinear-bvps

Reviewed the full Definition and actual block-Jacobian, certified evaluator, finite-budget Newton and correction procedure definitions. Inputs require N≥1, open product domain, C1 boundary and endpoint maps, τ≥0 and M≥0. Each segment supplies its own exact numerical derivative. The explicit evaluator, residual, budget, singular and invalid-trial branches determine the finite procedure; M=0 checks the initial residual before budget exit and takes no correction. Status root-tolerance-met certifies only the computed residual. Repeated segment calls add no self-edge. No global convergence, exact BVP existence, exact joins or choice claim is made.

### Level 3: thm-midpoint-collocation-local-branch-and-error-budget

Checked Proof 1.1–4.1 and every current cited supplier statement. Coordinatewise C3 Taylor gives an O(h2) normalized defect and exact zero boundary defect. Bounded second derivatives act on two node blocks per row, so L_G and C_G are uniform in N despite the 1/h linear increment. Choose r independently of h for domain containment, K L_G r≤1/2 and 4K C_G r≤1/2, then h small for center displacement≤r/2. Closed block-norm ball is finite-dimensional, nonempty and complete; contraction gives the unique local root. The geometric inverse has norm≤2K; Taylor absorption yields distance≤4K epsilon_alg for every candidate in the ball. Convex interpolation preserves the nodal max bound, and coordinatewise interpolation (or its integral remainder) gives the Euclidean vector error h2 sup||y″||/8. Zero tolerance, endpoint nodes and fine-mesh restriction are retained. No global branch or Newton assertion and no AC. Reader coordinatewise/local-row Taylor clarification accepted.

### Level 3: ex-midpoint-collocation-has-two-branches

Checked all four verification steps and current BVP/residual/equivalence/procedure definitions. y′=0 forces constant curves; zero interior rows force constant node vectors and c2−1=0 gives exactly ±1 for every N≥1. At either root the homogeneous Jacobian enforces z_i=c and ±2c=0, hence a trivial kernel in a square system. Two simple branches do not contradict the local uniqueness theorem; the algorithm claims no global branch selection. No limiting-mesh or AC assumption is needed.

### Level 4: cor-local-newton-convergence-for-midpoint-bvp-collocation

Checked both proof steps, the current local-branch theorem, normalized residual and midpoint procedure, and the complete current updated-Jacobian Newton proof. For each fixed h, affine midpoint composition is C2 and bounded second derivatives on an interior closed Euclidean ball give its locally Lipschitz Jacobian. The branch supplies G_h(Y_h)=0 and an invertible derivative. Newton supplier requires a square map on an open domain, a simple root and a Lipschitz Jacobian on an interior closed ball; all hold. The basin may depend on h and no uniform Euclidean-dimension constant is claimed. M=0, root-tolerance stopping and budget stopping do not invalidate the assertion about attempted updates. No AC or global-start promise.

### Level 4: cor-local-newton-convergence-for-shooting-bvp-residual

Checked both proof steps, the full current single-shooting Definition, evaluator interface, derivative formula and updated-Jacobian Newton proof. C2 R alone would not provide the numerical endpoint differentiability needed by the algorithm; the repaired Statement explicitly assumes a successful exact evaluator with δ_IVP=0 on an open U and C1 B near its endpoint graph. Intersect that U with the residual neighborhood and choose an interior Newton ball; chain rule gives exactly DR. Simple root, square dimension and local Lipschitz DR meet the supplier theorem. Every attempted update stays valid; zero budget or tolerance stops remain possible. When L_R=0 the supplier estimate has C=0 and any larger positive C meets this corollary. No AC or arbitrary-start assertion. Reader interface repair accepted.

### Level 4: thm-shooting-residual-error-budget

Checked steps 1.1–3.1 and current Newton-remainder proof, BVP/evaluator/single-shooting/derivative/correspondence interfaces, Gronwall and scalar Taylor statement. Apply vector remainder with its evaluation point x=s* and other point x_*=s, then reverse sign; the symmetric Lipschitz estimate gives expansion at DR(s*) with L_R/2. Inverse norm gives ||DR(s*)e||≥σ||e||, and the stated radius condition absorbs at most half, including L_R=0 and e=0. Terminal Lipschitz comparison keeps the first boundary argument fixed and adds L_B δ_IVP to τ_root. Additional open common-tube C1 hypotheses justify Volterra/Gronwall and give e^{L(b−a)} initial-data amplification before adding δ_IVP. The first estimate does not rely on these extra trajectory assumptions. Reader r>0/open-neighborhood/tube clarification accepted. No global solver or AC claim.

### Level 5: ex-newton-shooting-fails-from-singular-start

Checked all verification steps and five current dependencies. The exact constant flow φ(t;s)=s is a C1 endpoint evaluator with zero trajectory error on every open neighborhood; the polynomial boundary map is globally C1. R=s2−1 has simple roots ±1, Lipschitz derivative 2s, and local Newton basins satisfying the repaired corollary. At s=0 with τ=0 and M≥1, residual −1 fails tolerance, budget permits a correction, and the zero scalar Jacobian cannot solve 0u=1, so singular-jacobian is the exact procedure outcome. For M=0 or τ≥1 that conclusion would differ, and these are explicitly excluded in Given. No arbitrary-start inference or AC.

## Consumer checks and local metadata correction

Searched all current items and library pages for the four reader-changed Statements (the two shooting correspondences, shooting Newton corollary and shooting error budget). Direct/reference uses are confined to this batch and its A page. The error budget uses the single-shooting correspondence only for an already-given exact BVP root; its additional tube hypotheses meet the repaired regularity premise. The singular-start example has the exact constant flow, smooth polynomial boundary map, zero-error evaluator, simple roots and Lipschitz derivative, so it meets every added corollary hypothesis. Neither correspondence requires another consumer repair; the A-page summary remains accurate. No further hop is triggered because no consumer Statement/Definition changes here.

The strict contract check found one stale F5 quote in the singular-start example contract, still mirroring the pre-reader shooting corollary. Replaced only this quote with the exact current Statement after the mathematical consumer check. This is contract audit enrichment, not an authored mathematical defect; no new obligation or defect row is invented for it. The earlier citation-fidelity heuristic reported no quote failure, while the strict contract matcher correctly rejected the stale mirror.

## Decisions and defect accounting

All seven touched obligations receive `amended_repair`, with `repair_confidence: 1`: the reader mathematics is retained, while each required contract risk_review replaces its explicitly pre-reader authoring record with independent current Alpha evidence. Each item has its exact post-reader bytes and differs from its pre-reader item fingerprint. Additionally, the two shooting correspondences, shooting Newton corollary and shooting error budget require manifest synchronization because their manifest Statement mirrors still omitted reader-added hypotheses. Those four manifest fields now reproduce the exact current Statements. Risk reviews and the separately noted consumer quote mirror were also updated; no item edits were needed. Decisions carry no engine-owned subject stamps. No historical byte reconstruction is claimed: the pre/post fingerprint comparison and reader repair account establish the change record, and mathematical acceptance follows independent review of the current carriers and their actual suppliers.

- `lem-c1-ode-flow-on-common-tube`: `numerical-optimization-dynamics-2026-10-16-3a-batch-22-D01`.
- `prop-multiple-shooting-residual-zero-iff-bvp-solution`: `numerical-optimization-dynamics-2026-10-16-3a-batch-22-D02`.
- `prop-shooting-residual-zero-iff-bvp-solution`: `numerical-optimization-dynamics-2026-10-16-3a-batch-22-D03`.
- `lem-midpoint-bvp-discrete-linearized-inverse`: `numerical-optimization-dynamics-2026-10-16-3a-batch-22-D04`.
- `thm-midpoint-collocation-local-branch-and-error-budget`: `numerical-optimization-dynamics-2026-10-16-3a-batch-22-D05`.
- `cor-local-newton-convergence-for-shooting-bvp-residual`: `numerical-optimization-dynamics-2026-10-16-3a-batch-22-D06`.
- `thm-shooting-residual-error-budget`: `numerical-optimization-dynamics-2026-10-16-3a-batch-22-D07`.

The ledger rows distinguish the two endpoint-continuation clarifications (polish), the rowwise Taylor justification (nonfatal), and the shooting regularity/domain/interface hypotheses. These are closed reader repairs, not new reader/refuter findings. The reader and refuter finding arrays remain empty.

The amended verdicts concern completion of the existing reader repairs across metadata carriers and current risk evidence, not an additional mathematical rewrite. Correspondence C1/boundary admissibility, the exact-evaluator/C1-B Newton interface, and the open-ball/common-tube error hypotheses are now explicit in both items and manifest. The three proof-only repairs need no manifest changes. Existing provenance, sources, IDs, dependency lists and proposed dispositions are retained.

## Sources and review limits

The evidence is the current authored proofs, exact immediate supplier Statements/Definitions and the cited sections described in the ordered item records above. Batch-3 Newton theorem/remainder and the published inverse-contraction supplier were also read in full where their argument was relevant. No unfamiliar external theorem was needed; no new external-source audit is claimed. The Verfürth, FNC and Hairer bibliographies remain context/provenance, not substitute proof premises. Risk review notes are specific to the current argument and are not judge stamps.

## Published findings and blockers

No defective published supplier was identified in the inspected prerequisite uses, so the published-consumer ledger needs no new row or lock. No local mathematical blocker or unresolved escalation remains. The frontier dependency ledger contains the owned-consumer review record and preserves existing entries. Read-only autopilot status confirms this is the active numerical run in Step 3a; its reported split-36 retry blocker lies outside this dispatch and was not altered. No agent dispatch, judge invocation, stamp, publication, stage transition or engine gate battery was performed.

## Local validation and handoff

- Precheck on all seven repaired item paths: 7 checked, 0 failing.
- One batched `node tools/proof-layout.mjs` invocation on those same seven explicit paths: 7 items, 26 steps, 0 defects. This was read-only; no item formatter or later item edit occurred.
- `node tools/proof-contract.mjs research/numerical-optimization-dynamics-2026-10-16-batch-22.proof-contracts.json --strict`: initially exposed the stale example F5 quote; after the documented mirror correction, 21/21 items, 0 errors, 0 warnings.
- `node tools/citation-fidelity.mjs research/numerical-optimization-dynamics-2026-10-16-batch-22.proof-contracts.json --fail-on-missing-quote`: 60 citations over 21 items, no missing quotes or widening candidates; this heuristic did not detect the stale mirror that the strict contract check caught.
- `node tools/content-policy.mjs research/numerical-optimization-dynamics-2026-10-16-batch-22.pages.json`: final manifest/content state, 21 scoped items, 0 errors, 0 warnings.
- Explicit-path rendercheck on all seven repaired items: every frontmatter block and math span parses, no hard rendering errors.
- Risk report was run before reviews and with `--require-reviewed` after all thirteen HIGH/CRITICAL reviews. The final required rerun and exact decision/ledger coverage check are recorded below.

Outputs are this report and the matching batch-22 decisions JSON, with exactly seven touched decisions and no invented finding/page obligations. Engine owns subsequent hashing and gate execution.

Final `risk-report --require-reviewed`: 0 errors, 21 items routed, all 13 HIGH/CRITICAL items have complete current Alpha reviews. Exact coverage check: 7/7 owed obligations, 7/7 matching closed 3a defect rows, all seven item byte hashes still match post-reader fingerprints, and no engine-owned subject hashes supplied. All local checks complete; next action belongs to engine collection/stamping/gates.
