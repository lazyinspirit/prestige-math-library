# frontier-30 · Alpha · Step 4 splice-refusal adjudication

Date checked: Friday, September 4, 2026.

Authoritative context read before acting:

- `CLAUDE.md`
- `README.md`
- `SCHEMA.md`
- `WORKFLOW.md`
- `research/frontier-30-alpha-step4.task.md`
- `research/frontier-30-splice-refusals.json`

Current closure state consulted:

- `research/frontier-30-splice-refusals.json` is empty on current bytes.
- `research/frontier-30-scaffold-closure.json` reports `closed: true` with no
  missing or insufficient verdict rows.
- `research/frontier-30-alpha-e-recheck.md` remains closed on current bytes for
  the affected owner group.

## Edge adjudications

### Batch `10`

- Edge:
  `delta-functors-and-universality -> long-exact-sequences-in-homology-examples`
  via
  `fs-any-sequence-of-functors-with-long-exact-sequences-is-a-delta-functor -> ex-a-degreewise-split-sequence-with-nonzero-connecting-map`
- Evidence:
  - `research/frontier-30-batch-10.pages.json` gave the false statement a
    direct `deps` edge to the published example
    `ex-a-degreewise-split-sequence-with-nonzero-connecting-map`.
  - That example is homed on the B page
    `long-exact-sequences-in-homology-examples` at order `365.044`.
  - The citing page is the A page
    `delta-functors-and-universality` at order `365.049`.
  - The current closure of `delta-functors-and-universality` already reaches
    the A pages `mapping-cones-cylinders-and-chain-triangles` (`365.041`) and
    `long-exact-sequences-in-homology` (`365.043`), which home
    `thm-the-canonical-mapping-cone-sequence-is-degreewise-split-short-exact`
    and
    `prop-the-cone-connecting-map-agrees-with-the-shifted-identity-up-to-the-declared-sign`.
  - The published example item
    `items/ex-a-degreewise-split-sequence-with-nonzero-connecting-map.md`
    itself depends only on those two A-page results.
- Disposition: unneeded foreign `-examples` dependency; reroute through the
  A-page results already in closure.
- Edit:
  - replaced the stale example dependency with
    `thm-the-canonical-mapping-cone-sequence-is-degreewise-split-short-exact`
    and
    `prop-the-cone-connecting-map-agrees-with-the-shifted-identity-up-to-the-declared-sign`
    in `research/frontier-30-batch-10.pages.json`
  - synced the same reroute into `research/plan-spec.json`
- Validation result: covered by the final full-plan validation below; this
  `[b-leaf]` row is gone.
- Blocker: none.

### Batch `10`

- Edge:
  `delta-functors-and-universality -> long-exact-sequences-in-homology-examples`
  via
  `fs-a-degree-zero-natural-transformation-between-delta-functors-always-extends -> ex-a-degreewise-split-sequence-with-nonzero-connecting-map`
- Evidence:
  - `research/frontier-30-batch-10.pages.json` gave this second false
    statement the same direct dependency on the same published B-page example.
  - The citing page, target page, and already-available A-page support are the
    same as in the previous row.
- Disposition: unneeded foreign `-examples` dependency; reroute through the
  same A-page results.
- Edit:
  - replaced the stale example dependency with the two A-page supports in
    `research/frontier-30-batch-10.pages.json`
  - synced the same reroute into `research/plan-spec.json`
- Validation result: covered by the final full-plan validation below; this
  `[b-leaf]` row is gone.
- Blocker: none.

### Batch `10`

- Edge:
  `delta-functors-and-universality-examples -> long-exact-sequences-in-homology-examples`
  via
  `cex-a-nonnatural-choice-of-connecting-maps-does-not-form-a-delta-functor -> ex-a-degreewise-split-sequence-with-nonzero-connecting-map`
- Evidence:
  - `research/frontier-30-batch-10.pages.json` gave the B-page counterexample
    the same direct dependency on the foreign B-page example item.
  - The citing page is
    `delta-functors-and-universality-examples` at order `365.05`.
  - Its current closure already reaches the same A-page support through the
    mandatory companion edge to `delta-functors-and-universality`.
- Disposition: unneeded foreign `-examples` dependency; reroute through the
  same A-page results.
- Edit:
  - replaced the stale example dependency with the two A-page supports in
    `research/frontier-30-batch-10.pages.json`
  - synced the same reroute into `research/plan-spec.json`
- Validation result: covered by the final full-plan validation below; this
  `[b-leaf]` row is gone.
- Blocker: none.

### Batch `11`

- Edge:
  `singular-chains-and-singular-homology-examples -> categories-functors-and-natural-transformations-examples`
  via
  `cex-equal-homology-does-not-imply-homotopy-equivalence -> ex-change-of-basepoint-isomorphism-for-fundamental-groups`
- Evidence:
  - `research/frontier-30-batch-11.pages.json` still gave the counterexample a
    direct dependency on the published example
    `ex-change-of-basepoint-isomorphism-for-fundamental-groups`.
  - That example is homed on the B page
    `categories-functors-and-natural-transformations-examples` at order `360`.
  - The citing page is the B page
    `singular-chains-and-singular-homology-examples` at order `366.004`.
  - The current authored item file
    `items/cex-equal-homology-does-not-imply-homotopy-equivalence.md` no longer
    uses that example as a dependency; step `2.2` derives the basepoint
    transport inline from path conjugation and
    `thm-induced-fundamental-group-map-functoriality`.
- Disposition: unneeded foreign `-examples` dependency; remove it.
- Edit:
  - removed `ex-change-of-basepoint-isomorphism-for-fundamental-groups` from
    `research/frontier-30-batch-11.pages.json`
  - synced the same dependency removal into `research/plan-spec.json`
- Validation result: covered by the final full-plan validation below; both the
  `[b-leaf]` row and the companion `[undeclared-prereq]` row to
  `categories-functors-and-natural-transformations-examples` are gone.
- Blocker: none.

### Batch `11`

- Edge:
  `singular-chains-and-singular-homology -> applications-of-the-fundamental-group`
  via
  `cex-equal-homology-does-not-imply-homotopy-equivalence -> prop-retracts-inject-fundamental-groups`
- Evidence:
  - `research/frontier-30-batch-11.pages.json` and `research/plan-spec.json`
    both keep `prop-retracts-inject-fundamental-groups` in the counterexample's
    `deps`.
  - That proposition is homed on the A page
    `applications-of-the-fundamental-group` at order `301`.
  - Before the edit, the current closure of
    `singular-chains-and-singular-homology` reached
    `the-seifert-van-kampen-theorem` but not
    `applications-of-the-fundamental-group`.
  - The citing page is the A page
    `singular-chains-and-singular-homology` at order `366.003`; the companion
    B page inherits foreign prerequisites through this A page.
- Disposition: genuine backward prerequisite; apply the page edge.
- Edit:
  - added `applications-of-the-fundamental-group` to
    `singular-chains-and-singular-homology.requires` in
    `research/plan-spec.json`
  - synced the same `requires` edge into `research/frontier-30-batch-11.pages.json`
    so the owning scaffold matches the repaired closure
- Validation result: covered by the final full-plan validation below; this
  `[undeclared-prereq]` row is gone.
- Blocker: none. The target is an earlier A page, so no reading-order change or
  owner escalation was required.

## Validation

Command run on current bytes:

```bash
node tools/validate-plan.mjs research/plan-spec.json
```

Result:

- exit status `0`
- terminal status:
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 746 page(s) with item lists.`
- additional output: only the standing repository-wide `redundant-prereq`
  advisories and the standard note that `547` planned pages still have no item
  list
- `b-leaf` occurrences after the Step-4 edits: `0`
- `undeclared-prereq` occurrences after the Step-4 edits: `0`

## Outcome

- Splice refusals on current bytes: `0`.
- Genuine backward prerequisites added: `1`
  (`singular-chains-and-singular-homology -> applications-of-the-fundamental-group`).
- Stale scaffold dependencies removed or rerouted: `4`.
- Owner blockers: `0`.
