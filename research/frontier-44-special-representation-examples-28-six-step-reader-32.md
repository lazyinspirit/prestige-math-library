# Reader 32 — batch 32

Run: `frontier-44-special-representation-examples-28-six-step`.

## Result and page verdicts

All three assigned items and both assigned pages were opened and reviewed.
Three items, A-page prose and the batch proof contracts were repaired. No
published content, another batch's carrier, B-page prose, plan or manifest was
edited. No judge or audit stamp was added; no stale `verification.judge` was
present in the assigned carriers.

- **`constructible-incidence-and-cochain-models` (A): repaired, with a remaining
  prerequisite hold on the algebraic-constructibility restriction of the Čech
  lemma.** Its incidence models and topological descent arguments were checked
  and repaired. The outside smooth-stratification supplier still needs the
  analytic-connectedness comparison described below. The A-page summary now
  specifies constructible base objects and the unnormalized spectral first page.
- **`constructible-incidence-and-cochain-models-examples` (B): reviewed;
  no remaining defect found in its interval computation or summary.** The
  endpoint/edge diagram, two invertible coordinate changes, constant-sheaf
  calculation and extension-by-zero calculation agree. Its item consumes the
  incidence lemma, not the Čech lemma's algebraic restriction. B prose was left
  unchanged.

These are reader dispositions, not judge verdicts or publication certificates.

## Assigned inventory

Pages:

- `library/algebraic-geometry/constructible-incidence-and-cochain-models.md`
- `library/algebraic-geometry/constructible-incidence-and-cochain-models-examples.md`

Items:

- `items/lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent.md`
- `items/lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model.md`
- `items/ex-incidence-model-of-a-closed-interval.md`

Read the batch page manifest, proof contracts and relevant dependency records,
plus `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md` and `briefs/reader.md`.
The current carriers, rather than author strategies or acceptance records,
controlled the mathematical review. There was no rendered evidence bundle
identified for this dispatch; source carriers and exact supplier sections were
used. Initial supplier interfaces were opened before completing their consumers;
additional targets were opened where proof tracing required them.

## Repairs and evidence

### Čech lemma

- **Statement:** separated the normalized model from the unnormalized first
  page `R^j q_{p*}F_p`. The normalized first page is its normalization, not the
  same individual terms. A constant point diagram already distinguishes them:
  the unnormalized degree-zero row is `k` at every simplicial level, while
  normalization vanishes in positive simplicial degree. Clarified the
  separated finite-type complex domain, Zariski-local bundle convention and
  levelwise constructibility condition; the descent claim is retained.
- **Facts F1/F3/F5/F8:** made product structure maps and total signs explicit;
  corrected chain maps to homotopy classes; added the generic bounded-below
  replacement and finite smooth partition suppliers. The definition of
  constructibility alone supplies neither replacements nor refinement.
- **Old 1.2 / current 1.2:** evaluated coinduced terms are finite products of
  direct images of injectives. Arbitrary injectives are retracts of products
  of such terms, so evaluation really preserves injectivity. This closes the
  unproved input used by the original double-complex calculation.
- **Old 2.1 / current 2.1:** the augmentation of standard-simplex cochains is
  the constant tuple in degree zero, not an identity tuple in degree `p`.
  Wrote the vertex-insertion contraction explicitly. Horizontal augmented
  exactness is distinguished from an assertion about higher derived functors
  on arbitrary complexes.
- **Current 3.1:** proved normalization locally. The successive complexes
  `T_r`, imposing the first `r` codegeneracy kernels, have quotient contraction
  `(-1)^r s^r`. Degreewise stabilization proves the quasi-isomorphism, and
  explicit idempotent projections prove exactness of normalization.
- **Old 3.1 / current 4.1:** used the signed total and filtration by simplicial
  degree for the stated first page; kept the uniform internal lower bound.
  Explained why a levelwise injective model gives the same total object.
- **Composition / current 5.1:** both right adjoints preserve injectives because
  their left adjoints are exact, so one injective replacement computes both
  derived composites. Bisimplicial finite diagonals and signs are explicit.
- **Old 3.2 / current 5.2:** the original extra-insertion operators did not
  act on an arbitrary simplicial injective replacement, and its degeneracy
  identities were mistyped. Resolve in the enlarged diagram containing the
  augmentation and insertion maps, then contract that derived total. The
  unit is an isomorphism for a bounded complex; positive derived-functor
  vanishing is asserted for a sheaf, not for a shifted complex.
- **Old 4.1 / current 2.2 and 6.1:** local descended sheaves are `s_i^{-1}F_0`
  on the base, not `F_0|_V` treated as a sheaf there. Pullbacks along pairs of
  sections construct transition maps, degree-two identities give the cocycle,
  and truncation/cone induction gives derived essential surjectivity.
- **Old 5.1 / current 7.1:** replaced the unsupported claim that constructibility
  is checked on a finite algebraic cover “by the definition” with an explicit
  inverse-image partition and global finite-refinement construction. The
  supplier's missing analytic-connectedness justification remains routed below.
  Transition maps of constructible field sheaves are sheaf morphisms; they
  are not asserted to be algebraic functions.

### Incidence lemma

- **Given / carrier step:** explicitly excluded the empty simplex from the
  retained poset. An empty face has no point or barycentre in the realization;
  including it would destroy full faithfulness. The empty retained realization
  is treated separately in current 3.2.
- **F6 / 1.3:** local-system triviality is not proved by the cited definition.
  Added finite path subdivisions and homotopy-square cancellation, with
  compact-box and Lebesgue-number suppliers. Also established locally constant
  incidence matrices and transitivity using the same ambient germ representative.
- **1.2, 1.5, old 2.2/current 2.2, old 3.1/current 2.4:** replaced arguments
  based solely on matching stalk values with actual inverse-image or adjunction
  morphisms and then the stalkwise isomorphism criterion. Closed-cell terms are
  proved acyclic, not asserted injective or c-soft among all analytic sheaves.
- **1.6 / F16:** added the proved injective tensor/internal-Hom model and exact
  filtered-colimit supplier. Explained why derived sections of internal Hom
  give derived morphisms on each open; this does not identify internal Hom
  with Hom of stalks.
- **Old 4.1/current 3.2 and old 5.1/current 4.2:** justified the bounded-complex
  acyclic comparison and computed the derived carrier unit on principal opens
  of the Alexandrov poset, where evaluation is exact. No equality of arbitrary
  sections with cohomology sheaves is asserted.
- **Product Statement and old 4.2/5.3, current 4.1/5.1:** the base object is
  explicitly bounded constructible. The original calculation collapsed its
  internal degrees to a degree-zero vector space and treated whole open stars
  as an analytic neighbourhood basis. Compute the direct image termwise using
  support products, small ambient Euclidean balls, stalk colimits and the
  acyclic-resolution comparison. The resulting total is the full base complex
  tensored with the fibre cochain model. The adjunction unit is the actual
  tensor of the two augmentations. Empty fibres are included.
- **Old 6.2/current 6.1:** positive fibre cohomology vanishing alone does not
  imply the cone bound. Require the augmentation to identify `k` with
  `H^0(F;k)` as well. For a two-point fibre and base `k`, the cone otherwise has
  a nonzero degree-zero cokernel. The product comparison itself still applies
  to disconnected and empty fibres.
- **Old 6.1/7.1, current 5.2/6.2:** finite-dimensionality belongs to the finite
  diagram Hom model, not the analytic injective replacement. Full faithfulness
  transports that finite model to actual derived Hom.
- **Old 7.3/current 6.4:** the intersections of a ball with a whole star need
  not be convex. Only its intersections with closed support cells and principal
  stars inside a closed cell are used. Actual restriction maps identify the
  local finite Hom models. Mapping their classes to the cohomology sheaf proves
  local constancy, beyond equality of stalk dimensions. Uniform finite ranges
  and coefficient extension then give current 7.1.

### Interval example and A page

- **Given:** `K` denotes the full simplex with the listed nonempty faces, and
  `V_e` is the stalk at the midpoint `b_e`, not a stalk at a simplex considered
  as an abstract face.
- **Verification 2.1:** replaced undefined `C` in the contractible identity
  summand by `V_e`. In coordinates `t=w-u_1v_1` and target
  `(first-second,second)`, the differential is `(u_1v_1-u_0v_0,t)`.
  Multiplying the **first** target coordinate by `-1` gives the stated
  difference map; the original “last coordinate” assertion was inaccurate.
- **A-page objective:** reflects the product's constructible base condition and
  the unnormalized first page. B prose already states the correct computation.

Updated all affected derivations, exact citation uses and boundary entries in
`research/frontier-44-special-representation-examples-28-six-step-batch-32.proof-contracts.json`.
Refreshed its stale compact-support-definition quotation to current supplier
text. Six already existing suppliers were added to carrier `deps`: bounded-below
replacement, finite smooth partition, derived tensor/Hom, exact filtered colimits,
compact Euclidean boxes and Lebesgue numbers. No new item was created.

## Sources actually consulted

- [Goresky, *Lecture Notes on Sheaves and Perverse Sheaves*](https://www.math.ias.edu/~goresky/pdf/all2.pdf):
  §§2.1–2.3 (simplicial sheaves and incidence cochains), §2.5 (elementary
  injectives/projectives), §32.2 (PDF pp. 130–132, derived incidence equivalence
  and canonical finite models). The deleted-boundary and product arguments
  were checked locally, not inferred from an assertion that arbitrary maps are simplicial.
- [Bernstein–Lunts, Part I](https://www.math.tau.ac.il/~bernstei/Publication_list/publication_texts/luntz_ESF/3-derived-category-and-functors.pdf):
  §1.9.2–1.9.4 and Appendix B1–B6 (PDF pp. 31–32 for the locally split
  free-action simplicial model). Their acyclic-space convention includes a
  nonempty connected fibre, consistent with the corrected cone estimate.
- [Stacks Project §85.2](https://stacks.math.columbia.edu/tag/09VK),
  Lemmas 85.2.5–85.2.6: exact left adjoint to evaluation and levelwise
  injectivity. [§85.9](https://stacks.math.columbia.edu/tag/0D9A), Lemmas
  85.9.2–85.9.3: exact augmented rows for injectives and the unnormalized
  first-page formula. Complete displayed relevant arguments were read.
- [Stacks Project §14.25](https://stacks.math.columbia.edu/tag/019H), Lemma
  14.25.1: exact normalization and its quasi-isomorphism; read its dual
  references [14.23.8](https://stacks.math.columbia.edu/tag/019B) and
  [14.23.9](https://stacks.math.columbia.edu/tag/019C). The carrier contains its
  own explicit quotient contractions rather than an external-proof fallback.
- [Gallier–Shatz, *Complex Algebraic Geometry*](https://www.cis.upenn.edu/~jean/calgeom.pdf),
  Theorem 1.45, pp. 66–69: a complex algebraic variety is Zariski connected
  exactly when analytically connected. Read the complete relevant argument
  and Lemma 1.46. Its proof reduces to an affine finite covering and uses
  holomorphic coefficient extension and growth; it is a substantive comparison,
  not a consequence of local coordinate charts.

Browser retrieval of the first two PDFs timed out. Direct retrieval succeeded;
PyMuPDF text extraction was used, and relevant complete sections were read.
No claim is made to have read any of these books in full.

## Uneditable prerequisite and blocker

Subject: `lem-complex-algebraic-morphisms-admit-compatible-finite-smooth-stratifications`,
current-run **batch 33**, page `complex-algebraic-stratified-topology`.
Consumer: `lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent`,
F8 and proof 7.1.

**Location:** supplier Statement lines 39–42 and proof 1.1, 3.1–5.1
(lines 68, 72–76). The emitted pieces are smooth and algebraically irreducible.
The connected analytic-stratum convention in
`def-analytic-topology-and-finite-smooth-algebraic-stratifications`, Definition
(c), requires analytic connectedness. The supplier's dimension induction proves
algebraic irreducibility and frontier compatibility; its final paragraph proves
local holomorphic charts and submersion. It supplies no comparison of Zariski
and analytic connectedness, and none is in its declared dependency list.
Local manifold charts do not establish global connectedness.

**Needed repair:** prove, or cite a proved local supplier for, the implication
that an irreducible smooth finite-type complex variety is analytically connected;
then apply it to every emitted piece. Gallier–Shatz Theorem 1.45 gives an exact
source route, but the external citation cannot replace the required local proof.
The theorem itself is true; the defect is the missing prerequisite justification.
This is **fatal under the dispatch's nontrivial-prerequisite rule**, because it
leaves the algebraic-constructibility restriction unclosed. It does not challenge
the topological Cartesian-descent or interval calculations. The item remains
present for the Step 3b lead. The supplier was not edited.

Observed current raw SHA-256:
`f45db009c27ec039c7303c73c6ea923c0ea3284b44fe215b58c2e0c21210acf0`.
The finding binds current observed bytes, not an unobserved pre-reader baseline.

## Supplier inventory and depth

The following 63 supplier/context items were opened. Statements or
Definitions were checked throughout. Complete relevant proofs were also read
for the finite bar models, field-sheaf injective models, singular/constant-sheaf
comparison, compact-support extension calculus, bounded-below replacements,
derived tensor/Hom, finite algebraic partitions, compatible Whitney refinement,
constant-sheaf description and Lebesgue numbers. Other foundational interfaces
were used as the cited local suppliers; this was not an independent audit of
all their transitive proofs.

- `cor-kunneth-over-a-field`
- `def-algebraically-constructible-complex-of-analytic-field-sheaves`
- `def-analytic-topology-and-finite-smooth-algebraic-stratifications`
- `def-axiom-of-choice`
- `def-canonical-truncation-of-a-complex`
- `def-cochain-complex-in-an-abelian-category`
- `def-compactly-supported-global-sections`
- `def-derived-category-of-an-abelian-category`
- `def-derived-hom-in-the-bounded-setting`
- `def-direct-image-sheaf`
- `def-direct-sum-total-complex-of-a-double-complex`
- `def-extension-by-zero-abelian-sheaf`
- `def-geometric-realization-of-an-abstract-simplicial-complex`
- `def-homotopically-injective-bounded-below-complex`
- `def-homotopically-projective-bounded-above-complex`
- `def-inverse-image-presheaf-and-sheaf`
- `def-locally-constant-sheaf-of-finite-rank`
- `def-module-on-ringed-space`
- `def-presheaf-of-groups-rings-modules`
- `def-presheaf-on-topological-space`
- `def-restriction-sheaf-open-subspace`
- `def-sheaf-cohomology-derived-global-sections`
- `def-sheaf-hom`
- `def-sheaf-on-topological-space`
- `def-simplicial-subcomplex-star-closure-and-link`
- `def-stalk-of-presheaf`
- `lem-bounded-analytic-field-sheaves-have-derived-tensor-hom-and-pullback-pushforward-adjunctions`
- `lem-bounded-below-complexes-admit-injective-replacements`
- `lem-c-soft-field-sheaves-are-compact-support-acyclic`
- `lem-closed-immersion-preserves-sheaf-cohomology`
- `lem-compact-support-calculus-of-extension-by-zero-and-closed-pushforward`
- `lem-complex-algebraic-morphisms-admit-compatible-finite-smooth-stratifications`
- `lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions`
- `lem-direct-image-is-sheaf`
- `lem-field-module-sheaves-have-injective-derived-models`
- `lem-filtered-colimits-of-abelian-groups-are-exact`
- `lem-finite-poset-diagrams-have-bounded-finite-bar-models`
- `lem-locally-contractible-metric-spaces-have-singular-constant-sheaf-cohomology`
- `lem-sheaf-cohomology-classes-as-derived-morphisms`
- `lem-sheaf-supported-on-a-closed-subset-is-a-pushforward`
- `lem-stalk-inverse-image-sheaf`
- `lem-the-total-differential-squares-to-zero`
- `prop-a-finite-simplicial-complex-has-compact-hausdorff-realization`
- `prop-bounded-derived-localizations-embed-fully-faithfully`
- `prop-morphisms-from-a-homotopically-projective-complex-need-no-roof`
- `prop-morphisms-into-a-homotopically-injective-complex-need-no-roof`
- `thm-a-bounded-above-complex-of-projectives-is-homotopically-projective`
- `thm-a-bounded-below-complex-of-injectives-is-homotopically-injective`
- `thm-a-coproduct-of-projectives-is-projective-and-a-product-of-injectives-is-injective`
- `thm-abelian-sheaves-form-abelian-category`
- `thm-acyclic-resolution-theorem-for-right-derived-functors`
- `thm-canonical-truncations-fit-a-distinguished-triangle`
- `thm-choice-implies-dependent-implies-countable-choice`
- `thm-complex-algebraic-varieties-and-maps-admit-compatible-finite-stratifications`
- `thm-exactness-of-sheaves-stalkwise`
- `thm-extension-by-zero-adjunction-exactness`
- `thm-heine-borel-rn`
- `thm-injective-complexes-model-the-bounded-below-derived-category`
- `thm-inverse-direct-image-adjunction`
- `thm-lebesgue-number-lemma`
- `thm-sheaf-morphism-isomorphism-stalkwise`
- `thm-the-cohomological-filtered-complex-construction`
- `thm-the-derived-category-inherits-a-triangulated-structure`

## Changed-Statement consumer checks

The union of old/current dependency and `justified_by` closures has 71
consumers (the root aliases are empty). Opened their Statements/Definitions or
Examples and checked the interfaces affected by the two Statement clarifications;
read the supplier-use paragraphs of all 14 direct consumers. This is focused
consumer maintenance, not a complete new proof audit of those outside items.

The incidence consumers use bounded constructible coefficients or explicitly
supplied finite models. The acyclic-fibre lemma already states the necessary
`H^0(F;k)=k` and nonempty connected-fibre conditions, so its cone conclusion
survives. Equivariant consumers use locally split principal-bundle Čech nerves
and finite-type complex algebraic data. Proper Čech and hypercover consumers
use the general finite-diagonal total construction, with the unnormalized
spectral sequence where its full first page is written; they do not replace
proper descent by local-section descent. Indirect KLR, perverse and Hodge
consumers retain those interfaces. The geometric-Hodge-variation definition was
also checked through its `justified_by` link. No consumer repair was needed for
these clarified interfaces. The outside prerequisite hold above still prevents
closure of the algebraic descent supplier itself.

- `cex-specializing-v-to-one-forgets-graded-decomposition-information`
- `cor-graded-specht-classes-form-a-basis-of-the-module-grothendieck-group`
- `cor-quiver-full-flag-pushforwards-are-semisimple-in-characteristic-zero`
- `def-equivariant-borel-moore-homology-and-correspondence-convolution`
- `def-equivariant-constructible-derived-category-for-complex-algebraic-varieties`
- `def-geometric-polarizable-hodge-variation`
- `def-graded-adjustment-polynomials-in-positive-characteristic`
- `def-quiver-full-flag-incidence-varieties-and-geometric-klr-generators`
- `ex-a-nodal-projective-curve-has-a-weight-zero-cohomology-class`
- `ex-a-point-and-projective-line-check-source-first-convolution-and-opposite-composition`
- `ex-cyclic-etale-covers-give-geometric-semisimple-weight-zero-monodromy`
- `ex-dualizing-and-closed-support-shifts-on-the-complex-line`
- `ex-equal-color-quiver-flag-correspondence-is-nilhecke`
- `ex-equivariant-constructible-ext-on-a-point-is-degreewise-finite-not-total-finite`
- `ex-hypercover-total-degree-uses-only-a-finite-matching-truncation`
- `ex-incidence-model-of-a-closed-interval`
- `ex-projective-perverse-decomposition-for-projective-space-to-a-point`
- `ex-projective-versus-simple-grothendieck-classes-in-a-small-block`
- `ex-proper-cech-descent-does-not-require-acyclic-fibers`
- `ex-signed-two-direction-multiedge-quiver-flag-crossing`
- `ex-unequal-dimensional-proper-pushforwards-have-the-summed-dimension-ext-bm-shift`
- `lem-affine-morphisms-have-one-sided-perverse-exactness`
- `lem-analytic-constructible-sheaves-admit-coherent-six-operations`
- `lem-artin-affine-vanishing-for-constructible-perverse-sheaves`
- `lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom`
- `lem-complex-algebraic-stratifications-have-finite-conical-cochain-models`
- `lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports`
- `lem-complex-stratified-morse-data-have-tangential-normal-product-and-link-description`
- `lem-cyclotomic-extension-of-scalars-respects-the-based-quotient`
- `lem-general-linear-stiefel-perverse-normalization-is-exact-and-conservative`
- `lem-locally-trivial-acyclic-fibers-give-bounded-derived-pullback-equivalences`
- `lem-noncharacteristic-complex-stratified-pullback-is-perverse-exact`
- `lem-perverse-closed-support-splitting-is-equivalent-to-costalk-stalk-isomorphism`
- `lem-positive-characteristic-specht-head-and-cyclotomic-crystal-labels-agree`
- `lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom`
- `lem-projective-hodge-perverse-package-closes-under-defect-and-image-dimension-induction`
- `lem-proper-surjective-maps-have-cohomological-descent-for-constructible-field-sheaves`
- `lem-reduction-of-characteristic-zero-simple-modules-modulo-p`
- `lem-smooth-complex-pullback-is-exact-for-the-middle-perverse-t-structure`
- `lem-smooth-flag-incidence-correspondences-have-the-required-oriented-push-pull-calculus`
- `lem-smooth-projective-morphisms-give-polarizable-rational-gauss-manin-variations`
- `lem-universal-hyperplane-relative-weak-lefschetz-and-maximal-pullback-subobjects`
- `prop-qg8-categorification-transports-across-the-hecke-klr-bridge`
- `rem-canonical-bases-do-not-solve-arbitrary-positive-characteristic-decomposition-numbers`
- `thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace`
- `thm-ariki-canonical-basis-theorem-in-characteristic-zero`
- `thm-constructible-sheaves-admit-finite-stratified-triangulations-and-finite-local-cohomology`
- `thm-constructible-six-functors-proper-base-change-and-verdier-duality`
- `thm-equivariant-constructible-ext-is-degreewise-finite-and-compatible-with-characteristic-zero-scalars`
- `thm-fixed-part-for-geometric-polarizable-variations-on-smooth-algebraic-bases`
- `thm-graded-decomposition-numbers-equal-canonical-basis-coefficients-in-characteristic-zero`
- `thm-graded-specht-classes-realize-standard-fock-vectors`
- `thm-graded-specht-heads-classify-the-graded-simple-modules`
- `thm-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes`
- `thm-mixed-hodge-weights-control-proper-cohomological-restriction-images`
- `thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes`
- `thm-positive-characteristic-decomposition-polynomials-factor-through-adjustment`
- `thm-projective-pushforward-of-smooth-constant-sheaves-has-semisimple-perverse-cohomology`
- `thm-proper-cohomology-has-functorial-mixed-hodge-weights-at-most-degree`
- `thm-proper-hypercovers-compute-constructible-derived-cohomology`
- `thm-proper-pushforward-ext-is-equivariant-borel-moore-homology-of-the-fiber-product`
- `thm-quiver-flag-convolution-generators-satisfy-the-signed-klr-relations`
- `thm-quiver-flag-relative-position-strata-give-a-faithful-geometric-pbw-basis`
- `thm-relative-hard-lefschetz-and-perverse-splitting-for-projective-algebraic-maps`
- `thm-self-dual-indecomposable-cyclotomic-klr-projectives-give-the-lower-global-basis`
- `thm-self-dual-indecomposable-klr-projectives-give-the-negative-half-lower-global-basis`
- `thm-self-dual-simple-cyclotomic-klr-modules-give-the-upper-global-basis`
- `thm-signed-klr-algebra-is-the-equivariant-ext-algebra-of-quiver-flag-complexes`
- `thm-smooth-projective-gauss-manin-local-systems-are-semisimple`
- `thm-verdier-duality-identification-intertwines-yoneda-product-and-convolution`
- `thm-verdier-duality-on-oriented-stratified-complex-varieties`

## Validation and limitations

Reflow, precheck, strict proof-contract checking and five-file rendering have
passed during repair. Final post-edit checks and the required once-only batched
proof-layout run also passed, as recorded below. Their results establish
format and metadata consistency, not independent mathematical acceptance.

No complete corpus or outside-batch proof audit is claimed. No rendered bundle
was available, no external source book was read in full, and published suppliers
were prerequisite context. Other batches were changing while the review ran;
consumer checks bind the sections actually opened and the interfaces discussed
above, not a frozen independent audit of all 71 complete carriers. The outside
finding has an explicit current source fingerprint. Manifest/plan reconciliation
for added carrier dependencies remains with the engine/lead; these files were
outside this reader's edit license.

Final commands (all exit 0, after the final item edits):

- `node tools/tsx-run.mjs tools/reflow.mts` on the three changed item paths:
  all three unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts` on those paths:
  three checked, zero failing.
- `node tools/proof-contract.mjs research/frontier-44-special-representation-examples-28-six-step-batch-32.proof-contracts.json --strict`:
  three of three checked, zero errors and zero warnings.
- `node tools/rendercheck.mjs` on the three items and both assigned pages:
  five files passed real KaTeX and renderer YAML parsing.
- `node tools/proof-layout.mjs items/lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent.md items/lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model.md items/ex-incidence-model-of-a-closed-interval.md`:
  three items, 37 steps, zero defects. Run once after final edits and reflow.

The outside source fingerprint was rechecked immediately before handoff and
remained the one recorded above. The findings JSON contains only that uneditable
supplier obligation. Required next action: batch 33/Step 3b supplies the missing
analytic-connectedness comparison and checks its affected constructibility consumers.
