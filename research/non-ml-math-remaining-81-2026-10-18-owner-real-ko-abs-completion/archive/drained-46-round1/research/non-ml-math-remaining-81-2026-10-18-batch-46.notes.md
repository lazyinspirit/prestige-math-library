# Batch 46 authoring notes

Run: non-ml-math-remaining-81-2026-10-18  
Pair: PA-15, real-clifford-modules-ko-and-abs-orientations  
Role: beta, batch 46  
Dispatch level: 3; scheduled prerequisite batch: 35  
Scheduling input: 5be4d2029e9eed6bc49dd348da7c43ea6e605592640d12f4287e962137b2a877

## Plan and design reconciliation

research/plan-spec.json, the PA-15 row in research/plan-physics-algebras-track.md, the full PA-15 design section, and the owner construction agree on both page IDs, title, category, order, and the declared batch-35 prerequisite. The owner construction is binding where the older design has an empty or stale item inventory. The manifest retains all three required claims: the real ABS map and KO coefficient table; the rank-8m Spin/KO and rank-8m+4 Spin/KSp split with arbitrary-rank shifts; and the finite-dimensional stable free Dirac-mass table with its strong-only scope. No item was removed to fit the page cap.

One new dependency mismatch is exposed. The given Spin-structure definition uses the full-even negative-square Spin group and its topological double-cover map. The actual suppliers are on pin-spin-and-clifford-module-representations in batch 36, and their current carriers are drafts without Step 1 records. The dispatch and page-level requires name only batch 35. I recorded the exact batch-36 supplier path in batch-46.cross-batch-dependencies.json; I did not edit requires, the shared plan, or the batch schedule. The owner must reconcile this extra logical edge.

## Inventory and local dependency levels

The manifest contains 34 A-page items and 9 B-page items (43 total, below the 100-item cap). Item dependency_level labels were recomputed from direct suppliers inside this assigned pair; external batch dependencies remain in deps and in the cross-batch ledger, but do not change these local labels.

- A levels 0–3 contain the local group/bundle definitions and foundational statements.
- A levels 4–11 contain the suspension, decomposition, Thom, and Bott chain.
- A level 12 contains the KO coefficient theorem; level 13 contains ABS/Spin-KO orientation claims and the tenfold table.
- B levels are 0, 1, 2, 10, 12, and 14; their exact item assignments are in batch-46.pages.json.

The direct batch-35 classification, graded-module, and quaternion suppliers are now present and their complete statements/proofs were read. They remain draft and have no Step 1 records. Their exact interfaces and required hypotheses are recorded in the cross-batch ledger. Batch-34 Clifford definition, polarized relation, universal property, and PBW carriers were read; the four relevant direct suppliers have current ready records. This inspection is not independent approval.

## Authored carriers and unresolved proof obligations

Complete local arguments with proof-contract entries are supplied for:

- lem-numerated-real-vector-bundle-embeds-in-finite-trivial-bundle
- cor-finite-cw-real-vector-bundle-has-orthogonal-complement-under-ac
- lem-volume-chirality-and-clifford-hopf-clutching
- lem-graded-c-n-modules-equivalent-to-ungraded-c-n-1-modules
- lem-spectral-flattening-preserves-gap-and-symmetries
- ex-zero-dimensional-clifford-cokernel-is-z
- cex-clifford-square-sign-changes-low-rank-algebra
- ex-clifford-low-dimensional-real-signatures
- ex-class-a-zero-dimensional-index-is-negative-rank

The proofs for the volume/Hopf clutching lemma, graded-module equivalence, and zero-dimensional cokernel example are complete as local arguments but remain escalated because their batch-35 graded-module suppliers have no readiness records. The companion's explicit low-signature calculation is independent of the batch-35 classification table.

The remaining claims are retained with their exact statements, conventions, and blockers in their carriers. The key unresolved points are:

- lem-finite-cw-relative-ko-triples-and-homotopy-invariance and lem-reduced-relative-ko-suspension-exactness-and-product: construct the finite-pair model and prove the quotient, exactness, suspension, and product claims locally.
- lem-clifford-centrioles-and-geodesic-tangent-condition: prove the trace-metric midpoint identification, tangent condition, and total-geodesy statement with the stated component conventions.
- lem-relative-path-shortening-connectivity: EH §4 does not provide the required finite-dimensional relative Morse–Bott argument for finite-CW pairs and prescribed boundary maps; the polygon model, relative approximation, index filtration, and connectivity proof remain owed.
- lem-real-clifford-block-rotation-index-lower-bound: the owner construction flags a strictness gap in EH Proposition 5.4. The safe bound, slack needed for > d, and independence of counted variation directions are not established. The exceptional l=4m−2 winding estimate remains explicit.
- lem-iterated-suspension-and-winding-control-for-clifford-families and thm-affine-clifford-hopf-maps-are-highly-connected: require a complete positivity/winding convention, stabilization proof, terminal-component control, and the unresolved connectivity/index suppliers.
- thm-stable-clifford-hopf-decomposition-over-sphere-bundles, lem-uniqueness-of-stable-clifford-hopf-decomposition, and thm-real-clifford-thom-isomorphism: require the missing finite-CW cell induction, X×I uniqueness proof, surjectivity/injectivity, and actual kernel identification.
- lem-real-and-quaternionic-spinor-module-morita-evaluation and thm-spin-thom-isomorphism-rank-eight-multiples-and-rank-four-ksp: the rank-4 mod-8 source remains KSp. The Hom right-H action and balanced tensor convention are written explicitly, but the full bundle-level Morita evaluation and Thom isomorphisms are not proved.
- thm-real-bott-periodicity-from-rank-eight-clifford-thom, lem-real-and-symplectic-clutching-groups-in-low-degrees, and thm-ko-coefficient-table-and-eightfold-periodicity: the low stable homotopy computation and the local rank-eight real Bott argument are incomplete; the periodic table is not inferred from the alternative KO sources.
- lem-real-clifford-restriction-matrices and thm-abs-orientation-identifies-cokernels-with-ko: the actual restriction matrices, kernel before quotient, factorization, and symbol isomorphism remain to be proved. ABS Theorem 11.5 imports periodicity and is not used to prove this replacement.
- thm-complex-spinc-thom-orientation: ABS leaves the detailed proof to the reader. U(1)-equivariance, the complex Bott fiber, and the finite-CW argument remain owed.
- thm-antiunitary-az-classes-are-clifford-extensions and thm-tenfold-real-and-complex-clifford-extension-table: the finite symmetry and mass conventions are explicit; the local symmetry-to-Clifford and class-by-dimension proof remains incomplete.
- cex-tangent-bundle-rp2-has-no-spin-structure: Milnor–Stasheff §4 supports the formula, but the exact carrier def-stiefel-whitney-classes-from-projective-bundle-relation is absent. No unverified w1 formula is used as a proof.
- ex-bdi-one-dimensional-dirac-mass-extension: no explicit finite matrix family and integer invariant has been supplied.
- rem-strong-weak-and-interaction-scope: the caveat is retained; the referenced table is not ready.

Definitions and claims are not marked accepted by the authoring records. Every unresolved prerequisite is listed on the affected carrier, in the manifest dependencies, or in the cross-batch ledger.

## Axiom accounting

The finite numerated bundle embedding in lem-numerated-real-vector-bundle-embeds-in-finite-trivial-bundle is choice-free: its input includes the finite charts and partition. cor-finite-cw-real-vector-bundle-has-orthogonal-complement-under-ac explicitly assumes AC. Its proof uses AC for the subordinate-partition theorem and uses the local AC⇒DC supplier to discharge that theorem's distinct DC hypothesis. AC is recorded in the corollary's deps and proof contract. The downstream KO/Thom chain carries def-axiom-of-choice explicitly wherever its intended proof uses the complement result. The other completed calculations use no choice axiom.

## Source reading and disposition

The complete A-page sources were fetched as full PDFs and their cited full-text sections inspected: Eschenburg–Hanke, Atiyah–Bott–Shapiro, Atiyah's K-Theory/K-Theory and Reality, Karoubi's lecture notes, and Kitaev. The B page reuses ABS, Atiyah, and Kitaev and adds the complete Milnor–Stasheff PDF. Full text and fetch evidence are in batch-46.source-coverage.json and batch-46.source-evidence.json.

The sources support definitions, statements, examples, and proof routes only at the locators recorded in those files. Their proofs are not substituted for missing local arguments. In particular, ABS §11.5 depends on prior real periodicity; Karoubi flags the real proof as technical; the main Atiyah lectures develop complex K-theory; Atiyah's Reality paper gives a different KO route; EH §4 leaves the requested relative finite-CW argument unstated and §5.4 has the owner-identified strictness issue; and Kitaev's paper does not provide the broad disorder/interacting theorem that is outside this page's scope.

Milnor–Stasheff §4, Example 4 and Theorem 4.5 derive w(T RP^n)=(1+a)^(n+1), but that section treats existence of the Stiefel–Whitney classes axiomatically and postpones the existence proof. Since the local projective-bundle definition supplier is absent, this source result is not used as a proof of the RP² item.

No source retrieval failed and no source was dropped. The source-fetch stamp covered 9/9 records, with one newly stamped source; no source_resolution repair record was required.

## Diagram

The A-page TikZ sphere-bundle picture labels the two disk halves, equator, poles, and Clifford transition c(v). The prose fixes those labels, and each item supplies the algebraic/topological proof independently of the drawing.

## Checks

Final scoped checks:

- `precheck.mts` on the 43 assigned items: 43 files, 9 proof-bearing items checked, 0 failed.
- `proof-layout.mjs` on the assigned item files: 43 items, 26 steps, 0 defects.
- `proof-contract.mjs --strict`: 9/9 contracts passed, 0 errors or warnings.
- `content-policy` on the assigned manifest: 43 items, 0 errors or warnings.
- `rendercheck` on the 43 item carriers and two pages: 45 checked, 0 errors or warnings (`PHYSICS_REPO` set to this checkout).
- `source-fetch-check --stamp`: 9/9 sources fetch-verified; one source newly stamped, zero drops. Check mode then confirmed 9/9 resolved and fetch-verified.
- Focused `depcheck` for these 43 item IDs: 1 hard error, 0 warnings. The unresolved direct supplier is `def-stiefel-whitney-classes-from-projective-bundle-relation` in `cex-tangent-bundle-rp2-has-no-spin-structure`.
- `batch-dependency-levels.mjs check --run non-ml-math-remaining-81-2026-10-18` cannot complete because unrelated run carriers have malformed YAML compact mappings. It stops at an unquoted information-theory source title (`Nested mappings are not allowed in compact mappings at line 17, column 14`). A verified example is `items/lem-density-channel-threshold-random-coding-bound.md:19`, whose source title contains the unquoted colon in “Information Theory: From Coding to Learning”; other run carriers have the same issue. No unassigned carrier was edited.
- Step 1 records exist for 42/43 assigned items: 8 ready, 34 escalated. The 42 records were hash-checked after final carrier edits; none is stale. The remaining item, `cex-tangent-bundle-rp2-has-no-spin-structure`, has no record. The required `record` command reaches an alias-index parse failure on the unrelated unassigned carrier `items/alg-it-exhaustive-global-empirical-quantizer.md:26`, where `Robert Gallager, 6.450 Principles of Digital Communications I, Chapter 3: Quantization` is unquoted. Retrying does not bypass this parser failure, so no record was fabricated.
- The derived dependency-level artifact now places batch 46 at level 4 with prerequisites 34, 35, and 36. This conflicts with the dispatch's level 3 / batch-35-only schedule. The additional batch-36 Spin-definition and double-cover suppliers remain drafts without Step 1 records; reconciliation belongs to the owner.
- Final autopilot status check (updated 2026-10-17T17:16:17.193Z): run remains `running`, stage `1-scaffold` reports 55/81 covered with nothing in flight, and its blocker remains `plan() threw — Unexpected non-whitespace character after JSON at position 6647 (line 129 column 2)` (recorded 2026-10-17T16:44:57.525Z). No `.autopilot` state was changed.

These checks are scoped authoring evidence only; they are not independent approval. No tests were run.
