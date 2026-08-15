# Frontier 14 — Batch 6 scaffold notes

## Context checkpoint (60%)

- **Owned artifacts:** `research/frontier-14-batch-6.pages.json`, `research/frontier-14-batch-6.notes.md`, `research/frontier-14-batch-6.coverage.json`, and `research/frontier-14-batch-6.proof-contracts.json`. No other file is writable for this dispatch.
- **Current substage:** canonical-source harvest and exact published-dependency audit, before item inventory finalisation.
- **Checks completed:** all normative/run instructions and MA-2/§6/§7 were read; the current author-hosted Riehl edition and Leinster's full text were opened and their relevant result ranges enumerated; the four declared-closure library pages named by the dispatch were opened on disk; the choice-free initial-object repair was checked through its equaliser step and closes without a class-indexed selection.
- **Open mathematical questions:** whether to prove the reflection-counit isomorphism directly without importing the published local-smallness hypothesis; which sourced reflective examples belong here rather than on a later licensed page; and the exact sourced witness for the false claim that continuity from a complete category alone forces a left adjoint.
- **Exact next action:** finish opening the exact published statements that may be cited, inspect the coverage/proof-contract schemas and collision set, then fix the under-60 inventory and serialize all four owned artifacts.

## Result and split decision

The scaffold contains one A/B pair and 53 items:

| order | page | kind | items |
|---:|---|:---:|---:|
| 365.003 | `reflective-subcategories-and-the-adjoint-functor-theorems` | A | 44 |
| 365.004 | `reflective-subcategories-and-the-adjoint-functor-theorems-examples` | B | 9 |

No split is proposed. The A page is 16 items below the mandatory 60-item split
threshold after the full harvest. Its exact internal cut remains visible:
items 1–8 are the reflective/coreflective block, 9–17 are the subobject and
smallness vocabulary, 18–31 are the initial-object, GAFT, SAFT, and
representability block, 32–40 are applications, and 41–44 are false statements.
If authoring somehow adds more than 16 genuine mathematical-content items, the
natural adjudication is the dispatch's suggested split: keep reflective
subcategories and subobject vocabulary on the first A page, and begin a second
A page with the weakly-initial-object lemma and GAFT/SAFT. The present harvest
does not license that split.

The A-page graph has no dependency on any B-page item. The B page requires its
companion A page and is a leaf; every B item depends only on the A page or on a
published item in the declared closure. The tempting dependency on the
published example `ex-free-group-on-two-generators-is-not-abelian` was removed
because it is itself homed on a B page. No sibling batch is cited or awaited.

## Proposed page summaries

### `reflective-subcategories-and-the-adjoint-functor-theorems`

A reflective subcategory is full and has an inclusion with a left adjoint; its
dual is coreflective. Universal arrows recognise reflectivity objectwise, the
fully faithful inclusion forces the reflection counit to be invertible, and an
ambient object is already reflected exactly when its unit is invertible. These
facts show that the inclusion creates ambient limits in the library's ordinary,
isomorphism-invariant sense, while ambient colimits are formed in the
subcategory by applying the reflector rather than by inclusion.

The page then builds subobjects and quotient objects as mutual-factorisation
classes, their opposite order conventions, intersections of supplied families,
well-poweredness, separating and coseparating sets, and weakly initial sets.
The choice-free initial-object lemma drives GAFT through comma categories and a
solution set. A separate all-subobject-intersections lemma drives the exact SAFT
forms described below, with local smallness and every smallness or preservation
hypothesis stated rather than treated as background. Representability,
compact-Hausdorff/Stone–Čech, free-group, abelianisation, commutative-ring, and
torsion-free reflection applications close the page.

### `reflective-subcategories-and-the-adjoint-functor-theorems-examples`

The companion computes subobjects in `Set` and in the integers, works the
ordered-set adjoint theorem and the group solution set, and computes a
torsion-free reflection. It also shows concretely that distinct monomorphisms
can determine the same subobject and that a large category can fail to be
well-powered.

Its counterexamples protect the main page's quantifiers: the singleton full
subcategory of `Set` is reflective but its inclusion does not preserve the
empty colimit; a proper-class ordinal preorder is not well-powered; and a
complete category of ordinal-indexed, set-supported families has no small
coseparating set. These are explanatory leaves, not dependencies for the A
page.

## Canonical-coverage harvest

The gated harvest is `research/frontier-14-batch-6.coverage.json`.

| treatment | harvested | included | inline | already published | deferred | out of scope |
|---|---:|---:|---:|---:|---:|---:|
| Riehl, §§4.5 and 4.7 | 27 | 22 | 0 | 1 | 1 | 3 |
| Leinster, §6.3 and Appendix | 14 | 7 | 6 | 1 | 0 | 0 |
| Mac Lane, V.8 | 7 | 4 | 3 | 0 | 0 | 0 |
| canonical cross-checks | 16 | 16 | 0 | 0 | 0 | 0 |
| **total** | **64** | **49** | **9** | **2** | **1** | **3** |

The four remaining declines most likely to be challenged are all from Riehl's reflective
examples:

- Restriction of scalars along a ring epimorphism needs change-of-rings
  machinery and the exact full-faithfulness argument. The licensing page is
  `tensor-products-of-modules` (order 106), outside this page's declared
  prerequisite closure.
- Sheafification is deferred to the named licensing page
  `presheaves-sheaves-stalks-and-sheafification`, which is where presheaves,
  sheaves, and the construction itself are developed.
- The nerve/Segal reflection uses simplicial sets and the Segal condition, not
  the library's current simplicial-complex foundation. No planned page in
  `plan-spec.json` explicitly licenses that categorical construction.
- Riehl's corollary that `Cat` is complete and cocomplete is proved through the
  preceding nerve reflection. No planned page in `plan-spec.json` explicitly
  licenses that proof route.

Each stated missing dependency was checked against `items/` and the planned
page ids before the decline was written. The commutative-ring reflection was
removed from this list at the step-3 fix pass once Alpha identified its complete
published route through generated ideals and quotient rings. None of the four
remaining declines is a local lemma needed by an included result; no important
theorem was dropped to control item count.

## Source ledger and locator corrections

| key | exact range actually read | principal use |
|---|---|---|
| Riehl | Emily Riehl, *Category Theory in Context*, current author-hosted edition, §4.5 Lemma 4.5.11–Corollary 4.5.15 (PDF pp. 180–183, printed pp. 161–164), and §4.7 Lemma 4.7.1–Theorem 4.7.15 (PDF pp. 194–199, printed pp. 175–180), stopping before Definition 4.7.16, <https://emilyriehl.github.io/files/context.pdf> | reflections, subobjects, solution sets, GAFT, Riehl's SAFT presentation, representability |
| Leinster | Tom Leinster, *Basic Category Theory*, arXiv v2, §6.3 Definition 6.3.6–Example 6.3.14 (PDF pp. 166–171, printed pp. 159–164), plus the Appendix heading through Lemma A.2 (PDF pp. 178–180, printed pp. 171–173), stopping before the exercises, <https://arxiv.org/pdf/1612.09375> | independent GAFT treatment, ordered sets, weakly initial lemma, comma limits, applications |
| Mac Lane | Saunders Mac Lane, *Categories for the Working Mathematician*, 2nd ed., V.8 from Theorem 1 through the compact-Hausdorff example (PDF pp. 140–143, printed pp. 128–131), stopping before the exercises, <https://web.archive.org/web/20251104003129if_/https://pages.jh.edu/rrynasi1/NewFoundations4Math/Literature/Textbooks/Mac_Lane1998CategoriesForTheWorkingMathematician.2ndEdition.pdf> | exact special initial-object theorem, general family-of-monics SAFT, well-powered corollary, Stone–Čech application |

The MA-2 locator “Riehl §4.6” is stale for the current author-hosted edition.
The relevant reflection results are now §4.5, and the adjoint-functor-theorem
results are §4.7. The coverage file uses the live printed and PDF pagination,
not the stale section number.

No source was counted from an HTTP status alone. The named page ranges and
their headings were read from extracted full text. The notes and scaffold are
paraphrases; no external figure, proof passage, or asset is copied.

## The class-intersection SAFT issue requiring step-3 adjudication

The MA-2 direct arbitrary-collection SAFT statement cannot honestly be derived
from Riehl's continuity hypothesis under this repository's explicit size
conventions. The exact failed step is in the comma-category intersection
argument: given a possibly proper-class collection of subobjects in
`(c ↓ U)`, project it to the domain, form its intersection `I`, and then try to
construct the structure arrow `c → U I`. Continuity says that `U` preserves
**small** limits. It therefore gives no comparison identifying `U I` with the
intersection of a proper-class family, so the required structure arrow does not
follow. This is not repaired by local smallness or by the existence of the
domain intersection alone.

Mac Lane V.8 distinguishes the two valid forms. The general theorem assumes
preservation of small limits **and** the pullbacks/intersections of the relevant
families of monomorphisms. The classical corollary assumes well-poweredness, so
one chooses a set of subobject representatives and continuity then covers the
resulting set-indexed wide pullback. The scaffold therefore names the exact
objectwise result as “SAFT with explicit intersection smallness or preservation
data” and carries these two branches:

1. a chosen well-powered branch in which the relevant subobject classes have a
   supplied set of representatives and intersections are set-indexed; or
2. a direct arbitrary-collection branch in which the domain has the relevant
   class intersection and the functor is separately assumed to preserve it (or
   the equivalent family-of-monics pullback data is supplied).

The functor form, cocompleteness corollary, and representability corollary refer
back to those explicit branches. The orchestrator should amend MA-2 at step 3
rather than reinstate the unqualified Riehl wording. If the owner requires the
literal direct arbitrary-collection theorem with continuity alone, this is a
mathematical blocker at the structure-arrow step above, not a reason to omit
SAFT.

## Choice-free initial-object repair

The §6 repair closes. From a jointly weakly initial **set**, take its
set-indexed product `L`; one targetwise witness from a member of the set makes
`L` weakly initial, and no witnesses are selected simultaneously over the
proper class of targets. For parallel maps `f,g:L→C`, equalise them by
`e:E→L`, use weak initiality once to obtain `s:L→E`, and put `r=se`. Cone
uniqueness gives `er=1_L`; hence `e` is both monic and split epic and therefore
an isomorphism, so `f=g`. The resulting weakly initial object has exactly one
map to every target. Every indexing collection used to form a product or
equaliser is a set by the supplied weakly initial set and local smallness.

The choice ledger is placed after both GAFT and SAFT rather than before a result
it discusses. The contracts record the targetwise witness explicitly. There is
no class-indexed choice hidden in assembling the proof.

## Convention decisions and dependency-fidelity corrections

- “Reflective subcategory” means a **full** subcategory whose inclusion has a
  left adjoint; “coreflective” is the formal dual. Fullness is never inferred
  later from the word “subcategory.”
- A subobject or quotient object is an equivalence class of representatives
  under mutual factorisation, not a single mono or epi. Subobjects are ordered
  by factorisation toward the ambient object; quotient objects carry the dual
  orientation.
- Wide pullbacks compute intersections only for a supplied set-indexed family.
  The SAFT arbitrary-collection hypothesis remains separate and is never
  encoded as a proper-class diagram.
- Well-poweredness is recorded as set-sized subobject classes/equivalently a
  supplied set of representatives, not as an unannounced global choice of one
  representative from every class.
- “Separating” and “coseparating” are fixed by the map-detection clauses on the
  new definition; Riehl's “generator/cogenerator” terminology is treated as a
  synonym only after the direction of `Hom` is checked.
- `thm-a-reflective-inclusion-creates-all-limits` uses the published
  isomorphism-invariant notion of creation. The comma projection lemma is
  separately titled **strictly** creates, because there the lifted cone is
  literally determined by its projected cone.
- The compact-Hausdorff application carries dependent choice for Urysohn and
  the ultrafilter lemma for compact products. The SAFT result first obtains the
  reflection `Top → CompHaus`; only after restriction to Tychonoff spaces is it
  compared, by uniqueness of left adjoints, with the published Stone–Čech
  adjunction `Tych → CompHaus`.
- The compact-product dependency is
  `thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma`, whose statement
  has exactly the needed ultrafilter-lemma hypothesis. The stronger published
  `thm-tychonoff` was opened and rejected because its statement assumes full
  Choice.
- The cocompleteness corollary cites `prop-size-of-functor-categories` and
  proves directly that the diagonal functor is continuous. The published
  `cor-functor-categories-inherit-completeness-and-cocompleteness` was opened
  and rejected because its statement assumes full Choice.
- The two-element group solution-set example does not cite the published B-page
  item `ex-free-group-on-two-generators-is-not-abelian`; that candidate was
  opened, then rejected under the B-leaf rule.
- `rem-urysohn-lemma-not-a-zf-theorem` was opened to verify the choice ledger,
  but it is an external reference rather than a manifest dependency. The exact
  DC hypothesis is already in `thm-urysohn-lemma`.
- The torsion-free direct-product example cites both
  `def-external-direct-product-of-groups` and
  `thm-external-direct-product-is-a-group`; the definition alone explicitly
  does not establish the group axioms.
- New notation uses ordinary natural numbers. No new statement applies a
  canonical embedding symbol to `0`, `n`, `k!`, or any other natural number.

## Planned component provenance and rationales

The following assignments cover every one of the 53 mathematical-content
items. “Proof” is `not-applicable` for definitions and remarks.

| statement / proof | item ids | rationale |
|---|---|---|
| `literature-derived` / `not-applicable` | `def-reflective-subcategory-and-reflector`; `def-subobject-and-quotient-object`; `def-intersection-of-a-family-of-subobjects`; `def-well-powered-and-co-well-powered-category`; `def-separating-set-and-coseparating-set`; `def-weakly-initial-object-and-jointly-weakly-initial-set`; `def-the-solution-set-condition` | These are the named definitions in the harvested Riehl, Leinster, or Mac Lane ranges. House wording makes fullness, factorisation classes, directions, and set-indexing explicit without changing the concepts. |
| `ai-altered` / `not-applicable` | `def-coreflective-subcategory-and-coreflector`; `rem-choice-ledger-for-the-adjoint-functor-theorems`; `rem-why-completeness-alone-is-not-enough-for-an-adjoint` | The coreflective definition is the formal dual restated in house conventions; the remarks synthesize the proved size/choice boundaries and make no independent load-bearing claim. |
| `literature-derived` / `ai-altered` | `thm-a-full-subcategory-is-reflective-exactly-when-each-object-has-a-universal-arrow`; `thm-the-counit-of-a-reflection-is-an-isomorphism`; `thm-a-reflective-inclusion-creates-all-limits`; `thm-a-reflective-subcategory-has-every-colimit-the-ambient-category-has`; `thm-subobjects-and-quotient-objects-form-oppositely-ordered-collections`; `lem-wide-pullbacks-compute-intersections-independently-of-representatives`; `thm-a-separating-set-is-equivalently-a-jointly-faithful-family-of-representables`; `thm-a-complete-locally-small-category-with-a-jointly-weakly-initial-set-has-an-initial-object`; `lem-the-comma-category-projection-strictly-creates-limits-preserved-by-the-functor`; `thm-general-adjoint-functor-theorem-objectwise-form`; `thm-general-adjoint-functor-theorem-functor-form`; `thm-a-complete-locally-small-category-with-a-small-coseparating-set-and-all-subobject-intersections-has-an-initial-object`; `cor-a-continuous-functor-to-set-from-a-chosen-well-powered-saft-category-is-representable`; `thm-freyd-representability-theorem`; `thm-the-unit-interval-is-a-coseparating-object-in-compact-hausdorff-spaces`; `thm-the-solution-set-for-the-underlying-set-functor-on-groups`; `thm-compact-hausdorff-spaces-are-reflective-in-topological-spaces`; `thm-abelian-groups-are-reflective-in-groups`; `thm-commutative-rings-are-reflective-in-rings`; `thm-torsion-free-abelian-groups-are-reflective-in-abelian-groups`; `ex-the-subobject-poset-of-the-integers-in-abelian-groups`; `ex-subobjects-in-set-are-subsets`; `ex-the-adjoint-functor-theorem-for-ordered-sets` | Each statement is a harvested named result or standard sourced example. Proofs are rebuilt to the exact published dependency clauses, the repository's class convention, and explicit choice hypotheses; the initial-object proof specifically uses the §6 repair. The commutative-ring reflection follows Riehl Example 4.5.13(ii), with the quotient proof adapted to the library's unital-ring convention. |
| `ai-altered` / `ai-altered` | `thm-an-object-lies-in-a-reflective-subcategory-exactly-when-its-reflection-unit-is-invertible`; `cor-a-reflective-subcategory-of-a-complete-category-is-complete`; `thm-mutual-factorisation-defines-subobject-and-quotient-object-equivalence`; `thm-the-solution-set-condition-says-the-comma-category-has-a-jointly-weakly-initial-set`; `thm-special-adjoint-functor-theorem-objectwise-form`; `thm-special-adjoint-functor-theorem-functor-form`; `cor-a-complete-locally-small-category-with-a-small-coseparating-set-and-saft-intersections-is-cocomplete`; `prop-compact-hausdorff-spaces-satisfy-the-special-adjoint-functor-hypotheses`; `thm-saft-yields-the-stone-cech-adjunction`; `cor-gaft-recovers-the-free-group-and-abelianisation-adjoints`; `fs-every-reflective-subcategory-is-closed-under-colimits`; `fs-a-reflective-inclusion-creates-colimits`; `fs-a-subobject-is-a-monomorphism`; `ex-the-solution-set-for-groups-computed-on-a-two-element-set` | These statements deliberately sharpen source prose to the library's essential-image, class-size, supplied-data, closure, or false-statement conventions. Their planned proofs are direct consequences of sourced results, with the SAFT items carrying the Mac Lane correction rather than Riehl's overbroad shorthand. |
| `ai-altered` / `ai-generated` | `fs-a-continuous-functor-on-a-complete-category-has-a-left-adjoint` | The need for a size hypothesis is literature-backed by the harvested adjoint-functor-theorem treatments; the house false-statement wording isolates the tempting invalid implication. The `Ord^op→1` witness is generated and must be independently refuted/checked, but the statement is not marked generated because generated false statements are not an allowed enrichment kind. |
| `ai-generated` / `ai-generated` | `cex-a-reflective-inclusion-need-not-preserve-colimits`; `cex-two-monomorphisms-representing-the-same-subobject`; `cex-a-category-that-is-not-well-powered`; `ex-torsion-free-reflection-computed`; `cex-a-complete-category-whose-coseparating-sets-are-never-small` | These are explicit checkable witnesses: the singleton full subcategory of `Set`; isomorphic mono representatives; the ordinal preorder with a new top; a concrete torsion quotient/product; and ordinal-indexed set-supported families. They are leaves. No A theorem, proof, or later B item depends on an AI-generated statement or construction. |

The five permitted generated leaves must receive this matching frontmatter at
step 5:

| item | `generation.role` | truth-risk / counterexample-search obligation |
|---|---|---|
| `cex-a-reflective-inclusion-need-not-preserve-colimits` | `counterexample` | Check the unique reflector `X→1`, the initial object `1` inside the singleton full subcategory, and the ambient initial object `∅`; confirm the inclusion does not preserve the empty colimit. |
| `cex-two-monomorphisms-representing-the-same-subobject` | `counterexample` | Give two literally distinct monomorphisms with the same image and exhibit both factorisations; check the factor maps are inverse because the representatives are monic. |
| `cex-a-category-that-is-not-well-powered` | `counterexample` | Verify the ordinal preorder with an adjoined top is locally small, every ordinal-to-top arrow is monic, and distinct ordinals give inequivalent subobjects, so the collection is proper class-sized. |
| `ex-torsion-free-reflection-computed` | `example` | Compute the torsion subgroup and quotient of the stated external direct product, including `n=1`, and verify the universal factorisation rather than relying on the object-level isomorphism alone. |
| `cex-a-complete-category-whose-coseparating-sets-are-never-small` | `counterexample` | Check closure of set-sized supports under every small limit and prove that a small proposed coseparating family misses one ordinal coordinate at which two distinct arrows remain undetected. |

## Published-dependency audit and confidence routes

All four named closure pages were opened on disk:
`adjunctions-units-and-counits` (reached through the declared B-page edge),
`limits-and-colimits`, `urysohn-lemma-and-tietze`, and
`tychonoff-embedding-and-stone-cech`. Every current external dependency below
was then opened at its item file and its exact Statement or Definition clause
was checked. There are no `legacy-unclassified` dependencies and no dependency
with an `ai-generated` statement.

**Exact on-disk clause plus literature-derived statement provenance (43):**
`cor-left-adjoints-preserve-colimits`,
`cor-small-complete-or-cocomplete-categories-are-preorders`,
`def-adjunction-by-unit-counit-and-triangle-identities`,
`def-annihilator-and-torsion-of-a-module`, `def-category-of-elements`,
`def-comma-slice-and-coslice-categories`,
`def-equalizers-and-coequalizers`,
`def-external-direct-product-of-groups`,
`def-generated-and-principal-ideals`,
`def-full-faithful-and-essentially-surjective-functor`,
`def-functor-and-contravariant-functor`, `def-galois-connection`,
`def-initial-terminal-and-zero-object`,
`def-isomorphism-groupoid-and-connected-category`,
`def-limit-and-colimit-of-a-diagram`,
`def-monomorphism-and-epimorphism`, `def-normal-subgroup`, `def-preorder`,
`def-preservation-reflection-creation-continuity-and-cocontinuity`,
`def-quotient-ring`,
`def-small-finite-and-large-limits-completeness-and-cocompleteness`,
`def-small-locally-small-and-large-category`,
`def-subcategory-and-full-subcategory`,
`def-universal-arrow-to-and-from-a-functor`,
`lem-limit-legs-are-jointly-monic-and-colimit-legs-jointly-epic`,
`prop-empty-limits-and-colimits-are-terminal-and-initial-objects`,
`prop-preorders-as-categories-and-monotone-maps-as-functors`,
`prop-rings-and-homomorphisms-form-category-ring`,
`thm-a-left-adjoint-exists-exactly-when-every-comma-category-has-an-initial-object`,
`thm-abelianisation-is-left-adjoint-to-the-inclusion-of-abelian-groups`,
`thm-adjoints-are-unique-up-to-unique-natural-isomorphism`,
`thm-cardinality-sized-products-or-coproducts-force-a-preorder`,
`thm-category-theoretic-duality-principle`,
`thm-external-direct-product-is-a-group`, `thm-hom-assignments-are-functors`,
`thm-quotient-group-universal-property`, `thm-quotient-ring-laws`,
`thm-quotient-ring-universal-property`, `thm-right-adjoints-preserve-limits`,
`thm-stone-cech-is-left-adjoint-to-the-inclusion-of-compact-hausdorff-spaces`,
`thm-the-free-group-functor-is-left-adjoint-to-the-underlying-set-functor`,
`thm-top-is-complete-and-cocomplete-and-its-underlying-set-functor-preserves-both`,
and `thm-universal-elements-are-initial-or-terminal-in-the-category-of-elements`.

**Exact on-disk clause plus independent convention/source check for an
AI-altered statement (12):** `def-category`,
`def-presheaf-representable-functor-and-representation`,
`def-ring-homomorphism`,
`rem-category-theory-class-and-size-conventions`, `fs-ordinals-form-a-set`,
`lem-ordinal-basics`, `lem-subgroups-of-z-are-cyclic`,
`prop-size-of-functor-categories`,
`thm-a-compact-hausdorff-space-is-regular-and-normal`,
`thm-closed-subspace-of-a-compact-space-is-compact`,
`thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma`, and
`thm-urysohn-lemma`. For the categorical definitions and functor-category size
proposition, the exact conventions were checked against Riehl and the direct
set construction. The ordinal and subgroup clauses were independently checked
from their standard proofs. The topology clauses were checked with the source
and choice hypotheses recorded on the items; the compact-product and
functor-category items have AI-generated proofs but independently supported,
non-AI-generated statements.

The four opened but rejected candidates were
`thm-tychonoff` (stronger full-Choice statement),
`cor-functor-categories-inherit-completeness-and-cocompleteness` (full-Choice
statement), `ex-free-group-on-two-generators-is-not-abelian` (B-page leaf), and
`rem-urysohn-lemma-not-a-zf-theorem` (external-reference context, not a manifest
dependency). None appears in the machine scaffold.

## Proof-contract status and exact authoring seams

`research/frontier-14-batch-6.proof-contracts.json` scopes all 43 proof-bearing
items and has one contract for each. Every contract already has planned
derivations, explicit inputs, a risk note, and all eight anchored boundary axes
with item-specific dispositions. Its 91 uses of published dependencies have
exact on-disk Statement/Definition quotes, fact labels, and planned uses now;
the citation-fidelity missing-quote pass found none missing. Inputs that cite a
new same-page item remain labelled `planned dependency ...` because that item's
Statement does not exist until step 5; the author must replace those labels by
exact `[F#]`/`[L#]` citations as the earlier items are written. The item-aware
`proof-contract --strict` checker cannot pass before authoring because all 43
scoped item files correctly do not yet exist; its pre-author run reports only
`item-missing`. The structural 43/43 scope and eight-axis completeness were
checked directly from the JSON.

The seams that must survive authoring are:

- In the reflection theorem, use fullness to identify the inclusion as fully
  faithful before invoking the exact counit criterion.
- For limit creation, use the unit-isomorphism essential-image criterion and the
  ordinary isomorphism-invariant definition; do not restate preservation as
  creation.
- For colimits, reflect an ambient colimit and prove its universal property in
  the full subcategory. The inclusion is not claimed to preserve it.
- For commutative rings, use the ideal generated by all commutators and the
  exact quotient-ring universal property; prove each map to a commutative ring
  kills that ideal before invoking the universal-arrow reflection criterion.
- In the choice-free initial-object lemma, take only set-indexed products and
  hom-set-indexed equalisers, and make the single targetwise witness explicit.
- In GAFT, repeat completeness, local smallness, continuity, and the solution
  set condition on every result that uses them; never leave them as ambient
  conventions.
- In SAFT, distinguish the chosen-well-powered set-indexed route from the direct
  class-intersection-plus-preservation route. Do not turn a proper class into a
  diagram.
- For the false continuity claim, use `Ord^op`: set-indexed diagrams have the
  required suprema in `Ord`, while a left adjoint to `Ord^op→1` would choose a
  greatest ordinal, contradicted by successor.
- For the no-small-coseparator counterexample, objects are ordinal-indexed
  families of sets with set-sized support. Small limits are coordinatewise and
  retain set-sized support; any small proposed coseparating family misses a
  coordinate outside the union of its supports.

## Final scaffold report

- **Pages and counts:** one 44-item A page and one 9-item B page, 53 items total.
- **Harvest yield:** 64 rows: 49 included/scaffolded, 9 inline, 2 already
  published, 1 deferred, and 3 out of scope. The four remaining declines
  expected to draw scrutiny are restriction-of-scalars reflection,
  sheafification, nerve/Segal reflection, and the nerve-based `Cat` completeness
  corollary; their individual licensing decisions are above.
- **Split:** none proposed; A has 44 items. The exact fallback cut is recorded
  above if authoring crosses 60.
- **Published dependencies:** all 55 current item dependencies were opened and
  checked by the routes listed above; no legacy-unclassified or AI-generated
  statement is load-bearing. Four exact-clause candidates were opened and
  rejected rather than cited beyond their statements.
- **Convention disagreements:** full reflective subcategories, equivalence-class
  subobjects, order direction, supplied set-indexed wide pullbacks, ordinary
  versus strict creation, explicit choice costs, and the two valid SAFT
  intersection routes are all resolved above.
- **Blocker/adjudication:** the literal direct arbitrary-collection SAFT with
  continuity alone fails at construction of `c→UI`. The scaffold retains SAFT
  in the mathematically valid Mac Lane two-branch form and asks step 3 to amend
  MA-2. There is no permission, network, shell, or writable-output blocker.
- **Anything not done:** no item was authored, no normative or sibling file was
  edited, and the author-time item-aware proof-contract gate cannot run before
  those item files exist. The two required step-2 gates are run after this
  report and their results are appended below.

## Gate results

- `node tools/validate-plan.mjs research/plan-spec.json` — **PASS**. Final line:
  declared page order is acyclic and consistent; no item-level cycles, forward
  references, B-page dependencies, or unresolved ids among pages with item
  lists.
- `node tools/coverage-checklist.mjs research/frontier-14-batch-6.coverage.json`
  — **PASS**, 1 page, 64 harvested results, 0 errors, 0 warnings.
- Supplemental scaffold check:
  `node tools/content-policy.mjs research/frontier-14-batch-6.pages.json --manifest-only`
  — **PASS**, 53 scoped items, 0 errors, 0 warnings.
- Supplemental exact-quote check:
  `node tools/citation-fidelity.mjs research/frontier-14-batch-6.proof-contracts.json --fail-on-missing-quote`
  found no missing recorded quote and no widening candidate. The 43 target item
  files are not authored yet, so target-text analysis is correctly skipped.
- JSON/contract structure — **PASS**: both page ids and all 53 item ids are
  unique; every external id resolves to an `items/*.md` file; proof-contract
  scope is 43/43 and every contract has exactly eight boundary axes.

## Step-3 fix pass

### B6-1 — applied

Added `thm-commutative-rings-are-reflective-in-rings` to the A-page applications
block and changed Riehl Example 4.5.13(ii)'s coverage row from `out-of-scope` to
`included`. The planned proof takes the ideal generated by all commutators,
shows the quotient is commutative, and uses the exact quotient-ring universal
property to obtain the universal arrow. Its six new published dependencies were
opened on disk: five literature-derived statements
(`prop-rings-and-homomorphisms-form-category-ring`,
`def-generated-and-principal-ideals`, `def-quotient-ring`,
`thm-quotient-ring-laws`, and `thm-quotient-ring-universal-property`) were
checked clause-for-clause; the AI-altered `def-ring-homomorphism` convention was
confirmed as the standard unit-preserving definition. A complete three-step
proof contract with all eight boundary dispositions was added. The A page is
now 44 items, so no split is proposed.

### B6-2 — applied

Removed `prop-preorders-as-categories-and-monotone-maps-as-functors` from
`fs-a-continuous-functor-on-a-complete-category-has-a-left-adjoint` and
`cex-a-category-that-is-not-well-powered`. Both now depend explicitly on
`rem-category-theory-class-and-size-conventions` and construct their ordinal
witnesses directly as definable-class thin categories. The ordinal
counterexample also keeps `lem-ordinal-basics` and `fs-ordinals-form-a-set`;
the false statement keeps the exact ordinal-supremum and successor clauses it
needs. Their proof contracts no longer cite the set-sized preorder proposition.
The ordered-set companion example continues to use that proposition, where its
set-sized domain is faithful.

### B6-3 — applied

Added `def-limit-and-colimit-of-a-diagram` to the choice-free initial-object
lemma and recorded its exact cone existence-and-uniqueness clause in that
item's proof contract. Added both `def-limit-and-colimit-of-a-diagram` and
`def-monomorphism-and-epimorphism` to the all-subobject-intersections
initial-object theorem, with exact contract citations covering its product,
pullback, and proper-monomorphism argument. Both published items had already
been opened and were in the declared closure; the fix makes their previously
implicit uses explicit.

### B6-4 — applied

B6-1 removes the commutative-ring decline. The remaining
restriction-of-scalars decline now names `tensor-products-of-modules` (order
106) as its licensing page and states that this page lies outside batch 6's
declared prerequisite closure. The sheafification decline already names
`presheaves-sheaves-stalks-and-sheafification`; the two simplicial-set declines
continue to say explicitly that no planned page licenses the required
simplicial-set/Segal construction, rather than fabricating the unrelated
`simplicial-complexes-and-simplicial-homology` page as a destination.

### Step-3 gate rerun

- `node tools/coverage-checklist.mjs research/frontier-14-batch-6.coverage.json`
  — **PASS**: 1 page, 64 harvested results, 0 errors, 0 warnings.
- `node tools/content-policy.mjs --manifest-only research/frontier-14-batch-6.pages.json`
  — **PASS**: 53 scoped items, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json` — **PASS**: the declared
  page order remains acyclic and consistent, with no item-level cycles, forward
  references, B-page dependencies, or unresolved ids among pages whose item
  lists are present.
- Supplemental exact-quote check:
  `node tools/citation-fidelity.mjs research/frontier-14-batch-6.proof-contracts.json --fail-on-missing-quote`
  — **PASS**: every one of the 91 recorded dependency quotes occurs in its
  cited item, with no missing quote or widening candidate.
