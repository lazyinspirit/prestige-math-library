# Step 8 — group **c**, run `frontier-25`

You are the group Alpha for batches **6**, **7**, **8**: 3 A/B pair(s), 6 page(s), 107 item(s), 0 open rejection(s) over 0 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-25-alpha-c-step8-context.json` is what a group Alpha for this group wrote during step 7,
while the judges were still sweeping and no verdict existed. It records the
conventions your pages fix, which items the rest lean on, which published
dependencies were actually opened, and what already looked thin.

**Its `concerns` list is evidence, not decoration.** Each entry was found with
nobody suggesting where to look. A judge rejection landing at the same place is
two independent readings agreeing and should be very hard to call a
`false_positive`; a rejection landing nowhere near any of them is not thereby
wrong, but it is the case to read most carefully against the text.

It is notes, not authority. Where it and the item files disagree, the files win.

## Read scope, write scope

**You may read the entire library.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-25-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 6 | `monoidal-categories-and-monoidal-functors` | A | category-theory | 365.023 | `the-diagram-lemmas-in-an-abelian-category-examples` |
| 6 | `monoidal-categories-and-monoidal-functors-examples` | B | category-theory | 365.024 | `monoidal-categories-and-monoidal-functors` |
| 7 | `chain-homotopy-and-the-homotopy-category` | A | homological-algebra | 365.039 | `chain-complexes-and-homology-examples` |
| 7 | `chain-homotopy-and-the-homotopy-category-examples` | B | homological-algebra | 365.04 | `chain-homotopy-and-the-homotopy-category` |
| 8 | `the-five-cycle-and-erdos-hajnal` | A | combinatorics | 415 | `cographs-perfect-patterns-and-pure-pairs`, `bull-free-graphs-and-the-erdos-hajnal-property` |
| 8 | `the-five-cycle-and-erdos-hajnal-examples` | B | combinatorics | 416 | `the-five-cycle-and-erdos-hajnal` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `monoidal-categories-and-monoidal-functors` — Monoidal Categories and Monoidal Functors (38 item(s))

- `def-monoidal-category` · definition — Monoidal category
- `rem-the-associator-runs-the-other-way-in-mac-lane` · remark — Mac Lane writes the associator in the opposite direction
- `thm-the-pentagon-and-the-triangle-are-independent` · theorem — The pentagon axiom and the triangle axiom are independent
- `def-strict-monoidal-category` · definition — Strict monoidal category
- `def-the-reverse-and-the-opposite-of-a-monoidal-category` · definition — The reverse and the opposite of a monoidal category
- `thm-a-category-with-finite-products-is-monoidal` · theorem — A category with finite products is monoidal
- `cor-set-cat-and-every-complete-category-are-cartesian-monoidal` · corollary — Set, Cat, and every complete category are cartesian monoidal
- `thm-the-endomorphisms-of-the-unit-form-a-commutative-monoid` · theorem — The endomorphisms of the tensor unit form a commutative monoid
- `thm-the-endofunctor-category-of-a-small-category-is-strict-monoidal-under-composition` · theorem — The endofunctor category of a small category is strict monoidal under composition
- `thm-a-monoid-object-in-the-endofunctor-category-is-exactly-a-monad` · theorem — A monoid object in a small endofunctor category is exactly a monad
- `def-monoid-object-and-comonoid-object-in-a-monoidal-category` · definition — Monoid objects and comonoid objects in a monoidal category
- `def-a-module-over-a-monoid-object` · definition — Modules over a monoid object, their morphisms, and their category
- `thm-monoid-objects-in-a-cartesian-monoidal-category-are-monoids-in-the-ordinary-sense` · theorem — Monoid objects in a cartesian monoidal category are ordinary monoids
- `thm-the-category-of-abelian-groups-is-monoidal-under-the-tensor-product` · theorem — Abelian groups are monoidal under the tensor product
- `thm-monoid-objects-in-abelian-groups-are-rings` · theorem — Monoid objects in abelian groups are rings
- `thm-modules-over-a-commutative-ring-form-a-monoidal-category` · theorem — Modules over a commutative ring form a monoidal category
- `thm-a-poset-with-finite-meets-is-a-strict-monoidal-category` · theorem — A poset with finite meets is a strict monoidal category
- `thm-the-left-unitor-of-a-tensor-product-is-determined` · theorem — The left unitor of a tensor product is determined by the associator
- `thm-the-right-unitor-of-a-tensor-product-is-determined` · theorem — The right unitor of a tensor product is determined by the associator
- `cor-the-two-unitors-agree-on-the-unit-object` · corollary — The two unitors agree on the tensor unit
- `rem-mac-lanes-original-conditions-and-what-became-of-them` · remark — How Mac Lane's original coherence conditions reduce to this page's two axioms
- `rem-the-attribution-of-the-unit-redundancies` · remark — The unit-constraint redundancies are cited mathematically through EGNO
- `def-lax-strong-and-strict-monoidal-functor` · definition — Lax, strong, and strict monoidal functors
- `rem-monoidal-functor-means-different-things-in-different-sources` · remark — Why the bare phrase 'monoidal functor' is ambiguous across sources
- `def-monoidal-natural-transformation` · definition — Monoidal natural transformation
- `thm-monoidal-functors-compose-and-laxness-is-preserved` · theorem — Monoidal functors compose, and composition preserves laxness, strength, and strictness
- `thm-a-lax-monoidal-functor-carries-monoid-objects-to-monoid-objects` · theorem — A lax monoidal functor carries monoid objects to monoid objects
- `def-monoidal-equivalence` · definition — Monoidal equivalence and monoidal quasi-inverse data
- `def-parenthesised-tensor-word` · definition — Parenthesised tensor words and their evaluation functors
- `thm-parenthesised-words-of-a-given-length-are-counted-by-the-catalan-numbers` · theorem — Parenthesised tensor words of a fixed length are counted by the Catalan numbers
- `rem-unbracketed-tensor-strings-are-not-yet-defined` · remark — Unbracketed tensor strings are not yet defined on this page
- `rem-isbells-argument-that-isomorphic-objects-cannot-simply-be-identified` · remark — Isbell's warning that isomorphic objects cannot simply be identified
- `fs-every-monoidal-category-is-strict` · false-statement — FALSE: every monoidal category is strict
- `fs-the-unit-constraints-must-be-imposed-as-axioms` · false-statement — FALSE: the unit constraints must be imposed as independent axioms
- `fs-a-monoidal-functor-is-one-whose-structure-maps-are-isomorphisms` · false-statement — FALSE: a monoidal functor is exactly one whose structure maps are isomorphisms
- `fs-the-pentagon-follows-from-the-triangle` · false-statement — FALSE: the pentagon axiom follows from the triangle axiom
- `fs-an-unbracketed-tensor-product-of-three-objects-is-well-defined-in-any-monoidal-category` · false-statement — FALSE: an unbracketed three-fold tensor product is already well defined in any monoidal category
- `fs-a-monoid-object-in-the-endofunctor-category-is-the-definition-of-a-monad` · false-statement — FALSE: a monoid object in an endofunctor category is the definition of a monad

### `monoidal-categories-and-monoidal-functors-examples` — Monoidal Categories and Monoidal Functors - Examples (8 item(s))

- `ex-the-cartesian-monoidal-structure-on-sets-computed` · example — The cartesian monoidal structure on sets computed
- `ex-the-pentagon-checked-for-cartesian-products` · example — The pentagon checked for cartesian products
- `ex-a-monoid-as-a-one-object-monoidal-category` · example — A commutative monoid as a one-object strict monoidal category
- `ex-the-five-bracketings-of-a-four-fold-product` · example — The five bracketings of a four-fold tensor product
- `ex-the-free-monoid-monad-as-a-monoid-object` · example — The free-monoid monad as a monoid object in the endofunctor category
- `ex-a-lax-monoidal-functor-that-is-not-strong` · example — The power-set functor is lax monoidal but not strong
- `cex-the-skeleton-of-set-cannot-be-made-strict-by-identification` · counterexample — A skeleton of Set cannot be made strict by identifying isomorphic objects
- `ex-endofunctor-composition-as-a-strict-tensor` · example — Endofunctor composition as a strict tensor product

### `chain-homotopy-and-the-homotopy-category` — Chain Homotopy and the Homotopy Category (40 item(s))

- `def-graded-morphism-of-chain-complexes` · definition — A graded morphism of chain complexes
- `def-hom-complex-of-chain-complexes` · definition — The Hom complex of chain complexes
- `lem-the-hom-complex-differential-squares-to-zero` · lemma — The Hom-complex differential squares to zero
- `prop-zero-cocycles-in-the-hom-complex-are-chain-maps` · proposition — Zero cocycles in the Hom complex are chain maps
- `def-chain-homotopy` · definition — A chain homotopy
- `def-null-homotopic-chain-map` · definition — A null-homotopic chain map
- `prop-chain-homotopy-is-an-equivalence-relation` · proposition — Chain homotopy is an equivalence relation
- `lem-chain-homotopy-is-compatible-with-addition-and-composition` · lemma — Chain homotopy is compatible with addition and composition
- `prop-null-homotopic-maps-form-a-two-sided-additive-ideal` · proposition — Null-homotopic maps form a two-sided additive ideal
- `thm-chain-homotopic-maps-induce-the-same-map-on-homology` · theorem — Chain-homotopic maps induce the same map on homology
- `cor-null-homotopic-maps-induce-zero-on-homology` · corollary — Null-homotopic maps induce zero on homology
- `def-chain-homotopy-equivalence` · definition — A chain homotopy equivalence
- `def-contractible-complex` · definition — A contractible complex
- `thm-a-chain-homotopy-equivalence-is-a-quasi-isomorphism` · theorem — A chain homotopy equivalence is a quasi-isomorphism
- `cor-a-contractible-complex-is-acyclic` · corollary — A contractible complex is acyclic
- `def-homotopy-classes-of-chain-maps` · definition — Homotopy classes of chain maps
- `lem-composition-of-homotopy-classes-is-well-defined` · lemma — Composition of homotopy classes is well defined
- `def-homotopy-category-of-chain-complexes` · definition — The homotopy category of chain complexes
- `thm-the-homotopy-category-is-additive` · theorem — The homotopy category is additive
- `prop-the-canonical-functor-from-complexes-to-the-homotopy-category-is-additive` · proposition — The canonical functor from complexes to the homotopy category is additive
- `thm-homology-factors-uniquely-through-the-homotopy-category` · theorem — Homology factors uniquely through the homotopy category
- `prop-zero-homology-does-not-make-an-object-zero-in-the-homotopy-category` · proposition — Zero homology does not make an object zero in the homotopy category
- `thm-hom-in-the-homotopy-category-is-zero-degree-homology-of-the-hom-complex` · theorem — Hom in the homotopy category is zero-degree homology of the Hom complex
- `def-shift-of-a-chain-complex` · definition — The shift of a chain complex
- `lem-the-shifted-differential-squares-to-zero` · lemma — The shifted differential squares to zero
- `def-shift-of-a-chain-map-and-chain-homotopy` · definition — Shifted chain maps and shifted chain homotopies
- `thm-shift-is-an-additive-autoequivalence-of-the-complex-and-homotopy-categories` · theorem — Shift is an additive autoequivalence of the complex and homotopy categories
- `prop-homology-of-a-shift-is-shifted-homology` · proposition — Homology of a shift is shifted homology
- `prop-shift-preserves-chain-homotopy-equivalences-contractibility-and-quasi-isomorphisms` · proposition — Shift preserves homotopy equivalences, contractibility, and quasi-isomorphisms
- `def-suspension-and-desuspension-of-a-chain-complex` · definition — Suspension and desuspension of a chain complex
- `lem-a-degreewise-split-exact-complex-with-compatible-splittings-is-contractible` · lemma — A degreewise split exact complex with compatible splittings is contractible
- `thm-a-bounded-below-acyclic-complex-of-projective-objects-is-contractible-when-its-cycle-epimorphisms-split` · theorem — A bounded below acyclic complex of projective objects is contractible when its cycle epimorphisms split
- `thm-a-bounded-above-acyclic-complex-of-injective-objects-is-contractible-when-its-cycle-monomorphisms-split` · theorem — A bounded above acyclic complex of injective objects is contractible when its cycle monomorphisms split
- `prop-homotopy-equivalence-is-an-equivalence-relation-on-complexes` · proposition — Homotopy equivalence is an equivalence relation on complexes
- `prop-a-chain-isomorphism-is-a-chain-homotopy-equivalence` · proposition — A chain isomorphism is a chain homotopy equivalence
- `fs-chain-homotopic-maps-are-equal-as-chain-maps` · false-statement — FALSE: chain-homotopic maps are equal as chain maps
- `fs-every-acyclic-complex-is-contractible` · false-statement — FALSE: every acyclic complex is contractible
- `fs-every-quasi-isomorphism-is-a-chain-homotopy-equivalence` · false-statement — FALSE: every quasi-isomorphism is a chain homotopy equivalence
- `fs-the-homotopy-category-is-obtained-by-identifying-quasi-isomorphisms-with-identities` · false-statement — FALSE: the homotopy category is obtained by identifying quasi-isomorphisms with identities
- `fs-the-shift-of-a-complex-keeps-the-same-differential-with-no-sign` · false-statement — FALSE: the shift of a complex keeps the same differential with no sign

### `chain-homotopy-and-the-homotopy-category-examples` — Chain Homotopy and the Homotopy Category - Examples (8 item(s))

- `ex-a-contracting-homotopy-for-the-two-term-identity-complex` · example — A contracting homotopy for the two-term identity complex
- `ex-two-homotopic-maps-with-different-components` · example — Two homotopic maps with different components
- `ex-the-hom-complex-of-two-two-term-complexes` · example — The Hom complex of two two-term complexes
- `ex-a-split-exact-complex-and-its-contraction` · example — A split exact complex and its contraction
- `cex-an-acyclic-noncontractible-complex-from-a-nonsplit-extension` · counterexample — An acyclic noncontractible complex from a nonsplit extension
- `cex-a-quasi-isomorphism-with-no-homotopy-inverse` · counterexample — A quasi-isomorphism with no homotopy inverse
- `ex-shifting-a-three-term-complex-with-all-signs` · example — Shifting a three-term complex with all signs
- `ex-homotopy-classes-as-h-zero-of-a-hom-complex` · example — Homotopy classes as H-zero of a Hom complex

### `the-five-cycle-and-erdos-hajnal` — The Five-Cycle and the Erdős–Hajnal Property (9 item(s))

- `lem-a-bipartite-layer-is-small-unless-a-large-comb-already-appears` · lemma — A bipartite layer is small unless a large comb already appears
- `thm-a-bipartite-graph-with-bounded-a-degree-has-a-large-comb-or-a-small-b-side` · theorem — A bipartite graph with bounded A-degree has a large comb or a small B-side
- `def-rooted-stable-tooth-comb` · definition — A rooted stable-tooth comb
- `thm-a-tau-critical-graph-with-a-large-low-degree-induced-subgraph-has-a-rooted-stable-tooth-comb` · theorem — A tau-critical graph with a large low-degree induced subgraph has a rooted stable-tooth comb
- `lem-a-sparse-graph-has-a-prescribed-size-induced-subgraph-of-bounded-maximum-degree` · lemma — A sparse graph has a prescribed-size induced subgraph of bounded maximum degree
- `cor-an-h-free-graph-has-a-linearly-large-induced-subgraph-whose-graph-or-complement-has-bounded-maximum-degree` · corollary — An H-free graph has a linearly large induced subgraph whose graph or complement has bounded maximum degree
- `lem-a-rooted-stable-tooth-comb-with-a-cross-edge-between-two-blocks-contains-a-five-cycle` · lemma — A rooted stable-tooth comb with a cross-edge between two blocks contains an induced five-cycle
- `thm-c-five-free-graphs-satisfy-a-polynomial-kappa-bound` · theorem — The C5-free graphs satisfy a polynomial kappa bound
- `cor-the-five-cycle-has-the-erdos-hajnal-property` · corollary — The five-cycle has the Erdős-Hajnal property

### `the-five-cycle-and-erdos-hajnal-examples` — The Five-Cycle and the Erdős–Hajnal Property — Examples (4 item(s))

- `ex-a-rooted-stable-tooth-comb-with-two-teeth` · example — A rooted stable-tooth comb with two teeth
- `ex-a-cross-edge-in-a-rooted-stable-tooth-comb-creates-an-induced-five-cycle` · example — A cross-edge in a rooted stable-tooth comb creates an induced five-cycle
- `cex-a-comb-can-have-an-edge-between-two-blocks` · counterexample — A comb can have an edge between two blocks
- `fs-every-comb-has-pairwise-anticomplete-blocks` · false-statement — FALSE: every comb has pairwise anticomplete blocks

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Alerts from other groups

None. No other group flagged an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-25-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — targeted repair-integrity review, `frontier-25`

The generated repair envelope above is authoritative. It supplies every failed
gate with full output, the exact live ids and rejection tuples, and each id's
run or published scope. Take only its `assigned_items` and `live_tuples`; rerun
the focused gate where it supports item scope.

Complete a repair already licensed by an exact `confirmed_fatal` adjudication,
or correct a documentary contract/manifest/impact/verification record that must
match the current proof. Do not edit a nonfatal or false-positive item, broaden
the scope, run a judge sweep, or run a workflow transition.

Preserve append-only ledgers and return the gate, ids, licensing rows, changed
files, targeted checks, and blocker. This task applies before `8-rejudge`; a
frozen-cutover dispatch uses the Step-8 close task instead.
