# Step 3a reader report — batch 75

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader  
Batch: `75`

## Opened inventory

Assigned pages:

- `library/knot-theory/algebraic-knot-concordance-and-metabolic-forms.md`
- `library/knot-theory/algebraic-knot-concordance-and-metabolic-forms-examples.md`

The four direct prerequisite pages were also opened: `seifert-matrices-and-the-alexander-module`, `alexander-polynomial-from-seifert-matrices`, `smooth-and-topological-knot-concordance`, and `levine-tristram-signatures-and-arf-invariant`.

Assigned items, read in their supplier order:

- `lem-integral-seifert-form-is-realized-by-a-knot`
- `lem-positive-hopf-plumbing-has-trefoil-seifert-matrix`
- `def-integral-witt-and-seifert-isometric-structures`
- `lem-negative-seifert-form-represents-algebraic-inverse`
- `lem-seifert-matrix-s-enlargement-preserves-algebraic-concordance-class`
- `lem-invertible-seifert-matrix-gives-rational-isometric-structure`
- `thm-levine-algebraic-concordance-classification`
- `thm-levine-algebraic-concordance-surjection-proof`
- `ex-knot-kt-22-worked-cases`
- `cex-knot-kt-22-boundary-case`

The rendered evidence bundle supplied the direct dependency interfaces and proof-contract quotations. Proofs and relevant remarks were opened for `lem-seifert-pairing-well-defined`, `thm-linking-number-equals-signed-intersection`, `lem-seifert-matrix-skew-part-is-surface-intersection`, `lem-canonical-positive-three-crossing-braid-has-negative-trefoil-form`, `lem-rational-isotropic-subspace-saturates-to-integral-metabolizer`, `thm-integral-seifert-witt-group-injects-into-rational-isometric-group`, `thm-rational-isometric-witt-group-has-reciprocal-primary-decomposition`, `thm-rational-primary-isometric-classes-are-hermitian-witt-classes`, `thm-hermitian-number-field-signature-kernel-is-killed-by-four`, `thm-rational-symmetric-signature-kernel-is-killed-by-four`, `lem-integral-algebraic-concordance-has-independent-free-two-and-four-torsion-families`, and `lem-countable-signature-groups-with-exponent-four-kernel-split`.

For the surjection argument and its page edge, I opened `lem-seifert-matrices-of-a-knot-are-s-equivalent`, `lem-seifert-surfaces-of-same-link-are-related-by-arc-surgeries`, `lem-slice-disk-induces-seifert-metabolizer`, `lem-locally-flat-slice-surface-bounds-seifert-hypersurface`, `thm-knot-concordance-is-an-abelian-group`, `lem-knot-concordance-compatible-with-connected-sum`, `lem-smooth-slice-iff-concordant-to-unknot`, `thm-every-oriented-knot-bounds-a-seifert-surface`, `lem-seifert-matrix-s-equivalence-under-isotopy`, and `thm-choice-implies-dependent-implies-countable-choice`. The algebraic-classification closure additionally led to `lem-isotropic-reduction-of-rational-isometric-structures`, `lem-trace-pairing-for-a-finite-separable-extension`, `thm-number-field-four-square-theorem-in-zf`, `thm-number-field-hasse-minkowski-in-zf`, `thm-every-nonarchimedean-local-number-is-a-sum-of-four-squares`, `lem-four-squares-suffice-for-hermitian-signature-kernel-bound`, `thm-lagrange-four-square-theorem`, `lem-euler-four-square-product-identity`, and `lem-three-mod-four-prime-dividing-two-square-sum`.

Both assigned TikZ diagrams were reviewed. The clasp diagram shows two positive mixed crossings with the stated over/under strands; the Hopf-plumbing diagram's core orientations give the stated positive intersection. Neither diagram is used as a proof premise.

## Edits and evidence

1. In `items/cex-knot-kt-22-boundary-case.md`, I separated the false universal claim from its trefoil witness: `## Statement refuted` now contains only the complete false claim, and `## Counterexample` contains the trefoil matrix and its numbered counterexample argument. This supplies the counterexample section required for this item kind while keeping the complete witness prose free of hyperlinks.
2. The batch proof contract had a stale finite check in both `ex-knot-kt-22-worked-cases` and `cex-knot-kt-22-boundary-case`: it recorded the earlier positive matrix `[[1,0],[-1,1]]`. I updated both checks to the current authored matrix `V=[[-1,0],[-1,-1]]`, skew part `[[0,1],[-1,0]]`, and symmetric part `[[-2,-1],[-1,-2]]`. The exact calculation is `m^2+mn+n^2=(m+n/2)^2+3n^2/4>0` for nonzero `(m,n)`; the symmetric form has leading principal minors `−2` and `3`, so it is negative definite and no rank-one subgroup is isotropic.
3. `tools/regen-contract-entries.mjs` regenerated the counterexample's citations and derivations. No `verification.judge` record was present to remove.

Checks after the repair:

- `node tools/tsx-run.mjs tools/reflow.mts items/cex-knot-kt-22-boundary-case.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/cex-knot-kt-22-boundary-case.md` — pass.
- `node tools/proof-contract.mjs research/inverse-problems-knot-theory-all-109-2026-10-19-batch-75.proof-contracts.json --strict --items ex-knot-kt-22-worked-cases,cex-knot-kt-22-boundary-case --json` — pass, no errors or warnings.
- Final `node tools/proof-layout.mjs items/cex-knot-kt-22-boundary-case.md` — 1 item, 2 steps, 0 defects.

No page, other item, plan, or run-state file was edited. The working tree contained concurrent changes in unrelated batches; those were left untouched.

## Findings I could not edit

### Assigned A page: prerequisite cycle

`algebraic-knot-concordance-and-metabolic-forms` requires `levine-tristram-signatures-and-arf-invariant`. That page lists `lem-seifert-matrices-of-a-knot-are-s-equivalent`, whose current dependency list includes `lem-seifert-matrix-s-enlargement-preserves-algebraic-concordance-class`, an item placed on the assigned A page. The resulting page edges are `algebraic-knot-concordance-and-metabolic-forms → levine-tristram-signatures-and-arf-invariant → algebraic-knot-concordance-and-metabolic-forms`. I did not change page frontmatter because the permitted page write scope is A-page prose and the task requires preserving metadata and inventories.

### In-run supplier: malformed proof references in the TOP hypersurface argument

In `lem-locally-flat-slice-surface-bounds-seifert-hypersurface`, Proof 4.2 cites later step 8.1; Proof 6.2 cites nonexistent steps 8.2 and 8.3; and Proof 8.1 cites nonexistent step 8.4. These references concern the TOP boundary fiber, relative transversality, and attachment of the radial sector. The item is a direct supplier of `lem-slice-disk-induces-seifert-metabolizer`, which the assigned consumer `thm-levine-algebraic-concordance-surjection-proof` uses for its locally-flat concordance branch. The immutable batch-74 pre-reader record `research/inverse-problems-knot-theory-all-109-2026-10-19-step3-hash-74-pre.json` has `label: pre` and the matching raw item hash `6377d69b29059c1270e479625b28d0bcea291eaa0d31b84f53eb365dc86d18bb`. The current `items/` carrier was later deleted; this finding binds the pre-reader bytes and makes no claim about replacement/current bytes. The consumer's dependency still names the item ID. I did not edit this other-batch supplier.

## Page verdicts

- `algebraic-knot-concordance-and-metabolic-forms`: defective. The page is frontmatter-only and retains `page_layout: compact-v1`; its inventory and status match the manifest. Its `requires` edge participates in the cycle above.
- `algebraic-knot-concordance-and-metabolic-forms-examples`: no local defect found. It is frontmatter-only with `page_layout: compact-v1`, and its two example placements match the manifest. Its required A page is blocked by that page's cycle.

## Mathematical and source notes

The realization proof's alternating-form reduction, band twists, and clasp changes match its matrix target. The positive-push computations in the Hopf-plumbing result and both worked cases agree internally with the displayed matrices. The rational Witt arguments use the stated even-dimensional, `I−T`-invertible category; the classification proof distinguishes the integral and rational groups and derives the abstract isomorphisms from the listed injection, primary, signature, and countability results. The smooth part of the surjection proof is locally supported. Its locally-flat part remains blocked by the in-run supplier finding above.

I opened Livingston's survey at §2.2 and §3, Livingston–Miller §2, Cattabriga–Francaviglia §6.2.3, Ray's author version §3, Freedman–Quinn (2013) §9.5 Theorem 9.7, Quinn's 1988 Theorem on p.145, and Hatcher Proposition 1B.9. Livingston's survey states the Levine rational/integral distinction and attributes completion of the integral classification to Stoltzfus; Livingston–Miller states the integral-to-rational injection. Ray states the concordance-group and inverse claims while identifying the group proof as an exercise; the item correctly treats the TOP operation as an imported input. Freedman–Quinn's relative normal-bundle criterion and Quinn's strongly relative microbundle transversality statement match the cited inputs in the TOP supplier.

The direct Rolfsen PDF timed out in retrieval, and the Stoltzfus memoir DOI returned no full text. Cattabriga–Francaviglia's opened example gives a genus-one trefoil surface but uses a different push convention and does not independently settle the handedness label. I therefore relied on the assigned local oriented-braid and crossing calculations for that sign, and did not report an unsupported source defect. `lem-seifert-surfaces-of-same-link-are-related-by-arc-surgeries` changed on disk during this review; I cannot bind the earlier bytes, so no finding relies on that historical observation. The TOP hypersurface supplier was deleted after review; its finding is bound to the matching immutable batch-74 pre-reader source hash, not to its missing current path.

## Blocker and live status

The A-page cycle and the missing current TOP supplier carrier remain outside this batch's edit authority; the pre-reader carrier has malformed TOP proof references as detailed above. At the latest status check, autopilot was `running` with no worker in flight; batch 75 remained missing from `3a-read` at 71/109, and stage `3a-collect` reports `collect-49` failed three times. I did not change run control state or treat that unrelated stage failure as reader coverage.
