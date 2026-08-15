# frontier-13 batch 7 — scaffold and resolution notes

## Outcome

This singleton pair is scaffolded at the live orders 195/196 with 32 A-page items and 15 B-page items. The A page is below the hard 60-item split threshold, so **no split is proposed**. Both richness passes were performed: the long-proof decomposition pass added the four-space lemma, repeated-pole lemma, formal matrix geometric lemma, determinant-derivative lemma, prefix-automaton definition and trace seam; the corollary/example pass added minimal order, finite modification, bi-infinite reciprocity, both rational-closure laws, Cayley–Hamilton recurrences, trace/eigenvalue forms, fixed-factor avoidance, Fibonacci/Lucas models and sharp counterexamples.

There are no forward references, cross-batch dependencies or external fallbacks. Every load-bearing dependency is either earlier in this A page or published on a page in the declared `requires` closure. B-page items depend only on A-page or published A-page items; no item depends on an item homed on a B page.

## Proposed page summaries

### `linear-recurrences-and-rational-generating-functions`

Formal power series over a commutative ring, coefficient extraction with its linearity and extensionality, the unit criterion for a formal power series, and the formal derivative with its algebra are published. So are matrices over a commutative ring and their arithmetic, the determinant, Laplace cofactor expansion, minors, cofactors and the adjugate with the adjugate identity, the characteristic polynomial of a matrix and of an operator, the Cayley–Hamilton theorem, the spectral mapping theorem for polynomials, the trace as the sum of the eigenvalues, polynomial division over a field with Bézout's identity and unique factorisation, splitting fields, and the rational function field as a field of fractions.

A constant-coefficient linear recurrence and a rational generating function describe the same object: for a fixed denominator the initial-value, recurrence-sequence, numerator and rational-series spaces are linearly isomorphic, and no root is chosen. Reduced denominators give the minimal order, finite modification preserves eventual recurrence and rationality, rational series are closed under sums, products and Hadamard products, and over a splitting field partial fractions with the repeated-pole binomial series give the polynomial-times-exponential closed form. Companion matrices and Cayley–Hamilton connect the recurrence and matrix pictures. A finite weighted digraph makes walks entries of transfer-matrix powers; the formal matrix geometric series presents the walk series as a cofactor over $\det(I-xA)$, trace and logarithmic-derivative formulas follow, and prefix automata make the generating function of words avoiding finitely many factors rational.

## Exact item inventory

### A page — 32 items

1. `def-linear-recurrence-and-recurrence-characteristic-polynomial` — definition — Constant-coefficient linear recurrences, their starting index and their characteristic polynomial.
2. `def-rational-formal-power-series-and-reduced-denominator` — definition — Rational formal power series, proper presentations and reduced denominators.
3. `lem-four-spaces-for-a-fixed-linear-recurrence` — lemma — the four dimension-`d` spaces.
4. `thm-linear-recurrence-iff-rational-generating-function` — theorem — eventual recurrence iff rational formal generating function.
5. `cor-initial-values-determine-a-linear-recurrence-sequence` — corollary — `d` initial values determine a fixed order-`d` recurrence.
6. `cor-minimal-recurrence-and-reduced-denominator` — corollary — least eventual order equals reduced-denominator degree.
7. `prop-finite-modification-preserves-rationality-and-eventual-recurrence` — proposition — finite modification invariance.
8. `prop-reciprocity-for-biinfinite-linear-recurrences` — proposition — positive/negative half reciprocity.
9. `prop-rational-series-are-closed-under-sums-and-products` — proposition — ordinary sum/Cauchy-product closure.
10. `thm-hadamard-product-of-rational-series-is-rational` — theorem — coefficientwise-product closure.
11. `rem-reciprocal-root-convention-for-recurrences` — remark — `chi(t)=prod(t-lambda_i)^{m_i}` corresponds to `Q(x)=prod(1-lambda_i x)^{m_i}`.
12. `lem-partial-fractions-for-a-split-recurrence-denominator` — lemma — unique repeated-pole decomposition.
13. `lem-binomial-series-for-a-repeated-pole` — lemma — formal expansion of `(1-lambda x)^{-j}`.
14. `thm-closed-form-for-a-linear-recurrence-over-a-splitting-field` — theorem — polynomial-times-exponential form over a named splitting field in characteristic zero.
15. `def-companion-matrix-of-a-linear-recurrence` — definition — row-shift companion matrix.
16. `prop-companion-matrix-iterates-a-linear-recurrence` — proposition — state-vector iteration.
17. `thm-characteristic-polynomial-of-a-recurrence-companion-matrix` — theorem — companion characteristic polynomial.
18. `cor-cayley-hamilton-recurrences-for-matrix-powers` — corollary — recurrent entries and traces of matrix powers.
19. `def-fibonacci-and-lucas-sequences` — definition — the fixed initial-value conventions.
20. `def-trace-of-a-square-matrix-over-a-commutative-ring` — definition — ring-valued matrix trace.
21. `prop-ring-trace-agrees-with-the-published-field-trace` — proposition — explicit trace seam.
22. `def-finite-weighted-digraph-walk-and-transfer-matrix` — definition — directed multiedges, walk weights and adjacency sums.
23. `thm-weighted-walks-are-entries-of-transfer-matrix-powers` — theorem — walk/matrix-power dictionary.
24. `lem-formal-matrix-geometric-series` — lemma — formal inverse of `I-xA`.
25. `thm-transfer-matrix-cofactor-formula` — theorem — cofactor-over-determinant walk series.
26. `lem-derivative-of-det-i-minus-xa` — lemma — determinant derivative by cofactors.
27. `cor-closed-walk-trace-generating-functions` — corollary — trace and logarithmic-derivative forms.
28. `cor-eigenvalue-form-of-the-transfer-matrix-trace` — corollary — eigenvalue form under an explicit linear factorisation of the characteristic polynomial over the base field.
29. `def-finite-words-factor-avoidance-and-prefix-states` — definition — the local enumerative word interface.
30. `def-prefix-automaton-for-a-finite-forbidden-factor-set` — definition — longest-suffix states.
31. `thm-words-avoiding-finitely-many-factors-have-rational-generating-functions` — theorem — finite forbidden sets.
32. `cor-binary-words-avoiding-a-fixed-factor-have-a-rational-generating-function` — corollary — the required binary singleton case.

### B page — 15 items

1. `ex-fibonacci-generating-function-and-binet-formula` — example.
2. `ex-lucas-generating-function-and-closed-form` — example.
3. `ex-repeated-pole-produces-a-polynomial-factor` — example.
4. `ex-fibonacci-companion-matrix` — example.
5. `ex-fibonacci-monomer-domino-tilings-by-transfer-matrix` — example.
6. `ex-lucas-cyclic-tilings-and-the-trace-method` — example.
7. `ex-closed-walks-in-the-complete-graph` — example.
8. `ex-binary-words-avoiding-consecutive-ones` — example.
9. `ex-binary-words-avoiding-101` — example.
10. `ex-north-east-west-walks-without-immediate-horizontal-reversal` — example.
11. `cex-a-rational-recurrence-may-need-a-proper-splitting-field` — counterexample.
12. `fs-recurrence-coefficients-alone-determine-the-sequence` — false statement.
13. `fs-split-characteristic-polynomials-give-only-pure-exponentials` — false statement.
14. `cex-factorial-generating-series-is-not-rational` — counterexample.
15. `fs-transfer-matrix-inversion-needs-a-spectral-radius-hypothesis` — false statement.

## Canonical-coverage result

The harvest reads four independent treatments. Stanley and Sagan are the two independent textbooks; Waldschmidt supplies a second recurrence/matrix treatment; Gallier–Quaintance supplies the commutative-ring adjugate interface. The machine checklist currently reports 60 harvested headings: 44 `included`, 9 `inline`, 4 `already-published`, and 3 declined `out-of-scope`.

The three declines Alpha is most likely to challenge are deliberately narrow:

- Stanley Corollary 4.7.4's **entrywise** real-symmetric eigenvalue formula needs orthogonal diagonalisation from the later inner-product page. This scaffold still includes the general trace eigenvalue formula when the characteristic polynomial is explicitly a product of linear factors over the base field.
- Stanley Example 4.7.16's factorisation of ordered pairs and higher tuples of Fibonacci tilings belongs to free-monoid factorisation and is not consumed by this recurrence/transfer interface. The Fibonacci tiling and Lucas circular-tiling ends of the same example are included.
- Waldschmidt's exponential-generating-series/differential-equation heading belongs to the separate EGF development. The ordinary formal generating-series equivalence is included in full.

No source result was declined merely because it needed a lemma that could be built locally: the four-space, repeated-pole, matrix-geometric, determinant-derivative, ring-trace and prefix-automaton machinery is all scaffolded here.

## Source ledger and licensing notes

- Richard P. Stanley, *Enumerative Combinatorics*, vol. 1, 2nd ed., Chapter 4 §§4.1, 4.2, and §4.7 through Example 4.7.16: <https://math.mit.edu/~rstan/ec/ec1.pdf>. Supports the four-space recurrence/rational theorem, minimal order, eventual modification, reciprocity, Hadamard product, weighted-walk theorem, cofactor and trace forms, forbidden-factor automata, Fibonacci tilings and Lucas circular coverings. This is the author-hosted book PDF; no prose or figure is copied, and the items paraphrase statements and reconstruct proofs.
- Bruce E. Sagan, *Combinatorics: The Art of Counting*, §§3.6–3.7: <https://users.math.msu.edu/users/bsagan/Books/Aoc/GSM210.pdf>. Independently supports the recurrence/rational equivalence, Fibonacci calculation, reciprocal-root convention, repeated-root example and partial-fraction closed form. The PDF identifies itself as a preliminary version made available with publisher permission; use is limited to mathematical fact checking and paraphrase.
- Michel Waldschmidt, *Linear Recurrence Sequences VI*, displayed slides 5–28: <https://webusers.imj-prg.fr/~michel.waldschmidt/articles/pdf/LinRecSeqVI.pdf>. Supports initial-value dimension, eventual recurrences, companion matrices, matrix-power recurrences and multiple-root bases. Author-hosted lecture material; no slide is reproduced.
- Jean Gallier and Jocelyn Quaintance, *Linear Algebra for Computer Vision, Robotics, and Machine Learning*, §6.4 Definition 6.9 and Proposition 6.11: <https://www.cis.upenn.edu/~cis5150/linalg-I-f.pdf>. Confirms minors, cofactors, adjugate identity, the determinant-unit criterion and inverse formula over a commutative ring. The scaffold cites the audited published library items rather than importing source text.
- Herbert Wilf, *generatingfunctionology*, §1.3: <https://www2.math.upenn.edu/~wilf/gfology2.pdf>. Read as a convention check for Fibonacci, formal generating functions and partial fractions; Stanley and Sagan remain the canonical pair treatments. No text is copied.

## Design corrections and recommendations for step 3

### Finding 1 — reuse the published adjugate chain; do not mint it again

The enriched CB-5 design correctly says that `determinants-of-matrices-over-a-commutative-ring` (order 82) stops before minors, cofactors and adjugates. I opened that page and confirmed it contains determinant definitions and laws but none of that machinery. The design's instruction to mint the chain here is nevertheless stale: `the-determinant-of-a-linear-operator` (order 84) is transitively in this pair's closure through the order-86 eigenvalue page and already publishes:

- `def-matrix-minors-cofactors-and-adjugate`, with 0-indexed rows/columns, parity signs and the local `0x0` determinant convention;
- `thm-laplace-cofactor-expansion`;
- `thm-adjugate-identity-over-a-commutative-ring`;
- `cor-square-matrix-invertible-iff-determinant-is-a-unit`;
- `cor-inverse-matrix-by-adjugate`.

Recommendation: approve reuse of these audited ids. Declining this correction would force duplicate definitions and violate the repository id-reuse/seam rule.

### Finding 2 — planning label CB-15 has no page id

I resolved `CB-15` by searching `research/plan-spec.json` and the design scaffold. It denotes the proposed “Combinatorial Classes and Symbolic Method” page, but no actual page id with that title or label exists in the live spec; it is therefore neither published nor in this pair's closure. It is not cited. The finite-word and prefix-automaton machinery actually needed here is built locally and uses no symbolic-method result.

Recommendation: retain CB-15 as a future planning recommendation, likely under an id such as `combinatorial-classes-and-the-symbolic-method`, but do not add it to this pair at step 4. Declining the future recommendation breaks nothing in batch 7; adding a nonexistent prerequisite now would make the live plan invalid.

### Finding 3 — no page split

The source-anchored harvest produced a 32-item A page, well below the 60-item hard cap. The recurrence/rational half and transfer-matrix half remain tightly connected by Cayley–Hamilton, Hadamard closure and finite-state word counting.

Recommendation: keep one A/B pair. If later adjudication adds at least 29 A items, the exact natural cut is after `cor-cayley-hamilton-recurrences-for-matrix-powers`: items 1–18 remain on `linear-recurrences-and-rational-generating-functions`, and items 19–32 move to a new `transfer-matrix-method` A page with its own examples companion. No split is warranted now.

## Convention decisions

- The recurrence is written `a_(n+d)+c_1 a_(n+d-1)+...+c_d a_n=0`, with `c_d != 0`, characteristic polynomial `chi(t)=t^d+c_1t^(d-1)+...+c_d`, and denominator `Q(x)=1+c_1x+...+c_dx^d`.
- The required reciprocal-root remark fixes `chi(t)=prod_i(t-lambda_i)^(m_i)` and `Q(x)=prod_i(1-lambda_i x)^(m_i)`. Sagan speaks of reciprocals of denominator roots; Waldschmidt explicitly calls `Q` the reciprocal polynomial; Stanley uses the `1-gamma x` factors. These are the same convention but sources verbalise it differently.
- The recurrence/rational equivalence is over an arbitrary field and root-free. The polynomial-times-exponential theorem separately assumes characteristic zero and names a splitting field `E/K`; it never silently substitutes `R` or `C`.
- Transfer matrices use vertices `0,...,p-1`, source-row/target-column adjacency and `A_uv=sum_(e:u->v) w(e)`. Thus the inverse entry uses the deleted row/column `(v,u)` and sign `(-1)^(u+v)`, matching the published 0-indexed cofactor convention.
- The cofactor theorem is primary and formal over a commutative ring. The eigenvalue trace form explicitly assumes $\chi_A(t)=\prod_{i<p}(t-\lambda_i)$ in $K[t]$. Stanley's Corollary 4.7.4 instead assumes a real symmetric matrix and orthogonal diagonalisation; that entrywise specialisation is not silently generalized.
- The published `def-trace-of-a-square-matrix` is field-only. A distinct commutative-ring trace definition is minted, followed immediately by an agreement proposition before any field theorem is combined with the new trace.
- `det(I-xA)` is only used for positive matrix size because the published determinant has global domain `n>=1`; the zero-size trace remains the empty sum. Entrywise transfer statements already choose vertices and hence force positive size.
- “Factor” means a contiguous subword. Forbidden factors are required nonempty, so the empty starting state survives. The prefix automaton remembers the longest suffix that is a proper prefix of some forbidden factor.
- Nothing in either page is asymptotic. The factorial nonrationality proof is an exact polynomial identity, and the formal inverse proof mentions no radius of convergence.
- No new item applies a canonical embedding to a natural number; in particular no `iota(n)` notation is planned.

## Published dependency closure and confidence routes

The live closure computation found order 82 and order 84 transitively through the order-86 eigenvalue page. It found no page corresponding to CB-15, and neither the order-60 free-group word page nor the order-207 graph page is in the closure. Their definitions are therefore not cited. Every item below was opened from `items/<id>.md`; all are `status: published`. No load-bearing item is `legacy-unclassified` and no published statement was found false.

| Published id | What was checked on disk | Confidence route |
|---|---|---|
| `def-commutative-ring` | Multiplication-commutative convention. | Component provenance is `literature-derived`; established-from-knowledge and checked against Judson cited in the item. |
| `def-formal-power-series-and-coefficient-extraction` | Coefficient-function model, Cauchy product and no convergence. | `literature-derived`, audited 2026-08-13; source-checked against Sambale/Wilf. |
| `prop-coefficient-extraction-linearity-and-extensionality` | Extensionality, shifts and convolution including `n=0`. | `ai-altered` statement/proof, audited; exact clauses inspected and source-checked against Wilf. |
| `thm-formal-power-series-unit-criterion` | Unit iff constant coefficient unit, including zero ring. | `literature-derived`/`ai-altered`, audited; source-checked against Sambale/Wilf. |
| `thm-formal-power-series-ring-and-polynomial-embedding` | Cauchy multiplication makes `R[[x]]` a commutative ring containing `R[x]`. | `literature-derived`/`ai-altered`, audited; exact ring statement inspected before applying commutative-ring matrix theorems over `R[[x]]`. |
| `def-formal-power-series-derivative` | Coefficientwise derivative over a commutative ring. | `literature-derived`, audited; source-checked against Sambale. |
| `prop-formal-derivative-algebra` | Linearity and product rule over a commutative ring. | `literature-derived`/`ai-altered`, audited; only the displayed product rule is consumed. |
| `def-polynomial-degree-leading-coefficient-and-monic` | Zero polynomial has no degree. | `ai-altered`, audited; source-checked against Judson/Donaldson. |
| `thm-polynomial-division-algorithm-over-a-field` | Quotient/remainder, including zero dividend and constant divisor. | `literature-derived`, audited; source-checked against Judson/Donaldson. |
| `thm-root-bound-for-polynomials-over-a-domain` | A nonzero degree-`d` polynomial over an integral domain has at most `d` distinct roots. | `literature-derived`/`ai-altered`, published and audited; exact Statement used in the factorial counterexample. |
| `thm-bezout-identity-for-polynomials` | Coprime-polynomial decomposition. | `literature-derived`, audited; source-checked against Judson/Donaldson. |
| `thm-polynomial-ring-over-a-field-is-a-ufd` | Divisibility/cancellation basis for reduced denominators. | `literature-derived`, audited; source-checked against Donaldson. |
| `def-polynomials-that-split-and-splitting-fields` | Split factorisation with multiplicity and named splitting field. | `literature-derived`, audited 2026-08-13; source-checked against Judson/Milne. |
| `def-ring-characteristic` | Characteristic zero means no positive natural multiple of one vanishes. | `ai-altered`, certified in the published audit; exact convention inspected and established-from-knowledge. |
| `thm-binomial-closed-formula` | Binomial coefficients times factorials equal falling factorials, including the boundary values. | `ai-altered`, dual-judge pass and audited; exact statement inspected and source-checked against Stanley's Chapter 1 convention. |
| `def-algebraically-closed-field` | No longer consumed after the third-pass repair replaced algebraic closure by the displayed linear factorisation hypothesis itself. | Historical source check retained: `literature-derived`, audited and source-checked against Khovanov/Pinkham; it is not load-bearing in the repaired scaffold. |
| `lem-standard-basis-of-f-n` | `dim K^d=d`, including `d=0`. | Statement `ai-altered`, proof `ai-generated`, audited; exact statement established-from-knowledge and checked against Axler's standard-basis convention. |
| `cor-independent-set-is-no-larger-than-a-finite-spanning-set` | Finite-span dimension bound used in Hadamard closure. | Statement `ai-altered`, audited; established-from-knowledge via Steinitz exchange and exact statement inspected. |
| `def-matrices-over-a-commutative-ring` | Matrices as 0-indexed finite functions, including empty shapes. | `literature-derived`, audited; source-checked against Waterloo notes. |
| `def-ring-matrix-product-identity-and-transpose` | Source-row/target-column multiplication and empty sums. | `ai-altered`, audited; source-checked against Waterloo/Massot. |
| `thm-ring-matrix-arithmetic-laws` | Associativity, identities and distributivity including zero sizes. | `literature-derived`/`ai-altered`, audited; exact statement inspected. |
| `def-determinant-of-a-square-matrix` | Leibniz determinant is globally defined for `n>=1`, columns indexed by `i`. | `literature-derived`, audited; source-checked against Waterloo/Massot/ILA. |
| `def-matrix-minors-cofactors-and-adjugate` | Deleted row/column order, parity signs, local `0x0` minor and adjugate transpose. | `ai-altered`, audited; source-checked against ILA and Pál. |
| `thm-laplace-cofactor-expansion` | Both row and column expansions over a commutative ring. | `ai-altered`, audited; exact proof and `n=1` boundary inspected. |
| `thm-adjugate-identity-over-a-commutative-ring` | Both-sided identity over a commutative ring. | `ai-altered`, audited; source-checked against Pál Proposition 7.2. |
| `cor-inverse-matrix-by-adjugate` | Inverse formula when determinant is a unit. | `ai-altered`, audited; source-checked against Pál Proposition 7.2. |
| `cor-square-matrix-invertible-iff-determinant-is-a-unit` | Coverage-only confirmation of the exact invertibility criterion. | `ai-altered`, audited; opened with the same Pál source chain. |
| `def-coordinate-endomorphism-over-a-commutative-ring` | `T_A(x)=Ax` and coordinate conventions. | `ai-altered`, audited; exact definition inspected and source-checked against Pál. |
| `def-characteristic-polynomial-of-a-matrix` | `chi_A(t)=det(tI-A)` and the published `0x0` convention. | `ai-altered`, audited; exact statement inspected. |
| `def-characteristic-polynomial-of-an-operator` | Operator characteristic polynomial is the characteristic polynomial of any representing matrix. | `ai-altered`, dual-judge pass and audited; source-checked against Pinkham/Axler. |
| `thm-cayley-hamilton` | Finite-dimensional endomorphism version, including dimension zero. | `literature-derived`/`ai-altered`, audited; source-checked against Khovanov and Stacks tag 05G6. |
| `def-trace-of-a-square-matrix` | Field-only diagonal sum and zero-size empty sum. | `literature-derived`, audited; source-checked against Axler. |
| `def-trace-of-an-endomorphism` | Operator trace is the trace of any representing matrix and is basis independent. | `literature-derived`, audited; source-checked against Axler Definition 8.51. |
| `thm-spectral-mapping-for-polynomials` | Eigenvalues of `p(T)` with algebraic multiplicity when the characteristic polynomial splits. | `ai-altered`, dual-judge pass and audited; source-checked against Pinkham. |
| `thm-trace-is-sum-of-eigenvalues` | Trace as sum of split characteristic roots with multiplicity. | `ai-altered`, dual-judge pass and audited; source-checked against Pinkham. |

Coverage also names the published `cor-square-matrix-invertible-iff-determinant-is-a-unit`; it is not a direct scaffold dependency because `cor-inverse-matrix-by-adjugate` already packages the consumed implication.

I also opened `ex-formal-geometric-series` during dependency resolution and then rejected it as a dependency because it is homed on `formal-power-series-examples`, a B page. The repeated-pole lemma proves its `j=1` base case coefficientwise from the A-page unit criterion, and the eigenvalue trace item cites that local lemma instead. This is a resolved B-leaf trap, not an exception.

## Provenance plan and per-item rationales

All definitions and remarks have proof provenance `not-applicable`. No A-page statement or construction has `ai-generated` statement provenance, and every A-page dependency target is literature-backed or an explicitly adapted seam/result. Generated B-page witnesses are leaves and are not dependencies of any item.

| Item | Statement / proof provenance | Rationale |
|---|---|---|
| `def-linear-recurrence-and-recurrence-characteristic-polynomial` | `literature-derived` / `not-applicable` | Stanley 4.1, Sagan 3.7 and Waldschmidt slides 5-6; signs normalized to the recorded reciprocal convention. |
| `def-rational-formal-power-series-and-reduced-denominator` | `ai-altered` / `not-applicable` | Stanley/Sagan rational presentations adapted to the library's formal-series unit criterion and zero-polynomial degree convention. |
| `lem-four-spaces-for-a-fixed-linear-recurrence` | `ai-altered` / `ai-altered` | Repackages Stanley's four-space dimension count into convention-free initial-value, sequence, numerator and fixed-denominator spaces. |
| `thm-linear-recurrence-iff-rational-generating-function` | `ai-altered` / `ai-altered` | Stanley Theorem 4.1.1 and Sagan Theorem 3.7.1, with Stanley 4.2's finite-prefix clause made explicit and partial fractions removed from this proof. |
| `cor-initial-values-determine-a-linear-recurrence-sequence` | `literature-derived` / `ai-altered` | Explicit in Waldschmidt's dimension statement; derived through the four-space isomorphism. |
| `cor-minimal-recurrence-and-reduced-denominator` | `literature-derived` / `ai-altered` | Stanley Corollary 4.2.1, recast for normalized reduced denominators. |
| `prop-finite-modification-preserves-rationality-and-eventual-recurrence` | `literature-derived` / `ai-altered` | Stanley Proposition 4.2.2 and Waldschmidt's ultimately recurrent heading. |
| `prop-reciprocity-for-biinfinite-linear-recurrences` | `literature-derived` / `ai-altered` | Stanley Proposition 4.2.3 and Corollary 4.2.4, kept explicitly as rational-function equality. |
| `prop-rational-series-are-closed-under-sums-and-products` | `literature-derived` / `ai-altered` | Stanley 4.2 opening; direct common-denominator proof in the formal-series interface. |
| `thm-hadamard-product-of-rational-series-is-rational` | `literature-derived` / `ai-altered` | Stanley Proposition 4.2.5; shift-span proof avoids split-field and characteristic assumptions. |
| `rem-reciprocal-root-convention-for-recurrences` | `ai-altered` / `not-applicable` | Convention reconciliation across Stanley, Sagan and Waldschmidt; no mathematical claim beyond the algebraic reciprocal identity. |
| `lem-partial-fractions-for-a-split-recurrence-denominator` | `literature-derived` / `ai-altered` | The partial-fraction step in Stanley 4.1.1 and Sagan 3.7, proved with published polynomial Bézout. |
| `lem-binomial-series-for-a-repeated-pole` | `literature-derived` / `ai-altered` | Coefficient identity used in both textbooks; formal induction replaces analytic differentiation. |
| `thm-closed-form-for-a-linear-recurrence-over-a-splitting-field` | `ai-altered` / `ai-altered` | Stanley/Sagan closed form, strengthened in precision by naming `E/K` and adding characteristic zero. |
| `def-companion-matrix-of-a-linear-recurrence` | `literature-derived` / `not-applicable` | Waldschmidt slides 16-17; row-shift convention fixed explicitly. |
| `prop-companion-matrix-iterates-a-linear-recurrence` | `literature-derived` / `ai-altered` | Waldschmidt slide 17, adapted to 0-indexed library matrices. |
| `thm-characteristic-polynomial-of-a-recurrence-companion-matrix` | `literature-derived` / `ai-altered` | Waldschmidt slide 17 and Pinkham Chapter 10; proof routed through published Laplace expansion. |
| `cor-cayley-hamilton-recurrences-for-matrix-powers` | `ai-altered` / `ai-altered` | Waldschmidt slide 18 plus the audited published Cayley–Hamilton theorem. |
| `def-fibonacci-and-lucas-sequences` | `literature-derived` / `not-applicable` | Standard conventions used in Stanley Examples 4.1.2 and 4.7.16. |
| `def-trace-of-a-square-matrix-over-a-commutative-ring` | `ai-altered` / `not-applicable` | The published field trace's exact diagonal-sum definition generalized to the commutative-ring domain required by Stanley 4.7. |
| `prop-ring-trace-agrees-with-the-published-field-trace` | `ai-altered` / `ai-altered` | Small faithful seam proposition obtained by unfolding the new and published definitions; made load-bearing only because both statements are source-backed exact definitions. |
| `def-finite-weighted-digraph-walk-and-transfer-matrix` | `ai-altered` / `not-applicable` | Stanley 4.7.1 adapted to finite edge sets, parallel edges, 0-indexed vertices and arbitrary commutative-ring weights. |
| `thm-weighted-walks-are-entries-of-transfer-matrix-powers` | `literature-derived` / `ai-altered` | Stanley Theorem 4.7.1, with the empty-walk boundary explicit. |
| `lem-formal-matrix-geometric-series` | `ai-altered` / `ai-altered` | The formal inverse step in Stanley Theorem 4.7.2, expanded into a separate coefficientwise lemma to exclude analytic assumptions. |
| `thm-transfer-matrix-cofactor-formula` | `ai-altered` / `ai-altered` | Stanley Theorem 4.7.2 adapted from complex weights to its stated commutative-ring setting using the audited adjugate chain. |
| `lem-derivative-of-det-i-minus-xa` | `ai-altered` / `ai-altered` | The determinant-derivative step underlying Stanley Corollary 4.7.3, isolated and proved from the Leibniz formula and formal product rule. |
| `cor-closed-walk-trace-generating-functions` | `literature-derived` / `ai-altered` | Stanley Corollary 4.7.3, with both the all-length cofactor trace and positive-length logarithmic derivative stated. |
| `cor-eigenvalue-form-of-the-transfer-matrix-trace` | `ai-altered` / `ai-altered` | Stanley's eigenvalue reading adapted to arbitrary matrices whose characteristic polynomial is given as a product of linear factors over the base field, using spectral mapping and trace-with-multiplicity rather than symmetric diagonalisation. The statement is source-grounded by the exact hypotheses and conclusions of those two published theorems. |
| `def-finite-words-factor-avoidance-and-prefix-states` | `ai-altered` / `not-applicable` | Stanley Example 4.7.7/Proposition 4.7.8; supplies a local enumerative word interface because the free-group word page is outside closure, while `def-natural-numbers` supplies the natural-number index set for a finite sequence. |
| `def-prefix-automaton-for-a-finite-forbidden-factor-set` | `ai-altered` / `not-applicable` | Stanley's “retain enough past history” construction recast as longest-suffix prefix states. |
| `thm-words-avoiding-finitely-many-factors-have-rational-generating-functions` | `literature-derived` / `ai-altered` | Stanley Proposition 4.7.8, with the automaton correctness proof and the empty forbidden-set boundary made explicit. |
| `cor-binary-words-avoiding-a-fixed-factor-have-a-rational-generating-function` | `literature-derived` / `ai-altered` | Direct singleton/binary specialization of Stanley Proposition 4.7.8 and the dispatch's required case. |
| `ex-fibonacci-generating-function-and-binet-formula` | `literature-derived` / `ai-altered` | Stanley Example 4.1.2, Sagan 3.6 and Wilf 1.3; names `Q(sqrt(5))`. |
| `ex-lucas-generating-function-and-closed-form` | `literature-derived` / `ai-altered` | Stanley Example 4.7.16; adapted to the fixed `L_0=2,L_1=1` convention. |
| `ex-repeated-pole-produces-a-polynomial-factor` | `literature-derived` / `ai-altered` | Sagan 3.7 repeated-root example, simplified to the canonical coefficient identity. |
| `ex-fibonacci-companion-matrix` | `ai-altered` / `ai-altered` | Waldschmidt's general companion construction specialized to Fibonacci. |
| `ex-fibonacci-monomer-domino-tilings-by-transfer-matrix` | `literature-derived` / `ai-altered` | Stanley Example 4.7.16 opening and the transfer theorem. |
| `ex-lucas-cyclic-tilings-and-the-trace-method` | `literature-derived` / `ai-altered` | Stanley Example 4.7.16 ending; small circular-board conventions will be stated. |
| `ex-binary-words-avoiding-consecutive-ones` | `ai-altered` / `ai-altered` | Standard singleton-factor instance of Stanley Proposition 4.7.8, checked by the two-state matrix. |
| `ex-binary-words-avoiding-101` | `ai-generated` / `ai-generated` | Checkable three-state witness chosen for this B page; it carries `generation` frontmatter and the independently enumerated values `1,2,4,7,12,21,37` through length 6. It is not a dependency target. |
| `ex-north-east-west-walks-without-immediate-horizontal-reversal` | `literature-derived` / `ai-altered` | Stanley Example 4.1.3, with the state elimination and transfer check both retained. |
| `cex-a-rational-recurrence-may-need-a-proper-splitting-field` | `ai-generated` / `ai-generated` | Checkable `t^2+1` witness over `Q`; must verify the four initial terms and the factorization over `Q(i)`. It is not a dependency target. |
| `fs-recurrence-coefficients-alone-determine-the-sequence` | `ai-altered` / `ai-altered` | Source-backed false generalisation of the initial-value parametrisation in Stanley 4.1–4.2; two explicit initial pairs refute it. |
| `fs-split-characteristic-polynomials-give-only-pure-exponentials` | `ai-altered` / `ai-altered` | The false generalization is directly refuted by Sagan's repeated-root phenomenon and the sequence `n`. |
| `cex-factorial-generating-series-is-not-rational` | `ai-generated` / `ai-generated` | Exact algebraic witness: division by `n!` produces a monic polynomial with infinitely many roots, contradicting the published domain root bound. No consumer and no asymptotic argument. |
| `fs-transfer-matrix-inversion-needs-a-spectral-radius-hypothesis` | `ai-altered` / `ai-altered` | Source-backed false analytic restriction on Stanley's formal transfer identity, refuted coefficientwise in the formal-series ring. |

## Long-proof decomposition and useful corollaries

- The recurrence/rational equivalence is not proved by partial fractions. `lem-four-spaces-for-a-fixed-linear-recurrence` owns the dimension count; `thm-linear-recurrence-iff-rational-generating-function` adds finite prefixes; partial fractions begin only at `lem-partial-fractions-for-a-split-recurrence-denominator`.
- Stanley's literal `V_1,V_2,V_3,V_4` use split closed forms and partial fractions for the last two spaces. To obey the design's separation, the local four-space lemma keeps Stanley's rational and recurrence spaces but uses numerator and initial-value coordinate spaces for the other two; the source's `V_3,V_4` argument is harvested separately into the partial-fraction and closed-form items. This is an explicit refactoring, not a claim that Stanley named the four local spaces.
- The closed-form proof is decomposed into reciprocal-root convention, split partial fractions and repeated-pole coefficient extraction. This isolates the characteristic-zero and splitting-field hypotheses from the convention-free equivalence.
- The transfer proof is decomposed into walk/matrix powers, formal matrix geometric inversion, the already-published adjugate chain and the primary cofactor theorem. The trace/log-derivative proof gets its own determinant-derivative lemma.
- The factor-avoidance proof is decomposed into local word conventions, the prefix automaton's sufficient-state construction and the transfer theorem.
- Useful corollaries added in pass two: initial-value uniqueness, minimal recurrence order, finite-modification invariance, Cayley–Hamilton recurrences, closed-walk trace forms, the eigenvalue form under an explicit linear factorisation hypothesis and binary fixed-factor rationality.

## New-id collision check

I extracted all 46 proposed ids from `research/frontier-13-batch-7.pages.json` and tested the corresponding `items/<id>.md` paths. The check printed no collision. Existing cofactor/adjugate ids were intentionally reused and are not reminted.

## Continuity checkpoint — 60% context

- **Owned artifacts:** `research/frontier-13-batch-7.pages.json` (32 A / 14 B) and `research/frontier-13-batch-7.coverage.json` (60 harvested headings) are on disk; this notes file is the third owned artifact; the proof-contract file remains to be written.
- **Current substage:** source harvest, live-plan resolution, item ordering, provenance assignment and dependency closure are complete. Proof-obligation serialization and final gates remain.
- **Checks completed:** all 46 proposed ids have no item-file collision; the coverage checklist passes with zero errors and zero warnings; all direct published dependencies have been opened on disk; the order-84 adjugate chain and CB-15 absence were independently verified in `plan-spec.json`.
- **Open mathematical question:** at authoring time, reproduce all three endpoint clauses of Stanley Corollary 4.2.4 exactly inside the bi-infinite reciprocity proposition, and keep the `p>=1` determinant domain explicit in both transfer trace formulas.
- **Exact next action:** write the version-1 proof contract for all 37 proof-bearing items, including all eight boundary dispositions and finite smoke obligations for the generated B-page witnesses, then run the required plan and coverage gates plus manifest-only policy checks that operate in this sandbox.

## Blockers and unverified matters

No blocker. I did not verify a license permitting verbatim reproduction because no verbatim source prose, table or figure is planned. I did not run `tools/gates.mjs`, as instructed. The proof contracts are deliberately a scaffold-time obligation map: all 43 citations to already-published items carry exact on-disk clauses that were mechanically rechecked, while 66 citations to not-yet-authored batch items remain explicit Step-5 quote obligations.

## 2026-08-15 — Step 3 → 4 scaffold repair (F7.1–F7.4)

This repair changed only the four Batch 7 artifacts and only the adjudicated findings.

- **F7.1:** Restricted cor-cayley-hamilton-recurrences-for-matrix-powers to an invertible positive-sized matrix over a field. The strategy now records that the constant coefficient of $\chi_A$ is $(-1)^n\det(A)$ and is nonzero because an invertible matrix has unit determinant. The proof contract cites both the field-only Cayley–Hamilton theorem and the published unit-determinant corollary, and its degenerate boundary explicitly excludes singular matrices. The item id is unchanged.
- **F7.2:** Mirrored the orchestrator-approved the-field-of-fractions-and-localisation prerequisite into the owned manifest. prop-reciprocity-for-biinfinite-linear-recurrences now states $F_+(x)=-F_-(x^{-1})$ in $K(x)$ and says explicitly that this is an equality of rational functions, not formal power series. Its dependency and contract cite cor-rational-function-field-as-a-fraction-field using the exact published Statement clause. research/plan-spec.json was not edited.
- **F7.3:** Added ex-closed-walks-in-the-complete-graph to the B page and changed Stanley Example 4.7.5 to included with that id. Its provenance.statement is literature-derived because Stanley Example 4.7.5 states the complete-graph closed-walk formula; its provenance.proof is ai-altered because the local proof plan reorganises Stanley's eigenvalue calculation through the scaffolded transfer-matrix trace corollary. It is a non-load-bearing B-page leaf. Re-walking the stated Stanley pages also added the previously omitted Note after Proposition 4.2.3, the headings for Sections 4.7 and 4.7.3, and dispositions for Section 4.7.4, Proposition 4.7.13, Lemma 4.7.14 and Example 4.7.15. The latter four are genuinely part of the declined free-monoid factorisation branch. The Corollary 4.7.4 row is now deferred and accurately says that inner-product-spaces-and-orthogonality is order 94, below 195, but outside this pair's declared closure.
- **F7.4:** Replaced every scaffold-time citation placeholder by a citation record. The proof-contract artifact now has 38 scoped contracts, 112 citations, 0 empty citations arrays and 0 citation_obligations placeholders. The citation audit found 45 exact published clauses and 67 exact pair-local scaffold clauses, with 0 errors.

### Current census

| page | kind | items |
|---|:---:|---:|
| linear-recurrences-and-rational-generating-functions | A | 32 |
| linear-recurrences-and-rational-generating-functions-examples | B | 15 |

The A page remains below the 60-item ceiling.

### Required gate output

All three required commands exited 0. validate-plan.mjs also printed its full repository-wide reading-order table and existing redundant-prereq warnings; its exact opening census and closing status were:

~~~text
$ node tools/validate-plan.mjs research/plan-spec.json
plan: 1176 pages (583 A + 583 B + 5 already published), 3879 new items, 4866 existing ids available
item lists written for 244/1171 planned pages — the rest are validated at PAGE level only
3878/3879 planned items already authored into items/
OK — declared page order is acyclic and consistent; no item-level cycles, forward
references, B-page dependencies, or unresolved ids among the 244 page(s) with item lists.
NOTE: 927 planned page(s) carry no item list yet (marked * above). Their reading
order is guaranteed; their item dependencies are not yet asserted, so re-run this
after writing each page's items.

$ node tools/coverage-checklist.mjs research/frontier-13-batch-7.coverage.json
coverage-checklist: 1 page(s), 68 harvested result(s), 0 error(s), 0 warning(s)

$ node tools/content-policy.mjs research/frontier-13-batch-7.pages.json --manifest-only
content-policy: 47 scoped item(s), 0 error(s), 0 warning(s)
~~~

### Dependency-closure and citation audits

The batch-wide dependency audit resolved every published dependency to the page that actually lists it, checked that home against the source page's transitive declared requires closure, and checked the whole run for cross-pair and B-leaf targets:

~~~text
dependency-closure audit: 47 item(s), 2 page(s)
unresolved_ids: 0
out_of_closure_published_deps: 0
cross_pair_edges: 0
b_leaf_deps: 0
duplicate_ids: 0
unpublished_deps: 0
published_home_unresolved: 0
local_forward_edges: 0
multiple_published_homes: 0
~~~

The separate citation audit reported:

~~~text
proof-contract citation audit: 38 contract(s), 112 citation(s)
published_exact_clauses: 45
pair_local_exact_scaffold_clauses: 67
empty_citation_arrays: 0
citation_obligation_placeholders: 0
errors: 0
~~~

No blocker. tools/gates.mjs was not run.

## 2026-08-15 — Step 3 → 4 scaffold repair, second pass (F7.2, F7.4, F7.5, F7.7, F7.8)

This second pass changed only the four Batch 7 artifacts and only the five adjudicated findings omitted from the first brief.

- **F7.2:** Added `lem-monic-polynomials-split-over-an-algebraically-closed-field` immediately before the eigenvalue trace corollary. Its dependencies are `def-algebraically-closed-field` and `cor-factor-theorem-over-a-commutative-ring`. The proof contract records the degree-zero empty product, obtains a root before choosing it, applies the factor theorem, and inducts on the monic quotient's degree. `cor-eigenvalue-form-of-the-transfer-matrix-trace` now cites this lemma at step 1.1 to produce the displayed split characteristic polynomial required by both spectral mapping and the trace theorem. The lemma's provenance is `ai-altered` / `ai-altered`: its standard statement and induction proof adapt the two published, source-backed inputs into a local reusable bridge. It is deliberately not `ai-generated`, because the corollary depends on it.
- **F7.4:** `lem-binomial-series-for-a-repeated-pole` gained `def-binomial-coefficient` and `thm-pascals-rule` in `deps`. Its contract cites the exact binomial definition and hockey-stick clause, and both derivations name the hockey-stick identity and its short induction from Pascal's rule.
- **F7.5:** The Stanley Corollary 4.7.4 row remains `deferred`. Its reason now states that `inner-product-spaces-and-orthogonality` is order 94 and `the-spectral-theorem-and-singular-value-decomposition` is order 141, both below 195, but neither is published or in this pair's declared closure. It also records that the former is in flight in batch 3 and that the latter still depends on the unbuilt `the-fundamental-theorem-of-algebra` and `triangularisation-and-jordan-canonical-form` pages.
- **F7.7:** Removed the complete two-paragraph proposed summary for `linear-recurrences-and-rational-generating-functions-examples`. No B-page summary body remains; the A-page's two paragraphs are unchanged.
- **F7.8:** `def-finite-words-factor-avoidance-and-prefix-states` now depends on `def-natural-numbers`, whose Definition supplies the natural number $n=\{0,\ldots,n-1\}$ as the index set of a finite sequence. Its home page, `construction-of-the-natural-numbers`, is in order 195's declared closure; the out-of-closure free-group word page remains unused.

### Current census

| page | kind | items |
|---|:---:|---:|
| linear-recurrences-and-rational-generating-functions | A | 33 |
| linear-recurrences-and-rational-generating-functions-examples | B | 15 |

The A page remains below the 60-item ceiling. The proof-contract artifact now contains 39 contracts, 117 citations and 0 empty citation arrays. The exact-clause audit found 49 published clauses and 68 pair-local scaffold clauses, with 0 errors.

### Required gate output

All three requested commands exited 0. `validate-plan.mjs` also printed its full repository-wide reading-order table and existing redundant-prerequisite warnings; its exact opening census and closing status were:

~~~text
$ node tools/validate-plan.mjs research/plan-spec.json
plan: 1176 pages (583 A + 583 B + 5 already published), 3879 new items, 4866 existing ids available
item lists written for 244/1171 planned pages — the rest are validated at PAGE level only
3878/3879 planned items already authored into items/
OK — declared page order is acyclic and consistent; no item-level cycles, forward
references, B-page dependencies, or unresolved ids among the 244 page(s) with item lists.
NOTE: 927 planned page(s) carry no item list yet (marked * above). Their reading
order is guaranteed; their item dependencies are not yet asserted, so re-run this
after writing each page's items.

$ node tools/coverage-checklist.mjs research/frontier-13-batch-7.coverage.json
coverage-checklist: 1 page(s), 68 harvested result(s), 0 error(s), 0 warning(s)

$ node tools/content-policy.mjs research/frontier-13-batch-7.pages.json --manifest-only
content-policy: 48 scoped item(s), 0 error(s), 0 warning(s)
~~~

### Dependency-closure and citation audits

The dependency audit resolved every published target to its listing page, treated the foundational `P` pages as non-B homes, checked each home against this pair's transitive declared closure, and checked all current frontier-13 manifests for cross-pair and B-leaf targets:

~~~text
dependency-closure audit: 48 item(s), 2 page(s), 132 dependency edge(s), 73 same-pair edge(s), 59 published edge(s)
unresolved_ids: 0
out_of_closure_published_deps: 0
cross_pair_edges: 0
b_leaf_deps: 0
duplicate_ids: 0
unpublished_deps: 0
published_home_unresolved: 0
local_forward_edges: 0
multiple_published_homes: 0
~~~

The proof-contract citation audit printed:

~~~text
proof-contract citation audit: 39 contract(s), 117 citation(s)
published_exact_clauses: 49
pair_local_exact_scaffold_clauses: 68
empty_citation_arrays: 0
errors: 0
~~~

No blocker. `tools/gates.mjs` was not run.

## Current Step 5 handoff status

The section titled **Step 5 final authoring and gate report** is the current report and supersedes the historical scaffold sections that follow it in file order. Its Batch 6 unresolved-link blocker remains the only non-clean repository-wide gate result at handoff.

## 2026-08-15 — Step 5 final authoring and gate report

This section supersedes the provisional Step 5 counts above and records the current authored files and final author-side checks.

### Items authored

All 47 spliced ids are authored with `status: draft` and `origin: session`, and none contains `verification.audited`.

- A page, 32 items: `def-linear-recurrence-and-recurrence-characteristic-polynomial`, `def-rational-formal-power-series-and-reduced-denominator`, `lem-four-spaces-for-a-fixed-linear-recurrence`, `thm-linear-recurrence-iff-rational-generating-function`, `cor-initial-values-determine-a-linear-recurrence-sequence`, `cor-minimal-recurrence-and-reduced-denominator`, `prop-finite-modification-preserves-rationality-and-eventual-recurrence`, `prop-reciprocity-for-biinfinite-linear-recurrences`, `prop-rational-series-are-closed-under-sums-and-products`, `thm-hadamard-product-of-rational-series-is-rational`, `rem-reciprocal-root-convention-for-recurrences`, `lem-partial-fractions-for-a-split-recurrence-denominator`, `lem-binomial-series-for-a-repeated-pole`, `thm-closed-form-for-a-linear-recurrence-over-a-splitting-field`, `def-companion-matrix-of-a-linear-recurrence`, `prop-companion-matrix-iterates-a-linear-recurrence`, `thm-characteristic-polynomial-of-a-recurrence-companion-matrix`, `cor-cayley-hamilton-recurrences-for-matrix-powers`, `def-fibonacci-and-lucas-sequences`, `def-trace-of-a-square-matrix-over-a-commutative-ring`, `prop-ring-trace-agrees-with-the-published-field-trace`, `def-finite-weighted-digraph-walk-and-transfer-matrix`, `thm-weighted-walks-are-entries-of-transfer-matrix-powers`, `lem-formal-matrix-geometric-series`, `thm-transfer-matrix-cofactor-formula`, `lem-derivative-of-det-i-minus-xa`, `cor-closed-walk-trace-generating-functions`, `cor-eigenvalue-form-of-the-transfer-matrix-trace`, `def-finite-words-factor-avoidance-and-prefix-states`, `def-prefix-automaton-for-a-finite-forbidden-factor-set`, `thm-words-avoiding-finitely-many-factors-have-rational-generating-functions`, and `cor-binary-words-avoiding-a-fixed-factor-have-a-rational-generating-function`.
- B page, 15 items: `ex-fibonacci-generating-function-and-binet-formula`, `ex-lucas-generating-function-and-closed-form`, `ex-repeated-pole-produces-a-polynomial-factor`, `ex-fibonacci-companion-matrix`, `ex-fibonacci-monomer-domino-tilings-by-transfer-matrix`, `ex-lucas-cyclic-tilings-and-the-trace-method`, `ex-closed-walks-in-the-complete-graph`, `ex-binary-words-avoiding-consecutive-ones`, `ex-binary-words-avoiding-101`, `ex-north-east-west-walks-without-immediate-horizontal-reversal`, `cex-a-rational-recurrence-may-need-a-proper-splitting-field`, `fs-recurrence-coefficients-alone-determine-the-sequence`, `fs-split-characteristic-polynomials-give-only-pure-exponentials`, `cex-factorial-generating-series-is-not-rational`, and `fs-transfer-matrix-inversion-needs-a-spectral-radius-hypothesis`.

The A-page body is byte-for-byte the splice receipt's replacement prose after trimming its terminal newline. The B-page body is zero bytes after the closing frontmatter. All 47 item dependency arrays agree exactly with the page manifest. The renderer's YAML parser accepts every item after changing nine mathematical titles from double-quoted to single-quoted YAML scalars; this was a syntax-only repair.

### Provenance rationale summary

The item-by-item provenance table above remains the detailed rationale of record. The final census is 24 `literature-derived`, 20 `ai-altered` and 3 `ai-generated` Statements or Constructions; proofs are 35 `ai-altered`, 3 `ai-generated` and 9 `not-applicable`. The three generated statements are one non-load-bearing example and two non-load-bearing counterexamples. The two false statements that could not legitimately retain generated provenance are source-grounded and tagged `ai-altered`. Definitions and the reciprocal-root remark account for the nine `not-applicable` proof components.

The strict proof contract covers all 38 proof-bearing items with 119 full Definition or Statement citations, 153 numbered derivations and 113 specifically checked boundary cases. Every checked boundary cites the actual authored derivation that resolves it; the repeated scaffold placeholder language has been removed. The current manifest contains 134 dependency edges, each reconciled against item frontmatter.

### Required gate output

The eight required commands were run exactly as dispatched. Six exited 0. `depcheck` and `fwdcheck` exit 1 solely because the Batch 6 item `lem-words-satisfy-the-free-monoid-universal-property` cites the nonexistent id `thm-nat-addition-associative`. That file is outside Batch 7's write scope. The long repository-wide informational listings are omitted; their terminal summaries are reproduced verbatim.

~~~text
$ node tools/tsx-run.mjs tools/precheck.mts
3642 checked, 0 failing — all clean

$ node tools/depcheck.mjs
depcheck: 4638 items (4128 published), 272 pages

2 ERROR(s):
  [dep-unresolved] items/lem-words-satisfy-the-free-monoid-universal-property.md: deps entry "thm-nat-addition-associative" resolves to nothing
  [link-unresolved] items/lem-words-satisfy-the-free-monoid-universal-property.md: wikilink [[thm-nat-addition-associative]] resolves to nothing

FAIL

$ node tools/fwdcheck.mjs
fwdcheck: 4638 items, 0 open forward reference(s), 399 closed, 34 load bearing

1 ERROR(s):
  [link-unplanned] items/lem-words-satisfy-the-free-monoid-universal-property.md: wikilink [[thm-nat-addition-associative]] resolves to nothing and is planned nowhere

FAIL

$ node tools/extcheck.mjs
extcheck: 4638 items, 116 recorded-not-proved, 124 resting on them

119 warning(s):
OK — every recorded-not-proved statement is a cited remark with no proof, and every consequence is marked.

$ node tools/rendercheck.mjs
OK — 4910 file(s): no wikilink inside math, no nested or unbalanced
delimiters, no multiline display block, every math span parses under the real
KaTeX, and every frontmatter block parses under the renderer's
YAML parser.

$ node tools/prosecheck.mjs
4910 file(s) checked. 0 error(s), 568 warning(s).
  library-scope-denial: 206
  count-in-prose: 189
  count-of-this-page: 173

(re-run with --warnings to list them; warnings are heuristic and have legitimate cases)

OK — no positional claim contradicts the spec.

$ node tools/content-policy.mjs research/frontier-13-batch-7.pages.json
content-policy: 47 scoped item(s), 0 error(s), 0 warning(s)

$ node tools/coverage-checklist.mjs research/frontier-13-batch-7.coverage.json
coverage-checklist: 1 page(s), 68 harvested result(s), 0 error(s), 0 warning(s)
~~~

Additional authoring checks exited 0:

~~~text
$ node tools/tsx-run.mjs tools/reflow.mts <38 proof-bearing Batch 7 item paths>
unchanged <each of the 38 item paths>

$ node tools/tsx-run.mjs tools/precheck.mts <38 proof-bearing Batch 7 item paths>
38 checked, 0 failing — all clean

$ node tools/proof-contract.mjs research/frontier-13-batch-7.proof-contracts.json --strict
proof-contract: 0 error(s), 0 warning(s), 38/38 item(s) checked

$ node tools/citecheck.mjs <47 Batch 7 item paths>
citecheck: 47 item(s) scanned

OK — every recognised elementary move cites a home that states it.

$ node tools/rendercheck.mjs <47 Batch 7 item paths> <2 Batch 7 page paths>
OK — 49 file(s): no wikilink inside math, no nested or unbalanced
delimiters, no multiline display block, every math span parses under the real
KaTeX, and every frontmatter block parses under the renderer's
YAML parser.
~~~

### Blocker

The two repository-wide dependency gates cannot be made clean within Batch 7's authorised write scope: Batch 6 must replace or supply `thm-nat-addition-associative` in `items/lem-words-satisfy-the-free-monoid-universal-property.md`. Batch 7 itself is clean under every scoped authoring check. `tools/gates.mjs` was not run.

## 2026-08-15 Step 5 authoring report

### Items authored

All 47 spliced ids are authored as `status: draft`, `origin: session`: 32 A-page items and 15 B-page items. The proof contract covers all 38 proof-bearing items; the remaining nine are definitions or the reciprocal-root remark. The A page carries the splice receipt's exact replacement summary. The B page has no authored body after its frontmatter.

### Authoring-time obligation changes

- `ex-closed-walks-in-the-complete-graph` now declares and uses all three load-bearing dependencies: the weighted-digraph definition, the walk/matrix-power theorem and the conditional eigenvalue trace formula. Its proof is over $\mathbb Q$ and proves the eigenbasis is a basis by deriving $p\alpha=0$; this is valid because $p\ne0$ in $\mathbb Q$. The $p=1$ difference-vector list is empty.
- `lem-formal-matrix-geometric-series` and `thm-transfer-matrix-cofactor-formula` now directly declare `thm-formal-power-series-ring-and-polynomial-embedding`, whose Statement licenses matrix and adjugate arguments over the commutative ring $R\llbracket x\rrbracket$.
- The generated `ex-binary-words-avoiding-101` scaffold formula was false. The three-state matrix gives $(1+x^2)/(1-2x+x^2-x^3)$ and counts $1,2,4,7,12,21,37$ through length six. Its item title, Statement, proof, manifest strategy and manual smoke row were changed together; its dependencies and provenance did not change.
- The finite-forbidden-set theorem now treats $B=\varnothing$ separately as $1/(1-|\Sigma|x)$ before invoking an automaton whose state set needs $B\ne\varnothing$. The word and automaton definitions, theorem proof, dependency list, manifest and boundary worksheet move together.
- The factorial counterexample cites `thm-root-bound-for-polynomials-over-a-domain` directly. It no longer attributes the root bound itself to polynomial division.
- The two scaffold rows that proposed an AI-generated false statement were source-grounded and retagged: `fs-recurrence-coefficients-alone-determine-the-sequence` is an adaptation of the initial-value parametrisation in Stanley, and `fs-transfer-matrix-inversion-needs-a-spectral-radius-hypothesis` is an adaptation of the analytic restriction excluded by Stanley's formal transfer identity. Both are `ai-altered` / `ai-altered` with reader-visible sources.
- The Stanley coverage locator now spans all of Section 4.7 through Example 4.7.16, matching the enumerated headings. The canonical eigenvalue row now records the displayed split-factorisation hypothesis rather than algebraic closure.

The 47 provenance rationales are recorded in the table above. No item has `verification.audited`, no AI-generated Statement is a dependency target, and no external fallback is used.

## 2026-08-15 — Step 3 → 4 scaffold repair, third pass (split hypothesis)

This third pass supersedes only the second pass's algebraically closed route. The other accepted repairs remain unchanged.

- `cor-eigenvalue-form-of-the-transfer-matrix-trace` now assumes directly that $K$ is a field, $p\ge1$, $A\in M_p(K)$, and $\chi_A(t)=\prod_{i<p}(t-\lambda_i)$ in $K[t]$. This is exactly the hypothesis required by both published consumers. Its `deps`, exact citations, input map, and boundary worksheet no longer mention algebraic closure or derive a factorisation from a root-existence statement. Its provenance remains `ai-altered` / `ai-altered`: the statement and proof plan adapt Stanley's eigenvalue reading through the exact hypotheses and conclusions of the published spectral-mapping and trace theorems.
- `ex-closed-walks-in-the-complete-graph` is now stated over $\mathbb Q$. For $A=J-I$, the all-ones vector together with $e_i-e_0$ for $1\le i<p$ gives a basis over $\mathbb Q$ in which $A$ is diagonal with entries $p-1,-1,\ldots,-1$, so $\chi_A(t)=(t-(p-1))(t+1)^{p-1}$ is already a product of linear factors in $\mathbb Q[t]$. The `p=1` boundary leaves the $e_i-e_0$ list empty and is recorded explicitly. The example keeps `provenance.statement: literature-derived` from Stanley Example 4.7.5 and `provenance.proof: ai-altered` for this local factorisation-first proof plan.
- `lem-monic-polynomials-split-over-an-algebraically-closed-field` was removed from the A-page inventory, proof-contract scope, and contract map. It has no coverage row. The second-pass section above remains as the historical record of the superseded repair; the lemma is not present in the current scaffold.
- The Stanley Corollary 4.7.4 row remains `deferred`, but its final sentence now truthfully describes the retained trace formula as conditional on the displayed linear factorisation over $K$. The F7.4 binomial citations, F7.5 disposition and prerequisite reason, F7.7 absence of a B-page summary, and F7.8 `def-natural-numbers` dependency remain in place.

### Current census

| page | kind | items |
|---|:---:|---:|
| linear-recurrences-and-rational-generating-functions | A | 32 |
| linear-recurrences-and-rational-generating-functions-examples | B | 15 |

The A page remains below the 60-item ceiling. The proof-contract artifact contains 38 contracts, 113 citations and 0 empty citation arrays. A fresh exact-clause audit found 46 published clauses and 67 pair-local scaffold clauses, with 0 errors.

### Required gate output

All three requested commands exited 0. `validate-plan.mjs` also printed its full repository-wide reading-order table and existing redundant-prerequisite warnings; its exact opening census and closing status were:

~~~text
$ node tools/validate-plan.mjs research/plan-spec.json
plan: 1176 pages (583 A + 583 B + 5 already published), 3879 new items, 4866 existing ids available
item lists written for 244/1171 planned pages — the rest are validated at PAGE level only
3878/3879 planned items already authored into items/
OK — declared page order is acyclic and consistent; no item-level cycles, forward
references, B-page dependencies, or unresolved ids among the 244 page(s) with item lists.
NOTE: 927 planned page(s) carry no item list yet (marked * above). Their reading
order is guaranteed; their item dependencies are not yet asserted, so re-run this
after writing each page's items.

$ node tools/coverage-checklist.mjs research/frontier-13-batch-7.coverage.json
coverage-checklist: 1 page(s), 68 harvested result(s), 0 error(s), 0 warning(s)

$ node tools/content-policy.mjs research/frontier-13-batch-7.pages.json --manifest-only
content-policy: 47 scoped item(s), 0 error(s), 0 warning(s)
~~~

### Dependency-closure and citation audits

The dependency audit resolved every published dependency to the page that lists it, checked that home against this pair's transitive declared `requires` closure, and checked all current frontier-13 manifests for cross-pair targets, B-page targets and duplicate ids:

~~~text
dependency-closure audit: 47 item(s), 2 page(s), 128 dependency edge(s), 72 same-pair edge(s), 56 published edge(s)
unresolved_ids: 0
out_of_closure_published_deps: 0
cross_pair_edges: 0
b_leaf_deps: 0
duplicate_ids: 0
unpublished_deps: 0
published_home_unresolved: 0
local_forward_edges: 0
multiple_published_homes: 0
~~~

The proof-contract citation audit printed:

~~~text
proof-contract citation audit: 38 contract(s), 113 citation(s)
published_exact_clauses: 46
pair_local_exact_scaffold_clauses: 67
empty_citation_arrays: 0
errors: 0
~~~

No blocker. `tools/gates.mjs` was not run.

### Step 5 supersession note

The earlier **Step 5 final authoring and gate report** is the current handoff report and supersedes this historical third-pass statement of blocker status. Its Batch 6 unresolved-link blocker remains the only non-clean repository-wide gate result.
