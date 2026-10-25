# Batch 20 — Step 1 authoring evidence

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Role: beta  
Updated: 2026-10-23

## Plan, design, and inventory

The complete design section for “Gauge Fixing and Formal Perturbative Yang–Mills” at line 275 of `research/plan-advanced-qft-and-supersymmetry-track.md` matches the assigned row in `research/plan-spec.json`: A/B page IDs, order 976, title, category, library, and required pages agree. Its scope requires an explicit regulator, gauge condition, renormalization prescription, formal coefficientwise scope, and a clear distinction between finite-dimensional Jacobians and continuum measures. No design/plan-spec conflict was found.

The owner authoring direction overrides the empty planning item arrays on the B page. The A page now contains the formal data definition and the conditional Slavnov–Taylor theorem; the B page contains two complete examples. Both local page files contain YAML frontmatter only and have empty Markdown bodies. No page summary or layout flag was authored.

The current selected model carrier is pure (SU(2)) Yang–Mills with no matter fields. The actual model and classical gauge-invariance statements were read before finalizing the interfaces. The new definition, theorem, and BRST example were narrowed to that model. The finite-orbit (S^1) example explicitly remains a separate finite-dimensional regulator toy.

## Authored items and argument decisions

### `def-qftx-formal-perturbative-yang-mills-data` — level 4

Defines the adopted pure-(SU(2)) local field conventions, right-action curvature, Lorenz gauge and gauge-fixing fermion, dimensional regularization (D=4-2\epsilon), modified minimal subtraction, a finite-jet counterterm space bounded by (d_*), and the local QAP property. The QAP defect and its consistency equation are explicit input data, not a derived theorem. The definition states the classical master-equation and no-ghost-number-one-center admissibility conditions and does not construct a continuum measure.

Its direct in-run suppliers are the BRST complex and nilpotence lemma, local BRST cohomology definition, BV antibracket definition, gauge-slice definition, principal-connection definition, curvature lemma, model postulate, and classical gauge-invariance theorem. The maximum current in-run supplier level is 3, so the item level is 4.

### `pthm-qftx-perturbative-yang-mills-st-identity` — level 5

Proves a conditional coefficientwise Slavnov–Taylor restoration theorem. At each first failing order, the local QAP defect is removed using an explicitly supplied ghost-number-zero local primitive modulo a horizontal derivative. The proof expands the antibracket at that order, uses the declared support/boundary condition, and iterates in formal powers of the loop-counting variable. It also identifies counterterm and obstruction classes with the stated power-counting restrictions on (H^{0,4}(s\mid d_H)) and (H^{1,4}(s\mid d_H)). It proves neither the QAP nor anomaly cancellation and makes no continuum, convergence, nonperturbative, or empirical claim.

The model postulate and classical gauge-invariance theorem are current draft carriers with missing current Step-1 readiness records. Their actual pure-(SU(2)), no-matter interfaces match the authored use, and the complete classical gauge-invariance proof was inspected. They are treated as explicit conditional inputs, not as independently accepted results. The proof contracts were regenerated after the canonical phase-step layout was adopted.

### `ex-qftx-brst-exact-lorenz-gauge-term` — level 5

Computes the Lorenz-gauge fermion variation using the odd left-derivation rule, checks local density dimension, parity and ghost number, and derives BRST closure from nilpotence on the minimal and nonminimal generators. Its cohomology class is zero by the local cohomology definition. It makes no global-slice or continuum-measure claim.

### `ex-qftx-finite-orbit-faddeev-popov-jacobian` — level 3

For the right (S^1) rotation action on \(\mathbb R^2\setminus\{0\}\), computes the local transverse Jacobian \(\Delta_{\rm FP}(r,0)=r\) and separately solves the global condition (y=0), obtaining the two points ((r,0)) and ((-r,0)). The TikZ sketch is explanatory only; the proof uses the displayed action and derivative. The regulator group is not identified with the model's structure group.

The local in-run levels recompute exactly from the final item edges: definition 4; Slavnov–Taylor theorem 5; BRST example 5; finite-orbit example 3. The two B examples are listed in supplier-first level order.

## Source readings, searches, and dispositions

The A page is backed by two independent full-text treatments, including full lecture notes:

- [Barnich, Brandt, and Henneaux, *Local BRST cohomology in gauge theories*](https://arxiv.org/pdf/hep-th/0002245), a full 150-page review paper. Read sections 2.2 “Gauge theories of the Yang–Mills type,” 2.3 “Relevance of BRST cohomology,” Appendix 2.A “Gauge-fixing and antighosts,” 12.2 “(H^{0,n}(s\mid d)): Deformations and BRST-invariant counterterms,” and the opening of 12.3 “(H^{1,n}(s\mid d)): Anomalies.” The coverage file maps each named result to its item and marks it `included`. The general cohomology classification is not imported as a proof supplier.
- [Axel Maas, *Quantum Field Theory II: Gauge Theories* (2024 full lecture notes)](https://static.uni-graz.at/fileadmin/_Persoenliche_Webseite/maas_axel/qftii2024.pdf), 188 pages. Read section 4.5 “BRST and asymptotic states,” 4.7.2 “Slavnov–Taylor identities,” 5.2.7 “Gauge-symmetry-breaking regulators,” and 5.2.8 “Dimensional regularization.” The coverage file maps each named result to its item and marks it `included`. The notes' formal path-integral derivation is not used to prove the local QAP or anomaly cancellation.

The BHH PDF search for section headings did not return the contents directly; the known full arXiv PDF was opened, and its contents page and cited sections were inspected. The Maas full-PDF search result exposed the exact section headings, which were then checked in the full notes. No retrieval failed. `source-fetch-check --stamp` recorded both full-text sources; final check mode confirms 2/2 stamps. Since retrieval succeeded, no `source_resolution` failure/drop record applies.

## Cross-batch dependencies and readiness

`research/advanced-qft-supersymmetry-build-2026-10-23-batch-20.cross-batch-dependencies.json` is a JSON array with one row per direct off-batch item or page edge: 27 rows total, 22 `verified`, 5 `open`. The verified rows cite current ready supplier records and scoped interface checks; they do not claim independent proof approval. The five open rows are the two direct model/gauge-invariance edges from each of the formal data and theorem items, plus the A-page requirement on the model page.

Current readiness was reloaded with `loadStep1Record` and checked with `step1Decision` before recording these outcomes:

- Batch 2 principal connection and curvature suppliers: current `ready` receipts; both interfaces were inspected.
- Batch 3 gauge-slice page: both current items have `ready` receipts; the page edge is `verified`.
- Batch 4 BRST/BV page: all six current items have `ready` receipts; the page edge is `verified`.
- Batch 19 Yang–Mills model page: its four in-run items (`lem-qftx-su2-compact-nonabelian-invariant-form`, model postulate, classical gauge-invariance theorem, and Euler–Lagrange theorem) have no current Step-1 readiness records. The model postulate and classical gauge-invariance theorem are the two direct conditional inputs used here; the page edge remains `open`.

The transitive page observations are kept here rather than added as unsupported cross-batch rows: batches 3, 4, and 19 also require the batch 2 gauge-geometry page, while batch 19 additionally requires `qft-c01`.

Final Step-1 records, all with `owner: false`:

- `def-qftx-formal-perturbative-yang-mills-data`: `escalated`, dependencies recorded, hash `2c60669abd690d0a73d2cbce7bf67c720b1a07c9fdb24fbc76889a404320eef2`.
- `pthm-qftx-perturbative-yang-mills-st-identity`: `escalated`, dependencies recorded, hash `9689fdcbdd482ae152cb0bdd5cb8d0905fab0e0a7e935ec5503d62f997e4814c`.
- `ex-qftx-brst-exact-lorenz-gauge-term`: `escalated`, dependencies recorded, hash `5eca97d248761f6786bfaf63c08f631b56fd2085b937954aca85aba8dcff0701`.
- `ex-qftx-finite-orbit-faddeev-popov-jacobian`: `ready`, its sole direct input is the current ready gauge-slice definition, hash `e62b23e1f6c3cb58701866f992e18cfc6e06b48e77a804f9121bedce1796e2ef`.

The escalations reflect the fresh missing Step-1 records on the two in-run physical input carriers; `status: draft`, `verification.precheck: pending`, and missing independent approval were not used as blockers. The current item hashes match their records. These are authoring-readiness records only, not independent acceptance.

## Scoped checks and run-level blockers

Passed on the final artifacts:

- `coverage-checklist`: 1 A page, 9 named harvested results, 0 errors and 0 warnings.
- `source-fetch-check` check mode: 2/2 full-text sources fetch-verified.
- `proof-contract.mjs --strict`: all 4 items checked, 0 errors and 0 warnings.
- `proof-layout.mjs`: all 4 items, 13 proof steps, 0 defects.
- `precheck.mts`: all 3 proof-bearing items pass; the definition has no proof phase and is not applicable.
- `content-policy.mjs`: 4 scoped items, 0 errors and 0 warnings.
- `depcheck.mjs` focused selection: 1,358 dependency-closure items and 360 pages, 0 errors and 0 warnings.
- `rendercheck.mjs`: four items and both pages pass KaTeX/YAML rendering checks.
- Scoped `physics-content` validation: 4 items and 2 pages, 0 errors.
- Item dependency levels: all four declared levels match recomputation.
- Page inspection: both page bodies are empty; item statement sections contain no inline hyperlinks; B inventory mirrors its two examples.

Run-wide checks remain owner-level blockers and were not repaired here:

- `physics-check.mjs --run advanced-qft-supersymmetry-build-2026-10-23` cannot load the entire run because batch 27 contains an invalid or empty current page. The scoped physics-content validation for this pair passes.
- `item-dependency-levels.mjs check` reports other batches' empty inventories; no batch-20 item mismatch is reported.
- `batch-dependency-levels.mjs check` reports the shared snapshot stale. Its current recomputation puts batch 20 at level 2 with direct batch requirements 2, 3, 4, and 19; the recorded shared file has 3, 4, and 19 and a different input hash. That shared batch-dependency file was left untouched for the owner.
