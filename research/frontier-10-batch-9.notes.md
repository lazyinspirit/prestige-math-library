# Beta-frontier-10-9 — Step-2 scaffold notes

This is the durable reasoning and authoring record for the two pairs assigned to
batch 9. It proposes no edit to a published item or normative file. The machine
scaffold is frontier-10-batch-9.pages.json; the canonical harvest and proof maps
are the sibling coverage and proof-contract files.

## 1. Result and split decision

The scaffold has 67 items after the Step-3 batch-5 determinant-interface repair:

| order | page | kind | items |
|---:|---|:---:|---:|
| 80 | gaussian-elimination-and-row-reduction | A | 29 |
| 81 | gaussian-elimination-and-row-reduction-examples | B | 8 |
| 82 | determinants-of-matrices-over-a-commutative-ring | A | 24 |
| 83 | determinants-of-matrices-over-a-commutative-ring-examples | B | 6 |

No split is proposed. The A pages contain 29 and 24 items, respectively, both
well below the binding 60-item limit. Nothing was dropped to obtain those
counts.

The determinant page has two intentional additions to the dispatch-level page
requirements: it requires gaussian-elimination-and-row-reduction and
polynomial-rings-and-roots. The
determinant row-operation interface uses the ring-level row-transformation seam
defined locally, while that seam explicitly reconciles its reversible field
cases with the Gaussian page. Order 80 is backward from order 82, so this
creates no cycle. The polynomial page is at order 52 and supplies the formal
finite multivariate-polynomial interface used by the new determinant-polynomial
corollary.

## 2. Complete per-page reading order

### gaussian-elimination-and-row-reduction — 29 items

| # | id | kind | purpose |
|---:|---|---|---|
| 1 | def-elementary-row-operations-and-row-equivalence | definition | three reversible field row operations and row equivalence |
| 2 | lem-elementary-row-operations-are-reversible | lemma | inverse operations and the equivalence relation |
| 3 | def-elementary-matrix | definition | row operations applied to an identity matrix |
| 4 | thm-elementary-row-operations-are-left-multiplication | theorem | the elementary-matrix action |
| 5 | cor-elementary-matrices-are-invertible | corollary | inverse is the reverse operation |
| 6 | cor-a-row-reduction-is-a-product-of-elementary-matrices | corollary | encode a finite reduction by a product |
| 7 | def-matrix-equation-augmented-matrix-and-linear-system | definition | \(Ax=b\), consistency, homogeneity and \([A\mid b]\) |
| 8 | thm-row-operations-preserve-solution-sets | theorem | exact solution-set invariance |
| 9 | def-row-echelon-reduced-row-echelon-and-pivots | definition | REF, RREF and pivot vocabulary |
| 10 | thm-gaussian-elimination-produces-row-echelon-form | theorem | constructive elimination |
| 11 | thm-gauss-jordan-elimination-produces-reduced-row-echelon-form | theorem | constructive backward elimination |
| 12 | thm-reduced-row-echelon-form-is-unique | theorem | canonical RREF |
| 13 | def-row-space-column-space-nullspace-and-matrix-ranks | definition | the three spaces and finite ranks |
| 14 | lem-row-operations-preserve-row-space | lemma | row-space/rank invariance |
| 15 | lem-nonzero-echelon-rows-form-a-basis-of-the-row-space | lemma | row-rank basis |
| 16 | thm-row-equivalence-characterisations | theorem | row equivalence, row space and RREF |
| 17 | lem-row-operations-preserve-column-relations | lemma | column relations and column rank |
| 18 | thm-pivot-columns-form-a-basis-of-the-column-space | theorem | original pivot-column basis |
| 19 | thm-row-rank-equals-column-rank | theorem | equality through pivot count |
| 20 | cor-matrix-rank-equals-the-rank-of-its-linear-map | corollary | matrix/linear-map rank seam |
| 21 | cor-matrix-rank-nullity | corollary | \(\operatorname{rank}A+\dim N(A)=n\) |
| 22 | def-affine-subspace-of-a-vector-space | definition | translates of linear subspaces |
| 23 | thm-solution-set-is-an-affine-nullspace | theorem | \(x_p+N(A)\) |
| 24 | thm-rref-consistency-and-free-variable-parametrisation | theorem | full RREF solution algorithm |
| 25 | cor-rank-criterion-for-consistency | corollary | \(\operatorname{rank}A=\operatorname{rank}[A\mid b]\) |
| 26 | cor-solution-count-trichotomy-over-an-infinite-field | corollary | zero, one or infinitely many solutions |
| 27 | thm-invertible-matrix-theorem | theorem | pivot/rank/kernel/solvability equivalences |
| 28 | thm-invertible-matrices-factor-into-elementary-matrices | theorem | required real elementary factorisation |
| 29 | cor-inverse-by-row-reducing-an-augmented-matrix | corollary | the \([A\mid I]\) algorithm |

The rank definition must prove its own well-definedness: the finite row and
column lists span their respective spaces, and a greedy induction deletes
dependent entries until a finite basis remains. The Step-5 item must not merely
write \(\dim\) before establishing finite dimensionality.

### gaussian-elimination-and-row-reduction-examples — 8 items

1. ex-row-reduction-with-a-unique-solution — a \(3\times3\) unique solution.
2. ex-inconsistent-system-detected-by-a-pivot — an augmented pivot.
3. ex-infinite-solution-affine-parametrisation — two free parameters.
4. ex-inverse-by-augmented-row-reduction — a \(3\times3\) inverse.
5. ex-row-echelon-form-is-not-unique-but-rref-is — two REF outputs, one RREF.
6. ex-parameter-dependent-rank-drop — one exceptional parameter.
7. ex-elementary-factorisation-of-an-invertible-matrix — an explicit product.
8. cex-row-equivalent-matrices-can-have-different-column-spaces — rank is
   preserved but the literal column space need not be.

### determinants-of-matrices-over-a-commutative-ring — 24 items

| # | id | kind | purpose |
|---:|---|---|---|
| 1 | def-matrices-over-a-commutative-ring | definition | ring-valued finite matrices |
| 2 | def-ring-matrix-product-identity-and-transpose | definition | the ring matrix operations |
| 3 | thm-ring-matrix-arithmetic-laws | theorem | associativity, units, distributivity and transpose |
| 4 | def-invertible-matrix-and-similarity-over-a-commutative-ring | definition | ring-level inverse and similarity |
| 5 | prop-field-and-ring-matrix-interfaces-agree | proposition | exact seam with batch 1 |
| 6 | def-multilinear-alternating-normalized-and-antisymmetric-matrix-functions | definition | determinant-characterising vocabulary |
| 7 | lem-alternating-multilinear-implies-antisymmetric | lemma | polarisation without dividing by \(2\) |
| 8 | lem-rigidity-of-alternating-multilinear-matrix-functions | lemma | permutation expansion of every such function |
| 9 | def-determinant-of-a-square-matrix | definition | required Leibniz determinant, \(n\ge1\), and \(\lvert\det A\rvert\) over \(\mathbb R\) |
| 10 | cor-determinant-is-a-polynomial-in-the-matrix-entries | corollary | explicit polynomial in the \(n^2\) real entries |
| 11 | thm-leibniz-determinant-is-alternating-multilinear-and-normalized | theorem | existence half of the characterisation |
| 12 | thm-determinant-is-the-unique-normalized-alternating-multilinear-function | theorem | uniqueness half |
| 13 | cor-determinant-vanishes-with-a-zero-or-repeated-column | corollary | two basic vanishing tests |
| 14 | thm-determinant-of-transpose | theorem | transpose invariance |
| 15 | cor-determinant-is-alternating-multilinear-in-the-rows | corollary | transfer to rows |
| 16 | def-row-transformations-over-a-commutative-ring | definition | swaps, arbitrary scaling and row additions; reversible cases distinguished |
| 17 | thm-determinant-under-elementary-row-operations | theorem | required row laws, with no nonsingularity assumption |
| 18 | def-triangular-and-diagonal-matrices-over-a-commutative-ring | definition | triangular vocabulary |
| 19 | thm-determinant-of-a-triangular-matrix | theorem | diagonal product |
| 20 | thm-determinant-multiplicative | theorem | required \(\det(AB)=\det A\det B\) |
| 21 | cor-invertible-matrix-has-unit-determinant | corollary | ring-valued invertibility consequence |
| 22 | thm-real-square-matrix-invertible-iff-determinant-nonzero | theorem | real-field invertibility criterion needed by batch 5 |
| 23 | cor-determinant-of-an-inverse | corollary | determinant of \(A^{-1}\) |
| 24 | cor-determinant-is-invariant-under-similarity | corollary | ring similarity invariant |

The two local seam definitions are load bearing. Batch 1's matrix interface is
over fields, so it cannot define invertibility or similarity over an arbitrary
commutative ring. Likewise the Gaussian definition makes nonzero row scaling
reversible over a field; over a ring a nonzero scalar can be a nonunit. The
ring row-transformation definition therefore names all three syntactic
transformations, calls only the reversible cases elementary equivalences, and
the determinant theorem proves the scaling formula for every scalar. This is
stronger than the requested nonzero-scalar clause and lets the proof cover zero
divisors without cancellation.

The real invertibility criterion is deliberately not stated over an arbitrary
commutative ring. Over a general commutative ring the exact criterion is that
the determinant be a unit, and the converse needs adjugate/cofactor machinery
assigned to the following determinant page. Batch 5 needs only real matrices,
and the real-field converse closes now by row reduction, so the exact requested
real id is the honest boundary. The polynomial corollary is likewise stated in
the exact real form needed downstream: for fixed \(n\ge1\), the Leibniz sum is
a polynomial in the \(n^2\) real coordinate entries.

### determinants-of-matrices-over-a-commutative-ring-examples — 6 items

1. ex-two-by-two-determinant-formula — \(ad-bc\).
2. ex-three-by-three-leibniz-expansion — all six signed terms.
3. ex-integer-determinant-two-is-invertible-over-q-not-z — use
   \(\operatorname{diag}(2,1)\).
4. cex-antisymmetric-need-not-be-alternating-in-characteristic-two — use
   \(B(x,y)=x_0y_0\) over \(\mathbb Z/2\).
5. cex-naive-quaternion-determinant-is-not-row-alternating — for the equal-row
   matrix with rows \((i,j)\), the naive formula gives \(ij-ji=2k\ne0\).
   “Equal columns” would be false for \(ad-bc\) and was removed during audit.
6. ex-row-operations-on-a-singular-matrix-over-z-mod-six — start from
   \(A=\operatorname{diag}(2,1)\) over \(\mathbb Z/6\). Its determinant \(2\)
   is a nonunit, so \(A\) is not invertible. Swapping rows gives determinant
   \(4=-2\), scaling by the nonzero nonunit \(3\) gives \(0=3\cdot2\), and a
   row addition leaves \(2\) unchanged.

## 3. Exact two-paragraph page summaries for Step 4

### Gaussian A

Gaussian elimination replaces a finite matrix over a field by row-equivalent
echelon forms using reversible elementary row operations. This page defines
those operations and their elementary matrices, proves that a whole reduction
is left multiplication by a product of invertible elementary matrices, and
gives constructive Gaussian and Gauss–Jordan algorithms. Reduced row echelon
form is unique, so pivot positions and free variables are canonical even though
an ordinary echelon form is not.

The same machinery identifies bases for row and column spaces, proves equality
of row rank and column rank, and connects matrix rank with the rank of the
associated linear map. It then describes every consistent system as an affine
translate of its nullspace, gives the rank consistency criterion and solution
trichotomy, and packages the square case as the invertible matrix theorem.
Every invertible finite square real matrix consequently factors into elementary
matrices, and its inverse can be computed by reducing \([A\mid I]\).

### Gaussian B

The examples carry out elimination rather than treating it as a black box:
they exhibit systems with a unique solution, no solution and a two-parameter
affine solution set, compute an inverse from an augmented matrix, and show how a
single parameter can change both rank and solution behaviour. A separate
calculation records two distinct echelon forms with the same unique reduced row
echelon form.

The final examples expose the structural content behind the computations. One
reverses a row reduction to display an explicit elementary-matrix
factorisation, while the counterexample shows that row operations preserve all
linear relations among columns and hence column rank without preserving the
literal column space.

### Determinant A

For \(n\ge1\), this page defines the determinant of an \(n\times n\) matrix over
a commutative ring by the Leibniz sum over permutations. Because the earlier
matrix page is field-valued, the page first builds the required ring-valued
matrix arithmetic, inverse and similarity interfaces and proves that they
specialise exactly to the established field interface. It then proves that the
Leibniz function is normalized, alternating and multilinear, and that these
properties uniquely determine it. For each fixed positive size, the same
Leibniz expression exhibits the real determinant as a polynomial in the matrix
entries; \(\lvert\det A\rvert\) is also fixed for real matrices.

Transpose invariance transfers the column laws to rows. Consequently row swaps
negate the determinant, scaling a row by any scalar scales it, and adding a
multiple of another row leaves it unchanged, with singular matrices and rings
with zero divisors included. The determinant of a triangular matrix is the
product of its diagonal entries, determinants multiply over every commutative
ring, and invertibility, inverses and similarity yield the expected unit and
invariance corollaries. Specializing to real matrices and using row reduction
also proves that invertibility is equivalent to nonzero determinant.

### Determinant B

The first examples expand the Leibniz definition in sizes two and three, making
the permutation signs visible. The integer matrix
\(\operatorname{diag}(2,1)\) then separates invertibility over \(\mathbb Q\)
from invertibility over \(\mathbb Z\), and a characteristic-two bilinear form
shows why antisymmetry alone is weaker than alternation when \(2=0\).

Two boundary examples show exactly where hypotheses matter. The naive
quaternionic expression \(ad-bc\) can be nonzero on equal rows because
multiplication is not commutative. Over \(\mathbb Z/6\), a singular matrix with
nonzero determinant undergoes a swap, a nonunit scaling and a row addition,
confirming the row-operation formulas without division or any hidden
nonsingularity assumption.

## 4. Canonical-coverage harvest and source ledger

The harvest enumerates 126 source or canonical headings. Its disposition
totals are:

| pair | included | inline | deferred | out of scope |
|---|---:|---:|---:|---:|
| Gaussian | 55 | 19 | 0 | 0 |
| determinant | 37 | 6 | 7 | 2 |
| total | 92 | 25 | 7 | 2 |

Thus 92 harvested headings become separate scaffolded items and 25 are absorbed
inline; 9 are declined. Repeated headings from independent sources are counted
independently, as the checklist requires. The Step-3 repair changes three JSON
heading rows but only two result-level dispositions: ILA's invertibility
criterion occurs once in the broad PDF harvest under the Gaussian pair and once
in the determinant-specific HTML harvest, and both now point to the same new
theorem; Massot's polynomial-evaluation observation now points to the new
corollary.

Source codes used below:

- G — Dan Margalit and Joseph Rabinoff, _Interactive Linear Algebra_.
  <https://textbooks.math.gatech.edu/ila/ila.pdf>. Gaussian ranges:
  §§1.2, 1.3, 2.4, 2.7, 2.9, 3.5 and 3.6 exactly as enumerated in the harvest.
  Determinant range: all of §4.1.1–§4.1.2. This is the controlling
  computational textbook and directly supplies the real invertibility
  criterion proved by row reduction. The book states GNU FDL 1.2 or later,
  with no invariant sections or cover texts.
- H — Jim Hefferon, _Linear Algebra_, fourth edition.
  <https://jheffero.w3.uvm.edu/linearalgebra/book.pdf>. Read Chapter One
  §§III.1–III.2, Chapter Two §III.3 and Chapter Three §§IV.3–IV.4 in the exact
  result ranges listed in the harvest. It independently supports uniqueness of
  RREF, row/column ranks and elementary factorisation. The author's repository
  offers the text under GNU FDL or Creative Commons Attribution-ShareAlike; no
  source prose is copied here.
- W — Stephen New, _MATH 146 Linear Algebra 1 Lecture Notes_.
  <https://www.math.uwaterloo.ca/~snew/MATH245/math146notes.pdf>. Read Chapter
  4, Notation 4.16 through Example 4.27 (PDF pp. 26–30). This is the primary
  commutative-ring treatment: alternating maps, the permutation formula,
  uniqueness, determinant laws, transpose, triangular matrices and
  multiplicativity. No explicit reuse licence was located; it is used only as
  a factual reference and no wording is copied.
- M — Patrick Massot, _Structures algébriques fondamentales_, §6.4.
  <https://www.imo.universite-paris-saclay.fr/~patrick.massot/enseignement/poly_alg/cha-algebres.html>.
  Read Definition 6.4.1 through Proposition 6.4.3. It independently supports
  the alternating-multilinear construction, the Leibniz formula, its
  polynomial-evaluation interpretation, transpose, triangular determinants and
  multiplicativity. No explicit reuse licence was located; again, only the
  mathematical facts and proof architecture are used.

All Step-5 prose and derivations will be freshly written in house style.
There is no scraped source and no external fallback.

### Declines most likely to be challenged

- ILA's worked row-reduction determinant recipe remains deferred to the next
  planned determinant examples page, where it is paired with cofactor
  expansion. The theorem that licenses the recipe is already included here.
- W's bilinear-form representation theorem belongs to the later
  dual-spaces/bilinear-forms page; it is not determinant machinery.
- M's cofactor/adjugate identity is deferred to the next determinant page with
  Cramer's rule. The present repeated-column lemma is deliberately built as its
  prerequisite.
- M's Sylvester identity remains out of scope: its proof uses universal
  polynomial-ring and integral-domain machinery, and the secondary identity is
  not used by the determinant spine or batch 5. The polynomial-evaluation
  observation itself is no longer declined; the already scaffolded order-52
  multivariate-polynomial interface is sufficient to state and prove it.
- A rigorous signed-volume interpretation is out of scope because the plan
  assigns it to later measure/orientation machinery. The current interface
  still exposes \(\lvert\det A\rvert\), as the dispatch requires.

The Gaussian harvest now has no decline: its duplicated ILA \(2\times2\)
invertibility heading points to the determinant theorem on the second pair.

## 5. Published and same-run dependency audit

I opened the published page files
library/abstract-algebra/rings-subrings-and-integral-domains.md and
library/combinatorics/finite-counting-and-binomial-coefficients.md, then opened
every published item cited by the scaffold. Each was status: published; none
has an ai-generated Statement, none is legacy-unclassified, and no unambiguous
falsehood was found.

Confidence routes:

- D-L means the exact on-disk Statement/Definition was read, its provenance is
  literature-derived, and its domain, hypotheses and direction agree with the
  use here.
- D-A means the exact on-disk Statement/Definition was read, its provenance is
  ai-altered, and the exact convention was checked against its cited standard
  source or by the elementary derivation visible in the item. These items are
  eligible but were not auto-trusted.

D-L (13): def-abs-value, def-commutative-ring, def-function,
def-linear-subspace, def-natural-numbers, def-rank-and-nullity,
thm-induction-principle, thm-int-comm-ring,
thm-linear-kernel-image-and-injectivity, thm-rank-nullity, thm-rat-field,
thm-reals-field, thm-z-mod-p-is-a-field.

D-A (24): def-countable, def-dimension, def-field, def-finite-cardinality,
def-finite-sum-in-a-commutative-monoid, def-integers-modulo-n,
def-invertible-element, def-linear-basis, def-linear-combination-and-span,
def-linear-independence, def-matrix-space, def-monoid-finite-product,
def-quaternions, def-vector-space, lem-field-is-a-commutative-ring,
lem-finite-sum-reindexing-and-fubini, lem-inverse-unique,
lem-ring-elementary-consequences, lem-ring-units-form-a-group, lem-units-of-z,
thm-integers-modulo-n-basic-algebra, thm-number-of-bijections-of-a-finite-set,
thm-quaternions-form-a-division-ring, thm-reals-ordered-field.

The same-run dependencies were read from
research/frontier-10-batch-1.pages.json and
research/frontier-10-batch-3.pages.json, not invented. They all occur on A
pages at orders 44, 52 or 78, before orders 80 and 82:

- sign page, order 44:
  def-inversions-inversion-number-and-sign,
  lem-a-transposition-reverses-inversion-sign,
  thm-transpositions-generate-the-symmetric-group,
  thm-parity-of-transposition-factorisations-is-well-defined, and
  thm-sign-is-a-homomorphism;
- matrix page, order 78:
  def-matrix-product-and-identity-matrix, thm-matrix-multiplication-laws,
  def-transpose-of-a-matrix, thm-coordinate-action-of-a-linear-map,
  def-invertible-matrix-and-general-linear-group,
  thm-invertible-matrices-correspond-to-linear-isomorphisms, and
  def-similar-matrices;
- polynomial page, order 52:
  def-multivariate-polynomial-ring-by-iteration and
  def-polynomial-evaluation-and-root. Batch 3 records the first Statement as
  literature-derived and the second as a source-backed adaptation of Donaldson
  and McKernan, so both are eligible load-bearing dependencies rather than
  generated bridges.

The dependency-closure check found 37 published external ids, 14 same-run
earlier ids, no missing target and no same-page forward dependency.

## 6. Expected component provenance for every planned item

Codes: LD = literature-derived, AA = ai-altered, AG = ai-generated, and NA =
not-applicable. The last column gives the exact source code whose URL is in §4,
or says direct when the component is a checkable local construction. An
ai-generated proof does not change the Statement label.

### Gaussian A

| id | statement | proof | source and reason |
|---|:---:|:---:|---|
| def-elementary-row-operations-and-row-equivalence | LD | NA | G/H definitions, restricted faithfully to a field |
| lem-elementary-row-operations-are-reversible | LD | AA | H; write the three inverse operations |
| def-elementary-matrix | LD | NA | H definition |
| thm-elementary-row-operations-are-left-multiplication | LD | AA | H; adapted to the published matrix product |
| cor-elementary-matrices-are-invertible | LD | AA | H; reverse-operation proof |
| cor-a-row-reduction-is-a-product-of-elementary-matrices | LD | AA | H; induction and batch-1 associativity |
| def-matrix-equation-augmented-matrix-and-linear-system | LD | NA | G definitions |
| thm-row-operations-preserve-solution-sets | LD | AA | G; reversible equation transformations |
| def-row-echelon-reduced-row-echelon-and-pivots | LD | NA | G/H definitions |
| thm-gaussian-elimination-produces-row-echelon-form | LD | AA | G/H constructive induction |
| thm-gauss-jordan-elimination-produces-reduced-row-echelon-form | LD | AA | G/H backward pivot clearing |
| thm-reduced-row-echelon-form-is-unique | LD | AA | H theorem, with the direct pivot proof |
| def-row-space-column-space-nullspace-and-matrix-ranks | AA | NA | G/H definitions combined; finite-basis well-definedness proved inline |
| lem-row-operations-preserve-row-space | LD | AA | H |
| lem-nonzero-echelon-rows-form-a-basis-of-the-row-space | LD | AA | H |
| thm-row-equivalence-characterisations | LD | AA | H, equal-sized matrices only |
| lem-row-operations-preserve-column-relations | LD | AA | G/H; use the invertible left multiplier |
| thm-pivot-columns-form-a-basis-of-the-column-space | LD | AA | G |
| thm-row-rank-equals-column-rank | LD | AA | G/H; compare both pivot bases |
| cor-matrix-rank-equals-the-rank-of-its-linear-map | LD | AA | G plus the batch-1 coordinate action |
| cor-matrix-rank-nullity | LD | AA | G plus published rank-nullity |
| def-affine-subspace-of-a-vector-space | LD | NA | G definition |
| thm-solution-set-is-an-affine-nullspace | LD | AA | G |
| thm-rref-consistency-and-free-variable-parametrisation | LD | AA | G constructive recipe, generalized to a field |
| cor-rank-criterion-for-consistency | LD | AA | H |
| cor-solution-count-trichotomy-over-an-infinite-field | LD | AA | G; inject the infinite field through a free parameter |
| thm-invertible-matrix-theorem | LD | AA | G equivalence chain |
| thm-invertible-matrices-factor-into-elementary-matrices | LD | AA | H; specialize to \(\mathbb R\) exactly as dispatched |
| cor-inverse-by-row-reducing-an-augmented-matrix | LD | AA | G |

### Gaussian B

| id | statement | proof | source and reason |
|---|:---:|:---:|---|
| ex-row-reduction-with-a-unique-solution | AA | AG | G example pattern; explicit arithmetic witness |
| ex-inconsistent-system-detected-by-a-pivot | AA | AG | G example pattern; explicit arithmetic witness |
| ex-infinite-solution-affine-parametrisation | AA | AG | G example pattern; explicit affine witness |
| ex-inverse-by-augmented-row-reduction | AA | AG | G example pattern; multiply to verify the inverse |
| ex-row-echelon-form-is-not-unique-but-rref-is | LD | AG | H states the phenomenon; display and verify both reductions |
| ex-parameter-dependent-rank-drop | AA | AG | H exercise pattern; exhaustive parameter split |
| ex-elementary-factorisation-of-an-invertible-matrix | AA | AG | H construction; multiply the displayed factors |
| cex-row-equivalent-matrices-can-have-different-column-spaces | LD | AG | H Remark 3.15; explicit two-matrix witness |

### Determinant A

| id | statement | proof | source and reason |
|---|:---:|:---:|---|
| def-matrices-over-a-commutative-ring | LD | NA | W Notation 4.16, reconciled with the library's indices |
| def-ring-matrix-product-identity-and-transpose | AA | NA | W/M plus the existing field formulas; ring-valued seam |
| thm-ring-matrix-arithmetic-laws | LD | AA | W/M; entrywise proof using finite Fubini |
| def-invertible-matrix-and-similarity-over-a-commutative-ring | AA | NA | standard monoid inverse specialized to the matrix monoid |
| prop-field-and-ring-matrix-interfaces-agree | AA | AG | direct comparison with batch 1; no downstream item depends on it |
| def-multilinear-alternating-normalized-and-antisymmetric-matrix-functions | LD | NA | W Definition 4.17 |
| lem-alternating-multilinear-implies-antisymmetric | LD | AA | W Theorem 4.19; polarisation without division |
| lem-rigidity-of-alternating-multilinear-matrix-functions | LD | AA | W Theorem 4.20/M Definition 6.4.1 |
| def-determinant-of-a-square-matrix | LD | NA | W/M Leibniz formula; G for real absolute value convention |
| cor-determinant-is-a-polynomial-in-the-matrix-entries | LD | AA | M's polynomial-evaluation observation; proof adapted to batch 3's formal finite multivariate-polynomial interface |
| thm-leibniz-determinant-is-alternating-multilinear-and-normalized | LD | AA | W/M; finite reindexing proof |
| thm-determinant-is-the-unique-normalized-alternating-multilinear-function | LD | AA | W/M |
| cor-determinant-vanishes-with-a-zero-or-repeated-column | LD | AA | W Theorem 4.19 |
| thm-determinant-of-transpose | LD | AA | W/M; inverse-permutation reindexing |
| cor-determinant-is-alternating-multilinear-in-the-rows | LD | AA | W/M; transpose transfer |
| def-row-transformations-over-a-commutative-ring | AA | NA | G/W formulas; nonunit ring scalings distinguished |
| thm-determinant-under-elementary-row-operations | LD | AA | G/W; row multilinearity with no cancellation |
| def-triangular-and-diagonal-matrices-over-a-commutative-ring | LD | NA | W/G definitions |
| thm-determinant-of-a-triangular-matrix | LD | AA | W/G |
| thm-determinant-multiplicative | LD | AA | W Theorem 4.24/M Lemma 6.4.2; rigidity proof |
| cor-invertible-matrix-has-unit-determinant | LD | AA | W/G, generalized faithfully to a commutative ring |
| thm-real-square-matrix-invertible-iff-determinant-nonzero | LD | AA | G Invertibility Property; two directions adapted to the ring/field seam and the Gaussian RREF interface |
| cor-determinant-of-an-inverse | LD | AA | W/G |
| cor-determinant-is-invariant-under-similarity | LD | AA | W/G |

### Determinant B

| id | statement | proof | source and reason |
|---|:---:|:---:|---|
| ex-two-by-two-determinant-formula | LD | AA | G/W two-permutation specialization |
| ex-three-by-three-leibniz-expansion | LD | AA | W/M six-permutation specialization |
| ex-integer-determinant-two-is-invertible-over-q-not-z | AG | AG | direct witness \(\operatorname{diag}(2,1)\); leaf |
| cex-antisymmetric-need-not-be-alternating-in-characteristic-two | LD | AG | W Theorem 4.19 boundary; explicit \(B(x,y)=x_0y_0\) |
| cex-naive-quaternion-determinant-is-not-row-alternating | AG | AG | direct equal-row quaternion witness; leaf |
| ex-row-operations-on-a-singular-matrix-over-z-mod-six | AG | AG | direct \(\mathbb Z/6\) witness; leaf |

The three AG Statements are permitted generated examples with completely
checkable witnesses, and none is a dependency target. Step 5 must add
generation metadata to them. Their truth-risk checks are already fixed above:
direct multiplication verifies the rational inverse but no integer inverse;
\(ij-ji=2k\ne0\) follows from the published quaternion table and real
characteristic zero; and multiplication modulo \(6\) checks every determinant
in the singular-row-operation example.

## 7. Proof decomposition and richness passes

Both the proof-decomposition pass and the mathematical-richness pass were
performed for both pairs.

For the Gaussian pair, the long row-reduction argument is decomposed into
reversibility, elementary left multiplication, products of elementary
matrices, the REF algorithm, the Gauss–Jordan algorithm and RREF uniqueness.
The rank argument is decomposed independently on the two sides:
row-space invariance plus the echelon-row basis, and preservation of column
relations plus the original pivot-column basis; only then are the ranks
identified. The solution theory is separated into solution-set preservation,
affine-nullspace structure, RREF parametrisation and its two rank/count
corollaries. The invertible matrix theorem then feeds two distinct outputs:
elementary factorisation and inverse computation.

Useful Gaussian corollaries added by the richness pass are the product encoding
of a reduction, matrix/linear-map rank agreement, matrix rank-nullity, the
consistency rank criterion, the infinite-field solution trichotomy, and the
\([A\mid I]\) inverse criterion. The B page tests all three solution outcomes,
parameter degeneration, nonuniqueness of REF, explicit factorisation, and the
column-space noninvariance boundary.

For the determinant pair, the long proof is decomposed into the ring matrix
interface and its field seam; alternating-implies-antisymmetric; rigidity of
alternating multilinear functions; verification that the Leibniz sum has the
required properties; and the uniqueness theorem. Transpose invariance is
isolated before row multilinearity and the row-operation laws. Multiplicativity
then uses rigidity rather than an unscaffolded combinatorial expansion.

The Step-3 repair adds two short, independently auditable routes. For
`cor-determinant-is-a-polynomial-in-the-matrix-entries`, fix \(n\ge1\), form
\(P_n=\sum_{\sigma\in S_n}\operatorname{sgn}(\sigma)
\prod_{i<n}x_{\sigma(i),i}\) in the \(n^2\)-variable real polynomial ring, and
identify its evaluation at the entries of \(A\) with the Leibniz formula. For
`thm-real-square-matrix-invertible-iff-determinant-nonzero`, the forward
direction specializes the ring unit-determinant corollary to \(\mathbb R\). For
the converse, a noninvertible matrix has an RREF with fewer than \(n\) pivots,
hence a zero row; that RREF is upper triangular with determinant zero, and the
reversible real row operations preserve whether the determinant vanishes.

Useful determinant corollaries are the polynomial-in-entries formula,
zero/repeated-column vanishing, row multilinearity, unit determinant of an
invertible matrix, the real invertibility criterion, determinant of the inverse,
and similarity invariance. The richness pass added the characteristic
two, noncommutative quaternion, coefficient-ring, and singular-zero-divisor
boundaries. It also caught and repaired the false “equal columns gives
\(2k\)” witness before authoring.

The proof-contract file scopes all 54 proof-bearing items, with one contract per
item. Each contract maps citations and substantive derivations and records all
eight boundary classes. Definitions are intentionally outside proof-contract
scope. No finite-smoke type in the repository applies to these linear-algebra
items; every fixed witness instead has an explicit arithmetic derivation.

## 8. Convention disagreements and authoring instructions

- The published matrix carrier uses von Neumann naturals and zero-based indices.
  Step 5 must use \(I_n=\{0,\ldots,n-1\}\), or explicitly reindex any source
  formula written on \(\{1,\ldots,n\}\). Do not silently mix the two.
- The determinant is restricted to \(n\ge1\), exactly as dispatched. Ring
  matrix arithmetic still permits zero-row and zero-column shapes so that it
  agrees with the batch-1 field interface.
- No canonical embedding is ever applied to a natural number. Use bare numerals
  for embedded naturals; only a bare inclusion symbol may name a basis map.
- G and H work mainly over \(\mathbb R\); Gaussian statements are generalized
  only to an arbitrary field when their proofs use field inverses and nothing
  ordered or analytic.
- G characterizes determinants from row operations over a field, whereas W and
  M use the Leibniz/alternating construction over a commutative ring. W/M
  control the determinant domain; G controls computational conventions only.
- “Antisymmetric” is the library term. W's “skew-symmetric” is recorded as a
  source synonym. In characteristic \(2\), antisymmetric does not imply
  alternating; the converse used on the page is alternating implies
  antisymmetric and needs no division by \(2\).
- In Gaussian elimination, scaling by a nonzero field scalar is reversible. In
  the ring determinant theorem, scaling by any scalar has a determinant law,
  but a nonunit scaling is not a row equivalence. Do not call it reversible.
- `thm-real-square-matrix-invertible-iff-determinant-nonzero` is a real-field
  specialization. Never generalize its word “nonzero” to arbitrary commutative
  rings: there the correct invariant is “unit,” and only the forward implication
  is established on this page before adjugates are available.
- `cor-determinant-is-a-polynomial-in-the-matrix-entries` must display the
  finite \(n^2\)-variable Leibniz polynomial itself. It asserts no analytic
  continuity theorem at order 82; batch 5 combines the displayed finite
  sum/product expression with its later continuity algebra.
- Batch 1's similarity is field-valued. The determinant page defines ring
  similarity separately and proves exact agreement after field specialization.
- Write \(\det A\), not \(|A|\), for the determinant. Reserve
  \(\lvert\det A\rvert\) for the real absolute value and \(|S|\) for finite
  cardinality.
- The zero ring is allowed by the published ring definition. The determinant
  proofs must not assume \(0\ne1\); normalization and unit conclusions remain
  meaningful there.
- “Singular” in the \(\mathbb Z/6\) example means not invertible. It is proved
  by the contrapositive of invertible-implies-unit-determinant, not by a
  field-only nonzero-determinant criterion.
- Linear dependence of columns over a general ring is not used as a determinant
  criterion. The harvested field statement is deferred because unqualified
  ring-module dependence would change its truth conditions.
- H often says “nonsingular”; the library uses “invertible”. REF is not unique,
  while RREF is unique, and those terms must not be conflated.

## 9. Batch-5 handoff and orchestrator decisions

No interface substitution is proposed. Batch 5 may cite these exact ids:

- def-determinant-of-a-square-matrix;
- thm-determinant-under-elementary-row-operations;
- thm-determinant-multiplicative;
- thm-invertible-matrices-factor-into-elementary-matrices;
- thm-real-square-matrix-invertible-iff-determinant-nonzero; and
- cor-determinant-is-a-polynomial-in-the-matrix-entries.

The determinant definition explicitly includes \(\lvert\det A\rvert\) for a
real matrix. The row-operation theorem explicitly covers singular matrices and
proves swap, scaling and row-addition laws. The factorisation theorem is on the
Gaussian page and is specialized to finite square real matrices, as requested.
The new real criterion supplies batch 5's singular-branch implication
directly. The polynomial corollary supplies the explicit finite Leibniz
sum-of-products expression; batch 5, at its later order, combines that
expression with componentwise continuity to obtain continuity of the absolute
Jacobian determinant.

Recommendations for Step 3:

1. Approve the determinant page's added requirement on the Gaussian page and
   the local ring row-transformation definition. Without them, the required
   row-operation theorem would cite a field-only definition while claiming a
   ring theorem, and the \(\mathbb Z/6\) boundary would be unstatable.
2. Approve the local ring invertibility/similarity definition and the field
   compatibility proposition. Without them, the last three determinant
   corollaries would silently use batch 1's field-only interface.
3. Approve the order-52 polynomial-page requirement. It supplies the exact
   finite multivariate-polynomial vocabulary for the new corollary and remains
   strictly earlier than the determinant page.
4. Approve no split. Both A pages are far below 60 items, and the complete
   harvested spine fits without pruning.

There are no unavoidable forward references, no external fallback, no
published-dependency repair request, and no content blocker. The only facts not
independently formalized at Step 2 are the future item bodies themselves; their
derivations are mapped in the proof contracts for Step 5.

## 10. Mechanical checks and runtime blocker

The whole-corpus mint collision command generated all 67 ids and piped them to
rg -F -f - over items/ and research/plan-spec.json. It returned exit 1 with no
match, which is the expected no-collision result. A separate structural check
found 67 unique ids, no duplicate, no missing dependency and no same-page
forward dependency.

Direct gates:

- node tools/validate-plan.mjs research/plan-spec.json — PASS;
- node tools/depsource.mjs research/plan-spec.json — PASS, 16,688 published
  dependency links and 0 unresolved;
- node tools/coverage-checklist.mjs on this batch — PASS, 2 pages and 126
  harvested headings with 0 errors and 0 warnings;
- the same coverage tool on all nine frontier-10 checklist files — PASS, 14
  pages and 853 harvested headings with 0 errors and 0 warnings.

The exact aggregate command
node tools/gates.mjs --step 2 --run frontier-10 could not be left green in this
runtime. Its three internal spawnSync calls to /usr/bin/node each failed with
EPERM. The same three tools run directly and pass as recorded above, and the
wrapper has no in-process execution mode. Under the owner's no-permission-prompt
rule I did not request escalation or edit the gate. This is an environmental
wrapper blocker, not a gate finding, but it is still an unmet requested command
and must be reported plainly.
