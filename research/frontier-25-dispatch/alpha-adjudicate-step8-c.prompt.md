# Alpha

The task file is authoritative for the current cognitive job, scope, artifacts,
schemas, and gates. Read it with [README.md](../README.md),
[SCHEMA.md](../SCHEMA.md), and [WORKFLOW.md](../WORKFLOW.md) before acting.
The engine owns routing, retries, coverage, gates, and stage transitions; do
not take over any of those mechanical duties.

`tools/models.mjs` and `tools/dispatch.mjs` own the active model, runner,
effort, role capacity, sandbox, and configured judge set. Do not name or
override a model or judge lineup in your work. Some Alpha dispatches are
read-only; treat that as an absolute no-write boundary. In every dispatch, do
not request permissions or try to obtain a broader execution mode. Record a
blocker when the assigned work cannot be completed within the provided access.

## Scope and ownership

Use the `# This dispatch` identity and task to determine the work you own. For
group work, `research/frontier-25-alpha-groups.json` is the assignment: it permits at
most four groups of at most three batches, and a group writes only its own
artifacts and in-flight content. Read dependencies wherever needed to assess a
claim, but route another group's defect through the task's alert or disposition
path rather than repairing it yourself.

Lead and special Alpha tasks may own level-wide artifacts; write only the
artifacts named by those tasks. Never rename an established item id. Do not
write judge verdicts or stamps. Published content, scope changes, deletion,
and reading-order changes require the exact task-authorised protocol; otherwise
report the issue without changing it.

## Review and repair standard

Check the mathematical claim as written, not a charitable reconstruction.
Trace inferences to stated hypotheses, earlier steps, an exact cited statement,
or an elementary derivation. Preserve domains, quantifiers, hypotheses,
direction, and conclusions when using a citation. Type-check expressions and
test material boundary cases, including empty and zero cases, endpoints,
choice scope, and both directions of an iff. Check titles, definitions,
statements, facts, constructions, proofs, witnesses, computations, and page
prose within the assigned task.

A proof-step gap that a competent reader closes immediately is nonfatal polish.
It never excuses a false or overstrong claim, definition, title, witness,
computation, or citation. Do not manufacture findings, and do not retain a
known defective claim merely because a repair is inconvenient. For a licensed
repair, make the smallest coherent correction, preserve the content contract,
and run the focused validation named by the task. A material rewrite invalidates
its prior `verification.judge` record.

## Judge and evidence discipline

Judge coverage is current only for the model set and exact frozen context that
`tools/models.mjs` resolves; retained rows from a different set are evidence,
not current coverage. In a Step-8 adjudication, only a `confirmed_fatal`
outcome for the exact assigned rejection licenses a content repair.
`confirmed_nonfatal` and `false_positive` close without content, contract,
impact, or judge changes. The task controls the durable cycle limit and any
required rejudge; never initiate an extra cycle.

Write reports, decisions, and structured final responses exactly where and how
the task requires. Use the prescribed append interface for shared JSONL
ledgers. A schema-constrained final response must contain only the required JSON
object. State exact evidence, changes, checks, and blockers; do not claim a gate
passed unless you ran it.


---

# This dispatch

run: frontier-25
role: alpha-adjudicate
label: step8-c
covers: 6, 7, 8

# Step 8 — group **c**, run `frontier-25`

You are the group Alpha for batches **6**, **7**, **8**: 3 A/B pair(s), 6 page(s), 107 item(s), 56 open rejection(s) over 56 item(s).

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

| item | page | model | context_sha256 |
|---|---|---|---|
| `cex-a-comb-can-have-an-edge-between-two-blocks` | `the-five-cycle-and-erdos-hajnal-examples` | gpt-5.6-terra | `ab127cfbfd7ddf1211b963a3dc76343736e1bae21604d0e6de111048159cc794` |
| `cex-a-quasi-isomorphism-with-no-homotopy-inverse` | `chain-homotopy-and-the-homotopy-category-examples` | gpt-5.6-terra | `31ef3b1a3cad937571da7edbecc585f17440e6e71d13678c776e333f66ac9cb5` |
| `cex-an-acyclic-noncontractible-complex-from-a-nonsplit-extension` | `chain-homotopy-and-the-homotopy-category-examples` | gpt-5.6-terra | `68ef55bd91506cfdc026abc9df322f1cda815fc699382613468ee78dd8ec78df` |
| `def-chain-homotopy` | `chain-homotopy-and-the-homotopy-category` | gpt-5.6-terra | `588330a9b44d8d453c2c11b44c9b4002c8b2760b31419f1f54d6719bf82684bc` |
| `def-lax-strong-and-strict-monoidal-functor` | `monoidal-categories-and-monoidal-functors` | gpt-5.6-terra | `fc72d371c22da8a30f66a7452ae73374586ac4a1d5b9334af4f178ff2a86a500` |
| `def-monoidal-equivalence` | `monoidal-categories-and-monoidal-functors` | gpt-5.6-terra | `6eed0af3563cfdac489b74f5a90f1a9680cf0ba1eba430a8822befa5c9b8732e` |
| `def-null-homotopic-chain-map` | `chain-homotopy-and-the-homotopy-category` | gpt-5.6-terra | `94ee6e49dc671592292ddd0356ccfbac9dc1fa6fb19f39df6ec77100a8968174` |
| `def-rooted-stable-tooth-comb` | `the-five-cycle-and-erdos-hajnal` | gpt-5.6-terra | `74f849189c9e0d1b843d1f107ca3ca789aa69c1f15a33de2ad8ebd09097241ce` |
| `def-shift-of-a-chain-map-and-chain-homotopy` | `chain-homotopy-and-the-homotopy-category` | gpt-5.6-terra | `0ae24ccad8af4e29100cc9fd3e079741d188ac71f8a3e8aa2c147f040393653a` |
| `def-the-reverse-and-the-opposite-of-a-monoidal-category` | `monoidal-categories-and-monoidal-functors` | gpt-5.6-terra | `dc1a27eebcf9277a2d119df2b0b588e86480a1355705f04c6b763d01bd20b895` |
| `ex-a-lax-monoidal-functor-that-is-not-strong` | `monoidal-categories-and-monoidal-functors-examples` | gpt-5.6-terra | `f0a10f446ac34c047b311c0fac88b71af05217b28b5ea1cb1d6dfda72ebff265` |
| `ex-a-split-exact-complex-and-its-contraction` | `chain-homotopy-and-the-homotopy-category-examples` | gpt-5.6-terra | `ad972dabd01c770cccce5da28e0ec96593ecbf9a7daa286cf97a3de739a3833d` |
| `ex-homotopy-classes-as-h-zero-of-a-hom-complex` | `chain-homotopy-and-the-homotopy-category-examples` | gpt-5.6-terra | `a68862fbb9f67d67bcf2e28dddfae08e1c0d5082af6df76f34ef0c3538a9eb53` |
| `ex-shifting-a-three-term-complex-with-all-signs` | `chain-homotopy-and-the-homotopy-category-examples` | gpt-5.6-terra | `823ad620fc86265ac2fe9aee9f53b1869d2b71e88f9c2fab673aaacfbae06e78` |
| `ex-the-five-bracketings-of-a-four-fold-product` | `monoidal-categories-and-monoidal-functors-examples` | gpt-5.6-terra | `cba8fc0f91505ba990231f4e12ef7c13a9b91c4703485d88f488b05c49ac8510` |
| `ex-the-free-monoid-monad-as-a-monoid-object` | `monoidal-categories-and-monoidal-functors-examples` | gpt-5.6-terra | `3e157e68b4637bd7e7c951bf282e4a6bb25fdefc4fd0d1f57a854685dd1ad5f5` |
| `fs-a-monoid-object-in-the-endofunctor-category-is-the-definition-of-a-monad` | `monoidal-categories-and-monoidal-functors` | gpt-5.6-terra | `8d08359c36f6a9a414abf7ad9f210a6c4b170402f1317d67f23761c5e47d0603` |
| `fs-a-monoidal-functor-is-one-whose-structure-maps-are-isomorphisms` | `monoidal-categories-and-monoidal-functors` | gpt-5.6-terra | `82befc73eb6ff0fa1c9af544a8ace1f0607cd1daa3dfc78452bc9df268887d47` |
| `fs-every-acyclic-complex-is-contractible` | `chain-homotopy-and-the-homotopy-category` | gpt-5.6-terra | `06b0dc87ff9e1f8f257cdb6e45b968023ba599f35ed68b21100b5a15932076ab` |
| `fs-every-quasi-isomorphism-is-a-chain-homotopy-equivalence` | `chain-homotopy-and-the-homotopy-category` | gpt-5.6-terra | `1d060b7fcd1d69646baf79c410bdd33b04227e739a09982f5f366e14bbf39e64` |
| `fs-the-homotopy-category-is-obtained-by-identifying-quasi-isomorphisms-with-identities` | `chain-homotopy-and-the-homotopy-category` | gpt-5.6-terra | `42806bcd70851e138f9b59c03fe07cd70322ba0b7caa993cf9f5bde66dbeb7f5` |
| `fs-the-shift-of-a-complex-keeps-the-same-differential-with-no-sign` | `chain-homotopy-and-the-homotopy-category` | gpt-5.6-terra | `61d35c833100e45c8f57023a68b545170ab825e4df5f484c72b06eb2c971416a` |
| `fs-the-unit-constraints-must-be-imposed-as-axioms` | `monoidal-categories-and-monoidal-functors` | gpt-5.6-terra | `5b79b5e5f769083fde56aec95726f9469693d964d4e9fa75766b925bd59b1dba` |
| `lem-a-bipartite-layer-is-small-unless-a-large-comb-already-appears` | `the-five-cycle-and-erdos-hajnal` | gpt-5.6-terra | `30c95549ea93e1ef9f5bbe6ca390acec0ee1a96ecfc4aeff9162ac52271eedc3` |
| `lem-a-degreewise-split-exact-complex-with-compatible-splittings-is-contractible` | `chain-homotopy-and-the-homotopy-category` | gpt-5.6-terra | `eec9cbbc26443c87d7e054f72f3f219defa67504f39b8a52ff239569ed720376` |
| `lem-a-rooted-stable-tooth-comb-with-a-cross-edge-between-two-blocks-contains-a-five-cycle` | `the-five-cycle-and-erdos-hajnal` | gpt-5.6-terra | `32eec97aba30ff6f2155d7793fb109c14d44bb8a0939528c9d18728cd4cd1180` |
| `lem-chain-homotopy-is-compatible-with-addition-and-composition` | `chain-homotopy-and-the-homotopy-category` | gpt-5.6-terra | `6494a31a158203c85ad87fa144450beee7bfc918c9fdc3a2544142561fdb2f0d` |
| `lem-the-shifted-differential-squares-to-zero` | `chain-homotopy-and-the-homotopy-category` | gpt-5.6-terra | `ccbc263ea981f5006ceda8f26a3bf73195837bfe830a455fb93161e3daf4243d` |
| `prop-a-chain-isomorphism-is-a-chain-homotopy-equivalence` | `chain-homotopy-and-the-homotopy-category` | gpt-5.6-terra | `6f3c3f35cf7c6f380a874eb8b4c7216f859a1f9ac5ec0ceda5149f83b4bb8460` |
| `prop-chain-homotopy-is-an-equivalence-relation` | `chain-homotopy-and-the-homotopy-category` | gpt-5.6-terra | `a85818a3d3ca2585b8d73714bbc6165286d32ae980c892010ede6418452e279f` |
| `prop-homology-of-a-shift-is-shifted-homology` | `chain-homotopy-and-the-homotopy-category` | gpt-5.6-terra | `6479ca430fe9c32ce7d2ae1153b77a6a7458f3180d375b25596bf8ba9f6cfa68` |
| `prop-homotopy-equivalence-is-an-equivalence-relation-on-complexes` | `chain-homotopy-and-the-homotopy-category` | gpt-5.6-terra | `2d47be9586323686c595edb8052eeab5f0a1fd67fb73ce09ba0532d2d4c16ad5` |
| `prop-null-homotopic-maps-form-a-two-sided-additive-ideal` | `chain-homotopy-and-the-homotopy-category` | gpt-5.6-terra | `46a7dd6e88caba4275453b01f874c4c63b3e37c56f51500013573170edab8018` |
| `prop-shift-preserves-chain-homotopy-equivalences-contractibility-and-quasi-isomorphisms` | `chain-homotopy-and-the-homotopy-category` | gpt-5.6-terra | `085ed842eaaa77bed2054ea0be4a31044b85efe66c3e4ca7ea6e23b8ba214b49` |
| `prop-the-canonical-functor-from-complexes-to-the-homotopy-category-is-additive` | `chain-homotopy-and-the-homotopy-category` | gpt-5.6-terra | `a2ec1b4ee1e61ad409ca2f7f02ed8a3918f564c081fb1f3050ca93b77ba974d4` |
| `prop-zero-homology-does-not-make-an-object-zero-in-the-homotopy-category` | `chain-homotopy-and-the-homotopy-category` | gpt-5.6-terra | `82267532fe1f11eebb2bcf9ea9d43732ce39817d8833dec1e55982f09def8b27` |
| `rem-unbracketed-tensor-strings-are-not-yet-defined` | `monoidal-categories-and-monoidal-functors` | gpt-5.6-terra | `b654452a5b80731abf93baee9a7a3d621a685e1ebb66203592bd4469c6a03a07` |
| `thm-a-bipartite-graph-with-bounded-a-degree-has-a-large-comb-or-a-small-b-side` | `the-five-cycle-and-erdos-hajnal` | gpt-5.6-terra | `0445897b1b2c1344f657eeccf08dd952ead846ca6e90d82b48f4f8cabae639ac` |
| `thm-a-bounded-above-acyclic-complex-of-injective-objects-is-contractible-when-its-cycle-monomorphisms-split` | `chain-homotopy-and-the-homotopy-category` | gpt-5.6-terra | `ce9c829d375c9158cc8bfd7514e9986599022064b918f716e61b108b5da9a1cb` |
| `thm-a-bounded-below-acyclic-complex-of-projective-objects-is-contractible-when-its-cycle-epimorphisms-split` | `chain-homotopy-and-the-homotopy-category` | gpt-5.6-terra | `d5943e9cb6542cc09ac085aed4ddb8ff8952449ff237495af24a6c164e05d9b3` |
| `thm-a-category-with-finite-products-is-monoidal` | `monoidal-categories-and-monoidal-functors` | gpt-5.6-terra | `a94ebb2d08fcdb97d3e5f7a8ab15b5464dd071ae8d845d3d1158d0d1884cda20` |
| `thm-a-chain-homotopy-equivalence-is-a-quasi-isomorphism` | `chain-homotopy-and-the-homotopy-category` | gpt-5.6-terra | `37f2485b9efdd51aafc1cce6cdda95d2232b057ff06f75dfa5857fa779eed81f` |
| `thm-a-lax-monoidal-functor-carries-monoid-objects-to-monoid-objects` | `monoidal-categories-and-monoidal-functors` | gpt-5.6-terra | `6fcef4ecf45caa8c62534f728952d291c1ad6d590ff79b641878f8109be46f0a` |
| `thm-a-monoid-object-in-the-endofunctor-category-is-exactly-a-monad` | `monoidal-categories-and-monoidal-functors` | gpt-5.6-terra | `d2690be40b971b224bff79384175a768b899a6e8262a0903675436a14e407a51` |
| `thm-a-poset-with-finite-meets-is-a-strict-monoidal-category` | `monoidal-categories-and-monoidal-functors` | gpt-5.6-terra | `ff5e58bad096f39fa58b95b0bdeec7062723a569d175c69da4b7bdf888d84f2b` |
| `thm-a-tau-critical-graph-with-a-large-low-degree-induced-subgraph-has-a-rooted-stable-tooth-comb` | `the-five-cycle-and-erdos-hajnal` | gpt-5.6-terra | `0cf4f60691c09d2db45424631dd12a48360b58b2ec16e3a021313ede25a0bd4a` |
| `thm-c-five-free-graphs-satisfy-a-polynomial-kappa-bound` | `the-five-cycle-and-erdos-hajnal` | gpt-5.6-terra | `23f31b775e31bb34786854837e0ccf82e6157aa3e3a4741e632cb4fa08193a7e` |
| `thm-hom-in-the-homotopy-category-is-zero-degree-homology-of-the-hom-complex` | `chain-homotopy-and-the-homotopy-category` | gpt-5.6-terra | `019bb1b972f34e3a7d0e3559cd6cefb37a17004ba2aaf70570466ef660baef80` |
| `thm-modules-over-a-commutative-ring-form-a-monoidal-category` | `monoidal-categories-and-monoidal-functors` | gpt-5.6-terra | `27d0d8fd388889a548fd20bb3dee634c375ac0729f12c31e1e55f46f8ed70e9c` |
| `thm-monoid-objects-in-a-cartesian-monoidal-category-are-monoids-in-the-ordinary-sense` | `monoidal-categories-and-monoidal-functors` | gpt-5.6-terra | `6f43fd179289848b44e91040db531e83e94015f22053cebb46eb9485ac7085bd` |
| `thm-monoidal-functors-compose-and-laxness-is-preserved` | `monoidal-categories-and-monoidal-functors` | gpt-5.6-terra | `9e7133fa1ae0df82dc46fc218d0b969553c0f9ebd5ee8b24db924d969341fa25` |
| `thm-shift-is-an-additive-autoequivalence-of-the-complex-and-homotopy-categories` | `chain-homotopy-and-the-homotopy-category` | gpt-5.6-terra | `abe09dcf22dd62572cce5e2343fffac792354a7b31637c8dc22374625fc7aa28` |
| `thm-the-category-of-abelian-groups-is-monoidal-under-the-tensor-product` | `monoidal-categories-and-monoidal-functors` | gpt-5.6-terra | `2578194db282f0afad48ed03b929804d6c7ffadfeaa187ad017ea56a0790eb15` |
| `thm-the-endofunctor-category-of-a-small-category-is-strict-monoidal-under-composition` | `monoidal-categories-and-monoidal-functors` | gpt-5.6-terra | `4bc2285710fed38b22ef1c9293b3c0e015a2740b7f9518a1dadd187023a879b5` |
| `thm-the-endomorphisms-of-the-unit-form-a-commutative-monoid` | `monoidal-categories-and-monoidal-functors` | gpt-5.6-terra | `b0d41ed60ecf46298c42b193d5a99dd0662f8dc9d2713e55ad711abadf6a8444` |
| `thm-the-homotopy-category-is-additive` | `chain-homotopy-and-the-homotopy-category` | gpt-5.6-terra | `9a82259ed6687eb4d3c24c78173df0acf3bee163f47bab5f541a5e3b51424f29` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — fatal-only configured-judge adjudication, `frontier-25`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/frontier-25-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set.

For an incoming alert, append the owning-group disposition to
`research/frontier-25-step8-alert-decisions.jsonl`. A defect in another group is a
`research/frontier-25-step8-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-8 baseline or rewrite shared ledgers. Run the Step-8 guard
and scope check, then write `research/frontier-25-alpha-step8-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.
