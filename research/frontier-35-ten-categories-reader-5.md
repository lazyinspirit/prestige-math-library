# Step 5a reader report — batch 5

Run: `frontier-35-ten-categories`  
Role: reader  
Verdict: both assigned pages pass after four repairs to in-flight items; no uneditable defect or blocker remains.

## Opened assigned inventory

The batch manifest assigns the following two draft pages and 22 items.

### A page

`library/commutative-algebra/homogeneous-resultants-and-projective-intersection-length.md`

- `def-sylvester-resultant-of-binary-forms`
- `lem-binary-resultant-scaling-specialization-and-dehomogenization`
- `thm-binary-resultant-zero-iff-common-geometric-projective-root`
- `lem-finite-variable-polynomial-rings-over-fields-are-ufds`
- `lem-coprime-plane-forms-form-a-homogeneous-regular-sequence`
- `lem-complete-intersection-hilbert-series-two-plane-forms`
- `def-projective-scheme-from-a-homogeneous-quotient`
- `lem-projective-standard-chart-prime-and-local-ring-correspondence`
- `lem-standard-open-affine-chart-of-a-projective-quotient`
- `cor-no-common-component-projective-plane-intersection-is-zero-dimensional`
- `lem-zero-dimensional-projective-scheme-has-finite-local-charts`
- `def-total-length-of-a-zero-dimensional-projective-scheme`
- `lem-localisation-of-a-graded-ring-at-a-homogeneous-element`
- `lem-spectrum-of-a-finite-product-ring-is-a-disjoint-union`
- `lem-base-change-of-a-zero-dimensional-projective-quotient`
- `lem-eventual-hilbert-function-equals-zero-dimensional-projective-length`
- `thm-projective-plane-complete-intersection-total-length`
- `cor-projective-plane-bezout-length-form`

### B page

`library/commutative-algebra/homogeneous-resultants-and-projective-intersection-length-examples.md`

- `ex-binary-resultant-two-linear-forms`
- `ex-resultant-detects-root-at-infinity`
- `ex-hilbert-series-plane-complete-intersection`
- `ex-length-intersection-tangent-line-conic`

All listed page and item files were opened and read. The A-page summary and B-page summary accurately describe their contents.

## Dependency and source checks

I opened the dependency statements used in the repairs and the substantive chain checks:

- `def-projective-space-points` (its projective-point convention is stated for algebraically closed fields)
- `lem-gauss-lemma-over-a-ufd`
- `thm-polynomial-ring-over-a-field-is-a-ufd`
- `def-irreducible-and-prime-elements-in-a-domain`
- `cor-dimension-of-a-finite-polynomial-ring-over-a-field`
- `thm-krull-height-theorem`
- `lem-minimal-prime-over-an-ideal-exists`
- `cor-noether-normalisation-module-finiteness`
- `cor-integral-extension-lifts-finite-prime-chains`
- `thm-structure-theorem-for-artinian-rings`
- `thm-artinian-ring-primes-are-maximal`
- `cor-finite-variable-polynomial-ring-noetherian`
- `cor-finite-type-algebra-over-noetherian-ring-is-noetherian`
- `thm-noetherian-ring-has-noetherian-spectrum`

I also checked the relevant source passages:

- J. S. Milne, *Algebraic Geometry*, v6.10, Propositions 1.27–1.31 and Theorem 1.32, pp. 22–24, establish the content/Gauss-lemma facts and that a polynomial ring over a field is a UFD: <https://www.jmilne.org/math/CourseNotes/AG.pdf>.
- Milne, Proposition 7.28, pp. 166–167, states that the homogeneous resultant vanishes exactly when the two binary forms have a common zero in projective one-space; it treats a vanishing leading coefficient as the point `[1:0]`, and otherwise reduces to an affine common root: <https://www.jmilne.org/math/CourseNotes/AG.pdf>.
- Milne, Remark 6.38, pp. 153–154, gives local intersection multiplicity at a proper intersection point as the vector-space dimension of the local ring modulo the two local equations: <https://www.jmilne.org/math/CourseNotes/AG.pdf>.
- Stacks Project, Section 27.8, Lemmas 27.8.4 and 27.8.7, identify standard opens of Proj as affine and give their coordinate rings by the degree-zero part of homogeneous localization: <https://stacks.math.columbia.edu/tag/01M3>.
- Stacks Project, Lemma 33.20.2 (tag 06LH), states that a locally algebraic zero-dimensional scheme over a field is a disjoint union of spectra of finite-dimensional local Artinian algebras; its algebraic case is finite: <https://stacks.math.columbia.edu/tag/06LH>.
- Stacks Project, Lemma 10.21.2 (tag 00ED), identifies the spectrum of a finite product of rings with the disjoint union of their spectra: <https://stacks.math.columbia.edu/tag/00ED>.
- A. Gathmann, *Algebraic Geometry* notes, Lemma 6.1.4 and Remark 6.1.6, pp. 93–94: for a zero-dimensional projective subscheme over an algebraically closed field, the Hilbert function is eventually the dimension of its finite-dimensional affine coordinate algebra; the remark says the same eventual Hilbert polynomial is obtained from a nonsaturated homogeneous ideal. <https://agag-gathmann.math.rptu.de/class/alggeom-2002/alggeom-2002.pdf>.

## Repairs made

Only four assigned in-flight items were edited. Their batch proof-contract entries were updated. None of the four current items had an item-level `verification.judge` record to remove; no historical review artifact was edited.

1. **`lem-finite-variable-polynomial-rings-over-fields-are-ufds`** — repaired the content/factorization argument. The previous argument multiplied over all irreducible elements, which can include infinitely many associates, and misplaced the scalar when passing from primitive associates to the chosen irreducible representatives. The repair indexes valuations by associate classes, chooses one representative from each of the finitely many classes appearing in the factorization, and writes `$f^*=u\prod_j g_j$`. From `$a_jg_j=d_jh_j$`, it obtains `$g_j=(d_j/a_j)h_j$`, so the scalar in the product is `$u\prod_j(d_j/a_j)$`; the content comparison then shows that scalar is a unit. This uses the opened Gauss-lemma and polynomial-UFD dependency statements.

2. **`ex-binary-resultant-two-linear-forms`** — repaired the zero-form case. The former proof said `$[1:0]$` is a common root whenever `$G=0$`, which need not hold when `$F\ne0$`. It now uses the explicit projective root `$[b:-a]$` for `$F=aX+bY\ne0$`, and any projective point when both forms vanish. The example now phrases the points over an algebraic closure `$K$`, matching the opened `def-projective-space-points` convention and the resultant theorem's geometric-root conclusion.

3. **`ex-resultant-detects-root-at-infinity`** — changed the point-at-infinity assertion from `$\mathbf P^1(k)$` to `$\mathbf P^1(K)$`, with `$K$` an algebraic closure, in the statement and proof. The cited projective-points definition requires an algebraically closed field. The leading-coefficient test itself agrees with Milne, Proposition 7.28, where a vanishing top coefficient gives the root `$[1:0]$`.

4. **`cor-no-common-component-projective-plane-intersection-is-zero-dimensional`** — supplied missing Noetherian hypotheses. The cited Krull Height Theorem requires the ambient ring to be Noetherian, and the cited chain-dimension definition applies to Noetherian spaces. The proof now establishes that `$k[x_0,x_1,x_2]$` is Noetherian, then that each standard chart ring is a finite-type `$k$`-algebra and hence Noetherian, that each chart spectrum is Noetherian, and that the finite standard-chart cover makes `$X$` Noetherian. The item dependencies and contract citations now include `cor-finite-variable-polynomial-ring-noetherian`, `cor-finite-type-algebra-over-noetherian-ring-is-noetherian`, and `thm-noetherian-ring-has-noetherian-spectrum`.

### Required validation

Each changed item was reflowed and prechecked after its contract update:

| Item | Reflow | Precheck |
| --- | --- | --- |
| `lem-finite-variable-polynomial-rings-over-fields-are-ufds` | passed (unchanged) | passed (induction) |
| `ex-binary-resultant-two-linear-forms` | passed | passed (direct) |
| `ex-resultant-detects-root-at-infinity` | passed | passed (direct) |
| `cor-no-common-component-projective-plane-intersection-is-zero-dimensional` | passed (unchanged) | passed (direct) |

## Uneditable defects and page verdicts

- Uneditable defects: none identified.
- A page: pass after the repair to its UFD lemma and Noetherian-hypothesis repair. The remaining resultant, regular-sequence, Hilbert-series, Proj-chart, local-length, base-change, and total-length arguments were coherent under their stated hypotheses; no A-page prose edit was needed.
- B page: pass after repairs to the two examples' projective-point field conventions and the zero-form case. The Hilbert-series and tangent-line/conic computations checked out; no B-page prose edit was made.
- Blocker: none.

## Coverage limitation

All two assigned pages and all 22 assigned items were opened. I checked the dependency statements listed above and the cited source passages, but did not independently re-prove every dependency's own proof throughout its transitive closure. The conclusions here are limited to the assigned batch and the dependency steps needed for this review.
