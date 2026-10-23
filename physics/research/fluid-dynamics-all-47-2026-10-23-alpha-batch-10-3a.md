# Batch 10 Step 3a adjudication

Run: `fluid-dynamics-all-47-2026-10-23`. Role: alpha. Group: `batch-10` (scope assignment group `i` retained). Covers: batch 10 only.

## Scope and disposition

The generated order task and scope route exactly one decision, `reader:10:1`, concerning published supplier `thm-divergence-theorem-for-bounded-c-one-euclidean-domains`, reached from owned consumer `lem-fd-gibbs-entropy-residual` through `lem-fd-local-balance-equivalence`. There are no touched, page or refuter obligations. The decisions file contains exactly one entry.

Verdict: **confirmed_nonfatal**, disposition **nonfatal-recorded**. The theorem's Statement and Given assume ACω without defining the sequence-choice principle or linking `def-countable-choice`; its prerequisite list omits that definition. The current published definition states precisely that every sequence of nonempty sets has a selector. This is a real definition/interface omission. It does not defeat this consumer's conditional deduction: the Gibbs Statement/F4/A3 and balance supplier Statement/F2/F3 explicitly define and carry that assumption. Neither source nor import was repaired.

Closed scoped defect row: `fluid-dynamics-all-47-2026-10-23-3a-batch-10-divergence-countable-choice-interface`, caught at `3a-adjudicate`, disposition `nonfatal-recorded`. Its sole adjudication reference is `reader:10:1` in the task-named decisions file. Published mathematics maintenance remains OPEN, separately recorded in `research/published-consumer-supplier-ledger.md#fluid-dynamics-all-47-2026-10-23-batch-10-divergence-choice`, including its deduplicated classification index. The record was merged after acquiring `research/.published-consumer-ledger.lock`, then only this worker's lock was released. Required owner action is to supply the definition/link/prerequisite in the original mathematics workspace, review affected uses, and refresh the import through normal controls. This is not a repair claim or a substantial missing mathematical prerequisite blocking the owned deduction.

The published source raw SHA256 is `d607a1bdda2d227173a9ad8ddfa37c7b887b58929ad5264fcb66cc74c5865e8a`, verified against `research/math-imports.json`. The routed original finding and its scope fingerprints remain unchanged. No historical source mutation or repaired historical bytes are inferred.

## Dependency-ordered current-content risk reviews

Initial `risk-report` identified the following five HIGH/CRITICAL items. Each was reviewed in the generated order; its specific complete `risk_review` was saved in the batch contract and the task report checkpointed before progressing to the next carrier. These are review metadata enrichments, not item repairs or added decision obligations.

### `lem-fd-isotropic-linear-classification`

Read all seven steps and the exact published Heine–Borel/extreme-value statement and proof. Nonempty closed bounded sphere/circle supply maxima; the tangent derivative and invariant complements give an eigenbasis with finite choice only. Half-turns eliminate off-diagonal entries; permutation commutation gives two coefficients; correcting an eigenvector sign gives a proper diagonalizer. Repeated eigenvalues require no division. Zero/identity maps, converse equivariance and uniqueness by traceless and identity tests check directly. Reader/refuter evidence contains no local defect; no diagram or empirical premise. No repair needed.

### `lem-fd-helmholtz-chart`

Read all six steps, state definition, and MVT/IVT/total-chain-rule carriers. Openness and continuity give a rectangle with e_ss>=a>0 and bounded e_sv. Monotonicity plus IVT gives the unique root in the fixed s interval. The two-variable Lipschitz bound justifies little-o substitution, the total derivative and its continuity. Chain-rule differentiation gives a_T=-s, a_v=-p and both second derivatives, including e_vs e_sv/e_ss. T>0 permits the positive target interval; no e_vv or J_e sign is used. Local uniqueness, repeated/zero response derivatives and absence of global convexity are respected. Reader/refuter evidence contains no defect; no extra choice or empirical premise.

### `lem-fd-response-acoustic-algebra`

Read all five proof steps and the exact state, Helmholtz-chart and chain-rule suppliers. At the base state c_v=T_b/e_ss and P prime=v_b squared e_vv follow by the chain rule. P is only C1, which suffices for the pointwise expansion epsilon P prime(rho_b+epsilon r) grad r; continuity supplies the little-o term without P second derivatives. Locally admissible density perturbations are explicitly allowed pointwise, so unbounded modes on R3 cause no uniform-admissibility claim. C2 perturbations justify mixed differentiation and the scalar wave equation. Direct differentiation checks both plane-wave and exponentially growing vector modes, including their signs and rho_b/|k| squared factors. k=0 is excluded, A=0 is explicitly covered, and no mode claim is made at c_s squared=0 beyond the linear equations. No finite-amplitude, global stability or empirical assertion is inferred. Reader/refuter evidence agrees; no repair needed.

### `lem-fd-gibbs-entropy-residual`

Read every Gibbs step and exact current local-balance statement/proof, transport proof and contact proof. The swept interior is an open neighborhood of each compactly contained material subdomain closure, supplying the local-balance regularity; a fixed time translation preserves every balance and removes its containing-zero convention. C1 stress is assumed independently of contact. Continuity yields rho D_t v=theta; the C2 state chain rule gives rho D_t e=-p theta+rho T D_t s. Angular balance gives symmetric sigma and tau, so sigma:L=sigma:D=-p theta+tau:D. Cancelling pressure work and applying the product rule with T>0 yields the exact residual with negative q dot grad T/T squared. No entropy inequality is asserted. The Helmholtz clause is local and conditional on e_ss>0 in the preceding T>0 regime. Countable choice is explicitly defined and declared in this item and its balance supplier: the imported divergence theorem omission is nonfatal to this conditional use, retained as reader:10:1 for published-owner maintenance. Constant-state zero residual and degenerate response derivatives do not require a stronger claim. No source repair needed.

### `lem-fd-newtonian-admissibility`

Read all seven proof steps and the exact Gibbs, isotropic-classification and countable-choice suppliers. The trace-free decomposition D=D0+theta I/3 has D0:I=0 and I:I=3, yielding the bulk coefficient zeta=lambda+2mu/3. The antisymmetric part of K contributes zero to g transpose K g. Sufficiency is termwise for T>0; necessity separately tests traceless diag(1,-1,0), I/3 and arbitrary g with D=0, T=1. Thus both directions include equality, zero coefficients and singular positive-semidefinite conductivity. mu>0,zeta=0 allows lambda=-2mu/3<0. Independent pointwise D,g quantifiers are explicit, and Gibbs interpretation retains all balance/state/AComega assumptions rather than claiming the adopted stress or flux is a derived material law. Reader/refuter evidence contains no local defect. The selected stress finite-smoke contract is present; no engine finite-smoke or judge cycle was run by this worker. No source repair needed.

The ordinary state definition specifies an open `(v,s)` domain, C2 state relation, first/second derivatives, local chart restrictions and optional SI interpretation without material assertions. The negative-bulk example has D0=0, g=0, K=I and hence Q=zeta theta²/T<0 for zeta<0, theta nonzero and T>0; positive shear and positive-semidefinite conductivity do not change that sign. No repairs were necessary.

## Sources and actual review limits

Owned carriers read: all seven items in the batch-10 manifest, their statement/definition reference sections, Facts, and complete proofs/verifications. Both page carriers were inspected: `fd-mf03` and `fd-mf03-examples` have the correct inventory, `compact-v1` metadata and empty Markdown bodies. The current `fd-mf02` prerequisite inventory was inspected. No assigned item contains a TikZ/tikzcd diagram, and the arguments require no additional diagram. The contextual Cauchy-contact tetrahedron schematic was inspected; the proof independently computes outward normals and projected areas and does not infer identities from the picture. No outside diagram was edited.

Exact local mathematical source carriers inspected include:

- `thm-euclidean-heine-borel-pseudocompactness-and-extreme-values`, Statement, Facts and Proof: nonempty closed bounded Euclidean sets attain continuous extrema, in ZF.
- `cor-mean-value-theorem`, `thm-intermediate-value` and `thm-chain-rule-for-total-derivatives`, Statements and Proofs: closed-interval scalar MVT/IVT and the total first-order composition rule. The chart's actual compact segments and open differentiability domains meet those hypotheses.
- `def-countable-choice`, Definition and explanatory scope: the exact sequence-selector premise, not dependent choice or full AC.
- `lem-fd-local-balance-equivalence`, complete current Statement/Facts/Proof; `lem-fd-transport-and-density`, complete current Statement/Facts/Proof; `lem-fd-cauchy-contact`, complete current Statement/Facts/Proof; `def-fd-smooth-motion`, Definition. These establish the precise smooth local interface used by Gibbs, including the assumed C1 stress regularity, componentwise transport, material-domain localization and time recentering.
- `thm-euclidean-inverse-function-theorem`, Statement and Proof, for the contextual joint motion inverse. The bounded-C1-domain, surface-integral and chart-independence supplier definitions/statements were checked at the actual boundary/measure conventions.
- The published divergence theorem's complete current two-step proof and Statement/Facts/deps were read for the routed omission and flux interface. This is not an independent audit of its entire transitive Lebesgue-measure dependency closure.

The reader report and refuter JSON were evidence, not mathematical verdicts. The reader reported the single published omission and no owned defect; the refuter flagged nothing. Relevant contract citations, derivation claims and boundary records were compared with the current owned arguments. Contextual textbook references are Kelly Appendix 4.A pp. 406–411, Wilmanski §4.2 pp. 46–50, and Abeyaratne Volume II §§5.1–5.2 and §§12.1–12.2/Problems 12.4 and 12.8, at the URLs retained in item references. This worker did not retrieve those external PDFs or adopt the reader's retrieval as its own; mathematical review rests on the local complete proofs and exact supplier carriers. No empirical measurements, sampling claims, material validity or statistical precision are introduced.

## Changes and checks

No item or page source was edited. Every current assigned raw item hash matches the immutable post-reader snapshot, and pre/post item and page snapshots agree. Both current page hashes also match. Consequently there is no reader repair to accept, amend or revert, no public interface change, no required downstream consumer repair, and no item reflow/precheck/proof-layout obligation after this metadata-only work. Existing stamps were preserved; no judge was run.

Changes are the five contract `risk_review` entries, this report, the one-decision JSON, one appended defect-ledger row, published maintenance record/index, and owned frontier consumer evidence. The Gibbs-to-local-balance record remains verified with its exact current hypotheses/use; stable IDs and page edges are unchanged. `briefs/tasks/frontier-dependency-ledger.md` retains the owned consumer note. No withdrawal is proposed.

Actual local checks:

- `node tools/physics-support/risk-report.mjs research/fluid-dynamics-all-47-2026-10-23-batch-10.proof-contracts.json`: exit 0; five HIGH/CRITICAL carriers identified.
- The same command with `--require-reviewed`: exit 0; 0 errors, seven items routed, all five mandatory reviews complete.
- `node tools/physics-support/defect-ledger.mjs append --file /tmp/fluid-batch-10-defect-rows.json --no-render`: exit 0; one row appended. No generated ledger view refresh is claimed.
- `node tools/physics-support/defect-ledger.mjs validate --run fluid-dynamics-all-47-2026-10-23`: exit 0; 15 current run rows checked, 0 errors at execution time.
- `node tools/physics-support/frontier-dependency-ledger.mjs refresh --run fluid-dynamics-all-47-2026-10-23`: exit 0; refreshed and deduplicated.
- Focused Python assertions: exit 0; exactly the single owed obligation, exactly one referenced closed ledger row, all seven unchanged item hashes, both unchanged frontmatter-only page hashes, and the unchanged published import pin.

No substantial prerequisite escalation or owned mathematical repair remains. Published maintenance remains with the mathematics owner. Decision stamping, native coverage/context checks, finite-smoke execution, gate battery and stage transitions remain engine responsibilities; none is claimed here.
