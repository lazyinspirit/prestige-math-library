# frontier-34 · batch 19 · Step 1 scaffold

Status: **BLOCKED / not sufficient**. Only the owned manifest, coverage, and these notes were written in the repository. No published item, page, canonical plan, design, run state, or other batch was edited. Temporary scripts and check outputs are in /tmp; durable evidence is embedded in the owned coverage file.

## Output and scope

The manifest preserves both assigned pairs and every designed item: graded A 11 items / B 3; Gaussian A 10 / B 5, total 29. Both A inventories are below the plan limit of 60. All 29 items have explicit deps arrays, stable correctly prefixed IDs, draft status, sources, provenance, statements and proof strategies. None required an empty deps array after auditing the actual constructions. No load-bearing forward or external references were added. Candidate tensor grading and reduced differentials have explicit justified_by pointers to their following verification lemmas.

Added local prerequisites in proof order:

- `def-one-sided-flat-module-over-an-associative-algebra`: separates right-A-flatness, left-A-flatness, and the underlying-flat convention for graded modules.
- `lem-balanced-tensor-over-an-associative-algebra-is-right-exact`: quotient-universal-property proof for associative rings, including degree-zero graded maps.
- `lem-additive-complex-homotopies-form-a-composition-compatible-equivalence`: proves the additive-category homotopy calculus, quotient and contractible-summand deletion, rather than importing abelian-category assertions unchanged.

No new prerequisite A/B pair has been identified by the examined local proof routes: these additions fit the owned A pages. This does not certify the outstanding transitive review.

## Design / current-plan comparison

Read HA-18 and HA-24 completely, including scope prose, all rows, B inventories and source control, plus the following enrichment evidence. The current plan and batch agree on all four page IDs, categories, orders, companions and requires lists. Canonical items remain empty pending the engine-managed splice; this writer has no plan write scope. No page-level design/plan conflict was found.

Mathematical interface corrections:

1. Published `def-flat-and-faithfully-flat-modules-and-ring-maps`, `thm-right-exactness-of-tensor-products`, `thm-hom-tensor-adjunction-for-modules`, and `def-restriction-and-extension-of-scalars` explicitly assume commutative rings. Their resolving IDs do not supply arbitrary associative statements. The added definition and lemma, direct bimodule currying proof, and explicit scalar-change construction close these local gaps. The published balanced universal property, outer actions, associativity and units do allow associative rings and remain suppliers.
2. Published `def-chain-homotopy`, `def-contractible-complex`, and the composition-compatibility lemma are abelian-category statements. The new additive definitions and calculus prove the extension using only additive equations. Homology is used only under an explicit abelian hypothesis and reindexed to the published chain convention.
3. The arbitrary free-summand characterization has an explicit AC boundary. Finite projective preservation is proved from finite free covers and finite lifting directly; no infinite-choice conclusion is smuggled in. The broad prerequisite graph still includes earlier AC material, so this local finite-proof observation is not a statement that the entire declared closure is choice-free.
4. `M{r}_d=M_(d-r)` agrees with the old twist `M(-r)`. Hom_d raises degree by d, and HOM is a direct sum over degrees. For unrestricted modules, HOM must not be identified with all ungraded Hom. The graded right adjoint is HOM_B(M,Y), not Hom_0 by itself. There are no super signs.
5. The CMW source locator in the design describes “Appendix A.2” for the double pivot. In the inspected texts, **Lemma A.2 is in Appendix A.1**; Appendix A.2 concerns Reidemeister maps. Coverage uses the exact heading. The live arXiv copy differs in pagination from the author-hosted cache; both locators and original_url are retained.

## Proof audit of the owned routes

The graded category uses degreewise kernels, images, quotients and coimage/image isomorphisms for all modules. It does not assume finitely generated modules form an abelian category over arbitrary rings. Finite homogeneous generators give shifted-free covers; only finitely many homogeneous lifts are needed. Tensor projective preservation uses the output LEFT B side, exactness the input RIGHT A side. The two dual-number witnesses explicitly compute augmentation actions, the nonsplit simple extension, and the tensor map that becomes zero.

The Gaussian convention is cochain, with rows B,V, columns A,U and lower-right pivot phi. The manifest prints L,R and both inverses. The two neighbour equations are cp+phi q=0 and rb+s phi=0, hence transformed neighbours [p;0] and [r,0]. It prints p,i,h and checks pi=1, 1-ip=dh+hd, ph=hi=h^2=0. Finite composition uses h1+i1 h2 p1 and validates pivots in the CURRENT complex. The CMW double-pivot example prints both composite retracts and their two nonzero homotopy blocks; no general confluence is claimed. Transfer of maps has defect homotopy p_Z g h_Y f i_X. The off-diagonal example refutes strict chain-level composition while preserving functoriality on homotopy classes. None of this uses abelian, finite-dimensional, projective, or bounded assumptions for cancellation itself.

## Source evidence

Coverage records nine source documents, 58 harvested/disposed rows, exact locators and per-item support. Both A pages include an independent textbook treatment: Weibel Chapters 2/3 for projective lifting and one-sided flatness, and Chapter 1 §1.4 for Gaussian homotopy machinery. These are complete fetched chapters, not a claim to have obtained/read the entire textbook. The graded treatment also reads Kleshchev §2.2, Khovanov–Seidel §§2a–2c and the complete mathematical text of Stacks §§22.15,24.8. Gaussian reads Bar-Natan Lemma 4.2 and §5, CMW Appendix A.1 Lemmas A.1–A.2, and Weibel §1.4 completely. Specialized quiver, simple-module, Cartan and topological results receive explicit scope dispositions. Local derived witnesses are labelled as adaptations, not fabricated named source results.

The author CMW URL failed in the web tool. Recovered a live full arXiv copy of the same work, re-read both lemmas with its new locators, and retained original_url. The other eight current URLs opened through the web tool. Existing complete PDF text caches were used for Kleshchev, KS, CMW and Bar-Natan relevant ranges. Abstracts/search snippets were not used as proof evidence.

## Required checks actually run

| Check | Observed result |
|---|---|
| `coverage-checklist` on owned coverage, `--require-destination` | PASS: 2 pages, 58 rows, 0 errors/warnings. |
| `manifest-deps` across all `frontier-34-batch-*.pages.json` | PASS: final observed run 761 items, 0 missing/normalized/errors. Other batch writers are active; earlier snapshot had 691. |
| `content-policy --manifest-only` on batch 19 | PASS: 29 scoped items, 0 errors/warnings. |
| `validate-plan research/plan-spec.json` | PASS, with existing redundancy warnings and unpopulated future inventories. |
| `validate-plan` on temporary canonical-plan copy overlaid with all four owned inventories | PASS: 896 populated pages; no item cycles, forward/B-leaf dependencies or unresolved IDs. Canonical plan untouched. |
| `extcheck` | PASS: no hard errors; legacy published/unproved warnings remain. This global tool includes the Foundations bootstrap boundary. |
| Recursive page requires and item deps inventory, plan/current run/published overlay | 139 pages / 3,407 items for graded A; 116 / 2,971 for Gaussian A (includes each owned A inventory). No missing/circular/forward page edges or missing/circular item deps found by this traversal. All nonowned suppliers in these traversals are published. This is structural evidence only. |
| URL liveness | FAIL: 0/9 shell-live; all nine curl errors are “Could not resolve host”. |
| `source-fetch-check --stamp --timeout-sec 3` | FAIL: 0/9 fetched, nine EAI_AGAIN failures, no stamps written. |
| `source-backing --require-verified` | FAIL: final 29 included results have no usable source under the failed shell-liveness evidence. |

No authoring precheck, rendercheck, proof judge or publication check was run; there are no authored item files in this task.

## Open blockers and next actions

**F19-SOURCE (content blocker).** Shell DNS prevents the required URL and fetch gates from validating all nine sources. The successful web full-text reads do not make these CLI checks pass. No source was deleted, no evidence stamp invented, and no broader access requested. Re-run URL liveness and source-fetch stamping in the normal network-capable dispatch environment, then source-backing; all failed evidence is embedded in coverage.

**F19-CLOSURE (fatal readiness finding).** The complete transitive semantic audit required by the scaffold contract is unfinished. Reading the graph is not reading every exact statement and proof. Coverage embeds every traversed node, deps/justified_by/forward_refs, hash and status, plus every page prerequisite path; only the explicitly listed full-text suppliers were reviewed. Nodes marked `semantic-review-outstanding` must be examined for statement adequacy, hypotheses, direction, conventions, axiom strength and actual proof use before either pair can be declared sufficient. The large closure is not a waiver. No finding here authorizes weakening the mathematics or modifying a published supplier.

On handoff, reread this manifest and coverage against the pinned hashes, inspect all open obligations, and continue the semantic closure review. If it exposes a missing prerequisite pair, record its full title/category/placement/requires/A-B inventory here and keep consumers blocked until the authorized plan writer adds it. Do not advance the engine or treat this scaffold as ready based on the structural passes.
