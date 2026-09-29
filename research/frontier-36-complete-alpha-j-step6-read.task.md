# Step 6 whole-group reading — group **j**, run `frontier-36-complete`

You are the group Alpha for batches **21**, **22**, **23**: 3 A/B pair(s), 6 page(s), 44 item(s).

Read every owned item and every listed seam before returning the compact
schema-constrained digest. That file, not this conversation, is the handoff
to a fresh Step-7 adjudicator. No judge verdict is supplied here.
In the digest, `pages_read` is exactly the ids under **Your pages** and
`items_read` exactly the ids under **Your content**. External items you
open belong only in `published_dependencies`; never add them to those inventories.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## Read scope

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything an owned item touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**This dispatch is read-only.** Record concerns about owned items and alerts
about other groups in the returned digest; do not repair anything.

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

---

# Step 6 — group reading digest, `frontier-36-complete`

Read every page and item in the generated group header, its cited published
dependencies, and every listed cross-group seam. This dispatch is read-only;
record concerns and alerts without repairing them.

Return only the supplied Step-7 context JSON. `pages_read`, `items_read`, and
`seams_checked` must be exact inventories of the generated scope. Record the
group's conventions, load-bearing items, opened published dependencies, and
concrete concerns; an empty concerns or alerts list is valid.

The reply is parsed as JSON, so every backslash inside a string is an escape:
write a LaTeX command as a doubled backslash (`\\perp`, `\\omega`), never as
`\perp`. An invalid escape invalidates the whole digest. When a symbol is
available in plain text or Unicode (⊥, ω, ≤, ∈), prefer it over TeX.

Inventory boundary: `pages_read` must contain exactly the ids under **Your
pages**, and `items_read` exactly the ids under **Your content**, with no extras.
Opening a published dependency does not expand either inventory; record its item
only under `published_dependencies`.

Put a finding about another group's item in `alerts`, not `concerns`; the scope
tool routes it to that item's owning group before adjudication.
