# Batch 8 authoring notes — Quasitriangular Hopf Algebras and Braided Module Categories

## Scope, plan, and scheduling

The owner direction was read before authoring and governs this pair. It overrides the stopped quantum-hopf-hecke-75 run and requires all output here to remain draft. The HH-9 section of `research/plan-hopf-hecke-algebras-track.md` and the HH-9/HH-9-B entries in `research/plan-spec.json` agree on page IDs, order, category, companions, and page prerequisites. No scope conflict was found. The plan-spec empty inventories were pre-authoring shells, not a scope reduction.

The original HH-9 source inventory specified the five planned A items. The A page also adds `lem-hh-tensor-algebra-regular-detection` as an explicit local result: it states and proves the exact unit-evaluation detection of arbitrary elements of the tensor-product algebras used when recovering R from the regular modules. This makes the tensor-algebra use explicit alongside the existing regular-module supplier. The B page has three complete examples: R=1 on the two-element group algebra, an invertible scalar QYBE solution that fails a hexagon, and the four-dimensional group double of C2 with its dual-basis canonical R.

The batch-8 item levels were computed from the current actual in-run supplier labels before carrier creation. The relevant supplier levels are `def-hh-hopf-algebra-and-antipode` at 2, `def-hh-module-category-and-tensor-action` at 2, and `thm-hh-bialgebra-module-tensor-coherence` at 3. The batch-8 labels are:

| Item | Level | In-run direct suppliers determining the level |
|---|---:|---|
| `lem-hh-tensor-algebra-regular-detection` | 0 | none |
| `def-hh-leg-notation-and-quasitriangular-hopf-algebra` | 3 | Hopf definition, level 2 |
| `lem-hh-quasitriangular-counit-and-yang-baxter-identities` | 4 | leg definition, level 3; Hopf definition, level 2 |
| `def-hh-braiding-and-triangular-structure` | 4 | leg definition, level 3; module definition, level 2; module coherence, level 3 |
| `thm-hh-r-matrix-constructs-a-module-braiding` | 5 | braiding definition and counit/YBE lemma, each level 4; module coherence, level 3 |
| `lem-hh-local-braiding-operators-obey-braid-relations` | 6 | R-braiding theorem, level 5; counit/YBE lemma, level 4 |
| `ex-hh-trivial-r-matrix-for-cocommutative-hopf-algebra` | 5 | braiding definition, level 4; module coherence, level 3 |
| `ex-hh-yang-baxter-alone-does-not-give-quasitriangularity` | 5 | counit/YBE lemma, level 4 |
| `ex-hh-canonical-r-matrix-for-the-double-of-cyclic-two-group` | 4 | leg definition, level 3; Hopf definition, level 2 |

Batch 8 remains at the dispatch level 5 with direct prerequisite batches 3 and 5. These are page scheduling labels; the maximum logical item level in this pair is 6.

## Supplier audit and exact holds

The published tensor suppliers used by the leg and tensor-detection proofs were read in their current bodies: `def-hh-scalar-and-tensor-conventions`, `thm-tensor-product-of-algebras-over-a-commutative-ring`, `lem-hh-tensor-coherence-on-elementary-tensors`, `thm-symmetry-and-associativity-over-a-commutative-ring`, `thm-unit-isomorphisms-for-module-tensor-products`, and `prop-functoriality-of-module-tensor-products`. Their field, algebraic-tensor, componentwise-product, unit, and associator conventions match these carriers. The full current body of `lem-hh-regular-module-detects-linear-and-tensor-identities` was also read. Its general statement can be applied with algebra A=H⊗H or A=H^{⊗3}, n=1; the earlier suspicion that it could not detect tensor-algebra elements was incorrect. The new local tensor-algebra detection lemma makes this exact specialization explicit.

Batch 3 has now populated its manifest and the actual bodies of `def-hh-bialgebra-and-bialgebra-map`, `lem-hh-convolution-algebra-associativity-and-unit`, and `def-hh-hopf-algebra-and-antipode` are present. The Hopf definition uses the two-sided convolution inverse, states no compositional or bijectivity requirement, and its interfaces match the HH-9 uses. The convolution proof was read in full; its associativity, both unit contractions, and no-dimension restriction match the use here. The bialgebra/coalgebra definitions supply the required algebra maps, counit, and coassociativity. No Hopf or module supplier is being described as absent now.

The actual batch-5 bodies of `def-hh-module-category-and-tensor-action` and `thm-hh-bialgebra-module-tensor-coherence` were read in full. The module definition fixes all left modules, the diagonal action, the counit unit candidate, and module maps. Its opening sentence has one cosmetic plain-text `Delta` occurrence; the same coproduct is explicitly denoted `\Delta` in the defining formula. The module-coherence theorem's statement and proof supply the needed associator/unit facts. In particular, Proof 1.4's left-unit calculation is valid as written: `Σ ε(h_(1)) c h_(2)v = c h v = h·λ(c⊗v)`, by the left counit identity and scalar-linearity. The earlier concern that this line was malformed is not borne out by the current body. No batch-5 files were edited.

There are also current cross-batch evidence mismatches outside batch 8. Batch 3's notes say its HH-3 page dependency remains open because the HH-3 page/items contain stale claims that HH-2 suppliers are absent, although the current batch-1 manifest and coalgebra carriers are populated. Batch 5's `cross-batch-dependencies.json` similarly retains interface-only rows for batch-3 suppliers and says batch 4 is empty, although batch-3 and batch-4 manifests now contain item inventories. These are not repaired here. Batch 8 records the actual current bodies and leaves page-level edges open for owner reconciliation.

The HH-9 leg definition retains its planned `justified_by` edge to `thm-hh-finite-double-hopf-structure-and-canonical-r` on HH-10. That theorem body is present and was read, but its proof/dependency closure has not been certified here. HH-10 [A1] still says its HH-8 bijective-antipode proof is pending inspection; batch 8 independently read the present `thm-hh-finite-integrals-are-one-dimensional-and-antipode-is-bijective` proof, whose finite-dimensional Hopf hypotheses give exactly the needed bijectivity, but did not audit that theorem's own supplier closure. HH-10 also relies on `def-hh-finite-double-cross-relations`, `lem-hh-double-coalgebra-and-antipode-descent`, `thm-hh-double-modules-and-yetter-drinfeld-modules`, and `lem-hh-finite-tensor-duality-and-canonical-coevaluation`; the exact open hypotheses and affected claims are recorded in the cross-batch input. The current HH-10 carrier level is 13, its batch-9 manifest label is 4, and the run-wide item checker computes 12. The owner must reconcile that target and its evidence before closing the justification edge. The C2 double example is proved independently and uses the HH-10 link only as a nonlogical forward reference; it does not pretend to complete the general double theorem.

## Mathematical and source findings

The A-page arguments prove the leg insertions on algebraic tensors before stating the R axioms; derive both counit normalizations and QYBE from invertibility, the hexagons, and the intertwining identity; prove H-linearity, naturality, both braiding hexagons, triangular/symmetric equivalence, and the converse regular-module reconstruction; and verify local adjacent/distant operators without asserting a Hecke quadratic relation. The converse explicitly uses the category of all left H-modules, so the regular module is available even when H is infinite-dimensional. No choice axiom or finite-dimensionality assumption is added to HH-9.

The C2 double example defines its finite-group double convention, checks the four-dimensional Hopf structure on its full basis, and verifies invertibility, the intertwining identity, and both hexagons for the canonical dual-basis R. The scalar Q example has invertible R=2, satisfies both sides of QYBE as 8, and fails the first hexagon because 2 differs from 4 over Q. The group-algebra example verifies R=1 only under the explicit cocommutative hypothesis.

Kytölä, §4.2, Example 4.8 (printed p. 65), says a commutative bialgebra has Δ=Δ^op. That implication is false. For a nonabelian finite group such as S3, the pointwise function algebra k^{S3} is commutative, while Δ(f)(g,h)=f(gh) is not cocommutative: for g=(12), h=(23), and f the indicator of (123), Δ(f)(g,h)=1 but Δ^op(f)(g,h)=0. No HH-9 proof uses the source's false implication; our example assumes cocommutativity directly.

The A page also records the source boundary for generic U_q(sl2): Etingof–Semenyakin §3.7.3, Remark 3.41 (printed p. 22) places its infinite universal R in a completed tensor product and limits the module braiding to the locally nilpotent setting. HH-9's definition remains algebraic R∈H⊗H.

## Source retrieval and coverage

The A page uses two independent full-text lecture-note treatments: Kalle Kytölä, *Introduction to Hopf Algebras and Representations*, §4.2, printed pp. 62–68, and Pavel Etingof–Mykola Semenyakin, *A Brief Introduction to Quantum Groups*, §§3.1.1–3.1.2, 3.2.3–3.3.4, 3.4.3, and 3.7.3. Relevant arguments were inspected in full; sources and every harvested named result have dispositions in `research/hopf-hecke-unfinished-15-2026-10-15-batch-8.coverage.json`.

Kytölä's original `www.math.hut.fi` PDF URL failed with SSL host-name mismatch. Search found the author-hosted Aalto mirror; one recovery retry succeeded, and the full 91-page PDF was fetched and inspected over the relevant section. Etingof–Semenyakin's full 43-page PDF fetched successfully on the first attempt. `source-fetch-check --stamp` reported 2/2 verified, zero source drops. The source history and actual stamps remain in the coverage file.

## Construction checks and handoff

All contents remain draft. Proof contracts are generated from the actual numbered steps and exact current supplier statements where those bodies exist; absent excerpts were never fabricated. The A/B pages, batch manifest, coverage, proof contracts, batch notes, cross-batch input, and Step-1 readiness records are the only owned outputs.

Final scoped results:

- `node tools/item-dependency-levels.mjs check --run hopf-hecke-unfinished-15-2026-10-15` reports no batch-8 label errors. This pair's current labels remain 0, 3, 4, 4, 5, 6, 5, 5, and 4 in the inventory order above.
- The same run-wide check reports nine unrelated HH-10 mismatches: `def-hh-finite-double-cross-relations` 0/8, `def-hh-left-left-yetter-drinfeld-module` 0/4, `lem-hh-double-crossing-map-and-associativity` 1/9, `lem-hh-double-coalgebra-and-antipode-descent` 2/10, `thm-hh-double-modules-and-yetter-drinfeld-modules` 3/11, `thm-hh-finite-double-hopf-structure-and-canonical-r` 4/12, `ex-drinfeld-double-of-a-finite-group` 5/13, `ex-a-nonabelian-double-has-noncommutative-cross-relations` 6/14, and `cex-full-dual-of-infinite-group-algebra-has-no-algebraic-coproduct` 0/1 (declared/computed). No out-of-pair carrier was edited.
- `node tools/batch-dependency-levels.mjs check --run hopf-hecke-unfinished-15-2026-10-15` recomputes and reports the shared batch-level artifact stale after populated manifests changed. The shared scheduling artifact is left for the owner to recompute.
- `proof-layout` reports 9 items, 37 steps, 0 defects. The phase precheck reports 8 applicable proof bodies, 0 failures; the braiding definition is not applicable. `content-policy` reports 9 items, 0 errors and 0 warnings; `depcheck` reports 0 errors/warnings; `fwdcheck` reports 0 open references and 1 closed nonlogical HH-10 forward reference; `extcheck` reports 0 errors/warnings; `citecheck` reports 0 warnings; and `rendercheck` reports 11 files, 0 errors/warnings.
- `proof-contract.mjs` validates all 9 contracts with 0 errors/warnings. `source-fetch-check --stamp` verifies 2/2 full-text sources with 0 new stamps and 0 drops. The coverage checklist has 0 errors and one low-yield warning: 9 of 33 harvested results are scaffolded as items; the other results have explicit included, inline, deferred, or out-of-scope dispositions and reasons in the coverage file. The checklist's requested independent Alpha confirmation remains pending.
- Step-1 records were written without `--owner`: `lem-hh-tensor-algebra-regular-detection` is `ready`; the other 8 items are `escalated` because their dependency chain includes the open HH-10 justification closure described above. The run-wide Step-1 checker remains open for other batches and reports 138 items, 22 ready.

The owner holds are the stale shared batch-level scheduling artifact, the HH-10 manifest/carrier/computed-level mismatch and its unaudited transitive justifier closure, and the current HH-4/HH-6 page-level supplier-evidence reconciliation recorded in `research/hopf-hecke-unfinished-15-2026-10-15-batch-8.cross-batch-dependencies.json`. No item was marked ready on an absent supplier excerpt or uninspected proof. These Step-1 records are authoring evidence, not approval.
