# Step 8 — group **c**, run `frontier-18`

You are the group Alpha for batches **1**, **3**, **4**: 3 A/B pair(s), 6 page(s), 142 item(s), 0 open rejection(s) over 0 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-18-alpha-c-step8-context.json` is what a group Alpha for this group wrote during step 7,
while the judges were still sweeping and no verdict existed. It records the
conventions your pages fix, which items the rest lean on, which published
dependencies were actually opened, and what already looked thin.

**Its `concerns` list is evidence, not decoration.** Each entry was found with
nobody suggesting where to look. A judge rejection landing at the same place is
two independent readings agreeing and should be very hard to call a
`false_positive`; a rejection landing nowhere near any of them is not thereby
wrong, but it is the case to read most carefully against the text.

It is notes, not authority. Where it and the item files disagree, the files win.

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
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

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

## Alerts from other groups

None. No other group flagged an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: both
lanes may have passed every item you own. Verify it against
`research/frontier-18-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — exact closure recovery, run `frontier-18`

You are a **group Alpha**. The step-8 judge-closure gate found current rejection
rows that the preceding adjudication did not cover. This is a narrow recovery
dispatch, not a second audit.

Your group is named in the context above. If you are reading this file
standalone, open `research/frontier-18-step8-scope.json` and find the group whose
batches you were dispatched against before anything else — every scope rule below
is relative to it.

## Exact scope

Read `research/frontier-18-judge-closure.json`. Its `unadjudicated_rows` array names
each `(id, model, context_sha256)` rejection with no exact Alpha outcome.
Recompute that join against `research/frontier-18-judge.jsonl` and
`research/frontier-18-judge-adjudications.jsonl`; exclude null, capacity, transport
and already-adjudicated rows.

**The receipt is level-wide and you are not.** Step 8 is partitioned: keep only
the rows whose `id` belongs to your group, using `by_item` in
`research/frontier-18-step8-scope.json`. A row belonging to another group is that
group's to answer and the engine dispatches it there — taking it yourself
produces two adjudications of one rejection, which is the state the partition
exists to prevent. A row belonging to **no** group is different and you must not
drop it silently: adjudicate it if you can decide it honestly, and say so
explicitly in your report either way.

For a legacy receipt without `unadjudicated_rows`, use its `unadjudicated` ids
only to reconstruct the missing exact keys from those two ledgers. Do not widen
the scope to other rejections. Preserve the existing step-8 reports and every
existing adjudication as durable prior work — including other groups' — and do
not redo, replace or reinterpret them.

## Fatal-only adjudication

For every exact missing row in your scope:

1. Read the frozen verdict, current item, and every cited target needed to
   decide it. You may read the entire library; you may write only inside your
   own batches.
2. **Append** exactly one row to
   `research/frontier-18-judge-adjudications.jsonl` with
   `{id, model, context_sha256, item_sha256, outcome, defect_type?}`. The file is
   shared with the other groups and is append-only: never rewrite it, and never
   remove a row another group wrote.
3. Compute `item_sha256` from the pre-edit item using the step-8 guard/touchlog
   normalization, which excludes the entire `verification:` block. Do not copy
   the differently normalized hash from the judge ledger.
4. A `confirmed_nonfatal` or `false_positive` outcome licenses no mutation.
5. Only `confirmed_fatal` licenses a coherent repair. Apply that repair, append
   its defect-ledger row in the same act, and update only the established
   contract, manifest, plan, impact and rejudge artifacts the repair makes
   stale. Never broaden the rejudge set to an unchanged page-mate.
6. If the real defect lies in another group's item, record it in
   `research/frontier-18-step8-cross-group.jsonl` as
   `{from_group, item, owning_group, model, context_sha256, finding}` and
   adjudicate your own row on what is true. Do not repair it.

Run the step-8 guard from the `pre-step8` baseline and recompute judge closure
with pending rejudge allowed. **Both are level-wide and will report other
groups' open work as well as yours** — that is expected while the other
recoveries are still running, and it is not yours to close. Your part is complete
when no row in *your* scope is unadjudicated and no fatal of yours is open;
materially repaired ids may remain in `needs_rejudge` for the engine-owned
rejudge stage.

## Output

`research/frontier-18-alpha-step8-closure-recovery-<label>.md`, where `<label>` is
your group. **The label is not optional.** Four groups can be recovering at once,
and a shared filename means the last writer destroys the others' findings —
which is exactly how eleven fatal findings were lost once when reader-7 wrote
over reader-1's report.

List every exact row you took, its evidence and outcome, every licensed repair,
the resulting rejudge targets, any cross-group finding you raised, any row you
found belonging to no group, and the gate results. Do not append this recovery
onto a stale or earlier step-8 report.

No permission prompts of any kind.
