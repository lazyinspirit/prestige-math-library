# Frontier 13, batch 6: Beta scaffold and authoring notes

Run: `frontier-13`  
Batch: 6, adjunctions, units and counits  
Scope: steps 1–2 scaffold and the durable record for step 5

## Result and split decision

The scaffold contains one A/B pair and 60 items:

| order | page | kind | items |
|---:|---|:---:|---:|
| 365.001 | `adjunctions-units-and-counits` | A | 51 |
| 365.002 | `adjunctions-units-and-counits-examples` | B | 9 |

No split is proposed. The A page is below the owner’s binding 60-item ceiling by
9 items, and the sequence has one coherent arc: definition and encodings,
calculus, preservation, then worked adjunctions. If Alpha adds ten or more
substantive results, the exact natural cut is after
`thm-limits-and-colimits-are-adjoint-to-the-diagonal-functor`: page 1 would end
with preservation and page 2 would begin with the power-set adjoint triple and
the worked adjunctions. Nothing has been trimmed to avoid a split.

There are no forward references. Every B-page item is a leaf and no dependency
targets an examples-page item. In particular, the two tempting published
examples `ex-free-monoid-universal-property-as-a-representation` and
`ex-function-sets-as-exponential-representing-objects` were opened and rejected
as dependencies because both are B leaves.

## Proposed A-page summary

An adjunction is specified here by functors, a unit, a counit, and the two triangle identities, a formulation that remains meaningful without local smallness. Transposition then recovers the familiar natural hom-set bijections when hom-classes are sets. Universal arrows and initial comma objects give equivalent encodings, with explicit supplied choices whenever objectwise universal objects are assembled into a functor. The page develops uniqueness, composition, induced functor-category adjunctions, mates, fixed subcategories, full-faithfulness tests, adjoint triples, and Galois connections.

The unit-counit proof that right adjoints preserve limits carries no size hypothesis; its representable-functor proof is kept separate and locally small. Exactness and diagonal adjunctions follow before the page builds citable examples: image and preimage, free groups, free modules, free monoids, abelianisation, discrete and indiscrete topology, Stone–Čech compactification, coextension of scalars, and currying. The companion computes units and counits, ideal–variety and preorder connections, free categories, subgroupoid adjunctions, Frobenius reciprocity, and two triangle-identity failures.

The summary is 149 words in exactly two nonempty prose paragraphs.

## Scaffold corrections to MA-1

1. A new lemma `lem-adjunct-formulas-are-mutually-inverse` precedes the hom-set
   theorem. It isolates the two triangle-identity calculations instead of hiding
   them in a six-discharge theorem.
2. No A-page free-monoid universal property exists in the closure. A local lemma
   `lem-words-satisfy-the-free-monoid-universal-property` builds the needed
   extension and uniqueness by induction on words.
3. The published abelianisation universal theorem is homed on
   `composition-series-and-solvable-groups`, outside this page’s declared
   requires closure. The scaffold therefore proves the factorisation locally
   from `def-abelianisation-of-a-group`,
   `def-commutator-and-commutator-subgroup`, and
   `thm-quotient-group-universal-property`.
4. The contingent extension-of-scalars half of MA-1 item 40 is not built.
   `tensor-products-of-modules` is an unbuilt page in batch 5 and cannot be
   cited. The Hom-side construction is retained as
   `lem-coextension-of-scalars-carries-a-module-structure` and
   `thm-coextension-of-scalars-is-right-adjoint-to-restriction-of-scalars`.
5. The required real floor/ceiling definition `def-floor-and-ceiling` does not
   exist on disk. The only similar item,
   `def-the-ceiling-of-a-quotient-of-naturals`, expressly is not the real
   floor/ceiling interface. The applied theorem is recorded as unavailable and
   is not scaffolded or cited.
6. The function-set construction has an A-page home:
   `def-the-set-of-functions-from-one-set-to-another`, backed by
   `lem-the-set-of-functions-between-two-sets-is-a-set`. Currying uses these,
   not the B-leaf example named in MA-1.
7. Harvesting the exercise blocks added the source-backed corollary
   `cor-right-adjoints-preserve-monomorphisms-and-left-adjoints-preserve-epimorphisms`.
   It is proved from the self-pullback characterization, RAPL, and duality;
   the same pass expanded mates to both horizontal and vertical pasting and
   recorded the dual terminal-comma criterion for right adjoints.
8. The same exercise harvest made two smaller pieces of the adjunction calculus
   explicit: adjoint triples induce $LU\dashv RU$ and $UL\dashv UR$, and a
   remark warns that conjugation preserves invertibility although general mates
   need not. Neither fact is left hidden in an exercise disposition.

## Canonical-coverage harvest

The gated artifact is `research/frontier-13-batch-6.coverage.json`. The primary
range is Riehl 2nd ed. §§4.1–4.4 and §4.6 in full, plus Lemma 4.7.1 only; this
distinction matters because §4.7, not §4.6, contains the adjoint functor
theorems in the second edition. Leinster Ch. 2 and §6.3 are the independent
second treatment. Mac Lane Ch. IV supplies the classical third treatment and
the historical Kan attribution.

The harvest has 194 rows: 91 included, 36 inline, 4 already published, 43
deferred, and 20 out of scope. Counts are source headings rather than distinct
items, so multiple included rows may point to one scaffolded theorem.

The declines expected to receive the closest Alpha scrutiny are:

- Extension of scalars as the left adjoint to restriction is deferred only
  because its tensor-product construction is assigned to the unbuilt
  `tensor-products-of-modules` page. The coextension/right-adjoint machinery is
  built locally now.
- The general and special adjoint functor theorems are deferred to the already
  planned page `reflective-subcategories-and-the-adjoint-functor-theorems`,
  which requires this page. Their prerequisite machinery is a whole next-page
  topic, not a lemma omitted from this page.
- Cartesian-closed categories, two-variable adjunctions, tensor–Hom adjunctions,
  presheaf exponentials, and loop–suspension are assigned to later category,
  monoidal, and homotopy tracks. Currying in Set is retained because it belongs
  to the basic worked-adjunction interface.
- Several Riehl and Mac Lane catalog examples are disposed inline rather than
  minted as independent items. Their universal-property calculation is fully
  represented by the general theorem or by a retained worked adjunction.

## Source ledger and licensing

| key | source and exact range actually read | role | licensing note |
|---|---|---|---|
| RI-2 | Emily Riehl, *Category Theory in Context*, 2nd ed., §§4.1–4.4 in full, printed pp. 132–156, stopping before §4.5 on p. 156; §4.6 in full, printed pp. 165–173; and Lemma 4.7.1 on printed p. 174 only, in the 2026-07-28 build, <https://emilyriehl.github.io/files/context.pdf> | primary definitions, six encodings, calculus, mates, preservation, full-faithfulness, and the majority of worked adjunctions | Author-hosted copyrighted PDF. Only locators and short result labels are recorded; all future prose and proofs must be original paraphrase. |
| LE-v2 | Tom Leinster, *Basic Category Theory*, arXiv:1612.09375v2, Chapter 2 §§2.1–2.3 in full, printed pp. 41–64, and §6.3 in full, printed pp. 157–170, <https://arxiv.org/pdf/1612.09375.pdf> | independent treatment with different unit/counit and comma-object proofs; RAPL and adjoint-functor-theorem boundary | CC BY-NC-SA 4.0, stated in the arXiv edition. No prose is copied; attribution and license are retained here. |
| ML-IV | Saunders Mac Lane, *Categories for the Working Mathematician*, 2nd ed., Chapter IV §§1–10 main text, printed pp. 77–108, with end-of-section exercise blocks excluded, <https://doi.org/10.1007/978-1-4757-4721-8> | classical convention check, transformations of adjoints, composition, preorders, cartesian closure, and attribution of the symbol to Kan | Springer copyright. The source is used for facts, organization comparison, and historical attribution only; no prose or proof passage is copied. |

The Riehl locator is deliberately not inherited from the first edition:
Proposition 4.3.7, §4.5, and Theorem 4.2.7 are second-edition material, while
the adjoint functor theorems are §4.7. Leinster v2 was checked against its
2025-08-26 correction state; in particular the corrected limits in the proof
of Theorem 6.3.20 are irrelevant because that theorem is declined.

## Convention decisions and disagreements

- This library takes unit–counit data as the definition, unlike all three main
  sources, because their hom-set-first wording presupposes local smallness.
  `rem-why-this-library-takes-unit-counit-as-the-definition` records the
  deliberate deviation.
- $F\dashv G$ means that $F$ is left adjoint to $G$. Mac Lane attributes this
  symbol and the terminology to Kan. Units point $1\Rightarrow GF$ and counits
  point $FG\Rightarrow1$, matching the published equivalence definition.
- For a function $f$, the scaffold writes $f_!$ for existential direct image,
  $f^{-1}$ for inverse image, and $f_*$ for universal image. Some sources use
  $f_*$ for ordinary direct image; the theorem spells out all three formulas.
- All module categories are categories of left modules. For $R\to S$,
  coextension is $\operatorname{Hom}_R(S,-)$ with $(s\cdot h)(t)=h(ts)$.
- The word “set” in the hom-set formulation is literal. The unit–counit RAPL
  proof is therefore not weakened to small diagrams; only the separate
  representable proof assumes locally small categories and small limits.
- Chosen initial comma objects and chosen representing objects are supplied
  data. The scaffold never turns $\forall c\,\exists Fc$ into a class function
  by an unmentioned choice principle.
- Riehl 2nd ed. Exercise 4.2.iv literally says “Prove Exercise 4.2.iv,” while
  Lemma 4.2.11 sends its proof to that exercise. The harvest records the only
  type-correct contextual reading: the exercise asks for the proof of Lemma
  4.2.11, the fixed-subcategory equivalence.
- No new item applies a canonical embedding symbol to a natural number.

## Published dependency audit and confidence route

Every one of the 88 direct published dependencies in the manifest was opened
in full on disk. Each has explicit component provenance; none is
legacy-unclassified. The default route below is “exact Definition/Statement
and proof interface read on disk; mathematical use checked against RI-2 and
LE-v2 where categorical.” Special routes are called out after the inventory.

`def-abelianisation-of-a-group`; `def-cartesian-product`; `def-category`;
`def-comma-slice-and-coslice-categories`;
`def-commutator-and-commutator-subgroup`; `def-continuous-map-top`;
`def-coset`;
`def-equivalence-and-adjoint-equivalence-of-categories`; `def-field`;
`def-field-homomorphism`; `def-free-group`;
`def-finite-cardinality`; `def-finite-sum-in-a-commutative-monoid`;
`def-free-module-on-a-set-and-standard-basis`;
`def-full-faithful-and-essentially-surjective-functor`;
`def-functor-and-contravariant-functor`; `def-functor-category`;
`def-group-action`; `def-hom-functors-and-hom-bifunctor`;
`def-horizontal-composition-and-whiskering-of-natural-transformations`;
`def-image-and-preimage-under-a-relation`;
`def-initial-terminal-and-zero-object`; `def-indexed-union-and-intersection`;
`def-isomorphism-groupoid-and-connected-category`;
`def-left-and-right-modules`; `def-left-right-and-two-sided-ideal`;
`def-limit-and-colimit-of-a-diagram`; `def-linear-map`;
`def-module-homomorphism-kernel-image-and-cokernel`;
`def-monoid-finite-product`; `def-monomorphism-and-epimorphism`;
`def-multivariate-polynomial-ring-by-iteration`; `def-nat-multiplication`;
`def-nat-order`; `def-natural-numbers`; `def-natural-transformation`;
`def-ordinal-addition`; `def-polynomial-evaluation-and-root`;
`def-preorder`;
`def-preservation-reflection-creation-continuity-and-cocontinuity`;
`def-presheaf-representable-functor-and-representation`;
`def-ring-characteristic`; `def-ring-homomorphism`;
`def-semigroup-and-monoid`;
`def-small-finite-and-large-limits-completeness-and-cocompleteness`;
`def-small-locally-small-and-large-category`;
`def-split-monomorphism-and-split-epimorphism`;
`def-standard-topologies`; `def-stone-cech-compactification`;
`def-subgroup`;
`def-subcategory-and-full-subcategory`;
`def-the-set-of-functions-from-one-set-to-another`;
`def-universal-arrow-to-and-from-a-functor`; `def-vector-space`;
`lem-canonical-comparison-characterises-limit-preservation`;
`lem-compact-hausdorff-targets-embed-in-unit-cubes-under-dependent-choice`;
`lem-finite-sum-reindexing-and-fubini`;
`lem-ideal-criterion-and-intersections`;
`lem-the-set-of-functions-between-two-sets-is-a-set`;
`prop-groups-and-homomorphisms-form-category-grp`;
`prop-images-of-unions-and-intersections-under-a-function`;
`prop-isomorphisms-form-the-maximal-subgroupoid`;
`prop-limit-colimit-duality`;
`prop-modules-and-homomorphisms-form-category-rmod`;
`prop-monoids-and-groups-as-one-object-categories`;
`prop-preorders-as-categories-and-monotone-maps-as-functors`;
`prop-sets-and-functions-form-category-set`;
`prop-size-of-functor-categories`;
`prop-topological-spaces-and-continuous-maps-form-category-top`;
`rem-choice-behind-limit-and-colimit-functors`; `thm-burali-forti`;
`thm-category-theoretic-duality-principle`;
`thm-chosen-limits-and-colimits-assemble-into-functors`;
`thm-division-algorithm-in-z`;
`thm-every-equivalence-can-be-made-an-adjoint-equivalence`;
`thm-free-groups-unique-up-to-unique-isomorphism`;
`thm-induction-principle`;
`thm-interchange-law-for-natural-transformations`;
`thm-ordinal-addition-associative`;
`thm-preimages-commute-with-unions-intersections-and-differences`;
`thm-quotient-group-universal-property`;
`thm-reduced-words-form-the-free-group`;
`thm-representable-functors-preserve-small-limits`;
`thm-stone-cech-evaluation-closure-universal-property`;
`thm-universal-arrows-are-initial-or-terminal-in-comma-categories`;
`thm-universal-property-of-free-modules`;
`thm-yoneda-lemma-is-natural-in-both-variables`; and
`thm-z-mod-p-is-a-field`.

Special confidence routes:

- The Stone–Čech theorem and compact-Hausdorff embedding lemma have
  AI-generated proofs but AI-altered statements, so they are legal dependency
  targets. Their exact choice hypotheses and universal-extension clauses were
  checked against their on-disk Statements and the Stacks-backed definition.
- `prop-size-of-functor-categories` has an AI-generated proof but an AI-altered
  statement. It is used only for its exact small-source/local-small-target
  conclusion, independently confirmed from RI-2.
- `def-finite-cardinality` has an AI-generated proof but an AI-altered
  statement. The Frobenius example uses only its exact definition of a finite
  set of support cosets, independently checked from the finite-set interface.
- `thm-division-algorithm-in-z` has an AI-generated proof and an AI-altered
  statement. Only its exact quotient/remainder existence is used by the leaf
  preorder example; it was independently checked from standard Euclidean
  division. Its legacy applied-iota notation remains untouched.
- The field counterexample uses `def-field`,
  `def-field-homomorphism`, `def-ring-characteristic`, and the already proved
  fields $\mathbb Z/2$ and $\mathbb Z/3$. The preservation-of-characteristic
  calculation is proved locally from unitality and injectivity; no absent
  preservation lemma is assumed.

No published dependency was found false. The out-of-closure published theorem
`thm-derived-subgroup-is-characteristic-and-abelianization-is-universal` is
true but is not cited. The coverage-only already-published result
`thm-small-limits-commute-with-small-limits` was also opened in full and its
exact smallness hypotheses match Riehl Exercise 4.6.v; it is not a manifest
dependency.

## Per-item provenance decisions

Abbreviations RI, LE, and ML refer to the source ledger. “Literature-derived”
means the exact mathematical content is directly present in at least one named
treatment. “AI-altered” means the order, hypotheses, witness, or proof
decomposition is the scaffold’s adaptation of sourced mathematics. Definitions
and remarks have proof `not-applicable`. No AI-generated statement or
construction is load-bearing.

### A page

| item | statement | proof | rationale |
|---|---|---|---|
| `def-adjunction-by-unit-counit-and-triangle-identities` | literature-derived | not-applicable | RI Def. 4.2.5 and LE Thm. 2.2.5, reordered to be primary |
| `rem-why-this-library-takes-unit-counit-as-the-definition` | ai-altered | not-applicable | size comparison distilled from RI/LE/ML and the library convention |
| `prop-an-adjoint-equivalence-is-an-adjunction-with-invertible-unit-and-counit` | literature-derived | ai-altered | RI Prop. 4.3.5 and the published equivalence interface |
| `def-adjunct-and-transposition-under-an-adjunction` | literature-derived | not-applicable | RI `4.2 and LE Lem. 2.2.4 |
| `lem-adjunct-formulas-are-mutually-inverse` | literature-derived | ai-altered | LE Lemmas 2.2.2 and 2.2.4, isolated as proof machinery |
| `thm-the-adjunction-hom-set-bijection-under-local-smallness` | literature-derived | ai-altered | RI Thm. 4.2.7 and LE Thm. 2.2.5 |
| `thm-naturality-of-the-adjunction-bijection-is-transposition-of-squares` | literature-derived | ai-altered | RI Lem. 4.1.3 |
| `thm-unit-components-are-initial-in-their-comma-categories` | literature-derived | ai-altered | RI Thm. 4.2.7 and LE Thm. 2.3.6 |
| `thm-equivalent-encodings-of-an-adjunction` | literature-derived | ai-altered | RI Thm. 4.2.7, size clauses separated |
| `thm-a-left-adjoint-exists-exactly-when-every-comma-category-has-an-initial-object` | literature-derived | ai-altered | RI Lem. 4.7.1 and LE Cor. 2.3.7, choice made explicit |
| `thm-objectwise-universal-arrows-assemble-into-a-left-adjoint` | literature-derived | ai-altered | LE Thm. 2.3.6, functor laws expanded |
| `thm-a-pointwise-right-adjoint-extends-uniquely-to-a-functor` | literature-derived | ai-altered | RI Prop. 4.4.4, supplied object assignment explicit |
| `rem-the-choice-behind-assembling-an-adjoint` | literature-derived | not-applicable | RI choice remark and published limit-functor remark |
| `thm-adjoints-are-unique-up-to-unique-natural-isomorphism` | literature-derived | ai-altered | RI Prop. 4.3.1 |
| `thm-adjunctions-compose` | literature-derived | ai-altered | RI Prop. 4.3.4 and ML IV.8 |
| `prop-an-adjunction-induces-adjunctions-on-functor-categories` | literature-derived | ai-altered | RI Prop. 4.3.6 with library size interface |
| `thm-mates-under-a-pair-of-adjunctions` | literature-derived | ai-altered | RI Prop. 4.3.7 and ML IV.7 |
| `rem-conjugates-preserve-isomorphisms-but-arbitrary-mates-need-not` | literature-derived | not-applicable | RI Exercise 4.3.iv, retained as a non-load-bearing warning |
| `prop-an-adjunction-restricts-to-an-equivalence-on-its-fixed-subcategories` | literature-derived | ai-altered | RI Lem. 4.2.11 |
| `thm-fullness-and-faithfulness-of-a-right-adjoint-read-off-the-counit` | literature-derived | ai-altered | RI Lem. 4.6.11 and ML IV.3 |
| `def-adjoint-triple` | literature-derived | not-applicable | RI examples and standard terminology |
| `prop-an-adjoint-triple-induces-adjunctions-between-its-endofunctors` | literature-derived | ai-altered | RI Exercise 4.1.iv, proved twice from the unit-counit composition theorem without a size hypothesis |
| `def-mutually-left-and-mutually-right-adjoint-contravariant-functors` | literature-derived | not-applicable | RI Def. 4.4.1 |
| `def-galois-connection` | literature-derived | not-applicable | RI `4.2, LE Ex. 2.2.7, ML IV.5 |
| `cor-a-galois-connection-satisfies-fgf-equals-f-and-gfg-equals-g` | literature-derived | ai-altered | RI Cor. 4.2.10 |
| `prop-in-a-poset-adjunction-the-triangle-identities-are-automatic` | literature-derived | ai-altered | LE Ex. 2.2.7 |
| `thm-right-adjoints-preserve-limits` | literature-derived | ai-altered | RI Thm. 4.6.2; primary proof uses unit/counit |
| `cor-left-adjoints-preserve-colimits` | literature-derived | ai-altered | formal dual of RI Thm. 4.6.2 |
| `rem-rapl-carries-no-size-hypothesis` | literature-derived | not-applicable | RI `4.6 explicit size observation |
| `thm-representable-second-proof-of-rapl-under-local-smallness` | literature-derived | ai-altered | RI proof discussion plus published representable theorem |
| `def-left-exact-and-right-exact-functor` | literature-derived | not-applicable | RI Def. 4.6.7 |
| `cor-a-right-adjoint-is-left-exact-and-a-left-adjoint-is-right-exact` | literature-derived | ai-altered | immediate finite specialization of RAPL |
| `cor-right-adjoints-preserve-monomorphisms-and-left-adjoints-preserve-epimorphisms` | literature-derived | ai-altered | RI Exercise 4.6.vi, with the self-pullback characterization written out |
| `thm-limits-and-colimits-are-adjoint-to-the-diagonal-functor` | literature-derived | ai-altered | RI Prop. 4.6.1; choices supplied |
| `thm-direct-image-and-preimage-form-an-adjoint-triple-on-power-sets` | literature-derived | ai-altered | RI Ex. 4.1.8 with convention formulas explicit |
| `rem-the-image-preimage-adjunctions-explain-the-published-preservation-laws` | ai-altered | not-applicable | synthesis of RI example and two published set laws |
| `thm-the-free-group-functor-is-left-adjoint-to-the-underlying-set-functor` | literature-derived | ai-altered | RI Ex. 4.1.10 and published free-group universal property |
| `thm-the-free-module-functor-is-left-adjoint-to-the-underlying-set-functor` | literature-derived | ai-altered | RI Ex. 4.1.10 and published free-module universal property |
| `lem-words-satisfy-the-free-monoid-universal-property` | literature-derived | ai-altered | RI Ex. 4.1.10; local induction replaces illegal B-leaf |
| `thm-the-free-monoid-functor-is-left-adjoint-to-the-underlying-set-functor` | literature-derived | ai-altered | RI Ex. 4.1.10 and preceding local lemma |
| `thm-abelianisation-is-left-adjoint-to-the-inclusion-of-abelian-groups` | literature-derived | ai-altered | LE Ex. 2.1.3 and local quotient factorisation |
| `thm-the-discrete-and-indiscrete-topologies-form-an-adjoint-triple-over-set` | literature-derived | ai-altered | RI Ex. 4.1.6 and LE Ex. 2.1.5 |
| `thm-stone-cech-is-left-adjoint-to-the-inclusion-of-compact-hausdorff-spaces` | literature-derived | ai-altered | RI Ex. 4.6.13 and LE Ex. 6.3.14, exact published choice hypotheses |
| `prop-the-underlying-set-functor-on-fields-has-no-left-adjoint` | literature-derived | ai-altered | RI Ex. 4.1.12 and LE Ex. 6.3.5 |
| `lem-coextension-of-scalars-carries-a-module-structure` | literature-derived | ai-altered | RI Ex. 4.1.10 Hom-side action checked locally |
| `thm-coextension-of-scalars-is-right-adjoint-to-restriction-of-scalars` | literature-derived | ai-altered | RI Ex. 4.1.10 Hom-side transposition |
| `thm-currying-is-an-adjunction-in-set` | literature-derived | ai-altered | RI Ex. 4.4.9, LE Ex. 2.1.6, ML IV.6 |
| `fs-a-unit-and-counit-determine-an-adjunction-without-the-triangle-identities` | ai-altered | ai-altered | source-adapted omission of the sourced triangle-identity requirement, refuted by a finite explicit category; never a dependency |
| `fs-left-adjoints-preserve-limits` | literature-derived | ai-altered | standard direction error, refuted by the free-group product |
| `fs-every-functor-with-a-left-adjoint-also-has-a-right-adjoint` | ai-altered | ai-altered | source-adapted adjoint-direction misconception, witnessed by the free-group underlying-set functor; never a dependency |
| `fs-the-hom-set-form-of-an-adjunction-needs-no-size-hypothesis` | ai-altered | ai-altered | source-adapted size misconception motivating item 2; never a dependency |

### B page

| item | statement | proof | rationale |
|---|---|---|---|
| `ex-unit-and-counit-of-the-free-group-adjunction` | literature-derived | ai-altered | RI Ex. 4.2.4 |
| `ex-unit-and-counit-of-the-free-vector-space-adjunction` | literature-derived | ai-altered | LE Ex. 2.2.1 adapted to the published free-module interface |
| `ex-the-galois-connection-between-ideals-and-varieties` | literature-derived | ai-altered | RI Ex. 4.4.2 |
| `ex-the-free-category-on-a-quiver` | literature-derived | ai-altered | RI Ex. 4.1.13 |
| `ex-groupoid-inclusion-is-left-adjoint-to-the-maximal-subgroupoid` | literature-derived | ai-altered | RI Ex. 4.1.15 |
| `ex-frobenius-reciprocity-for-group-representations` | literature-derived | ai-altered | RI Ex. 4.1.11, with induction constructed by finite-support functions instead of tensor products |
| `cex-a-componentwise-family-that-is-not-a-unit` | ai-generated | ai-altered | explicit two-object category witness; leaf and never a dependency |
| `cex-an-adjunction-whose-triangle-identities-fail-for-a-wrong-counit` | ai-generated | ai-altered | explicit identity-functor scalar endomorphism witness; leaf and never a dependency |
| `ex-adjunction-between-preorders-computed` | ai-altered | ai-altered | concrete division-algorithm instance of the sourced Galois-connection criterion |

The three source-adapted false statements on the A page and the two AI-generated
B-page counterexamples must receive explicit witness checking at authoring. None
may become a dependency target.

## Context checkpoint — 60 percent

- Owned artifacts: the 48-item A / 9-item B manifest exists; this notes file now
  contains the source, dependency, convention, split, and provenance ledgers.
  Coverage and proof-contract files remain to be written.
- Current substage: source-heading disposition and durable proof-obligation
  mapping.
- Checks completed: all 76 direct published dependencies were resolved and
  opened; B-leaf traps, page closure, duplicate ids, and same-page ordering were
  checked; source editions and exact ranges were verified.
- Open mathematical question: make the coextension action and Frobenius
  reciprocity conventions type-correct without importing tensor products. The
  selected right action formula is $(s\cdot h)(t)=h(ts)$, and the group
  coinduction action uses right translation; this must remain consistent in the
  final proof contracts.
- Exact next action: write the three-source coverage JSON, run its checklist,
  then write one proof contract for every proof-bearing item and rerun the
  manifest dependency audit.

### Checkpoint resumption verification

The checkpoint was read back from disk. Since it was written, the coverage file
has passed with 194 headings and the proof-contract file has been created for
all 48 proof-bearing items, with exact clauses quoted from direct published
dependencies. Reopening RI Example 4.1.11 exposed that the literature reserves
“Frobenius reciprocity” for induction left adjoint to restriction, not for the
coinduction right adjoint. The B-page example was therefore corrected to the
finite-support function construction of induction; it imports neither a group
algebra nor a tensor product. The exercise-heading harvest also added the
monomorphism/epimorphism preservation corollary, bringing the final A page to
51 items, together with the induced endofunctor adjunctions and the mates
invertibility warning. The next action is the final dependency, coverage, and live-plan gate
sweep.

## Final checks

- `node tools/validate-plan.mjs research/plan-spec.json`: exit 0; the live plan
  is acyclic and has no item-level cycles, forward references, B-page
  dependencies, or unresolved ids among pages with item lists.
- `node tools/coverage-checklist.mjs research/frontier-13-batch-6.coverage.json`:
  1 page, 194 harvested results, 0 errors, 0 warnings.
- The final scaffold audit resolves all 60 ids, all 88 direct published
  dependencies, every same-page order, and the complete declared-requires
  closure. It finds no undeclared prerequisite, forward reference, B-leaf
  dependency, duplicate id, or applied canonical-embedding notation.
- The proof-contract audit covers all 49 proof-bearing items with 49 contract
  bodies and 100 exact on-disk source-clause citations. Citation plans match
  manifest dependencies, every cited excerpt matches its named source section,
  and every contract contains all eight boundary dispositions.

## Blockers

None. Web access supplied the edition checks despite shell-level DNS being
unavailable; no permission prompt or escalation was needed.

The post-authoring `content-policy.mjs` and strict `proof-contract.mjs` checks
cannot be meaningful at step 2 because the 60 planned items do not yet exist in
`items/`; their expected `scope-item-missing` condition is not a scaffold
blocker. The two gates required by this dispatch and the step-2 structural
contract audit are green.

## Scaffold repair — 2026-08-15

The adjudicated step-3 repair changed no ids and added no items. The A page
remains at 51 items and the B page at 9.

- **F6.1:** the fixed-point corollary now states the poset hypothesis in its
  title and proof plan, exactly where antisymmetry is used to obtain equality.
  The preorder conclusion is separately stated as $FGF\cong F$ and
  $GFG\cong G$. Its existing provenance remains statement
  `literature-derived`, proof `ai-altered`: the equality is Riehl Corollary
  4.2.10, while the proof plan exposes the preorder comparison.
- **F6.2:** the ideal/variety example now cites
  `def-mutually-left-and-mutually-right-adjoint-contravariant-functors`, not the
  monotone `def-galois-connection`. This matches the two inclusion-reversing
  assignments and makes Riehl Definition 4.4.1 load-bearing in its intended
  example. Its provenance remains statement `literature-derived`, proof
  `ai-altered` from Riehl Example 4.4.2 with the closure calculations supplied
  locally.
- **F6.3:** the subgroupoid example now asserts only
  $\mathbf{Gpd}\hookrightarrow\mathbf{Cat}\dashv\operatorname{Core}$ and proves
  the natural factorisation through the maximal subgroupoid. The immutable id
  retains its historical wording, but the reader-facing title and proof plan no
  longer promise a triple. The Example 4.1.15 coverage row was separated into
  the included maximal-subgroupoid adjunction and a deferred
  groupoid-of-fractions adjunction whose reason names the missing free-groupoid
  and morphism-congruence quotient machinery. The narrowed statement is still
  `literature-derived` and its local proof remains `ai-altered`.
- The manifest `requires` list was synchronized with the orchestrator's
  adjudication by removing
  `conjugacy-and-simplicity-in-the-symmetric-groups`. No dependency used that
  page; the two approved D1 additions remain.

The eight formerly empty proof contracts now contain exact clauses for every
planned local fact and the proof steps that use them:
`lem-adjunct-formulas-are-mutually-inverse`,
`thm-naturality-of-the-adjunction-bijection-is-transposition-of-squares`,
`thm-equivalent-encodings-of-an-adjunction`,
`thm-adjoints-are-unique-up-to-unique-natural-isomorphism`,
`prop-an-adjoint-triple-induces-adjunctions-between-its-endofunctors`,
`cor-a-galois-connection-satisfies-fgf-equals-f-and-gfg-equals-g`,
`cor-a-right-adjoint-is-left-exact-and-a-left-adjoint-is-right-exact`, and
`thm-the-free-monoid-functor-is-left-adjoint-to-the-underlying-set-functor`.
Their clauses are the exact Definition or Statement titles already fixed by the
earlier source items in this scaffold, and each `uses` list names step 1.1 (and
also step 1.2 for both facts used by the induced-endofunctor proposition). The
two repaired B examples' contracts were kept in sync with their corrected local
facts. Final contract census: 49 contracts, 0 empty citation arrays, 118
citations.

### Required gates

`node tools/validate-plan.mjs research/plan-spec.json` exited 0. Its exact
headline and terminal summary were:

```text
plan: 1176 pages (583 A + 583 B + 5 already published), 3879 new items, 4866 existing ids available
item lists written for 244/1171 planned pages — the rest are validated at PAGE level only
3878/3879 planned items already authored into items/
OK — declared page order is acyclic and consistent; no item-level cycles, forward
references, B-page dependencies, or unresolved ids among the 244 page(s) with item lists.
NOTE: 927 planned page(s) carry no item list yet (marked * above). Their reading
order is guaranteed; their item dependencies are not yet asserted, so re-run this
after writing each page's items.
```

The command's verbose middle section printed the full reading order and the
existing `redundant-prereq` warnings; neither produced a hard error.

```text
$ node tools/coverage-checklist.mjs research/frontier-13-batch-6.coverage.json
coverage-checklist: 1 page(s), 195 harvested result(s), 0 error(s), 0 warning(s)

$ node tools/content-policy.mjs research/frontier-13-batch-6.pages.json --manifest-only
content-policy: 60 scoped item(s), 0 error(s), 0 warning(s)
```

Both commands exited 0.

### Dependency-closure audit

The post-repair audit resolved every published dependency to the library page
that lists it and checked that page against the transitive `requires` closure of
the citing page. It also indexed all seven run manifests at pair granularity and
treated every examples-page target as forbidden, including a same-B-page edge.
Exact output:

```text
dependency-closure audit: 60 items, 180 dependency edges (68 same-pair, 112 published)
unresolved ids: 0
out-of-closure published deps: 0
cross-pair edges: 0
B-leaf deps: 0
duplicate ids: 0
unpublished deps: 0
not-earlier same-pair deps: 0
```

### Blocker

None.

## Second scaffold repair — 2026-08-15

The second adjudicated repair added no items. The A page remains at 51 items,
the B page remains at 9, and the proof-contract scope remains 49 items.

- **F6.5:**
  `cor-a-galois-connection-satisfies-fgf-equals-f-and-gfg-equals-g` now depends
  on both `def-galois-connection` and `def-partial-order`. The latter supplies
  the load-bearing antisymmetry step: its exact Definition clause, “**(A)**
  *antisymmetry*: if $x \le y$ and $y \le x$, then $x = y$,” is recorded as
  `F1` and mapped to step 1.1 in the proof contract. No provenance changed:
  the source-backed corollary statement remains `literature-derived` and its
  locally adapted proof plan remains `ai-altered`.
- **F6.6:** the unauthored scaffold id
  `ex-the-maximal-subgroupoid-and-fractions-adjoint-triple` was renamed to
  `ex-groupoid-inclusion-is-left-adjoint-to-the-maximal-subgroupoid`, matching
  the narrowed title and proof plan. Every reference in `pages.json`,
  `coverage.json`, and `proof-contracts.json` was updated, including the
  contract scope, contract key, and boundary rationale. The old id is absent
  from those three current semantic artifacts, and no `aliases` entry was
  added. Its existing statement `literature-derived` / proof `ai-altered`
  provenance rationale is unchanged.

The contract census is now 49 contracts, 0 empty citation arrays, and 119
citations.

### Required gates

`node tools/validate-plan.mjs research/plan-spec.json` exited 0. Its exact
headline and terminal summary were:

```text
plan: 1176 pages (583 A + 583 B + 5 already published), 3879 new items, 4866 existing ids available
item lists written for 244/1171 planned pages — the rest are validated at PAGE level only
3878/3879 planned items already authored into items/
OK — declared page order is acyclic and consistent; no item-level cycles, forward
references, B-page dependencies, or unresolved ids among the 244 page(s) with item lists.
NOTE: 927 planned page(s) carry no item list yet (marked * above). Their reading
order is guaranteed; their item dependencies are not yet asserted, so re-run this
after writing each page's items.
```

The verbose middle section printed the full reading order and the existing
`redundant-prereq` warnings; neither produced a hard error.

```text
$ node tools/coverage-checklist.mjs research/frontier-13-batch-6.coverage.json
coverage-checklist: 1 page(s), 195 harvested result(s), 0 error(s), 0 warning(s)

$ node tools/content-policy.mjs research/frontier-13-batch-6.pages.json --manifest-only
content-policy: 60 scoped item(s), 0 error(s), 0 warning(s)
```

Both commands exited 0.

### Dependency-closure audit

The audit resolved every published dependency to its listing page, checked that
page against the transitive declared-`requires` closure of the citing page, and
indexed all seven frontier-13 manifests at pair granularity. Exact output:

```text
dependency-closure audit: 60 items, 181 dependency edges (68 same-pair, 113 published)
unresolved ids: 0
out-of-closure published deps: 0
cross-pair edges: 0
B-leaf deps: 0
duplicate ids: 0
unpublished deps: 0
not-earlier same-pair deps: 0
```

### Blocker

None.

## Third scaffold repair — 2026-08-15

The third adjudicated repair changed only four Riehl section-heading names in
the coverage harvest. The recorded §4.2, §4.3, §4.4, and §4.6 paraphrases were
replaced by the second edition's printed titles: *The unit and counit as
universal arrows*, *The calculus of adjunctions*, *Contravariant and
multivariable adjoint functors*, and *Adjunctions, limits, and colimits*.
Section 4.7, every source boundary, every disposition, every item id, and every
dependency remain unchanged.

No items were added. The A page remains at 51 items with 9 places of headroom
under the 60-item ceiling, and the B page remains at 9 items. The recorded cut
after `thm-limits-and-colimits-are-adjoint-to-the-diagonal-functor` remains in
reserve for step 5.

### Required gates

Both requested commands exited 0 with exact output:

```text
$ node tools/coverage-checklist.mjs research/frontier-13-batch-6.coverage.json
coverage-checklist: 1 page(s), 195 harvested result(s), 0 error(s), 0 warning(s)

$ node tools/content-policy.mjs research/frontier-13-batch-6.pages.json --manifest-only
content-policy: 60 scoped item(s), 0 error(s), 0 warning(s)
```

### Dependency-closure audit

The unchanged batch was re-audited by resolving every published dependency to
the library page that lists it, checking that page against the citing page's
transitive declared-`requires` closure, and indexing all seven frontier-13
manifests at pair granularity. Exact output:

```text
dependency-closure audit: 60 items, 181 dependency edges (68 same-pair, 113 published)
unresolved ids: 0
out-of-closure published deps: 0
cross-pair edges: 0
B-leaf deps: 0
duplicate ids: 0
unpublished deps: 0
not-earlier same-pair deps: 0
```

### Blocker

None.

## Fourth scaffold repair — 2026-08-15

The fourth adjudicated repair added, removed, and reordered no items. The A page
remains at 51 items and the B page remains at 9 items.

- **F6.8:** the B-page provenance row is now keyed by
  `ex-groupoid-inclusion-is-left-adjoint-to-the-maximal-subgroupoid`. Its
  statement `literature-derived` / proof `ai-altered` rationale remains RI
  Ex. 4.1.15; only the dead row key was corrected.
- **F6.9:** the following eight proof-contract citations now quote the actual
  source proposition used at planned step 1.1 rather than its introductory
  fragment:
  1. `thm-adjunctions-compose` F1 quotes the full interchange identity
     $(\beta'\circ\beta)*(\alpha'\circ\alpha)
     =(\beta'*\alpha')\circ(\beta*\alpha)$.
  2. `thm-mates-under-a-pair-of-adjunctions` F1 quotes the same full
     interchange identity.
  3. `thm-fullness-and-faithfulness-of-a-right-adjoint-read-off-the-counit`
     F3 quotes the clause $r\circ f=1_A$ implying that $f$ is a split
     monomorphism and a section.
  4. `thm-abelianisation-is-left-adjoint-to-the-inclusion-of-abelian-groups`
     F1 quotes $G^{\mathrm{ab}}:=G/[G,G]$ as the abelianisation.
  5. The same theorem's F2 quotes the commutator formula
     $[g,h]:=ghg^{-1}h^{-1}$.
  6. `ex-the-galois-connection-between-ideals-and-varieties` F3 quotes the
     left-, right-, and two-sided-ideal conditions.
  7. The same example's F4 quotes the two-sided-ideal criterion: nonempty,
     closed under $x-y$, $rx$, and $xr$.
  8. `ex-adjunction-between-preorders-computed` F2 quotes
     $m\le n\iff\exists k\in\mathbb N\,(m+k=n)$.

All eight replacements match their cited Definition or Statement on disk under
the proof-contract gate's whitespace normalization. The contract census remains
49 contracts, 0 empty citation arrays, and 119 citations. No dependency,
provenance classification, coverage disposition, or page metadata changed.

### Requested gates

Both requested commands exited 0 with exact output:

```text
$ node tools/coverage-checklist.mjs research/frontier-13-batch-6.coverage.json
coverage-checklist: 1 page(s), 195 harvested result(s), 0 error(s), 0 warning(s)

$ node tools/content-policy.mjs research/frontier-13-batch-6.pages.json --manifest-only
content-policy: 60 scoped item(s), 0 error(s), 0 warning(s)
```

### Dependency-closure audit

The audit again resolved every published dependency to its first published home
page, checked that home against the citing page's transitive declared-`requires`
closure, and indexed all seven frontier-13 manifests at pair granularity. Exact
output:

```text
dependency-closure audit: 60 items, 181 dependency edges (68 same-pair, 113 published)
unresolved ids: 0
out-of-closure published deps: 0
cross-pair edges: 0
B-leaf deps: 0
duplicate ids: 0
unpublished deps: 0
not-earlier same-pair deps: 0
```

### Blocker

None.

## Step 5 authoring record — 2026-08-15

All 60 spliced ids were authored in place: 51 A-page items and 9 B-page
examples or counterexamples. Every item remains `status: draft` and
`origin: session`, and no item carries `verification.audited`. The A-page body
is the lead Alpha's replacement summary verbatim. The B page ends at its
frontmatter and has no authored summary body.

### Provenance rationale

The literature-derived statements retain the classifications recorded above;
their proofs are new adaptations to the published interfaces and therefore
remain `ai-altered`. Definitions and remarks have `proof: not-applicable`.
The two explicit B-page counterexamples remain `ai-generated` statements with
`generation.role: counterexample`, and they are leaves. The three synthetic
A-page false claims were changed from the scaffold's `ai-generated` label to
`ai-altered`: each is a source-adapted misconception obtained by deleting or
reversing a condition in the cited adjunction results, rather than a permitted
generated construction.

### Dependency and contract reconciliation

Three authored arguments required their dependency records to move with the
proof actually written.

1. `thm-unit-components-are-initial-in-their-comma-categories` now cites the
   unit-counit definition, transposition definition, and inverse-transposition
   lemma directly. This keeps its universal-arrow proof size-free instead of
   routing the load through the locally small hom-set theorem alone.
2. `lem-words-satisfy-the-free-monoid-universal-property` now cites
   `def-nat-addition` and `lem-nat-add-associative`, which are used to type and
   associate concatenation of finite functions.
3. `fs-the-hom-set-form-of-an-adjunction-needs-no-size-hypothesis` cites the
   unit-counit definition itself rather than treating the non-proof-bearing
   size remark as a load-bearing source.

The page manifest and item frontmatter agree on all three changes. No coverage
disposition changed. The proof-contract artifact was rebuilt from the authored
Facts & Assumptions and numbered steps: 49 contracts contain 163 exact source
citations and 220 separately mapped derivations. Each citation quotes the
complete applicable Definition, Statement, Statement refuted, or Example
section on disk, so planned titles and all 18 hollow opening-fragment citations
have been eliminated. The strict proof-contract check reports 0 errors and 0
warnings.

### Gate output

All prescribed commands exited 0. The concise outputs and the terminal status
lines from the three verbose global inventory checks are reproduced verbatim;
`depcheck`, `fwdcheck`, and `extcheck` also printed their repository-wide legacy
warning inventories.

```text
$ node tools/tsx-run.mjs tools/precheck.mts
3646 checked, 0 failing — all clean

$ node tools/depcheck.mjs
depcheck: 4642 items (4128 published), 274 pages
OK — no cycles, all references resolve, no draft items on published pages.

$ node tools/fwdcheck.mjs
fwdcheck: 4642 items, 0 open forward reference(s), 399 closed, 34 load bearing
OK — every forward reference is declared, points strictly forward, is closed by a planned later page, stays off the spine unless orientation only, and introduces no cycle.

$ node tools/extcheck.mjs
extcheck: 4642 items, 116 recorded-not-proved, 124 resting on them
119 warning(s):
OK — every recorded-not-proved statement is a cited remark with no proof, and every consequence is marked.

$ node tools/rendercheck.mjs
OK — 4916 file(s): no wikilink inside math, no nested or unbalanced
delimiters, no multiline display block, every math span parses under the real
KaTeX, and every frontmatter block parses under the renderer's
YAML parser.

$ node tools/prosecheck.mjs
4916 file(s) checked. 0 error(s), 568 warning(s).
  library-scope-denial: 206
  count-in-prose: 189
  count-of-this-page: 173

(re-run with --warnings to list them; warnings are heuristic and have legitimate cases)

OK — no positional claim contradicts the spec.

$ node tools/content-policy.mjs research/frontier-13-batch-6.pages.json
content-policy: 60 scoped item(s), 0 error(s), 0 warning(s)

$ node tools/coverage-checklist.mjs research/frontier-13-batch-6.coverage.json
coverage-checklist: 1 page(s), 195 harvested result(s), 0 error(s), 0 warning(s)

$ node tools/proof-contract.mjs research/frontier-13-batch-6.proof-contracts.json --strict
proof-contract: 0 error(s), 0 warning(s), 49/49 item(s) checked
```

### Blocker

None.
