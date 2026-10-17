# Batch 9 Step 3a adjudication

Run: `numerical-optimization-dynamics-2026-10-16`; group: `batch-9`.

## Progress and evidence

Reviewed the exact dispatch, generated item order, scope, reader report/findings, refuter report and batch manifest. All 14 per-item pre/post hash records are identical: the reader made no carrier repair. Four routed finding obligations are owed; no touched or page obligation is owed.

### Level 0: Milstein definition

`refuter:9:1`: confirmed fatal. The original maps allowed sigma(x)=|x| at zero, where the scalar derivative is undefined. Added precisely differentiability of each diffusion field and marked statement provenance ai-altered. All expressions Dsigma_j sigma_i now exist. Brownian iterated integrals have predictable integrands of finite energy h²/2; AC is inherited from the L² integral interfaces. Symmetric/antisymmetric decomposition is finite reindexing; commutative reduction uses the separately proved product identity. No sampler accuracy or cost is asserted. Complete risk review recorded.

Consumer check: `lem-iterated-brownian-integral-identities` uses only Brownian integrals and differentiable-field commutativity; `lem-bounded-sde-increment-moments`, `lem-milstein-local-defect-bounds`, `thm-commutative-milstein-strong-order-one`, and `thm-milstein-mlmc-level-variance-and-cost` assume C_b³; `ex-geometric-brownian-milstein-update` and `ex-noncommuting-two-noise-milstein-area` have smooth linear fields; `ex-scalar-multiplicative-noise-milstein` has sine diffusion. All eight actual uses remain sound. The only page reference is the owned A-page inventory. No affected outside consumer found; manifest identity/deps/title remain accurate.

Sources read locally: `def-continuous-brownian-ito-process` Definition clauses 1–7, `def-ito-integral-for-square-integrable-predictable-processes` Definition clauses 1–5, `thm-ito-isometry-and-linearity-in-predictable-l2` Statement and proof, and `def-axiom-of-choice` Definition. No published defect identified.

Checkpoint completed below in generated dependency order.

### Remaining level 0 and level 1

Completed event-weighted isometry, bounded SDE increment moments, iterated Brownian product identities, and geometric Brownian example in generated order. Each current proof and its cited local statements were read. Indicator multiplication commutes with the L² integral by elementary approximation. Stopped fourth-moment Itô drift and an integrating factor yield Cr² independently of the stopping radius; Fatou removes stopping, including r=0 and null events. Finite dimension factors in second-moment bounds are harmless constant bookkeeping. Product Itô yields I_ij+I_ji=ΔW_iΔW_j−δ_ij h; centered normal moments give the scalar variance h²/2 and zero mixed moment. The geometric exponential solves the SDE and its linear diffusion has derivative ν; no bounded-coefficient rate is asserted for that example. All four risk reviews complete; no repair needed.

Exact local source statements additionally read: `def-continuous-time-filtration-and-all-pairs-martingale`, `def-elementary-predictable-brownian-integrand`, `def-ito-integral-of-an-elementary-predictable-process`, `thm-multidimensional-ito-formula-for-brownian-driven-processes`, `thm-ito-integral-process-has-a-continuous-martingale-version`, `thm-fatou-lemma`, `def-standard-normal-and-normal-laws`, and `def-conditional-expectation-given-a-sigma-algebra`.

Checkpoint completed below at level 2.

### Level 2: local Milstein defect

`reader:9:1`: confirmed nonfatal. The derivation for step 2.1 cites a later step 3.1, and its AC worksheet includes nonexistent 2.2 and 4.1. Removed the later input and set AC uses to the six actual steps (direct uses in 1.1–1.4, inherited use through 2.1, final declaration in 3.1). The item prose also said “steps 1.2--3.1”; corrected this to 1.2--1.4, matching its already-correct trailing tags, and mirrored the claim in the contract. Proof provenance is ai-altered; no judge record existed to invalidate.

Independent proof review: C_b³ bounds L₀b and L₀σ and makes Lᵢσ globally Lipschitz. The exact nested expansion splits R_b,R₀,R₁. Event-weighted isometry gives each second moment Ch³P(A), the drift mean is Ch², and the outer stochastic terms have zero conditional mean. The event-integral characterization supplies the claimed almost-sure conditional inequalities uniformly in the initial state. Conditional-expectation existence/order and all cited stochastic suppliers were checked. Complete risk review recorded; Statement and downstream interface unchanged.

The next two level-two findings are completed below.

### Level 2: additive Heun weak order

`reader:9:2`: confirmed nonfatal. Replaced nonexistent AC step 2.2 with the actual inherited use at 1.1 and explicit declaration at 3.1. No item edit required.

Read the global proof, additive Heun definition and complete one-step lemma. The moment expansion matches L and L²/2 through h²; bounded mixed spatial-sixth and time-third derivatives control h³ remainders. Gaussian odd-moment cancellation is used before estimating remainders. The theorem explicitly assumes the smooth bounded classical backward solution rather than asserting PDE existence. Its uniform one-step estimate integrates over the independent product law of (Y_n,ΔW_n); N terms telescope to TCh². Terminal and deterministic-start identities identify the exact error. Zero diffusion reduces to deterministic Heun; constant payoff has zero error. Complete risk review recorded. No supplier or consumer repair needed.

The area review and correction follow below.

### Level 2: noncommuting area

`reader:9:3`: confirmed nonfatal. The item correctly proves the unconditional residual second moment E|I₁₂−UV/2|²=h²/4. Its contract incorrectly calls this a constant conditional variance. Relabelled the finite-check name and expected key as the unconditional residual second moment, retaining the proved quantity and conditional mean UV/2. No item edit required.

Independently checked the Gaussian conditional-density computation, left-sum L² convergence, L¹ contraction and projection orthogonality. Degenerate s=0,h and full-length partition cell are treated separately. The strictly positive residual proves I₁₂ is not determined by endpoints. Smooth linear fields satisfy the repaired definition; no bounded-coefficient convergence or sampler cost claim is made. Complete risk review recorded.

For independent source confirmation, read [Jurek, §1, PDF p. 1](https://arxiv.org/pdf/1009.3544), opening formula for A_h=I₁₂−I₂₁ conditional on B_h=(U,V). Expanding z/sinh(z)=1−z²/6+O(z⁴) and z coth(z)−1=z²/3+O(z⁴) gives Var(A_h|U,V)=(h²+h(U²+V²))/3. Since I₁₂−UV/2=A_h/2, its conditional variance is (h²+h(U²+V²))/12, with expectation h²/4. This confirms the contract distinction without changing the source proof.

The higher-level risk reviews follow below.

### Level 3: strong order one

Read the current theorem, actual local-defect and Brownian-identity suppliers, and complete local-to-global recurrence proof. Bounded derivatives make b, σ and Lᵢσ Lipschitz. Centered Gaussian linear/quadratic factors yield the martingale-error variance Ch E|e_n|²; the signed local mean is O(h²) and centered remainder second moment O(h³). L² finiteness follows by induction from X₀∈L², and zero conditional means imply orthogonality to known L² vectors by truncation. The recurrence uses Young’s inequality for the cross term and a finite geometric sum, with identical constants on each grid prefix. Scalar-noise and zero-diffusion cases agree. Complete risk review recorded; no repair needed.

The final level-four reviews follow below.

### Level 4: MLMC and sine example

Completed both remaining risk reviews in generated order. The MLMC proof checks α=1, β=2, γ=1 against the exact published complexity statement, including the level-zero variance envelope, finite coarser levels h>1, square integrability, shared Brownian coupling and bounded work per coefficient/derivative evaluation. It uses an infinite compatible hierarchy restricted to finite L with independent sample blocks. Lipschitz bias is Ch and correction variance Ch² by the two strong errors against the same exact endpoint. No area sampler is silently priced.

For σ(x)=sin(x), all C_b³ hypotheses hold, initial value is deterministic L², and σσ′/2=1/4 at π/4. Centered Gaussian moments yield correction variance h²/8 and zero covariance with linear noise, so total increment variance is h/2+h²/8. The explicit grid and initial-value hypotheses allow the current strong theorem. No repair needed.

Read the exact statements of `def-mlmc-hierarchy-and-coupled-corrections`, `thm-mlmc-complexity-under-rate-assumptions`, `cor-cauchy-schwarz-for-random-variables`, `thm-conditional-expectation-is-the-l2-orthogonal-projection`, and `def-filtration-and-filtered-probability-space`. Cross-batch dependency artifact is empty. No defective published item, missing prerequisite, withdrawal or outside consumer repair found. All 11 required risk reviews are complete.

All four closed defect records, four decisions and focused checks are complete as recorded below.

## Closed records and outputs

Exactly four decisions are recorded in `research/numerical-optimization-dynamics-2026-10-16-alpha-batch-9-3a-decisions.json`, with one closed `caught_at_stage: 3a-adjudicate` defect row each and `repair_confidence: 1`:

| Obligation | Verdict | Defect ID suffix (run prefix omitted) |
|---|---|---|
| refuter:9:1 | confirmed_fatal | batch-9-milstein-differentiability |
| reader:9:1 | confirmed_nonfatal | batch-9-local-defect-step-references |
| reader:9:2 | confirmed_nonfatal | batch-9-heun-ac-step-reference |
| reader:9:3 | confirmed_nonfatal | batch-9-area-residual-moment-label |

All records have disposition `fixed`. The standard ledger append tool serialized the append and refreshed its generated view. Its initial input-shape rejection (`file` instead of required evidence `path`) wrote no row; the corrected append succeeded with four rows. No mechanical-failure defect was created. The current observations are ordinary bound in-flight findings; no unbound historical disposition or owner authorization was needed. No historical finding is dismissed on the basis of repaired current bytes.

Only two item sources changed: the Milstein definition and local-defect proof citation range/provenance. The batch proof contract carries the three reader corrections, all required risk reviews and eight refreshed exact Definition quotes. Manifest IDs, titles, kinds and dependencies remain accurate and unchanged. The first focused contract check exposed stale quote mirrors after the definition change; all eight mirrors were synchronized, and the complete 14-item strict contract check then passed. These mechanical mirror updates belong to the differentiability repair and create no additional routed decision or defect row.

Owned consumer dispositions were appended to `briefs/tasks/frontier-dependency-ledger.md`. No published defect was found, so the published consumer/supplier ledger was not edited. No published item was edited. No new page, pair, dependency edge or withdrawal was introduced.

## Sources and limits

Read [Higham, §6, equation (6.1)](https://epubs.siam.org/doi/full/10.1137/S0036144500378302), which explicitly uses the diffusion derivative in the scalar correction. This supports the differentiability requirement and update convention. The rate arguments were checked from the complete authored proofs and exact local suppliers, rather than inferred from Higham’s numerical examples.

Read Jurek’s exact conditional characteristic function as cited above. Local prerequisite statements and applicable conventions were read for every cited dependency of the routed/high-risk items, including the full in-batch one-step Heun and RMS recurrence proofs. [Lawler, §§3.2.2–3.2.3](https://www.math.uchicago.edu/~lawler/finbook.pdf), Propositions 3.2.1 and 3.2.3 and the L² approximation passage, additionally support the integral conventions. The external Tretyakov URL returned HTTP 403; its precise page-level assertions were not independently verified. Kloeden–Platen’s exact printed-page locators were not independently verified in this dispatch. No missing result from either source is used as an unproved premise: the needed arguments are authored locally, and their actual hypotheses were checked. No mathematical uncertainty remains for the assigned obligations.

## Local validation and handoff

- `node tools/risk-report.mjs research/numerical-optimization-dynamics-2026-10-16-batch-9.proof-contracts.json`: 14 routed, 11 HIGH/CRITICAL identified; complete specific reviews subsequently written for those 11 items.
- Same command with `--require-reviewed`: 0 errors, all 14 routed items checked.
- `node tools/tsx-run.mjs tools/precheck.mts items/def-milstein-scheme-and-iterated-integrals.md items/lem-milstein-local-defect-bounds.md`: 1 proof checked, 0 failing; definition has no phase proof.
- `node tools/rendercheck.mjs` on those same two paths: both passed YAML and actual KaTeX parsing.
- `node tools/proof-contract.mjs research/numerical-optimization-dynamics-2026-10-16-batch-9.proof-contracts.json --strict`: 14/14 checked, 0 errors, 0 warnings after quote synchronization.
- Final item layout command, after the last item edit: `node tools/proof-layout.mjs items/def-milstein-scheme-and-iterated-integrals.md items/lem-milstein-local-defect-bounds.md`: 2 items, 6 steps, 0 defects. No later item edits or formatter runs occurred.

No local blockers or escalations. Engine-owned decision hashes, judging, gate battery and stage transitions remain for the engine; none was initiated or claimed here.
