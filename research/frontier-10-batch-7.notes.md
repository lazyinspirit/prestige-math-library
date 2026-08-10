# frontier-10 batch 7 — Beta scaffold notes

## Continuity checkpoint (Beta, steps 1–2)

Recorded after the mandatory workflow, schema, exemplar, prior-output, dispatch,
and prose-scaffold reads.  Disk verification found the batch-7 manifest at the
dispatch skeleton (`sha256 20b5291f5246f2ef2ad83d191169f038d340e79291bbf7cd21bf8922562dfc74`)
and no pre-existing batch-7 notes, coverage file, or proof-contract file.  The
worktree contains unrelated concurrent edits to `items/`, plus
`research/frontier-10-dispatch/` and `research/frontier-10-touches.json`; these
are outside this batch and must remain untouched.

All eight dispatched prerequisite pages have been opened on disk.  The primary
coverage harvest uses Emily Riehl, *Category Theory in Context*, Chapter 1
§§1.1–1.5 and §1.7, and Steven Awodey–Andrej Bauer, *Introduction to
Categorical Logic*, Chapter 1 §§1.1–1.4.3.  Alpha's repair additionally checked
Riehl Definition 1.4.3 and Mac Lane's determinant example in Chapter I §4.
The current design keeps the A page at (not over) the 60-item ceiling, so no
split is indicated; Alpha required only B-page additions and explicitly ruled
that the D2 contingency does not fire.

The checkpoint's remaining work is complete.  Every exact published dependency
was opened, the harvest was reconciled heading by heading, and the conventions,
page manifest, provenance plan, and proof contracts below are the durable handoff
to this Beta's Step-5 return.

## Outcome and split decision

- A page `categories-functors-and-natural-transformations` (order 359): **60
  items** — 25 definitions/remarks and 35 proof-bearing items.
- B page `categories-functors-and-natural-transformations-examples` (order
  360): **25 proof-bearing leaves**.  No B item depends on another B item.
- Pair total: **85 items**; proof-contract scope: **60 items**.
- **No split proposed.**  The A page is exactly at the owner's permitted ceiling,
  not over it.  No harvested result was removed merely to hit that number.
- Contingency only, if Step 3 adds even one A item: split after
  `prop-fully-faithful-functors-reflect-isomorphisms` (items 1–33) into
  `categories-morphisms-and-functors` plus its B companion, and begin
  `natural-transformations-equivalences-and-two-categories` with
  `def-natural-transformation` (items 34–60) plus its B companion.  The second
  A page would require the first.  Orders and the redistribution of the B leaves
  would then need orchestrator adjudication; this is not a requested split now.

## Exact two-paragraph A-page summary

Categories isolate the common algebra of identities and composition behind sets,
groups, rings, vector spaces, modules, spaces, posets, monoids and preorders.  This
page fixes class-size conventions, develops opposite categories, isomorphisms,
monomorphisms, epimorphisms, zero morphisms and distinguished objects, and proves
the basic cancellation and size results without forming an illicit category of
all categories.

Functors and natural transformations then supply the maps and two-dimensional
maps of the subject.  Vertical and horizontal composition satisfy interchange,
small categories form a strict 2-category, and equivalence is separated carefully
from isomorphism: the split-essential-surjectivity criterion is choice-free,
whereas its ordinary small-target form and skeleton construction state their use
of Choice.  The companion computes these ideas in the library's existing
topological, algebraic and set-theoretic examples.

The B page has no body, per the page contract.

## Canonical-coverage harvest

`frontier-10-batch-7.coverage.json` records **156 source headings**:

| disposition | headings |
|---|---:|
| included as a dedicated scaffold item | 114 |
| absorbed inline into a named item | 20 |
| deferred to an identified later page | 14 |
| out of this pair's subject scope | 8 |

Thus the source-heading yield is **134 accepted/scaffolded or inline versus 22
declined**.  Counts are heading dispositions, not unique item counts: independent
sources deliberately overlap, and the manifest contains 85 unique items.

The declines most likely to be challenged are these:

1. **Dual, double-dual and non-naturality examples.**  The dual-space functor,
   evaluation into the double dual, failure in infinite dimension, and the
   basis-dependent non-natural isomorphism all need
   `dual-spaces-bilinear-forms-and-inertia`, which is planned but unbuilt.  The
   tensor-square/no-cloning example likewise waits on the unbuilt tensor-product
   block.  These are whole-subject deferrals, not missing local lemmas.
2. **Initial/terminal uniqueness.**  It is elementary and could be proved here,
   but the normative CT-2 prose assigns the theorem to
   `universal-properties-and-the-yoneda-lemma`, where it is the template
   for uniqueness of universal objects.  The definitions needed there are built
   here.
3. **Representables, the hom bifunctor, presheaves and Yoneda.**  All are
   deferred to the immediately following page whose declared subject and
   landmark theorem are precisely those constructions.  No prerequisite is
   being used as an excuse to omit them.

The remaining out-of-scope entries are Brouwer's fixed-point theorem,
hierarchical clustering, prime spectra, simplicial sets, the Galois
correspondence, torsion-decomposition non-naturality, and Riesz representation.
Each requires a named subject block beyond this pair.  By contrast, Riehl's
matrix/finite-dimensional-vector-space equivalence and Mac Lane's determinant
naturality example are now B-page items because batches 1 and 9 build their
interfaces earlier in this run.

## Source ledger and licensing

All sources were accessed on 2026-08-11.  Only mathematical structure and short
statement-level paraphrases are to be used; no source prose or diagrams are to be
reproduced.

| source and exact range read | use in this scaffold | licensing/use note |
|---|---|---|
| Emily Riehl, *Category Theory in Context*, Chapter 1 §§1.1–1.3, selected §1.4 (Definitions 1.4.1, 1.4.3 and Examples/Proposition 1.4.4–1.4.11), §1.5, selected §1.6 (Definitions 1.6.4, 1.6.14 and Lemmas 1.6.5, 1.6.16), §1.7; <https://emilyriehl.github.io/files/context.pdf> | Primary textbook spine: categories, duality, mono/epi, functors, naturality, natural isomorphisms, equivalences including the matrix/finite-dimensional-vector-space example, skeletons, diagrams and 2-categorical composition. | Author-hosted under the author's stated special arrangement with Dover.  Cite and paraphrase only. |
| Steven Awodey and Andrej Bauer, *Introduction to Categorical Logic*, Chapter 1 §§1.1–1.4.3, printed pp. 5–20; <https://www.andrew.cmu.edu/user/awodey/SummerSchool/notes.pdf> | Independent full lecture-note treatment; especially finite categories, slices, group actions, functor categories, quivers, Yoneda boundary and equivalence examples. | Author-hosted notes; no reuse licence was relied on.  Cite and paraphrase only. |
| Haru Park, *Category Theory and Homological Algebra*, §2.2, Definition 2.2.1 through Proposition 2.2.6; <https://yglena.github.io/files/CategoryTheory210618.pdf> | Independent source for zero morphisms, categories with zero morphisms, and the zero-object construction. | Author-hosted course notes; no reuse licence was relied on. |
| Benedikt Ahrens, Krzysztof Kapulkin and Michael Shulman, “Univalent categories and the Rezk completion,” §6 immediately before Definitions 6.4–6.5 through Lemma 6.6; <https://www.cambridge.org/core/services/aop-cambridge-core/content/view/2CF86322C8415DE832BE304B4DC04D09/S0960129514000486a.pdf/div-class-title-univalent-categories-and-the-rezk-completion-div.pdf> | Exact split-essential-surjectivity criterion and the constructive improvement of an equivalence to an adjoint equivalence. | Publisher-hosted paper; cite and paraphrase only. |
| Saunders Mac Lane, *Categories for the Working Mathematician*, 2nd ed., Chapter I §4, determinant example on printed p. 16; <https://math.mit.edu/~hrm/palestine/maclane-categories.pdf> | Exact textbook statement that `det: GL_n(-) => (-)^times` is a natural transformation from commutative rings to groups. | University-hosted scan; cite and paraphrase only. |
| nLab, “Eckmann–Hilton argument,” Statements and Proofs; <https://ncatlab.org/nlab/show/Eckmann-Hilton%2Bargument> | Convention check and independent statement for the pure algebraic theorem and its 2-categorical specialization. | Used only as an encyclopedia convention tiebreaker, never as either primary treatment. |

There is no external fallback and no `proved_here: false` item.

## Published dependency closure and confidence routes

The eight dispatched pages opened on disk were:

- `library/topology/subspaces-products-and-quotients.md`
- `library/topology/topological-spaces-and-continuity.md`
- `library/abstract-algebra/group-homomorphisms-and-the-isomorphism-theorems.md`
- `library/abstract-algebra/rings-subrings-and-integral-domains.md`
- `library/linear-algebra/vector-spaces-and-subspaces.md`
- `library/abstract-algebra/modules-and-module-homomorphisms.md`
- `library/foundations/order-zorn-and-the-axiom-of-choice.md`
- `library/foundations/ordinals-and-transfinite-recursion.md`

The five additional published pages required by the harvested examples were also
opened:

- `library/linear-algebra/linear-maps-rank-nullity-and-quotient-spaces.md`
- `library/abstract-algebra/group-actions-and-cayleys-theorem.md`
- `library/abstract-algebra/free-groups-and-presentations.md`
- `library/topology/homotopy-and-homotopy-equivalence.md`
- `library/topology/the-fundamental-group.md`

The step-3 repair also opened the two earlier same-run manifests that now supply
the new B-page interfaces:

- `research/frontier-10-batch-1.pages.json`, page
  `matrices-and-the-matrix-of-a-linear-map` (order 78); and
- `research/frontier-10-batch-9.pages.json`, page
  `determinants-of-matrices-over-a-commutative-ring` (order 82).

Every one of the following **53 direct published item dependencies** was then
opened at `items/<id>.md`.  Confidence route for each is
`established-from-knowledge` after checking the exact on-disk
Statement/Definition, hypotheses and convention; none is legacy-unclassified:

`cor-homotopy-relative-and-path-homotopy-are-equivalence-relations`,
`def-axiom-of-choice`, `def-based-loops-and-fundamental-group`,
`def-cartesian-product`, `def-commutative-ring`, `def-continuous-map-top`,
`def-finite-sum-in-a-commutative-monoid`, `def-free-group`, `def-function`,
`def-generated-cyclic-finitely-generated-and-free-modules`, `def-group`,
`def-group-action`, `def-group-homomorphism`,
`def-group-isomorphism-and-automorphism`,
`def-homotopy-relative-and-path-homotopy`,
`def-image-and-preimage-under-a-relation`,
`def-induced-homomorphism-on-fundamental-groups`,
`def-injection-surjection-bijection`, `def-language-of-set-theory`,
`def-left-and-right-modules`, `def-linear-map`,
`def-module-homomorphism-kernel-image-and-cokernel`,
`def-orbit-and-stabilizer`, `def-ordered-pair`, `def-ordinal`,
`def-partial-order`, `def-path-connected`, `def-power-set`, `def-ring`,
`def-ring-homomorphism`, `def-semigroup-and-monoid`,
`def-subset-and-proper-subset`,
`def-the-set-of-functions-from-one-set-to-another`,
`def-topological-space`, `def-union-of-a-set-and-binary-union`,
`def-unordered-pair-and-singleton`, `def-vector-space`,
`lem-field-is-a-commutative-ring`, `lem-int-embeds-rat`,
`lem-ordinal-trichotomy`, `lem-ring-homomorphism-basic-properties`,
`lem-ring-units-form-a-group`,
`thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse`,
`thm-burali-forti`, `thm-composition-respects-homotopy`,
`thm-fundamental-group-laws`,
`thm-group-actions-correspond-to-homomorphisms`,
`thm-induced-fundamental-group-map-functoriality`, `thm-int-comm-ring`,
`thm-product-universal-property`, `thm-rat-field`,
`thm-reduced-words-form-the-free-group`, and `thm-transfinite-recursion`.

Riehl's textbook independently source-checked the category-theoretic uses of the
group-action and fundamental-group items.  The local disk statements remain the
actual dependencies and are the clauses quoted into the proof-contract ledger.
Mac Lane independently source-checks the determinant-naturality Statement and
its commutative-ring and unit-group conventions.  The two new cross-batch edges
are backward and legal: batch 7 at order 359 uses batch 1 at order 78 and batch 9
at order 82.  All load-bearing dependencies are earlier within A, published, or
on those two earlier same-run pages; no forward reference is kept as a
dependency.  No opened published dependency contained an unambiguous falsehood.

## Convention decisions

1. **Classes and size.**  The library remains in ZFC.  “Class” is a definable
   class/schema abbreviation (equivalently readable in a conservative NBG-style
   presentation), not a new set.  `\mathbf{Cat}` is the locally small category
   of small categories.  This pair does **not** form `\mathbf{CAT}`.  Riehl's
   universe-level `CAT` discussion is useful motivation but is not imported,
   because the library has not adopted Grothendieck universes or inaccessible
   cardinals.
2. **Equivalence and Choice.**  The primary equivalence criterion is “fully
   faithful plus *split* essentially surjective,” which is choice-free.  Riehl's
   ordinary “fully faithful plus essentially surjective” converse silently
   chooses representatives over its object collection; here it is stated under
   AC only when the target is small.  A connected groupoid is likewise reduced
   to an automorphism group only for a **small** groupoid under AC.  No global
   choice is smuggled into a large-category claim.  Accordingly, the matrix
   example takes an explicit class-sized basis selection as input before it
   writes an equivalence with all finite-dimensional vector spaces; without
   that split data it records the canonical fully faithful, essentially
   surjective coordinate functor and its standard-coordinate skeleton.
3. **Embeddings.**  “Embedding” means faithful and injective on objects, matching
   Riehl; “full embedding” additionally means full.  It is not silently used as
   a synonym for fully faithful.
4. **Algebra.**  `\mathbf{Ring}` uses the published convention of unital rings
   and unit-preserving homomorphisms; this is essential for the
   `\mathbb Z\to\mathbb Q` epi example.  `\mathbf{Vect}_F` fixes a field and
   `R\text{-}\mathbf{Mod}` fixes a ring and uses published left modules.
   `\mathbf{CRing}` is the full subcategory on commutative rings.  For fixed
   `n >= 1`, Mac Lane's functors send a ring homomorphism entrywise on
   `\operatorname{GL}_n` and by restriction on unit groups; batch 9's Leibniz
   formula makes determinant natural.  The item does not extend the claim to
   `n=0`, because batch 9's sourced determinant interface starts at one.
5. **Zero morphisms.**  A category with zero morphisms carries a specified
   absorbing family `0_{A,B}`; a zero object induces such a family.  Merely
   having some morphism called zero is not enough.
6. **Composition and paths.**  Categorical composites are written in the usual
   right-to-left algebraic order.  The change-of-basepoint example follows the
   published path-concatenation convention from the fundamental-group page.
7. **Naturality.**  Contravariant functors are written as covariant functors out
   of an opposite category.  Natural isomorphism means componentwise
   isomorphism, and adjoint equivalence additionally records the triangle
   identities.
8. **Notation.**  No planned title or strategy applies a canonical embedding to
   a natural number; the forbidden `\iota(n)` notation does not occur.

## Component-provenance plan

The following groups exhaust all 85 items.  Each source-backed item will carry
the cited URL(s) above in `sources.references` at Step 5.

### Definitions and the size remark (25)

- `rem-category-theory-class-and-size-conventions`:
  `statement: ai-altered`, `proof: not-applicable`.  It adapts the textbook size
  discussion to the owner's ZFC definable-class policy and deliberately refuses
  Riehl's `CAT` construction.
- The remaining 24 definition ids below use `statement: literature-derived`,
  `proof: not-applicable`: `def-category`,
  `def-small-locally-small-and-large-category`,
  `def-subcategory-and-full-subcategory`, `def-preorder`,
  `def-opposite-category`, `def-isomorphism-groupoid-and-connected-category`,
  `def-monomorphism-and-epimorphism`,
  `def-split-monomorphism-and-split-epimorphism`,
  `def-initial-terminal-and-zero-object`,
  `def-category-with-zero-morphisms`,
  `def-functor-and-contravariant-functor`,
  `def-full-faithful-and-essentially-surjective-functor`,
  `def-embedding-of-categories`, `def-natural-transformation`,
  `def-vertical-composition-of-natural-transformations`,
  `def-horizontal-composition-and-whiskering-of-natural-transformations`,
  `def-product-category`, `def-functor-category`, `def-natural-isomorphism`,
  `def-equivalence-and-adjoint-equivalence-of-categories`,
  `def-skeletal-category-and-skeleton`,
  `def-comma-slice-and-coslice-categories`, `def-diagram-in-a-category`, and
  `def-strict-two-category`.  Riehl/Awodey supply the main wording, Park supplies
  zero morphisms, and Ahrens–Kapulkin–Shulman supplies the split-essentially-
  surjective convention.

### A-page proof-bearing statements (35)

- These 30 ids use `statement: literature-derived`, `proof: ai-altered`:
  `prop-sets-and-functions-form-category-set`,
  `prop-groups-and-homomorphisms-form-category-grp`,
  `prop-rings-and-homomorphisms-form-category-ring`,
  `prop-vector-spaces-and-linear-maps-form-category-vect`,
  `prop-modules-and-homomorphisms-form-category-rmod`,
  `prop-topological-spaces-and-continuous-maps-form-category-top`,
  `prop-posets-and-monotone-maps-form-category-poset`,
  `prop-monoids-and-groups-as-one-object-categories`,
  `prop-preorders-as-categories-and-monotone-maps-as-functors`,
  `thm-category-theoretic-duality-principle`,
  `prop-isomorphisms-form-the-maximal-subgroupoid`,
  `lem-isomorphism-characterised-by-composition-bijections`,
  `prop-basic-calculus-of-monomorphisms-and-epimorphisms`,
  `thm-monomorphisms-and-epimorphisms-in-set`,
  `cor-under-choice-every-epimorphism-in-set-splits`,
  `thm-inclusion-of-integers-in-rationals-is-monic-epic-not-iso-in-ring`,
  `prop-zero-object-induces-zero-morphisms`,
  `prop-functors-preserve-isomorphisms`,
  `prop-fully-faithful-functors-reflect-isomorphisms`,
  `lem-vertical-composition-of-natural-transformations-is-natural`,
  `lem-horizontal-composition-of-natural-transformations-is-natural`,
  `thm-interchange-law-for-natural-transformations`,
  `prop-natural-isomorphisms-are-componentwise-isomorphisms`,
  `prop-equivalence-of-categories-is-an-equivalence-relation`,
  `thm-fully-faithful-split-essentially-surjective-characterises-equivalence`,
  `thm-every-equivalence-can-be-made-an-adjoint-equivalence`,
  `thm-small-categories-form-a-strict-two-category`,
  `thm-eckmann-hilton-argument`,
  `prop-category-isomorphisms-are-bijective-on-objects-and-morphisms`, and
  `prop-fundamental-group-is-a-functor-on-pointed-spaces`.  Their statements are
  in the harvested literature; proofs are materially adapted to local definitions
  and published dependencies rather than copied.
- These five use `statement: ai-altered`, `proof: ai-generated`:
  `prop-size-of-functor-categories`,
  `lem-choice-splits-essential-surjectivity-over-a-small-target`,
  `cor-full-faithful-essentially-surjective-small-target-characterises-equivalence`,
  `prop-connected-groupoid-equivalent-to-an-automorphism-group`, and
  `prop-every-small-category-has-a-skeleton-under-choice`.  Each is a
  source-backed result materially narrowed or decomposed to expose the exact ZFC
  size/Choice cost.  None is an invented load-bearing theorem.

### B-page examples, counterexamples and false statements (25)

- These 17 use `statement: literature-derived`, `proof: ai-altered`:
  `ex-underlying-set-and-forgetful-functors`, `ex-arrow-category-of-set`,
  `ex-quivers-as-a-functor-category`, `ex-fundamental-groupoid`,
  `ex-pointed-sets-equivalent-to-sets-and-partial-functions`,
  `ex-product-with-a-fixed-space-is-a-functor`,
  `ex-open-and-closed-set-functors-and-complement-naturality`,
  `ex-singletons-define-a-natural-transformation-to-the-power-set-functor`,
  `ex-opposite-group-is-naturally-isomorphic-to-the-identity-functor`,
  `ex-set-arithmetic-isomorphisms-are-natural`,
  `ex-determinant-is-a-natural-transformation`,
  `ex-group-actions-as-functors`,
  `ex-action-groupoid-orbits-and-stabilizers`,
  `ex-change-of-basepoint-isomorphism-for-fundamental-groups`,
  `cex-equivalent-categories-need-not-be-isomorphic`,
  `fs-every-equivalence-is-an-isomorphism-of-categories`, and
  `fs-monic-and-epic-implies-isomorphism`.
- `ex-matrix-category-equivalent-to-finite-dimensional-vector-spaces` uses
  `statement: ai-altered`, `proof: ai-altered`.  Riehl supplies the standard
  equivalence, while the local Statement and proof expose the class-sized
  basis-selection data demanded by this page's ZFC schema convention.
- These three use `statement: ai-altered`, `proof: ai-generated`:
  `ex-free-group-and-free-module-functors`,
  `fs-every-category-is-locally-small`, and
  `fs-one-component-determines-a-natural-transformation`.  The first combines
  two standard source-backed free constructions; the false statements are
  standard misconceptions reformulated to match the local class convention and
  paired with explicit local witnesses.  They are not tagged `ai-generated`,
  because future false statements may not have generated Statements.
- These four checkable leaves use `statement: ai-generated`,
  `proof: ai-generated`, with `generation.role: counterexample`:
  `cex-functors-need-not-preserve-monomorphisms`,
  `cex-a-monomorphism-need-not-split`,
  `cex-fully-faithful-need-not-be-essentially-surjective`, and
  `cex-a-family-of-components-need-not-be-natural`.  No item depends on them.

## Generated-claim truth-risk obligations

At Step 5 the four generated counterexamples must state their entire finite or
elementary witness, enumerate all relevant hom-sets/functions, and verify the
failed property directly.  In particular:

- the non-mono-preserving functor must give finite source/target categories,
  the complete arrow action, composition preservation, a monic source arrow,
  and the explicit cancelling pair after applying the functor;
- `\varnothing\to\{*\}` must be checked monic and shown to admit no retraction;
- the discrete two-object target must make full faithfulness and failure of
  essential surjectivity visibly separate; and
- the non-natural family must display the one naturality square that fails.

The ordinal/max one-object category used to refute local smallness, and the
two-component witness used to refute component determination, receive the same
counterexample search even though their Statements are source-backed/adapted.
No registered `finite_smoke` implementation in `QUALITY-CONTROLS.md` models
finite categories, so the ledger records explicit hand enumeration rather than
claiming an unavailable automated smoke check.

## Proof-contract handoff

`frontier-10-batch-7.proof-contracts.json` has version 1, level `frontier-10`,
and one entry for every one of the 60 proof-bearing items.  It records exact
on-disk clauses for published dependencies, planned clauses for same-pair
and earlier same-run dependencies, numbered-step obligations for every item,
and all eight boundary dispositions.  The two repair contracts each use a
five-step map: matrix-category construction through split essential
surjectivity, and determinant functoriality through the Leibniz naturality
square.  At Step 5 the author must synchronize every “Planned Statement”
quote and `L#` fact with the authored source item, expand the generic three-step
map wherever the final proof has more steps, and retain one-to-one step coverage.
`risk_review` is intentionally absent: it belongs to independent Alpha review,
not the author.

## Applyable prose-scaffold amendments

Target file: `research/plan-combinatorics-and-categories.md`, section
`## CT-1. Categories, Functors and Natural Transformations`.

1. Replace exact old heading
   `## CT-1. Categories, Functors and Natural Transformations  (order 287, category theory)`
   with
   `## CT-1. Categories, Functors and Natural Transformations  (order 359, category theory)`.
2. Replace the existing eight-entry `requires` paragraph with the 15 page ids in
   the manifest, in manifest order: `subspaces-products-and-quotients`,
   `topological-spaces-and-continuity`,
   `group-homomorphisms-and-the-isomorphism-theorems`,
   `rings-subrings-and-integral-domains`, `vector-spaces-and-subspaces`,
   `linear-maps-rank-nullity-and-quotient-spaces`,
   `matrices-and-the-matrix-of-a-linear-map`,
   `determinants-of-matrices-over-a-commutative-ring`,
   `modules-and-module-homomorphisms`, `group-actions-and-cayleys-theorem`,
   `free-groups-and-presentations`, `homotopy-and-homotopy-equivalence`,
   `the-fundamental-group`, `order-zorn-and-the-axiom-of-choice`, and
   `ordinals-and-transfinite-recursion`.
3. In the FS paragraph replace exact old text
   `every category is locally small (there is no cheap witness at this order — **DROP unless one closes, and record it**)`
   with
   `every category is locally small (refuted by the one-object category whose endomorphisms are all ordinals under maximum, with Burali–Forti showing that its hom-collection is proper)`.
4. Replace the determinant/double-dual sentences in the B paragraph with:
   `The dual-space examples remain recorded deferrals because their planned prerequisite page is unbuilt.  B includes functor categories and quivers, the fundamental and action groupoids, pointed sets versus partial maps, free and forgetful functors, products, inverse-image/open/closed functors, singleton and complement naturality, opposite groups, natural set arithmetic, group actions, change of basepoint, the chosen-basis equivalence between matrix and finite-dimensional linear algebra, and determinant as a natural transformation from the general-linear-group functor to the unit-group functor.`
5. Replace the table row
   `| 287/288 | categories-functors-and-natural-transformations | Categories, Functors and Natural Transformations | category-theory (NEW) | 27 / 15 |`
   (with the id still backticked in the actual file) by the same row at
   `359/360` and count `60 / 25`.
6. Append the exact two-paragraph summary above to the CT-1 scaffold record.  Do
   not add a B-page body.

These are notes only; this Beta did not edit the prose scaffold or plan spec.

## New-id and scope checks

The manifest's 85 ids were checked with
`fs.existsSync('items/' + id + '.md')`; **0 existed**.  A corroborating
`rg -n 'def-category$|thm-small-categories-form-a-strict-two-category|ex-action-groupoid-orbits-and-stabilizers|ex-matrix-category-equivalent-to-finite-dimensional-vector-spaces|ex-determinant-is-a-natural-transformation' items research/plan-spec.json research/plan-combinatorics-and-categories.md`
returned no collision.  The page ids themselves are the assigned plan ids and
are not new inventions.

No file outside the four permitted `research/frontier-10-batch-7.*` artifacts
was edited.  The two cross-batch dependencies are the earlier matrix and
determinant pages identified above.  There is no external fallback or
published-falsehood repair proposal.  The only content work deliberately not
done is authorship of `items/` and `library/` content, prose-plan application,
and `plan-spec.json` splicing, all reserved for later workflow steps.

## Step-3 Alpha repair disposition

1. **Riehl Example 1.5.12:** added B item
   `ex-matrix-category-equivalent-to-finite-dimensional-vector-spaces` after
   the free-functor example.  Coverage records it under Riehl Example 1.5.12.
   Its source is Riehl, *Category Theory in Context*, §1.5.  Batch 1 supplies
   matrix multiplication, coordinate matrices, the matrix-of-composite law,
   matrix representation, and finite-dimensional classification at order 78.
   The Statement requires supplied basis choices so the result respects this
   pair's no-global-choice convention.
2. **Determinant naturality:** batch 9 satisfies Alpha's contingency at order
   82 with commutative-ring matrices, invertibility, determinant,
   multiplicativity, and unit-valuedness.  Added B item
   `ex-determinant-is-a-natural-transformation`; coverage records it both under
   the canonical row and under the new Mac Lane Chapter I §4 source row.
3. **Coverage ledger corrections:** added the omitted Riehl Definition 1.4.3
   row for `def-natural-isomorphism` and replaced every nonexistent
   `universal-properties-representables-and-yoneda` home with the actual page
   id `universal-properties-and-the-yoneda-lemma`.
4. **D2:** no A item was added.  The A page remains exactly 60 items and no split
   fires, exactly as Alpha directed.

## Step-3 repair gate record and one integration limitation

- `node tools/validate-plan.mjs research/plan-spec.json --rehomed
  research/frontier-10-rehomed.json` — exit 0; declared order is acyclic and
  consistent, with no item-level cycle, forward reference, B-page dependency,
  or unresolved id among pages currently carrying item lists.
- `node tools/coverage-checklist.mjs
  research/frontier-10-batch-7.coverage.json` — exit 0; 1 page, 156 harvested
  headings, 0 errors, 0 warnings.
- The dependency-closed manifest-policy invocation
  `node tools/content-policy.mjs research/frontier-10-batch-1.pages.json
  research/frontier-10-batch-9.pages.json
  research/frontier-10-batch-7.pages.json --manifest-only --rehomed
  research/frontier-10-rehomed.json` — exit 0; 209 scoped items, 0 errors,
  0 warnings.
- The repair brief's literal single-manifest invocation of `content-policy`
  exits 1 with 13 `batch-dependency-missing` rows: six matrix interfaces from
  batch 1 and seven determinant interfaces from batch 9.  This mode loads only
  supplied manifests plus authored `items/`, while neither earlier batch has
  been authored at step 3.  Supplying the two owning manifests makes the same
  policy gate green, as above.  Removing those exact dependencies or copying
  their owned items into batch 7 would make the scaffold mathematically false
  or violate batch ownership, so I did neither.  This under-scoped literal
  command is the sole remaining integration limitation; it clears when the
  orchestrator runs the all-batch gate (already green) or after the earlier
  interfaces are authored.
- All three JSON artifacts parse; the A/B counts are 60/25; proof-contract
  scope and rows are exactly 60/60; both added contracts cite every declared
  dependency; ID collision checks are empty; `prosecheck` has 0 errors (its
  count-in-notes warnings are expected ledger prose); and `git diff --check`
  is clean.

Per the repair brief, `tools/gates.mjs` was not run.  No permission prompt or
escalation was attempted.
