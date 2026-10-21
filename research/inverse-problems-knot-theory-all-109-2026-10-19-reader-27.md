# Step 3a reader report — batch 27

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader (`reader-27`)

## Opened inventory

Assigned pages:

- `library/inverse-problems/variational-source-conditions-and-bregman-rates.md` (A page)
- `library/inverse-problems/variational-source-conditions-and-bregman-rates-examples.md` (B page)

Required page context opened:

- `library/inverse-problems/nonlinear-inverse-problems-and-tangential-cone-conditions.md`
- `library/inverse-problems/nonlinear-tikhonov-existence-and-stability.md`
- `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/proximal-gradient-and-accelerated-composite-optimization.md`

Assigned items, reviewed in supplier order:

- `def-ip-banach-convex-subgradient-and-dual-pairing`
- `lem-ip-index-function-young-conjugate-bound`
- `lem-ip-banach-fenchel-duality-for-regularization`
- `def-ip-bregman-distance`
- `def-ip-variational-source-condition`
- `thm-ip-vsc-nonlinear-regularization-rate`
- `cex-ip-vsc-unit-coefficient-does-not-control-bregman-error`
- `ex-ip-power-index-bregman-rate`
- `ex-ip-logarithmic-index-bregman-rate`

Additional item dependencies opened to check the assigned claims and proofs:

- `def-banach-space`
- `def-dual-space-of-a-normed-space`
- `def-convex-and-strictly-convex-functionals-on-a-banach-space`
- `def-proper-coercive-and-weakly-lower-semicontinuous-functional`
- `def-metric-space`
- `def-ip-forward-map-and-solution-classes`
- `def-hilbert-space`
- `def-frechet-derivative-between-banach-spaces`
- `lem-the-frechet-derivative-is-unique`
- `def-ip-nonlinear-forward-map`
- `def-ip-x0-minimum-norm-solution`
- `def-ip-nonlinear-tikhonov-functional`
- `def-norm-and-normed-space`
- `def-real-and-complex-inner-product-space`
- `thm-cauchy-schwarz-in-an-inner-product-space`

## Review and page verdicts

The two assigned pages have the manifest's titles, placement inventories, and `requires` entries. Both are frontmatter-only with empty bodies. The required page targets resolve. No diagram is present in the assigned pages or items.

- **A page — pass.** Its six item placements match the manifest; its three required pages resolve. No summary body or other page defect was found.
- **B page — pass.** Its three example placements match the manifest, it requires the assigned A page, and it has no summary body.

All nine assigned items were checked for title strength, definitions or statements, mathematical hypotheses and quantifiers, proof or witness, references, and relevant proof-contract coverage. The Fenchel–Young lemma follows from the supremum definition and the cited subgradient inequality. The conjugate estimate's two bounds follow from the defining supremum. The main theorem's sublevel-entry, residual conversion, VSC absorption, conjugate bounds, optional penalty and norm rates, and Hilbert specialization are valid under the stated assumptions. The counterexample's source inequality and flat minimizer family are explicit. The power and logarithmic conjugate calculations satisfy the parameter coupling and the cited rate theorem's conditions. The statement reference links are placed after each complete statement section.

The key cited arguments were checked against the available primary texts: Borwein–Vanderwerff, Proposition 4.4.1(a); Kaltenbacher, Lemma 2, equations (2.2)–(2.3), and Appendix A.1; and Clason, equation (10.17) and Theorem 10.7. These support the local derivations and Hilbert rate specialization. The Weidling publisher PDF could not be opened directly by the web reader (403); search-indexed excerpts confirmed the cited theorem/equation context, while the assigned claims were checked from their complete local proofs and the accessible sources above.

## Defects and edits

No assigned item or page prose required repair. No item was edited. Consequently, no proof-contract mutation, judge-record removal, reflow, precheck, or proof-layout run was triggered.

**Uneditable published dependency:** `items/def-metric-space.md`, Definition, paragraphs at lines 63 and 68, contains corrupted prose. Line 63 says, “Which metric axiom list this library uses, the live naming fork between semimetric and pseudometric, and why extended metrics are not treated here records why extended metrics are not treated in this library.” Line 68 ends, “as Nonnegativity of a metric is a consequence of the other axioms, not an axiom proves.” Both passages are ill-formed. The metric axioms themselves remain readable, so the defect is nonfatal. The theorem's dependency closure reaches this published item through `def-ip-nonlinear-forward-map` and `def-ip-forward-map-and-solution-classes`; the assigned consumer is `thm-ip-vsc-nonlinear-regularization-rate`. It was not edited because published content is outside this reader's write scope. This finding is returned in the JSON output.

**Proof-contract locator issue:** `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-27.proof-contracts.json`, the `lem-ip-banach-fenchel-duality-for-regularization` `boundaries.endpoints` evidence refers to proof steps “1.1–1.3”; the item has steps `1.1`, `2.1`, and `3.1`. The proof itself is sound. This contract-only locator was not edited because the authorized repair scope is assigned item or A-page prose, and no material item repair was made.

## Blocker and coverage limit

No workflow blocker. The only source-access limitation was the direct Weidling PDF fetch noted above; it did not leave a mathematical uncertainty in the reviewed claims. The review covered the assigned items, pages, and supplier statements needed for their arguments, not every unrelated transitive foundation or every cited book chapter.
