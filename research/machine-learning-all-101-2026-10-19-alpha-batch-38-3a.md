# Step 3a adjudication — batch 38

Run: `machine-learning-all-101-2026-10-19`; group: `batch-38`.

Scope: no touched items, page obligations, reader findings or refuter findings. Pre/post item, contract, manifest and page fingerprints agree. No decisions are owed.

## alg-backpropagation-through-shared-parameter-recurrence

Reviewed complete Definition, diagram and all four direct suppliers. For p,q>=1, A_t is q by p, B_t is q by q and lambda_t is q by 1; each contribution to g is p by 1. The reverse loop uses each cotangent before propagating it. The final initial-state pullback and direct loss term remain when T=0. Open domains, exact derivatives, strict-branch failure and DOMAIN_ERROR conventions match the graph and reverse-mode suppliers. Forward diagram arrows correctly join theta to the initial state, displayed transitions and loss; the ellipsis is schematic. No AC or floating-point accuracy assertion. Reader/refuter have no findings. No defect or edit required.

## ex-checkpointed-reverse-sweep-recomputes-intermediate

Reviewed all three Verification steps and all seven direct suppliers. The uniform-block definition and preservation proof 1.1-1.2 give q=2 and sole checkpoint x_0 for T=2,m=1: restore x_0, replay F_1, record/reverse F_2, then restore x_0 and record/reverse F_1. All replays remain in R. The bounded-bilinear product rule yields 2x; the sine and cosine derivative theorem and differentiability-implies-continuity justify C^1 regularity. Cotangents cos(x^2) and 2x cos(x^2) match the total chain rule, including x=0 and x=1. No schedule optimality, AC, numerical-error or diagram claim. Reader/refuter have no findings. No defect or edit required.

## thm-shared-parameter-backpropagation-gradient-formula

Reviewed Statement, all four proof steps, four cited suppliers and their relevant proofs. The finite unrolling may group the p scalar parameter coordinates into the theta vector; the graph permits vector operation outputs and slotwise accumulation. Each C^1 map is defined on an open neighborhood of the trajectory, so finite composition is differentiable locally; the same holds after restricting to the finitely many strict active branches. Reverse-mode path-sum proof 2.1-3.1 adds every shared use. Dimensions and transposes agree: state pullback B_t^T lambda_t, parameter pullback A_t^T lambda_t, direct loss and initial-map pullbacks. Descending induction supplies exactly the stated sum; T=0 reduces to the chain rule for ell(theta,h_0(theta)). No claim at a branch boundary or AC use. Reader/refuter have no findings. No defect or edit required.

## ex-relu-kink-does-not-have-classical-ad-gradient

Reviewed Example, all five Verification steps, and all four cited Definitions. For every h<0 the difference quotient at zero is 0 and for every h>0 it is 1, so the classical derivative does not exist. The primal value r(0)=0 is specified, making this an admissible primal boundary rather than an undefined-domain case. It belongs to neither strict open branch. Forward, reverse and recurrence procedures explicitly return NONDIFFERENTIABLE and no derivative at that boundary. This does not invoke the smooth correctness theorem at a nonsmooth point, nor select a subgradient. No AC, iff, or diagram obligation. Reader/refuter have no findings. No defect or edit required.

## ex-shared-weight-neural-backpropagation

Reviewed all three Verification steps and all four cited suppliers. The feedforward Definition permits the scalar acyclic two-layer graph with identity activations and tied weights; its illustrative supplier diagram has all input-to-hidden and hidden-to-output edges in the correct direction. The product-rule supplier applies to bounded scalar multiplication and coordinate projections, yielding continuous partials D_theta Phi=h and D_h Phi=theta, and loss derivative h_2. With fixed x, Dh_0=0 and the direct parameter loss term is zero. Both uses contribute theta^3 x^2, summing to 2 theta^3 x^2. Direct differentiation of (1/2)theta^4 x^2 agrees, including x=0, theta=0 and x=theta=1. No division, branch boundary, AC or approximation-theorem premise. Reader/refuter have no findings. No defect or edit required.

## Evidence and dispositions

Read `CLAUDE.md`, `README.md`, the applicable schema/workflow instructions, `briefs/alpha-step3.md`, `briefs/tasks/alpha-3a-adjudicate.md`, the generated batch-38 order, authoritative scope, reader report/findings, refuter report, pre/post snapshots, page manifest, contract derivations/boundaries, dependency inputs and owned frontier-ledger input. The scope original group `m` remains unchanged; this dispatch uses group `batch-38`.

The exact mathematical sources reviewed were the current `items/<id>.md` carriers named above and their direct suppliers: `def-finite-straight-line-computational-program` Definition (including repeated slots and strict branches); `def-c-one-map-and-local-inverse` Definition; `def-total-derivative-in-euclidean-space` Definition; forward/reverse AD Definitions; `alg-checkpointed-reverse-schedules` Definition, especially uniform-block mode; `thm-checkpointed-reverse-schedules-preserve-adjoints-and-cost-bounds` Statement and Proof, especially 1.1–1.2; `thm-reverse-mode-computes-gradient` Statement and path-sum Proof 1.1–4.1; `thm-chain-rule-for-total-derivatives` Statement and Proof; `thm-chain-sum-product-and-composition-rules-for-banach-derivatives` Statement and Proof, especially bounded-bilinear claim 2; `thm-sine-and-cosine-derivatives` Statement and Proof; `thm-total-differentiability-gives-a-local-linear-bound-and-continuity` Statement and Proof; and batch-31 `def-feedforward-neural-network` Definition and diagram. Familiar finite-dimensional differentiation and finite replay arguments sufficed; no external bibliographic text was independently audited and no external-source verification is claimed.

Both owned pages were opened: their inventories agree with the manifest, `page_layout: compact-v1` is preserved, and their bodies are empty. Every assigned formulation is uninterrupted by hyperlinks; algorithm references follow its complete Definition. The recurrence diagram is mathematically consistent; the examples require no additional diagrams. No Statement or Definition changed, so no new consumer-repair propagation arose. No confirmed mathematical defect, published-supplier defect, proposed withdrawal, escalation or blocker was identified within this dispatch. No defect-ledger rows are warranted.

Five `risk_review` records were added to the owning proof contract as audit enrichment. The existing frontier dependency records remain verified; four omitted input rows were added for already-declared scalar product, trigonometric derivative and continuity suppliers. This changes no logical edges or mathematical carriers. `briefs/tasks/frontier-dependency-ledger.md` directs maintenance through the owned per-batch input; its shared prose was left unchanged, and the native refresh merged/deduplicated that input.

## Local checks and handoff

- Initial `node tools/risk-report.mjs research/machine-learning-all-101-2026-10-19-batch-38.proof-contracts.json`: exit 0; five HIGH/CRITICAL items routed.
- After completing all five reviews, the same command with `--require-reviewed`: exit 0, zero errors, five routed items.
- Explicit comparison: pre/post item, contract and manifest fingerprint maps and page fingerprint maps are identical; all five current raw item SHA-256 values equal the post-reader item snapshots.
- `node tools/frontier-dependency-ledger.mjs refresh --run machine-learning-all-101-2026-10-19`: exit 0, refreshed and deduplicated.
- Live native status was recomputed from `.autopilot/machine-learning-all-101-2026-10-19`; the run is in Step 3a. No run transitions were initiated.

No item file was edited; no formatter, proof precheck, rendercheck or proof-layout run was necessary or claimed. No judge, stamp, certification or gate battery was run. The engine owns current hash stamping and subsequent gates. Report and decisions file are complete; `decisions: []` exactly matches the empty routed-obligation set. No remaining local action.
