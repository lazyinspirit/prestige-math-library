# Phase 2 next 18 — Step 1 batch 8 notes

## Owned scope and construction result

This batch owns only the assigned Foundations pairs `halpern-lauchli-and-bpi-without-choice` (orders 695/696) and `solovays-model-and-regularity-of-all-sets-of-reals` (orders 701/702). No published page/item, shared plan, verdict, canonical defect ledger, or engine-state file was edited.

The Halpern–Läuchli A page has 13 items in prerequisite order: exact tree/product/matrix conventions; the finite word calculus; rearrangement, rule soundness and finite thinning; the dense-matrix dichotomy and finite truncation theorem; finite Boolean subalgebra diagrams and their extension; the countable compactness tree; BPI↔the set ultrafilter lemma over ZF; composition with the Batch 7 basic Cohen model; formal relative consistency; and the two conditional strictness directions. Its B page has five concrete examples/corrections and is a dependency leaf.

The Solovay A page has 21 items in prerequisite order: the inaccessible Lévy collapse; localization, absorption and homogeneity; the exact `HOD(S)` inner model; ZF, ambient omega-sequence closure and internal DC; code absoluteness; random/Cohen generic largeness and Borel representatives; LM, BP and PSP; finite-dimensional Euclidean transfer; the negative Vitali/Bernstein/Hamel/Cauchy/Banach–Tarski consequences; failure of AC; and a separate formal proof-transformer/relative-consistency conclusion. Its B page has seven downstream examples/corrections. The model is never identified with `L(R)` or `HOD(R)`.

All 46 IDs were unused when selected. Every item has an explicit `deps` array, every local supplier precedes its consumer, and no B-page item is consumed. The finite partial Boolean diagrams were deliberately defined on finite generated subalgebras, not merely as assignments satisfying equations visible in an arbitrary finite domain: the latter local condition need not extend and would make the compactness proof circular.

## Design/current-plan conflict

The complete SET-21 and SET-24 design sections and the binding §7.9 cutover were compared with `research/plan-spec.json`, the dispatch, scope ledger, planning notes, and drift evidence. The page IDs, titles, orders, companions, categories, and declared `requires` arrays agree with the current plan.

There is one direct design conflict. The binding prose at `research/plan-set-theory-completion-track.md` lines 1707–1712 says that the old SET-21 Halpern–Läuchli root is planned-only Phase-3 cleanup and is not Phase-2 work. The current `research/plan-spec.json`, scope ledger, and this active Phase-2 dispatch nevertheless select that pair at order 695. The current plan controls this run, so the full SET-21 pair was scaffolded. It is not used to unblock the published consumer already assigned to the fractional-order Batch 7 BPI replacement. This conflict is recorded rather than silently reconciling or editing either plan.

§7.9 also says SET-20's missing Blass proof blocks the planned SET-21 enrichment. Batch 7 has since produced ready semantic and formal Feferman suppliers for the weaker fact actually needed here: a model with no free ultrafilter on omega. This batch consumes `cor-relative-consistency-of-no-free-ultrafilter-on-omega-over-zf` and does not consume the three escalated arbitrary-set Blass items. Thus the historical blocker does not survive on this batch's actual proof path, while the unpublished cross-batch edge remains open.

## Complete source reading and dispositions

Five full authoritative texts were fetched, mechanically stamped, and inspected beyond snippets or metadata. The coverage file assigns every one of the 59 harvested results an `included`, `inline`, or reasoned `out-of-scope` disposition.

- J. Donald Monk, *Set theory following Jech*, Chapter 29, Theorem 29.28 and its complete proof, printed pp.661–670. This supplied the full finite word calculus, all three semantic rule checks, thinning, and dense-matrix dichotomy.
- J. D. Halpern and H. Läuchli, *A partition theorem*, complete Transactions AMS paper, printed pp.360–367. All eight pages, both theorems/corollaries, the word rearrangement, and rule-soundness proof were read independently of Monk.
- Miroslav Repický, *A proof of the independence of the Axiom of Choice from the Boolean Prime Ideal Theorem*, complete CMUC 56 (2015), pp.543–546. Lemma 2, Corollary 3, and the complete finite Boolean maximal-ideal primeness argument were inspected. It supports the Batch 7 direct continuity route and confirms that the Halpern–Läuchli and Cohen-model modules need not be conflated.
- Robert M. Solovay, *A model of set-theory in which every set of reals is Lebesgue measurable*, Theorem 1; Part I §§3–4; Part II §§1–2; Part III §§1.1–2.13 and §4, at the exact page locators in coverage. The collapse, factorization, random/Cohen, code, regularity, PSP, `HOD(S)`, omega-closure and DC arguments were read in their complete relevant sections.
- Spencer Unger, *A Brief Account of Solovay's Model*, complete two-page note, Theorem 1 and Claims 1–6. Both pages were read, providing an independent treatment of `HOD(S)`, LM/BP/PSP, omega-sequence closure, and DC while keeping `HOD(S)`, `HOD(R)`, and `L(R)` distinct.

There were no unresolved retrieval failures and no `source_resolution` drop or owner escalation. Solovay's broader complete-separable-metric-measure extension is retained only inline: the inventory proves the finite-dimensional Euclidean specialization actually needed by the Banach–Tarski consumer. His almost-everywhere uniformization clauses and the separate `HOD(R)` DC proof are recorded out of scope because no owned item consumes them.

## Mathematical and dependency audit

- The Halpern–Läuchli theorem distinguishes the full product from the common-level product. In the complement case the finitely many cone roots are extended to `h=max n_i` before the `h+k` frontiers are restricted; this is the required common-height repair. All tree levels and choices are finite and canonically coded, so the proof stays in ZF.
- The finite partition theorem uses the finitely branching tree of bad finite colorings and the least node with arbitrarily high extensions. It does not appeal to Choice or to the Boolean Prime Ideal Theorem.
- A finite Boolean homomorphism selects one atom. Refining that atom in a larger finite generated subalgebra proves extension without BPI. The countable-algebra tree therefore has nonempty finite levels and a canonical branch. The general UFL→BPI proof instead applies UFL to the filter on all finite homomorphism diagrams generated by the deciding sets `D_b`; finite intersections establish every Boolean equation for the resulting total homomorphism. The reverse implication uses the quotient of `P(S)` by the dual ideal of the supplied filter. Empty/trivial carriers are separated.
- The basic Cohen result is consumed only through Batch 7's exact continuity, finite-support, OD-maximal-ideal, primeness, semantic-model, and primitive-recursive formal-consistency items. The formal Feferman no-free-ultrafilter-on-omega corollary supplies the lower nonprovability direction. Every one of these items and its current ready record was read; all remain unpublished, so readiness is not reported as publication.
- In the Solovay construction the inaccessible and the generic live in the ambient ZFC metatheory. Maximal-antichain support bounds localize real/countable-ordinal data; collapse absorption and coordinate homogeneity decide formulas omitting the tail generic. `M=HOD(S)` is verified formula by formula as an inner model and is closed under ambient omega-sequences; external AC chooses definition witnesses, after which the coding belongs to `M`. This yields internal DC without importing full AC.
- Random/Cohen generics over a countable intermediate model are respectively conull/comeagre. Boolean truth has coded Borel representatives on the generic reals; an `M`-coded null/meagre cover of the nongenerics and code absoluteness give LM/BP. The perfect-tree fusion enumerates dense subsets of the forcing and its square, decides incompatible name prefixes, and puts the continuous perfect image back in `M`; omega-sequence closure handles the countable alternative.
- Vitali and Hamel exclusions do not invoke the published AC-dependent existence theorems in reverse. Given a Vitali selector, its rational translates give the direct measure contradiction under DC. Given a Hamel basis, one chosen basis vector defines its coefficient homomorphism without further choice; its proper kernel is either positive measure, contradicting measurable-subgroup rigidity, or null, contradicting the countable rational-coset cover. For any additive function, the positive-measure bounded level set plus Steinhaus gives local boundedness, so the published bounded-additive regularity theorem applies. A Bernstein set contradicts PSP directly from its definition. Full AC is used only as a reductio hypothesis to construct a Bernstein set.
- The Euclidean transfer uses a measure-preserving binary digit interleaving off coded dyadic null boundaries, completion, and countable cube decomposition. It never substitutes an arbitrary Borel isomorphism. Therefore every alleged Banach–Tarski piece in `R^3` is measurable and finite additivity/isometry invariance yields `V=2V` for `0<V<infinity`.
- Semantic model construction and arithmetic consistency transfer are distinct items. The formal item specifies finite support extraction, effective source-fragment enlargement, formula-by-formula forcing/HOD/Borel compilation, target derivation translation, and proof concatenation. No countable-transitive-model premise replaces the one-way primitive-recursive reduction.

The whole item graph contains no missing, circular, forward, or B-page dependency. The page-prerequisite closures of both owned A pages were checked and neither reaches `deferred-set-theory-beyond-choice`. No owned item directly or transitively uses `rem-halpern-levy-bpi-not-ac`, `rem-solovay-model`, `rem-banach-tarski`, or another Recorded result as a premise.

## Axiom-of-choice boundary

Halpern–Läuchli, finite Boolean extension, the countable compactness tree, and BPI↔UFL are stated and proved over ZF with only explicit finite or least-code choices. The basic Cohen and Feferman target theories are internal ZF theories; their exact ambient forcing/formal-transfer assumptions are inherited from the audited Batch 7 suppliers. The two relative strictness claims are conditional on `Con(ZF)` and do not assert consistency unconditionally.

Solovay's source theory is ambient ZFC plus an inaccessible and a supplied generic. Ambient AC is declared where it is actually used: cardinal/antichain support estimates, forcing/Boolean completion, enumerating coded null/meagre sets and dense sets, choosing countably many definition witnesses for omega-closure, producing an ambient dependent sequence, and compiling finite proof fragments. The resulting inner model satisfies ZF+DC and all stated regularity conclusions but not AC. The inaccessible remains only in the source consistency antecedent; the false-statement correction makes no unsupported internal claim about inaccessible cardinals in `M`.

No incompatible choice and anti-choice branches are joined. In particular, the basic Cohen model where BPI holds is not confused with Feferman's model where free ultrafilters on omega fail or with Solovay's inaccessible-collapse model.

## Published defects for canonical reconciliation

These published items are evidence/orientation debt, not actual premises. Their defects therefore do not block the new suppliers, but the canonical ledger should repair them after publication of the planned replacements.

| Published item | Exact evidence and defect | Planned supplier(s), publication state, and repair strategy |
|---|---|---|
| `rem-halpern-levy-bpi-not-ac` | Published with `proved_here: false`. The conclusion and historical citation are correct, but the body says the difficult BPI half rests on Halpern–Läuchli and calls the partition theorem genuinely required, while Repický pp.543–546 gives a complete elementary continuity proof for the same basic Cohen model. It also supplies no local proof of either module. | Batch 7's ready but unpublished chain through `thm-basic-cohen-model-satisfies-bpi-and-fails-choice` and `cor-relative-consistency-of-bpi-without-choice-over-zf` repairs the semantic/formal BPI conclusion. This batch's ready but unpublished `thm-halpern-lauchli-dense-matrix-dichotomy` and `thm-halpern-lauchli-finite-level-partition-compactness` supply the independent combinatorics. Canonical prose should distinguish the historical route from logical necessity and depend on the exact new suppliers only after publication. |
| `rem-solovay-model` | Published with `proved_here: false`. Its principal theorem and model distinction are correct, but the file admits that neither the collapse, measurability argument, nor measure theory is proved locally; its sole direct dependency is another Recorded forcing remark. The paragraph on Vitali/Bernstein/Hamel/Cauchy/Banach–Tarski consequences is also unproved there. | The 21 ready but unpublished A-page items culminating in `thm-solovay-model-regularity-relative-to-an-inaccessible` provide the semantic and formal proof chain. The exact negative suppliers are `cor-solovay-model-has-no-vitali-or-bernstein-set`, `thm-solovay-model-has-no-hamel-basis-or-discontinuous-additive-function`, and `cor-solovay-model-has-no-banach-tarski-decomposition`. Repoint only after publication, retaining the inaccessible antecedent and the distinction among `HOD(S)`, `L(R)`, and `HOD(R)`. |
| `rem-banach-tarski` | Published with `proved_here: false` and expressly used in no proof. It states the positive Banach–Tarski theorem, exact piece-count/stronger equidecomposition claims, choice-strength claims, and the Solovay nonexistence consequence without local proofs. This batch verifies only the negative Solovay clause; it does not repair or consume the positive theorem. | Ready but unpublished `lem-solovay-universal-measurability-transfers-to-euclidean-spaces` and `cor-solovay-model-has-no-banach-tarski-decomposition` repair the exact Solovay nonexistence statement after publication. The positive Banach–Tarski construction and its exact Hahn–Banach/BPI strength remain outside this batch and must stay Recorded until separately supplied. |

## Readiness and cross-batch dependency input

Readiness records exist for all 46 owned items, all are `ready`, and the final run-wide readiness check reports no outstanding owned item. Each record contains the exact examined dependency array and source/dependency evidence. No escalation was overwritten.

`research/phase-2-next-18-batch-8.cross-batch-dependencies.json` contains 13 rows: the three declared current-run page edges and all ten actual Batch 7 item dependencies. Every row is `open`, not because the statements are mathematically unexamined, but because Batch 7's suppliers remain unpublished. The Solovay→SET20 page row records that the plan edge is retained while the actual Solovay proof has no Batch 7 item dependency. The unified ledger was refreshed with `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-next-18`.

## Verification snapshot

Whole-run counts are a snapshot because sibling batches may change concurrently.

| Check | Actual result |
|---|---|
| Owned manifest dependencies | `manifest-deps`: 46 items, 0 normalized, 0 errors. |
| Owned coverage | 2 A pages, 59 harvested results, 0 errors, 0 warnings. |
| Owned sources | `source-fetch-check`: 5/5 fetch-verified and 5/5 resolved; 0 drops/escalations. |
| Owned readiness | 46/46 current `ready`; 0 outstanding owned records. The whole run is not claimed closed because other batches retain their own work/escalations. |
| Whole-run manifest dependencies | 531 items, 0 normalized, 0 errors. |
| Whole-run manifest policy | 531 scoped items, 0 errors, 0 warnings. The batch-only policy mode reports ten expected Batch 7 IDs as absent because that mode cannot load cross-batch suppliers; whole-run mode resolves them all. |
| Current plan | `validate-plan research/plan-spec.json --repo .`: exit 0; page order acyclic and item IDs resolved for hydrated pages. |
| Run manifest integrity | 36 owed pages present, 0 missing, 0 added. |
| Published dependency graph | `depcheck --quiet`: exit 0; existing repository warnings remain, followed by no cycles, all references resolved, and no draft items on published pages. |
| Published external-proof audit | `extcheck --quiet`: exit 0; 55 pre-existing `unproved-on-published` warnings remain, and every Recorded-not-proved statement is a cited remark with no proof and every consequence is marked. |
| Frontier ledger | Refresh succeeded and deduplicated the batch inputs. |

Accordingly, the owned Step 1 scaffold is complete and ready for independent Step 3 review. The 13 same-frontier edges remain explicitly open until their suppliers are published; readiness is not presented as independent mathematical approval.
