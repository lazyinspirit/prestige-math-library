## Reader 7 — audit batch 1 (56 items)

You did **not** author this batch. That separation is the point of your role.

| order | kind | page | items |
|---|---|---|---|
| 53.2 | A | `the-field-of-fractions-and-localisation` | 22 |
| 53.4 | B | `the-field-of-fractions-and-localisation-examples` | 8 |
| 56 | A | `splitting-fields` | 18 |
| 57 | B | `splitting-fields-examples` | 8 |

Every item id is listed in `research/plan-spec.json` under these pages, and each
one is a file at `items/<id>.md`. The batch's own record — what its author
promised — is `research/frontier-12-batch-1.notes.md` and
`research/frontier-12-batch-1.proof-contracts.json`.

### Write your findings to

`research/frontier-12-reader-7.findings.md`

### You are READ-ONLY on content

Do not edit any file under `items/` or `library/`. Alpha adjudicates every
finding from disk and applies any repair. Your job is evidence, not a verdict.

### Priorities for this batch

Read every item, but spend your attention where the exposure is. 56 items is
a lot; a shallow pass over all of them is worth less than a real pass over the
proof-bearing ones plus a check of every citation.

Specific things known to be live in this run:

- **Hypotheses.** `char != 2` for polarisation and orthogonal diagonalisation;
  ordered fields for Sylvester's inertia; star-shaped rather than merely
  connected for the converse of closedness; smallness conditions in the
  category-theory limits; pairwise versus mutual independence in probability;
  nonnegativity for Markov; the split-characteristic-polynomial hypothesis where
  the source assumed an algebraically closed field.
- **Citation fidelity.** A `[F#]`/`[A#]`/`[L#]` fact must state the cited
  proposition itself. This run already caught one at scaffold stage — a quoted
  `|sin x| <= |x|` where the source states `sin(x) <= x` for `x >= 0`. Open the
  cited item on disk and compare; do not trust the restatement.
- **Green's theorem** (if batch 4) is deliberately scoped to elementary regions
  and finite unions. Complaining it does not cover arbitrary Jordan domains is
  NOT a finding. A proof step that quietly assumes a Jordan domain IS one.
- **Titles.** A title or Statement claiming more than the proof delivers is
  fatal, and the step-7 judges cannot see a false title.

Item ids, for your checklist:

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
- `ex-fraction-field-of-the-integers-is-the-rationals`
- `ex-inverting-six-in-the-integers`
- `ex-the-local-ring-z-at-p-and-its-residue-field`
- `ex-the-local-ring-of-polynomials-at-x`
- `cex-localising-at-a-set-containing-zero-gives-the-zero-ring`
- `cex-nonzero-elements-of-a-ring-need-not-form-a-multiplicative-set`
- `cex-localisation-map-can-kill-a-nonzero-element`
- `cex-total-quotient-ring-of-a-nondomain-need-not-be-a-field`
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
- `ex-base-field-is-splitting-field-of-empty-family`
- `ex-splitting-field-of-x-squared-minus-two`
- `ex-splitting-field-of-x-cubed-minus-two`
- `ex-splitting-field-of-x-four-plus-two-x-squared-minus-eight`
- `ex-splitting-field-of-two-quadratics`
- `ex-repeated-root-polynomial-over-f-two`
- `cex-a-root-field-need-not-be-a-splitting-field`
- `fs-isomorphism-between-splitting-fields-is-unique`
