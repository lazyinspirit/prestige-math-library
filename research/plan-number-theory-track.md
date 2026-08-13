# Number theory — subject-track prose scaffold

## Summary for the orchestrator — in-progress checkpoint

**Commission and placement.** This is the sole scaffold for the
`number-theory` track in `subjects-01`.  It has three noncontiguous blocks:
the elementary/reciprocity block is placed after `splitting-fields-examples`,
the analytic block after `bloch-schottky-and-picard-examples`, and the
algebraic/local block after the last page of `commutative-algebra`.  Absolute
orders are intentionally absent.  No result in the elementary block has a
forward reference to either higher block.

**Durable progress.** MT-1--MT-8 are complete below: primitive roots and unit
groups; quadratic residues, reciprocity, and Jacobi symbols; two and four
squares; positive-definite binary quadratic forms; regular continued
fractions; and Pell equations, including a finite-orbit theorem for generalized
Pell equations.  Their full-text backing includes Peter Hackman's *Elementary
Number Theory*, both complete open Stein texts used below, the MIT 18.781
lecture set, and the author-hosted notes of Conrad.  Every candidate id used so
far was reconciled against `items/`; collisions were namespaced rather than
reused.

**Next action if this lane is resumed here.** Seal the elementary block's
heading-by-heading source harvest, then append the post-commutative-algebra
local and algebraic number-theory pairs.  All three parallel research reports
are now complete.  No blocker has been recorded.

---

## 1. Why this track exists

The published number-theory band establishes divisibility, gcd and Bézout,
prime factorisation, congruences, the Chinese remainder theorem, the unit group
((\mathbb Z/n\mathbb Z)^\times), Euler's totient, Fermat--Euler congruences,
and Wilson's theorem.  Its three authored pages are, with their live item
counts, `divisibility-gcd-and-bezout` (26),
`primes-and-the-fundamental-theorem-of-arithmetic` (18), and
`congruences-and-the-chinese-remainder-theorem` (23).  The live files contain
no definition of a quadratic residue and no quadratic-reciprocity theorem.
The track therefore begins with the multiplicative structure hidden behind
the published congruence computations, develops reciprocity and classical
Diophantine theory without borrowing later machinery, and only at its two
higher anchors introduces the analytic and algebraic languages that those
subjects require.

The placement split is mathematically binding, not editorial.  The elementary
block may cite the authored group and polynomial pages below
`splitting-fields-examples`, but it may not cite (p)-adic fields, rings of
integers, Dirichlet series, or any other construction introduced later in this
scaffold.  The analytic block may cite the planned complex-analysis Gamma and
Riemann-zeta pages because its anchor follows them.  The algebraic/local block
may cite the finished commutative-algebra scaffold and the abstract-algebra
Galois block, and applies their general theorems rather than restating them.

The following dependencies have been checked against authored files or, for a
planned sibling page, against the sibling scaffold that owns its stable id.

| Source page | Material used here |
|---|---|
| `divisibility-gcd-and-bezout` | divisibility, gcd, Bézout, Euclidean division, least common multiples, and the existing (p)-adic valuation on integers and rationals |
| `primes-and-the-fundamental-theorem-of-arithmetic` | Euclid's lemma, canonical prime factorisation, infinitude of primes, and elementary prime estimates already proved there |
| `congruences-and-the-chinese-remainder-theorem` | quotient rings (\mathbb Z/n\mathbb Z), units and (\varphi), CRT, Euler/Fermat/Wilson, the prime-power formula for (\varphi), and its product formula |
| `cyclic-groups-and-direct-products`; `the-structure-of-finite-abelian-groups` | cyclic groups, orders in products, finite-abelian invariant factors, group exponent, and the order/exponent formula |
| `polynomial-rings-and-roots` | the root bound over a domain and `cor-finite-subgroups-of-units-in-a-domain-are-cyclic` |
| `splitting-fields` | splitting-field language only where an elementary example explicitly needs it; no Galois correspondence is available at the low anchor |
| finished `abstract-algebra` Galois and cyclotomic pages | finite-field and Galois theory, cyclotomic extensions, norm and trace; cited only by the algebraic block |
| finished `commutative-algebra` CA-6, CA-8, CA-9, CA-13, CA-14 | integral extensions, DVRs, Dedekind domains, fractional ideals, unique ideal factorisation, class groups, completions, and Henselian rings; cited only by the algebraic/local block |
| planned `the-gamma-function`; `the-riemann-zeta-function` | Gamma continuation and functional equation; zeta Euler product, continuation, functional equation, and function-theoretic nonvanishing on (\Re s=1); cited only by the analytic block |

No item below re-mints an id in this table.  In particular,
`def-p-adic-valuation`, `lem-p-adic-valuation-basic`, and
`lem-p-adic-valuation-on-q` are published and will be cited when the local
block normalises (|x|_p=p^{-v_p(x)}).

## 2. Scope denials

1. **General commutative algebra.** Integral dependence, going up and down,
   valuation rings, DVRs, Dedekind domains, fractional ideals, abstract class
   groups, adic completion, and Henselian rings belong to
   `commutative-algebra`.  This track proves that (\mathcal O_K) satisfies
   the relevant hypotheses and extracts arithmetic consequences.
2. **General Galois and finite-field theory.** The Galois correspondence,
   separability, finite fields, cyclotomic extensions as field extensions, and
   Kummer theory belong to `abstract-algebra`.  This track owns primes in
   number fields, decomposition and inertia, and arithmetic Frobenius.
3. **Zeta as a function-theoretic object.** Construction of the Gamma
   function, meromorphic continuation and functional equation of
   (\zeta(s)), and the completed zeta function belong to
   `complex-analysis`.  This track owns coefficients, prime sums, zero-free
   regions used arithmetically, explicit formulas, and the prime number
   theorem.
4. **Cryptography and computational primality.** RSA, Miller--Rabin,
   Lucas--Lehmer, discrete-log algorithms, and complexity analyses are useful
   applications but not part of the commissioned mathematical spine.  Source
   headings concerning them receive individual out-of-scope dispositions in
   the harvest.
5. **Elliptic and higher Diophantine geometry.** Mordell equations, elliptic
   curves, descent on curves, the Mordell--Weil theorem, and Fermat's last
   theorem require algebraic geometry and substantial additional machinery.
   Pell equations remain because continued fractions give a complete
   elementary treatment.
6. **Class field theory and higher reciprocity.** Ideles, Artin reciprocity,
   the existence theorem of class field theory, cubic and higher reciprocity,
   and the Kronecker--Weber theorem form a later subject.  Frobenius in a
   finite Galois extension and its cyclotomic use are included; they do not
   presume class field theory.
7. **Additive and automorphic theory beyond the named remit.** Waring's
   problem, Goldbach-type questions, the circle method, modular forms,
   automorphic (L)-functions, and sieve theory beyond the elementary
   estimates explicitly needed below require separate tracks.  Lagrange's
   four-square theorem is included with an elementary proof.

## 3. Conventions, item contract, and provenance

Here (\mathbb N=\{0,1,2,\ldots\}), as in the published library, and a
modulus is positive unless explicitly stated otherwise.  The unit group for
(n=1) is the one-element group; this makes (\varphi(1)=1) and the
primitive-root classification include (n=1) without an exception hidden in
notation.  A primitive root is a **unit class**, not an arbitrarily selected
integer representative.  Later, an additive valuation is normalised by
(v_p(p)=1), its associated absolute value by (|p|_p=p^{-1}), and two
absolute values are equivalent when they induce the same topology (with the
positive-power characterisation proved, not built into the definition).
Dirichlet characters are functions on (\mathbb Z), periodic modulo (q),
and extended by zero off the units; all logarithms in the analytic block are
natural.

Every mathematical-content row carries component provenance.  `L/L` means a
literature-derived statement with a literature-derived proof route.  `L/A`
means a literature-derived statement whose proof is altered only to use
published library lemmas, expose a suppressed well-definedness step, or split
a long proof.  `L/NA` is a literature-derived definition with no proof
component; `L/NS` is a literature-derived statement for which that item
supplies no proof.  The source cell is the provenance rationale.  No planned
statement in this scaffold is AI-generated, and no AI-generated construction
is a dependency target.

Each A page is citable and lists its items in dependency order.  Each B page is
a non-citable examples/counterexamples/exercises companion and never appears
in `requires`.  No A page exceeds 60 items.  Every future page summary is two
short paragraphs: the first gives the mathematical arc; the second names
prerequisites and downstream use.

---

## 4. Elementary and reciprocity block — after `splitting-fields-examples`

### MT-1. Primitive roots and the structure of the unit groups modulo (n)

- **A page id:** `primitive-roots-and-unit-groups-modulo-n`
- **B page id:** `primitive-roots-and-unit-groups-modulo-n-examples`
- **Requires:** `congruences-and-the-chinese-remainder-theorem`,
  `cyclic-groups-and-direct-products`,
  `the-structure-of-finite-abelian-groups`, and
  `polynomial-rings-and-roots`.  In particular, cite
  `def-unit-group-modulo-n-and-euler-totient`,
  `thm-chinese-remainder-theorem`, `thm-totient-of-a-prime-power`,
  `cor-euler-totient-is-multiplicative`, `def-order-in-a-group`,
  `def-exponent-of-a-finite-group`,
  `cor-order-and-exponent-from-invariant-factors`,
  `thm-order-of-element-in-direct-product`, and
  `cor-finite-subgroups-of-units-in-a-domain-are-cyclic`.
- **Primary backing:** Peter Hackman, *Elementary Number Theory* (2009),
  Ch. C, §§C.I--C.V, pp. 69--91: “False Cases Excluded,” “Primitive Roots
  Modulo a Prime,” “Binomial Congruences,” “Prime Powers,” and “The Carmichael
  Exponent,” especially C.I.1--C.I.6, C.II.1--C.II.2,
  C.III.1--C.III.5, C.IV.1--C.IV.10, and C.V.1--C.V.6.
  William Stein, *Elementary Number Theory: Primes, Congruences, and Secrets*
  (2017), §2.5, pp. 39--49, Def. 2.5.1 through Thm. 2.5.8, independently
  supplies cyclicity of (\mathbb F_p^\times), the order-count argument, and
  primitive-root enumeration.  Independent full-lecture check: Alexander
  Gorodnik, *Number Theory*, Lecture 8, §§1--2, pp. 1--6, Defs. 1.1, 1.5;
  Lemmas 1.2--1.4; Thms. 2.1, 2.2, 2.4; Cor. 2.3.

#### A-page items, in dependency order

| id | kind | statement | provenance and locator |
|---|---|---|---|
| `def-primitive-root-modulo-n` | `def` | For (n\ge1), a primitive root modulo (n) is a class (g\in(\mathbb Z/n\mathbb Z)^\times) whose order is (\varphi(n)). | L/NA; Hackman C.I.1; Stein Def. 2.5.1; Gorodnik Def. 1.5. |
| `prop-primitive-root-iff-unit-group-generator` | `prop` | A unit class is a primitive root modulo (n) iff it generates ((\mathbb Z/n\mathbb Z)^\times); hence a primitive root exists iff that unit group is cyclic. | L/A; Hackman C.I.1--C.I.2; Gorodnik Def. 1.5 and the paragraph following it; use the published equality (|(\mathbb Z/n\mathbb Z)^\times|=\varphi(n)). |
| `lem-order-of-power-of-a-primitive-root` | `lem` | If (g) is primitive modulo (n), then (g^a) has order (\varphi(n)/\gcd(a,\varphi(n))); in particular it is primitive exactly when (\gcd(a,\varphi(n))=1). | L/A; Hackman A.V.17 and C.IV Ex. 2; Gorodnik Lemma 1.3.  Prove the divisibility equivalence directly from the published definition of order. |
| `cor-unit-group-modulo-prime-is-cyclic` | `cor` | For every prime (p), ((\mathbb Z/p\mathbb Z)^\times) is cyclic of order (p-1). | L/A; Stein Thm. 2.5.5; Hackman C.II.1; cite `thm-z-mod-p-is-a-field` and the already-authored `cor-finite-subgroups-of-units-in-a-domain-are-cyclic`. |
| `cor-primitive-roots-modulo-prime` | `cor` | A primitive root modulo every prime exists, and there are exactly (\varphi(p-1)) primitive-root classes. | L/A; Stein Cor. 2.5.6 and Prop. 2.5.7; Gorodnik Thm. 2.1; apply the preceding order-of-a-power lemma to one generator. |
| `lem-primitive-root-lift-to-prime-square` | `lem` | If (p) is odd and (g) is primitive modulo (p), then at least one of the (p) classes (g+tp\pmod {p^2}), (0\le t<p), is primitive modulo (p^2); indeed at most one lift satisfies ((g+tp)^{p-1}\equiv1\pmod {p^2}). | L/A; Hackman C.IV.6--C.IV.7; Gorodnik Thm. 2.2.  The strengthened “at most one bad lift” is exactly the affine congruence computed in both proofs. |
| `lem-order-of-one-plus-pu-modulo-prime-powers` | `lem` | If (p) is odd, (p\nmid u), and (r\ge1), then the class of (1+pu) modulo (p^{r+1}) has order (p^r). | L/A; Hackman C.IV.5 and the induction inside C.IV.8; Gorodnik proof of Thm. 2.2.  State the binomial congruence ( (1+p^s u)^p\equiv1+p^{s+1}u\pmod {p^{s+2}}) as the proof's induction step, not as an unsourced appeal to LTE. |
| `thm-unit-group-modulo-odd-prime-power-is-cyclic` | `thm` | For odd prime (p) and (k\ge1), ((\mathbb Z/p^k\mathbb Z)^\times\cong C_{p^{k-1}(p-1)}); a good lift from the prime-square lemma is primitive for every (p^k). | L/A; Hackman C.IV.7--C.IV.10; Gorodnik Thm. 2.2 and summary after Thm. 2.4.  Combine the reduction-mod-(p) order (p-1) with the preceding (p)-power order lemma. |
| `cor-number-of-primitive-roots-modulo-odd-prime-power` | `cor` | For odd prime (p) and (k\ge1), there are (\varphi(\varphi(p^k))=p^{k-2}(p-1)\varphi(p-1)) primitive roots when (k\ge2), and (\varphi(p-1)) when (k=1). | L/A; Gorodnik Cor. 2.3; Hackman C.IV Exs. 1--2.  Keep the (k=1) case separate so no negative exponent appears. |
| `lem-order-of-five-modulo-two-powers` | `lem` | For (k\ge3), (5) has order (2^{k-2}) modulo (2^k). | L/A; Hackman C.III.4 and C.IV.3; Gorodnik Thm. 2.4(ii).  Prove (v_2(5^{2^r}-1)=r+2) by the displayed difference-of-squares induction rather than citing an unbuilt lifting-the-exponent lemma. |
| `thm-unit-group-modulo-two-power-structure` | `thm` | The unit groups modulo (2) and (4) are (C_1) and (C_2), and for (k\ge3), ((\mathbb Z/2^k\mathbb Z)^\times=\langle-1\rangle\times\langle5\rangle\cong C_2\times C_{2^{k-2}}). | L/A; Hackman C.I.4, C.III.4, C.IV.3--C.IV.4; Gorodnik Thm. 2.4(ii).  The proof partitions odd classes by their residue modulo (4) and proves uniqueness of ((-1)^\epsilon5^j). |
| `thm-unit-group-crt-decomposition` | `thm` | If (m_1,\ldots,m_r) are pairwise coprime positive integers, the CRT ring isomorphism restricts canonically to a group isomorphism ((\mathbb Z/(m_1\cdots m_r)\mathbb Z)^\times\cong\prod_i(\mathbb Z/m_i\mathbb Z)^\times). | L/A; Hackman B.I.5 and C.V.4--C.V.5; Gorodnik summary after Thm. 2.4.  Prove that an element of a finite product ring is a unit iff each coordinate is a unit. |
| `thm-unit-group-modulo-n-structure` | `thm` | For (n=2^e\prod_{i=1}^r p_i^{a_i}), with distinct odd (p_i), the unit group is the canonical CRT product of (G_e) and the cyclic groups (C_{p_i^{a_i-1}(p_i-1)}), where (G_0=G_1=C_1), (G_2=C_2), and (G_e=C_2\times C_{2^{e-2}}) for (e\ge3). | L/A; Gorodnik, Lecture 8, summary on pp. 5--6; Hackman C.IV.10 and C.V.6.  “Canonical” applies to the CRT factor map; the displayed cyclic-coordinate identifications depend on chosen generators and are stated only up to isomorphism. |
| `def-carmichael-function` | `def` | Define (\lambda(n)) for (n\ge1) to be the exponent of the finite group ((\mathbb Z/n\mathbb Z)^\times); thus (\lambda(1)=1). | L/NA; Hackman C.V.3 defines the same integer as maximal element order; Gorodnik, Lecture 8, p. 6.  The library uses the group-exponent formulation and immediately proves equivalence using the published finite-abelian invariant-factor theorem. |
| `prop-carmichael-function-as-maximal-order` | `prop` | The exponent (\lambda(n)) is attained as the order of a unit modulo (n), so it equals the maximal multiplicative order and is the least positive (L) for which (a^L\equiv1\pmod n) for every (a) coprime to (n). | L/A; Hackman C.II.2 and C.V.2--C.V.3; cite `cor-order-and-exponent-from-invariant-factors`.  This avoids treating “maximum” as self-evident for an arbitrary finite group. |
| `thm-carmichael-function-formula` | `thm` | For odd (p), (\lambda(p^k)=p^{k-1}(p-1)); (\lambda(2)=1), (\lambda(4)=2), and (\lambda(2^k)=2^{k-2}) for (k\ge3); on a coprime product, (\lambda(mn)=\operatorname{lcm}(\lambda(m),\lambda(n))).  Hence the prime-factor formula is the lcm of these local values. | L/A; Hackman C.V.4--C.V.6; Gorodnik, Lecture 8, p. 6.  Read the lcm rule from orders in the CRT direct product. |
| `cor-carmichael-exponent-theorem` | `cor` | If (\gcd(a,n)=1), then (a^{\lambda(n)}\equiv1\pmod n), and no smaller positive exponent works simultaneously for every unit class. | L/A; Hackman C.V.3--C.V.6; Gorodnik final paragraph before the aside on p. 6.  This is the exponent definition translated through the published unit criterion. |
| `thm-classification-of-moduli-with-primitive-roots` | `thm` | A positive integer (n) has a primitive root iff (n\in\{1,2,4\}), (n=p^k), or (n=2p^k) for an odd prime (p) and (k\ge1). | L/A; Hackman C.I.3--C.I.6 and C.IV.10; Gorodnik Thm. 2.4(i).  Necessity uses the (2)-power structure and the fact that a product containing two nontrivial even-order factors has no element of full product order. |
| `cor-number-of-primitive-roots-modulo-n` | `cor` | If (n) is one of the classified moduli, it has exactly (\varphi(\varphi(n))) primitive-root classes; otherwise it has none. | L/A; Stein Prop. 2.5.7; Hackman C.IV Ex. 2; Gorodnik Cor. 2.3, combined with the classification. |

#### Proof strategy, well-definedness, and boundary obligations

The prime case is not reproved by a second order-count argument: the authored
`cor-finite-subgroups-of-units-in-a-domain-are-cyclic` applies directly to the
finite subgroup (\mathbb F_p^\times\) of the units of a field.  The concrete
corollary is retained because it is the arithmetic interface used repeatedly
below.  Enumeration then follows from the explicit order formula for powers of
one generator.

The prime-power proof exposes the step often suppressed as “a primitive root
lifts.”  Expanding ((g+tp)^{p-1}) modulo (p^2) gives a nonconstant affine
function of (t\pmod p), so at most one lift is bad.  Once a lift has nontrivial
((p-1))-st power modulo (p^2), the binomial induction on
(1+p^su) supplies exactly one new factor (p) in the order at each stage.
All choices range over an explicitly finite residue set.

For (2^k), prove the exact order of (5), then show that its powers are
precisely the unit classes congruent to (1\pmod4).  Multiplication by (-1)
gives the other half.  This proves both existence and uniqueness of
((-1)^\epsilon5^j), so the asserted direct product is not merely a cardinality
comparison.  The general CRT map is well defined on residue classes by the
published quotient construction; its inverse is independent of the integer
representative because CRT gives one residue **class** modulo the product.
The restriction to units and the factor-order lcm are proved explicitly.

The displayed decomposition into cyclic factors is not called canonical:
choosing primitive roots chooses those coordinate isomorphisms.  Only the CRT
map induced by the canonical reduction homomorphisms is canonical.  The
Carmichael function is defined as an exponent, which is well defined without
choosing a maximum-order element; attainment is a theorem.  MT-1 is ZF.  Its
finite selections can be replaced by least standard representatives and use
neither countable choice nor dependent choice.

The aside in Gorodnik on the least primitive root and Artin's primitive-root
conjecture is not promoted to an item.  The former is an analytic estimate
conditional on GRH in the cited formulation, and the latter is open in
general; both receive out-of-scope dispositions in the source harvest and are
non-load-bearing boundary remarks at most.

#### B page

The companion computes primitive roots and invariant factors rather than
supplying any theory used by A:

| id | kind | task |
|---|---|---|
| `ex-primitive-roots-modulo-seventeen` | `ex` | Find one primitive root modulo (17), list all (\varphi(16)) primitive-root classes, and check their orders by the prime divisors of (16). |
| `ex-lifting-a-primitive-root-through-powers-of-five` | `ex` | Start with a primitive root modulo (5), identify the unique bad lift modulo (25), and follow a good lift through (5^4). |
| `ex-unit-group-modulo-two-hundred-forty` | `ex` | Use (240=16\cdot3\cdot5) and CRT to give the complete cyclic-factor decomposition and exponent. |
| `ex-carmichael-function-of-five-hundred-sixty-one` | `ex` | Compute (\lambda(561)=80) and verify the universal Fermat congruence for units without claiming that the unit group is cyclic. |
| `cex-unit-group-modulo-fifteen-is-not-cyclic` | `cex` | Exhibit the CRT decomposition (C_2\times C_4), showing that group order (8) does not force an element of order (8). |
| `cex-euler-totient-need-not-be-the-unit-group-exponent` | `cex` | Compare (\varphi(8)=4) with (\lambda(8)=2), and explain exactly why Euler's exponent is nonminimal. |
| `ex-moduli-below-twenty-with-primitive-roots` | `ex` | Enumerate the classified moduli below (20), then check the predicted count (\varphi(\varphi(n))) in each case. |

Do not duplicate the already-published
`ex-unit-group-modulo-one-hundred-decomposition` or
`ex-units-modulo-eight-are-not-cyclic`; link them from the B-page summary as
prior examples.

### MT-2. Quadratic residues, the Legendre symbol, and Gauss's lemma

- **A page id:** `quadratic-residues-and-the-legendre-symbol`
- **B page id:** `quadratic-residues-and-the-legendre-symbol-examples`
- **Requires:** MT-1; `congruences-and-the-chinese-remainder-theorem`;
  `cyclic-groups-and-direct-products`; and `polynomial-rings-and-roots` for
  the root bound over a field.  No result from the later finite-field or
  (p)-adic blocks is used.
- **Primary backing:** Hackman, Ch. D, §D.I “The Legendre Symbol,”
  pp. 107--117, and §D.IV “Gauß' Lemma,” pp. 123--127, especially D.I.1--D.I.9
  and D.IV.1--D.IV.6; Stein, Ch. 4, §§4.1--4.3, PDF pp. 76--83, especially
  Defs. 4.1.1--4.1.2, Lemma 4.1.4, Prop. 4.2.1, Cor. 4.2.3, and Lemma 4.3.1.
  Independent full-lecture check: Gorodnik, Lecture 9, §1, pp. 1--3,
  Defs. 1.1, 1.4 and Thms. 1.2, 1.5, 1.6.

#### A-page items, in dependency order

| id | kind | statement | provenance and locator |
|---|---|---|---|
| `def-quadratic-residue-modulo-n` | `def` | For (n\ge2) and (\gcd(a,n)=1), (a) is a quadratic residue modulo (n) if (x^2\equiv a\pmod n) for some integer (x), and a quadratic nonresidue otherwise. | L/NA; Hackman D.I opening definition; Stein Def. 4.1.1 for prime modulus; Gorodnik Def. 1.1(ii) for general modulus. |
| `prop-quadratic-residue-is-representative-independent` | `prop` | Whether a unit integer (a) is a quadratic residue modulo (n) depends only on its class in ((\mathbb Z/n\mathbb Z)^\times), and the quadratic residues are exactly the image of the squaring map on that group. | L/A; Gorodnik Def. 1.1 and Thm. 1.6(ii); translate both sides of the congruence through the published quotient equality criterion. |
| `thm-power-residue-criterion-modulo-prime` | `thm` | If (p) is prime, (p\nmid a), and (r\ge1), then (x^r\equiv a\pmod p) is soluble iff (a^{(p-1)/\gcd(r,p-1)}\equiv1\pmod p). | L/A; Gorodnik Thm. 1.2.  Write (a) and (x) as powers of a primitive root and solve the resulting linear congruence in the exponent using published Bézout. |
| `cor-number-of-nth-roots-modulo-prime` | `cor` | Under the preceding hypotheses, a soluble congruence (x^r\equiv a\pmod p) has exactly (\gcd(r,p-1)) incongruent solutions. | L/A; Hackman B.VI.4 and C.II; Gorodnik proof of Thm. 1.2.  The kernel of multiplication by (r) on exponents modulo (p-1) has the stated size. |
| `thm-quadratic-residues-subgroup-modulo-prime` | `thm` | For odd prime (p), the nonzero squares form the subgroup (((\mathbb Z/p\mathbb Z)^\times)^2=\langle g^2\rangle) of index (2), independently of the selected primitive root (g). | L/A; Stein Lemma 4.1.4 and its kernel discussion; Gorodnik Thm. 1.2 at (r=2).  The subgroup is defined intrinsically as the image of squaring; (\langle g^2\rangle) is a proof description, not the definition. |
| `thm-count-of-quadratic-residues-modulo-prime` | `thm` | Exactly ((p-1)/2) nonzero classes modulo an odd prime are quadratic residues and exactly ((p-1)/2) are nonresidues; each nonzero residue has two square roots. | L/A; Hackman D.I.1--D.I.2; Stein Lemma 4.1.4; Gorodnik note after Thm. 1.6. |
| `def-legendre-symbol` | `def` | For odd prime (p) and integer (a), define ((a/p)=0) if (p\mid a), (1) if (a) is a quadratic residue modulo (p), and (-1) if it is a nonresidue. | L/NA; Hackman D.I.3; Stein Def. 4.1.2; Gorodnik Def. 1.4. |
| `prop-legendre-symbol-well-defined` | `prop` | The Legendre symbol has values in (\{-1,0,1\}), depends only on (a\pmod p), and vanishes exactly when (p\mid a). | L/A; Hackman D.I.3 and D.I.8(a); Gorodnik Thm. 1.6(ii).  Representative independence cites the earlier residue-class proposition. |
| `prop-legendre-symbol-on-units-is-homomorphism` | `prop` | Restricted to ((\mathbb Z/p\mathbb Z)^\times), (a\mapsto(a/p)) is the surjective homomorphism onto (\{\pm1\}) with kernel the square subgroup; it is the unique nontrivial homomorphism from this cyclic group to (\{\pm1\}). | L/A; Stein Lemma 4.1.4 and Remark 4.1.6; Hackman D.I.8(b).  Uniqueness follows from the image of one primitive root, using MT-1. |
| `thm-eulers-criterion-for-legendre-symbol` | `thm` | For every integer (a) and odd prime (p), ((a/p)\equiv a^{(p-1)/2}\pmod p); for (p\nmid a), both sides are the same element of (\{\pm1\}). | L/A; Hackman D.I.4; Stein Prop. 4.2.1 and Cor. 4.2.3; Gorodnik Thm. 1.5.  Handle (p\mid a) explicitly. |
| `thm-legendre-symbol-multiplicativity` | `thm` | For all integers (a,b), ((ab/p)=(a/p)(b/p)); squares may therefore be removed from the numerator when they are coprime to (p). | L/A; Hackman D.I.8(b)--(c); Gorodnik Thm. 1.6(i),(iii); alternatively evaluate both sides by Euler's criterion and distinguish the zero case. |
| `cor-number-of-solutions-to-quadratic-congruence-modulo-prime` | `cor` | The congruence (x^2\equiv a\pmod p) has exactly (1+(a/p)) solution classes. | L/A; Gorodnik note after Thm. 1.6; Stein Cor. 4.2.3.  When (p\mid a), the sole class is (0); otherwise use the two-to-one squaring result. |
| `cor-quadratic-congruence-discriminant-criterion` | `cor` | If (p) is odd and (p\nmid A), then (Ax^2+Bx+C\equiv0\pmod p) has exactly (1+((B^2-4AC)/p)) solution classes. | L/A; Gorodnik discussion following Thm. 1.6.  Multiplication by (4A) gives the bijective completed-square equation ((2Ax+B)^2\equiv B^2-4AC). |
| `lem-gauss-half-system-permutation` | `lem` | For (p\nmid a), reducing (a,2a,\ldots,((p-1)/2)a) to signed representatives (\pm1,\ldots,\pm(p-1)/2) uses each absolute representative exactly once. | L/A; Hackman D.IV.1--D.IV.2; Stein proof of Lemma 4.3.1.  Prove injectivity for both equal and opposite signs before using finite cardinality. |
| `thm-gauss-lemma` | `thm` | If (N(a,p)) is the number of those least positive residues (aj\pmod p), (1\le j\le(p-1)/2), that exceed (p/2), then ((a/p)=(-1)^{N(a,p)}). | L/A; Hackman D.IV.4; Stein Lemma 4.3.1.  Multiply the signed congruences, cancel (((p-1)/2)!\) modulo (p), and invoke Euler's criterion. |
| `thm-first-supplement-to-quadratic-reciprocity` | `thm` | For odd prime (p), ((-1/p)=(-1)^{(p-1)/2}), equivalently (-1) is a square modulo (p) iff (p\equiv1\pmod4). | L/A; Hackman D.I.7; Stein Thm. 4.1.7; Gorodnik Thm. 1.6(iv).  This also follows immediately from Euler's criterion. |
| `thm-second-supplement-to-quadratic-reciprocity` | `thm` | For odd prime (p), ((2/p)=(-1)^{(p^2-1)/8}), equivalently (2) is a square modulo (p) iff (p\equiv\pm1\pmod8). | L/A; Hackman D.IV.6; Stein Thm. 4.1.7; Gorodnik Thm. 2.3.  Count exactly the doubled half-system representatives crossing (p/2). |

#### Proof strategy, well-definedness, and choice

The first definition deliberately concerns unit classes for a general modulus;
the zero value in the Legendre symbol is then a separate exhaustive case.  If
(a\equiv a'\pmod n), the congruences (x^2\equiv a) and
(x^2\equiv a') define the same subset of (\mathbb Z/n\mathbb Z), proving
representative independence before any symbol is introduced.  The notation
((a/p)) is never treated as a quotient.

Power residues are solved in the cyclic exponent group from MT-1.  This gives
the square subgroup, its cardinality, and the Legendre homomorphism without a
choice of “a nonsquare.”  Euler's criterion is then an equality between two
(\{\pm1\})-valued homomorphisms on the units, with the divisible case added
separately.  The proof of Gauss's lemma records the signed-representative
permutation explicitly; cancellation is legitimate because none of
(1,\ldots,(p-1)/2) is divisible by (p).

All constructions are finite and MT-2 is ZF.  A primitive root may be selected
inside the proof of a theorem asserting one exists; no family of such choices
over all primes is formed.  The source convention that “quadratic residue” is
restricted to (p\nmid a) is retained for the residue/nonresidue dichotomy,
while the Legendre symbol handles (p\mid a) by zero.

#### B page

| id | kind | task |
|---|---|---|
| `ex-quadratic-residues-and-nonresidues-modulo-eleven` | `ex` | Compute the square subgroup, the two roots of each residue, and the Legendre table modulo (11). |
| `ex-power-residues-modulo-seventeen` | `ex` | Apply the general power-residue criterion to fourth and eighth powers modulo (17). |
| `ex-euler-criterion-with-a-large-prime` | `ex` | Decide a Legendre symbol by fast exponentiation without factoring its numerator. |
| `ex-gauss-lemma-for-three-modulo-eleven` | `ex` | Display the signed half-system permutation and recover ((3/11)). |
| `ex-quadratic-congruence-from-its-discriminant` | `ex` | Count and find the roots of a nonmonic quadratic congruence by completing the square. |
| `cex-squaring-on-units-is-not-a-homomorphism-nonabelian-warning` | `cex` | Explain why the squaring-map argument used here relies on the abelian unit group and is not a general group fact. |
| `cex-quadratic-residue-definition-excludes-nonunits` | `cex` | Contrast the soluble congruence (x^2\equiv0\pmod p) with the unit residue/nonresidue dichotomy and the zero Legendre value. |

### MT-3. Quadratic reciprocity, the Jacobi symbol, and square roots modulo (n)

- **A page id:** `quadratic-reciprocity-and-the-jacobi-symbol`
- **B page id:** `quadratic-reciprocity-and-the-jacobi-symbol-examples`
- **Requires:** MT-1--MT-2 and the three published elementary number-theory
  pages.  Rational inequalities and finite lattice-point sets are used in the
  reciprocity proof; the later real-analysis floor-function item is **not** a
  dependency.
- **Primary backing:** Hackman, §D.V “The Rectangle Proof,” pp. 127--130,
  especially D.V.1 and the complete lattice count, and §D.II “The Jacobi
  Symbol,” pp. 118--122, D.II.1--D.II.5; Stein §§4.1 and 4.3, PDF pp. 76--87,
  Thm. 4.1.7 and Lemmas 4.3.1--4.3.4 with the first complete proof.
  Independent full-lecture treatments: Gorodnik, Lecture 9, §2, pp. 3--7,
  Thm. 2.1, Eisenstein Lemma 2.2, Thm. 2.3; and Lecture 10, §§1--2, Def. 1.1
  and the reciprocity/evaluation results enumerated in the harvest.  For
  lifting square roots, Gorodnik Lecture 7, §1, pp. 1--3, Thm. 1.1 and
  Ex. 1.3, is the independent source.

#### A-page items, in dependency order

| id | kind | statement | provenance and locator |
|---|---|---|---|
| `lem-gauss-lower-half-lattice-count` | `lem` | For distinct odd primes (p,q), if (S_{p,q}) counts integer pairs ((x,y)) with (1\le x\le(p-1)/2) and (0<py<qx), then ((q/p)=(-1)^{S_{p,q}}). | L/A; Hackman D.V.1 and the count below it; Stein Lemmas 4.3.1--4.3.3.  This is the floor-sum form of Gauss's lemma stated as a finite set, so it has no forward dependency on the later floor function. |
| `lem-reciprocity-rectangle-lattice-count` | `lem` | The two disjoint finite sets counted by (S_{p,q}) and (S_{q,p}) partition the lattice points in (0<x<p/2, 0<y<q/2); hence (S_{p,q}+S_{q,p}=(p-1)(q-1)/4). | L/A; Hackman rectangle proof, pp. 128--129; Gorodnik proof of Thm. 2.1.  Coprimality proves that no lattice point lies on (py=qx). |
| `thm-quadratic-reciprocity` | `thm` | For distinct odd primes (p,q), ((p/q)(q/p)=(-1)^{(p-1)(q-1)/4}); equivalently the symbols agree unless both primes are (3\pmod4), when they are opposite. | L/A; Hackman D.V; Stein Thm. 4.1.7 and §4.3; Gorodnik Thm. 2.1.  Multiply the two sign formulas and substitute the exact lattice count. |
| `def-jacobi-symbol` | `def` | For odd (n\ge1) with prime factorisation (n=\prod p_i^{e_i}), define ((a/n)=\prod (a/p_i)^{e_i}), with the empty product ((a/1)=1); thus the value is (0) exactly when (\gcd(a,n)>1). | L/NA; Gorodnik Lecture 10, Def. 1.1; Hackman D.II.1, with the zero convention amended as explained below. |
| `prop-jacobi-symbol-well-defined` | `prop` | The Jacobi symbol is independent of the ordering and presentation of the prime factorisation, takes values in (\{-1,0,1\}), and depends only on (a\pmod n). | L/A; Gorodnik Lecture 10, Def. 1.1 and Thm. 1.2(v); uniqueness of published canonical prime factorisation proves independence. |
| `thm-jacobi-symbol-multiplicativity` | `thm` | For odd positive (m,n), the Jacobi symbol is multiplicative in both slots: ((ab/n)=(a/n)(b/n)) and ((a/mn)=(a/m)(a/n)), without a coprimality assumption between (m) and (n). | L/A; Hackman D.II.3; Gorodnik Lecture 10, Thm. 1.2(i)--(ii).  The zero cases follow from the same prime-factor product. |
| `thm-jacobi-symbol-supplements-and-reciprocity` | `thm` | For odd positive (n), ((-1/n)=(-1)^{(n-1)/2}) and ((2/n)=(-1)^{(n^2-1)/8}); for coprime odd positive (m,n), ((m/n)(n/m)=(-1)^{(m-1)(n-1)/4}). | L/A; Hackman D.II.4; Gorodnik Lecture 10, reciprocity theorem.  Multiply the prime Legendre laws with multiplicity and reduce the parity exponents explicitly. |
| `thm-binary-algorithm-for-jacobi-symbol` | `thm` | Repeatedly reducing the numerator modulo the odd denominator, removing powers of (2), and swapping numerator and denominator with the reciprocity sign computes ((a/n)) without factoring (n); it terminates at denominator (1) or detects a nontrivial gcd and returns (0). | L/A; Hackman D.II.5; Gorodnik Lecture 10, §2.  Termination is by strict decrease of the nonnegative denominator after reduction and swap. |
| `prop-jacobi-one-necessary-not-sufficient-for-residue` | `prop` | If (\gcd(a,n)=1) and (a) is a square modulo odd (n), then ((a/n)=1); the converse fails, for example ((2/15)=1) although (2) is not a square modulo (15). | L/A; Hackman D.II.2; Gorodnik Lecture 10 following Def. 1.1.  Necessity reduces the square congruence at every prime divisor; failure is checked modulo (3) or (5). |
| `lem-nonsingular-square-root-lift-modulo-odd-prime-powers` | `lem` | If (p) is odd, (p\nmid a), and (x_k^2\equiv a\pmod {p^k}), there is a unique (t\pmod p) for which ((x_k+tp^k)^2\equiv a\pmod {p^{k+1}}). | L/A; Gorodnik Lecture 7, Thm. 1.1 at (f(X)=X^2-a); Hackman B.VII lifting discussion.  Divide the error by (p^k) and solve one linear congruence with invertible coefficient (2x_k). |
| `thm-unit-square-criterion-modulo-odd-prime-powers` | `thm` | For odd prime (p), (k\ge1), and (p\nmid a), (x^2\equiv a\pmod {p^k}) is soluble iff ((a/p)=1), and then it has exactly two solution classes. | L/A; Gorodnik Lecture 7, Thm. 1.1 and Ex. 1.3; Hackman B.VII.  Reduce necessity modulo (p), then lift each of the two roots uniquely and show every higher root reduces to one of them. |
| `thm-unit-square-criterion-modulo-two-powers` | `thm` | For odd (a), modulo (2) there is one square root; modulo (4) there are two iff (a\equiv1\pmod4); and modulo (2^k), (k\ge3), there are four iff (a\equiv1\pmod8), and none otherwise. | L/A; Hackman B.IV.1--B.IV.3 and C.IV.3; infer sufficiency and the kernel size from MT-1's (C_2\times C_{2^{k-2}}) structure, while direct expansion proves every odd square is (1\pmod8). |
| `thm-unit-square-criterion-modulo-n` | `thm` | Let (n=2^e\prod p_i^{a_i}) and (\gcd(a,n)=1).  Then (a) is a square modulo (n) iff it satisfies the preceding local criterion at every prime-power factor. | L/A; Hackman B.IV and D.II.2; apply `thm-unit-group-crt-decomposition` to the squaring map. |
| `cor-number-of-square-roots-of-a-unit-modulo-n` | `cor` | Under the same hypotheses, the number of square roots is the product of the local counts: each soluble odd prime-power factor contributes (2), while the (2)-part contributes (1,1,2,) or (4) for (e=0,1,2,) or (e\ge3), respectively. | L/A; Hackman B.IV.1--B.IV.3; the CRT bijection identifies the global root set with the product of local root sets. |

#### Complete reciprocity proof and other obligations

This page supplies a complete proof of quadratic reciprocity.  MT-2 first
proves Gauss's lemma.  For fixed (p,q), count the lower-half multiples of
(q) as the lattice points satisfying (1\le x\le(p-1)/2) and
(0<py<qx); parity gives ((q/p)).  Interchanging (p,q) counts the points
above the diagonal in the rectangle.  Since (p,q) are distinct primes,
(py=qx) has no interior lattice point.  The two counts therefore add to
((p-1)(q-1)/4), and multiplying their signs gives the theorem.  Every
inequality is over integers or rationals, so neither floor notation nor a
later real-analysis result is concealed in the proof.

The Jacobi definition has a genuine convention fork.  Hackman D.II.1 defines
it only for (\gcd(a,n)=1) and remarks that assigning zero otherwise is “not
unnatural”; Gorodnik Def. 1.1 and most analytic-number-theory treatments use
zero.  The library adopts the zero extension because it agrees with the
Legendre symbol, makes numerator multiplicativity unconditional, and later
makes a Dirichlet character a function on all integers.  The empty product at
(n=1) is stated, and uniqueness of prime factorisation is the explicit
well-definedness proof.

The lifting lemma is a specialised, directly proved congruence lemma, not a
second definition or general theorem called Hensel's lemma.  The later local
block cites the commutative-algebra owner's general Henselian result.  CRT
counts classes rather than chosen integer representatives, so multiplying
local root counts is well defined.  MT-3 is ZF; all products and selections
are finite, and the Jacobi algorithm is deterministic after taking least
nonnegative remainders.

#### B page

| id | kind | task |
|---|---|---|
| `ex-complete-reciprocity-table-for-small-odd-primes` | `ex` | Check the reciprocity sign in every pair among (3,5,7,11) against direct square tables. |
| `ex-jacobi-symbol-by-the-binary-algorithm` | `ex` | Evaluate a large Jacobi symbol step by step without factoring its denominator. |
| `cex-jacobi-symbol-one-does-not-imply-a-square` | `cex` | Work out ((2/15)=1) and show the obstruction already modulo (3). |
| `ex-square-roots-modulo-an-odd-prime-power` | `ex` | Lift both roots of (x^2\equiv2\pmod7) through a specified power of (7). |
| `ex-four-square-roots-modulo-a-power-of-two` | `ex` | Find the four roots of one unit congruent to (1\pmod8) modulo (2^k). |
| `ex-square-roots-modulo-a-composite-by-crt` | `ex` | Combine odd and (2)-power local roots and verify the product count. |
| `cex-square-modulo-each-prime-does-not-ignore-the-two-part` | `cex` | Give an odd unit that is square at every odd prime divisor of (n) but fails the (2^e) criterion. |
| `ex-primes-dividing-x-squared-plus-three` | `ex` | Use reciprocity to constrain odd prime divisors of (x^2+3), separating the exceptional prime (3). |

### MT-4. Fermat's two-square theorem and the representation of integers

- **A page id:** `sums-of-two-squares`
- **B page id:** `sums-of-two-squares-examples`
- **Requires:** MT-2--MT-3; the published factorisation, congruence, finite-set
  counting, pigeonhole, and real square-root results.  In particular cite
  `thm-fundamental-theorem-of-arithmetic`, `thm-the-strong-pigeonhole-principle`,
  and `thm-of-square-roots`.
- **Primary backing:** Hackman, Ch. E, §E.I “Primes as Sums of Squares,”
  pp. 143--149, Lemma E.I.1 and Thms. E.I.2--E.I.3, and §E.II “Composite
  Numbers,” pp. 150--154, Lemma E.II.1, Thms. E.II.2 and E.II.4,
  Lemmas E.II.5--E.II.6, Cor. E.II.8.  Stein §5.7 “Sums of Two Squares,”
  PDF pp. 123--127, Thm. 5.7.1, Lemmas 5.7.3--5.7.5 and identity (5.7.1), is
  an independent textbook proof; unlike Hackman it obtains the small multiple
  from continued fractions, so only its statement and the elementary parts of
  its necessity proof are used here.  Independent check: Keith Conrad,
  *Sums of Two Squares and Lattices*, §§2--4, the lattice-pigeonhole proof and
  the product criterion (exact heading disposition below).

#### A-page items, in dependency order

| id | kind | statement | provenance and locator |
|---|---|---|---|
| `def-sum-of-two-squares-representation` | `def` | A representation of a nonnegative integer (n) as a sum of two squares is an ordered pair ((x,y)\in\mathbb Z^2) with (n=x^2+y^2); it is primitive when (\gcd(x,y)=1). | L/NA; Hackman E.I opening and E.II.4; Stein Thm. 5.7.1.  “Ordered” makes later representation counts unambiguous; existence ignores order and signs. |
| `lem-brahmagupta-fibonacci-two-square-identity` | `lem` | ((a^2+b^2)(c^2+d^2)=(ac-bd)^2+(ad+bc)^2=(ac+bd)^2+(ad-bc)^2) for all integers (a,b,c,d). | L/L; Hackman E.II.1; Stein (5.7.1).  Verify by expansion. |
| `cor-sums-of-two-squares-closed-under-products` | `cor` | The product of two nonnegative integers representable as sums of two squares is again so representable. | L/A; Hackman E.II.1; apply either displayed identity, including the zero boundary case. |
| `lem-three-mod-four-prime-dividing-two-square-sum` | `lem` | If (p\equiv3\pmod4) is prime and (p\mid x^2+y^2), then (p\mid x) and (p\mid y), hence (p^2\mid x^2+y^2). | L/A; Hackman proof of E.II.2; Stein Lemma 5.7.4.  If one coordinate were a unit modulo (p), division would make (-1) a square, contradicting MT-2's first supplement. |
| `lem-thue-small-representatives` | `lem` | If (p) is prime and (p\nmid a), there are nonzero integers (r,s) with (|r|,|s|<\sqrt p) and (ra\equiv s\pmod p). | L/A; Hackman Lemma E.I.1, restricted to the exact case used here.  Apply strong pigeonhole to the more than (p) pairs in the largest integral square lying below (\sqrt p), mapped to (ia-j\pmod p), then subtract the colliding pairs; write the finite bound without depending on the later general floor-function item. |
| `thm-fermat-two-square-theorem-for-primes` | `thm` | A prime (p) is a sum of two integer squares iff (p=2) or (p\equiv1\pmod4). | L/A; Hackman Thm. E.I.2; Stein's sufficiency proof of Thm. 5.7.1.  For (p\equiv1\pmod4), choose (a^2\equiv-1\pmod p) by MT-2, apply Thue's lemma, and use (0<r^2+s^2<2p) to turn divisibility by (p) into equality. |
| `thm-uniqueness-of-two-square-representation-of-a-prime` | `thm` | If (p\equiv1\pmod4) is prime, there are unique positive integers (x) odd and (y) even with (p=x^2+y^2); all ordered signed representations arise from this one by signs and interchange. | L/A; Hackman Thm. E.I.3.  Its factorisation argument shows that two essentially different representations force a nontrivial factorisation of the odd integer. |
| `lem-two-square-representations-of-prime-powers` | `lem` | Every power of (2) and every power of a prime (p\equiv1\pmod4) is a sum of two squares; a power of (q\equiv3\pmod4) is representable exactly when its exponent is even. | L/A; Hackman E.II.1--E.II.2; iterate the product identity for the first two cases, use (q^{2j}=(q^j)^2+0^2), and use the preceding divisibility lemma for necessity. |
| `thm-sum-of-two-squares-characterisation` | `thm` | A positive integer (n) is a sum of two squares iff every prime (q\equiv3\pmod4) occurs to an even exponent in its canonical prime factorisation. | L/A; Hackman Thm. E.II.2; Stein Thm. 5.7.1.  Sufficiency multiplies the prime-power representations; necessity repeatedly divides both coordinates by each such (q). |
| `thm-primitive-sum-of-two-squares-characterisation` | `thm` | A positive integer has a primitive two-square representation iff (v_2(n)\le1) and no prime (q\equiv3\pmod4) divides (n). | L/A; Hackman Thm. E.II.4 and Lemmas E.II.5--E.II.6.  Necessity is local; sufficiency combines primitive prime-power representations while preserving coprimality. |
| `cor-squarefree-sum-of-two-squares-characterisation` | `cor` | A squarefree positive integer is a sum of two squares iff none of its odd prime factors is (3\pmod4); every such representation is primitive. | L/A; immediate specialisation of Hackman E.II.2 and E.II.4, with squarefree (v_2(n)\le1). |

#### Proof strategy, well-definedness, and boundary

Thue's lemma is written without a hidden real floor dependency.  Let (h) be
the largest natural number with (h^2<p); existence and maximality follow by
finite search below (p).  Since a prime is not a nontrivial square,
((h+1)^2>p), so the ((h+1)^2) pairs in the
square (0\le i,j\le h) outnumber the residue classes modulo (p).  Two
pairs collide.  Coprimality forces both coordinate differences to be nonzero,
and their absolute values are at most (h<\sqrt p).  This is precisely
Hackman's pigeonhole proof with its floor notation eliminated at the low
anchor.

For Fermat's theorem, the first supplement supplies a square root of (-1)
modulo (p); the small representatives produce a positive multiple of (p)
strictly below (2p), hence exactly (p).  The composite criterion then uses
only canonical integer factorisation and the displayed identity.  Necessity
must iterate the (q\mid x,y) conclusion to show that the **entire** exponent
of every (q\equiv3\pmod4) is even, rather than stopping after (q^2\mid n).

This low page does not rebuild the Gaussian integers, a Euclidean algorithm in
(\mathbb Z[i]), or unique factorisation there.  Hackman Ch. K gives that
beautiful alternate treatment, but general number rings and their prime
factorisation belong to the post-commutative-algebra block.  The arithmetic
formula for the number (r_2(n)) of ordered signed representations is retained
for the later arithmetic-function pair, where its divisor-sum form belongs.
MT-4 is ZF: the only selection is from explicitly finite sets, and least
indices can be used throughout.

#### B page

| id | kind | task |
|---|---|---|
| `ex-thue-lemma-produces-a-two-square-representation` | `ex` | Starting from a square root of (-1) modulo a prime, carry out the finite collision argument and recover the prime as two squares. |
| `ex-two-square-representations-from-prime-factorisation` | `ex` | Construct representations of a composite by allocating its prime-power factors and applying the identity. |
| `cex-an-odd-three-mod-four-valuation-obstructs-two-squares` | `cex` | Locate the obstructing prime and show directly why it divides both putative coordinates. |
| `ex-two-essentially-different-representations-force-compositeness` | `ex` | Use Hackman's factorisation from two representations to exhibit proper factors of the represented odd integer. |
| `ex-primitive-two-square-representation-criterion` | `ex` | Compare integers satisfying the existence criterion with those satisfying the stricter primitive criterion. |
| `cex-four-dividing-n-forces-a-nonprimitive-two-square-representation` | `cex` | Reduce squares modulo (4) to show both coordinates must be even. |
| `ex-squarefree-sums-of-two-squares` | `ex` | Classify and construct the squarefree examples in a finite interval. |

### MT-5. Lagrange's four-square theorem

- **A page id:** `lagrange-four-square-theorem`
- **B page id:** `lagrange-four-square-theorem-examples`
- **Requires:** MT-2 and the published prime-factorisation, congruence, and
  finite-counting pages.  This is a second elementary sums-of-squares page: it
  does not use quaternions, lattices, Minkowski's theorem, or either higher
  number-theory block.
- **Primary backing:** Keith Conrad, *Proofs by Descent*, §6 “The four-square
  theorem,” pp. 13--16, Example 6.1, Lemmas 6.2 and 6.4, Remark 6.5,
  Theorem 6.6 and Remark 6.7.  An independent complete lecture-set treatment
  is Joseph Lee and Abhinav Kumar, MIT 18.781 *Theory of Numbers*, Lecture 22
  notes “Four Squares Theorem,” PDF pp. 2--5, Theorem 80 and Lemma 81; the
  course's harvestable lecture index lists the full sequence from divisibility
  through rational points on conics.  Conrad's centered-remainder descent is
  the proof source because it avoids introducing integral quaternions.  Evan
  Dummit, *Number Theory, Part 9: The Geometry of Numbers*, §9.1.2, pp. 4--5,
  Lemmas 1--2 and “Lagrange's Four-Square Theorem,” independently checks the
  statements by a later Minkowski proof but is not load-bearing here.

#### A-page items, in dependency order

| id | kind | statement | provenance and locator |
|---|---|---|---|
| `def-sum-of-four-squares-representation` | `def` | A representation of a nonnegative integer \(n\) as a sum of four squares is an ordered quadruple \((a,b,c,d)\in\mathbb Z^4\) with \(n=a^2+b^2+c^2+d^2\). | L/NA; Conrad §6 opening and Example 6.1; MIT Theorem 80.  Order and signs matter only for later representation counts, not for existence. |
| `lem-euler-four-square-product-identity` | `lem` | The product of \(a_1^2+a_2^2+a_3^2+a_4^2\) and \(b_1^2+b_2^2+b_3^2+b_4^2\) is a sum of the squares of four displayed integral bilinear forms. | L/L; Conrad Lemma 6.2, with the first sign pattern in that lemma; MIT Theorem 80.  Display the four forms and verify the polynomial identity by expansion. |
| `cor-four-squares-closed-under-products` | `cor` | Products of nonnegative integers represented by four squares are represented by four squares. | L/A; Conrad Lemma 6.2; MIT Theorem 80.  The zero case is included explicitly. |
| `lem-four-square-congruence-for-primes` | `lem` | For every prime \(p\), there are integers \(x,y\) such that \(x^2+y^2+1\equiv0\pmod p\). | L/A; Conrad Lemma 6.4; MIT Lemma 81.  For odd \(p\), the set of square classes including zero and its translate by \(-1\) both have \((p+1)/2\) elements, so they intersect; \(p=2\) is direct. |
| `lem-small-four-square-multiple-of-a-prime` | `lem` | For every prime \(p\), some integer \(m\) with \(1\le m<p\) satisfies \(pm=x^2+y^2+1^2+0^2\). | L/A; Conrad Theorem 6.6, Step 1; MIT Lemma 81.  Choose centered representatives in the preceding congruence; their squares give a positive multiple strictly below \(p^2\). |
| `lem-four-square-descent` | `lem` | If \(p\) is prime, \(1<m<p\), and \(pm\) is a sum of four squares, then \(pn\) is a sum of four squares for some \(1\le n<m\). | L/A; Conrad Theorem 6.6, Step 2, pp. 14--15; MIT Theorem 80, pp. 3--5.  Reduce all four coordinates to least absolute residues modulo \(m\), rule out the equality case in the resulting norm bound, multiply with the precise Euler identity, and divide the four resulting coordinates by \(m\). |
| `thm-every-prime-is-a-sum-of-four-squares` | `thm` | Every prime is a sum of four integer squares. | L/A; Conrad Theorem 6.6, Steps 1--3; MIT Theorem 80.  Start from the small multiple and iterate the strict descent in the positive multiplier until it reaches \(1\). |
| `thm-lagrange-four-square-theorem` | `thm` | Every nonnegative integer is a sum of four integer squares. | L/A; Conrad Theorem 6.6; MIT Theorem 80.  Treat \(0\) directly and combine prime representations using canonical prime factorisation and Euler's identity. |
| `prop-three-square-congruence-obstruction` | `prop` | If \(n=4^a(8b+7)\) with \(a,b\ge0\), then \(n\) is not a sum of three integer squares. | L/L; Dummit §9.1.3, pp. 5--6.  Squares modulo \(8\) rule out \(8b+7\); if four divides a sum of three squares, each square is divisible by four, giving descent in \(a\). |
| `cor-integers-requiring-four-squares` | `cor` | Every integer \(4^a(8b+7)\) requires four nonzero squares and admits such a representation. | L/A; combine the preceding obstruction with Lagrange's theorem.  If one coordinate in a four-square representation were zero, there would be a three-square representation. |

#### Complete descent proof, well-definedness, and boundary

The hard point is isolated in `lem-four-square-descent`.  From
\(pm=a^2+b^2+c^2+d^2\), choose for each coordinate the least absolute residue
modulo \(m\).  Their squared sum is \(mn\) with \(1\le n\le m\).  It cannot
be zero because otherwise \(m^2\mid pm\), contrary to \(1<m<p\).  If
\(n=m\), equality in all four bounds forces every residue to have absolute
value \(m/2\); then the original norm is \(0\pmod {m^2}\), again forcing
\(m\mid p\).  Thus \(n<m\).  Use Conrad's exact sign pattern in Euler's
identity: after replacing the second quadruple by its residue quadruple, all
four bilinear coordinates are divisible by \(m\).  Dividing their squared
sum \(pm^2n\) by \(m^2\) produces the required representation of \(pn\).
This supplies the calculation that a vague appeal to “descent by the
four-square identity” would omit.

Least absolute residues are not unique when \(m\) is even, but the lemma needs
only one finite choice and its proof works for either sign of \(m/2\).  A
deterministic convention—take \(m/2\) rather than \(-m/2\)—removes even that
choice.  The sum-of-squares definition is about ordered integer tuples, so no
quotient by signs or permutations requires a well-definedness proof.  MT-5 is
ZF; its descent is finite because a positive integer decreases strictly.

The converse to the three-square obstruction is Legendre's three-square
theorem.  It is not silently asserted here: the complete proofs in the
harvested sources require a substantial quadratic-form/genus or
geometry-of-numbers argument together with primes in arithmetic progressions,
which cannot be cited at this low anchor.  It is recorded in the final scope
and seam ledger rather than introduced as an unproved remark.  Jacobi's
formula for the number of four-square representations is likewise assigned
to the later arithmetic-function/Dirichlet-series interface, where its
divisor-sum and theta-series proof can be stated honestly.

#### B page

| id | kind | task |
|---|---|---|
| `ex-four-square-product-identity-by-expansion` | `ex` | Multiply two concrete representations using all four bilinear coordinates and check the norm identity. |
| `ex-four-square-congruence-for-an-odd-prime` | `ex` | Exhibit the two intersecting square-value sets modulo a prime and obtain \(x^2+y^2+1\equiv0\). |
| `ex-four-square-descent-for-thirteen` | `ex` | Begin with a nonminimal represented multiple of \(13\), carry out centered reduction, and descend to \(13\). |
| `ex-four-square-representations-of-sixty-five` | `ex` | Compare several ordered representations and show why existence does not imply uniqueness. |
| `ex-four-square-representation-from-prime-factorisation` | `ex` | Build a representation of a composite by multiplying the representations of its prime factors. |
| `cex-three-squares-fail-for-seven-modulo-eight` | `cex` | Verify the residue obstruction modulo \(8\) and propagate it through a power of \(4\). |
| `ex-an-integer-that-genuinely-needs-four-squares` | `ex` | Find an explicit four-square representation of an integer \(4^a(8b+7)\) and prove that no coordinate can vanish. |

### MT-6. Positive-definite binary quadratic forms and reduction

- **A page id:** `positive-definite-binary-quadratic-forms-and-reduction`
- **B page id:** `positive-definite-binary-quadratic-forms-and-reduction-examples`
- **Requires:** MT-3--MT-4, the authored integer/congruence pages, and the
  authored matrix and group-action material through `splitting-fields`.
  Only the concrete action of \(\mathrm{SL}_2(\mathbb Z)\) is developed here;
  the group itself and matrix inversion are cited.
- **Primary backing:** William Stein, *Elementary Number Theory and Elliptic
  Curves* (complete author-hosted 2003 text), Ch. 9, §§9.2--9.4,
  pp. 111--120: §9.2.1 “Introduction,” §9.2.2 “Equivalence,” Def. 9.2.2,
  Props. 9.2.3--9.2.4, Ex. 9.2.5; §9.2.3 “Discriminants,” Def. 9.2.6,
  Ex. 9.2.7, Props. 9.2.8--9.2.9, Def. 9.2.10; §9.2.4 “Definite and
  Indefinite Forms,” Def. 9.2.11; §9.3.1 “Reduced Forms,” Def. 9.3.1 and
  Thm. 9.3.2; §9.3.2 “Finding an Equivalent Reduced Form,” Exs. 9.3.3--9.3.4;
  and §9.4 “Class Numbers,” Prop. 9.4.1 and Defs. 9.4.2--9.4.3.  Independent
  treatment: Andrew Granville, *Primes*, Ch. 4 “Binary Quadratic Forms,”
  §§4.1--4.2, pp. 1--5, especially the equivalence, discriminant, and Gauss
  reduction algorithm (4.1.1) and Exercises 4.1d--4.1h.  Granville §4.6,
  pp. 11--12, is read only to mark the different indefinite convention and
  its cycles of reduced forms.

#### A-page items, in dependency order

| id | kind | statement | provenance and locator |
|---|---|---|---|
| `def-binary-quadratic-form-over-integers` | `def` | An integral binary quadratic form is a homogeneous polynomial \(f(x,y)=ax^2+bxy+cy^2\) with \(a,b,c\in\mathbb Z\), denoted \((a,b,c)\). | L/NA; Stein §9.2.1; Granville §4.1.  The middle coefficient is \(b\), not Gauss's alternate \(2b\) convention. |
| `def-integer-represented-by-binary-quadratic-form` | `def` | The form \(f\) represents \(n\in\mathbb Z\) when \(n=f(r,s)\) for some \((r,s)\in\mathbb Z^2\), and represents it primitively when such a pair has \(\gcd(r,s)=1\). | L/NA; Stein opening of §9.3; Granville §4.1.  This notion of a primitive **representation** is kept distinct from a primitive form. |
| `def-primitive-binary-quadratic-form` | `def` | The form \((a,b,c)\) is primitive when \(\gcd(a,b,c)=1\). | L/NA; Stein Def. 9.4.2; Granville §4.1. |
| `def-discriminant-of-binary-quadratic-form` | `def` | The discriminant of \((a,b,c)\) is \(\Delta=b^2-4ac\). | L/NA; Stein Def. 9.2.6; Granville §4.1. |
| `prop-binary-quadratic-form-discriminants-modulo-four` | `prop` | An integer occurs as the discriminant of an integral binary quadratic form iff it is congruent to \(0\) or \(1\pmod4\). | L/L; Stein Prop. 9.2.9.  Necessity is the square class of \(b^2\); sufficiency uses the explicit forms \((1,0,-\Delta/4)\) and \((1,1,(1-\Delta)/4)\). |
| `def-principal-binary-quadratic-form` | `def` | For \(\Delta\equiv0,1\pmod4\), the corresponding explicit form in the preceding proof is the principal form of discriminant \(\Delta\). | L/NA; Stein Def. 9.2.10.  This is terminology only; a class-group identity is not claimed before composition exists. |
| `def-proper-equivalence-of-binary-quadratic-forms` | `def` | Forms \(f,g\) are properly equivalent when \(g(x,y)=f(px+qy,rx+sy)\) for some matrix \(\left(\begin{smallmatrix}p&q\\r&s\end{smallmatrix}\right)\in\mathrm{SL}_2(\mathbb Z)\). | L/NA; Stein Def. 9.2.2 and following paragraph; Granville §4.1.  Full equivalence by \(\mathrm{GL}_2(\mathbb Z)\) is named separately only on the B page. |
| `lem-sl2-action-on-binary-quadratic-forms` | `lem` | Integral substitution defines a right action of \(\mathrm{SL}_2(\mathbb Z)\) on integral binary quadratic forms. | L/L; Stein Prop. 9.2.3; Granville Ex. 4.1d.  Compute composition of substitutions and cite the authored group law. |
| `thm-proper-equivalence-preserves-representations` | `thm` | Properly equivalent forms represent exactly the same integers, and their primitive representations correspond bijectively. | L/A; Stein Prop. 9.2.4; Granville §4.1.  The inverse unimodular substitution is integral and preserves \(\gcd(r,s)=1\), so both directions and the primitive clause are proved. |
| `prop-proper-equivalence-preserves-discriminant` | `prop` | Proper equivalence preserves discriminant and primitivity of the form. | L/A; Stein Prop. 9.2.8 and the coefficient transformation; Granville Ex. 4.1d.  In fact the discriminant is multiplied by the square of the determinant; unimodularity also preserves the coefficient ideal in both directions. |
| `def-positive-definite-binary-quadratic-form` | `def` | A form is positive definite when \(f(x,y)>0\) for every nonzero \((x,y)\in\mathbb R^2\). | L/NA; Stein §9.2.4; Granville §4.1.  The intrinsic positivity definition comes before its coefficient criterion. |
| `prop-positive-definite-binary-form-criterion` | `prop` | The form \((a,b,c)\) is positive definite iff \(a>0\) and \(\Delta<0\). | L/L; Stein Def. 9.2.11 and the completed-square calculation there; Granville §4.1. |
| `def-reduced-positive-definite-binary-quadratic-form` | `def` | A positive-definite form \((a,b,c)\) is reduced when \(|b|\le a\le c\), with \(b\ge0\) whenever \(|b|=a\) or \(a=c\). | L/NA; Stein Def. 9.3.1.  The boundary rule is part of the definition and is indispensable for uniqueness. |
| `thm-reduction-of-positive-definite-binary-quadratic-forms` | `thm` | Every positive-definite integral binary quadratic form is properly equivalent to a reduced form, found by iterating the explicit swap and shear transformations of §9.3.2. | L/A; existence half of Stein Thm. 9.3.2 and the algorithm in §9.3.2; Granville reduction algorithm (4.1.1) and Ex. 4.1e.  Supply a decreasing positive-integer measure, including the boundary-normalisation step, to prove termination. |
| `thm-unique-reduced-positive-definite-binary-quadratic-form` | `thm` | Each proper-equivalence class of positive-definite forms contains exactly one reduced form. | L/A; uniqueness half of Stein Thm. 9.3.2; Granville §4.1.  Prove that the leading coefficient of a reduced form is minimal in its class, then use the half-open interval \(-a<b\le a\) and the boundary sign convention to force the shear parameter to be zero. |
| `lem-leading-coefficient-bound-for-a-reduced-form` | `lem` | If a reduced positive-definite form has discriminant \(\Delta\), then \(a\le\sqrt{|\Delta|/3}\), and \(c\le |\Delta|/3\) after the finite coefficient constraints are imposed. | L/A; Stein proof of Prop. 9.4.1.  From \(b^2\le a^2\le ac\), obtain \(|\Delta|=4ac-b^2\ge3a^2\); use \(c=(b^2-Delta)/(4a)\) for enumeration rather than claiming an unsourced symmetric bound. |
| `cor-finiteness-of-positive-definite-binary-form-classes` | `cor` | For each negative discriminant \(\Delta\), there are finitely many proper-equivalence classes of positive-definite integral forms of discriminant \(\Delta\). | L/A; Stein Prop. 9.4.1; Granville §4.1.  Enumerate the finitely many reduced triples under the coefficient bound. |
| `def-binary-quadratic-form-class-number` | `def` | For a negative discriminant \(\Delta\), the form class number \(h(\Delta)\) is the number of proper-equivalence classes of primitive positive-definite integral binary quadratic forms of discriminant \(\Delta\). | L/NA; Stein Def. 9.4.3.  The word “form” prevents collision with the later ideal class number. |
| `cor-binary-quadratic-form-equivalence-is-decidable` | `cor` | Proper equivalence of positive-definite integral binary quadratic forms is decidable by reducing both forms and comparing the unique reduced triples. | L/A; Stein §9.3.2 and Thm. 9.3.2; Granville Exs. 4.1e--4.1g. |

#### Proof strategy, well-definedness, and boundary

Substitution is made into a genuine group action before “equivalence” is used
as a quotient notion.  The determinant-one hypothesis gives an integral
inverse, so equality of represented sets is proved in both directions rather
than merely by inclusion.  The same inverse shows that the ideal generated by
the three coefficients is invariant; hence primitivity is a class property.
The discriminant calculation is performed once for a general integral matrix,
giving \(\Delta(f|M)=\det(M)^2\Delta(f)\), and then specialised to
\(\mathrm{SL}_2(\mathbb Z)\).

Reduction has two proof obligations that must not be conflated.  Existence
uses the swap \((a,b,c)\mapsto(c,-b,a)\) when \(c<a\) and a shear that replaces
\(b\) by its unique representative in \((-a,a]\); a lexicographically
decreasing pair of positive integers proves termination.  Uniqueness uses the
minimum value represented primitively by a reduced form and then analyses the
first column of a unimodular transformation.  The inequalities alone leave
duplicate boundary representatives; the rule \(b\ge0\) when
\(|b|=a\) or \(a=c\) removes exactly those duplicates.

This page does **not** define Gauss composition.  A correct composition proof
must show independence from concordant representatives and distinguish proper
from improper equivalence; instead the post-commutative-algebra block builds
the form--ideal correspondence for maximal quadratic orders and obtains the
group law from ideal multiplication.  Nor is the positive-definite uniqueness
statement extended to \(\Delta>0\): Granville §4.6 shows that an indefinite
class generally contains a cycle of reduced forms.  The indefinite
reduction/Pell/narrow-class seam is recorded below.  MT-6 is ZF; reduction and
class enumeration use deterministic integer algorithms and finite searches.

#### B page

| id | kind | task |
|---|---|---|
| `ex-reducing-a-large-binary-quadratic-form` | `ex` | Trace Stein's form \((458,214,25)\) through swaps and shears to \((1,0,1)\), recording the product matrix. |
| `ex-reduced-forms-of-discriminant-minus-four` | `ex` | Enumerate the unique primitive reduced form and recover the two-square form. |
| `ex-reduced-forms-of-discriminant-minus-twenty` | `ex` | Enumerate all reduced primitive forms and compute the form class number. |
| `ex-reduced-forms-of-discriminant-minus-twenty-three` | `ex` | Enumerate the three proper classes and distinguish conjugate middle coefficients. |
| `cex-same-discriminant-does-not-imply-proper-equivalence` | `cex` | Compare \((1,0,6)\) and \((2,0,3)\) of discriminant \(-24\) by the integer \(1\) they do or do not represent. |
| `cex-same-represented-integers-do-not-imply-proper-equivalence` | `cex` | Show that \((2,1,3)\) and \((2,-1,3)\) represent the same integers but are distinct reduced representatives. |
| `ex-proper-versus-improper-equivalence-of-forms` | `ex` | Use a determinant \(-1\) substitution to explain why forgetting orientation merges some proper classes. |
| `cex-indefinite-classes-have-cycles-of-reduced-forms` | `cex` | Exhibit a positive-discriminant reduction cycle, warning against importing the MT-6 uniqueness theorem. |

### MT-7. Regular continued fractions and Diophantine approximation

- **A page id:** `regular-continued-fractions-and-diophantine-approximation`
- **B page id:** `regular-continued-fractions-and-diophantine-approximation-examples`
- **Requires:** the authored natural/integer/rational/real foundations,
  Euclidean division and extended Euclid, induction, and finite matrix
  algebra.  The low anchor does not yet make the later general sequence and
  floor-function pages available.  Consequently the one integer-part step is
  proved inline from `thm-of-archimedean`, and convergence is proved directly
  from the supremum property in `def-complete-ordered-field`; neither later
  item is forward-referenced.
- **Primary backing:** Hackman, Ch. G, pp. 195--217: G.I “Motive,
  Definitions,” G.II “Basic Theorems,” G.III “Negative Irrationalities,”
  G.IV “Best Rational Approximation,” G.V “Where Are the ‘Continued
  Fractions’?,” and G.VI “Finite Continued Fractions,” especially G.I.1,
  G.II.1--G.II.8, G.IV.1--G.IV.4, and the Euclidean-algorithm comparison in
  G.VI.  Independent textbook treatment: Stein, Ch. 7, §§7.1--7.2 and §7.4,
  pp. 74--89, Def. 7.1.1, Props. 7.1.2--7.1.6, Def. 7.2.8,
  Thm. 7.2.5, Thm. 7.2.9, Cor. 7.2.10, Prop. 7.2.11, Defs. 7.4.1--7.4.2,
  and Thm. 7.4.4.  The complete MIT 18.781 lecture set, Lectures 18--20
  “Continued Fractions I,” “Continued Fractions II: Inequalities,” and
  “Periodic Continued Fractions, Quadratic Irrationalities,” is the third
  proof check.

#### A-page items, in dependency order

| id | kind | statement | provenance and locator |
|---|---|---|---|
| `def-regular-continued-fraction` | `def` | A finite regular continued fraction is \([a_0;a_1,\ldots,a_n]\) with \(a_0\in\mathbb Z\) and \(a_i\in\mathbb Z_{>0}\) for \(i\ge1\); an infinite regular continued fraction is an integer-valued digit function on \(\mathbb N\) with the same sign restrictions. | L/NA; Hackman G.I.1 and G.V; Stein Def. 7.1.1 and §7.2.  The semicolon is typographical and has no algebraic meaning. |
| `def-convergents-of-regular-continued-fraction` | `def` | Set \(p_{-2}=0,p_{-1}=1,q_{-2}=1,q_{-1}=0\) and \(p_n=a_np_{n-1}+p_{n-2},q_n=a_nq_{n-1}+q_{n-2}\); the rational \(p_n/q_n\) is the \(n\)-th convergent. | L/NA; Hackman G.I.1; Stein §7.1.  The initial indices are formal labels, not an extension of the digit function to negative integers. |
| `lem-continued-fraction-convergent-recurrence` | `lem` | For every finite prefix, \([a_0;\ldots,a_n]=p_n/q_n\), and appending a tail \(t>0\) replaces the last digit by \(a_n+1/t\) in the same linear-fractional formula. | L/L; Hackman G.I.1 and G.V; Stein Prop. 7.1.3 and Lemma 7.2.4.  Prove by induction or multiplication of the displayed \(2\times2\) matrices. |
| `lem-continued-fraction-determinant-identity` | `lem` | For \(n\ge0\), \(p_nq_{n-1}-p_{n-1}q_n=(-1)^{n-1}\); hence consecutive convergents differ by \(1/(q_nq_{n-1})\). | L/L; Hackman G.II.1; Stein Prop. 7.1.4. |
| `cor-continued-fraction-convergents-are-reduced` | `cor` | Every convergent \(p_n/q_n\) is in lowest terms, and the column pairs \((q_n,p_n),(q_{n+1},p_{n+1})\) form an integral basis of \(\mathbb Z^2\). | L/A; Hackman G.II.2--G.II.3; Stein Prop. 7.1.4.  Bézout follows from the determinant \(\pm1\). |
| `def-continued-fraction-complete-quotients` | `def` | For a real \(\alpha\), set \(\alpha_0=\alpha\), let \(a_n\) be the unique integer with \(a_n\le\alpha_n<a_n+1\), and, when \(\alpha_n\ne a_n\), set \(\alpha_{n+1}=1/(\alpha_n-a_n)\); the \(\alpha_n\) are complete quotients. | L/NA; Hackman G.I.1; Stein §7.2.1.  Existence and uniqueness of the integer are proved inline as described below, rather than citing a later page. |
| `lem-continued-fraction-complete-quotient-formula` | `lem` | Whenever \(\alpha_{n+1}\) exists, \(\alpha=(\alpha_{n+1}p_n+p_{n-1})/(\alpha_{n+1}q_n+q_{n-1})\). | L/L; Hackman G.II.4; Stein Lemma 7.2.4 and proof of Thm. 7.2.9. |
| `thm-convergence-of-infinite-regular-continued-fractions` | `thm` | Every infinite regular continued fraction has a unique real value: its even convergents increase, its odd convergents decrease, each even one is below each odd one, and their common gap tends to zero. | L/A; Hackman G.II.6--G.II.8; Stein Thm. 7.2.5.  Take the supremum of the even convergents directly and use the determinant gap and \(q_n\ge n\) to identify both limiting cuts. |
| `thm-continued-fraction-algorithm-for-real-numbers` | `thm` | The complete-quotient algorithm applied to a real \(\alpha\) either terminates with a finite fraction equal to \(\alpha\), or yields an infinite regular continued fraction whose convergents have value \(\alpha\). | L/A; Hackman G.II.4--G.II.7 and G.V; Stein Thm. 7.2.9.  The exact tail formula gives \(|\alpha-p_n/q_n|<1/(q_nq_{n+1})\). |
| `thm-rational-continued-fraction-termination` | `thm` | The algorithm terminates iff \(\alpha\in\mathbb Q\), and for a rational number its digits are the successive quotients of the Euclidean algorithm. | L/A; Hackman G.VI; Stein Prop. 7.2.11 and §7.1.  Rational termination is Euclidean descent; a finite fraction is rational by its recurrence. |
| `thm-normalized-finite-continued-fraction-uniqueness` | `thm` | Every rational has exactly two finite regular expansions, related by \([a_0;\ldots,a_n]=[a_0;\ldots,a_n-1,1]\) when \(a_n>1\); the expansion of length zero, or with final digit at least \(2\), is unique. | L/A; Hackman G.VI and Stein §7.1.  State separately the integer case and prohibit a terminal zero, so the normal form is genuinely unique. |
| `lem-continued-fraction-error-bound` | `lem` | For an irrational \(\alpha\) and its convergents, \(|\alpha-p_n/q_n|<1/(q_nq_{n+1})\le1/q_n^2\), with the convergents alternating about \(\alpha\). | L/A; Hackman G.II.6 and G.II.8; Stein Cor. 7.2.10.  The weak second inequality is enough; do not claim it is sharp. |
| `thm-continued-fraction-convergents-are-best-approximations` | `thm` | If \(s>0,r\in\mathbb Z\) and \(|s\alpha-r|<|q_n\alpha-p_n|\), then \(s\ge q_{n+1}\); consequently no rational with denominator at most \(q_n\) approximates \(\alpha\) more closely than \(p_n/q_n\). | L/L; Hackman G.IV.1--G.IV.2; MIT Lecture 19.  Expand \((s,r)\) in the unimodular basis of consecutive convergent vectors and compare signed distances from the line of slope \(\alpha\). |
| `thm-legendre-continued-fraction-criterion` | `thm` | If \(r,s\in\mathbb Z\), \(s>0\), \(\gcd(r,s)=1\), and \(|\alpha-r/s|<1/(2s^2)\), then \(r/s\) is a convergent of \(\alpha\). | L/L; Hackman G.IV.3; MIT Lecture 19.  Choose \(n\) with \(q_n\le s<q_{n+1}\), use the best-approximation inequality, and force the integer \(|rq_n-sp_n|\) below \(1\). |
| `def-quadratic-irrational` | `def` | A real quadratic irrational is an irrational real root of a nonzero quadratic polynomial over \(\mathbb Q\). | L/NA; Stein Def. 7.4.1; Hackman H.I.1.  This elementary interface does not define algebraic numbers of arbitrary degree. |
| `def-eventually-periodic-continued-fraction` | `def` | An infinite regular continued fraction is eventually periodic if some positive period \(h\) satisfies \(a_{n+h}=a_n\) for every sufficiently large \(n\); the least such \(h\) is its period. | L/NA; Stein Def. 7.4.2; Hackman G.V and H.VI. |
| `lem-periodic-continued-fraction-is-quadratic` | `lem` | The value of every eventually periodic regular continued fraction is a quadratic irrational. | L/A; Hackman G.V; first half of Stein Thm. 7.4.4.  One period acts by an integral linear-fractional transformation; its fixed-point equation is quadratic, and irrationality follows from nontermination. |
| `lem-quadratic-irrational-complete-quotients-are-finite-state` | `lem` | For a quadratic irrational \(\alpha\), after clearing denominators each complete quotient has the form \((P_n+\sqrt D)/Q_n\) with integral parameters satisfying fixed divisibility and uniform bounds; only finitely many parameter pairs occur. | L/A; Hackman H.I--H.II and H.V--H.VI; second half of Stein Thm. 7.4.4.  Derive the recurrence and bounds explicitly; “finiteness” is not inferred merely from bounded real values. |
| `thm-lagrange-periodic-continued-fraction-theorem` | `thm` | A real number has an eventually periodic regular continued fraction iff it is a quadratic irrational. | L/A; Hackman H.VI; Stein Thm. 7.4.4; MIT Lecture 20.  The forward direction uses the fixed-point lemma; the converse uses repetition in the finite complete-quotient state space and determinism of the recurrence. |

#### Proof strategy, well-definedness, and low-anchor obligations

For each real \(x\), the integer \(a\) with \(a\le x<a+1\) is obtained
inside the proof from `thm-of-archimedean`: find natural upper bounds for
\(x\) and \(-x\), then choose the least natural crossing and translate back
to an integer.  Uniqueness uses the authored discreteness/order of integers.
This proof is intentionally inline; `lem-integer-part` exists on the later
`limits-of-real-functions` page but is above this block's anchor and is not a
dependency.  The complete quotient is therefore uniquely determined until a
zero fractional part occurs.

An infinite continued fraction is not assigned a value by visual ellipsis.
The determinant identity orders the even and odd convergents and computes
their gap.  Completeness of the real ordered field supplies the supremum of
the even side; Archimedeanness makes \(1/(q_nq_{n+1})\) smaller than any
positive real eventually, so the odd side has the same cut.  This proves both
existence and uniqueness of the value without importing the later general
theory of sequences.  All denominators are positive by recurrence.

For Lagrange's theorem, a repeated **complete quotient**, not merely a repeated
digit, yields periodicity because the algorithm is deterministic.  Conversely
a periodic tail must be a fixed point of a nontrivial positive
linear-fractional transformation.  The finite-state lemma keeps all integrality,
divisibility, sign, and bound conditions visible.  MT-7 is ZF: the integer part,
Euclidean quotients, normalized final digit, and finite-state repetitions are
canonical; there is no countable selection.

#### B page

| id | kind | task |
|---|---|---|
| `ex-two-finite-continued-fractions-for-a-rational` | `ex` | Compute both expansions of a rational and identify the normalized one. |
| `ex-continued-fraction-and-extended-euclid` | `ex` | Match partial quotients, remainders, and Bézout coefficients for \(37/11\). |
| `ex-continued-fraction-of-square-root-two` | `ex` | Derive \([1;\overline2]\), its convergents, alternating errors, and determinant identities. |
| `ex-continued-fraction-of-square-root-fourteen` | `ex` | Trace all complete-quotient states through the period \([3;\overline{1,2,1,6}]\). |
| `ex-golden-ratio-as-a-periodic-continued-fraction` | `ex` | Solve the fixed-point equation for \([1;\overline1]\). |
| `ex-best-rational-approximations-to-pi` | `ex` | Compare \(22/7,333/106,355/113\) using the precise first- and second-kind criteria. |
| `cex-an-excellent-approximation-at-the-legendre-boundary` | `cex` | Show why the strict constant \(1/2\) cannot simply be replaced by an arbitrary larger constant. |
| `ex-a-negative-real-continued-fraction` | `ex` | Apply the same floor convention to a negative irrational and verify that all later digits remain positive. |

### MT-8. Pell equations and generalized Pell orbits

- **A page id:** `pell-equations-and-generalized-pell-orbits`
- **B page id:** `pell-equations-and-generalized-pell-orbits-examples`
- **Requires:** MT-7, the authored integer arithmetic and congruence pages, and
  finite pigeonhole arguments.  This page works in the order
  \(\mathbb Z[\sqrt D]\) only as the explicit rank-two ring of expressions
  \(x+y\sqrt D\); it neither identifies that ring with the ring of integers
  of \(\mathbb Q(\sqrt D)\) nor anticipates the later unit theorem.
- **Primary backing:** Hackman, Ch. H, pp. 223--249: H.I “Algorithm for
  Quadratic Irrationalities,” H.II “Conjugates,” H.III
  “\(x^2-Dy^2=\pm1\),” H.IV “\(x^2-Dy^2=N\),” H.V “Inequalities,” and
  H.VI “Periodicity,” especially H.III.1--H.III.9 and H.IV.1--H.IV.2.
  Independent complete treatments are Keith Conrad, *Pell's Equation, I*,
  §§1--7, pp. 1--13, and *Pell's Equation, II*, §§1--4, pp. 1--12,
  especially Part I Thm. 5.3 and §7 and Part II Thms. 2.3 and 3.3; the MIT
  18.781 note headed “Brahmagupta--Pell Equation” supplies a third
  continued-fraction proof check.

#### A-page items, in dependency order

| id | kind | statement | provenance and locator |
|---|---|---|---|
| `def-pell-equation` | `def` | For a fixed positive nonsquare integer \(D\), Pell's equation is \(x^2-Dy^2=1\) in integers; a positive nontrivial solution has \(x>0,y>0\). | L/NA; Hackman H.III; Conrad I §1.  The restriction on \(D\) is part of the datum, not an afterthought. |
| `def-generalized-and-negative-pell-equations` | `def` | For \(N\in\mathbb Z\setminus\{0\}\), the generalized Pell equation is \(x^2-Dy^2=N\); \(N=-1\) is the negative Pell equation. | L/NA; Hackman H.III--H.IV; Conrad I §§6--7 and II §3. |
| `def-norm-on-integer-square-root-order` | `def` | On the explicit ring \(\mathbb Z[\sqrt D]=\{x+y\sqrt D:x,y\in\mathbb Z\}\), conjugation sends \(x+y\sqrt D\) to \(x-y\sqrt D\), and \(N_D(x+y\sqrt D)=x^2-Dy^2\). | L/NA; Conrad I §4 and II §3; Hackman H.III.3.  Equality of two displayed expressions is coefficientwise because \(\sqrt D\notin\mathbb Q\). |
| `lem-pell-norm-multiplication` | `lem` | \(N_D(\alpha\beta)=N_D(\alpha)N_D(\beta)\); explicitly, \((x,y)\star(u,v)=(xu+Dyv,xv+yu)\). | L/L; Conrad I §4; Hackman H.III.3 and H.IV.2.  Expand both sides, so no general norm theory is imported. |
| `prop-integral-pell-solutions-form-a-group` | `prop` | The integral solutions of \(x^2-Dy^2=1\), identified with \(x+y\sqrt D\), form an abelian group under multiplication, with inverse \(x-y\sqrt D\). | L/A; Conrad I §4; Hackman H.III.3.  Closure, identity, and inverse follow from the preceding explicit formula. |
| `lem-square-root-continued-fraction-state-recurrence` | `lem` | If \(a_0=\lfloor\sqrt D\rfloor\), every complete quotient of \(\sqrt D\) has the uniquely normalized form \((\sqrt D+P_n)/Q_n\) with integral \(P_n,Q_n\), \(Q_n>0\), and the next state is obtained by the standard floor, conjugate, and rationalization recurrence. | L/A; Hackman H.I--H.II; MIT “Brahmagupta--Pell Equation.”  Prove at each step that \(Q_n\mid D-P_n^2\); normalization and positivity make the state unique. |
| `lem-square-root-convergent-norm-identity` | `lem` | With the preceding indexing, the convergents satisfy \(p_n^2-Dq_n^2=(-1)^{n+1}Q_{n+1}\). | L/L; Hackman H.III.1 and H.III.3; MIT “Brahmagupta--Pell Equation.”  Derive it from the complete-quotient formula and its conjugate, checking the index at \(n=0\). |
| `thm-square-root-continued-fraction-period-structure` | `thm` | The regular continued fraction of \(\sqrt D\) has the form \([a_0;\overline{a_1,\ldots,a_{\ell-1},2a_0}]\), where \(a_j=a_{\ell-j}\) for \(1\le j<\ell\); the first return state is \((P_\ell,Q_\ell)=(a_0,1)\). | L/A; Hackman H.I--H.II and H.VI; MIT periodic-CF and Pell notes.  Deterministic finite-state recurrence gives repetition; conjugation reverses the intervening states and supplies the symmetry. |
| `thm-lagrange-existence-for-pell-equation` | `thm` | For every positive nonsquare \(D\), Pell's equation has a positive nontrivial integral solution. | L/L; Hackman H.III.2; Conrad II Thm. 2.3; MIT Pell note.  In the continued-fraction proof, the period identity gives norm \(-1\) or \(+1\); in the former case square the norm \(-1\) element. |
| `thm-negative-pell-period-parity-criterion` | `thm` | The negative Pell equation \(x^2-Dy^2=-1\) is soluble iff the period \(\ell\) of \(\sqrt D\) is odd; then \((p_{\ell-1},q_{\ell-1})\) is its least positive solution, while the least positive norm-one solution occurs at \(p_{2\ell-1}/q_{2\ell-1}\).  If \(\ell\) is even, \((p_{\ell-1},q_{\ell-1})\) is the least positive norm-one solution. | L/L; Hackman H.III.1, H.III.4, and H.III.8--H.III.9; MIT Pell note.  The converse uses the best-approximation theorem to place a negative-Pell solution among the convergents, not merely the displayed norm identity in one direction. |
| `def-fundamental-pell-solution` | `def` | The fundamental Pell solution \((x_1,y_1)\) is the positive solution with least \(x_1\), equivalently least \(y_1\) or least \(x_1+y_1\sqrt D>1\); write \(\varepsilon_D=x_1+y_1\sqrt D\). | L/NA; Conrad I §5; Hackman H.III.6.  Existence precedes this definition, and well-ordering gives the least coordinate. |
| `thm-all-positive-pell-solutions-are-fundamental-powers` | `thm` | Every positive solution of \(x^2-Dy^2=1\) is the coefficient pair of exactly one power \(\varepsilon_D^k\) with \(k\in\mathbb Z_{>0}\). | L/L; Conrad I Thm. 5.3; Hackman H.III.6.  Choose the unique \(k\) with \(\varepsilon_D^k\le x+y\sqrt D<\varepsilon_D^{k+1}\); the quotient is an integral norm-one element, and minimality excludes an element strictly between \(1\) and \(\varepsilon_D\). |
| `cor-all-integral-pell-solutions` | `cor` | Every integral solution of Pell's equation is represented uniquely as \(\pm\varepsilon_D^k\) with \(k\in\mathbb Z\), after reading coefficients in \(\mathbb Z[\sqrt D]\). | L/A; Conrad I §§5 and 7.  The signs and negative exponents account separately for the four coordinate-sign patterns. |
| `def-pell-equivalence-of-generalized-solutions` | `def` | Two solutions \(\alpha,\beta\in\mathbb Z[\sqrt D]\) of norm \(N\ne0\) are Pell-equivalent if \(\beta=\alpha\varepsilon_D^k\) for some \(k\in\mathbb Z\). | L/NA; Conrad II §3.  This is an equivalence relation because the norm-one powers form a group. |
| `thm-generalized-pell-solutions-have-finitely-many-orbits` | `thm` | Every integral solution of \(x^2-Dy^2=N\ne0\) is Pell-equivalent to \(x_0+y_0\sqrt D\) satisfying \[|x_0|\le {\sqrt{|N|}\over2}(\sqrt{\varepsilon_D}+\varepsilon_D^{-1/2}),\qquad |y_0|\le {\sqrt{|N|}\over2\sqrt D}(\sqrt{\varepsilon_D}+\varepsilon_D^{-1/2}).\] Consequently there are finitely many Pell-equivalence classes. | L/L; Conrad II Thm. 3.3.  Multiply by the unique power that places the logarithm of the first real embedding in a fixed half-open interval; combine \(|\alpha_0|\) and \(|\overline{\alpha_0}|=|N|/|\alpha_0|\) to obtain the displayed coefficient bounds. |
| `cor-generalized-pell-solubility-is-decidable` | `cor` | For fixed \(D,N\), the bounded representative search decides whether \(x^2-Dy^2=N\) has an integral solution and, if it does, produces a finite set whose Pell orbits are all solutions. | L/A; Conrad II §§3--4.  Search the explicitly bounded integer rectangle and merge representatives whose quotients are powers of \(\varepsilon_D\). |
| `cor-one-generalized-pell-solution-gives-infinitely-many` | `cor` | If \(x^2-Dy^2=N\ne0\) has one integral solution, then it has infinitely many, obtained by multiplying by distinct powers of \(\varepsilon_D\). | L/A; Conrad II §3; Hackman H.IV.2.  Distinctness follows from the strictly changing positive real embedding after fixing a nonzero solution. |

#### Proof strategy, well-definedness, and boundary obligations

The page first proves all ring identities in coordinates.  This matters because
\(\mathbb Z[\sqrt D]\) is not always the maximal order of the quadratic field:
when \(D\equiv1\pmod4\), the later ring of integers is larger.  No statement
here calls the Pell solutions “all units of \(\mathcal O_K\).”  Similarly,
“fundamental” refers to positive solutions of the displayed norm equation in
this explicit order; the algebraic block later reconciles it with totally
positive units and the narrow class convention.

In the continued-fraction proof, every pair \((P_n,Q_n)\) is normalized by
\(Q_n>0\), and divisibility of \(D-P_n^2\) is established before the next
quotient is formed.  The recurrence therefore depends neither on a choice of
representative nor on an unproved assertion that a quadratic surd “must
repeat.”  The first return, the reversed state chain, and the norm identity
together give the exact period parity.  To prove the **only if** direction for
negative Pell, use MT-7's approximation criterion with its precise strict
bound; do not assert that every solution of an arbitrary generalized Pell
equation is a convergent.

The generalized orbit theorem uses the real embedding only to select the
unique integer exponent landing in a specified half-open logarithmic interval.
The resulting coordinate bounds make the representative search finite.  This
also proves its well-definedness without choosing one representative from each
orbit.  MT-8 is ZF: minima are least positive integers, the exponent is a
floor, and all terminal searches are finite.

#### B page

| id | kind | task |
|---|---|---|
| `ex-pell-equation-for-two` | `ex` | Derive \([1;\overline2]\), the fundamental solution \(3+2\sqrt2\), and the first several powers. |
| `ex-pell-equation-for-three` | `ex` | Compute the even period of \(\sqrt3\), solve norm \(+1\), and prove norm \(-1\) insoluble. |
| `ex-negative-pell-equation-for-five` | `ex` | Use the odd period to obtain \(2^2-5\cdot1^2=-1\) and square it to get the fundamental norm-one solution. |
| `ex-pell-equation-for-fourteen` | `ex` | Reuse the complete-quotient states from MT-7 and identify which convergent first has norm \(+1\). |
| `ex-large-fundamental-pell-solution-for-sixty-one` | `ex` | Compute the period and explain why the least solution can be numerically large although the algorithm is finite. |
| `ex-generalized-pell-orbits-for-six` | `ex` | Following Conrad II Ex. 4.1, show every solution of \(x^2-6y^2=3\) lies in a listed orbit under \(5+2\sqrt6\). |
| `ex-generalized-pell-bounded-representatives` | `ex` | Apply the explicit bounds to \(x^2-7y^2=57\), enumerate the finite representatives, and regenerate every solution. |
| `cex-generalized-pell-solutions-need-not-all-be-convergents` | `cex` | Give a sourced solution outside the small-norm approximation criterion, blocking the common overstatement of Legendre's theorem. |
| `cex-pell-units-need-not-be-all-quadratic-field-units` | `cex` | For \(D\equiv1\pmod4\), compare \(\mathbb Z[\sqrt D]\) with the later maximal order without using the latter in any proof. |

---

## 5. Analytic-number-theory block — after `bloch-schottky-and-picard-examples`

The first three pairs in this block are elementary in proof method, but their
legal anchor is here.  They reuse the authored combinatorics page
`incidence-algebras-and-mobius-inversion`, including
`def-number-theoretic-mobius-function`,
`thm-number-theoretic-and-poset-mobius-agree`,
`cor-classical-mobius-inversion`, and
`cor-number-theoretic-mobius-is-multiplicative`, as well as the authored
`lem-abel-summation-by-parts`.  All of those pages lie above the low
elementary anchor.  Re-minting their content below that anchor would violate
both id reuse and the seam contract, so arithmetic functions, average orders,
and Chebyshev--Mertens estimates begin the analytic block and then feed its
Dirichlet-series pages.

### MT-9. Arithmetic functions and Dirichlet convolution

- **A page id:** `arithmetic-functions-and-dirichlet-convolution`
- **B page id:** `arithmetic-functions-and-dirichlet-convolution-examples`
- **Requires:** the authored positive integers, divisors, FTA and Euler-totient
  material; the four published Möbius items named above; finite sums and
  complex arithmetic.  The B-page totient example
  `ex-euler-totient-recovered-by-mobius-inversion` is not a dependency.
- **Primary backing:** Hackman, Ch. F, pp. 167--182: F.I “Definitions and
  Examples,” F.II “Dirichlet Product,” F.III “Möbius Function,” F.IV “Two
  More Results,” and F.V “Primitive Roots Again,” especially F.I.1--F.I.3,
  F.II.1--F.II.6, and F.III.1--F.III.4.  Independent textbook backing:
  Victor Shoup, *A Computational Introduction to Number Theory and Algebra*,
  2nd ed., §2.9 “Sums over divisors and Möbius inversion,” Thms. 2.37--2.39.
  Crisman, *Number Theory: In Context and Interactive*, Chs. 18--19 and 23,
  is a second complete-book treatment of the named examples and convolution
  algebra.

#### A-page items, in dependency order

| id | kind | statement | provenance and locator |
|---|---|---|---|
| `def-arithmetic-function` | `def` | An arithmetic function is a function \(f:\mathbb Z_{>0}\to\mathbb C\). | L/NA; Hackman F.I.1; Shoup §2.9.  The positive domain excludes the value at zero from every convolution formula. |
| `def-multiplicative-arithmetic-function` | `def` | An arithmetic function is multiplicative when \(f(1)=1\) and \(f(mn)=f(m)f(n)\) whenever \(\gcd(m,n)=1\). | L/NA; Hackman F.I.2; Shoup Thm. 2.37.  The normalization excludes the identically zero convention used by some texts. |
| `def-completely-multiplicative-arithmetic-function` | `def` | It is completely multiplicative when \(f(1)=1\) and \(f(mn)=f(m)f(n)\) for all positive \(m,n\). | L/NA; Kedlaya Ch. 2 Def. 2.7; Crisman §23.3. |
| `def-dirichlet-convolution` | `def` | For arithmetic functions \(f,g\), \((f*g)(n)=\sum_{d\mid n}f(d)g(n/d)\). | L/NA; Hackman F.II.1; Kedlaya Ch. 2 Def. 2.5.  The sum is finite and indexes positive divisors only. |
| `def-dirichlet-convolution-identity` | `def` | The convolution identity \(\epsilon\) has \(\epsilon(1)=1\) and \(\epsilon(n)=0\) for \(n>1\); the constant-one function is denoted \(\mathbf1\). | L/NA; Shoup §2.9 and Kedlaya Ch. 2 Def. 2.8.  Distinguishing \(\epsilon\) from \(\mathbf1\) prevents the standard notation collision. |
| `thm-dirichlet-convolution-commutative-ring` | `thm` | Arithmetic functions form a commutative ring under pointwise addition and Dirichlet convolution, with additive zero and multiplicative identity \(\epsilon\). | L/A; Hackman F.II and Crisman §23.3.  Associativity is a finite reindexing over ordered triples \(abc=n\); commutativity sends \(d\) to \(n/d\). |
| `thm-dirichlet-convolution-invertibility-criterion` | `thm` | An arithmetic function has a Dirichlet inverse iff \(f(1)\ne0\); the inverse is unique and is determined recursively from its value at \(1\) and the proper divisors of \(n\). | L/L; Kedlaya Ch. 2 §2.2; Crisman §23.3.  Induct on \(n\) and isolate the divisor \(d=n\), so the recursion has no circular choice. |
| `thm-dirichlet-convolution-preserves-multiplicativity` | `thm` | The convolution of two multiplicative arithmetic functions is multiplicative, and the Dirichlet inverse of a multiplicative function is multiplicative. | L/L; Hackman F.II.5--F.II.6; Shoup Thm. 2.37.  For coprime \(m,n\), prove that \((d,e)\mapsto de\) bijects divisors of \(m\) times divisors of \(n\) with divisors of \(mn\). |
| `thm-multiplicative-functions-determined-by-prime-powers` | `thm` | If \(f\) is multiplicative and \(n=\prod p^{v_p(n)}\), then \(f(n)=\prod_{p\mid n}f(p^{v_p(n)})\); conversely, arbitrary normalized prime-power data extend uniquely to a multiplicative function. | L/L; Shoup Thm. 2.37; Hackman F.I.2.  FTA makes the extension independent of the order in which the prime factors are written. |
| `def-divisor-counting-function` | `def` | \(\tau(n)=\sum_{d\mid n}1\) is the number of positive divisors of \(n\). | L/NA; Crisman Ch. 19 §19.1; Hackman F.IV. |
| `def-divisor-power-sum-functions` | `def` | For \(k\in\mathbb Z\), write \(\operatorname{id}_k(n)=n^k\) and \(\sigma_k(n)=\sum_{d\mid n}d^k\); in particular \(\sigma=\sigma_1\). | L/NA; Crisman Ch. 19; Kedlaya Ch. 2 Def. 2.8. |
| `def-liouville-function` | `def` | If \(n=\prod p^{e_p}\), the Liouville function is \(\lambda(n)=(-1)^{\sum e_p}\). | L/NA; Kedlaya Ch. 2 §2.3; Crisman §23.3.  FTA proves the exponent sum is well-defined. |
| `def-von-mangoldt-function` | `def` | \(\Lambda(n)=\log p\) when \(n=p^k\) for a prime \(p\) and \(k\ge1\), and \(\Lambda(n)=0\) otherwise. | L/NA; Sanders Prop. 1.4 aftermath; Kedlaya Ch. 2 Def. 2.9.  A positive integer cannot be a power of two distinct primes, by FTA. |
| `prop-divisor-functions-under-dirichlet-convolution` | `prop` | \(\tau=\mathbf1*\mathbf1\) and \(\sigma_k=\mathbf1*\operatorname{id}_k\); hence both are multiplicative and \(\tau(p^a)=a+1\), \(\sigma_k(p^a)=1+p^k+\cdots+p^{ak}\). | L/L; Hackman F.II and F.IV; Crisman Ch. 19 §§19.1--19.2. |
| `thm-von-mangoldt-divisor-sum-identity` | `thm` | For every positive \(n\), \(\sum_{d\mid n}\Lambda(d)=\log n\), equivalently \(\mathbf1*\Lambda=\log\). | L/L; Sanders p. 4 and Kedlaya Def. 2.9.  Expand the canonical prime factorisation and count its prime powers. |
| `cor-von-mangoldt-mobius-inversion-formula` | `cor` | \(\Lambda=\mu*\log\), where \(\mu\) is the already-published number-theoretic Möbius function. | L/A; Hackman F.III and Sanders p. 4.  Apply `cor-classical-mobius-inversion` to the preceding divisor sum; do not restate the inversion theorem. |
| `prop-liouville-convolution-square-indicator` | `prop` | \((\mathbf1*\lambda)(n)\) equals \(1\) when \(n\) is a square and \(0\) otherwise. | L/L; Kedlaya Ch. 2 examples; proof prime-by-prime from the finite alternating sums. |
| `def-mertens-function` | `def` | The Mertens function is \(M(x)=\sum_{n\le x}\mu(n)\) for real \(x\ge1\). | L/NA; Sanders p. 4.  The convention is right-continuous because the index condition is \(n\le x\). |

#### Proof strategy and well-definedness

All identities are finite before any analytic limiting process is introduced.
Associativity is proved by bijecting divisor flags with ordered factorizations,
not by an unlicensed rearrangement of an infinite series.  The inverse
recursion has only finitely many proper-divisor terms and induction fixes one
value at a time.  Multiplicativity uses the **unique** splitting of a divisor
of \(mn\) when \((m,n)=1\), an application of the authored FTA and Bézout
pages.  The existing Möbius definition and inversion theorem are cited by id;
the page does not mint alternate versions of either.

MT-9 is ZF.  Prime factorisations and divisor lists are canonical finite data,
and every recursive value is uniquely prescribed.  Later Euler products must
not be inferred from these finite convolution identities until absolute
convergence is proved.

#### B page

| id | kind | task |
|---|---|---|
| `ex-dirichlet-convolution-table-through-twelve` | `ex` | Tabulate two functions and their convolution, visibly grouping the positive divisors of each input. |
| `ex-dirichlet-inverse-recursion` | `ex` | Compute the first several values of a nontrivial inverse and verify both convolution orders. |
| `ex-divisor-counting-and-sum-prime-power-formulas` | `ex` | Derive \(\tau(n)\) and \(\sigma_k(n)\) from the prime factorisation of several composite integers. |
| `ex-euler-totient-as-a-mobius-convolution` | `ex` | Derive \(\varphi=\mu*\operatorname{id}_1\) from the published inversion theorem, while citing rather than depending on the older B-page example. |
| `ex-von-mangoldt-divisor-sum` | `ex` | Check \(\sum_{d\mid n}\Lambda(d)=\log n\) on a prime power and on an integer with three prime factors. |
| `ex-liouville-square-indicator` | `ex` | Make the cancellation in \(\mathbf1*\lambda\) explicit for square and nonsquare prime powers. |
| `cex-multiplicative-does-not-mean-completely-multiplicative` | `cex` | Use \(\varphi\), \(\tau\), or \(\sigma\) to separate the two definitions. |
| `cex-the-mertens-conjecture-is-false` | `cex` | State the historical conjecture \(|M(x)|<\sqrt x\), cite Odlyzko--te Riele's disproof, and make clear that this sourced computational fact is non-load-bearing. |

### MT-10. Average orders, divisor sums, and representation counts

- **A page id:** `average-orders-divisor-sums-and-representation-counts`
- **B page id:** `average-orders-divisor-sums-and-representation-counts-examples`
- **Requires:** MT-4 and MT-9; the published Möbius-inversion and
  Gregory--Leibniz-series items; finite sums, real logarithms, and the existing
  big-O calculus.
- **Primary backing:** Crisman, Ch. 20 “Long-Term Function Behavior,” §§20.1
  “Sums of Squares, Once More,” 20.2 “Average of Tau,” 20.3 “Digging Deeper
  and Finding Limits,” 20.4 “Heuristics for the Sum of Divisors,” and 20.5
  “Looking Ahead,” together with §24.6.4 “The average value of Euler phi.”
  Independent complete-note backing is Tom Sanders, *Topics in Analytic
  Number Theory*, Ch. 1, Props. 1.3--1.5, pp. 2--6.  Dan Petersen's Bristol
  Lectures 10--11, Lemma 10.2 and Thm. 10.3, give the quantitative totient
  precursor and sharp Dirichlet divisor estimate; McKernan Lecture 14 gives
  an independent complete proof of the totient summatory remainder.

#### A-page items, in dependency order

| id | kind | statement | provenance and locator |
|---|---|---|---|
| `def-summatory-function-and-average-order` | `def` | For \(f\), write \(F(x)=\sum_{n\le x}f(n)\).  A function \(g\) is an average order of \(f\) when \(\sum_{n\le x}f(n)\sim\sum_{n\le x}g(n)\), with the comparison sum eventually nonzero. | L/NA; Crisman §§20.2--20.3; Sanders Ch. 1.  This definition concerns summatory asymptotics, not pointwise approximation. |
| `def-euler-mascheroni-constant` | `def` | \(\gamma=\lim_{n\to\infty}(\sum_{k=1}^n1/k-\log n)\). | L/NA; Sanders Prop. 1.3; Bristol Lecture 10.  Existence is proved in the next item, rather than presumed in the definition. |
| `lem-harmonic-sum-asymptotic` | `lem` | Uniformly for real \(x\ge1\), \(\sum_{n\le x}1/n=\log x+\gamma+O(1/x)\). | L/L; Sanders Prop. 1.3; Bristol Lecture 10.  Compare each rectangle with the integral of \(1/t\) and retain the convergent nonnegative remainder. |
| `thm-dirichlet-hyperbola-method` | `thm` | If \(F,G\) are the summatory functions of \(f,g\), and \(U,V\ge1\) satisfy \(UV=x\), then \(\sum_{n\le x}(f*g)(n)=\sum_{a\le U}f(a)G(x/a)+\sum_{b\le V}g(b)F(x/b)-F(U)G(V)\). | L/L; Sanders proof of Prop. 1.4; Bristol Thm. 10.3.  Partition the finite lattice points \(ab\le x\) into the two arms and subtract their rectangular overlap. |
| `thm-divisor-counting-summatory-estimate` | `thm` | For real \(x\ge1\), \(\sum_{n\le x}\tau(n)=x\log x+(2\gamma-1)x+O(\sqrt x)\). | L/L; Sanders Prop. 1.4; Bristol Thm. 10.3.  Apply the hyperbola identity with \(U=V=\sqrt x\) and keep the floor errors through the overlap term. |
| `cor-average-order-of-divisor-counting-function` | `cor` | \(\log n\) is an average order of \(\tau(n)\). | L/A; Crisman Facts 20.2.2 and 20.3.5; immediate from the preceding estimate and the authored summatory estimate for \(\log n\). |
| `thm-divisor-sum-summatory-estimate` | `thm` | \(\sum_{n\le x}\sigma(n)=\frac{\pi^2}{12}x^2+O(x\log x)\). | L/L; Crisman §20.4 (with the proof obligation completed rather than treated heuristically); McKernan Lecture 14.  Rewrite the sum as \(\sum_{d\le x}d\lfloor x/d\rfloor\), use \(\sum_{m\le y}m=y^2/2+O(y)\), and cite the authored Basel sum. |
| `cor-average-order-of-divisor-sum-function` | `cor` | \((\pi^2/6)n\) is an average order of \(\sigma(n)\). | L/A; Crisman §§20.4--20.5.  Sum the proposed average order and compare its main term with the preceding theorem. |
| `thm-euler-totient-summatory-estimate` | `thm` | \(\sum_{n\le x}\varphi(n)=\frac{3}{\pi^2}x^2+O(x\log x)\). | L/L; McKernan Lecture 14; Crisman Prop. 24.6.7 supplies the asymptotic and Bristol Lemma 10.2 supplies the Möbius-series input.  Expand \(\varphi=\mu*\operatorname{id}_1\), estimate the finite inner arithmetic progression, and control the tail of \(\sum\mu(d)/d^2=1/\zeta(2)\). |
| `cor-average-order-of-euler-totient` | `cor` | \((6/\pi^2)n\) is an average order of \(\varphi(n)\). | L/A; Crisman §24.6.4; follows by summing the linear comparison function. |
| `thm-coprime-pair-counting-asymptotic` | `thm` | The number of ordered pairs \((a,b)\) with \(1\le a,b\le x\) and \(\gcd(a,b)=1\) is \(\frac6{\pi^2}x^2+O(x\log x)\). | L/L; Crisman §24.6; McKernan Lecture 14.  Insert \(\sum_{d\mid(a,b)}\mu(d)\), interchange only finite sums, and estimate \(\sum_{d\le x}\mu(d)\lfloor x/d\rfloor^2\). |
| `cor-asymptotic-density-of-coprime-pairs` | `cor` | The proportion of pairs in \(\{1,\ldots,n\}^2\) that are coprime tends to \(6/\pi^2\). | L/A; the preceding theorem after division by \(n^2\).  This is a limit of finite uniform proportions, not an assertion about a uniform probability distribution on all positive integers. |
| `def-two-square-representation-function` | `def` | \(r_2(n)=\#\{(x,y)\in\mathbb Z^2:x^2+y^2=n\}\), counting order and signs separately. | L/NA; Crisman §20.1; Hackman Ch. E.  The convention gives \(r_2(1)=4\) and \(r_2(0)\) is outside the domain. |
| `lem-normalized-two-square-count-is-multiplicative` | `lem` | The arithmetic function \(r_2/4\) is multiplicative, with prime-power values \(1\) for \(2^a\), \(a+1\) for \(p^a\) when \(p\equiv1\pmod4\), and \(1\) or \(0\) according as \(a\) is even or odd when \(p\equiv3\pmod4\). | L/L; Hackman Chs. E and K.III; Crisman §20.1.  Use MT-4's prime representation and uniqueness results and the sourced sign-normalized composition/factorisation bijection; do not make an unproved surjectivity claim from the two-square identity alone. |
| `thm-two-square-representation-count` | `thm` | \(r_2(n)=4\sum_{d\mid n}\chi_4(d)=4(d_1(n)-d_3(n))\), where \(\chi_4(d)=0,1,-1\) according as \(d\) is even, \(d\equiv1\), or \(d\equiv3\pmod4\), and \(d_j(n)\) counts divisors congruent to \(j\pmod4\). | L/L; Crisman §20.1; Hackman E/K.  Both sides divided by \(4\) are multiplicative and have the same three prime-power cases, so FTA identifies them. |
| `cor-average-order-of-two-square-representations` | `cor` | \(\sum_{n\le x}r_2(n)=\pi x+O(\sqrt x)\); hence the constant function \(\pi\) is an average order of \(r_2\). | L/A; Crisman §20.1.  Apply the hyperbola method to \(4(\mathbf1*\chi_4)\), use bounded partial sums of \(\chi_4\), and cite `thm-gregory-leibniz-series-for-pi-from-a-finite-remainder` for \(\sum_{n\ge1}\chi_4(n)/n=\pi/4\). |

#### Proof strategy and boundary obligations

Every sum is interpreted with \(n\le x\) and therefore remains constant
between consecutive integers.  Floors are retained until the error term is
proved; replacing every \(\lfloor x/d\rfloor\) by \(x/d+O(1)\) before the
hyperbola split loses the sharp \(O(\sqrt x)\) divisor error.  In the totient
calculation, absolute convergence at exponent two justifies the infinite
Möbius sum and the tail is bounded by \(\sum_{d>x}d^{-2}=O(1/x)\).

The two-square count is not inferred from the mere existence criterion.
Its multiplicativity proof must establish a bijection after the four rotations
and sign conventions are quotiented; Hackman's unique-factorisation treatment
or its fully expanded integer equivalent discharges that obligation.  The
resulting prime-power comparison is finite and is not a hidden Euler-product
argument.  MT-10 is ZF: all rearrangements are of finite sums and all limiting
estimates use canonical partial sums.

#### B page

| id | kind | task |
|---|---|---|
| `ex-dirichlet-hyperbola-lattice-decomposition` | `ex` | Draw and enumerate both arms and their overlap for a small integer \(x\). |
| `ex-divisor-summatory-error-table` | `ex` | Compare the exact divisor sum with \(x\log x+(2\gamma-1)x\) and its \(\sqrt x\)-scale error. |
| `ex-average-orders-of-tau-sigma-and-phi` | `ex` | Compute finite tables while keeping pointwise values distinct from summatory averages. |
| `ex-counting-visible-lattice-points` | `ex` | Interpret coprime pairs as visible lattice points and compare their finite proportion with \(6/\pi^2\). |
| `ex-two-square-representation-counts` | `ex` | Verify the divisor formula, with all ordered signs, for \(5,25,45,65\), and \(325\). |
| `cex-average-order-is-not-pointwise-order` | `cex` | Use the spikes of \(\tau\) or \(\sigma\) to show why an average order is not a pointwise asymptotic. |
| `rem-dirichlet-divisor-problem` | `rem` | Record the sourced open problem of improving the divisor-error exponent; no conjectural bound is used later. |

### MT-11. Chebyshev bounds and Mertens' theorems

- **A page id:** `chebyshev-bounds-and-mertens-theorems`
- **B page id:** `chebyshev-bounds-and-mertens-theorems-examples`
- **Requires:** MT-9--MT-10, the authored Abel-summation lemma, binomial
  coefficients and logarithms, and the planned Gamma/zeta pages only for the
  exact constant in the third Mertens theorem.  No prime-number-theorem result
  is used.
- **Primary backing:** Shoup, Ch. 5: §5.1 “Chebyshev's Theorem,” Thms.
  5.1--5.7 and Lemmas 5.2--5.3; §5.2 “Bertrand's Postulate,” Thm. 5.8 and
  Lemma 5.9; §5.3 “Mertens' Theorems,” Thms. 5.10--5.13.  Independent
  full-book treatment: Crisman, Ch. 21 “The Prime Counting Function,” §§21.1
  “First Steps,” 21.2 “Some History,” 21.3 “The Prime Number Theorem,” and
  21.4 “A Slice,” especially Thm. 21.3.4, Thm. 21.3.6, Prop. 21.3.7, and
  Def. 21.4.3.  For exact constants, Andersen Ch. 3 §§3.1--3.3, Cor. 3.5 and
  Thm. 3.6, Goldmakher's *A Quick Proof of Mertens' Theorem*, and Tao's
  complete note *Mertens' Theorems* back the proofs; MIT 18.785 Problem Set 9,
  Problems 1--2, supplies the exact third-theorem error decomposition.

#### A-page items, in dependency order

| id | kind | statement | provenance and locator |
|---|---|---|---|
| `def-prime-counting-function` | `def` | For real \(x\ge0\), \(\pi(x)=\#\{p\text{ prime}:p\le x\}\). | L/NA; Crisman Def. 21.0.1; Shoup §5.1.  This \(\pi\) is distinguished typographically from the circle constant by its argument. |
| `def-chebyshev-theta-function` | `def` | \(\vartheta(x)=\sum_{p\le x}\log p\). | L/NA; Crisman Def. 21.4.3; Shoup §5.1. |
| `def-chebyshev-psi-function` | `def` | \(\psi(x)=\sum_{n\le x}\Lambda(n)\). | L/NA; Shoup §5.1 and Sutherland Lecture 16.  This is the right-continuous function, not the half-weighted explicit-formula convention introduced later. |
| `lem-chebyshev-psi-prime-power-expansion` | `lem` | \(\psi(x)=\sum_{p^k\le x}\log p=\sum_{k\ge1}\vartheta(x^{1/k})\), with both sums finite. | L/L; Shoup §5.1; direct expansion of MT-9's von Mangoldt definition. |
| `lem-chebyshev-functions-prime-power-comparison` | `lem` | For \(x\ge2\), \(0\le\psi(x)-\vartheta(x)=O(\sqrt x\log x)\) using only the trivial prime count; after the linear upper bound for \(\vartheta\), the error improves to \(O(\sqrt x)\). | L/A; Shoup proofs of Thms. 5.5--5.7; Sutherland Lemma 16.7.  Separate \(k=2\) and bound the finite tail \(k\ge3\) rather than hiding it in an infinite sum. |
| `lem-prime-counting-chebyshev-partial-summation` | `lem` | For \(x\ge2\), \(\pi(x)=\vartheta(x)/\log x+\int_2^x\vartheta(t)/(t\log^2t)\,dt\), with the finite endpoint convention made explicit. | L/A; Shoup Thm. 5.5; apply the authored `lem-abel-summation-by-parts` to the prime-supported weights \(\log p\). |
| `lem-central-binomial-coefficient-bounds` | `lem` | \(4^n/(2n+1)\le {2n\choose n}\le4^n\). | L/L; Shoup Lemma 5.2; Andersen §3.2.  The upper bound sums all binomial coefficients and the lower bound compares with their largest term. |
| `lem-central-binomial-coefficient-prime-valuation` | `lem` | Legendre's floor formula gives \(v_p(n!)=\sum_{k\ge1}\lfloor n/p^k\rfloor\); hence every prime \(n<p\le2n\) divides \({2n\choose n}\), while all valuations admit the logarithmic bound needed in Chebyshev's argument. | L/L; Shoup Lemma 5.3 and proof of Thms. 5.4--5.6; Andersen §3.2.  The displayed valuation sum is finite. |
| `thm-chebyshev-theta-linear-bounds` | `thm` | There are absolute constants \(0<c<C\) and \(x_0\) such that \(cx\le\vartheta(x)\le Cx\) for every \(x\ge x_0\). | L/L; Shoup Thms. 5.4--5.7; Andersen §3.2.  Iterate the central-binomial inequalities on dyadic intervals and retain explicit initial-range verification. |
| `thm-chebyshev-prime-counting-bounds` | `thm` | There are absolute \(0<c_1<c_2\) such that \(c_1x/\log x\le\pi(x)\le c_2x/\log x\) for all sufficiently large \(x\); equivalently \(\pi(x)=\Theta(x/\log x)\). | L/L; Shoup Thm. 5.1; Crisman Thm. 21.3.6.  Pass between \(\vartheta\) and \(\pi\) using the preceding partial-summation identity, not an assumed PNT. |
| `thm-bertrands-postulate` | `thm` | For every integer \(n>1\), there is a prime \(p\) with \(n<p<2n\). | L/L; Shoup Thm. 5.8 and Lemma 5.9; Crisman Thm. 21.3.4.  The proof must disclose and reproduce the source's finite verification for its residual initial range; a numerical check is not silently called conceptual. |
| `lem-weighted-von-mangoldt-harmonic-estimate` | `lem` | \(\sum_{n\le x}\Lambda(n)/n=\log x+O(1)\). | L/L; Goldmakher, opening identities and first estimate; Andersen Cor. 3.5 proof.  Sum \(\log n=\sum_{d\mid n}\Lambda(d)\), reverse the finite summation, and use Stirling/harmonic estimates. |
| `thm-first-mertens-theorem-for-primes` | `thm` | \(\sum_{p\le x}(\log p)/p=\log x+O(1)\). | L/L; Andersen Cor. 3.5; Goldmakher.  The total contribution of prime powers \(p^k\), \(k\ge2\), to the preceding von Mangoldt sum is absolutely bounded. |
| `def-meissel-mertens-constant` | `def` | The Meissel--Mertens constant is \(B_1=\lim_{x\to\infty}(\sum_{p\le x}1/p-\log\log x)\). | L/NA; Andersen Thm. 3.6; Goldmakher's proposition.  Existence is part of the next theorem's proof, so the definition does not assert it circularly. |
| `thm-second-mertens-theorem-for-primes` | `thm` | \(\sum_{p\le x}1/p=\log\log x+B_1+O(1/\log x)\). | L/L; Andersen Thm. 3.6; Goldmakher.  Apply partial summation to the first theorem, identify a convergent remainder integral, and define \(B_1\) by its limit. |
| `thm-third-mertens-theorem-for-primes` | `thm` | \(\prod_{p\le x}(1-1/p)=e^{-\gamma}(\log x)^{-1}(1+O(1/\log x))\). | L/A; MIT 18.785 Problem Set 9, Problems 1--2, gives the exact statement and guided proof obligations; Tao's Theorem 1 and Props. 2--4 give a completed proof of the asymptotic constant.  Expand logarithms with a uniformly convergent prime-power remainder and identify the constant through the zeta/Gamma limit; do not infer \(e^{-\gamma}\) from Shoup's weaker \(\Theta(1/\log x)\). |
| `cor-sum-of-reciprocals-of-primes-diverges` | `cor` | \(\sum_p1/p\) diverges. | L/A; Andersen Remark 3.7 and the second theorem. |
| `cor-euler-prime-product-tends-to-zero` | `cor` | The finite products \(\prod_{p\le x}(1-1/p)\) tend to zero, with the precise first-order rate \(e^{-\gamma}/\log x\). | L/A; Tao Theorem 1 and the third theorem. |

#### Proof strategy, constants, and boundary obligations

The Chebyshev argument uses finite binomial coefficients and prime valuations.
It first controls \(\vartheta\) on dyadic intervals, then transfers those
bounds to \(\pi\).  No line may replace the two-sided estimates by
\(\vartheta(x)\sim x\) or \(\pi(x)\sim x/\log x\): those are precisely the
later prime number theorem.  Bertrand's postulate receives its own sourced
finite-range check because Shoup's otherwise uniform argument leaves a
substantial initial interval.

The three “Mertens theorems” are kept distinct from the existing authored
`thm-mertens`, which is Mertens' theorem for Cauchy products.  In the third
theorem, the logarithm of the finite positive product is the ordinary real
logarithm.  The sum over \(k\ge2\) in
\(-\log(1-1/p)=\sum_{k\ge1}1/(kp^k)\) is absolutely and uniformly controlled;
the exact constant is obtained from a stated zeta/Gamma limit, not guessed by
exponentiating an \(O(1)\) term.  MT-11 is ZF: all prime and binomial lists are
finite at each stage and the constants are limits of canonical partial sums.

#### B page

| id | kind | task |
|---|---|---|
| `ex-prime-counting-theta-and-psi-table` | `ex` | Compare \(\pi,\vartheta,\psi\) and isolate every prime-power jump through a moderate cutoff. |
| `ex-chebyshev-binomial-coefficient-estimate` | `ex` | Factor a central binomial coefficient and show exactly which interval primes it detects. |
| `ex-bertrand-finite-range-verification` | `ex` | Reproduce the finite residual verification specified by the proof source, with code or table provenance recorded. |
| `ex-first-and-second-mertens-numerics` | `ex` | Compare the weighted and reciprocal prime sums with their logarithmic main terms. |
| `ex-third-mertens-product-numerics` | `ex` | Compare the prime product with \(e^{-\gamma}/\log x\) without using the data as proof. |
| `cex-chebyshev-bounds-do-not-give-the-prime-number-theorem` | `cex` | Exhibit the logical gap between two-sided constant bounds and an asymptotic ratio of one. |
| `cex-shoups-product-bound-does-not-determine-mertens-constant` | `cex` | Explain why a \(\Theta(1/\log x)\) estimate cannot supply the factor \(e^{-\gamma}\). |

### MT-12. Dirichlet series and Euler products

- **A page id:** `dirichlet-series-and-euler-products`
- **B page id:** `dirichlet-series-and-euler-products-examples`
- **Requires:** MT-9--MT-11; the authored Abel-summation lemma and extended
  reals; complex-series local uniform convergence; and the planned CA-22
  items `def-riemann-zeta-function` and `thm-zeta-euler-product`.  Zeta's
  analytic continuation is not needed on this page.
- **Primary backing:** Kedlaya, *Notes on Analytic Number Theory*, Ch. 2:
  §2.1 “Dirichlet series,” Defs. 2.1 and 2.3, Lemma 2.2, Thm. 2.4;
  §2.2 “Dirichlet series of arithmetic functions,” Defs. 2.5--2.7; and
  §2.3 “Examples,” Defs. 2.8--2.9.  Independent full-note treatment:
  Tomczak/Boase, Cambridge Part III *Analytic Number Theory*, Ch. 3,
  Thms. 3.1--3.8, pp. 14--17, especially Thms. 3.2--3.6.  Kedlaya and
  Tomczak are independent complete lecture-note sets with harvestable tables
  of contents.

#### A-page items, in dependency order

| id | kind | statement | provenance and locator |
|---|---|---|---|
| `def-dirichlet-series` | `def` | A Dirichlet series is \(D(s)=\sum_{n\ge1}a_nn^{-s}\), where \(s\in\mathbb C\), \(a_n\in\mathbb C\), and \(n^{-s}=\exp(-s\log n)\) uses the real logarithm of \(n>0\). | L/NA; Kedlaya Def. 2.1; Tomczak Ch. 3. |
| `def-abscissae-dirichlet-series` | `def` | The abscissae \(\sigma_c,\sigma_a\in[-\infty,\infty]\) are the infima of real \(\sigma\) for which the series converges, respectively converges absolutely, throughout \(\Re s>\sigma\). | L/NA; Kedlaya Def. 2.3 and Lemma 2.2; Tomczak Thms. 3.3--3.4.  The extended-real convention includes series converging everywhere or nowhere. |
| `thm-dirichlet-series-half-plane-convergence` | `thm` | If a Dirichlet series converges at \(s_0\), it converges locally uniformly and defines a holomorphic function on \(\Re s>\Re s_0\). | L/L; Kedlaya Lemma 2.2; Tomczak Thm. 3.4.  Abel summation bounds the tails by the bounded partial sums of \(a_nn^{-s_0}\), uniformly on compact sub-half-planes. |
| `thm-dirichlet-series-absolute-half-plane-holomorphy` | `thm` | Absolute convergence at \(s_0\) implies absolute and locally uniform convergence on every closed half-plane \(\Re s\ge\Re s_0+\varepsilon\), and termwise differentiation there. | L/L; Kedlaya Lemma 2.2; Tomczak Thm. 3.3.  Use the Weierstrass test separately for the series and each compactly bounded logarithmic derivative factor. |
| `thm-dirichlet-series-abscissa-gap` | `thm` | The convergence and absolute-convergence abscissae satisfy \(\sigma_c\le\sigma_a\le\sigma_c+1\), with the evident extended-real interpretation. | L/L; Tomczak Thm. 3.4; Kedlaya Lemma 2.2.  If the series converges at \(s_0\), its terms are bounded after weighting by \(n^{-s_0}\), and comparison with \(\sum n^{-1-\varepsilon}\) gives absolute convergence one unit to the right. |
| `thm-dirichlet-series-summatory-integral` | `thm` | If \(A(x)=\sum_{n\le x}a_n\) and \(A(x)=O(x^\theta)\), then for \(\Re s>\theta\), \(\sum a_nn^{-s}=s\int_1^\infty A(x)x^{-s-1}\,dx\); the corresponding finite formula includes its endpoint term. | L/L; Tomczak Thm. 3.5; Kedlaya Ch. 1 Def. 1.3.  Derive the finite identity from Abel summation and prove the boundary term tends to zero before taking the improper limit. |
| `thm-dirichlet-series-multiplication-convolution` | `thm` | In any common half-plane of absolute convergence, \((\sum f(n)n^{-s})(\sum g(n)n^{-s})=\sum(f*g)(n)n^{-s}\). | L/L; Kedlaya Def. 2.5; Tomczak Thm. 3.2.  Absolute convergence licenses the Cauchy-product regrouping by \(mn\), whose coefficient is the finite divisor sum. |
| `thm-multiplicative-dirichlet-series-euler-product` | `thm` | If \(f\) is multiplicative and \(\sum |f(n)|n^{-\sigma}<\infty\), then \(\sum f(n)n^{-s}=\prod_p\sum_{k\ge0}f(p^k)p^{-ks}\) for \(\Re s\ge\sigma\), with the product taken in increasing-prime order or as the net over finite prime sets. | L/L; Kedlaya Def. 2.6; Tomczak Thm. 3.2.  First identify every finite prime product by FTA, then pass to the limit using absolute convergence. |
| `cor-completely-multiplicative-dirichlet-series-euler-product` | `cor` | For completely multiplicative \(f\) in its absolute half-plane, \(\sum f(n)n^{-s}=\prod_p(1-f(p)p^{-s})^{-1}\). | L/A; Kedlaya Def. 2.7.  Each local series is geometric and its denominator is nonzero because \(|f(p)p^{-s}|<1\) follows from absolute convergence. |
| `thm-landau-dirichlet-series` | `thm` | If \(a_n\ge0\) and the Dirichlet series has finite abscissa of convergence \(\sigma_c\), then \(s=\sigma_c\) is a singular point of the holomorphic function defined in \(\Re s>\sigma_c\). | L/L; Kedlaya Thm. 2.4; Tomczak Thm. 3.6.  Assuming a regular neighbourhood, expand at a real point to the right and use nonnegative coefficients plus Tonelli for nonnegative finite partial sums to continue past the abscissa. |
| `thm-von-mangoldt-logarithmic-derivative-zeta` | `thm` | For \(\Re s>1\), \(-\zeta'(s)/\zeta(s)=\sum_{n\ge1}\Lambda(n)n^{-s}\). | L/L; Kedlaya Def. 2.9; Tomczak Ch. 3.  Differentiate the absolutely convergent logarithm of the zeta Euler product termwise and regroup prime powers. |
| `cor-mobius-dirichlet-series-reciprocal-zeta` | `cor` | For \(\Re s>1\), \(\sum\mu(n)n^{-s}=1/\zeta(s)\). | L/A; Kedlaya Def. 2.8; multiply the absolutely convergent series for \(\mu\) and \(\mathbf1\), then use their published convolution identity. |
| `cor-divisor-dirichlet-series-zeta-square` | `cor` | For \(\Re s>1\), \(\sum\tau(n)n^{-s}=\zeta(s)^2\). | L/A; Kedlaya Def. 2.8 and MT-9's \(\tau=\mathbf1*\mathbf1\). |
| `cor-euler-totient-dirichlet-series` | `cor` | For \(\Re s>2\), \(\sum\varphi(n)n^{-s}=\zeta(s-1)/\zeta(s)\). | L/A; Kedlaya Ch. 2 examples.  Use \(\varphi=\mu*\operatorname{id}_1\); the stricter half-plane comes from absolute convergence of \(\sum n^{1-s}\). |

#### Proof strategy and well-definedness

The page establishes half-plane geometry before referring to “the” abscissa.
Every Euler product is either a net over finite prime sets or an increasing
prime limit.  FTA identifies its finite coefficients; absolute convergence,
proved in the stated region, is what permits reordering.  Likewise,
\(\log\zeta\) is defined in \(\Re s>1\) by the termwise logarithmic series
normalized to tend to zero as \(\Re s\to+\infty\), not by selecting a global
branch across a region where zeros might occur.

Landau's theorem uses positivity only after restricting to real arguments and
finite partial sums, so no illicit complex ordering appears.  MT-12 is ZF:
the primes are canonically increasing and all analytic limits are limits of
specified sequences or nets with unique values.

#### B page

| id | kind | task |
|---|---|---|
| `ex-dirichlet-series-abscissa-boundaries` | `ex` | Give series whose ordinary and absolute abscissae agree and one whose gap is positive. |
| `ex-mobius-reciprocal-zeta-coefficients` | `ex` | Multiply finite initial coefficients and observe Möbius cancellation before taking a limit. |
| `ex-divisor-function-from-zeta-square` | `ex` | Recover \(\tau(n)\) as the coefficient of \(\zeta(s)^2\). |
| `ex-euler-totient-dirichlet-series` | `ex` | Check the local prime-power factor for \(\zeta(s-1)/\zeta(s)\). |
| `ex-liouville-dirichlet-series` | `ex` | Derive \(\sum\lambda(n)n^{-s}=\zeta(2s)/\zeta(s)\) in its honest common absolute half-plane. |
| `cex-conditionally-convergent-euler-product-rearrangement` | `cex` | Show why formal prime-factor regrouping outside absolute convergence is not licensed. |
| `cex-an-abscissa-need-not-be-a-line-of-convergence` | `cex` | Compare boundary points of a Dirichlet series to block the claim that the entire boundary line behaves uniformly. |
