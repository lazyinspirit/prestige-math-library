# Batch 13 notes — emg-g02

## Inventory, order, and plan comparison

The binding owner direction selects this pair. `plan-spec.json` and the complete assigned design section agree on A page `emg-g02`, order 461, category/library `einstein-maxwell-models/physics`, B page `emg-g02-examples`, and page prerequisites `emg-g01` and `emg-mg02`. The source inventory uses uppercase `EMG-G02`; mapping it to the canonical lowercase page ID is expected. The three reserved items are the exact assigned inventory. No semantic page or statement conflict was found.

Items were authored supplier-first: `def-emg-topological-sector` (level 1), `pthm-emg-potentials-and-topological-limits` (level 3), then `ex-emg-classical-flux-versus-normalization` (level 4). The assigned subgraph is acyclic. The levels were recomputed from the planned item DAG: G01's geometry/postulate/consumers have levels 0/1/2/2; MG02's definition/gluing/radial/sphere/patch example have levels 0/1/0/2/3. Batch 13 remains at batch level 1, with batch prerequisites 1 and 2. These are dispatch levels, not proof approval.

The batch-1 G01 manifest was initially observed with bare-string item IDs; during this work its entries became structured and now bind the current G01 draft carriers. Batch 2 also has structured entries. Their actual proof/source status remains open as described below. Shared manifests and run-level scheduling records are outside this assignment and were not edited here.

## Sources and reading disposition

The complete author-hosted Tong *General Relativity* PDF and available full-text extraction were inspected at §§2.4.2–2.4.3 (including PDF p. 84) and §3.2.5 (PDF pp. 121–122). The complete author-hosted Tong *Gauge Theory* PDF and available full-text extraction were inspected at §§1.1.1–1.1.2 (PDF pp. 15–19; printed pp. 4–8), including its full north/south patch argument. These are two independent full lecture-note treatments on each page. The ledger records results supported inline and results explicitly out of scope, including Tong GR's unproved Poincaré-lemma statement and the quantum/empirical monopole discussion.

Both source URLs were successfully fetched and verified; no retrieval failure occurred, so no `source_resolution` recovery entry or dropped disposition was created. `source-fetch-check.mjs --stamp` stamped 4/4 source entries; check mode confirms 4/4 fetch-verified and 4/4 resolved. The source ledger records the successful attempts, page locators, item support, and exclusions.

## Exact interfaces and remaining proof closure

The relevant G01 draft carriers now exist and were read in full. `def-emg-geometry-units` matches the definition's Lorentzian four-manifold, signature, smooth real two-form, and SI-unit conventions. `post-emg-covariant-maxwell` states the smooth SI clauses `dF=0` and `∇^g_aF^{ab}=−μ0j^b` on an open domain and excludes magnetic, material, singular-source, and global-potential assumptions. It is an adopted physical postulate, not a theorem; its source/scope review remains open.

The direct MG02 carriers also now exist and were read in full: `def-emg-local-potentials-and-circle-data`, `lem-emg-local-potential-construction`, `lem-emg-circle-connection-gluing`, and `lem-emg-sphere-flux-holonomy`. Their local-potential, transition-sign, curvature, sphere-flux, Stokes, and flat-holonomy interfaces match the conditional uses in G02. The local radial-primitive and sphere-flux arguments remain conditional on seven absent typed MG01 carriers: `def-emg-finite-real-supremum-domain`, `def-emg-real-metric-axiom-convention`, `lem-emg-metric-axioms-imply-nonnegativity`, `def-emg-explicit-power-regimes`, `lem-emg-sequence-limit-criterion-with-choice`, `def-emg-boundaryless-completeness-domain`, and `def-emg-set-size-and-class-schema`. The current circle-gluing proof explicitly assumes the absent set-size/schema carrier. These are existing-content authoring/maintenance obligations on prerequisite pages, not open mathematical problems, and are not duplicated here.

The planned MG01 chain reaches the current `def-countable-choice`, whose frontmatter also lists `def-axiom-of-choice`; that is stronger/less precise than the planned Heine-criterion description that invokes only countable choice. The discrepancy remains escalated; no choice principle is silently used to certify the supplier proofs. The consumer's displayed radial, tetrahedral, patch, and circle computations are explicit and finite.

Published imported context was checked at its exact interface: `def-principal-g-bundle-and-associated-fiber-bundle` is a right-principal topological definition, not a connection theorem; `def-de-rham-cohomology` defines closed forms modulo exact forms and supplies no classification; the full proof of `thm-stokes-theorem-for-smooth-singular-chains` applies to finite smooth singular chains and is declared directly by the A theorem for its tetrahedral-cycle argument; `def-emg-lorentzian-forms` fixes Lorentzian conventions; and `lem-emg-lorentz-hodge-calculus` fixes the Hodge sign, which G02 does not use.

## Scope and proof contracts

The A theorem is conditional on the adopted homogeneous Maxwell law and exact current MG02 supplier statements. It proves a local radial primitive, computes the smooth punctured-space sphere flux, gives the fixed-`κ₀` patching iff condition, forms a finite tetrahedral singular cycle for the Stokes obstruction, and computes flat circle holonomy/gauge triviality. The B page explicitly distinguishes real classical flux from an optional fixed-normalization connection. Neither page asserts a physical magnetic monopole, quantum charge quantization, quantum phase, or a coupled Einstein solution. `κ₀` is an independently selected positive flux scale in webers. The B page is a leaf; the pair is below the 100-item page cap.

Proof contracts were regenerated from the current item files. They quote exact current supplier sections, map every numbered proof step to inputs, and record the applicable boundary cases and finite flux/transition/holonomy calculations. The direct suppliers' exact statements match the consumer, while the prerequisite proof status remains open.

## Scoped check results and blockers

- Precheck: both proof-bearing items pass; the definition is not a proof item.
- Proof layout: 3 items, 10 steps, 0 defects.
- Rendercheck: 5 assigned files pass math, wikilink-in-math, delimiters, and YAML checks.
- Coverage checklist: 2 pages, 12 harvested results, 0 errors, 0 warnings.
- Source fetch: 4/4 entries fetch-verified and 4/4 resolved.
- Content policy: 3 scoped items, 0 errors, 0 warnings.
- Focused dependency check: 0 errors and 0 warnings over the three items and two pages.
- Strict proof contracts: 3/3 items checked, 0 errors, 0 warnings.
- Proof-contract coverage is blocked by another run manifest's empty/invalid inventory: `Empty or invalid frontier page inventory emg-pcp01`.
- Run-wide batch dependency levels report a stale shared scheduling record; it was not recomputed because it is owner-maintained and outside this assignment. Run-wide item dependency levels report many empty scaffolds and unrelated level mismatches outside batch 13, with no G02 level mismatch. The assigned levels match the planned subgraph.
- The run-wide Step 1 check finds 262 items, 7 ready, and remains open. All three assigned records are current-hash `escalated` records because the supplier proof closures are unresolved. Their reason strings also contain a mistaken prediction that hashing would fail on unrelated CSM frontmatter; the records were successfully written after the G01 manifest became structured. Per instruction not to overwrite an escalation, they were left intact and that stale reason tail is flagged for owner correction. No `--owner` option was used.

These records document authoring and checks only; they do not constitute independent approval.
