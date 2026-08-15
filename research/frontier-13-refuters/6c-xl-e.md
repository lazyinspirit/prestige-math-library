## This dispatch — cross-level citation refutation, cluster `xl-e`

You are checking **cross-level citations**: facts in this run's draft items
that cite items already **published** in the library. Step 6b found this run's
dominant defect class *within* batches — an `[F#]`/`[L#]` restatement claiming
more than the cited item's Statement says (an enlarged domain, a dropped
`n\ge1`, a citation pointing at an item that does not state the claimed fact at
all). The cross-level surface below has had no equivalent pass.

Your cluster is **38 published target items** carrying
**81 load-bearing citation edges**.

### Method — the target is read once, the restatements are checked against it

For each published target below:

1. Open `items/<target>.md` and read its **Statement** (or Definition /
   Construction) verbatim. This is ground truth. Note its exact domain,
   hypotheses, quantifiers, direction and conclusion.
2. For each citing item listed under it, open `items/<citing-item>.md`, find the
   named `[F#]`/`[A#]`/`[L#]` fact, and compare its prose against the Statement
   you just read.
3. Then read the **numbered steps that use that fact** (listed for you) and ask
   the load-bearing question: *does the FAITHFUL version of this dependency
   license this step?* A restatement can be inaccurate but harmless, or
   accurate but applied outside its domain. Report which.

Report a finding only when you can name the exact clause of the cited Statement
and the exact clause of the restatement that differ, and say whether a step
depends on the difference. **A restatement that is a faithful shortening is not
a finding** — the house rule asks for the smallest faithful shortening, not the
whole Statement. Do not report a missing clause the citing step never uses,
unless the restatement positively asserts something false.

### Your cluster

#### target: `lem-complex-conjugation-and-modulus-laws`  (lemma, 9 citations)

- `cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus` **L5** — used at step(s) 1.2
  - restatement on disk: For $n\ge1$ and $A\in M_n(R)$ over a commutative ring, $\det(A^{\mathsf T})=\det(A)$; complex conjugation is a field automorphism, and $z\overline z=|z|^2$ ([[thm-determinant-of-transpose]], [[lem-complex-conjugation-and-modulus-laws]]).
- `prop-standard-coordinate-inner-products` **L2** — used at step(s) 1.1, 1.2
  - restatement on disk: Complex conjugation preserves sums and products, and $z\overline z=|z|^2\ge0$, with equality exactly when $z=0$ ([[lem-complex-conjugation-and-modulus-laws]]).
- `lem-inner-product-pairing-is-nondegenerate-and-norm-is-homogeneous` **L3** — used at step(s) 2.1
  - restatement on disk: For a complex scalar, $\lambda\overline\lambda=|\lambda|^2$ ([[lem-complex-conjugation-and-modulus-laws]]).
- `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces` **L3** — used at step(s) 1.1, 1.2, 2.1
  - restatement on disk: Complex modulus satisfies $z\overline z=|z|^2$ and vanishes exactly at zero ([[lem-complex-conjugation-and-modulus-laws]]).
- `thm-gram-determinant-detects-linear-independence` **L5** — used at step(s) 2.1
  - restatement on disk: Complex conjugation is a field automorphism, and $z\overline z=|z|^2\ge0$ with equality exactly when $z=0$ ([[lem-complex-conjugation-and-modulus-laws]]).
- `thm-qr-factorisation-over-r-or-c` **L5** — used at step(s) 1.2, 2.1
  - restatement on disk: The conjugate transpose is obtained by entrywise conjugation followed by transposition ([[def-transpose-of-a-matrix]], [[lem-complex-conjugation-and-modulus-laws]]).
- `thm-matrix-of-the-adjoint-is-the-conjugate-transpose` **L4** — used at step(s) 2.1
  - restatement on disk: Transposition interchanges matrix rows and columns, and complex conjugation is an involution ([[def-transpose-of-a-matrix]], [[lem-complex-conjugation-and-modulus-laws]]).
- `ex-frobenius-inner-product-on-matrix-space` **L3** — used at step(s) 1.1, 1.2
  - restatement on disk: Complex conjugation distributes over finite sums and satisfies $z\overline z=|z|^2$, vanishing exactly at $z=0$ ([[lem-complex-conjugation-and-modulus-laws]]).
- `ex-gram-schmidt-in-c-two` **L3** — used at step(s) 1.1, 2.1, 3.1
  - restatement on disk: Complex conjugation sends $i$ to $-i$ and satisfies $|1\pm i|^2=2$ ([[lem-complex-conjugation-and-modulus-laws]]).

#### target: `lem-group-power-laws`  (lemma, 7 citations)

- `prop-index-calculus-modulo-n` **L2** — used at step(s) 2.1
  - restatement on disk: Group powers satisfy $g^{r+s}=g^rg^s$ and $(g^r)^k=g^{rk}$ ([[lem-group-power-laws]]).
- `lem-order-of-a-power-in-a-finite-cyclic-group` **L3** — used at step(s) 2.1
  - restatement on disk: $(g^a)^t=g^{at}$ for every integer $t$ ([[lem-group-power-laws]]).
- `lem-primitive-root-lift-to-prime-square` **L4** — used at step(s) 1.2
  - restatement on disk: Group powers satisfy the usual addition and iteration laws ([[lem-group-power-laws]]).
- `lem-order-of-one-plus-pu-modulo-prime-powers` **L3** — used at step(s) 1.2
  - restatement on disk: Group powers satisfy $(x^r)^s=x^{rs}$ ([[lem-group-power-laws]]).
- `lem-order-of-five-modulo-two-powers` **L2** — used at step(s) 1.2
  - restatement on disk: Group powers satisfy $x^{r+s}=x^rx^s$ and $(x^r)^s=x^{rs}$ ([[lem-group-power-laws]]).
- `cor-dihedral-groups-as-semidirect-products` **L3** — used at step(s) 1.2
  - restatement on disk: Integer powers in a group satisfy the usual addition and inverse laws ([[lem-group-power-laws]]).
- `thm-classification-of-groups-of-order-pq` **L5** — used at step(s) 1.1, 3.1
  - restatement on disk: A product with a normal subgroup is a subgroup; group powers obey the addition law; and $x^m=1$ exactly when the order of $x$ divides $m$ ([[lem-product-with-normal-subgroup]], [[lem-group-power-laws]], [[lem-order-characterisation]]).

#### target: `def-linear-independence`  (definition, 5 citations)

- `lem-minimal-polynomial-is-invariant-under-field-extension` **L2** — used at step(s) 1.2, 2.1
  - restatement on disk: A finite list is linearly independent when its only vanishing finite linear combination has all coefficients zero ([[def-linear-independence]]).
- `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces` **L4** — used at step(s) 1.2, 3.1
  - restatement on disk: A two-vector list is dependent exactly when a nontrivial scalar combination vanishes ([[def-linear-independence]]).
- `thm-orthogonal-nonzero-vectors-are-linearly-independent` **L3** — used at step(s) 1.1, 3.1
  - restatement on disk: A finite list is linearly independent when its only vanishing linear combination has every coefficient zero ([[def-linear-independence]]).
- `thm-gram-schmidt-orthonormalisation` **L2** — used at step(s) 2.1
  - restatement on disk: A linearly independent list has no member in the span of its predecessors ([[def-linear-independence]]).
- `thm-gram-determinant-detects-linear-independence` **L3** — used at step(s) 1.1, 3.1
  - restatement on disk: A list is dependent exactly when some nonzero coefficient vector gives a vanishing linear combination ([[def-linear-independence]]).

#### target: `def-algebraic-and-transcendental-elements`  (definition, 5 citations)

- `thm-finite-field-extensions-are-algebraic` **L3** — used at step(s) 2.1
  - restatement on disk: An element is algebraic over $F$ when a nonzero polynomial in $F[t]$ vanishes at it ([[def-algebraic-and-transcendental-elements]]).
- `thm-finitely-generated-algebraic-extensions-are-finite` **L4** — used at step(s) 1.1
  - restatement on disk: An element algebraic over $F$ satisfies a nonzero polynomial in $F[t]$ ([[def-algebraic-and-transcendental-elements]]).
- `thm-algebraic-elements-form-a-subfield` **L4** — used at step(s) 1.1
  - restatement on disk: Algebraic means annihilated by a nonzero polynomial over the base field ([[def-algebraic-and-transcendental-elements]]).
- `thm-transitivity-of-algebraicity` **L5** — used at step(s) 1.1
  - restatement on disk: Algebraicity means satisfying a nonzero polynomial over the base ([[def-algebraic-and-transcendental-elements]]).
- `cor-irreducible-polynomials-exist-over-finite-fields-in-every-degree` **L7** — used at step(s) 2.1
  - restatement on disk: An element is algebraic over a base field when some nonzero polynomial over that field vanishes at it ([[def-algebraic-and-transcendental-elements]]).

#### target: `lem-field-is-a-commutative-ring`  (lemma, 4 citations)

- `thm-characteristic-of-a-field-is-zero-or-prime` **L3** — used at step(s) 3.1
  - restatement on disk: A field is an integral domain, so a product of two nonzero elements cannot be zero ([[lem-field-is-a-commutative-ring]]).
- `thm-multiplicative-group-of-a-finite-field-is-cyclic` **L2** — used at step(s) 1.1
  - restatement on disk: Every field is an integral domain, and its nonzero elements are its units ([[lem-field-is-a-commutative-ring]]).
- `cor-unit-group-modulo-prime-is-cyclic` **L2** — used at step(s) 1.1
  - restatement on disk: Every field is an integral domain ([[lem-field-is-a-commutative-ring]]).
- `lem-power-congruence-root-bound-modulo-a-prime` **L2** — used at step(s) 1.1
  - restatement on disk: Every field is a commutative ring and has no zero divisors ([[lem-field-is-a-commutative-ring]]).

#### target: `def-lcm`  (definition, 3 citations)

- `lem-direct-product-of-finite-cyclic-groups-is-cyclic-iff-orders-are-coprime` **L3** — used at step(s) 1.1, 3.1
  - restatement on disk: $\operatorname{lcm}(r,s)$ is the least positive common multiple of $r$ and $s$ ([[def-lcm]]).
- `prop-carmichael-function-as-maximal-order` **L4** — used at step(s) 1.2, 2.1
  - restatement on disk: The least common multiple is the least positive integer divisible by each listed integer ([[def-lcm]]).
- `thm-carmichael-function-formula` **L4** — used at step(s) 1.2
  - restatement on disk: The least common multiple is the least positive common multiple ([[def-lcm]]).

#### target: `thm-unique-coordinates-with-respect-to-an-ordered-basis`  (theorem, 3 citations)

- `prop-extension-degree-one-iff-equal-fields` **L2** — used at step(s) 1.1
  - restatement on disk: With respect to a one-element basis, every vector has a unique one-coordinate expression ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]]).
- `lem-product-basis-for-a-tower-of-finite-extensions` **L2** — used at step(s) 1.1, 1.2
  - restatement on disk: Every vector has unique coordinates with respect to an ordered basis ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]]).
- `thm-finite-fields-have-prime-power-order` **L5** — used at step(s) 2.1
  - restatement on disk: Coordinates with respect to a finite ordered basis are unique ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]]).

#### target: `cor-euler-totient-is-multiplicative`  (corollary, 3 citations)

- `ex-carmichael-function-of-five-hundred-sixty-one` **L3** — used at step(s) 1.1
  - restatement on disk: Euler's totient is multiplicative on coprime arguments ([[cor-euler-totient-is-multiplicative]]).
- `ex-unit-group-modulo-two-hundred-forty` **L2** — used at step(s) 2.1
  - restatement on disk: Euler's totient is multiplicative on coprime positive arguments ([[cor-euler-totient-is-multiplicative]]).
- `ex-carmichael-function-of-one-thousand-seven-hundred-twenty-nine` **L2** — used at step(s) 2.1
  - restatement on disk: Euler's totient is multiplicative on coprime positive arguments ([[cor-euler-totient-is-multiplicative]]).

#### target: `thm-standard-representatives-modulo-n`  (theorem, 3 citations)

- `fs-a-zero-elementary-tensor-has-a-zero-factor` **L2** — used at step(s) 1.1, 2.1, 3.1
  - restatement on disk: Modular arithmetic gives $2\overline1=\overline0$ in $\mathbb Z/2$ ([[thm-integers-modulo-n-basic-algebra]]), while the unique representatives $0,1$ are distinct classes ([[thm-standard-representatives-modulo-n]]).
- `fs-tensoring-preserves-injections` **L2** — used at step(s) 1.2, 2.1
  - restatement on disk: In $\mathbb Z/2$, modular multiplication by $2$ is zero ([[thm-integers-modulo-n-basic-algebra]]), while the unique representatives $0,1$ are distinct classes ([[thm-standard-representatives-modulo-n]]).
- `fs-tensor-products-of-nonzero-cyclic-groups-are-always-nonzero` **L3** — used at step(s) 1.1, 1.2, 2.1, 3.1
  - restatement on disk: Modular addition and multiplication give $\mathbb Z/q$ its usual quotient-ring operations ([[thm-integers-modulo-n-basic-algebra]]). For positive $q$, its classes have the unique representatives $0,\ldots,q-1$, so $|\mathbb Z/q|=q$; in particular, $\mathbb Z/1$ is zero while $\mathbb Z/2$ and $\mathbb Z/3$ are nonzero ([[thm-standard-representatives-modulo-n]]).

#### target: `thm-int-comm-ring`  (theorem, 3 citations)

- `prop-elementary-tensor-formulas-descend-exactly-when-balanced` **L3** — used at step(s) 1.3
  - restatement on disk: The integers form a commutative unital ring ([[thm-int-comm-ring]]).
- `fs-a-zero-elementary-tensor-has-a-zero-factor` **L1** — used at step(s) 2.1
  - restatement on disk: $\mathbb Z$ is a commutative ring, so multiplication by integers supplies its regular module structure ([[thm-int-comm-ring]]).
- `fs-tensoring-preserves-injections` **L1** — used at step(s) 1.1
  - restatement on disk: $\mathbb Z$ is a commutative ring ([[thm-int-comm-ring]]), and multiplication by a nonzero integer can be cancelled ([[lem-int-cancellation]]).

#### target: `def-coordinate-endomorphism-over-a-commutative-ring`  (definition, 2 citations)

- `cor-cayley-hamilton-recurrences-for-matrix-powers` **L2** — used at step(s) 1.1
  - restatement on disk: A matrix $A$ defines the coordinate endomorphism $T_A(x)=Ax$ ([[def-coordinate-endomorphism-over-a-commutative-ring]]).
- `cor-eigenvalue-form-of-the-transfer-matrix-trace` **L2** — used at step(s) 1.1
  - restatement on disk: The matrix $A$ defines the coordinate endomorphism $T_A(x)=Ax$ ([[def-coordinate-endomorphism-over-a-commutative-ring]]).

#### target: `thm-eisenstein-irreducibility-criterion`  (theorem, 2 citations)

- `ex-degree-of-q-sqrt-two` **L2** — used at step(s) 1.1
  - restatement on disk: Eisenstein's criterion proves suitable primitive integer polynomials irreducible over $\mathbb Q$ ([[thm-eisenstein-irreducibility-criterion]]).
- `ex-degree-of-q-cube-root-two` **L2** — used at step(s) 1.1
  - restatement on disk: Eisenstein's criterion proves suitable primitive integer polynomials irreducible over $\mathbb Q$ ([[thm-eisenstein-irreducibility-criterion]]).

#### target: `def-universal-arrow-to-and-from-a-functor`  (definition, 2 citations)

- `thm-unit-components-are-initial-in-their-comma-categories` **F1** — used at step(s) 2.1, 3.1
  - restatement on disk: A universal arrow from $c$ to $G$ is a pair $(R,\rho:c\to GR)$ such that every $f:c\to Gd$ factors uniquely as $G(h)\circ\rho$; dually, a universal arrow from $F$ to $d$ has the corresponding unique factorisation property ([[def-universal-arrow-to-and-from-a-functor]]).
- `thm-objectwise-universal-arrows-assemble-into-a-left-adjoint` **F1** — used at step(s) 1.1, 2.1, 4.1
  - restatement on disk: Universality means that every $f:c\to Gd$ factors uniquely as $f=G(h)\circ\eta_c$ for a morphism $h:Fc\to d$ ([[def-universal-arrow-to-and-from-a-functor]]).

#### target: `def-trace-of-an-endomorphism`  (definition, 2 citations)

- `cor-eigenvalue-form-of-the-transfer-matrix-trace` **L4** — used at step(s) 3.1
  - restatement on disk: The trace of an endomorphism equals the trace of any representing matrix ([[def-trace-of-an-endomorphism]]).
- `cor-trace-is-tensor-contraction` **L2** — used at step(s) 1.3, 2.1, 3.1
  - restatement on disk: The trace of an endomorphism is the sum of the diagonal entries of its matrix in any basis, and is zero in dimension zero ([[def-trace-of-an-endomorphism]]).

#### target: `def-small-locally-small-and-large-category`  (definition, 2 citations)

- `thm-the-adjunction-hom-set-bijection-under-local-smallness` **F1** — used at step(s) 1.1
  - restatement on disk: In a locally small category every hom-collection is a set ([[def-small-locally-small-and-large-category]]).
- `fs-the-hom-set-form-of-an-adjunction-needs-no-size-hypothesis` **F1** — used at step(s) 2.1
  - restatement on disk: A category is locally small exactly when every hom-class is a set; a large category may still be locally small ([[def-small-locally-small-and-large-category]]).

#### target: `def-natural-numbers`  (definition, 2 citations)

- `lem-words-satisfy-the-free-monoid-universal-property` **F3** — used at step(s) 1.1
  - restatement on disk: The natural numbers form the smallest inductive set ([[def-natural-numbers]]).
- `ex-adjunction-between-preorders-computed` **F1** — used at step(s) 1.1
  - restatement on disk: The natural numbers are the smallest inductive set, with $0=\varnothing$ and successor $\sigma(n)=n\cup\{n\}$ ([[def-natural-numbers]]).

#### target: `thm-exponential-is-strictly-increasing`  (theorem, 2 citations)

- `lem-erdos-hajnal-constants-are-downward-closed` **L3** — used at step(s) 2.1
  - restatement on disk: The exponential function is strictly increasing on $\mathbb R$ ([[thm-exponential-is-strictly-increasing]]).
- `thm-complete-graph-free-classes-are-erdos-hajnal` **L9** — used at step(s) 1.2, 4.1
  - restatement on disk: The exponential is strictly increasing ([[thm-exponential-is-strictly-increasing]]).

#### target: `cor-h-free-complement-dictionary`  (corollary, 2 citations)

- `prop-erdos-hajnal-property-is-complement-invariant` **L5** — used at step(s) 4.1
  - restatement on disk: A graph $G$ is $H$-free if and only if $\overline G$ is $\overline H$-free ([[cor-h-free-complement-dictionary]]).
- `ex-a-forbidden-pattern-and-its-complement-share-eh-status` **L3** — used at step(s) 1.2
  - restatement on disk: A graph $G$ is $H$-free exactly when $\overline G$ is $\overline H$-free ([[cor-h-free-complement-dictionary]]).

#### target: `thm-subset-of-a-finite-set`  (theorem, 1 citation)

- `thm-frobenius-endomorphism-and-finite-field-automorphism` **L5** — used at step(s) 3.1
  - restatement on disk: An injection from a finite set to itself is a bijection ([[thm-subset-of-a-finite-set]]).

#### target: `def-semigroup-and-monoid`  (definition, 1 citation)

- `lem-words-satisfy-the-free-monoid-universal-property` **F1** — used at step(s) 2.1, 2.2, 3.1
  - restatement on disk: A monoid is a set with an associative binary operation and a two-sided identity ([[def-semigroup-and-monoid]]).

#### target: `lem-adjoining-one-root-reduces-the-unsplit-degree`  (lemma, 1 citation)

- `thm-factorization-of-x-qn-minus-x` **L8** — used at step(s) 1.2
  - restatement on disk: A polynomial of degree at least one over a field has a root in some field extension ([[lem-adjoining-one-root-reduces-the-unsplit-degree]]).

#### target: `def-connected-graph-and-connected-component`  (definition, 1 citation)

- `thm-p3-free-graphs-have-square-root-homogeneous-sets` **L5** — used at step(s) 1.2, 1.3
  - restatement on disk: Connected vertices are joined by a path, and a component is the induced graph on all vertices reachable from one vertex ([[def-connected-graph-and-connected-component]]).

#### target: `def-finite-cardinality`  (definition, 1 citation)

- `ex-frobenius-reciprocity-for-group-representations` **F7** — used at step(s) 1.1, 2.2
  - restatement on disk: A set is finite when it is in bijection with some natural number ([[def-finite-cardinality]]).

#### target: `thm-chinese-remainder-theorem`  (theorem, 1 citation)

- `thm-unit-group-chinese-remainder-decomposition` **L1** — used at step(s) 1.1, 1.2, 2.1, 3.1
  - restatement on disk: The Chinese remainder map $\mathbb Z/N\to\prod_{i<r}\mathbb Z/n_i$ is a bijection preserving multiplication and identity, including for the empty list ([[thm-chinese-remainder-theorem]]).

#### target: `thm-invertible-matrices-correspond-to-linear-isomorphisms`  (theorem, 1 citation)

- `thm-qr-factorisation-over-r-or-c` **L1** — used at step(s) 1.1
  - restatement on disk: The columns of an invertible square matrix form a basis of the coordinate space ([[thm-invertible-matrices-correspond-to-linear-isomorphisms]]).

#### target: `def-hom-groups-and-induced-hom-maps`  (definition, 1 citation)

- `thm-character-duals-of-flat-modules-are-injective` **L4** — used at step(s) 1.1
  - restatement on disk: $\operatorname{Hom}_{\mathbb Z}(P,D)$ is an abelian group under pointwise addition ([[def-hom-groups-and-induced-hom-maps]]).

#### target: `def-preservation-reflection-creation-continuity-and-cocontinuity`  (definition, 1 citation)

- `thm-right-adjoints-preserve-limits` **F2** — used at step(s) 5.1
  - restatement on disk: A functor preserves a limit when the image of a limiting cone is limiting ([[def-preservation-reflection-creation-continuity-and-cocontinuity]]).

#### target: `lem-finite-sum-reindexing-and-fubini`  (lemma, 1 citation)

- `ex-frobenius-reciprocity-for-group-representations` **F9** — used at step(s) 3.2, 4.1
  - restatement on disk: Finite sums are invariant under bijective reindexing, split over disjoint unions, and satisfy the two finite Fubini formulas ([[lem-finite-sum-reindexing-and-fubini]]).

#### target: `thm-group-actions-correspond-to-homomorphisms`  (theorem, 1 citation)

- `prop-holomorph-as-a-permutation-group` **L3** — used at step(s) 1.2, 2.1
  - restatement on disk: Group actions on a set correspond to homomorphisms into its symmetric group ([[thm-group-actions-correspond-to-homomorphisms]], [[def-symmetric-group]]).

#### target: `thm-sign-is-a-homomorphism`  (theorem, 1 citation)

- `ex-symmetric-group-splits-over-the-alternating-group` **L1** — used at step(s) 1.1, 1.2
  - restatement on disk: The sign map $\operatorname{sgn}:S_n\to\{1,-1\}$ is a surjective homomorphism for $n\ge2$ ([[thm-sign-is-a-homomorphism]]).

#### target: `thm-first-isomorphism-theorem-rings`  (theorem, 1 citation)

- `cor-endomorphism-algebra-is-a-minimal-polynomial-quotient` **L3** — used at step(s) 2.1
  - restatement on disk: The first isomorphism theorem for rings gives $R/\ker f\cong\operatorname{im}f$ ([[thm-first-isomorphism-theorem-rings]]).

#### target: `thm-linearity-of-expectation`  (theorem, 1 citation)

- `thm-random-graph-logarithmic-homogeneous-set-upper-bound` **L4** — used at step(s) 4.1
  - restatement on disk: Expectations of a finite family of random variables add without an independence hypothesis ([[thm-linearity-of-expectation]]).

#### target: `thm-universal-property-of-module-direct-sums`  (theorem, 1 citation)

- `thm-tensor-products-commute-with-arbitrary-direct-sums` **L4** — used at step(s) 1.1, 3.1, 4.1, 5.1
  - restatement on disk: Every family of homomorphisms $f_i:M_i\to P$ extends uniquely to a homomorphism $\bigoplus_iM_i\to P$ whose value is the finite sum of the coordinate values ([[thm-universal-property-of-module-direct-sums]]).

#### target: `cor-complex-numbers-are-a-quadratic-real-extension`  (corollary, 1 citation)

- `ex-complex-tensor-square-over-the-reals` **L2** — used at step(s) 1.2
  - restatement on disk: The vectors $1,i$ form an $\mathbb R$-basis of $\mathbb C$ ([[cor-complex-numbers-are-a-quadratic-real-extension]]).

#### target: `prop-limit-colimit-duality`  (proposition, 1 citation)

- `cor-left-adjoints-preserve-colimits` **F2** — used at step(s) 1.2, 3.1
  - restatement on disk: A cocone is colimiting in a category exactly when the reversed family is a limiting cone in the opposite category ([[prop-limit-colimit-duality]]).

#### target: `def-nat-addition`  (definition, 1 citation)

- `lem-words-satisfy-the-free-monoid-universal-property` **F4** — used at step(s) 1.2, 2.1
  - restatement on disk: Natural addition satisfies $n+0=n$ and $n+(m+1)=(n+m)+1$ ([[def-nat-addition]]).

#### target: `thm-ordinal-addition-associative`  (theorem, 1 citation)

- `fs-the-hom-set-form-of-an-adjunction-needs-no-size-hypothesis` **F3** — used at step(s) 1.1
  - restatement on disk: Ordinal addition is associative: $(\alpha+\beta)+\gamma=\alpha+(\beta+\gamma)$ for all ordinals $\alpha,\beta,\gamma$ ([[thm-ordinal-addition-associative]]).

#### target: `def-nat-order`  (definition, 1 citation)

- `ex-adjunction-between-preorders-computed` **F2** — used at step(s) 2.1, 2.2
  - restatement on disk: Natural order is defined by $a\le b$ exactly when $a+d=b$ for some $d\in\mathbb N$ ([[def-nat-order]]).

### Report format

Write your findings to stdout as your final message. Per finding:

- citing item id, fact label, cited target id
- **what the restatement claims** vs **what the Statement says** (quote both)
- which numbered step depends on the difference, or "no step depends on it"
- your severity: `fatal` (a step is unlicensed / a false claim is asserted) or
  `nonfatal` (a competent reader closes it in 30 seconds)

Close with: targets opened, edges checked, findings by severity. If you checked
an edge and it is clean, it is clean — do not pad the report.
