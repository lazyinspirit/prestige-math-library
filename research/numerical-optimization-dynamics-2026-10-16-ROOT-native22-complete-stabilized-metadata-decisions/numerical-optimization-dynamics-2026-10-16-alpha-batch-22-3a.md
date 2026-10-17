Current handoff: see the focused native continuation below. The original report follows verbatim as historical evidence; its original-session and then-current hash/check claims are not claims about this continuation.

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


## Focused native continuation: current-source review (2026-10-17)

This is a fresh focused continuation, not the original reviewer session. The preceding original report and its original validation claims are preserved as history; the archived originals are in `research/numerical-optimization-dynamics-2026-10-16-ROOT-current-alpha-followup-22/`. The root integration receipt records prior application, not independent mathematical acceptance. No original finding or D01–D07 is replaced.

Lower-level review checkpoint: read current common-tube lemma and both shooting correspondences. The endpoint continuation includes b, the common convex tube supplies the segment derivative bounds, and Gronwall controls the total-derivative remainder. Both correspondence directions use C1 curves and admissible boundary pairs; N=1 causes no joining problem and empty shooting U is vacuous. Their earlier dispositions remain retained. Read the complete new Volterra and vector-integral-norm suppliers. For the inverse lemma, use the extended coefficient on an open time interval and solve each column in dimension d; restrictions to closed cells have h>0 and meet the Volterra hypotheses. The unit-vector argument gives the operator integral bound without changing norms or introducing choice. Higher-level consumers and current local checks remain to complete.


### Supplier review completed

The current source is exactly the result of applying the four item text operations from `research/numerical-optimization-dynamics-2026-10-16-owner-step3-supplier22-volterra-proposal/proposal.json` to the actual archived root preimage `research/numerical-optimization-dynamics-2026-10-16-ROOT-suppliers17-22-integration/before-01-lem-midpoint-bvp-discrete-linearized-inverse.md`. This was checked by literal replacement and byte equality, without generating decision hashes or rebinding snapshots. The Statement is identical before and after. No source edit was necessary in this continuation.

For Proof 1.1, extend A by constant endpoint values to an open interval J. The column equation has continuous vector field F(t,z)=A(t)z on the open domain J×R^d and is locally Lipschitz in z. Local and maximal existence therefore apply. Every column is C1, so the full Volterra proposition gives its integral equation on any closed subinterval of its domain. The vector-integral inequality and Gronwall give ||X(t)v||₂≤exp(S_A(t−a))||v||₂ for each fixed v. Taking the operator supremum bounds X; bounded AX makes each column Cauchy at any proposed maximal right endpoint c≤b. Completeness gives a finite limit, and local existence at that limit, with uniqueness on the overlap, continues the solution. This includes c=b. Neither finite columns nor a universal unit-vector estimate requires AC.

For Proof 2.1, each cell [t_i,t_{i+1}] is an increasing closed interval with h>0 and at least two points. Apply the full Volterra proposition separately to each column with initial time t_i. For H=AX and any unit vector v, F9 applies to the continuous vector function (H(t)−H(m_i))v, giving the cell-average operator estimate after taking sup over v. All integrals are over increasing limits; no reversed-limit inequality is used. Put V_i=(X(t_i)+X(t_{i+1}))/2. Then ||V_i||≤S_X and ||V_i−X(m_i)||≤omega_X(h/2). Splitting the defect as

    eta_i = [average(H)−H(m_i)] + [A(m_i)−C_i] V_i + A(m_i)[X(m_i)−V_i]

gives exactly omega_H(h/2)+delta_h*S_X+S_A*omega_X(h/2). Compact continuity makes both moduli vanish, and step 1.2 gives delta_h→0. This is an operator-norm bound, without a dimension-changing norm substitution.

For completeness, write Z_0=I, Z_{i+1}=M_i Z_i, E_i=Z_i−X(t_i). The exact sampled recurrence gives

    E_{i+1}=M_i E_i−h (I−h C_i/2)^(-1) eta_i,    E_0=0.

The inverse factor is bounded by 2 and every transition product by exp(C0(b−a)). Thus max_i||E_i||≤2 exp(C0(b−a))(b−a) max_i||eta_i||→0, proving M_h→X(b). The remaining Schur-complement and forced-recurrence steps retain the square dimensions, kernel-triviality argument and uniform block maximum inverse bound. The earlier D04 endpoint repair remains sound and separate from this later citation/explication omission.

Exact sources read for this closure: complete `items/prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation.md` (Statement, L1–L3 and both proof directions) and complete `items/thm-norm-inequality-for-the-vector-valued-integral.md` (Statement, L1–L10, integrability proof and zero-integral case). Also checked the actual local/maximal ODE, Gronwall, chain-rule and completeness Statements and the current midpoint and continuous-operator Definitions. No external bibliographic assertion is a substitute premise, and no external-source audit is claimed. The unfamiliar-source escalation rule was not triggered by this elementary finite-dimensional argument.

### Remaining current obligations and risk evidence

The initial focused source inspection opened the inverse lemma before the lower-level common-tube and correspondence carriers. This was an order deviation, not a fully topological first pass. The lower-level carriers were then read and their conclusions settled before completing the inverse and higher-level reviews. All routed current proofs, their actual immediate supplier statements and the relevant current Newton/remainder arguments were inspected. The existing specific risk records are retained; the inverse lemma's risk record is extended with the new independent F8/F9 and propagation review. No original derivation, score or citation quote was discarded.

| Level / carriers | Current independent conclusion |
|---|---|
| 0 / common-tube lemma | Compact convex K bounds and uniformly controls D_y f; the flow difference and total-derivative remainder obey Gronwall. Endpoint continuation includes b. Original D01 retained. |
| 1 / multiple and single shooting equivalences | Explicit C1 curves and admissible boundary pairs support both implications and trajectory identity. N=1 and empty U are harmless. D02/D03 retained. |
| 2 / midpoint inverse | F8/F9 license 1.1 and 2.1 as above; the original endpoint repair is retained. |
| 2 / midpoint correspondence, block Jacobian and shooting derivative | h>0 allows both residual implications. Derivative blocks are DΨ_i and −I, with distinct endpoint columns also at N=1. Composition with (s,Ψ(s)) gives the stated derivative; numerical sensitivities remain derivatives of the numerical map. |
| 3 / multiple-shooting algorithm | Input domains and C1 maps support the square residual/Jacobian. Failure, tolerance and budget checks precede updates as specified; no convergence claim is attached to its instructions. |
| 3 / midpoint branch theorem and two-branch example | Coordinatewise scalar Taylor with fixed d and two-node row locality gives mesh-uniform consistency and remainder bounds. The complete-ball contraction, inverse perturbation and absorption give the stated local error. For f=0 and B=y₀²−1, only constant ±1 roots occur and their square Jacobians have trivial kernel. D05 retained. |
| 4 / two Newton corollaries | Fixed-mesh Euclidean dimension is finite; the residual is C2 with locally Lipschitz derivative and simple root. The current updated-Jacobian theorem supplies the basin. The shooting neighborhood is intersected with the successful exact-evaluator neighborhood and admissible C1 boundary graph. At L=0 a larger positive estimate constant is permissible. D06 retained. |
| 4 / shooting error budget | Apply the current vector remainder with evaluation point s* and other point s, reverse its sign, and absorb using (L_R/2)r≤sigma/2. Endpoint comparison keeps the first argument fixed. The additional common-tube hypotheses justify the separate Volterra/Gronwall trajectory estimate. D07 retained. |
| 5 / singular-start example | Constant exact flow is a successful zero-error evaluator with smooth boundary map. At s=0, zero tolerance and at least one allowed correction force a singular-Jacobian return; the simple roots ±1 still have local Newton basins. |

The scope currently has seven touched obligations and no finding or page obligations. It contains no `stabilizedObligations` property. Comparing the existing immutable reader-post fingerprints with pre-3a shows a source delta only for the inverse lemma among those seven carriers; its guarded source change is independently reviewed above. The other six decisions are preserved exactly. No extra stabilized obligation was invented and no immutable input was modified. The amended inverse decision preserves its full original decision under `prior_decisions` and in the original archive, retains D04, and adds D08 with repair_confidence 1.

### Consumer closure and defect handoff

A focused current items/library reference search finds exactly two theorem consumers and the owning A-page item list. `thm-midpoint-collocation-local-branch-and-error-budget` F3 and Proof 2.1, 3.1, 4.1 use the unchanged sampled inverse bound under the same C2/C3 and continuous-invertibility assumptions. `thm-periodic-midpoint-collocation-error-budget` F2 and Proof 2.1/3.1 use its explicitly supplied K bound; the lemma is context for that same interface. Their conclusions, Statements and proofs remain untouched. The A-page only lists the supplier. No new consumer prerequisite or further propagation is needed; no cross-batch source was written.

The actual reader-63 report section “Defect not editable in this batch”, reader-findings-63 /findings/0 and refute-63 /flagged/0 identify the same nonfatal 2.1 omission on the prior c1298c… source. Their judgments remain consumer-owner obligations `reader:63:1` and `refuter:63:1`. Existing ledger D09 (batch 63) records that consumer disposition. Newly appended `numerical-optimization-dynamics-2026-10-16-3a-batch-22-D08` records the actual supplier-side source-repair completion, explicitly relates D09, and is referenced by the amended touched decision. It does not assert another independent mathematical defect, supersede D09, or rewrite D04. All original rows remain immutable history. No defective published supplier was found; no published edit or ledger lock was needed.

Root mechanical handoff, exact targets: the amended `research/numerical-optimization-dynamics-2026-10-16-alpha-batch-22-3a-decisions.json` entry `/decisions/3`, obligation `touched:22:lem-midpoint-bvp-discrete-linearized-inverse`, verdict literal `amended_repair`, defect IDs D04 and D08; current contract `/contracts/lem-midpoint-bvp-discrete-linearized-inverse/risk_review/notes`; appended shared ledger row D08. Root prior application is evidenced by the seven-operation proposal and integration receipt above, not an invented typed authorization. If native binding requires `prior_applied` or shared-history authority, root must supply that typed authority for these exact targets and retained D09 relationship. This review does not fabricate it, run binding, or dispose the foreign findings. The append used the canonical ledger tool with `--no-render`; root owns the subsequent shared generated-view refresh and native collection.

### Actual local checks in this continuation

- `node tools/risk-report.mjs research/numerical-optimization-dynamics-2026-10-16-batch-22.proof-contracts.json`: 0 errors; all 21 routed, including 13 HIGH/CRITICAL records.
- After updating the affected risk evidence, the same command with `--require-reviewed`: 0 errors, all required reviews complete.
- `node tools/proof-contract.mjs research/numerical-optimization-dynamics-2026-10-16-batch-22.proof-contracts.json --strict`: 21/21 items, 0 errors, 0 warnings.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-midpoint-bvp-discrete-linearized-inverse.md`: 1 checked, 0 failing.
- `node tools/rendercheck.mjs items/lem-midpoint-bvp-discrete-linearized-inverse.md`: valid frontmatter and every math span parsed under real KaTeX, no hard errors.
- Final single explicit-path `node tools/proof-layout.mjs items/lem-midpoint-bvp-discrete-linearized-inverse.md`: 1 item, 5 steps, 0 defects. No later item edit or formatter ran.
- Literal guarded-proposal reconstruction equals current source and preserves its exact Statement. Existing fingerprint comparison and seven-decision inventory were inspected without stamping or changing snapshot files.

Mathematical review is complete with no unresolved local gap. Outputs retain version 1/group batch-22 and exactly seven decisions. No judge, agent dispatch, scope checker, stamp, full battery, control transition, commit, publication or push ran. Root owns current hash binding, any required typed historical authority, shared view regeneration, and engine transitions.
