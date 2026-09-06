# frontier-31a alpha-g 6b

Scope: routed group `g`, batches `7`, `12`, and `20`.

I read the three routed Step-6 scope files, reader reports and findings JSON,
refuter reports, all current routed carriers, and the cited dependency and
source passages needed to check the claims. The exact queue contains thirteen
`touched` obligations, no `page` obligations, no reader findings, and five
refuter findings. The machine-readable file records exactly those eighteen
decisions: ten `accepted_repair`, three `amended_repair`, and five
`confirmed_fatal`.

## Batch 7

Touched carriers:

- `amended_repair` on
  `cor-the-unit-is-projective-exactly-when-the-tensor-category-is-semisimple`:
  the item text never changed, but the reader-modified contract cited
  `construct` where the live proof cites `given`. I regenerated this contract
  entry from the proof, so its carrier differs from both frozen snapshots.
- `accepted_repair` on
  `fs-a-tensor-functor-is-just-a-strong-monoidal-functor`: complex conjugation
  on finite-dimensional complex vector spaces is strong monoidal but not
  complex-linear on Hom spaces.
- `amended_repair` on
  `fs-every-finite-k-linear-abelian-category-is-semisimple`: the dual-number
  module category is a valid finite nonsemisimple witness, and the carrier is
  additionally amended by its required risk review.
- `accepted_repair` on
  `fs-every-rigid-k-linear-abelian-monoidal-category-is-a-tensor-category`:
  the product of two finite-dimensional vector-space categories has scalar
  unit endomorphism algebra `k x k`.
- `accepted_repair` on
  `fs-the-grothendieck-ring-of-a-tensor-category-is-always-commutative`:
  `Vec_{S_3}` has Grothendieck ring `Z[S_3]`.
- `accepted_repair` on
  `thm-an-exact-k-linear-strong-monoidal-functor-out-of-a-tensor-category-is-faithful`:
  the multitensor target hypothesis now licenses the target unit and abelian
  exactness used in the proof.
- `accepted_repair` on
  `thm-duality-induces-an-anti-involution-on-the-grothendieck-ring`: the live
  result is correctly narrowed to an anti-isomorphism whose inverse is induced
  by right duals; it does not assert a double-dual identification.
- `accepted_repair` on
  `thm-left-and-right-dual-objects-are-isomorphic-in-a-semisimple-multitensor-category`:
  the proof now uses the semisimple Hom-space comparison of EGNO Proposition
  4.8.1 rather than silently assuming the stronger multifusion hypothesis.
- `accepted_repair` on
  `thm-the-unit-object-of-a-multitensor-category-is-semisimple`: the component
  unit argument, exactness, and scalar endomorphism step replace the invalid
  epimorphism-only inference.

Refuter findings:

- `refuter:7:1` is `confirmed_fatal`. The evaluation/coevaluation title had the
  two morphism properties reversed; it now says evaluation is epic and
  coevaluation monic.
- `refuter:7:2` is `confirmed_fatal`. The printed EGNO Corollary 4.3.9 has the
  two words interchanged, so the item now also cites EGNO's official Chapter 4
  corrections and the coverage provenance names that correction.
- `refuter:7:3` is `confirmed_fatal`. Dualizing `ev_X` gives the coevaluation
  associated to `X^vee`, not `coev_X` without extra double-dual coherence. The
  repaired proof uses the second zig-zag directly and simplicity of the source
  unit.
- `refuter:7:4` is `confirmed_fatal`. EGNO Remark 4.2.6 is about tensor-functor
  terminology, not tensor-category terminology. The live remark is narrowed
  to the scalar-unit convention of EGNO Definition 4.1.1, and the coverage row
  for Remark 4.2.6 now points to the tensor-functor definition.

Required HIGH/CRITICAL mathematical reviews were completed as `alpha-6b-g`
for:

- `thm-the-tensor-product-in-a-multitensor-category-is-biexact`
- `thm-the-grothendieck-ring-multiplication-is-well-defined`
- `fs-every-finite-k-linear-abelian-category-is-semisimple`

## Batch 12

Touched carriers:

- `accepted_repair` on
  `ex-mayer-vietoris-computation-of-the-torus-first-homology`: the current
  arbitrary-coefficient proof computes both Mayer-Vietoris maps and supplies
  the section needed to split the extension.
- `accepted_repair` on
  `ex-relative-homology-of-an-interval-and-its-endpoints`: the connector now
  lands in ordinary `H_0(E;G)`, with the reduced-generator interpretation
  stated separately.
- `accepted_repair` on
  `thm-simplicial-and-singular-homology-agree-for-simplicial-complexes`: the
  current proof is `G`-linear, performs the skeletal relative calculation and
  finite-dimensional five-lemma induction, and uses compact image support for
  the arbitrary-complex case.

Refuter finding:

- `refuter:12:1` is `confirmed_fatal`. The old prism formula applied its cone
  notation outside the cone's stated domain and inserted an extra `-S sigma`.
  The repaired definition constructs the universal affine prism
  `P_n = b_n(iota_n - P(partial iota_n))` inside `Delta^n`, pushes it forward
  along a singular simplex, and the synchronized downstream proof derives
  `partial T + T partial = 1 - S`.

No batch-12 contract scored HIGH or CRITICAL.

## Batch 20

Touched carrier:

- `amended_repair` on `ex-gradient-flow-on-the-torus-morse-function`: the
  reader correctly separated the four coordinate-arc components and the
  one-parameter quotient within each component; the contract is additionally
  amended by its required risk review.

Required HIGH/CRITICAL mathematical reviews were completed as `alpha-6b-g`
for:

- `lem-riemannian-gradient-vanishes-exactly-at-critical-points`
- `prop-every-morse-function-admits-a-complete-gradient-like-field-on-a-closed-manifold`
- `lem-precompact-trajectory-tail-limit-sets-are-nonempty-compact-connected-and-flow-invariant`
- `lem-a-compact-morse-trajectory-has-single-critical-alpha-and-omega-limits`
- `lem-morse-trajectories-have-positive-energy-drop`
- `prop-proper-morse-slabs-give-complete-connecting-trajectories`
- `ex-gradient-flow-on-the-torus-morse-function`

## Ledger and checks

Eighteen unique closed rows were appended through
`node tools/defect-ledger.mjs append --file
research/frontier-31a-alpha-g-6b-ledger-rows.json`. The generated ledger view
was refreshed in the same locked transaction, and current frontier-31a ledger
validation reports zero errors.

The following focused checks passed on current disk:

- reflow and precheck on all four materially changed item files: two
  proof-bearing items checked, zero failures
- strict proof-contract checks for batches 7, 12, and 20: 21/21, 31/31, and
  18/18, each with zero errors and zero warnings
- `risk-report.mjs --require-reviewed` for batches 7, 12, and 20: zero errors
- boundary audits with `--fail-on-contradicted` for all three contracts: no
  contradicted dispositions
- manifest dependency checks: 33, 39, and 25 items with zero errors
- coverage checklist checks: 50, 74, and 44 harvested results with zero errors
  and zero warnings
- combined content policy: 97 scoped items with zero errors and zero warnings
- source-fetch check: 6/6 coverage sources fetch-verified
- render check on the four changed items and six routed page files: pass
- Step-6 split checks for batches 7, 12, and 20: zero errors

Batch 7 and batch 20 citation-fidelity checks also found every recorded quote
and no widening candidate. Batch 12 has no recorded contract citations, so
that tool correctly refused to turn an empty citation scope into a clean
claim; its strict contract, source, render, boundary, and content checks passed.

Per the dispatch, I did not run the Step-6 stamp command and did not judge or
stamp any decision. The stage must add each decision's `subject_sha256` before
the adjudicate-phase gate can close.

## Gate repair cycle 1 — `step6-routing-adjudicate`

The live gate was reproduced on September 6, 2026. I reread the seven named
batch-7 and three named batch-12 carriers against
`research/frontier-31a-reader-{7,12}.md`, the exact EGNO and Hatcher interfaces
recorded there, their declared dependencies, and current contracts. Every item
and manifest hash exactly matches the frozen post-reader value; only later 6b
contract reconciliation changed the composite carrier. The explicit strong-
monoidal counterexamples, semisimple unit and left/right-dual arguments,
Grothendieck anti-isomorphism qualification, faithful-functor proof,
arbitrary-coefficient Mayer--Vietoris split, relative connector target, and
simplicial/singular compact-support reduction remain correct.

All ten touched decisions are retagged from `accepted_repair` to
`amended_repair`; ten nonfatal `route:"gate"` decisions and matching rows were
added through `research/frontier-31a-alpha-g-6b-gate-ledger-rows.json`, and
current hashes were restamped. Batch-scoped commands name no group-g decision
defect (their only diagnostics are the pre-existing batch-14 published-content
entries, which disappear under the full ownership scope). The exact full
primary gate reports `910 item(s) routed, 374 adjudication obligation(s), 0
error(s)`. No group-g blocker remains.
