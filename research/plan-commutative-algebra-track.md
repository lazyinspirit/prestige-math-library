# Commutative algebra — subject-track prose scaffold

## Summary for the orchestrator

**Commission and placement.** This is the sole scaffold for the
`commutative-algebra` track in `subjects-01`.  Its main block uses
`modules-over-a-pid-and-canonical-forms-examples` as its placement anchor.  The
planned Galois block is available to it exactly as the seam contract specifies,
despite its currently empty live `items` arrays.  CA-14 is separately anchored
after the published formal-power-series page, and CA-15 after the published
topology and compactness pages.  The last three pairs form
a separately anchored homological block and
must be inserted only after `homological-algebra` (in practice, after the last
homological-algebra companion page that the splice retains).  Absolute orders
are intentionally absent.

**Pairs scaffolded.** The low-anchor block consists of CA-1 Noetherian rings and
Hilbert basis; CA-2 localisation of modules, support, and Nakayama; CA-3 prime
spectra and radicals; CA-4 Artinian rings and length; CA-5
associated primes and primary decomposition; CA-6 integral extensions and the
going-up/going-down theorems; CA-7 Noether normalisation and the
Nullstellensatz; CA-8 valuation rings and DVRs; CA-9 Dedekind domains,
fractional ideals, and the ideal class group; CA-10 Krull dimension and height
theorems; CA-11 Rees modules, Artin--Rees, and Hilbert--Samuel polynomials; CA-12
flatness and faithful flatness; and CA-13 inverse limits and completion.  CA-14
supplies Henselian rings and equicharacteristic Cohen structure after formal
power series; CA-15 supplies Zariski topology after general topology.  The
post-homological block consists of CA-16 Koszul
complexes and regular sequences; CA-17 depth and Cohen--Macaulay modules; and
CA-18 regular local rings and homological
dimension.  Every A page is below the 60-item ceiling; every B page is a
non-citable examples/exercises companion.

**Full texts obtained; exact ranges read.** Two complete standard treatments
were obtained in full: Allen Altman and Steven Kleiman, *A Term of Commutative
Algebra* (2013 edition, 266 pages),
<https://web.mit.edu/18.705/www/13Ed.pdf>, across selected §§1 and 3 and the exact
ranges in §§9--25 listed in §8.1 (with §§10--11, 13, 15 and 23 explicitly
selective); and James
Milne, *A Primer of Commutative Algebra* (v4.03, 2020, 113 pages),
<https://www.jmilne.org/math/xnotes/CA.pdf>, especially the exact numbered
ranges in §§3, 5--8, 11, 13--14, 16, 18--21 and 24 listed below.
The independent full-note corpus is the Stacks Project, *Commutative Algebra*
and *More on Algebra* (current chapter PDFs and section pages, retrieved
2026-08-14), <https://stacks.math.columbia.edu/download/algebra.pdf>; the
CRing Project, *Commutative Algebra* (493 pages),
<https://math.uchicago.edu/~amathew/CRing.pdf>; and Craig Huneke/Branden
Stone's three-semester commutative-algebra notes,
<https://home.adelphi.edu/~bstone/commalg-notes/>, and Mircea Mustaţă's full
*Introduction to Commutative Algebra*,
<https://websites.umich.edu/~mmustata/CAnotes.pdf>.  Exact read ranges and the
heading-by-heading dispositions appear in the canonical-coverage harvest.

**Seams consumed.** This scaffold consumes the abstract-algebra scaffold's
planned `def-noetherian-module`, `def-artinian-module`,
`def-noetherian-ring`, Artinian-ring definition, module chain-condition
theorems, integral-element definition and determinant trick; the published
ring, ideal, quotient, polynomial, field-of-fractions/localisation, module,
free-module and exact-sequence pages named below, plus the planned tensor-product
page; and the
abstract-algebra Galois block's planned algebraic closure.  The post-homological
block consumes chain complexes, homology, projective resolutions, Ext and Tor
from `homological-algebra`; it does not re-mint any of them.

**Seams owed.** Number theory may cite CA-8/CA-9 for DVRs, Dedekind domains,
fractional and invertible ideals, unique factorisation of ideals, and the
general fractional-ideal class group, but retains rings of integers, arithmetic class groups,
units, and ramification.  Algebraic geometry may cite CA-2/CA-3/CA-5--CA-7 and
CA-10--CA-18 for affine commutative-algebra foundations.  The
abstract-algebra scaffold is owed the enrichment recorded below for its thin
published PID/UFD page.  Homological algebra is owed no new construction: it
only has to expose stable ids for the resolution, Ext, and Tor results listed in
the unresolved-seam table before CA-16--CA-18 can be built.

**Unresolved forward references.** CA-3 withholds all genuinely topological
claims until CA-15, whose anchor must follow `topological-spaces-and-continuity`
and `compactness`; this is a split anchor, not a low spine forward reference.
There are no forward references from the low block into the later homological
block.  The later block has an explicit
anchor dependency, not a disguised forward reference.  Stable item ids for
the still-unauthored abstract-algebra and homological-algebra dependencies must
be reconciled at splice; until then this scaffold cites their page ids and
descriptive theorem names.  The full mixed-characteristic Cohen structure
theorem is not scaffolded as a proved item: its Cohen-ring/formal-smoothness
machinery is absent.  The equicharacteristic theorem is the required proved
result; mixed characteristic is a precisely sourced, non-load-bearing boundary
remark and recorded blocker.

**Scope denials and blockers.** Ext, Tor, derived functors, and the existence of
resolutions belong to `homological-algebra`; arithmetic applications of
Dedekind domains belong to `number-theory`; schemes, sheaves, morphisms of
schemes, and geometric dimension theory belong to algebraic geometry; local
cohomology, duality, Gorenstein rings, intersection theory, excellent rings,
and Zariski's main theorem require later subject machinery and are not smuggled
in here.  No source-access blocker remains.  The sole mathematical scope
blocker is the mixed-characteristic Cohen clause just stated.

---

## 1. Why this track exists

The published algebra band reaches commutative rings, ideals, quotients,
polynomial rings, unique-factorisation vocabulary, fields of fractions and
ring localisation, then later modules, free modules, tensor products and exact
sequences.  It does not yet explain the finiteness conditions that make ideals
manageable, how algebra changes under localisation, how prime ideals organise
a ring, why affine algebras over fields have points, how one measures local
dimension and multiplicity, or why completion and flatness preserve the
information used in local proofs.  This track supplies that middle language.
Its governing movement is from finite generation, through prime-local
analysis, to dimension and completion, and only then—after homological algebra
exists—to depth and regularity.

The following dependencies were verified from the live `items` arrays and the
published library pages, not inferred from titles:

| Published/planned source page | Material this scaffold actually uses |
|---|---|
| `rings-subrings-and-integral-domains` | commutative rings, domains, units, zero divisors, ring homomorphisms |
| `ideals-and-quotient-rings` | ideals, generated ideals, prime/maximal ideals, quotients, correspondence, maximal-ideal existence |
| `euclidean-domains-pids-and-unique-factorisation` | definitions of PID and UFD only; its seven-item shortfall is recorded as an amendment |
| `polynomial-rings-and-roots` | one- and multivariable polynomial rings, evaluation, division, degree, adjugate identity |
| `the-field-of-fractions-and-localisation` | multiplicative sets, localisation of rings, universal property, prime localisation, local rings, ideal correspondence, localisation/quotient compatibility |
| `modules-and-module-homomorphisms`; `free-modules-and-exact-sequences` | submodules, quotients, annihilators, finite generation, free modules, Hom, exact sequences, projective/injective modules |
| `tensor-products-of-modules` (planned, abstract algebra) | tensor product, its universal property and right exactness, extension of scalars, `def-flat-module` |
| `chain-conditions-and-semisimple-modules` (planned, abstract algebra) | the three reserved definitions, module chain-condition results, length, integral elements, determinant trick |
| `modules-over-a-pid-and-canonical-forms` (planned) | structure of finitely generated modules over a PID where an example needs it |
| `algebraic-closure-embeddings-and-separability` (planned) | algebraic closures used in the closed-point form of the Nullstellensatz |

No item in this scaffold redefines any item in that table.  In particular,
localisation of a **ring** is always cited from
`the-field-of-fractions-and-localisation`; CA-2 constructs localisation of a
**module** over that ring.

## 2. Scope denials

1. **Arithmetic Dedekind theory.** Rings of integers, ideal classes of a
   particular number field, Minkowski theory, the unit theorem, splitting and
   ramification are `number-theory`.  CA-9 ends at the general fractional-ideal
   class group and projective-module theory over an arbitrary Dedekind
   domain.
2. **Derived functors.** Ext and Tor, their long exact sequences, derived
   categories, and spectral sequences are `homological-algebra`.  CA-12 may use
   the elementary tensor definition of flatness; CA-16--CA-18 cite Tor only
   after the homological anchor.
3. **Scheme theory.** `Spec R` is a topological space here.  Structure sheaves,
   locally ringed spaces, schemes, quasicoherent sheaves, and geometric
   morphisms are not silently introduced.
4. **Further local algebra.** Local cohomology, duality, canonical modules,
   Gorenstein rings, intersection multiplicities, Rees valuations,
   excellence, formal fibres, and desingularisation require substantial later
   machinery.  Each relevant harvested heading is disposed individually in
   §8.
5. **Zariski's main theorem.** Milne §17 is not a prerequisite for the requested
   theory and belongs with finite-type morphisms in algebraic geometry.

## 3. Conventions, item contract, and provenance

All rings in the low block are commutative with identity and all ring maps
preserve identity, matching the published ring pages.  The zero ring is allowed
unless a statement explicitly says otherwise.  For a ring map (A\to B),
`integral extension` means every element of (B) is integral over (A).
Dimension is the supremum in \(\mathbb N\cup\{\infty\}\) of lengths of strict
chains of prime ideals; the zero ring therefore has dimension
\(-\infty\) only on pages that explicitly extend the codomain to
\(\{-\infty\}\cup\mathbb N\cup\{\infty\}\), and otherwise is excluded.  A
regular sequence is ordered and required to generate a proper ideal; its
successive non-zero-divisor condition is on successive quotients.  A Dedekind
domain means a Noetherian, integrally closed domain of Krull dimension one
(with fields excluded by the dimension-one clause).  This convention is
compared with the equivalent local-DVR convention in CA-9.

Every mathematical-content row below carries component provenance.  `L/L`
means a literature-derived statement and literature-derived proof route;
`L/A` means a literature-derived statement whose proof is altered only to cite
the library's existing lemmas and expose intermediate obligations; `L/NA`
means a literature-derived definition with no proof component.  No planned
statement is AI-generated.  An example marked `L/A` is a standard sourced
example with computations rearranged for the library.  Thus every dependency
target is literature-derived.  The source cell is also the rationale: it names
the treatment from which the exact hypotheses and conclusion come, while the
proof-strategy paragraph explains any alteration.

B pages are examples, counterexamples and exercises.  They are never named in
`requires` and no A item may depend on one.  Each future page summary must be
exactly two short paragraphs: first the mathematical arc, then the explicit
prerequisites and downstream use.

---

## 4. Low block — after `modules-over-a-pid-and-canonical-forms-examples`

### CA-1. Noetherian rings, induction, and Hilbert's basis theorem

- **A page id:** `noetherian-rings-and-hilbert-basis`
- **B page id:** `noetherian-rings-and-hilbert-basis-examples`
- **Requires:** `chain-conditions-and-semisimple-modules` for
  `def-noetherian-module`, `def-artinian-module`, `def-noetherian-ring`, the
  Artinian-ring definition, the exact-sequence criterion for Noetherian
  modules, and “finitely generated over a Noetherian ring implies
  Noetherian”; plus `ideals-and-quotient-rings`,
  `polynomial-rings-and-roots`, and
  `the-field-of-fractions-and-localisation`.
- **Primary backing:** Altman--Kleiman §16, pp. 96--107, especially (16.1)--
  (16.21), Hilbert basis (16.12), finite modules (16.19), and Artin--Tate
  (16.21); Milne §3, pp. 9--14, Props. 3.1--3.5, Thm. 3.7, Cor. 3.8,
  Nakayama 3.9 and Krull intersection 3.16.  Independent check: Stacks
  §§10.31 and 10.51.

#### A-page items, in dependency order

| id | kind | statement | provenance and locator |
|---|---|---|---|
| `rem-noetherian-conventions-and-choice` | `rem` | Cite, rather than re-state as definitions, the abstract-algebra page's Noetherian/Artinian conventions; record that its finite-generation definition is ZF while the full ACC/maximal-condition equivalence uses dependent choice in the direction that extracts a strict sequence. | L/NA; Milne Prop. 3.1 and discussion after Prop. 3.2; sibling scaffold §II.5.a. |
| `thm-noetherian-induction` | `thm` | If R is Noetherian and a property of ideals holds for I whenever it holds for every ideal strictly containing I, then it holds for every ideal. | L/A; CRing Project, Ch. 5 §1.4, Prop. 1.15, using the sibling maximal-condition theorem with its DC flag. |
| `lem-leading-coefficient-ideals` | `lem` | For an ideal (I\subseteq R[x]), the leading coefficients of its polynomials of degree at most (n) form an ascending chain of ideals whose union is the ideal of all leading coefficients. | L/A; proof component of Altman--Kleiman (16.12) and Milne Thm. 3.7. |
| `lem-polynomial-ideal-finite-generation` | `lem` | If (R) is Noetherian, every ideal of (R[x]) is generated by finitely many polynomials selected from finitely many stabilised leading-coefficient stages. | L/A; Altman--Kleiman (16.12), split to expose the degree-reduction termination. |
| `thm-hilbert-basis-theorem` | `thm` | If (R) is Noetherian, then (R[x]) is Noetherian. | L/A; Altman--Kleiman (16.12); Milne Thm. 3.7. |
| `cor-finite-variable-polynomial-ring-noetherian` | `cor` | (R[x_1,\ldots,x_n]) is Noetherian for every finite (n) when (R) is Noetherian. | L/A; Milne Thm. 3.7, induction on (n). |
| `cor-finite-type-algebra-over-noetherian-ring-is-noetherian` | `cor` | Every finitely generated (R)-algebra is Noetherian when (R) is Noetherian. | L/A; Altman--Kleiman (16.12); Milne Thm. 3.7, as a quotient of a polynomial ring. |
| `thm-noetherian-ring-quotients-and-localisations` | `thm` | Every quotient and every localisation of a Noetherian ring is Noetherian. | L/A; Milne discussion after Prop. 3.1 and §5; Stacks Lemmas 10.31.2, 10.31.4.  The localisation half transports a finitely generated contracted ideal. |
| `thm-cohen-noetherian-criterion` | `thm` | A commutative ring is Noetherian if every prime ideal is finitely generated. | L/A; Altman--Kleiman (16.10); CRing Project Ch. 4, Cor. 1.19. |
| `thm-module-finite-algebra-over-noetherian-ring-is-noetherian` | `thm` | If (A) is Noetherian and (B) is finite as an (A)-module, then (B) is a Noetherian ring and every finite (B)-module is Noetherian as an (A)-module. | L/A; Altman--Kleiman (16.19); Milne Prop. 3.4. |
| `thm-artin-tate-lemma` | `thm` | If (A\subseteq B\subseteq C), (A) is Noetherian, (C) is finite as a (B)-module and finitely generated as an (A)-algebra, then (B) is finitely generated as an (A)-algebra. | L/A; Altman--Kleiman (16.21); Stacks Lemma 10.51.7. |
| `cor-noetherian-ring-finitely-presented-ideals` | `cor` | Every finitely generated module over a Noetherian ring is finitely presented; in particular every ideal has a finite presentation. | L/A; Altman--Kleiman (16.19); Stacks Lemmas 10.31.3 and 10.31.4, using the published kernel/presentation definitions. |
| `cor-finite-type-algebra-over-noetherian-ring-is-finitely-presented` | `cor` | Every finite-type algebra over a Noetherian ring admits a presentation by finitely many variables and finitely many relations. | L/A; Milne Cor. 3.8; Stacks Lemma 10.31.4. |
| `cor-hom-of-finite-modules-is-finite-over-a-noetherian-ring` | `cor` | If M is finite and N is finite over a Noetherian ring, then Hom_R(M,N) is finite. | L/A; Altman--Kleiman Ex. 16.20, embedding Hom into a finite power of N. |
| `cor-surjective-endomorphism-of-a-noetherian-module-is-an-isomorphism` | `cor` | Every surjective endomorphism of a Noetherian module is injective. | L/A; Stacks Lemma 10.31.10, using stabilisation of kernels. |
| `rem-noetherian-hypotheses-do-not-descend-to-subrings` | `rem` | Noetherianity passes to quotients, localisations, and finite algebras as stated above, but not to arbitrary subrings. | L/NA; Altman--Kleiman §16 after (16.21); the sourced witness is on B. |

#### Proof strategy and obligations

The Hilbert-basis proof is not compressed to “compare leading terms.”  First
prove that each bounded-degree leading-coefficient set is an ideal and that the
chain stabilises.  Choose finite generators for the stable ideal and for the
finitely many earlier stages; induction on degree then lowers a polynomial by
subtracting an appropriate multiple of one selected generator.  The induction
terminates in \(\mathbb N\), not by a concealed choice argument.  The theorem
for finite-type algebras then uses the already-published evaluation quotient
map.  For localisation, if (J\subseteq S^{-1}R), contract it to (I\subseteq
R), choose generators of (I), and check from the published fraction equality
that their images generate (J); no false claim that contraction and extension
are inverse for all ideals is permitted.  Artin--Tate records all coefficients
used to express the algebra generators and module multiplication, puts them in
a finite-type Noetherian intermediate algebra, and obtains (B) as a finite
module over it.  Cohen's criterion takes an ideal maximal among the
non-finitely-generated ideals, proves that such an ideal is prime by the Oka
family argument, and contradicts the hypothesis.  The proof must not silently
replace that maximality step by Noetherian induction, since Noetherianity is
what is being proved.

**Well-definedness.** The quotient-algebra step cites the published quotient
universal property.  Leading coefficient (0) is never assigned a degree; the
zero polynomial is handled separately.  Localised generators are elements of
the already-published localisation equivalence classes, so no new fraction
relation is defined here.

**Choice strength.** The algebraic construction and all finite-generation
arguments are ZF once the inherited definition “every ideal is finitely
generated” is used.  The displayed Noetherian-induction theorem is licensed
through the maximal-condition equivalence and therefore carries the same DC
cost isolated on the sibling theorem.  No later theorem on this page needs to
invoke that induction item.  The chosen maximal-counterexample proof of
Cohen's criterion uses Zorn and therefore carries full AC at the library's
declared granularity.

#### B page

| id | kind | content | provenance and locator |
|---|---|---|---|
| `ex-noetherian-integers-and-fields` | `ex` | Verify directly that fields and \(\mathbb Z\) are Noetherian, then apply Hilbert basis to their finite polynomial rings. | L/A; Milne §3 opening examples. |
| `ex-noetherian-quotient-affine-algebra` | `ex` | Prove (k[x,y]/(xy)) and (\mathbb Z[x]/(x^2-2)) Noetherian without classifying their ideals. | L/A; standard applications of Milne Thm. 3.7. |
| `ex-infinite-polynomial-ring-not-noetherian` | `ex` | The ideal ((x_1,x_2,\ldots)) in (k[x_1,x_2,\ldots]) is not finitely generated. | L/A; Altman--Kleiman §16 exercises. |
| `ex-noetherian-subring-counterexample` | `ex` | The fraction field of (k[x_1,x_2,\ldots]) is a field and hence Noetherian, while its displayed polynomial subring is not. | L/A; standard witness paired with Altman--Kleiman §16 discussion. |
| `ex-hilbert-basis-leading-coefficient-reduction` | `ex` | Work the proof algorithm on an explicit ideal of \(\mathbb Z[x]\), including the non-monic leading-coefficient stages. | L/A; Altman--Kleiman (16.12). |
| `ex-artin-tate-finite-intermediate-algebra` | `ex` | In a concrete tower (k\subseteq B\subseteq C), identify the finite coefficient algebra used by Artin--Tate. | L/A; Altman--Kleiman (16.21). |
| `ex-noetherian-does-not-mean-finite-cardinality` | `ex` | Separate finiteness of ideal generation from finiteness of the underlying set using \(\mathbb Z[x]\). | L/A; Milne §3. |
| `ex-noetherian-ring-ascending-chain` | `ex` | Show an explicit ascending ideal chain stabilises by finding generators of its union. | L/A; Milne Prop. 3.1. |

### CA-2. Localisation of modules, support, and Nakayama's lemma

- **A page id:** `localisation-of-modules-and-support`
- **B page id:** `localisation-of-modules-and-support-examples`
- **Requires:** CA-1; `the-field-of-fractions-and-localisation`; the module,
  quotient-module and exact-sequence items in the two published module pages;
  `tensor-products-of-modules` from the abstract-algebra scaffold; and the determinant trick planned on
  `chain-conditions-and-semisimple-modules`.
- **Primary backing:** Altman--Kleiman §§11--13, pp. 66--83, especially module
  localisation (12.1)--(12.25), support (13.26)--(13.30), local vanishing
  (13.35), exactness (13.43), and local generators (13.44); Milne §5,
  pp. 18--25, and Lemma 3.9.  Independent check: Stacks §§10.9, 10.18, 10.20
  and 10.40.

#### A-page items, in dependency order

| id | kind | statement | provenance and locator |
|---|---|---|---|
| `def-localisation-of-a-module` | `def` | For an R-module M and multiplicative subset S, define its localisation from module fractions, with the induced localised-ring action. | L/NA; Altman--Kleiman (12.1)--(12.2); Stacks Def. 10.9.6. |
| `lem-localisation-of-a-module-well-defined` | `lem` | The module-fraction relation is an equivalence relation and the addition and scalar-action formulas are independent of representatives. | L/A; Altman--Kleiman (12.1)--(12.2). |
| `thm-universal-property-localisation-of-a-module` | `thm` | Every R-linear map from M into an S-local module factors uniquely through the localisation map. | L/A; Altman--Kleiman (12.3); Milne Prop. 5.10; Stacks Lemma 10.9.7. |
| `thm-localisation-of-modules-is-tensor-product` | `thm` | The canonical map from the tensor product of the localised ring with M to the localisation of M is a localised-ring-module isomorphism. | L/A; Altman--Kleiman Cor. 12.13; Stacks §10.9. |
| `thm-localisation-of-modules-commutes-with-quotients-and-sums` | `thm` | Localisation commutes with quotient modules and arbitrary direct sums. | L/A; Altman--Kleiman (12.22) and the direct-sum consequence of (12.13); Stacks §10.9. |
| `thm-localisation-of-modules-is-exact` | `thm` | Localising an exact sequence of modules gives an exact sequence over the localised ring. | L/A; Altman--Kleiman Thm. 12.20; Milne Prop. 5.11. |
| `thm-localisation-of-hom-for-finitely-presented-modules` | `thm` | The natural map (S^{-1}\operatorname{Hom}_R(M,N)\to\operatorname{Hom}_{S^{-1}R}(S^{-1}M,S^{-1}N)) is injective for finite (M) and is an isomorphism for finitely presented (M). | L/A; Altman--Kleiman Prop. 12.25; Stacks Lemma 10.10.2. |
| `lem-zero-in-a-localised-module` | `lem` | A module element becomes zero after localisation iff some element of the multiplicative set annihilates it. | L/A; Altman--Kleiman (12.2); Stacks §10.9. |
| `thm-local-criterion-for-zero-modules-and-maps` | `thm` | A module is zero iff every prime (equivalently maximal) localisation is zero; a map is injective, surjective, or an isomorphism iff all its prime localisations are so. | L/A; Altman--Kleiman (13.35), Prop. 13.43; Milne Props. 5.14--5.17. |
| `thm-local-criterion-for-exactness-of-modules` | `thm` | A sequence of modules is exact iff its localisation at every prime ideal is exact, equivalently at every maximal ideal. | L/A; Altman--Kleiman Prop. 13.43; Milne Prop. 5.16; Stacks §10.39. |
| `def-support-of-a-module` | `def` | \(\operatorname{Supp}_R(M)=\{\mathfrak p\in\operatorname{Spec}R:M_{\mathfrak p}\ne0\}\); until CA-3, `Spec` is read simply as the set of prime ideals. | L/NA; Altman--Kleiman (13.26); Stacks Def. 10.40.1. |
| `thm-support-and-annihilator-of-a-finite-module` | `thm` | For a finite module, support is the set of prime ideals containing its annihilator. | L/A; Altman--Kleiman (13.27); Stacks Lemma 10.40.5. |
| `thm-support-in-a-short-exact-sequence` | `thm` | In a short exact sequence, the support of the middle module is the union of the supports of the outer modules. | L/A; Altman--Kleiman (13.29); Stacks §10.40. |
| `thm-support-of-a-tensor-product-of-finite-modules` | `thm` | For finite modules (M,N), (\operatorname{Supp}(M\otimes_RN)=\operatorname{Supp}(M)\cap\operatorname{Supp}(N)). | L/A; Altman--Kleiman Prop. 13.30; Stacks Lemma 10.40.9. |
| `thm-support-under-localisation` | `thm` | Under the prime correspondence for a localised ring, support of the localised module is support of the original module restricted to primes disjoint from the multiplicative set. | L/A; Altman--Kleiman Ex. 13.32, citing the published prime-localisation correspondence; Stacks §10.40. |
| `def-jacobson-radical-of-a-ring` | `def` | The Jacobson radical (J(R)) is the intersection of all maximal ideals, with the empty intersection convention making (J(0)=0). | L/NA; Altman--Kleiman (10.11); Stacks §10.19. |
| `thm-jacobson-radical-unit-characterisation` | `thm` | (x\in J(R)) iff (1-rx) is a unit for every (r\in R). | L/A; Altman--Kleiman (10.11); Stacks Lemma 10.19.1. |
| `thm-nakayama-lemma` | `thm` | If M is finitely generated and an ideal in the Jacobson radical satisfies IM=M, then M=0. | L/A; Altman--Kleiman (10.12); Milne Lemma 3.9, using the inherited determinant trick. |
| `cor-nakayama-generators-modulo-an-ideal` | `cor` | If I lies in the Jacobson radical and given elements generate M/IM for finite M, then they generate M. | L/A; Milne Lemma 3.9(b); Stacks Lemma 10.20.1. |
| `cor-minimal-generators-over-a-local-ring` | `cor` | For a local ring and finite module, a finite generating set is minimal exactly when its residue classes form a basis modulo the maximal ideal; hence its cardinality is intrinsic. | L/A; Altman--Kleiman Ex. 13.44; Stacks §10.20. |
| `cor-finite-module-locally-zero-near-a-prime` | `cor` | If a finite module vanishes at a prime, it vanishes after localisation at some element outside that prime. | L/A; Altman--Kleiman Prop. 13.35; Milne Prop. 5.13; Stacks Lemma 10.40.4. |

#### Proof strategy and obligations

Construct module localisation from the ring localisation already present; do
not pretend (M\to S^{-1}M) is injective.  Exactness is proved elementwise by
clearing one denominator, then the local tests are applications to homology,
kernels and cokernels.  The support--annihilator equality uses finite
generators in the difficult direction so that finitely many annihilating
denominators can be multiplied.  Nakayama uses the determinant trick on a
finite generating set and the Jacobson unit characterisation; it is not proved
by choosing a minimal generating set, which would unnecessarily mix in a
finite minimisation argument.

**Well-definedness.** The relation is
\((m,s)\sim(n,t)\iff\exists u\in S, u(tm-sn)=0\); transitivity and both module
operations are explicit obligations.  The tensor comparison checks that
\((r/s,m)\mapsto rm/s\) is balanced and constructs its inverse
\(m/s\mapsto(1/s)\otimes m\).  Support is invariant under canonical
localisation isomorphisms and therefore depends only on (M), not a chosen
presentation.  The Hom map sends a localised morphism to its induced morphism
on localisations; finite presentation is used precisely to commute the kernel
of a finite free presentation with localisation.  Tensor support is checked
prime by prime, using Nakayama over the local ring to show that the tensor of
two nonzero finite modules is nonzero.  The dimension of (M/\mathfrak mM) in the final corollary is a
cardinal; the asserted finite number follows from finite generation.

**Choice strength.** The localisation construction, exactness, finite support
arguments and Nakayama are ZF.  The equivalence “all primes”/“all maximals” and
the unit characterisation cite maximal-ideal existence and thus inherit the
library's Zorn/Boolean-prime-ideal-theorem-strength flag.  No choice is hidden
in the finite multiplication of denominators.

#### B page

| id | kind | content | provenance and locator |
|---|---|---|---|
| `ex-localising-an-abelian-group-at-a-prime` | `ex` | Compute (\mathbb Z_{(p)}\otimes_{\mathbb Z}M) for finite cyclic groups and for \(\mathbb Q/\mathbb Z\). | L/A; Altman--Kleiman §12 examples. |
| `ex-module-localisation-map-not-injective` | `ex` | Invert an element that kills a nonzero module element and exhibit its zero fraction. | L/A; Stacks §10.9 examples. |
| `ex-support-of-a-cyclic-module` | `ex` | Compute \(\operatorname{Supp}(R/I)\) as the primes containing (I). | L/A; Altman--Kleiman Prop. 13.27. |
| `ex-support-of-a-direct-sum` | `ex` | Verify support of a direct sum is the union of supports, while contrasting products. | L/A; Stacks §10.40. |
| `ex-nakayama-finite-generation-is-essential` | `ex` | For a non-finitely-generated module, exhibit (\mathfrak mM=M\ne0). | L/A; Altman--Kleiman exercises after (10.12). |
| `ex-minimal-generators-local-ring` | `ex` | Find minimal generators of ideals in (k[x,y]_{(x,y)}) from (I/\mathfrak mI). | L/A; Altman--Kleiman Ex. 13.44. |
| `ex-local-test-for-an-isomorphism` | `ex` | Prove a concrete map of finitely generated modules is an isomorphism by checking prime localisations. | L/A; Altman--Kleiman Prop. 13.43. |
| `ex-localised-hom-needs-finite-presentation` | `ex` | Show why the localised-Hom map can fail to be an isomorphism without finite presentation of the source. | L/A; Altman--Kleiman Ex. 12.26. |
| `ex-localisation-does-not-commute-with-products` | `ex` | Exhibit failure of localisation to commute with an infinite product. | L/A; Altman--Kleiman Ex. 12.27. |

### CA-3. Prime spectra and radicals (algebraic low block)

- **A page id:** `prime-spectra-and-radicals`
- **B page id:** `prime-spectra-and-radicals-examples`
- **Requires:** CA-1, CA-2, `ideals-and-quotient-rings`, and
  `the-field-of-fractions-and-localisation`.
- **Ordering boundary:** this low page treats `Spec` only as the set of prime
  ideals and proves the algebraic V/D identities.  It does not use or re-mint
  topology.  CA-15 supplies the Zariski topology only after the published
  general-topology foundation.
- **Primary backing:** Altman--Kleiman selected §3 and §13;
  Milne §14, pp. 63--70, Prop. 14.1.  Independent check:
  Stacks §10.17, retaining only algebraic spectrum identities here.

#### A-page items, in dependency order

| id | kind | statement | provenance and locator |
|---|---|---|---|
| `def-radical-of-an-ideal` | `def` | \(\sqrt I=\{r\in R:r^n\in I\text{ for some }n\ge1\}\); an ideal is radical when (I=\sqrt I). | L/NA; Altman--Kleiman (3.1); Stacks §10.32. |
| `lem-radical-is-an-ideal` | `lem` | For commutative (R), \(\sqrt I\) is an ideal containing (I), and radical is idempotent and order-preserving. | L/A; Altman--Kleiman (3.2)--(3.4). |
| `def-nilradical-and-reduced-ring` | `def` | The nilradical is \(\sqrt{(0)}\); (R) is reduced iff this ideal is zero. | L/NA; Altman--Kleiman (3.5); Stacks §10.32. |
| `thm-radical-as-intersection-of-primes` | `thm` | \(\sqrt I\) is the intersection of all prime ideals containing (I). | L/A; Altman--Kleiman (3.10); Stacks §10.17. |
| `cor-nilradical-as-intersection-of-primes` | `cor` | The nilradical is the intersection of all prime ideals. | L/A; same locators with (I=0). |
| `def-prime-spectrum-and-vanishing-sets` | `def` | \(\operatorname{Spec}R\) is the set of prime ideals and (V(I)=\{\mathfrak p:I\subseteq\mathfrak p\}\). | L/NA; Milne §14; Stacks Def. 10.17.1. |
| `def-krull-dimension-of-a-ring` | `def` | The Krull dimension of a nonzero ring is the supremum of lengths of strict finite chains of prime ideals, valued in the natural numbers together with infinity; the zero-ring convention is stated separately. | L/NA; Milne Def. 3.14; Stacks Def. 10.60.3. CA-10 develops the dimension theorems. |
| `def-height-of-a-prime-ideal` | `def` | The height of a prime p is the dimension of R_p, equivalently the supremum of lengths of strict prime chains ending at p. | L/NA; Milne Def. 3.14; Stacks Def. 10.60.3. CA-10 develops its theorems. |
| `lem-vanishing-set-identities` | `lem` | (V(0)=\operatorname{Spec}R), (V(R)=\varnothing), arbitrary intersections correspond to sums of ideals, and finite unions correspond to products. | L/A; Milne Prop. 14.1; Stacks §10.17. |
| `lem-vanishing-sets-detect-radicals` | `lem` | Two ideals have the same containing prime ideals iff their radicals are equal. | L/A; Milne Prop. 14.1 together with `thm-radical-as-intersection-of-primes`. |
| `def-principal-distinguished-subset-of-spectrum` | `def` | Define D(f) as the prime ideals not containing f; then D(fg) is the intersection of D(f) and D(g), and D(f) is empty iff f is nilpotent. | L/NA; Milne Prop. 14.1; Stacks §10.17.  “Open” is deliberately not said here. |
| `thm-prime-spectrum-map-by-contraction` | `thm` | A ring map from R to A induces a contravariant contraction map from prime ideals of A to prime ideals of R, and the inverse image of V(I) is V(IA). | L/A; Milne §14; Stacks §10.17. |
| `thm-prime-spectrum-of-a-quotient-bijection` | `thm` | Contraction identifies prime ideals of R/I bijectively with the prime ideals of R containing I. | L/A; published ideal correspondence; Stacks §10.17. |
| `thm-prime-spectrum-of-a-localisation-bijection` | `thm` | Contraction identifies prime ideals of the localisation bijectively with prime ideals of R disjoint from the multiplicative set. | L/A; Altman--Kleiman (11.20); published prime-localisation correspondence. |
| `cor-prime-spectrum-insensitive-to-nilpotents` | `cor` | The reduction map induces a bijection from the primes of the reduced quotient to the primes of R, preserving inclusions and all V-subsets. | L/A; radical intersection theorem and quotient correspondence. |
| `thm-noetherian-ring-has-finitely-many-minimal-primes` | `thm` | A Noetherian ring has finitely many minimal prime ideals. | L/A; Altman--Kleiman (17.10); Stacks Lemma 10.31.6, with a direct Noetherian induction proof. |

#### Proof strategy and obligations

The radical-intersection theorem is proved in the quotient by I: if x is not
nilpotent, choose via Zorn an ideal maximal among those disjoint from the powers
of x, then prove it prime.  This makes the choice cost and the prime-ideal
construction visible.  Every V/D calculation on this page is an identity of
subsets of the set of prime ideals.  Finiteness of minimal primes uses CA-1
Noetherian induction and is the only result here that inherits its DC
annotation.

**Well-definedness.** The spectrum is a set of existing ideals, so no quotient
construction occurs in its definition.  The induced map is contravariant and
contraction is prime; the direction must not be reversed.  D(f) is only a
named subset at this stage.  No word whose definition belongs to general
topology—open, closed, continuous, quasi-compact, irreducible, component,
generic point, or T0—is used as mathematical content here.

**Choice strength.** Radical-as-intersection-of-primes and non-emptiness of the
spectrum of a nonzero ring use the maximal/prime ideal theorem (recorded as AC
at the library's granularity).  The V/D identities and quotient/localisation
bijections are ZF.  The final minimal-prime theorem inherits DC through
Noetherian induction; after a finite set of minimal primes is known, no further
choice is needed.

#### B page

| id | kind | content | provenance and locator |
|---|---|---|---|
| `ex-prime-sets-of-a-field-and-the-integers` | `ex` | Determine the prime ideals of a field and of the integers, ordered by inclusion. | L/A; Milne §14 examples. |
| `ex-prime-spectrum-set-of-a-product-ring` | `ex` | Prove that every prime of a product ring comes from exactly one factor. | L/A; Stacks §10.17. |
| `ex-prime-spectrum-set-of-dual-numbers` | `ex` | Compare the prime sets and V-subsets of the dual numbers and their reduced quotient. | L/A; Stacks §10.27, used algebraically. |
| `ex-prime-ideals-of-a-node` | `ex` | Determine minimal and maximal primes for the coordinate ring of a node. | L/A; Milne §14. |
| `ex-distinguished-subset-and-localisation-primes` | `ex` | Match D(x) in a two-variable polynomial ring with primes of the localisation at x. | L/A; Milne §14 and the published localisation theorem. |
| `ex-radical-intersection-computation` | `ex` | Compute \(\sqrt{(x^2,xy)}\) and its containing primes. | L/A; direct application of Altman--Kleiman (3.1)--(3.4), (3.10). |

### CA-4. Artinian rings and finite length

- **A page id:** `artinian-rings-and-length`
- **B page id:** `artinian-rings-and-length-examples`
- **Requires:** CA-1--CA-3 and the Artinian-module, Artinian-ring,
  composition-series and module-length items planned on
  `chain-conditions-and-semisimple-modules`.
- **Primary backing:** Altman--Kleiman §19, pp. 118--120; Milne §16,
  pp. 75--77, Props. 16.1--16.8; CRing Project Ch. 5 §4.  Independent check:
  Stacks §§10.52--10.53.

#### A-page items, in dependency order

| id | kind | statement | provenance and locator |
|---|---|---|---|
| `thm-length-is-additive-in-short-exact-sequences` | `thm` | For a short exact sequence, one module has finite length iff the other two do, and then lengths add. | L/A; Altman--Kleiman (19.5); Stacks Lemma 10.52.3. |
| `thm-finite-length-module-characterisation` | `thm` | A module has finite length iff it is both Noetherian and Artinian. | L/A; Altman--Kleiman (19.6); Stacks Lemma 10.52.4; cite the sibling composition-series theorem rather than reprove Jordan--Hölder. |
| `thm-artinian-ring-primes-are-maximal` | `thm` | Every prime ideal of an Artinian ring is maximal. | L/A; Milne Prop. 16.1; Stacks Lemma 10.53.1. |
| `lem-artinian-domain-is-a-field` | `lem` | Every Artinian integral domain is a field. | L/A; Milne proof of Prop. 16.1. |
| `thm-artinian-ring-has-finitely-many-maximal-ideals` | `thm` | An Artinian ring has only finitely many maximal ideals. | L/A; Milne Prop. 16.3; Stacks §10.53. |
| `thm-nilradical-of-artinian-ring-is-nilpotent` | `thm` | The nilradical of an Artinian ring is a nilpotent ideal. | L/A; Milne Prop. 16.4; Stacks Lemma 10.53.4. |
| `thm-artinian-ring-is-noetherian` | `thm` | Every commutative Artinian ring is Noetherian. | L/A; Milne Thm. 16.6; Stacks Lemma 10.53.5. |
| `thm-artinian-ring-has-finite-length` | `thm` | A commutative ring is Artinian iff it has finite length as a module over itself. | L/A; Altman--Kleiman (19.6); Stacks Lemmas 10.52.4 and 10.53.5. |
| `thm-artinian-local-ring-has-nilpotent-maximal-ideal` | `thm` | In an Artinian local ring, the maximal ideal is nilpotent and every finite module has finite length. | L/A; Milne §16; Stacks §10.53. |
| `thm-chinese-remainder-theorem-for-comaximal-ideals` | `thm` | For finitely many pairwise comaximal ideals, the canonical map from R modulo their intersection to the product of the quotient rings is an isomorphism, and their intersection equals their product. | L/A; Altman--Kleiman (1.14)--(1.16); Stacks Lemma 10.15.4. |
| `thm-structure-theorem-for-artinian-rings` | `thm` | Every Artinian ring is canonically the finite product of its localisations at its maximal ideals; for a sufficiently large common exponent, Chinese remainder also presents these factors as quotients by powers of the maximal ideals. | L/A; Milne Thm. 16.7; Stacks Lemma 10.53.6. |
| `cor-prime-set-of-an-artinian-ring` | `cor` | The prime ideals of an Artinian ring form a finite set and are exactly its maximal ideals. | L/A; Milne §16; Stacks §10.53.  The discrete-topology consequence waits for CA-15. |
| `thm-artinian-ring-characterisation-by-primes` | `thm` | A Noetherian ring is Artinian iff every prime ideal is maximal. | L/A; Milne Thm. 16.6; Stacks §10.53. |
| `cor-artinian-quotients-and-localisations` | `cor` | Quotients and localisations of an Artinian ring are Artinian; localising selects a subproduct of its local factors. | L/A; Milne §16; Stacks §10.53. |

#### Proof strategy and obligations

The implication Artinian \(\Rightarrow\) Noetherian is not imported from the
false module statement.  Build the commutative-ring proof: show all primes are
maximal, finitely many maximal ideals exist, the nilradical is nilpotent, and
use the finite filtration by its powers whose factors are finite-dimensional
over a finite product of fields.  The product decomposition first chooses a
common power of the finitely many maximal ideals whose product is zero, then
uses pairwise comaximality and the ring-ideal Chinese remainder theorem built on
this page.  That theorem checks representative independence, identifies the
kernel, proves the two-ideal surjectivity formula, and then inducts on the finite
family.  The
converse criterion uses CA-3's finite minimal-prime theorem plus induction on a
nilpotent radical filtration.

**Well-definedness.** Length is inherited from the sibling module page and is
independent of a chosen composition series by its Jordan--Hölder theorem.  The
canonical product map is the map to all maximal localisations; the optional
quotient-by-powers presentation depends on a sufficiently large exponent and
is not called canonical.  Chinese remainder supplies its inverse independently
of chosen Bézout coefficients.

**Choice strength.** The equivalence between DCC and the minimum condition and
the recursive extraction of a strictly descending chain use DC; any CA-4 proof
that invokes those forms inherits that flag.  The proof that a nonzero quotient
has a prime/maximal ideal inherits the library's maximal-ideal theorem (AC at
the stated granularity).  Once the finite maximal-ideal set and a nilpotence
exponent are in hand, the Chinese-remainder and finite-filtration calculations
are ZF.

#### B page

| id | kind | content | provenance and locator |
|---|---|---|---|
| `ex-artinian-truncated-polynomial-ring` | `ex` | Compute the ideals, length and nilpotent maximal ideal of (k[x]/(x^n)). | L/A; Milne §16 examples. |
| `ex-artinian-product-of-local-rings` | `ex` | Decompose \(\mathbb Z/12\mathbb Z\) into its local factors and read off its spectrum. | L/A; Milne Thm. 16.7. |
| `ex-field-is-artinian` | `ex` | A field has length one as a module over itself. | L/A; Altman--Kleiman §19. |
| `ex-noetherian-not-artinian` | `ex` | \(\mathbb Z\) and (k[x]) are Noetherian but not Artinian. | L/A; Milne §§3,16. |
| `ex-artinian-module-not-noetherian` | `ex` | Revisit the sibling page's Prüfer-group example to show the ring theorem does not extend to arbitrary modules. | L/A; sibling scaffold §II.5.c. |
| `ex-length-of-a-truncated-local-module` | `ex` | Calculate lengths of (R/(x^i)) and verify additivity on the natural short exact sequences. | L/A; Stacks §10.52. |
| `ex-zero-dimensional-nonnoetherian-ring` | `ex` | Use an infinite product of fields to show “every prime maximal” needs Noetherianity in the Artinian criterion. | L/A; Stacks §10.53 examples. |

### CA-5. Associated primes and primary decomposition

- **A page id:** `associated-primes-and-primary-decomposition`
- **B page id:** `associated-primes-and-primary-decomposition-examples`
- **Requires:** CA-1--CA-4, especially localisation, support, radicals and
  finiteness of minimal primes; the published annihilator, quotient-module and
  exact-sequence items.
- **Primary backing:** Altman--Kleiman §§17--18, pp. 108--117, associated
  primes (17.1)--(17.21), primary submodules (18.1)--(18.19), first uniqueness
  (18.20), Lasker--Noether (18.21), and second uniqueness (18.25); Milne §19,
  pp. 89--93, Props. 19.1--19.19.  Independent check: Stacks §§10.63--10.64.

#### A-page items, in dependency order

| id | kind | statement | provenance and locator |
|---|---|---|---|
| `def-associated-prime-of-a-module` | `def` | A prime \(\mathfrak p\) is associated to (M) when \(\mathfrak p=\operatorname{Ann}(m)\) for some (m\in M); write \(\operatorname{Ass}_R(M)\). | L/NA; Altman--Kleiman (17.1); Milne §19. |
| `lem-maximal-annihilator-is-prime` | `lem` | An annihilator maximal among annihilators of nonzero elements of a module is prime. | L/A; Altman--Kleiman (17.12); Milne Prop. 19.1. |
| `thm-existence-of-associated-primes` | `thm` | Every nonzero module over a Noetherian ring has an associated prime. | L/A; Altman--Kleiman (17.13); Milne Prop. 19.1. |
| `thm-associated-primes-in-a-short-exact-sequence` | `thm` | For a short exact sequence from M' through M to M'', the associated primes of M' are contained in those of M, which are contained in the union of the associated primes of M' and M''. | L/A; Stacks Lemma 10.63.3; Altman--Kleiman (17.5)--(17.7) for the finite Noetherian development. |
| `thm-associated-primes-localise` | `thm` | For finite (M) over Noetherian (R), \(\operatorname{Ass}_{S^{-1}R}(S^{-1}M)\) corresponds exactly to associated primes of (M) disjoint from (S). | L/A; Altman--Kleiman (17.15); Milne Prop. 19.4. |
| `thm-minimal-support-primes-are-associated` | `thm` | Every prime minimal in \(\operatorname{Supp}M\) belongs to \(\operatorname{Ass}M\) for finite (M) over Noetherian (R). | L/A; Altman--Kleiman (17.10); Stacks §10.63. |
| `thm-zero-divisors-on-a-module` | `thm` | For finite (M) over Noetherian (R), the set of zero divisors on (M) is the union of the finitely many associated primes of (M). | L/A; Altman--Kleiman (17.12); Milne Prop. 19.5. |
| `thm-finiteness-of-associated-primes` | `thm` | A finite module over a Noetherian ring has finitely many associated primes. | L/A; Altman--Kleiman (17.20)--(17.21); Milne Prop. 19.3. |
| `def-primary-submodule-and-primary-ideal` | `def` | A proper submodule Q is primary when every zero divisor on M/Q acts nilpotently on M/Q; a primary ideal is a primary submodule of R. | L/NA; Milne §19. Altman--Kleiman (18.1) instead uses singleton associated-prime support, and its equivalence is proved only for finite modules over Noetherian rings. |
| `thm-radical-of-a-primary-ideal-is-prime` | `thm` | If (Q\subsetneq R) is primary, then \(\sqrt Q\) is prime; (Q) is then \(\sqrt Q\)-primary. | L/A; Altman--Kleiman (18.3); Milne Prop. 19.6. |
| `thm-primary-submodule-characterisations` | `thm` | For finite (M) over Noetherian (R), (Q\subsetneq M) is \(\mathfrak p\)-primary iff \(\operatorname{Ass}(M/Q)=\{\mathfrak p\}\), equivalently every (r\notin\mathfrak p) acts injectively and some power of \(\mathfrak p\) kills (M/Q). | L/A; Altman--Kleiman (18.5)--(18.9); Milne Prop. 19.8. |
| `lem-intersection-of-primary-submodules-with-same-radical` | `lem` | A finite intersection of \(\mathfrak p\)-primary submodules is \(\mathfrak p\)-primary. | L/A; Altman--Kleiman (18.10); Milne Prop. 19.7. |
| `def-primary-decomposition-minimal-and-isolated-components` | `def` | A primary decomposition is a finite intersection of primary submodules; it is minimal when radicals are distinct and no component is redundant; components for primes minimal among the radicals are isolated. | L/NA; Altman--Kleiman (18.11)--(18.16); Milne §19. |
| `lem-noetherian-maximal-nondecomposable-submodule-is-primary` | `lem` | A submodule maximal among those admitting no finite primary decomposition is primary. | L/A; Altman--Kleiman proof of (18.21); Milne Thm. 19.11. |
| `thm-lasker-noether-primary-decomposition` | `thm` | Every submodule of a finite module over a Noetherian ring has a finite primary decomposition; in particular every ideal of a Noetherian ring does. | L/A; Altman--Kleiman (18.21); Milne Thm. 19.11. |
| `thm-first-uniqueness-theorem-primary-decomposition` | `thm` | In a minimal primary decomposition of (N\subseteq M), the set of radicals of the components is uniquely determined and equals \(\operatorname{Ass}(M/N)\). | L/A; Altman--Kleiman (18.20); Milne Thm. 19.10. |
| `thm-isolated-primary-components-are-unique` | `thm` | Each isolated primary component is uniquely recovered by localising at its prime and contracting. | L/A; Altman--Kleiman (18.19), (18.25); Milne Thm. 19.10. |
| `thm-second-uniqueness-theorem-primary-decomposition` | `thm` | Given a downward-closed subset of the associated primes, the intersection of the corresponding primary components is independent of a minimal decomposition. | L/A; Altman--Kleiman (18.25); Milne's isolated-component formulation in §19. |
| `cor-radical-ideals-as-intersections-of-minimal-primes-noetherian` | `cor` | Every radical ideal in a Noetherian ring is the finite intersection of its minimal prime ideals. | L/A; Lasker--Noether plus first uniqueness; Milne §19. |

#### Proof strategy and obligations

Associated-prime existence first makes the set of annihilators nonempty and
uses the Noetherian maximal condition; primality is a one-line annihilator
calculation that is kept separate.  The zero-divisor theorem is proved by
taking the annihilator of a killed element and placing it inside a maximal
annihilator.  Lasker--Noether uses Noetherian induction on submodules not having
a decomposition: if the maximal bad submodule is not primary, two strictly
larger colon/sum submodules produce it as their intersection.  The proof must
write that equality explicitly.  First uniqueness calculates associated
primes of an intersection; isolated uniqueness localises away from all larger
components and contracts.

**Well-definedness.** The action “nilpotent on (M/Q)” means one exponent may
depend on (r); finite generation is used when replacing elementwise
nilpotence of \(\mathfrak p\) by a uniform power.  Colons
\((Q:_M r)\) and \((Q:_R M)\) are typed separately.  Localisation/contraction
of a submodule uses the module-localisation equivalence relation proved in
CA-2.  Minimal decompositions are not claimed unique component-by-component:
embedded components may vary, and the theorem states exactly what is unique.

**Choice strength.** Existence, finiteness and Lasker--Noether use the inherited
Noetherian maximal condition/induction and therefore carry DC.  Finite prime
avoidance and all localisation calculations are ZF.  No theorem asserts a
simultaneous primary decomposition for a proper class or infinite family.

#### B page

| id | kind | content | provenance and locator |
|---|---|---|---|
| `ex-primary-decomposition-monomial-ideal` | `ex` | Compute a minimal primary decomposition of ((x^2,xy)\subset k[x,y]) and identify its embedded prime. | L/A; Altman--Kleiman §18 examples. |
| `ex-primary-ideals-in-the-integers` | `ex` | Classify primary ideals of \(\mathbb Z\) and recover ordinary prime-power factorisation. | L/A; Milne §19 examples. |
| `ex-primary-ideal-with-nonprime-zero-divisors` | `ex` | Test the primary condition in (k[x,y]/(x^2,xy,y^3)). | L/A; Altman--Kleiman §18 exercises. |
| `ex-associated-primes-of-a-cyclic-module` | `ex` | Determine \(\operatorname{Ass}(R/I)\) from an explicit primary decomposition. | L/A; Milne Thm. 19.10. |
| `ex-embedded-primary-component-not-unique` | `ex` | Exhibit two minimal decompositions with the same associated primes and isolated components but different embedded components. | L/A; Altman--Kleiman examples after (18.25). |
| `ex-associated-primes-under-localisation` | `ex` | Localise the monomial example at several primes and observe which components disappear. | L/A; Altman--Kleiman (17.15), (18.19). |
| `ex-zero-divisors-as-associated-primes` | `ex` | Verify the union theorem directly for a finite quotient of (k[x,y]). | L/A; Altman--Kleiman (17.12). |

### CA-6. Integral extensions and the Cohen--Seidenberg theorems

- **A page id:** `integral-extensions-and-going-up`
- **B page id:** `integral-extensions-and-going-up-examples`
- **Requires:** CA-1--CA-3; the planned abstract-algebra integral-element
  definition, determinant trick, and theorem that integral elements form a
  subring; the published field of fractions; and the planned Galois
  algebraic-closure page only for examples involving algebraic closures.
- **Primary backing:** Altman--Kleiman §10, (10.19)--(10.31), and §14,
  pp. 84--88, Krull--Cohen--Seidenberg (14.1)--(14.11); Milne §§6--7,
  pp. 24--32, Props. 6.1--6.16 and 7.1--7.12.  Independent check: Stacks
  §§10.36--10.38 and 10.41.

#### A-page items, in dependency order

| id | kind | statement | provenance and locator |
|---|---|---|---|
| `def-integral-ring-extension` | `def` | A ring map (A\to B) is integral when every element of (B) is integral over the image of (A). | L/NA; Altman--Kleiman (10.19); Milne §6. |
| `thm-integral-element-finite-module-characterisation` | `thm` | (b\in B) is integral over (A) iff (A[b]) is a finite (A)-module, iff (b) lies in an (A)-subalgebra of (B) finite as an (A)-module. | L/A; Altman--Kleiman (10.20); Milne Prop. 6.2, citing the sibling determinant trick. |
| `thm-finitely-generated-integral-algebra-is-module-finite` | `thm` | If (B=A[b_1,\ldots,b_n]) and every (b_i) is integral over (A), then (B) is finite as an (A)-module. | L/A; Altman--Kleiman (10.22); Milne Prop. 6.3. |
| `thm-transitivity-of-integrality` | `thm` | If (A\to B\to C) are integral, then (A\to C) is integral. | L/A; Altman--Kleiman (10.23); Milne Prop. 6.4, reducing each element to a finite subalgebra. |
| `def-integral-closure-and-integrally-closed-domain` | `def` | Define the integral closure of (A) in a containing ring (B); a domain is integrally closed when it equals its integral closure in its fraction field. | L/NA; Altman--Kleiman (10.24); Milne §6. |
| `thm-integral-closure-is-integrally-closed` | `thm` | The integral closure of a domain (A) in an algebraic field extension (L/K) is integrally closed in (L). | L/A; Milne Def. 6.6 and Prop. 6.4 (transitivity); Stacks §10.37. |
| `thm-integrality-commutes-with-localisation` | `thm` | Integrality is preserved by localisation; if C is the integral closure of A in B, its localisation is the integral closure of the localised A in the localised B. | L/A; Milne Prop. 6.14; Stacks Lemma 10.36.11 (Tag 0307). |
| `lem-field-integrality-criterion` | `lem` | If (B) is integral over (A), then (B) is a field iff (A) is a field when (A\subseteq B) are domains and the extension is integral. | L/A; Altman--Kleiman (14.1); Milne Prop. 7.1. |
| `thm-lying-over` | `thm` | For an integral map A to B, the image of contraction on prime spectra is exactly the primes containing the kernel; in particular it is surjective for an injective map. | L/A; Altman--Kleiman Thm. 14.3(3); Milne Thm. 7.6; Stacks §10.36. |
| `thm-incomparability-for-integral-extensions` | `thm` | Comparable primes of B with equal contractions under an integral map are equal. | L/A; Altman--Kleiman Thm. 14.3(2); Milne Prop. 7.4. |
| `thm-going-up` | `thm` | Under an integral map, a prime of B over the lower member of a prime chain in A extends to a prime of B over the upper member. | L/A; Altman--Kleiman Thm. 14.3(4); Milne Thm. 7.6. |
| `cor-dimension-preserved-by-integral-extensions` | `cor` | For an injective integral extension, the two rings have equal Krull dimension. | L/A; going up plus incomparability; Altman--Kleiman Thm. 14.3. |
| `lem-integrally-closed-minimal-polynomial-coefficients` | `lem` | If (A) is integrally closed with fraction field (K), the minimal polynomial over (K) of an element integral over (A) has coefficients in (A). | L/A; Altman--Kleiman Lem. 14.7 and Prop. 14.8; Milne Props. 6.11--6.13, using a finite splitting algebra rather than choosing a global algebraic closure. |
| `thm-normality-is-local-for-domains` | `thm` | A domain is integrally closed iff each localisation at a prime ideal is integrally closed, equivalently iff each localisation at a maximal ideal is. | L/A; Milne Cor. 6.15 and Prop. 6.16; Stacks Lemma 10.37.2. |
| `thm-going-down-over-normal-domains` | `thm` | If A is an integrally closed domain, B is a domain integral over A, and the induced fraction-field extension is algebraic, then going down holds. | L/A; Altman--Kleiman Thm. 14.9; Milne Thm. 7.11. |
| `cor-contraction-of-maximal-ideals-integral-extension` | `cor` | Under an integral extension, a prime of (B) is maximal iff its contraction is maximal. | L/A; field criterion and quotient integrality; Milne Cor. 7.3. |

#### Proof strategy and obligations

The finite-module characterisation and transitivity are the engine: for a
single element use the monic relation to span by (1,b,\ldots,b^{n-1}); for
the converse apply the determinant trick.  Lying over reduces modulo a prime,
localises to the fraction field of the base domain, and chooses a maximal ideal
of the nonzero integral algebra; contracting it is zero by the field criterion.
Going up applies lying over to (B/\mathfrak q_1) after localisation at the
upper prime.  Incomparability localises at the common contraction and uses the
field criterion.  Normality is local because an element of the fraction field
integral over every localisation lies in each localisation and membership in a
submodule is detected locally.  Going down follows the source proof via the integral closure
inside the common fraction-field situation; all normality and algebraicity
hypotheses remain visible.

**Well-definedness.** Integrality is relative to a specified structure map;
when the map is not injective, “coefficients in (A)” means coefficients after
mapping to (B).  Integral closure is a subring by the sibling theorem and is
not merely a set.  Quotient and localisation structure maps and contractions
are identified explicitly.  The fraction field exists only for domains.

**Choice strength.** Finite-module, polynomial and the finite-splitting-algebra
coefficient calculations are ZF.  Lying
over and going up use a maximal ideal in a localisation and inherit AC/Zorn.
The minimal-polynomial argument does not require a globally selected algebraic
closure.  Going down inherits lying over's maximal-ideal use but adds no new
choice principle.

#### B page

| id | kind | content | provenance and locator |
|---|---|---|---|
| `ex-integral-quadratic-extension` | `ex` | Analyse \(\mathbb Z\subseteq\mathbb Z[\sqrt d]\), including finite module generators and contracted primes. | L/A; Milne §§6--7 examples. |
| `ex-integral-element-not-algebraic-over-a-ring` | `ex` | Separate the ring-relative monic definition from field language with a quotient-ring example. | L/A; Altman--Kleiman §10 exercises. |
| `ex-nonintegral-localisation-extension` | `ex` | Show \(\mathbb Z\subseteq\mathbb Q\) is not integral and observe failure of maximal-ideal contraction. | L/A; Milne §7. |
| `ex-integral-closure-of-a-cusp-ring` | `ex` | Compute (k[t]) as the integral closure of (k[t^2,t^3]) in (k(t)). | L/A; Altman--Kleiman §14 examples. |
| `ex-going-up-prime-chains` | `ex` | Lift prime chains in a finite quadratic algebra. | L/A; Milne Thm. 7.6. |
| `ex-going-down-needs-normality` | `ex` | Use the cusp normalisation to display failure of the conclusion without an integrally closed base. | L/A; Altman--Kleiman §14 exercises. |
| `ex-integrality-and-dimension` | `ex` | Compare dimensions of (k[t^2,t^3]) and (k[t]) by the chain theorems. | L/A; Altman--Kleiman Thm. 14.3. |

### CA-7. Noether normalisation and Hilbert's Nullstellensatz

- **A page id:** `noether-normalisation-and-nullstellensatz`
- **B page id:** `noether-normalisation-and-nullstellensatz-examples`
- **Requires:** CA-1, CA-3, CA-6; multivariable polynomial rings; and
  `algebraic-closure-embeddings-and-separability` for the point form over an
  algebraically closed field.
- **Primary backing:** Altman--Kleiman §15, pp. 88--103, Noether
  normalisation (15.1), Zariski's lemma (15.4), Nullstellensatz
  (15.5)--(15.8), and Jacobson results (15.20)--(15.26); Milne §8,
  pp. 34--35, and §13, pp. 59--63, Zariski lemma
  13.1, Nullstellensatz 13.8 and strong form 13.10.  Independent check: Stacks
  §§10.34--10.35 and §10.115.

#### A-page items, in dependency order

| id | kind | statement | provenance and locator |
|---|---|---|---|
| `def-algebraic-independence-and-transcendence-basis` | `def` | Define algebraic independence by injectivity of polynomial evaluation, and a transcendence basis as a maximal algebraically independent subset, equivalently an independent subset over which the extension is algebraic. | L/NA; Milne §8; CRing Project Ch. 8 §1. |
| `thm-existence-and-cardinality-of-transcendence-bases` | `thm` | Every field extension has a transcendence basis, and any two transcendence bases have the same cardinality. | L/A; Milne §8 preliminaries; CRing Project Ch. 8 §1, using Zorn and exchange. |
| `def-transcendence-degree` | `def` | Define the transcendence degree of a field extension as the common cardinality of its transcendence bases, licensed by the preceding theorem. | L/NA; Milne §8; CRing Project Ch. 8 §1. |
| `lem-noether-normalisation-change-of-variables` | `lem` | Over an infinite field, a nonzero polynomial becomes monic in one variable after a triangular linear change; over a finite field, a sufficiently separated power substitution achieves the needed monicity. | L/A; Altman--Kleiman proof of (15.1); Milne §8. |
| `thm-noether-normalisation` | `thm` | Every nonzero finitely generated k-algebra is finite over a polynomial k-subalgebra generated by algebraically independent elements. | L/A; Altman--Kleiman (15.1); Milne Thm. 8.1; Stacks §10.115. |
| `cor-affine-domain-finite-over-polynomial-subring` | `cor` | For a finite-type (k)-domain (A), the normalising subalgebra is a polynomial ring and (d=\operatorname{trdeg}_k\operatorname{Frac}(A)). | L/A; Altman--Kleiman Lem. 15.1; Milne Thm. 8.1 and §18. |
| `thm-zariski-lemma` | `thm` | A field finitely generated as a k-algebra is a finite algebraic extension of k. | L/A; Altman--Kleiman (15.4); Milne Thm. 13.1. |
| `thm-weak-nullstellensatz` | `thm` | Every maximal ideal of a finite polynomial ring over k has residue field finite algebraic over k; over algebraically closed k it is the evaluation ideal of a unique point. | L/A; Altman--Kleiman Cor. 15.5; Milne Thm. 13.8. |
| `def-affine-zero-locus-and-vanishing-ideal` | `def` | Define the common zero locus of polynomials and the ideal of polynomials vanishing on a set of affine points, and verify both operations reverse inclusion. | L/NA; Altman--Kleiman Ex. 15.8; Milne §13. |
| `lem-rabinowitsch-trick` | `lem` | Adjoining t and the equation 1-tf converts nonvanishing of f on a zero locus into emptiness of a zero locus. | L/A; Altman--Kleiman Ex. 15.8; Milne Thm. 13.10. |
| `thm-strong-nullstellensatz` | `thm` | Over an algebraically closed field, the vanishing ideal of the zero locus of I is the radical of I. | L/A; Altman--Kleiman Thm. 15.7 and Ex. 15.8; Milne Thm. 13.10. |
| `thm-affine-algebra-nullstellensatz` | `thm` | In every finite-type algebra over a field, the radical of an ideal is the intersection of all maximal ideals containing it. | L/A; Milne Prop. 13.11; Altman--Kleiman Thm. 15.26. |
| `cor-affine-algebra-radical-ideal-variety-correspondence` | `cor` | Radical ideals of (k[x_1,\ldots,x_n]) correspond order-reversingly to affine algebraic sets over algebraically closed (k). | L/A; strong Nullstellensatz and the Galois connection. |
| `cor-maximal-ideals-of-affine-algebras` | `cor` | For a finite-type k-algebra A, every residue field at a maximal ideal is finite over k; over algebraically closed k, maximal ideals correspond to k-algebra maps from A to k. | L/A; Milne Cors. 13.2 and 13.9. |
| `def-jacobson-ring` | `def` | A ring is Jacobson when every prime ideal is the intersection of maximal ideals containing it. | L/NA; Altman--Kleiman (15.20); Stacks §10.35. |
| `thm-finite-type-algebras-over-jacobson-rings` | `thm` | A finite-type algebra over a Jacobson ring is Jacobson, and contraction sends maximal ideals to maximal ideals when the algebra is of finite type. | L/A; Altman--Kleiman Thm. 15.26; Stacks Thm. 10.35.11. |
| `cor-finite-type-algebras-over-fields-are-jacobson` | `cor` | Every finite-type algebra over a field is Jacobson. | L/A; previous theorem; Altman--Kleiman Thm. 15.26. |
| `cor-affine-radical-as-maximal-ideal-intersection` | `cor` | In a finite-type algebra over a field, every radical ideal is the intersection of the maximal ideals containing it. | L/A; Jacobson definition and `thm-affine-algebra-nullstellensatz`; Altman--Kleiman Thm. 15.26. |

#### Proof strategy and obligations

Noether normalisation proceeds by induction on a finite generating set and
transcendence degree.  A polynomial relation among generators is made monic in
one chosen generator, making that generator integral over the subalgebra
generated by the transformed others; CA-6's transitivity and finite-generation
criterion finish the induction.  The finite-field substitution is stated
separately so the proof does not silently assume the base field infinite.
Zariski's lemma follows either from normalisation plus the field integrality
criterion or by the standard inverses-of-infinitely-many-polynomials argument;
use the normalisation route already built.  Strong Nullstellensatz isolates the
Rabinowitsch quotient and invokes weak Nullstellensatz on it.

**Well-definedness.** Algebraic independence is defined via injectivity of the
evaluation map from the polynomial ring.  Coordinate changes are explicit
automorphisms and their inverses are checked.  In (I(Z(I))), evaluation is
the published polynomial evaluation and (Z(I)) depends only on the ideal,
not a chosen generating set.  The point-to-maximal-ideal correspondence checks
that quotient evaluation is (k), and uniqueness is coordinatewise.

**Choice strength.** Existence of a transcendence basis and its exchange-based
cardinality theorem use AC/Zorn (finite-type applications need only the finite
case after a generating set is fixed).  For a given finite presentation, the
normalisation induction and Rabinowitsch trick are ZF.  Weak Nullstellensatz via maximal ideals
inherits the library's maximal-ideal theorem (AC).  The algebraically closed
point form cites the Galois block's algebraic closure/convention but does not
choose an algebraic closure afresh.  The finite-field power substitution uses
an explicit sufficiently large integer, not a choice function.

#### B page

| id | kind | content | provenance and locator |
|---|---|---|---|
| `ex-noether-normalisation-of-a-cusp` | `ex` | Normalise (k[x,y]/(y^2-x^3)) over a polynomial subring and distinguish this from integral closure. | L/A; Altman--Kleiman Ex. 15.3. |
| `ex-noether-normalisation-finite-field-substitution` | `ex` | Work one polynomial through the separated-power change used over a finite field. | L/A; Altman--Kleiman Ex. 15.2 and Lem. 15.1. |
| `ex-maximal-ideals-over-a-nonalgebraically-closed-field` | `ex` | Compare maximal ideals of \(\mathbb R[x]\) with real points and irreducible quadratics. | L/A; Milne §13. |
| `ex-nullstellensatz-circle-and-empty-locus` | `ex` | Compute vanishing ideals for a circle over \(\mathbb R\) and over \(\mathbb C\), making the field hypothesis visible. | L/A; Milne §13 examples. |
| `ex-rabinowitsch-trick-computation` | `ex` | Derive a power membership (f^N\in I) from an explicit identity in (k[x_1,\ldots,x_n,t]). | L/A; Altman--Kleiman Ex. 15.8. |
| `ex-radical-ideal-affine-set-correspondence` | `ex` | Compare ((x)) and ((x^2)), whose zero loci agree, and recover the radical. | L/A; Milne Thm. 13.10. |
| `ex-affine-radical-maximal-intersection` | `ex` | Verify directly in a one-variable polynomial ring that radical ideals are intersections of containing maximal ideals, and contrast a non-Jacobson local ring. | L/A; Altman--Kleiman Exs. 15.27 and 15.30. |

### CA-8. Valuation rings and discrete valuation rings

- **A page id:** `valuation-rings-and-discrete-valuation-rings`
- **B page id:** `valuation-rings-and-discrete-valuation-rings-examples`
- **Requires:** CA-1--CA-3 and CA-6; the published fraction-field,
  localisation, PID and UFD definitions.
- **Primary backing:** Mustaţă §8.1, 8.1--8.13; selected Altman--Kleiman §23
  DVR results; Milne §20, pp. 93--99, especially Prop. 20.2.  Independent
  check: Stacks §§10.50 and 10.119.

#### A-page items, in dependency order

| id | kind | statement | provenance and locator |
|---|---|---|---|
| `def-totally-ordered-abelian-group` | `def` | A totally ordered abelian group is an abelian group with a total order invariant under translation. | L/NA; Mustaţă Def. 8.1; Stacks §10.50. |
| `def-valuation-on-a-field` | `def` | A valuation is a map (v:K\to\Gamma\cup\{\infty\}) with the exact-zero, multiplicative and ultrametric laws, using the stated ordered-monoid rules for infinity. | L/NA; Mustaţă Def. 8.1 and Rem. 8.2; Stacks §10.50. |
| `def-valuation-ring` | `def` | A valuation ring of a field (K) is a subring (V\subseteq K) such that for every (x\in K^\times), either (x\in V) or (x^{-1}\in V). | L/NA; Mustaţă Def. 8.4; Stacks §10.50. |
| `lem-valuation-ring-is-local` | `lem` | The nonunits of a valuation ring form its unique maximal ideal. | L/A; Mustaţă Rem. 8.5; Stacks Lemma 10.50.2. |
| `thm-valuation-ring-characterisations` | `thm` | For a subring of a field, the fraction-comparability condition, linear ordering of ideals and divisibility comparability are equivalent; every finitely generated ideal is principal. | L/A; Mustaţă Props. 8.3--8.6; Stacks Lemmas 10.50.3--10.50.4. |
| `def-value-group-of-a-valuation-ring` | `def` | The value group of (V\subseteq K) is (K^\times/V^\times) with its divisibility order. | L/NA; Mustaţă Prop. 8.6; Stacks §10.50. |
| `thm-every-valuation-ring-arises-from-its-value-group` | `thm` | The quotient order is well defined, total and translation-invariant; its quotient valuation has valuation ring exactly (V). | L/A; Mustaţă Prop. 8.6; Stacks §10.50. |
| `thm-valuation-ring-is-integrally-closed` | `thm` | Every valuation ring is integrally closed in its fraction field. | L/A; Stacks Lemma 10.50.4; Mustaţă §8.1, by the valuation inequality. |
| `def-discrete-valuation` | `def` | A discrete valuation is a valuation whose value group is identified with (\mathbb Z), normalised to be surjective. | L/NA; Mustaţă Def. 8.7; Stacks §10.119. |
| `def-discrete-valuation-ring` | `def` | A DVR is the valuation ring of a discrete valuation; fields are excluded. | L/NA; Mustaţă Def. 8.8; Altman--Kleiman (23.1)--(23.3). |
| `def-uniformising-parameter` | `def` | A uniformiser is an element of value one, equivalently a generator of the nonzero maximal ideal. | L/NA; Mustaţă Rem. 8.9; Altman--Kleiman §23. |
| `thm-dvr-element-normal-form` | `thm` | Every nonzero fraction has a unique expression (u\pi^n) with (u) a unit and (n\in\mathbb Z). | L/A; Altman--Kleiman (23.1); Stacks Lemma 10.119.7. |
| `thm-ideals-in-a-dvr` | `thm` | Every nonzero ideal is a unique power of the maximal ideal, and divisibility is measured by valuation. | L/A; Altman--Kleiman (23.1); Milne Prop. 20.2. |
| `cor-prime-ideals-and-dimension-of-a-dvr` | `cor` | The only prime ideals are zero and the maximal ideal, so a DVR has dimension one. | L/A; Mustaţă Rem. 8.9; Stacks Lemma 10.119.7. |
| `thm-equivalent-characterisations-of-a-dvr` | `thm` | For a nonfield domain (R), the following are equivalent: (R) is a DVR; (R) is a Noetherian valuation ring; (R) is a one-dimensional Noetherian local integrally closed domain; and (R) is a local PID with nonzero maximal ideal. | L/A; Altman--Kleiman Thm. 23.10; Mustaţă Prop. 8.7; Stacks Lemma 10.119.7. |
| `thm-noetherian-valuation-ring-characterisation` | `thm` | A valuation ring is Noetherian iff it is a field or a DVR. | L/A; Mustaţă Prop. 8.13; Stacks Lemma 10.50.18. |
| `thm-dvr-ideal-and-module-length` | `thm` | The length of R/(\pi^n) is n, and for every nonzero x the valuation equals the length of R/(x). | L/A; Milne Prop. 20.2 and the displayed power filtration; Stacks §10.119. |
| `thm-height-one-localisation-of-normal-noetherian-domain-is-dvr` | `thm` | If R is a Noetherian integrally closed domain and p is a height-one prime, then R_p is a DVR. | L/A; Altman--Kleiman Thm. 23.10 together with localisation of normality; Milne Prop. 20.2; the height-one hypothesis uses CA-3's chain definition and is revisited after CA-10. |
| `cor-dvr-is-a-pid` | `cor` | Every DVR is a PID. | L/A; Milne Prop. 20.2; the UFD consequence waits for the owed abstract-algebra enrichment. |

#### Proof strategy and obligations

From the element-comparability definition, identify the nonunits as an ideal to
obtain the unique maximal ideal, and prove ideal comparability elementwise.
Integral closedness divides a monic equation by the lowest-valued coefficient.
The DVR equivalences are decomposed: a least positive value produces a
uniformiser; Noetherianity forces that least value; the uniformiser factors all
elements and ideals; and the one-dimensional normal local criterion uses a
minimal number of generators of the maximal ideal plus the determinant trick.

**Well-definedness.** The order on (K^\times/V^\times) is independent of
representatives, antisymmetric, total and translation-invariant; extending a
valuation by infinity obeys the explicitly fixed ordered-monoid laws.  The value of a fraction is independent of its
presentation because the domain embeds in its field of fractions.  The unit u
and exponent n in the DVR factorisation are proved unique.  A “uniformiser” is
a generator of the maximal ideal and is unique only up to a unit; no canonical
choice is asserted.  Length is the CA-4 invariant and not dependent on the
displayed filtration.

**Choice strength.** The valuation-ring and DVR equivalences and all
integer-valued calculations are ZF.  Choosing one uniformiser from a known principal nonzero ideal is
a single existential instantiation, not a choice scheme.

#### B page

| id | kind | content | provenance and locator |
|---|---|---|---|
| `ex-p-adic-dvr` | `ex` | Compute the valuation, units and ideals of the localisation of the integers at (p). | L/A; Altman--Kleiman §23 examples. |
| `ex-localisation-of-a-pid-at-a-prime` | `ex` | Prove directly that localising a PID at a nonzero prime gives a DVR. | L/A; Mustaţă Ex. 8.10. |
| `ex-plane-curve-local-ring-not-dvr` | `ex` | Show the local ring of a singular cusp fails the normal/DVR criterion. | L/A; application of Mustaţă Prop. 8.7 to the standard cusp ring from CA-6B. |
| `ex-rank-two-valuation-ring-not-dvr` | `ex` | Use lexicographically ordered integer pairs to construct a valuation ring that is not Noetherian. | L/A; Stacks §10.50 examples. |
| `ex-nondiscrete-ordered-subgroup-valuation` | `ex` | Use the subgroup generated by (1) and an irrational number to exhibit a nondiscrete rank-one valuation. | L/A; Mustaţă Exs. 8.11--8.12. |
| `ex-dvr-length-computation` | `ex` | Calculate a filtration and length of R/(\pi^n). | L/A; Milne Prop. 20.2. |
| `ex-uniformisers-and-dvr-ideal-arithmetic` | `ex` | Show uniformisers differ by units and compute sums and intersections of powers of the maximal ideal. | L/A; Mustaţă Rem. 8.9. |
| `ex-valuation-ring-ideals-linearly-ordered` | `ex` | Compare principal ideals through their values and exhibit a nonprincipal ideal in a nondiscrete valuation ring. | L/A; Stacks §10.50 examples. |

### CA-9. Dedekind domains, fractional ideals, and ideal classes

- **A page id:** `dedekind-domains-and-ideal-classes`
- **B page id:** `dedekind-domains-and-ideal-classes-examples`
- **Requires:** CA-1--CA-3, CA-6 and CA-8; the published fraction field,
  ideals, projective modules, PID and UFD definitions, and the planned
  tensor-product page.
- **Primary backing:** Altman--Kleiman §§24--25, pp. 153--161, Dedekind
  domains (24.1)--(24.21) and fractional ideals (25.1)--(25.22); Milne §20,
  pp. 93--99, Props. 20.1--20.16.  Independent check: Stacks §§10.120 and
  15.22; CRing Project Ch. 9 §3.

#### A-page items, in dependency order

| id | kind | statement | provenance and locator |
|---|---|---|---|
| `def-dedekind-domain` | `def` | A Dedekind domain is a Noetherian integrally closed domain of Krull dimension one. | L/NA; Altman--Kleiman (24.1); Milne §20. |
| `thm-local-characterisation-of-dedekind-domains` | `thm` | A nonfield Noetherian domain is Dedekind iff every localisation at a nonzero prime is a DVR; equivalently every nonzero proper ideal is locally principal. | L/A; Mustaţă Prop. 8.46; Milne Props. 20.2--20.5. |
| `thm-localisation-of-a-dedekind-domain` | `thm` | A localisation of a Dedekind domain is either a Dedekind domain or a field, according as a nonzero prime remains. | L/A; Milne Props. 20.4--20.5; Mustaţă Prop. 8.46. |
| `lem-trace-pairing-for-a-finite-separable-extension` | `lem` | The trace pairing of a finite separable field extension is nondegenerate. | L/A; Mustaţă proof of Thm. 8.47; Stacks §9.20. |
| `thm-finite-integral-closure-in-a-finite-separable-extension` | `thm` | If (R) is a normal Noetherian domain and (L/\operatorname{Frac}(R)) is finite separable, then the integral closure of (R) in (L) is finite over (R). | L/A; Mustaţă Thm. 8.47; Stacks Lemma 10.161.8, using the trace-dual lattice. |
| `cor-integral-closure-of-a-dedekind-domain-in-a-finite-separable-extension` | `cor` | The integral closure of a Dedekind domain in a finite separable field extension is Dedekind. | L/A; Mustaţă Thm. 8.47; Milne §20. |
| `def-fractional-ideal` | `def` | A fractional ideal is a nonzero (R)-submodule of the fraction field bounded by one nonzero denominator; over a Noetherian domain this is equivalent to finite generation. | L/NA; Mustaţă Def. 8.51 and Rem. 8.52; Altman--Kleiman §25, with the bounded convention stated. |
| `def-product-and-colon-of-fractional-ideals` | `def` | Define the product as finite sums of elementwise products and define ((I:J)=\{x:xJ\subseteq I\}); set (I^{-1}=(R:I)) only as an inverse candidate. | L/NA; Mustaţă Defs. 8.53 and 8.56; Altman--Kleiman (25.1)--(25.6). |
| `lem-fractional-ideal-operations-well-defined` | `lem` | Sum, product, colon and scaling are bounded fractional ideals under their stated nonzero hypotheses and do not depend on a common denominator or generating set. | L/A; Mustaţă Lemmas 8.54--8.55; Altman--Kleiman (25.2)--(25.6). |
| `def-invertible-fractional-ideal` | `def` | A fractional ideal (I) is invertible when (I(R:I)=R). | L/NA; Mustaţă Def. 8.53; Altman--Kleiman §25. |
| `thm-invertible-ideal-characterisations` | `thm` | A nonzero fractional ideal is invertible iff it is finite locally free of rank one, equivalently its localisations at maximal ideals are principal. | L/A; Mustaţă Lemmas 8.59--8.60; Stacks §15.22. |
| `thm-nonzero-ideals-in-dedekind-domains-are-invertible` | `thm` | Every nonzero fractional ideal of a Dedekind domain is invertible. | L/A; Mustaţă Thm. 8.61; Milne Thm. 20.7. |
| `def-prime-ideal-valuations-on-fractional-ideals` | `def` | For a nonzero prime p of a Dedekind domain, define v_p(I) using the exponent of pR_p in the DVR-localisation of I. | L/NA; Altman--Kleiman §25; Milne proof of Thm. 20.7. |
| `lem-finite-support-of-ideal-valuations` | `lem` | For a nonzero fractional ideal I, v_p(I) is zero for all but finitely many nonzero prime ideals and is additive under products. | L/A; Altman--Kleiman Thm. 25.14; Milne Thm. 20.7. |
| `thm-unique-factorisation-of-ideals-in-dedekind-domains` | `thm` | Every nonzero fractional ideal has a unique expression as a finite product of nonzero prime ideals with integer exponents; integral ideals have nonnegative exponents. | L/A; Altman--Kleiman Thm. 24.10; Milne Thm. 20.7. |
| `cor-ideal-divisibility-reverses-inclusion-dedekind` | `cor` | For nonzero integral ideals in a Dedekind domain, I contains J iff I divides J. | L/A; Milne Cor. 20.9. |
| `cor-ideals-in-a-dedekind-domain-are-two-generated` | `cor` | Every nonzero ideal of a Dedekind domain is generated by two elements. | L/A; Milne Cor. 20.12; Mustaţă §8.5. |
| `def-ideal-class-group-of-a-domain` | `def` | The ideal class group of a Dedekind domain is the abelian group of nonzero fractional ideals modulo the subgroup of nonzero principal fractional ideals. | L/NA; Mustaţă definition after Thm. 8.61; Milne §20. |
| `lem-ideal-class-group-well-defined` | `lem` | Principal fractional ideals form a subgroup, and multiplication of representatives descends to the quotient group. | L/A; Mustaţă Rem. 8.62; Milne §20. |
| `def-divisor-group-of-a-dedekind-domain` | `def` | The divisor group is the free abelian group on the nonzero prime ideals. | L/NA; Mustaţă Rem. 8.62; CRing Project Ch. 9 §3. |
| `thm-principal-divisor-exact-sequence` | `thm` | Valuations give the exact sequence (R^\times\to K^\times\to\operatorname{Div}(R)\to\operatorname{Cl}(R)\to0), with kernels and images identified explicitly. | L/A; Mustaţă Rem. 8.62; CRing Project Ch. 9 §3. |
| `thm-dedekind-pid-class-group-characterisation` | `thm` | A Dedekind domain is a PID iff its ideal class group is trivial. | L/A; Mustaţă Prop. 8.63; Milne §20. |
| `thm-invertible-ideals-and-rank-one-projective-modules` | `thm` | Invertible fractional ideals are precisely finite projective modules of constant rank one up to the natural fractional-ideal realisation. | L/A; Altman--Kleiman Prop. 25.19; Stacks §15.22. |
| `thm-ideal-class-group-is-the-picard-group` | `thm` | Tensor product identifies the ideal class group with the Picard group of rank-one projective modules. | L/A; Altman--Kleiman (25.22); Stacks §15.118. |
| `thm-finite-torsionfree-modules-over-dedekind-domains` | `thm` | Every finite torsion-free module over a Dedekind domain is projective and isomorphic to (R^{n-1}\oplus I), with the class of (I) uniquely determined. | L/A; Milne Thm. 20.15; Stacks §15.22; CRing Project Ch. 9 §3 supplies the expanded proof. |
| `thm-submodules-of-projectives-over-dedekind-domains` | `thm` | Every submodule of a projective module over a Dedekind domain is projective; in particular every torsion-free module is flat, with the arbitrary-rank choice cost stated separately. | L/A; Stacks §§15.22--15.23; CRing Project Ch. 9 §3. |

#### Proof strategy and obligations

Localise at every nonzero prime, use CA-8 to obtain DVR valuations, and prove
that a finite ideal is recovered from the intersection of its localisations
inside the fraction field.  Finiteness of the nonzero valuations comes from a
fixed numerator/denominator.  Existence and uniqueness of ideal factorisation
then become equality of all local exponents; no element factorisation is
assumed.  Invertibility is local and is glued using finite generation and the
CA-2 local isomorphism criterion.  The finite-separable normalisation theorem
chooses a field basis inside the integral closure, uses nondegeneracy of the
trace pairing, and traps the closure inside a finite trace-dual module.  For
modules, first split a rank-one summand, then induct on rank; the
determinant/exterior ideal identifies the final class without choosing a
canonical decomposition.  The invariant-factor classification is not an A
item: Milne explicitly suppresses its proof, and no second full proof was
harvested for this commission.

**Well-definedness.** A fractional ideal is a submodule of the fixed published
fraction field, not an equivalence class of formal fractions.  Clearing
denominators is an existence condition and is proved equivalent to finite
generation in this Noetherian setting.  The colon is only an inverse candidate
until invertibility is proved:
\((R:I)=\{x\in K:xI\subseteq R\}\).  The ideal class quotient checks that
changing I to aI and J to bJ changes IJ by the principal factor ab.  The
Steinitz class is unique although the chosen direct-sum isomorphism is not.
The divisor map has finite support by ideal factorisation, has kernel
(R^\times), and its cokernel is independent of representatives.

**Choice strength.** Finite ideal factorisation, local calculations and
finite-rank module classification are ZF after the prime-ideal infrastructure.
The simultaneous use of all maximal localisations inherits the maximal-ideal
theorem (AC).  The arbitrary-rank projective/flat assertion can require choice
to choose bases/splittings and must carry the source's AC flag; the finite
version is stated separately as ZF.

#### B page

| id | kind | content | provenance and locator |
|---|---|---|---|
| `ex-pid-as-dedekind-domain` | `ex` | Verify every PID that is not a field is Dedekind and has trivial class group. | L/A; Milne §20. |
| `ex-semilocal-dedekind-domain-is-a-pid` | `ex` | Use prime-ideal factorisation and approximation to prove every semilocal Dedekind domain is a PID. | L/A; Altman--Kleiman Ex. 24.12. |
| `ex-fractional-ideal-in-the-integers` | `ex` | Factor a fractional ideal of the integers with positive and negative prime exponents. | L/A; Altman--Kleiman §25. |
| `ex-ideal-inverse-computation` | `ex` | Compute (R:I) and verify II^{-1}=R for an explicit invertible ideal. | L/A; Altman--Kleiman §25 examples. |
| `ex-steinitz-class-rank-two-module` | `ex` | Exhibit R direct-sum I and track its determinant ideal class. | L/A; Milne Thm. 20.15. |
| `ex-dedekind-localisation-is-dvr` | `ex` | Localise a Dedekind domain at a nonzero prime and compute ideal exponents. | L/A; Altman--Kleiman §24. |
| `ex-two-generators-for-a-dedekind-ideal` | `ex` | Construct two generators for an ideal using local valuation conditions. | L/A; Milne Cor. 20.12. |
| `ex-divisor-of-a-fractional-ideal` | `ex` | Translate a signed prime-ideal factorisation into a divisor and its class. | L/A; Mustaţă Rem. 8.62. |
| `ex-nondedekind-ideal-not-invertible` | `ex` | In a singular one-dimensional domain, display a noninvertible ideal and the failed local-principality test. | L/A; Altman--Kleiman §25 exercises. |

### CA-10. Krull dimension, height, and systems of parameters

- **A page id:** `krull-dimension-and-height-theorems`
- **B page id:** `krull-dimension-and-height-theorems-examples`
- **Requires:** CA-1--CA-3 and CA-5--CA-7; height and Krull dimension were
  defined on CA-3 so earlier one-dimensional statements are already typed.
- **Primary backing:** Altman--Kleiman §21, pp. 130--136, especially principal
  ideal theorem (21.2), systems of parameters (21.4), and polynomial/affine
  dimension (21.9)--(21.13); Milne §§18 and 21, pp. 84--89 and 99--104,
  Thms. 18.5, 18.8, 21.3, 21.6 and 21.7.  Independent check: Stacks
  §§10.59--10.62 and 10.116--10.117.

#### A-page items, in dependency order

| id | kind | statement | provenance and locator |
|---|---|---|---|
| `lem-height-and-localisation` | `lem` | Prime chains below p correspond to prime chains of R_p, so height p equals dimension of R_p and height is preserved under localisation at p. | L/A; Milne §21; Stacks §10.60. |
| `lem-dimension-of-quotient-by-a-prime` | `lem` | Prime chains above p correspond to chains in R/p; define coheight as dim(R/p) and record the general inequality ht(p)+dim(R/p) at most dim R. | L/A; Milne §21; Stacks §10.60. |
| `thm-krull-principal-ideal-theorem` | `thm` | In a Noetherian ring, every prime minimal over a principal ideal has height at most one. | L/A; Altman--Kleiman (21.2); Milne Thm. 21.3. |
| `lem-height-theorem-induction-step` | `lem` | If p is minimal over an n-generated ideal, quotienting by the first generator reduces the height estimate to n-1 after tracking minimal primes. | L/A; Milne proof of Thm. 21.6; Stacks §10.60. |
| `thm-krull-height-theorem` | `thm` | A prime minimal over an ideal generated by n elements in a Noetherian ring has height at most n. | L/A; Milne Thm. 21.6; Stacks Lemma 10.60.12. |
| `thm-krull-height-theorem-converse` | `thm` | In a Noetherian ring, every prime of finite height n is minimal over an ideal generated by n elements after localising at that prime; equivalently the maximal ideal of an n-dimensional Noetherian local ring is radical over an n-generated ideal. | L/A; Milne Thm. 21.7; Stacks §10.60. |
| `def-system-of-parameters-and-parameter-ideal` | `def` | In a d-dimensional Noetherian local ring, a system of parameters is a d-tuple whose generated ideal is primary to the maximal ideal; its ideal is a parameter ideal. | L/NA; Altman--Kleiman (21.3); Stacks §10.60. |
| `thm-existence-of-systems-of-parameters` | `thm` | Every finite-dimensional Noetherian local ring has a system of parameters. | L/A; Altman--Kleiman (21.4); Milne Thm. 21.7. |
| `thm-dimension-as-minimal-number-of-radical-generators` | `thm` | The dimension of a Noetherian local ring is the least number of elements needed to generate an ideal whose radical is the maximal ideal. | L/A; Krull height theorem and its converse; Milne Thms. 21.6--21.7. |
| `cor-dimension-drops-under-a-parameter` | `cor` | If x avoids the minimal primes of a positive-dimensional Noetherian local ring, then dim(R/(x)) is one less when x begins a system of parameters. | L/A; Altman--Kleiman (21.4); Stacks §10.60, with the exact parameter hypothesis retained. |
| `thm-dimension-of-a-polynomial-ring-over-a-noetherian-ring` | `thm` | For Noetherian R of finite dimension, dim R[x] = dim R + 1. | L/A; Altman--Kleiman (21.9); Milne §21; use the height theorem for the upper bound. |
| `cor-dimension-of-a-finite-polynomial-ring-over-a-field` | `cor` | The polynomial ring in n variables over a field has dimension n. | L/A; induction from the previous theorem; Milne §18. |
| `thm-affine-domain-dimension-transcendence-degree` | `thm` | If A is a finite-type domain over a field k, then dim A equals the transcendence degree of its fraction field over k. | L/A; Noether normalisation plus integral dimension invariance; Milne Thm. 18.5. |
| `thm-dimension-formula-for-affine-domains` | `thm` | For a prime p in a finite-type k-domain A, ht(p)+trdeg_k Frac(A/p)=trdeg_k Frac(A). | L/A; Milne Thm. 18.8; the proof builds saturated chains via normalisation and going down. |
| `cor-maximal-chains-in-affine-domains-have-equal-length` | `cor` | In a finite-type k-domain, every saturated chain from zero to a maximal ideal has length dim A. | L/A; Milne Thm. 18.8. |
| `rem-catenarity-boundary` | `rem` | The equal-chain statement is asserted only in the affine-domain setting proved above; arbitrary Noetherian rings need not be catenary. | L/NA; Stacks §10.105. |

#### Proof strategy and obligations

The principal ideal theorem uses Milne 21.3's self-contained local argument,
including its determinant-trick/annihilator steps, rather than the alternate
Hilbert--Samuel proof that would consume CA-11.  Thus it has no forward
dependency.  General height follows by induction on the number
of generators.  Systems of parameters are produced by repeatedly using finite
prime avoidance to choose an element outside the current top-dimensional
minimal primes.  Affine dimension uses Noether normalisation, going up and
incomparability, and therefore does not use geometric dimension language.

**Well-definedness.** Supremum and length conventions match CA-3.  A system of
parameters is not a chosen invariant: different tuples may work, while their
common length is the already-defined dimension.  Transcendence degree is
well-defined by CA-7's basis-cardinality theorem.  In dimension formulas,
quotients are domains exactly because p is prime.

**Choice strength.** Principal/height calculations and finite prime avoidance
are ZF after the finite lists of minimal primes exist.  The latter list was
obtained by Noetherian induction and inherits DC.  Affine dimension inherits
lying over/going up and transcendence-basis existence (AC).  No chain is
silently chosen from an infinite supremum; saturated-chain existence is stated
only where the sources construct a finite chain.

#### B page

| id | kind | content | provenance and locator |
|---|---|---|---|
| `ex-dimension-of-principal-ideal-domains` | `ex` | Show a nonfield PID has dimension one, conditional only on the owed PID prime-factor enrichment. | L/A; Milne §20. |
| `ex-dimension-of-polynomial-rings` | `ex` | Display a maximal prime chain of length n in a polynomial ring in n variables and prove no longer chain exists. | L/A; Milne §18. |
| `ex-dimension-and-nilpotents` | `ex` | Compare a ring and its reduction, which have the same prime chains. | L/A; Stacks §10.60. |
| `ex-height-of-monomial-primes` | `ex` | Compute heights of coordinate primes in a polynomial ring. | L/A; Milne §18 examples. |
| `ex-system-of-parameters-regular-and-singular` | `ex` | Find parameter systems in a regular local polynomial localisation and in a cusp local ring. | L/A; Altman--Kleiman §21 examples. |
| `ex-principal-ideal-theorem-hypotheses` | `ex` | Show why Noetherianity and minimality over the principal ideal appear in the theorem. | L/A; Stacks §10.60 examples. |
| `ex-affine-dimension-formula` | `ex` | Verify the height/transcendence-degree formula for several primes of a two-variable affine domain. | L/A; Milne Thm. 18.8. |

### CA-11. Rees modules, Artin--Rees, and Hilbert--Samuel theory

- **A page id:** `rees-modules-artin-rees-and-hilbert-samuel-theory`
- **B page id:** `rees-modules-artin-rees-and-hilbert-samuel-theory-examples`
- **Requires:** CA-1--CA-5 and CA-10; polynomial rings from the published
  algebra band.  Graded rings/modules are constructed on this page.
- **Primary backing:** Altman--Kleiman §§20--21, pp. 121--136, Hilbert
  functions, Rees constructions, Artin--Rees (20.1)--(20.20), and dimension
  theorem (21.4); Milne §§21 and 24.3, pp. 99--104 and 108--109.  Independent
  check: Stacks §§10.51, 10.58--10.60 and 10.117; Huneke/Stone CA III Ch. 1.

#### A-page items, in dependency order

| id | kind | statement | provenance and locator |
|---|---|---|---|
| `def-graded-ring-and-graded-module` | `def` | Define nonnegatively graded rings/modules, homogeneous elements and degree shifts. | L/NA; Altman--Kleiman (20.1)--(20.4); Stacks §10.56. |
| `def-hilbert-function-and-hilbert-series` | `def` | For a graded module with finite-length homogeneous pieces, define its Hilbert function and formal Hilbert series. | L/NA; Altman--Kleiman (20.5); Huneke/Stone CA III Ch. 1. |
| `thm-hilbert-serre-theorem` | `thm` | A finite graded module over a standard graded algebra over an Artinian ring has rational Hilbert series with denominator a power of 1-t; its Hilbert function is eventually polynomial. | L/A; Altman--Kleiman (20.8)--(20.12); Stacks §10.58. |
| `def-associated-graded-ring-and-module` | `def` | For an ideal I and filtered module M, define gr_I(R) and gr_I(M) from successive quotients. | L/NA; Altman--Kleiman (20.13); Stacks §10.57. |
| `def-rees-algebra-and-rees-module` | `def` | Define the Rees algebra and Rees module as graded subobjects of polynomial extensions encoding the I-adic filtration. | L/NA; Altman--Kleiman (20.14)--(20.17). |
| `lem-rees-module-finiteness-and-stable-filtrations` | `lem` | A filtration is I-stable iff its Rees module is finite over the Rees algebra; for Noetherian R the Rees algebra is Noetherian. | L/A; Altman--Kleiman (20.17); Stacks §10.55/§10.57. |
| `thm-artin-rees-lemma` | `thm` | If R is Noetherian, I an ideal, M finite and N a submodule, then for some c and all n at least c, I^nM intersect N equals I^(n-c)(I^cM intersect N). | L/A; Altman--Kleiman (20.18); Milne Thm. 24.3; Stacks Lemma 10.51.2. |
| `cor-induced-and-intrinsic-adic-filtrations-are-equivalent` | `cor` | The filtration on N induced from the I-adic filtration of M is equivalent to the I-adic filtration of N. | L/A; Altman--Kleiman (20.18); Stacks §10.96. |
| `thm-krull-intersection-theorem` | `thm` | For finite M over Noetherian R, the intersection of I^nM is the submodule on which some element 1-a with a in I vanishes; if I is in the Jacobson radical, the intersection is zero. | L/A; Altman--Kleiman (20.19); Milne Thm. 3.16; Stacks Lemmas 10.51.4--10.51.5. |
| `def-hilbert-samuel-function-and-polynomial` | `def` | For local Noetherian (R,m), an m-primary ideal I and finite M, define n↦length(M/I^(n+1)M); call its eventual polynomial the Hilbert--Samuel polynomial. | L/NA; Altman--Kleiman §21; Stacks §10.59. |
| `thm-existence-of-hilbert-samuel-polynomial` | `thm` | The Hilbert--Samuel function agrees for all sufficiently large n with a rational polynomial whose binomial-basis coefficients are integers. | L/A; Hilbert--Serre applied to gr_I(M); Altman--Kleiman (21.1); Stacks §10.59. |
| `def-hilbert-samuel-multiplicity` | `def` | If d is the degree of the Hilbert--Samuel polynomial, define e_I(M) as d! times its leading coefficient, with the finite-length convention. | L/NA; Altman--Kleiman (21.1); Huneke/Stone CA III Ch. 1. |
| `thm-hilbert-samuel-dimension-theorem` | `thm` | For nonzero finite M over a Noetherian local ring and an ideal of definition I, the degree of its Hilbert--Samuel polynomial equals dim Supp(M). | L/A; Altman--Kleiman (21.4); Stacks Lemma 10.60.9, using Artin--Rees. |
| `thm-dimension-and-parameters-for-modules` | `thm` | The dimension of finite M is the least number of elements whose quotient on M has finite length; such tuples are systems of parameters for M. | L/A; Altman--Kleiman (21.4); Stacks §10.60. |
| `thm-additivity-of-hilbert-samuel-multiplicity` | `thm` | In a short exact sequence of finite modules, the top-dimensional Hilbert--Samuel multiplicity of the middle module is the sum of those of the outer modules having the same maximal dimension; in particular multiplicities add when all three dimensions agree. | L/A; Altman--Kleiman §21; Huneke/Stone CA III Ch. 1; Artin--Rees compares the induced and intrinsic filtrations. |
| `thm-multiplicity-under-reduction-by-a-parameter` | `thm` | Under the stated filter-regular/parameter hypotheses, passing modulo a parameter preserves the leading multiplicity, with the annihilator correction in the general formula. | L/A; Altman--Kleiman §21; Huneke/Stone CA III Ch. 1. |
| `cor-parameter-ideal-multiplicity-positive` | `cor` | For nonzero finite M and an ideal of definition, Hilbert--Samuel multiplicity is a positive integer. | L/A; dimension theorem and finite-difference proof; Stacks §10.59. |

#### Proof strategy, well-definedness, and choice

Hilbert--Serre filters by multiplication with a degree-one generator and
inducts on their finite number.  Artin--Rees embeds the Rees module of N as a
graded submodule of the finite Rees module of M and converts finite homogeneous
generation back into the displayed equality.  This is placed before the
dimension comparison precisely because the latter needs Artin--Rees.  Lengths
are finite because I is an ideal of definition on M.  Associated-graded and
Rees operations check multiplication degree-by-degree; the polynomial is
unique because two rational polynomials agreeing on an infinite tail are
equal.  Multiplicity is independent of a chosen eventual threshold.

All finite graded and polynomial arguments are ZF.  The Artin--Rees proof is ZF
from Noetherian finite generation.  Any use of a selected system of parameters
inherits the finite-minimal-prime/DC history recorded on CA-10; the numerical
invariants themselves involve no choice.

#### B page

| id | kind | content | provenance and locator |
|---|---|---|---|
| `ex-hilbert-series-of-a-polynomial-ring` | `ex` | Compute the Hilbert series and polynomial of a standard polynomial ring and a homogeneous quotient. | L/A; Altman--Kleiman §20. |
| `ex-associated-graded-of-a-local-ring` | `ex` | Compute the tangent-cone graded ring of a regular local ring and a cusp. | L/A; Huneke/Stone CA III Ch. 1. |
| `ex-artin-rees-intersection` | `ex` | Find an explicit Artin--Rees number for a submodule of a finite module. | L/A; Altman--Kleiman (20.18). |
| `ex-krull-intersection-in-a-local-domain` | `ex` | Verify the intersection of all powers of the maximal ideal is zero. | L/A; Milne Thm. 3.16. |
| `ex-hilbert-samuel-polynomial-of-a-dvr` | `ex` | Compute length(R/(\pi^{n+1})) and multiplicity one. | L/A; Altman--Kleiman §§21,23. |
| `ex-hilbert-samuel-multiplicity-of-a-plane-curve` | `ex` | Compute the multiplicity of a plane-curve local ring from its associated graded ring. | L/A; Huneke/Stone CA III Ch. 1. |
| `ex-hilbert-samuel-finite-length-case` | `ex` | Show the eventual polynomial is constant and equals module length in dimension zero. | L/A; Stacks §10.59. |

### CA-12. Flatness and faithfully flat descent

- **A page id:** `flatness-and-faithful-flatness`
- **B page id:** `flatness-and-faithful-flatness-examples`
- **Requires:** CA-1--CA-3 and CA-11; planned `def-flat-module` and the tensor
  exactness results on `tensor-products-of-modules`; published exact sequences,
  projectives and localisation.  No Tor item is used.
- **Primary backing:** Altman--Kleiman §9, pp. 50--60, (9.1)--(9.28); Milne
  §11, pp. 43--50, Props. 11.1--11.22.  Independent check: Stacks §§10.39,
  10.78, 10.99; Mustaţă Ch. 10, 10.1--10.19.

#### A-page items, in dependency order

| id | kind | statement | provenance and locator |
|---|---|---|---|
| `def-flat-ring-homomorphism` | `def` | A ring map R→S is flat when S is flat as an R-module. | L/NA; Altman--Kleiman (9.5); Milne Def. 11.2. |
| `def-faithfully-flat-module-and-ring-map` | `def` | A flat module is faithfully flat when tensoring with it reflects exactness; a ring map is faithfully flat when its target is so as a module. | L/NA; Altman--Kleiman (9.5); Milne Def. 11.2. |
| `thm-sums-summands-base-change-and-composition-of-flat-modules` | `thm` | Direct sums and summands, scalar extension, and composites preserve flatness in the precisely typed forms. | L/A; Altman--Kleiman (9.6), (9.10)--(9.13); Milne Props. 11.3, 11.13. |
| `thm-localisations-are-flat` | `thm` | Every ring localisation is flat, and localising a flat module preserves flatness. | L/A; Milne Props. 11.14--11.15; CA-2 exact localisation. |
| `thm-flatness-is-local` | `thm` | A module is flat iff all prime localisations are flat, equivalently all maximal localisations are flat. | L/A; Milne Prop. 11.16; Stacks §10.39. |
| `thm-equational-criterion-for-flatness` | `thm` | A module is flat iff every finite relation among elements comes from finitely many relations among the coefficients. | L/A; Altman--Kleiman (9.25); Stacks Lemma 10.39.11. |
| `thm-ideal-criterion-for-flatness` | `thm` | M is flat iff I tensor M→M is injective for every finitely generated ideal I. | L/A; Altman--Kleiman (9.26); Mustaţă 10.17. |
| `cor-flat-quotients-and-idempotent-ideals` | `cor` | If R/I is flat then I=I²; for finite I this is equivalent to I being generated by an idempotent. | L/A; Altman--Kleiman (9.14); Stacks §10.39. |
| `thm-faithfully-flat-modules-detect-exactness` | `thm` | A sequence is exact iff it becomes exact after tensoring with a faithfully flat module. | L/A; Milne Prop. 11.7; Altman--Kleiman §9. |
| `thm-faithfully-flat-ring-map-characterisations` | `thm` | For a flat map R→S, faithfulness is equivalent to detecting nonzero modules/proper ideals, every maximal ideal of R having an overprime, and surjectivity on prime spectra. | L/A; Altman--Kleiman (9.15); Milne Props. 11.18--11.19. |
| `cor-faithfully-flat-ring-maps-are-injective` | `cor` | Every faithfully flat ring map is injective. | L/A; Milne Prop. 11.12. |
| `thm-faithfully-flat-descent-of-flatness` | `thm` | A module is flat iff its scalar extension along a faithfully flat ring map is flat. | L/A; Milne Prop. 11.9. |
| `cor-faithfully-flat-descent-of-finite-generation` | `cor` | If scalar extension along a faithfully flat map is finitely generated, then the original module is finitely generated. | L/A; Milne Prop. 11.10. |
| `thm-local-criterion-for-flatness-ideal-form` | `thm` | Under the stated Noetherian and finiteness hypotheses, flatness of M/IM over R/I plus injectivity of I tensor M→M implies flatness of M. | L/A; Stacks Lemmas 10.99.7, 10.99.10; formulate without Tor. |
| `thm-local-criterion-for-flatness-closed-fibre-form` | `thm` | For a local map and finite target-module, flatness on the closed fibre plus the source multiplication-map condition gives source flatness. | L/A; Stacks §10.99; Huneke/Stone CA II Lemmas 25--26. |
| `thm-finite-flat-modules-over-local-rings-are-free` | `thm` | A finite flat module over a local ring is free. | L/A; Mustaţă 10.11; Stacks §10.78. |
| `cor-finite-flat-noetherian-modules-are-projective` | `cor` | A finite flat module over a Noetherian ring is finite projective. | L/A; Mustaţă 10.11; local freeness and CA-2 local criterion. |
| `thm-flat-going-down` | `thm` | Every flat ring map satisfies going down. | L/A; Milne Prop. 11.20; Stacks §10.41. |

#### Proof strategy, well-definedness, and choice

The relation/ideal criteria reduce tensor kernels to finite free presentations.
Faithful detection applies tensor exactness to kernels, images and cokernels;
the spectrum criterion uses ideals (\mathfrak pS\) and primes minimal above
them.  The two local criteria use Artin--Rees and Krull intersection from CA-11
and state multiplication-map hypotheses rather than borrowing Tor from the
future homological block.  Finite flat over local is proved by lifting a residue
basis, applying Nakayama, and tensoring the resulting kernel sequence.

Balanced tensor maps and all changes of scalar are checked against the
published tensor universal property.  “Reflects exactness” is equivalent to
“flat and detects zero modules” and this equivalence is proved.  Algebraic
flatness arguments are ZF.  The spectrum criterion and flat going down inherit
prime/maximal-ideal existence (AC); no derived-functor choice is hidden.

#### B page

| id | kind | content | provenance and locator |
|---|---|---|---|
| `ex-polynomial-algebras-are-faithfully-flat` | `ex` | Show a polynomial algebra is free and faithfully flat over its coefficient ring. | L/A; Altman--Kleiman (9.8). |
| `ex-localisations-not-faithfully-flat` | `ex` | A proper localisation is flat but can kill a nonzero quotient. | L/A; Milne §11. |
| `ex-fraction-field-flat-not-projective` | `ex` | A fraction field is flat over its domain and generally not projective. | L/A; Altman--Kleiman (9.27). |
| `ex-flat-idempotent-quotient` | `ex` | Decompose a ring by an idempotent and verify the corresponding quotient is flat. | L/A; Altman--Kleiman (9.14). |
| `ex-nonflat-quotient-module` | `ex` | Detect nonflatness of R/I using the ideal criterion. | L/A; Mustaţă 10.19. |
| `ex-faithfully-flat-principal-open-cover` | `ex` | A finite family of principal localisations covering Spec gives a faithfully flat product map. | L/A; Milne Prop. 11.22; topological wording waits for CA-15. |
| `ex-finite-flat-module-over-a-local-ring` | `ex` | Recover a basis from a residue-field basis via Nakayama. | L/A; Mustaţă 10.11. |

### CA-13. Inverse limits and Noetherian completion

- **A page id:** `inverse-limits-and-noetherian-completion`
- **B page id:** `inverse-limits-and-noetherian-completion-examples`
- **Requires:** CA-2, CA-11, CA-12 and the published exact-sequence/tensor
  pages.  Formal power series are not defined or used in this low pair.
- **Primary backing:** Altman--Kleiman §22, selected (22.1)--(22.81), especially
  inverse limits (22.5)--(22.12), Artin--Rees consequences (22.17)--(22.26),
  faithful completion (22.36), and universal property (22.54); Milne §24,
  pp. 108--109, Props. 24.1--24.7.  Independent check: Stacks §§10.86--10.87
  and §§10.96--10.97.

#### A-page items, in dependency order

| id | kind | statement | provenance and locator |
|---|---|---|---|
| `def-filtration-and-adic-filtration` | `def` | Define decreasing filtrations and the I-adic filtration of a ring or module. | L/NA; Altman--Kleiman (22.1); Milne §24. |
| `def-adic-topology-on-a-module` | `def` | The powers (I^nM) form the distinguished neighbourhood basis of zero for the (I)-adic linear topology. | L/NA; Altman--Kleiman (22.1); Milne 24.1. |
| `def-separated-and-complete-filtered-module` | `def` | A filtered module is separated when the intersection is zero and complete when its canonical map to the inverse limit of quotients is an isomorphism. | L/NA; Altman--Kleiman (22.1); Stacks Def. 10.96.2. |
| `def-inverse-system-and-inverse-limit-of-modules` | `def` | Define a sequence-indexed inverse system and its inverse limit as the compatible-element submodule of the product. | L/NA; Altman--Kleiman (22.5); Stacks §10.87. |
| `thm-universal-property-of-an-inverse-limit-of-modules` | `thm` | The compatible projections from the inverse limit are terminal among compatible cones. | L/A; Altman--Kleiman (22.5); Stacks §10.87. |
| `thm-inverse-limits-are-left-exact` | `thm` | Inverse limits preserve kernels and hence are left exact. | L/A; Altman--Kleiman (22.6). |
| `def-mittag-leffler-inverse-system` | `def` | Define the eventual-stability-of-images condition. | L/NA; Altman--Kleiman (22.7); Stacks Def. 10.86.1. |
| `thm-exactness-of-inverse-limits-under-mittag-leffler` | `thm` | A short exact sequence of inverse systems remains exact on inverse limits when the kernel system is Mittag--Leffler. | L/A; Altman--Kleiman (22.7); Stacks Lemma 10.86.4. |
| `def-adic-completion-of-a-module` | `def` | The I-adic completion of M is the inverse limit of M/I^nM, with its canonical map. | L/NA; Altman--Kleiman (22.8); Milne 24.1. |
| `thm-kernel-and-universal-property-of-adic-completion` | `thm` | The kernel of M→M-hat is the intersection of I^nM, and maps into separated complete I-adic modules satisfying continuity factor uniquely through completion. | L/A; Altman--Kleiman (22.3), (22.54); Stacks §10.96. |
| `prop-units-in-an-adically-complete-ring` | `prop` | If a ring is complete for an ideal (I), then every element congruent to one modulo (I) is a unit; hence (I) lies in the Jacobson radical. | L/A; Altman--Kleiman Ex. 22.31; Stacks Lemma 10.96.6. |
| `thm-completion-is-exact-on-finite-modules` | `thm` | I-adic completion is exact on finite modules over a Noetherian ring. | L/A; Altman--Kleiman (22.17)--(22.18); Milne Prop. 24.4. |
| `thm-completion-as-extension-of-scalars` | `thm` | For finite M over Noetherian R, the canonical map M tensor_R R-hat→M-hat is an isomorphism. | L/A; Altman--Kleiman (22.19); Milne Prop. 24.5. |
| `cor-completion-commutes-with-finite-quotients-and-submodules` | `cor` | Completion commutes with finite quotients, and completed submodules/ideal powers have the source-stated closures. | L/A; Altman--Kleiman (22.20)--(22.21); Stacks Lemma 10.97.1. |
| `thm-flatness-of-noetherian-completion` | `thm` | The completion of a Noetherian ring is flat over the ring. | L/A; Milne Prop. 24.6; Stacks Lemma 10.97.2, using CA-12's ideal criterion. |
| `thm-faithful-flatness-of-jacobson-adic-completion` | `thm` | If I lies in the Jacobson radical, the completion map is faithfully flat. | L/A; Altman--Kleiman (22.36); Stacks Lemma 10.97.3. |
| `thm-noetherianity-of-adic-completion` | `thm` | The I-adic completion of a Noetherian ring is Noetherian. | L/A; Altman--Kleiman (22.26); Stacks Lemmas 10.97.5--10.97.6. |
| `thm-completion-of-a-noetherian-local-ring` | `thm` | The maximal-ideal completion of a Noetherian local ring is Noetherian local with the same residue field and is faithfully flat. | L/A; Altman--Kleiman §22; Stacks §10.97. |
| `thm-finite-modules-over-complete-noetherian-rings-are-complete` | `thm` | Every finite module over an I-adically complete Noetherian ring is I-adically complete. | L/A; Altman--Kleiman (22.24); Stacks Lemma 10.96.11. |
| `thm-complete-nakayama-lemma` | `thm` | Under the standard complete separated hypotheses, generators modulo I lift to generators without an a priori finite-generation assumption in the source form. | L/A; Altman--Kleiman (22.69); Stacks Lemma 10.96.12. |
| `thm-completion-preserves-dimension-and-hilbert-samuel-data` | `thm` | For a Noetherian local ring and finite module, maximal-adic completion preserves support dimension, lengths of adic quotients and Hilbert--Samuel multiplicity. | L/A; Altman--Kleiman (22.61)--(22.62); faithful flatness and quotient comparison. |

#### Proof strategy, well-definedness, and choice

The inverse limit is built inside a product and its module operations and
universal property are checked componentwise.  Mittag--Leffler exactness
successively corrects lifts.  Artin--Rees makes the submodule filtration
equivalent to the intrinsic adic one; exact inverse limits give exact
completion.  The tensor comparison follows from finite presentations, and the
ideal criterion then gives flatness.  Faithfulness is detected modulo maximal
ideals.  No Cauchy-sequence quotient is introduced.

The canonical completion map and all comparison maps are checked independent
of residue representatives.  “Complete” includes separated.  The standard
successive-lift proof of countable Mittag--Leffler exactness uses DC; record DC
sufficient.  All finite-stage algebra and Artin--Rees consequences are ZF.
Faithful-flat spectrum criteria inherit AC.

#### B page

| id | kind | content | provenance and locator |
|---|---|---|---|
| `ex-p-adic-integers-as-an-inverse-limit` | `ex` | Construct the p-adic integers as the inverse limit of integer quotients. | L/A; Altman--Kleiman §22. |
| `ex-adic-completion-of-the-integers` | `ex` | Compute compatible residue systems and the completion map. | L/A; Milne §24. |
| `ex-equivalent-adic-filtrations` | `ex` | Compare two cofinal filtrations and their canonically isomorphic completions. | L/A; Altman--Kleiman (22.21). |
| `ex-completion-not-exact-without-finiteness` | `ex` | Exhibit failure of completion exactness for a nonfinite module. | L/A; Altman--Kleiman (22.48). |
| `ex-completion-of-a-domain-not-a-domain` | `ex` | Record and analyse the sourced Noetherian-domain counterexample. | L/A; Altman--Kleiman (22.46). |
| `ex-iterated-adic-completions` | `ex` | Compare iterated and combined completions under the source hypotheses. | L/A; Altman--Kleiman (22.42)--(22.43). |
| `ex-semilocal-adic-completion` | `ex` | Decompose a semilocal completion into local completed factors. | L/A; Altman--Kleiman (22.38). |

### CA-14. Henselian rings and equicharacteristic Cohen structure

- **Placement:** separately after the published `formal-power-series` page;
  this pair is not part of the earlier low-anchor run.
- **A page id:** `henselian-rings-and-equicharacteristic-cohen-structure`
- **B page id:** `henselian-rings-and-equicharacteristic-cohen-structure-examples`
- **Requires:** CA-2, CA-7, CA-10--CA-13 and the published
  `formal-power-series` items.  It never redefines formal series.
- **Primary backing:** Altman--Kleiman §22, (22.54)--(22.60) and
  (22.69)--(22.81); Stacks §§10.153 and 10.160.  Independent check:
  Huneke/Stone CA I, completion chapter.  Milne §§25 and 28 are blank promises
  and are explicitly not used as backing.

#### A-page items, in dependency order

| id | kind | statement | provenance and locator |
|---|---|---|---|
| `def-henselian-pair-and-henselian-local-ring` | `def` | Define a Henselian pair by unique lifting of coprime monic factorizations and a Henselian local ring by its maximal-ideal pair. | L/NA; Altman--Kleiman (22.73); Stacks Def. 10.153.1. |
| `prop-uniqueness-of-hensel-factor-lifting` | `prop` | A lifted coprime monic factorisation with fixed reduced factors is unique. | L/A; Altman--Kleiman (22.73); Stacks Lemma 10.153.2. |
| `thm-equivalent-elementary-forms-of-hensels-property` | `thm` | Coprime monic factor lifting is equivalent to simple-root lifting and the elementary finite-algebra idempotent form. | L/A; Altman--Kleiman (22.78); Stacks Lemma 10.153.3; étale forms omitted. |
| `thm-hensels-lemma-for-complete-adic-pairs` | `thm` | Every separated complete pair is Henselian under the source's ideal hypotheses. | L/A; Altman--Kleiman (22.75); Stacks Lemma 10.153.9. |
| `cor-complete-local-rings-are-henselian` | `cor` | Every complete local ring is Henselian. | L/A; Stacks Lemma 10.153.9. |
| `cor-artinian-local-rings-are-henselian` | `cor` | Every Artinian local ring is Henselian. | L/A; Stacks Lemma 10.153.10. |
| `thm-henselian-property-passes-to-quotients` | `thm` | Quotients of Henselian local rings are Henselian. | L/A; Stacks §10.153. |
| `def-equicharacteristic-local-ring-and-coefficient-field` | `def` | Define equicharacteristic and a coefficient field as an embedded field mapping isomorphically to the residue field. | L/NA; Altman--Kleiman (22.80)--(22.81); Stacks §10.160. |
| `thm-existence-of-coefficient-fields-equicharacteristic` | `thm` | Every complete equicharacteristic Noetherian local ring contains a coefficient field. | L/A; Altman--Kleiman (22.81); Stacks §10.160. |
| `thm-universal-property-of-multivariable-formal-power-series` | `thm` | Elements of the maximal ideal of a complete separated algebra define a unique continuous map from the corresponding formal power-series ring. | L/A; Altman--Kleiman (22.55); cites published formal-series operations. |
| `thm-equicharacteristic-cohen-structure-theorem` | `thm` | A complete equicharacteristic Noetherian local ring is a quotient of a finite-variable formal power-series ring over a coefficient field. | L/A; Altman--Kleiman (22.57); equicharacteristic case of Stacks Thm. 10.160.8. |
| `thm-complete-local-domain-finite-over-regular-power-series-subring` | `thm` | A complete equicharacteristic Noetherian local domain is finite over a formal power-series subring on a system of parameters. | L/A; Altman--Kleiman (22.60); Stacks Lemma 10.160.11. |
| `rem-mixed-characteristic-cohen-structure-boundary` | `rem` | State the full mixed-characteristic theorem only as a non-load-bearing cited boundary and list the missing Cohen-ring/formal-smoothness machinery. | L/NA; Stacks Thm. 10.160.8 and Remark 10.160.9; `proved_here: false`, never a dependency target. |

#### Proof strategy, well-definedness, and choice

Hensel lifting recursively corrects a root or factorisation modulo powers of the
ideal; bounded degree turns coefficient convergence into completion, and the
lifted Bézout identity gives uniqueness.  The coefficient-field theorem uses a
maximal partial coefficient field and Hensel lifting.  Choose generators of the
maximal ideal, obtain a continuous formal-series map, and use complete
Nakayama to prove surjectivity.

Formal substitution is defined through compatible finite truncations and is
independent of presentations by separatedness.  A coefficient field includes
the residue-map isomorphism in its definition.  Newton simple-root iteration is
ZF once the starting root is given; arbitrary compatible-lift selection may use
DC.  Coefficient-field existence uses AC/Zorn.  Mixed characteristic is a
recorded blocker, not an asserted in-library theorem.

#### B page

| id | kind | content | provenance and locator |
|---|---|---|---|
| `ex-hensel-lifting-a-simple-root` | `ex` | Lift a simple root through successive powers. | L/A; Stacks §10.153. |
| `ex-hensel-lifting-a-coprime-factorisation` | `ex` | Lift a coprime factorisation of a monic polynomial. | L/A; Altman--Kleiman (22.75). |
| `ex-complete-discrete-valuation-ring-henselian` | `ex` | Apply completeness to a complete DVR. | L/A; Stacks §10.153. |
| `ex-artinian-local-ring-henselian` | `ex` | Stop the lifting after the nilpotence exponent. | L/A; Stacks Lemma 10.153.10. |
| `ex-localised-integers-not-henselian` | `ex` | Use the sourced polynomial factor/root obstruction over the localisation of the integers at p. | L/A; Altman--Kleiman (22.74). |
| `ex-equicharacteristic-complete-local-quotient` | `ex` | Present an explicit complete local ring as a quotient of a formal-series ring. | L/A; Altman--Kleiman (22.57). |

## 5. Topological block — after `compactness`

### CA-15. The Zariski topology on prime spectra

- **A page id:** `zariski-topology-on-prime-spectra`
- **B page id:** `zariski-topology-on-prime-spectra-examples`
- **Requires:** CA-2, CA-3, CA-5 and CA-7; published
  `topological-spaces-and-continuity` and `compactness`, including subspaces,
  bases, compactness, connectedness, and product/disjoint-union basics.  The
  published library defines compactness without a Hausdorff hypothesis, so
  this page uses its term “compact”; source occurrences of “quasi-compact” are
  translated only terminologically.
- **Primary backing:** Altman--Kleiman §13, (13.1)--(13.25); Milne §14,
  pp. 63--70, Props. 14.1--14.10.  Independent check: Stacks §§10.17,
  10.21--10.22 and 10.26--10.27.

#### A-page items, in dependency order

| id | kind | statement | provenance and locator |
|---|---|---|---|
| `def-irreducible-topological-space-and-subset` | `def` | A nonempty topological space is irreducible when it is not the union of two proper closed subsets; a subset is irreducible in its subspace topology. | L/NA; Milne Def. 14.5; Stacks Def. 5.8.1. |
| `def-noetherian-topological-space` | `def` | A topological space is Noetherian when its open subsets satisfy ACC, equivalently its closed subsets satisfy DCC. | L/NA; Milne Prop. 14.4 and surrounding definition; Stacks Def. 5.9.1. |
| `def-specialisation-and-generic-point` | `def` | A point (y) is a specialisation of (x) when (y) lies in the closure of ({x}); a generic point of a closed subset has that subset as its closure. | L/NA; Milne §14; Stacks §§5.8--5.9. |
| `thm-zariski-topology-on-prime-spectrum` | `thm` | The subsets V(I) from CA-3 satisfy the closed-set axioms and define the Zariski topology on Spec R. | L/A; Milne Prop. 14.1; Stacks Def. 10.17.3. |
| `thm-distinguished-opens-form-a-basis` | `thm` | The CA-3 subsets D(f) are open, form a basis, and satisfy D(f)∩D(g)=D(fg). | L/A; Altman--Kleiman (13.4)--(13.7); Stacks §10.17. |
| `thm-spectrum-map-is-continuous` | `thm` | A ring map induces a continuous contraction map on spectra, contravariantly. | L/A; Altman--Kleiman (13.8); Stacks §10.17. |
| `thm-spectrum-of-a-quotient-is-a-closed-subspace` | `thm` | The CA-3 quotient-prime bijection is a homeomorphism onto V(I). | L/A; Altman--Kleiman (13.9); published quotient correspondence. |
| `thm-spectrum-of-a-localisation-is-a-subspace` | `thm` | The CA-3 localisation-prime bijection is a homeomorphism onto the primes disjoint from S; for one element its image is D(f). | L/A; Altman--Kleiman (13.10); published localisation correspondence. |
| `thm-prime-spectrum-is-compact` | `thm` | (\operatorname{Spec}R) and every distinguished open (D(f)) are compact in the published non-Hausdorff sense. | L/A; Altman--Kleiman Prop. 13.20; Milne Prop. 14.4; Stacks Lemma 10.17.9. |
| `thm-closure-and-specialisation-in-the-spectrum` | `thm` | The closure of p is V(p); specialisation is reverse inclusion, closed points are maximal ideals, and Spec R is T0. | L/A; Milne §14; Stacks §10.17. |
| `thm-irreducible-closed-subsets-and-prime-ideals` | `thm` | A nonempty V(I) is irreducible iff its radical is prime, and then it has the unique generic point radical(I). | L/A; Milne Def. 14.5 and Prop. 14.6; Stacks §10.26. |
| `thm-irreducible-components-and-minimal-primes` | `thm` | Irreducible components are the V(p) for minimal primes; in a Noetherian ring there are finitely many. | L/A; Milne Prop. 14.8 and Cor. 14.9; Stacks §10.26. |
| `thm-spectrum-insensitive-to-nilpotents-homeomorphism` | `thm` | The reduction map induces a homeomorphism on spectra. | L/A; quotient homeomorphism and CA-3 radical theorem. |
| `thm-idempotents-and-clopen-decompositions-of-spectrum` | `thm` | Idempotent decompositions of R correspond to decompositions of Spec R into two clopen subsets; connected spectrum is equivalent to no nontrivial idempotent. | L/A; Milne Lemma 14.2, Prop. 14.3 and Cor. 14.10; Stacks §§10.21--10.22. |
| `thm-noetherian-ring-has-noetherian-spectrum` | `thm` | The spectrum of a Noetherian ring is a Noetherian topological space. | L/A; Milne Prop. 14.4; Stacks §10.17. |
| `cor-spectrum-of-an-artinian-ring-is-finite-discrete` | `cor` | The spectrum of an Artinian ring is a finite discrete space. | L/A; CA-4 product decomposition; Milne §§14,16. |
| `thm-support-of-a-finite-module-is-zariski-closed` | `thm` | For finite M, Supp(M)=V(Ann M), hence is closed; without finiteness support need not be closed. | L/A; CA-2; Altman--Kleiman Prop. 13.27. |
| `cor-closed-points-dense-in-affine-spectra` | `cor` | In a finite-type algebra over a field, closed points are dense in every closed subset. | L/A; CA-7 Jacobson theorem; Altman--Kleiman Exs. 15.23--15.24. |

#### Proof strategy, well-definedness, and choice

All topology axioms reduce to CA-3's V identities.  Compactness turns a
distinguished-open cover into the statement that f lies in the radical of the
ideal generated by the covering elements, and one finite equation gives a
finite subcover.  Irreducibility uses V(IJ)=V(I)∪V(J); generic-point uniqueness
uses T0.  The quotient/localisation maps are already bijections, so only the
open/closed subspace calculations remain.  Every inherited topological word is
cited rather than redefined.

The topology itself and finite-cover calculations are ZF.  Nonempty spectra,
radical-as-prime-intersection and the affine Jacobson result inherit AC.
Finiteness of minimal primes inherits DC through CA-3.

#### B page

| id | kind | content | provenance and locator |
|---|---|---|---|
| `ex-zariski-spectrum-of-the-integers` | `ex` | Draw the generic and closed points and determine the basic opens. | L/A; Milne §14. |
| `ex-zariski-spectrum-of-a-product` | `ex` | Identify the spectrum of a product with the disjoint union of factor spectra. | L/A; Stacks §§10.21--10.22. |
| `ex-zariski-spectrum-of-dual-numbers` | `ex` | Compare a nonreduced ring with its reduction. | L/A; Stacks §10.27. |
| `ex-zariski-spectrum-of-a-node` | `ex` | Identify irreducible components and their intersection. | L/A; Stacks §10.27. |
| `ex-zariski-spectrum-not-hausdorff` | `ex` | Use the generic point of a domain with another prime. | L/A; Milne §14. |
| `ex-nonclosed-support-without-finiteness` | `ex` | Compute the support of Q/Z as a Z-module. | L/A; Altman--Kleiman Ex. 13.34. |

---

## 6. Post-homological block — after `homological-algebra`

### CA-16. Koszul complexes and regular sequences

- **A page id:** `koszul-complexes-and-regular-sequences`
- **B page id:** `koszul-complexes-and-regular-sequences-examples`
- **Requires:** CA-2, CA-10--CA-13; HA-1--HA-4 for complexes, homology,
  homotopy, cones and long exact sequences; tensor products and free modules.
- **Primary backing:** Stacks More on Algebra §§15.29 and 15.31; Mustaţă
  §11.1 and §11.3, 11.1--11.5 and 11.43--11.53.  Independent check:
  Huneke/Stone CA II Ch. 1 §§1.1--1.2.

#### A-page items, in dependency order

| id | kind | statement | provenance and locator |
|---|---|---|---|
| `def-exterior-algebra-of-a-finite-free-module` | `def` | Construct the exterior algebra as the tensor-algebra quotient by squares and record its graded basis. | L/NA; Huneke/Stone CA II §1.2; Stacks §15.29. |
| `def-koszul-complex-of-a-sequence-with-coefficients` | `def` | Define the Koszul differential as the degree-minus-one derivation extending the selected sequence, then tensor with a coefficient module. | L/NA; Stacks Defs. 15.29.1--15.29.2; Mustaţă 11.43--11.44. |
| `lem-koszul-differential-is-well-defined-and-squares-to-zero` | `lem` | The derivation descends through the exterior quotient and its square is zero. | L/A; Mustaţă 11.43; Huneke/Stone §1.2. |
| `thm-functoriality-base-change-and-generator-change-for-koszul-complexes` | `thm` | Koszul complexes are functorial, commute with base change, and an invertible generator change gives a signed chain isomorphism. | L/A; Stacks Lemmas 15.29.3--15.29.4; Mustaţă 11.47. |
| `thm-basic-koszul-homology` | `thm` | Compute the one-element complex, H_0 as the quotient by the generated ideal, and top homology as the common annihilator. | L/A; Huneke/Stone Thm. 3; Mustaţă 11.45--11.46. |
| `lem-koszul-generators-act-null-homotopically` | `lem` | Multiplication by every generator is chain-homotopic to zero; hence the generated ideal annihilates all Koszul homology. | L/A; Stacks Lemmas 15.29.5--15.29.6; Mustaţă 11.48. |
| `thm-koszul-concatenation-and-mapping-cone` | `thm` | Concatenating sequences tensors their Koszul complexes, and adjoining one element is the mapping cone of multiplication by it. | L/A; Stacks Lemmas 15.29.7--15.29.12; Mustaţă 11.49. |
| `def-regular-sequence-on-a-module` | `def` | An ordered sequence is M-regular when each element is a non-zero-divisor on the preceding quotient and the terminal quotient is nonzero; in local minimal-resolution applications the elements are required to lie in the maximal ideal. | L/NA; Mustaţă 11.1; convention scope stated explicitly. |
| `thm-localisation-and-flat-base-change-of-regular-sequences` | `thm` | Regularity localises where the terminal quotient survives and is preserved by faithfully flat base change. | L/A; Mustaţă 11.2; Stacks §15.31. |
| `thm-regular-sequences-give-acyclic-koszul-complexes` | `thm` | A regular sequence has no positive Koszul homology, so its Koszul complex resolves the quotient. | L/A; Stacks Lemmas 15.31.2--15.31.3; Mustaţă 11.50. |
| `thm-koszul-acyclicity-characterises-local-regular-sequences` | `thm` | For finite modules over a Noetherian local ring, Koszul acyclicity characterises regular sequences under the terminal properness hypothesis. | L/A; Huneke/Stone Thm. 3; Mustaţă 11.50. |
| `def-koszul-regular-and-h-one-regular-sequences` | `def` | Distinguish ordinary regularity, Koszul regularity and H_1-regularity. | L/NA; Stacks Def. 15.31.1. |
| `thm-regularity-notions-and-permutation-invariance-local` | `thm` | Prove the source-stated implications generally and equivalence/permutation invariance for finite Noetherian local modules. | L/A; Stacks Lemmas 15.31.5--15.31.7; Mustaţă 11.51. |

#### Proof strategy, well-definedness, and choice

The differential-descending and square-zero checks are explicit sign
calculations.  The mapping-cone identification feeds the long exact sequence;
induction on sequence length proves acyclicity.  The converse uses Nakayama and
the one-step cone sequence.  Generator permutations and changes carry explicit
signed chain maps.  Exterior quotient, coefficient tensoring and homology are
all cited or checked universal constructions.  Finite Koszul constructions and
proofs are ZF; constructing an unbounded resolution is not needed here.

#### B page

| id | kind | content | provenance and locator |
|---|---|---|---|
| `ex-koszul-complex-one-and-two-elements` | `ex` | Write the differentials for one and two elements and compute every homology module. | L/A; Mustaţă 11.43--11.46. |
| `ex-koszul-complex-polynomial-variables` | `ex` | Identify the Koszul complex on polynomial variables with the standard free resolution of the residue field. | L/A; Huneke/Stone CA II §1.2. |
| `ex-koszul-resolution-complete-intersection` | `ex` | Resolve a quotient by an explicit regular sequence and calculate its alternating ranks. | L/A; Mustaţă 11.50. |
| `ex-koszul-homology-zero-divisor` | `ex` | Compute positive Koszul homology when the chosen element is a zero divisor. | L/A; Mustaţă 11.45. |
| `ex-nonpermutable-regular-sequence` | `ex` | Exhibit a regular sequence whose permutation fails outside the Noetherian local hypotheses. | L/A; Stacks §15.31 examples. |
| `ex-koszul-homology-after-localisation` | `ex` | Localise a Koszul complex and identify the surviving homology. | L/A; Stacks Lemma 15.29.4. |

### CA-17. Depth and Cohen--Macaulay modules

- **A page id:** `depth-and-cohen-macaulay-modules`
- **B page id:** `depth-and-cohen-macaulay-modules-examples`
- **Requires:** CA-5, CA-10--CA-13 and CA-16; HA-8 for Ext and its long exact
  sequence/localisation.
- **Primary backing:** Mustaţă §§11.1--11.2, 11.6--11.42; Stacks §§10.72,
  10.103--10.104.  Independent check: Huneke/Stone CA II Ch. 2, Prop. 14,
  Lemma 15, Thms. 17, 21, 24 and Cor. 27.

#### A-page items, in dependency order

| id | kind | statement | provenance and locator |
|---|---|---|---|
| `def-depth-with-respect-to-an-ideal` | `def` | Define depth_I(M) as the least i with Ext^i(R/I,M) nonzero, with explicit zero/infinity conventions; local depth uses the maximal ideal. | L/NA; Mustaţă 11.6; Stacks Def. 10.72.1. |
| `thm-depth-equals-maximal-regular-sequence-length` | `thm` | For finite M over a Noetherian ring, depth_I(M) is the supremum of lengths of M-regular sequences in I; in the local/Jacobson setting every maximal such sequence has that common length. | L/A; Mustaţă 11.7; Huneke/Stone Prop. 14. |
| `thm-radical-localisation-and-regular-quotient-properties-of-depth` | `thm` | Depth depends only on radical, localises in the source-stated form, and drops by one after quotienting by a regular element. | L/A; Mustaţă 11.8--11.13; Stacks §10.72. |
| `thm-depth-lemma` | `thm` | State the three standard depth inequalities for a short exact sequence. | L/A; Mustaţă 11.14; Stacks Lemma 10.72.6. |
| `thm-depth-zero-associated-prime-criterion` | `thm` | Depth at a prime is zero iff that prime is associated, under the finite Noetherian hypotheses. | L/A; Mustaţă 11.15; Stacks §10.72. |
| `thm-depth-bounded-by-support-dimension` | `thm` | Local depth of a nonzero finite module is at most its support dimension. | L/A; Mustaţă 11.15--11.17; Stacks §10.72. |
| `thm-koszul-characterisation-of-depth` | `thm` | Depth is recovered from the first/last nonzero Koszul homology index under the source convention. | L/A; Mustaţă 11.52. |
| `def-cohen-macaulay-local-module-and-ring` | `def` | A nonzero finite local module is Cohen--Macaulay when depth equals support dimension; the local ring is so as a module over itself. | L/NA; Mustaţă 11.24; Stacks Defs. 10.103.1, 10.104.1. |
| `def-maximal-and-global-cohen-macaulay-modules` | `def` | Define maximal Cohen--Macaulay and the global localisation convention; state the zero-module convention. | L/NA; Stacks Defs. 10.103.8, 10.103.12. |
| `thm-regular-quotients-and-cohen-macaulayness` | `thm` | Quotienting a Cohen--Macaulay module by a regular sequence preserves Cohen--Macaulayness, with the sourced converse. | L/A; Mustaţă 11.26; Stacks §§10.103--10.104. |
| `thm-associated-primes-of-cohen-macaulay-modules` | `thm` | For a finite Cohen--Macaulay module over a Noetherian local ring, every associated prime is minimal in its support and has quotient dimension equal to the module's dimension; there are no embedded associated primes. | L/A; Mustaţă 11.27; Stacks Lemma 10.103.7. |
| `thm-localisation-of-cohen-macaulay-modules` | `thm` | Cohen--Macaulayness localises for finite modules over Noetherian rings. | L/A; Mustaţă 11.28--11.29; Stacks §10.103. |
| `thm-parameters-and-regular-sequences-in-cohen-macaulay-modules` | `thm` | Every system of parameters of a Cohen--Macaulay local module is a regular sequence, and partial parameter sequences behave likewise. | L/A; Mustaţă 11.30, 11.39; Stacks §§10.103--10.104. |
| `thm-polynomial-extension-of-cohen-macaulay-rings` | `thm` | Finite polynomial extensions of Cohen--Macaulay rings are Cohen--Macaulay in the global localisation sense. | L/A; Mustaţă 11.33; Stacks Lemma 10.104.7. |
| `thm-depth-formula-for-flat-local-homomorphisms` | `thm` | For a flat local map of Noetherian local rings, depth and dimension of the target are the sums of the corresponding invariants of the base and closed fibre; consequently the target is Cohen--Macaulay iff the base and closed fibre are. | L/A; Huneke/Stone Thm. 24; Mustaţă 11.34--11.37. |
| `thm-completion-preserves-cohen-macaulayness` | `thm` | A Noetherian local ring/module is Cohen--Macaulay iff its completion is. | L/A; Huneke/Stone Cor. 27; faithful flatness from CA-13. |

#### Proof strategy, well-definedness, and choice

Ext long exact sequences prove the depth lemma and one-step quotient formula;
prime avoidance produces regular elements until the first nonzero Ext.
Induction along systems of parameters compares the one-step drops in depth and
dimension.  The flat-local formula combines faithful flatness with the closed
fibre sequence.  Dimension of a module always means dimension of its support;
the zero/infinity conventions are fixed in the definitions.  Given finite
sequences and resolutions, the arguments are ZF; associated-prime/maximal-ideal
steps inherit AC/DC exactly from CA-5.

#### B page

| id | kind | content | provenance and locator |
|---|---|---|---|
| `ex-zero-dimensional-rings-cohen-macaulay` | `ex` | Verify that every nonzero zero-dimensional Noetherian local ring is Cohen--Macaulay. | L/A; Mustaţă §11.2. |
| `ex-polynomial-rings-cohen-macaulay` | `ex` | Build polynomial rings from regular sequences and verify Cohen--Macaulayness locally. | L/A; Mustaţă 11.33. |
| `ex-non-cohen-macaulay-local-ring` | `ex` | Compute depth and dimension of a standard non-equidimensional local quotient. | L/A; Mustaţă §11.2 examples. |
| `ex-cohen-macaulay-ring-with-zero-divisors` | `ex` | Analyse a hypersurface quotient showing that Cohen--Macaulay need not mean domain or reduced. | L/A; Huneke/Stone CA II Ch. 2. |
| `ex-maximal-cohen-macaulay-module` | `ex` | Exhibit a nonfree maximal Cohen--Macaulay module over a singular hypersurface. | L/A; Huneke/Stone CA II Ch. 2. |
| `ex-depth-of-a-hypersurface` | `ex` | Compute the depth drop after quotienting a regular local ring by a nonzero element. | L/A; Mustaţă 11.26. |
| `ex-depth-of-a-union-of-planes` | `ex` | Use the Depth Lemma on the coordinate ring of a union of planes. | L/A; Mustaţă §11.2 examples. |

### CA-18. Regular local rings, Auslander--Buchsbaum, and Serre criteria

- **A page id:** `regular-local-rings-and-homological-dimension`
- **B page id:** `regular-local-rings-and-homological-dimension-examples`
- **Requires:** CA-8, CA-10--CA-13 and CA-16--CA-17; HA-5, HA-8, HA-9 and HA-10 for
  resolutions, Ext, projective dimension, Tor, Betti numbers and global
  dimension.  Their definitions are cited, never re-minted.
- **Primary backing:** Mustaţă §§12.1--12.4, 12.1--12.41; Stacks §§10.106,
  10.110--10.111.  Independent check: Huneke/Stone CA II Chs. 1--2.

#### A-page items, in dependency order

| id | kind | statement | provenance and locator |
|---|---|---|---|
| `def-embedding-dimension-and-regular-local-ring` | `def` | Embedding dimension is the residue-field dimension of m/m²; a Noetherian local ring is regular when it equals Krull dimension. | L/NA; Mustaţă 12.1--12.5. |
| `thm-dimension-at-most-embedding-dimension` | `thm` | Krull dimension is at most embedding dimension. | L/A; Krull height theorem; Mustaţă §12.1. |
| `def-regular-system-of-parameters` | `def` | A regular system of parameters is a minimal generating set of the maximal ideal of a regular local ring. | L/NA; Mustaţă §12.1. |
| `thm-quotient-and-lifting-regularity-across-a-regular-element` | `thm` | State the exact minimal-generator hypotheses under which regularity descends to or lifts from a quotient by a regular element. | L/A; Mustaţă 12.7--12.8. |
| `thm-associated-graded-ring-of-a-regular-local-ring` | `thm` | The associated graded ring is the symmetric/polynomial algebra on m/m². | L/A; Stacks Lemma 10.106.1. |
| `thm-regular-local-rings-are-domains-and-cohen-macaulay` | `thm` | Every regular local ring is a domain and Cohen--Macaulay; its regular parameters form a regular sequence. | L/A; Stacks Lemmas 10.106.2--10.106.3; Mustaţă 12.9--12.12. |
| `thm-one-dimensional-regular-local-rings-are-dvrs` | `thm` | The one-dimensional regular local rings are exactly DVRs. | L/A; Mustaţă 12.10; CA-8. |
| `def-regular-noetherian-ring` | `def` | A Noetherian ring is regular when every prime localisation is regular local; prove the maximal-localisation equivalent form. | L/NA; Stacks Def. 10.110.7. |
| `thm-betti-numbers-and-minimal-free-resolutions` | `thm` | Over a Noetherian local ring, Tor with the residue field computes the ranks in a minimal free resolution and detects projective dimension. | L/A; Mustaţă 12.27--12.30; cite HA-5/HA-10 uniqueness. |
| `thm-auslander-buchsbaum-formula` | `thm` | For a nonzero finite module of finite projective dimension over a Noetherian local ring, depth(M)+pd(M)=depth(R). | L/A; Stacks Prop. 10.111.1; Huneke/Stone Thm. 16. |
| `thm-auslander-buchsbaum-serre-regularity-criterion` | `thm` | A Noetherian local ring is regular iff its residue field has finite projective dimension, equivalently iff the ring has finite global dimension; then global dimension equals dim R. | L/A; Stacks Prop. 10.110.5; Mustaţă 12.33. |
| `thm-localisation-and-polynomial-extension-of-regular-rings` | `thm` | Localisations and finite polynomial extensions of regular Noetherian rings are regular. | L/A; Mustaţă 12.34--12.36; Stacks §10.110. |
| `thm-completion-preserves-regular-local-rings` | `thm` | A Noetherian local ring is regular iff its maximal-adic completion is regular. | L/A; Altman--Kleiman Ex. 22.62; Stacks §§10.97, 10.110. |
| `thm-regular-local-rings-are-normal` | `thm` | Every regular local ring is integrally closed. | L/A; Mustaţă 12.38; do not assert UFD without the owed factorisation proof. |
| `def-normal-noetherian-ring` | `def` | A Noetherian ring is normal when every prime localisation is an integrally closed domain. | L/NA; Altman--Kleiman §23 before Thm. 23.20; Stacks §10.37. |
| `def-serre-r-k-and-s-k-conditions` | `def` | Define R_k by regularity at primes of height at most k and S_k by depth at least min(k,dim) at every prime. | L/NA; Altman--Kleiman Thm. 23.20 and preceding definitions; Stacks §10.157. |
| `thm-serre-normality-criterion` | `thm` | A Noetherian ring is normal iff it satisfies (R_1) and (S_2). | L/A; Altman--Kleiman Thm. 23.20; Stacks §10.157. |

#### Proof strategy, well-definedness, and choice

The associated-graded theorem starts from initial forms of minimal maximal-
ideal generators and proves the polynomial map injective by comparing growth.
It gives the domain and regular-sequence consequences.  Auslander--Buchsbaum
uses successive syzygies and the Depth Lemma.  The homological regularity
criterion uses the Koszul resolution for the upper bound and the residue
field's minimal resolution for the converse.  Serre normality combines CA-8's
height-one DVRs with S2 to reconstruct elements from height-one localisations.

Embedding dimension is invariant because m/m² is intrinsic; Betti numbers and
projective dimension are resolution-independent by HA.  Finite supplied
resolutions and the AB induction are ZF.  Constructing an unbounded minimal
resolution can use DC; the existence assertions cited from HA retain that
ledger.  Prime-local normality statements inherit AC where they consume prime
existence.

#### B page

| id | kind | content | provenance and locator |
|---|---|---|---|
| `ex-fields-as-regular-local-rings` | `ex` | Treat fields as the zero-dimensional regular local rings. | L/A; Mustaţă §12.1. |
| `ex-dvrs-as-regular-local-rings` | `ex` | Verify the one-dimensional DVR case through embedding dimension. | L/A; Mustaţă 12.10. |
| `ex-localised-polynomial-ring-regular` | `ex` | Compute a regular system of parameters in a polynomial ring localised at a coordinate prime. | L/A; Mustaţă §12.1. |
| `ex-formal-power-series-ring-regular` | `ex` | Cite the published formal-series construction and calculate its embedding dimension. | L/A; Mustaţă Ch. 12; published `formal-power-series`. |
| `ex-dual-numbers-not-regular` | `ex` | Compare dimension zero with positive embedding dimension. | L/A; Mustaţă §12.1 examples. |
| `ex-cusp-local-ring-not-regular` | `ex` | Compute dimension and cotangent-space dimension at the cusp. | L/A; Huneke/Stone CA II Ch. 1. |
| `ex-betti-numbers-from-a-koszul-resolution` | `ex` | Read Betti numbers and projective dimension from a Koszul resolution. | L/A; Mustaţă 12.27--12.30. |
| `ex-residue-field-infinite-projective-dimension-singular` | `ex` | Use Auslander--Buchsbaum--Serre to prove the residue field of a singular local ring has infinite projective dimension. | L/A; Mustaţă 12.33. |

---

## 7. Global obligation ledgers

### 7.1 Well-definedness ledger

The local obligations above are binding.  The following cross-page checklist
must also be discharged during future authoring.

| Construction | Required check before downstream use |
|---|---|
| module localisation | equivalence relation; operations independent of representatives; zero criterion; universal property |
| support | independence from any presentation; finite generation is present exactly when support is identified with a vanishing set |
| radical and spectrum | radical is an ideal; contraction of a prime is prime; V/D identities quantify over the correct ideal family |
| Zariski topology | all general topology notions are cited from the later topology anchor; quotient/localisation bijections are checked to be homeomorphisms |
| primary decomposition | colon-module notation is typed; nilpotence exponent becomes uniform only by finite generation; no uniqueness of embedded components is claimed |
| integral closure | structure map is explicit; fraction fields appear only for domains; localisation equality has no invented finiteness hypothesis |
| transcendence degree | evaluation-map definition of independence; existence and basis-cardinality invariance proved before the notation is used |
| valuation/value group | quotient order is representative-independent, total and translation-invariant; infinity rules are fixed; uniformisers are noncanonical up to units |
| fractional ideals/class group | boundedness and nonzeroness; products are finite sums of products; colon precedes inverse; principal fractionals form a subgroup; coset product is independent of representatives |
| height/dimension/parameters | zero-ring and infinite-supremum conventions; module dimension means support dimension; parameter ideals are primary to the maximal ideal on the module |
| Rees and associated graded | multiplication respects degrees; filtrations are exhaustive/separated only when asserted; eventual polynomial and multiplicity do not depend on a threshold |
| flatness | every scalar-change tensor map is balanced; ring map/module sides are explicit; low local criteria contain no hidden Tor dependency |
| inverse limits/completion | inverse limit is the compatible submodule of a product; completion maps and operations are componentwise; kernel is the intersection; “complete” includes separated |
| Hensel/Cohen | limits of coefficients are independent of lifts; factor degrees remain fixed; coefficient field maps isomorphically to the residue field; formal substitution is by compatible truncations |
| Koszul complex | differential descends to the exterior quotient, has the correct signs and squares to zero; changes of generators give signed chain maps |
| regular sequences/depth | terminal quotient is nonzero; order dependence is not suppressed; zero-module/infinite-depth conventions are explicit |
| regular local/homological invariants | embedding dimension is intrinsic; Betti numbers and projective dimension cite resolution-independence from homological algebra |

### 7.2 Choice-strength ledger

The library records the strongest principle used by the chosen proof, not a
foundational optimality claim.

| Strength | Results carrying it |
|---|---|
| **ZF** | finite polynomial/graded arguments; module-localisation construction and exactness; finite denominator clearing; Nakayama after the Jacobson unit criterion; finite integral-extension calculations; Noether normalisation for a fixed finite presentation; Zariski's lemma; valuation/DVR arithmetic; fractional-ideal and divisor-group calculations; Rees/Artin--Rees; Hilbert--Serre; finite-stage completion; equational/ideal flatness criteria; Newton simple-root lifting once initial data are supplied; finite Koszul calculations; Auslander--Buchsbaum given a finite resolution |
| **DC sufficient** | translating the sibling finite-generation definition of Noetherianity into maximal-condition/Noetherian induction; primary-decomposition and associated-prime arguments that use that induction; DCC/minimum-condition Artinian arguments; successive compatible lifts in countable Mittag--Leffler systems; recursively constructing an unbounded minimal resolution when HA uses that route |
| **AC (the library's declared granularity)** | the published maximal-ideal theorem; Cohen's criterion by maximal counterexample; radical as intersection of primes; local tests quantified through a chosen maximal ideal; lying over/going up and the chosen going-down route; Nullstellensatz forms; existence of arbitrary transcendence bases; faithfully flat spectral criteria; coefficient-field existence; any algebraic-closure dependency inherited from the Galois block |
| **Countable choice alone** | no result is assigned merely countable choice; whenever a countable recursive construction is noncanonical, this scaffold records DC instead |

### 7.3 Amendments owed to other scaffolds

1. **Abstract algebra — thin PID/UFD page.** The published
   `euclidean-domains-pids-and-unique-factorisation` page has seven items.  It
   defines Euclidean domain, PID and UFD and proves only Euclidean implies PID
   and prime implies irreducible.  It lacks the existence/uniqueness theorem,
   PID implies UFD, gcd/Bézout theory in a PID, irreducible implies prime in a
   UFD, localisation of a UFD, and UFD implies integrally closed.  A future
   abstract-algebra enrichment should add those sourced results.  CA-6, CA-8,
   CA-9 and CA-18 must not cite them until that amendment lands; where possible
   this scaffold uses its own ideal/local proofs instead.
2. **Abstract algebra — reserved seams.** Preserve the exact ids
   `def-noetherian-module`, `def-artinian-module`, `def-noetherian-ring`, the
   Artinian-ring definition, `def-flat-module`, integral element and determinant
   trick promised by `plan-algebra-track-expansion.md`.  The splice must replace
   this scaffold's descriptive references by those stable ids, never mint
   duplicates.
3. **Topology.** Place CA-15 after both the general topology foundation and the
   page establishing compactness terminology.  No change to a topology file is
   requested; the orchestrator owes only the placement reconciliation.
4. **Homological algebra.** Expose stable ids for chain complexes, homology,
   cones, long exact homology, projective resolutions, Ext, projective
   dimension, Tor, minimal-resolution uniqueness and global dimension.  CA-16
   through CA-18 cite these; they do not define them.
5. **Number theory.** Cite CA-8/CA-9 rather than rebuilding DVR/Dedekind/class
   group machinery.  Number theory retains rings of integers, arithmetic
   finiteness of class groups, units, prime splitting and ramification.

### 7.4 Unresolved seam table

| Seam | Resolution required at splice | Blocked material if unresolved |
|---|---|---|
| planned abstract-algebra chain/integrality/flatness ids | reconcile descriptive dependencies with authored stable ids | CA-1, CA-2, CA-6, CA-12 |
| topology and compactness anchor | insert CA-15 after the relevant published companions | all topological claims about Spec, but no low algebraic V/D result |
| `formal-power-series` order 193 | insert CA-14 after it and cite its immutable ids | Cohen quotient theorem and formal-series examples only; CA-13 completion remains unblocked |
| homological-algebra empty `items` arrays | wait for HA-1--HA-10 authorship, then substitute exact ids | CA-16--CA-18 in their entirety |
| mixed-characteristic Cohen structure | build Cohen rings and formal-smoothness/coefficient-ring lifting in a later commission | only the full mixed-characteristic theorem; equicharacteristic CA-14 is complete |
| PID/UFD enrichment | add the amendments in §7.3.1 | only corollaries phrased via element factorisation; ideal-theoretic Dedekind proofs remain available |

### 7.5 Size and provenance audit

Every A list above contains fewer than 60 rows; every B list is smaller.
Every named companion item is an explicit row, not an omnibus placeholder.
Every A statement is literature-derived.  Proofs marked `L/A` alter a
literature route only by decomposing it, substituting published library lemmas,
or making boundary/choice checks explicit.  There is no AI-generated statement
and therefore no AI-generated dependency target.

---

## 8. Canonical-coverage harvest

The result numbers below are the source's own headings.  A consecutive range
is grouped only when every heading in it receives the same named disposition.
“Included” names the scaffold item; “inline” names the item whose proof absorbs
the result; “published” names an immutable or earlier planned dependency;
“deferred” and “out-of-scope” state the specific reason.

### 8.1 Altman--Kleiman, *A Term of Commutative Algebra*

Full text: <https://web.mit.edu/18.705/www/13Ed.pdf> (2013, 266 pages).
Read selected §§1 and 3; §9; selected §§10--11; §12; §13 (13.1)--(13.35) and
(13.43)--(13.51); §14; §15 (15.1)--(15.8) and (15.20)--(15.30); §§16--22;
selected §23; and §§24--25.  A heading is harvested below only when its
numbered range was actually read; no claim of complete §23 coverage is made.

#### §1, selected Chinese-remainder headings

- (1.14)--(1.16), Chinese remainder for finite pairwise-comaximal ideals —
  **included** in `thm-chinese-remainder-theorem-for-comaximal-ideals`, with
  representative independence and the kernel calculation made explicit.

#### §3, selected radical headings

- (3.1), radical ideals — **included** in `def-radical-of-an-ideal`.
- (3.2)--(3.4), ideal/radical laws — **included/inline** in
  `lem-radical-is-an-ideal`.
- (3.5), nilradical/reduction — **included** in
  `def-nilradical-and-reduced-ring`.
- (3.10), radical as intersection of primes — **included** in the named CA-3
  theorem.  No claim is made about intervening unharvested exercises.

#### §9, “Flatness,” (9.1)--(9.28), pp. 50--60

- (9.1)--(9.4), exact/faithfully exact functor tests — **inline** in
  `thm-faithfully-flat-modules-detect-exactness`.
- (9.5), flat and faithfully flat — `def-flat-module` **planned-published
  dependency**; faithful part **included** in
  `def-faithfully-flat-module-and-ring-map`.
- (9.6)--(9.13), sums, free/projective examples, polynomial extension,
  tensor/base change, transitivity and tower descent — **included/inline** in
  `thm-sums-summands-base-change-and-composition-of-flat-modules` and the CA-12
  examples.
- (9.14), flat quotients — **included** in
  `cor-flat-quotients-and-idempotent-ideals`.
- (9.15)--(9.18), faithful criteria and short exact sequences — **included or
  inline** in `thm-faithfully-flat-ring-map-characterisations`, the detection
  theorem and ideal criterion.
- (9.19), filtered colimits preserve flatness — **deferred**: the library has
  no authored filtered-colimit foundation and the result is not load-bearing.
- (9.20)--(9.21), Hom--tensor scalar-extension refinements — **deferred** to a
  finite-presentation/base-change enrichment; not needed downstream here.
- (9.22)--(9.24), finite-free presentation category and Lazard's theorem —
  **deferred** for the same missing filtered-colimit/category machinery.
- (9.25), equational criterion — **included** in
  `thm-equational-criterion-for-flatness`.
- (9.26), ideal criterion — **included** in
  `thm-ideal-criterion-for-flatness`.
- (9.27), fraction field flat/nonprojective — **included** on CA-12B.
- (9.28), principal-ideal-ring annihilator criterion — **out-of-scope**: a
  specialised classification not used by the core track.

#### §10, selected integrality headings

- (10.11)--(10.12), Jacobson radical/unit criterion and Nakayama — **included**
  CA-2.
- (10.19), integral ring extension — **included** in CA-6's definition.
- (10.20), finite-module characterisation — **included** CA-6.
- (10.21), determinant-trick intermediary — **planned-published** on the
  abstract-algebra chain page and **inline** CA-6.
- (10.22), finitely generated integral algebra is finite — **included** CA-6.
- (10.23), transitivity — **included** CA-6.
- (10.24), integral closure — **included** CA-6.

#### §11, selected ring-localisation heading

- (11.20), prime ideals of a localisation — **already-published** on
  `the-field-of-fractions-and-localisation` and **cited** by CA-3.  The ring
  localisation construction and universal property elsewhere in §11 are also
  **already-published**, not re-minted here.

#### §12, “Localization of Modules,” (12.1)--(12.27), pp. 72--76

- (12.1)--(12.2), module fractions/canonical maps — **included** in
  `def-localisation-of-a-module` and its well-definedness lemma.
- Thm. 12.3, universal property — **included** in
  `thm-universal-property-localisation-of-a-module`.
- (12.4)--(12.6), standard localisations and filtered-colimit description —
  standard cases **inline** in the universal property; filtered colimits
  **deferred** to category/homological algebra.
- Exs. 12.7--12.8, finite-module vanishing and localisation proof of Nakayama
  — **included/inline** on CA-2.
- (12.9)--Cor. 12.13 and Ex. 12.14, functoriality, adjunction, sums/cokernels,
  tensor description and tensor compatibility — **included/inline** in the
  CA-2 universal property, direct-sum and tensor items.
- Ex. 12.15, Fitting ideals — **deferred**: Fitting ideals are absent and not
  needed for this commission's downstream theorems.
- Def. 12.16--Ex. 12.19, saturation and S-torsion — **inline** in the zero,
  exactness and primary-localisation arguments.
- Thm. 12.20, exactness — **included** in
  `thm-localisation-of-modules-is-exact`.
- Cor. 12.21, localisation flat — **included** on CA-12.
- Cor. 12.22, quotients — **included** in CA-2's quotient/sum theorem.
- Cor. 12.23, residue/fraction fields — **already-published** as
  `cor-residue-field-of-a-localisation-at-a-prime` and the fraction-field page.
- Prop. 12.24, spreading finite generators/free bases — **inline** in CA-2's
  local vanishing and CA-12's finite local-free theorem.
- Prop. 12.25, localising Hom — **included** in
  `thm-localisation-of-hom-for-finitely-presented-modules`.
- Exs. 12.26--12.27, failure without finite source and failure for products —
  **included** as companion warnings under CA-2.

#### §13, “Support,” read (13.1)--(13.35), (13.43)--(13.51), pp. 77--83

- (13.1)--(13.19), spectrum, contraction, quotient/localisation spectra,
  irreducibility and minimal primes — algebraic portions **included** CA-3;
  topological portions **included** CA-15.
- Prop. 13.20 and Exs. 13.21--13.22, quasi-compactness and finite denominator
  clearing — **included** CA-15 and **inline** in CA-2 local criteria.
- Exs. 13.23--13.24, absolutely flat/Boolean spectra — **deferred** to a
  von-Neumann-regular-ring enrichment; not used here.
- Ex. 13.25, Stone representation — **out-of-scope**: substantial Boolean
  duality/topology unrelated to the local-algebra spine.
- Def. 13.26 and Prop. 13.27 — **included** in CA-2 support definition,
  short-exact and annihilator items.
- Def. 13.28--Prop. 13.30, nilpotence on modules and tensor support — module
  nilpotence **inline** CA-5; tensor-support identity **included** CA-2.
- Exs. 13.31--13.34, quotient/base-change support and nonclosed support of
  Q/Z — **included** on CA-2B/CA-15B.
- Prop. 13.35, local zero criterion — **included** CA-2.
- Prop. 13.43 and Ex. 13.44, exactness local and local generators —
  **included** in CA-2 local exactness and Nakayama corollaries.
- Prop. 13.45, semilocal patching — **inline** in CA-12 finite local-free
  arguments.
- Prop. 13.46 and Exs. 13.47--13.48, flatness local, flat local maps faithful,
  absolute flatness — first two **included** CA-12; absolute flatness
  **deferred** to the regular-ring enrichment.
- Def. 13.49, Prop. 13.50, Thm. 13.51, finite presentation/local freeness and
  finite projectives — **included/inline** CA-12.

#### §14, “Krull--Cohen--Seidenberg Theory,” (14.1)--(14.11), pp. 84--87

- Lem. 14.1 and Def. 14.2, field criterion and “lies over” — **included/inline**
  in CA-6.
- Thm. 14.3(1)--(4), maximality, incomparability, lying over and going up —
  **included** as the four CA-6 results, with image V(kernel) for arbitrary
  maps.
- Exs. 14.4--14.6, local uniqueness, partial-localisation warning and
  `k[X^2]⊂k[X]` — **included** on CA-6B.
- Lem. 14.7 and Prop. 14.8, monic factors and minimal-polynomial coefficients
  — **included/inline** in CA-6's normal-domain coefficient lemma.
- Thm. 14.9, integral going down — **included** CA-6.
- Lem. 14.10, minimal primes/zero divisors — **inline** CA-5/CA-10.
- Thm. 14.11, flat going down — **included** CA-12.

#### §15, selected (15.1)--(15.8), (15.20)--(15.30), pp. 88--103

- Lem. 15.1, normalisation — **included** in
  `thm-noether-normalisation`; its substitutions are the preceding lemma.
- Exs. 15.2--15.3, finite-field obstruction and affine curves — **included**
  on CA-7B.
- Thm. 15.4, Zariski's lemma — **included** CA-7.
- Cors. 15.5--15.6, point maximal ideals and n generators — point form
  **included**; generator corollary **inline** CA-7/CA-10.
- Thm. 15.7 and Ex. 15.8, algebraic and geometric/Rabinowitsch forms —
  **included** in CA-7's affine, strong and Rabinowitsch items.
- (15.20)--Prop. 15.22, Jacobson definitions/equivalences/localisation —
  **included/inline** CA-7.
- Exs. 15.23--15.24, Jacobson spaces/dense closed points — **included** CA-15.
- Lem. 15.25 and Thm. 15.26, technical one-generator step/generalised
  Nullstellensatz — **inline/included** in CA-7 finite-type Jacobson theorem.
- Exs. 15.27--15.30, formal-series failure, arithmetic finite-field form,
  integral Jacobson algebras, localisation/direct-limit counterexamples —
  first and last **included** as boundary examples; arithmetic form
  **out-of-scope** for number theory; integral-algebra clause **inline** CA-7.

#### §16, chain conditions, (16.1)--(16.30), pp. 96--107

- (16.1)--(16.6), Noetherian/Artinian definitions, exact sequences and finite
  sums — **planned-published** on `chain-conditions-and-semisimple-modules`.
- (16.7), convention comparison — **inline** in
  `rem-noetherian-conventions-and-choice`.
- (16.8)--(16.9), finite presentations and quotient/localisation permanence —
  **inline** in the corresponding CA-1 items.
- (16.10), Cohen's criterion — **included** in
  `thm-cohen-noetherian-criterion`; (16.11), its maximal-bad-ideal lemma —
  **inline** there.
- (16.12), Hilbert basis — **split** among the two leading-coefficient lemmas
  and `thm-hilbert-basis-theorem`.
- (16.13), finite-variable polynomial rings — **included** in its CA-1
  corollary.
- (16.14), finite-type Noetherian algebras — **included** in its CA-1
  corollary.
- (16.15)--(16.18), permanence, presentations and finite modules — **inline**
  in CA-1's localisation/quotient, finite-presentation and module-finite items.
- (16.19), finite module algebras — **included** in
  `thm-module-finite-algebra-over-noetherian-ring-is-noetherian`.
- (16.20), finite Hom — **included** in
  `cor-hom-of-finite-modules-is-finite-over-a-noetherian-ring`.
- (16.21), Artin--Tate — **included** in `thm-artin-tate-lemma`.
- (16.22)--(16.23), applications and non-Noetherian/subring boundaries —
  **included** on CA-1B.
- (16.24), graded Noetherianity — **inline** in Hilbert--Serre on CA-11.
- (16.25), unrestricted formal-series Noetherianity — **deferred** to the
  published formal-series/completion enrichment; not load-bearing here.
- (16.26)--(16.30), chain, infinite-polynomial, finite-algebra and Artin--Tate
  exercises — **included/inline** on CA-1B.

#### §17, associated primes, (17.1)--(17.21), pp. 108--111

- (17.1)--(17.2), associated primes/annihilators — **included/inline** in
  `def-associated-prime-of-a-module`.
- (17.3)--(17.4), support and elementary exact-sequence facts — **inline** in
  the support comparison and short-exact theorem.
- (17.5)--(17.6), the two exact-sequence inclusions — **included** in
  `thm-associated-primes-in-a-short-exact-sequence` without finite hypotheses.
- (17.7)--(17.8), cyclic quotients and minimal support — **inline** in
  `thm-minimal-support-primes-are-associated`.
- (17.9), unrestricted Bourbaki assassin separation — **deferred**: it uses
  full choice and is unnecessary for finite Noetherian modules.
- (17.10)--(17.11), minimal support/associated comparison — **included/inline**
  in CA-5 and the finite-minimal-prime theorem.
- (17.12), maximal annihilators/zero divisors — **included** in the two named
  CA-5 results.
- (17.13), existence — **included** in
  `thm-existence-of-associated-primes`.
- (17.14)--(17.16), localisation — **included/inline** in
  `thm-associated-primes-localise` and CA-5B.
- (17.17)--(17.19), zero divisors and support refinements — **included/inline**
  in the zero-divisor theorem and companions.
- (17.20), prime filtration — **inline** in the finiteness proof; (17.21),
  finiteness — **included** in `thm-finiteness-of-associated-primes`.

#### §18, primary decomposition, (18.1)--(18.31), pp. 112--117

- (18.1)--(18.2), singleton-associated-prime definition and comparison —
  **inline** as the alternate convention beside
  `def-primary-submodule-and-primary-ideal`.
- (18.3)--(18.4), prime radical and (\mathfrak p)-primary notation —
  **included/inline** in the radical theorem.
- (18.5)--(18.9), injectivity/nilpotence/Ass characterisations — **included**
  in `thm-primary-submodule-characterisations`.
- (18.10), same-radical intersections — **included** in the named lemma.
- (18.11)--(18.16), decomposition, irredundancy, distinct radicals and
  isolated/embedded components — **included** in the decomposition definition.
- (18.17)--(18.19), localisation and contraction of components —
  **included/inline** in isolated-component uniqueness.
- (18.20), first uniqueness — **included** in its named theorem.
- (18.21), existence — **split** into the maximal-nondecomposable lemma and
  Lasker--Noether theorem.
- (18.22)--(18.24), refinements — **inline** in existence and uniqueness.
- (18.25), second uniqueness — **included** in its named theorem.
- (18.26)--(18.31), monomial, integer, zero-divisor, cyclic, nonunique embedded
  and localisation exercises — **included**, respectively, on CA-5B.

#### §19, length, (19.1)--(19.18), pp. 118--120

- (19.1)--(19.3), composition series, refinement and well-defined length —
  **planned-published** on `chain-conditions-and-semisimple-modules`; if that
  live page omits length, the future build must move these definitions to CA-4.
- (19.4), exact-sequence filtration — **inline** in additivity; (19.5),
  additivity — **included** in its named theorem.
- (19.6), finite-length criterion — **included** in
  `thm-finite-length-module-characterisation`.
- (19.7)--(19.13), local finite-length, support and localisation refinements —
  **inline** in CA-4's local/product structure and length results.
- (19.14)--(19.16), DVR/Hilbert--Samuel length cases — **inline** in CA-8 and
  CA-11.
- (19.17)--(19.18), finite/local length computations — **included** on CA-4B
  and CA-11B.

#### §20, graded objects and Artin--Rees, (20.1)--(20.20), pp. 121--129

- (20.1)--(20.4), graded rings/modules, homogeneous pieces and shifts —
  **included/inline** in `def-graded-ring-and-graded-module`.
- (20.5), Hilbert function/series — **included** in its definition.
- (20.6)--(20.7), finite differences and denominator induction — **inline** in
  Hilbert--Serre.
- (20.8)--(20.10), rational series and eventual polynomiality — **included**
  in `thm-hilbert-serre-theorem`, with standard degree-one hypotheses explicit.
- (20.11), degree/leading coefficient — **inline** in Hilbert--Samuel dimension.
- (20.12), graded examples — **included** on CA-11B.
- (20.13), associated graded objects — **included** in their definition.
- (20.14)--(20.16), filtration/Rees algebra/Rees module — **included/inline** in
  `def-rees-algebra-and-rees-module`.
- (20.17), stable filtrations and Rees finiteness — **included** in the named
  lemma.
- (20.18), Artin--Rees and induced topology — **included** in the theorem and
  its corollary.
- (20.19)--(20.20), Krull intersection and Jacobson/local consequence —
  **included/inline** in `thm-krull-intersection-theorem` and CA-11B.

#### §21, dimension and Hilbert--Samuel theory, (21.1)--(21.19), pp. 130--136

- (21.1), Hilbert--Samuel function, polynomial and multiplicity —
  **included** in the corresponding CA-11 definition/theorem/definition.
- (21.2), principal ideal theorem — **included** on CA-10, using Milne's
  independent elementary route to preserve page order.
- (21.3), systems of parameters — **included** in the CA-10 definition.
- (21.4), degree/dimension/parameter theorem — **included** in CA-11's
  Hilbert--Samuel dimension and module-parameter theorems, after Artin--Rees.
- (21.5)--(21.8), radical generators, parameter drop, dimension induction and
  local/global comparison — **inline** in CA-10/CA-11.
- (21.9), polynomial dimension — **included** in the CA-10 theorem.
- (21.10), field-polynomial dimension — **included** in its corollary.
- (21.11)--(21.12), affine lower/upper bounds — **inline** in the affine-domain
  dimension theorem.
- (21.13), affine dimension/transcendence degree — **included** CA-10.
- (21.14), affine height formula — **inline** in its named CA-10 theorem.
- (21.15), equal-length affine chains — **included** in its corollary.
- (21.16)--(21.18), parameter, affine and Hilbert--Samuel computations —
  **included** on CA-10B/CA-11B.
- (21.19), noncatenary boundary — **included** in `rem-catenarity-boundary`;
  excellent/catenary-ring theory is out of scope.

#### §22, “Completion,” (22.1)--(22.81), pp. 137--176

- (22.1), filtration topology, Cauchy sequences, separatedness, completeness
  and completion — **included** in `def-filtration-and-adic-filtration`,
  `def-adic-topology-on-a-module`,
  `def-separated-and-complete-filtered-module` and
  `def-adic-completion-of-a-module`.
- (22.2), formal power series as completion — **already-published** on
  `formal-power-series`; its application is CA-18B.
- (22.3)--(22.4), kernel, separated quotient and functoriality — **inline** in
  `thm-kernel-and-universal-property-of-adic-completion`.
- (22.5), inverse systems/limits — **included** in
  `def-inverse-system-and-inverse-limit-of-modules` and its universal-property
  theorem.
- (22.6), left exactness — **included** in
  `thm-inverse-limits-are-left-exact`.
- (22.7), Mittag--Leffler exactness — **included** in its definition and
  `thm-exactness-of-inverse-limits-under-mittag-leffler`.
- (22.8), Cauchy completion equals inverse-limit completion — **inline** in
  `def-adic-completion-of-a-module`.
- (22.9), inverse limits need not preserve surjections — **included** on
  CA-13B as `ex-completion-not-exact-without-finiteness`.
- (22.10), the (arprojlim^1) obstruction — **deferred** to homological
  algebra; ordinary Mittag--Leffler exactness is sufficient here.
- (22.11)--(22.13), technical exactness and canonical-map lemmas — **inline**
  in `thm-completion-is-exact-on-finite-modules` and the completion definition.
- (22.14), local/semilocal behaviour — **inline** in
  `thm-completion-of-a-noetherian-local-ring` and **included** on CA-13B.
- (22.15), extension of maps — **inline** in the completion universal property.
- (22.16)--(22.17), associated graded/induced adic topology — **inline** in
  `cor-induced-and-intrinsic-adic-filtrations-are-equivalent` and completion
  exactness.
- (22.18), exactness of completion — **included** in
  `thm-completion-is-exact-on-finite-modules`.
- (22.19), tensor comparison — **included** in
  `thm-completion-as-extension-of-scalars`.
- (22.20)--(22.21), completed submodules, quotients, powers and equivalent
  filtrations — **included/inline** in
  `cor-completion-commutes-with-finite-quotients-and-submodules`.
- (22.22)--(22.23), completed flat modules and associated-graded criteria —
  **inline** in completion flatness/exactness.
- (22.24)--(22.26), finite completeness and Noetherianity — **included** in
  `thm-finite-modules-over-complete-noetherian-rings-are-complete` and
  `thm-noetherianity-of-adic-completion`.
- (22.27), formal-series Noetherian/local/domain/regular properties — the
  construction is **already-published**; regularity is **included** on CA-18B.
- (22.28)--(22.29), formal-series and 2-adic computations — first
  **already-published**, second **included** on CA-13B.
- (22.30), Mittag--Leffler and the derived obstruction — ordinary part
  **inline** in the ML theorem; derived notation **deferred** to homological
  algebra.
- (22.31), complete-ring units — **included** in
  `prop-units-in-an-adically-complete-ring`.
- (22.32)--(22.34), density, closures and closed maximals — **inline** in the
  completion universal/local theorems; closures are **included** on CA-13B.
- (22.35)--(22.37), Jacobson/Zariski-ring criteria, faithful completion and
  support form of Krull intersection — **included/inline** in
  `thm-faithful-flatness-of-jacobson-adic-completion` and
  `thm-krull-intersection-theorem`.
- (22.38), semilocal product completion — **included** on CA-13B.
- (22.39)--(22.40), associated-graded domain and normality criteria —
  **deferred** to the regular/normal local-ring extension; not used by the
  completion spine.
- (22.41), length under completion — **inline** in
  `thm-completion-preserves-dimension-and-hilbert-samuel-data`.
- (22.42)--(22.43), iterated completions — **included** on CA-13B.
- (22.44), formal-series topology — **already-published** on
  `formal-power-series`.
- (22.45), non-zero-divisors under completion — **inline** in completion
  preservation of Cohen--Macaulayness/regularity.
- (22.46), completed domain may cease to be a domain — **included** on CA-13B.
- (22.47), finite products — **inline** in the inverse-limit construction.
- (22.48), nonexact completion without finiteness — **included** on CA-13B.
- (22.49), nonzero derived inverse limit — **deferred** to homological algebra.
- (22.50)--(22.53), annihilators, quotient/submodule correspondence and
  support/maximals after completion — **inline** in the tensor, quotient and
  faithful-flat completion items.
- (22.54), universal property — **included** in
  `thm-kernel-and-universal-property-of-adic-completion`.
- (22.55)--(22.58), formal-series universal property and Cohen structure I/II
  — **included/inline** in CA-14's formal-series universal property,
  equicharacteristic Cohen theorem and regular power-series corollary.
- (22.59), automorphisms from parameter changes — **out-of-scope**: a
  nonessential coordinate-change exercise.
- (22.60), finite parameter power-series subring — **included** in
  `thm-complete-local-domain-finite-over-regular-power-series-subring`.
- (22.61)--(22.62), preservation of parameters, dimension, multiplicity and
  regularity — **included/inline** in CA-13's Hilbert--Samuel preservation and
  CA-18's regularity-preservation items.
- (22.63), infinitesimal lifting characterisation of regularity — **deferred**:
  formal smoothness is absent.
- (22.64)--(22.66), regularity descent and formal-series/completed flatness —
  **inline** in CA-12, CA-13 and CA-18; formal-series construction is
  **already-published**.
- (22.67), analytic local maps — **out-of-scope** for this algebraic spine.
- (22.68), principal ideals/non-zero-divisors under completion — **inline** in
  CA-18 completion preservation.
- (22.69), complete Nakayama — **included** in
  `thm-complete-nakayama-lemma`.
- (22.70), completed quasi-finite algebras — **deferred** to Zariski-main
  applications in algebraic geometry.
- (22.71), non-Noetherian pathology — **included** as a CA-13 boundary
  example.
- (22.72), associated-graded freeness criterion — **inline** in the finite
  flat/local free theorem.
- (22.73), Henselian pairs, uniqueness and quotients — **included** in CA-14's
  Henselian definition, uniqueness and quotient items.
- (22.74), complete examples and (\mathbb Z_{(p)}) counterexample —
  **included** on CA-14B.
- (22.75)--(22.76), Hensel lemma and root/factor consequences — **included**
  in CA-14's complete-pair and equivalent-form items.
- (22.77)--(22.79), finite/integral algebra formulations — elementary
  quotient/factor clauses **inline** in CA-14; étale/quasi-finite forms
  **deferred** to algebraic geometry.
- (22.80)--(22.81), equicharacteristic setup and coefficient fields —
  **included** in CA-14's equicharacteristic/coefficient-field definition and
  existence theorem.

#### §23, “Discrete Valuation Rings,” selected headings

- (23.1), valuations, DVRs, uniformisers, normal forms and ideals —
  **included** across CA-8's corresponding definitions and theorems.
- Ex. 23.2, (k[[t]]) and the (p)-adic example — first
  **already-published**/companion; second **included** on CA-8B.
- Lem. 23.3, principal maximal ideal plus separatedness implies DVR —
  **inline** in `thm-equivalent-characterisations-of-a-dvr`.
- Thm. 23.10, DVR characterisations — **included** in that theorem.
- Thm. 23.19, normal domain as intersection of height-one localisations —
  **deferred** to a divisor-theory enrichment after CA-10; it is not needed for
  the Dedekind spine.
- Thm. 23.20, Serre (R_1+S_2) normality — **included** after homological
  algebra in CA-18.

#### §24, “Dedekind Domains,” (24.1)--(24.21), pp. 148--151

- Def. 24.1 — **included** in `def-dedekind-domain`.
- Ex. 24.2, PIDs/DVRs — **included** on CA-9B.
- Ex. 24.3, quadratic integer rings — **out-of-scope** for number theory.
- Ex. 24.4, nonsingular affine curves — **deferred** to algebraic geometry.
- Exs. 24.5--24.6 and Prop. 24.7, dimension/localisation/local-DVR criterion —
  **included/inline** in CA-9's localisation and characterisation theorems.
- Ex. 24.8, distributive ideal lattice — **included** as a cheap CA-9B
  companion, not load-bearing.
- Prop. 24.9, dimension-one primary factorisation — **inline** in unique ideal
  factorisation.
- Thm. 24.10, classical ideal theory — **included** in
  `thm-unique-factorisation-of-ideals-in-dedekind-domains`.
- Cor. 24.11, primary ideals are radical powers — **inline** in that theorem.
- Ex. 24.12, semilocal Dedekind domains are PIDs — **included** on CA-9B.
- Ex. 24.13, quotient ideals principal/ideals two-generated — two-generator
  part **included**; quotient part **inline** as a companion.
- Lem. 24.14, Artin independence — **inline** in the source trace proof; the
  scaffold uses the intrinsic trace-pairing route.
- (24.15), trace pairing — **included/inline** in
  `lem-trace-pairing-for-a-finite-separable-extension`.
- Lem. 24.16--Thm. 24.17, traces of integral elements and finite integral
  closure — **included/inline** in the finite-closure theorem.
- Cor. 24.18, closure of a Dedekind domain is Dedekind — **included**.
- Thm. 24.19, rings of algebraic integers — **out-of-scope** for number theory.
- Thm. 24.20, affine characteristic-zero normalisation finiteness —
  **deferred** to a later affine normalisation corollary; not needed here.
- (24.21), inseparable/Akizuki pathology — **included** as a boundary remark:
  separability is essential to the stated module-finiteness theorem.

#### §25, “Fractional Ideals,” (25.1)--(25.22), pp. 152--156

- Def. 25.1 — **included** in the fractional-ideal/product/colon definitions.
- Ex. 25.2, principal modules and tensor/product/colon/Hom maps — **inline** in
  well-definedness and the rank-one-projective theorem.
- Prop. 25.3, boundedness/finite generation — **inline** in
  `def-fractional-ideal` and its operations lemma.
- Lem. 25.4, localisation of products/colons — **inline** in the local
  invertibility criterion.
- Def. 25.5--Ex. 25.6, locally principal ideals and tensor/product comparison
  — **inline** in `thm-invertible-ideal-characterisations`.
- (25.7)--Prop. 25.8, invertibility and the unique colon inverse —
  **included/inline** in `def-invertible-fractional-ideal` and its proof
  obligations.
- Ex. 25.9, quotients by invertibles/product inverses — **inline** in the class
  group construction.
- Lemmas 25.10--25.11, finite/local principal criteria — **inline** in the
  invertible-ideal characterisation.
- Ex. 25.12, UFD invertibles are principal — **included** on CA-9B, conditional
  on the owed UFD enrichment.
- Thm. 25.13, invertible iff finite locally principal — **included**.
- Thm. 25.14, signed prime factorisation — **included** in CA-9's valuation and
  fractional ideal factorisation items.
- Ex. 25.15, PID iff Dedekind and UFD — **inline** in the class-group
  characterisation; its UFD clause consumes the owed amendment.
- (25.16)--Prop. 25.19, invertible modules/local free rank one —
  **included/inline** in the rank-one projective theorem.
- Thm. 25.20, Dedekind/field iff nonzero ideals are invertible/projective/finite
  flat — invertible/projective clauses **included** CA-9; flat clause
  **included** CA-12.
- Thm. 25.21, torsion-free modules are flat — **included** at the CA-9/CA-12
  boundary with arbitrary-rank choice flagged.
- (25.22), Picard group — **included** in
  `thm-ideal-class-group-is-the-picard-group`.

### 8.2 Milne, *A Primer of Commutative Algebra*

Full text: <https://www.jmilne.org/math/xnotes/CA.pdf> (v4.03, 2020, 113
pages).  The exact ranges read were §3, Props./Thms. 3.1--3.16; §5,
5.10--5.17; §§6--8; §11; §§13--14; §16; §§18--21; and §24.  Blank promised
chapters §§25 and 28 are not evidence for any item.

#### §3, “Noetherian Rings,” (3.1)--(3.16), pp. 9--14

- Props. 3.1--3.3, chain-condition equivalences and exact sequences —
  **planned-published** on the abstract-algebra chain page.
- Props. 3.4--3.5, finite modules/permanence — **included/inline** CA-1.
- (3.6), examples — **included** CA-1B.
- Thm. 3.7, Hilbert basis — **included** with its polynomial/finite-type
  corollaries CA-1.
- Cor. 3.8, finite presentation — **included** in the corresponding CA-1
  corollary.
- Lem. 3.9, Nakayama — **included** CA-2; (3.10)--(3.13), determinant/generator
  consequences — **inline** there, citing the planned determinant trick.
- Def. 3.14, dimension/height — **included** CA-3.
- (3.15), Krull-intersection preliminary — **inline**; Thm. 3.16 —
  **included** CA-11.

#### §5, module localisation, (5.10)--(5.17), pp. 21--23

- Prop. 5.10, universal property — **included** CA-2.
- Prop. 5.11, exactness — **included** CA-2.
- Ex. 5.12, principal localisation — **included** on CA-2B.
- Prop. 5.13, finite vanishing spreads — **included** in
  `cor-finite-module-locally-zero-near-a-prime`.
- Prop. 5.14--Cor. 5.15, product/local zero test — **inline/included** in
  CA-2's zero/map theorem.
- Prop. 5.16, exactness at maximals — **included** in the local exactness
  theorem.
- Cor. 5.17, local injective/surjective/isomorphism tests — **included** in the
  local map theorem.

#### §6, integral dependence, (6.1)--(6.16), pp. 24--28

- Prop. 6.1, determinant trick — **planned-published** in abstract algebra.
- Prop. 6.2--Cor. 6.3, one/finitely many integral generators — **included** in
  CA-6's finite-module characterisations.
- Prop. 6.4, transitivity — **included** CA-6.
- Thm. 6.5, integral elements form a subring — **planned-published** in
  abstract algebra.
- Def. 6.6, integral closure — **included** CA-6.
- Prop. 6.7--Cor. 6.8, clearing denominators/fraction field — **inline** in the
  integral-closure proof.
- Def. 6.9, normal domain — **included** in CA-6's closure definition.
- Prop. 6.10, UFDs are normal — **deferred** to the owed PID/UFD enrichment.
- Prop. 6.11--Lem. 6.13, minimal polynomials/monic factors — **included/inline**
  in CA-6's coefficient lemma.
- Prop. 6.14--Cor. 6.15, integral closure/normality localise — **included** in
  CA-6's localisation theorem.
- Prop. 6.16, normality is prime/maximal-local — **included** in
  `thm-normality-is-local-for-domains`.

#### §7, Cohen--Seidenberg theorems, (7.1)--(7.12), pp. 29--32

- Prop. 7.1, field criterion — **included** CA-6.
- Rem. 7.2--Cor. 7.3, units/maximality — **inline/included** in maximal-ideal
  contraction.
- Cor. 7.4, incomparability — **included** CA-6.
- Prop. 7.5, lying over — **included** CA-6.
- Thm. 7.6--Cor. 7.7, going up/chains — **included/inline** CA-6.
- Aside 7.8, failure without integrality — **included** CA-6B.
- unnumbered definition and Prop. 7.9, integrality over an ideal — **inline**
  in going down.
- Prop. 7.10, coefficients in a radical — **inline** there.
- Thm. 7.11--Cor. 7.12, going down/chains — **included/inline** CA-6.

#### §8, Noether normalisation, (8.1)--(8.5), pp. 33--34

- Thm. 8.1, normalisation — **included** CA-7.
- Lemmas 8.2--8.3, separated-power elimination — **inline** in the
  change-of-variables lemma.
- Rem. 8.4, infinite-field linear substitutions — **inline** there.
- Aside 8.5, flat normalisation/CM — **deferred** to the post-homological
  Cohen--Macaulay block.

#### §11, “Flatness,” (11.1)--(11.22), pp. 43--50

- (11.1), tensor right exactness — **planned-published** on
  `tensor-products-of-modules` and **inline** in the ideal criterion.
- (11.2), flat/faithfully flat definitions — flatness **planned-published**;
  faithful flatness **included** CA-12.
- (11.3), sums, summands and free modules — **included/inline** in CA-12 and
  the planned tensor page.
- (11.4)--(11.5), quotient cautions and localisations — **included** in CA-12's
  idempotent quotient theorem/localisation theorem and companions.
- (11.6), direct limits/Lazard — **deferred**: filtered-colimit category
  machinery is unavailable and this is not load-bearing.
- (11.7)--(11.8), faithful detection/nonzero-module criterion — **included/
  inline** in CA-12's detection and characterisation theorems.
- (11.9)--(11.10), descent of flatness and finite generation — **included** in
  `thm-faithfully-flat-descent-of-flatness`.
- (11.11), Amitsur equaliser — **deferred** to descent/Amitsur complexes.
- (11.12), faithful injectivity/equaliser — injectivity **included** CA-12;
  full equaliser **deferred** with (11.11).
- (11.13)--(11.15), base change and localisation — **included/inline** CA-12.
- (11.16)--(11.17), local criteria at maximal ideals — **included/inline** in
  `thm-flatness-is-local`.
- (11.18)--(11.19), maximal-ideal and spectrum criteria for faithful flatness —
  **included** in the characterisation theorem.
- (11.20), flat going down — **included** CA-12.
- (11.21), generic flatness — **deferred** to finite-type algebraic families;
  not needed for foundational flatness.
- (11.22), finite principal-open faithful cover — **included** on CA-12B.

#### §13, Nullstellensatz, (13.1)--(13.11), pp. 58--61

- Thm. 13.1, Zariski's lemma — **included** CA-7.
- Cors. 13.2--13.3, residue/intermediate fields — **inline** in CA-7's weak
  and affine-algebra point forms.
- Rem. 13.4, closed points/(k)-points — **inline** there.
- Aside 13.5, uncountable-field shortcut — **out-of-scope** as a nonuniform
  cardinality-only proof; the general proof is included.
- Lem. 13.6--Prop. 13.7, one-polynomial localisation obstruction — **inline**
  in Rabinowitsch/generalised Nullstellensatz.
- Thm. 13.8, common zero in an algebraic closure — **included** in the weak
  form.
- Cor. 13.9, algebraically closed point maximals — **included** CA-7.
- Thm. 13.10, strong/Rabinowitsch form — **included** in the trick and strong
  theorem.
- Prop. 13.11, radical as intersection of affine maximals — **included** in
  `thm-affine-algebra-nullstellensatz`.

#### §14, “The Spectrum of a Ring,” pp. 63--70

- Prop. 14.1, (V)-identities — algebraic part **included** CA-3; topology
  **included** CA-15.
- Lem. 14.2--Prop. 14.3, idempotents and decompositions — **included** CA-15.
- Prop. 14.4, radical ideals/closed sets, closed points, compactness and
  Noetherian spectra — **included/inline** CA-15.
- Def. 14.5--Prop. 14.6, irreducibility/prime closed sets — **included** CA-15.
- Prop. 14.8--Cor. 14.9, finite unique irreducible components/minimal primes —
  **included** CA-15.
- Cor. 14.10, connected components — **included/inline** CA-15.
- Any scheme/sheaf continuation — **out-of-scope** for algebraic geometry.

#### §16, “Artinian Rings,” (16.1)--(16.8), pp. 75--77

- Prop. 16.1, primes maximal — **included**; its domain argument is the CA-4
  field lemma.
- Cor. 16.2, nilradical equals Jacobson radical — **inline** CA-4.
- Prop. 16.3, finitely many maximals — **included** CA-4.
- Prop. 16.4, nilradical nilpotent — **included** CA-4.
- Lem. 16.5, product/maximal-zero criterion — **inline** in the product proof.
- Thm. 16.6, Artinian iff Noetherian of dimension zero — **included** in the
  Artinian/prime characterisations.
- Thm. 16.7, finite product of localisations — **included** CA-4.
- Prop. 16.8, principal-maximal local case — **inline** in CA-4/CA-8.

#### §18, affine dimension, pp. 84--89

- (18.1)--(18.4), normalisation-to-chain preliminaries — **inline** CA-10.
- Thm. 18.5, affine dimension/transcendence degree — **included** CA-10.
- (18.6)--(18.7), height induction — **inline** in the affine dimension
  formula.
- Thm. 18.8, height/transcendence formula and equal affine chains —
  **included** in the two corresponding CA-10 items.  No general catenarity
  converse is inferred.

#### §19, “Primary Decomposition,” (19.1)--(19.19), pp. 89--93

- Prop. 19.1, maximal annihilator/existence — **included** CA-5.
- (19.2), basic support facts — **inline** CA-5.
- Props. 19.3--19.5, finiteness, localisation, zero divisors — **included**
  CA-5.
- Props. 19.6--19.8, primary radicals/intersections/characterisations —
  **included** CA-5.
- (19.9), minimal-decomposition reduction — **inline**.
- Thms. 19.10--19.11, uniqueness and Lasker--Noether — **included** CA-5.
- (19.12)--(19.19), integer/monomial/localisation/nonuniqueness exercises —
  **included/inline** on CA-5B; geometric interpretations are **deferred** to
  algebraic geometry.

#### §20, Dedekind domains, (20.1)--(20.17), pp. 93--96

- Ex. 20.1, (\mathbb Z_{(p)}) — **included** CA-8B.
- Prop. 20.2, DVR characterisation — **included** CA-8.
- Def. 20.3, Dedekind domain — **included** CA-9.
- Props. 20.4--20.5--Cor. 20.6, localisation/local DVRs — **included** CA-9.
- Thm. 20.7, unique ideal factorisation — **included** CA-9.
- Rem. 20.8, valuation exponents — **inline** in CA-9's valuation items.
- Cor. 20.9, local ideal equality/inclusion — **inline** in factorisation.
- Cor. 20.10, finite-prime case — **included** as CA-9B companion.
- Cors. 20.11--20.13, (a=b+(x)), two generators and complementary ideals —
  two-generator result **included** CA-9; others **included** on CA-9B.
- Prop. 20.14, Dedekind UFD implies PID — **inline** in the class-group
  characterisation, conditional on the owed UFD proof.
- Thm. 20.15, Steinitz — **included** only with the independent CRing/Stacks
  proof recorded on CA-9.
- Thm. 20.16, invariant factors — **deferred** to module classification; the
  source suppresses its proof.
- Aside 20.17, Jordan--Hölder/Krull--Schmidt contrast — **included** as
  non-load-bearing companion material.

#### §21, “Dimension Theory,” pp. 99--104

- (21.1)--(21.2), height/localisation preliminaries — **inline** CA-10.
- Thm. 21.3, principal ideal theorem — **included** CA-10.
- (21.4)--(21.5), height induction — **inline**, with (21.5) supplying the
  named induction-step lemma.
- Thm. 21.6, height theorem — **included** CA-10.
- Thm. 21.7, converse and parameters — **included** in CA-10's converse,
  existence and radical-generator items.

#### §24, completion, (24.1)--(24.7), pp. 108--109

- (24.1), filtration topology/completion — **included** CA-13.
- (24.2), stable equivalent filtrations — **inline** in CA-13's quotient/
  submodule completion item.
- (24.3), Artin--Rees — **included** CA-11.
- (24.4), completion exactness — **included** CA-13.
- (24.5), tensor comparison — **included** CA-13.
- (24.6), completion flatness — **included** CA-13.
- (24.7), quotient/localisation comparison — **inline** CA-13 and its iterated
  completion companion.

### 8.3 Stacks Project, *Commutative Algebra* and *More on Algebra*

Full chapter PDFs: <https://stacks.math.columbia.edu/download/algebra.pdf> and
<https://stacks.math.columbia.edu/download/more-algebra.pdf>, retrieved
2026-08-14.  This is a tag-level harvest of the exact headings below, not a
claim that every lemma in either evolving chapter was read.

#### Localisation, support, integrality and spectra

- [Tag 00CM, §10.9](https://stacks.math.columbia.edu/tag/00CM): Def. 10.9.6
  and Lem. 10.9.7, module localisation/UMP — **included** CA-2; Ex. 10.9.8 —
  **included** CA-2B; Lem. 10.9.9, filtered-colimit description — **deferred**
  for missing colimit machinery; (10.9.10)--(10.9.16), iteration, exactness,
  quotients/submodules/ideals — module clauses **included/inline** CA-2 and
  ring clauses **already-published** on `the-field-of-fractions-and-localisation`.
- [Tag 07RC, §10.20](https://stacks.math.columbia.edu/tag/07RC), Lemmas
  10.20.1--10.20.3, Nakayama, spreading generators and cotangent criterion —
  first two **included/inline** CA-2; cotangent refinement **inline** CA-18.
- Tags [00L1](https://stacks.math.columbia.edu/tag/00L1),
  [00L2](https://stacks.math.columbia.edu/tag/00L2), and
  [00L3](https://stacks.math.columbia.edu/tag/00L3), support definition,
  (V(\operatorname{Ann}M)), exact-sequence and quotient support —
  **included** CA-2.
- [§10.17](https://stacks.math.columbia.edu/tag/00DY), spectrum, (V,D),
  contraction, quotient/localisation and compactness headings — algebraic
  content **included** CA-3; topological content **included** CA-15.
- [§10.26](https://stacks.math.columbia.edu/tag/00ER), irreducible components,
  generic points and minimal primes — **included** CA-15; scheme consequences
  **deferred** to algebraic geometry.
- [Tag 00GH, §10.36](https://stacks.math.columbia.edu/tag/00GH), finite and
  integral extensions — **included/inline** CA-6's definitions, finite-module
  characterisation and transitivity.
- [Tag 0307](https://stacks.math.columbia.edu/tag/0307), integral closure and
  localisation — **included** CA-6 without an invented finiteness restriction.
- [Tag 034K](https://stacks.math.columbia.edu/tag/034K), integrality local —
  **included/inline** in CA-6's localisation and local normality theorems.
- [Tag 02JK](https://stacks.math.columbia.edu/tag/02JK), base change of
  integrality — **inline** CA-6; no separate load-bearing item.
- [Tag 00GU](https://stacks.math.columbia.edu/tag/00GU), lying over/going up —
  **included** CA-6.
- [Tag 00HU, §10.41](https://stacks.math.columbia.edu/tag/00HU), integral
  going up/down and flat going down — first two **included** CA-6, last
  **included** CA-12.
- [Tag 00FS](https://stacks.math.columbia.edu/tag/00FS), Hilbert
  Nullstellensatz — **included** CA-7 in its matching weak/strong forms.
- Tags [051N](https://stacks.math.columbia.edu/tag/051N),
  [00OX](https://stacks.math.columbia.edu/tag/00OX), and
  [00OY](https://stacks.math.columbia.edu/tag/00OY), exponent substitution,
  elimination and Noether normalisation — **inline/included** CA-7.

#### Noetherian, length, dimension and associated-prime sections

- [§10.31](https://stacks.math.columbia.edu/tag/00FM): Lemma 10.31.2,
  quotients — **included** CA-1; Lemmas 10.31.3--10.31.4, finite presentations
  — **included** CA-1; Hilbert-basis headings — **included** CA-1; Lemma
  10.31.6, finite minimal primes — **included** CA-3; Lemma 10.31.10,
  surjective endomorphisms — **included** CA-1; remaining permanence headings
  — **inline** CA-1.
- [§10.51](https://stacks.math.columbia.edu/tag/00IJ): Lemma 10.51.1, finite
  Noetherian modules — **planned-published**; Lemmas 10.51.2--10.51.3,
  Artin--Rees/induced filtrations — **included/inline** CA-11; Lemmas
  10.51.4--10.51.6, local/general Krull intersection — **included/inline**
  CA-11; Lemma 10.51.7, Artin--Tate — **included** CA-1.
- [§10.52](https://stacks.math.columbia.edu/tag/00IU): length definition/basic
  filtrations — **planned-published** or CA-4 contingency; Lemma 10.52.3,
  additivity — **included** CA-4; Lemma 10.52.4, finite-length criterion —
  **included** CA-4; local-length consequences — **inline** CA-4/CA-11.
- [§10.53](https://stacks.math.columbia.edu/tag/00J4): Lemma 10.53.1, primes
  maximal — **included** CA-4; intervening finiteness/nilpotence lemmas —
  **inline** CA-4; Lemma 10.53.4, nilradical nilpotent — **included**; Lemma
  10.53.5, Artinian implies Noetherian — **included**; Lemma 10.53.6, finite
  local product — **included**.
- [§10.58](https://stacks.math.columbia.edu/tag/00JV), Noetherian graded rings
  — **included/inline** in Hilbert--Serre; weighted grading is not promoted to
  standard eventual polynomiality.
- [§10.59](https://stacks.math.columbia.edu/tag/00K4), Hilbert and
  Hilbert--Samuel functions — **included** CA-11; completion consequences
  **included** CA-13.
- [§10.60](https://stacks.math.columbia.edu/tag/00KD): Def. 10.60.3,
  dimension/height — **included** CA-3; local/quotient chains — **included**
  CA-10; Lemma 10.60.9, Hilbert--Samuel degree/dimension — **included** CA-11;
  principal-ideal theorem material and Lemma 10.60.12, height theorem —
  **included** CA-10; converse/parameters — **included** CA-10.
- [§10.63](https://stacks.math.columbia.edu/tag/00L9): definition/basic
  annihilators — **included** CA-5; Lemma 10.63.3, short-exact inclusions —
  **included** without finite hypotheses; minimal-support, zero-divisor,
  localisation and finiteness headings — **included** CA-5.
- §10.64 weak-associated-prime refinements — **deferred**: ordinary associated
  primes for finite Noetherian modules suffice downstream.

#### Valuations and Dedekind domains

- Tags [00I8](https://stacks.math.columbia.edu/tag/00I8),
  [00I9](https://stacks.math.columbia.edu/tag/00I9), and
  [00II](https://stacks.math.columbia.edu/tag/00II), §10.50, valuation rings,
  value groups and Noetherian valuation rings — **included** across CA-8's
  valuation/value-group/locality/normality/Noetherian characterisations.
- [Tag 00PD](https://stacks.math.columbia.edu/tag/00PD), Lemma 10.119.7, DVR
  characterisations — **included** CA-8, with element/ideal forms inline.
- Tags [034O](https://stacks.math.columbia.edu/tag/034O),
  [034W](https://stacks.math.columbia.edu/tag/034W), and
  [034X](https://stacks.math.columbia.edu/tag/034X), §10.120, factorisation
  and Dedekind equivalences — **included/inline** CA-9.  Stacks permits fields;
  the library excludes them and records the convention disagreement.
- Tags [0549](https://stacks.math.columbia.edu/tag/0549) and
  [0AUW](https://stacks.math.columbia.edu/tag/0AUW), torsion-free modules over
  Dedekind domains — finite/projective form **included** CA-9; arbitrary flat
  form **included/inline** at the CA-9/CA-12 boundary with choice flagged.

#### Flatness, completion and Hensel/Cohen

- Tags [00HT](https://stacks.math.columbia.edu/tag/00HT),
  [00HQ](https://stacks.math.columbia.edu/tag/00HQ), and
  [00HR](https://stacks.math.columbia.edu/tag/00HR), local flatness, faithful
  characterisations and flat local maps — **included** CA-12.
- [§10.86](https://stacks.math.columbia.edu/tag/0594): Def. 10.86.1,
  Mittag--Leffler — **included** CA-13; Ex. 10.86.2, stable images — **inline**;
  Lemma 10.86.3, nonempty countable limit — **inline**, DC flagged; Lemma
  10.86.4, exactness — **included**.
- [§10.87](https://stacks.math.columbia.edu/tag/03C9): compatible-product
  construction before Lemma 10.87.1 — **included** in CA-13's inverse-limit
  definition/UMP; Lemma 10.87.1 — **included** in ML exactness.
- [§10.96](https://stacks.math.columbia.edu/tag/00M9): Lemma 10.96.1,
  comparison/exactness — **inline** CA-13; Def. 10.96.2, completeness —
  **included**; Lemmas 10.96.3--10.96.5, powers/quotients/completeness —
  **included/inline**; Lemma 10.96.6, units — **included**; Lemmas
  10.96.7--10.96.9, equivalent topologies — **inline**; Lemma 10.96.10,
  closed submodules — **included** CA-13B; Lemmas 10.96.11--10.96.12, finite
  completeness/complete Nakayama — **included** CA-13.
- [§10.97](https://stacks.math.columbia.edu/tag/0BNH): Lemmas
  10.97.1--10.97.4, exact/tensor/flat/faithful/quotient completion —
  **included** CA-13; Lemmas 10.97.5--10.97.6, Noetherianity — **included**;
  Lemma 10.97.7, finite closed fibre — **inline** CA-14; Lemma 10.97.8,
  finite product — **included** CA-13B; Lemmas 10.97.9--10.97.10, split/combined
  completions — **inline/included** CA-13.
- [§10.99](https://stacks.math.columbia.edu/tag/00MD): Lemmas
  10.99.1--10.99.5, lifting/closed-fibre criteria — **inline** CA-12; Lemma
  10.99.6, Tor finite-length form — **deferred** until HA-10; Lemmas
  10.99.7--10.99.11, local/ideal/infinitesimal criteria — **included/inline**
  CA-12 in multiplication-map form; Lemmas 10.99.12--10.99.14, Tor/base-change
  comparisons — **deferred** until HA-10; Lemma 10.99.15, fibrewise flatness —
  **deferred** to algebraic geometry; Lemmas 10.99.16--10.99.17, patching —
  **inline** in locality.
- [§10.153](https://stacks.math.columbia.edu/tag/04GE), exact selected range
  Def. 10.153.1 and Lemmas 10.153.2--10.153.3, 10.153.9--10.153.10:
  Henselian definition/uniqueness/equivalent elementary forms/complete and
  zero-dimensional cases — **included** CA-14; strict/étale/quasi-finite forms
  **deferred** to algebraic geometry.
- [§10.160](https://stacks.math.columbia.edu/tag/0323): Def. 10.160.1 and
  Lemmas 10.160.2--10.160.3, completeness/quotients/Noetherianity —
  **already included** CA-13; Def. 10.160.4, coefficient ring — equicharacteristic
  field **included** CA-14; Def. 10.160.5--Lemmas 10.160.6--10.160.7, Cohen
  rings/formal smoothness — **deferred** as the mixed-characteristic blocker;
  Thm. 10.160.8, Cohen structure — equicharacteristic form **included**, mixed
  form **deferred**; Rem. 10.160.9 — boundary remark; Lemmas
  10.160.10--10.160.11, regular power-series and finite parameter subrings —
  **included** CA-14.

#### Koszul, depth and regularity after homological algebra

- [§15.29](https://stacks.math.columbia.edu/tag/0621): Defs.
  15.29.1--15.29.2 — **included** CA-16; Lemmas 15.29.3--15.29.4,
  functoriality/generator change — **included**; Lemmas 15.29.5--15.29.6,
  null-homotopy/annihilation — **included**; Lemmas 15.29.7--15.29.8, mapping
  cones — **included**; Lemmas 15.29.9--15.29.11, product comparisons —
  **inline** in regularity notions; Lemma 15.29.12, concatenation — **included**.
- [§15.31](https://stacks.math.columbia.edu/tag/062D): Def. 15.31.1,
  Koszul/(H_1) regularity — **included** CA-16; Lemmas 15.31.2--15.31.7,
  implications, base change and local equivalence — **included/inline** CA-16;
  Lemmas 15.31.8--15.31.9, intersection identities — **deferred** to a
  regular-ideal/associated-graded enrichment; Lemmas 15.31.10--15.31.13,
  tail/concatenation criteria — **inline** in CA-16's local equivalence and
  concatenation results.
- [§10.72](https://stacks.math.columbia.edu/tag/00LE): Def. 10.72.1 and
  Lemmas 10.72.2--10.72.5, depth/regular sequences/Ext/dimension bound —
  **included/inline** CA-17; Lemma 10.72.6, Depth Lemma — **included**;
  Lemmas 10.72.7--10.72.11, regular quotient, Ass bounds, localisation and
  finite local maps — **included/inline** CA-17.
- [§10.103](https://stacks.math.columbia.edu/tag/00N2): Def. 10.103.1 and
  Lemmas/Prop. 10.103.2--10.103.7, CM modules, regular parameters and Ass —
  **included** CA-17; Def. 10.103.8, maximal CM — **included**; Lemmas
  10.103.9--10.103.11, dimension/localisation — **included/inline**; Def.
  10.103.12 and Lemma 10.103.13, global CM/polynomials — **included**.
- [§10.104](https://stacks.math.columbia.edu/tag/00N7): Def. 10.104.1 and
  Lemmas 10.104.2--10.104.7, CM rings, quotients, dimension, localisation and
  polynomials — **included/inline** CA-17; Lemmas 10.104.8--10.104.10,
  syzygies/resolutions/local maps — **inline** in the Depth Lemma,
  Auslander--Buchsbaum and flat-local formula.
- [§10.106](https://stacks.math.columbia.edu/tag/00NN): Lemmas
  10.106.1--10.106.4, associated graded, domain/CM/regular quotients —
  **included** CA-18; Lemmas 10.106.5--10.106.7, freeness/lifting —
  **inline/included** in Auslander--Buchsbaum and regularity lifting; Lemma
  10.106.8, directed colimits — **deferred** for missing colimit machinery.
- [§10.110](https://stacks.math.columbia.edu/tag/065U): Prop. 10.110.1 and
  Lemmas 10.110.2--10.110.4, resolutions/global dimension bounds —
  **inline** CA-18; Prop. 10.110.5, Auslander--Buchsbaum--Serre — **included**;
  Lemma 10.110.6, localisation — **included**; Def. 10.110.7, regular ring —
  **included**; Lemmas 10.110.8--10.110.9, global dimension/descent —
  **inline** CA-18.
- [§10.111](https://stacks.math.columbia.edu/tag/090U), Prop. 10.111.1,
  Auslander--Buchsbaum — **included** CA-18.
- [§10.157](https://stacks.math.columbia.edu/tag/031O), normal rings and
  Serre's criterion — definitions **included** CA-18; (R_1+S_2) theorem
  **included**; excellence-related continuations **out-of-scope**.

### 8.4 CRing Project, *Commutative Algebra*

Full text: <https://math.uchicago.edu/~amathew/CRing.pdf> (493 pages).  Exact
chapter ranges read were Ch. 4 §1 through Cor. 1.19; Ch. 5 §§1--4 (including
§1.4 through Prop. 1.15); and the extracted chapters headed *The spectrum of a
ring*, *Graded rings and modules*, *Dimension theory*, and Ch. 9 §3 on
Dedekind domains.

- Ch. 4 §1, prime-ideal criteria before Cor. 1.19 — **already-published** on
  the ideals page; Cor. 1.19, Cohen's criterion — **included** CA-1.
- Ch. 5 §1.1, Noetherian modules/rings — definitions/equivalences
  **planned-published**, permanence **inline** CA-1.
- Ch. 5 §1.2, finite modules/exact sequences — **planned-published/inline** in
  CA-1's finite-presentation consequences.
- Ch. 5 §1.3, Hilbert basis/finite-type algebras — **included** CA-1.
- Ch. 5 §1.4, “Noetherian induction,” through Prop. 1.15 — **included** in
  `thm-noetherian-induction`, with DC retained.
- Ch. 5 §2, associated primes — existence, exact-sequence inclusions,
  zero-divisors, prime filtrations and finiteness **included/inline** CA-5.
- Ch. 5 §3, primary decomposition — definitions, Lasker--Noether and both
  uniqueness theorems **included** CA-5.
- Ch. 5 §4, Artinian rings — **included/inline** CA-4, especially Artinian
  implies Noetherian and finite local-product structure.
- *The spectrum of a ring*: (V,D), quotient/localisation spectra — algebraic
  statements **included** CA-3; topology, irreducibility and components
  **included** CA-15; sheaves/schemes **out-of-scope**.
- *Graded rings and modules*: graded definitions/Hilbert functions —
  **included** CA-11; multigraded refinements **deferred** because unused.
- *Dimension theory*: dimension, principal/height theorems and Hilbert
  polynomials — **included** CA-10/CA-11; noncatenary/excellent developments
  **out-of-scope**.
- Ch. 9 §3, Dedekind domains, invertible ideals, projectives and Steinitz
  classification — **included/inline** CA-9; arithmetic examples
  **out-of-scope** for number theory.

### 8.5 Mustaţă, *Introduction to Commutative Algebra*

Full notes: <https://websites.umich.edu/~mmustata/CAnotes.pdf>.  Exact ranges
read were §8.1, 8.1--8.13; §8.5, 8.44--8.64; Ch. 10, 10.1--10.19; Ch. 11,
11.1--11.53; and Ch. 12, 12.1--12.41.

#### §8.1, valuations, (8.1)--(8.13), pp. 49--52

- Def. 8.1--Rem. 8.2, valuation and laws — **included** in CA-8's ordered
  group/valuation definitions.
- Prop. 8.3, nonnegative elements form a valuation ring — **inline** in the
  valuation-ring characterisation.
- Def. 8.4--Rem. 8.5, valuation rings are local — **included** CA-8.
- Prop. 8.6, quotient value group/converse — **included** CA-8.
- Prop. 8.7--Def. 8.8, DVR equivalences/definition — **included** CA-8.
- Rem. 8.9, ideals, primes and dimension — **inline** in CA-8's uniformiser,
  ideal and dimension items.
- Exs. 8.10--8.12, PID localisation/nondiscrete valuations — **included**
  CA-8B.
- Prop. 8.13, Noetherian valuation rings — **included** CA-8.

#### §8.5, Dedekind domains, (8.44)--(8.64), pp. 60--68

- Def. 8.44--Ex. 8.45, local-DVR convention/PIDs — convention **recorded**;
  example **included** CA-9B.
- Prop. 8.46, equivalence with Noetherian normal dimension one — **included**
  CA-9.
- Thm. 8.47, finite separable integral closure — **included** CA-9; following
  arithmetic examples **out-of-scope** for number theory.
- Thm. 8.50, ideal factorisation — **included** CA-9.
- Def. 8.51--Rem. 8.52, bounded fractional ideals/finite generation —
  **included/inline** CA-9.
- Def. 8.53--Lemmas 8.54--8.55, colon inverse/localisation — **included/
  inline** in CA-9's operations and invertibility criteria.
- Def. 8.56--Ex. 8.58, products/principal inverses — **included/inline** CA-9
  and CA-9B.
- Lemmas 8.59--8.60, finiteness/local principality — **inline** in CA-9's
  invertible-ideal characterisation.
- Thm. 8.61, all fractionals invertible — **included** CA-9.
- unnumbered class-group definition--Rem. 8.62, divisor description —
  **included** in CA-9's class/divisor definitions and exact sequence.
- Prop. 8.63, trivial class group/PID/UFD — **included** subject to the owed
  UFD proof.
- Ex. 8.64, factorisation implies Dedekind — **inline** as a converse/companion.

#### Ch. 10, flatness, (10.1)--(10.19), pp. 95--100

- Def. 10.1--Rem. 10.2, flatness/exactness — definition
  **planned-published**, criterion **inline** CA-12.
- Ex. 10.3, projective implies flat — **planned-published**; Rem. 10.4,
  torsion-free consequence — **included** CA-12B.
- Exs. 10.5--10.6, localisations/polynomials — **included** CA-12/CA-12B.
- Prop. 10.7, base change/transitivity/localisation/locality — **included**
  CA-12.
- Prop. 10.8, Tor criterion — **deferred** until HA-10.
- Cor. 10.9--Cor. 10.10, short exact sequences with flat quotient — **inline**
  in the ideal criterion.
- Prop. 10.11, finite flat/projective/local free — **included** CA-12.
- Lem. 10.12, flat local maps detect zero/exactness and inject — **included/
  inline** CA-12.
- Prop. 10.13, flat going down — **included** CA-12.
- Prop. 10.14--Cor. 10.15, dimension inequalities/formula — **inline/deferred**
  to CA-10 and the post-homological flat-local depth theorem.
- Ex. 10.16, filtered colimits/Tor — **deferred** for category and HA-10.
- Ex. 10.17, ideal/Tor criterion — ideal form **included** CA-12; Tor form
  **deferred**.
- Ex. 10.18, Dedekind torsion-free modules — **included/inline** CA-9/CA-12.
- Ex. 10.19, nonflat examples — **included** CA-12B.

#### Ch. 11.1, regular sequences and depth, (11.1)--(11.23)

- Def. 11.1--Rem. 11.3, regular sequences, localisation and order warning —
  **included** CA-16/CA-16B.
- Prop. 11.4--Rem. 11.5, local permutation/maximal sequences — **included/
  inline** CA-16/CA-17.
- Def. 11.6--Thm. 11.7, Ext depth/equal maximal lengths — **included** CA-17.
- Lem. 11.8--Rem. 11.10, Ext localisation, radical and annihilator —
  **included/inline** CA-17.
- Cors. 11.11--11.13, regular quotient, ideal monotonicity, localisation —
  **included/inline** CA-17.
- Prop. 11.14, Depth Lemma — **included** CA-17.
- Prop. 11.15--Rem. 11.17, Ass/dimension/codimension bounds — **included/
  inline** CA-17.
- Exs. 11.18--11.23, polynomial, nilpotent, hypersurface, powers, finite-map
  and support computations — **included/inline** on CA-16B/CA-17B; the
  finite-map clause feeds the flat-local formula.

#### Ch. 11.2, Cohen--Macaulay theory, (11.24)--(11.42)

- Def. 11.24--Rem. 11.25, local/global CM and annihilator convention —
  **included/inline** CA-17.
- Prop. 11.26, regular quotients/converse — **included** CA-17.
- Props. 11.27--11.30, associated primes, localisation and codimension —
  **included/inline** CA-17.
- Exs. 11.31--11.32, dimension-one reduced/dimension-two normal cases —
  **included** CA-17B.
- Thm. 11.33, polynomial extension — **included** CA-17.
- Lem. 11.34--Exs. 11.35--11.36, flat regular sequences/polynomial examples —
  **inline/included** CA-17 and CA-17B.
- Thm. 11.37--Cor. 11.38, local dimension formula/catenarity — formula
  **inline** CA-17; catenarity **deferred** until a future page defines its
  exact scope.
- Thm. 11.39, parameter ideals/regular sequences — **included** CA-17.
- Exs. 11.40--11.42, affine dimension, union of planes and fibre-product
  examples — first **included** CA-10B, latter two **included** CA-17B.

#### Ch. 11.3, Koszul complexes, (11.43)--(11.53)

- Lem. 11.43--Def. 11.44, differential/complex/homology — **included** CA-16.
- Ex. 11.45--Rem. 11.46, one/two elements and (H_0) — **included** CA-16B
  and inline in basic homology.
- Exs. 11.47--11.48, permutations/null-homotopies — **included/inline** CA-16.
- Prop. 11.49, cone/long exact sequence — **included** CA-16.
- Thm. 11.50--Rem. 11.51, acyclicity/regularity/permutations — **included**
  CA-16.
- Thm. 11.52, depth from Koszul homology — **included** CA-17.
- Ex. 11.53, perfect-module consequences — **deferred** to a complete-
  intersection/perfect-module enrichment.

#### Ch. 12.1, regular local rings, (12.1)--(12.18)

- Def. 12.1--Rem. 12.2, systems of parameters/existence — **already included**
  CA-10.
- Def. 12.3--Def. 12.5, generator number, embedding dimension, regular local
  ring/parameters — **included** CA-18.
- Ex. 12.6, fields — **included** CA-18B.
- Props. 12.7--12.8, quotient/lifting regularity — **included** CA-18.
- Prop. 12.9--Ex. 12.10, domain/DVR — **included** CA-18.
- Prop. 12.11--Rem. 12.12, CM/regular sequences — **included/inline** CA-18.
- Prop. 12.13, regular quotient ideals — **inline** in CA-18's quotient item.
- Def. 12.14--Rem. 12.15, global regular rings/products — **included/inline**
  CA-18.
- Ex. 12.16, quotient converses — **included** CA-18B.
- Ex. 12.17, Jacobian hypersurface test — **deferred** to algebraic geometry.
- Ex. 12.18, embedding dimension via a presentation — **inline** CA-18.

#### Ch. 12.2--12.4, homological dimension and regularity, (12.19)--(12.41)

- Def. 12.19--Props. 12.25, projective/injective dimension and Ext criteria —
  **planned-published** on HA-9; localisation/syzygy uses **inline** CA-18.
- Def. 12.26 and the following minimal-resolution construction —
  **planned-published** on HA-5/HA-10.
- Prop. 12.27, Betti numbers from Tor — **included/inline** in CA-18's minimal
  resolution item after HA-10.
- Rem. 12.28, uniqueness — **planned-published** on HA; Cors. 12.29--12.30,
  projective/global dimension from minimal resolutions — **included/inline**
  CA-18.
- Thm. 12.31--Lem. 12.32, Auslander--Buchsbaum and its Tor lemma — theorem
  **included** CA-18; lemma **inline** after HA-10.
- Thm. 12.33, Auslander--Buchsbaum--Serre — **included** CA-18.
- Cors. 12.34--12.35, localisation/global dimension — **included/inline**
  CA-18.
- Prop. 12.36--Ex. 12.37, polynomial regularity/examples — **included** CA-18
  and CA-18B.
- Prop. 12.38, regular implies normal — **included** CA-18.
- Rem. 12.39, regular local UFD — **deferred** pending the owed factoriality
  machinery; not asserted from the thin page.
- Exs. 12.40--12.41, flat-local regularity and finite local extensions —
  **inline/included** CA-17/CA-18 companions.

### 8.6 Huneke/Stone commutative-algebra course notes

Course corpus: <https://home.adelphi.edu/~bstone/commalg-notes/>.  Exact
ranges read for the later block were *Commutative Algebra II*, Ch. 1 §§1.1--1.2,
pp. 1--12, and Ch. 2, pp. 22--31; the Hilbert--Samuel examples also use the
named opening chapter of *Commutative Algebra III*.

#### CA II Ch. 1, regular local rings and Koszul complexes

- Thm. 1, finite projective dimension of the residue field/regular sequences/
  regularity — **included** in Auslander--Buchsbaum--Serre CA-18.
- definitions of regular local ring and regular sequence — **included**
  CA-16/CA-18; Ex. 1, module-versus-ring regularity — **included** CA-16B.
- §1.1, minimal resolutions/projective dimension; Prop. 2, existence and
  characterisation — **planned-published** HA-5/HA-9 and **inline** CA-18.
- remark after Prop. 2 and Betti-number definition — **included/inline** in
  CA-18's minimal-resolution item.
- Exs. 2--3, quotient by a regular element/cusp — **included** CA-18B.
- regular/singular locus definitions — **deferred** to algebraic geometry.
- §1.2, Koszul construction — **included** CA-16; Thm. 3, basic/top homology
  and acyclicity/converse — **included** CA-16; Cor. 4, regular quotient
  resolution — **inline** CA-16; base-change remark — **included** CA-16;
  Koszul-as-Tor remark — **deferred** until HA-10.
- prime-sequence definition/Lem. 5 — **inline** in regular local rings are
  domains/CM; proof of Thm. 1 — **proof backing** for CA-18's homological
  regularity criterion.

#### CA II Ch. 2, depth, Cohen--Macaulayness and projective dimension

- depth definition and Prop. 14, first Ext/equal maximal lengths —
  **included** CA-17; following Remarks 1--3 — **inline** there.
- Lem. 15, Depth Lemma — **included** CA-17; Thm. 16,
  Auslander--Buchsbaum — **included** CA-18.
- CM definitions — **included** CA-17.
- Thm. 17--Cors. 18--19, depth/dimension and associated-prime bounds —
  **included/inline** CA-17.
- Exs. 1--5, low-dimensional CM/non-CM examples — **included** CA-17B.
- Thm. 20, finite-group invariants — **out-of-scope** for invariant theory.
- Thm. 21, CM dimension/height/regular sequences — **included/inline** CA-17.
- catenary definition — **deferred** to a dimension enrichment; Thm. 22,
  localisation of CM — **included** CA-17.
- Thm. 23, finite modules over regular local rings — **inline/included** on
  CA-17/CA-18 and companions.
- Thm. 24, flat-local dimension/depth/CM formulas — **included** CA-17;
  Lemmas 25--26, quotient-flatness/lifting a fibre-regular element — **inline**
  CA-12/CA-17.
- Cor. 27, completion preserves CM — **included** CA-17; global definition and
  Cor. 28, polynomial extension — **included** CA-17.
- determinantal-ring definition/Thm. 29 — definition **out-of-scope** for
  determinantal geometry; two-dimensional normal example **included** CA-17B.
- Thm. 30, quotient of a regular local ring — **inline** as a later CA-18
  corollary; Rem. 4, annihilator — **inline** CA-17.
- Thm. 31, unmixedness — **deferred** to the advanced primary-decomposition/
  intersection-theory extension; not load-bearing.

#### CA III, opening Hilbert--Samuel chapter

- named sections “Hilbert functions and Hilbert polynomials,” “Hilbert--Samuel
  multiplicity,” and the Rees/associated-graded examples — **included/inline**
  CA-11 and CA-11B; later mixed-multiplicity and reduction-number material —
  **deferred** to an advanced multiplicity/Rees-algebra page.

---

## 9. Final boundary pass

No definition in the low block requires a later topological or homological
definition.  CA-15 is a genuinely later topology block, CA-14 is placed after
the already-published formal-series page, and CA-16--CA-18 are a genuinely
post-homological block.  All consequence kinds that consume planned sibling
material name the owning page in `requires`; no A item depends on a B item.

The future builder must repeat exact-id collision checks immediately before
authoring because ids are immutable and other tracks may land first.  The
mechanical check performed for this commission found no duplicate proposed id
inside this scaffold and no exact collision with the current `items/` tree.
The builder must also re-read the live `items` arrays: a planned page title is
not evidence that its definitions exist.
