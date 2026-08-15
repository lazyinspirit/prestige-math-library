## This dispatch — cross-level citation refutation, cluster `xl-c`

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

#### target: `def-standard-complete-bipartite-path-and-cycle-graphs`  (definition, 9 citations)

- `thm-complete-graph-free-classes-are-erdos-hajnal` **L4** — used at step(s) 1.1, 5.1
  - restatement on disk: The graph $K_t$ has every pair of its $t$ vertices as an edge, while an empty graph has no edges ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).
- `thm-p3-free-graphs-have-square-root-homogeneous-sets` **L4** — used at step(s) 1.2
  - restatement on disk: The graph $P_3$ has three vertices and exactly its two consecutive edges ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).
- `ex-homogeneous-number-of-complete-and-empty-graphs` **L2** — used at step(s) 1.1, 1.2
  - restatement on disk: The graph $K_n$ has every possible edge and $\overline K_n$ has none ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).
- `ex-homogeneous-number-of-complete-bipartite-graphs` **L2** — used at step(s) 1.1, 1.2
  - restatement on disk: In $K_{a,b}$, the parts $A,B$ are disjoint, all cross-pairs are edges, and there are no edges inside either part ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).
- `ex-the-five-cycle-has-homogeneous-number-two` **L2** — used at step(s) 1.1, 1.2, 1.3
  - restatement on disk: In $C_5$, precisely the consecutive pairs modulo $5$ are edges ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).
- `ex-complete-and-empty-hereditary-classes-have-constant-one` **L3** — used at step(s) 1.1, 1.2
  - restatement on disk: A complete graph has every possible edge and an empty graph has none ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).
- `ex-a-forbidden-pattern-and-its-complement-share-eh-status` **L2** — used at step(s) 1.1
  - restatement on disk: The graph $P_3$ has two consecutive edges on three vertices ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).
- `ex-induced-path-counting-from-three-pure-pairs` **L3** — used at step(s) 1.1
  - restatement on disk: The graph $P_3$ has edges $12,23$ and nonedge $13$ ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).
- `cor-every-graph-on-at-most-three-vertices-has-the-erdos-hajnal-property` **L5** — used at step(s) 1.2
  - restatement on disk: The graphs $K_t$ and $P_3$ have the standard edge sets, and $P_0$ is the null graph ([[def-standard-complete-bipartite-path-and-cycle-graphs]]); complementation replaces the edge set by all missing pairs ([[def-graph-isomorphism-and-complement]]).

#### target: `def-group-isomorphism-and-automorphism`  (definition, 7 citations)

- `thm-automorphisms-of-a-finite-cyclic-group` **L4** — used at step(s) 1.2, 2.1
  - restatement on disk: An automorphism is an isomorphism from a group to itself ([[def-group-isomorphism-and-automorphism]]).
- `thm-automorphisms-of-a-finite-rank-free-abelian-group` **L2** — used at step(s) 3.1
  - restatement on disk: An automorphism is a homomorphism possessing a homomorphic inverse ([[def-group-isomorphism-and-automorphism]]).
- `thm-unit-group-modulo-two-power-structure` **L6** — used at step(s) 4.1
  - restatement on disk: A bijective group homomorphism is a group isomorphism ([[def-group-isomorphism-and-automorphism]]).
- `thm-unit-group-chinese-remainder-decomposition` **L3** — used at step(s) 3.1
  - restatement on disk: A bijective group homomorphism is an isomorphism ([[def-group-isomorphism-and-automorphism]]).
- `thm-internal-external-semidirect-product-equivalence` **L5** — used at step(s) 2.1, 3.1
  - restatement on disk: An isomorphism is a bijective homomorphism ([[def-group-isomorphism-and-automorphism]]).
- `lem-actions-related-by-automorphisms-give-isomorphic-semidirect-products` **L3** — used at step(s) 2.1
  - restatement on disk: A bijective homomorphism is an isomorphism ([[def-group-isomorphism-and-automorphism]]).
- `fs-an-abelian-group-has-an-abelian-automorphism-group` **L1** — used at step(s) 1.1
  - restatement on disk: An automorphism is a bijective homomorphism from a group to itself ([[def-group-isomorphism-and-automorphism]]).

#### target: `lem-forbidden-induced-subgraph-classes-are-hereditary`  (lemma, 6 citations)

- `thm-complete-graph-free-classes-are-erdos-hajnal` **L3** — used at step(s) 1.1, 3.1
  - restatement on disk: A graph is $K_t$-free when it has no induced copy of $K_t$ ([[def-h-free-and-family-free-graph]]), and the class of graphs free of any fixed family is hereditary ([[lem-forbidden-induced-subgraph-classes-are-hereditary]]).
- `thm-p3-free-graphs-have-square-root-homogeneous-sets` **L3** — used at step(s) 1.2, 4.1
  - restatement on disk: $P_3$-free means having no induced copy of the three-vertex path, and every fixed-pattern-free class is hereditary ([[def-h-free-and-family-free-graph]], [[lem-forbidden-induced-subgraph-classes-are-hereditary]]).
- `cor-every-graph-on-at-most-three-vertices-has-the-erdos-hajnal-property` **L1** — used at step(s) 1.1
  - restatement on disk: A graph $H$ has the Erdős–Hajnal property when its hereditary $H$-free class has a positive exponent ([[def-erdos-hajnal-property-and-constant]], [[def-h-free-and-family-free-graph]], [[lem-forbidden-induced-subgraph-classes-are-hereditary]]).
- `prop-erdos-hajnal-property-is-monotone-under-induced-pattern-containment` **L4** — used at step(s) 2.1
  - restatement on disk: Every fixed-pattern-free graph class is hereditary ([[lem-forbidden-induced-subgraph-classes-are-hereditary]]).
- `thm-single-pattern-and-finite-family-erdos-hajnal-formulations` **L3** — used at step(s) 2.1
  - restatement on disk: The Erdős–Hajnal property passes to hereditary subclasses ([[prop-erdos-hajnal-property-passes-to-hereditary-subclasses]]), and every family-free class is hereditary ([[lem-forbidden-induced-subgraph-classes-are-hereditary]]).
- `ex-a-forbidden-pattern-and-its-complement-share-eh-status` **L4** — used at step(s) 1.2
  - restatement on disk: Every fixed-pattern-free graph class is hereditary ([[lem-forbidden-induced-subgraph-classes-are-hereditary]]).

#### target: `lem-coprime-divides-product`  (lemma, 5 citations)

- `lem-order-of-a-power-in-a-finite-cyclic-group` **L6** — used at step(s) 3.1
  - restatement on disk: If $\gcd(r,s)=1$ and $r\mid st$, then $r\mid t$ ([[lem-coprime-divides-product]]).
- `cor-power-congruence-solution-count-modulo-a-prime` **L5** — used at step(s) 2.1
  - restatement on disk: If two integers are coprime and one divides a product containing the other, it divides the remaining factor ([[lem-coprime-divides-product]]).
- `lem-prime-power-binomial-congruence` **L3** — used at step(s) 1.2
  - restatement on disk: If a prime divides a product, it divides one factor ([[thm-euclids-lemma]]); a divisor coprime to one factor may be cancelled from a divisibility relation ([[lem-coprime-divides-product]]).
- `thm-unit-group-modulo-odd-prime-power-is-cyclic` **L6** — used at step(s) 3.1
  - restatement on disk: If two coprime integers divide an integer, then their product divides it ([[lem-coprime-divides-product]]).
- `thm-classification-of-groups-of-order-pq` **L6** — used at step(s) 3.1
  - restatement on disk: If two coprime integers divide an integer, then their product divides it ([[lem-coprime-divides-product]]).

#### target: `def-the-set-of-functions-from-one-set-to-another`  (definition, 4 citations)

- `lem-words-satisfy-the-free-monoid-universal-property` **F6** — used at step(s) 1.1
  - restatement on disk: For sets $A,B$, the functions $A\to B$ form a set ([[def-the-set-of-functions-from-one-set-to-another]]).
- `lem-coextension-of-scalars-carries-a-module-structure` **F4** — used at step(s) 1.1
  - restatement on disk: The functions from one set to another form a set ([[def-the-set-of-functions-from-one-set-to-another]]).
- `thm-currying-is-an-adjunction-in-set` **F1** — used at step(s) 1.1, 1.2
  - restatement on disk: The functions $A\to Y$ form the set $Y^A$ ([[def-the-set-of-functions-from-one-set-to-another]]).
- `ex-frobenius-reciprocity-for-group-representations` **F6** — used at step(s) 1.1
  - restatement on disk: For sets $A,B$, the functions $A\to B$ form the set $B^A$ ([[def-the-set-of-functions-from-one-set-to-another]]).

#### target: `def-field-homomorphism`  (definition, 3 citations)

- `thm-frobenius-endomorphism-and-finite-field-automorphism` **L4** — used at step(s) 1.2
  - restatement on disk: A field homomorphism preserves addition, multiplication, and $1$ ([[def-field-homomorphism]]).
- `thm-prime-subfield-classification` **L5** — used at step(s) 1.1, 1.2
  - restatement on disk: A field homomorphism preserves addition, multiplication, and $1$, and is injective ([[def-field-homomorphism]]).
- `prop-the-underlying-set-functor-on-fields-has-no-left-adjoint` **F2** — used at step(s) 1.3
  - restatement on disk: A field homomorphism satisfies $\varphi(x+y)=\varphi(x)+\varphi(y)$, $\varphi(xy)=\varphi(x)\varphi(y)$, and $\varphi(1_F)=1_G$, and is automatically injective because its kernel is an ideal of a field and does not contain $1_F$ ([[def-field-homomorphism]]).

#### target: `def-ring-matrix-product-identity-and-transpose`  (definition, 3 citations)

- `lem-formal-matrix-geometric-series` **L3** — used at step(s) 1.1, 1.2
  - restatement on disk: Matrix products use finite row-column sums and $I_p$ is the identity matrix ([[def-ring-matrix-product-identity-and-transpose]]).
- `prop-companion-matrix-iterates-a-linear-recurrence` **L2** — used at step(s) 1.1, 1.2
  - restatement on disk: Matrix multiplication is $(AB)_{ik}=\sum_j a_{ij}b_{jk}$, and $I_d$ is the identity matrix ([[def-ring-matrix-product-identity-and-transpose]]).
- `thm-weighted-walks-are-entries-of-transfer-matrix-powers` **L2** — used at step(s) 1.1, 1.2
  - restatement on disk: Matrix multiplication is $(AB)_{uv}=\sum_zA_{uz}B_{zv}$ and the identity matrix has diagonal entries $1$ and off-diagonal entries $0$ ([[def-ring-matrix-product-identity-and-transpose]]).

#### target: `thm-root-bound-for-polynomials-over-a-domain`  (theorem, 3 citations)

- `lem-power-congruence-root-bound-modulo-a-prime` **L3** — used at step(s) 2.1
  - restatement on disk: A nonzero polynomial of degree $d$ over an integral domain has at most $d$ roots ([[thm-root-bound-for-polynomials-over-a-domain]]).
- `prop-finite-fields-are-splitting-fields-of-x-q-minus-x` **L4** — used at step(s) 2.1
  - restatement on disk: A nonzero degree-$q$ polynomial over a domain has at most $q$ distinct roots ([[thm-root-bound-for-polynomials-over-a-domain]]).
- `ex-sampled-polynomial-inner-product-on-degree-at-most-three` **L2** — used at step(s) 2.1
  - restatement on disk: A nonzero polynomial over a domain has at most as many distinct roots as its degree ([[thm-root-bound-for-polynomials-over-a-domain]]).

#### target: `cor-independent-set-is-no-larger-than-a-finite-spanning-set`  (corollary, 3 citations)

- `cor-intermediate-field-degrees-divide` **L3** — used at step(s) 1.1
  - restatement on disk: A linearly independent subset of a space spanned by $N$ vectors has at most $N$ elements ([[cor-independent-set-is-no-larger-than-a-finite-spanning-set]]).
- `thm-finite-field-extensions-are-algebraic` **L2** — used at step(s) 1.1
  - restatement on disk: Any $n+1$ vectors in a space spanned by $n$ vectors are linearly dependent ([[cor-independent-set-is-no-larger-than-a-finite-spanning-set]]).
- `thm-hadamard-product-of-rational-series-is-rational` **L2** — used at step(s) 4.1
  - restatement on disk: A linearly independent subset of a vector space spanned by $m$ vectors has at most $m$ elements ([[cor-independent-set-is-no-larger-than-a-finite-spanning-set]]).

#### target: `def-linear-combination-and-span`  (definition, 2 citations)

- `thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms` **L4** — used at step(s) 1.2
  - restatement on disk: The span of a subset is the smallest subspace containing it, and its elements are finite linear combinations ([[def-linear-combination-and-span]]).
- `thm-bessel-inequality-and-finite-parseval-identity` **L3** — used at step(s) 3.1
  - restatement on disk: A vector belongs to the span of a finite list exactly when it is a finite linear combination of its members ([[def-linear-combination-and-span]]).

#### target: `thm-rat-field`  (theorem, 2 citations)

- `thm-prime-subfield-classification` **L4** — used at step(s) 1.2
  - restatement on disk: The rational numbers form a field ([[thm-rat-field]]).
- `ex-rationals-tensor-a-finite-cyclic-group-is-zero` **L2** — used at step(s) 1.2
  - restatement on disk: $\mathbb Q$ is a field, so the nonzero integer $n$ has an inverse in $\mathbb Q$ ([[thm-rat-field]]).

#### target: `thm-linear-congruence-solvability-and-solution-count`  (theorem, 2 citations)

- `thm-eulers-criterion-for-binomial-congruences` **L4** — used at step(s) 2.1
  - restatement on disk: The congruence $uy\equiv v\pmod f$ is solvable exactly when $\gcd(u,f)\mid v$ ([[thm-linear-congruence-solvability-and-solution-count]]).
- `cor-number-of-solutions-of-a-binomial-congruence` **L3** — used at step(s) 3.1
  - restatement on disk: A solvable congruence $uy\equiv v\pmod f$ has exactly $\gcd(u,f)$ solution classes modulo $f$ ([[thm-linear-congruence-solvability-and-solution-count]]).

#### target: `def-module-homomorphism-kernel-image-and-cokernel`  (definition, 2 citations)

- `prop-functoriality-of-module-tensor-products` **L2** — used at step(s) 1.1
  - restatement on disk: A module homomorphism preserves addition and the relevant scalar action ([[def-module-homomorphism-kernel-image-and-cokernel]]).
- `lem-coextension-of-scalars-carries-a-module-structure` **F3** — used at step(s) 1.2, 1.4, 3.1
  - restatement on disk: An $R$-linear map satisfies $h(x+y)=h(x)+h(y)$ and $h(rx)=rh(x)$ ([[def-module-homomorphism-kernel-image-and-cokernel]]).

#### target: `thm-complex-numbers-form-a-field`  (theorem, 2 citations)

- `ex-relative-algebraic-closure-of-r-in-c` **L2** — used at step(s) 1.1
  - restatement on disk: Every complex number has a unique form $a+bi$, with $i^2=-1$ ([[thm-complex-numbers-form-a-field]]).
- `ex-complex-tensor-square-over-the-reals` **L1** — used at step(s) 1.1, 1.2, 2.1, 2.2
  - restatement on disk: Every complex number has unique form $a+bi$, with the usual arithmetic, and $\mathbb C$ is a field ([[def-complex-numbers-and-arithmetic]], [[thm-complex-numbers-form-a-field]]).

#### target: `def-induced-copy-number`  (definition, 2 citations)

- `thm-induced-graph-removal-lemma` **L4** — used at step(s) 6.1
  - restatement on disk: The number $\operatorname{ind}_H(G)$ counts labelled induced embeddings of $H$ in $G$ ([[def-induced-copy-number]]).
- `thm-induced-counting-lemma-for-regular-pairs` **L3** — used at step(s) 1.1, 6.1
  - restatement on disk: An induced embedding is injective and preserves both adjacency and nonadjacency; its labelled count is $\operatorname{ind}_H(G)$ ([[def-induced-embedding-and-induced-copy]], [[def-induced-copy-number]]).

#### target: `prop-coefficient-extraction-linearity-and-extensionality`  (proposition, 2 citations)

- `lem-four-spaces-for-a-fixed-linear-recurrence` **L3** — used at step(s) 1.2, 2.2
  - restatement on disk: Formal series are equal exactly when all their coefficients agree, and $[x^n](QF)=\sum_{i=0}^{n}[x^i]Q[x^{n-i}]F$ ([[prop-coefficient-extraction-linearity-and-extensionality]]).
- `lem-binomial-series-for-a-repeated-pole` **L2** — used at step(s) 1.1, 2.1
  - restatement on disk: The coefficient of a Cauchy product is $[x^n](fg)=\sum_{i=0}^{n}[x^i]f[x^{n-i}]g$ ([[prop-coefficient-extraction-linearity-and-extensionality]]).

#### target: `def-transpose-of-a-matrix`  (definition, 2 citations)

- `thm-qr-factorisation-over-r-or-c` **L5** — used at step(s) 1.2, 2.1
  - restatement on disk: The conjugate transpose is obtained by entrywise conjugation followed by transposition ([[def-transpose-of-a-matrix]], [[lem-complex-conjugation-and-modulus-laws]]).
- `thm-matrix-of-the-adjoint-is-the-conjugate-transpose` **L4** — used at step(s) 2.1
  - restatement on disk: Transposition interchanges matrix rows and columns, and complex conjugation is an involution ([[def-transpose-of-a-matrix]], [[lem-complex-conjugation-and-modulus-laws]]).

#### target: `thm-quotient-module-universal-property`  (theorem, 2 citations)

- `thm-right-exactness-of-tensor-products` **L6** — used at step(s) 2.1
  - restatement on disk: A module homomorphism that kills $K$ factors uniquely through $X/K$ ([[thm-quotient-module-universal-property]]).
- `cor-tensor-product-with-a-quotient-ring` **L5** — used at step(s) 3.1
  - restatement on disk: A homomorphism that kills a submodule factors uniquely through the quotient module ([[thm-quotient-module-universal-property]]).

#### target: `def-nat-power`  (definition, 1 citation)

- `thm-finite-fields-have-prime-power-order` **L6** — used at step(s) 2.1
  - restatement on disk: The set of functions from an $n$-element set to a $p$-element set has cardinality $p^n$ ([[thm-cardinality-of-a-set-of-functions]], [[def-nat-power]]).

#### target: `def-abelianisation-of-a-group`  (definition, 1 citation)

- `thm-abelianisation-is-left-adjoint-to-the-inclusion-of-abelian-groups` **F1** — used at step(s) 1.2, 2.1
  - restatement on disk: The abelianisation of $G$ is $G^{\mathrm{ab}}:=G/[G,G]$ ([[def-abelianisation-of-a-group]]).

#### target: `def-subring`  (definition, 1 citation)

- `prop-symmetric-polynomials-form-a-subring` **L2** — used at step(s) 2.1
  - restatement on disk: A subset is a subring when it contains $1$ and is closed under addition, additive inverses, and multiplication ([[def-subring]]).

#### target: `thm-projective-module-characterizations`  (theorem, 1 citation)

- `thm-projective-modules-are-flat` **L4** — used at step(s) 1.2, 4.1
  - restatement on disk: Every projective module is, without choice, a direct summand of its canonical free cover ([[thm-projective-module-characterizations]]).

#### target: `def-isomorphism-groupoid-and-connected-category`  (definition, 1 citation)

- `ex-groupoid-inclusion-is-left-adjoint-to-the-maximal-subgroupoid` **F1** — used at step(s) 1.1, 1.2
  - restatement on disk: A groupoid is a category in which every morphism is an isomorphism ([[def-isomorphism-groupoid-and-connected-category]]).

#### target: `lem-group-homomorphism-basic-properties`  (lemma, 1 citation)

- `thm-external-semidirect-product-is-a-group` **L3** — used at step(s) 1.2, 2.1
  - restatement on disk: A homomorphism preserves identities and inverses ([[lem-group-homomorphism-basic-properties]]).

#### target: `thm-cauchy-schwarz-finite`  (theorem, 1 citation)

- `prop-coordinate-cauchy-schwarz-agrees-with-the-finite-sum-theorem` **L3** — used at step(s) 2.1
  - restatement on disk: The published finite-sum theorem states the displayed inequality and equality exactly when some $(\lambda,\mu)\ne(0,0)$ satisfies $\lambda a_k=\mu b_k$ for every $k<n$ ([[thm-cauchy-schwarz-finite]]).

#### target: `lem-int-cancellation`  (lemma, 1 citation)

- `fs-tensoring-preserves-injections` **L1** — used at step(s) 1.1
  - restatement on disk: $\mathbb Z$ is a commutative ring ([[thm-int-comm-ring]]), and multiplication by a nonzero integer can be cancelled ([[lem-int-cancellation]]).

#### target: `def-split-monomorphism-and-split-epimorphism`  (definition, 1 citation)

- `thm-fullness-and-faithfulness-of-a-right-adjoint-read-off-the-counit` **F3** — used at step(s) 1.3, 2.1, 3.1
  - restatement on disk: A morphism $e:A\to B$ is a split monomorphism when there is $r:B\to A$ with $r\circ e=1_A$ ([[def-split-monomorphism-and-split-epimorphism]]).

#### target: `cor-composite-of-two-subfields`  (corollary, 1 citation)

- `prop-degree-bound-for-composita` **L1** — used at step(s) 2.1, 4.1
  - restatement on disk: The compositum $EE'$ is the smallest subfield of $\Omega$ containing $E\cup E'$ ([[cor-composite-of-two-subfields]]).

#### target: `thm-first-isomorphism-theorem-groups`  (theorem, 1 citation)

- `thm-splitting-lemma-for-group-extensions` **L3** — used at step(s) 1.2
  - restatement on disk: The first isomorphism theorem identifies the quotient by a kernel with the image ([[thm-first-isomorphism-theorem-groups]]).

#### target: `cor-polynomial-ring-over-a-field-is-a-pid`  (corollary, 1 citation)

- `thm-minimal-polynomial-is-well-defined-and-controls-annihilators` **L1** — used at step(s) 2.1
  - restatement on disk: For every field $F$, every ideal of $F[x]$ is principal ([[cor-polynomial-ring-over-a-field-is-a-pid]]).

#### target: `cor-factor-theorem-over-a-commutative-ring`  (corollary, 1 citation)

- `thm-diagonalisable-iff-minimal-polynomial-splits-with-distinct-roots` **L3** — used at step(s) 2.1
  - restatement on disk: For a polynomial over a field, $p(\lambda)=0$ exactly when $x-\lambda$ divides $p$ ([[cor-factor-theorem-over-a-commutative-ring]]).

#### target: `thm-logarithm-change-of-base`  (theorem, 1 citation)

- `cor-the-class-of-all-graphs-is-not-erdos-hajnal` **L4** — used at step(s) 1.2
  - restatement on disk: For $x>0$, $\log_2x=\log x/\log2$ ([[thm-logarithm-change-of-base]]).

#### target: `lem-cauchy-schwarz-for-finite-random-variables`  (lemma, 1 citation)

- `lem-energy-is-monotone-under-refinement` **L2** — used at step(s) 2.1
  - restatement on disk: For a finite random variable $Z$, Cauchy--Schwarz gives $(\mathbb E Z)^2\le\mathbb E(Z^2)$ ([[lem-cauchy-schwarz-for-finite-random-variables]]).

#### target: `thm-every-equivalence-can-be-made-an-adjoint-equivalence`  (theorem, 1 citation)

- `prop-an-adjoint-equivalence-is-an-adjunction-with-invertible-unit-and-counit` **F2** — used at step(s) 2.1
  - restatement on disk: Every equivalence of categories admits a choice of unit and counit satisfying the triangle identities, and hence can be equipped as an adjoint equivalence ([[thm-every-equivalence-can-be-made-an-adjoint-equivalence]]).

#### target: `prop-preorders-as-categories-and-monotone-maps-as-functors`  (proposition, 1 citation)

- `prop-in-a-poset-adjunction-the-triangle-identities-are-automatic` **F1** — used at step(s) 1.1, 1.2, 1.3
  - restatement on disk: A preorder determines a category with at most one morphism between any two objects, and functors between such categories are exactly monotone maps ([[prop-preorders-as-categories-and-monotone-maps-as-functors]]).

#### target: `def-commutator-and-commutator-subgroup`  (definition, 1 citation)

- `thm-abelianisation-is-left-adjoint-to-the-inclusion-of-abelian-groups` **F2** — used at step(s) 1.1, 1.2
  - restatement on disk: For $g,h\in G$, their commutator is $[g,h]:=ghg^{-1}h^{-1}$, and $[G,G]$ is generated by all commutators ([[def-commutator-and-commutator-subgroup]]).

#### target: `lem-the-set-of-functions-between-two-sets-is-a-set`  (lemma, 1 citation)

- `thm-currying-is-an-adjunction-in-set` **F2** — used at step(s) 2.1
  - restatement on disk: The function collection between two sets is a set ([[lem-the-set-of-functions-between-two-sets-is-a-set]]).

#### target: `thm-division-algorithm-in-z`  (theorem, 1 citation)

- `ex-adjunction-between-preorders-computed` **F4** — used at step(s) 1.1, 2.1, 3.1, 4.1
  - restatement on disk: For integers $a$ and $b>0$, there is a unique pair $(q,s)$ with $a=qb+s$ and $0\le s<b$; moreover $b$ divides $a$ exactly when $s=0$ ([[thm-division-algorithm-in-z]]).

### Report format

Write your findings to stdout as your final message. Per finding:

- citing item id, fact label, cited target id
- **what the restatement claims** vs **what the Statement says** (quote both)
- which numbered step depends on the difference, or "no step depends on it"
- your severity: `fatal` (a step is unlicensed / a false claim is asserted) or
  `nonfatal` (a competent reader closes it in 30 seconds)

Close with: targets opened, edges checked, findings by severity. If you checked
an edge and it is clean, it is clean — do not pad the report.
