# frontier-33 — Alpha group `f` — Step-3 scaffold recheck

Rechecked the current manifests, coverage records, plan entries, group
assignment, scaffold review, and both batch Step-3 fix-pass notes. Group `f`
owns exactly batches 14 and 15.

## Finding dispositions

| finding / fix-pass record | disposition | current evidence |
|---|---|---|
| Batch 14 — no numbered finding; the review's sufficient outcome retained the finite-generation, ambient-extension, finite-filtration, finite-label, and restricted-Chevalley-duality qualifications. | **closed — stands** | `frontier-33-batch-14.pages.json` still contains the reviewed 31 A and 8 B records, with explicit dependency arrays and no unresolved external dependency. The plan still gives the A page the two declared prerequisites `homomorphisms-between-verma-modules-and-linkage-examples` and `chain-complexes-and-homology`, and gives the B page only its A-page prerequisite. Its six source records retain 82 fully dispositioned results and current fetch stamps. No repair was reported or is warranted. |
| Batch 15 — no numbered finding; the fix pass pushed back on minting a duplicate normal-restriction counterexample. | **closed — stands** | `frontier-33-batch-15.pages.json` still has the dependency-closed 14 A and 3 B records, with the fixed left-conjugation convention and the `A_3\trianglelefteq S_3` example. The published `fs-restriction-of-an-irreducible-complex-representation-is-always-irreducible` supplies the same degree-two `S_3` restriction counterexample, so a duplicate B-page item would add no boundary coverage. The plan retains the A prerequisite `schur-indices-and-fields-of-definition-examples`, the B-to-A edge, and the later RG-5 destination at order 510.039. Its three source records retain 32 fully dispositioned results and current fetch stamps. |

The current plan entries match all four batch-manifest page objects exactly,
including their 31/8 and 14/3 A/B item inventories, page identity, kind,
companion, order, and `requires` edges. This is not a manifest defect.

## Scope decisions

Ran `scope-decisions refresh --run frontier-33 --group f --root .`, then the
matching `check`. The refreshed register has 18 current decline rows and no
pending or invalid row. Each of its ten deferred rows has a real later
destination (RL-5 at 510.009 or RG-5 at 510.039); the remaining eight are
supported out-of-scope dispositions. The deferred destinations are later than
the source page in the current plan, and no scope disposition needs a repair.

## Current verdicts and checks

| A page | batch | verdict |
|---|---:|---|
| `category-o-finiteness-duality-and-blocks` | 14 | sufficient |
| `clifford-theory-over-normal-subgroups` | 15 | sufficient |

After verifying the current bytes, the existing
`frontier-33-alpha-f-step3-verdicts.json` entries were retained as the two
`sufficient` verdicts above. No batch manifest, coverage record, plan entry,
or item body was changed by this recheck.

Focused checks passed on the current files:

- `scope-decisions check --run frontier-33 --group f --root .`: 18 current declines, 0 errors.
- `coverage-checklist --require-destination`: 82 Batch-14 and 32 Batch-15 harvested results, 0 errors or warnings.
- `manifest-deps`: 39 Batch-14 and 17 Batch-15 items, 0 errors.
- `content-policy --manifest-only` over both manifests: 56 scoped items, 0 errors or warnings.
- `source-fetch-check`: 6/6 Batch-14 and 3/3 Batch-15 sources fetch-verified.

`validate-plan.mjs research/plan-spec.json --repo . --max-items 60` was also
run. It currently fails on an unrelated page,
`dimension-constructible-images-and-dimensions-of-fibres`, whose item depends
on `schemes-subschemes-and-morphisms-locally-of-finite-type` outside its
declared prerequisite closure. The exact plan-versus-manifest comparison above
shows this is not a batch-14 or batch-15 defect; it is recorded here as an
external plan-gate blocker rather than repaired outside group `f` ownership.
