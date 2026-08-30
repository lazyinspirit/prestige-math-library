# Frontier 24 — Alpha group a Step 3 scaffold review

Scope: batches `1`, `2`, and `7` for `noether-normalisation-and-nullstellensatz`,
`induced-representations-and-frobenius-reciprocity`, and
`the-diagram-lemmas-in-an-abelian-category`.

I read each batch manifest, coverage file, notes file, generated Beta task, the
controlling design sections, and the current `research/plan-spec.json`. I also
refreshed `research/frontier-24-alpha-a-scope-decisions.json`, resolved its
five pending rows, and ran the required `scope-decisions check`.

## Verdicts

| A page | Batch | Verdict | Reason |
|---|---:|---|---|
| `noether-normalisation-and-nullstellensatz` | 1 | sufficient | The CA-7 route, dependencies, and source stack are sufficient after adding the four omitted coverage carriers for the denominator-obstruction and radical/point-separation items. |
| `induced-representations-and-frobenius-reciprocity` | 2 | sufficient | The later RT-4 reconciliation is reflected correctly, the design/spec order drift is recorded without local adjudication, and the scaffold is sufficient after adding the two omitted coverage carriers for the induced-character and conjugate-character definitions. |
| `the-diagram-lemmas-in-an-abelian-category` | 7 | sufficient | The MA-11 route and the Step-0 prerequisite drift disposition still stand, every A-page item is represented in coverage, and the remaining declines are honest scope decisions rather than missing scaffold. |

## Direct repairs applied

### Batch 1 — `noether-normalisation-and-nullstellensatz`

The manifest had four A-page items present in `research/frontier-24-batch-1.pages.json`
but absent from both harvested and canonical coverage rows:

- `lem-zariski-lemma-one-variable-localisation-not-finite`
- `lem-vanishing-ideal-is-radical`
- `lem-zero-locus-of-an-ideal-equals-zero-locus-of-its-radical`
- `cor-affine-radical-ideal-point-separation`

I repaired `research/frontier-24-batch-1.coverage.json` by adding canonical
rows for those exact items. This preserves the existing CA-7 route: the
one-variable denominator obstruction is the first explicit proof move behind the
field-form Zariski lemma, and the radical/zero-locus/point-separation items are
the closing affine-geometry seam the page already declares.

### Batch 2 — `induced-representations-and-frobenius-reciprocity`

The manifest had two A-page definitions present in
`research/frontier-24-batch-2.pages.json` but absent from coverage:

- `def-induced-character-of-a-complex-representation`
- `def-conjugate-representation-and-conjugate-character`

I repaired `research/frontier-24-batch-2.coverage.json` by adding canonical
rows for those exact definitions. No route, source, or dependency change was
needed.

## Scope-decision review

`node tools/scope-decisions.mjs refresh --run frontier-24 --group a` produced
five current decline rows. All five now resolve as `stands` on the current
bytes:

| Batch | Page | Result | Decision | Evidence summary |
|---:|---|---|---|---|
| 1 | `noether-normalisation-and-nullstellensatz` | Milne Theorem 9.5 | `stands` | The page spends only the exchange and tower-additivity consequences, not the stronger finite-cardinality theorem itself. |
| 1 | `noether-normalisation-and-nullstellensatz` | Altman-Kleiman Corollary (15.6) | `stands` | The generator-count bound belongs to the later height/regularity page, not the current residue-field and Nullstellensatz route. |
| 2 | `induced-representations-and-frobenius-reciprocity` | Webb Example 4.3.6 | `stands` | The B page already has two worked `S_3` inductions and the reciprocity check; a third induction of the same type would only duplicate boundary coverage. |
| 7 | `the-diagram-lemmas-in-an-abelian-category` | Mac Lane Exercise 7 | `stands` | The current page studies the diagram lemmas themselves, not the category `Ses(A)` as a separate later object. |
| 7 | `the-diagram-lemmas-in-an-abelian-category` | Weibel Proposition 1.3.4 | `stands` | This is correctly deferred to `long-exact-sequences-in-homology`, the later page that owns homology long-exact-sequence naturality. |

## Design and dependency notes

### Batch 1

The live spec and manifest still agree with CA-7 on page identity and the
single prerequisite `integral-extensions-and-going-up-examples`. The later
`plan-commutative-algebra-track.md` CA-7 overlay remains the controlling design
block, and the current scaffold follows its finite-field normalization repair,
its decomposition of the field-form Zariski lemma, and its decision to stop the
dimension seam at the lower bound rather than full affine-dimension equality.

### Batch 2

The later RT reconciliation in `research/plan-algebra-track-expansion.md`
remains controlling over the older RT-4 summary: Burnside is included, Mackey's
criterion is included, and the tensor-product model is a remark rather than the
numbered definition. The design/spec order drift remains recorded, not locally
adjudicated: the design still says `145`/`146`, while the live spec and manifest
still use `149`/`150`.

### Batch 7

The current Step-0 drift note still governs the prerequisite mismatch: the live
spec names only `exactness-and-the-member-calculus-examples`, while the MA-11
design lists `exactness-and-the-member-calculus`, `abelian-categories`, and
`free-modules-and-exact-sequences`. On current disk the spec closure for
`the-diagram-lemmas-in-an-abelian-category` still contains all three design
pages, so no further batch-local repair is needed. The snake-first route,
arrow-theoretic connecting morphism, and local naturality proof obligation are
all preserved.

## Checks run

- `node tools/scope-decisions.mjs refresh --run frontier-24 --group a`
  Result: `scope-decisions: a: 5 decline(s), 5 pending` before decisions were written.
- `node tools/scope-decisions.mjs check --run frontier-24 --group a`
  Result: `scope-decisions: 5 current decline(s), 0 error(s)`.
- `node tools/coverage-checklist.mjs research/frontier-24-batch-1.coverage.json --require-destination`
  Result: `coverage-checklist: 1 page(s), 48 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/coverage-checklist.mjs research/frontier-24-batch-2.coverage.json --require-destination`
  Result: `coverage-checklist: 1 page(s), 48 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/coverage-checklist.mjs research/frontier-24-batch-7.coverage.json --require-destination`
  Result: `coverage-checklist: 1 page(s), 62 harvested result(s), 0 error(s), 0 warning(s)`.
- Manifest-to-coverage alignment pass on the three owned A pages
  Result: every A-page item is represented in the current coverage record.
