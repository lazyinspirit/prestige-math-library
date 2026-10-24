# Batch 42 authoring record

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Batch: `42`  
Pair: `qftx-global-anomalies-inflow` / `qftx-global-anomalies-inflow-examples`

## Plan and dispatch evidence

The plan-spec row and complete design section agree on A/B IDs, title, order 998, category/library, and page prerequisites `qftx-thooft-anomalies` and `qftx-finite-symmetry-gauging`; no plan/design conflict was found. The owner authoring direction requires frontmatter-only A/B pages with empty bodies, so no page summary was authored. The assigned inventory is two A definitions, one A physics theorem, and one B example.

The current batch-41 `qftx-thooft-anomalies` A page has six item records, including `def-aqft-thooft-anomaly`; its B page has three item records. The target item is a current draft carrier, not absent. I inspected its complete Definition and its exact dependencies. It defines a four-dimensional local perturbative anomaly as a relative BRST class on the specified nondynamical background subalgebra, modulo model-admissible local counterterms. Its final scope sentence says it makes no claim about large or disconnected transformations, determinant-line holonomy, torsion phases, or a physical continuum limit. This is narrower than the original planned general background-gauge-variation wording, so the consumers now use it only to delimit the local interface and explicitly do not derive global holonomy from it.

`loadStep1Record`/`step1Decision` report the current Step 1 record for `def-aqft-thooft-anomaly` missing. Its `status: draft` and `verification.precheck: n/a` are not being treated as blockers; the missing current readiness record is the unresolved prerequisite. Its direct suppliers `def-aqft-p-form-global-symmetry` (declared/computed level 1) and `def-qftx-local-brst-cohomology` (declared/computed level 2) have current `ready` Step 1 records. However, the batch-41 manifest declares the `def-aqft-thooft-anomaly` item at level 0 despite those in-run suppliers. The current dependency graph gives it effective level 3. This upstream level inconsistency is recorded for the owner; no batch-41 item, manifest, or readiness record was edited.

The current batch-14 `qftx-finite-symmetry-gauging` A page contains the ordinary finite-groupoid definition and theorem plus a two-group theorem. The current Step 1 records for `def-aqft-background-gauging-data` and `thm-aqft-finite-group-gauging` are owner-recorded `ready` with current hashes. Their complete relevant statements/proofs were inspected. The normalized `BC2` calculation uses the narrower local definition `def-qftx-finite-groupoid-integration` directly; it does not use the two-group branch or claim a continuum state sum.

## Item arguments, dependencies, and levels

The item levels were recomputed from the current in-run dependency graph after the batch-41 carrier was found. Its effective graph level is 3 (despite its upstream manifest field saying 0), so the assigned levels are 4, 5, 6, and 7 in supplier-first order. Batch 42 remains level 7 in the shared batch-level evidence. The assigned edges are acyclic. No shared level evidence was rewritten.

### `def-aqft-global-anomaly-holonomy` — level 4

Defines inverse determinant-line holonomy for a smooth Fredholm chiral Dirac family on compact closed even-dimensional Riemannian spin manifolds, with a unitary representation, Quillen metric, Bismut–Freed connection, endpoint gauge arrow, and fixed regularization/counterterm convention. Step 1.1 proves the fiber is a Hermitian line; step 2.1 proves unitary, frame-independent `U(1)` holonomy. Its exact `def-aqft-thooft-anomaly` input is used only to separate the infinitesimal local class from determinant-line holonomy, which the supplier explicitly excludes. The item remains escalated because that supplier's current Step 1 record is missing and its declared/effective dependency levels conflict.

Dependencies: `def-aqft-thooft-anomaly` (formulation/scope prerequisite; current carrier inspected; readiness record missing), with its current in-run suppliers `def-aqft-p-form-global-symmetry` and `def-qftx-local-brst-cohomology`. The statement does not claim a general interacting continuum QFT or classify all anomalies.

Sources read: Dai–Freed, *Eta-Invariants and Determinant Lines*, §§1–2 and §5, PDF pp. 1–3, 8–15, 31–35, including the inverse determinant line and holonomy proof; Freed, *Lectures on Field Theory and Topology*, Lecture 11 §§11.1–11.2, PDF pp. 154–163, for Pfaffian/determinant lines and the relative interface. Freed §11.4 is identified as a thesis discussion and is not used as a proved theorem.

### `def-aqft-anomaly-inflow-relative-theory` — level 5

Defines the outward-normal-first spin boundary/bulk pair, dual anomaly lines, canonical evaluation, and the criterion `Hol_boundary · Hol_bulk = 1`. The TikZ square records transport/evaluation compatibility; the proof establishes the criterion algebraically and does not rely on the diagram. It asserts no bulk existence. The current local-anomaly supplier explicitly excludes determinant-line holonomy and is used only as a scope delimiter. Readiness remains escalated through its missing Step 1 record and the upstream level discrepancy.

Dependencies: `def-aqft-global-anomaly-holonomy` (level 4) and `def-aqft-thooft-anomaly` (effective graph level 3; current readiness record missing). Sources: Freed Lecture 11 §§11.1–11.2, PDF pp. 154–163; Dai–Freed §5, PDF pp. 31–35.

### `pthm-aqft-global-anomaly-test` — level 6

For one nondynamical SU(2) Weyl doublet on standard-spin Euclidean `S^4`, assumes the exact index input `ind_C(D_A^+)=1`. It computes the vanishing degree-six polynomial from the fundamental Chern roots `x,-x`; derives the center-loop sign from odd zero-mode parity; computes the real five-dimensional mod-two kernel on the periodic-spin product mapping torus; and applies the explicitly adopted bulk response. It then checks the one-object `BC2` invariant-weight sum `1/2`. The mapping-torus statement explicitly identifies the central `z=-I` action on the fundamental with the `(-1)^F` twist represented by periodic spin structure. The index equality is a conditional hypothesis supported by the source, not a local index-theorem proof. The local-anomaly supplier is used only to distinguish its infinitesimal scope from the independent global loop phase.

Dependencies: `def-aqft-thooft-anomaly` (readiness unresolved; current interface inspected), `def-aqft-global-anomaly-holonomy` (level 4), `def-aqft-anomaly-inflow-relative-theory` (level 5), and `def-qftx-finite-groupoid-integration` (local finite-groupoid mathematical premise, directly inspected). The A-page dependency on `qftx-finite-symmetry-gauging` is recorded separately and its page interface is verified. No claim is made that even `N` excludes other anomalies.

Sources read: Wang, Wen, and Witten, *A New SU(2) Anomaly*, §2.2, PDF pp. 6–9, complete index/zero-mode and mapping-torus reasoning; Dai–Freed §5, PDF pp. 31–35, Corollary 5.11 and the holonomy proof; Freed Lecture 11 §§11.1–11.2, PDF pp. 154–163.

Root mathematical context checked: current root `cor-spin-dirac-index-formula-with-arbitrary-twist` and direct geometric index theorem statement/proof. The corollary requires full AC and delegates to a heat-kernel/Getzler chain; neither item is pinned in the current physics `math-imports.json`. The theorem therefore keeps the required index equality explicit rather than treating the root theorem as an active supplier. The inspected corollary hash is `82e37ae0eba28f3b66fa3e13f3a0c1518aca98f429c4a9b458e0cad70df2c928`; its direct geometric theorem hash is `8ee3fd028af7b692f1896874aaa8f656adeb480f7ef538f90dc19ec6ef5a19f2`. Neither root file or import receipt was changed.

### `ex-aqft-anomaly-inflow-example` — level 7

Works the same index-one background and `C2` center character, pairs the line with the inverse mod-two bulk character, verifies the two-copy parity case, and evaluates the single-object groupoid integral with automorphism weight `1/2`. It does not claim a continuum state sum or broader anomaly classification. Dependencies: the A theorem (level 6), both A definitions (levels 4 and 5), and `def-qftx-finite-groupoid-integration`. Readiness remains escalated through the inherited missing batch-41 Step 1 record and level inconsistency.

## Source retrieval and contract evidence

The three independent full-text treatments were inspected at the locators above. `source-fetch-check --stamp` verified the recorded bodies: Wang–Wen–Witten 637,759 bytes/41 pages/SHA256 prefix `399dafe63ae1fc06`; Dai–Freed 412,720 bytes/55 pages/prefix `02164260e8884f57`; Freed CBMS 2,392,635 bytes/195 pages/prefix `0d1f3b187f2606d3`. The coverage lists five source records, all fetch-verified and resolved, including the repeated source uses. The proposed INSPIRE full-file URL returned an unrelated 2016 G2HDM paper; it was excluded, recorded as a search outcome, and not cited.

The proof-contract entries quote exact current supplier text, map every numbered step and fact input, list the standard boundary dispositions, and record the applicable finite `SU(2)` polynomial, parity, character, and `BC2` checks. The absent root index theorem is not put into `deps`; its value remains an explicit theorem hypothesis. The `BC2` check uses the exact finite-groupoid integral definition and automorphism order.

## Cross-batch and Step 1 dispositions

The batch-42 A page edge to `qftx-thooft-anomalies` is verified against its current page and item inventory. The A page edge to `qftx-finite-symmetry-gauging` is verified against its current page, ordinary finite-gauging items, and readiness records. The three direct item edges to `def-aqft-thooft-anomaly` remain `open`: its actual local-only statement has been checked and the consumers record the scope accurately, but its required Step 1 readiness record is missing and its declared level 0 conflicts with its computed level 3. The B page edge to the A page is local and is not a cross-batch row.

The four batch-42 items were recorded `escalated` with `node tools/physics-support/step1-decisions.mjs record`, each with its direct dependencies and the exact missing readiness/level evidence. All four author records have current hashes and `owner: false`. The upstream `def-aqft-thooft-anomaly` record remains missing and was not overwritten.

## Final scoped check results

- `proof-layout.mjs` on the four assigned items: 4 items, 13 steps, 0 defects.
- `rendercheck.mjs` on the four items and two page files: all 6 files passed YAML/KaTeX and delimiter checks.
- `content-policy.mjs` on the batch-42 manifest: 4 scoped items, 0 errors, 0 warnings.
- Strict `proof-contract.mjs` on the four assigned items: `ok: true`, 0 errors, 0 warnings; every step, supplier excerpt, boundary disposition, and finite check is mapped.
- Normative `precheck.mts`: 4 files checked, 4 passed, 0 failed.
- Focused `depcheck.mjs --items-file /tmp/batch-42-items.json`: 0 errors, 0 warnings; dependency closure 11 items and the A/B page closure 348 pages.
- Scoped `source-fetch-check.mjs`: 5/5 recorded source bodies fetch-verified and resolved, with 0 drops.
- Scoped `inspectStatement` calls: all four assigned Statements/Definitions/Example descriptions have 0 defects. The cross-batch JSON is an array of 5 valid rows: 3 open item edges and 2 verified page edges.
- Recomputed in-run item levels are 4, 5, 6, and 7 in dependency order, with no cycle. The current `batch-dependency-levels.mjs check` reports `Stale batch dependency levels` after the assigned batch manifest changed; shared run-level evidence was left untouched for the owner to recompute.
- `step1-decisions.mjs check` reports 356 run items, 270 ready, and `closed: false`, with unrelated unresolved items/pages in its run-wide scope. The four assigned records were checked individually through `step1Decision` and their hashes match current inputs; each is escalated as recorded above.


## Owner scientific repair (2026-10-23)

See `advanced-qft-supersymmetry-build-2026-10-23-owner-resolution/batch41-44-owner-resolution.md` for actual source/proof review, preserved preimages, focused checks and root-owned native recertification. Earlier author status statements above are historical, not current readiness certificates.
