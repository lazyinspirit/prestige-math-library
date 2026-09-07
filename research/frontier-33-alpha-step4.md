# frontier-33 · Alpha · Step 4 splice-refusal adjudication

Date: Monday, September 7, 2026  
Contributing lanes: `step4-adjudicate-1`, `step4-adjudicate-3`  
Explicit batch coverage: lane 1 — `18`, `20`; lane 3 — live residual
`validate-plan` edges

## Inputs

- `research/frontier-33-alpha-step4.task.md`
- `research/frontier-33-splice-refusals.json`
- `research/frontier-33-batch-18.pages.json` and batch notes
- `research/frontier-33-batch-20.pages.json` and batch notes
- the corresponding group-`g` and group-`h` Step-3 scaffold reviews
- `research/frontier-33-batch-9.pages.json`, its notes, and the group-`e`
  Step-3 recheck and verdicts
- `research/plan-spec.json`
- the complete relevant target page and item records for
  `the-cook-levin-theorem` / `def-boolean-formula-cnf-and-sat` and
  `compactness-in-metric-spaces` / `def-dependent-choice`
- live `node tools/validate-plan.mjs research/plan-spec.json` output before and
  after the owned edits

At lane 1's adjudication snapshot, the refusal ledger contained exactly its two
owned edges below. The batch scaffolds already carried both edges; only their
canonical plan records were missing them. On the bytes read by lane 3,
`research/frontier-33-splice-refusals.json` has `"refusals": []`; lane 3
therefore adjudicated the two residual undeclared prerequisites reported by
the required live validator.

## Owned refusal edges

| batch | edge | evidence | disposition | edit | validation result | blocker |
|---:|---|---|---|---|---|---|
| `18` | `arithmetization-and-the-sum-check-protocol -> the-cook-levin-theorem` | The citing scaffold item `def-arithmetization-of-a-boolean-formula` depends on `def-boolean-formula-cnf-and-sat` because its construction is recursively defined on Boolean-formula syntax. The target item is listed on the published A page `library/computability-theory/the-cook-levin-theorem.md`. In the plan the target is order `621`, strictly before the citing A page at order `641`, and is not an `-examples` page. Before the edit, the citing page required only `interactive-proof-systems-and-public-coins` and `algebraic-extensions-degree-and-finite-fields`; their closure did not contain `the-cook-levin-theorem`. | Genuine backward prerequisite. Removing the item dependency would make the arithmetization definition rely on undeclared Boolean-formula syntax. | Added `the-cook-levin-theorem` to the canonical `requires` array in `research/plan-spec.json`. The batch-18 scaffold already contained the same edge, so no scaffold edit was needed. | The post-edit plan closure contains the target. `node tools/splice-plan.mjs --run frontier-33 --batch 18 --dry-run` accepts the batch and reports `2 page(s) spliced` and `28 new item(s)`. The required whole-plan validator still exits `1` only for the two unowned batch-9 edges recorded below; it emits no error for this edge. | none for this edge |
| `20` | `weak-choice-principles-and-sierpinskis-theorem -> compactness-in-metric-spaces` | Four citing scaffold items directly use `def-dependent-choice`: `def-multiple-and-dependent-multiple-choice`, `thm-choice-implies-dependent-implies-countable-choice`, `lem-starting-point-free-dependent-choice`, and `thm-dependent-choice-detects-non-well-orders`. The published definition gives the prescribed-start relation form required by those claims and is listed on the published A page `library/topology/compactness-in-metric-spaces.md`. The target page is order `120`, strictly before the citing A page at order `665`, and is not an `-examples` page. Before the edit, the closure of `cardinal-arithmetic-and-cofinality` and `filters-and-ultrafilters` did not contain that page. | Genuine backward prerequisite. The dependency is used in a new definition and three theorem/lemma routes, so suppressing it would be mathematically false dependency accounting. | Added `compactness-in-metric-spaces` to the canonical `requires` array in `research/plan-spec.json`. The batch-20 scaffold already contained the same edge, so no scaffold edit was needed. | The post-edit plan closure contains the target. `node tools/splice-plan.mjs --run frontier-33 --batch 20 --dry-run` accepts the batch and reports `4 page(s) spliced` and `68 new item(s)`. The required whole-plan validator still exits `1` only for the two unowned batch-9 edges recorded below; it emits no error for this edge. | none for this edge |

No item dependency was removed. Neither owned edge creates a page, points to an
examples page, points forward, or changes reading order. The actual splice is
left to the engine.

## Residual live `validate-plan` edges adjudicated by lane 3

Lane 1's post-edit validation exposed the two batch-9 edges below. Lane 3 read
the citing scaffold, both target pages and exact dependency statements, and the
current declared-requirement closure, then applied the one repair permitted by
this task.

| edge | evidence | disposition | edit | validation result | blocker |
|---|---|---|---|---|---|
| `dimension-constructible-images-and-dimensions-of-fibres -> zariski-topology-on-prime-spectra` | In `research/frontier-33-batch-9.pages.json`, `def-dimension-noetherian-topological-space` defines dimension using Noetherian spaces and irreducible closed subsets and therefore depends on `def-noetherian-topological-space` and `def-irreducible-topological-space-and-subset`; `lem-classical-variety-noetherian-components` also uses the Noetherian-space definition. Those exact definitions are listed on the published A page `library/commutative-algebra/zariski-topology-on-prime-spectra.md`. The target is order `256.001`, strictly earlier than the citing A page at `366.049`, and is not an `-examples` page. Before repair, the citing page directly required only `products-segre-and-veronese-embeddings-and-grassmannians-examples`, whose transitive closure omitted the target. | Genuine backward prerequisite. Removing either definition dependency would leave the dimension definition without the types named in its statement. | Added `zariski-topology-on-prime-spectra` to the canonical `requires` array for `dimension-constructible-images-and-dimensions-of-fibres` in `research/plan-spec.json`. Per the task, the engine owns the subsequent scaffold/plan splice; lane 3 did not manually synchronize the batch manifest. | The post-edit reading-order listing shows the target in the citing page's closure, and the corresponding `[undeclared-prereq]` error is absent. | none |
| `dimension-constructible-images-and-dimensions-of-fibres -> schemes-subschemes-and-morphisms-locally-of-finite-type` | The batch-9 item `lem-classical-variety-noetherian-components` claims that every classical variety is Noetherian and has finitely many irreducible components. It depends on `def-classical-algebraic-prevariety-regular-maps-and-varieties`, whose exact published statement supplies “classical variety,” including quasi-compactness/equivalently a finite affine cover; that finite cover is explicitly used by the lemma's proof strategy. The definition is listed on the published A page `library/scheme-theory/schemes-subschemes-and-morphisms-locally-of-finite-type.md`. The target has plan order `366.063`, strictly later than the citing page at `366.049`, and remains absent from its closure. | Genuine dependency but a forward page edge. It cannot be dropped without making the scaffold's term and finite-cover argument depend on an undeclared definition, and this task forbids adding the forward page prerequisite. | none; no item dependency, page edge, new page, or reading order was changed for this edge. | It is the sole hard error in the final required validator run. | Owner blocker: resolve the forward dependency by an owner-authorized reroute, rehome, or reading-order change. The target happens to be published, but it remains later in the authoritative plan order. |

## Required validation

Command run on the final bytes:

```bash
node tools/validate-plan.mjs research/plan-spec.json
```

Result after lane 3's permitted edit: exit code `1` (`FAIL`). The complete
hard-error set is the single `[undeclared-prereq]` from the batch-9 page
`dimension-constructible-images-and-dimensions-of-fibres` to
`schemes-subschemes-and-morphisms-locally-of-finite-type`.

The command also emits the repository's nonfatal `redundant-prereq`
advisories. It emits no hard error for either lane-1 edge or for lane 3's
repaired backward edge.

## Summary

- Refusal-ledger edges adjudicated by lane 1: `2`; the ledger was empty on
  lane 3's bytes.
- Residual live validator edges adjudicated by lane 3: `2`.
- Genuine backward prerequisites added to `research/plan-spec.json`: `3`
  total (`2` by lane 1 and `1` by lane 3).
- Scaffold dependencies removed: `0`.
- Lane-1 splice dry runs accepted: batches `18` and `20`; the engine owns the
  subsequent splice for lane 3's plan edge.
- Remaining validation blockers: `1`, the forbidden forward batch-9 edge
  requiring an owner decision.
