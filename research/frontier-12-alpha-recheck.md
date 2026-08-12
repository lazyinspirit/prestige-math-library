# Run `frontier-12` — Alpha re-check before the step-4 splice

**Alpha:** Claude Opus 5, `claude` runner, `xhigh`, 1,000,000-token window
(`claude-opus-5[1m]`), `--permission-mode bypassPermissions`.
**Date:** 2026-08-13. **Scope:** the four `insufficient` verdicts and the §5
corrections C1–C12 from `research/frontier-12-alpha-step3-scaffold-review.md`,
re-checked from disk at commit `3d1ab54a`, plus D11 and D12.
**Authored nothing; edited no batch file.**

The seven `sufficient` pairs were not re-reviewed. Every repair below was checked
the way the original finding was made: by opening the source at its stated
`locator` and reading what is there. `WebFetch` worked throughout; PDFs went
through the same local `pypdf` extraction as the first pass.

---

## 1. The four `insufficient` verdicts

| pair | was | now | verdict |
|---|---|---|---|
| `splitting-fields` (56) | 15 A | 18 A | **discharged** |
| `eigenvalues-…` (86) | 19 A | 23 A | **discharged** |
| `pi-…` (183) | 12 A | 14 A | **discharged** |
| `finite-probability-spaces-and-random-variables` (220.2) | 37 A | 37 A | **sourcing discharged; one required item not routed and not done** |

### 1.1 `splitting-fields` (batch 1) — **discharged**

All three named results are on the A page with stable ids, and each is the exact
Stacks statement I named:

| required | scaffolded id | source, verified |
|---|---|---|
| normality descends to an intermediate field | `prop-normality-descends-to-intermediate-fields` | tag **09HN** = Lemma 9.15.2 |
| intersections of normal subextensions are normal | `prop-nonempty-intersections-of-normal-subextensions-are-normal` | tag **09HP** = Lemma 9.15.3 |
| the generation criterion | `thm-normality-generation-criterion` | tag **0BR3** = Lemma 9.15.6 |

I re-opened tag 09HL and enumerated the section: it runs 9.15.1 (09HM) through
9.15.10 (0BR4), and the three tags carry exactly the statements claimed. The
`locator` now reads *"from the opening splitting paragraph through Lemma 9.15.10,
inclusive"* and the harvest carries **11 rows**, up from 2 — every heading in the
section disposed. The six declines (9.15.4, 9.15.5, 9.15.7, 9.15.8, 9.15.9,
9.15.10) each name their own blocker: separable degree, algebraic closure, and
the `Aut(E/F)` development, all genuinely order-96-or-later. That is the specific
truncation I found, closed at its full extent.

Two things the Beta did better than the finding asked. It **built** the
finite-support fact inside `thm-normality-generation-criterion` — *"the union of
the fields $F(T)$ over finite $T\subseteq S$ is a subfield containing $F\cup S$,
so generated-field minimality makes it all of $E$"* — rather than taking the
`deferred` row I offered as a fallback. And it made the nonempty hypothesis on
the intersection lemma explicit, with the reason stated: *"an empty intersection
would be the ambient field, which need not be normal."* I checked both proof
strategies; the reduction through a splitting field of the finite product, and
the UFD comparison of complete factorisations in a common ambient $M[x]$, are
both correct and both close using only page-local and published dependencies.

### 1.2 `eigenvalues-…` (batch 3) — **discharged**

Four items added, all four on the A page. I re-extracted Pinkham chapter 12 and
read §12.3 in full (PDF pp. 243–244 = printed pp. 231–232):

- **Theorem 12.3.1** *"The trace of A is the sum of the eigenvalues counted with
  multiplicities"* → `thm-trace-is-sum-of-eigenvalues`
- **Theorem 12.3.2** *"The determinant of A is the product of the eigenvalues
  counted with multiplicities"* → `thm-determinant-is-product-of-eigenvalues`
- **Theorem 12.3.3 (Spectral Mapping Theorem)** → `thm-spectral-mapping-for-polynomials`
- **Corollary 12.3.4** *"All the eigenvalues of p(A) are 0"* →
  `cor-characteristic-polynomial-evaluation-has-only-zero-eigenvalues`

The locator now runs *"section 12.3 from Theorem 12.3.1 through Corollary
12.3.4"*, and every heading in it has a row. The gap I found — coefficients
computed by `lem-characteristic-polynomial-is-monic-and-has-extreme-coefficients`
and never connected to the eigenvalues — is closed by exactly that route: compare
the $x^{n-1}$ and constant coefficients against the factored form.

**The scaffold is stronger than its source and stays honest about it.** Pinkham
proves all of §12.3 over $\mathbb C$ by assuming triangularizability (his Schur
theorem is §12.5, which this library does not have at order 86). Every scaffolded
item instead carries the hypothesis *"if $\chi_T(x)=\prod_{i<n}(x-\lambda_i)$ in
$F[x]$"* and proves the result over an arbitrary field — trace and determinant by
coefficient comparison, spectral mapping by induction on an invariant eigenline
using `lem-characteristic-polynomial-of-block-triangular-matrix`. I checked the
induction: $\chi_T=(x-\lambda_0)\chi_B$ cancels in the integral domain $F[x]$,
$p$ applied to a block upper-triangular matrix has diagonal blocks $p(\lambda_0)$
and $p(B)$, and the block lemma closes it. Correct, and it avoids importing
machinery the page cannot cite.

**C6 is fixed at the same time.** The Pinkham 12.1.3 row now reads *"the
characteristic polynomial of an upper or lower triangular matrix is the product
of x minus its diagonal entries"* and maps only to
`lem-characteristic-polynomial-of-block-triangular-matrix`. The orphaned claim
got a real source: a new entry for **Axler, *Linear Algebra Done Right*, 4th ed.,
§5A, Theorem 5.11**, which I opened and read — *"Suppose $T\in\mathcal L(V)$. Then
every list of eigenvectors of $T$ corresponding to distinct eigenvalues of $T$ is
linearly independent"* — mapped to
`thm-eigenvectors-for-distinct-eigenvalues-are-linearly-independent`. Both halves
of the conflated row now sit on the item each actually carries.

### 1.3 `pi-…` (batch 4) — **discharged**

Both required additions are present and both are mathematically sound.

**`thm-archimedean-polygon-perimeter-characterization-of-pi`.** States
$I_n=2n\sin(\pi/n)$ increasing and $O_n=2n\tan(\pi/n)$ decreasing to $2\pi$, with
monotonicity from the derivative behaviour of $\sin x/x$ and $\tan x/x$ on
$(0,\pi/2)$ and the common limit from `cor-sin-x-over-x-limit`. It reaches the
library's own arc-length machinery — `def-path-polygonal-length-and-rectifiability-in-rn`
and `lem-polygonal-length-is-monotone-under-refinement` are both in `deps` — and
identifies $2\pi$ with the circumference through
`thm-circle-circumference-diameter-ratio-is-pi` rather than assuming a polygonal
formula. The boundary discipline I look for is there: *"record $n=3$ and the
positivity of $\cos(\pi/n)$ before division."* The ledger item now has the
characterization the word *circumference* historically means.

**`cor-central-binomial-coefficient-asymptotic-from-wallis`.** I checked the
algebra rather than the claim: with $a_n=\binom{2n}{n}/4^n=(2n-1)!!/(2n)!!$, the
finite Wallis product is $W_n=1/((2n+1)a_n^2)$, so $W_n\to\pi/2$ gives
$\pi n a_n^2\to1$ and $\binom{2n}{n}\sim4^n/\sqrt{\pi n}$. The scaffold's route is
exactly this and it separates the $n=0$ value from the limit assertion. The
`out-of-scope` reason I refuted is gone; the row is now `included`.

**The sourcing complaint is answered.** My §3-D4 objection was that the Wallis
product rested on a two-page solutions handout alone. Batch 4 added **David
Galvin, *Primitives and techniques of integration*, §13.2** (PDF pp. 9–11), which
I downloaded and read: it derives $S_n=\frac{n-1}{n}S_{n-2}$ by parts, the
even/odd closed forms, the Wallis product, and then the central-binomial
asymptotic $\lim\sqrt n\binom{2n}{n}/2^{2n}=1/\sqrt\pi$ — every row claimed of it
is on those pages. The new Archimedean source (Rutgers Math 373 Workshop 9
Solutions) is also real and says what the rows claim: Problem 1 opens with
Archimedes' bounds and 1a states $I_n=2n\sin(\pi/n)$, $O_n=2n\tan(\pi/n)$ with the
doubling recurrences. It is a solutions sheet rather than a textbook, but the pair
is backed by Lebl and Keisler as textbooks, the Archimedean item also carries a
`canonical` row, and its content is built from the library's own arc-length
definition, so nothing load-bearing rests on the handout.

**Both bookkeeping fixes landed.** The Basel problem now has a `canonical`
`deferred` row naming `the-riemann-zeta-function` (order 345). The misquoted Lebl
row now reads *"Proposition 11.4.2(9), the inequality sin(x) <= x for x >= 0"* —
see C7 below.

### 1.4 `finite-probability-spaces-and-random-variables` (220.2, batch 5)

**The sourcing defect that drove the verdict is discharged, and the fix is not
cosmetic.** This was the one flagged as most likely to be surface work; it is not.

`finite-probability-spaces-and-random-variables` now carries **two independent
textbook treatments of its own subject**, which is what the split obliged it to
have:

- **Grinstead & Snell, *Introduction to Probability*, 2nd ed.** — 28 rows across
  §1.2, §4.1, §6.1, §6.2 and §8.1.
- **Pishro-Nik, *Introduction to Probability, Statistics, and Random
  Processes*** — 28 rows across §1.3.2–1.4.3, §3.1.5, §3.2.2, §3.2.4, §5.3.1,
  §6.1.1 and §6.2.1–6.2.4.

I opened both. Every Grinstead & Snell numbered result the harvest names exists
where it says and states what it says: Theorem 1.1 (normalization, monotonicity,
complements), Theorem 1.2 (finite additivity over pairwise-disjoint events),
Theorem 1.3 with Corollary 1.1 (decomposition over a partition), Theorem 1.4
(two-event inclusion–exclusion), Theorem 4.1 (independence iff
$P(E\cap F)=P(E)P(F)$), Definition 6.1 and Theorem 6.2 (linearity, which the book
itself notes holds *"whether or not the summands are mutually independent"*),
Theorem 6.3, Theorem 6.4, Definition 6.3, Theorems 6.6–6.9, and Theorem 8.1
(Chebyshev). On the Pishro-Nik side I opened §5.3.1 (covariance definition, the
properties lemma including symmetry, scaling and bilinearity, and the
variance-of-a-sum expansion), §6.2.1 (union bound), §6.2.2 (*"If $X$ is any
nonnegative random variable, then $P(X\ge a)\le EX/a$"* and Chebyshev), and
§6.2.4 (*"$|EXY|\le\sqrt{E[X^2]E[Y^2]}$"*).

**All 37 A items now have a coverage row; the orphan count went 14 → 0.** Each of
the fourteen I named traces to a real section: Bayes to G&S §4.1's Bayes' Formula
and Pishro-Nik §1.4.3, total probability to G&S Theorem 1.3 and equation (4.3),
the chain rule to G&S equation (4.2) and Pishro-Nik §1.4.0, product spaces to
G&S's construction after Definition 4.5, the binomial to G&S's Bernoulli-trials
paragraph and Pishro-Nik §3.1.5, Cauchy–Schwarz to Pishro-Nik §6.2.4.

The **`canonical` block I asked for is there** on 220.2, with 5 rows — and it is
used the way the mechanism is meant to be used, not as a dumping ground. Each row
carries a `source_note` explaining the route, e.g. the indicator-independence
equivalence *"follows in the finite setting by comparing the four joint atoms of
$(I_A,I_B)$ with the product of their Bernoulli marginals"*, and the product-space
row records that Grinstead & Snell constructs only the equal-factor case while the
scaffold generalises to distinct factors. Those are honest declarations of what
the sources do and do not give.

**What was not done: requirement 3 — see §4.1.** My §4.5 listed three required
items. The dispatch routed the first (and, effectively, the second); the third —
the B page at 220.4 marking no boundary for the page's four headline inequalities
— was not in the brief and is untouched. That is the one piece of outstanding
work in the run.

---

## 2. The §5 corrections

| # | batch | disposition | evidence |
|---|---|---|---|
| C1 | 1 | **discharged** | No occurrence of `free-modules-and-exact-sequences` remains anywhere in batch 1. The three reasons now read *"Module localisation is currently homed on no page in plan-spec.json"* and *"remains a tracked plan gap."* |
| C2 | 1 | **discharged** | Milne Example 2.8 now reads *"no page in the current plan homes cyclotomic-field or Galois theory, so the result remains a tracked plan gap."* The invented "Galois track" is gone. |
| C3 | 1 | **discharged** | All nine Judson rows renumbered to the cited HTML edition: 21.2.1, 21.2.2, 21.2.3, 21.2.4, Figure 21.2.5, 21.2.6, Figure 21.2.7, 21.2.8. A reader following the URL now finds every item cited. |
| C4 | 1 | **discharged** | Milne locator now reads *"PDF pp. 27-31 … through Proposition 2.17"*. |
| C5 | 1 | **discharged** | The second resolution, correctly applied. I re-opened tag 00CM and enumerated §10.9: it runs Definition 10.9.1 through Lemma 10.9.16 and **contains no prime-ideal correspondence at all**. The row is now scoped *"(the ideal clause only)"*, and both `notes.md` §sources and the provenance table state that the prime restriction is proved locally and *"is not attributed to that source row"*. The row no longer claims more than its source gives. Carried note in §4.2. |
| C6 | 3 | **discharged** | See §1.2. Row split; Axler 5.11 opened and verified as the new source. |
| C7 | 4 | **discharged** | Row now reads *"the inequality sin(x) <= x for x >= 0"*, and its reason states that the analytic limits use the published `sin x/x → 1` so *"no scaffold item depends on a stronger absolute-value inequality."* I checked the scaffold: nothing leans on $\lvert\sin x\rvert\le\lvert x\rvert$. |
| C8 | 4 | **discharged** | **Zero** occurrences of "Donaldson" in `frontier-12-batch-4.proof-contracts.json`. The Green contracts cite only in-library targets — `citations: []` with a `citation_plan` of the three page-local lemmas. Better than asked: the Beta made **Lebl §10.6** load-bearing instead, folding it into the compound Lebl locator, so the Green development rests on a textbook rather than on a handout headed *"A Sketch Proof."* |
| C9 | 2, 4 | **discharged** | Batch 4's three Lebl entries are one entry with a compound locator naming §9.2, §9.3 and §10.6. Batch 2's four Stacks entries were already a single classification; its independent-treatment count is no longer inflated. |
| C10 | 1, 3, 7 | **discharged** | The Stacks Project is `monograph` in all four places — batch 1 (both 00CM and 09HL), batch 3 (05G6), batch 7. |
| C11 | 2 | **discharged** | Batch 2 orphans are **0 across all four pages** (was 9 A + 13 B). Harvest 115 → 137 rows. The nine A items map to exact Milne and Kleshchev locators; seven B items with no separate source heading are `canonical` rows tagged `ai-altered`, not `ai-generated` — the right call, since they are recoverable restatements. |
| C12 | 3 | **discharged** (D12) | `plan-spec.json` order 88 now reads **"Diagonalisation and the Minimal Polynomial"**. |

---

## 3. D11 and D12

### D11 — module localisation as a tracked gap. **I agree, and it is the right call.**

I found C1 and I would have made the same decision. Three reasons:

1. **It cannot go at 53.2.** Modules arrive at order 102, so the material is
   genuinely later than its own prerequisite. That is decisive by itself.
2. **Order 104 would be legal but is the wrong home.** `free-modules-and-exact-sequences`
   is about free modules and exact sequences; localisation of modules is not that
   subject, and batch 2 is an accepted 29-item pair. Expanding it for material
   with no consumer is scope creep, not richness.
3. **Crucially, nothing rests on the absence.** This is what separates D11 from
   D10. D10 existed because two *published* items already open by assuming
   $\operatorname{Frac}(\mathbb R[t])$ — the library was leaning on a construction
   it had never built. Here I re-confirmed that no page in `plan-spec.json` homes
   $S^{-1}M$, and none needs it. There is no page left resting on something
   unbuilt; there is only an absence, recorded where a future run will find it.

The deferral reasons now say the true thing, which is what makes the gap
recoverable by grep in a later run. **One refinement to the record:** the decision
names `chain-conditions-and-semisimple-modules` (108) or
`modules-over-a-pid-and-canonical-forms` (110) as natural future homes. I would
put it at **`tensor-products-of-modules` (106)** instead — the standard
development is $S^{-1}M\cong S^{-1}R\otimes_R M$, and exactness of localisation
is then flatness of $S^{-1}R$, which is literally that page's subject. Neither 108
nor 110 develops localisation. This is a refinement to the pointer, not a
disagreement with the disposition.

### D12 — order 88 retitled. **Correct, and applied.**

Verified in `plan-spec.json`: order 88 is `diagonalisation-and-the-minimal-polynomial`
titled *"Diagonalisation and the Minimal Polynomial"*. The reasoning is right —
the id never claimed Cayley–Hamilton, so the title had drifted from the id rather
than the plan from the mathematics. Cayley–Hamilton is a statement about the
characteristic polynomial and belongs at 86, where the adjugate route needs only
the determinants and cofactors published at 82/84. No id change, no reading-order
change, no published text touched.

---

## 4. Remaining work and carried notes

### 4.1 NOT DISCHARGED — batch 5, page 220.4's B page. The one live item.

My §4.5 requirement 3 was not routed to batch 5 (the dispatch was scoped to
sourcing) and the B page is unchanged at 8 items. The gap is exactly as found:
the A page's last five items — `thm-markov-inequality`, `thm-chebyshev-inequality`,
`lem-cauchy-schwarz-for-finite-random-variables`, `thm-finite-second-moment-lower-bound`,
`cor-relative-variance-positive-probability-bound` — have **no example or
counterexample anywhere on the B page**. Four headline inequalities, no boundary
marked. Counterexamples marking the boundary of each theorem are the point of a B
page.

**Exact remaining work, owning batch 5, three items on page 220.4:**

1. **Chebyshev is sharp.** Grinstead & Snell §8.1 carries this explicitly, and I
   read it: immediately after Example 8.1 (PDF p. 314, printed p. 306) the text
   states *"Chebyshev's Inequality is the best possible inequality in the sense
   that, for any $\varepsilon>0$, it is possible to give an example of a random
   variable for which Chebyshev's Inequality is in fact an equality"*, and gives
   the two-point distribution on $\{-\varepsilon,+\varepsilon\}$ with weight
   $1/2$ each. Use that distribution; it is cleaner than the three-point one I
   suggested. **Correcting my own first pass:** I wrote that G&S §8.1 carries all
   three of these. It carries this one. It does not state Markov at all.
2. **Markov is sharp.** A variable taking a single positive value on an event of
   the extremal probability. Pishro-Nik §6.2.2 is the statement source already in
   the ledger; the witness is a `canonical` row.
3. **Markov fails without nonnegativity.** Pishro-Nik §6.2.2 states the hypothesis
   as *"If $X$ is any nonnegative random variable"* — the counterexample showing
   the hypothesis is not decorative is a two-point variable with a negative value
   and negative mean. `canonical` row with a `source_note`, exactly like the five
   the Beta already wrote on 220.2.

This is a `pages.json` + `coverage.json` + `proof-contracts.json` edit on one B
page. It is small, and it is the last stage at which it stays small.

### 4.2 Carried notes — none splice-blocking, all cheap now

- **C13 (new, batch 5).** Two Grinstead & Snell ranges stop one printed page
  before results the harvest itself lists inside them. §1.2 is given as *"printed
  pp. 18-24; PDF pp. 25-31"*, but Corollary 1.1 and Theorem 1.4 are on **PDF p.
  32** (printed p. 25). §6.2 is given as *"printed pp. 257-260; PDF pp. 264-267"*,
  but Theorem 6.9 is on **PDF p. 268** (printed p. 261). Same class as C4;
  extend both tails by one page.
- **C14 (new, batch 3 and batch 1).** Provenance labelling is internally
  inconsistent on the newly added items. Batch 1 correctly tagged
  `prop-nonempty-intersections-of-normal-subextensions-are-normal` as
  `ai-altered` for making a hypothesis explicit. Batch 3 tagged
  `thm-trace-is-sum-of-eigenvalues`, `thm-determinant-is-product-of-eigenvalues`
  and `thm-spectral-mapping-for-polynomials` as `literature-derived` while its own
  rationale says Pinkham *"supplies the result over the complex numbers"* and the
  scaffold *"states the exact split-characteristic-polynomial hypothesis"* — a
  changed hypothesis and a changed field, which is `ai-altered` under SCHEMA §3.
  No gate consequence, since both labels are dependency-eligible; retag at step 5
  rather than leaving it for me at step 6.
- **C15 (new, batch 5, page 221).** Two headline A items on the method page —
  `thm-positive-probability-existence-principle` and `thm-first-moment-method` —
  carry no coverage row, though Matoušek–Vondrák ch. 2, Zhao §2.1 and Bucić ch. 2
  are all harvested for exactly that material, and page 221 has no `canonical`
  block. This is C11-class mapping incompleteness on a pair I ruled `sufficient`
  on content, and I raise it for consistency with how C11 was treated, not as a
  reopening. The page's other seven unmapped items are genuine proof-decomposition
  lemmas and need no row.
- **C5 follow-through (batch 1, step 5).** The prime-ideal clause of
  `thm-ideal-correspondence-for-localisation` is now attributed to no source row
  at all, while the item's statement provenance is `literature-derived` — which
  requires a reader-visible `sources.references` URL at authoring. The clause is
  standard (Atiyah–Macdonald Prop. 3.11); either cite it there or record a
  `canonical` row with a `source_note`, as batch 5 did for its five.
- **Batch 7 headroom (restated for the step-5 brief).** `limits-and-colimits` is
  46 A items against the 60-item `size` ceiling. If authoring pushes it past
  **55**, the Beta stops and reports rather than absorbing the overflow — after
  authoring, a split is a rewrite.

---

## 5. Gate state, reproduced independently

I re-ran the gates rather than accept the reported numbers.

| check | result |
|---|---|
| `coverage-checklist.mjs` on all 7 batch files | **12 pages, 884 harvested results, 0 errors, 0 warnings** |
| `frontier-12-splice.mjs --dry` | **24 pages, 451 items** |
| `validate-plan.mjs` on the merged spec | **exit 0**, acyclic and consistent over 244 item-bearing pages |
| hard error codes in the merged run | **none** — no `size`, `undeclared-prereq`, `b-leaf`, `forward-ref`, `dup-id`, cycle or unresolved id |
| proof-contract completeness, batches 1/3/4/5 | 49 / 59 / 50 / 62 contracts; **0 proof-bearing items without a contract** |
| item orphan analysis, all 24 pages | batch 2 and 220.2 now **0**; the remaining unmapped items are proof-decomposition lemmas, except the two named in C15 |

The only `validate-plan` output is 310 pre-existing `redundant-prereq` warnings on
other pages, unchanged by this run.

**Presentation untouched.** No file outside `research/` is modified; no Beta
touched a renderer or the app repo.

---

## 6. Verdict

**Yes — the scaffold set is ready for the step-4 splice, with one bounded fix
outstanding.**

Three of the four `insufficient` verdicts are fully discharged, and each was
discharged by adding the exact results at the exact sources named, verified by
reopening those sources. The fourth — 220.2's sourcing — is discharged in
substance and the fix is real: two genuine textbook treatments of the page's own
subject, 14 orphaned items reduced to none, and every locator I checked contains
what it claims. All eleven routed §5 corrections are discharged, two of them
better than asked. D11 is the right disposition and D12 is correctly applied.

The outstanding item is **§4.1: three boundary items on batch 5's B page at
220.4**, which was never routed. It does not block the splice mechanically —
nothing else in the run cites those items, and `frontier-12-splice.mjs` re-runs
cheaply. But it must land **before step-5 authoring begins**, because after
authoring it stops being a scaffold edit. My recommendation is to run the
ten-minute batch-5 fix round first and splice once, folding in C13 and C15 for
batch 5 and C14 for batches 1 and 3 while that Beta is already open — every one
of those is a bookkeeping edit that costs a line now and an audit finding later.

No blocker. Nothing in §4 requires an owner decision.
