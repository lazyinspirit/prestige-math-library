# frontier-14 — Step 6a independent reader 6

Scope: `research/frontier-14-batch-6.pages.json` — both pages, all 53 scoped
items. I opened all 53 scoped item files and all 56 additional distinct item
files in their dependency lists, for 109 distinct item files opened in total. I
checked all 153 contract citation obligations against the cited item on disk and
read all 344 boundary dispositions. The mechanical citation-fidelity and
boundary-audit passes had zero candidates; the semantic findings below remain.

## Findings

### R6-1 — `def-coreflective-subcategory-and-coreflector`

- **Location:** Display in the Definition,
  `items/def-coreflective-subcategory-and-coreflector.md:26`.
- **Defect and evidence:** The source has `I\dashv Q,qquad Q:...` instead of
  `I\dashv Q,\qquad Q:...`, so `qquad` renders as letters in the formula.
- **Severity:** `polish`.

### R6-2 — `thm-a-full-subcategory-is-reflective-exactly-when-each-object-has-a-universal-arrow`

- **Location:** Proof step 1.1,
  `items/thm-a-full-subcategory-is-reflective-exactly-when-each-object-has-a-universal-arrow.md:49`.
- **Defect:** The step says the unit of the adjunction has the universal-arrow
  factorisation property, but its stated inputs `[L1]` and `[L2]` only define a
  reflection and a universal arrow. They do not connect the two encodings.
- **Evidence:** `[L3]` on the same item states the required initial-comma-object
  equivalence, and `thm-equivalent-encodings-of-an-adjunction` states exactly
  that unit components are universal arrows, but step 1.1 cites neither.
- **Severity:** `polish` — adding the already-present `[L3]` input closes the
  step immediately.

### R6-3 — `thm-the-counit-of-a-reflection-is-an-isomorphism`

- **Location:** Fact `[L1]`, used in proof step 1.1,
  `items/thm-the-counit-of-a-reflection-is-an-isomorphism.md:34`.
- **Defect:** `[L1]` attributes “a full inclusion is fully faithful” and the
  resulting unique-preimage clause to
  `def-full-faithful-and-essentially-surjective-functor`. The cited Definition
  only says that a functor is faithful/full/fully faithful when each induced
  hom-map is injective/surjective/bijective; it does not state that a full
  subcategory inclusion is fully faithful.
- **Evidence:** Step 1.1 uses both fullness and faithfulness to construct
  `\delta_A` and cancel after applying `I`. The required conclusion is a
  consequence of the full-subcategory data plus the cited definitions, but it
  is not the cited clause itself.
- **Severity:** `fatal` — inaccurate `[L1]` restatement supplying a
  load-bearing conclusion.

### R6-4 — `thm-an-object-lies-in-a-reflective-subcategory-exactly-when-its-reflection-unit-is-invertible`

- **Location:** Facts `[L1]` and `[L2]`, used in proof step 2.1,
  `items/thm-an-object-lies-in-a-reflective-subcategory-exactly-when-its-reflection-unit-is-invertible.md:34-36`.
- **Defect:** Both fact lines add conclusions absent from their cited items.
  `[L1]` adds `I(\varepsilon_A)\eta_{I(A)}=1` to
  `thm-the-counit-of-a-reflection-is-an-isomorphism`, whose Statement says only
  that every `\varepsilon_A` is an isomorphism. `[L2]` adds closure of
  isomorphisms under composition to
  `def-isomorphism-groupoid-and-connected-category`, whose cited clause only
  defines a two-sided inverse and its uniqueness.
- **Evidence:** Step 2.1 uses the added triangle identity to identify
  `\eta_{I(A)}` with `I(\varepsilon_A)^{-1}` and uses the added composition
  closure for its final inference.
- **Severity:** `fatal` — two widened fact restatements license the proof.

### R6-5 — `thm-a-reflective-inclusion-creates-all-limits`

- **Location:** Proof step 2.1,
  `items/thm-a-reflective-inclusion-creates-all-limits.md:46`.
- **Defect:** The equality `\eta_L q=1` is obtained from “reflection
  universality,” but none of `[L1]` or `[L4]` states that the unit is a universal
  arrow. The exact bridge is the earlier scoped theorem
  `thm-a-full-subcategory-is-reflective-exactly-when-each-object-has-a-universal-arrow`,
  which is not a dependency or an input here.
- **Severity:** `polish` — the standard unit-universality bridge is immediate
  to a category-theory reader.

### R6-6 — `thm-a-reflective-subcategory-has-every-colimit-the-ambient-category-has`

- **Location:** Proof step 1.1,
  `items/thm-a-reflective-subcategory-has-every-colimit-the-ambient-category-has.md:42`.
- **Defect:** To turn the cocone legs `R(D_j)\to R(L)` into legs
  `D_j\to R(L)`, one must precompose with `\varepsilon_{D_j}^{-1}`. The step
  says only that it composes with `\varepsilon_{D_j}:RI(D_j)\to D_j`, whose
  displayed direction is the wrong one for that composite.
- **Severity:** `polish` — “use the inverse counit” repairs the wording.

### R6-7 — `thm-mutual-factorisation-defines-subobject-and-quotient-object-equivalence`

- **Location:** Fact `[L1]`, referenced in proof step 1.1,
  `items/thm-mutual-factorisation-defines-subobject-and-quotient-object-equivalence.md:32`.
- **Defect:** `[L1]` adds “identities are both monic and epic” to
  `def-monomorphism-and-epimorphism`. The cited Definition states only the left-
  and right-cancellation definitions; it contains no identity-morphism clause.
- **Evidence:** This is a true elementary consequence, but not the cited
  proposition, and the fact line presents it as one.
- **Severity:** `fatal` — inaccurate fact restatement (even though the extra
  clause is not needed for the identity factorisations themselves).

### R6-8 — `thm-subobjects-and-quotient-objects-form-oppositely-ordered-collections`

- **Location:** Fact `[L2]`, used in proof steps 2.1 and 3.1,
  `items/thm-subobjects-and-quotient-objects-form-oppositely-ordered-collections.md:38`.
- **Defect:** `[L2]` says that a partial order is reflexive, transitive, and
  antisymmetric while citing `def-preorder`.
- **Evidence:** The cited Definition says exactly: a preorder is reflexive and
  transitive and, unlike a partial order, “it need not be antisymmetric.” The
  partial-order definition is only a further wikilink, not the cited clause.
- **Severity:** `fatal` — the cited item does not license the stated
  antisymmetry/partial-order conclusion.

### R6-9 — `lem-wide-pullbacks-compute-intersections-independently-of-representatives`

- **Location:** Fact `[L1]`, referenced in proof step 1.1,
  `items/lem-wide-pullbacks-compute-intersections-independently-of-representatives.md:34`.
- **Defect:** `[L1]` adds “the empty limit is a terminal object” to
  `def-limit-and-colimit-of-a-diagram`. That Definition gives the universal
  property of an arbitrary limit but does not identify empty limits with
  terminal objects.
- **Evidence:** The exact published result is
  `prop-empty-limits-and-colimits-are-terminal-and-initial-objects`, which is
  not a dependency of this lemma. (Step 1.1 in fact needs only `[L4]` and the
  identity as greatest subobject.)
- **Severity:** `fatal` — inaccurate `[L1]` restatement.

### R6-10 — `lem-wide-pullbacks-compute-intersections-independently-of-representatives`

- **Location:** Proof step 2.1,
  `items/lem-wide-pullbacks-compute-intersections-independently-of-representatives.md:50`.
- **Defect:** The step starts from the unstated claim that equivalent
  representatives are connected by unique inverse isomorphisms over `C`.
  None of `[L1]` or `[L4]` supplies it; the exact earlier scoped result is
  `thm-mutual-factorisation-defines-subobject-and-quotient-object-equivalence`.
- **Severity:** `polish` — the omitted bridge is short and the comparison-cone
  argument is otherwise correct.

### R6-11 — `thm-a-separating-set-is-equivalently-a-jointly-faithful-family-of-representables`

- **Location:** Fact `[L3]`, used in both proof steps,
  `items/thm-a-separating-set-is-equivalently-a-jointly-faithful-family-of-representables.md:38`.
- **Defect:** The cited `def-full-faithful-and-essentially-surjective-functor`
  defines faithfulness for one functor. It does not define a family to be
  jointly faithful, nor state the “equality after every member” criterion that
  `[L3]` adds.
- **Evidence:** The proof uses precisely this added family-level clause in both
  directions of the iff.
- **Severity:** `fatal` — the only stated definition of the conclusion's key
  term is attributed to an item that does not contain it.

### R6-12 — `thm-a-complete-locally-small-category-with-a-jointly-weakly-initial-set-has-an-initial-object`

- **Location:** Facts `[L5]` and `[L6]`, used in proof steps 3.1 and 4.1,
  `items/thm-a-complete-locally-small-category-with-a-jointly-weakly-initial-set-has-an-initial-object.md:42-44`.
- **Defect:** `[L5]` adds that equalizers are monic to the equalizer and mono
  definitions; neither cited Definition states that result. `[L6]` adds that a
  monic split epimorphism is an isomorphism to the isomorphism and mono
  definitions; neither states that lemma.
- **Evidence:** The exact first result exists as
  `cor-equalizers-are-monic-and-coequalizers-are-epic`; the standard mono/epi
  calculus is likewise a theorem rather than either cited definition. Steps
  3.1 and 4.1 use both additions.
- **Severity:** `fatal` — two load-bearing fact restatements import conclusions
  absent from their sources.

### R6-13 — `thm-general-adjoint-functor-theorem-objectwise-form`

- **Location:** Fact `[L1]`, used in proof step 1.1,
  `items/thm-general-adjoint-functor-theorem-objectwise-form.md:34`.
- **Defect:** `[L1]` says both that completeness means all small limits and
  that continuity means preservation of all small limits, but cites only
  `def-small-finite-and-large-limits-completeness-and-cocompleteness`.
- **Evidence:** The cited Definition states the completeness clause but says
  nothing about functors or continuity. The latter is defined in
  `def-preservation-reflection-creation-continuity-and-cocontinuity`, which is
  absent from this item's dependencies. Step 1.1 uses the missing half to say
  that `U` preserves each projected limit.
- **Severity:** `fatal` — widened fact citation supplying a load-bearing
  conclusion.

### R6-14 — `thm-a-complete-locally-small-category-with-a-small-coseparating-set-and-all-subobject-intersections-has-an-initial-object`

- **Location:** Facts `[L4]` and `[L5]`, used throughout the proof,
  `items/thm-a-complete-locally-small-category-with-a-small-coseparating-set-and-all-subobject-intersections-has-an-initial-object.md:42-44`.
- **Defect:** `[L4]` widens `def-intersection-of-a-family-of-subobjects` from a
  **set-indexed supplied family** to “the stated collection,” which the proof
  explicitly allows to be proper-class-sized. `[L5]` attributes three closure
  results—equalizers are monic, composites of monos are monic, and pullbacks of
  monos are monic—to two Definitions that state none of them.
- **Evidence:** The cited intersection Definition begins “indexed by a set
  `I`.” Exact mono results exist separately in
  `cor-equalizers-are-monic-and-coequalizers-are-epic`,
  `prop-basic-calculus-of-monomorphisms-and-epimorphisms`, and
  `lem-pullbacks-of-monomorphisms-are-monomorphisms-and-pushouts-of-epimorphisms-are-epimorphisms`.
  Steps 1.1-3.1 use the widened domain and closure claims.
- **Severity:** `fatal` — changed domain plus imported conclusions.

### R6-15 — `thm-special-adjoint-functor-theorem-objectwise-form`

- **Location:** Statement branch 2 and proof step 2.1,
  `items/thm-special-adjoint-functor-theorem-objectwise-form.md:28-33` and
  `:59`.
- **Defect:** Branch 2 does not require `U` to preserve arbitrary small limits,
  but step 2.1 asserts that the comma category is complete by `[L4]`. `[L4]`
  creates only those projected limits that `U` preserves. Preserving the
  pullbacks used for subobject intersections does not imply preservation of
  every small limit.
- **Evidence:** Take `A=C=Set`, let `U:Set->Set` be the constant functor at the
  two-element set `2`, and fix `C=1`. `Set` is complete and locally small, has
  the small coseparating object `2`, and has specified intersections of all
  subobject collections. `U` sends every family of monomorphisms and its
  intersection pullback to the identity family on `2`, so it satisfies the
  stated branch-2 preservation datum (including the empty subobject family,
  whose intersection is an identity). But `(1\downarrow U)` is the disjoint
  union of two copies of `Set`, one for each map `1->2`, and has no initial
  object. Thus the Statement itself is false. The page summary at
  `library/category-theory/reflective-subcategories-and-the-adjoint-functor-theorems.md:64-66`
  also incorrectly says every preservation hypothesis is stated.
- **Severity:** `fatal` — false Statement with a concrete counterexample.

### R6-16 — `rem-choice-ledger-for-the-adjoint-functor-theorems`

- **Location:** The second paragraph,
  `items/rem-choice-ledger-for-the-adjoint-functor-theorems.md:27`.
- **Defect:** The remark says the objectwise SAFT theorem produces an initial
  comma object under its direct branch because the class intersections and
  their preservation are explicit. It omits the missing preservation of all
  small limits exposed in R6-15.
- **Evidence:** The constant-at-`2` counterexample from R6-15 satisfies exactly
  the direct data described by the remark but yields a comma category with no
  initial object.
- **Severity:** `fatal` — the remark repeats the false theorem-level claim.

### R6-17 — `cor-a-complete-locally-small-category-with-a-small-coseparating-set-and-saft-intersections-is-cocomplete`

- **Location:** Fact `[L3]`, used in proof step 2.1,
  `items/cor-a-complete-locally-small-category-with-a-small-coseparating-set-and-saft-intersections-is-cocomplete.md:38`.
- **Defect:** `[L3]` attributes “a colimit of `D` is precisely an initial object
  of `(D\downarrow\Delta)`” to `def-limit-and-colimit-of-a-diagram`.
- **Evidence:** The cited Definition says a colimit is an initial object in the
  **cocone category** and states its mediating-map property. It does not
  identify that cocone category with the displayed comma category. Step 2.1
  uses the added identification.
- **Severity:** `fatal` — inaccurate fact restatement.

### R6-18 — `cor-a-complete-locally-small-category-with-a-small-coseparating-set-and-saft-intersections-is-cocomplete`

- **Location:** Proof step 1.1,
  `items/cor-a-complete-locally-small-category-with-a-small-coseparating-set-and-saft-intersections-is-cocomplete.md:46`.
- **Defect:** The step says limits in a functor category are computed
  objectwise, hence `\Delta` preserves all small limits, but no stated input
  supplies pointwise limits. `[L1]` is only the size theorem for functor
  categories.
- **Evidence:** The exact available result is
  `cor-functor-categories-inherit-completeness-and-cocompleteness`, absent from
  the dependency list.
- **Severity:** `polish` — this is a standard short bridge, and it also means
  the corollary's application is not harmed by R6-15's missing-continuity issue.

### R6-19 — `cor-a-continuous-functor-to-set-from-a-chosen-well-powered-saft-category-is-representable`

- **Location:** Fact `[L3]`, used in proof step 2.1,
  `items/cor-a-continuous-functor-to-set-from-a-chosen-well-powered-saft-category-is-representable.md:36`.
- **Defect:** `[L3]` says an adjunction gives natural hom-set bijections while
  citing `def-adjunction-by-unit-counit-and-triangle-identities`.
- **Evidence:** The cited Definition intentionally defines an adjunction only
  by a unit, counit, and triangle identities; it contains no hom-set
  bijection. The exact bridge is
  `thm-the-adjunction-hom-set-bijection-under-local-smallness` (or
  `thm-equivalent-encodings-of-an-adjunction`), neither a dependency here.
  Step 2.1 uses the added bijection to obtain the representation.
- **Severity:** `fatal` — load-bearing widened citation.

### R6-20 — `thm-freyd-representability-theorem`

- **Location:** Fact `[L3]`, used in proof step 3.1,
  `items/thm-freyd-representability-theorem.md:38`.
- **Defect:** `[L3]` says a universal element determines a natural isomorphism
  `C(R,-)\cong F`, citing
  `def-presheaf-representable-functor-and-representation`.
- **Evidence:** The cited Definition only defines representability as the
  existence of such a natural isomorphism; it does not prove that a universal
  element supplies one. The exact available result is
  `thm-universal-elements-and-universal-factorisations`, absent from the
  dependencies. Step 3.1 uses the imported implication.
- **Severity:** `fatal` — inaccurate fact restatement.

### R6-21 — `prop-compact-hausdorff-spaces-satisfy-the-special-adjoint-functor-hypotheses`

- **Location:** Proof steps 1.1 and 2.1,
  `items/prop-compact-hausdorff-spaces-satisfy-the-special-adjoint-functor-hypotheses.md:52-54`.
- **Defect:** Several standard bridges are absent from the stated inputs: that
  all small limits can be built from products and equalizers; that the
  equalizer is closed and Hausdorff; that a mono in `CompHaus` is injective;
  and that a compact subset of a Hausdorff space is closed. Step 2.1 also uses
  the continuous-image clause of `thm-compactness-under-continuous-maps`, while
  `[L4]` restates only that theorem's compact-to-Hausdorff bijection clause.
- **Evidence:** The conclusions are true. In particular, noninjectivity of a
  mono is witnessed by two maps from the one-point compact Hausdorff space,
  continuous images of compact spaces are compact by clause 1 of the cited
  theorem, and `thm-compact-subset-of-a-hausdorff-space-is-closed` is the exact
  missing closedness result.
- **Severity:** `nonfatal` — standard local bridges, but too many are unstated
  for the numbered steps to be licensed as written.

### R6-22 — `thm-saft-yields-the-stone-cech-adjunction`

- **Location:** Frontmatter title at
  `items/thm-saft-yields-the-stone-cech-adjunction.md:4`, versus the Statement
  and Given at `:28` and `:34`.
- **Defect:** The title unconditionally says SAFT yields the compact-Hausdorff
  reflection and agreement with Stone-Cech. The Statement says a left adjoint
  is obtained only **if** the initial comma objects are supplied for all
  topological spaces, and the proof's Given explicitly includes that supplied
  family.
- **Evidence:** Under the library's data-sensitive convention, separate
  objectwise existence does not choose a family over the proper class of all
  spaces. The title drops the proof's essential selection hypothesis.
- **Severity:** `fatal` — title asserts more than the Statement and proof.

### R6-23 — `thm-the-solution-set-for-the-underlying-set-functor-on-groups`

- **Location:** Fact `[L3]`, used in proof step 2.1,
  `items/thm-the-solution-set-for-the-underlying-set-functor-on-groups.md:40`.
- **Defect:** `[L3]` says kernels are normal subgroups while citing
  `def-normal-subgroup`.
- **Evidence:** The cited Definition only defines normality by invariance under
  conjugation. It contains no theorem that a homomorphism kernel is normal.
  The exact available result is `thm-image-subgroup-and-kernel-normal`, absent
  from this item's dependencies. Step 2.1 uses the added claim to choose
  `N=ker(\widehat f)` as an index in the solution set.
- **Severity:** `fatal` — load-bearing inaccurate fact restatement.

### R6-24 — `cor-gaft-recovers-the-free-group-and-abelianisation-adjoints`

- **Location:** The Given and proof steps,
  `items/cor-gaft-recovers-the-free-group-and-abelianisation-adjoints.md:32`
  and `:44-46`.
- **Defect:** The proof invokes GAFT without establishing its completeness,
  local-smallness, and continuity hypotheses for `Grp`, `Ab`, the underlying-set
  functor, or the abelian inclusion. Line 32 simply calls them “the standard
  complete locally small categories and continuous functors in the Statement,”
  but the Statement does not state those facts and no dependency proves them.
- **Evidence:** `[L1]` supplies only solution sets, `[L2]` retains all GAFT
  hypotheses, and `[L3]` supplies the already-known adjunctions. The latter can
  help prove continuity via preservation by right adjoints, but that theorem
  and the completeness results are not inputs. Thus “GAFT applies” is not
  established by the proof.
- **Severity:** `fatal` — nontrivial load-bearing categorical assumptions are
  imported as an unsupported Given.

### R6-25 — `thm-compact-hausdorff-spaces-are-reflective-in-topological-spaces`

- **Location:** Statement/Given/Fact `[L1]`,
  `items/thm-compact-hausdorff-spaces-are-reflective-in-topological-spaces.md:26-32`,
  and the `nonempty-choice` boundary row at
  `research/frontier-14-batch-6.proof-contracts.json:3188`.
- **Defect:** The cited theorem says the SAFT initial objects assemble into a
  left adjoint only **if they are supplied for all `X`**. This item's Statement
  and Given assume only the ultrafilter lemma and dependent choice, but step
  1.1 treats the conditional adjunction as supplied. The boundary row then
  incorrectly says the proof makes no selection beyond explicitly supplied
  data.
- **Evidence:** `thm-saft-yields-the-stone-cech-adjunction.md:28` retains the
  all-spaces supplied-family condition, and its Given at `:34` repeats it. No
  such family appears here.
- **Severity:** `fatal` — dropped hypothesis and false boundary disposition;
  the Statement is stronger than this proof establishes.

### R6-26 — `thm-commutative-rings-are-reflective-in-rings`

- **Location:** Proof step 2.1,
  `items/thm-commutative-rings-are-reflective-in-rings.md:50`.
- **Defect:** The step uses “the kernel is a two-sided ideal,” but none of its
  stated inputs establishes this. The exact available result is
  `thm-ring-homomorphism-kernel-is-an-ideal`, absent from the dependencies.
- **Severity:** `polish` — a standard sub-30-second algebra bridge.

### R6-27 — `thm-torsion-free-abelian-groups-are-reflective-in-abelian-groups`

- **Location:** Fact `[L3]`, used in proof step 3.1,
  `items/thm-torsion-free-abelian-groups-are-reflective-in-abelian-groups.md:38`.
- **Defect:** `[L3]` says that supplied universal reflection arrows are
  equivalent to reflectivity while citing only
  `def-reflective-subcategory-and-reflector`.
- **Evidence:** The cited Definition says reflectivity means that the inclusion
  has a left adjoint; it explicitly does not state the universal-arrow
  equivalence. That equivalence is the separate scoped theorem
  `thm-a-full-subcategory-is-reflective-exactly-when-each-object-has-a-universal-arrow`,
  absent from this item's dependency list. Step 3.1 uses the added implication
  to assemble the reflector.
- **Severity:** `fatal` — load-bearing widened citation.

### R6-28 — `fs-a-continuous-functor-on-a-complete-category-has-a-left-adjoint`

- **Location:** Facts `[L4]` and `[L5]`, used in refutation steps 1.1-1.2,
  `items/fs-a-continuous-functor-on-a-complete-category-has-a-left-adjoint.md:41-43`.
- **Defect:** `[L4]` attributes to `lem-ordinal-basics` that the union of a set
  of ordinals is its supremum; the cited Statement says only that the union is
  an ordinal (and separately gives ordinal comparability). `[L5]` attributes
  natural hom-set bijections to the unit/counit Definition of adjunction, which
  contains no such bijections.
- **Evidence:** Step 1.1 needs the supremum property to construct limits in
  `Ord^op`, and step 1.2 needs the hom-set bijection. Both conclusions are true,
  but neither is the cited clause; the latter has the exact separate theorem
  `thm-the-adjunction-hom-set-bijection-under-local-smallness`.
- **Severity:** `fatal` — two load-bearing fact expansions.

### R6-29 — `fs-every-reflective-subcategory-is-closed-under-colimits`

- **Location:** Refutation step 1.1,
  `items/fs-every-reflective-subcategory-is-closed-under-colimits.md:43`.
- **Defect:** The step proves a natural singleton hom-set bijection and directly
  concludes that the constant functor is left adjoint, but the library's cited
  adjunction notion is unit/counit data and no equivalence theorem is an input.
- **Severity:** `polish` — explicitly taking the unique maps as unit/counit (or
  citing the equivalent-encodings theorem) closes the step immediately.

### R6-30 — `fs-a-reflective-inclusion-creates-colimits`

- **Location:** Refutation step 1.1,
  `items/fs-a-reflective-inclusion-creates-colimits.md:44`.
- **Defect:** As in R6-29, a hom-set bijection is used as an adjunction without
  an input connecting it to the library's unit/counit definition.
- **Severity:** `polish` — the unit, counit, and triangles are unique and
  immediate in this singleton example.

### R6-31 — `fs-a-subobject-is-a-monomorphism`

- **Location:** Refutation step 1.1,
  `items/fs-a-subobject-is-a-monomorphism.md:43`.
- **Defect:** The step says the two injections are monic in `Set`, but no stated
  input supplies “injective implies monic.”
- **Severity:** `polish` — direct left-cancellation proves it in one line.

### R6-32 — `cex-a-reflective-inclusion-need-not-preserve-colimits`

- **Location:** Verification step 1.1,
  `items/cex-a-reflective-inclusion-need-not-preserve-colimits.md:44`.
- **Defect:** The natural singleton hom-set bijection is used as an adjunction
  without an input connecting it to the library's unit/counit definition.
- **Severity:** `polish` — the unique unit/counit maps close the gap directly.

### R6-33 — `ex-the-subobject-poset-of-the-integers-in-abelian-groups`

- **Location:** Verification step 1.1,
  `items/ex-the-subobject-poset-of-the-integers-in-abelian-groups.md:47`.
- **Defect:** The step assumes without an input that every monomorphism in `Ab`
  is injective and isomorphic over `Z` to its image inclusion.
- **Severity:** `polish` — the kernel test and the corestriction to the image
  provide the standard short bridge.

### R6-34 — `ex-subobjects-in-set-are-subsets`

- **Location:** Verification step 1.1,
  `items/ex-subobjects-in-set-are-subsets.md:42`.
- **Defect:** The proof starts “For an injection `m`,” although a subobject is
  presented by a monomorphism. No input proves the needed converse that every
  monomorphism in `Set` is injective.
- **Severity:** `polish` — two maps from a singleton witness noninjectivity in
  under 30 seconds.

### R6-35 — `ex-the-solution-set-for-groups-computed-on-a-two-element-set`

- **Location:** Verification step 1.2,
  `items/ex-the-solution-set-for-groups-computed-on-a-two-element-set.md:45`.
- **Defect:** `[L1]` states only that the quotient arrows form a solution set.
  It does not state that a kernel is normal or that quotienting by the kernel
  induces an injection into the target, both used for the concrete example.
- **Severity:** `polish` — the kernel-normality and first-isomorphism bridges
  are standard and the displayed witness is correct.

### R6-36 — `cex-two-monomorphisms-representing-the-same-subobject`

- **Location:** Verification step 1.1,
  `items/cex-two-monomorphisms-representing-the-same-subobject.md:44`.
- **Defect:** The step says the displayed injections are monic without a stated
  input connecting injectivity and monicity in `Set`.
- **Severity:** `polish` — direct cancellation closes the gap immediately.

### R6-37 — `ex-torsion-free-reflection-computed`

- **Location:** Fact `[L3]`, used in verification step 3.1,
  `items/ex-torsion-free-reflection-computed.md:44`.
- **Defect:** `[L3]` attributes the unique factorisation of maps into
  torsion-free groups to the Statement of
  `thm-torsion-free-abelian-groups-are-reflective-in-abelian-groups`.
- **Evidence:** That cited Statement says the subcategory is reflective and
  identifies the reflector and its unit; it does not state the displayed
  factorisation clause. The exact universal-arrow bridge is the theorem named
  in R6-27, and this example does not depend on it. Step 3.1 uses the added
  clause verbatim.
- **Severity:** `fatal` — widened theorem restatement supplying the example's
  universal-property conclusion.

### R6-38 — `ex-torsion-free-reflection-computed`

- **Location:** Verification step 2.1,
  `items/ex-torsion-free-reflection-computed.md:52`.
- **Defect:** `[L2]` says only that the coordinate projections are
  homomorphisms. It does not say that the first projection is surjective, and
  no input supplies the first-isomorphism inference from its kernel to the
  displayed quotient isomorphism.
- **Severity:** `polish` — `(z,0)` proves surjectivity and the induced map is
  visibly bijective, so the computation is correct.

## Provenance, boundary, and generated-statement checks

- All 53 scoped mathematical-content items carry both
  `provenance.statement` and `provenance.proof`.
- The five `ai-generated` Statements are
  `cex-a-reflective-inclusion-need-not-preserve-colimits`,
  `cex-two-monomorphisms-representing-the-same-subobject`,
  `cex-a-category-that-is-not-well-powered`,
  `ex-torsion-free-reflection-computed`, and
  `cex-a-complete-category-whose-coseparating-sets-are-never-small`. None is a
  dependency target in any of the seven frontier-14 batch manifests. I checked
  their witnesses directly: the singleton reflection misses the empty colimit;
  the two singleton-domain monos mutually factor; distinct ordinals give
  distinct subobjects of the added top; the torsion calculation works for all
  `n>=1`, including `n=1`; and the sparse ordinal-indexed family category is
  locally small, complete under coordinatewise small limits, and defeats every
  proposed small coseparating family. I found no counterexample to these five
  generated Statements.
- Apart from the false `nonempty-choice` row identified in R6-25, the 344
  boundary dispositions agree with the axes actually exhibited by their items.
  Empty families, zero/one values, endpoints, degenerate parameters, both iff
  directions, and nonempty witness choices were checked where present.

## Per-page verdicts

- `reflective-subcategories-and-the-adjoint-functor-theorems` — **44/44 items
  opened; fatal defects present.** R6-3, R6-4, R6-7 through R6-9, R6-11 through
  R6-17, R6-19, R6-20, R6-22 through R6-25, R6-27, and R6-28 are fatal. R6-21
  is nonfatal; R6-1, R6-2, R6-5, R6-6, R6-10, R6-18, R6-26, and R6-29 through
  R6-31 are polish. The other 15 items on the page were clean on this read.
- `reflective-subcategories-and-the-adjoint-functor-theorems-examples` —
  **9/9 items opened; fatal defect present.** R6-37 is fatal; R6-32 through
  R6-36 and R6-38 are polish. The other three items on the page were clean on
  this read.

Count opened: **53/53 scoped items; 109 distinct item files total** after
opening all 56 additional dependency targets. Findings: **21 fatal, 1
nonfatal, 16 polish**.
