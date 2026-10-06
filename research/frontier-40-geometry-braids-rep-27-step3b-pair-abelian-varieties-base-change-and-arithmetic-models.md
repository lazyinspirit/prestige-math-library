# Step 3b report — A/B pair `abelian-varieties-base-change-and-arithmetic-models`

- Run: `frontier-40-geometry-braids-rep-27`
- Role: alpha-high; batch 27
- A page: `abelian-varieties-base-change-and-arithmetic-models` (order 917, 67 items)
- B page: `abelian-varieties-base-change-and-arithmetic-models-examples` (order 918, 2 items)
- Dispatch: `research/frontier-40-geometry-braids-rep-27-step3b-pair-abelian-varieties-base-change-and-arithmetic-models.task.md`
- Output artifacts: this report, `research/frontier-40-geometry-braids-rep-27-batch-27.pages.json`,
  `research/frontier-40-geometry-braids-rep-27-batch-27.proof-contracts.json`,
  `research/frontier-40-geometry-braids-rep-27-batch-27.cross-batch-dependencies.json`,
  `library/algebraic-geometry/abelian-varieties-base-change-and-arithmetic-models.md`,
  `library/algebraic-geometry/abelian-varieties-base-change-and-arithmetic-models-examples.md`,
  and the 69 item files.

## Entry checkpoint (historical)

Owned IDs and open obligations were recorded at entry in the prior revision of
this report: 69 items (67 A + 2 B), audit of each scaffold, authoring of all
items and both pages, the batch proof-contracts artifact, manifest/coverage/
ledger refresh, Step 3a findings P1 (`ex-elliptic-curve-good-and-bad-reduction`
declared a B-page-homed supplier) and P2 (`def-abelian-scheme` did not declare
`def-abelian-variety-over-a-field`), and the Step 3 check battery plus item
decisions.

## Final checkpoint — all owned items authored

All 69 items and both pages exist and are complete. The 12 items not present at
the start of the final authoring session were written in dispatch order:

- dispatch level 9: `lem-arith-dual-isogeny-kernel-and-abelian-biduality`,
  `lem-arith-theta-extension-splitting-and-isotropic-descent`,
  `lem-arith-poincare-cohomology-at-the-identity`;
- dispatch level 10: `lem-arith-symmetric-homomorphism-is-a-mumford-map`,
  `lem-arith-mumford-map-degree-is-euler-characteristic-square`;
- dispatch level 11: `lem-arith-effective-ample-pair-and-group-descent`,
  `lem-arith-polarization-and-picard-twist-ampleness`;
- dispatch level 12: `lem-arith-full-minimal-model-embedding`,
  `thm-abelian-variety-dual-and-polarization`;
- dispatch level 13: `thm-neron-model-existence-in-stated-class`;
- dispatch level 14: `thm-arith-neron-ogg-shafarevich-prime-to-residue-characteristic`;
- dispatch level 15: `thm-good-reduction-and-smooth-proper-base-change`.

(The dispatch labels are retained here; the corrected final levels of the
first nine of these items appear in the relabelling paragraph below.)

The earlier authoring (43 items) covered levels 0–8, and the remaining level
8–10 items (`lem-arith-homogeneous-bundle-vanishing-and-mumford-surjectivity`,
`lem-arith-strict-law-translation-and-graph-calculus`,
`cex-abelian-variety-does-not-have-good-model-over-every-base`,
`lem-arith-separated-translate-gluing`,
`lem-arith-dual-and-poincare-bundle-finite-field-descent`,
`lem-arith-finite-translate-group-completion`) were verified on disk as part of
the final pass.

**Level relabelling.** After syncing manifest deps with the authored
frontmatter, the repository dependency-level check recomputed levels from the
actual in-run dependency graph. Twelve items received corrected
`dependency_level` values in both the manifest and the check: the chain
`lem-arith-hilbert-divisor-charts-and-picard-diagonal` (4→3),
`lem-arith-picard-representation-by-generic-quotient-and-translates` (5→4),
`lem-arith-coherent-kunneth-and-proper-image-dual` (6→5),
`lem-arith-dual-and-poincare-bundle-finite-field-descent` (7→6),
`lem-arith-homogeneous-bundle-vanishing-and-mumford-surjectivity` (8→7),
`lem-arith-dual-isogeny-kernel-and-abelian-biduality` (9→8),
`lem-arith-theta-extension-splitting-and-isotropic-descent` (9→8),
`lem-arith-poincare-cohomology-at-the-identity` (9→8),
`lem-arith-symmetric-homomorphism-is-a-mumford-map` (10→9),
`lem-arith-mumford-map-degree-is-euler-characteristic-square` (10→9),
`lem-arith-polarization-and-picard-twist-ampleness` (11→10) and
`thm-abelian-variety-dual-and-polarization` (12→11). The dispatch authoring
order remains a valid topological order for the graph; the repository check now
reports 0 findings naming a batch-27 item. This relabelling is a shared-plan
input to Step 4.

## Local repairs recorded (scaffold changes)

- P1 (Step 3a): `ex-elliptic-curve-good-and-bad-reduction` no longer declares
  the B-page-homed `ex-elliptic-curve-as-nonaffine-algebraic-group`; the
  example rests only on A-page suppliers. Its scaffold statement text still
  mentions that old link, but the authored item and its manifest `deps` do not
  declare it.
- P2 (Step 3a): `def-abelian-scheme` now declares
  `def-abelian-variety-over-a-field`, used by its statement.
- `lem-finite-etale-lifting-over-complete-dvr`: replaced the B-page dependency
  `ex-finite-etale-separable-extension` with the A-page supplier
  `lem-etale-residue-extensions-finite-separable` (depcheck
  `[b-leaf-content]` cleared).
- `lem-arith-dilatations-and-defect-of-smoothness`: removed an unused F4
  (Hartogs/ZMT) fact; the proof never cited it, and fact/step exactness now
  holds.
- `lem-arith-picard-representation-by-generic-quotient-and-translates` and
  `lem-arith-polarization-and-picard-twist-ampleness`: declared the
  definition items their statements link (`def-rigidified-relative-picard-functor-and-dual-abelian-variety`,
  `def-ample-invertible-sheaf`), clearing the two `[cited-not-in-deps]`
  depcheck findings.
- `thm-abelian-scheme-is-the-neron-model-of-its-generic-fibre` and
  `lem-good-reduction-stable-under-base-change`: adopted the canonical
  precheck step layout (their final steps had drifted from it).
- Newly authored items that added exactly the suppliers their proofs use:
  the dual-isogeny lemma (definition of the rigidified Picard functor, closed
  immersion of group monomorphisms, universal structure sheaf), the theta
  lemma (group monomorphism closedness), the symmetric-map and square-degree
  lemmas (homogeneous-bundle vanishing), the full-embedding lemma (invariant
  volume), and the Poincaré-cohomology lemma reworded to carry the exact
  `r >= 0` bound of its universal-complex supplier.
- Earlier repairs recorded in the previous revision remain in place (exact
  suppliers added to `def-group-scheme-over-a-scheme`,
  `def-neron-model-and-mapping-property`, the torsion-bound and Cartier
  lemmas, `thm-plane-cubic-chord-tangent-group-law`, `def-abelian-scheme`,
  the S-rational descent lemma and the codimension-one neighbourhood lemma).

## Proof contracts

`research/frontier-40-geometry-braids-rep-27-batch-27.proof-contracts.json`
covers all 69 manifest items (67 A + 2 B): citations are regenerated verbatim
from the cited items' own statement sections, derivations cover every numbered
step, and every item carries the eight standard boundary axes (552 rows).
`tools/proof-contract.mjs --strict`: **0 errors, 0 warnings, 69/69 items**.
`tools/citation-fidelity.mjs --fail-on-missing-quote`: 535 citations, no
missing quote and no widening candidate. `tools/boundary-audit.mjs`: 552 rows,
no template reuse and no contradicted disposition.

## Manifest, coverage and dependency inputs

- `manifest-deps.mjs`: 69 item(s), 0 normalized, 0 error(s); manifest `deps`
  rows equal the authored frontmatter for every item.
- Coverage `research/frontier-40-geometry-braids-rep-27-batch-27.coverage.json`
  is unchanged: `coverage-checklist --require-destination` gives 2 pages, 113
  harvested results, 0 errors, and the pre-existing advisory
  `coverage-low-yield` (18/104 A-page rows `included`). The further required
  claims are carried inline in the ordered helper bundles; the decline is
  already recorded by the Step 1 owner review and needs Step 4 confirmation.
- `frontier-dependency-ledger refresh --run frontier-40-geometry-braids-rep-27`:
  exit 0; the batch-27 cross-batch input remains `[]` (no other batch manifest
  consumes a batch-27 item, verified directly).
- `validate-plan.mjs research/plan-spec.json`: acyclic and consistent. Note for
  Step 4: 257 planned pages still carry no item list (pre-splice); this batch's
  two pages now carry their item lists.

## Checks run (actual results, batch-27 scope)

| command | exit | result |
|---|---|---|
| `precheck.mts` on the 69 explicit item paths | 0 | `61 checked, 0 failing` — the 8 definition/remark-style files have no proof body |
| `rendercheck.mjs` on the 69 items + 2 pages | 0 | `OK — 71 file(s)` |
| `proof-layout.mjs` on the 69 item paths (one batched command) | 0 | `69 items, 258 steps, 0 defects` |
| `content-policy.mjs` on `…batch-27.pages.json` | 0 | `69 scoped item(s), 0 error(s), 0 warning(s)` |
| `proof-contract.mjs --strict` | 0 | `0 error(s), 0 warning(s), 69/69 item(s) checked` |
| `citation-fidelity.mjs --fail-on-missing-quote` | 0 | no missing quotes, no widening candidates |
| `boundary-audit.mjs` | 0 | 552 rows; no template reuse; no contradicted dispositions |
| `manifest-deps.mjs` | 0 | `69 item(s), 0 normalized, 0 error(s)` |
| `item-dependency-levels.mjs check --run …` | 1 (global) | run-wide errors are sibling in-flight pairs; **0 findings name a batch-27 item** |
| `validate-plan.mjs research/plan-spec.json` | 0 | acyclic and consistent (257 planned pages still item-list-free, pre-splice) |
| `coverage-checklist.mjs --require-destination` | 0 | 2 pages, 113 harvested results, 0 errors, 1 advisory |
| `source-fetch-check.mjs --coverage …batch-27.coverage.json` | 0 | 9/9 sources fetch-verified, 9/9 resolved |
| `depcheck.mjs` | 1 (global) | no finding names a batch-27 item |
| `fwdcheck.mjs --quiet` | 1 (global) | no finding names a batch-27 item |
| `extcheck.mjs` | 1 (global) | no finding names a batch-27 item (one unrelated published remark) |
| `frontier-dependency-ledger.mjs refresh --run …` | 0 | refreshed; batch-27 input `[]` |
| `step3-decisions.mjs check --run --phase final` | 1 (global) | run-wide open work in other pairs; **0 open rows for batch-27** (69/69 closed) |

## Item decisions recorded

All 69 items carry current
`research/frontier-40-geometry-braids-rep-27-step3b-review-<id>.json` receipts
with confidence 1 and the full examined dependency list: **48 `accept`**
(scaffold hypotheses, sources and direct suppliers accepted; proof authored and
checks clean) and **21 `repaired`** (dependency/fact layout repaired as listed
above). **0 `escalate`.** No item required an unresolved in-run supplier: every
in-run dependency used by a proof is authored and available at its declared
level.

## Escalations, open obligations and published concerns

- No in-run supplier is unfinished and no item decision is escalated.
- No new published defect was found by this batch. Unrelated published debt
  reported by the global tools (for example the `published-unaudited` remark in
  another pair) does not name a batch-27 item and does not block this handoff.
- Open obligations handed to Steps 5–8: the thorough independent mathematical
  audit of the 69 proofs, in particular the deeper local-algebra steps of
  `lem-arith-poincare-cohomology-at-the-identity` (minimal-complex/Koszul
  comparison and the universal-property section argument), the finite
  separable realization locus in
  `lem-arith-symmetric-homomorphism-is-a-mumford-map`, and the
  completion/descent assembly in `thm-neron-model-existence-in-stated-class`.
  The proofs were written against the owner-supplied closure packets
  (`dual-source/proof-closure-packet.md`, `neron-source/packet.md`,
  `neron-source/closure-supplement.md`, `etale-source/closure-packet.md`) with
  the exact suppliers named at each step; no source reading beyond those packets
  is claimed here.
- Step 4 inputs: the twelve level corrections above, the new page prose for
  orders 917/918, and the pre-splice plan note that both new pages carry item
  lists while `plan-spec.json` still does not.

## Handoff statement

All 69 assigned items and both assigned pages are authored; the batch proof
contracts, manifest/coverage/dependency inputs, decisions and this report are
present and current. The only remaining batch-27 items in the run-wide gates are
those owned by other in-flight pairs.
