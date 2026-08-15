## This dispatch — cross-level citation refutation, cluster `xl-f`

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

#### target: `thm-z-mod-p-is-a-field`  (theorem, 10 citations)

- `thm-prime-subfield-classification` **L3** — used at step(s) 1.1
  - restatement on disk: For prime $p$, the quotient $\mathbb Z/p$ is a field ([[thm-z-mod-p-is-a-field]]).
- `thm-existence-of-finite-fields` **L3** — used at step(s) 1.1
  - restatement on disk: The quotient $\mathbb Z/p$ is a field ([[thm-z-mod-p-is-a-field]]).
- `ex-f-four-as-a-polynomial-quotient` **L2** — used at step(s) 1.1
  - restatement on disk: The ring $\mathbb Z/2$ is a field ([[thm-z-mod-p-is-a-field]]).
- `ex-f-eight-as-a-polynomial-quotient` **L3** — used at step(s) 1.1
  - restatement on disk: The ring $\mathbb Z/2$ is a field ([[thm-z-mod-p-is-a-field]]).
- `ex-f-nine-as-a-polynomial-quotient` **L2** — used at step(s) 1.1
  - restatement on disk: The ring $\mathbb Z/3$ is a field ([[thm-z-mod-p-is-a-field]]).
- `ex-frobenius-on-f-four` **L3** — used at step(s) 1.1
  - restatement on disk: The ring $\mathbb Z/2$ is a field ([[thm-z-mod-p-is-a-field]]).
- `ex-a-generator-of-f-eight-multiplicative-group` **L3** — used at step(s) 1.1
  - restatement on disk: The ring $\mathbb Z/2$ is a field ([[thm-z-mod-p-is-a-field]]).
- `cor-unit-group-modulo-prime-is-cyclic` **L1** — used at step(s) 1.1
  - restatement on disk: $\mathbb Z/p$ is a field ([[thm-z-mod-p-is-a-field]]).
- `lem-power-congruence-root-bound-modulo-a-prime` **L1** — used at step(s) 1.1
  - restatement on disk: The residue-class ring $\mathbb Z/q$ is a field when $q$ is prime ([[thm-z-mod-p-is-a-field]]).
- `prop-the-underlying-set-functor-on-fields-has-no-left-adjoint` **F4** — used at step(s) 2.1
  - restatement on disk: For every prime $p$, $\mathbb Z/p$ is a field ([[thm-z-mod-p-is-a-field]]).

#### target: `def-polynomial-evaluation-at-an-endomorphism`  (definition, 7 citations)

- `thm-roots-of-the-minimal-polynomial-are-eigenvalues-over-extension-fields` **L4** — used at step(s) 1.1
  - restatement on disk: Polynomial evaluation is $p(A)=\sum a_kA^k$ ([[def-polynomial-evaluation-at-an-endomorphism]]).
- `thm-minimal-and-characteristic-polynomials-have-the-same-irreducible-factors` **L6** — used at step(s) 2.1
  - restatement on disk: Polynomial evaluation at an endomorphism is $p(T)=\sum_{k\ge0}a_kT^k$ for $p(x)=\sum_{k\ge0}a_kx^k$ ([[def-polynomial-evaluation-at-an-endomorphism]]).
- `lem-polynomial-kernels-and-images-are-invariant` **L1** — used at step(s) 1.1
  - restatement on disk: Polynomial evaluation is $p(T)=\sum a_kT^k$, with $T^0=I$ and $T^{k+1}=T\circ T^k$ ([[def-polynomial-evaluation-at-an-endomorphism]]).
- `lem-coprime-kernel-decomposition` **L3** — used at step(s) 1.1, 2.1
  - restatement on disk: Polynomial evaluation sends $p(x)=\sum a_kx^k$ to $p(T)=\sum a_kT^k$, with $T^0=I$ ([[def-polynomial-evaluation-at-an-endomorphism]]).
- `cor-primary-projections-are-polynomials-in-the-endomorphism` **L3** — used at step(s) 1.1
  - restatement on disk: Polynomial evaluation sends $p(x)=\sum a_kx^k$ to the endomorphism $p(T)=\sum a_kT^k$ ([[def-polynomial-evaluation-at-an-endomorphism]]).
- `thm-diagonalisable-iff-minimal-polynomial-splits-with-distinct-roots` **L2** — used at step(s) 2.1
  - restatement on disk: If $p(x)=\sum_{k\ge0}a_kx^k$, then $p(T)=\sum_{k\ge0}a_kT^k$ ([[def-polynomial-evaluation-at-an-endomorphism]]).
- `cor-endomorphism-algebra-is-a-minimal-polynomial-quotient` **L1** — used at step(s) 1.1
  - restatement on disk: Polynomial evaluation sends $p$ to $p(T)=\sum a_kT^k$ ([[def-polynomial-evaluation-at-an-endomorphism]]).

#### target: `def-field-extension-generated-subfields-and-simple-extension`  (definition, 5 citations)

- `ex-extension-of-scalars-of-coordinate-modules` **L1** — used at step(s) 1.1, 2.1, 3.1
  - restatement on disk: The specified embedding $F\to K$ makes $K\otimes_F-$ the extension-of-scalars functor ([[def-field-extension-generated-subfields-and-simple-extension]], [[def-restriction-and-extension-of-scalars]]).
- `cor-finite-extensions-of-finite-fields-are-simple` **L4** — used at step(s) 3.1
  - restatement on disk: The subfield $F(a)$ is the smallest subfield containing $F$ and $a$, and an extension equal to such a field is simple ([[def-field-extension-generated-subfields-and-simple-extension]]).
- `ex-q-sqrt-two-sqrt-three-and-a-primitive-generator` **L3** — used at step(s) 3.1
  - restatement on disk: The field $F(a)$ is the smallest subfield containing $F$ and $a$ ([[def-field-extension-generated-subfields-and-simple-extension]]).
- `lem-minimal-polynomial-is-invariant-under-field-extension` **L1** — used at step(s) 1.1, 1.2
  - restatement on disk: A field extension identifies $F$ with a subfield of $K$ ([[def-field-extension-generated-subfields-and-simple-extension]]).
- `ex-matrix-algebra-extension-of-scalars` **L1** — used at step(s) 2.1
  - restatement on disk: The specified embedding $F\to K$ makes $K$ an extension field of $F$ ([[def-field-extension-generated-subfields-and-simple-extension]]).

#### target: `thm-polynomial-quotient-is-a-field-iff-irreducible`  (theorem, 5 citations)

- `ex-f-four-as-a-polynomial-quotient` **L1** — used at step(s) 1.1
  - restatement on disk: For a field $F$, the quotient $F[t]/(p)$ is a field exactly when the nonconstant polynomial $p$ is irreducible ([[thm-polynomial-quotient-is-a-field-iff-irreducible]]).
- `ex-f-eight-as-a-polynomial-quotient` **L1** — used at step(s) 1.1
  - restatement on disk: A polynomial quotient over a field is a field exactly when its modulus is irreducible ([[thm-polynomial-quotient-is-a-field-iff-irreducible]]).
- `ex-f-nine-as-a-polynomial-quotient` **L1** — used at step(s) 1.1
  - restatement on disk: A polynomial quotient over a field is a field exactly when its modulus is irreducible ([[thm-polynomial-quotient-is-a-field-iff-irreducible]]).
- `ex-frobenius-on-f-four` **L2** — used at step(s) 1.1
  - restatement on disk: The quotient by an irreducible polynomial over a field is a field ([[thm-polynomial-quotient-is-a-field-iff-irreducible]]).
- `ex-a-generator-of-f-eight-multiplicative-group` **L1** — used at step(s) 1.1
  - restatement on disk: A polynomial quotient over a field is a field exactly when its modulus is irreducible ([[thm-polynomial-quotient-is-a-field-iff-irreducible]]).

#### target: `def-common-divisor-and-gcd`  (definition, 3 citations)

- `lem-order-of-a-power-in-a-finite-cyclic-group` **L4** — used at step(s) 1.1
  - restatement on disk: Put $d=\gcd(a,m)$; then $d$ divides both $a$ and $m$ ([[def-common-divisor-and-gcd]]).
- `cor-power-congruence-solution-count-modulo-a-prime` **L3** — used at step(s) 1.2
  - restatement on disk: The greatest common divisor $c=\gcd(d,p-1)$ divides both $d$ and $p-1$ ([[def-common-divisor-and-gcd]]).
- `thm-eulers-criterion-for-binomial-congruences` **L5** — used at step(s) 1.2
  - restatement on disk: A greatest common divisor divides both of its arguments ([[def-common-divisor-and-gcd]]).

#### target: `def-characteristic-polynomial-of-a-matrix`  (definition, 3 citations)

- `ex-computing-a-minimal-polynomial-from-annihilating-polynomials` **L3** — used at step(s) 2.1
  - restatement on disk: The characteristic polynomial is $\det(xI-A)$ ([[def-characteristic-polynomial-of-a-matrix]]).
- `cor-cayley-hamilton-recurrences-for-matrix-powers` **L4** — used at step(s) 1.2
  - restatement on disk: The matrix characteristic polynomial is $\chi_A(t)=\det(tI-A)$ ([[def-characteristic-polynomial-of-a-matrix]]).
- `thm-characteristic-polynomial-of-a-recurrence-companion-matrix` **L2** — used at step(s) 1.1, 1.2
  - restatement on disk: For a field matrix $A$, its characteristic polynomial is $\chi_A(t)=\det(tI-A)$ ([[def-characteristic-polynomial-of-a-matrix]]).

#### target: `thm-evaluation-kernel-and-minimal-polynomial`  (theorem, 3 citations)

- `thm-quadratic-tower-characterization-of-algebraic-constructibility` **L4** — used at step(s) 2.1
  - restatement on disk: The minimal polynomial of an algebraic element divides every polynomial over the base field vanishing at it ([[thm-evaluation-kernel-and-minimal-polynomial]]).
- `thm-factorization-of-x-qn-minus-x` **L9** — used at step(s) 1.2, 2.2
  - restatement on disk: For an algebraic element $\alpha$ there is a unique monic irreducible $m_\alpha$ with $m_\alpha(\alpha)=0$, and for every $f$ one has $f(\alpha)=0$ exactly when $m_\alpha\mid f$ ([[thm-evaluation-kernel-and-minimal-polynomial]]).
- `thm-minimal-and-characteristic-polynomials-have-the-same-irreducible-factors` **L5** — used at step(s) 3.1
  - restatement on disk: If $a$ is algebraic over $F$, the kernel of evaluation at $a$ is generated by its unique monic irreducible minimal polynomial, and $f(a)=0$ exactly when that polynomial divides $f$ ([[thm-evaluation-kernel-and-minimal-polynomial]]).

#### target: `cor-prime-order-group-is-cyclic`  (corollary, 3 citations)

- `thm-structure-of-the-unit-group-modulo-n` **L6** — used at step(s) 2.2
  - restatement on disk: Every group of prime order is cyclic ([[cor-prime-order-group-is-cyclic]]).
- `lem-order-p-actions-on-a-cyclic-q-group` **L8** — used at step(s) 1.3
  - restatement on disk: Every nonidentity element of a group of prime order generates that group ([[cor-prime-order-group-is-cyclic]]).
- `thm-classification-of-groups-of-order-pq` **L2** — used at step(s) 1.1, 2.1
  - restatement on disk: Cauchy's theorem supplies a subgroup $P$ of order $p$, and every prime-order group is cyclic ([[thm-cauchys-theorem-for-finite-groups]], [[cor-prime-order-group-is-cyclic]]).

#### target: `thm-ring-matrix-arithmetic-laws`  (theorem, 3 citations)

- `prop-companion-matrix-iterates-a-linear-recurrence` **L3** — used at step(s) 1.2, 2.1
  - restatement on disk: Matrix multiplication is associative and satisfies $I_dA=A=AI_d$ ([[thm-ring-matrix-arithmetic-laws]]).
- `thm-weighted-walks-are-entries-of-transfer-matrix-powers` **L3** — used at step(s) 1.1, 1.2
  - restatement on disk: Matrix multiplication is associative and $A^0=I$ ([[thm-ring-matrix-arithmetic-laws]]).
- `lem-formal-matrix-geometric-series` **L4** — used at step(s) 1.1, 1.2
  - restatement on disk: Matrix multiplication is associative and distributive, including zero-sized shapes ([[thm-ring-matrix-arithmetic-laws]]).

#### target: `thm-lagrange`  (theorem, 3 citations)

- `lem-groups-of-order-pq-have-a-normal-q-subgroup` **L3** — used at step(s) 1.1, 1.2
  - restatement on disk: Lagrange's theorem gives $|G|=[G:H]|H|$ for a subgroup $H$ of a finite group ([[thm-lagrange]]).
- `lem-order-p-actions-on-a-cyclic-q-group` **L6** — used at step(s) 1.1, 2.1
  - restatement on disk: The order of a subgroup divides the order of a finite group ([[thm-lagrange]]).
- `thm-classification-of-groups-of-order-pq` **L7** — used at step(s) 1.1
  - restatement on disk: The order of a subgroup divides the order of a finite group ([[thm-lagrange]]).

#### target: `prop-formal-derivative-laws`  (proposition, 2 citations)

- `thm-newtons-identities` **L4** — used at step(s) 1.1
  - restatement on disk: Over a commutative ring, formal differentiation of polynomials is additive and satisfies $(fg)'=f'g+fg'$ ([[prop-formal-derivative-laws]]).
- `cor-discriminant-as-a-resultant-with-the-derivative` **L4** — used at step(s) 1.1
  - restatement on disk: Over a commutative ring, formal differentiation is additive and $F$-linear and satisfies $(fg)'=f'g+fg'$ ([[prop-formal-derivative-laws]]).

#### target: `def-subfield`  (definition, 2 citations)

- `thm-algebraic-elements-form-a-subfield` **L3** — used at step(s) 2.1
  - restatement on disk: A subset containing $1$ and closed under subtraction, multiplication, and inverses of nonzero elements is a subfield ([[def-subfield]]).
- `lem-roots-of-x-q-minus-x-form-a-field` **L2** — used at step(s) 2.1
  - restatement on disk: A subset containing $1$ and closed under subtraction, multiplication, and inverses of nonzero elements is a subfield ([[def-subfield]]).

#### target: `def-functor-category`  (definition, 2 citations)

- `prop-an-adjunction-induces-adjunctions-on-functor-categories` **F1** — used at step(s) 1.1, 1.2
  - restatement on disk: For a small source category, functors and natural transformations form the functor category ([[def-functor-category]]).
- `thm-limits-and-colimits-are-adjoint-to-the-diagonal-functor` **F3** — used at step(s) 1.2, 1.3, 3.1
  - restatement on disk: Morphisms in a functor category are natural transformations ([[def-functor-category]]).

#### target: `thm-formal-power-series-ring-and-polynomial-embedding`  (theorem, 2 citations)

- `lem-formal-matrix-geometric-series` **L2** — used at step(s) 1.1, 1.2
  - restatement on disk: Cauchy multiplication makes $R\llbracket x\rrbracket$ a commutative ring containing $R[x]$ ([[thm-formal-power-series-ring-and-polynomial-embedding]]).
- `thm-transfer-matrix-cofactor-formula` **L8** — used at step(s) 2.1
  - restatement on disk: Cauchy multiplication makes $R\llbracket x\rrbracket$ a commutative ring ([[thm-formal-power-series-ring-and-polynomial-embedding]]).

#### target: `def-equivalence-and-adjoint-equivalence-of-categories`  (definition, 2 citations)

- `prop-an-adjunction-restricts-to-an-equivalence-on-its-fixed-subcategories` **F2** — used at step(s) 3.1
  - restatement on disk: An equivalence consists of quasi-inverse functors and natural isomorphisms between their composites and the identity functors ([[def-equivalence-and-adjoint-equivalence-of-categories]]).
- `prop-an-adjoint-equivalence-is-an-adjunction-with-invertible-unit-and-counit` **F1** — used at step(s) 1.1, 1.2
  - restatement on disk: An adjoint equivalence consists of $F,G$, a natural isomorphism $\eta:1_{\mathcal C}\Rightarrow GF$, a natural isomorphism $\varepsilon:FG\Rightarrow1_{\mathcal D}$, and the two triangle identities ([[def-equivalence-and-adjoint-equivalence-of-categories]]).

#### target: `def-limit-and-colimit-of-a-diagram`  (definition, 2 citations)

- `thm-right-adjoints-preserve-limits` **F1** — used at step(s) 3.1, 4.2, 5.1
  - restatement on disk: A limit of a diagram is a terminal cone: every cone has a unique mediating morphism to its vertex whose composites with the limiting legs are the given cone legs ([[def-limit-and-colimit-of-a-diagram]]).
- `thm-limits-and-colimits-are-adjoint-to-the-diagonal-functor` **F2** — used at step(s) 1.2, 1.3, 3.1
  - restatement on disk: A limit is a terminal cone and a colimit is an initial cocone ([[def-limit-and-colimit-of-a-diagram]]).

#### target: `thm-finite-graph-ramsey-binomial-bound`  (theorem, 2 citations)

- `thm-ramsey-logarithmic-homogeneous-set-bound` **L2** — used at step(s) 4.1
  - restatement on disk: For positive natural numbers $s,t$, every graph on at least $\binom{s+t-2}{s-1}$ vertices has an $s$-vertex clique or a $t$-vertex stable set ([[thm-finite-graph-ramsey-binomial-bound]]).
- `thm-complete-graph-free-classes-are-erdos-hajnal` **L5** — used at step(s) 3.1
  - restatement on disk: For positive $a,b$, every graph on at least $\binom{a+b-2}{a-1}$ vertices contains an $a$-clique or a $b$-vertex stable set ([[thm-finite-graph-ramsey-binomial-bound]]).

#### target: `thm-first-moment-method`  (theorem, 2 citations)

- `thm-random-graph-logarithmic-homogeneous-set-upper-bound` **L5** — used at step(s) 6.1
  - restatement on disk: If a nonnegative integer-valued random variable on a finite probability space has expectation below $1$, some outcome makes it $0$ ([[thm-first-moment-method]]).
- `thm-self-regular-representative-subsets` **L5** — used at step(s) 4.2
  - restatement on disk: If a nonnegative integer-valued random variable has expectation below $1$, some outcome makes it zero ([[thm-first-moment-method]]).

#### target: `def-algebraic-and-geometric-multiplicity-of-an-eigenvalue`  (definition, 1 citation)

- `thm-diagonalisable-iff-characteristic-polynomial-splits-and-multiplicities-agree` **L1** — used at step(s) 1.1, 1.2
  - restatement on disk: The algebraic multiplicity is the exponent of $x-\lambda$ in $\chi_T$, and the geometric multiplicity is $\dim E_\lambda(T)$ ([[def-algebraic-and-geometric-multiplicity-of-an-eigenvalue]]).

#### target: `def-direct-sum-of-a-family-of-modules`  (definition, 1 citation)

- `thm-tensor-products-commute-with-arbitrary-direct-sums` **L3** — used at step(s) 1.2, 4.1, 5.1
  - restatement on disk: The direct sum consists of finite-support tuples, with coordinate inclusions $\jmath_i$, and the empty direct sum is zero ([[def-direct-sum-of-a-family-of-modules]]).

#### target: `def-generated-subgroup`  (definition, 1 citation)

- `prop-primitive-root-iff-unit-group-generator` **L3** — used at step(s) 2.1
  - restatement on disk: The subgroup $\langle g\rangle$ is the smallest subgroup containing $g$ ([[def-generated-subgroup]]).

#### target: `thm-operator-determinant-is-basis-independent`  (theorem, 1 citation)

- `cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus` **L4** — used at step(s) 1.2, 2.1
  - restatement on disk: For $\dim V\ge1$ the operator determinant is independent of the ordered basis, in dimension zero it is the separately defined value $1$, and $\det(S\circ T)=\det(S)\det(T)$ ([[thm-operator-determinant-is-basis-independent]], [[thm-operator-determinant-is-multiplicative]]).

#### target: `cor-invertible-matrix-has-unit-determinant`  (corollary, 1 citation)

- `cor-cayley-hamilton-recurrences-for-matrix-powers` **L6** — used at step(s) 1.2
  - restatement on disk: An invertible positive-sized matrix over a commutative ring has unit determinant ([[cor-invertible-matrix-has-unit-determinant]]).

#### target: `thm-gcd-lcm-product`  (theorem, 1 citation)

- `lem-direct-product-of-finite-cyclic-groups-is-cyclic-iff-orders-are-coprime` **L4** — used at step(s) 2.1, 3.1
  - restatement on disk: For positive integers $m,n$, $\gcd(m,n)\operatorname{lcm}(m,n)=mn$ ([[thm-gcd-lcm-product]]).

#### target: `def-complement-of-a-graph-class`  (definition, 1 citation)

- `prop-erdos-hajnal-property-is-complement-invariant` **L2** — used at step(s) 2.1, 3.1
  - restatement on disk: The complement class is $\overline{\mathcal C}=\{G:\overline G\in\mathcal C\}$ ([[def-complement-of-a-graph-class]]).

#### target: `thm-dual-family-is-a-basis-in-finite-dimension`  (theorem, 1 citation)

- `thm-hom-from-a-finite-dimensional-space-as-a-tensor-product` **L5** — used at step(s) 1.2, 2.1, 2.2, 3.1
  - restatement on disk: The dual family of a finite basis is a basis of $V^*$ ([[thm-dual-family-is-a-basis-in-finite-dimension]]).

#### target: `def-image-and-preimage-under-a-relation`  (definition, 1 citation)

- `thm-direct-image-and-preimage-form-an-adjoint-triple-on-power-sets` **F1** — used at step(s) 1.1, 1.2
  - restatement on disk: For a relation, image and preimage are $R[A]=\{b:\exists a\in A\ ((a,b)\in R)\}$ and $R^{-1}[B]=\{a:\exists b\in B\ ((a,b)\in R)\}$ ([[def-image-and-preimage-under-a-relation]]).

#### target: `def-finite-sum-in-a-commutative-monoid`  (definition, 1 citation)

- `ex-frobenius-reciprocity-for-group-representations` **F8** — used at step(s) 2.2, 4.1, 5.1
  - restatement on disk: For a finite set $S$ and a function into a commutative monoid, $\sum_{s\in S}a_s$ is the enumeration-independent finite sum, and the sum over the empty set is $0$ ([[def-finite-sum-in-a-commutative-monoid]]).

#### target: `def-free-group-action`  (definition, 1 citation)

- `prop-holomorph-recognises-regular-normal-subgroups` **L1** — used at step(s) 1.1, 1.2
  - restatement on disk: A transitive action carries any chosen point to any other point ([[def-group-action]]), and in a free action only the identity fixes a point ([[def-free-group-action]]). Hence a free transitive action carries any point to any other by a unique group element.

#### target: `lem-product-with-normal-subgroup`  (lemma, 1 citation)

- `thm-classification-of-groups-of-order-pq` **L5** — used at step(s) 1.1, 3.1
  - restatement on disk: A product with a normal subgroup is a subgroup; group powers obey the addition law; and $x^m=1$ exactly when the order of $x$ divides $m$ ([[lem-product-with-normal-subgroup]], [[lem-group-power-laws]], [[lem-order-characterisation]]).

#### target: `def-complex-conjugate-real-imaginary-part-and-modulus`  (definition, 1 citation)

- `cor-triangle-inequality-for-inner-product-norm` **L4** — used at step(s) 1.2
  - restatement on disk: If $z=a+bi$, then $\operatorname{Re}z=a$ and $|z|=\sqrt{a^2+b^2}$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]]).

#### target: `lem-random-graph-fixed-pattern-probability`  (lemma, 1 citation)

- `thm-random-graph-logarithmic-homogeneous-set-upper-bound` **L3** — used at step(s) 3.1
  - restatement on disk: Prescribing $r$ present edges and $s$ absent edges in $G(n,p)$ has probability $p^r(1-p)^s$ ([[lem-random-graph-fixed-pattern-probability]]).

#### target: `thm-free-modules-are-projective-with-choice-boundary`  (theorem, 1 citation)

- `cor-free-modules-are-projective-and-flat` **L1** — used at step(s) 1.1
  - restatement on disk: Under AC every free module is projective; a finite basis requires only finite choice, and an empty basis requires none ([[thm-free-modules-are-projective-with-choice-boundary]]).

#### target: `cor-square-matrices-form-a-ring`  (corollary, 1 citation)

- `ex-matrix-algebra-extension-of-scalars` **L3** — used at step(s) 2.2, 3.1
  - restatement on disk: For every field $E$, $M_n(E)$ is a ring under matrix multiplication, including the one-element zero ring at $n=0$ ([[cor-square-matrices-form-a-ring]]).

#### target: `thm-representable-functors-preserve-small-limits`  (theorem, 1 citation)

- `thm-representable-second-proof-of-rapl-under-local-smallness` **F1** — used at step(s) 2.1
  - restatement on disk: A covariantly representable Set-valued functor on a locally small category preserves every small limit that exists ([[thm-representable-functors-preserve-small-limits]]).

#### target: `prop-groups-and-homomorphisms-form-category-grp`  (proposition, 1 citation)

- `thm-the-free-group-functor-is-left-adjoint-to-the-underlying-set-functor` **F3** — used at step(s) 1.2
  - restatement on disk: Groups and group homomorphisms form the locally small category $\mathbf{Grp}$ ([[prop-groups-and-homomorphisms-form-category-grp]]).

#### target: `thm-burali-forti`  (theorem, 1 citation)

- `fs-the-hom-set-form-of-an-adjunction-needs-no-size-hypothesis` **F4** — used at step(s) 2.1
  - restatement on disk: The ordinals form a proper class: no set contains every ordinal ([[thm-burali-forti]]).

#### target: `def-coset`  (definition, 1 citation)

- `ex-frobenius-reciprocity-for-group-representations` **F5** — used at step(s) 1.1, 2.2
  - restatement on disk: The left coset of $H$ represented by $g$ is $gH=\{gh:h\in H\}$, and the right coset is $Hg=\{hg:h\in H\}$ ([[def-coset]]).

### Report format

Write your findings to stdout as your final message. Per finding:

- citing item id, fact label, cited target id
- **what the restatement claims** vs **what the Statement says** (quote both)
- which numbered step depends on the difference, or "no step depends on it"
- your severity: `fatal` (a step is unlicensed / a false claim is asserted) or
  `nonfatal` (a competent reader closes it in 30 seconds)

Close with: targets opened, edges checked, findings by severity. If you checked
an edge and it is clean, it is clean — do not pad the report.
