# Step 3a reader report — batch 74

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader (`reader-74`)  
Scope: batch `74`

## Opened inventory

Assigned pages opened:

- `library/knot-theory/smooth-and-topological-knot-concordance.md` — 19 listed items. YAML frontmatter only; draft status and `page_layout: compact-v1` preserved. No body summary or page defect found.
- `library/knot-theory/smooth-and-topological-knot-concordance-examples.md` — 2 listed items. YAML frontmatter only; draft status and `page_layout: compact-v1` preserved. No body summary or page defect found.

All 21 assigned items were opened in dependency order:

`def-abstract-oriented-knot-cobordism`; `def-locally-flat-proper-surface-and-concordance-collars`; `lem-rational-isotropic-subspace-saturates-to-integral-metabolizer`; `def-locally-flat-pl-knot-concordance`; `def-reverse-mirror-of-oriented-knot`; `def-smooth-knot-concordance`; `thm-locally-flat-codimension-three-arc-unknotting`; `def-locally-flat-topological-knot-concordance`; `lem-general-knot-reverse-mirror-sum-is-ribbon`; `lem-smooth-slice-iff-concordant-to-unknot`; `lem-knot-concordance-compatible-with-connected-sum`; `lem-smooth-and-topological-knot-concordance-is-an-equivalence-relation`; `lem-smooth-and-topological-slice-genus-minima-exist`; `thm-knot-concordance-is-an-abelian-group`; `def-smooth-and-topological-slice-genus`; `lem-linking-number-equals-four-dimensional-intersection-number`; `lem-locally-flat-slice-surface-bounds-seifert-hypersurface`; `def-metabolic-seifert-form-and-algebraic-knot-concordance`; `lem-slice-disk-induces-seifert-metabolizer`; `ex-knot-kt-21-worked-cases`; `cex-knot-kt-21-boundary-case`.

Supporting dependencies opened to check the assigned arguments included the knot connected-sum and concordance suppliers, the smooth/topological collar and isotopy-extension results, the local-flat arc-smoothing and arc-unknotting chain, Seifert-surface and Seifert-pairing suppliers, the signed-linking/intersection and homology tools, Alexander and Poincaré duality, Mayer–Vietoris and excision, topological boundary collaring, the cited finite-model and triangulation inputs, and the orientation/intersection conventions used in the metabolizer and worked-example arguments.

The final `git log` showed commit `65309250d6` updating the connected-sum definition and schematic, a current-run dependency used by this batch. I checked the new definition and diagram against the assigned connected-sum consumers; their fixed orientation-reversing gluing convention remains consistent, and no dependency finding was warranted.

## Repaired defect

`lem-locally-flat-slice-surface-bounds-seifert-hypersurface` had a defective proof. Its former smooth construction invoked smooth approximation, Whitney-type tools, and smooth parametric transversality on the merely topological disk exterior. Its later TOP branch contained impossible references to nonexistent steps (`step8.1`–`step8.4`) and did not establish the claimed regular fiber or hypersurface. The text itself did not assert a smoothing of the TOP exterior, so those smooth tools did not apply.

I replaced that proof with one construction in the locally flat category, which also applies to a smooth disk. The proof now:

1. Doubles the disk to a locally flat sphere and applies Freedman–Quinn's relative normal-bundle theorem to the closed sphere, with the seam normal-bundle germ fixed. It checks the local complement groups and the local-π2 condition noted in the 2013 edition's erratum.
2. Chooses a disk framing, proves its boundary framing has zero linking, matches it to the Seifert zero longitude, and computes the exterior and zero-surgery first homology.
3. Constructs a continuous boundary circle map with the capped Seifert surface as its fiber and the positive Seifert coorientation.
4. Represents the meridian homomorphism by a continuous circle map on the exterior, then uses the boundary homotopy and collar to match the prescribed map on a whole smaller boundary collar.
5. Applies Quinn's strongly relative topological microbundle transversality to the graph and product slice, keeping that collar fixed. The inverse image is the required locally flat three-manifold with its two-sided product.
6. Attaches the fixed-angle disk sector, matches the products and coorientation, and performs the stated collar push.

The imported source statements were checked at their exact locations: Freedman–Quinn, original Theorem 9.3A, printed p. 137, and reformatted Theorem 9.7, printed p. 145/PDF pp. 158–159, including the local-π2 erratum; Quinn, “Topological transversality holds in all dimensions,” theorem printed p. 145; Milnor, Theorem 1 and Corollary 1, printed pp. 272–273; and Hatcher, Example 1B.1 and Proposition 1B.9, printed pp. 88–91. The proof contract now records those inputs and the repaired steps. The item Statement is unchanged.

I also updated two assigned consumers to remove stale references to the helper's former split smooth/TOP proof: Fact F5 in `lem-slice-disk-induces-seifert-metabolizer` and Fact F7 in `cex-knot-kt-21-boundary-case`. Their mathematical arguments and claims were otherwise unchanged. The batch-74 proof contract was updated for the helper and affected consumers; obsolete unsupplied-proof obligations and stale consumer prerequisite notes were removed. No `verification.judge` record was present in the three changed item frontmatters.

## Other item and page verdicts

No other confirmed defect requiring repair or escalation was identified in the assigned items. The A and B pages satisfy the no-summary requirement and retain their page metadata and inventories. No page edits were made. No uneditable defect remains to route.

## Validation

For each of the three changed items, the required reflow completed without changing the file and precheck passed. After the edits, the required single batched layout command

`node tools/proof-layout.mjs items/lem-locally-flat-slice-surface-bounds-seifert-hypersurface.md items/lem-slice-disk-induces-seifert-metabolizer.md items/cex-knot-kt-21-boundary-case.md`

reported `3 items, 16 steps, 0 defects`.

## Coverage and blocker

The active run status was recomputed from `.autopilot/`: the run remains `running`, with no in-flight task; Step 3a-read showed 76/109 covered and batch 74 still outstanding at the time of this report. Batch 74 has no remaining mathematical blocker. I did not recursively re-audit every lower-level dependency proof beyond the suppliers needed to verify the assigned claims. The Ray lecture-notes PDF fetch timed out; no part of the repair relies on it. No general test suite was run.
