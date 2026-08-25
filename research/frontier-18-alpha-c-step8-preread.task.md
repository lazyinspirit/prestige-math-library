# Step 8 — group **c**, run `frontier-18`

You are the group Alpha for batches **1**, **3**, **4**: 3 A/B pair(s), 6 page(s), 142 item(s), 69 open rejection(s) over 49 item(s).

You are a **fresh agent**. Nothing you did at step 3 or step 6 is in this
context, and nothing from any other group ever will be. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## Read your own pre-read first

**No pre-read digest exists for this group.** The step-7 pass did not run or did
not produce one, so you are meeting this mathematics for the first time with the
rejections already in front of you. Read the pages before the verdicts anyway —
the order matters more than where the notes came from.

## Read scope, write scope

**You may read the entire library.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-18-step8-cross-group.jsonl` as
`{from_group, item, owning_group, model, context_sha256, finding}` and adjudicate
your own rejection on what is true. The gate routes it to the owning group,
and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 1 | `lagrange-four-square-theorem` | A | number-theory | 57.009 | `sums-of-two-squares-examples` |
| 1 | `lagrange-four-square-theorem-examples` | B | number-theory | 57.01 | `lagrange-four-square-theorem` |
| 3 | `finite-fields-and-cyclotomic-extensions` | A | abstract-algebra | 101.2 | `the-galois-correspondence-examples`, `triangularisation-and-jordan-canonical-form` |
| 3 | `finite-fields-and-cyclotomic-extensions-examples` | B | abstract-algebra | 101.4 | `finite-fields-and-cyclotomic-extensions` |
| 4 | `noetherian-rings-and-hilbert-basis` | A | commutative-algebra | 111.001 | `modules-over-a-pid-and-canonical-forms-examples`, `symmetric-polynomials` |
| 4 | `noetherian-rings-and-hilbert-basis-examples` | B | commutative-algebra | 111.002 | `noetherian-rings-and-hilbert-basis` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `lagrange-four-square-theorem` — Lagrange Four Square Theorem (16 item(s))

- `def-sum-of-four-squares-representation` · definition — Representations as sums of four squares
- `lem-euler-four-square-product-identity` · lemma — Euler's four-square product identity
- `cor-four-squares-closed-under-products` · corollary — Sums of four squares are closed under products
- `lem-four-square-congruence-for-primes` · lemma — For every prime $p$ the congruence $x^2+y^2+1\equiv 0\pmod p$ is solvable
- `lem-least-absolute-remainder` · lemma — The least absolute remainder modulo a positive integer
- `lem-small-four-square-multiple-of-a-prime` · lemma — Some multiple $pm$ with $1\le m<p$ is a sum of four squares
- `lem-least-absolute-residue-quadruple-of-a-multiple` · lemma — The centred residue quadruple of $pm=a^2+b^2+c^2+d^2$ has norm $mn$ with $1\le n<m$
- `lem-four-square-descent` · lemma — Descent step: a smaller multiple of $p$ is a sum of four squares
- `thm-every-prime-is-a-sum-of-four-squares` · theorem — Every prime is a sum of four integer squares
- `thm-lagrange-four-square-theorem` · theorem — Lagrange's four-square theorem: every nonnegative integer is a sum of four integer squares
- `rem-sign-patterns-in-the-four-square-identity` · remark — Why the descent fixes one sign pattern in the four-square identity
- `lem-squares-modulo-eight` · lemma — A square is congruent to $0$, $1$ or $4$ modulo $8$
- `lem-sum-of-three-squares-is-never-seven-modulo-eight` · lemma — No sum of three integer squares is congruent to $7$ modulo $8$
- `lem-four-dividing-a-sum-of-three-squares-forces-even-coordinates` · lemma — If $4$ divides $x^2+y^2+z^2$ then $x$, $y$ and $z$ are all even
- `prop-three-square-congruence-obstruction` · proposition — Positive integers $4^a m$ with $m\equiv 7\pmod 8$ are not sums of three integer squares
- `cor-integers-requiring-four-squares` · corollary — Positive integers $4^a m$ with $m\equiv 7\pmod 8$ need four nonzero squares

### `lagrange-four-square-theorem-examples` — Lagrange Four Square Theorem — Examples (10 item(s))

- `ex-four-square-product-identity-by-expansion` · example — $7\cdot 15=105$ through all four bilinear coordinates
- `ex-four-square-congruence-for-an-odd-prime` · example — The two intersecting square sets modulo $11$ give $1^2+3^2+1=11$
- `ex-least-absolute-remainders-and-the-even-modulus-tie` · example — Least absolute remainders modulo $7$ and modulo $8$
- `ex-four-square-descent-for-thirteen` · example — Descending from $13\cdot 11$ to $13$ in two steps
- `ex-four-square-representations-of-sixty-five` · example — Four essentially different four-square representations of $65$
- `fs-four-square-representations-of-a-prime-are-essentially-unique` · false-statement — FALSE: a prime has one four-square representation up to order and signs
- `ex-four-square-representation-from-prime-factorisation` · example — Building a representation of $105$ from its prime factors
- `cex-three-squares-fail-for-seven-modulo-eight` · counterexample — $7$ and $28$ are not sums of three integer squares
- `cex-sums-of-three-squares-are-not-closed-under-products` · counterexample — $3$ and $5$ are sums of three squares and $15$ is not
- `ex-an-integer-that-genuinely-needs-four-squares` · example — $7$ and $28$ have four-square representations with no zero coordinate

### `finite-fields-and-cyclotomic-extensions` — Finite Fields and Cyclotomic Extensions (46 item(s))

- `lem-subgroup-lattice-of-a-finite-cyclic-group` · lemma — A finite cyclic group has exactly one subgroup of each order dividing its own
- `lem-a-finite-cyclic-group-has-euler-totient-many-generators` · lemma — A cyclic group of order $n$ has exactly $\varphi(n)$ generators
- `def-relative-frobenius-of-a-finite-field-extension` · definition — The relative Frobenius $x\mapsto x^q$ of an extension of finite fields
- `lem-fixed-field-of-the-relative-frobenius` · lemma — The elements of a finite extension fixed by the $q$-power map are exactly the base field
- `lem-order-of-the-relative-frobenius` · lemma — For a degree-$n$ extension of a field of order $q$, the $q$-power map has order exactly $n$
- `thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group` · theorem — A finite extension of a finite field of order $q$ is Galois with cyclic Galois group generated by $x\mapsto x^q$
- `thm-intermediate-fields-of-an-extension-of-finite-fields` · theorem — The intermediate fields of $\mathbb F_{q^n}/\mathbb F_q$ are the $\mathbb F_{q^d}$, one for each positive divisor $d$ of $n$
- `rem-the-two-descriptions-of-the-subfield-lattice-of-a-finite-field` · remark — The Galois description of the subfields of a finite field and the elementary divisibility criterion agree
- `thm-conjugates-over-a-finite-field-are-the-frobenius-powers` · theorem — A monic irreducible of degree $d$ over $\mathbb F_q$ has the $d$ distinct roots $\alpha,\alpha^{q},\dots,\alpha^{q^{d-1}}$
- `prop-divisor-sum-identity-for-monic-irreducibles-over-a-finite-field` · proposition — $\sum_{d\mid n}d\,N_q(d)=q^{n}$ for the counts $N_q(d)$ of monic irreducibles of degree $d$ over $\mathbb F_q$
- `def-normal-basis` · definition — Normal bases of a finite Galois extension
- `lem-a-nonzero-polynomial-in-several-variables-does-not-vanish-on-an-infinite-subring` · lemma — A polynomial vanishing at every tuple from an infinite subdomain is the zero polynomial
- `lem-a-family-is-a-basis-exactly-when-its-conjugate-matrix-is-invertible` · lemma — For a finite Galois extension, $(\alpha_j)$ is a base-field basis exactly when the matrix $(\sigma_i\alpha_j)$ is invertible
- `lem-the-galois-automorphisms-are-algebraically-independent-over-an-infinite-base-field` · lemma — Over an infinite base field, no nonzero polynomial vanishes at the conjugate tuple of every element
- `thm-normal-basis-theorem-over-an-infinite-base-field` · theorem — Every finite Galois extension of an infinite field has a normal basis
- `thm-normal-basis-theorem-for-a-cyclic-extension` · theorem — Every finite cyclic extension has a normal basis
- `thm-normal-basis-theorem` · theorem — Every finite Galois extension has a normal basis
- `def-roots-of-unity-in-a-field` · definition — The group $\mu_n(K)$ of $n$-th roots of unity in a field, and primitive $n$-th roots of unity
- `prop-the-roots-of-unity-in-a-field-form-a-finite-cyclic-group` · proposition — $\mu_n(K)$ is cyclic of order dividing $n$, and has a primitive $n$-th root of unity exactly when its order is $n$
- `thm-separability-of-x-n-minus-one-and-the-order-of-the-group-of-roots-of-unity` · theorem — $t^{n}-1$ is separable over $K$ exactly when the characteristic does not divide $n$, and then a splitting field carries $n$ distinct $n$-th roots of unity
- `prop-p-power-roots-of-unity-in-characteristic-p` · proposition — In characteristic $p$ the only $p^{k}$-th root of unity is $1$, and $t^{p^{k}}-1=(t-1)^{p^{k}}$
- `def-cyclotomic-extension` · definition — The cyclotomic extension $K(\mu_n)$ as a splitting field of $t^{n}-1$
- `thm-the-cyclotomic-galois-group-embeds-in-the-unit-group-modulo-n` · theorem — $K(\mu_n)/K$ is Galois and $\sigma\mapsto a_\sigma$ embeds its Galois group into $(\mathbb Z/n)^\times$
- `cor-cyclotomic-extensions-are-abelian` · corollary — The Galois group of a cyclotomic extension is abelian
- `thm-the-cyclotomic-galois-group-over-a-finite-field` · theorem — For $\gcd(n,q)=1$ the image of $\operatorname{Gal}(\mathbb F_q(\mu_n)/\mathbb F_q)$ in $(\mathbb Z/n)^\times$ is generated by $[q]$
- `def-cyclotomic-polynomial` · definition — The cyclotomic polynomials $\Phi_n\in\mathbb Z[t]$, defined by $\prod_{d\mid n}\Phi_d=t^{n}-1$
- `thm-cyclotomic-polynomials-are-monic-integer-polynomials-of-degree-euler-totient` · theorem — The recursion defines a unique monic $\Phi_n\in\mathbb Z[t]$, of degree $\varphi(n)$
- `lem-the-constant-term-of-a-cyclotomic-polynomial` · lemma — $\Phi_1(0)=-1$ and $\Phi_n(0)=1$ for $n\ge2$
- `thm-the-roots-of-the-cyclotomic-polynomial-are-the-primitive-roots-of-unity` · theorem — Over a field whose characteristic does not divide $n$, the roots of $\Phi_n$ are exactly the primitive $n$-th roots of unity
- `prop-irreducibility-of-the-cyclotomic-polynomial-characterises-the-full-galois-group` · proposition — $\Phi_n$ is irreducible over $K$ exactly when $[K(\zeta_n):K]=\varphi(n)$, exactly when the embedding into $(\mathbb Z/n)^\times$ is onto
- `prop-prime-power-cyclotomic-polynomials-and-the-eisenstein-translate` · proposition — $\Phi_{p^{r}}(t)=\sum_{k<p}t^{kp^{r-1}}$, and $\Phi_{p^{r}}(t+1)$ is Eisenstein at $p$
- `lem-a-primitive-root-of-unity-and-its-prime-power-share-a-minimal-polynomial-over-the-rationals` · lemma — If $p$ is a prime not dividing $n$, a rational minimal polynomial of a primitive $n$-th root of unity also kills its $p$-th power
- `thm-cyclotomic-polynomials-are-irreducible-over-the-rationals` · theorem — $\Phi_n$ is irreducible in $\mathbb Q[t]$ for every $n\ge1$
- `cor-the-galois-group-of-a-rational-cyclotomic-field` · corollary — $[\mathbb Q(\zeta_n):\mathbb Q]=\varphi(n)$ and $\operatorname{Gal}(\mathbb Q(\mu_n)/\mathbb Q)\cong(\mathbb Z/n)^\times$
- `thm-factorisation-of-the-cyclotomic-polynomial-over-a-finite-field` · theorem — For $\gcd(n,q)=1$ the reduction of $\Phi_n$ in $\mathbb F_q[t]$ is a product of distinct monic irreducibles, each of degree the order of $[q]$ modulo $n$
- `cor-the-reduced-cyclotomic-polynomial-is-irreducible-exactly-when-q-generates-the-unit-group` · corollary — The reduction of $\Phi_n$ is irreducible over $\mathbb F_q$ exactly when $[q]$ generates $(\mathbb Z/n)^\times$
- `lem-degree-of-a-compositum-with-a-galois-extension` · lemma — For $E/F$ finite Galois and $L/F$ finite inside a common field, $[EL:F]=[E:F][L:F]/[E\cap L:F]$
- `thm-composita-of-cyclotomic-extensions` · theorem — $K(\mu_m)K(\mu_n)=K(\mu_{\operatorname{lcm}(m,n)})$
- `lem-the-totient-of-a-gcd-and-of-a-least-common-multiple` · lemma — $\varphi(m)\varphi(n)=\varphi(\gcd(m,n))\,\varphi(\operatorname{lcm}(m,n))$
- `thm-intersections-of-rational-cyclotomic-fields` · theorem — $\mathbb Q(\mu_m)\cap\mathbb Q(\mu_n)=\mathbb Q(\mu_{\gcd(m,n)})$
- `cor-a-unique-quadratic-subfield-of-the-p-th-cyclotomic-field` · corollary — For an odd prime $p$, $\mathbb Q(\zeta_p)$ has exactly one intermediate field of degree two over $\mathbb Q$
- `thm-infinitely-many-primes-congruent-to-one-modulo-n` · theorem — For every $n\ge1$ there are infinitely many primes $p$ with $p\equiv1\pmod n$
- `lem-a-finite-abelian-group-is-a-quotient-of-a-power-of-a-cyclic-group` · lemma — Every finite abelian group is a quotient of $(\mathbb Z/n)^{k}$ for some $n$ and $k$
- `thm-every-finite-abelian-group-is-a-galois-group-over-the-rationals` · theorem — Every finite abelian group is the Galois group of some finite Galois extension of $\mathbb Q$
- `prop-subfields-of-rational-cyclotomic-fields-are-abelian-over-the-rationals` · proposition — Every intermediate field of $\mathbb Q(\mu_n)/\mathbb Q$ is Galois over $\mathbb Q$ with abelian Galois group
- `rem-kronecker-weber` · remark — Recorded, not proved: every finite abelian extension of $\mathbb Q$ lies in a cyclotomic field

### `finite-fields-and-cyclotomic-extensions-examples` — Finite Fields and Cyclotomic Extensions — Examples (19 item(s))

- `ex-the-galois-group-of-f-eight-over-f-two` · example — $\operatorname{Gal}(\mathbb F_8/\mathbb F_2)$ is cyclic of order three with no proper intermediate field
- `ex-the-subfield-lattice-of-the-field-of-order-two-to-the-twelve` · example — The intermediate fields of $\mathbb F_{2^{12}}/\mathbb F_2$ match the divisors of twelve
- `ex-the-monic-irreducible-cubics-over-f-two-and-the-divisor-sum-identity` · example — The divisor-sum identity at $q=2$, $n=3$ finds exactly two monic irreducible cubics
- `ex-the-frobenius-conjugates-of-a-generator-of-f-sixteen` · example — The four roots of $t^{4}+t+1$ over $\mathbb F_2$ are the Frobenius powers of any one of them
- `ex-a-normal-basis-of-f-eight-over-f-two` · example — A normal basis of $\mathbb F_8$ over $\mathbb F_2$
- `ex-a-normal-basis-of-the-complex-numbers-over-the-reals` · example — $\{1+i,\,1-i\}$ is a normal basis of $\mathbb C/\mathbb R$ while $\{1,i\}$ is not
- `fs-every-basis-of-a-finite-field-over-a-subfield-is-a-normal-basis` · false-statement — FALSE: every basis of a finite field over a subfield is a normal basis
- `ex-the-first-twelve-cyclotomic-polynomials` · example — $\Phi_1$ through $\Phi_{12}$ computed from the divisor recursion
- `ex-eisenstein-applied-to-the-translate-of-the-seventh-cyclotomic-polynomial` · example — $\Phi_7(t+1)$ is Eisenstein at seven
- `ex-the-fifth-cyclotomic-polynomial-splits-into-linear-factors-over-f-eleven` · example — $\Phi_5$ has four roots in $\mathbb F_{11}$
- `ex-the-seventh-cyclotomic-polynomial-factors-into-two-cubics-over-f-two` · example — $\Phi_7$ factors over $\mathbb F_2$ into the two monic irreducible cubics
- `ex-the-galois-group-of-the-twelfth-cyclotomic-field-and-its-quadratic-subfields` · example — $\operatorname{Gal}(\mathbb Q(\zeta_{12})/\mathbb Q)\cong(\mathbb Z/12)^\times$ and its three quadratic subfields
- `ex-roots-of-unity-in-characteristic-three` · example — In characteristic three, $t^{3}-1=(t-1)^{3}$ and $\mu_6$ coincides with $\mu_2$
- `cex-an-intersection-of-cyclotomic-extensions-larger-than-the-gcd-case` · counterexample — $\mathbb F_3(\mu_5)\cap\mathbb F_3(\mu_7)$ is larger than $\mathbb F_3$ although five and seven are coprime
- `fs-the-coefficients-of-every-cyclotomic-polynomial-lie-in-minus-one-zero-and-one` · false-statement — FALSE: every cyclotomic polynomial has all coefficients in $\{-1,0,1\}$
- `fs-the-cyclotomic-polynomial-is-irreducible-over-every-field` · false-statement — FALSE: $\Phi_n$ is irreducible over every field
- `fs-the-group-of-n-th-roots-of-unity-has-n-elements-in-every-field` · false-statement — FALSE: $\mu_n(K)$ has $n$ elements in every field $K$
- `fs-every-finite-abelian-group-is-the-galois-group-of-a-cyclotomic-field` · false-statement — FALSE: every finite abelian group is $\operatorname{Gal}(\mathbb Q(\mu_n)/\mathbb Q)$ for some $n$
- `ex-a-cyclic-cubic-field-inside-the-seventh-cyclotomic-field` · example — A degree-three Galois extension of $\mathbb Q$ inside $\mathbb Q(\zeta_7)$

### `noetherian-rings-and-hilbert-basis` — Noetherian Rings and Hilbert Basis (39 item(s))

- `rem-noetherian-conventions-and-choice` · remark — Conventions for this development and where dependent choice and Zorn's lemma are used
- `lem-generated-submodule-as-finite-linear-combinations` · lemma — The submodule generated by a subset consists of the finite $R$-linear combinations of that subset
- `lem-finite-generating-subset-of-a-generating-set` · lemma — Every generating set of a finitely generated module contains a finite generating subset
- `thm-noetherian-ring-ideal-characterisations` · theorem — A commutative ring is Noetherian exactly when every ideal is finitely generated, exactly when its ideals satisfy the ascending chain condition, and exactly when every nonempty set of ideals has a maximal member
- `thm-noetherian-induction` · theorem — Noetherian induction: a property that passes to an ideal whenever it holds for every strictly larger ideal holds for every ideal
- `lem-retract-of-a-noetherian-ring-is-noetherian` · lemma — A subring that admits a module retraction from a Noetherian ring is Noetherian
- `lem-localised-ideal-generated-by-contracted-numerators` · lemma — Every ideal of a localisation is generated by the images of any generating set of its contraction
- `thm-noetherian-ring-quotients-and-localisations` · theorem — Every quotient and every localisation of a Noetherian ring is Noetherian
- `cor-noetherian-from-finitely-many-noetherian-quotients` · corollary — A ring with finitely many ideals of zero intersection whose quotients are Noetherian rings is Noetherian
- `cor-product-of-two-noetherian-rings-is-noetherian` · corollary — A product of two Noetherian rings is Noetherian
- `lem-leading-coefficient-ideals` · lemma — The leading coefficients of the degree-$n$ elements of an ideal of $R[x]$ form an ideal of $R$, and these ideals ascend with $n$
- `lem-hilbert-basis-degree-cancellation` · lemma — A single cancellation step lowers the degree of a polynomial in an ideal once its leading coefficient lies in a realised stage
- `lem-polynomial-ideal-finite-generation` · lemma — Over a Noetherian ring, an ideal of $R[x]$ is generated by finitely many polynomials realising generators of its stages up to the stabilisation degree
- `thm-hilbert-basis-theorem` · theorem — Hilbert basis theorem: if $R$ is Noetherian then $R[x]$ is Noetherian
- `cor-finite-variable-polynomial-ring-noetherian` · corollary — If $R$ is Noetherian then $R[x_1,\ldots,x_n]$ is Noetherian for every $n\in\mathbb N$
- `cor-polynomial-ring-noetherian-implies-coefficient-ring-noetherian` · corollary — $R[x]$ is Noetherian if and only if $R$ is Noetherian
- `def-finite-type-and-module-finite-algebras` · definition — Subalgebra generated by a subset, algebras of finite type, and module-finite algebras
- `cor-finite-type-algebra-over-noetherian-ring-is-noetherian` · corollary — Every algebra of finite type over a Noetherian ring is a Noetherian ring
- `cor-finite-type-algebra-over-a-principal-ideal-domain-is-noetherian` · corollary — Every algebra of finite type over a principal ideal domain is a Noetherian ring
- `def-finitely-presented-module-and-algebra` · definition — Finitely presented modules and finitely presented algebras
- `thm-finite-generation-and-finite-presentation-over-a-noetherian-ring` · theorem — Over a Noetherian ring a module is Noetherian exactly when it is finitely generated, exactly when it is finitely presented
- `cor-finite-type-algebra-over-noetherian-ring-is-finitely-presented` · corollary — Every algebra of finite type over a Noetherian ring is finitely presented
- `lem-hom-module-over-a-commutative-ring` · lemma — Over a commutative ring the homomorphism group $\operatorname{Hom}_R(M,N)$ is an $R$-module
- `lem-hom-from-a-finite-free-module` · lemma — For a commutative ring, $\operatorname{Hom}_R(R^n,N)\cong N^n$
- `cor-hom-of-finite-modules-is-finite-over-a-noetherian-ring` · corollary — Over a Noetherian ring the homomorphism module between two finitely generated modules is finitely generated
- `lem-transitivity-of-module-finiteness` · lemma — Module finiteness is transitive along a tower of algebras
- `thm-module-finite-algebra-over-a-noetherian-ring-is-noetherian` · theorem — A module-finite algebra over a Noetherian ring is a Noetherian ring, and so is every ring between the two
- `lem-algebra-generated-by-finitely-many-integral-elements-is-module-finite` · lemma — A subalgebra generated by finitely many integral elements is module-finite
- `lem-artin-tate-coefficient-subalgebra` · lemma — The Artin–Tate coefficient subalgebra is a Noetherian algebra of finite type
- `lem-artin-tate-intermediate-ring-is-module-finite-over-the-coefficient-subalgebra` · lemma — In the Artin–Tate setup the intermediate ring is module-finite over the coefficient subalgebra
- `thm-artin-tate-lemma` · theorem — Artin–Tate lemma: an intermediate ring over which a finite-type algebra is module-finite is itself of finite type
- `cor-artin-tate-integral-form` · corollary — The Artin–Tate lemma with integrality in place of module finiteness
- `def-invariant-subring-of-a-group-of-ring-automorphisms` · definition — A group acting on a ring by automorphisms and its invariant subring
- `lem-orbit-polynomial-has-invariant-coefficients` · lemma — For a finite group of ring automorphisms the orbit polynomial is monic over the invariant subring, so the ring is integral over its invariants
- `thm-noether-finiteness-theorem-for-invariants` · theorem — Noether's finiteness theorem: the invariants of a finite group acting on a finite-type algebra over a Noetherian ring form an algebra of finite type
- `lem-maximal-non-finitely-generated-ideal` · lemma — If some ideal is not finitely generated, there is one maximal among the ideals that are not
- `lem-maximal-non-finitely-generated-ideal-is-prime` · lemma — An ideal maximal among the non-finitely-generated ideals is prime
- `thm-cohen-noetherian-criterion` · theorem — Cohen's criterion: a commutative ring in which every prime ideal is finitely generated is Noetherian
- `rem-noetherian-hypotheses-do-not-descend-to-subrings` · remark — Which constructions preserve the Noetherian condition, and which do not

### `noetherian-rings-and-hilbert-basis-examples` — Noetherian Rings and Hilbert Basis: Examples (12 item(s))

- `ex-noetherian-integers-and-fields` · example — Fields and $\mathbb Z$ are Noetherian, and so are their polynomial rings in finitely many variables
- `ex-noetherian-quotient-affine-algebra` · example — $k[x,y]/(xy)$ and $\mathbb Z[x]/(x^2-2)$ are Noetherian without classifying their ideals
- `ex-infinite-variable-polynomial-ring-is-not-noetherian` · example — The polynomial ring in countably many variables is not Noetherian
- `ex-non-noetherian-subalgebra-of-a-polynomial-ring` · example — The subalgebra $k[x,xy,xy^2,\ldots]$ of $k[x,y]$ is not Noetherian
- `ex-non-noetherian-ring-with-a-strict-chain-of-principal-ideals` · example — The subring $k[x,x/y,x/y^2,\ldots]$ of $k(x,y)$ has a strictly ascending chain of principal ideals
- `ex-hilbert-basis-leading-coefficient-reduction` · example — Working the Hilbert basis construction on an ideal of $\mathbb Z[x]$ with non-monic stages
- `ex-artin-tate-finite-intermediate-algebra` · example — Identifying the coefficient algebra in a concrete Artin–Tate tower
- `fs-noetherian-rings-have-a-uniform-bound-on-ideal-generators` · false-statement — False statement: in a Noetherian ring there is a single bound on the number of generators an ideal needs
- `ex-finite-dimensional-algebra-over-a-field-is-noetherian` · example — An algebra that is finite dimensional as a vector space over a field is a Noetherian ring
- `ex-symmetric-polynomials-as-a-noether-invariant-ring` · example — The symmetric polynomials as the invariant ring of the symmetric group, seen through Noether's finiteness theorem
- `ex-reynolds-operator-splits-the-invariant-inclusion` · example — When the group order is invertible the Reynolds operator retracts a ring onto its invariants
- `ex-hom-between-finite-modules-over-the-integers` · example — $\operatorname{Hom}_{\mathbb Z}(\mathbb Z/m,\mathbb Z/n)\cong\mathbb Z/\gcd(m,n)$

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Your rejections

| item | page | model | context_sha256 |
|---|---|---|---|
| `lem-sum-of-three-squares-is-never-seven-modulo-eight` | `lagrange-four-square-theorem` | deepseek-v4-pro | `cd987c4be1d69745349a1e7d9c9b10ae3c73d40d4909071e4cd9097859d6068e` |
| `ex-four-square-product-identity-by-expansion` | `lagrange-four-square-theorem-examples` | deepseek-v4-pro | `5418e0645a13c18d8d8b4de3bed19b022c95c0fb4a67ce230df6472071dbcf17` |
| `def-cyclotomic-polynomial` | `finite-fields-and-cyclotomic-extensions` | deepseek-v4-pro | `b80ebabf0fea594269e107d6246bd947137e2c1d5f28d3ccde5e04f3635a868a` |
| `lem-the-galois-automorphisms-are-algebraically-independent-over-an-infinite-base-field` | `finite-fields-and-cyclotomic-extensions` | deepseek-v4-pro | `9bf3f040d777a6d222c7d9ab22e385e9f3ecdef768cf0d9ccf3cfc662dd83385` |
| `thm-every-prime-is-a-sum-of-four-squares` | `lagrange-four-square-theorem` | gpt-5.6-terra | `bf3e208ff882dea10edf3338b51bc2473024c50df491f2911ce646b85519c817` |
| `lem-sum-of-three-squares-is-never-seven-modulo-eight` | `lagrange-four-square-theorem` | gpt-5.6-terra | `cd987c4be1d69745349a1e7d9c9b10ae3c73d40d4909071e4cd9097859d6068e` |
| `thm-lagrange-four-square-theorem` | `lagrange-four-square-theorem` | gpt-5.6-terra | `0476778de630daccf52a6525778ecca35daf1eb0ec49245ce8ec609f8fcfa7d6` |
| `thm-the-roots-of-the-cyclotomic-polynomial-are-the-primitive-roots-of-unity` | `finite-fields-and-cyclotomic-extensions` | deepseek-v4-pro | `bc9db153de7d32de479905a7a4d4df7af1f6ce354aff480514c612a3bddffa58` |
| `prop-prime-power-cyclotomic-polynomials-and-the-eisenstein-translate` | `finite-fields-and-cyclotomic-extensions` | deepseek-v4-pro | `fc911ae4331b0d32c997b13c7183c96a7e2def7b6195434cd5d9475e091e3b24` |
| `lem-a-finite-abelian-group-is-a-quotient-of-a-power-of-a-cyclic-group` | `finite-fields-and-cyclotomic-extensions` | deepseek-v4-pro | `50f8db0a8e46f1c63ab9826aa89a15ac5e32f50ff7a5fdaa7a20454265416587` |
| `thm-cyclotomic-polynomials-are-monic-integer-polynomials-of-degree-euler-totient` | `finite-fields-and-cyclotomic-extensions` | deepseek-v4-pro | `ac9cc8d1c48ca51163ac0ed026dcda3b0c5d25443e4544e2235bf85e8a78a9ff` |
| `thm-factorisation-of-the-cyclotomic-polynomial-over-a-finite-field` | `finite-fields-and-cyclotomic-extensions` | deepseek-v4-pro | `7a301e6796b469ffd71086621f4f74e9854a3d8ee2929908dd7cd99388e3aa09` |
| `thm-the-roots-of-the-cyclotomic-polynomial-are-the-primitive-roots-of-unity` | `finite-fields-and-cyclotomic-extensions` | gpt-5.6-terra | `bc9db153de7d32de479905a7a4d4df7af1f6ce354aff480514c612a3bddffa58` |
| `lem-the-totient-of-a-gcd-and-of-a-least-common-multiple` | `finite-fields-and-cyclotomic-extensions` | gpt-5.6-terra | `0574a3d99c0b1fad75290a73408338c0dac5551472aa697b37849615762529eb` |
| `prop-prime-power-cyclotomic-polynomials-and-the-eisenstein-translate` | `finite-fields-and-cyclotomic-extensions` | gpt-5.6-terra | `fc911ae4331b0d32c997b13c7183c96a7e2def7b6195434cd5d9475e091e3b24` |
| `prop-irreducibility-of-the-cyclotomic-polynomial-characterises-the-full-galois-group` | `finite-fields-and-cyclotomic-extensions` | gpt-5.6-terra | `f2d0393a666746d0ce3265d46d6f669b415f5d3d09ad8979ba6fa0923eaa223e` |
| `lem-degree-of-a-compositum-with-a-galois-extension` | `finite-fields-and-cyclotomic-extensions` | gpt-5.6-terra | `558574a7fd2f12cd6752bd08aff376cd36f850029e39746359bf0b3f953fd1a4` |
| `thm-intersections-of-rational-cyclotomic-fields` | `finite-fields-and-cyclotomic-extensions` | gpt-5.6-terra | `5ee1c3f48fd06cd530ef504d70752ba7fdbfbdc905adfd5482ee3bafdfdfb841` |
| `cor-a-unique-quadratic-subfield-of-the-p-th-cyclotomic-field` | `finite-fields-and-cyclotomic-extensions` | gpt-5.6-terra | `7202e3ed3ad1bef1ad59d008673e8a8db5b377dc9fd2a038a06fd8498f635857` |
| `thm-factorisation-of-the-cyclotomic-polynomial-over-a-finite-field` | `finite-fields-and-cyclotomic-extensions` | gpt-5.6-terra | `7a301e6796b469ffd71086621f4f74e9854a3d8ee2929908dd7cd99388e3aa09` |
| `def-roots-of-unity-in-a-field` | `finite-fields-and-cyclotomic-extensions` | deepseek-v4-pro | `54654795e8486107d5e8130296e96b139d1cf69005df774346e092d799316abf` |
| `lem-the-totient-of-a-gcd-and-of-a-least-common-multiple` | `finite-fields-and-cyclotomic-extensions` | deepseek-v4-pro | `0574a3d99c0b1fad75290a73408338c0dac5551472aa697b37849615762529eb` |
| `ex-eisenstein-applied-to-the-translate-of-the-seventh-cyclotomic-polynomial` | `finite-fields-and-cyclotomic-extensions-examples` | deepseek-v4-pro | `9fb461a3718d13a14e73fa9329b6519215c7bd894263ca1dddf9286ee5dbf7ad` |
| `ex-the-seventh-cyclotomic-polynomial-factors-into-two-cubics-over-f-two` | `finite-fields-and-cyclotomic-extensions-examples` | deepseek-v4-pro | `135eb0ef2af1a2c735b8b16a8fb38f5209d4e49681bccf164c3f0b5873c326e3` |
| `ex-the-galois-group-of-the-twelfth-cyclotomic-field-and-its-quadratic-subfields` | `finite-fields-and-cyclotomic-extensions-examples` | deepseek-v4-pro | `a0b0fb849248d08ad8a2428fe93fe1d6becc4efce24d0e277d5f786dcd9303a8` |
| `ex-the-first-twelve-cyclotomic-polynomials` | `finite-fields-and-cyclotomic-extensions-examples` | deepseek-v4-pro | `a99a3746a46edd2bd7060bbe866882e4a2cf5183bc0baa01be33f734cb6ed9ac` |
| `fs-the-coefficients-of-every-cyclotomic-polynomial-lie-in-minus-one-zero-and-one` | `finite-fields-and-cyclotomic-extensions-examples` | deepseek-v4-pro | `417ba2fc0280f875ea8d77c3187bc9d1d4e796c359c5a7128d297ce8ccdccebb` |
| `thm-conjugates-over-a-finite-field-are-the-frobenius-powers` | `finite-fields-and-cyclotomic-extensions` | gpt-5.6-terra | `329e6a9cc28133837a1c577d28e9d5cfd964a4e26fb5a6b79d25fa728c335bbe` |
| `lem-generated-submodule-as-finite-linear-combinations` | `noetherian-rings-and-hilbert-basis` | deepseek-v4-pro | `b845de83c161b8233d6e17aede125a3b68904caa2ea74f24c30d346b986ee167` |
| `ex-the-subfield-lattice-of-the-field-of-order-two-to-the-twelve` | `finite-fields-and-cyclotomic-extensions-examples` | deepseek-v4-pro | `23eda85085a8b44cce003a6d9c681ba133e7fdbf06b09f0a613288a6510df719` |
| `prop-p-power-roots-of-unity-in-characteristic-p` | `finite-fields-and-cyclotomic-extensions` | gpt-5.6-terra | `5ddef398b81705f13144db5fe89a5db6a0567625b7104fcf0928d461f0aa6753` |
| `cor-product-of-two-noetherian-rings-is-noetherian` | `noetherian-rings-and-hilbert-basis` | deepseek-v4-pro | `0c9a236bff05048b9e64d403c9b20a0d781ca60153af5503afc7395c065cf237` |
| `thm-the-cyclotomic-galois-group-embeds-in-the-unit-group-modulo-n` | `finite-fields-and-cyclotomic-extensions` | gpt-5.6-terra | `f024c52db4ec0501517b37b4df4efb65bdd3e4bc955e443ebaab906595aa5be0` |
| `def-cyclotomic-extension` | `finite-fields-and-cyclotomic-extensions` | gpt-5.6-terra | `67c3c8ca22d276c531653ba73110df924b69e6b219d1c6280b3c0869cb7f6398` |
| `def-cyclotomic-polynomial` | `finite-fields-and-cyclotomic-extensions` | gpt-5.6-terra | `b80ebabf0fea594269e107d6246bd947137e2c1d5f28d3ccde5e04f3635a868a` |
| `thm-noetherian-ring-quotients-and-localisations` | `noetherian-rings-and-hilbert-basis` | deepseek-v4-pro | `91a286573db6d3da846c533f750e17cbc86b8f2288bf75028468224f19237761` |
| `thm-cyclotomic-polynomials-are-monic-integer-polynomials-of-degree-euler-totient` | `finite-fields-and-cyclotomic-extensions` | gpt-5.6-terra | `ac9cc8d1c48ca51163ac0ed026dcda3b0c5d25443e4544e2235bf85e8a78a9ff` |
| `thm-infinitely-many-primes-congruent-to-one-modulo-n` | `finite-fields-and-cyclotomic-extensions` | gpt-5.6-terra | `089d3f317cde180f72ad85db34d9d3d063803a679dfc4e9227716d220c36606c` |
| `lem-a-finite-abelian-group-is-a-quotient-of-a-power-of-a-cyclic-group` | `finite-fields-and-cyclotomic-extensions` | gpt-5.6-terra | `50f8db0a8e46f1c63ab9826aa89a15ac5e32f50ff7a5fdaa7a20454265416587` |
| `ex-the-subfield-lattice-of-the-field-of-order-two-to-the-twelve` | `finite-fields-and-cyclotomic-extensions-examples` | gpt-5.6-terra | `23eda85085a8b44cce003a6d9c681ba133e7fdbf06b09f0a613288a6510df719` |
| `ex-a-normal-basis-of-the-complex-numbers-over-the-reals` | `finite-fields-and-cyclotomic-extensions-examples` | gpt-5.6-terra | `8050ac583c46dd84dfc7063a946dcbf8f77bc87a48cd389ccbe9455d8f058da2` |
| `ex-the-first-twelve-cyclotomic-polynomials` | `finite-fields-and-cyclotomic-extensions-examples` | gpt-5.6-terra | `a99a3746a46edd2bd7060bbe866882e4a2cf5183bc0baa01be33f734cb6ed9ac` |
| `ex-eisenstein-applied-to-the-translate-of-the-seventh-cyclotomic-polynomial` | `finite-fields-and-cyclotomic-extensions-examples` | gpt-5.6-terra | `9fb461a3718d13a14e73fa9329b6519215c7bd894263ca1dddf9286ee5dbf7ad` |
| `ex-a-cyclic-cubic-field-inside-the-seventh-cyclotomic-field` | `finite-fields-and-cyclotomic-extensions-examples` | deepseek-v4-pro | `91fd36c2a466bd4dfbcfefe8f38a9d61f6d87e52367449409bf858b45ab89428` |
| `thm-finite-generation-and-finite-presentation-over-a-noetherian-ring` | `noetherian-rings-and-hilbert-basis` | deepseek-v4-pro | `a2dc89c93ccbc4f51f01d479ce7d9f4694fc2353cf388a6f92d3413188aaa7a9` |
| `ex-the-galois-group-of-the-twelfth-cyclotomic-field-and-its-quadratic-subfields` | `finite-fields-and-cyclotomic-extensions-examples` | gpt-5.6-terra | `a0b0fb849248d08ad8a2428fe93fe1d6becc4efce24d0e277d5f786dcd9303a8` |
| `ex-the-seventh-cyclotomic-polynomial-factors-into-two-cubics-over-f-two` | `finite-fields-and-cyclotomic-extensions-examples` | gpt-5.6-terra | `135eb0ef2af1a2c735b8b16a8fb38f5209d4e49681bccf164c3f0b5873c326e3` |
| `cex-an-intersection-of-cyclotomic-extensions-larger-than-the-gcd-case` | `finite-fields-and-cyclotomic-extensions-examples` | gpt-5.6-terra | `711d5bc0ebe9e12e4b77f4b8956f9cc1b83d3ff663c25b3768016fcbe77c8d8b` |
| `fs-the-coefficients-of-every-cyclotomic-polynomial-lie-in-minus-one-zero-and-one` | `finite-fields-and-cyclotomic-extensions-examples` | gpt-5.6-terra | `417ba2fc0280f875ea8d77c3187bc9d1d4e796c359c5a7128d297ce8ccdccebb` |
| `fs-the-cyclotomic-polynomial-is-irreducible-over-every-field` | `finite-fields-and-cyclotomic-extensions-examples` | gpt-5.6-terra | `476525af522eaeb222de65f62b28a7d39e857c9d8a8f851399983acf5d748fc0` |
| `ex-a-cyclic-cubic-field-inside-the-seventh-cyclotomic-field` | `finite-fields-and-cyclotomic-extensions-examples` | gpt-5.6-terra | `91fd36c2a466bd4dfbcfefe8f38a9d61f6d87e52367449409bf858b45ab89428` |
| `thm-module-finite-algebra-over-a-noetherian-ring-is-noetherian` | `noetherian-rings-and-hilbert-basis` | deepseek-v4-pro | `41b37cfaaa538163a90c9d52dbd8026c25326ee9e66bdfb5e260218ddc1342bc` |
| `rem-noetherian-conventions-and-choice` | `noetherian-rings-and-hilbert-basis` | gpt-5.6-terra | `4484c8fd9bf925425e3c65ed54450be9ce01e603e5d1e37a10094a923b033dfc` |
| `lem-generated-submodule-as-finite-linear-combinations` | `noetherian-rings-and-hilbert-basis` | gpt-5.6-terra | `b845de83c161b8233d6e17aede125a3b68904caa2ea74f24c30d346b986ee167` |
| `lem-orbit-polynomial-has-invariant-coefficients` | `noetherian-rings-and-hilbert-basis` | deepseek-v4-pro | `e6eb6b45ef5c66b5ebe1e102f5f150b92c75cbcfd6bb67179c18f7543f2a2823` |
| `cor-product-of-two-noetherian-rings-is-noetherian` | `noetherian-rings-and-hilbert-basis` | gpt-5.6-terra | `0c9a236bff05048b9e64d403c9b20a0d781ca60153af5503afc7395c065cf237` |
| `cor-noetherian-from-finitely-many-noetherian-quotients` | `noetherian-rings-and-hilbert-basis` | gpt-5.6-terra | `eae169217a8c68bdaf19aa378ceab545ac45f1cdc9eec7d29f3af3f0a7d7c204` |
| `ex-non-noetherian-ring-with-a-strict-chain-of-principal-ideals` | `noetherian-rings-and-hilbert-basis-examples` | deepseek-v4-pro | `dfa7a68a4b0c75443c3e91c5e918fd3d0d9ab868e0a783ddd376f84cfc2d7891` |
| `lem-leading-coefficient-ideals` | `noetherian-rings-and-hilbert-basis` | gpt-5.6-terra | `9f1073a747ac3b38868e03917b39bcc6b64d6b4e6fbb976667869700077da7f1` |
| `thm-module-finite-algebra-over-a-noetherian-ring-is-noetherian` | `noetherian-rings-and-hilbert-basis` | gpt-5.6-terra | `41b37cfaaa538163a90c9d52dbd8026c25326ee9e66bdfb5e260218ddc1342bc` |
| `lem-maximal-non-finitely-generated-ideal` | `noetherian-rings-and-hilbert-basis` | gpt-5.6-terra | `50ee090525fbbb905c8f4e2410ba663420eed7a193300aed1de034c81cb0c12c` |
| `lem-orbit-polynomial-has-invariant-coefficients` | `noetherian-rings-and-hilbert-basis` | gpt-5.6-terra | `e6eb6b45ef5c66b5ebe1e102f5f150b92c75cbcfd6bb67179c18f7543f2a2823` |
| `ex-noetherian-integers-and-fields` | `noetherian-rings-and-hilbert-basis-examples` | gpt-5.6-terra | `6fe96b6d7e44dad1aa2986fc530c8d37beeca98ac4146f2b2641cc9ae9877be5` |
| `ex-non-noetherian-ring-with-a-strict-chain-of-principal-ideals` | `noetherian-rings-and-hilbert-basis-examples` | gpt-5.6-terra | `dfa7a68a4b0c75443c3e91c5e918fd3d0d9ab868e0a783ddd376f84cfc2d7891` |
| `ex-artin-tate-finite-intermediate-algebra` | `noetherian-rings-and-hilbert-basis-examples` | gpt-5.6-terra | `c47d8e2453a7810071cd6c0b99c27920e02b3a041e28c6b0cb08d30f805b1610` |
| `ex-finite-dimensional-algebra-over-a-field-is-noetherian` | `noetherian-rings-and-hilbert-basis-examples` | gpt-5.6-terra | `3b599e5d2b12399a86f16ab8678815f192cd7d95d31c00781a87c24beae19179` |
| `ex-reynolds-operator-splits-the-invariant-inclusion` | `noetherian-rings-and-hilbert-basis-examples` | deepseek-v4-pro | `a33a4c7757816c5721e4077e9bc18826a94382cfa006036eb3a2c940b3b56cb6` |
| `ex-symmetric-polynomials-as-a-noether-invariant-ring` | `noetherian-rings-and-hilbert-basis-examples` | gpt-5.6-terra | `70cf519bb2e38e7118d87cb85b1d0e9bec45c128cf1e7afb86a9d7b25163daf7` |
| `ex-hom-between-finite-modules-over-the-integers` | `noetherian-rings-and-hilbert-basis-examples` | gpt-5.6-terra | `99b3bc6772faee0bb98161b425770e19be819f32549bc97b0940c24c3d1ea01f` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step-7 pre-read — build your group's context before the verdicts exist

You are a **group Alpha for run `frontier-18`**, and this is the reading pass that
happens *while* the paired judges are still sweeping. Your group is named in the
context above, along with every page and item you own.

## You are READ-ONLY, and that is a kernel guarantee

Your sandbox refuses every write. This is not a request you could comply with
badly: step 7 judges a frozen text, and an edit landing during the sweep would
void verdicts already cast against the old bytes and silently produce a level
judged in two states at once. You cannot cause that here.

So: **do not attempt to repair anything.** If you find a defect — and you may —
record it in `concerns` and stop there. Step 8 is where you act on it, under the
fatal-only rule, after a verdict exists.

## Why this pass exists

Step 8 partitions the judges' rejections across the group Alphas, and each
step-8 Alpha is a **fresh dispatch** carrying nothing from earlier stages. Fresh
is deliberate — a reader who already decided a proof was fine is the worst-placed
reader of an objection to it — but it means the adjudicator meets 200 items and a
list of rejections in the same context window, and reads the mathematics through
the objections.

This pass separates those two readings. You read the mathematics **now**, before
any verdict exists, and your notes become the first thing your step-8 self reads.
Its judgement is then made against your own unprompted account of what the pages
say, not against the judges' framing of it.

Your `concerns` list is the sharpest part. A concern you record here was found
with nobody suggesting where to look; if a judge later objects at the same place,
that is two independent readings agreeing, and it is much stronger evidence than
your agreeing with a rejection you were shown.

## What to do

1. **Open every A page and its `-examples` companion**, and the item files under
   `items/` for each. The inventory above lists them; it is an inventory, not the
   mathematics.
2. **Open every published dependency your pages actually cite.** You may read the
   entire library — `items/` holds every published item and every item this run
   has built. Record a dependency only if you opened it; `opened: false` is an
   honest answer and a fabricated `true` is worse than either.
3. **Write down the conventions your pages fix** — the orientation sign, the
   boundary regularity, whether a measure is complete, where an index starts,
   which direction an iff is stated in. These are what a rejection usually turns
   on, and they are the thing a reader arriving cold does not have.
4. **Check each cross-group edge** your context names, in both directions. If it
   names none, `seams_checked` is empty and that is the expected answer.
5. **Record what already looks thin**, honestly graded. `would-be-fatal` means the
   claim as written looks false or unsupported — not that you would phrase it
   differently. `gap-a-reader-closes` is the 30-second class. Never manufacture an
   entry to look thorough; an empty list from a careful reading is a result.

## What this pass is not

It is not an audit, and it does not replace one. Step 6 already ran independent
readers, refuters and adjudication over this text. You are not re-running that
and you are not being asked for a verdict on anything. You are building the
context your step-8 self will otherwise have to build under time pressure with
the judges talking over you.

Do not summarise the pages for a reader who has not seen them. Write for
yourself, six hours from now, holding a list of rejections.

**No permission prompts of any kind**, including inside an `&&` chain.
