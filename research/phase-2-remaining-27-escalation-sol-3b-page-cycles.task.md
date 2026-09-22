# Owner-authorised repair 3b — the two page cycles the Step-7 repairs introduced

Owner directive, 2026-09-20. `node tools/depcheck.mjs` fails in the working tree
but passes at HEAD (`git worktree` at HEAD reports OK), so today's Step-7
repairs introduced both cycles. They block the Step-8 gates and they are real
library defects: two pages may not depend on each other.

```
CIRCULAR PAGES: highest-weight-theory-for-complex-semisimple-lie-algebras
  -> root-systems-dynkin-diagrams-and-cartan-killing-classification
  -> highest-weight-theory-for-complex-semisimple-lie-algebras
CIRCULAR PAGES: compact-lie-groups-maximal-tori-and-peter-weyl-theory
  -> real-forms-and-real-semisimple-lie-algebras
  -> real-forms-and-real-semisimple-lie-algebras-examples
  -> compact-lie-groups-maximal-tori-and-peter-weyl-theory
```

## What is already known

- Both cycles are page-level, built from item `deps` plus the manifest `requires` graph; no `requires` array changed, so the closing edges are new item dependencies added by today's repairs.
- Cycle 2 candidates found by diffing the working tree against HEAD: `thm-compact-connected-semisimple-lie-groups-are-classified-by-root-data`-style items on the compact page that now depend on `thm-existence-of-a-compact-real-form` and `prop-complexification-has-a-canonical-complex-structure` (real-forms page), and `ex-hyperbolic-space-as-so-zero-n-one-mod-so-n` on the real-forms examples page that now depends on `cor-normalized-haar-measure-on-a-compact-lie-group` (compact page, added as `[L7]`).
- A candidate on the other cycle: `thm-serre-presentation-theorem` (root-systems page) now depends on `prop-the-roots-form-a-reduced-crystallographic-root-system` (highest-weight page).

## Job

1. Reconstruct both cycles edge by edge from the working tree (`deps` for items, `requires` for pages) and name the minimal set of edges that closes each cycle.
2. For each closing edge, read the consumer's proof to see whether it actually uses the cited fact, and whether a page-local item or an already-present dependency carries the same content.
3. Repair minimally and honestly: drop a citation the proof does not use, cite the local item that does carry the fact, or move the citation to the correct page's item. Never weaken a proof to break a cycle, and never keep a false citation.
4. Re-run `node tools/depcheck.mjs` until it reports OK, and re-run the proof contracts of every item you touch.

## Authority and limits

- Draft items under `items/` and the run's manifest `items`/`requires` arrays in `research/phase-2-remaining-27-batch-*.pages.json` when a page assignment is genuinely wrong.
- No judge verdicts, pass stamps, FA terminal receipts or closure files.
- Other lanes are editing group-d and group-e items: confine edits to the five pages named above and their items.

## Deliverables

1. The repairs, with the exact edge that closed each cycle and the reason it was the right one to change.
2. Licence rows for every changed item in `research/phase-2-remaining-27-step7-owner-prerequisite-repairs.jsonl` (`found_via` = an item whose proof drove the change, `authorized_by":"owner"`, exact pre/post hashes, at least two HTTPS sources) — use `kind":"owner-impact-repair"` with `dependency_path` when the edited item is not a direct dependency of `found_via`.
3. Evidence at `research/phase-2-remaining-27-escalation-sol-3b-page-cycles.md`: the full edge lists for both cycles before and after, `depcheck` output, and a statement of which Step-7 repairs' justification still stands.
4. Focused checks: `node tools/depcheck.mjs`, `node tools/prosecheck.mjs <your files>`, the touched proof contracts, `git diff --check`.
