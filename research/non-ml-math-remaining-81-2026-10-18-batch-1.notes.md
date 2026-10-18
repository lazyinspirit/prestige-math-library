# Batch 1 — Frattini Subgroups and the Burnside Basis Theorem

## Scope and authoring disposition

The owner direction identifies this as a partial pair: reuse the published Frattini/Burnside items and finish the pair’s page placement. The current plan lists 24 A-page items and 12 B-page items; the published pages contain exactly those inventories in the same order. The batch manifest now records those 36 existing items, their actual source dependencies, statements, source paths, and computed item dependency levels. No item or library page carrier was edited.

Initial native status was `running` at `1-scaffold`, with 0/81 scaffold results and no worker in flight. The pair has no in-run supplier batch: the recorded batch level is 0 with `requires: []`. The final read-only status remains at `1-scaffold`, with no worker in flight; the controller now reports 1/80 scaffold coverage overall.

## Plan and design reconciliation

The current `research/plan-spec.json` controls the active page inventory, order, category, and page-level `requires`. It assigns A/B orders 83/84 to category `group-theory`, with A requiring only `sylow-theorems-and-nilpotent-groups` and B requiring the A page plus `primitive-roots-and-unit-groups-modulo-n`. The batch manifest follows those active values.

The listed GT-1 design at `research/plan-group-theory-track.md:471-587` differs in several places. Its A page requires both the Sylow page and `composition-series-and-solvable-groups`; its proposed A inventory begins with five p-core/Fitting results and names 21 Frattini/Burnside results; its B list has eight examples. The active plan and current published pages instead have 24 A items and 12 B items, including the false-statement/counterexample material on B. The design’s general rule that B pages require only their A page also differs from the active B requirement for primitive roots. The plan controls these scope conflicts; no item was added, deleted, or moved to imitate the older design.

There is a material published-page placement conflict. The active plan assigns category `group-theory`, but both published page files remain at `library/abstract-algebra/frattini-subgroups-and-the-burnside-basis-theorem*.md`. The A page is listed in `library/abstract-algebra/_pathway.md:56`; neither page is listed in the group-theory pathway. The older GT audit records the first pair under `library/abstract-algebra/` and says its published snapshot is immutable (`research/plan-group-theory-track.md:3488-3497`). The current owner direction calls for completing placement, while this dispatch says to leave published content to the owner. Moving the pages without updating both category pathways would leave placement inconsistent. I left the published pages and pathways unchanged and escalated the canonical home decision. If the current category remains `group-theory`, the owner needs to authorize a paired page-home and pathway reconciliation; otherwise the shared plan must retain the published abstract-algebra home.

The published A-page summary at `library/abstract-algebra/frattini-subgroups-and-the-burnside-basis-theorem.md:32` says the page “starts with normal p-cores” and discusses Fitting consequences, while its current 24-item inventory contains no p-core or Fitting theorem item. The B page does contain the Fitting counterexample. This is a summary/inventory mismatch in an existing published page; it was preserved for focused owner handling.

The design’s extra composition-series page requirement is absent from the active plan. Relevant item-level dependencies remain explicit and resolve to published suppliers: `cex-frattini-image-under-a-nonsurjective-homomorphism` uses results from `composition-series-and-solvable-groups` and `conjugacy-and-simplicity-in-the-symmetric-groups`; `cex-fitting-centralizer-without-solvability` uses the former. These supplier pages are at orders 77 and 75, before this pair’s order 83/84. No logical item edge was removed. The active page-level requirement list is retained as planned; the owner should decide whether those page-level requirements also need to be declared.

Two published item dependency lists are longer than their current plan-spec entries. The source of `thm-burnside-basis-theorem` and the source of `cor-every-nonfrattini-element-belongs-to-a-minimal-generating-set` each include `thm-frattini-quotient-is-the-largest-elementary-abelian-quotient`, which their plan-spec `deps` omit. The batch manifest mirrors the actual published source dependencies. The shared plan was not edited.

## Inventory and dependency levels

The item-level graph was recomputed from the published carriers’ actual `deps` and `justified_by` fields. All edges internal to this pair are acyclic. The A/B display order was preserved; no carriers were authored in this dispatch.

| Dependency level | Item count |
|---:|---:|
| 0 | 5 |
| 1 | 4 |
| 2 | 1 |
| 3 | 1 |
| 4 | 1 |
| 5 | 5 |
| 6 | 8 |
| 7 | 7 |
| 8 | 4 |

The 36-item closure has 54 distinct direct suppliers outside this pair and 388 items in its transitive dependency closure. A structural source scan found no missing dependency carrier, unpublished supplier, or proof-bearing supplier without its required proof section. This is inventory evidence, not a new mathematical audit of the entire historical published closure. The key proof interfaces checked directly were the finite-p-group/maximal-subgroup results used to obtain normal index-$p$ maximal subgroups, the finite Frattini nongenerator characterization, finite elementary-abelian basis extension, and the exact solvability/normal-subgroup hypotheses used by the B-page counterexamples. The earlier contracts also bind exact supplier excerpts.

No Axiom of Choice is used. Basis extension and representative selection occur only for finite sets; they are choice-free. Boundary cases retained include the trivial group, $n=0$, $n=1$, $p=2$, repeated Frattini cosets in a proposed generating set, and the coprime-action hypothesis in Hall–Burnside.

The read-only batch-level recomputation after manifest completion still gives batch 1 level 0 with no prerequisite batches. Its current input digest is `146aa14a459826db426473e1c8729d55f3926049d85e5059a9be022a7b08c8a8`, while the engine-provided scheduling input remains `7096b1bbc6f2d70796b6d63080bb4b0fc6e781f6a5e4da539963fbb746842903`. The recorded batch-level artifact is therefore stale after the authoring manifest update. I did not rewrite this engine-produced run-wide scheduling input; the owner/build driver must refresh it at the proper drained boundary. The recomputed graph shows no batch cycle and no batch-1 supplier edge.

## Source reading and coverage

The four full-text records and their historical fetch stamps from `research/frontier-17-batch-1.coverage.json` were preserved in the new batch coverage. They are Craven, *The Theory of p-Groups*; Conrad, *Generating Sets*; van Beek, *Topics in Finite p-Groups*; and Harpaz–Wittenberg’s unitriangular-group setup. I inspected Craven’s complete relevant arguments at §§2.2, printed pp. 10–14, including Propositions 2.24–2.25 and Theorems 2.28 and 2.30. I also inspected van Beek’s complete relevant arguments at Lemmas 3.3–3.4, Proposition 3.5, Lemma 3.6, and Theorem 3.7, printed pp. 37–40.

I added the complete Cambridge-hosted Wilkes lecture notes as an independent full-text treatment, with the exact §4.1 locators and result dispositions in the coverage file. Propositions 4.1.3–4.1.4 supply complete proofs for characteristicity and generation modulo the Frattini subgroup. Wilkes states Proposition 4.1.7’s finite $p$-group Frattini formula but explicitly defers its proof to an exercise sheet; it is marked `out-of-scope` as a proof source, and no local proof relies on it. The formula is instead supported by the complete Craven and van Beek proofs. No retrieval failed, so no `source_resolution` record was needed.

`node tools/source-fetch-check.mjs --coverage research/non-ml-math-remaining-81-2026-10-18-batch-1.coverage.json --stamp` passed: 5/5 full-text sources verified, with 1 newly stamped Wilkes PDF (104 pages). The four prior stamps retain their historical fetch times. `coverage-checklist --require-destination` passed with 1 page, 52 harvested results, 0 errors, and 0 warnings. A subsequent source-fetch check without `--stamp` also passed 5/5.

## Contracts, readiness, and scoped checks

The 31 proof-bearing items reuse their exact prior contracts from `research/frontier-17.proof-contracts.json`; the five definitions have no proof contract. This is contract/source continuity, not a new review verdict or acceptance. The new batch proof-contract file contains the exact current 31-item scope.

- `node tools/proof-contract.mjs research/non-ml-math-remaining-81-2026-10-18-batch-1.proof-contracts.json --strict`: **PASS**, 31/31, 0 errors, 0 warnings.
- `node tools/proof-layout.mjs` on all 36 assigned item carriers: **PASS**, 36 items, 80 steps, 0 defects.
- `node tools/tsx-run.mjs tools/precheck.mts` on all assigned item carriers: **PASS**, 31 proof-bearing items checked, 0 failing.
- Scoped `tools/item-dependency-levels.mjs` calculation on this batch manifest: **PASS**, 36 items, maximum level 8, 0 errors.
- Focused `depcheck --items-file` on the 36 items: **PASS**, dependency closure of 388 items and 35 pages, 0 errors, 0 warnings.
- `node tools/finite-smoke.mjs research/non-ml-math-remaining-81-2026-10-18-batch-1.proof-contracts.json --items ex-frattini-subgroup-of-a-cyclic-p-group`: **PASS**, `cyclic-subgroup-lagrange` checked through modulus 200.
- Focused `depcheck --items-file` on the 36 items: **PASS**, dependency closure of 388 items and 35 pages, 0 errors, 0 warnings.
- `node tools/finite-smoke.mjs research/non-ml-math-remaining-81-2026-10-18-batch-1.proof-contracts.json --items ex-frattini-subgroup-of-a-cyclic-p-group`: **PASS**, `cyclic-subgroup-lagrange` checked through modulus 200.
- The whole-run `proof-contract-coverage` command could not complete because another assigned page, `stationary-ergodic-sources-and-universal-coding`, still has an empty scaffold inventory. The batch-local proof contracts themselves pass strict validation.
- Whole-run `item-dependency-levels.mjs check` also reports empty inventories in other batches; the batch-local item-level calculation above is the scoped result.
- The pre-authoring `batch-dependency-levels.mjs check` reported the run-level artifact stale; the post-manifest read-only recomputation confirms batch 1 remains level 0. The owner must refresh the run-wide digest.

`step1-decisions.mjs record` was run for every one of the 36 manifest items, without `--owner`. All 36 are **escalated**, not ready, because the active plan’s group-theory category does not match the unchanged published page homes and a complete paired page/pathway placement is unresolved. The two source/plan dependency mismatches and the design-versus-plan prerequisite conflicts are recorded above. The scoped integrity check found 36/36 escalation records with current dependency lists. The run-wide readiness check remains open for this pair and for other unfinished scaffold inventories.

An accidental `node tools/depcheck.mjs --help` invocation ran the tool’s unscoped repository scan because that script has no help option. Its whole-corpus output contained unrelated global published-item findings and is not used as batch evidence; the focused 36-item depcheck above is the applicable result. No source, item, page, shared plan, engine state, owner verdict, or published-repair record was changed.
