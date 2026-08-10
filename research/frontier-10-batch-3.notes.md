# frontier-10 batch 3 — Beta scaffold notes

**Owner:** Beta-frontier-10-3  
**Step:** 3 Alpha breadth-and-depth repair complete  
**Writable scope observed:** only the four `research/frontier-10-batch-3.*` artifacts

## Step-3 repair — Alpha findings B4 and F1

For B4, the A-page scaffold now includes
`cor-finite-subgroups-of-units-in-a-domain-are-cyclic` immediately after the
domain root bound. Donaldson's Corollary 23.15 states the integral-domain
version. Its proof is closed against the earlier batch-2 invariant-factor
interfaces: `def-exponent-of-a-finite-group`,
`cor-order-and-exponent-from-invariant-factors`, and
`cor-finite-abelian-group-cyclic-iff-one-invariant-factor`. Thus the addition
creates a legal backward page edge from order 52 to
`the-structure-of-finite-abelian-groups` at order 40. Both Donaldson harvest
rows formerly marked `out-of-scope` now map to this item as `included`.

For F1, Alpha correctly found that the original notes' claim “Forward
references kept: none” was false against the then-current disk: four items cite
`def-finite-sum-in-a-commutative-monoid` or
`lem-finite-sum-reindexing-and-fubini`, then homed at order 203. The owner has
since approved re-homing both unchanged ids to
`rings-subrings-and-integral-domains` at order 46, recorded in
`research/frontier-10-rehomed.json`. Under that authoritative overlay the four
citations are legal backward edges. They remain unchanged; no duplicate finite-
sum interface is minted.

## Inventory and proposed page summaries

- `polynomial-rings-and-roots` (A, order 52): **44 items** — 8 definitions, 5 lemmas, 17 theorems, 3 propositions, 10 corollaries, and 1 remark.
- `polynomial-rings-and-roots-examples` (B, order 53): **14 items** — 8 examples and 6 counterexamples.
- Total: **58 items**.

The manifest is the count authority; the prose category breakdown above is descriptive and must be re-counted mechanically if the list changes.

Proposed A-page summary, paragraph 1: This page constructs the formal polynomial ring over a commutative ring from finitely supported coefficient sequences and convolution, proves the ring and degree laws, records the equivalent trimmed-list presentation, and establishes evaluation through the universal property. It then treats finite multivariate polynomial rings by iteration, proves monic division over a commutative ring and the full division algorithm over a field, and derives the factor theorem and the root bound over an integral domain.

Proposed A-page summary, paragraph 2: The second half connects the construction to the preceding Euclidean-domain and finite-abelian-group material: `F[x]` is Euclidean, hence a PID, and a direct local argument proves that it is a UFD without assuming an unpublished general PID-to-UFD theorem. The root bound and invariant-factor exponent formula show that finite subgroups of a domain's unit group are cyclic. Polynomial gcds, Bézout, irreducible quotients, formal derivatives, separability, Gauss's lemma, rational roots, reduction modulo a prime, and Eisenstein's criterion complete the development.

Proposed B-page summary, paragraph 1: The companion page computes convolution, long division, a polynomial gcd and Bézout coefficients, then tests the domain and division hypotheses with nonconstant units over `Z/4`, failed division in `Z[x]`, and quadratics with four roots over `Z/6` and `Z/8`. It also distinguishes a formal polynomial from its induced function using `x^p-x` over `F_p`.

Proposed B-page summary, paragraph 2: The remaining examples compare irreducibility tests: roots for degrees two and three, rational roots, reduction modulo two, Eisenstein directly and after translation, and a reducible quartic without roots. A characteristic-two repeated-root calculation exercises the derivative criterion, and the ideal `(x,y)` shows that the multivariate ring need not remain principal.

## Split adjudication

No split is proposed. The A page has 44 items, below the owner's hard 60-item threshold. The natural internal cut would be immediately before `def-formal-derivative-of-a-polynomial`, but making that cut now would separate the root theory from its repeated-root and separability completion without a size or dependency reason.

## Canonical-coverage harvest

The machine receipt is `research/frontier-10-batch-3.coverage.json`. It records **118 headings** from five independent treatments, including the page-level canonical rows:

- 92 `included` headings, mapping to 47 distinct scaffolded items;
- 14 `inline` headings, mapping to 9 proof-bearing items;
- 5 `already-published` headings, mapping to 3 published definitions/results;
- 5 `deferred` and 2 `out-of-scope` headings.

The other scaffolded items are proof-decomposition machinery, direct corollaries, convention dictionaries, or checkable hypothesis-testing examples rather than unharvested canonical claims.

The declines most likely to be challenged are:

1. Donaldson's algebraic/transcendental-element discussion is deferred specifically to `field-extensions-and-the-complex-numbers`; this page builds evaluation and irreducible quotient fields needed there.
2. Donaldson's real linear/quadratic factorisation classification is deferred to `field-extensions-and-the-complex-numbers` because its proof uses the Fundamental Theorem of Algebra and conjugate roots, not a missing local polynomial lemma.
3. Donaldson's prime cyclotomic-polynomial example is deferred to `field-extensions-and-the-complex-numbers`, where roots of unity and cyclotomic extensions have their mathematical home; translation and Eisenstein are both built here.
4. Donaldson's and Keith Conrad's examples of polynomials irreducible over `Q` but reducible modulo every prime are deferred because the sources themselves route the all-primes proof through Galois-theoretic machinery.
5. Donaldson's rational-function field paragraph is out of scope because fraction-field/localisation construction is independent of the root and irreducibility spine and no planned item consumes it.
6. Judson's historical note is out of scope because it is narrative rather than a mathematical definition, result, proof or example.

Donaldson's heading “Finite Subgroups of Units” and Corollary 23.15 are no
longer declines. Alpha B4 correctly observed that this run itself supplies the
needed finite-abelian-group classification at order 40, so both harvest rows
are included through `cor-finite-subgroups-of-units-in-a-domain-are-cyclic`.

No result is declined because a definition or elementary lemma is missing. The machinery needed for the assigned topic is scaffolded.

## Source ledger and licensing

### Thomas W. Judson, *Abstract Algebra: Theory and Applications*, Chapter 17

- URL: <https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/17%3A_Polynomials>
- Exact range: §§17.1–17.3 from Polynomial Rings through Ideals in `F[x]`, with the numbered results and examples listed in the coverage receipt; end exercises excluded.
- Role: textbook primary for the construction, degree laws, evaluation, division, factor/root theorems, gcd/Bézout, Gauss/Eisenstein and the ideal structure of `F[x]`.
- Licensing: the open text carries a free-document/open-text licence. Step 5 should paraphrase and cite the chapter URL; no extended source prose is needed.

### Neil Donaldson, *Math 120B Notes*, §§22–23

- URL: <https://www.math.uci.edu/~ndonalds/math120b/2poly.pdf>
- Exact range: §§22–23 in full, pp. 1–16.
- Role: independent full course-note treatment for formal polynomial objects, coefficient-ring caveats, domain inheritance, roots in extensions, field division, factorisation, UFD, irreducibility tests, general monic division, counterexamples, and the finite-subgroup-of-units application of the domain root bound.
- Licensing: no explicit reuse licence was found in the inspected PDF. Treat it as citation-only; paraphrase all statements and proofs.

### James McKernan, MIT 18.703, Lecture 21

- URL checked: <https://opencw.aprende.org/courses/mathematics/18-703-modern-algebra-spring-2013/lecture-notes/MIT18_703S13_pra_l_21.pdf>
- Exact range: Lemmas 21.1–21.3 and Definition 21.4, pp. 1–2.
- Role: independent check for units, the constant inclusion, the universal property, evaluation and roots.
- Licensing: the file is an MIT OpenCourseWare lecture-note mirror, but the mirror's redistribution terms were not independently verified. Use citation-only and no copied prose. The old direct MIT path returned 404 during this session; the checked mirror URL above resolved and exposed the note.

### Keith Conrad, *Irreducibility Tests in Q[T]*

- URL: <https://kconrad.math.uconn.edu/blurbs/ringtheory/irredtestsoverQ.pdf>
- Exact range: §§1–4 and Appendix A in full, pp. 1–4 and 6–8; §§5–7 excluded.
- Role: university-hosted treatment of Gauss's lemma, reduction modulo a prime and Eisenstein in both monic and primitive/nonmonic forms.
- Licensing: no explicit reuse licence was found in the inspected PDF. Treat it as citation-only.

### Brian Conrad, *Differential Criterion and Primitivity*

- URL: <https://math.stanford.edu/~conrad/210BPage/handouts/sepfield.pdf>
- Exact range: §1, Derivatives, in full, pp. 1–2; §2 excluded.
- Role: university-hosted source for gcd stability under field extension, the derivative criterion for separability, and the irreducible-polynomial corollary.
- Licensing: no explicit reuse licence was found in the inspected PDF. Treat it as citation-only.

No encyclopedia entry is used as primary backing, and no external fallback is planned.

## Convention disagreements and reconciliations

1. **Degree of zero.** Judson and Donaldson use (deg 0=-infty). The already published `def-real-polynomial-degree-leading-coefficient-and-monic` and `def-complex-polynomial-degree-and-monic` say that the zero polynomial has no degree or leading coefficient. The scaffold follows the published library convention and writes every theorem as “(r=0) or (deg r<deg g)” rather than performing arithmetic with (-infty).
2. **Coefficient sequences versus lists.** The new canonical construction uses finitely supported functions on `N`; the published real and complex special cases use trimmed finite coefficient lists. `prop-polynomial-coefficient-sequences-and-trimmed-lists-agree` proves the object, operation and degree dictionary, and `thm-universal-property-of-a-polynomial-ring` checks that evaluation also agrees, so the two presentations are not silently identified.
3. **Polynomial versus function.** Donaldson's “golden rule” and the existing real/complex definitions all treat the formal coefficient object as distinct from its induced function. `rem-polynomials-are-not-polynomial-functions` and the finite-field counterexample make this explicit.
4. **Unital homomorphisms.** The library requires ring homomorphisms to preserve (1). The universal property and every evaluation map are stated in that convention.
5. **Roots in extensions.** Evaluation is defined relative to a coefficient homomorphism `R -> S`, rather than by silently treating `R` as a literal subset of `S`. The separability section uses the published subfield convention and explicitly checks the base-field embedding into `F[x]/(p)`.
6. **Polynomial gcd at the double-zero input.** Brian Conrad recommends avoiding `gcd(0,0)`; `def-monic-greatest-common-divisor-of-polynomials` leaves it undefined. This intentionally differs from the published integer convention `gcd(0,0)=0`.
7. **Irreducible versus prime.** The published domain definition makes both notions apply only to nonzero nonunits. The page proves the missing converse “irreducible implies prime” specifically in (F[x]) before using it for UFD uniqueness.
8. **Eisenstein scope.** The criterion is stated for primitive integer polynomials with a surviving leading coefficient, not as a criterion internal to a finite field. Reduction to `(Z/p)[x]` is a proof device.
9. **Notation.** All numerals inside coefficient rings are ring numerals/multiples. No canonical embedding is written applied to a natural number.

## Exact relationship to the published Euclidean/PID/UFD page

The assigned prerequisite is published but thin. I opened its page and every listed item:

- `def-divisibility-and-associates-in-a-domain`
- `def-irreducible-and-prime-elements-in-a-domain`
- `def-euclidean-domain`
- `def-principal-ideal-domain`
- `def-unique-factorisation-domain`
- `thm-euclidean-domain-is-a-pid`
- `lem-prime-implies-irreducible-in-a-domain`

The usable published implication is exactly Euclidean domain => PID. There is no published PID => UFD theorem, no theorem that irreducibles are prime in a PID, and no gcd/Bézout theorem on that page. The scaffold therefore:

1. proves the polynomial division algorithm;
2. specializes it to a Euclidean function on (F[x]);
3. cites `thm-euclidean-domain-is-a-pid`;
4. constructs monic gcds and proves Bézout locally;
5. proves irreducible => prime locally;
6. proves factorisation existence by degree induction; and
7. proves UFD uniqueness directly.

This is a local completion, not a claim that the prerequisite already proves the missing general implications. No published item was found unambiguously false.

## Proof decomposition and corollary pass

The long-proof decomposition pass was performed separately for this pair.

- The convolution-ring proof is preceded by `lem-polynomial-operations-preserve-finite-support`.
- Division is separated into monic division over a commutative ring and the field normalization theorem.
- The Euclidean/PID/UFD chain is decomposed into Euclidean structure, PID, polynomial gcd, Bézout, irreducible-implies-prime, factorisation existence and UFD uniqueness.
- The irreducible-quotient theorem is placed before separability so (F[x]/(p)) is available as the extension-field witness.
- Repeated roots are decomposed into formal derivative laws, the root/derivative criterion, gcd stability under extension, the separability criterion and the irreducible corollary.
- The integer irreducibility chain is decomposed into content, Gauss content, Gauss's lemma, rational roots, reduction modulo a prime and Eisenstein.
- Because the published integer gcd accepts a pair rather than a coefficient list, finite content is defined recursively and `lem-content-divisibility-characterisation` supplies the universal common-divisor property before Gauss's content lemma uses it.

The corollary pass added the domain and polynomial-unit results, multivariate domain inheritance, (F[x]) Euclidean and PID, finite subgroups of domain units being cyclic, infinite-domain determination by values, the irreducible separability criterion, and the (x^n-p) family. The finite-subgroup result is Donaldson's Corollary 23.15 and now uses batch 2's earlier invariant-factor machinery. The value-determination corollary is the one permitted generated statement: it is a direct leaf consequence of the root bound and is not a dependency of any other planned item. All other added corollaries are explicitly represented in the harvested sources.

Boundary obligations for Step 5:

- zero polynomial has no degree; every degree assertion must split off zero;
- monic division covers zero dividend, constant monic divisor and remainder zero;
- field division covers every nonzero divisor, including constants;
- polynomial gcd excludes `(0,0)` and normalizes every other gcd to monic;
- root bound starts at degree zero and counts distinct roots only;
- the finite-subgroup corollary treats the trivial group separately, uses a positive exponent, proves that (T^e-1) is nonzero of degree (e), and applies the one-invariant-factor criterion only in the nontrivial case;
- multivariate induction includes zero indeterminates;
- rational-root theorem treats zero constant coefficient and signs/positive denominator;
- finite content uses the unique trimmed list, begins its recursive gcd at zero, and proves positivity only for nonzero polynomials;
- derivative formulas include constants and positive characteristic;
- separability includes nonzero constants and checks both directions of the biconditional;
- Eisenstein and (x^n-p) include degree one and do not admit (n=0);
- every residue-ring counterexample verifies that the displayed residue classes are distinct.

## Component provenance and source/edit-history rationale

Expected Step-5 provenance is below. “Adapted” means the source claim is kept but its conventions, generality or proof decomposition are changed to match this library. No source prose is to be copied.

| item | statement | proof | rationale |
|---|---|---|---|
| `def-polynomial-ring-over-a-commutative-ring` | literature-derived | not-applicable | Judson 17.1 and Donaldson 22.1; formal-sum presentation made set-theoretic as finite support. |
| `lem-polynomial-operations-preserve-finite-support` | literature-derived | ai-altered | Donaldson's closure obligation isolated as a proof-decomposition lemma. |
| `thm-polynomial-ring-is-a-commutative-ring` | literature-derived | ai-altered | Judson 17.3 / Donaldson 22.2; coefficient proof adapted to the library's finite sums. |
| `def-polynomial-degree-leading-coefficient-and-monic` | ai-altered | not-applicable | Source definitions with the published undefined-degree convention for zero. |
| `prop-polynomial-coefficient-sequences-and-trimmed-lists-agree` | ai-altered | ai-altered | Convention dictionary between source formal sums and published trimmed lists. |
| `prop-polynomial-degree-laws-over-a-commutative-ring` | literature-derived | ai-altered | Donaldson 22.3, split from the domain equality. |
| `thm-polynomial-degree-of-a-product-over-a-domain` | literature-derived | literature-derived | Judson 17.4 / Donaldson 22.3. |
| `cor-polynomial-ring-over-a-domain-is-a-domain` | literature-derived | literature-derived | Judson 17.4 / Donaldson 22.3. |
| `cor-units-in-a-polynomial-ring-over-a-domain` | literature-derived | literature-derived | McKernan 21.1. |
| `def-polynomial-evaluation-and-root` | ai-altered | not-applicable | Donaldson 22.4 and McKernan 21.4, generalized to a coefficient homomorphism. |
| `thm-universal-property-of-a-polynomial-ring` | literature-derived | ai-altered | McKernan 21.3; multiplication checked by finite convolution. |
| `def-multivariate-polynomial-ring-by-iteration` | literature-derived | not-applicable | Judson 17.1 / Donaldson “More general constructions”. |
| `cor-multivariate-polynomial-ring-over-a-domain-is-a-domain` | literature-derived | ai-altered | Donaldson §22, proved by explicit induction. |
| `thm-monic-polynomial-division` | literature-derived | ai-altered | Donaldson 23.14; existence over commutative rings and conditional uniqueness separated. |
| `cor-factor-theorem-over-a-commutative-ring` | literature-derived | literature-derived | Donaldson 23.14 and Judson 17.8, at commutative-ring generality. |
| `thm-polynomial-division-algorithm-over-a-field` | literature-derived | literature-derived | Judson 17.6 / Donaldson 23.2. |
| `cor-polynomial-ring-over-a-field-is-euclidean` | literature-derived | ai-altered | Donaldson's Euclidean-algorithm section, matched to the published Euclidean definition. |
| `cor-polynomial-ring-over-a-field-is-a-pid` | literature-derived | ai-altered | Judson 17.20 plus the published Euclidean-to-PID theorem. |
| `def-monic-greatest-common-divisor-of-polynomials` | ai-altered | not-applicable | Judson/Donaldson/Conrad; ideal-generator definition with ((0,0)) excluded. |
| `thm-bezout-identity-for-polynomials` | literature-derived | literature-derived | Judson 17.10 / Donaldson Euclidean-algorithm section. |
| `thm-irreducible-polynomials-over-a-field-are-prime` | literature-derived | literature-derived | Donaldson 23.10(2), proved through Bézout. |
| `lem-polynomial-factorisation-into-irreducibles` | literature-derived | literature-derived | Donaldson 23.7, isolated for UFD existence. |
| `thm-polynomial-ring-over-a-field-is-a-ufd` | literature-derived | literature-derived | Donaldson 23.11. |
| `thm-polynomial-quotient-is-a-field-iff-irreducible` | literature-derived | ai-altered | Judson 17.22 plus the published field-quotient/maximal-ideal equivalence. |
| `thm-root-bound-for-polynomials-over-a-domain` | literature-derived | ai-altered | Judson 17.9 / Donaldson 23.14, stated at domain generality. |
| `cor-finite-subgroups-of-units-in-a-domain-are-cyclic` | literature-derived | ai-altered | Donaldson Corollary 23.15; proof adapted to batch 2's invariant-factor exponent and cyclicity interfaces, with the trivial group isolated. |
| `cor-polynomials-over-an-infinite-domain-are-determined-by-values` | ai-generated | ai-generated | Direct leaf corollary of the root bound; may not become a dependency. |
| `thm-quadratic-and-cubic-irreducibility-test` | literature-derived | literature-derived | Donaldson 23.8. |
| `def-formal-derivative-of-a-polynomial` | literature-derived | not-applicable | Standard formal derivative used in Brian Conrad §1. |
| `prop-formal-derivative-laws` | literature-derived | ai-altered | Leibniz and power rules used explicitly in Brian Conrad 1.2. |
| `def-repeated-root-and-separable-polynomial` | ai-altered | not-applicable | Brian Conrad's splitting-field convention reformulated equivalently over all extensions. |
| `thm-repeated-root-derivative-criterion` | literature-derived | literature-derived | The factor/Leibniz argument inside Brian Conrad 1.2. |
| `lem-polynomial-gcd-is-stable-under-field-extension` | literature-derived | literature-derived | Brian Conrad 1.1. |
| `thm-polynomial-is-separable-iff-coprime-to-its-derivative` | literature-derived | ai-altered | Brian Conrad 1.2, proved without presupposing splitting fields. |
| `cor-irreducible-polynomial-is-separable-iff-derivative-nonzero` | literature-derived | literature-derived | Brian Conrad's application after 1.2. |
| `def-content-and-primitive-integer-polynomial` | literature-derived | not-applicable | Keith Conrad A.1. |
| `lem-content-divisibility-characterisation` | ai-altered | ai-altered | Required dictionary from the published binary integer gcd to the finite coefficient gcd used by the source definition of content. |
| `lem-gauss-content-lemma` | literature-derived | ai-altered | Judson 17.14 / Keith Conrad's Gauss proof, with content multiplicativity explicit. |
| `thm-gauss-lemma-for-integer-polynomials` | literature-derived | literature-derived | Judson 17.14 and Keith Conrad A.2. |
| `thm-rational-root-theorem` | literature-derived | ai-altered | Judson 17.15 / Donaldson 23.8(3), including nonmonic form. |
| `thm-reduction-mod-prime-irreducibility-test` | literature-derived | literature-derived | Donaldson 23.13(1) and Keith Conrad A.3. |
| `thm-eisenstein-irreducibility-criterion` | literature-derived | literature-derived | Judson 17.17, Donaldson 23.13(2), Keith Conrad A.4. |
| `cor-xn-minus-p-is-irreducible-over-q` | literature-derived | literature-derived | Keith Conrad 1.6 / Donaldson's examples. |
| `rem-polynomials-are-not-polynomial-functions` | literature-derived | not-applicable | Donaldson's golden rule and finite-ring examples. |
| `ex-polynomial-arithmetic-by-convolution` | literature-derived | ai-altered | Judson 17.1 / Donaldson §22 calculation, with a fresh finite check. |
| `ex-polynomial-long-division-and-gcd` | literature-derived | ai-altered | Judson 17.7 and Donaldson long-division examples, extended through Bézout. |
| `cex-nonconstant-units-and-degree-drop-with-zero-divisors` | ai-altered | ai-generated | Checkable ((1+2x)^2=1) witness adapted from the sources' zero-divisor examples. |
| `cex-polynomial-division-fails-for-a-nonunit-leading-coefficient` | literature-derived | literature-derived | Donaldson's example after 23.14. |
| `cex-quadratics-can-have-four-roots-over-composite-residue-rings` | ai-altered | ai-altered | Donaldson's `Z/6` witness plus the dispatched `Z/8` witness. |
| `cex-distinct-polynomials-can-induce-the-same-finite-field-function` | literature-derived | ai-altered | Dispatched canonical example, checked by published Fermat. |
| `ex-x-squared-minus-two-is-irreducible-over-q` | literature-derived | literature-derived | Judson 17.11 / Donaldson examples. |
| `ex-x-squared-plus-one-is-irreducible-over-r` | literature-derived | literature-derived | Judson 17.11; no complex factorisation asserted at this order. |
| `ex-reduction-mod-two-proves-a-cubic-irreducible` | literature-derived | literature-derived | Donaldson example after 23.13. |
| `ex-eisenstein-proves-a-family-irreducible` | literature-derived | literature-derived | Keith Conrad 1.6 / Donaldson example. |
| `ex-translation-makes-x-four-plus-one-eisenstein` | literature-derived | ai-altered | Donaldson's translated Eisenstein example with automorphism justified. |
| `cex-no-roots-does-not-imply-irreducible-in-degree-four` | literature-derived | literature-derived | Donaldson example after 23.8. |
| `ex-formal-derivative-detects-a-repeated-root-in-characteristic-two` | ai-altered | ai-generated | Direct finite-field witness exercising the source-backed derivative theorem. |
| `cex-the-ideal-x-y-in-a-bivariate-polynomial-ring-is-not-principal` | literature-derived | literature-derived | Judson 17.21. |

Items with AI-generated proof components are checkable witnesses or a direct leaf corollary. Step 5 must recompute each residue-ring product/root set and re-derive the infinite-domain corollary; none may become a dependency target. The checkable witnesses remain leaves. The value-determination corollary is also a leaf after the manifest change recorded here.

## Published dependency audit

Every dependency below was opened from `items/<id>.md`, confirmed `status: published`, and read for its exact Definition or Statement, hypotheses, quantifiers and direction.

### Source-checked against the harvested algebra treatments or the item's authoritative source route

`def-commutative-ring`, `def-euclidean-domain`, `def-field`, `def-generated-and-principal-ideals`, `def-irreducible-and-prime-elements-in-a-domain`, `def-prime-and-maximal-ideals`, `def-principal-ideal-domain`, `def-quotient-ring`, `def-ring-homomorphism`, `def-subfield`, `def-unique-factorisation-domain`, `def-zero-divisor-and-integral-domain`, `lem-ring-units-form-a-group`, `prop-canonical-quotient-ring-map`, `prop-integers-modulo-n-as-a-quotient-ring`, `thm-euclidean-domain-is-a-pid`, `thm-quotient-is-field-iff-ideal-maximal`, `thm-rat-field`, `thm-rat-ordered-field`, `thm-reals-ordered-field`, `thm-z-mod-p-is-a-field`.

### Established-from-knowledge after exact on-disk interface check

`cor-common-divisor-divides-gcd`, `def-common-divisor-and-gcd`, `def-coprime`, `def-finite-cardinality`, `def-finite-sum-in-a-commutative-monoid`, `def-generated-subgroup`, `def-int-abs`, `def-prime`, `def-subgroup`, `lem-coprime-divides-product`, `lem-divisor-bound`, `lem-finite-sum-reindexing-and-fubini`, `lem-int-abs-properties`, `lem-int-cancellation`, `lem-nat-discrete`, `lem-nat-embeds-int`, `lem-units-of-z`, `thm-fermats-little-theorem`, `thm-fundamental-theorem-of-arithmetic`, `thm-induction-principle`, `thm-int-comm-ring`, `thm-int-ordered-ring`, `thm-strong-induction`.

The new batch-2 dependencies are not published and therefore are not included
in the published-dependency lists above. I opened their order-40 scaffold and
proof contracts directly. `def-exponent-of-a-finite-group` fixes the trivial
group's exponent as one;
`cor-order-and-exponent-from-invariant-factors` gives
`|G|=n_1\cdots n_r` and `exp(G)=n_r` for a nonempty invariant-factor list; and
`cor-finite-abelian-group-cyclic-iff-one-invariant-factor` gives the exact
nontrivial cyclicity criterion used by the new proof. Their source route is
Elman's *Lectures on Abstract Algebra*, recorded in batch 2's own ledger.

The exact-interface pass rejected one initially contemplated dependency: `lem-finite-sum-laws` is stated only for real sequences, so it cannot license polynomial convolution over an arbitrary commutative ring. The manifest instead uses the genuinely general `lem-finite-sum-reindexing-and-fubini` and proves the remaining ring algebra inline. The pass also replaced an invalid planned use of integer Euclid's lemma in the rational-root theorem: a reduced numerator need not be prime, so the correct dependency is `lem-coprime-divides-product`.

No dependency has `provenance.statement: ai-generated`. The content argument first builds the finite-list gcd from the published binary gcd and then uses the verified existence clause of `thm-fundamental-theorem-of-arithmetic` to extract a prime divisor when the content is not 1. No external dependency fallback is planned.

## Published duplicate/specialisation seam

The following already-published items occur on pages after order 53 and therefore are not dependencies of this batch:

- `def-real-polynomial-degree-leading-coefficient-and-monic`
- `lem-real-polynomial-factor-at-a-root`
- `thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots`
- `def-complex-polynomial-degree-and-monic`

Their zero-degree convention agrees with this scaffold, but their formal object is a trimmed coefficient list. The new sequence/list dictionary is designed so Alpha or a later impact-repair run can add an agreement citation without changing either mathematical notion. Beta did not edit these published items.

## New-id and overlap audit

Before writing, I searched `items/`, `research/plan-spec.json`, and every current `research/frontier-10-batch-*.pages.json` for all proposed ids and for the mathematical phrases “polynomial ring”, “factor theorem”, “root bound”, “finite subgroup”, “unit group”, “Gauss lemma”, “Eisenstein”, “formal derivative”, “repeated root” and “separable”. No proposed id already existed, including the B4 addition `cor-finite-subgroups-of-units-in-a-domain-are-cyclic`.

The search did find the four later real/complex specialisations listed above. They were treated as a convention seam, not reused as dependencies or silently duplicated. The B4 addition consumes the three order-40 batch-2 interfaces named above; no other frontier-10 batch item is consumed.

## Applyable prose-scaffold recommendations

1. In `research/plan-algebra-track.md`, keep AA-11 as one A/B pair and replace any implication that the published prerequisite already supplies all PID/UFD machinery with the exact local chain recorded in the “Exact relationship” section above.
2. In `research/plan-algebra-track-expansion.md`, retain the formal-derivative and repeated-root amendment, but phrase the load-bearing criterion as the scaffolded pair `thm-repeated-root-derivative-criterion` and `thm-polynomial-is-separable-iff-coprime-to-its-derivative`; the latter constructs its own quotient-field witness.
3. In the AA-11 B-page prose, replace a sole `Z/8` root-bound witness with the combined `Z/6` and `Z/8` item so the harvested source's exact example and the owner's dispatched example are both retained.
4. Do not add the complex factorisation of `x^2+1` to the order-53 spine. The B item proves irreducibility over `R`; `field-extensions-and-the-complex-numbers` can cite it and supply the complex factorisation after its own complex-field interface exists.

These are recommendations only. Beta did not edit any prose scaffold or `research/plan-spec.json`.

## Forward references, cross-batch dependencies and blockers

- **Forward references kept:** none under the owner-approved re-homing overlay.
  Before that decision, the four finite-sum citations were forward references
  to order 203; Alpha F1 correctly caught the former false claim in these
  notes. `research/frontier-10-rehomed.json` moves both cited ids unchanged to
  order 46, below this page at order 52.
- **Cross-batch dependencies:** the A page now requires
  `the-structure-of-finite-abelian-groups` (batch 2, order 40). The new
  finite-subgroup corollary cites `def-exponent-of-a-finite-group`,
  `cor-order-and-exponent-from-invariant-factors`, and
  `cor-finite-abelian-group-cyclic-iff-one-invariant-factor`. This is a legal
  backward edge and is the only cross-batch page edge introduced by B4.
- **External fallbacks:** none.
- **Published falsehoods found:** none.
- **Split blocker:** none.
- **Gate-scope caveat:** Alpha B4 requires three not-yet-authored batch-2 item
  dependencies. Consequently the dispatch's isolated batch-3
  `content-policy --manifest-only` invocation cannot resolve them: that tool
  resolves scaffold-only ids from the manifests supplied on its command line,
  not from `requires` or an unspliced `plan-spec.json`. The dependency-closed
  batch-2-plus-batch-3 invocation and the full run-wide invocation are both
  green. Omitting the three ids to make the isolated form green would hide the
  required logical edge, while copying batch 2's rows into this manifest would
  violate batch ownership.

## Gate report

- `node tools/validate-plan.mjs research/plan-spec.json --rehomed research/frontier-10-rehomed.json`: exit 0. This checks the current unspliced spec and the owner-approved F1 re-homing; authoritative validation of the 44-item repaired page remains the orchestrator's step-4 splice duty.
- `node tools/coverage-checklist.mjs research/frontier-10-batch-3.coverage.json`: exit 0, with 118 harvested headings and no errors or warnings.
- The literal isolated command `node tools/content-policy.mjs research/frontier-10-batch-3.pages.json --manifest-only --rehomed research/frontier-10-rehomed.json`: exit 1, reporting exactly the three required scaffold-only batch-2 dependencies as `batch-dependency-missing`.
- The dependency-closed command supplying batch 2 and batch 3 together: exit 0, with 128 scoped items and no errors or warnings. The run-wide command supplying all nine frontier-10 manifests is also green, with 571 scoped items and no errors or warnings.
- JSON parsing and the proof-bearing scope check are green: 49 expected proof-bearing ids, 49 scope ids, 49 contracts, with no missing, extra or duplicate entry.
- `node tools/prosecheck.mjs research/frontier-10-batch-3.notes.md research/frontier-10-batch-3.pages.json --warnings`: exit 0 with no errors or positional contradictions. Its count warnings are the inventory and harvest counts this report is required to state.

## Confidence and unverified matters

Confidence is high in the item inventory, mathematical dependency closure and harvest fidelity for the named ranges. I checked all 118 coverage dispositions against the displayed source and canonical headings, re-opened all published dependency interfaces on disk, re-opened Donaldson's Corollary 23.15, and inspected the three consumed batch-2 interfaces and their proof contracts. I did not verify licensing beyond what the inspected source pages/PDFs exposed, so four sources are deliberately marked citation-only. I did not prove the planned items in final house format at step 3; the proof-contract file is the durable obligation map for that step-5 work. I did not modify the later published real/complex polynomial items, the prose scaffolds, `plan-spec.json`, any library page, or any other batch's artifacts.
