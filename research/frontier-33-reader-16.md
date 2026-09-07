# Frontier 33 — reader report, batch 16

## Scope opened

- Assigned A page: `library/differential-topology/sublevel-deformation-and-the-handle-attachment-theorem.md`.
- Assigned B page: `library/differential-topology/sublevel-deformation-and-the-handle-attachment-theorem-examples.md`.
- Assigned A items: `def-closed-sublevel-and-level-set-of-a-smooth-function`, `lem-normalized-gradient-crosses-a-compact-regular-band-in-controlled-time`, `thm-regular-interval-diffeomorphism`, `cor-regular-sublevels-are-diffeomorphic`, `prop-deformation-lemma-for-a-critical-point-free-slab`, `def-k-handle-core-cocore-attaching-region-and-belt-sphere`, `def-attaching-a-smooth-handle-with-corner-rounding`, `lem-smooth-handle-attachment-is-independent-of-corner-rounding-up-to-diffeomorphism`, `lem-adapted-descending-field-near-a-compact-morse-band`, `lem-local-critical-value-lowering-preserves-the-upper-sublevel`, `lem-local-morse-sublevel-pair-is-a-handle-pair`, `lem-gradient-flow-identifies-the-local-and-global-attaching-regions`, `thm-one-critical-point-handle-attachment`, `cor-unstable-disk-is-the-handle-core`, `cor-one-critical-point-cell-attachment-homotopy-type`, `lem-relative-homology-of-the-standard-handle-pair`, `cor-relative-homology-of-a-single-handle-pair`, `prop-simultaneous-attachment-at-a-morse-critical-value`, `cor-index-zero-handles-create-components`, `cor-index-n-handles-cap-boundary-spheres`, and `rem-compact-critical-band-is-the-local-handle-theorem-hypothesis`.
- Assigned B items: `ex-sublevels-of-height-on-the-sphere`, `ex-torus-from-one-handle-of-each-index`, `ex-a-one-handle-joins-components-or-adds-a-tunnel`, `ex-simultaneous-handles-at-a-repeated-critical-value`, `cex-a-critical-point-free-noncompact-band-need-not-be-a-global-product`, and `ex-relative-homology-of-a-handle-by-excision`.
- Opened every current assigned item and both page summaries; the 23-item proof contract; the 14 direct published dependency statements/proofs required for gradient fields, flows, collars, Morse charts, pair homology, and excision; and the primary source passages in Nicolaescu Chapter 2, Audin--Damian Theorems 2.1.7 and 2.1.11, and Benedetti Lemma 9.1/Proposition 9.3.

## Mathematics review

The compact regular-band construction correctly uses a cut-off normalized gradient, including the empty band and endpoints.  Its flow product, sublevel diffeomorphism, and stopped-flow deformation keep the compact-band and regularity hypotheses intact.

The local Morse calculation has the correct derivative signs for the lowered function $F=f-\mu(|u|^2+2|v|^2)$, preserves the upper sublevel, removes the critical point from the modified band, and handles indices $0$ and $n$ separately.  The product-handle parameterisation, framing transport, and collar comparison are consistent with the cited handle-attachment sources.  The unstable-core calculation uses the descending local equations with the correct time direction.

The pair-homology argument correctly contracts the cocore factor, handles $k=0$ and $k=1$, and uses collar excision only after placing the excised lower sublevel inside an open collar thickening.  The sphere, torus, repeated-saddle, one-handle, noncompact-band, and four-dimensional two-handle examples have the stated critical points, indices, boundary cases, and relative groups.

## Repairs made

None.  No assigned A-page prose or in-flight item had a confirmed defect, so no proof contract or judge record was changed.

## Checks

- `node tools/proof-contract.mjs research/frontier-33-batch-16.proof-contracts.json --strict` — pass: 23/23, zero errors and warnings.
- `node tools/citation-fidelity.mjs research/frontier-33-batch-16.proof-contracts.json` — all 72 recorded quotes found; no widening candidates.
- Focused `precheck.mts` over all 23 proof-bearing assigned items — pass: 23/23.
- Current `research/frontier-33-author-check-16.json` — pass: focused precheck, rendercheck (29 files), item content policy (27 items), and proof contract.
- `step6-scope` pre- and post-reader hashes were produced for batch 16; no item or page bytes changed by this reader.

`content-policy.mjs --manifest-only research/frontier-33-batch-16.pages.json` is a scaffold-time invocation and reports duplicate-mint errors once the manifest's already-authored items exist on disk.  The current author-check's item-mode content-policy result is the relevant focused validation and passes.

## Page verdicts

| Page | Verdict |
| --- | --- |
| `sublevel-deformation-and-the-handle-attachment-theorem` | Pass. |
| `sublevel-deformation-and-the-handle-attachment-theorem-examples` | Pass. |

## Blocker

None.  The live `.autopilot` pointer currently reports an unrelated stale `frontier-23` state, so it was not used as evidence; the named frontier-33 manifest and current files were read directly.
