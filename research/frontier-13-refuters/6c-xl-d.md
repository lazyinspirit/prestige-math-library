## This dispatch — cross-level citation refutation, cluster `xl-d`

You are checking **cross-level citations**: facts in this run's draft items
that cite items already **published** in the library. Step 6b found this run's
dominant defect class *within* batches — an `[F#]`/`[L#]` restatement claiming
more than the cited item's Statement says (an enlarged domain, a dropped
`n\ge1`, a citation pointing at an item that does not state the claimed fact at
all). The cross-level surface below has had no equivalent pass.

Your cluster is **37 published target items** carrying
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

#### target: `lem-order-characterisation`  (lemma, 18 citations)

- `prop-primitive-root-iff-unit-group-generator` **L2** — used at step(s) 1.1
  - restatement on disk: If $g$ has finite order $r$, then $\langle g\rangle$ has exactly $r$ elements ([[lem-order-characterisation]]).
- `prop-index-calculus-modulo-n` **L3** — used at step(s) 3.1
  - restatement on disk: For an element of order $f$, $g^u=1$ if and only if $f\mid u$ ([[lem-order-characterisation]]).
- `lem-order-of-a-power-in-a-finite-cyclic-group` **L2** — used at step(s) 2.1
  - restatement on disk: Since $\operatorname{ord}(g)=m$, one has $g^u=1$ exactly when $m\mid u$ ([[lem-order-characterisation]]).
- `cor-generators-of-a-finite-cyclic-group` **L2** — used at step(s) 1.1, 1.2
  - restatement on disk: An element generates a finite cyclic group precisely when its order is the group order ([[lem-order-characterisation]]).
- `lem-direct-product-of-finite-cyclic-groups-is-cyclic-iff-orders-are-coprime` **L2** — used at step(s) 1.1, 3.1
  - restatement on disk: A power of an element of order $r$ is the identity exactly when its exponent is divisible by $r$ ([[lem-order-characterisation]]).
- `lem-primitive-root-lift-to-prime-square` **L3** — used at step(s) 1.1
  - restatement on disk: If an element has finite order $r$, a power is the identity exactly when its exponent is divisible by $r$ ([[lem-order-characterisation]]).
- `lem-order-of-one-plus-pu-modulo-prime-powers` **L6** — used at step(s) 3.1
  - restatement on disk: If an element has finite order $r$, its $m$th power is the identity exactly when $r\mid m$ ([[lem-order-characterisation]]).
- `thm-unit-group-modulo-odd-prime-power-is-cyclic` **L4** — used at step(s) 1.1, 2.1
  - restatement on disk: For an element of finite order $r$, $x^t=1$ exactly when $r\mid t$ ([[lem-order-characterisation]]).
- `lem-order-of-five-modulo-two-powers` **L1** — used at step(s) 4.1
  - restatement on disk: The order is the least positive exponent giving the identity ([[def-order-in-a-group]]), and an element of order $r$ has $x^t=1$ exactly when $r\mid t$ ([[lem-order-characterisation]]).
- `prop-carmichael-function-as-maximal-order` **L3** — used at step(s) 1.2, 2.1
  - restatement on disk: An element of order $r$ is killed precisely by the multiples of $r$ ([[lem-order-characterisation]]).
- `thm-carmichael-function-formula` **L3** — used at step(s) 1.1, 1.2
  - restatement on disk: An exponent kills an element precisely when it is divisible by that element's order ([[lem-order-characterisation]]).
- `ex-primitive-root-modulo-thirteen-by-prime-divisor-tests` **L3** — used at step(s) 2.1
  - restatement on disk: If an element has finite order $r$, its powers equal the identity exactly at exponents divisible by $r$ ([[lem-order-characterisation]]).
- `ex-lifting-a-primitive-root-through-powers-of-five` **L3** — used at step(s) 1.1, 2.1
  - restatement on disk: An element of order $r$ has its $t$th power equal to the identity exactly when $r\mid t$ ([[lem-order-characterisation]]).
- `thm-automorphisms-of-a-finite-cyclic-group` **L3** — used at step(s) 1.1, 1.2
  - restatement on disk: If $g$ has order $n$, then $g^k=1$ exactly when $n\mid k$ ([[lem-order-characterisation]]).
- `thm-classification-of-groups-of-order-pq` **L5** — used at step(s) 1.1, 3.1
  - restatement on disk: A product with a normal subgroup is a subgroup; group powers obey the addition law; and $x^m=1$ exactly when the order of $x$ divides $m$ ([[lem-product-with-normal-subgroup]], [[lem-group-power-laws]], [[lem-order-characterisation]]).
- `fs-every-short-exact-sequence-of-groups-splits` **L3** — used at step(s) 1.1, 1.2
  - restatement on disk: The order criterion determines which multiples of a finite-order element are zero ([[lem-order-characterisation]]).
- `cor-power-congruence-solution-count-modulo-a-prime` **L2** — used at step(s) 1.1, 2.1
  - restatement on disk: If $g$ has order $p-1$, then $g^u=1$ exactly when $(p-1)\mid u$, and its powers with exponents modulo $p-1$ are distinct ([[lem-order-characterisation]]).
- `lem-groups-of-order-pq-have-a-normal-q-subgroup` **L9** — used at step(s) 1.1
  - restatement on disk: If $g$ has order $q$, the powers $g^0,\ldots,g^{q-1}$ are pairwise distinct and exhaust $\langle g\rangle$, so $|\langle g\rangle|=q$ ([[lem-order-characterisation]]).

#### target: `def-h-free-and-family-free-graph`  (definition, 5 citations)

- `prop-erdos-hajnal-property-is-monotone-under-induced-pattern-containment` **L2** — used at step(s) 1.1
  - restatement on disk: A graph is $F$-free when it has no induced embedding of $F$ ([[def-h-free-and-family-free-graph]]).
- `thm-complete-graph-free-classes-are-erdos-hajnal` **L3** — used at step(s) 1.1, 3.1
  - restatement on disk: A graph is $K_t$-free when it has no induced copy of $K_t$ ([[def-h-free-and-family-free-graph]]), and the class of graphs free of any fixed family is hereditary ([[lem-forbidden-induced-subgraph-classes-are-hereditary]]).
- `thm-p3-free-graphs-have-square-root-homogeneous-sets` **L3** — used at step(s) 1.2, 4.1
  - restatement on disk: $P_3$-free means having no induced copy of the three-vertex path, and every fixed-pattern-free class is hereditary ([[def-h-free-and-family-free-graph]], [[lem-forbidden-induced-subgraph-classes-are-hereditary]]).
- `cor-every-graph-on-at-most-three-vertices-has-the-erdos-hajnal-property` **L1** — used at step(s) 1.1
  - restatement on disk: A graph $H$ has the Erdős–Hajnal property when its hereditary $H$-free class has a positive exponent ([[def-erdos-hajnal-property-and-constant]], [[def-h-free-and-family-free-graph]], [[lem-forbidden-induced-subgraph-classes-are-hereditary]]).
- `thm-single-pattern-and-finite-family-erdos-hajnal-formulations` **L2** — used at step(s) 1.1, 1.2
  - restatement on disk: A graph is $\mathcal F$-free exactly when it is $H$-free for every $H\in\mathcal F$ ([[def-h-free-and-family-free-graph]]).

#### target: `thm-natural-logarithm-laws`  (theorem, 5 citations)

- `lem-erdos-hajnal-constants-are-downward-closed` **L2** — used at step(s) 1.3
  - restatement on disk: The logarithm is strictly increasing and $\log 1=0$ ([[thm-natural-logarithm-laws]]).
- `thm-ramsey-logarithmic-homogeneous-set-bound` **L5** — used at step(s) 2.1
  - restatement on disk: $\log:(0,\infty)\to\mathbb R$ is strictly increasing, $\log(xy)=\log x+\log y$ for $x,y>0$, and $\log1=0$ ([[thm-natural-logarithm-laws]]).
- `thm-complete-graph-free-classes-are-erdos-hajnal` **L8** — used at step(s) 1.2, 4.1
  - restatement on disk: The logarithm is strictly increasing, maps $1$ to $0$, and obeys the product and quotient laws ([[thm-natural-logarithm-laws]]).
- `thm-random-graph-logarithmic-homogeneous-set-upper-bound` **L8** — used at step(s) 1.1
  - restatement on disk: $\log:(0,\infty)\to\mathbb R$ is strictly increasing, and for $x,y>0$ satisfies $\log(xy)=\log x+\log y$, $\log(1/x)=-\log x$, and $\log1=0$ ([[thm-natural-logarithm-laws]]).
- `ex-bounded-order-graph-classes-are-erdos-hajnal` **L3** — used at step(s) 1.2, 2.1
  - restatement on disk: The logarithm is strictly increasing, satisfies $\log1=0$, and obeys the quotient law ([[thm-natural-logarithm-laws]]).

#### target: `def-ring-characteristic`  (definition, 3 citations)

- `prop-the-underlying-set-functor-on-fields-has-no-left-adjoint` **F3** — used at step(s) 1.3, 2.1
  - restatement on disk: The characteristic of a unital ring is the least positive natural $n$ with $n\cdot1_R=0_R$, if such an $n$ exists, and is $0$ otherwise ([[def-ring-characteristic]]).
- `thm-closed-form-for-a-linear-recurrence-over-a-splitting-field` **L6** — used at step(s) 1.2
  - restatement on disk: Characteristic zero means that no positive natural multiple of the field identity is zero ([[def-ring-characteristic]]).
- `thm-characteristic-of-a-field-is-zero-or-prime` **L1** — used at step(s) 1.1, 3.1
  - restatement on disk: If the set of positive $n$ with $n\cdot1_F=0$ is nonempty, the characteristic is its least element; otherwise it is $0$ ([[def-ring-characteristic]]).

#### target: `thm-nth-roots-exist`  (theorem, 3 citations)

- `lem-inner-product-pairing-is-nondegenerate-and-norm-is-homogeneous` **L2** — used at step(s) 2.1
  - restatement on disk: The induced norm is the unique nonnegative square root of $\langle w,w\rangle$ ([[def-inner-product-norm]], [[thm-nth-roots-exist]]).
- `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces` **L2** — used at step(s) 1.1, 1.2, 2.1
  - restatement on disk: The norm is the nonnegative square root of the diagonal pairing ([[def-inner-product-norm]], [[thm-nth-roots-exist]]).
- `ex-degree-of-q-cube-root-two` **L3** — used at step(s) 1.1
  - restatement on disk: The positive real $n$-th root exists uniquely for every positive input and $n\ge1$ ([[thm-nth-roots-exist]]).

#### target: `thm-pascals-rule`  (theorem, 3 citations)

- `thm-binomial-theorem-over-a-commutative-ring` **L4** — used at step(s) 3.1
  - restatement on disk: Pascal's identity is $\binom{n+1}{k+1}=\binom nk+\binom n{k+1}$ ([[thm-pascals-rule]]).
- `lem-prime-power-binomial-congruence` **L2** — used at step(s) 1.1, 1.2
  - restatement on disk: Pascal's rule holds for binomial coefficients ([[thm-pascals-rule]]), and the closed factorial formula holds when the lower index does not exceed the upper one ([[thm-binomial-closed-formula]]).
- `lem-binomial-series-for-a-repeated-pole` **L4** — used at step(s) 3.1
  - restatement on disk: The hockey-stick identity is $\sum_{i<n+1}\binom ik=\binom{n+1}{k+1}$ ([[thm-pascals-rule]]).

#### target: `def-normal-subgroup`  (definition, 3 citations)

- `prop-semidirect-product-is-direct-iff-action-is-trivial` **L3** — used at step(s) 1.2
  - restatement on disk: A subgroup $M\le G$ is normal when $gMg^{-1}=M$ for every $g\in G$ ([[def-normal-subgroup]]).
- `lem-characteristic-subgroup-of-a-normal-subgroup-is-normal` **L2** — used at step(s) 1.1, 2.1
  - restatement on disk: A subgroup is normal exactly when conjugation by every ambient element preserves it ([[def-normal-subgroup]]).
- `prop-canonical-subgroups-of-an-external-semidirect-product` **L2** — used at step(s) 1.1, 2.1
  - restatement on disk: A subgroup is a subset closed under the group operations and normality means invariance under conjugation ([[def-subgroup]], [[def-normal-subgroup]]).

#### target: `thm-euclids-lemma`  (theorem, 3 citations)

- `lem-prime-divides-intermediate-binomial-coefficients` **L4** — used at step(s) 3.1
  - restatement on disk: If a prime divides a product of integers, it divides one of the factors ([[thm-euclids-lemma]]).
- `lem-prime-power-binomial-congruence` **L3** — used at step(s) 1.2
  - restatement on disk: If a prime divides a product, it divides one factor ([[thm-euclids-lemma]]); a divisor coprime to one factor may be cancelled from a divisibility relation ([[lem-coprime-divides-product]]).
- `lem-groups-of-order-pq-have-a-normal-q-subgroup` **L7** — used at step(s) 1.2
  - restatement on disk: If a prime divides a product, it divides one of the factors ([[thm-euclids-lemma]]).

#### target: `def-order-in-a-group`  (definition, 2 citations)

- `lem-order-of-five-modulo-two-powers` **L1** — used at step(s) 4.1
  - restatement on disk: The order is the least positive exponent giving the identity ([[def-order-in-a-group]]), and an element of order $r$ has $x^t=1$ exactly when $r\mid t$ ([[lem-order-characterisation]]).
- `lem-order-of-a-power-in-a-finite-cyclic-group` **L1** — used at step(s) 4.1
  - restatement on disk: The order of an element is the least positive exponent giving the identity ([[def-order-in-a-group]]).

#### target: `thm-cardinality-of-a-set-of-functions`  (theorem, 2 citations)

- `thm-finite-fields-have-prime-power-order` **L6** — used at step(s) 2.1
  - restatement on disk: The set of functions from an $n$-element set to a $p$-element set has cardinality $p^n$ ([[thm-cardinality-of-a-set-of-functions]], [[def-nat-power]]).
- `cor-finite-extensions-of-finite-fields-are-simple` **L3** — used at step(s) 1.1
  - restatement on disk: The functions from an $n$-element set to a finite set form a finite set ([[thm-cardinality-of-a-set-of-functions]]).

#### target: `cor-gcd-quotients-coprime`  (corollary, 2 citations)

- `cor-power-congruence-solution-count-modulo-a-prime` **L4** — used at step(s) 1.2
  - restatement on disk: Dividing two integers by their nonzero greatest common divisor gives coprime quotients ([[cor-gcd-quotients-coprime]]).
- `lem-order-of-a-power-in-a-finite-cyclic-group` **L5** — used at step(s) 1.1
  - restatement on disk: After dividing two integers by their nonzero greatest common divisor, the resulting quotients are coprime ([[cor-gcd-quotients-coprime]]).

#### target: `def-quotient-module`  (definition, 2 citations)

- `thm-right-exactness-of-tensor-products` **L5** — used at step(s) 2.1
  - restatement on disk: For a submodule $K\le X$, the quotient module $X/K$ has cosets $x+K$ and its induced scalar action ([[def-quotient-module]]).
- `cor-tensor-product-with-a-quotient-ring` **L4** — used at step(s) 3.1, 4.1, 5.1
  - restatement on disk: The quotient module $M/IM$ consists of cosets with the induced scalar action ([[def-quotient-module]]).

#### target: `def-multivariate-polynomial-ring-by-iteration`  (definition, 2 citations)

- `thm-elementary-symmetric-polynomials-are-algebraically-independent` **L2** — used at step(s) 2.1, 4.1
  - restatement on disk: A polynomial in an iterated polynomial ring has finite support and is zero exactly when every coefficient is zero ([[def-multivariate-polynomial-ring-by-iteration]]).
- `ex-the-galois-connection-between-ideals-and-varieties` **F1** — used at step(s) 1.1
  - restatement on disk: Multivariate polynomial rings are defined recursively by $R[x_1,\ldots,x_0]=R$ and $R[x_1,\ldots,x_{n+1}]=R[x_1,\ldots,x_n][x_{n+1}]$, with commuting indeterminates ([[def-multivariate-polynomial-ring-by-iteration]]).

#### target: `def-polynomial-ring-over-a-commutative-ring`  (definition, 2 citations)

- `ex-polynomial-extension-of-scalars` **L2** — used at step(s) 1.1, 1.2, 2.1
  - restatement on disk: Polynomial rings consist of finitely supported coefficient families, with multiplication given by finite convolution ([[def-polynomial-ring-over-a-commutative-ring]]).
- `ex-polynomial-injection-killed-by-tensoring` **L1** — used at step(s) 1.1, 2.1
  - restatement on disk: Polynomials are finitely supported coefficient families; in particular $x$ is nonzero and $1\notin(x)$ ([[def-polynomial-ring-over-a-commutative-ring]]).

#### target: `def-subcategory-and-full-subcategory`  (definition, 2 citations)

- `thm-stone-cech-is-left-adjoint-to-the-inclusion-of-compact-hausdorff-spaces` **F4** — used at step(s) 1.1
  - restatement on disk: A full subcategory contains all ambient morphisms between its objects ([[def-subcategory-and-full-subcategory]]).
- `prop-an-adjunction-restricts-to-an-equivalence-on-its-fixed-subcategories` **F1** — used at step(s) 2.1
  - restatement on disk: A full subcategory contains chosen objects and all morphisms between them from the ambient category ([[def-subcategory-and-full-subcategory]]).

#### target: `def-algebraic-dual-and-linear-functional`  (definition, 2 citations)

- `thm-riesz-representation-in-finite-dimensions` **L4** — used at step(s) 2.1, 4.1
  - restatement on disk: The algebraic dual consists of all linear functionals from $V$ to its scalar field ([[def-algebraic-dual-and-linear-functional]]).
- `thm-hom-from-a-finite-dimensional-space-as-a-tensor-product` **L4** — used at step(s) 1.1
  - restatement on disk: The algebraic dual is $V^*=\mathcal L(V,F)$ ([[def-algebraic-dual-and-linear-functional]]).

#### target: `thm-quotient-group-universal-property`  (theorem, 2 citations)

- `thm-universal-property-of-module-tensor-products` **L5** — used at step(s) 4.1
  - restatement on disk: If a group homomorphism $f:G\to K$ kills a normal subgroup $H$, then it factors uniquely through a group homomorphism $G/H\to K$ ([[thm-quotient-group-universal-property]]).
- `thm-abelianisation-is-left-adjoint-to-the-inclusion-of-abelian-groups` **F3** — used at step(s) 2.1, 4.1
  - restatement on disk: A homomorphism that kills a normal subgroup factors uniquely through the quotient group ([[thm-quotient-group-universal-property]]).

#### target: `def-product-ring`  (definition, 1 citation)

- `ex-complex-tensor-square-over-the-reals` **L5** — used at step(s) 2.1, 2.3
  - restatement on disk: $\mathbb C\times\mathbb C$ has componentwise ring operations ([[def-product-ring]]).

#### target: `def-indexed-union-and-intersection`  (definition, 1 citation)

- `lem-words-satisfy-the-free-monoid-universal-property` **F7** — used at step(s) 1.1
  - restatement on disk: The indexed union of a family $(A_i)_{i\in I}$ is $\bigcup_{i\in I}A_i=\bigcup\{A_i:i\in I\}$ ([[def-indexed-union-and-intersection]]).

#### target: `cor-euclids-lemma-for-finite-products`  (corollary, 1 citation)

- `thm-finite-fields-have-prime-power-order` **L7** — used at step(s) 3.1
  - restatement on disk: If a prime $p$ divides a finite product of integers, it divides one of the factors ([[cor-euclids-lemma-for-finite-products]]).

#### target: `def-graph-distance-and-girth`  (definition, 1 citation)

- `thm-p3-free-graphs-have-square-root-homogeneous-sets` **L7** — used at step(s) 1.2
  - restatement on disk: A path has distinct vertices and consecutive vertices adjacent ([[def-graph-walk-trail-path-and-cycle]]); the distance of connected vertices is the minimum length of a path joining them ([[def-graph-distance-and-girth]]).

#### target: `def-vector-space`  (definition, 1 citation)

- `ex-frobenius-reciprocity-for-group-representations` **F2** — used at step(s) 1.1, 2.1
  - restatement on disk: A vector space is an abelian group under addition with scalar laws $\lambda(u+v)=\lambda u+\lambda v$, $(\lambda+\mu)v=\lambda v+\mu v$, $(\lambda\mu)v=\lambda(\mu v)$, and $1v=v$ ([[def-vector-space]]).

#### target: `def-exponent-of-a-finite-group`  (definition, 1 citation)

- `cor-carmichael-exponent-theorem` **L3** — used at step(s) 2.1
  - restatement on disk: Every element of a finite group raised to its exponent is the identity ([[def-exponent-of-a-finite-group]]).

#### target: `thm-determinant-multiplicative`  (theorem, 1 citation)

- `thm-gram-determinant-detects-linear-independence` **L4** — used at step(s) 2.1
  - restatement on disk: For $n\ge1$ and same-sized $n\times n$ matrices over a commutative ring, $\det(AB)=\det(A)\det(B)$ and $\det(A^{\mathsf T})=\det(A)$ ([[thm-determinant-multiplicative]], [[thm-determinant-of-transpose]]).

#### target: `thm-gcd-generates-the-subgroup`  (theorem, 1 citation)

- `fs-tensor-products-of-nonzero-cyclic-groups-are-always-nonzero` **L2** — used at step(s) 1.2, 2.1
  - restatement on disk: The subgroup $m\mathbb Z+n\mathbb Z$ of $\mathbb Z$ is $d\mathbb Z$ ([[thm-gcd-generates-the-subgroup]]).

#### target: `def-partial-order`  (definition, 1 citation)

- `cor-a-galois-connection-satisfies-fgf-equals-f-and-gfg-equals-g` **F1** — used at step(s) 2.1
  - restatement on disk: Antisymmetry says that $x\le y$ and $y\le x$ imply $x=y$ ([[def-partial-order]]).

#### target: `thm-polynomial-division-algorithm-over-a-field`  (theorem, 1 citation)

- `thm-linear-recurrence-iff-rational-generating-function` **L2** — used at step(s) 1.3
  - restatement on disk: If $0\ne Q\in K[x]$ and $P\in K[x]$, there are unique $D,R\in K[x]$ with $P=DQ+R$ and either $R=0$ or $\deg R<\deg Q$ ([[thm-polynomial-division-algorithm-over-a-field]]).

#### target: `def-characteristic-subgroup`  (definition, 1 citation)

- `lem-characteristic-subgroup-of-a-normal-subgroup-is-normal` **L1** — used at step(s) 2.1
  - restatement on disk: A characteristic subgroup is preserved by every automorphism of its ambient group ([[def-characteristic-subgroup]]).

#### target: `thm-image-subgroup-and-kernel-normal`  (theorem, 1 citation)

- `ex-symmetric-group-splits-over-the-alternating-group` **L3** — used at step(s) 1.1
  - restatement on disk: The kernel of a group homomorphism is normal ([[thm-image-subgroup-and-kernel-normal]]).

#### target: `cor-dimensions-of-matrix-and-linear-map-spaces`  (corollary, 1 citation)

- `thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms` **L3** — used at step(s) 1.2
  - restatement on disk: The space $\mathcal L(V,V)$ is finite-dimensional, with dimension $(\dim V)^2$ ([[cor-dimensions-of-matrix-and-linear-map-spaces]]).

#### target: `thm-logarithm-slower-than-every-positive-power`  (theorem, 1 citation)

- `cor-the-class-of-all-graphs-is-not-erdos-hajnal` **L3** — used at step(s) 1.2
  - restatement on disk: For every $\epsilon>0$, $\log x/x^\epsilon\to0$ as $x\to+\infty$ ([[thm-logarithm-slower-than-every-positive-power]]).

#### target: `thm-markov-inequality`  (theorem, 1 citation)

- `lem-energy-controls-density-approximation` **L2** — used at step(s) 3.1
  - restatement on disk: For a nonnegative finite random variable $X$ and $a>0$, Markov's inequality gives $\Pr(X\ge a)\le\mathbb E X/a$ ([[thm-markov-inequality]]).

#### target: `cor-polynomial-ring-over-a-domain-is-a-domain`  (corollary, 1 citation)

- `ex-polynomial-injection-killed-by-tensoring` **L2** — used at step(s) 1.1
  - restatement on disk: A polynomial ring over an integral domain is an integral domain ([[cor-polynomial-ring-over-a-domain-is-a-domain]]).

#### target: `thm-category-theoretic-duality-principle`  (theorem, 1 citation)

- `cor-left-adjoints-preserve-colimits` **F1** — used at step(s) 1.1
  - restatement on disk: A formal theorem derived from the category axioms has a formal dual obtained by reversing morphisms and exchanging each notion with its opposite-category version ([[thm-category-theoretic-duality-principle]]).

#### target: `lem-nat-add-associative`  (lemma, 1 citation)

- `lem-words-satisfy-the-free-monoid-universal-property` **F5** — used at step(s) 2.1
  - restatement on disk: Natural addition is associative: $(n+m)+r=n+(m+r)$ ([[lem-nat-add-associative]]).

#### target: `prop-monoids-and-groups-as-one-object-categories`  (proposition, 1 citation)

- `fs-a-unit-and-counit-determine-an-adjunction-without-the-triangle-identities` **F1** — used at step(s) 1.1
  - restatement on disk: Every monoid is a one-object category, and it is a group exactly when every morphism in that category is invertible ([[prop-monoids-and-groups-as-one-object-categories]]).

#### target: `def-nat-multiplication`  (definition, 1 citation)

- `ex-adjunction-between-preorders-computed` **F3** — used at step(s) 2.1, 2.2
  - restatement on disk: Natural multiplication is determined by $a\cdot0=0$ and $a\cdot\sigma(b)=a\cdot b+a$ ([[def-nat-multiplication]]).

### Report format

Write your findings to stdout as your final message. Per finding:

- citing item id, fact label, cited target id
- **what the restatement claims** vs **what the Statement says** (quote both)
- which numbered step depends on the difference, or "no step depends on it"
- your severity: `fatal` (a step is unlicensed / a false claim is asserted) or
  `nonfatal` (a competent reader closes it in 30 seconds)

Close with: targets opened, edges checked, findings by severity. If you checked
an edge and it is clean, it is clean — do not pad the report.
