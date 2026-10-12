# Step 3a dispatch report — pair `ordinary-hecke-specht-polytabloids-and-signed-murphy-comparison`

- Run: `frontier-44-special-representation-examples-28`, stage `3a-scope`, role alpha, batch 50.
- Pair: A `ordinary-hecke-specht-polytabloids-and-signed-murphy-comparison` (order 1568.1) /
  B `ordinary-hecke-specht-polytabloids-and-signed-murphy-comparison-examples` (order 1568.2),
  category `special-topics-in-representation-theory`.
- Reviewed carrier (current, root-integrated after-binding):
  `research/frontier-44-special-representation-examples-28-batch-50.pages.json`
  sha256 `a7e48637134b9eede4b257ebc4ccb2f09fe072be7efb0ea06c4a37a0fc882224`
  (byte-identical to `.../owner-native50-independent-supplier-construction/actual-new50-after-rootbinding.pages.json`);
  coverage `...-batch-50.coverage.json` sha256 `ccf73457c4033aca2e573e4b66dcc3849ad0ac36e2d01893cd85e37827c8b886`;
  notes `...-batch-50.notes.md` sha256 `bb24db16c6127dc3fc9771fa2e75a22ce977583fdd7ab41991b4f7c5d72f1039`;
  cross-batch ledger `...-batch-50.cross-batch-dependencies.json` sha256 `37517e5f3dc66819f61f5a7bb8ace1921282415f10551d2defa5c3eb0985b570` (empty array).
- **Decision: `sufficient`** — the planned definitions, results and examples adequately cover the intended subject.

## 1. Scope vs the prose design

Design read: `research/plan-symr7p-specht-murphy-prerequisite.md` (identical to
`.../owner-cell-head-classification-repair/missing-prerequisite-design/design.md`), with the nine build-target
contracts in that folder's `proposed-pair.pages.json`. Binding owner direction: “Owner necessary Specht
comparison prerequisite — 2026-10-10” in
`research/frontier-44-special-representation-examples-28-owner-authoring-direction.md` (nine contracts are build
targets; necessary local intermediate suppliers within the pair are authorized; arbitrary commutative
coefficient rings with unit parameter and every field `q=1` specialization are required; no load-bearing
source20/21/25 dependency; a complete sound local construction is the authorized alternative for the two
closed primary sources). Current plan control `research/plan-spec.json` carries the same pair at 1568.1/1568.2
with the nine design items and seven `requires` (the design's five plus the two later-integrated homes; see §5.3).

Current manifest inventory: **11 A + 3 B**, dependency levels 0–9, acyclic. Every design contract is present:

| Design contract | Current item(s) | Scope content present |
|---|---|---|
| `def-dj-bridge-row-column-permutation-modules-and-polytabloids` | same ID | `M(λ)=x_λH`, `P(λ)=z_λH`, `z_λ=x_λT_{w_λ}y_{λ'}`, permutation form `β`, `D_λ`/`w_λ` orientations, empty shapes, base change over `A=Z[v^{±1}]→R`, Fayers/HK dictionary stated |
| `lem-dj-bridge-sign-automorphism-and-star-dual` | same ID | `θ(T_i)=(q−1)−T_i=−qT_i^{-1}`, involution, star commutation, exact pullback, star-dual, base change, `θ(x_λ)=q^{ℓ(w_0(S_λ))}y_λ` with unit retained, `q=1` sign form |
| `lem-dj-bridge-integral-murphy-and-polytabloid-straightening` | split into `lem-…-murphy-cellular-basis-and-cell-form` (Murphy basis, dominance ideals, cell law, cell form) + same ID (polytabloid basis `e_t` indexed by `Std(λ')`, split inclusion, signed Garnir + straightening, DJ form from the embedding) | both integral bases proved independently; all dominance ideals and fixed-first-index cell laws; split polytabloid inclusion; actual cell form; base change — recorded inventory decomposition, not a claim weakening (notes §1) |
| `thm-dj-bridge-murphy-cell-is-the-same-shape-specht-dual` | same ID | explicit perfect same-shape pairing `C_M(λ)×P(λ)→R`, kernel of the row quotient = polytabloid orthogonal complement integrally, unit determinant on the actual bases, no self-form nondegeneracy assumed |
| `thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell` | same ID | base-change compatible `Φ_λ:P(λ)→C_M(λ')^θ`, exact unit `u_λ(q)=q^{ℓ(w_0(S_{λ'}))−ℓ(w_λ)}`, radical/zero-quotient correspondence, PID Jantzen divisibility, `P(λ')≅P(λ)^{∘,θ}` |
| `cor-dj-bridge-specialization-and-composition-multiplicity-dictionary` | same ID | every field `q=1` ordinary integral-polytabloid specialization with standard form, simultaneous-twist composition multiplicities, conditional Schur dictionary with `θ` on both images, no source20 import |

Five authorized local suppliers are additions, each consumed inside the pair by a design contract and each
declared as a dependency of its users (edge check below): `lem-dj-bridge-row-permutation-module-standard-action`,
`lem-dj-bridge-permutation-form-invariance-and-restriction`,
`lem-dj-bridge-parabolic-double-coset-annihilation`,
`lem-dj-bridge-murphy-cellular-basis-and-cell-form`,
`lem-dj-bridge-theta-transport-of-the-cellular-structure`. No design contract was dropped, renamed away or
narrowed; the intended rich scope (every commutative coefficient ring, singular parameters, zero quotients,
arbitrary-field `q=1`) is retained in the item statements.

B page: the three items match the design's Examples sentence exactly.
`ex-dj-bridge-row-and-column-shapes-at-rank-three` covers the rank-3 row/column conventions and both unit
factors (`u_{(3)}=1`, `u_{(1^3)}=q^3`) with the `q=1` values (1, 6, 6, 1);
`ex-dj-bridge-singular-two-tableau-shape` covers the complete `(2,1)` two-tableau comparison, the cross-pairing
determinant `−q^2`, Gram determinant `q(1+q+q^2)`, and singular specializations `q=−1` (char 0) and `q=1`
(char 2); `cex-dj-bridge-untwisted-conjugation-changes-the-module` is the `Q, q=1, n=3` counterexample
distinguishing `C_M(1^3)` (sign) from `P(3)` and its dual (trivial). Each B item depends on the two bridge
results (`thm-…ordinary-specht…`, `cor-…dictionary`); the B page requires only the A page. No B-page item is a
load-bearing supplier for other pages.

## 2. Source coverage

Coverage file records 8 sources for the pair; 6 are fetch-verified with byte/hash/page stamps
(Mathas manuscript 79 pp., Fayers 16 pp., Ryom-Hansen 28 pp., Heard–Kujawa 26 pp., Kleshchev–Mathas–Ram 44 pp.,
Kleshchev survey 66 pp.; the James SLN 682 scan is recorded for the B page's already-published `q=1` facts).
The two closed primaries — Murphy 1995 Theorem 5.2 (DOI 10.1006/jabr.1995.1079) and Dipper–James 1986
Theorem 5.6 (DOI 10.1112/plms/s3-52.1.20) — carry full retained acquisition histories (9 and 6 attempts,
metadata/401/403/406 outcomes) and are recorded `source_resolution.status: dropped, decided_by: owner` as
proof prerequisites after the independent local construction; the owner direction explicitly authorizes that
alternative and prohibits claiming the unread proofs. No fabricated full-text reading is asserted.
`tools/coverage-checklist.mjs <batch-50 coverage> --require-destination` passes with 0 errors and one
informational `coverage-low-yield` warning (12/32 scaffolded; the remaining harvest rows are recorded
structural declines). Spot liveness re-check today: Mathas URL HTTP 200; Fayers URL HTTP 302→200.

## 3. Prerequisites and unmet-prerequisite check

Page-level: all seven `requires` pages are published outside the run —
`library/representation-theory/principal-series-representations-of-gl-n-over-a-finite-field.md`,
`library/special-topics-in-representation-theory/young-diagrams-tableaux-and-permutation-modules.md`,
`library/special-topics-in-representation-theory/integral-specht-modules-and-modular-simple-modules.md`,
`library/abstract-algebra/free-modules-and-exact-sequences.md`,
`library/commutative-algebra/noetherian-rings-and-hilbert-basis.md`,
`library/special-topics-in-representation-theory/the-hook-length-formula-and-rsk-correspondence.md`,
`library/group-theory/modular-representations-and-projective-covers.md`.

Item-level: all 52 declared dependency edges resolve — 42 intra-pair and 10 to published items
`def-generic-type-a-hecke-algebra`, `thm-standard-basis-of-the-generic-type-a-hecke-algebra`,
`def-young-tableau-standard-tableau-and-shape`, `def-partition-young-diagram-and-conjugate-partition`,
`lem-hom-from-a-finite-free-module`, `def-integral-specht-lattice-and-base-change`,
`lem-conjugate-specht-sign-duality-over-fields`,
`prop-group-algebra-and-finite-field-specializations-of-the-generic-hecke-algebra`,
`cor-sum-of-squares-of-standard-tableau-numbers`,
`thm-jacobson-radical-is-nilpotent-and-the-quotient-is-semisimple`. Every home page of those items is one of
the seven `requires` pages. All `[[…]]` references in the pair resolve; no dependency on any source20/21/25
item appears (the nine textual “source20” mentions are prohibition disclaimers). There are no in-run
cross-batch prerequisites: the pair stands entirely on published library items.

Read-only checks executed for this review: `node tools/manifest-deps.mjs` (14 items, 0 errors);
`node tools/item-dependency-levels.mjs check --run …` (858 items across 100 pages, pass; pair levels
consistent 0–9); `node tools/validate-plan.mjs research/plan-spec.json --run …` (exit 0; only pre-existing
informational `redundant-prereq` warnings elsewhere); coverage checklist as above; `sha256sum` comparisons
against the root-integration and round-1 verdict guards (equal).

**Unmet prerequisites identified: none confirmed.** No consuming planned item of this pair lacks a supplier
that is absent from both the published library and the current scaffold. (This pass verifies presence and
declared-dependency resolution; proof-level adequacy of each published supplier interface is deferred to the
run's later review stages, as intended for a scope pass.)

## 4. Intended role in the library

The pair is the independent ordinary-DJ/polytabloid supplier for the source20 rebinding and a direct supplier
of in-run consumers. Consumer-side dependency records already bind it as verified:
batch 20 — `def-type-a-hecke-specht-module-and-cell-form` and
`prop-hecke-specht-theory-specializes-to-group-specht-theory-at-q-one`;
batch 25 — `def-graded-specht-module-by-homogeneous-standard-tableaux`,
`def-nondegenerate-root-of-unity-level-one-hecke-regime`,
`thm-graded-specht-heads-classify-the-graded-simple-modules`
(see the two batches' `cross-batch-dependencies.json`). The same reviewer's after-binding round-1 verdict
(`.../owner-native50-independent-supplier-construction/round1-final-actual-afterbinding-supplier-and-consumer-verdict.json`,
verdict `SUFFICIENT_ACTUAL_BOUND_NEW50_SUPPLIER_AND_THREE_NEW25_USES`) records the three actual
new-batch-25 consumer uses with exact supplier-statement bindings against the same manifest hash reviewed here.
The frozen source20 consumer remains held for its own independent false reducibility clause; that is not a
scope gap of this pair, and no gate or acceptance is implied by this review.

## 5. Honest uncertainties and observations (none blocking scope)

1. This is a scope pass only: no proof correctness was assessed and no item approvals or owner records were
   written.
2. The two bridge theorems currently carry the same constructor note as their `strategy` text (the note
   states it covers “the two bridge theorem IDs assigned by the parent”, and it does develop both the
   cross-pairing and the signed-conjugate map with the exact unit). Flagged for step-5 independence review as
   an observation, not a scope omission.
3. `plan-spec.json` retains the nine design items while the manifest carries eleven A items; the divergence is
   the documented, owner-authorized inventory decomposition/addition (notes §1 and the NEW50 successor
   section). The plan-spec hash differs from the round-1 verdict record (`faa81170…` vs current `53fdef78…`)
   because root integration added the two later `requires` entries; the pair's plan entries were verified
   current and `validate-plan.mjs` passes.
4. The closed-source coverage rows read “Proposed owner resolution”; the owner direction authorizes the
   complete local construction as the alternative, and formal owner acceptance of the drop is an
   owner-controlled action outside this dispatch.

## 6. Decision and next action

**`sufficient`** for the A page (the scope receipt binds the A+B pair inventory above; the B page needs no
separate letter because the pair shares one scope hash). No scaffold edits were made (Step 3a prohibits
them) and no owner action is required for scope. Next: Step 3b authoring of this pair may proceed under the
run-level holds (source20 freeze and engine-owned transitions only).

Receipt: recorded via `tools/step3-decisions.mjs record-scope` as
`research/frontier-44-special-representation-examples-28-step3a-review-ordinary-hecke-specht-polytabloids-and-signed-murphy-comparison.json`,
`decision: sufficient`, `confidence: 1`, scope sha256
`6d7b7a00d7c17e3c1e3491cabe1a0b9f752e9677e7457c050553a99660ed5152` (re-checked against the live manifest after
recording: exact match), recorded 2026-10-10T09:00:26.074Z. `node tools/step3-decisions.mjs check --phase scope`
no longer lists this page among open scope work.
