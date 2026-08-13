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

*(written last; see §12)*

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
4. **Monoidal and enriched categories** (`MA-12` … `MA-16`) — coherence, then
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
`items` arrays**. This track proposes **sixteen** A/B pairs in their place; §7.0
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

The one place it changes a *proof* rather than a statement is **GAFT**. The
textbook proof of the initial-object lemma makes a choice indexed by a proper
class. The repaired proof — form the product over the weakly initial *set*, then
take the joint equalizer of all of its endomorphisms, which is legitimate because
local smallness makes $\mathcal C(\ell,\ell)$ a set — makes no such choice.
**`MA-2` authors the repaired proof and the repair is visible in the numbered
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

House conventions are fixed **once, here**, so that sixteen pages do not each
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
— left-bracketed source, right-bracketed target. Mac Lane, EGNO and Kelly agree;
sources that reverse it are recorded in §10 with the reversal named. The unitors
are $\lambda_X\colon \mathbf 1\otimes X\to X$ and $\rho_X\colon X\otimes\mathbf 1\to X$.

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
category" is not used in this library at all** except inside `MA-16`'s Remarks,
where EGNO's definition is quoted with its hypotheses. Monoidal means monoidal.

### 4.7 Choice is named in the Statement, never in the proof only

The published corpus does this already — `thm-cardinality-sized-products-or-coproducts-force-a-preorder`
opens "Assume Choice", `thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma`
names its principle in the title. §6 is this track's ledger and every row of it
is a Statement-level obligation.

---

## 5. The page map: sixteen pairs where the spec plans eight

`research/plan-spec.json` plans eight A/B pairs in the band. This track scaffolds
**seventeen**, because the material does not fit in eight at the owner's 60-item
ceiling and **splitting is never dropping** (`CLAUDE.md`, owner 2026-08-11;
`tools/validate-plan.mjs` error code `size`, `--max-items` default **60** —
verified in the code on 2026-08-13; note that `SCHEMA.md` §6 still says "100",
which is stale, see §11 amendment 8).

Each row gives the relative label, the proposed page id, and the planned page it
supersedes. **The orchestrator owns the splice**; this file writes no spec.

| label | proposed page id | supersedes planned page | est. A items |
|---|---|---|---|
| `MA-1` | `adjunctions-units-and-counits` | `adjunctions-and-the-adjoint-functor-theorems` | 52 |
| `MA-2` | `reflective-subcategories-and-the-adjoint-functor-theorems` | ″ | 48 |
| `MA-3` | `monads-comonads-and-their-algebras` | `monads-and-their-algebras` | 50 |
| `MA-4` | `monadicity-and-becks-theorem` | ″ | 38 |
| `MA-5` | `ends-coends-and-weighted-limits` | `kan-extensions-ends-and-coends` | 44 |
| `MA-6` | `kan-extensions-density-and-the-free-cocompletion` | ″ | 46 |
| `MA-7` | `preadditive-and-additive-categories-and-biproducts` | `additive-categories-and-biproducts` | 52 |
| `MA-8` | `abelian-categories` | `abelian-categories` (id kept) | 50 |
| `MA-9` | `subobject-lattices-generators-and-the-grothendieck-axioms` | ″ | 40 |
| `MA-10` | `exactness-and-the-member-calculus` | `exact-sequences-and-the-diagram-lemmas` | 44 |
| `MA-11` | `the-diagram-lemmas-in-an-abelian-category` | ″ | 40 |
| `MA-12` | `monoidal-categories-and-monoidal-functors` | `monoidal-categories-strictness-and-coherence` | 50 |
| `MA-13` | `strictification-and-mac-lanes-coherence-theorem` | ″ | 32 |
| `MA-14` | `closed-monoidal-categories-and-the-internal-hom` | `braided-symmetric-and-enriched-categories` | 36 |
| `MA-15` | `braided-and-symmetric-monoidal-categories` | ″ | 44 |
| `MA-16` | `duality-and-rigidity-in-monoidal-categories` | ″ | 42 |
| `MA-17` | `enriched-categories` | ″ | 50 |

Every A page has its `-examples` companion, so the block is **34 pages**. Two of
the planned ids survive unchanged (`abelian-categories`, and the `-examples`
companions built from the new ids); the other six planned A-page ids are
retired-before-authoring, which is free because **all eight planned pages have
empty `items` arrays** and no item, page or alias points at them yet.

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
| **the initial-object lemma** (a complete locally small category with a weakly initial *set* has an initial object) | `MA-2` | **none — and this is the point** | the textbook proof picks, for each object $X$, an index $i$ and an arrow $s_i\to X$; that is a class-indexed choice. The repaired proof forms $\ell=\prod_i s_i$, notes only that *some* arrow $\ell\to X$ exists, and takes the joint equalizer of **all** endomorphisms of $\ell$ — a set-indexed limit, legitimate because local smallness makes $\mathcal C(\ell,\ell)$ a set. **Author the repaired proof; the repair is visible in the numbered steps** |
| **GAFT**, objectwise form | `MA-2` | **none** | "for every $c$, the comma category $(c\downarrow U)$ has an initial object", under: $\mathcal A$ locally small and small-complete, $U$ continuous, solution set condition. ZF given the hypotheses |
| **GAFT**, functor form | `MA-2` | **data-supplied** | selecting an initial object of $(c\downarrow U)$ for every $c$ is a proper-class choice. Stated as: given such a family, $U$ has a left adjoint. Two items, not one |
| **SAFT**, objectwise and functor forms | `MA-2` | **none** / **data-supplied** | same split. The solution set is manufactured from well-poweredness, which is a smallness hypothesis and not a choice |
| reflector of a reflective subcategory | `MA-2` | **data-supplied** | same shape; the reflection *for each object* is the choice |
| Kleisli and Eilenberg–Moore constructions | `MA-3` | **none** | both are constructed outright from $(T,\eta,\mu)$; nothing is selected |
| the comparison functor and its universal properties | `MA-3` | **none** | |
| **Beck's monadicity theorem** | `MA-4` | **none** | the whole proof runs on coequalizers and absoluteness of split coequalizers. Worth stating, because "monadic" *sounds* like it should need choice and does not |
| $\mathbf{Grp}$, $R\text{-}\mathbf{Mod}$ monadic over $\mathbf{Set}$ | `MA-4` | **none** beyond what the published free-object items already assume | |
| $\mathbf{CompHaus}$ monadic over $\mathbf{Set}$ (the ultrafilter monad) | `MA-4` | **the ultrafilter lemma (BPI)**, strictly weaker than AC | the library owns `thm-ultrafilter-lemma`; **FLAGGED**, see §8 denial 6 — the monad's multiplication $\beta\beta X\to\beta X$ is real work and the page carries it only if that work is scaffolded, never as an assertion |
| the Stone–Čech adjunction | `MA-1` | **the ultrafilter lemma and dependent choice** | already named in the published Statements of `thm-stone-cech-evaluation-closure-universal-property` and `lem-compact-hausdorff-targets-embed-in-unit-cubes-under-dependent-choice`. This track inherits those costs verbatim and does not restate them more weakly |
| ends and coends: existence from completeness | `MA-5` | **data-supplied** where a *chosen* end is wanted; **none** for existence | identical to the published limit-functor treatment |
| Fubini for ends; $\operatorname{Nat}(F,G)\cong\int_c\mathcal D(Fc,Gc)$ | `MA-5` | **none** | |
| $\operatorname{Lan}_K F$ by the comma-category colimit formula | `MA-6` | **none** for existence; **data-supplied** for the functor $\operatorname{Lan}_K$ | |
| the density theorem | `MA-6` | **none** | |
| $\mathbf{Set}^{\mathcal C^{\mathrm{op}}}$ is the free cocompletion of small $\mathcal C$ | `MA-6` | **none** | the restriction to small $\mathcal C$ is a size hypothesis, not a choice one |
| a category with finite biproducts is uniquely $\mathbf{CMon}$-enriched | `MA-7` | **none** | the addition is *constructed*, $f+g:=\nabla\circ(f\oplus g)\circ\Delta$ |
| additive $\Rightarrow$ biproducts; biproducts $\Rightarrow$ additive-when-inverses-exist | `MA-7` | **none** | |
| **AB0 + AB1 + AB2 imply $\mathbf{Ab}$-enrichment** | `MA-8` | **none** | the additive inverse is constructed from $\ker(\nabla)$; nothing is chosen. This is what stops additivity from being an unmotivated axiom |
| abelian categories are balanced; epi–mono factorisation | `MA-8` | **none** | |
| the pullback of an epimorphism is an epimorphism | `MA-8` | **none** | and it is the *sole* prerequisite of the member calculus |
| **the entire member calculus and every diagram lemma** | `MA-10`, `MA-11` | **none, and no smallness either** | choice-free, constructive, and valid in any abelian category. This is the reason the track can refuse Freyd–Mitchell as a proof device and still prove the snake lemma |
| naturality of the snake connecting morphism | `MA-11` | **none** | |
| AB5 $\Rightarrow$ filtered colimits are exact | `MA-9` | **none** | |
| Kelly's redundancies ($\lambda_{X\otimes Y}$, $\rho_{X\otimes Y}$, $\lambda_{\mathbf 1}=\rho_{\mathbf 1}$) | `MA-12` | **none** | |
| strictification and Mac Lane coherence | `MA-13` | **see §9 `MA-13`** | the choice cost depends on which construction is authored; the decision and its cost are recorded there rather than guessed here |
| duals are unique up to unique isomorphism | `MA-16` | **none** | |
| enriched Yoneda | `MA-17` | **none** | |
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
| 7 | `MA-2` | **intersection of subobjects** | a wide pullback, i.e. a limit of the diagram of the chosen monos; it exists when $\mathcal C$ has the relevant limits, and it is a subobject because a limit of monomorphisms into a common target is monic. **Well-poweredness is what makes an intersection over *all* subobjects a small limit** |
| 8 | `MA-2` | **well-powered**, **co-well-powered** | the collection of subobjects of each object *is a set*. This is a smallness assertion about a quotient of a class of monomorphisms, and the definition must say that the equivalence classes form a set, not that the monomorphisms do |
| 9 | `MA-2` | **separating set**, **coseparating set** | stated by the cancellation property ("$f\ne g$ implies some $s\to c$ separates them"), with the equivalent representable formulation as a proposition, not conflated with it |
| 10 | `MA-2` | the **initial-object lemma** | the joint equalizer is over $\mathcal C(\ell,\ell)$, which is a **set** by local smallness; that is the whole legitimacy argument and it is a cited hypothesis, not an aside (§6) |
| 11 | `MA-2` | **GAFT** and **SAFT** | each is **two** items: objectwise existence of an initial object in every $(c\downarrow U)$, then the data-supplied assembly into a left adjoint (§6, SE-D3). A single item concluding "$U$ has a left adjoint" would assert a proper-class selection |
| 12 | `MA-2` | the **solution set condition** | stated *per object*: for each $c$ there is a **set** $S_c$ of arrows $c\to U(d_i)$ through which every arrow $c\to U(d)$ factors. Stating it as a condition on the functor, without the per-object quantifier, changes the hypothesis |
| 13 | `MA-3` | **monad** | defined directly as $(T,\eta,\mu)$ with the unit and associativity squares. "A monoid object in $[\mathcal C,\mathcal C]$" needs $[\mathcal C,\mathcal C]$ to be a legitimate category, which `prop-size-of-functor-categories` supplies only for small $\mathcal C$; it is therefore a Remark carrying that hypothesis, never the definition (§3.1(1)) |
| 14 | `MA-3` | the **Eilenberg–Moore category** $\mathcal C^T$ | it *is* a category: identities are algebra morphisms and algebra morphisms compose. Both are one-line checks and both are numbered |
| 15 | `MA-3` | the **Kleisli category** $\mathcal C_T$ | Kleisli composition $g\bullet f:=\mu\circ Tg\circ f$ is **associative and unital**, and neither is visible without using all three monad axioms. This is the genuine well-definedness obligation on the page and it is routinely skipped |
| 16 | `MA-3` | the **comparison functor** $K:\mathcal D\to\mathcal C^T$ | well defined ($U d$ carries a $T$-algebra structure $U\varepsilon_d$, and the algebra axioms are the triangle identities plus naturality), and **unique** making both triangles commute — the uniqueness is what turns "an adjunction inducing $T$" into a universal property |
| 17 | `MA-3` | a **distributive law** $ST\Rightarrow TS$ | the four axioms, and the theorem that they are exactly what makes $TS$ a monad; without them "the composite monad" is not defined |
| 18 | `MA-4` | **split coequalizer** | the data is $(s,t)$ with three equations, not merely "a coequalizer that splits"; and **absoluteness** — preservation by *every* functor — is a theorem about that data |
| 19 | `MA-4` | **Beck's theorem: which creation?** | the published `def-preservation-reflection-creation-continuity-and-cocontinuity` separates *creates* from *strictly creates*, and Beck's theorem is the **strict** one (§3.3). The Statement says which. Getting this wrong yields a false theorem, not a stylistic wobble |
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
| 30 | `MA-8` | **abelian category** | axiomatised as **AB0** (a zero object, and finite products and coproducts that coincide) $+$ **AB1** (every morphism has a kernel and a cokernel) $+$ **AB2** (the canonical $\operatorname{coim}\to\operatorname{im}$ is an isomorphism), with **$\mathbf{Ab}$-enrichment proved as a THEOREM**, never postulated. The equivalence with "every monomorphism is a kernel and every epimorphism is a cokernel" is a separate numbered theorem, and "abelian categories are balanced" a separate corollary |
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
| 46 | `MA-16` | **trace** and **dimension** | defined for a dualisable object, and the closing of the loop $\mathbf 1\to X\otimes X^\vee\to X^\vee\otimes X\to\mathbf 1$ needs a braiding or a pivotal structure to be written at all. The exact hypotheses are stated with the definition; a "trace" in a bare monoidal category is not defined |
| 47 | `MA-17` | a **$\mathcal V$-enriched category** | composition is a **morphism of $\mathcal V$**, and the associativity and unit conditions are commuting diagrams **in $\mathcal V$** — which can only be written unambiguously because of `MA-13`'s coherence. That dependency is declared |
| 48 | `MA-17` | the **underlying ordinary category** $\mathcal V_0$ | built from $\mathcal V(\mathbf 1,-)$; that it is a category, and that the construction is functorial, are proofs |
| 49 | `MA-17` | **change of base** along a lax monoidal functor | the induced $\mathcal V$-category-to-$\mathcal W$-category assignment is well defined exactly because the functor is lax monoidal; the laxity constraints are what supply the new composition |

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
   calculus, which is choice-free, smallness-free and constructive, and the
   `rem-` item carries no outgoing `deps` into the diagram lemmas at all.
   Licensed by a Grothendieck-categories page.
6. **Fusion categories, multitensor and multifusion categories, modular tensor
   categories, Tannaka duality, Hopf algebras.** EGNO's *tensor category*
   (Def 4.1.1) is *"a locally finite $k$-linear abelian rigid monoidal category"*
   over an **algebraically closed** field with $\operatorname{End}(\mathbf 1)\cong k$,
   and fusion adds finiteness and semisimplicity. That needs semisimple abelian
   categories, $k$-linear local finiteness and Perron–Frobenius theory, none of
   which this library has. **Only EGNO Ch 1–2 and the rigidity/pivotal material
   are in reach**, which is what `MA-16` covers. Licensed by a semisimple-abelian
   -categories page. Specifically denied inside `MA-16`: EGNO Cor 4.7.13
   (dimensions are algebraic integers), which needs the integrality theory.
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
- **The member/pseudo-element calculus** in full. No smallness, no choice,
  constructive.
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

**Provenance plan, stated once and binding on every page.** Every item below is
`provenance.statement: literature-derived` unless marked otherwise, because every
statement is taken from a named source at a named locator. `provenance.proof` is
`literature-derived` where the source's proof is followed, `ai-altered` where the
proof is reorganised to fit the library's available dependencies (this is the
common case, and the reorganisation is recorded in the batch notes),
`not-applicable` for definitions and remarks. **No item in this track has an
`ai-generated` Statement**, with the single class of exceptions marked
`[AI-GEN CANDIDATE]` in the lists below: those are directly verifiable corollaries
or examples, they are never `deps` targets, and each carries
`generation.role: direct-corollary` or `example`.

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
11. `thm-a-pointwise-right-adjoint-extends-uniquely-to-a-functor` — thm. If for each $d$ there is $Gd$ with $\mathcal D(Fc,d)\cong\mathcal C(c,Gd)$ natural **in $c$ alone**, then $G$ extends uniquely to a functor making the isomorphism natural in $d$ as well (Riehl Prop 4.4.4). Routinely assumed; it is a theorem.
12. `rem-the-choice-behind-assembling-an-adjoint` — rem. Points at the published `rem-choice-behind-limit-and-colimit-functors` and at SE-D3; states that this library never asserts the unconditional form.

**The calculus**

13. `thm-adjoints-are-unique-up-to-unique-natural-isomorphism` — thm. Two left adjoints to $G$ are related by a unique natural isomorphism commuting with the units and counits (Riehl Prop 4.3.1). LANDMARK — licenses "the" left adjoint and the notation $F\dashv G$. §7 #3.
14. `thm-adjunctions-compose` — thm. $F'F\dashv GG'$ with $\bar\eta=G\eta'F\circ\eta$ and $\bar\varepsilon=\varepsilon'\circ F'\varepsilon G'$; **the triangle identities are rechecked, not inferred** (Riehl Prop 4.3.4). §7 #4.
15. `prop-an-adjunction-induces-an-adjunction-on-functor-categories` — prop. $F_*\dashv G_*$ on $\mathcal C^{\mathcal J}\rightleftarrows\mathcal D^{\mathcal J}$ for small $\mathcal J$ (Riehl Prop 4.3.6). The smallness hypothesis is `prop-size-of-functor-categories`.
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
39. `prop-the-underlying-set-functor-on-fields-has-no-left-adjoint` — prop. By RAPL applied to a limit $\mathbf{Field}$ does not have, or to the absence of an initial object. Riehl Ex 4.1.12; Leinster Ex 6.3.5. **The authoring Beta picks the argument that closes from published field material and records which.**
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

9. `def-subobject-and-quotient-object` — def. A subobject of $c$ is an isomorphism class of monomorphisms into $c$ under mutual factorisation (Riehl Def 4.7.8). §7 #6 — the equivalence-relation proof and the partial order are items 10 and 11. LANDMARK: `MA-8`, `MA-9`, `MA-10` and `homological-algebra` all cite this.
10. `thm-mutual-factorisation-of-monomorphisms-is-an-equivalence-relation` — thm. §7 #6.
11. `thm-subobjects-form-a-partially-ordered-collection` — thm. Antisymmetry is exactly that two mutually factoring monomorphisms differ by a unique isomorphism.
12. `def-intersection-of-a-family-of-subobjects` — def. The limit of the diagram of the representing monomorphisms with common codomain (Riehl Def 4.7.9). §7 #7.
13. `lem-an-intersection-of-subobjects-is-a-subobject` — lem. A limit of monomorphisms over a common target is monic; cites the published `lem-limit-legs-are-jointly-monic-and-colimit-legs-jointly-epic`.
14. `def-well-powered-and-co-well-powered-category` — def. §7 #8. **Riehl never uses the word** — she writes the intersection hypothesis directly — so the item records both formulations and proves that well-powered $+$ complete implies all intersections exist.
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
24. `rem-choice-ledger-for-the-adjoint-functor-theorems` — rem. **REQUIRED** (§6). Records that item 18's repair removes the class-indexed choice, that item 22 is ZF given its hypotheses, and that item 23 is the data-supplied assembly.

**SAFT and representability**

25. `thm-a-complete-locally-small-category-with-a-small-coseparating-set-and-all-subobject-intersections-has-an-initial-object` — thm. Riehl Lemma 4.7.11. LANDMARK.
26. `thm-special-adjoint-functor-theorem` — thm. $U$ continuous, $\mathcal A$ complete, $\mathcal A$ and $\mathcal S$ locally small, $\mathcal A$ with a small coseparating set and all intersections of subobjects ⟹ $U$ has a left adjoint (Riehl Thm 4.7.10, verbatim hypotheses). Objectwise/assembly split as in items 22–23. LANDMARK.
27. `cor-such-a-category-is-cocomplete` — cor. Riehl Cor 4.7.13.
28. `cor-a-continuous-functor-to-set-from-such-a-category-is-representable` — cor. Riehl Cor 4.7.14.
29. `thm-freyd-representability-theorem` — thm. A continuous $F:\mathcal C\to\mathbf{Set}$ on a complete locally small $\mathcal C$ satisfying the solution set condition is representable (Riehl Thm 4.7.15, verbatim). LANDMARK.
30. `rem-why-completeness-alone-is-not-enough` — rem. Riehl's own diagnosis — *"the problem is that $s\downarrow U$ is not in general a small category"* — together with the published `thm-cardinality-sized-products-or-coproducts-force-a-preorder`, which is what makes the obstruction unavoidable rather than accidental. Leinster's complementary dead end (assuming large limits leaves almost no categories) belongs here too.

**Applications, numbered on the A page**

31. `thm-the-unit-interval-is-a-coseparating-object-in-compact-hausdorff-spaces` — thm. Via the published `thm-urysohn-lemma`. **Statement names the choice cost**, citing the published `rem-urysohn-lemma-not-a-zf-theorem` — Urysohn's lemma is not a ZF theorem, and a SAFT application that hides that is dishonest about its hypotheses. LANDMARK.
32. `thm-saft-yields-the-stone-cech-adjunction` — thm. Riehl Ex 4.7.12; Leinster Ex 6.3.14. Compared explicitly with `MA-1` item 38, which gets the same adjunction from the published construction: **two routes to one theorem, and the page says which hypotheses each spends.**
33. `thm-the-solution-set-for-the-underlying-set-functor-on-groups` — thm. Riehl Ex 4.7.6, with the explicit $\Phi'$ of isomorphism-class representatives of groups generated by a set of cardinality at most $|S|$. **Take it from Riehl, not from Leinster** — Leinster Ex 6.3.11 omits the cardinal arithmetic (*"This requires a little cardinal arithmetic, omitted here"*).
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

The textbook argument picks, for each object $X$, an index $i$ and an arrow
$s_i\to X$; that selection is indexed by the objects of $\mathcal C$, a proper
class, and SE-D3 forbids it. The repair, in four steps, and **every step must be
visible in the numbered proof**:

1. Form $\ell:=\prod_{i\in I}s_i$, legitimate because $I$ is a **set** and
   $\mathcal C$ is small-complete.
2. $\ell$ is weakly initial: for any $X$ there *exist* $i$ and $f:s_i\to X$, so
   $f\circ\pi_i:\ell\to X$ exists. **This is an existence claim, not a choice** —
   nothing is selected, and that is the whole repair.
3. Let $k\xrightarrow{\,m\,}\ell$ be the joint equalizer of **all** endomorphisms
   of $\ell$. The indexing collection is $\mathcal C(\ell,\ell)$, which is a
   **set** by local smallness, so this is a small limit and exists.
4. $k$ is initial: existence of $k\to X$ is step 2 composed with $m$; for
   uniqueness, given $f,g:k\rightrightarrows X$ take their equalizer
   $e:E\to k$, use step 2 to get $\ell\to E$, and show $e$ is a split
   epimorphism and hence an isomorphism, forcing $f=g$.

### Traps

1. **SAFT's hypotheses are minted here and used by `MA-9`.** Items 9–17 are A-page
   items for that reason; homing any of them on the B page would make them
   uncitable.
2. **Riehl says "every collection of subobjects admits an intersection" where Mac
   Lane says "well-powered".** They are not literally the same hypothesis — the
   first follows from the second plus completeness, and item 14 proves exactly
   that implication rather than assuming it.
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
14. `def-the-category-of-adjunctions-inducing-a-fixed-monad` — def. Objects: adjunctions inducing $(T,\eta,\mu)$ on $\mathcal C$; morphisms: functors $K$ with $KF=F'$ and $U'K=U$ (Riehl, before Prop 5.2.13).
15. `thm-kleisli-is-initial-and-eilenberg-moore-terminal-among-adjunctions-inducing-a-monad` — thm. Riehl Prop 5.2.13. LANDMARK — this is what licenses "**the** category of algebras".
16. `thm-the-comparison-functor-exists-and-is-unique` — thm. §7 #16. LANDMARK.
17. `thm-the-comparison-functor-from-kleisli-is-fully-faithful-with-image-the-free-algebras` — thm. Riehl Lemma 5.2.14.
18. `thm-the-forgetful-functor-from-eilenberg-moore-strictly-creates-limits-the-monad-preserves` — thm. Riehl Thm 5.6.5(i). **Names the strict notion** (§3.3).
19. `thm-colimits-in-an-eilenberg-moore-category-are-not-created-in-general` — thm, with the positive statement Riehl Thm 5.6.5(ii): those colimits $\mathcal C$ has that $T$ and $T^2$ preserve are created.
20. `thm-a-monadic-functor-is-conservative` — thm. Riehl Lemma 5.6.1. LANDMARK — and item 22 is why it matters.
21. `cor-a-continuous-bijection-of-compact-hausdorff-spaces-is-a-homeomorphism-by-conservativity` — cor. Riehl Cor 5.6.2. **CONTINGENT** on `MA-4`'s $\mathbf{CompHaus}$ result; if that drops, this drops with it and the published topology proof stands alone.
22. `def-idempotent-monad` — def. $\mu$ an isomorphism; three equivalent characterisations (Riehl Ex 5.1.iii).
23. `thm-algebras-for-an-idempotent-monad-form-a-reflective-subcategory` — thm. An object carries a $T$-algebra structure iff $\eta_C$ is an isomorphism, and then the structure map is $\eta_C^{-1}$ and is unique (Riehl Prop 5.3.3(i)). LANDMARK — the theorem that makes `MA-2` and this page pay for each other.
24. `thm-the-inclusion-of-a-reflective-subcategory-is-monadic` — thm. Riehl Prop 5.3.3(ii).
25. `def-monad-morphism` — def.
26. `def-distributive-law-between-two-monads` — def. $\lambda:ST\Rightarrow TS$ with four axioms. *(Id namespaced: `thm-distributive-laws-for-union-and-intersection` is published and is about sets.)* §7 #17.
27. `thm-a-distributive-law-makes-the-composite-a-monad` — thm.
28. `thm-monads-on-a-preorder-are-exactly-closure-operators` — thm. Riehl Ex 5.1.7. Cheap, and it is the example that makes the axioms legible.
29. `thm-the-free-monoid-monad-and-its-algebras-are-monoids` — thm.
30. `thm-the-free-group-monad-and-its-algebras-are-groups` — thm.
31. `thm-the-free-module-monad-and-its-algebras-are-modules` — thm.
32. `thm-the-covariant-power-set-monad` — thm. $\eta$ = singleton, $\mu$ = union; its algebras are posets with all small suprema. **Stated categorically**, citing the published `prop-completeness-and-cocompleteness-in-poset-categories` ("a poset category is cocomplete exactly when every small family has a supremum") — this avoids minting a complete-lattice definition the library does not have, and is the honest formulation.
33. `def-the-ultrafilter-monad-on-set` — def. $\beta X$ = the set of ultrafilters on $X$ (published `def-ultrafilter`), $\eta_X$ = principal ultrafilter, $\mu_X$ = the ultrafilter $\{A\subseteq X:\{\,U\in\beta X: A\in U\,\}\in\mathcal U\}$. LANDMARK — and see `MA-4` for what is and is not proved about it.
34. `thm-the-ultrafilter-monad-is-a-monad` — thm. The three axioms verified directly, using `lem-ultrafilter-prime` and the published ultrafilter items. **This is genuine work and it is entirely elementary**; no compactness is used here.
35. `def-t-coalgebra-and-the-coeilenberg-moore-category` — def, with the dual of item 15 as a corollary rather than a second proof.

### `fs-` items

- `fs-the-kleisli-and-eilenberg-moore-categories-are-equivalent` — they are the initial and terminal objects of the same category and coincide only degenerately.
- `fs-every-functor-with-a-left-adjoint-is-monadic` — witness $U:\mathbf{Top}\to\mathbf{Set}$, which has **both** adjoints (`MA-1` item 37) and is not conservative, hence not monadic by item 20. This is the cleanest possible use of the page's own theorem.
- `fs-a-monad-is-a-monoid-object-in-the-endofunctor-category-for-every-category` — the size claim, §3.1(1).
- `fs-every-algebra-for-a-monad-is-free`.

### B page — `monads-comonads-and-their-algebras-examples`

`ex-a-kleisli-composite-computed` · `ex-the-maybe-monad-and-partial-functions` (Riehl Ex 5.2.11) · `ex-the-list-monad-on-a-two-element-set` · `ex-the-closure-operator-monad-on-a-topological-space` · `ex-the-free-abelian-group-monad` · `cex-an-algebra-that-is-not-free` · `cex-a-coequalizer-not-preserved-by-a-forgetful-functor` · `ex-the-double-power-set-comonad`.

### Sources

- **Riehl 2nd ed. Ch 5** (printed pp. 181–218), read in full. Primary.
- **Mac Lane, *CWM* Ch VI** — §VI.1 monads, §VI.2 algebras, §VI.3 the comparison, §VI.5 free algebras, §VI.6 split coequalizers, §VI.7 Beck, §VI.9 compact Hausdorff spaces. Second independent treatment. **Leinster contains no monads at all** (zero occurrences), so he cannot serve as the second treatment here — see §12, seam S-1.
- **Borceux vol 2, Ch 4** (§§4.1–4.7) — third treatment, TOC-level only; cite for structure, not for verbatim statements.

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
*(the last three only for items 14–18; the authoring Beta verifies the exact
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
10. `thm-the-forgetful-functor-from-eilenberg-moore-strictly-creates-coequalizers-of-split-pairs` — thm. Riehl Prop 5.4.9.
11. `thm-becks-monadicity-theorem` — thm. A right adjoint $U$ is **monadic** iff it **creates** coequalizers of $U$-split pairs (Riehl Thm 5.5.1). LANDMARK.
12. `thm-becks-strict-monadicity-theorem` — thm. $U$ is **strictly monadic** iff it **strictly creates** them (Riehl Ex 5.5.i; Mac Lane Thm VI.7.1, whose (i) is "$K$ is an isomorphism"). LANDMARK. **Two theorems, two Statements** — §3.3.
13. `thm-crude-monadicity-the-reflexive-tripleability-theorem` — thm. $U$ has a left adjoint, $\mathcal D$ has coequalizers of reflexive pairs, $U$ preserves them, and $U$ reflects isomorphisms $\Rightarrow$ $U$ is monadic (Riehl Prop 5.5.8). LANDMARK — the form actually used in practice.
14. `thm-groups-are-monadic-over-sets` — thm.
15. `thm-modules-are-monadic-over-sets` — thm.
16. `thm-monoids-and-rings-are-monadic-over-sets` — thm. Riehl Cor 5.5.3.
17. `def-finitary-functor-and-finitary-monad` — def. Preserves filtered colimits; cites the published `def-filtered-category-and-filtered-colimit`.
18. `thm-a-finitary-monad-on-a-complete-cocomplete-locally-small-category-has-complete-and-cocomplete-algebras` — thm. Riehl Thm 5.6.12.

**The $\mathbf{CompHaus}$ block — scaffolded with its decomposition, not asserted**

19. `lem-an-ultrafilter-on-a-compact-hausdorff-space-has-a-unique-limit` — lem. From the published `thm-compactness-via-nets-filters-and-ultrafilters` (every ultrafilter converges) and `thm-hausdorff-iff-net-limits-are-unique`. **Statement names the ultrafilter lemma**, as the published item does.
20. `lem-the-limit-map-of-a-compact-hausdorff-space-is-an-ultrafilter-algebra` — lem. $\xi:\beta X\to X$ sending an ultrafilter to its limit satisfies the two algebra axioms.
21. `lem-a-continuous-map-of-compact-hausdorff-spaces-is-an-ultrafilter-algebra-homomorphism` — lem. From the published `lem-continuous-images-of-universal-nets-are-universal` and the net–filter dictionary.
22. `lem-an-ultrafilter-algebra-determines-a-compact-hausdorff-topology` — lem. **The hard direction.** Closed sets are those $A$ with $\xi(\mathcal U)\in A$ for every ultrafilter $\mathcal U$ containing $A$; the algebra axioms give idempotence and finite additivity of that closure operator, so it is a Kuratowski closure; compactness and Hausdorffness follow from the axioms.
23. `thm-compact-hausdorff-spaces-are-monadic-over-sets` — thm. **Manes' theorem.** LANDMARK.

**The verification instruction that goes with items 19–23, and it is binding.** These
five items are scaffolded because every prerequisite looks present on disk and
because dropping a valuable theorem for want of a lemma is not a permitted
disposition (owner, 2026-08-11). But item 22 is the one that can fail: it needs
the closure operator built from $\xi$ to satisfy the Kuratowski axioms and to be
shown compact Hausdorff, from published topology items only. **The authoring Beta
proves item 22 from disk before committing to item 23.** If it does not close, the
disposition is: keep items 19–21 (they are unconditional), state item 23 as a
`rem-` with `proved_here: false` citing Manes and Riehl Cor 5.5.6, record the
failed route in the batch notes and the `external_dependency` block, and **also**
drop `MA-3` item 21, which depends on it. That is a documented fallback, not a
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
- **Borceux vol 2 §4.4** "Characterization of monadic categories" — third treatment, TOC-level.

**Forward references: NONE.**

---

## MA-5. Ends, Coends and Weighted Limits

**page id** `ends-coends-and-weighted-limits`
**`requires`** `monads-comonads-and-their-algebras`, `limits-and-colimits`,
`universal-properties-and-the-yoneda-lemma`

**Source note that shapes the page.** *Neither Riehl's* Category Theory in Context
*nor Leinster's* Basic Category Theory *contains ends, coends, the Fubini theorem,
the coend form of Yoneda, or weighted limits* — Riehl says so explicitly in her
acknowledgments (*"an entirely satisfactory account of Kan extensions can be given
without the calculus of ends and coends"*). This page is therefore backed by
**Mac Lane Ch IX**, **Loregian's *(Co)end Calculus*** and **Kelly Ch 2–3**, with
**Riehl's *Categorical Homotopy Theory* Ch 7** as the fourth. All four are open.

### A-page items, in dependency order

1. `def-dinatural-transformation` — def. For $S,T:\mathcal C^{\mathrm{op}}\times\mathcal C\to\mathcal D$, a family $\alpha_c:S(c,c)\to T(c,c)$ making the **hexagon** commute for every $f:c\to c'$ (Mac Lane §IX.4; Loregian Def 1.1.1).
2. `thm-dinatural-transformations-do-not-compose-in-general` — thm. §7 #20. **An item, because every reader assumes the opposite.** The positive statement — a dinatural composed with a natural on either side is dinatural — sits beside it.
3. `def-wedge-and-cowedge` — def. A dinatural transformation from a constant, resp. to a constant (Loregian Def 1.1.4).
4. `def-end-and-coend` — def. An end is a **terminal wedge**, a coend an **initial cowedge** (Mac Lane §IX.5 verbatim; Loregian Def 1.1.6). Notation $\int_c S(c,c)$, $\int^c S(c,c)$. LANDMARK.
5. `thm-ends-and-coends-are-unique-up-to-unique-isomorphism` — thm. From `thm-limits-and-colimits-are-unique-up-to-unique-compatible-isomorphism` via item 6, or directly.
6. `def-twisted-arrow-category` — def. *(Id free.)*
7. `thm-an-end-is-a-limit-over-the-twisted-arrow-category` — thm. LANDMARK, §7 #21 — this is what makes every existence statement on the page a citation of published limit theory rather than new machinery.
8. `thm-an-end-is-an-equalizer-between-two-products` — thm. $\int_c S(c,c)=\operatorname{eq}\big(\prod_c S(c,c)\rightrightarrows\prod_{f:c\to c'}S(c,c')\big)$; dually a coend is a coequalizer between coproducts (Kelly (2.2)). LANDMARK — the computational form.
9. `cor-ends-exist-when-the-index-category-is-small-and-the-target-is-complete` — cor. Via items 7–8 and the published `thm-small-limits-from-products-and-equalizers`.
10. `thm-the-set-of-natural-transformations-is-an-end` — thm. $\operatorname{Nat}(F,G)\cong\int_c\mathcal D(Fc,Gc)$ (Mac Lane §IX.5 (2)). LANDMARK — and it recasts the published `def-functor-category` and makes its size hypothesis visible again.
11. `thm-fubini-for-ends` — thm. $\int_{(p,c)}S(p,c,p,c)\cong\int_p\int_c S(p,p,c,c)$, **with Mac Lane's exact existence clause**: the double end on the left exists iff the iterated end on the right does, and the comparison $\theta$ is then an isomorphism (Mac Lane §IX.8; Loregian Thm 1.3.1). LANDMARK.
12. `cor-ends-commute-with-ends` — cor.
13. `def-parametrised-end` — def. Mac Lane §IX.7; ends with parameters assemble into a functor, **in the data-supplied form** (§6).
14. `thm-the-ninja-yoneda-lemma-in-coend-form` — thm. All four isomorphisms $\int^c \mathcal C(c,a)\times Fc\cong Fa$ and their variants (Loregian Prop 2.2.1). LANDMARK.
15. `def-weighted-limit-and-weighted-colimit` — def. $\mathcal B(B,\{F,G\})\cong[\mathcal K,\mathcal V](F,\mathcal B(B,G-))$ (Kelly (3.1) verbatim; Riehl *CHT* Def 7.1.1 for the $\mathbf{Set}$-weighted case, Def 7.4.1 enriched). §7 #23. LANDMARK.
16. `thm-a-weighted-limit-is-unique-up-to-unique-isomorphism` — thm. By representability, citing the published `thm-representing-objects-are-unique-up-to-unique-compatible-isomorphism`.
17. `thm-a-weighted-limit-is-an-end` — thm. $\lim^W F\cong\int_c Fc^{Wc}$ (Riehl *CHT* (7.1.3)); dually $\operatorname{colim}^W F\cong\int^c Wc\cdot Fc$.
18. `def-conical-limit` — def. The weight constant at the unit; the theorem that a conical limit is an ordinary limit (Riehl *CHT* §7.5).
19. `rem-conical-limits-do-not-suffice-in-the-enriched-setting` — rem. Kelly §3.9 is literally titled "The inadequacy of conical limits", and Riehl *CHT* footnote 3 records that a constant $\mathcal V$-functor need not exist. **A remark that justifies why the page bothers with weights at all.**
20. `def-tensor-and-cotensor` — def. Kelly (3.42)/(3.44); the $\mathbf{Set}$-weighted special cases (copower and power).
21. `thm-the-underlying-set-bijection-is-strictly-weaker-than-the-enriched-isomorphism` — thm. Kelly §3.7 gives the explicit $\mathcal V=\mathbf{Cat}$ witness. **CONTINGENT** on `MA-17`'s enrichment vocabulary landing above this page — see the ordering note below.
22. `thm-representable-functors-carry-weighted-limits-to-weighted-limits` — thm.
23. `thm-weighted-limits-over-a-representable-weight-are-evaluation` — thm. Riehl *CHT* Ex 7.1.4.
24. `def-functor-tensor-product` — def. $F\otimes_{\mathcal C}G:=\int^c Fc\times Gc$ (Mac Lane §IX.6; Borceux vol 1 §3.8).

**Ordering decision.** Items 15–21 are stated **unenriched** ($\mathcal V=\mathbf{Set}$)
on this page, which is all that `MA-6` needs, and `MA-17` restates the enriched
versions with $\mathcal V$-weights. Item 21 is the exception and is flagged
CONTINGENT: if the authoring Beta cannot state it without enrichment, it moves to
`MA-17` and the move is recorded. Putting the whole weighted-limit theory above
`MA-17` would force `MA-6` to forward-reference it, which §5 of the seam contract
ranks worse.

### `fs-` items

- `fs-dinatural-transformations-compose` — item 2 as the false statement it is.
- `fs-every-end-exists` — refuted by a size argument.
- `fs-a-coend-is-a-colimit-over-the-twisted-arrow-category` — the variance error: it is a colimit over the **opposite** twisted arrow category.
- `fs-yonedas-original-notation-agrees-with-the-modern-one` — Loregian records (Remark 1.1.14) that **Yoneda's 1960 paper writes $\int_C$ for what is now the coend**. A genuine historical trap, and a fair `fs-`.

### B page — `ends-coends-and-weighted-limits-examples`

`ex-the-end-formula-checked-against-natural-transformations-on-a-small-diagram` · `ex-a-coend-computing-a-tensor-product-of-functors` · `ex-the-coend-of-a-hom-functor` · `ex-a-weighted-limit-computing-a-kernel-pair` (Riehl *CHT* Ex 7.1.2) · `ex-copowers-and-powers-in-set` · `cex-a-dinatural-family-whose-composite-is-not-dinatural` · `ex-fubini-verified-on-a-two-object-index`.

### Sources

- **Mac Lane, *CWM* Ch IX** §§IX.4–IX.8 (printed pp. 218–232) — ends, coends, ends with parameters, Fubini. **Primary.** Read verbatim.
- **Loregian, *(Co)end Calculus*** (arXiv:1501.02503v7, `https://arxiv.org/pdf/1501.02503`), **Ch 1–2 and Ch 4** — Def 1.1.1, 1.1.4, 1.1.6, Thm 1.3.1 (Fubini), Prop 2.2.1 (ninja Yoneda), Ch 4 weighted co/limits. Second independent treatment; a whole book on the subject and the only source that carries all of these as named results.
- **Kelly, *Basic Concepts of Enriched Category Theory*** (TAC Reprint 10, `http://www.tac.mta.ca/tac/reprints/articles/10/tr10.pdf`), **§2.1** (ends, equalizer formula (2.2), Fubini (2.8)) and **Ch 3** (indexed limits (3.1)–(3.6), tensors/cotensors (3.42)/(3.44), §3.10 (3.59)–(3.70)).
- **Riehl, *Categorical Homotopy Theory*** (`https://emilyriehl.github.io/files/cathtpy.pdf`), **§§7.1–7.8** — the cleanest modern statement of weighted limits, and the source for Def 7.1.1/7.4.1 and the conical-limit discussion. **Note: Part IV of that book is quasi-categories, not enriched theory** — the enriched material is Ch 3 and Part II.

### Traps

1. **Every construction on this page carries a smallness hypothesis.** There are no exceptions and the page must not develop the habit of dropping them.
2. **Variance.** The end runs over the twisted arrow category, the coend over its opposite; getting this backwards is the page's easiest fatal error and `fs-` item 3 is the guard.
3. **Kelly's numbering is by equation, not by theorem.** Cite `Kelly (3.1)`, not `Kelly Thm 3.1` — there is no such theorem.
4. If the page threatens the 60-item ceiling, **split off the weighted-limit half (items 15–24)**, not the ends half; the Kan-extension page needs ends first.

**Forward references: NONE.**

---

## MA-6. Kan Extensions, Density and the Free Cocompletion

**page id** `kan-extensions-density-and-the-free-cocompletion`
**`requires`** `ends-coends-and-weighted-limits`, `adjunctions-units-and-counits`,
`universal-properties-and-the-yoneda-lemma`

### A-page items, in dependency order

1. `def-left-and-right-kan-extension` — def. The 2-categorical universal property: $(\operatorname{Lan}_KF,\eta:F\Rightarrow\operatorname{Lan}_KF\cdot K)$ initial among such pairs, and dually (Riehl Def 6.1.1, verbatim). §7 #24. LANDMARK.
2. `rem-the-left-right-naming-clash` — rem. **Mac Lane's own warning**, quoted: *"(But note that some authors call this $R$ a 'left' Kan extension.)"* (§X.3). The library follows the modern convention and says so. §10.
3. `thm-kan-extensions-are-unique-up-to-unique-isomorphism` — thm. Riehl Ex 6.1.ii.
4. `def-global-kan-extension` — def. $\operatorname{Lan}_K$ as a left adjoint to $K^*$, distinguished from the local notion. §7 #24.
5. `thm-lan-is-left-adjoint-to-restriction-which-is-left-adjoint-to-ran` — thm. $\operatorname{Lan}_K\dashv K^*\dashv\operatorname{Ran}_K$ when the extensions exist (Riehl Prop 6.1.6). LANDMARK.
6. `thm-the-comma-category-colimit-formula-computes-a-left-kan-extension` — thm. If $\operatorname{colim}(K\downarrow d\to\mathcal C\to\mathcal E)$ exists for every $d$, these objects define $\operatorname{Lan}_KF$, and the unit is extracted from the colimit cone (Riehl Thm 6.2.1, verbatim). Dually for $\operatorname{Ran}$. LANDMARK.
7. `def-pointwise-kan-extension-by-the-colimit-formula` — def. Riehl Def 6.2.6, **including the clause about $\eta_c$ being the leg at $\mathrm{id}_{Kc}$** — the clause most restatements drop. §7 #25.
8. `thm-existence-of-pointwise-kan-extensions` — thm. $\mathcal C$ small, $\mathcal D$ locally small, $\mathcal E$ cocomplete $\Rightarrow$ $\operatorname{Lan}_KF$ exists and is pointwise; dually with $\mathcal E$ complete (Riehl Cor 6.2.7). LANDMARK.
9. `def-pointwise-kan-extension-by-preservation-by-representables` — def. Riehl Def 6.3.5/6.3.6.
10. `thm-the-two-notions-of-pointwise-agree` — thm. **With the size hypotheses**: $\mathcal D$ and $\mathcal E$ locally small (Riehl Thm 6.3.7). LANDMARK. **See the trap — this statement was defective in Riehl's first edition.**
11. `def-absolute-kan-extension` — def. Preserved by every functor; strictly stronger than pointwise.
12. `thm-left-adjoints-preserve-left-kan-extensions` — thm. Riehl Lemma 6.3.2.
13. `thm-a-kan-extension-along-a-fully-faithful-functor-genuinely-extends-when-it-is-pointwise` — thm. The unit/counit is then an isomorphism (Riehl Cor 6.2.14). LANDMARK.
14. `thm-kan-extensions-as-coends` — thm. $\operatorname{Lan}_KF(d)\cong\int^c \mathcal D(Kc,d)\cdot Fc$ and $\operatorname{Ran}_KF(d)\cong\int_c Fc^{\mathcal D(d,Kc)}$ (Mac Lane §X.4; Loregian §2.3). LANDMARK — the reason `MA-5` sits below this page.
15. `thm-limits-and-colimits-are-kan-extensions-along-the-functor-to-the-terminal-category` — thm. Mac Lane Thm X.7.1; Riehl Prop 6.5.1.
16. `thm-an-adjunction-is-an-absolute-kan-extension` — thm. $G$ has a left adjoint iff $\operatorname{Ran}_G 1_{\mathcal A}$ exists and is preserved by $G$, and then it **is** the left adjoint with the Kan counit as the adjunction counit (Mac Lane Thm X.7.2, verbatim; Riehl Prop 6.5.2). LANDMARK — and Mac Lane's stronger observation that $HF=\operatorname{Ran}_GH$ for **any** $H$, i.e. the extension is absolute, is part of the item.
17. `thm-the-yoneda-lemma-as-a-limit-formula` — thm. $Fc\cong\lim(c/\mathcal C\to\mathcal C\to\mathcal D)$ (Riehl Prop 6.5.4). **The equalizer presentation carries hypotheses the underlying formula does not** — $F$ a small diagram, $\mathcal D$ with products and equalizers — and the Statement names them.
18. `thm-the-co-yoneda-lemma-as-a-colimit-formula` — thm. Riehl Prop 6.5.6, dual, with its own hypotheses.
19. `thm-density-for-a-locally-small-category` — thm. Every $F:\mathcal C\to\mathbf{Set}$ is the colimit of $(\int F)^{\mathrm{op}}\to\mathcal C^{\mathrm{op}}\to\mathbf{Set}^{\mathcal C}$, indexed by the published `def-category-of-elements` (Riehl Thm 6.5.7; Leinster Thm 6.2.17). LANDMARK. §7 #26.
20. `thm-density-as-a-self-kan-extension-for-a-small-category` — thm. $\operatorname{Lan}_{\text{よ}}\text{よ}\cong\mathrm{id}$, for $\mathcal C$ **small** (Riehl Thm 6.5.8). LANDMARK. **The two density statements sit at different size levels and the page says so** — Riehl's own footnote explains why.
21. `def-dense-subcategory` — def.
22. `thm-the-presheaf-category-on-a-small-category-is-the-free-cocompletion` — thm. Every $F:\mathcal C\to\mathcal E$ with $\mathcal C$ small and $\mathcal E$ locally small and cocomplete induces $\operatorname{Lan}_{\text{よ}}F\dashv \mathcal E(F-,-)$, and **every** adjunction whose left adjoint has a presheaf-category domain arises this way (Riehl Prop 6.5.9, improved in the 2nd edition). LANDMARK — **the smallness hypothesis is named in the Statement**, and the page summary says plainly that the large case is not available here (§8 denial 3).
23. `def-codensity-monad` — def. $\operatorname{Ran}_GG$ (Riehl Def 6.5.10).
24. `thm-the-codensity-monad-of-the-inclusion-of-finite-sets-is-the-ultrafilter-monad` — thm. Riehl Ex 6.5.12. **CONTINGENT**: a genuinely beautiful result that ties this page to `MA-3` item 33. The authoring Beta verifies the proof closes from `MA-3`'s ultrafilter monad and the published ultrafilter items; if not, it becomes a `rem-` with the citation and the drop is recorded.
25. `thm-kan-extensions-along-a-full-subcategory-inclusion` — thm.

### `fs-` items

- `fs-every-kan-extension-is-pointwise` — **the page's sharpest**, and the witness is real: Riehl **Ex 6.2.15**, constructed for the 2nd edition precisely because the hypothesis is necessary and no easy counterexample was on record. $K:1+1\hookrightarrow(\ell\leftarrow m\rightarrow r)$ fully faithful into a five-object $\mathcal E$ with no initial object, where the universal property holds vacuously and the unit is not invertible.
- `fs-lan-along-a-fully-faithful-functor-always-restricts-back-to-the-original-functor` — the positive statement is item 13, **with** the pointwise hypothesis.
- `fs-the-free-cocompletion-theorem-holds-for-a-large-source-category` — §8 denial 3.
- `fs-the-yoneda-embedding-preserves-colimits` — Leinster Warning 6.2.14, with the one-line witness that $\text{よ}(0)$ evaluated at $0$ is a singleton, not $\varnothing$. The published `cor-yoneda-preserves-and-reflects-small-limits` is the true half and is cited beside it.

### B page — `kan-extensions-density-and-the-free-cocompletion-examples`

`ex-left-kan-extension-along-a-full-subcategory-inclusion` · `ex-a-kan-extension-computing-a-free-functor` · `ex-induction-and-coinduction-of-group-representations` (Riehl Ex 6.2.9) · `ex-the-orbit-category-kan-extension` (Riehl Ex 6.2.12) · `ex-density-computed-for-a-presheaf-on-a-two-object-category` · `cex-a-kan-extension-that-is-not-pointwise` (Riehl Ex 6.2.15 worked) · `ex-lan-along-the-inclusion-of-the-rationals-in-the-reals` (Riehl Ex 6.2.8).

### Sources

- **Riehl 2nd ed. Ch 6, §§6.1–6.3 and 6.5** (printed pp. 220–250). **Primary, and the sole full textbook treatment of Kan extensions among the sources with an open text** — Leinster's book contains **zero** occurrences of "Kan". §6.4 is excluded (§8 denial 8).
- **Mac Lane, *CWM* Ch X** §§X.1–X.7 (printed pp. 233–250) — Def X.3, the coend formula X.4, pointwise X.5, density X.6, Thms X.7.1 and X.7.2. **Second independent treatment**, read verbatim, and the source of the naming-clash warning (item 2).
- **Loregian §2.3** "Kan extensions using co/ends" — third treatment for item 14.
- **Leinster §6.2** (printed pp. 145–157) for density (Thm 6.2.17) and the two warnings.

### Traps

1. **Riehl's Thm 6.3.7 was WRONG in the first edition** — the size hypotheses were missing, and she records in the 2nd-edition acknowledgments that Vladimir Sotirov pointed this out. Item 10 must carry "$\mathcal D$ and $\mathcal E$ locally small". **Any locator or statement carried over from a first-edition memory of this theorem inherits a defective statement.**
2. **Items 19 and 20 are at different size levels** (locally small vs small). Merging them into one "density theorem" would state a falsehood at one of the two levels.
3. **Local versus global Kan extension** (items 1 and 4) are different objects. The page keeps them apart throughout.
4. Item 22's smallness restriction is this block's most visible casualty and belongs in the page summary — **in the non-decaying form** (SCHEMA §6: no claims about what other pages do or lack).

**Forward references: NONE.**

---
