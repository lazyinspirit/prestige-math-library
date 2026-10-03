# Step 3b helper report — lane B

- Run `frontier-38-owner-30`, pair `blowups-exceptional-divisors-and-strict-transforms`
  (A `/ ... ` ) / `blowups-exceptional-divisors-and-strict-transforms-examples` (B),
  batch 2, category `scheme-theory`.
- Lane role: helper for the pair lead (`/root`). Owned items: the pair's
  level-1 and level-2 items, then the lead's level-6 follow-up assignment.
- The lead report `research/frontier-38-owner-30-step3b-pair-blowups-exceptional-divisors-and-strict-transforms.md`
  is authoritative for the frozen scope decision and shared obligations.

## Owned items

Level 1 (order): `def-blowup-scheme-along-ideal`,
`def-normalization-defect-of-reduced-curve`,
`lem-affine-blowup-chart-universal-property`,
`lem-normalization-unchanged-under-finite-birational-curve-map`.

Level 2 (order): `def-exceptional-divisor-blowup`,
`lem-blowup-local-on-base-scheme`, `lem-normalization-defect-euler-and-lengths`,
`thm-affine-blowup-standard-charts`, `thm-blowup-base-change-flat`.

## Open obligations and resolutions

1. `thm-normalization-reduced-curve-exists-finite` (level 0, lane A) was absent
   at entry; it landed at 2026-10-03T05:33Z while this lane worked, and the
   three consumer items were checked against its actual Statement. Resolved.
2. Contract fragment `research/frontier-38-owner-30-step3b-contracts-lane-b.json`
   covers all nine items in scope and validates with
   `node tools/proof-contract.mjs research/frontier-38-owner-30-step3b-contracts-lane-b.json --strict`
   → `0 error(s), 0 warning(s), 9/9 item(s) checked`.
3. Local toolchain: `tools/proof-layout.mjs` runs as
   `PRESTIGE_APP_DIR=/tmp/f38-app node tools/proof-layout.mjs items/<id>.md`.

## Dependency changes (for the lead's manifest rows)

Additions (suppliers actually cited; no removals):

- `def-blowup-scheme-along-ideal`: + `def-quasi-coherent-ideal-sheaf`.
- `lem-normalization-unchanged-under-finite-birational-curve-map`:
  + `thm-proper-quasi-finite-is-finite` (named in the frozen Statement's
  parenthetical).
- `lem-blowup-local-on-base-scheme`: + `def-rees-algebra-ideal-sheaf`,
  + `lem-base-change-open-closed-immersions`.
- `lem-normalization-defect-euler-and-lengths`:
  + `lem-affine-morphism-cohomology-pushforward`,
  + `ex-skyscraper-sheaf-acyclic`, + `thm-valuation-ring-is-integrally-closed`.
- `thm-blowup-base-change-flat`: + `def-rees-algebra-ideal-sheaf`.

## Flags for the lead

- `lem-normalization-unchanged-under-finite-birational-curve-map`: the frozen
  Statement says "reduced curves", but the library's only birationality
  definition (`def-birational-morphism-schemes`) is for integral schemes. The
  proof reads the hypothesis as "finite and an isomorphism over a dense open
  subscheme" and derives componentwise birationality in step 1.1. Not a
  falsehood, but the hypothesis could be made explicit (or the Statement
  restricted to integral curves) at integration time.
- `lem-blowup-local-on-base-scheme`: the Statement says "quasi-coherent ideal
  sheaf" while `def-blowup-scheme-along-ideal` assumes finite type; the item's
  Remarks record that the comparison needs no finite generation and that
  finite type is preserved by restriction. No repair proposed.
- `thm-blowup-base-change-flat` has a Remark link to the B-page item
  `cex-blowup-arbitrary-base-change-failure` (forward mention, not a dep;
  that counterexample names this theorem in its deps).

## Checkpoint log

All nine level-1/level-2 items authored in dependency order; each passed
`precheck.mts` (PASS or clean n/a), `rendercheck.mjs` and
`PRESTIGE_APP_DIR=/tmp/f38-app proof-layout.mjs` (0 defects). Contract rebuilt
after the last edit and validated strict-clean.

| # | item | level | status | notes |
|---|---|---|---|---|
| 1 | `def-blowup-scheme-along-ideal` | 1 | complete | definition; affine case recorded |
| 2 | `def-normalization-defect-of-reduced-curve` | 1 | complete | definition; finiteness of the defect argued locally |
| 3 | `lem-affine-blowup-chart-universal-property` | 1 | complete | 6 steps; torsion-safe normal form |
| 4 | `lem-normalization-unchanged-under-finite-birational-curve-map` | 1 | complete | 5 steps; componentwise integral-closure comparison |
| 5 | `def-exceptional-divisor-blowup` | 2 | complete | definition; inverse-image ideal |
| 6 | `lem-blowup-local-on-base-scheme` | 2 | complete | 4 steps; Rees pullback + base change |
| 7 | `lem-normalization-defect-euler-and-lengths` | 2 | complete | 6 steps after adopting precheck's canonical layered renumbering |
| 8 | `thm-affine-blowup-standard-charts` | 2 | complete | 7 steps; ratio formulas and example |
| 9 | `thm-blowup-base-change-flat` | 2 | complete | 4 steps; flatness necessity flagged |

## Next

- Awaiting the lead's level-6 follow-up assignment for this lane.
