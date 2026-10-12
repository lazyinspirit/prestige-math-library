# Set Theory identifier rename — 2026-10-12

The owner requested changing the internal category identifier from `foundations`
to `set-theory`. The directory is now `library/set-theory/`; its category and
pathway metadata use `set-theory`. The display title remains Set Theory.

All 81 page carriers retain their exact bytes, page IDs, item placements and
publication statuses. Eighty canonical plan records now use the new category.
The schema, current track directions, category-aware validators (including
physics-support copies), rounds helpers and galaxy core selection use the new
identifier. Historical run manifests and receipts retain their recorded paths.
The companion app's `web/lib/alphabeta-study.ts` now recognizes `set-theory` for
its defer-foundations option; its architecture and agent-context documentation
were updated. No deployment was performed.

Validation:

- Category pathcheck: one pathway, zero errors or warnings.
- Explicit rendercheck on all 83 category files: zero errors or warnings.
- Galaxy graph and graph-store tests: ten passed.
- Math and physics-support frontier-gate scope suites: 24 passed after updating both fixture directory paths.
- Math and physics category/boundary suites: 19 passed.
- Canonical plan comparison: only the 80 category fields differ from the pre-rename working copy.
- Carrier SHA-256 preservation and scoped `git diff --check`: passed.
- Companion app ESLint on `lib/alphabeta-study.ts`: passed.

The exact path mapping and before/after hashes are in
[set-theory-identifier-rename-2026-10-12.json](set-theory-identifier-rename-2026-10-12.json).
