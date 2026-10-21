# Step 3a reader report — batch 109

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader  
Scope: batch `109`

## Opened inventory

Assigned pages:

- `library/knot-theory/zero-traces-and-conway-nonsliceness.md`
- `library/knot-theory/zero-traces-and-conway-nonsliceness-examples.md`

Both pages have frontmatter only, retain their assigned inventories and status, and have no summary body. Their prerequisite/page metadata and the relevant prerequisite pages were also checked. No page prose was changed.

Assigned items, read in dependency order:

- `def-piccirillo-conway-pair`
- `def-smooth-zero-trace`
- `def-dualizable-handle-link`
- `lem-knot-exterior-h1-is-generated-by-meridian`
- `lem-dualizable-slide-clears-meridian-disk`
- `lem-slice-disk-complement-h1-is-generated-by-meridian`
- `thm-dualizable-handle-link-has-two-knot-trace-descriptions`
- `thm-knot-slice-iff-zero-trace-embeds-in-s-four`
- `lem-piccirillo-diagram-produces-dualizable-handle-link`
- `lem-conway-seifert-surface-and-matrix`
- `lem-piccirillo-knot-lee-computations`
- `thm-piccirillo-conway-trace-partner-has-s-two`
- `lem-conway-knot-alexander-polynomial-one`
- `thm-conway-knot-topologically-slice-not-smoothly-slice`
- `ex-unknot-zero-trace-and-dualizable-cancellation`
- `cex-zero-trace-does-not-force-concordance`

Additional supplier material opened for the assigned claims included the knot peripheral and zero-trace definitions, framed-link and crossing/linking conventions, the countable-choice facts, handle cancellation, the smooth-embedding and inverse-function-theorem inputs, and the relevant homology/excision calculations. The Seifert calculation chain was checked against `alg-seifert-surface-from-diagram`, `thm-seifert-surface-from-diagram-procedure-properties`, `lem-seifert-bands-embedded-orientable-boundary-correct`, `def-knot-seifert-pairing-and-matrix`, `lem-seifert-pairing-well-defined`, and `lem-total-linking-equals-intersection-with-link-seifert-surface`. The Lee/cobordism chain included `lem-lee-cobordism-filtration-genus-bound`, `thm-rasmussen-s-bounds-smooth-four-ball-genus`, and the generic-movie and Reidemeister-isotopy suppliers. The topological-sliceness chain included `lem-alexander-one-knot-produces-a-good-group-disk-obstruction`, `thm-infinite-cyclic-group-is-good-for-disk-embedding`, and `thm-alexander-polynomial-one-implies-topologically-slice`.

## Review evidence and checks

Piccirillo’s arXiv v1 PDF was checked at Figure 1 (PDF p. 2), Figure 2 (p. 3), Lemma 1.3 (pp. 2–3), §3 and Theorem 3.1 (p. 4), §4 and the proof of Theorem 1.5/Table 1 (pp. 5–6), and Figure 4 (pp. 8–9). The published Annals paper was checked at Proposition 1.4, §2, Theorem 2.1, Proposition 2.2, and Figures 2 and 4. The source versions use different section/theorem numbering; locators pointing to the arXiv PDF have been corrected accordingly.

Freedman–Quinn, *Topology of 4-Manifolds*, reformatted 2013 PDF §11.9, Theorem 11.11 and proof (PDF pp. 238–239; printed pp. 224–225), states the Z-slice criterion in a contractible 4-manifold. It does not by itself give a disk in the standard 4-ball; the local standard-ball argument remains the responsibility of the assigned local supplier chain. Powell–Ray–Teichner (2025), Theorem A, was checked for the good-group disk-embedding interface and preservation of dual spheres and boundary framing.

The arithmetic in `lem-conway-seifert-surface-and-matrix` was independently checked with exact integer calculations: both stated change-of-basis matrices are unimodular, their congruences give the stated matrix, `det(V−tVᵀ)=t⁴`, and `det(V−Vᵀ)=1`. The Conway Lee computation script completed with the stated rank slices and differential coefficient `2/3`. The partner PD data were checked for 55 crossings, two occurrences of each of 110 arc labels, one component, and the stated oriented crossing counts `n_+=32`, `n_-=23`.

No proof assertion or statement was changed. Twelve assigned items received source-locator corrections and/or the diagram repair below. Their proof contracts were not changed because their derivation claims and proof steps were unchanged; no `verification.judge` entry was present in those item frontmatters. Reflow and precheck passed for each of the 12 changed paths. The required final `proof-layout` pass covered 12 items and 51 proof steps, with 0 defects.

## Edits made

| Item | Edit and evidence |
|---|---|
| `def-piccirillo-conway-pair` | Narrowed the Figure 1/Figure 2 locator to arXiv v1 PDF pp. 2–3. |
| `def-dualizable-handle-link` | Corrected the arXiv v1 definition locator from §2/Theorem 2.1 to §3/Theorem 3.1, PDF p. 4; corrected its visible reference label. |
| `lem-dualizable-slide-clears-meridian-disk` | Corrected the arXiv v1 locator and visible reference label to Theorem 3.1, §3, PDF p. 4. |
| `thm-dualizable-handle-link-has-two-knot-trace-descriptions` | Corrected the arXiv v1 locator and visible reference label to Theorem 3.1, §3, PDF p. 4. |
| `ex-unknot-zero-trace-and-dualizable-cancellation` | Corrected the arXiv v1 cancellation citation from Theorem 2.1 to Theorem 3.1, §3, PDF p. 4. |
| `lem-conway-seifert-surface-and-matrix` | Corrected the Figure 1 locator from PDF p. 1 to arXiv v1 PDF p. 2. |
| `lem-piccirillo-knot-lee-computations` | Corrected the arXiv locator and visible reference from §3 to §4; proof of Theorem 1.5 and Table 1 are in PDF pp. 5–6. The separate published Annals locator remains §3. |
| `thm-piccirillo-conway-trace-partner-has-s-two` | Replaced the incorrect arXiv §§2–3 locator with the exact Proposition 1.4, §3 trace construction, and §4/Theorem 1.5/Table 1 PDF locations. |
| `cex-zero-trace-does-not-force-concordance` | Corrected the arXiv s-invariant locator and visible reference from §3 to §4, with the Introduction at PDF p. 1 and Theorem 1.5 proof at pp. 5–6. |
| `lem-conway-knot-alexander-polynomial-one` | Corrected the Freedman–Quinn Theorem 11.11 locator to §11.9, PDF pp. 238–239, and identified its scope as the Z-slice criterion in a contractible 4-manifold. |
| `thm-conway-knot-topologically-slice-not-smoothly-slice` | Corrected the arXiv proof locator to the trace construction in §3 and nonsliceness proof in §4, PDF pp. 4–6; corrected the Freedman–Quinn locator and scope as above. |
| `thm-knot-slice-iff-zero-trace-embeds-in-s-four` | Replaced the incorrect diagram: it now shows the cone disk and 2-handle core with their common boundary K, the piecewise-smooth sphere with cone point p, and removal of the small cap with boundary Γε. The proof already establishes these relationships in steps 1.2, 2.2, and 3.1. |

No page or other item was edited.

## Unresolved defects

1. `lem-piccirillo-diagram-produces-dualizable-handle-link`, proof step 12.1, asserts that the movie endpoint is “literal N.” `coupon-suffix-03.json` establishes that the endpoint equals the local `inputs/N-pd.json` graph and records an isomorphism checking 248 halfedges, 12 collars, and six proper-arc words. The raw target PD does not bind that local graph to Piccirillo’s Figure 4 panel N. Step 13.1 then applies F8, whose terminal identification is specifically for the published source panel N. A source-bound transcription/correspondence from the local PD to Figure 4 panel N, or a direct verified isotopy to the named Figure 2 partner, is needed to close the central trace identification. The carrier was left unchanged and is reported as fatal.

2. In the same item, proof step 14.1 says that the actual cancellation and framed terminal identification occur in steps 5.2–6.1. The cancellation is in step 7.1 and the terminal source identification is in step 13.1; steps 5.2–6.1 describe the band slides. This cross-reference is inaccurate and remains unedited because the carrier also has the fatal unresolved finding.

## Page verdicts and blocker

- `zero-traces-and-conway-nonsliceness`: page metadata and inventory are consistent; the page body is empty as required. No page-level defect found.
- `zero-traces-and-conway-nonsliceness-examples`: page metadata and inventory are consistent; the page body is empty as required. No page-level defect found.

Blocker for the assigned mathematical result: the local endpoint’s identification with source panel N is not established by the available PD/movie records. The existing claim remains present for the 3b lead; no withdrawal or acceptance decision was made.

## Coverage limits

The full 75-move M–N movie was not independently replayed during this review. The 55-crossing partner’s independent KnotJob calculation was not rerun; the current item’s exact PD checks and Piccirillo’s published Table 1 were reviewed. The 115 KB supplier `lem-freedman-casson-handle-skyscraper-and-surgery-modules` has a 135-step proof: its statement and facts, and portions relevant to the smooth-input disk construction, standardness, framing, and choice, were inspected, but the entire proof was not independently audited line by line. These limits are not treated as positive verification of the omitted parts.
