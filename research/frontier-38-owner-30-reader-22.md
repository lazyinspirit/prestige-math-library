# Step 5a reader — batch 22

Run: `frontier-38-owner-30`. Reader: `reader-22`.

Both assigned pages and all five assigned items were read. No mathematical defect was found in the reviewed claims, arguments, or supplier uses. No item, page, proof contract, or verification record was changed. No withdrawal is proposed. No uneditable finding or blocker remains.

This is a reader report, not a judge stamp, certification, or publication audit. The engine status command confirmed the current run is at Step 5a; no historical RESUME file or earlier reader report was used as evidence.

## Opened inventory

Instructions and assignment evidence: `CLAUDE.md`, `README.md`, `SCHEMA.md`, `briefs/reader.md`, `research/frontier-38-owner-30-batch-22.pages.json`, `research/frontier-38-owner-30-batch-22.proof-contracts.json`, and `research/frontier-38-owner-30-batch-22.cross-batch-dependencies.json` (empty). No rendered evidence bundle was supplied or located for this dispatch. Current Markdown carriers were the mathematical evidence.

Pages, including their entire summaries and placement lists:

- `library/scheme-theory/group-schemes-of-finite-type-over-a-field.md` (A).
- `library/scheme-theory/group-schemes-of-finite-type-over-a-field-examples.md` (B; read-only prose).

Assigned items, read in dependency order after their direct published suppliers:

1. `items/def-group-scheme-over-a-field.md`.
2. `items/def-morphism-and-closed-subgroup-scheme.md`.
3. `items/lem-closed-subgroup-scheme-valued-point-criterion.md`.
4. `items/ex-additive-multiplicative-and-general-linear-group-schemes.md`.
5. `items/cex-alpha-p-mu-p-rational-points-do-not-detect-scheme.md`.

Published supplier items opened in full:

- `items/def-scheme-over-base.md`.
- `items/def-locally-finite-type-and-finite-type-morphism.md`.
- `items/thm-affine-scheme-ring-anti-equivalence.md`.
- `items/thm-affine-fibre-product-tensor-ring.md`.
- `items/def-axiom-of-choice.md`.
- `items/def-closed-immersion-schemes.md`.
- `items/thm-affine-closed-immersions-quotient-rings.md` (current published repair).
- `items/thm-fibre-products-of-schemes-exist.md`.
- `items/thm-ring-matrix-arithmetic-laws.md`.
- `items/thm-determinant-multiplicative.md`.
- `items/cor-inverse-matrix-by-adjugate.md`.
- `items/thm-adjugate-identity-over-a-commutative-ring.md`.
- `items/cor-square-matrix-invertible-iff-determinant-is-a-unit.md`.
- `items/lem-fibre-products-glue-over-open-covers.md`.

The last three suppliers were opened to check the underlying adjugate and gluing arguments. The entire recursive published dependency graph was not audited; elementary ring arithmetic, sheaf gluing, localization, and the supplier facts stated in those published proofs were used as background where their derivations were routine.

## Source evidence actually read

The relevant definitions, statements, formulas, and supplied arguments were read at the following primary-source locations:

- [Milne, Algebraic Groups, corrected 2022 printing](https://www.jmilne.org/math/Books/iAG2022.pdf), Definitions 1.1–1.3 and §§1.4–1.5, printed pp. 6–8, PDF pp. 17–19. Section 1.5 gives the subgroup criterion using points over every k-algebra, and invokes Yoneda for the converse. The local proof supplies the affine-chart factorization and gluing explicitly.
- The same book, §§2.1–2.5 and 2.8, printed pp. 39–41, PDF pp. 50–52: additive, multiplicative, roots-of-unity, infinitesimal-additive, and general-linear coordinate algebras and comultiplications. Section 2.5 identifies the underlying schemes of the additive and multiplicative infinitesimal examples and distinguishes their group structures. Section 2.14, printed p. 44, PDF p. 55, gives the finite-group-scheme convention.
- Stacks [Definition 39.4.1, tag 022S](https://stacks.math.columbia.edu/tag/022S), [Lemma 39.4.2, tag 022T](https://stacks.math.columbia.edu/tag/022T), [Definition 39.4.3, tag 047D](https://stacks.math.columbia.edu/tag/047D), [Lemma 39.4.4, tag 0G8L](https://stacks.math.columbia.edu/tag/0G8L), and [Definition 39.4.5, tag 047E](https://stacks.math.columbia.edu/tag/047E). In particular, 0G8L states the identity/multiplication/inverse factorization criterion and proves it by test-scheme points. The base-change lemma has an omitted proof; no supplied argument was attributed to it.
- Stacks [Examples 39.5.1–39.5.4, tags 022U](https://stacks.math.columbia.edu/tag/022U), [040M](https://stacks.math.columbia.edu/tag/040M), [022V](https://stacks.math.columbia.edu/tag/022V), and [022W](https://stacks.math.columbia.edu/tag/022W): complete coordinate formulas and functor-of-points descriptions relevant to this batch.

Milne was read through the browser's extracted PDF sections. A downloaded copy was not locally extracted because `pdftotext` is unavailable; browser access supplied the relevant complete passages. No complete-book or complete-chapter reading is claimed.

## Mathematical review

### Definitions

`def-group-scheme-over-a-field`: the associativity, two identity, and two inverse equations have the correct domains and use the structure map to k. The functorial group law follows by composition with test-scheme maps and the product universal property. Finite type is explicit; neither reducedness nor smoothness is required. The commutativity convention is correct.

`def-morphism-and-closed-subgroup-scheme`: all three preservation equations have the correct direction and domains. The closed immersion supplies injectivity on test-scheme points and uniqueness of factors: its underlying point map is injective and its structure-sheaf map is surjective. The induced subgroup structure is therefore unique. The caution about rational points is supported by the companion example.

### Closed-subgroup criterion

`lem-closed-subgroup-scheme-valued-point-criterion`, steps 1.1–3.1: the forward implication uses the homomorphic closed inclusion. In the reverse implication, R=k supplies the identity factor. On an affine chart of H×H, the projections are the required universal H(R)-points; subgroup closure gives the multiplication factor. The same argument produces inverse factors on charts of H. Uniqueness through the immersion makes the factors agree on nonaffine overlaps, so they glue. Composing the proposed group identities with the immersion reduces them to G's identities; monomorphy then cancels the immersion.

The finite-type conclusion uses a finite affine cover of G by finitely generated k-algebras and quotient presentations of its closed inverse images. Quotients remain finitely generated; the finite affine cover also gives quasi-compactness. The current published quotient-spectrum proof was checked, including its local-to-global affineness argument and stalkwise detection of surjectivity. Its inherited AC assumption is explicitly recorded in this item and its contract. The empty H case fails the subgroup test at k; the zero test algebra gives singleton point sets and causes no exception. The factorization equivalence and uniqueness are proved, not just the all-algebra implication.

### Standard affine group schemes

`ex-additive-multiplicative-and-general-linear-group-schemes`, steps 1.1, 1.2, 2.1: the additive and Laurent formulas give algebra maps with the claimed counits and inverses. For GLn, determinant multiplicativity makes the multiplication map extend to the determinant localization. The counit has determinant one. The adjugate inverse is a matrix over the localized algebra, and its determinant is d⁻¹, so its formula also extends to that algebra. Conversely, an invertible matrix has unit determinant by taking determinants of its inverse identity; thus the point description is an equivalence over arbitrary commutative k-algebras.

The matrix suppliers apply to positive n and arbitrary commutative rings. Testing the coordinate algebra of each affine domain with its universal point proves equality of morphisms, including the associativity and inverse identities. Finite generation is exhibited by an inverse generator and its relation. The n=1 and zero-ring cases specialize correctly. No extra choice principle is introduced in these explicit formulas.

### Infinitesimal counterexample

`cex-alpha-p-mu-p-rational-points-do-not-detect-scheme`, counterexample prose and steps 1.1–3.1: in characteristic p the stated point sets are subgroups over every k-algebra. The multiplicative coordinate is a unit because tᵖ=1, so its closed immersion into Gm is indeed the Laurent quotient. The substitution t=1+x identifies the underlying schemes, but not their comultiplications; the additional tensor product term is nonzero. Both coordinate rings have dimension p, retain a nonzero nilpotent, and have the stated singleton groups over k.

For a homomorphism αp→Gm, the image g of t is a unit with constant term one. The monomials xⁱyʲ with 0≤i,j<p form a basis of the tensor quotient, licensing coefficient comparison. For 1≤r<p, the coefficient comparison gives r cᵣ=cᵣ₋₁c₁ and hence cᵣ=c₁ʳ/r!. The xᵖ⁻¹y coefficient is zero on the left and c₁ᵖ/(p−1)! on the right. Since k is a field, c₁=0 and g=1. At p=2 this last comparison is already the xy comparison, so the proof covers the smallest characteristic.

An isomorphism αp→μp followed by μp→Gm would pull the nonzero class t−1 back to a nonzero class, contradicting g=1. This excludes every isomorphism, not just the displayed coordinate translation. The witness disproves both determination statements in the refuted claim. Algebraic closedness is a permitted specialization; the proof actually needs only a field of characteristic p. AC is carried through the subgroup criterion as recorded.

### Proof contracts

All three proof contracts were checked against the current Facts, numbered derivations, supplier sections, and boundary cases. They preserve the relevant domains and quantifiers, both directions of the subgroup equivalence, arbitrary-algebra testing, n≥1, p≥2, and the inherited AC assumptions. No unmet prerequisite or material contract defect was found. Their status labels were not treated as mathematical verdicts.

## Page verdicts

| Page ID | Reader verdict | Evidence |
| --- | --- | --- |
| `group-schemes-of-finite-type-over-a-field` | No defect found | Its finite-type convention, test-scheme description, nonreduced allowance, subgroup criterion, and rational-point caveat agree with the three assigned A-items. Placement follows supplier order. |
| `group-schemes-of-finite-type-over-a-field-examples` | No defect found | Its coordinate-map verification summary and characteristic-p counterexample agree with the two assigned B-items; the coefficient argument proves nonisomorphism. |

## Edits, validation, and limitations

Edits: none. Uneditable defects: none. Blockers: none. Reflow, precheck, contract updates, and removal of stale judge records were unnecessary because no content was repaired.

The following read-only layout check was run once after the review:

```text
node tools/proof-layout.mjs items/def-group-scheme-over-a-field.md items/def-morphism-and-closed-subgroup-scheme.md items/lem-closed-subgroup-scheme-valued-point-criterion.md items/ex-additive-multiplicative-and-general-linear-group-schemes.md items/cex-alpha-p-mu-p-rational-points-do-not-detect-scheme.md
proof-layout: 5 items, 9 steps, 0 defects
exit code: 0
```

This verifies layout, not mathematics. No judge or certification tool was run. Coverage is the five assigned items, both assigned pages, all eleven direct published suppliers, and the three additional suppliers listed above. It is not a recursive audit of every published ancestor or of the prerequisite pages themselves.

Reviewed raw SHA-256 hashes, recorded at handoff:

```text
592060d24568a8523fd415496f8717e52e3d5b3603e1a7a5f48c9b4b9c73a0d5  def-group-scheme-over-a-field
bf2007251a4194f0734381f5911413ff27ea18d50cbbc99c1779fb97e6cdb761  def-morphism-and-closed-subgroup-scheme
34b5abbc31f7b8ba3d43823b85cc462911ffe35e43a5358fd99c70b4dd1a1e37  lem-closed-subgroup-scheme-valued-point-criterion
74cad200f4f419de2a89f7d8d9dc2e17fc33479fe3450925b34fc3984a666936  ex-additive-multiplicative-and-general-linear-group-schemes
b08c54a71b0ab87954e96a0ea176b3f33d25046445bbc03542fa85553b811d82  cex-alpha-p-mu-p-rational-points-do-not-detect-scheme
c7dbc1a85e9d1afb1dd729d103932bd07127fac74b4edeef1b80777b011d852f  group-schemes-of-finite-type-over-a-field
c5d17e74f27347e5661c51a69e359f7582773305d7fa771601890d974c7e2a0a  group-schemes-of-finite-type-over-a-field-examples
```

Next action belongs to the engine and Step 5b lead; no reader repair is pending.
