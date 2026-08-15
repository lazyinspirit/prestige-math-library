# Frontier 13, batch 1 — Beta scaffold notes

## Continuity checkpoint

- Owned artifacts: `research/frontier-13-batch-1.pages.json`, `research/frontier-13-batch-1.notes.md`, `research/frontier-13-batch-1.coverage.json`, and `research/frontier-13-batch-1.proof-contracts.json` only.
- Current substage: canonical-source harvest and dependency-provenance audit are in progress; the two A-page item graphs are designed but not yet serialized.
- Checks completed: the active-run resume and normative instructions were read; live page ids, orders, and `requires` edges were verified in `research/plan-spec.json`; the dispatched prose sections, current exemplar, prior-run output shapes, source treatments, and the principal published dependencies were opened on disk. The audit run is complete and does not conflict with this build batch.
- Open mathematical question: how far to carry the resultant without an illegal dependency on the later determinant page. The working resolution is to define the monic resultant through the fundamental theorem of symmetric polynomials and prove the root-product/common-root criterion, while explicitly deferring the Sylvester-determinant presentation.
- Exact next action: finish opening every remaining published dependency, collision-check the proposed ids, then serialize the four artifacts and run the coverage and live-plan gates.

## Result and split decision

The scaffold contains four pages and 84 items:

| order | page | kind | items |
|---:|---|:---:|---:|
| 58 | `symmetric-polynomials` | A | 26 |
| 59 | `symmetric-polynomials-examples` | B | 9 |
| 96 | `algebraic-extensions-degree-and-finite-fields` | A | 35 |
| 97 | `algebraic-extensions-degree-and-finite-fields-examples` | B | 14 |

No split is proposed. The A pages contain 26 and 35 items, well below the
owner's 60-item split threshold. The exact cut is also coherent: the first A
page owns symmetric-polynomial structure, Newton identities, discriminants,
and the monic resultant; the second owns finite extension degree, algebraicity,
prime subfields and Frobenius, finite fields, and the algebraic
constructibility application. If a later harvest grows the second page beyond
60 items, the natural adjudication remains the dispatch's proposed cut:
`algebraic-extensions-and-degree` through the compositum bound, followed by
`finite-fields-and-algebraic-constructibility` beginning with prime subfields.
That split is not needed on the present evidence.

There is no dependency in either direction between the two A pages. Every
dependency of an item on `symmetric-polynomials` stays within that page or the
declared closure of `splitting-fields`; every dependency of an item on
`algebraic-extensions-degree-and-finite-fields` stays within that page or the
declared closure of `splitting-fields` and
`linear-independence-bases-and-dimension`. All B-page items are leaves, and no
A-page item cites a B-page item.

## Proposed page summaries

### `symmetric-polynomials`

A splitting field presents a monic polynomial through its roots, and Vieta's
formulas connect those roots to its coefficients. Over a commutative
coefficient ring, a finite multivariate polynomial ring and the permutations of
its variables provide the setting for symmetric polynomials. The published
polynomial-root and formal-derivative results supply the repeated-root interface
used by discriminants.

The page defines elementary, monomial, power-sum, and complete homogeneous
symmetric polynomials. Lexicographic leading terms give both existence and
uniqueness in the fundamental theorem, after which Newton's identities compare
the standard generators. The Vandermonde square defines the discriminant and
detects repeated roots in every characteristic. A monic resultant is then
defined through its symmetric root product, giving the common-root criterion
and the signed resultant formula for the discriminant.

### `algebraic-extensions-degree-and-finite-fields`

An extension field is a vector space over its base, so its finite degree is the
size of a basis. The page proves the product-basis lemma and finite tower law,
then develops finite and finitely generated algebraic extensions, the field of
elements algebraic over the base, relative algebraic closure, transitivity of
algebraicity, and a degree bound for composita. The published simple-extension
theorem supplies minimal polynomials, quotient presentations, power bases, and
their degrees without duplication.

Prime subfields and the Frobenius endomorphism lead to finite fields: their
orders are prime powers, their multiplicative groups are cyclic, and the roots
of $x^{p^n}-x$ construct the unique field of each prime-power order. The page
then proves the subfield lattice, the factorization of $x^{q^n}-x$, existence of
irreducibles in every degree, and simplicity of finite-field extensions. It
ends with an explicitly algebraic notion of constructibility, its quadratic
tower description, the power-of-two degree obstruction, and the cube-root-of-two
counterexample.

## Richness and decomposition passes

The symmetric-polynomial landmark is not compressed into one omnibus theorem.
The orbit-sum basis, leading-partition lemma, leading monomials of products of
the elementary generators, constructive existence, algebraic independence, and
the combined existence-and-uniqueness theorem are separate items. The power-sum
thread contains the $E(-t)H(t)=1$ identity, free generation by complete
homogeneous polynomials, both regimes of Newton's identities, and the precise
factorial-unit corollary. Discriminants are built from the Vandermonde square,
and the monic resultant is added only after its coefficient-valued construction
can be discharged without determinants. The B page works both small-variable
algorithms and the characteristic-two failure.

The degree page similarly separates the product-basis lemma from the tower law,
and separates finite-implies-algebraic, finitely-generated-algebraic-implies-finite,
the algebraic-element subfield, and transitivity. The finite-field development
includes—not merely mentions—existence, uniqueness, Frobenius, cyclicity of the
unit group, the complete subfield lattice, the irreducible-factor description
of $x^{q^n}-x$, irreducibles in every degree, and the primitive-element
corollary for finite extensions. The B page works three nonprime finite fields,
their Frobenius and subfield behavior, two degree towers, and the standard false
identifications. No result was removed to meet a numerical target.

## Canonical-coverage harvest

The gated artifact is `research/frontier-13-batch-1.coverage.json`. Its 97
enumerated entries break down as follows. Counts include the explicit canonical
checks as well as each source's own headings; repeated backing of one scaffold
item is intentionally counted more than once.

| A page | harvested | included | inline | already published | deferred | out of scope |
|---|---:|---:|---:|---:|---:|---:|
| symmetric polynomials | 46 | 29 | 12 | 0 | 2 | 3 |
| algebraic extensions, degree, and finite fields | 51 | 32 | 3 | 6 | 6 | 4 |
| **total** | **97** | **61** | **15** | **6** | **8** | **7** |

The declines most likely to be challenged are these:

- The determinant formulas for the early power sums and the Sylvester-matrix
  presentation of the general resultant are deferred. They are alternate
  presentations rather than prerequisites for the retained results, and the
  determinant page is later than order 58 and outside the declared closure.
  The page still builds the monic resultant, root-product formula, common-root
  criterion, and discriminant-derivative identity.
- The infinite-basis form of the tower law is deferred. The published
  `def-dimension` deliberately defines dimension only in the finite-dimensional
  case, so the cardinal-valued statement requires cardinal dimension and
  cardinal arithmetic, not a locally omitted lemma. Every finite-degree theorem
  required by this page and its applications is included.
- The physical straightedge-and-compass equivalence is out of scope, while the
  algebraic closure-under-square-roots definition and its tower theorem are
  included. The omitted equivalence needs a coordinate-geometric model of line
  and circle constructions that the prerequisite closure does not contain.
- Regular-polygon constructibility is deferred to cyclotomic theory; general
  angle trisection is out of scope because it needs the geometric interface and
  trigonometry; squaring the circle is deferred because it needs the
  transcendence of $\pi$. These are three result-specific boundaries, not one
  repeated missing-prerequisite excuse.
- The algebraic closure of a finite field and its complete infinite subfield
  lattice are deferred. This scaffold constructs every individual finite field
  and its finite subfield lattice; constructing and proving algebraic closedness
  of their infinite union is distinct algebraic-closure machinery.

No decline is a definition or lemma needed to prove an included theorem.

## Source ledger and licensing

Exact headings and dispositions are in the coverage JSON. The ranges actually
read were:

| key | source and exact range | principal use |
|---|---|---|
| KC-SP | Keith Conrad, *Symmetric Polynomials*, complete 14-page note, Sections 1–5 and references, <https://kconrad.math.uconn.edu/blurbs/galoistheory/symmfunction.pdf> | lexicographic descent, its trap, algebraic independence and uniqueness, Newton identities |
| DG-7 | Darij Grinberg, *An Introduction to Algebraic Combinatorics*, Ch. 7 §§7.1–7.2 through the proof of Theorem 7.2.7, including Example 7.2.8 and Proposition 7.2.9, stopping before §7.3, <https://arxiv.org/pdf/2506.00738v1> | arbitrary-commutative-ring theorem, orbit-sum basis, $e/h/p/m$ conventions and generating series |
| JM-SP | J. S. Milne, *Fields and Galois Theory* v5.10, Prop. 4.35–Ex. 4.37 and Thm. 5.36 through the root-value paragraph of Rem. 5.37, <https://www.jmilne.org/math/CourseNotes/FT.pdf> | resultant/discriminant conventions and fixed-field form of the symmetric theorem |
| AK-IX | Anthony W. Knapp, *Basic Algebra*, digital 2nd ed., Ch. IX §§1, 3, 5 in full, printed pp. 453–457, 461–464, 468–474, <https://www.math.stonybrook.edu/~aknapp/download/b2-alg-inside.pdf> | extension degree, tower law, algebraicity, finite fields, algebraic constructibility |
| KC-FF | Keith Conrad, *Finite Fields*, §§1–2 and Appendix A in full, <https://kconrad.math.uconn.edu/blurbs/galoistheory/finitefields.pdf> | existence/uniqueness, Frobenius, cyclic unit group, subfields, irreducible factorization |
| JM-FF | J. S. Milne, *Fields and Galois Theory* v5.10, Props. 4.19–4.24 and Thm. 1.37 through consequence 1.41, <https://www.jmilne.org/math/CourseNotes/FT.pdf> | independent finite-field treatment, algebraic closures boundary, constructibility consequences |

The notes and scaffold paraphrase mathematical content and contain no copied
proof passages, figures, or external assets. Source URLs and exact locators are
retained for authoring and Alpha's step-6 re-opening; no claim that a source's
text has been relicensed is made.

## Convention decisions and corrections to the prose scaffolds

- The coefficient ring for the fundamental theorem is an arbitrary commutative
  ring. The leading coefficients used in the descent are monic, so zero
  divisors do not invalidate the leading-term cancellation.
- The library uses $e_k$ for elementary symmetric polynomials, $h_k$ for
  complete homogeneous polynomials, $p_k$ for power sums, and $m_\lambda$ for
  monomial symmetric polynomials. Milne's $p_i$ means elementary symmetric
  polynomials and is translated rather than copied.
- `research/plan-algebra-track.md` §II.3 currently says the hypothesis for
  power sums is “$\operatorname{char}R=0$ or $\operatorname{char}R>n$.” Replace
  that sentence with: “The exact ring hypothesis is that $n!\,1_R$ is a unit.
  For a field this is equivalent to characteristic zero or characteristic
  greater than $n$.” Characteristic zero alone does not make $n!$ invertible in
  a general commutative ring, as $\mathbb Z$ shows.
- The same section says that in characteristic two the discriminant repeated-root
  criterion degenerates and needs a hypothesis. Replace it with: “The
  discriminant vanishes exactly when the monic polynomial has a repeated root,
  in every characteristic. Characteristic two instead affects the later use of
  the discriminant square class to detect parity; it does not affect the
  repeated-root criterion.”
- Replace the prose demand for a general resultant and Sylvester matrix by the
  following present-page scope: “For monic $f$, define
  $\operatorname{Res}(f,g)$ as the coefficient expression of
  $\prod_{f(\alpha)=0}g(\alpha)$ supplied by the fundamental theorem; prove the
  root-product, common-root, and discriminant-derivative formulas. Defer the
  general leading-coefficient normalization and Sylvester determinant until
  determinants are in the declared closure.” This is a prerequisite correction,
  not a deletion of the resultant.
- The prose's assertion that no definition of algebraic extension exists is
  stale. `def-algebraic-and-transcendental-elements` already defines an
  algebraic extension as one whose every element is algebraic. The new scaffold
  cites that item and does not mint `def-algebraic-extension`.
- `def-dimension` is finite-only. Replace the infinite-case tower-law paragraph
  by: “Define $[K:F]$ when $K$ is finite-dimensional over $F$, and prove the
  tower law for finite extensions.” Cardinal-valued dimension and the infinite
  basis theorem are recorded as a later extension.
- Remove “primitive root modulo $p$” from the definition list. A separate
  concurrent page owns primitive-root terminology and is outside this page's
  closure. This page proves that $\mathbb F_q^\times$ is cyclic and calls a
  chosen cyclic generator a generator, which gives all finite-field machinery
  without an undeclared edge.
- Algebraic constructibility means membership in the smallest subfield of
  $\mathbb R$ closed under square roots of positive elements. The page does not
  claim equivalence with physical straightedge-and-compass constructions, and
  it states the power-of-two degree result only as a necessary condition.
- The finite-field notation $\mathbb F_{p^n}$ denotes the isomorphism class
  whose existence and uniqueness are proved. It is not $\mathbb Z/p^n\mathbb Z$.
  Uniqueness is up to an isomorphism over the prime field, not uniqueness of
  that isomorphism.
- The proof of cyclicity follows the published
  `cor-finite-subgroups-of-units-in-a-domain-are-cyclic`. That theorem's proof
  already combines the finite-abelian structure theorem with the root bound for
  $x^d-1$. Reusing it is cleaner than duplicating the same argument locally and
  directly answers the route choice in the dispatch.
- Ordinary numerals are used throughout. No proposed text applies a canonical
  embedding symbol to a natural number.

## Exact finite-field proof seams to preserve at authoring

The subfield-lattice proof must not jump from $d\mid n$ to containment. For the
converse it will prove the polynomial-composition divisibility
$x^{p^d}-x\mid x^{p^n}-x$ when $d\mid n$, then identify the roots inside
$\mathbb F_{p^n}$. Uniqueness follows because every subfield of order $p^d$ is
exactly that root set. The irreducible-existence corollary chooses a generator
of $\mathbb F_{q^n}^{\times}$; if its minimal polynomial had degree $d<n$, the
element would lie in the unique $q^d$-element subfield and could not have order
$q^n-1$. These details are already named in the item strategies/contracts and
must be expanded, not rediscovered, at step 5.

The constructibility tower may have a zero-length rational case. Any redundant
square-root adjunction is omitted; each remaining step is genuinely quadratic.
This keeps “quadratic tower” literal while allowing elements already present in
an earlier field.

## Applyable edits to `research/plan-algebra-track.md`

These are the exact step-4 prose edits. All anchors are in §II.3 or §II.4; page
ids, not stale quoted orders, identify them.

1. In §II.3.b, replace the exact text

   > **the $e_i$ are expressible in the $p_i$ if $n!$ is invertible in $R$**, and the sharp hypothesis is $\operatorname{char}R=0$ or $\operatorname{char}R>n$.

   with

   > **The $e_i$ are expressible in the $p_i$ if $n!\,1_R$ is invertible in $R$.** This is the exact ring hypothesis. If $R$ is a field, it is equivalent to $\operatorname{char}R=0$ or $\operatorname{char}R>n$.

2. In the §II.3.b FS paragraph, replace the exact text

   > the discriminant detects repeated roots in every characteristic (in characteristic $2$, $\Delta$ is a square and the criterion degenerates — the honest scoping is a hypothesis, and the published separability apparatus is the right neighbour to cite).

   with

   > the discriminant detects repeated roots in every characteristic. In characteristic $2$, the later square-class test for the parity of a permutation needs separate care, but $\Delta(f)=0$ if and only if $f$ has a repeated root remains valid without a characteristic hypothesis.

3. In the §II.3.b DEFS paragraph, replace the exact text

   > the **resultant** and the **Sylvester matrix**.

   with

   > the **monic resultant**, defined through the coefficient expression of the symmetric root product. The general leading-coefficient normalization and the Sylvester matrix are deferred until the determinant page is in the prerequisite closure.

4. In §II.3.b, replace this exact paragraph:

   > *Discriminant and resultant.* the **discriminant** $\Delta=\prod_{i<j}(\alpha_i-\alpha_j)^2$ is symmetric, hence a polynomial in the coefficients (landmark, and the first real payoff of the main theorem); $\Delta=0$ iff $f$ has a repeated root; the discriminant of the general cubic $x^3+px+q$ is $-4p^3-27q^2$; the **resultant** as $\det$ of the Sylvester matrix; $\operatorname{Res}(f,g)=0$ iff $f$ and $g$ have a common root in a splitting field, for $f,g$ monic (landmark); $\operatorname{Res}(f,g)=\prod_{i,j}(\alpha_i-\beta_j)$ — **the harvest found that no source it read proves the Sylvester-determinant-equals-root-product identity**, so AA-14 proves it (both sides are symmetric of the same multidegree in each root family, and agree on the generic case) or states only the vanishing criterion; the disposition is recorded rather than assumed; $\Delta(f)=(-1)^{n(n-1)/2}\operatorname{Res}(f,f')$ for monic $f$, with the sign convention stated and the published formal derivative cited.

   with this exact paragraph:

   > *Discriminant and monic resultant.* The **discriminant** $\Delta=\prod_{i<j}(\alpha_i-\alpha_j)^2$ is symmetric, hence a polynomial in the coefficients; $\Delta=0$ if and only if the monic polynomial has a repeated root, in every characteristic. For monic $f$, define $\operatorname{Res}(f,g)$ through the symmetric coefficient expression of $\prod_i g(\alpha_i)$. Prove $\operatorname{Res}(f,g)=\prod_i g(\alpha_i)$, the common-root criterion, and $\operatorname{Res}(f,f')=(-1)^{n(n-1)/2}\operatorname{Disc}(f)$. The general resultant, its symmetry under exchanging $f$ and $g$, and its Sylvester-determinant presentation are deferred until determinant machinery is available.

5. In §II.4.a, replace the exact opening sentence

   > Verified from disk 2026-08-13: **there is no degree of a field extension, no tower law, and no definition of an algebraic extension anywhere in the library.**

   with

   > Verified from disk for `frontier-13`: **there is no general degree of a field extension and no tower law in the library.** The published `def-algebraic-and-transcendental-elements` already defines an algebraic extension as an extension in which every element is algebraic, so this page cites that definition rather than minting a duplicate.

6. In the §II.4.b DEFS paragraph, replace the exact paragraph

   > **DEFS.** the **degree** $[K:F] := \dim_F K$ (`def-degree-of-a-field-extension`, free); **finite extension**; **algebraic extension** (`def-algebraic-extension`, free — with #F1's Remark); **finitely generated extension**; the **prime subfield**; a **finite field** and its order; **primitive root modulo $p$**.

   with

   > **DEFS.** the **degree** $[K:F]:=\dim_FK$ of a finite-dimensional extension and **finite extension** (`def-extension-degree-and-finite-extension`); **finitely generated extension**; **relative algebraic closure**; the **prime subfield**; a **finite field** and its order; and the **algebraically constructible real numbers**. Cite the published definition of algebraic extension. Do not define primitive roots here; prove instead that every finite field's multiplicative group is cyclic.

7. In the §II.4.b tower-law paragraph, replace the exact clause

   > with **both** the spanning and the independence halves as separate steps, and with the infinite case stated honestly: if either factor is infinite so is $[L:F]$, which is the form GA-1 uses when it takes an algebraic closure;

   with

   > with **both** the spanning and independence halves as separate steps. All displayed degrees are finite-dimensional. The cardinal-valued infinite-basis version is deferred because the published `def-dimension` does not define cardinal dimension;

8. In the §II.4.b finite-fields paragraph, replace the exact text

   > **$(\mathbb{Z}/p)^\times$ is cyclic, i.e. primitive roots modulo $p$ exist**, as the case $q=p$ — *the item NT-3 deferred, now discharged* (§II.1.b.5).

   with

   > The case $q=p$ proves that $(\mathbb Z/p)^\times$ is cyclic. This page calls a chosen element only a cyclic generator; primitive-root terminology and its number-theoretic development remain with the page that owns that definition.

The broad §AA-15 synopsis should also add the relative algebraic closure,
transitivity of algebraicity, the finite-field subfield lattice, Frobenius, and
cyclicity of $\mathbb F_q^\times$ to its retained result list. No edit to
`research/plan-algebra-track-expansion.md` is needed beyond the orchestrator's
eventual order refresh: its pre-splice order is explicitly stale, while the live
ids and positions used here are 58/59 and 96/97 from `plan-spec.json`.

## Published dependency audit and confidence routes

Every direct published dependency below was opened on disk, including its exact
Statement/Definition and the proof or convention clauses relevant to the planned
use. None is `legacy-unclassified`, and no published dependency was found false
or too weak. The dependency on `def-integer-power` that appeared in an early
draft was removed after inspection showed that item is specific to real powers;
natural ring powers now cite `def-group-power`'s monoid clause.

**Source-trace route.** For each of the following 24 items, the on-disk
statement provenance is `literature-derived`; I checked the planned use against
the exact statement, its source references, and its conventions:

`cor-composite-of-two-subfields`,
`cor-finite-subgroups-of-units-in-a-domain-are-cyclic`,
`cor-splitting-fields-are-unique-up-to-base-isomorphism`,
`def-algebraic-and-transcendental-elements`, `def-binomial-coefficient`,
`def-commutative-ring`,
`def-field-extension-generated-subfields-and-simple-extension`,
`def-formal-derivative-of-a-polynomial`,
`def-multivariate-polynomial-ring-by-iteration`,
`def-polynomials-that-split-and-splitting-fields`,
`lem-polynomial-factorisation-into-irreducibles`,
`prop-integers-modulo-n-as-a-quotient-ring`,
`thm-cardinality-of-a-set-of-functions`,
`thm-complex-numbers-form-a-field`,
`thm-eisenstein-irreducibility-criterion`, `thm-euclids-lemma`,
`thm-evaluation-kernel-and-minimal-polynomial`,
`thm-polynomial-quotient-is-a-field-iff-irreducible`, `thm-rat-field`,
`thm-repeated-root-derivative-criterion`,
`thm-root-bound-for-polynomials-over-a-domain`,
`thm-simple-algebraic-extension-quotient-power-basis-and-degree`,
`thm-splitting-fields-exist-for-nonzero-polynomials`, and
`thm-z-mod-p-is-a-field`.

**Exact-inspection route.** The following 26 items have an `ai-altered`
statement on disk. For each, I inspected the full exact claim and boundary cases,
checked the supporting published proof and references, and independently
confirmed that the standard fact with those conventions is sufficient for the
planned use:

`cor-every-spanning-set-contains-a-basis`,
`cor-independent-set-is-no-larger-than-a-finite-spanning-set`, `def-dimension`,
`def-factorial-and-falling-factorial`, `def-field`, `def-field-homomorphism`,
`def-finite-cardinality`, `def-group-power`, `def-linear-basis`, `def-nat-power`,
`def-polynomial-degree-leading-coefficient-and-monic`,
`def-polynomial-evaluation-and-root`, `def-prime`, `def-ring-characteristic`,
`def-subfield`, `def-subring`, `def-symmetric-group`,
`lem-field-is-a-commutative-ring`, `thm-binomial-closed-formula`,
`thm-canonical-prime-factorisation`, `thm-nth-roots-exist`,
`thm-of-square-roots`, `thm-pascals-rule`, `thm-reals-ordered-field`,
`thm-subset-of-a-finite-set`, and
`thm-unique-coordinates-with-respect-to-an-ordered-basis`.

Three inspection results materially changed the graph. `def-dimension` has only
a finite-dimensional value, so the tower law is finite-only. `def-group-power`,
not the real-specific `def-integer-power`, supplies natural powers in polynomial
rings. The generic binomial theorem needs `thm-pascals-rule`, and the prime
divisibility lemma needs the exact multiplicative identity from
`thm-binomial-closed-formula`; both edges are now explicit. The finite-basis
corollary imports the library's published choice-based basis theorem, although
only finite deletion is needed; the author may give the elementary finite
deletion argument inline, but the present dependency is mathematically valid.

## Per-item provenance decisions

`literature-derived` means the mathematical claim is traceable to the exact
source ranges above. `ai-altered` means the claim or proof organization is a
source-backed specialization, synthesis, boundary sharpening, or new library
packaging. `ai-generated` is used only for non-load-bearing calculations or
direct proofs; no Statement or Construction with `ai-generated` statement
provenance is a proof dependency.

### `symmetric-polynomials`

| item | statement | proof | rationale |
|---|---|---|---|
| `def-symmetric-polynomial` | literature-derived | not-applicable | KC-SP and DG-7 give the invariant definition; notation is translated to the library action convention. |
| `prop-symmetric-polynomials-form-a-subring` | literature-derived | ai-altered | Standard fixed-subring consequence in DG-7; the proof plan spells out each ring operation. |
| `def-elementary-symmetric-polynomials` | literature-derived | not-applicable | The exact $e_k$ family is common to KC-SP and DG-7, including $e_0=1$. |
| `thm-vieta-expansion-in-elementary-symmetric-polynomials` | literature-derived | ai-altered | KC-SP's universal product identity, with the empty-degree boundary made explicit. |
| `cor-vietas-formulas-for-a-split-monic-polynomial` | literature-derived | ai-altered | The standard coefficient comparison is specialized to the published splitting convention. |
| `def-monomial-symmetric-polynomials` | literature-derived | not-applicable | DG-7's orbit sums indexed by partitions, with duplicate monomials counted once. |
| `thm-monomial-symmetric-polynomials-form-a-basis` | literature-derived | ai-altered | DG-7's basis result; disjoint monomial supports supply the independent proof. |
| `def-lexicographic-order-and-polynomial-multidegree` | literature-derived | not-applicable | KC-SP's descent order, stated for the library's iterated polynomial ring. |
| `lem-leading-multidegree-of-a-symmetric-polynomial-is-a-partition` | literature-derived | ai-altered | KC-SP's variable-swap observation isolated as a reusable lemma. |
| `lem-leading-multidegrees-of-elementary-symmetric-monomials` | literature-derived | ai-altered | KC-SP's cumulative-sum leading tuple, including its monic coefficient and injectivity. |
| `thm-fundamental-theorem-of-symmetric-polynomials-existence` | literature-derived | ai-altered | KC-SP/DG-7 lexicographic descent; zero divisors are handled through monic leading terms. |
| `thm-elementary-symmetric-polynomials-are-algebraically-independent` | literature-derived | ai-altered | KC-SP's injective multidegree map becomes the full uniqueness engine. |
| `thm-fundamental-theorem-of-symmetric-polynomials` | literature-derived | ai-altered | Combines the separately proved existence and uniqueness halves stated in both main treatments. |
| `cor-symmetric-polynomial-values-on-roots-lie-in-the-base-field` | literature-derived | ai-altered | JM-SP/KC-SP root-value corollary, extended honestly to a monic polynomial over a ring and a containing split algebra. |
| `def-power-sum-and-complete-homogeneous-symmetric-polynomials` | literature-derived | not-applicable | DG-7's $p_k,h_k$ definitions fix the notation disagreement with JM-SP. |
| `prop-elementary-and-complete-generating-series-identity` | literature-derived | ai-altered | DG-7's finite formal-series identity, with coefficient comparison rather than analytic series. |
| `cor-complete-homogeneous-symmetric-polynomials-freely-generate` | literature-derived | ai-altered | Formal inversion plus the fundamental theorem gives the standard alternative generators. |
| `thm-newtons-identities` | literature-derived | ai-altered | KC-SP/DG-7 identities, organized so the $k\le n$ and $k>n$ regimes cannot be conflated. |
| `cor-power-sums-generate-when-factorial-is-invertible` | ai-altered | ai-altered | Sharpens the sources' rational-coefficient assumption to the exact unit condition $n!\in R^\times$. |
| `def-vandermonde-polynomial` | literature-derived | not-applicable | Standard Vandermonde product as used in JM-SP's discriminant treatment. |
| `prop-vandermonde-square-is-symmetric` | literature-derived | ai-altered | The alternating-sign calculation is isolated before applying the fundamental theorem. |
| `def-discriminant-of-a-monic-polynomial` | literature-derived | not-applicable | JM-SP's root-square convention, with the coefficient expression made part of well-definedness. |
| `thm-discriminant-root-formula-and-repeated-root-criterion` | literature-derived | ai-altered | JM-SP plus the published derivative criterion; no characteristic exclusion is introduced. |
| `def-monic-resultant` | ai-altered | not-applicable | A monic-first specialization of JM-SP's resultant is reconstructed from symmetric root values because determinants are unavailable. |
| `thm-monic-resultant-root-product-and-common-root-criterion` | ai-altered | ai-altered | The standard root-product theorem is specialized to the new monic definition and proved without a Sylvester matrix. |
| `cor-discriminant-as-a-resultant-with-the-derivative` | literature-derived | ai-altered | JM-SP's signed identity, checked against the chosen order of the root differences. |

### `symmetric-polynomials-examples`

| item | statement | proof | rationale |
|---|---|---|---|
| `ex-symmetric-reduction-in-two-variables` | literature-derived | ai-altered | Standard KC-SP two-variable reduction, recalculated in the chosen $e_1,e_2$ notation. |
| `ex-gauss-reduction-of-a-three-variable-symmetric-polynomial` | literature-derived | ai-altered | KC-SP's constructive descent is worked to completion on a new explicit polynomial. |
| `cex-lex-leading-term-not-found-by-unbalanced-substitution` | literature-derived | ai-altered | KC-SP's $Y_1^5+Y_2^5$ trap is recast as a precise counterexample to the shortcut. |
| `ex-newtons-identities-for-three-variables` | literature-derived | ai-altered | The sourced identities are checked at $k=2,3,4$ to exhibit both regimes. |
| `cex-power-sums-do-not-generate-in-characteristic-two` | ai-altered | ai-generated | Direct $\mathbb F_2$ calculation witnesses why the factorial-unit hypothesis is necessary. |
| `ex-complete-homogeneous-symmetric-polynomials-in-two-variables` | literature-derived | ai-altered | DG-7's generating identity is specialized and expanded in two variables. |
| `ex-quadratic-discriminant-and-double-root` | literature-derived | ai-altered | Standard coefficient calculation checks the definition and repeated-root test. |
| `ex-depressed-cubic-discriminant` | literature-derived | ai-altered | Standard $-4p^3-27q^2$ formula is derived in the page's sign convention. |
| `ex-monic-resultant-of-two-quadratics` | ai-altered | ai-generated | A direct root/coefficient computation exercises the new monic resultant rather than importing a determinant. |

### `algebraic-extensions-degree-and-finite-fields`

| item | statement | proof | rationale |
|---|---|---|---|
| `def-extension-degree-and-finite-extension` | literature-derived | not-applicable | AK-IX's degree definition restricted to the finite dimension actually published by the library. |
| `prop-extension-degree-one-iff-equal-fields` | literature-derived | ai-altered | Standard degree-one result, proved through the exact coordinate convention on disk. |
| `lem-product-basis-for-a-tower-of-finite-extensions` | literature-derived | ai-altered | AK-IX's basis-product proof split into explicit spanning and independence halves. |
| `thm-tower-law-for-finite-field-extensions` | literature-derived | ai-altered | AK-IX finite tower law follows from the isolated product-basis lemma. |
| `cor-intermediate-field-degrees-divide` | literature-derived | ai-altered | Immediate finite tower-law consequence, with finiteness of both intermediate degrees discharged. |
| `thm-finite-field-extensions-are-algebraic` | literature-derived | ai-altered | AK-IX power-dependence argument uses the published finite spanning bound. |
| `cor-element-algebraic-iff-simple-extension-finite` | literature-derived | ai-altered | One direction is the published quotient/power-basis theorem and the other is finite-implies-algebraic. |
| `def-finitely-generated-field-extension` | literature-derived | not-applicable | Standard finite generated-subfield notation extending the published simple-extension definition. |
| `thm-finitely-generated-algebraic-extensions-are-finite` | literature-derived | ai-altered | AK-IX induction over a finite generator list, with the empty list retained. |
| `thm-algebraic-elements-form-a-subfield` | literature-derived | ai-altered | AK-IX's finite-composite proof avoids manufacturing explicit annihilating polynomials. |
| `def-relative-algebraic-closure` | literature-derived | not-applicable | AK-IX's algebraic closure of the base inside a fixed extension. |
| `thm-transitivity-of-algebraicity` | literature-derived | ai-altered | AK-IX finite-coefficient-field proof, expanded through the finite tower law. |
| `prop-relative-algebraic-closure-is-relatively-algebraically-closed` | ai-altered | ai-generated | Direct corollary of the sourced relative closure and transitivity definitions. |
| `prop-degree-bound-for-composita` | literature-derived | ai-altered | Standard product-spanning argument; the proof is supplied because the harvested treatment leaves it as an exercise. |
| `def-prime-subfield` | literature-derived | not-applicable | AK-IX's intersection definition, aligned with the published subfield convention. |
| `thm-characteristic-of-a-field-is-zero-or-prime` | literature-derived | ai-altered | Standard zero-divisor contradiction, with characteristic one excluded explicitly. |
| `thm-prime-subfield-classification` | literature-derived | ai-altered | AK-IX's characteristic split, using the published $\mathbb Q$ and $\mathbb Z/p$ field constructions. |
| `thm-binomial-theorem-over-a-commutative-ring` | literature-derived | ai-altered | The standard theorem is reproved by Pascal induction in arbitrary characteristic. |
| `lem-prime-divides-intermediate-binomial-coefficients` | literature-derived | ai-altered | Standard $k\binom pk=p\binom{p-1}{k-1}$ argument with Euclid's lemma and exact endpoints. |
| `thm-frobenius-endomorphism-and-finite-field-automorphism` | literature-derived | ai-altered | KC-FF/JM-FF freshman's-dream proof, with finite injective-to-surjective step explicit. |
| `def-finite-field-and-its-order` | literature-derived | not-applicable | Standard finite-field definition and finite-cardinality notation. |
| `thm-finite-fields-have-prime-power-order` | literature-derived | ai-altered | KC-FF coordinate count over the prime subfield, including uniqueness of $p$ and $n$. |
| `thm-multiplicative-group-of-a-finite-field-is-cyclic` | literature-derived | ai-altered | KC-FF's theorem is discharged via the stronger published unit-subgroup corollary and its root-bound/finite-abelian proof. |
| `lem-roots-of-x-q-minus-x-form-a-field` | literature-derived | ai-altered | KC-FF closure-under-Frobenius construction plus the derivative $-1$ simplicity check. |
| `thm-existence-of-finite-fields` | literature-derived | ai-altered | KC-FF/JM-FF splitting-field construction, with the root subfield shown to generate the entire field. |
| `prop-finite-fields-are-splitting-fields-of-x-q-minus-x` | literature-derived | ai-altered | KC-FF root enumeration, using cyclicity and the polynomial root bound. |
| `thm-uniqueness-of-finite-fields` | literature-derived | ai-altered | KC-FF uniqueness through the published splitting-field uniqueness theorem; no unique-isomorphism claim. |
| `thm-subfield-lattice-of-a-finite-field` | literature-derived | ai-altered | KC-FF/JM-FF divisor lattice, with polynomial divisibility and uniqueness of each root set made explicit. |
| `thm-factorization-of-x-qn-minus-x` | literature-derived | ai-altered | KC-FF Appendix A factor theorem, translated to the library's minimal-polynomial and splitting conventions. |
| `cor-irreducible-polynomials-exist-over-finite-fields-in-every-degree` | literature-derived | ai-altered | KC-FF generator/minimal-degree argument yields a stronger, constructive corollary of the factorization theorem. |
| `cor-finite-extensions-of-finite-fields-are-simple` | literature-derived | ai-altered | A cyclic generator of the finite multiplicative group generates the whole extension together with zero. |
| `def-algebraically-constructible-real-number` | ai-altered | not-applicable | Algebraic closure-under-positive-square-roots model extracted from AK-IX/JM-FF while withholding the geometric equivalence. |
| `thm-quadratic-tower-characterization-of-algebraic-constructibility` | ai-altered | ai-altered | The classical tower proof is adapted to the deliberately algebraic definition and permits a zero-length tower. |
| `cor-algebraically-constructible-numbers-have-power-of-two-degree` | literature-derived | ai-altered | AK-IX/JM-FF necessary degree obstruction via the finite tower law and prime factorization. |
| `cex-cube-root-of-two-is-not-algebraically-constructible` | literature-derived | ai-altered | Classical Eisenstein degree-three witness applied only to the algebraic constructibility notion actually defined. |

### `algebraic-extensions-degree-and-finite-fields-examples`

| item | statement | proof | rationale |
|---|---|---|---|
| `ex-degree-of-q-sqrt-two` | literature-derived | ai-altered | Standard minimal-polynomial and power-basis calculation. |
| `ex-degree-of-q-cube-root-two` | literature-derived | ai-altered | Standard Eisenstein cubic calculation, kept distinct from the constructibility counterexample. |
| `ex-q-sqrt-two-sqrt-three-and-a-primitive-generator` | literature-derived | ai-altered | Classical biquadratic degree computation and explicit recovery from $\sqrt2+\sqrt3$. |
| `ex-relative-algebraic-closure-of-r-in-c` | ai-altered | ai-generated | Direct use of the published two-dimensional real basis of $\mathbb C$. |
| `ex-f-four-as-a-polynomial-quotient` | literature-derived | ai-altered | Standard irreducible quadratic quotient, expanded into complete arithmetic tables. |
| `ex-f-eight-as-a-polynomial-quotient` | literature-derived | ai-altered | KC-FF-style irreducible cubic quotient and power table. |
| `ex-f-nine-as-a-polynomial-quotient` | literature-derived | ai-altered | Standard quadratic quotient over $\mathbb F_3$ with an order-eight generator checked. |
| `ex-frobenius-on-f-four` | literature-derived | ai-altered | Direct specialization of KC-FF's Frobenius action to the two conjugate roots. |
| `ex-subfields-of-f-sixty-four` | ai-altered | ai-generated | The divisor lattice for $6$ is worked explicitly, yielding orders $2,4,8,64$. |
| `ex-a-generator-of-f-eight-multiplicative-group` | literature-derived | ai-altered | Direct power-table check that the residue class of $t$ has order seven. |
| `cex-an-algebraic-extension-need-not-be-finite` | literature-derived | ai-altered | AK-IX's infinite algebraic-extension boundary, presented without requiring an algebraic closure. |
| `cex-there-is-no-field-with-six-elements` | literature-derived | ai-altered | Immediate prime-power-order contradiction with the factorization of six. |
| `fs-f-p-n-is-z-mod-p-n` | ai-altered | ai-generated | Characteristic and zero-divisor checks refute the universal false identification at $n>1$. |
| `fs-extension-degrees-add-in-a-tower` | ai-altered | ai-generated | A concrete quadratic-over-quadratic tower distinguishes the false sum from the proved product law. |

## Proof-contract state

`research/frontier-13-batch-1.proof-contracts.json` contains one contract for
each of the 70 proof-bearing items and an exact 70-id scope. Every contract has
all eight boundary dispositions and begins with a planned derivation tied to the
scaffold strategy and dependency titles. This is intentionally a durable
scaffold-time beginning, not a claim that step-5 proof text already exists. At
authoring, each single planned derivation must be expanded into the actual
numbered proof, quotations must be synchronized to the final cited Facts, and
every boundary disposition must be rechecked against the authored Statement.
No registered algebra finite-smoke type applies to these items, so no synthetic
smoke object has been invented.

## Recommendations and blockers

No `requires` edge between the two owned A pages is recommended: every theorem
closes within its own declared prerequisite closure. No new page split is
recommended. There is no mathematical or source blocker. The only planned
later interfaces are the determinant/Sylvester form of the general resultant,
cardinal dimension for infinite tower laws, geometric constructibility,
cyclotomic regular-polygon theory, and algebraic closures; each is recorded with
a result-specific disposition in the coverage artifact.

## Final scaffold checks

- `node tools/validate-plan.mjs research/plan-spec.json`: pass. This is the live
  plan gate requested by the dispatch; the batch item lists are not yet spliced
  by design.
- An in-memory overlay of these four page objects onto the live spec checked all
  84 items: zero unresolved ids, forward references, undeclared prerequisites,
  B-leaf dependencies, cross-pair edges, duplicate ids, or over-60 A pages.
- The stronger dispatch rule was checked separately: there are zero dependencies
  on any of the 23 proposed B-page items, including from the same B page.
- `node tools/coverage-checklist.mjs
  research/frontier-13-batch-1.coverage.json`: pass, 2 A pages and 97 harvested
  entries, zero errors or warnings.
- `node tools/content-policy.mjs
  research/frontier-13-batch-1.pages.json --manifest-only --json`: pass, 84
  items, zero errors or warnings. No proposed page title or strategy applies a
  canonical embedding symbol to a natural number.
- All three JSON artifacts parse. The provenance table has exactly one rationale
  row for each of 84 items. The contract has exactly the 70 proof-bearing ids;
  every contract's citation set equals its scaffold dependency set, every one
  has all eight boundary dispositions, and all 95 citations to already
  published items contain exact on-disk source clauses.
- `prosecheck` reports zero errors and 13 heuristic warnings. The warnings
  are the deliberate inventory/split-threshold counts in this notes ledger and
  the literal phrase “all of them” inside mathematical titles/contract text; no
  positional claim contradicts the spec.
- `proof-contract.mjs --strict` cannot complete at scaffold time because the 70
  scoped `items/*.md` files are intentionally unauthored and outside this
  step's writable scope; it reports only `item-missing` for those 70 planned
  files. The contract schema, scope, citation/dependency alignment, exact
  published quotations, and boundary coverage were therefore checked directly.
  Strict content validation is a step-5 obligation after those item files exist.
- `tools/gates.mjs` was not run, exactly as the dispatch instructs. The required
  individual gates above were run instead.

There is no blocker and no operation for which permission or escalation was
needed.

## 2026-08-15 — adjudicated step-3 scaffold repair

This section supersedes only the stale counts in the earlier scaffold-check
section. The four-file batch boundary remained intact: the pages manifest,
coverage checklist, proof contracts, and this append-only notes ledger were the
only files edited.

### F1.1 — monic resultant consequences restored

I re-read Milne, *Fields and Galois Theory* v5.10, Chapter 4 Appendix,
Proposition 4.35 on the author-hosted PDF. The definition preceding the
proposition is

> $\operatorname{Res}(f,g)=a^m b^n\prod_{i,j}(\alpha_i-\beta_j)$.

Proposition 4.35(a) reverses the $mn$ root differences, and 4.35(c) follows by
evaluating $g\equiv g_1\pmod f$ at every root of $f$. Neither argument uses a
determinant. The Sylvester-matrix decline remains unchanged because that
presentation really does require the later determinant page.

The following three items were inserted immediately after the existing monic
root-product theorem. Their component provenance is recorded here for Step 5:

| item | `provenance.statement` | `provenance.proof` | rationale |
|---|---|---|---|
| `thm-monic-resultant-as-a-double-root-product` | literature-derived | ai-altered | The statement is the monic specialization of Milne's defining double product. The local proof substitutes the split factorization of $g$ into the already scaffolded root-value formula and checks the empty-degree cases. |
| `cor-monic-resultant-symmetry` | literature-derived | ai-altered | This is exactly Milne Proposition 4.35(a) with both polynomials explicitly monic, as required for both resultants to be defined by the local interface. The proof reverses all $mn$ differences. |
| `cor-monic-resultant-is-unchanged-modulo-f` | literature-derived | ai-altered | This is the monic case of Milne Proposition 4.35(c), stated with the explicit hypothesis $g-g_1=qf$ so no division algorithm is needed. The proof evaluates that identity at each root of $f$. |

No statement is AI-generated. The first new theorem depends only on the earlier
monic root-product theorem and the published definition of splitting; the
symmetry corollary uses that theorem and published splitting-field existence;
the reduction corollary uses the earlier root-product theorem and published
polynomial evaluation. Every published target was re-opened on disk and its
exact cited clause is present in the new proof contract.

The Milne harvest now includes the defining root-product display and maps it to
`thm-monic-resultant-as-a-double-root-product`. The former Proposition 4.35(a)
and 4.35(c) decline rows are now `included`, naming
`cor-monic-resultant-symmetry` and
`cor-monic-resultant-is-unchanged-modulo-f`, respectively.

### F1.2 — Conrad finite-fields harvest completed

The declared range “Sections 1–2 and Appendix A in full” now has all 25 numbered
results represented. The 12 added Example/Remark rows are Examples 1.2, 1.3,
1.4, 1.7, 1.8, 2.6, 2.9, 2.10, and A.5, together with Remarks 1.9, 2.4, and
A.3. Existing quotient-field, cyclicity, factorisation, irreducible-existence,
and subfield-lattice items receive the corresponding `included` or `inline`
dispositions. This is a coverage-artifact repair only: no order-96 item or
dependency changed.

### Final repaired census and contract check

| page | kind | items after repair |
|---|---:|---:|
| `symmetric-polynomials` | A | 29 |
| `symmetric-polynomials-examples` | B | 9 |
| `algebraic-extensions-degree-and-finite-fields` | A | 35 |
| `algebraic-extensions-degree-and-finite-fields-examples` | B | 14 |

The batch now has 87 items. The proof-contract artifact has 73 proof-bearing
scope ids, 73 contracts, 218 citations, and zero empty citation arrays. A direct
scaffold audit found zero scope mismatches, dependency/citation-set mismatches,
boundary-set mismatches, or non-exact citation clauses.

### Required gate output

`node tools/validate-plan.mjs research/plan-spec.json` exited 0. Its census began:

```text
plan: 1176 pages (583 A + 583 B + 5 already published), 3879 new items, 4866 existing ids available
item lists written for 244/1171 planned pages — the rest are validated at PAGE level only
3878/3879 planned items already authored into items/
```

After the full reading-order and redundant-prerequisite report, it ended:

```text
OK — declared page order is acyclic and consistent; no item-level cycles, forward
references, B-page dependencies, or unresolved ids among the 244 page(s) with item lists.
NOTE: 927 planned page(s) carry no item list yet (marked * above). Their reading
order is guaranteed; their item dependencies are not yet asserted, so re-run this
after writing each page's items.
```

`node tools/coverage-checklist.mjs research/frontier-13-batch-1.coverage.json`
exited 0 with exactly:

```text
coverage-checklist: 2 page(s), 110 harvested result(s), 0 error(s), 0 warning(s)
```

`node tools/content-policy.mjs research/frontier-13-batch-1.pages.json --manifest-only`
exited 0 with exactly:

```text
content-policy: 87 scoped item(s), 0 error(s), 0 warning(s)
```

The independent dependency-closure audit over all 87 manifest items printed:

```text
dependency-closure audit: 87 item(s)
unresolved ids: 0
out-of-closure published deps: 0
cross-pair edges: 0
B-leaf deps: 0
duplicate ids: 0
```

No blocker remains.

## 2026-08-15 — Step 5 authoring report

This section is the final Step 5 report and supersedes the scaffold-time counts
and proof-contract descriptions above. All 87 scoped items are authored with
`status: draft`, `origin: session`, and no `verification.audited` field. The
four page files are authored; the A summaries are the splice receipt's exact
replacement prose, and both B files contain zero bytes of body prose after
frontmatter. The final proof-contract artifact has 73 scope ids, 73 contracts,
227 complete-section citation anchors, and 257 separate numbered-step
derivations.

### Per-item precheck record

`n/a` means the item is one of the 14 definitions without a proof-bearing body.
Every other result below was included in the final scoped invocation that ended
`73 checked, 0 failing — all clean`.

#### `symmetric-polynomials`

- `def-symmetric-polynomial` — n/a
- `prop-symmetric-polynomials-form-a-subring` — PASS (direct)
- `def-elementary-symmetric-polynomials` — n/a
- `thm-vieta-expansion-in-elementary-symmetric-polynomials` — PASS (direct)
- `cor-vietas-formulas-for-a-split-monic-polynomial` — PASS (direct)
- `def-monomial-symmetric-polynomials` — n/a
- `thm-monomial-symmetric-polynomials-form-a-basis` — PASS (direct)
- `def-lexicographic-order-and-polynomial-multidegree` — n/a
- `lem-leading-multidegree-of-a-symmetric-polynomial-is-a-partition` — PASS (contradiction)
- `lem-leading-multidegrees-of-elementary-symmetric-monomials` — PASS (direct)
- `thm-fundamental-theorem-of-symmetric-polynomials-existence` — PASS (direct)
- `thm-elementary-symmetric-polynomials-are-algebraically-independent` — PASS (contradiction)
- `thm-fundamental-theorem-of-symmetric-polynomials` — PASS (direct)
- `cor-symmetric-polynomial-values-on-roots-lie-in-the-base-field` — PASS (direct)
- `def-power-sum-and-complete-homogeneous-symmetric-polynomials` — n/a
- `prop-elementary-and-complete-generating-series-identity` — PASS (direct)
- `cor-complete-homogeneous-symmetric-polynomials-freely-generate` — PASS (direct)
- `thm-newtons-identities` — PASS (direct)
- `cor-power-sums-generate-when-factorial-is-invertible` — PASS (direct)
- `def-vandermonde-polynomial` — n/a
- `prop-vandermonde-square-is-symmetric` — PASS (direct)
- `def-discriminant-of-a-monic-polynomial` — n/a
- `thm-discriminant-root-formula-and-repeated-root-criterion` — PASS (direct)
- `def-monic-resultant` — n/a
- `thm-monic-resultant-root-product-and-common-root-criterion` — PASS (direct)
- `thm-monic-resultant-as-a-double-root-product` — PASS (direct)
- `cor-monic-resultant-symmetry` — PASS (direct)
- `cor-monic-resultant-is-unchanged-modulo-f` — PASS (direct)
- `cor-discriminant-as-a-resultant-with-the-derivative` — PASS (direct)

#### `symmetric-polynomials-examples`

- `ex-symmetric-reduction-in-two-variables` — PASS (direct)
- `ex-gauss-reduction-of-a-three-variable-symmetric-polynomial` — PASS (direct)
- `cex-lex-leading-term-not-found-by-unbalanced-substitution` — PASS (direct)
- `ex-newtons-identities-for-three-variables` — PASS (direct)
- `cex-power-sums-do-not-generate-in-characteristic-two` — PASS (direct)
- `ex-complete-homogeneous-symmetric-polynomials-in-two-variables` — PASS (direct)
- `ex-quadratic-discriminant-and-double-root` — PASS (direct)
- `ex-depressed-cubic-discriminant` — PASS (direct)
- `ex-monic-resultant-of-two-quadratics` — PASS (direct)

#### `algebraic-extensions-degree-and-finite-fields`

- `def-extension-degree-and-finite-extension` — n/a
- `prop-extension-degree-one-iff-equal-fields` — PASS (direct)
- `lem-product-basis-for-a-tower-of-finite-extensions` — PASS (direct)
- `thm-tower-law-for-finite-field-extensions` — PASS (direct)
- `cor-intermediate-field-degrees-divide` — PASS (direct)
- `thm-finite-field-extensions-are-algebraic` — PASS (direct)
- `cor-element-algebraic-iff-simple-extension-finite` — PASS (direct)
- `def-finitely-generated-field-extension` — n/a
- `thm-finitely-generated-algebraic-extensions-are-finite` — PASS (direct)
- `thm-algebraic-elements-form-a-subfield` — PASS (direct)
- `def-relative-algebraic-closure` — n/a
- `thm-transitivity-of-algebraicity` — PASS (direct)
- `prop-relative-algebraic-closure-is-relatively-algebraically-closed` — PASS (direct)
- `prop-degree-bound-for-composita` — PASS (direct)
- `def-prime-subfield` — n/a
- `thm-characteristic-of-a-field-is-zero-or-prime` — PASS (contradiction)
- `thm-prime-subfield-classification` — PASS (direct)
- `thm-binomial-theorem-over-a-commutative-ring` — PASS (induction)
- `lem-prime-divides-intermediate-binomial-coefficients` — PASS (direct)
- `thm-frobenius-endomorphism-and-finite-field-automorphism` — PASS (direct)
- `def-finite-field-and-its-order` — n/a
- `thm-finite-fields-have-prime-power-order` — PASS (direct)
- `thm-multiplicative-group-of-a-finite-field-is-cyclic` — PASS (direct)
- `lem-roots-of-x-q-minus-x-form-a-field` — PASS (direct)
- `thm-existence-of-finite-fields` — PASS (constructive)
- `prop-finite-fields-are-splitting-fields-of-x-q-minus-x` — PASS (direct)
- `thm-uniqueness-of-finite-fields` — PASS (direct)
- `thm-subfield-lattice-of-a-finite-field` — PASS (direct)
- `thm-factorization-of-x-qn-minus-x` — PASS (direct)
- `cor-irreducible-polynomials-exist-over-finite-fields-in-every-degree` — PASS (contradiction)
- `cor-finite-extensions-of-finite-fields-are-simple` — PASS (constructive)
- `def-algebraically-constructible-real-number` — n/a
- `thm-quadratic-tower-characterization-of-algebraic-constructibility` — PASS (direct)
- `cor-algebraically-constructible-numbers-have-power-of-two-degree` — PASS (direct)
- `cex-cube-root-of-two-is-not-algebraically-constructible` — PASS (contradiction)

#### `algebraic-extensions-degree-and-finite-fields-examples`

- `ex-degree-of-q-sqrt-two` — PASS (direct)
- `ex-degree-of-q-cube-root-two` — PASS (direct)
- `ex-q-sqrt-two-sqrt-three-and-a-primitive-generator` — PASS (direct)
- `ex-relative-algebraic-closure-of-r-in-c` — PASS (direct)
- `ex-f-four-as-a-polynomial-quotient` — PASS (direct)
- `ex-f-eight-as-a-polynomial-quotient` — PASS (direct)
- `ex-f-nine-as-a-polynomial-quotient` — PASS (direct)
- `ex-frobenius-on-f-four` — PASS (direct)
- `ex-subfields-of-f-sixty-four` — PASS (direct)
- `ex-a-generator-of-f-eight-multiplicative-group` — PASS (direct)
- `cex-an-algebraic-extension-need-not-be-finite` — PASS (contradiction)
- `cex-there-is-no-field-with-six-elements` — PASS (contradiction)
- `fs-f-p-n-is-z-mod-p-n` — PASS (direct)
- `fs-extension-degrees-add-in-a-tower` — PASS (direct)

### Final scaffold-change ledger

No id, kind, or title changed. YAML escaping was repaired without changing the
parsed titles. The common-root theorem's authored Statement says “in some
extension field of $F$”, rather than presupposing a splitting field of $fg$;
this retains the $g=0$ case without assigning a splitting field to the zero
polynomial. Its proof contract, provenance row, and coverage target remain
synchronized.

The following are the exact final dependency-list differences from the spliced
`research/plan-spec.json`; each edge is used in the proof or definition.

- `def-discriminant-of-a-monic-polynomial`: added `thm-fundamental-theorem-of-symmetric-polynomials`, which directly supplies the unique coefficient polynomial $D_n$.
- `lem-product-basis-for-a-tower-of-finite-extensions`: removed `def-extension-degree-and-finite-extension`; the statement assumes two bases and the proof never invokes extension degree.
- `cor-intermediate-field-degrees-divide`: added `cor-independent-set-is-no-larger-than-a-finite-spanning-set` to prove the intermediate basis is finite.
- `thm-finitely-generated-algebraic-extensions-are-finite`: replaced `thm-evaluation-kernel-and-minimal-polynomial` by `def-algebraic-and-transcendental-elements`; persistence over a larger base uses the same annihilating polynomial, not the minimal-polynomial theorem.
- `thm-transitivity-of-algebraicity`: added `cor-element-algebraic-iff-simple-extension-finite` to make $M(a)/M$ finite before applying the tower law.
- `prop-relative-algebraic-closure-is-relatively-algebraically-closed`: added `cor-element-algebraic-iff-simple-extension-finite` and `thm-finite-field-extensions-are-algebraic` so that $A(b)/A$ satisfies the algebraic-extension hypothesis of transitivity.
- `prop-degree-bound-for-composita`: added `thm-finitely-generated-algebraic-extensions-are-finite` to establish finiteness of the compositum before reducing inverses.
- `prop-finite-fields-are-splitting-fields-of-x-q-minus-x`: removed `thm-finite-fields-have-prime-power-order`; the root enumeration and generated-field argument do not use the prime-power representation.
- `thm-uniqueness-of-finite-fields`: added `thm-finite-fields-have-prime-power-order` and `thm-canonical-prime-factorisation` to prove that two fields of the common order have the same characteristic prime before identifying their bases.
- `thm-factorization-of-x-qn-minus-x`: added `thm-finite-fields-have-prime-power-order` and `thm-existence-of-finite-fields` to construct the order-$q^n$ root field used in both factor directions.
- `cor-irreducible-polynomials-exist-over-finite-fields-in-every-degree`: added `thm-finite-fields-have-prime-power-order` and `thm-uniqueness-of-finite-fields`, and replaced `thm-evaluation-kernel-and-minimal-polynomial` by `thm-simple-algebraic-extension-quotient-power-basis-and-degree`; these identify the given base field inside the order-$q^n$ field and license the simple-extension degree. The scaffolded subfield-lattice edge remains and is used for that base subfield.
- `cex-an-algebraic-extension-need-not-be-finite`: replaced `thm-transitivity-of-algebraicity` by `thm-finite-field-extensions-are-algebraic` and removed `thm-tower-law-for-finite-field-extensions`; each finite stage is algebraic by the former, and the latter two scaffold edges were unused.
- `cex-there-is-no-field-with-six-elements`: added `thm-euclids-lemma` for the inference from $p\mid2\cdot3$ to $p=2$ or $p=3$.

No coverage disposition or item id changed. The final manifest carries every
dependency delta above; the proof contracts were regenerated after the last
edit, and `research/plan-spec.json` was not edited by this authoring pass.

### Provenance rationale summary

The detailed 87-item rationale tables earlier in this notes file, including the
three-item resultant repair addendum, remain the per-item record. The final
component census is:

- 75 `literature-derived` Statements/Definitions/Examples and 12 `ai-altered`;
- 66 `ai-altered` proofs, 7 `ai-generated` proofs, and 14 `not-applicable` definition proofs;
- zero `ai-generated` Statements or Constructions.

The literature-derived statements follow the Conrad, Grinberg, Milne, and
Knapp source ranges recorded above. AI alteration is limited to the explicitly
recorded monic specialization, exact ring hypotheses, algebraic
constructibility interface, or locally formulated examples/corollaries. The
seven AI-generated proofs are direct computations or short consequences of
cited results; none supplies an AI-generated Statement as a dependency. The
three restored resultant consequences are the monic product specializations of
Milne Proposition 4.35(a)/(b)/(c), with no determinant or Sylvester argument.

### Final gate output

The batch-scoped precheck invocation exited 0 and ended exactly:

```text
73 checked, 0 failing — all clean
```

The required bare precheck command was rerun after the owning batch adopted its
canonical repair. It exited 0 and ended exactly:

```text
3559 checked, 0 failing — all clean
```

The other required bare gates exited 0. Their decisive output was:

```text
depcheck: 4535 items (4128 published), 270 pages

OK — no cycles, all references resolve, no draft items on published pages.
```

```text
fwdcheck: 4535 items, 0 open forward reference(s), 399 closed, 34 load bearing

OK — every forward reference is declared, points strictly forward, is closed by a planned later page, stays off the spine unless orientation only, and introduces no cycle.
```

```text
extcheck: 4535 items, 116 recorded-not-proved, 119 resting on them

OK — every recorded-not-proved statement is a cited remark with no proof, and every consequence is marked.
```

```text
OK — 4805 file(s): no wikilink inside math, no nested or unbalanced
delimiters, no multiline display block, every math span parses under the real
KaTeX, and every frontmatter block parses under the renderer's
YAML parser.
```

```text
4805 file(s) checked. 0 error(s), 568 warning(s).
  library-scope-denial: 206
  count-in-prose: 189
  count-of-this-page: 173

(re-run with --warnings to list them; warnings are heuristic and have legitimate cases)

OK — no positional claim contradicts the spec.
```

```text
content-policy: 87 scoped item(s), 0 error(s), 0 warning(s)
```

```text
coverage-checklist: 2 page(s), 130 harvested result(s), 0 error(s), 0 warning(s)
```

The two additional Step 5 contract/citation checks exited 0 with exactly:

```text
proof-contract: 0 error(s), 0 warning(s), 73/73 item(s) checked
```

```text
citecheck: 87 item(s) scanned

OK — every recognised elementary move cites a home that states it.
```

No mathematical, source, permission, or gate blocker remains.

## 2026-08-15 — Step 5 authoring continuity checkpoint

All 87 scoped item files and all four page files are authored. The two A-page
summaries use the splice receipt's replacement prose verbatim, and the two
B-page files end at their closing frontmatter delimiter with no summary body.
The restored resultant development uses only the monic product definition and
root-product arguments; it contains no determinant or Sylvester construction.

The remaining substage is mechanical synchronization and verification. The
owned paths are the 87 item ids in this batch, the four corresponding
`library/abstract-algebra/` page files, and the four
`research/frontier-13-batch-1.*` artifacts. `research/plan-spec.json` remains
untouched by this authoring pass. Three scaffold dependency lists need their
proof-used additions reflected everywhere: the finite independent-set bound in
`cor-intermediate-field-degrees-divide`, finite generation of algebraic
extensions in `prop-degree-bound-for-composita`, and canonical prime
factorisation in `thm-uniqueness-of-finite-fields`. No id or title changed.

Next: regenerate the proof-contract citations and per-step input maps from the
final item prose, adopt every canonical precheck repair, run the complete Step 5
gate list plus strict proof-contract and citation checks, then append the
verbatim outputs and the final provenance/ledger report here. No blocker is
known.

## 2026-08-15 — second-pass Grinberg locator and harvest repair

This repair applies only Alpha findings F1.2 and F1.3. The Grinberg locator now
covers Chapter 7 §§7.1–7.2 through the proof of Theorem 7.2.7, explicitly
including Example 7.2.8 and Proposition 7.2.9, and still stops before §7.3.
This removes the contradiction between the former printed-page range and its
claim to stop before §7.2.

The Grinberg source ledger now has 29 disposition rows: 20 rows covering the
§7.1 section heading and all numbered headings 7.1.1–7.1.17, and 9 rows for
7.2.1–7.2.9. Definition 7.2.4 maps to
`def-monomial-symmetric-polynomials`, and Theorem 7.2.7 maps to
`thm-monomial-symmetric-polynomials-form-a-basis`, so both literature-derived
provenance rationales now point inside the declared source range. Theorem 7.1.6
maps to `prop-symmetric-polynomials-form-a-subring`, and Definition 7.1.9 maps
to `def-elementary-symmetric-polynomials`. Lemma 7.1.17 is explicitly deferred:
the scaffold uses invariance under all permutations directly and no retained
proof needs the adjacent-transposition testing criterion.

This was a coverage-artifact repair only. No item, item id, dependency,
provenance classification, or proof contract changed. The per-page item counts
remain:

| page | kind | items after repair |
|---|---:|---:|
| `symmetric-polynomials` | A | 29 |
| `symmetric-polynomials-examples` | B | 9 |
| `algebraic-extensions-degree-and-finite-fields` | A | 35 |
| `algebraic-extensions-degree-and-finite-fields-examples` | B | 14 |

### Required gate output

`node tools/validate-plan.mjs research/plan-spec.json` exited 0. Its census
began:

```text
plan: 1176 pages (583 A + 583 B + 5 already published), 3879 new items, 4866 existing ids available
item lists written for 244/1171 planned pages — the rest are validated at PAGE level only
3878/3879 planned items already authored into items/
```

After the full reading-order and redundant-prerequisite report, it ended:

```text
OK — declared page order is acyclic and consistent; no item-level cycles, forward
references, B-page dependencies, or unresolved ids among the 244 page(s) with item lists.
NOTE: 927 planned page(s) carry no item list yet (marked * above). Their reading
order is guaranteed; their item dependencies are not yet asserted, so re-run this
after writing each page's items.
```

`node tools/coverage-checklist.mjs research/frontier-13-batch-1.coverage.json`
exited 0 with exactly:

```text
coverage-checklist: 2 page(s), 130 harvested result(s), 0 error(s), 0 warning(s)
```

`node tools/content-policy.mjs research/frontier-13-batch-1.pages.json --manifest-only`
exited 0 with exactly:

```text
content-policy: 87 scoped item(s), 0 error(s), 0 warning(s)
```

The batch-wide dependency-closure audit printed:

```text
dependency-closure audit: 87 items, 246 dependency edges (127 same-pair, 119 published)
unresolved ids: 0
out-of-closure published deps: 0
cross-pair edges: 0
B-leaf deps: 0
duplicate ids: 0
unpublished deps: 0
not-earlier same-pair deps: 0
```

No blocker remains.

## Step 5 final-state pointer

The authoritative Step 5 authoring report is the section headed
“2026-08-15 — Step 5 authoring report” above; it supersedes all scaffold-time
counts and contract descriptions in this append-only ledger. After the
out-of-scope batch adopted its own canonical repair, the required bare precheck
was rerun and ended `3559 checked, 0 failing — all clean`. All required gates
are now clean, and no blocker remains.
