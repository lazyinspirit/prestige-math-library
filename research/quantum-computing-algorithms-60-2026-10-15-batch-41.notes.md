# Batch 41 Step-1 authoring notes — discrete-quantum-walks-and-szegedy-theory

Run quantum-computing-algorithms-60-2026-10-15, batch 41, beta. The assigned A/B pages are discrete-quantum-walks-and-szegedy-theory (order 2246) and discrete-quantum-walks-and-szegedy-theory-examples (order 2247), in quantum-algorithms.

## Authority, scope, design and plan

- Read CLAUDE.md, SCHEMA.md, WORKFLOW.md, README, the assigned task files, briefs/beta-scaffold.md, the current quantum-algorithms track, the assigned plan-spec.json row, the complete QA-17 planning section, current audited QA exports, batch evidence and research/quantum-computing-algorithms-60-2026-10-15-owner-authoring-direction.md.
- The owner direction releases all 60 pairs for authoring and supersedes stale tasks/designs. Its integration receipts report 71 local published-repair receipts, four preserved original repair receipts, fifteen matching supplier interfaces (fourteen native suppliers and the existing real-norm definition), four unchanged published page sources, and a mechanical check of 120 pages, 896 items and 1,835 roots with zero errors or warnings. These are release context only, not mathematical acceptance or a gate waiver.
- **No standalone design section was found; no design section governed this pair.** The complete QA-17 planning section and the current audited export supply scope and interfaces. The current plan-spec.json row matches the assigned title, page IDs, order and prerequisites; its item arrays are empty placeholders, so there is no item-level plan conflict to record.
- The authored A page has 14 items and the B page has four examples, well below the 100-item cap. The A and B draft page files, 18 assigned draft item files, batch manifest and batch evidence are scoped to this pair. Published pages/items, shared plans, engine state and verdicts were not edited.

## Inventory, dependency levels and scheduling input

The authored batch manifest contains all 18 assigned item carriers. Item levels below are recomputed from in-run item dependencies in the currently populated manifests; item files and the batch manifest agree.

| A item | Level | A item | Level |
|---|---:|---|---:|
| def-qa-17-finite-stochastic-kernel | 0 | def-qa-17-finite-reversible-chain | 1 |
| def-qa-17-szegedy-transition-isometry | 2 | lem-qa-17-stochastic-l2-contraction | 2 |
| lem-qa-17-reversible-transition-self-adjoint-on-l2-pi | 2 | def-qa-17-absolute-spectral-gap | 3 |
| thm-qa-17-absolute-gap-eigenvalue-characterization | 4 | thm-qa-17-discriminant-self-adjoint | 3 |
| def-qa-17-szegedy-walk | 9 | lem-qa-17-walk-reflection-unitarity | 10 |
| lem-qa-17-invariant-eigenplane | 10 | def-qa-17-walk-access-model | 11 |
| thm-qa-17-szegedy-spectral-mapping | 11 | thm-qa-17-walk-access-cost | 12 |

The B levels are cex-qa-17-zero-stationary-weight 3, cex-qa-17-nonreversible-discriminant 4, ex-qa-17-period-two-walk 5 and ex-qa-17-two-state-reversible-walk 12. In-run item dependencies determine these levels; published suppliers are context, not in-run level inputs.

The batch-dependency artifact assigns batch 41 level 11 and prerequisites 1, 2, 8, 9 and 14, matching the dispatch. The dispatch records scheduling input SHA-256 5853a948dc662edf4f617f17513f4733c3faab723214e776cad31c223b0b0a60; the currently read shared batch-dependency-levels.json records input SHA-256 8f311e4e9bfdc6fc40a657a21c0c1110bfa7958d26569f247e9ce37bd68f6c26. The batch entry itself still matches. This shared-input hash discrepancy is left for owner reconciliation; the shared scheduling file was not edited.

One direct item edge was removed after checking the statement: def-qa-17-szegedy-walk defines operators on the Hilbert space and does not use circuit syntax. The pair still requires the QC09 page through its explicit circuit access/cost interfaces.

## Conventions, proof route and axioms

- Use row-stochastic P_xy=Pr(y|x), row distributions μP, and (Pf)_x=Σ_y P_xy f_y. Childs uses a column-stochastic convention, so the local row formulas are rederived with indices checked.
- The root inner product is linear in its first argument. The row map is T|x⟩=|x⟩Σ_y√P_xy|y⟩; D=T*ST has entries √(P_xy P_yx). Only the finite-reversible branch supplies a strictly positive stationary probability vector and detailed balance, yielding D=diag(√π)Pdiag(1/√π).
- The walk fixes U=S(2TT*−I) and W=U² as distinct operators. The eigenplane and complement arguments handle all eigenvalues, including collapsed ±1 lines, multiplicities and endpoints. The two-state example computes a=0, a=1, and the interior case directly.
- The access model explicitly supplies V_P, V_P*, their controlled forms when used, clean/range reflections and swap access, each with separate declared availability and cost. A transition matrix alone gives no circuit implementation or efficiency claim.
- All local arguments are finite-dimensional and choice-free. No additional axiom is used.
- The spectral-mapping proof avoids a published circular dependency. Published thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions step 1.1 invokes cor-trigonometric-parity-and-pythagorean-identity, which already proves the sine/cosine identities repeated in the theorem statement. Published cor-complex-exponential-cartesian-form-modulus-and-eulers-identity step 1.2 also uses Pythagorean without a labelled fact. The QA17 spectral-mapping proof uses the earlier trigonometric corollary and the power-series thm-eulers-formula directly. These published items and their other consumers remain for owner review.

## Full-text sources and dispositions

Retrieval records, full-source hashes, locators, supported items and per-item dispositions are in research/quantum-computing-algorithms-60-2026-10-15-batch-41.source-evidence.json; source coverage and fetch stamps are in the batch coverage file.

- **Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 18 §§18.2–18.4, printed pp. 81–85.** The cached full PDF and extracted text were hash-checked. The complete row-preparation and one-/two-reflection formulas and the complete proof of Theorem 18.1 (Eqs. 18.5–18.34) were read. Section 18.4 through Lemma 18.2's absolute-gap proof was read. The local proof rederives the row-convention translation, reversible specialization, endpoints and multiplicities.
- **Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 8 §§8.1–8.2, printed pp. 63–66.** The cached full PDF and extracted text were hash-checked. Section 8.1 treats the symmetric regular-graph gap; §8.2 gives two reflections, access-cost categories and a phase relation while deferring the spectral proof. It is an independent convention check, not a substitute proof.
- The successful full-text retrieval records dated 2026-10-14 were reused; no retrieval failed and no recovery search/retry was needed. Cached source hashes match the evidence record. The final source-fetch-check --stamp verified all four source records without adding stamps.

## Cross-pair suppliers and unresolved interfaces

The cross-batch ledger has 23 rows, exactly matching the current populated manifest edges: 17 narrow interfaces are verified and six remain open. “Verified” records the interface read, not supplier acceptance.

- QC02 registers-tensor-products-and-partial-trace: the ordered basis, product basis, factor order and product pairing were checked in the actual register/tensor bodies and proofs.
- QC01 Dirac conversion and coordinate identity: the ket convention and linear-first pairing were checked. The broader finite-dimensional QC01 page remains open for page-level reconciliation.
- QC08 controlled-unitary access, inverse access and reflection definitions, and the relevant QC07 control basis/matrices, were read. The local claims use the explicit C(U)=diag(I,U), inverse-order and reflection-sign interfaces. The broader page remains open because its axis-rotation chain still reaches the published trigonometric proof route above.
- **QC09 circuit-syntax-denotational-semantics-and-measurement is now present and homed in batch 9.** The actual syntax, denotational-semantics and elementary-resource bodies were read. Ordered wires, pairwise-disjoint layer supports, chronological composition and the product-basis convention match QA17. QC09 defines depth as explicit layer count.
- QC14 def-qc-circuit-cost-model is present and read. It defines depth as the minimum number of layers over valid layerings; this conflicts with the QC09 explicit-layer depth. This affects def-qa-17-walk-access-model and thm-qa-17-walk-access-cost. Proposed owner action: reconcile the QC09/QC14 depth convention and exact cost interface without weakening the access claims.
- QC14 def-qc-uniform-circuit-family and QC13 def-qc-clifford-t-gate-library are present and read. The access model's family-input wording is explicit, but the transitive QC13 carrier declares level 6 while the current populated item graph computes 9. This affects def-qa-17-walk-access-model; reconcile the supplier level/closure before readiness.
- Every direct dependency of the 18 assigned items has an on-disk body; no direct supplier body is missing. The current transitive supplier closure has one stale in-run label, QC13 def-qc-clifford-t-gate-library (6 declared, 9 computed). The two access items are therefore escalated with the exact supplier chain recorded.
- QA18's audited consumers alg-qa-18-reversible-walk-finding, thm-qa-18-reversible-search-cost and thm-qa-18-element-distinctness-query-cost use def-qa-17-absolute-spectral-gap but omit it from their item dependency lists. Proposed owner change: add that A-page item to those three dependency arrays. No QA18 item or shared plan was edited.

## Checks, readiness and handoff

Final scoped checks after the last item edits:

- source-fetch-check --stamp: 4/4 fetch-verified, 4/4 resolved, 0 newly stamped.
- proof-contract.mjs --strict: 18/18 items, 0 errors, 0 warnings; derivations, inputs, exact supplier excerpts and boundary records match the final proofs.
- Scoped precheck: 12 proof-bearing items, 0 failing.
- proof-layout.mjs through the renderer: 18 items, 48 steps, 0 defects.
- Post-authoring content-policy.mjs: 18 scoped items, 0 errors, 0 warnings. The --manifest-only pre-authoring mode was also invoked after draft files existed and reported the expected batch-item-already-exists condition for those 18 existing items; no manifest-shape finding was reported.
- Scoped dependency comparison: all 18 item labels match the computed levels; no local cycle or missing direct supplier body. Cross-batch edge comparison: 23 expected, 23 recorded, no missing or extra edges. The sole stale item label in the transitive closure is QC13 as described above. The full-run level command reports 126 errors outside this pair (other empty inventories and unrelated stale labels); it reports no batch41 item error.
- Sixteen items are marked ready in Step 1: eight local stochastic/reversible/discriminant A suppliers, walk/reflection/invariant-plane/spectral-mapping A items, and the zero-weight, nonreversible, period-two and two-state B examples. def-qa-17-walk-access-model and thm-qa-17-walk-access-cost are marked escalated for the QC14 depth conflict and the stale QC13 uniform-family dependency chain. These are author readiness records only; they are not independent approval, publication or a stage gate.

## Owner final focused interface reconciliation

QC09 and QC10 native writers drained; the current syntax/embedding/disjoint-layer/denotation/resource interfaces and total-XOR/reversible-work interfaces were read in the existing cycle 2. Updated tensor-adjoint proofs support the same ordered complete-register action. Current focused contract/cross-edge records replace stale absence wording and exact quote mirrors, with no independent supplier acceptance or readiness decision. QC14 base correctness and auxiliary terminology repairs, depth distinctions, HSP gate/query/output claims and QA17 constituent counts remain consistent. QC23 is the only still-active affected consumer; final stable disposition and every numeric/binding/certification operation remain root-owned.
