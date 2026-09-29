# Step 7 adjudication — group **j**, run `frontier-36-complete`

You are the group Alpha for batches **21**, **22**, **23**: 3 A/B pair(s), 6 page(s), 44 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

**No step-6 digest exists for this group.** The reading half did not run or did
not produce one, so you are meeting this mathematics for the first time with the
rejections already in front of you. Read the pages before the verdicts anyway —
the order matters more than where the notes came from.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-36-complete-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 21 | `grothendieck-groups-and-graded-cartan-pairings` | A | homological-algebra | 719 | `graded-bimodules-and-tensor-functors`, `subobject-lattices-generators-and-the-grothendieck-axioms`, `exactness-and-the-member-calculus`, `modular-representations-and-projective-covers`, `tensor-and-fusion-categories` |
| 21 | `grothendieck-groups-and-graded-cartan-pairings-examples` | B | homological-algebra | 720 | `grothendieck-groups-and-graded-cartan-pairings` |
| 22 | `bounded-bimodule-complexes-and-derived-tensor` | A | homological-algebra | 721 | `graded-bimodules-and-tensor-functors`, `derived-categories` |
| 22 | `bounded-bimodule-complexes-and-derived-tensor-examples` | B | homological-algebra | 722 | `bounded-bimodule-complexes-and-derived-tensor` |
| 23 | `hochschild-homology-and-diagonal-koszul-resolutions` | A | homological-algebra | 725 | `graded-bimodules-and-tensor-functors`, `tor-flatness-and-global-dimension`, `koszul-complexes-and-regular-sequences` |
| 23 | `hochschild-homology-and-diagonal-koszul-resolutions-examples` | B | homological-algebra | 726 | `hochschild-homology-and-diagonal-koszul-resolutions` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `grothendieck-groups-and-graded-cartan-pairings` — Grothendieck Groups and Graded Cartan Pairings (14 item(s))

- `def-grothendieck-group-of-an-essentially-small-abelian-category` · definition — Grothendieck group of an essentially small abelian category
- `def-split-grothendieck-group-of-an-additive-category` · definition — Split Grothendieck group of an additive category
- `thm-grothendieck-group-universal-properties-and-functoriality` · theorem — Universal properties and functoriality of G0 and split K0
- `thm-finite-length-grothendieck-groups-have-simple-class-bases` · theorem — Simple classes freely generate the Grothendieck group of a length category
- `thm-finite-dimensional-algebra-projective-classes-form-a-split-k-zero-basis` · theorem — Indecomposable projective classes form a basis of split K0
- `def-graded-grothendieck-group-shift-module-and-cartan-map` · definition — Graded Grothendieck groups, shift action, and Cartan map
- `lem-graded-fitting-decomposition-preserves-homogeneous-summands` · lemma — Graded Fitting decomposition for degree-zero endomorphisms
- `thm-graded-krull-schmidt-for-finite-dimensional-graded-modules` · theorem — Graded Krull–Schmidt for finite-dimensional graded modules
- `lem-finite-dimensional-graded-algebras-have-graded-projective-covers` · lemma — Finite-dimensional graded algebras have graded projective covers
- `thm-graded-projective-and-simple-classes-have-shift-orbit-bases` · theorem — Shift-orbit bases for graded simple and projective classes
- `def-projective-simple-hom-pairing-on-grothendieck-groups` · definition — Projective–module Hom pairing on class generators
- `thm-projective-hom-pairing-is-additive-and-graded-sesquilinear` · theorem — Projective Hom pairing descends and is graded sesquilinear
- `thm-split-simple-projective-hom-pairing-has-dual-bases` · theorem — Projective and simple classes are dual bases under splitting
- `thm-adjoint-exact-functors-induce-adjoint-grothendieck-operators` · theorem — Exact adjoints induce adjoint operators on Grothendieck groups

### `grothendieck-groups-and-graded-cartan-pairings-examples` — Grothendieck Groups and Graded Cartan Pairings — Examples (3 item(s))

- `ex-cartan-map-for-the-dual-numbers` · example — The dual numbers have Cartan map multiplication by two
- `ex-graded-dual-numbers-cartan-polynomial` · example — The graded dual numbers have Cartan polynomial 1+v²
- `ex-hom-pairing-over-a-nonsplit-field` · example — A nonsplit simple has Hom-pairing diagonal two

### `bounded-bimodule-complexes-and-derived-tensor` — Bounded Bimodule Complexes and Derived Tensor (6 item(s))

- `def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization` · definition — Bounded graded bimodule complexes and signed tensor totalization
- `lem-bimodule-tensor-totalization-respects-differentials-and-homotopies` · lemma — Bimodule tensor totalization respects differentials and homotopies
- `thm-bounded-bimodule-tensor-associativity-unit-and-cone-compatibility` · theorem — Bounded bimodule tensor is associative, unital, and compatible with cones
- `thm-a-bounded-projective-bimodule-complex-defines-a-derived-tensor-functor` · theorem — A bounded two-sided projective bimodule complex defines exact derived tensor functors
- `prop-homotopy-equivalent-bimodule-complexes-induce-isomorphic-tensor-functors` · proposition — Bimodule homotopy equivalences induce natural tensor-functor isomorphisms
- `thm-inverse-bimodule-complexes-give-derived-tensor-equivalences` · theorem — Supplied inverse bimodule complexes give derived tensor equivalences

### `bounded-bimodule-complexes-and-derived-tensor-examples` — Bounded Bimodule Complexes and Derived Tensor — Examples (3 item(s))

- `ex-two-term-tensor-complex-koszul-signs` · example — The four entries and Koszul signs in a two-term tensor bicomplex
- `ex-left-and-right-projective-not-enveloping-projective` · example — The diagonal bimodule k[x] is projective on both sides but not over its enveloping algebra
- `ex-contractible-bimodule-complex-induces-zero-functor` · example — A contractible two-term bimodule complex induces the zero tensor functor

### `hochschild-homology-and-diagonal-koszul-resolutions` — Hochschild Homology and Diagonal Koszul Resolutions (14 item(s))

- `def-enveloping-algebra-and-bimodule-module-dictionary` · definition — Enveloping algebra and the bimodule–module dictionary
- `def-two-sided-bar-resolution-of-an-associative-algebra` · definition — The augmented two-sided bar complex
- `lem-bar-differential-and-augmentation-form-a-complex` · lemma — The bar boundary squares to zero and is augmented
- `thm-two-sided-bar-complex-is-an-enveloping-projective-resolution` · theorem — The two-sided bar complex is a projective A^e-resolution
- `def-hochschild-chain-complex-of-a-bimodule` · definition — Hochschild chains and Hochschild homology with coefficients
- `lem-hochschild-chains-are-bar-tensor-chains` · lemma — Hochschild chains are bar tensor chains
- `thm-hochschild-homology-is-tor-over-the-enveloping-algebra` · theorem — Hochschild homology is Tor over the enveloping algebra
- `thm-hochschild-homology-is-functorial-and-has-coefficient-long-exact-sequences` · theorem — Functoriality and coefficient long exact sequences for Hochschild homology
- `prop-hochschild-degree-zero-is-bimodule-coinvariants` · proposition — Degree-zero Hochschild homology is bimodule coinvariants
- `def-diagonal-koszul-bimodule-complex-of-a-polynomial-ring` · definition — The polynomial diagonal Koszul bimodule complex
- `lem-polynomial-diagonal-differences-form-a-regular-sequence` · lemma — Polynomial diagonal differences form a regular sequence
- `thm-the-diagonal-koszul-complex-resolves-the-polynomial-ring` · theorem — The diagonal Koszul complex is a finite free resolution of R
- `thm-polynomial-hochschild-homology-is-computed-by-the-diagonal-koszul-complex` · theorem — Polynomial Hochschild homology from the diagonal Koszul complex
- `cor-polynomial-diagonal-bimodule-hochschild-homology` · corollary — Diagonal Hochschild homology of a polynomial ring

### `hochschild-homology-and-diagonal-koszul-resolutions-examples` — Hochschild Homology and Diagonal Koszul Resolutions — Examples (4 item(s))

- `ex-hochschild-homology-of-the-ground-field` · example — Hochschild homology of the ground field
- `ex-one-variable-diagonal-koszul-computation` · example — One-variable diagonal Hochschild calculation
- `ex-one-variable-twisted-bimodule-hochschild-computation` · example — One-variable twisted bimodule Hochschild calculation
- `ex-two-variable-diagonal-koszul-signs` · example — Two-variable diagonal Koszul signs

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-6 reader warnings

None. No Step-6 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/frontier-36-complete-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 batch adjudication, `frontier-36-complete`

Follow `briefs/step7-adjudicator.md` and the engine-generated, round-bound task.
It supplies the batch, exact rejections, ownership, evidence paths and structured
result schema. Do not reconstruct these from an old group task.

Adjudicate by logical validity, repair all confirmed defects (including nonfatal
defects), and identify all
relevant downstream consumers including published items. The engine routes
downstream repairs to three Sol xhigh owners and certifies once after all
writers drain. Sol rejudgment and adjudication/repair/certification repeat
under WORKFLOW.md. New downstream work continues in the repair phase until
complete before certification. Fatal classification controls only the threshold.
Historical terminal receipts cannot close current rounds.
Adjudicators and all three owner agents may author new items only for genuine
unmet prerequisites. Follow the dedicated briefs for evidence, unique IDs,
registry/index and metadata inclusion, downstream repair closure and central
certification and gates; the frozen original scope never grows.
