# Batch 34 notes — `qft-mc01` / `qft-mc01-examples`

Run `physics-td-qft-rpm-62-2026-10-14`, role beta, Step 1 scaffold construction,
2026-10-14. Scope: exactly the assigned pair, A page order **507**, B page order
**508**, category `quantum-field-theory-mathematics`, library `mathematics`. The
final inventory has four A items and one B item. The A page requires
`hilbert-space-geometry-and-riesz-representation`; the B page requires `qft-mc01`.
No published item, shared plan, engine state, verdict, or mathematical supplier was
edited. The owner authoring-direction file was absent.

## Design and plan comparison

Read the complete `qft-mc01` section in `research/plan-quantum-field-theory-track.md`
and compared it with the matching page records in `research/plan-spec.json`. Page
IDs, titles, category, library, order, companion, and current prerequisite agree.
One stale embedded reservation in the design JSON says `requires: []`, while both
the current plan prose and `plan-spec.json` require
`hilbert-space-geometry-and-riesz-representation`. Followed the current plan and
spec; recorded this conflict here. The prose design and detailed local argument
inventory support the four A results (algebra/state definition, positive-form
Cauchy–Schwarz/null ideal, algebraic GNS reconstruction, and symmetry
implementation) and the B nonregular Weyl-state counterexample. The B example
consumes the GNS theorem. No extra page edge is needed.

## Inventory and dependency levels

The run's batch-level dependency record places batch 34 at level **0**. Its item
DAG is acyclic and computes as follows; `deps` are the direct item edges:

| Item | Page | Level | Direct dependencies |
|---|---|---:|---|
| `def-qft-involutive-algebra-state` | A | 0 | none |
| `lem-qft-positive-state-cauchy-schwarz` | A | 1 | `def-qft-involutive-algebra-state` |
| `thm-qft-algebraic-gns-domain` | A | 2 | `lem-qft-positive-state-cauchy-schwarz`; `thm-completion-of-an-inner-product-space-is-hilbert` |
| `lem-qft-state-symmetry-implementer` | A | 3 | `thm-qft-algebraic-gns-domain` |
| `cex-qft-nonregular-weyl-state` | B | 3 | `thm-qft-algebraic-gns-domain` |

The definition is the local supplier for this batch, then the form lemma, then the
GNS result, before either GNS consumer. The imported completion result is a
published mathematical supplier and does not raise this run's batch level. The
100-item page cap is not approached. The workspace category directory was created
for these files; its `_category.md` metadata does not exist and is outside this
assigned pair, so it is left for the owner.

## Mathematical dependency findings

Read the exact statement and complete proof of
`thm-completion-of-an-inner-product-space-is-hilbert`: completion of an
inner-product space is Hilbert under Countable Choice (`AC_omega`). The local GNS
theorem explicitly carries that premise and uses the supplier only to complete
the positive-definite quotient. Its construction separately proves quotient
well-definedness, the invariant common domain, the adjoint relation, graph
closability, state recovery, and uniqueness. It claims no C*-norm and no essential
self-adjointness. The GNS theorem's relevant direct prerequisites were checked at
their statements and proofs; a transitive dependency traversal of the imported
completion theorem found 343 dependency IDs and no missing paths. This traversal
is not a claim that every upstream proof was reread.

Both in-batch GNS consumers restate `AC_omega`, since their cited GNS supplier
carries it. Batch 35 has a consumer of the GNS theorem and the symmetry lemma; its
statement must retain the same choice premise. The symmetry lemma assumes
continuity at the identity of every matrix coefficient, which is the condition
used to derive strong continuity. The Weyl example proves its finite-support
positivity directly, identifies the orthonormal GNS basis, and derives failure of
strong continuity and of any dense norm-differentiable generator domain. It makes
no claim about physical preparation or experiment.

## Sources and recovery history

The A page was checked against two independent full treatments: Schmüdgen,
*An Invitation to Unbounded Representations of *-Algebras on Hilbert Space*,
§§2.4 and 4.4; and Fewster–Rejzner, *Algebraic Quantum Field Theory—an
introduction*, §§2.2–2.3, §4.2 Exercise 17, and §5 Theorem 23. Relevant full-text
reasoning was inspected for the definition and positive-form lemma, quotient and
left multiplication construction, common-domain adjoint/closability, uniqueness,
state-preserving implementation, and the delta Weyl state. URLs, locators,
harvested results, and each result's disposition are in the coverage file.

The original Schmüdgen mirror at `cjh.site` returned HTTP 404 on all six recorded
attempts. The LSE PDF was retrieved but the fetch checker could not verify its
compressed page count because `mutool` is unavailable; it too has six recorded
attempts. Those source histories were preserved as justified `dropped` entries
with search history and complete local alternative-proof/dependency summaries in
`source_resolution`; dropping either source did not drop any mathematical claim.
A full-text HTML copy of Schmüdgen and the full arXiv HTML of Fewster–Rejzner were
then retrieved and inspected. `source-fetch-check --stamp` verified both active
replacement sources (2/4 source rows stamp successfully; 4/4 are resolved when
the two documented drops are included). No retrieval gap remains for the assigned
claims.

## Checks and readiness

Actual scoped command results are appended after the final manifest, item, contract,
and readiness checks. The required final proof-layout check is run on exactly the
five assigned item files. Readiness records will name every direct dependency
examined; they are Step 1 records and do not represent independent approval.

## Checks run (final artifacts, 2026-10-14)

- `batch-dependency-levels.mjs write` followed by `check` succeeded for all 64
  batches; maximum batch level is 7 and batch 34 remains level 0.
  `item-dependency-levels.mjs` on the five batch-34 items reports no errors and
  levels 0, 1, 2, 3, 3 as tabulated above. The run-wide item-level scan currently
  reports 104 `empty scaffold inventory` pages and no other dependency-level
  errors; none names an item or page owned here.
- `proof-contract.mjs --strict`: 5/5 items, 0 errors, 0 warnings.
  The contract maps every numbered proof step and exact cited statement, and the
  Weyl example includes a finite two-term positivity check.
- `precheck.mts`: 4 proof-bearing items checked, 0 failing; the definition is
  not applicable. Its frontmatter records `precheck: n/a`; the four proof items
  record `precheck: pass`.
- `proof-layout.mjs` on the five assigned items: 5 items, 21 steps, 0 defects.
  The app checkout has no installed `tsx` loader, so the default launcher could
  not resolve its `@/` TypeScript aliases. The final renderer run used a temporary
  resolver under `/private/tmp`; no application or shared file was changed.
- `rendercheck.mjs` on the five items and both pages: 7 files, all math and
  frontmatter parsed, no rendering-structure errors.
- `content-policy.mjs --manifest-only --authored`: 5 items, 0 errors, 0 warnings.
  `manifest-deps.mjs`: 5 items, 0 missing deps, 0 errors.
- Focused `depcheck`, `fwdcheck`, and `extcheck` passed for all five items.
- `coverage-checklist.mjs`: 1 A page, 24 harvested results, 0 errors, 0 warnings.
  `source-fetch-check.mjs` check mode: 2/4 rows fetch-stamped; all 4/4 rows
  resolved when the two documented retrieval drops are counted.
- `manifest-integrity.mjs --run`: 128/128 pages present, no missing or added
  pages. `step1-decisions` records all five assigned items `ready`; each record
  hashes the final item and lists every direct dependency. The run-wide Step 1
  check is still open outside this batch: 83 other items lack readiness records
  and 104 pages have empty inventories. Batch-34 item hashes validate as closed.

## Remaining owner metadata

The directory `library/quantum-field-theory-mathematics/` has no `_category.md`.
The assigned pair and current plan/spec metadata are consistent, so no unassigned
category file was created. The owner can add category metadata if this category
requires a dedicated reader-facing description.

## Subsequent shared-run blocker

After the successful batch-level write/check and the five assigned Step 1 records
were hash-checked, another in-progress batch update left
`research/physics-td-qft-rpm-62-2026-10-14-batch-41.pages.json` invalid JSON
(`Expected double-quoted property name`, line 175, column 13). It remains invalid
on recheck. The run manifest-integrity check consequently reports 126/128 pages
present and identifies `qft-mx01` and `qft-mx01-examples` in batch 41 as missing;
run-wide batch dependency and Step 1 checks cannot currently load the complete
run. This is outside batch 34 and is left for the owner. Batch-34 items, their
page manifest and their direct dependency graph were complete and passed their
scoped checks before this shared-file change; no batch-41 file was edited.
