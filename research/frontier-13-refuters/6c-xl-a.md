## This dispatch — cross-level citation refutation, cluster `xl-a`

You are checking **cross-level citations**: facts in this run's draft items
that cite items already **published** in the library. Step 6b found this run's
dominant defect class *within* batches — an `[F#]`/`[L#]` restatement claiming
more than the cited item's Statement says (an enlarged domain, a dropped
`n\ge1`, a citation pointing at an item that does not state the claimed fact at
all). The cross-level surface below has had no equivalent pass.

Your cluster is **39 published target items** carrying
**82 load-bearing citation edges**.

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

#### target: `lem-standard-basis-of-f-n`  (lemma, 7 citations)

- `ex-nilpotent-shift-and-its-single-primary-component` **L1** — used at step(s) 1.1, 2.1
  - restatement on disk: The list $(e_i)_{i<n}$ is an ordered basis of $F^n$, including the empty case ([[lem-standard-basis-of-f-n]]).
- `fs-diagonalisability-requires-distinct-characteristic-roots` **L1** — used at step(s) 1.1
  - restatement on disk: The standard unit vectors form an ordered basis of $F^2$ ([[lem-standard-basis-of-f-n]]).
- `prop-standard-coordinate-inner-products` **L3** — used at step(s) 1.2, 2.1
  - restatement on disk: The standard unit vectors form an ordered basis of $F^n$, including $n=0$ ([[lem-standard-basis-of-f-n]]).
- `cor-tensor-products-of-finite-free-modules-and-dimension` **L2** — used at step(s) 1.3
  - restatement on disk: For any unital ring $R$, the free module $R^{(m)}$ has its standard basis indexed by $m$, including the empty basis at $m=0$ ([[def-free-module-on-a-set-and-standard-basis]]). For a field $F$, this is the usual basis of $F^m$ ([[lem-standard-basis-of-f-n]]).
- `ex-extension-of-scalars-of-coordinate-modules` **L2** — used at step(s) 1.1, 2.1, 3.1
  - restatement on disk: The coordinate vectors $e_0,\ldots,e_{n-1}$ form a basis of $F^n$, with the empty basis when $n=0$ ([[lem-standard-basis-of-f-n]]).
- `fs-every-tensor-is-an-elementary-tensor` **L1** — used at step(s) 1.1
  - restatement on disk: The two standard coordinate vectors form a basis of $F^2$ ([[lem-standard-basis-of-f-n]]).
- `lem-four-spaces-for-a-fixed-linear-recurrence` **L4** — used at step(s) 3.1
  - restatement on disk: The standard unit vectors form a basis of $K^d$, so $\dim_KK^d=d$, including the zero-dimensional boundary ([[lem-standard-basis-of-f-n]]).

#### target: `def-binomial-coefficient`  (definition, 7 citations)

- `thm-binomial-theorem-over-a-commutative-ring` **L2** — used at step(s) 1.1, 3.1
  - restatement on disk: The binomial coefficient $\binom nk$ counts the $k$-element subsets of an $n$-element set, with $\binom n0=\binom nn=1$ ([[def-binomial-coefficient]]).
- `lem-prime-divides-intermediate-binomial-coefficients` **L1** — used at step(s) 1.1
  - restatement on disk: Binomial coefficients are natural numbers ([[def-binomial-coefficient]]).
- `lem-prime-power-binomial-congruence` **L1** — used at step(s) 1.1
  - restatement on disk: Binomial coefficients count subsets and have their usual boundary values ([[def-binomial-coefficient]]).
- `thm-ramsey-logarithmic-homogeneous-set-bound` **L3** — used at step(s) 3.1
  - restatement on disk: The number $\binom mr$ counts the $r$-element subsets of an $m$-element set ([[def-binomial-coefficient]]).
- `thm-complete-graph-free-classes-are-erdos-hajnal` **L6** — used at step(s) 2.1
  - restatement on disk: The binomial coefficient $\binom mr$ counts the $r$-subsets of an $m$-set ([[def-binomial-coefficient]]).
- `thm-random-graph-logarithmic-homogeneous-set-upper-bound` **L6** — used at step(s) 3.1, 4.1
  - restatement on disk: There are $\binom nk$ subsets of size $k$ in an $n$-set ([[def-binomial-coefficient]]).
- `lem-binomial-series-for-a-repeated-pole` **L3** — used at step(s) 1.1, 3.1
  - restatement on disk: Binomial coefficients count finite subsets and satisfy $\binom n0=1$, $\binom nn=1$, and $\binom nk=0$ for $k>n$ ([[def-binomial-coefficient]]).

#### target: `cor-totient-at-one-and-at-a-prime`  (corollary, 6 citations)

- `lem-order-p-actions-on-a-cyclic-q-group` **L2** — used at step(s) 1.2, 2.1
  - restatement on disk: For prime $q$, $\varphi(q)=q-1$ ([[cor-totient-at-one-and-at-a-prime]]), and $\varphi(n)=\bigl|(\mathbb Z/n)^\times\bigr|$ ([[def-unit-group-modulo-n-and-euler-totient]]); together these give $\bigl|(\mathbb Z/q)^\times\bigr|=q-1$.
- `cor-unit-group-modulo-prime-is-cyclic` **L5** — used at step(s) 2.1
  - restatement on disk: For prime $p$, $\varphi(p)=p-1$ ([[cor-totient-at-one-and-at-a-prime]]).
- `lem-primitive-roots-pass-between-odd-n-and-twice-n` **L3** — used at step(s) 1.2
  - restatement on disk: For a prime $p$, $\varphi(p)=p-1$; in particular $\varphi(2)=1$ ([[cor-totient-at-one-and-at-a-prime]]).
- `ex-primitive-roots-modulo-seventeen` **L2** — used at step(s) 1.1
  - restatement on disk: $\varphi(17)=16$ ([[cor-totient-at-one-and-at-a-prime]]).
- `ex-index-table-modulo-seventeen` **L4** — used at step(s) 1.1, 2.1
  - restatement on disk: $\varphi(17)=16$ ([[cor-totient-at-one-and-at-a-prime]]).
- `ex-primitive-root-modulo-thirteen-by-prime-divisor-tests` **L2** — used at step(s) 2.1
  - restatement on disk: $\varphi(13)=12$ ([[cor-totient-at-one-and-at-a-prime]]).

#### target: `def-free-module-on-a-set-and-standard-basis`  (definition, 5 citations)

- `thm-universal-property-of-module-tensor-products` **L3** — used at step(s) 2.1
  - restatement on disk: Every element of $\mathbb Z^{(X)}$ has a unique finite expression $\sum_{x\in E}k_xe_x$ with $k_x\in\mathbb Z$ ([[def-free-module-on-a-set-and-standard-basis]]).
- `thm-tensor-product-basis-from-bases` **L3** — used at step(s) 1.1, 2.1, 3.1, 3.2
  - restatement on disk: A free module on $X$ is $R^{(X)}=\bigoplus_{x\in X}R$, with standard basis and unique finite coordinate expressions, including $X=\varnothing$ ([[def-free-module-on-a-set-and-standard-basis]]).
- `thm-flatness-criteria-by-injections-and-ideals` **L4** — used at step(s) 2.1, 2.2
  - restatement on disk: A finite list $x_1,\ldots,x_n$ in a module determines a homomorphism $R^n\to N$ taking $e_j$ to $x_j$; if the list generates $N$, this map is surjective. Also $R^0=0$ ([[def-free-module-on-a-set-and-standard-basis]], [[thm-universal-property-of-free-modules]]).
- `ex-unit-and-counit-of-the-free-vector-space-adjunction` **F1** — used at step(s) 1.1, 2.1
  - restatement on disk: Every element of $k^{(X)}$ is a unique finite sum $\sum_{x\in E}a_xe_x$, and $x\mapsto e_x$ is the standard basis inclusion ([[def-free-module-on-a-set-and-standard-basis]]).
- `cor-tensor-products-of-finite-free-modules-and-dimension` **L2** — used at step(s) 1.3
  - restatement on disk: For any unital ring $R$, the free module $R^{(m)}$ has its standard basis indexed by $m$, including the empty basis at $m=0$ ([[def-free-module-on-a-set-and-standard-basis]]). For a field $F$, this is the usual basis of $F^m$ ([[lem-standard-basis-of-f-n]]).

#### target: `def-internal-direct-sum`  (definition, 4 citations)

- `lem-coprime-kernel-decomposition` **L2** — used at step(s) 3.1
  - restatement on disk: For two subspaces, $V=U\oplus W$ means $U+W=V$ and $U\cap W=\{0\}$ ([[def-internal-direct-sum]]).
- `thm-diagonalisability-eigenspace-direct-sum-criterion` **L3** — used at step(s) 1.1, 1.2
  - restatement on disk: A finite internal direct sum spans the whole space and has unique component decompositions ([[def-internal-direct-sum]]).
- `cor-idempotent-endomorphisms-are-diagonalisable-projections` **L3** — used at step(s) 2.1
  - restatement on disk: For two subspaces, a direct sum is a spanning sum with zero intersection ([[def-internal-direct-sum]]).
- `thm-finite-dimensional-orthogonal-decomposition` **L4** — used at step(s) 4.1
  - restatement on disk: An internal direct sum is a sum of subspaces with zero intersection and gives unique decompositions ([[def-internal-direct-sum]]).

#### target: `thm-canonical-prime-factorisation`  (theorem, 3 citations)

- `thm-uniqueness-of-finite-fields` **L5** — used at step(s) 1.1
  - restatement on disk: Canonical prime factorisation makes the prime in a positive prime-power representation unique ([[thm-canonical-prime-factorisation]]).
- `cor-algebraically-constructible-numbers-have-power-of-two-degree` **L4** — used at step(s) 4.1
  - restatement on disk: Prime factorization is unique, so a positive divisor of a power of $2$ is itself a power of $2$ ([[thm-canonical-prime-factorisation]]).
- `thm-structure-of-the-unit-group-modulo-n` **L4** — used at step(s) 1.1
  - restatement on disk: Given an injective list of primes containing every prime divisor of $n\ge1$, one has $n=\prod_ip_i^{v_{p_i}(n)}$, the exponents being determined by $n$ ([[thm-canonical-prime-factorisation]]). The Given of this theorem supplies exactly such a list, namely the primes of the displayed factorisation.

#### target: `thm-formal-power-series-unit-criterion`  (theorem, 3 citations)

- `prop-rational-series-are-closed-under-sums-and-products` **L2** — used at step(s) 1.1
  - restatement on disk: A formal series is a unit exactly when its constant coefficient is a unit ([[thm-formal-power-series-unit-criterion]]).
- `lem-binomial-series-for-a-repeated-pole` **L1** — used at step(s) 1.1
  - restatement on disk: A formal series is invertible exactly when its constant coefficient is a unit, and its inverse is unique ([[thm-formal-power-series-unit-criterion]]).
- `thm-transfer-matrix-cofactor-formula` **L7** — used at step(s) 1.2
  - restatement on disk: A formal series is a unit exactly when its constant coefficient is a unit ([[thm-formal-power-series-unit-criterion]]).

#### target: `thm-binomial-closed-formula`  (theorem, 3 citations)

- `lem-prime-divides-intermediate-binomial-coefficients` **L2** — used at step(s) 1.1
  - restatement on disk: The closed formula gives $\binom nk\,k!\,(n-k)!=n!$ for $k\le n$ ([[thm-binomial-closed-formula]]).
- `thm-closed-form-for-a-linear-recurrence-over-a-splitting-field` **L7** — used at step(s) 1.2
  - restatement on disk: The binomial coefficient satisfies $\binom nk k!=n^{\underline{k}}$ when $k\le n$ ([[thm-binomial-closed-formula]]).
- `lem-prime-power-binomial-congruence` **L2** — used at step(s) 1.1, 1.2
  - restatement on disk: Pascal's rule holds for binomial coefficients ([[thm-pascals-rule]]), and the closed factorial formula holds when the lower index does not exceed the upper one ([[thm-binomial-closed-formula]]).

#### target: `def-graph-isomorphism-and-complement`  (definition, 3 citations)

- `cor-every-graph-on-at-most-three-vertices-has-the-erdos-hajnal-property` **L5** — used at step(s) 1.2
  - restatement on disk: The graphs $K_t$ and $P_3$ have the standard edge sets, and $P_0$ is the null graph ([[def-standard-complete-bipartite-path-and-cycle-graphs]]); complementation replaces the edge set by all missing pairs ([[def-graph-isomorphism-and-complement]]).
- `ex-the-five-cycle-has-homogeneous-number-two` **L3** — used at step(s) 1.3
  - restatement on disk: A graph isomorphism is a bijection preserving adjacency in both directions, and the complement contains precisely the missing pairs ([[def-graph-isomorphism-and-complement]]).
- `lem-complementation-preserves-disjoint-regular-pairs` **L2** — used at step(s) 1.1
  - restatement on disk: In the complement, exactly the missing pairs of distinct vertices are edges ([[def-graph-isomorphism-and-complement]]).

#### target: `thm-cauchys-theorem-for-finite-groups`  (theorem, 3 citations)

- `lem-groups-of-order-pq-have-a-normal-q-subgroup` **L1** — used at step(s) 1.1
  - restatement on disk: If a prime divides the order of a finite group, the group has an element of that prime order ([[thm-cauchys-theorem-for-finite-groups]]).
- `lem-order-p-actions-on-a-cyclic-q-group` **L3** — used at step(s) 1.2
  - restatement on disk: A prime divisor of a finite group order occurs as the order of an element ([[thm-cauchys-theorem-for-finite-groups]]).
- `thm-classification-of-groups-of-order-pq` **L2** — used at step(s) 1.1, 2.1
  - restatement on disk: Cauchy's theorem supplies a subgroup $P$ of order $p$, and every prime-order group is cyclic ([[thm-cauchys-theorem-for-finite-groups]], [[cor-prime-order-group-is-cyclic]]).

#### target: `def-matrix-minors-cofactors-and-adjugate`  (definition, 2 citations)

- `thm-transfer-matrix-cofactor-formula` **L3** — used at step(s) 3.1, 4.1
  - restatement on disk: The adjugate satisfies $\operatorname{adj}(M)_{uv}=(-1)^{u+v}\det M^{(v,u)}$ ([[def-matrix-minors-cofactors-and-adjugate]]).
- `lem-derivative-of-det-i-minus-xa` **L2** — used at step(s) 1.2, 3.1
  - restatement on disk: The adjugate is the transpose of the cofactor matrix, so $\operatorname{adj}(M)_{ij}=C_{ji}(M)$ ([[def-matrix-minors-cofactors-and-adjugate]]).

#### target: `def-linear-basis`  (definition, 2 citations)

- `lem-product-basis-for-a-tower-of-finite-extensions` **L1** — used at step(s) 1.1, 1.2, 2.1
  - restatement on disk: A basis is a linearly independent spanning set ([[def-linear-basis]]).
- `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases` **L1** — used at step(s) 1.1
  - restatement on disk: A finite-dimensional vector space has a finite basis, with the empty list serving when $V=0$ ([[def-linear-basis]]).

#### target: `lem-characteristic-polynomial-is-monic-and-has-extreme-coefficients`  (lemma, 2 citations)

- `thm-minimal-polynomial-is-well-defined-and-controls-annihilators` **L3** — used at step(s) 1.2
  - restatement on disk: The characteristic polynomial of an $n$-dimensional endomorphism is monic of degree $n$, and it is $1$ when $n=0$ ([[lem-characteristic-polynomial-is-monic-and-has-extreme-coefficients]]).
- `thm-diagonalisable-iff-characteristic-polynomial-splits-and-multiplicities-agree` **L6** — used at step(s) 1.2, 3.1
  - restatement on disk: The characteristic polynomial of an endomorphism on an $n$-dimensional space is monic of degree $n$, and it is $1$ for $n=0$ ([[lem-characteristic-polynomial-is-monic-and-has-extreme-coefficients]]).

#### target: `def-initial-terminal-and-zero-object`  (definition, 2 citations)

- `fs-every-functor-with-a-left-adjoint-also-has-a-right-adjoint` **F3** — used at step(s) 1.2, 2.1
  - restatement on disk: An initial object has exactly one morphism to every object ([[def-initial-terminal-and-zero-object]]).
- `fs-left-adjoints-preserve-limits` **F3** — used at step(s) 2.1
  - restatement on disk: A terminal object admits exactly one morphism from every object, hence exactly one endomorphism ([[def-initial-terminal-and-zero-object]]).

#### target: `thm-determinant-of-a-triangular-matrix`  (theorem, 2 citations)

- `thm-gram-determinant-detects-linear-independence` **L7** — used at step(s) 2.1
  - restatement on disk: For $n\ge1$, the determinant of an $n\times n$ triangular matrix over a commutative ring is the product of its diagonal entries ([[thm-determinant-of-a-triangular-matrix]]).
- `thm-diagonalisable-iff-characteristic-polynomial-splits-and-multiplicities-agree` **L7** — used at step(s) 1.1
  - restatement on disk: For $n\ge1$, the determinant of a triangular matrix in $M_n(R)$ over a commutative ring is the product of its diagonal entries ([[thm-determinant-of-a-triangular-matrix]]).

#### target: `def-monomorphism-and-epimorphism`  (definition, 2 citations)

- `thm-fullness-and-faithfulness-of-a-right-adjoint-read-off-the-counit` **F2** — used at step(s) 1.1, 1.2, 3.1
  - restatement on disk: A morphism $e:A\to B$ is epic when $re=se$ implies $r=s$ for every parallel pair $r,s:B\to X$ ([[def-monomorphism-and-epimorphism]]).
- `cor-right-adjoints-preserve-monomorphisms-and-left-adjoints-preserve-epimorphisms` **F1** — used at step(s) 1.1, 1.2
  - restatement on disk: A morphism $f$ is monic when $fg=fh$ implies $g=h$ for every parallel pair, and epic when $gf=hf$ implies $g=h$ for every parallel pair ([[def-monomorphism-and-epimorphism]]).

#### target: `thm-conjugation-is-an-automorphism`  (theorem, 2 citations)

- `thm-internal-external-semidirect-product-equivalence` **L2** — used at step(s) 1.1
  - restatement on disk: Conjugation is an automorphism; normality of $N$ makes conjugation by $H$ restrict to $N$ ([[thm-conjugation-is-an-automorphism]]).
- `lem-characteristic-subgroup-of-a-normal-subgroup-is-normal` **L3** — used at step(s) 1.1
  - restatement on disk: Conjugation by a fixed group element is an automorphism ([[thm-conjugation-is-an-automorphism]]).

#### target: `def-real-power`  (definition, 2 citations)

- `thm-complete-graph-free-classes-are-erdos-hajnal` **L7** — used at step(s) 1.2, 4.1
  - restatement on disk: For $x>0$ and real $u$, $x^u=\exp(u\log x)$ ([[def-real-power]]).
- `ex-bounded-order-graph-classes-are-erdos-hajnal` **L4** — used at step(s) 1.2, 2.1
  - restatement on disk: For $a>0$ and $x\in\mathbb R$, $a^x:=\exp(x\log a)$ ([[def-real-power]]).

#### target: `prop-sets-and-functions-form-category-set`  (proposition, 2 citations)

- `thm-the-discrete-and-indiscrete-topologies-form-an-adjoint-triple-over-set` **F3** — used at step(s) 1.1, 1.2
  - restatement on disk: Sets and functions form the locally small category $\mathbf{Set}$ ([[prop-sets-and-functions-form-category-set]]).
- `thm-currying-is-an-adjunction-in-set` **F4** — used at step(s) 3.1
  - restatement on disk: Sets and functions form the locally small category $\mathbf{Set}$ ([[prop-sets-and-functions-form-category-set]]).

#### target: `thm-laplace-cofactor-expansion`  (theorem, 1 citation)

- `thm-characteristic-polynomial-of-a-recurrence-companion-matrix` **L3** — used at step(s) 2.1, 2.2
  - restatement on disk: A determinant may be expanded along any row or column as the sum of entries times their cofactors ([[thm-laplace-cofactor-expansion]]).

#### target: `cor-inverse-matrix-by-adjugate`  (corollary, 1 citation)

- `thm-transfer-matrix-cofactor-formula` **L5** — used at step(s) 2.1
  - restatement on disk: If $\det(M)$ is a unit, then $M^{-1}=\det(M)^{-1}\operatorname{adj}(M)$ ([[cor-inverse-matrix-by-adjugate]]).

#### target: `def-presheaf-representable-functor-and-representation`  (definition, 1 citation)

- `thm-a-pointwise-right-adjoint-extends-uniquely-to-a-functor` **F1** — used at step(s) 1.1
  - restatement on disk: A representation of a presheaf is an object together with a natural isomorphism from the corresponding representable presheaf ([[def-presheaf-representable-functor-and-representation]]).

#### target: `def-left-and-right-modules`  (definition, 1 citation)

- `lem-coextension-of-scalars-carries-a-module-structure` **F2** — used at step(s) 1.3, 2.1
  - restatement on disk: A left module action satisfies distributivity, $(rs)m=r(sm)$, and $1_Rm=m$ ([[def-left-and-right-modules]]).

#### target: `thm-left-coset-action-and-its-kernel`  (theorem, 1 citation)

- `lem-groups-of-order-pq-have-a-normal-q-subgroup` **L2** — used at step(s) 1.1
  - restatement on disk: The left-coset action of $G$ on $G/Q$ is the homomorphism $\rho:G\to\operatorname{Sym}(G/Q)$ with $\ker\rho=\operatorname{Core}_G(Q)$ ([[thm-left-coset-action-and-its-kernel]]).

#### target: `def-alternating-group`  (definition, 1 citation)

- `ex-symmetric-group-splits-over-the-alternating-group` **L2** — used at step(s) 1.1
  - restatement on disk: The alternating group $A_n$ is the kernel of the sign homomorphism ([[def-alternating-group]]).

#### target: `thm-yoneda-lemma-is-natural-in-both-variables`  (theorem, 1 citation)

- `thm-a-pointwise-right-adjoint-extends-uniquely-to-a-functor` **F2** — used at step(s) 1.1, 2.1, 2.2, 4.1
  - restatement on disk: The Yoneda bijection is natural in both the represented object and the presheaf, so a natural transformation between represented presheaves is induced by a unique morphism between their representing objects ([[thm-yoneda-lemma-is-natural-in-both-variables]]).

#### target: `lem-horizontal-composition-of-natural-transformations-is-natural`  (lemma, 1 citation)

- `thm-mates-under-a-pair-of-adjunctions` **L2** — used at step(s) 1.2
  - restatement on disk: The left whiskering $H\alpha$ has components $H(\alpha_A)$ and the right whiskering $\alpha K$ has components $\alpha_{KB}$; each is a horizontal composite of $\alpha$ with an identity transformation, and horizontal composites of natural transformations satisfy naturality ([[def-horizontal-composition-and-whiskering-of-natural-transformations]], [[lem-horizontal-composition-of-natural-transformations-is-natural]]).

#### target: `prop-integers-modulo-n-as-a-quotient-ring`  (proposition, 1 citation)

- `fs-f-p-n-is-z-mod-p-n` **L2** — used at step(s) 1.1
  - restatement on disk: The congruence-class ring $\mathbb Z/4$ is the quotient ring $\mathbb Z/4\mathbb Z$ ([[prop-integers-modulo-n-as-a-quotient-ring]]).

#### target: `thm-external-direct-product-is-a-group`  (theorem, 1 citation)

- `lem-direct-product-of-finite-cyclic-groups-is-cyclic-iff-orders-are-coprime` **L1** — used at step(s) 1.1
  - restatement on disk: The external direct product uses componentwise multiplication ([[def-external-direct-product-of-groups]]) and is a group ([[thm-external-direct-product-is-a-group]]).

#### target: `thm-similarity-is-an-equivalence-relation-and-models-basis-change`  (theorem, 1 citation)

- `thm-minimal-polynomial-is-matrix-representation-and-similarity-invariant` **L2** — used at step(s) 3.1
  - restatement on disk: Similar matrices are exactly matrix representations of one endomorphism in different ordered bases ([[thm-similarity-is-an-equivalence-relation-and-models-basis-change]]).

#### target: `thm-irreducible-quotient-adjoins-a-root`  (theorem, 1 citation)

- `thm-minimal-and-characteristic-polynomials-have-the-same-irreducible-factors` **L2** — used at step(s) 1.2, 3.1
  - restatement on disk: For monic irreducible $q$, the quotient $K=F[x]/(q)$ is a field extension containing $a=x+(q)$ with $q(a)=0$ ([[thm-irreducible-quotient-adjoins-a-root]]).

#### target: `lem-complement-swaps-cliques-and-stable-sets`  (lemma, 1 citation)

- `prop-erdos-hajnal-property-is-complement-invariant` **L4** — used at step(s) 1.1
  - restatement on disk: Complementation exchanges cliques and stable sets, so $\omega(\overline G)=\alpha(G)$ and $\alpha(\overline G)=\omega(G)$ ([[lem-complement-swaps-cliques-and-stable-sets]]).

#### target: `lem-induced-embeddings-compose`  (lemma, 1 citation)

- `prop-erdos-hajnal-property-is-monotone-under-induced-pattern-containment` **L3** — used at step(s) 1.1
  - restatement on disk: Induced embeddings compose, so induced-subgraph containment is transitive ([[lem-induced-embeddings-compose]]).

#### target: `prop-size-of-functor-categories`  (proposition, 1 citation)

- `prop-an-adjunction-induces-adjunctions-on-functor-categories` **F2** — used at step(s) 3.1
  - restatement on disk: If the source is small and the target is locally small, the resulting functor category is locally small ([[prop-size-of-functor-categories]]).

#### target: `def-horizontal-composition-and-whiskering-of-natural-transformations`  (definition, 1 citation)

- `thm-mates-under-a-pair-of-adjunctions` **L2** — used at step(s) 1.2
  - restatement on disk: The left whiskering $H\alpha$ has components $H(\alpha_A)$ and the right whiskering $\alpha K$ has components $\alpha_{KB}$; each is a horizontal composite of $\alpha$ with an identity transformation, and horizontal composites of natural transformations satisfy naturality ([[def-horizontal-composition-and-whiskering-of-natural-transformations]], [[lem-horizontal-composition-of-natural-transformations-is-natural]]).

#### target: `def-stone-cech-compactification`  (definition, 1 citation)

- `thm-stone-cech-is-left-adjoint-to-the-inclusion-of-compact-hausdorff-spaces` **F1** — used at step(s) 1.1, 1.2, 2.1
  - restatement on disk: A Stone–Čech compactification $(B,i)$ of $X$ has the property that every continuous map $X\to K$ to a compact Hausdorff space extends uniquely to a continuous map $B\to K$ ([[def-stone-cech-compactification]]).

#### target: `thm-stone-cech-evaluation-closure-universal-property`  (theorem, 1 citation)

- `thm-stone-cech-is-left-adjoint-to-the-inclusion-of-compact-hausdorff-spaces` **F2** — used at step(s) 1.1, 3.1
  - restatement on disk: Under the ultrafilter lemma and dependent choice, the evaluation-closure construction is a Stone–Čech compactification of every Tychonoff space ([[thm-stone-cech-evaluation-closure-universal-property]]).

#### target: `thm-spectral-mapping-for-polynomials`  (theorem, 1 citation)

- `cor-eigenvalue-form-of-the-transfer-matrix-trace` **L5** — used at step(s) 2.1
  - restatement on disk: If $\chi_T(t)=\prod_{i<p}(t-\lambda_i)$, then $\chi_{q(T)}(y)=\prod_{i<p}(y-q(\lambda_i))$ for every polynomial $q$ ([[thm-spectral-mapping-for-polynomials]]).

#### target: `thm-trace-is-sum-of-eigenvalues`  (theorem, 1 citation)

- `cor-eigenvalue-form-of-the-transfer-matrix-trace` **L6** — used at step(s) 2.1
  - restatement on disk: When the characteristic polynomial splits, the trace is the sum of its roots with algebraic multiplicity ([[thm-trace-is-sum-of-eigenvalues]]).

### Report format

Write your findings to stdout as your final message. Per finding:

- citing item id, fact label, cited target id
- **what the restatement claims** vs **what the Statement says** (quote both)
- which numbered step depends on the difference, or "no step depends on it"
- your severity: `fatal` (a step is unlicensed / a false claim is asserted) or
  `nonfatal` (a competent reader closes it in 30 seconds)

Close with: targets opened, edges checked, findings by severity. If you checked
an edge and it is clean, it is clean — do not pad the report.
