# Step 5A — Alpha group `a` (batches 7, 8, 10)

Run `phase-2-next-21`, dispatch `5a-a`, covers batches `7`, `8`, `10`
(differential geometry: Riemann curvature and submanifolds; Lie subgroups,
actions and enveloping algebras; symplectic and Hamiltonian theory).

## Scope and outcome

- 374 authored items and 12 pages read and decided.
- 383 `accepted`, 3 `repaired` (all three citation-inaccurate, nonfatal), 0
  `escalated`.
- Decisions: `research/phase-2-next-21-alpha-a-5a-decisions.json`
  (`version 1`, `group a`, 386 decisions, sealed by
  `tools/step5-scope.mjs stamp --group a`).

## Repairs made (batch 10, all confined to existing items)

Three items used the criterion “isotropic + half dimension ⇒ Lagrangian”
while citing a supplier that states only the converse. The mathematics of the
conclusions is correct; the citations did not license the steps. Each repair
repoints the fact to the existing in-batch supplier
`thm-equivalent-characterizations-of-lagrangian-subspaces` (isotropic and
`dim n` ⇔ `L = L^ω`) together with the Lagrangian-submanifold definition, and
updates the item `deps` list and the batch contract citation.

| Item | Defect id | Change |
|---|---|---|
| `ex-product-and-opposite-symplectic-manifolds` | `p2-next21-b10-5a-lagrangian-criterion-miscited-product-diagonal` | `[F2]` repointed; `prop-lagrangian-submanifolds-have-half-dimension` replaced by `thm-equivalent-characterizations-of-lagrangian-subspaces` + submanifold definition |
| `ex-the-zero-section-and-cotangent-fibres-as-lagrangians` | `p2-next21-b10-5a-lagrangian-criterion-miscited-cotangent-zero-section` | same repointing and dependency update |
| `prop-regular-common-level-sets-are-lagrangian-submanifolds` | `p2-next21-b10-5a-lagrangian-criterion-miscited-regular-fibre` | `[F3]` repointed from the definition to the characterization theorem; supplier added to `deps` |

Statements, proofs' conclusions and intended results are unchanged; no pair,
page or item was added, removed or weakened. The rows are closed
(`disposition: fixed`) in `research/defect-ledger.jsonl`.

## Source evidence

- The spherical-pendulum monodromy import in
  `ex-spherical-pendulum-monodromy-obstructs-global-action-angle-coordinates`
  and `fs-liouville-arnold-gives-global-action-angle-coordinates-on-the-entire-manifold`
  was checked against the cited source (N. Martynchuk, H. W. Broer,
  K. Efstathiou, *Hamiltonian Monodromy and Morse Theory*, arXiv:1901.00705).
  Theorem 2.7 is Takens' index theorem in the form
  `c(h_c+ε) = c(h_c−ε) ± 1`; §3.1 computes the spherical-pendulum monodromy by
  gluing solid tori with matrices `T(c) = [[1,c],[0,1]]` and
  `M_γ = T(c_1)T(c_2)^{-1} = [[1,1],[0,1]]` in the basis whose `b`-cycle is an
  orbit of the circle action. Both items match that statement and basis.
- All other mathematics reviewed is standard and self-contained from the
  in-library suppliers; no further external source reading was required and no
  uncertainty is unresolved.

## Local suppliers

None required. No new definitions or lemmas were needed; the three repairs
reuse suppliers already present on the same page (`batch 10`).

## Required shared-plan / Phase-2 amendments

None. No item or page was added, removed, reordered or re-scoped; manifests,
page order, contracts and provenance records were kept current.

## Published findings

None. This pass reviewed authored (draft) items in batches 7, 8 and 10 only,
so no published-consumer-ledger entry was added and the canonical ledger lock
was not taken. No published item was edited.

## Checks run

- Focused `precheck` on the three repaired items: PASS (3 checked, 0 failing).
- `tools/depcheck.mjs --quiet`: OK (no cycles, all references resolve, no draft
  items on published pages; the pre-existing `cited-not-in-deps` warnings name
  published items outside this group).
- `tools/defect-ledger.mjs validate --run phase-2-next-21`: 4 rows checked,
  0 errors.
- `tools/risk-report.mjs <batch>.proof-contracts.json --require-reviewed`:
  exit 0 for batches 7, 8 and 10 (181 complete `risk_review` records written
  during this read for every HIGH/CRITICAL item).
- `tools/step5-scope.mjs stamp --run phase-2-next-21 --group a`: stamped 386
  carrier hashes.
- `tools/step5-scope.mjs check --run phase-2-next-21 --phase adjudicate
  --batch {7,8,10}`: 0 errors (129/131/126 adjudication obligations decided).

## Blockers

None. No decision is escalated and no mathematics is left unresolved.
