# Batch 104 notes — Toric-code Hamiltonians and local indistinguishability

Run: `physics-non-fluid-129-2026-10-21-r2`  
A/B pair: `qsmx-topological-lattice` / `qsmx-topological-lattice-examples`  
Design: `research/frontier-expansion-2026-10-19/quantum-statistical-mechanics/prose-scaffold.md#qsmx-topological-lattice`  
Inventory: `research/frontier-expansion-2026-10-19/quantum-statistical-mechanics/inventory.json`

## Plan and design comparison

The dispatch, the complete plan section, and the current `plan-spec.json` rows agree on A/B IDs, title, category, physics library, A-page order 905, companion, and required pages `qsm-quasilocal-states` and `qsmx-lieb-robinson-spectral-flow`. The batch-level dependency record places batch 104 at level 2 and lists batch 102 as its sole in-run predecessor.

There is one pre-authoring inventory difference: the `plan-spec.json` rows have empty `items` arrays, while the design inventory specifies three A items (`def-qsmx-toric-cellular-hamiltonian`, `thm-qsmx-toric-ground-space`, `thm-qsmx-toric-strings-and-local-tests`) and one B example (`ex-qsmx-toric-defect-pair`). The assigned batch manifest now contains those four items. The authoring required one additional A-page mathematical prerequisite, `lem-qsmx-toric-local-pauli-centralizer`, to prove the disk-supported cycle/cocycle claim before the local-indistinguishability theorem uses it. No shared plan was edited; this inventory difference and the added local lemma are recorded for the owner’s ordinary plan join.

The item proofs retain the designed finite unperturbed scope. They do not infer perturbation stability, a thermodynamic-limit conclusion, or a physical observation from the exact finite-dimensional model. The ground-space proof establishes the stronger lower bound $2\min(J_v,K_f)$, which implies the planned lower bound $\min(J_v,K_f)$; the uniform square-torus exact cost remains $2\min(J,K)$.

## Prerequisite interfaces and current readiness

- `qsm-quasilocal-states` is a published prerequisite page. The published `def-qsm-local-spin-algebras` carrier defines the finite-region algebra as $M_{q^{|\Lambda|}}(\mathbb C)$ with factor inclusions; the published `def-r-orientation-of-a-topological-manifold` supplies the local integer-homology orientation definition used for the surface hypothesis. Batch 104 uses these exact mathematical interfaces only. The page edge is an external published prerequisite, not an in-run cross-batch row.
- The surface Euler corollary supplies the unique genus parameter and $V-E+F=2-2g$ under its explicit Axiom-of-Choice hypothesis. `def-axiom-of-choice` is carried by the ground-space theorem and its consumers; the square-torus chain/cochain lemma itself remains choice-free.
- `qsmx-lieb-robinson-spectral-flow` is the declared batch-102 page prerequisite. Its current page and all nine item carriers exist. The `loadStep1Record`/`step1Decision` check was repeated on 2026-10-22 and returned closed `ready` records for every manifest item: `def-qsmx-summable-interaction-norm`, `lem-qsmx-lattice-weight-convolution`, `def-qsmx-local-conditional-expectation`, `lem-qsmx-local-expectation-locality`, `thm-qsmx-weighted-lieb-robinson`, `lem-qsmx-filtered-spectral-generator`, `lem-qsmx-filtered-generator-locality`, `thm-qsmx-gapped-spectral-flow`, and `cex-qsmx-gap-not-automatic`. Their current record timestamps are 2026-10-21 12:44–12:49 UTC, and their hashes matched current carrier/dependency inputs on recheck. The edge is recorded `verified` as a current page/readiness interface check, not as independent proof approval.
- No batch-104 proof uses a Lieb–Robinson or spectral-flow theorem as a mathematical premise. The Hamiltonian, homology ranks, crossing parity, local compression, and open-string endpoint costs are proved directly from finite cellular incidence and Pauli algebra. Thus no conditional claim or missing proof is being presented as established. The batch-102 notes' title/scope concern about “clustering” remains an off-batch owner issue; batch 104 neither consumes a clustering claim nor treats that title as a theorem.
- The current batch-102 page title includes “clustering,” while its notes record that no clustering claim is in its item inventory and that the title/scope point is already escalated to the owner. Batch 104 neither relies on a clustering result nor repeats that title as a proved claim. This is an off-batch observation, not an additional cross-batch review row.

## Source harvest

Two independent full-text sources support the A page, including Preskill's complete 68-page Chapter 9 lecture notes. The B page is also mapped to the relevant full-text sections of both treatments. The fetched PDFs, exact locators, inspected extents, item-by-item dispositions, limitations, and search history are recorded in `research/physics-non-fluid-129-2026-10-21-r2-batch-104.coverage.json` and `research/physics-non-fluid-129-2026-10-21-r2-batch-104-sources/source-reading.md`.

`source-fetch-check --stamp` verified all four coverage entries (the two URLs each appear once for A and once for B): 4/4 verified, zero retrieval failures, zero recovery retries, and zero drops. The source-resolution record is empty because no source retrieval failed and no source was dropped. The source checks verify full-text retrievability and bytes, not mathematical validity.

## Locally proved prerequisite and item order

Items were authored in supplier-before-consumer order. In-run item levels are:

- Level 0: `def-qsmx-toric-cellular-hamiltonian` (its prerequisites are published external mathematics).
- Level 1: `thm-qsmx-toric-ground-space`, `lem-qsmx-toric-local-pauli-centralizer`.
- Level 2: `thm-qsmx-toric-strings-and-local-tests`.
- Level 3: `ex-qsmx-toric-defect-pair`.

Published mathematical suppliers do not raise in-run item levels. The local lemma proves the square-torus chain/cochain ranks, nondegenerate crossing test, and exactness of the local commuting Pauli support. Its consumer then expands an arbitrary local operator in the finite Pauli basis and proves scalar compression term by term. Both TikZ pictures are explicitly explained in Remarks; no proof step depends on either picture.

## Readiness disposition

All five items and both page carriers are authored. Each proof-bearing item has a complete conditional argument, exact metadata and source references, and a proof contract. Since the A-page supplier page now has current closed authoring-readiness records, all exact mathematical inputs are available. The five item readiness records are recorded `ready`; these are Step 1 authoring dispositions and do not constitute independent proof approval. The exact dependency inputs and evidence appear in each `physics-non-fluid-129-2026-10-21-r2-step1-<item>.json` record.

## Scoped checks

Final scoped results:

- `content-policy.mjs` on the batch-104 manifest: 5 items, 0 errors, 0 warnings.
- `depcheck.mjs --items-file` on the five assigned items: exit 0, 0 errors, 0 warnings; the current declared prerequisite closure is acyclic.
- `rendercheck.mjs` on five items and both pages: 7 files, 0 errors, 0 warnings. Both pages have `page_layout: compact-v1` and empty bodies.
- `precheck.mts` on all five items: four proof-bearing items pass; the definition is not applicable; zero failures. The normative direct-strategy phase-layer repairs were adopted, then contracts were regenerated from the resulting step numbers.
- `proof-layout.mjs` on all five changed items: 5 items, 19 numbered proof steps, 0 defects.
- Strict `proof-contract.mjs`: all four proof-bearing items checked, 0 errors, 0 warnings. `coverage-checklist.mjs`: 2 pages, 10 harvested results, 0 errors, 0 warnings.
- `source-fetch-check.mjs`: 4/4 entries verified; zero retrieval failures, retries, or drops. The cross-batch dependency file parses as an array with one row for the verified in-run page edge.
- Batch-104 item dependency recomputation: no errors; levels are 0 (`def-qsmx-toric-cellular-hamiltonian`), 1 (`thm-qsmx-toric-ground-space`, `lem-qsmx-toric-local-pauli-centralizer`), 2 (`thm-qsmx-toric-strings-and-local-tests`), and 3 (`ex-qsmx-toric-defect-pair`). The run dependency record assigns batch 104 level 2 with `requires: [102]`.
- `step1Decision` currently closes all five batch-104 records as `ready`; the records hash the exact item inputs and all nine current batch-102 page items examined as context. Authoring readiness does not certify independent proof acceptance.

Run-wide blockers are outside batch 104 and were left to the owner/engine:

- `proof-contract-coverage.mjs` cannot evaluate the full run because `qsmx-quantum-double` still has an empty frontier inventory. Batch-104 contracts pass their strict scoped validator.
- The native run-wide item-level check exits 1 on 37 other empty in-flight page inventories. It reports no stored-level mismatches; the batch-104 item subset recomputes cleanly.
- `batch-dependency-levels.mjs check` reports the run-wide snapshot stale and asks for recomputation after authoring drains. The recorded batch-104 row remains level 2 with batch 102 as its predecessor; no shared plan or run-level file was changed.
