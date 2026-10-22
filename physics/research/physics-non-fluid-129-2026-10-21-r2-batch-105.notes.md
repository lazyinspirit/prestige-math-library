# Batch 105 notes — Finite-group Hopf algebra and lattice quantum-double sectors

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: beta  
A/B pair: `qsmx-quantum-double` / `qsmx-quantum-double-examples`  
Design: `research/plan-quantum-statistical-mechanics-frontier-expansion-track.md#finite-group-hopf-algebra-and-lattice-quantum-double-sectors`  
Detailed statement/proof route: `research/frontier-expansion-2026-10-19/quantum-statistical-mechanics/prose-scaffold.md#qsmx-quantum-double`  
Detailed inventory and source map: `research/frontier-expansion-2026-10-19/quantum-statistical-mechanics/inventory.json`, `suppliers.json`, `sources.json`, and `sources.md`.

## Plan/design comparison and scope

The dispatch, complete plan section, and `plan-spec.json` rows agree on A/B page IDs, title, category, physics library, page order 907/908, companion relation, and required pages: A requires `qsmx-topological-lattice`, `qsm-quasilocal-states`, and `maschkes-theorem-and-complete-reducibility`; B requires the A page and `qsmx-topological-lattice`. There is no page-identity or prerequisite-list conflict.

The two `plan-spec.json` rows have empty `items` arrays, while the detailed design inventory specifies three A items (`def-qsmx-finite-group-double`, `thm-qsmx-double-lattice-projectors`, and `thm-qsmx-double-sector-labels`) and one B example (`ex-qsmx-double-z2`). The current plan uses empty item arrays as future-build placeholders; the batch manifest now carries the detailed scope. The shared plan remains unchanged.

The short design route leaves three local mathematical obligations incomplete. The displayed D(G) operations need a basis-by-basis Hopf-* verification; the lattice projector claim needs explicit definitions of edge variables, the gauge action, and face holonomy; and the sector-dimension sum needs a finite-group character/regular-representation argument. I added exactly these A-page prerequisites: `thm-qsmx-double-hopf-structure`, `def-qsmx-finite-group-lattice-operators`, and `lem-qsmx-finite-group-irrep-dimension-square-sum`. The carriers now state their Hopf-* convention, define the finite cellulation and oriented edges, and make representation equivalence, character, sector, projection, positivity, and frustration-freeness terminology explicit. Each prerequisite is placed before its consuming theorem. No claim was narrowed or omitted. The C(Z2) B example retains the designed comparison with the toric crossing sign and adds the Axiom of Choice required by its exact batch-104 supplier interface.

The A page remains six items; the B page contains the single designed example. This is below the 100-item page cap. Every authored item has `domain: mathematics`, `library: physics`, mathematical-only `dependency_roles`, and a finite-model mathematical `physical_scope`. The new Hopf proof checks only the explicitly displayed finite-group structure maps; it asserts no general quantum-group, braided-category, modular-functor, or topological-field-theory extension. The lattice theorem is an exact finite-dimensional result and asserts no perturbation stability, thermodynamic limit, or empirical realization.

## Item inventory and dependency levels

The exact batch item inventory is in `research/physics-non-fluid-129-2026-10-21-r2-batch-105.pages.json`.

| Item | Home | In-run suppliers | Level |
|---|---|---|---:|
| `def-qsmx-finite-group-double` | A | none | 0 |
| `thm-qsmx-double-hopf-structure` | A | `def-qsmx-finite-group-double` | 1 |
| `def-qsmx-finite-group-lattice-operators` | A | `def-qsmx-finite-group-double` | 1 |
| `thm-qsmx-double-lattice-projectors` | A | `def-qsmx-finite-group-double`, `def-qsmx-finite-group-lattice-operators` | 2 |
| `lem-qsmx-finite-group-irrep-dimension-square-sum` | A | none | 0 |
| `thm-qsmx-double-sector-labels` | A | `def-qsmx-finite-group-double`, `thm-qsmx-double-hopf-structure`, `lem-qsmx-finite-group-irrep-dimension-square-sum` | 2 |
| `ex-qsmx-double-z2` | B | `thm-qsmx-double-sector-labels`, batch-104 `def-qsmx-toric-cellular-hamiltonian`, `thm-qsmx-toric-strings-and-local-tests` | 3 |

The run-level batch record places batch 105 at level 3 after batch 104. The item levels above follow only actual logical item suppliers; outside published/imported mathematics does not raise an in-run level.

## Mathematical suppliers and interface checks

- `def-qsm-local-spin-algebras` is the exact local finite-matrix supplier used for one group-valued edge degree of freedom, with $q=|G|\ge1$ after a finite relabeling. Its definition states $\mathcal A_\Lambda\cong M_{q^{|\Lambda|}}(\mathbb C)$ for a finite region. It is a local physics-workspace mathematical item, status published.
- `def-hh-hopf-algebra-and-antipode` is the immutable imported mathematical definition used to state the convolution antipode identities. Its exact interface is a bialgebra plus a linear two-sided convolution inverse of the identity. The new proof checks those identities on the finite D(G) basis.
- `thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order` is the immutable published/imported mathematical supplier. Its exact hypotheses are a finite group, a finite-dimensional representation over a field, and characteristic not dividing the group order. Over $\mathbb C$ the characteristic is zero. Its proof constructs the averaging projection that splits an invariant subspace. The local dimension-sum lemma uses this exact input and proves the needed character orthogonality and regular-representation multiplicities rather than assuming the sum-of-squares identity.
- The current `qsm-quasilocal-states` prerequisite page is published. The quantum-double page only uses the finite local edge algebra interface above; it makes no assertion about an infinite tensor-product Hilbert space or a quasi-local state.
- The current `qsmx-topological-lattice` page is the in-run batch-104 prerequisite. Its actual coordinate-cycle definition and the complete proof of `thm-qsmx-toric-strings-and-local-tests` were inspected. The B example uses the exact $I(p_1,q_1)=1$ interface and the theorem's square-torus crossing relation, with the stated $L\ge3$ and Axiom of Choice hypotheses; it does not use the local-compression conclusion.

The initial readiness probe found the batch-104 records missing. Before final recording, I reloaded `loadStep1Record` and called `step1Decision` again; the current helper now returns `closed: true` for all five batch-104 toric items: `def-qsmx-toric-cellular-hamiltonian`, `thm-qsmx-toric-ground-space`, `lem-qsmx-toric-local-pauli-centralizer`, `thm-qsmx-toric-strings-and-local-tests`, and `ex-qsmx-toric-defect-pair`. This live state supersedes the earlier missing-record observation. I inspected the full current cellular definition and crossing theorem; the B example preserves the Axiom of Choice and $L\ge3$ hypotheses and uses the exact $I(p_1,q_1)=1$ convention. No batch-104 carrier or readiness record was changed. Both page-level edges to `qsmx-topological-lattice` and the B example's direct theorem and definition edges are `verified` in the cross-batch record; these are scoped dependency checks, not independent proof approvals. All seven assigned item readiness records are now `ready`, recorded in dependency order with their direct suppliers and the four current A-page items as examined required-page context.

The batch-104 page itself lists `qsmx-lieb-robinson-spectral-flow` as an earlier page requirement. That is transitive context owned by batch 104/102, not a batch-105 consumer edge; it is recorded here rather than turned into an unsupported row in the batch-105 cross-batch dependency array. The batch-104 notes state that its toric proof does not use a Lieb–Robinson theorem.

## Source harvest

The A page is supported by three independent finite-group double/lattice treatments, including de Wild Propitius–Bais's full lecture-note text. The finite-group dimension-sum lemma additionally uses two independent full treatments of character orthogonality and the regular representation: Webb's textbook and Etingof et al.'s lecture notes. The B example has three independently retrieved treatments mapped in the coverage JSON. Full local paths, byte sizes, raw hashes, exact read ranges, item mappings, and every per-source limitation are in `research/physics-non-fluid-129-2026-10-21-r2-batch-105-sources/source-reading.md` and the coverage JSON.

No source retrieval failed and none was dropped. `source_resolution` is empty. The final `source-fetch-check --stamp` reports 8/8 sources fetch-verified, 0 newly stamped; check mode reports 8/8 resolved and 0 documented drops.

## Proof contracts and readiness

The proof contract is `research/physics-non-fluid-129-2026-10-21-r2-batch-105.proof-contracts.json`; it contains actual step-by-step claims, inputs, exact supplier excerpts, boundary worksheets, and finite checks for the five proof-bearing items. Definitions have complete source-backed statements and no artificial proof contracts.

All items and both frontmatter-only pages are authored. `loadStep1Record`/`step1Decision` confirms all seven local readiness records are current and `ready`; the complete conditional B argument uses the exact inspected statement and hypotheses of `thm-qsmx-toric-strings-and-local-tests`.

## Scoped checks

Recorded after final edits and scoped tool runs:

- `source-fetch-check --stamp`: 8/8 fetch-verified, 0 newly stamped; check mode: 8/8 resolved, 0 drops.
- `coverage-checklist`: 2 pages, 18 harvested results, 0 errors or warnings. `content-policy --manifest-only --authored`: 7 items, 0 errors or warnings. `manifest-deps`: 7 items, 0 normalization or errors. `manifest-integrity`: 258/258 pages present, no scope drift.
- `precheck`: 5 proof-bearing items, 0 failures. `proof-layout`: 7 assigned items, 33 steps, 0 defects. Strict proof-contract check: 5/5 checked, 0 errors or warnings. `rendercheck`: all 9 assigned item/page files pass. `citecheck`: 7 items, no recognised citation-home defects.
- Focused `depcheck` passes for the 7 assigned items and their selected context (1,810 items and 499 pages); focused `fwdcheck` passes (1,776 items and 506 pages). `extcheck` exits 0. `pathcheck` finds no pathway files applicable to the two draft pages.
- Current local item-level recomputation matches every assigned manifest value: levels 0, 1, 1, 2, 0, 2, and 3 in the inventory table. The run-level batch-105 row recomputes to `dependency_level: 3, requires: [104]`, matching the stored row. The full `batch-dependency-levels check` still reports a stale run-wide input hash; its shared scheduling artifact was left for the owner. The full `item-dependency-levels check` is blocked by 22 empty inventories elsewhere in the in-flight run: `emg-fx13` and its examples; `qftx-ribbon-braid-representations`, `qftx-chern-simons-bf-gravity`, `qftx-kz-chiral-interface`, `qftx-hall-bps-wall-crossing`, and `qftx-categorified-line-operators`, each with its examples page; `csm-frontier-inverse-gibbs`, `csm-frontier-planar-critical-point`, and `csm-frontier-rare-event-numerics`, each with its examples page; and `tgrx-jt-disk-model` and `tgrx-research-boundaries`, each with its examples page. These are outside batch 105.
- The focused `depsource` attempt could not load the complete run because `run-manifest-pages` reports an invalid or duplicate current manifest item in unrelated `physics-non-fluid-129-2026-10-21-r2-batch-117.pages.json`. The assigned suppliers themselves resolve in `depcheck`, and the four exact cross-batch edges are present with `verified` status and nonempty evidence.
