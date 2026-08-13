# Category theory track: adjunctions, monads, Kan extensions, additive and abelian categories, monoidal and enriched categories

Run `subjects-01`, track `monoidal-abelian-categories`, wave 1.
Owner commission 2026-08-13: *amend and expand the prose scaffolds to enrich
future mathematical content*.

This file is **NEW** and this track is its only writer. It covers the planned,
unauthored band `365`–`380` of `research/plan-spec.json`. It **supersedes the
category-theory sections of `research/plan-combinatorics-and-categories.md`**
(CT-4, CT-5, CT-6, AB-1, AB-2, AB-3, MO-1, MO-2, and the parts of its §6–§9 that
bear on them). That file is not edited by this one; everything this track wants
changed there is in §11, "Amendments owed to other scaffolds".

Per `research/subjects-01-SEAMS.md` §0.2, **every page label here is relative**
(`MA-1`, `MA-2`, …) and every cross-reference is by page **id**. No absolute plan
order appears in this file as a fact. The absolute orders written in
`plan-combinatorics-and-categories.md` (CT-4 at 293, AB-2 at 303, MO-1 at 307 …)
are **stale**: the same pages are at 365, 373 and 377 in the live spec, and they
will move again when thirteen tracks splice.

---

## 0. Summary for the orchestrator

**Track `monoidal-abelian-categories`, wave 1, run `subjects-01`. Status:
complete.** This file is a prose scaffold and nothing else: no spec was written,
no item authored, no gate run, no page spliced. It supersedes the category-theory
sections of `research/plan-combinatorics-and-categories.md` **in this file only**;
that file was not opened for writing.

### Pairs scaffolded — 18 A/B pairs, 36 pages, where the spec plans 8

The spec plans eight A/B pairs in the band `365`–`380`, **all with empty `items`
arrays**. The material does not fit in eight at the owner's 60-item ceiling, and
splitting is never dropping.

| label | proposed page id | supersedes | est. A items |
|---|---|---|---|
| `MA-1` | `adjunctions-units-and-counits` | `adjunctions-and-the-adjoint-functor-theorems` | 45 |
| `MA-2` | `reflective-subcategories-and-the-adjoint-functor-theorems` | ″ | 40 |
| `MA-3` | `monads-comonads-and-their-algebras` | `monads-and-their-algebras` | 38 |
| `MA-4` | `monadicity-and-becks-theorem` | ″ | 29 |
| `MA-5` | `ends-coends-and-weighted-limits` | `kan-extensions-ends-and-coends` | 28 |
| `MA-6` | `kan-extensions-density-and-the-free-cocompletion` | ″ | 30 |
| `MA-7` | `preadditive-and-additive-categories-and-biproducts` | `additive-categories-and-biproducts` | 60 |
| `MA-8` | `abelian-categories` *(planned id kept)* | `abelian-categories` | 56 |
| `MA-9` | `subobject-lattices-generators-and-the-grothendieck-axioms` | ″ | 54 |
| `MA-10` | `exactness-and-the-member-calculus` | `exact-sequences-and-the-diagram-lemmas` | 49 |
| `MA-11` | `the-diagram-lemmas-in-an-abelian-category` | ″ | 35 |
| `MA-12` | `monoidal-categories-and-monoidal-functors` | `monoidal-categories-strictness-and-coherence` | 39 |
| `MA-13` | `strictification-and-mac-lanes-coherence-theorem` | ″ | 22 |
| `MA-14` | `closed-monoidal-categories-and-the-internal-hom` | `braided-symmetric-and-enriched-categories` | 33 |
| `MA-15` | `braided-and-symmetric-monoidal-categories` | ″ | 33 |
| `MA-16` | `duality-and-rigidity-in-monoidal-categories` | ″ | 35 |
| `MA-17` | `enriched-categories` | ″ | 50 |
| `MA-18` | `tensor-and-fusion-categories` | ″ | 28 |

Seven planned A-page ids, with their seven companions, are retired before
authoring; only `abelian-categories` and `abelian-categories-examples` keep their
planned ids. This is free because all eight planned pairs are empty and no item
points at them. **§5.1 lists four
`requires` edges the orchestrator must repoint at splice**, one of which is a
*drop*: the planned edge from the monoidal page to the exactness page is an
artefact of linear ordering, not a dependency.

### Sources obtained and harvested in full

Read over the exact ranges recorded in §10.1, with that source's own headings
enumerated and every heading given a disposition.

**Legitimately reachable full texts read over the stated ranges:** Riehl
*Category Theory in Context* 2nd ed.; Leinster *Basic Category Theory*; Kelly
*Basic Concepts of Enriched Category Theory*; Freyd *Abelian Categories*;
EGNO *Tensor Categories*; Richter *From Categories to Homotopy Theory*; Riehl
*Categorical Homotopy Theory*; Meusburger *Tensor Categories*; Loregian
*(Co)end Calculus*; Barr–Wells; Leinster's codensity paper; Cheng; Wise; Tan;
the Stacks Project; Murfet; Mac Lane's 1963 paper; Joyal–Street; Aguiar–Mahajan;
Etingof et al.'s MIT notes; Cruttwell; Johnstone/Mehrle; and Grothendieck's
Tôhoku paper. The exact read ranges, working URLs, headings and dispositions are
in §10.

**Read from publisher-controlled or public scans not claimed as open-licensed:**
Mac Lane *CWM* 2nd ed. (Chs IV–VI, VII–XI); Mac Lane *Homology* Ch XII;
Mitchell *Theory of Categories* Ch I; the stated parts of Weibel; and Rotman
Thm 6.13. Borceux vol. 2 is a **bibliographic locator only**; its body was not
obtained, and every load-bearing enriched statement is controlled by an
accessible source.

**Every pair has two independent treatments, at least one a textbook,
monograph, or full lecture-note set with a harvestable contents list.** `MA-3`
is backed independently by Riehl Ch. 5, Richter Ch. 6, and Mac Lane Ch. VI;
Leinster contains no developed monad treatment.

### Corrections this research forced on the file's own earlier sections

Recorded rather than silently repaired, because each is a defect a later auditor
should be able to see was caught:

1. **§4.2 asserted that Mac Lane, EGNO and Kelly agree on the associator's
   direction. They do not** — Mac Lane 1963 and CWM both reverse it. §4.2 now
   carries the correction and §10.2 item 7 the table.
2. **§7 #36 said a member calculus without rule (vi) cannot prove the five lemma.
   That is false.** Mac Lane's five-lemma proof uses only rules (ii) and (v); rule
   (vi) is spent on the snake lemma and on the epi half proved *directly*.
   Obligation #52.
3. **§6 called the member calculus "constructive".** Choice-free and
   smallness-free are supported; **constructivity is not claimed by any source
   read** and is no longer asserted. Obligation #53.
4. **§7 #46 said a trace needs "a braiding or a pivotal structure".** Braiding
   alone is not enough — it gives the Drinfeld morphism, and a **twist** is needed
   before that becomes pivotal. Obligation #54.
5. **Mac Lane locators were wrong in three places**: CWM Ch VIII has four sections
   and no "Ext" section; §VIII.1 is Kernels and Cokernels, not Additive
   Categories; **Ch XI is "Symmetry and Braiding in Monoidal Categories", not
   "Special Structures and Limits"**. All fixed at source.
6. **§7 #30 is refined, not overturned** — obligation #51. The enrichment is still
   a theorem and never an unmotivated axiom, but the page now carries two
   axiomatisations so that the hard theorem is contained.

### Seams consumed

Foundational settlement (§3) and the choice ledger carried forward unchanged from
`plan-combinatorics-and-categories.md`: **classes are formulas, no universes**,
**global choice NOT adopted (SE-D3)**, and the published creation/strict-creation
distinction. **No decision of theirs was reopened.** The published corpus consumed:
183 items across the three authored category pairs (**127 A-page items and 56
companion items**), `free-modules-and-exact-sequences`
(29 items — its five-lemma, snake, four-lemma and splitting ids are **taken**, so
every categorical version is namespaced and the module theorems are cited as
instances), `cardinal-arithmetic-and-cofinality`, the Zorn/ordinal material, and
— a find worth flagging — **`lem-dedekind-modular-law-for-subgroups`,
`thm-zassenhaus-butterfly-lemma`, `thm-schreier-refinement-theorem` and
`thm-jordan-holder-theorem-for-groups`**, which are the group instances of `MA-9`
items 6 and 16–18, and **`thm-adjacent-transpositions-generate-the-symmetric-group`**,
which is half of what `MA-15`'s symmetric coherence needs.

### Seams owed — §11, nine amendments

**Amendment 1 is the one that can break a page.** `abstract-algebra`'s
`tensor-products-of-modules` must supply $\otimes_{\mathbb Z}$ with associativity
and unit **as natural isomorphisms**; the library currently has **no tensor product
of abelian groups at all**. Without it `MA-17` item 14 — the track's closing
theorem — **cannot be stated**, and five other items drop to non-examples. The rest
of the block survives.

The others: **2** supersession notice to `combinatorics`; **3** two group-theoretic
lemmas offered to `abstract-algebra`/`group-theory` (the braid group and the $S_n$
Coxeter presentation — **`MA-15` proves them if neither track takes them**);
**4** the full inventory of what `homological-algebra` is given and what it must
mint, plus its one `requires` repoint; **5** three results awaiting a
Grothendieck-categories page; **6** the accessible-categories denial reversed, with
the real reason; **7** floor and ceiling on $\mathbb R$ offered back; **8**
`SCHEMA.md` §6 records a stale 100-item ceiling where the code enforces 60;
**9** a size gap in the published `def-strict-two-category` — recorded, with **no
published item proposed for change**.

### Unresolved forward references: NONE

**Every one of the eighteen A pages closes with "Forward references: NONE."** The
block is orderable so that no item points forward, and two ordering decisions were
taken to keep it that way and are recorded where they look like errors: `MA-5`
precedes `MA-6` so the coend formula is available; **`MA-17` follows `MA-7`**
so the $\mathbf{Ab}$-enrichment payoff cites rather than forward-references the
additive page; `MA-9` states AB4/AB5 in Grothendieck's **lattice-primitive** form so
that `MA-10` can define exactness first and prove the equivalence afterwards.

### Scope denials — §8, fifteen, each with its licence

Universes and inaccessibles; global choice; $\mathbf{CAT}$ and large functor
categories; **accessible and locally presentable categories** (a subject area, and
Riehl gives a sketch leaning on a result she calls "a hard theorem");
**Freyd–Mitchell is STATED with `proved_here: false` and never used as a proof
device**; Frobenius–Perron dimension, Drinfeld centres, modular tensor categories,
Tannaka reconstruction and Hopf algebras beyond the foundational tensor/fusion
pair; $\infty$-categories, model
categories, localisation and simplicial sets; derived functors as Kan extensions;
toposes beyond the subobject classifier; terminal coalgebras; Yoneda
$\operatorname{Ext}^n$; **Mac Lane's original 1963 coherence proof — not denied as
mathematics, not chosen as the route**; enriched change of base beyond the
construction; most of Kelly Ch 3's enriched-limit technology; and the theory of
fields as a category.

**Deliberately NOT denied**, reversing the prior scaffold: **braided and symmetric
coherence** (they are theorems and the missing input is a group presentation the
library can build), locally cartesian closed categories, the ultrafilter monad and
Manes' theorem, **the member calculus in full**, and idempotent monads.

### Blocker — one, recorded and contained

**Kelly, *"On MacLane's conditions for coherence of natural associativities,
commutativities, etc."*, J. Algebra 1 (1964) 397–402, could not be obtained.** It
is nominally open access at the publisher and sits behind a bot-detection wall
that no available client passes; the alternative routes 404. **No word of Kelly's
own text was read**, and **no new authority available to an agent would help** —
it needs an institutional session or a human browser, which is why this is
recorded as a blocker rather than raised as a request. **It is contained:**
`MA-12` items 20–22 are sourced to EGNO Prop. 2.2.4 and Cor. 2.2.5, whose
derivation was checked line by line, and item 23 attributes to Kelly **only
through EGNO's own Bibliographical Notes**. Nothing in this file asserts anything
about Kelly's phrasing or numbering. §12, seam S-5.

Eight further seam records (S-1 … S-9) appear in §12; **none blocks the
scaffold**, and each unresolved one names its fallback. Three closed during the
run: **S-1** (Richter supplies a second open monad treatment), **S-4** (enriched
change of base is sourced twice independently), and **S-8** (the live lattice-page
id is verified). S-7 remains a provenance warning: Borceux vol. 2 was not
obtained in full and is not used as pair backing.

---

## 1. Why this track exists

The library's category theory stops exactly where the subject starts paying for
itself. Three A/B pairs are authored and published — categories/functors/natural
transformations, universal properties and the Yoneda lemma, limits and colimits —
and they are unusually complete: 127 A-page items and 56 companion items, with
the size conventions, the duality principle, the Eckmann–Hilton argument, filtered
colimits, and Freyd's preorder theorem all already in place. What is missing is
everything that a graduate reader would call the *use* of category theory:

- **Adjunctions.** The single most-used concept in the subject. Every free
  construction the library already owns — the free group, the free module, the
  free monoid, the Stone–Čech compactification, abelianisation, the discrete and
  indiscrete topologies — is one half of an adjunction, and the library currently
  states each of their universal properties separately with no theorem tying them
  together. `def-universal-arrow-to-and-from-a-functor` and
  `thm-universal-arrows-are-initial-or-terminal-in-comma-categories` are already
  published and are *precisely* the objectwise half of an adjunction; the track
  that assembles them into a functor is not there.
- **The adjoint functor theorems.** Published item
  `thm-cardinality-sized-products-or-coproducts-force-a-preorder` (Freyd) already
  proves that "complete" must mean "small-complete" on pain of collapsing to a
  preorder. Having paid for that theorem, the library does not yet state the two
  theorems that make small-completeness *useful* — GAFT and SAFT.
- **Abelian categories.** `free-modules-and-exact-sequences` is authored and
  already contains the four lemma, the five lemma, the snake lemma, the splitting
  lemma, left exactness of Hom, projectives, injectives and Baer's criterion —
  all for modules, all proved elementwise. The abelian-category track is what
  turns those from module facts into theorems, and it is the only thing standing
  between this library and homological algebra.
- **Monoidal categories.** The library has tensor products of vector spaces in
  the linear-algebra band and plans them for modules, and it has no vocabulary at
  all for what a tensor product *is* structurally. Without coherence, the string
  $A\otimes B\otimes C$ is not even a defined expression.

And one negative reason, which is really the strongest. `homological-algebra`
(the planned band `381`–`392`: chain complexes, long exact sequences,
resolutions, derived functors, Ext, Tor, spectral sequences) is a wave-2 track
that reads this file and builds on it. **It cannot start until abelian categories
exist.** Everything in `MA-8` through `MA-11` below is written to be the
foundation that track stands on, and §11 records exactly what it is owed.

### The shape of the development

The band is built as four blocks, each of which is a prerequisite of the next:

1. **Adjunctions** (`MA-1`, `MA-2`) — the universal-arrow theory of `361`
   promoted to functors, then the existence theorems.
2. **Monads and Kan extensions** (`MA-3` … `MA-6`) — what adjunctions generate,
   and the calculus (ends, coends, weighted limits, density) that expresses it.
3. **Additive and abelian categories** (`MA-7` … `MA-11`) — additivity as a
   *property*, the abelian axioms, and the diagram lemmas proved honestly.
4. **Monoidal and enriched categories** (`MA-12` … `MA-17`) — coherence, then
   braiding, duality, and enrichment, which closes the loop by identifying
   "preadditive" with "$\mathbf{Ab}$-enriched".

The order is forced in two places and chosen in one. Forced: adjunctions before
monads (a monad is what an adjunction generates), and abelian before the diagram
lemmas. Forced the other way: the **enriched** page must sit *above* the additive
page, because the identification of a preadditive category with an
$\mathbf{Ab}$-enriched category is the payoff, and putting enrichment first would
force the additive page to forward-reference it. Chosen: ends and coends sit
above Kan extensions, because the coend formula for $\operatorname{Lan}$ is the
clean route and the alternative — Kan extensions first, coends as an afterthought
— duplicates the pointwise-formula proof.

---

## 2. What the published library already gives this track

**Every id in this section was read from `research/plan-spec.json` and from
`items/` on 2026-08-13.** A page with a non-empty `items` array is authored; an
empty one is a plan and its content does not exist (`subjects-01-SEAMS.md` §0.3).

### 2.1 The three authored category-theory pairs — 183 items

| page id | A items | B items |
|---|---|---|
| `categories-functors-and-natural-transformations` | 60 | 25 |
| `universal-properties-and-the-yoneda-lemma` | 21 | 14 |
| `limits-and-colimits` | 46 | 17 |

**Read every one of the 127 A-page items before authoring.** They are dense and
they already contain several things a scaffolder would otherwise re-mint. The
load-bearing ones for this track, by name:

*From `categories-functors-and-natural-transformations`:*
`rem-category-theory-class-and-size-conventions` (the foundational settlement —
§3 below), `def-category`, `def-small-locally-small-and-large-category`,
`def-subcategory-and-full-subcategory`, `def-opposite-category`,
`thm-category-theoretic-duality-principle`,
`def-isomorphism-groupoid-and-connected-category`,
`def-monomorphism-and-epimorphism`,
`def-split-monomorphism-and-split-epimorphism`,
`prop-basic-calculus-of-monomorphisms-and-epimorphisms`,
`def-initial-terminal-and-zero-object`, `def-category-with-zero-morphisms`,
`prop-zero-object-induces-zero-morphisms`,
`def-functor-and-contravariant-functor`,
`def-full-faithful-and-essentially-surjective-functor`,
`def-embedding-of-categories`, `prop-fully-faithful-functors-reflect-isomorphisms`,
`def-natural-transformation`, `def-vertical-composition-of-natural-transformations`,
`def-horizontal-composition-and-whiskering-of-natural-transformations`,
`thm-interchange-law-for-natural-transformations`, `def-product-category`,
`def-functor-category`, `prop-size-of-functor-categories`,
`def-natural-isomorphism`, `prop-natural-isomorphisms-are-componentwise-isomorphisms`,
`def-equivalence-and-adjoint-equivalence-of-categories`,
`thm-fully-faithful-split-essentially-surjective-characterises-equivalence`,
`thm-every-equivalence-can-be-made-an-adjoint-equivalence`,
`def-skeletal-category-and-skeleton`, `def-comma-slice-and-coslice-categories`,
`def-diagram-in-a-category`, `def-strict-two-category`,
`thm-small-categories-form-a-strict-two-category`, `thm-eckmann-hilton-argument`.

*From `universal-properties-and-the-yoneda-lemma`:*
`def-hom-functors-and-hom-bifunctor`, `thm-hom-assignments-are-functors`,
`thm-hom-assignment-is-a-bifunctor`,
`def-presheaf-representable-functor-and-representation`,
`thm-initial-and-terminal-objects-are-unique-up-to-unique-isomorphism`,
`lem-yoneda-evaluation-bijection`, `thm-yoneda-lemma-is-natural-in-both-variables`,
`cor-contravariant-yoneda-lemma`, `rem-size-of-natural-transformation-collections`,
`def-yoneda-embedding`, `thm-yoneda-embedding-is-fully-faithful`,
`cor-representable-presheaves-detect-isomorphism-of-objects`,
`def-universal-element`, `thm-universal-elements-and-universal-factorisations`,
`thm-representing-objects-are-unique-up-to-unique-compatible-isomorphism`,
`def-category-of-elements`,
`thm-universal-elements-are-initial-or-terminal-in-the-category-of-elements`,
**`def-universal-arrow-to-and-from-a-functor`** and
**`thm-universal-arrows-are-initial-or-terminal-in-comma-categories`** — the last
two are the objectwise half of `MA-1` and must be cited, never restated.

*From `limits-and-colimits`:*
`def-constant-diagram-cone-cocone-and-cone-morphism`,
`def-limit-and-colimit-of-a-diagram`,
`thm-limits-and-colimits-are-unique-up-to-unique-compatible-isomorphism`,
`prop-limit-colimit-duality`, `def-products-and-coproducts`,
`def-equalizers-and-coequalizers`, `def-pullbacks-and-pushouts`,
**`def-kernels-and-cokernels-as-equalizers-and-coequalizers`** (so `MA-8`/`MA-9`
do *not* mint kernels — they cite this and add the additive content),
`lem-limit-legs-are-jointly-monic-and-colimit-legs-jointly-epic`,
`cor-equalizers-are-monic-and-coequalizers-are-epic`,
`lem-pullbacks-of-monomorphisms-are-monomorphisms-and-pushouts-of-epimorphisms-are-epimorphisms`,
`thm-pullback-and-pushout-pasting`,
`def-cardinality-of-a-small-category-and-kappa-small-diagram`,
`def-small-finite-and-large-limits-completeness-and-cocompleteness`,
`thm-set-has-all-small-limits`, `thm-set-has-all-small-colimits`,
**`thm-small-limits-from-products-and-equalizers`** and its dual,
`cor-completeness-and-cocompleteness-criteria`,
`thm-finite-limit-and-colimit-criteria`,
**`def-preservation-reflection-creation-continuity-and-cocontinuity`**,
`lem-canonical-comparison-characterises-limit-preservation`,
`prop-fully-faithful-functors-reflect-limits-and-colimits`,
`prop-created-limits-exist-and-are-preserved`,
`thm-chosen-limits-and-colimits-assemble-into-functors`,
`rem-choice-behind-limit-and-colimit-functors`,
**`thm-representable-functors-preserve-small-limits`**,
`cor-hom-functors-are-continuous-and-send-colimits-to-limits`,
`thm-limits-and-colimits-in-functor-categories-are-computed-pointwise`,
`cor-functor-categories-inherit-completeness-and-cocompleteness`,
`cor-yoneda-preserves-and-reflects-small-limits`,
`thm-small-limits-commute-with-small-limits`,
`def-filtered-category-and-filtered-colimit`,
`lem-equality-in-a-filtered-colimit-of-sets-is-eventual`,
`thm-filtered-colimits-commute-with-finite-limits-in-set`,
`def-final-and-initial-functors`,
`thm-final-functors-do-not-change-colimits-and-initial-functors-do-not-change-limits`,
`thm-grp-is-complete-and-cocomplete`,
`thm-top-is-complete-and-cocomplete-and-its-underlying-set-functor-preserves-both`,
`thm-rmod-is-complete-and-cocomplete`,
`prop-completeness-and-cocompleteness-in-poset-categories`,
**`thm-cardinality-sized-products-or-coproducts-force-a-preorder`** (Freyd) and
`cor-small-complete-or-cocomplete-categories-are-preorders`.

### 2.2 The B pages are LEAVES, and this changes what may be cited

SCHEMA §7: *"Examples pages are leaves: nothing depends on an item that lives
only on an examples page."* So the 56 items on `…-examples` pages **may not be
cited by any item in this track**, however convenient they look. Three that a
scaffolder will reach for by reflex and must not:

- `ex-function-sets-as-exponential-representing-objects` — so **`MA-14` mints
  `def-exponential-object` and `def-cartesian-closed-category` itself.** The
  published example is not a definition and could not be depended on if it were.
- `ex-underlying-set-and-forgetful-functors` and
  `ex-free-group-and-free-module-functors` — so **`MA-1` states the
  free–forgetful adjunctions as numbered A-page items**, citing the published
  *universal properties* (`thm-universal-property-of-free-modules`,
  `thm-universal-property-of-module-direct-sums`, and the free-group items on
  `free-groups-and-presentations`), not the examples.
- `ex-matrix-category-equivalent-to-finite-dimensional-vector-spaces` — the
  additive-category page wants $\mathbf{Mat}_R$ and must build it on its own A
  page.

### 2.3 The algebra spine — and the surprise on it

`modules-and-module-homomorphisms` (14 items) and **`free-modules-and-exact-sequences`
(29 items) are AUTHORED.** The second one matters enormously and is easy to miss:

> `def-direct-sum-of-a-family-of-modules`, `thm-universal-property-of-module-direct-sums`,
> `def-free-module-on-a-set-and-standard-basis`, `thm-universal-property-of-free-modules`,
> `cor-every-module-is-a-quotient-of-a-free-module`,
> `def-exact-and-short-exact-sequences-of-modules`, `def-split-short-exact-sequence`,
> **`thm-splitting-lemma-for-modules`**, `def-hom-groups-and-induced-hom-maps`,
> **`thm-hom-functors-are-left-exact`**, **`lem-four-lemma-for-modules`**,
> **`thm-five-lemma-for-modules`**, **`thm-snake-lemma-for-modules`**,
> `def-projective-module`, `thm-projective-module-characterizations`,
> `thm-direct-sums-of-projectives-and-enough-projectives`, `def-injective-module`,
> `thm-injective-module-characterizations`, **`thm-baer-criterion-for-injective-modules`**,
> `thm-injective-modules-over-a-pid-are-exactly-divisible`,
> `thm-module-categories-have-enough-injectives`.

Three consequences, all of them load-bearing for this track:

1. **The ids `thm-five-lemma-for-modules`, `thm-snake-lemma-for-modules`,
   `lem-four-lemma-for-modules` and `thm-splitting-lemma-for-modules` are
   TAKEN.** The abelian-category versions are new items with new ids
   (`thm-five-lemma-in-an-abelian-category`, and so on — §7, `MA-11`). Ids are
   immutable on `main`; there is no question of moving the module versions.
2. **The module case is not re-proved.** `MA-11` proves each lemma in a general
   abelian category and its **B page** exhibits the published module theorem as
   the instance, which is the honest relationship and costs nothing.
3. **`thm-hom-functors-are-left-exact` is the module case of a theorem this track
   gets for free** from `thm-representable-functors-preserve-small-limits`
   (published, `363`). `MA-7` states left exactness of $\operatorname{Hom}$ in an
   additive category as a *corollary of the published representability theorem*,
   with **no elementwise proof anywhere**. Duplicating a general theorem with a
   special-case computation is exactly the duplication the library forbids.

### 2.4 Set-theoretic and order-theoretic prerequisites, all authored

- `order-zorn-and-the-axiom-of-choice`: `def-axiom-of-choice`, `thm-zorn`,
  `cor-ac-iff-zorn`, `def-chain-complete-poset`, `thm-bourbaki-witt`,
  `lem-finite-choice`. `def-countable-choice` and `def-dependent-choice` exist.
- `ordinals-and-transfinite-recursion`: `thm-transfinite-recursion`,
  `thm-burali-forti`.
- **`cardinal-arithmetic-and-cofinality` (26 items) is authored**, and
  `def-cofinality` **defines regular and singular cardinals** ("$\kappa$ is
  regular when $\operatorname{cf}(\kappa)=\kappa$"), with
  `thm-regularity-of-the-alephs` and `thm-konig`. This is what makes
  $\kappa$-filtered colimits and the accessible/locally-presentable material of
  `MA-2` genuinely reachable rather than aspirational, and it is already a
  declared `requires` of the published `limits-and-colimits`.
- `thm-cantor-powerset` / `thm-cardinal-power-set-and-cantor` — the engine of
  Freyd's preorder theorem, already spent on `363`.
- `thm-ultrafilter-lemma`, `def-ultrafilter`, `lem-ultrafilter-prime`,
  `thm-universal-nets-and-ultrafilters-correspond`,
  `thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma`.
- `tychonoff-embedding-and-stone-cech` (12 items, authored), including
  `def-stone-cech-compactification` **stated by its compact-Hausdorff extension
  property** — i.e. already in universal-arrow form — plus
  `thm-stone-cech-evaluation-closure-universal-property` and
  `cor-stone-cech-compactification-is-unique-over-x`. The Stone–Čech adjunction
  is therefore a *real* worked adjunction for this track, not a gesture, and its
  choice cost (the ultrafilter lemma and dependent choice) is already recorded in
  those published Statements.

### 2.5 What is planned in the band and unauthored

`adjunctions-and-the-adjoint-functor-theorems` (+examples), `monads-and-their-algebras`,
`kan-extensions-ends-and-coends`, `additive-categories-and-biproducts`,
`abelian-categories`, `exact-sequences-and-the-diagram-lemmas`,
`monoidal-categories-strictness-and-coherence`,
`braided-symmetric-and-enriched-categories` — eight A/B pairs, **all with empty
`items` arrays**. This track proposes **eighteen** A/B pairs in their place; §7.0
gives the mapping and §11 tells the orchestrator what that costs.

`tensor-products-of-modules` is likewise planned and empty, and it belongs to
`abstract-algebra` (`subjects-01-SEAMS.md` §4). This track cites it and does not
construct it; §11 amendment 1 states exactly what it needs from that page.

---

## 3. The foundational settlement, carried forward unchanged

Three decisions were taken before this commission and are **not reopened here**.
Each is recorded because a fresh scaffolder would otherwise re-derive it, and
because every page in this track states its hypotheses in their terms.

### 3.1 Classes are formulas; theorems about large categories are schemas

Published, in `rem-category-theory-class-and-size-conventions`:

> The word **class** in this development is an abbreviation for a formula in the
> language of set theory […] It is not an additional set. […] Quantification over
> such a category is a schema: each use expands to an ordinary formula of ZFC.
> […] We do not form a category $\mathbf{CAT}$ of all large categories.

No universe axiom, no inaccessible, no NBG class variables. Four consequences
bind this track, and each is stated on the page where it bites rather than
assumed:

1. **$[\mathcal C,\mathcal D]$ is a legitimate locally small category only when
   $\mathcal C$ is small and $\mathcal D$ locally small** — this is published as
   `prop-size-of-functor-categories`. Therefore **a monad is defined directly as
   $(T,\eta,\mu)$** with the unit and associativity diagrams, and "a monoid
   object in the endofunctor category" is a Remark carrying the size hypothesis,
   never the definition (`MA-3`, well-definedness #13).
2. **The hom-set formulation of an adjunction presupposes local smallness; the
   unit–counit formulation presupposes nothing.** So `MA-1` takes
   **unit–counit plus the two triangle identities as the definition** and proves
   the hom-set bijection as an equivalent characterisation under local
   smallness. This deviates from Mac Lane, Riehl and Leinster, all of which take
   the hom-set bijection as primitive; the deviation and its reason are recorded
   in a `rem-` on the page (well-definedness #1).
3. **Ends, coends and the presheaf constructions carry a smallness hypothesis
   everywhere** (`MA-5`, `MA-6`). "$\mathbf{Set}^{\mathcal C^{\mathrm{op}}}$ is
   the free cocompletion of $\mathcal C$" is stated for **small** $\mathcal C$,
   with the restriction named in the Statement.
4. **"Complete" means small-complete, and that is a theorem, not a convention** —
   `thm-cardinality-sized-products-or-coproducts-force-a-preorder`, published.
   Every completeness hypothesis in this track points at it.

### 3.2 Global choice is NOT adopted — owner decision SE-D3, 2026-07-28

The exempt axiom list is **AC, countable choice, dependent choice**, and nothing
else. Global choice is a genuine extension of it and was declined. The three
theorems that wanted it are stated in their **data-supplied** form: a choice of
limit cone, or of a resolution, or of an inverse-plus-isomorphism, is *structure
the reader supplies*, and the conclusion is relative to it. The unconditional
form is not stated.

The library has already paid this bill correctly and visibly on `363`:
`thm-chosen-limits-and-colimits-assemble-into-functors` takes the chosen limits
as data, and `rem-choice-behind-limit-and-colimit-functors` says why. **This
track follows that pattern without exception**, and §6 is the ledger.

The one place it changes a *proof* rather than a statement is **GAFT**. Riehl's
proof of the initial-object lemma simultaneously chooses a map out of the weakly
initial set for every object of a possibly large category. Leinster's local ZF
proof avoids that class-indexed selection: regard the weakly initial set as a
small full subcategory, take the limit of its inclusion, and make only the one
existential choice needed for the particular target under discussion.
**`MA-2` authors Leinster's proof and the repair is visible in the numbered
steps**, not buried in a remark (well-definedness #10).

### 3.3 Creation of limits: the published definition distinguishes two notions

`def-preservation-reflection-creation-continuity-and-cocontinuity` (published)
separates *creates* — "every limiting cone over $FD$ is **isomorphic as a cone**
to the image of a cone over $D$ […] This does not require an on-the-nose lift of
the target apex" — from *strictly creates*, which demands a unique lift with
exactly the same apex and legs.

This is not a pedantry, and it is the single most likely place for this track to
ship a false statement. **Beck's monadicity theorem comes in two forms and they
are different theorems**, exactly matching the published pair of definitions
(Riehl 2nd ed., Thm 5.5.1 and Exercise 5.5.i):

- $U$ is **monadic** — the comparison functor $K$ is an **equivalence** — iff $U$
  has a left adjoint and **creates** coequalizers of $U$-split pairs;
- $U$ is **strictly monadic** — $K$ is an **isomorphism** — iff $U$ has a left
  adjoint and **strictly creates** them.

So the library's already-published isomorphism-invariant "creates" is the one
that goes with the ordinary monadicity theorem, and the strict notion goes with
the strict one. **`MA-4` mints `def-monadic-and-strictly-monadic-functor` and
states both forms as separate numbered theorems**, each naming its notion in the
Statement. The same care is owed by "the forgetful functor
$\mathcal C^T\to\mathcal C$ strictly creates coequalizers of $U^T$-split pairs"
(Riehl Prop 5.4.9), which really is the strict one.

The trap is asymmetric and worth naming: **Leinster's `Def 5.3.5` calls the
STRICT notion "creates"**, and says so himself — *"what we are calling creation of
limits should really be called strict creation of limits […] That is how
'creates' is used in most of the literature"* (Rem 5.3.7). A scaffold that takes
the definition from Leinster and the theorem from Riehl states a theorem about a
hypothesis it has not defined.

---

## 4. Conventions this track adopts, and where they come from

House conventions are fixed **once, here**, so that eighteen pairs do not each
re-decide them. Where a convention was already fixed by published text, the
published text wins and the entry says so.

### 4.1 The direction of an adjunction, and the exact form of the triangle identities

**Fixed by published text, not by choice.**
`def-equivalence-and-adjoint-equivalence-of-categories` (published, `359`)
already writes the triangle identities, in whiskering notation:

> An **adjoint equivalence** is such data satisfying the triangle identities
> $$G\varepsilon\circ\eta G=1_G,\qquad \varepsilon F\circ F\eta=1_F.$$

with $F:\mathcal C\to\mathcal D$, $G:\mathcal D\to\mathcal C$,
$\eta:1_{\mathcal C}\Rightarrow GF$ and $\varepsilon:FG\Rightarrow1_{\mathcal D}$.
That is exactly $F\dashv G$ in the standard orientation, and the whiskerings are
those of `def-horizontal-composition-and-whiskering-of-natural-transformations`.

**`MA-1` uses this orientation and this notation verbatim.** Two consequences
worth stating as items rather than leaving to the reader:

- an **adjoint equivalence is precisely an adjunction whose unit and counit are
  natural isomorphisms** — a corollary, free, and it ties the new page to the
  published one;
- `thm-every-equivalence-can-be-made-an-adjoint-equivalence` (published)
  therefore says every equivalence *underlies an adjunction*, which is the
  cleanest available motivation for the triangle identities and costs nothing.

Writing the triangle identities in the opposite orientation, or writing
$\eta:GF\Rightarrow 1$, would contradict a published definition. It is the one
convention in this file that is not open.

### 4.2 The associator's direction, and the tensor's

$\alpha_{X,Y,Z}\colon (X\otimes Y)\otimes Z \xrightarrow{\ \sim\ } X\otimes(Y\otimes Z)$
— left-bracketed source, right-bracketed target. The unitors are
$\lambda_X\colon \mathbf 1\otimes X\to X$ and $\rho_X\colon X\otimes\mathbf 1\to X$.

**Correction, 2026-08-13: this convention is EGNO's and Joyal–Street's, and MAC
LANE REVERSES IT.** An earlier draft of this section asserted that Mac Lane, EGNO
and Kelly agree. They do not, and the error is recorded rather than quietly
deleted, because it is exactly the kind of slip that ships a wrong diagram.
Verified on the page: **Mac Lane 1963 (3.1)–(3.2)** and **CWM VII.1 (4)** both
write $\alpha_{a,b,c}\colon a\square(b\square c)\cong(a\square b)\square c$, and
CWM XI.1's pentagon runs $a(b(cd))\to(ab)(cd)\to((ab)c)d$ in that direction.
**EGNO Def. 2.1.1 (2.1)** and **Joyal–Street §1** use the direction this library
adopts. The unitors are uniform across all four sources.

The operative consequence: **every diagram quoted from either Mac Lane source must
be transposed before it is placed beside an EGNO diagram**, and the transposition
also swaps which hexagon is "the first" on `MA-15`. §10 carries the table.

### 4.3 "Image" in an abelian category

$\operatorname{im} f := \ker(\operatorname{coker} f)$ and
$\operatorname{coim} f := \operatorname{coker}(\ker f)$, and the canonical
morphism $\operatorname{coim} f\to\operatorname{im} f$ is **constructed** (`MA-8`,
well-definedness #29) before any axiom says it is an isomorphism. The
epi–mono-factorisation description is then a *theorem*, not a second definition.
This is the only order in which the abelian axiom "the canonical map is an
isomorphism" can be *stated*, and it is why the construction is a numbered item.

### 4.4 "Exact at a node" compares subobjects

$\operatorname{im} f \le \ker g$ is an inequality of **subobjects**, so the
canonical monomorphism $\operatorname{im} f\to\ker g$ must be shown to exist
before "exact" can assert that it is an isomorphism (`MA-10`, #34). Subobjects
are equivalence classes of monomorphisms under mutual factorisation, and that
the relation is an equivalence relation is its own numbered item (`MA-2`, #6).

### 4.5 "Monoidal functor" means LAX unless the word STRONG is written

Mac Lane's "monoidal functor" is what is now called lax; EGNO's is strong. The
library writes **lax**, **strong** and **strict** explicitly on every occurrence
and never relies on a default. `def-lax-strong-and-strict-monoidal-functor` is
one item carrying all three so the distinction cannot drift between pages.

### 4.6 "Tensor category" is NOT used as a synonym for "monoidal category"

Mac Lane and Joyal–Street use "tensor category" where this library says
**monoidal category**; EGNO reserves "tensor category" for a much stronger notion
($k$-linear, locally finite, rigid, with $\operatorname{End}(\mathbf 1)=k$).
Because both usages appear in the sources this track reads, **the phrase "tensor
category" is never used as a synonym for monoidal category**. It is used only
on `MA-18`, and in `MA-16`'s boundary remarks pointing there, with EGNO's full
$k$-linear abelian rigid hypotheses displayed. Everywhere else, monoidal means
monoidal.

### 4.7 Choice is named in the Statement, never in the proof only

The published corpus does this already — `thm-cardinality-sized-products-or-coproducts-force-a-preorder`
opens "Assume Choice", `thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma`
names its principle in the title. §6 is this track's ledger and every row of it
is a Statement-level obligation.

---

## 5. The page map: eighteen pairs where the spec plans eight

`research/plan-spec.json` plans eight A/B pairs in the band. This track scaffolds
**eighteen**, because the material does not fit in eight at the owner's 60-item
ceiling and **splitting is never dropping** (`CLAUDE.md`, owner 2026-08-11;
`tools/validate-plan.mjs` error code `size`, `--max-items` default **60** —
verified in the code on 2026-08-13; note that `SCHEMA.md` §6 still says "100",
which is stale, see §11 amendment 8).

Each row gives the relative label, the proposed page id, and the planned page it
supersedes. **The orchestrator owns the splice**; this file writes no spec.

| label | proposed page id | supersedes planned page | est. A items |
|---|---|---|---|
| `MA-1` | `adjunctions-units-and-counits` | `adjunctions-and-the-adjoint-functor-theorems` | 45 |
| `MA-2` | `reflective-subcategories-and-the-adjoint-functor-theorems` | ″ | 40 |
| `MA-3` | `monads-comonads-and-their-algebras` | `monads-and-their-algebras` | 38 |
| `MA-4` | `monadicity-and-becks-theorem` | ″ | 29 |
| `MA-5` | `ends-coends-and-weighted-limits` | `kan-extensions-ends-and-coends` | 28 |
| `MA-6` | `kan-extensions-density-and-the-free-cocompletion` | ″ | 30 |
| `MA-7` | `preadditive-and-additive-categories-and-biproducts` | `additive-categories-and-biproducts` | 60 |
| `MA-8` | `abelian-categories` | `abelian-categories` (id kept) | 56 |
| `MA-9` | `subobject-lattices-generators-and-the-grothendieck-axioms` | ″ | 54 |
| `MA-10` | `exactness-and-the-member-calculus` | `exact-sequences-and-the-diagram-lemmas` | 49 |
| `MA-11` | `the-diagram-lemmas-in-an-abelian-category` | ″ | 35 |
| `MA-12` | `monoidal-categories-and-monoidal-functors` | `monoidal-categories-strictness-and-coherence` | 39 |
| `MA-13` | `strictification-and-mac-lanes-coherence-theorem` | ″ | 22 |
| `MA-14` | `closed-monoidal-categories-and-the-internal-hom` | `braided-symmetric-and-enriched-categories` | 33 |
| `MA-15` | `braided-and-symmetric-monoidal-categories` | ″ | 33 |
| `MA-16` | `duality-and-rigidity-in-monoidal-categories` | ″ | 35 |
| `MA-17` | `enriched-categories` | ″ | 50 |
| `MA-18` | `tensor-and-fusion-categories` | ″ | 28 |

Every A page has its `-examples` companion, so the block is **36 pages**. Of
the sixteen planned page ids, exactly `abelian-categories` and
`abelian-categories-examples` survive unchanged. The other fourteen — seven
A-page ids and their seven companions — are retired-before-authoring, which is
free because **all eight planned pairs have empty `items` arrays** and no item,
page or alias points at them yet.

### 5.1 `requires` edges the orchestrator must repoint

Four planned pages outside this track name a page id this track retires. Each
needs repointing in the same splice, and each repoint is *to the last page of the
retired pair*, because that is the page whose content the consumer actually uses:

| consumer (planned, unauthored) | currently requires | repoint to |
|---|---|---|
| `monads-and-their-algebras` → now `MA-3` | `adjunctions-and-the-adjoint-functor-theorems` | `adjunctions-units-and-counits` (`MA-1`) — **not** `MA-2`; monads need units, counits and the triangle identities, and nothing from the adjoint functor theorems |
| `chain-complexes-and-homology` (`homological-algebra`) | `exact-sequences-and-the-diagram-lemmas` | `the-diagram-lemmas-in-an-abelian-category` (`MA-11`) |
| `monoidal-categories-strictness-and-coherence` → now `MA-12` | `exact-sequences-and-the-diagram-lemmas` | **drop the edge.** It is an artefact of linear ordering, not a dependency: nothing in the monoidal block uses exactness. `MA-12` requires `limits-and-colimits` and `tensor-products-of-modules` only |
| `braided-symmetric-and-enriched-categories` → now `MA-14`…`MA-17` | `monoidal-categories-strictness-and-coherence`, `adjunctions-and-the-adjoint-functor-theorems` | `strictification-and-mac-lanes-coherence-theorem` (`MA-13`) and `adjunctions-units-and-counits` (`MA-1`) |

---

## 6. The choice-strength ledger

The library names its choice cost in the **Statement**, not in a proof comment.
Every use in this track, and — equally important — every place a reader would
*expect* a choice and there is none.

| result | page | cost | note |
|---|---|---|---|
| adjunction: unit–counit ⇔ hom-set bijection | `MA-1` | **none** | pure diagram algebra; local smallness is a *size* hypothesis, not a choice one |
| **RAPL** (right adjoints preserve limits) | `MA-1` | **none** | proved by the direct unit/counit argument, which is size-free and choice-free. The representable proof is a second route and needs local smallness; the two are reconciled in a Remark |
| left adjoints preserve colimits | `MA-1` | **none** | formal dual of RAPL via `thm-category-theoretic-duality-principle` |
| adjoints are unique up to unique natural isomorphism | `MA-1` | **none** | |
| **assembling objectwise universal arrows into a left adjoint functor** | `MA-1` | **data-supplied** | SE-D3. A universal arrow *for each object* is a choice over a proper class. Primary statement: *given* a family of universal arrows, the functor structure exists and is unique. This is exactly the shape of the published `thm-chosen-limits-and-colimits-assemble-into-functors`, and `rem-choice-behind-limit-and-colimit-functors` is the published precedent to cite |
| an equivalence can be improved to an adjoint equivalence | — | **none** | published as `thm-every-equivalence-can-be-made-an-adjoint-equivalence`; cited, not reproved |
| **the initial-object lemma** (a complete locally small category with a weakly initial *set* has an initial object) | `MA-2` | **none — and this is the point** | Riehl's proof simultaneously chooses a map for every target and so is not used. Leinster Lemma A.1 regards the weakly initial set as a small full subcategory, takes the limit of its inclusion, and for each fixed target uses only one existential witness. Local smallness is what makes that full subcategory small. **Author this local proof; the choice repair is visible in the numbered steps** |
| **GAFT**, objectwise form | `MA-2` | **none** | "for every $c$, the comma category $(c\downarrow U)$ has an initial object", under: $\mathcal A$ locally small and small-complete, $U$ continuous, solution set condition. ZF given the hypotheses |
| **GAFT**, functor form | `MA-2` | **data-supplied** | selecting an initial object of $(c\downarrow U)$ for every $c$ is a proper-class choice. Stated as: given such a family, $U$ has a left adjoint. Two items, not one |
| **SAFT**, objectwise and functor forms | `MA-2` | **none** / **data-supplied** | same split. The objectwise theorem assumes a small coseparating set and intersections of all subobject collections exactly as Riehl states them. Bare well-poweredness does not, in ZF, choose a representative monomorphism from every subobject class |
| reflector of a reflective subcategory | `MA-2` | **data-supplied** | same shape; the reflection *for each object* is the choice |
| Kleisli and Eilenberg–Moore constructions | `MA-3` | **none** | both are constructed outright from $(T,\eta,\mu)$; nothing is selected |
| the comparison functor and its universal properties | `MA-3` | **none** | |
| **Beck's monadicity theorem** | `MA-4` | **none** | the whole proof runs on coequalizers and absoluteness of split coequalizers. Worth stating, because "monadic" *sounds* like it should need choice and does not |
| algebras for a finitary monad are cocomplete | `MA-4` | **DC for each fixed recursive construction; a global family is data-supplied** | Riehl Thm 5.6.12 iterates chosen coequalizers through an $\omega$-sequence. For one fixed definable serial construction, rank-minimal witnesses reduce each stage to a set and ordinary DC selects a branch. Selecting such constructions simultaneously for a proper class of diagrams would be class choice and is not asserted |
| $\mathbf{Grp}$, $R\text{-}\mathbf{Mod}$ monadic over $\mathbf{Set}$ | `MA-4` | **none** beyond what the published free-object items already assume | |
| $\mathbf{CompHaus}$ monadic over $\mathbf{Set}$ (the ultrafilter monad) | `MA-4` | **ZF for a given ultrafilter's unique limit; BPI for the open-cover compactness equivalence** | no choice extends a filter in items 19–21. BPI enters only when item 22 converts “every ultrafilter converges” into the library's open-cover compactness (or extends a proper filter). The monad multiplication and both directions of the comparison equivalence are separately scaffolded |
| the Stone–Čech adjunction | `MA-1` | **the ultrafilter lemma and dependent choice** | already named in the published Statements of `thm-stone-cech-evaluation-closure-universal-property` and `lem-compact-hausdorff-targets-embed-in-unit-cubes-under-dependent-choice`. This track inherits those costs verbatim and does not restate them more weakly |
| ends and coends: existence from completeness | `MA-5` | **data-supplied** where a *chosen* end is wanted; **none** for existence | identical to the published limit-functor treatment |
| Fubini for ends; $\operatorname{Nat}(F,G)\cong\int_c\mathcal D(Fc,Gc)$ | `MA-5` | **none** | |
| $\operatorname{Lan}_K F$ by the comma-category colimit formula | `MA-6` | **none** for existence; **data-supplied** for the functor $\operatorname{Lan}_K$ | |
| the density theorem | `MA-6` | **none** | |
| objectwise free-cocompletion formula for small $\mathcal C$ | `MA-6` | **none for each fixed presheaf; data-supplied for the global left adjoint** | for every presheaf the requisite colimit exists in a cocomplete target, but assembling a functor on the proper class of all presheaves requires supplied chosen colimit cones under SE-D3 |
| a category with finite biproducts is uniquely $\mathbf{CMon}$-enriched | `MA-7` | **none** | the addition is *constructed*, $f+g:=\nabla\circ(f\oplus g)\circ\Delta$ |
| extension of a functor across the idempotent completion | `MA-7` | **data-supplied**, or **AC for a small source** | supply a splitting of every image idempotent $F(e)$. Idempotent completeness asserts existence objectwise, not a class-indexed simultaneous choice; uniqueness up to natural isomorphism does not remove this cost |
| additive $\Rightarrow$ biproducts; biproducts $\Rightarrow$ additive-when-inverses-exist | `MA-7` | **none** | |
| Freyd's enrichment-free axioms imply $\mathbf{Ab}$-enrichment | `MA-8` | **none** | from A0, A1/A1*, A2/A2*, A3/A3*, Mitchell's shear automorphism constructs additive inverses. The weaker claim “zero object + finite biproducts + kernels and cokernels suffice” is false: $\mathbf{CMon}$ is a counterexample. Nothing is selected |
| Freyd–Mitchell embedding theorem | `MA-8` | **not certified under the allowed choice base** | Tan's full open proof uses Zorn for maximal disjoint subobjects and injective-envelope machinery, then makes a class-indexed choice of reflections. That final step is global-choice-shaped in the library's class foundation, while SE-D3 forbids global choice. The result remains `proved_here: false`, never load-bearing; no claim about the logically optimal choice strength is made |
| arbitrary coproducts of projectives / products of injectives | `MA-9` | **AC**, or supplied lifts/extensions | the finite statement is ZF; the arbitrary small-family proof chooses one lift or extension for each index. The module "enough projectives/injectives" examples inherit the choice costs of their published source items |
| abelian categories are balanced; epi–mono factorisation | `MA-8` | **none** | |
| the pullback of an epimorphism is an epimorphism | `MA-8` | **none** | and it is the *sole* prerequisite of the member calculus |
| **the entire member calculus and every diagram lemma** | `MA-10`, `MA-11` | **none, and no smallness either** | choice-free and valid in any abelian category. No constructivity claim is made; see §7 obligation #53. This is the reason the track can refuse Freyd–Mitchell as a proof device and still prove the snake lemma |
| naturality of the snake connecting morphism | `MA-11` | **none** | |
| AB5 lattice law $\Longleftrightarrow$ exactness of all small filtered colimits | `MA-10` | **none** | stated for a cocomplete abelian category and all small filtered index categories; no unsourced reduction to directed posets |
| Kelly's redundancies ($\lambda_{X\otimes Y}$, $\rho_{X\otimes Y}$, $\lambda_{\mathbf 1}=\rho_{\mathbf 1}$) | `MA-12` | **none** | |
| strictification and Mac Lane coherence | `MA-13` | **none** | the constructive word/module-endofunctor strictification is ZF; `MA-13` item 14 records that a skeletal refinement is a different statement and may use choice |
| duals are unique up to unique isomorphism | `MA-16` | **none** | |
| enriched Yoneda | `MA-17` | **none** | |
| tensor/fusion foundation and Grothendieck ring | `MA-18` | **none** | definitions use isomorphism classes intrinsically; a displayed finite family of simple representatives is supplied data, never a global skeleton choice |
| **global choice** | everywhere | **NOT ADOPTED** | owner decision SE-D3, 2026-07-28. Not re-opened. No item in this track asserts a proper-class selection |
| **a universe axiom / inaccessible cardinal** | everywhere | **NOT ADOPTED** | it is not a choice axiom and it raises consistency strength; §8 denial 1 |

A `rem-`-style **choice-ledger remark**, in the style of the published
`rem-cardinal-arithmetic-choice-ledger` and `rem-tychonoff-choice-strengths`, is
**REQUIRED** on `MA-2` (the two adjoint functor theorems and the repaired initial
object lemma) and on `MA-4` (the $\mathbf{CompHaus}$ example, if it survives).
It is **forbidden** on `MA-10` and `MA-11`, where the honest statement is that
there is no choice cost at all — and that belongs in the page summary, not in a
remark that implies otherwise.

---

## 7. Well-definedness obligations

Each row is a **required numbered item** on the page named, never a
parenthetical, per `WORKFLOW.md` "Definition justification". Nothing in this
table is optional and nothing in it may be discharged by a footnote.

| # | page | the definition or construction | what must be established first, and where |
|---|---|---|---|
| 1 | `MA-1` | **adjunction** | the definition is $(F,G,\eta,\varepsilon)$ **plus the two triangle identities** (§3.1(2), §4.1). The hom-set bijection is a *characterisation* under local smallness, and the equivalence is a numbered theorem with **six** discharges: define $\eta_c:=\Phi(1_{Fc})$ and $\varepsilon_d:=\Phi^{-1}(1_{Gd})$; naturality of $\eta$ from naturality of $\Phi$ in its first variable; naturality of $\varepsilon$ from the second; the two triangle identities; the converse construction $\Phi(f)=Gf\circ\eta$; and that the two constructions are mutually inverse **in both directions**. Five discharges is the standard omission and it leaves the theorem unproved |
| 2 | `MA-1` | **the left adjoint as a functor** | given a universal arrow $(Fc,\eta_c)$ for each $c$, the action on morphisms is *forced* by the universal property, and functoriality ($F(1)=1$, $F(gf)=F(g)F(f)$) is a proof, not an observation. The family itself is data (§6) |
| 3 | `MA-1` | **"the" left adjoint** | uniqueness up to a **unique** natural isomorphism compatible with the units. Without it the definite article and the notation $F\dashv G$ are unlicensed |
| 4 | `MA-1` | the composite of adjunctions | $(F'F)\dashv(GG')$ requires the composite unit and counit to be *constructed* and the triangle identities *rechecked*; they do not follow by inspection |
| 5 | `MA-2` | **reflective subcategory** and its reflector | the reflection arrow $\eta_c:c\to Rc$ is a universal arrow to the inclusion; that $R$ is a functor and $\eta$ natural is #2 applied. That a reflective subcategory is **full** is part of the definition here, and the non-full variant is not called reflective |
| 6 | `MA-2` | **subobject** | mutual factorisation of monomorphisms is reflexive, symmetric and transitive — a proof — and the resulting classes carry a **partial order**, antisymmetry being exactly the statement that two mutually factoring monos differ by a unique isomorphism |
| 7 | `MA-2` | **intersection of subobjects** | a wide pullback, i.e. a limit of a **supplied set-indexed family of representative monomorphisms**; it is a subobject because a limit of monomorphisms into a common target is monic. Well-poweredness says the quotient collection of subobject classes is a set, but does not in ZF supply one representative mono from each class. SAFT therefore retains Riehl's direct intersection hypothesis rather than deriving it from bare well-poweredness |
| 8 | `MA-2` | **well-powered**, **co-well-powered** | the collection of subobjects of each object *is a set*. This is a smallness assertion about a quotient of a class of monomorphisms, and the definition must say that the equivalence classes form a set, not that the monomorphisms do |
| 9 | `MA-2` | **separating set**, **coseparating set** | stated by the cancellation property ("$f\ne g$ implies some $s\to c$ separates them"), with the equivalent representable formulation as a proposition, not conflated with it |
| 10 | `MA-2` | the **initial-object lemma** | the full subcategory on the jointly weakly initial set is **small** because its objects form a set and local smallness makes every hom-collection a set. Take the limit of its inclusion. For each fixed target, only one witness out of that set is used; no family indexed by every object is selected. This is Leinster Lemma A.1, not Riehl's class-choice proof (§6) |
| 11 | `MA-2` | **GAFT** and **SAFT** | each is **two** items: objectwise existence of an initial object in every $(c\downarrow U)$, then the data-supplied assembly into a left adjoint (§6, SE-D3). A single item concluding "$U$ has a left adjoint" would assert a proper-class selection |
| 12 | `MA-2` | the **solution set condition** | stated *per object*: for each $c$ there is a **set** $S_c$ of arrows $c\to U(d_i)$ through which every arrow $c\to U(d)$ factors. Stating it as a condition on the functor, without the per-object quantifier, changes the hypothesis |
| 13 | `MA-3` | **monad** | defined directly as $(T,\eta,\mu)$ with the unit and associativity squares. "A monoid object in $[\mathcal C,\mathcal C]$" needs $[\mathcal C,\mathcal C]$ to be a legitimate category, which `prop-size-of-functor-categories` supplies only for small $\mathcal C$; it is therefore a Remark carrying that hypothesis, never the definition (§3.1(1)) |
| 14 | `MA-3` | the **Eilenberg–Moore category** $\mathcal C^T$ | it *is* a category: identities are algebra morphisms and algebra morphisms compose. Both are one-line checks and both are numbered |
| 15 | `MA-3` | the **Kleisli category** $\mathcal C_T$ | Kleisli composition $g\bullet f:=\mu\circ Tg\circ f$ is **associative and unital**, and neither is visible without using all three monad axioms. This is the genuine well-definedness obligation on the page and it is routinely skipped |
| 16 | `MA-3` | the **comparison functor** $K:\mathcal D\to\mathcal C^T$ | well defined ($U d$ carries a $T$-algebra structure $U\varepsilon_d$, and the algebra axioms are the triangle identities plus naturality), and **unique** making both triangles commute — the uniqueness is what turns "an adjunction inducing $T$" into a universal property |
| 17 | `MA-3` | a **distributive law** $ST\Rightarrow TS$ | the four axioms, and the theorem that they are exactly what makes $TS$ a monad; without them "the composite monad" is not defined |
| 18 | `MA-4` | **split coequalizer** | the data is $(s,t)$ with three equations, not merely "a coequalizer that splits"; and **absoluteness** — preservation by *every* functor — is a theorem about that data |
| 19 | `MA-4` | **Beck's theorem: which creation?** | the published `def-preservation-reflection-creation-continuity-and-cocontinuity` separates *creates* from *strictly creates*. The equivalence-invariant theorem says $K$ is an **equivalence** iff $U$ **creates** coequalizers of $U$-split pairs; the strict theorem says $K$ is an **isomorphism** iff $U$ **strictly creates** them (Riehl Thm 5.5.1 and Ex. 5.5.i). The Statements keep the two forms separate (§3.3) |
| 20 | `MA-5` | **dinatural transformation** and **wedge** | dinaturality is a hexagon, not a square, and **dinatural transformations do not compose in general** — an item, because every reader assumes they do |
| 21 | `MA-5` | the **end** $\int_c T(c,c)$ | exists as a limit over the twisted arrow category of $\mathcal C$, which is small when $\mathcal C$ is; equivalently as an equalizer between two set-indexed products. Both descriptions are items and their agreement is a theorem |
| 22 | `MA-5` | the **coend** $\int^c T(c,c)$ | dual; and the concrete "$\coprod_c T(c,c)$ modulo the dinaturality relations" description is a *theorem about $\mathbf{Set}$-valued and $\mathbf{Ab}$-valued coends*, not the definition |
| 23 | `MA-5` | **weighted limit** $\{W,T\}$ | defined by a representation: $\mathcal C(c,\{W,T\})\cong[\mathcal J,\mathbf{Set}](W,\mathcal C(c,T-))$ naturally in $c$. Well-definedness *is* representability, and the object is then unique up to unique isomorphism by `thm-representing-objects-are-unique-up-to-unique-compatible-isomorphism` |
| 24 | `MA-6` | $\operatorname{Lan}_K F$ | **local** (a left Kan extension along $K$ at a single $F$) versus **global** (the left adjoint to $K^*$) are different objects and the page keeps them apart. Existence via the comma-category colimit formula needs each comma category $(K\downarrow d)$ **small** and the target **cocomplete** |
| 25 | `MA-6` | **pointwise** Kan extension | a *property* of a Kan extension, not a synonym; the theorem "a Kan extension computed by the colimit formula is pointwise" is what connects them, and the converse fails |
| 26 | `MA-6` | the **density** colimit | the canonical diagram is indexed by the category of elements $\int P$, which is small when $\mathcal C$ is small — cite the published `def-category-of-elements`, do not re-mint it |
| 27 | `MA-7` | the **biproduct** $A\oplus B$ | **defined with no enrichment**: the canonical morphism $A\sqcup B\to A\times B$ built from identities and zero morphisms is an isomorphism. This presupposes only zero morphisms (published `def-category-with-zero-morphisms`). **Then the addition is free**: a category with finite biproducts is canonically and **uniquely** $\mathbf{CMon}$-enriched by $f+g:=\nabla\circ(f\oplus g)\circ\Delta$, and the *uniqueness* is what licenses the notation. The converse — $\mathbf{Ab}$-enriched with finite products has biproducts — is a separate theorem with different hypotheses. **Neither extends to infinite (co)products**, which is its own item |
| 28 | `MA-7` | **matrix notation** for $\bigoplus_i A_i\to\bigoplus_j B_j$ | the bijection with matrices $(f_{ji})$ and the theorem that composition is matrix multiplication; both need finiteness of the index sets, and the finiteness is a hypothesis of the notation |
| 29 | `MA-8` | **image**, **coimage**, and the canonical map | $\operatorname{im} f:=\ker(\operatorname{coker} f)$ and $\operatorname{coim} f:=\operatorname{coker}(\ker f)$ require both to exist; the canonical $\operatorname{coim} f\to\operatorname{im} f$ must be **constructed** — from the universal properties, in a numbered item — before any axiom can say it is an isomorphism (§4.3) |
| 30 | `MA-8` | **abelian category** | the working definition is **additive** $+$ Grothendieck's **AB1** (kernels and cokernels) $+$ **AB2** (every monomorphism is a kernel and every epimorphism a cokernel), equivalently the canonical $\operatorname{coim}\to\operatorname{im}$ is an isomorphism. Separately, Freyd's enrichment-free axioms A0, A1/A1*, A2/A2*, A3/A3* imply the required $\mathbf{Ab}$-enrichment by Mitchell's shear argument. The page does not claim the false weaker implication from finite biproducts and kernels/cokernels alone |
| 31 | `MA-8` | the **quotient** $A/B$ | $A/B:=\operatorname{coker}(B\rightarrowtail A)$, defined on a **subobject** (#6) and shown independent of the representing monomorphism |
| 32 | `MA-9` | the **subobject lattice** | meets are #7; joins are $\operatorname{im}$ of the induced map out of the coproduct, and that requires AB1 plus finite coproducts. **Modularity** of the lattice is a theorem, not a definition |
| 33 | `MA-9` | **generator**, **cogenerator** | the cancellation form and the "the induced $\coprod_{\mathcal C(g,c)}g\to c$ is epic" form are equivalent under coproducts — an item, since the second is the one every later theorem uses |
| 34 | `MA-10` | **exactness at a node** | $\operatorname{im} f\le\ker g$ compares **subobjects**, so the canonical monomorphism $\operatorname{im} f\to\ker g$ must be shown to exist before "exact" can say it is an isomorphism (§4.4). Deriving it needs $gf=0$, which is therefore part of the setup |
| 35 | `MA-10` | the **member** relation | $x\equiv y$ iff $xu=yv$ for some epimorphisms $u,v$; reflexivity and symmetry are immediate and **transitivity is exactly where `MA-8`'s "the pullback of an epimorphism is an epimorphism" is spent**. Without that lemma the relation is not an equivalence relation and nothing on the page is defined |
| 36 | `MA-10` | the **six chasing rules** | each is its own numbered lemma. **Rule (vi) — the subtraction surrogate — is the crux**: members admit no subtraction, and the deliberately weakened replacement is what the five lemma actually consumes. A "member calculus" without rule (vi) cannot prove the five lemma, and a proof that appears to is wrong |
| 37 | `MA-11` | the **connecting morphism** $\delta$ | built **arrow-theoretically**, not from members: the composite $\delta_0$ satisfies $\delta_0\circ(\text{the relevant mono})=0$ and $(\text{the relevant epi})\circ\delta_0=0$, so it factors **uniquely** through the kernel and out of the cokernel. Existence *and* uniqueness come from the universal properties, so there is **nothing to check independence of** — which is precisely why the "does $\delta$ depend on the choices?" question has a one-word answer here and is the page's sharpest `fs-` |
| 38 | `MA-11` | **naturality of $\delta$** | a **separate numbered item**. It is routinely omitted and `homological-algebra`'s long exact sequence of a short exact sequence of complexes cannot be built without it (§11 amendment 4) |
| 39 | `MA-12` | the **unit constraints** | Kelly's redundancies — $\lambda_{X\otimes Y}$, $\rho_{X\otimes Y}$ and $\lambda_{\mathbf 1}=\rho_{\mathbf 1}$ — are **theorems** from pentagon $+$ triangle, and the page states exactly which of Mac Lane's original axioms it assumes and which it derives (§10) |
| 40 | `MA-12` | **bracketed tensor products only** | until coherence is proved, only explicitly parenthesised products are defined expressions. `MA-12` obeys this; it is `MA-13` that licenses $A_1\otimes\cdots\otimes A_n$ |
| 41 | `MA-13` | **$n$-fold tensor products and unbracketed strings** | licensed by **coherence and by nothing else**. This is a large fan-in: **every later item that writes an unbracketed tensor string depends on the coherence theorem**, and that `deps` edge is declared, never assumed |
| 42 | `MA-13` | the **statement** of coherence | "every diagram commutes" is **false as stated** and Mac Lane says so himself. The library states the free-monoidal-category form, and the `fs-` page carries the slogan as the false statement (§10) |
| 43 | `MA-14` | the **internal hom** $[X,Y]$ | defined by the adjunction $-\otimes X\dashv[X,-]$; existence is a hypothesis on the category, and the object is unique up to unique natural isomorphism by #3. "Closed" is a property, and a monoidal category need not have it |
| 44 | `MA-15` | the **braiding** | naturality **in both variables**, plus the two hexagons; and $c$ is an isomorphism by definition, which is not automatic from the hexagons and must be part of the data |
| 45 | `MA-16` | **left dual**, **right dual** | the data is $(X^\vee,\operatorname{ev},\operatorname{coev})$ satisfying the two zig-zag identities; **duals are unique up to a unique isomorphism compatible with $\operatorname{ev}$ and $\operatorname{coev}$**, and that theorem is what licenses the notation $X^\vee$. Left and right duals are **different** in a general monoidal category and the page never conflates them |
| 46 | `MA-16` | **trace** and **dimension** | a categorical trace is first defined in a rigid category for a morphism $X\to X^{\vee\vee}$; a pivotal structure turns an endomorphism into such a morphism, sphericality identifies left and right traces, and braiding alone does not supply a pivotal structure. The exact ladder is `MA-16` item 20; a trace in a bare monoidal category is not defined |
| 47 | `MA-17` | a **$\mathcal V$-enriched category** | composition is a **morphism of $\mathcal V$**, and the associativity and unit conditions are commuting diagrams **in $\mathcal V$** — which can only be written unambiguously because of `MA-13`'s coherence. That dependency is declared |
| 48 | `MA-17` | the **underlying ordinary category** $\mathcal V_0$ | built from $\mathcal V(\mathbf 1,-)$; that it is a category, and that the construction is functorial, are proofs |
| 49 | `MA-17` | **change of base** along a lax monoidal functor | the induced $\mathcal V$-category-to-$\mathcal W$-category assignment is well defined exactly because the functor is lax monoidal; the laxity constraints are what supply the new composition |
### Obligations 50–58, added or corrected while scaffolding `MA-7` … `MA-18`

Rows 1–49 were written before the source research of 2026-08-13 came back. **Three
of the nine rows below are corrections to rows above, and each is stated as a
correction rather than a silent edit**, because a scaffold that quietly repairs
itself teaches a later auditor nothing.

| # | page | the obligation | what must be established, and where |
|---|---|---|---|
| 50 | `MA-7` | **the symbol $0$ arrives with two meanings** | the library already has zero morphisms (`def-category-with-zero-morphisms`, `prop-zero-object-induces-zero-morphisms`) and preadditivity supplies the neutral element of each hom-group. **That they agree is a numbered item** (`MA-7` item 10), proved before either is used, and item 11 is the bridge citation later pages quote |
| 51 | `MA-8` | **refinement of #30** | #30 as written made the $\mathbf{Ab}$-enrichment derivation load-bearing for the whole page. The page instead carries **two** axiomatisations: item 9 (additive $+$ AB1 $+$ AB2) is the **working definition** cited by every later page, and items 17–19 are theorems *about* Freyd's enrichment-free list. Item 18 is now **sourced and provable** — Freyd's Thm 2.39 and Mitchell's Prop. 18.4, by the shear matrix $\binom{1\ x}{0\ 1}$, not by the codiagonal kernel this file first proposed — and nothing outside items 17–20 depends on it, so its documented fallback leaves the page intact. The intent of #30 is preserved: **the enrichment is a theorem and never an unmotivated axiom** |
| 52 | `MA-10` | **CORRECTION to #36** | #36 says *"A 'member calculus' without rule (vi) cannot prove the five lemma, and a proof that appears to is wrong."* **That is false.** Mac Lane's five-lemma proof (CWM Lemma VIII.4.4) opens *"By duality, it suffices to prove $f_3$ monic"* and uses only rules (ii) and (v). Rule (vi) is consumed by exactly two things: the **epi half of the five lemma proved directly by members** (Exercise VIII.4.2, whose hint says *"Rule (vi) of Theorem 3 is necessary in this proof"*), and **exactness of the ker–coker sequence at $\operatorname{Ke}h$** in the snake lemma. **The corrected obligation:** rule (vi) is stated in all three clauses (`MA-10` item 23) and is indispensable for the snake lemma; the five lemma reaches its epi half either by rule (vi) or by dualising, and `MA-10` items 38–39 keep both routes open. The rest of #36 stands — each rule is its own numbered lemma and rule (vi) is the deliberately weakened one |
| 53 | `MA-10` | **CORRECTION to §6's member-calculus row** | §6 records the member calculus and the diagram lemmas as *"choice-free, constructive, and valid in any abelian category"*. **The choice-free and smallness-free claims stand** — the only construction primitives are finite limits and colimits together with `MA-8` item 23 — but **no source consulted establishes constructivity**, and the library does not assert it. `MA-10` item 27 claims exactly what is supported and no more. The load-bearing consequence is unchanged: the track can refuse Freyd–Mitchell as a proof device and still prove the snake lemma |
| 54 | `MA-16` | **CORRECTION to #46** | #46 says the trace needs *"a braiding or a pivotal structure"*. **Braiding alone is not enough.** The verified ladder: **rigidity** is needed to type $\operatorname{Tr}$ at all, and its input is a morphism $V\to V^{\vee\vee}$ rather than an endomorphism; **a pivotal structure** is needed to trace an endomorphism; **sphericality** is needed for $\operatorname{Tr}_L=\operatorname{Tr}_R$; and a braiding gives only the Drinfeld morphism — one needs a **twist** on top of it before $u_X\theta_X$ is a pivotal structure. `MA-16` item 20 is the required remark and item 28 is the theorem. The rest of #46 stands: a "trace" in a bare monoidal category is not defined |
| 55 | `MA-18` | the scalar condition $\operatorname{End}(\mathbf1)=k$ | it means the canonical unital map $k\to\operatorname{End}(\mathbf1)$ from $k$-linearity is an isomorphism; no arbitrary scalar identification is chosen |
| 56 | `MA-18` | multiplication on $K_0(\mathcal C)$ | biexactness sends a short-exact relation to one in either tensor variable, so multiplication descends; associator and unitors supply the ring laws |
| 57 | `MA-18` | duality on $K_0(\mathcal C)$ | exact contravariant duality respects the defining relations and reverses tensor order, hence gives an anti-involution, not automatically a commutative-ring involution |
| 58 | `MA-18` | fusion coefficients | finite semisimplicity and Jordan–Hölder make the multiplicities independent of decompositions; any displayed simple representatives are supplied finite data, not a globally selected skeleton |

---

## 8. What is deliberately not here — scope denials

Each entry records **why**, and **what would license it**. A dropped result is
deferred, not deleted. Under the owner's rule of 2026-08-11, "it would have taken
three more lemmas" is **not** a permitted reason: everything below either rests on
a subject area the library has not reached, or is a research-level proof, or is
recorded honestly as `proved_here: false`.

1. **A universe axiom / an inaccessible cardinal.** Not a choice axiom; it raises
   consistency strength above ZFC and would silently change the foundations of
   every published page. Rejected under self-contained scope. §3.1.
2. **Global choice.** Owner decision SE-D3, 2026-07-28. Not re-opened. Every
   theorem that would need it is stated in data-supplied form (§6).
3. **$\mathbf{CAT}$; $[\mathcal C,\mathcal D]$ for large $\mathcal C$; presheaf
   categories on a large $\mathcal C$; the free-cocompletion theorem for large
   $\mathcal C$.** Casualties of denial 1, already recorded in the published
   `rem-category-theory-class-and-size-conventions`. Licensed by denial 1 only.
   **The consequence to enforce at authoring time: a monad is defined directly,
   never as a monoid object in $[\mathcal C,\mathcal C]$** (§7 #13).
4. **Locally presentable and accessible categories, and the adjoint functor
   theorem for them** (Riehl 2nd ed. Thm 4.7.17). Riehl gives a **sketch**, not a
   proof — *"We briefly summarize the main ideas … leaving the important details
   to the definitive source [AR94]"* — and the sketch leans on two Adámek–Rosický
   results, one of which she calls *"a hard theorem"* ([AR94, 1.58]: an object of
   a locally presentable category has at most a set of epimorphic quotients up to
   isomorphism). The library **does** have the prerequisite
   (`def-cofinality` defines regular cardinals), so this is denied for the size of
   the theory, not for a missing definition: accessible category theory is a
   subject area, and it is the licence. Nothing else in this track depends on it.
   *(This reverses the "deliberately NOT denied" note in
   `plan-combinatorics-and-categories.md` §9; see §11 amendment 6 for why.)*
5. **The Freyd–Mitchell embedding theorem is STATED, NOT PROVED — and nothing
   depends on it.** This supersedes the prior scaffold's outright denial. The
   owner's remit for this track asks for the statement *"honestly sourced"*, and
   the library owns exactly the machinery for that: a `rem-` item with
   `proved_here: false`, the exact statement, a working source URL, and the
   structured `external_dependency` record (SCHEMA §3). Riehl's own comment on
   Freyd's proof is the necessity argument — *"A proof appears as the very last
   result of the book [Fre03]. Unfortunately, most of the material presented in
   the preceding 150 pages appears to be necessary."* — and its genuine
   prerequisites (Grothendieck categories, injective envelopes, a substantial
   amount of module theory) are a subject area the library has not reached.
   **The load-bearing half of the denial stands:** Freyd–Mitchell is *never* used
   as a proof device. `MA-10` and `MA-11` prove every diagram lemma by the member
   calculus, which is choice-free and smallness-free, and the
   `rem-` item carries no outgoing `deps` into the diagram lemmas at all.
   Licensed by a Grothendieck-categories page.
6. **The advanced theory of fusion categories: Frobenius–Perron dimension,
   module categories, Drinfeld centres and modularity, Deligne tensor products,
   and Tannaka reconstruction.** `MA-18` now builds the properly sourced
   foundation — finite and locally finite $k$-linear abelian categories,
   tensor/multitensor and fusion/multifusion categories, biexactness, the unit
   theorems, Grothendieck rings and fusion rules. The material denied here needs
   substantial new subject areas: Perron–Frobenius theory for the dimension
   results, module-category and centre machinery for modularity, and Hopf or
   quasi-Hopf algebra for reconstruction. In particular EGNO Cor. 4.7.13
   (categorical dimensions are algebraic integers) is deferred because its proof
   spends that integrality theory. Each topic is named separately again in
   `MA-18` item 23; none is a dependency of this track.
7. **$\infty$-categories, model categories, derived and triangulated categories,
   localisation and calculi of fractions, homotopical algebra, simplicial sets
   and Dold–Kan.** Each is a track. Recorded because `MA-6`'s B page will be
   tempted to gesture at them; an orientation Remark is permitted, a dependency
   is not.
8. **Derived functors as Kan extensions** (Riehl §6.4: homotopical categories,
   weak equivalences, deformations, `HoC`, Prop 6.4.13). Rests on denial 7, and
   on `homological-algebra`, which is a different track. Riehl's Ch 6 is
   scaffolded here **without** §6.4.
9. **Grothendieck toposes and the Giraud theorem** (Riehl §E.4); **elementary
   toposes**. A track. `MA-14` does mint `def-subobject-classifier` and verifies
   it for $\mathbf{Set}$, because that costs two items and is the natural
   companion of the subobject theory `MA-2` already builds; the topos axioms are
   denied. Licensed by a topos-theory page.
10. **The terminal-coalgebra characterisation of $[0,1]$** (Riehl §E.3, Freyd)
    and coalgebras for an endofunctor generally beyond what `MA-3` needs for
    comonads. Not commissioned; recorded because Riehl's Epilogue puts it next to
    material this track does cover.
11. **Yoneda $\operatorname{Ext}^n$ as a set.** Needs well-poweredness of the
    ambient abelian category, and it belongs to `homological-algebra` in any
    case. `MA-9` mints `def-well-powered-and-co-well-powered`, so the hypothesis
    will be available when that track wants it.
12. **Mac Lane's original 1963 coherence proof** — the rank induction over
    iterates, instances and expansions, and the $S(n)$-presentation argument of
    his Theorem 4.2. Not denied as mathematics; **not chosen as the route**. See
    `MA-13`: the Joyal–Street strictification argument, as EGNO presents it,
    proves the same theorem from pentagon, triangle and naturality alone, with no
    formalised free monoidal category and no group presentation. Mac Lane 1963 is
    cited as the source of the theorem and as a Remark on its history.
13. **Enriched change of base beyond a definition** (`MA-17`). **Kelly's book does
    not contain it**, by explicit authorial decision: *"our decision not to
    discuss the 'change of base-category' given by a symmetric monoidal functor
    $\mathcal V\to\mathcal V'$ … would need a careful analysis of the 2-category
    of symmetric monoidal categories."* `MA-17` therefore states the construction
    and proves that it is well defined (§7 #49), and **denies the 2-categorical
    theory of change of base**. Source-contingent: see §12, seam S-4.
14. **Weighted colimits beyond the definition and the two reduction formulas.**
    Kelly Ch 3 is deep and much of it (§§3.2–3.6, 3.8–3.11) is enriched-limit
    technology serving enriched functor categories the library does not build.
    `MA-5` takes the definition, the tensor/cotensor special cases, and Kelly's
    (3.69)/(3.70) reductions to ends and coends; the rest is licensed by an
    enriched-limits page.
15. **The proof of "$\mathbf{Field}\to\mathbf{Set}$ has no adjoint" by RAPL** is
    KEPT (Leinster Ex 6.3.5, cheap and instructive), but **the theory of fields
    as a category** is not developed here; the example cites only what the
    published field pages give.

**Deliberately NOT denied, because dropping them by reflex would be the mistake
the owner's 2026-08-11 rule exists to prevent:**

- **Braided and symmetric coherence.** The prior scaffold denied both. They are
  **theorems**, in the correct restricted form, and the only thing missing is a
  group-theoretic presentation the library can build — see §11 amendment 3 and
  `MA-15`. Denying them would drop a valuable result for want of a lemma.
- **Locally cartesian closed categories** (Riehl §4.5, new in the 2nd edition).
  Needs only slice categories and pullbacks, both published. `MA-14`.
- **The ultrafilter monad on $\mathbf{Set}$ and Manes' theorem.** `MA-4`, with the
  decomposition written out and a verification instruction, not an assertion.
- **The member/pseudo-element calculus** in full. No smallness and no choice;
  no constructivity claim is made (§7 obligation #53).
- **Idempotent monads, reflective subcategories, and their identification**
  (Riehl Prop 5.3.3). Cheap once `MA-2` and `MA-3` exist, and it is the theorem
  that makes both pages pay for each other.

---

# 9. The pages

Format per pair: relative label, title, proposed page id, `requires` (direct, as
page ids — the authoring Beta computes the closure), then the narrative, then
the **A-page item list in dependency order** with ids, kinds and one-line
statements, then the **B/examples companion**, the **sources with exact
locators**, the **proof strategy** for anything hard, and the **traps**.

Item ids are proposals for step 1 except where a §7 row fixes one. **Every id
below was checked against `items/` with `ls items/ | grep -i` on 2026-08-13**;
where the bare name was already taken the proposal is namespaced and the
collision is named in the traps.

**Component-provenance plan, stated once and binding on every item.** This is a
deterministic authoring rule, not a vague page default:

- A definition copied or faithfully shortened from the nearby named source has
  `statement: literature-derived`, `proof: not-applicable`; a remark that
  reconciles several sources has `statement: ai-altered`, `proof: not-applicable`,
  with its rationale naming the exact reconciliation.
- Every A-page theorem, lemma, proposition, sourced corollary and sourced
  counterexample has `statement: literature-derived`. Its proof is
  `literature-derived` only when the cited proof is followed without structural
  change; otherwise it is `ai-altered`, with the rationale naming the adaptation
  to published dependencies, size policy, choice policy or notation. The latter
  is the common case. A result with `proved_here: false`, especially Freyd–Mitchell
  and `MA-16` item 26, has `proof: not-supplied` and the full structured
  `external_dependency` record.
- Every `fs-` item is a literature-derived or literature-motivated **false
  statement**, never `ai-generated`: `statement: ai-altered` when the false
  near-miss is obtained by deleting/reversing a cited theorem's hypothesis or
  conclusion, and `proof: ai-altered` for its source-backed refutation. The
  rationale names that transformation.
- A B-page example or counterexample with a parenthetical source uses
  `statement: literature-derived`, `proof: ai-altered` unless the source proof is
  followed. An unsourced B-page construction is an `[AI-GEN CANDIDATE]` with
  `statement: ai-generated`, `proof: ai-generated`, a truth/counterexample search
  before authoring, and `generation.role: example` or `counterexample`. **It is a
  leaf and may not be a `deps` target.** This rule corrects the earlier blanket
  sentence that incorrectly claimed every B-page statement was literature-derived.
- The explicit `[AI-GEN CANDIDATE]` A-page items use
  `statement: ai-generated`, `proof: ai-generated`, carry the stated generation
  role and are forbidden as dependency targets. If authoring finds a literature
  source, it upgrades both components and records the locator rather than leaving
  stale AI provenance.

The highest-risk proof adaptations are called out in their item text: the
Leinster ZF initial-object argument and data-supplied AFT assembly (`MA-2`), Beck's
creation/strict-creation split (`MA-4`), size-restricted ends/Kan/density
(`MA-5`–`MA-6`), the Mitchell shear (`MA-8`), the member and snake constructions
(`MA-10`–`MA-11`), strictification/coherence (`MA-13`), presheaf exponentials
(`MA-14`), monoids in a braided base (`MA-15`), the trace hypothesis ladder
(`MA-16`) and the particular-end/enriched-adjunction distinctions (`MA-17`). Each
gets `proof: ai-altered` unless the eventual author follows the named source
verbatim and records that fact.

---

## MA-1. Adjunctions, Units and Counits

**page id** `adjunctions-units-and-counits`
**`requires`** `limits-and-colimits`, `universal-properties-and-the-yoneda-lemma`,
`free-groups-and-presentations`, `free-modules-and-exact-sequences`,
`tychonoff-embedding-and-stone-cech`, `subspaces-products-and-quotients`,
`conjugacy-and-simplicity-in-the-symmetric-groups` *(for the abelianisation
example's commutator machinery — the authoring Beta verifies which page homes
`def-abelianisation-of-a-group` and `thm-derived-subgroup-is-characteristic-and-abelianization-is-universal`
and lists that page instead if it differs)*

The page that turns the published objectwise theory into a theory of functors.
`def-universal-arrow-to-and-from-a-functor` and
`thm-universal-arrows-are-initial-or-terminal-in-comma-categories` are already on
disk; what is missing is the naturality that makes a family of universal arrows a
functor, and the calculus that follows. The page is deliberately example-heavy on
the **A** side, because the B page is a leaf and the free–forgetful adjunctions
are cited by `MA-2`, `MA-3` and `MA-4`.

### A-page items, in dependency order

**The definition and its equivalent encodings**

1. `def-adjunction-by-unit-counit-and-triangle-identities` — def. $F\dashv G$ is $(F,G,\eta,\varepsilon)$ with $\eta:1_{\mathcal C}\Rightarrow GF$, $\varepsilon:FG\Rightarrow1_{\mathcal D}$ and $\varepsilon F\circ F\eta=1_F$, $G\varepsilon\circ\eta G=1_G$. **Orientation and whiskering notation taken verbatim from the published `def-equivalence-and-adjoint-equivalence-of-categories`** (§4.1). LANDMARK.
2. `rem-why-this-library-takes-unit-counit-as-the-definition` — rem. The deviation from Mac Lane, Riehl and Leinster, with the size reason: the hom-set formulation presupposes local smallness, the unit–counit formulation presupposes nothing (§3.1(2)). Without this remark a later reader reads the deviation as an error.
3. `prop-an-adjoint-equivalence-is-an-adjunction-with-invertible-unit-and-counit` — prop. Cites `def-equivalence-and-adjoint-equivalence-of-categories` and closes the loop to `thm-every-equivalence-can-be-made-an-adjoint-equivalence`.
4. `def-adjunct-and-transposition-under-an-adjunction` — def. $f^\flat:=Gf^\sharp\circ\eta_c$ and $g^\sharp:=\varepsilon_d\circ Fg^\flat$. *(Id namespaced: `def-transpose-of-a-linear-map` and `def-transpose-of-a-matrix` are taken.)*
5. `thm-the-adjunction-hom-set-bijection-under-local-smallness` — thm. For locally small $\mathcal C,\mathcal D$, transposition is a bijection $\mathcal D(Fc,d)\cong\mathcal C(c,Gd)$ natural in both variables, and conversely such a natural family yields a unique unit and counit satisfying the triangle identities. **Six discharges, §7 #1.** LANDMARK.
6. `thm-naturality-of-the-adjunction-bijection-is-transposition-of-squares` — thm. A square in $\mathcal D$ commutes exactly when its transposed square in $\mathcal C$ does (Riehl Lemma 4.1.3). This is the working form of naturality and every later proof on the page uses it rather than the raw definition.
7. `thm-unit-components-are-initial-in-their-comma-categories` — thm. $\eta_c$ is initial in $c\downarrow G$; dually $\varepsilon_d$ is terminal in $F\downarrow d$. Cites the published `thm-universal-arrows-are-initial-or-terminal-in-comma-categories` and does **not** reprove it.
8. `thm-equivalent-encodings-of-an-adjunction` — thm. The unit–counit form, the hom-set form (under local smallness), the "unit whose components are universal arrows" form, and the counit dual are mutually equivalent (Riehl Thm 4.2.7 (i)–(vi)). LANDMARK.
9. `thm-a-left-adjoint-exists-exactly-when-every-comma-category-has-an-initial-object` — thm. $G:\mathcal D\to\mathcal C$ admits a left adjoint iff $c\downarrow G$ has an initial object for every $c$ **and a choice of such objects is given** (§6, SE-D3). Riehl Lemma 4.7.1; Leinster Cor 2.3.7. LANDMARK — this is the statement `MA-2` applies twice.
10. `thm-objectwise-universal-arrows-assemble-into-a-left-adjoint` — thm. Given $(Fc,\eta_c)$ universal for every $c$, the morphism assignment is forced, $F$ is a functor, $\eta$ is natural, and $F\dashv G$. §7 #2. LANDMARK.
11. `thm-a-pointwise-right-adjoint-extends-uniquely-to-a-functor` — thm. **Given** an object assignment $d\mapsto Gd$ and representing isomorphisms $\mathcal D(Fc,d)\cong\mathcal C(c,Gd)$ natural **in $c$ alone**, the assignment extends uniquely on arrows to a functor making the isomorphism natural in $d$ as well (Riehl Prop. 4.4.4). The word “given” prevents a proper-class selection from being hidden in $\forall d\,\exists Gd$.
12. `rem-the-choice-behind-assembling-an-adjoint` — rem. Points at the published `rem-choice-behind-limit-and-colimit-functors` and at SE-D3; states that this library never asserts the unconditional form.

**The calculus**

13. `thm-adjoints-are-unique-up-to-unique-natural-isomorphism` — thm. Two left adjoints to $G$ are related by a unique natural isomorphism commuting with the units and counits (Riehl Prop 4.3.1). LANDMARK — licenses "the" left adjoint and the notation $F\dashv G$. §7 #3.
14. `thm-adjunctions-compose` — thm. $F'F\dashv GG'$ with $\bar\eta=G\eta'F\circ\eta$ and $\bar\varepsilon=\varepsilon'\circ F'\varepsilon G'$; **the triangle identities are rechecked, not inferred** (Riehl Prop 4.3.4). §7 #4.
15. `prop-an-adjunction-induces-adjunctions-on-functor-categories` — prop. For $F\dashv G$ and legitimate functor categories, postcomposition gives $F_*\dashv G_*$ on $\mathcal C^{\mathcal J}\rightleftarrows\mathcal D^{\mathcal J}$ for small $\mathcal J$, while precomposition gives $G^*\dashv F^*$ in the contravariant arrangement (Riehl Prop. 4.3.6). Every source category is small as required by `prop-size-of-functor-categories`.
16. `thm-mates-under-a-pair-of-adjunctions` — thm. The bijection between natural transformations $\alpha^\sharp$ and $\alpha^\flat$ across two adjunctions, and its compatibility with composition (Riehl Prop 4.3.7, new in the 2nd edition). LANDMARK — it is what makes Beck–Chevalley-style arguments statable later.
17. `prop-an-adjunction-restricts-to-an-equivalence-on-its-fixed-subcategories` — prop. $F\dashv G$ restricts to an equivalence between the full subcategories on which $\eta_c$, resp. $\varepsilon_d$, is invertible (Riehl Lemma 4.2.11).
18. `thm-fullness-and-faithfulness-of-a-right-adjoint-read-off-the-counit` — thm. $G$ is faithful iff every $\varepsilon_d$ is epic; $G$ is full iff every $\varepsilon_d$ is a split monomorphism; $G$ is fully faithful iff $\varepsilon$ is an isomorphism. Dually for $\eta$ and $F$ (Riehl Lemma 4.6.11). LANDMARK — `MA-2` and `MA-3` both turn on it.
19. `def-adjoint-triple` — def. $L\dashv M\dashv R$.
20. `def-mutually-left-and-mutually-right-adjoint-contravariant-functors` — def. $\mathcal D(Fc,d)\cong\mathcal C(Gd,c)$ and $\mathcal D(d,Fc)\cong\mathcal C(c,Gd)$ (Riehl Def 4.4.1).
21. `def-galois-connection` — def. An adjunction between posets regarded as categories; monotone $F,G$ with $Fc\le d\iff c\le Gd$. *(Id free.)*
22. `cor-a-galois-connection-satisfies-fgf-equals-f-and-gfg-equals-g` — cor. Riehl Cor 4.2.10.
23. `prop-in-a-poset-adjunction-the-triangle-identities-are-automatic` — prop. Because parallel morphisms in a poset are equal (Leinster Ex 2.2.7). It is the cheapest possible illustration of what the triangle identities are *for*.

**Preservation — the payoff**

24. `thm-right-adjoints-preserve-limits` — thm. **RAPL.** Proved by the direct unit/counit argument: transport a cone, use the triangle identities, get existence and uniqueness of the mediating morphism. LANDMARK.
25. `cor-left-adjoints-preserve-colimits` — cor. By `thm-category-theoretic-duality-principle`, not by a second proof.
26. `rem-rapl-carries-no-size-hypothesis` — rem. Riehl states this explicitly and it is worth preserving: a restatement that adds "for small $\mathcal J$" weakens the theorem gratuitously. The second, representable-functor proof **does** need local smallness, and the remark reconciles the two routes.
27. `thm-representable-second-proof-of-rapl-under-local-smallness` — thm. Via `thm-representable-functors-preserve-small-limits` (published) and the hom-set bijection. Stated as a second route with its own hypothesis, per §6.
28. `def-left-exact-and-right-exact-functor` — def. Left exact = preserves finite limits; right exact = preserves finite colimits (Riehl Def 4.6.7). *(Ids `thm-hom-functors-are-left-exact` and `cex-contravariant-hom-need-not-be-right-exact` already exist for modules; the bare `def-left-exact-…` name is free.)*
29. `cor-a-right-adjoint-is-left-exact-and-a-left-adjoint-is-right-exact` — cor.
30. `thm-limits-and-colimits-are-adjoint-to-the-diagonal-functor` — thm. Given chosen $\mathcal J$-limits, $\Delta\dashv\lim_{\mathcal J}$, and given chosen colimits, $\operatorname{colim}_{\mathcal J}\dashv\Delta$ (Riehl Prop 4.6.1; Leinster Prop 6.1.4). **Data-supplied form**, citing the published `thm-chosen-limits-and-colimits-assemble-into-functors`. LANDMARK.
31. `thm-direct-image-and-preimage-form-an-adjoint-triple-on-power-sets` — thm. For $f:A\to B$, $f_!\dashv f^{-1}\dashv f_*$ between $\mathcal P(A)$ and $\mathcal P(B)$ as posets (Riehl Ex 4.1.8). Cites the published `def-image-and-preimage-under-a-relation`. **The authoring Beta fixes which of $f_!$/$f_*$ is the direct image and which the universal-image and states it explicitly** — the two conventions both appear in the literature.
32. `rem-the-image-preimage-adjunctions-explain-the-published-preservation-laws` — rem. Preimage preserves unions and intersections; direct image preserves only unions. **Cites, and does not restate,** the published `thm-preimages-commute-with-unions-intersections-and-differences` and `prop-images-of-unions-and-intersections-under-a-function`; the categorical content is the *explanation*, and duplicating the statements would be the duplication the library forbids.

**Worked adjunctions, numbered on the A page because the B page is a leaf**

33. `thm-the-free-group-functor-is-left-adjoint-to-the-underlying-set-functor` — thm. Cites `def-free-group` and `thm-free-groups-unique-up-to-unique-isomorphism`. LANDMARK.
34. `thm-the-free-module-functor-is-left-adjoint-to-the-underlying-set-functor` — thm. Cites `thm-universal-property-of-free-modules`.
35. `thm-the-free-monoid-functor-is-left-adjoint-to-the-underlying-set-functor` — thm. *(The published `ex-free-monoid-universal-property-as-a-representation` is a B-leaf and cannot be cited; the authoring Beta checks whether an A-page free-monoid universal property exists and proves it locally if not.)*
36. `thm-abelianisation-is-left-adjoint-to-the-inclusion-of-abelian-groups` — thm. Cites `thm-derived-subgroup-is-characteristic-and-abelianization-is-universal`.
37. `thm-the-discrete-and-indiscrete-topologies-form-an-adjoint-triple-over-set` — thm. $D\dashv U\dashv I$ (Riehl Ex 4.1.6). LANDMARK — the standard witness that a functor can have adjoints on both sides.
38. `thm-stone-cech-is-left-adjoint-to-the-inclusion-of-compact-hausdorff-spaces` — thm. **Statement names the ultrafilter lemma and dependent choice**, inherited verbatim from the published `thm-stone-cech-evaluation-closure-universal-property` and `lem-compact-hausdorff-targets-embed-in-unit-cubes-under-dependent-choice`. LANDMARK.
39. `prop-the-underlying-set-functor-on-fields-has-no-left-adjoint` — prop. A left adjoint would send the empty set to an initial field, but no field is initial: fields of different characteristics rule out a universal morphism. Riehl Ex. 4.1.12; Leinster Ex. 6.3.5. RAPL is not used — a right adjoint preserves limits that exist; it does not force a missing limit to exist.
40. `thm-restriction-of-scalars-has-a-left-and-a-right-adjoint` — thm. Extension and coextension of scalars along a ring homomorphism (Riehl Ex 4.1.10(xii)). **CONTINGENT** on `tensor-products-of-modules` (§11 amendment 1); if that page does not land below this one, the item drops to the $\operatorname{Hom}$-side adjoint alone and the drop is recorded.
41. `thm-currying-is-an-adjunction-in-set` — thm. $-\times A\dashv(-)^A$ on $\mathbf{Set}$, stated with the function set as an ordinary set. **The authoring Beta verifies an A-page home exists for the function set**; the published `ex-function-sets-as-exponential-representing-objects` is a B-leaf and is not citable.

### `fs-` items (A page)

- `fs-a-unit-and-counit-determine-an-adjunction-without-the-triangle-identities` — the sharpest one on the page; refuted by an explicit pair (Riehl Rem 4.2.6 gives the shape).
- `fs-left-adjoints-preserve-limits` — the direction error, refuted by the free-group functor and a product.
- `fs-every-functor-with-a-left-adjoint-also-has-a-right-adjoint`.
- `fs-the-hom-set-form-of-an-adjunction-needs-no-size-hypothesis` — §3.1(2); this is what motivates item 2.

### B page — `adjunctions-units-and-counits-examples`

`ex-unit-and-counit-of-the-free-group-adjunction` (unit = singleton words, counit = evaluation; Riehl Ex 4.2.4) · `ex-unit-and-counit-of-the-free-vector-space-adjunction` · `ex-the-galois-connection-between-ideals-and-varieties` (Riehl Ex 4.4.2) · `ex-the-free-category-on-a-quiver` (Riehl Ex 4.1.13) · `ex-the-maximal-subgroupoid-and-fractions-adjoint-triple` (Riehl Ex 4.1.15) · `ex-frobenius-reciprocity-for-group-representations` (Riehl Ex 4.1.11) · `cex-a-componentwise-family-that-is-not-a-unit` · `cex-an-adjunction-whose-triangle-identities-fail-for-a-wrong-counit` · `ex-adjunction-between-preorders-computed`.

### Sources

- **Riehl, *Category Theory in Context*, 2nd ed.**, `https://emilyriehl.github.io/files/context.pdf` — **§§4.1–4.4, 4.6** read in full (printed pp. 132–173). Primary.
- **Leinster, *Basic Category Theory*** (arXiv:1612.09375v2), `https://arxiv.org/pdf/1612.09375` — **Ch 2 in full** (printed pp. 41–64) and **§6.3** (pp. 157–170). Second independent treatment; his Thm 2.2.5 / Thm 2.3.6 / Cor 2.3.7 cover the same ground with different proofs, and Ch 2 is fully self-contained.
- **Mac Lane, *CWM*, Ch IV** — third treatment, for the classical statement and for the historical attribution of $\dashv$ to Kan.

### Traps

1. **`thm-five-lemma-for-modules`-style id collisions do not arise here, but `transpose` does.** `def-transpose-of-a-linear-map` and `def-transpose-of-a-matrix` are published; item 4 is namespaced accordingly.
2. **Riehl's 2nd edition renumbered Chapters 3 and 4.** The adjoint functor theorems are **§4.7**, not §4.6, and Prop 4.3.7 (mates), §4.5 (lccc), Thm 4.2.7 and Ex 6.2.15 are new. Any locator carried over from a first-edition citation is wrong. Every Riehl locator in this file is against the 2nd edition, PDF built 2026-07-28.
3. **Item 2 is not optional.** A definitional deviation that is not recorded reads as an error to the next auditor.
4. **RAPL's proof must be the unit/counit one.** The representable proof is item 27 and carries a hypothesis item 24 does not.
5. Riehl's Ex 4.1.7 (floor and ceiling adjoint to $\mathbb Z\hookrightarrow\mathbb R$) is a lovely example and is **omitted**: the library has no floor or ceiling on $\mathbb R$, only `def-the-ceiling-of-a-quotient-of-naturals` for naturals. §11 amendment 7 offers it to whoever wants to mint them.

**Forward references: NONE.**

---

## MA-2. Reflective Subcategories and the Adjoint Functor Theorems

**page id** `reflective-subcategories-and-the-adjoint-functor-theorems`
**`requires`** `adjunctions-units-and-counits`, `limits-and-colimits`,
`urysohn-lemma-and-tietze`, `tychonoff-embedding-and-stone-cech`

The existence half. `MA-1` says what an adjoint is and how to recognise one
objectwise; this page says when one exists. It also mints the subobject
vocabulary — subobject, intersection, well-powered, separating and coseparating
set — because SAFT needs it and because `MA-9` needs it later; minting it twice
is the failure mode this placement prevents.

The page carries the block's most delicate proof obligation: the textbook
initial-object lemma makes a class-indexed choice, and SE-D3 forbids it. §6
records the repair and item 12 is where it lands.

### A-page items, in dependency order

**Reflective subcategories**

1. `def-reflective-subcategory-and-reflector` — def. A **full** subcategory whose inclusion has a left adjoint $L$, the reflector (Riehl Def 4.6.12). Fullness is part of the definition here. §7 #5.
2. `def-coreflective-subcategory-and-coreflector` — def. The formal dual.
3. `thm-a-full-subcategory-is-reflective-exactly-when-each-object-has-a-universal-arrow` — thm. Restates `MA-1` item 9 in this setting, in data-supplied form.
4. `thm-the-counit-of-a-reflection-is-an-isomorphism` — thm. From `MA-1` item 18: the inclusion is fully faithful, so $\varepsilon$ is invertible. LANDMARK — it is the working characterisation.
5. `thm-an-object-lies-in-a-reflective-subcategory-exactly-when-its-reflection-unit-is-invertible` — thm. The essential-image characterisation (Riehl Ex 4.6.x), and the reason the reflector is also called a localisation.
6. `thm-a-reflective-inclusion-creates-all-limits` — thm. Riehl Prop 4.6.14(i), Cor 5.6.6. **States which creation** (§3.3): the isomorphism-invariant one of the published definition. LANDMARK.
7. `thm-a-reflective-subcategory-has-every-colimit-the-ambient-category-has` — thm. Formed by applying the reflector to the ambient colimit (Riehl Prop 4.6.14(ii)). **The inclusion does not preserve them**, which is the companion `cex-`.
8. `cor-a-reflective-subcategory-of-a-complete-category-is-complete` — cor.

**Subobjects and smallness vocabulary**

9. `def-subobject-and-quotient-object` — def. A subobject of $c$ is an isomorphism class of monomorphisms into $c$ under mutual factorisation. Dually, a quotient object is an isomorphism class of epimorphisms out of $c$ under mutual factorisation, ordered oppositely so that factorisation direction is explicit (Riehl Def. 4.7.8 and its dual). §7 #6. LANDMARK.
10. `thm-mutual-factorisation-defines-subobject-and-quotient-object-equivalence` — thm. Mutual factorisation of monomorphisms is an equivalence relation, and dually for epimorphisms. §7 #6.
11. `thm-subobjects-and-quotient-objects-form-oppositely-ordered-collections` — thm. Antisymmetry is exactly that mutually factoring representatives differ by a unique isomorphism; the quotient order is the explicitly stated dual.
12. `def-intersection-of-a-family-of-subobjects` — def. The greatest lower bound of a supplied collection in $\operatorname{Sub}(c)$ (Riehl Def. 4.7.9). For a supplied **set-indexed family of representative monomorphisms**, the construction theorem computes it as their wide pullback, equivalently their product in the slice $\mathcal C/c$. A discrete product in $\mathcal C$ is not itself the intersection. §7 #7.
13. `lem-wide-pullbacks-compute-intersections-independently-of-representatives` — lem. The wide-pullback leg is monic, has the greatest-lower-bound property, and replacing any representative mono by an isomorphic one gives the same subobject. This proves well-definedness for supplied set-indexed families; SAFT retains its direct hypothesis for arbitrary collections rather than forming a proper-class diagram.
14. `def-well-powered-and-co-well-powered-category` — def. §7 #8. **Riehl never uses the word in this theorem** — she writes the intersection hypothesis directly — so the item records the distinction. A complete well-powered category has intersections for every **supplied set-indexed representative family**; no theorem here chooses representatives of all subobject classes in ZF.
15. `def-separating-set-and-coseparating-set` — def. Riehl Def 4.7.7, by the cancellation property. §7 #9.
16. `thm-a-separating-set-is-equivalently-a-jointly-faithful-family-of-representables` — thm. The representable reformulation, stated as a theorem rather than folded into the definition.
17. `def-weakly-initial-object-and-jointly-weakly-initial-set` — def. Riehl Def 4.7.4(i),(ii); Leinster Def 6.3.9 packages the second as "weakly initial set". Both namings are recorded because the two sources differ (§10).

**The initial-object lemma and GAFT**

18. `thm-a-complete-locally-small-category-with-a-jointly-weakly-initial-set-has-an-initial-object` — thm. **The repaired proof.** LANDMARK. §6, §7 #10.
19. `def-the-solution-set-condition` — def. Stated **per object**: for each $c$ there is a set $\Phi_c=\{f_i:c\to Ud_i\}$ such that every $f:c\to Ud$ factors as $Uh\circ f_i$ for some $i$ and some $h:d_i\to d$ (Riehl Thm 4.7.3, verbatim). §7 #12.
20. `thm-the-solution-set-condition-says-the-comma-category-has-a-jointly-weakly-initial-set` — thm. Riehl's own one-line gloss, made an item because it is the bridge between the two source conventions (§10).
21. `lem-the-comma-category-projection-strictly-creates-limits-preserved-by-the-functor` — lem. Riehl Lemma 4.7.2; hence $c\downarrow U$ is complete when $\mathcal A$ is and $U$ is continuous. **Strict creation**, and the Statement says so (§3.3).
22. `thm-general-adjoint-functor-theorem-objectwise-form` — thm. $\mathcal A$ locally small and small-complete, $U$ continuous, solution set condition ⟹ every $c\downarrow U$ has an initial object. LANDMARK. §7 #11.
23. `thm-general-adjoint-functor-theorem-functor-form` — thm. Given a choice of those initial objects, $U$ has a left adjoint. LANDMARK, data-supplied (§6).
24. `rem-choice-ledger-for-the-adjoint-functor-theorems` — rem. **REQUIRED** (§6). Records that item 18 uses Leinster's local proof rather than Riehl's class-indexed selection, that items 22 and 26 are ZF objectwise existence statements, and that items 23 and 26a are the data-supplied assemblies.

**SAFT and representability**

25. `thm-a-complete-locally-small-category-with-a-small-coseparating-set-and-all-subobject-intersections-has-an-initial-object` — thm. Riehl Lemma 4.7.11. LANDMARK.
26. `thm-special-adjoint-functor-theorem-objectwise-form` — thm. If $U:\mathcal A\to\mathcal S$ is continuous, $\mathcal A$ is complete, $\mathcal A$ and $\mathcal S$ are locally small, and $\mathcal A$ has a small coseparating set and intersections of all collections of subobjects, then for every $s\in\mathcal S$ the comma category $(s\downarrow U)$ has an initial object (Riehl Thm 4.7.10, with its conclusion separated before assembly). ZF given the hypotheses. LANDMARK.
26a. `thm-special-adjoint-functor-theorem-functor-form` — thm. Under item 26's hypotheses, **given as structure** a family choosing an initial object of $(s\downarrow U)$ for every $s$, those universal arrows assemble into a left adjoint of $U$ by `MA-1` item 10. This is the SE-D3 data-supplied form; the unconditional proper-class selection is not stated. LANDMARK.
27. `cor-such-a-category-is-cocomplete` — cor. Riehl Cor 4.7.13.
28. `cor-a-continuous-functor-to-set-from-such-a-category-is-representable` — cor. Riehl Cor 4.7.14.
29. `thm-freyd-representability-theorem` — thm. A continuous $F:\mathcal C\to\mathbf{Set}$ on a complete locally small $\mathcal C$ satisfying the solution set condition is representable (Riehl Thm 4.7.15, verbatim). LANDMARK.
30. `rem-why-completeness-alone-is-not-enough` — rem. Riehl's own diagnosis — *"the problem is that $s\downarrow U$ is not in general a small category"* — together with the published `thm-cardinality-sized-products-or-coproducts-force-a-preorder`, which is what makes the obstruction unavoidable rather than accidental. Leinster's complementary dead end (assuming large limits leaves almost no categories) belongs here too.

**Applications, numbered on the A page**

31. `thm-the-unit-interval-is-a-coseparating-object-in-compact-hausdorff-spaces` — thm. Via the published `thm-urysohn-lemma`. **Statement names the choice cost**, citing the published `rem-urysohn-lemma-not-a-zf-theorem` — Urysohn's lemma is not a ZF theorem, and a SAFT application that hides that is dishonest about its hypotheses. LANDMARK.
32. `thm-saft-yields-the-stone-cech-adjunction` — thm. Riehl Ex 4.7.12; Leinster Ex 6.3.14. Compared explicitly with `MA-1` item 38, which gets the same adjunction from the published construction: **two routes to one theorem, and the page says which hypotheses each spends.**
33. `thm-the-solution-set-for-the-underlying-set-functor-on-groups` — thm. For a set $S$, use the **canonical ZF family** $F(S)/N$ indexed by all normal subgroups $N\triangleleft F(S)$, with the quotient maps from $S$. Any $S\to U(G)$ extends to $\bar f:F(S)\to G$ and factors through $F(S)/\ker\bar f$. This avoids choosing representatives of isomorphism classes and avoids Leinster Ex. 6.3.11's omitted cardinal arithmetic while proving Riehl Ex. 4.7.6's solution-set conclusion.
34. `cor-gaft-recovers-the-free-group` — cor. And the same for $\mathbf{Ab}\to\mathbf{Grp}$, $\mathbf{Grp}\to\mathbf{Mon}$, $\mathbf{Ring}\to\mathbf{Mon}$ (Leinster Ex 6.3.12).
35. `thm-reflective-subcategory-examples` — split into numbered items: `thm-compact-hausdorff-spaces-are-reflective-in-topological-spaces`, `thm-abelian-groups-are-reflective-in-groups`, `thm-torsion-free-abelian-groups-are-reflective-in-abelian-groups` (Riehl Ex 4.6.13(i)–(iii)). Each cites published material; the sheafification and nerve examples are **denied** (no sheaves, no simplicial sets — §8 denial 7).

### `fs-` items (A page)

- `fs-a-continuous-functor-on-a-complete-category-has-a-left-adjoint` — the solution set condition is not automatic. **The witness needs checking**: the standard one is a large-ordinal-indexed construction. The authoring Beta verifies it closes from `ordinals-and-transfinite-recursion` and `cardinal-arithmetic-and-cofinality`; **if it does not, this becomes a `rem-` and the drop is recorded** (§8 has no denial for it because it is expected to close).
- `fs-every-reflective-subcategory-is-closed-under-colimits` — refuted by item 7's companion.
- `fs-a-reflective-inclusion-creates-colimits` — Riehl Ex 4.6.xi.
- `fs-a-subobject-is-a-monomorphism` — the equivalence-class/representative confusion, which is exactly what item 9's well-definedness protects.

### B page — `reflective-subcategories-and-the-adjoint-functor-theorems-examples`

`ex-the-subobject-poset-of-the-integers-in-abelian-groups` · `ex-subobjects-in-set-are-subsets` · `ex-the-adjoint-functor-theorem-for-ordered-sets` (Leinster Prop 6.3.7 — the toy case, and the cleanest illustration) · `ex-the-solution-set-for-groups-computed-on-a-two-element-set` · `cex-two-monomorphisms-representing-the-same-subobject` · `cex-a-category-that-is-not-well-powered` · `ex-torsion-free-reflection-computed` · `cex-a-complete-category-whose-coseparating-set-is-not-small`.

### Sources

- **Riehl 2nd ed. §4.6–§4.7** (printed pp. 165–180) read in full. **Primary and, for SAFT, the sole precise source** — Leinster's Thm 6.3.13 deliberately says only *"suppose that $\mathcal B$ satisfies certain further conditions"* and refers the reader to Mac Lane §V.8.
- **Leinster Ch 2 §2.3, §6.3 and the Appendix** (printed pp. 58–64, 157–173) — the Appendix is a complete, self-contained GAFT proof and is the independent check on Riehl's §4.7 argument. Lemma A.1 is where local smallness visibly earns its keep: *"Regard $S$ as a full subcategory of $\mathcal C$; then $S$ is small, since $\mathcal C$ is locally small."*
- **Mac Lane, *CWM* §V.6 (GAFT) and §V.8 (SAFT)** — the classical source, and where "solution set condition" and "well-powered" come from.

### Proof strategy — the repaired initial-object lemma (item 18)

Riehl Lemma 4.7.5 picks $h_c:s_i\to c$ simultaneously for every object $c$;
that selection is indexed by a proper class, so SE-D3 forbids using that proof.
Follow **Leinster Lemma A.1** instead, in four visible steps:

1. Regard the jointly weakly initial set $S$ as the full subcategory on those
   objects. It is small: its objects form a set and local smallness makes the
   disjoint union of its hom-sets a set.
2. Form the limit $L$ of the inclusion $S\hookrightarrow\mathcal C$. For each
   fixed target $C$, choose one witness $S_0\to C$ supplied by weak initiality;
   composing with the projection $L\to S_0$ proves that $L$ is weakly initial.
   This is one ordinary existential elimination for the target currently under
   discussion, not a simultaneous choice over all objects.
3. Given $f,g:L\rightrightarrows C$, form their equalizer $e:E\to L$. Choose
   one witness $q:S_0\to E$ and put $r=q\,p_{S_0}:L\to E$, where $p_{S_0}$ is
   the limiting projection.
4. For each $S\in S$, the composite $p_S e q:S_0\to S$ is a morphism in the
   full subcategory $S$. The cone equations give
   $p_S e r=(p_S e q)p_{S_0}=p_S$; limit uniqueness therefore gives
   $er=1_L$. Thus $e$ is split epic as well as monic, hence an isomorphism, and
   $f=g$. The weakly initial object $L$ is initial.

### Traps

1. **SAFT's hypotheses are minted here and used by `MA-9`.** Items 9–17 are A-page
   items for that reason; homing any of them on the B page would make them
   uncitable.
2. **Riehl says "every collection of subobjects admits an intersection" where Mac
   Lane says "well-powered".** They are not literally the same hypothesis. With
   completeness, the first follows from the second only after a representative
   family is supplied (or AC is named); item 14 does not hide that selection.
3. **The Urysohn cost is real.** `rem-urysohn-lemma-not-a-zf-theorem` is
   published; item 31 must not silently upgrade to ZF.
4. **Two routes to Stone–Čech.** Item 32 and `MA-1` item 38 must agree, and the
   page must say what each spends. A library that proves one theorem twice
   without saying so is the duplication problem in its subtlest form.

**Forward references: NONE.**

---

## MA-3. Monads, Comonads and their Algebras

**page id** `monads-comonads-and-their-algebras`
**`requires`** `adjunctions-units-and-counits`, `limits-and-colimits`

### A-page items, in dependency order

1. `def-monad` — def. $(T,\eta,\mu)$ on $\mathcal C$ with $\mu\circ T\mu=\mu\circ\mu T$ and $\mu\circ\eta T=\mu\circ T\eta=1_T$ (Mac Lane §VI.1; Riehl Def 5.1.1). **Defined directly**, §7 #13. LANDMARK.
2. `rem-a-monad-is-a-monoid-in-the-endofunctor-category-only-when-that-category-exists` — rem. The size caveat, citing `prop-size-of-functor-categories`. §3.1(1).
3. `def-comonad` — def. The formal dual (Riehl Def 5.1.6).
4. `thm-every-adjunction-induces-a-monad-on-the-domain-of-its-left-adjoint` — thm. $T=GF$, $\eta$ the unit, $\mu=G\varepsilon F$ (Riehl Lemma 5.1.3). LANDMARK.
5. `cor-every-adjunction-induces-a-comonad-on-the-other-side` — cor.
6. `def-t-algebra-and-algebra-homomorphism` — def. $(A,a:TA\to A)$ with $a\circ\eta_A=1_A$ and $a\circ Ta=a\circ\mu_A$ (Riehl Def 5.2.4, verbatim).
7. `thm-the-eilenberg-moore-category-is-a-category` — thm. §7 #14.
8. `def-eilenberg-moore-category` — def. $\mathcal C^T$, justified by item 7.
9. `def-free-t-algebra` — def. $(TA,\mu_A)$ (Riehl Def 5.2.8).
10. `thm-the-eilenberg-moore-adjunction-induces-the-given-monad` — thm. $F^T\dashv U^T$ with underlying monad $T$; the counit at $(A,a)$ **is** $a$ (Riehl Lemma 5.2.9). LANDMARK.
11. `thm-kleisli-composition-is-associative-and-unital` — thm. §7 #15 — **the page's real well-definedness obligation**, and the one most often skipped.
12. `def-kleisli-category` — def. Objects those of $\mathcal C$; $\mathcal C_T(A,B):=\mathcal C(A,TB)$; $g\bullet f:=\mu_C\circ Tg\circ f$; identities $\eta_A$ (Riehl Def 5.2.10, verbatim). Justified by item 11.
13. `thm-the-kleisli-adjunction-induces-the-given-monad` — thm. Riehl Lemma 5.2.12.
14. `rem-the-universal-properties-of-kleisli-and-eilenberg-moore-are-schematic` — rem. The collection of all varying categories and adjunctions inducing $T$ is not formed as a house category or an object of forbidden $\mathbf{CAT}$. Riehl's “category of adjunctions” is read as a metatheoretic 2-category schema; counit compatibility follows automatically from $KF=F'$ and $U'K=U$.
15. `thm-kleisli-and-eilenberg-moore-have-the-extremal-adjunction-universal-properties` — thm. For **every supplied** adjunction inducing $T$, there are unique comparison/factorisation functors $\mathcal C_T\to\mathcal D\to\mathcal C^T$ satisfying the displayed equalities (Riehl Prop. 5.2.13). This schematic initial/terminal property licenses “the category of algebras” without forming a category of all such adjunctions.
16. `thm-the-comparison-functor-exists-and-is-unique` — thm. §7 #16. LANDMARK.
17. `thm-the-comparison-functor-from-kleisli-is-fully-faithful-with-image-the-free-algebras` — thm. Riehl Lemma 5.2.14.
18. `thm-the-forgetful-functor-from-eilenberg-moore-strictly-creates-all-base-limits` — thm. If a diagram in $\mathcal C^T$ has a limit after applying $U^T$, that limit carries a unique $T$-algebra structure making it the limit in $\mathcal C^T$; thus $U^T$ strictly creates **every limit that exists in $\mathcal C$** (Riehl Thm 5.6.5(i)). No preservation hypothesis on $T$ belongs in the limit clause. **Names the strict notion** (§3.3).
19. `thm-colimits-in-an-eilenberg-moore-category-are-not-created-in-general` — thm, with the positive statement Riehl Thm 5.6.5(ii): those colimits $\mathcal C$ has that $T$ and $T^2$ preserve are created.
20. `thm-a-monadic-functor-is-conservative` — thm. Riehl Lemma 5.6.1. LANDMARK — and the $\mathbf{CompHaus}$ corollary is placed on `MA-4`, after Manes' theorem, rather than forward-referenced here.
21. `def-idempotent-monad` — def. $\mu$ an isomorphism; three equivalent characterisations (Riehl Ex 5.1.iii).
22. `thm-algebras-for-an-idempotent-monad-form-a-reflective-subcategory` — thm. An object carries a $T$-algebra structure iff $\eta_C$ is an isomorphism, and then the structure map is $\eta_C^{-1}$ and is unique (Riehl Prop 5.3.3(i)). LANDMARK — the theorem that makes `MA-2` and this page pay for each other.
23. `thm-the-inclusion-of-a-reflective-subcategory-is-monadic` — thm. Riehl Prop 5.3.3(ii).
24. `def-monad-morphism` — def. For monads $T,S$ on the same category, a natural transformation $\alpha:T\Rightarrow S$ with $\alpha\eta^T=\eta^S$ and $\alpha\mu^T=\mu^S\circ S\alpha\circ\alpha_T$. This strict-same-base convention is typed explicitly; more general lax morphisms in a 2-category are not smuggled into the name.
25. `def-distributive-law-between-two-monads` — def. For monads $S,T$ on one category, $\lambda:ST\Rightarrow TS$ satisfying the four equations $\lambda\,\eta^S T=T\eta^S$, $\lambda\,S\eta^T=\eta^T S$, $\lambda\,\mu^S T=T\mu^S\,\lambda S\,S\lambda$, and $\lambda\,S\mu^T=\mu^T S\,T\lambda\,\lambda T$ (Cheng Def. 2.1). *(Id namespaced: `thm-distributive-laws-for-union-and-intersection` is published and is about sets.)* §7 #17.
26. `thm-a-distributive-law-makes-the-composite-a-monad` — thm. $TS$ has unit $1\xrightarrow{\eta^S}S\xrightarrow{\eta^T S}TS$ and multiplication $TSTS\xrightarrow{T\lambda S}TTSS\xrightarrow{\mu^T SS}TSS\xrightarrow{T\mu^S}TS$ (Cheng Thm. 2.2); the four equations of item 25 are exactly what prove the monad laws.
27. `thm-monads-on-a-preorder-are-exactly-closure-operators` — thm. Riehl Ex 5.1.7. Cheap, and it is the example that makes the axioms legible.
28. `thm-the-free-monoid-monad-and-its-algebras-are-monoids` — thm.
29. `thm-the-free-group-monad-and-its-algebras-are-groups` — thm.
30. `thm-the-free-module-monad-and-its-algebras-are-modules` — thm.
31. `thm-the-covariant-power-set-monad` — thm. $\eta$ = singleton, $\mu$ = union; its Eilenberg–Moore algebras are posets with all small suprema **and algebra morphisms are precisely the maps preserving arbitrary suprema**. Cites the published `prop-completeness-and-cocompleteness-in-poset-categories`; no unminted complete-lattice definition is assumed.
32. `def-the-ultrafilter-monad-on-set` — def. $\beta X$ is the set of ultrafilters on $X$; for $f:X\to Y$, $\beta f(\mathcal U)=\{B\subseteq Y:f^{-1}B\in\mathcal U\}$, proved an ultrafilter and functorial before the structure maps are used. Then $\eta_X$ is the principal ultrafilter and $\mu_X(\mathbb U)=\{A\subseteq X:\{U\in\beta X:A\in U\}\in\mathbb U\}$. Naturality of both maps is part of the item. LANDMARK.
33. `thm-the-ultrafilter-monad-is-a-monad` — thm. The three axioms verified directly, using `lem-ultrafilter-prime` and the published ultrafilter items. **This is genuine work and it is entirely elementary**; no compactness is used here.
34. `def-coalgebra-for-a-comonad-and-the-coeilenberg-moore-category` — def. For a comonad $G$ (not $T$, already used for monads), with the dual of item 15 as a corollary rather than a second proof.

### `fs-` items

- `fs-the-kleisli-and-eilenberg-moore-categories-are-equivalent-for-every-monad` — refuted by the free-monoid monad, whose Eilenberg–Moore category contains nonfree monoids. For an idempotent/reflection monad the comparison can be an equivalence nontrivially; items 21–23 record that positive case.
- `fs-every-functor-with-a-left-adjoint-is-monadic` — witness $U:\mathbf{Top}\to\mathbf{Set}$, which has **both** adjoints (`MA-1` item 37) and is not conservative, hence not monadic by item 20. This is the cleanest possible use of the page's own theorem.
- `fs-a-monad-is-a-monoid-object-in-the-endofunctor-category-for-every-category` — the size claim, §3.1(1).
- `fs-every-algebra-for-a-monad-is-free`.

### B page — `monads-comonads-and-their-algebras-examples`

`ex-a-kleisli-composite-computed` · `ex-the-maybe-monad-and-partial-functions` (Riehl Ex 5.2.11) · `ex-the-list-monad-on-a-two-element-set` · `ex-the-closure-operator-monad-on-a-topological-space` · `ex-the-free-abelian-group-monad` · `cex-an-algebra-that-is-not-free` · `cex-a-coequalizer-not-preserved-by-a-forgetful-functor` · `ex-the-double-contravariant-power-set-monad` (not a comonad on $\mathbf{Set}$; the unit is double-dualization and no natural counit $\mathcal P\mathcal P X\to X$ is asserted).

### Sources

- **Riehl 2nd ed. Ch 5** (printed pp. 181–218), read in full. Primary.
- **Mac Lane, *CWM* Ch VI** — §VI.1 monads, §VI.2 algebras, §VI.3 the comparison, §VI.5 free algebras, §VI.6 split coequalizers, §VI.7 Beck, §VI.9 compact Hausdorff spaces. Second independent treatment. **Leinster contains no developed monad treatment**, so he cannot serve as the second treatment here — see §12, seam S-1.
- **Borceux vol. 2, Ch. 4** (§§4.1–4.7) — a TOC-level
  structure locator only, not a read treatment and not component provenance.
- **Cheng, *Iterated distributive laws*, §2**, `https://compositionality.episciences.org/13507/pdf` — Def. 2.1 and Thm 2.2 are the direct independent source for items 26–27; Riehl Ch. 5 and Mac Lane Ch. VI do not contain those results.

### Traps

1. **Item 11 before item 12.** Defining the Kleisli category and *then* checking associativity inverts the obligation.
2. **The published `def-preservation-reflection-creation-continuity-and-cocontinuity` has two notions.** Item 18 means the strict one.
3. **The ultrafilter monad is built here; Manes' theorem is `MA-4`'s.** Splitting them keeps the elementary part unconditional.

**Forward references: NONE.**

---

## MA-4. Monadicity and Beck's Theorem

**page id** `monadicity-and-becks-theorem`
**`requires`** `monads-comonads-and-their-algebras`, `nets-and-filters`,
`separation-axioms`, `compactness-in-metric-spaces`
*(the last three only for items 19–24; the authoring Beta verifies the exact
homes of the compact-Hausdorff facts it uses and lists those pages)*

### A-page items, in dependency order

1. `def-monadic-and-strictly-monadic-functor` — def. $U$ is **monadic** when the comparison functor is an **equivalence**, **strictly monadic** when it is an **isomorphism** (Riehl Def 5.3.1). §3.3. LANDMARK — the two notions are kept apart from the first line of the page.
2. `def-conservative-functor` — def. Reflects isomorphisms. *(Id free: the published `conservative` items are all about vector fields.)*
3. `def-split-coequalizer` — def. $x\rightrightarrows^{f,g} y\to^h z$ with $t:y\to x$, $s:z\to y$ and $hf=hg$, $hs=1_z$, $gt=1_y$, $ft=sh$ (Riehl Def 5.4.4, verbatim). §7 #18.
4. `thm-a-split-coequalizer-is-a-coequalizer-and-is-absolute` — thm. Preserved by **every** functor (Riehl Lemma 5.4.6). LANDMARK — the engine of Beck's theorem.
5. `def-absolute-colimit` — def.
6. `def-reflexive-pair` — def. A parallel pair admitting a common section (Riehl, footnote to Prop 5.5.8).
7. `def-u-split-coequalizer-and-creation-of-their-coequalizers` — def. Riehl Def 5.4.8, **all three clauses verbatim**, including the separate "strictly creates" clause.
8. `thm-every-algebra-is-the-coequalizer-of-a-canonical-pair-of-free-algebras` — thm. $(T^2A,\mu_{TA})\rightrightarrows(TA,\mu_A)\to(A,a)$ is a coequalizer in $\mathcal C^T$ (Riehl Prop 5.4.2). LANDMARK.
9. `thm-the-canonical-presentation-is-split-in-the-base-but-not-in-the-algebras` — thm. Split by $\eta_{TA}$ and $\eta_A$ **in $\mathcal C$**, and the splittings do not lift (Riehl Ex 5.4.7). **This is precisely why the hypothesis is "$U$-split" and not "split"**, and it is a numbered item for that reason.
10. `thm-the-forgetful-functor-from-eilenberg-moore-strictly-creates-coequalizers-of-u-t-split-pairs` — thm. $U^T$ strictly creates coequalizers of **$U^T$-split** pairs (Riehl Prop. 5.4.9); “split pairs” without the forgetful-functor qualifier is a stronger and different claim.
11. `thm-becks-monadicity-theorem` — thm. A right adjoint $U$ is **monadic** iff it **creates** coequalizers of $U$-split pairs (Riehl Thm 5.5.1). LANDMARK.
12. `thm-becks-strict-monadicity-theorem` — thm. $U$ is **strictly monadic** iff it **strictly creates** them (Riehl Ex 5.5.i; Mac Lane Thm VI.7.1, whose (i) is "$K$ is an isomorphism"). LANDMARK. **Two theorems, two Statements** — §3.3.
13. `thm-crude-monadicity-the-reflexive-tripleability-theorem` — thm. $U$ has a left adjoint, $\mathcal D$ has coequalizers of reflexive pairs, $U$ preserves them, and $U$ reflects isomorphisms $\Rightarrow$ $U$ is monadic (Riehl Prop 5.5.8). LANDMARK — the form actually used in practice.
14. `thm-groups-are-monadic-over-sets` — thm.
15. `thm-modules-are-monadic-over-sets` — thm.
16. `thm-monoids-and-rings-are-monadic-over-sets` — thm. Riehl Cor 5.5.3.
17. `def-finitary-functor-and-finitary-monad` — def. Preserves filtered colimits; cites the published `def-filtered-category-and-filtered-colimit`.
18. `thm-a-finitary-monad-on-a-complete-cocomplete-locally-small-category-has-complete-and-cocomplete-algebras` — thm. Riehl Thm. 5.6.12. Completeness is ZF by `MA-3` item 18. For each fixed input diagram, ordinary DC selects Riehl's recursively defined $\omega$-sequence of successive coequalizers and colimits (using rank-minimal witnesses to set-bound each step). A functorial family of such sequences over a proper class is instead supplied data; no class-dependent-choice principle is adopted.

**The $\mathbf{CompHaus}$ block — scaffolded with its decomposition, not asserted**

19. `lem-a-given-ultrafilter-on-a-compact-hausdorff-space-has-a-unique-limit` — lem. Prove convergence directly from the finite-intersection property of the closed members of the **given** ultrafilter and open-cover compactness; uniqueness is Hausdorffness. This direction is ZF. It does not cite the stronger published equivalence in a way that imports BPI unnecessarily.
20. `lem-the-limit-map-of-a-compact-hausdorff-space-is-an-ultrafilter-algebra` — lem. $\xi:\beta X\to X$ sending an ultrafilter to its limit satisfies the two algebra axioms.
21. `lem-a-continuous-map-of-compact-hausdorff-spaces-is-an-ultrafilter-algebra-homomorphism` — lem. From the published `lem-continuous-images-of-universal-nets-are-universal` and the net–filter dictionary.
22. `lem-an-ultrafilter-algebra-determines-a-compact-hausdorff-topology` — lem. **The hard direction.** Closed sets are those $A$ with $\xi(\mathcal U)\in A$ for every ultrafilter $\mathcal U$ containing $A$; the algebra axioms give the Kuratowski closure laws and Hausdorffness. Every ultrafilter converges to its $\xi$-value in ZF. Converting this to the library's open-cover compactness uses BPI, because the reverse implication extends a proper filter; the Statement names that cost and no stronger choice principle.
22a. `thm-the-compact-hausdorff-and-ultrafilter-algebra-constructions-are-inverse` — thm. Three mandatory clauses: for the topology built from an algebra $\xi$, the ultrafilter-limit map is exactly $\xi$; rebuilding the closed sets from a compact Hausdorff space's limit algebra recovers its original topology; and a map of $\beta$-algebras is continuous (the converse of item 21). These establish both object and morphism directions of the comparison and the natural inverse data.
23. `thm-compact-hausdorff-spaces-are-monadic-over-sets` — thm. **Manes' theorem.** The comparison functor is an equivalence by items 19–22a, not merely a bijection on the displayed objects. LANDMARK.
24. `cor-a-continuous-bijection-of-compact-hausdorff-spaces-is-a-homeomorphism-by-conservativity` — cor. Riehl Cor. 5.6.2: item 23 and `MA-3` item 20 make the forgetful functor conservative, so a continuous bijection is an isomorphism. **CONTINGENT with item 23**; if Manes' theorem falls back to `proved_here: false`, this corollary drops and the published topology proof stands alone.

**The verification instruction that goes with items 19–23, and it is binding.** These
items are scaffolded because every prerequisite looks present on disk and
because dropping a valuable theorem for want of a lemma is not a permitted
disposition (owner, 2026-08-11). But item 22 is the one that can fail: it needs
the closure operator built from $\xi$ to satisfy the Kuratowski axioms and to be
shown compact Hausdorff, from published topology items only. **The authoring Beta
proves items 22–22a from disk before committing to item 23.** If either does not close, the
disposition is: keep items 19–21 (they are unconditional), state item 23 as a
`rem-` with `proved_here: false` citing Manes and Riehl Cor 5.5.6, record the
failed route in the batch notes and the `external_dependency` block, and **also**
drop item 24, which depends on it. That is a documented fallback, not a
silent drop.

### `fs-` items

- `fs-becks-theorem-characterises-strict-monadicity` — the §3.3 conflation, stated as the false claim it is, refuted by exhibiting the two conclusions.
- `fs-every-conservative-right-adjoint-is-monadic`.
- `fs-a-u-split-pair-is-a-split-pair-in-the-domain` — refuted by item 9.
- `fs-the-forgetful-functor-from-topological-spaces-is-monadic` — refuted via item 1 + `MA-3` item 20.

### B page — `monadicity-and-becks-theorem-examples`

`ex-a-split-coequalizer-in-set` · `ex-the-canonical-presentation-of-a-monoid` · `ex-the-comparison-functor-for-the-free-group-adjunction` · `cex-a-conservative-functor-that-is-not-monadic` · `cex-a-reflexive-pair-whose-coequalizer-is-not-preserved` · `ex-the-ultrafilter-algebra-structure-on-a-finite-discrete-space` · `ex-beta-of-the-naturals-as-an-ultrafilter-algebra` (cites nothing on a leaf page).

### Sources

- **Riehl 2nd ed. §§5.3–5.6** (printed pp. 195–218). Primary.
- **Mac Lane, *CWM* §VI.6–§VI.9** (printed pp. 149–160). **Second independent treatment, and it differs**: Mac Lane's Thm VI.7.1 has (i) "$K$ is an **isomorphism**", (ii) creation for pairs with an **absolute** coequalizer in $X$, (iii) with a **split** coequalizer — i.e. Mac Lane states the **strict** form, Riehl the equivalence form. §10 records this; it is the same convention split as §3.3 and it must not be papered over. §VI.9 is Mac Lane's own compact-Hausdorff treatment.
- **Borceux vol. 2 §4.4** "Characterization of monadic categories" — a
  TOC-level structure locator only, not a read treatment.

**Forward references: NONE.**

---

## MA-5. Ends, Coends and Weighted Limits

**page id** `ends-coends-and-weighted-limits`
**`requires`** `limits-and-colimits`,
`universal-properties-and-the-yoneda-lemma`

**Source note that shapes the page.** *Neither Riehl's* Category Theory in Context
*nor Leinster's* Basic Category Theory *contains ends, coends, the Fubini theorem,
the coend form of Yoneda, or weighted limits* — Riehl says so explicitly in her
acknowledgments (*"an entirely satisfactory account of Kan extensions can be given
without the calculus of ends and coends"*). This page is therefore backed by
**Mac Lane Ch IX**, **Loregian's *(Co)end Calculus*** and **Kelly Ch 2–3**, with
**Riehl's *Categorical Homotopy Theory* Ch 7** as the fourth. Loregian, Kelly
and Riehl are legitimately open full texts; Mac Lane was read from a non-open
copy and is not described as open.

### A-page items, in dependency order

1. `def-dinatural-transformation` — def. For $S,T:\mathcal C^{\mathrm{op}}\times\mathcal C\to\mathcal D$, a family $\alpha_c:S(c,c)\to T(c,c)$ making the **hexagon** commute for every $f:c\to c'$ (Mac Lane §IX.4; Loregian Def 1.1.1).
2. `thm-dinatural-transformations-do-not-compose-in-general` — thm. §7 #20. **An item, because every reader assumes the opposite.** The positive statement — a dinatural composed with a natural on either side is dinatural — sits beside it.
3. `def-wedge-and-cowedge` — def. A dinatural transformation from a constant, resp. to a constant (Loregian Def 1.1.4).
4. `def-end-and-coend` — def. An end is a **terminal wedge**, a coend an **initial cowedge** (Mac Lane §IX.5 verbatim; Loregian Def 1.1.6). Notation $\int_c S(c,c)$, $\int^c S(c,c)$. LANDMARK.
5. `thm-ends-and-coends-are-unique-up-to-unique-isomorphism` — thm. From `thm-limits-and-colimits-are-unique-up-to-unique-compatible-isomorphism` via item 6, or directly.
6. `def-twisted-arrow-category` — def. Fix the convention explicitly: objects are arrows $f:c\to c'$, and a morphism $f\to g$ is a pair $a:d\to c$, $b:c'\to d'$ with $bfa=g$; hence the projection $\pi:\operatorname{Tw}(\mathcal C)\to\mathcal C^{\mathrm{op}}\times\mathcal C$ is covariant. *(Id free.)*
7. `thm-an-end-is-a-limit-over-the-twisted-arrow-category` — thm. **Whenever the indicated limit exists**, item 6's convention gives $\int_cT(c,c)\cong\lim_{\operatorname{Tw}(\mathcal C)}T\pi$; dually the coend is the corresponding colimit over $\operatorname{Tw}(\mathcal C)^{\mathrm{op}}$. Smallness is imposed only when item 9 derives blanket existence. LANDMARK, §7 #21.
8. `thm-an-end-is-an-equalizer-between-two-products` — thm. If $\mathcal C$ is small, or if the displayed object- and arrow-indexed products are separately known to exist, $\int_c S(c,c)=\operatorname{eq}\big(\prod_c S(c,c)\rightrightarrows\prod_{f:c\to c'}S(c,c')\big)$; dually for coends and coproducts (Kelly (2.2)). No proper-class product is silently formed. LANDMARK.
9. `cor-ends-exist-when-the-index-category-is-small-and-the-target-is-complete` — cor. Via items 7–8 and the published `thm-small-limits-from-products-and-equalizers`.
10. `thm-the-set-of-natural-transformations-is-an-end` — thm. For **small** $\mathcal C$ and locally small $\mathcal D$, $\operatorname{Nat}(F,G)\cong\int_c\mathcal D(Fc,Gc)$ (Mac Lane §IX.5 (2)). LANDMARK — and it recasts the published `def-functor-category` and makes its size hypothesis visible again.
11. `thm-fubini-for-ends` — thm. Assume both parameterwise families of inner ends exist. Then if **any one** of the two iterated outer ends or the product-index end exists, all three exist and are canonically isomorphic (Richter Prop. 4.6.3, pp. 79–80; Mac Lane §IX.8; Loregian Thm 1.3.1). LANDMARK.
12. `cor-ends-commute-with-ends` — cor.
13. `def-parametrised-end` — def. Mac Lane §IX.7; ends with parameters assemble into a functor, **in the data-supplied form** (§6).
14. `thm-the-ninja-yoneda-lemma-in-coend-form` — thm. For small locally small $\mathcal C$ and the correspondingly typed covariant or contravariant $\mathbf{Set}$-valued functor $F$, all four co-Yoneda isomorphisms, including $\int^c\mathcal C(c,a)\times F(c)\cong F(a)$, hold. More generally each formula is conditional on the displayed coend existing (Loregian Prop. 2.2.1). LANDMARK.
15. `def-set-weighted-limit-and-weighted-colimit` — def. For small $\mathcal J$, $W:\mathcal J\to\mathbf{Set}$ and $D:\mathcal J\to\mathcal C$, the weighted limit $\{W,D\}$ represents $c\mapsto[\mathcal J,\mathbf{Set}](W,\mathcal C(c,D-))$; dually, a weight $W:\mathcal J^{\mathrm{op}}\to\mathbf{Set}$ defines $W\star D$ by $\mathcal C(W\star D,c)\cong[\mathcal J^{\mathrm{op}},\mathbf{Set}](W,\mathcal C(D-,c))$. Riehl *CHT* Def. 7.1.1. The genuinely enriched definition is `MA-17` item 26. §7 #23. LANDMARK.
16. `thm-a-weighted-limit-is-unique-up-to-unique-isomorphism` — thm. By representability, citing the published `thm-representing-objects-are-unique-up-to-unique-compatible-isomorphism`.
17. `def-power-and-copower-by-a-set` — def. $c^S$ and $S\cdot c$ as the $\mathbf{Set}$-weighted limits and colimits over the unit category. These are the ordinary special cases later generalised to enriched cotensors and tensors in `MA-17` item 24.
18. `thm-a-weighted-limit-is-an-end` — thm. After item 17 has supplied the required powers and copowers, and assuming the indicated end or coend exists, $\lim^W F\cong\int_c Fc^{Wc}$ and $W\star F\cong\int^c Wc\cdot Fc$ (Riehl *CHT* (7.1.3)).
19. `thm-the-constant-singleton-weight-recovers-an-ordinary-limit` — thm. A $\mathbf{Set}$-weighted limit with weight $\Delta1$ is exactly the already-published ordinary conical limit. This is a comparison theorem, not a new definition of conical limit.
20. `rem-why-the-enriched-generalisation-cannot-stop-at-conical-limits` — rem. Kelly §3.9 is titled "The inadequacy of conical limits". The remark only announces the later issue; the definitions and counterexamples are `MA-17` items 26–30, so this page does not use enrichment before it is defined.
21. `thm-a-set-weighted-limit-is-a-limit-over-a-category-of-elements` — thm. The category-of-elements formula reduces $\{W,D\}$, and dually $W\star D$, to ordinary small limits or colimits. Cites the published `def-category-of-elements` and Riehl *CHT* §7.1.
22. `thm-representable-functors-carry-weighted-limits-to-weighted-limits` — thm.
23. `thm-weighted-limits-over-a-representable-weight-are-evaluation` — thm. Riehl *CHT* Ex 7.1.4.
24. `def-functor-tensor-product` — def. For $F:\mathcal C^{\mathrm{op}}\to\mathbf{Set}$ and $G:\mathcal C\to\mathbf{Set}$, $F\otimes_{\mathcal C}G:=\int^c F(c)\times G(c)$, whenever the coend exists (Mac Lane §IX.6). The variance is part of the definition.

**Ordering decision.** Items 15–21 are strictly **$\mathbf{Set}$-weighted** and
use only the published ordinary functor-category and limit language. `MA-17`
later supplies enriched weights, tensors, cotensors, the failure of constant
enriched functors and the $​\mathbf{Cat}$ witness. Thus neither page points
forward and no definition is used before it is minted.

### `fs-` items

- `fs-dinatural-transformations-compose` — item 2 as the false statement it is.
- `fs-every-end-exists` — refuted by a size argument.
- `fs-a-coend-is-a-colimit-over-the-twisted-arrow-category-under-this-pages-convention` — the variance error **under item 6's explicitly fixed convention**: it is a colimit over the opposite. Loregian reverses the name, so the false statement never appears without the convention qualifier.
- `fs-yonedas-original-notation-agrees-with-the-modern-one` — Loregian records (Remark 1.1.14) that **Yoneda's 1960 paper writes $\int_C$ for what is now the coend**. A genuine historical trap, and a fair `fs-`.

### B page — `ends-coends-and-weighted-limits-examples`

`ex-the-end-formula-checked-against-natural-transformations-on-a-small-diagram` · `ex-a-coend-computing-a-tensor-product-of-functors` · `ex-the-coend-of-a-hom-functor` · `ex-a-weighted-limit-computing-a-kernel-pair` (Riehl *CHT* Ex 7.1.2) · `ex-copowers-and-powers-in-set` · `cex-a-dinatural-family-whose-composite-is-not-dinatural` · `ex-fubini-verified-on-a-two-object-index`.

### Sources

- **Mac Lane, *CWM* Ch IX** §§IX.4–IX.8 (printed pp. 218–232) — ends, coends, ends with parameters, Fubini. **Primary.** Read verbatim.
- **Loregian, *(Co)end Calculus*** (arXiv:1501.02503v7, `https://arxiv.org/pdf/1501.02503`), **§§1.1.1, 1.2–1.3, 2.1–2.3 and 4.1** — Defs 1.1.1, 1.1.4, 1.1.6, Thm 1.3.1, Prop. 2.2.1 and the weighted formulas. Second independent treatment; no claim is made to have read the remainder of Chs 1–2 or 4.
- **Kelly, *Basic Concepts of Enriched Category Theory*** (TAC Reprint 10, `http://www.tac.mta.ca/tac/reprints/articles/10/tr10.pdf`), **§2.1** (ends, equalizer formula (2.2), Fubini (2.8)) and **Ch 3** (indexed limits (3.1)–(3.6), tensors/cotensors (3.42)/(3.44), §3.10 (3.59)–(3.70)).
- **Riehl, *Categorical Homotopy Theory*** (`https://emilyriehl.github.io/files/cathtpy.pdf`), **§§7.1–7.8** — the cleanest modern statement of weighted limits, and the source for Def 7.1.1/7.4.1 and the conical-limit discussion. **Note: Part IV of that book is quasi-categories, not enriched theory** — the enriched material is Ch 3 and Part II.

### Traps

1. **Every blanket existence/computation theorem and every functor-category claim on this page carries the relevant smallness hypothesis.** The definitions themselves apply whenever the particular wedge, cowedge or representing object exists; an individual large-index end may exist. Smallness is sufficient for the general theorems, not part of the word “end”.
2. **Variance.** The end runs over the twisted arrow category, the coend over its opposite; getting this backwards is the page's easiest fatal error and `fs-` item 3 is the guard.
3. **Kelly's numbering is by equation, not by theorem.** Cite `Kelly (3.1)`, not `Kelly Thm 3.1` — there is no such theorem.
4. If the page threatens the 60-item ceiling, **split off the weighted-limit half (items 15–24)**, not the ends half; the Kan-extension page needs ends first.

**Forward references: NONE.**

---

## MA-6. Kan Extensions, Density and the Free Cocompletion

**page id** `kan-extensions-density-and-the-free-cocompletion`
**`requires`** `ends-coends-and-weighted-limits`, `adjunctions-units-and-counits`,
`universal-properties-and-the-yoneda-lemma`, `monads-comonads-and-their-algebras`

### A-page items, in dependency order

1. `def-left-and-right-kan-extension` — def. The 2-categorical universal property: $(\operatorname{Lan}_KF,\eta:F\Rightarrow\operatorname{Lan}_KF\cdot K)$ initial among such pairs, and dually (Riehl Def 6.1.1, verbatim). §7 #24. LANDMARK.
2. `rem-the-left-right-naming-clash` — rem. **Mac Lane's own warning**, quoted: *"(But note that some authors call this $R$ a 'left' Kan extension.)"* (§X.3). The library follows the modern convention and says so. §10.
3. `thm-kan-extensions-are-unique-up-to-unique-isomorphism` — thm. Riehl Ex 6.1.ii.
4. `def-global-kan-extension` — def. For **small** source categories, so that the relevant functor categories are legitimate under `prop-size-of-functor-categories`, $\operatorname{Lan}_K$ is a left adjoint to $K^*$. It is distinguished from a local extension at one $F$, and a family of local extensions is supplied data rather than a class-indexed selection. §7 #24.
5. `thm-lan-is-left-adjoint-to-restriction-which-is-left-adjoint-to-ran` — thm. For small $\mathcal C,\mathcal D$ and locally small $\mathcal E$, **given families** of local left and right Kan extensions, $\operatorname{Lan}_K\dashv K^*\dashv\operatorname{Ran}_K$ (Riehl Prop 6.1.6). LANDMARK. The theorem does not choose those families.
6. `thm-the-comma-category-colimit-formula-computes-a-left-kan-extension` — thm. For each fixed $d$, a colimit cone on $(K\downarrow d)\to\mathcal C\to\mathcal E$ has the objectwise left-Kan universal property. **Given a family of chosen such cones for all $d$**, their forced arrow maps assemble into $\operatorname{Lan}_KF$, and the unit is extracted from the legs at identities (Riehl Thm. 6.2.1). Dually for $\operatorname{Ran}$. Objectwise existence and data-supplied assembly are distinct clauses under SE-D3. LANDMARK.
7. `def-pointwise-kan-extension-by-the-colimit-formula` — def. Riehl Def 6.2.6, **including the clause about $\eta_c$ being the leg at $\mathrm{id}_{Kc}$** — the clause most restatements drop. §7 #25.
8. `thm-existence-of-pointwise-kan-extensions` — thm. If $\mathcal C$ is small, $\mathcal D$ locally small and $\mathcal E$ cocomplete, every comma category $(K\downarrow d)$ is small and a pointwise left Kan extension exists **objectwise**; dually for a complete $\mathcal E$ (Riehl Cor 6.2.7). A global functor is concluded only from a supplied family of chosen colimits, as in item 5 and SE-D3. LANDMARK.
9. `def-pointwise-kan-extension-by-preservation-by-representables` — def. A **right** Kan extension is pointwise when every covariant representable $\mathcal E(e,-)$ preserves it. A **left** Kan extension is pointwise when, after passage to opposites, each $\mathcal E(-,e)$ sends it to the corresponding right Kan extension (Riehl Defs. 6.3.5–6.3.6). The variance is displayed; “preserved by representables” alone is ambiguous.
10. `thm-the-two-notions-of-pointwise-agree` — thm. **With the size hypotheses**: $\mathcal D$ and $\mathcal E$ locally small (Riehl Thm 6.3.7). LANDMARK. **See the trap — this statement was defective in Riehl's first edition.**
11. `def-absolute-kan-extension` — def. Preserved by every functor; strictly stronger than pointwise.
12. `thm-left-adjoints-preserve-left-kan-extensions` — thm. Riehl Lemma 6.3.2.
13. `thm-a-kan-extension-along-a-fully-faithful-functor-genuinely-extends-when-it-is-pointwise` — thm. The unit/counit is then an isomorphism (Riehl Cor 6.2.14). LANDMARK.
14. `thm-kan-extensions-as-coends` — thm. For small $\mathcal C$, locally small $\mathcal D$, and a target with the required powers, copowers, ends and coends, $\operatorname{Lan}_KF(d)\cong\int^c \mathcal D(Kc,d)\cdot Fc$ and $\operatorname{Ran}_KF(d)\cong\int_c Fc^{\mathcal D(d,Kc)}$ (Mac Lane §X.4; Loregian §2.3). LANDMARK — the reason `MA-5` precedes this page.
15. `thm-limits-and-colimits-are-kan-extensions-along-the-functor-to-the-terminal-category` — thm. Mac Lane Thm X.7.1; Riehl Prop 6.5.1.
16. `thm-an-adjunction-is-an-absolute-kan-extension` — thm. For $F:\mathcal C\to\mathcal D$ and $G:\mathcal D\to\mathcal C$, $F\dashv G$ implies $G\cong\operatorname{Lan}_F1_{\mathcal C}$ and $F\cong\operatorname{Ran}_G1_{\mathcal D}$, and both Kan extensions are absolute. Conversely, existence of the indicated extension yields the adjoint only when it is preserved by $F$ or $G$, respectively (Riehl Prop. 6.5.2). LANDMARK. Richter Prop. 4.7.3(2)'s printed statement omits preservation although its proof uses it; §10.3 records the defect.
17. `thm-evaluation-is-the-limit-over-the-coslice-category` — thm. For any category in the house schema, $F(c)\cong\lim(c/\mathcal C\to\mathcal C\to\mathcal D)$ because $1_c$ is initial in the coslice and directly supplies the limiting cone; no large product is formed. Riehl Prop. 6.5.4's **equalizer computation** is a separate clause requiring small $\mathcal C$ and the indicated products/equalizers in $\mathcal D$. The proof cites published Yoneda and does not re-mint it.
18. `thm-evaluation-is-the-colimit-over-the-slice-category` — thm. The dual direct formula needs no blanket smallness; its coproduct/coequalizer computation assumes small $\mathcal C$ and the displayed colimits (Riehl Prop. 6.5.6). This is an evaluation formula, not a second co-Yoneda definition.
19. `thm-density-for-a-small-category` — thm. For small $\mathcal C$, every $F:\mathcal C\to\mathbf{Set}$ is the colimit of $(\int F)^{\mathrm{op}}\to\mathcal C^{\mathrm{op}}\to\mathbf{Set}^{\mathcal C}$, indexed by the published `def-category-of-elements` (Riehl Thm 6.5.7; Leinster Thm 6.2.17). Riehl's locally-small large form is not admitted under the library's functor-category and small-colimit policy. LANDMARK. §7 #26.
20. `thm-density-as-a-self-kan-extension-for-a-small-category` — thm. $\operatorname{Lan}_{\text{よ}}\text{よ}\cong\mathrm{id}$, for $\mathcal C$ **small** (Riehl Thm 6.5.8). LANDMARK. **The two density statements sit at different size levels and the page says so** — Riehl's own footnote explains why.
21. `def-dense-subcategory` — def.
22. `thm-the-presheaf-category-on-a-small-category-is-the-free-cocompletion` — thm. For $F:\mathcal C\to\mathcal E$ with $\mathcal C$ small and $\mathcal E$ locally small and cocomplete, the required colimit exists for each fixed presheaf. **Given chosen pointwise colimit/coend objects and universal cones for every presheaf**, they assemble to $\operatorname{Lan}_{\text{よ}}F\dashv\mathcal E(F-,-)$, and every adjunction whose left adjoint has a presheaf-category domain arises this way (Riehl Prop. 6.5.9). LANDMARK. The source smallness and the SE-D3 assembly data are both in the Statement.
23. `def-codensity-monad` — def. $T:=\operatorname{Ran}_G G$ together with the canonical unit and multiplication induced by the Kan universal property (Riehl Def 6.5.10).
23a. `thm-the-codensity-construction-satisfies-the-monad-laws` — thm. The unit and multiplication of item 23 are well defined and satisfy associativity and both unit laws, by uniqueness in the right Kan extension (Riehl Ex. 6.5.viii). This proof is mandatory: the object formula $\operatorname{Ran}_GG$ alone is not a monad.
24. `thm-the-codensity-monad-of-a-small-skeleton-of-finite-sets-is-the-ultrafilter-monad` — thm. Use a **small skeleton** $\mathbf{FinSet}_{\mathrm{sk}}\hookrightarrow\mathbf{Set}$, not the large full category of all finite sets. Riehl Ex 6.5.12 names the result but sends the proof to Leinster's codensity-monad treatment; that source, not the exercise alone, backs the proof. **CONTINGENT**: the authoring Beta verifies the identification with `MA-3` item 32 and the published ultrafilter material; otherwise it becomes a `rem-` with `proved_here: false` and the failed route recorded.
25. `rem-the-fully-faithful-pointwise-extension-item-merges-at-authoring` — rem. The proposed Statement “a pointwise Kan extension along a fully faithful inclusion has invertible unit” is exactly item 13/Riehl Cor. 6.2.14, so no duplicate theorem id is authored. This record preserves the source-heading disposition and directs B-page examples to item 13.

### `fs-` items

- `fs-every-kan-extension-is-pointwise` — **the page's sharpest**, and the witness is real: Riehl **Ex 6.2.15**, constructed for the 2nd edition precisely because the hypothesis is necessary and no easy counterexample was on record. $K:1+1\hookrightarrow(\ell\leftarrow m\rightarrow r)$ fully faithful into a five-object $\mathcal E$ with no initial object, where the universal property holds vacuously and the unit is not invertible.
- `fs-lan-along-a-fully-faithful-functor-always-restricts-back-to-the-original-functor` — the positive statement is item 13, **with** the pointwise hypothesis.
- `fs-the-free-cocompletion-theorem-holds-for-a-large-source-category` — §8 denial 3.
- `fs-the-yoneda-embedding-preserves-colimits` — Leinster Warning 6.2.14, with the one-line witness that $\text{よ}(0)$ evaluated at $0$ is a singleton, not $\varnothing$. The published `cor-yoneda-preserves-and-reflects-small-limits` is the true half and is cited beside it.

### B page — `kan-extensions-density-and-the-free-cocompletion-examples`

`ex-left-kan-extension-along-a-full-subcategory-inclusion` · `ex-a-kan-extension-computing-a-free-functor` · `ex-induction-and-coinduction-of-group-representations` (Riehl Ex 6.2.9) · `ex-the-orbit-category-kan-extension` (Riehl Ex 6.2.12) · `ex-density-computed-for-a-presheaf-on-a-two-object-category` · `cex-a-kan-extension-that-is-not-pointwise` (Riehl Ex 6.2.15 worked) · `ex-lan-along-the-inclusion-of-the-rationals-in-the-reals` (Riehl Ex 6.2.8).

### Sources

- **Riehl 2nd ed. Ch 6, §§6.1–6.3 and 6.5** (printed pp. 220–250). **Primary full textbook treatment.** Leinster has no chapter devoted to Kan extensions, but Exercise 6.2.25 explicitly gives the pointwise left-Kan formula and global adjunction; Richter Ch. 4 is a second author-hosted full treatment. §6.4 is excluded (§8 denial 8).
- **Mac Lane, *CWM* Ch X** §§X.1–X.7 (printed pp. 233–250) — Def X.3, the coend formula X.4, pointwise X.5, density X.6, Thms X.7.1 and X.7.2. **Second independent treatment**, read verbatim, and the source of the naming-clash warning (item 2).
- **Loregian §2.3** "Kan extensions using co/ends" — third treatment for item 14.
- **Leinster §6.2** (printed pp. 145–157) for density (Thm 6.2.17) and the two warnings.

### Traps

1. **Riehl's Thm 6.3.7 was WRONG in the first edition** — the size hypotheses were missing, and she records in the 2nd-edition acknowledgments that Vladimir Sotirov pointed this out. Item 10 must carry "$\mathcal D$ and $\mathcal E$ locally small". **Any locator or statement carried over from a first-edition memory of this theorem inherits a defective statement.**
2. **The library states both density items for small $\mathcal C$.** Riehl's item-19 form allows a locally small large category, but that version forms a large category of elements and a functor collection the house foundation does not recognise as a locally small functor category. The restriction is deliberate, not an omitted generality.
3. **Local versus global Kan extension** (items 1 and 4) are different objects. The page keeps them apart throughout.
4. Item 22's smallness restriction is this block's most visible casualty and belongs in the page summary — **in the non-decaying form** (SCHEMA §6: no claims about what other pages do or lack).

**Forward references: NONE.**

---

## MA-7. Preadditive and Additive Categories, Biproducts

**page id** `preadditive-and-additive-categories-and-biproducts`
**`requires`** `adjunctions-units-and-counits`, `limits-and-colimits`,
`rings-subrings-and-integral-domains`, `modules-and-module-homomorphisms`,
`free-modules-and-exact-sequences`, `matrices-and-the-matrix-of-a-linear-map`

The block's thesis page, and the thesis is one sentence: **additivity is a
property, not a structure.** A category with finite biproducts carries exactly one
enrichment in commutative monoids; a functor between such categories is additive
exactly when it preserves biproducts. Every later page in this block leans on
that, because it is what stops "abelian category" from being an axiom system with
an unmotivated addition bolted on: `MA-8` derives the $\mathbf{Ab}$-enrichment of
an abelian category as a **theorem** (§7 #30), and it can only do so because this
page proved the enrichment is forced.

The page also pays a debt the library has been carrying since `359`. The published
`ex-matrix-category-equivalent-to-finite-dimensional-vector-spaces` is a B-page
leaf and nothing may depend on it (§2.2), so $\mathbf{Mat}_R$ is minted here, on
an A page, together with the theorem that a ring **is** a one-object preadditive
category and that a module **is** an additive functor out of it. Those two items
are the cheapest possible demonstration that the abstraction earns its keep, and
they cost four published citations between them.

### A-page items, in dependency order

**Preadditive categories, and what a ring turns out to be**

1. `def-preadditive-category` — def. A category in which each $\mathcal C(A,B)$ carries the structure of an abelian group and composition is biadditive: $h(f+g)=hf+hg$ and $(f+g)k=fk+gk$. LANDMARK.
2. `thm-a-one-object-preadditive-category-is-the-same-thing-as-a-ring` — thm. The assignment sending a one-object preadditive category to $\operatorname{End}(\ast)$ with composition as multiplication is a bijection onto rings, and additive functors correspond exactly to **unital** ring homomorphisms because functors preserve identities. The authoring Beta checks the published `def-ring-homomorphism`; if that convention permits nonunital maps, the Statement explicitly says "unital ring homomorphism" rather than citing the broader predicate. LANDMARK.
3. `thm-additive-functors-from-a-ring-to-abelian-groups-are-left-modules` — thm. For $R$ regarded as a one-object preadditive category, additive functors $R\to\mathbf{Ab}$ correspond to left $R$-modules and additive natural transformations to module homomorphisms. Cites `def-module` and `def-module-homomorphism`. LANDMARK — the payoff of item 2, and the item `homological-algebra` will reach for first.
4. `def-additive-functor` — def. $F(f+g)=F(f)+F(g)$ on every hom-group. *(Namespaced: `def-additive-function` is published and is the Cauchy-equation notion from real analysis.)*
5. `prop-an-additive-functor-preserves-zero-morphisms` — prop. And the converse fails, which is `fs-` item 3 below.
6. `thm-the-opposite-of-a-preadditive-category-is-preadditive` — thm. So `thm-category-theoretic-duality-principle` applies verbatim on this page and every dual statement below is obtained by citing it, never by a second proof.
7. `prop-a-small-product-of-preadditive-categories-is-preadditive` — prop. A binary or set-indexed product has componentwise hom-group structure; cites `def-product-category`. No proper-class-indexed product is claimed locally small.
8. `prop-additive-functors-and-natural-transformations-form-a-preadditive-category` — prop. $\operatorname{Add}(\mathcal C,\mathcal D)$ is preadditive when $\mathcal D$ is, with the pointwise addition; the **size hypothesis is `prop-size-of-functor-categories`** and is named in the Statement.

**Zero objects, and reconciling the two zeros**

9. `thm-in-a-preadditive-category-an-object-is-initial-exactly-when-it-is-terminal` — thm. Either condition forces $\operatorname{End}(Z)$ to be the trivial group, and then $1_Z=0$ gives the other. LANDMARK — in a preadditive category there is no distinction between initial, terminal and zero, and every later page uses that silently.
10. `prop-the-zero-morphism-of-a-preadditive-category-is-the-neutral-element-of-its-hom-group` — prop. **The library already has zero morphisms** (`def-category-with-zero-morphisms`, `prop-zero-object-induces-zero-morphisms`), so the symbol $0$ arrives on this page with two meanings and they must be proved to agree before either is used. Obligation §7 #50.
11. `cor-a-preadditive-category-with-a-zero-object-has-zero-morphisms-in-the-published-sense` — cor. The bridge citation, so later pages may quote either description.

**Biproducts, defined before any addition exists**

12. `def-canonical-morphism-from-a-finite-coproduct-to-a-finite-product` — def. In a category with zero morphisms possessing both, the morphism $A_1\sqcup\cdots\sqcup A_n\to A_1\times\cdots\times A_n$ whose $(j,i)$ component is $1_{A_i}$ when $i=j$ and the zero morphism otherwise. **Built from identities and zero morphisms alone** (§7 #27).
13. `def-biproduct` — def. A finite family has a biproduct when the coproduct and product both exist and the canonical morphism of item 12 is an isomorphism; $A_1\oplus\cdots\oplus A_n$ denotes either, identified along it. LANDMARK. **No enrichment is presupposed and none is available yet** — this is the whole point of the ordering, §7 #27.
14. `thm-biproduct-data-characterisation-without-addition` — thm. A biproduct of $A,B$ is equivalently an object $C$ with $i_A,i_B,p_A,p_B$ satisfying $p_Ai_A=1_A$, $p_Bi_B=1_B$, $p_Ai_B=0$, $p_Bi_A=0$, **together with** the requirement that $(p_A,p_B)$ is a product cone and $(i_A,i_B)$ a coproduct cocone. The familiar single equation $i_Ap_A+i_Bp_B=1_C$ is **not available here** — it names an addition that does not exist yet — and appears only as item 21.
15. `prop-the-empty-biproduct-is-a-zero-object` — prop. The nullary case, so "all finite biproducts" includes the zero object rather than assuming it separately.
16. `prop-biproducts-are-associative-commutative-and-unital-up-to-canonical-isomorphism` — prop. Inherited from the corresponding published product and coproduct statements, and the canonical isomorphisms are the ones the matrix calculus of items 22–24 uses.

**The enrichment theorem: additivity is forced**

17. `thm-a-category-with-finite-biproducts-is-enriched-in-commutative-monoids` — thm. Setting $f+g:=\nabla_B\circ(f\oplus g)\circ\Delta_A$ for $f,g:A\to B$, where $\Delta$ is the diagonal into the product and $\nabla$ the codiagonal out of the coproduct, defines a commutative monoid structure on each hom-set with the zero morphism as neutral element, and composition is bilinear. LANDMARK. §7 #27. **Every clause is a separate proof obligation** and none is an observation: commutativity is where the two descriptions of $A\oplus A$ are played against each other.
18. `thm-the-commutative-monoid-enrichment-of-a-category-with-finite-biproducts-is-unique` — thm. If a commutative-monoid enrichment with bilinear composition exists at all, it is the one of item 17. LANDMARK — **this is the item that makes additivity a property**, and without it the notation $f+g$ is unlicensed and item 40 is false.
19. `cor-the-uniqueness-of-the-enrichment-is-an-instance-of-the-eckmann-hilton-argument` — cor. Cites the published `thm-eckmann-hilton-argument`: two bilinear-compatible monoid structures sharing a unit coincide and are commutative. Free, and it connects `359` to this block.
20. `def-semiadditive-category` — def. A category with a zero object and all finite biproducts, carrying the enrichment of item 17. *(Id free.)*
21. `thm-on-a-biproduct-the-injections-and-projections-satisfy-the-identity-sum-relation` — thm. $i_Ap_A+i_Bp_B=1_{A\oplus B}$, available only now that item 17 has supplied the addition; and conversely the four equations of item 14 together with this one characterise a biproduct. LANDMARK — the working form used by every matrix argument below.

**Additive categories**

22. `thm-a-semiadditive-category-is-preadditive-exactly-when-every-morphism-has-an-additive-inverse` — thm. LANDMARK. The difference between "semiadditive" and "additive" is located here and nowhere else: it is the existence of $-f$, and nothing about products.
23. `def-additive-category` — def. A preadditive category with a zero object and all finite biproducts. **The Statement records that requiring only binary biproducts is equivalent**, by items 15 and 16. LANDMARK.
24. `thm-in-a-preadditive-category-a-finite-product-is-automatically-a-biproduct` — thm. Hence for a preadditive category, having all finite products, all finite coproducts, and all finite biproducts are the same condition. LANDMARK — the theorem that makes "additive" checkable in practice, since one only ever verifies products.
25. `cor-additive-categories-are-closed-under-passage-to-the-opposite` — cor. From items 6 and 24.

**Matrix calculus**

26. `thm-morphisms-between-finite-biproducts-correspond-to-matrices` — thm. $\mathcal C(\bigoplus_{i\le m}A_i,\bigoplus_{j\le n}B_j)\cong\prod_{i,j}\mathcal C(A_i,B_j)$, $f\mapsto(p_jfi_i)$, an isomorphism of abelian groups. §7 #28. LANDMARK.
27. `thm-composition-of-morphisms-between-finite-biproducts-is-matrix-multiplication` — thm. $(gf)_{ki}=\sum_j g_{kj}f_{ji}$, **and the finiteness of the index sets is a hypothesis of the statement**, because the sum is a finite sum in a hom-group. LANDMARK.
28. `cor-the-biproduct-of-morphisms-is-the-diagonal-matrix` — cor. $f\oplus g$ computed, and functoriality of $\oplus$ in each variable.
29. `cex-an-infinite-coproduct-need-not-agree-with-the-infinite-product` — cex. In $\mathbf{Ab}$ the canonical morphism $\bigoplus_{n\in\mathbb N}\mathbb Z\to\prod_{n\in\mathbb N}\mathbb Z$ is not surjective; cites the published `def-direct-sum-of-a-family-of-modules` and `thm-universal-property-of-module-direct-sums`. §7 #27 requires this as its own item: **nothing above extends to infinite families**, and the matrix calculus fails first.
30. `def-the-additive-category-of-matrices-over-a-ring` — def. $\mathbf{Mat}_R$: objects the natural numbers, $\mathbf{Mat}_R(m,n)$ the $n\times m$ matrices over $R$, composition matrix multiplication, identity the identity matrix. Cites the published `def-matrix-of-a-linear-map`-adjacent matrix arithmetic on `matrices-and-the-matrix-of-a-linear-map` (the authoring Beta names the exact published ids for matrix product and identity matrix). LANDMARK — minted here because the published matrix-category item is a B-leaf (§2.2).
31. `thm-the-matrix-category-over-a-ring-is-additive` — thm. Biproduct $m\oplus n=m+n$, with block injections and projections.
32. `thm-the-matrix-category-is-equivalent-to-the-finitely-generated-free-modules` — thm. $\mathbf{Mat}_R\to R\text{-}\mathbf{Mod}$, $n\mapsto R^n$, is fully faithful with essential image the finitely generated free modules; cites `def-free-module-on-a-set-and-standard-basis` and `thm-universal-property-of-free-modules`. LANDMARK.
33. `rem-the-matrix-category-is-the-finite-biproduct-completion-of-a-ring` — rem. Ties items 2, 30 and 32 together: $\mathbf{Mat}_R$ is what one gets by freely adjoining finite biproducts to the one-object preadditive category $R$, and item 54 is the corresponding statement for idempotents.

**Kernels, equalizers, and finite limits**

34. `thm-in-a-preadditive-category-the-equalizer-of-a-parallel-pair-is-the-kernel-of-their-difference` — thm. $\operatorname{eq}(f,g)$ exists if and only if $\ker(f-g)$ does, and the two agree as subobjects. Cites the published `def-equalizers-and-coequalizers` and `def-kernels-and-cokernels-as-equalizers-and-coequalizers`. LANDMARK.
35. `cor-in-a-preadditive-category-the-coequalizer-of-a-parallel-pair-is-the-cokernel-of-their-difference` — cor. By item 6 and duality.
36. `thm-an-additive-category-with-all-kernels-and-cokernels-has-all-finite-limits-and-colimits` — thm. Via item 34 and the published `thm-finite-limit-and-colimit-criteria`. LANDMARK — this is why `MA-8` can axiomatise abelian categories with kernels and cokernels and still speak of pullbacks.
37. `thm-in-a-preadditive-category-with-a-zero-object-a-morphism-is-monic-exactly-when-its-kernel-is-zero` — thm. Assuming the kernel exists, “zero” means a zero object/zero kernel arrow. The proof is where subtraction is genuinely spent: $fu=fv$ gives $f(u-v)=0$. LANDMARK.
38. `cor-in-a-preadditive-category-with-a-zero-object-a-morphism-is-epic-exactly-when-its-cokernel-is-zero` — cor, assuming the cokernel exists.
39. `cex-a-zero-kernel-does-not-force-monicity-in-a-merely-semiadditive-category` — cex. `[AI-GEN CANDIDATE — example]` In $\mathbf{CMon}$, the quotient $q:\mathbb N\to\{0,a\}$ with $a+a=a$ has kernel $0$ and is not monic, since $q$ identifies the two maps $\mathbb N\to\mathbb N$ sending $1$ to $1$ and to $2$. Directly verifiable, never a `deps` target. It is the exact witness that item 37 consumes additive inverses and not merely addition.

**Additive functors are the biproduct-preserving ones**

40. `thm-an-additive-functor-preserves-finite-biproducts` — thm. LANDMARK.
41. `thm-a-functor-between-additive-categories-is-additive-exactly-when-it-preserves-finite-biproducts` — thm. LANDMARK. Both categories are preadditive with finite biproducts, so `def-additive-functor` is typed; the theorem does not apply that predicate to arbitrary categories possessing only biproducts.
42. `cor-a-functor-between-additive-categories-preserving-finite-products-is-additive` — cor. By item 24.
43. `cor-any-adjoint-between-additive-categories-is-additive` — cor. A right adjoint preserves finite products and a left adjoint finite coproducts, by `MA-1` items 24 and 25; each is enough by items 42 and 24. LANDMARK — and it is the reason no later page ever hypothesises "additive adjoint".
44. `thm-an-additive-functor-is-left-exact-exactly-when-it-preserves-kernels` — thm. Finite limits reduce to finite products and equalizers (published), equalizers to kernels (item 34), and finite products are preserved by item 40. Dually for right exactness and cokernels. LANDMARK — the working criterion for every exactness claim in `MA-10`, `MA-11` and `homological-algebra`.
45. `prop-an-additive-functor-preserves-split-biproduct-diagrams` — prop. It carries the canonical diagram $A\xrightarrow{i_A}A\oplus C\xrightarrow{p_C}C$, together with its chosen projection, section and retraction maps, to a diagram of the same biproduct form. `MA-10`, after defining split short exact sequences, cites this proposition to obtain their preservation. No exact-sequence vocabulary is forward-referenced here.

**Hom, and the theorem this track refuses to prove twice**

46. `thm-the-hom-bifunctor-of-a-preadditive-category-takes-values-in-abelian-groups` — thm. $\mathcal C(A,-)$ and $\mathcal C(-,B)$ are additive functors into $\mathbf{Ab}$, and $\mathcal C(-,-)$ is an additive bifunctor; cites the published `def-hom-functors-and-hom-bifunctor` and `thm-hom-assignment-is-a-bifunctor`.
47. `cor-hom-functors-on-a-preadditive-category-are-left-exact` — cor. **Directly from the published `thm-representable-functors-preserve-small-limits`, with no elementwise argument anywhere on the page** (§2.3(3)). LANDMARK.
48. `rem-the-published-module-statement-is-the-instance-of-this-corollary` — rem. Names `thm-hom-functors-are-left-exact` (published, for modules) as the special case and explicitly does not reprove it. Duplicating a general theorem with a special-case computation is the duplication the library forbids.
49. `cex-a-covariant-hom-functor-on-an-additive-category-need-not-preserve-cokernels` — cex. $\mathcal C(\mathbb Z/2,-)$ applied to $\mathbb Z\xrightarrow{\,2\,}\mathbb Z\to\mathbb Z/2$ in $\mathbf{Ab}$. *(Namespaced: `cex-contravariant-hom-need-not-be-right-exact` is published and is the contravariant module statement; the authoring Beta confirms it is an A-page item before citing it beside this one.)*

**Idempotents and the idempotent completion**

50. `def-idempotent-and-split-idempotent` — def. $e:A\to A$ with $e^2=e$; a splitting is $A\xrightarrow{p}B\xrightarrow{i}A$ with $ip=e$ and $pi=1_B$.
51. `thm-a-splitting-of-an-idempotent-is-simultaneously-an-equalizer-and-a-coequalizer-and-is-unique-up-to-unique-isomorphism` — thm. $i$ equalizes $e$ and $1_A$, $p$ coequalizes them, and two splittings differ by a unique isomorphism commuting with both legs. LANDMARK — the uniqueness is what licenses the notation $\operatorname{im}(e)$ for the splitting object.
52. `def-idempotent-complete-category` — def. Every idempotent splits. *(Id free; `idempotent` occurs in the corpus only in the ring-theoretic sense, which the authoring Beta cites for the motivating example.)*
53. `thm-an-additive-category-with-kernels-is-idempotent-complete` — thm. $e$ splits through $\ker(1_A-e)$, and the verification uses items 21 and 37. LANDMARK — hence every abelian category is idempotent complete, which `MA-8` inherits for free.
54. `def-the-idempotent-completion-of-a-preadditive-category` — def. Objects the pairs $(A,e)$ with $e$ idempotent; $\operatorname{Kar}(\mathcal C)\big((A,e),(B,f)\big):=\{\,u:A\to B \mid fue=u\,\}$; composition inherited; identity of $(A,e)$ is $e$. LANDMARK.
55. `thm-the-idempotent-completion-is-idempotent-complete-and-its-inclusion-is-fully-faithful-and-universal` — thm. $\mathcal C\to\operatorname{Kar}(\mathcal C)$, $A\mapsto(A,1_A)$, is fully faithful and additive, and $\operatorname{Kar}(\mathcal C)$ is idempotent complete and preadditive. For an additive $F:\mathcal C\to\mathcal D$, an extension to $\operatorname{Kar}(\mathcal C)$ is constructed **relative to a supplied family of splittings of every $F(e)$**, and is then unique up to natural isomorphism. If $\mathcal C$ is small, AC may instead choose the family and the Statement names AC. Bare idempotent completeness of a large $\mathcal D$ does not make the class-indexed selection. LANDMARK.

### `fs-` items (A page)

- `fs-the-addition-on-an-additive-category-is-extra-structure-that-must-be-chosen` — refuted by item 18. **The page's sharpest**, because it is the belief the whole page exists to destroy.
- `fs-a-category-with-finite-products-and-finite-coproducts-has-biproducts` — refuted in pointed sets, where the zero object and both constructions exist and the canonical morphism $A\vee B\to A\times B$ is injective and not surjective. *(The authoring Beta confirms which published page homes pointed sets and cites it; if none does, the witness moves to $\mathbf{Set}_\ast$ constructed inline in the refutation, which costs three lines.)*
- `fs-a-functor-preserving-zero-morphisms-is-additive` — refuted by the functor **from $\mathbf{Ab}$ to $\mathbf{Ab}$** sending $A$ to the reduced free abelian group $\mathbb Z[U(A)]/\mathbb Z[0]$ on its underlying pointed set. Its domain and codomain are preadditive, so "additive" is typed; it preserves zero morphisms but not addition of homomorphisms. The authoring Beta verifies this from the published free-abelian-group material.
- `fs-a-preadditive-category-with-a-zero-object-has-binary-biproducts` — refuted by the full subcategory of $\mathbf{Ab}$ on the two objects $0$ and $\mathbb Z$: it is preadditive with a zero object, and $\mathbb Z\times\mathbb Z$ does not exist in it, since $\mathcal C(\mathbb Z,0)=0$ and $\mathcal C(\mathbb Z,\mathbb Z)=\mathbb Z$ and neither is $\mathbb Z^2$.
- `fs-every-idempotent-splits` — refuted by a preadditive category that is not idempotent complete; item 53 says exactly which hypothesis rules it out.

### B page — `preadditive-and-additive-categories-and-biproducts-examples`

`ex-the-biproduct-of-two-abelian-groups-computed-as-a-matrix-calculus` · `ex-abelian-groups-modules-and-vector-spaces-are-additive` · `ex-the-category-of-banach-spaces-and-bounded-operators-is-additive` *(if the library's normed-space material supports it; otherwise dropped and recorded)* · `ex-a-ring-viewed-as-a-one-object-preadditive-category-with-its-matrices` · `ex-the-idempotent-completion-of-a-ring-is-the-finitely-generated-projective-modules` · `cex-pointed-sets-are-not-additive` · `cex-commutative-monoids-are-semiadditive-and-not-additive` · `ex-additive-functors-out-of-the-matrix-category` · `ex-a-preadditive-category-with-two-objects-and-a-nonzero-hom-group`.

### Sources

- **Mac Lane, *CWM* 2nd ed., §VIII.2 "Additive Categories" (pp. 194–198)** — the classical treatment. **Ch VIII has exactly four sections** — 1. Kernels and Cokernels (191), 2. Additive Categories (194), 3. Abelian Categories (198), 4. Diagram Lemmas (202) — verified against the book's own contents page; §VIII.1 is *not* the additive-categories section and any locator saying so is wrong (§10, trap). Source of the biproduct-by-equations characterisation (item 14, Mac Lane's own "biproduct diagram", $p_1i_1=1_a$, $p_2i_2=1_b$, $i_1p_1+i_2p_2=1_c$), of **Theorem 2 (p. 194)** — two objects have a product iff they have a biproduct iff they have a coproduct, which is item 24 — of **Prop. 3 (p. 196)**, $f+f'=\nabla_b(f\oplus f')\Delta_a$, which is item 17's formula, and of **Exercise VIII.2.4**, which is items 17, 18 and 22 in one exercise and is explicit that the enrichment is a **commutative monoid** and not necessarily a group.
- **Weibel, *An Introduction to Homological Algebra*, Appendix A.4 "Abelian Categories" (pp. 424–427)** — read from the extracted text on disk; Def. A.4.1 (Ab-category) and A.4.2. Second independent treatment for items 1, 4 and 23. Note that **Weibel §1.2 is "Operations on Chain Complexes"**, not an abelian-categories section; only Defs. 1.2.1–1.2.2 there are relevant. Errata for both editions were read and are recorded in §10.
- **Freyd, *Abelian Categories* (TAC Reprint 3), Ch 1 "Fundamentals" (pp. 14–34) and Exercise 2A (p. 60)** — free. Ch 1 §§1.4–1.9 for special maps, subobjects, difference kernels, products and zero objects; **Exercise 2A** is Freyd's own preadditive/additive axiomatisation, and **Ex. 2A.2** states the uniqueness of the monoid operation and says in terms that it is "not necessarily a group". Source for the idempotent material (items 50–55; Freyd Ex. 2B "Idempotents").
- **Mitchell, *Theory of Categories* (Academic Press 1965), Ch I §18 "Additive Categories" (pp. 28–31)** — third independent treatment, and **the only source read that states the uniqueness as a numbered proposition**: Prop. 18.4, "Then $\mathscr A$ has a **unique semiadditive structure**. If, further, $\mathscr A$ is exact, then it is additive." That is items 18 and 22 exactly. **Mitchell's "additive" carries no product axiom at all** and his "semiadditive" is enriched in abelian *semigroups*; §10 records both.
- **The Stacks Project, "Homology" — "Preadditive and additive categories" [09SE] and "Karoubian categories" [09SF]** — free, tagged per result: preadditive **00ZY**, direct sum **0102**, the internal characterisation **0103**, additive **0104**, kernel/cokernel/coimage/image **0106**, the canonical morphism **0107**; Karoubian **09SG**, **09SH**, **05QV** for items 50–55. The tiebreaker on the "additive" convention split.

Exact ranges, verbatim headings and dispositions are in §10.

### Traps

1. **Two zeros arrive on this page and they are not the same symbol.** Item 10 is the reconciliation and it is not optional; the published `prop-zero-object-induces-zero-morphisms` defines one of them and the group structure defines the other.
2. **Item 14 must not write $i_Ap_A+i_Bp_B=1$.** That equation is item 21 and it presupposes item 17. Writing it inside the definition makes the enrichment theorem circular, and it is the single most common way this page is got wrong.
3. **"Additive" is a contested word, and worse than it looks.** Six sources read, five distinct axiom lists: **Mitchell**'s additive category has *no* product axiom; **Freyd**'s "pre-additive" *already contains* a zero object; **Mac Lane** demands biproducts, **Weibel** binary products, the **Stacks Project** finite products, **Murfet** finite products *and* coproducts. §10 tabulates all six verbatim. Item 23's Statement adopts one and proves the others equivalent under its hypotheses; it never asserts that the others are wrong.
7. **Semiadditive is not additive, and both Mac Lane and Freyd say so in the same breath as the theorem.** Mac Lane Ex. VIII.2.4(a) yields a **commutative monoid**, and it takes his part (b) — an arrow $v_a$ with $v_a+1_a=0$ — to get a group; Freyd Ex. 2A.2 says the operation is "not necessarily a group". Item 22 is where the difference lives, and a page that slides from item 17 to "hence additive" has skipped a real hypothesis.
4. **`def-additive-function` is published and is the real-analysis notion.** Every id on this page carrying the word is namespaced with `-category` or `-functor`.
5. **Item 47 is a citation, not a proof.** If the authoring Beta finds itself writing an elementwise left-exactness argument, it has duplicated `thm-representable-functors-preserve-small-limits` and the item is wrong even if the mathematics is right.
6. **Item 55's extension is data-supplied.** Uniqueness up to natural isomorphism
   does not create the extension: one must still choose a splitting of every
   $F(e)$. For a large source that would be global choice, so the splitting
   family is structure; for a small source ordinary AC is named.

**Forward references: NONE.**

---

## MA-8. Abelian Categories

**page id** `abelian-categories` *(one of the two planned ids kept — §5)*
**`requires`** `preadditive-and-additive-categories-and-biproducts`,
`limits-and-colimits`, `free-modules-and-exact-sequences`,
`the-structure-of-finite-abelian-groups`

The axioms, and the four theorems that make them usable: an abelian category is
balanced, every monomorphism is the kernel of its cokernel, every morphism
factors uniquely as an epimorphism followed by a monomorphism, and **the pullback
of an epimorphism is an epimorphism**. The last of those looks like the least
interesting and is the most load-bearing: it is the sole prerequisite of the
member calculus (`MA-10` §7 #35), and it is false in a general category, so it has
to be proved from the axioms rather than assumed by habit.

The page is built around one ordering constraint that cannot be relaxed. The
canonical morphism $\operatorname{coim} f\to\operatorname{im} f$ has to be
**constructed** before any axiom can assert that it is invertible (§4.3, §7 #29).
So items 5–7 build it from the universal properties of kernel and cokernel alone,
and only item 9 states the axiom. A page that defines the image by the epi–mono
factorisation instead has stated the axiom as a definition and can no longer
state it as an axiom.

### A-page items, in dependency order

**Normality, image and coimage — before any axiom**

1. `def-normal-monomorphism-and-conormal-epimorphism` — def. A monomorphism that is the kernel of some morphism; dually an epimorphism that is the cokernel of some morphism. *(Ids free; the published `def-normal-subgroup` and `def-normal-algebraic-extension` are unrelated and the namespacing is explicit.)*
2. `prop-the-kernel-of-a-monomorphism-is-zero-and-the-cokernel-of-an-epimorphism-is-zero` — prop. In any pointed category, and it is what item 11 turns around.
3. `prop-the-cokernel-of-a-zero-morphism-out-of-the-zero-object-is-an-isomorphism` — prop. $\operatorname{coker}(0\to A)\cong A$ and $\ker(A\to 0)\cong A$; two lines, and every derivation below that computes an image of a monomorphism spends them.
4. `def-image-and-coimage-in-a-category-with-kernels-and-cokernels` — def. $\operatorname{im}f:=\ker(\operatorname{coker}f)$ and $\operatorname{coim}f:=\operatorname{coker}(\ker f)$, both requiring the named kernels and cokernels to exist. LANDMARK. §7 #29, §4.3.
5. `thm-a-morphism-factors-uniquely-through-its-coimage` — thm. $f\circ\ker f=0$, so $f$ factors uniquely through $\operatorname{coim}f=\operatorname{coker}(\ker f)$.
6. `thm-a-morphism-factors-uniquely-through-its-image` — thm. $\operatorname{coker}f\circ f=0$, so $f$ factors uniquely through $\operatorname{im}f=\ker(\operatorname{coker}f)$.
7. `thm-the-canonical-morphism-from-the-coimage-to-the-image-exists-and-is-unique` — thm. Combining items 5 and 6 produces a unique $\bar f:\operatorname{coim}f\to\operatorname{im}f$ with $f=(\operatorname{im}f\rightarrowtail B)\circ\bar f\circ(A\twoheadrightarrow\operatorname{coim}f)$. LANDMARK. §7 #29 — **constructed, not asserted**, and this item is what makes item 9 statable.
8. `prop-the-coimage-projection-is-epic-and-the-image-inclusion-is-monic` — prop. Cites the published `cor-equalizers-are-monic-and-coequalizers-are-epic`.

**The axioms**

9. `def-abelian-category` — def. An additive category (`MA-7` item 23) in which every morphism has a kernel and a cokernel, and the canonical morphism of item 7 is an isomorphism for every morphism. LANDMARK. §7 #30.
10. `rem-the-axiom-labels-and-where-they-come-from` — rem. Grothendieck's Tôhoku §1.4 defines an abelian category as an **additive** category satisfying **AB1** ("tout morphisme admet un noyau et un conoyau") and **AB2** (the canonical $\bar u:\operatorname{Coim}u\to\operatorname{Im}u$ is an isomorphism), and both are *autoduals*. Two cautions the item carries, because both are live traps: **there is no Grothendieck axiom "AB0"** — additivity is a hypothesis, not a numbered axiom — and **Weibel's AB2 is a different statement from Grothendieck's** (Weibel Def. A.4.2 makes AB2 "every monic is the kernel of its cokernel", which is item 13 here, not item 9's clause). **AB3–AB6 and their duals are `MA-9`'s** and are conditions on *infinite* (co)limits. §10 tabulates the split.
11. `thm-an-abelian-category-is-balanced` — thm. A morphism that is both monic and epic is an isomorphism; the proof runs $\ker f=0\Rightarrow\operatorname{coim}f\cong A$ and $\operatorname{coker}f=0\Rightarrow\operatorname{im}f\cong B$ and then applies AB2 to item 7. LANDMARK — and note it consumes **no** additive inverses, only items 3, 7 and 9.
12. `thm-the-opposite-of-an-abelian-category-is-abelian` — thm. Kernels and cokernels swap, image and coimage swap, and the canonical morphism is carried to itself. LANDMARK — **this halves the page**: every dual statement below is obtained by citing it together with `thm-category-theoretic-duality-principle`, never by a second proof.
13. `thm-every-monomorphism-is-the-kernel-of-its-cokernel` — thm. Hence every monomorphism is normal; dually every epimorphism is the cokernel of its kernel. LANDMARK.
14. `thm-epimorphism-monomorphism-factorisation-exists-and-is-unique-up-to-unique-isomorphism` — thm. Every $f$ factors as $A\twoheadrightarrow I\rightarrowtail B$, and any two such factorisations differ by a unique isomorphism commuting with both legs. LANDMARK.
15. `thm-the-image-is-the-least-subobject-through-which-a-morphism-factors` — thm. Stated as a universal property in the subobject partial order of `MA-2` item 11; it is the form `MA-10` uses to compare $\operatorname{im}f$ with $\ker g$.
16. `cor-a-morphism-in-an-abelian-category-is-monic-exactly-when-its-kernel-is-zero-and-epic-exactly-when-its-cokernel-is-zero` — cor. From `MA-7` items 37 and 38, which apply because an abelian category is preadditive.

**Additivity is a property here too — the Freyd axiomatisation**

17. `def-the-freyd-axioms-for-an-abelian-category` — def. Freyd's own list, verbatim (*Abelian Categories* p. 35): **A0** a zero object; **A1** every pair of objects has a product and **A1\*** a sum; **A2** every map has a kernel and **A2\*** a cokernel; **A3** every monomorphism is a kernel of a map and **A3\*** every epimorphism is a cokernel of a map. **No enrichment is part of the data** — Freyd reads A3 as "every subobject is *normal*".
18. `thm-the-freyd-axioms-imply-the-additive-axioms` — thm. A category satisfying A0–A3\* is additive — the biproducts, the commutative-monoid enrichment (`MA-7` item 17) and the additive inverses are all forced — and it is abelian in the sense of item 9, with the unique enrichment of `MA-7` item 18. LANDMARK. **Proved, not asserted; the verified route is below.**
19. `thm-the-freyd-mitchell-characterisation-of-an-abelian-category` — thm. The following are equivalent: (a) $\mathscr A$ is abelian; (b) $\mathscr A$ has kernels, cokernels, finite products, finite coproducts and is normal and conormal; (c) $\mathscr A$ **has pushouts and pullbacks and is normal and conormal**. Mitchell Thm 20.1, which Mitchell attributes to Freyd. LANDMARK — clause (c) is startling and is worth an item on its own, since it never mentions products.
20. `rem-additivity-is-a-property-of-an-abelian-category-and-not-part-of-its-data` — rem. Ties `MA-7` item 18 to items 18–19, and records Freyd's own account of the provenance from his Appendix: *"I might have been the first to observe that the additive structure of an abelian category is implied by the other axioms … The specific proof of the associativity, commutativity, and identity of the two operations is probably from Eckmann and Hilton … I learned the proof from Eilenberg who also devised the neat construction of additive inverses."* The Eckmann–Hilton half is `MA-7` item 19, and the library owns `thm-eckmann-hilton-argument` already.

**Finite limits, and the pullback theorem the member calculus lives on**

21. `thm-an-abelian-category-has-all-finite-limits-and-all-finite-colimits` — thm. From `MA-7` item 36. LANDMARK.
22. `thm-the-pullback-of-a-cospan-is-the-kernel-of-the-difference-of-its-legs` — thm. $A\times_CB=\ker\big(A\oplus B\xrightarrow{(f,-g)}C\big)$, with the two legs the composites with the biproduct projections; dually the pushout is a cokernel. LANDMARK — **the construction, not merely the existence**, because every later diagram argument computes with it.
23. `thm-the-pullback-of-an-epimorphism-is-an-epimorphism` — thm. LANDMARK. §6 records that this carries no choice cost, and §7 #35 records that it is the sole prerequisite of the member relation being transitive. **It is not formal**: it fails in categories that are not regular, and the proof uses the abelian axioms.
24. `cor-the-pushout-of-a-monomorphism-is-a-monomorphism` — cor. By item 12.
25. `thm-in-a-pullback-square-the-induced-morphism-on-the-kernels-of-the-parallel-legs-is-an-isomorphism` — thm. $\ker(P\to B)\cong\ker(A\to C)$. LANDMARK — the workhorse of `MA-11`, and the reason the snake lemma's connecting morphism can be built arrow-theoretically.
26. `thm-a-commuting-square-with-monic-legs-is-a-pullback-exactly-when-the-induced-morphism-to-the-intersection-is-an-isomorphism` — thm. Connects item 21 to `MA-2` item 12's intersection of subobjects and to `MA-9`'s lattice.
27. `thm-pullback-pasting-in-an-abelian-category` — thm. Cites the published `thm-pullback-and-pushout-pasting`; no reproof, and the item exists only to record that the published statement applies verbatim.

**Subobjects, quotients, and the isomorphism theorems**

28. `thm-kernel-and-cokernel-are-mutually-inverse-order-anti-isomorphisms-between-subobjects-and-quotient-objects` — thm. Order quotient objects by factorisation as in `MA-2`: $q\le q'$ when $q'$ factors through $q$. Then $B\rightarrowtail A\mapsto\operatorname{coker}$ and $A\twoheadrightarrow Q\mapsto\ker$ are mutually inverse and **order-reversing**. LANDMARK. Cites `MA-2` items 9–11 and Tan Thm 2.3; "order-isomorphism" would contradict the stated variance.
29. `def-the-quotient-of-an-object-by-a-subobject` — def. $A/B:=\operatorname{coker}(B\rightarrowtail A)$, defined on the subobject rather than on a chosen representative. §7 #31.
30. `thm-the-quotient-is-independent-of-the-representing-monomorphism` — thm. §7 #31 — the well-definedness that licenses the notation $A/B$.
31. `thm-first-isomorphism-theorem-in-an-abelian-category` — thm. $A/\ker f\cong\operatorname{im}f$, canonically. LANDMARK. *(Namespaced: the published isomorphism theorems on `group-homomorphisms-and-the-isomorphism-theorems` hold the bare ids.)*
32. `thm-third-isomorphism-theorem-in-an-abelian-category` — thm. For subobjects $C\le B\le A$, $(A/C)/(B/C)\cong A/B$. *(The second isomorphism theorem needs joins of subobjects and is `MA-9` item 9.)*
33. `thm-a-composite-of-a-quotient-and-a-subobject-inclusion-is-the-canonical-factorisation` — thm. Identifies the epi–mono factorisation of item 14 with $A\twoheadrightarrow A/\ker f\rightarrowtail B$; the bridge between the two languages the block uses.

**Exact functors**

34. `def-exact-functor-between-abelian-categories` — def. An additive functor that is both left exact and right exact in the sense of `MA-1` item 28. *(The bare left/right-exact definitions are minted at `MA-1`; this item adds only the two-sided notion and is explicit about that.)*
34a. `thm-a-left-or-right-exact-functor-between-abelian-categories-is-additive` — thm. Either one-sided exactness already forces preservation of the zero object and finite biproducts, hence additivity (Stacks [010N](1)). This prevents `def-exact-functor` from treating additivity as an independent extra hypothesis in applications.
34b. `thm-one-sided-and-two-sided-exactness-by-short-exact-sequences` — thm. For a functor between abelian categories: left exactness is equivalent to carrying every $0\to A\to B\to C\to0$ to a sequence exact through $F(B)$; right exactness is the dual; exactness is equivalent to carrying every short exact sequence to a short exact sequence (Stacks [010N](2)–(4)). LANDMARK.
35. `thm-an-additive-functor-is-exact-exactly-when-it-preserves-kernels-and-cokernels` — thm. From `MA-7` item 44. LANDMARK.
36. `thm-a-left-exact-functor-preserves-monomorphisms-and-a-right-exact-functor-preserves-epimorphisms` — thm. And an exact functor preserves images, epi–mono factorisations and the canonical morphism of item 7.
37. `cex-an-exact-functor-need-not-be-faithful` — cex. `[AI-GEN CANDIDATE — example]` The projection $\mathcal A\times\mathcal B\to\mathcal A$ is exact and kills everything in $\mathcal B$. Directly verifiable; never a `deps` target.
38. `thm-an-equivalence-between-abelian-categories-is-exact` — thm. Because it preserves all limits and colimits that exist; cites `MA-1` item 24 and the published equivalence items.
39. `def-abelian-subcategory-and-exact-embedding` — def. A full additive subcategory of an **abelian ambient category**, closed under ambient kernels, cokernels and finite biproducts; it is then abelian and its inclusion exact. The ambient hypothesis is load-bearing. **Needed to state Freyd–Mitchell honestly** (item 48).

**Where abelian categories come from**

40. `thm-abelian-groups-form-an-abelian-category` — thm. LANDMARK.
41. `thm-modules-over-a-ring-form-an-abelian-category` — thm. Cites the published `thm-rmod-is-complete-and-cocomplete` for the limits and colimits, and checks AB2 directly. LANDMARK.
42. `thm-additive-functors-from-a-small-preadditive-category-to-an-abelian-category-form-an-abelian-category` — thm. Kernels, cokernels and biproducts are computed pointwise; cites the published `thm-limits-and-colimits-in-functor-categories-are-computed-pointwise` and `prop-size-of-functor-categories` for the size hypothesis. LANDMARK — **this is where most abelian categories actually come from**, and it is the item `homological-algebra` needs in order to know that complexes and diagrams in an abelian category form one.
43. `thm-a-small-product-of-abelian-categories-is-abelian` — thm. A set-indexed product of locally small abelian categories is locally small and abelian with all structure componentwise. Proper-class products are not asserted, since their hom-collections need not be sets.
44. `cex-filtered-vector-spaces-form-an-additive-category-with-all-kernels-and-cokernels-that-is-not-abelian` — cex. **The sourced witness** — the Stacks Project's own Example [0108], supplied precisely because AB2 is "sometimes forgotten". Over a field $k$ take $V=W=k$ with $F^iV=V$ for $i<0$ and $0$ otherwise, $F^iW=W$ for $i\le 0$ and $0$ otherwise; then $f=\operatorname{id}_k$ **has trivial kernel and trivial cokernel and is not an isomorphism**, and $\operatorname{coim}f=V$ while $\operatorname{im}f=W$. LANDMARK-grade counterexample: it shows AB2 is independent of the additive axioms and AB1, and it is the witness for two of the `fs-` items. **Contains its own construction**, so it needs no published citation beyond vector spaces.
45. `cex-torsion-free-abelian-groups-do-not-form-an-abelian-category` — cex. Multiplication by $2$ on $\mathbb Z$ is monic and epic **by cancellation against every torsion-free target**: if two maps $u,v:\mathbb Z\to T$ agree after precomposition with $2$, then $2(u(1)-v(1))=0$ and torsion-freeness gives $u=v$; it is not an isomorphism. The proof does not use the invalid general implication "cokernel $0$ implies epic" outside an abelian category. **Two witnesses are kept deliberately**: item 44 isolates AB2, while this one shows failure of balancedness in a familiar full additive subcategory.
46. `cor-an-abelian-category-that-is-a-preorder-is-trivial` — cor. `[AI-GEN CANDIDATE — direct corollary]` In a preorder every morphism is monic and epic, so item 11 makes every morphism an isomorphism, and a preorder with a zero object in which every morphism is invertible has exactly one object up to isomorphism. Directly verifiable; never a `deps` target. It is the sharpest possible contrast with the published `prop-completeness-and-cocompleteness-in-poset-categories`.
47. `thm-representations-of-a-small-quiver-in-an-abelian-category-form-an-abelian-category` — thm. The special case of item 42 for the free preadditive category on a **small** quiver. **CONTINGENT**: the authoring Beta keeps it only if a published A-page home for quivers exists (`ex-quivers-as-a-functor-category` is a B-leaf and is not citable, §2.2); otherwise the item drops and the drop is recorded.

**Freyd–Mitchell, stated and not used**

48. `rem-the-freyd-mitchell-embedding-theorem` — rem, `proved_here: false`. For every **small** abelian category $\mathcal A$ there are a possibly noncommutative unital ring $R$ and a **covariant fully faithful exact functor** $\mathcal A\to R\text{-}\mathbf{Mod}$, where $R\text{-}\mathbf{Mod}$ means unital left $R$-modules. This is Freyd Thm. 7.34 and Tan Cor. 7.17, with handedness and unit convention made explicit. Carries the exact source and a working URL, and the structured `external_dependency` record (SCHEMA §3). §8 denial 5. **It has no outgoing `deps` into any later item on any page of this block.**
49. `rem-why-the-diagram-lemmas-are-not-proved-by-the-embedding-theorem` — rem. `MA-10` and `MA-11` prove every diagram lemma by the member calculus, which is choice-free, smallness-free and valid in *every* abelian category rather than only in small ones. The embedding route would make the library's diagram lemmas rest on an unproved theorem and would restrict them to small categories; stating the price plainly is what keeps item 48 honest.

### Proof strategy — item 18, the shear matrix

The route below is **not this scaffold's invention**: it is Freyd's Theorem 2.39
and Mitchell's Proposition 18.4, read from the page. Both sources use the same
device, and it is not the codiagonal-kernel argument a scaffolder reaches for
first. Every step is a numbered item or a numbered proof step.

1. **Balancedness first.** Under Freyd's A3/A3\*, if $f$ is monic and epic,
   write $f=\ker g$. Then $gf=0$ and epicity force $g=0$, so $f$ is isomorphic
   to $\ker(0)$, namely an identity. This proof uses no additive structure;
   item 11's later proof under the working additive definition is not available
   yet. This ordering is what the whole argument turns on.
2. **Biproducts.** The canonical morphism $A\sqcup B\to A\times B$ of `MA-7`
   item 12 is shown monic and epic and is therefore invertible by step 1.
3. **The commutative-monoid enrichment** is then `MA-7` item 17, which needs
   nothing but finite biproducts, and its uniqueness is `MA-7` item 18. Mitchell
   Prop. 18.4 states exactly this and no more: *"Then $\mathscr A$ has a unique
   semiadditive structure. If, further, $\mathscr A$ is exact, then it is
   additive."* Both Mac Lane (Ex. VIII.2.4) and Freyd (Ex. 2A.2) stop here and say
   in terms that the result is **not necessarily a group**.
4. **Inverses, by Mitchell's shear.** On $A\oplus A$, take
   $\theta=\begin{pmatrix}1_A&1_A\\0&1_A\end{pmatrix}$. The kernel/cokernel
   calculation makes $\theta$ monic and epic, hence invertible by step 1. Write
   $\theta^{-1}=\begin{pmatrix}a&b\\c&d\end{pmatrix}$; multiplication gives
   $1_A+b=0$. For $x:A\to B$, the morphism $xb$ is then the inverse of $x$ in
   the hom-monoid, since $x+xb=x(1+b)=0$. This is Mitchell Prop. 18.4's typed
   argument. If Freyd's $A\oplus B$ variant is mentioned, the shear with
   $(a,b)\mapsto(a,xa+b)$ is
   $\begin{pmatrix}1_A&0\\x&1_B\end{pmatrix}$ under the library's
   row-target/column-source convention, not its transpose.

**Mac Lane declines to prove this and says so** (CWM p. 201): after giving the
economical axiom list, *"The somewhat fussy proof, Freyd [1964], Schubert [1970],
will be omitted here"*. That is why the sources for item 18 are Freyd and
Mitchell and not Mac Lane, and why the item is worth having: the library's usual
reference for category theory is the one book that skips it.

**Two axiomatisations, on purpose.** The **working definition throughout the
block is item 9** — additive, plus AB1, plus AB2 — which is what Weibel, the
Stacks Project and Murfet use and what every later page cites.
Items 17–19 are theorems *about* an alternative axiomatisation. Nothing outside
items 17–20 depends on the Freyd form, so if the authoring Beta finds the
argument does not close from disk it converts item 18 to a `rem-` with
`proved_here: false`, Freyd's exact statement and locator and the
`external_dependency` record, **and the rest of the page is untouched**. That
containment is deliberate and it is a refinement of §7 #30, which as written made
the $\mathbf{Ab}$-enrichment derivation load-bearing for the whole page. §7
obligation #51 records the refinement and its reason.

### `fs-` items (A page)

- `fs-an-additive-category-with-all-kernels-and-cokernels-is-abelian` — refuted by item 44. **The page's sharpest**, because AB2 looks like a formality and is not.
- `fs-the-canonical-morphism-from-the-coimage-to-the-image-is-invertible-whenever-the-two-objects-are-isomorphic` — refuted by item 45's torsion-free witness, where coimage and image are both $\mathbb Z$ and the canonical morphism is multiplication by $2$. This is **not** item 44's filtered-vector-space witness. AB2 is a condition on the morphism, not on the objects.
- `fs-in-an-abelian-category-a-morphism-that-is-monic-and-epic-need-not-be-an-isomorphism` — refuted by item 11; it is the true statement in general categories and the false one here.
- `fs-every-abelian-category-is-equivalent-to-a-category-of-modules` — the Freyd–Mitchell over-reading. The theorem supplies a fully faithful **exact embedding** of a **small** abelian category, which is neither an equivalence nor available for large ones. Refuted by naming both dropped hypotheses.
- `fs-the-pullback-of-an-epimorphism-is-an-epimorphism-in-any-category-with-pullbacks` — item 22 is a theorem about abelian categories and the general claim is false; **the authoring Beta supplies a verified witness from published material or converts this to a `rem-` naming the hypothesis**, rather than asserting a counterexample it has not checked.

### B page — `abelian-categories-examples`

`ex-kernels-cokernels-images-and-coimages-computed-in-abelian-groups` · `ex-the-canonical-factorisation-of-a-module-homomorphism` · `ex-a-pullback-computed-as-a-kernel-of-a-difference` · `ex-vector-spaces-over-a-field-as-an-abelian-category` · `ex-the-abelian-category-of-representations-of-a-two-object-quiver` · `cex-topological-abelian-groups-are-additive-and-not-abelian` · `cex-banach-spaces-are-additive-and-not-abelian` · `ex-the-third-isomorphism-theorem-checked-for-abelian-groups` · `ex-an-exact-functor-between-module-categories`.

### Sources

- **Mac Lane, *CWM* 2nd ed., §VIII.1 "Kernels and Cokernels" (pp. 191–194) and §VIII.3 "Abelian Categories" (pp. 198–202)** — the classical axiom list, given as an Ab-category satisfying (i) a null object, (ii) binary biproducts, (iii) kernels and cokernels, (iv) every monic a kernel and every epi a cokernel; and **Prop. VIII.3.1 (p. 199)**, the mono–epi factorisation with $m=\operatorname{Ker}(\operatorname{coker}f)$, $e=\operatorname{coker}(\ker f)$, which is items 4–14 here. **Mac Lane's `im` and `coim` are the arrows $m$ and $e$, not objects** (p. 200) — §10 records the split against Stacks. Also p. 199: *"If $\mathcal A$ is abelian, so is any functor category $\mathcal A^J$, for arbitrary $J$"*, which is item 42.
- **Weibel, *An Introduction to Homological Algebra*, Def. 1.2.1–1.2.2 (pp. 5–6) and Appendix A.4 (pp. 424–427)** — read from the extracted text on disk. Second independent treatment; **its axiom bundling is closest to item 9**, but note Weibel *defines* monic and epi by $fg=0\Rightarrow g=0$ and warns that this differs from the general-category definition — the two agree here and item 16 is the bridge.
- **Freyd, *Abelian Categories* (TAC Reprint 3), Ch 2 (pp. 35–63)** — free, and the **primary source for items 17–20**: §2.1 "Theorems for Abelian Categories", §2.3 "The Additive Structure for Abelian Categories" (Thms 2.35–2.39), §2.5 "The Pullback and Pushout Theorems" (Thm 2.54 and its dual, which is items 22–23), §2.6 "Classical Lemmas". The TAC PDF is **image-only with no text layer**, so every formula must be read from a rendered page; §10 records this.
- **Mitchell, *Theory of Categories* (1965), Ch I §§15, 19–20 (pp. 18–35)** — third treatment and the source of item 19 (Thm 20.1) and of the uniqueness half of item 18 (Prop. 18.4). **Mitchell's "exact category" is his own notion — normal and conormal with kernels, cokernels and epi–mono factorisations — and is not Quillen's**; §10 records it.
- **Grothendieck, *Sur quelques points d'algèbre homologique* (Tôhoku), §1.4 (p. 127)** — the verbatim source of AB1 and AB2 for item 10.
- **The Stacks Project, "Homology" §"Abelian categories" [00ZX]** — free, per-result tags: abelian **0109**, the opposite **010A**, injective/surjective **010B**–**010C**, finite (co)limits **010D**, exact **010E**, epimorphisms are universal **05PK**, and **Example 0108**, which is item 44.
- **Murfet, *Abelian Categories* (therisingsea.org), §2** — open lecture notes with a harvestable contents list, verified byte-identical to the live URL; the tiebreaker on the axiom-bundling split.

Exact ranges, verbatim headings and dispositions are in §10.

### Traps

1. **The image must not be defined by the epi–mono factorisation.** That makes AB2 a definition and destroys the page's logical order (§4.3). Item 14 is a theorem *because* item 4 came first.
2. **Item 23 is not formal.** A proof that "obviously" pulls back an epimorphism has skipped the abelian axioms, and `MA-10` inherits the error as a broken equivalence relation.
3. **Item 11's proof must not use additive inverses.** It does not need them, and item 18's argument depends on it not needing them, since balancedness is what makes the shear matrix invertible.
4. **`thm-first-isomorphism-theorem` and its siblings are taken** by the published group-theory page; every id here is namespaced `-in-an-abelian-category`.
5. **Item 48 carries no outgoing dependency edges**, and the `fs-` guard for it is the fourth item above. A single `deps` edge out of it would silently make the whole diagram-lemma block rest on an unproved theorem.
6. **Sources bundle the axioms differently** — some make additivity part of the definition, some derive it, some start the AB numbering at 3. §10 records who does what, and item 10 states the library's choice without asserting that the others are wrong. In particular **Weibel's (AB2) is item 13 here, not item 9's clause**, and the Stacks Project never states AB1 or AB2 at all.
7. **Weibel's own sketch of the Freyd–Mitchell proof carries a published error.** The printed text reads *"C is equivalent to the category R-mod"*; the author's errata correct it to *"every small full abelian subcategory of L is equivalent to a full abelian subcategory of the category R-mod"*. Item 48 must be taken from **Weibel Thm 1.6.1**, whose statement is correct, and never paraphrased from the surrounding sketch.
8. **Freyd's own metatheorem is the device this block refuses**, and he is candid about where it costs most: the first metatheorem *"does not shed light on the existence of maps"*, so the connecting morphism of `MA-11` is exactly the case that needs the **full** embedding. Item 49 says this; it is the strongest available argument that `MA-10`'s member calculus is worth building.

**Forward references: NONE.**

---

## MA-9. Subobject Lattices, Generators and the Grothendieck Axioms

**page id** `subobject-lattices-generators-and-the-grothendieck-axioms`
**`requires`** `abelian-categories`,
`reflective-subcategories-and-the-adjoint-functor-theorems`,
`limits-and-colimits`, `composition-series-and-solvable-groups`,
`free-modules-and-exact-sequences`, `chains-antichains-sperner-and-dilworth`
*(the last id is verified from the live spec as the page homing
`def-lattice-distributive-lattice-and-order-ideal`)*

Everything on this page is about **size and structure in the large**, and it is
the page that connects the block back to `MA-2`. `MA-2` minted subobjects,
intersections, well-poweredness and separating sets because SAFT needed them;
here they acquire the lattice structure an abelian category forces on them, and
item 24 pays `MA-2` back by showing that a generator makes the SAFT hypotheses
checkable.

The page also harvests a seam the published library left lying open. The
corpus already contains `lem-dedekind-modular-law-for-subgroups`,
`thm-zassenhaus-butterfly-lemma`, `thm-schreier-refinement-theorem`,
`def-composition-series-composition-factors-and-length` and
`thm-jordan-holder-theorem-for-groups` — the whole Jordan–Hölder development, for
groups, proved by hand. Every one of those is the group instance of a theorem
about modular lattices of subobjects. Scaffolding the categorical versions costs
six items and hands `homological-algebra` and any future semisimplicity page a
length function; **the group ids are immutable and the group page is not
touched**, so the categorical items are namespaced and the published statements
are cited as the instances they are.

### An ordering decision, recorded because it looks like an error

Grothendieck states **AB4** and **AB5** as exactness conditions, and this page
sits *above* `MA-10`, where exactness is defined. The axioms are therefore stated
here in their **primitive, lattice-and-monomorphism form** — AB4 as "a coproduct
of monomorphisms is a monomorphism", AB5 as the distributivity of a meet over a
directed join — and `MA-10` item 43 proves the equivalence with the exactness
form once exactness exists. Both forms are Grothendieck's own; neither is
invented here. The alternative, moving this page below `MA-11`, would force
`MA-10`'s definition of exactness to forward-reference the subobject lattice, and
`subjects-01-SEAMS.md` §5 ranks that worse.

### A-page items, in dependency order

**The lattice of subobjects**

1. `def-modular-lattice` — def. A lattice in which $x\le z$ implies $x\vee(y\wedge z)=(x\vee y)\wedge z$. Cites the published `def-lattice-distributive-lattice-and-order-ideal` for the lattice vocabulary and does not re-mint it. *(Id free; `lem-dedekind-modular-law-for-subgroups` is the published group instance and is cited, not restated.)*
2. `def-the-join-of-subobjects-in-an-abelian-category` — def. For subobjects $B,C\rightarrowtail A$, $B\vee C:=\operatorname{im}\big(B\oplus C\to A\big)$, the image of the morphism induced on the biproduct. §7 #32. Requires AB1 and finite biproducts, both from `MA-8`.
3. `thm-the-join-of-subobjects-is-their-least-upper-bound` — thm. In the partial order of `MA-2` item 11.
4. `thm-the-meet-of-subobjects-is-their-pullback` — thm. Cites `MA-2` item 12 and the published `lem-pullbacks-of-monomorphisms-are-monomorphisms-and-pushouts-of-epimorphisms-are-epimorphisms`.
5. `thm-the-subobjects-of-an-object-in-an-abelian-category-form-a-lattice` — thm. Bounded, with $0$ and $1_A$. LANDMARK. §7 #32.
6. `thm-the-subobject-lattice-of-an-abelian-category-is-modular` — thm. LANDMARK. §7 #32 — **modularity is a theorem here and never a hypothesis**, and it is the whole reason items 14–18 work. Murfet Cor. 72 and the proof of Prop. 73, with the printed typo corrected: for $B_1\le B_2\le C$, the interval $[B_1,B_2]\subseteq\operatorname{Sub}(C)$ is canonically isomorphic to $\operatorname{Sub}(B_2/B_1)$, using `MA-8` item 32's third isomorphism theorem; a lattice is modular exactly when comparable complements of a common element in every interval coincide. The printed $B_1/B_2$ is not defined, and §10.3 records the erratum. **Cite Murfet and not Freyd**: Freyd's Exercise 4A assumes a *very abelian* category and leans on the embedding theorem this block refuses.
7. `rem-the-published-modular-law-for-subgroups-is-the-instance` — rem. Names `lem-dedekind-modular-law-for-subgroups` and does not reprove it.
8. `cex-a-subobject-lattice-need-not-be-distributive` — cex. The subobjects of $\mathbb Z/2\oplus\mathbb Z/2$ in $\mathbf{Ab}$ form the diamond $M_3$; cites the published `cex-the-diamond-and-pentagon-lattices-are-not-distributive` for the lattice fact and supplies only the identification. **Modular and not distributive is exactly the gap** items 6 and 8 delimit.
9. `thm-second-isomorphism-theorem-in-an-abelian-category` — thm. $(B\vee C)/C\cong B/(B\wedge C)$, canonically. LANDMARK. *(Namespaced; the published group version holds the bare id.)*
10. `def-the-direct-image-and-inverse-image-of-a-subobject` — def. For $f:A\to A'$, $f_\ast B:=\operatorname{im}(B\rightarrowtail A\to A')$ and $f^\ast C:=$ the pullback of $C\rightarrowtail A'$ along $f$.
11. `thm-direct-and-inverse-image-of-subobjects-form-a-galois-connection` — thm. $f_\ast B\le C\iff B\le f^\ast C$, i.e. $f_\ast\dashv f^\ast$ as monotone maps of the subobject lattices. LANDMARK — cites `MA-1` item 21 (`def-galois-connection`) and is the block's best evidence that the adjunction page pays for itself.
12. `cor-inverse-image-preserves-meets-and-direct-image-preserves-joins` — cor. By `MA-1` items 24 and 25 applied to posets, not by a second computation.
13. `cor-the-kernel-and-image-constructions-are-the-inverse-and-direct-images-along-a-morphism` — cor. $\ker f=f^\ast 0$ and $\operatorname{im}f=f_\ast 1_A$; the item that lets `MA-10` and `MA-11` move between the two languages without an argument.

**Length, and Jordan–Hölder in an abelian category**

14. `def-simple-object` — def. A nonzero object whose only subobjects are $0$ and itself. Cites the published `def-simple-module` as the instance.
15. `def-composition-series-and-composition-factors-of-an-object` — def. A finite chain $0=A_0\le A_1\le\cdots\le A_n=A$ of subobjects with every $A_{i}/A_{i-1}$ simple. *(Namespaced: `def-composition-series-composition-factors-and-length` is published and is the group notion.)*
16. `thm-zassenhaus-butterfly-lemma-in-an-abelian-category` — thm. LANDMARK. The projective-interval comparison is modular-lattice theory from item 6; identifying its factors as quotient **objects** also uses item 9 and `MA-8` item 32. Thus the proof is not falsely advertised as following from modularity alone. *(Namespaced; `thm-zassenhaus-butterfly-lemma` is published for groups.)*
17. `thm-schreier-refinement-theorem-in-an-abelian-category` — thm. Any two subobject chains admit equivalent refinements. *(Namespaced.)*
18. `thm-jordan-holder-theorem-in-an-abelian-category` — thm. Any two composition series of an object have the same length and the same composition factors up to permutation and isomorphism. LANDMARK. *(Namespaced; `thm-jordan-holder-theorem-for-groups` is published.)*
19. `def-object-of-finite-length` — def. An object admitting a finite composition series; its length is the common number of factors supplied by item 18.
19a. `thm-length-is-additive-along-a-subobject` — thm. $\ell(A)=\ell(B)+\ell(A/B)$ for every subobject $B\le A$. **Stated without the word "exact"**, since exactness is `MA-10`'s.
20. `thm-objects-of-finite-length-form-an-abelian-subcategory` — thm. Closed under subobjects and quotients, and if $B\le A$ while $B$ and $A/B$ have finite length then so does $A$; cites item 19a and `MA-8` item 39. The later exactness page may call the last clause extension-closure, but this Statement has no forward dependency on that vocabulary.
21. `rem-the-published-group-development-is-the-instance` — rem. Names the four published group items against items 16–18 and states that the library does not reprove them.

**Generators, cogenerators and well-poweredness**

22. `def-generator-and-cogenerator-of-a-category` — def. An object $G$ such that $\{G\}$ is a separating set in the sense of `MA-2` item 15; dually. §7 #33. **Cites `MA-2` and does not re-mint the separating-set vocabulary.**
23. `thm-the-cancellation-and-epimorphism-descriptions-of-a-generator-agree` — thm. In a **cocomplete** abelian category, $G$ is a generator iff for every $A$ the canonical morphism $\coprod_{\mathcal A(G,A)}G\to A$ is an epimorphism. §7 #33. LANDMARK — **the second form is the one every later theorem uses**, and the equivalence is not a restatement. **The cocompleteness hypothesis is not decoration**: Freyd states this equivalence as Prop. 3.36 explicitly for a *right-complete* abelian category, and without it the coproduct on the left need not exist. A third description — $\mathcal A(G,-)$ is faithful — is Freyd's own definition and is the cheapest of the three to check; the item carries all three.
24. `thm-a-locally-small-abelian-category-with-a-generator-is-well-powered` — thm. A subobject $A'\rightarrowtail A$ is determined by the subset $\mathcal A(G,A')\subseteq\mathcal A(G,A)$, which is a set. LANDMARK. Freyd's Prop. 3.35, on which his own comment is *"Electrifying."* Cites `MA-2` item 14 (`def-well-powered-and-co-well-powered-category`) — and it is what turns SAFT from an abstraction into a usable theorem for abelian categories.
24a. `rem-generator-separator-and-the-three-inequivalent-looking-definitions` — rem. Mac Lane defines a generating **set** by the separating property and adds in his own voice that *"the term 'generates' is well established but poorly chosen; 'separates' would have been better"*; Grothendieck and the Stacks Project define it by **subobjects**; Freyd by **faithfulness of $\mathcal A(G,-)$**. Item 23 proves they agree here, and this remark records that they are not the same sentence — which is why `MA-2` minted "separating set" and this page minted "generator" rather than treating one as an abbreviation of the other.
25. `cor-a-cocomplete-locally-small-abelian-category-with-a-generator-satisfies-the-special-adjoint-functor-theorem-hypotheses-dually-with-representatives-supplied` — cor. Item 24 gives well-poweredness and `MA-8` item 28 transfers it to co-well-poweredness; the generator gives the appropriate separating side. To obtain the **intersection** hypothesis in `MA-2` item 26, the Statement additionally takes a supplied representative family for each set of subobject classes (or names AC). It does not silently infer a choice of monomorphism representatives from bare well-poweredness.
26. `thm-a-generator-detects-equality-of-subobjects` — thm. $B\le C$ iff every $G\to A$ factoring through $B$ factors through $C$.

**The Grothendieck axioms**

27. `def-the-axioms-ab3-and-ab3-star` — def. AB3: all small coproducts exist (equivalently, by `MA-8` item 21 and the published `cor-completeness-and-cocompleteness-criteria`, the category is cocomplete); AB3\*: all small products exist. LANDMARK.
28. `def-the-axioms-ab4-and-ab4-star` — def. AB4: AB3 and a small coproduct of monomorphisms is a monomorphism; AB4\*: the dual. LANDMARK.
29. `def-the-axioms-ab5-and-ab5-star` — def. AB5: AB3 and, for every directed family $(B_i)$ of subobjects of $A$ and every subobject $C\le A$, $\big(\bigvee_iB_i\big)\wedge C=\bigvee_i(B_i\wedge C)$; AB5\*: the dual. LANDMARK. **The exactness reformulation is `MA-10` item 43** and is not stated here.
30. `thm-ab5-implies-ab4` — thm. LANDMARK. And the converse fails, which is `fs-` item 4.
31. `def-grothendieck-category` — def. An AB5 abelian category with a generator. LANDMARK.
32. `thm-module-categories-are-grothendieck-categories` — thm. $R$ regarded as a module over itself is a generator, and AB5 holds because filtered colimits of modules are computed on underlying sets; cites the published `thm-rmod-is-complete-and-cocomplete` and `lem-equality-in-a-filtered-colimit-of-sets-is-eventual`. LANDMARK.
33. `thm-abelian-groups-satisfy-ab4-star` — thm. Products of monomorphisms of abelian groups are monomorphisms.
34. `cex-abelian-groups-do-not-satisfy-ab5-star` — cex. In $A=\prod_{n\ge1}\mathbb Z$, let $T_n$ be the subgroup of sequences whose first $n$ coordinates vanish and let $B=\bigoplus_{n\ge1}\mathbb Z$. Then $\bigcap_nT_n=0$, while $T_n+B=A$ for every $n$, so $(\bigcap_nT_n)+B=B\ne A=\bigcap_n(T_n+B)$. This explicit decreasing-family witness violates the AB5* lattice identity and removes the earlier contingent placeholder.
35. `thm-a-nonzero-abelian-category-cannot-satisfy-both-ab5-and-ab5-star` — thm. **Sourced: Weibel Exercise A.4.7**, *"if $\mathcal A\neq 0$, then $\mathcal A$ cannot satisfy both axiom (AB5) and axiom (AB5\*)"*. It is an exercise, not a worked proof, so the authoring Beta writes the proof and records it; if it does not close, the item becomes a `rem-` with `proved_here: false` naming Weibel's exercise, and the drop is recorded. LANDMARK if it closes — it is the sharpest possible statement that AB5 and AB5\* are not two harmless dual conveniences, and it explains why the whole subject is written on the colimit side.
35a. `cex-the-opposite-of-abelian-groups-does-not-satisfy-ab5` — cex. Weibel's own instance, beside Thm 2.6.15 (*"filtered colimits of $R$-modules are exact"*), which is item 32's engine: $\mathbf{Ab}$ satisfies AB5 and $\mathbf{Ab}^{\mathrm{op}}$ does not, so item 35 is not vacuous.

**Projective and injective objects**

36. `def-projective-object` — def. $\mathcal A(P,-)$ carries epimorphisms to surjections; equivalently every $P\to B$ lifts along every epimorphism $A\twoheadrightarrow B$. *(Namespaced: `def-projective-module` is published.)*
37. `thm-projective-object-characterisations` — thm. The lifting property, exactness of $\mathcal A(P,-)$, and the splitting of every epimorphism onto $P$, all equivalent. Cites `MA-7` item 47 for the left-exactness half.
38. `def-injective-object` — def. The formal dual of item 36. *(Namespaced: `def-injective-module` is published.)*
38a. `thm-injective-object-characterisations` — thm. The extension property, exactness of $\mathcal A(-,I)$, and splitting of every monomorphism out of $I$, obtained by `MA-8` item 12 rather than by a second proof.
39. `thm-a-coproduct-of-projectives-is-projective-and-a-product-of-injectives-is-injective` — thm. The finite form is ZF. For an arbitrary small family, the proof chooses one lift/extension for each index and therefore invokes AC; the Statement names that cost (or is restricted to a supplied family of lifts).
40. `thm-a-direct-summand-of-a-projective-is-projective` — thm. Via `MA-7` item 51's splitting of idempotents.
41. `def-a-category-with-enough-projectives-and-with-enough-injectives` — def. Every object receives an epimorphism from a projective, resp. admits a monomorphism into an injective. LANDMARK — **this is the input `homological-algebra` needs and the last thing this block owes it** (§11 amendment 4).
42. `thm-module-categories-have-enough-projectives` — thm. Cites the published `cor-every-module-is-a-quotient-of-a-free-module` and `thm-projective-module-characterizations` and inherits their choice ledger: lifting a map from a free module across an epimorphism chooses a preimage for each basis element, so arbitrary bases use AC (or supplied lifts). LANDMARK.
43. `rem-module-categories-have-enough-injectives-is-already-published` — rem. Names `thm-module-categories-have-enough-injectives` and `thm-baer-criterion-for-injective-modules`, and does not reprove either. The general "a Grothendieck category has enough injectives" is **not** claimed here — it is a hard theorem and it is handed to `homological-algebra` in §11.
44. `thm-a-projective-generator-detects-isomorphisms` — thm. If $P$ is a projective generator then $\mathcal A(P,-)$ is faithful and reflects isomorphisms; cites `MA-3` item 20 for the conservativity language.

### `fs-` items (A page)

- `fs-the-subobject-lattice-of-an-abelian-category-is-distributive` — refuted by item 8. **The page's sharpest**, because modularity is so nearly distributivity.
- `fs-every-abelian-category-has-a-generator` — a size claim; the hypothesis in item 31 is not decoration.
- `fs-every-object-of-an-abelian-category-has-a-composition-series` — refuted by $\mathbb Z$ in $\mathbf{Ab}$, which has no simple subobject at all.
- `fs-ab4-implies-ab5` — the implication runs one way only (item 30); the authoring Beta supplies a verified witness for the failure or converts this to a `rem-` naming the source.
- `fs-a-generator-is-the-same-thing-as-a-projective-generator` — item 44's hypothesis is two words long and both are needed.
- `fs-jordan-holder-needs-a-finiteness-hypothesis-only-on-the-category` — the hypothesis is on the **object** (finite length), never on the category, and item 18's Statement says so.

### B page — `subobject-lattices-generators-and-the-grothendieck-axioms-examples`

`ex-the-subobject-lattice-of-a-cyclic-group-of-order-twelve` · `ex-the-subobject-lattice-of-a-two-dimensional-vector-space` · `ex-the-galois-connection-of-images-and-preimages-for-a-module-homomorphism` · `ex-two-composition-series-of-a-module-refined` · `ex-the-ring-as-a-generator-of-its-module-category` · `cex-an-abelian-category-with-no-nonzero-projective-object` *(sheaves of abelian groups — **denied**, no sheaves in the library; the authoring Beta substitutes a verified witness or drops the item and records it)* · `ex-a-directed-union-of-subgroups-meeting-a-fixed-subgroup` · `ex-length-computed-for-a-finite-abelian-group`.

### Sources

- **Murfet, *Abelian Categories* (`https://therisingsea.org/notes/AbelianCategories.pdf`), §2.2 "Grothendieck's Conditions", §2.3 "Grothendieck Categories", §4.1 "Modular Lattices", §4.2 "Subobject Lattices"** — open lecture notes with a harvestable contents list. **Primary for items 1–6**: Def. 55 is item 1; Cor. 72 and the proof of Prop. 73 give $[B_1,B_2]\cong\operatorname{Sub}(B_2/B_1)$ for $B_1\le B_2$. Prop. 73's displayed $B_1/B_2$ is an evident typo and is recorded at §10.3. This matters: Freyd states modularity only as Exercise 4A and only for a *very abelian* category, so Murfet is the right citation after correction.
- **Grothendieck, *Sur quelques points d'algèbre homologique* (Tôhoku Math. J. 9, 1957), §1.5 "Sommes et produits infinis" (pp. 128–129) and §1.9 (p. 134)** — the verbatim source of AB3, AB4, AB5 and AB6 and of the generating-family definition, prefaced *"Voici par ordre de force croissante, les axiomes les plus utilisés"*. **AB5 is stated there for a *famille filtrante croissante*** — a directed family — which is item 29's hypothesis and trap 7 below. **Grothendieck never writes the starred axioms out**: he says only *"Nous laissons au lecteur le soin d'énoncer les axiomes duals AB 3\*), AB 4\*), AB 5\*) et AB 6\*)"*, so **citing Tôhoku for the statement of a starred axiom is an inaccurate citation**; items 27–29 cite Weibel A.4.3/A.4.6 and Stacks 079B for the starred halves.
- **Weibel, *An Introduction to Homological Algebra*, Appendix A.4 (pp. 424–427) and Thm 2.6.15 (p. 57)** — read from the extracted text on disk; the verbatim modern statements of AB3/AB3\*/AB4/AB4\*/AB5/AB5\*, the lattice reformulation of AB5, Ex. A.4.4 (arbitrary meets and joins need completeness — items 2–5 are the binary case only), Ex. A.4.6 (item 30), Ex. A.4.7 (item 35). **Weibel gives no AB6.**
- **The Stacks Project, "Injectives" §"Grothendieck's AB conditions", Definition [079B]** — free and tagged; the verbatim modern definition of AB3–AB5\*, of *generator* by the subobject formulation, and of **Grothendieck abelian category** as "AB5 and a generator", which is item 31.
- **Freyd, *Abelian Categories* (TAC Reprint 3), §3.3 "Special Objects" (pp. 67–70)** — free; Prop. 3.33, Prop. 3.35 (item 24) and Prop. 3.36 (item 23), which is Freyd's own subject and the link to `MA-2`.
- **Mac Lane, *CWM* 2nd ed., §V.7 (pp. 126–127)** — the generating-set definition and Mac Lane's remark that "separates" would have been the better word (item 24a). **Not** a source for the subobject lattice; Ch VIII has no lattice section.

Exact ranges, verbatim headings and dispositions are in §10.

### Traps

1. **Four ids on this page are taken by the published group development.** `thm-zassenhaus-butterfly-lemma`, `thm-schreier-refinement-theorem`, `thm-jordan-holder-theorem-for-groups` and `def-composition-series-composition-factors-and-length` all exist. Every categorical item is namespaced `-in-an-abelian-category` or `-of-an-object`, and the published items are **cited as instances**, never restated (`CLAUDE.md` §"Natural mathematical voice and citation fidelity").
2. **AB4 and AB4\* are different axioms and both appear.** So do AB5 and AB5\*. A page that writes "AB4" for the product version has stated a different theorem; item 28's Statement fixes the convention and §10 records that the sources agree on it.
3. **Item 34 is now a checked explicit counterexample; item 35 remains
   contingent.** Item 35 faithfully records Weibel's exercise, but the future
   author still writes and checks the proof or converts it to a sourced `rem-`.
4. **Item 29 states AB5 in the lattice form on purpose.** See the ordering decision above; the exactness form is `MA-10` item 43 and the two must be proved equivalent rather than used interchangeably.
5. **`def-simple-module` and `def-simple-group` are published and are not the same notion as item 14.** The item cites the module one as an instance and says nothing about groups, where "simple" means something else.
6. **"Enough injectives" for a general Grothendieck category is not proved here** and item 43 says so plainly. Claiming it would be exactly the kind of unsourced strengthening the block exists to avoid.
7. **AB5's family must be DIRECTED.** Grothendieck writes *famille filtrante croissante*; Weibel writes "if $\{A_i\}$ is a **lattice** of subobjects", which is upward-directed and so is correct. **For an arbitrary family the identity is false** — three distinct lines through the origin in a plane give $(A_1\vee A_2)\wedge B=B\neq 0=(A_1\wedge B)\vee(A_2\wedge B)$. A scaffolder who writes "for any family of subobjects" has shipped a false theorem, and the witness is the same $M_3$ as item 8.
8. **Tôhoku cannot be cited for a starred axiom's statement.** Grothendieck explicitly leaves AB3\*–AB6\* to the reader. Items 27–29 cite Weibel and the Stacks Project for those halves, and the Barr translation carries an index typo in the AB6 display, so the French scan controls where they differ.
9. **Arbitrary meets and joins are not automatic.** Items 2–5 are the binary case. Weibel Ex. A.4.4 is the general statement and it needs cocompleteness for $\bigvee$ and completeness for $\bigwedge$; `MA-2` item 12's intersection over *all* subobjects additionally needs well-poweredness, which is item 24.

**Forward references: NONE.**

---

## MA-10. Exactness and the Member Calculus

**page id** `exactness-and-the-member-calculus`
**`requires`** `abelian-categories`,
`subobject-lattices-generators-and-the-grothendieck-axioms`,
`free-modules-and-exact-sequences`

The page that buys `MA-11` its proofs. An abelian category has no elements, and
the diagram lemmas are element arguments; the member calculus is Mac Lane's
device for running them anyway, and this page builds it from the definition up so
that `MA-11` can chase diagrams the way a reader expects and still be proving
theorems about an arbitrary abelian category.

Two things about it are worth stating before the item list, because both are
routinely got wrong. First, **the whole calculus rests on one theorem**: members
are compared by an equivalence relation, and transitivity of that relation is
exactly `MA-8` item 23, the pullback of an epimorphism is an epimorphism. Mac
Lane's proof says so in as many words — *"By Proposition 2, $v'$ and $w'$ are
epi, and hence $x\equiv z$."* Second, **members are not elements and the
calculus is deliberately weaker than element-chasing**: members of an object do
not form a group, there is no subtraction operation on them, and two morphisms
that agree on every member need not be equal. Items 25–27 are those three facts,
stated as items because every reader assumes the opposite.

The page also carries the honest accounting of what the calculus costs. Nothing
in it uses choice, a generator, projectives, or smallness: the only construction
primitives are finite limits and colimits, plus `MA-8` item 23. **It does not
claim to be constructive** — no source read for this scaffold makes that claim,
and §6's ledger row is corrected accordingly (§7 obligation #53).

### A-page items, in dependency order

**Exactness**

1. `thm-the-subobject-inequalities-underlying-exactness` — thm. For a composable pair $a\xrightarrow{f}b\xrightarrow{g}c$ with $f=me$ its epi–mono factorisation: $\operatorname{im}f\le\ker g$ **if and only if** $gf=0$; and $\operatorname{im}f\ge\ker g$ if and only if every $k$ with $gk=0$ factors as $k=mk'$. Mac Lane's own resolution of §7 #34 — the canonical monomorphism whose existence "exact" presupposes is produced by $gf=0$ and by nothing else. LANDMARK.
2. `def-exactness-at-a-node` — def. $\operatorname{im}f=\ker g$ as subobjects of $b$; equivalently $\operatorname{coker}f=\operatorname{coim}g$. Justified by item 1. LANDMARK. §7 #34, §4.4.
3. `thm-the-arrow-theoretic-criterion-for-exactness` — thm. Freyd's Thm 2.21: for $A\to B\to C$ the following are equivalent — (a) $\operatorname{Im}(A\to B)=\operatorname{Ker}(B\to C)$; (b) $\operatorname{Coim}(B\to C)=\operatorname{Cok}(A\to B)$; (c) $A\to B\to C=0$ **and** $K\to B\to F=0$, where $K\to B$ is a kernel of $B\to C$ and $B\to F$ a cokernel of $A\to B$. LANDMARK — **(c) is two equations between arrows and mentions no subobject ordering at all**, and it is the criterion every proof on `MA-11` should actually verify.
4. `def-exact-sequence-and-short-exact-sequence-in-an-abelian-category` — def. *(Namespaced: `def-exact-and-short-exact-sequences-of-modules` is published.)* **A sequence, not a complex** — chain complexes as objects belong to `homological-algebra` and are not minted here (§11 amendment 4).
5. `thm-a-short-exact-sequence-is-a-kernel-cokernel-pair` — thm. $0\to a\to b\to c\to 0$ is exact iff $f=\ker g$ and $g=\operatorname{coker}f$. LANDMARK — the form used everywhere below.
6. `thm-degenerate-exactness-criteria` — thm. Freyd's Prop. 2.22 as a single table: $0\to K\to A$ is exact iff $K\to A$ is monic; $0\to K\to A\to B$ is exact iff $K\to A$ is a kernel of $A\to B$; $A\to B\to C\to 0$ dually; $0\to A\to B\to C\to 0$ is exact iff $A\to B$ is monic and $B\to C$ is a cokernel of it. LANDMARK — unglamorous and used in nearly every later proof.
7. `thm-exactness-is-self-dual` — thm. A sequence is exact in $\mathcal A$ iff its opposite is exact in $\mathcal A^{\mathrm{op}}$; from `MA-8` item 12. LANDMARK — **this is what licenses every "dually" on `MA-11`**, and it is stated as an item so those appeals cite something.
8. `def-split-short-exact-sequence-in-an-abelian-category` — def. Stated the Stacks way: $(b,i,j,p,q)$ **is the direct sum** of $a$ and $c$, not merely $b\cong a\oplus c$. *(Namespaced: `def-split-short-exact-sequence` is published for modules.)* The distinction is item 10.
9. `thm-splitting-lemma-in-an-abelian-category` — thm. Given a right inverse $s$ of $b\to c$ there is a **unique** $\pi:b\to a$ such that $(s,\pi)$ splits the sequence; dually, given a left inverse $\pi$ of $a\to b$ there is a unique $s$. LANDMARK. *(Namespaced: `thm-splitting-lemma-for-modules` is published, and its B-page companion exhibits it as the instance.)* **The uniqueness clauses are part of the statement** and are what make item 8's five-tuple formulation well behaved.
10. `fs-a-short-exact-sequence-splits-whenever-its-middle-object-is-isomorphic-to-the-biproduct-of-the-outer-two` — false statement. A checked witness: over $R=k[\varepsilon]/(\varepsilon^2)$ begin with the nonsplit sequence $0\to k\to R\to k\to0$, where $k=R/(\varepsilon)$. Put $T=R^{(\mathbb N)}\oplus k^{(\mathbb N)}$ and direct-sum with $0\to T\xrightarrow{1}T\to0$. The resulting middle sequence is still nonsplit, while explicit shift isomorphisms give $k\oplus T\cong T$, $R\oplus T\cong T$, and $(k\oplus T)\oplus k\cong T$. Thus its middle object is abstractly isomorphic to the biproduct of its outer objects, but no isomorphism compatible with the sequence maps exists. The countable coproducts are explicit; no choice principle is hidden.

**Members**

11. `def-member-of-an-object` — def. Mac Lane, verbatim: an arrow $x$ with codomain $a$ is a **member** of $a$, written $x\in_m a$. LANDMARK.
12. `def-equivalence-of-members` — def. For $x:X\to a$ and $y:Y\to a$, write $x\equiv y$ when there are one object $W$ and epimorphisms $u:W\twoheadrightarrow X$, $v:W\twoheadrightarrow Y$ with $xu=yv$. The common domain is part of the definition and is what makes item 14's pullback proof type-check.
13. `prop-member-equivalence-is-reflexive-and-symmetric` — prop. Immediate, and stated separately from item 14 because item 14 is not.
14. `thm-member-equivalence-is-transitive` — thm. LANDMARK. §7 #35. **The proof forms the pullback of the two epimorphisms and cites `MA-8` item 23**; that citation is the entire content of the theorem and the page's single point of contact with the abelian axioms. Without it the relation is not an equivalence relation and nothing later on the page is defined.
15. `thm-members-modulo-equivalence-correspond-to-subobjects` — thm. Every member factors as $x=me$ with $m$ monic, and the equivalence classes of members of $a$ are in bijection with the subobjects of $a$ (`MA-2` item 9). LANDMARK — the item that explains what a member *is*.
16. `prop-each-object-has-a-zero-member-and-each-member-has-a-negative` — prop. And **$x\equiv 0$ if and only if $x=0$ as an arrow**, by cancelling the epimorphism — a one-line fact used constantly and easy to forget to prove.
17. `prop-a-morphism-carries-members-to-members-and-preserves-equivalence` — prop. $x\equiv y$ implies $fx\equiv fy$.

**The six chasing rules — Mac Lane's Theorem VIII.4.3**

18. `thm-chasing-rule-monicity-detected-by-members` — thm. (i) $f:a\to b$ is monic iff for all $x\in_m a$, $fx\equiv0$ implies $x\equiv0$.
19. `thm-chasing-rule-monicity-by-member-cancellation` — thm. (ii) $f$ is monic iff for all $x,x'\in_m a$, $fx\equiv fx'$ implies $x\equiv x'$.
20. `thm-chasing-rule-epimorphy-detected-by-members` — thm. (iii) $g:b\to c$ is epic iff for each $z\in_m c$ there is $y\in_m b$ with $gy\equiv z$.
21. `thm-chasing-rule-a-zero-arrow-is-detected-by-members` — thm. (iv) $h:r\to s$ is the zero arrow iff $hx\equiv0$ for all $x\in_m r$. **This is the only legitimate member-based test for equality of morphisms**, and it tests only against zero — item 27 is why that matters.
22. `thm-chasing-rule-exactness-detected-by-members` — thm. (v) $a\xrightarrow{f}b\xrightarrow{g}c$ is exact at $b$ iff $gf=0$ and to every $y\in_m b$ with $gy\equiv0$ there is $x\in_m a$ with $fx\equiv y$. LANDMARK.
23. `thm-chasing-rule-the-subtraction-surrogate` — thm. (vi), **all three clauses, verbatim**: given $g:b\to c$ and $x,y\in_m b$ with $gx\equiv gy$, there is $z\in_m b$ with $gz\equiv0$; moreover any $f:b\to d$ with $fx\equiv0$ has $fy\equiv fz$, **and any $h:b\to a$ with $hy\equiv0$ has $hx\equiv-hz$**. LANDMARK. §7 #36. Mac Lane's own proof is one line — from $gxu=gyv$ for epis $u,v$, take $z=yv-xu$ — and the item carries it.
24. `rem-what-the-subtraction-rule-does-not-say` — rem. $z$ is **not unique**; $z$ is **not** asserted equivalent to any "$y-x$", because there is no subtraction operation on members at all; and against an arbitrary $k:b\to e$ the rule says **nothing** about $kz$. The rule constrains $z$ only through arrows that already kill $x$ or already kill $y$. Without this remark the next reader will use rule (vi) as if members were elements.
25. `cex-the-members-of-an-object-do-not-form-a-group` — cex. $a\equiv-a$ holds for every member, by composing with $-1$; nevertheless an additive law on equivalence classes cannot be inferred: for the member $1_{\mathbb Z}:\mathbb Z\to\mathbb Z$, item 16 gives $2\,1_{\mathbb Z}\not\equiv0$. `[AI-GENERATED CHECKED WITNESS — never a dependency target]` The verification is the displayed calculation and does not fail in characteristic two because the ambient example is $\mathbb Z$.
26. `cex-two-morphisms-agreeing-on-every-member-need-not-be-equal` — cex. In $\mathbf{Ab}$ take $f=1_{\mathbb Z}$ and $g=-1_{\mathbb Z}$. For every member $x:X\to\mathbb Z$, $x\equiv-x$ by precomposing the latter with $-1_X$, yet $1_{\mathbb Z}\ne-1_{\mathbb Z}$. LANDMARK-grade. **This is the false lemma every diagram chase in an abelian category is tempted by**, and item 21 is the only legitimate substitute.
27. `rem-the-cost-of-the-member-calculus` — rem. No choice, no generator, no projectives, no smallness: the construction primitives are finite limits and colimits together with `MA-8` item 23. **The remark claims exactly this and does not claim constructivity**, which no source consulted establishes. Contrast with the two alternatives — Freyd's metatheorem needs smallness and the full embedding theorem, and the projective-resolution route needs enough projectives — and the contrast is the page's justification.

**The covering criterion — the same tool, without members**

28. `thm-a-square-is-cartesian-exactly-when-a-short-sequence-is-exact` — thm. For a commutative square $P\xrightarrow{p_X}X$, $P\xrightarrow{p_Y}Y$ over $X\xrightarrow fZ\xleftarrow gY$, the square is a pullback iff $0\to P\xrightarrow{(p_X,p_Y)}X\oplus Y\xrightarrow{(f,-g)}Z$ is exact. Stacks [08N2]. LANDMARK — the signs and maps are part of the Statement.
29. `thm-a-cartesian-square-induces-an-isomorphism-on-the-kernels-of-its-parallel-legs` — thm. Stacks [08N3]; the exact-sequence form of `MA-8` item 25.
30. `thm-a-cartesian-square-over-an-epimorphism-is-also-cocartesian` — thm. Stacks [08N4], and it re-derives `MA-8` item 23 in the form `MA-11` uses.
31. `thm-epimorphisms-in-an-abelian-category-are-universal` — thm. Stacks [05PK]; the statement that epimorphy is stable under every pullback, which is `MA-8` item 23 promoted to a named property.
32. `thm-the-covering-criterion-for-exactness` — thm. $x\to y\to z$ is exact iff every $h:w\to y$ with $gh=0$ is *covered*: there exist an object $v$, an **epimorphism** $k:v\to w$ and $l:v\to x$ with $h\circ k=f\circ l$. Stacks [08N5]. LANDMARK.
33. `rem-the-covering-criterion-and-the-member-calculus-are-the-same-tool` — rem. Item 32 is item 22 with the member notation stripped out: a member *is* an arrow into the object, and $\equiv$ *is* agreement after precomposition with epimorphisms. Recording the identification is what makes the member calculus obviously legitimate rather than obviously convenient, and it gives `MA-11` a second idiom for any proof where members read badly.

**Exactness lemmas that feed the diagram lemmas**

34. `thm-the-kernel-row-and-cokernel-row-of-a-morphism-of-short-exact-sequences-are-exact-at-two-nodes-each` — thm. For $\langle f,g,h\rangle$ a morphism of short exact sequences, the kernel row is exact at $\operatorname{Ke}f$ and $\operatorname{Ke}g$, and dually the cokernel row at $\operatorname{Co}g$ and $\operatorname{Co}h$.
35. `cex-the-kernel-row-of-a-morphism-of-short-exact-sequences-need-not-be-short-exact` — cex. Use two copies of $0\to\mathbb Z\xrightarrow{2}\mathbb Z\to\mathbb Z/2\to0$ and vertical maps $(f,g,h)=(2,2,0)$. The diagram commutes, but its kernel row contains $0\to0\to\mathbb Z/2$, which is not epic at the last arrow; the snake connecting map $\ker h\to\operatorname{coker}f$ is in fact the isomorphism $\mathbb Z/2\to\mathbb Z/2$. LANDMARK-grade — the earlier $g=0$ display produced a short exact kernel row and was not a counterexample.
36. `thm-exactness-of-kernel-and-cokernel-sequences-under-endpoint-hypotheses` — thm. Reproduce Stacks [08N6]'s commuting diagram
   $x\xrightarrow f y\xrightarrow g z$ over $u\xrightarrow k v\xrightarrow l w$
   with vertical arrows $\alpha,\beta,\gamma$. If the top row is exact and
   $k$ is monic, then $\ker\alpha\to\ker\beta\to\ker\gamma$ is exact; if the
   bottom row is exact and $g$ is epic, then
   $\operatorname{coker}\alpha\to\operatorname{coker}\beta\to
   \operatorname{coker}\gamma$ is exact. Every letter and endpoint hypothesis
   is displayed. LANDMARK.
37. `thm-the-kernel-cokernel-sequence-of-a-composite` — thm. For $f:a\to b$ and $g:b\to c$ the sequence $0\to\operatorname{Ke}f\to\operatorname{Ke}gf\to\operatorname{Ke}g\to\operatorname{Co}f\to\operatorname{Co}gf\to\operatorname{Co}g\to0$ is exact. Mac Lane's Exercise VIII.4.6. LANDMARK — cheap, genuinely useful, and it is a snake lemma in disguise.
38. `def-comember-and-the-dual-calculus` — def. The formal dual of item 11: an arrow with domain $a$, compared after post-composition with monomorphisms. Stated so that `MA-11` may dualise a member argument by citation rather than by re-deriving the rules.
39. `rem-two-routes-to-every-dual-statement` — rem. A statement about epimorphisms can be reached either by rule (vi) directly or by dualising the monomorphism proof through item 7. **The page keeps both open on purpose**, and `MA-11` item 8 is where the choice actually bites.

**Exactness of Hom**

40. `thm-hom-is-left-exact-in-each-variable` — thm. If $0\to a\to b\to c$ is exact then $0\to\mathcal A(x,a)\to\mathcal A(x,b)\to\mathcal A(x,c)$ is exact, and dually in the contravariant variable. **From `MA-7` item 47 and the published `thm-representable-functors-preserve-small-limits`, with no elementwise argument.** LANDMARK.
41. `cex-hom-is-not-exact` — cex. Cites the published `cex-contravariant-hom-need-not-be-right-exact` for the module instance and adds only the categorical reading.
42. `thm-an-object-is-projective-exactly-when-hom-out-of-it-is-exact` — thm. And injective exactly when $\mathcal A(-,I)$ is exact; ties items 40–41 to `MA-9` items 36–38.
43. `thm-ab5-is-equivalent-to-exactness-of-filtered-colimits` — thm. Grothendieck's directed-subobject lattice form (`MA-9` item 29) is equivalent, in a cocomplete abelian category, to exactness of colimits over **all small filtered index categories** (Weibel A.4.6). LANDMARK. The proof does not silently replace filtered categories by directed posets; any such reduction needs its own cofinality proof. No choice cost is claimed beyond the stated cocompleteness.

### `fs-` items (A page)

- `fs-two-morphisms-that-agree-on-every-member-are-equal` — **the page's sharpest**, refuted by item 26. Every false diagram chase in an abelian category is a special case of it.
- `fs-the-members-of-an-object-form-an-abelian-group` — item 25.
- `fs-member-equivalence-is-transitive-in-any-pointed-category-with-pullbacks` — item 14 spends `MA-8` item 23, which is not formal.
- `fs-the-kernel-row-of-a-morphism-of-short-exact-sequences-is-short-exact` — item 35.
- `fs-the-subtraction-rule-produces-a-unique-member` — item 24.
- `fs-exactness-can-be-defined-without-first-producing-a-canonical-monomorphism` — §7 #34; item 1 is the discharge.

### B page — `exactness-and-the-member-calculus-examples`

`ex-members-of-an-abelian-group-correspond-to-its-subgroups` · `ex-an-ordinary-element-as-the-member-from-the-integers` · `cex-a-general-member-of-an-abelian-group-need-not-come-from-an-element` *(the identity of $\mathbb Z^2$ has noncyclic image)* · `ex-a-member-chase-verifying-monicity` · `ex-the-covering-criterion-checked-in-abelian-groups` · `ex-the-kernel-cokernel-sequence-of-a-composite-of-module-maps` · `cex-a-non-split-short-exact-sequence-of-abelian-groups` *(cites the published `cex-nonsplit-short-exact-sequence-of-integers-mod-two`)* · `ex-the-splitting-lemma-instantiated-at-the-published-module-theorem` · `ex-the-kernel-row-failure-for-multiplication-by-two-computed`.

### Sources

- **Mac Lane, *CWM* 2nd ed., §VIII.4 "Diagram Lemmas" (pp. 202–209)** — **primary**, and the source of items 11–24 and 34–37. Its structure: Lemma 1 (short five lemma, p. 202), **Proposition 2 (p. 203)** — the pullback-of-an-epi statement together with the kernel-transfer clause, which is item 14's engine — the member definition (p. 204), **Theorem 3 "Elementary rules for chasing diagrams" (pp. 204–205)**, Lemma 4 (five lemma, p. 205), Lemma 5 (ker–coker/snake, pp. 206–208), Exercises 1–7 (p. 208), Notes (p. 209).
- **Mac Lane, *Homology* (1963), Ch XII §§2–3 (pp. 360–366)** — the direct ancestor, which CWM's Notes point to. §2 "Subobjects and Quotient Objects", §3 "Diagram Chasing". Mac Lane's own remark there — *"Again, the proof uses quotients to avoid subtraction"*, and *"In this fashion, Prop. 2.1 can be used to 'subtract' two subobjects with the same image, much as if they were elements of a module"* — is the historical case for item 38.
- **The Stacks Project, "Homology" §"Abelian categories" [00ZX]** — items 28–32 and 36, at tags [08N2], [08N3], [08N4], [05PK], [08N5], [08N6]; exact [010E], split [010F], the splitting lemma [010G].
- **Freyd, *Abelian Categories*, §2.2 "Exact Sequences" (pp. 44–45)** — Thm 2.21 (item 3) and Prop. 2.22 (item 6).
- **Johnstone, *Part III Category Theory*, notes by D. Mehrle, §7** — open lecture notes with a harvestable contents list; a fully arrow-theoretic treatment used as the cross-check on items 28–32.
- **Wise, *A Non-Elementary Proof of the Snake Lemma*, §§1–3** — a
  complete open, independent arrow-theoretic treatment of abelian exactness and
  the snake construction. It backs the page's exactness machinery, while Mac
  Lane remains the only source used for the six member rules themselves.
- **Borceux vol. 2 §1.9** is only a bibliographic lead inherited from the prior
  scaffold. Its body was not lawfully obtained in this run; no rule count,
  notation, or missing-clause claim from it is asserted or given provenance.

Exact ranges, verbatim headings and dispositions are in §10.

### Traps

1. **Item 14 is the page.** Everything from item 15 onwards is undefined if transitivity fails, and transitivity is `MA-8` item 23 and nothing else. An authoring Beta that proves transitivity "by composing the epimorphisms" has not proved it.
2. **Rule (vi) is not what the five lemma consumes.** This scaffold previously said otherwise and it was wrong; §7 #36 is corrected at obligation #52. Mac Lane's five-lemma proof (Lemma VIII.4.4) opens *"By duality, it suffices to prove $f_3$ monic"* and then uses only rules (ii) and (v). Rule (vi) is consumed by exactly two things in CWM: the **epi half of the five lemma proved directly by members** (Exercise VIII.4.2, whose hint says *"Rule (vi) of Theorem 3 is necessary in this proof"*), and **the exactness of the ker–coker sequence at $\operatorname{Ke}h$** in the snake lemma, where Mac Lane forms $y_0=y-mz_1$ and says "By Rule (vi) above". The honest statement, and the one the page makes: *a member calculus without rule (vi) cannot prove the snake lemma at all, and cannot prove the epi half of the five lemma directly — it can still reach the five lemma by dualising.*
3. **Do not shorten the subtraction rule from a secondary summary.** Item 23
   takes all three clauses from Mac Lane's rendered page; a source or scaffold
   that supplies only one “moreover” half is insufficient.
4. **Members are compared, never equated.** Item 21 is the only equality test and it tests against zero. Item 26 is the guard.
5. **The CWM scan's OCR destroys $\in_m$ and $\equiv$.** Any transcription of Theorem VIII.4.3 must be read from a rendered page, not from a text layer; §10 records the same hazard for Freyd, whose TAC reprint has no text layer at all.
6. **Item 4 mints a sequence, not a complex.** Chain complexes as objects, their category, and homology are `homological-algebra`'s (§11 amendment 4). A `def-chain-complex` on this page would be a seam violation.
7. **"Split" is not "the middle object is a biproduct".** Item 8 follows Stacks [010F] in requiring the five-tuple to *be* the direct sum, and item 10 is the guard.

**Forward references: NONE.**

---

## MA-11. The Diagram Lemmas in an Abelian Category

**page id** `the-diagram-lemmas-in-an-abelian-category`
**`requires`** `exactness-and-the-member-calculus`, `abelian-categories`,
`free-modules-and-exact-sequences`

The payoff page, and the one `homological-algebra` requires directly (§5.1). Four
things about its construction are decisions rather than presentation, and each is
recorded because the obvious alternative is worse.

**The dependency order is snake → four → five, not five → four → snake.** That is
the Stacks Project's order and it is the efficient one: the four lemma is the
snake lemma applied twice, after replacing an object by an image, and the five
lemma is the four lemma applied twice, once on the left four columns and once on
the right. Proving the five lemma first and then "deducing" the others duplicates
work and obscures why the five lemma needs its middle maps to be isomorphisms
rather than merely monic or epic (item 17).

**The connecting morphism is built arrow-theoretically, and members only describe
it afterwards.** Mac Lane's own construction (CWM pp. 206–207) produces
$\delta$ from universal properties alone: a composite $\delta_0$ is shown to
vanish against a kernel on one side and a cokernel on the other, so it factors
uniquely as $\delta_0=u'\delta u$. Existence *and* uniqueness come from the
universal properties together, which is why §7 #37's "does $\delta$ depend on the
choices?" has a one-word answer here.

**Naturality of $\delta$ is written by this library, because no source hands it
over finished.** Mac Lane sets it as Exercise VIII.4.4; the Stacks Project states
it at [08N7] and its proof is the single word "Omitted"; Weibel proves the
corresponding statement for the long exact sequence but does so *"Using the
Embedding Theorem 1.6.1"*; the nLab asserts it without proof. The one source that
supplies the idea is Rotman, in a Remark rather than a proof. Item 10 is therefore
a genuine obligation and §7 #38 was right to insist on it.

**The published module theorems are cited as instances and never reproved.**
`thm-five-lemma-for-modules`, `thm-snake-lemma-for-modules`,
`lem-four-lemma-for-modules` and `thm-splitting-lemma-for-modules` are all on disk
and their ids are immutable (§2.3). Every categorical item here is namespaced, and
the **B page** exhibits the published module statement as the instance — which is
the honest relationship and costs nothing.

### A-page items, in dependency order

**The short five lemma**

1. `thm-short-five-lemma-in-an-abelian-category` — thm. Given a morphism of short exact sequences with outer verticals $f$ and $h$: if $f$ and $h$ are monic so is $g$; if both are epic so is $g$; if both are isomorphisms so is $g$. Mac Lane's Lemma VIII.4.1. LANDMARK — the cheapest genuine member chase on the page and the right first exercise.
2. `cor-a-morphism-of-short-exact-sequences-with-invertible-outer-maps-is-invertible` — cor.
3. `thm-short-five-lemma-by-pullback-without-members` — thm. The same statement proved from `MA-10` items 28–31 alone. **Both proofs are authored**, because the page's thesis is that members are a convenience and not a crutch, and this is the cheapest place to demonstrate it.

**The snake lemma**

4. `def-snake-data` — def. A morphism $\langle f,g,h\rangle$ of short exact sequences; and the sharper Stacks configuration, top row $x\to y\to z\to0$ and bottom row $0\to u\to v\to w$, under which the lemma still holds. Both are named because items 6 and 7 have different hypotheses.
5. `thm-the-connecting-morphism-exists-and-is-unique` — thm. LANDMARK. §7 #37. Construction, in Mac Lane's arrangement: form the pullback $d$ of the epimorphism with $\ker h$, so that $u:d\to\ker h$ is **epic by `MA-8` item 23** with kernel $s$; dually form the pushout $d'$ of $\operatorname{coker}f$, with cokernel $s'$; the composite $\delta_0=p'gk':d\to d'$ satisfies $s'\delta_0=0$ and $\delta_0 s=0$; since $u'=\ker s'$ and $u=\operatorname{coker}s$, it factors **uniquely** as $\delta_0=u'\delta u$. Equivalently, Stacks [010H](1)'s characterisation: $\delta$ is the unique morphism making the pullback/pushout square commute, and uniqueness is immediate because $\pi$ is epic and $\iota$ monic.
6. `rem-the-connecting-morphism-depends-on-no-choices` — rem. §7 #37. Because item 5 gives existence *and* uniqueness from universal properties, there is nothing to check independence of — in sharp contrast to the elementwise construction, where $\delta$ is a relation and independence of the zig-zag is a real obligation. **This is the page's sharpest `fs-` companion** and the clearest single argument for the arrow-theoretic route.
7. `thm-snake-lemma-in-an-abelian-category` — thm. The sequence $0\to\operatorname{Ke}f\to\operatorname{Ke}g\to\operatorname{Ke}h\xrightarrow{\ \delta\ }\operatorname{Co}f\to\operatorname{Co}g\to\operatorname{Co}h\to0$ is exact. LANDMARK. *(Namespaced; `thm-snake-lemma-for-modules` is published.)* **The exactness at $\operatorname{Ke}h$ is where `MA-10` item 23 — rule (vi) — is spent**, and it is the only place in the block where the subtraction surrogate is indispensable.
8. `thm-snake-lemma-under-the-weaker-stacks-hypotheses` — thm. In the Stacks [010H] diagram $x\xrightarrow f y\xrightarrow g z\to0$ over $0\to u\xrightarrow k v\xrightarrow l w$, the six-term sequence is exact; if $f$ is monic, the induced $\ker(\alpha)\to\ker(\beta)$ is monic, and if $l$ is epic, the induced $\operatorname{coker}(\beta)\to\operatorname{coker}(\gamma)$ is epic. The endpoint clauses are not shortened to the ambiguous phrase "when the original is".
9. `def-the-arrow-category-of-an-abelian-category` — def. $\mathcal A^{\to}$, the functor category on the two-object category with one nonidentity arrow; abelian by `MA-8` item 42, which is Mac Lane's *"If $\mathcal A$ is abelian, so is any functor category $\mathcal A^J$, for arbitrary $J$"*. Minted here because item 10 needs it and for no other reason.
10. `thm-naturality-of-the-connecting-morphism` — thm. LANDMARK. §7 #38. **The library writes this proof; no source supplies it.** The route, which is Rotman's Remark made into an argument: a map of snake data is a single piece of snake data in $\mathcal A^{\to}$; item 5 applied there produces a connecting morphism which, read back in $\mathcal A$, is the pair $(\delta,\delta')$; and **item 5's uniqueness clause forces the naturality square to commute**. No members, no embedding, no choice. **Verification instruction:** the authoring Beta writes the proof out in full and records in the batch notes that the source situation is as described — Mac Lane's Exercise VIII.4.4, Stacks [08N7] "Omitted", Weibel via the embedding theorem — so that a later auditor does not assume a citation exists.
11. `cor-the-kernel-cokernel-sequence-of-a-composite-is-a-snake` — cor. Recovers `MA-10` item 37 from item 7, so the two are visibly one theorem.

**The four and five lemmas**

12. `thm-four-lemma-in-an-abelian-category` — thm. Both halves, Stacks [05QA]: (1) if $\alpha,\gamma$ are epic and $\delta$ monic then $\beta$ is epic; (2) if $\beta,\delta$ are monic and $\alpha$ epic then $\gamma$ is monic. LANDMARK. *(Namespaced; `lem-four-lemma-for-modules` is published.)* **Proved from item 7**, by replacing one object with an image and applying the snake lemma.
13. `thm-weak-four-lemma-with-the-exactness-hypotheses-named` — thm. Mac Lane's *Homology* Lemma XII.3.1, whose hypothesis is not "exact rows" but exactness **at four named nodes**. Stated separately because the sharper hypothesis is what makes item 12 usable in the nine lemma.
14. `rem-the-two-halves-of-the-four-lemma-are-mutually-dual` — rem. Stacks proves (2) and says *"The proof of (2) is dual to this"*. **The item records that a dual proof is a different object from the original**, which matters because the library cites the two halves separately.
15. `thm-five-lemma-in-an-abelian-category` — thm. With $f_1,f_2,f_4,f_5$ isomorphisms, $f_3$ is an isomorphism. Mac Lane's Lemma VIII.4.4. LANDMARK. *(Namespaced; `thm-five-lemma-for-modules` is published.)*
16. `thm-sharp-five-lemma-in-an-abelian-category` — thm. The weakest hypotheses, in three concordant source statements: $f_1$ epic and $f_2,f_4$ monic $\Rightarrow f_3$ monic; $f_2,f_4$ epic and $f_5$ monic $\Rightarrow f_3$ epic. LANDMARK — **this, not item 15, is the version later work uses**, and item 15 is its corollary.
17. `rem-why-the-five-lemma-asks-for-isomorphisms-in-the-middle` — rem. Each of $f_2$ and $f_4$ is consumed **twice** by item 12, once as a monomorphism and once as an epimorphism, by two different halves applied to two different overlapping four-column windows. The outer maps are used **asymmetrically**: the monic half never mentions $f_5$ and the epic half never mentions $f_1$. Without this remark the hypothesis of item 15 looks like laziness.

**The nine lemma**

18. `thm-nine-lemma-in-an-abelian-category` — thm. Freyd 2.65: in the displayed commuting $3\times3$ diagram, all three columns and the middle row are **short exact, with endpoint zeros shown**; then the top row is short exact iff the bottom row is. LANDMARK. Freyd's footnote that "three-by-three lemma" would be a better name belongs in the item.
19. `lem-half-nine-lemma` — lem. Freyd's 2.64, the left-exact half from which item 18 is obtained by adjoining its dual.
20. `thm-nine-lemma-variants-by-which-rows-are-assumed-exact` — thm. In Weibel Exercise 1.3.2's displayed commuting $3\times3$ diagram, **all three columns are short exact**, including their endpoint zeros. Under that standing hypothesis: the bottom two short-exact rows imply the top; the top two imply the bottom; and if top and bottom are short exact while the indicated composite $A\to C$ is zero, then the middle is short exact.
21. `rem-why-the-middle-nine-lemma-needs-a-zero-composite` — rem. Weibel states the hypothesis explicitly and his hint (*"Show the remaining row is a complex"*) confirms it is load-bearing, while Mac Lane's Exercise VIII.4.5(c) states the middle version with no separate clause because the preceding displayed diagram may encode it. The corresponding false statement lives only in the `fs-` list below, so there is one item id rather than a duplicate.
22. `thm-sharp-nine-lemma` — thm. In Mac Lane *Homology* Lemma XII.3.3's **displayed commuting $3\times3$ diagram**, all three columns and the last two rows left exact, including the displayed endpoint zeros, imply the first row left exact; if additionally the first column and middle row are short exact, the first row is short exact.
23. `thm-symmetric-nine-lemma` — thm. In Mac Lane *Homology* Lemma XII.3.4's displayed commuting $3\times3$ diagram, with the middle row and middle column short exact, if three of the remaining four rows and columns are short exact then so is the fourth. "Short exact" includes its endpoint zeros. LANDMARK.
24. `thm-the-nine-lemma-follows-from-the-snake-lemma` — thm. Mac Lane's Exercise VIII.4.5(b). Recorded as an item because it closes the block's dependency graph: **every lemma on this page descends from item 7.**

**Splitting, and the classical consequences**

25. `thm-the-splitting-lemma-follows-from-the-nine-lemma` — thm. Freyd's 2.68 route, which derives the splitting of a short exact sequence admitting a retraction from item 18. Cites `MA-10` item 9 for the statement and supplies the second proof; **two routes to one theorem, and the page says what each spends** — the house discipline of `MA-2`'s Stone–Čech pair.
26. `thm-noether-isomorphism-theorems-recovered-from-the-nine-lemma` — thm. Freyd 2.66. Cites `MA-8` items 31–32 and `MA-9` items 6 and 9 and does **not** restate them; `MA-9` item 31 is the unrelated definition of Grothendieck category and is not a dependency.
27. `thm-the-pullback-and-pushout-theorems` — thm. Freyd's 2.54 and its dual, in the form the diagram lemmas actually consume: a pullback square with one epic leg has its opposite leg epic and induces an isomorphism on the kernels of the parallel legs. Cites `MA-8` items 23–25 and `MA-10` items 28–31; the item exists to gather them under the names Freyd uses.
28. `thm-the-diagram-lemmas-hold-in-the-opposite-category` — thm. By `MA-10` item 7 each lemma's dual is again one of the lemmas on this page, and the item says which is dual to which. LANDMARK-adjacent: it is what licenses every "dually" above, and it makes the page half as long as it looks.
29. `thm-an-exact-functor-transports-every-diagram-lemma` — thm. An exact functor carries snake data to snake data and commutes with $\delta$ **under the canonical comparison isomorphisms** $F(\ker f)\cong\ker(Ff)$, $F(\operatorname{coker}f)\cong\operatorname{coker}(Ff)$ and the corresponding comparisons for the chosen pullbacks and pushouts. The resulting $\delta$ square commutes by item 5's uniqueness. No literal on-the-nose preservation of chosen kernels or cokernels is asserted. `homological-algebra` needs exactly this to base-change a long exact sequence (§11 amendment 4).
30. `thm-five-lemma-for-a-morphism-of-long-exact-sequences` — thm. The five lemma applied at each interior node, with the hypotheses stated once. Cheap given item 16, and it is the form used in practice.

### `fs-` items (A page)

- `fs-the-connecting-morphism-depends-on-the-choices-made-in-its-construction` — refuted by items 5 and 6. **The page's sharpest.** It is *true* of the elementwise zig-zag construction and *false* of the arrow-theoretic one, and stating it as a false statement is the most economical way to show what the universal-property route bought.
- `fs-the-five-lemma-needs-only-that-the-two-middle-maps-are-monic` — item 16 gives the exact hypotheses; item 17 says why the isomorphism assumption is not laziness.
- `fs-the-middle-nine-lemma-holds-without-assuming-the-composite-is-zero` — item 21.
- `fs-the-snake-lemma-is-just-a-pair-of-short-exact-kernel-and-cokernel-rows` — refuted by `MA-10` item 35 and items 5–7 here: the missing connecting morphism and its exactness are precisely the content of the snake lemma.
- `fs-the-diagram-lemmas-in-an-abelian-category-follow-from-the-module-case-by-the-embedding-theorem` — **the block's thesis, stated as the false statement it is.** The embedding theorem is not proved in this library (`MA-8` item 48), it applies only to *small* abelian categories, and Freyd is explicit that the connecting morphism is precisely the case his first metatheorem cannot reach. Refuted by naming all three defects.

### B page — `the-diagram-lemmas-in-an-abelian-category-examples`

`ex-the-published-module-five-lemma-as-an-instance` *(cites `thm-five-lemma-for-modules`)* · `ex-the-published-module-snake-lemma-as-an-instance` *(cites `thm-snake-lemma-for-modules`)* · `ex-the-published-module-four-lemma-as-an-instance` · `ex-the-connecting-morphism-computed-for-a-short-exact-sequence-of-abelian-groups` · `ex-the-snake-lemma-applied-to-multiplication-by-an-integer` · `ex-the-nine-lemma-verified-on-a-diagram-of-cyclic-groups` · `cex-a-snake-configuration-whose-kernel-row-is-not-short-exact` · `ex-the-short-five-lemma-chased-with-members`.

### Sources

- **Mac Lane, *CWM* 2nd ed., §VIII.4 (pp. 202–209)** — **primary.** Lemma 1 (short five, p. 202), Proposition 2 (p. 203), Theorem 3 (the rules, pp. 204–205), Lemma 4 (five, p. 205), **Lemma 5 "Ker-coker sequence = Snake lemma" (pp. 206–208)** with the arrow-theoretic $\delta$, Exercises 1–7 (p. 208) — of which **Ex. 4 is naturality of $\delta$**, **Ex. 5 the nine lemma**, **Ex. 6 the kernel–cokernel sequence of a composite**.
- **Mac Lane, *Homology* (1963), Ch XII §3 "Diagram Chasing" (pp. 360–366)** — **Lemma 3.1 (The Weak Four Lemma)**, **3.2 (The 3×3 Lemma)**, **3.3 (The sharp 3×3 Lemma)**, **3.4 (The symmetric 3×3 Lemma)**. Items 13, 22 and 23 come from here and from nowhere else among the sources read.
- **The Stacks Project, "Homology" [00ZX]** — free and tagged: snake **[010H]** with its uniqueness clause, naturality **[08N7]**, four **[05QA]**, five **[05QB]** (cited there to Eilenberg–Steenrod Lemma 4.5), and the arrow-only engine at **[08N2]**–**[08N6]**, **[05PK]**. **The chapter contains no nine lemma**, verified against the full tag list, so items 18–23 have no Stacks tag.
- **Freyd, *Abelian Categories*, §2.5 "The Pullback and Pushout Theorems" (p. 51) and §2.6 "Classical Lemmas" (pp. 54–60)** — Lemmas 2.61–2.64, **the nine lemma 2.65**, the Noether isomorphisms 2.66, and splitting maps 2.68. Items 18–19, 25–27.
- **Weibel §1.3 (pp. 10–14)** — Snake Lemma 1.3.2, Exercise 1.3.2 (the nine lemma, three parts), Exercise 1.3.3 (the sharp five lemma), Proposition 1.3.4 (naturality of the long exact sequence). Read from the extracted text on disk, with both errata files.
- **Johnstone, *Part III Category Theory*, notes by D. Mehrle, §7 (pp. 63–80)** — open lecture notes with a harvestable contents list; **Lemma 7.23 (the sharp five lemma) has a fully arrow-theoretic proof by two pullbacks, with no elements and no embedding**, and is the independent check on items 3 and 16.
- **Rotman, *An Introduction to Homological Algebra* 2nd ed., Thm 6.13 and the following Remark (pp. 335–336)** — the arrow-category idea behind item 10.

Exact ranges, verbatim headings and dispositions are in §10.

### Traps

1. **Naturality of $\delta$ has no finished source.** Item 10 is written by the library. An authoring Beta that "cites Stacks [08N7]" has cited a statement whose proof is the word "Omitted", and one that cites Weibel has cited a proof that goes through the embedding theorem this block refuses.
2. **The middle nine lemma needs the composite to vanish.** Item 21. Mac Lane's exercise as printed omits the clause and this scaffold could not verify whether his diagram convention supplies it.
3. **Weibel's snake lemma carries a published erratum.** The printed *"so is $\operatorname{coker}(f)\to\operatorname{coker}(g)$"* should read *"so is $\operatorname{coker}(g)\to\operatorname{coker}(h)$"*, per the author's own corrections. Item 8's clause must be taken from the corrected form.
4. **Weibel's snake lemma is stated for $R$-modules only**, with the abelian case obtained in a Remark via Freyd–Mitchell, and he prints no proof at all — *"We will not print the proof in these notes, because it is best done visually."* He is a source for the *statement*, never for the categorical proof.
5. **Four ids are taken by the published module development** and every categorical item is namespaced `-in-an-abelian-category`. The module theorems are cited as instances on the B page.
6. **The dependency order is snake → four → five.** Reversing it duplicates work and hides item 17.
7. **`MA-10` item 23 (rule vi) is spent exactly once here**, at exactness of item 7 at $\operatorname{Ke}h$. If a proof on this page uses it anywhere else, either that proof or `MA-10`'s accounting is wrong.

**Forward references: NONE.**

---

## MA-12. Monoidal Categories and Monoidal Functors

**page id** `monoidal-categories-and-monoidal-functors`
**`requires`** `limits-and-colimits`,
`categories-functors-and-natural-transformations`,
`adjunctions-units-and-counits`, `tensor-products-of-modules`
*(the last is `abstract-algebra`'s and is CONTINGENT — §11 amendment 1. Every item
below marked CONTINGENT drops to a stated non-example if that page does not land
above this one, and the block still stands, because the load-bearing examples are
$(\mathbf{Set},\times)$, $(\mathbf{Cat},\times)$ and the endofunctor category.)*

§5.1 drops the planned `requires` edge on `exact-sequences-and-the-diagram-lemmas`:
nothing in the monoidal block uses exactness, and the edge was an artefact of
linear ordering.

The page has one job beyond the definitions, and it is a bookkeeping job that
turns out to be mathematical: **until coherence is proved, an unbracketed string
$A_1\otimes\cdots\otimes A_n$ is not a defined expression** (§7 #40). Items 30–32
make the bracketing discipline explicit, and `MA-13` is what lifts it. A page that
writes unbracketed strings before then has used a theorem it has not stated.

### A-page items, in dependency order

**The definition**

1. `def-monoidal-category` — def. $(\mathcal C,\otimes,\mathbf 1,\alpha,\lambda,\rho)$ with $\otimes:\mathcal C\times\mathcal C\to\mathcal C$ a bifunctor (citing the published `def-product-category`), $\alpha$, $\lambda$, $\rho$ natural isomorphisms, subject to the **pentagon** and the **triangle** and to nothing else. LANDMARK. Orientation per §4.2.
2. `rem-the-associator-runs-the-other-way-in-mac-lane` — rem. §4.2, with both directions written out. Without it a reader comparing the page to CWM concludes the page is wrong.
3. `rem-mac-lanes-original-conditions-and-what-became-of-them` — rem. Mac Lane's 1963 Theorem 5.2 asks for **five** commutativity conditions; CWM VII.1 carries **three** (pentagon, triangle, and $\lambda_e=\rho_e$); this library states **two**. Items 12–14 are the reduction, and the remark names which condition each item retires.
4. `thm-the-pentagon-and-the-triangle-are-independent` — thm. Neither follows from the other. Mac Lane's own CWM VII.1 Exercise 6, *"Show by examples that the axioms (5) and (7) are independent."* **Verification instruction:** the authoring Beta constructs both witnesses and records them; if only one closes, the item states the half that closes and records the other as open. It is not asserted on this scaffold's authority.
5. `def-strict-monoidal-category` — def. $(X\otimes Y)\otimes Z=X\otimes(Y\otimes Z)$, $X\otimes\mathbf 1=X=\mathbf 1\otimes X$ as **literal equalities**, with identity constraints. EGNO Def. 2.8.1.
6. `def-the-reverse-and-the-opposite-of-a-monoidal-category` — def. $\mathcal C^{\mathrm{rev}}$ with $X\otimes'Y:=Y\otimes X$, and $\mathcal C^{\mathrm{op}}$. **Reversal exchanges left and right duals** (`MA-16` item 6) and the two operations are not the same; keeping them apart from the start is cheaper than repairing it later.

**Where monoidal categories come from**

7. `thm-a-category-with-finite-products-is-monoidal` — thm. The **cartesian** monoidal structure: $\otimes=\times$, $\mathbf 1=$ a terminal object, with $\alpha,\lambda,\rho$ the canonical isomorphisms; and dually the cocartesian structure. LANDMARK — cites the published product and terminal-object material and is the example every other page uses.
8. `cor-set-cat-and-every-complete-category-are-cartesian-monoidal` — cor. **$(\mathbf{Cat},\times,\mathbf 1)$ is singled out**, because `MA-17` item 12 needs exactly it.
9. `thm-the-endomorphisms-of-the-unit-form-a-commutative-monoid` — thm. For every monoidal category, composition and tensor induce the same commutative multiplication on $\operatorname{End}(\mathbf 1)$ after transport through the unitors (EGNO Prop. 2.2.10; the published Eckmann–Hilton argument supplies the engine). Consequently a **strict** one-object monoidal category is exactly a commutative monoid. An arbitrary monoid gives only a one-object ordinary category, and a weak one-object monoidal category may carry nontrivial constraint data. LANDMARK.
10. `thm-the-endofunctor-category-of-a-small-category-is-strict-monoidal-under-composition` — thm. $\otimes=\circ$, $\mathbf 1=\mathrm{Id}$, strictly associative and unital; the size hypothesis is `prop-size-of-functor-categories` and is named in the Statement. LANDMARK.
11. `thm-a-monoid-object-in-the-endofunctor-category-is-exactly-a-monad` — thm. LANDMARK. **This closes the loop `MA-3` deliberately left open.** `MA-3` item 2 records that "a monoid in $[\mathcal C,\mathcal C]$" needs $[\mathcal C,\mathcal C]$ to be a legitimate category and therefore cannot be the definition (§3.1(1)); this item supplies the theorem, **with the smallness hypothesis in the Statement**, so the slogan becomes true and bounded rather than true and unstated.
12. `def-monoid-object-and-comonoid-object-in-a-monoidal-category` — def. $(M,\mu:M\otimes M\to M,\eta:\mathbf 1\to M)$ with the associativity and unit diagrams **written with the associator and unitors explicit**, which is the only way to write them before `MA-13`.
13. `def-a-module-over-a-monoid-object` — def. And the theorem that modules over a monoid object form a category.
14. `thm-monoid-objects-in-a-cartesian-monoidal-category-are-monoids-in-the-ordinary-sense` — thm. Cites the published `def-monoid`; the sanity check that item 12 generalises the right thing.
15. `thm-the-category-of-abelian-groups-is-monoidal-under-the-tensor-product` — thm. **CONTINGENT** on `tensor-products-of-modules` (§11 amendment 1), which must supply the tensor product of abelian groups, its universal property, associativity and unit $\mathbb Z$. LANDMARK if it lands — it is the motivating example, it is the base for the $\mathbf{Ab}$-enrichment of `MA-17` item 14, and **the library currently has no tensor product of abelian groups at all**.
16. `thm-monoid-objects-in-abelian-groups-are-rings` — thm. **CONTINGENT** on item 15. Cites the published `def-ring`.
17. `thm-modules-over-a-commutative-ring-form-a-monoidal-category` — thm. **CONTINGENT** on item 15.
18. `thm-a-poset-with-finite-meets-is-a-strict-monoidal-category` — thm. Free, and the cheapest strict example that is not a monoid.
19. `thm-pointed-sets-are-monoidal-under-the-smash-product` — thm. **CONTINGENT** on a published home for pointed sets; the authoring Beta verifies and drops the item with a record if there is none.

**The unit constraints — Kelly's redundancies**

20. `thm-the-left-unitor-of-a-tensor-product-is-determined` — thm. $\lambda_{X\otimes Y}=(\lambda_X\otimes 1_Y)\circ\alpha_{\mathbf 1,X,Y}$. LANDMARK. §7 #39.
21. `thm-the-right-unitor-of-a-tensor-product-is-determined` — thm. $\rho_{X\otimes Y}\circ\alpha_{X,Y,\mathbf 1}=1_X\otimes\rho_Y$. §7 #39.
22. `cor-the-two-unitors-agree-on-the-unit-object` — cor. $\lambda_{\mathbf 1}=\rho_{\mathbf 1}$, from item 20, the triangle, and invertibility of $-\otimes\mathbf 1$. §7 #39.
23. `rem-the-attribution-of-the-unit-redundancies` — rem. **Written with care, because this scaffold could not obtain Kelly's paper.** EGNO's Bibliographical Notes §2.13 say in terms *"Proposition 2.2.4 is due to Kelly [Ke]"*, and EGNO's Prop. 2.2.4 is exactly items 20–21; EGNO Cor. 2.2.5 is item 22 and its derivation was checked line by line for this scaffold. The remark therefore **cites EGNO for the mathematics and Kelly only as the historical attribution EGNO makes**, and says so. It asserts nothing about Kelly's own phrasing or numbering. §12, seam S-5.

**Monoidal functors**

24. `def-lax-strong-and-strict-monoidal-functor` — def. **One item carrying all three** (§4.5), so the distinction cannot drift between pages: a lax monoidal functor is $(F,F_2,F_0)$ with $F_2:FX\otimes FY\to F(X\otimes Y)$ natural and $F_0:\mathbf 1'\to F\mathbf 1$, subject to the associativity square and the two unit squares; **strong** when $F_2$ and $F_0$ are isomorphisms; **strict** when they are identities. LANDMARK.
25. `rem-monoidal-functor-means-different-things-in-different-sources` — rem. **CWM XI.2 and Joyal–Street both default to lax**; **EGNO Def. 2.4.1 defaults to strong and defines no lax notion at all.** §4.5 fixes the library's practice — the word is never used bare — and this remark is why.
26. `def-monoidal-natural-transformation` — def. $\theta$ with $G_2\circ(\theta\otimes\theta)=\theta_{X\otimes Y}\circ F_2$ and $G_0=\theta_{\mathbf 1}\circ F_0$.
27. `thm-monoidal-functors-compose-and-laxness-is-preserved` — thm. And strong composed with strong is strong, strict with strict strict.
28. `thm-a-lax-monoidal-functor-carries-monoid-objects-to-monoid-objects` — thm. LANDMARK — **the theorem that makes laxness worth having**, and the reason the library does not simply define "monoidal functor" to be strong.
29. `def-monoidal-equivalence` — def. A strong monoidal functor that is an equivalence of the underlying categories; and the theorem that a monoidal quasi-inverse then exists. **The quasi-inverse is data, not a canonical construction** (§3.2), and the Statement supplies it rather than asserting it.

**Bracketing discipline, and why strictification is not obvious**

30. `def-parenthesised-tensor-word` — def. A formal binary word in $n$ letters with insertions of $\mathbf 1$, together with its evaluation as a functor $\mathcal C^n\to\mathcal C$. LANDMARK. §7 #40 — **only these are defined expressions on this page.**
31. `thm-parenthesised-words-of-a-given-length-are-counted-by-the-catalan-numbers` — thm. EGNO Exercise 2.9.1. Cites the published Catalan material if the combinatorics band supplies it (the authoring Beta checks and proves it inline otherwise). Cheap, and it makes item 30 concrete: for $n=4$ there are five bracketings and the pentagon relates them.
32. `rem-unbracketed-tensor-strings-are-not-yet-defined` — rem. §7 #40, §7 #41. It is `MA-13` that licenses $A_1\otimes\cdots\otimes A_n$, and every later item writing one declares that `deps` edge.
33. `rem-isbells-argument-that-isomorphic-objects-cannot-simply-be-identified` — rem. Mac Lane's CWM VII.1, p. 164: in the skeleton of $\mathbf{Set}$ there is an object $D$ with $D\cong D\times D$ and both projections epic, and **assuming the associator is an identity forces $f=f\times g=g$ for all $f,g:D\to D$, which is absurd.** LANDMARK-grade remark — it is the honest answer to "why not just make everything strict?", and it is what stops `MA-13` from looking like bookkeeping.

### `fs-` items (A page)

- `fs-every-monoidal-category-is-strict` — refuted by item 33 and by `MA-13` item 12; the true statement is equivalence, never isomorphism.
- `fs-the-unit-constraints-must-be-imposed-as-axioms` — items 20–22.
- `fs-a-monoidal-functor-is-one-whose-structure-maps-are-isomorphisms` — the EGNO-versus-CWM conflation; item 24 keeps three notions apart and item 25 says why the conflation is tempting.
- `fs-the-pentagon-follows-from-the-triangle` — item 4.
- `fs-an-unbracketed-tensor-product-of-three-objects-is-well-defined-in-any-monoidal-category` — item 32.
- `fs-a-monoid-object-in-the-endofunctor-category-is-the-definition-of-a-monad` — the size claim; item 11 carries the hypothesis and `MA-3` item 2 records why the definition is direct.

### B page — `monoidal-categories-and-monoidal-functors-examples`

`ex-the-cartesian-monoidal-structure-on-sets-computed` · `ex-the-pentagon-checked-for-cartesian-products` · `ex-a-monoid-as-a-one-object-monoidal-category` · `ex-the-five-bracketings-of-a-four-fold-product` · `ex-the-free-monoid-monad-as-a-monoid-object` · `ex-a-lax-monoidal-functor-that-is-not-strong` · `cex-the-skeleton-of-set-cannot-be-made-strict-by-identification` · `ex-endofunctor-composition-as-a-strict-tensor`.

### Sources

- **Mac Lane, *CWM* 2nd ed., Ch VII "Monoids", §§VII.1–VII.2 (pp. 161–170)** — primary for items 1–6, 30, 33. TOC verbatim: 1. Monoidal Categories 161 · 2. Coherence 165 · 3. Monoids 170 · 4. Actions 174 · 5. The Simplicial Category 175 · 6. Monads and Homology 180 · 7. Closed Categories 184 · 8. Compactly Generated Spaces 185 · 9. Loops and Suspensions 188. **CWM VII.1's axioms are (5) pentagon, (7) triangle, (8) $\lambda_e=\rho_e$, and Exercise 1 poses items 20–21 as a problem from (5) and (7) alone.**
- **Mac Lane, *Natural Associativity and Commutativity*, Rice Univ. Studies 49 (4) (1963), pp. 28–46** — free at the Rice repository. Sections: 1. Introduction · 2. Categories with a multiplication · 3. Higher Associativity Laws · 4. Higher Commutativity Laws · 5. Higher Identity Laws · 6. Tensored categories. **Theorem 5.2 is the original five-condition list** and is item 3's content.
- **EGNO, *Tensor Categories*, §§2.1–2.7 (pp. 21–36)** — free at `https://math.mit.edu/~etingof/egnobookfinal.pdf`. Def. 2.1.1, Prop. 2.2.4, Cor. 2.2.5, Def. 2.4.1, Def. 2.4.5, Def. 2.4.8, Def. 2.8.1. **Second independent treatment, and the one whose conventions the library follows.**
- **Etingof et al., MIT 18.769 lecture notes** (`https://math.mit.edu/~etingof/tenscat.pdf`) — the open lecture-note set with a harvestable heading sequence; §§1.1–1.6 parallel EGNO Ch 2 and are the third treatment.
- **Joyal–Street, *Braided monoidal categories*, Macquarie Mathematics Report 860081 (1986)** — free at `http://science.mq.edu.au/~street/JS1.pdf`; §3 for the lax default and for MF1–MF3.
- **Kelly, "On MacLane's conditions for coherence…", J. Algebra 1 (1964) 397–402 — NOT OBTAINED.** See §12, seam S-5, and item 23.

Exact ranges, verbatim headings and dispositions are in §10.

### Traps

1. **Mac Lane's associator points the other way** (§4.2). Every diagram taken from CWM VII or XI, or from the 1963 paper, must be transposed before it is set beside an EGNO diagram.
2. **CWM p. 252 display (2) carries a misprint** — it prints $\rho:ae\cong e$ where the correct form, at VII.1 (6) p. 162, is $\rho:ae\cong a$. Verbatim quotation of that display would ship a false statement.
3. **"Monoidal functor" is never written bare on this page or any later one.** Item 25 is the reason.
4. **Kelly's paper was not read.** Item 23 attributes through EGNO and says so. An authoring Beta that writes "Kelly [1964] proves…" as though from the source has manufactured a citation.
5. **Items 15–17 and 19 are CONTINGENT** and the page must be authorable without them. If `tensor-products-of-modules` does not land above this page, the monoidal examples are cartesian, the endofunctor category and posets — enough for the whole block except `MA-17` item 14's $\mathbf{Ab}$-enrichment payoff, which is then deferred with a record.
6. **Do not write an unbracketed tensor string anywhere on this page**, including in a Remark or a page summary. §7 #40.

**Forward references: NONE.**

---

## MA-13. Strictification and Mac Lane's Coherence Theorem

**page id** `strictification-and-mac-lanes-coherence-theorem`
**`requires`** `monoidal-categories-and-monoidal-functors`,
`universal-properties-and-the-yoneda-lemma`, `limits-and-colimits`

The shortest page in the block and the one with the largest fan-in: **every later
item that writes an unbracketed tensor string depends on item 11**, and that
`deps` edge is declared and never assumed (§7 #41).

**The route is Joyal–Street's, as EGNO presents it, and that is a decision.**
§8 denial 12 records that Mac Lane's original 1963 argument — the rank induction
over iterates, instances and expansions, and the $S(n)$-presentation of his
Theorem 4.2 — is not denied as mathematics but is **not chosen as the route**. The
Joyal–Street construction proves the same theorem from pentagon, triangle and
naturality alone, with no formalised free monoidal category and no group
presentation, and it is short enough to author honestly. Mac Lane 1963 is cited
as the source of the theorem and appears in a Remark on its history.

**The choice cost, which §6 deferred to this page: none.** The strictification
construction selects nothing — it is a Cayley/Yoneda embedding, and EGNO's own
gloss is *"every monoid $M$ is isomorphic to the monoid of maps $M\to M$ commuting
with right multiplication"*. Choice enters only in the **adjacent** statements this
page does not need: EGNO Remark 2.8.7 observes that the axiom of choice implies
every category is equivalent to a skeletal one, and Exercise 2.8.8's
skeletal-strictification hint fixes a representative in each isomorphism class
together with an isomorphism for each pair. **This page proves neither**, and item
14 records the boundary. §6's row for `MA-13` is discharged here as **ZF**.

### A-page items, in dependency order

**The statement, and what it does not say**

1. `def-canonical-morphism-between-parenthesised-words` — def. A morphism $\mathcal C^n\to\mathcal C$ built from identities, $\alpha^{\pm1},\lambda^{\pm1},\rho^{\pm1}$, their tensor products with identities, and composites. Built on `MA-12` item 30. LANDMARK.
2. `rem-every-diagram-commutes-is-false-as-stated` — rem. §7 #42. **Mac Lane says so on the page where he states the theorem**, and the item quotes him: two formally different vertices "*might become equal in a particular monoidal category, in such a way as to spoil the commutativity. Hence we prove only that every 'formal' diagram commutes.*" The slogan is the page's `fs-` item.
3. `thm-mac-lane-coherence-in-the-canonical-map-form` — thm. For each pair of parenthesised words $v,w$ of the same length $n$ there is a **unique** canonical natural isomorphism $v_{\mathcal C}\to w_{\mathcal C}$, and any two canonical morphisms with the same source and target are equal. LANDMARK. CWM VII.2's Corollary, and EGNO Thm 2.9.2 in the form *"Let $f,g:P_1\to P_2$ be two isomorphisms obtained by composing associativity and unit isomorphisms and their inverses possibly tensored with identity morphisms. Then $f=g$."*
4. `rem-the-exact-scope-of-the-coherence-statement` — rem. EGNO's quantifier is *"in this order"*: the theorem compares two parenthesisings of the **same ordered list**, and it constrains only morphisms built from $\alpha,\lambda,\rho$. It says nothing about arbitrary morphisms of $\mathcal C$ and nothing about reordering — reordering is `MA-15`'s subject and there the answer changes.

**The free monoidal category**

5. `def-the-category-of-binary-words` — def. Mac Lane's $W$: objects the binary words (the empty word $e_0$, the generator $(-)$, and $v\square w$), with **exactly one arrow between words of equal length** and none otherwise.
6. `thm-the-category-of-binary-words-is-monoidal` — thm.
7. `thm-the-word-category-is-the-free-monoidal-category-on-one-generator` — thm. For any monoidal $\mathcal B$ and $b\in\mathcal B$ there is a **unique** strong monoidal functor $W\to\mathcal B$ sending $(-)\mapsto b$. CWM VII.2 Theorem 1. LANDMARK — §7 #42's "free-monoidal-category form".
8. `cor-coherence-follows-from-freeness` — cor. Items 3 and 7 are two readings of one fact, and the item says which direction each proves.

**Strictification**

9. `def-the-category-of-right-module-endofunctors` — def. EGNO's $\mathcal C'$: objects the pairs $(F,c)$ with $F:\mathcal C\to\mathcal C$ a functor and $c_{X,Y}:F(X)\otimes Y\xrightarrow{\sim}F(X\otimes Y)$ a natural isomorphism satisfying $c_{X\otimes Y,Z}\circ(c_{X,Y}\otimes 1_Z)=F(\alpha_{X,Y,Z})\circ c_{X,Y\otimes Z}\circ\alpha_{F(X),Y,Z}$; morphisms the natural transformations $\theta$ with $c^2_{X,Y}\circ(\theta_X\otimes 1_Y)=\theta_{X\otimes Y}\circ c^1_{X,Y}$. LANDMARK.
10. `thm-the-module-endofunctor-category-is-strict-monoidal` — thm. $(F_1,c^1)\otimes(F_2,c^2)=(F_1F_2,c)$ with $c$ the evident composite, and unit the identity functor. **Strict because composition of functors is strictly associative** — that one sentence is the whole idea of the proof.
11. `thm-mac-lane-strictification` — thm. Left multiplication $L:\mathcal C\to\mathcal C'$, $X\mapsto(X\otimes-,\ \alpha_{X,-,-})$, is a **monoidal equivalence** onto a strict monoidal category. LANDMARK, and **the item every unbracketed string in `MA-14`–`MA-17` depends on** (§7 #41). EGNO Thm 2.8.5; CWM XI.3 Theorem 1.
12. `rem-strictification-gives-equivalence-and-never-isomorphism` — rem. EGNO Remark 2.8.6: for a cohomologically nontrivial associator the category is not *isomorphic* to a strict one. And EGNO Remark 2.8.7: a monoidal category need not be monoidally equivalent to one that is skeletal **and** strict at once. Together with `MA-12` item 33 (Isbell) this is the complete answer to "why not just make everything strict".
13. `thm-a-monoidal-category-equivalent-to-a-strict-one-satisfies-coherence` — thm. The converse direction, CWM XI.3 Theorem 2. LANDMARK — **it is what makes item 11 and item 3 interchangeable**, and CWM XI.3 Exercise 3 notes the independent route.
14. `rem-the-choice-cost-of-strictification` — rem. **REQUIRED.** Item 11 selects nothing and is a theorem of ZF; the skeletal refinement is a different statement and does use choice. §6's `MA-13` row is discharged here, and the remark states plainly which of the two is proved.

**Consequences**

15. `thm-unbracketed-tensor-strings-are-well-defined-expressions` — thm. Licensed by item 3 and by nothing else. §7 #41. LANDMARK — from here on the library may write $A_1\otimes\cdots\otimes A_n$, and every item that does declares the edge to this one.
16. `thm-the-monoid-object-axioms-may-be-written-without-associators` — thm. `MA-12` item 12's diagrams, restated in the strictified form, with the translation justified by item 11.
17. `rem-the-history-of-the-coherence-theorem` — rem. Mac Lane 1963 as the origin, with his Theorem 5.2's five conditions; the Joyal–Street strictification argument as the route authored here; and §8 denial 12's record that the 1963 rank-induction proof is a legitimate alternative that this library does not author.

### `fs-` items (A page)

- `fs-every-diagram-in-a-monoidal-category-commutes` — **the page's sharpest**, and §7 #42 requires it. Refuted by item 2's own argument, with a witness of two formally distinct words that become equal objects.
- `fs-every-monoidal-category-is-isomorphic-to-a-strict-one` — item 12.
- `fs-every-monoidal-category-is-monoidally-equivalent-to-a-skeletal-strict-one` — EGNO Remark 2.8.7; the near-miss that looks like a harmless strengthening of item 11.
- `fs-coherence-says-that-any-two-parallel-morphisms-in-a-monoidal-category-are-equal` — item 4's scope; the theorem constrains only morphisms built from $\alpha,\lambda,\rho$.
- `fs-strictification-requires-the-axiom-of-choice` — item 14.

### B page — `strictification-and-mac-lanes-coherence-theorem-examples`

`ex-the-two-routes-around-the-pentagon-are-equal` · `ex-the-canonical-map-between-two-bracketings-of-a-five-fold-product` · `ex-the-word-category-on-words-of-length-three` · `ex-strictification-of-a-cartesian-monoidal-category-computed` · `cex-two-formally-distinct-words-that-become-the-same-object` · `ex-a-monoid-object-written-with-and-without-associators`.

### Sources

- **Mac Lane, *CWM* 2nd ed., §VII.2 "Coherence" (pp. 165–170)** — the disowning of the slogan (p. 165), the word category, Theorem 1 (p. 166) and its Corollary (p. 169). **Primary for items 1–8.**
- **Mac Lane, *CWM* 2nd ed., §XI.3 "Strict Monoidal Categories" (pp. 257–260)** — Theorem 1 (strictification), Theorem 2 (the converse), Exercises 1–3. **Note: CWM Ch XI is "Symmetry and Braiding in Monoidal Categories", pp. 251–266 — it is not a chapter on limits**, and a scaffold citing it under any other title is citing a chapter that does not exist (§10).
- **EGNO §2.8 "The Mac Lane strictness theorem" and §2.9 "The coherence theorem" (pp. 36–40)** — Thm 2.8.5, Remarks 2.8.6–2.8.7, Exercise 2.8.8, Thm 2.9.2, Exercise 2.9.1, and the displays (2.38)–(2.42) that are items 9–11. **Primary for the authored route**; EGNO §2.13 attributes the proof to Joyal and Street.
- **Etingof et al., MIT 18.769 notes, §§1.8–1.9** — the same argument in lecture-note form; the third treatment.
- **Mac Lane 1963, §§3–5** — the original theorem and the route not taken (§8 denial 12).

Exact ranges, verbatim headings and dispositions are in §10.

### Traps

1. **The slogan is false and the page must not soften it.** §7 #42; item 2 quotes Mac Lane against it and the `fs-` carries it.
2. **Equivalence, not isomorphism, and not skeletal.** Items 12 and its two `fs-` companions.
3. **Item 15 is a large fan-in and its edges are real.** Every later unbracketed string is a dependency on this page; `LEVELS.md`'s dependency-citation discipline applies to all of them.
4. **The direction of the implication differs between the two primary sources.** CWM proves coherence first and derives strictification; EGNO proves strictification first and derives coherence. The page authors EGNO's direction and states CWM's converse as item 13 — it must not present the two as one theorem.
5. **Do not attribute the authored proof to Mac Lane.** It is Joyal–Street's, per EGNO §2.13, and §8 denial 12 records the choice.

**Forward references: NONE.**

---

## MA-14. Closed Monoidal Categories and the Internal Hom

**page id** `closed-monoidal-categories-and-the-internal-hom`
**`requires`** `strictification-and-mac-lanes-coherence-theorem`,
`adjunctions-units-and-counits`, `limits-and-colimits`,
`universal-properties-and-the-yoneda-lemma`

Where the monoidal block and the adjunction block meet: an internal hom **is** a
right adjoint, so `MA-1`'s uniqueness theorem is what licenses the notation
$[X,Y]$ and no separate argument is needed (§7 #43). The page also mints the
exponential object and the cartesian closed category outright, because the
published `ex-function-sets-as-exponential-representing-objects` is a B-page leaf
and nothing may depend on it (§2.2).

Two things are deliberately kept apart. **Closedness is a property of a monoidal
category, not extra structure it always has** — a monoidal category need not be
closed, and item 5 is the witness. And in a **non-symmetric** monoidal category
there are two internal homs, left and right, and they differ; item 3 defines both
and the page never writes "the" internal hom without saying which. Mac Lane's own
§VII.7 builds symmetry into the word "closed", which the modern convention does
not, and §10 records the split.

### A-page items, in dependency order

1. `def-left-closed-and-right-closed-monoidal-category` — def. $\mathcal C$ is **right closed** when $-\otimes X$ has a right adjoint $[X,-]$ for every $X$, **left closed** when $X\otimes-$ does, and **biclosed** when both. Cites `MA-1` item 1 for the adjunction. LANDMARK. §7 #43.
2. `thm-the-internal-hom-is-unique-up-to-unique-natural-isomorphism` — thm. Directly from `MA-1` item 13, with no new argument. LANDMARK — §7 #43, and the item that licenses the notation.
3. `def-the-internal-hom-and-its-evaluation-morphism` — def. $\operatorname{ev}:[X,Y]\otimes X\to Y$ as the counit, and the transposition bijection $\mathcal C(A\otimes X,Y)\cong\mathcal C(A,[X,Y])$ as `MA-1` item 5's instance. **Left and right internal homs are named separately and are not conflated.**
4. `thm-in-a-symmetric-monoidal-category-the-two-closures-agree` — thm. Deferred in its full form to `MA-15` item 20; stated here in the form that needs only a natural isomorphism $X\otimes Y\cong Y\otimes X$ as a hypothesis, so that the page does not forward-reference. **Ordering note:** the hypothesis is supplied, not assumed from a later page.
5. `cex-a-monoidal-category-need-not-be-closed` — cex. **Verification instruction:** the standard witness is a monoidal structure for which $-\otimes X$ fails to preserve colimits, refuted through `MA-1` item 25 (left adjoints preserve colimits). The authoring Beta constructs the witness from published material and records it; the topological witness — that $(\mathbf{Top},\times)$ is not closed because $-\times Y$ does not preserve regular epimorphisms — is Mac Lane's and EGNO's and is used only if the library's published topology supports it.
6. `thm-a-closed-monoidal-category-has-its-tensor-cocontinuous-in-each-variable` — thm. $-\otimes X$ is a left adjoint, hence preserves all colimits that exist; by `MA-1` item 25. LANDMARK — the most-used consequence of closedness and it costs one citation.
7. `thm-the-internal-hom-is-continuous-in-each-variable` — thm. $[X,-]$ is a right adjoint, so preserves limits; $[-,Y]$ carries colimits to limits. By `MA-1` item 24 and duality.
8. `thm-the-internal-hom-composition-morphism` — thm. The morphism $[Y,Z]\otimes[X,Y]\to[X,Z]$ obtained by transposing a double evaluation, and its associativity and unit laws. LANDMARK — **this is exactly the data `MA-17` needs to make $\mathcal V$ a $\mathcal V$-category** (item 17 there), and it is minted here so that page can cite it.
9. `thm-the-unit-is-an-internal-hom-unit` — thm. $[\mathbf 1,Y]\cong Y$ naturally, and $\mathcal C(\mathbf 1,[X,Y])\cong\mathcal C(X,Y)$ — **the bridge between the internal and the external hom**, and the mechanism behind `MA-17`'s underlying ordinary category.
10. `def-exponential-object` — def. In a category with binary products, $C^B$ with $\operatorname{ev}:C^B\times B\to C$ universal. LANDMARK. **Minted here** because the published exponential item is a B-leaf (§2.2).
11. `def-cartesian-closed-category` — def. Finite products and, for each $B$, a right adjoint to $-\times B$. Equivalently the cartesian monoidal structure of `MA-12` item 7 is closed. LANDMARK.
12. `thm-set-is-cartesian-closed` — thm. With $C^B$ the set of functions; the authoring Beta cites the published function-set material on an A page, and proves the two-line universal property inline if the only published home is the B-leaf example.
13. `thm-the-category-of-small-categories-is-cartesian-closed` — thm. With $\mathcal D^{\mathcal C}$ the published `def-functor-category`, and the size hypothesis from `prop-size-of-functor-categories`. LANDMARK — **`MA-17` item 12 needs exactly this.**
14. `thm-a-presheaf-category-on-a-small-category-is-cartesian-closed` — thm. For presheaves $P,Q$ on small $\mathcal C$, define
   $(Q^P)(c):=\operatorname{Nat}(y(c)\times P,Q)$, with restriction along
   $f:d\to c$ by precomposition with $y(f)\times1_P$; evaluation sends
   $(\eta,x)$ at $c$ to $\eta_c(1_c,x)$. Yoneda and currying give
   $\widehat{\mathcal C}(H,Q^P)\cong\widehat{\mathcal C}(H\times P,Q)$.
   LANDMARK. **Exponentials are not computed pointwise**; Awodey Ex. 2.2.21
   supplies the formula, its restriction maps and evaluation explicitly.
15. `thm-currying-and-uncurrying-are-mutually-inverse` — thm. The $n$-variable form, with the associativity of currying.
16. `cor-a-cartesian-closed-category-with-an-initial-object-has-strict-initial-objects` — cor. $A\times 0\cong 0$, because $-\times A$ is a left adjoint; and hence any morphism into $0$ is an isomorphism. `[AI-GEN CANDIDATE — direct corollary]` Directly verifiable, never a `deps` target.
17. `thm-a-cartesian-closed-preorder-is-a-heyting-semilattice` — thm. The exponential is the relative pseudocomplement. **CONTINGENT** on the published lattice material supplying the vocabulary; otherwise the item states the adjunction $a\wedge-\dashv a\to-$ without naming Heyting and records the change.
18. `def-slice-category-and-the-pullback-functor` — def. Cites the published `def-comma-slice-and-coslice-categories`; the pullback functor $f^\ast:\mathcal C/Y\to\mathcal C/X$ and its left adjoint $\Sigma_f$.
19. `def-locally-cartesian-closed-category` — def. Every slice $\mathcal C/X$ is cartesian closed. LANDMARK — Riehl's §4.5, new in her second edition, and **it needs only slices and pullbacks, both published** (§8, "deliberately NOT denied").
20. `thm-slices-of-a-locally-cartesian-closed-category-are-locally-cartesian-closed` — thm.
21. `thm-a-locally-cartesian-closed-category-with-a-terminal-object-is-cartesian-closed` — thm. Because $\mathcal C\cong\mathcal C/1$.
22. `thm-a-locally-cartesian-closed-category-has-pullbacks-and-with-a-terminal-object-all-finite-limits` — thm. Riehl's Lemma 4.5.4.
23. `thm-local-cartesian-closure-is-equivalent-to-every-pullback-functor-having-a-right-adjoint` — thm. $f^\ast$ has a right adjoint $\Pi_f$ for every $f$. LANDMARK — the working characterisation, and the one that makes the notion recognisable.
24. `thm-set-is-locally-cartesian-closed` — thm.
25. `def-subobject-classifier` — def. A monomorphism $\mathrm{true}:\mathbf 1\to\Omega$ such that every monomorphism is a pullback of it along a **unique** classifying morphism. LANDMARK. §8 denial 9 permits exactly this and denies the topos axioms.
26. `thm-a-subobject-classifier-represents-the-subobject-functor` — thm. $\operatorname{Sub}(-)\cong\mathcal C(-,\Omega)$; cites `MA-2` item 9 for subobjects and the published `def-presheaf-representable-functor-and-representation`. **The uniqueness of the classifying morphism is the content**, and it is what makes $\Omega$ unique up to unique isomorphism by `thm-representing-objects-are-unique-up-to-unique-compatible-isomorphism` (published).
27. `thm-the-two-element-set-is-a-subobject-classifier-for-sets` — thm. LANDMARK — two items and it is done, which is why §8 denial 9 keeps it.
28. `rem-what-is-not-developed-here` — rem. Elementary toposes, Grothendieck toposes and Giraud's theorem are a separate subject (§8 denial 9). The remark states the boundary rather than gesturing at it.

### `fs-` items (A page)

- `fs-every-monoidal-category-is-closed` — item 5.
- `fs-the-left-and-right-internal-homs-agree-in-every-monoidal-category` — item 4's hypothesis is a symmetry and is not automatic; the true statement needs it.
- `fs-a-cartesian-closed-category-has-all-finite-limits` — products and exponentials do not give equalizers.
- `fs-every-cartesian-closed-category-is-locally-cartesian-closed` — the implication runs the other way (items 19–21), and only with a terminal object.
- `fs-a-subobject-classifier-is-any-object-representing-monomorphisms` — the classifying morphism's **uniqueness** is the whole definition; item 26.

### B page — `closed-monoidal-categories-and-the-internal-hom-examples`

`ex-the-function-set-as-an-exponential-computed` · `ex-currying-for-sets-of-three-variables` · `ex-the-internal-hom-of-abelian-groups` *(CONTINGENT on `tensor-products-of-modules`)* · `ex-the-exponential-of-two-small-categories` · `ex-the-subobject-classifier-of-a-presheaf-category` *(the authoring Beta verifies this closes; otherwise dropped and recorded)* · `cex-topological-spaces-are-not-cartesian-closed` · `ex-a-locally-cartesian-closed-slice-computed` · `ex-the-heyting-structure-on-the-open-sets-of-a-space`.

### Sources

- **Mac Lane, *CWM* 2nd ed., §IV.6 (pp. 97–98) and §VII.7 "Closed Categories" (pp. 184–185)** — the cartesian closed definition with the evaluation counit, and the closed-category definition. **§VII.7 runs about one page and builds symmetry into "closed"**, which the modern convention does not; §10 records it.
- **Riehl, *Category Theory in Context* 2nd ed., §4.4 (Def. 4.4.7, Def. 4.4.10) and §4.5 (Def. 4.5.2, Lemmas 4.5.3–4.5.4)** — the two-variable adjunction, left and right closures, biclosed, and **the locally cartesian closed material, which is new in the second edition**; primary for items 1, 3, 19–24.
- **EGNO** — used for the monoidal side only; **EGNO does not define closed monoidal categories at all**, and its "internal Hom" at §7.9 is the module-category notion, a different thing. §10 records this so no later reader mines EGNO for item 1.
- **Kelly, *Basic Concepts*, §1.5 "Closed and biclosed monoidal categories" (pp. 13–15)** — free TAC reprint; the biclosed vocabulary and the internal-hom identities (1.23), (1.25)–(1.27), which are item 8. **Kelly numbers by equation, not by theorem** (§10).
- **Leinster, *Basic Category Theory*, Exercises 6.3.26–6.3.27 (printed
  pp. 175–176)** — Exercise 6.3.26 defines
  $\operatorname{Sub}:\mathcal A^{\mathrm{op}}\to\mathbf{Set}$, defines a
  subobject classifier as a representation
  $\operatorname{Sub}\cong H_\Omega$, and asks for the classifier $2$ in
  $\mathbf{Set}$: items 25–27. Exercise 6.3.27 gives the presheaf classifier,
  which is the B-page example. These exercises, not an unspecified topos
  source, control the exact statements; the surrounding elementary-topos
  theory remains denied by item 28 and §8 denial 9.

Exact ranges, verbatim headings and dispositions are in §10.

### Traps

1. **"Closed" without a side is ambiguous in the non-symmetric case.** Items 1 and 3 name left, right and biclosed, and item 4 supplies its symmetry hypothesis rather than borrowing it from `MA-15`.
2. **Mac Lane's "closed category" includes symmetry.** Quoting CWM VII.7's definition as the library's would silently strengthen every hypothesis on this page.
3. **EGNO is not a source for closed monoidal categories.** It has no such definition.
4. **The published exponential item is a B-leaf.** Items 10 and 12 are minted here for that reason (§2.2), and item 12's proof may not cite `ex-function-sets-as-exponential-representing-objects`.
5. **Item 8 is minted for `MA-17`.** If it is dropped or weakened, `MA-17` item 17 loses its construction; the two must be authored together or the dependency recorded.
6. **The subobject classifier is kept and the topos axioms are denied** (§8 denial 9). Item 28 states the boundary so a later reader does not read the denial as an oversight.

**Forward references: NONE.**

---

## MA-15. Braided and Symmetric Monoidal Categories

**page id** `braided-and-symmetric-monoidal-categories`
**`requires`** `strictification-and-mac-lanes-coherence-theorem`,
`monoidal-categories-and-monoidal-functors`, `free-groups-and-presentations`,
`symmetric-groups-and-the-sign-homomorphism`,
`conjugacy-and-simplicity-in-the-symmetric-groups`

The page the prior scaffold denied, and the denial was the mistake the owner's
2026-08-11 rule exists to prevent (§8, "deliberately NOT denied"). **Braided and
symmetric coherence are theorems**, in a correct restricted form, and the only
thing standing in the way was a group presentation — which is a lemma the library
can build, not a subject area it has not reached. §11 amendment 3 records what is
owed and to whom.

The restricted form matters more here than anywhere else in the block, because
**the symmetric statement is strong and the braided statement is not**, and the
two look alike. Mac Lane puts the difference plainly: in a braided category, for
any two objects there may be **infinitely many** canonical automorphisms of
$a\square b$ — $1,\gamma^2,\gamma^4,\dots,\gamma^{-2},\gamma^{-4},\dots$ — so a
subgroup of the braid group $B_2$ acts on $a\otimes b$ and **all diagrams in
$\gamma$ do not commute**. Item 21 is that observation as a numbered false
statement, and it is the page's sharpest.

### A-page items, in dependency order

**Braidings**

1. `def-braiding` — def. A natural isomorphism $c_{X,Y}:X\otimes Y\to Y\otimes X$, **natural in both variables**, satisfying the two hexagons. §7 #44. LANDMARK. **That $c$ is an isomorphism is part of the data and is not a consequence of the hexagons**, which is exactly what §7 #44 requires the Statement to say.
2. `def-braided-monoidal-category` — def.
3. `thm-the-inverse-braiding-is-a-braiding` — thm. Joyal–Street's observation, verbatim in substance: the second hexagon is the first with $c_{X,Y}$ replaced by $c^{-1}_{Y,X}$, so $c^{-1}$ is a braiding — **and it is generally a different one**. LANDMARK — it is why both hexagons are needed and why item 8 is a real theorem rather than a restatement.
4. `thm-the-braiding-is-compatible-with-the-unit` — thm. $\lambda_X\circ c_{X,\mathbf 1}=\rho_X$ and $\rho_X\circ c_{\mathbf 1,X}=\lambda_X$, and $c_{\mathbf 1,X}=c^{-1}_{X,\mathbf 1}$. **A convention split with real content: CWM XI.1 (6) imposes this as an axiom; EGNO Exercise 8.1.6 derives it.** The library **derives** it and item 4's Statement says so; §10 records both.
5. `thm-in-a-strict-braided-monoidal-category-the-braiding-satisfies-the-yang-baxter-equation` — thm. $(c\otimes 1)(1\otimes c)(c\otimes 1)=(1\otimes c)(c\otimes 1)(1\otimes c)$, the hexagons having degenerated to triangles by `MA-13` item 11. LANDMARK. *(Id free.)*
6. `def-symmetric-monoidal-category` — def. A braiding with $c_{Y,X}\circ c_{X,Y}=1_{X\otimes Y}$. LANDMARK.
7. `thm-in-the-presence-of-the-symmetry-axiom-one-hexagon-implies-the-other` — thm. Both sources state it — Joyal–Street, *"In the presence of S, observe that B2 is the inverse of B1 so that B2 is redundant"*, and CWM XI.1, *"For this case, either one of the hexagons (7) implies the other"*. LANDMARK — the axiom count genuinely drops when the symmetry is imposed, and item 3 is why it does not drop before.
8. `cex-a-braided-monoidal-category-need-not-be-symmetric` — cex. The braid category of item 13: *"The symmetry requirement $\gamma^2=1$ fails, but both hexagons apply."* LANDMARK-grade.
9. `def-braided-and-symmetric-monoidal-functor` — def. A monoidal functor with $J_{Y,X}\circ c'_{FX,FY}=F(c_{X,Y})\circ J_{X,Y}$.
10. `rem-being-braided-is-a-property-of-a-monoidal-functor-and-not-a-structure` — rem. EGNO's Remark 8.1.8, quoted: *"a monoidal functor is a functor with an additional structure, while for a monoidal functor to be braided is a property."* It is the same structure-versus-property theme as `MA-7` and `MA-8`, and stating it keeps the block's voice consistent.
11. `def-the-cartesian-braiding-is-a-symmetry` — thm. Every cartesian monoidal category (`MA-12` item 7) is symmetric, with $c$ the canonical swap. LANDMARK — the example that makes the axiom legible, and it is free.
12. `thm-the-centre-of-a-braided-monoidal-category` — thm. The full subcategory of objects $X$ with $c_{Y,X}c_{X,Y}=1$ for all $Y$ is symmetric monoidal. **Verification instruction:** cheap and standard; the authoring Beta verifies closure under $\otimes$ before committing.

**The braid group and the braid category**

13. `def-braid-group-by-the-artin-presentation` — def. $B_n$ is the group with generators $\sigma_1,\dots,\sigma_{n-1}$ and relations $\sigma_i\sigma_{i+1}\sigma_i=\sigma_{i+1}\sigma_i\sigma_{i+1}$ and $\sigma_i\sigma_j=\sigma_j\sigma_i$ for $|i-j|\ne1$. LANDMARK. **Minted here, by presentation, citing the published `def-group-presentation` and `def-relators-relations-and-finite-presentations`** — which is why this page costs two items rather than a topology track. §11 amendment 3 offers the id to `group-theory`. *(Id free: `braid` appears nowhere in the corpus.)*
14. `rem-the-topological-description-of-the-braid-group` — rem. $B_n\cong\pi_1$ of the space of $n$-tuples of distinct points of the plane, cited to CWM XI.4 with `proved_here: false`, because configuration spaces are not in the library. **Non-load-bearing**: item 13 is the definition and nothing depends on the remark.
15. `thm-the-braid-group-surjects-onto-the-symmetric-group` — thm. $\sigma_i\mapsto\tau_i$, the adjacent transposition. Cites the published `thm-adjacent-transpositions-generate-the-symmetric-group` for surjectivity. LANDMARK.
16. `thm-the-symmetric-group-has-the-coxeter-presentation` — thm. $S_n$ is presented by $\tau_1,\dots,\tau_{n-1}$ with $\tau_i^2=1$, $(\tau_i\tau_{i+1})^3=1$ and $\tau_i\tau_j=\tau_j\tau_i$ for $|i-j|\ne1$. LANDMARK, and **it is the exact group-theoretic input symmetric coherence consumes** — Mac Lane's proof of CWM XI.1 Theorem 1 matches $\tau_i^2=1$ to the symmetry axiom, the third relation to naturality of $\gamma$, and $(\tau_1\tau_2)^3=1$ to the hexagons. **Verification instruction and seam:** the library publishes generation but not the relations. §11 amendment 3 offers this theorem to `abstract-algebra`/`group-theory`; **if neither takes it, this page proves it**, since coherence needs it and dropping a valuable result for want of a lemma is not a permitted disposition.
17. `def-the-braid-category` — def. Objects the natural numbers, morphisms $m\to n$ the elements of $B_n$ when $m=n$ and none otherwise, $\square=+$. **Strict monoidal and braided, and not symmetric.** LANDMARK.

**Coherence**

18. `thm-symmetric-coherence` — thm. In a symmetric monoidal category there is a unique canonical natural isomorphism between any two **permuted** words of the same length, closed under composition and $\otimes$. CWM XI.1 Theorem 1. LANDMARK. §11 amendment 3.
19. `cor-unbracketed-and-unordered-tensor-strings-are-well-defined-in-a-symmetric-monoidal-category` — cor. The symmetric analogue of `MA-13` item 15, and the reason the symmetric case feels like ordinary algebra.
20. `thm-a-symmetric-monoidal-closed-category-has-one-internal-hom` — thm. Discharges `MA-14` item 4's hypothesis: the left and right closures agree. **Stated here, not there**, so that `MA-14` carries no forward reference.
21. `thm-braided-coherence-fails-in-the-symmetric-form` — thm. In a braided monoidal category $1,\gamma^2,\gamma^4,\dots$ are canonical endomorphisms of $a\otimes b$ that need not coincide, so a subgroup of $B_2$ acts and not all formal diagrams commute. LANDMARK. **This is a theorem and not merely a caution**, and it is what forces item 22's shape.
22. `thm-braided-coherence` — thm. For a braided monoidal category $\mathcal M$, evaluation at the object $1$ is an **equivalence** between the category of strong braided monoidal functors from the braid category to $\mathcal M$ and the underlying category $\mathcal M_0$; and when $\mathcal M$ is strict this restricts to an **isomorphism**. LANDMARK. CWM XI.5 Theorem 1 and Joyal–Street Theorem 4. Equivalently: **the braid category is the free braided strict monoidal category on one generator.**
23. `cor-two-canonical-composites-agree-exactly-when-their-underlying-braids-agree` — cor. CWM XI.5 Theorem 2. LANDMARK — the working form, and the honest replacement for the symmetric slogan: *"to test whether a diagram built from $\alpha,\rho,\lambda,c$ commutes in all braided monoidal categories it suffices to see that each leg has the same underlying braid."*
24. `rem-the-two-coherence-theorems-side-by-side` — rem. Symmetric coherence is a statement about $S_n$; braided coherence is the same statement with $B_n$ in place of $S_n$, and $S_n$ is the quotient of $B_n$ by $\sigma_i^2=1$ (items 13, 15, 16). Reading them as one theorem with two groups is the cleanest way to see why one is strong and the other is not.
25. `fs-every-braided-monoidal-category-is-equivalent-to-a-strict-commutative-one` — false statement. Joyal–Street refute it directly: *"it is **not** true that every braided (or even symmetric) monoidal category is equivalent in BMC to a commutative monoid in Cat. The reason is that $c:A\otimes A\to A\otimes A$ is generally not the identity … and this distinction is preserved by equivalence."* **Strictification kills $\alpha,\lambda,\rho$; it never kills $c$**, and that sentence belongs on the page.

**Consequences**

26. `thm-a-braided-monoidal-category-is-monoidally-equivalent-to-a-strict-braided-one` — thm. Strictification (`MA-13` item 11) carries the braiding along; **the result is strict monoidal and remains non-strictly braided**, per item 25.
27. `thm-monoid-objects-in-a-braided-monoidal-category-form-a-monoidal-category` — thm. The tensor product of monoid objects $A,B$ uses
   $(1_A\otimes c_{B,A}\otimes1_B)$ to interchange the middle factors before
   applying $\mu_A\otimes\mu_B$; this makes $\operatorname{Mon}(\mathcal C)$
   monoidal for every braided base (EGNO Ex. 8.8.2(iv); Aguiar–Mahajan
   §1.2.2). LANDMARK. In general the induced monoidal category is **not
   braided** (Aguiar–Mahajan §1.2.7).
28. `cor-monoid-objects-in-a-symmetric-monoidal-category-form-a-symmetric-monoidal-category` — cor. If the base braiding is a symmetry it is a monoid morphism, so the induced structure is symmetric; commutative monoid objects in $(\mathbf{Set},\times)$ are the ordinary commutative monoids.
29. `thm-a-symmetric-monoidal-category-with-finite-coproducts-of-monoid-objects` — thm. **CONTINGENT**; the authoring Beta keeps it only if it closes cheaply and records the disposition otherwise.

### `fs-` items (A page)

- `fs-every-diagram-built-from-the-associator-and-the-braiding-commutes` — **the page's sharpest**, refuted by items 21 and 23. It is *true* symmetrically and *false* braidedly, which is precisely why it is dangerous.
Item 25 is itself the page's principal false-statement item and is not minted a
second time in this list.
- `fs-a-braiding-is-automatically-invertible-given-the-hexagons` — §7 #44; invertibility is data.
- `fs-a-braided-monoidal-category-satisfying-one-hexagon-satisfies-the-other` — true under the symmetry axiom (item 7), false without it (item 3).
- `fs-the-braid-group-on-n-strands-is-the-symmetric-group-on-n-letters` — item 15 gives a surjection with a large kernel; item 8 is the categorical shadow of the same error.

### B page — `braided-and-symmetric-monoidal-categories-examples`

`ex-the-swap-braiding-on-sets` · `ex-the-braid-group-on-three-strands` · `ex-the-hexagon-checked-for-cartesian-products` · `ex-a-braiding-on-graded-vector-spaces-with-a-sign` *(CONTINGENT on `tensor-products-of-modules`)* · `cex-the-braid-category-is-not-symmetric` · `ex-two-canonical-maps-with-different-underlying-braids` · `ex-commutative-monoid-objects-in-sets-are-commutative-monoids`.

### Sources

- **Mac Lane, *CWM* 2nd ed., Ch XI "Symmetry and Braiding in Monoidal Categories" (pp. 251–266)** — **primary.** TOC verbatim: 1. Symmetric Monoidal Categories 251 · 2. Monoidal Functors 255 · 3. Strict Monoidal Categories 257 · 4. The Braid Groups $B_n$ and the Braid Category 260 · 5. Braided Coherence 263 · 6. Perspectives 266. Items 18 (Thm 1, §1), 13–17 (§4), 22–23 (Thms 1 and 2, §5). **The chapter's running head reads "Braidings" where its TOC reads "Braiding"** — a harmless discrepancy, recorded so a locator check does not read as a mismatch.
- **Joyal–Street, *Braided monoidal categories*, Macquarie Mathematics Report 860081 (Nov 1986), 54 pp.**, free at `http://science.mq.edu.au/~street/JS1.pdf`. §1 Braidings (B1, B2, S, B3–B7, Proposition 1), §3 Multiplications, **§4 Coherence for braidings (Theorem 4)**. **Second independent treatment**, and the version CWM XI.5 actually follows — Mac Lane's own Note says his proof follows the 1986 preprint and *"was not introduced in the subsequent published paper [1993]"*, so the report is the right citation and not the Advances paper.
- **EGNO §8.1 "Definition of a braided category" (pp. 195–197)** — Def. 8.1.1 and the hexagons (8.1)–(8.2), Exercise 8.1.6 (item 4), Def. 8.1.7 and Remark 8.1.8 (items 9–10), Prop. 8.1.10 (item 5).
- **Mac Lane 1963, §4 "Higher Commutativity Laws"** — Theorems 4.1–4.2 and the hexagon (4.5); the origin of symmetric coherence.
- **Etingof et al., MIT 18.769 notes** — the open lecture-note set, third treatment.

Exact ranges, verbatim headings and dispositions are in §10.

### Traps

1. **The braided theorem is not the symmetric theorem with a word changed.** Items 21–23. Stating braided coherence as "all diagrams commute" is a false statement with an infinite family of witnesses.
2. **Mac Lane's hexagons are written with his reversed associator** (§4.2). Transposing them is not optional, and it swaps which hexagon is "the first" — which matters because item 3 says the second is the first with $c^{-1}$.
3. **CWM makes the unit compatibility an axiom; EGNO derives it.** Item 4 derives it and says so; a page that also imposes it has an axiom too many, which is harmless but is not what it claims.
4. **Items 13 and 16 are group theory minted by a category-theory page.** §11 amendment 3 offers both to the algebra tracks. **If they take them, this page cites; if not, this page proves them.** Either way coherence is not dropped.
5. **Item 15's kernel is not trivial.** The pure braid group is where the braided/symmetric gap lives, and the `fs-` guard is the fifth one above.
6. **Item 27 needs a braiding, not a symmetry.** The symmetry is needed only to
   make the induced monoidal category of monoids symmetric; a nonsymmetric
   braiding already supplies the interchange, but does not generally braid
   monoid objects. EGNO Ex. 8.8.2(iv) and Aguiar–Mahajan §1.2.2/§1.2.7 are the
   controlling sources.

**Forward references: NONE.**

---

## MA-16. Duality and Rigidity in Monoidal Categories

**page id** `duality-and-rigidity-in-monoidal-categories`
**`requires`** `braided-and-symmetric-monoidal-categories`,
`strictification-and-mac-lanes-coherence-theorem`,
`adjunctions-units-and-counits`, `abelian-categories`,
`dual-spaces-bilinear-forms-and-inertia`

Duality is where the monoidal block reconnects to `MA-1`: **a dual object in the
endofunctor category is exactly an adjoint** (item 9), and the zig-zag identities
are the triangle identities. That single observation is the best argument in the
block that the two halves of this track belong in one file.

The page carries the block's most hypothesis-sensitive material. **A trace cannot
be written in a bare monoidal category at all**, and §7 #46's phrasing — "needs a
braiding or a pivotal structure" — is too generous: braiding alone is *not*
enough. The exact ladder, verified against EGNO, is item 20's, and §7 obligation
#54 records the correction.

§8 denial 6 fixes the ceiling: EGNO Chapters 1–2 and the rigidity/pivotal material
are in reach; fusion, multifusion and modular tensor categories are not, because
they need semisimple abelian categories, $k$-linear local finiteness and
Perron–Frobenius theory. **EGNO Cor. 4.7.13 — that dimensions are algebraic
integers — is specifically denied inside this page.**

### A-page items, in dependency order

1. `def-left-dual-and-right-dual-object` — def. $X^\vee$ is a **left dual** of $X$ when there are $\operatorname{ev}:X^\vee\otimes X\to\mathbf 1$ and $\operatorname{coev}:\mathbf 1\to X\otimes X^\vee$ whose two composites — through $\alpha$ and the unitors, written explicitly — are the identities of $X$ and $X^\vee$. A **right dual** ${}^\vee X$ is the mirror notion with $\operatorname{ev}':X\otimes{}^\vee X\to\mathbf 1$. LANDMARK. §7 #45. **Left and right duals are different data in a general monoidal category and this page never conflates them.**
2. `def-the-zig-zag-identities` — def. The two composites of item 1, named, so that item 9's comparison with `MA-1`'s triangle identities can be by citation.
3. `rem-which-side-the-word-left-refers-to` — rem. **A real trap.** EGNO's *left* dual $X^\vee$ sits on the **left** of its evaluation, $X^\vee\otimes X\to\mathbf 1$; sources naming duals by the side on which the dual object is adjoint reverse this. The library adopts EGNO's convention and the remark states it in one line so no later page has to reconstruct it. §10.
4. `thm-a-left-dual-of-an-object-has-that-object-as-a-right-dual` — thm. And ${}^\vee(X^\vee)\cong X\cong({}^\vee X)^\vee$. EGNO Remark 2.10.3.
5. `thm-the-unit-is-self-dual` — thm. $\mathbf 1^\vee={}^\vee\mathbf 1=\mathbf 1$, with evaluation and coevaluation the unit isomorphism and its inverse.
6. `thm-reversing-the-tensor-product-exchanges-left-and-right-duals` — thm. Cites `MA-12` item 6, and it is why that item was minted there.
7. `thm-duals-are-unique-up-to-a-unique-compatible-isomorphism` — thm. Two left duals of $X$ differ by a **unique** isomorphism commuting with both $\operatorname{ev}$ and $\operatorname{coev}$. LANDMARK. §7 #45 — **this is what licenses the notation $X^\vee$**, and without it the definite article is unearned.
8. `thm-duality-yields-adjunctions-of-tensoring-functors` — thm. $\operatorname{Hom}(U\otimes V,W)\cong\operatorname{Hom}(U,W\otimes V^\vee)$ and $\operatorname{Hom}(V^\vee\otimes U,W)\cong\operatorname{Hom}(U,V\otimes W)$; equivalently $V^\vee\otimes-$ is left adjoint to $V\otimes-$. LANDMARK. Cites `MA-1` item 5.
9. `thm-a-dual-object-in-the-endofunctor-category-is-an-adjoint-functor` — thm. Fix $F\otimes G:=F\circ G$. Then a left dual $L$ of $F$ has evaluation $LF\Rightarrow1$ and coevaluation $1\Rightarrow FL$, exactly the counit and unit of $L\dashv F$; a right dual $R$ is exactly $F\dashv R$. The zig-zags are the triangle identities of `MA-1` item 1 (EGNO Ex. 2.10.4). For a large $\mathcal C$ this is stated as a direct schema about endofunctors, not by forming an object $\operatorname{End}(\mathcal C)$. LANDMARK.
10. `cor-a-second-proof-that-adjoints-are-unique` — cor. Item 7 applied through item 9 recovers `MA-1` item 13. `[AI-GEN CANDIDATE — direct corollary]` Directly verifiable, never a `deps` target; it is stated as a corollary and the original theorem keeps the dependency edges.
11. `def-rigid-object-and-rigid-monoidal-category` — def. An object with both a left and a right dual; a category in which every object is rigid. LANDMARK. **Joyal–Street's word for the same notion is "compact"**, recorded in §10.
12. `cex-not-every-monoidal-category-is-rigid` — cex. EGNO Example 2.10.12: the category of **all** vector spaces over a field is not rigid, and the proof is explicit — an infinite-dimensional space has no dual in this sense. LANDMARK-grade, and it cites the published `dual-spaces-bilinear-forms-and-inertia` material and `thm-canonical-map-to-double-dual-is-surjective-iff-finite-dimensional`, which is exactly the published statement that makes the failure visible.
13. `thm-finite-dimensional-vector-spaces-are-rigid` — thm. **CONTINGENT** on `tensor-products-of-modules` (§11 amendment 1) for the monoidal structure; the duals, evaluation and coevaluation are then the published dual-space material. LANDMARK if it lands — it is the motivating example and it makes items 1–11 concrete.
14. `def-the-dual-of-a-morphism` — def. $f^\vee:Y^\vee\to X^\vee$, and functoriality: $(-)^\vee:\mathcal C^{\mathrm{op}}\to\mathcal C$ is a functor, contravariant and monoidal in the appropriate sense.
15. `thm-the-double-dual-is-a-monoidal-functor` — thm. $X\mapsto X^{\vee\vee}$ is a monoidal endofunctor. *(Namespaced: `def-canonical-map-to-the-double-dual` and `thm-canonical-map-to-double-dual-is-injective` are published for vector spaces.)*
16. `cex-an-object-need-not-be-isomorphic-to-its-double-dual` — cex. EGNO records that $X\mapsto X^{\vee\vee}$ and $X\mapsto{}^{\vee\vee}X$ may be nontrivial and that $V^\vee$ and ${}^\vee V$ need not be isomorphic. **Verification instruction:** the authoring Beta supplies a checked witness or states the item as a `rem-` citing EGNO with `proved_here: false`; it does not assert a witness this scaffold has not verified.
17. `thm-in-a-rigid-category-every-morphism-of-monoidal-functors-is-an-isomorphism` — thm. EGNO Exercise 2.10.15, with EGNO's Remark 2.5.6 recording that it is **false without rigidity**. LANDMARK — a striking theorem and a cheap one.
18. `thm-a-braided-rigid-category-has-a-drinfeld-morphism` — thm. The natural morphism $u_X:X\to X^{\vee\vee}$ built from the braiding and the duality data, and that it is an isomorphism. **Verification instruction:** the authoring Beta follows EGNO §8.10 and records the derivation; if it does not close, items 18–21 drop to `rem-` form together and the drop is recorded as a block.

**Traces and dimensions — the hypothesis ladder**

19. `def-the-categorical-trace-of-a-morphism-into-the-double-dual` — def. For $\mathcal C$ **rigid** and $a\in\operatorname{Hom}(V,V^{\vee\vee})$, $\operatorname{Tr}_L(a)$ is the composite $\mathbf 1\to V\otimes V^\vee\to V^{\vee\vee}\otimes V^\vee\to\mathbf 1$; and $\operatorname{Tr}_R$ dually. LANDMARK. §7 #46. *(Namespaced: `def-trace-of-a-square-matrix` and `def-trace-of-an-endomorphism` are published and are the linear-algebra notions.)* **The input is a morphism $V\to V^{\vee\vee}$, not an endomorphism** — that is the whole content of the hypothesis ladder.
20. `rem-what-is-needed-before-a-trace-can-be-written` — rem. **REQUIRED, and it corrects §7 #46** (§7 obligation #54). The ladder, verified: **rigidity** is needed to type $\operatorname{Tr}$ at all; **a pivotal structure** is needed to trace an *endomorphism*, since it supplies the isomorphism $V\cong V^{\vee\vee}$; **sphericality** is needed for $\operatorname{Tr}_L=\operatorname{Tr}_R$; and **a braiding alone gives none of this** — it gives the Drinfeld morphism of item 18, and one needs a **twist** on top of it before $u_X\theta_X$ is a pivotal structure. A "trace in a bare monoidal category" is not defined, and a "trace from a braiding" is not defined either.
21. `def-pivotal-structure` — def. An isomorphism of monoidal functors $a_X:X\xrightarrow{\sim}X^{\vee\vee}$, i.e. a natural family with $a_{X\otimes Y}=a_X\otimes a_Y$. LANDMARK.
22. `def-the-dimension-of-an-object-relative-to-a-pivotal-structure` — def. $\dim_a(X):=\operatorname{Tr}(a_X)\in\operatorname{End}(\mathbf 1)$. **The dependence on $a$ is in the notation and in the Statement**, because the set of pivotal structures is a torsor over the monoidal automorphisms of the identity and the dimension genuinely moves with it. *(Namespaced: the published `dimension` ids are all linear-algebraic.)*
23. `def-spherical-structure` — def. A pivotal structure with $\dim_a(V)=\dim_a(V^\vee)$ for every $V$.
24. `thm-in-a-spherical-category-the-left-and-right-traces-agree` — thm. $\operatorname{Tr}_L(a_Vx)=\operatorname{Tr}_R(xa_V^{-1})$. EGNO Thm 4.7.15. LANDMARK.
25. `thm-basic-properties-of-the-categorical-trace` — thm. $\operatorname{Tr}_L(a)=\operatorname{Tr}_R(a^\vee)$; additivity over biproducts, citing `MA-7` item 26; multiplicativity $\operatorname{Tr}_L(a\otimes b)=\operatorname{Tr}_L(a)\operatorname{Tr}_L(b)$; and cyclicity in the form $\operatorname{Tr}_L(ac)=\operatorname{Tr}_L(c^{\vee\vee}a)$ — **note the double dual, which is the categorical trace's replacement for naive cyclicity**.
26. `rem-the-exact-sequence-additivity-of-trace-and-its-missing-hypotheses` — rem. EGNO Prop. 4.7.5 proves the following **in a multitensor category**: if $a:V\to V^{\vee\vee}$ and $W\subseteq V$ satisfies $a(W)\subseteq W^{\vee\vee}$, so that $a$ restricts to $W$ and descends to $V/W$, then
   $\operatorname{Tr}_L(a)=\operatorname{Tr}_L(a|_W)+\operatorname{Tr}_L(\bar a)$,
   and dually for the right trace. A multitensor category includes locally finite
   $k$-linear abelian rigidity and a biexact tensor product. Those hypotheses are
   not available from the hypotheses of this page alone. The library records the
   exact theorem here with `proved_here: false` and **does not** claim the broader
   false-to-source form for an arbitrary rigid abelian monoidal category. Nothing
   depends on it; the dedicated tensor/fusion pair develops the missing ambient
   hypotheses independently rather than serving as a forward dependency.
27. `def-twist-and-ribbon-structure` — def. $\theta\in\operatorname{Aut}(\mathrm{id})$ with $\theta_{X\otimes Y}=(\theta_X\otimes\theta_Y)\circ c_{Y,X}\circ c_{X,Y}$; a **ribbon structure** additionally has $(\theta_X)^\vee=\theta_{X^\vee}$. LANDMARK.
28. `thm-a-twist-on-a-braided-rigid-category-is-the-same-thing-as-a-pivotal-structure-of-drinfeld-type` — thm. $\psi_X=u_X\theta_X$ is a pivotal structure if and only if $\theta$ is a twist. EGNO §8.10. LANDMARK — item 20's ladder, made into a theorem.
29. `rem-rigidity-alone-does-not-make-a-tensor-category` — rem. EGNO's *tensor category* is *"a locally finite $k$-linear abelian rigid monoidal category"* over an algebraically closed field with $\operatorname{End}(\mathbf 1)\cong k$, and fusion adds finiteness and semisimplicity. **The definition is quoted with every hypothesis**; this page has only rigidity, so it cannot silently use the stronger term. The advanced Perron–Frobenius, centre, module-category and reconstruction theory remains denied by §8 denial 6 even after the foundational tensor/fusion pair is built. **EGNO Cor. 4.7.13 is specifically deferred.**

### `fs-` items (A page)

- `fs-a-trace-can-be-defined-for-an-endomorphism-in-any-monoidal-category` — **the page's sharpest**, refuted by item 20's ladder.
- `fs-a-braiding-suffices-to-define-a-trace` — the near-miss, and the one §7 #46 as written would have licensed.
- `fs-left-and-right-duals-of-an-object-are-isomorphic` — item 16.
- `fs-every-monoidal-category-is-rigid` — item 12.
- `fs-the-left-and-right-traces-always-agree` — item 24's hypothesis is sphericality.
- `fs-the-dimension-of-an-object-is-independent-of-the-pivotal-structure` — item 22.

### B page — `duality-and-rigidity-in-monoidal-categories-examples`

`ex-the-dual-of-a-finite-dimensional-vector-space-as-a-categorical-dual` · `ex-the-zig-zag-identities-checked-in-finite-dimensional-vector-spaces` · `ex-the-categorical-trace-of-a-linear-endomorphism-is-its-matrix-trace` *(cites the published `def-trace-of-a-square-matrix`)* · `ex-the-dimension-of-a-vector-space-is-its-linear-dimension` · `cex-an-infinite-dimensional-vector-space-has-no-dual-object` · `ex-an-adjunction-read-as-a-duality-of-endofunctors` · `ex-a-symmetric-monoidal-category-in-which-every-object-is-self-dual`.

### Sources

- **EGNO §2.10 "Rigid monoidal categories" (pp. 40–43), §4.7 "Quantum traces, pivotal and spherical categories" (pp. 73–76), §8.10 "Ribbon monoidal categories" (pp. 216–218)** — **primary throughout.** Defs. 2.10.1–2.10.2 with the zig-zags (2.43)–(2.46), Remark 2.10.3, Prop. 2.10.5, Prop. 2.10.8, Remark 2.10.9, Exercise 2.10.4, Def. 2.10.11, Example 2.10.12, Exercise 2.10.15; Def. 4.7.1, Prop. 4.7.3, Prop. 4.7.5, Def. 4.7.7, Def. 4.7.11, Def. 4.7.14, Thm. 4.7.15, Exercise 4.7.16; Def. 8.10.1, Prop. 8.10.6 and (8.35).
- **EGNO §4.1 (p. 65)** — Def. 4.1.1, quoted in item 29 for the boundary, and Def. 4.2.3 for ring/multiring categories.
- **Joyal–Street 1986** — for "compact" as the alternative name (report p. vi) and the braided-duality material.
- **Etingof et al., MIT 18.769 notes, §§1.10, 1.37–1.39, 1.41** — rigid monoidal categories, quantum traces, pivotal categories and dimensions, spherical categories, and the isomorphism $V^{\ast\ast}\cong V$. The open lecture-note set and the second independent treatment.
- **Mac Lane, *CWM*** — **not a source for this page.** CWM develops no duality theory for monoidal categories, and §10 records that so no later reader hunts for it.

Exact ranges, verbatim headings and dispositions are in §10.

### Traps

1. **§7 #46 as written is too generous** and item 20 corrects it; §7 obligation #54 records the correction. Braiding alone gives no trace.
2. **"Left dual" names a side, and the sources do not all mean the same side.** Item 3.
3. **Three published ids collide** — `def-trace-of-a-square-matrix`, `def-trace-of-an-endomorphism` and `def-canonical-map-to-the-double-dual` are all taken by linear algebra. Every item here is namespaced, and the linear-algebra items are cited as the instances on the B page.
4. **Cyclicity of the categorical trace carries a double dual.** Item 25. Writing $\operatorname{Tr}(ac)=\operatorname{Tr}(ca)$ is false in general.
5. **Items 13, 18 and 26 are CONTINGENT or carry verification instructions.** The page is authorable without item 13 — items 1–12 and 19–25 need only the general theory — but it loses its motivating example, and that loss is recorded rather than absorbed.
6. **The phrase "tensor category" appears only with EGNO's hypotheses attached**: item 29 fixes the boundary, and `MA-18` develops the properly sourced stronger theory. It is never used as a synonym for "monoidal category" (§4.6).

**Forward references: NONE.**

---

## MA-17. Enriched Categories

**page id** `enriched-categories`
**`requires`** `closed-monoidal-categories-and-the-internal-hom`,
`braided-and-symmetric-monoidal-categories`,
`strictification-and-mac-lanes-coherence-theorem`,
`preadditive-and-additive-categories-and-biproducts`,
`ends-coends-and-weighted-limits`, `universal-properties-and-the-yoneda-lemma`

The page that closes the track. It sits **after** the additive page on purpose:
the identification of a preadditive category with an $\mathbf{Ab}$-enriched
one is the payoff, and putting enrichment first would force `MA-7` to
forward-reference it. It also cannot be written before `MA-13`, because the
associativity and unit conditions for a $\mathcal V$-category are diagrams **in
$\mathcal V$**, and writing them unambiguously is exactly what coherence licenses
(§7 #47).

**Kelly's hypothesis ladder is followed rather than flattened**, because the
sources disagree about it and the disagreement is real. Kelly defines
$\mathcal V$-category, $\mathcal V$-functor and $\mathcal V$-natural
transformation for a **merely monoidal** $\mathcal V$ — his §1.2 is titled "The
2-category $\mathcal V\text{-}\mathbf{CAT}$ **for a monoidal** $\mathcal V$" — and
adds symmetry at §1.4, closedness at §1.6, completeness of $\mathcal V_0$ at
§2.1 and cocompleteness at §2.5. Riehl fixes symmetric monoidal closed up front,
as do the accessible enriched-adjoint papers used for item 40. **This page states each item with the weakest hypothesis Kelly
gives it**, and item 4 records what is lost without symmetry, in Kelly's own
words: one has §§1.2–1.3 and the Yoneda lemma of §1.9, *"but not its
extra-variable form"*.

### A-page items, in dependency order

**The definition**

1. `def-enriched-category` — def. For a monoidal $\mathcal V$: a **set** of objects, a hom-object $\mathcal A(A,B)$ in $\mathcal V$, a **composition morphism of $\mathcal V$** $M_{ABC}:\mathcal A(B,C)\otimes\mathcal A(A,B)\to\mathcal A(A,C)$, and an **identity element** $j_A:\mathbf 1\to\mathcal A(A,A)$, subject to associativity and unit diagrams **in $\mathcal V$** written with $\alpha,\lambda,\rho$ explicit. LANDMARK. §7 #47. The set-of-objects convention is deliberate: it keeps the resulting functor and transformation collections within the published foundation. Larger enriched categories may be discussed only as formula schemas.
2. `rem-the-order-of-the-tensor-factors-in-composition` — rem. Kelly writes $\mathcal A(B,C)\otimes\mathcal A(A,B)\to\mathcal A(A,C)$, the classical order; some sources write the diagrammatic order. **Silently mixing the two corrupts every diagram on the page**, so the convention is fixed here and named. §10.
3. `def-enriched-functor` — def. A function on objects together with morphisms $T_{AB}:\mathcal A(A,B)\to\mathcal B(TA,TB)$ of $\mathcal V$ compatible with $M$ and $j$; **fully faithful** means each $T_{AB}$ is an isomorphism.
4. `rem-how-much-of-the-theory-needs-symmetry-closedness-and-completeness` — rem. **REQUIRED**, and it is the page's spine. Kelly's ladder, quoted: monoidal suffices for items 1–8; symmetry is added when $\mathcal V$-categories are to be tensored and for the extra-variable Yoneda; **closedness is needed as soon as $\mathcal V$ is to be a $\mathcal V$-category, representables are wanted, or weights are taken** (weights are $\mathcal V$-functors into $\mathcal V$). Completeness of $\mathcal V_0$ is needed for general small enriched functor-category hom-objects and general end constructions, **not** for Kelly's particular-end form of strong Yoneda in item 21, whose proof establishes that end directly. Without this remark every later Statement looks either over- or under-hypothesised.
5. `def-enriched-natural-transformation` — def. A family $\alpha_A:\mathbf 1\to\mathcal B(TA,SA)$ satisfying Kelly's $\mathcal V$-naturality condition. LANDMARK.
6. `thm-the-compact-square-form-of-enriched-naturality` — thm. Kelly's own repackaging: using the induced morphisms $\mathcal B(1,\alpha_B)$ and $\mathcal B(\alpha_A,1)$, the lozenge of item 5 becomes a commuting **square**. LANDMARK — **the two forms are the same condition and the page proves it rather than choosing one silently**, because Kelly and Cruttwell write the lozenge and Riehl writes the square.
7. `rem-enriched-naturality-is-strictly-stronger-than-ordinary-naturality` — rem. Riehl's warning, quoted: *"While the basic data of a $\mathcal V$-natural transformation is unenriched, the naturality condition is stronger than the unenriched one."* An item, because the data looking unenriched is exactly what makes the trap invisible.
8. `thm-enriched-categories-functors-and-natural-transformations-form-a-two-category` — thm. If $\mathcal V$ is locally small, $\mathcal V$-categories with a set of objects, enriched functors and enriched natural transformations form a locally small strict two-category, denoted $\mathcal V\text{-}\mathbf{Cat}$. This is a theorem schema, never an object $\mathcal V\text{-}\mathbf{CAT}$ of a forbidden ambient category of all large categories.

**The underlying ordinary category**

9. `def-the-underlying-ordinary-category-of-an-enriched-category` — def. $\mathcal A_0$ has the same set of objects and $\mathcal A_0(A,B):=\mathcal V_0(\mathbf 1,\mathcal A(A,B))$; equivalently its homs arise from enriched functors out of the unit $\mathcal V$-category $\mathbf I$. LANDMARK. §7 #48 — **that it is a category, and that the construction is functorial, are proofs**.
10. `thm-the-underlying-category-construction-is-a-two-functor` — thm. The assignments on enriched categories, functors and transformations define the schema $(-)_0:\mathcal V\text{-}\mathbf{Cat}\to\mathbf{Cat}$ for the set-object categories of item 8. No $\mathbf{CAT}$ is formed. §7 #48.
11. `rem-the-underlying-category-can-lose-information` — rem. **REQUIRED.** $\mathcal V_0(\mathbf 1,-)$ is **not faithful in general**: for $\mathcal V=\mathbf{Cat}$ it returns the set of objects and discards every 2-cell; for differential graded modules it returns the 0-cycles. Kelly's consequences, each worth stating: completeness of $\mathcal A$ is **strictly stronger** than completeness of $\mathcal A_0$; $T$ having a left adjoint is stronger than $T_0$ having one; and a small dense subcategory of one implies nothing about the other. LANDMARK-grade remark — without it every enriched statement reads as a restatement of an ordinary one.

**The examples that make the definition pay**

12. `thm-a-category-enriched-in-categories-is-exactly-a-small-object-strict-two-category-with-small-homs` — thm. For $\mathbf{Cat}$ with its cartesian monoidal structure (`MA-12` item 8), a $\mathbf{Cat}$-enriched category in item 1's sense is exactly a strict two-category with a **set of 0-cells** and **small hom-categories**. Both size clauses are load-bearing; the published `def-strict-two-category` itself imposes neither. The identity correspondence is proved via functors $\mathbf 1\to\mathcal K(A,A)$. §11 amendment 9.
13. `thm-a-category-enriched-in-a-preorder-is-a-preorder-and-one-enriched-in-sets-is-an-ordinary-category` — thm. The two degenerate cases, which are what make item 1 legible.
14. `thm-a-category-enriched-in-abelian-groups-is-exactly-a-preadditive-category` — thm. **The track's closing theorem.** LANDMARK. For $(\mathbf{Ab},\otimes_{\mathbb Z},\mathbb Z)$: a $\mathbf{Ab}$-enrichment is an abelian group structure on each hom-set with composition **bilinear**, and bilinearity is precisely what the universal property of $\otimes_{\mathbb Z}$ converts into the single morphism $\mathcal A(B,C)\otimes_{\mathbb Z}\mathcal A(A,B)\to\mathcal A(A,C)$ required by item 1. Cites `MA-7` item 1 for the unenriched side. **CONTINGENT on `tensor-products-of-modules`** supplying $\otimes_{\mathbb Z}$ and its universal property, and on `MA-12` item 15 making $\mathbf{Ab}$ monoidal (§11 amendment 1). **This is the single most expensive seam in the track**: the library currently has no tensor product of abelian groups at all, and without it item 14 cannot even be stated.
15. `cor-an-additive-category-is-an-ab-enriched-category-with-a-zero-object-and-finite-biproducts` — cor. Restates `MA-7` item 23 in enriched language; the loop `MA-7` promised is closed here and nowhere else.
16. `rem-the-commutative-monoid-case` — rem. **Flagged.** The analogous reading of `MA-7` items 17–20 — that a semiadditive category is a $\mathbf{CMon}$-enriched category — is stated **as a remark, not a theorem**, because this scaffold's source research did not find it in Kelly or Riehl, and the library does not assert an enriched identification it has not sourced. The **mathematics** of `MA-7` items 17–20 is separately sourced (Mac Lane Ex. VIII.2.4, Freyd Ex. 2A.2) and is unaffected. **Verification instruction:** the authoring Beta either finds a source and promotes this to a theorem, or leaves it as a remark naming the gap. §12, seam S-6.
17. `thm-a-closed-monoidal-category-is-enriched-in-itself` — thm. $\mathcal V$ becomes a $\mathcal V$-category with hom-objects the internal homs, composition **`MA-14` item 8**, and identity from **`MA-14` item 9**. LANDMARK — this is why `MA-14` minted those two items, and it is the first place closedness is genuinely required (item 4).
18. `def-representable-enriched-functor` — def. $\mathcal A(K,-):\mathcal A\to\mathcal V$, available by item 17.
19. `thm-a-category-enriched-in-the-two-element-lattice-is-a-preordered-set` — thm. Kelly's own list of degenerate cases; cheap, and it is the example that shows enrichment is not always "extra structure on a category".

**The enriched Yoneda lemma**

20. `thm-weak-enriched-yoneda-lemma` — thm. A **bijection of sets** between the $\mathcal V$-natural transformations $\mathcal A(K,-)\Rightarrow F$ and the elements $\mathbf 1\to FK$, under: $\mathcal V$ symmetric monoidal closed with $\mathcal V_0$ locally small. **No completeness and no smallness of $\mathcal A$.** LANDMARK.
21. `thm-strong-enriched-yoneda-lemma-as-a-particular-end` — thm. For any $\mathcal V$-category $\mathcal A$, $F:\mathcal A\to\mathcal V$ and $K\in\mathcal A$, Kelly's map exhibits $FK$ as the **particular end** $\int_A[\mathcal A(K,A),FA]$, hence gives an isomorphism in $\mathcal V$. Kelly (2.30)–(2.33) explicitly imposes no smallness condition on $\mathcal A$ for this particular end: Yoneda proves its existence. It does **not** thereby construct the whole enriched functor category for large $\mathcal A$. LANDMARK.
22. `rem-the-particular-yoneda-end-and-the-enriched-functor-category-are-different-size-claims` — rem. The weak form is the underlying set-bijection. For **small** $\mathcal A$ and complete $\mathcal V_0$, the particular end is the hom-object of the enriched functor category $[\mathcal A,\mathcal V]$; for large $\mathcal A$ only item 21's particular end is asserted. This replaces the false blanket claim that completeness is needed for Yoneda itself.
23. `cor-the-enriched-yoneda-embedding-is-fully-faithful` — cor. In the particular-end form for arbitrary $\mathcal A$, and as a fully faithful enriched functor into $[\mathcal A^{\mathrm{op}},\mathcal V]$ when $\mathcal A$ is small and the required ends exist.

**Tensors, cotensors and enriched limits**

24. `def-cotensor-and-tensor` — def. The **cotensor** $X\pitchfork C$ by $\mathcal B(B,X\pitchfork C)\cong[X,\mathcal B(B,C)]$, and the **tensor** $X\otimes C$ by $\mathcal B(X\otimes C,B)\cong[X,\mathcal B(C,B)]$. LANDMARK. Both are the case of a weighted limit over the unit $\mathcal V$-category, so `MA-5` item 15's definition is cited and not repeated. **In the $\mathbf{Set}$ case the cotensor is the power and the tensor is the copower** — and "copower = tensor" is easy to get backwards, so the item says it explicitly.
25. `cex-a-bijection-of-underlying-hom-sets-does-not-establish-a-cotensor` — cex. Kelly's warning, with his own $\mathcal V=\mathbf{Cat}$, $X=\mathbf 2$ witness: the bijection obtained by applying $\mathcal V_0(\mathbf 1,-)$ to the defining isomorphism is **insufficient**, unless the cotensor is already known to exist or $\mathcal V_0(\mathbf 1,-)$ is conservative. LANDMARK-grade — it is item 11's failure of faithfulness biting a definition.
26. `def-enriched-weighted-limit` — def. The $\mathcal V$-enriched form of `MA-5` item 15, with $\mathcal V$-weights in place of $\mathbf{Set}$-weights. §7 #23 and `MA-5`'s ordering note; **this is where `MA-5` item 21 lands if it was moved.**
26a. `thm-the-free-enriched-category-two-adjunction` — thm. Under Kelly's standing hypotheses ($\mathcal V$ symmetric monoidal closed, $\mathcal V_0$ locally small and complete) and with $\mathcal V_0$ also cocomplete, the copower functor $E\mapsto E\cdot\mathbf 1=\coprod_E\mathbf 1$ induces a 2-adjunction $(-)_{\mathcal V}\dashv(-)_0$ between small ordinary categories and set-object $\mathcal V$-categories. For a small ordinary $\mathcal L$, the source gives the **hom-category isomorphism** $[\mathcal L_{\mathcal V},\mathcal B]_0\cong[\mathcal L,\mathcal B_0]$ (Kelly §2.5, (2.38)–(2.40)). The adjunction itself is not claimed to be an isomorphism. LANDMARK. It is placed here because item 27 uses the free enriched category; this ordering is a dependency, not an expositional preference.
27. `def-conical-limit-in-an-enriched-category` — def. Defined through **free $\mathcal V$-categories**, not through constant functors — because of item 28.
28. `thm-there-is-in-general-no-constant-enriched-functor` — thm. LANDMARK. Kelly's §3.9, and the obstruction is exact: an object $B$ is a $\mathcal V$-functor $\mathbf I\to\mathcal B$, and there is a unique $\mathcal V$-functor $\mathcal K\to\mathbf 1$ into the terminal $\mathcal V$-category, but **no $\mathcal V$-functor $\mathbf 1\to\mathbf I$ unless $\mathbf 1$ is a retract of $\mathbf I$ in $\mathcal V_0$** — which fails for modules and for differential graded modules. It works when $\mathcal V$ is **cartesian closed**, because then $\mathbf 1=\mathbf I$.
29. `thm-conical-limits-do-not-suffice-in-the-enriched-setting` — thm. Kelly's §3.9, whose title is verbatim *"The inadequacy of conical limits"*: the canonical comparison is not in general an isomorphism, **and it fails already for $\mathcal V=\mathbf{Ab}$** — not merely for exotic bases. LANDMARK. §7 #23's justification, and the reason weights are not a generalisation for its own sake. **Discharges `MA-5` item 19's remark with a theorem.**
30. `thm-a-conical-limit-is-stronger-than-a-limit-in-the-underlying-category` — thm. With Riehl's $\mathbf{Cat}$-enriched witness, in which $b\cong b\times b$ holds in the underlying category while the conical product fails, because the hom-category is not isomorphic to its square. **Verification instruction:** the authoring Beta reproduces the witness before authoring.
31. `thm-when-a-category-is-tensored-every-limit-in-it-is-a-conical-enriched-limit` — thm. Riehl's Thm 7.5.3; the positive counterpart of item 30, and it is what makes conical limits usable in practice.
32. `thm-enriched-completeness-is-cotensors-plus-small-conical-limits` — thm. Kelly's Theorem 3.73: $\mathcal B$ is complete iff it admits cotensors and all small conical limits, and $T$ is continuous iff it preserves both. LANDMARK.
33. `rem-this-does-not-reduce-indexed-limits-to-conical-ones` — rem. Kelly's own caution, quoted: the reduction formulas *"do not 'reduce all indexed limits to conical limits and cotensor products' … The moral is that it is proper to recognize the most general (indexed) limit concept, while seeing the results above as simple tests for completeness."* Item 32 is a completeness test, not a definition of limit.

**Change of base**

34. `thm-a-lax-monoidal-functor-induces-a-change-of-base-on-enriched-categories` — thm. A lax monoidal $F:\mathcal V\to\mathcal W$ sends a $\mathcal V$-category to a $\mathcal W$-category with the same objects and hom-objects $F\mathcal A(A,B)$, **the composition and identity being supplied by the laxity constraints** — which is exactly why laxity is the right hypothesis (§7 #49). LANDMARK.
35. `thm-change-of-base-extends-to-functors-and-natural-transformations-and-is-a-two-functor` — thm. $F_\ast:\mathcal V\text{-}\mathbf{CAT}\to\mathcal W\text{-}\mathbf{CAT}$. §7 #49.
36. `cor-the-underlying-ordinary-category-is-an-instance-of-change-of-base` — cor. Because $\mathcal V_0(\mathbf 1,-)$ is lax monoidal. LANDMARK — it retires items 9–10 as a special case, and it is Riehl's observation: *"The point of course is that $\mathcal V(\ast,-)$ is lax monoidal."*
37. `rem-what-is-not-proved-about-change-of-base` — rem. §8 denial 13, with **Kelly's own reason quoted**: he declines the topic because *"a careful analysis of the 2-category of symmetric monoidal categories, symmetric monoidal functors, and symmetric monoidal natural transformations — including adjunctions therein and the dual concept of op-monoidal functor"* would be needed. **The page proves items 34–36 and denies the 2-categorical theory of change of base.** §12, seam S-4 is closed: Riehl's Lemma 3.4.3 and Remark 3.5.11 and Cruttwell's Props 4.2.1–4.2.3 and Thm 4.2.4 independently supply the construction with numbered results, so only the deeper theory is denied. Borceux vol. 2 §§6.4 locators are bibliographic leads and carry no provenance until checked against a lawful copy.
**Enriched adjunctions**

38. `def-enriched-adjunction` — def. A pair of $\mathcal V$-functors with a $\mathcal V$-natural isomorphism $\mathcal B(FA,B)\cong\mathcal A(A,GB)$ **of objects of $\mathcal V$** — which is strictly stronger than an adjunction of the underlying ordinary functors, by item 11. LANDMARK.
39. `thm-a-right-enriched-adjoint-preserves-weighted-limits` — thm. The enriched RAPL, proved from Kelly §1.11's enriched hom-isomorphism and §3.1's weighted universal property; it is `MA-1` item 24's analogue rather than its corollary. Borceux vol. 2 Prop. 6.7.3 is a secondary locator only.
40. `thm-enriched-adjoint-functor-theorem-for-cotensored-categories` — thm. Let $\mathcal V$ be closed symmetric monoidal, let $\mathcal A$ and $\mathcal B$ be cotensored $\mathcal V$-categories, and let $G:\mathcal B\to\mathcal A$ be a $\mathcal V$-functor. Then $G$ has a left $\mathcal V$-adjoint iff **(i)** $G$ preserves cotensors and **(ii)** the underlying ordinary functor $G_0$ has a left adjoint (Borceux vol. 2 Thm 6.7.6, as restated in the accessible TAC and Guillou–May sources). Dually, right enriched adjoints require both categories tensored, preservation of tensors, and an underlying right adjoint. LANDMARK. Cotensoredness alone is not enough.
41. `thm-a-category-is-tensored-exactly-when-every-covariant-hom-has-a-left-enriched-adjoint` — thm. And cotensored exactly when every contravariant hom does; this is the representability/adjunction form of Kelly §3.7, (3.42)–(3.44), using §1.11. Borceux vol. 2 §6.7.4 is a secondary locator only. Ties items 24 and 38 together.
42. `thm-every-enriched-functor-into-the-base-is-a-weighted-colimit-of-representables` — thm. For **small** $\mathcal A$, and when the displayed weighted colimit exists in the locally small base under the page's standing hypotheses, $F\cong\operatorname{colim}^F Y$ for the enriched Yoneda embedding $Y$. Kelly §§2.4, 3.10 and Riehl *CHT* §§7.3–7.4 control the statement and proof; Borceux vol. 2 Thm 6.6.18 is a secondary locator only. LANDMARK — **the enriched density theorem**, and the direct analogue of `MA-6` items 19–20. Neither a functor category on a large source nor an unlicensed existence assertion is hidden in the notation. It is the natural closing item of the track.

### `fs-` items (A page)

- `fs-a-conical-limit-in-an-enriched-category-is-just-a-limit-in-the-underlying-category` — **the page's sharpest**, refuted by items 29 and 30, and it fails for $\mathcal V=\mathbf{Ab}$.
- `fs-every-enriched-category-has-constant-enriched-functors` — item 28.
- `fs-the-underlying-ordinary-category-determines-the-enriched-category` — item 11.
- `fs-a-cat-enriched-category-is-the-same-thing-as-a-strict-two-category` — item 12's smallness clause; the unqualified claim is false.
- `fs-an-enriched-natural-transformation-is-a-natural-transformation-of-the-underlying-functors` — item 7.
- `fs-the-strong-enriched-yoneda-lemma-for-a-large-category-constructs-the-whole-enriched-functor-category` — refuted by items 21–23: Kelly constructs the particular representable-to-$F$ end without a smallness hypothesis, but that does not supply every hom-object, the object collection, or a functor category on a large source.
- `fs-a-monoidal-category-carries-at-most-one-symmetry` — Kelly's graded-module witness, where $c(x\otimes y)$ may be $y\otimes x$ or $(-1)^{pq}y\otimes x$; **true only when $\mathcal V_0(\mathbf 1,-)$ is faithful and $\mathcal V$ is closed**, and the item names both hypotheses.

### B page — `enriched-categories-examples`

`ex-a-two-category-as-a-cat-enriched-category` · `ex-a-preordered-set-as-a-category-enriched-in-the-two-element-lattice` · `ex-a-metric-space-as-an-enriched-category` *(Lawvere's example; the authoring Beta verifies the published metric material supports it and drops it with a record otherwise)* · `ex-a-ring-as-a-one-object-ab-enriched-category` *(CONTINGENT)* · `ex-the-underlying-category-of-a-cat-enriched-category-forgets-the-two-cells` · `ex-a-cotensor-computed-in-sets` · `cex-a-bijection-of-hom-sets-that-does-not-exhibit-a-cotensor` · `ex-change-of-base-along-the-underlying-set-functor`.

### Sources

- **Kelly, *Basic Concepts of Enriched Category Theory*, TAC Reprint 10, Chapters 1–3 (pp. 7–58)** — **primary throughout**, free at `http://www.tac.mta.ca/tac/reprints/articles/10/tr10.pdf`. Section headings verbatim: 1.1 Monoidal categories · 1.2 The 2-category $\mathcal V\text{-}\mathbf{CAT}$ for a monoidal $\mathcal V$ · 1.3 The 2-functor $()_0$ · 1.4 Symmetric monoidal categories · 1.5 Closed and biclosed monoidal categories · 1.6 $\mathcal V$ as a $\mathcal V$-category · 1.7 Extraordinary $\mathcal V$-naturality · 1.8 The $\mathcal V$-naturality of the canonical maps · 1.9 The (weak) Yoneda lemma · 1.10 Representability · 1.11 Adjunctions and equivalences; 2.1 Ends · 2.2 The functor-category · 2.3 The isomorphism $[\mathcal A\otimes\mathcal B,\mathcal C]\cong[\mathcal A,[\mathcal B,\mathcal C]]$ · 2.4 The (strong) Yoneda lemma · 2.5 The free $\mathcal V$-category · 2.6 Universe-enlargement; 3.1 Indexing types · … · **3.9 The inadequacy of conical limits** · 3.10 Ends and coends in a general $\mathcal V$-category · 3.11–3.12 universe enlargement. Load-bearing equations: **(1.3)–(1.4)** item 1, **(1.5)–(1.6)** item 3, **(1.7)** item 5, **(1.39)** item 6, (1.10)–(1.13) items 9–10, **(1.46)–(1.47)** item 20, **(2.31)** item 21, **(3.1)** item 26, **(3.42)–(3.43)** cotensor, **(3.44)** tensor, (3.45) item 25, **Theorem 3.73** item 32.
- **Riehl, *Categorical Homotopy Theory*, Ch 3 (pp. 25–44) and Ch 7 (pp. 79–96)** — free; Def. 3.3.1, Def. 3.4.5, **Lemma 3.4.3 (change of base)**, Def. 3.5.8, Prop. 3.5.10, **Remark 3.5.11**, Defs. 3.7.2–3.7.3, Lemma 7.3.5, Def. 7.4.1, **Example 7.5.2**, **Thm 7.5.3**, Cor. 7.6.4. **Second independent treatment.** Note: two-variable adjunctions are **not** in Ch 3 — Ch 3 has only a one-sentence Remark 3.7.4; the definition is §10.1 (10.1.1), Def. 10.1.3 and Prop. 10.1.4.
- **Cruttwell, *Normed Spaces and the Change of Base for Enriched Categories*** (Dalhousie PhD thesis, 2008), free at `https://www.reluctantm.com/gcruttw/publications/thesis4.pdf` — **the dedicated change-of-base source**, Ch 2 and **§4.2 Props 4.2.1–4.2.3 and Thm 4.2.4**, which he attributes to Eilenberg–Kelly. Items 34–36.
- **Riehl, *Category Theory in Context*, §E.5 (p. 257)** — the $\mathbf{Ab}$-enrichment statement in the book the library already cites throughout, with its footnote pointing at Kelly. Item 14.
- **Borceux, *Handbook of Categorical Algebra* vol. 2, Ch. 6 "Enriched category theory" (pp. 291–348)** — **bibliographic locator, not pair backing.** The body was not obtained from a legitimately open source, so this file quotes no Borceux wording and assigns no component provenance to it. Item 40's exact cotensor/preservation statement is controlled instead by Borceux–Quinteiro–Rosický and Guillou–May, both accessible; Kelly and Riehl are the two full independent treatments for the pair. The chapter/result numbers remain useful locators for a future author with lawful access, but must be checked against the book before citation.
- **Volume discipline: "Borceux Ch 6" without a volume number is ambiguous and wrong half the time.** **Vol 1 Ch 6 is "Flat functors and Cauchy completeness" (pp. 250–280)**; enriched category theory is **vol 2**. Every Borceux citation in this file names the volume.
- **Mac Lane, *CWM* — NOT a source for this page.** CWM develops no enriched category theory; §VII.7 "Closed Categories" runs about one page. Cite CWM for monoidal categories (VII.1–VII.2) and strict 2-categories (XII.3) only. §10 records this.

Exact ranges, verbatim headings and dispositions are in §10.

### Traps

1. **Kelly numbers by equation, not by theorem.** Chapters 1 and 2 contain **zero** numbered results; Chapter 3's complete list is Propositions 3.36, 3.37, 3.40, 3.41, 3.46, Theorem 3.73, Propositions 3.75, 3.76. **"Kelly Theorem 3.1" does not exist** — (3.1) is a displayed equation. Cite `Kelly §1.2, (1.3)–(1.4)`.
2. **Item 12's smallness clause is load-bearing.** Without it the theorem is false in the direction that matters, because the published `def-strict-two-category` imposes no smallness on its hom-categories.
3. **Item 14 is the track's most expensive contingency.** No tensor product of abelian groups exists in the library. If `tensor-products-of-modules` does not land above this page, item 14 cannot be stated at all — not weakened, not stated. §11 amendment 1 is written accordingly.
4. **Item 16 is a remark and stays one** until a source is found. The library does not assert an unsourced enriched identification, and `MA-7`'s mathematics does not depend on it.
5. **$(\mathcal A\otimes\mathcal B)_0$ is not $\mathcal A_0\times\mathcal B_0$** — there is only a canonical comparison functor. Relatedly, the monoidal product on $\mathcal V\text{-}\mathbf{Cat}$ is not the cartesian product unless $\mathcal V$ is cartesian monoidal.
6. **Two Yoneda lemmas, two hypothesis sets.** Item 22.
7. **$\mathbf{Top}$ is not a legitimate closed base** — $-\times Y$ has no right adjoint because it does not preserve regular epimorphisms. Any example on this page that wants a topological base must use a convenient category of spaces, and the library does not have one; the authoring Beta drops such examples and records the drop.

**Forward references: NONE.**

---

## MA-18. Tensor and Fusion Categories

**page id** `tensor-and-fusion-categories`
**`requires`** `duality-and-rigidity-in-monoidal-categories`,
`abelian-categories`,
`subobject-lattices-generators-and-the-grothendieck-axioms`,
`exactness-and-the-member-calculus`,
`monoidal-categories-and-monoidal-functors`

The final pair changes ambient category deliberately. “Tensor category” here is
not Mac Lane's older synonym for monoidal category: it has EGNO's finite-linear
meaning over a fixed algebraically closed field $k$. The page earns that change
by stating every added hypothesis before using it. It builds the portion of the
theory supported by the abelian and rigid spines already established —
biexactness, the structure of the unit, exact tensor functors, Grothendieck rings
and fusion rules — and stops before Frobenius–Perron, module-category and
reconstruction machinery. Thus this pair satisfies the dispatch's invitation to
develop tensor or fusion categories without importing a second research track by
stealth.

### A-page items, in dependency order

**The linear and finite ambient categories**

1. `def-k-linear-category-and-k-linear-functor` — def. A locally small category
   whose hom-sets are $k$-vector spaces and whose composition is $k$-bilinear;
   a $k$-linear functor is linear on every hom-space. The field $k$ and the
   unital convention are in the Statement. EGNO §1.2; Meusburger §8.1.
2. `def-locally-finite-k-linear-abelian-category` — def. EGNO's exact convention:
   an essentially small $k$-linear abelian category in which every object has
   finite length and every hom-space is finite-dimensional. The page does not
   replace “essentially small” by a globally chosen skeleton.
3. `def-finite-k-linear-abelian-category` — def. EGNO §1.8's finiteness
   condition, stated in the source's equivalent module-category form only after
   its hypotheses are available; the authoring item lists the finite number of
   simple isomorphism classes and enough-projective condition rather than
   conflating “finite” with merely finite length. Meusburger Def. 8.1.8 is the
   independent convention check.

**Tensor, multitensor, fusion and multifusion**

4. `def-tensor-and-multitensor-category` — def. Over the fixed algebraically
   closed field $k$, a **multitensor category** is a locally finite $k$-linear
   abelian rigid monoidal category with bilinear tensor product; a **tensor
   category** additionally has $\operatorname{End}(\mathbf1)=k$ through the
   scalar unit map. EGNO Def. 4.1.1. The equality is a property of the canonical
   map $k\to\operatorname{End}(\mathbf1)$, not a silently chosen identification.
5. `def-fusion-and-multifusion-category` — def. A **multifusion category** is a
   finite semisimple multitensor category; a **fusion category** is its tensor
   (simple-unit) case. EGNO §4.1; Meusburger Defs. 8.2.1–8.2.3.
6. `rem-tensor-category-terminology-is-source-dependent` — rem. Mac Lane and
   Joyal–Street use “tensor category” broadly for monoidal structure; EGNO uses
   items 4–5. The library says *monoidal category* everywhere before this page
   and adopts EGNO's meaning here only. This is a convention record, not a claim
   that the older use is wrong.

**Exactness forced by rigidity**

7. `thm-the-tensor-product-in-a-multitensor-category-is-biexact` — thm. For each
   $X$, both $X\otimes-$ and $-\otimes X$ have left and right adjoints supplied
   by the chosen left and right duals, so they preserve finite limits and finite
   colimits; hence tensoring in either variable is exact. EGNO Prop. 4.2.1.
   LANDMARK. The proof cites `MA-1` RAPL and its dual rather than asserting that
   bilinearity alone implies exactness.
8. `thm-dualization-in-a-multitensor-category-is-exact` — thm. Left and right
   dualization are contravariant equivalences and carry short exact sequences to
   short exact sequences in the opposite direction. EGNO Prop. 4.2.9. The
   canonical kernel/cokernel comparison isomorphisms are displayed, not treated
   as equality of chosen objects.
9. `thm-images-commute-with-tensor-products-in-a-multitensor-category` — thm.
   $\operatorname{im}(f\otimes g)\cong
   \operatorname{im}(f)\otimes\operatorname{im}(g)$, with the canonical map
   specified. EGNO Prop. 4.2.8. The proof factors one variable at a time and uses
   item 7 plus the abelian coimage–image theorem.
10. `thm-tensoring-with-a-dualizable-object-preserves-projectives` — thm. If $P$
    is projective, so are $P\otimes X$ and $X\otimes P$: the relevant hom functor
    is transported across the tensor–dual adjunction and the other tensor factor
    is exact. EGNO Prop. 4.2.12.
11. `cor-the-unit-is-projective-exactly-when-the-tensor-category-is-semisimple`
    — cor. In a tensor category, $\mathbf1$ is projective iff every object is
    projective iff the category is semisimple. EGNO Cor. 4.2.13, with the source's
    locally finite tensor hypotheses retained.

**The unit object and tensor functors**

12. `thm-the-unit-object-of-a-multitensor-category-is-semisimple` — thm. EGNO
    Thm. 4.3.1 and Cor. 4.3.2. LANDMARK and the hard theorem of the pair. The
    proof follows EGNO's endomorphism-algebra argument; it is not replaced by an
    appeal to the definition of multifusion category, which would be circular.
13. `thm-the-unit-object-of-a-tensor-category-is-simple` — thm. The tensor case
    of EGNO Thm. 4.3.8: semisimplicity from item 12 plus
    $\operatorname{End}(\mathbf1)=k$ forces a single simple summand. The converse
    to Schur's lemma is not asserted outside these hypotheses.
14. `cor-evaluation-is-monic-and-coevaluation-is-epic-for-nonzero-objects` —
    cor. For nonzero $X$ in a tensor category, the evaluation and coevaluation
    morphisms in EGNO Cor. 4.3.9 have the stated mono/epi properties. The
    Statement fixes left-versus-right dual convention by displaying the arrows.
15. `def-tensor-functor-between-tensor-categories` — def. EGNO Def. 4.2.5: an
    exact faithful $k$-linear strong monoidal functor. It is explicitly narrower
    than `MA-12`'s general strong monoidal functor.
16. `thm-an-exact-k-linear-strong-monoidal-functor-out-of-a-tensor-category-is-faithful`
    — thm. EGNO Rem. 4.3.10. Thus “faithful” in item 15 is redundant for a tensor
    source but retained to match the standard definition. The proof uses the
    simple unit and exactness; it is not true for arbitrary monoidal sources.

**Grothendieck rings and fusion rules**

17. `def-grothendieck-ring-of-a-tensor-category` — def. The Grothendieck group
    $K_0(\mathcal C)$ of the underlying essentially small abelian category, with
    relations $[B]=[A]+[C]$ for every short exact sequence
    $0\to A\to B\to C\to0$, and multiplication
    $[X][Y]=[X\otimes Y]$, unit $[\mathbf1]$. No skeleton or representative of
    every isomorphism class is globally chosen.
18. `thm-the-grothendieck-ring-multiplication-is-well-defined` — thm. Item 7
    sends each short-exact relation to one in either tensor variable, so the
    multiplication descends from the free abelian group; associator and unitors
    give associativity and the unit. LANDMARK well-definedness item. It must
    precede every use of the phrase “Grothendieck ring”.
19. `def-fusion-rules` — def. If $X_1,\ldots,X_r$ is supplied finite simple-class
    data in a fusion category, define nonnegative integers by
    $[X_i][X_j]=\sum_kN_{ij}^{k}[X_k]$. Independence of decompositions is supplied
    by the already established Jordan–Hölder/finite-length theory, not by a
    chosen decomposition for every object.
20. `thm-duality-induces-an-anti-involution-on-the-grothendieck-ring` — thm.
    Exact dualization makes $[X]^*:=[X^\vee]$ well defined and
    $([X][Y])^*=[Y]^*[X]^*$. It is an **anti**-involution in general; only a
    braiding or another commutativity theorem permits the word involution without
    qualification.
21. `thm-left-and-right-dual-objects-are-isomorphic-in-a-semisimple-multitensor-category`
    — thm. EGNO Prop. 4.8.1. This is an objectwise isomorphism theorem, not a
    natural monoidal choice of such isomorphisms.
22. `rem-objectwise-double-dual-isomorphisms-do-not-supply-a-pivotal-structure`
    — rem. A pivotal structure is a **monoidal natural** isomorphism
    $1\Rightarrow(**)$; objectwise isomorphisms from semisimplicity do not supply
    its naturality or monoidality. The item records EGNO's Question 4.8.3 as a
    warning and makes no claim that every fusion category is pivotal or spherical.
23. `rem-the-boundary-of-the-fusion-category-development` — rem. Individually
    defers: Frobenius–Perron dimension (needs a Perron–Frobenius spine), module
    categories (new action and relative-tensor machinery), Drinfeld centres and
    modularity (braided-centre and nondegeneracy theory), Deligne tensor products
    (a separate universal construction), and Tannaka reconstruction (Hopf or
    quasi-Hopf algebra). This is §8 denial 6 made local and specific.

### Proof strategy — the hard unit theorem (item 12)

1. Use rigidity to prove item 7 first; exact tensoring is the indispensable input.
2. Follow EGNO §4.3's radical/endomorphism argument to show that the unit has no
   nonsplit self-extension compatible with multiplication. Every use of finite
   length and finite-dimensional homs is cited to items 2–4.
3. Split the resulting finite-length unit into simple summands, obtaining item
   12. Do **not** start by assuming the ambient category semisimple; that is the
   stronger multifusion hypothesis, not the multitensor hypothesis.
4. In the tensor case use the canonical scalar map
   $k\to\operatorname{End}(\mathbf1)$ to rule out more than one nonzero simple
   summand. This supplies item 13.
5. Derive item 14 from the source's nonzero-object argument. It is a corollary,
   not an extra axiom about evaluation.

If this proof cannot be reproduced from EGNO's exact hypotheses, items 12–14
become `rem-` items with `proved_here: false` and structured external dependencies;
items 1–11 and 15–23 survive. No later item in the library may depend on that
fallback until a build proves it.

### `fs-` items (A page)

- `fs-every-finite-k-linear-abelian-category-is-semisimple` — false; finiteness
  and semisimplicity are separate hypotheses in item 5.
- `fs-every-rigid-k-linear-abelian-monoidal-category-is-a-tensor-category` —
  misses local finiteness, finite-dimensional homs, bilinearity and the unit
  endomorphism condition.
- `fs-a-tensor-functor-is-just-a-strong-monoidal-functor` — item 15 records the
  exactness, faithfulness and $k$-linearity clauses.
- `fs-the-grothendieck-ring-of-a-tensor-category-is-always-commutative` — item 20
  gives only an anti-involution; without braiding the product need not commute.
- `fs-objectwise-isomorphisms-x-isomorphic-to-x-double-dual-supply-a-pivotal-structure`
  — item 22: naturality and monoidality are additional coherent data.

### B page — `tensor-and-fusion-categories-examples`

`ex-finite-dimensional-vector-spaces-form-a-fusion-category` *(CONTINGENT on
the module tensor page; cite it and do not reconstruct tensor products here)* ·
`ex-the-grothendieck-ring-of-finite-dimensional-vector-spaces` ·
`ex-a-matrix-multifusion-category-with-nonsimple-unit` ·
`ex-finite-group-representations-in-good-characteristic-form-a-fusion-category`
*(CONTINGENT on the published Maschke and representation pages)* ·
`cex-finite-group-representations-in-dividing-characteristic-need-not-be-semisimple`
*(same contingency)* · `ex-fusion-rules-for-a-supplied-finite-simple-family` ·
`cex-the-grothendieck-ring-does-not-record-associator-data` *(only if a sourced
3-cocycle-twist example is already available; otherwise record the drop rather
than inventing one)*.

### Sources

- **Etingof–Gelaki–Nikshych–Ostrik, *Tensor Categories***, author-final full
  text, `https://math.mit.edu/~etingof/egnobookfinal.pdf`: §1.2 and §1.8 for
  items 1–3; §§4.1–4.3 (printed pp. 67–72) for items 4–16; §4.8 (printed pp.
  75–76) for items 21–22. Load-bearing exact results: Def. 4.1.1, Props. 4.2.1,
  4.2.8, 4.2.9, 4.2.12, Cor. 4.2.13, Thm. 4.3.1, Cor. 4.3.2, Thm. 4.3.8,
  Cor. 4.3.9, Rem. 4.3.10, Prop. 4.8.1 and Question 4.8.3. Primary full-text
  treatment.
- **Catherine Meusburger, *Tensor Categories***, complete FAU lecture notes,
  `https://www.math.fau.de/wp-content/uploads/2024/01/Tensor-Categories.pdf`:
  §§2.1–2.2 for rigid/pivotal background and §§8.1–8.2 (Defs. 8.1.7–8.1.9,
  8.2.1–8.2.3) for the linear, finite, tensor and fusion conventions. Second
  independent full lecture-note treatment.
- **EGNO Ch. 1 §1.5** and this track's `MA-9` items 14–20 back every use of finite
  length and Jordan–Hölder. The page does not appeal to semisimple module theory
  by analogy.

Exact heading dispositions are in §10.1. Component provenance is deterministic:
items 1–16 and 19–23 have literature-derived Statements; item 18 has a
literature-derived Statement and a source-following, house-reordered proof; item
17 is the standard literature definition. Definition and remark proofs are
`not-applicable`; theorem proofs are `literature-derived` unless the authoring
cycle materially changes the route, in which case `ai-altered` records exactly
the change. B-page contingencies are never dependencies.

### Well-definedness and choice

The field action on $\operatorname{End}(\mathbf1)$, the descent of multiplication
to $K_0$, the descent of duality through short-exact relations, and the
independence of fusion coefficients from decompositions are numbered obligations
(§7 rows 55–58). All core statements are ZF: no proof requires choosing a
skeleton or representatives of all isomorphism classes. A displayed finite list
of simple representatives is **supplied data**; the intrinsic definitions use
isomorphism classes. The B-page representation examples inherit exactly the
choice and tensor-product assumptions of their published prerequisites.

### Traps

1. **Bilinear does not imply exact.** Item 7 spends rigidity through adjunctions.
2. **“Finite” has three nearby meanings.** Items 2, 3 and 5 state them separately.
3. **The unit scalar map is canonical.** Never write “choose
   $\operatorname{End}(\mathbf1)\cong k$”.
4. **The Grothendieck product must descend.** Item 18 is load-bearing.
5. **Duality reverses order.** Item 20 is an anti-involution unless an additional
   commutativity theorem applies.
6. **Pivotal is coherent data.** Item 21 cannot prove item 22 false by choosing
   objectwise isomorphisms.
7. **No tensor product of modules is constructed here.** Every such B-page
   example cites `abstract-algebra`'s planned page or is dropped.

**Forward references: NONE.**

---

# 10. The canonical-coverage harvest and the source-convention register

`CLAUDE.md` §"Source depth and the canonical-coverage harvest": every A/B pair is
backed by **at least two independent treatments**, at least one a textbook,
monograph or full lecture-note set with a harvestable table of contents; for every
source the **exact chapter/section range read** is recorded together with **that
source's own section and named-result headings** over that range; and **every
harvested heading receives an explicit disposition** — `included` (naming the
item), `inline` (naming the absorbing item), `already-published` (naming the
published item), `deferred` or `out-of-scope`, the last two with a written reason
about that specific result.

The harvest is source-anchored on purpose. A minimum result count would invite the
padding that scaffold richness forbids; a disposition for every heading a source
itself contains cannot be satisfied by inventing anything.

**Wikipedia and encyclopedia entries appear nowhere in this file as a pair's
backing.** One tiebreaker use is recorded at §10.2 item 3 and is labelled as such.

## 10.0 Source-access ledger

Every source named as mathematical backing has a working access or official
bibliographic URL here. “Full” means the complete work was legitimately reachable;
“partial” names exactly the public portion used; “publisher” is a locator, not a
claim of open access. The read ranges and heading dispositions follow in §10.1.

| source | access and working URL |
|---|---|
| Riehl, *Category Theory in Context* | full author-hosted PDF: `https://emilyriehl.github.io/files/context.pdf` |
| Leinster, *Basic Category Theory* | full open PDF: `https://arxiv.org/pdf/1612.09375` |
| Richter, *From Categories to Homotopy Theory* | full author-hosted PDF: `https://www.math.uni-hamburg.de/personen/richter/bookdraft.pdf` |
| Kelly, *Basic Concepts of Enriched Category Theory* | full TAC reprint: `https://www.tac.mta.ca/tac/reprints/articles/10/tr10.pdf`; university mirror: `https://people.math.rochester.edu/faculty/doug/otherpapers/kelly-book.pdf` |
| Riehl, *Categorical Homotopy Theory* | full author-hosted PDF: `https://emilyriehl.github.io/files/cathtpy.pdf` |
| Loregian, *(Co)end Calculus* | full arXiv PDF: `https://arxiv.org/pdf/1501.02503` |
| Cheng, *Iterated distributive laws* | full CC-BY journal PDF: `https://compositionality.episciences.org/13507/pdf` |
| Beck; Barr–Wells | full TAC reprints: `https://www.tac.mta.ca/tac/reprints/articles/31/tr31.pdf`; `https://www.tac.mta.ca/tac/reprints/articles/12/tr12.pdf` |
| Manes, *A triple theoretic construction of compact algebras* | full paper in TAC Reprint 18: `https://www2.math.ethz.ch/EMIS/journals/TAC/reprints/articles/18/tr18.pdf` |
| Leinster, *Codensity and the ultrafilter monad* | full arXiv PDF: `https://arxiv.org/pdf/1209.3606` |
| Freyd, *Abelian Categories* | full TAC reprint: `https://www.tac.mta.ca/tac/reprints/articles/3/tr3.pdf` |
| Mitchell, *Theory of Categories* | complete public university-hosted scan, not claimed open-licensed: `https://webhomes.maths.ed.ac.uk/~v1ranick/papers/mitchell.pdf` |
| Wise; Tan; Montaruli | full author/arXiv PDFs: `https://math.colorado.edu/~jonathan.wise/papers/snake.pdf`; `https://arxiv.org/pdf/1901.08591`; `https://arxiv.org/pdf/2203.12490` |
| Murfet, *Abelian Categories* | full open notes: `https://therisingsea.org/notes/AbelianCategories.pdf` |
| Weibel | public Appendix A: `https://math.mit.edu/~hrm/palestine/weibel/A-category_theory_language.pdf`; public Chs 1–4 extract: `https://locallyringed.space/Weibel%20Chapters%201-4.pdf`; official publisher record: `https://www.cambridge.org/core/books/an-introduction-to-homological-algebra/AAA3F16482097015CD12D4376D505282` |
| Stacks Project, *Homology* | complete live chapter: `https://stacks.math.columbia.edu/tag/00ZU` |
| Grothendieck, Tôhoku paper | official article/PDF: `https://www.jstage.jst.go.jp/article/tmj1949/9/2/9_2_119/_article` |
| Johnstone/Mehrle, Part III notes | full open notes: `https://pi.math.cornell.edu/~dmehrle/notes/partiii/cattheory_partiii_notes.pdf` |
| EGNO; Meusburger | full author-final/lecture-note PDFs: `https://math.mit.edu/~etingof/egnobookfinal.pdf`; `https://www.math.fau.de/wp-content/uploads/2024/01/Tensor-Categories.pdf` |
| Etingof et al., MIT 18.769 notes | full lecture notes: `https://math.mit.edu/~etingof/tenscat.pdf` |
| Aguiar–Mahajan | full author-hosted text: `https://pi.math.cornell.edu/~maguiar/a.pdf` |
| Joyal–Street | full Macquarie report: `https://ncatlab.org/nlab/files/JoyalStreet-BraidedMonoidal.pdf` |
| Mac Lane 1963 | Rice repository record/full paper: `http://hdl.handle.net/1911/62865` |
| Awodey, *Notes on Type Theory* | full open lecture notes: `https://awodey.github.io/typetheory/notes/typetheory.pdf` |
| Cruttwell | full author-hosted thesis: `https://www.reluctantm.com/gcruttw/publications/thesis4.pdf` |
| Borceux–Quinteiro–Rosický; Guillou–May | accessible enriched-adjoint papers: `https://www2.math.ethz.ch/EMIS/journals/TAC/volumes/1998/n3/n3.pdf`; `https://math.uchicago.edu/~may/PAPERS/VmodPLAIN2018%20copy.pdf` |
| Mac Lane, *CWM*; *Homology*; Rotman; Borceux vol. 2 | official publisher locators, not open-text claims: `https://link.springer.com/book/10.1007/978-1-4757-4721-8`; `https://link.springer.com/book/10.1007/978-3-642-62029-4`; `https://link.springer.com/book/10.1007/b98977`; `https://www.cambridge.org/core/books/abs/handbook-of-categorical-algebra/contents/320BD793AE144D59F21C4F64FE08197F` |
| Kelly 1964 coherence paper | DOI/publisher locator only; body unobtained: `https://doi.org/10.1016/0021-8693(64)90018-3` |

## 10.1 Harvest tables

### Riehl, *Category Theory in Context*, 2nd ed. — Chs 4–6

Author full text: `https://emilyriehl.github.io/files/context.pdf`. Read Ch. 4
§§4.1–4.4, 4.6–4.7 (printed pp. 132–180), Ch. 5 §§5.1–5.6 (pp. 182–218),
and Ch. 6 §§6.1–6.3, 6.5 (pp. 220–250).

| source heading and named results | disposition |
|---|---|
| 4.1 Adjoint functors: Def. 4.1.1, Lem. 4.1.3, Not. 4.1.5, Exs 4.1.6–4.1.15 | definition/lemma and the discrete, powerset, free/forgetful and field examples `included` — `MA-1` items 5–6, 31, 33–39; floor/ceiling `deferred` pending ordered-number definitions; ordinal and homotopical examples `out-of-scope`; remaining examples `inline`/B |
| 4.2 Unit and counit as universal arrows: Lems 4.2.2–4.2.3, Def. 4.2.5, Rem. 4.2.6, Thm 4.2.7, Cor. 4.2.10, Lem. 4.2.11 | `included` — `MA-1` items 1, 5, 8, 17, 22 |
| 4.3 The calculus of adjunctions: Props 4.3.1, 4.3.4–4.3.7 | `included` — `MA-1` items 13–16; Prop. 4.3.5 `already-published` as `thm-every-equivalence-can-be-made-an-adjoint-equivalence`; Prop. 4.3.6's post- and precomposition forms both `included` in item 15 |
| 4.4 Contravariant and multivariable adjunctions: Def. 4.4.1, Props 4.4.4, 4.4.6, Def. 4.4.7 | `included`/`inline` — `MA-1` items 11, 20 and `MA-14`'s closed structure; convenient-topological examples `out-of-scope` |
| 4.5 Adjunctions between homotopy categories | `out-of-scope` — homotopical category theory |
| 4.6 Adjunctions, limits, and colimits: Prop. 4.6.1, Thm 4.6.2, Cors 4.6.3–4.6.10, Lem. 4.6.11, Def. 4.6.12, Ex. 4.6.13, Prop. 4.6.14, Cor. 4.6.15 | `included` — `MA-1` items 18, 24–32, `MA-2` items 1, 6–8, `MA-8` exact-functor block; module instances cite abstract algebra; categorical completeness results `already-published` |
| 4.7 The adjoint functor theorems: Lems 4.7.1–4.7.2, Thm 4.7.3, Def. 4.7.4, Lem. 4.7.5, Defs 4.7.7–4.7.9, Thm 4.7.10, Lem. 4.7.11, Ex. 4.7.12, Cors 4.7.13–4.7.14, Thm 4.7.15 | `included` — `MA-1` item 9 and `MA-2` items 9–29, 31–34; Lem. 4.7.5's Statement is included but its class-choice proof is replaced by Leinster Lem. A.1; Def. 4.7.16/Thm 4.7.17 `deferred` under the accessible-category denial |
| 5.1 Monads from adjunctions: Def. 5.1.1, Rem. 5.1.2, Lem. 5.1.3, examples, Def. 5.1.6, Ex. 5.1.7 | `included` — `MA-3` items 1–5, 27–33 and B examples |
| 5.2 Adjunctions from monads: Defs 5.2.4, 5.2.8, 5.2.10, Lems 5.2.9, 5.2.12, Prop. 5.2.13, Lem. 5.2.14 | `included` — `MA-3` items 6–17 |
| 5.3 Monadic functors: Def. 5.3.1, Prop. 5.3.3 | `included` — `MA-4` item 1 and `MA-3` items 21–23 |
| 5.4 Canonical presentations via free algebras: Prop. 5.4.2, Def. 5.4.4, Lem. 5.4.6, Ex. 5.4.7, Def. 5.4.8, Prop. 5.4.9, Cor. 5.4.10 | `included` — `MA-4` items 3–10; Cor. 5.4.10 `inline` in Beck |
| 5.5 Recognizing categories of algebras: Thm 5.5.1, Cor. 5.5.3, Defs 5.5.4–5.5.5, Prop. 5.5.8, Thm 5.5.9 | Beck and examples `included` — `MA-4` items 11–17; algebraic theories `deferred`; Paré's powerset theorem `out-of-scope` because nothing consumes the substantial special theorem |
| 5.6 Limits and colimits of algebras: Lem. 5.6.1, Cor. 5.6.2, Thm 5.6.5, Cor. 5.6.6–5.6.14 | `included` — `MA-3` items 18–20, `MA-4` items 14–18, 24 and `MA-2` items 6–8; set/module instances `already-published`/inline |
| 6.1 Kan extensions: Def. 6.1.1, Rem. 6.1.2, Prop. 6.1.6 | `included` — `MA-6` items 1–5 and 13; examples B/inline |
| 6.2 Pointwise Kan extensions: Thm 6.2.1, Def. 6.2.6, Cor. 6.2.7, Cor. 6.2.14, Ex. 6.2.15 | `included` — `MA-6` items 6–8, 13 and the nonpointwise `fs-`; item 25 merges with item 13 at authoring because its Statement is the same corollary |
| 6.3 Absolute and pointwise extensions: Def. 6.3.1, Lem. 6.3.2, Defs 6.3.5–6.3.6, Thm 6.3.7, Lem. 6.3.8 | `included` — `MA-6` items 9–12; Lem. 6.3.8 `inline` in item 10's proof |
| 6.4 Derived functors as Kan extensions | `out-of-scope` — homological/homotopical algebra |
| 6.5 Applications: Props 6.5.1–6.5.2, formula 6.5.3, Props 6.5.4, 6.5.6, Thms 6.5.7–6.5.8, Prop. 6.5.9, Def. 6.5.10, Exs 6.5.viii and 6.5.11–6.5.13 | `included` — `MA-6` items 15–24, with small-source house restrictions; field/Giry/simplicial/sheaf examples `out-of-scope` or `deferred` for their named subject prerequisites |

### Leinster, *Basic Category Theory*, 2nd ed.

Full CC BY-NC-SA text: `https://arxiv.org/pdf/1612.09375`. Read Ch. 2
§§2.1–2.3 (pp. 41–64), §6.2 (pp. 145–157), §6.3 (pp. 157–170), Exercises
6.3.25–6.3.27 (pp. 175–176), and the Appendix (pp. 171–173).

| heading and named result | disposition |
|---|---|
| 2.1 Definition and examples | adjunction definition/examples/composition `included` — `MA-1` items 5, 14, 33–37, 41; initial/terminal prerequisites `already-published`; remaining worked examples B |
| 2.2 Adjunctions via units and counits: Lems 2.2.2, 2.2.4, Thm 2.2.5 and poset exercises | `included` — `MA-1` items 1, 4–6, 8, 21–23 |
| 2.3 Adjunctions via initial objects: Lem. 2.3.5, Thm 2.3.6, Cor. 2.3.7 | `included` — `MA-1` items 7–10; comma categories `already-published` |
| 6.2 Limits in presheaf categories: Cors 6.2.11–6.2.12, Warning 6.2.14, Def. 6.2.16, Thm 6.2.17, Ex. 6.2.25 | presheaf limits and category of elements `already-published`; density and warning `included` — `MA-6` item 19 and `fs-`; **Ex. 6.2.25 explicitly supplies the pointwise left-Kan/global-adjunction exercise form** — `MA-6` items 5–8 |
| 6.3 Adjoint functor theorems: Thm 6.3.1, Prop. 6.3.7, Def. 6.3.9, Thm 6.3.10, Exs 6.3.11–6.3.14, Def. 6.3.15, Thm 6.3.20 | RAPL and AFT material `included` — `MA-1` items 24–25 and `MA-2` items 17, 22–23, 32–34; imprecise Thm 6.3.13 `deferred` in favour of Riehl's exact SAFT; cartesian-closed material `included` in `MA-14` |
| Exercises 6.3.25–6.3.27: Yoneda and cartesian closure; the subobject functor and classifier; classifier in a presheaf category | Ex. 6.3.25 `inline` in `MA-14` item 14; Ex. 6.3.26 `included` — `MA-14` items 25–27; Ex. 6.3.27 `included` — `MA-14` B-page `ex-the-subobject-classifier-of-a-presheaf-category`; the further topos axioms are `out-of-scope` because they require a separate categorical-logic/topos development (§8 denial 9) |
| Appendix: Lems A.1–A.2 and remaining steps | Lem. A.1 `included` — `MA-2` item 18's ZF proof; Lem. A.2 and remaining steps `included`/`inline` — `MA-2` items 21–22 |

### Richter, *From Categories to Homotopy Theory*

Corrected author-hosted full text:
`https://www.math.uni-hamburg.de/personen/richter/bookdraft.pdf`. Read Ch. 4
§§4.1–4.7 (pp. 59–82) and Ch. 6 §§6.1–6.6 (pp. 91–117). Richter assumes AC
globally, so this source cross-checks Statements and proof shapes; it never sets
the house choice cost.

| heading and named results | disposition |
|---|---|
| 4.1–4.3 Kan extensions: Defs 4.1.1, 4.1.3, 4.1.5, Thms 4.1.4, 4.1.11, Lem. 4.1.10; Def. 4.2.1, Thm 4.2.2; Def. 4.3.1, Prop. 4.3.2, Thm 4.3.3 | `included` — `MA-6` items 1, 5–13; comma categories `already-published`; sheaf and homotopical examples `deferred`/`out-of-scope` |
| 4.4 Ends and coends: Defs 4.4.1, 4.4.4, 4.4.6, Rem. 4.4.2, Exs 4.4.3–4.4.7 | `included` — `MA-5` items 1–4, 10 and B; module tensor example cites abstract algebra rather than reconstructing it |
| 4.5 Twisted-arrow category: Defs 4.5.1–4.5.2, Prop. 4.5.3 | `included` — `MA-5` items 6–7, under the page's explicitly fixed orientation |
| 4.6 Fubini: Not. 4.6.1, Rem. 4.6.2, Prop. 4.6.3 | `included` — `MA-5` item 11 with the exact existence hypotheses |
| 4.7 Kan applications: Props 4.7.1–4.7.3 | `included` — `MA-6` items 15–17, but Prop. 4.7.3's defective converse is not cited; §10.3 uses Riehl Prop. 6.5.2 |
| 6.1 Monads: Defs 6.1.1–6.1.2, Thm 6.1.3 | `included` — `MA-3` items 1, 4, 24; examples B |
| 6.2 Eilenberg–Moore algebras and free presentations | `included` — `MA-3` items 6–10 and `MA-4` items 8–9 |
| 6.3 Kleisli categories: Def. 6.3.1, Prop. 6.3.5, Thm 6.3.10 | `included` — `MA-3` items 12, 15, 17 |
| 6.4 Lifting left adjoints | `deferred` — it is not used as a substitute for a sourced distributive-law theorem |
| 6.5 Limits and colimits of algebras | `included` — `MA-3` items 18–19 and `MA-4` item 18 |
| 6.6 Monadicity: Def. 6.6.1, Thm 6.6.2 | `included` — `MA-4` items 1, 11, 13 |

### Loregian, *This is the (Co)end, My Only (Co)friend*

Full text: `https://arxiv.org/pdf/1501.02503`. Read §§1.1.1, 1.2–1.3,
§§2.1–2.3 and §4.1; no claim is made to have read the remainder.

| heading and named results | disposition |
|---|---|
| 1.1.1 Dinatural transformations: Def. 1.1.1, Rems 1.1.2–1.1.3, Defs 1.1.4, 1.1.6 | `included`/`inline` — `MA-5` items 1–4 |
| 1.2 Twisted arrows: Rem. 1.2.1, Def. 1.2.2, Prop. 1.2.3, equalizer/coequalizer displays, Def. 1.2.6 | `included` — `MA-5` items 6–8 and `MA-6` items 11–12; Prop. 1.2.10 subdivision `out-of-scope` alternative machinery. Loregian's orientation is opposite the library's, so the translation is explicit |
| 1.3 Fubini: Thm 1.3.1 | `included` — `MA-5` item 11 |
| 2.1 Yoneda/Kan preliminaries | `already-published`/`included` — Yoneda prerequisites and `MA-6` |
| 2.2 Ninja Yoneda: Prop. 2.2.1, Rem. 2.2.2 | `included`/`inline` — `MA-5` item 14 |
| 2.3 Kan extensions by coends: Prop. 2.3.6 | `included` — `MA-6` item 14; analytic-functor examples `out-of-scope` |
| 4.1 Weighted limits: Def. 4.1.2, Ex. 4.1.4, Prop. 4.1.5, Exs 4.1.6–4.1.8, Rems 4.1.9–4.1.14, Prop. 4.1.11 | `included`/`inline` — `MA-5` items 8, 10, 15, 17, 21–23 and `MA-6` item 14; kernel-pair example B |
| 4.2 chain/2-categorical examples; 4.3 enriched forms | 4.2 `out-of-scope`; 4.3 `deferred` to/partly `included` in `MA-17` rather than used on ordinary `MA-5` |

### Cheng, *Iterated distributive laws* — §2

Official CC-BY full text: `https://compositionality.episciences.org/13507/pdf`.

| heading/result | disposition |
|---|---|
| §2, Def. 2.1: distributive law $ST\Rightarrow TS$ and its four Beck diagrams | `included` — `MA-3` item 25 |
| §2, Thm 2.2: the composite monad $TS$ | `included` — `MA-3` item 26 |
| §2, Exs 2.3–2.4 | `inline`/B examples |

### Beck and Barr–Wells on monadicity

Beck, *The tripleableness theorem*, TAC Reprint 31:
`https://www.tac.mta.ca/tac/reprints/articles/31/tr31.pdf`; Barr–Wells,
*Toposes, Triples and Theories*, TAC Reprint 12:
`https://www.tac.mta.ca/tac/reprints/articles/12/tr12.pdf`, read §§3.3–3.4 and
Thm 3.14.

| heading/result | disposition |
|---|---|
| Beck's tripleability theorem | `included` — historical primary support for `MA-4` items 11–13; exact modern Statement follows Riehl Thm 5.5.1 |
| Barr–Wells §§3.3–3.4, Thm 3.14 | `included` — `MA-4` items 11, 13; surrounding canonical-presentation work `inline`; remaining triple/topos theory `out-of-scope` |

### Manes, *A triple theoretic construction of compact algebras*

Full paper in TAC Reprint 18:
`https://www2.math.ethz.ch/EMIS/journals/TAC/reprints/articles/18/tr18.pdf`.
Read narrowly at §5 through Thm. 5.5 and Remarks 5.6 (reprint pp. 85–88).

| heading/result | disposition |
|---|---|
| §5, the ultrafilter triple and compact Hausdorff algebras; Thm. 5.5 | `included` — `MA-4` items 19–23, including both inverse constructions and the morphism direction |
| Rem. 5.6(a), closed subsets as subalgebras | `inline` — `MA-4` item 22a and B examples |
| Rem. 5.6(b), free algebras are totally disconnected | `deferred` — zero-dimensional topology is not developed and no later item consumes it |
| Rem. 5.6(c), products and compactness | `already-published`/`inline` — published Tychonoff/ultrafilter material; the choice cost is not re-minted here |

### Leinster, *Codensity and the ultrafilter monad*

Full text: `https://arxiv.org/pdf/1209.3606`. Read §§1–3 and §5.

| heading | disposition |
|---|---|
| §1 Ultrafilters | `already-published`/`included` — published ultrafilter items and `MA-3` item 32 |
| §2 Codensity | `included` — `MA-6` item 23 |
| §3 Finite sets | `included` — `MA-6` item 24, using a small skeleton |
| §5 Kan-extension construction and monad laws | `included` — `MA-6` items 23–23a |
| §4 integration; §§7–8 double duals/ultraproducts | `out-of-scope` — measure theory, linear-duality example and model theory; §6 `inline` interpretation only |

### Mac Lane, *Categories for the Working Mathematician*, 2nd ed.

Read from a scanned copy with an OCR text layer; **the OCR destroys $\in_m$,
$\equiv$, every Greek letter in a Lemma statement and every displayed diagram**, so
all formulas were read from rendered pages. Page numbers confirmed against running
heads. The working bibliographic/contents URL is
`https://link.springer.com/book/10.1007/978-1-4757-4721-8`; the body access used
was non-open and is labelled as such.

**Ch IV "Adjoints" (pp. 79–108) and the consumed part of Ch V "Limits"
(pp. 109–136).**

| heading | disposition |
|---|---|
| IV.1 Adjunctions · IV.2 Examples of Adjoints | `included` — `MA-1` items 1–10, 33–41 and B examples |
| IV.3 Reflective Subcategories | `included` — `MA-2` items 1–8 |
| IV.4 Equivalence of Categories | `already-published` — equivalence and adjoint-equivalence items; `inline` comparison at `MA-1` item 3 |
| IV.5 Adjoints for Preorders | `included` — `MA-1` items 21–23 |
| IV.6 Cartesian Closed Categories | `included` — `MA-14` cartesian-closed spine |
| IV.7 Transformations of Adjoints · IV.8 Composition of Adjoints | `included` — `MA-1` items 13–16 |
| IV.9 Subsets and Characteristic Functions | `inline` — `MA-1` items 31–32; the topos generalisation `deferred` to a topos track |
| IV.10 Categories Like Sets | `out-of-scope` as a general theory; examples B where their prerequisites exist |
| V.1 Creation of Limits | `already-published`/`included` — published creation definition and `MA-2` item 21 |
| V.2 Limits by Products and Equalizers · V.3 Limits with Parameters | `already-published` — authored limits/colimits page; parameter choice comparison `inline` in §3 |
| V.4 Preservation of Limits · V.5 Adjoints on Limits | `included` — `MA-1` items 24–30 |
| V.6 Freyd's Adjoint Functor Theorem | `included` — `MA-2` items 18–23 |
| V.7 Subobjects and Generators | `included` — `MA-2` items 9–17 and `MA-9` items 22–24a |
| V.8 The Special Adjoint Functor Theorem | `included` — `MA-2` items 25–29, in the repaired objectwise/data-supplied split |
| V.9 Adjoints in Topology | Stone–Čech application `included` — `MA-2` items 31–32; other topology examples `inline`/B or `deferred` for missing topological prerequisites |

**Ch VI "Monads and Algebras" (pp. 137–160).**

| heading | disposition |
|---|---|
| VI.1 Monads in a Category · VI.2 Algebras for a Monad | `included` — `MA-3` items 1–10 |
| VI.3 The Comparison with Algebras | `included` — `MA-3` items 14–17 |
| VI.4 Words and Free Semigroups · VI.5 Free Algebras for a Monad | `included`/B — `MA-3` items 27–30 and examples; the published free-object spine is cited |
| VI.6 Split Coequalizers | `included` — `MA-4` items 3–10 |
| VI.7 Beck's Theorem | strict form `included` — `MA-4` item 12; compared with Riehl's equivalence-invariant item 11 |
| VI.8 Algebras Are $T$-Algebras | `inline` — `MA-4` recognition proof |
| VI.9 Compact Hausdorff Spaces | `included` with decomposed obligations — `MA-4` items 19–24; no single source paragraph substitutes for the inverse-on-objects-and-morphisms checks |

**Ch VII "Monoids" (pp. 161–190), read in full.**

| heading | disposition |
|---|---|
| 1. Monoidal Categories (161) | `included` — `MA-12` items 1–6, 30, 33 |
| 2. Coherence (165) | `included` — `MA-13` items 2, 5–8 |
| 3. Monoids (170) | `included` — `MA-12` items 12–14 |
| 4. Actions (174) | `included` — `MA-12` item 13 (modules over a monoid object) |
| 5. The Simplicial Category (175) | `out-of-scope` — the simplicial category is the entry point to simplicial sets and homotopy theory, a subject area the library has not reached (§8 denial 7). Nothing in this block uses it |
| 6. Monads and Homology (180) | `already-published` in part (`MA-3` covers monads); the homology half is `out-of-scope`, belonging to `homological-algebra` |
| 7. Closed Categories (184) | `included` — `MA-14` items 1–3, with the convention split at §10.2 item 4 |
| 8. Compactly Generated Spaces (185) | `deferred` — a convenient category of spaces is genuine point-set topology the library has not built, and `MA-14` item 5 and `MA-17` trap 7 both record that the topological examples are dropped for want of it |
| 9. Loops and Suspensions (188) | `out-of-scope` — algebraic topology beyond the published fundamental group |
| Theorem 1 and its Corollary (§VII.2) | `included` — `MA-13` items 7, 3 |
| Exercise VII.1.1 (pentagon + triangle ⟹ the unit laws) | `included` — `MA-12` items 20–21 |
| Exercise VII.1.6 (independence of the axioms) | `included` — `MA-12` item 4 |

**Ch VIII "Abelian Categories" (pp. 191–210), read in full.** The chapter has
**exactly four sections**; an earlier draft of this file cited a §VIII.4 "Ext" and
a §VIII.5 "Ext without projectives", **neither of which exists**.

| heading | disposition |
|---|---|
| 1. Kernels and Cokernels (191), Lemma 1 (193) | `included` — `MA-8` items 1–8 |
| 2. Additive Categories (194): Prop. 1, **Thm. 2**, Prop. 3, Prop. 4, Exercises 1–6 | `included` — `MA-7` items 12–24; Thm 2 is item 24, Prop. 3 is item 17's formula, Ex. 4 is items 17–18 and 22 |
| 3. Abelian Categories (198): Definition, Prop. 1, Exercises 1–6 | `included` — `MA-8` items 9, 13–14; p. 199's *"if $\mathcal A$ is abelian, so is any functor category $\mathcal A^J$"* is `MA-8` item 42 and `MA-11` item 9 |
| 4. Diagram Lemmas (202): Lemma 1 (short five), Prop. 2, **Thm. 3 (Elementary rules for chasing diagrams)**, Lemma 4 (Five Lemma), Lemma 5 (Ker-coker = Snake) | `included` — `MA-11` item 1; `MA-8` item 23 and `MA-10` item 14; `MA-10` items 18–23; `MA-11` items 15, 5, 7 |
| Exercise VIII.4.1 (minimal five-lemma hypotheses) | `included` — `MA-11` item 16 |
| Exercise VIII.4.2 (rule (vi) needed for the epi half) | `included` — `MA-10` trap 2 |
| Exercise VIII.4.4 (naturality of $\delta$) | `included` — `MA-11` item 10, **and the library writes the proof** |
| Exercise VIII.4.5 (3×3 lemma, and the middle version) | `included` — `MA-11` items 20–21, 24 |
| Exercise VIII.4.6 (kernel–cokernel sequence of a composite) | `included` — `MA-10` item 37, `MA-11` item 11 |
| Notes (209) | `inline` — the historical pointer to *Homology* Ch XII, absorbed into `MA-10`'s sources |
| §V.7 (pp. 126–127), generating and cogenerating sets | `included` — `MA-9` items 22, 24a |

**Ch XI "Symmetry and Braiding in Monoidal Categories" (pp. 251–266), read in
full.** An earlier draft of this file guessed this chapter was "Special Structures
and Limits"; **it is not, and no such chapter exists**. Ch IX is "Special Limits",
Ch X "Kan Extensions", Ch XII "Structures in Categories".

| heading | disposition |
|---|---|
| 1. Symmetric Monoidal Categories (251), **Theorem 1** | `included` — `MA-15` items 1, 4, 6–7, 18 |
| 2. Monoidal Functors (255) | `included` — `MA-12` items 24–26; `MA-15` item 9 |
| 3. Strict Monoidal Categories (257), **Theorem 1**, **Theorem 2**, Exercises 1–3 | `included` — `MA-13` items 11, 13 |
| 4. The Braid Groups $B_n$ and the Braid Category (260) | `included` — `MA-15` items 13–15, 17; the $\pi_1$ description is `MA-15` item 14 with `proved_here: false` |
| 5. Braided Coherence (263), **Theorem 1**, **Theorem 2** | `included` — `MA-15` items 21–23 |
| 6. Perspectives (266) | `inline` — absorbed into `MA-15` item 24's remark |
| Ch XII §3. 2-Categories (272) | `already-published` — `def-strict-two-category`, `thm-small-categories-form-a-strict-two-category` |

**Ch IX "Special Limits" (pp. 211–232).**

| heading | disposition |
|---|---|
| IX.1 Filtered Limits | `already-published` — `def-filtered-category-and-filtered-colimit` and the authored filtered-colimit spine |
| IX.2 Interchange of Limits | `included` — `MA-5` items 11–12 |
| IX.3 Final Functors | `already-published` — cofinality/final-functor material on the limits page |
| IX.4 Diagonal Naturality | `included` — `MA-5` items 1–3 |
| IX.5 Ends | `included` — `MA-5` items 4–10 |
| IX.6 Coends | `included` — `MA-5` items 4–9, 14, 24 |
| IX.7 Ends with Parameters | `included` — `MA-5` item 13 |
| IX.8 Iterated Ends and Limits | `included` — `MA-5` items 11–12 |

**Ch X "Kan Extensions" (pp. 233–250).**

| heading | disposition |
|---|---|
| X.1 Adjoints and Limits | `included` — `MA-6` items 15–16 |
| X.2 Weak Universality | `inline` — `MA-6` items 1–3 |
| X.3 The Kan Extension | `included` — `MA-6` items 1–5 and naming-convention remark 2 |
| X.4 Kan Extensions as Coends | `included` — `MA-6` item 14 |
| X.5 Pointwise Kan Extensions | `included` — `MA-6` items 6–13 |
| X.6 Density | `included` — `MA-6` items 19–22 |
| X.7 All Concepts Are Kan Extensions | `included` — `MA-6` items 15–18; derived-functor applications `out-of-scope` to homological algebra |

### Mac Lane, *Homology* (1963), Ch XII §§2–3 (pp. 360–366)

| heading | disposition |
|---|---|
| 2. Subobjects and Quotient Objects: Prop. 2.1, Thm. 2.2, Thm. 2.3, Exercises 1–7 | `already-published` in substance — `MA-2` items 9–11 mint subobjects; Prop. 2.1 is `inline` in `MA-10` item 38's comember discussion |
| 3. Diagram Chasing: **Lemma 3.1 (The Weak Four Lemma)** | `included` — `MA-11` item 13 |
| **Lemma 3.2 (The 3×3 Lemma)** | `included` — `MA-11` item 20 |
| **Lemma 3.3 (The sharp 3×3 Lemma)** | `included` — `MA-11` item 22 |
| **Lemma 3.4 (The symmetric 3×3 Lemma)** | `included` — `MA-11` item 23 |

### Mac Lane, *Natural Associativity and Commutativity*, Rice Univ. Studies 49 (4) (1963), pp. 28–46 — read in full

| heading | disposition |
|---|---|
| 1. Introduction | `inline` — `MA-13` item 17 |
| 2. Categories with a multiplication (Thm 2.1) | `included` — `MA-12` item 1 |
| 3. Higher Associativity Laws (Thm 3.1, pentagon (3.5)) | `included` — `MA-12` item 1; `MA-13` item 3 |
| 4. Higher Commutativity Laws (Thms 4.1, 4.2, hexagon (4.5), $c^2=1$ (4.2)) | `included` — `MA-15` items 1, 6, 18 |
| 5. Higher Identity Laws (**Thm 5.1**, **Thm 5.2**, conditions (5.2)–(5.7)) | `included` — `MA-12` item 3 quotes Thm 5.2's five-condition list; items 20–22 retire three of them |
| 6. Tensored categories | `deferred` — Mac Lane's 1963 treatment of tensored categories predates the modern enriched formulation, which `MA-17` takes from Kelly; recorded rather than followed |

### Freyd, *Abelian Categories* (TAC Reprint 3) — Ch 1 (pp. 14–34), Ch 2 (pp. 35–63), §3.3 (pp. 67–70), Ch 4 (pp. 94–103), Ch 7 (pp. 138–150)

**The TAC PDF has no text layer at all**; every formula was read from a rendered
page, and the available OCR mangles Thm 2.39's proof entirely.

| heading | disposition |
|---|---|
| 1.1 Contravariant Functors and Dual Categories (15) | `already-published` — `def-opposite-category`, `thm-category-theoretic-duality-principle` |
| 1.2 Notation (16) · 1.3 The Standard Functors (16) | `already-published` — `def-hom-functors-and-hom-bifunctor` |
| 1.4 Special Maps (17), Props 1.41–1.45 | `already-published` — `def-monomorphism-and-epimorphism`, `prop-basic-calculus-of-monomorphisms-and-epimorphisms` |
| 1.5 Subobjects and Quotient Objects (19), Prop 1.51 | `already-published`/`included` — `MA-2` items 9–11 |
| 1.6 Difference Kernels and Cokernels (21), Prop 1.61 | `already-published` — `def-equalizers-and-coequalizers` |
| 1.7 Products and Sums (22), Prop 1.71 | `already-published` — `def-products-and-coproducts` |
| 1.8 Complete Categories (25) | `already-published` — `def-small-finite-and-large-limits-completeness-and-cocompleteness` |
| 1.9 Zero Objects, Kernels, and Cokernels (26) | `already-published` — `def-initial-terminal-and-zero-object`, `def-kernels-and-cokernels-as-equalizers-and-coequalizers` |
| Exercises 1A–1I | `inline` where relevant (1E abelian groups, 1F groups); 1B, 1D, 1I `out-of-scope` |
| **2.1 Theorems for Abelian Categories (36)**, Thms 2.11–2.19 | `included` — `MA-8` items 11–14 |
| **2.2 Exact Sequences (44)**, Thm 2.21, Prop 2.22 | `included` — `MA-10` items 3, 6 |
| **2.3 The Additive Structure for Abelian Categories (45)**, Thms 2.35, 2.38, **2.39** | `included` — `MA-8` item 18 and its proof strategy; `MA-7` items 17–19 |
| 2.4 Recognition of Direct Sum Systems (50) | `included` — `MA-7` items 14, 21 |
| **2.5 The Pullback and Pushout Theorems (51)**, Thm 2.54 and dual | `included` — `MA-8` items 22–25; `MA-11` item 27 |
| **2.6 Classical Lemmas (54)**: Lemmas 2.61–2.64, **nine lemma 2.65**, Noether isomorphisms 2.66, 2.67, **Splitting maps 2.68** | `included` — `MA-11` items 18–19, 25–26 |
| Exercises 2A (additive categories), 2B (idempotents), 2C (groups in categories) | 2A `included` (`MA-7` items 1, 23); 2B `included` (`MA-7` items 50–55); 2C `out-of-scope` |
| 3.3 Special Objects (67): Props 3.33, **3.35**, **3.36** | `included` — `MA-9` items 22–24 |
| Ch 4 Metatheorems (94–103): 4.1 Very Abelian, 4.2 First Metatheorem, 4.3 Fully Abelian, 4.4 Mitchell's Theorem, Thm 4.44 | `deferred` — this is the embedding machinery the block deliberately refuses as a proof device; `MA-8` items 48–49 record the statement and the refusal. Exercise 4A (modularity for *very abelian* categories) is `deferred` in favour of Murfet's general proof (`MA-9` item 6) |
| Ch 7 (138–150): **Thm 7.14**, **Thm 7.34 (Mitchell)** | Thm 7.34 `included` as `MA-8` item 48 with `proved_here: false`; Thm 7.14 and the proof machinery are `deferred` — the route runs through Ch 6 (Injective Envelopes) and substantial embedding machinery not built here |

### Wise, *A Non-Elementary Proof of the Snake Lemma*

Full 9-page author PDF, read in full:
`https://math.colorado.edu/~jonathan.wise/papers/snake.pdf`.

| heading/result | disposition |
|---|---|
| §1 The snake lemma, Thm 1 | `included` — `MA-11` item 7's Statement |
| §2 Abelian categories, Def. 1 (Wise's AB0/AB1/AB2) | `inline` — `MA-8` items 10, 17–18 and the convention register; the library does not adopt the weaker AB0+AB1 reading |
| §2.1 The additive structure on morphisms, Lems 1–2 | `included`/`inline` — `MA-8` items 11, 18; Lem. 2's use of Lem. 1 makes AB2 load-bearing and is recorded |
| §2.2 Exact sequences, Lem. 3, Def. 2, Lem. 4 | `included` — `MA-10` items 2–3 and inline in `MA-11` item 7 |
| §3 Proof of the snake lemma | `included` — independent categorical proof backing `MA-11` item 7 |
| §4 The salamander lemma, Thms 2–3 | `out-of-scope` — chain/double-complex homology belongs to `homological-algebra` |

### Tan, *The Freyd–Mitchell Embedding Theorem*

Full 28-page arXiv text: `https://arxiv.org/pdf/1901.08591`. Read §2
(pp. 1–6), §6 (pp. 14–18), and §7 through Cor. 7.17 (pp. 18–26).

| heading/result | disposition |
|---|---|
| §2 Def. 2.1 complete/cocomplete | `already-published` — limits and colimits |
| §2 Def. 2.2 Freyd axioms; Thm 2.3 kernel/cokernel anti-isomorphisms; Thm 2.4 balanced; Thm 2.5 intersections; Fact 2.6 finite (co)limits; Def. 2.7, Fact 2.8 image/coimage; Lem. 2.9 half-nine; Lem. 2.10 nine; Thm 2.11 hom-set abelian groups | `included` — `MA-8` items 4–18, 21, 28; `MA-9` items 4–5; `MA-11` items 18–19 |
| §6 Essential extensions, injective envelopes, maximal disjoint subobjects and transfinite machinery | proof machinery `deferred` to homological algebra; its explicit Zorn use records the ordinary-AC part of `MA-8` item 48's external proof cost |
| §7 Thm 7.13 through Cor. 7.17 | reflector/fully-abelian proof machinery `deferred`; **Cor. 7.17 `included`** as `MA-8` item 48 with `proved_here: false`. The source's class-indexed choice of reflections is why the proof is not certified under SE-D3 |

Montaruli, *Towards constructivising the Freyd–Mitchell embedding theorem*, TAC
41 (2024), full text `https://arxiv.org/pdf/2203.12490`, is used only as a
modern caution: its abstract says the classical proof does not work in CZF. It
supports the refusal to call the theorem constructive; it does not establish an
optimal AC lower bound.

### Mitchell, *Theory of Categories* (1965), Ch I §§13–21 (pp. 15–35)

| heading | disposition |
|---|---|
| 13. Kernels · 14. Normality | `included` — `MA-8` items 1, 13 |
| 15. Exact Categories | `inline` — Mitchell's "exact category" is his own notion and is absorbed into `MA-8` item 17's discussion; **it is not Quillen's**, §10.2 item 8 |
| 16. The 9 Lemma | `included` — `MA-11` item 18 |
| 17. Products | `already-published` |
| **18. Additive Categories**, Prop. 18.4 | `included` — `MA-7` items 18, 22; `MA-8` item 18's proof strategy |
| 19. Exact Additive Categories | `inline` — `MA-8` item 17 |
| **20. Abelian Categories**, Thm 20.1 | `included` — `MA-8` item 19 |
| 21. The Category of Abelian Groups | `included` — `MA-8` item 40 |

### Weibel, *An Introduction to Homological Algebra* — §1.2 (pp. 5–9), §1.3 (pp. 10–14), §1.6 (pp. 25–30), App. A.4 (pp. 424–427), plus both errata files

| heading | disposition |
|---|---|
| §1.2 Operations on Chain Complexes: Def. 1.2.1, **Def. 1.2.2**, Thm 1.2.3 | Defs `included` (`MA-8` item 9, `MA-10` item 2); the chain-complex operations are `out-of-scope`, belonging to `homological-algebra` (§11 amendment 4) |
| §1.3 Long Exact Sequences: Thm 1.3.1, Ex. 1.3.1, **Ex. 1.3.2 (3×3)**, **Snake Lemma 1.3.2**, Etymology, Remark, **Ex. 1.3.3 (5-Lemma)**, Addendum 1.3.3, **Prop. 1.3.4** | the diagram lemmas `included` (`MA-11` items 7, 16, 20); Thm 1.3.1 and the long exact sequence of a complex `out-of-scope` — `homological-algebra` |
| §1.6 More on Abelian Categories: **Freyd-Mitchell 1.6.1**, Lem. 1.6.2, Functor Categories 1.6.4, Def. 1.6.5 (Sheaves), Cor. 1.6.9, Yoneda 1.6.10–1.6.11, Prop. 1.6.12, Cor. 1.6.13 | 1.6.1 `included` as `MA-8` item 48 with `proved_here: false`; 1.6.4 `included` as `MA-8` item 42; the Yoneda items `already-published`; **Def. 1.6.5 (Sheaves) `deferred`** — sheaves need a site or a topological base the library has not built, and `MA-9`'s B page records the dropped example; 1.6.12–1.6.13 `deferred` (localizing subcategories, §8 denial 5) |
| §2.6.15 (p. 57) filtered colimits of modules are exact | `included` — `MA-9` items 32, 35a |
| App. A.4: A.4.1, **Def. A.4.2**, **A.4.3 (AB3/AB3\*)**, Ex. A.4.4, (AB4)/(AB4\*), Ex. A.4.5, **A.4.6 (AB5/AB5\*)**, Ex. A.4.7, Exercises A.4.1–A.4.7 | `included` — `MA-7` items 1, 23; `MA-9` items 27–30, 35 and trap 9. **Weibel gives no AB6** |
| App. A.5 Limits and Colimits · A.6 Adjoint Functors | `already-published` / `included` at `MA-1` |

### The Stacks Project, chapter **Homology** (chapter tag `00ZU`)

The chapter tag is **`00ZU`**; `0104` is the *Definition of an additive category*
and is not the chapter.

| section heading (tag) | disposition |
|---|---|
| Introduction `00ZV` · Basic notions `00ZW` | `inline` |
| **Preadditive and additive categories `09SE`** — `00ZY`, `00ZZ`, `0100`–`0107`, `09QG`, `0E43`, `0H9N`–`0H9S` | `included` — `MA-7` items 1, 12–14, 23; `MA-8` items 4, 7 |
| **Karoubian categories `09SF`** — `09SG`, `09SH`, `05QV` | `included` — `MA-7` items 50–55 |
| **Abelian categories `00ZX`** — `0109`, `010A`–`010G`, `08N2`–`08N7`, `05PK`, **`010H` snake**, **`05QA` four**, **`05QB` five**, Example `0108` | `included` — `MA-8` items 9, 12, 16, 20, 44; `MA-10` items 2, 8–9, 28–32, 36; `MA-11` items 5, 8, 10, 12 |
| Extensions `010I` — `010J`, `010K`, Baer sum `010L`, six-term `05E2` | `deferred` — Ext and the Baer sum belong to `homological-algebra` (§11 amendment 4) |
| Additive functors `010M` — `0DLP`, `010N`, `010O`, `03A3` | `included` — `MA-8` items 34, 34a, 34b, 35–36; **`010N`(1) "if $F$ is either left or right exact then it is additive"** is `MA-8` item 34a |
| Localization `05QC` | `deferred` — calculi of fractions, §8 denial 7 |
| **Jordan–Hölder `0FCD`** | `included` — `MA-9` items 14–19 |
| Serre subcategories `02MN` — `02MO`–`06XK` | `deferred` — quotient abelian categories are the localisation theory of §8 denial 7 |
| K-groups `02MT` | `out-of-scope` — algebraic K-theory is a subject area |
| Cohomological delta-functors `010P` · Complexes `010V` · Homotopy and the shift functor `0119` · Truncation `0118` · Graded objects `09MF` · Double complexes · Filtrations `0120` · Spectral sequences (6 sections) · Injectives · Inverse systems | `out-of-scope` for this track and **owed to `homological-algebra`** (§11 amendment 4) |
| Additive monoidal categories `0FN9` | `deferred` — it is the intersection of this track's two halves and would be the natural first page of a follow-on |
| **Injectives §"Grothendieck's AB conditions", Def. `079B`** | `included` — `MA-9` items 27–31 |

### Murfet, *Abelian Categories* (therisingsea.org), §2 (pp. 12–23) and §4.1–4.2 (pp. 26–29)

Open lecture notes with a printed contents list; the local copy was verified
byte-identical to the live URL by hash.

| heading | disposition |
|---|---|
| 1 Categories · 1.1 Limits and Colimits · 1.2 Functor Categories · 1.3 Adjoint Functors | `already-published` |
| **2 Abelian Categories** (Defs 33, 34, 36, 40) | `included` — `MA-7` items 1, 13, 23; `MA-8` item 9 |
| 2.1 Functor Categories | `included` — `MA-8` item 42 |
| **2.2 Grothendieck's Conditions** (Defs 45–47) | `included` — `MA-9` items 27–30 |
| **2.3 Grothendieck Categories** | `included` — `MA-9` item 31 |
| 2.4 Portly Abelian Categories | `out-of-scope` — it is a universe/size convention incompatible with §3.1 |
| 3 Reflective Subcategories | `already-published` at `MA-2` |
| **4.1 Modular Lattices** (Def 55, Props 69, 72) | `included` — `MA-9` items 1, 6 |
| **4.2 Subobject Lattices** (**Prop 73**) | `included` — `MA-9` items 5–6 |
| 4.3 Finiteness Conditions · 4.4 …for Modules | `included` — `MA-9` items 19–20 |
| 5 Simple objects | `included` — `MA-9` item 14 |
| 6 Injectives | `included` in part — `MA-9` items 38, 41; the existence theorems are `deferred` to `homological-algebra` |

### Grothendieck, *Sur quelques points d'algèbre homologique* (Tôhoku, 1957), §§1.4, 1.5, 1.9

| heading | disposition |
|---|---|
| §1.4 (p. 127): **AB 1)**, **AB 2)** | `included` — `MA-8` items 9–10 |
| §1.5 "Sommes et produits infinis" (pp. 128–129): **AB 3)**, **AB 4)**, **AB 5)**, **AB 6)** | AB3–AB5 `included` (`MA-9` items 27–29); **AB6 `deferred`** — it is a statement about families of directed families that nothing in this block or in `homological-algebra`'s planned band consumes, and Weibel does not state it either |
| §1.9 (p. 134): famille de générateurs | `included` — `MA-9` item 22 |
| the dual axioms AB3\*–AB6\* | **not stated by Grothendieck** — he leaves them to the reader, so `MA-9` items 27–29 cite Weibel and Stacks for the starred halves. §10.2 item 6 |

### EGNO, *Tensor Categories* — Ch 1 (pp. 1–19), Ch 2 (pp. 21–47), §§4.1–4.3, 4.7–4.8, §8.1, §8.10

| heading | disposition |
|---|---|
| 1.1 Categorical prerequisites · 1.2 Additive categories · 1.3 Definition of abelian category · 1.4 Exact sequences | `already-published`/`included` — `MA-7`, `MA-8`, `MA-10` |
| **1.5 Length of objects and the Jordan-Hölder theorem** | `included` — `MA-9` items 14–19 |
| 1.6 Projective and injective objects | `included` — `MA-9` items 36–41 |
| 1.7 Higher Ext groups and group cohomology | `out-of-scope` — `homological-algebra` |
| 1.8 Locally finite (artinian) and finite abelian categories | `included` — `MA-18` items 2–3 |
| 1.9 Coalgebras · 1.12 The finite dual of an algebra · 1.13 Pointed coalgebras | `out-of-scope` — Hopf-algebra theory, §8 denial 6 |
| **1.10 The Coend construction** | `already-published` in this track — `MA-5` items 4, 8 |
| 1.11 Deligne's tensor product of locally finite abelian categories | `deferred` — rests on 1.8 |
| **2.1 Definition of a monoidal category** (Def. 2.1.1) | `included` — `MA-12` item 1 |
| **2.2 Basic properties of unit objects** (Prop. 2.2.4, Cor. 2.2.5, Def. 2.2.8, Rem. 2.2.9) | `included` — `MA-12` items 20–23 |
| 2.3 First examples of monoidal categories | `included` — `MA-12` items 7–19 |
| **2.4 Monoidal functors and their morphisms** (Defs 2.4.1, 2.4.5, 2.4.8, Rem. 2.4.9) | `included` — `MA-12` items 24–29 |
| 2.5 Examples of monoidal functors (Rem. 2.5.6) | `included` — `MA-16` item 17's negative half |
| 2.6 Monoidal functors between categories of graded vector spaces | `deferred` — needs graded vector spaces and group cohomology; `MA-15`'s B page records the dropped braiding example |
| 2.7 Group actions on categories and equivariantization | `out-of-scope` — a subject area |
| **2.8 The Mac Lane strictness theorem** (Thm 2.8.5, Rems 2.8.6–2.8.7, Ex. 2.8.8, displays (2.38)–(2.42)) | `included` — `MA-13` items 9–14 |
| **2.9 The coherence theorem** (Thm 2.9.2, Ex. 2.9.1) | `included` — `MA-13` items 3–4; `MA-12` item 31 |
| **2.10 Rigid monoidal categories** (Defs 2.10.1–2.10.2, Rem. 2.10.3, Prop. 2.10.5, Prop. 2.10.8, Rem. 2.10.9, Exs 2.10.4, 2.10.12, 2.10.15) | `included` — `MA-16` items 1–17 |
| 2.11 Invertible objects and Gr-categories | `deferred` — Gr-categories need group cohomology |
| 2.12 2-categories | `already-published` — `def-strict-two-category` |
| **4.1 Tensor and multitensor categories** (Def. 4.1.1) | `included` — `MA-18` items 4–6 |
| **4.2 Exactness properties** (Prop. 4.2.1, Rem. 4.2.2, Def. 4.2.3, Def. 4.2.5, Rem. 4.2.6, Props 4.2.8–4.2.10, Prop. 4.2.12, Cor. 4.2.13) | `included` — `MA-18` items 7–11 and 15–16; **Prop. 4.2.10 is `deferred` specifically** because its finite-ring and Frobenius–Perron machinery lies beyond §8 denial 6 |
| **4.3 Semisimplicity of the unit** (Thm 4.3.1, Cor. 4.3.2, Def. 4.3.5, Thm 4.3.8, Cor. 4.3.9, Rem. 4.3.10) | the unit and functor results are `included` — `MA-18` items 12–16; the full component-matrix formalism of Def. 4.3.5 is `inline` in item 12's proof because no later item consumes the notation |
| **4.7 Quantum traces, pivotal and spherical categories** (Def. 4.7.1, Props 4.7.3, 4.7.5, Defs 4.7.7, 4.7.11, 4.7.14, **Thm 4.7.15**, Ex. 4.7.16) | `included` — `MA-16` items 19–26 |
| **Cor. 4.7.13** (dimensions are algebraic integers) | `deferred` — **specifically denied** at §8 denial 6; it needs the integrality theory of fusion categories |
| **4.8 Semisimple multitensor categories** (Prop. 4.8.1, Question 4.8.3, Prop. 4.8.4) | Prop. 4.8.1 and Question 4.8.3 `included` — `MA-18` items 21–22; Prop. 4.8.4 `inline` in the source discussion rather than minted because nothing downstream uses the simple-object trace result |
| **8.1 Definition of a braided category** (Def. 8.1.1, Ex. 8.1.6, Def. 8.1.7, Rem. 8.1.8, Prop. 8.1.10) | `included` — `MA-15` items 1, 4, 5, 9, 10 |
| **8.10 Ribbon monoidal categories** (Def. 8.10.1, Prop. 8.10.6, (8.35)) | `included` — `MA-16` items 18, 27–28 |
| Chs 3, 5, 6, 7, 9 and the rest of Ch 8 | `deferred`/`out-of-scope` result by result under §8 denial 6 — Frobenius–Perron dimension, module categories, centres/modularity and reconstruction each require the separately named machinery in `MA-18` item 23 |

### Meusburger, *Tensor Categories* (FAU lecture notes, 31 October 2023)

Full text: `https://www.math.fau.de/wp-content/uploads/2024/01/Tensor-Categories.pdf`.
Read §§1.1–1.2, 2.1–2.2, 3.1, 3.3, 8.1 from Def. 8.1.7, and the opening of §8.2.

| heading or named result | disposition |
|---|---|
| 1.1 Categories and monoidal categories; Defs 1.1.1, 1.1.9–1.1.11 | `included` — `MA-12` and `MA-15`; categorical prerequisites `already-published` |
| 1.2 Strictification and coherence; Lem. 1.2.1, Cor. 1.2.2, Thms 1.2.3–1.2.4 | `included` — `MA-12` unit results and `MA-13` strictification/coherence |
| 2.1 Rigid monoidal categories; Def. 2.1.1, Props 2.1.2, 2.1.4–2.1.5 | `included` — `MA-16` items 1–12 |
| 2.2 Pivotal categories and traces; Def. 2.2.1, Lem. 2.2.5, Cor. 2.2.6 | `included` — `MA-16` items 19–28 |
| 3.1 Braided categories; Defs 3.1.1, 3.1.6, Prop. 3.1.8 | `included` — `MA-15` |
| 3.2 Centre | `deferred` — Drinfeld-centre theory is individually denied at §8.6 |
| 3.3 Ribbon categories; Def. 3.3.1, Lem. 3.3.2 | `included` — `MA-16` items 27–28 |
| 8.1 $F$-linear abelian categories; Defs 8.1.7–8.1.9 | `included` — `MA-18` items 1–3; Prop. 8.1.10 Eilenberg–Watts is `deferred` because it needs the module-functor/reconstruction spine |
| 8.2 Tensor categories and reconstruction; Defs 8.2.1–8.2.3 | definitions `included` — `MA-18` items 4–6; Thm 8.2.5 reconstruction `deferred` under §8 denial 6 because Hopf/Tannaka machinery is absent |

### Etingof–Gelaki–Nikshych–Ostrik, MIT 18.769 lecture notes

Full text: `https://math.mit.edu/~etingof/tenscat.pdf`. Read §§1.1–1.6,
1.8–1.10, 1.37–1.39 and 1.41.

| heading/result | disposition |
|---|---|
| 1.1 Definition; 1.2 unit objects; 1.3 examples | `included` — `MA-12` items 1–23 and B examples; module tensor constructions remain cite-only |
| 1.4 Monoidal functors; 1.5 morphisms of monoidal functors | `included` — `MA-12` items 24–29 |
| 1.6 Endofunctor/bimodule examples | `included` in the endofunctor case at `MA-12`; the Eilenberg–Watts/bimodule classification is `deferred` because it needs module-functor machinery |
| 1.8 strictness; 1.9 Mac Lane coherence (Thm. 1.9.1) | `included` — `MA-13` |
| 1.10 duals and rigidity (Props 1.10.4, 1.10.7, 1.10.9; Def. 1.10.11) | `included` — `MA-16` items 1–17 |
| 1.37 quantum traces; 1.38 pivotal categories and dimensions; 1.39 spherical categories | `included` — `MA-16` items 19–26; algebraic-integrality corollaries `deferred` under §8 denial 6 |
| 1.41 semisimple tensor-category trace results | `inline`/`included` — warning at `MA-18` items 21–23; Prop. 1.41.5 is not separately minted because nothing consumes it |

### Aguiar–Mahajan, *Monoidal Functors, Species and Hopf Algebras*

Full author-hosted text: `https://pi.math.cornell.edu/~maguiar/a.pdf`. Read
§§1.1.2, 1.2.1–1.2.2 and 1.2.6–1.2.7.

| heading/result | disposition |
|---|---|
| 1.1.2 Braided monoidal categories | `included` — `MA-15` items 1–10 |
| 1.2.1 Monoids and comonoids, Def. 1.9 | `included` — `MA-12` monoid/comonoid objects |
| 1.2.2 monoids and comonoids in a braided base | `included` — `MA-15`: braided base gives monoidal categories of monoids/comonoids |
| 1.2.6 commutative monoids, Def. 1.17; 1.2.7 iterated constructions | `included`/`inline` — symmetric base gives symmetric monoidal monoids; the explicit warning that a nonsymmetric braiding does not generally descend is retained |
| Bimonoids/Hopf monoids, Def. 1.10 and later applications | `out-of-scope` — Hopf-algebra theory is individually denied by §8 denial 6 |

### Awodey, *Notes on Type Theory*, Exercise 2.2.21

Full notes: `https://awodey.github.io/typetheory/notes/typetheory.pdf`. Read only
Ex. 2.2.21 (p. 44). Its presheaf exponential formula
$(Q^P)(c)=\operatorname{Nat}(y(c)\times P,Q)$, restriction by precomposition and
evaluation are `included` at `MA-14` item 14. The rest of the notes is
`out-of-scope` for this source harvest: type theory and homotopy type theory are
not used by the track.

### Joyal–Street, *Braided monoidal categories*, Macquarie Report 860081 (1986) — §§1–4 read closely

| heading | disposition |
|---|---|
| §1. Braidings (B1, B2, S, B3–B7, Prop. 1) | `included` — `MA-15` items 1, 3, 6–7 |
| §2. Examples | `included` in part — the braid category is `MA-15` item 17; the quantum-group examples are `out-of-scope` |
| §3. Multiplications on monoidal categories (Props 2, 3) | `included` — `MA-12` items 24–25 |
| **§4. Coherence for braidings (Theorem 4)** | `included` — `MA-15` items 22–23, 25 |
| §5. Categories enriched over braided monoidal categories | `deferred` — `MA-17` enriches over a monoidal base only; braided enrichment is a further layer nothing in the band consumes |
| §6. Cohomology of groups · §7. Cohomology of abelian groups | `out-of-scope` — `homological-algebra`, and beyond it |

### Kelly, *Basic Concepts of Enriched Category Theory*, TAC Reprint 10 — Chs 1–3 in full (pp. 7–58), plus the Introduction

**Kelly numbers by displayed equation, not by theorem.** Chapters 1 and 2 contain
**zero numbered results**; Chapter 3's complete list is Props 3.36, 3.37, 3.40,
3.41, 3.46, **Theorem 3.73**, Props 3.75, 3.76. Kelly states the scheme himself in
Introduction §(vi).

| heading | disposition |
|---|---|
| 1.1 Monoidal categories | `already-published` in this track — `MA-12` item 1 |
| **1.2 The 2-category $\mathcal V$-CAT for a monoidal $\mathcal V$** — (1.3)–(1.7) | `included` — `MA-17` items 1, 3, 5, 8 |
| **1.3 The 2-functor $()_0$** — (1.10)–(1.13) | `included` — `MA-17` items 9–11 |
| 1.4 Symmetric monoidal categories: tensor product and duality — (1.14)–(1.19) | `included` — `MA-17` item 4 and trap 5 |
| **1.5 Closed and biclosed monoidal categories** — (1.23), (1.25)–(1.27) | `included` — `MA-14` items 1, 8 |
| **1.6 $\mathcal V$ as a $\mathcal V$-category; representable $\mathcal V$-functors** — (1.28)–(1.32) | `included` — `MA-17` items 17–18 |
| 1.7 Extraordinary $\mathcal V$-naturality — **(1.39)**, (1.40)–(1.41) | (1.39) `included` as `MA-17` item 6; extraordinary naturality `deferred` — it serves the enriched functor-category construction, which this page does not build |
| 1.8 The $\mathcal V$-naturality of the canonical maps | `inline` — absorbed into `MA-17` item 6 |
| **1.9 The (weak) Yoneda lemma** — (1.46)–(1.47) | `included` — `MA-17` item 20 |
| 1.10 Representability of $\mathcal V$-functors | `inline` — `MA-17` item 18 |
| 1.11 Adjunctions and equivalences in $\mathcal V$-CAT | `included` — `MA-17` items 38–41; item 40's cotensor-recognition refinement is controlled by accessible sources |
| **2.1 Ends in $\mathcal V$** — (2.2), (2.8)–(2.9) | `already-published` in this track — `MA-5` items 8, 11 |
| 2.2 The functor-category $[\mathcal A,\mathcal B]$ for small $\mathcal A$ — (2.10), (2.16) | `included` in the exact small-source form needed by `MA-17` items 22–23; the unrestricted large-source construction is `out-of-scope` by §8 denial 3 |
| 2.3 The isomorphism $[\mathcal A\otimes\mathcal B,\mathcal C]\cong[\mathcal A,[\mathcal B,\mathcal C]]$ | `inline` in the small-source functor-category proof; the large form is `out-of-scope` for the same size reason |
| **2.4 The (strong) Yoneda lemma** — (2.31)–(2.33) | `included` — `MA-17` items 21, 23 |
| 2.5 The free $\mathcal V$-category on a Set-category — (2.38)–(2.40) | `included` — `MA-17` item 26a, used by item 27's definition of conical limit |
| 2.6 · 3.11 · 3.12 Universe-enlargement | `out-of-scope` — universes are denied at §8 denial 1 |
| **3.1 Indexing types; limits and colimits** — (3.1)–(3.7) | `included` — `MA-5` item 15; `MA-17` item 26 |
| 3.2 Preservation of limits and colimits | `included` — `MA-5` item 22 |
| 3.3 Limits in functor categories; double limits | `deferred` — §8 denial 14 |
| 3.4 The connexion with classical conical limits when $\mathcal V=$ Set | `included` — `MA-5` item 18 |
| 3.5 Full subcategories and limits · 3.6 Strongly generating functors | `deferred` — §8 denial 14; enriched-limit technology serving functor categories the library does not build |
| **3.7 Tensor and cotensor products** — (3.42)–(3.45) | `included` — `MA-17` items 24–25; `MA-5` item 17 |
| **3.8 Conical limits in a $\mathcal V$-category** | `included` — `MA-17` item 27 |
| **3.9 The inadequacy of conical limits** — (3.56)–(3.58) | `included` — `MA-17` items 28–29; `MA-5` item 19 |
| **3.10 Ends and coends in a general $\mathcal V$-category; completeness** — (3.59)–(3.70), **Theorem 3.73** | `included` — `MA-17` items 32–33; `MA-5` item 17 |
| Chs 4–6 (Kan extensions, density, essentially-algebraic theories) | `deferred` — §8 denial 14 |
| Introduction §(iii), the change-of-base declination | `included` — quoted at `MA-17` item 37 and §8 denial 13 |

### Riehl, *Categorical Homotopy Theory* — Ch 3 (pp. 25–44), Ch 7 (pp. 79–96), §10.1

| heading | disposition |
|---|---|
| 3.1 A first example · 3.2 The base for enrichment · 3.3 Enriched categories · 3.4 Underlying categories · 3.5 Enriched functors and natural transformations | `included` — `MA-17` items 1, 5–11, 14 |
| 3.6 Simplicial categories · 3.8 Simplicial homotopy and simplicial model categories | `out-of-scope` — §8 denial 7 |
| 3.7 Tensors and cotensors (Defs 3.7.2–3.7.3) | `included` — `MA-17` item 24 |
| **Lemma 3.4.3 (change of base)**, **Remark 3.5.11** | `included` — `MA-17` items 34–36 |
| 7.1–7.4 Weighted limits and colimits (Def. 7.4.1, Rem. 7.4.2) | `already-published` in this track — `MA-5` items 15–17 |
| **7.5 Conical limits and colimits** (Ex. 7.5.2, **Thm 7.5.3**) | `included` — `MA-17` items 30–31 |
| 7.6 Enriched completeness and cocompleteness (Cor. 7.6.4) | `included` — `MA-17` item 32 |
| 7.7 Homotopy (co)limits · 7.8 Bar and cobar | `out-of-scope` — §8 denial 7 |
| §10.1 Two-variable adjunctions (10.1.1, Def. 10.1.3, Prop. 10.1.4) | `inline` — `MA-14` item 1 takes the two-variable adjunction from *Category Theory in Context* Def. 4.4.7 instead, which is the source the library already cites |
| Chs 8–16 | `out-of-scope` — homotopy theory |

### Cruttwell, *Normed Spaces and the Change of Base for Enriched Categories* (Dalhousie PhD thesis, 2008)

| heading | disposition |
|---|---|
| 2.1 Monoidal Categories · 2.1.1 Monoidal Functors | `already-published` in this track — `MA-12` |
| 2.2 Enriched Category Theory · 2.2.1 $\mathcal V$-Functors · 2.2.2 $\mathcal V$-Natural Transformations · 2.3 The 2-Category $\mathcal V$-cat | `included` — `MA-17` items 1, 3, 5, 8 |
| 4.1 Coherence Theorems for Monoidal Functors | `inline` — `MA-12` item 24 |
| **4.2 Change of Base $N_\ast$** (Props 4.2.1–4.2.3, **Thm 4.2.4**) | `included` — `MA-17` items 34–35 |
| 4.3 Change of Base as a 2-functor · 4.4 Adjunctions in Moncat | `deferred` — §8 denial 13, and Kelly's own reason for declining |
| Chs 5–8 (profunctors, double categories, normed spaces) | `out-of-scope` — subject areas |

### Johnstone, *Part III Category Theory*, notes by D. Mehrle, §7 (pp. 63–80)

Open lecture notes with a harvestable contents list. Named results over pp. 70–74:
Lemma 7.17, Cors 7.18–7.19, Def. 7.20, Rem. 7.21, Def. 7.22, **Lemma 7.23 (The
Five Lemma)**, **Lemma 7.24 (Snake Lemma)**, Def. 7.25. All `included` — `MA-10`
item 2, `MA-11` items 3, 16 — and the set is this block's independent check that
the diagram lemmas are provable arrow-theoretically, since **Lemma 7.23's proof is
two pullbacks with no elements and no embedding**.

### Borceux, *Handbook of Categorical Algebra* vol. 2

**Bibliographic/contents record only.** The publisher-controlled body was not
obtained in full and this source is not counted as read pair backing. The rows
below dispose the contents headings consulted for orientation; numbered-result
locators are leads to re-check against a lawful copy, never quotations or
component-provenance sources. See S-7.

| heading | disposition |
|---|---|
| Ch 1: 1.1 Zero objects and kernels · 1.2 Additive categories and biproducts · 1.3 Additive functors · 1.4 Abelian categories · 1.5 Exactness · 1.6 Additivity · 1.7 Unions · 1.8 Exact sequences · 1.9 Diagram chasing · 1.10 Diagram lemmas · 1.11 Exact functors | `inline` orientation only; Mac Lane, Freyd, Mitchell, Murfet, Stacks and Weibel are the read sources backing the corresponding `MA-7`–`MA-11` items |
| 1.12 Torsion theories · 1.13 Localizations · **1.14 The embedding theorem** | `deferred` — §8 denial 5 and §8 denial 7 |
| **Ch 6 "Enriched category theory" (pp. 291–348)**: 6.1 symmetric monoidal closed categories · 6.2 enriched categories · 6.3 enriched Yoneda · 6.4 change of base · 6.5 tensors/cotensors · 6.6 weighted limits · 6.7 enriched adjunctions · 6.8 exercises | `inline` as a bibliographic map to `MA-17`; Kelly, Riehl, Cruttwell and the accessible enriched-adjoint papers supply the actual statements. Distributors are `deferred` as a separate bicategorical subject |
| Chs 2, 3, 5, 7, 8 (regular categories, algebraic theories, accessible categories, topological categories, fibred categories) | `out-of-scope` — each is a subject area; accessible categories are §8 denial 4 |
| **vol 1 Ch 6 "Flat functors and Cauchy completeness" (pp. 250–280)** | `out-of-scope`, and recorded **only to prevent a mis-citation**: it is not the enriched chapter, and "Borceux Ch 6" without a volume is ambiguous |

### Accessible controls for Borceux vol. 2, Theorem 6.7.6

Borceux–Quinteiro–Rosický, *A Theory of Enriched Sketches*, full TAC paper
`https://www2.math.ethz.ch/EMIS/journals/TAC/volumes/1998/n3/n3.pdf`, read the
proof of Thm. 8.7; Guillou–May, *Enriched Model Categories and Presheaf
Categories*, full author PDF
`https://math.uchicago.edu/~may/PAPERS/VmodPLAIN2018%20copy.pdf`, read §4.1,
p. 32.

| heading/result | disposition |
|---|---|
| Borceux–Quinteiro–Rosický, proof of Thm. 8.7 | `included` — exact cotensored/preservation/ordinary-left-adjoint criterion at `MA-17` item 40; the enriched-sketch theorem itself is `out-of-scope` because sketches are not consumed |
| Guillou–May §4.1, tensor-preserving underlying-right-adjoint criterion and its dual | `included` — dual half of `MA-17` item 40; model-category applications `out-of-scope` under §8 denial 7 |

### Rotman, *An Introduction to Homological Algebra*, 2nd ed.

Read only at **Theorem 6.13 "Naturality of $\partial$" and the following Remark
(pp. 335–336)**, which is the sole source located that supplies the arrow-category
idea behind `MA-11` item 10. `included`. The rest of the book is `out-of-scope`
— it is `homological-algebra`'s.

## 10.2 The source-convention register

Every disagreement found between two sources that define the same word
differently, with the library's adoption and its reason. **Where a convention was
already fixed by published library text, the published text wins** (§4).

1. **"Additive category" — six sources, five axiom lists.** Mac Lane: an
   Ab-category with a zero object and binary biproducts. Weibel: an Ab-category
   with a zero object and binary products. Stacks: preadditive with finite
   products. Murfet: preadditive with finite products *and* coproducts. **Freyd's
   "pre-additive" already contains a zero object.** **Mitchell's "additive" has no
   product axiom at all**, and his "semiadditive" is enriched in abelian
   *semigroups*. **Adopted:** `MA-7` item 23 — preadditive with a zero object and
   all finite biproducts — with items 15, 16 and 24 proving the others equivalent
   under its hypotheses. It asserts no source is wrong.
2. **"Generator".** Mac Lane defines a generating *set* by the separating
   property, and says so himself: *"the term 'generates' is well established but
   poorly chosen; 'separates' would have been better"*. Grothendieck and the
   Stacks Project define it by **subobjects**. Freyd defines it by **faithfulness
   of $\mathcal A(G,-)$**. **Adopted:** `MA-9` item 22 takes the separating form,
   citing `MA-2` item 15, and item 23 proves the equivalences — with Freyd's
   right-completeness hypothesis on the coproduct form. Item 24a records the split.
3. **The AB numbering.** Grothendieck's **AB1/AB2** are the axioms upgrading
   *additive* to *abelian*; **Weibel's AB2 is a different statement** (every monic
   is the kernel of its cokernel); **the Stacks Project starts at AB3 and never
   states AB1 or AB2**; Murfet uses only AB4/AB5. **There is no Grothendieck axiom
   "AB0".** **Adopted:** `MA-8` item 10 states Grothendieck's AB1/AB2 verbatim and
   names both hazards. *(Tiebreaker note: an encyclopedia entry was consulted once,
   on the AB numbering, and is not a backing source for any pair.)*
4. **"Closed category".** Mac Lane's §VII.7 definition **builds symmetry in**;
   the modern notion does not, and Riehl separates left closure, right closure and
   biclosed. **Adopted:** `MA-14` items 1 and 3, the modern form, with the sides
   always named. **EGNO defines no closed monoidal category at all**, and its
   "internal Hom" is the module-category notion — a different thing.
5. **"Monoidal functor".** **CWM XI.2 and Joyal–Street §3 default to lax**;
   **EGNO Def. 2.4.1 defaults to strong and has no lax notion.** **Adopted:** §4.5
   — the word is never used bare in this library, and `MA-12` item 24 carries all
   three notions in one item so the distinction cannot drift.
6. **The starred AB axioms.** **Grothendieck never writes them out**, leaving them
   to the reader. **Adopted:** `MA-9` items 27–29 cite Weibel A.4.3/A.4.6 and
   Stacks [079B] for the starred halves; citing Tôhoku for a starred axiom's
   *statement* is an inaccurate citation. The Barr translation additionally carries
   a typo in the AB6 display, so the French scan controls.
7. **The associator's direction.** **Mac Lane 1963 and CWM both reverse it**
   relative to EGNO and Joyal–Street. **Adopted:** §4.2, the EGNO direction, with
   the correction of this file's own earlier error recorded there.
8. **"Exact category".** Mitchell's is normal + conormal with kernels, cokernels
   and epi–mono factorisations; **it is not Quillen's**, and Freyd's "exact
   subcategory" is a third usage. **Adopted:** the phrase is not used in this
   library; `MA-8` item 39 says "abelian subcategory and exact embedding" instead.
9. **"Tensor category".** CWM XI.1 says in terms that *"monoidal categories are
   often called tensor categories"*, and Joyal–Street's published title uses it
   that way; **EGNO Def. 4.1.1 reserves it for a locally finite $k$-linear abelian
   rigid monoidal category with $\operatorname{End}(\mathbf 1)\cong k$**.
   **Adopted:** §4.6 — the phrase is never a synonym for *monoidal*. It is used
   on `MA-18` only with EGNO's full hypotheses, and in `MA-16` item 29 only as
   a boundary pointer to that definition.
10. **Image and coimage: arrows or objects?** Mac Lane sets $m=\operatorname{im}f$
    and $e=\operatorname{coim}f$, which are **arrows**; Stacks makes
    $\operatorname{Im}(f)$ and $\operatorname{Coim}(f)$ **objects**. **Adopted:**
    objects, `MA-8` item 4, because §4.4's subobject comparison needs them to be
    subobjects.
11. **Monomorphism and epimorphism in an abelian category.** Stacks introduces
    *injective*/*surjective* ($\ker f=0$, $\operatorname{coker}f=0$) and **proves**
    they coincide with mono/epi; **Weibel defines monic and epi by
    $fg=0\Rightarrow g=0$** and warns that this differs from the general-category
    definition. **Adopted:** the published `def-monomorphism-and-epimorphism` is
    the definition, and `MA-8` item 16 is the bridge theorem.
12. **The member calculus: how many rules?** Mac Lane's rendered Theorem
    VIII.4.3 states six, with three clauses in rule (vi). The prior scaffold
    recorded a five-rule Borceux packaging, but this lane did not obtain the
    Borceux body and therefore does not treat that note as verified source
    evidence. **Adopted:** `MA-10` items 18–23 follow Mac Lane exactly; item 23
    retains all three clauses of rule (vi).
13. **Enriched naturality: lozenge or square?** Kelly's (1.7) and Cruttwell are
    lozenges; Riehl's Def. 3.5.8 is a square. **They are the same condition** —
    Kelly proves it himself at (1.39). **Adopted:** `MA-17` item 5 states the
    lozenge and item 6 proves the square, so neither source is contradicted.
14. **How much structure a base must have to enrich in.** **Kelly: monoidal
    suffices** for $\mathcal V$-category, $\mathcal V$-functor and
    $\mathcal V$-natural; symmetry, closedness and completeness are added as
    needed. **Riehl and the accessible enriched-adjoint treatments fix symmetric
    monoidal closed up front.**
    **Adopted:** Kelly's ladder, `MA-17` items 1 and 4.
15. **The order of the tensor factors in enriched composition.** Kelly and Riehl
    write $\mathcal A(B,C)\otimes\mathcal A(A,B)\to\mathcal A(A,C)$; Cruttwell
    writes the diagrammatic order. **Adopted:** Kelly's, `MA-17` item 2.
16. **Tensor and cotensor naming.** Direction is agreed everywhere; **notation is
    not** — Kelly writes $X\pitchfork C$ and $X\otimes C$, Riehl writes $n^v$ and
    $v\otimes m$. In the $\mathbf{Set}$ case the cotensor is the **power** and the
    tensor is the **copower**, which is easy to reverse. **Adopted:** Kelly's,
    `MA-17` item 24, with the $\mathbf{Set}$ names stated explicitly.
17. **"Weighted" versus "indexed" limits.** Kelly says *indexed*; Riehl says
    *weighted* and notes Kelly's is standard within the categorical community.
    Same concept. **Adopted:** *weighted*, matching `MA-5` item 15.
18. **"Rigid" versus "compact".** EGNO says rigid; **Joyal–Street say compact**.
    **Adopted:** rigid, `MA-16` item 11.
19. **Which side "left dual" names.** EGNO's left dual $X^\vee$ evaluates as
    $X^\vee\otimes X\to\mathbf 1$; sources naming duals by the side on which the
    dual is adjoint reverse it. **Adopted:** EGNO's, `MA-16` item 3.
20. **The braiding's unit compatibility.** **CWM XI.1 (6) imposes it as an
    axiom; EGNO Exercise 8.1.6 derives it.** **Adopted:** derived, `MA-15` item 4.
21. **"2-category".** Kelly writes plain "2-category" and means strict, reserving
    *bicategory* for the weak notion; modern usage is ambiguous. **Adopted:** the
    published `def-strict-two-category` already says "strict", and `MA-17` item 12
    keeps the word.
22. **"Creates limits".** Recorded at §3.3 and unchanged: the published
    `def-preservation-reflection-creation-continuity-and-cocontinuity` separates
    *creates* from *strictly creates*, **Leinster's Def 5.3.5 calls the strict
    notion "creates"**, and Riehl's monadicity theorem is stated for the
    isomorphism-invariant one. `MA-4` items 11–12 state both forms separately.

## 10.3 Known defects in the sources

Recorded because a scaffolder who quotes the printed text will ship a false
statement.

1. **CWM p. 252, display (2)** prints $\rho:ae\cong e$; the correct form, at
   VII.1 (6) p. 162, is $\rho:ae\cong a$. A misprint. Do not quote that display.
2. **Weibel's snake lemma, p. 12**, ends *"so is $\operatorname{coker}(f)\to
   \operatorname{coker}(g)$"*; the author's own corrections give *"so is
   $\operatorname{coker}(g)\to\operatorname{coker}(h)$"*. `MA-11` trap 3.
3. **Weibel's Freyd–Mitchell sketch, p. 29** prints *"C is equivalent to the
   category R-mod"*; the errata correct it to *"every small full abelian
   subcategory of L is equivalent to a full abelian subcategory of the category
   R-mod"*. `MA-8` trap 7. Take the statement from Thm 1.6.1, which is correct.
4. **Further Weibel errata touching this block**: p. 55 rewrites the AB4
   paragraph; p. 58 adds the hypothesis *"or A is any abelian category with enough
   projectives, and A and B satisfy axiom (AB5)"*; p. 82 records Neeman's examples
   of AB4\* categories in which a lemma fails; p. 135 twice inserts a missing
   (AB5). **Several statements in this area are hypothesis-missing as printed.**
5. **Riehl's Thm 6.3.7 was defective in the first edition** — the size hypotheses
   were missing — and she records the correction in the second edition's
   acknowledgments. `MA-6` trap 1; every Riehl locator in this file is against the
   2nd edition.
6. **The OCR of the CWM scan destroys $\in_m$, $\equiv$, every Greek letter in a
   Lemma statement and every displayed diagram.** `MA-10` trap 5. The definition of
   a "$3\times3$ diagram" at Exercise VIII.4.5 is unrecoverable from the available
   copy, which is why `MA-11` item 21 follows Weibel rather than Mac Lane.
7. **The Freyd TAC reprint has no text layer at all**, and the available OCR
   mangles Thm 2.39's proof — the very proof `MA-8` item 18 follows — beyond use.
   Every Freyd formula must be read from a rendered page.
8. **The Barr translation of Tôhoku** carries a LaTeX index typo in the AB6
   display and renders "induit par" as a restriction bar; the French scan controls.
9. **Murfet Prop. 73, p. 27**, prints
   $\operatorname{Sub}(B_1/B_2)$ for $B_1\le B_2$, an undefined quotient in
   that order. Cor. 72 immediately before it says
   $\operatorname{Sub}(A/C)\cong[C,A]$; taking $A=B_2$, $C=B_1$ gives the
   intended $\operatorname{Sub}(B_2/B_1)\cong[B_1,B_2]$, which the proof of
   Prop. 73 uses. `MA-9` item 6 corrects this evident typo and does not quote the
   printed formula as though it were true.
10. **Richter Prop. 4.7.3(2), pp. 80–82**, prints a converse from the mere
    existence of $\operatorname{Lan}_L1$ or $\operatorname{Ran}_R1$ to an
    adjoint, but its proof explicitly assumes the extension is **preserved** by
    $L$ or $R$. That hypothesis is necessary. `MA-6` item 16 follows Riehl
    Prop. 6.5.2 and never cites Richter's printed converse.

---

# 11. Amendments owed to other scaffolds

`subjects-01-SEAMS.md` §0.1: a track writes exactly the files named as its own and
**never opens another track's file**, even to fix an obvious error. Everything this
track wants changed elsewhere is here, and the orchestrator applies it at
reconciliation.

### Amendment 1 — to `abstract-algebra`: what `tensor-products-of-modules` must carry

**This is the most expensive seam in the track and the only one that can silently
break a page.** `subjects-01-SEAMS.md` §4 assigns the tensor product of modules to
`abstract-algebra` (planned page 106) and this track cites it as the motivating
example of a monoidal structure. **The library currently has no tensor product of
abelian groups at all** — a grep over all 4172 items returns only bilinear-form
material — so the following are not conveniences:

1. **$M\otimes_R N$ with its universal property for $R$-bilinear maps**, and in
   particular **$A\otimes_{\mathbb Z}B$ for abelian groups**.
2. **Associativity and unit**: natural isomorphisms
   $(L\otimes M)\otimes N\cong L\otimes(M\otimes N)$ and $R\otimes M\cong M$,
   **stated as natural isomorphisms and not merely as bijections**, because
   `MA-12` item 15 needs them as the associator and unitors.
3. **Symmetry** $M\otimes N\cong N\otimes M$ for commutative $R$, for `MA-15`.
4. **The tensor–hom adjunction**, for `MA-14`.
5. **Right exactness of $-\otimes M$**, for `MA-8` and for `homological-algebra`.

**What breaks without it, precisely.** `MA-12` items 15–17 and 19 and `MA-16`
item 13 drop to stated non-examples and the drop is recorded. **`MA-17` item 14 —
"a category enriched in abelian groups is exactly a preadditive category", the
track's closing theorem — cannot be stated at all**, not weakened: item 1 of
`MA-17` requires a composition *morphism* $\mathcal A(B,C)\otimes\mathcal A(A,B)
\to\mathcal A(A,C)$, and without $\otimes_{\mathbb Z}$ there is no such object.
`MA-7` item 39's preferred witness and `MA-14`'s abelian-group example go with it.
**Everything else in the block survives**, because the load-bearing monoidal
examples are cartesian, the endofunctor category and posets.

**Placement requirement:** `tensor-products-of-modules` must land **above**
`monoidal-categories-and-monoidal-functors` in reading order. It is planned in the
algebra band and this track sits at 365–380, so this should be automatic — but it
is stated because the consequence of getting it wrong is a forward reference on a
spine item, which is error `forward-on-spine`.

### Amendment 2 — to `combinatorics`, owner of `plan-combinatorics-and-categories.md`

That file is the prior scaffold for this material and this track **supersedes its
category-theory sections in this file** (CT-4, CT-5, CT-6, AB-1, AB-2, AB-3, MO-1,
MO-2, and the parts of its §6–§9 bearing on them). It is not edited here. The
orchestrator should mark those sections superseded at reconciliation, and
`combinatorics` should be told that:

- its **§6 "The size question in category theory (CC-D5)"** and **§7 choice
  ledger** are carried forward unchanged into §3 and §6 of this file, and this
  track has re-opened none of their decisions;
- its **absolute orders are stale** (it puts CT-4 at 293, AB-2 at 303, MO-1 at
  307; the live spec has 365, 373 and 377), and this file quotes none;
- the finite-probability and probabilistic-method material it owns is untouched by
  this track.

### Amendment 3 — to `abstract-algebra` and `group-theory`: two group-theoretic lemmas

`MA-15` needs two results that are group theory, not category theory. **This track
scaffolds both rather than dropping coherence**, because dropping a valuable result
for want of a lemma is not a permitted disposition (owner, 2026-08-11). The offer:

1. **`thm-the-symmetric-group-has-the-coxeter-presentation`** — $S_n$ presented by
   $\tau_1,\dots,\tau_{n-1}$ with $\tau_i^2=1$, $(\tau_i\tau_{i+1})^3=1$ and
   $\tau_i\tau_j=\tau_j\tau_i$ for $|i-j|\ne1$. **The library already publishes
   `thm-adjacent-transpositions-generate-the-symmetric-group` and
   `def-group-presentation`**, so only the completeness of the relations is
   missing. It is the exact input symmetric coherence consumes.
2. **`def-braid-group-by-the-artin-presentation`** — $B_n$ with generators
   $\sigma_i$ and the two Artin relations, together with the surjection
   $B_n\to S_n$. *(`braid` appears nowhere in the corpus.)*

**If either track takes an item, `MA-15` cites it; if neither does, `MA-15` proves
it.** Both are naturally at home on a presentations or a symmetric-groups page and
would be better placed there; this track will not leave them unproved either way.

### Amendment 4 — to `homological-algebra`: what this block supplies and what it does not

`homological-algebra` is a wave-2 track that reads this file. The complete
inventory:

**Supplied here, ready to cite:**

- abelian categories with the axioms, balancedness, normality, epi–mono
  factorisation, and **the pullback of an epimorphism is an epimorphism**
  (`MA-8`);
- **exactness, short exact sequences, the splitting lemma, and the member
  calculus in full** (`MA-10`);
- **every diagram lemma, with $\delta$ constructed arrow-theoretically and
  its naturality proved** (`MA-11` items 5, 7, 10) — item 10 is what a long exact
  sequence of a short exact sequence of complexes cannot be built without;
- **projective and injective objects, and "enough projectives"/"enough
  injectives" as definitions** (`MA-9` items 36–41);
- **AB3–AB5, Grothendieck categories, and AB5 $\Rightarrow$ exactness of filtered
  colimits** (`MA-9` items 27–31, `MA-10` item 43);
- **the abelian structure of functor categories** (`MA-8` item 42) and **of the
  arrow category** (`MA-11` item 9) — so complexes and diagrams valued in an
  abelian category are known to form abelian categories before homology starts;
- **exact functors and the transport of every diagram lemma** (`MA-11` item 29);
- `MA-9` items 14–20 (simple objects, composition series, Jordan–Hölder, length).

**Not supplied, and owed to that track — it mints all of these:**

- **chain complexes as objects**, the category of complexes, the shift, homotopy,
  cones, truncation, graded objects, filtrations, double complexes;
- projective and injective **resolutions**, derived functors, **Ext and Tor**,
  Baer sums, the six-term sequence, spectral sequences;
- **"a Grothendieck category has enough injectives"** — `MA-9` item 43 explicitly
  declines it as a hard theorem;
- **group cohomology $H^n(G,M)$ as a derived functor** (`subjects-01-SEAMS.md` §4);
- Serre subcategories, quotient abelian categories and localisation (§8 denial 7).

**One repoint the orchestrator must make** (§5.1): `chain-complexes-and-homology`
currently requires the planned `exact-sequences-and-the-diagram-lemmas`, which this
track retires; the edge points to **`the-diagram-lemmas-in-an-abelian-category`**
(`MA-11`).

**One warning.** `MA-11` item 10's proof is written by this library because no
source supplies it finished. If `homological-algebra` finds a source that does, it
should tell the orchestrator rather than assume `MA-11` cited one.

### Amendment 5 — to whichever track opens Grothendieck categories

Three results are denied here **for want of a Grothendieck-categories page**, and
each names that page as its licence: the Freyd–Mitchell embedding theorem's proof
(§8 denial 5), enough injectives in a Grothendieck category (`MA-9` item 43), and
Yoneda $\operatorname{Ext}^n$ as a set (§8 denial 11 — `MA-9` mints
`def-well-powered-and-co-well-powered-category` so the hypothesis will be
available). If such a page is ever planned, these three are its first customers.

### Amendment 6 — to `combinatorics`: the accessible-categories denial is reversed

`plan-combinatorics-and-categories.md` §9 records locally presentable and
accessible categories as *"deliberately NOT denied"*. **§8 denial 4 of this file
reverses that**, and the reason is not the one that file assumed. The prerequisite
is present — `cardinal-arithmetic-and-cofinality` is authored and `def-cofinality`
defines regular cardinals — so the denial is **for the size of the theory, not for
a missing definition**: Riehl gives a *sketch* rather than a proof, explicitly
*"leaving the important details to the definitive source"*, and it leans on two
Adámek–Rosický results, one of which she calls *"a hard theorem"*. Accessible
category theory is a subject area and that is the licence. **Nothing else in this
track depends on it.**

### Amendment 7 — an offer to whoever mints the floor and ceiling on $\mathbb R$

Riehl's Ex. 4.1.7 — floor and ceiling as adjoints to
$\mathbb Z\hookrightarrow\mathbb R$ — is a lovely illustration of a Galois
connection and is **omitted from `MA-1`** because the library has no floor or
ceiling on $\mathbb R$; it has only `def-the-ceiling-of-a-quotient-of-naturals`.
Any track that mints them gets this example for free, and `MA-1` will cite it.

### Amendment 8 — to the orchestrator: `SCHEMA.md` §6 records a stale page ceiling

`SCHEMA.md` §6 still says a page splits at **100** items. The owner's rule of
2026-08-11 is **60**, and `tools/validate-plan.mjs` enforces 60 as error code
`size` (`--max-items` default verified in the code on 2026-08-13). **The code is
the truth and the doc is the bug** (`CLAUDE.md` §"Keep the normative docs
current"). This track's §5 page map is computed at 60. This file does not edit
`SCHEMA.md`.

### Amendment 9 — to the orchestrator: a size gap in the published `def-strict-two-category`

`MA-17` item 12 proves that a $\mathbf{Cat}$-enriched category is exactly a strict
2-category **with small hom-categories**. The published `def-strict-two-category`
imposes no smallness on $\mathcal K(A,B)$, so the unqualified identification is
**false in the direction that matters**: $\mathbf{Cat}$-enrichment is strictly
narrower. This is **not** an error in the published item — it is a definition, and
`thm-small-categories-form-a-strict-two-category` already leans on
`prop-size-of-functor-categories` to get small hom-categories where it needs them.
It is recorded so that no future page states the identification without the clause,
and so the orchestrator knows `MA-17` item 12 carries a hypothesis that looks
gratuitous and is not. **No published item is proposed for change.**

---

# 12. Unresolved seams

Per `subjects-01-SEAMS.md` §5, recorded rather than silently absorbed. **None of
these blocks the scaffold**; each is a place where a future authoring Beta must
either close a gap or record a documented fallback.

**S-1 — CLOSED. A second open full treatment of monads.** Leinster has no
developed monad treatment, but the gap is closed by **Richter Ch. 6 §§6.1–6.6**,
read from the complete author-hosted book draft and explicitly harvested in
§10.1. `MA-3`/`MA-4` therefore have Riehl, Richter and Mac Lane as three
independent treatments; Richter's global background assumption of AC is not
imported into the library's choice ledger.

**S-2 — Borceux vol 2 Ch 4 (monads) was harvested at TOC level only.** Its section
list is used for structure in `MA-3` and `MA-4` and **no numbered Borceux result
from Ch 4 is cited anywhere in this file**. Closing it means reading the chapter
body.

**S-3 — `MA-8` item 18's proof is followed from two sources, neither of which this
scaffold read end to end in a single pass.** Freyd's Thm 2.39 was read from a
rendered page (the TAC reprint has no text layer) and Mitchell's Prop. 18.4 from an
OCR'd copy. **The route is verified and the statements are quoted**, but the
authoring Beta re-reads both before authoring, per the proof strategy's
instruction, and the documented fallback there is what makes the page safe if it
does not close.

**S-4 — CLOSED. Enriched change of base.** §8 denial 13 recorded this as
source-contingent because **Kelly's book does not contain change of base**, by his
own explicit decision. It is now closed: **Riehl's Lemma 3.4.3 and Remark 3.5.11**
and **Cruttwell's Props 4.2.1–4.2.3 and Thm 4.2.4** supply the construction with
numbered results, so `MA-17` items 34–36 are sourced. **The denial narrows** to the
2-categorical theory of change of base, which is what Kelly actually declined and
what `MA-17` item 37 records with his reason quoted.

**S-5 — Kelly's 1964 paper was not obtained, and this is a recorded BLOCKER.**
*"On MacLane's conditions for coherence of natural associativities,
commutativities, etc."*, J. Algebra 1 (1964) 397–402, is nominally open access at
the publisher but sits behind a bot-detection wall that no available client can
pass; the alternative download routes 404. **No word of Kelly's own text was
read.** Consequences, and they are contained: `MA-12` items 20–22 are sourced to
**EGNO Prop. 2.2.4 and Cor. 2.2.5**, whose derivation was checked line by line, and
`MA-12` item 23 attributes to Kelly **only through EGNO's own Bibliographical
Notes**, which say in terms *"Proposition 2.2.4 is due to Kelly [Ke]"*. **Nothing
in this file asserts anything about Kelly's phrasing, numbering, or whether he
treated $\lambda_{\mathbf 1}=\rho_{\mathbf 1}$.** Closing the seam needs an
institutional session or a human browser; **no new authority available to an agent
would help**, which is why it is recorded here rather than raised as a request.

**S-6 — the $\mathbf{CMon}$-enrichment reading is unsourced.** `MA-7` items 17–20
construct the commutative-monoid structure on hom-sets, and that mathematics **is**
sourced (Mac Lane Ex. VIII.2.4, Freyd Ex. 2A.2, Mitchell Prop. 18.4, all quoted).
What is unsourced is the *enriched-category reading* — that a semiadditive category
**is** a $(\mathbf{CMon},\otimes,\mathbb N)$-enriched category. Kelly's list of
bases does not include $\mathbf{CMon}$ and Riehl does not mention it. **`MA-17`
item 16 therefore states it as a remark, not a theorem**, and `MA-7` does not
depend on it. Closing the seam means finding a source; the fallback — leave it a
remark — costs nothing.

**S-7 — Borceux vol. 2 remains a bibliographic-only seam.** The chapter contents
and result-number leads were recovered, but the publisher-controlled body was not
obtained lawfully in full; no Borceux wording is quoted and the book is **not**
counted as an independent read treatment or component-provenance source. Kelly
and Riehl are the two full treatments for `MA-17`; Cruttwell controls change of
base; the accessible Borceux–Quinteiro–Rosický and Guillou–May papers control the
exact enriched-adjoint criterion. A future author may close the seam by checking
the locators against a lawful physical or institutional copy, but nothing depends
on doing so.

**One trap this lane also settled:** *"Borceux, Handbook, Ch 6" without a volume
number is ambiguous and wrong half the time* — **vol 1 Ch 6 is "Flat functors and
Cauchy completeness" (pp. 250–280)**. Every Borceux citation in this file names the
volume.

**S-8 — CLOSED. The lattice page id.** The live nonempty `items` array in
`research/plan-spec.json` verifies that
`def-lattice-distributive-lattice-and-order-ideal` belongs to
`chains-antichains-sperner-and-dilworth`; that exact id now appears in `MA-9`'s
`requires` list.

**S-9 — several `cex-` witnesses carry verification instructions rather than
assertions.** They are listed together so an auditor can find them: `MA-8`'s
general pullback-of-epi `fs-`, `MA-9` item 35, `MA-12` item 4, `MA-14` item 5,
`MA-15` item 12, `MA-16` items 16 and 18, `MA-17` item 30, and the explicitly
marked representation/associator examples on `MA-18`'s B page. The former
`MA-9` item 34 and `MA-10` item 10 placeholders now have checked witnesses and
are no longer in this list.
In each case this scaffold names the shape of the witness and **instructs the
authoring Beta to check it before authoring**, with a documented fallback to a
`rem-` naming the source. **None is asserted on this scaffold's authority**, which
is the intended behaviour under `CLAUDE.md` §"Generated-claim minimization".

---

# 13. Continuity checkpoint — closed

**Objective.** Produce the source-harvested, graduate-level prose scaffold for
the monoidal-and-abelian-category track, writing only this file and authoring no
library items or build artifacts.

**Decisions now durable.** The track is complete as eighteen A/B pairs
(`MA-1`–`MA-18`), split at the 60-item ceiling. The no-global-choice settlement
is implemented by separating objectwise existence from data-supplied assembly;
the abelian development is independent of Freyd–Mitchell; ordinary coend/Kan
machinery precedes enrichment; and EGNO's tensor/fusion meaning is confined to
`MA-18`. The exact page counts, source corpus, seams, denials and one contained
blocker are in §0. The canonical heading dispositions and source defects are in
§10; repoints and amendments owed elsewhere are in §5.1 and §11.

**Still open, but not blocking this scaffold.** S-2, S-3, S-6, S-7 and S-9 are
future-author verification seams with explicit fallbacks. S-5 is the one
recorded external-access blocker. There are **no unresolved mathematical forward
references**, no proposed-id collisions, and no page over the ceiling.

**Exact next action.** The orchestrator reconciles §0, applies the four page-id
repoints in §5.1 and the nine amendments in §11, and retains this document as the
input to a later build cycle. That future cycle authors, checks and gates items;
this commission does none of those things.
