# Step 5A — Alpha group e (batches 8 and 9)

- Run: `phase-2-next-17`; role: alpha; label: `5a-e`; covers batches 8 and 9.
- Scope reviewed: 60 authored items (41 in batch 8, 19 in batch 9) and 6 A/B pages
  (`affine-lie-algebras-and-loop-central-extensions`, `...-examples`,
  `the-weyl-kac-character-formula`, `...-examples`, `brauers-first-main-theorem`,
  `brauers-first-main-theorem-examples`).
- Decisions: 66, one per item/page, all `accepted` with `defect_ids: []`
  (`research/phase-2-next-17-alpha-e-5a-decisions.json`). No `repaired`, no
  `escalated`, no withdrawals, no new pairs or pages. My scopes carry no
  supplemental `gate:` obligations, so none are preserved or created.

## Edits

1. `research/phase-2-next-17-batch-8.proof-contracts.json` and
   `research/phase-2-next-17-batch-9.proof-contracts.json`: added the required
   `risk_review` records (`status: complete`, reviewer `Step 5A Alpha group e`,
   item-specific notes) for all 33 HIGH/CRITICAL items routed by
   `tools/risk-report.mjs` (18 in batch 8, 15 in batch 9).
2. No item text, manifest entry, page file, page order, dependency list or
   withdrawn item was edited: I found no defect that required a repair, and I am
   not licensed to create items that are not needed. No new definitions or local
   lemmas were needed — every cited dependency of both batches resolved to a
   published item with matching content (checked below), and no item had an
   unmet local prerequisite.
3. `briefs/tasks/frontier-dependency-ledger.md`: batches 8 and 9 have empty
   cross-batch inputs; I verified that no item in either batch declares a
   supplier belonging to another batch of this run (all same-batch suppliers are
   internal, all other suppliers are published items from earlier runs), so the
   empty inputs are correct and no refresh was triggered.

The merged gate artifact `research/phase-2-next-17-proof-contracts.json` was
regenerated from the eleven batch contracts by `tools/merge-proof-contracts.mjs`
while verifying `proof-contract --strict`; that is the engine's mechanical merge,
not an authored edit.

## Source evidence

Unfamiliar mathematics was checked against authoritative sources, fetched and
read in full for the passages used:

- Martínez, *Representation Theory of Finite Groups* (cited in the contracts),
  Lecture 4, pp. 23–28: Theorem 4.1 (the Brauer map `Br_P` on `Z(kG)` is an
  algebra homomorphism, proved by the `P`-orbit congruence argument), Lemma 4.2
  (kernel of `Br_P` is spanned by class sums whose defect groups contain `P`),
  Lemma 4.4 (defect containment for induced blocks), Theorem 4.5 ("Let `P ≤ G`
  and `P C_G(P) ≤ H ≤ N_G(P)`. If `b ∈ Bl(H)` then `b^G` is defined and
  `λ^G_b = λ_b ∘ Br_P`"), including its use of Lemma 3.8 (p. 21: if
  `Cl_G(x) ∩ C_G(O_p(G)) = ∅` then the class sum lies in the Jacobson radical of
  `Z(kG)`). Lemma 4.4's proof is the same class-sum/centralizer argument used in
  the corresponding library items.
- Farrell–Lassueur, *Modular Representation Theory of Finite Groups*, §39–§40
  (printed pp. 5–12): Remark 40.2 ("if `t ∉ H` then the `k[H×H]`-submodule
  `kHtH` has no direct summand with vertex containing `δ(Q)`" for `C_G(Q) ≤ H`),
  Proposition 40.3(a) (defect containment), (b) (transitivity), (c) ("if
  `C_G(D) ≤ H` then `b^G` is defined", proved by multiplicity one of `b` in
  `kG↓_{H×H}`), Theorem 40.4 (first main theorem via Green correspondence),
  Theorem 40.5 (matching-vertex restriction summands induce to the same block,
  proved by the `eB`-tensor `eV` splitting), Corollary 40.7.
- Saunders, *Modular Representation Theory*, Lemma 5.12(iii), Lemma 5.14,
  Example 5.15 (dihedral `D_{2n}`, `n` odd, `p = 2`: `b_0(H)^G = b_0(G)` although
  `C_G(1) = G ⊄ H`), Theorems 5.16 and 5.17, Corollary 5.19.
- Craven, *The Brauer Correspondence*, Theorem 1.12 (extended first main theorem
  hypotheses `D C_G(D) ≤ H ≤ N_G(D)`) and the central-character/Brauer-map
  identity `ω^G = ω ∘ σ` used in its proof, plus the `S_7` example of §1.6.
- Kleshchev, *Lectures on Infinite Dimensional Lie Algebras* and Perrin,
  *Introduction to Kac–Moody Groups and Lie Algebras*, are the cited references
  for the affine/Weyl–Kac side. I did **not** re-fetch those two PDFs for this
  review; instead every Kac–Moody statement was verified by direct derivation
  (below), and the internal published suppliers those items use were read and
  checked to state what the items attribute to them. That is an honest scope
  statement, not a claim of source comparison.

Specific mathematical work, beyond reading the authored steps:

- `lem-block-induction-exists-under-centralizer-containment` is the critical
  item of batch 9. Its load-bearing step asserts that the `(H×H)`-bimodule
  endomorphism ring of `b = kHe` is `Z(b)` and hence local with nilpotent
  maximal ideal, so that every composite `b → X → b` through a module without a
  `b`-summand lies in that ideal and `χ(T) = λ_b(rT|_b)` is a unital algebra
  homomorphism. Because a naive Morita pairing would instead suggest `b^op`, I
  verified the claim independently: for a bimodule map `f`, right linearity with
  `y = e` gives `f(x) = f(e)x` on `b`, and left linearity then forces `f(e)`
  central, i.e. `End_{H×H}(b) ≅ Z(b)`. I also checked it by direct computation
  in `F_2S_3`: the 4-dimensional block `B_1 = F_2S_3C_c` (its unique simple
  module is the 2-dimensional absolutely simple one, so `B_1 ≅ M_2(k)` is *not*
  a local algebra) has `dim End_{S_3×S_3}(B_1) = 1 = dim Z(B_1)` — I computed
  that endomorphism ring directly — confirming the item's identification
  `End_{H×H}(b) ≅ Z(b)` rather than the naive `b^op`.
  The remaining steps of that item (definedness by vertex exclusion and
  multiplicity one, the `e_{-rho}`-style conversion of `π_H` into `Br_D` using
  `D ⊴ H`, `p`-divisible orbit lengths and trivial action of `D` on simple
  modules) were checked against Farrell–Lassueur Prop. 40.3(c) and Martínez
  Theorem 4.5, whose hypotheses coincide with the item's statement.
- Batch 8's Weyl–Kac chain was verified end to end: the transverse-slice
  division in `lem-the-denominator-quotient-has-only-imaginary-cone-support`
  (I re-derived the anti-invariant relation `f_b(x) = -x^{m(b)+1} f_b(x^{-1})`
  for `p` and `a` and the invariant relation for `C_b`, and checked that the
  product of an anti-invariant and an invariant factor is anti-invariant with
  additive `m`, which is what makes `R_b` a polynomial and `q` invariant);
  the Casimir exclusion `beta^2 = 2(rho,beta)` against
  `beta^2 ≤ 0 < 2(rho,beta)` for least-height `beta`; the exponential
  conjugation identities for the integrable numerator; the telescoping height
  bounds and the coefficient `det(w)`; the counterexample computations in
  `ex-first-weight-layers-of-the-basic-affine-sl2-character` (including the
  degree-two cancellation between the `n = 1` and `n = 2` denominator triples,
  which is what makes `S^2 - T = 2 + z + z^{-1}` correct).
- Batch 9's S_7 and SL_2(F_p) examples were recomputed: dihedral order and
  normalizer, the two char-2 central idempotents of `kS_3` with explicit matrix
  units, the two blocks of `kN`, defect detection through maximal Brauer support,
  and for SL_2(F_p) the Sylow order, `C_N(D) = D × ⟨-I⟩`, the two normalizer
  blocks, the vertex-`D` property, and the p-regular class count via
  surjectivity of the norm map.

## Local suppliers

None created. Every dependency of both batches resolved to a published item,
and each item in this batch whose proof consumes a published fact was checked to
attribute the correct statement to it. Verified in particular that the published
suppliers actually state: `def-kac-moody-algebra-associated-to-a-gcm` ("Every
nonzero ideal of `g(A)` meets `h` nontrivially"), `thm-serre-presentation-of-a-
kac-moody-algebra` (Cartan relations plus both Serre families are a presentation),
`prop-finite-type-kac-moody-algebras-recover-the-dg-semisimple-algebras` (finite
dimensional, semisimple, Cartan spanned by simple coroots, all roots real),
`def-block-bimodule-for-the-double-group` (endomorphism algebra `Z(B)` is local
with a unique maximal ideal of nilpotents),
`thm-defect-groups-are-maximal-brauer-support`, `def-defect-group-and-numerical-
defect-of-a-block` (`D` ↔ vertex `ΔD`), `lem-relative-projectivity-mackey-
intersections-for-finite-modules` (Mackey, summand preservation, vertex
containment, summand-of-one-term), `prop-normal-p-subgroups-act-trivially-on-
simple-modules`, `cor-green-correspondence-for-modules-of-vertex-exactly-p`
(declared AC), and `lem-affine-central-coroot-from-the-transpose-null-ray`
(`c_A = sum b_i h_i` with `A^t b = 0`).

## Required shared-plan amendments

None for batches 8 and 9. One cross-group observation for the serial lead and the
owning group: the repository-wide `prosecheck` gate currently fails with exactly
one `position-contradiction`, in `items/cor-grothendieck-collapse-when-one-functor-
is-exact.md` (batch 4, group c): the prose calls `def-collapse-at-a-page` LATER
while its page order `365.065` is smaller than this page's `365.069`. That item
is `status: draft`, so it is a workflow finding for its owner, not a published
defect, and I did not edit another group's content.

## Published findings

No published item was found defective during this review, so no entry was added
to `research/published-consumer-supplier-ledger.md` (no lock was taken, since
there was nothing to merge). Every published supplier named above was read and
matched the hypothesis attributed to it in the authored proofs. In particular I
checked that no authored step consumes a Recorded/"not proved here" result, and
that the two AC-declaring items (`thm-corresponding-block-bimodules-are-green-
correspondents`, `cor-every-block-has-an-indecomposable-module-of-full-defect-
vertex`, and `ex-brauer-correspondence-for-sl2-over-fp` through the Green
correspondence) declare `def-axiom-of-choice` and identify the exact use, while
the choice-free parts of their proofs do not use AC.

## Checks (local, honestly reported)

- `tools/precheck.mts`: 14130 checked, 0 failing.
- `tools/depcheck.mjs`: OK — no cycles, all references resolve, no draft items on
  published pages (its `cited-not-in-deps` warnings name only other groups' items).
- `tools/fwdcheck.mjs --quiet`: OK. `tools/rendercheck.mjs`: OK over 18799 files.
- `tools/depsource.mjs`: OK (65508 deps link to a published page, 0 unresolved).
- `tools/pathcheck.mjs`: 11 pathway files, 0 errors, 32 warnings (other groups'
  category metadata).
- `tools/splice-plan.mjs --verify`: 34 pages across 11 manifests agree.
- `tools/merge-proof-contracts.mjs` + `proof-contract.mjs --strict`: 556/556 items,
  0 errors, 4 warnings (all in other groups' items).
- `tools/finite-smoke.mjs`: 0 errors. `tools/boundary-audit.mjs --fail-on-
  contradicted --fail-on-template`: 0 contradicted candidates, 0 template
  clusters, exit 0. `tools/citation-fidelity.mjs --fail-on-missing-quote`: exit 0.
- `tools/risk-report.mjs research/phase-2-next-17-batch-8.proof-contracts.json
  --require-reviewed` and the batch-9 analogue: 0 errors after the `risk_review`
  edits above.
- `tools/defect-ledger.mjs validate --run phase-2-next-17`: 3 rows, 0 errors (all
  three belong to other groups).
- `tools/gate-liveness.mjs`: proof-contract/coverage/precheck checks live.
- `tools/prosecheck.mjs`: FAIL — the single cross-group position-contradiction
  recorded above; it is not in batches 8 or 9.

## Blockers

None for this group's mathematics: no item required escalation, no item was left
with unresolved uncertainty, and no repair was claimed. The only open repository
finding I observed is the cross-group `prosecheck` failure described above, which
the engine routes to its owning group; it will keep the repo-wide 5a gate red
until that owner repairs it. I also note for completeness that the decisions
file deliberately carries no `subject_sha256` values: the engine's
`step5-scope.mjs stamp` step computes and stamps them immediately before the
routing check, per the stage gate order.
