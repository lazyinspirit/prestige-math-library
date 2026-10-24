# Batch 41 — Step 1 authoring evidence

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Scope: `qftx-thooft-anomalies` and `qftx-thooft-anomalies-examples`.

## Scope and plan reconciliation

- The complete design section at `research/plan-advanced-qft-and-supersymmetry-track.md` § “Perturbative ’t Hooft Anomalies and Counterterms” and the current `plan-spec.json` A/B rows agree on both page IDs, titles, category, physics library, order 997, companion relationship, and the three A-page requirements. B requires A.
- The canonical page rows and batch manifest initially had empty item arrays. The binding owner direction required the planned A carriers plus local mathematical suppliers and substantial B examples. The current batch manifest now contains six A-page items and three B-page examples, including the planned IDs `def-aqft-thooft-anomaly`, `def-aqft-anomaly-matching-data`, and `pthm-aqft-selected-chiral-spectrum-anomaly-cancellation`.
- The broader prose scaffold contains stale language saying no production carriers are authorized. The binding owner authoring direction supersedes that statement for the current run and keeps new content draft. The shared plan/design files remain unchanged.
- Placement conflict recorded: the EFT specialist note A6 proposes `def-aqft-anomaly-matching-data` on `aqft-eft-anomalies`, while the exact current proposed-inventory record and the assigned anomaly design place this shared definition on `qftx-thooft-anomalies`. Followed the current inventory and assigned design; no competing definition or outside-page repair was made.
- The two definitions’ candidate `proposed_deps` fields are empty placeholders. Actual carriers below add the exact local definition, BRST and background inputs used by their statements. The shared inventory was not edited.

## Dependency inventory and inspected interfaces

The recorded graph places batch 41 at level 6 with page requirements in batches 4, 32, and 37. Its current graph is acyclic. Direct assigned page edges are:

| Consumer | Supplier | Batch | Status/evidence |
|---|---|---:|---|
| `qftx-thooft-anomalies` | `qftx-p-form-symmetries` | 37 | Verified: both current page items have hash-current ready Step 1 records; the p=0 background interface is the scoped use. |
| `qftx-thooft-anomalies` | `qftx-nonabelian-brst-bv-mathematics` | 4 | Verified: all six current page items have hash-current ready Step 1 records; this batch uses only the finite-jet BRST/cohomology interface. |
| `qftx-thooft-anomalies` | `qftx-susy-ward-and-nonrenormalization` | 32 | Verified: `def-qftx-wilsonian-n1-action-data` and `pthm-qftx-n1-wilsonian-f-term-nonrenormalization` are hash-current ready. Its stated no-local-anomaly hypothesis is not used to prove anomaly cancellation. |
| `qftx-thooft-anomalies-examples` | `qftx-thooft-anomalies` | 41 | Same-batch A/B companion edge. |

Item-level supplier checks used live `loadStep1Record` and `step1Decision` helpers. The current records are hash-current and `ready` for every direct external supplier: `def-aqft-p-form-global-symmetry`, `def-qftx-local-brst-cohomology`, `def-qftx-nonabelian-brst-complex`, and `lem-qftx-nonabelian-brst-nilpotence`. Page checks also confirmed current ready records for the p-form and BRST/BV page inventories and for `def-qftx-wilsonian-n1-action-data` plus `pthm-qftx-n1-wilsonian-f-term-nonrenormalization`. The p-form chain’s transitive `def-aqft-topological-defect` is also current and ready. Each used supplier statement was inspected; used supplier proofs were read in full.

The p-form definition’s current exact dependency is the codimension-general `def-aqft-topological-defect` on `qftx-defects-and-topological-operators`; the source batch’s current cross-batch row is verified. Its older readiness reason mentions an owner-reviewed edge correction, but its live readiness record is current and ready. The anomaly items use the p=0 (U(1)_V) definition only for the global-symmetry/background interface; no p-form charge theorem is imported into the anomaly proof.

The local non-Abelian BRST input is the finite-jet complex with (sA=dc+[A,c]) and (sc=-[c,c]/2), with nilpotence proved by the current supplier lemma. The matching-data carrier specifies the full product algebra, including (sB=d\eta), (s\eta=0), and (s\psi_i=-\rho_{i*}(c,i\eta)\psi_i). The local cohomology supplier defines (H^{1,4}(s\mid d_H)) modulo (s)-exact counterterms and total derivatives. It is mathematical-only and does not provide a quantum action principle or physical anomaly coefficient. The separate Abelian/scalar obstruction proposition and `def-qftx-chiral-anomaly-interface` are explicitly not used as non-Abelian physical cancellation results.

The current required-page transitive context is retained: `qftx-p-form-symmetries` requires `qftx-defects-and-topological-operators` and `qftx-gauge-geometry`; the latter requires mathematical gauge geometry. `qftx-nonabelian-brst-bv-mathematics` requires `qftx-gauge-geometry`. `qftx-susy-ward-and-nonrenormalization` requires `qftx-susy-n1-superspace-and-actions`, `qftx-susy-extended-actions`, and the non-Abelian BRST page. The current source-batch cross-batch records show these page edges verified; the current item-level inputs inspected above are ready. These are page-level context edges, not extra theorem premises.

## Source reading and dispositions

Two independent full-text treatments were retrieved and read over the complete relevant sections. `source-fetch-check --stamp` verified all four source occurrences (both URLs on both A/B pages); no retrieval failed.

1. Adel Bilal, *Lectures on Anomalies*, [arXiv full PDF](https://arxiv.org/pdf/0802.0634) (108 pages). Read §4.1 and §5.2–5.2.4 for consistent effective-action anomalies and the chiral triangle calculation; §§7.1–7.2 for additivity, left/right chirality signs, conjugate representations and the four-dimensional cubic trace; §8.3 and §§9.1–9.4 for Chern–Simons descent, Wess–Zumino/BRST consistency, local-counterterm ambiguity and the total anomaly polynomial; §10.4 for the exact anti-Hermitian connection and (2\pi[\mathrm{ch}(-F)]_6) normalization; and §11.3.2 for the separate mixed gauge-gravitational term. Disposition: the selected one-loop consistent determinant law is an explicit conditional input; the exact dual-representation cancellation is proved locally from matrix traces; the mixed gravitational term and global anomaly questions are outside this flat-space local claim.
2. Enrique Alvarez, *Gauge Anomalies*, [full PDF](https://members.ift.uam-csic.es/ealvarez/anomalies.ea.pdf) (54 pages). Read §§2.1–2.4, printed pp. 25–38: Stora–Zumino invariant polynomials and transgression, the complete ghost-number descent, representation-index/additivity and conjugate-representation formulas, the worked Standard Model cancellation, and the Bardeen–Zumino counterterm relating consistent and covariant currents. Disposition: used as an independent check of the selected descent and representation conventions; its Standard Model charges are not imported; its covariant anomaly is not treated as the consistent BRST anomaly; the local counterterm example is derived directly.

The source sections were re-opened after the authoring checkpoint. Bilal §2.4 uses the same $(-+++)$ metric and $\gamma_5=i\gamma^0\gamma^1\gamma^2\gamma^3$ convention; §§5.2.2–5.2.3 explain why the chiral triangle can be Pauli–Villars subtracted with opposite-statistics massive regulators, take the regulator masses to infinity, and derive the positive-chirality consistent anomaly through (5.45)–(5.47). §§9.2–9.4 identify the counterterm quotient, fix higher terms by Wess–Zumino consistency, and connect it to descent; §10.4 states the exact anti-Hermitian normalization and $2\pi[\mathrm{ch}(-F)]_6$. Alvarez §§2.1–2.2 independently derive the descent and §§2.3–2.4 give additivity/conjugate-trace and the consistent/covariant distinction. The coverage file records these results, their item dispositions, supported items, and the limits of what was imported. The fetch stamps are present for both unique URLs. No source retrieval failed; no source is dropped and no `source_resolution` failure record is appropriate.

## Authored item ledger

All nine carriers are authored and entered in the manifest. The item ledger below records their claims, conventions, dependencies, sources, and current validation evidence.

## Scoped validation and readiness

Scoped results after final edits: proof-layout, precheck, rendercheck, content-policy, proof-contract, coverage-checklist, source-fetch-check, depcheck, fwdcheck, scoped item-level calculation, and statement-first all pass. All nine Step 1 records now recheck as hash-current `ready` with `owner: false`. The run-wide batch-dependency snapshot/check has the owner-only issue described below; no page summary or body prose is authored, and both A/B carriers remain frontmatter-only.

### `def-aqft-cubic-anomaly-polynomial`

- Claim/conventions: defines the degree-six polynomial (2\pi[\operatorname{tr}\exp(-iF/2\pi)]_6=i\operatorname{tr}(F^3)/(24\pi^2)) for anti-Hermitian connection matrices, and fixes (E=(\mathbf3,+1)), (E^*=(\bar{\mathbf3},-1)), and the dual-connection transpose convention. The polynomial is formal on the six-dimensional extension used by descent; no six-dimensional physical theory is asserted.
- Dependencies/level: no item prerequisites; `dependency_level: 0`. Mathematics only; no physical assumption or empirical claim.
- Sources/disposition: Bilal §10.4 and Alvarez §§2.1–2.2 support the normalization and invariant-polynomial convention. The exact result is locally defined in the carrier; Bilal and Alvarez full-text stamps are present in the batch coverage.
- Current status: the polynomial normalization and E/E* connection convention are complete and source-fetch verified; both mathematical lemmas and all consuming carriers are authored.

### `lem-aqft-dual-cubic-anomaly-polynomial-cancellation`

- Claim/conventions: proves by matrix transposition and graded trace that (\mathcal I_6(E^*)=-\mathcal I_6(E)) for the conjugate SU(3)\(\times\)U(1) representations, and proves the same sign for the canonical degree-five Chern–Simons transgression. No index theorem, global anomaly result, or physical cancellation is inferred by this mathematical lemma.
- Dependencies/level: `def-aqft-cubic-anomaly-polynomial` (mathematical-premise), level 0, so `dependency_level: 1`.
- Sources/disposition: Bilal §§7.1–7.2 and 9.4 and Alvarez §§2.2–2.3 support the representation trace and descent conventions; the matrix transpose argument is complete locally. Both source fetch stamps are recorded in batch coverage.
- Current status: the dual polynomial and canonical transgression sign reversal are proved; the local-counterterm lemma, physical definitions, theorem, and examples consume this interface.

### `lem-aqft-local-counterterm-shift-is-relative-coboundary`

- Claim/conventions: for the declared finite-jet relative BRST complex, adding (sC_4+d_Hr_3) to a local anomaly representative leaves its class in (H^{1,4}(s\mid d_H)) unchanged. This is a quotient calculation, not a claim that a physical anomaly is local or that a counterterm space exists in every QFT.
- Dependencies/level: `def-qftx-local-brst-cohomology` (mathematical-premise), an external supplier, so there is no in-run supplier and `dependency_level: 0`.
- Sources/disposition: Bilal §§9.2, 9.4 and Alvarez §2.4 support the consistent-anomaly/counterterm distinction; the local quotient argument is proved directly. The precise Abelian/scalar `prop-qftx-anomaly-obstruction` is not used because its hypotheses do not establish a non-Abelian physical anomaly formula.
- Current status: the quotient identity is proved against the current local BRST supplier; the local anomaly definition, matching data, theorem, and B examples are complete.

### `def-aqft-thooft-anomaly`

- Claim/conventions: defines the local perturbative anomaly as a ghost-number-one four-form class in the finite-jet relative complex for a nondynamical background of a global symmetry. It distinguishes that class from a dynamical gauge anomaly and explicitly excludes disconnected/large transformations and global determinant phases.
- Dependencies/level: `def-aqft-p-form-global-symmetry` (formulation prerequisite, batch 37) and `def-qftx-local-brst-cohomology` (mathematical premise, batch 4); both are external suppliers, so `dependency_level: 0`.
- Sources/disposition: Bilal §§9 and 10.4 and Alvarez §§2.1–2.4 support the local variation, BRST descent, and counterterm quotient. The actual class definition is local and does not infer a physical measure.
- Current status: the local background anomaly class is defined on the background jet subalgebra; both direct external suppliers are current and ready, and the matching data and consumers are complete.

### `def-aqft-anomaly-matching-data`

- Claim/conventions: fixes flat oriented \\(\mathbb R^{1,3}\\), signature \\((-+++ )\\), natural units, trivial smooth SU(3) and U(1) backgrounds, the Grassmann-odd positive-chirality Weyl field space, mass dimensions, the \\(\mathbf3_{+1}\\)/\\(\bar{\mathbf3}_{-1}\\) conjugate pair used by the theorem, anti-Hermitian connections, the large-mass Pauli–Villars subtraction convention, the full product-group BRST differential, background-only relative cohomology, all finite-jet background counterterms, and compact-support boundary conditions. The determinant-to-polynomial relation is the explicit source-backed large-mass Pauli–Villars triangle input to this selected formal regulator datum, not a local derivation or a generic regulator theorem. The background relative cohomology is restricted to the finite-jet algebra of $A,B$ and their ghosts, so its counterterm space matches the declared background-only local counterterms.
- Dependencies/level: `def-aqft-thooft-anomaly` (formulation, in-run level 0), the p-form definition, local BRST cohomology, non-Abelian BRST complex and nilpotence lemma (external suppliers), and the cubic polynomial (in-run level 0); `dependency_level: 1`.
- Sources/disposition: Bilal §§5, 7, 9, and 10 and Alvarez §§2.1–2.4 support the exact one-loop descent input and convention boundary. The data definition asserts no global anomaly conclusion, mixed gravitational term, or continuum construction.
- Current status: the selected model and regulator contract is explicit; all six direct suppliers are current and ready, and the theorem and examples are complete against these data.

### `pthm-aqft-selected-chiral-spectrum-anomaly-cancellation`

- Claim/conventions: conditionally proves vanishing of the infinitesimal, one-loop local anomaly class for two positive-chirality Weyl species in (E=(\mathbf3,+1)) and (E^*=(\bar{\mathbf3},-1)) under nondynamical (SU(3)\times U(1)_V) backgrounds on flat (\mathbb R^{1,3}). The determinant-to-descent law is an explicit source-backed large-mass Pauli–Villars triangle input. No global, torsion, dynamical-gauge, or continuum claim is made.
- Dependencies/level: `def-aqft-anomaly-matching-data` (formulation, in-run level 1), `def-aqft-thooft-anomaly` (formulation, level 0), the dual-polynomial lemma (in-run level 1), and the relative-counterterm lemma (level 0); the maximum in-run supplier level is 1, so `dependency_level: 2`.
- Proof route: additivity of the common consistent descent, exact dual-representation trace/transgression cancellation, passage to the local relative class, and preservation under admitted counterterms. The proof does not infer the determinant law from classical BRST nilpotence or a representation coefficient alone.
- Sources/disposition: Bilal §§5.2.2–5.2.3, 7.1–7.2, 9.2–9.4 and 10.4 and Alvarez §§2.1–2.4 support the adopted physical input and conventions. The cancellation itself is derived from the local matrix identities. No external model/global-anomaly result is imported. URLs are recorded in the item and batch coverage.
- Current status: all three worked B-page examples and the exact page-manifest inventory are authored; strict contracts, source coverage, scoped gates, and Step 1 readiness records are complete.

### `ex-aqft-vectorlike-conjugate-chiral-pair`

- Claim/conventions: expands the selected (E=(\mathbf3,+1)) polynomial into pure SU(3), mixed (U(1)_V)-SU(3)(^2), and pure (U(1)_V^3) terms, then checks their cancellation with the dual species and common descent.
- Dependencies/level: anomaly-matching data (level 1), cubic-polynomial definition (0), dual-polynomial lemma (1), and the A-page theorem (2); `dependency_level: 3`.
- Sources/disposition: Bilal §§7.1–7.2, 9.4 and 10.4 and Alvarez §§2.2–2.3 support representation additivity, the conjugate trace, and descent. The source Standard Model spectrum is not imported. URLs are recorded in this item’s `sources.references` and batch coverage.
- Current status: the B manifest inventory is synchronized.

### `ex-aqft-single-chiral-fundamental-polynomial`

- Claim/conventions: verifies that a single positive-chirality (E=(\mathbf3,+1)) species has a nonzero degree-six polynomial under the selected regulator; a concrete formal six-dimensional two-form witness shows nonzero. It explicitly makes no claim that the corresponding relative class is nontrivial or globally anomalous.
- Dependencies/level: anomaly-matching data (level 1) and cubic-polynomial definition (level 0); `dependency_level: 2`.
- Sources/disposition: Bilal §§7.1–7.2, 9.4 and 10.4 and Alvarez §§2.2–2.3 support the positive-chirality trace coefficient and cubic representation polynomial. The local nonzero witness is computed directly and does not claim cohomological nontriviality. URLs are recorded in this item’s `sources.references` and batch coverage.
- Current status: the single-species example, source coverage, scoped checks, and Step 1 readiness record are complete.

### `ex-aqft-mixed-background-counterterm-shift`

- Claim/conventions: for trivial flat SU(3) and (U(1)_V) backgrounds, the local term (\lambda B\wedge\operatorname{tr}(A\wedge dA+\frac23A^3)) shifts the (U(1)_V) representative by (-\lambda\alpha\operatorname{tr}(F_A^2)) modulo a compact-support boundary term. The example does not claim that the full combined anomaly is removed or that the SU(3) representative is unchanged.
- Dependencies/level: anomaly-matching data (level 1), local anomaly definition (level 0), and the relative-coboundary lemma (level 0); `dependency_level: 2`.
- Sources/disposition: Bilal §8.3 and §§9.2–9.4 and Alvarez §§2.1–2.4 support the local Chern–Simons descent and counterterm distinction. The form identity and variation are derived in the item; the covariant representative is not substituted for the consistent anomaly. URLs are recorded in this item’s `sources.references` and batch coverage.
- Current status: the counterterm example and frontmatter-only pages are complete; manifest, strict proof contract, source coverage, scoped validation, and Step 1 readiness record are complete.

## Post-checkpoint interface and level corrections

- The selected anomaly class is explicitly computed in the finite-jet background subalgebra generated by $A$, $B$, and their ghost jets, without matter-field jets. The matching-data carrier now states the complete $\mathfrak{su}(3)\oplus i\mathbb R$ BRST rules, names both external BRST-complex suppliers, and specifies the full local background counterterm space. The worked $B\wedge K_3(A)$ term is expressly admitted.
- The regulator wording was tightened to the sourced Pauli–Villars triangle prescription with opposite-statistics regulator fields and regulator masses taken to the large-mass limit; no finite regulator scale is presented as physical input.
- Recomputed item levels use only suppliers included in this run, as the current `item-dependency-levels.mjs` does. Direct external dependencies do not raise an assigned item’s level. Current levels are: cubic polynomial 0; dual-polynomial lemma 1; local-counterterm lemma 0; local ’t Hooft definition 0; matching data 1; spectrum theorem 2; single-fundamental and counterterm examples 2; vectorlike-pair example 3. This replaces earlier notes that incorrectly counted external supplier levels as in-run levels. Batch 41 remains page-dependency level 6.


## Final scoped checks and owner-only state

- `source-fetch-check --stamp`: 4/4 source occurrences fetch-verified; `coverage-checklist`: 2 pages, 36 harvested results, 0 errors and 0 warnings.
- Strict proof contracts pass for all nine assigned items. `proof-layout` passed for all nine items with 18 proof steps and 0 defects. `precheck` passed all six proof-bearing items; the three Definitions were not applicable. `rendercheck` passed all nine items and both frontmatter-only pages.
- `content-policy` passed the batch manifest (9 items, 0 errors/warnings); focused `depcheck` and `fwdcheck` each passed the nine assigned items and their dependency/page closures. The scoped item-level graph is acyclic and computes levels 0, 1, 0, 0, 1, 2, 2, 2, 3 for the manifest order. The assigned statement-first inspection passed all nine statements with 0 defects.
- The last successful full graph calculation placed batch 41 at level 6 with exactly requirements 4, 32 and 37. It found owner-managed required-page rows changed for batches 34, 35, 43, 45, 50, 51, 53 and 54; batch 41’s row itself matched, while the input hash had changed. A subsequent run-wide check now stops earlier on invalid YAML in the outside-scope carrier `ex-qftx-omega-u1-one-instanton-factor`, line 25: `locator` contains `\widetilde` inside a double-quoted scalar. The current parser reports `Invalid escape sequence \w`. This item is outside batch 41 and was not edited. The shared scheduling snapshot remains unchanged.
- All 10 direct cross-batch rows in the batch-41 dependency file are `verified` from the scoped interface/readiness checks; same-batch A/B and item dependencies are represented in page/item manifests and contracts instead.


## Final Step 1 readiness

Each item below has a current readiness record written with `step1-decisions.mjs record`. The records list these exact direct dependencies and recheck current against the item and supplier hashes.

| Item | Level | Direct dependencies | Decision |
|---|---:|---|---|
| `def-aqft-cubic-anomaly-polynomial` | 0 | none | ready |
| `lem-aqft-local-counterterm-shift-is-relative-coboundary` | 0 | `def-qftx-local-brst-cohomology` | ready |
| `def-aqft-thooft-anomaly` | 0 | `def-aqft-p-form-global-symmetry`, `def-qftx-local-brst-cohomology` | ready |
| `lem-aqft-dual-cubic-anomaly-polynomial-cancellation` | 1 | `def-aqft-cubic-anomaly-polynomial` | ready |
| `def-aqft-anomaly-matching-data` | 1 | `def-aqft-cubic-anomaly-polynomial`, `def-aqft-p-form-global-symmetry`, `def-aqft-thooft-anomaly`, `def-qftx-local-brst-cohomology`, `def-qftx-nonabelian-brst-complex`, `lem-qftx-nonabelian-brst-nilpotence` | ready |
| `pthm-aqft-selected-chiral-spectrum-anomaly-cancellation` | 2 | `def-aqft-anomaly-matching-data`, `def-aqft-thooft-anomaly`, `lem-aqft-dual-cubic-anomaly-polynomial-cancellation`, `lem-aqft-local-counterterm-shift-is-relative-coboundary` | ready |
| `ex-aqft-single-chiral-fundamental-polynomial` | 2 | `def-aqft-anomaly-matching-data`, `def-aqft-cubic-anomaly-polynomial` | ready |
| `ex-aqft-mixed-background-counterterm-shift` | 2 | `def-aqft-anomaly-matching-data`, `def-aqft-thooft-anomaly`, `lem-aqft-local-counterterm-shift-is-relative-coboundary` | ready |
| `ex-aqft-vectorlike-conjugate-chiral-pair` | 3 | `def-aqft-anomaly-matching-data`, `def-aqft-cubic-anomaly-polynomial`, `lem-aqft-dual-cubic-anomaly-polynomial-cancellation`, `pthm-aqft-selected-chiral-spectrum-anomaly-cancellation` | ready |

The readiness recheck returned `closed: true` for all nine records, with every record hash-current and `owner: false`.


## Owner scientific repair (2026-10-23)

See `advanced-qft-supersymmetry-build-2026-10-23-owner-resolution/batch41-44-owner-resolution.md` for actual source/proof review, preserved preimages, focused checks and root-owned native recertification. Earlier author status statements above are historical, not current readiness certificates.
