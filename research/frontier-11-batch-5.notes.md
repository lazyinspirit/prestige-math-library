# frontier-11 batch 5 — Step-5 authoring notes

Beta: `Beta-frontier-11-5`  
Run/date: `frontier-11`, 2026-08-12  
Writable scope: `research/frontier-11-batch-5.pages.json`,
`research/frontier-11-batch-5.notes.md`,
`research/frontier-11-batch-5.coverage.json`, and
`research/frontier-11-batch-5.proof-contracts.json`

## Outcome, split decision, and page summaries

No split is proposed. The manifest sizes are:

| page | kind | manifest size |
|---|---|---:|
| `universal-properties-and-the-yoneda-lemma` | A | 21 |
| `universal-properties-and-the-yoneda-lemma-examples` | B | 14 |

The A page is well below the owner’s hard split threshold. No result found in
the harvested ranges was removed for size.

Final two-paragraph A-page summary:

> Locally small categories supply set-valued hom-collections, while opposite
> and product categories control their variance. Functors, natural
> transformations, and natural isomorphisms provide the laws used below; the
> small-source convention for functor categories separates actual presheaf
> categories from large-source metatheoretic notation. Initial, terminal, and
> comma categories supply the categorical language for universal
> factorisations.

> The hom-assignments assemble into a bifunctor and lead to representable
> functors, representations, and generalized elements. Evaluation at an
> identity gives the Yoneda bijection, its naturality in both variables, and the
> contravariant form. For a small source, the Yoneda functor is fully faithful
> and detects object isomorphisms. Universal elements then express
> representations by unique factorisation, yielding compatible uniqueness,
> their initial or terminal descriptions in categories of elements, and the
> corresponding comma-category descriptions of universal arrows.

The B page has no summary body. It computes products, coproducts, exponentials,
free monoids, free groups, polynomial rings, a one-point space, a poset
presheaf, a nonrepresentable functor, canonical uniqueness, a walking-arrow
Yoneda embedding, and the monoid-action form of Yoneda. Its false statements
isolate the two principal smallness and uniqueness mistakes.

## Canonical-coverage harvest

The machine receipt is `research/frontier-11-batch-5.coverage.json`. After the
Y1 re-harvest it contains 134 source-native or canonical headings:

| disposition | headings |
|---|---:|
| included | 70 |
| inline | 7 |
| already published | 1 |
| deferred | 15 |
| out of scope | 41 |

This differs materially and deliberately from the original 47-heading receipt.
Riehl changed from 17 selected entries to 67 rows covering every section and
numbered Definition, Example, Proposition, Theorem, Remark, and Corollary in
§§2.1–2.4 (with multi-part Examples split where their dispositions differ).
Leinster changed from 11 selected entries to 48 rows covering every section,
numbered named result, and named subsection in §§4.1–4.3. The 6 Campbell rows,
3 Spivak rows, and 10 canonical rows are unchanged.

The locators changed too. Riehl now records the complete sections on printed
pp. 54–80 instead of stopping the stated reading at pp. 69 and 77. Leinster's
old ranges did not match the book's printed pagination; the corrected locator
is §4.1 pp. 84–92, §4.2 pp. 93–98, and §4.3 pp. 99–106 in the official arXiv
PDF. Neither row says “selected” now.

The complete Leinster enumeration exposed one small in-scope gap that Alpha
could not see without source access: Definition 4.1.25, generalized elements
and their shapes. It is now scaffolded as
`def-generalized-element-and-shape`, depending only on the published
`def-category`; the item will define a generalized element of $A$ of shape $S$
as a morphism $S\to A$ and record ordinary elements of sets as the
singleton-shaped case. It is literature-derived and has no proof component, so
it adds no proof-contract row. No other enumerated heading exposed machinery
needed by a retained result.

The 15 deferred rows identify their actual owner: tensor/free-module material
goes to `tensor-products-of-modules`, adjunction material to
`adjunctions-and-the-adjoint-functor-theorems`, and Campbell's preservation
result to `limits-and-colimits`. The 41 out-of-scope rows are predominantly
source survey examples in algebraic topology, power-set/Sierpinski
classification, group torsors and presentations, discrete fibrations, or
concrete algebra. Each has a result-specific reason in the receipt. Cayley's
theorem is the one exact already-published match. Riehl Corollary 2.2.10 was
not tagged `already-published`: the disk item
`thm-elementary-row-operations-are-left-multiplication` proves only the three
elementary row operations, while Riehl classifies arbitrary natural row
operations. Treating those statements as identical would overstate disk
coverage.

## Source ledger and licensing

Every URL in this table was opened during the scaffold. The precise ranges read
and the source’s own headings are recorded in the coverage JSON.

| code | source and exact URL | role |
|---|---|---|
| RIE | Emily Riehl, *Category Theory in Context*, Chapter 2, <https://emilyriehl.github.io/files/context.pdf> | Textbook primary for representables, Yoneda with both naturalities, universal elements, categories of elements, the size warning, and `Z[x]` representing the underlying set of an arbitrary unital ring. |
| LEI | Tom Leinster, *Basic Category Theory*, Chapter 4, <https://arxiv.org/pdf/1612.09375.pdf> | Independent textbook treatment of the hom-bifunctor, both variances, generalized elements, Yoneda, full faithfulness, and isomorphism of representables. |
| CAM | Justin Campbell, Harvard Math 55b tutorial notes, §§1–2, <https://people.math.harvard.edu/~campbell/tutnotes1.pdf> | Independent short course-note treatment of universal elements, products, uniqueness, and a nonrepresentable functor. |
| SPI | David I. Spivak, *Category Theory for Scientists*, §§3.1.1 and 3.1.4, <https://ocw.mit.edu/courses/18-s996-category-theory-for-scientists-spring-2013/9cf51d1394fc107baa6764d553dd0bb6_MIT18_S996S13_textbook.pdf> | Textbook construction of the free word monoid and the natural bijection out of it. |

LEI is published under CC BY-NC-SA 4.0 as stated in its front matter. SPI is
distributed through MIT OpenCourseWare. RIE and CAM are author-posted PDFs; no
reusable licence is assumed for them. All four sources are used for mathematical
checking and short citations only. Step 5 must use original prose and must not
reproduce a source’s exposition or exercises.

The following additional source-backed routes were opened or checked for the B
examples:

- `items/def-free-group.md`,
  `items/thm-reduced-words-form-the-free-group.md`, and
  `items/thm-free-groups-unique-up-to-unique-isomorphism.md` supply the exact
  free-group universal property and its compatible uniqueness statement.
- `items/def-polynomial-ring-over-a-commutative-ring.md` supplies the
  coefficient-sequence construction of `Z[x]`;
  `items/thm-int-comm-ring.md` supplies the coefficient ring, and
  `items/lem-integer-multiples-in-a-ring.md` makes every integer scalar central
  in an arbitrary unital target. The published polynomial universal-property
  theorem was also opened, but its target is assumed commutative, so it is not
  used to carry the stronger `Ring` example. No examples-page item is a
  dependency.
- The elementary one-point-space, tagged-coproduct, poset, and walking-arrow
  computations are checkable companion constructions. They use no external
  fallback and no later page.

## Ownership audit of the published prerequisite

Both published pages were opened in full:

- `library/category-theory/categories-functors-and-natural-transformations.md`
  has 60 A-page items. It already owns category and size conventions,
  subcategories, opposite categories and duality, initial and terminal objects,
  functors, full and faithful functors, embeddings, natural transformations and
  their compositions, product categories, functor categories and their size
  qualifications, natural isomorphisms, equivalences, comma categories, slices,
  coslices, and the diagram/functor-category machinery.
- `library/category-theory/categories-functors-and-natural-transformations-examples.md`
  has 25 leaf examples, including underlying-set/forgetful functors and free
  group/free module functors.

Page 359 does **not** define either hom-functor, the hom-bifunctor, presheaves,
representable functors or representations, Yoneda, universal elements,
categories of elements, universal arrows, or uniqueness of initial, terminal,
or representing objects. Those are the exact gaps filled here. Nothing owned by
359 is restated.

The two relevant 359 companion items,
`ex-underlying-set-and-forgetful-functors` and
`ex-free-group-and-free-module-functors`, were opened on disk. They are examples
page leaves, and the latter has an AI-generated proof component. Neither is a
dependency. The new free-group item instead cites the literature-derived
published A-page universal-property items directly. This preserves the B-page
leaf rule.

`free-groups-and-presentations` and its companion were also opened in full. The
current published pair contains the exact free-group definition, reduced-word
construction, and unique compatible isomorphism needed here; the earlier thin
6+1 shape mentioned in the dispatch is no longer the disk state.

## Size, variance, and convention decisions

1. The Yoneda lemma is stated for a **locally small** category. Smallness is not
   added. The proof first constructs the evaluation bijection and only then
   concludes that the natural-transformation collection is a set.
2. For a large locally small source, the page does not form an actual functor
   category under the published set/class convention. The formulas still give
   representable presheaves and local full-faithfulness bijections. The notation
   `y:C -> [C^op,Set]` is reserved for small `C`; the large case is called the
   Yoneda assignment.
3. RIE and LEI use the standard name “Yoneda embedding” for the fully faithful
   Yoneda functor. The published `def-embedding-of-categories` additionally
   requires injectivity on objects, which full faithfulness does not imply. The
   page keeps the traditional name, proves full faithfulness, and claims a full
   embedding in the library’s stronger sense only when the object map is
   injective.
4. The covariant Yoneda formula is proved first. The presheaf formula is derived
   from the opposite category, and every precomposition direction is written
   explicitly. RIE and LEI use different superscript/subscript hom notation;
   the library uses `C(a,-)` and `C(-,a)` throughout.
5. CAM uses “corepresentable” for the covariant variance and “representable” for
   the contravariant variance. The library avoids that unstable terminology and
   always says **covariantly representable** or **contravariantly representable**
   when the variance could be ambiguous.
6. For a covariant `F:C->Set`, `(R,u)` is initial in its category of elements.
   For a presheaf `P:C^op->Set`, `(R,u)` is terminal. This fixes the projection
   and arrow convention before the proofs are written.
7. Universal arrows from `X` to `U` are initial in `(X downarrow U)`; universal
   arrows from `U` to `X` are terminal in `(U downarrow X)`. The two clauses are
   not merged by an implicit variance reversal.
8. The older prose correctly says that the underlying-set functor
   `Ring -> Set` is represented by `Z[x]`, even though `Ring` includes
   noncommutative targets. The image of a commutative source need only commute
   with the rest of that image, not with every target element. Evaluation at an
   arbitrary `r` works because integer scalars are central and powers of `r`
   commute with one another. The published polynomial universal-property
   theorem assumes a commutative target, so this example proves the convolution
   formula directly rather than citing that narrower theorem.
9. “Canonical isomorphism” means the unique isomorphism compatible with the
   chosen universal elements. Merely observing that two representing objects
   happen to be isomorphic is insufficient.
10. The proof of Yoneda is choice-free: every inverse natural transformation is
   given by a formula. No selection from a family of nonempty sets occurs.
11. No canonical embedding is applied to a natural number. Bare basis/unit
    notation is not needed in this scaffold.

## Prose-scaffold amendments for Step 4

These are proposals only; this Beta did not edit the shared prose scaffold.

### `research/plan-combinatorics-and-categories.md`, CT-2

Preserve the clause:

> `representability of the forgetful functor Ring->Set by Z[x]`

At authoring time, add the proof note that evaluation in a noncommutative target
is still multiplicative because integer scalars are central and powers of the
chosen element commute. Do not cite the narrower published polynomial theorem
as though its target were arbitrary.

Replace the false-statement clause:

> `Nat(F,G) is a set for arbitrary functors between locally small categories (§6.3(2), and the honest refutation is a size argument — if it cannot be written as a proof from the library's cardinal arithmetic at 229, it becomes a Remark)`

with:

> `Add a Remark: local smallness alone does not make Nat(F,G) a set for arbitrary F and G, whereas the explicit Yoneda bijection proves sethood when the source functor is representable. Do not assert a global counterexample unless its proper-class calculation is proved from available size machinery.`

Add after the Yoneda-embedding clause:

> `Under the library's size convention, y:C->[C^op,Set] is an actual functor when C is small. For an arbitrary locally small C, state the objectwise Yoneda assignment and its local full-faithfulness bijections without silently forming a large-source functor category.`

Append to the standard “Yoneda embedding” terminology:

> `The Yoneda functor is fully faithful. Under def-embedding-of-categories, which also requires injectivity on objects, call it a full embedding only when that extra condition holds; “Yoneda embedding” is retained as the traditional proper name.`

The heading still says order 289 because this prose scaffold predates the
frontier-11 renumbering. The machine authority is `research/plan-spec.json`,
where this pair is orders 361 and 362; no prose-order edit is required for the
mathematics.

## Planned component provenance

“AI-altered” means a source-backed statement or proof is adapted to the
library’s size convention, variance convention, or decomposition. An
AI-generated statement appears only on a checkable B-page example and is never
a dependency target.

### A page

| item | statement | proof | rationale / source |
|---|---|---|---|
| `def-hom-functors-and-hom-bifunctor` | literature-derived | not-applicable | RIE §2.1 and LEI Definitions 4.1.1, 4.1.16, 4.1.22. |
| `thm-hom-assignments-are-functors` | literature-derived | ai-altered | RIE/LEI formulas; split from the bifunctor to expose both variance checks. |
| `thm-hom-assignment-is-a-bifunctor` | literature-derived | ai-altered | LEI Definition 4.1.22; proof written from associativity and commuting pre/postcomposition. |
| `def-generalized-element-and-shape` | literature-derived | not-applicable | LEI Definition 4.1.25; a generalized element of shape $S$ is a morphism with domain $S$. |
| `def-presheaf-representable-functor-and-representation` | ai-altered | not-applicable | RIE Definition 2.1.4 and LEI Definitions 4.1.3/4.1.17, with both variances named explicitly. |
| `prop-initial-and-terminal-objects-as-representations` | literature-derived | ai-altered | RIE Definition 2.1.3; both variances and the empty-category boundary retained. |
| `thm-initial-and-terminal-objects-are-unique-up-to-unique-isomorphism` | literature-derived | ai-altered | Standard RIE/LEI universal-property proof, made explicitly unique. |
| `lem-yoneda-evaluation-bijection` | literature-derived | ai-altered | RIE Theorem 2.2.4 and LEI Theorem 4.2.1; size-safe ordering and choice-free inverse formula. |
| `thm-yoneda-lemma-is-natural-in-both-variables` | literature-derived | ai-altered | Same two textbook theorems; separated so naturality cannot disappear behind the bijection proof. |
| `cor-contravariant-yoneda-lemma` | literature-derived | ai-altered | Dual form in RIE/LEI; translated through the published opposite-category convention. |
| `rem-size-of-natural-transformation-collections` | ai-altered | not-applicable | RIE Remark 2.2.7 plus the published functor-category size convention; no unsupported proper-class counterexample. |
| `def-yoneda-embedding` | ai-altered | not-applicable | LEI Definition 4.1.21 and RIE Corollary 2.2.8, restricted to an actual presheaf category only when the source is small. |
| `thm-yoneda-embedding-is-fully-faithful` | literature-derived | ai-altered | RIE Corollary 2.2.8 and LEI Corollary 4.3.7. |
| `cor-representable-presheaves-detect-isomorphism-of-objects` | literature-derived | ai-altered | RIE Proposition 2.3.1 and LEI Corollary 4.3.10. |
| `def-universal-element` | literature-derived | not-applicable | RIE Definition 2.3.3. |
| `thm-universal-elements-and-universal-factorisations` | literature-derived | ai-altered | CAM Proposition 1.2 and LEI Corollary 4.3.2, in both variances. |
| `thm-representing-objects-are-unique-up-to-unique-compatible-isomorphism` | literature-derived | ai-altered | RIE Corollary 2.3.2 and CAM Corollary 1.2.1. |
| `def-category-of-elements` | literature-derived | not-applicable | RIE Definitions 2.4.1–2.4.2. |
| `thm-universal-elements-are-initial-or-terminal-in-the-category-of-elements` | literature-derived | ai-altered | RIE Proposition 2.4.8; both arrow directions unpacked. |
| `def-universal-arrow-to-and-from-a-functor` | literature-derived | not-applicable | Standard comma-category formulation, source-checked against RIE’s universal-arrow discussion and the published comma convention. |
| `thm-universal-arrows-are-initial-or-terminal-in-comma-categories` | literature-derived | ai-altered | Standard universal-arrow theorem; proof is the literal comma-morphism equation. |

### B page

| item | statement / construction | proof / verification | rationale / source |
|---|---|---|---|
| `ex-set-products-as-representing-objects` | literature-derived | ai-altered | CAM Example 1.1 and Definition 2.1; direct Set formulas. |
| `ex-set-coproducts-as-representing-objects` | ai-generated | ai-generated | Checkable tagged-set construction required by the dispatch; no consumer. Add checkable-example `generation` at Step 5. |
| `ex-function-sets-as-exponential-representing-objects` | literature-derived | ai-altered | RIE Example 2.1.6(iv); currying and uncurrying. |
| `ex-free-monoid-universal-property-as-a-representation` | literature-derived | ai-altered | SPI Definition 3.1.1.15 and Proposition 3.1.4.9. |
| `ex-free-group-universal-property-as-a-representation` | ai-altered | ai-altered | Published literature-derived free-group universal property, recast as a natural representation; no 359 B-page dependency. |
| `ex-polynomial-ring-represents-the-underlying-set-functor-on-rings` | literature-derived | ai-altered | RIE Example 2.4.12(vi); direct convolution proof extends the published commutative-target polynomial theorem to arbitrary unital targets. |
| `ex-the-one-point-space-represents-the-underlying-set-functor-on-top` | ai-generated | ai-generated | Direct two-preimage continuity check; no consumer. Add checkable-example `generation`. |
| `ex-representable-presheaf-on-a-poset` | ai-generated | ai-generated | Direct empty/singleton hom-set table; no consumer. Add checkable-example `generation`. |
| `cex-the-doubling-functor-on-set-is-not-representable` | literature-derived | ai-altered | CAM Example 2.3; the singleton-value contradiction is shorter than invoking product preservation. |
| `ex-two-singletons-are-canonically-isomorphic-representing-objects` | ai-generated | ai-generated | Bounded Set witness for compatible uniqueness; no consumer. Add checkable-example `generation`. |
| `ex-yoneda-embedding-of-the-walking-arrow-category` | ai-generated | ai-generated | Finite category table required by the dispatch; no consumer. Add checkable-example `generation`. |
| `ex-yoneda-lemma-for-a-monoid-action` | ai-altered | ai-altered | RIE Proposition 2.2.3 generalized from a group to a monoid; the proof uses only unit and associativity. |
| `fs-yoneda-lemma-requires-a-small-category` | ai-altered | ai-generated | False claim refuted by the source-backed locally-small theorem and the published large locally small Set example; no consumer. |
| `fs-nonisomorphic-objects-can-have-isomorphic-representable-presheaves` | ai-altered | ai-generated | False claim refuted by the source-backed full-faithfulness corollary; no consumer. |

The AI-generated B constructions require explicit direct checks at Step 5, but
none requires a counterexample search beyond the witness already named. No
AI-generated Statement, Construction, or Example is a dependency target.

## Published dependencies opened from disk

Every dependency below was opened at `items/<id>.md`, confirmed published, and
its actual Definition, Statement, or Example clause was read. `component-lit`
means the component is literature-derived. `component-adapted/source` means an
AI-altered component was checked against the disk text and its cited or
harvested source. `component-adapted/knowledge` means the exact elementary
statement and the library convention were independently confirmed. No direct
dependency is legacy-unclassified or has an AI-generated statement component.

| dependency | confidence route | exact point used |
|---|---|---|
| `def-category` | component-adapted/source (RIE) | Objects, hom-collections, identities, composition, and laws. |
| `def-small-locally-small-and-large-category` | component-lit | Local smallness means each hom-collection is a set; smallness is stronger. |
| `def-opposite-category` | component-lit | Arrows and composition reverse. |
| `thm-category-theoretic-duality-principle` | component-lit | A proved categorical statement dualizes through the opposite category. |
| `def-product-category` | component-lit | Objects, morphisms, and composition are componentwise. |
| `def-isomorphism-groupoid-and-connected-category` | component-lit | Two-sided inverse definition and its uniqueness. |
| `def-initial-terminal-and-zero-object` | component-lit | Exactly one arrow out of an initial object or into a terminal object. |
| `def-functor-and-contravariant-functor` | component-lit | Object/arrow actions and identity/composition laws. |
| `def-full-faithful-and-essentially-surjective-functor` | component-lit | Full and faithful are surjective/injective on each hom-map. |
| `def-embedding-of-categories` | component-lit | An embedding is faithful and injective on objects; a full embedding is additionally full. |
| `def-natural-transformation` | component-lit | Component types and naturality square. |
| `def-vertical-composition-of-natural-transformations` | component-lit | Vertical composition and identity transformations are componentwise. |
| `def-natural-isomorphism` | component-adapted/source (RIE) | A natural transformation has a two-sided natural inverse without requiring a large-source functor category. |
| `def-functor-category` | component-adapted/source (RIE) | An actual functor category is formed for a small source; large-source notation is only metatheoretic. |
| `prop-size-of-functor-categories` | component-adapted/source (RIE) | Small source plus locally small target gives a locally small functor category. |
| `def-comma-slice-and-coslice-categories` | component-lit | Objects and the commuting-triangle equation in comma categories. |
| `prop-sets-and-functions-form-category-set` | component-lit | `Set` is a large locally small category. |
| `def-function` | component-lit | Total function with declared domain and codomain. |
| `def-injection-surjection-bijection` | component-adapted/knowledge | Bijection clauses and two-sided inverse convention. |
| `def-the-set-of-functions-from-one-set-to-another` | component-adapted/source | The functions `A->B` form the set `B^A`. |
| `def-cartesian-product` | component-lit | Ordered-pair model and coordinate membership. |
| `def-ordered-pair` | component-lit | Kuratowski pair and its two coordinates. |
| `thm-the-characterising-property-of-ordered-pairs` | component-lit | Equality of ordered pairs is equivalent to equality of both coordinates. |
| `def-union-of-a-set-and-binary-union` | component-lit | Binary union notation used for the tagged coproduct. |
| `lem-unions-and-intersections-of-small-families` | component-lit | A union indexed by a set is a set, so the tagged coproduct is a set. |
| `def-natural-numbers` | component-lit | The tags $0$ and $1$ are sets and are distinct. |
| `def-semigroup-and-monoid` | component-adapted/knowledge | Associative multiplication and a two-sided identity. |
| `def-group-homomorphism` | component-adapted/source (SPI) | A monoid homomorphism preserves multiplication and the identity. |
| `prop-monoids-and-groups-as-one-object-categories` | component-lit | A monoid is its one-object category with multiplication as composition. |
| `prop-groups-and-homomorphisms-form-category-grp` | component-lit | `Grp` is a large locally small category. |
| `def-free-group` | component-lit | Exact universal map from a generating set. |
| `thm-reduced-words-form-the-free-group` | component-lit | Reduced words construct a free group with that universal property. |
| `thm-free-groups-unique-up-to-unique-isomorphism` | component-lit | Unique isomorphism compatible with the generator maps. |
| `prop-rings-and-homomorphisms-form-category-ring` | component-lit | `Ring` means all unital rings and unit-preserving maps and is locally small. |
| `def-ring-homomorphism` | component-adapted/source (Judson reference) | A unital ring homomorphism preserves addition, multiplication, and one; zero follows. |
| `def-polynomial-ring-over-a-commutative-ring` | component-lit | Coefficient-sequence construction of `R[x]`. |
| `thm-polynomial-ring-is-a-commutative-ring` | component-lit | Convolution makes `Z[x]` a ring and embeds integer constants as a unital subring. |
| `thm-int-comm-ring` | component-lit | `Z` is a commutative unital ring. |
| `lem-integer-multiples-in-a-ring` | component-adapted/knowledge | Integer multiples satisfy `ma=(m 1)a=a(m 1)`, giving the canonical coefficient map. |
| `def-monoid-finite-product` | component-adapted/knowledge | Natural powers in a target ring are finite products in its multiplicative monoid, including exponent zero. |
| `thm-generalised-associativity` | component-adapted/source (Bourbaki reference) | The splitting law gives `r^(i+j)=r^i r^j` for the constant finite product. |
| `thm-induction-principle` | component-lit | Induction proves the recursive free-monoid extension is multiplicative for every word length. |
| `lem-finite-sum-reindexing-and-fubini` | component-adapted/source | Finite sums may be reindexed and rearranged over a finite product in the convolution calculation. |
| `def-topological-space` | component-adapted/knowledge | The singleton has its unique topology. |
| `def-continuous-map-top` | component-adapted/knowledge | Continuity is the open-preimage condition used for maps from a singleton. |
| `prop-topological-spaces-and-continuous-maps-form-category-top` | component-lit | `Top` is a large locally small category. |
| `def-preorder` | component-lit | Reflexive/transitive order and monotone maps. |
| `prop-preorders-as-categories-and-monotone-maps-as-functors` | component-lit | A preorder is a thin category and its functors are monotone maps. |
| `def-generated-subgroup` | component-lit | The subgroup generated by a subset is the least subgroup containing it; used to show a free group on one generator contains only integral powers of that generator. |

No opened dependency was false. The apparent Ring/CRing mismatch was resolved
in favor of the existing prose after checking RIE Example 2.4.12(vi) and the
noncommutative convolution directly. The published size qualifications on
functor categories are essential and are carried into the scaffold rather than
normalized away.

## New-id and dependency-closure report

All 35 proposed item ids were searched in `items/` and the other research JSON
manifests before use; no collision or synonymous published statement was found.
The decomposition items with specific proof roles are:

- `def-generalized-element-and-shape` closes the source-native Leinster
  Definition 4.1.25 gap through the published `def-category`; as a definition,
  it is not load-bearing through any generated construction and needs no proof
  contract.
- `lem-yoneda-evaluation-bijection` isolates construction, inverse, sethood, and
  choice-freeness so `thm-yoneda-lemma-is-natural-in-both-variables` cannot skip
  the two naturality squares.
- `thm-hom-assignments-are-functors` precedes the bifunctor theorem and supplies
  the separate covariance and contravariance checks.
- `thm-universal-elements-and-universal-factorisations` supplies the exact
  equivalence used by uniqueness and by the category-of-elements theorem.

Every external manifest dependency resolves to a published item on a lower
page. Every other edge points to an earlier A-page item. There are no forward
references, homeless ids, external fallbacks, or cross-batch dependencies. No B
page item, whether published or planned, is used as a dependency.

## Proof and boundary obligations for Step 5

The durable machine map is
`research/frontier-11-batch-5.proof-contracts.json`. The high-risk obligations
are:

1. Construct the Yoneda evaluation map and its inverse before treating the
   natural-transformation collection as a set.
2. Prove both naturality equations: one for a morphism of representing objects
   and one for a natural transformation of target functors.
3. Keep the large locally small case out of an unlicensed functor category.
4. In full faithfulness, identify the Yoneda hom-map with postcomposition, not
   merely with an abstract bijection.
5. In representing-object uniqueness, prove compatibility with the universal
   elements and uniqueness of that compatible isomorphism.
6. Check that the variance of a category of elements makes the universal object
   initial in the covariant case and terminal in the presheaf case.
7. Check both comma-category triangle equations for the two orientations of a
   universal arrow.
8. For `Z[x]`, prove evaluation in an arbitrary unital ring directly: integer
   scalars are central, powers of the chosen element commute, and the finite
   convolution may be rearranged. Do not smuggle commutativity of the target
   through the narrower published polynomial theorem.
9. In the free-monoid proof, include the empty word, preservation of the monoid
   identity, and naturality in the target monoid.
10. In the walking-arrow table, include the empty hom-set and verify the action
    of the unique nonidentity arrow rather than listing object values only.

No repository finite-smoke type applies to these category-theoretic claims. The
finite Set, poset, singleton, and walking-arrow examples are hand-checkable but
must not be assigned an unrelated smoke-test type.

## Continuity checkpoint for the returning Step-5 author

The settled A-page spine is: hom-functors and bifunctor; representability;
initial/terminal base case and uniqueness; explicit Yoneda bijection; both
naturalities; dual Yoneda; size remark; small-source Yoneda functor (the
traditional Yoneda embedding); full
faithfulness and object-isomorphism corollary; universal elements and compatible
uniqueness; categories of elements; universal arrows and comma categories.

Do not merge the evaluation lemma into the naturality theorem, do not form
`[C^op,Set]` for an arbitrary large locally small `C`, do not cite either 359
companion example, and keep the polynomial representation on all of `Ring` with
its direct noncommutative-target proof. Preserve the exact item order and
dependency lists unless authoring exposes a real missing edge;
record any such amendment here before handoff.

## Step-5 authoring report

### Authored scope

All 35 scaffolded items are authored: 21 on the A page and 14 leaf items on the
B page. All are `status: draft` and `origin: session`. The A page has exactly
two nonempty summary paragraphs, each below 150 words; the B page has no body.
Twenty-seven items have numbered proofs or verifications and exact input maps in
`research/frontier-11-batch-5.proof-contracts.json`; eight definitions or
remarks correctly have no proof component. No B-page item is a dependency.

### Departures from the settled scaffold

No item was dropped, merged, or retitled, and no theorem was broadened or
narrowed. One finite B-page witness was generalized as recorded in item 10
below. The following dependency and justification amendments were necessary to
make every citation edge explicit; the same lists are recorded in
`research/frontier-11-batch-5.pages.json`.

1. `def-hom-functors-and-hom-bifunctor` adds both hom-functor theorems to
   `justified_by`, since the definition introduces assignments whose laws are
   proved immediately afterward.
2. `def-universal-element` and `def-category-of-elements` add their immediately
   following characterization theorems to `justified_by`.
3. `def-universal-arrow-to-and-from-a-functor` adds its comma-category theorem
   to `justified_by` and adds `thm-hom-assignments-are-functors` as a dependency.
   Its universal-arrow clauses remain valid for arbitrary categories; only the
   equivalent Set-valued universal-element wording is now explicitly qualified
   by local smallness of the target category.
4. `ex-set-products-as-representing-objects` adds
   `thm-the-characterising-property-of-ordered-pairs`.
5. `ex-set-coproducts-as-representing-objects` adds
   `lem-unions-and-intersections-of-small-families`,
   `thm-the-characterising-property-of-ordered-pairs`, and
   `def-natural-numbers` for sethood and the two distinct tags.
6. `ex-function-sets-as-exponential-representing-objects`,
   `ex-the-one-point-space-represents-the-underlying-set-functor-on-top`,
   `ex-representable-presheaf-on-a-poset`, and
   `ex-yoneda-embedding-of-the-walking-arrow-category` each add `def-function`
   for function construction or extensionality.
7. `ex-free-monoid-universal-property-as-a-representation` adds
   `def-monoid-finite-product`, `thm-generalised-associativity`, and
   `thm-induction-principle` for the empty word, recursive products, and the
   multiplicativity induction.
8. `ex-free-group-universal-property-as-a-representation` adds
   `def-generated-subgroup` for the singleton-generator specialization.
9. `cex-the-doubling-functor-on-set-is-not-representable` adds
   `def-cartesian-product`, `def-union-of-a-set-and-binary-union`,
   `lem-unions-and-intersections-of-small-families`, `def-ordered-pair`,
   `thm-the-characterising-property-of-ordered-pairs`, `def-natural-numbers`,
   and `def-function` for the explicit doubling construction and its
   singleton-cardinality contradiction.
10. `ex-two-singletons-are-canonically-isomorphic-representing-objects` adds
    `def-function`. Its witness was generalized from the fixed pair
    `\{0\},\{1\}` to arbitrary distinct singleton sets `\{s_0\},\{s_1\}`. This
    removes a needless numeral-specific side proof and makes the compatible
    unique isomorphism statement strictly more transparent without changing
    the claimed phenomenon.
11. `ex-yoneda-lemma-for-a-monoid-action` adds
    `def-natural-transformation` for the equivariant-map/naturality
    identification.

The canonical precheck repair changed only proof phase numbers: steps citing a
phase-$k$ step were moved to phase $k+1$. The stored proof contracts and all
in-prose step references were synchronized to that strict stratification.

### Verification

- Required precheck: 27 proof-bearing items checked, 0 failures, 0 repairs
  remaining; every proof-bearing item records `verification.precheck: pass`.
- Required plan validation: PASS; the declared order is acyclic and consistent,
  with no item cycle, forward reference, B-page dependency, or unresolved id.
- Strict proof-contract validation: 27/27 proofs, 0 errors, 0 warnings.
- Coverage validation: 1 page and 134 harvested headings, 0 errors, 0 warnings.
- Content policy: 35 scoped items, 0 errors, 0 warnings.
- Prose check: 37 item/page files, 0 errors, 0 warnings.
- Render check: 37 item/page files, 0 errors, 0 warnings.
- Forward-reference check: PASS, 0 open forward references; its repository-wide
  forward markers are inherited and do not name this pair.
- External-assumption check: PASS; its 84 repository-wide warnings are inherited
  and do not name this pair.
- Citation heuristic: PASS; its 26 repository-wide warnings do not name this
  pair.

The global dependency check is not green in the shared worktree: it reports four
`published-unaudited` errors for the four complex-number items being rewritten
under batch 1's express exception, plus pre-existing repository-wide warnings.
None of those four files is in this batch, and this pair contributes no
dependency-check error. The required `validate-plan.mjs` gate remains green.
Per the dispatch, `tools/gates.mjs` was not run.

### Final provenance distribution

Statement components are 23 `literature-derived`, 7 `ai-altered`, and 5
`ai-generated`. Proof components are 20 `ai-altered`, 7 `ai-generated`, and 8
`not-applicable`. The item-by-item rationale is in the two provenance tables
above. Each AI-generated mathematical-content item is a directly checked B-page
leaf with no consumer; no AI-generated statement or construction is
load-bearing.

### Blockers

There is no mathematical, source, licensing, dependency, size, or sandbox
blocker for this batch. The only non-green global diagnostic is the unrelated
shared-worktree dependency-check state described above. Nothing requested by
this dispatch was left undone.

## Step-6 reader artifact reconciliation

Reader 4 repaired citation fidelity, proof references, notation, and one
provenance classification without changing any title, Statement, item id, or
page assignment. The batch contract was synchronized to that disk text:
`lem-yoneda-evaluation-bijection` dropped its removed F4 contract and input;
the product, coproduct, exponential, one-point-space, and two-singleton
examples gained exact function-extensionality source clauses; the
one-point-space example also gained the exact continuity-characterisation
clause; and the coproduct and walking-arrow input maps gained their new fact
uses. The coproduct and exponential closing steps, the free-monoid and
free-group notation, the free-group representation step, and the polynomial
unit calculation were also updated to match the repaired proof text exactly.

No coverage row was retagged: the reader added, removed, and retargeted no
item, and all 134 harvested dispositions still name current items or retain
their recorded result-specific deferral. The strict proof-contract check now
passes 27/27 with zero errors or warnings, and the coverage checklist passes
one page / 134 headings with zero errors or warnings. I find no reader repair
mathematically wrong and have no blocker.

## Step-6 Beta contract-fidelity report (artifact-only)

This pass changed only `research/frontier-11-batch-5.proof-contracts.json` and
this appended report. No item file was edited. Each citation below now quotes
the current source item verbatim through the clause used by the mapped fact;
each boundary below now records what an existing proof step actually does.

### Citation rows changed

Defect class **truncated quote** (67 rows):

- `thm-hom-assignments-are-functors`: `F1 -> def-hom-functors-and-hom-bifunctor`;
  `F2 -> def-functor-and-contravariant-functor`.
- `thm-hom-assignment-is-a-bifunctor`: `F1 -> def-product-category`.
- `prop-initial-and-terminal-objects-as-representations`:
  `F2 -> def-presheaf-representable-functor-and-representation`.
- `lem-yoneda-evaluation-bijection`: `F1 -> def-hom-functors-and-hom-bifunctor`;
  `F2 -> def-natural-transformation`.
- `thm-yoneda-lemma-is-natural-in-both-variables`:
  `L1 -> lem-yoneda-evaluation-bijection`;
  `L2 -> thm-hom-assignment-is-a-bifunctor`;
  `F1 -> def-natural-transformation`;
  `F2 -> def-vertical-composition-of-natural-transformations`.
- `cor-contravariant-yoneda-lemma`:
  `L1 -> thm-yoneda-lemma-is-natural-in-both-variables`;
  `F1 -> def-opposite-category`.
- `thm-yoneda-embedding-is-fully-faithful`:
  `L1 -> cor-contravariant-yoneda-lemma`; `F1 -> def-yoneda-embedding`.
- `cor-representable-presheaves-detect-isomorphism-of-objects`:
  `L1 -> thm-yoneda-embedding-is-fully-faithful`.
- `thm-universal-elements-and-universal-factorisations`:
  `L1 -> lem-yoneda-evaluation-bijection`;
  `L2 -> thm-yoneda-lemma-is-natural-in-both-variables`;
  `L3 -> cor-contravariant-yoneda-lemma`; `F1 -> def-universal-element`.
- `thm-universal-elements-are-initial-or-terminal-in-the-category-of-elements`:
  `F1 -> def-category-of-elements`.
- `thm-universal-arrows-are-initial-or-terminal-in-comma-categories`:
  `F1 -> def-universal-arrow-to-and-from-a-functor`.
- `ex-set-products-as-representing-objects`:
  `F1 -> def-presheaf-representable-functor-and-representation`;
  `F4 -> def-function`.
- `ex-set-coproducts-as-representing-objects`:
  `F1 -> def-presheaf-representable-functor-and-representation`;
  `F3 -> lem-unions-and-intersections-of-small-families`;
  `F4 -> def-ordered-pair`.
- `ex-function-sets-as-exponential-representing-objects`:
  `F1 -> def-presheaf-representable-functor-and-representation`;
  `F3 -> def-the-set-of-functions-from-one-set-to-another`;
  `F5 -> def-function`.
- `ex-free-monoid-universal-property-as-a-representation`:
  `F1 -> def-semigroup-and-monoid`; `F2 -> def-group-homomorphism`;
  `F3 -> def-small-locally-small-and-large-category`;
  `F4 -> def-functor-and-contravariant-functor`;
  `F4 -> def-the-set-of-functions-from-one-set-to-another`;
  `F5 -> thm-generalised-associativity`;
  `F7 -> def-presheaf-representable-functor-and-representation`.
- `ex-free-group-universal-property-as-a-representation`:
  `F1 -> def-free-group`;
  `L2 -> thm-free-groups-unique-up-to-unique-isomorphism`;
  `F4 -> def-presheaf-representable-functor-and-representation`.
- `ex-polynomial-ring-represents-the-underlying-set-functor-on-rings`:
  `F2 -> def-polynomial-ring-over-a-commutative-ring`;
  `L2 -> lem-integer-multiples-in-a-ring`; `F3 -> def-ring-homomorphism`;
  `F4 -> thm-generalised-associativity`;
  `L3 -> lem-finite-sum-reindexing-and-fubini`;
  `F5 -> def-presheaf-representable-functor-and-representation`.
- `ex-the-one-point-space-represents-the-underlying-set-functor-on-top`:
  `F1 -> def-topological-space`;
  `F4 -> def-presheaf-representable-functor-and-representation`;
  `F5 -> def-function`.
- `ex-representable-presheaf-on-a-poset`: `F3 -> def-function`.
- `cex-the-doubling-functor-on-set-is-not-representable`:
  `F1 -> def-functor-and-contravariant-functor`;
  `F2 -> def-union-of-a-set-and-binary-union`;
  `F2 -> lem-unions-and-intersections-of-small-families`;
  `F3 -> def-ordered-pair`;
  `F4 -> def-the-set-of-functions-from-one-set-to-another`;
  `F4 -> def-function`.
- `ex-two-singletons-are-canonically-isomorphic-representing-objects`:
  `F2 -> def-presheaf-representable-functor-and-representation`;
  `F3 -> def-function`.
- `ex-yoneda-embedding-of-the-walking-arrow-category`:
  `F1 -> def-category`; `L1 -> thm-yoneda-embedding-is-fully-faithful`;
  `F3 -> def-function`.
- `ex-yoneda-lemma-for-a-monoid-action`:
  `F1 -> def-semigroup-and-monoid`;
  `L2 -> thm-yoneda-lemma-is-natural-in-both-variables`;
  `F3 -> def-natural-transformation`.
- `fs-yoneda-lemma-requires-a-small-category`:
  `L1 -> lem-yoneda-evaluation-bijection`;
  `F1 -> def-small-locally-small-and-large-category`.
- `fs-nonisomorphic-objects-can-have-isomorphic-representable-presheaves`:
  `L1 -> cor-representable-presheaves-detect-isomorphism-of-objects`;
  `L2 -> thm-yoneda-embedding-is-fully-faithful`.

Defect class **mismatched or materially incomplete quote** (12 rows):

- `thm-hom-assignment-is-a-bifunctor`:
  `F2 -> def-hom-functors-and-hom-bifunctor` now quotes the two-variable
  hom-assignment and its componentwise action, rather than a one-variable
  hom-functor clause.
- `thm-initial-and-terminal-objects-are-unique-up-to-unique-isomorphism`:
  `F2 -> def-isomorphism-groupoid-and-connected-category` now quotes the
  definition of an isomorphism, rather than the later groupoid paragraph.
- `thm-representing-objects-are-unique-up-to-unique-compatible-isomorphism`:
  `F1 -> def-isomorphism-groupoid-and-connected-category` has the same
  isomorphism-clause repair.
- `thm-universal-arrows-are-initial-or-terminal-in-comma-categories`:
  `F2 -> def-comma-slice-and-coslice-categories` now quotes the generic comma
  object, morphism, and compatibility equation, rather than only the later
  slice/coslice specialisations.
- `ex-set-coproducts-as-representing-objects`:
  `F4 -> def-natural-numbers` now includes the actual definitions of `0` and
  `1`, not just the construction preamble.
- `ex-free-monoid-universal-property-as-a-representation`:
  `F3 -> def-category` now includes the associativity and identity laws;
  `F5 -> def-monoid-finite-product` now includes the recursive product,
  empty-product, and one-term clauses.
- `ex-polynomial-ring-represents-the-underlying-set-functor-on-rings`:
  `F4 -> def-monoid-finite-product` now includes those finite-product clauses.
- `ex-the-one-point-space-represents-the-underlying-set-functor-on-top`:
  `F2 -> def-continuous-map-top` now quotes the definition of continuity,
  rather than an adjacent preimage observation.
- `cex-the-doubling-functor-on-set-is-not-representable`:
  `F3 -> def-natural-numbers` now includes the definitions of the two tags;
  `F5 -> def-presheaf-representable-functor-and-representation` now quotes the
  covariant representation clause used by the contradiction, rather than the
  presheaf clause.
- `ex-yoneda-embedding-of-the-walking-arrow-category`:
  `F2 -> def-yoneda-embedding` now quotes the Yoneda object and morphism action,
  rather than an adjacent incomplete clause.

### Boundary rows changed

Defect class **prospective, generic, invented, or non-working boundary anchor**:
the following 38 already-`checked` rows were rewritten to name the steps that
actually perform the check.

- `prop-initial-and-terminal-objects-as-representations`: `empty`, `one`,
  `degenerate`, `iff-forward`, `iff-reverse`.
- `lem-yoneda-evaluation-bijection`: `nonempty-choice`.
- `thm-universal-elements-and-universal-factorisations`: `iff-forward`,
  `iff-reverse`.
- `thm-universal-elements-are-initial-or-terminal-in-the-category-of-elements`:
  `iff-forward`, `iff-reverse`.
- `ex-set-coproducts-as-representing-objects`: `empty`, `degenerate`.
- `ex-function-sets-as-exponential-representing-objects`: `empty`.
- `ex-free-monoid-universal-property-as-a-representation`: `empty`, `zero`,
  `one`, `degenerate`.
- `ex-free-group-universal-property-as-a-representation`: `empty`, `one`,
  `degenerate`.
- `ex-polynomial-ring-represents-the-underlying-set-functor-on-rings`: `zero`,
  `one`, `degenerate`.
- `ex-the-one-point-space-represents-the-underlying-set-functor-on-top`:
  `empty`, `one`, `degenerate`.
- `ex-representable-presheaf-on-a-poset`: `empty`.
- `cex-the-doubling-functor-on-set-is-not-representable`: `empty`, `one`,
  `degenerate`.
- `ex-two-singletons-are-canonically-isomorphic-representing-objects`: `empty`,
  `zero`, `one`, `degenerate`.
- `ex-yoneda-embedding-of-the-walking-arrow-category`: `empty`, `zero`, `one`,
  `degenerate`.

Defect class **false `not_applicable` on a boundary or biconditional**: these
nine rows are now `checked` and anchored to the proof steps that handle them.

- `cor-representable-presheaves-detect-isomorphism-of-objects`: `iff-forward`
  (`1.1`) and `iff-reverse` (`1.2`, `2.1`).
- `thm-universal-arrows-are-initial-or-terminal-in-comma-categories`:
  `iff-forward` and `iff-reverse` (both directions are identified in `1.1`,
  `1.2`, `2.1`, and `3.1`).
- `ex-set-products-as-representing-objects`: `empty` and `degenerate`
  (uniform steps `1.1`--`2.3`).
- `ex-function-sets-as-exponential-representing-objects`: `degenerate`
  (`3.1`).
- `ex-representable-presheaf-on-a-poset`: `one` and `degenerate` (`1.1`,
  `2.1`).

The existing `not_applicable` `nonempty-choice` row for
`cor-representable-presheaves-detect-isomorphism-of-objects` was also changed:
its reason now states that step `1.2` makes two individual surjectivity choices,
not a choice from a varying family.

### Rows set to `not_applicable`

- `ex-set-coproducts-as-representing-objects`, `zero`: `0` is a fixed
  disjoint-union tag, not a zero-sized or zero-stage parameter; steps `1.2` and
  `2.2` use it uniformly through `F4`.
- `ex-set-coproducts-as-representing-objects`, `one`: `1` is the other fixed
  tag, not a cardinality-one boundary; steps `1.2` and `2.2` use it uniformly
  through `F4`.
- `ex-the-one-point-space-represents-the-underlying-set-functor-on-top`,
  `zero`: `1` names the singleton representing space and there is no numerical
  zero parameter or zero-stage construction.
- `cex-the-doubling-functor-on-set-is-not-representable`, `zero`: `0` is a
  fixed tag in `D`, not a variable zero boundary; steps `1.1` and `1.3` verify
  tag disjointness through `F3`.

### Findings for Alpha and blockers

There is no new mathematical finding: every contract row could be made true by
repairing only the artifact, so no quotation from an unrepairable item is
required. There is no blocker.

### Verification

- `proof-contract --strict`: 27/27 items, 0 errors, 0 warnings.
- All ten direction rows in the five biconditional batch statements are
  `checked`: both directions for initial/terminal representation,
  representable-presheaf object-isomorphism detection, universal
  element/factorisation, category-of-elements initial/terminality, and
  universal-arrow comma-category characterisation.
- The strict input-map pass confirms every numbered proof step exists in the
  current text and is covered exactly once.
- No item file was touched.
