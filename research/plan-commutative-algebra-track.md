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
dimension.  After the density amendment in §10, every A page is at or below
the 60-item ceiling; every B page is a
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
The 2026-08-14 enrichment added the eleven full-text source entries keyed H20,
TN, BU, RG5, RG6, R710, V25/28, JM, BM, WL and H615 in §10.1; §10.2 gives an
exact-range, two-or-more-treatment audit for each of the eighteen pairs.

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
statement in §§4--6 is AI-generated.  **The §10.4 enrichment overlay is the one
exception, and it is bounded:** 30 of its 691 rows are `ex-` examples on **B**
pages carrying `provenance.statement: ai-generated`.  They are the concrete
computations the generated-claim rule expressly permits — a checkable example or
counterexample — and **none may ever become a dependency target.**  That is
structurally safe here because every one of them sits on a B page, B pages are
dependency leaves, and each id occurs exactly once in this file (at its own
definition) with no other row citing it.  A builder must keep the
`ai-generated` tag rather than promoting it: the enrichment lane originally wrote
`directly-checkable`, which is not a SCHEMA §3 value, and relabelling it to a real
one is what lets the load-bearing prohibition be enforced mechanically instead of
resting on a word.  An example marked `L/A` is a standard sourced
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

**R-1 ownership receipt.** Abstract algebra MOD-3 mints `def-flat-module` and
the basic module flatness facts. CA-12 cites that id and does not re-mint it;
this page owns faithful flatness, flatness local criteria and flat descent.
The Noetherian/Artinian/integrality interfaces remain exactly as scaffolded.

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
| `ex-p-adic-integers-as-an-inverse-limit` | `ex` | Cite GT-17's compatible-residue/inverse-limit construction of the p-adic integers, then prove only that its topology and universal compatible maps agree canonically with the adic-completion object used here. | L/A; GT-17 supplier; Altman--Kleiman §22 for completion agreement. |
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

**Owner-authorised placement (applied 2026-08-14).** This pair is placed after
both `topological-spaces-and-continuity` and `compactness`, exactly as its
`requires` below states. No earlier low-algebra placement is permitted.

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
2. **Abstract algebra — reserved seams (R-1 applied 2026-08-14).** Preserve the exact ids
   `def-noetherian-module`, `def-artinian-module`, `def-noetherian-ring`, the
   Artinian-ring definition, `def-flat-module`, integral element and determinant
   trick promised by `plan-algebra-track-expansion.md`.  The splice must replace
   this scaffold's descriptive references by those stable ids, never mint
   duplicates.
3. **Topology — APPLIED 2026-08-14.** Place CA-15 after both the general topology foundation and the
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
- (22.10), the \(\varprojlim^1\) obstruction — **deferred** to homological
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

---

## 10. Density enrichment pass — 2026-08-14

This section is an additive amendment to §§4--8.  Every earlier id remains
stable.  Rows below name the page that receives the item; within that page they
are inserted after the cited prerequisite rather than mechanically appended.
The long-form provenance fields are intentional: they supersede the compact
`L/A` notation for every item minted in this pass.

### 10.1 Additional full texts obtained and exact ranges read

Only legitimately reachable full texts were used.  A contents page or search
snippet was never treated as a treatment.  The new source abbreviations used
below are:

| key | full text obtained | exact range read for this pass |
|---|---|---|
| **H20** | Melvin Hochster, *Introduction to Commutative Algebra*, University of Michigan Math 614 (2020), [complete 188-page notes](https://dept.math.lsa.umich.edu/~hochster/615W22/614Lx.pdf) | Chs. 1--13, pp. 5--182; individual chapter/subsection dispositions are below. |
| **TN** | Burt Totaro, notes by Zach Norwood, *Commutative Algebra*, Cornell Part III (2011), [complete 67-page notes](https://pi.math.cornell.edu/~zbnorwood/partiii/files/commalgnotes.pdf) | §§1--15, pp. 4--67. |
| **BU** | Brooke Ullery, Harvard Math 221, *Commutative Algebra* (Fall 2019), [complete section-PDF course](https://people.math.harvard.edu/~bullery/math221/) | Entire PDFs §§2--15 and §§17--25; §16 was inspected but excluded as geometric. |
| **RG5** | Miles Reid, notes by Alexandros Groutides, *Commutative Algebra II, Chapter 5* (2022), [complete 8-page chapter](https://mreid.warwick.ac.uk/MA4J8/Groutides5.pdf) | §§5.1--5.2, pp. 1--8. |
| **RG6** | Miles Reid, notes by Alexandros Groutides, *Commutative Algebra II, Chapter 6* (2022), [complete 8-page chapter](https://mreid.warwick.ac.uk/MA4J8/Groutides6.pdf) | §§6.1--6.2, pp. 1--8. |
| **R710** | Miles Reid, *Commutative Algebra II, Lectures 7--10* (2009), [complete 13-page handout](https://mreid.warwick.ac.uk/MA4J8/Lect7-10.pdf) | Lectures 7--10, pp. 1--13. |
| **V25/28** | Ravi Vakil, *The Rising Sea: Foundations of Algebraic Geometry* (May 2012 draft), [complete 704-page text](https://math.stanford.edu/~vakil/216blog/FOAGmay1612public.pdf) | §§25.1--25.6, pp. 569--594, and §§28.1--28.2, 28.5, pp. 627--636; scheme-only exercises within those ranges are excluded below. |
| **JM** | J. P. May, *Notes on Dedekind Rings*, University of Chicago, [complete 12-page notes](https://math.uchicago.edu/~may/MISC/Dedekind.pdf) | §§1--7, pp. 1--12. |
| **BM** | Ben Moonen, *Introduction to Algebraic Geometry*, Radboud University (2018), [complete 106-page notes](https://www.math.ru.nl/personal/bmoonen/Lecturenotes/alggeom.pdf) | Ch. 1 §§1--3, pp. 1--8, and commutative-algebra interludes 1--4, pp. 9--11, 25--28, 66--69, 87--91; used as an independent convention/application check, not as sole proof backing. |
| **WL** | Wenqi Li, *Commutative Algebra*, Columbia Math W4065 (2016), [complete 69-page notes](https://www.math.columbia.edu/~wenqili/commalg_notes.pdf) | Lectures 24--25, pp. 62--69. |
| **H615** | Melvin Hochster, *Commutative Algebra II*, University of Michigan Math 615 (Winter 2020), [complete course notes](https://dept.math.lsa.umich.edu/~hochster/615W20/615W20.pdf) | Lecture of April 13, the equicharacteristic complete-local structure segment from “coefficient field” through the regular/power-series characterisation. |

The requested commercial books by Atiyah--Macdonald, Eisenbud, Matsumura,
Bruns--Herzog and Serre were not counted merely because catalogue pages or
unauthorised scans could be found.  No legitimately hosted complete text was
reachable in this run.  Reid was used through the author-hosted Warwick notes;
the other unavailable books remain bibliographic cross-references only.

#### Heading harvest for the newly read ranges

The unit harvested here is the source's own numbered heading.  A semicolon in
a disposition separates source headings; it does not collapse them into one
synthetic heading.

- **H20 Ch. 1, “Spectrum and topology,” §§1--6 (pp. 5--18):** prime ideals and
  the spectrum — **included** CA-3/CA-15; closed sets and basic opens —
  **included** CA-15; functoriality — **included** CA-3/CA-15; irreducibility
  and components — **included** CA-15; nilpotents and reduction — **included**
  CA-3/CA-15; geometric examples — **included** CA-15B.
- **H20 Ch. 2, “Localization,” §§1--7 (pp. 19--36):** ring localization —
  **already-published** on `the-field-of-fractions-and-localisation`; module
  localization — **included** CA-2; exactness — **included** CA-2; localization
  of Hom — **included** CA-2; localization at primes and local criteria —
  **included** CA-2; support — **included** CA-2; Nakayama and minimal
  generators — **included** CA-2.
- **H20 Ch. 3, “Integral and module-finite extensions; height and dimension,”
  §§1--7 (pp. 37--56):** determinant trick and integrality criteria —
  **included** CA-6; finite integral algebras — **included** CA-6; transitivity
  and localization — **included** CA-6; lying over — **included** CA-6;
  incomparability and going up — **included** CA-6; height and dimension under
  integral extension — **included** CA-6/CA-10; going down over normal domains
  — **included** CA-6.
- **H20 Ch. 4, “Noether normalization, Nullstellensatz, and dimension,” §§1--6
  (pp. 57--70):** normalization substitution lemma — **included** CA-7;
  Noether normalization — **included** CA-7; Zariski's lemma — **included**
  CA-7; weak Nullstellensatz — **included** CA-7; Rabinowitsch trick and strong
  Nullstellensatz — **included** CA-7; dimension of affine domains —
  **included** CA-10.
- **H20 Ch. 5, “Chain conditions,” §§1--5 (pp. 71--92):** Noetherian modules
  and exact sequences — **already-published** on
  `chain-conditions-and-semisimple-modules`; Noetherian induction —
  **included** CA-1; Hilbert basis theorem — **included** CA-1; finite type
  versus finite presentation — **included** CA-1; formal power series over a
  Noetherian ring — **included** CA-1/CA-13.
- **H20 Chs. 6--7, “Tensor products/base change” and “Flatness, localization,
  Hom, and projectives” (pp. 93--120):** tensor construction and right
  exactness — **planned-published** on `tensor-products-of-modules`; base
  change — **included** CA-12; flatness criteria — **included** CA-12;
  localization of flatness — **included** CA-12; finite flat modules and
  projectivity — **included** CA-12; Hom localization — **included** CA-2;
  projective-module basics — **already-published** on
  `free-modules-and-exact-sequences`.
- **H20 Chs. 8--10 (pp. 121--148):** associated primes — **included** CA-5;
  primary submodules and decompositions — **included** CA-5; uniqueness and
  isolated components — **included** CA-5; Artinian rings and length —
  **included** CA-4; principal ideal theorem — **included** CA-10; height
  theorem and systems of parameters — **included** CA-10.
- **H20 Chs. 11--12 (pp. 149--172):** algebraic sets and local nature — affine
  algebra claims **included** CA-7/CA-15 and scheme language **out-of-scope**;
  normal Noetherian domains — **included** CA-6/CA-18; Dedekind domains —
  **included** CA-9; divisor and ideal classes — **included** CA-9.
- **H20 Ch. 13, “Limits, completion, and Artin--Rees” (pp. 173--182):** inverse
  limits — **included** CA-13; adic completion — **included** CA-13;
  Artin--Rees — **included** CA-11; exactness on finite modules — **included**
  CA-13; completion flatness — **included** CA-13.

- **TN §§1--3 (pp. 4--12):** ring/module basics — **already-published**;
  affine schemes as spectra — underlying prime-set results **included** CA-3,
  scheme structure **out-of-scope**; irreducibles — **included** CA-15.
- **TN §§4--6 (pp. 13--21):** operations on modules — **already-published**;
  direct limits — **deferred** to homological algebra; tensor products —
  **planned-published** on `tensor-products-of-modules`.
- **TN §7 and §§7.2--7.4 (pp. 22--29):** localization — ring case
  **already-published**, module case **included** CA-2; local rings —
  **included** CA-2; Nakayama — **included** CA-2.
- **TN §8 and §8.1 (pp. 30--35):** Noetherian rings — **included** CA-1;
  irreducible decomposition — **included** CA-3/CA-15.
- **TN §9 (pp. 36--41):** projective resolutions, Ext and Tor —
  **already-published/planned-published** in homological algebra and cited, not
  re-minted, by CA-12/CA-16--CA-18.
- **TN §§10--12 (pp. 42--53):** integral extensions — **included** CA-6;
  Noether normalization and Nullstellensatz — **included** CA-7; Artinian
  rings — **included** CA-4.
- **TN §§13--15 (pp. 54--67):** DVRs and Dedekind domains — **included**
  CA-8/CA-9; principal ideal theorem — **included** CA-10; affine dimension —
  **included** CA-10; regular local rings — **included** CA-18.

- **BU §§2--7:** Noetherian rings/Hilbert basis — **included** CA-1; graded
  rings/Hilbert functions — **included** CA-11; localization — ring results
  **already-published**, module results **included** CA-2; Hom/tensor —
  **already-published/planned-published**, with localization compatibility
  **included** CA-2; spectrum — **included** CA-3/CA-15; length — **included**
  CA-4.
- **BU §§8--10:** associated primes — **included** CA-5; prime avoidance —
  **included** CA-5/CA-10/CA-17; primary decomposition — **included** CA-5.
- **BU §§11--15:** Cayley--Hamilton, integrality and Nakayama — determinant
  trick **already-published**, consequences **included** CA-2/CA-6;
  normality/normalization — **included** CA-6/CA-18; lying over/going up —
  **included** CA-6; Nullstellensatz — **included** CA-7; filtrations and
  associated graded — **included** CA-11.
- **BU §16, “Blowup and tangent cone”:** associated-graded algebraic identity
  **inline** in CA-11/CA-18; blowups and tangent-cone geometry
  **out-of-scope** for algebraic geometry.
- **BU §§17--20:** Artin--Rees and Krull intersection — **included** CA-11;
  flat families and Tor — algebraic flatness results **included** CA-12,
  scheme-family language **out-of-scope**; completions — **included** CA-13;
  Hensel's lemma — **included** CA-14.
- **BU §§21--25:** dimension — **included** CA-10; principal ideal theorem —
  **included** CA-10; systems of parameters — **included** CA-10/CA-17; going
  down — **included** CA-6; regular local rings — **included** CA-18.

- **RG5 §5.1, “The Koszul complex”:** the exterior and tensor-product models —
  **included** CA-16; Koszul homology and the generator homotopy — **included**
  CA-16; the Künneth short exact sequence — **inline** CA-16 because Tor is
  owned by homological algebra.
- **RG5 §5.2, “Regular local rings”:** regular sequences and Koszul acyclicity
  — **included** CA-16; Koszul resolutions and the polynomial-ring syzygy
  argument — **included** CA-16/CA-18; embedding dimension and regular local
  rings — **included** CA-18; quotient regularity — **included** CA-18.
- **RG6 §6.1, “Depth”:** depth and Ext characterisations — **included** CA-17;
  extending regular sequences and quotient depth — **included** CA-17;
  Ischebeck and associated-prime bounds — **included** CA-17.
- **RG6 §6.2, “Cohen--Macaulay rings”:** definition and unmixed associated
  primes — **included** CA-17; regular quotients — **included** CA-17; systems
  of parameters — **included** CA-17; geometric examples — algebraic local
  computations **included** CA-17B, projective geometry **out-of-scope**.
- **R710 Lectures 7--8:** Nakayama and determinant trick —
  **already-published/included** CA-2; completion and Hensel factor lifting —
  **included** CA-13/CA-14; simple-root Hensel form — **included** CA-14.
- **R710 Lectures 9--10:** linear topologies and inverse-limit completion —
  **included** CA-13; exactness of surjective inverse systems — **included**
  CA-13; Artin--Rees — **included** CA-11.

- **V25 §§25.1--25.6:** motivation and elementary closure properties —
  **included** CA-12; Tor criterion — **included** CA-12 by citation to the
  homological-algebra owner; ideal criteria — **included** CA-12; topological
  behavior of flat maps — algebraic prime consequences **included** CA-12,
  scheme language **out-of-scope**; local criteria — **included** CA-12.
- **V28 §§28.1--28.2:** regular sequences and permutation — **included**
  CA-16; geometric complete intersections — algebraic quotient examples
  **included** CA-16B, scheme assertions **out-of-scope**.
- **V28 §28.5:** Cohen--Macaulay rings and systems of parameters —
  **included** CA-17; geometric applications **out-of-scope**.

- **JM §§1--3:** fractional ideals — **included** CA-9; definitions of
  Dedekind domains and DVRs — **included** CA-8/CA-9; equivalent DVR
  characterisations — **included** CA-8.
- **JM §§4--7:** completions of DVRs — algebraic completion results
  **included** CA-8/CA-13, arithmetic construction cites the group-theory owner;
  Dedekind characterisations — **included** CA-9; ideals and fractional ideals
  — **included** CA-9; finitely generated torsion-free modules — **included**
  CA-9.

- **BM Ch. 1 §§1--3:** affine algebraic sets, weak/strong Nullstellensatz and
  irreducibility — algebraic claims **included** CA-7/CA-15, geometric
  language **inline** only; CA interlude 1, finiteness — **included** CA-1;
  interlude 2, localization — ring construction **already-published**, local
  criteria **included** CA-2; interlude 3, dimension — **included** CA-10;
  interlude 4, integrality — **included** CA-6.  Proofs explicitly omitted by
  this source are never backed by BM alone.
- **WL Lectures 24--25:** height and the principal ideal theorem — **included**
  CA-10; regular local rings and associated graded rings — **included** CA-18;
  completion and the equicharacteristic Cohen theorem — **included**
  CA-13/CA-14.
- **H615, lecture of April 13:** coefficient fields, power-series presentations
  and finite regular subrings — **included** CA-14; mixed-characteristic Cohen
  rings — **deferred** for the already-recorded machinery blocker.

#### Exact disposition-target ledger for the new harvest

The preceding harvest preserves one bold disposition token per source heading
for measurement.  This ledger resolves every `included` or `inline` shorthand
to exact item ids (and every published shorthand to an exact owning page), as
required by the canonical-coverage rule.  Where a heading was decomposed, the
listed id is its principal target and the immediately adjacent rows in §10.4
are its focused proof obligations.

| source heading(s) above | exact disposition target(s) |
|---|---|
| H20 Ch. 1: prime ideals/spectrum; closed sets/basic opens; functoriality | `def-prime-spectrum-and-vanishing-sets`; `lem-zariski-closed-set-axioms`, `thm-distinguished-opens-form-a-basis`; `thm-prime-spectrum-map-by-contraction`, `cor-spectrum-is-a-contravariant-topological-functor` |
| H20 Ch. 1: irreducibility/components; nilpotents/reduction; examples | `thm-irreducible-closed-subsets-and-prime-ideals`, `lem-irreducible-components-correspond-to-minimal-primes`; `def-nilradical-and-reduced-ring`, `cor-reduced-quotient-by-the-nilradical`; `ex-zariski-spectrum-of-dual-numbers`, `ex-specialisation-poset-of-a-small-spectrum` |
| H20 Ch. 2: ring localization; module localization; exactness | already published `the-field-of-fractions-and-localisation`; `def-localisation-of-a-module`; `thm-localisation-of-modules-is-exact`, with `lem-localisation-preserves-injectivity` and `lem-localisation-preserves-surjectivity` |
| H20 Ch. 2: Hom localization; local criteria; support; Nakayama | `thm-localisation-of-hom-for-finitely-presented-modules`; `thm-local-criterion-for-exactness-of-modules`; `def-support-of-a-module`; `thm-nakayama-lemma`, with `lem-determinant-trick-for-nakayama` |
| H20 Ch. 3: integrality criteria; finite integral algebras; transitivity/localization | `thm-integral-element-finite-module-characterisation`; `thm-finitely-generated-integral-algebra-is-module-finite`; `thm-transitivity-of-integrality`, `thm-integrality-commutes-with-localisation` |
| H20 Ch. 3: lying over; incomparability/going up; dimension; going down | `thm-lying-over`; `thm-incomparability-for-integral-extensions`, `thm-going-up`; `cor-dimension-preserved-by-integral-extensions`; `thm-going-down-over-normal-domains`, with `lem-going-down-one-prime-step` |
| H20 Ch. 4: normalization substitution; Noether normalization | `lem-noether-normalisation-change-of-variables`, refined by `lem-noether-normalisation-nonzero-polynomial-made-monic` and `lem-noether-normalisation-finite-field-exponent-substitution`; `thm-noether-normalisation` |
| H20 Ch. 4: Zariski lemma; weak Nullstellensatz; Rabinowitsch/strong form; affine dimension | `thm-zariski-lemma`; `thm-weak-nullstellensatz`; `lem-rabinowitsch-trick`, refined by the three `lem-rabinowitsch-*` rows; `thm-affine-domain-dimension-transcendence-degree` |
| H20 Ch. 5: Noetherian modules; induction; Hilbert basis; finite presentation; formal series | already published `chain-conditions-and-semisimple-modules`; `thm-noetherian-induction`; `thm-hilbert-basis-theorem`; `cor-finite-type-algebra-over-noetherian-ring-is-finitely-presented`; `thm-formal-power-series-hilbert-basis` |
| H20 Chs. 6--7: tensor/right exactness; base change; flatness/localization | planned owner `tensor-products-of-modules`; `lem-flatness-base-change-tensor-identification`; `thm-ideal-criterion-for-flatness`; `thm-flatness-is-local` |
| H20 Chs. 6--7: finite flat/projective; Hom localization; projectives | `thm-finite-flat-modules-over-local-rings-are-free`; `thm-localisation-of-hom-for-finitely-presented-modules`; already published `free-modules-and-exact-sequences` |
| H20 Ch. 8: associated primes; primary submodules/decompositions; uniqueness/isolated components | `def-associated-prime-of-a-module`; `def-primary-submodule-and-primary-ideal`, `thm-lasker-noether-primary-decomposition`; `thm-first-uniqueness-theorem-primary-decomposition`, `lem-isolated-primary-component-by-localisation-and-contraction` |
| H20 Chs. 9--10: Artinian rings/length; principal ideal theorem; height/parameters | `thm-structure-theorem-for-artinian-rings`, `thm-length-is-additive-in-short-exact-sequences`; `thm-krull-principal-ideal-theorem`; `thm-krull-height-theorem`, `def-system-of-parameters-and-parameter-ideal` |
| H20 Chs. 11--12: affine algebra/local nature; normal domains; Dedekind domains; classes | `thm-affine-algebra-nullstellensatz`, with scheme language out of scope as stated above; `thm-normality-is-local-for-domains`; `def-dedekind-domain`; `def-ideal-class-group-of-a-domain` |
| H20 Ch. 13: inverse limits; completion; Artin--Rees; exactness; flatness | `def-inverse-system-and-inverse-limit-of-modules`; `def-adic-completion-of-a-module`; `thm-artin-rees-lemma`; `thm-completion-is-exact-on-finite-modules`; `thm-flatness-of-noetherian-completion` |
| TN §§1--3: basics; affine spectra; irreducibles | basics already published on the ring/module pages in §1; `def-prime-spectrum-and-vanishing-sets`; `thm-irreducible-closed-subsets-and-prime-ideals` |
| TN §§4--6: module operations; direct limits; tensor | module operations already published; direct limits deferred to homological algebra as stated above; tensor planned on `tensor-products-of-modules` |
| TN §7: ring/module localization; local rings; Nakayama | ring localization already published on `the-field-of-fractions-and-localisation`; `def-localisation-of-a-module`; the local-ring definition is cited from that page and used by `cor-minimal-number-of-generators-is-residue-dimension`; `thm-nakayama-lemma` |
| TN §§8--9: Noetherianity; irreducible decomposition; Ext/Tor | `thm-hilbert-basis-theorem`; `lem-noetherian-space-finite-irreducible-decomposition`; Ext/Tor/resolutions cited from homological algebra by `cor-flatness-tor-one-cyclic-criterion` and CA-16--CA-18 |
| TN §§10--12: integral extensions; normalization/Nullstellensatz; Artinian rings | `thm-integral-element-finite-module-characterisation`; `thm-noether-normalisation`, `thm-strong-nullstellensatz`; `thm-structure-theorem-for-artinian-rings` |
| TN §§13--15: DVR/Dedekind; principal ideal; affine dimension; regular local | `thm-equivalent-characterisations-of-a-dvr`, `def-dedekind-domain`; `thm-krull-principal-ideal-theorem`; `thm-affine-domain-dimension-transcendence-degree`; `def-embedding-dimension-and-regular-local-ring` |
| BU §§2--7: Noetherian/Hilbert; graded/Hilbert; localization; Hom/tensor; spectrum; length | `thm-hilbert-basis-theorem`; `thm-hilbert-serre-theorem`; ring localization and basic Hom/tensor owned as above, with `thm-localisation-of-hom-for-finitely-presented-modules`; `thm-zariski-topology-on-prime-spectrum`; `thm-jordan-holder-for-finite-length-modules` |
| BU §§8--10: associated primes; prime avoidance; primary decomposition | `thm-existence-of-associated-primes`; `lem-finite-prime-avoidance`; `thm-lasker-noether-primary-decomposition` |
| BU §§11--15: determinant/integrality/Nakayama; normality; lying over/up; Nullstellensatz; filtrations | determinant trick already owned by `chain-conditions-and-semisimple-modules`, consequences `lem-determinant-trick-for-nakayama` and `lem-finite-stable-submodule-gives-integrality`; `thm-normality-is-local-for-domains`; `thm-lying-over`; `thm-strong-nullstellensatz`; `def-associated-graded-ring-and-module` |
| BU §16: associated-graded identity; blowup/tangent cone | inline in `lem-associated-graded-multiplication-well-defined` and `lem-associated-graded-polynomial-surjection`; geometric headings remain out of scope for the reason above |
| BU §§17--20: Artin--Rees/Krull; flatness/Tor; completion; Hensel | `thm-artin-rees-lemma`, `thm-krull-intersection-theorem`; `thm-ideal-criterion-for-flatness` with Tor cited from homological algebra; `def-adic-completion-of-a-module`; `thm-equivalent-elementary-forms-of-hensels-property` |
| BU §§21--25: dimension; principal ideal; parameters; going down; regular local | `def-krull-dimension-of-a-ring`; `thm-krull-principal-ideal-theorem`; `def-system-of-parameters-and-parameter-ideal`; `thm-going-down-over-normal-domains`; `def-embedding-dimension-and-regular-local-ring` |
| RG5 §5.1: Koszul models; homology/homotopy; Künneth | `def-koszul-complex-of-a-sequence-with-coefficients`; `thm-basic-koszul-homology`, `lem-koszul-generator-contraction-homotopy`; Künneth is inline in `lem-koszul-complex-concatenation-tensor-isomorphism`, with Tor cited from homological algebra |
| RG5 §5.2: regular sequences/acyclicity; resolutions/syzygy; embedding dimension/regularity; quotient | `def-regular-sequence-on-a-module`, `thm-regular-sequences-give-acyclic-koszul-complexes`; `cor-koszul-complex-resolves-a-regular-quotient`; `def-embedding-dimension-and-regular-local-ring`; `lem-regular-local-quotient-by-parameter-is-regular` |
| RG6 §6.1: depth/Ext; extending/quotient; Ischebeck/associated bounds | `def-depth-with-respect-to-an-ideal`, `cor-depth-as-first-nonzero-ext`; `lem-maximal-regular-sequence-stops-at-associated-prime`, `lem-depth-quotient-by-regular-element`; `thm-depth-bounded-by-support-dimension` |
| RG6 §6.2: CM/unmixed; regular quotients; parameters; examples | `def-cohen-macaulay-local-module-and-ring`, `cor-cohen-macaulay-modules-have-no-embedded-associated-primes`; `cor-regular-quotient-cohen-macaulay-equivalence`; `cor-every-system-of-parameters-is-regular-in-a-cohen-macaulay-module`; `ex-cohen-macaulay-associated-primes-unmixed` |
| R710 Lectures 7--8: Nakayama/determinant; completion/Hensel factor; simple roots | determinant trick already owned, consequence `lem-determinant-trick-for-nakayama`; `def-adic-completion-of-a-module`, `lem-hensel-factor-correction-one-stage`; `cor-henselian-local-simple-root-criterion` |
| R710 Lectures 9--10: linear topology/completion; inverse-limit exactness; Artin--Rees | `def-adic-topology-on-a-module`, `lem-adic-completion-compatible-residue-sequences`; `thm-inverse-limit-exactness-surjective-kernels`; `thm-artin-rees-lemma` |
| V25 §§25.1--25.6: closures; Tor; ideal criteria; prime behavior; local criteria | `thm-sums-summands-base-change-and-composition-of-flat-modules`; `cor-flatness-tor-one-cyclic-criterion`; `thm-ideal-criterion-for-flatness`; `lem-flat-going-down-one-step`; `thm-local-criterion-for-flatness-closed-fibre-form` |
| V28 §§28.1--28.2 and §28.5: regular sequences/permutation; complete-intersection algebra; CM/parameters | `thm-regularity-notions-and-permutation-invariance-local`; `ex-koszul-resolution-betti-table-complete-intersection`; `def-cohen-macaulay-local-module-and-ring`, `cor-every-system-of-parameters-is-regular-in-a-cohen-macaulay-module` |
| JM §§1--3: fractional ideals; Dedekind/DVR definitions; DVR equivalences | `def-fractional-ideal`; `def-dedekind-domain`, `def-discrete-valuation-ring`; `thm-equivalent-characterisations-of-a-dvr` |
| JM §§4--7: DVR completion; Dedekind equivalence; ideal factorization; torsion-free modules | `thm-completion-of-a-dvr-is-a-dvr`, with group construction cited by `cor-group-theoretic-p-adics-agree-with-adic-ring-completion`; `cor-dedekind-equivalence-local-dvr-form`; `thm-unique-factorisation-of-ideals-in-dedekind-domains`; `thm-steinitz-classification-over-a-dedekind-domain` |
| BM Ch. 1 §§1--3: affine sets/Nullstellensatz/irreducibility | `lem-affine-algebra-points-as-k-algebra-maps`, `thm-strong-nullstellensatz`, `lem-irreducible-vanishing-set-iff-radical-prime`; geometric wording is inline in the first item |
| BM CA interludes 1--4: finiteness; localization; dimension; integrality | `thm-hilbert-basis-theorem`; ring localization already published and local criteria targeted to `thm-local-criterion-for-exactness-of-modules`; `cor-affine-domain-dimension-equals-transcendence-degree`; `thm-integral-element-finite-module-characterisation` |
| WL Lectures 24--25: height/PIT; regular/graded; completion/Cohen | `thm-krull-principal-ideal-theorem`, `thm-krull-height-theorem`; `cor-associated-graded-of-regular-local-ring-polynomial`; `cor-completion-preserves-local-dimension`, `cor-equicharacteristic-complete-local-power-series-quotient` |
| H615 April 13: coefficient fields; power-series presentations; finite regular subrings; mixed characteristic | `cor-equicharacteristic-complete-local-ring-has-coefficient-field`; `cor-equicharacteristic-complete-local-power-series-quotient`; `cor-complete-local-domain-finite-over-a-regular-power-series-ring`; mixed-characteristic material remains deferred for the stated Cohen-ring/formal-smoothness blocker |

### 10.2 Auditable pair-by-pair treatment table

“Entire §N PDF” means that independently downloadable lecture was read from
first to last page.  Existing sources are retained where they are stronger;
the table makes clear that no pair rests on a passing mention in a general
text.

| pair | treatment 1, exact range | treatment 2, exact range | further independent check |
|---|---|---|---|
| CA-1 | H20 Ch. 5 §§1--5, pp. 71--92 | BU entire §§2--3 PDFs | Altman--Kleiman §16, pp. 96--107 |
| CA-2 | H20 Ch. 2 §§1--7, pp. 19--36, and Ch. 7 §§1--4, pp. 109--120 | BU entire §§4--5 and §11 PDFs | TN §7 and §§7.2--7.4, pp. 22--29 |
| CA-3 | H20 Ch. 1 §§1--6, pp. 5--18 | BU entire §6 PDF | TN §§2--3, pp. 11--13 |
| CA-4 | H20 Ch. 9, pp. 137--140 | TN §12, pp. 52--53 | BU entire §7 PDF |
| CA-5 | H20 Ch. 8, pp. 121--136 | BU entire §§8--10 PDFs | Altman--Kleiman §18, pp. 117--130 |
| CA-6 | H20 Ch. 3 §§1--7, pp. 37--56 | BU entire §§11--13 and §24 PDFs | TN §10, pp. 42--48 |
| CA-7 | H20 Ch. 4 §§1--5, pp. 57--68 | TN §11, pp. 49--51 | BU entire §14 PDF; BM Ch. 1 §§1--2, pp. 1--6, as convention check |
| CA-8 | TN §13, pp. 54--57 | JM §§2--4, pp. 2--7 | Mustaţă Ch. 10 §§1--3 |
| CA-9 | H20 Ch. 12 §§1--6, pp. 157--172 | JM §§1--3 and §§5--7, pp. 1--5 and 7--12 | TN §13, pp. 54--57 |
| CA-10 | H20 Ch. 10, pp. 141--148 | BU entire §§21--23 PDFs | WL Lectures 24--25, pp. 62--69 |
| CA-11 | H20 Ch. 13 §§3--5, pp. 177--182 | BU entire §§3, 15 and 17 PDFs | R710 Lectures 9--10, pp. 8--13 |
| CA-12 | H20 Ch. 6 §4 and Ch. 7 §§1--4, pp. 106--120 | V25 §§25.1--25.6, pp. 569--594 | BU entire §18 PDF |
| CA-13 | H20 Ch. 13 §§1--5, pp. 173--182 | R710 Lectures 7--10, pp. 1--13 | BU entire §19 PDF; WL Lecture 25, pp. 66--69 |
| CA-14 | R710 Lectures 7--8, pp. 1--8 | BU entire §20 PDF | H615 April 13 structure segment; WL Lecture 25, pp. 66--69 |
| CA-15 | H20 Ch. 1 §§1--6, pp. 5--18 | TN §§2--3, pp. 11--13 | BM Ch. 1 §§1--3, pp. 1--8 |
| CA-16 | RG5 §§5.1--5.2, pp. 1--8 | V28 §§28.1--28.2, pp. 627--632 | Stacks, More on Algebra §§15--17 |
| CA-17 | RG6 §§6.1--6.2, pp. 1--8 | V28 §28.5, pp. 634--636 | Huneke--Stone CA II Ch. 2, Thms. 14--31 |
| CA-18 | RG5 §5.2, pp. 4--8 | WL Lecture 25, pp. 66--69 | Mustaţă Ch. 12 §§1--4 and Huneke--Stone CA II Chs. 1--2 |

No row is single-backed.  BM is explicitly only a convention/application
check because its algebra interludes omit several hard proofs; it never serves
as one of the two proof treatments.

### 10.3 Convention disagreements resolved

| issue | treatments compared | adopted library convention and reason |
|---|---|---|
| local versus quasilocal | H20 sometimes reserves “local” for a Noetherian quasilocal ring; TN, BU, Milne and Stacks use “local” for any ring with one maximal ideal. | Keep the published unique-maximal-ideal definition with no Noetherian hypothesis.  Every theorem needing Noetherianity states it. |
| Dedekind domains and fields | JM begins from invertibility/local-DVR formulations; other texts variously allow a field as a zero-dimensional Dedekind ring. | Keep §3's Noetherian, normal, dimension-one domain definition, so fields are excluded.  CA-9 proves equivalence with nonzero-ideal invertibility and local DVRs. |
| DVR | JM uses a local-Dedekind formulation and TN starts from a surjective discrete valuation; Stacks also gives principal-maximal-ideal and dimension-one normal formulations. | Define the valuation and local-ring forms separately, then prove their equivalence for a nonfield domain.  This prevents an unnoticed field edge case. |
| Henselian | R710 foregrounds coprime monic factor lifting; BU foregrounds simple-root lifting. | Keep factor lifting as the definition and prove equivalence with simple-root lifting before either is used. |
| regular sequence | RG5's working formulation does not always repeat the terminal proper-ideal condition; Vakil and Stacks make the nonunit boundary explicit. | Keep §3's ordered sequence generating a proper ideal.  Unit and zero-module edge cases are stated separately below. |
| depth | RG6 defines depth via regular sequences and immediately compares Ext; some homological treatments start with the first nonzero Ext. | Define via maximal regular-sequence length; prove the Ext and Koszul characterisations only after their homological prerequisites exist. |
| zero ring dimension | sources vary between leaving it undefined and assigning \(-\infty\). | Keep §3's explicit codomain-sensitive convention; every dimension theorem below either excludes the zero ring or handles it separately. |
| flatness ownership | H20 and V25 define flat modules inside commutative algebra, while the commission assigns the basic definition to abstract algebra. | Continue citing `def-flat-module`; this track owns ring-map flatness, faithful flatness, local criteria and descent only. |
| \(p\)-adic completion | JM constructs the completed DVR algebraically; the seam ruling assigns the underlying \(p\)-adic group construction to group theory. | Cite the group-theory construction and prove only its agreement with the \((p)\)-adic ring completion here. |

### 10.4 Added decompositions

Each row below is a distinct library obligation, not a restatement of its
parent heading.  “Proof altered” means the published proof has been split at
the named conceptual move and its dependencies replaced by stable library
citations; it does not mean the statement was generated.

#### CA-1 additions — `noetherian-rings-and-hilbert-basis` and companion

| target | id | kind | focused statement | explicit provenance |
|---|---|---|---|---|
| A | `lem-union-of-an-ascending-chain-of-ideals` | `lem` | The union of an ascending chain of ideals is an ideal, and it is finitely generated only if all of its generators occur at one finite stage. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 5 §2, pp. 77--80, supplies the ACC argument, split here at the union/stabilisation step. |
| A | `lem-noetherian-acc-from-finite-generation` | `lem` | If every ideal of a ring is finitely generated, every ascending chain of ideals stabilises. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 5 §2 and BU §2 prove the equivalence; this row isolates the finite-stage generator argument and cites the sibling definition. |
| A | `lem-noetherian-maximal-counterexample-principle` | `lem` | In a Noetherian ring, every nonempty collection of ideals has a maximal member, so a hereditary failure property has a maximal counterexample. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 5 §2, pp. 77--80, is the source; the row exposes the exact engine used by Noetherian induction. |
| A | `cor-noetherian-induction-minimal-counterexample-form` | `cor` | A property of ideals holds everywhere if any ideal minimal among its failures can be enlarged to a strictly larger failure. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 5 §2 derives this contrapositive form; it is separated because later primary-decomposition proofs invoke it directly. |
| A | `lem-bounded-degree-polynomials-form-a-finite-free-module` | `lem` | Polynomials of degree at most \(n\) form a free \(R\)-module with basis \(1,x,\ldots,x^n\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 5 §3 and BU §2 use this module in the Hilbert-basis proof; the basis check is the needed finite-stage lemma. |
| A | `lem-leading-coefficient-stage-is-an-ideal` | `lem` | For an ideal \(I\subseteq R[x]\), the leading coefficients of elements of \(I\) of degree at most \(n\), together with zero, form an ideal of \(R\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 5 §3 and Altman--Kleiman (16.12); the zero-polynomial boundary is made explicit. |
| A | `lem-leading-coefficient-stage-chain-stabilises` | `lem` | If \(R\) is Noetherian, the bounded-degree leading-coefficient ideals of \(I\subseteq R[x]\) stabilise. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 5 §3 proves this by ACC; it is the first independent move in Hilbert basis. |
| A | `lem-hilbert-basis-degree-cancellation` | `lem` | Once finitely many polynomials realise generators of the stable leading-coefficient ideal, every sufficiently high-degree element of \(I\) can have its leading term cancelled by their polynomial multiples. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 5 §3 and BU §2 contain the reduction; the row isolates cancellation from the induction that follows. |
| A | `lem-hilbert-basis-low-degree-remainder-module` | `lem` | The ideal elements below the stabilisation degree form a submodule of a finite free \(R\)-module and hence are finitely generated when \(R\) is Noetherian. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 5 §3 completes Hilbert basis this way; the sibling Noetherian-module theorem supplies submodule finiteness. |
| A | `cor-polynomial-ideal-has-a-finite-degree-reduction-system` | `cor` | Over a Noetherian coefficient ring, every polynomial ideal admits finitely many members such that repeated leading-term cancellation reaches their bounded-degree span. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 5 §3; this is the reusable constructive content of its Hilbert-basis proof, without asserting a Gröbner basis. |
| A | `lem-quotient-of-a-noetherian-ring-ideal-lifting` | `lem` | Ideals of \(R/I\) lift to ideals of \(R\), and finite generators of the lift descend to finite generators of the quotient ideal. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: BU §2 and H20 Ch. 5 §2; the row records the proof move behind quotient stability rather than re-stating correspondence. |
| A | `lem-localised-ideal-generated-by-contracted-numerators` | `lem` | Every ideal of \(S^{-1}R\) is generated by the images of any generating set of its contraction to \(R\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 2 and Ch. 5; this is the numerator argument used in Noetherian localization and does not claim extension-contraction equality for arbitrary ideals. |
| A | `cor-finite-products-of-noetherian-rings-are-noetherian` | `cor` | A finite direct product of Noetherian rings is Noetherian. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 5 exercises and BU §2 derive it from the componentwise description of ideals. |
| A | `cor-direct-summands-of-noetherian-modules-are-noetherian` | `cor` | Every direct summand of a Noetherian module is Noetherian. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 5 §1; projection sends an ascending chain to the corresponding chain in the summand. |
| A | `lem-kernel-between-finite-modules-over-a-noetherian-ring-is-finite` | `lem` | The kernel of a map between finite modules over a Noetherian ring is finite. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 5 §1 and BU §2; this is the relation-module step behind finite presentation. |
| A | `cor-cokernel-of-a-map-of-finitely-presented-modules-is-finitely-presented` | `cor` | Over a Noetherian ring, the cokernel of a map between finitely presented modules is finitely presented. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 5 §4; the finite kernel lemma supplies the finite relation module after lifting to finite free presentations. |
| A | `lem-artin-tate-coefficient-subalgebra` | `lem` | In the Artin--Tate setup, adjoining the finitely many coefficients occurring in algebra-generator expressions and module multiplication produces a finite-type Noetherian intermediate algebra \(A'\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: Altman--Kleiman (16.21), checked against H20 Ch. 5 §4; this is the bookkeeping move usually hidden inside the theorem. |
| A | `lem-artin-tate-intermediate-ring-is-finite-over-coefficient-ring` | `lem` | With \(A'\) as above, the intermediate ring \(B\) is a finite \(A'\)-module. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: Altman--Kleiman (16.21); the chosen module generators and recorded multiplication coefficients give the finite spanning argument. |
| A | `lem-cohen-criterion-maximal-bad-ideal` | `lem` | If a ring has a non-finitely-generated ideal, the ideals not finitely generated have a maximal member provided every prime ideal is finite. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 5 Noetherian criteria and Altman--Kleiman (16.10); a chain union is finite only if it appears at one stage, so Zorn applies. |
| A | `lem-cohen-criterion-maximal-bad-ideal-is-prime` | `lem` | An ideal maximal among non-finitely-generated ideals is prime. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: Altman--Kleiman (16.10) and the Oka-family proof; the two finitely generated enlargements and a colon ideal yield finite generation of the alleged bad ideal. |
| A | `lem-kernels-of-iterates-of-an-endomorphism-stabilise-noetherian` | `lem` | For an endomorphism of a Noetherian module, the ascending chain of kernels of its iterates stabilises. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 5 §1; it is the exact ACC input to the Hopfian corollary already scaffolded. |
| A | `thm-formal-power-series-hilbert-basis` | `thm` | If \(R\) is Noetherian, then \(R[[x]]\) is Noetherian. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 5 §5, pp. 88--92; the proof is split into coefficient-ideal stabilisation and convergent elimination, both added below. |
| A | `lem-power-series-initial-coefficient-ideals-stabilise` | `lem` | Initial coefficients of elements of an ideal in \(R[[x]]\), sorted by order, form an ascending chain of ideals that stabilises when \(R\) is Noetherian. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 5 §5; it is the formal-series analogue of the polynomial leading-coefficient lemma. |
| A | `lem-power-series-successive-elimination-converges-adically` | `lem` | Successive cancellation of initial terms in \(R[[x]]\) produces coefficient series whose partial sums converge in the \((x)\)-adic topology and recover the original series. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 5 §5; the topology and coefficientwise limit are stated so the infinite reduction is not disguised as finite division. |
| A | `cor-finite-variable-formal-power-series-ring-noetherian` | `cor` | If \(R\) is Noetherian, \(R[[x_1,\ldots,x_n]]\) is Noetherian for every finite \(n\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 5 §5, iterating the one-variable theorem and the canonical iterated-series identification. |
| B | `ex-noetherian-induction-on-radical-ideals` | `ex` | Work a maximal-counterexample proof that a radical ideal in a Noetherian ring has finitely many minimal primes, while deferring the theorem itself to CA-3. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Chs. 5 and 8 use this standard induction; the exercise makes the cross-page dependency explicit. |
| B | `ex-leading-coefficient-stages-before-stabilisation` | `ex` | Compute the leading-coefficient ideals of \((2x,3x^2,x^3)\subseteq\mathbb Z[x]\) at each bounded degree. | provenance.statement: ai-generated source-derived exercise; provenance.proof: ai-altered; rationale: H20 Ch. 5 §3 exercises motivate stagewise leading ideals; this finite computation checks the boundary before stabilisation. |
| B | `ex-formal-power-series-hilbert-reduction` | `ex` | Carry out the first three stages of the initial-coefficient elimination for an explicit ideal of \(k[[x]]\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 5 §5 supplies the algorithm; finite truncation makes the convergence mechanism checkable. |
| B | `ex-infinite-variable-formal-power-series-ring-not-noetherian` | `ex` | Show that the ideal \((x_1,x_2,\ldots)\) in a countably infinite-variable formal-series ring is not finitely generated. | provenance.statement: ai-generated standard counterexample; provenance.proof: literature-derived; rationale: H20 Ch. 5's finite-variable restriction requires this boundary; quotienting away all but a missing variable proves it. |
| B | `ex-surjective-shift-on-a-nonnoetherian-module` | `ex` | Give a surjective noninjective shift endomorphism of a non-Noetherian module, showing why the Hopfian conclusion needs the chain condition. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 5 exercises use the direct-sum shift as the standard hypothesis test. |
| B | `ex-arbitrary-product-of-noetherian-rings-not-noetherian` | `ex` | Exhibit the ascending chain of finite-support idempotent ideals in an infinite product of fields. | provenance.statement: ai-generated standard counterexample; provenance.proof: ai-altered; rationale: BU §2's finite-product closure does not extend to arbitrary products; the idempotents make failure explicit. |

#### CA-2 additions — `localisation-of-modules-support-and-nakayama` and companion

| target | id | kind | focused statement | explicit provenance |
|---|---|---|---|---|
| A | `lem-localised-module-fraction-equivalence-is-an-equivalence-relation` | `lem` | The usual relation \((m,s)\sim(n,t)\) iff some \(u\in S\) kills \(u(tm-sn)\) is reflexive, symmetric and transitive. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 2 §2 and TN §7; this is separated from the module-operation checks. |
| A | `lem-localised-module-addition-independent-of-representatives` | `lem` | Addition \(m/s+n/t=(tm+sn)/(st)\) is independent of representatives. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 2 §2; the common-annihilator calculation is a distinct well-definedness obligation. |
| A | `lem-localised-module-scalar-action-independent-of-representatives` | `lem` | The \(S^{-1}R\)-action \((a/u)(m/s)=am/(us)\) is independent of both representatives. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 2 §2 and BU §4; the proof uses the two fraction relations separately. |
| A | `lem-module-localisation-canonical-map-is-linear` | `lem` | The map \(M\to S^{-1}M\), \(m\mapsto m/1\), is \(R\)-linear and sends every \(s\in S\) to an invertible scalar action. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: TN §7 and H20 Ch. 2 §2; this is the data needed for the universal property. |
| A | `lem-module-localisation-universal-map-formula` | `lem` | Any \(R\)-linear map from \(M\) to an \(S^{-1}R\)-module factors uniquely by \(m/s\mapsto s^{-1}f(m)\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 2 §2; representative-independence and uniqueness are isolated from the theorem wrapper. |
| A | `lem-localisation-tensor-comparison-map` | `lem` | The mutually inverse maps \(S^{-1}R\otimes_R M\rightleftarrows S^{-1}M\) are \((a/s)\otimes m\mapsto am/s\) and \(m/s\mapsto (1/s)\otimes m\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 6 and BU §5; balancedness and inverse checks supply the existing tensor comparison theorem. |
| A | `lem-localisation-preserves-injectivity` | `lem` | If \(M'\to M\) is injective, then \(S^{-1}M'\to S^{-1}M\) is injective. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 2 §3; the zero-fraction criterion turns vanishing into annihilation by one denominator. |
| A | `lem-localisation-preserves-surjectivity` | `lem` | If \(M\to M''\) is surjective, then \(S^{-1}M\to S^{-1}M''\) is surjective. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 2 §3; lift the numerator and retain its denominator. |
| A | `cor-localisation-commutes-with-kernels-images-and-cokernels` | `cor` | Localization carries the kernel, image and cokernel of a module map to the corresponding kernel, image and cokernel after localization. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 2 §3 and BU §4; exactness gives all three identifications. |
| A | `cor-localisation-commutes-with-finite-intersections-of-submodules` | `cor` | For submodules \(N_1,\ldots,N_r\subseteq M\), localization identifies \(S^{-1}(\bigcap_iN_i)\) with \(\bigcap_iS^{-1}N_i\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 2 §3; express a finite intersection as the kernel of the map to \(\bigoplus M/N_i\). |
| A | `lem-localisation-of-hom-natural-map` | `lem` | There is a natural map \(S^{-1}\operatorname{Hom}_R(M,N)\to\operatorname{Hom}_{S^{-1}R}(S^{-1}M,S^{-1}N)\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 7 and BU §5; this row constructs the map before finite-presentation hypotheses enter. |
| A | `lem-localised-hom-finite-free-case` | `lem` | The Hom-localization map is an isomorphism when its first argument is finite free. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 7 §3; both sides identify with a finite direct sum of \(S^{-1}N\). |
| A | `lem-localised-hom-finite-presentation-kernel-step` | `lem` | A finite presentation of \(M\) reduces the Hom-localization comparison to the finite-free case by a kernel diagram. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 7 §3 and BU §5; this is the finite-presentation step of the existing theorem. |
| A | `cor-module-is-zero-iff-all-maximal-localisations-are-zero` | `cor` | A module is zero iff its localization at every maximal ideal is zero. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 2 local criteria; a nonzero element has a proper annihilator contained in a maximal ideal. |
| A | `cor-module-map-is-injective-iff-locally-injective` | `cor` | A module map is injective iff all of its prime localizations, equivalently all maximal localizations, are injective. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 2 §5; apply the local zero criterion to the kernel and use exactness. |
| A | `cor-module-map-is-surjective-iff-locally-surjective` | `cor` | A module map is surjective iff all of its prime localizations, equivalently all maximal localizations, are surjective. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 2 §5; apply the local zero criterion to the cokernel. |
| A | `lem-support-membership-by-annihilator` | `lem` | A prime \(\mathfrak p\) lies in \(\operatorname{Supp}M\) iff some element of \(M\) has annihilator contained in \(\mathfrak p\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 2 §6; the zero-fraction criterion supplies both directions. |
| A | `cor-support-empty-iff-module-zero` | `cor` | The support of an arbitrary module is empty exactly when the module is zero. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 2 §6; no finite-generation hypothesis is needed. |
| A | `thm-support-of-an-arbitrary-direct-sum` | `thm` | The support of a direct sum of modules is the union of their supports. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 2 §6; localization commutes with direct sums and a direct sum is zero iff every summand is zero. |
| A | `lem-support-of-a-cyclic-module-is-its-vanishing-set` | `lem` | \(\operatorname{Supp}(R/I)=V(I)\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 2 §6 and BU §6; localization of the cyclic module is zero precisely when the localized ideal is the unit ideal. |
| A | `lem-support-of-a-finite-module-is-union-of-generator-cyclic-supports` | `lem` | If \(m_1,\ldots,m_r\) generate \(M\), then \(\operatorname{Supp}M=\bigcup_iV(\operatorname{Ann}(m_i))\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 2 §6; the finite union is then \(V(\operatorname{Ann}M)\). |
| A | `lem-jacobson-radical-is-intersection-of-maximal-ideals` | `lem` | The Jacobson radical equals the intersection of all maximal ideals, with the empty intersection convention handling the zero ring. | provenance.statement: literature-derived; provenance.proof: not-applicable; rationale: H20 Ch. 2 §7 and TN §7.2 give this definition/form; the zero-ring boundary is recorded explicitly. |
| A | `lem-jacobson-unit-test-one-minus-ax` | `lem` | An element \(x\) lies in the Jacobson radical iff \(1-ax\) is a unit for every \(a\in R\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 2 §7; a nonunit is placed in a maximal ideal for the reverse direction. |
| A | `lem-determinant-trick-for-nakayama` | `lem` | If a finite module \(M\) satisfies \(M=IM\), then some \(a\in I\) obeys \((1-a)M=0\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: BU §11 and R710 Lecture 7; the adjugate calculation is cited from the published determinant trick and exposed as Nakayama's engine. |
| A | `cor-nakayama-ideal-form` | `cor` | If \(I\subseteq\operatorname{Jac}(R)\), \(M\) is finite, and \(M=IM\), then \(M=0\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 2 §7 and TN §7.4; \(1-a\) from the determinant trick is a unit. |
| A | `cor-nakayama-endomorphism-form` | `cor` | If \(M\) is finite and an endomorphism has image containing \(M/IM\) modulo an ideal in \(\operatorname{Jac}(R)\), then it is surjective. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 2 §7; apply Nakayama to the cokernel. |
| A | `lem-local-minimal-generators-map-to-a-residue-field-basis` | `lem` | Over a local ring \((R,\mathfrak m,k)\), a finite generating set of \(M\) is minimal iff its images form a \(k\)-basis of \(M/\mathfrak mM\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 2 §7 and TN §7.4; spanning is Nakayama and linear dependence permits deleting a generator. |
| A | `cor-minimal-number-of-generators-is-residue-dimension` | `cor` | For finite \(M\) over a local ring, \(\mu_R(M)=\dim_k(M/\mathfrak mM)\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 2 §7; it packages the preceding basis criterion into the numerical invariant used by CA-18. |
| A | `cor-finite-module-cyclic-near-a-prime` | `cor` | If \(M_\mathfrak p\) is cyclic and \(M\) is finitely presented, then \(M_f\) is cyclic for some \(f\notin\mathfrak p\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 2 local finite-presentation argument; localize the cokernel of one chosen generator and clear finitely many denominators. |
| A | `cor-finite-module-generated-by-r-elements-near-a-prime` | `cor` | If \(M_\mathfrak p\) is generated by \(r\) elements and \(M\) is finitely presented, the same holds on some localization \(M_f\) with \(f\notin\mathfrak p\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 2 and V25 §25.2; apply the locally-zero-near-a-prime lemma to the presentation cokernel. |
| B | `ex-localised-module-equivalence-needs-a-common-annihilator` | `ex` | Check transitivity of the fraction relation in a module with torsion and show why equality cannot be defined by the bare cross-product equation. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: TN §7 flags the annihilator multiplier; the example tests the well-definedness boundary. |
| B | `ex-support-of-an-infinite-direct-sum` | `ex` | Compute the support of \(\bigoplus_p\mathbb Z/p\mathbb Z\) over \(\mathbb Z\). | provenance.statement: ai-generated source-derived example; provenance.proof: literature-derived; rationale: H20 Ch. 2 §6's arbitrary direct-sum formula gives exactly the nonzero prime ideals. |
| B | `ex-support-of-a-product-strictly-larger-than-union` | `ex` | Use \(\prod_p\mathbb Z/p\mathbb Z\) to show that support of an infinite product need not equal the union of the factor supports. | provenance.statement: ai-generated standard counterexample; provenance.proof: ai-altered; rationale: H20 Ch. 2 distinguishes sums from products; localization at \((0)\) detects the boundary. |
| B | `ex-nakayama-jacobson-hypothesis-is-essential` | `ex` | Take \(R=\mathbb Z\), \(I=(2)\), and a suitable finite module to show \(M=IM\) need not imply \(M=0\) when \(I\not\subseteq\operatorname{Jac}(R)\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: TN §7.4 exercises use \(\mathbb Z/3\mathbb Z\), on which multiplication by two is surjective. |
| B | `ex-residue-dimension-counts-minimal-generators` | `ex` | Compute \(\mu_R((x,y))\) in \(k[x,y]_{(x,y)}\) from \((x,y)/(x,y)^2\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 2 §7 uses this standard local-generator computation. |
| B | `ex-cyclic-at-a-prime-on-a-basic-neighbourhood` | `ex` | For a presented module given by a small matrix, find an explicit minor whose inversion makes the module cyclic. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 2 local-presentation exercises; the minor calculation realizes denominator clearing. |
| B | `ex-localisation-kills-exactly-s-torsion` | `ex` | For \(M=\mathbb Z/12\mathbb Z\) and selected multiplicative sets, compute the kernel of \(M\to S^{-1}M\). | provenance.statement: ai-generated source-derived example; provenance.proof: literature-derived; rationale: TN §7 and H20 Ch. 2 illustrate the zero-fraction criterion arithmetically. |

#### CA-3 additions — `prime-spectra-radicals-and-dimension-language` and companion

| target | id | kind | focused statement | explicit provenance |
|---|---|---|---|---|
| A | `lem-radical-membership-by-a-power` | `lem` | An element lies in \(\sqrt I\) exactly when one of its positive powers lies in \(I\), including the unit-ideal and zero-ring boundaries. | provenance.statement: literature-derived; provenance.proof: not-applicable; rationale: H20 Ch. 1 §1 and BU §6 give the elementwise definition; edge cases are recorded for later use. |
| A | `lem-radical-of-an-intersection` | `lem` | For a finite family of ideals, \(\sqrt{\bigcap_i I_i}=\bigcap_i\sqrt{I_i}\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 1 §2; multiplying suitable powers gives the reverse inclusion. |
| A | `lem-radical-of-a-product` | `lem` | \(\sqrt{IJ}=\sqrt{I\cap J}=\sqrt I\cap\sqrt J\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 1 §2 and BU §6; use \(IJ\subseteq I\cap J\) and products of witnessing powers. |
| A | `lem-radical-commutes-with-quotient-correspondence` | `lem` | Ideals radical over \(I\) correspond to radical ideals of \(R/I\), and \(\sqrt{J/I}=\sqrt J/I\) for \(I\subseteq J\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 1 §2; translate power membership through the quotient map. |
| A | `lem-radical-commutes-with-localisation` | `lem` | \(S^{-1}\sqrt I=\sqrt{S^{-1}I}\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 2 and BU §4; clear the denominator from a power lying in the extended ideal. |
| A | `cor-reduced-quotient-by-the-nilradical` | `cor` | \(R/\sqrt{(0)}\) is reduced and is universal among maps from \(R\) to reduced rings. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 1 §5; nilpotents are exactly the elements every map to a reduced ring must kill. |
| A | `lem-prime-containing-a-multiplicative-set-disjoint-ideal` | `lem` | If an ideal \(I\) is disjoint from a multiplicative set \(S\), there is a prime ideal containing \(I\) and disjoint from \(S\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 1 §1 and TN §7; Zorn gives a maximal disjoint ideal and the multiplicative-set argument proves it prime. |
| A | `cor-prime-containing-an-ideal-avoiding-an-element` | `cor` | If no power of \(f\) lies in \(I\), some prime contains \(I\) but not \(f\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 1 §1; apply the preceding lemma to \(S=\{1,f,f^2,\ldots\}\). |
| A | `lem-radical-intersection-proof-forward-inclusion` | `lem` | Every prime containing \(I\) contains \(\sqrt I\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 1 §1; primality removes powers one factor at a time. |
| A | `lem-radical-intersection-proof-separating-prime` | `lem` | If \(f\notin\sqrt I\), a prime containing \(I\) and avoiding \(f\) separates \(f\) from the intersection of all primes over \(I\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 1 §1 and BU §6; this isolates the Zorn-dependent reverse inclusion. |
| A | `cor-ring-reduced-iff-zero-is-an-intersection-of-primes` | `cor` | A ring is reduced iff its zero ideal is an intersection of prime ideals. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 1 §5; combine the nilradical theorem with the definition of reduced. |
| A | `lem-vanishing-set-reverses-inclusions` | `lem` | If \(I\subseteq J\), then \(V(J)\subseteq V(I)\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 1 §2 and BU §6; it is the order reversal used throughout CA-15. |
| A | `lem-vanishing-set-of-an-arbitrary-sum` | `lem` | \(V(\sum_\lambda I_\lambda)=\bigcap_\lambda V(I_\lambda)\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 1 §2; a prime contains the sum exactly when it contains every summand. |
| A | `lem-vanishing-set-of-a-finite-product` | `lem` | \(V(I_1\cdots I_n)=\bigcup_iV(I_i)\) for a finite family. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 1 §2; primality supplies the finite product implication. |
| A | `lem-distinguished-subset-identities` | `lem` | \(D(0)=\varnothing\), \(D(1)=\operatorname{Spec}R\), \(D(fg)=D(f)\cap D(g)\), and \(D(f)=D(f^n)\) for \(n>0\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 1 §2; these are algebraic prime-membership identities, not yet topological basis claims. |
| A | `lem-distinguished-subset-cover-detects-radical` | `lem` | \(D(f)\subseteq\bigcup_iD(f_i)\) iff \(f\in\sqrt{(f_i)}\); for a finite subcover one power of \(f\) lies in the finitely generated ideal. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 1 and BU §6; the radical-intersection theorem gives the equivalence, later used for compactness in CA-15. |
| A | `lem-spectrum-map-respects-composition-and-identities` | `lem` | Contraction makes \(\operatorname{Spec}\) a contravariant functor on commutative rings. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 1 §3 and TN §2; inverse images of ideals compose and preserve primality. |
| A | `lem-spectrum-map-preimage-of-vanishing-set` | `lem` | For \(\varphi:R\to A\), the inverse image under \(\operatorname{Spec}A\to\operatorname{Spec}R\) of \(V(I)\) is \(V(IA)\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 1 §3; the contraction contains \(I\) exactly when the prime contains its extension. |
| A | `lem-primes-of-a-quotient-are-primes-over-the-kernel` | `lem` | Contraction along \(R\to R/I\) identifies primes of the quotient with primes of \(R\) containing \(I\), preserving strict inclusions. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 1 §3 and BU §6; this is the order-preserving content behind the existing bijection. |
| A | `lem-primes-of-a-localisation-avoid-the-multiplicative-set` | `lem` | Contraction along \(R\to S^{-1}R\) identifies primes of the localization with primes of \(R\) disjoint from \(S\), preserving strict inclusions. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 2 and TN §7; extension and contraction are checked on numerator membership. |
| A | `cor-primes-of-a-prime-local-ring` | `cor` | Primes of \(R_\mathfrak p\) correspond to primes of \(R\) contained in \(\mathfrak p\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 2; specialize the localization correspondence to \(S=R\setminus\mathfrak p\). |
| A | `cor-primes-of-a-principal-localisation` | `cor` | Primes of \(R_f\) correspond to primes of \(R\) not containing \(f\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 2 and BU §6; specialize to powers of \(f\). |
| A | `lem-minimal-prime-over-an-ideal-exists` | `lem` | Every proper ideal has a prime minimal among the primes containing it. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 1 and Ch. 8; localize at a prime over the ideal and apply Zorn to descending chains, whose intersection remains prime in the relevant set. |
| A | `lem-noetherian-minimal-primes-induction-split` | `lem` | If a radical ideal in a Noetherian ring is not prime, elements \(x,y\notin I\) with \(xy\in I\) reduce its minimal primes to those over \(I+(x)\) or \(I+(y)\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 8 and BU §10; this is the strict-enlargement step in the finite-minimal-prime induction. |
| A | `thm-nilradical-of-a-noetherian-ring-is-nilpotent` | `thm` | In a Noetherian ring the nilradical is a nilpotent ideal. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 8 and BU §10; finite generation of the nilradical turns elementwise nilpotence into one common exponent. |
| A | `cor-radical-ideal-has-finitely-many-minimal-primes-noetherian` | `cor` | Every radical ideal in a Noetherian ring is the intersection of its finitely many minimal primes. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 8; finiteness comes from the induction split and equality from the radical-intersection theorem. |
| A | `lem-height-equals-local-dimension` | `lem` | For a prime \(\mathfrak p\), \(\operatorname{ht}(\mathfrak p)=\dim R_\mathfrak p\), with infinite suprema allowed. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 3 and Ch. 10; the prime-localization order bijection preserves chain lengths. |
| A | `cor-dimension-of-a-quotient-as-chains-above-an-ideal` | `cor` | \(\dim(R/I)\) is the supremum of lengths of prime chains in \(R\) all containing \(I\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 1 and Ch. 10; use the quotient prime correspondence. |
| B | `ex-radical-of-a-product-and-intersection` | `ex` | Compute \(\sqrt{(x^2,xy)\cap(y^3)}\) in \(k[x,y]\) using product/intersection identities. | provenance.statement: ai-generated source-derived exercise; provenance.proof: ai-altered; rationale: BU §6 exercises use monomial radicals to test the identities. |
| B | `ex-separating-prime-for-a-missing-radical-element` | `ex` | For an explicit ideal and element outside its radical, construct a prime containing the ideal but avoiding the element. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 1 §1; a polynomial-ring example concretizes the multiplicative-set proof. |
| B | `ex-spectrum-of-a-zero-ring-empty` | `ex` | Verify that the zero ring has empty prime spectrum and check every displayed \(V\) and \(D\) boundary convention. | provenance.statement: ai-generated boundary example; provenance.proof: literature-derived; rationale: H20 Ch. 1 conventions make this degenerate case explicit. |
| B | `ex-primes-in-a-prime-localisation` | `ex` | List the primes of \(k[x,y]_{(x,y)}\) that arise from a specified finite family of primes below \((x,y)\). | provenance.statement: ai-generated source-derived example; provenance.proof: literature-derived; rationale: TN §7 and BU §6 illustrate the order correspondence. |
| B | `ex-noetherian-nilradical-common-exponent` | `ex` | Find a common nilpotence exponent for the nilradical of \(k[x,y]/(x^3,x^2y,y^4)\). | provenance.statement: ai-generated source-derived exercise; provenance.proof: ai-altered; rationale: H20 Ch. 8; finite monomial generators display the theorem's exponent argument. |
| B | `ex-nilradical-need-not-be-nilpotent-nonnoetherian` | `ex` | Show that the nilradical of \(k[x_1,x_2,\ldots]/(x_1,x_2^2,x_3^3,\ldots)\) is not nilpotent. | provenance.statement: literature-derived standard counterexample; provenance.proof: literature-derived; rationale: H20 Ch. 8 uses unbounded nilpotence to show the Noetherian hypothesis is essential. |

#### CA-4 additions — `artinian-rings-and-module-length` and companion

| target | id | kind | focused statement | explicit provenance |
|---|---|---|---|---|
| A | `lem-simple-modules-over-a-commutative-ring-are-residue-fields` | `lem` | Every simple \(R\)-module is isomorphic to \(R/\mathfrak m\) for a maximal ideal \(\mathfrak m\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 9 and BU §7; a nonzero element gives a cyclic surjection whose kernel is maximal. |
| A | `lem-composition-series-refinement-step` | `lem` | Two finite submodule chains admit a common refinement by inserting intersections and sums. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: BU §7 develops length from refinements; the butterfly/isomorphism step is isolated for the additivity theorem. |
| A | `thm-jordan-holder-for-finite-length-modules` | `thm` | Any two composition series of a finite-length module have the same length and the same simple factors up to permutation and isomorphism. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: BU §7 and H20 Ch. 9; induction uses the refinement step and the published isomorphism theorems. |
| A | `lem-length-additivity-surjective-half` | `lem` | In \(0\to M'\to M\to M''\to0\), finite composition series of \(M'\) and \(M''\) splice to one of \(M\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: BU §7; lift the quotient chain and prepend the submodule chain. |
| A | `lem-length-additivity-converse-half` | `lem` | A finite composition series of \(M\) induces finite refinements in \(M'\) and \(M''\), so finite length of \(M\) passes to both. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: BU §7; intersections and images provide the two induced chains. |
| A | `cor-length-is-invariant-under-isomorphism` | `cor` | Isomorphic modules have equal length. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: BU §7; an isomorphism transports a composition series. |
| A | `cor-length-of-a-finite-direct-sum` | `cor` | \(\ell(\bigoplus_{i=1}^nM_i)=\sum_i\ell(M_i)\) whenever the summands have finite length. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: BU §7; iterate short-exact-sequence additivity. |
| A | `cor-finite-length-modules-are-noetherian-and-artinian` | `cor` | Every finite-length module satisfies both chain conditions. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 9 and BU §7; strict submodule inclusions strictly change length. |
| A | `lem-noetherian-artinian-module-has-a-simple-submodule` | `lem` | A nonzero Artinian module has a minimal nonzero submodule, which is simple. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 9; DCC supplies the minimal member. |
| A | `lem-noetherian-artinian-module-composition-series-induction` | `lem` | A Noetherian and Artinian module has a finite composition series by successively quotienting by simple submodules. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 9 and TN §12; ACC prevents the recursively built chain from continuing indefinitely. |
| A | `cor-finite-length-iff-noetherian-and-artinian` | `cor` | A module has finite length iff it is both Noetherian and Artinian. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 9 and BU §7; the two directions are the preceding chain lemmas. |
| A | `lem-artinian-domain-field-proof` | `lem` | In an Artinian domain, the chain \((a)\supseteq(a^2)\supseteq\cdots\) stabilises and cancellation produces an inverse for every nonzero \(a\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: TN §12 and H20 Ch. 9; this exposes the cancellation move behind the existing theorem. |
| A | `cor-prime-quotient-of-an-artinian-ring-is-a-field` | `cor` | If \(R\) is Artinian and \(\mathfrak p\) is prime, then \(R/\mathfrak p\) is a field. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: TN §12; quotients preserve Artinianity and the quotient is a domain. |
| A | `lem-artinian-ring-has-no-infinite-pairwise-comaximal-family` | `lem` | An Artinian ring has no infinite family of distinct maximal ideals whose successive finite products strictly decrease. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 9; DCC and comaximality force the finite-maximal-ideal conclusion. |
| A | `lem-artinian-nilradical-finitely-generated` | `lem` | Once an Artinian ring is known Noetherian, its nilradical is generated by finitely many nilpotent elements. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Chs. 8--9 and TN §12; this isolates the dependency used to obtain a uniform nilpotence exponent. |
| A | `lem-artinian-ring-minimal-ideal-splitting` | `lem` | If the descending powers of a maximal ideal stabilise nontrivially, a minimal nonzero ideal in the stable power yields an idempotent splitting. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 9's proof that Artinian rings are Noetherian; this is the structural alternative that contradicts indecomposability. |
| A | `lem-artinian-local-maximal-ideal-nilpotence` | `lem` | In an Artinian local ring, stabilization of \(\mathfrak m^n\) and Nakayama force \(\mathfrak m^n=0\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: TN §12 and H20 Ch. 9; the finite-generation and Jacobson hypotheses are stated rather than hidden. |
| A | `cor-artinian-local-ring-residue-filtration` | `cor` | An Artinian local ring has a finite filtration \(R\supset\mathfrak m\supset\cdots\supset\mathfrak m^N=0\) whose factors are vector spaces over its residue field. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 9 and BU §7; multiplication by \(\mathfrak m\) kills each successive factor. |
| A | `lem-powers-of-distinct-maximal-ideals-are-comaximal` | `lem` | If \(\mathfrak m\ne\mathfrak n\) are maximal, then \(\mathfrak m^a+\mathfrak n^b=R\) for all positive \(a,b\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: TN §12; expand \((u+v)^{a+b-1}=1\) for \(u\in\mathfrak m,v\in\mathfrak n,u+v=1\). |
| A | `lem-artinian-zero-ideal-as-comaximal-primary-intersection` | `lem` | In an Artinian ring with maximal ideals \(\mathfrak m_i\), suitable powers \(\mathfrak m_i^{N_i}\) have zero intersection and are pairwise comaximal. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 9 and TN §12; nilradical nilpotence gives the intersection and the powers lemma gives comaximality. |
| A | `lem-artinian-product-idempotents` | `lem` | The Chinese-remainder isomorphism produces orthogonal idempotents summing to one and identifying each Artinian local factor. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 9; lift coordinate units through the CRT isomorphism. |
| A | `cor-artinian-ring-local-factors-unique-up-to-order` | `cor` | The decomposition of an Artinian ring into nonzero Artinian local rings is unique up to permutation and isomorphism. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 9; primitive clopen idempotents/maximal-ideal factors determine the components. |
| A | `cor-artinian-reduced-ring-is-a-finite-product-of-fields` | `cor` | A reduced Artinian ring is a finite product of fields. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: TN §12 and H20 Ch. 9; the local maximal ideals are nilpotent and hence zero. |
| A | `cor-artinian-local-ring-only-idempotents-are-zero-and-one` | `cor` | A local ring, hence each Artinian local factor, has no idempotents other than zero and one. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: TN §7.2 and §12; one of \(e,1-e\) is a unit. |
| A | `cor-artinian-finite-type-algebra-over-a-field-is-finite-dimensional` | `cor` | An Artinian finitely generated algebra over a field is finite-dimensional as a vector space. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: TN §§11--12; each local residue field is finite over the base by Zariski's lemma and the nilpotent filtration has finite factors. |
| A | `lem-length-localisation-at-maximal-ideals-has-finite-support` | `lem` | A finite-length module has nonzero localization at only finitely many maximal ideals. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: BU §7; its simple factors are residue fields at finitely many maximal ideals. |
| A | `thm-length-sum-over-maximal-localisations` | `thm` | For a finite-length module, its length is the sum of the lengths of its localizations over the finitely many maximal ideals in its support. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: BU §7 and H20 Ch. 9; verify the formula on simple factors and use additivity. |
| B | `ex-two-composition-series-same-factors` | `ex` | Exhibit two different composition series of \(\mathbb Z/12\mathbb Z\) and match their simple factors. | provenance.statement: literature-derived exercise; provenance.proof: literature-derived; rationale: BU §7 uses finite abelian groups to test Jordan--Hölder. |
| B | `ex-artinian-local-residue-filtration` | `ex` | Compute the maximal-ideal filtration and length of \(k[x,y]/(x^2,xy,y^3)\). | provenance.statement: ai-generated source-derived exercise; provenance.proof: ai-altered; rationale: H20 Ch. 9 examples use monomial Artin rings; the monomial basis gives each residue factor. |
| B | `ex-reduced-artinian-product-of-fields` | `ex` | Decompose \(k[x]/(x^3-x)\) when the factorisation is squarefree and compare the nonsquarefree characteristic cases. | provenance.statement: literature-derived exercise; provenance.proof: ai-altered; rationale: TN §12 applies CRT to factored polynomials; repeated roots test reducedness. |
| B | `ex-artinian-local-idempotent-test` | `ex` | Solve \(e^2=e\) in a truncated local polynomial ring and verify that only zero and one occur. | provenance.statement: ai-generated source-derived example; provenance.proof: literature-derived; rationale: H20 Ch. 9; reduction modulo the maximal ideal followed by nilpotence is the intended check. |
| B | `ex-artinian-ring-length-local-sum` | `ex` | Verify the local length-sum formula for \(\mathbb Z/72\mathbb Z\). | provenance.statement: ai-generated standard example; provenance.proof: literature-derived; rationale: BU §7; the \((2)\)- and \((3)\)-primary factors supply the two local summands. |
| B | `ex-zero-ring-artinian-structure-boundary` | `ex` | Check the Artinian, Noetherian, spectrum, product-decomposition and length conventions for the zero ring. | provenance.statement: ai-generated boundary example; provenance.proof: literature-derived; rationale: H20 Ch. 9 permits the zero ring, while some product theorems state nonzero factors; the exercise prevents an implicit exception. |

#### CA-5 additions — `associated-primes-and-primary-decomposition` and companion

| target | id | kind | focused statement | explicit provenance |
|---|---|---|---|---|
| A | `lem-annihilator-of-a-cyclic-submodule` | `lem` | For \(m\in M\), the cyclic submodule \(Rm\) is canonically isomorphic to \(R/\operatorname{Ann}(m)\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 8 §1 and BU §8; the first isomorphism theorem identifies associated primes with embedded cyclic residue modules. |
| A | `lem-associated-prime-equivalent-cyclic-embedding` | `lem` | A prime \(\mathfrak p\) is associated to \(M\) iff \(R/\mathfrak p\) embeds in \(M\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 8 §1 and BU §8; use the preceding cyclic-submodule identification. |
| A | `cor-associated-primes-of-a-cyclic-module-are-primes-of-element-annihilators-modulo-ideal` | `cor` | \(\operatorname{Ass}(R/I)\) consists of primes of the form \((I:r)\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: BU §8; annihilators of residue classes are colon ideals. |
| A | `lem-noetherian-module-maximal-element-annihilator-exists` | `lem` | A nonzero Noetherian module has an element whose proper annihilator is maximal among annihilators of nonzero elements. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 8 §1; ACC on ideals supplies the maximum without a separate global choice. |
| A | `lem-maximal-element-annihilator-primality-step` | `lem` | If \(\operatorname{Ann}(m)\) is maximal among annihilators of nonzero elements, then it is prime. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 8 §1 and BU §8; if \(abm=0\) and \(bm\ne0\), maximality applied to \(bm\) forces \(a\) into the annihilator. |
| A | `cor-associated-primes-empty-iff-module-zero-noetherian` | `cor` | A Noetherian module is zero iff it has no associated primes. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 8 §1; existence applies to every nonzero Noetherian module. |
| A | `lem-associated-primes-exact-sequence-left-inclusion` | `lem` | In \(0\to M'\to M\to M''\to0\), \(\operatorname{Ass}(M')\subseteq\operatorname{Ass}(M)\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: BU §8; an embedded cyclic residue module in \(M'\) remains embedded in \(M\). |
| A | `lem-associated-primes-exact-sequence-right-bound` | `lem` | In that sequence, \(\operatorname{Ass}(M)\subseteq\operatorname{Ass}(M')\cup\operatorname{Ass}(M'')\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 8 §1; intersect the cyclic submodule with \(M'\) and split according as the intersection is zero. |
| A | `lem-associated-primes-quotient-inclusion` | `lem` | In that sequence, \(\operatorname{Ass}(M'')\subseteq\operatorname{Supp}(M')\cup\operatorname{Ass}(M)\) for finite modules over a Noetherian ring. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: BU §8; localize at the candidate prime and use an annihilator-maximal lift. |
| A | `lem-associated-prime-localises-forward` | `lem` | If \(\mathfrak p\in\operatorname{Ass}_R(M)\) and \(\mathfrak p\cap S=\varnothing\), then \(S^{-1}\mathfrak p\in\operatorname{Ass}_{S^{-1}R}(S^{-1}M)\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 8 §1; localize the embedding \(R/\mathfrak p\hookrightarrow M\). |
| A | `lem-associated-prime-localises-reverse-finite` | `lem` | For finite \(M\) over a Noetherian ring, every associated prime of \(S^{-1}M\) is the extension of an associated prime of \(M\) disjoint from \(S\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 8 and BU §8; clear finitely many denominators in an annihilator and choose a maximal annihilator upstairs. |
| A | `cor-local-depth-zero-iff-maximal-ideal-associated` | `cor` | For a finite module over a Noetherian local ring, every element of the maximal ideal is a zero divisor on the module iff the maximal ideal is associated. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: BU §§8--9 and RG6 §6.1; finite prime avoidance converts the union of associated primes into one associated maximal ideal. |
| A | `lem-finite-prime-avoidance` | `lem` | If an ideal is contained in a finite union of prime ideals, then it is contained in one of them. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: BU §9; induction chooses elements avoiding all but one prime and multiplies them. |
| A | `lem-zero-divisor-annihilator-contained-in-associated-prime` | `lem` | Every zero divisor on a finite module over a Noetherian ring lies in an associated prime of the module. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 8 §1; apply associated-prime existence to the nonzero annihilator submodule. |
| A | `lem-associated-primes-contained-in-support` | `lem` | Every associated prime of a module lies in its support. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: BU §8; localizing an embedded copy of \(R/\mathfrak p\) at \(\mathfrak p\) remains nonzero. |
| A | `lem-minimal-support-prime-local-annihilator` | `lem` | At a prime minimal in the support of a finite module, the localized maximal ideal is the radical of the module annihilator and is associated to the localized module. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 8 §1; the zero-dimensional local quotient supplies an element with maximal annihilator. |
| A | `cor-support-is-union-of-closures-of-associated-primes` | `cor` | For a finite module over a Noetherian ring, \(\operatorname{Supp}M=\bigcup_{\mathfrak p\in\operatorname{Ass}M}V(\mathfrak p)\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 8 and BU §8; every support prime contains a minimal support prime, which is associated. |
| A | `lem-primary-submodule-zero-divisor-characterisation` | `lem` | A proper submodule \(Q\subset M\) is primary iff every zero divisor on \(M/Q\) is nilpotent on \(M/Q\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 8 §2 and BU §10; translate the elementwise primary condition through the quotient. |
| A | `cor-ideal-with-maximal-radical-is-primary` | `cor` | If \(\sqrt Q\) is maximal, then \(Q\) is primary. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 8 §2; if \(ab\in Q\) and \(b\notin Q\), the colon ideal \((Q:b)\) is proper with radical contained in the maximal radical. |
| A | `lem-radical-of-a-primary-colon` | `lem` | If \(Q\) is \(\mathfrak p\)-primary and \(x\notin Q\), then \(\sqrt{(Q:x)}=\mathfrak p\); if \(x\notin\mathfrak p\), then \((Q:x)=Q\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: BU §10 and Altman--Kleiman §18; these colon identities drive localization and uniqueness. |
| A | `lem-localisation-of-a-primary-submodule` | `lem` | A \(\mathfrak p\)-primary submodule localizes to a proper \(S^{-1}\mathfrak p\)-primary submodule when \(S\cap\mathfrak p=\varnothing\), and to the whole module otherwise. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 8 §2; use a radical element of \(S\cap\mathfrak p\) in the second case and clear denominators in the first. |
| A | `lem-contraction-recovers-primary-component-after-localising-away-from-radical` | `lem` | If \(Q\) is \(\mathfrak p\)-primary and \(S\cap\mathfrak p=\varnothing\), then \(Q\) is the contraction of \(S^{-1}Q\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 8 §2; \(sm\in Q\) with \(s\notin\mathfrak p\) forces \(m\in Q\). |
| A | `lem-intersection-decomposition-strict-enlargement-step` | `lem` | If a submodule \(N\) is reducible, write \(N=N_1\cap N_2\) with both \(N_i\supsetneq N\); Noetherian induction may therefore reduce decomposition existence to the two larger submodules. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 8 §3 and BU §10; this is the termination step of Lasker--Noether. |
| A | `lem-irreducible-submodule-is-primary-noetherian` | `lem` | An irreducible submodule of a Noetherian module is primary. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 8 §3; stabilize colon submodules \((Q:x^n)\) and use irreducibility on a constructed intersection. |
| A | `lem-primary-decomposition-delete-redundant-components` | `lem` | From any finite primary decomposition one may delete components containing the intersection of the others until the decomposition is irredundant. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: BU §10; finiteness makes the deletion process terminate. |
| A | `lem-primary-decomposition-combine-equal-radicals` | `lem` | Intersecting all components with the same radical yields one primary component with that radical. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 8 §2; finite intersections of primary submodules with common radical are primary. |
| A | `lem-associated-primes-from-a-minimal-primary-decomposition` | `lem` | The radicals occurring in a minimal primary decomposition of \(N\subset M\) are exactly \(\operatorname{Ass}(M/N)\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 8 §4 and BU §10; colon elements expose each radical and exact-sequence bounds exclude others. |
| A | `cor-minimal-primary-radicals-independent-of-decomposition` | `cor` | The set of radicals in a minimal primary decomposition depends only on \(M/N\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: BU §10; both decompositions yield the intrinsic associated-prime set. |
| A | `lem-isolated-primary-component-by-localisation-and-contraction` | `lem` | For a minimal associated prime \(\mathfrak p\), the \(\mathfrak p\)-primary component equals the contraction of \(N_\mathfrak p\subset M_\mathfrak p\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 8 §4; localizing kills every component whose radical is not contained in \(\mathfrak p\). |
| A | `cor-intersection-of-isolated-components-is-canonical` | `cor` | The intersection of the primary components belonging to any downward-closed set of associated primes is independent of the minimal decomposition. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: Altman--Kleiman §18 and H20 Ch. 8 §4; choose a multiplicative set avoiding exactly that downward-closed set and contract. |
| B | `ex-annihilator-colon-ideals-in-a-cyclic-module` | `ex` | Compute all annihilators of selected residue classes in \(k[x,y]/(x^2,xy)\) and recover its associated primes. | provenance.statement: literature-derived exercise; provenance.proof: ai-altered; rationale: BU §8 uses colon calculations for cyclic modules. |
| B | `ex-primary-maximal-radical-test` | `ex` | Verify directly that every ideal with radical \((x,y)\) in an Artinian quotient of \(k[x,y]\) is primary. | provenance.statement: ai-generated source-derived example; provenance.proof: literature-derived; rationale: H20 Ch. 8 §2; maximal radical makes the zero-divisor test immediate. |
| B | `ex-primary-localisation-kills-a-component` | `ex` | Localize a two-component monomial primary decomposition at each associated prime and identify which component becomes the whole ring. | provenance.statement: literature-derived exercise; provenance.proof: ai-altered; rationale: BU §10; the computation illustrates isolated-component recovery. |
| B | `ex-redundant-primary-component-deletion` | `ex` | Start from a deliberately redundant intersection and perform the deletion and equal-radical combination steps to reach a minimal primary decomposition. | provenance.statement: ai-generated source-derived exercise; provenance.proof: ai-altered; rationale: H20 Ch. 8 §3; it audits both minimality conditions. |
| B | `ex-embedded-component-varies-but-radical-does-not` | `ex` | Give two decompositions of one ideal with different embedded primary components but the same embedded associated prime. | provenance.statement: literature-derived standard example; provenance.proof: literature-derived; rationale: BU §10 and Altman--Kleiman §18 distinguish first from second uniqueness. |
| B | `ex-zero-module-associated-prime-boundary` | `ex` | Check associated-prime, support, zero-divisor and primary-submodule conventions for the zero module. | provenance.statement: ai-generated boundary example; provenance.proof: not-applicable; rationale: H20 Ch. 8 explicitly excludes zero elements in annihilator definitions; the exercise prevents vacuous misuse. |

#### CA-6 additions — `integral-extensions-and-going-up-down` and companion

| target | id | kind | focused statement | explicit provenance |
|---|---|---|---|---|
| A | `lem-monic-relation-spans-powers` | `lem` | If \(b\) satisfies a monic equation of degree \(n\) over \(A\), then \(A[b]\) is spanned by \(1,b,\ldots,b^{n-1}\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 3 §1 and TN §10; reduce higher powers using the monic relation. |
| A | `lem-finite-stable-submodule-gives-integrality` | `lem` | If a faithful finite \(A\)-submodule containing one is stable under multiplication by \(b\), then \(b\) is integral over \(A\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 3 §1 and BU §11; the determinant trick applied to multiplication by \(b\) supplies the monic equation. |
| A | `cor-integral-element-power-span-equivalence` | `cor` | An element is integral iff the algebra it generates is finite as a module, equivalently iff it stabilizes a faithful finite submodule containing one. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 3 §1; the two preceding lemmas give the nontrivial directions. |
| A | `lem-finitely-many-integral-elements-generate-a-finite-module` | `lem` | If \(b_1,\ldots,b_r\) are integral over \(A\), then \(A[b_1,\ldots,b_r]\) is finite over \(A\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: TN §10 and H20 Ch. 3 §1; induct using finite spanning powers and transitivity of module finiteness. |
| A | `cor-integral-elements-form-a-subring` | `cor` | The elements of an \(A\)-algebra integral over \(A\) form a subring. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 3 §1; the finite algebra generated by two integral elements is stable under their sum and product. |
| A | `lem-transitivity-finite-subalgebra-step` | `lem` | If \(c\) is integral over \(B\) and \(B\) is integral over \(A\), the finitely many coefficients of a monic equation for \(c\) lie in a finite \(A\)-subalgebra of \(B\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 3 §2 and TN §10; this is the coefficient reduction in transitivity. |
| A | `lem-integral-closure-closed-under-fraction-field-operations` | `lem` | The integral closure of a domain in a field is a subring of that field containing the domain. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 3 §2; use that integral elements form a subring. |
| A | `lem-integral-closure-idempotence` | `lem` | Taking integral closure inside a fixed field is idempotent. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 3 §2 and BM interlude 4; transitivity proves that an element integral over the closure is integral over the base. |
| A | `lem-integrality-localises-forward` | `lem` | If \(b\) is integral over \(A\), then \(b/s\) is integral over \(S^{-1}A\) after localizing the extension compatibly. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 3 §3; divide a monic equation by a suitable power of the denominator. |
| A | `lem-integrality-localises-reverse-clearing-denominators` | `lem` | If \(b/1\) is integral over \(S^{-1}A\), then some \(s\in S\) makes \(sb\) integral over \(A\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 3 §3 and BU §12; clear the finitely many coefficient denominators and an annihilating denominator. |
| A | `cor-integral-closure-commutes-with-localisation-in-a-field-extension` | `cor` | If \(\overline A\) is the integral closure of a domain \(A\) in a field extension, then \(S^{-1}\overline A\) is the integral closure of \(S^{-1}A\) there. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 3 §3; combine the two localization lemmas and absorb the clearing denominator into the fraction. |
| A | `lem-field-integral-extension-algebraicity` | `lem` | If \(A\subseteq B\) are fields, then \(B\) is integral over \(A\) iff it is algebraic over \(A\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: TN §10; a nonzero constant coefficient in a polynomial relation can be normalized to make it monic. |
| A | `lem-field-contraction-under-integral-extension` | `lem` | If \(B\) is integral over \(A\) and \(B\) is a field, then \(A\) is a field; conversely, if \(A\) is a field and \(B\) is a domain, then \(B\) is a field. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 3 §4 and TN §10; integral equations for an element and its inverse give the two directions. |
| A | `lem-lying-over-reduction-to-domains` | `lem` | To find a prime of \(B\) over \(\mathfrak p\subset A\), quotient by \(\mathfrak p\) and an appropriate prime above its extension so that the remaining contraction problem is over a domain. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 3 §4 and BU §13; this is the quotient step in lying over. |
| A | `lem-lying-over-local-maximal-step` | `lem` | After localizing an integral extension at \(A\setminus\mathfrak p\), every maximal ideal of the localized upper ring contracts to the unique maximal ideal \(\mathfrak pA_\mathfrak p\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 3 §4; the field-contraction lemma forces maximality of the contraction. |
| A | `cor-spectrum-map-of-an-integral-extension-is-surjective` | `cor` | For an integral extension \(A\subseteq B\), contraction \(\operatorname{Spec}B\to\operatorname{Spec}A\) is surjective. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 3 §4 and BU §13; this is exactly lying over in spectrum language, without adding scheme structure. |
| A | `lem-incomparability-quotient-localisation-reduction` | `lem` | For primes \(\mathfrak q_1\subseteq\mathfrak q_2\) with equal contraction, quotient by the lower prime and localize at the common contraction to reduce incomparability to an integral domain extension over a field. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 3 §5; this reduction isolates the only field case needed. |
| A | `lem-incomparability-field-case` | `lem` | A domain integral over a field is a field, so it has no strict chain of primes contracting to zero. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 3 §5 and TN §10; invoke the field-contraction lemma. |
| A | `lem-going-up-one-prime-step` | `lem` | Given \(\mathfrak p_1\subseteq\mathfrak p_2\) in \(A\) and \(\mathfrak q_1\) over \(\mathfrak p_1\), lying over applied to \(A/\mathfrak p_1\subseteq B/\mathfrak q_1\) produces \(\mathfrak q_2\supseteq\mathfrak q_1\) over \(\mathfrak p_2\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 3 §5 and BU §13; this is the inductive step behind going up. |
| A | `cor-integral-extension-lifts-finite-prime-chains` | `cor` | Any finite prime chain in \(A\), together with a chosen prime over its first term, lifts to a chain in \(B\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 3 §5; iterate the one-prime going-up step. |
| A | `lem-integral-extension-chain-contraction-is-strict` | `lem` | A strict prime chain in an integral extension contracts to a strict chain, by incomparability. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 3 §5; equal adjacent contractions would contradict incomparability. |
| A | `cor-integral-extension-dimension-two-inequalities` | `cor` | Going up gives \(\dim B\ge\dim A\), while strict contraction gives \(\dim B\le\dim A\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 3 §5; separating the two inequalities explains the existing dimension equality theorem. |
| A | `lem-normality-localisation-forward` | `lem` | A localization of an integrally closed domain is integrally closed. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 12 and BU §12; clear the denominator from an integral equation in the common fraction field. |
| A | `lem-normality-detected-at-prime-localisations` | `lem` | A domain is integrally closed iff all of its prime localizations are integrally closed. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 12; an element outside the domain determines a proper denominator ideal contained in a prime. |
| A | `lem-going-down-coefficient-integrality` | `lem` | In the normal-domain proof of going down, the coefficients of the relevant factor of a monic polynomial are integral over the base and lie in its fraction field, hence lie in the base. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 3 §7 and BU §24; this is the point at which normality is used. |
| A | `lem-going-down-one-prime-step` | `lem` | For \(\mathfrak p_1\subseteq\mathfrak p_2\) and \(\mathfrak q_2\) over \(\mathfrak p_2\) in an integral extension of domains with normal base, there is \(\mathfrak q_1\subseteq\mathfrak q_2\) over \(\mathfrak p_1\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 3 §7 and BU §24; localize/quotient and use the coefficient-integrality lemma to separate the required ideal. |
| A | `cor-height-preserved-under-going-down-integral-extensions` | `cor` | Under the normal-domain going-down hypotheses, primes lying over one another have equal height whenever the relevant heights are finite. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 3 §7; going down lifts chains below and incomparability contracts them strictly. |
| B | `ex-integrality-equation-and-power-basis` | `ex` | For \(b^3-2b+1=0\), reduce several high powers to the span of \(1,b,b^2\). | provenance.statement: ai-generated source-derived exercise; provenance.proof: literature-derived; rationale: TN §10 introduces integrality through this finite-span computation. |
| B | `ex-integral-elements-subring-computation` | `ex` | Show directly that the sum and product of two specified quadratic integral elements lie in one finite module. | provenance.statement: literature-derived exercise; provenance.proof: ai-altered; rationale: H20 Ch. 3 §1; the example realizes the finite-stable-submodule proof. |
| B | `ex-integrality-localisation-clearing-denominators` | `ex` | Work an example where \(b/1\) is integral only after localization and find an explicit \(s\) for which \(sb\) is integral before localization. | provenance.statement: literature-derived exercise; provenance.proof: ai-altered; rationale: BU §12; it tests the precise reverse localization statement. |
| B | `ex-lying-over-by-quotient-and-localisation` | `ex` | Find primes over a chosen prime in \(k[t^2,t^3]\subset k[t]\) by following the quotient-localization proof. | provenance.statement: literature-derived standard example; provenance.proof: literature-derived; rationale: H20 Ch. 3 §4 uses cusp normalization as the model integral extension. |
| B | `ex-incomparability-in-a-quadratic-integral-extension` | `ex` | List prime chains in a simple quadratic integral extension and verify that comparable primes never have the same contraction. | provenance.statement: ai-generated source-derived exercise; provenance.proof: literature-derived; rationale: TN §10 exercises test incomparability in finite extensions. |
| B | `ex-going-down-failure-via-cusp-normalisation` | `ex` | Exhibit a prime-chain obstruction to going down in a standard nonnormal cusp subring. | provenance.statement: literature-derived standard counterexample; provenance.proof: literature-derived; rationale: BU §24 and H20 Ch. 3 §7 use normalization examples to show normality is not decorative. |

#### CA-7 additions — `noether-normalisation-and-nullstellensatz` and companion

| target | id | kind | focused statement | explicit provenance |
|---|---|---|---|---|
| A | `lem-maximal-algebraically-independent-subset-is-a-transcendence-basis` | `lem` | A maximal algebraically independent subset of a field extension makes the extension algebraic over the generated rational-function field. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 4 §1 and TN §11; adjoining any remaining element must create a polynomial relation, which becomes algebraicity after clearing coefficients. |
| A | `lem-transcendence-basis-exchange` | `lem` | If \(S\) and \(T\) are transcendence bases and \(s\in S\), some \(t\in T\) can replace \(s\) while preserving a transcendence basis. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 4 §1; the algebraic dependence relation involving \(s\) must involve a replaceable element of \(T\). |
| A | `cor-transcendence-degree-tower-additivity` | `cor` | For fields \(k\subseteq K\subseteq L\) with finite transcendence degrees, \(\operatorname{trdeg}_kL=\operatorname{trdeg}_kK+\operatorname{trdeg}_KL\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 4 §1 and TN §11; concatenate transcendence bases and use exchange. |
| A | `lem-noether-normalisation-nonzero-polynomial-made-monic` | `lem` | Over an infinite field, a triangular linear change of variables makes a prescribed nonzero polynomial monic in one variable over the polynomial ring in the others. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 4 §2 and TN §11; choose a point where the top homogeneous part is nonzero and record the leading coefficient after substitution. |
| A | `lem-noether-normalisation-finite-field-exponent-substitution` | `lem` | Over an arbitrary field, a substitution \(x_i\mapsto x_i+x_n^{N_i}\) with rapidly increasing exponents makes one selected term uniquely highest in \(x_n\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 4 §2; distinct base-expansion weights avoid the unjustified “generic scalar” argument over finite fields. |
| A | `lem-noether-normalisation-one-relation-reduction` | `lem` | If an affine algebra presentation has a nonzero relation made monic in its last generator, that generator is integral over the subalgebra generated by the remaining ones. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 4 §2 and BU §14; the transformed relation is a monic integral equation. |
| A | `lem-noether-normalisation-inductive-integrality` | `lem` | Repeating the one-relation reduction produces algebraically independent \(y_1,\ldots,y_d\) such that the affine algebra is integral over \(k[y_1,\ldots,y_d]\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 4 §2; induction on the number of generators and transitivity of integrality are the two proof moves. |
| A | `cor-noether-normalisation-module-finiteness` | `cor` | The normalized affine algebra is finite as a module over its polynomial subring. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 4 §2; finitely many integral algebra generators imply module finiteness by CA-6. |
| A | `cor-noether-normalisation-dimension-lower-bound` | `cor` | A domain finite over a polynomial ring in \(d\) variables has dimension at least \(d\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Chs. 3--4; going up lifts the standard polynomial prime chain. |
| A | `lem-zariski-lemma-one-variable-localisation-not-finite` | `lem` | For a field \(k\), the field \(k(t)\) is not finite as a module over \(k[t]\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: TN §11 and H20 Ch. 4 §3; finitely many rational generators have denominators using only finitely many irreducible factors. |
| A | `lem-zariski-lemma-localised-polynomial-ring-not-field` | `lem` | A localization of \(k[t_1,\ldots,t_r]\) obtained by inverting finitely many nonzero polynomials is not a field when \(r>0\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 4 §3; choose an irreducible polynomial not dividing the finite denominator product after a one-variable specialization. |
| A | `lem-zariski-lemma-transcendence-basis-reduction` | `lem` | If a field is finitely generated as a \(k\)-algebra, a transcendence basis would make it integral over a finitely localized polynomial algebra. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: TN §11; clear the coefficients of the algebraic equations for the remaining generators. |
| A | `cor-field-finite-type-over-a-field-is-a-finite-extension` | `cor` | A field finitely generated as a \(k\)-algebra is finite algebraic over \(k\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 4 §3 and BU §14; the previous two lemmas force the transcendence basis to be empty, and finite algebraic generation is finite. |
| A | `lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite` | `lem` | If \(A\) is a finitely generated \(k\)-algebra and \(\mathfrak m\) maximal, then \(A/\mathfrak m\) is finite over \(k\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 4 §4; the quotient is both a field and a finite-type \(k\)-algebra, so Zariski's lemma applies. |
| A | `cor-weak-nullstellensatz-algebraically-closed-coordinate-form` | `cor` | Over algebraically closed \(k\), every maximal ideal of \(k[x_1,\ldots,x_n]\) is \((x_1-a_1,\ldots,x_n-a_n)\) for a unique point \(a\in k^n\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: TN §11 and BM Ch. 1 §2; the residue classes of coordinates lie in the residue field, which equals \(k\). |
| A | `lem-evaluation-ideal-is-maximal` | `lem` | The kernel of evaluation at \(a\in k^n\) is \((x_1-a_1,\ldots,x_n-a_n)\), hence is maximal. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: BM Ch. 1 §1 and H20 Ch. 4 §4; successive division by \(x_i-a_i\) gives kernel containment. |
| A | `lem-rabinowitsch-auxiliary-ideal-has-empty-zero-locus` | `lem` | If \(f\) vanishes on \(V(I)\), then \(I+(1-yf)\subset k[x_1,\ldots,x_n,y]\) has empty zero locus. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 4 §5 and TN §11; a zero would have \(yf=1\) while its \(x\)-coordinates force \(f=0\). |
| A | `lem-rabinowitsch-unit-ideal-consequence` | `lem` | By weak Nullstellensatz, the auxiliary ideal is the unit ideal, so an identity \(1=\sum g_i h_i+g(1-yf)\) exists. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 4 §5; a proper ideal would lie in a maximal evaluation ideal and produce a forbidden zero. |
| A | `lem-rabinowitsch-substitution-clears-denominators` | `lem` | Substituting \(y=f^{-1}\) in the auxiliary identity and clearing a power of \(f\) proves \(f^N\in I\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 4 §5 and BU §14; work in the localization \(k[x_1,\ldots,x_n]_f\) before clearing denominators. |
| A | `cor-strong-nullstellensatz-two-inclusions` | `cor` | For algebraically closed \(k\), \(I(V(I))=\sqrt I\); the forward inclusion uses powers and the reverse uses the three Rabinowitsch lemmas. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 4 §5 and BM Ch. 1 §2; explicitly separates the elementary inclusion from the hard one. |
| A | `lem-affine-algebra-points-as-k-algebra-maps` | `lem` | For \(A=k[x_1,\ldots,x_n]/I\), its \(k\)-algebra maps to \(k\) correspond exactly to points of \(V(I)\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: BM Ch. 1 §§1--2; a map is determined by coordinate images and factors exactly when the relations vanish. |
| A | `cor-affine-algebra-maximal-ideals-as-points-over-algebraically-closed-field` | `cor` | If \(k\) is algebraically closed, kernels of \(k\)-points are all maximal ideals of an affine \(k\)-algebra. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 4 §4 and BM Ch. 1 §2; combine quotient correspondence with weak Nullstellensatz. |
| A | `lem-vanishing-ideal-is-radical` | `lem` | The ideal of functions vanishing on any subset of affine space is radical. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: BM Ch. 1 §1; if a power vanishes pointwise, so does the function over a field. |
| A | `lem-zero-locus-of-an-ideal-equals-zero-locus-of-its-radical` | `lem` | \(V(I)=V(\sqrt I)\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 4 §5; powers have the same pointwise zeros. |
| A | `cor-affine-radical-ideal-point-separation` | `cor` | If \(f\notin J\) for a radical ideal in an affine algebra over algebraically closed \(k\), some \(k\)-point annihilates \(J\) but not \(f\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: BU §14; strong Nullstellensatz contrapositively supplies the point. |
| A | `lem-jacobson-ring-prime-as-intersection-of-maximals` | `lem` | A ring is Jacobson iff every prime ideal is an intersection of maximal ideals containing it. | provenance.statement: literature-derived; provenance.proof: not-applicable; rationale: H20 Ch. 4 and Milne §6; this is the equivalent convention used to prove the affine version. |
| A | `lem-finite-type-jacobson-residue-extension` | `lem` | For a finite-type map from a Jacobson ring, residue fields at maximal ideals are finite extensions of residue fields at their contractions. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: Stacks §10.35, checked against H20 Ch. 4's field case; localize and apply the generalized Zariski lemma. |
| A | `cor-affine-closed-points-detect-radicals` | `cor` | In a finite-type algebra over a field, every radical ideal is the intersection of maximal ideals containing it. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 4 and BU §14; fields are Jacobson and finite-type algebras over Jacobson rings are Jacobson. |
| B | `ex-transcendence-basis-and-algebraic-remainder` | `ex` | Find a transcendence basis of \(k(s,t,\sqrt{s+t})/k\) and verify algebraicity of the remaining generator. | provenance.statement: ai-generated source-derived exercise; provenance.proof: literature-derived; rationale: TN §11 begins normalization with such field-extension calculations. |
| B | `ex-noether-normalisation-triangular-change` | `ex` | Make a specified bivariate polynomial monic by an explicit triangular change and identify the resulting finite polynomial subring. | provenance.statement: literature-derived exercise; provenance.proof: ai-altered; rationale: H20 Ch. 4 §2; the computation tests the leading homogeneous form. |
| B | `ex-noether-normalisation-finite-field-weight-choice` | `ex` | Apply the exponent-substitution proof over a finite field where no generic scalar choice can work. | provenance.statement: literature-derived exercise; provenance.proof: ai-altered; rationale: H20 Ch. 4 §2 explicitly distinguishes the finite-field proof. |
| B | `ex-zariski-lemma-denominator-obstruction` | `ex` | Given finitely many rational functions, produce an inverse polynomial not in the algebra they generate. | provenance.statement: literature-derived exercise; provenance.proof: literature-derived; rationale: TN §11; a new irreducible denominator gives the obstruction. |
| B | `ex-weak-nullstellensatz-over-real-numbers` | `ex` | Compare maximal ideals \((x-a)\) and \((x^2+1)\) in \(\mathbb R[x]\) to show why algebraic closedness is required for point form. | provenance.statement: literature-derived standard counterexample; provenance.proof: literature-derived; rationale: BM Ch. 1 §2 highlights residue-field extensions over nonclosed fields. |
| B | `ex-strong-nullstellensatz-nonradical-ideal` | `ex` | Compute \(I(V(x^2,xy))\) and identify precisely which nilpotent multiplicity data is discarded. | provenance.statement: ai-generated source-derived exercise; provenance.proof: literature-derived; rationale: BU §14; the example distinguishes an ideal from its radical. |
| B | `ex-rabinowitsch-identity-explicit` | `ex` | For a small ideal and a function vanishing on its zero locus, write an explicit auxiliary identity and clear the denominator. | provenance.statement: literature-derived exercise; provenance.proof: ai-altered; rationale: H20 Ch. 4 §5; this is a finite audit of all three Rabinowitsch steps. |

#### CA-8 additions — `valuation-rings-and-discrete-valuations` and companion

| target | id | kind | focused statement | explicit provenance |
|---|---|---|---|---|
| A | `lem-valuation-ring-unit-test` | `lem` | For a valuation ring \(V\) of \(K\), an element \(x\in V\) is a unit iff \(x^{-1}\in V\), equivalently iff its value is zero. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: JM §§2--3 and TN §13; inverse closure and the value equation give the equivalence. |
| A | `lem-valuation-ring-maximal-ideal-nonunits` | `lem` | The nonunits of a valuation ring form its unique maximal ideal; in value notation they are the elements of positive value. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: JM §3 and Mustaţă Ch. 10 §1; sums of positive-value elements remain positive and every outside element is a unit. |
| A | `lem-valuation-divisibility-order` | `lem` | For nonzero \(x,y\in K\), \(x\mid y\) in \(V\) iff \(v(x)\le v(y)\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: TN §13 and JM §3; the quotient \(y/x\) lies in \(V\) exactly when its value is nonnegative. |
| A | `cor-finitely-generated-ideals-of-a-valuation-ring-are-principal` | `cor` | Every nonzero finitely generated ideal of a valuation ring is generated by one of the given generators. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: JM §3; choose a generator of least value, which divides all the others. |
| A | `cor-valuation-rings-are-bezout-domains` | `cor` | Every finitely generated ideal of a valuation ring is principal. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: JM §3; include the zero ideal as the remaining case. |
| A | `lem-valuation-ring-ideals-ordered-by-value-cuts` | `lem` | Ideals of a valuation ring correspond to upward-closed value subsets satisfying the evident realization condition, and hence are linearly ordered. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: Mustaţă Ch. 10 §1 and JM §3; divisibility translates membership to an upper value cut. |
| A | `lem-valuation-ring-characterisation-by-total-divisibility` | `lem` | A domain \(V\) with fraction field \(K\) is a valuation ring iff for every nonzero \(x,y\in K\), either \(x/y\in V\) or \(y/x\in V\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: TN §13 and JM §3; set one quotient equal to the inverse of the other. |
| A | `lem-valuation-ring-characterisation-by-linearly-ordered-principal-ideals` | `lem` | A domain is a valuation ring iff its principal fractional ideals are totally ordered by inclusion. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: Mustaţă Ch. 10 §1; inclusion of principal ideals is divisibility, which is the preceding totality condition. |
| A | `lem-valuation-ring-integral-closure-proof` | `lem` | If \(x\notin V\), then \(x^{-1}\) is a nonunit of \(V\), and a monic integral equation for \(x\) would make \(x^{-1}\) a unit; hence valuation rings are integrally closed. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: JM §3 and Mustaţă Ch. 10 §1; multiplying the monic equation by \(x^{-n}\) gives the unit contradiction. |
| A | `lem-value-group-as-fraction-field-units-quotient` | `lem` | The ordered value group of a valuation ring can be recovered as \(K^\times/V^\times\), ordered by divisibility. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: Mustaţă Ch. 10 §1; equal cosets are exactly equal values and the positive cone is the image of \(V\setminus\{0\}\). |
| A | `lem-discrete-value-group-has-least-positive-element` | `lem` | An ordered group is isomorphic to \(\mathbb Z\) with its usual order precisely when its positive cone is generated by a least positive element. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: TN §13 and JM §3; Euclidean division by the least positive element leaves no positive remainder. |
| A | `lem-uniformiser-has-value-one` | `lem` | In a discretely valued field, an element is a uniformizer iff its value is the positive generator of the value group. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: TN §13 and JM §3; the maximal ideal consists exactly of elements of positive value. |
| A | `lem-dvr-element-unit-times-uniformiser-power-uniqueness` | `lem` | Every nonzero \(x\) in a DVR is uniquely \(u\pi^n\) with \(u\) a unit and \(n\ge0\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: JM §3; take \(n=v(x)\), and uniqueness follows by applying the valuation. |
| A | `lem-dvr-nonzero-ideal-has-minimal-value` | `lem` | The set of values of nonzero elements of a nonzero DVR ideal has a least element. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: JM §3; it is a nonempty subset of \(\mathbb N\). |
| A | `lem-dvr-ideal-generated-by-minimal-value-element` | `lem` | An element of least value in a nonzero DVR ideal divides every member and generates the ideal. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: JM §3 and TN §13; divisibility is ordered by value. |
| A | `cor-dvr-nonzero-ideals-are-exactly-uniformiser-powers` | `cor` | The nonzero ideals of a DVR are exactly \((\pi^n)\), uniquely indexed by \(n\ge0\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: JM §3; combine the two ideal lemmas and the unit-times-power form. |
| A | `cor-dvr-is-noetherian-local-pid` | `cor` | A DVR is a Noetherian local PID whose only prime ideals are \((0)\) and its maximal ideal. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: JM §§2--3 and TN §13; ideal classification gives Noetherianity/PID and prime classification. |
| A | `lem-noetherian-valuation-ring-maximal-ideal-principal` | `lem` | In a nonfield Noetherian valuation ring, a finite generating set of the maximal ideal has a member dividing all the others, hence the maximal ideal is principal. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: JM §3; total divisibility chooses a least-valued generator. |
| A | `lem-principal-maximal-ideal-forces-discrete-values` | `lem` | If a Noetherian valuation ring's nonzero maximal ideal is generated by \(\pi\), every positive value is a positive multiple of \(v(\pi)\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: JM §3; repeatedly divide by \(\pi\); a nonterminating process gives a strictly ascending chain of principal ideals, contradicting Noetherianity. |
| A | `cor-noetherian-nonfield-valuation-ring-is-dvr` | `cor` | Every Noetherian valuation ring that is not a field is a DVR. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: JM §3 and Mustaţă Ch. 10 §2; use the preceding principal-maximal/discrete-value lemmas. |
| A | `lem-normal-noetherian-height-one-local-maximal-ideal-inverse` | `lem` | In a one-dimensional normal Noetherian local domain, the inverse fractional ideal \((R:\mathfrak m)\) strictly contains \(R\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: JM §5 and Mustaţă Ch. 10 §2; a nonzero parameter and maximality among colon ideals yield the strict containment. |
| A | `lem-normal-noetherian-height-one-maximal-ideal-principal` | `lem` | Choosing \(x\in(R:\mathfrak m)\setminus R\) forces \(x\mathfrak m=R\), so \(\mathfrak m\) is principal. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: JM §5; normality excludes \(x\mathfrak m\subseteq\mathfrak m\) by the determinant trick. |
| A | `lem-dvr-successive-quotients-are-residue-lines` | `lem` | Multiplication by \(\pi^i\) identifies \(R/(\pi)\) with \((\pi^i)/(\pi^{i+1})\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: JM §3; kernel and image follow from valuation. |
| A | `cor-dvr-quotient-length-equals-valuation` | `cor` | \(\ell_R(R/(x))=v(x)\) for nonzero \(x\) in a DVR. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: JM §3; use the unit-times-power form and the residue-line filtration. |
| A | `cor-associated-graded-ring-of-a-dvr-is-a-polynomial-ring` | `cor` | For residue field \(k\), \(\operatorname{gr}_{\mathfrak m}R\cong k[T]\), with \(T\) represented by a uniformizer. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: JM §§3--4 and WL Lecture 25; each graded piece is the residue line generated by \(\pi^n\), and multiplication respects degrees. |
| A | `thm-completion-of-a-dvr-is-a-dvr` | `thm` | The maximal-adic completion of a DVR is a complete DVR with the same residue field and the image of any uniformizer as uniformizer. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: JM §4, pp. 6--7; separatedness, compatible coefficients and ideal classification are decomposed rather than assumed. |
| A | `lem-dvr-completion-expansion-by-residue-representatives` | `lem` | After choosing residue representatives, every element of a complete DVR has a unique convergent expansion \(\sum_{n\ge0}a_n\pi^n\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: JM §4; recursively choose residues and use separated completeness for existence and uniqueness. |
| A | `cor-group-theoretic-p-adics-agree-with-adic-ring-completion` | `cor` | The group-theory construction of \(\mathbb Z_p\) is canonically isomorphic, as a topological ring, to \(\varprojlim_n\mathbb Z/p^n\mathbb Z\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: JM §4 supplies the inverse-limit ring operations; seam ruling R-4 requires citation, not re-minting, of the underlying group construction. |
| B | `ex-valuation-divisibility-table` | `ex` | In a discretely valued rational-function field, compare several elements by divisibility and principal-ideal inclusion. | provenance.statement: literature-derived exercise; provenance.proof: literature-derived; rationale: TN §13 introduces valuations through these comparisons. |
| B | `ex-rank-two-value-group-ideal-cuts` | `ex` | List value cuts for the lexicographically ordered group \(\mathbb Z^2\) and exhibit nonprincipal ideals. | provenance.statement: literature-derived standard example; provenance.proof: ai-altered; rationale: Mustaţă Ch. 10 §1 contrasts general valuation rings with DVRs. |
| B | `ex-field-as-valuation-ring-not-dvr-convention` | `ex` | Check which equivalent DVR formulations fail for a field and why this scaffold excludes the field case. | provenance.statement: ai-generated convention example; provenance.proof: not-applicable; rationale: JM §2 and the convention table expose the differing field conventions. |
| B | `ex-dvr-residue-line-filtration` | `ex` | Write the full composition series of \(R/(\pi^n)\) and compute its length. | provenance.statement: literature-derived exercise; provenance.proof: literature-derived; rationale: JM §3; this directly verifies the length theorem. |
| B | `ex-complete-dvr-digit-expansion` | `ex` | Compute successive residue digits of a chosen element modulo \(\pi^4\). | provenance.statement: literature-derived exercise; provenance.proof: literature-derived; rationale: JM §4; it is the finite truncation of the completion expansion. |
| B | `ex-nondiscrete-valuation-no-minimal-positive-value` | `ex` | Use a dense ordered subgroup of \(\mathbb R\) to show why no uniformizer or least nonzero ideal value exists. | provenance.statement: literature-derived standard counterexample; provenance.proof: literature-derived; rationale: Mustaţă Ch. 10 §1; it tests discreteness in the DVR equivalences. |

#### CA-9 additions — `dedekind-domains-fractional-ideals-and-class-group` and companion

| target | id | kind | focused statement | explicit provenance |
|---|---|---|---|---|
| A | `lem-fractional-ideal-bounded-denominator-characterisation` | `lem` | A nonzero \(R\)-submodule \(I\subseteq K\) is fractional iff some nonzero \(d\in R\) has \(dI\subseteq R\). | provenance.statement: literature-derived; provenance.proof: not-applicable; rationale: JM §1; this is the definition used to prove finite generation and operations. |
| A | `lem-finite-submodule-of-fraction-field-is-fractional` | `lem` | Every finitely generated \(R\)-submodule of the fraction field has a common nonzero denominator and is a fractional ideal. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: JM §1; multiply the finitely many generator denominators. |
| A | `lem-sum-intersection-and-product-of-fractional-ideals-are-fractional` | `lem` | Finite sums, intersections and products of fractional ideals are fractional ideals. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: JM §1; products/common multiples of bounded denominators bound each operation. |
| A | `lem-fractional-ideal-product-associative-and-unital` | `lem` | Fractional-ideal multiplication is associative, commutative and has unit \(R\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: JM §1; finite sums of element products may be rebracketed and distributed. |
| A | `lem-colon-fractional-ideal-is-fractional-for-finite-input` | `lem` | If \(I,J\) are fractional ideals and \(I\) is finite, then \((J:I)=\{x\in K:xI\subseteq J\}\) is fractional. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: JM §1; finitely many generator conditions give a common denominator and embed the colon in a scaled copy of \(R\). |
| A | `lem-fractional-ideal-inverse-is-colon` | `lem` | The candidate inverse of a nonzero fractional ideal is \(I^{-1}=(R:I)\), and \(II^{-1}\subseteq R\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: JM §1; this fixes the ambient fraction field and avoids an ambiguous Hom definition. |
| A | `lem-invertible-fractional-ideal-is-finitely-generated` | `lem` | If \(IJ=R\), a finite expression \(1=\sum x_i y_i\) shows that the \(x_i\) generate \(I\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: JM §§1 and 6; multiply an arbitrary element of \(I\) by the displayed identity. |
| A | `lem-invertible-fractional-ideal-is-locally-principal` | `lem` | An invertible fractional ideal becomes principal at every prime localization. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: JM §6; in a local ring one summand of \(1=\sum x_i y_i\) is a unit and its corresponding \(x_i\) generates. |
| A | `lem-finite-locally-principal-fractional-ideal-is-invertible` | `lem` | A finite fractional ideal that is principal at every maximal localization is invertible. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: JM §6 and H20 Ch. 12; the quotient \(R/II^{-1}\) is locally zero and hence zero. |
| A | `cor-invertible-ideal-is-projective-rank-one` | `cor` | Every invertible fractional ideal is a finite projective module locally free of rank one. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: JM §§6--7; the dual-basis expression from \(1=\sum x_i y_i\) proves projectivity. |
| A | `lem-dedekind-localisation-at-nonzero-prime-is-dvr` | `lem` | Localizing a Dedekind domain at a nonzero prime yields a one-dimensional normal Noetherian local domain and hence a DVR. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: JM §5 and H20 Ch. 12; Noetherianity, normality and prime chains localize. |
| A | `lem-local-dvr-condition-implies-global-normality` | `lem` | If every localization at a nonzero prime of a Noetherian domain is a DVR, the domain is integrally closed. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: JM §5; DVRs are normal and normality is detected at prime localizations. |
| A | `lem-local-dvr-condition-implies-dimension-one` | `lem` | Under the same hypothesis, every nonzero prime is maximal and the domain has dimension one unless it is a field. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: JM §5; a prime strictly above a nonzero prime would localize to a forbidden third DVR prime. |
| A | `cor-dedekind-equivalence-local-dvr-form` | `cor` | For a nonfield Noetherian domain, being normal of dimension one is equivalent to every nonzero-prime localization being a DVR. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: JM §5 and TN §13; the two preceding directions resolve the convention difference recorded in §10.3. |
| A | `lem-dedekind-ideal-local-valuations-finite-support` | `lem` | For a nonzero fractional ideal \(I\), define \(v_\mathfrak p(I)\) by \(I_\mathfrak p=\mathfrak p^{v_\mathfrak p(I)}R_\mathfrak p\); only finitely many values are nonzero. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: JM §6; a common numerator and denominator have only finitely many minimal prime divisors in the Noetherian domain. |
| A | `lem-dedekind-ideal-valuations-add-under-product` | `lem` | \(v_\mathfrak p(IJ)=v_\mathfrak p(I)+v_\mathfrak p(J)\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: JM §6; localize and multiply the two powers of the DVR maximal ideal. |
| A | `lem-dedekind-ideal-valuations-detect-inclusion` | `lem` | \(I\subseteq J\) iff \(v_\mathfrak p(I)\ge v_\mathfrak p(J)\) for every nonzero prime \(\mathfrak p\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: JM §6; the forward implication is local, and the reverse follows because the quotient is locally zero at every maximal ideal. |
| A | `lem-dedekind-fractional-ideal-reconstructed-from-valuations` | `lem` | A fractional ideal equals the finite product \(\prod_\mathfrak p\mathfrak p^{v_\mathfrak p(I)}\), allowing negative exponents. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: JM §6; both sides have the same localizations, and local equality detects equality of finite modules. |
| A | `cor-group-of-fractional-ideals-is-free-abelian-on-nonzero-primes` | `cor` | The group of nonzero fractional ideals of a Dedekind domain is the free abelian group on its nonzero prime ideals. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: JM §6 and H20 Ch. 12; finite-support valuation vectors give the inverse isomorphisms. |
| A | `cor-inverse-fractional-ideal-negates-valuations` | `cor` | \(v_\mathfrak p(I^{-1})=-v_\mathfrak p(I)\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: JM §6; use additivity and \(II^{-1}=R\). |
| A | `lem-nonzero-dedekind-ideal-invertibility-local-test` | `lem` | A nonzero ideal in a Dedekind domain is locally principal at every maximal ideal and hence invertible. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: JM §§5--6; each nonzero localization is a DVR and the finite locally-principal criterion globalizes. |
| A | `lem-dedekind-two-generator-avoidance-choice` | `lem` | Given nonzero ideal \(I\) and nonzero \(a\in I\), one can choose \(b\in I\) with prescribed minimal valuations at the finitely many primes dividing \((a)I^{-1}\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: JM §6; finite prime avoidance/CRT supplies the simultaneous congruences. |
| A | `cor-dedekind-ideal-generated-by-prescribed-element-and-one-more` | `cor` | Every nonzero ideal in a Dedekind domain is \((a,b)\) for any chosen nonzero \(a\in I\) and a suitable \(b\in I\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: JM §6; compare local valuations using the preceding choice lemma. |
| A | `lem-principal-fractional-ideals-form-a-subgroup` | `lem` | Nonzero principal fractional ideals form a subgroup of the fractional-ideal group. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: JM §1; \((x)(y)=(xy)\) and \((x)^{-1}=(x^{-1})\). |
| A | `lem-divisor-map-on-elements-is-a-homomorphism` | `lem` | The map \(K^\times\to\bigoplus_\mathfrak p\mathbb Z[\mathfrak p]\), \(x\mapsto\sum v_\mathfrak p(x)[\mathfrak p]\), is a homomorphism with finite support. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: JM §6 and H20 Ch. 12; principal ideal multiplication adds local valuations. |
| A | `lem-kernel-of-principal-divisor-map-is-unit-group` | `lem` | A nonzero fraction has zero divisor exactly when it is a unit of the Dedekind domain. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: JM §6; zero valuations say both principal fractional ideal inclusions are equalities. |
| A | `cor-class-group-zero-iff-every-nonzero-prime-is-principal` | `cor` | The class group vanishes iff every nonzero prime ideal is principal, equivalently iff every nonzero ideal is principal. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: JM §6; prime ideals freely generate the fractional-ideal group. |
| A | `lem-rank-one-projective-embedded-as-a-fractional-ideal` | `lem` | A finite projective module of constant rank one over a domain embeds in its fraction field and becomes an invertible fractional ideal, after choosing a generic trivialization. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: JM §7; tensor with the fraction field, choose a basis, and clear finitely many denominators. |
| A | `lem-dedekind-torsionfree-module-is-projective` | `lem` | Every finite torsion-free module over a Dedekind domain is projective. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: JM §7; embed it in a finite free module, then use local DVR freeness and the finite local criterion for projectivity. |
| A | `lem-dedekind-projective-module-splitting-off-rank-one` | `lem` | A nonzero finite torsion-free module over a Dedekind domain has a rank-one projective summand. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: JM §7; a nonzero functional to the fraction field yields a fractional ideal image and projectivity splits the exact sequence. |
| A | `thm-steinitz-classification-over-a-dedekind-domain` | `thm` | Every rank-\(r\) finite torsion-free module is \(R^{r-1}\oplus I\) for an invertible ideal \(I\), whose class is uniquely determined. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: JM §7; split rank-one summands inductively and combine ideal summands using the determinant/exterior power. |
| A | `cor-determinant-class-classifies-dedekind-projectives` | `cor` | Two finite projective modules over a Dedekind domain are isomorphic iff they have the same rank and determinant ideal class. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: JM §7; apply the Steinitz normal form and identify the final ideal with the top exterior power. |
| B | `ex-fractional-ideal-common-denominator` | `ex` | Find a common denominator and inverse candidate for a fractional ideal generated by several rational numbers. | provenance.statement: literature-derived exercise; provenance.proof: literature-derived; rationale: JM §1 begins with these computations. |
| B | `ex-local-valuations-reconstruct-a-dedekind-ideal` | `ex` | Reconstruct an ideal of a PID from its finitely supported prime valuations and verify the same proof abstractly. | provenance.statement: literature-derived exercise; provenance.proof: literature-derived; rationale: JM §6; the PID case makes the valuation-vector isomorphism explicit without entering arithmetic number fields. |
| B | `ex-dedekind-ideal-inclusion-reverses-valuations` | `ex` | Compare two factored ideals and test inclusion prime by prime. | provenance.statement: ai-generated source-derived exercise; provenance.proof: literature-derived; rationale: JM §6; it audits the reversal in the inclusion criterion. |
| B | `ex-two-generator-dedekind-ideal-local-check` | `ex` | Given a factored ideal and a chosen nonzero member, construct a second generator and verify equality after each maximal localization. | provenance.statement: literature-derived exercise; provenance.proof: ai-altered; rationale: JM §6; this follows the proof of the two-generator theorem. |
| B | `ex-steinitz-class-tensor-and-direct-sum` | `ex` | Compute determinant ideal classes under tensoring by a rank-one projective and under a direct sum. | provenance.statement: literature-derived exercise; provenance.proof: ai-altered; rationale: JM §7; exterior powers give the class formulas. |
| B | `ex-field-excluded-from-dedekind-convention` | `ex` | Compare the local-DVR and dimension-one definitions on a field and document exactly which equivalence needs the nonfield clause. | provenance.statement: ai-generated convention example; provenance.proof: not-applicable; rationale: JM §§2,5 and §10.3 use different conventional entry points. |

#### CA-10 additions — `krull-dimension-height-and-parameter-ideals` and companion

| target | id | kind | focused statement | explicit provenance |
|---|---|---|---|---|
| A | `lem-prime-chains-below-a-prime-localise-bijectively` | `lem` | Localization at \(\mathfrak p\) gives an order-preserving bijection between prime chains in \(R\) ending at or below \(\mathfrak p\) and prime chains in \(R_\mathfrak p\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 10 §1 and BU §21; this is the chain-level content of height-localization. |
| A | `cor-minimal-prime-has-height-zero` | `cor` | Every minimal prime has height zero, and conversely a prime of height zero is minimal. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 10 §1; a strict prime below it is exactly a positive-length chain. |
| A | `lem-prime-chains-in-a-domain-start-at-zero` | `lem` | In a domain, any chain below a prime can be extended downward to begin at \((0)\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 10 §1; the zero ideal is prime and lies below every prime. |
| A | `lem-height-in-quotient-is-relative-chain-length` | `lem` | For primes \(\mathfrak p\subseteq\mathfrak q\), the height of \(\mathfrak q/\mathfrak p\) in \(R/\mathfrak p\) is the supremum of chain lengths from \(\mathfrak p\) to \(\mathfrak q\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 10 §1; quotient prime correspondence preserves strict inclusions. |
| A | `lem-principal-ideal-theorem-reduction-to-local-domain` | `lem` | To bound a prime minimal over \((x)\), quotient by a minimal prime below it and localize at the target prime, reducing to a Noetherian local domain whose maximal ideal is minimal over one nonzero element. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 10 §2 and BU §22; this records the two reductions and the zero-divisor boundary. |
| A | `lem-principal-ideal-theorem-associated-prime-step` | `lem` | In the reduced local situation, if the maximal ideal had height at least two, an appropriate colon/associated-prime construction would produce a prime strictly between zero and the maximal ideal still compatible with minimality over \((x)\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 10 §2; the associated-prime step is isolated rather than hidden in the principal ideal theorem. |
| A | `cor-minimal-prime-over-a-nonzerodivisor-has-height-one` | `cor` | In a Noetherian ring, a prime minimal over a principal ideal generated by a non-zero-divisor has height exactly one. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 10 §2 and BU §22; principal ideal theorem gives at most one and the generator excludes a minimal prime of height zero. |
| A | `cor-noetherian-local-domain-dimension-zero-iff-field` | `cor` | A Noetherian local domain has dimension zero iff it is a field. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Chs. 9--10; the maximal ideal is prime, so dimension zero forces it to equal \((0)\). |
| A | `lem-height-theorem-first-generator-reduction` | `lem` | If \(\mathfrak p\) is minimal over \((x_1,\ldots,x_n)\), choose a prime minimal over \((x_1)\) inside \(\mathfrak p\); its height is at most one. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 10 §3; existence inside \(\mathfrak p\) follows after localizing at \(\mathfrak p\). |
| A | `lem-height-theorem-quotient-induction` | `lem` | After quotienting by the first minimal prime, the image of \(\mathfrak p\) is minimal over at most \(n-1\) generators, so an induction bounds the remaining chain length. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 10 §3 and WL Lecture 24; the row exposes the quotient-chain accounting in Krull height. |
| A | `cor-height-of-a-finitely-generated-ideal` | `cor` | If an ideal is generated by \(n\) elements in a Noetherian ring, every prime minimal over it has height at most \(n\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 10 §3; this is the ideal form assembled from the two induction lemmas. |
| A | `cor-height-of-a-prime-bounded-by-minimal-number-of-generators` | `cor` | For a prime \(\mathfrak p\) in a Noetherian ring, \(\operatorname{ht}\mathfrak p\le\mu(\mathfrak pR_\mathfrak p)\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 10 §3 and WL Lecture 24; localize and apply the height theorem to the local maximal ideal. |
| A | `lem-height-converse-parameter-selection` | `lem` | If \(\operatorname{ht}\mathfrak p=n<\infty\), one can choose \(x_1,\ldots,x_n\in\mathfrak p\) inductively so that no prime minimal over the first \(i\) elements has height less than \(i\) while remaining below \(\mathfrak p\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 10 §3 and BU §23; finite minimal primes and prime avoidance provide each choice. |
| A | `cor-height-theorem-converse-local-radical-form` | `cor` | In a Noetherian local ring, a prime of finite height \(n\) is minimal over an ideal generated by \(n\) elements. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 10 §3; use the parameter-selection lemma and height theorem to force minimality. |
| A | `lem-parameter-ideal-equivalent-m-primary` | `lem` | In a \(d\)-dimensional Noetherian local ring, \(x_1,\ldots,x_d\) is a system of parameters iff \((x_1,\ldots,x_d)\) is \(\mathfrak m\)-primary. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: BU §23 and H20 Ch. 10 §4; radical equal to the unique prime above the parameter ideal is exactly maximal-primary. |
| A | `lem-parameter-selection-avoids-minimal-components` | `lem` | In positive local dimension, prime avoidance supplies \(x\in\mathfrak m\) outside every maximal-dimensional minimal prime, so \(\dim R/(x)\le d-1\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: BU §23 and H20 Ch. 10 §4; finite minimal primes make the selection legitimate. |
| A | `lem-parameter-dimension-drop-is-exact` | `lem` | If \(x\) is the first member of a system of parameters of a \(d>0\) dimensional local ring, then \(\dim R/(x)=d-1\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 10 §4; the parameter tail gives the upper bound and principal ideal theorem gives the lower bound. |
| A | `cor-systems-of-parameters-exist-by-dimension-induction` | `cor` | Every finite-dimensional Noetherian local ring admits a system of parameters. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: BU §23; select a dimension-cutting element and lift a system from the quotient. |
| A | `lem-radical-generation-gives-dimension-bound` | `lem` | If an ideal generated by \(n\) elements has radical \(\mathfrak m\) in a Noetherian local ring, then \(\dim R\le n\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 10 §4; the maximal ideal is minimal over the generated ideal, so height theorem applies. |
| A | `cor-local-dimension-minimal-radical-generator-number` | `cor` | The dimension of a Noetherian local ring is the least number of elements needed to generate an ideal with maximal radical. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: BU §23 and H20 Ch. 10 §4; combine systems-of-parameters existence with the bound. |
| A | `lem-polynomial-ring-dimension-lower-chain` | `lem` | A prime chain of length \(d\) in \(R\) extends in \(R[x]\) and can be topped by adjoining \(x\), giving \(\dim R[x]\ge d+1\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 10 and TN §14; extension of primes and the prime \((\mathfrak p,x)\) give the chain. |
| A | `lem-polynomial-prime-contraction-height-jump-at-most-one` | `lem` | For a Noetherian ring, primes \(P\subsetneq Q\) of \(R[x]\) with equal contraction contribute at most one strict step in a saturated chain. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 10 and TN §14; pass to the fraction field of the contracted domain, where a polynomial ring has dimension one. |
| A | `lem-polynomial-ring-dimension-upper-bound` | `lem` | Contracting a prime chain in \(R[x]\) and counting at most one repeated-contraction step yields \(\dim R[x]\le\dim R+1\) for Noetherian \(R\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 10; this is the chain bookkeeping behind the polynomial dimension theorem. |
| A | `cor-localisation-dimension-does-not-increase` | `cor` | \(\dim S^{-1}R\le\dim R\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 10 §1; prime chains in the localization contract to strict chains disjoint from \(S\). |
| A | `cor-quotient-dimension-does-not-increase` | `cor` | \(\dim R/I\le\dim R\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 10 §1; quotient prime chains lift to strict chains containing \(I\). |
| A | `lem-affine-domain-normalisation-dimension-upper-bound` | `lem` | If an affine domain is finite over \(k[y_1,\ldots,y_d]\), incomparability contracts every prime chain strictly, giving dimension at most \(d\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 4 §6 and TN §14; this is the upper half of affine dimension. |
| A | `lem-affine-domain-normalisation-dimension-lower-bound` | `lem` | Going up lifts the standard length-\(d\) coordinate-prime chain from the normalizing polynomial ring, giving dimension at least \(d\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 4 §6; this is the lower half of affine dimension. |
| A | `cor-affine-domain-dimension-equals-transcendence-degree` | `cor` | A finitely generated domain over a field has dimension equal to the transcendence degree of its fraction field. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 4 §6 and TN §14; Noether normalization identifies the number of variables with the transcendence degree. |
| A | `lem-affine-domain-chain-dimension-formula-step` | `lem` | For primes \(\mathfrak p\subseteq\mathfrak q\) in an affine domain, transcendence-degree additivity compares the dimensions of the corresponding quotient fraction fields. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: TN §14 and H20 Ch. 4 §6; this is the field-theoretic step in the affine dimension formula. |
| A | `cor-height-plus-quotient-dimension-affine-domain` | `cor` | For an affine domain \(A\) and prime \(\mathfrak p\), \(\operatorname{ht}\mathfrak p+\dim A/\mathfrak p=\dim A\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: TN §14; normalize/localize and apply the transcendence-degree comparison. |
| A | `cor-affine-domain-maximal-ideal-height-equals-dimension` | `cor` | Every maximal ideal of an affine domain over a field has height \(\dim A\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 4 §6; its residue field has transcendence degree zero by Zariski's lemma, so the dimension formula applies. |
| B | `ex-relative-height-in-a-quotient` | `ex` | Compute heights before and after quotienting for a chain of monomial primes in \(k[x,y,z]\). | provenance.statement: literature-derived exercise; provenance.proof: literature-derived; rationale: BU §21 uses coordinate primes to illustrate relative chain length. |
| B | `ex-principal-ideal-height-zero-for-a-zerodivisor` | `ex` | Give a principal ideal generated by a zero divisor with a minimal prime of height zero, showing why the exact-height corollary needs a non-zero-divisor. | provenance.statement: literature-derived standard counterexample; provenance.proof: literature-derived; rationale: BU §22; a reducible quotient supplies the example. |
| B | `ex-height-theorem-bound-sharp` | `ex` | Exhibit an ideal generated by \(n\) variables whose minimal prime has height exactly \(n\). | provenance.statement: ai-generated source-derived example; provenance.proof: literature-derived; rationale: WL Lecture 24; coordinate ideals make the bound sharp. |
| B | `ex-system-of-parameters-not-a-minimal-generating-set` | `ex` | In a singular local ring, compare a system of parameters with a minimal generating set of the maximal ideal. | provenance.statement: literature-derived exercise; provenance.proof: ai-altered; rationale: BU §23; the gap anticipates embedding dimension in CA-18. |
| B | `ex-localisation-strictly-lowers-dimension` | `ex` | Find a localization of a polynomial ring whose dimension is strictly smaller and list the surviving prime chains. | provenance.statement: ai-generated source-derived example; provenance.proof: literature-derived; rationale: H20 Ch. 10 §1; it tests the one-sided localization inequality. |
| B | `ex-polynomial-dimension-zero-ring-boundary` | `ex` | Check the polynomial-dimension formula for a field, an Artinian nonreduced ring, and the zero ring under §3's convention. | provenance.statement: ai-generated boundary example; provenance.proof: literature-derived; rationale: H20 Chs. 9--10 separate the nonzero and zero-ring cases. |

#### CA-11 additions — `graded-rees-artin-rees-and-hilbert-samuel` and companion

| target | id | kind | focused statement | explicit provenance |
|---|---|---|---|---|
| A | `lem-homogeneous-components-of-a-graded-ideal` | `lem` | An ideal in a graded ring is homogeneous iff it is generated by homogeneous elements, equivalently iff it contains every homogeneous component of each of its elements. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: BU §3 and H20 Ch. 13; grouping components proves the equivalences. |
| A | `lem-graded-module-finite-generation-degree-recurrence` | `lem` | A graded module over a standard graded algebra is finite iff its high-degree pieces are generated recursively from finitely many lower degrees. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: BU §3; choose homogeneous generators and bound their degrees. |
| A | `lem-hilbert-series-additive-in-graded-exact-sequences` | `lem` | A degreewise exact sequence of graded modules with finite-length pieces gives an additive identity of Hilbert series. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: BU §3; length additivity applies in each degree and formal series add coefficientwise. |
| A | `lem-hilbert-series-shift-multiplies-by-a-monomial` | `lem` | For a graded shift \(M(-a)\), \(H_{M(-a)}(t)=t^aH_M(t)\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: BU §3; reindex homogeneous pieces. |
| A | `lem-hilbert-serre-variable-exact-sequence` | `lem` | Multiplication by a degree-one variable fits into an exact sequence involving its kernel and cokernel, both modules over one fewer variable. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: BU §3 and the CRing Project Hilbert-series chapter; this is the inductive engine of Hilbert--Serre. |
| A | `lem-hilbert-serre-rational-denominator` | `lem` | A finite graded module over \(R[x_1,\ldots,x_d]\) has Hilbert series \(P(t)/(1-t)^d\) when the coefficient-length hypotheses hold. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: BU §3; induction with the variable exact sequence controls the numerator. |
| A | `lem-rational-hilbert-series-eventual-polynomial` | `lem` | Coefficients of \(P(t)/(1-t)^d\) agree eventually with a polynomial of degree at most \(d-1\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: BU §3; expand \((1-t)^{-d}\) by binomial coefficients and shift by the finite numerator. |
| A | `cor-finite-difference-lowers-hilbert-polynomial-degree` | `cor` | The first finite difference of an eventual Hilbert polynomial of degree \(r\) has degree \(r-1\) with the expected leading coefficient. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: BU §3; binomial-basis expansion makes the identity exact. |
| A | `lem-associated-graded-multiplication-well-defined` | `lem` | Multiplication of initial classes makes \(\operatorname{gr}_I(R)=\bigoplus I^n/I^{n+1}\) a graded ring and \(\operatorname{gr}_I(M)\) a graded module. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: BU §15 and H20 Ch. 13; changing representatives alters the product only in the next filtration step. |
| A | `lem-initial-form-order-additivity-boundary` | `lem` | The initial degree of a product is at least the sum of initial degrees, with equality exactly when the product of initial forms is nonzero. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: BU §15; this records the zero-divisor boundary in the associated graded ring. |
| A | `lem-good-filtration-associated-graded-finite` | `lem` | A stable \(I\)-filtration on a finite module has finite associated graded module over \(\operatorname{gr}_I(R)\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: BU §15 and H20 Ch. 13; finitely many early pieces generate once \(IF_n=F_{n+1}\) stabilizes. |
| A | `lem-associated-graded-noetherian-for-a-finite-ideal` | `lem` | If \(R\) is Noetherian and \(I\) finite, then \(\operatorname{gr}_I(R)\) is a Noetherian graded ring. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: BU §15; it is a quotient of a polynomial ring over \(R/I\) on generators representing generators of \(I\). |
| A | `lem-rees-algebra-as-graded-subring` | `lem` | \(\mathcal R_I(R)=\bigoplus_{n\ge0}I^nt^n\) is a graded subring of \(R[t]\), generated in degree one when \(I\) is finite. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: BU §§15--17 and H20 Ch. 13; multiplication sends degree \(m,n\) pieces to degree \(m+n\). |
| A | `lem-rees-module-as-finite-graded-module` | `lem` | For finite \(M\), \(\mathcal R_I(M)=\bigoplus I^nMt^n\) is finite over \(\mathcal R_I(R)\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 13; degree-zero module generators suffice. |
| A | `cor-associated-graded-as-rees-quotient` | `cor` | The associated graded ring is the quotient of the Rees algebra by the homogeneous ideal generated in degree \(n\) by \(I^{n+1}t^n\), and similarly for modules. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: BU §15; take the degreewise quotient \(I^n/I^{n+1}\). |
| A | `lem-artin-rees-intersection-rees-submodule` | `lem` | For \(N\subseteq M\), \(\bigoplus_n(I^nM\cap N)t^n\) is a graded submodule of \(\mathcal R_I(M)\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 13 and R710 Lecture 10; multiplication by \(I^rt^r\) preserves the intersections. |
| A | `lem-artin-rees-intersection-rees-submodule-finite` | `lem` | If \(R\) is Noetherian and \(M\) finite, that intersection Rees submodule is finite. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 13; the Rees algebra is Noetherian and the ambient Rees module is finite. |
| A | `lem-artin-rees-degree-bound-to-formula` | `lem` | A homogeneous generating-degree bound \(c\) gives \(I^nM\cap N=I^{n-c}(I^cM\cap N)\) for all \(n\ge c\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: R710 Lecture 10 and BU §17; take the degree-\(n\) part of the finite generating equality. |
| A | `cor-adic-topology-induced-on-a-submodule` | `cor` | The filtration \(I^nM\cap N\) and the intrinsic filtration \(I^nN\) define the same linear topology on \(N\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 13; Artin--Rees gives one cofinal containment and the other is automatic. |
| A | `lem-krull-intersection-artin-rees-stability` | `lem` | For \(N=\bigcap_nI^nM\), Artin--Rees yields \(N=IN\) when \(M\) is finite over a Noetherian ring. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: BU §17 and H20 Ch. 13; intersect the stable Artin--Rees formula over all large \(n\). |
| A | `cor-krull-intersection-jacobson-form` | `cor` | If \(I\subseteq\operatorname{Jac}(R)\) and \(M\) is finite over Noetherian \(R\), then \(\bigcap_nI^nM=0\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: BU §17; the preceding stability plus Nakayama kills the intersection. |
| A | `cor-noetherian-local-adic-topology-separated` | `cor` | For a proper ideal of a Noetherian local ring, the adic topology on every finite module is separated. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 13; every proper ideal lies in the maximal/Jacobson radical. |
| A | `lem-hilbert-samuel-length-as-sum-of-graded-pieces` | `lem` | \(\ell(M/I^{n+1}M)=\sum_{j=0}^n\ell(I^jM/I^{j+1}M)\) when \(I\) is an ideal of definition. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: BU §§3,15 and the CRing Project; use the finite filtration and length additivity. |
| A | `lem-hilbert-samuel-first-difference-is-graded-hilbert-function` | `lem` | The first difference of the Hilbert--Samuel function is the Hilbert function of \(\operatorname{gr}_I(M)\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: BU §15; subtract consecutive length sums. |
| A | `lem-hilbert-samuel-polynomial-from-hilbert-serre` | `lem` | Hilbert--Serre applied to \(\operatorname{gr}_I(M)\) makes the Hilbert--Samuel function eventually polynomial. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: BU §§3,15; finite associated graded plus the difference identity supplies the polynomial after discrete summation. |
| A | `lem-hilbert-samuel-leading-coefficient-integrality` | `lem` | Writing the Hilbert--Samuel polynomial in the binomial basis makes its normalized leading coefficient a nonnegative integer. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: the CRing Project multiplicity chapter, checked against BU §15; repeated finite differences are eventual nonnegative lengths. |
| A | `lem-hilbert-samuel-degree-at-most-module-dimension` | `lem` | The degree of the Hilbert--Samuel polynomial is at most \(\dim\operatorname{Supp}M\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20/CRing multiplicity treatment; induction reduces by a parameter avoiding maximal-dimensional associated primes. |
| A | `lem-hilbert-samuel-degree-at-least-module-dimension` | `lem` | Nonvanishing along a maximal-dimensional prime gives the reverse inequality for a nonzero finite module. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: the CRing Project Hilbert--Samuel dimension proof; localize/filter along a maximal-dimensional support chain. |
| A | `cor-hilbert-samuel-multiplicity-positive-for-nonzero-module` | `cor` | The Hilbert--Samuel multiplicity of a nonzero finite module with respect to an ideal of definition is positive. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: the CRing Project and Huneke--Stone CA III opening; the top finite difference is eventually a positive length. |
| A | `lem-multiplicity-additivity-lower-dimensional-terms-vanish` | `lem` | In a short exact sequence, Hilbert--Samuel functions add; modules of dimension below the maximum contribute no top-degree coefficient. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: Huneke--Stone CA III opening; Artin--Rees aligns the induced filtrations before length additivity is applied. |
| A | `cor-multiplicity-additive-at-common-dimension` | `cor` | If all nonzero modules in a short exact sequence have the same dimension, their Hilbert--Samuel multiplicities add. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: Huneke--Stone CA III; take normalized leading coefficients in the additive Hilbert polynomial identity. |
| A | `lem-parameter-reduction-exact-sequence-for-hilbert-functions` | `lem` | Multiplication by a parameter produces a kernel/cokernel exact sequence comparing the Hilbert--Samuel functions of \(M\) and \(M/xM\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: Huneke--Stone CA III opening; colon kernels record the failure of regularity. |
| A | `cor-multiplicity-preserved-by-a-superficial-regular-parameter` | `cor` | Under the stated superficiality and non-zero-divisor hypotheses, reducing by a parameter preserves multiplicity while lowering dimension by one. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: Huneke--Stone CA III and the CRing Project; eventual vanishing/stability of the colon term makes the difference polynomials agree. |
| B | `ex-graded-shift-hilbert-series` | `ex` | Compute Hilbert series before and after several graded shifts and verify exact-sequence additivity. | provenance.statement: literature-derived exercise; provenance.proof: literature-derived; rationale: BU §3 uses shifts as the basic Hilbert-series calculation. |
| B | `ex-associated-graded-initial-product-vanishes` | `ex` | Give two elements whose initial-form product is zero although their product is nonzero in the filtered ring. | provenance.statement: literature-derived standard example; provenance.proof: ai-altered; rationale: BU §15; it demonstrates why order is only subadditive without a domain hypothesis on the graded ring. |
| B | `ex-artin-rees-bound-visible-in-a-polynomial-module` | `ex` | For explicit \(N\subseteq M\) and \(I\), compute the least Artin--Rees bound and verify the stable formula. | provenance.statement: literature-derived exercise; provenance.proof: literature-derived; rationale: R710 Lecture 10 contains concrete intersection computations. |
| B | `ex-krull-intersection-fails-outside-jacobson-radical` | `ex` | Give a finite module and ideal not in the Jacobson radical for which \(\bigcap I^nM\ne0\). | provenance.statement: literature-derived standard counterexample; provenance.proof: literature-derived; rationale: BU §17; an idempotent ideal makes all powers equal. |
| B | `ex-hilbert-samuel-function-versus-polynomial-small-degrees` | `ex` | Compute a Hilbert--Samuel function that differs from its eventual polynomial in the first few degrees. | provenance.statement: literature-derived exercise; provenance.proof: ai-altered; rationale: Huneke--Stone CA III opening emphasizes eventual, not pointwise, equality. |
| B | `ex-multiplicity-ignores-lower-dimensional-summand` | `ex` | Add a finite-length summand to a positive-dimensional module and verify that the top multiplicity is unchanged. | provenance.statement: ai-generated source-derived example; provenance.proof: literature-derived; rationale: the multiplicity additivity proof discards lower-degree terms. |

#### CA-12 additions — `flatness-faithful-flatness-and-descent` and companion

| target | id | kind | focused statement | explicit provenance |
|---|---|---|---|---|
| A | `lem-ring-map-flatness-is-target-flatness` | `lem` | A ring map \(A\to B\) is flat exactly when the underlying \(A\)-module \(B\) is flat; this is a track-owned ring-map definition citing `def-flat-module`. | provenance.statement: literature-derived; provenance.proof: not-applicable; rationale: H20 Ch. 7 §1 and V25 §25.1; seam ruling R-1 forbids re-minting basic module flatness. |
| A | `lem-flat-module-tensor-preserves-monomorphisms` | `lem` | A module is flat iff tensoring with it preserves injectivity of every module monomorphism. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 7 §1 and V25 §25.1; right exactness is inherited, so injectivity is the only additional condition. |
| A | `cor-free-modules-are-flat` | `cor` | Every free module is flat. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 7 §1; tensor with a direct sum of copies of the ring is a direct sum of the original sequence. |
| A | `cor-projective-modules-are-flat` | `cor` | Every projective module is flat. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 7 §1; a projective is a direct summand of a free module and flatness passes to summands. |
| A | `lem-arbitrary-direct-sums-of-flat-modules-are-flat` | `lem` | An arbitrary direct sum of flat modules is flat. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 7 §1 and V25 §25.2; tensor commutes with direct sums and injectivity is coordinatewise. |
| A | `lem-localisation-flatness-via-ideal-injectivity` | `lem` | For every ideal \(I\), the map \(I\otimes_RS^{-1}R\to S^{-1}R\) identifies with the inclusion \(S^{-1}I\hookrightarrow S^{-1}R\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 7 §1; module-localization exactness and the tensor comparison give the flatness proof. |
| A | `cor-module-localisation-is-flat-base-change` | `cor` | \(S^{-1}M\cong M\otimes_RS^{-1}R\) is an exact base-change functor. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Chs. 2 and 7; combine the CA-2 comparison with localization flatness. |
| A | `lem-flatness-composition-tensor-associativity` | `lem` | If \(A\to B\) and \(B\to C\) are flat, then \(A\to C\) is flat by associating the two tensor functors. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 7 §1; a composition of exact functors is exact. |
| A | `lem-flatness-base-change-tensor-identification` | `lem` | If \(A\to B\) is flat and \(A\to A'\) any map, then \(A'\to A'\otimes_AB\) is flat. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: V25 §25.2 and H20 Ch. 6; tensor associativity identifies the tested functor with base change of the original exact functor. |
| A | `lem-flatness-localises-at-primes` | `lem` | A flat module remains flat after localizing both the ring and module at any prime. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 7 §2; localization is flat and tensor comparisons commute. |
| A | `lem-flatness-global-from-localisations` | `lem` | If \(M_\mathfrak p\) is flat over \(R_\mathfrak p\) for every prime, then \(M\) is flat. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 7 §2 and V25 §25.6; localize the kernel of each tensor-tested injection and use the local zero criterion. |
| A | `cor-flatness-may-be-tested-at-maximal-ideals` | `cor` | It suffices to test flatness at all maximal localizations. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 7 §2; the local zero criterion is equally valid over maximal ideals. |
| A | `lem-equational-flatness-relation-module` | `lem` | A finite relation \(\sum a_ix_i=0\) in a flat module lifts from the kernel of \(R^n\to R\) after tensoring. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 7 and V25 §25.4; this is the forward half of the equational criterion. |
| A | `lem-equational-flatness-factorisation` | `lem` | Such a lifted relation is equivalent to a finite factorisation \(x_i=\sum_jb_{ij}y_j\) with \(\sum_i a_ib_{ij}=0\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 7; write the lifted tensor as a finite sum of kernel vectors tensored with module elements. |
| A | `lem-equational-criterion-implies-ideal-injectivity` | `lem` | If every finite relation admits the factorisation above, then \(I\otimes_RM\to M\) is injective for every finitely generated ideal \(I\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 7 and V25 §25.4; express a kernel tensor through chosen ideal generators and factor its relation. |
| A | `lem-flatness-ideal-criterion-finitely-generated-reduction` | `lem` | It is enough to require injectivity of \(I\otimes M\to M\) for finitely generated ideals \(I\); arbitrary finite tensor relations live in such an ideal. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: V25 §25.4 and Stacks §10.39; only the finitely many coefficients in a relation are needed. |
| A | `cor-flatness-tor-one-cyclic-criterion` | `cor` | After Tor is available, \(M\) is flat iff \(\operatorname{Tor}_1^R(R/I,M)=0\) for every finitely generated ideal \(I\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: V25 §§25.3--25.4; the long exact Tor sequence identifies this group with the kernel of \(I\otimes M\to M\).  Tor itself remains homological-algebra-owned. |
| A | `lem-flat-quotient-kernel-idempotent` | `lem` | If \(R/I\) is flat, tensoring \(0\to I\to R\to R/I\to0\) shows \(I/I^2=0\), hence \(I=I^2\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 7 and V25 §25.4; the kernel is identified explicitly. |
| A | `lem-finitely-generated-idempotent-ideal-generated-by-an-idempotent` | `lem` | A finitely generated ideal \(I=I^2\) is \(Re\) for an idempotent \(e\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 7; the determinant trick gives an element acting as identity on \(I\), which is then idempotent. |
| A | `cor-finitely-presented-flat-quotient-is-a-direct-summand` | `cor` | If \(R/I\) is finitely presented and flat, then \(R/I\) is projective and \(I\) is generated by an idempotent. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 7; finite presentation makes \(I\) finite, so the idempotent lemma splits the quotient. |
| A | `lem-faithfully-flat-tensor-reflects-zero-objects` | `lem` | A flat module \(F\) is faithfully flat exactly when \(N\otimes_RF=0\) implies \(N=0\) for every module \(N\); mere faithfulness of its scalar action is not substituted for this condition. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: V25 §25.2 and Stacks §10.39; testing cyclic quotients gives the local criterion, and flatness upgrades object detection to exactness detection. |
| A | `lem-faithfully-flat-detects-injectivity` | `lem` | If \(F\) is faithfully flat and \(f\otimes F\) is injective, then \(f\) is injective. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 7; flatness identifies the tensor of \(\ker f\) with the tested kernel, then faithfulness kills the kernel. |
| A | `lem-faithfully-flat-detects-surjectivity` | `lem` | If \(F\) is faithfully flat and \(f\otimes F\) is surjective, then \(f\) is surjective. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 7; right exactness identifies the tensor of the cokernel, then faithfulness kills it. |
| A | `cor-faithfully-flat-detects-isomorphisms` | `cor` | A module map is an isomorphism iff it becomes one after faithfully flat base change. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: V25 §25.2; combine detection of injectivity and surjectivity. |
| A | `lem-faithfully-flat-ideal-contraction` | `lem` | For faithfully flat \(A\to B\), every ideal satisfies \(IB\cap A=I\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: V25 §25.2 and Stacks §10.39; injectivity of \(A/I\to B/IB\) is faithful-flat detection applied to the quotient map. |
| A | `cor-faithfully-flat-ring-map-injective-via-zero-ideal` | `cor` | A faithfully flat ring map is injective. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 7; set \(I=(0)\) in ideal contraction. |
| A | `lem-faithfully-flat-spectrum-surjectivity-algebraic-form` | `lem` | For every prime \(\mathfrak p\subset A\), faithful flatness makes \(B\otimes_A\kappa(\mathfrak p)\) nonzero, hence it has a prime whose contraction gives a prime of \(B\) over \(\mathfrak p\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: V25 §25.5; this is the algebraic prime-existence proof, with topological interpretation deferred to CA-15. |
| A | `cor-faithfully-flat-spectrum-map-surjective` | `cor` | Contraction on spectra is surjective for a faithfully flat ring map. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: V25 §25.5; apply the fibre prime lemma to each base prime. |
| A | `lem-faithfully-flat-descent-flatness-associativity` | `lem` | If \(A\to B\) is faithfully flat and \(M\otimes_AB\) is flat over \(B\), tensoring a tested kernel first with \(B\) shows it vanishes by faithful detection. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 7 and V25 §25.6; tensor associativity supplies the comparison. |
| A | `lem-faithfully-flat-descent-finite-generation` | `lem` | If \(M\otimes_AB\) is finitely generated over \(B\), finitely many tensors involve finitely many elements of \(M\), and their quotient becomes zero after base change. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: Stacks §10.83, checked against V25 §25.6; faithful detection kills the quotient and descends finite generation. |
| A | `cor-faithfully-flat-descent-finite-presentation` | `cor` | Finite presentation descends along a faithfully flat ring map. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: Stacks §10.83; first descend finite generators, present by a finite free module, and descend finite generation of the kernel. |
| A | `lem-local-flatness-criterion-tor-step` | `lem` | For a local map \((A,\mathfrak m)\to(B,\mathfrak n)\) and finite \(B\)-module \(M\), flatness over \(A\) is controlled by flatness of \(M/\mathfrak mM\) over \(B/\mathfrak mB\) plus vanishing of the first obstruction for \(A/I\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: V25 §25.6 and Stacks local flatness criterion; the Tor group is cited from homological algebra. |
| A | `lem-local-flatness-criterion-lifting-relations` | `lem` | Under the closed-fibre and obstruction hypotheses, relations among lifted generators can be corrected inductively modulo powers of the maximal ideal. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: V25 §25.6; this is the relation-lifting move in the local criterion. |
| A | `lem-finite-flat-local-minimal-surjection` | `lem` | For finite flat \(M\) over local \((R,\mathfrak m)\), lift a basis of \(M/\mathfrak mM\) to a minimal surjection \(R^r\twoheadrightarrow M\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 7 and TN §7.4; Nakayama gives surjectivity. |
| A | `lem-finite-flat-local-kernel-vanishes` | `lem` | Tensoring the minimal presentation with the residue field and using flatness shows its finite kernel has zero residue quotient, hence is zero by Nakayama. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 7; the kernel is finite because the ring is Noetherian in this stated route. |
| A | `cor-finite-flat-local-rank-is-residue-dimension` | `cor` | A finite flat module over a Noetherian local ring is free of rank \(\dim_k(M/\mathfrak mM)\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 7; the preceding two lemmas identify the minimal free cover. |
| A | `lem-flat-going-down-one-step` | `lem` | For flat \(A\to B\), \(\mathfrak p_1\subseteq\mathfrak p_2\) in \(A\), and \(\mathfrak q_2\) over \(\mathfrak p_2\), base change to \(B_{\mathfrak q_2}/\mathfrak p_1B_{\mathfrak q_2}\) and choose a minimal prime to obtain \(\mathfrak q_1\subseteq\mathfrak q_2\) over \(\mathfrak p_1\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: V25 §25.5 and Stacks §10.39; ideal contraction for the localized faithfully flat residue map gives the desired contraction. |
| B | `ex-free-projective-flat-implication-chain` | `ex` | For several modules, identify which implications free \(\Rightarrow\) projective \(\Rightarrow\) flat are strict. | provenance.statement: literature-derived exercise; provenance.proof: literature-derived; rationale: H20 Ch. 7 examples include localizations and nonfree projectives. |
| B | `ex-flatness-ideal-kernel-computation` | `ex` | Compute the kernel of \(I\otimes_RM\to M\) for a quotient module and use it to prove nonflatness. | provenance.statement: literature-derived exercise; provenance.proof: literature-derived; rationale: V25 §25.4 makes this the standard ideal-criterion calculation. |
| B | `ex-infinite-flat-module-not-projective` | `ex` | Give a localization or filtered-colimit example that is flat but not projective and verify both claims from the stated criteria. | provenance.statement: literature-derived standard example; provenance.proof: ai-altered; rationale: H20 Ch. 7 distinguishes flatness from projectivity outside finite presentation. |
| B | `ex-idempotent-quotient-flat-splitting` | `ex` | For a product ring and a coordinate idempotent, compute the flat quotient and its complementary ideal. | provenance.statement: literature-derived exercise; provenance.proof: literature-derived; rationale: H20 Ch. 7; the product decomposition makes the splitting explicit. |
| B | `ex-flat-not-faithful-via-missing-prime` | `ex` | Localize away from a prime, exhibit a nonzero residue module killed by base change, and identify the missing point of the spectrum. | provenance.statement: literature-derived exercise; provenance.proof: literature-derived; rationale: V25 §§25.2,25.5; it ties object detection to spectrum surjectivity. |
| B | `ex-faithfully-flat-descent-of-generators` | `ex` | Start with explicit generators after a product cover and descend a finite generating set by collecting their tensor components. | provenance.statement: literature-derived exercise; provenance.proof: ai-altered; rationale: Stacks faithfully flat descent proof; this is the finite bookkeeping step. |
| B | `ex-finite-flat-local-module-basis-lift` | `ex` | Lift a residue-field basis in a small local example and show directly that the presentation kernel vanishes. | provenance.statement: literature-derived exercise; provenance.proof: ai-altered; rationale: H20 Ch. 7; it instantiates the minimal-cover proof. |

#### CA-13 additions — `inverse-limits-and-adic-completion` and companion

| target | id | kind | focused statement | explicit provenance |
|---|---|---|---|---|
| A | `lem-inverse-limit-as-compatible-submodule-of-a-product` | `lem` | The inverse limit of a module system is the submodule of the product consisting of compatible tuples. | provenance.statement: literature-derived; provenance.proof: not-applicable; rationale: H20 Ch. 13 §1 and R710 Lecture 9; this concrete model supports every later elementwise lifting proof. |
| A | `lem-inverse-limit-projections-are-compatible` | `lem` | Coordinate projections from the compatible-tuple module commute with every transition map. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 13 §1; compatibility is exactly the defining equation for a tuple. |
| A | `lem-inverse-limit-universal-map-by-coordinates` | `lem` | A compatible cone \(N\to M_n\) determines a unique map \(N\to\varprojlim M_n\) by collecting its coordinate maps. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 13 §1 and R710 Lecture 9; compatibility lands the tuple in the submodule and product extensionality proves uniqueness. |
| A | `lem-inverse-limit-kernel-computed-coordinatewise` | `lem` | The kernel of a morphism of inverse limits is the inverse limit of its coordinate kernels. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 13 §1; tuplewise vanishing is coordinatewise vanishing. |
| A | `cor-inverse-limits-preserve-monomorphisms` | `cor` | Inverse limits preserve injective maps of inverse systems. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 13 §1; the coordinatewise kernel is zero. |
| A | `lem-inverse-limit-image-lifting-obstruction` | `lem` | Surjectivity on every coordinate need not give surjectivity on inverse limits because independently chosen preimages may fail compatibility. | provenance.statement: literature-derived; provenance.proof: not-applicable; rationale: R710 Lecture 9; this identifies the exact obstruction addressed by Mittag--Leffler. |
| A | `lem-mittag-leffler-stable-images` | `lem` | The Mittag--Leffler condition says that for each fixed stage, images from all sufficiently late stages stabilize. | provenance.statement: literature-derived; provenance.proof: not-applicable; rationale: H20 Ch. 13 §1; the definition is recorded in the form used for recursive lifting. |
| A | `cor-surjective-transition-system-is-mittag-leffler` | `cor` | An inverse system with surjective transition maps is Mittag--Leffler. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 13 §1 and R710 Lecture 9; every later image is the whole fixed-stage module. |
| A | `lem-compatible-preimage-recursion-surjective-systems` | `lem` | For a countable inverse system with surjective transitions, any element at one stage extends recursively to a compatible tail. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: R710 Lecture 9; choose one preimage at each successive stage.  The countable dependent-choice use is flagged in the proof. |
| A | `lem-mittag-leffler-compatible-kernel-correction` | `lem` | In a short exact sequence of inverse systems, stabilized kernel images permit successive corrections of arbitrary coordinate lifts into a compatible lift. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 13 §1; this is the nontrivial surjectivity step of exact inverse limits. |
| A | `thm-inverse-limit-exactness-surjective-kernels` | `thm` | The inverse limit of a countable short exact system is exact on the right when the kernel system has surjective transition maps. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: R710 Lecture 9 and H20 Ch. 13 §1; the compatible-kernel correction constructs the lift. |
| A | `cor-inverse-limit-of-nonempty-surjective-sets-nonempty` | `cor` | A countable inverse system of nonempty sets with surjective transitions has a compatible element, subject to the stated dependent-choice principle. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: R710 Lecture 9; recursively choose compatible preimages.  It is kept as a choice-strength remark, not used where a distinguished zero suffices. |
| A | `lem-adic-completion-compatible-residue-sequences` | `lem` | An element of \(\widehat M^I\) is a sequence \((m_n+I^nM)_n\) compatible under reduction. | provenance.statement: literature-derived; provenance.proof: not-applicable; rationale: H20 Ch. 13 §2 and BU §19; this is the inverse-limit definition expanded elementwise. |
| A | `lem-adic-completion-canonical-map-kernel` | `lem` | The kernel of \(M\to\widehat M^I\) is \(\bigcap_{n\ge1}I^nM\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 13 §2 and R710 Lecture 9; an element maps to zero exactly when it lies in every residue kernel. |
| A | `cor-adically-separated-iff-completion-map-injective` | `cor` | An \(I\)-adically filtered module is separated iff its canonical completion map is injective. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: BU §19; combine the definition with the kernel formula. |
| A | `lem-completeness-iff-compatible-residue-lifting` | `lem` | The completion map is surjective iff every compatible sequence of residues modulo \(I^nM\) is represented by one element of \(M\). | provenance.statement: literature-derived; provenance.proof: not-applicable; rationale: R710 Lecture 9 and BU §19; this is the elementwise form of adic completeness. |
| A | `lem-completion-is-separated` | `lem` | The adic completion is separated for the inverse-limit filtration under the Noetherian finite-module hypotheses used here. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 13 §2; projections show that an element in every kernel has every coordinate zero, using comparison of limit and adic filtrations. |
| A | `lem-completion-is-complete` | `lem` | The adic completion is complete under the Noetherian finite-module hypotheses. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 13 §2 and BU §19; exactness of the surjective quotient systems identifies its successive quotients and iterated limit. |
| A | `lem-completion-quotient-at-finite-level` | `lem` | For finite \(M\) over Noetherian \(R\), \(\widehat M^I/I^n\widehat M^I\cong M/I^nM\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 13 §2; Artin--Rees/exact inverse limits control the kernel and coordinate projection is surjective. |
| A | `lem-completion-exactness-injective-step-artin-rees` | `lem` | For \(N\subseteq M\) finite, Artin--Rees makes the induced filtration on \(N\) equivalent to its intrinsic adic filtration, so \(\widehat N\to\widehat M\) is injective. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 13 §3 and BU §19; cofinal filtrations have canonically isomorphic inverse limits. |
| A | `lem-completion-exactness-surjective-step` | `lem` | In a short exact sequence of finite modules, the quotient systems have surjective transitions, so compatible quotient residues lift through inverse-limit exactness. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 13 §3 and R710 Lecture 9; this is the right-exact half of completion exactness. |
| A | `cor-completion-preserves-finite-direct-sums` | `cor` | Adic completion commutes with finite direct sums of finite modules. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: BU §19; finite products and sums agree and inverse limits commute with finite products. |
| A | `lem-completion-tensor-comparison-map` | `lem` | There is a natural map \(\widehat R^I\otimes_RM\to\widehat M^I\) sending a completed scalar and module element to their compatible residue products. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 13 §3; bilinearity and residue compatibility construct the map. |
| A | `lem-completion-tensor-comparison-finite-free-case` | `lem` | The completion-tensor comparison is an isomorphism for finite free modules. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 13 §3; both sides are the same finite direct sum of \(\widehat R\). |
| A | `lem-completion-tensor-comparison-finite-presentation-step` | `lem` | A finite presentation and exactness of completion reduce the comparison for a finite module to the finite-free case. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 13 §3; compare the two cokernels of the completed presentation. |
| A | `lem-completion-flatness-ideal-criterion-map` | `lem` | For a finitely generated ideal \(J\), exact completion identifies \(J\otimes_R\widehat R\) with the extended ideal \(J\widehat R\subseteq\widehat R\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 13 §4; use the tensor comparison on \(J\) and the injection in the completed short exact sequence. |
| A | `cor-noetherian-adic-completion-is-flat` | `cor` | The adic completion of a Noetherian ring is flat over the ring. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 13 §4; the finite-ideal criterion follows from the preceding map. |
| A | `lem-jacobson-adic-completion-residue-nonzero` | `lem` | If \(I\subseteq\operatorname{Jac}(R)\), every nonzero finite cyclic module has nonzero completed base change. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 13 §4; mod out by a maximal ideal containing its annihilator and use \(I\)'s Jacobson containment. |
| A | `cor-jacobson-adic-completion-faithfully-flat` | `cor` | Under that Jacobson hypothesis, \(R\to\widehat R^I\) is faithfully flat. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 13 §4; flatness is known and the cyclic-module test gives faithfulness. |
| A | `lem-generators-of-ideal-in-completion-lift-mod-i` | `lem` | A finite generating set of an ideal of \(\widehat R\) modulo \(I\widehat R\) can be lifted to elements of that ideal. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 13 §4 and complete Nakayama; choose representatives in the ideal. |
| A | `lem-complete-nakayama-successive-approximation` | `lem` | If lifted elements generate a complete finite module modulo \(I\), successive corrections express every element modulo \(I^n\) for all \(n\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 13 and BU §19; the residual error is pushed one adic level deeper at each step. |
| A | `lem-complete-nakayama-limit-convergence` | `lem` | Completeness turns the compatible sequence of coefficient corrections into actual coefficients, proving generation rather than merely dense generation. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 13; this is the convergence step often omitted in a terse complete-Nakayama proof. |
| A | `thm-noetherianity-of-completion-from-ideal-lifting` | `thm` | Every ideal of the adic completion of a Noetherian ring is finitely generated, hence the completion is Noetherian. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 13 §4; identify the associated graded completion with \(\operatorname{gr}_I(R)\), lift finitely many homogeneous initial-ideal generators, and use separated successive approximation.  The proof does not apply Nakayama circularly to an ideal not yet known finite. |
| A | `lem-complete-local-ring-maximal-ideal` | `lem` | The completion of a Noetherian local ring at its maximal ideal is local with maximal ideal \(\mathfrak m\widehat R\) and unchanged residue field. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: BU §19 and WL Lecture 25; an element with nonzero residue has an inverse by geometric series. |
| A | `lem-completion-prime-chain-contraction-bound` | `lem` | Faithful flatness contracts strict enough prime data to show \(\dim\widehat R\ge\dim R\), while parameter ideals give the reverse inequality in the local Noetherian case. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 13 and WL Lecture 25; the two bounds use separate flatness and parameter arguments. |
| A | `cor-completion-preserves-local-dimension` | `cor` | A Noetherian local ring and its maximal-adic completion have the same dimension. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 13; combine the preceding two inequalities. |
| A | `lem-completion-preserves-hilbert-samuel-quotients` | `lem` | For finite \(M\), the quotients \(M/\mathfrak m^{n+1}M\) and \(\widehat M/\widehat{\mathfrak m}^{,n+1}\widehat M\) are canonically isomorphic. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 13 and BU §19; this is the finite-level completion quotient theorem. |
| A | `cor-completion-preserves-hilbert-samuel-polynomial-and-multiplicity` | `cor` | Maximal-adic completion preserves the Hilbert--Samuel function, polynomial and multiplicity of a finite module. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 13; the finite-level quotient lengths agree over the unchanged residue field. |
| B | `ex-compatible-residue-sequence-without-a-representative` | `ex` | Give a compatible residue sequence in an incomplete adic ring that is not represented by an element of the ring. | provenance.statement: literature-derived standard example; provenance.proof: literature-derived; rationale: BU §19 uses a non-polynomial formal series in \(k[x]_{(x)}\). |
| B | `ex-inverse-limit-coordinate-surjections-not-surjective` | `ex` | Work a non-Mittag--Leffler inverse system where every coordinate map is surjective but the induced limit map fails surjectivity. | provenance.statement: literature-derived standard counterexample; provenance.proof: ai-altered; rationale: H20 Ch. 13 §1 motivates the stable-image hypothesis with such systems. |
| B | `ex-adic-completion-kernel-nonseparated-module` | `ex` | Exhibit a module with nonzero \(\bigcap I^nM\) and compute the kernel of its completion map. | provenance.statement: literature-derived exercise; provenance.proof: literature-derived; rationale: R710 Lecture 9; an idempotent action supplies the simplest example. |
| B | `ex-completion-tensor-comparison-finite-module` | `ex` | Verify \(\widehat R\otimes_RM\cong\widehat M\) for a presented torsion module by completing its finite presentation. | provenance.statement: literature-derived exercise; provenance.proof: literature-derived; rationale: H20 Ch. 13 §3; it instantiates the cokernel comparison. |
| B | `ex-completion-new-elements-formal-series` | `ex` | Identify elements of \(k[[x]]\) not in \(k[x]_{(x)}\) while checking all finite quotient residues agree. | provenance.statement: literature-derived standard example; provenance.proof: literature-derived; rationale: BU §19 distinguishes completion from the original local ring. |
| B | `ex-completion-residue-and-dimension-invariance` | `ex` | Compute residue field, dimension and Hilbert--Samuel function before and after completing a one-dimensional local quotient. | provenance.statement: literature-derived exercise; provenance.proof: ai-altered; rationale: H20 Ch. 13 examples verify the three preserved invariants together. |

#### CA-14 additions — `henselian-rings-and-equicharacteristic-cohen-structure` and companion

| target | id | kind | focused statement | explicit provenance |
|---|---|---|---|---|
| A | `lem-hensel-factor-lift-leading-coefficient-normalisation` | `lem` | In a factor-lifting statement, monicity of \(f\) and of one lifted factor forces monicity and the prescribed degrees throughout the correction process. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: R710 Lecture 8 and BU §20; this isolates the degree bookkeeping in Hensel's lemma. |
| A | `lem-coprime-factor-bezout-lift` | `lem` | Coprime residue factors \(\bar g,\bar h\) admit polynomial lifts \(a,b\) with \(ag+bh\equiv1\pmod I\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: R710 Lecture 8; lift a Bézout identity from \((R/I)[x]\). |
| A | `lem-hensel-factor-correction-one-stage` | `lem` | If \(f-gh\in I^n[x]\), the lifted Bézout identity gives corrections \(g',h'\) with prescribed degree bounds and \(f-g'h'\in I^{n+1}[x]\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: R710 Lecture 8 and BU §20; solve the linearized error equation modulo the next power. |
| A | `lem-hensel-factor-corrections-form-cauchy-sequences` | `lem` | The successive corrected factors are Cauchy in the coefficientwise \(I\)-adic topology. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: R710 Lecture 8; the \(n\)-th correction has coefficients in \(I^n\). |
| A | `lem-hensel-factor-limit-multiplies-to-original` | `lem` | Completeness supplies coefficientwise limits whose product is \(f\), and separatedness turns congruence modulo every \(I^n\) into equality. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: R710 Lecture 8; continuity of finite polynomial multiplication and zero intersection finish the proof. |
| A | `lem-hensel-factor-lift-uniqueness-induction` | `lem` | Two monic lifts of the same coprime factorization agree modulo \(I^n\) for every \(n\), by a Bézout correction induction. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: R710 Lecture 8 and BU §20; separatedness then gives actual uniqueness. |
| A | `cor-idempotents-lift-uniquely-in-a-henselian-pair` | `cor` | Every idempotent of \(R/I\) lifts uniquely to an idempotent of a Henselian pair \((R,I)\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: BU §20 and Stacks Henselian pairs; factor \(x^2-x\) modulo \(I\) into the coprime factors \(x\) and \(x-1\). |
| A | `lem-simple-root-to-coprime-factorisation` | `lem` | A simple residue root \(\bar a\) gives a coprime factorization \(\bar f=(x-\bar a)\bar h\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: R710 Lecture 8; the derivative condition says \(\bar h(\bar a)\ne0\). |
| A | `cor-factor-hensel-implies-simple-root-hensel` | `cor` | The factor-lifting form of Hensel's property lifts every simple residue root uniquely. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: R710 Lecture 8 and BU §20; lift the linear factor and read off its root. |
| A | `lem-simple-root-hensel-lifts-idempotents` | `lem` | The simple-root form applied to \(x^2-x\) lifts residue idempotents. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: BU §20; its derivative \(2x-1\) is a unit at either residue root. |
| A | `lem-simple-root-form-recovers-factor-lifting` | `lem` | Applying simple-root lifting to the finite coefficient algebra parameterizing a monic factor yields the coprime factor-lifting form. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: Stacks Henselian rings, checked against BU §20; the Jacobian determinant is the resultant of the coprime residue factors. |
| A | `cor-henselian-local-simple-root-criterion` | `cor` | A local ring is Henselian iff every monic polynomial with a simple root in the residue field has a unique lift of that root. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: BU §20 and R710 Lecture 8; combine the two implication lemmas. |
| A | `lem-henselian-pair-ideal-in-jacobson-radical` | `lem` | In the adopted definition of a Henselian pair, the ideal lies in the Jacobson radical, ensuring lifted factors and roots have the intended unit properties. | provenance.statement: literature-derived; provenance.proof: not-applicable; rationale: Stacks Henselian pairs and R710 Lecture 8; the condition is part of the convention and prevents false disconnected examples. |
| A | `cor-complete-separated-adic-pair-henselian` | `cor` | If \(R\) is complete and separated for an ideal \(I\subseteq\operatorname{Jac}(R)\), then \((R,I)\) is Henselian. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: R710 Lecture 8; the five correction/convergence lemmas constitute the proof. |
| A | `cor-nilpotent-ideal-pair-is-henselian` | `cor` | If \(I\) is nilpotent and lies in the Jacobson radical, then \((R,I)\) is Henselian. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: BU §20; the \(I\)-adic ring is automatically complete and separated after finitely many stages. |
| A | `cor-artinian-local-henselian-via-nilpotent-maximal-ideal` | `cor` | An Artinian local ring is Henselian because its maximal ideal is nilpotent. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: BU §20 and H20 Ch. 9; apply the nilpotent-pair corollary. |
| A | `lem-henselian-quotient-factor-lift` | `lem` | A coprime factorization modulo the image of the Henselian ideal in a quotient lifts by pulling the polynomial/factor data back and then reducing a lift. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: Stacks Henselian rings and BU §20; this is the quotient-stability proof. |
| A | `cor-quotient-of-a-henselian-local-ring-is-henselian` | `cor` | Every quotient of a Henselian local ring is Henselian. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: BU §20; the quotient remains local and the factor-lifting lemma applies. |
| A | `lem-coefficient-field-maps-isomorphically-to-residue-field` | `lem` | A coefficient field of a local ring is a subfield whose composite to the residue field is an isomorphism. | provenance.statement: literature-derived; provenance.proof: not-applicable; rationale: H615 April 13 and WL Lecture 25; this fixes the convention before existence is asserted. |
| A | `lem-equicharacteristic-prime-field-lifts` | `lem` | In an equicharacteristic complete local ring, the prime field embeds compatibly with the residue field. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H615 April 13; equal characteristic removes the mixed-characteristic obstruction at the first step. |
| A | `lem-maximal-residue-injective-subfield` | `lem` | Zorn's lemma produces a subfield maximal among subfields of the complete local ring mapping injectively to the residue field. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H615 April 13; unions of chains remain fields with residue-injective maps. |
| A | `lem-coefficient-field-separable-adjunction-step` | `lem` | A residue element separable over the maximal subfield's image lifts by simple-root Hensel and can be adjoined without losing residue injectivity. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H615 April 13; lift its separable minimal polynomial and simple root. |
| A | `lem-coefficient-field-transcendental-adjunction-step` | `lem` | A residue element transcendental over the current image can be lifted and its rational-function field embedded, since every nonzero polynomial in the lift has nonzero residue and is a unit. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H615 April 13; the unit criterion ensures denominators invert. |
| A | `lem-coefficient-field-purely-inseparable-complete-step` | `lem` | In positive equicharacteristic, completeness supplies the compatible lifts required in the remaining purely inseparable step of the coefficient-field theorem. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H615 April 13's coefficient-field proof; the row records where completeness, rather than ordinary Hensel lifting, is used. |
| A | `cor-equicharacteristic-complete-local-ring-has-coefficient-field` | `cor` | Every complete equicharacteristic Noetherian local ring contains a coefficient field. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H615 April 13 and WL Lecture 25; maximality plus the three adjunction cases makes the residue image all of the residue field. |
| A | `lem-formal-power-series-evaluation-converges` | `lem` | For a complete local \(k\)-algebra and elements \(x_i\) in its maximal ideal, substitution defines a convergent homomorphism \(k[[X_1,\ldots,X_n]]\to R\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H615 April 13 and WL Lecture 25; degree tails land in arbitrarily high maximal-ideal powers. |
| A | `lem-formal-power-series-evaluation-unique-continuous-map` | `lem` | That substitution map is the unique continuous \(k\)-algebra map sending \(X_i\) to \(x_i\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H615 April 13; polynomial truncations are dense and the target is separated. |
| A | `lem-cohen-presentation-surjective-mod-maximal-square` | `lem` | If \(x_1,\ldots,x_e\) lift a basis of \(\mathfrak m/\mathfrak m^2\), the formal-series evaluation map is surjective modulo every \(\mathfrak m^n\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H615 April 13 and WL Lecture 25; Nakayama gives the first stage and multiplication gives successive graded stages. |
| A | `lem-cohen-presentation-surjective-by-completeness` | `lem` | Compatible approximate preimages modulo all powers converge to a formal series mapping to a prescribed element of \(R\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H615 April 13; successive homogeneous corrections and completeness turn dense image into surjectivity. |
| A | `cor-equicharacteristic-complete-local-power-series-quotient` | `cor` | A complete equicharacteristic Noetherian local ring with residue field \(k\) is a quotient of \(k[[X_1,\ldots,X_e]]\), where \(e\) is its embedding dimension. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H615 April 13 and WL Lecture 25; choose a coefficient field and minimal maximal-ideal generators, then apply the two surjectivity lemmas. |
| A | `lem-parameter-power-series-subring-makes-ring-finite` | `lem` | If \(x_1,\ldots,x_d\) is a system of parameters in a complete equicharacteristic local domain with coefficient field \(k\), then \(R\) is finite over \(k[[x_1,\ldots,x_d]]\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H615 April 13; the parameter ideal is maximal-primary, so finitely many residue representatives generate modulo it and complete Nakayama gives module finiteness. |
| A | `lem-parameter-power-series-map-injective-by-dimension` | `lem` | For a complete local domain, the map from \(k[[X_1,\ldots,X_d]]\) determined by parameters is injective once module finiteness and equality of dimensions are known. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H615 April 13; a nonzero kernel would lower the dimension of the source quotient, contradicting dimension preservation under a finite integral extension. |
| A | `cor-complete-local-domain-finite-over-a-regular-power-series-ring` | `cor` | A complete equicharacteristic Noetherian local domain of dimension \(d\) is module-finite over a power-series subring in \(d\) variables over a coefficient field. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H615 April 13; the preceding finite/injective parameter lemmas are the Noether-normalization analogue. |
| B | `ex-hensel-factor-correction-mod-three-powers` | `ex` | Perform three correction stages for a coprime factorization over an adically complete ring. | provenance.statement: literature-derived exercise; provenance.proof: ai-altered; rationale: R710 Lecture 8; finite stages display the Bézout error equation. |
| B | `ex-simple-root-and-factor-hensel-same-lift` | `ex` | Lift one simple residue root both directly and through its linear factor, then compare the results. | provenance.statement: literature-derived exercise; provenance.proof: literature-derived; rationale: BU §20; uniqueness forces the two constructions to agree. |
| B | `ex-multiple-residue-root-does-not-lift-uniquely` | `ex` | Give a polynomial with a multiple residue root having either no lift or several lifts. | provenance.statement: literature-derived standard counterexample; provenance.proof: literature-derived; rationale: R710 Lecture 8; it shows the derivative-unit hypothesis is necessary. |
| B | `ex-idempotent-lifting-and-product-decomposition` | `ex` | Lift a nontrivial residue idempotent and use it to decompose the ring as a product. | provenance.statement: literature-derived exercise; provenance.proof: ai-altered; rationale: BU §20; the factorization of \(x^2-x\) supplies the lift. |
| B | `ex-cohen-presentation-singular-hypersurface` | `ex` | Present a complete equicharacteristic singular local ring as a quotient of a formal power-series ring and identify the kernel. | provenance.statement: literature-derived example; provenance.proof: literature-derived; rationale: WL Lecture 25 and H615 April 13 use hypersurface quotients as the basic Cohen presentation. |
| B | `ex-coefficient-field-noncanonical-choice` | `ex` | Compare two coefficient-field embeddings in a complete local ring where the embedding is not canonical. | provenance.statement: literature-derived example; provenance.proof: ai-altered; rationale: H615 April 13 notes the existence theorem does not supply canonical choices. |

#### CA-15 additions — `zariski-topology-on-prime-spectra` and companion

| target | id | kind | focused statement | explicit provenance |
|---|---|---|---|---|
| A | `lem-zariski-closed-set-axioms` | `lem` | The sets \(V(I)\) contain \(V(0)=\operatorname{Spec}R\) and \(V(R)=\varnothing\), are closed under arbitrary intersections and finite unions, and therefore define a topology. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 1 §2 and TN §2; the CA-3 ideal identities verify each topology axiom. |
| A | `lem-every-zariski-closed-set-has-a-radical-defining-ideal` | `lem` | Every Zariski-closed subset has the unique largest defining ideal \(\bigcap_{\mathfrak p\in Z}\mathfrak p\), which is radical. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 1 §2; vanishing sets detect radicals, so the ideal is unique among radical defining ideals. |
| A | `lem-distinguished-opens-cover-every-open` | `lem` | If \(U=\operatorname{Spec}R\setminus V(I)\), then \(U=\bigcup_{f\in I}D(f)\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 1 §2 and BU §6; a prime fails to contain \(I\) exactly when it omits some member. |
| A | `lem-distinguished-open-refinement-at-a-point` | `lem` | If \(\mathfrak p\in U\) for a Zariski-open \(U\), some \(f\notin\mathfrak p\) has \(\mathfrak p\in D(f)\subseteq U\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 1 §2; choose \(f\) from the defining ideal but outside \(\mathfrak p\). |
| A | `cor-distinguished-opens-are-closed-under-finite-intersections` | `cor` | The distinguished-open basis is closed under finite intersections because \(D(f)\cap D(g)=D(fg)\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 1 §2; use the CA-3 prime-membership identity. |
| A | `lem-spectrum-map-continuity-on-closed-sets` | `lem` | For \(\varphi:R\to A\), the preimage of \(V(I)\) is \(V(IA)\), hence contraction on spectra is continuous. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 1 §3 and BM Ch. 1; CA-3 supplies the algebraic preimage formula. |
| A | `cor-spectrum-is-a-contravariant-topological-functor` | `cor` | Identity and composition contraction maps are continuous, so \(\operatorname{Spec}\) is a contravariant functor to topological spaces. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 1 §3; combine functoriality from CA-3 with continuity. |
| A | `lem-quotient-spectrum-map-is-closed` | `lem` | The quotient-spectrum bijection sends \(V_{R/I}(J/I)\) to \(V_R(J)\), so it is a homeomorphism onto \(V_R(I)\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 1 §3 and BU §6; matching all closed sets proves the subspace homeomorphism. |
| A | `lem-localisation-spectrum-map-homeomorphism-onto-image` | `lem` | The localization-spectrum bijection is a homeomorphism onto the subspace of primes disjoint from \(S\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 2 and BU §6; localized vanishing sets correspond to intersections of ambient closed sets with the image. |
| A | `cor-principal-localisation-spectrum-is-distinguished-open` | `cor` | \(\operatorname{Spec}R_f\to\operatorname{Spec}R\) is a homeomorphism onto \(D(f)\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 2; primes disjoint from powers of \(f\) are precisely primes omitting \(f\). |
| A | `lem-spectrum-compactness-open-cover-to-unit-ideal` | `lem` | A cover of \(\operatorname{Spec}R\) by distinguished opens \(D(f_i)\) means the ideal generated by all \(f_i\) is the unit ideal. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 1 §2 and BM Ch. 1; otherwise a maximal ideal containing all \(f_i\) is uncovered. |
| A | `lem-spectrum-compactness-unit-expression-finite-subcover` | `lem` | A finite expression \(1=\sum_{i\in F}a_if_i\) yields a finite distinguished subcover. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 1 §2; no prime can contain all finitely many \(f_i\). |
| A | `cor-every-distinguished-open-is-compact` | `cor` | Every \(D(f)\) is compact. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 2 and BU §6; identify it with \(\operatorname{Spec}R_f\) and apply spectrum compactness. |
| A | `lem-closure-of-a-point-is-its-vanishing-set` | `lem` | The closure of \(\{\mathfrak p\}\) is \(V(\mathfrak p)\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 1 §4 and TN §3; a closed set contains the point iff its defining ideal lies in \(\mathfrak p\). |
| A | `cor-specialisation-order-is-prime-inclusion` | `cor` | \(\mathfrak q\) is a specialization of \(\mathfrak p\) iff \(\mathfrak p\subseteq\mathfrak q\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 1 §4; read membership in \(V(\mathfrak p)\). |
| A | `cor-spectrum-is-t-zero` | `cor` | Every prime spectrum is \(T_0\): distinct primes have distinct point closures. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: TN §3; equality of \(V(\mathfrak p)\) and \(V(\mathfrak q)\) forces equality of the radical prime ideals. |
| A | `cor-closed-points-of-spectrum-are-maximal-ideals` | `cor` | A point of \(\operatorname{Spec}R\) is closed iff its prime ideal is maximal. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 1 §4; \(V(\mathfrak p)=\{\mathfrak p\}\) exactly when no larger prime exists. |
| A | `lem-irreducible-vanishing-set-iff-radical-prime` | `lem` | A nonempty \(V(I)\) is irreducible iff \(\sqrt I\) is prime. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 1 §4 and TN §3; decomposing into \(V(J)\cup V(K)=V(JK)\) translates reducibility to failed primality. |
| A | `cor-spectrum-irreducible-iff-reduction-is-a-domain` | `cor` | \(\operatorname{Spec}R\) is irreducible iff the nilradical is prime, equivalently iff \(R_{\mathrm{red}}\) is a domain. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 1 §§4--5; specialize the preceding lemma to \(I=(0)\). |
| A | `lem-generic-point-of-an-irreducible-closed-set` | `lem` | If \(V(\mathfrak p)\) is irreducible, \(\mathfrak p\) is its generic point. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: TN §3 and H20 Ch. 1 §4; its closure is exactly the closed set. |
| A | `lem-generic-points-unique-in-spectra` | `lem` | An irreducible closed subset of a spectrum has a unique generic point. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 1 §4; uniqueness follows from the \(T_0\) property/equality of point closures. |
| A | `lem-irreducible-components-correspond-to-minimal-primes` | `lem` | The irreducible components of \(\operatorname{Spec}R\) are exactly the sets \(V(\mathfrak p)\) for minimal primes \(\mathfrak p\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 1 §4 and BU §6; maximal irreducible closed sets reverse to minimal prime defining ideals. |
| A | `cor-noetherian-spectrum-has-finitely-many-irreducible-components` | `cor` | A Noetherian ring has a spectrum with finitely many irreducible components. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Chs. 1 and 8; the ring has finitely many minimal primes. |
| A | `lem-noetherian-space-open-ascending-chain-condition` | `lem` | DCC on closed subsets is equivalent to ACC on open subsets. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: TN §8.1 and H20 Ch. 1; complement reverses inclusions. |
| A | `lem-noetherian-space-every-open-compact` | `lem` | Every open subset of a Noetherian topological space is compact. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: TN §8.1; a maximal open having a finite subcover absorbs one more member unless it is the whole open. |
| A | `lem-noetherian-space-finite-irreducible-decomposition` | `lem` | Every nonempty closed subset of a Noetherian space is a finite union of irreducible closed subsets. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: TN §8.1; a minimal counterexample would split into two strictly smaller closed counterexamples. |
| A | `lem-noetherian-ring-ideal-chains-give-closed-set-chains` | `lem` | An ascending chain of radical ideals corresponds to a descending chain of Zariski-closed subsets. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 1 and Ch. 5; \(V\) reverses inclusion and detects radicals. |
| A | `cor-noetherian-ring-spectrum-noetherian` | `cor` | The spectrum of a Noetherian ring is a Noetherian topological space. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 1; closed-set chains stabilize because their radical defining ideals do. |
| A | `lem-clopen-subset-gives-idempotent-decomposition` | `lem` | If \(\operatorname{Spec}R=V(I)\sqcup V(J)\), then \(I+J=R\), \(IJ\) is nilpotent, and a power/CRT construction yields an idempotent defining the two pieces. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 1 and BU §6; nilpotence of the product permits replacing by comaximal powers before CRT. |
| A | `lem-idempotent-gives-clopen-spectrum-partition` | `lem` | An idempotent \(e\) gives the clopen partition \(D(e)=V(1-e)\) and \(D(1-e)=V(e)\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 1 §6; every prime contains exactly one of \(e,1-e\). |
| A | `cor-spectrum-connected-iff-no-nontrivial-idempotents` | `cor` | \(\operatorname{Spec}R\) is connected iff \(R\) has no idempotents other than zero and one. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 1 §6; combine the two idempotent/clopen directions. |
| A | `lem-support-is-specialisation-closed` | `lem` | The support of any module is closed upward under prime inclusion. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: H20 Ch. 2 §6; an element annihilator contained in \(\mathfrak p\) remains contained in every larger prime. |
| A | `lem-finite-module-support-closed-by-annihilator` | `lem` | For a finite module, \(\operatorname{Supp}M=V(\operatorname{Ann}M)\), hence support is closed. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 2 §6; use finitely many generators to combine their annihilator conditions. |
| A | `lem-affine-jacobson-closed-points-meet-every-nonempty-closed-set` | `lem` | In a finite-type algebra over a field, every nonempty closed subset contains a maximal ideal/closed point. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 4 and BM Ch. 1; a proper defining radical ideal lies in a maximal ideal. |
| A | `cor-affine-closed-points-are-dense` | `cor` | Closed points are dense in the spectrum of a finite-type algebra over a field. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: H20 Ch. 4; every nonempty open in each irreducible closed piece meets a maximal ideal by the Jacobson property. |
| B | `ex-distinguished-open-finite-subcover-from-unit-expression` | `ex` | Convert an explicit unit-ideal identity into a finite cover of a spectrum by distinguished opens. | provenance.statement: literature-derived exercise; provenance.proof: literature-derived; rationale: H20 Ch. 1 §2; it instantiates compactness constructively. |
| B | `ex-specialisation-poset-of-a-small-spectrum` | `ex` | Draw the specialization order and point closures for a finite spectrum with one generic and several closed points. | provenance.statement: literature-derived exercise; provenance.proof: literature-derived; rationale: TN §3; prime inclusion gives the complete calculation. |
| B | `ex-irreducible-but-not-single-closed-point` | `ex` | Show that \(\operatorname{Spec}\mathbb Z\) is irreducible with generic point \((0)\) although its closed points are the nonzero primes. | provenance.statement: literature-derived standard example; provenance.proof: literature-derived; rationale: H20 Ch. 1 §4; reduction is a domain and point closures are explicit. |
| B | `ex-noetherian-spectrum-from-a-nonnoetherian-ring` | `ex` | Give a non-Noetherian valuation domain with only two prime ideals, so its spectrum is Noetherian. | provenance.statement: literature-derived standard counterexample; provenance.proof: literature-derived; rationale: valuation treatments distinguish the converse of “Noetherian ring implies Noetherian spectrum.” |
| B | `ex-idempotent-clopen-product-ring` | `ex` | Compute the two clopen pieces of \(\operatorname{Spec}(R\times S)\) from the coordinate idempotents. | provenance.statement: literature-derived exercise; provenance.proof: literature-derived; rationale: BU §6; it makes the idempotent correspondence explicit. |
| B | `ex-support-specialisation-closed-not-closed` | `ex` | Compute an infinitely generated module whose support is specialization-closed but not Zariski closed. | provenance.statement: literature-derived standard example; provenance.proof: ai-altered; rationale: H20 Ch. 2 §6; an infinite direct sum of residue modules supplies the distinction. |

#### CA-16 additions — `koszul-complexes-and-regular-sequences` and companion

| target | id | kind | focused statement | explicit provenance |
|---|---|---|---|---|
| A | `lem-exterior-algebra-basis-monomials` | `lem` | For a free module with ordered basis \(e_1,\ldots,e_n\), the wedges \(e_{i_1}\wedge\cdots\wedge e_{i_p}\) with increasing indices form a basis of \(\bigwedge^pF\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: RG5 §5.1; the alternating quotient rewrites every tensor and kills repetitions. |
| A | `lem-exterior-multiplication-koszul-sign-rule` | `lem` | Exterior multiplication by basis vectors obeys the anticommutation signs needed for the Koszul differential formula. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: RG5 §5.1; swapping adjacent wedge factors changes sign, including characteristic two via the alternating relation. |
| A | `lem-koszul-differential-coordinate-formula` | `lem` | On a basis wedge, the Koszul differential is \(\sum_j(-1)^{j-1}x_{i_j}\) times the wedge with \(e_{i_j}\) deleted. | provenance.statement: literature-derived; provenance.proof: not-applicable; rationale: RG5 §5.1 and Stacks More on Algebra §15; this fixes signs for all later chain calculations. |
| A | `lem-koszul-differential-square-pairwise-cancellation` | `lem` | In \(d^2\), deleting indices \(i,j\) in the two possible orders gives equal coefficients with opposite signs, so all terms cancel. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: RG5 §5.1; this is the explicit proof that the coordinate formula defines a complex. |
| A | `cor-empty-koszul-complex-is-the-coefficient-module` | `cor` | The Koszul complex of the empty sequence is \(M\) in degree zero and zero elsewhere. | provenance.statement: literature-derived; provenance.proof: not-applicable; rationale: RG5 §5.1; the zeroth exterior power convention handles the boundary used in inductions. |
| A | `lem-one-element-koszul-complex` | `lem` | \(K(x;M)\) is the two-term complex \(0\to M\xrightarrow{x}M\to0\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: RG5 §5.1; only exterior degrees one and zero are nonzero. |
| A | `cor-one-element-koszul-homology` | `cor` | \(H_0(K(x;M))=M/xM\), \(H_1(K(x;M))=(0:_Mx)\), and all other homology vanishes. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: RG5 §5.1; compute cokernel and kernel of multiplication by \(x\). |
| A | `lem-koszul-complex-concatenation-tensor-isomorphism` | `lem` | There is a signed chain isomorphism \(K(\mathbf x,\mathbf y;M)\cong K(\mathbf x;R)\otimes_RK(\mathbf y;M)\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: RG5 §5.1; exterior algebra of a direct sum is the graded tensor product and its differential is the total differential. |
| A | `lem-koszul-append-one-element-mapping-cone-identification` | `lem` | Appending \(y\) identifies \(K(\mathbf x,y;M)\) with the mapping cone of multiplication by \(y\) on \(K(\mathbf x;M)\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: RG5 §5.1 and Stacks More on Algebra §15; split wedges according as they contain the last basis vector and check signs. |
| A | `lem-koszul-mapping-cone-homology-exact-sequence` | `lem` | The mapping-cone short exact sequence yields the long exact sequence relating Koszul homology before and after appending one element. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: RG5 §5.1; the long exact homology sequence is cited from homological algebra. |
| A | `lem-koszul-generator-contraction-homotopy` | `lem` | Wedge multiplication/contraction by the \(i\)-th basis vector gives a homotopy between multiplication by \(x_i\) and zero on the Koszul complex. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: RG5 §5.1; the graded anticommutator with the differential equals \(x_i\) times the identity. |
| A | `cor-sequence-ideal-annihilates-koszul-homology` | `cor` | The ideal \((\mathbf x)\) annihilates every positive and zeroth Koszul homology module. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: RG5 §5.1; each generator acts null-homotopically. |
| A | `cor-koszul-homology-supported-on-sequence-vanishing-set` | `cor` | \(\operatorname{Supp}H_i(K(\mathbf x;M))\subseteq V(\mathbf x)\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: Stacks More on Algebra §15; an annihilated module has support inside the ideal's vanishing set. |
| A | `lem-koszul-complex-localises-termwise` | `lem` | Localization gives a natural chain isomorphism \(S^{-1}K(\mathbf x;M)\cong K(\mathbf x/1;S^{-1}M)\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: RG5 §5.1; finite exterior powers and differentials commute with localization. |
| A | `cor-koszul-homology-localises` | `cor` | \(S^{-1}H_i(K(\mathbf x;M))\cong H_i(K(\mathbf x/1;S^{-1}M))\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: RG5 §5.1; localization is exact and commutes with the complex. |
| A | `lem-koszul-complex-flat-base-change` | `lem` | For flat \(R\to A\), \(K(\mathbf x;M)\otimes_RA\cong K(\mathbf xA;M\otimes_RA)\) as complexes. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: RG5 §5.1 and Stacks More on Algebra §15; finite free exterior powers commute with base change. |
| A | `cor-koszul-homology-flat-base-change` | `cor` | Under flat base change, Koszul homology base-changes: \(H_i(K(\mathbf x;M))\otimes_RA\cong H_i(K(\mathbf xA;M\otimes_RA))\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: RG5 §5.1; flat tensoring commutes with homology. |
| A | `lem-koszul-generator-matrix-chain-map` | `lem` | A matrix expressing \(\mathbf y\) in terms of \(\mathbf x\) induces a chain map \(K(\mathbf y;M)\to K(\mathbf x;M)\) through the corresponding exterior map. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: Stacks More on Algebra §15; compatibility in degree one extends multiplicatively and commutes with contraction differentials. |
| A | `cor-koszul-complex-invariant-under-invertible-generator-change` | `cor` | An invertible change of generators gives an isomorphic Koszul complex. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: RG5 §5.1; the inverse matrix induces the inverse chain map. |
| A | `lem-regular-sequence-first-element-boundary` | `lem` | A nonempty \(M\)-regular sequence requires \(M\ne0\), its first element to be a non-zero-divisor on \(M\), and the final quotient to be nonzero under the adopted proper-ideal convention. | provenance.statement: literature-derived; provenance.proof: not-applicable; rationale: RG5 §5.2 and V28 §28.1; this records the unit/zero-module edge cases on which conventions differ. |
| A | `lem-regular-sequence-tail-on-quotient` | `lem` | \(x_1,\ldots,x_n\) is \(M\)-regular iff \(x_1\) is \(M\)-regular and \(x_2,\ldots,x_n\) is regular on \(M/x_1M\). | provenance.statement: literature-derived; provenance.proof: not-applicable; rationale: RG5 §5.2 and V28 §28.1; this recursive form is the induction interface. |
| A | `cor-initial-subsequences-of-a-regular-sequence-are-regular` | `cor` | Every initial subsequence of an \(M\)-regular sequence is \(M\)-regular. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: V28 §28.1; each required non-zero-divisor condition already occurs before the truncation. |
| A | `lem-regular-one-element-koszul-acyclicity` | `lem` | If \(x\) is a non-zero-divisor on \(M\), then \(K(x;M)\) has no positive homology and resolves \(M/xM\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: RG5 §5.2; use the explicit one-element homology. |
| A | `lem-regular-sequence-koszul-acyclicity-induction` | `lem` | If \(\mathbf x\) is regular and \(y\) is regular on \(M/(\mathbf x)M\), the cone long exact sequence kills positive homology after appending \(y\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: RG5 §5.2; induction uses that earlier positive homology vanishes and multiplication by \(y\) is injective on \(H_0\). |
| A | `cor-koszul-complex-resolves-a-regular-quotient` | `cor` | For a regular sequence \(\mathbf x\), \(K(\mathbf x;M)\) is a finite free resolution of \(M/(\mathbf x)M\) when \(M\) is finite free. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: RG5 §5.2; acyclicity and \(H_0=M/(\mathbf x)M\) give the resolution. |
| A | `lem-local-koszul-h-one-detects-first-regularity-failure` | `lem` | Over a local ring with \(\mathbf x\subseteq\mathfrak m\), nonvanishing of the annihilator at the first failed regularity stage produces nonzero \(H_1(K(\mathbf x;M))\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: RG5 §5.2 and Stacks More on Algebra §16; choose a shortest failed prefix and use the cone exact sequence plus Nakayama. |
| A | `lem-local-koszul-acyclicity-inductive-converse` | `lem` | If positive Koszul homology vanishes locally and \(M/(\mathbf x)M\ne0\), the cone sequence shows the last element is injective on the preceding quotient and the shorter Koszul complex is acyclic. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: RG5 §5.2; Nakayama excludes a hidden nonzero preceding homology module. |
| A | `cor-local-koszul-acyclicity-iff-regular-sequence` | `cor` | For a finite module over a Noetherian local ring and a sequence in the maximal ideal, vanishing of all positive Koszul homology is equivalent to regularity. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: RG5 §5.2 and Stacks More on Algebra §16; combine forward acyclicity with the converse induction. |
| A | `lem-regular-sequence-permutation-adjacent-swap` | `lem` | Over a Noetherian local ring, two adjacent members of a regular sequence may be swapped while preserving regularity. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: V28 §28.1 and Stacks More on Algebra §16; colon/intersection identities plus Nakayama prove the two non-zero-divisor conditions. |
| A | `cor-regular-sequences-permutable-local` | `cor` | Every permutation of a regular sequence in a Noetherian local ring is regular. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: V28 §28.1; adjacent transpositions generate the symmetric group. |
| A | `lem-positive-powers-of-a-regular-sequence-remain-regular` | `lem` | If \(x_1,\ldots,x_n\) is regular, then \(x_1^{a_1},\ldots,x_n^{a_n}\) is regular for all positive integers \(a_i\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: V28 §28.1; repeated short exact sequences and permutation reduce to the one-element power case. |
| A | `lem-koszul-regular-implies-h-one-regular` | `lem` | Vanishing of all positive Koszul homology implies vanishing of \(H_1\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: Stacks More on Algebra §16; this is the immediate implication among the recorded regularity notions. |
| A | `lem-h-one-regular-local-implies-koszul-regular` | `lem` | For a finite sequence in the maximal ideal of a Noetherian local ring, \(H_1=0\) forces all positive Koszul homology to vanish. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: Stacks More on Algebra §16 and RG5 §5.2; the generator homotopies and cone induction propagate the vanishing. |
| A | `cor-regularity-notions-coincide-local-finite` | `cor` | Classical regularity, Koszul regularity and \(H_1\)-regularity coincide for finite modules over Noetherian local rings with the sequence in the maximal ideal. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: Stacks More on Algebra §§16--17; assemble the preceding implications and the proper-ideal boundary. |
| A | `lem-koszul-resolution-minimality-maximal-ideal-sequence` | `lem` | If every sequence element lies in the maximal ideal, every Koszul differential has matrix entries in that ideal, so an acyclic Koszul complex is a minimal free resolution. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: RG5 §5.2; minimal-resolution criterion is cited from homological algebra. |
| A | `cor-complete-intersection-betti-numbers-binomial` | `cor` | A quotient by a regular sequence of length \(n\) has Koszul Betti numbers \(\binom ni\) over the ambient local ring. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: RG5 §5.2; the degree-\(i\) Koszul module is the \(i\)-th exterior power of rank \(n\). |
| B | `ex-empty-and-unit-koszul-boundaries` | `ex` | Compare the empty sequence, a zero element, and a unit in their Koszul complexes and regularity status. | provenance.statement: ai-generated boundary example; provenance.proof: literature-derived; rationale: RG5 §5.1 and V28 §28.1 expose these convention-sensitive cases. |
| B | `ex-koszul-d-square-sign-check-three-elements` | `ex` | Expand \(d^2(e_1\wedge e_2\wedge e_3)\) and pair all cancelling terms. | provenance.statement: literature-derived exercise; provenance.proof: literature-derived; rationale: RG5 §5.1; this audits the global sign convention. |
| B | `ex-koszul-homology-of-a-zero-divisor` | `ex` | Compute all homology of \(K(x;R)\) for a specified zero divisor and identify its support. | provenance.statement: literature-derived exercise; provenance.proof: literature-derived; rationale: RG5 §5.1; the one-element formula makes the calculation exact. |
| B | `ex-generator-change-koszul-isomorphism` | `ex` | Write the chain isomorphism induced by an elementary invertible change of a two-generator sequence. | provenance.statement: literature-derived exercise; provenance.proof: ai-altered; rationale: Stacks More on Algebra §15; wedge matrices give each degree map. |
| B | `ex-regular-sequence-powers-and-permutation` | `ex` | Starting with polynomial variables, raise them to powers, permute them, and verify regularity through quotient injections. | provenance.statement: literature-derived exercise; provenance.proof: literature-derived; rationale: V28 §28.1; it tests both closure results without invoking geometry. |
| B | `ex-koszul-resolution-betti-table-complete-intersection` | `ex` | Compute the full minimal Betti table of a codimension-three regular-sequence quotient. | provenance.statement: literature-derived exercise; provenance.proof: literature-derived; rationale: RG5 §5.2; exterior ranks give the table. |

#### CA-17 additions — `depth-and-cohen-macaulay-modules` and companion

| target | id | kind | focused statement | explicit provenance |
|---|---|---|---|---|
| A | `lem-depth-infinity-when-ideal-acts-surjectively` | `lem` | Under the adopted convention, if \(IM=M\) then \(\operatorname{depth}_I(M)=\infty\); for a finite module over a local ring and proper \(I\), Nakayama prevents this unless \(M=0\). | provenance.statement: literature-derived; provenance.proof: not-applicable; rationale: RG6 §6.1 and Stacks depth conventions; this records the degenerate case before finite formulas. |
| A | `lem-regular-element-exists-by-prime-avoidance` | `lem` | If an ideal \(I\) is contained in no associated prime of a nonzero finite module, some \(x\in I\) is a non-zero-divisor on the module. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: RG6 §6.1 and BU §§8--9; zero divisors are the finite union of associated primes, so prime avoidance applies. |
| A | `cor-depth-zero-iff-ideal-contained-in-an-associated-prime` | `cor` | For a nonzero finite module over a Noetherian ring, \(\operatorname{depth}_I(M)=0\) iff \(I\subseteq\mathfrak p\) for some \(\mathfrak p\in\operatorname{Ass}M\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: RG6 §6.1; combine the regular-element existence lemma with the zero-divisor union. |
| A | `lem-maximal-regular-sequence-stops-at-associated-prime` | `lem` | An \(M\)-regular sequence in \(I\) is maximal exactly when \(I\) is contained in an associated prime of the final quotient. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: RG6 §6.1; another regular element exists precisely when prime avoidance escapes all final associated primes. |
| A | `lem-maximal-regular-sequences-have-common-length-ext` | `lem` | Any two maximal \(M\)-regular sequences in \(I\) have the same length because both equal the first index with nonzero \(\operatorname{Ext}^i_R(R/I,M)\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: RG6 §6.1; Ext is cited from homological algebra and the quotient shift lemma below gives induction. |
| A | `lem-ext-depth-zero-identifies-annihilated-elements` | `lem` | \(\operatorname{Hom}_R(R/I,M)\cong(0:_MI)\), so its nonvanishing is exactly the depth-zero obstruction. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: RG6 §6.1; a homomorphism is determined by the image of one, which must be annihilated by \(I\). |
| A | `lem-ext-depth-shift-across-a-regular-element` | `lem` | If \(x\in I\) is \(M\)-regular, the long exact Ext sequence for \(0\to M\xrightarrow{x}M\to M/xM\to0\) shifts the first nonzero \(\operatorname{Ext}(R/I,-)\) degree down by one. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: RG6 §6.1; multiplication by \(x\) acts trivially on \(R/I\), making the connecting maps the needed isomorphisms in the vanishing range. |
| A | `cor-depth-as-first-nonzero-ext` | `cor` | For finite \(M\) over Noetherian \(R\), \(\operatorname{depth}_I(M)=\inf\{i:\operatorname{Ext}^i_R(R/I,M)\ne0\}\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: RG6 §6.1; induct on regular elements using the depth-zero and shift lemmas. |
| A | `lem-depth-radical-invariance-via-ext` | `lem` | If \(\sqrt I=\sqrt J\), then the first nonzero Ext degrees against \(R/I\) and \(R/J\) agree for a finite module. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: RG6 §6.1 and Huneke--Stone CA II; finite filtrations by powers compare the two quotient modules. |
| A | `cor-depth-depends-only-on-radical` | `cor` | \(\operatorname{depth}_I(M)=\operatorname{depth}_J(M)\) whenever \(\sqrt I=\sqrt J\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: RG6 §6.1; apply the Ext comparison. |
| A | `lem-depth-quotient-by-regular-element` | `lem` | If \(x\in I\) is \(M\)-regular, then \(\operatorname{depth}_I(M/xM)=\operatorname{depth}_I(M)-1\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: RG6 §6.1; use the Ext shift or append regular sequences. |
| A | `lem-depth-lemma-lower-bound-middle` | `lem` | In \(0\to L\to M\to N\to0\), \(\operatorname{depth}M\ge\min(\operatorname{depth}L,\operatorname{depth}N)\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: RG6 §6.1; vanishing ranges in the long exact Ext sequence give this inequality. |
| A | `lem-depth-lemma-lower-bound-left` | `lem` | In that sequence, \(\operatorname{depth}L\ge\min(\operatorname{depth}M,\operatorname{depth}N+1)\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: RG6 §6.1; inspect the adjacent Ext terms and their vanishing ranges. |
| A | `lem-depth-lemma-lower-bound-right` | `lem` | In that sequence, \(\operatorname{depth}N\ge\min(\operatorname{depth}L-1,\operatorname{depth}M)\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: RG6 §6.1; this is the third long-exact-sequence inequality. |
| A | `cor-depth-lemma-unequal-depth-equalities` | `cor` | When two module depths in a short exact sequence are unequal in the standard ranges, the third equals the smaller prescribed value. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: RG6 §6.1; combine pairs of the three inequalities. |
| A | `lem-koszul-depth-first-nonzero-cohomology` | `lem` | For generators of an ideal in a local ring, depth is the first degree of nonzero Koszul cohomology, equivalently sequence length minus the largest degree of nonzero Koszul homology under finite hypotheses. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: RG6 §6.1 and Stacks More on Algebra §16; self-duality of the finite free Koszul complex compares homology and cohomology. |
| A | `cor-depth-bounded-by-number-of-ideal-generators` | `cor` | If \(I\) is generated by \(n\) elements and \(M/IM\ne0\), then \(\operatorname{depth}_I(M)\le n\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: RG6 §6.1; the Koszul complex has no terms beyond degree \(n\). |
| A | `lem-depth-localisation-inequality` | `lem` | For \(\mathfrak p\in\operatorname{Supp}M\), localization of a regular sequence gives \(\operatorname{depth}_{R_\mathfrak p}M_\mathfrak p\ge\) the length of the subsequence that remains in \(\mathfrak p\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: RG6 §6.1; non-zero-divisors remain so after localization unless their image becomes a unit. |
| A | `lem-depth-at-a-prime-bounded-by-local-dimension` | `lem` | \(\operatorname{depth}_{R_\mathfrak p}M_\mathfrak p\le\dim\operatorname{Supp}_{R_\mathfrak p}M_\mathfrak p\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: RG6 §6.1; a regular sequence gives a strictly descending support-dimension chain via principal ideal theorem. |
| A | `cor-depth-of-a-finite-local-module-at-most-its-dimension` | `cor` | For a nonzero finite module over a Noetherian local ring, \(\operatorname{depth}M\le\dim M\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: RG6 §6.1; specialize the local bound at the maximal ideal. |
| A | `cor-zero-dimensional-local-modules-are-cohen-macaulay` | `cor` | Every nonzero finite module of dimension zero over a Noetherian local ring is Cohen--Macaulay. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: RG6 §6.2; both depth and dimension are zero. |
| A | `lem-regular-quotient-preserves-depth-dimension-gap` | `lem` | Quotienting a module by a regular element lowers both depth and dimension by one when the element is part of a parameter sequence. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: RG6 §6.2 and V28 §28.5; combine the depth quotient formula with the parameter dimension drop. |
| A | `cor-regular-quotient-cohen-macaulay-equivalence` | `cor` | Under that parameter/non-zero-divisor hypothesis, \(M\) is Cohen--Macaulay iff \(M/xM\) is. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: RG6 §6.2; equality of depth and dimension is preserved after subtracting one. |
| A | `lem-cohen-macaulay-parameter-first-element-regular` | `lem` | In a Cohen--Macaulay local module, the first element of any system of parameters avoids every associated prime and is regular. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: RG6 §6.2 and V28 §28.5; associated primes have full module dimension, while a parameter cuts dimension. |
| A | `lem-cohen-macaulay-parameter-sequence-induction` | `lem` | After quotienting by the first parameter, the remaining parameters form a system on a Cohen--Macaulay quotient, so induction makes the whole parameter sequence regular. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: V28 §28.5; use regular-quotient CM equivalence at each stage. |
| A | `cor-every-system-of-parameters-is-regular-in-a-cohen-macaulay-module` | `cor` | Every system of parameters of a nonzero finite Cohen--Macaulay local module is a regular sequence. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: RG6 §6.2 and V28 §28.5; apply the preceding induction. |
| A | `cor-one-regular-system-of-parameters-implies-cohen-macaulay` | `cor` | A finite local module with a regular system of parameters is Cohen--Macaulay. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: RG6 §6.2; its regular length equals module dimension, forcing maximal depth. |
| A | `lem-associated-primes-of-cohen-macaulay-module-have-full-dimension` | `lem` | Every associated prime of a Cohen--Macaulay local module has quotient dimension equal to the module dimension. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: RG6 §6.2; localize/compare depth zero at the associated prime with the global parameter chain. |
| A | `cor-cohen-macaulay-modules-have-no-embedded-associated-primes` | `cor` | A Cohen--Macaulay module has no embedded associated primes; all associated primes are minimal in its support. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: RG6 §6.2; a strict containment would lower the quotient dimension. |
| A | `lem-localisation-of-cohen-macaulay-module-depth-dimension-equality` | `lem` | Localizing a Cohen--Macaulay module at a support prime preserves equality of local depth and local dimension. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: Huneke--Stone CA II Thm. 22 and RG6 §6.2; localize a suitable part of a parameter sequence and use the dimension formula available in the stated catenary-free local form. |
| A | `cor-cohen-macaulayness-localises` | `cor` | Every localization of a finite Cohen--Macaulay module over the stated Noetherian local hypotheses is Cohen--Macaulay. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: RG6 §6.2 and Huneke--Stone CA II; apply the localized equality. |
| A | `lem-polynomial-extension-depth-increases-by-one` | `lem` | For a finite module \(M\), the variable \(x\) is regular on \(M[x]\) and \(M[x]/xM[x]\cong M\), so depth increases by one after localizing at a prime over the local maximal ideal and \(x\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: Huneke--Stone CA II Cor. 28; multiplication by an indeterminate is injective coefficientwise. |
| A | `cor-polynomial-extension-preserves-cohen-macaulayness` | `cor` | Polynomial extension of a Cohen--Macaulay ring is Cohen--Macaulay. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: Huneke--Stone CA II Cor. 28; localize and compare the one-step depth/dimension increments. |
| A | `lem-completion-preserves-regular-sequences` | `lem` | Faithfully flat completion carries a regular sequence on a finite module to a regular sequence on its completion. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: RG6 §6.2 and Huneke--Stone CA II Cor. 27; flat base change preserves injections and faithful flatness preserves proper quotients. |
| A | `lem-completion-reflects-depth` | `lem` | Faithfully flat local completion preserves the maximal length of regular sequences, hence preserves depth. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: Huneke--Stone CA II Cor. 27; forward preservation and faithful descent of zero-divisor/properness conditions give equality. |
| A | `cor-completion-preserves-cohen-macaulayness-two-directions` | `cor` | A Noetherian local ring or finite module is Cohen--Macaulay iff its completion is. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: RG6 §6.2; completion preserves both depth and dimension. |
| A | `lem-flat-local-depth-formula-regular-sequence-split` | `lem` | For a flat local homomorphism \((A,\mathfrak m)\to(B,\mathfrak n)\), an \(A\)-regular sequence followed by lifts of a regular sequence on the closed fibre \(B/\mathfrak mB\) is a \(B\)-regular sequence. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: Huneke--Stone CA II Thm. 24; flatness preserves the base injections and the quotient identifies the fibre step. |
| A | `cor-flat-local-depth-additivity` | `cor` | Under the stated Noetherian flat-local hypotheses, \(\operatorname{depth}B=\operatorname{depth}A+\operatorname{depth}(B/\mathfrak mB)\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: Huneke--Stone CA II Thm. 24; the split regular sequence gives one bound and Ext/Koszul base change gives the reverse. |
| A | `cor-flat-local-cohen-macaulay-fibre-criterion` | `cor` | Under the dimension formula hypotheses, the target is Cohen--Macaulay iff both base and closed fibre are Cohen--Macaulay. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: Huneke--Stone CA II Thm. 24; compare additive depth and dimension formulas. |
| B | `ex-depth-infinity-zero-module-convention` | `ex` | Evaluate all depth formulations on the zero module and on a module with \(IM=M\). | provenance.statement: ai-generated convention example; provenance.proof: not-applicable; rationale: RG6 §6.1 notes the infinity convention; this prevents false finite equalities. |
| B | `ex-depth-lemma-three-inequalities` | `ex` | Compute depths in three short exact sequences chosen so that each Depth Lemma inequality is sharp. | provenance.statement: literature-derived exercise; provenance.proof: literature-derived; rationale: RG6 §6.1 supplies standard quotient and direct-sum cases. |
| B | `ex-parameter-sequence-regular-in-a-hypersurface` | `ex` | Choose a system of parameters in a hypersurface local ring and verify regularity successively. | provenance.statement: literature-derived exercise; provenance.proof: literature-derived; rationale: RG6 §6.2 and V28 §28.5 use hypersurfaces as core CM examples. |
| B | `ex-parameter-sequence-fails-in-a-non-cm-ring` | `ex` | In a reducible local quotient, find a parameter whose first member is a zero divisor and compute the depth gap. | provenance.statement: literature-derived standard counterexample; provenance.proof: literature-derived; rationale: RG6 §6.2; associated primes expose the failure. |
| B | `ex-cohen-macaulay-associated-primes-unmixed` | `ex` | Compute the associated primes of a Cohen--Macaulay ring with zero divisors and verify that all have full quotient dimension. | provenance.statement: literature-derived exercise; provenance.proof: ai-altered; rationale: RG6 §6.2; a hypersurface product example is unmixed but non-domain. |
| B | `ex-completion-depth-computation` | `ex` | Compute depth before and after completion for a small local quotient using the same regular sequence. | provenance.statement: literature-derived exercise; provenance.proof: literature-derived; rationale: Huneke--Stone CA II Cor. 27; faithful flatness preserves the sequence. |

#### CA-18 additions — `regular-local-rings-and-homological-dimension` and companion

| target | id | kind | focused statement | explicit provenance |
|---|---|---|---|---|
| A | `lem-embedding-dimension-is-minimal-maximal-ideal-generator-number` | `lem` | For Noetherian local \((R,\mathfrak m,k)\), \(\operatorname{edim}R=\dim_k\mathfrak m/\mathfrak m^2=\mu_R(\mathfrak m)\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: RG5 §5.2 and WL Lecture 25; apply the local minimal-generator criterion from CA-2. |
| A | `lem-dimension-embedding-dimension-inequality-via-height` | `lem` | Since \(\mathfrak m\) is generated by \(\operatorname{edim}R\) elements, Krull's height theorem gives \(\dim R\le\operatorname{edim}R\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: RG5 §5.2 and WL Lecture 25; this is the exact dependency behind the inequality. |
| A | `lem-regular-system-of-parameters-equivalent-basis` | `lem` | A sequence is a regular system of parameters iff its residue classes form a basis of \(\mathfrak m/\mathfrak m^2\) and its length is \(\dim R\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: RG5 §5.2; Nakayama identifies minimal generators and regularity is equality of dimension and embedding dimension. |
| A | `cor-regular-local-maximal-ideal-generated-by-parameters` | `cor` | In a regular local ring, every lift of a basis of \(\mathfrak m/\mathfrak m^2\) is a system of parameters generating \(\mathfrak m\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: WL Lecture 25; basis lifting and Nakayama give generation, while length equals dimension. |
| A | `lem-associated-graded-polynomial-surjection` | `lem` | Lifts \(x_1,\ldots,x_e\) of a basis of \(\mathfrak m/\mathfrak m^2\) define a surjective graded map \(k[X_1,\ldots,X_e]\twoheadrightarrow\operatorname{gr}_\mathfrak mR\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: WL Lecture 25 and RG5 §5.2; degree-one classes generate each \(\mathfrak m^n/\mathfrak m^{n+1}\). |
| A | `lem-regular-local-graded-surjection-has-zero-kernel` | `lem` | If \(e=\dim R\), the graded polynomial surjection has zero kernel. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: WL Lecture 25; a nonzero homogeneous kernel would lower the dimension of the associated graded quotient below \(e\), contradicting the Hilbert--Samuel dimension theorem. |
| A | `cor-associated-graded-of-regular-local-ring-polynomial` | `cor` | For a regular local ring, \(\operatorname{gr}_\mathfrak mR\cong k[X_1,\ldots,X_d]\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: RG5 §5.2 and WL Lecture 25; combine the surjection with kernel vanishing. |
| A | `cor-regular-local-hilbert-samuel-multiplicity-one` | `cor` | A regular local ring has maximal-ideal Hilbert--Samuel multiplicity one. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: WL Lecture 25; the associated graded polynomial ring has the standard binomial Hilbert function. |
| A | `lem-regular-local-parameter-is-nonzerodivisor` | `lem` | In a positive-dimensional regular local ring, a member of a regular system of parameters is a non-zero-divisor. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: RG5 §5.2 and RG6 §6.2; the associated graded polynomial ring makes its initial form a non-zero-divisor, which lifts to the filtered ring. |
| A | `lem-regular-local-quotient-by-parameter-is-regular` | `lem` | Quotienting a regular local ring by a member of a regular system of parameters gives a regular local ring of dimension and embedding dimension one less. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: RG5 §5.2; the remaining basis classes generate the quotient maximal ideal and principal ideal theorem gives dimension drop. |
| A | `lem-regular-local-domain-induction` | `lem` | A positive-dimensional regular local ring is a domain by induction through a regular parameter quotient, together with the separated maximal-adic filtration. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: RG5 §5.2 and Huneke--Stone CA II Ch. 1; initial forms in a polynomial domain prevent a product of nonzero elements from vanishing. |
| A | `cor-regular-local-ring-is-cohen-macaulay` | `cor` | A regular system of parameters is a regular sequence, so every regular local ring is Cohen--Macaulay. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: RG5 §5.2 and RG6 §6.2; repeatedly apply parameter regularity and quotient regularity. |
| A | `cor-one-dimensional-regular-local-domain-dvr` | `cor` | A one-dimensional regular local ring is a DVR because its maximal ideal is principal and the ring is a domain. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: RG5 §5.2 and JM §3; combine dimension-one regularity with the DVR characterization. |
| A | `lem-minimal-free-resolution-differentials-land-in-maximal-ideal` | `lem` | A finite free resolution over a local ring is minimal iff every differential has image in the maximal ideal times the preceding free module. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: RG5 §5.2 and Huneke--Stone CA II Ch. 1; a unit matrix entry splits a contractible summand, and absence of units prevents cancellation. |
| A | `lem-minimal-free-resolution-reduces-to-zero-differential` | `lem` | Tensoring a minimal free resolution with the residue field gives a graded vector space with zero differentials. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: Huneke--Stone CA II Ch. 1; every differential matrix entry lies in the maximal ideal. |
| A | `cor-betti-number-is-rank-in-minimal-resolution` | `cor` | The \(i\)-th Betti number equals the rank of the \(i\)-th free module in a minimal resolution and \(\dim_k\operatorname{Tor}_i^R(k,M)\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: Huneke--Stone CA II Ch. 1; the zero-differential residue complex computes Tor, owned by homological algebra. |
| A | `lem-minimal-free-resolutions-unique-up-to-chain-isomorphism` | `lem` | Minimal free resolutions of a finite module over a Noetherian local ring are isomorphic as complexes. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: Huneke--Stone CA II Ch. 1; lift the identity comparison maps and use Nakayama degreewise to show they are isomorphisms. |
| A | `cor-betti-numbers-well-defined` | `cor` | Betti numbers do not depend on the chosen minimal free resolution. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: Huneke--Stone CA II Ch. 1; use uniqueness and invariant free ranks. |
| A | `lem-projective-dimension-from-last-nonzero-betti-number` | `lem` | For a finite module over a local ring with finite projective dimension, that dimension is the largest index with nonzero Betti number. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: Huneke--Stone CA II Ch. 1; a minimal resolution cannot contain a zero free module followed by a nonzero one. |
| A | `lem-auslander-buchsbaum-base-case-free-module` | `lem` | The Auslander--Buchsbaum formula holds for projective dimension zero because a finite projective over a local ring is free and has the ring's depth. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: RG6 §6.1 and Huneke--Stone CA II Thm. 16; this is the induction base. |
| A | `lem-auslander-buchsbaum-first-syzygy-depth` | `lem` | If \(0\to K\to F\to M\to0\) is the first step of a minimal finite free resolution with positive projective dimension, the Depth Lemma gives \(\operatorname{depth}K=\operatorname{depth}M+1\) in the required range. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: RG6 §6.1; minimality and finite projective dimension exclude the exceptional depth equality. |
| A | `lem-auslander-buchsbaum-syzygy-projective-dimension` | `lem` | The first syzygy has projective dimension one less than the module. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: Huneke--Stone CA II Thm. 16; truncate the minimal resolution and use nonvanishing of its last Betti number. |
| A | `cor-auslander-buchsbaum-by-induction` | `cor` | If a nonzero finite module has finite projective dimension, \(\operatorname{pd}_RM+\operatorname{depth}_RM=\operatorname{depth}R\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: RG6 §6.1 and Huneke--Stone CA II Thm. 16; combine the base case and the two first-syzygy lemmas. |
| A | `lem-regular-local-residue-field-koszul-resolution` | `lem` | A regular system of parameters in a regular local ring gives a Koszul free resolution of the residue field of length \(d\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: RG5 §5.2; regularity of the parameter sequence gives acyclicity and its quotient is the residue field. |
| A | `cor-regular-local-residue-field-projective-dimension-dimension` | `cor` | In a \(d\)-dimensional regular local ring, \(\operatorname{pd}_Rk=d\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: RG5 §5.2; the Koszul resolution gives at most \(d\), and its nonzero top Betti number gives equality. |
| A | `lem-finite-residue-field-projective-dimension-forces-depth-equals-dimension` | `lem` | If the residue field has finite projective dimension, Auslander--Buchsbaum and the nonvanishing of its top Tor/Koszul data force \(\operatorname{depth}R=\dim R\) and the maximal ideal generator count to equal that dimension. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: RG5 §5.2 and Huneke--Stone CA II Ch. 1; this is the hard converse bridge in Auslander--Buchsbaum--Serre. |
| A | `cor-auslander-buchsbaum-serre-local-equivalences` | `cor` | A Noetherian local ring is regular iff its residue field has finite projective dimension iff every finite module has finite projective dimension. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: RG5 §5.2 and Huneke--Stone CA II Ch. 1; Koszul resolves the residue field in the forward direction and the converse bridge handles the reverse. |
| A | `cor-regular-local-global-dimension-equals-dimension` | `cor` | The global dimension of a regular local ring equals its Krull dimension. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: RG5 §5.2; the residue field supplies the lower bound and the regularity criterion/syzygy theorem supplies the upper bound. |
| A | `lem-localisation-of-regular-local-ring-embedding-bound` | `lem` | If \(R\) is regular local and \(\mathfrak p\) prime, the localized maximal ideal \(\mathfrak pR_\mathfrak p\) can be generated by at most \(\operatorname{ht}\mathfrak p\) elements. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: Huneke--Stone CA II and Mustaţă Ch. 12; localize an adapted part of a regular system/finite resolution and apply the height bound. |
| A | `cor-localisations-of-regular-local-rings-are-regular` | `cor` | Every prime localization of a regular local ring is regular. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: Mustaţă Ch. 12; dimension is height and the preceding generator bound combines with the reverse height inequality. |
| A | `lem-polynomial-local-regularity-fibre-step` | `lem` | Localizing \(R[x]\) at a prime over a regular localization of \(R\), the closed fibre is a localization of a polynomial ring over a field and hence regular. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: Huneke--Stone CA II; this is the fibre input to regularity of polynomial extensions. |
| A | `cor-polynomial-extension-of-a-regular-ring-is-regular` | `cor` | A polynomial ring over a regular Noetherian ring is regular. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: Mustaţă Ch. 12 and Huneke--Stone CA II; apply the flat-local regularity criterion at every prime. |
| A | `lem-completion-preserves-embedding-dimension` | `lem` | Maximal-adic completion preserves \(\mathfrak m/\mathfrak m^2\) and hence embedding dimension. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: WL Lecture 25; finite-level completion quotients identify the cotangent spaces. |
| A | `cor-completion-preserves-regularity-two-directions` | `cor` | A Noetherian local ring is regular iff its completion is regular. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: WL Lecture 25 and Mustaţă Ch. 12; completion preserves both Krull dimension and embedding dimension. |
| A | `lem-regular-local-height-one-localisations-are-dvrs` | `lem` | Every height-one localization of a regular local ring is a DVR. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: Mustaţă Ch. 12; localization is one-dimensional regular local, then CA-8 applies. |
| A | `cor-regular-local-ring-satisfies-r-one` | `cor` | A regular local ring is regular in codimension one, hence satisfies Serre's \((R_1)\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: Mustaţă Ch. 12; all height-at-most-one localizations are fields or DVRs. |
| A | `cor-regular-local-ring-satisfies-s-two` | `cor` | A regular local ring satisfies \((S_2)\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: RG6 §6.2 and Mustaţă Ch. 12; regular local rings are Cohen--Macaulay, so local depth equals dimension and is at least the required minimum. |
| A | `lem-normal-domain-implies-r-one` | `lem` | A Noetherian normal domain has DVR localizations at height-one primes and therefore satisfies \((R_1)\). | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: Altman--Kleiman Thm. 23.20, Stacks §10.157, and JM §5; apply the height-one normal-local characterization. |
| A | `lem-normal-domain-implies-s-two` | `lem` | A Noetherian normal domain has depth at least two at every prime of height at least two. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: Altman--Kleiman Thm. 23.20 and Stacks §10.157; if depth were at most one, the sourced associated-prime/colon construction produces a fraction integral over but not in the domain. |
| A | `lem-r-one-s-two-intersection-of-height-one-localisations` | `lem` | A Noetherian domain satisfying \((S_2)\) equals the intersection of its height-one localizations inside its fraction field. | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: Altman--Kleiman Thm. 23.20 and Stacks §10.157; primary decomposition of a principal denominator ideal and absence of embedded primes reduce membership to height one. |
| A | `lem-r-one-s-two-integral-element-membership` | `lem` | If the height-one localizations are DVRs, every fraction integral over the domain lies in each of them and hence, by the intersection lemma, in the domain. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: Altman--Kleiman Thm. 23.20 and Stacks §10.157; DVRs are integrally closed. |
| A | `cor-serre-normality-criterion-two-directions` | `cor` | A Noetherian domain is normal iff it satisfies \((R_1)\) and \((S_2)\). | provenance.statement: literature-derived; provenance.proof: ai-altered; rationale: Altman--Kleiman Thm. 23.20 and Stacks §10.157; the four preceding lemmas provide the two implications. |
| A | `cor-regular-local-rings-are-normal-via-serre` | `cor` | Every regular local ring is normal. | provenance.statement: literature-derived; provenance.proof: literature-derived; rationale: Mustaţă Ch. 12; regular local rings satisfy \((R_1)\) and \((S_2)\), then Serre's criterion applies. |
| B | `ex-embedding-dimension-versus-dimension-node` | `ex` | Compute dimension and embedding dimension at a nodal plane-curve local ring and identify singularity by strict inequality. | provenance.statement: literature-derived exercise; provenance.proof: literature-derived; rationale: WL Lecture 25 and RG5 §5.2 use plane curves for the basic test. |
| B | `ex-associated-graded-polynomial-map-singular-kernel` | `ex` | For a singular local quotient, compute the kernel of the polynomial surjection to its associated graded ring. | provenance.statement: literature-derived exercise; provenance.proof: ai-altered; rationale: WL Lecture 25; an initial defining equation witnesses nonregularity. |
| B | `ex-minimal-resolution-unit-cancellation` | `ex` | Remove a contractible summand from a nonminimal free resolution by pivoting on a unit differential entry. | provenance.statement: literature-derived exercise; provenance.proof: literature-derived; rationale: Huneke--Stone CA II Ch. 1; it demonstrates the minimality criterion. |
| B | `ex-betti-numbers-residue-field-regular-ring` | `ex` | Compute residue-field Betti numbers over a three-dimensional regular local ring from its Koszul resolution. | provenance.statement: literature-derived exercise; provenance.proof: literature-derived; rationale: RG5 §5.2; exterior ranks give \(1,3,3,1\). |
| B | `ex-auslander-buchsbaum-first-syzygy` | `ex` | Verify the Auslander--Buchsbaum equality for a quotient of finite projective dimension and its first syzygy. | provenance.statement: literature-derived exercise; provenance.proof: ai-altered; rationale: RG6 §6.1; it audits the induction step numerically. |
| B | `ex-completion-regularity-invariance` | `ex` | Compare a regular local ring with its formal-power-series completion and verify dimension and embedding dimension separately. | provenance.statement: literature-derived exercise; provenance.proof: literature-derived; rationale: WL Lecture 25; the cotangent-space and dimension identifications are explicit. |

### 10.5 Enrichment report

#### Verified measurements

The dispatch's two baseline numbers are correct, not merely close.  Before
this amendment the file contained **443 distinct proposed item ids** and the
§8 harvest contained **421 literal `included` dispositions**, so the verified
ratio was \(443/421=1.052257\ldots\), or **1.05×**.  The harvest was written as
499 grouped bullet records, which explains why counting bullets rather than
individual dispositions gives a different denominator.

This pass adds **691 items**: **580 A-page definitions/results/proof lemmas**
and **111 B-page examples, counterexamples and finite verification
exercises**.  The file now contains **1,134 distinct proposed ids**, with no
duplicate id.  The newly acquired ranges add **129 included source-heading
dispositions**, for an expanded total of **550**.  The honest post-widening
decomposition ratio is therefore \(1134/550=2.061818\ldots\), or **2.06×**.
For the separate question “how much was the original 421-heading harvest
decomposed?”, the answer is \(1134/421=2.693587\ldots\), or **2.69×**.  Both
figures are reported because using the old denominator after the mandatory
source acquisition would overstate the track-wide density.

The source-host measurement in the brief was slightly wrong for the file as
written: normalizing the explicit pre-enrichment URLs gives **six**, not
seven, distinct hostnames.  The additional full texts raise that auditable
count to **thirteen** hostnames and, more importantly, §10.2 verifies at least
two substantive full treatments for every pair.  A title page, contents-only
record or inaccessible commercial scan was not counted.

#### Per-pair additions and page-ceiling audit

The A/B totals below combine the stable original rows with the added rows.
The largest A page is CA-18 at exactly 60; CA-13 has 59 and CA-9 has 58.  Thus
**no page split was required**, and every A page remains at or below the
60-item ceiling.

| pair | A added | B added | final A | final B | principal new decomposition/source contribution |
|---|---:|---:|---:|---:|---|
| CA-1 | 25 | 6 | 41 | 14 | ACC/induction, the four Hilbert-basis moves, Cohen's criterion, Artin--Tate bookkeeping, and formal-series Hilbert basis from H20 Ch. 5 and BU §2. |
| CA-2 | 30 | 7 | 51 | 16 | Fraction well-definedness, universal/tensor comparison, exactness halves, Hom localization, support and all Nakayama forms from H20 Chs. 2,7, TN §7 and BU §§4--5,11. |
| CA-3 | 28 | 6 | 44 | 12 | Radical identities, the separating-prime proof, quotient/localization prime correspondences, minimal primes and nilradical nilpotence from H20 Chs. 1,8 and BU §6. |
| CA-4 | 27 | 6 | 41 | 13 | Jordan--Hölder/additivity moves, Artinian field/nilpotence steps, CRT local factors and local length sums from H20 Ch. 9, TN §12 and BU §7. |
| CA-5 | 30 | 6 | 49 | 13 | Cyclic embeddings, exact-sequence/localization bounds for associated primes, prime avoidance, primary colon/localization lemmas and both uniqueness mechanisms from H20 Ch. 8 and BU §§8--10. |
| CA-6 | 27 | 6 | 43 | 13 | Finite-span integrality, transitivity/localization, the quotient-local proof of lying over, incomparability, one-step going up/down and dimension inequalities from H20 Ch. 3 and BU §§12--13,24. |
| CA-7 | 28 | 7 | 46 | 14 | Normalization substitutions over infinite and finite fields, all Zariski-lemma reductions, weak/strong Nullstellensatz and the three Rabinowitsch moves from H20 Ch. 4, TN §11 and BU §14. |
| CA-8 | 28 | 6 | 47 | 14 | Valuation divisibility/ideal cuts, DVR ideal classification and equivalences, height-one normal local proof, length, completion and digit expansion from JM §§2--5 and TN §13. |
| CA-9 | 32 | 6 | 58 | 15 | Fractional-ideal operations, local-principal/invertible equivalence, valuation-vector factorization, two generators, divisor exactness and Steinitz classification from JM §§1,5--7 and H20 Ch. 12. |
| CA-10 | 31 | 6 | 47 | 13 | Localization/quotient chain bookkeeping, principal/height theorem induction, parameter selection and polynomial/affine dimension bounds from H20 Ch. 10, BU §§21--23 and WL Lecture 24. |
| CA-11 | 33 | 6 | 50 | 13 | Hilbert--Serre exact-sequence steps, associated graded/Rees finiteness, all three Artin--Rees moves, Krull intersection and Hilbert--Samuel differences/multiplicity from BU §§3,15,17, H20 Ch. 13 and R710. |
| CA-12 | 37 | 7 | 55 | 14 | Flat closure/local tests, equational and ideal criteria, faithful detection/contraction/descent, finite-flat local freeness and going down from H20 Chs. 6--7 and V25 §§25.1--25.6. |
| CA-13 | 38 | 6 | 59 | 13 | Compatible-tuple limits, Mittag--Leffler correction, completion kernel/completeness/exactness, tensor comparison, flatness, Noetherianity and invariant preservation from H20 Ch. 13, R710 and BU §19. |
| CA-14 | 33 | 6 | 46 | 12 | Bézout correction/convergence/uniqueness, simple-root equivalence, idempotent lifting, coefficient-field cases and power-series presentation/finite subring from R710, BU §20, H615 and WL Lecture 25. |
| CA-15 | 35 | 6 | 53 | 12 | Topology axioms, basis and compactness proof, quotient/localization homeomorphisms, specialization/generic points, irreducible components, Noetherian spaces and clopen idempotents from H20 Ch. 1, TN §§2--3 and BM Ch. 1. |
| CA-16 | 36 | 6 | 49 | 12 | Exterior signs, one-element/concatenated/cone Koszul complexes, generator homotopies, base change, acyclicity converse, permutation/powers and minimal Koszul resolutions from RG5 and V28 §§28.1--28.2. |
| CA-17 | 39 | 6 | 55 | 13 | Regular-element selection, Ext/Koszul depth characterizations, the three Depth Lemma inequalities, parameter regularity, unmixed associated primes, localization/completion and flat-local formulas from RG6 and V28 §28.5. |
| CA-18 | 43 | 6 | 60 | 14 | Cotangent/graded criteria, parameter quotients, minimal-resolution and Auslander--Buchsbaum steps, residue-field regularity, localization/completion and the four Serre-criterion moves from RG5, WL Lecture 25, Huneke--Stone and Altman--Kleiman/Stacks. |

#### Deliberate non-decomposition

The final 2.06× expanded ratio is not a quota shortfall to be filled.  The
following material was deliberately not turned into extra commutative-algebra
items:

- Ring localization, elementary modules, tensor products, projectives, module
  chain conditions, Ext, Tor, resolutions and general filtered-colimit
  machinery are already published or owned by abstract algebra, homological
  algebra or category theory.  This track cites them and adds only the
  commutative-algebra consequences.
- Affine/projective schemes, blowups, tangent-cone geometry, geometric flat
  families and scheme-theoretic complete intersections belong to algebraic
  geometry.  Only the underlying affine ring calculations were included.
- The \(\varprojlim^1\) obstruction and derived-limit theory require
  homological algebra; ordinary countable Mittag--Leffler exactness is enough
  here.
- Mixed-characteristic Cohen structure still lacks Cohen rings and the
  required formal-smoothness machinery.  It remains the explicit boundary
  remark rather than an unsupported theorem.  The equicharacteristic theorem
  was fully decomposed.
- Catenarity beyond the affine dimension formula, advanced unmixedness,
  reductions and mixed multiplicities, local cohomology, duality, canonical
  modules, Gorenstein theory and intersection theory need later machinery and
  are not load-bearing for these pages.
- Mustaţă's regular-local-UFD remark remains deferred until the sibling UFD
  page supplies the factoriality machinery already identified in §8.  It was
  not promoted merely to raise the count.
- Source headings that are genuinely atomic definitions or one-line
  convention choices remain single items.  Repeating an equivalent definition
  as several ids would be padding; convention differences are instead
  resolved once in §10.3.

Every added row contains `provenance.statement`, `provenance.proof`, and a
source/role rationale.  No added A item depends on a B item, no existing id was
renumbered, no neighbour's definition was re-minted, and no file outside this
track was changed by this pass.
