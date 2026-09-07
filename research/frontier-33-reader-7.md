# Frontier 33 — Reader 7 report

## Scope opened

- Manifest: `research/frontier-33-batch-7.pages.json` (78 items; 60 A-items
  and 18 B-items).
- A page: `library/commutative-algebra/regular-local-rings-and-homological-dimension.md`.
- B page: `library/commutative-algebra/regular-local-rings-and-homological-dimension-examples.md`.
- All assigned item bodies in `items/`, including all definitions, statements,
  proof facts, proofs, calculations, and examples.
- Dependency closure used by the assigned arguments: 157 same-batch edges and
  77 distinct published direct dependencies (128 published-backward edges).
  I opened the current target files and checked their stated hypotheses and
  conclusions against the consuming proof facts; no dependency was treated as
  established merely because it was named in a contract or earlier report.
- Source check: opened the current Stacks treatment of Serre normality
  (`https://stacks.math.columbia.edu/tag/031O`), including its definitions and
  complete criterion proof, to check the general zero-divisor formulation and
  local finite-dimension induction used by the A-page normality chain.

### A-item inventory (60)

`def-embedding-dimension-and-regular-local-ring`,
`lem-embedding-dimension-is-minimal-maximal-ideal-generator-number`,
`thm-dimension-at-most-embedding-dimension`,
`def-regular-system-of-parameters`,
`lem-regular-system-of-parameters-equivalent-basis`,
`lem-associated-graded-polynomial-surjection`,
`lem-regular-local-graded-surjection-has-zero-kernel`,
`thm-associated-graded-ring-of-a-regular-local-ring`,
`cor-regular-local-hilbert-samuel-multiplicity-one`,
`lem-regular-local-domain-induction`,
`lem-regular-local-parameter-is-nonzerodivisor`,
`lem-regular-local-quotient-by-parameter-is-regular`,
`thm-quotient-and-lifting-regularity-across-a-regular-element`,
`thm-regular-local-rings-are-domains-and-cohen-macaulay`,
`thm-one-dimensional-regular-local-rings-are-dvrs`,
`lem-regular-local-regular-quotient-ideal-is-parameter-generated`,
`lem-finite-local-modules-admit-minimal-free-resolutions`,
`lem-minimal-free-resolution-differentials-land-in-maximal-ideal`,
`lem-minimal-free-resolution-reduces-to-zero-differential`,
`def-betti-numbers-of-a-finite-local-module`,
`cor-betti-number-is-rank-in-minimal-resolution`,
`lem-minimal-free-resolutions-unique-up-to-chain-isomorphism`,
`lem-projective-dimension-from-last-nonzero-betti-number`,
`lem-auslander-buchsbaum-syzygy-projective-dimension`,
`lem-auslander-buchsbaum-base-case-free-module`,
`lem-minimal-free-matrix-induces-zero-on-residue-ext`,
`lem-auslander-buchsbaum-projective-dimension-one`,
`lem-auslander-buchsbaum-first-syzygy-depth`,
`thm-auslander-buchsbaum-formula`,
`lem-global-dimension-is-detected-on-cyclic-modules`,
`lem-local-global-dimension-equals-residue-field-projective-dimension`,
`lem-positive-depth-ring-has-regular-minimal-generator`,
`lem-regular-element-reduction-preserves-minimal-resolution`,
`lem-residue-field-splits-off-reduced-maximal-ideal`,
`lem-finite-residue-field-projective-dimension-forces-depth-equals-dimension`,
`lem-regular-local-residue-field-koszul-resolution`,
`cor-regular-local-residue-field-projective-dimension-dimension`,
`thm-auslander-buchsbaum-serre-regularity-criterion`,
`cor-localisations-of-regular-local-rings-are-regular`,
`def-regular-noetherian-ring`, `lem-flat-local-ascent-of-regularity`,
`lem-polynomial-local-regularity-fibre-step`,
`thm-localisation-and-polynomial-extension-of-regular-rings`,
`lem-completion-preserves-embedding-dimension`,
`thm-completion-preserves-regular-local-rings`, `def-normal-noetherian-ring`,
`def-serre-r-k-and-s-k-conditions`, `cor-regular-local-ring-satisfies-r-one`,
`cor-regular-local-ring-satisfies-s-two`, `lem-normal-domain-implies-r-one`,
`lem-normal-domain-implies-s-two`,
`lem-r-one-s-two-intersection-of-height-one-localisations`,
`lem-r-one-s-two-integral-element-membership`,
`cor-serre-normality-criterion-two-directions`,
`lem-serre-r-zero-s-one-characterises-reducedness`,
`def-total-ring-of-fractions`,
`lem-reduced-noetherian-total-fractions-and-normal-components`,
`lem-depth-two-excludes-finite-punctured-extension`,
`thm-serre-normality-criterion`, and `thm-regular-local-rings-are-normal`.

### B-item inventory (18)

`ex-finite-regular-local-base-cohen-macaulay-freeness`,
`ex-fields-as-regular-local-rings`, `ex-dvrs-as-regular-local-rings`,
`ex-localised-polynomial-ring-regular`,
`ex-formal-power-series-ring-regular`, `ex-dual-numbers-not-regular`,
`ex-cusp-local-ring-not-regular`,
`ex-betti-numbers-from-a-koszul-resolution`,
`ex-residue-field-infinite-projective-dimension-singular`,
`ex-embedding-dimension-versus-dimension-node`,
`ex-associated-graded-polynomial-map-singular-kernel`,
`ex-minimal-resolution-unit-cancellation`,
`ex-betti-numbers-residue-field-regular-ring`,
`ex-auslander-buchsbaum-first-syzygy`,
`ex-completion-regularity-invariance`,
`ex-hypersurface-regularity-at-a-rational-point`,
`ex-regular-local-ambient-cover-minimal-dimension`, and
`ex-regular-flat-local-map-with-singular-closed-fibre`.

## Mathematical review

The cotangent-space/associated-graded argument retains the nonzero local and
Noetherian hypotheses, handles dimension zero, and uses the Hilbert--Samuel
degree contradiction in the correct direction. The quotient-by-regular-element
and DVR steps preserve their nonzerodivisor and nonfield conditions. The
minimal-resolution and Auslander--Buchsbaum chain correctly retains the finite,
nonzero, local, and finite-projective-dimension hypotheses. The flat-local,
completion, and localization arguments retain the required finiteness and
locality conditions. The normality sequence handles reduced rings with zero
divisors separately from domains; the total-fraction and component conclusions
use the stipulated zero-ring conventions. The coordinate examples also check
the indicated boundary cases, including characteristics two and three where
relevant.

## Verdicts

| Page | Verdict |
| --- | --- |
| `regular-local-rings-and-homological-dimension` (A) | Pass — all 60 items consistent with their contracts, dependencies, and page summary. |
| `regular-local-rings-and-homological-dimension-examples` (B) | Pass — all 18 computations and witnesses type-check; no B-page edit made. |

## Edits, findings, and blockers

No content edit was necessary. No confirmed uneditable defect remains, so the
structured findings array is empty. There is no blocker.

## Validation

- `node tools/tsx-run.mjs tools/precheck.mts` on all 78 assigned files: 71
  proof-bearing files checked, 0 failures (the remaining assigned definitions
  do not require a proof-format check).
- `node tools/audit-manifest.mjs research/frontier-33-batch-7.pages.json`:
  285 relationships over 78 items, 0 defects.

