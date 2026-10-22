# Batch 78 authoring notes

Run: `physics-non-fluid-129-2026-10-21-r2`  
Pair: `qftx-finite-group-bf` / `qftx-finite-group-bf-examples`  
Category/library: `quantum-field-theory-mathematics` / `mathematics`

## Plan and design reconciliation

The current plan and the complete design section agree on the A/B page IDs, category, mathematical library, title, and A-page prerequisite `qftx-two-dimensional-sewing`. The design names the finite flat-connection definition, topological-invariance theorem, gluing theorem, and T³ example as the planned interfaces. The canonical plan spec leaves item arrays empty at this pre-scaffold stage; this is a placeholder, not a content conflict. Six local A-page prerequisites/intermediate results were added to carry the complete arguments: the finite CW presentation theorem, finite groupoid integration definition, finite homotopy-pullback definition, groupoid Fubini lemma, bordism state-span definition, and boundary-descent lemma. No shared plan or design was changed.

The A page contains nine items and the B page contains one example; both inventories are below the 100-item cap. The B page remains a leaf. The current computed batch graph places batch 76 at level 0 and batch 78 at level 1 with `78 → 76`; there is no cycle.

## Item inventory and dependency levels

Levels are recomputed over this assigned batch. Out-of-batch mathematical dependencies do not raise these in-run levels.

| Item | Level | Direct item dependencies |
|---|---:|---|
| `thm-qftx-cw-fundamental-group-presentation` | 0 | `def-based-loops-and-fundamental-group`; `lem-cw-quotients-and-collapse-of-a-contractible-subcomplex`; `thm-fundamental-group-of-finite-wedge-of-circles`; `thm-seifert-van-kampen`; `thm-fundamental-group-of-the-circle` |
| `def-qftx-finite-groupoid-integration` | 0 | none |
| `def-qftx-finite-flat-connection-groupoid` | 1 | `def-qftx-finite-groupoid-integration`; `thm-qftx-cw-fundamental-group-presentation` |
| `def-qftx-finite-homotopy-pullback` | 1 | `def-qftx-finite-groupoid-integration` |
| `lem-qftx-finite-groupoid-push-pull-fubini` | 2 | `def-qftx-finite-groupoid-integration`; `def-qftx-finite-homotopy-pullback` |
| `thm-qftx-finite-bf-topological-invariance` | 2 | `def-qftx-finite-flat-connection-groupoid`; `def-qftx-finite-groupoid-integration`; `def-based-loops-and-fundamental-group`; `thm-qftx-cw-fundamental-group-presentation` |
| `def-qftx-finite-bordism-state-span` | 2 | `def-qftx-finite-flat-connection-groupoid`; `def-qftx-finite-groupoid-integration` |
| `lem-qftx-finite-groupoid-gluing-descent` | 3 | `def-qftx-finite-flat-connection-groupoid`; `def-qftx-finite-bordism-state-span`; `def-qftx-finite-homotopy-pullback` |
| `ex-qftx-finite-bf-three-torus` (B) | 3 | `thm-qftx-cw-fundamental-group-presentation`; `thm-qftx-finite-bf-topological-invariance` |
| `thm-qftx-finite-groupoid-gluing` | 4 | `def-qftx-finite-groupoid-integration`; `def-qftx-finite-homotopy-pullback`; `def-qftx-finite-bordism-state-span`; `lem-qftx-finite-groupoid-push-pull-fubini`; `thm-qftx-finite-bf-topological-invariance`; `lem-qftx-finite-groupoid-gluing-descent` |

The local levels are 0, 0, 1, 1, 2, 2, 2, 3, 3, 4 as required by the supplier-first argument order. The final interface audit made the finite-groupoid domain explicit, added a local finite homotopy-pullback definition, and proved the pullback projection base-change identity used for span composition. The flat-connection definition already contains the complete orbit–stabilizer derivation in step 4.1; that proof was checked and retained. All five imported mathematical suppliers of the CW presentation theorem were read in full at their relevant proofs; the pinned imported files and root originals were hash-current. The topological-invariance proof additionally uses the imported based-loop multiplication convention explicitly. No supplier claim is treated as proved merely because of its status label.

## Cross-batch prerequisite

The exact page edge is recorded as verified in `physics-non-fluid-129-2026-10-21-r2-batch-78.cross-batch-dependencies.json`. The current `loadStep1Record` / `step1Decision` check reports closed, hash-current `ready` records for the three current items on `qftx-two-dimensional-sewing`. The finite-group arguments are self-contained and do not invoke the supplier page's Frobenius classification; the declared page dependency is preserved as planned. This records Step-1 readiness and does not claim independent acceptance.

## Sources, retrieval, and harvest

The per-source records in `physics-non-fluid-129-2026-10-21-r2-batch-78.coverage.json` contain the full-text reading extents, searches, retrieval history, each harvested result and its disposition. All 27 harvested results are marked `included`; none was dropped or left unresolved.

| Source and URL | Full-text locator read | Items supported |
|---|---|---|
| Moore & Saxena, [TASI Lectures](https://arxiv.org/pdf/2510.07408) | §§12–13, PDF pp. 50–53; §§23.2–23.3, pp. 92–99 | `def-qftx-finite-flat-connection-groupoid`; `thm-qftx-finite-bf-topological-invariance`; `def-qftx-finite-groupoid-integration`; `def-qftx-finite-homotopy-pullback`; `lem-qftx-finite-groupoid-push-pull-fubini`; `def-qftx-finite-bordism-state-span`; `lem-qftx-finite-groupoid-gluing-descent`; `thm-qftx-finite-groupoid-gluing`; `ex-qftx-finite-bf-three-torus` |
| Freed & Quinn, [Chern-Simons Theory with Finite Gauge Group](https://www.math.ru.nl/~mueger/TQFT/FQ.pdf) | §1, PDF pp. 2–3; §2, pp. 7–11, especially Lemma 2.4 and Theorem 2.13; §5, pp. 27–28 | `def-qftx-finite-flat-connection-groupoid`; `def-qftx-finite-groupoid-integration`; `def-qftx-finite-homotopy-pullback`; `thm-qftx-finite-bf-topological-invariance`; `lem-qftx-finite-groupoid-push-pull-fubini`; `def-qftx-finite-bordism-state-span`; `lem-qftx-finite-groupoid-gluing-descent`; `thm-qftx-finite-groupoid-gluing` |
| Dijkgraaf & Witten, [Topological Gauge Theories and Group Cohomology](https://www.ias.edu/sites/default/files/sns/%5B126%5DCommMathPhys129-1990.pdf) | §6.2, PDF pp. 22–23; §6.6, pp. 30–32 | `def-qftx-finite-flat-connection-groupoid`; `thm-qftx-finite-bf-topological-invariance`; `thm-qftx-finite-groupoid-gluing`; `ex-qftx-finite-bf-three-torus` |
| Baez, [An Introduction to Spin Foam Models of BF Theory and Quantum Gravity](https://arxiv.org/pdf/gr-qc/9905087) | §7, PDF pp. 29–30, Remark 2; §8, pp. 33–34 | `def-qftx-finite-flat-connection-groupoid`; `thm-qftx-finite-bf-topological-invariance` |
| Hatcher, [Algebraic Topology](https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf) | Proposition 1.26, PDF pp. 49–51; Proposition 1A.2, pp. 83–85 | `thm-qftx-cw-fundamental-group-presentation`; `thm-qftx-finite-bf-topological-invariance` |

The web PDF parser rejected the 42.8 MB TASI PDF; the complete official arXiv PDF was fetched, its 331-page length checked, and the cited sections read. The author-hosted Baez file timed out in the browser reader; the complete arXiv PDF was then retrieved and the relevant sections read. These recovered retrievals are preserved in `retrieval_history`, `searches`, and `recovery_attempts`; no source needed to be dropped. `source-fetch-check --stamp` verified all 5/5 source URLs and wrote current fetch stamps.

## Scope and conventions preserved

This is an untwisted discrete finite-group state sum. Flatness is imposed by finite relator equations and the sum is finite; the normalization retains every gauge stabilizer. The edge gauge convention is `g_e ↦ h_{t(e)} g_e h_{s(e)}^{-1}`; path holonomy is reverse-ordered, and the representation map uses inverse-path holonomy to match the library's traversal-first product on based loops. Gluing carries a boundary isomorphism `α`; omitting it loses the diagonal stabilizer factor, as checked by the `BG` example. The boundary restriction square is shown with TikZ, and no proof relies on the drawing.

The model has no continuous Lie-algebra-valued BF integral, no additional cocycle phase, and no claim of continuous gravitational dynamics or convergence of the Ponzano–Regge state sum. Its scalar formulas are deductions within the stated finite model; they report no experimental measurement or statistical inference.

## Scoped checks and remaining run-level blockers

Checks against the assigned batch after final edits:

- `precheck.mts`: all 10 items pass.
- `proof-contract.mjs --strict`: 10/10 items, 0 errors and 0 warnings.
- `proof-layout.mjs` on the 10 explicit item files: 40 steps, 0 defects.
- `rendercheck.mjs` on 10 items and 2 pages: 12 files, 0 errors and 0 warnings.
- `content-policy.mjs --manifest-only --authored`: 10 scoped items, 0 errors and 0 warnings.
- `depcheck.mjs` on the explicit 10-item selection: 0 errors and 0 warnings; its current dependency closure contains 497 items.
- `coverage-checklist.mjs`: 1 A-page harvest, 27 results, 0 errors and 0 warnings.
- `source-fetch-check.mjs --stamp`: 5/5 sources verified and stamped; the final stamp check confirms all 5/5 remain current.
- Recomputed levels on the two assigned manifest pages: all 10 items match their declared levels; no cycle.
- Current `step1Decision` check: 10/10 assigned items have hash-current `ready` records; the unchanged CW-presentation record was preserved.

The repository-wide `item-dependency-levels.mjs check --run` is not clean outside this batch: across 258 pages / 485 items it reports 116 errors, comprising 114 other pages with empty scaffold inventories and two existing level mismatches (`ex-gr-fx14-1`: recorded 3, computed 4; `lem-nrqmx-finite-symplectic-implementers`: recorded 2, computed 1). The scoped batch levels above pass.

The repository-wide `batch-dependency-levels.mjs check --run` reports the shared run-level record as stale. The current graph differs from its recorded rows at batch 42 (now level 2, requiring 40, 41, and 78) and batch 120 (now also requiring 58); batch 78 remains level 1 and requires batch 76 at level 0. The shared run-level record was left for the owner to refresh.

All ten authored items have current Step-1 `ready` records bound to their current dependency closures. Their precheck metadata remains pending as designed; the explicit precheck above passes. Readiness does not imply independent proof approval or publication.
