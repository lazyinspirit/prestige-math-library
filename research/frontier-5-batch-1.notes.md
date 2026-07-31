# Frontier 5, batch 1 scaffold notes

Companion machine-readable scaffold:
`research/frontier-5-batch-1.pages.json`.

## Scope and page inventory

| Page | Kind | Order | Items | Disposition |
|---|---:|---:|---:|---|
| `filters-and-ultrafilters` | A | 12 | 12 | Published, copied verbatim from `plan-spec.json`, read-only |
| `filters-and-ultrafilters-examples` | B | 13 | 8 | Scaffolded |
| `congruences-and-the-chinese-remainder-theorem` | A | 30 | 23 | Scaffolded |
| `congruences-and-the-chinese-remainder-theorem-examples` | B | 31 | 10 | Scaffolded |
| `incidence-algebras-and-mobius-inversion` | A | 203 | 26 | Scaffolded |
| `incidence-algebras-and-mobius-inversion-examples` | B | 204 | 8 | Scaffolded |

The JSON has 87 item objects. Twelve are the published filter A-page objects
included only so the pair can be spliced safely. The build adds 75 items.

## Step 3 decisions, in severity order

### 1. Accept the lower-finite hypothesis for global Möbius inversion

Problem: local finiteness makes each convolution interval finite, but it does
not make a principal ideal finite. Therefore a formula that sums over every
`x <= y` can still be an infinite, undefined sum. The prose scaffold's
"Möbius inversion on a locally finite poset" is false at its stated level of
generality.

Recommendation: accept
`thm-mobius-inversion-for-lower-finite-posets`, together with its upper-finite
dual, and retain local finiteness only for incidence convolution.

If declined: the landmark theorem can contain undefined sums on a locally
finite poset. This is a fatal mathematical error.

### 2. Accept one home for the number-theoretic Möbius function

Problem: the prose explicitly warned of a possible collision between the
number-theory pages and the incidence-algebra page. The published item pool,
`primes-and-the-fundamental-theorem-of-arithmetic`, and the current CRT
scaffold contain no definition of the classical number-theoretic Möbius
function.

Recommendation: mint `def-number-theoretic-mobius-function` only on
`incidence-algebras-and-mobius-inversion`, then prove
`thm-number-theoretic-and-poset-mobius-agree`. Do not add a Möbius definition
to the CRT page.

If declined: either the classical function has no declared definition, or two
independent definitions can silently diverge. The latter is a fatal
two-notions defect.

### 3. Accept a coefficient-independent finite-sum definition

Problem: `def-sum-over-a-finite-index-set` is specialised to sums in
`R` and `N`. Incidence convolution requires finite sums in the additive
commutative monoid of an arbitrary commutative coefficient ring.

Recommendation: accept `def-finite-sum-in-a-commutative-monoid` and
`lem-finite-sum-reindexing-and-fubini`. The latter carries the actual
associativity proof for convolution.

If declined: the incidence-algebra definition and its associativity proof rely
on an undeclared generalisation of a published definition. This is a fatal
dependency-citation defect.

### 4. Accept the CRT decomposition and boundary cases

Problem: representative independence, solution counts, finite-list induction,
and Wilson inverse pairing are too substantial to hide inside landmark proofs.
The moduli 0 and 1 also change several statements.

Recommendation: retain the decomposition lemmas in the JSON and state each
domain exactly. General congruence includes modulus 0. Quotient algebra and
totient use natural or positive moduli as stated. Keep
`cex-z-mod-one-is-not-a-field`.

If declined: quotient operations can be used before well-definedness is proved,
and statements about `Z/1` can become false.

### 5. Accept the CRT to incidence seam

Recommendation: keep `thm-sum-of-totients-over-divisors` on the CRT A page and
make `ex-euler-totient-recovered-by-mobius-inversion` depend on it. The
incidence B page therefore requires
`congruences-and-the-chinese-remainder-theorem`.

If declined: the totient inversion example must either prove a number-theory
identity inline or cite an undeclared fact.

### 6. Accept the Boolean-lattice to inclusion-exclusion seam

Recommendation: add `inclusion-exclusion-and-the-pigeonhole-principle` to the
CRT A-page requirements for the inclusion-exclusion proof of Euler's product
formula. Keep `cor-inclusion-exclusion-is-boolean-mobius-inversion` on the
incidence page as the explicit agreement theorem.

If declined: the CRT strategy silently uses an unavailable theorem, and the
incidence page misses its principal dictionary seam.

### 7. Accept the expanded filters B page

Recommendation: retain the general principal-filter example, the finite
partition selection example, and the intersection-of-ultrafilters
counterexample in addition to the five already planned ids.

If declined: the page remains correct but loses useful tests of generated,
prime, and maximal behaviour.

## Exact prose-scaffold amendments

These are instructions for Alpha. They have not been applied here.

### `research/plan-algebra-track.md`, NT-3

Replace:

```text
## NT-3. Congruences, the Integers Modulo n and the Chinese Remainder Theorem  (order 26)

`requires`: `primes-and-the-fundamental-theorem-of-arithmetic`
```

with:

```text
## NT-3. Congruences, the Integers Modulo n and the Chinese Remainder Theorem  (order 30)

`requires`: `primes-and-the-fundamental-theorem-of-arithmetic`,
`inclusion-exclusion-and-the-pigeonhole-principle`
```

Replace:

```text
**Fermat and Euler are NOT on this page.**
```

with:

```text
The divisor-sum identity $\sum_{d\mid n}\varphi(d)=n$ is on this page because
it supplies the declared input to the totient example on
`incidence-algebras-and-mobius-inversion-examples`. The number-theoretic
Möbius function is not defined here; its single home is
`incidence-algebras-and-mobius-inversion`.

**Fermat and Euler are NOT on this page.**
```

Replace the sentence:

```text
Traps. **The word "ring" is not available** until order 42, and nothing on this
page may use it; every statement is about $\mathbb{Z}/n$ with two named
operations.
```

with:

```text
Traps. General ring results are not among this page's declared prerequisites.
Every result about $\mathbb{Z}/n$ is therefore proved using the two named
operations. The field result cites only the published definition of a field
and verifies its clauses directly. Representative independence, reduction of a
linear congruence by its gcd, the two-modulus CRT, finite-list CRT, and Wilson's
inverse pairing are separate lemmas in the machine scaffold.
```

### `research/plan-combinatorics-and-categories.md`, CB-9

Replace:

```text
## CB-9. Incidence Algebras and Möbius Inversion  (order 185, combinatorics)

`requires`: `chains-antichains-sperner-and-dilworth` (173),
`rings-subrings-and-integral-domains` (46),
`primes-and-the-fundamental-theorem-of-arithmetic` (28)
```

with:

```text
## CB-9. Incidence Algebras and Möbius Inversion  (order 203, combinatorics)

`requires`: `chains-antichains-sperner-and-dilworth` (191),
`rings-subrings-and-integral-domains` (46),
`primes-and-the-fundamental-theorem-of-arithmetic` (28)
```

Replace:

```text
DEFS: **locally finite poset** (the hypothesis IS the well-definedness, #21);
the incidence algebra $I(P,R)$ and its convolution; $\delta$ and $\zeta$;
**the Möbius function $\mu_P$** (#22); the classical number-theoretic $\mu$ as
the special case of the divisibility poset.
```

with:

```text
DEFS: intervals and the distinct locally finite, lower-finite and upper-finite
conditions; a finite sum in an arbitrary commutative monoid, with reindexing
and finite Fubini proved; the incidence ring $I(P,R)$ and convolution for a
locally finite poset; $\delta$ and $\zeta$; the integer-valued poset Möbius
function $\mu_P$; the divisibility poset; and the classical number-theoretic
$\mu$, followed by a theorem identifying it with $\mu_{\mid}(1,n)$.
```

Replace:

```text
THMS: $I(P,R)$ is an associative $R$-algebra with identity $\delta$;
$f \in I$ is invertible iff $f(x,x)$ is a unit for all $x$, so $\zeta$ is
invertible and $\mu := \zeta^{-1}$ exists and is unique (#22); **Möbius
inversion** on a locally finite poset (landmark); the **product theorem**
($\mu$ of a product poset is the product of the $\mu$'s); $\mu$ of the Boolean
lattice is $(-1)^{\lvert B\setminus A\rvert}$, and hence **inclusion–exclusion
is recovered** as a special case — the dictionary item against CB-2, mandatory;
$\mu$ of the divisor lattice is the classical Möbius function, and classical
Möbius inversion follows, with the multiplicativity of $\mu$ proved here rather
than assumed; $\mu$ of the chain and of the partition lattice
$\Pi_n$ ($(-1)^{n-1}(n-1)!$); the **Euler characteristic / cross-cut**
statements are DROPPED (they belong with order complexes and simplicial
topology — recorded).
```

with:

```text
THMS: incidence functions form a ring with identity $\delta$, with convolution
associativity proved by finite Fubini; recursive left and right inverses yield
the diagonal-unit invertibility criterion; the integer-valued Möbius function
exists and satisfies both interval recurrences; **Möbius inversion** on a
lower-finite poset, with the upper-finite dual and finite-poset corollary; the
product theorem; the Boolean-lattice formula and the explicit
inclusion-exclusion dictionary; the finite-chain formula; factorisation of
divisor intervals; agreement with the classical number-theoretic Möbius
function; classical inversion; and multiplicativity of the classical function.
```

Replace:

```text
B: $\mu$ computed on $2^{[3]}$, on the chain, on the divisor lattice of $12$,
and on $\Pi_3$; Möbius inversion applied to recover $\varphi$ from
$\sum_{d\mid n}\varphi(d) = n$ (citing the number theory pages at 26–30);
the necklace-counting inversion.
```

with:

```text
B: complete computations on $2^{[3]}$, a four-element chain, the divisor
poset of $12$, and the four-element diamond; Möbius inversion applied to
recover $\varphi$ from the declared CRT-page divisor-sum identity; a
non-locally-finite convolution counterexample; a nonunit-diagonal
counterexample; and equal-cardinality intervals with different Möbius values.
```

Replace:

```text
Traps. (i) #21 is not a technicality; the counterexample is required. (ii) The
number-theoretic $\mu$ already has a home if the NT pages minted one — **check
`primes-and-the-fundamental-theorem-of-arithmetic` and
`congruences-and-the-chinese-remainder-theorem` on disk**; if a classical $\mu$
exists there, this page proves the agreement instead of re-minting.
(iii) `def-partial-order` is published; cite.
```

with:

```text
Traps. (i) Local finiteness is sufficient for interval convolution, but not for
a sum over an entire principal ideal. State global inversion under lower
finiteness, or dually upper finiteness. (ii) The number-theory pages do not
define the classical Möbius function. Define it once here and prove its
agreement with the divisibility-poset function. (iii) The poset Möbius function
is integer-valued; do not hide a coefficient-characteristic assumption inside
its definition. (iv) `def-partial-order` is published; cite it.
```

### `research/design-foundations-pages.md`, Page 8

Replace:

```text
## Page 8. `filters-and-ultrafilters-examples` (B, 5 items)

`ex-principal-ultrafilter` · `ex-frechet-filter` (cofinite filter on
$\mathbb{N}$: proper, not an ultrafilter) · `ex-free-ultrafilter-on-naturals`
(any ultrafilter extending the Frechet filter is free; existence needs the
ultrafilter lemma, so flag the choice cost) · `cex-union-of-filters-not-filter`
(two filters whose union is not a filter, so the Zorn argument must use CHAINS)
· `cex-improper-filter` (dropping properness collapses the theory, the power set
becoming the unique maximal filter).
```

with:

```text
## Page 8. `filters-and-ultrafilters-examples` (B, 8 items)

`ex-principal-filter-generated-by-a-set` · `ex-principal-ultrafilter` ·
`ex-frechet-filter` (expressed by tails of $\mathbb N$ and proved equal to the
cofinite filter) · `ex-free-ultrafilter-on-naturals` (existence uses the
ultrafilter lemma) · `ex-ultrafilter-selects-a-cell-of-a-finite-partition` ·
`cex-union-of-filters-not-filter` ·
`cex-intersection-of-ultrafilters-not-ultrafilter` ·
`cex-improper-filter`.
```

## Authoring handoff

### Filters and ultrafilters

- Preserve the A page and its item files exactly.
- The repository convention makes a filter proper by definition. The improper
  example must explicitly say which axiom is being dropped.
- Prove that the tail filter on `N` equals the cofinite filter. Use finite lists
  and tails, not a finite-cardinality dependency unavailable at order 13.
- A free ultrafilter on `N` has a real choice cost. Cite
  `thm-ultrafilter-lemma`; do not present its existence as constructive.
- For a finite partition, iterate `lem-ultrafilter-prime` to obtain existence,
  then use disjointness and properness for uniqueness.

### Congruences and the Chinese remainder theorem

- Congruence modulo 0 means equality. Modulo 1 has one class.
- Prove representative independence before using quotient operations.
- The finite-list CRT must say what happens for the empty list, or explicitly
  restrict to nonempty lists. Keep the convention consistent with finite
  products.
- Do not cite general ring consequences at order 30. Verify the two operations
  directly. `thm-z-mod-p-is-a-field` may cite `def-field`, which is published,
  but must check all clauses and `0 != 1`.
- Treat the linear-congruence solution count as a count of residue classes.
- Wilson's inverse-pairing proof must handle `p=2`.
- Natural numbers in integer arithmetic use the published canonical embedding.
- The product formula is stated through a finite injective list of prime
  divisors, avoiding an undeclared product over a set.

### Incidence algebras and Möbius inversion

- Keep the distinction between locally finite and lower-finite visible in the
  Statement, not only in proof prose.
- Convolution associativity requires an explicit bijection between two finite
  indexing sets; cite the finite Fubini lemma.
- The diagonal-unit recursion must construct both left and right inverses, or
  prove they agree, before claiming invertibility.
- Define the standard poset Möbius function in `I(P,Z)`. Extend its values to
  another coefficient ring only through the canonical integer multiples.
- The non-locally-finite witness has a bottom, a top, and countably many
  incomparable middle points. For the constant-one functions, the endpoint
  convolution sum is infinite.
- In the equal-cardinality counterexample, compare the four-element chain with
  the four-element diamond. Their endpoint intervals have the same cardinality
  and Möbius values 0 and 1.

## Proof decomposition and richness pass

### Filters and ultrafilters

Both passes were performed. The published A page was not altered. No new
theorem or corollary belongs on the B leaf. The B page was enriched with a
general generated principal filter, finite-partition selection, and failure of
intersections to preserve ultrafilter maximality.

### Congruences and the Chinese remainder theorem

Long proofs were decomposed as follows:

- quotient well-definedness:
  `lem-congruence-respects-integer-arithmetic`;
- prime-power totient:
  `lem-multiples-below-a-prime-power`;
- linear congruences:
  `lem-linear-congruence-reduction-by-the-gcd`;
- finite CRT:
  `lem-pairwise-coprime-divisibility` and
  `lem-chinese-remainder-two-moduli`;
- Wilson:
  `lem-wilson-inverse-pairing`.

The corollary pass added `cor-totient-at-one-and-at-a-prime`,
`cor-euler-totient-is-multiplicative`, and
`thm-sum-of-totients-over-divisors`. The field result and Euler product formula
were retained as substantive theorems, not compressed into remarks.

### Incidence algebras and Möbius inversion

Long proofs were decomposed as follows:

- convolution associativity:
  `def-finite-sum-in-a-commutative-monoid`,
  `lem-finite-sum-reindexing-and-fubini`, and
  `lem-incidence-convolution-associative-and-distributive`;
- invertibility:
  `lem-incidence-convolution-inverses-by-recursion` before the criterion;
- inversion:
  `lem-poset-mobius-recurrence` before the lower-finite theorem;
- divisor dictionary:
  `lem-divisibility-poset-is-lower-finite-and-factorises` before the
  number-theoretic agreement theorem.

The corollary pass added finite-poset inversion, the Boolean
inclusion-exclusion dictionary, classical divisor inversion, and
multiplicativity of the number-theoretic Möbius function.

No A page approaches the 100-item review ceiling.

## Drops and recoverable deferments

- CRT: primitive roots and positive cyclicity results for
  `(\mathbb Z/p)^\times` remain out of scope because their usual proof uses a
  polynomial root bound not among this page's prerequisites. The negative
  modulo-8 example remains.
- CRT: Fermat and Euler remain with the Lagrange development. This page supplies
  the unit group and totient inputs.
- CRT: a full compatibility theorem for noncoprime systems was not added. The B
  page retains the counterexample showing why pairwise coprimality matters.
- Incidence: the partition-lattice formula and the `Pi_3` example were dropped
  because the set-partitions page is not built at order 203.
- Incidence: necklace inversion was dropped because Burnside and Pólya are not
  prerequisites of this page.
- Incidence: Euler-characteristic and cross-cut material remains deferred to a
  development with order complexes or simplicial topology.

## Id reuse and collision audit

The full candidate-id list was searched in both `items/` and
`research/plan-spec.json`.

These planned B-page ids were reused and have no item file yet:

- `ex-principal-ultrafilter`
- `ex-frechet-filter`
- `ex-free-ultrafilter-on-naturals`
- `cex-union-of-filters-not-filter`
- `cex-improper-filter`

All other scaffolded build ids are new. No candidate collides with an item file.
In particular, there is no pre-existing classical Möbius-function item on the
prime or CRT pages.

## Dependency closure and seams

A local closure check over the JSON found no bad dependency: every dependency
is an item preceding its consumer on the same page, an item on a required page,
or a published item file. There are 65 distinct external item dependencies.
Every one has `status: published` on disk.

Ten foundational dependencies are published but currently have no page object
in `plan-spec.json`:

- `def-natural-numbers`
- `def-nat-order`
- `thm-well-ordering-principle`
- `thm-induction-principle`
- `thm-strong-induction`
- `lem-nat-embeds-int`
- `lem-int-cancellation`
- `thm-int-comm-ring`
- `thm-int-ordered-ring`
- `def-field`

They are honest published dependencies, but the orchestrator's authoritative
`depsource` run may classify them as homeless.

No forward reference was retained.

Declared seams:

- inclusion-exclusion A to CRT A for Euler's product formula;
- CRT A to incidence B through the divisor sum for `phi`;
- Boolean lattices and inclusion-exclusion to incidence A through an explicit
  agreement corollary;
- prime factorisation to incidence A through divisor-interval factorisation and
  the classical Möbius formula.

The only cross-stream dependency produced by this batch is from
`incidence-algebras-and-mobius-inversion-examples` to
`congruences-and-the-chinese-remainder-theorem`. It is wholly contained in this
batch and does not depend on another frontier-5 batch.

## Web research ledger

All listed URLs were opened successfully during scaffolding.

- Keith Conrad, *The Chinese Remainder Theorem*:
  <https://kconrad.math.uconn.edu/blurbs/ugradnumthy/crt.pdf>.
  Supports the two-modulus and finite-list CRT, the induced bijection on units,
  multiplicativity of `phi`, and the product formula.
- Keith Conrad, *Modular Arithmetic*:
  <https://kconrad.math.uconn.edu/blurbs/ugradnumthy/modarithshort.pdf>.
  Supports congruence, standard representatives, and arithmetic of residue
  classes.
- LibreTexts, *Linear Congruences*:
  <https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Yet_Another_Introductory_Number_Theory_Textbook_-_Cryptology_Emphasis_%28Poritz%29/02%3A_Congruences/2.02%3A_Linear_Congruences>.
  Supports the gcd solvability condition and exact solution count.
- LibreTexts, *Euler's phi Function*:
  <https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Yet_Another_Introductory_Number_Theory_Textbook_-_Cryptology_Emphasis_%28Poritz%29/02%3A_Congruences/2.05%3A_Euler%27s__%CF%95__Function>.
  Supports `phi` as the number of unit classes and its CRT multiplicativity.
- LibreTexts, *Theorems of Wilson, Euler, and Fermat*:
  <https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Elementary_Number_Theory_%28Barrus_and_Clark%29/01%3A_Chapters/1.24%3A_Theorems_of_Wilson_Euler_and_Fermat>.
  Supports Wilson's theorem and the inverse-pairing proof strategy.
- Felix Gotti, MIT 18.211 notes, *Incidence Algebras*:
  <https://math.mit.edu/~fgotti/docs/Courses/C.%20Combinatorial%20Analysis/38.%20Mobius%20Inversion%20Formula/Incidence%20Algebras.pdf>.
  Supports locally finite incidence convolution, the diagonal invertibility
  criterion, Möbius recurrence, product theorem, and the finite-principal-ideal
  hypothesis for global inversion. This source exposed the fatal
  locally-finite versus lower-finite error in the prose scaffold.
- Richard Stanley, *Enumerative Combinatorics, Volume 1*, contents:
  <https://math.mit.edu/~rstan/ec/ec1toc.html>.
  Confirms the standard scope connecting incidence algebras, Möbius inversion,
  and lattices.
- MIT 18.785, Problem Set 8:
  <https://math.mit.edu/classes/18.785/2021fa/ProblemSet8.pdf>.
  Supports the classical number-theoretic Möbius function and divisor inversion.
- Encyclopedia of Mathematics, *Möbius series*:
  <https://encyclopediaofmath.org/wiki/M%C3%B6bius_series>.
  Supports the classical divisor inversion formula.
- Encyclopedia of Mathematics, *Cofinite subset*:
  <https://encyclopediaofmath.org/wiki/Cofinite_subset>.
  Supports the cofinite, or Fréchet, filter terminology.
- David Rhodes, UCR dissertation:
  <https://math.ucr.edu/~muralee/thesis-Rhodes.pdf>.
  Supports principal filters, the singleton criterion for principal
  ultrafilters, tail/free-filter examples, and the complement
  characterisation of ultrafilters.

Convention disagreements:

- This repository defines filters to be proper. Some sources admit the improper
  filter.
- Sources may permit any integer modulus throughout. This scaffold permits any
  integer in the congruence relation but restricts quotient algebra and `phi`
  exactly where their statements require natural or positive moduli.
- Sources commonly call `Z/nZ` a ring. General ring results are not a CRT-page
  prerequisite, so this scaffold uses two named operations and proves the
  needed laws directly.
- Incidence sources often use a field or the real numbers as coefficients.
  This scaffold works over a commutative ring and separates the
  integer-valued poset Möbius function from coefficient extension.
- Some treatments blur local finiteness with finiteness of principal ideals.
  This scaffold keeps local, lower, and upper finiteness distinct.

## Verification and confidence

`research/frontier-5-batch-1.pages.json` parses as JSON. Its published filters
A-page object is structurally identical to the current `plan-spec.json` object.
The local item-order and published-dependency closure check found no exception.

I did not splice the JSON into `plan-spec.json`, so I do not claim that
`validate-plan.mjs` or `depsource.mjs` passed authoritatively. The parent must
run those gates after splicing. Confidence is high on the mathematical scope,
the fatal hypothesis correction, id collision audit, and local dependency
closure. The main residual integration risk is how the authoritative gate
classifies the ten published homeless foundations.
