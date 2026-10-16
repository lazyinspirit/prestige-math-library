# Batch 52 — authoring and handoff notes

## Governing inputs and plan reconciliation

- Read the canonical `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, beta scaffold brief, assigned task, owner authoring direction, QA5 planning section and audit, current plan, plan spec, batch dependency-level input, and relevant current source carriers before authoring. The owner direction overrides stale task/design wording.
- The task says `design: none found`. No separate QA28 page-design file exists. The current QA5 “QA28 — Spectral estimation and matrix functions” audited planning section and its complete argument notes were read as research context, not as a standalone assigned design. OP1 in `research/quantum-algorithms-planning/operational-contracts.md` is binding for any bare-polynomial QSP generation.
- `research/plan-spec.json` records the A/B pages at orders 2268/2269 with the assigned names, category, companion relation and eleven A-page prerequisites. Its item lists are planning placeholders. The QA5 audited export proposes the ten A claims and two examples that appear in this scaffold.
- Plan/design reconciliation: the state-dependent spectral distribution remains as the proposed definition, but the claimed nonnegativity, total mass and functional-calculus moment formula are proved in `thm-qa-28-spectral-law-measurement`; no unproved theorem is smuggled into the definition. The phase-estimation algorithm is a procedure only; its accuracy and mixture law are separate results, so the algorithm does not depend on its own later correctness theorems. The QSVT matrix-function algorithm does not depend on phase-spectral-estimation access, which is not a logical input to QSVT.
- A proposed single real parity polynomial does not cover general complex or nonparity targets (for example, $e^{-ix}$). The QSVT algorithm therefore requires a caller-supplied extension on a symmetric interval, decomposes its real and imaginary parts into four real even/odd components, requires an exact zero certificate for each omitted component and a positive scale/bounded parity polynomial for every active component, and combines those blocks through the declared QA22 LCU construction. It asserts no universal approximation or efficient coefficient-generation theorem.
- The proposed median repetition estimate relies on a one-sided Chernoff interface that does not itself state the exact needed $e^{-r/8}$ tail. The median carrier proves the Bernoulli mgf bound locally, including the constant comparison. QPE accuracy uses the actual current QA7 tail theorem and its hypotheses.
- OP1 binds `alg-qa-23-qsp-phase-synthesis` and its correctness theorem to QA28 bare rational/exact-algebraic polynomial inputs. Those actual item dependencies are included on the QSVT algorithm/error theorem. This adds a direct item supplier from batch 47, absent from the shared batch-dependency sidecar's prerequisite list. Batch 47's page level is 11 and the QSP correctness theorem's item level is 12, equal to batch 48's page level; the assigned batch 52 level therefore remains 13. The owner must refresh the shared dependency input/hash. The supplied dispatch hash is `5904c99cbe2e6eeb2b574aa97063f131d674c13f6d547423b9b44826907dfe1f`; the current sidecar hash is `3097ae8fe82fb1d0d4b327dafae1991b306dfce9741a5aa065f4536103343bc9`. Shared planning inputs were not edited.

## Inventory and dependency levels

The manifest contains ten A-page items and two B-page examples, below the 100-item cap. The scheduled batch level remains 13; the largest consumer item level is 17. `batch-52.pages.json` is the controlling item inventory, with direct logical dependencies and recomputed levels. Item dependencies are acyclic and suppliers precede consumers by level.

| Item | Level |
|---|---:|
| `thm-qa-28-polynomial-matrix-function-error` | 0 |
| `def-qa-28-state-spectral-distribution` | 2 |
| `lem-qa-28-normalized-function-target` | 8 |
| `def-qa-28-spectral-estimation-access` | 12 |
| `alg-qa-28-phase-spectral-estimation` | 13 |
| `alg-qa-28-median-spectral-estimation` | 14 |
| `thm-qa-28-spectral-law-measurement` | 14 |
| `alg-qa-28-qsvt-matrix-function` | 15 |
| `thm-qa-28-matrix-function-error-cost` | 16 |
| `thm-qa-28-spectral-estimation-guarantee` | 16 |
| `ex-qa-28-exponential-polynomial` | 17 |
| `ex-qa-28-two-level-spectral-estimate` | 17 |

The manifest's page-level `requires` list is retained exactly from plan spec and now resolves to eleven actual page bodies. The cross-batch record captures those page excerpts, 46 actual direct item suppliers and their inspected statements/proofs, and the 73 current-run transitive item IDs with source excerpts in the closure; it reports no missing direct target or prerequisite page. The QA23 synthesis supplier is also recorded as a direct item edge even though its QA24 page is already in the page-level prerequisite path.

## Mathematical scope and conventions

- The spectral distribution uses one atom per distinct eigenvalue and the orthogonal eigenspace projection, so degeneracy does not depend on a chosen eigenbasis. The theorem proves normalization, moments, the QPE kernel mixture, and the conditional Lüders branch; it does not claim QPE measurement exactly projects the input into an eigenspace.
- Spectral-estimation guarantees are for a promised eigenstate. Fresh independent preparations are charged on every median trial. The guarantee is stated for $0<\epsilon\le1$ in the $U=e^{iH}$, $\sigma(H)\subseteq[-1,1]$ specialization; the local proof checks principal-branch unwrapping. A separate exact-grid counterexample records why a superposition does not estimate one fixed eigenvalue under generic phase access.
- The QSVT target theorem separates matrix scale $\alpha$ from output normalization $B=\sum_{j\in J}\gamma_j$. It handles positive and negative eigenvalues through even/odd parity, and complex targets through four real parity components. Any omitted component carries an exact zero certificate; every active component has a positive certified scale. QSVT robustness is applied to the actual compressed block using the current QA24 primitive suppliers; the aggregate QA24 resource theorem is not used as a proof premise.
- All arguments use finite spectral/SVD decompositions, finite probability, exact finite unitary products and scalar Taylor estimates. No physical postulate or choice axiom is used. Preparation, inverse, controlled access, simulation, QSP phase generation, LCU PREPARE/SELECT, compiler, ancillas, gates, depth, bit time and output length are separate costs; no cost is inferred from a bare matrix or polynomial.

## Source reading and disposition

- Andrew Childs, *Lecture Notes on Quantum Algorithms*: complete 191-page course-note corpus read sequentially, with §4.3 (phase estimation, PDF pp.27–28), Chapter 28 §28.3 (LCU, equations 28.11–28.20), and Chapter 29 §§29.1–29.3 (QSVT/qubitization, PDF pp.148–155) directly re-inspected for this pair. Full-text cache and fetch stamp are in the QA5 source ledger.
- András Gilyén et al., *Quantum singular value transformation and beyond*, arXiv:1806.01838: complete 67-page PDF read sequentially. Definitions 11–16, Lemma 14, Theorem 17, Corollary 18, Lemma 19 and Lemma 22, PDF pp.14–25, were directly inspected for parity, QSVT action, robustness and complexity conventions.
- Ronald de Wolf, *Quantum Computing: Lecture Notes*, arXiv:1907.09415v6: complete relevant Chapter 4 was read in QA2; §4.6, PDF pp.41–48, was directly re-inspected for the phase-estimation circuit, kernel and cost. It is an independent lecture-note treatment of QPE.
- The older QA5 coverage ledger describes some source reading as underway/pending, while its later `source-ledgers/qa_r5.json` checkpoint records complete sequential reads of Childs and Gilyén. This discrepancy is preserved here; the later ledger, cached full texts, direct re-inspection and fetch stamps are the evidence used. No source retrieval failed, no recovery retry was needed, and no source was dropped.
- The coverage records list each inspected source range, harvested result, supported item and disposition. Local proofs supply every mathematical argument; citations are not used in place of proof.

## Supplier review and unresolved reconciliation

- Actual current source bodies/proofs were read for the assigned QPE kernel/tail/access suppliers; QC Dirac, pure-state, measurement, controlled/inverse access and circuit-cost suppliers; QA20 simulation error/cost; QA22 block encoding, access, LCU construction/correctness; QA23 phase synthesis/correctness; and QA24 singular-value data, singular-space action, robustness, query count and QSVT construction.
- QA24 source/manifest level drift: `items/lem-qa-24-qsvt-robustness-amplitude-bound.md` declares level 14 while batch 48's manifest computes 12; `items/thm-qa-24-qsvt-singular-space-action.md` declares level 13 while the manifest computes 11; the aggregate `items/thm-qa-24-qsvt-error-and-resource-bound.md` declares 17 while its manifest computes 13. Their direct dependency sets currently match (the robustness lemma's ordering differs); the unresolved issue is level metadata. These are cross-pair findings; no batch-48 or shared file was edited. QA28's matrix error proof uses the primitive robustness and singular-action results, not the aggregate theorem, but those upstream level discrepancies require owner reconciliation for affected consumers.
- The QA22 controlled-unitary access and inverse-access definitions have omitted `dependency_level` fields in their item frontmatter while the batch-8 manifest assigns levels 6/7. Batch 46 already records this. It does not change the QA28 numerical levels, but the owner should reconcile these supplier metadata before handoff.

## Scoped check record

- `node tools/proof-layout.mjs` on the seven changed proof-bearing carriers: **7 items, 24 steps, 0 defects**. The normative `precheck.mts` on all 12 assigned carriers: **7 proof-bearing items, 0 failures**; definitions and algorithms are proof-phase not applicable.
- Strict `proof-contract.mjs`: **12/12 checked, 0 errors, 0 warnings**; contracts contain 65 exact supplier excerpts, all 24 phase steps mapped to actual inputs, all eight boundary worksheets per item, and five explicit finite checks for the two examples.
- `content-policy.mjs`: **12 items, 0 errors, 0 warnings**. Focused `depcheck.mjs`: **12 assigned items, 0 errors, 0 warnings**, including a 1,194-item/389-page prerequisite closure. `rendercheck.mjs`: **14 item/page files passed**.
- Scoped dependency-level recomputation: **12/12 labels match**, no missing targets or cycles in the nonempty run graph. All 12 carrier `deps`, `justified_by` lists, and level labels match their manifest rows. Levels are recorded in `batch-52.pages.json`; item levels range from 0 to 17 while the scheduled batch level remains 13.
- `coverage-checklist.mjs`: **2 pages, 23 harvested results, 0 errors, 0 warnings**. `source-fetch-check.mjs --stamp`: **5/5 source entries fetch-verified, 0 new stamps, 0 drops**; the existing full-text hashes and histories were reused.
- `step1-decisions.mjs record`: **9 items `ready`, 3 items `escalated`, all with owner=false and examined direct dependency IDs**. The ready-record content/dependency hashes were checked current for all nine. The escalations are `alg-qa-28-qsvt-matrix-function` (batch 47 direct QSP edge is absent from the shared sidecar), `thm-qa-28-matrix-function-error-cost` (the same scheduling refresh plus QA24 level drift), and `ex-qa-28-exponential-polynomial` (inherits those QSVT supplier reconciliation issues). Their complete local arguments and contracts remain available for owner reconciliation; the records are authoring status, not independent approval.
- The run-wide dependency-level checker still fails outside this batch: `quantum-sampling-expectation-and-monte-carlo-examples` has an empty scaffold inventory, and these six QA34 labels differ from computed levels: `lem-qa-34-exponential-gram-concentration` (16 vs 17), `lem-qa-34-two-sketch-threshold-band-bound` (16 vs 1), `thm-qa-34-modfkv-low-rank-approximation` (17 vs 18), `thm-qa-34-tang-recommendation-sampler` (18 vs 19), `rem-qa-34-dequantization-scope` (19 vs 20), and `cex-qa-34-tang-without-sampling-access` (19 vs 20). No files outside batch 52 were changed.
