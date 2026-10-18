# Batch 52 authoring notes — derived Hall algebras

Run: `non-ml-math-remaining-81-2026-10-18`  
Role: beta · batch: 52 · scheduled level: 2 · direct prerequisite batches: 41 and 50  
Scheduling input SHA-256: `825ada459eb8a44f2bca9b180e0d40e43ed62d08f26d224468ce63c38b792042`

## Controlling instructions and design

Read the canonical `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, `briefs/beta-scaffold.md`, the batch-52 task and ordering task, `research/non-ml-math-remaining-81-2026-10-18-owner-authoring-direction.md`, the batch dependency-level JSON, `research/plan-spec.json`, the PA-21 entry in `research/plan-physics-algebras-track.md`, and the complete relevant Hall dossier and diagram/prerequisite contracts. The owner direction controls stale task/design text. The build transition owner remains `tools/autopilot/`; this batch did not modify run state, shared plans, published items, or verdicts.

The PA-21 entry in `plan-physics-algebras-track.md` is a table mention, not a design section. The complete design route is dossier 06 §3.5 and the PA-21 entries in `proposed-pages.json`, `definition-and-diagram-contracts.md`, and `prerequisites.md`. It requires Toën's finite-field dg-enhanced construction, the higher-Ext homotopy factor, homotopy-cartesian associativity, the hereditary-heart comparison, and explicit separation from Kapranov and unweighted triangle counts. Those claims and warnings are retained.

### Recorded design conflict

The old PA-21 B-page proposal describes examples spanning derived, motivic, and cohomological Hall algebras. The current plan has separate PA-23 and PA-24 pairs and current batch assignments for those constructions. Batch 52 therefore owns only the derived-Hall A2 computation and the derived higher-homotopy counterexample. Motivic examples remain on `[[motivic-hall-algebras-and-integration-examples]]`; CoHA examples remain on `[[cohomological-hall-algebras-and-quiver-correspondences-examples]]`. No PA-23/24 item is a logical dependency of batch 52. This scope conflict is recorded here and on the B page; the shared plan was left unchanged.

### Recorded supplier-convention conflict

The actual PA-19 `def-untwisted-hall-algebra` body defines `[M]*[N]` by subobjects isomorphic to `N` with quotient `M`. Toën's convolution uses the source as subobject and the cofiber as quotient. Consequently the heart comparison is an embedding of the **opposite** untwisted Hall algebra. The theorem title, statement, proof, A-page convention note, and A2 example all preserve this direction. It is not described as a same-order algebra homomorphism.

## Inventory and dependency levels

The exact per-item `deps`, `justified_by`, levels, kinds, and titles are in `research/non-ml-math-remaining-81-2026-10-18-batch-52.pages.json`. Local levels were computed from all in-run suppliers, including the inspected PA-10 and PA-19 suppliers; external published items do not increase a level.

| Level | A-page items |
|---:|---|
| 0 | `def-locally-finite-homotopy-type` |
| 1 | `lem-homotopy-cardinality-base-change`; `lem-homotopy-fiber-component-weight-ratio` |
| 2 | `def-toen-locally-finite-dg-category`; `lem-homotopy-cardinality-pushforward-is-functorial` |
| 3 | `def-toen-derived-hall-algebra`; `lem-perfect-dg-modules-have-finite-total-ext` |
| 4 | `lem-derived-hall-moduli-spaces-and-convolution-are-finite`; `lem-derived-hall-stabilizer-homotopy-sequence` |
| 5 | `lem-derived-hall-associativity-squares`; `thm-toen-derived-hall-number-formula` |
| 6 | `thm-toen-derived-hall-algebra-is-associative-and-unital` |
| 7 | `thm-hereditary-heart-embeds-in-derived-hall-algebra` |
| 8 | `rem-toen-kapranov-and-triangle-counts-are-distinct` |

| Level | B-page examples |
|---:|---|
| 6 | `cex-naive-triangle-orbit-count-omits-derived-homotopy-weight` |
| 8 | `ex-hereditary-a2-heart-product-in-derived-hall` |

The A2 example verifies its own finitary and hereditary hypotheses before applying the heart theorem; no new general quiver-Hall supplier was added alongside the existing PA-20 result. Batch 52 has 14 A items and 2 B examples, below the 100-item cap.

## Cross-batch supplier inspection

`research/non-ml-math-remaining-81-2026-10-18-batch-52.cross-batch-dependencies.json` records the page edges and exact item edges as `verified` after inspecting current supplier bodies. “Verified” here means the declared interface was checked; the PA-10 and PA-19 carriers are drafts and this record claims neither acceptance nor independent approval.

- PA-10: `def-differential-graded-algebra` fixes cohomological grading and the signed Leibniz rule; `def-differential-graded-module` fixes separate left/right conventions and the right-module differential sign. The local enhancement uses right dg functors, degree-one differentials, and derived mapping spaces with `pi_j Map(a,b)=Ext^{-j}(a,b)`.
- PA-19: `def-hall-finitary-abelian-category` requires a small abelian category and finite Hom/Yoneda Ext1 sets; `def-untwisted-hall-algebra` fixes the subobject order stated above; `lem-untwisted-hall-product-finiteness` proves finite support; `thm-untwisted-hall-algebra-is-associative-and-unital` proves the supplier algebra law and unit. Their exact bodies and the exact hypotheses checked are recorded in the dependency file.
- No required cross-pair body was absent at handoff. No supplier excerpt or acceptance claim was invented.

### A2 reuse-scope check

The current batch-51 draft `lem-finite-acyclic-quiver-hall-category-is-hereditary-finitary` is a general finite-acyclic-quiver result and includes the A2 case. Its body and proof were inspected. A direct edge from batch 52 to that batch-51 item would introduce a same-level dependency (both batches are scheduled at level 2) and change the given prerequisite set. Batch 52 therefore does not add that edge or create a second A-page supplier. The B example proves the specific A2 finitary, hereditary, and subobject calculations it uses inside its verification. This keeps the dispatch's batch-level input unchanged; owner reconciliation is needed only if PA-20 is intended as a formal prerequisite for PA-21.

## Mathematical decisions and axiom use

- The locally finite homotopy-type item defines homotopy weights with the product over positive homotopy groups. The fiber-ratio lemma handles the component tail via the fibration LES and finite group orders; base change and pushforward functoriality are proved locally.
- The Toën coefficient formula has a dedicated stabilizer exact-sequence lemma. Its `pi_1` low-degree tail maps onto `Aut(f/z)`; it is not replaced by the false assertion that this stabilizer is the component set of a mapping-space fiber.
- The first associativity square includes an explicit mapping-cone coordinate change showing `Cone(k) ≃ Cone(g)`. The second reconstructs the middle object by a stable homotopy pullback. The convolution proof applies base change with the proper lower map `s×t` and identifies the same triple input and target maps.
- The heart theorem assumes an exact realization of the bounded heart in its statement. T-structure orthogonality kills negative Ext for heart objects. The exact Hall supplier order forces the opposite-algebra conclusion.
- The A2 local lemma verifies the category is small finitary hereditary using vertexwise kernels/cokernels, finite matrix counts, and the explicit length-one projective resolution. The B example additionally states the exact locally finite dg-enhancement and heart interface it uses.
- No Axiom of Choice or Dependent Choice is used in the local proofs. The homotopy and projective-resolution arguments make only finitely many local choices. No axiom branch was silently imported.

## Full-text sources and dispositions

The complete source coverage, item-level dispositions, read locators, fetch attempts and fetch stamps are recorded in:

- `research/non-ml-math-remaining-81-2026-10-18-batch-52.source-coverage.json`
- `research/non-ml-math-remaining-81-2026-10-18-batch-52.source-evidence.json`
- `research/non-ml-math-remaining-81-2026-10-18-batch-52.coverage.json`

Toën, *Derived Hall algebras*, arXiv:math/0501343v4: read the complete relevant §§1–7, including the full §4 associativity argument, §5 Proposition 5.1 and its low-degree exact sequence, and §6 Proposition 6.1. Schiffmann, *Lectures on Hall Algebras*, arXiv:math/0611617v2: read the complete §5.6, PDF pp. 99–105. The local arguments expand the source calculations rather than treating a citation as a missing proof. Both sources resolved; there were no documented drops or remaining retrieval failures.

## Scoped checks and readiness

Final scoped checks after the last item edits:

- `node tools/tsx-run.mjs tools/author-check.mts non-ml-math-remaining-81-2026-10-18 52`: exit 0; author-check evidence has `ok: true` and fingerprint `77280a0d561c94e8234921f4396acda4f00fc897cd2973b91395fb18534e5ce0`.
- `node tools/tsx-run.mjs tools/precheck.mts <all 16 item files>`: 16 checked, 0 failing. The author-check's own A-page-only precheck reports 10 proof-bearing items, 0 failing.
- `node tools/proof-layout.mjs <all 16 item files>`: 16 items, 40 steps, 0 defects.
- `node tools/rendercheck.mjs --json <all 16 item files and both pages>`: 18 files checked, no errors or warnings.
- `node tools/depcheck.mjs --items-file /tmp/non-ml-52-ids.json --json`: all 16 scoped items and both pages checked, 0 errors and 0 warnings.
- `node tools/content-policy.mjs research/non-ml-math-remaining-81-2026-10-18-batch-52.pages.json --json`: 14 A-page items, 0 errors and 0 warnings; B examples are covered by the all-item precheck, rendercheck, proof-layout, depcheck and proof contract.
- `node tools/proof-contract.mjs research/non-ml-math-remaining-81-2026-10-18-batch-52.proof-contracts.json --strict --json`: all 16 items checked, 0 errors and 0 warnings.
- `node tools/source-fetch-check.mjs --coverage research/non-ml-math-remaining-81-2026-10-18-batch-52.source-coverage.json --stamp`: 4/4 sources fetch-verified and resolved, 0 newly stamped, 0 drops.
- Focused item-level recomputation inspected all 16 current carriers and their 33 direct dependencies: no level mismatches. Every assigned `dependency_level` matches one plus the maximum current-run supplier level, or zero when there is no in-run supplier. Batch 52 remains level 2 with prerequisite batches 41 and 50.

### Run-wide blocker and out-of-scope defects

`node tools/batch-dependency-levels.mjs check --run non-ml-math-remaining-81-2026-10-18` still returns `Stale batch dependency levels for non-ml-math-remaining-81-2026-10-18; recompute before authoring`. The dispatch carries scheduling input hash `825ada459eb8a44f2bca9b180e0d40e43ed62d08f26d224468ce63c38b792042`; the batch-52 row currently still lists level 2 and prerequisites 41 and 50. The batch-wide file/check is owner-controlled, so it was not regenerated or edited here. This does not alter the successful focused item-level recomputation above.

An attempted broad carrier scan also encountered malformed frontmatter outside this pair: `items/ex-total-degree-versus-tensor-product-work.md:20` and `items/cex-finite-support-makes-high-degree-moment-gram-singular.md:18` each contain `proof_strategy: directverification: {}`. These files were not edited. They are not dependencies of batch 52; the focused dependency scan did not parse them. The full-run issue is recorded for owner reconciliation.

The 14 A-page items have Step-1 `ready` records. Each row lists the item's declared dependencies and records that supplier inspection does not imply acceptance. A record attempt for `cex-naive-triangle-orbit-count-omits-derived-homotopy-weight` returned `Unknown run item`; `tools/frontier-snapshot.mjs` indexes only `page.items`, while the assigned B page correctly declares its carriers under `examples` per `SCHEMA.md`. The same applies to `ex-hereditary-a2-heart-product-in-derived-hall`. Both B examples pass the all-item content gates above, but the current Step-1 recorder cannot create their readiness rows. The recorder/engine was not modified and no synthetic rows were written; owner reconciliation is needed for those two records. The separate run-wide stale-level condition remains visible above as well. `ready` on the 14 accepted rows is item-scoped readiness, not independent approval.
