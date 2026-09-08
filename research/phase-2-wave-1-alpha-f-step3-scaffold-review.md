# Phase 2 wave 1, Alpha group f, Step 3 scaffold review

Date: 2026-09-08

Assignment: batches 7 and 8. Reviewed A/B pairs:

- `simplicial-subdivision-and-simplicial-approximation` and its examples page;
- `classical-affine-varieties-coordinate-rings-morphisms-and-rational-maps-interface` and its examples page.

## Outcome

Both pairs are `insufficient`. Their owned mathematical spines are coherent and their active source records are adequate, but the current plan/prose scaffolds and published dependency closures are not ready for publication:

- batch 7 inherits an incorrect AT-1 B-page prerequisite, has 14 manifest items absent from the binding prose inventory, and reaches a published finite-realization proof with a false open-extension step;
- batch 8 inherits seven B-page prerequisites and a load-bearing forward dependency on the later published definition of Dependent Choice, and has four necessary support interfaces absent from the binding prose inventory;
- both batch notes expressly stop short of the contract's complete proof-by-proof semantic audit of published suppliers.

No new A/B pair is needed. The additional mathematics already exists in the owned manifests. Batch-local evidence repairs go to Beta 7 and Beta 8; all shared `plan-spec.json`, prose-scaffold, and published-item repairs must go to one authorized writer. This review did not edit either batch's manifest, coverage, notes, the plan, a prose scaffold, or published content.

## Inputs and audit boundary

I read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, the frontier dependency brief, the dispatch/group records, the current `plan-spec.json`, the Algebraic Topology, Commutative Algebra, and Algebraic Geometry plan designs, both batch manifests/coverage files/notes, the relevant published item files, and the cited complete source passages.

The current plan traversal reaches 180 pages from batch 7 and 68 pages from batch 8. Neither closure reaches `deferred-set-theory-beyond-choice`. The inflated batch-7 closure and both collections of B pages are themselves findings: resolving an ID is not mathematical adequacy, and B pages are leaves, not suppliers.

The whole-run manifest validator resolves all 434 proposed items with explicit dependency arrays and no missing IDs or item cycles. `validate-plan` also exits successfully, but it says that 719 planned pages have no item lists and therefore receive only page-level validation. These mechanical passes do not detect the inadmissible supplier semantics detailed below and cannot replace the required transitive proof review.

## Batch 7: subdivision and simplicial approximation

### Local mathematical spine

The 25 A items and 6 B items are in usable proof order. The face-poset/order-complex definitions precede barycentric realization. The finite weak-topology lemma uses finite unions of closed subsets of compact Euclidean simplices, avoiding the invalid union-of-open-extensions argument. Barycentric face chains triangulate each simplex, so the canonical affine map is a simplexwise homeomorphism and glues through the weak topology.

The augmented cone identity and the carrier lemma adequately support the oriented subdivision map, boundary commutation, last-vertex comparison, chain homotopy, and homology isomorphism. The finite mesh estimate and star criterion then support the pair version of ordinary approximation. The compact-support argument explicitly uses countable choice to select points in countably many distinct open simplices; it does not silently assume local finiteness.

For the relative result, the manifest correctly does not claim that ordinary barycentric subdivision fixes a nonconstant simplicial edge. It introduces relative derived subdivision, proves fullness of the fixed subcomplex, builds the neighbourhood adjustment, and approximates `f h` while retaining the fixed restriction. This matches Zeeman's theorem and Maunder's relative construction. The convex-cell intersection and boundary-coning lemmas are sufficient for the finite common-refinement theorem. The B examples test orientations, subdivision necessity, the fixed-endpoint case, compactness in a non-locally-finite realization, and the ordinary-subdivision failure mode.

I found no missing local definition or further prerequisite pair in this 31-item route.

### Fatal current-plan dependency

The current direct path

`simplicial-subdivision-and-simplicial-approximation -> simplicial-complexes-and-simplicial-homology -> schur-multipliers-and-universal-central-extensions-examples`

makes a Group Theory B page the supplier for AT-1 and imports a mathematically unrelated 180-page closure with 37 A-to-B page edges. The Algebraic Topology design already states the exact repair in section 13.4: AT-1 must instead require the six A pages

- `subspaces-products-and-quotients`;
- `compactness-in-metric-spaces`;
- `homotopy-and-homotopy-equivalence`;
- `free-modules-and-exact-sequences`;
- `chain-complexes-and-homology`;
- `chain-homotopy-and-the-homotopy-category`.

An authorized plan writer must apply that patch. Until then the consumer's transitive closure is neither relevant nor admissible.

### Binding prose-scaffold drift

The AT-24 design lists 12 A and 5 B items, but the manifest needs 25 A and 6 B items. These 14 absent inventory entries are not padding. They close exact topology, carrier, boundary, relative, and common-refinement proof obligations:

- `lem-finite-simplicial-weak-topology-agrees-with-euclidean-topology`;
- `lem-barycentric-face-chains-triangulate-a-geometric-simplex`;
- `lem-an-augmented-simplicial-cone-has-an-explicit-chain-contraction`;
- `lem-simplicial-chain-maps-carried-by-specified-cones-are-chain-homotopic`;
- `lem-oriented-simplicial-subdivision-commutes-with-boundary`;
- `lem-last-vertex-map-is-carried-by-original-simplices`;
- `thm-finite-simplicial-approximation-for-maps-of-pairs`;
- `def-relative-derived-subdivision-of-a-finite-simplicial-pair`;
- `lem-relative-derived-subdivision-makes-the-fixed-subcomplex-full`;
- `lem-relative-subdivision-neighbourhood-adjustment`;
- `def-finite-convex-cell-complex-and-linear-subdivision`;
- `lem-intersections-of-finite-linear-complexes-form-a-convex-cell-complex`;
- `lem-finite-convex-cell-complexes-admit-compatible-triangulations`;
- B item `cex-ordinary-barycentric-subdivision-cannot-fix-a-nonconstant-simplicial-edge`.

The authorized prose-scaffold writer must add them in current manifest order and preserve their dependencies.

### Published proof defect and unfinished closure

Published `prop-a-finite-simplicial-complex-has-compact-hausdorff-realization`, proof step 2.2, chooses open `O_sigma` with `U intersection |sigma| = O_sigma intersection |sigma|` and asserts that the union of all `O_sigma` restricts to `U`. This is false because `O_sigma` may meet a different simplex outside `U`. The owned finite weak-topology lemma provides the correct finite closed-cover argument for later batch-7 uses, but a later proposed lemma does not repair the published supplier itself. Its owner must replace the invalid step and recheck consumers.

Batch-7 notes also say explicitly that only the named direct arguments—not all inherited topology proofs—were certified. After the AT-1 page repair removes the spurious closure, Beta 7 must record a proof-by-proof review of the remaining published closure. A graph pass or blanket reliance on published status is insufficient.

## Batch 8: classical affine varieties and rational maps

### Local mathematical spine

The 48 A items and one B item form a coherent local sequence. Empty zero loci and the zero coordinate ring are explicit. The Galois connection and both Nullstellensatz directions precede the irreducible/domain dictionary. Principal opens are handled before general regular functions and germs. The principal-open localization proof works in a reduced coordinate ring and uses an ideal-membership denominator certificate, so it does not cancel a zero divisor.

Morphisms are defined by pullback of regular functions before continuity and local pullback are proved. Functions on nonempty opens embed in the fraction field, which makes function fields independent of affine-open presentations. Rational-map equivalence is shown transitive; candidate domains, equality on dense overlaps, and morphism gluing precede the maximal-domain theorem. Dominant rational maps compose on nonempty preimages, so pullback is actually functorial before the field-embedding correspondence is claimed. The inverse construction clears finitely many denominators and proves density from injectivity, avoiding the deferred constructible-image theorem.

For nonaffine integral classical varieties, the finite compatible affine atlas is data rather than a gluing theorem. Common principal subopens give canonical chart-field comparisons and the cocycle law before the final birational equivalence. References such as “row 38” and “row 42” in the proof plans refer consistently to the binding design rows (recorded by `design_row`), not to post-insertion manifest positions; they are not defects. The single B item gives the authorized affine-line dictionary example.

I found no missing local theorem beyond the four already inserted support interfaces.

### Fatal page-level B suppliers

The current 68-page plan closure has these seven inadmissible edges:

- `prime-spectra-and-radicals -> localisation-of-modules-and-support-examples`;
- `localisation-of-modules-and-support -> noetherian-rings-and-hilbert-basis-examples`;
- `noetherian-rings-and-hilbert-basis -> modules-over-a-pid-and-canonical-forms-examples`;
- `noether-normalisation-and-nullstellensatz -> integral-extensions-and-going-up-examples`;
- `integral-extensions-and-going-up -> associated-primes-and-primary-decomposition-examples`;
- `associated-primes-and-primary-decomposition -> artinian-rings-and-length-examples`;
- `artinian-rings-and-length -> prime-spectra-and-radicals-examples`.

Commutative Algebra design section 11.3 already routes each repair: replace every B supplier by its A companion. One authorized plan writer must make all seven cutovers together and revalidate the resulting closure.

### Fatal forward Dependent Choice path

Owned item `lem-classical-affine-algebraic-set-finite-irreducible-components` directly uses published `cor-radical-ideals-as-intersections-of-minimal-primes-noetherian` at order 111.009. That corollary explicitly assumes and depends on `def-dependent-choice`, presently located later at order 120. `thm-lasker-noether-primary-decomposition` and `lem-noetherian-ring-maximal-element-annihilator-exists` have the same forward edge. In addition, `thm-equivalent-characterizations-of-noetherian-modules` says its ACC-to-maximal-condition implication uses DC while omitting DC from `deps`.

The exact repair is already recorded in Commutative Algebra design section 11.3: rehome the published DC definition immediately after `def-countable-choice` on order-18 `countability-and-uncountability`; replace its ill-typed dependency on the real-valued `def-sequence` by `def-function`; add the rehomed page to the Noetherian spine; and declare/acknowledge DC on the Noetherian-module characterization. Until that lands, item 18 and all uses of finite irreducible decomposition have a forward and underdeclared axiom dependency.

### Binding prose-scaffold drift and unfinished closure

The Algebraic Geometry binding inventory retains the original 44 A items, while the manifest correctly adds four support interfaces:

- `lem-classical-regular-functions-on-open-embed-in-function-field`;
- `lem-classical-dominant-rational-maps-compose`;
- `def-classical-integral-affine-atlas-and-chartwise-morphism`;
- `lem-classical-integral-affine-charts-have-canonical-common-function-field`.

All four are load-bearing in the final field-pullback and birational arguments. The authorized prose-scaffold writer must insert them in the current proof order; they cannot be removed merely to recover the stale count.

Batch-8 notes certify direct suppliers only and retain the larger transitive audit as a limitation. The present contract requires that audit. After the B-page and DC repairs make the path admissible, Beta 8 must check the exact published statements, hypotheses, directions, conventions, choice strength, and uses throughout the remaining closure and record concrete repairs.

## Sources and result dispositions

No source has a `source_resolution` drop or owner escalation in either batch.

For batch 7 I read the complete relevant passages in:

- Allen Hatcher, *Algebraic Topology*, §2.1 pp. 120–124, §2.C pp. 177–179, and Appendix Proposition A.1 p. 520, <https://pi.math.cornell.edu/~hatcher/AT/AT.pdf>. These support geometric/chain subdivision, mesh, star approximation, and weak-topology compact support.
- C. R. F. Maunder, *Algebraic Topology*, §2.5 through 2.5.20, pp. 45–56 (with the following applications consulted), and §4.3, pp. 119–120, <https://webhomes.maths.ed.ac.uk/~v1ranick/papers/maunder.pdf>. These support the absolute and relative approximation constructions and the separation from singular subdivision.
- E. C. Zeeman, “Relative simplicial approximation,” complete article pp. 39–43, <https://www.lms.ac.uk/sites/default/files/1964%20Relative%20simplicial%20approximation.pdf>. The theorem, fullness device, addendum, and counterexample confirm that fixing a positive-dimensional subcomplex needs relative treatment.
- C. P. Rourke and B. J. Sanderson, *Introduction to Piecewise-Linear Topology*, Chapter 2 pp. 13–16 and Appendix pp. 27–30, <https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rsplx.pdf>. These support intersection cells, compatible triangulation, and common refinement.

For batch 8 I read the complete relevant passages in:

- J. S. Milne, *Algebraic Geometry*, v6.10, §§2.10, 2.13–2.17, 2.27–2.32, 3.8–3.17, 3.24–3.26, 5.2–5.10, and 5.38–5.40, <https://www.jmilne.org/math/CourseNotes/AG.pdf>. Proposition 3.11 supports denominator clearing; Proposition 5.38 supports the field-map construction, while its later constructible-image step is deliberately replaced by the manifest's elementary density argument.
- D. Arapura, *Basic Algebraic Geometry*, §§1.2.5–1.6, 3.1–3.2, and the dominance paragraph/Lemma 4.1.2, <https://www.math.purdue.edu/~arapura/preprints/algeom.pdf>. This independently supports the affine dictionary, topology, morphism, atlas, and dominant field-pullback interfaces.

Every one of the 19 declined results was independently rechecked. All stand: deferred claims have existing later destinations and are unused locally; out-of-scope claims are genuine strengthenings or examples that supply no retained proof step. The current group scope ledger contains item-specific evidence and passes its check.

## Same-frontier dependencies

Neither consumer batch declares or implicitly uses a page or item supplied by another batch in `phase-2-wave-1`. Their plan defects point to already published pages, not same-frontier batches. The owned consumer inputs are therefore explicit empty arrays:

- `research/phase-2-wave-1-batch-7.cross-batch-dependencies.json`;
- `research/phase-2-wave-1-batch-8.cross-batch-dependencies.json`.

The unified frontier ledger was refreshed after writing them.

## Checks run

- `node tools/scope-decisions.mjs refresh --run phase-2-wave-1 --group f`: 19 current declines; the latest refresh initially produced 19 pending rows after concurrent plan hashes changed.
- `node tools/scope-decisions.mjs check --run phase-2-wave-1 --group f`: 19 current declines, 0 errors after resolving the refreshed rows.
- `node tools/manifest-deps.mjs research/phase-2-wave-1-batch-{1..15}.pages.json`: 434 items, 0 normalized, 0 errors.
- `node tools/validate-plan.mjs research/plan-spec.json`: exit 0; the declared plan is acyclic and mechanically consistent, with redundant-prerequisite advisories and 719 page-only entries whose item dependencies are not yet asserted.
- `node tools/extcheck.mjs`: exit 0; recorded-not-proved structure is valid. It reports 63 existing published warnings, none an assigned local proposed item.
- `node tools/source-fetch-check.mjs --coverage research/phase-2-wave-1-batch-7.coverage.json,research/phase-2-wave-1-batch-8.coverage.json --stamp`: 6/6 active sources fetch-verified, 6/6 resolved, 0 newly stamped.
- The same fetch command with `--stamp --force` on temporary copies was also attempted; all six fresh network requests returned temporary `EAI_AGAIN`. This was not treated as open-web absence or as a source drop. The repository's existing fetch stamps pass, and the complete texts above were independently opened and read.
- `node tools/coverage-checklist.mjs research/phase-2-wave-1-batch-7.coverage.json`: 49 harvested results, 0 errors, 0 warnings.
- `node tools/coverage-checklist.mjs research/phase-2-wave-1-batch-8.coverage.json`: 86 harvested results, 0 errors, 0 warnings.
- `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-wave-1`: refreshed and deduplicated.

## Handoff

Beta 7 owns the batch-7 evidence completion and any local scaffold response; Beta 8 owns the batch-8 evidence completion and recheck of finite irreducible components. One authorized shared writer must make the AT-1 and Commutative Algebra page cutovers, DC rehome/metadata correction, published finite-realization proof repair, and both prose-inventory synchronizations. No defect is waived by the protected-Phase-3 labels in the current notes. Re-run Step 3 only after those changes and a current transitive semantic audit are present.
