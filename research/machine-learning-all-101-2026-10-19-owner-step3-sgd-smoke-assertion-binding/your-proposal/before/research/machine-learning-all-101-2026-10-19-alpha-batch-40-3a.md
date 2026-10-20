# Batch 40 Step 3a adjudication

Run: `machine-learning-all-101-2026-10-19`. Group: `batch-40`. Covers: 40.

## Dispositions

Exactly five routed obligations are decided in the companion JSON: four touched carriers and one flagged refuter finding. There are no reader findings, page obligations, in-run producer findings, escalations, or proposed withdrawals in this dispatch.

| Carrier / obligation | Verdict | Evidence |
| --- | --- | --- |
| `lem-independent-finite-random-index-extension` | `reviewed_no_defect`, metadata | The sole reader delta corrects the source locator to Theorem 2.1(a). The explicit finite extension and integral identity are sound. |
| `thm-nonconvex-sgd-random-iterate-stationarity` | `reviewed_no_defect`, metadata | Reader changes only source-title/locator numbering to Theorem 2.1(a) and Corollary 2.2. Current weighted theorem, proof and zero cases are sound. |
| `ex-constant-step-sgd-noise-floor` | `amended_repair`, confidence 1 | Retain the necessary “can have” title qualification, synchronize the manifest title, and repair the finite-prefix conditional-moment licensing gap. |
| `refuter:40:1` | `confirmed_nonfatal`, confidence 1 | Old Verification 1.1 used AC-based F5/F6 despite the explicit restriction of AC to the comparison steps. Finite atom averages now establish the required identities directly. |
| `ex-empirical-risk-sgd-oracle-is-unbiased` | `accepted_repair`, confidence 1 | Retain explicit deterministic initial parameter, sampling law, coordinate indices, past-batch filtration and exact update; distinguish Q from the population law. |

## Historical and current carrier evidence

Both immutable snapshot JSON files were compared with authenticated complete pre-reader and reader-post archives. For all four touched items, SHA-256 of the archived raw bytes equals the corresponding snapshot `hashes[id].item_sha256`. These are raw hashes, not `itemHashGuard` hashes. The two locator-only current files and the empirical-risk current file still equal their reader-post archives. The noise-floor proof is the sole item edited by this adjudicator.

The original refuter binding `e2ba0816830f7213e67328b996e9be32308789c5cc41df3a6af9cfb6ada3e399` was reproduced from the canonical sorted post-reader fingerprint object (item, contract and manifest hashes). Its archived item raw hash is `14862fc72a8b9060aeb583ee397076c00267ea9e177c0115fb7d9b60bb843adc`. The finding describes those bytes accurately; no historical uncertainty or owner resolution is needed.

Closed ledger rows, all owned at `caught_at_stage: 3a-adjudicate`:

- `ml101-b40-3a-noise-title`: the original universal title fails for the admitted b=σ=0 case, whose floor is zero.
- `ml101-b40-3a-finite-prefix-choice`: the nonfatal AC citation gap, referenced by exactly one flagged decision and also by the amended touched decision.
- `ml101-b40-3a-empirical-initialization`: missing deterministic initialization/conditioning data needed for the stated theorem application.

No ledger row was created for source-metadata normalization or for the temporary contract-input synchronization error encountered during local checking.

## Mathematical review and risk

The initial risk report routed all seven proof carriers as CRITICAL. Each item was reviewed in the generated order, and its complete specific `risk_review` was saved before adjudicating a higher-level item. The following are independent current-proof checks, not acceptance based on reader/refuter verdicts.

- `lem-independent-finite-random-index-extension`: Read all six proof steps and the seven current supplier statements. The finite-slice sigma-algebra has unique slices; finite sums commute with increasing limits, giving countable additivity even when some p_k=0. Indicator integrals, increasing simple approximation and MCT give the nonnegative identity (zero weights contribute zero); positive and negative parts give integrability. N=1 and arbitrary null slices work, and only finitely many approximations are selected, so no AC is used. Ghadimi–Lan §2.1, Theorem 2.1(a), equations (2.3)–(2.4) confirms the corrected locator; the extension is proved locally, not imported from the paper. No diagram or uninterrupted-statement defect.

- `lem-sgd-trajectory-integrability`: Reviewed all four proof steps, smoothness supplier proof and exact Euclidean/expectation/induction supplier statements. The bound ||u+v||²≤2||u||²+2||v||² propagates second moments for every finite real stepsize. Lipschitz gradient gives linear gradient growth. Applying descent in both orders gives the stated conservative 3L/2 lower-growth bound and an integrable absolute objective bound. L=0, zero directions, N=1 and the terminal k=N are covered; measurable compositions follow from continuous f and gradient. No conditional expectation or AC is used. Bottou–Curtis–Nocedal §4.1 Assumption 4.1 and Lemma 4.2 provide context; finiteness itself is proved locally. No diagrams or statement links.

- `thm-nonconvex-sgd-random-iterate-stationarity`: Reviewed every proof step and every cited dependency statement, including the published uniform-output comparison. Finite-horizon second moments license gradient-direction products and unbounded-factor conditioning. Conditional unbiasedness plus vector variance gives E(||G||²|F)≤||g||²+σ²; descent telescopes using only the finite global infimum, without attainment. a_k=γ_k(2−Lγ_k)>0 for the strict interval, so independent finite-index weighting is valid. Recomputed both clipping branches, σ=0, D_f=0<σ, D_f=σ=0 and N=1; all bounds hold, including the weaker advertised sum. AC is explicit for conditional classes, not for adding the finite selector. Theorem 2.1(a) and Corollary 2.2 locators match Ghadimi–Lan §2.1; the actual conditional hypotheses are explicit locally. No diagram or statement-link defect. Reader edits affect source metadata only.

- `thm-stochastic-direction-expected-average-stationarity`: Reviewed all four proof steps against the exact current conditional-expectation, variance, unbounded-factor, tower, filtration, Euclidean and integrability suppliers. Coordinate products are L1 by second moments; the mean-norm and variance hypotheses imply the needed second-moment bound M+M_G||g||². Positive alignment then gives the descent coefficient μα−LM_Gα²/2, at least μα/2 including the endpoint. Only the pathwise lower bound at iterates is used. For diminishing steps, square summability implies α_t→0, so a tail satisfies the threshold; its starting objective and omitted finite prefix are integrable, and division by A_T→∞ proves exactly weighted expected stationarity. Checked M=0, M_V=0, stationary/zero-gap cases, T=1 and absence of convexity/attainment or iterate-convergence claims. AC is stated. Bottou–Curtis–Nocedal §§4.1/4.3 full relevant lemmas and Theorems 4.8/4.10 agree; MIT L15.1 is only unbiased context. No defect, diagram, or statement links.

- `ex-constant-step-sgd-noise-floor`: Read all six Verification steps and exact current supplier statements, including both published SGD bounds. Confirmed refuter:40:1: old 1.1 used AC-based class/variance definitions before the promised AC branch. Repaired by explicit averaging on every positive-mass prefix atom and event-integral identities, computing centered second moments directly; 2.1 uses the resulting finite cross-term cancellation, and 2.2 identifies classes only under AC. Recomputed m_t=q^t x_0−b(1−q^t), V_t=ασ²(1−q^{2t})/(2−α), and their sum. t=0, N=1, σ=0, b=0, α=1/4 and t=N are valid; updates/next signs use t<N. Horizon consistency follows from the formula, with no infinite product or choice. q lies in [3/4,1), giving exactly the asserted limit; positivity is restricted to b=0<σ. Both AC comparison bounds meet their L=1, deterministic-start, finite-moment, lower-bound, bias, variance and step hypotheses. Title correction is necessary since b=σ=0 has zero floor. No diagram, missing diagram or interrupted statement.

- `ex-empirical-risk-sgd-oracle-is-unbiased`: Independently reviewed all three Verification steps and current supervised-risk, derivative, minibatch and stationarity supplier interfaces. The squared-loss completion gives F_S(θ)=(θ−ȳ)²/2+v_S/2, so gradient Lipschitz constant is 1 and the lower gap is (θ_1−ȳ)²/2. With deterministic θ_1 and past-batch filtration, θ_t is adapted and new coordinates remain independently uniform; counting gives mean θ_t−ȳ and variance v_S/b with zero cross terms. All moments are finite on the specified finite space. The theorem application uses μ=μ_G=M_G=L=1, M=v_S/b, M_V=0 and α≤1, giving the exact bound. Checked m=1, b=1, T=1, repeated labels/v_S=0, θ_1=ȳ and α=1. Population law is separate and arbitrary fixed samples are allowed by the source definition; no population gradient interchange or without-replacement variance is claimed. Reader supplied essential deterministic initialization and exact sampling filtration/update; retain these. Reverse consumer search finds only the B-page inventory, which contains the unchanged stable ID and no mathematical use to repair. No diagrams or statement hyperlinks.

- `ex-sgd-biased-direction-violates-alignment`: Read all three Verification steps and exact SGD, stationarity, induction, measure, derivative and Euclidean supplier statements. The explicit singleton is a probability space; all random variables are deterministic with finite timewise moments. Difference quotients give f′(x)=x; the update is x_{t+1}=(1+α)x_t. For x_0≠0 and α>0 induction gives x_t≠0 and a strict first-step increase. At every finite t, gradient times conditional mean is −x_t²<0 while μx_t²>0 for every μ>0. Zero variance and equal direction/gradient norms therefore do not imply positive alignment. AC is assumed in the Example for the conditional-expectation comparison and is unnecessary for the scalar recurrence. Excluded x_0=0/α=0 erase strictness; no upper-step restriction is needed to refute alignment. No claim of theorem applicability or biconditional, and no diagram or interrupted statement.

## Repair details and consumer obligations

The noise-floor verification now defines C_tH by averaging over each prefix atom's explicitly counted extensions. Summing over any union of atoms proves the event-integral identity, while sign balance gives C_tξ_t=0 and C_tξ_t²=1. Thus the mean/variance recurrences and cross-term cancellation use only finite sums. Conditional-expectation classes and conditional variance are identified only in the AC comparison branch. The existing statement, exact formula, dependencies and provenance remain accurate. Derivation text, step inputs and F5/F6 citation-use locations were synchronized in the contract; the manifest now mirrors the corrected title. No prior judge record was present to invalidate.

The reader changed the empirical Example interface. A direct dependency/reference search across `items/` and `library/` finds only `library/machine-learning/stochastic-gradient-descent-for-learning-examples.md`; its frontmatter inventory uses the same stable ID and has no mathematical assertion requiring repair. No further hop or outside consumer repair is needed. The noise-floor title/proof edits and both locator edits change no Statement/Definition supplier interface.

All current routed statements/examples are uninterrupted by hyperlinks; existing reference sections preserve suppliers. No TikZ/tikzcd diagrams occur, and no diagram is required for these finite-slice, moment and descent arguments. The B page is frontmatter-only with `page_layout: compact-v1`; no page was edited. Published suppliers were read for their actual uses and kept read-only. No defective published supplier or consumer was identified. Existing dependency-ledger records and any prior proposed withdrawals are preserved, with an appended batch-40 review note.

## Sources and coverage

Read every current routed proof and its cited current supplier statements, including the finite-integral approximation/MCT statements; smoothness and Euclidean conventions; conditional-class/variance, taking-out, algebra/order and tower interfaces; both published SGD comparison bounds; and the supervised and empirical-risk definitions. The empirical-risk measurability justification was also inspected. This is a review of the actual interfaces used here, not an audit of the entire transitive published library.

Source passages consulted directly:

- [Ghadimi–Lan](https://arxiv.org/pdf/1309.5549), §2.1: RSG setup, Theorem 2.1(a), (2.3)–(2.4), complete nonconvex proof (2.8)–(2.11), and Corollary 2.2 stepsize/formula. These confirm the repaired numbering and weighted-output context. The finite extension is proved locally.
- [Bottou–Curtis–Nocedal](https://arxiv.org/pdf/1606.04838), §4.1 Assumptions 4.1/4.3 and Lemmas 4.2/4.4 with proofs; §4.3 Theorems 4.8/4.10 with proofs (PDF pages 23–25 and 32–33). Checked smoothness, alignment, second moments, lower bound and telescoping interfaces. Local hypotheses explicitly condition on the filtration.
- [MIT Lecture 15](https://ocw.mit.edu/courses/6-7220j-nonlinear-optimization-spring-2025/mit6_7220_s25_lec15.pdf), §§L15.2–L15.4.2, empirical-risk setup, conditional unbiasedness and Theorem L15.1 derivation. Its generic minibatch discussion is not used to infer this example's with-replacement variance; that is proved by local counting.

Current run evidence was checked from `.autopilot/machine-learning-all-101-2026-10-19/events.jsonl` and `git log -1` (head `7c486cefe9`), rather than retired handoffs. The engine owns scheduling and transitions.

## Local checks

- Initial `node tools/risk-report.mjs research/machine-learning-all-101-2026-10-19-batch-40.proof-contracts.json`: seven CRITICAL items, zero errors.
- `node tools/tsx-run.mjs tools/reflow.mts items/ex-constant-step-sgd-noise-floor.md`: unchanged after final proof edits.
- `node tools/tsx-run.mjs tools/precheck.mts` on the four touched item paths: 4 checked, 0 failing.
- `node tools/proof-contract.mjs research/machine-learning-all-101-2026-10-19-batch-40.proof-contracts.json --strict`: 7/7 checked, zero errors/warnings after correcting contract-input extraction. The initial synchronization failure was mechanical and is not a mathematical defect.
- `node tools/risk-report.mjs research/machine-learning-all-101-2026-10-19-batch-40.proof-contracts.json --require-reviewed`: seven complete reviews, zero errors.
- `node tools/rendercheck.mjs items/ex-constant-step-sgd-noise-floor.md`: YAML and real KaTeX parsing pass.
- Final post-edit `node tools/proof-layout.mjs items/ex-constant-step-sgd-noise-floor.md`: 1 item, 6 steps, 0 defects. This is the only item edited by this adjudicator.

The three ledger rows were appended through the ledger tool's serialized append path with `--no-render`; the shared generated view is left for engine integration. No judge, stamp, certification, dispatch, publication or stage transition was initiated. No outstanding mathematical blocker remains in the assigned scope. Engine hash stamping and gate battery remain pending.
