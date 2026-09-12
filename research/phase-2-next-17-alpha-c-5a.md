# Phase 2 next 17 — Step 5A Alpha review, group c (batch 4)

Run: `phase-2-next-17`. Group `c` covers batch `4` only: the pair
`grothendieck-spectral-sequences-and-computations` (42 items) and
`grothendieck-spectral-sequences-and-computations-examples` (9 examples),
51 items and 2 pages, per `research/phase-2-next-17-step5-scope-4.json`.

## Method

Read every authored item end to end (statement, facts block, proof or
refutation/verification steps, boundary sentences) against the facts it cites
and against the library conventions it uses, then read the two page carriers
against their manifests. Checks actually performed on the mathematics, not on
the Step-3 scaffold: the individual inference steps, the hypotheses each cited
fact really supplies, indexing and sign conventions, and the empty / zero /
one-term / degenerate / endpoint cases the statements claim.

Conventions used as the checking frame (read on disk, not assumed):
`rem-commuting-versus-anticommuting-double-complex-conventions`,
`def-homological-double-complex` (library starts from anticommuting arrows, so
the total differential is `h+v`),
`def-direct-sum-total-complex-of-a-double-complex`,
`def-tensor-product-total-complex-of-chain-complexes`,
`thm-the-row-filtration-spectral-sequence-of-a-first-quadrant-double-complex`,
`def-invariants-functor-of-a-group-module`, and the published DC/AC interfaces
(`def-dependent-choice`, `def-axiom-of-choice`).

No web retrieval was needed for this batch: every item is standard
homological algebra (Cartan–Eilenberg resolutions, the two hypercohomology
spectral sequences, Grothendieck composition, UCT/Künneth/Hyper-Tor/Hyper-Ext,
Lyndon–Hochschild–Serre), the cited facts were read in the library, and the one
defect found was settled by a self-contained derivation rather than by a source
claim. I record no source-reading claim I did not make.

## Verdicts

- 50 items and 2 pages: `accepted`, `defect_ids: []`. This includes every
  example and counterexample computation, which I recomputed independently
  (`ex-uct-...`, `ex-kunneth-...`, `ex-lhs-for-a-split-group-extension`,
  `ex-a-collapse-with-a-noncanonical-extension-choice`,
  `cex-identical-e-two-pages-with-different-later-differentials`,
  `prop-an-e-two-page-alone-does-not-determine-the-abutment`,
  `prop-a-collapsed-first-quadrant-...`), and every refutation in the six
  false-statement items, whose witnesses I verified directly (including the
  non-separated filtration `F^pC=C`, the non-injective `Z = H^{0,0}` cycle
  object for `0->Q->Q/Z->0`, and the `F=G=Hom_Z(Z/2,-)` counterexample whose
  two surviving `E_2` entries sit in total degrees 1 and 2).
- 1 item: `repaired` — `thm-kunneth-tor-spectral-sequence`.

## The repair (thm-kunneth-tor-spectral-sequence)

Defect: proof step 1.1 asserted that, for the supplied *commuting*
Cartan–Eilenberg arrows, the two components
`d_q = h_P(x)1 + (-1)^i 1(x)h_Q` and
`d_p = v_P(x)1 + (-1)^a 1(x)v_Q`
"commute and separately square to zero", so that the signed total is a double
complex, and that multiplication by `(-1)^{aj}` identifies it with the tensor
of the signed totals. As stated this is false. Squaring: the diagonal blocks
give `(h_Pv_P+v_Ph_P)(x)1` and `1(x)(h_Qv_Q+v_Qh_Q)`, and the mixed blocks give
`2(-1)^a h_P(x)v_Q + 2(-1)^i v_P(x)h_Q`; with commuting arrows neither
relation holds and, for the supplied commuting data, no choice of those two
signs makes `d_q d_p + d_p d_q` vanish. The advertised `(-1)^{aj}` twist does
not repair it either: conjugating the stated components leaves the `1(x)v_Q`
coefficient at `(-1)^b`, which is not the Koszul coefficient of a tensor of
totals. So the step's conclusion (a double complex whose total computes the
target) did not follow from its premises.

Repair (item step 1.1, contract `derivations[step-1.1]`): use the library's own
passage between conventions. Twist the vertical arrows,
`v~_P = (-1)^i v_P`, `v~_Q = (-1)^j v_Q`, which puts each resolution into the
anticommuting form of `def-homological-double-complex` as recorded in
`rem-commuting-versus-anticommuting-double-complex-conventions`, with signed
totals `h_P+v~_P`, `h_Q+v~_Q`. Form the Koszul tensor of those totals
(`def-tensor-product-total-complex-of-chain-complexes`, which is the cited fact
[F3] of the item) and read off its `q`- and `p`-lowering components

    d_q = h_P(x)1 + (-1)^{i+a} 1(x)h_Q,   d_p = v~_P(x)1 + (-1)^{i+a} 1(x)v~_Q.

Here `(-1)^{i+a}` is exactly the Koszul sign carried by the second factor
(whose degree is the total degree `i+a` of the first factor). Now
`d_q^2 = d_p^2 = 0` because the internal anticommutations kill the diagonal
blocks and the sign flips when `i` changes; `d_q d_p + d_p d_q = 0` because the
remaining mixed blocks carry coefficients `s(i,a-1)` and `s(i,a)` respectively
(`s = (-1)^{i+a}`), which cancel. These are the checks I performed by hand on a
basis element of `P_{i,a}(x)Q_{j,b}`; they are elementary and complete. The
total `d_q+d_p` is precisely the Koszul differential, which is what steps
2.1–4.1 use (row splitting, Tor page, target filtration, comparison
naturality); those steps needed no change.

Hashes: `items/thm-kunneth-tor-spectral-sequence.md` before
`8ca9368e5fd5c30f13e41f201988aee99adbb0c13dd3c766dc226300e81544df`,
after `46a6fda0da7c32d77cd3ba3e83f001c0d8bb372ea4de8beb857fbcb78b143f84`.
Contract carrier updated in `research/phase-2-next-17-batch-4.proof-contracts.json`.
Defect row `p2-next17-5a-c-kunneth-koszul-sign` (class `accuracy`, subclass
`invalid-inference`, severity `nonfatal`, location `proof-step 1.1`,
disposition `fixed`). No statement, title, dependency, page list, page order or
pairing was changed; the manifest row is unchanged except through the file
hash the engine recomputes.

## Local suppliers

None were needed. No definition or lemma had to be created for this batch, no
dependency was added or removed, and therefore no page-order or manifest
supplier insertion applies.

## Required shared-plan amendments

None from this group. No new pair, no page creation, no dependency-graph
change, no Recorded-result consumption, and no change to the Foundations
boundary. The batch's seven A-page `requires` pages and the A/B companion
relation are unchanged and consistent with `plan-spec.json`.

## HIGH/CRITICAL risk reviews

43 of the 51 items are HIGH or CRITICAL by `tools/risk-report.mjs`. All 43 now
carry a `risk_review` entry with `status: complete`, reviewer
`Alpha phase-2-next-17 group c (5a authored-content review)` and a specific
note naming the steps, hypotheses, boundary cases and convention checks that
were read for that item. `node tools/risk-report.mjs
research/phase-2-next-17-batch-4.proof-contracts.json --require-reviewed`
reports `0 error(s), 51 item(s) routed`. No risk was left open: nothing in this
batch is unresolved, so no `risk_review` is a deferred placeholder. (The
repo-wide `--require-reviewed` run still fails on items owned by other,
concurrently running groups; that is not this group's output.)

## Published findings (canonical ledger)

These published items are read-only here and are recorded in
`research/published-consumer-supplier-ledger.md` (locked append, rows in the
`A-P` queue), each verified from its own frontmatter and body:

- `def-group-cohomology-as-a-derived-functor` — line 27 assumes DC; its `deps`
  omit `def-dependent-choice`. Owned consumers: the N-invariants lemma, LHS and
  the LHS false-statement branch.
- `prop-positive-right-derived-functors-vanish-on-injective-objects` — line 24
  assumes DC; `deps` omit it. Consumer: the N-invariants acyclicity lemma.
- `thm-acyclic-resolution-theorem-for-left-derived-functors` — line 28 assumes
  DC; `deps` omit it. Consumer: the dual left-derived Grothendieck remark and
  its descendants.
- `thm-acyclic-resolution-theorem-for-right-derived-functors` — line 28 assumes
  DC; `deps` omit it. Consumer: the total-composite lemma.
- `thm-horseshoe-lemma-for-injective-resolutions` — line 26 assumes DC; `deps`
  omit it. Consumer: Cartan–Eilenberg existence.
- `thm-injective-comparison-map-exists` — line 26 assumes DC; `deps` omit it.
  Consumers: Cartan–Eilenberg existence, hyperderived independence, Grothendieck
  naturality.
- `thm-injective-comparison-maps-are-unique-up-to-cochain-homotopy` — line 26
  assumes DC; `deps` omit it. Consumers: hyperderived independence, Grothendieck
  naturality.
- `prop-modules-over-a-field-are-projective-flat-and-injective` — line 27
  assumes Choice and lines 32–36 use it for bases and complements; `deps` omit
  `def-axiom-of-choice`. Consumer: the collapsed vector-space splitting
  proposition and its example.
- `thm-universal-coefficient-theorem-for-cohomology-over-a-pid` — line 27
  assumes Choice and lines 36 use it for the free-submodule splitting; `deps`
  omit `def-axiom-of-choice`. Consumers: the collapse/extension proposition, the
  UCT false-statement and the UCT example.
- `def-dependent-choice` — its `deps` include `def-axiom-of-choice`, which
  overstates the interface (AC is not needed to state DC), so every path through
  this owner-selected interface mechanically imports AC.

Repair strategy recorded for all ten: add the missing axiom edge to the
published `deps`, keep any stated supplied-data/relative branch intact, and
re-audit downstream axiom-strength claims; for `def-dependent-choice` retain
"AC implies DC" only as a non-load-bearing remark. A new scaffold or published
supplier does not close these rows. The owned batch already redeclares DC/AC at
each load-bearing interface, so none of these published metadata gaps blocks
this batch's mathematics.

Ledger mechanics (one row per canonical published ID): eight new A-P rows
(the seven DC items and `prop-modules-over-a-field-are-projective-flat-and-injective`),
the UCT finding added to that item's existing group-e A-P row rather than
duplicated, and `def-dependent-choice` reopened by this independent finding and
moved from A-R to A-P with its earlier owner repair receipt retained. Index
counts updated accordingly: A-P 306 -> 315, A-R 187 -> 186, four queues
1,863 -> 1,871, expanded reference pool 2,941 -> 2,949 (the eight genuinely new
IDs). The edit was serialized with `mkdir research/.published-consumer-ledger.lock`,
made on a re-read of the current file, and released with `rmdir`; no other
writer's rows were overwritten.

## Checks run (honest, local)

- `node tools/tsx-run.mjs tools/precheck.mts` on all 51 owned item paths:
  `46 checked, 0 failing` (the five definitions carry no proof to check).
  Re-run on the repaired item alone after the edit: PASS.
- `node tools/risk-report.mjs research/phase-2-next-17-batch-4.proof-contracts.json
  --require-reviewed`: 0 errors over 51 items.
- `node tools/proof-contract.mjs research/phase-2-next-17-batch-4.proof-contracts.json
  --strict`: 0 errors, 0 warnings, 51/51 items.
- `node tools/citation-fidelity.mjs ... --fail-on-missing-quote`: no missing or
  widened quote detected.
- `node tools/boundary-audit.mjs ... --fail-on-contradicted --fail-on-template`:
  no contradicted or template boundary rows.
- `node tools/depcheck.mjs --quiet`: no cycle, no unresolved reference, no draft
  item on a published page, and no diagnostic naming any batch-4 item.
- Page carriers: A page lists the 42 manifest items in manifest order, the B
  page lists its 9 manifest examples in manifest order, and both page files
  match `research/phase-2-next-17-batch-4.pages.json`.

These are local checks by the authoring group, not independent review, not a
judge verdict and not a whole-closure certification.

## Blockers

None. No item of this batch is `escalated`; no submission is withheld; no
unresolved mathematics or source question remains open in this group's scope.
