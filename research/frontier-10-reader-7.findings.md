# Independent step-6 reader findings — `frontier-10`, batch 7

Role: independent step-6a reader. This report covers all 85 dispatched items:
60 on `categories-functors-and-natural-transformations` and 25 on its examples
page. I read each title and Statement/Definition/Example, every numbered proof
or verification step, every cited dependency's actual Statement/Definition,
the boundary cases, and the provenance fields. The 60 proof-bearing items were
also checked against the batch proof contract. This is a reader report, not a
certification: every finding and repair below remains for Alpha to adjudicate.

## Disposition summary

| Pre-repair severity | Findings | Reader action | Unresolved |
|---|---:|---|---:|
| Fatal | 7 | Repaired in the assigned item boundary | 0 |
| Nonfatal | 20 | Repaired in the assigned item boundary | 0 |

"Fatal" below describes the dispatched text before the reader's repair. It does
not certify the repair. The seven fatal defects were an ill-typed large-category
definition, an over-large functor-category construction, ill-typed
slice/coslice notation, a set/class domain mismatch, two proofs that applied
loop-only results to arbitrary endpoint paths, and an automorphism-group
multiplication reversed by the page's traversal convention. The
nonfatal findings were citation-licensing, direct-dependency, source-provenance,
or strict-equality issues that a competent reader could close quickly.

## Fatal findings and provisional repairs

### F7-01 — `def-category` — fatal, repaired

Evidence: the dispatched definition allowed `Ob(C)` and `Mor(C)` to be proper
classes but called `dom`, `cod`, identities, and composition “functions.” In the
library's ZFC foundation, ordinary functions are sets; the page's
`rem-category-theory-class-and-size-conventions` instead licenses definable
class-function schemas. Without invoking that convention, the central
definition was ill-typed for the large categories asserted later on the page.

Repair: added the convention as a direct dependency and stated that a map with
proper-class-sized domain is a definable class-function schema, reducing to an
ordinary function on a set domain. The Statement provenance was changed from
`literature-derived` to `ai-altered` because the formulation was materially
changed.

### F7-02 — `def-comma-slice-and-coslice-categories` — fatal, repaired

Evidence: a comma category requires two functors into a common codomain, but
the dispatched formulas `(1_C downarrow C)` and `(C downarrow 1_C)` put the
object `C` where a functor was required. The notation was therefore not merely
abbreviated but ill-typed.

Repair: introduced the terminal category `1` and the selector functor
`Delta_C:1 -> C`, then defined the slice as
`(1_C downarrow Delta_C)` and the coslice as
`(Delta_C downarrow 1_C)`. The object and morphism equations were written out
in both cases.

### F7-03 — `prop-category-isomorphisms-are-bijective-on-objects-and-morphisms` — fatal, repaired

Evidence: the theorem quantifies over categories that may be large, while its
only inverse-map citation,
`thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse`, is a
theorem about set functions. The proof then took inverse “functions” on object
and total morphism classes without any class-map convention. The cited result
did not cover the theorem's stated domain. Its opening phrase also called this
an isomorphism “in the category of categories,” although the page convention
explicitly declines to form such an ambient large category; L1 likewise cited
the ordinary morphism-isomorphism Definition for the inverse-functor claim.

Repair: stated the large case in terms of bijective definable class maps, added
the page's class convention as a dependency, separated the set-function result
from its pointwise definable-schema extension, and rebuilt the converse from
the uniquely determined inverse maps. The Statement now defines “isomorphism of
categories” intrinsically by a two-sided inverse functor, and the mismatched
ordinary-isomorphism dependency was removed. Precheck's canonical branch
numbering was adopted.

### F7-04 — `ex-fundamental-groupoid` — fatal, repaired

Evidence: the dispatched Facts said
`thm-composition-respects-homotopy` licensed path concatenation on endpoint-path
classes, but that dependency's Statement concerns composition of continuous
maps under homotopy, not concatenation of two paths. The proof also cited
`thm-fundamental-group-laws`, whose Statement is about loops at one basepoint,
to obtain associativity, identities, and inverses for paths with arbitrary
endpoints. Thus well-defined composition and the groupoid laws were not
licensed in the required domain.

Repair: removed the inaccurate dependency; added the actual path definition;
added the general finite closed-cover pasting lemma directly; proved
well-definedness by pasting endpoint-preserving homotopies; supplied explicit
piecewise-linear reparameterizations for associativity and identities; and
supplied explicit contractions for a path followed by its reversal and for the
reverse order. The loop theorem is now used only in the exact comparison of
each automorphism group with `pi_1(X,x)` and its opposite.

### F7-05 — `ex-change-of-basepoint-isomorphism-for-fundamental-groups` — fatal, repaired

Evidence: the cancellation of the arbitrary connecting path `gamma` with its
reverse was again attributed to the loop-only fundamental-group laws and to
the unrelated composition-of-maps homotopy theorem. Neither cited Statement
licensed cancellation of arbitrary endpoint-path classes, so the asserted
inverse homomorphism had a real proof gap.

Repair: replaced the inaccurate dependency with the earlier, repaired
`ex-fundamental-groupoid`, whose verification now proves concatenation,
associativity, and reversal for arbitrary endpoint paths. The basepoint-change
calculation then uses exactly that result.

### F7-26 — `def-functor-category` and downstream natural isomorphisms — fatal, repaired

Evidence: the dispatched Definition formed `[C,D]` for arbitrary categories.
If the source `C` is large in this page's ZFC convention, a functor's object and
morphism assignments are proper-class schemas, not sets that can be objects of
another category. Forming all of them as objects would require the higher-size
`CAT`-style construction that `rem-category-theory-class-and-size-conventions`
explicitly refuses. The unrestricted claim was therefore outside the stated
foundation. `def-natural-isomorphism` and
`prop-natural-isomorphisms-are-componentwise-isomorphisms` also phrased the
general notion through that potentially nonexistent functor category.

Repair: restricted the actual functor-category construction to a small source,
which makes every functor and natural transformation set-coded, and marked
large-source notation as metatheoretic shorthand only. Natural isomorphism is
now defined intrinsically by a two-sided inverse natural transformation for
arbitrary categories; it is identified with an isomorphism in `[C,D]` only when
the small-source functor category exists. The componentwise-isomorphism theorem
now cites the direct vertical-composition Definition rather than assuming the
functor category. Both altered Definitions now have `ai-altered` Statement
provenance.

### F7-27 — `ex-fundamental-groupoid` — fatal, repaired

Evidence: the groupoid composition was correctly defined by
`[beta] o [alpha] = [alpha*beta]`, because `alpha` is traversed before `beta`.
But the page's fundamental-group convention defines `[alpha][beta]` to be
`[alpha*beta]`, while the one-object-category convention reads group
multiplication as `y o x = yx`. Consequently categorical automorphism
multiplication is the opposite of the stated fundamental-group multiplication.
The dispatched Example and final step asserted literal equality as groups, so
they were false under the library's explicit convention.

Repair: the Example and final step now state the exact relation: the identity
on loop classes identifies `Aut_{Pi_1(X)}(x)` with `pi_1(X,x)^op`, and path
reversal/inversion gives the canonical group isomorphism from that automorphism
group to `pi_1(X,x)`.

## Nonfatal findings and provisional repairs

### F7-06 through F7-12 — seven local-smallness citations — nonfatal, repaired

Each dispatched proof cited `def-function` for the claim that all functions
between two fixed sets form a set. That Definition says what a function is; it
does not assert existence of the function set. The exact result is
`def-the-set-of-functions-from-one-set-to-another`, which defines `B^A`.

| Finding | Item | Repair |
|---|---|---|
| F7-06 | `prop-sets-and-functions-form-category-set` | Added the exact function-set dependency and used `B^A` in L1 and step 3.1. |
| F7-07 | `prop-groups-and-homomorphisms-form-category-grp` | Replaced `def-function` with the exact function-set dependency in frontmatter and L2. |
| F7-08 | `prop-rings-and-homomorphisms-form-category-ring` | Same repair. |
| F7-09 | `prop-vector-spaces-and-linear-maps-form-category-vect` | Same repair. |
| F7-10 | `prop-modules-and-homomorphisms-form-category-rmod` | Same repair. |
| F7-11 | `prop-topological-spaces-and-continuous-maps-form-category-top` | Same repair. |
| F7-12 | `prop-posets-and-monotone-maps-form-category-poset` | Same repair. |

These were nonfatal under the 30-second rule: the missing set-existence step is
standard and the correct library item was already available, but the cited
Definition did not say what each Fact claimed.

### F7-13 — `prop-preorders-as-categories-and-monotone-maps-as-functors` — nonfatal, repaired

Evidence: L2 said `def-category` supplied the meaning of a functor, but that
Definition contains no functor definition. A direct dependency on the later
functor item would be forward. Repair: stated inline, for this proposition, that
a functor assigns objects and arrows and preserves identities and composition.

### F7-14 — `def-functor-category` — nonfatal, repaired

Evidence: the Definition used vertical composition as its morphism composition
but depended only on the lemma proving that vertical composites are natural.
That lemma's Statement does not define the operation. Repair: added and linked
`def-vertical-composition-of-natural-transformations` directly.

### F7-15 — `def-natural-isomorphism` — nonfatal, repaired

Evidence: the Definition says that a natural isomorphism is an isomorphism in a
functor category but omitted `def-functor-category`. Repair: added the direct
dependency and link.

### F7-16 — `def-equivalence-and-adjoint-equivalence-of-categories` — nonfatal, repaired

Evidence: the triangle identities use four whiskerings, but no dependency
defined whiskering. Repair: added and linked
`def-horizontal-composition-and-whiskering-of-natural-transformations`.

### F7-17 — `prop-equivalence-of-categories-is-an-equivalence-relation` — nonfatal, repaired

Evidence: transitivity explicitly vertically composes whiskered units and
counits, while its Facts and dependencies licensed only horizontal composition.
Repair: added the vertical-composition Definition to L2 and frontmatter.

### F7-18 — `thm-interchange-law-for-natural-transformations` — nonfatal, repaired

Evidence: L1 attributed the component formulas for vertical and horizontal
composition to lemmas whose Statements assert naturality, not those formulas.
Repair: cited both operation Definitions directly while retaining the two
naturality lemmas for closure.

### F7-19 — `thm-every-equivalence-can-be-made-an-adjoint-equivalence` — nonfatal, repaired

Evidence: L1 claimed `def-natural-isomorphism` states that every component is
invertible. Its Definition characterizes invertibility in the functor category;
the explicit componentwise theorem is
`prop-natural-isomorphisms-are-componentwise-isomorphisms`. Repair: replaced
the inflated citation with that proposition in L1 and frontmatter.

### F7-20 — `def-strict-two-category` — nonfatal, repaired

Evidence: the Definition requires a product of hom-categories and a
horizontal-composition functor but depended only on `def-category`. Repair:
added and linked `def-product-category` and
`def-functor-and-contravariant-functor`.

### F7-21 — `ex-pointed-sets-equivalent-to-sets-and-partial-functions` — nonfatal, repaired

Evidence: with the displayed disjoint-union construction, step 2.1 asserted the
literal equality `RL=1_Par`. For an arbitrary set `A`, the chosen copy inside a
disjoint union need not be literally `A`; only a canonical natural bijection is
available. Repair: replaced the false strict equality by the canonical natural
isomorphism `RL ~= 1_Par`, parallel to the already correct `LR ~= 1_Set_*`.

### F7-22 — `fs-every-category-is-locally-small` — nonfatal, repaired

Evidence: steps 1.1 and 2.1 cited L3, the Burali–Forti fact, as though it were
the page's class-schema convention. The convention was actually linked only in
the Given. Repair: the construction and category-axiom step now cite `given`;
L3 is reserved for the conclusion that `Ord` is not a set.

### F7-23 — `ex-matrix-category-equivalent-to-finite-dimensional-vector-spaces` — nonfatal, repaired

Evidence: the batch notes identify Riehl, *Category Theory in Context*, Example
1.5.12 as the source clause for the matrix-category equivalence, while the item
cited Mac Lane Chapter IV. Repair: replaced the source entry with the exact
Riehl example and primary PDF URL.

### F7-24 — `ex-determinant-is-a-natural-transformation`, licensing — nonfatal, repaired

Evidence: L3 said the four cited matrix items establish that entrywise ring
homomorphisms preserve matrix multiplication. Their actual Definitions and
Statements define the matrix operations and their laws but do not state this
functoriality claim. Repair: L3 now claims only what those dependencies say,
and step 1.2 proves compatibility entrywise from the matrix-product formula and
ring-homomorphism preservation of finite sums and products.

### F7-25 — `ex-determinant-is-a-natural-transformation`, source — nonfatal, repaired

Evidence: the source entry named Mac Lane Chapter II, but the determinant
natural-transformation example is in Chapter I, section 4, page 16. Repair:
corrected the chapter, section, page, and URL to the primary PDF.

## Per-item reading ledger

For every row marked “no finding,” I read the title against the content, all
numbered steps when present, all Fact-to-step uses, and the actual cited
dependency Statements/Definitions; “no finding” means no concrete defect after
that adversarial read. Finding rows point to the evidence above.

### Page A — 60 items

| Item | Reader record |
|---|---|
| `rem-category-theory-class-and-size-conventions` | Remark, class boundary, and cited foundation results read; no finding. |
| `def-category` | Fatal F7-01; repaired. |
| `def-small-locally-small-and-large-category` | Definition and empty/large boundaries read; no finding. |
| `def-subcategory-and-full-subcategory` | Definition and direction of fullness read; no finding. |
| `prop-sets-and-functions-form-category-set` | Nonfatal F7-06; repaired. |
| `prop-groups-and-homomorphisms-form-category-grp` | Nonfatal F7-07; repaired. |
| `prop-rings-and-homomorphisms-form-category-ring` | Nonfatal F7-08; repaired; zero-ring witness checked against the local ring Definition. |
| `prop-vector-spaces-and-linear-maps-form-category-vect` | Nonfatal F7-09; repaired. |
| `prop-modules-and-homomorphisms-form-category-rmod` | Nonfatal F7-10; repaired. |
| `prop-topological-spaces-and-continuous-maps-form-category-top` | Nonfatal F7-11; repaired. |
| `prop-posets-and-monotone-maps-form-category-poset` | Nonfatal F7-12; repaired. |
| `prop-monoids-and-groups-as-one-object-categories` | Statement, both directions used, and invertibility boundary read; no finding. |
| `def-preorder` | Definition and empty/singleton boundaries read; no finding. |
| `prop-preorders-as-categories-and-monotone-maps-as-functors` | Nonfatal F7-13; repaired. |
| `def-opposite-category` | Definition, reversed composition order, and involutive boundary read; no finding. |
| `thm-category-theoretic-duality-principle` | Formal reversal and dependency directions read; no finding. |
| `def-isomorphism-groupoid-and-connected-category` | Definition, empty-category connectedness convention, and inverse equations read; no finding. |
| `prop-isomorphisms-form-the-maximal-subgroupoid` | Closure, inverse, and maximality proof read; no finding. |
| `lem-isomorphism-characterised-by-composition-bijections` | Both implications and pre/postcomposition directions read; no finding. |
| `def-monomorphism-and-epimorphism` | Left/right cancellation directions read; no finding. |
| `def-split-monomorphism-and-split-epimorphism` | Retraction/section types and equations read; no finding. |
| `prop-basic-calculus-of-monomorphisms-and-epimorphisms` | Identity, composite, and split cases read; no finding. |
| `thm-monomorphisms-and-epimorphisms-in-set` | Injection/surjection converses and empty-domain boundary read; no finding. |
| `cor-under-choice-every-epimorphism-in-set-splits` | Choice use and empty-codomain boundary read; no finding. |
| `thm-inclusion-of-integers-in-rationals-is-monic-epic-not-iso-in-ring` | Ring-epic argument and non-surjectivity/nonisomorphism read; no finding. |
| `def-initial-terminal-and-zero-object` | Definition and uniqueness-up-to-unique-isomorphism implications read; no finding. |
| `def-category-with-zero-morphisms` | Absorption types and compatibility read; no finding. |
| `prop-zero-object-induces-zero-morphisms` | Factorization through zero object and independence of choices read; no finding. |
| `def-functor-and-contravariant-functor` | Domain/codomain, identity, composition direction, and opposite-category form read; no finding. |
| `prop-functors-preserve-isomorphisms` | Image of inverse calculation read; no finding. |
| `def-full-faithful-and-essentially-surjective-functor` | Hom-map quantifiers and split/non-split witness distinction read; no finding. |
| `def-embedding-of-categories` | Faithful/injective-on-objects and full-embedding clauses read; no finding. |
| `prop-fully-faithful-functors-reflect-isomorphisms` | Lifted inverse and faithfulness equations read; no finding. |
| `def-natural-transformation` | Component types and naturality-square direction read; no finding. |
| `def-vertical-composition-of-natural-transformations` | Component order and identity components read; no finding. |
| `lem-vertical-composition-of-natural-transformations-is-natural` | Naturality calculation and step citations read; no finding. |
| `def-horizontal-composition-and-whiskering-of-natural-transformations` | Both component formulas and whiskering types read; no finding. |
| `lem-horizontal-composition-of-natural-transformations-is-natural` | Naturality calculation and composition order read; no finding. |
| `thm-interchange-law-for-natural-transformations` | Nonfatal F7-18; repaired. |
| `def-product-category` | Object/morphism products and projection functors read; no finding. |
| `def-functor-category` | Fatal F7-26 and nonfatal F7-14; repaired. |
| `prop-size-of-functor-categories` | Small-domain family bounds and empty-domain boundary read; no finding. |
| `def-natural-isomorphism` | Fatal F7-26 and nonfatal F7-15; repaired. |
| `prop-natural-isomorphisms-are-componentwise-isomorphisms` | Fatal F7-26 downstream repair; both directions and naturality of component inverses checked. |
| `def-equivalence-and-adjoint-equivalence-of-categories` | Nonfatal F7-16; repaired. |
| `prop-equivalence-of-categories-is-an-equivalence-relation` | Nonfatal F7-17; repaired. |
| `thm-fully-faithful-split-essentially-surjective-characterises-equivalence` | Both constructions, witness data, fullness, and no-Choice claim read; no finding. |
| `lem-choice-splits-essential-surjectivity-over-a-small-target` | Small target, Collection bound, Choice index, and witness set read; no finding. |
| `cor-full-faithful-essentially-surjective-small-target-characterises-equivalence` | Both directions and exact Choice use read; no finding. |
| `thm-every-equivalence-can-be-made-an-adjoint-equivalence` | Nonfatal F7-19; repaired; triangle-identity calculation otherwise checked. |
| `prop-connected-groupoid-equivalent-to-an-automorphism-group` | Nonempty connectedness, object choices, fullness/faithfulness, and essential surjectivity read; no finding. |
| `def-skeletal-category-and-skeleton` | Definition and full-subcategory clause read; no finding. |
| `prop-every-small-category-has-a-skeleton-under-choice` | Quotient of the object set, representative selection, and fullness read; no finding. |
| `def-comma-slice-and-coslice-categories` | Fatal F7-02; repaired. |
| `def-diagram-in-a-category` | Index-category variance and diagram definition read; no finding. |
| `def-strict-two-category` | Nonfatal F7-20; repaired. |
| `thm-small-categories-form-a-strict-two-category` | Hom-categories, strict associativity/unitality, and interchange read; no finding. |
| `thm-eckmann-hilton-argument` | Unit substitutions, interchange, coincidence, and commutativity read; no finding. |
| `prop-category-isomorphisms-are-bijective-on-objects-and-morphisms` | Fatal F7-03; repaired. |
| `prop-fundamental-group-is-a-functor-on-pointed-spaces` | Basepoint types, induced-map composition, identity, and homotopy-class well-definedness read; no finding. |

### Page B — 25 items

| Item | Reader record |
|---|---|
| `ex-underlying-set-and-forgetful-functors` | All named source/target categories and preservation laws read; no finding. |
| `ex-free-group-and-free-module-functors` | Universal-property induced maps, identities, and composition read; no finding. |
| `ex-matrix-category-equivalent-to-finite-dimensional-vector-spaces` | Nonfatal F7-23; repaired; zero-dimensional matrices and supplied-basis essential-surjectivity split checked. |
| `ex-arrow-category-of-set` | Objects, commuting-square morphisms, and componentwise composition read; no finding. |
| `ex-quivers-as-a-functor-category` | Indexing-category orientation and naturality/homomorphism correspondence read; no finding. |
| `ex-fundamental-groupoid` | Fatal F7-04 and F7-27; repaired. |
| `ex-pointed-sets-equivalent-to-sets-and-partial-functions` | Nonfatal F7-21; repaired; zero-object argument and nonisomorphism conclusion checked. |
| `ex-product-with-a-fixed-space-is-a-functor` | Product maps, identity, composition, and empty-space boundary read; no finding. |
| `ex-open-and-closed-set-functors-and-complement-naturality` | Contravariance, inverse images, complement identity, and naturality read; no finding. |
| `ex-singletons-define-a-natural-transformation-to-the-power-set-functor` | Covariant direct-image power set and singleton naturality read; no finding. |
| `ex-opposite-group-is-naturally-isomorphic-to-the-identity-functor` | Opposite multiplication, inversion homomorphism, and naturality read; no finding. |
| `ex-set-arithmetic-isomorphisms-are-natural` | Distributive/exponential bijections and variance read; no finding. |
| `ex-determinant-is-a-natural-transformation` | Nonfatal F7-24 and F7-25; repaired; `n >= 1` and unit-valued determinant boundaries checked. |
| `ex-group-actions-as-functors` | One-object category action law and natural-transformation equivariance read; no finding. |
| `ex-action-groupoid-orbits-and-stabilizers` | Composition, inverses, component/orbit equivalence, and stabilizer automorphisms read; no finding. |
| `ex-change-of-basepoint-isomorphism-for-fundamental-groups` | Fatal F7-05; repaired; traversal convention and inverse path checked. |
| `cex-functors-need-not-preserve-monomorphisms` | AI-generated Statement attacked; the functor laws, source monicity, and failure of target cancellation were checked; no additional finding. |
| `cex-a-monomorphism-need-not-split` | AI-generated Statement attacked; the empty-domain monomorphism and absence of a retraction were checked; no finding. |
| `cex-equivalent-categories-need-not-be-isomorphic` | Equivalence data and object-count obstruction to category isomorphism read; no finding. |
| `cex-fully-faithful-need-not-be-essentially-surjective` | AI-generated Statement attacked; the discrete-category hom maps and missing second essential image were checked; no finding. |
| `cex-a-family-of-components-need-not-be-natural` | AI-generated Statement attacked; the displayed noncommuting naturality square was checked; no finding. |
| `fs-every-equivalence-is-an-isomorphism-of-categories` | Counterexample, equivalence, and non-bijective object map read; no finding. |
| `fs-monic-and-epic-implies-isomorphism` | Ring counterexample and monic/epic directions read; no finding. |
| `fs-every-category-is-locally-small` | Nonfatal F7-22; repaired; `Ord`/maximum category is associative and has identity `0`. |
| `fs-one-component-determines-a-natural-transformation` | Disconnected discrete-category counterexample and independent component choices read; no finding. |

## Page, provenance, and source checks

- The A-page summary was read against the item sequence and dependencies. Its
  two paragraphs do not overstate the page. The B page has no prose body to
  audit beyond its item list.
- The four `provenance.statement: ai-generated` items are the four
  counterexamples identified explicitly in the B ledger. I attempted to break
  each construction before accepting it; all four witnesses satisfy their
  stated category/functor hypotheses and refute exactly the stated claim.
- I opened every dependency item actually cited by the batch, including the 66
  distinct dependencies outside the batch, and read the relevant on-disk
  Statement or Definition rather than relying on its title.
- For clauses bearing on findings or high-risk provenance, I also checked the
  primary sources: Riehl's *Category Theory in Context* (including Example
  1.5.12 and the fundamental-groupoid/equivalence clauses), Ahrens–Kapulkin–
  Shulman's section on split essential surjectivity, and Mac Lane's determinant
  example in Chapter I, section 4, page 16.
- I did not independently reproduce the entire 156-row source harvest against
  every cited book/PDF. I checked the mathematical and provenance clauses used
  by the authored items; full harvest-faithfulness comparison remains Alpha's
  step 6b.0 duty.

## Verification after repair

- Reflow reported all 18 changed proof-bearing files unchanged.
- Scoped precheck: 18/18 repaired proof files passed directly.
- Strict proof contract: 60/60 items, 0 errors, 0 warnings. The affected
  derivations, citations, uses, and boundary references were regenerated from
  the repaired source.
- Repository dependency check: exit 0, no cycles or unresolved references and
  no batch-7 warning. Its printed warnings are pre-existing repository legacy
  rows outside this batch.
- Scoped rendercheck: 25/25 changed items clean, including real KaTeX and YAML
  parsing.
- Scoped prosecheck: 25/25 changed items, 0 errors and 0 warnings.
- Scoped citecheck: 25/25 changed items clean.
- Content policy: all 85 batch items, 0 errors, 0 warnings.
- Coverage checklist: 156 harvested rows, 0 errors, 0 warnings.
- `git diff --check`: clean.

The scaffold manifest's planned per-item dependency arrays were not rewritten
by this reader; the repaired item frontmatter and the strict proof contract
record the added exact dependencies. Alpha should adjudicate the mathematical
repairs from disk and perform any workflow-prescribed plan/authored dependency
reconciliation. No permission prompt or escalation was attempted. Nothing in
the assigned mathematical read remained unchecked except the full 156-row
source re-harvest stated above.
