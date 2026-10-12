# Representation category split — 2026-10-12

The owner approved replacing Special Topics in Representation Theory with the
four categories recommended in this session. The representation build
`frontier-44-special-representation-examples-28-six-step` reports COMPLETE
from disk; its engine closeout commit is `274ceb148`.

| Category | Topic pairs |
|---|---:|
| Symmetric Groups and Symmetric Functions | 16 |
| Quantum Groups and Crystal Bases | 7 |
| Hecke Algebras and Categorification | 7 |
| Category O and Geometric Representation Theory | 9 |

All 78 A/B page carriers were moved by filesystem rename. Page identities,
content, item placements and publication statuses are retained. The existing
working-tree edits to `kazhdan-lusztig-bases-polynomials-and-cells` were carried
with that page; the other 77 carriers are byte-identical to HEAD. No shared
mathematical item was edited by this change.

The residue-crystal and quantum affine Fock-space constructions belong to
Quantum Groups and Crystal Bases. Symmetric-group modular branching stays in
Symmetric Groups and Symmetric Functions. Both Ariki parameter regimes and KLR
categorification belong to Hecke Algebras and Categorification; category-O
functors and the geometric prerequisites belong to Category O and Geometric
Representation Theory. Foundational Hopf/Hecke and braid-group categories
retain their pages.

Each category has its own overview and prerequisite-ordered reading path.
The canonical plan's 78 category fields, the SYMR/QG/KL planning registries,
current track category directions and the three neighboring category overviews
were updated. Historical run manifests, snapshots and receipts retain their
original paths. The exact page move mapping and carrier hashes are recorded in
[representation-category-split-2026-10-12.json](representation-category-split-2026-10-12.json).

Validation:

- `node tools/pathcheck.mjs symmetric-groups-and-symmetric-functions quantum-groups-and-crystal-bases hecke-algebras-and-categorification category-o-and-geometric-representation-theory --json`: four pathways, zero errors, zero warnings.
- `node tools/rendercheck.mjs` with the explicit 78 moved page paths, eight new overview/pathway paths and three neighboring category overview paths: 89 files, zero errors, zero warnings.
- Explicit metadata verification: 78 unique page IDs, matching destination hashes, matching canonical categories and SYMR/QG/KL registry categories, no remaining canonical old category or directory. The canonical plan differs from HEAD only in these 78 category fields.
- `git diff --check` on the changed tracked paths: passed.
