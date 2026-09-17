# Phase 2 remaining 27 — Step 3b author report

Pair: `generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence`
(A) with `...-examples` (B). Batch 9; the co-batch AT-20 pair's rows in
`research/phase-2-remaining-27-batch-9.pages.json` and
`...-batch-9.coverage.json` were preserved untouched.

## Completed inventory (30 items, all authored and item-decision `accept`)

A page, in order: `def-reduced-generalized-cohomology-theory`,
`prop-reduced-and-unreduced-generalized-cohomology-theories-correspond`,
`def-coefficient-groups-of-a-generalized-cohomology-theory`,
`def-reduced-generalized-homology-theory`,
`def-coefficient-groups-of-a-generalized-homology-theory`,
`prop-degree-d-sphere-maps-act-by-multiplication-by-d-in-any-generalized-theory`,
`def-skeletal-filtration-for-generalized-cohomology`,
`lem-ahss-e-one-page-is-cellular-cochains-with-theory-coefficients`,
`lem-the-ahss-first-differential-is-the-cellular-coboundary`,
`thm-cohomological-atiyah-hirzebruch-spectral-sequence`,
`lem-homological-ahss-exact-couple-from-the-skeletal-filtration`,
`thm-homological-atiyah-hirzebruch-spectral-sequence`,
`lem-edge-maps-of-a-bounded-skeletal-ahss`,
`thm-naturality-and-edge-maps-of-the-ahss`,
`lem-pairings-of-skeletal-exact-couples-induce-multiplicative-ahss`,
`thm-multiplicative-ahss-for-a-multiplicative-generalized-theory`,
`prop-ahss-collapse-determines-only-the-associated-graded-object`,
`cor-complex-k-theory-ahss`,
`lem-first-connective-complex-k-theory-postnikov-invariant-is-integral-sq-three`,
`lem-ku-representability-and-skeletal-postnikov-d-three-comparison`,
`thm-first-possible-complex-k-ahss-differential-is-integral-sq-three`.

B page, in order: `ex-complex-k-ahss-for-spheres`,
`ex-complex-k-ahss-for-complex-projective-space`,
`ex-complex-k-ahss-for-a-closed-oriented-surface`,
`lem-complexified-tautological-line-resolves-real-projective-k-theory-extensions`,
`ex-complex-k-ahss-for-real-projective-space`,
`lem-reduction-of-the-integral-bockstein-is-the-first-steenrod-square`,
`lem-a-bockstein-class-on-rp-two-times-rp-four-has-nonzero-integral-sq-three`,
`ex-nonzero-d-three-in-the-k-ahss-for-rp-two-times-rp-four`,
`rem-finite-cw-ahss-convergence-does-not-automatically-extend-to-infinite-cw-complexes`.
Pages written: `library/algebraic-topology/{page,-examples}.md`.

No added pair or item beyond the declared inventory. Local additions are the
author-planned suppliers already in the manifest (E1/d1, bounded edge maps,
naturality, multiplicative pairing, KU/ku bridge, Bockstein lemmas); nothing was
dropped.

## Key conventions fixed

Cohomological AHSS: `E_1^{p,q}=h^{p+q}(X^p,X^{p-1})`,
`E_2^{p,q}=H^p(X;h^q(*))`, `d_r:(p,q)->(p+r,q-r+1)`, convergence
`E_inf^{p,q}=F^p/F^{p+1}` with `F^p=ker(h^n(X)->h^n(X^{p-1}))`. The exact
couple is a literal initial couple in the library's homological convention with
`D_{p,q}=h^{-p-q-1}(X^{-p-1})`, `E_{p,q}=h^{-p-q}(X^{-p},X^{-p-1})`, i =
restriction, j = connecting, k = pair map; this is the point of the cohomological
grading repair and is stated explicitly in the theorem. Homological AHSS uses
`F_p=im(h_n(X^p)->h_n(X))`. All AC-carrying items state the assumption and
declare `def-axiom-of-choice`; the choice-free items stay choice-free.

## Checks actually run (all on my items/pages)

- `precheck.mts` explicit paths: 24 proof-bearing items, 0 failing.
- `rendercheck.mjs` on the 30 items and both pages: OK (KaTeX parses every span,
  no multiline display blocks).
- `proof-contract.mjs research/phase-2-remaining-27-batch-9.proof-contracts.json
  --strict`: 0 errors, 30/30 items checked (one non-fatal `shotgun-bracket`
  warning on `lem-homological-ahss-exact-couple-from-the-skeletal-filtration`).
- `depcheck.mjs --quiet`: my items clean (the only remaining failure in the
  library is the unrelated pre-existing `def-subset-of-a-finite-set` entry in
  `thm-dmc-implies-compact-hausdorff-baire`).
- `manifest-deps` on batch 9: 66 items, 0 errors.
- `validate-plan research/plan-spec.json --repo . --max-items 60`: success.
- `frontier-dependency-ledger.mjs refresh`: refreshed; zero cross-batch edges
  involve this pair (all suppliers are published items or same-pair items), so
  the batch-9 cross-batch input rows were left as the sibling pair's.
- Item decisions: `record-item --decision accept --confidence 1` for all 30
  items with the examined dependency arrays.

## Published concerns reported to the owner (no published file edited)

None newly confirmed against published items. Two pre-existing points stand and
are for the serial reconciler, not this dispatch: (i) the published
`def-postnikov-k-invariant` is already Phase-3 debt in
`research/published-consumer-supplier-ledger.md`; this pair consumes only its
definition, so it is not a blocker here; (ii) the 3a citation-accuracy notes
(Ji locators, Miller Lecture 29 coverage row) were not corrected, because
`...-batch-9.coverage.json` is shared with the sibling pair and Step 4 owns the
serial coverage amendment; the item-level `sources.references` locators written
here are correct.

## Honest source qualifications (for Step 5 scrutiny)

- `lem-first-connective-complex-k-theory-postnikov-invariant-is-integral-sq-three`
  is a faithful reconstruction of Adams, Proposition 16.6, printed pp. 391–393,
  with the operations `delta_2Sq^2`, the `SU` argument and the Bott-cofiber
  normalization. The cohomology computations `H^3(H)`, `H^6(H,3)`, `H^6(SU)` are
  recorded source inputs, not reproved locally; the item says so.
- `lem-complexified-tautological-line-resolves-real-projective-k-theory-extensions`
  proves locally `alpha^2=-2 alpha` and `alpha^k=(-2)^{k-1}alpha`; the nonzero
  clause `alpha^m != 0`, `alpha^{m+1}=0` and the odd groups are Atiyah,
  *K-Theory* Chapter II §2.7, pp. 105–106, recorded source inputs (the local
  reconstruction of those exact sequences was not completed in this dispatch).
  Confidence in the statement is high; the local-proof status of that clause is
  the pair's main residual qualification.
- `lem-ku-representability-and-skeletal-postnikov-d-three-comparison` is
  ai-generated proof text built from May's representability and Adams's
  connective cover; the skeletal-to-Postnikov `d_3` comparison is proved here
  from the exact-couple lift formula and cellular obstruction theory (June sources
  do not contain it). It is the pair's heaviest local obligation.
- `thm-multiplicative-ahss-...` assumes the coherent external product with the
  two Leibniz identities as stated; it does not infer a product on `E_2` from the
  cup product (the 3a note about Miller's refinement remains an optional
  enrichment, not a gap).

## Open obligations

1. Step 4 serial reconciliation: refresh the batch-9 coverage rows for Ji
   locators/Miller Lecture 29 and re-splice the plan page item lists (plan-spec
   currently lists zero items for both pages; `validate-plan` accepts this
   pre-splice state).
2. Step 5: independent review of the Adams-based and Atiyah-based clauses above;
   if a reviewer cannot reconstruct those source inputs, the affected item must
   be escalated rather than accepted.
3. The 481 un-spliced planned pages and the sibling AT-20 pair's unauthored items
   are outside this pair and remain untouched.
