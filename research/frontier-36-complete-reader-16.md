# Step 5a reader report — batch 16

Run named by the dispatch: `frontier-36-complete`  
Role: reader  
Scope: batch `16`

## Opened inventory

Assigned pages:

- A page: `library/algebraic-geometry/smooth-projective-serre-duality-and-flag-variety-line-bundles.md`
- B page: `library/algebraic-geometry/smooth-projective-serre-duality-and-flag-variety-line-bundles-examples.md`

All 39 A-page items and all 3 B-page examples in `research/frontier-36-complete-batch-16.pages.json` were opened and reviewed:

```text
def-smooth-projective-dualizing-line-bundle-and-trace
lem-projective-space-top-cohomology-residue-pairing
thm-serre-duality-projective-space-twisting-sheaves
lem-coherent-sheaf-finite-twisted-locally-free-resolution-projective-space
lem-injective-modules-flasque-and-ext-of-structure-sheaf
def-sheaf-ext-for-coherent-modules
lem-global-sheaf-ext-long-exact-in-first-variable
thm-serre-duality-projective-space-coherent-sheaves
lem-smooth-closed-immersion-regular-conormal-sequence
lem-smooth-closed-subvariety-dualizing-line-bundle-adjunction
lem-regular-immersion-koszul-ext-sheaf
lem-regular-immersion-local-to-global-ext-collapse
lem-smooth-projective-rational-point-koszul-residue-normalization
lem-smooth-projective-embedding-gysin-trace-compatibility
thm-serre-duality-smooth-projective-variety-locally-free-sheaves
def-complex-semisimple-algebraic-group-borel-and-flag-variety
lem-affine-algebraic-group-faithful-rational-representation
lem-semisimple-root-exponential-algebraic-subgroups
lem-semisimple-rank-one-sl2-root-homomorphism
lem-semisimple-borel-root-factorization
lem-semisimple-opposite-borel-big-cell
lem-semisimple-bruhat-double-cosets
lem-semisimple-minimal-parabolic-root-subgroup
lem-borel-fixed-point-for-projective-actions
lem-semisimple-rational-pluecker-highest-weight-modules
lem-semisimple-projective-orbit-flag-quotients
lem-semisimple-flag-torsor-zariski-charts
thm-semisimple-flag-variety-smooth-projective
thm-flag-variety-bruhat-cell-decomposition
def-borel-character-equivariant-line-bundle
thm-borel-characters-classify-equivariant-line-bundles-simply-connected
lem-flag-variety-canonical-bundle-weight-minus-two-rho
thm-minimal-parabolic-flag-projection-is-p1-bundle
lem-flag-line-bundle-degree-on-minimal-parabolic-fibre
lem-minimal-parabolic-relative-canonical-line-bundle-root-weight
lem-relative-projective-line-degree-normal-form
thm-leray-spectral-sequence-for-sheaf-cohomology
lem-relative-projective-line-cohomology-and-apolarity
thm-relative-p1-line-bundle-cohomology-shift
```

The B-page examples opened were `ex-sl2-flag-variety-line-bundles`, `ex-sl3-two-minimal-parabolic-projections`, and `ex-serre-duality-projective-space-twist-pairing`.

Dependencies inspected for the checks below included `lem-injective-modules-flasque-and-ext-of-structure-sheaf`, `lem-ringed-space-module-sheaves-enough-injectives`, `def-higher-direct-image-sheaf`, `lem-higher-direct-image-affine-localization`, `def-sheaf-cohomology-derived-global-sections`, `thm-grothendieck-spectral-sequence`, `lem-regular-immersion-koszul-ext-sheaf`, `thm-ext-is-hom-in-the-derived-category`, and the projective-orbit/flag consumers of the Plücker module. The truncated terminal excerpt for `lem-regular-immersion-local-to-global-ext-collapse` was completed by reading its final proof passage.

## Uneditable finding

In `items/lem-semisimple-rational-pluecker-highest-weight-modules.md`, Statement lines 72–73 set
`v_B := \bigwedge^{dim b} b` and `v_α := \bigwedge^{dim p_α} p_α` as elements. Each right-hand side denotes an exterior-power vector space (the determinant line), not a selected vector in it. The following fragment, “the wedges of bases,” does not choose a basis or define either symbol. Yet the statement immediately requires both to be nonzero and later consumers use their projective lines. The witness is ill-formed. A repair would choose arbitrary nonzero generators of the two determinant lines, equivalently top wedges of chosen ordered bases; no withdrawal is proposed.

The item is a draft in the named batch artifacts, but the live build state does not place batch 16 in flight. No item, proof contract, or page was changed, and no reflow/precheck was run. The current Autopilot state is `.autopilot/frontier-36-twelve-categories/`, whose recomputed status is running at `1-drift`, blocked on the smooth-projective/flag page; it has not reached assignment or Step 5a. There is no `.autopilot/frontier-36-complete/` state directory, and `git log --all --grep=frontier-36-complete` has no matching commit. This blocks edits under the in-flight-item restriction. The task-named report and findings JSON are the only files written for this reader dispatch.

## Other mathematical checks

- The suspected Leray defect in the O-module addendum is not a defect. For a flat structure sheaf, the free-module functor `\mathcal O_X \otimes_{\underline{\mathbb Z}} -` is exact and left adjoint to forgetting the module structure. The forgetful functor therefore preserves injectives. The stated flatness condition is a sufficient reason that an O-module injective resolution is also an injective resolution of underlying abelian sheaves.
- The regular-immersion and Koszul sign route was checked against the local items and the published derived-Ext comparison. Weibel, [*An Introduction to Homological Algebra*, Chapter 10](https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf), Corollary 10.4.7 (p. 388) computes derived morphisms using bounded-above projective resolutions; Corollary 10.7.5 (p. 400) identifies the resulting Ext with classical Ext. The exact factor `(-1)^{q(q+1)/2}` for the local cochain convention is derived in `thm-ext-is-hom-in-the-derived-category`, step 2.1; it satisfies the needed differential recurrence. No sign defect was confirmed in the checked collapse/trace compatibility chain.
- The [Stacks Project regular-immersion definition](https://stacks.math.columbia.edu/tag/063J), Definition 31.22.1, defines regular immersions via regular ideals; [Lemma 31.22.2](https://stacks.math.columbia.edu/tag/063K) records that regular implies Koszul-regular. Milne, [*Algebraic Groups* (2022)](https://www.jmilne.org/math/Books/iAG2022.pdf), Proposition 18.14 (printed p. 391) states and proves that characters of `B` classify isomorphism classes of `G`-homogeneous line bundles on `G/B`. These checks agree with the locally proved Koszul and equivariant-line-bundle claims; they did not reveal another defect.

## Page verdicts

- **A page — not cleared.** Its mathematical scope summary matches the assigned content. The Plücker module item above has an undefined vector witness, and this defect propagates to the flag quotient and flag examples that consume the Plücker lines. No independent page-prose defect was confirmed.
- **B page — not cleared pending its A dependency.** No independent defect was found in the three example calculations or in the B-page summary. The `SL_2` and `SL_3` examples depend transitively on the malformed Plücker-vector construction, so they cannot be treated as independently cleared while that upstream item remains unresolved.

## Edit log and blocker

Content edits: none. Proof-contract updates: none. Stale `verification.judge` records: none were present on the candidate item. Reflow and precheck: not run because no item was repaired. No item or page was withdrawn.

Blocker: the dispatch identifies `frontier-36-complete`, but the only live Autopilot run is `frontier-36-twelve-categories` and it remains blocked before batch assignment. The in-flight status required to edit the draft item is therefore absent. The reader finding is left for the owner/Step 5b lead to route when the proper run stage is active.

## Coverage limitation

This review opened both assigned pages and all 42 assigned items and independently checked the dependency statements and sources named above. It did not independently reproduce every cited external theorem across every long proof in the batch. The run mismatch also prevented item repair and the required item-level reflow/precheck validation.
