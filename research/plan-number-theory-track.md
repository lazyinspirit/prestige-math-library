# Number theory — subject-track prose scaffold

## Summary for the orchestrator

**Placement and completed pairs.** This sole `number-theory` scaffold has
three noncontiguous blocks and uses relative labels only.  After
`splitting-fields-examples`: NT-1 primitive roots/unit groups; NT-2 quadratic
residues/Legendre/Gauss; NT-3 quadratic reciprocity/Jacobi/modular roots; NT-4
two squares; NT-5 four squares; NT-6 positive-definite binary forms; NT-7
continued fractions; NT-8 Pell and generalized Pell orbits.  After
`bloch-schottky-and-picard-examples`: NT-9 arithmetic functions/convolution;
NT-10 average orders/representation counts; NT-11 Chebyshev/Mertens; NT-12
Dirichlet series/Euler products; NT-13 characters/L-functions/Dirichlet AP;
NT-14 primitive L functional equations; NT-15 Perron/explicit formula; NT-16
classical zero-free region/PNT.  After the last `commutative-algebra` page:
NT-17 absolute values/\(p\)-adics/Hensel applications; NT-18 Hilbert symbols
and proved Hasse--Minkowski; NT-19 number fields/integers/discriminants; NT-20
prime decomposition/different; NT-21 decomposition/inertia/Frobenius; NT-22
Minkowski/class groups; NT-23 units/regulators/\(S\)-units; NT-24 cyclotomic
arithmetic and reciprocity via Frobenius.  Every A page is below 60 items.

**Full texts obtained.** Complete open books/textbook-scale notes include
Hackman; Shoup; Stein's two elementary texts and his algebraic-number-theory
text; Milne; Crisman; Kedlaya; Andersen; Tomczak/Boase; MIT 18.781 and the
selected Sutherland 18.782/18.785 sets; Conrad--Landesman; Nicolas Mascot's
complete elementary course; Jan-Hendrik Evertse's complete prime-number-theory
course; and P. Stevenhagen's *Number Rings*.  Exact URLs, read ranges,
heading/result inventories, and dispositions are in §7.  Every pair has at
least two independent treatments and at least one full source with a
harvestable contents structure; §7.15 audits this pair by pair.

**Seams consumed.** The low block consumes the three published elementary
number-theory pages plus authored group/polynomial facts and reuses the
published number-theoretic Möbius items rather than re-minting them.  The
analytic block consumes planned CA-21/CA-22 Gamma/zeta, CA-18 product theory,
and FA Poisson/Gaussian machinery.  The high block consumes CA-6/8/9/13/14,
abstract-algebra Galois/cyclotomic/finite-field theory, published metric
completion, and planned GT-17 \(\mathbb Z_p\).  Because the analytic anchor
currently precedes the commutative-algebra terminus, NT-18 legally consumes
NT-13 and gives a complete Hasse--Minkowski proof rather than an unproved
remark.  The subjects-01 reconciliation also places the Möbius formula for
monic irreducibles on NT-9, successive minima and Minkowski's second theorem
on NT-22, and the arithmetic consequences of GA-3's Kronecker--Weber theorem
on NT-24.

**Amendments owed and unresolved references.** CA-18 owes stable ids for
Jensen/Hadamard/log-derivative machinery; CA-21/22 must preserve their named
Gamma/zeta suppliers and leave the quantitative zero-free region here;
FA-22/25 must preserve Gaussian/Dirac-comb Poisson ids; GT-17 must preserve
the compatible-residue \(\mathbb Z_p\) interface without minting
\(\mathbb Q_p\).  These and the finished commutative-algebra pages still have
empty live `items[]`, so every candidate dependency is verified again at
build time.  The only optional unresolved content is a fully sourced
nonmonogenic B counterexample; omit it if no complete proof is acquired.

**Scope denials and blockers.** General commutative algebra and Galois theory,
function-theoretic Gamma/zeta, cryptographic algorithms, elliptic/higher
Diophantine geometry, class field theory/Chebotarev/higher reciprocity,
modular/automorphic forms, additive circle-method theory, sieves and uniform
prime-distribution theory, Gauss composition/narrow class groups, and open
problems such as RH are explicitly denied or deferred with result-specific
reasons in §§2 and 7.  There is no blocker.  The choice ledger is §9; notably
the published metric completion and planned measure/Fourier routes transmit
\(\mathsf{AC}_\omega\), while the intrinsic number-theoretic arguments are ZF.

---

## 1. Why this track exists

The published number-theory band establishes divisibility, gcd and Bézout,
prime factorisation, congruences, the Chinese remainder theorem, the unit group
\((\mathbb Z/n\mathbb Z)^\times\), Euler's totient, Fermat--Euler congruences,
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
`splitting-fields-examples`, but it may not cite \(p\)-adic fields, rings of
integers, Dirichlet series, or any other construction introduced later in this
scaffold.  The analytic block may cite the planned complex-analysis Gamma and
Riemann-zeta pages because its anchor follows them.  The algebraic/local block
may cite the finished commutative-algebra scaffold and the abstract-algebra
Galois block, and applies their general theorems rather than restating them.

The following dependencies have been checked against authored files or, for a
planned sibling page, against the sibling scaffold that owns its stable id.

| Source page | Material used here |
|---|---|
| `divisibility-gcd-and-bezout` | divisibility, gcd, Bézout, Euclidean division, least common multiples, and the existing \(p\)-adic valuation on integers and rationals |
| `primes-and-the-fundamental-theorem-of-arithmetic` | Euclid's lemma, canonical prime factorisation, infinitude of primes, and elementary prime estimates already proved there |
| `congruences-and-the-chinese-remainder-theorem` | quotient rings \(\mathbb Z/n\mathbb Z\), units and \(\varphi\), CRT, Euler/Fermat/Wilson, the prime-power formula for \(\varphi\), and its product formula |
| `cyclic-groups-and-direct-products`; `the-structure-of-finite-abelian-groups` | cyclic groups, orders in products, finite-abelian invariant factors, group exponent, and the order/exponent formula |
| `polynomial-rings-and-roots` | the root bound over a domain and `cor-finite-subgroups-of-units-in-a-domain-are-cyclic` |
| `splitting-fields` | splitting-field language only where an elementary example explicitly needs it; no Galois correspondence is available at the low anchor |
| finished `abstract-algebra` Galois and cyclotomic pages | finite-field and Galois theory, cyclotomic extensions, norm and trace; cited only by the algebraic block |
| finished `commutative-algebra` CA-6, CA-8, CA-9, CA-13, CA-14 | integral extensions, DVRs, Dedekind domains, fractional ideals, unique ideal factorisation, class groups, completions, and Henselian rings; cited only by the algebraic/local block |
| planned `the-gamma-function`; `the-riemann-zeta-function` | Gamma continuation and functional equation; zeta Euler product, continuation, functional equation, and function-theoretic nonvanishing on \(\Re s=1\); cited only by the analytic block |

No item below re-mints an id in this table.  In particular,
`def-p-adic-valuation`, `lem-p-adic-valuation-basic`, and
`lem-p-adic-valuation-on-q` are published and will be cited when the local
block normalises \(|x|_p=p^{-v_p(x)}\).

## 2. Scope denials

1. **General commutative algebra.** Integral dependence, going up and down,
   valuation rings, DVRs, Dedekind domains, fractional ideals, abstract class
   groups, adic completion, and Henselian rings belong to
   `commutative-algebra`.  This track proves that \(\mathcal O_K\) satisfies
   the relevant hypotheses and extracts arithmetic consequences.
2. **General Galois and finite-field theory.** The Galois correspondence,
   separability, finite fields, cyclotomic extensions as field extensions, and
   Kummer theory belong to `abstract-algebra`.  This track owns primes in
   number fields, decomposition and inertia, and arithmetic Frobenius.
3. **Zeta as a function-theoretic object.** Construction of the Gamma
   function, meromorphic continuation and functional equation of
   \(\zeta(s)\), and the completed zeta function belong to
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
   the existence theorem of class field theory, and cubic and higher
   reciprocity form a later subject.  The owner-authorised exception is
   Kronecker--Weber: GA-3 proves it, and NT-24 cites it for its arithmetic
   consequences.  Frobenius in a finite Galois extension and its cyclotomic
   use are included; neither presumes the rest of class field theory.
7. **Additive and automorphic theory beyond the named remit.** Waring's
   problem, Goldbach-type questions, the circle method, modular forms,
   automorphic \(L\)-functions, and sieve theory beyond the elementary
   estimates explicitly needed below require separate tracks.  Lagrange's
   four-square theorem is included with an elementary proof.

## 3. Conventions, item contract, and provenance

Here \(\mathbb N=\{0,1,2,\ldots\}\), as in the published library, and a
modulus is positive unless explicitly stated otherwise.  The unit group for
\(n=1\) is the one-element group; this makes \(\varphi(1)=1\) and the
primitive-root classification include \(n=1\) without an exception hidden in
notation.  A primitive root is a **unit class**, not an arbitrarily selected
integer representative.  Later, an additive valuation is normalised by
\(v_p(p)=1\), its associated absolute value by \(|p|_p=p^{-1}\), and two
absolute values are **defined** to be equivalent when one is a positive power
of the other.  NT-17 then proves that, for nontrivial field absolute values,
this is equivalent to inducing the same topology.
Dirichlet characters are functions on \(\mathbb Z\), periodic modulo \(q\),
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

### NT-1. Primitive roots and the structure of the unit groups modulo \(n\)

*Scaffolded by `frontier-13` batch 2 (2026-08-15) at orders 57.001/57.002, A 28 /
B 11, no split proposed. The machine scaffold in
`research/frontier-13-batch-2.pages.json` is the authority for ids, statements and
dependencies; `research/frontier-13-batch-2.coverage.json` carries the
heading-by-heading source dispositions and
`research/frontier-13-batch-2.proof-contracts.json` the per-step citations. The
tables below are the live item lists; the prose that follows them is the design
rationale, kept because the proofs still have to discharge it.*

- **A page id:** `primitive-roots-and-unit-groups-modulo-n`
- **B page id:** `primitive-roots-and-unit-groups-modulo-n-examples`
- **Requires (live, `plan-spec.json`):** `splitting-fields-examples` — one
  declared edge, whose transitive closure supplies everything the page cites.
  Part I listed `congruences-and-the-chinese-remainder-theorem`,
  `cyclic-groups-and-direct-products`, `the-structure-of-finite-abelian-groups`
  and `polynomial-rings-and-roots` as direct requirements; all four are reached
  transitively, so the design list was about content rather than about the
  declared reduction. The items actually cited include
  `def-unit-group-modulo-n-and-euler-totient`, `thm-unit-criterion-modulo-n`,
  `thm-chinese-remainder-theorem`, `thm-totient-of-a-prime-power`,
  `thm-linear-congruence-solvability-and-solution-count`, `def-order-in-a-group`,
  `lem-order-characterisation`, `cor-order-of-element-divides-group-order`,
  `def-exponent-of-a-finite-group`, `thm-z-mod-p-is-a-field` and
  `cor-finite-subgroups-of-units-in-a-domain-are-cyclic`.
- **Primary backing:** Peter Hackman, *Elementary Number Theory* (2009),
  Ch. C, §§C.I--C.V, pp. 69--91: "False Cases Excluded," "Primitive Roots
  Modulo a Prime," "Binomial Congruences," "Prime Powers," and "The Carmichael
  Exponent," especially C.I.1--C.I.6, C.II.1--C.II.2,
  C.III.1--C.III.5, C.IV.1--C.IV.10, and C.V.1--C.V.6.
  William Stein, *Elementary Number Theory: Primes, Congruences, and Secrets*
  (2017), §2.5, pp. 39--49, Def. 2.5.1 through Thm. 2.5.8, independently
  supplies cyclicity of \(\mathbb F_p^\times\), the order-count argument, and
  primitive-root enumeration.  Independent full-lecture check: Alexander
  Gorodnik, *Number Theory*, Lecture 8, §§1--2, pp. 1--6, Defs. 1.1, 1.5;
  Lemmas 1.2--1.4; Thms. 2.1, 2.2, 2.4; Cor. 2.3.

**Three ids in the Part I table are dead and must not be revived:**
`lem-order-of-power-of-a-primitive-root` became
`lem-order-of-a-power-in-a-finite-cyclic-group` (it is a statement about any
finite cyclic group, not about a primitive root), `thm-unit-group-crt-decomposition`
became `thm-unit-group-chinese-remainder-decomposition`, and
`thm-unit-group-modulo-n-structure` became
`thm-structure-of-the-unit-group-modulo-n`.

#### A-page items, in dependency order

| id | kind | statement |
|---|---|---|
| `def-primitive-root-modulo-n` | `def` | Primitive roots modulo $n$ |
| `prop-primitive-root-iff-unit-group-generator` | `prop` | A unit is a primitive root modulo $n$ if and only if it generates $(\mathbb Z/n\mathbb Z)^\times$ |
| `def-index-of-a-unit-relative-to-a-primitive-root` | `def` | The index $\operatorname{ind}_g(a)$ of a unit relative to a primitive root |
| `prop-index-calculus-modulo-n` | `prop` | Index calculus: products become sums and powers become scalar multiples modulo $\varphi(n)$ |
| `lem-order-of-a-power-in-a-finite-cyclic-group` | `lem` | In a cyclic group of order $m$, $g^a$ has order $m/\gcd(a,m)$ |
| `cor-generators-of-a-finite-cyclic-group` | `cor` | The generators of a cyclic group of order $m$ are the $g^a$ with $\gcd(a,m)=1$, so there are $\varphi(m)$ of them |
| `lem-direct-product-of-finite-cyclic-groups-is-cyclic-iff-orders-are-coprime` | `lem` | A direct product of two finite cyclic groups is cyclic if and only if their orders are coprime |
| `cor-unit-group-modulo-prime-is-cyclic` | `cor` | For every prime $p$, the multiplicative group $(\mathbb Z/p\mathbb Z)^\times$ is cyclic |
| `cor-primitive-roots-modulo-prime` | `cor` | Every prime modulus admits a primitive root |
| `cor-power-congruence-solution-count-modulo-a-prime` | `cor` | For prime $p$ and $d\ge1$, the congruence $x^d\equiv1\pmod p$ has $\gcd(d,p-1)$ nonzero solutions |
| `thm-eulers-criterion-for-binomial-congruences` | `thm` | Euler's criterion: if $n$ has a primitive root, $\gcd(a,n)=1$, and $m\ge1$, then $x^m\equiv a\pmod n$ is solvable if and only if $a^{\varphi(n)/\gcd(\varphi(n),m)}\equiv1\pmod n$ |
| `cor-number-of-solutions-of-a-binomial-congruence` | `cor` | If $n$ has a primitive root, $\gcd(a,n)=1$, $m\ge1$, and $x^m\equiv a\pmod n$ is solvable, then it has exactly $\gcd(\varphi(n),m)$ solution classes modulo $n$ |
| `lem-primitive-root-lift-to-prime-square` | `lem` | For an odd prime $p$ and a primitive root $g$ modulo $p$, at least one of $g$ and $g+p$ is primitive modulo $p^2$ |
| `lem-prime-power-binomial-congruence` | `lem` | For odd prime $p$ and $s\ge1$, $(1+p^su)^p\equiv1+p^{s+1}u\pmod {p^{s+2}}$ |
| `lem-order-of-one-plus-pu-modulo-prime-powers` | `lem` | For odd prime $p$, $p\nmid u$, and $k\ge1$, the class of $1+pu$ has order $p^{k-1}$ modulo $p^k$ |
| `thm-unit-group-modulo-odd-prime-power-is-cyclic` | `thm` | For every odd prime $p$ and $k\ge1$, $(\mathbb Z/p^k\mathbb Z)^\times$ is cyclic of order $p^{k-1}(p-1)$ |
| `cor-number-of-primitive-roots-modulo-odd-prime-power` | `cor` | An odd prime power $p^k$ has exactly $\varphi(\varphi(p^k))$ primitive roots |
| `lem-order-of-five-modulo-two-powers` | `lem` | For $k\ge3$, the class of $5$ has order $2^{k-2}$ modulo $2^k$ |
| `thm-unit-group-modulo-two-power-structure` | `thm` | For $k\ge3$, $(\mathbb Z/2^k\mathbb Z)^\times\cong C_2\times C_{2^{k-2}}$, generated uniquely as $(-1)^\varepsilon5^j$ |
| `thm-unit-group-chinese-remainder-decomposition` | `thm` | For pairwise coprime positive moduli, the Chinese remainder bijection restricts to an isomorphism of unit groups |
| `thm-structure-of-the-unit-group-modulo-n` | `thm` | The unit group modulo $n$ is the product of its odd-prime cyclic factors and its explicit $2$-power factor |
| `def-carmichael-function` | `def` | Carmichael's function $\lambda(n)$ as the exponent of $(\mathbb Z/n\mathbb Z)^\times$ |
| `prop-carmichael-function-as-maximal-order` | `prop` | Carmichael's $\lambda(n)$ is the maximum order of a unit modulo $n$ |
| `thm-carmichael-function-formula` | `thm` | Carmichael's function on prime powers and its least-common-multiple formula |
| `cor-carmichael-exponent-theorem` | `cor` | If $\gcd(a,n)=1$, then $a^{\lambda(n)}\equiv1\pmod n$ |
| `lem-primitive-roots-pass-between-odd-n-and-twice-n` | `lem` | For odd $n$, primitive-root existence is equivalent for $n$ and $2n$ |
| `thm-classification-of-moduli-with-primitive-roots` | `thm` | A positive integer admits a primitive root exactly when it is $1$, $2$, $4$, $p^k$, or $2p^k$ for an odd prime $p$ |
| `cor-number-of-primitive-roots-modulo-n` | `cor` | A modulus with primitive roots has exactly $\varphi(\varphi(n))$ primitive roots |

The scaffold adds, beyond Part I's list, the **index calculus** thread
(`def-index-of-a-unit-relative-to-a-primitive-root`,
`prop-index-calculus-modulo-n`), which is what turns the cyclic structure into a
computational tool; the two general cyclic-group lemmas
(`lem-order-of-a-power-in-a-finite-cyclic-group`,
`cor-generators-of-a-finite-cyclic-group`) and the coprime-order criterion
`lem-direct-product-of-finite-cyclic-groups-is-cyclic-iff-orders-are-coprime`,
which is what the classification's necessity half needs; the **binomial
congruence** thread (`cor-power-congruence-solution-count-modulo-a-prime`,
`thm-eulers-criterion-for-binomial-congruences`,
`cor-number-of-solutions-of-a-binomial-congruence`), harvested from Hackman
C.III; the isolated induction step `lem-prime-power-binomial-congruence`; and
`lem-primitive-roots-pass-between-odd-n-and-twice-n`, without which the
classification's \(2p^k\) case is asserted rather than proved.

#### Proof strategy, well-definedness, and boundary obligations

The prime case is not reproved by a second order-count argument: the authored
`cor-finite-subgroups-of-units-in-a-domain-are-cyclic` applies directly to the
finite subgroup \(\mathbb F_p^\times\) of the units of a field.  The concrete
corollary is retained because it is the arithmetic interface used repeatedly
below.  Enumeration then follows from the explicit order formula for powers of
one generator.

The prime-power proof exposes the step often suppressed as "a primitive root
lifts."  Expanding \((g+tp)^{p-1}\) modulo \(p^2\) gives a nonconstant affine
function of \(t\pmod p\), so at most one lift is bad.  Once a lift has nontrivial
\((p-1)\)-st power modulo \(p^2\), the binomial induction on
\(1+p^su\) supplies exactly one new factor \(p\) in the order at each stage.
All choices range over an explicitly finite residue set.

For \(2^k\), prove the exact order of \(5\), then show that its powers are
precisely the unit classes congruent to \(1\pmod4\).  Multiplication by \(-1\)
gives the other half.  This proves both existence and uniqueness of
\((-1)^\epsilon5^j\), so the asserted direct product is not merely a cardinality
comparison.  The general CRT map is well defined on residue classes by the
published quotient construction; its inverse is independent of the integer
representative because CRT gives one residue **class** modulo the product.
The restriction to units and the factor-order lcm are proved explicitly.

The displayed decomposition into cyclic factors is not called canonical:
choosing primitive roots chooses those coordinate isomorphisms.  Only the CRT
map induced by the canonical reduction homomorphisms is canonical.  The
Carmichael function is defined as an exponent, which is well defined without
choosing a maximum-order element; attainment is a theorem.  NT-1 is ZF.  Its
finite selections can be replaced by least standard representatives and use
neither countable choice nor dependent choice.

`cor-power-congruence-solution-count-modulo-a-prime` sits *before*
`thm-eulers-criterion-for-binomial-congruences` and is proved independently from
cyclicity of \((\mathbb Z/p)^\times\).  That is deliberate: it is a stepping stone
to the general theorem, not a corollary of it, and it is the \(a=1\), \(n=p\)
instance of `cor-number-of-solutions-of-a-binomial-congruence`, consistent
because \(\gcd(\varphi(p),d)=\gcd(p-1,d)\).

The aside in Gorodnik on the least primitive root and Artin's primitive-root
conjecture is not promoted to an item.  The former is an analytic estimate
conditional on GRH in the cited formulation, and the latter is open in
general; both receive out-of-scope dispositions in the source harvest and are
non-load-bearing boundary remarks at most.

#### B page

The companion computes primitive roots, indices and invariant factors rather
than supplying any theory used by A:

| id | kind | statement |
|---|---|---|
| `ex-primitive-roots-modulo-seventeen` | `ex` | The primitive roots modulo $17$ are $3,5,6,7,10,11,12,14$ |
| `ex-index-table-modulo-seventeen` | `ex` | An index table modulo $17$ turns multiplication into addition modulo $16$ |
| `ex-primitive-root-modulo-thirteen-by-prime-divisor-tests` | `ex` | $2$ is a primitive root modulo $13$ by testing the prime divisors of $12$ |
| `ex-lifting-a-primitive-root-through-powers-of-five` | `ex` | $2$ is primitive modulo every power of $5$ |
| `ex-unit-group-modulo-two-hundred-forty` | `ex` | The unit group modulo $240$ decomposes as $C_2^2\times C_4^2$ |
| `ex-carmichael-function-of-five-hundred-sixty-one` | `ex` | $\lambda(561)=80$ and every integer coprime to $561$ has eightieth power congruent to one |
| `ex-carmichael-function-of-one-thousand-seven-hundred-twenty-nine` | `ex` | $\lambda(1729)=36$ although $\varphi(1729)=1296$ |
| `cex-unit-group-modulo-fifteen-is-not-cyclic` | `cex` | $(\mathbb Z/15\mathbb Z)^\times$ has order $8$ but is not cyclic |
| `cex-euler-totient-need-not-be-the-unit-group-exponent` | `cex` | $\varphi(8)=4$ but every unit modulo $8$ has square one |
| `ex-square-roots-of-one-modulo-one-hundred-twenty-eight` | `ex` | The four square roots of one modulo $128$ are $1,63,65,127$ |
| `ex-moduli-below-twenty-with-primitive-roots` | `ex` | The positive moduli below $20$ admitting primitive roots are $1,2,3,4,5,6,7,9,10,11,13,14,17,18,19$ |

Do not duplicate the already-published
`ex-unit-group-modulo-one-hundred-decomposition` or
`ex-units-modulo-eight-are-not-cyclic`.

### NT-2. Quadratic residues, the Legendre symbol, and Gauss's lemma

- **A page id:** `quadratic-residues-and-the-legendre-symbol`
- **B page id:** `quadratic-residues-and-the-legendre-symbol-examples`
- **Requires:** NT-1; `congruences-and-the-chinese-remainder-theorem`;
  `cyclic-groups-and-direct-products`; and `polynomial-rings-and-roots` for
  the root bound over a field.  No result from the later finite-field or
  \(p\)-adic blocks is used.
- **Primary backing:** Hackman, Ch. D, §D.I “The Legendre Symbol,”
  pp. 107--117, and §D.IV “Gauß' Lemma,” pp. 123--127, especially D.I.1--D.I.9
  and D.IV.1--D.IV.6; Stein, Ch. 4, §§4.1--4.3, PDF pp. 76--83, especially
  Defs. 4.1.1--4.1.2, Lemma 4.1.4, Prop. 4.2.1, Cor. 4.2.3, and Lemma 4.3.1.
  Independent full-lecture check: Gorodnik, Lecture 9, §1, pp. 1--3,
  Defs. 1.1, 1.4 and Thms. 1.2, 1.5, 1.6.

#### A-page items, in dependency order

| id | kind | statement | provenance and locator |
|---|---|---|---|
| `def-quadratic-residue-modulo-n` | `def` | For \(n\ge2\) and \(\gcd(a,n)=1\), \(a\) is a quadratic residue modulo \(n\) if \(x^2\equiv a\pmod n\) for some integer \(x\), and a quadratic nonresidue otherwise. | L/NA; Hackman D.I opening definition; Stein Def. 4.1.1 for prime modulus; Gorodnik Def. 1.1(ii) for general modulus. |
| `prop-quadratic-residue-is-representative-independent` | `prop` | Whether a unit integer \(a\) is a quadratic residue modulo \(n\) depends only on its class in \((\mathbb Z/n\mathbb Z)^\times\), and the quadratic residues are exactly the image of the squaring map on that group. | L/A; Gorodnik Def. 1.1 and Thm. 1.6(ii); translate both sides of the congruence through the published quotient equality criterion. |
| `thm-power-residue-criterion-modulo-prime` | `thm` | If \(p\) is prime, \(p\nmid a\), and \(r\ge1\), then \(x^r\equiv a\pmod p\) is soluble iff \(a^{(p-1)/\gcd(r,p-1)}\equiv1\pmod p\). | L/A; Gorodnik Thm. 1.2.  Write \(a\) and \(x\) as powers of a primitive root and solve the resulting linear congruence in the exponent using published Bézout. |
| `cor-number-of-nth-roots-modulo-prime` | `cor` | Under the preceding hypotheses, a soluble congruence \(x^r\equiv a\pmod p\) has exactly \(\gcd(r,p-1)\) incongruent solutions. | L/A; Hackman B.VI.4 and C.II; Gorodnik proof of Thm. 1.2.  The kernel of multiplication by \(r\) on exponents modulo \(p-1\) has the stated size. |
| `cor-unique-kth-root-modulo-prime-for-coprime-exponent` | `cor` | If \(p\) is prime, \(k\ge1\), and \(\gcd(k,p-1)=1\), then every nonzero residue \(a\pmod p\) has a unique \(k\)-th root.  If \(k\ell\equiv1\pmod{p-1}\), that root is \(a^\ell\pmod p\). | L/A; Mascot, Ch. 3 “Powers in \(\mathbb Z/p\mathbb Z\),” PDF pp. 8--9.  The source proves existence by Bézout and Fermat; uniqueness is the \(\gcd(k,p-1)=1\) case of the preceding root-count corollary.  Independence of the inverse representative \(\ell\) is made explicit using \(a^{p-1}=1\). |
| `thm-quadratic-residues-subgroup-modulo-prime` | `thm` | For odd prime \(p\), the nonzero squares form the subgroup \(((\mathbb Z/p\mathbb Z)^\times)^2=\langle g^2\rangle\) of index \(2\), independently of the selected primitive root \(g\). | L/A; Stein Lemma 4.1.4 and its kernel discussion; Gorodnik Thm. 1.2 at \(r=2\).  The subgroup is defined intrinsically as the image of squaring; \(\langle g^2\rangle\) is a proof description, not the definition. |
| `thm-count-of-quadratic-residues-modulo-prime` | `thm` | Exactly \((p-1)/2\) nonzero classes modulo an odd prime are quadratic residues and exactly \((p-1)/2\) are nonresidues; each nonzero residue has two square roots. | L/A; Hackman D.I.1--D.I.2; Stein Lemma 4.1.4; Gorodnik note after Thm. 1.6. |
| `def-legendre-symbol` | `def` | For odd prime \(p\) and integer \(a\), define \((a/p)=0\) if \(p\mid a\), \(1\) if \(a\) is a quadratic residue modulo \(p\), and \(-1\) if it is a nonresidue. | L/NA; Hackman D.I.3; Stein Def. 4.1.2; Gorodnik Def. 1.4. |
| `prop-legendre-symbol-well-defined` | `prop` | The Legendre symbol has values in \(\{-1,0,1\}\), depends only on \(a\pmod p\), and vanishes exactly when \(p\mid a\). | L/A; Hackman D.I.3 and D.I.8(a); Gorodnik Thm. 1.6(ii).  Representative independence cites the earlier residue-class proposition. |
| `prop-legendre-symbol-on-units-is-homomorphism` | `prop` | Restricted to \((\mathbb Z/p\mathbb Z)^\times\), \(a\mapsto(a/p)\) is the surjective homomorphism onto \(\{\pm1\}\) with kernel the square subgroup; it is the unique nontrivial homomorphism from this cyclic group to \(\{\pm1\}\). | L/A; Stein Lemma 4.1.4 and Remark 4.1.6; Hackman D.I.8(b).  Uniqueness follows from the image of one primitive root, using NT-1. |
| `thm-eulers-criterion-for-legendre-symbol` | `thm` | For every integer \(a\) and odd prime \(p\), \((a/p)\equiv a^{(p-1)/2}\pmod p\); for \(p\nmid a\), both sides are the same element of \(\{\pm1\}\). | L/A; Hackman D.I.4; Stein Prop. 4.2.1 and Cor. 4.2.3; Gorodnik Thm. 1.5.  Handle \(p\mid a\) explicitly. |
| `thm-legendre-symbol-multiplicativity` | `thm` | For all integers \(a,b\), \((ab/p)=(a/p)(b/p)\); squares may therefore be removed from the numerator when they are coprime to \(p\). | L/A; Hackman D.I.8(b)--(c); Gorodnik Thm. 1.6(i),(iii); alternatively evaluate both sides by Euler's criterion and distinguish the zero case. |
| `cor-number-of-solutions-to-quadratic-congruence-modulo-prime` | `cor` | The congruence \(x^2\equiv a\pmod p\) has exactly \(1+(a/p)\) solution classes. | L/A; Gorodnik note after Thm. 1.6; Stein Cor. 4.2.3.  When \(p\mid a\), the sole class is \(0\); otherwise use the two-to-one squaring result. |
| `cor-quadratic-congruence-discriminant-criterion` | `cor` | If \(p\) is odd and \(p\nmid A\), then \(Ax^2+Bx+C\equiv0\pmod p\) has exactly \(1+((B^2-4AC)/p)\) solution classes. | L/A; Gorodnik discussion following Thm. 1.6.  Multiplication by \(4A\) gives the bijective completed-square equation \((2Ax+B)^2\equiv B^2-4AC\). |
| `lem-gauss-half-system-permutation` | `lem` | For \(p\nmid a\), reducing \(a,2a,\ldots,((p-1)/2)a\) to signed representatives \(\pm1,\ldots,\pm(p-1)/2\) uses each absolute representative exactly once. | L/A; Hackman D.IV.1--D.IV.2; Stein proof of Lemma 4.3.1.  Prove injectivity for both equal and opposite signs before using finite cardinality. |
| `thm-gauss-quadratic-residue-lemma` | `thm` | If \(N(a,p)\) is the number of those least positive residues \(aj\pmod p\), \(1\le j\le(p-1)/2\), that exceed \(p/2\), then \((a/p)=(-1)^{N(a,p)}\). | L/A; Hackman D.IV.4; Stein Lemma 4.3.1.  Multiply the signed congruences, cancel \(((p-1)/2)!\) modulo \(p\), and invoke Euler's criterion.  The category-qualified id avoids the differential-geometric Gauss lemma and the published integer-polynomial Gauss lemma. |
| `thm-first-supplement-to-quadratic-reciprocity` | `thm` | For odd prime \(p\), \((-1/p)=(-1)^{(p-1)/2}\), equivalently \(-1\) is a square modulo \(p\) iff \(p\equiv1\pmod4\). | L/A; Hackman D.I.7; Stein Thm. 4.1.7; Gorodnik Thm. 1.6(iv).  This also follows immediately from Euler's criterion. |
| `thm-second-supplement-to-quadratic-reciprocity` | `thm` | For odd prime \(p\), \((2/p)=(-1)^{(p^2-1)/8}\), equivalently \(2\) is a square modulo \(p\) iff \(p\equiv\pm1\pmod8\). | L/A; Hackman D.IV.6; Stein Thm. 4.1.7; Gorodnik Thm. 2.3.  Count exactly the doubled half-system representatives crossing \(p/2\). |

#### Proof strategy, well-definedness, and choice

The first definition deliberately concerns unit classes for a general modulus;
the zero value in the Legendre symbol is then a separate exhaustive case.  If
\(a\equiv a'\pmod n\), the congruences \(x^2\equiv a\) and
\(x^2\equiv a'\) define the same subset of \(\mathbb Z/n\mathbb Z\), proving
representative independence before any symbol is introduced.  The notation
\((a/p)\) is never treated as a quotient.

Power residues are solved in the cyclic exponent group from NT-1.  This gives
the square subgroup, its cardinality, and the Legendre homomorphism without a
choice of “a nonsquare.”  Euler's criterion is then an equality between two
\(\{\pm1\}\)-valued homomorphisms on the units, with the divisible case added
separately.  The proof of Gauss's lemma records the signed-representative
permutation explicitly; cancellation is legitimate because none of
\(1,\ldots,(p-1)/2\) is divisible by \(p\).

All constructions are finite and NT-2 is ZF.  A primitive root may be selected
inside the proof of a theorem asserting one exists; no family of such choices
over all primes is formed.  The source convention that “quadratic residue” is
restricted to \(p\nmid a\) is retained for the residue/nonresidue dichotomy,
while the Legendre symbol handles \(p\mid a\) by zero.

#### B page

| id | kind | task |
|---|---|---|
| `ex-quadratic-residues-and-nonresidues-modulo-eleven` | `ex` | Compute the square subgroup, the two roots of each residue, and the Legendre table modulo \(11\). |
| `ex-power-residues-modulo-seventeen` | `ex` | Apply the general power-residue criterion to fourth and eighth powers modulo \(17\). |
| `ex-euler-criterion-with-a-large-prime` | `ex` | Decide a Legendre symbol by fast exponentiation without factoring its numerator. |
| `ex-gauss-lemma-for-three-modulo-eleven` | `ex` | Display the signed half-system permutation and recover \((3/11)\). |
| `ex-quadratic-congruence-from-its-discriminant` | `ex` | Count and find the roots of a nonmonic quadratic congruence by completing the square. |
| `cex-squaring-on-units-is-not-a-homomorphism-nonabelian-warning` | `cex` | Explain why the squaring-map argument used here relies on the abelian unit group and is not a general group fact. |
| `cex-quadratic-residue-definition-excludes-nonunits` | `cex` | Contrast the soluble congruence \(x^2\equiv0\pmod p\) with the unit residue/nonresidue dichotomy and the zero Legendre value. |

### NT-3. Quadratic reciprocity, the Jacobi symbol, and square roots modulo \(n\)

- **A page id:** `quadratic-reciprocity-and-the-jacobi-symbol`
- **B page id:** `quadratic-reciprocity-and-the-jacobi-symbol-examples`
- **Requires:** NT-1--NT-2 and the three published elementary number-theory
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
| `lem-gauss-lower-half-lattice-count` | `lem` | For distinct odd primes \(p,q\), if \(S_{p,q}\) counts integer pairs \((x,y)\) with \(1\le x\le(p-1)/2\) and \(0<py<qx\), then \((q/p)=(-1)^{S_{p,q}}\). | L/A; Hackman D.V.1 and the count below it; Stein Lemmas 4.3.1--4.3.3.  This is the floor-sum form of Gauss's lemma stated as a finite set, so it has no forward dependency on the later floor function. |
| `lem-reciprocity-rectangle-lattice-count` | `lem` | The two disjoint finite sets counted by \(S_{p,q}\) and \(S_{q,p}\) partition the lattice points in \(0<x<p/2, 0<y<q/2\); hence \(S_{p,q}+S_{q,p}=(p-1)(q-1)/4\). | L/A; Hackman rectangle proof, pp. 128--129; Gorodnik proof of Thm. 2.1.  Coprimality proves that no lattice point lies on \(py=qx\). |
| `thm-quadratic-reciprocity` | `thm` | For distinct odd primes \(p,q\), \((p/q)(q/p)=(-1)^{(p-1)(q-1)/4}\); equivalently the symbols agree unless both primes are \(3\pmod4\), when they are opposite. | L/A; Hackman D.V; Stein Thm. 4.1.7 and §4.3; Gorodnik Thm. 2.1.  Multiply the two sign formulas and substitute the exact lattice count. |
| `def-jacobi-symbol` | `def` | For odd \(n\ge1\) with prime factorisation \(n=\prod p_i^{e_i}\), define \((a/n)=\prod (a/p_i)^{e_i}\), with the empty product \((a/1)=1\); thus the value is \(0\) exactly when \(\gcd(a,n)>1\). | L/NA; Gorodnik Lecture 10, Def. 1.1; Hackman D.II.1, with the zero convention amended as explained below. |
| `prop-jacobi-symbol-well-defined` | `prop` | The Jacobi symbol is independent of the ordering and presentation of the prime factorisation, takes values in \(\{-1,0,1\}\), and depends only on \(a\pmod n\). | L/A; Gorodnik Lecture 10, Def. 1.1 and Thm. 1.2(v); uniqueness of published canonical prime factorisation proves independence. |
| `thm-jacobi-symbol-multiplicativity` | `thm` | For odd positive \(m,n\), the Jacobi symbol is multiplicative in both slots: \((ab/n)=(a/n)(b/n)\) and \((a/mn)=(a/m)(a/n)\), without a coprimality assumption between \(m\) and \(n\). | L/A; Hackman D.II.3; Gorodnik Lecture 10, Thm. 1.2(i)--(ii).  The zero cases follow from the same prime-factor product. |
| `thm-jacobi-symbol-supplements-and-reciprocity` | `thm` | For odd positive \(n\), \((-1/n)=(-1)^{(n-1)/2}\) and \((2/n)=(-1)^{(n^2-1)/8}\); for coprime odd positive \(m,n\), \((m/n)(n/m)=(-1)^{(m-1)(n-1)/4}\). | L/A; Hackman D.II.4; Gorodnik Lecture 10, reciprocity theorem.  Multiply the prime Legendre laws with multiplicity and reduce the parity exponents explicitly. |
| `thm-binary-algorithm-for-jacobi-symbol` | `thm` | Repeatedly reducing the numerator modulo the odd denominator, removing powers of \(2\), and swapping numerator and denominator with the reciprocity sign computes \((a/n)\) without factoring \(n\); it terminates at denominator \(1\) or detects a nontrivial gcd and returns \(0\). | L/A; Hackman D.II.5; Gorodnik Lecture 10, §2.  Termination is by strict decrease of the nonnegative denominator after reduction and swap. |
| `prop-jacobi-one-necessary-not-sufficient-for-residue` | `prop` | If \(\gcd(a,n)=1\) and \(a\) is a square modulo odd \(n\), then \((a/n)=1\); the converse fails, for example \((2/15)=1\) although \(2\) is not a square modulo \(15\). | L/A; Hackman D.II.2; Gorodnik Lecture 10 following Def. 1.1.  Necessity reduces the square congruence at every prime divisor; failure is checked modulo \(3\) or \(5\). |
| `lem-nonsingular-square-root-lift-modulo-odd-prime-powers` | `lem` | If \(p\) is odd, \(p\nmid a\), and \(x_k^2\equiv a\pmod {p^k}\), there is a unique \(t\pmod p\) for which \((x_k+tp^k)^2\equiv a\pmod {p^{k+1}}\). | L/A; Gorodnik Lecture 7, Thm. 1.1 at \(f(X)=X^2-a\); Hackman B.VII lifting discussion.  Divide the error by \(p^k\) and solve one linear congruence with invertible coefficient \(2x_k\). |
| `thm-unit-square-criterion-modulo-odd-prime-powers` | `thm` | For odd prime \(p\), \(k\ge1\), and \(p\nmid a\), \(x^2\equiv a\pmod {p^k}\) is soluble iff \((a/p)=1\), and then it has exactly two solution classes. | L/A; Gorodnik Lecture 7, Thm. 1.1 and Ex. 1.3; Hackman B.VII.  Reduce necessity modulo \(p\), then lift each of the two roots uniquely and show every higher root reduces to one of them. |
| `thm-unit-square-criterion-modulo-two-powers` | `thm` | For odd \(a\), modulo \(2\) there is one square root; modulo \(4\) there are two iff \(a\equiv1\pmod4\); and modulo \(2^k\), \(k\ge3\), there are four iff \(a\equiv1\pmod8\), and none otherwise. | L/A; Hackman B.IV.1--B.IV.3 and C.IV.3; infer sufficiency and the kernel size from NT-1's \(C_2\times C_{2^{k-2}}\) structure, while direct expansion proves every odd square is \(1\pmod8\). |
| `thm-unit-square-criterion-modulo-n` | `thm` | Let \(n=2^e\prod p_i^{a_i}\) and \(\gcd(a,n)=1\).  Then \(a\) is a square modulo \(n\) iff it satisfies the preceding local criterion at every prime-power factor. | L/A; Hackman B.IV and D.II.2; apply `thm-unit-group-crt-decomposition` to the squaring map. |
| `cor-number-of-square-roots-of-a-unit-modulo-n` | `cor` | Under the same hypotheses, the number of square roots is the product of the local counts: each soluble odd prime-power factor contributes \(2\), while the \(2\)-part contributes \(1,1,2\), or \(4\) for \(e=0,1,2\), or \(e\ge3\), respectively. | L/A; Hackman B.IV.1--B.IV.3; the CRT bijection identifies the global root set with the product of local root sets. |

#### Complete reciprocity proof and other obligations

This page supplies a complete proof of quadratic reciprocity.  NT-2 first
proves Gauss's lemma.  For fixed \(p,q\), count the lower-half multiples of
\(q\) as the lattice points satisfying \(1\le x\le(p-1)/2\) and
\(0<py<qx\); parity gives \((q/p)\).  Interchanging \(p,q\) counts the points
above the diagonal in the rectangle.  Since \(p,q\) are distinct primes,
\(py=qx\) has no interior lattice point.  The two counts therefore add to
\((p-1)(q-1)/4\), and multiplying their signs gives the theorem.  Every
inequality is over integers or rationals, so neither floor notation nor a
later real-analysis result is concealed in the proof.

The Jacobi definition has a genuine convention fork.  Hackman D.II.1 defines
it only for \(\gcd(a,n)=1\) and remarks that assigning zero otherwise is “not
unnatural”; Gorodnik Def. 1.1 and most analytic-number-theory treatments use
zero.  The library adopts the zero extension because it agrees with the
Legendre symbol, makes numerator multiplicativity unconditional, and later
makes a Dirichlet character a function on all integers.  The empty product at
\(n=1\) is stated, and uniqueness of prime factorisation is the explicit
well-definedness proof.

The lifting lemma is a specialised, directly proved congruence lemma, not a
second definition or general theorem called Hensel's lemma.  The later local
block cites the commutative-algebra owner's general Henselian result.  CRT
counts classes rather than chosen integer representatives, so multiplying
local root counts is well defined.  NT-3 is ZF; all products and selections
are finite, and the Jacobi algorithm is deterministic after taking least
nonnegative remainders.

#### B page

| id | kind | task |
|---|---|---|
| `ex-complete-reciprocity-table-for-small-odd-primes` | `ex` | Check the reciprocity sign in every pair among \(3,5,7,11\) against direct square tables. |
| `ex-jacobi-symbol-by-the-binary-algorithm` | `ex` | Evaluate a large Jacobi symbol step by step without factoring its denominator. |
| `cex-jacobi-symbol-one-does-not-imply-a-square` | `cex` | Work out \((2/15)=1\) and show the obstruction already modulo \(3\). |
| `ex-square-roots-modulo-an-odd-prime-power` | `ex` | Lift both roots of \(x^2\equiv2\pmod7\) through a specified power of \(7\). |
| `ex-four-square-roots-modulo-a-power-of-two` | `ex` | Find the four roots of one unit congruent to \(1\pmod8\) modulo \(2^k\). |
| `ex-square-roots-modulo-a-composite-by-crt` | `ex` | Combine odd and \(2\)-power local roots and verify the product count. |
| `cex-square-modulo-each-prime-does-not-ignore-the-two-part` | `cex` | Give an odd unit that is square at every odd prime divisor of \(n\) but fails the \(2^e\) criterion. |
| `ex-primes-dividing-x-squared-plus-three` | `ex` | Use reciprocity to constrain odd prime divisors of \(x^2+3\), separating the exceptional prime \(3\). |

### NT-4. Fermat's two-square theorem and the representation of integers

- **A page id:** `sums-of-two-squares`
- **B page id:** `sums-of-two-squares-examples`
- **Requires:** NT-2--NT-3; the published factorisation, congruence, finite-set
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
| `def-sum-of-two-squares-representation` | `def` | A representation of a nonnegative integer \(n\) as a sum of two squares is an ordered pair \((x,y)\in\mathbb Z^2\) with \(n=x^2+y^2\); it is primitive when \(\gcd(x,y)=1\). | L/NA; Hackman E.I opening and E.II.4; Stein Thm. 5.7.1.  “Ordered” makes later representation counts unambiguous; existence ignores order and signs. |
| `lem-brahmagupta-fibonacci-two-square-identity` | `lem` | \((a^2+b^2)(c^2+d^2)=(ac-bd)^2+(ad+bc)^2=(ac+bd)^2+(ad-bc)^2\) for all integers \(a,b,c,d\). | L/L; Hackman E.II.1; Stein (5.7.1).  Verify by expansion. |
| `cor-sums-of-two-squares-closed-under-products` | `cor` | The product of two nonnegative integers representable as sums of two squares is again so representable. | L/A; Hackman E.II.1; apply either displayed identity, including the zero boundary case. |
| `lem-three-mod-four-prime-dividing-two-square-sum` | `lem` | If \(p\equiv3\pmod4\) is prime and \(p\mid x^2+y^2\), then \(p\mid x\) and \(p\mid y\), hence \(p^2\mid x^2+y^2\). | L/A; Hackman proof of E.II.2; Stein Lemma 5.7.4.  If one coordinate were a unit modulo \(p\), division would make \(-1\) a square, contradicting NT-2's first supplement. |
| `lem-thue-small-representatives` | `lem` | If \(p\) is prime and \(p\nmid a\), there are nonzero integers \(r,s\) with \(|r|,|s|<\sqrt p\) and \(ra\equiv s\pmod p\). | L/A; Hackman Lemma E.I.1, restricted to the exact case used here.  Apply strong pigeonhole to the more than \(p\) pairs in the largest integral square lying below \(\sqrt p\), mapped to \(ia-j\pmod p\), then subtract the colliding pairs; write the finite bound without depending on the later general floor-function item. |
| `thm-fermat-two-square-theorem-for-primes` | `thm` | A prime \(p\) is a sum of two integer squares iff \(p=2\) or \(p\equiv1\pmod4\). | L/A; Hackman Thm. E.I.2; Stein's sufficiency proof of Thm. 5.7.1.  For \(p\equiv1\pmod4\), choose \(a^2\equiv-1\pmod p\) by NT-2, apply Thue's lemma, and use \(0<r^2+s^2<2p\) to turn divisibility by \(p\) into equality. |
| `thm-uniqueness-of-two-square-representation-of-a-prime` | `thm` | If \(p\equiv1\pmod4\) is prime, there are unique positive integers \(x\) odd and \(y\) even with \(p=x^2+y^2\); all ordered signed representations arise from this one by signs and interchange. | L/A; Hackman Thm. E.I.3.  Its factorisation argument shows that two essentially different representations force a nontrivial factorisation of the odd integer. |
| `lem-two-square-representations-of-prime-powers` | `lem` | Every power of \(2\) and every power of a prime \(p\equiv1\pmod4\) is a sum of two squares; a power of \(q\equiv3\pmod4\) is representable exactly when its exponent is even. | L/A; Hackman E.II.1--E.II.2; iterate the product identity for the first two cases, use \(q^{2j}=(q^j)^2+0^2\), and use the preceding divisibility lemma for necessity. |
| `thm-sum-of-two-squares-characterisation` | `thm` | A positive integer \(n\) is a sum of two squares iff every prime \(q\equiv3\pmod4\) occurs to an even exponent in its canonical prime factorisation. | L/A; Hackman Thm. E.II.2; Stein Thm. 5.7.1.  Sufficiency multiplies the prime-power representations; necessity repeatedly divides both coordinates by each such \(q\). |
| `thm-primitive-sum-of-two-squares-characterisation` | `thm` | A positive integer has a primitive two-square representation iff \(v_2(n)\le1\) and no prime \(q\equiv3\pmod4\) divides \(n\). | L/A; Hackman Thm. E.II.4 and Lemmas E.II.5--E.II.6.  Necessity is local; sufficiency combines primitive prime-power representations while preserving coprimality. |
| `cor-squarefree-sum-of-two-squares-characterisation` | `cor` | A squarefree positive integer is a sum of two squares iff none of its odd prime factors is \(3\pmod4\); every such representation is primitive. | L/A; immediate specialisation of Hackman E.II.2 and E.II.4, with squarefree \(v_2(n)\le1\). |

#### Proof strategy, well-definedness, and boundary

Thue's lemma is written without a hidden real floor dependency.  Let \(h\) be
the largest natural number with \(h^2<p\); existence and maximality follow by
finite search below \(p\).  Since a prime is not a nontrivial square,
\((h+1)^2>p\), so the \((h+1)^2\) pairs in the
square \(0\le i,j\le h\) outnumber the residue classes modulo \(p\).  Two
pairs collide.  Coprimality forces both coordinate differences to be nonzero,
and their absolute values are at most \(h<\sqrt p\).  This is precisely
Hackman's pigeonhole proof with its floor notation eliminated at the low
anchor.

For Fermat's theorem, the first supplement supplies a square root of \(-1\)
modulo \(p\); the small representatives produce a positive multiple of \(p\)
strictly below \(2p\), hence exactly \(p\).  The composite criterion then uses
only canonical integer factorisation and the displayed identity.  Necessity
must iterate the \(q\mid x,y\) conclusion to show that the **entire** exponent
of every \(q\equiv3\pmod4\) is even, rather than stopping after \(q^2\mid n\).

This low page does not rebuild the Gaussian integers, a Euclidean algorithm in
\(\mathbb Z[i]\), or unique factorisation there.  Hackman Ch. K gives that
beautiful alternate treatment, but general number rings and their prime
factorisation belong to the post-commutative-algebra block.  The arithmetic
formula for the number \(r_2(n)\) of ordered signed representations is retained
for the later arithmetic-function pair, where its divisor-sum form belongs.
NT-4 is ZF: the only selection is from explicitly finite sets, and least
indices can be used throughout.

#### B page

| id | kind | task |
|---|---|---|
| `ex-thue-lemma-produces-a-two-square-representation` | `ex` | Starting from a square root of \(-1\) modulo a prime, carry out the finite collision argument and recover the prime as two squares. |
| `ex-two-square-representations-from-prime-factorisation` | `ex` | Construct representations of a composite by allocating its prime-power factors and applying the identity. |
| `cex-an-odd-three-mod-four-valuation-obstructs-two-squares` | `cex` | Locate the obstructing prime and show directly why it divides both putative coordinates. |
| `ex-two-essentially-different-representations-force-compositeness` | `ex` | Use Hackman's factorisation from two representations to exhibit proper factors of the represented odd integer. |
| `ex-primitive-two-square-representation-criterion` | `ex` | Compare integers satisfying the existence criterion with those satisfying the stricter primitive criterion. |
| `cex-four-dividing-n-forces-a-nonprimitive-two-square-representation` | `cex` | Reduce squares modulo \(4\) to show both coordinates must be even. |
| `ex-squarefree-sums-of-two-squares` | `ex` | Classify and construct the squarefree examples in a finite interval. |

### NT-5. Lagrange's four-square theorem

- **A page id:** `lagrange-four-square-theorem`
- **B page id:** `lagrange-four-square-theorem-examples`
- **Requires:** NT-2 and the published prime-factorisation, congruence, and
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
quotient by signs or permutations requires a well-definedness proof.  NT-5 is
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

### NT-6. Positive-definite binary quadratic forms and reduction

- **A page id:** `positive-definite-binary-quadratic-forms-and-reduction`
- **B page id:** `positive-definite-binary-quadratic-forms-and-reduction-examples`
- **Requires:** NT-3--NT-4, the authored integer/congruence pages, and the
  authored matrix and group-action material through `splitting-fields`.
  Only the concrete action of \(\mathrm{SL}_2(\mathbb Z)\) is developed here;
  the group itself and matrix inversion are cited.
- **Primary backing:** William Stein, *Elementary Number Theory and Elliptic
  Curves* (complete author-hosted 2003 text), Ch. 9, §§9.2--9.4,
  pp. 116--124: §9.2.1 “Introduction,” §9.2.2 “Equivalence,” Def. 9.2.2,
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
| `lem-leading-coefficient-bound-for-a-reduced-form` | `lem` | If a reduced positive-definite form has discriminant \(\Delta\), then \(a\le\sqrt{|\Delta|/3}\), and \(c\le |\Delta|/3\) after the finite coefficient constraints are imposed. | L/A; Stein proof of Prop. 9.4.1.  From \(b^2\le a^2\le ac\), obtain \(|\Delta|=4ac-b^2\ge3a^2\); use \(c=(b^2-\Delta)/(4a)\) for enumeration rather than claiming an unsourced symmetric bound. |
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
from improper equivalence.  A future post-commutative-algebra quadratic-order
page must build the form--ideal correspondence and obtain the group law from
ideal multiplication; none of NT-19--NT-24 silently supplies it.  Nor is the positive-definite uniqueness
statement extended to \(\Delta>0\): Granville §4.6 shows that an indefinite
class generally contains a cycle of reduced forms.  The indefinite
reduction/Pell/narrow-class seam is recorded below.  NT-6 is ZF; reduction and
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
| `cex-indefinite-classes-have-cycles-of-reduced-forms` | `cex` | Exhibit a positive-discriminant reduction cycle, warning against importing the NT-6 uniqueness theorem. |

### NT-7. Regular continued fractions and Diophantine approximation

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
| `thm-normalized-finite-continued-fraction-uniqueness` | `thm` | Every noninteger rational has exactly two finite regular expansions, related by \([a_0;\ldots,a_n]=[a_0;\ldots,a_n-1,1]\) when \(a_n>1\); an integer \(m\) has the two expansions \([m]\) and \([m-1;1]\).  The expansion of length zero, or with final digit at least \(2\), is unique. | L/A; Hackman G.VI and Stein §7.1.  Prohibit a terminal zero, so the normal form is genuinely unique. |
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
divisibility, sign, and bound conditions visible.  NT-7 is ZF: the integer part,
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

### NT-8. Pell equations and generalized Pell orbits

- **A page id:** `pell-equations-and-generalized-pell-orbits`
- **B page id:** `pell-equations-and-generalized-pell-orbits-examples`
- **Requires:** NT-7, the authored integer arithmetic and congruence pages, and
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
negative Pell, use NT-7's approximation criterion with its precise strict
bound; do not assert that every solution of an arbitrary generalized Pell
equation is a convergent.

The generalized orbit theorem uses the real embedding only to select the
unique integer exponent landing in a specified half-open logarithmic interval.
The resulting coordinate bounds make the representative search finite.  This
also proves its well-definedness without choosing one representative from each
orbit.  NT-8 is ZF: minima are least positive integers, the exponent is a
floor, and all terminal searches are finite.

#### B page

| id | kind | task |
|---|---|---|
| `ex-pell-equation-for-two` | `ex` | Derive \([1;\overline2]\), the fundamental solution \(3+2\sqrt2\), and the first several powers. |
| `ex-pell-equation-for-three` | `ex` | Compute the even period of \(\sqrt3\), solve norm \(+1\), and prove norm \(-1\) insoluble. |
| `ex-negative-pell-equation-for-five` | `ex` | Use the odd period to obtain \(2^2-5\cdot1^2=-1\) and square it to get the fundamental norm-one solution. |
| `ex-pell-equation-for-fourteen` | `ex` | Reuse the complete-quotient states from NT-7 and identify which convergent first has norm \(+1\). |
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

### NT-9. Arithmetic functions and Dirichlet convolution

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
| `cor-number-of-monic-irreducible-polynomials-over-a-finite-field` | `cor` | If \(N_n(q)\) is the number of monic irreducible polynomials of degree \(n\) over \(\mathbb F_q\), then \(N_n(q)=\frac1n\sum_{d\mid n}\mu(d)q^{n/d}\). | L/A; cite GA-3's identity \(\sum_{d\mid n}dN_d(q)=q^n\) and apply the published `cor-classical-mobius-inversion`.  This later page supplies the closed form without moving Möbius inversion below its published position or re-proving finite-field factorisation. |
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

NT-9 is ZF.  Prime factorisations and divisor lists are canonical finite data,
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

### NT-10. Average orders, divisor sums, and representation counts

- **A page id:** `average-orders-divisor-sums-and-representation-counts`
- **B page id:** `average-orders-divisor-sums-and-representation-counts-examples`
- **Requires:** NT-4 and NT-9; the published Möbius-inversion and
  Gregory--Leibniz-series items; finite sums, real logarithms, and the existing
  big-O calculus.
- **Primary backing:** Crisman, Ch. 20 “Long-Term Function Behavior,” §§20.1
  “Sums of Squares, Once More,” 20.2 “Average of Tau,” 20.3 “Digging Deeper
  and Finding Limits,” 20.4 “Heuristics for the Sum of Divisors,” and 20.5
  “Looking Ahead,” together with §24.6.4 “The average value of Euler phi.”
  Independent complete-note backing is Tom Sanders, *Topics in Analytic
  Number Theory*, Ch. 1, Props. 1.3--1.5, pp. 2--6.  Marius Overholt,
  *A Course in Analytic Number Theory*, official AMS Ch. 1 preview, §1.1,
  printed pp. 19--21, gives the quantitative Möbius calculation for the
  summatory totient.  Crisman §20.4 displays the divisor-pair reindexing and
  complete error calculation for the sum-of-divisors estimate.

#### A-page items, in dependency order

| id | kind | statement | provenance and locator |
|---|---|---|---|
| `def-summatory-function-and-average-order` | `def` | For \(f\), write \(F(x)=\sum_{n\le x}f(n)\).  A function \(g\) is an average order of \(f\) when \(\sum_{n\le x}f(n)\sim\sum_{n\le x}g(n)\), with the comparison sum eventually nonzero. | L/NA; Crisman §§20.2--20.3; Sanders Ch. 1.  This definition concerns summatory asymptotics, not pointwise approximation. |
| `def-euler-mascheroni-constant` | `def` | \(\gamma=\lim_{n\to\infty}(\sum_{k=1}^n1/k-\log n)\). | L/NA; Sanders Prop. 1.3; Crisman §20.3.  Existence is proved in the next item, rather than presumed in the definition. |
| `lem-harmonic-sum-asymptotic` | `lem` | Uniformly for real \(x\ge1\), \(\sum_{n\le x}1/n=\log x+\gamma+O(1/x)\). | L/L; Sanders Prop. 1.3; Crisman §20.3.  Compare each rectangle with the integral of \(1/t\) and retain the convergent nonnegative remainder. |
| `thm-dirichlet-hyperbola-method` | `thm` | If \(F,G\) are the summatory functions of \(f,g\), and \(U,V\ge1\) satisfy \(UV=x\), then \(\sum_{n\le x}(f*g)(n)=\sum_{a\le U}f(a)G(x/a)+\sum_{b\le V}g(b)F(x/b)-F(U)G(V)\). | L/L; Sanders proof of Prop. 1.4; Overholt Ch. 1, §1.6.  Partition the finite lattice points \(ab\le x\) into the two arms and subtract their rectangular overlap. |
| `thm-divisor-counting-summatory-estimate` | `thm` | For real \(x\ge1\), \(\sum_{n\le x}\tau(n)=x\log x+(2\gamma-1)x+O(\sqrt x)\). | L/L; Sanders Prop. 1.4; Overholt Ch. 1, §1.6.  Apply the hyperbola identity with \(U=V=\sqrt x\) and keep the floor errors through the overlap term. |
| `cor-average-order-of-divisor-counting-function` | `cor` | \(\log n\) is an average order of \(\tau(n)\). | L/A; Crisman Facts 20.2.2 and 20.3.5; immediate from the preceding estimate and the authored summatory estimate for \(\log n\). |
| `thm-divisor-sum-summatory-estimate` | `thm` | \(\sum_{n\le x}\sigma(n)=\frac{\pi^2}{12}x^2+O(x\log x)\). | L/L; Crisman §20.4; the source displays the same reindexing and error term.  Reindex the divisor pairs as \(\sum_{m\le x}\sum_{d\le x/m}d\), use \(\sum_{d\le y}d=y^2/2+O(y)\), and cite the authored Basel sum. |
| `cor-average-order-of-divisor-sum-function` | `cor` | \((\pi^2/6)n\) is an average order of \(\sigma(n)\). | L/A; Crisman §§20.4--20.5.  Sum the proposed average order and compare its main term with the preceding theorem. |
| `thm-euler-totient-summatory-estimate` | `thm` | \(\sum_{n\le x}\varphi(n)=\frac{3}{\pi^2}x^2+O(x\log x)\). | L/L; Overholt Ch. 1, §1.1, printed pp. 19--21; Crisman Prop. 24.6.7 independently supplies the asymptotic.  Expand \(\varphi=\mu*\operatorname{id}_1\), estimate the finite inner arithmetic progression, and control the tail of \(\sum\mu(d)/d^2=1/\zeta(2)\). |
| `cor-average-order-of-euler-totient` | `cor` | \((6/\pi^2)n\) is an average order of \(\varphi(n)\). | L/A; Crisman §24.6.4; follows by summing the linear comparison function. |
| `thm-coprime-pair-counting-asymptotic` | `thm` | The number of ordered pairs \((a,b)\) with \(1\le a,b\le x\) and \(\gcd(a,b)=1\) is \(\frac6{\pi^2}x^2+O(x\log x)\). | L/L; Crisman §24.6.4; Overholt Ch. 1, §1.1 supplies the equivalent summatory-totient calculation.  Insert \(\sum_{d\mid(a,b)}\mu(d)\), interchange only finite sums, and estimate \(\sum_{d\le x}\mu(d)\lfloor x/d\rfloor^2\). |
| `cor-asymptotic-density-of-coprime-pairs` | `cor` | The proportion of pairs in \(\{1,\ldots,n\}^2\) that are coprime tends to \(6/\pi^2\). | L/A; the preceding theorem after division by \(n^2\).  This is a limit of finite uniform proportions, not an assertion about a uniform probability distribution on all positive integers. |
| `def-two-square-representation-function` | `def` | \(r_2(n)=\#\{(x,y)\in\mathbb Z^2:x^2+y^2=n\}\), counting order and signs separately. | L/NA; Crisman §20.1; Hackman Ch. E.  The convention gives \(r_2(1)=4\) and \(r_2(0)\) is outside the domain. |
| `lem-normalized-two-square-count-is-multiplicative` | `lem` | The arithmetic function \(r_2/4\) is multiplicative, with prime-power values \(1\) for \(2^a\), \(a+1\) for \(p^a\) when \(p\equiv1\pmod4\), and \(1\) or \(0\) according as \(a\) is even or odd when \(p\equiv3\pmod4\). | L/L; Hackman Chs. E and K.III; Crisman §20.1.  Use NT-4's prime representation and uniqueness results and the sourced sign-normalized composition/factorisation bijection; do not make an unproved surjectivity claim from the two-square identity alone. |
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
argument.  NT-10 is ZF: all rearrangements are of finite sums and all limiting
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

### NT-11. Chebyshev bounds and Mertens' theorems

- **A page id:** `chebyshev-bounds-and-mertens-theorems`
- **B page id:** `chebyshev-bounds-and-mertens-theorems-examples`
- **Requires:** NT-9--NT-10, the authored Abel-summation lemma, binomial
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
| `lem-chebyshev-psi-prime-power-expansion` | `lem` | \(\psi(x)=\sum_{p^k\le x}\log p=\sum_{k\ge1}\vartheta(x^{1/k})\), with both sums finite. | L/L; Shoup §5.1; direct expansion of NT-9's von Mangoldt definition. |
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
exponentiating an \(O(1)\) term.  NT-11 is ZF: all prime and binomial lists are
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

### NT-12. Dirichlet series and Euler products

- **A page id:** `dirichlet-series-and-euler-products`
- **B page id:** `dirichlet-series-and-euler-products-examples`
- **Requires:** NT-9--NT-11; the authored Abel-summation lemma and extended
  reals; complex-series local uniform convergence; and the planned CA-22
  items `def-riemann-zeta-function` and `thm-euler-product-for-riemann-zeta`.
  Zeta's
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
| `thm-uniqueness-of-dirichlet-series-coefficients` | `thm` | If two arithmetic functions \(f,g:\mathbb Z_{>0}\to\mathbb C\) have absolutely convergent Dirichlet series on a common right half-plane and those series agree throughout that half-plane, then \(f=g\). | L/L; Evertse, *Analytic Number Theory: Prime Number Theory*, Ch. 2, Thm. 2.1.6, PDF p. 5.  For the least \(m\) with \(f(m)\ne g(m)\), multiply the zero difference series by \(m^s\) and let real \(s\to+\infty\); absolute convergence at one fixed ordinate uniformly dominates the tail. |
| `thm-dirichlet-series-summatory-integral` | `thm` | If \(A(x)=\sum_{n\le x}a_n\) and \(A(x)=O(x^\theta)\), then for \(\Re s>\theta\), \(\sum a_nn^{-s}=s\int_1^\infty A(x)x^{-s-1}\,dx\); the corresponding finite formula includes its endpoint term. | L/L; Tomczak Thm. 3.5; Kedlaya Ch. 1 Def. 1.3.  Derive the finite identity from Abel summation and prove the boundary term tends to zero before taking the improper limit. |
| `thm-dirichlet-series-multiplication-convolution` | `thm` | In any common half-plane of absolute convergence, \((\sum f(n)n^{-s})(\sum g(n)n^{-s})=\sum(f*g)(n)n^{-s}\). | L/L; Kedlaya Def. 2.5; Tomczak Thm. 3.2.  Absolute convergence licenses the Cauchy-product regrouping by \(mn\), whose coefficient is the finite divisor sum. |
| `thm-multiplicative-dirichlet-series-euler-product` | `thm` | If \(f\) is multiplicative and \(\sum |f(n)|n^{-\sigma}<\infty\), then \(\sum f(n)n^{-s}=\prod_p\sum_{k\ge0}f(p^k)p^{-ks}\) for \(\Re s\ge\sigma\), with the product taken in increasing-prime order or as the net over finite prime sets. | L/L; Kedlaya Def. 2.6; Tomczak Thm. 3.2.  First identify every finite prime product by FTA, then pass to the limit using absolute convergence. |
| `cor-completely-multiplicative-dirichlet-series-euler-product` | `cor` | For completely multiplicative \(f\) in its absolute half-plane, \(\sum f(n)n^{-s}=\prod_p(1-f(p)p^{-s})^{-1}\). | L/A; Kedlaya Def. 2.7.  Each local series is geometric and its denominator is nonzero because \(|f(p)p^{-s}|<1\) follows from absolute convergence. |
| `thm-landau-dirichlet-series` | `thm` | If \(a_n\ge0\) and the Dirichlet series has finite abscissa of convergence \(\sigma_c\), then \(s=\sigma_c\) is a singular point of the holomorphic function defined in \(\Re s>\sigma_c\). | L/L; Kedlaya Thm. 2.4; Tomczak Thm. 3.6.  Assuming a regular neighbourhood, expand at a real point to the right and use nonnegative coefficients plus Tonelli for nonnegative finite partial sums to continue past the abscissa. |
| `thm-von-mangoldt-logarithmic-derivative-zeta` | `thm` | For \(\Re s>1\), \(-\zeta'(s)/\zeta(s)=\sum_{n\ge1}\Lambda(n)n^{-s}\). | L/L; Kedlaya Def. 2.9; Tomczak Ch. 3.  Differentiate the absolutely convergent logarithm of the zeta Euler product termwise and regroup prime powers. |
| `cor-mobius-dirichlet-series-reciprocal-zeta` | `cor` | For \(\Re s>1\), \(\sum\mu(n)n^{-s}=1/\zeta(s)\). | L/A; Kedlaya Def. 2.8; multiply the absolutely convergent series for \(\mu\) and \(\mathbf1\), then use their published convolution identity. |
| `cor-divisor-dirichlet-series-zeta-square` | `cor` | For \(\Re s>1\), \(\sum\tau(n)n^{-s}=\zeta(s)^2\). | L/A; Kedlaya Def. 2.8 and NT-9's \(\tau=\mathbf1*\mathbf1\). |
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
finite partial sums, so no illicit complex ordering appears.  NT-12 is ZF:
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

### NT-13. Dirichlet characters, L-functions, and primes in progressions

- **A page id:** `dirichlet-characters-l-functions-and-primes-in-progressions`
- **B page id:** `dirichlet-characters-l-functions-and-primes-in-progressions-examples`
- **Requires:** NT-1, NT-9, and NT-12; CRT and the finite-abelian-group
  character theory owned by `abstract-algebra`; CA-22 zeta in its initial
  half-plane.  Only the arithmetic specialization of finite Fourier
  orthogonality is proved here.
- **Primary backing:** Kedlaya Ch. 3 “Dirichlet L-functions,” §§3.1--3.5,
  Defs. 3.1, 3.3--3.4, 3.9, Lemmas 3.2 and 3.6, Thms. 3.5, 3.7--3.8,
  3.10--3.11; and Ch. 4 “Primes in arithmetic progressions,” §§4.1--4.4,
  Defs. 4.1, 4.3--4.4, Thms. 4.2, 4.10--4.12, and Lemmas 4.7--4.8.
  Independent complete proof treatment: Andersen Chs. 13--15, pp. 51--60,
  Lemmas 13.1--13.3, Prop. 13.4, Thms. 14.1--14.4, and Lemma 15.1.
  Sutherland Lecture 18 §§18.1--18.6 and Tomczak Ch. 4, Thms. 4.1--4.8,
  provide two further full-lecture checks.

#### A-page items, in dependency order

| id | kind | statement | provenance and locator |
|---|---|---|---|
| `def-dirichlet-character-modulo-q` | `def` | A Dirichlet character modulo \(q\ge1\) is the datum of a homomorphism \(\bar\chi:(\mathbb Z/q\mathbb Z)^\times\to\mathbb C^\times\), extended to \(\chi:\mathbb Z\to\mathbb C\) by zero on nonunits. | L/NA; Kedlaya Def. 3.1; Sutherland Defs. 18.4--18.5.  The modulus is part of the datum. |
| `lem-dirichlet-character-extension-well-defined` | `lem` | The zero extension is independent of the integer representative, is periodic modulo \(q\), and vanishes exactly when \((n,q)>1\). | L/A; Sutherland Lemma 18.8; Andersen Ch. 13.  Unit status and the value of \(\bar\chi\) depend only on the residue class. |
| `lem-dirichlet-character-arithmetic-function-characterization` | `lem` | A function \(\chi:\mathbb Z\to\mathbb C\) arises from a character modulo \(q\) iff it is \(q\)-periodic, completely multiplicative, vanishes precisely off integers coprime to \(q\), and has \(\chi(1)=1\). | L/L; Sutherland §18.2; Andersen Ch. 13.  Restriction to unit classes gives the inverse construction. |
| `def-principal-dirichlet-character` | `def` | The principal character \(\chi_0\pmod q\) is \(1\) on integers coprime to \(q\) and \(0\) otherwise. | L/NA; Kedlaya Ch. 3; Andersen Ch. 13. |
| `lem-dirichlet-character-values` | `lem` | On units, character values are roots of unity and \(\overline{\chi(n)}=\chi(n)^{-1}\); off units both sides of every orthogonality formula use the prescribed zero value. | L/L; finite group order and Kedlaya §3.1. |
| `thm-dirichlet-character-orthogonality` | `thm` | For unit classes \(a,b\pmod q\), \(\sum_{\chi\bmod q}\chi(a)\overline{\chi(b)}=\varphi(q)\) if \(a=b\) and \(0\) otherwise; dually, \(\sum_{a\in(\mathbb Z/q\mathbb Z)^\times}\chi(a)\overline{\psi(a)}=\varphi(q)\) if \(\chi=\psi\) and \(0\) otherwise. | L/A; Kedlaya Thm. 4.10 specialized from finite abelian Fourier theory; Andersen Prop. 13.4.  The abstract character-group cardinality and separation theorem are cited, not re-minted. |
| `cor-dirichlet-character-residue-class-indicator` | `cor` | If \((a,q)=1\), then for every integer \(n\), \(\varphi(q)^{-1}\sum_{\chi\bmod q}\overline{\chi(a)}\chi(n)\) is \(1\) when \(n\equiv a\pmod q\) and \(0\) otherwise. | L/A; Andersen Prop. 13.4; Tomczak Cor. 4.3.  The formula automatically vanishes when \((n,q)>1\). |
| `lem-nonprincipal-dirichlet-character-complete-sum` | `lem` | A nonprincipal character sums to zero over every complete residue system modulo \(q\). | L/L; Kedlaya Lemma 3.2; Andersen Lemma 13.2.  Multiply the sum by a unit on which the character is not one. |
| `lem-nonprincipal-dirichlet-character-partial-sums` | `lem` | For nonprincipal \(\chi\), every partial sum \(\sum_{n\le x}\chi(n)\) is bounded in modulus by \(q\). | L/L; Andersen Lemma 13.3; decompose into complete periods plus one terminal block. |
| `def-dirichlet-l-function` | `def` | For \(\Re s>1\), \(L(s,\chi)=\sum_{n\ge1}\chi(n)n^{-s}\). | L/NA; Kedlaya Def. 3.4; Sutherland Def. 18.19. |
| `thm-dirichlet-l-euler-product` | `thm` | In \(\Re s>1\), \(L(s,\chi)=\prod_p(1-\chi(p)p^{-s})^{-1}\), and it is nonzero there. | L/L; Kedlaya Def. 3.4; Sutherland Def. 18.19.  Apply NT-12 to the completely multiplicative coefficient and its absolutely convergent logarithm. |
| `thm-principal-dirichlet-l-factorization` | `thm` | \(L(s,\chi_0)=\zeta(s)\prod_{p\mid q}(1-p^{-s})\); hence it has the same simple pole at \(s=1\) as zeta, with residue \(\prod_{p\mid q}(1-p^{-1})=\varphi(q)/q\). | L/L; Kedlaya Thm. 3.5; Andersen Thm. 14.1.  The finite missing Euler factors are never discarded. |
| `thm-nonprincipal-dirichlet-l-holomorphic-right-half-plane` | `thm` | If \(\chi\ne\chi_0\), its Dirichlet series converges locally uniformly and is holomorphic for \(\Re s>0\). | L/L; Kedlaya Thm. 3.5; Sutherland Prop. 18.20.  Combine bounded character sums with NT-12's summatory integral/Abel argument. |
| `lem-positive-log-dirichlet-series-nonvanishing` | `lem` | If the logarithm of an Euler product has nonnegative Dirichlet coefficients in its initial half-plane, Landau's theorem prevents a zero or cancellation at a proposed regular boundary point unless a matching pole accounts for it. | L/L; Kedlaya Lemma 3.6.  State the exact meromorphic quotient being tested each time; positivity is not a slogan applied to arbitrary complex values. |
| `thm-product-dirichlet-l-nonvanishing-line-one` | `thm` | The meromorphic product \(\prod_{\chi\bmod q}L(s,\chi)\) has no zero at any regular point of \(\Re s=1\); at \(s=1\) the principal factor has its stated simple pole, and the subsequent order argument proves that no zero of another factor cancels it. | L/L; Kedlaya Thm. 3.7; Andersen Lemma 15.1.  Sum the logarithmic Euler products over characters; orthogonality makes the grouped coefficients nonnegative and Landau's theorem supplies the boundary contradiction.  At \(s=1\), count meromorphic orders rather than calling a pole an exceptional zero. |
| `thm-dirichlet-l-nonvanishing-line-one` | `thm` | For every nonprincipal \(\chi\), \(L(1+it,\chi)\ne0\) for all real \(t\ne0\); the remaining point \(t=0\) is resolved by the next three items. | L/L; Kedlaya Thm. 3.8; Andersen Chs. 14--15.  Conjugate factors and orders of zeros/poles in the finite product are counted explicitly. |
| `lem-nonreal-dirichlet-l-nonzero-at-one` | `lem` | If \(\chi\) is nonreal, then \(L(1,\chi)\ne0\). | L/L; Kedlaya Thm. 3.10; Andersen Lemma 15.1.  A zero for \(\chi\) forces one for \(\bar\chi\), whose combined order cannot be cancelled by the single principal pole. |
| `lem-real-dirichlet-l-nonzero-at-one` | `lem` | If \(\chi\) is real and nonprincipal, then \(L(1,\chi)\ne0\). | L/L; Kedlaya Thm. 3.11; Andersen Lemma 15.1.  Assuming a zero, form the source's auxiliary Euler product with nonnegative coefficients, continue it to \(s>1/2\), and contradict its lower bound from the constant coefficient. |
| `thm-dirichlet-l-nonzero-at-one` | `thm` | Every nonprincipal Dirichlet character satisfies \(L(1,\chi)\ne0\). | L/A; combines the disjoint real/nonreal lemmas. |
| `def-natural-and-dirichlet-density` | `def` | Define natural and Dirichlet density for subsets of positive integers; for a set of primes also define relative natural density \(\pi_P(x)/\pi(x)\) and relative Dirichlet density by \(\sum_{p\in P}p^{-s}/\log(1/(s-1))\) as \(s\downarrow1\). | L/NA; Kedlaya Defs. 4.3--4.4.  The two ambient universes and denominators are never interchanged. |
| `thm-natural-density-implies-dirichlet-density` | `thm` | If a subset of the positive integers has natural density \(\delta\), then it has Dirichlet density \(\delta\). | L/L; Kedlaya Lemma 4.7.  Apply partial summation to its counting function and compare with the harmonic Dirichlet kernel. |
| `thm-primes-residue-class-dirichlet-density` | `thm` | For \(q\ge1\) and \((a,q)=1\), primes \(p\equiv a\pmod q\) have relative Dirichlet density \(1/\varphi(q)\). | L/L; Kedlaya Thm. 4.11; Sutherland §18.4.  Take logarithms for \(s>1\), bound all prime-power terms, and apply character orthogonality and \(L(1,\chi)\ne0\). |
| `thm-mertens-primes-arithmetic-progressions` | `thm` | For fixed \(q\) and \((a,q)=1\), \(\sum_{p\le x,\ p\equiv a\,(q)}1/p=\varphi(q)^{-1}\log\log x+O_q(1)\). | L/L; Andersen Thm. 14.4; Kedlaya Ch. 4 proof.  The implied constant can be chosen uniformly among the finitely many reduced classes modulo fixed \(q\); no uniformity as \(q\) grows is claimed. |
| `thm-dirichlet-primes-arithmetic-progressions` | `thm` | If \(q\ge1\) and \((a,q)=1\), infinitely many primes satisfy \(p\equiv a\pmod q\). | L/L; Kedlaya Thm. 4.2; Sutherland Thm. 18.1; Tomczak Thm. 4.4.  It follows quantitatively from the divergent main term in the preceding theorem. |

#### Proof strategy and well-definedness

A character is the pair consisting of its modulus and homomorphism.  The same
periodic arithmetic function can be regarded at several nonminimal
moduli; conductor and primitive ancestor are deliberately postponed to
NT-14.  Extension by zero is proved representative-independent before
complete multiplicativity or Euler products are used.

For line-one nonvanishing, distinguish \(t\ne0\), nonreal characters at
\(t=0\), and real characters at \(t=0\).  The last case is the hard one and
must include the nonnegative-coefficient auxiliary function and its boundary
argument; “Euler products do not vanish” is valid only in \(\Re s>1\) and is
not a proof at \(s=1\).  Dirichlet's theorem then follows from finite character
orthogonality, a controlled prime-power remainder, and the logarithmic
singularity of the principal factor.  NT-13 is ZF: character groups and
residue systems are finite and all limits are canonical.

#### B page

| id | kind | task |
|---|---|---|
| `ex-dirichlet-characters-modulo-three-four-and-five` | `ex` | Build the full tables, including zero values off the units. |
| `ex-dirichlet-characters-modulo-eight-and-twelve` | `ex` | Exhibit noncyclic unit groups and all resulting characters. |
| `ex-dirichlet-character-orthogonality-table` | `ex` | Verify both orthogonality relations and the residue-class indicator numerically. |
| `ex-principal-dirichlet-l-missing-euler-factors` | `ex` | Compute the finite factor for two moduli and its residue at one. |
| `ex-the-character-chi-four-and-leibniz-series` | `ex` | Identify \(L(1,\chi_4)=\pi/4\) with the authored Gregory--Leibniz theorem. |
| `ex-dirichlet-density-of-primes-in-a-small-progression` | `ex` | Illustrate, without using numerical evidence as proof, the density statement for a small modulus. |
| `cex-a-noncoprime-residue-class-has-no-dirichlet-conclusion` | `cex` | Show why \((a,q)=1\) is indispensable and identify the at most one exceptional prime. |
| `cex-dirichlet-density-does-not-mean-integer-natural-density` | `cex` | Explain why every residue-class prime set has natural density zero among all integers despite positive relative prime density. |

### NT-14. Primitive Dirichlet L-functions and functional equations

- **A page id:** `primitive-dirichlet-l-functions-and-functional-equations`
- **B page id:** `primitive-dirichlet-l-functions-and-functional-equations-examples`
- **Requires:** NT-13; CA-21 Gamma theory; the planned functional-analysis
  items `lem-fourier-transform-of-a-gaussian` and
  `thm-dirac-comb-is-fourier-invariant`, which supply Poisson summation under
  a fixed Fourier normalization.  The abstract finite-character facts are
  cited from algebra.
- **Primary backing:** Andersen Ch. 16 §§16.1--16.3.2, pp. 60--67:
  Lemmas 16.1, 16.3--16.4, Thm. 16.2, Thms. 16.5--16.8, and Remark 16.9,
  including completed even and odd proofs.  Independent full-note treatment:
  Kedlaya Ch. 6 §§6.1--6.2, equations (6.1.4) and (6.2.2), with its theta
  Mellin transforms and primitive Gauss relation.  Andersen is the primary
  proof source because Kedlaya leaves material odd-case details to exercises.

#### A-page items, in dependency order

| id | kind | statement | provenance and locator |
|---|---|---|---|
| `def-induced-dirichlet-character` | `def` | If \(f\mid q\), a character \(\chi\pmod q\) is induced by \(\chi^*\pmod f\) when its restriction to \((\mathbb Z/q\mathbb Z)^\times\) is the pullback of \(\chi^*\) under reduction modulo \(f\). | L/NA; Andersen Lemma 16.1; Kedlaya Def. 3.3.  The extended arithmetic functions may differ at integers that are units modulo \(f\) but not modulo \(q\). |
| `def-primitive-dirichlet-character-and-conductor` | `def` | A character is primitive if it is not induced from any proper divisor of its modulus; its conductor is the modulus of its primitive ancestor. | L/NA; Andersen Ch. 16; Sutherland Def. 18.14.  Existence and uniqueness of the ancestor are proved next. |
| `thm-dirichlet-character-primitive-induction` | `thm` | Every Dirichlet character is induced by a unique primitive character, and its conductor divides every modulus through which it is induced. | L/L; Andersen Thm. 16.2; Sutherland Thm. 18.13 and Cor. 18.15.  Prove the local prime-power conductor criterion and recombine it by CRT. |
| `thm-induced-dirichlet-l-finite-euler-factors` | `thm` | If \(\chi\pmod q\) is induced by primitive \(\chi^*\pmod f\), then \(L(s,\chi)=L(s,\chi^*)\prod_{p\mid q,\ p\nmid f}(1-\chi^*(p)p^{-s})\) initially for \(\Re s>1\), and thereafter by continuation. | L/L; Kedlaya Def. 3.4; Sutherland Cor. 18.16.  The factor set records exactly the primes at which zero extension changed. |
| `def-gauss-sum-dirichlet-character` | `def` | With \(e(x)=e^{2\pi ix}\), \(\tau(\chi)=\sum_{a\bmod q}\chi(a)e(a/q)\). | L/NA; Andersen Lemma 16.3; Kedlaya §6.1.  A complete residue system gives the same value by periodicity. |
| `lem-primitive-gauss-sum-twist` | `lem` | If \(\chi\pmod q\) is primitive, then \(\sum_{a\bmod q}\chi(a)e(an/q)=\overline{\chi(n)}\tau(\chi)\) for every integer \(n\), including the zero-valued nonunit case. | L/L; Andersen Lemma 16.3; Kedlaya §6.1.  Units follow by a residue permutation; primitivity forces the nonunit twisted sum to vanish. |
| `thm-primitive-gauss-sum-norm` | `thm` | For primitive \(\chi\pmod q\), \(|\tau(\chi)|^2=q\). | L/L; Andersen Lemma 16.4; Kedlaya §6.1.  Expand the squared modulus, use the twist relation and orthogonality, and fix the conjugation convention. |
| `def-parity-dirichlet-character` | `def` | The parity parameter \(a\in\{0,1\}\) is determined by \(\chi(-1)=(-1)^a\); characters with \(a=0\) are even and those with \(a=1\) odd. | L/NA; Andersen §16.3; Kedlaya Ch. 6. |
| `thm-twisted-poisson-summation` | `thm` | With \(e(x)=e^{2\pi ix}\) and \(\widehat f(\xi)=\int_{\mathbb R}f(x)e(-x\xi)\,dx\), every primitive \(\chi\pmod q\) and Schwartz \(f\) satisfy \[\sum_{n\in\mathbb Z}\chi(n)f(n)=\frac{\tau(\chi)}q\sum_{m\in\mathbb Z}\overline{\chi(m)}\,\widehat f(m/q).\] | L/A; Andersen Thms. 16.5--16.6.  Decompose into residue classes, invoke the cited Poisson theorem, and apply the primitive twist lemma; the displayed normalization fixes the conjugation, sign, and scale before any Gaussian specialization. |
| `def-completed-dirichlet-l-function` | `def` | For primitive \(\chi\pmod q\), \(\Lambda(s,\chi)=(q/\pi)^{(s+a)/2}\Gamma((s+a)/2)L(s,\chi)\). | L/NA; Andersen §§16.3.1--16.3.2; Kedlaya Ch. 6. |
| `thm-primitive-dirichlet-l-analytic-continuation` | `thm` | If primitive \(\chi\) is nonprincipal, \(L(s,\chi)\) extends to an entire function and its completion is entire; the primitive principal case has conductor \(1\) and is exactly the already-planned zeta case with its stated pole. | L/L; Andersen Thms. 16.7--16.8; Kedlaya Ch. 6.  Mellin-transform the parity-matched theta series and use its rapid decay after subtracting the sole principal constant term. |
| `thm-primitive-dirichlet-l-functional-equation` | `thm` | For primitive \(\chi\), \[\Lambda(s,\chi)=\varepsilon(\chi)\Lambda(1-s,\overline\chi),\qquad \varepsilon(\chi)=i^{-a}\tau(\chi)/\sqrt q,\] with the principal conductor-one case read as the zeta functional equation. | L/L; Andersen Thms. 16.7--16.8 and Remark 16.9; Kedlaya equations (6.1.4), (6.2.2).  Derive the theta transformation separately for even and odd parity before combining notation. |
| `cor-dirichlet-l-root-number-unit-modulus` | `cor` | The root number satisfies \(|\varepsilon(\chi)|=1\) and \(\varepsilon(\chi)\varepsilon(\overline\chi)=1\). | L/A; Andersen Remark 16.9 and the Gauss-sum norm, with conjugation checked from the functional equation. |
| `cor-dirichlet-l-trivial-zeros` | `cor` | For primitive nonprincipal \(\chi\) of parity \(a\), \(L(-a-2m,\chi)=0\) for every integer \(m\ge0\), with multiplicities read against the Gamma poles. | L/A; Andersen Ch. 16; Kedlaya Ch. 6.  State separately any exceptional cancellation at \(s=0\) before calling the zeros “trivial.” |

#### Proof strategy and well-definedness

“Conductor” belongs to the character datum, not to an arbitrarily chosen
period of its zero-extended function.  The CRT proof produces a unique least
local conductor at each prime and hence a unique global primitive ancestor.
The finite Euler-factor formula is established in the initial absolute
half-plane before analytic continuation is invoked.

The Fourier convention is fixed once as \(e(x)=e^{2\pi ix}\).  The general
Poisson theorem and Gaussian transform are cited from functional analysis;
this page proves the finite character twist and all scale factors.  The even
and odd theta kernels are developed separately so that the factor \(i^{-a}\)
is derived rather than guessed.  The exact sign of a general Gauss sum depends
on choices, but its norm and the resulting root number are well-defined under
the displayed convention.  NT-14 is ZF: CRT decompositions and character sums
are finite, and the analytic continuation is unique.

#### B page

| id | kind | task |
|---|---|---|
| `ex-primitive-ancestors-of-small-characters` | `ex` | Find conductors for characters displayed modulo \(8,12,15\), distinguishing modulus from conductor. |
| `ex-finite-euler-factors-under-character-induction` | `ex` | Compare the L-functions of one primitive character and two induced versions. |
| `ex-gauss-sum-for-chi-four` | `ex` | Compute the twist, norm, parity, and root number under the fixed exponential convention. |
| `ex-even-and-odd-character-theta-kernels` | `ex` | Derive both Gaussian theta transformations and locate their different Gamma factors. |
| `ex-trivial-zeros-of-a-dirichlet-l-function` | `ex` | Match parity, Gamma poles, and the resulting negative-integer zeros. |
| `cex-a-character-modulus-need-not-be-its-conductor` | `cex` | Give an induced character whose displayed modulus is strictly larger than its conductor. |
| `cex-gauss-sum-sign-is-not-canonical-without-conventions` | `cex` | Change the additive character or primitive root and track the sign/root-number change without altering the norm. |

### NT-15. Perron inversion and the explicit formula

- **A page id:** `perron-inversion-and-the-explicit-formula`
- **B page id:** `perron-inversion-and-the-explicit-formula-examples`
- **Requires:** NT-12; all relevant CA-21/CA-22 Gamma-zeta items; and
  CA-18's general Jensen/Hadamard theory.  CA-18 currently promises those
  results at page level but does not expose stable candidate item ids; that
  amendment is recorded below.
- **Primary backing:** Kedlaya Ch. 9 “von Mangoldt's formula,” §§9.1--9.5:
  Lemmas 9.1--9.2, 9.4--9.6, 9.8, Remark 9.7, and Thm. 9.9.
  Independent complete-note backing: Andersen Ch. 11 §§11.1--11.2 and Ch. 12
  §§12.1--12.4, pp. 40--48, Lemmas 11.1 and 12.1, Prop. 12.2, and Thm. 12.3.
  Tomczak Ch. 7, Thms. 7.1--7.4, is a third treatment of ineffective,
  effective, higher-order, and smoothed Perron formulas.

#### A-page items, in dependency order

| id | kind | statement | provenance and locator |
|---|---|---|---|
| `def-starred-summatory-function` | `def` | For coefficients \(a_n\), \(A^*(x)=\sum_{n<x}a_n+\tfrac12a_x\) when \(x\) is a positive integer, and \(A^*(x)=\sum_{n<x}a_n\) otherwise. | L/NA; Kedlaya §9.1; Perron's endpoint convention.  The symbol \(a_x\) is used only when \(x\in\mathbb Z_{>0}\). |
| `lem-perron-kernel` | `lem` | For \(c>0,y>0\), the symmetric improper integral \((2\pi i)^{-1}\int_{c-i\infty}^{c+i\infty}y^s\,ds/s\) is \(0,1/2,1\) according as \(y<1,y=1,y>1\). | L/L; Kedlaya Lemma 9.1; Tomczak Thm. 7.1.  Define the integral as the limit of symmetric truncations before shifting contours. |
| `lem-truncated-perron-kernel` | `lem` | If \(I(y,T)=(2\pi i)^{-1}\int_{c-iT}^{c+iT}y^s\,ds/s\), then for \(y\ne1\), \(|I(y,T)-\delta(y)|<y^c\min\{1,(T|\log y|)^{-1}\}\), while for \(y=1\) the error is \(<c/T\). | L/L; Kedlaya Lemma 9.5; Tomczak Thm. 7.2.  The two bounds come from distinct contours and both endpoint cases are proved. |
| `thm-perron-formula` | `thm` | If \(F(s)=\sum a_nn^{-s}\) is absolutely convergent on \(\Re s=c\), then, under the stated dominated-limit hypothesis, \(A^*(x)=(2\pi i)^{-1}\int_{c-i\infty}^{c+i\infty}F(s)x^s\,ds/s\). | L/L; Kedlaya equation (9.1.2) and Lemma 9.1; Tomczak Thm. 7.1.  Insert finite partial sums first and justify both limit interchanges. |
| `thm-truncated-perron-formula` | `thm` | Under absolute convergence at \(c\), the height-\(T\) integral differs from \(A^*(x)\) by at most the convergent sum of \(|a_n|(x/n)^c\min\{1,(T|\log(x/n)|)^{-1}\}\), with the separate \(n=x\) endpoint term \(c|a_x|/T\). | L/L; Kedlaya Lemma 9.5 applied termwise; Tomczak Thms. 7.2--7.3.  This explicit error, rather than a generic \(o(1)\), is what later contour optimization uses. |
| `def-half-weighted-chebyshev-psi` | `def` | \(\psi_0(x)=\sum_{n<x}\Lambda(n)+\tfrac12\Lambda(x)\) for integral \(x\), and \(\sum_{n<x}\Lambda(n)\) otherwise. | L/NA; Kedlaya Ch. 9 opening.  It is distinguished from NT-11's right-continuous \(\psi(x)=\sum_{n\le x}\Lambda(n)\). |
| `def-riemann-zeta-zero-counting-function` | `def` | \(N(T)\) counts nontrivial zeta zeros \(\rho=\beta+i\gamma\) with \(0<\gamma\le T\), each with its multiplicity. | L/NA; Andersen §11.2.  Zeros on the boundary are included; alternate two-sided conventions are not mixed with this one. |
| `thm-riemann-von-mangoldt-zero-counting` | `thm` | For \(T\ge2\), \(N(T)=\frac{T}{2\pi}\log\frac{T}{2\pi}-\frac{T}{2\pi}+O(\log T)\). | L/L; Andersen §11.2; Kedlaya Remark 9.7.  Apply the argument principle to the completed zeta function, use the functional equation and Stirling, and indent or perturb contours at boundary zeros. |
| `cor-zeta-zero-count-unit-interval` | `cor` | The number of nontrivial zeros with ordinate in \([T,T+1]\) is \(O(\log(T+2))\). | L/A; Kedlaya Lemma 9.4; Andersen Lemma 11.1.  Subtract the zero-count formula with a bounded-height adjustment. |
| `lem-local-logarithmic-derivative-zeta` | `lem` | Uniformly for \(-1\le\sigma\le2\), away from zero ordinates, \(\zeta'(s)/\zeta(s)=\sum_{\rho:|t-\Im\rho|<1}(s-\rho)^{-1}+O(\log(|t|+2))\). | L/L; Kedlaya Lemma 9.6, with its exercise proof supplied by Andersen Lemma 11.1 and Ch. 10 Thm. 10.3.  Zeros are counted with multiplicity. |
| `lem-logarithmic-derivative-zeta-left-half-plane` | `lem` | For fixed distance from the trivial zeros, \(\zeta'(s)/\zeta(s)=O(\log|s|)\) as \(|s|\to\infty\) in \(\Re s\le-1\). | L/L; Kedlaya Lemma 9.8.  Take logarithmic derivatives of the cited functional equation and use the Gamma estimates from CA-21. |
| `lem-von-mangoldt-explicit-formula-residues` | `lem` | Shifting \(-\zeta'(s)\zeta(s)^{-1}x^s/s\) crosses residues \(x\) at \(1\), \(-x^\rho/\rho\) at each nontrivial zero, \(-\tfrac12\log(1-x^{-2})\) from all trivial zeros, and \(-\zeta'(0)/\zeta(0)\) at \(0\). | L/L; Kedlaya Lemma 9.2, corrected using its Thm. 9.9; Andersen Prop. 12.2.  Kedlaya's Lemma 9.2 misprints the denominator in the last term as \(\zeta'(0)\); the theorem and direct residue calculation give \(\zeta(0)\). |
| `thm-von-mangoldt-explicit-formula-smoothed` | `thm` | For Andersen's piecewise-linear cutoff \(\phi_{x,y}\), \[\sum_{n\ge1}\Lambda(n)\phi_{x,y}(n)=\widetilde\phi_{x,y}(1)-\sum_\rho\widetilde\phi_{x,y}(\rho)-\log(2\pi)-\sum_{k\ge1}\widetilde\phi_{x,y}(-2k),\] where \(\widetilde\phi\) is the displayed Mellin transform and the zero sum converges in the proved mode. | L/L; Andersen Lemma 12.1 and Prop. 12.2.  Define \(\phi_{x,y}\) and its Mellin transform on the page before the formula; smoothing makes the zero sum controllable without an unstated ordering. |
| `thm-von-mangoldt-explicit-formula-truncated` | `thm` | For \(x\ge2,T\ge2\), \[\psi_0(x)-x=-\sum_{|\Im\rho|<T}{x^\rho\over\rho}-{\zeta'(0)\over\zeta(0)}-\frac12\log(1-x^{-2})+R(x,T),\] where \[R(x,T)=O\!\left({x\log^2(xT)\over T}+(\log x)\min\left\{1,{x\over T\langle x\rangle}\right\}\right),\] and \(\langle x\rangle\) is the distance to the nearest prime power other than possibly \(x\) itself. | L/L; Kedlaya Thm. 9.9; Andersen Thm. 12.3 independently supplies the quantitative contour route.  If \(T\) meets a zero ordinate, shift it by a bounded amount to a height separated by \(\gg1/\log T\) and absorb the changed finite zero terms in the stated error. |

#### Proof strategy and ordering obligations

Perron integrals are symmetrically truncated and give half the jump at an
endpoint.  The sharp formula therefore uses \(\psi_0\), not the
right-continuous \(\psi\), and defines the distance \(\langle x\rangle\)
appearing in the error.  For \(x>0\), every \(x^\rho\) means
\(\exp(\rho\log x)\) with the real logarithm.

The contour proof inventories the pole at one, every nontrivial zero with
multiplicity, all trivial zeros, and zero itself.  A height is selected from a
specified finite rational grid by the unit-interval zero bound, avoiding a
hidden choice of an enumeration of all zeros.  The displayed finite zero sum
is unambiguous; any limiting infinite sum is either inherited from the
smoothed formula or explicitly ordered by symmetric ordinate.  Andersen
supplies proofs for Kedlaya's exercise-deferred local-zero and logarithmic-
derivative lemmas.  NT-15 is ZF.

#### B page

| id | kind | task |
|---|---|---|
| `ex-perron-kernel-at-and-away-from-the-jump` | `ex` | Compute the three endpoint cases and compare them with a finite-height truncation. |
| `ex-perron-formula-for-a-finite-dirichlet-polynomial` | `ex` | Verify the formula without limit interchanges, including a coefficient at the endpoint. |
| `ex-von-mangoldt-residue-table` | `ex` | Record the source, order, and sign of every residue crossed by the contour. |
| `ex-smoothed-versus-sharp-explicit-formula` | `ex` | Compare convergence, endpoint behavior, and errors for the two sourced formulas. |
| `ex-selecting-an-admissible-contour-height` | `ex` | Use a finite grid and the unit-interval zero count to produce a height separated from every nearby ordinate. |
| `cex-an-unordered-infinite-zero-sum-is-not-a-formula` | `cex` | Show why \(\sum_\rho x^\rho/\rho\) needs truncation, smoothing, or a declared symmetric limiting order. |
| `cex-right-continuous-psi-has-the-wrong-perron-endpoint` | `cex` | At a prime power, compare \(\psi\) with \(\psi_0\) and locate the missing half jump. |

### NT-16. The classical zero-free region and the prime number theorem

- **A page id:** `classical-zero-free-region-and-the-prime-number-theorem`
- **B page id:** `classical-zero-free-region-and-the-prime-number-theorem-examples`
- **Requires:** NT-11--NT-15; CA-18's Jensen, canonical-product, and
  Hadamard-factorisation machinery; and all relevant CA-21/CA-22 Gamma-zeta
  items.  The qualitative prime number theorem in arithmetic progressions
  uses NT-13 and the Tauberian theorem built on this page.  No result in this
  pair is used by either of the two earlier blocks.
- **Primary backing:** Montgomery--Vaughan, *Multiplicative Number Theory I*,
  Ch. 6 §§6.1--6.2, pp. 168--198: Lemmas 6.1--6.5, Thms. 6.6--6.9;
  this is the source for the de la Vallée Poussin region and the classical
  error term.  Independent complete-note treatments are Andersen Chs. 10--12,
  pp. 35--48, especially Thms. 10.1, 10.3, 12.3--12.4, and Kedlaya Chs. 1,
  4, 7--9, especially Thms. 1.8, 4.12, 7.5--7.7.  Sutherland Lecture 16,
  Thm. 16.13, supplies an independent complete Newman--Zagier Tauberian proof.

#### A-page items, in dependency order

| id | kind | statement | provenance and locator |
|---|---|---|---|
| `lem-zeta-logarithmic-derivative-zero-bound` | `lem` | For the completed zeta function, its Hadamard product gives the meromorphic partial-fraction identity for \(\zeta'(s)/\zeta(s)\); uniformly for \(-1\le\sigma\le2\) and \(|t|\ge3\), taking real parts expresses the local contribution of zeros as \(\tfrac12\log |t|+O(1)\) together with the explicitly displayed pole and Gamma terms. | L/L; Montgomery--Vaughan Lemmas 6.1--6.4; Andersen Thm. 10.3.  Derive the identity from the cited CA-18 canonical product and CA-21 Stirling theorem, rather than asserting a sum over zeros without its convergence prescription. |
| `thm-riemann-zeta-classical-zero-free-region` | `thm` | There is an absolute \(c>0\) such that \(\zeta(\sigma+it)\ne0\) whenever \(\sigma\ge1-c/\log(|t|+2)\). | L/L; Montgomery--Vaughan Thm. 6.6; Andersen Thm. 10.1; Kedlaya Thm. 7.5.  The pole at \(s=1\) is not called a zero; bounded heights are covered by compactness and CA-22's zero-free line. |
| `thm-zeta-bounds-in-classical-zero-free-region` | `thm` | For suitable absolute \(c,C>0\), \(|\zeta'(s)/\zeta(s)|\le C\log ^2(|t|+2)\) in \(\sigma\ge1-c/\log(|t|+2)\), away from the pole, and \(|1/\zeta(s)|\le C\log(|t|+2)\) in the corresponding half-width region. | L/L; Montgomery--Vaughan Thms. 6.7--6.8 and their proof; Andersen Ch. 10.  The page fixes the two possibly different region constants and treats a compact neighborhood of the real axis separately. |
| `lem-zeta-reciprocal-zero-sum-bound` | `lem` | If nontrivial zeros are counted with multiplicity, then \(\sum_{0<|\Im\rho|\le T}|\rho|^{-1}=O(\log ^2 T)\) for \(T\ge2\). | L/L; Kedlaya Ch. 7 after Thm. 7.6; Andersen Ch. 11.  Split into unit ordinate intervals and apply NT-15's zero-count estimate; the finitely many low zeros are absorbed into the constant. |
| `thm-chebyshev-psi-prime-number-theorem-error` | `thm` | There is an absolute \(c>0\) such that \(\psi(x)=x+O\!\left(xe^{-c\sqrt{\log x}}\right)\) for \(x\ge2\). | L/L; Montgomery--Vaughan Thm. 6.9; Kedlaya Thm. 7.7; Andersen Thm. 12.4.  Insert the truncated explicit formula from NT-15, move the contour only through the proved zero-free region, and choose \(T=\exp(C\sqrt{\log x})\) with \(C\) small enough for every error term. |
| `cor-chebyshev-theta-prime-number-theorem-error` | `cor` | After possibly decreasing \(c\), \(\vartheta(x)=x+O\!\left(xe^{-c\sqrt{\log x}}\right)\). | L/A; Montgomery--Vaughan Thm. 6.9.  Subtract NT-11's explicit prime-power contribution \(\psi(x)-\vartheta(x)=O(\sqrt x\log ^2x)\). |
| `def-logarithmic-integral` | `def` | For \(x\ge2\), \(\operatorname{Li}(x)=\int_2^x dt/\log t\), so no principal-value convention across the singularity at \(1\) is involved. | L/NA; Montgomery--Vaughan §6.2; Andersen Ch. 12. |
| `thm-prime-number-theorem-logarithmic-integral` | `thm` | For some absolute \(c>0\), \(\pi(x)=\operatorname{Li}(x)+O\!\left(xe^{-c\sqrt{\log x}}\right)\). | L/L; Montgomery--Vaughan Thm. 6.9; Andersen Thm. 12.4.  Abel summation is applied to \(d\vartheta\), retaining the lower endpoint and showing that the integrated error has the same form after decreasing \(c\). |
| `cor-prime-number-theorem` | `cor` | \(\pi(x)\sim x/\log x\), equivalently \(\vartheta(x)\sim x\) and \(\psi(x)\sim x\). | L/A; all three primary treatments.  The equivalences use NT-11's prime-power comparison and partial summation, not a change of definition of the counting functions. |
| `cor-nth-prime-asymptotic` | `cor` | If \(p_n\) is the \(n\)-th prime, then \(p_n\sim n\log n\). | L/A; Montgomery--Vaughan §6.2.  Invert the monotone counting asymptotic with explicit two-sided \((1\pm\varepsilon)x/\log x\) bounds. |
| `thm-newman-zagier-tauberian-theorem` | `thm` | Let \(f:[0,\infty)\to\mathbb C\) be bounded and locally integrable.  If \(g(s)=\int_0^\infty f(t)e^{-st}\,dt\), initially for \(\Re s>0\), extends holomorphically to a neighborhood of the closed half-plane \(\Re s\ge0\), then \(\int_0^\infty f(t)\,dt\) converges and equals \(g(0)\). | L/L; Kedlaya Thm. 1.8; Sutherland Lecture 16, Thm. 16.13.  Follow Newman's finite-contour proof with its polynomial damping factor and prove the horizontal and semicircular estimates; do not invoke an unnamed general Tauberian theorem. |
| `thm-prime-number-theorem-arithmetic-progressions` | `thm` | For each fixed \(q\ge1\) and \((a,q)=1\), \(\pi(x;q,a)\sim \operatorname{Li}(x)/\varphi(q)\) as \(x\to\infty\). | L/L; Kedlaya Thm. 4.12; Sutherland Lecture 18 after the line-one nonvanishing theorem.  Apply character orthogonality to the von Mangoldt sums, use NT-13's nonvanishing on \(\Re s=1\), and apply the preceding Tauberian theorem character by character.  This is a fixed-modulus statement and claims neither a zero-free region uniform in \(q\) nor a Siegel--Walfisz error. |

#### Proof strategy and boundary obligations

The quantitative route begins with the nonnegative coefficients of
\(-\zeta'/\zeta\) in \(\Re s>1\) and the trigonometric identity
\(3+4\cos\theta+\cos2\theta=2(1+\cos\theta)^2\).  Evaluating the resulting
\(3,4,1\) inequality at \(\sigma,\sigma+it,\sigma+2it\), inserting the
completed-function partial fractions, and taking
\(\sigma-1\asymp1/\log(|t|+2)\) excludes a zero too close to one.  The
bounded-height part uses the already-proved zero-free line and compactness;
the argument never assumes the desired region at small \(t\).

The explicit-formula proof fixes a finite height before summing zeros, uses
the reciprocal-zero bound, and optimizes the height only after every error is
visible.  Conversion among \(\psi,\vartheta,\pi\), and \(\operatorname{Li}\)
is proved with the authored Abel-summation lemma.  The Newman route is kept as
an independently complete qualitative proof because it is also what makes
the fixed-\(q\) progression theorem self-contained.  It does not replace the
zero-free-region proof of the stronger classical error term.

The zero multiset may be listed by bounded ordinate and multiplicity because
each such set is finite; all sums are finite or symmetrically truncated before
a limit.  Constants in the progression theorem may depend on fixed \(q\).
All selections in the contour and Tauberian arguments are from explicit
finite grids or are least natural numbers satisfying proved conditions, so
NT-16 is ZF.

#### B page

| id | kind | task |
|---|---|---|
| `ex-the-three-four-one-trigonometric-inequality` | `ex` | Expand the positive square and show exactly how its prime-power coefficients become nonnegative. |
| `ex-zero-free-region-parameter-balance` | `ex` | Track the pole, a hypothetical zero, the Gamma term, and the chosen \(\sigma-1\) through the contradiction. |
| `ex-optimizing-the-prime-number-theorem-contour-height` | `ex` | Balance the horizontal, vertical, and zero-sum errors at \(T=\exp(C\sqrt{\log x})\). |
| `ex-from-psi-to-the-logarithmic-integral` | `ex` | Carry out both partial-summation conversions, including endpoints and the prime-power error. |
| `ex-newman-tauberian-prime-number-theorem` | `ex` | Verify the Laplace-transform hypotheses for the normalized Chebyshev error and recover the qualitative PNT. |
| `ex-prime-number-theorem-in-a-small-progression` | `ex` | Decompose a fixed residue class into its character sums and identify the sole principal main term. |
| `cex-dirichlet-density-alone-does-not-give-a-counting-asymptotic` | `cex` | Explain why NT-13's logarithmic density proof cannot by itself yield \(\pi(x;q,a)\sim\operatorname{Li}(x)/\varphi(q)\). |
| `cex-the-classical-zeta-region-is-not-a-uniform-dirichlet-l-region` | `cex` | Isolate the modulus dependence and why this page proves no Siegel--Walfisz or zero-density theorem for a growing modulus. |

## 6. Post--commutative-algebra local and algebraic block

This block is placed after the final page of the `commutative-algebra` track.
It applies that track's integral-extension, Dedekind-domain, DVR, ideal,
localisation, adic-completion, and Henselian machinery; it does not reproduce
it.  In the live topology the analytic block is already below this anchor.
Consequently NT-18 may cite NT-13's proved Dirichlet theorem in the one global
square-class construction needed for the full Hasse--Minkowski theorem.  No
low elementary page points forward into this block.

### NT-17. Absolute values, completions, and p-adic numbers

- **A page id:** `absolute-values-completions-and-p-adic-numbers`
- **B page id:** `absolute-values-completions-and-p-adic-numbers-examples`
- **Requires:** the published `def-p-adic-valuation`,
  `lem-p-adic-valuation-basic`, `lem-p-adic-valuation-additive`, and
  `lem-p-adic-valuation-on-q`; the published `def-metric-completion`,
  `thm-metric-completion-exists`, and `thm-metric-completion-unique`; CA-8's
  valuation/DVR vocabulary; CA-13's adic completion and inverse-limit example;
  CA-14's complete-adic Hensel theorem; and GT-17's planned compatible-residue
  construction, topology, completeness, compactness, and dense copy of
  \(\mathbb Z\).
- **Primary backing:** Milne, *Algebraic Number Theory*, Ch. 7, pp. 106--124,
  especially Thms. 7.1, 7.2, 7.27, 7.29 and the completion discussion;
  Sutherland 18.782 Lectures 5 §§5.1--5.3 and 8 §§8.1--8.3.  Independent
  full proofs: Conrad, *Ostrowski's Theorem for \(\mathbb Q\)*, §§1--2, and
  Conrad, *Hensel's Lemma*, §§1--6.

#### A-page items, in dependency order

| id | kind | statement | provenance and locator |
|---|---|---|---|
| `def-multiplicative-absolute-value-on-a-field` | `def` | An absolute value on a field \(F\) is a map \(|\cdot|:F\to\mathbb R_{\ge0}\) with \(|x|=0\iff x=0\), \(|xy|=|x||y|\), and \(|x+y|\le|x|+|y|\); it is nonarchimedean when the strong triangle inequality holds and trivial when every nonzero element has value one. | L/NA; Sutherland Def. 5.2; Milne Ch. 7.  This is a real-valued rank-one absolute value, not CA-8's more general ordered-group valuation. |
| `lem-nonarchimedean-absolute-value-criterion` | `lem` | An absolute value is nonarchimedean iff \(|n|\le1\) for every element \(n\cdot1_F\) of its prime subring. | L/L; Sutherland Thm. 5.3.  The reverse implication uses the binomial theorem and the power trick. |
| `def-equivalent-field-absolute-values` | `def` | Two nontrivial absolute values are equivalent when \(|x|_2=|x|_1^c\) for every \(x\), for some real \(c>0\). | L/NA; Sutherland Def. 5.5; Conrad §1.  “Same topology” is a theorem, not this definition. |
| `thm-equivalent-field-absolute-values-characterisation` | `thm` | Two nontrivial absolute values on a field induce the same topology iff they are equivalent by a positive power. | L/L; Milne Prop. 7.1; Conrad §1.  Compare the neighborhoods \(\{|x|_i<1\}\), pass to logarithms on a single element of value greater than one, and prove the power relation for every nonzero element. |
| `def-p-adic-absolute-value-on-the-rationals` | `def` | For the published representative-independent valuation, \(|0|_p=0\) and \(|x|_p=p^{-v_p(x)}\) for \(x\ne0\). | L/NA; Sutherland Def. 5.1; Milne Ch. 7.  The normalization \(|p|_p=p^{-1}\) is fixed. |
| `thm-p-adic-absolute-value-is-nonarchimedean` | `thm` | \(|xy|_p=|x|_p|y|_p\) and \(|x+y|_p\le\max\{|x|_p,|y|_p\}\). | L/L; Sutherland §5.1.  Translate the already-published additive and minimum inequalities for \(v_p\). |
| `thm-ostrowskis-theorem-for-the-rationals` | `thm` | Every nontrivial absolute value on \(\mathbb Q\) is equivalent either to the usual absolute value or to \(|\cdot|_p\) for a unique prime \(p\). | L/L; Sutherland Thm. 5.6; Conrad Thm. 1.  In the archimedean case use base expansions and the power trick; in the bounded case prove there is exactly one prime of value less than one. |
| `def-place-of-the-rationals` | `def` | A place of \(\mathbb Q\) is an equivalence class of nontrivial absolute values; write \(\infty\) and \(p\) for the classes with normalized representatives \(|\cdot|_\infty\) and \(|\cdot|_p\). | L/NA; Milne Ch. 7.  A place here is not a chosen representative. |
| `thm-product-formula-for-the-rationals` | `thm` | For \(x\in\mathbb Q^\times\), \(\prod_{v\le\infty}|x|_v=1\), with all but finitely many factors equal to one. | L/L; Milne Prop. 7.2.  Expand a reduced fraction into signed prime powers and use the displayed normalizations. |
| `thm-weak-approximation-for-rational-places` | `thm` | For distinct places \(v_1,\dots,v_r\), the diagonal copy of \(\mathbb Q\) is dense in \(\prod_i\mathbb Q_{v_i}\). | L/L; Milne Thm. 7.27; Sutherland Thm. 11.7 specialized to \(\mathbb Q\).  First construct elements small at all but one place and then form the standard rational approximant; only finitely many targets occur. |
| `def-field-of-p-adic-numbers` | `def` | \(\mathbb Q_p\) is the metric completion of \((\mathbb Q,d_p)\), where \(d_p(x,y)=|x-y|_p\), equipped with its named dense isometric embedding. | L/NA; Sutherland Def. 5.1 and Thm. 8.1.  The definition initially remembers the completion map rather than identifying rational numbers with equivalence classes. |
| `thm-p-adic-completion-is-a-field` | `thm` | Termwise addition and multiplication and the extended absolute value are independent of Cauchy representatives and make \(\mathbb Q_p\) a complete valued field; inversion is continuous on \(\mathbb Q_p^\times\). | L/L; Sutherland Thm. 8.1; Milne Ch. 7.  Cauchy sequences are first proved bounded, and a nonzero class is eventually bounded away from zero before reciprocals are taken. |
| `lem-p-adic-balls-are-clopen` | `lem` | Every open or closed \(p\)-adic ball is clopen; two balls of comparable radii that meet are nested. | L/L; Milne §7; Sutherland Lecture 5.  The ultrametric inequality makes every point of a ball a center and makes the complement a union of balls. |
| `thm-p-adic-completion-agrees-with-the-fraction-field-of-zp` | `thm` | The metric-completion field \(\mathbb Q_p\) is canonically isomorphic, over \(\mathbb Q\), to the fraction field of GT-17's compatible-residue ring \(\mathbb Z_p\). | L/A; Sutherland Thm. 8.1 and Remark 8.2; Milne Ch. 7.  Send a Cauchy class of integral elements to its eventually stable residues modulo every \(p^n\), prove representative-independence and bijectivity, and then invert powers of \(p\). |
| `cor-zp-is-the-valuation-ring-of-qp` | `cor` | Under the canonical comparison, \(\mathbb Z_p=\{x\in\mathbb Q_p:|x|_p\le1\}\). | L/A; Sutherland Remark 8.2.  This is the valuation ring, not the integral closure of \(\mathbb Z\) in \(\mathbb Q_p\). |
| `cor-maximal-ideal-and-residue-field-of-zp` | `cor` | The unique maximal ideal of \(\mathbb Z_p\) is \(p\mathbb Z_p\), and \(\mathbb Z_p/p\mathbb Z_p\cong\mathbb F_p\). | L/A; Milne Ch. 7; CA-8's DVR normal form. |
| `thm-p-adic-digit-expansion` | `thm` | Zero has the all-zero expansion; every \(x\in\mathbb Q_p^\times\) has a unique convergent expansion \(x=\sum_{n=N}^{\infty}a_np^n\), where \(N=v_p(x)\), \(a_N\ne0\), and every digit lies in \(\{0,\dots,p-1\}\). | L/L; Milne Ch. 7; Sutherland Lectures 5 and 8.  At each stage choose the least standard residue; uniqueness follows at the first unequal digit, and \(N\) makes the negative-index tail finite. |
| `cor-p-adic-field-is-locally-compact-and-totally-disconnected` | `cor` | \(\mathbb Q_p\) is locally compact and totally disconnected, with compact open subring \(\mathbb Z_p\). | L/A; Milne Thm. 7.29 and GT-17 compactness.  Scaling handles every closed ball; clopen balls separate distinct points. |
| `cor-p-adic-simple-root-lifting` | `cor` | If \(f\in\mathbb Z_p[X]\), \(a_0\in\mathbb Z_p\), \(f(a_0)\equiv0\pmod p\), and \(f'(a_0)\not\equiv0\pmod p\), there is a unique \(a\equiv a_0\pmod p\) with \(f(a)=0\). | L/A; CA-14 `thm-hensels-lemma-for-complete-adic-pairs`; Sutherland Thm. 8.8.  This is a specialization, not a second general Hensel theorem. |
| `thm-p-adic-newton-criterion` | `thm` | If \(f\in\mathbb Z_p[X]\) and \(|f(a_0)|_p<|f'(a_0)|_p^2\), Newton iteration is defined, converges quadratically to a unique root \(a\) in the source's stated ball, and satisfies \(|a-a_0|_p\le |f(a_0)/f'(a_0)|_p\). | L/L; Conrad Thm. 4.1 and §§5--6.  Taylor expansion proves both improving valuation and uniqueness; the iteration makes no compatible sequence of arbitrary root choices. |
| `thm-square-criterion-in-qp-for-odd-p` | `thm` | For odd \(p\) and \(x\in\mathbb Q_p^\times\), write \(x=p^nu\) with \(u\in\mathbb Z_p^\times\).  Then \(x\) is a square in \(\mathbb Q_p\) iff \(n\) is even and the reduction of \(u\) is a square in \(\mathbb F_p^\times\). | L/L; Conrad §§2--4; Sutherland Lecture 10.  Necessity is immediate; sufficiency applies the simple-root lift to \(X^2-u\). |
| `thm-square-criterion-in-q2` | `thm` | For \(x\in\mathbb Q_2^\times\), write \(x=2^nu\) with odd \(u\in\mathbb Z_2^\times\).  Then \(x\) is a square in \(\mathbb Q_2\) iff \(n\) is even and \(u\equiv1\pmod8\). | L/L; Conrad Thm. 4.5; Sutherland Lecture 10.  The reverse direction uses the strong Newton criterion because reduction modulo two is not simple. |

#### Proof strategy, models, and choice

The completion, fraction-field, inverse-limit, and digit models are not
silently identified.  Each comparison map is defined first, and its
representative-independence, algebra preservation, injectivity, surjectivity,
and compatibility with the normalized absolute value are proved.  In
particular, \(v_p(a/b)=v_p(a)-v_p(b)\) is already representative-independent
before \(|a/b|_p\) is used.  Congruence modulo \(p^n\) for coefficients in
\(\mathbb Z_p\) means membership in \(p^n\mathbb Z_p\).

The library's published `thm-metric-completion-exists` explicitly invokes
\(\mathsf{AC}_\omega\) to choose a diagonal representative while proving
completeness.  NT-17 therefore inherits **countable choice** through that
declared dependency.  Ostrowski, the rational product formula, finite weak
approximation, the inverse-limit comparison once its objects exist, digit
selection by least residues, the Hensel specialization, and Newton iteration
add no choice.  A future build may lower the cost for this particular separable
completion by making a canonical rational approximation explicit, but this
scaffold does not claim that unbuilt refinement.

#### B page

| id | kind | task |
|---|---|---|
| `ex-p-adic-geometric-series` | `ex` | Sum geometric series whose ratios are small p-adically but large in the real absolute value. |
| `ex-p-adic-expansion-of-minus-one` | `ex` | Derive \(-1=(p-1)+(p-1)p+(p-1)p^2+\cdots\) and check its partial sums. |
| `ex-square-root-of-minus-one-in-q5` | `ex` | Start from a simple root modulo five and display several Newton digits. |
| `ex-no-square-root-of-p-in-qp` | `ex` | Use parity of the valuation, not a real-sign argument. |
| `ex-p-adic-hensel-lifting-a-simple-root` | `ex` | Compare digit-by-digit lifting with Newton iteration for one polynomial. |
| `ex-two-adic-square-test` | `ex` | Test several odd units and show why congruence modulo eight is exact. |
| `ex-the-same-sequence-in-real-and-p-adic-metrics` | `ex` | Compare convergence and divergence of a single rational sequence at two places. |
| `cex-zp-is-not-the-integral-closure-of-z-in-qp` | `cex` | Separate the topological closure/valuation-ring description from algebraic integral closure. |

### NT-18. Hilbert symbols and the quadratic local--global principle

- **A page id:** `hilbert-symbols-and-the-quadratic-local-global-principle`
- **B page id:** `hilbert-symbols-and-the-quadratic-local-global-principle-examples`
- **Requires:** NT-2--NT-3, NT-13, NT-17; the published
  `def-quadratic-form-and-polar-form` and
  `cor-quadratic-forms-diagonalize-in-characteristic-not-two`; GA-4's norm;
  and finite-field results cited through abstract algebra.
- **Primary backing:** Sutherland 18.782 Lectures 10 §§10.1--10.4 and 11
  §§11.1--11.3, through Thm. 11.12.  Independent complete treatment: Raskin,
  *Quadratic Forms and the Hasse--Minkowski Theorem*, §§3.14--4.9, through
  Thm. 4.1.1.  The standard proofs in both sources use Dirichlet's theorem in
  the four-variable step; NT-13 is earlier in the live plan, so that dependency
  is now explicit and legal.

#### A-page items, in dependency order

| id | kind | statement | provenance and locator |
|---|---|---|---|
| `def-rational-local-fields` | `def` | For the place \(\infty\), set \(\mathbb Q_\infty=\mathbb R\); for a finite place \(p\), use NT-17's \(\mathbb Q_p\). | L/NA; Sutherland Lecture 10.  “Every completion” below means precisely this indexed family. |
| `def-hilbert-symbol-over-a-rational-completion` | `def` | For \(a,b\in\mathbb Q_v^\times\), define \((a,b)_v=1\) iff \(ax^2+by^2=1\) has a solution in \(\mathbb Q_v^2\), and \(-1\) otherwise. | L/NA; Sutherland Def. 10.1; Raskin §3.14.  Inputs are nonzero; later extension conventions are not smuggled into this definition. |
| `lem-equivalent-definitions-of-the-hilbert-symbol` | `lem` | The condition \((a,b)_v=1\) is equivalent to isotropy of \(aX^2+bY^2-Z^2\), to the appropriate binary representation statement, and to \(b\) being a norm from \(\mathbb Q_v(\sqrt a)\) after the displayed sign change. | L/L; Sutherland Lemma 10.2; Raskin §§3.14--3.15.  Verify each sign by expanding the norm \(x^2-ay^2\). |
| `lem-hilbert-symbol-depends-only-on-square-classes` | `lem` | The Hilbert symbol descends to a function on \(\mathbb Q_v^\times/\mathbb Q_v^{\times2}\) in each variable. | L/L; Sutherland §10.1.  Rescale variables explicitly and prove the resulting solvability equivalence both ways. |
| `thm-real-hilbert-symbol-formula` | `thm` | \((a,b)_\infty=-1\) exactly when \(a<0\) and \(b<0\). | L/L; Sutherland Lemma 10.3; Raskin §3.14. |
| `thm-odd-p-hilbert-symbol-formula` | `thm` | For odd \(p\), \(a=p^\alpha u\), \(b=p^\beta v\) with units \(u,v\),
\[(a,b)_p=(-1)^{\alpha\beta(p-1)/2}\left({u\over p}\right)^\beta\left({v\over p}\right)^\alpha ,\]
where only the parities of \(\alpha,\beta\) matter. | L/L; Sutherland Thm. 10.5; Raskin §3.15.  Reduce to the four square-class cases and use NT-17 Hensel lifting plus the exact Legendre convention of NT-2. |
| `thm-two-adic-hilbert-symbol-formula` | `thm` | For odd units \(u,v\),
\[(2^\alpha u,2^\beta v)_2=(-1)^{((u-1)/2)((v-1)/2)+\alpha(v^2-1)/8+\beta(u^2-1)/8},\]
with the integer exponent read modulo two. | L/L; Sutherland Thm. 10.6; Raskin §3.15.  Reduce units modulo eight and use NT-17's exact two-adic square criterion. |
| `thm-hilbert-symbol-is-symmetric-bilinear-and-nondegenerate` | `thm` | For every rational place, the Hilbert symbol is a symmetric nondegenerate bilinear pairing \(\mathbb Q_v^\times/\mathbb Q_v^{\times2}\times\mathbb Q_v^\times/\mathbb Q_v^{\times2}\to\{\pm1\}\). | L/L; Sutherland Thm. 10.7; Raskin §§3.14--3.16.  Establish bilinearity from the norm criterion or verify it on the finite square-class representatives; nondegeneracy needs a witness for every nontrivial class. |
| `lem-binary-quadratic-representation-via-hilbert-symbol` | `lem` | For nonzero \(a,b,t\in\mathbb Q_v\), \(aX^2+bY^2\) represents \(t\) iff \((a,b)_v=(t,-ab)_v\). | L/L; Sutherland Lemma 11.3 after diagonal rescaling; Raskin §4.2. |
| `cor-ternary-isotropy-via-hilbert-symbol` | `cor` | The nondegenerate ternary form \(aX^2+bY^2+cZ^2\) is isotropic over \(\mathbb Q_v\) iff \((a,b)_v=(-c,-ab)_v\). | L/A; Sutherland Cor. 11.4.  The displayed signs follow by moving \(cZ^2\) and treating separately the impossible zero-coordinate degeneracy. |
| `lem-finite-field-quadratic-isotropy-in-dimension-at-least-three` | `lem` | Every nondegenerate quadratic form of dimension at least three over a finite field of odd cardinality is isotropic. | L/A; Sutherland Thm. 11.1; Raskin §4.3.  After diagonalization, the sets of values \(ax^2\) and \(t-by^2\) each have \((q+1)/2\) elements, so they intersect and the first two variables represent every \(t\); take \(t=-c\) and the third variable equal to one.  This supplies the finite-field step directly instead of importing Chevalley--Warning. |
| `thm-local-isotropy-at-almost-all-primes` | `thm` | A rational nondegenerate quadratic form of dimension at least three is isotropic over \(\mathbb Q_p\) for all but finitely many primes \(p\). | L/L; Sutherland Thm. 11.1 and Cor. 11.2; Raskin §4.3.  Clear denominators and exclude two and primes dividing the diagonal coefficients; the preceding finite-field lemma gives a nontrivial reduced zero, whose gradient has a unit coordinate and therefore lifts by NT-17. |
| `thm-hilbert-reciprocity-over-the-rationals` | `thm` | For \(a,b\in\mathbb Q^\times\), \(\prod_{v\le\infty}(a,b)_v=1\), and all but finitely many factors are one. | L/L; Sutherland Thm. 10.8; Raskin §3.17.  By bilinearity reduce to \(-1,2\), and odd primes; the cases are exactly NT-3's two supplementary laws and quadratic reciprocity. |
| `cor-ternary-hilbert-one-place-principle` | `cor` | If a rational ternary form is isotropic over every completion except possibly one, it is isotropic over that remaining completion as well. | L/A; Sutherland Cor. 11.5.  Multiply the local ternary criterion over all places and use reciprocity. |
| `thm-hasse-minkowski-for-ternary-forms-over-q` | `thm` | A nondegenerate ternary quadratic form over \(\mathbb Q\) is isotropic over \(\mathbb Q\) iff it is isotropic over \(\mathbb R\) and every \(\mathbb Q_p\). | L/L; Sutherland Lecture 11, ternary step in Thm. 11.12; Raskin §§4.4--4.7.  Scale to a squarefree diagonal form and perform the source's descent on the absolute coefficient measure, using the one-place principle to construct the smaller form. |
| `lem-global-square-class-approximation` | `lem` | Let \(S\) be a finite set of rational places and choose \(x_v\in\mathbb Q_v^\times\) for each \(v\in S\).  There is \(x\in\mathbb Q^\times\) with \(x\in x_v\mathbb Q_v^{\times2}\) for every \(v\in S\) and \(|x|_p=1\) for every finite \(p\notin S\) except at most one prime \(p_0\). | L/L; Sutherland Lemma 11.11; Raskin Lemma 4.9.1.  Strong approximation fixes the prescribed unit square classes; NT-13 supplies a prime in the required arithmetic progression for the single possible outside valuation. |
| `thm-hasse-minkowski-over-the-rationals` | `thm` | A quadratic form of finite positive dimension over \(\mathbb Q\) represents zero nontrivially over \(\mathbb Q\) iff it does so over \(\mathbb R\) and over \(\mathbb Q_p\) for every prime \(p\). | L/L; Sutherland Thm. 11.12; Raskin Thm. 4.1.1 and §§4.8--4.9.  Remove the radical, diagonalize, use the ternary theorem as the base, treat dimension four with the preceding global square-class lemma, and reduce higher dimensions by matching values of two proper subforms. |

#### Proof strategy, well-definedness, and boundary

Every quadratic form is first reduced to its nondegenerate quotient and then
diagonalized using published linear algebra; isotropy is never confused with
integral representation of a prescribed number.  The Hilbert symbol is proved
square-class-invariant before finite representative formulas are used.
Valuation exponents in the formulas may be negative, but only their parity
appears; the Legendre symbols apply to the reductions of units.

Necessity in Hasse--Minkowski is scalar extension.  Sufficiency inventories
the real place and every finite place, then uses “almost all” to reduce every
calculation to a finite exceptional set.  The full proof is load-bearing and
proved here: its formerly problematic Dirichlet step is licensed by the
earlier analytic NT-13.  The theorem remains special to rational quadratic
isotropy; it asserts neither an integral representation theorem nor a local--
global principle for arbitrary Diophantine equations.

All local formulas, reciprocity, finite approximation, and descent are ZF.
NT-18 inherits \(\mathsf{AC}_\omega\) only through NT-17's use of the
published general completion theorem; its own Dirichlet prime may be taken as
the least prime in a proved nonempty progression and adds no choice.

#### B page

| id | kind | task |
|---|---|---|
| `ex-hilbert-symbol-over-the-reals` | `ex` | Compute every sign case and compare with the norm interpretation. |
| `ex-hilbert-symbol-at-an-odd-prime` | `ex` | Reduce arbitrary rational inputs to unit and valuation data and apply the formula. |
| `ex-two-adic-hilbert-symbol` | `ex` | Work a complete square-class table modulo eight. |
| `ex-local-obstruction-to-a-rational-conic` | `ex` | Prove nonsolubility at one named completion and hence over the rationals. |
| `ex-finite-bad-place-test-for-a-ternary-form` | `ex` | Identify the finite exceptional set and check all its local symbols. |
| `ex-hilbert-one-place-principle` | `ex` | Infer the last local value from the product formula. |
| `ex-hasse-minkowski-for-a-quaternary-form` | `ex` | Trace the square-class patching and dimension-four matching step in a concrete form. |
| `cex-local-global-fails-for-a-cubic-curve` | `cex` | State Conrad's sourced Selmer example (3X^3+4Y^3+5Z^3=0): it has a nontrivial zero over every rational completion but none over (mathbb Q).  Record the local Hensel checks; cite, without importing, the source's later algebraic-number-theory proof of the global assertion. |
| `cex-rational-isotropy-is-not-integral-representation` | `cex` | Show why clearing denominators and homogenizing do not preserve a fixed integral representation problem. |

### NT-19. Number fields, rings of integers, and discriminants

- **A page id:** `number-fields-rings-of-integers-and-discriminants`
- **B page id:** `number-fields-rings-of-integers-and-discriminants-examples`
- **Requires:** CA-6's integral-extension and integral-closure results; CA-9's
  finite integral closure and nondegenerate trace pairing; GA-1's finite
  separable extensions and embeddings; and GA-4's
  `def-field-norm-and-trace`.
- **Primary backing:** Milne Ch. 2 “Rings of Integers,” pp. 25--36,
  Props. 2.2--2.12 and examples.  Independent full-text backing: Stein
  §§2.3--2.4 and 6.1--6.2, including Props. 2.3.3--2.3.9, 2.4.1--2.4.4,
  and the integral-basis/discriminant algorithms; Conrad--Landesman Chs.
  4--8 give a third complete course treatment.

#### A-page items, in dependency order

| id | kind | statement | provenance and locator |
|---|---|---|---|
| `def-number-field` | `def` | A number field is a finite extension \(K/\mathbb Q\); its degree is \([K:\mathbb Q]\). | L/NA; Milne §2; Stein §2.3. |
| `def-ring-of-integers-of-a-number-field` | `def` | \(\mathcal O_K\) is the integral closure of \(\mathbb Z\) in \(K\), using CA-6's definition of integrality. | L/NA; Milne Def. 2.1; Stein §2.3.  The notation names a subring only after CA-6's closure theorem. |
| `cor-algebraic-integer-minimal-polynomial-criterion` | `cor` | An element \(\alpha\in K\) lies in \(\mathcal O_K\) iff its monic minimal polynomial over \(\mathbb Q\) has coefficients in \(\mathbb Z\). | L/A; Milne Prop. 2.2; Stein Prop. 2.3.3.  Apply CA-6's integrally-closed minimal-polynomial lemma to the UFD \(\mathbb Z\). |
| `thm-clearing-denominators-for-an-algebraic-number` | `thm` | For every \(\alpha\in K\), some positive integer \(m\) makes \(m\alpha\) an algebraic integer; hence \(K=\operatorname{Frac}(\mathcal O_K)\). | L/L; Milne §2; Stein Lemma 2.3.4.  Clear all coefficients of a polynomial for \(\alpha\) with the degree-dependent power of a common denominator. |
| `cor-trace-and-norm-of-an-algebraic-integer` | `cor` | If \(\alpha\in\mathcal O_K\), then \(\operatorname{Tr}_{K/\mathbb Q}(\alpha)\in\mathbb Z\) and \(N_{K/\mathbb Q}(\alpha)\in\mathbb Z\). | L/A; Milne Prop. 2.3; Stein §2.3.  Use the coefficients of the characteristic polynomial of multiplication by \(\alpha\), not an invented embedding formula. |
| `def-order-in-a-number-field` | `def` | An order in \(K\) is a subring \(\mathcal O\subseteq\mathcal O_K\) containing one and whose additive group is free of rank \([K:\mathbb Q]\). | L/NA; Milne §2; Stein Def. 2.3.6.  Merely being a finite-rank subring is not enough unless full rank is required. |
| `def-integral-basis-and-power-integral-basis` | `def` | An integral basis is a \(\mathbb Z\)-basis of \(\mathcal O_K\); a power integral basis has the form \(1,\alpha,\dots,\alpha^{n-1}\), equivalently \(\mathcal O_K=\mathbb Z[\alpha]\). | L/NA; Milne §2; Stein §6.1. |
| `thm-ring-of-integers-free-of-rank-degree` | `thm` | \(\mathcal O_K\) is a free \(\mathbb Z\)-module of rank \([K:\mathbb Q]\). | L/L; Milne Thm. 2.5; Stein Prop. 6.1.4.  Apply CA-9 finiteness over \(\mathbb Z\), torsion-freeness, and the structure theorem for finitely generated modules over a PID. |
| `thm-orders-have-integral-bases-and-finite-index` | `thm` | Every order has a \(\mathbb Z\)-basis of size \(n\) and finite additive index in \(\mathcal O_K\); conversely every unital finite-index subring of \(\mathcal O_K\) is an order. | L/L; Milne §2; Stein §§2.3, 6.1.  Compare full lattices in the same rational vector space. |
| `def-archimedean-embeddings-and-number-field-signature` | `def` | Let \(r_1\) be the number of real embeddings and \(r_2\) the number of conjugate pairs of nonreal embeddings; \((r_1,r_2)\) is the signature and \(r_1+2r_2=[K:\mathbb Q]\). | L/NA; Milne §2 and Ch. 4; Stein §7.1.  One representative from each complex pair is used only where a formula explicitly says so. |
| `def-discriminant-of-a-number-field-basis-and-order` | `def` | For a \(\mathbb Q\)-basis \(\alpha_1,\dots,\alpha_n\), set \(\operatorname{disc}(\alpha_1,\dots,\alpha_n)=\det(\operatorname{Tr}(\alpha_i\alpha_j))\); the discriminant of an order is that of any integral basis. | L/NA; Milne §2; Stein Def. 2.4.1.  Basis-independence for an order is proved below. |
| `lem-discriminant-change-of-basis` | `lem` | If \(\beta_j=\sum_i a_{ij}\alpha_i\), then \(\operatorname{disc}(\beta)=\det(A)^2\operatorname{disc}(\alpha)\). | L/L; Milne Prop. 2.4; Stein Prop. 2.4.2.  This is the determinant identity \(G_\beta=A^tG_\alpha A\). |
| `thm-discriminant-as-an-embedding-determinant` | `thm` | For a number field basis, \(\operatorname{disc}(\alpha_1,\dots,\alpha_n)=\det(\sigma_i(\alpha_j))^2\), where all \(n\) embeddings into \(\mathbb C\) are counted. | L/L; Milne Prop. 2.4; Stein §2.4.  Pairing the embeddings gives the trace matrix factorization; the square is algebraic, not an absolute square. |
| `thm-number-field-discriminant-is-well-defined-and-nonzero` | `thm` | Integral bases give the same nonzero signed integer \(d_K\), the discriminant of \(K\). | L/L; Milne Cor. 2.6; Stein §2.4.  Unimodular basis changes have determinant \(\pm1\); separability makes the embedding determinant nonzero. |
| `thm-power-basis-discriminant-is-polynomial-discriminant` | `thm` | If \(f\) is the monic minimal polynomial of \(\alpha\) of degree \(n\), then \(\operatorname{disc}(1,\alpha,\dots,\alpha^{n-1})=(-1)^{n(n-1)/2}N_{K/\mathbb Q}(f'(\alpha))\), equal to the polynomial discriminant of \(f\). | L/L; Milne Prop. 2.8; Stein Prop. 2.4.4.  Derive the Vandermonde determinant over all embeddings. |
| `cor-order-index-discriminant-formula` | `cor` | For an order \(\mathcal O\subseteq\mathcal O_K\), \(\operatorname{disc}(\mathcal O)=[\mathcal O_K:\mathcal O]^2d_K\). | L/A; Milne Prop. 2.9; Stein §6.1.  Smith normal form makes the positive index equal to the absolute change-of-basis determinant. |
| `cor-squarefree-power-basis-discriminant-gives-ring-of-integers` | `cor` | If \(\alpha\in\mathcal O_K\), \(K=\mathbb Q(\alpha)\), and the discriminant of its power basis is squarefree, then \(\mathcal O_K=\mathbb Z[\alpha]\). | L/A; Milne Cor. 2.10; Stein §6.1.  The square index must divide a squarefree integer. |
| `thm-ring-of-integers-of-a-quadratic-field` | `thm` | For squarefree \(d\ne1\), \(\mathcal O_{\mathbb Q(\sqrt d)}=\mathbb Z[(1+\sqrt d)/2]\) if \(d\equiv1\pmod4\), and \(\mathbb Z[\sqrt d]\) otherwise. | L/L; Milne Example 2.11; Stein Prop. 2.3.9.  Write an arbitrary integral element in the basis \(1,\sqrt d\) and force integral trace and norm; do not assume the asserted basis. |
| `cor-discriminant-of-a-quadratic-field` | `cor` | For squarefree \(d\ne1\), \(d_K=d\) if \(d\equiv1\pmod4\), and \(d_K=4d\) otherwise. | L/A; Milne Example 2.11; calculate in the preceding integral basis. |
| `cor-ring-of-integers-is-a-dedekind-domain` | `cor` | The ring of integers of every number field is a Dedekind domain. | L/A; Milne Thm. 3.1; apply CA-9's theorem that the finite integral closure of a Dedekind domain in a finite separable extension is Dedekind, with base \(\mathbb Z\). |

#### Proof strategy and well-definedness

The trace and norm are GA-4's field invariants, while integrality and integral
closure are CA-6's; neither is redefined.  Discriminant is first attached to
an ordered basis.  The squared change-of-basis determinant then proves that
the signed integer attached to an order is independent of that basis.  The
embedding determinant uses every embedding, whereas the later Minkowski map
uses one representative from each complex-conjugate pair; these two indexing
conventions must not be mixed.

Every order has full rank by definition.  An integral basis exists by the
finite torsion-free module theorem and is not a chosen permanent part of the
field data.  All assertions and finite-basis choices on NT-19 are provable in
ZF.  The item statements and proof plans are literature-derived; adapted
corollaries are marked L/A and remain load-bearing because their statements
are source-supported.

#### B page

| id | kind | task |
|---|---|---|
| `ex-ring-of-integers-of-q` | `ex` | Recover \(\mathbb Z\), its unique integral basis, and discriminant one. |
| `ex-gaussian-and-eisenstein-integer-bases` | `ex` | Compute signatures, integral bases, and signed discriminants. |
| `ex-ring-of-integers-of-q-sqrt-five` | `ex` | Make the parity correction visible and compare it with \(\mathbb Z[\sqrt5]\). |
| `ex-pure-cubic-power-basis` | `ex` | Compute the power-basis discriminant for \(\mathbb Q(\sqrt[3]2)\) and justify maximality by the sourced local/index argument. |
| `ex-nonmaximal-quadratic-order` | `ex` | For \(\mathbb Z+f\mathcal O_K\), compute the index and discriminant scaling. |
| `ex-index-obstructs-naive-polynomial-factorization` | `ex` | Exhibit a prime dividing \([\mathcal O_K:\mathbb Z[\alpha]]\) where reduction of the minimal polynomial gives the wrong ideal-factorization inference. |
| `cex-a-number-field-need-not-be-monogenic` | `cex` | Include a fully sourced proved nonmonogenic example only; otherwise retain this slot as a documented future source obligation rather than inventing one. |

### NT-20. Prime-ideal decomposition, ramification, and the different

- **A page id:** `prime-ideal-decomposition-ramification-and-the-different`
- **B page id:** `prime-ideal-decomposition-ramification-and-the-different-examples`
- **Requires:** NT-19; CA-9's `def-fractional-ideal`, prime-ideal valuations,
  invertibility of nonzero ideals, and unique ideal factorisation.  General
  Dedekind-domain theory is cited rather than rebuilt.
- **Primary backing:** Milne Ch. 3 §§3.1--3.4, pp. 60--67, especially
  Thms. 3.34, 3.37, 3.43 and the discriminant criterion.  Independent
  treatment: Stein §§4.2 and 6.3.  The different and its exact wild boundary
  are backed by Conrad, *The Different*, §§3--4, especially Thms. 4.3,
  4.8, and 4.13; Reed Lecture 9 independently checks the trace-dual route.

#### A-page items, in dependency order

| id | kind | statement | provenance and locator |
|---|---|---|---|
| `def-absolute-norm-of-an-ideal` | `def` | For a nonzero integral ideal \(\mathfrak a\subseteq\mathcal O_K\), its absolute norm is \(N\mathfrak a=|\mathcal O_K/\mathfrak a|\). | L/NA; Milne §3; Stein §4.2.  Finiteness is proved next, so the definition initially applies when the quotient is known finite. |
| `lem-nonzero-number-field-ideal-has-finite-quotient` | `lem` | Every nonzero integral ideal of \(\mathcal O_K\) has finite additive index. | L/L; Milne Lemma 3.2; Stein §4.2.  A nonzero element \(a\in\mathfrak a\) gives a full-rank principal sublattice contained in \(\mathfrak a\). |
| `thm-principal-ideal-norm-is-absolute-field-norm` | `thm` | For \(0\ne\alpha\in\mathcal O_K\), \(N((\alpha))=|N_{K/\mathbb Q}(\alpha)|\). | L/L; Milne Prop. 3.5; Stein §4.2.  The index of the multiplication map is the absolute determinant in an integral basis. |
| `thm-ideal-norm-is-multiplicative` | `thm` | For nonzero integral ideals, \(N(\mathfrak a\mathfrak b)=N\mathfrak a\,N\mathfrak b\). | L/L; Milne Prop. 3.8; Stein Prop. 4.2.3.  Prove it first on prime powers using quotient filtrations and then use CA-9 unique ideal factorisation. |
| `cor-norm-of-a-prime-ideal` | `cor` | If \(\mathfrak p\cap\mathbb Z=(p)\) and \(f=[\mathcal O_K/\mathfrak p:\mathbb F_p]\), then \(N\mathfrak p=p^f\). | L/A; Milne §3; the quotient is a finite field of the displayed dimension. |
| `def-prime-above-and-residue-degree` | `def` | For \(L/K\), \(\mathfrak P\) lies above \(\mathfrak p\) when \(\mathfrak P\cap\mathcal O_K=\mathfrak p\); define \(f(\mathfrak P/\mathfrak p)=[\kappa(\mathfrak P):\kappa(\mathfrak p)]\). | L/NA; Milne §3; Stein §6.3. |
| `def-ramification-index` | `def` | In the unique ideal factorisation \(\mathfrak p\mathcal O_L=\prod_{i=1}^g\mathfrak P_i^{e_i}\), define \(e(\mathfrak P_i/\mathfrak p)=e_i\). | L/NA; Milne §3.  Existence and uniqueness come from CA-9 applied to \(\mathcal O_L\). |
| `thm-fundamental-identity-for-primes-in-number-fields` | `thm` | For a finite extension \(L/K\), \(\sum_{i=1}^g e(\mathfrak P_i/\mathfrak p)f(\mathfrak P_i/\mathfrak p)=[L:K]\). | L/L; Milne Thm. 3.34; Stein Thm. 6.3.2.  Compare the \(\kappa(\mathfrak p)\)-dimension of \(\mathcal O_L/\mathfrak p\mathcal O_L\) through the prime-power filtration. |
| `def-split-inert-ramified-and-unramified-prime` | `def` | Define complete splitting, inertness, ramification, total ramification, and unramifiedness by the exact \(e_i,f_i,g\) conditions for a finite extension. | L/NA; Milne §3; Stein §6.3.  “Inert” is reserved for one prime with \(e=1,f=[L:K]\). |
| `thm-ramification-and-residue-degrees-in-towers` | `thm` | For \(M/L/K\) and \(\mathfrak Q\mid\mathfrak P\mid\mathfrak p\), \(e(\mathfrak Q/\mathfrak p)=e(\mathfrak Q/\mathfrak P)e(\mathfrak P/\mathfrak p)\) and likewise for \(f\). | L/L; Milne Prop. 3.35; use ideal valuations for \(e\) and residue-field towers for \(f\). |
| `thm-dedekind-kummer-prime-factorisation` | `thm` | If \(\mathcal O_K=\mathbb Z[\alpha]\) and the minimal polynomial satisfies \(\bar f=\prod_i\bar g_i^{e_i}\) over \(\mathbb F_p\) with distinct monic irreducibles \(\bar g_i\), then \(p\mathcal O_K=\prod_i(p,g_i(\alpha))^{e_i}\), and the residue degrees are \(\deg\bar g_i\).  More generally the same conclusion holds at primes not dividing the index \([\mathcal O_K:\mathbb Z[\alpha]]\). | L/L; Milne Thm. 3.43; Stein Thm. 6.3.4.  State the monogenic/index hypothesis in the theorem, not in a buried proof note. |
| `cor-eisenstein-prime-is-totally-ramified` | `cor` | If a power integral generator has an Eisenstein minimal polynomial at \(p\), then \(p\) is totally ramified in the generated number field. | L/A; Milne §3 examples; Dedekind--Kummer reduces the polynomial to \(X^n\). |
| `thm-ramified-primes-and-the-number-field-discriminant` | `thm` | A rational prime ramifies in \(K\) iff it divides \(d_K\). | L/L; Milne Thm. 3.37; Stein §6.3.  Identify degeneracy of the trace pairing modulo \(p\) with nonreducedness of \(\mathcal O_K/p\mathcal O_K\). |
| `cor-only-finitely-many-primes-ramify` | `cor` | Only the finitely many rational prime divisors of \(d_K\) ramify in \(K\). | L/A; Milne Cor. 3.38. |
| `def-trace-dual-and-codifferent-of-a-number-field` | `def` | For a fractional ideal \(\mathfrak a\), set \(\mathfrak a^\vee=\{x\in K:\operatorname{Tr}_{K/\mathbb Q}(x\mathfrak a)\subseteq\mathbb Z\}\); the codifferent is \(\mathcal O_K^\vee\). | L/NA; Conrad §3; Reed Lecture 9.  The trace pairing is the one already supplied by CA-9. |
| `lem-codifferent-is-a-fractional-ideal` | `lem` | The trace dual of a nonzero fractional ideal is a nonzero fractional ideal, and \((c\mathfrak a)^\vee=c^{-1}\mathfrak a^\vee\) for \(c\in K^\times\). | L/L; Conrad Thm. 3.3; Reed Lecture 9.  Use a dual \(\mathbb Q\)-basis and clear finitely many denominators. |
| `def-different-of-a-number-field` | `def` | The different \(\mathfrak D_K\) is the inverse fractional ideal \((\mathcal O_K^\vee)^{-1}\). | L/NA; Conrad Def. 3.5.  Invertibility is CA-9's Dedekind-domain theorem. |
| `thm-different-of-a-monogenic-number-field` | `thm` | If \(\mathcal O_K=\mathbb Z[\alpha]\) with minimal polynomial \(f\), then \(\mathfrak D_K=(f'(\alpha))\). | L/L; Conrad Thm. 3.7; Reed Lecture 9.  Compute the dual power basis by Lagrange interpolation before taking the inverse ideal. |
| `thm-discriminant-is-the-norm-of-the-different` | `thm` | \(N\mathfrak D_K=|d_K|\). | L/L; Conrad Thm. 4.3; Milne §3.  Compare indices of the integral lattice and its trace dual locally.  The relative discriminant/different formalism is deferred rather than used without definitions. |
| `thm-prime-support-of-the-different-is-ramification` | `thm` | A prime ideal divides the different exactly when its underlying prime is ramified. | L/L; Conrad Thm. 4.8; Milne §3.  Localize to the corresponding DVR and compare separability of the residue extension. |
| `def-tame-and-wild-ramification` | `def` | A prime \(\mathfrak P\mid p\) is tamely ramified when the residue characteristic \(p\) does not divide \(e(\mathfrak P/p)\), and wildly ramified otherwise. | L/NA; Conrad §4; Milne Ch. 8. |
| `thm-different-exponent-in-tame-and-wild-ramification` | `thm` | If \(e=e(\mathfrak P/p)\), then \(v_{\mathfrak P}(\mathfrak D_K)\ge e-1\), with equality when \(p\nmid e\), while \(v_{\mathfrak P}(\mathfrak D_K)\ge e\) when \(p\mid e\). | L/L; Conrad Thm. 4.13.  The wild exponent is not asserted to be determined by \(e\). |
| `cor-discriminant-valuation-from-different-exponents` | `cor` | For every rational prime \(p\), \(v_p(d_K)=\sum_{\mathfrak P\mid p}f(\mathfrak P/p)v_{\mathfrak P}(\mathfrak D_K)\). | L/A; Conrad §4 and multiplicativity of ideal norm. |

#### Proof strategy and well-definedness

Ideal norm is first defined for integral ideals and then proved finite and
multiplicative; any later extension to fractional ideals must display the
quotient and prove independence.  The factorisation of
\(\mathfrak p\mathcal O_L\) comes from CA-9, while this page owns the arithmetic
labels \(e\) and \(f\) and the dimension identity.  Every residue-field degree
is attached to a named prime above a named base prime.

The trace dual is a set defined without choosing a basis.  A basis is used
only to prove that it is a fractional ideal, so the codifferent and its inverse
are intrinsic.  Dedekind--Kummer never appears without its index hypothesis.
The tame equality and wild lower bound are recorded separately.  All proofs
on NT-20 are finite algebra in ZF.

#### B page

| id | kind | task |
|---|---|---|
| `ex-prime-factorization-in-quadratic-fields` | `ex` | Factor several primes in real and imaginary quadratic fields and verify \(\sum ef=2\). |
| `ex-dedekind-kummer-in-a-cubic-field` | `ex` | Factor a minimal polynomial modulo several good primes and recover ideal factors. |
| `cex-dedekind-kummer-without-the-index-hypothesis` | `cex` | Reuse NT-19's bad-index field to show the naive conclusion fails. |
| `ex-eisenstein-total-ramification` | `ex` | Work a prime-power example and verify the norm and residue degree. |
| `ex-quadratic-field-codifferent` | `ex` | Compute the trace dual, different, and discriminant norm directly. |
| `ex-cyclotomic-different-preview` | `ex` | Compute a prime cyclotomic different, flagged as preparation for NT-24 rather than a new cyclotomic theorem. |
| `ex-tame-different-exponent` | `ex` | Verify equality \(d=e-1\) in a tame extension. |
| `ex-wild-different-exponent` | `ex` | Give a sourced extension where the different exponent is strictly larger and explain why \(e\) alone does not determine it. |

### NT-21. Decomposition, inertia, and Frobenius

- **A page id:** `decomposition-inertia-and-frobenius`
- **B page id:** `decomposition-inertia-and-frobenius-examples`
- **Requires:** NT-17, NT-20; CA-13's completions; and the abstract-algebra
  pages for the Galois correspondence, finite fields, and restriction in
  towers.  This page applies those results to primes and completions.
- **Primary backing:** Milne Ch. 7, especially Thm. 7.38 and the extension of
  absolute values, and Ch. 8 §§8.1--8.3, pp. 139--145.  Independent full-text
  treatments: Stein §§9.2--9.4; Conrad--Landesman Chs. 23--24.  All three use
  compatible decomposition/inertia exact sequences; the library explicitly
  chooses arithmetic rather than geometric Frobenius.

#### A-page items, in dependency order

| id | kind | statement | provenance and locator |
|---|---|---|---|
| `thm-number-field-places-classification` | `thm` | Every archimedean place of a number field is induced by a real embedding or a conjugate pair of complex embeddings, and every nonarchimedean place is induced by a unique nonzero prime ideal of \(\mathcal O_K\). | L/L; Milne §§7.1--7.3; Stein §9.2.  Quotient by equivalence of absolute values, so conjugate complex embeddings give one place. |
| `def-completion-of-a-number-field-at-a-prime` | `def` | For a nonzero prime \(\mathfrak p\subset\mathcal O_K\), \(K_{\mathfrak p}\) is the metric completion at its normalized absolute value. | L/NA; Milne Ch. 7; Stein §9.2.  The notation includes the chosen base prime but no chosen uniformizer. |
| `thm-unique-extension-of-a-nonarchimedean-absolute-value` | `thm` | For a finite extension of complete nonarchimedean fields \(L/K\), the absolute value extends uniquely to \(L\), and
\[|x|_L=|N_{L/K}(x)|_K^{1/[L:K]}.
\] | L/L; Milne Thm. 7.38; Stein §9.2.  Prove the formula first for algebraic elements and then verify the triangle inequality; uniqueness follows from continuity and density after passage to a normal closure. |
| `thm-galois-action-on-primes-above-a-prime-is-transitive` | `thm` | If \(L/K\) is finite Galois, \(\operatorname{Gal}(L/K)\) acts transitively on the primes of \(\mathcal O_L\) above a fixed \(\mathfrak p\). | L/L; Milne Ch. 8; Conrad--Landesman Ch. 23.  Use Galois invariance of the ideal factorisation and prime avoidance to exclude more than one orbit. |
| `cor-galois-prime-decomposition-efg` | `cor` | In a finite Galois extension, all primes above \(\mathfrak p\) have common \(e\) and \(f\), and \(efg=[L:K]\). | L/A; Milne Ch. 8 and NT-20's fundamental identity. |
| `def-decomposition-group-of-a-prime` | `def` | For \(\mathfrak P\mid\mathfrak p\) in finite Galois \(L/K\), \(D(\mathfrak P/\mathfrak p)=\{\sigma\in\operatorname{Gal}(L/K):\sigma\mathfrak P=\mathfrak P\}\). | L/NA; Milne Ch. 8; Stein §9.3.  The group depends on the chosen prime above \(\mathfrak p\). |
| `thm-decomposition-group-and-completion` | `thm` | Restriction and continuous extension give a canonical isomorphism \(D(\mathfrak P/\mathfrak p)\cong\operatorname{Gal}(L_{\mathfrak P}/K_{\mathfrak p})\). | L/L; Milne Ch. 8; Stein Thm. 9.3.1.  Prove that a stabilizer preserves the absolute value and that every local automorphism descends from the global normal extension. |
| `def-inertia-group-of-a-prime` | `def` | Reduction gives \(D(\mathfrak P/\mathfrak p)\to\operatorname{Gal}(\kappa(\mathfrak P)/\kappa(\mathfrak p))\); its kernel is \(I(\mathfrak P/\mathfrak p)\). | L/NA; Milne Ch. 8; Stein §9.3. |
| `thm-decomposition-inertia-exact-sequence` | `thm` | There is an exact sequence
\[1\to I(\mathfrak P/\mathfrak p)\to D(\mathfrak P/\mathfrak p)\to\operatorname{Gal}(\kappa(\mathfrak P)/\kappa(\mathfrak p))\to1.
\] | L/L; Milne Ch. 8; Stein Thm. 9.3.2.  Surjectivity uses the cyclic Galois group of the finite residue-field extension and the local/global completion correspondence. |
| `cor-orders-of-decomposition-and-inertia-groups` | `cor` | \(|D(\mathfrak P/\mathfrak p)|=ef\), \(|I(\mathfrak P/\mathfrak p)|=e\), and the quotient has order \(f\). | L/A; Milne Ch. 8.  The residue extension is separable because its fields are finite. |
| `thm-conjugacy-of-decomposition-and-inertia-groups` | `thm` | If \(\sigma\mathfrak P=\mathfrak P'\), then \(D(\mathfrak P'/\mathfrak p)=\sigma D(\mathfrak P/\mathfrak p)\sigma^{-1}\) and likewise for inertia. | L/L; Milne Ch. 8; Conrad--Landesman Ch. 23.  Conjugation also transports the residue action. |
| `thm-decomposition-and-inertia-in-towers` | `thm` | Let \(M/L/K\) be a tower with \(M/K\) and \(L/K\) finite Galois, and let \(\mathfrak Q\mid\mathfrak P\mid\mathfrak p\).  Then \(D(\mathfrak Q/\mathfrak P)=D(\mathfrak Q/\mathfrak p)\cap\operatorname{Gal}(M/L)\) and likewise for inertia; restriction gives exact sequences \[1\to D(\mathfrak Q/\mathfrak P)\to D(\mathfrak Q/\mathfrak p)\to D(\mathfrak P/\mathfrak p)\to1\] and the analogous sequence with \(I\) in place of \(D\). | L/L; Milne Ch. 8, tower propositions; Stein §9.4.  Stabilizers give the kernels; transitivity and the multiplicativity of \(e,f\) give surjectivity.  No such quotient assertion is made when the intermediate extension is not Galois. |
| `def-arithmetic-frobenius-coset` | `def` | The arithmetic Frobenius at \(\mathfrak P/\mathfrak p\) is the unique class in \(D/I\) inducing \(x\mapsto x^{N\mathfrak p}\) on \(\kappa(\mathfrak P)\). | L/NA; Milne Ch. 8; Stein §9.4.  Some sources call its inverse geometric Frobenius; the library consistently uses arithmetic Frobenius. |
| `thm-unramified-frobenius-element-exists-uniquely` | `thm` | If \(\mathfrak p\) is unramified at \(\mathfrak P\), inertia is trivial and the arithmetic Frobenius coset has a unique lift \(\operatorname{Frob}_{\mathfrak P}\in D(\mathfrak P/\mathfrak p)\). | L/L; Milne Ch. 8; Stein §9.4.  At a ramified prime the coset is canonical but no lift is declared canonical. |
| `thm-frobenius-elements-above-a-prime-are-conjugate` | `thm` | At an unramified base prime, changing \(\mathfrak P\) conjugates its Frobenius element; hence the base prime determines a conjugacy class in \(\operatorname{Gal}(L/K)\). | L/L; Milne Ch. 8.  This is an element only when the group is abelian or a prime above has been fixed. |
| `thm-frobenius-order-is-residue-degree` | `thm` | The order of arithmetic Frobenius in \(D/I\), and in \(D\) when unramified, is \(f(\mathfrak P/\mathfrak p)\). | L/L; Milne Ch. 8; finite-field Frobenius has order equal to the residue degree. |
| `cor-complete-splitting-and-trivial-frobenius` | `cor` | For an unramified prime in a finite Galois extension, it splits completely iff its Frobenius conjugacy class is the identity. | L/A; Milne Ch. 8.  Combine \(e=1\), Frobenius order \(f\), and \(efg=[L:K]\). |
| `thm-frobenius-cycle-type-and-prime-splitting` | `thm` | Let \(f\in\mathbb Z[X]\) be monic and separable over \(\mathbb Q\), with splitting field \(L\).  If \(p\nmid\operatorname{disc}(f)\), then \(p\) is unramified in \(L\), \(\bar f\) is squarefree, and the degrees of its distinct irreducible factors are the cycle lengths of an arithmetic Frobenius at any chosen prime above \(p\) acting on the roots of \(f\). | L/L; Conrad--Landesman Ch. 24; Milne Ch. 8.  Reduction identifies Frobenius orbits with irreducible factors; changing the prime conjugates the permutation, so its cycle type is unchanged. |

#### Proof strategy and well-definedness

The local absolute value is normalized by the norm formula and is independent
of a uniformizer.  A decomposition group is attached to a chosen
\(\mathfrak P\); changing that choice gives a conjugate subgroup, not literal
equality.  Reduction is defined only for stabilizing automorphisms.  Its
kernel is inertia and its quotient, not an arbitrary lift, contains the
canonical Frobenius at a ramified prime.

For unramified primes the finite-field Frobenius lifts uniquely.  The phrase
“the Frobenius at \(\mathfrak p\)” therefore denotes a conjugacy class unless
the extension is abelian.  All groups and prime fibres here are finite; the
proofs and the choice of the least polynomial representatives are ZF.  The
page inherits NT-17's separately recorded completion cost.

#### B page

| id | kind | task |
|---|---|---|
| `ex-decomposition-inertia-in-a-quadratic-field` | `ex` | Compute \(D,I\), residue Frobenius, and all \(e,f,g\) cases. |
| `ex-gaussian-and-eisenstein-frobenius` | `ex` | Relate congruence classes of rational primes to splitting and Frobenius. |
| `ex-frobenius-in-a-small-cyclotomic-field` | `ex` | Compute arithmetic Frobenius as a power map, anticipating NT-24. |
| `ex-nonabelian-frobenius-conjugacy-class` | `ex` | Show that different primes above one base prime give conjugate but unequal elements. |
| `ex-decomposition-groups-in-a-tower` | `ex` | Verify restriction, kernels, and the multiplication of \(e\) and \(f\). |
| `cex-ramified-frobenius-has-no-canonical-lift` | `cex` | Display distinct lifts of the same residue Frobenius coset. |
| `cex-frobenius-cycle-type-needs-good-reduction` | `cex` | Show why ramified or index-dividing primes are excluded from the polynomial factorization statement. |

### NT-22. Minkowski theory and number-field class groups

- **A page id:** `minkowski-theory-and-number-field-class-groups`
- **B page id:** `minkowski-theory-and-number-field-class-groups-examples`
- **Requires:** NT-19--NT-20; CA-9's `def-ideal-class-group-of-a-domain`,
  `lem-ideal-class-group-well-defined`, and class-group/PID criterion; and the
  published finite-dimensional Euclidean topology and volume theory.  This
  page proves arithmetic finiteness of the already-defined class group.
- **Primary backing:** Milne Ch. 4, pp. 68--82, Thms. 4.4--4.8 and the
  Minkowski class bound, together with Thm. 8.43 for Hermite--Minkowski.
  Independent complete treatments: Stein §§7.1--7.3; Conrad--Landesman
  Chs. 25--28.

#### A-page items, in dependency order

| id | kind | statement | provenance and locator |
|---|---|---|---|
| `def-minkowski-embedding-of-a-number-field` | `def` | For signature \((r_1,r_2)\), the unscaled Minkowski embedding sends \(x\) to its \(r_1\) real values and one value in \(\mathbb C\) from each conjugate pair, identified with \(\mathbb R^{r_1+2r_2}\) by separate real and imaginary coordinates. | L/NA; Milne §4; Stein §7.1.  No \(\sqrt2\) scaling is used. |
| `def-full-euclidean-lattice-and-covolume` | `def` | A full lattice in \(\mathbb R^n\) is the integer span of a real basis; its covolume is the absolute determinant of any basis matrix. | L/NA; Milne §4; Conrad--Landesman Ch. 25.  Unimodular changes prove basis independence. |
| `lem-blichfeldt-lattice-point-principle` | `lem` | If a measurable set \(S\subset\mathbb R^n\) has volume greater than the covolume of a full lattice \(\Lambda\), two distinct points of \(S\) differ by an element of \(\Lambda\). | L/L; Milne Lemma 4.2; Stein §7.1.  Reduce to a fundamental parallelotope and apply finite or measure-theoretic pigeonhole with boundary handled explicitly. |
| `thm-minkowski-convex-body-theorem` | `thm` | If \(C\subset\mathbb R^n\) is convex, centrally symmetric, and measurable with \(\operatorname{vol}(C)>2^n\operatorname{covol}(\Lambda)\), then \(C\) contains a nonzero point of \(\Lambda\). | L/L; Milne Thm. 4.4; Stein Thm. 7.1.3.  Apply Blichfeldt to \(\tfrac12C\); convexity and symmetry put the difference back in \(C\). |
| `def-successive-minima-of-a-convex-body-with-respect-to-a-lattice` | `def` | For a centrally symmetric convex body \(C\subset\mathbb R^n\) and a full lattice \(\Lambda\), \(\lambda_i(C,\Lambda)\) is the infimum of \(\lambda>0\) for which \(\lambda C\cap\Lambda\) spans a real subspace of dimension at least \(i\). | L/NA; standard geometry-of-numbers convention.  Record \(0<\lambda_1\le\cdots\le\lambda_n<\infty\) and keep the body/lattice arguments explicit. |
| `thm-minkowski-second-theorem-on-successive-minima` | `thm` | For the preceding data, \[\frac{2^n}{n!}\operatorname{covol}(\Lambda)\le \lambda_1\cdots\lambda_n\operatorname{vol}(C)\le 2^n\operatorname{covol}(\Lambda).\] | L/L; the standard successive-minima proof, cross-checked against Dummit's *Number Theory, Part 9*.  This is the exact supplier needed by combinatorics CB-32's full Freiman theorem. |
| `thm-ring-of-integers-and-ideals-are-full-lattices` | `thm` | The Minkowski images of \(\mathcal O_K\) and every nonzero fractional ideal are full lattices in \(\mathbb R^{[K:\mathbb Q]}\). | L/L; Milne Prop. 4.5; Stein §7.1.  An integral basis and a fractional-ideal \(\mathbb Z\)-basis span the real embedding space. |
| `thm-covolume-of-an-ideal-lattice` | `thm` | With the unscaled embedding,
\[\operatorname{covol}(\sigma(\mathfrak a))=2^{-r_2}\sqrt{|d_K|}\,N\mathfrak a
\]
for every nonzero integral ideal \(\mathfrak a\). | L/L; Milne Prop. 4.5; Stein §7.1.  Pair conjugate embedding rows and compute their real-imaginary determinant; do not import the scaled convention's different factor.  Fractional ideals are first scaled to integral ideals whenever this formula is applied to them. |
| `lem-archimedean-norm-bound` | `lem` | The standard symmetric product region used in Minkowski's proof has the computed volume and every point in it satisfies the displayed bound on \(\prod_i|\sigma_i(x)|\), with complex factors squared. | L/L; Milne Lemma 4.6; Conrad--Landesman Ch. 26.  Optimize the real and complex radii under the product constraint. |
| `thm-small-element-in-a-number-field-ideal` | `thm` | If \(0\ne\mathfrak a\subseteq\mathcal O_K\), some \(0\ne\alpha\in\mathfrak a\) satisfies
\[|N_{K/\mathbb Q}(\alpha)|\le {4^{r_2}\over\pi^{r_2}}{n!\over n^n}\sqrt{|d_K|}\,N\mathfrak a .
\] | L/L; Milne Thm. 4.7; Stein §7.2.  Apply Minkowski to the product region and pass from archimedean coordinates to field norm. |
| `thm-minkowski-bound-for-ideal-classes` | `thm` | Every class in \(\operatorname{Cl}(\mathcal O_K)\) contains an integral ideal \(\mathfrak b\) with
\[N\mathfrak b\le M_K:={4^{r_2}\over\pi^{r_2}}{n!\over n^n}\sqrt{|d_K|}.
\] | L/L; Milne Thm. 4.8; Stein Thm. 7.2.1.  Apply the small-element theorem to an integral multiple of an inverse fractional ideal and check that the constructed ideal represents the original, not its inverse. |
| `thm-finiteness-of-the-number-field-class-group` | `thm` | The ideal class group of \(\mathcal O_K\) is finite. | L/L; Milne Cor. 4.9; Stein §7.2.  There are only finitely many ideals of bounded norm because each contains the integer \(N\mathfrak a\) and finite quotients have only finitely many subgroups. |
| `cor-class-group-generated-by-small-primes` | `cor` | The class group is generated by prime ideals of norm at most \(M_K\). | L/A; Milne Cor. 4.9; factor a bounded representative into prime ideals. |
| `cor-no-nontrivial-number-field-has-discriminant-plus-or-minus-one` | `cor` | If \([K:\mathbb Q]>1\), then \(|d_K|>1\). | L/A; Milne Ch. 4 discriminant bound.  Apply Minkowski to the unit ideal and use the strict numerical inequality in each signature, with the small degrees checked separately. |
| `cor-no-nontrivial-number-field-is-unramified-over-q` | `cor` | Every nontrivial number field has a rational prime ramified in it. | L/A; combine the preceding discriminant result with NT-20's ramification--discriminant criterion.  This concerns finite primes. |
| `thm-hermite-minkowski-finiteness` | `thm` | For fixed positive integers \(n\) and \(B\), only finitely many isomorphism classes of degree-\(n\) number fields satisfy \(|d_K|\le B\). | L/L; Milne Thm. 8.43; Conrad--Landesman Ch. 28.  Produce a primitive integral element with uniformly bounded conjugates, hence one of finitely many monic integer minimal polynomials. |

#### Proof strategy, normalization, and choice

The embedding is unscaled, so conjugate pairs contribute the factor
\(2^{-r_2}\) to covolume and \(4/\pi\) to the class bound.  A future proof
must not splice a covolume calculation from the \(\sqrt2\)-scaled convention
into this formula.  Ideal classes and their equality are already
well-defined in CA-9.  Multiplication by an element scales the ideal lattice
by the absolute field norm, which makes the representative construction
independent of the initially chosen integral multiple.

Blichfeldt and Minkowski use only finite-dimensional Euclidean volume and
finite pigeonhole arguments.  The number-theoretic construction is ZF once
the cited published Euclidean measure results are available; it inherits
exactly whatever choice strength those supplier items declare and adds no
choice.  The finite set of bounded polynomials in Hermite--Minkowski is
canonically enumerable.

#### B page

| id | kind | task |
|---|---|---|
| `ex-minkowski-bound-for-gaussian-integers` | `ex` | Show immediately that every ideal class is principal. |
| `ex-class-group-of-q-sqrt-minus-five` | `ex` | Use small prime ideals to compute the nontrivial class and its order. |
| `ex-class-group-of-q-sqrt-ten` | `ex` | Compute a real quadratic class group from the bound. |
| `ex-class-group-from-small-prime-ideals` | `ex` | Give a higher-degree worked enumeration with all norm exclusions proved. |
| `ex-discriminant-lower-bound` | `ex` | Track the signature constant and rule out discriminant \(\pm1\). |
| `ex-no-everywhere-unramified-extension-of-q` | `ex` | Translate the discriminant conclusion into finite ramification. |
| `cex-minkowski-constants-change-under-scaled-embedding` | `cex` | Calculate both covolume conventions and show how mixing them produces a false bound. |

### NT-23. Dirichlet's unit theorem, regulators, and S-units

- **A page id:** `dirichlets-unit-theorem-regulators-and-s-units`
- **B page id:** `dirichlets-unit-theorem-regulators-and-s-units-examples`
- **Requires:** NT-19--NT-22; CA-9's fractional ideals, prime valuations, and
  finite ideal class group; and the finite-dimensional lattice results just
  proved on NT-22.
- **Primary backing:** Milne Ch. 5 “Units,” pp. 85--91, especially Lemmas
  5.1--5.2 and Thm. 5.3.  Independent complete-text treatments: Stein §8.1;
  Conrad--Landesman Ch. 29.  The \(S\)-unit extension is cross-checked against
  Milne's valuation exact-sequence argument and the corresponding
  Conrad--Landesman section.

#### A-page items, in dependency order

| id | kind | statement | provenance and locator |
|---|---|---|---|
| `lem-roots-of-unity-in-a-number-field-are-finite` | `lem` | The group \(\mu(K)\) of roots of unity contained in a number field is finite. | L/L; Milne Lemma 5.1; Stein §8.1.  A root of unity is an algebraic integer and all its conjugates have absolute value one; bounded lattice points are finite. |
| `thm-kronecker-root-of-unity-criterion` | `thm` | A nonzero algebraic integer all of whose conjugates have absolute value at most one is a root of unity. | L/L; Milne Lemma 5.2; Conrad--Landesman Ch. 29.  Bound the coefficients of every polynomial \(\prod_i(X-\sigma_i(\alpha^m))\); finitely many such integer polynomials force two powers to coincide. |
| `lem-algebraic-integer-is-a-unit-iff-norm-is-plus-or-minus-one` | `lem` | For \(u\in\mathcal O_K\), \(u\) is a unit iff \(N_{K/\mathbb Q}(u)=\pm1\). | L/L; Milne Ch. 5; Stein §8.1.  In one direction use multiplicativity; in the other the constant term of the monic minimal polynomial writes \(u^{-1}\) as an integral polynomial in \(u\). |
| `thm-product-formula-for-number-fields` | `thm` | Normalize finite absolute values by \(|x|_{\mathfrak p}=N\mathfrak p^{-v_{\mathfrak p}(x)}\), real ones by \(|\sigma(x)|\), and complex ones by \(|\tau(x)|^2\).  Then \(\prod_v|x|_v=1\) for every \(x\in K^\times\), with finite support away from one. | L/L; Milne Chs. 5 and 7; Stein §8.1.  Reduce finite factors to the principal-ideal norm formula and archimedean factors to the signed field norm. |
| `def-logarithmic-unit-embedding` | `def` | With one embedding from each complex pair, define
\[\lambda(u)=(\log|\sigma_1u|,\dots,\log|\sigma_{r_1}u|,2\log|\tau_1u|,\dots,2\log|\tau_{r_2}u|).
\] | L/NA; Milne §5; Stein §8.1.  The factor two is part of the convention. |
| `lem-unit-logarithms-lie-in-the-product-formula-hyperplane` | `lem` | \(\lambda(\mathcal O_K^\times)\) lies in \(H=\{(x_i):\sum_i x_i=0\}\). | L/L; Milne Ch. 5.  Units have zero valuation at every finite prime, so the number-field product formula leaves exactly the displayed archimedean sum. |
| `lem-kernel-of-the-unit-logarithm-is-the-roots-of-unity` | `lem` | \(\ker\lambda=\mu(K)\). | L/L; Milne Lemmas 5.1--5.2.  Zero logarithms make every conjugate have modulus one; apply Kronecker. |
| `lem-logarithmic-unit-image-is-discrete` | `lem` | The subgroup \(\lambda(\mathcal O_K^\times)\subset H\) is discrete. | L/L; Milne proof of Thm. 5.3; Stein §8.1.  Units in a bounded log box give algebraic integers in a bounded Minkowski region and hence a finite set. |
| `thm-logarithmic-unit-image-is-a-full-lattice` | `thm` | The discrete subgroup \(\lambda(\mathcal O_K^\times)\) spans \(H\) and is therefore a full lattice of rank \(r_1+r_2-1\). | L/L; Milne Thm. 5.3; Conrad--Landesman Ch. 29.  The hard spanning step uses Minkowski's convex-body theorem and finiteness of ideal classes to produce a unit outside each proposed proper span. |
| `thm-dirichlet-unit-theorem` | `thm` | There is an isomorphism \(\mathcal O_K^\times\cong\mu(K)\times\mathbb Z^{r_1+r_2-1}\). | L/L; Milne Thm. 5.3; Stein Thm. 8.1.2.  Lift a lattice basis through \(\lambda\); the kernel is finite and the quotient is free.  The isomorphism depends on chosen fundamental units, but the rank and torsion subgroup do not. |
| `def-fundamental-units` | `def` | A system of fundamental units is a list \(\varepsilon_1,\dots,\varepsilon_r\) whose logarithms form a \(\mathbb Z\)-basis of the unit lattice, where \(r=r_1+r_2-1\). | L/NA; Milne Ch. 5; Stein §8.1.  It is a choice of basis, not canonical field data. |
| `def-number-field-regulator` | `def` | For fundamental units, the regulator is the absolute determinant of the \(r\times r\) matrix obtained from their logarithmic columns by deleting any one of the \(r+1\) coordinates; for \(r=0\), set the empty determinant equal to one. | L/NA; Milne Ch. 5; Stein §8.1.  This definition uses the doubled complex-coordinate convention above. |
| `thm-number-field-regulator-is-well-defined` | `thm` | The regulator is independent of the deleted row and of the chosen fundamental units and is a positive real number. | L/L; Milne Ch. 5; Stein §8.1.  Cofactors of a matrix whose columns sum to zero agree up to sign, and a new lattice basis acts by \(\operatorname{GL}_r(\mathbb Z)\). |
| `cor-unit-ranks-by-number-field-signature` | `cor` | The unit rank is zero for \(\mathbb Q\) and imaginary quadratic fields, one for real quadratic fields, and in general \(r_1+r_2-1\). | L/A; Milne Thm. 5.3.  The B page relates the real quadratic generator to, but does not identify it blindly with, a Pell solution in a nonmaximal order. |
| `def-s-integers-and-s-units-of-a-number-field` | `def` | For a finite set \(S\) of finite primes of \(K\),
\[\mathcal O_{K,S}=\{x\in K:v_{\mathfrak p}(x)\ge0\text{ for }\mathfrak p\notin S\},\qquad
\mathcal O_{K,S}^{\times}=\{x:v_{\mathfrak p}(x)=0\text{ for }\mathfrak p\notin S\}.
\] | L/NA; Milne's localization discussion; Conrad--Landesman Ch. 29.  This convention lets \(S\) contain only finite primes; all archimedean places are already built into the logarithmic map. |
| `thm-s-unit-theorem` | `thm` | If \(S\) is finite, \(\mathcal O_{K,S}^{\times}\cong\mu(K)\times\mathbb Z^{r_1+r_2-1+|S|}\). | L/L; Milne valuation exact sequence; Conrad--Landesman Ch. 29.  Map an \(S\)-unit to its valuation vector in \(\mathbb Z^S\); the kernel is \(\mathcal O_K^\times\), and finiteness of the class group shows the image has finite index. |

#### Proof strategy, well-definedness, and choice

The logarithmic convention is fixed before the product hyperplane or
regulator is mentioned.  With doubled complex coordinates the coordinate sum
is literally zero.  Fundamental units and a deleted regulator coordinate are
auxiliary choices; the determinant argument proves that the resulting
positive number is independent of both.  Rank zero uses the empty determinant
convention explicitly.

The \(S\)-integer ring is a CA localisation and its unit characterization is
proved from prime-ideal valuations.  The map to \(\mathbb Z^S\) is intrinsic;
choosing generators of a finite-index image only proves existence of a
noncanonical direct-product isomorphism.  All new selections are finite and
NT-23 is ZF once NT-22's lattice results are supplied; it inherits no choice
beyond its cited predecessors.

#### B page

| id | kind | task |
|---|---|---|
| `ex-units-of-q-and-imaginary-quadratic-fields` | `ex` | Determine the finite unit groups and verify rank zero. |
| `ex-real-quadratic-units-and-pell` | `ex` | Relate norm-one units in the full ring of integers to NT-8, keeping the \(d\equiv1\pmod4\) basis correction visible. |
| `ex-units-in-a-real-cubic-field` | `ex` | Exhibit two independent units and verify the signature rank. |
| `ex-regulator-of-a-real-quadratic-field` | `ex` | Compute the one-dimensional covolume under the adopted log normalization. |
| `ex-change-of-fundamental-units-preserves-regulator` | `ex` | Apply an explicit unimodular basis change. |
| `ex-s-units-of-q` | `ex` | Prove \(\mathbb Z[S^{-1}]^\times=\{\pm\prod_{p\in S}p^{n_p}:n_p\in\mathbb Z\}\). |
| `cex-z-sqrt-d-units-need-not-equal-ok-units` | `cex` | Show why the elementary Pell order cannot silently be identified with the maximal quadratic order. |

### NT-24. Cyclotomic arithmetic and reciprocity via Frobenius

- **A page id:** `cyclotomic-arithmetic-and-reciprocity-via-frobenius`
- **B page id:** `cyclotomic-arithmetic-and-reciprocity-via-frobenius-examples`
- **Requires:** NT-3, NT-19--NT-21; GA-3's cyclotomic polynomials,
  \(\mathbb Q(\zeta_n)/\mathbb Q\), degree \(\varphi(n)\), Galois
  isomorphism with \((\mathbb Z/n\mathbb Z)^\times\), and existence and
  uniqueness of the index-two subfield for odd prime level, together with
  GA-3's `thm-kronecker-weber`.  Those Galois facts are cited, not re-minted.
- **Primary backing:** Milne Ch. 6 “Cyclotomic Extensions,” pp. 95--104,
  Props. 6.2, Thm. 6.4, Lemma 6.5, Remark 6.6, and Ch. 8 Examples
  8.18--8.19.  Independent full-note treatment: Conrad--Landesman Chs. 10--11
  and 24.  Reed Math 361 Lecture 9 §§2--3 and UCSB 225A Lecture XVII,
  pp. 3--7, independently supply the Gauss-sum/Frobenius reciprocity route.

#### A-page items, in dependency order

| id | kind | statement | provenance and locator |
|---|---|---|---|
| `def-conductor-of-a-cyclotomic-field` | `def` | If \(K=\mathbb Q(\zeta_n)\), its cyclotomic conductor is the least \(f\ge1\) such that \(K\subseteq\mathbb Q(\zeta_f)\). | L/NA; Milne Remark 6.6; Conrad--Landesman Remark 11.7.  Existence comes from \(n\) and leastness from well-ordering.  This is neither the Artin conductor of a character nor the conductor of an arbitrary abelian field supplied existentially by Kronecker--Weber. |
| `thm-cyclotomic-ring-of-integers` | `thm` | For every \(n\ge1\), \(\mathcal O_{\mathbb Q(\zeta_n)}=\mathbb Z[\zeta_n]\); if \(f\) is the reduced conductor, \(1,\zeta_f,\dots,\zeta_f^{\varphi(f)-1}\) is an integral basis. | L/L; Milne Prop. 6.2(b), Thm. 6.4(b); Conrad--Landesman Thms. 10.1 and 11.6.  Prove the prime-power case by discriminant/index control, then combine coprime prime powers with the sourced compositum integer-ring theorem.  Integrality of \(\zeta_n\) alone is not maximality. |
| `thm-discriminant-of-a-cyclotomic-field` | `thm` | If \(f>1\) is the reduced conductor and \(K=\mathbb Q(\zeta_f)\), then
\[d_K=(-1)^{\varphi(f)/2}{f^{\varphi(f)}\over\prod_{\ell\mid f}\ell^{\varphi(f)/(\ell-1)}};
\]
for \(f=1\), \(d_{\mathbb Q}=1\). | L/L; Milne Prop. 6.2(d) and Remark 6.6; Conrad--Landesman Lemma 10.2 and Thm. 11.9.  Apply NT-20's monogenic different formula to \(\Phi_f'(\zeta_f)\), evaluate its norm, and take sign \((-1)^{r_2}\). |
| `cor-total-ramification-in-a-prime-power-cyclotomic-field` | `cor` | For \(a\ge1\), in \(\mathbb Q(\zeta_{\ell^a})\),
\[\ell\mathcal O_K=(1-\zeta_{\ell^a})^{\varphi(\ell^a)};
\]
the displayed principal ideal is the unique prime above \(\ell\) and its residue field is \(\mathbb F_\ell\). | L/A; Milne Prop. 6.2(c); Conrad--Landesman Lemmas 10.5--10.6 and Cor. 10.7. |
| `thm-prime-factorisation-in-a-cyclotomic-field` | `thm` | Let \(f\) be a reduced cyclotomic conductor and write \(f=\ell^am\), where \(\ell\) is prime and \((\ell,m)=1\).  Set \(e=\varphi(\ell^a)\) with \(\varphi(1)=1\), \(d=\operatorname{ord}_m(\ell)\) with \(\operatorname{ord}_1(\ell)=1\), and \(g=\varphi(m)/d\).  Then
\[\ell\mathcal O_{\mathbb Q(\zeta_f)}=(\mathfrak P_1\cdots\mathfrak P_g)^e,
\]
with distinct \(\mathfrak P_i\), each of residue degree \(d\), so \(edg=\varphi(f)\). | L/L; Milne Thm. 6.4(c) and Example 8.18; Conrad--Landesman Chs. 11 and 24.  Combine total ramification in the \(\ell\)-power factor with arithmetic Frobenius \(\zeta_m\mapsto\zeta_m^\ell\) in the unramified factor. |
| `cor-cyclotomic-ramification-criterion` | `cor` | A rational prime \(\ell\) ramifies in \(\mathbb Q(\zeta_f)\) iff \(\ell\mid f\), where \(f\) is the reduced conductor. | L/A; Milne Thm. 6.4(c).  Using an unreduced display index would make this statement false, for example at \(\mathbb Q(\zeta_6)=\mathbb Q(\zeta_3)\). |
| `thm-conductor-of-a-full-cyclotomic-field` | `thm` | The conductor of \(\mathbb Q(\zeta_n)\) is \(n\), except that it is \(n/2\) when \(n\equiv2\pmod4\); in particular \(\mathbb Q(\zeta_{2m})=\mathbb Q(\zeta_m)\) for odd \(m\), and \(\mathbb Q(\zeta_2)=\mathbb Q\) has conductor one. | L/L; Milne Remark 6.6; Conrad--Landesman Remark 11.7.  The equality follows from \(-\zeta_m\).  For reduced indices, compare each prime-power ramification index in an inclusion \(\mathbb Q(\zeta_f)\subseteq\mathbb Q(\zeta_g)\): divisibility of ramification indices forces every prime exponent in \(f\) to be no larger than its exponent in reduced \(g\), hence \(f\mid g\). |
| `cor-unramified-prime-decomposition-in-a-cyclotomic-field` | `cor` | If \(\ell\nmid f\), every prime above \(\ell\) has residue degree \(\operatorname{ord}_f(\ell)\), and their number is \(\varphi(f)/\operatorname{ord}_f(\ell)\). | L/A; Milne Example 8.18; the Frobenius element corresponds to the class of \(\ell\) modulo \(f\). |
| `cor-complete-splitting-in-a-cyclotomic-field` | `cor` | If \(\ell\nmid f\), then \(\ell\) splits completely in \(\mathbb Q(\zeta_f)\) iff \(\ell\equiv1\pmod f\). | L/A; Milne Example 8.18; NT-21's trivial-Frobenius criterion. |
| `cor-ramification-support-of-an-abelian-number-field` | `cor` | If \(K/\mathbb Q\) is finite abelian, GA-3's `thm-kronecker-weber` places \(K\) in some \(\mathbb Q(\zeta_f)\); hence every rational prime ramified in \(K\) divides \(f\). | L/A; cite Kronecker--Weber and the cyclotomic ramification criterion above, then use ramification in towers.  NT-24 owns this arithmetic consequence but does not re-prove the Galois theorem or claim a canonical minimal embedding conductor. |
| `def-quadratic-gauss-sum-in-a-cyclotomic-field` | `def` | For an odd prime \(p\) and a fixed primitive \(p\)-th root \(\zeta_p\), set \(\tau_p=\sum_{a\bmod p}(a/p)\zeta_p^a\in\mathbb Z[\zeta_p]\). | L/NA; Reed Lecture 9 §2; UCSB Lecture XVII.  The Legendre symbol is the total NT-2 symbol, so the zero term contributes zero. |
| `lem-galois-action-on-the-quadratic-gauss-sum` | `lem` | If \(\sigma_b(\zeta_p)=\zeta_p^b\), then \(\sigma_b(\tau_p)=(b/p)\tau_p\). | L/L; Reed Lecture 9; Milne Example 8.19.  Substitute \(a\mapsto b^{-1}a\) and use multiplicativity of the Legendre symbol. |
| `thm-quadratic-gauss-sum-square` | `thm` | \(\tau_p^2=p^*=(-1)^{(p-1)/2}p\). | L/L; Reed Lecture 9 §2; UCSB Lecture XVII.  Expand, set one nonzero index equal to a multiple of the other, and evaluate the inner complete additive-character sum.  The stronger analytic sign of \(\tau_p\) under a complex embedding is not needed. |
| `thm-quadratic-subfield-of-a-prime-cyclotomic-field` | `thm` | The unique quadratic subfield of \(\mathbb Q(\zeta_p)\) is \(\mathbb Q(\tau_p)=\mathbb Q(\sqrt{p^*})\). | L/L; Milne Example 8.19; Reed Lecture 9 §3.  GA-3 supplies existence and uniqueness of the index-two subfield; the Galois-action lemma identifies it arithmetically. |
| `thm-quadratic-frobenius-restriction-identity` | `thm` | For distinct odd primes \(p,q\), arithmetic \(\operatorname{Frob}_q\) in \(\mathbb Q(\zeta_p)\) sends \(\zeta_p\mapsto\zeta_p^q\) and acts on \(\tau_p\) by \((q/p)\), while its restriction to \(\mathbb Q(\sqrt{p^*})\) acts by \((p^*/q)\); hence \((p^*/q)=(q/p)\). | L/L; Milne Example 8.19; Reed Lecture 9 §3; UCSB Thm. 6.9.  The equality compares two descriptions of the same arithmetic Frobenius restriction. |
| `cor-quadratic-reciprocity-via-frobenius` | `cor` | For distinct odd primes \(p,q\), \((p/q)(q/p)=(-1)^{(p-1)(q-1)/4}\). | L/A; Milne Example 8.19.  Expand \(p^*\) and invoke NT-3's first supplement.  This is a second proof and reinterpretation, never a dependency of the low block. |
| `cor-first-supplement-via-cyclotomic-frobenius` | `cor` | In \(\mathbb Q(i)=\mathbb Q(\zeta_4)\), restriction of Frobenius recovers \((-1/q)=(-1)^{(q-1)/2}\). | L/A; Milne Example 8.19.  Frobenius is trivial exactly for \(q\equiv1\pmod4\). |
| `cor-second-supplement-via-cyclotomic-frobenius` | `cor` | Since \(\mathbb Q(\sqrt2)\) is the quadratic subfield of \(\mathbb Q(\zeta_8)\), restriction of Frobenius gives \((2/q)=(-1)^{(q^2-1)/8}\). | L/A; Reed Lecture 9 §2.  Compute the action on \(\sqrt2=\zeta_8+\zeta_8^{-1}\) for the four odd residue classes modulo eight. |

#### Proof strategy and well-definedness

Every ramification and discriminant formula is parametrized by the intrinsic
conductor; the conductor theorem then computes it from any displayed index.
The integer-ring theorem
is the hard step: prove it for prime powers and then use the precise coprime-
degree/discriminant hypotheses of the compositum theorem.  Being generated by
an algebraic integer never by itself proves that the generated order is
maximal.

The library uses arithmetic Frobenius \(x\mapsto x^{N\mathfrak p}\); replacing
it by geometric Frobenius would invert every displayed Galois element.  The
Gauss sum depends on the chosen primitive root: replacing \(\zeta_p\) by
\(\zeta_p^b\) multiplies \(\tau_p\) by \((b/p)\).  Its square and generated
quadratic subfield are independent of that choice.  The signed field
discriminant, the different ideal, and its positive ideal norm remain
distinct objects.  All arguments are finite algebra and finite sums in ZF.

#### B page

| id | kind | task |
|---|---|---|
| `ex-reduced-conductor-of-q-zeta-six` | `ex` | Prove \(\mathbb Q(\zeta_6)=\mathbb Q(\zeta_3)\), so the conductor is three and two does not ramify. |
| `ex-arithmetic-of-q-zeta-five` | `ex` | Compute \(\mathcal O_K\), \(d_K=5^3\), total ramification of five, inertia of two, and complete splitting of eleven. |
| `ex-prime-decomposition-in-q-zeta-eight` | `ex` | Compute the discriminant and the residue degrees of every odd prime from its order modulo eight. |
| `ex-prime-decomposition-in-q-zeta-twelve` | `ex` | Work the ramified primes two and three and the unramified residue classes. |
| `ex-quadratic-gauss-sum-for-three` | `ex` | With the standard complex primitive root, compute \(\tau_3=i\sqrt3\) and \(\tau_3^2=-3\). |
| `ex-quadratic-gauss-sum-for-five` | `ex` | Compute \(\tau_5=\sqrt5\) under the standard embedding and find its square-subgroup stabilizer. |
| `ex-quadratic-subfield-of-q-zeta-seven` | `ex` | Identify the unique quadratic subfield as \(\mathbb Q(\sqrt{-7})\). |
| `ex-frobenius-restriction-for-p-five-q-three` | `ex` | Compare both Legendre-symbol descriptions of the nontrivial restriction. |
| `ex-second-supplement-from-q-zeta-eight` | `ex` | Read the action of each odd residue class on \(\sqrt2\). |
| `cex-gauss-sum-sign-without-a-complex-embedding` | `cex` | Change the primitive root and show that no sign of \(\tau_p\) is canonical although its square is. |

## 7. Canonical-coverage harvest

This is a result-by-result disposition ledger for the exact source ranges
actually read.  “Included” names an A-page item (or a named B companion);
“inline” names the item whose proof absorbs the result; “already published”
names the live supplier; “deferred” and “out of scope” give the result-specific
reason.  Exercise sections outside a selected range are not claimed as read.

### 7.1 Full texts obtained

The following complete books or complete lecture-note sets were obtained in
full from legitimate author or university hosts.  Thus the commission's
two-textbook minimum is exceeded by Hackman, both Stein texts, Shoup, Milne,
Crisman, and the several full note sets.

| source | full-text URL | selected read range |
|---|---|---|
| Peter Hackman, *Elementary Number Theory* | <https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf> | Chs. C--H, pp. 69--249; Ch. K, pp. 291--311, inspected as an alternate route |
| Victor Shoup, *A Computational Introduction to Number Theory and Algebra*, 2nd ed. | <https://shoup.net/ntb/ntb-v2.pdf> | §§2.8--2.9, 4.5, 5.1--5.3, 7.5, 12.1--12.3 |
| William Stein, *Elementary Number Theory: Primes, Congruences, and Secrets* | <https://wstein.org/ent/ent.pdf> | §§2.5, 4.1--4.3, 5.1--5.7 |
| William Stein, *Elementary Number Theory and Elliptic Curves* (2003) | <https://wstein.org/edu/Fall2002/124/stein/main-05-2003.pdf> | Ch. 9 §§9.2--9.4, pp. 116--124 |
| William Stein, *Algebraic Number Theory: A Computational Approach* | <https://wstein.org/books/ant/ant.pdf> | §§2.3--2.4, 3.1, 4.1--4.3, 6.1--6.3, 7.1--7.3, 8.1--8.2, 9.2--9.4 |
| J. S. Milne, *Algebraic Number Theory*, v3.08 | <https://www.jmilne.org/math/CourseNotes/ANT.pdf> | Chs. 2--8, selected headings and results enumerated below |
| Karl-Dieter Crisman, *Number Theory: In Context and Interactive* | <https://math.gordon.edu/ntic/nticoneside.pdf> | Chs. 14, 18--21, 23, and §24.6.4 |
| MIT 18.781, *Theory of Numbers* | <https://ocw.mit.edu/courses/18-781-theory-of-numbers-spring-2012/pages/lecture-notes/> | notes headed primitive roots, reciprocity/Jacobi, arithmetic functions/Möbius, two squares, continued fractions, Pell, four squares |
| Kiran Kedlaya, *Notes on Analytic Number Theory* | <https://kskedlaya.org/ant/frontmatter.html> | Chs. 1--4 and 6--9 |
| Nick Andersen, *Analytic Number Theory* | <https://mathdept.byu.edu/~nick/ucla/205a/205a-notes.pdf> | Ch. 3 §§3.1--3.3 and Chs. 10--16 |
| L. Tomczak/Boase, *Analytic Number Theory* | <https://math.berkeley.edu/~ltomczak/notes/Mich2022/AnaNT_Notes.pdf> | Chs. 3--4 and 7--8 |
| Andrew Sutherland, MIT 18.782/18.785 lecture sets | <https://math.mit.edu/classes/18.782/2013fa/lectures.html> and <https://math.mit.edu/classes/18.785/2021fa/lectures.html> | 18.782 Lectures 5, 8, 10--11; 18.785 Lectures 16, 18 |
| Conrad--Landesman, Math 154 | <https://math.stanford.edu/~conrad/154Page/handouts/undergraduate-number-theory.pdf> | Chs. 10--11, 22--29 |
| Nicolas Mascot, MAU23101 *Introduction to Number Theory* | <https://www.maths.tcd.ie/~mascotn/teaching/2020/MAU23101/index.html> (complete chapter PDFs linked there) | Complete Chs. 3--6: all 23 chapter-index headings, enumerated in §7.12 |
| Jan-Hendrik Evertse, *Analytic Number Theory: Prime Number Theory* | <https://pub.math.leidenuniv.nl/~evertsejh/jhelecturenotes.shtml> (complete Chs. 0--6 linked there) | Ch. 1 §1.3 and Ex. 1.4; Ch. 2 §§2.1--2.3; Ch. 3 §§3.1--3.4; Ch. 4 §§4.1--4.3; Ch. 5 §§5.1--5.3; Ch. 6 §§6.1--6.2 |
| P. Stevenhagen, *Number Rings* | <https://websites.math.leidenuniv.nl/algebra/ant.pdf> | Chs. 3--5, pp. 30--65, and Ch. 8, pp. 80--85, excluding exercises; all 18 contents headings enumerated in §7.14 |

Supplementary author-hosted full notes used over exact ranges are Keith
Conrad, [*Pell's Equation I*](https://kconrad.math.uconn.edu/blurbs/ugradnumthy/pelleqn1.pdf),
[*Pell's Equation II*](https://kconrad.math.uconn.edu/blurbs/ugradnumthy/pelleqn2.pdf),
[*Proofs by Descent*](https://kconrad.math.uconn.edu/blurbs/ugradnumthy/descent.pdf),
[*Ostrowski's Theorem for \(\mathbb Q\)*](https://kconrad.math.uconn.edu/blurbs/gradnumthy/ostrowskiQ.pdf),
[*Hensel's Lemma*](https://kconrad.math.uconn.edu/blurbs/gradnumthy/hensel.pdf),
and [*The Different*](https://kconrad.math.uconn.edu/blurbs/gradnumthy/different.pdf);
Andrew Granville, [*Primes*, Ch. 4](https://dms.umontreal.ca/~andrew/Courses/Chapter4.pdf);
and Sam Raskin, [*Quadratic Forms and Hasse--Minkowski*](https://www.samraskin.net/forms.pdf).
Montgomery--Vaughan Ch. 6 was obtained as the legitimate author-hosted
[textbook excerpt](https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/10.0_pp_168_198_The_Prime_Number_Theorem.pdf),
not represented as a complete book.

Auxiliary working links used in the pair locators are Gorodnik's
[complete course page and lecture index](https://www.math.uzh.ch/gorodnik/nt/index.html),
Sanders's [*Topics in Analytic Number Theory*](https://people.maths.ox.ac.uk/~sanders/tant/notes.pdf),
Conrad's [*Sums of Two Squares and Lattices*](https://kconrad.math.uconn.edu/blurbs/ugradnumthy/Picksumofsq.pdf),
Dummit's [*Number Theory, Part 9*](https://dummit.cos.northeastern.edu/teaching_fa22_4527/numthy_9_geometry_of_numbers_v2.00.pdf),
Marius Overholt's official AMS [*A Course in Analytic Number Theory*,
Ch. 1 preview](https://www.ams.org/bookstore/pspdf/gsm-160-prev.pdf),
Keith Conrad's [*Selmer's Example*](https://dms.umontreal.ca/~mlalin/mat6630/selmerexample.pdf),
the Reed [Math 361 Lecture 9](https://people.reed.edu/~jerry/361/lectures/lec09.pdf),
UCSB 225A [Lecture XVII](https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/notes/lecture_XVII.pdf),
Odlyzko--te Riele's CWI-hosted [*Disproof of the Mertens
Conjecture*](https://ir.cwi.nl/pub/1823/1823D.pdf),
Goldmakher's [*A Quick Proof of Mertens' Theorem*](https://web.williams.edu/Mathematics/lg5/mertens.pdf),
Tao's [*Mertens' theorems*](https://terrytao.wordpress.com/2013/12/11/mertens-theorems/),
and Sutherland's [MIT 18.785 Problem Set 9](https://math.mit.edu/classes/18.785/2015fa/ProblemSet9.pdf).

### 7.2 Hackman, *Elementary Number Theory*, Chs. C--H and K

- **Ch. C, pp. 69--94.** C.I “False Cases Excluded”: C.I.1--2 are
  included in `def-primitive-root-modulo-n` and NT-1 B; C.I.3--6 are inline
  in `thm-classification-of-moduli-with-primitive-roots`.  C.II “Primitive
  Roots Modulo a Prime”: C.II.1 is included in
  `cor-unit-group-modulo-prime-is-cyclic`; C.II.2 is inline there; C.II.3--4
  are NT-1 B.  C.III “Binomial Congruences” is inline in the lifting lemmas
  or NT-1 B, since it introduces no distinct structural theorem.  C.IV
  “Prime Powers”: C.IV.1, 3--8, 10 are included or inline in
  `lem-primitive-root-lift-to-prime-square`,
  `lem-order-of-one-plus-pu-modulo-prime-powers`, and the two prime-power
  structure theorems; intervening examples are NT-1 B.  C.V “Carmichael
  Exponent”: C.V.2--6 are included in `def-carmichael-function`, its maximal-
  order proposition, and formula; examples are NT-1 B.
- **Ch. D, pp. 107--133.** D.I “Legendre”: D.I.1--12 are included across
  NT-2--NT-3; D.I.13--15 are computational/root-lifting B examples.  D.II
  “Jacobi”: D.II.1--4 are included in NT-3 and D.II.5--6 are B computations.
  D.III “Cryptographic Application” is out of scope because it develops a
  protocol/security application rather than a prerequisite result.  D.IV
  “Gauss Lemma” and D.V “Rectangle Proof” are included in NT-2's signed-half-
  system lemmas and NT-3's complete reciprocity proof.  D.VI “Gerstenhaber
  Proof” and D.VII “Zolotareff Proof” are deferred to B as alternate proofs:
  one proof is already complete and these require distinct permutation
  machinery without adding a theorem.
- **Ch. E, pp. 143--155.** E.I “Primes as Sums of Squares”: E.I.1 is inline
  in `lem-thue-small-representatives`; E.I.2--3 are included in
  the prime theorem and its uniqueness corollary; E.I.4 is B; E.I.5 is inline
  descent.  E.II “Composite Numbers”: E.II.1--2 and E.II.4 are included;
  E.II.3,7 are B; E.II.5--6 are inline in the characterization proof.
- **Ch. F, pp. 167--182.** F.I “Definitions and Examples” supplies NT-9's
  arithmetic/multiplicative definitions and B.  F.II “Dirichlet Product”
  supplies convolution, divisor reindexing, and multiplicativity.  F.III
  “Möbius Function” is already published at
  `def-number-theoretic-mobius-function`,
  `thm-number-theoretic-and-poset-mobius-agree`,
  `cor-classical-mobius-inversion`, and
  `cor-number-theoretic-mobius-is-multiplicative`; the totient example is
  already published at `ex-euler-totient-recovered-by-mobius-inversion`.
  F.IV “Two More Results” is included/inline in NT-9's divisor-sum identities.
  F.V “Primitive Roots Again” is already covered by NT-1 and not duplicated.
- **Ch. G, pp. 195--217.** G.I “Motive and Definitions,” G.II “Basic
  Results,” G.IV “Best Approximations,” G.V “Where Are Continued Fractions?”,
  and G.VI “Finite Continued Fractions” are included across NT-7's definition,
  recurrence, determinant, error, convergence, best-approximation, Legendre-
  criterion, existence, and rational-termination items.  G.III “Negative
  Irrationalities” is absorbed in the sign convention and B examples.  G.IV.4
  is included only with its exact small-error hypothesis; it is not expanded
  into a claim about every generalized Pell solution.
- **Ch. H, pp. 223--249.** H.I “Algorithm for Quadratic Irrationalities” and
  H.II “Conjugates” are inline in NT-7's Lagrange-periodicity proof.  H.III
  “\(x^2-Dy^2=\pm1\)” supplies NT-8's existence, norm identity, negative-
  Pell parity, and all-solutions theorem; its examples are B.  H.IV
  “\(x^2-Dy^2=N\)” supplies the norm action and qualified generalized theory;
  H.V “Inequalities” is inline in the finite-orbit bound; H.VI “Periodicity”
  is inline in NT-7.  No statement says every generalized-Pell solution is a
  convergent.
- **Ch. K, pp. 291--311.** K.I “Preparations” and K.II “Unique
  Factorization in \(\mathbb Z[i]\)” are out of scope for the low block because
  abstract algebra already owns Euclidean/UFD machinery.  K.III “Number
  Representations” reaches NT-4's already-included theorems by that alternate
  route and is confined to a B comparison.

### 7.3 Independent elementary texts and notes

- **Shoup.** §7.5 “The group of units modulo \(n\)”: Thms. 7.28--7.31 are
  included/inline in NT-1; the finite-subgroup cyclicity theorem is already
  published at `cor-finite-subgroups-of-units-in-a-domain-are-cyclic`; Exs.
  7.61 and 7.69 are B.  §§2.8 and 12.1 “Quadratic residuosity,” Thms.
  12.1--12.4, are included in NT-2--NT-3.  §12.2 “The Jacobi symbol,” Thm.
  12.5 and its binary algorithm are NT-3/B.  §12.3 is out of scope because it
  develops probabilistic primality.  §4.5 is included/inline in NT-4.
  §2.9 Thms. 2.37--2.39 is NT-9 or already-published Möbius inversion.
  Ch. 5 §§5.1--5.3, Thms. 5.1--5.13, is included across NT-11, except that
  Thm. 5.13 supports only \(\Theta(1/\log x)\), not the exact Mertens product
  constant.
- **Stein, *Primes, Congruences, and Secrets*.** §2.5's polynomial root bound
  is already published; cyclicity and prime-power primitive roots are NT-1.
  Ch. 4 §§4.1--4.3 is included across NT-2--NT-3.  Ch. 5 §§5.1--5.3 and the
  periodic continuation are NT-7; §5.7, Thm. 5.7.1, Lemmas 5.7.3--5.7.5 and
  identity (5.7.1), is NT-4.  Modular square-root algorithms outside these
  ranges are out of scope as computational enrichment.
- **Stein, 2003, Ch. 9 §§9.2--9.4.** §§9.2.1--9.2.4 supply NT-6's form,
  proper-equivalence, action, representation-invariance, discriminant,
  definiteness, and principal-form items.  §9.2.5 “Rings of Integers in
  Quadratic Fields” is deferred to NT-19.  §9.3 supplies reduced forms,
  existence/uniqueness, and the reduction algorithm.  §9.4 Prop. 9.4.1 and
  Defs. 9.4.2--3 supply finite class enumeration and the negative-
  discriminant class number.  Thm. 9.4.4's Heegner--Stark--Baker--Goldfeld--
  Gross--Zagier classification is out of scope because it requires deep
  transcendence, modular, and elliptic machinery.
- **Granville Ch. 4 §§4.1--4.2, 4.6.** §4.1's equivalence, discriminant,
  reduction algorithm, termination, uniqueness, and small-discriminant
  exercises are NT-6/B; its two-square identity is already NT-4.  §4.2's
  ideal correspondence and units are deferred to the algebraic block; Gauss
  composition is deferred because its representative/basis well-definedness
  is not developed here.  §4.6's indefinite reduction cycles are deferred to
  a future quadratic-order/narrow-class-group page: unlike the definite case,
  an indefinite class has a cycle rather than one normalized representative.
- **MIT 18.781 selected notes.** “Congruences mod Primes, Order, Primitive
  Roots” and “Primitive Roots (Prime Powers)” are NT-1; index calculus is out
  of scope as an algorithm.  “Quadratic Residues, Quadratic Reciprocity” and
  “Jacobi Symbol, Computation, Zolotareff” are NT-2--NT-3/B.  “Arithmetic
  Functions” and “Mobius Inversion” are NT-9 or already-published.  “Two
  Squares,” “Continued Fractions I/II,” “Periodic Continued Fractions,”
  “Brahmagupta--Pell,” and “Four Squares” are NT-4, NT-7, NT-8, and NT-5.
  The lecture calendar and PDF numbering disagree, so citations use the PDF
  title rather than an ambiguous session number.
- **Conrad's selected notes.** *Pell I* §§1--7 supplies NT-8 existence and all
  positive solutions; *Pell II* §§1--4 supplies negative/generalized results,
  with statistics depending on class numbers deferred.  *Proofs by Descent*
  §6 supplies the NT-5 small-multiple and descent proof.  *Ostrowski* §§1--2
  supplies NT-17's classification.  *Hensel* §§1--6 supplies simple and strong
  lifting, roots of unity/unit decompositions, two-adic squares, and both
  proofs of the Newton criterion; later power-series forms are deferred to
  commutative algebra or nonarchimedean analysis.  *The Different* §§3--4
  supplies NT-20's trace-dual, monogenic, norm, support, and tame/wild items.

### 7.4 Arithmetic functions, average orders, Chebyshev, and Mertens

- **Crisman Chs. 18--21, 23, §24.6.4.** Ch. 18 “An Introduction to
  Functions” supplies arithmetic/multiplicative definitions and B examples.
  Ch. 19 “Counting and Summing Divisors” supplies \(\tau,\sigma\) identities;
  §§19.4--19.5 on perfect and odd perfect numbers are out of scope because
  they open a separate partly unresolved classification problem.  Ch. 20
  §§20.1--20.3 supply two-square counts and the preliminary average of
  \(\tau\).  Despite §20.4's heading “Heuristics for the Sum of Divisors,”
  its displayed divisor-pair reindexing, Basel-tail estimate, and
  \(O(x\log x)\) calculation are exact and back NT-10; only its surrounding
  motivational discussion is B.  §20.5 is deferred future material.  Ch. 21 supplies \(\pi\),
  \(\operatorname{Li}\), Bertrand, Chebyshev bounds, and \(\vartheta\) for
  NT-11; its PNT is deferred to NT-16.  Ch. 23 Möbius/inversion is already
  published and its convolution discussion is NT-9.  Prop. 24.6.7 supports
  the totient asymptotic, but not by itself NT-10's quantitative remainder.
- **Sanders Ch. 1, Props. 1.3--1.5, pp. 2--6.** Hyperbola reindexing and
  the sharp divisor summatory estimate are included across NT-9--NT-10;
  Prop. 1.5's implication from a Möbius estimate to PNT is deferred to NT-16,
  and later sieve and distribution chapters are outside the selected range.
  Overholt Ch. 1, §1.1, printed pp. 19--21, independently supplies the exact
  Möbius calculation and \(O(x\log x)\) remainder for the summatory totient;
  §1.6 independently supplies the hyperbola identity.  Crisman §20.4 gives
  the displayed sum-of-divisors reindexing and \(O(x\log x)\) calculation.
- **Andersen Ch. 3 §§3.1--3.3, pp. 11--16.** §3.1 Stirling is already planned
  at `thm-stirling-formula-gamma`; its weak real consequence is inline in
  NT-11.  §3.2 “Chebyshev's approximation” is included in NT-11.  §3.3 Cor.
  3.5 and Thm. 3.6 are the first and second prime Mertens items; Remark 3.7 is
  B divergence.  Goldmakher's complete two-page note independently proves
  those two estimates.  Sutherland 18.785 Problem Set 9, Problems 1--2,
  provides the exact guided three-theorem decomposition, but as a problem set
  is not the sole proof source.  Tao's “Mertens' theorems” proves the third
  asymptotic product and supplies the \(e^{-\gamma}\) constant; its zeta,
  Fourier, and Gamma dependencies are declared in NT-11.  Shoup's weaker
  \(\Theta\)-product result is never inflated into this exact theorem.
- **Odlyzko--te Riele, *Disproof of the Mertens Conjecture*, abstract and §1
  “Introduction,” pp. 138--141.** The definition and conjecture are NT-9 B;
  the paper's stated main
  limsup/liminf disproof is the content cited by
  `cex-the-mertens-conjecture-is-false`.  Its zeta-zero computation and
  later sections were not selected or rebuilt because the B item is
  non-citable and no later result uses the disproof.

### 7.5 Kedlaya, *Notes on Analytic Number Theory*, Chs. 1--4, 6--9

- **Ch. 1.** §1.1 Lemma 1.1 is already published at
  `ex-harmonic-series-diverges`.  §1.2 Def. 1.2 and Thms. 1.4--1.5 are
  deferred to CA-22's `def-riemann-zeta-function`,
  `thm-riemann-zeta-meromorphic-continuation`, and
  `thm-riemann-zeta-is-zero-free-on-the-closed-right-half-plane`; Def. 1.3 is
  already published at
  `lem-abel-summation-by-parts`.  §1.3 Def. 1.6 is NT-11 and Lemma 1.7 is
  inline in NT-16.  §1.4 Thm. 1.8 is included as
  `thm-newman-zagier-tauberian-theorem`; Remark 1.9 is inline.  §1.5's
  Erdős--Selberg proof is out of scope because it needs a separate Selberg
  apparatus and duplicates the commissioned zero-free-region route.
- **Ch. 2.** §2.1 Defs. 2.1, 2.3, Lemma 2.2, and Thm. 2.4 are included in
  NT-12's Dirichlet-series definition, abscissae, half-plane results, and
  Landau theorem.  §2.2 Defs. 2.5--2.7 split: arithmetic definitions are
  NT-9, while convolution multiplication and Euler products are NT-12.
  §2.3 Def. 2.8 is NT-9 or already published Möbius/totient material; Def.
  2.9 supplies NT-9's von Mangoldt identity and NT-12's logarithmic derivative.
- **Ch. 3.** §3.1 Def. 3.1 and Lemma 3.2 are NT-13; Def. 3.3 is NT-14.
  §3.2 Def. 3.4 and Thm. 3.5 are split among NT-13's L-definition, Euler
  product, finite principal factors, and half-plane continuation.  §3.3 Lemma
  3.6 and Thms. 3.7--3.8 are NT-13's positive-log device and line-one
  nonvanishing.  §3.4 Def. 3.9 is inline; Thms. 3.10--3.11 are NT-13's
  nonreal and real \(L(1)\) lemmas; Remark 3.12 is B.  §3.5's class-number
  formula is deferred to a future Dedekind-zeta/analytic-class-number page:
  the current track has neither Dedekind zeta nor the required ideal-counting
  interface.
- **Ch. 4.** §4.1 Def. 4.1 is inline in NT-13 and Thm. 4.2 is
  `thm-dirichlet-primes-arithmetic-progressions`.  §4.2 Defs. 4.3--4.4,
  Examples 4.5--4.6, Lemmas 4.7--4.8 are NT-13/B.  §4.3 Thm. 4.10's general
  finite Fourier theorem is already owned by abstract algebra; its arithmetic
  specialization and Thm. 4.11 are NT-13.  §4.4 Thm. 4.12 is NT-16's fixed-
  modulus PNT.  Its displayed statement omits “\(=1\)” after a gcd expression;
  §4.1 and the proof require coprimality, which the scaffold states.
- **Ch. 6.** §6.1's parity, theta Mellin transform, primitive Gauss relation,
  and even equation (6.1.4), and §6.2's odd theta equation (6.2.2), are
  included across NT-14.  Substantial odd-case details are exercises, so
  Andersen is the primary complete proof source.
- **Ch. 7.** §7.1 Def. 7.1 is NT-15's half-weighted \(\psi\), and Thm. 7.2
  is its truncated explicit formula.  Def. 7.3 is already CA-22's critical-
  strip vocabulary.  §7.2 Thms. 7.5--7.7 supply NT-16's zero-free region,
  zero-count input, and \(\psi\) error.  §7.3 Conjecture 7.8, RH, is out of
  scope as an open problem and may only be a non-load-bearing remark.
- **Ch. 8.** §8.1 Def. 8.1 and Example 8.2 are deferred to CA-18/CA-21;
  Lemma 8.3 is inline in NT-15.  §8.2 Thm. 8.4 is CA-18's Jensen theorem;
  Remarks 8.5--8.6 are inline in zero counting; Thm. 8.7's general Hadamard
  product is CA-18, while its zeta specialization is NT-15.  §8.3 Thm. 8.8
  is NT-16's classical region.
- **Ch. 9.** §9.1 Lemma 9.1 is NT-15's Perron kernel.  §9.2 Lemma 9.2 is its
  residue inventory and Remark 9.3 is inline.  Lemma 9.4, §9.3 Lemma 9.5,
  §9.4 Lemma 9.6 and Remark 9.7, Lemma 9.8, and §9.5 Thm. 9.9 are included
  across NT-15's zero-count, truncated-kernel, logarithmic-derivative, and
  explicit-formula items.  Lemma 9.2 misprints the final denominator as
  \(\zeta'(0)\); Thm. 9.9 and direct residue calculation give \(\zeta(0)\).
  Lemmas 9.4 and 9.6 defer details to exercises, supplied independently by
  Andersen.

### 7.6 Andersen, Sutherland, Tomczak, and Montgomery--Vaughan

- **Andersen Chs. 10--12, pp. 35--48.** Ch. 10 Thm. 10.1 is NT-16's
  classical region; Lemma 10.2's \(3\!-​4\!-​1\) inequality is inline,
  and the qualitative line theorem is CA-22; Thm. 10.3 supplies NT-15--NT-16's
  partial fractions.  Ch. 11 Lemma 11.1, the Riemann--von Mangoldt formula,
  and reciprocal-zero sums are NT-15--NT-16.  Ch. 12 Lemma 12.1 is inline in
  the smoothing; Prop. 12.2, Thm. 12.3, and Thm. 12.4 are NT-15's two explicit
  formulas and NT-16's PNT.  RH-conditional Thms. 12.5--12.6 are out of scope
  because their hypothesis is open and they are not needed downstream.
- **Andersen Chs. 13--16, pp. 51--67.** Ch. 13 Lemma 13.1 is general finite-
  group Fourier theory owned by algebra; Lemmas 13.2--13.3 and Prop. 13.4 are
  NT-13's character sums and orthogonality.  Ch. 14 Thm. 14.1 is NT-13's
  continuation/pole; Lemma 14.2 is already published totient multiplicativity;
  Thms. 14.3--14.4 are NT-13's nonvanishing and Mertens progression theorem.
  Ch. 15 Lemma 15.1 is decomposed into NT-13's product, real, and nonreal
  nonvanishing items.  Ch. 16 Lemma 16.1, Thm. 16.2, Lemmas 16.3--16.4,
  Thms. 16.5--16.8, and Remark 16.9 are included across NT-14's primitive
  induction, Gauss sums, twisted Poisson, two parity cases, and root number.
  Chs. 17--20 are out of scope because uniform Dirichlet-L regions and Siegel
  phenomena require exceptional-zero theory not used for fixed \(q\).
- **Sutherland 18.785 Lecture 16, §§16.1--16.2, pp. 1--9.** Def. 16.1 and
  Thms. 16.2--16.5 are CA-22 zeta items.  Thm. 16.6 is inline in NT-16;
  Lemma 16.7 is NT-11; Lemma 16.8 is inline.  Def. 16.9, Lemmas 16.10--16.11,
  Cor. 16.12, Thm. 16.13, Remark 16.14, and Thm. 16.15 form NT-16's complete
  Newman route.  **Lecture 18:** Thm. 18.1 and Remark 18.2 are NT-13;
  Thm. 18.3 is NT-11.  Defs. 18.4--18.5, Lemma 18.8, Defs. 18.9, 18.11,
  Lemmas 18.10, 18.12, Thm. 18.13, Def. 18.14, Cor. 18.15--16, Remark 18.17,
  and Ex. 18.18 are NT-13--NT-14/B.  Def. 18.19, Prop. 18.20, and Remark
  18.21 are NT-13.  Def. 18.22 is NT-13's density proof, but the lecture only
  asserts \(L(1,\chi)\ne0\), so it is not primary backing for that result.
  §§18.5--18.6's Stieltjes and general finite-character machinery are already
  published real analysis/abstract algebra; the arithmetic specialization is
  NT-13.
- **Tomczak Chs. 3--4, 7--8.** Ch. 3 Thm. 3.1 is already-published Möbius
  inversion; Thms. 3.2--3.6 are NT-12; Thm. 3.7 is out of scope as a
  specialized Ramanujan identity not used downstream; Cor. 3.8 is CA-22.
  Ch. 4 Thms. 4.1--4.8 are included across NT-13; Thms. 4.9--4.10 give
  NT-14's Gauss norm and a B quadratic evaluation.  Ch. 7 Thms. 7.1--7.4 are
  NT-15's Perron variants.  Ch. 8 Thm. 8.1 is CA-22; Thms. 8.2--8.5 are
  NT-15--NT-16; Thm. 8.6 is NT-16.  The notes contain an apparent sign or
  extraction defect saying \(\mu(p)=1\) and an unresolved “why small?” contour
  note, so they are never sole backing for either point.
- **Montgomery--Vaughan Ch. 6 §§6.1--6.2, pp. 168--198.** Lemma 6.1 is
  CA-18's Jensen inequality; Lemma 6.2 is complex analysis's
  Borel--Carathéodory theorem; Lemma 6.3 is inline through CA-18's general
  local \(f'/f\) machinery; Lemma 6.4 is NT-15; Lemma 6.5 is inline in NT-16;
  Thms. 6.6--6.8 are NT-16's zero-free region and bounds; Thm. 6.9 is its
  \(\psi,\vartheta,\pi\) error theorem.  Exercise subsections were not used.

### 7.7 Local fields and Hasse--Minkowski sources

- **Sutherland 18.782 Lecture 5.** §5.1 Def. 5.1 is NT-17's \(\mathbb Q_p\);
  §5.2 Def. 5.2 and Thm. 5.3 are its absolute-value definition and
  nonarchimedean criterion; Cor. 5.4 is B/inline because positive-
  characteristic finite fields are owned by algebra.  §5.3 Def. 5.5 and Thm.
  5.6 are equivalence and Ostrowski.  **Lecture 8:** §8.1 Thm. 8.1 is NT-17's
  completion comparison; Remark 8.2 is its integral-closure warning.  §8.2
  Lemma 8.3's inverse system of finite sets is replaced by the explicit finite
  residue tree/digit construction; Thm. 8.4 and Defs. 8.5--8.6, Lemma 8.7 are
  inline in Hensel/Newton.  §8.3 Thm. 8.8 is NT-17's simple-root corollary.
- **Sutherland Lectures 10--11.** Lecture 10's Hilbert-symbol definition,
  equivalent forms, real/odd-prime/two-adic formulas, bilinearity,
  nondegeneracy, and product theorem are included across NT-18.  Lecture 11
  §11.1 Thm. 11.1 is split between
  `lem-finite-field-quadratic-isotropy-in-dimension-at-least-three` (the
  finite-field input, proved directly by intersecting square-value sets) and
  NT-18's local isotropy theorem; Cor. 11.2, Lemma 11.3, Cor. 11.4, and Cor.
  11.5 are its almost-all, binary/ternary, and one-place results.  §11.2 Thms.
  11.6--11.8 are NT-17's density/finite approximation or inline; Remarks
  11.9--11.10 distinguish profinite and adelic completions and are B/deferred;
  Lemma 11.11 is NT-18's global square-class approximation and explicitly
  uses NT-13.  §11.3 Thm. 11.12 is the proved full Hasse--Minkowski theorem.
- **Raskin §§3.14--4.9.** §§3.14--3.17 independently supply the Hilbert
  definition, norm equivalence, local formulas, bilinearity, and reciprocity.
  §§4.1--4.7 supply local isotropy and the ternary theorem.  §§4.8--4.9,
  especially Lemma 4.9.1, supply square-class patching and full Hasse--
  Minkowski; the same dimension-four Dirichlet dependency is declared.  Later
  Witt-group and classification refinements are deferred because the remit
  asks for the rational local--global theorem, not a general quadratic-form
  track.
- **Conrad, *Selmer's Example*, complete note, pp. 1--5.** §1
  “Introduction” and Thm. 1 state NT-18 B's cubic counterexample.  §2 “No
  local solutions” (the source's heading, despite the section proving local
  solubility) supplies the real and every-(p)-adic checks, included in the B
  item.  §3 “Global solutions” proves absence of a nontrivial rational zero
  using a pure cubic integer ring, ideal factorisation, class number, and
  units.  That proof is literature-derived but not supplied on the NT-18 B
  page because NT-19--NT-23 occur later; the counterexample is non-citable and
  non-load-bearing.  The closing Tate--Shafarevich interpretation is deferred
  to elliptic-curve arithmetic, which lies outside this track.

### 7.8 Milne, *Algebraic Number Theory*, Chs. 2--8

- **Ch. 2, pp. 25--44.** Headings “First proof integral elements form a
  ring,” “Dedekind's proof,” “Integral elements,” “Review of bases,” and the
  general integrality results 2.1--2.18 are already supplied by CA-6 or inline
  there.  “Review of norms and traces,” results 2.19--2.21, is GA-4, with
  integral trace/norm included on NT-19.  “Review of bilinear forms” and
  “Discriminants,” 2.23--2.28, are NT-19 or CA-9 trace pairing.  “Rings of
  integers are finitely generated,” 2.29--2.33, and “Finding the ring of
  integers,” 2.34--2.42, are NT-19/B; inseparable-function-field remarks are
  out of scope.  “Algorithms for finding the ring of integers,” 2.44--2.45,
  is out of scope because maximal-order row-reduction algorithms are not used
  by the structural track.
- **Ch. 3, pp. 46--67.** “DVRs,” “Dedekind domains,” “Unique factorization
  of ideals,” “Ideal class group,” “Discrete valuations,” “Integral
  closures,” and “Modules over Dedekind domains,” results 3.1--3.32, are
  already owned by CA-8/CA-9.  “Factorization in extensions,” “Primes that
  ramify,” and “Finding factorizations,” results 3.33--3.43, are included or
  inline in NT-20; surface example 3.40 is out of scope.  “Examples” 3.44--52
  are NT-20 B.  “Eisenstein extensions” 3.53 supplies its total-ramification
  corollary, while irreducibility itself is already algebra.
- **Ch. 4, pp. 68--83.** “Norms of ideals,” results 4.1--4.2, are NT-20.
  “Statement main theorem/consequences,” 4.3--4.11, supplies NT-22's bound,
  class finiteness, examples, and no-unramified-extension corollaries; class-
  field remarks are deferred.  “Lattices,” 4.14--4.19, and “Some calculus,”
  4.22--4.27, supply NT-22's lattice, Blichfeldt, Minkowski, volume, covolume,
  and small-element items; AM--GM is already real analysis.  “Binary
  quadratic forms” is deferred to NT-6 or a future form--ideal-composition
  interface rather than duplicated.
- **Ch. 5, pp. 85--94.** The statement, finite-generation, rank, S-unit,
  CM/real-quadratic/cubic examples, roots of unity, fundamental units, and
  regulators, results 5.1--5.11 and following named headings, are included or
  B on NT-23.  Computational searches for units are B/out of scope and never
  dependencies.
- **Ch. 6, pp. 95--104.** “The basic results”: Lemma 6.1 and degree parts of
  Prop. 6.2/Thm. 6.4 are already GA-3; their integer-ring, ramification, and
  discriminant parts are NT-24; Lemma 6.5 is inline in the compositum proof;
  Remark 6.6 supplies conductor and general discriminant.  “Class numbers of
  cyclotomic fields,” “Units in cyclotomic fields,” and “The first case of
  FLT for regular primes” are out of scope because they require cyclotomic-
  class-number/regular-prime machinery beyond the commissioned reciprocity
  application; ordinary units are already NT-23.
- **Ch. 7, pp. 105--124 selected.** Results 7.1--7.13 supply NT-17's
  examples, nonarchimedean criterion, equivalence, Ostrowski, and rational
  product formula; characteristic-\(p\) and historical asides are out of
  scope.  Results 7.14--7.21 supply NT-21's number-field places/product
  formula and NT-17's weak approximation.  Results 7.23--7.30 are already
  published completion or NT-17's digit/inverse-limit comparison.  Results
  7.31--7.32 are its Hensel specialization/Newton theorem; 7.33--7.37 are
  already CA-14 general Hensel theory.  Thm. 7.38 is NT-21's unique extension.
  The later headings “Newton polygon,” “Unramified extensions,” “Ramification
  groups,” and “Krasner” are deferred to a higher local-field/ramification
  expansion: only local compactness of \(\mathbb Q_p\) is needed here.
- **Ch. 8, pp. 135--152 selected.** “Extending absolute values,” “Product
  formula,” “Decomposition groups,” “Frobenius,” and “Examples,” especially
  8.10--8.19, are NT-21/NT-23/NT-24.  “Computing Galois groups” is B or
  deferred to computational Galois theory; Chebotarev is deferred to an
  analytic/class-field seam; Thm. 8.43 is NT-22 Hermite--Minkowski, while
  stronger bounded-ramification finiteness 8.42 is deferred because it needs
  higher ramification control.

### 7.9 Stein, *Algebraic Number Theory*, selected ranges

- **§§2.3--2.4, pp. 25--35.** §§2.3.1--2.3.2, Props. 2.3.1--2.3.19 and
  §2.4, Props. 2.4.3--2.4.5, are CA-6/GA-4 or included across NT-19's number
  field, ring, order, clearing-denominators, and free-rank items.  Function
  fields §2.3.3 are out of scope; LLL §2.5 was not selected because it is a
  computational recognition algorithm.
- **§3.1, pp. 41--48.** Dedekind definitions, fractional ideals, inversion,
  and unique factorization through Thm. 3.1.12 are already CA-9; only the
  application that \(\mathcal O_K\) is Dedekind is NT-19.
- **§§4.1--4.3, pp. 49--59.** §4.1 examples are NT-20 B; §4.2 Lemma 4.2.1
  and Thm. 4.2.3 supply Dedekind--Kummer.  §4.3's index caveat is inline, while
  p-maximal-order and Buchmann--Lenstra algorithms are out of scope.
- **§§6.1--6.3, pp. 69--76.** §6.1's discrete subgroup/rank/embedding
  results are NT-22; §6.2's trace pairing is CA-9 and discriminant/index items
  are NT-19; relative discriminants are deferred.  §6.3's ideal norm,
  principal scaling, multiplicativity, and finite bounded-ideal count are
  NT-20/NT-22.
- **§§7.1--7.3, pp. 77--86.** The class-group definition is CA-9; Thm. 7.1.2,
  Lemmas 7.1.5--7.1.8 and Cor. 7.1.9 are NT-22.  Conjecture 7.2.1 on
  infinitely many real quadratic class-number-one fields is deferred because
  it is open.  §7.3's small-prime generation is NT-22 and computations are B.
- **§§8.1--8.2, pp. 87--98.** Thm. 8.1.2, Prop. 8.1.4, and Lemmas
  8.1.6--8.1.10 are NT-23; the general unit definition is already ring theory.
  §8.2's Sage/Pell/signature computations are B and never load-bearing.
- **§§9.2--9.4, pp. 101--108.** Def. 9.2.1, Thm. 9.2.2, Defs. 9.3.1 and
  9.3.6, Lemma 9.3.2, Props. 9.3.3--9.3.4, Thm. 9.3.5, Cor. 9.3.7, Prop.
  9.3.8, and §9.4's Frobenius definition/Prop. 9.4.1 are included or inline on
  NT-21.  Quadratic/cubic computations are B.  §9.5's Galois representations,
  Artin L-series, and Artin conjecture are deferred for lack of the later
  representation-theoretic and analytic machinery.

### 7.10 Conrad--Landesman, Chs. 10--11 and 22--29

- **Chs. 10--11, pp. 54--63.** Thm. 10.1, Lemmas 10.2--10.6, Cor. 10.7,
  Thm. 11.6, Remark 11.7, Lemma 11.8, and Thm. 11.9 are included or inline in
  NT-24's integer-ring, discriminant, ramification, conductor, and compositum
  proofs.  Thm. 11.1 and Cor. 11.5 are already GA-3; Lemma 11.3 is basic
  algebra and Remark 11.4 is an out-of-scope characteristic-\(p\) aside.
- **Ch. 22, pp. 110--115.** Example 22.1 is NT-20 B; Lemmas 22.3--22.4 give
  the absolute ramification/discriminant and finite-ramification results.
  Def. 22.5 and Example 22.6's full relative discriminant ideal are deferred
  to a relative-extension page because NT-20 only needs the absolute case.
- **Chs. 23--24, pp. 116--127.** Ch. 23 Thm. 23.2, Cor. 23.3, Def. 23.4,
  Lemma 23.6, Thm. 23.7, Def. 23.8, and Prop. 23.9 supply NT-21's transitivity,
  \(efg\), groups, conjugacy, reduction, and exact sequence.  Ch. 24 Examples
  24.1 and 24.3 are NT-24; Remark 24.2's Chebotarev direction is deferred;
  Thms. 24.5--24.6 and Remark 24.7 are NT-22--NT-23; Examples 24.8--24.10 are B.
- **Chs. 25--28, pp. 128--147.** Def. 25.1, Thm. 25.2, Cor. 25.3, Thm. 26.2,
  Lemma 26.3, Lemma 27.2, Def. 27.3, Thms. 27.5, 27.7, 27.9, Lemma 27.8,
  Thms. 28.3--28.4 are included/inline across NT-22.  Examples 25.4--25.8,
  26.1, 27.6, and suitable 28.7 are B.  Thm. 28.5, finiteness with ramification
  restricted to a fixed set, is deferred because it needs stronger
  ramification control than Hermite--Minkowski.
- **Ch. 29, pp. 148--152.** Examples 29.1--29.4 are NT-23 B; Lemmas
  29.5--29.6 and the remaining full-rank construction are included in its
  logarithmic-kernel, discreteness, full-lattice, and unit-theorem items.

### 7.11 Cyclotomic reciprocity supplements

- **Milne Ch. 6 and Ch. 8 Examples 8.18--8.19.** Prime-power and general
  cyclotomic ring/discriminant/ramification results are NT-24; foundational
  degree/Galois results are already GA-3.  Examples 8.18--8.19 are NT-24's
  Frobenius splitting and quadratic restriction.  Dedekind's Galois-group
  computation is deferred as an optional application; Chebotarev is deferred
  to the analytic/class-field boundary.
- **Reed Lecture 9 §§2--3, pp. 5--8.** “Quadratic Reciprocity revisited”
  supplies NT-24's second supplement, Gauss definition and square, and
  Frobenius comparison.  “Sketch of a modern proof” supplies the quadratic-
  subfield diagram.  §4 “The sign of the quadratic Gauss sum” is B/out of
  scope: the analytic sign needs a complex embedding and is unnecessary for
  reciprocity.
- **UCSB 225A Lecture XVII, pp. 3--7.** Thm. 6.9 supplies NT-24's unique-
  quadratic-subfield/Frobenius proof; its alternate finite-field Gauss proof
  is inline or B rather than another theorem.

### 7.12 Widening harvest: Mascot, complete Chs. 3--6

Mascot's Trinity College Dublin course page marks each of the four selected
chapter PDFs complete and supplies its own heading index.  All four PDFs were
obtained and read in full: Ch. 3, 30 PDF pages; Ch. 4, 39; Ch. 5, 37; and
Ch. 6, 80.  The 23 indexed headings are atomized below; none is inferred from
a table of contents without the corresponding full text.

| exact source heading | disposition |
|---|---|
| Ch. 3, “Powers in \(\mathbb Z/p\mathbb Z\)” | **included** on NT-2 in the general power-residue criterion, root count, and new `cor-unique-kth-root-modulo-prime-for-coprime-exponent` from PDF pp. 8--9. |
| Ch. 3, “The Legendre symbol” | **included** on NT-2 in the definition, well-definedness, subgroup, and root-count items. |
| Ch. 3, “Proofs part 1/3” | **included** on NT-2 in Euler's criterion, multiplicativity, and the first supplement. |
| Ch. 3, “Proofs part 2/3” | **included** on NT-2 in the signed-half-system lemma and Gauss's lemma. |
| Ch. 3, “Proofs part 3/3: quadratic reciprocity” | **included** on NT-3 in the lattice-counting proof and reciprocity theorem. |
| Ch. 4, “Introduction” | **included** on NT-4 in the two-square definition, product identity, and prime criterion. |
| Ch. 4, “The Gaussian integers” | **deferred** as an alternate proof route: NT-4 deliberately uses elementary descent/lattices at the low anchor, while systematic integer-ring arithmetic begins at NT-19.  A B-page alternate-proof remark may cite this heading but is not load-bearing. |
| Ch. 4, “Arithmetic with the Gaussian integers” | **deferred** with the preceding heading; importing Euclidean-domain/UFD arithmetic here would duplicate algebra suppliers without strengthening NT-4's theorem set. |
| Ch. 4, “Classification of the Gaussian primes” | **deferred** to the NT-20/NT-24 prime-splitting interpretation; the low page cites rather than anticipates number-ring factorization. |
| Ch. 4, “Conclusion” | **included** on NT-4 in Fermat's two-square theorem, the integer characterization, and uniqueness/counting consequences. |
| Ch. 5, “Introduction, representation by a form” | **included** on NT-6 in the form, represented-integer, primitive-representation, and primitive-form definitions. |
| Ch. 5, “Equivalent forms, discriminant” | **included** on NT-6 in proper equivalence, its action, and invariance of representations and discriminant. |
| Ch. 5, “Equivalence vs. representability” | **included** on NT-6 in the invariance theorem and the B counterexamples showing that the converse fails. |
| Ch. 5, “Reduced forms” | **included** on NT-6 in the reduction algorithm, termination lemma, boundary convention, and uniqueness theorem. |
| Ch. 5, “The class number” | **included** on NT-6 in coefficient bounds, finiteness, and the form-class-number definition. |
| Ch. 5, “The class number one case” | **included** only as the directly checkable small-discriminant B computations on NT-6.  No general class-number-one classification is promoted from examples. |
| Ch. 6, “Concept and notations” | **included** on NT-7 in the regular-continued-fraction and convergent definitions. |
| Ch. 6, “Continued fraction expansion of a real number” | **included** on NT-7 in complete quotients, the algorithm theorem, and normalized finite uniqueness. |
| Ch. 6, “Convergents” | **included** on NT-7 in the recurrence, determinant identity, and reducedness corollary. |
| Ch. 6, “Convergence of continued fractions” | **included** on NT-7 in the monotone even/odd convergence theorem and error bound. |
| Ch. 6, “Diophantine approximation” | **included** on NT-7 in best approximation and Legendre's criterion. |
| Ch. 6, “Continued fractions attached to quadratic irrationals” | **included** on NT-7 in the finite-state lemma and Lagrange theorem. |
| Ch. 6, “The Pell--Fermat equation” | **included** on NT-8 in existence, minimal positive solution, power parametrization, and generalized Pell orbit items. |

### 7.13 Widening harvest: Evertse, selected Chs. 1--6

The Leiden course page supplies complete PDFs for Chs. 0--6.  The six PDFs
consulted here have 14 pages in Ch. 1, 16 in Ch. 2, 24 in Ch. 3, 35 in Ch. 4,
14 in Ch. 5, and 14 in Ch. 6.  Only §1.3 and Exercise 1.4 were harvested from
Ch. 1, while every named section in Chs. 2--6 below was read in full.

| exact source heading or exercise | disposition |
|---|---|
| Ch. 1 §1.3, “An elementary result for prime numbers” | **included** on NT-11 as an independent check on the elementary Chebyshev-scale bounds and their binomial-coefficient lemmas. |
| Ch. 1, Exercise 1.4 | **included** on NT-11 in `thm-bertrands-postulate` and its disclosed finite-range B verification. |
| Ch. 2 §2.1, “Dirichlet series” | **included** on NT-12.  Thm. 2.1.1 is **already published** as the library's Abel-summation supplier; Thm. 2.1.6 supplies the new `thm-uniqueness-of-dirichlet-series-coefficients`. |
| Ch. 2 §2.2, “Arithmetic functions” | **included** on NT-9 for multiplicativity and convolution structure; Thm. 2.2.5 is **already published** as Möbius inversion and is cited rather than re-minted. |
| Ch. 2 §2.3, “Convolution product vs. Dirichlet series” | **included** on NT-12 in multiplication, Euler products, reciprocal-zeta, and von Mangoldt logarithmic-derivative items. |
| Ch. 3 §3.1, “Characters on finite abelian groups” | **already published** in abstract algebra at full generality; its Dirichlet-character specialization is **included** on NT-13. |
| Ch. 3 §3.2, “Dirichlet characters” | **included** on NT-13--NT-14 in orthogonality, conductor/primitivity, induced-character, and parity items. |
| Ch. 3 §3.3, “Computation of \(G(q)\)” | **included** by citation on NT-1/NT-13: the unit-group structure is NT-1, while the resulting character examples are NT-13 B.  It does not justify a duplicate structure theorem. |
| Ch. 3 §3.4, “Gauss sums” | **included** on NT-14 in well-definedness, twisting, absolute value, and the functional-equation root number. |
| Ch. 4 §4.1, “Basic facts” | The Gamma/zeta continuation portion is **already published/planned** on CA-21/CA-22; the arithmetic Dirichlet-\(L\) continuation and Euler-product consequences are **included** on NT-13--NT-14. |
| Ch. 4 §4.2, “Non-vanishing on the line \(\Re s=1\)” | **included** on NT-13 for \(L(1,\chi)\ne0\) and on NT-16 as an independent check of the zeta boundary argument. |
| Ch. 4 §4.3, “Functional equations” | Gamma and zeta are **already published/planned** on CA-21/CA-22; primitive Dirichlet-\(L\) parity, completion, and functional equation are **included** on NT-14. |
| Ch. 5 §5.1, “Introduction” | **inline** in NT-16's historical/proof-route boundary; it makes no mathematical claim beyond the theorem routes subsequently stated. |
| Ch. 5 §5.2, “A Tauberian theorem for Laplace transforms” | **included** as a third complete proof check for `thm-newman-zagier-tauberian-theorem`; the scaffold keeps the existing theorem id and does not mint Evertse's equivalent normalization separately. |
| Ch. 5 §5.3, “A Tauberian theorem for Dirichlet series” | **inline** in NT-16's application of the preceding Tauberian theorem.  Its positive-coefficient Dirichlet-series form is a specialized interface, not an independent dependency target. |
| Ch. 6 §6.1, “The Prime number theorem” | **included** on NT-16 in the \(\pi\)--\(\vartheta\)--\(\psi\) equivalences, logarithmic derivative, Tauberian application, and PNT. |
| Ch. 6 §6.2, “The Prime number theorem for arithmetic progressions” | **included** on NT-16 in the fixed-modulus PNT-AP theorem and its character decomposition; no uniform-in-\(q\) result is inferred. |

### 7.14 Widening harvest: Stevenhagen, Chs. 3--5 and 8

The full 91-page Leiden text was obtained.  The selected non-exercise ranges
are Chs. 3--5, PDF pp. 30--65, and Ch. 8, PDF pp. 80--85.  These are 18
contents headings.  The source treats general orders as well as maximal
orders; the dispositions below preserve the commutative-algebra seam.

| exact source heading | disposition |
|---|---|
| Ch. 3, “The Kummer--Dedekind theorem” | **included** on NT-20 in the index-qualified factorization theorem and its proof interface. |
| Ch. 3, “Singular primes” | **inline** in NT-19--NT-20's index caveat and conductor examples; it does not weaken the monogenic/maximal-order hypothesis. |
| Ch. 3, “Quadratic and cyclotomic number rings” | **included** as worked B material across NT-19, NT-20, and NT-24; the general theorems remain on their respective A pages. |
| Ch. 3, “Integral closure” | **already published** abstractly on commutative-algebra CA-6; its number-field specialization is **included** on NT-19. |
| Ch. 4, “Norm and trace” | General field norm/trace is **already published** in abstract algebra; integrality, ideal-norm, and embedding consequences are **included** on NT-19--NT-20. |
| Ch. 4, “Discriminant” | **included** on NT-19 in basis change, trace determinant, index, and field-discriminant items. |
| Ch. 4, “Computational techniques” | **included** only as directly checkable NT-19/NT-20 B computations.  Algorithms and complexity are not promoted to citable A items. |
| Ch. 4, “Ramification” | **included** on NT-20 and NT-24 in different/discriminant ramification, tame/wild boundaries, and cyclotomic specialization. |
| Ch. 5, “Minkowski's theorem” | **included** on NT-22 via the planned geometry-of-numbers supplier and the number-field specialization. |
| Ch. 5, “Number rings as lattices” | **included** on NT-22 in the Minkowski embedding and ideal-lattice covolume theorem, after converting the source's scaled complex coordinates. |
| Ch. 5, “Finiteness of Picard groups” | General Picard groups of orders are **deferred** to commutative algebra/nonmaximal-order work; the maximal-order class-group consequence is **included** on NT-22. |
| Ch. 5, “Minkowski's constant” | **included** on NT-22 in the ideal-class norm bound and small-prime generation corollary. |
| Ch. 5, “Hermite's theorem” | **included** on NT-22 in discriminant finiteness and the Hermite--Minkowski field-finiteness theorem. |
| Ch. 5, “Dirichlet's unit theorem” | **included** on NT-23 in torsion, logarithmic kernel, discreteness, full rank, and regulator items. |
| Ch. 8, “Galois action on extension primes” | **included** on NT-21 in transitivity and conjugacy of primes above a base prime. |
| Ch. 8, “Decomposition and inertia groups” | **included** on NT-21 in the group definitions, exact sequence, and \(efg\) consequences. |
| Ch. 8, “The Frobenius symbol” | **included** on NT-21/NT-24 with the library's arithmetic-Frobenius normalization. |
| Ch. 8, “The non-Galois case” | The cycle-type statement is **included** on NT-21, but Stevenhagen is statement-only here: the proof of Thm. 8.9 literally says “to be supplied.”  Its proof provenance therefore remains Milne/Stein/Conrad--Landesman, never this heading. |

### 7.15 Per-pair independent-treatment audit

Each row names the actual range read in at least two independent treatments.
“Backing” means a proof-bearing treatment of the pair's spine, not a passing
mention.  Supplementary sources are listed only where they cover a material
part of the pair.  There is no one-treatment row.

| pair | treatment 1: exact range read | treatment 2: exact range read | further proof-bearing checks |
|---|---|---|---|
| NT-1 | Hackman Ch. C §§C.I--C.V, pp. 69--94 | Stein, *Elementary Number Theory*, §2.5, PDF pp. 39--49 | Evertse Ch. 3 §3.3, complete section; Gorodnik Lect. 8 §§1--2 |
| NT-2 | Hackman Ch. D §§D.I and D.IV, pp. 107--117, 123--127 | Stein §§4.1--4.3, PDF pp. 76--83 | Mascot Ch. 3 headings “Powers” through “Proofs part 2/3,” complete PDF range; Gorodnik Lect. 9 §1 |
| NT-3 | Hackman §§D.II and D.V, pp. 118--122, 127--130 | Stein §§4.1 and 4.3, PDF pp. 76--87 | Mascot Ch. 3 “Proofs part 3/3,” complete heading; Gorodnik Lect. 9 §2 and Lect. 10 §§1--2 |
| NT-4 | Hackman Ch. E §§E.I--E.II, pp. 143--154 | Stein §5.7, PDF pp. 123--127 | Mascot Ch. 4 “Introduction” and “Conclusion”; Conrad, *Sums of Two Squares and Lattices*, §§2--4 |
| NT-5 | Conrad, *Proofs by Descent*, §6, pp. 13--16 | MIT 18.781 Lecture 22, “Four Squares Theorem,” PDF pp. 2--5 | Dummit, *Number Theory, Part 9*, §9.1.2, pp. 4--5 |
| NT-6 | Stein, *Elementary Number Theory and Elliptic Curves*, §§9.2--9.4, pp. 116--124 | Granville, *Primes*, Ch. 4 §§4.1--4.2, pp. 1--5 | Mascot Ch. 5, all six indexed headings and complete 37-page PDF |
| NT-7 | Hackman Ch. G §§G.I--G.VI, pp. 195--217 | Stein Ch. 7 §§7.1--7.2 and 7.4, pp. 74--89 | Mascot Ch. 6, first six indexed headings; MIT 18.781 Lectures 18--20 |
| NT-8 | Hackman Ch. H §§H.I--H.VI, pp. 223--249 | Conrad, *Pell's Equation I*, §§1--7, and *II*, §§1--4 | Mascot Ch. 6 “The Pell--Fermat equation”; MIT 18.781 Pell lecture note |
| NT-9 | Hackman Ch. F §§F.I--F.V, pp. 167--182 | Shoup §2.9, complete section | Evertse Ch. 2 §§2.2--2.3; Crisman Chs. 18--19 and 23 |
| NT-10 | Crisman Ch. 20 §§20.1--20.5 and §24.6.4 | Sanders, *Topics in Analytic Number Theory*, Ch. 1 Props. 1.3--1.5, pp. 2--6 | Overholt, *A Course in Analytic Number Theory*, Ch. 1 §1.1, pp. 19--21 |
| NT-11 | Shoup Ch. 5 §§5.1--5.3 | Crisman Ch. 21 §§21.1--21.3 | Evertse Ch. 1 §1.3 and Exercise 1.4; Andersen Ch. 3 §§3.1--3.3 |
| NT-12 | Kedlaya Ch. 2 §§2.1--2.3 | Tomczak/Boase Ch. 3 Thms. 3.1--3.8, pp. 14--17 | Evertse Ch. 2 §§2.1--2.3, complete 16-page chapter |
| NT-13 | Kedlaya Ch. 3 §§3.1--3.5 and Ch. 4 §§4.1--4.4 | Andersen Chs. 13--15, pp. 51--60 | Evertse Ch. 3 §§3.1--3.4 and Ch. 4 §§4.1--4.2; Sutherland Lect. 18 §§18.1--18.6 |
| NT-14 | Andersen Ch. 16 §§16.1--16.3.2, pp. 60--67 | Kedlaya Ch. 6 §§6.1--6.2 | Evertse Ch. 3 §3.4 and Ch. 4 §4.3, complete sections |
| NT-15 | Kedlaya Ch. 9 §§9.1--9.5 | Andersen Ch. 11 §§11.1--11.2 and Ch. 12 §§12.1--12.4, pp. 40--48 | Tomczak Ch. 7 Thms. 7.1--7.4 |
| NT-16 | Montgomery--Vaughan Ch. 6 §§6.1--6.2, pp. 168--198 | Andersen Chs. 10--12, pp. 35--48 | Evertse Ch. 5 §§5.1--5.3 and Ch. 6 §§6.1--6.2; Kedlaya Chs. 1, 4, 7--9 at the ranges inventoried in §7.5 |
| NT-17 | Milne Ch. 7, pp. 105--124, results 7.1--7.38 selected as in §7.8 | Sutherland 18.782 Lectures 5 §§5.1--5.3 and 8 §§8.1--8.3 | Conrad, *Ostrowski's Theorem for \(\mathbb Q\)*, complete note, and *Hensel's Lemma*, complete note |
| NT-18 | Sutherland 18.782 Lectures 10 §§10.1--10.4 and 11 §§11.1--11.3 through Thm. 11.12 | Raskin, *Quadratic Forms and Hasse--Minkowski*, §§3.14--4.9 | Conrad, *Selmer's Example*, pp. 1--5, for the nonquadratic boundary only |
| NT-19 | Milne Ch. 2, pp. 25--44 | Stein, *Algebraic Number Theory*, §§2.3--2.4 and 6.1--6.2, pp. 25--35, 69--74 | Stevenhagen Chs. 3--4, PDF pp. 30--51 |
| NT-20 | Milne Ch. 3, pp. 46--67 | Stein §§4.1--4.3 and 6.3, pp. 49--59, 74--76, plus Conrad, *The Different*, §§3--4 | Stevenhagen Chs. 3--4, PDF pp. 30--51 |
| NT-21 | Milne Thm. 7.38 and Ch. 8 §§8.1--8.3, pp. 135--145 | Stein §§9.2--9.4, pp. 101--108, and Conrad--Landesman Chs. 23--24, pp. 116--127 | Stevenhagen Ch. 8, pp. 80--85, statement check only for Thm. 8.9 because its proof is absent |
| NT-22 | Milne Ch. 4, pp. 68--83, and Thm. 8.43 | Stein §§7.1--7.3, pp. 77--86, and Conrad--Landesman Chs. 25--28, pp. 128--147 | Stevenhagen Ch. 5 “Minkowski's theorem” through “Hermite's theorem,” PDF pp. 52--57 |
| NT-23 | Milne Ch. 5, pp. 85--94 | Stein §§8.1--8.2, pp. 87--98, and Conrad--Landesman Ch. 29, pp. 148--152 | Stevenhagen Ch. 5 “Dirichlet's unit theorem,” PDF pp. 57--60, for the ordinary-unit part; \(S\)-units remain backed by Milne/Conrad--Landesman |
| NT-24 | Milne Ch. 6, pp. 95--104, and Ch. 8 Examples 8.18--8.19 | Conrad--Landesman Chs. 10--11 and 24, pp. 54--63, 122--127 | Stevenhagen Chs. 3--4 and Ch. 8 “The Frobenius symbol”; Reed Lect. 9 §§2--3 and UCSB 225A Lect. XVII pp. 3--7 |

### 7.16 Convention comparisons introduced by the widened sources

- **Power residues.** Mascot works first with nonzero classes in
  \(\mathbb F_p\).  The library states the unit hypothesis explicitly, keeps
  \(p\mid a\) as a separate boundary case, and defines the Legendre symbol
  totally with value zero there.  This is a domain extension, not a change to
  Mascot's unit-case theorem.
- **Dirichlet characters.** Evertse begins with finite-group characters and
  then characterizes their maps \(\mathbb Z\to\mathbb C\), generally writing
  \(q>2\).  The library takes the modulus as data, defines the zero extension
  from \((\mathbb Z/q\mathbb Z)^\times\), and retains the harmless boundary
  moduli \(q=1,2\).  This presentation makes modulus, period, and conductor
  distinguishable and makes Euler factors at nonunits automatic.
- **Minkowski volume.** Stevenhagen embeds into the conjugation-fixed subspace
  of all complex embeddings and uses the restricted Hermitian metric.  Under
  \(\mathbb R^{r_1}\times\mathbb C^{r_2}\), its volume is \(2^{r_2}\) times
  standard Euclidean volume and its ideal covolume is
  \(\sqrt{|d_K|}N\mathfrak a\).  The library keeps its pre-existing unscaled
  real/imaginary coordinates, hence
  \(2^{-r_2}\sqrt{|d_K|}N\mathfrak a\).  The two formulas are converted, never
  mixed.
- **Orders and class groups.** Stevenhagen's \(\operatorname{Pic}(R)\) applies
  to invertible ideals of a possibly nonmaximal order.  NT-22 uses only the
  ideal class group of the maximal order \(\mathcal O_K\), whose abstract
  definition belongs to commutative algebra.  General nonmaximal-order Picard
  groups remain deferred.
- **Frobenius.** Stevenhagen's residue action \(x\mapsto x^{N\mathfrak p}\)
  agrees with the library's arithmetic Frobenius.  The library additionally
  records the chosen-prime dependence and treats an unchosen unramified
  Frobenius only as a conjugacy class.

## 8. Consolidated well-definedness and convention ledger

The pair-local proof notes above are binding.  This table makes the obligations
searchable across the three separated blocks.

| construction or convention | obligation discharged before first use |
|---|---|
| unit group, primitive root, and CRT product | Work with residue classes.  Prove CRT restricts to units and its inverse is representative-independent.  Only the reduction map is canonical; cyclic coordinate identifications depend on generators. |
| Legendre and Jacobi symbols | The Legendre value depends only on the residue class.  The library's Jacobi symbol is total for every integer numerator and positive odd denominator, with value zero exactly when the gcd is nontrivial and \((a/1)=1\); FTA makes it independent of prime ordering.  This deliberately extends Hackman's coprime-numerator convention. |
| modular square roots | Distinguish a square residue from a unit square.  Count roots only under stated valuation and parity hypotheses; Jacobi value one is never called a residuacity criterion. |
| representations by squares | \(r_2(n)\) counts ordered signed pairs, including zero coordinates.  “Primitive” means coordinate gcd one.  Four-square representations use four ordered integer coordinates; the theorem does not supply Jacobi's \(r_4\) formula. |
| binary quadratic forms | Use \(ax^2+bxy+cy^2\), discriminant \(b^2-4ac\), proper equivalence by \(\operatorname{SL}_2(\mathbb Z)\), and the displayed boundary normalization for reduced forms.  Prove substitution is an action and preserves represented integers in both directions. |
| continued fractions | Fix \(a_0\in\mathbb Z\), \(a_n\in\mathbb Z_{>0}\) for \(n>0\).  A rational has two finite displays; uniqueness is only for the normalized one with last partial quotient greater than one.  Complete quotients and the floor step are defined before recurrence. |
| Pell constructions | \(D\) is positive and nonsquare.  The fundamental positive solution exists before the least-
  \(x\) definition is made.  Norm multiplication is in the explicit order \(\mathbb Z[\sqrt D]\), which is not silently \(\mathcal O_K\). |
| arithmetic functions and convolution | Divisor sums are finite and indexed by positive divisors.  Convolution associativity displays the divisor-factorization bijection; inverse recursion is well-founded by increasing \(n\).  Published Möbius items are cited. |
| summatory functions and asymptotics | State whether \(x\) is real, whether the endpoint is included, and every dependence in \(O_q\).  The Euler and Mertens constants are defined by proved limits before use. |
| Dirichlet series and Euler products | Define \(n^{-s}=\exp(-s\log n)\) using the real logarithm.  Abscissae lie in the extended reals.  Products are ordered by increasing primes or finite prime sets, and logarithms are normalized in the absolute half-plane; no rearrangement occurs at a boundary. |
| Dirichlet characters and conductors | A character includes its modulus.  Extension by zero is representative-independent.  Modulus, period, and conductor are distinct; induced arithmetic functions can differ at new nonunits.  Fix \(e(x)=e^{2\pi ix}\) before Gauss sums or Fourier transforms. |
| Perron and zero sums | Vertical integrals are symmetrically truncated and give half the jump.  Distinguish \(\psi\) from \(\psi_0\), count zeros with multiplicity, fix the one-sided convention for \(N(T)\), define \(x^\rho\) by the real logarithm, and order every infinite zero sum by smoothing or symmetric ordinate. |
| absolute values and completions | Equivalence means positive powers; “same topology” is its theorem.  Prove operations and extended norm independent of Cauchy representatives.  Prove comparison among completion, fraction-field, inverse-limit, and digit models before changing models. |
| \(p\)-adic integers and Hensel | \(\mathbb Z_p\) is the valuation ring/topological closure, not the integral closure of \(\mathbb Z\) in \(\mathbb Q_p\).  Congruence means ideal membership.  Newton iteration provides its own compatible sequence. |
| Hilbert symbols and Hasse--Minkowski | Inputs are nonzero square classes and formulas use normalized valuations.  Diagonalize only after removing the radical.  Rational isotropy is not integral representation, and local--global is asserted only for quadratic forms. |
| number-field bases and discriminants | Orders have full \(\mathbb Z\)-rank.  Discriminant first belongs to an ordered basis; the squared determinant proves independence for an order.  Use all complex embeddings in the trace determinant but one per conjugate pair in Minkowski space. |
| ideals, different, and ramification | Absolute ideal norm is positive.  Every \(e,f\) belongs to a named prime over a named base prime.  Dedekind--Kummer states its monogenic/index hypothesis.  The trace dual is basis-free; the different is its inverse.  Wild ramification gives a lower bound, not an exponent determined by \(e\). |
| decomposition and Frobenius | \(D\) and \(I\) depend on a chosen prime above \(\mathfrak p\) and change by conjugacy.  Arithmetic Frobenius is \(x\mapsto x^{N\mathfrak p}\).  At a ramified prime it is a coset in \(D/I\), not a canonical lift; without a chosen prime, unramified Frobenius is a conjugacy class. |
| Minkowski embedding and regulator | Use unscaled real/imaginary coordinates, covolume \(2^{-r_2}\sqrt{|d_K|}N\mathfrak a\), and doubled complex logarithmic coordinates.  Regulator uses an absolute determinant, is independent of deleted row/basis, and has empty determinant one in rank zero. |
| cyclotomic conductor and Gauss sum | Reduce \(n\equiv2\pmod4\) to the intrinsic conductor before ramification/discriminant formulas.  Define \(\operatorname{ord}_1(\ell)=1\).  \(\tau_p\) depends on the primitive root, but its square and generated subfield do not. |

### Source-convention decisions

Where the sources differ, the library adopts the total Jacobi convention just
described; the \(ax^2+bxy+cy^2\) rather than \(ax^2+2bxy+cy^2\) form
convention; positive-power equivalence of absolute values; arithmetic
Frobenius; signed field discriminant but positive ideal norm; unscaled
Minkowski coordinates; doubled complex unit logs; and the reduced cyclotomic
conductor.  These choices align the supplier pages and make every displayed
formula stable.  They are conversions of sourced statements, never invented
converses.

## 9. Choice-strength ledger

“Intrinsic” records the proof on this scaffold; “inherited” records a supplier
whose own statement has a higher set-theoretic cost.  A future item must carry
the greater of the two and may lower it only by supplying and auditing a new
proof.

| pages/results | intrinsic cost | inherited cost and exact reason |
|---|---|---|
| NT-1--NT-8 | ZF | None.  All selections are finite, least residues, or least positive integers after nonemptiness is proved. |
| NT-9--NT-13 | ZF | None beyond the library's constructed real/complex numbers.  Divisor sets and character groups are finite, and prime ordering is canonical. |
| NT-14, primitive L functional equations | ZF relative to Poisson summation | The selected FA-22/FA-25 route rests on the measure-theory construction whose Carathéodory extension ledger charges \(\mathsf{AC}_\omega\).  Copy that supplier charge; finite Gauss sums and parity manipulations add none. |
| NT-15--NT-16 | ZF relative to CA-18/21/22 | CA-18's current scaffold allows at most \(\mathsf{AC}_\omega\) for product/exhaustion machinery and directs the build to canonical exhaustions to remove it.  Until built, inherit its eventual item-level label.  Finite contour grids, zero multiplicities, and least admissible heights add no choice. |
| NT-17, construction/completeness of \(\mathbb Q_p\) | ZF intrinsically | The published `thm-metric-completion-exists` explicitly uses \(\mathsf{AC}_\omega\) in its diagonal completeness proof, so NT-17 and any result depending on that field inherit countable choice. |
| NT-17, Ostrowski, product formula, finite approximation, digit recursion, Newton | ZF | These constructions are explicit; they add no choice beyond existence/completeness of the named completion. |
| NT-18 | ZF intrinsically | Inherits \(\mathsf{AC}_\omega\) from NT-17.  The global square-class prime is the least prime in a proved nonempty progression, not an application of choice. |
| NT-19--NT-20 | ZF | Finite bases exist by finite module theory; finite choice is a theorem of ZF.  No permanent basis is selected as field data. |
| NT-21 | ZF intrinsically | Inherits NT-17's \(\mathsf{AC}_\omega\) for completions.  Finite prime orbits and residue fields add none. |
| NT-22 | ZF relative to Euclidean volume | Its use of planned Lebesgue measure inherits the measure scaffold's \(\mathsf{AC}_\omega\) construction charge; Blichfeldt, convex-body scaling, and bounded-ideal enumeration add none. |
| NT-23 | ZF intrinsically | Inherits NT-22's supplier charge.  Lattice bases, fundamental units, and the finite set \(S\) use only finite choice. |
| NT-24 | ZF intrinsically | Inherits NT-21 only when its completion/Frobenius supplier is followed through the DAG; the cyclotomic integer, ideal, and Gauss-sum arguments themselves are finite ZF algebra. |

No item here requires dependent choice, BPI, Hahn--Banach, or full AC beyond a
stronger label already carried by a named external supplier.  In particular,
the Hasse--Minkowski proof does not spend choice merely because it asserts
simultaneous local conditions.

## 10. Component-provenance plan

Every A-row's last cell already assigns statement/proof provenance: `L/L`,
`L/A`, or `L/NA`, with a locator and the reason for any alteration.  This is
the future `provenance.statement` / `provenance.proof` plan: `L` maps to
`literature-derived`, `A` to `ai-altered`, and `NA` to `not-applicable`.
Definitions and no-proof remarks use `not-applicable` for proof.

Unless a B row is listed below, its statement and computation are
`ai-generated` / `ai-generated`: it is a finite numerical example or directly
checkable counterexample, is non-citable, and is forbidden as a dependency
target.  This universal assignment is part of every such row's plan, not an
invitation to infer provenance during the build.  The following B items are
instead `literature-derived` / `literature-derived` because their existence or
proof is not a trivial computation:

- `cex-a-number-field-need-not-be-monogenic`, if retained, requires a named
  fully proved literature example; otherwise omit the item;
- `cex-local-global-fails-for-a-cubic-curve` is Conrad's literature-derived
  Selmer cubic; its local calculations are `ai-altered` when adapted to
  NT-17's Hensel ids, while its later algebraic proof is `not-supplied`;
- `cex-the-mertens-conjecture-is-false` is literature-derived from
  Odlyzko--te Riele and has proof `not-supplied`; it records a boundary fact,
  not an input to NT-16;
- `cex-same-discriminant-does-not-imply-proper-equivalence`,
  `cex-same-represented-integers-do-not-imply-proper-equivalence`, and all
  definite-reduction source examples taken from Stein/Granville are
  `literature-derived` statements, with proofs either literature-derived or
  explicitly recomputed and then `ai-altered`;
- `cex-indefinite-classes-have-cycles-of-reduced-forms`,
  `ex-generalized-pell-orbits-for-six`, and
  `cex-generalized-pell-solutions-need-not-all-be-convergents` are
  literature-derived from Granville or Conrad; an adapted finite computation
  is `ai-altered` rather than `ai-generated`;
- `rem-dirichlet-divisor-problem` is a literature-derived open-problem
  statement with proof `not-applicable`, and
  `ex-bertrand-finite-range-verification` reproduces the proof source's
  finite check with an `ai-altered` verification;
- `ex-wild-different-exponent` and every class-group computation whose
  nonprincipality proof is sourced are `literature-derived` / `ai-altered`;
- `ex-discriminant-lower-bound` and
  `ex-no-everywhere-unramified-extension-of-q` are literature-derived
  consequences from Milne/Stein, with `ai-altered` proofs adapted to NT-22;
- alternate-proof remarks (Zolotarev, Gaussian integers, theta/Mellin, Newman)
  are literature-derived and `not-supplied` unless the B item actually carries
  the proof.

No AI-generated A statement exists.  No B item, regardless of provenance, is
a dependency target.

## 11. Amendments owed to sibling scaffolds

This section began as requests only. Entries marked **applied** are now
reconciliation receipts; unmarked entries remain requests.

1. **Complex analysis CA-18:** expose stable item ids for Jensen's formula,
   the order of an entire function, the Hadamard product/factorisation of an
   order-one entire function, and the logarithmic derivative of that product.
   NT-15--NT-16 presently cite the CA-18 page at page level because the
   finished prose promises the results but supplies no candidate ids.
2. **Complex analysis CA-21/CA-22:** retain the exact promised ids listed in
   §5 and make
   `thm-riemann-zeta-is-zero-free-on-the-closed-right-half-plane` qualitative
   only.  The
   number-theory track owns the classical quantitative region and PNT error.
3. **Functional analysis FA-22/FA-25:** build
   `lem-fourier-transform-of-a-gaussian`, `def-dirac-comb`, and
   `thm-dirac-comb-is-fourier-invariant` under the same \(e^{2\pi ix}\)
   normalization before NT-14.  The analytic page derives its twisted finite
   character factor and does not re-mint general Poisson summation.
4. **Group theory GT-17:** retain the planned compatible-residue definition,
   ring operations, topology, completeness, compactness, and dense
   \(\mathbb Z\)-map for \(\mathbb Z_p\), and expose stable ids.  It should not
   also define \(\mathbb Q_p\); NT-17 owns the metric completion and proves the
   canonical comparison/fraction-field theorem.
5. **Abstract algebra — applied in the receiving algebra scaffold:** keep cyclotomic extension/Galois-group and unique
   index-two-subfield facts in GA-3 and general finite-character orthogonality
   on its representation page.  GA-3 also owns `thm-kronecker-weber`; NT-24
   cites it and owns the arithmetic consequence above.  Do not add cyclotomic
   integer rings, prime decomposition, or arithmetic Frobenius there;
   NT-21/NT-24 own them.
6. **Future quadratic-order/class-group interface:** the form--ideal
   correspondence, Gauss composition, indefinite reduction cycles, narrow
   class groups, and nonmaximal orders remain owed to a later scaffold.  NT-6
   proves only positive-definite reduction, and NT-22 uses ideal classes
   directly.

## 12. Unresolved seams and build-time forward-reference checks

1. CA-18, CA-21, CA-22, FA-22/FA-25, GT-17, and every finished
   commutative-algebra page cited here are planned with empty `items[]` in the
   live plan.  Their prose supplies candidate ids, but a future build must
   verify that the exact supplier item is authored below its consumer before
   resolving any `deps` entry.
2. The three placement anchors are nonnegotiable.  The orchestrator must splice
   NT-1--NT-8 after `splitting-fields-examples`, NT-9--NT-16 after
   `bloch-schottky-and-picard-examples`, and NT-17--NT-24 after the last
   commutative-algebra page.  In the current live topology the analytic anchor
   precedes the commutative-algebra terminus, which is why NT-18 may depend on
   NT-13.  Reordering those anchor blocks would reopen the Hasse--Minkowski
   seam.
3. `cex-a-number-field-need-not-be-monogenic` is optional and has an unresolved
   source obligation: retain it only after obtaining a complete proof of a
   named example.  It is non-load-bearing and may be omitted without weakening
   NT-19.
4. CA-18's missing stable ids are the only unresolved naming seam.  There is no
   unresolved mathematical forward reference: Hasse--Minkowski is fully
   scaffolded after Dirichlet AP, and quadratic reciprocity in NT-24 is a later
   reinterpretation rather than a low-block dependency.

No capability or research blocker was encountered.  Deferred and out-of-scope
results are recoverably named in §§2 and 7; none is being used as an undeclared
premise.

## 13. Density-enrichment report (WIDEN pass, 2026-08-14)

### Measurement audit

- **Verified item count before:** 590 item-table rows, 590 unique ids, zero
  duplicates.  The dispatch's 586 was low by four.
- **Verified item count after:** 592 item-table rows, 592 unique ids, zero
  duplicates.
- **The claimed heading denominator is not a heading count.** Before this pass,
  the lowercase word `included` occurred 41 times, but single clauses
  such as “D.I.1--D.I.9 are included” dispose of many source entries at once,
  while other clauses say “inline” or “already published.”  Thus
  \(590/41=14.39\) is reproducible as a lexical ratio but is not a
  decomposition ratio.  The dispatch's 14.3× combines that invalid
  denominator with its four-item undercount.
- **After, the same invalid grep gives** 96 occurrences and
  \(592/96=6.17\).  It falls merely because this pass writes one disposition
  row per new source heading.  The true legacy before/after decomposition
  ratios are therefore **not recoverable from this artifact**, and neither
  14.39× nor 6.17× is reported as mathematical density.
- **The widened increment is exactly auditable:** 57 new source headings
  (Mascot 23, Evertse 16, Stevenhagen 18) plus the separately selected
  Evertse Exercise 1.4, for 58 disposition rows.  Of the headings, 51
  explicitly map to included library content; the exercise does too.  The
  other six rows are three Gaussian-integer alternate-route headings and
  three contextual/inline headings.  Future ratio measurements can count
  heading rows rather than disposition words.

### Sources and content added

Three additional complete, legitimate full-text treatments were obtained:
Mascot's complete MAU23101 Chs. 3--6, Evertse's complete prime-number-theory
course PDFs over the exact ranges in §7.13, and Stevenhagen's complete
91-page *Number Rings* over Chs. 3--5 and 8.  Sections 7.12--7.14 give every
new source heading a disposition.  Section 7.15 gives all 24 A/B pairs
two-or-more proof-bearing treatments and the exact range read in each; no row
is padded with a passing mention and no pair remains singly backed.

The widened reading mostly corroborated the already dense decomposition.  Two
source results filled genuine, useful gaps:

1. NT-2 adds
   `cor-unique-kth-root-modulo-prime-for-coprime-exponent` from Mascot Ch. 3,
   PDF pp. 8--9.  Its statement is literature-derived and its proof is
   AI-altered only to cite the existing root-count corollary and expose
   independence of the inverse exponent.
2. NT-12 adds `thm-uniqueness-of-dirichlet-series-coefficients` from Evertse
   Thm. 2.1.6, PDF p. 5, with both statement and least-nonzero-coefficient
   proof literature-derived.

No A page was split: after enrichment the largest A page has 24 items, well
below the 60-item ceiling.  Existing ids were not changed or renumbered.

### Deliberate non-decomposition and seam decisions

- Mascot's three Gaussian-integer development headings were not turned into
  new low-anchor A items.  They are an alternate proof of NT-4 and would
  duplicate algebraic structure before the NT-19 integer-ring block.
- Mascot's class-number-one discussion remains worked NT-6 B material; finite
  examples do not license a general classification theorem.
- Evertse §5.1 is contextual, and §5.3 is the specialized Dirichlet-series
  interface to the §5.2 Tauberian theorem.  They are inline in NT-16 rather
  than duplicate dependency targets.
- Stevenhagen's computational-techniques heading remains B material, and his
  Picard groups of nonmaximal orders remain on the commutative-algebra/future
  quadratic-order seam.  NT-22 uses only the maximal-order class group.
- Stevenhagen Thm. 8.9 is not used for proof provenance because its printed
  proof is “to be supplied.”  Its non-Galois cycle-type statement is checked
  there, while the proof remains backed by Milne, Stein, and
  Conrad--Landesman.

The widened sources' character, Minkowski-volume, Picard/class-group, and
Frobenius conventions are compared in §7.16.  The pass does not annex
commutative algebra, general Galois theory, complex-analytic Gamma/zeta, or
class-field theory; those suppliers continue to be cited at the seams.
