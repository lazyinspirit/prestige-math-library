# frontier-29 · Alpha · Step 4 splice-refusal adjudication

Date: Wednesday, September 2, 2026

## Inputs

- `research/frontier-29-alpha-step4.task.md`
- `research/frontier-29-splice-refusals.json`
- `research/frontier-29-batch-1.pages.json`
- `research/plan-spec.json`
- `research/frontier-29-batch-1.notes.md`
- `research/frontier-29-alpha-a-step3-scaffold-review.md`
- live `node tools/validate-plan.mjs research/plan-spec.json` output before and after repair

`research/frontier-29-splice-refusals.json` is empty on current disk, so this
dispatch adjudicated the live `validate-plan` undeclared prerequisite rather
than a pending manifest-vs-plan `requires` refusal.

## Edge review

| edge | evidence | disposition | edit | validation result | blocker |
|---|---|---|---|---|---|
| `crossed-homomorphisms-complements-and-first-cohomology-examples -> algebraic-extensions-degree-and-finite-fields` | Pre-edit `validate-plan` reported: `page crossed-homomorphisms-complements-and-first-cohomology-examples has an item depending on algebraic-extensions-degree-and-finite-fields, which is NOT in the closure of its declared requires`. In `research/frontier-29-batch-1.pages.json`, the B-page item `ex-the-affine-group-agl-one-p-has-one-kernel-conjugacy-class-of-complements` depends on `thm-multiplicative-group-of-a-finite-field-is-cyclic`. That theorem is homed on the published A page `algebraic-extensions-degree-and-finite-fields`, which sits at order `96` in `research/plan-spec.json`. The citing B page sits at order `365.072` and, before repair, required only `crossed-homomorphisms-complements-and-first-cohomology`, so its declared closure did not reach the finite-fields page. The current item contract uses cyclicity of `\mathbb F_p^\times` explicitly, so this is not a disposable citation. | Genuine backward prerequisite. The target is an earlier A page, not an `-examples` page, and adding the edge does not introduce a new page, a forward dependency, or a reading-order change. | Added `algebraic-extensions-degree-and-finite-fields` to the `requires` array of `crossed-homomorphisms-complements-and-first-cohomology-examples` in `research/frontier-29-batch-1.pages.json` and synced the same edge into `research/plan-spec.json`. | Post-edit `node tools/validate-plan.mjs research/plan-spec.json` returned `OK`. The undeclared-prereq is gone; the command now emits only the repository's standing `redundant-prereq` advisories and ends with `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 698 page(s) with item lists.` | none |

## Validation

Command run:

```bash
node tools/validate-plan.mjs research/plan-spec.json
```

Result on the post-edit bytes:

- Exit code `0`.
- The only live Step-4 undeclared prerequisite for this dispatch is resolved.
- The validator still reports repository-wide `redundant-prereq` warnings, but
  no hard errors.
- Terminal receipt:
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 698 page(s) with item lists.`

## Summary

- Splice refusals in `research/frontier-29-splice-refusals.json`: `0`.
- Live `validate-plan` undeclared prerequisites adjudicated here: `1`.
- Backward page edges added: `1`.
- Dependency removals from batch scaffolds: `0`.
- Owner blockers: none.
