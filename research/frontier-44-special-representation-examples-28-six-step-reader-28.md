# Reader 28 — batch 28

Run: `frontier-44-special-representation-examples-28-six-step`. Independent reader review completed; the entries below retain the initial checkpoint and give the final disposition. This report is not a judge stamp.

## Opened assigned inventory

- `library/scheme-theory/compact-support-sheaf-calculus.md` (complete page).
- `library/scheme-theory/compact-support-sheaf-calculus-examples.md` (complete page).
- `items/def-support-of-a-sheaf-section.md` (complete authored carrier).
- `items/lem-sections-near-a-compact-set-are-sections-on-that-set.md` (complete authored carrier).
- `items/def-c-soft-sheaf.md` (complete authored carrier).
- `items/def-compactly-supported-global-sections.md` (complete authored carrier).
- `items/lem-c-soft-field-sheaves-are-compact-support-acyclic.md` (complete authored carrier).
- `items/lem-compact-support-calculus-of-extension-by-zero-and-closed-pushforward.md` (complete authored carrier).
- `items/lem-vanishing-compactly-supported-h1-on-opens-implies-c-soft.md` (complete authored carrier).
- `items/lem-compatible-refinement-for-tuple-indexed-coverings.md` (complete authored carrier).
- `items/lem-refinement-limit-cech-cohomology-agrees-with-sheaf-cohomology.md` (complete authored carrier).
- `items/lem-finite-polyhedral-covering-dimension-bounds-all-sheaf-cohomology.md` (complete authored carrier).
- `items/lem-finite-fibre-dimension-gives-bounded-fibrewise-soft-resolutions.md` (complete authored carrier).
- `items/ex-compact-support-and-softness-on-a-finite-discrete-space.md` (complete authored carrier).

## Defects recorded at the initial checkpoint (repaired below)

- Local-support compactness inference needs the compact containing set to lie in the domain.
- Compatible refinement: the union of closures is not contained in the intersection of the parent opens; a many-to-one refinement map does not bound bad-tuple counts; empty intersections need a convention.
- Compact-neighbourhood extension: local representatives and the induction agreement need their actual restriction domains.
- C-soft calculus: correct the lift sign; replace compactness of K intersect U by a support-controlled patch; prove arbitrary constant-vector tensor coefficients.
- Cech comparison: Godement stalks do not equal the original stalks; repair the exactness induction and boundary representative arguments.
- Finite discrete example: one finite cover does not prove compactness; extension by zero does not require a finite ambient set.

## Next action

The pending work described at the checkpoint has now been completed. The final repairs, checks, scoped verdicts and outside-scope owner follow-up are recorded below.

## Repair checkpoint

Completed carrier edits: support/domain compactness; abelian-group compact-set extension with corrected restriction domains; target of the c-soft restriction map; subgroup closure of compact sections; nonempty compatible intersections with an inner count/outer failing-value descent; the c-soft correction sign, compact annulus extension and arbitrary constant-vector tensors; the open-embedding compact annulus proof; Godement exactness and Cech boundary representative checks; explicit subdivision homeomorphisms; exact restriction along fibre inclusions; finite-space compactness and the sum-map adjunction. A-page summary now specifies all-open acyclicity and compact-support vanishing on opens. Validation and consumer checks were pending at this checkpoint; their completed results follow.

## Final mathematical repairs and evidence

| Carrier / exact location | Defect found and completed repair |
| --- | --- |
| `def-support-of-a-sheaf-section`, Definition after consistency fact 3 | Closedness in the local domain does not imply closedness in an arbitrary compact ambient superset. Restricted the sufficient compact-containment criterion to a compact subset of the section domain; retained the global-section criterion and gave the constant-section counterexample on `(0,1)` inside `[0,1]`. Added its Heine–Borel and constant-sheaf suppliers. The consistency facts now explicitly cover abelian sheaves, as their proofs already do. |
| `lem-sections-near-a-compact-set-are-sections-on-that-set`, Statement, steps 1.1, 1.4–1.6, 2.1 and 4.1 | The group-valued c-soft definition consumed a vector-only supplier. Extended the unchanged sheaf/compact-fusion argument to abelian groups, retaining linearity in the vector-space case. Fixed the domains of the zeta restrictions. The fusion induction now intersects each new domain with the neighbourhood on which its predecessor actually agrees with sigma, instead of claiming agreement throughout the new domain. Explicitly treated empty K and the zero/one-member disjoint families. |
| `def-c-soft-sheaf`, Definition consistency fact 1 | The compact-set neighbourhood colimit identifies the **target**, not the source, of the global-to-compact restriction map. Corrected that identification. |
| `def-compactly-supported-global-sections`, Definition before consistency fact 1 | Supplied the subgroup argument: zero/negation and the closed support of a sum inside the finite compact union. This closes the stated functor's well-definedness prerequisite. |
| `lem-compatible-refinement-for-tuple-indexed-coverings`, Statement and steps 3.1–7.1 | The original union of all relevant closures was not contained in the intersection of the parent opens. Replaced it by the intersection, over the required parent labels, of the corresponding finite unions of closures. A many-to-one beta map preserves compatibility but does not bound the number of bad tuples, so the old claim that no bad-tuple count increases was false. The corrected proof decreases the chosen count in an inner finite descent and the number of failing parent-value tuples in an outer finite descent. Empty intersections now impose no witness requirement: two disjoint nonempty parent opens with an empty covering index set on their intersection refute the old unqualified existential. The nonempty-intersection conclusion is preserved, and the sole direct Cech consumer now takes zero lifts on empty intersections. |
| `lem-c-soft-field-sheaves-are-compact-support-acyclic`, step 2.1 | If `b'-b_m=alpha(e)`, the corrected last lift is `b_m+alpha(e)`, not `b_m-alpha(e)`. Fixed the sign and cited c-softness where it is used. |
| Same carrier, step 2.2(iii) | `K intersect U` need not be compact. The proof now uses the compact support trace L in K, two relatively compact neighbourhoods of L inside U, and the compact sets `T=K intersect closure(W_1)` and `C=closure(W_1) minus W_0`. The prescribed section and zero agree on T intersect C; compact fusion, c-soft extension and cutoff give a global extension with compact support in U and the required germs on all of K. |
| Same carrier, step 2.3 and F6–F7 | The statement allowed an arbitrary constant vector space but the old proof only handled `k^r`. Kept the arbitrary-coefficient claim. Under the already assumed AC, choose a coefficient basis; the stalk tensor theorem gives finite coordinate expressions locally, compactness reduces the expressions near K to one finite set of basis coordinates, and those coefficient sections extend by c-softness. Added the actual stalk-tensor and basis suppliers and recorded this additional choice use. No assertion of arbitrary sheaf coproduct machinery is needed. |
| Same carrier, `sources.references` | Tag 0139 is the Stacks definition of enough injectives, not injectives being flasque. Corrected to Lemma 20.12.2, tag 09SX, whose proof refers to the representing-module argument in Lemma 20.8.1, tag 01EA. Corrected the Schapira locator's inaccurate mention of flasqueness in Proposition 11.2.2 and its unsupported claim of complete source-proof reading. |
| `lem-compact-support-calculus-of-extension-by-zero-and-closed-pushforward`, step 2.1, F6 and F10, Remarks | Replaced the same false compactness assertion for K intersect U by the compact trace/annulus construction, this time for an arbitrary c-soft sheaf on U. Added exact compact-fusion and compact-subset suppliers. The closed-embedding remark now names its actual uses: zero stalks outside Z and compactness of K intersect Z. Removed the inaccurate Verdier §1.1 page locator. |
| `lem-refinement-limit-cech-cohomology-agrees-with-sheaf-cohomology`, F10–F11 and steps 1.4–1.5, 2.1–2.2, 3.1–3.3, 4.2, Remarks | A Godement C^0 stalk is generally **not** the original stalk; replaced that false identification by the section formula `C^0(E)(W)=product(E_x)` and exactness of products under AC. Rebuilt the cokernel induction using the two exact rows and monic germ maps in the snake lemma. Made alternating tuple evaluation, finite ordering and empty zero lifts explicit. Boundary independence now handles coboundary changes after a common lifting refinement, including different refinement functions; supplied exactness at the middle Cech term and at degree zero. Distinguished the short exact Godement/total complexes from the original fixed-cover Cech complexes, which need not be right exact; step 4.2 explicitly passes to the cover on which its lift exists. Removed forward step references and recorded product-choice and AC-to-DC uses. |
| `lem-finite-polyhedral-covering-dimension-bounds-all-sheaf-cohomology`, F2 and step 3.2 | The canonical barycentric map definition only provided continuity; added the proved homeomorphism supplier before identifying each subdivided realization and its star cover with P. Replaced the vague local-compactness justification by the actual compact-neighbourhood definition. The all-sheaf dimension result and its compact-support consequence on opens are unchanged. |
| `lem-finite-fibre-dimension-gives-bounded-fibrewise-soft-resolutions`, F1, F5 and steps 3.1–4.1 | An open subset of a fibre need not be open in X. Supplied exactness of its inverse-image restriction from the stalk identification and stalkwise exactness, rather than invoking only open restriction in X. Added the continuity/closed-preimage supplier and made the d=0 identity resolution explicit. The field-linear resolution and the abelian version retain their respective all-sheaf hypotheses. |
| `ex-compact-support-and-softness-on-a-finite-discrete-space`, steps 2.1–2.2, 3.1 and Remarks | Exhibiting a finite singleton cover does not establish compactness. The proof now extracts a finite subcover from an arbitrary cover, and supplies Hausdorffness/local compactness before invoking c-softness. Wrote the adjunction map explicitly as the sum of component linear maps. Corrected the false claim that finite ambient cardinality is needed to define zero extension: the two actual finite-space uses are equality of product with direct sum and compact support of every global section. Clarified that the alternative exact-functor acyclicity argument adds no choice beyond supplied resolution data. Removed the inaccurate Verdier §1.1 page locator. |
| Assigned A-page, Objective and Around the main line | Specified tensoring with a constant vector-space coefficient sheaf, the **all-open** acyclicity characterization, and compact-support vanishing on opens. A sheaf being globally acyclic alone does not imply c-softness; the criterion requires every open. The prose no longer suggests that this page separately proved ordinary cohomology vanishing on every open subspace. |

`lem-vanishing-compactly-supported-h1-on-opens-implies-c-soft` required no carrier repair: its open/closed long exact sequence gives surjectivity onto every compact-set section, and its converse correctly uses open restriction followed by c-soft acyclicity. It was reviewed after its suppliers and remains present.

All affected entries in the assigned proof-contract JSON were updated. Current exact source quotes and proof-step inputs were regenerated using the repository tool for the eight changed proof-bearing carriers; definition boundary entries were updated directly. Incorrect contract claims about reverse implications, zero terms in arbitrary chosen resolutions and empty complementary pieces were corrected. Stale judge records were removed where present; no audit/judge stamps were added. Manifests, plan-spec, B-page prose, published carriers and other batches were not edited.

## Authoritative source checks

- [Stacks, tag 01AU](https://stacks.math.columbia.edu/tag/01AU), Lemma 17.5.2(1): support is closed in the section's domain. This confirms the domain distinction; it does not supply ambient closedness for a local section.
- [Stacks, tag 09UW](https://stacks.math.columbia.edu/tag/09UW), complete compatible-refinement proof: finite shrinking and a descent on failing value tuples. The local repair explicitly handles empty intersections and the many-to-one count issue.
- [Stacks, tag 09V2](https://stacks.math.columbia.edu/tag/09V2), complete comparison argument: refinement permits local cochain lifts; universal delta-functor uniqueness and compatibility with boundaries give the comparison.
- [Schapira, Categories and Sheaves](https://webusers.imj-prg.fr/~pierre.schapira/LectNotes/CatShv.pdf), Proposition 10.1.2(ii), printed p. 176; Definition 11.2.1 and Propositions 11.2.2, 11.2.5–11.2.9, printed pp. 207–208: compact-neighbourhood representation, c-softness, support control, exactness and the all-open criterion. The relevant displayed arguments were read; some later propositions defer proofs or leave exercises, so complete proofs of those claims are supplied by the local carriers rather than claimed as source reading.
- [Stacks, tag 09SX](https://stacks.math.columbia.edu/tag/09SX) and its complete proof target [tag 01EA](https://stacks.math.columbia.edu/tag/01EA): injective modules are flasque via extension-by-zero representing modules. [Tag 0139](https://stacks.math.columbia.edu/tag/0139) was opened to confirm the original locator was wrong.
- [Verdier, exposé 300](https://www.numdam.org/item/SB_1964-1966__9__337_0.pdf), §§1.1 and 1.4, PDF page index 4, and §4's concluding finite-polyhedron assertion: proper-support sections and the finite fibrewise-soft resolution pattern. The PDF text was read through the web extraction and the downloaded page via PyMuPDF. These are source statements, not a substitute for the local proofs.

## Opened supplier inventory

The following 107 external local carriers were opened at their needed Definition/Statement sections. Additional proof passages were opened for compact separation/finite choice, the stalk tensor identification, basis extension, barycentric homeomorphism and mesh, the ringed-module section adjunction at step 1.4, and the Godement/acyclic-resolution comparisons. This inventory does not claim a complete independent audit of every supplier proof or its recursive dependency closure.

- `items/cor-a-morphism-between-universal-delta-functors-is-determined-in-degree-zero.md` — needed interface opened.
- `items/cor-heine-borel-in-the-product-topology.md` — needed interface opened.
- `items/cor-the-long-exact-homology-sequence-is-natural.md` — needed interface opened.
- `items/cor-universal-delta-functors-extending-the-same-degree-zero-functor-are-uniquely-isomorphic.md` — needed interface opened.
- `items/def-acyclic-cover-for-sheaf.md` — needed interface opened.
- `items/def-acyclic-object-for-a-left-exact-functor.md` — needed interface opened.
- `items/def-additive-functor.md` — needed interface opened.
- `items/def-axiom-of-choice.md` — needed interface opened.
- `items/def-barycentric-subdivision-of-an-abstract-simplicial-complex.md` — needed interface opened.
- `items/def-canonical-barycentric-realization-map.md` — needed interface opened.
- `items/def-cech-cochain-complex-open-cover.md` — needed interface opened.
- `items/def-cech-cohomology-open-cover.md` — needed interface opened.
- `items/def-cohomological-delta-functor.md` — needed interface opened.
- `items/def-compact-space.md` — needed interface opened.
- `items/def-direct-image-sheaf.md` — needed interface opened.
- `items/def-direct-sum-of-a-family-of-modules.md` — needed interface opened.
- `items/def-exact-sequence-sheaves.md` — needed interface opened.
- `items/def-extension-by-zero-abelian-sheaf.md` — needed interface opened.
- `items/def-f-acyclic-resolution.md` — needed interface opened.
- `items/def-filtered-category-and-filtered-colimit.md` — needed interface opened.
- `items/def-flasque-sheaf.md` — needed interface opened.
- `items/def-geometric-realization-of-an-abstract-simplicial-complex.md` — needed interface opened.
- `items/def-germ-of-section.md` — needed interface opened.
- `items/def-global-cech-cohomology-directed-limit.md` — needed interface opened.
- `items/def-global-sections-functor-sheaves.md` — needed interface opened.
- `items/def-godement-resolution.md` — needed interface opened.
- `items/def-hausdorff-space.md` — needed interface opened.
- `items/def-injective-object.md` — needed interface opened.
- `items/def-interior-closure-boundary-top.md` — needed interface opened.
- `items/def-inverse-image-presheaf-and-sheaf.md` — needed interface opened.
- `items/def-left-exact-and-right-exact-functor.md` — needed interface opened.
- `items/def-locally-compact-space.md` — needed interface opened.
- `items/def-locally-finite-and-finite-dimensional-simplicial-complex.md` — needed interface opened.
- `items/def-metric-bounded-diameter.md` — needed interface opened.
- `items/def-morphism-of-presheaves.md` — needed interface opened.
- `items/def-normal-and-t4-spaces.md` — needed interface opened.
- `items/def-open-and-closed-stars-in-a-subdivision.md` — needed interface opened.
- `items/def-presheaf-on-topological-space.md` — needed interface opened.
- `items/def-presheaf-plus-construction.md` — needed interface opened.
- `items/def-refinement-open-cover.md` — needed interface opened.
- `items/def-restriction-sheaf-open-subspace.md` — needed interface opened.
- `items/def-right-derived-object-relative-to-injective-resolution-data.md` — needed interface opened.
- `items/def-section-restriction-and-global-section.md` — needed interface opened.
- `items/def-sheaf-cohomology-derived-global-sections.md` — needed interface opened.
- `items/def-sheaf-on-topological-space.md` — needed interface opened.
- `items/def-sheaf-tensor-product.md` — needed interface opened.
- `items/def-sheafification.md` — needed interface opened.
- `items/def-stalk-of-presheaf.md` — needed interface opened.
- `items/def-standard-topologies.md` — needed interface opened.
- `items/def-subspace-topology-top.md` — needed interface opened.
- `items/def-topological-space.md` — needed interface opened.
- `items/def-universal-delta-functor.md` — needed interface opened.
- `items/lem-a-morphism-has-a-comparison-extension-between-the-supplied-injective-resolutions.md` — needed interface opened.
- `items/lem-acyclic-rows-and-columns-of-cech-double-complex.md` — needed interface opened.
- `items/lem-cech-h0-global-sections.md` — needed interface opened.
- `items/lem-compactness-of-a-subspace-is-ambient.md` — needed interface opened.
- `items/lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions.md` — needed interface opened.
- `items/lem-direct-image-is-sheaf.md` — needed interface opened.
- `items/lem-equality-in-a-filtered-colimit-of-sets-is-eventual.md` — needed interface opened.
- `items/lem-extension-by-zero-short-exact-sequence.md` — needed interface opened.
- `items/lem-finite-choice.md` — needed interface opened.
- `items/lem-finite-simplicial-weak-topology-agrees-with-euclidean-topology.md` — needed interface opened.
- `items/lem-global-sections-left-exact.md` — needed interface opened.
- `items/lem-increasing-cech-complex-extends-to-alternating-tuples.md` — needed interface opened.
- `items/lem-injective-sheaves-flasque.md` — needed interface opened.
- `items/lem-mesh-of-iterated-simplicial-barycentric-subdivision-tends-to-zero.md` — needed interface opened.
- `items/lem-morphisms-from-the-constant-sheaf-are-global-sections.md` — needed interface opened.
- `items/lem-normality-via-shrinking.md` — needed interface opened.
- `items/lem-ringed-space-module-sheaves-enough-injectives.md` — needed interface opened.
- `items/lem-second-plus-construction-is-sheaf.md` — needed interface opened.
- `items/lem-section-zero-if-all-germs-zero.md` — needed interface opened.
- `items/lem-sheaf-section-over-empty-set-terminal.md` — needed interface opened.
- `items/lem-stalk-inverse-image-sheaf.md` — needed interface opened.
- `items/lem-stalk-tensor-product.md` — needed interface opened.
- `items/lem-t0-t1-and-hausdorff-are-hereditary.md` — needed interface opened.
- `items/prop-a-finite-simplicial-complex-has-compact-hausdorff-realization.md` — needed interface opened.
- `items/prop-a-natural-transformation-induces-natural-transformations-of-right-derived-functors.md` — needed interface opened.
- `items/prop-an-exact-functor-has-vanishing-positive-derived-functors.md` — needed interface opened.
- `items/prop-natural-transformations-of-base-functors-give-morphisms-of-derived-delta-functors.md` — needed interface opened.
- `items/thm-a-compact-hausdorff-space-is-regular-and-normal.md` — needed interface opened.
- `items/thm-abelian-sheaves-have-enough-injectives.md` — needed interface opened.
- `items/thm-acyclic-resolution-theorem-for-right-derived-functors.md` — needed interface opened.
- `items/thm-barycentric-subdivision-realizes-homeomorphically.md` — needed interface opened.
- `items/thm-cech-to-sheaf-cohomology-comparison.md` — needed interface opened.
- `items/thm-choice-implies-dependent-implies-countable-choice.md` — needed interface opened.
- `items/thm-closed-subspace-of-a-compact-space-is-compact.md` — needed interface opened.
- `items/thm-closure-characterisation-top.md` — needed interface opened.
- `items/thm-compact-subset-of-a-hausdorff-space-is-closed.md` — needed interface opened.
- `items/thm-continuity-characterisations-top.md` — needed interface opened.
- `items/thm-derived-functors-are-universal-delta-functors.md` — needed interface opened.
- `items/thm-effaceable-cohomological-delta-functors-are-universal.md` — needed interface opened.
- `items/thm-every-independent-set-extends-to-a-basis.md` — needed interface opened.
- `items/thm-exactness-of-sheaves-stalkwise.md` — needed interface opened.
- `items/thm-extension-by-zero-adjunction-exactness.md` — needed interface opened.
- `items/thm-flasque-sheaves-acyclic.md` — needed interface opened.
- `items/thm-godement-resolution-flasque.md` — needed interface opened.
- `items/thm-lebesgue-number-lemma.md` — needed interface opened.
- `items/thm-locally-compact-hausdorff-basics.md` — needed interface opened.
- `items/thm-long-exact-sequence-sheaf-cohomology.md` — needed interface opened.
- `items/thm-refinement-map-independent-on-cohomology.md` — needed interface opened.
- `items/thm-right-derived-functors-form-a-cohomological-delta-functor.md` — needed interface opened.
- `items/thm-right-derived-functors-from-two-supplied-injective-resolution-data-are-naturally-isomorphic.md` — needed interface opened.
- `items/thm-set-has-all-small-colimits.md` — needed interface opened.
- `items/thm-sheaf-morphism-isomorphism-stalkwise.md` — needed interface opened.
- `items/thm-sheafification-preserves-stalks.md` — needed interface opened.
- `items/thm-snake-lemma-in-an-abelian-category.md` — needed interface opened.
- `items/thm-zero-sheaf-cohomology-global-sections.md` — needed interface opened.

## Consumer maintenance

Every owned direct/indirect consumer was checked in the supplier-first substantive review described above. The support formula, global compact-support criterion, c-soft preservation/acyclicity results, Cech comparison, dimension bound and bounded-resolution conclusion are retained. The compact-section supplier's group extension preserves its old vector-space instance. The only qualification to the refinement statement concerns empty intersections, whose Cech components have the zero lift; its direct consumer was repaired explicitly.

The following 74 outside-batch consumer interfaces and their dependency bindings were opened in the impact closure (including justified-by bindings). This was a focused check of whether the repaired interfaces require consumer changes, not a full re-proof of all geometry, Hodge theory or representation theory. Indirect consumers retain their supplier conclusions and assumptions; no outside edit was made. A separate incidental defect noticed during this reading is recorded next.

- `items/def-derived-operations-on-analytic-sheaves-over-locally-compact-spaces.md` — original-use interface preserved by the batch repairs.
- `items/lem-analytic-six-operation-support-and-trace-calculus.md` — original-use interface preserved by the batch repairs.
- `items/thm-compactly-supported-derived-pushforward-has-exceptional-inverse-image-adjoint.md` — original-use interface preserved by the batch repairs.
- `items/thm-verdier-duality-on-oriented-stratified-complex-varieties.md` — original-use interface preserved by the batch repairs.
- `items/cor-quiver-full-flag-pushforwards-are-semisimple-in-characteristic-zero.md` — original-use interface preserved by the batch repairs.
- `items/ex-dualizing-and-closed-support-shifts-on-the-complex-line.md` — original-use interface preserved by the batch repairs.
- `items/lem-analytic-constructible-sheaves-admit-coherent-six-operations.md` — original-use interface preserved by the batch repairs.
- `items/lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports.md` — original-use interface preserved by the batch repairs.
- `items/lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model.md` — original-use interface preserved by the batch repairs.
- `items/thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace.md` — original-use interface preserved by the batch repairs.
- `items/thm-constructible-six-functors-proper-base-change-and-verdier-duality.md` — original-use interface preserved by the batch repairs.
- `items/def-equivariant-borel-moore-homology-and-correspondence-convolution.md` — original-use interface preserved by the batch repairs.
- `items/ex-a-point-and-projective-line-check-source-first-convolution-and-opposite-composition.md` — original-use interface preserved by the batch repairs.
- `items/ex-incidence-model-of-a-closed-interval.md` — original-use interface preserved by the batch repairs.
- `items/lem-affine-morphisms-have-one-sided-perverse-exactness.md` — original-use interface preserved by the batch repairs.
- `items/lem-artin-affine-vanishing-for-constructible-perverse-sheaves.md` — original-use interface preserved by the batch repairs.
- `items/lem-complex-stratified-morse-data-have-tangential-normal-product-and-link-description.md` — original-use interface preserved by the batch repairs.
- `items/lem-general-linear-stiefel-perverse-normalization-is-exact-and-conservative.md` — original-use interface preserved by the batch repairs.
- `items/lem-locally-trivial-acyclic-fibers-give-bounded-derived-pullback-equivalences.md` — original-use interface preserved by the batch repairs.
- `items/lem-noncharacteristic-complex-stratified-pullback-is-perverse-exact.md` — original-use interface preserved by the batch repairs.
- `items/lem-perverse-closed-support-splitting-is-equivalent-to-costalk-stalk-isomorphism.md` — original-use interface preserved by the batch repairs.
- `items/lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom.md` — original-use interface preserved by the batch repairs.
- `items/lem-projective-hodge-perverse-package-closes-under-defect-and-image-dimension-induction.md` — original-use interface preserved by the batch repairs.
- `items/lem-proper-surjective-maps-have-cohomological-descent-for-constructible-field-sheaves.md` — original-use interface preserved by the batch repairs.
- `items/lem-smooth-complex-pullback-is-exact-for-the-middle-perverse-t-structure.md` — original-use interface preserved by the batch repairs.
- `items/lem-smooth-flag-incidence-correspondences-have-the-required-oriented-push-pull-calculus.md` — original-use interface preserved by the batch repairs.
- `items/lem-smooth-projective-morphisms-give-polarizable-rational-gauss-manin-variations.md` — original-use interface preserved by the batch repairs.
- `items/lem-universal-hyperplane-relative-weak-lefschetz-and-maximal-pullback-subobjects.md` — original-use interface preserved by the batch repairs.
- `items/thm-constructible-sheaves-admit-finite-stratified-triangulations-and-finite-local-cohomology.md` — original-use interface preserved by the batch repairs.
- `items/thm-equivariant-constructible-ext-is-degreewise-finite-and-compatible-with-characteristic-zero-scalars.md` — original-use interface preserved by the batch repairs.
- `items/thm-fixed-part-for-geometric-polarizable-variations-on-smooth-algebraic-bases.md` — original-use interface preserved by the batch repairs.
- `items/thm-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes.md` — original-use interface preserved by the batch repairs.
- `items/thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes.md` — original-use interface preserved by the batch repairs.
- `items/thm-projective-pushforward-of-smooth-constant-sheaves-has-semisimple-perverse-cohomology.md` — original-use interface preserved by the batch repairs.
- `items/thm-proper-hypercovers-compute-constructible-derived-cohomology.md` — original-use interface preserved by the batch repairs.
- `items/thm-proper-pushforward-ext-is-equivariant-borel-moore-homology-of-the-fiber-product.md` — original-use interface preserved by the batch repairs.
- `items/thm-quiver-flag-convolution-generators-satisfy-the-signed-klr-relations.md` — original-use interface preserved by the batch repairs.
- `items/thm-quiver-flag-relative-position-strata-give-a-faithful-geometric-pbw-basis.md` — original-use interface preserved by the batch repairs.
- `items/thm-relative-hard-lefschetz-and-perverse-splitting-for-projective-algebraic-maps.md` — original-use interface preserved by the batch repairs.
- `items/thm-self-dual-indecomposable-klr-projectives-give-the-negative-half-lower-global-basis.md` — original-use interface preserved by the batch repairs.
- `items/thm-verdier-duality-identification-intertwines-yoneda-product-and-convolution.md` — original-use interface preserved by the batch repairs.
- `items/def-geometric-polarizable-hodge-variation.md` — original-use interface preserved by the batch repairs.
- `items/def-quiver-full-flag-incidence-varieties-and-geometric-klr-generators.md` — original-use interface preserved by the batch repairs.
- `items/ex-a-nodal-projective-curve-has-a-weight-zero-cohomology-class.md` — original-use interface preserved by the batch repairs.
- `items/ex-equal-color-quiver-flag-correspondence-is-nilhecke.md` — original-use interface preserved by the batch repairs.
- `items/ex-equivariant-constructible-ext-on-a-point-is-degreewise-finite-not-total-finite.md` — original-use interface preserved by the batch repairs.
- `items/ex-hypercover-total-degree-uses-only-a-finite-matching-truncation.md` — original-use interface preserved by the batch repairs.
- `items/ex-projective-perverse-decomposition-for-projective-space-to-a-point.md` — original-use interface preserved by the batch repairs.
- `items/ex-proper-cech-descent-does-not-require-acyclic-fibers.md` — original-use interface preserved by the batch repairs.
- `items/ex-signed-two-direction-multiedge-quiver-flag-crossing.md` — original-use interface preserved by the batch repairs.
- `items/ex-unequal-dimensional-proper-pushforwards-have-the-summed-dimension-ext-bm-shift.md` — original-use interface preserved by the batch repairs.
- `items/lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom.md` — original-use interface preserved by the batch repairs.
- `items/lem-cyclotomic-extension-of-scalars-respects-the-based-quotient.md` — original-use interface preserved by the batch repairs.
- `items/thm-proper-cohomology-has-functorial-mixed-hodge-weights-at-most-degree.md` — original-use interface preserved by the batch repairs.
- `items/thm-self-dual-indecomposable-cyclotomic-klr-projectives-give-the-lower-global-basis.md` — original-use interface preserved by the batch repairs.
- `items/thm-signed-klr-algebra-is-the-equivariant-ext-algebra-of-quiver-flag-complexes.md` — original-use interface preserved by the batch repairs.
- `items/thm-smooth-projective-gauss-manin-local-systems-are-semisimple.md` — original-use interface preserved by the batch repairs.
- `items/def-equivariant-constructible-derived-category-for-complex-algebraic-varieties.md` — original-use interface preserved by the batch repairs.
- `items/ex-cyclic-etale-covers-give-geometric-semisimple-weight-zero-monodromy.md` — original-use interface preserved by the batch repairs.
- `items/prop-qg8-categorification-transports-across-the-hecke-klr-bridge.md` — original-use interface preserved by the batch repairs.
- `items/thm-ariki-canonical-basis-theorem-in-characteristic-zero.md` — original-use interface preserved by the batch repairs.
- `items/thm-mixed-hodge-weights-control-proper-cohomological-restriction-images.md` — original-use interface preserved by the batch repairs.
- `items/thm-self-dual-simple-cyclotomic-klr-modules-give-the-upper-global-basis.md` — original-use interface preserved by the batch repairs.
- `items/cor-graded-specht-classes-form-a-basis-of-the-module-grothendieck-group.md` — original-use interface preserved by the batch repairs.
- `items/def-graded-adjustment-polynomials-in-positive-characteristic.md` — original-use interface preserved by the batch repairs.
- `items/ex-projective-versus-simple-grothendieck-classes-in-a-small-block.md` — original-use interface preserved by the batch repairs.
- `items/lem-reduction-of-characteristic-zero-simple-modules-modulo-p.md` — original-use interface preserved by the batch repairs.
- `items/rem-canonical-bases-do-not-solve-arbitrary-positive-characteristic-decomposition-numbers.md` — original-use interface preserved by the batch repairs.
- `items/thm-graded-decomposition-numbers-equal-canonical-basis-coefficients-in-characteristic-zero.md` — original-use interface preserved by the batch repairs.
- `items/thm-graded-specht-classes-realize-standard-fock-vectors.md` — original-use interface preserved by the batch repairs.
- `items/thm-graded-specht-heads-classify-the-graded-simple-modules.md` — original-use interface preserved by the batch repairs.
- `items/cex-specializing-v-to-one-forgets-graded-decomposition-information.md` — original-use interface preserved by the batch repairs.
- `items/lem-positive-characteristic-specht-head-and-cyclotomic-crystal-labels-agree.md` — original-use interface preserved by the batch repairs.
- `items/thm-positive-characteristic-decomposition-polynomials-factor-through-adjustment.md` — original-use interface preserved by the batch repairs.

## Uneditable incidental downstream defect — owner follow-up outside routing scope

- **Subject:** `def-equivariant-constructible-derived-category-for-complex-algebraic-varieties`, draft carrier owned by current-run batch 37.
- **Exact location:** Definition, “The action nerve”, lines 61–64, especially the assertion that `q_p(g_1,...,g_p,x)=g_1...g_p x` augments the action nerve over the constant simplicial space X. Line 54 defines `d_0(g,x)=x`.
- **Class/severity:** confirmed false claim in a definition; fatal to the asserted augmentation.
- **Evidence:** already in simplicial degree 1, compatibility would require `q_0 d_0=q_1`. For the allowed action of `G=GL_1(C)` on `X=C^*` by multiplication, with `g=2` and `x=1`, the left side is 1 and the right side is 2. Thus these maps do not define that augmentation. The same paragraph reverses simplicial-operator variance: an operator `[p]->[m]` gives `Z_m->Z_p`, not the stated `Z_p->Z_m`; the printed composition equation is also ill-typed in that convention.
- **Smallest required repair:** remove the unneeded augmentation assertion or provide a different correctly defined augmented nerve with its compatibility proof; fix the operator variance. Then check the producer's actual consumers for use of this augmentation. Do not infer that the entire equivariant-category construction is false merely from this additional assertion.
- **Observed bytes:** raw SHA-256 at the explicit line inspection was `1ac45a7ea9d9f99b4853d96c0e00e673ddd270b2d8a7b982eab0ae95b31afff4`.
- **Why no JSON finding:** this is an outside-batch downstream consumer, not an assigned carrier or a supplier reached by an assigned batch-28 consumer. The reader split's allowed set in `tools/step3-scope.mjs` lines 768–787 does not admit it. No false assigned-consumer binding or published status is supplied. The defect is retained here for the lead/owner; it was not edited or silently declared resolved.

## Validation and page verdicts

- Ran `node tools/tsx-run.mjs tools/reflow.mts items/<id>.md` and `node tools/tsx-run.mjs tools/precheck.mts items/<id>.md` for each of the 11 changed items. Every final invocation exited 0. Eight proof-bearing carriers passed; the three definitions had zero applicable phase proofs and zero failures. Reflow changed line wrapping only in the open/closed calculus, the discrete example and the fibre-resolution carrier; their final checks followed that reflow.
- Ran `node tools/proof-contract.mjs research/frontier-44-special-representation-examples-28-six-step-batch-28.proof-contracts.json --items <all 11 changed IDs> --strict --json`. The final result was `ok: true`, with no errors or warnings. An initial contract check caught five newly written boundary explanations lacking step/statement anchors; those contract-only anchors were corrected and the check passed.
- After the final item edits and formatters, ran exactly one batched `node tools/proof-layout.mjs` command on all changed paths (listed below). It exited 0: **11 items, 79 steps, 0 defects**. Contract/report edits afterwards did not change any item bytes.

```bash
node tools/proof-layout.mjs items/def-support-of-a-sheaf-section.md items/lem-sections-near-a-compact-set-are-sections-on-that-set.md items/lem-compatible-refinement-for-tuple-indexed-coverings.md items/def-c-soft-sheaf.md items/def-compactly-supported-global-sections.md items/lem-refinement-limit-cech-cohomology-agrees-with-sheaf-cohomology.md items/lem-c-soft-field-sheaves-are-compact-support-acyclic.md items/lem-compact-support-calculus-of-extension-by-zero-and-closed-pushforward.md items/ex-compact-support-and-softness-on-a-finite-discrete-space.md items/lem-finite-polyhedral-covering-dimension-bounds-all-sheaf-cohomology.md items/lem-finite-fibre-dimension-gives-bounded-fibrewise-soft-resolutions.md
```

| Assigned page | Reader verdict |
| --- | --- |
| `compact-support-sheaf-calculus` (A) | No unresolved assigned mathematical defect after the listed repairs, under the stated locally compact Hausdorff/AC hypotheses. The compact/support distinctions, group-valued supplier, Cech boundary argument and tensor proof are now explicit. A-page summary repaired. Ready for the separate lead review; this is no self-awarded audit. |
| `compact-support-sheaf-calculus-examples` (B) | Its sole example and its summary are consistent after the example repairs. No B-page prose edit was made. Empty/one-point cases, the finite compactness argument and the sum-map adjunction were checked. Ready for the separate lead review. |

## Coverage limits and handoff

There is no remaining blocker within the assigned batch and no proposed withdrawal. The 12 assigned carriers and both assigned pages were opened and reviewed. Supplier interfaces were used as proved local prerequisites, with targeted source/proof checks as inventoried, rather than an exhaustive audit of the published library. The first root-item inspection occurred before the supplier-interface reads; substantive acceptance of their uses and the consumer repairs followed those checks, so strict first-open dependency order is not claimed. The outside consumer sweep checked preserved interfaces, not their entire independent constructions.

The web PDF screenshot attempt failed and `pdftotext` was unavailable; the needed Verdier page was subsequently read from the fetched PDF using the available PyMuPDF reader. No unread book section is claimed as proof evidence. The unrelated batch-37 augmentation defect remains an explicit owner follow-up outside this dispatch's routable closure. The JSON findings array is empty for the licensed assigned/dependency scope; it must not be read as an assertion that the whole current frontier is defect-free.

## Operational evidence opened

- `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md` and `briefs/reader.md`.
- `research/frontier-44-special-representation-examples-28-six-step-batch-28.pages.json` — assigned inventory/prerequisites, treated as evidence rather than a mathematical verdict.
- `research/frontier-44-special-representation-examples-28-six-step-batch-28.proof-contracts.json` — current citation, derivation and boundary entries, then the affected entries after repair.
- `.autopilot/frontier-44-special-representation-examples-28-six-step/state.json` — identified the actual run at stage `3a-read`; no RESUME-file claim or engine transition was used.

The manuscript edits and contracts remain draft. No publish, push, commit, gate transition or independent-review stamp was performed.
