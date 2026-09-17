# Phase 2 remaining 27 - Step 3b author report

Pair: `chern-and-pontryagin-classes-by-splitting-and-complexification` (A)
with `...-examples` (B), batch 9. The co-batch AT-17 pair's rows in
`research/phase-2-remaining-27-batch-9.pages.json`,
`...-batch-9.coverage.json` and `...-batch-9.proof-contracts.json` are
preserved; this dispatch only appended its own rows and entries and synced its
own items' `deps` fields.

Pages written:
`library/algebraic-topology/chern-and-pontryagin-classes-by-splitting-and-complexification.md`
and
`library/algebraic-topology/chern-and-pontryagin-classes-by-splitting-and-complexification-examples.md`.

## Completed inventory (40 items, all authored and item-decision `accept`)

A page, in order (33 items):
`lem-complex-orientation-of-underlying-real-bundles` (added),
`def-complex-projective-bundle-and-tautological-complex-line`,
`lem-integral-cohomology-ring-of-complex-projective-space-by-splitting` (added),
`lem-cohomology-ring-of-infinite-complex-projective-space` (added),
`lem-complex-tautological-euler-class-restricts-to-the-projective-fiber-generator`,
`thm-integral-complex-projective-bundle-theorem`,
`def-chern-classes-from-the-projective-bundle-relation`,
`def-complex-flag-bundle-and-chern-roots`,
`thm-complex-splitting-principle-with-integral-injective-pullback`,
`thm-naturality-normalization-and-whitney-sum-for-chern-classes`,
`thm-uniqueness-of-chern-classes-from-the-splitting-principle`,
`lem-universal-complex-flag-bundle-is-bt-n`,
`thm-integral-cohomology-of-bu-n`,
`thm-first-chern-class-classifies-complex-line-bundles`,
`prop-first-chern-class-of-tensor-dual-and-conjugate-lines`,
`thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle`,
`thm-mod-two-reduction-of-chern-classes`,
`prop-complexification-is-conjugation-invariant`,
`cor-odd-chern-classes-of-a-complexified-real-bundle-are-two-torsion`,
`def-pontryagin-classes-by-complexification`,
`thm-naturality-stability-and-mod-two-reduction-of-pontryagin-classes`,
`thm-pontryagin-whitney-product-away-from-two`,
`thm-top-pontryagin-class-is-the-square-of-the-euler-class`,
`lem-universal-oriented-sphere-bundle-has-bso-n-minus-one-total-space`,
`lem-rational-transfer-identifies-a-finite-regular-cover-with-deck-invariants`,
`thm-rational-cohomology-of-bo-and-bso-by-pontryagin-and-euler-classes`,
`lem-cohomology-of-a-finite-cw-complex-vanishes-above-its-dimension` (added),
`def-chern-character-of-a-complex-vector-bundle`,
`thm-chern-character-is-a-natural-ring-homomorphism-on-k-zero`,
`def-graded-chern-character-by-suspension-and-bott-periodicity`,
`lem-graded-chern-character-respects-relative-maps-and-skeletal-filtrations`,
`lem-chern-character-induces-the-rational-isomorphism-on-ahss-e-two`,
`thm-rational-chern-character-isomorphism-for-finite-cw-complexes`.

B page, in order (7 items): the five examples, then
`lem-integral-powers-of-the-complexified-universal-real-line` and
`cex-integral-total-pontryagin-multiplicativity-cannot-ignore-two-torsion`.
No planned ID was dropped, no pair was added, no published item was edited and
no Recorded result is a supplier.

## Local suppliers added (4, all fully authored, registered and decided)

1. `lem-complex-orientation-of-underlying-real-bundles` - the canonical complex
   orientation of `E_R` (fibrewise `(v,iv)`), its naturality and sum
   compatibility, the positive-determinant well-definedness via
   `|det_C A|^2`, and the `(-1)^n` comparison
   `e((V_C)_R) = (-1)^n e(V)^2`. The 3a review flagged this as a missing named
   supplier; without it `x = e((gamma_E)_R)`, `c_n = e`, and `p_n = e^2` would
   not be well defined.
2. `lem-integral-cohomology-ring-of-complex-projective-space-by-splitting` -
   `H^*(CP^N;Z) = Z[x]/(x^{N+1})` with `x = e(gamma_R)`, by the Gysin sequence
   of `S^{2N+1} -> CP^N` plus sphere cohomology and the UCT. This removes this
   pair's dependence on the examples-page computation
   `ex-integral-cohomology-ring-of-complex-projective-space` (which `depcheck`
   rejects as a B-leaf dependency).
3. `lem-cohomology-ring-of-infinite-complex-projective-space` -
   `H^*(CP^infinity;Z) = Z[u]` with free finitely generated homology per degree,
   from the Schubert CW structure and cellular (co)chain computation, with the
   finite-stage rings identifying `u^k` as a generator. This removes the
   examples-page dependencies of the Chern-character/Kunneth steps.
4. `lem-cohomology-of-a-finite-cw-complex-vanishes-above-its-dimension` -
   finiteness of the Chern character sum via cellular cochains.

## Key conventions fixed by the authored items

* Projectivisation parametrises lines; `x = x_E = e((gamma_E)_R)` in the
  complex orientation. The projective-bundle relation is written with signs as
  `x^n - c_1 x^{n-1} + ... + (-1)^n c_n = 0`, and `c_1(L) = e(L_R)` is the
  defining normalization for a line.
* The pair's `H^2` normalization is `c_1` of the dual tautological line (the
  hyperplane class) as the positive generator; equivalently `c_1(gamma) = -x`.
  Every identity proved is normalization-free; the statement of
  `ex-chern-class-of-tautological-and-hyperplane-lines-...` records the
  convention explicitly.
* Pontryagin classes are `p_i = (-1)^i c_{2i}(E_C)`, orientation-free;
  integral multiplicativity is deliberately not asserted, and the B-page
  counterexample supplies the witness (the two-torsion class `a` of the
  complexified universal real line, `p_1(lambda + lambda) = -a^2 != 0` while
  `p(lambda)^2 = 1`).
* The graded Chern character is built through suspension and Bott periodicity
  with the Bott normalization before the graded theorem, and the rational
  isomorphism is obtained from the AHSS comparison theorem for filtered
  abutments (finite filtrations), not from a collapse; the collapse caveat
  `prop-ahss-collapse-determines-only-the-associated-graded-object` is cited
  rather than used.

## Checks actually run (on this pair's files)

- `precheck.mts` explicit paths: 34 proof-bearing items, 0 failing, no
  auto-repair needed after the canonical layer numbering was adopted.
- `rendercheck.mjs` on the 40 items and both pages: OK (KaTeX parses every
  span, no multiline display blocks, frontmatter parses).
- `proof-contract.mjs research/phase-2-remaining-27-batch-9.proof-contracts.json
  --strict`: 0 errors, 1 pre-existing warning on the sibling AT-17 item
  `lem-homological-ahss-exact-couple-from-the-skeletal-filtration`; this
  pair's 40 entries are 40/40 with 0 errors/warnings.
- `manifest-deps.mjs` on batch 9: 70 items, 0 errors (33 A + 7 B for this pair).
- `coverage-checklist.mjs`: 4 pages, 131 harvested rows, 0 errors/0 warnings.
- `content-policy.mjs` on batch 9: 70 scoped items, 0 errors/0 warnings.
- `depcheck.mjs --quiet`: no finding mentions any item of this pair.
- `validate-plan.mjs research/plan-spec.json --repo . --max-items 60`: OK
  (acyclic page order; the unspliced planned pages are validated at page level
  as the tool reports).
- `frontier-dependency-ledger.mjs refresh --run phase-2-remaining-27`: refreshed;
  the batch-9 cross-batch input now carries 23 rows (12 preserved from the
  scaffolder's dispatch, 11 added for this pair's batch-9 -> batch-10 uses of
  `lem-compact-fibre-numerable-bundle-totals-...`, `def-euler-class-...`,
  `thm-naturality-orientation-sign-...`, `prop-first-stiefel-whitney-...`,
  `prop-a-nowhere-zero-section-...`, each read and marked `verified` with the
  exact required claim and use).
- `step3-decisions.mjs record-scope` refreshed `sufficient` for the pair after
  the four additions (the additions changed the scope hash), and
  `record-item --decision accept --confidence 1` was recorded for all 40 items
  with their examined dependency arrays. The final-phase check reports no open
  item and no open scope for this pair.

## Published concerns reported to the owner

1. **Cross-pair sign convention (in-run sibling, suspicion of inconsistency,
   not treated as a defect of this pair).**
   `items/ex-euler-class-of-the-universal-oriented-two-plane.md` (batch 10,
   AT-19 B page, status `draft`) fixes "the first Chern class of the
   tautological complex line is the positive generator", while this pair's
   3a-reviewed convention takes `c_1` of the dual tautological (hyperplane)
   line as positive and `c_1(gamma) = -x`. The two normalizations differ by one
   global sign. This pair proves only normalization-free identities
   (`c_1(gamma) = -c_1(gamma^*)`, generators up to sign), so it is sound under
   either convention; the AT-19 owner should confirm the intended sign before
   Step 4, and Step 4 prose should not state both conventions in one voice.
2. **Examples-page dependencies in sibling in-run items (confirmed by
   `depcheck.mjs`, not this pair's files).** `b-leaf-content` errors remain for
   `cex-zero-euler-class-does-not-in-general-imply-a-nowhere-zero-section`
   (depends on `ex-su-two-to-so-three-as-a-covering-homomorphism`),
   `prop-classical-types-correspond-to-sl-so-and-sp.md` and
   `fs-dynkin-diagrams-classify-all-real-semisimple-lie-algebras.md` (both
   depend on `ex-classical-simple-lie-algebras-and-their-killing-forms`), and
   `fs-two-connected-lie-groups-with-the-same-dynkin-diagram-are-isomorphic.md`
   (depends on
   `ex-su-two-and-so-three-have-isomorphic-real-lie-algebras-locally-but-different-global-groups`).
   These are other pairs' items; the owning Step-3b authors need local
   suppliers or A-page homes, exactly as this pair needed for the `CP^n` rings.
3. **Quotable-section mismatch (shared prose/plan amendment for Step 4).**
   `items/ex-k-z-one-as-the-infinite-complex-projective-space.md` states its
   claim under `## Claim`, which is outside the contract's quotable section
   vocabulary (`Statement`, `Statement refuted`, `Definition`, `Example`,
   `Remark`). This pair avoided depending on it (the `K(Z,2)` structure of
   `CP^infinity` is derived locally from the Milnor bundle and the circle
   model), but any consumer that needs a contract excerpt from that item
   cannot get one, and a Step 4 amendment should rename the heading.
4. **No confirmed defect was found in any published item consumed here.** The
   published suppliers (`thm-gysin-...`, `thm-leray-hirsch-...`,
   `thm-numerable-fiber-bundles-are-hurewicz-fibrations`,
   `thm-universal-coefficient-theorem-for-cohomology-over-a-pid`,
   `cor-homology-of-spheres`, `thm-cellular-*-compute-*`,
   `thm-schubert-cells-give-the-stable-grassmannian-cw-structure`,
   `thm-whitehead-theorem`, `thm-five-lemma-...`,
   `thm-principal-bundles-are-classified-by-maps-to-bg`, `def-*` bundle and
   Grassmannian definitions) were read at their statements and used with their
   stated hypotheses; no contradiction or missing hypothesis was found.

## Open obligations

1. **Step 4 plan splicing.** `research/plan-spec.json` still carries the
   pre-author AT-20 lists; the four added suppliers are not in the plan, and
   the plan's page item lists for this pair need splicing from the batch-9
   manifest. `validate-plan` accepts the pre-splice state as reported.
2. **Step 5 scrutiny of the two heaviest constructions.** The rational
   `BO/BSO` induction
   (`thm-rational-cohomology-of-bo-and-bso-...`) uses a rational rank count in
   the odd step and a surjectivity/injectivity argument with ascending
   induction in the even step; the AHSS comparison
   (`lem-chern-character-induces-the-rational-isomorphism-on-ahss-e-two`,
   `thm-rational-chern-character-isomorphism-...`) uses the sibling AT-17
   pair's spectral-sequence items (`cor-complex-k-theory-ahss`,
   `thm-naturality-and-edge-maps-of-the-ahss`) whose claims were re-read but
   are themselves in-run drafts. A reviewer should recheck those two
   interfaces and the `K(Z,2)` derivation from the Milnor model.
3. **B-page normalization note.** The statements of B1 and B3 record the sign
   normalization explicitly; if Step 4 or the AT-19 owner fixes the opposite
   sign, only those notes change and no proof step does.
4. **Coverage/prose locator nit (carried from 3a).** The Hatcher VBKT coverage
   row for the Chern character says "printed pp.109-111" while the plan says
   109-114; the item locators written here use the plan's range. Step 4 owns
   the serial coverage amendment.

## Honesty boundary

All 40 items were authored in this dispatch from the declared earlier
suppliers; each proof-bearing item was written to stand on its own proof text
and passes the format, rendering and strict contract gates, and the four added
suppliers were derived locally rather than cited from examples pages. The
gates do not establish mathematical truth; the two Step-5 scrutiny points
above are the interfaces where an independent reader's judgement is most
needed.
