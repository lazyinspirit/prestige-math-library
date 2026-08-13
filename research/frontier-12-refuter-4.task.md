## refuter-4 — batch 1 — localisation, the field of fractions, and splitting fields

You are **read-only**. You cannot write files, and you never propose an edit
directly into content — you report evidence and Alpha adjudicates it from disk.

### Your assignment

| order | kind | page | items |
|---|---|---|---|
| 53.2 | A | `the-field-of-fractions-and-localisation` | 22 |
| 53.4 | B | `the-field-of-fractions-and-localisation-examples` | 8 |
| 56 | A | `splitting-fields` | 18 |
| 57 | B | `splitting-fields-examples` | 8 |

**56 items.** Every id below is a file at `items/<id>.md`.

The batch's own record — what the author promised — is the matching
`research/frontier-12-batch-<i>.notes.md` and
`research/frontier-12-batch-<i>.proof-contracts.json`. The merged contract is
`research/frontier-12-proof-contracts.json`.

### Where the exposure is

This batch carries a load-bearing obligation to **published** content. Two
published items assume "the field of fractions of R[t]", and at step 9 they get
wired to this page. So `def-field-of-fractions`,
`thm-field-of-fractions-is-a-field-and-the-domain-embeds`,
`thm-universal-property-of-the-field-of-fractions` and
`cor-rational-function-field-as-a-fraction-field` must genuinely deliver what
those published items assume. Check them hardest.

Concentrate on:

- The localisation construction: `def-multiplicative-subset-and-localisation`,
  `thm-localisation-equivalence-and-ring-laws`,
  `prop-localisation-zero-equality-and-kernel-criteria`. **Well-definedness is the
  whole game here.** The relation `(a,s) ~ (b,t)` iff `u(at - bs) = 0` for some
  `u` in `S` needs the auxiliary `u` for transitivity when `R` has zero divisors;
  check transitivity is actually proved and not assumed, and that the ring
  operations are checked well-defined on classes. Check whether `0` in `S` is
  permitted and what happens then.
- `thm-universal-property-of-the-field-of-fractions` — check **uniqueness** of
  the induced map as well as existence, and that the injectivity hypothesis on
  the target is stated where needed.
- `thm-ideal-correspondence-for-localisation`. Alpha's step-3 review found its
  cited Stacks row (Lemma 10.9.16) gives only the **ideal** statement, while the
  item also claims a **prime-ideal** correspondence proved locally. Verify the
  prime clause is genuinely proved on the page, and that the `[F#]` fact citing
  Stacks does not claim the prime clause.
- The normality trio added late: `prop-normality-descends-to-intermediate-fields`,
  `prop-nonempty-intersections-of-normal-subextensions-are-normal`,
  `thm-normality-generation-criterion`. These were added under fix pressure and
  never got a full design pass. Check the minimal-polynomial divisibility
  argument, the UFD comparison of complete factorisations in a common ambient
  `M[x]`, the **nonempty** hypothesis on the intersection lemma, and the
  finite-support reduction inside the generation criterion (the union of `F(T)`
  over finite `T` being a subfield is the step that can fail if not argued).
- `thm-factorial-coordinate-bound-for-a-splitting-field`. This page has **no
  extension degree as a vector-space dimension** — linear algebra begins 16 pages
  later — so the bound is deliberately stated as a spanning bound over at most
  `n!` root monomials. That deliberate weakening is not a finding. A proof step
  that silently uses a dimension **is**.
- Kronecker's construction and the uniqueness of splitting fields: check the
  isomorphism-extension induction and that the induction is on a quantity that
  actually decreases.

### Item ids


**`the-field-of-fractions-and-localisation`**

- `def-multiplicative-subset-and-localisation`
- `thm-localisation-equivalence-and-ring-laws`
- `prop-localisation-zero-equality-and-kernel-criteria`
- `thm-universal-property-of-localisation`
- `cor-localisation-is-unique-up-to-unique-isomorphism`
- `prop-units-in-a-localisation`
- `def-principal-localisation`
- `prop-iterated-localisation`
- `def-field-of-fractions`
- `thm-field-of-fractions-is-a-field-and-the-domain-embeds`
- `thm-universal-property-of-the-field-of-fractions`
- `cor-fields-of-fractions-are-unique-over-the-domain`
- `cor-rational-function-field-as-a-fraction-field`
- `def-local-ring`
- `thm-local-ring-unit-characterisations`
- `def-localisation-at-a-prime-ideal`
- `thm-localisation-at-a-prime-is-local`
- `cor-every-local-ring-is-its-localisation-at-its-maximal-ideal`
- `cor-local-rings-have-only-trivial-idempotents`
- `thm-ideal-correspondence-for-localisation`
- `thm-localisation-commutes-with-quotients`
- `cor-residue-field-of-a-localisation-at-a-prime`

**`the-field-of-fractions-and-localisation-examples`**

- `ex-fraction-field-of-the-integers-is-the-rationals`
- `ex-inverting-six-in-the-integers`
- `ex-the-local-ring-z-at-p-and-its-residue-field`
- `ex-the-local-ring-of-polynomials-at-x`
- `cex-localising-at-a-set-containing-zero-gives-the-zero-ring`
- `cex-nonzero-elements-of-a-ring-need-not-form-a-multiplicative-set`
- `cex-localisation-map-can-kill-a-nonzero-element`
- `cex-total-quotient-ring-of-a-nondomain-need-not-be-a-field`

**`splitting-fields`**

- `def-polynomials-that-split-and-splitting-fields`
- `lem-adjoining-one-root-reduces-the-unsplit-degree`
- `thm-splitting-fields-exist-for-nonzero-polynomials`
- `cor-splitting-fields-exist-for-finite-families`
- `cor-splitting-field-of-a-product-is-the-composite-of-splitting-fields`
- `lem-polynomials-and-roots-transport-along-field-isomorphisms`
- `lem-an-isomorphism-extends-across-a-simple-root-adjunction`
- `thm-isomorphisms-extend-to-splitting-fields`
- `cor-splitting-fields-are-unique-up-to-base-isomorphism`
- `thm-factorial-coordinate-bound-for-a-splitting-field`
- `prop-splitting-field-of-x-n-minus-a`
- `prop-endomorphisms-of-a-splitting-field-permute-its-roots`
- `def-normal-algebraic-extension`
- `prop-normality-descends-to-intermediate-fields`
- `prop-nonempty-intersections-of-normal-subextensions-are-normal`
- `prop-algebraic-splitting-extensions-are-normal`
- `thm-normality-generation-criterion`
- `prop-finitely-generated-normal-extensions-are-splitting-fields`

**`splitting-fields-examples`**

- `ex-base-field-is-splitting-field-of-empty-family`
- `ex-splitting-field-of-x-squared-minus-two`
- `ex-splitting-field-of-x-cubed-minus-two`
- `ex-splitting-field-of-x-four-plus-two-x-squared-minus-eight`
- `ex-splitting-field-of-two-quadratics`
- `ex-repeated-root-polynomial-over-f-two`
- `cex-a-root-field-need-not-be-a-splitting-field`
- `fs-isomorphism-between-splitting-fields-is-unique`
