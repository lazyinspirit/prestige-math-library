# Frontier 16, batch 5 — Beta-5 scaffold notes

## Current substage and owned artifacts

- Current substage: Step-3 fix pass complete for Alpha finding `B5-1`; the engine has since added current full-text fetch stamps to all five coverage sources.
- Owned artifacts: `research/frontier-16-batch-5.pages.json`, `research/frontier-16-batch-5.notes.md`, `research/frontier-16-batch-5.proof-contracts.json`, and the separately required `research/frontier-16-batch-5.coverage.json`.
- The manifest carries one A/B pair, the proof contract covers every proof-bearing item, and the coverage harvest records each named source result read.
- Exact next action: Alpha’s `3-recheck` should verify finding `B5-1` from these artifacts; the engine can then splice the approved manifest at Step 4.

## Design/spec comparison

The design and the live plan agree on order `288.003`, category `measure-theory`, title, and companion. They disagree on prerequisites. The exact design text is:

> `requires`: MT-1, `limsup-and-subsequential-limits` (for $\overline{\mathbb{R}}$ and $\liminf$), `series-and-nonnegative-tests`, `filters-and-ultrafilters`, `countability-and-uncountability`

The exact live `research/plan-spec.json` requirement is only `sigma-algebras-and-borel-sets-examples`. Per dispatch, this batch preserves the live spec and does not adjudicate the drift. The item graph still declares every actual published dependency, so the mathematical closure is explicit even though the page-level `requires` array remains unchanged.

## Proposed A-page summary for Step 5

Sigma-algebras provide the measurable domains on which measures are defined, while pi-systems, lambda-systems, and Dynkin’s theorem provide the generating-class machinery used for uniqueness. The extended nonnegative reals supply infinite values, and set liminf and limsup describe eventual and repeated membership. These structures make countable additivity meaningful without assuming that the underlying set is finite or countable.

A measure is developed through monotonicity, subadditivity, continuity under monotone set limits, inclusion–exclusion, Borel–Cantelli, completion, restriction, weighted sums, and atomic examples. Semifinite parts isolate the finite-measure information of an arbitrary measure, and a pi-system exhaustion turns finite uniqueness into the sigma-finite uniqueness theorem. Counterexamples mark the exact roles of disjointness, completeness, finiteness, and intersection closure.

## Applyable design amendments

### B5-1 — Correct the continuity equivalence

- File/section: `research/plan-measure-theory-track.md`, `## MT-2. Measures and Their Basic Properties`, `THMS`.
- Exact old text: `A finitely additive $\mu$ on a $\sigma$-algebra is countably additive **iff** it is continuous from below **iff** it is continuous from above at $\emptyset$ (three-way equivalence, **landmark**; this is the theorem that explains what countable additivity buys).`
- Exact new text: `A finitely additive $\mu$ on a $\sigma$-algebra is countably additive **iff** it is continuous from below. If $\mu(X)<\infty$, these conditions are also equivalent to continuity from above at $\emptyset$ (**landmark**; this is the theorem that explains what countable additivity buys).`
- Reason: counting measure on $\mathbb N$ is countably additive but fails continuity from above at the empty set on the decreasing tails. Declining this amendment ships a false theorem.

### B5-2 — Repair the zero-based dyadic weights

- File/section: the same design section, `B page`.
- Exact old text: `the measure $\mu(E)=\sum_{k\in E}2^{-k}$ on $\mathcal{P}(\mathbb{N})$, a probability measure`.
- Exact new text: `the measure $\mu(E)=\sum_{k\in E}2^{-(k+1)}$ on $\mathcal{P}(\mathbb{N})$, a probability measure`.
- Reason: this library has $0\in\mathbb N$, so the old total is $\sum_{k\ge0}2^{-k}=2$. Declining preserves an index-zero falsehood.

### B5-3 — Make the shrinking-interval Borel–Cantelli measure explicit

- File/section: the same design section, `B page`.
- Exact old text: `Borel–Cantelli applied to $E_k = (0,2^{-k})$`.
- Exact new text: `Borel–Cantelli applied to $E_k=(0,2^{-k})$ for the atomic probability $\mu=\sum_{j\ge0}2^{-(j+1)}\delta_{2^{-j}}$, for which $\mu(E_k)=2^{-(k+1)}$`.
- Reason: no Lebesgue measure exists at this order. The replacement is self-contained and gives a nontrivial summable sequence of interval measures.

### B5-4 — Replace the unavailable MT-5 non-completeness pointer

- File/section: the same design section, final B-page counterexample sentence.
- Exact old text: `a non-complete Borel measure space (Lebesgue-null subsets of the Cantor set that are not Borel — **forward pointer only**, since the witness needs MT-5; the B item states the finished fact and cites MT-5, which is legal because it is a later A page, not an earlier one — see traps).`
- Exact new text: `the Borel Dirac space $(\mathbb R,\mathcal B(\mathbb R),\delta_0)$ is not complete, and its completion is $(\mathbb R,\mathcal P(\mathbb R),\overline{\delta}_0)$ with $\overline{\delta}_0(E)=1$ exactly when $0\in E$.`
- Reason: the Dirac construction closes now and its completion is already a planned example. Declining forces an unresolved later item id or drops a self-contained witness.

### B5-5 — State the semifinite decomposition without unsupported terminology

- File/section: the same design section, `THMS`.
- Exact old text: `every measure decomposes as a semifinite part plus a purely infinite part.`
- Exact new text: `Assuming $\mathrm{AC}_\omega$, every measure is the sum of its semifinite part and a measure taking only the values $0$ and $\infty$; the latter summand need not be unique.`
- Reason: Folland Exercise 1.3.15(c) states the zero–infinity conclusion and nonuniqueness, not a defined “purely infinite” object. The proof that the semifinite part is a measure makes countably many near-supremum choices.

### B5-6 — Fix the restriction convention

- File/section: the same design section, `DEFS`.
- Exact old text: `the **restriction** $\mu\!\restriction\! E$`.
- Exact new text: `for measurable $E$, the restricted measure $\mu_E(A):=\mu(A\cap E)$ on the original sigma-algebra; the distinct subspace restriction is not used here`.
- Reason: Folland uses the same-ambient restriction while Tao uses restriction to the trace sigma-algebra. The planned definition selects one convention explicitly and prevents later citation ambiguity.

### B5-7 — Record, but do not resolve, prerequisite drift

- File/section: the design `requires` line and the live page object in `research/plan-spec.json`.
- Exact old design text is quoted in `Design/spec comparison`; the live exact value is `requires: ["sigma-algebras-and-borel-sets-examples"]`.
- No exact replacement is proposed by this batch. Stage 1 drift adjudication must choose; this scaffold follows the spec as dispatched.

### B5-8 — Add the extended-series prerequisite for weighted sums

- File/section: insert before `DEFS` or at the start of `THMS` in MT-2.
- Exact old text: no corresponding text.
- Exact new text: `Before defining countable weighted sums of measures, define series in $[0,\infty]$ by suprema of partial sums and prove Tonelli’s interchange theorem for a nonnegative double series.`
- Reason: the library’s existing `def-series` is real-valued and only assigns a sum after real convergence; it cannot express an infinite measure value or justify interchanging the measure and union indices.

## Per-page item lists

### measures-and-their-basic-properties — 50 items

1. `def-nonnegative-extended-series` — definition — Series in the nonnegative extended real line
2. `def-limsup-and-liminf-of-nonnegative-extended-sequences` — definition — Limit superior and limit inferior of a nonnegative extended-real sequence
3. `thm-tonelli-for-nonnegative-double-series` — theorem — Tonelli's theorem for double series of nonnegative extended real numbers
4. `def-measure` — definition — Measures on sigma-algebras
5. `def-measure-space` — definition — Measure spaces
6. `def-finitely-additive-set-function` — definition — Finitely additive nonnegative set functions
7. `def-finite-sigma-finite-and-semifinite-measures` — definition — Finite, sigma-finite, and semifinite measures
8. `def-probability-measure` — definition — Probability measures and probability spaces
9. `def-measure-null-set-and-almost-everywhere` — definition — Measure-null sets and almost-everywhere statements relative to a measure
10. `def-complete-measure-space` — definition — Complete measure spaces
11. `fs-subsets-of-null-sets-are-always-measurable` — false-statement — FALSE: every subset of a measure-null set is measurable
12. `prop-measure-monotonicity` — proposition — Measures are monotone
13. `prop-measure-of-a-set-difference` — proposition — Measure of a set difference when the smaller set has finite measure
14. `thm-finite-and-countable-subadditivity-of-measures` — theorem — Finite and countable subadditivity of measures
15. `thm-continuity-from-below-for-measures` — theorem — Continuity from below for measures
16. `thm-continuity-from-above-for-measures` — theorem — Continuity from above when one set has finite measure
17. `def-counting-measure` — definition — Counting measure on an arbitrary set
18. `prop-counting-measure-is-a-measure` — proposition — Counting measure is a measure
19. `fs-continuity-from-above-without-finiteness` — false-statement — FALSE: continuity from above needs no finiteness hypothesis
20. `prop-two-set-measure-identity` — proposition — The two-set measure identity $\mu(A\cup B)+\mu(A\cap B)=\mu(A)+\mu(B)$
21. `thm-finite-inclusion-exclusion-for-measures` — theorem — Inclusion-exclusion for a nonempty finite family of finite-measure sets
22. `prop-null-symmetric-difference-preserves-measure` — proposition — Sets whose symmetric difference is null have the same measure
23. `thm-countable-additivity-and-set-function-continuity` — theorem — Countable additivity and continuity of finitely additive set functions
24. `thm-first-borel-cantelli` — theorem — The first Borel-Cantelli lemma for measures
25. `thm-measure-of-set-liminf` — theorem — The measure of a set liminf is at most the liminf of the measures
26. `thm-measure-of-set-limsup` — theorem — The limsup of the measures is at most the measure of the set limsup under a finite-union bound
27. `cor-dominated-convergence-for-sets` — corollary — Measures converge for a convergent sequence of sets contained in one finite-measure set
28. `prop-null-sets-form-a-sigma-ideal-in-a-complete-space` — proposition — Null sets are closed under countable unions and, in a complete space, under arbitrary subsets
29. `def-completion-of-a-measure-space` — definition — The completion sigma-algebra and completed set function of a measure space
30. `lem-completion-domain-is-a-sigma-algebra` — lemma — The completion domain is a sigma-algebra
31. `lem-completed-measure-is-well-defined` — lemma — The completed measure is independent of the representing measurable set
32. `thm-completion-of-a-measure-space` — theorem — Every measure space has a unique complete extension to its completion
33. `def-restriction-of-a-measure` — definition — Restriction of a measure to a measurable set
34. `prop-restriction-is-a-measure` — proposition — The restriction of a measure to a measurable set is a measure
35. `def-dirac-measure` — definition — The Dirac set function at a point
36. `prop-dirac-measure-is-a-probability-measure` — proposition — A Dirac set function is a probability measure
37. `def-nonnegative-weighted-sum-of-measures` — definition — Nonnegative scalar multiples and countable weighted sums of measures
38. `thm-nonnegative-weighted-sums-of-measures` — theorem — Nonnegative scalar multiples and countable weighted sums of measures are measures
39. `thm-measures-on-finite-sigma-algebras-are-atomic` — theorem — A measure on a finite sigma-algebra is a finite weighted sum over its atoms
40. `thm-measures-on-countable-discrete-spaces-are-weighted-dirac-sums` — theorem — Every measure on a countable discrete space is its weighted sum of Dirac measures
41. `lem-semifinite-measures-have-arbitrarily-large-finite-subsets` — lemma — Assuming countable choice, an infinite-measure set in a semifinite measure space has arbitrarily large finite-measure subsets
42. `def-semifinite-part-of-a-measure` — definition — The semifinite part of a measure
43. `thm-semifinite-part-is-a-measure` — theorem — Assuming countable choice, the semifinite part is a semifinite measure and equals the original measure exactly when it is semifinite
44. `thm-semifinite-and-zero-infinity-decomposition` — theorem — Assuming countable choice, every measure is the sum of its semifinite part and a zero-infinity-valued measure
45. `lem-finite-measure-uniqueness-on-a-pi-system` — lemma — Finite measures agreeing on a generating pi-system and on the whole space are equal
46. `thm-measure-uniqueness-on-a-sigma-finite-pi-system` — theorem — Measures agreeing on a generating pi-system are equal under an increasing finite-measure exhaustion from that pi-system
47. `fs-generating-families-determine-measures` — false-statement — FALSE: agreement on an arbitrary generating family determines a measure
48. `fs-every-finitely-additive-set-function-is-a-measure` — false-statement — FALSE: every finitely additive nonnegative set function on a sigma-algebra is a measure
49. `fs-countable-additivity-without-disjointness` — false-statement — FALSE: measures are additive on arbitrary countable unions
50. `fs-zero-on-singletons-implies-zero-measure` — false-statement — FALSE: a measure on an infinite set that vanishes on every singleton is the zero measure

### measures-and-their-basic-properties-examples — 9 items

1. `ex-counting-measure-and-sigma-finiteness` — example — Assuming countable choice, counting measure is sigma-finite exactly on countable sets
2. `ex-dirac-measure` — example — A Dirac probability measure concentrates all mass at one point
3. `ex-dyadic-probability-measure-on-naturals` — example — The weights $2^{-(k+1)}$ define a probability measure on $\mathcal P(\mathbb N)$
4. `ex-countable-cocountable-zero-infinity-measure` — example — Assuming countable choice, zero on countable sets and infinity on cocountable sets is a non-semifinite measure
5. `ex-completion-of-borel-dirac-measure` — example — The completion of the Borel Dirac measure at zero is defined on every subset of the real line
6. `ex-borel-cantelli-for-shrinking-dyadic-intervals` — example — Borel-Cantelli for the shrinking intervals $(0,2^{-k})$ under a dyadic atomic measure
7. `cex-continuity-from-above-without-finite-first-measure` — counterexample — Counting-measure tails decrease to the empty set while every term has infinite measure
8. `cex-free-ultrafilter-finitely-additive-probability` — counterexample — A free ultrafilter induces a finitely additive zero-one probability that is not countably additive
9. `cex-generating-family-without-pi-system` — counterexample — Two four-point probability measures agree on a generating family that is not a pi-system

## Per-pair richness report

Both required passes were performed separately for this pair.

- Long proofs decomposed: the completion theorem is split into `lem-completion-domain-is-a-sigma-algebra` and `lem-completed-measure-is-well-defined`; sigma-finite pi-system uniqueness is split through `lem-finite-measure-uniqueness-on-a-pi-system`; the semifinite decomposition is split through `lem-semifinite-measures-have-arbitrarily-large-finite-subsets`, the semifinite-part definition, and `thm-semifinite-part-is-a-measure`; countable weighted sums are preceded by extended nonnegative series and Tonelli interchange.
- Useful corollaries/results added in the corollary pass: `cor-dominated-convergence-for-sets`; the finite-sigma-algebra atomic classification; and the countable-discrete weighted-Dirac classification. Each is a named harvested result and not a cosmetic restatement.
- The main A page has 50 items. It is below the hard 60-item ceiling, so no split is proposed. No result was pruned to stay below the ceiling.

## Proof-obligation map for Step 5

1. Extended sums: prove recursive partial sums exist at index 0, are monotone, and have an extended-real supremum. Tonelli must prove both inequalities between rectangular and iterated suprema, including an infinite entry and unbounded finite rectangles.
2. Measure axioms: every use of subtraction is confined to a finite term. Monotonicity, subadditivity, and the two-set identity use disjoint decompositions and remain valid at infinity.
3. Monotone continuity: continuity from below handles an infinite term before finite differences; continuity from above discards initial terms only after locating a finite one. The finitely-additive characterization proves both directions separately and restricts the above-at-empty clause to finite total mass.
4. Set limits: `def-limsup-and-liminf-of-nonnegative-extended-sequences` prevents the published real-sequence definition from being applied to a measure value of $+\infty$. `thm-measure-of-set-liminf` uses increasing tail intersections; `thm-measure-of-set-limsup` uses decreasing tail unions and the exact finite-union bound. The corollary proves both numerical squeeze directions.
5. Completion: normalize each representation to a measurable core plus a disjoint sub-null part; show complement and countable-union closure; show any two cores have null symmetric difference; disjointize measurable cores before countable additivity; prove completeness and uniqueness on the exact completed domain.
6. Weighted/atomic constructions: for $c\in[0,+\infty]$, define $c\mu$ in three branches. The case $c=0$ is the zero measure; $0<c<+\infty$ uses the defined extended-real product and a direct partial-sum/supremum argument; $c=+\infty$ is zero on $\mu$-null sets and infinite otherwise. Prove the last branch is a measure by showing a disjoint union is null exactly when every member is null, and only then use Tonelli for countable weighted sums. Finite atoms use finite choice and the same infinite-coefficient branch, including the empty underlying space. The countable-discrete classification separates empty, finite, and countably infinite spaces and never pads an enumeration with repeated points.
7. Semifinite machinery: every near-supremum selection names $\mathrm{AC}_\omega$; arbitrary-large finite subsets prove the supremum cannot stop at a finite value; the zero–infinity summand uses sigma-finite measurable sets and a countable flattening.
8. Uniqueness: the finite agreement class contains the whole space because total masses agree, is a lambda-system only because subtraction is finite, and contains the pi-system. The exhaustion theorem restricts first, then lets the increasing exhaustion tend to $X$.
9. Witnesses: verify each finite probability table, the ultrafilter dichotomy, all singleton masses, the empty intersection of counting tails, and the $k=0$ values in every geometric construction.

The machine-readable version is `research/frontier-16-batch-5.proof-contracts.json`. It has one contract for each proof-bearing item, planned steps 1.1/2.1/3.1, every declared fact input, and all eight boundary dispositions. Same-batch citation quotes are planned Statement clauses and must be synchronized to the authored text at Step 5.

## Component provenance and source/edit rationale

Source keys: `A` = https://measure.axler.net/MIRA.pdf; `F` = https://djvu.online/file/NPF4BEtSuqdFA; `T` = https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf; `P` = https://www.stat.yale.edu/~pollard/Courses/600.spring2011/Handouts/Extract-from-UGMTP.pdf; `G` = https://www3.nd.edu/~dgalvin1/pdf/ultrafilters.pdf. `Local` means no literature claim is attributed for that generated construction.

| Item | Statement / construction | Proof / verification | Source/edit rationale |
|---|---|---|---|
| `def-nonnegative-extended-series` | ai-altered | not-applicable | AFT: Axler §2C, Folland §1.3, and Tao §1.4.3 supports the claim; the library version is edited to its zero-based indexing, explicit choice cost, and extended-real boundary strategy. |
| `def-limsup-and-liminf-of-nonnegative-extended-sequences` | ai-altered | not-applicable | F: Folland Exercise 1.3.8 supports the extended-valued tail suprema and infima; the new definition is distinct from the published real-sequence domain. |
| `thm-tonelli-for-nonnegative-double-series` | literature-derived | ai-altered | T: Tao Notation and §1.4.3 supports the claim; the library version is edited to its zero-based indexing, explicit choice cost, and extended-real boundary strategy. |
| `def-measure` | literature-derived | not-applicable | AFT: Axler §2C, Folland §1.3, and Tao §1.4.3 supports the claim; the library version is edited to its zero-based indexing, explicit choice cost, and extended-real boundary strategy. |
| `def-measure-space` | literature-derived | not-applicable | AFT: Axler §2C, Folland §1.3, and Tao §1.4.3 supports the claim; the library version is edited to its zero-based indexing, explicit choice cost, and extended-real boundary strategy. |
| `def-finitely-additive-set-function` | literature-derived | not-applicable | AF: Axler §2C and Folland §1.3 supports the claim; the library version is edited to its zero-based indexing, explicit choice cost, and extended-real boundary strategy. |
| `def-finite-sigma-finite-and-semifinite-measures` | literature-derived | not-applicable | F: Folland §1.3 supports the claim; the library version is edited to its zero-based indexing, explicit choice cost, and extended-real boundary strategy. |
| `def-probability-measure` | literature-derived | not-applicable | A: Axler §2C/12.1/12.6 supports the claim; the library version is edited to its zero-based indexing, explicit choice cost, and extended-real boundary strategy. |
| `def-measure-null-set-and-almost-everywhere` | literature-derived | not-applicable | AF: Axler §2C and Folland §1.3 supports the claim; the library version is edited to its zero-based indexing, explicit choice cost, and extended-real boundary strategy. |
| `def-complete-measure-space` | literature-derived | not-applicable | AFT: Axler §2C, Folland §1.3, and Tao §1.4.3 supports the claim; the library version is edited to its zero-based indexing, explicit choice cost, and extended-real boundary strategy. |
| `fs-subsets-of-null-sets-are-always-measurable` | ai-altered | ai-generated | AF: Axler §2C and Folland §1.3 supports the claim; the library version is edited to its zero-based indexing, explicit choice cost, and extended-real boundary strategy. |
| `prop-measure-monotonicity` | literature-derived | ai-altered | AF: Axler §2C and Folland §1.3 supports the claim; the library version is edited to its zero-based indexing, explicit choice cost, and extended-real boundary strategy. |
| `prop-measure-of-a-set-difference` | literature-derived | ai-altered | AF: Axler §2C and Folland §1.3 supports the claim; the library version is edited to its zero-based indexing, explicit choice cost, and extended-real boundary strategy. |
| `thm-finite-and-countable-subadditivity-of-measures` | literature-derived | ai-altered | AF: Axler §2C and Folland §1.3 supports the claim; the library version is edited to its zero-based indexing, explicit choice cost, and extended-real boundary strategy. |
| `thm-continuity-from-below-for-measures` | literature-derived | ai-altered | AF: Axler §2C and Folland §1.3 supports the claim; the library version is edited to its zero-based indexing, explicit choice cost, and extended-real boundary strategy. |
| `thm-continuity-from-above-for-measures` | literature-derived | ai-altered | AF: Axler §2C and Folland §1.3 supports the claim; the library version is edited to its zero-based indexing, explicit choice cost, and extended-real boundary strategy. |
| `def-counting-measure` | literature-derived | not-applicable | AF: Axler §2C and Folland §1.3 supports the claim; the library version is edited to its zero-based indexing, explicit choice cost, and extended-real boundary strategy. |
| `prop-counting-measure-is-a-measure` | literature-derived | ai-altered | AF: Axler §2C and Folland §1.3 supports the claim; the library version is edited to its zero-based indexing, explicit choice cost, and extended-real boundary strategy. |
| `fs-continuity-from-above-without-finiteness` | literature-derived | ai-altered | AF: Axler §2C and Folland §1.3 supports the claim; the library version is edited to its zero-based indexing, explicit choice cost, and extended-real boundary strategy. |
| `prop-two-set-measure-identity` | literature-derived | ai-altered | AF: Axler §2C and Folland §1.3 supports the claim; the library version is edited to its zero-based indexing, explicit choice cost, and extended-real boundary strategy. |
| `thm-finite-inclusion-exclusion-for-measures` | literature-derived | ai-altered | T: Tao Notation and §1.4.3 supports the claim; the library version is edited to its zero-based indexing, explicit choice cost, and extended-real boundary strategy. |
| `prop-null-symmetric-difference-preserves-measure` | literature-derived | ai-altered | AF: Axler §2C and Folland §1.3 supports the claim; the library version is edited to its zero-based indexing, explicit choice cost, and extended-real boundary strategy. |
| `thm-countable-additivity-and-set-function-continuity` | ai-altered | ai-altered | AF: Axler §2C and Folland §1.3 supports the claim; the library version is edited to its zero-based indexing, explicit choice cost, and extended-real boundary strategy. |
| `thm-first-borel-cantelli` | literature-derived | ai-altered | AT: Axler 12.6 and Tao Exercise 1.4.44 supports the claim; the library version is edited to its zero-based indexing, explicit choice cost, and extended-real boundary strategy. |
| `thm-measure-of-set-liminf` | literature-derived | ai-altered | AF: Axler §2C and Folland §1.3 supports the claim; the library version is edited to its zero-based indexing, explicit choice cost, and extended-real boundary strategy. |
| `thm-measure-of-set-limsup` | literature-derived | ai-altered | AF: Axler §2C and Folland §1.3 supports the claim; the library version is edited to its zero-based indexing, explicit choice cost, and extended-real boundary strategy. |
| `cor-dominated-convergence-for-sets` | literature-derived | ai-altered | T: Tao Notation and §1.4.3 supports the claim; the library version is edited to its zero-based indexing, explicit choice cost, and extended-real boundary strategy. |
| `prop-null-sets-form-a-sigma-ideal-in-a-complete-space` | literature-derived | ai-altered | AF: Axler §2C and Folland §1.3 supports the claim; the library version is edited to its zero-based indexing, explicit choice cost, and extended-real boundary strategy. |
| `def-completion-of-a-measure-space` | ai-altered | not-applicable | AF: Axler §2C and Folland §1.3 supports the claim; the library version is edited to its zero-based indexing, explicit choice cost, and extended-real boundary strategy. |
| `lem-completion-domain-is-a-sigma-algebra` | literature-derived | ai-altered | AF: Axler §2C and Folland §1.3 supports the claim; the library version is edited to its zero-based indexing, explicit choice cost, and extended-real boundary strategy. |
| `lem-completed-measure-is-well-defined` | literature-derived | ai-altered | AFT: Axler §2C, Folland §1.3, and Tao §1.4.3 supports the claim; the library version is edited to its zero-based indexing, explicit choice cost, and extended-real boundary strategy. |
| `thm-completion-of-a-measure-space` | literature-derived | ai-altered | AF: Axler §2C and Folland §1.3 supports the claim; the library version is edited to its zero-based indexing, explicit choice cost, and extended-real boundary strategy. |
| `def-restriction-of-a-measure` | literature-derived | not-applicable | AF: Axler §2C and Folland §1.3 supports the claim; the library version is edited to its zero-based indexing, explicit choice cost, and extended-real boundary strategy. |
| `prop-restriction-is-a-measure` | literature-derived | ai-altered | AF: Axler §2C and Folland §1.3 supports the claim; the library version is edited to its zero-based indexing, explicit choice cost, and extended-real boundary strategy. |
| `def-dirac-measure` | literature-derived | not-applicable | AF: Axler §2C and Folland §1.3 supports the claim; the library version is edited to its zero-based indexing, explicit choice cost, and extended-real boundary strategy. |
| `prop-dirac-measure-is-a-probability-measure` | literature-derived | ai-altered | A: Axler §2C/12.1/12.6 supports the claim; the library version is edited to its zero-based indexing, explicit choice cost, and extended-real boundary strategy. |
| `def-nonnegative-weighted-sum-of-measures` | ai-altered | not-applicable | T: Tao’s nonnegative combinations support the construction, materially adapted to the library’s undefined $0\cdot(+\infty)$ by separate $c=0$, finite-positive, and $c=+\infty$ branches. |
| `thm-nonnegative-weighted-sums-of-measures` | literature-derived | ai-altered | T: Tao Example 1.4.24 and Exercise 1.4.22 support the statement; the proof is materially adapted to establish the null/non-null $c=+\infty$ branch as a measure before the Tonelli interchange. |
| `thm-measures-on-finite-sigma-algebras-are-atomic` | literature-derived | ai-altered | T: Tao Exercise 1.4.21 supports the atomic classification; the local route uses finite choice and evaluates infinite atom weights through the explicit $c=+\infty$ branch. |
| `thm-measures-on-countable-discrete-spaces-are-weighted-dirac-sums` | literature-derived | ai-altered | T: Tao Exercise 1.4.25 supports the classification; the local route separates finite from countably infinite indexings, avoids repeated-point padding, and uses the explicit infinite-coefficient branch. |
| `lem-semifinite-measures-have-arbitrarily-large-finite-subsets` | ai-altered | ai-altered | F: Folland §1.3 supports the claim; the library version is edited to its zero-based indexing, explicit choice cost, and extended-real boundary strategy. |
| `def-semifinite-part-of-a-measure` | literature-derived | not-applicable | F: Folland §1.3 supports the claim; the library version is edited to its zero-based indexing, explicit choice cost, and extended-real boundary strategy. |
| `thm-semifinite-part-is-a-measure` | ai-altered | ai-altered | F: Folland §1.3 supports the claim; the library version is edited to its zero-based indexing, explicit choice cost, and extended-real boundary strategy. |
| `thm-semifinite-and-zero-infinity-decomposition` | ai-altered | ai-altered | F: Folland §1.3 supports the claim; the library version is edited to its zero-based indexing, explicit choice cost, and extended-real boundary strategy. |
| `lem-finite-measure-uniqueness-on-a-pi-system` | literature-derived | ai-altered | P: Pollard §10 supports the claim; the library version is edited to its zero-based indexing, explicit choice cost, and extended-real boundary strategy. |
| `thm-measure-uniqueness-on-a-sigma-finite-pi-system` | ai-altered | ai-altered | P: Pollard §10 supports the claim; the library version is edited to its zero-based indexing, explicit choice cost, and extended-real boundary strategy. |
| `fs-generating-families-determine-measures` | literature-derived | ai-altered | P: Pollard §10 supports the claim; the library version is edited to its zero-based indexing, explicit choice cost, and extended-real boundary strategy. |
| `fs-every-finitely-additive-set-function-is-a-measure` | literature-derived | ai-altered | AF: Axler §2C and Folland §1.3 supports the claim; the library version is edited to its zero-based indexing, explicit choice cost, and extended-real boundary strategy. |
| `fs-countable-additivity-without-disjointness` | ai-altered | ai-generated | AFT: Axler §2C, Folland §1.3, and Tao §1.4.3 supports the claim; the library version is edited to its zero-based indexing, explicit choice cost, and extended-real boundary strategy. |
| `fs-zero-on-singletons-implies-zero-measure` | ai-altered | ai-altered | AF: Axler §2C and Folland §1.3 supports the claim; the library version is edited to its zero-based indexing, explicit choice cost, and extended-real boundary strategy. |
| `ex-counting-measure-and-sigma-finiteness` | ai-altered | ai-altered | AF: Axler §2C and Folland §1.3 supports the claim; the library version is edited to its zero-based indexing, explicit choice cost, and extended-real boundary strategy. |
| `ex-dirac-measure` | literature-derived | ai-altered | AF: Axler §2C and Folland §1.3 supports the claim; the library version is edited to its zero-based indexing, explicit choice cost, and extended-real boundary strategy. |
| `ex-dyadic-probability-measure-on-naturals` | ai-generated | ai-generated | Local: Local checkable example; the construction is non-load-bearing and receives the generated-example truth audit. |
| `ex-countable-cocountable-zero-infinity-measure` | ai-altered | ai-altered | AFT: Axler §2C, Folland §1.3, and Tao §1.4.3 supports the claim; the library version is edited to its zero-based indexing, explicit choice cost, and extended-real boundary strategy. |
| `ex-completion-of-borel-dirac-measure` | ai-generated | ai-generated | Local: Local checkable example; the construction is non-load-bearing and receives the generated-example truth audit. |
| `ex-borel-cantelli-for-shrinking-dyadic-intervals` | ai-generated | ai-generated | Local: Local checkable example; the construction is non-load-bearing and receives the generated-example truth audit. |
| `cex-continuity-from-above-without-finite-first-measure` | literature-derived | ai-altered | AF: Axler §2C and Folland §1.3 supports the claim; the library version is edited to its zero-based indexing, explicit choice cost, and extended-real boundary strategy. |
| `cex-free-ultrafilter-finitely-additive-probability` | literature-derived | ai-altered | G: Galvin §2 supports the claim; the library version is edited to its zero-based indexing, explicit choice cost, and extended-real boundary strategy. |
| `cex-generating-family-without-pi-system` | literature-derived | ai-altered | P: Pollard §10 supports the claim; the library version is edited to its zero-based indexing, explicit choice cost, and extended-real boundary strategy. |

No AI-generated Statement/Construction is a dependency target. Every definition, theorem, lemma, proposition, corollary, and false statement in the dependency backbone is literature-derived or AI-altered from an identified treatment.

## Generated-claim truth-risk obligations

- `ex-dyadic-probability-measure-on-naturals`: recompute the geometric total from index 0 and explicitly show the old $2^{-k}$ formula totals two. Verify countable additivity through the authored weighted-sum theorem.
- `ex-completion-of-borel-dirac-measure`: verify both cases $0\in E$ and $0\notin E$, the representation of every subset by a Borel core plus a sub-null set, and the cardinal argument that the original Borel domain is proper.
- `ex-borel-cantelli-for-shrinking-dyadic-intervals`: recompute $\mu((0,2^{-k}))=2^{-(k+1)}$, its total series, and the empty set limsup independently of Borel–Cantelli.

These are generated examples only and carry `generation.role: example` at authoring. The finite/geometric calculations are their counterexample search; none may become a dependency target.

## Web research and convention ledger

- Axler §2C supports measure, measure space, counting and Dirac measures, monotonicity, difference, subadditivity, both monotone-continuity theorems, and the union identity; Axler 12.1 supports probability measure and 12.6 supports Borel–Cantelli.
- Folland §1.3 supports the basic properties, null/a.e./complete terminology, completion, restriction, set liminf/limsup inequalities, symmetric-difference invariance, continuity characterizations, semifinite part, and zero–infinity decomposition.
- Tao’s Notation supports the nonnegative extended-series convention and Tonelli interchange; §1.4.3 supports finite and countable atomic classifications, weighted sums, dominated convergence for sets, completion, and inclusion–exclusion; Exercise 1.4.44 independently supports Borel–Cantelli.
- Pollard §10 supports finite pi-system uniqueness and supplies the exact four-point rows/columns counterexample.
- Galvin §2 supports the ultrafilter/zero-one finitely additive measure correspondence and the failure of countable additivity for a free ultrafilter.

Convention disagreements found:

- This library indexes sequences by $\mathbb N$ containing 0; several sources use indices starting at 1. Every scaffolded geometric weight is shifted accordingly.
- Tao treats $0\cdot\infty=0$ in his extended nonnegative arithmetic; this library leaves that product undefined. The weighted-measure definition therefore has separate zero, finite-positive, and infinite-coefficient branches, with $(+\infty)\mu$ defined as zero on $\mu$-null sets and $+\infty$ otherwise.
- Folland’s restriction stays on the original sigma-algebra via $A\mapsto\mu(A\cap E)$; Tao’s displayed restriction is to a measurable subspace. This scaffold chooses the Folland convention explicitly.
- Folland assumes choice globally. The two semifinite-part proofs and the countable-cocountable/counting equivalences expose the exact $\mathrm{AC}_\omega$ cost instead.
- Some sources require a pi-system to contain the whole space; `def-pi-system` does not. The finite uniqueness lemma therefore states equality of total masses separately, and the sigma-finite theorem uses an exhaustion from the pi-system.

## Dependency closure

The manifest has 40 distinct external dependency ids over 84 external edges, plus 118 same-batch edges. Every external item was opened from `items/`, is `status: published`, and has an eligible `literature-derived` or `ai-altered` Statement. The added direct dependency `lem-finite-choice` was reopened and its exact natural-number-indexed finite-choice statement checked; it lies strictly earlier and its `ai-altered` Statement is eligible. There are no legacy-unclassified dependencies and therefore no legacy confidence-route exception. Every source clause used by a contract was read from the actual Definition or Statement, not from a scaffold description.

Every load-bearing dependency is either earlier in this pair or published on a strictly smaller-order page. There is no planned-later, homeless, unresolved, external-fallback, or `proved_here: false` edge. The B page is a leaf, and no A item or other planned item depends on a B-page construction.

No published dependency read for this batch contains an unambiguous load-bearing falsehood. No published-dependency repair is proposed.

## Findings for Step-3 Alpha

1. Approve B5-1, the corrected continuity equivalence. The design’s unrestricted three-way statement is false; declining ships a false landmark theorem.
2. Approve B5-2, the shift to $2^{-(k+1)}$. Declining makes the advertised probability have total mass two.
3. Approve B5-3, the explicit dyadic atomic measure for shrinking intervals. Declining leaves the example dependent on Lebesgue measure before it exists.
4. Approve B5-4, the Borel Dirac non-completeness example. Declining retains an unresolved future-item pointer despite a complete in-scope witness.
5. Approve B5-5, the zero–infinity formulation and explicit countable-choice cost. Declining preserves unsupported terminology and hides a real selection assumption.
6. Approve B5-6, the same-ambient restriction convention. Declining leaves two incompatible textbook conventions under one symbol.
7. Refer the design/spec prerequisite mismatch to the run’s drift adjudicator without changing this batch manifest. Resolving it locally would build this batch against a different plan from the rest of the run.
8. Approve B5-8, the extended-series/Tonelli prerequisite. Declining leaves the countable weighted-sum proof dependent on a sum the library has not defined at infinity.

These are independent recommendations ordered by mathematical correctness, dependency closure, then exposition.

## Forward references

None. The Borel Dirac completion replaces the design’s MT-5 pointer. The Borel–Cantelli item may mention the page id `independence-borel-cantelli-and-zero-one-laws` in plain orientation prose, but no item target exists there yet and no `forward_refs` edge is planned.

## New-id collision report

All 59 final ids were checked against both `items/` and `research/plan-spec.json` with:

```sh
for id in <the 59 manifest ids>; do rg -q "(^id: $id$|\"id\": \"$id\")" items research/plan-spec.json; done
```

The exact-id search returned no collision. A semantic search for nonnegative extended series, Tonelli for nonnegative series, weighted sums of measures, semifinite parts, measure completion, continuity characterizations, and pi-system uniqueness returned no existing equivalent item. The published `def-set-limsup-and-liminf`, `thm-dynkin-pi-lambda`, and cardinality results are reused rather than reminted.

Every decomposition lemma and corollary is named in the richness report above together with the result it supports.

## Cross-batch dependencies

None within `frontier-16`. All external edges resolve to already published content. The other current batches are in real analysis, topology, and complex analysis and need no new batch-5 id. Future measure-theory pages will consume `def-measure`, the continuity theorems, completion, weighted sums, and pi-system uniqueness after this pair is published.

## Gate and liveness record

- `content-policy.mjs --manifest-only`: 59 scoped items, 0 errors, 0 warnings.
- `coverage-checklist.mjs`: 1 page and 92 harvested source results, 0 errors, 0 warnings.
- Proof-contract JSON: 44 scoped proof-bearing items and 44 contracts; every contract has eight boundary rows. `proof-contract --strict` was run and, as expected before Step 5, reports only that the 44 item files do not yet exist; no pass is claimed.
- `source-fetch-check --stamp`: the original Beta attempt failed with sandbox DNS `EAI_AGAIN` and fabricated no stamp. A later engine retry fetched and stamped all five full texts; the current coverage file records substantive byte counts, hashes, and document kinds for each source.
- `validate-plan` and authoritative `depsource` cannot be run against this manifest until Step 4 splices it into `research/plan-spec.json`; no pass is claimed.
- Independent calculations rechecked the dyadic total, every displayed shrinking-interval tail value for initial indices, and all row/column masses in Pollard’s four-point witness; each matched the scaffolded value.

The source-liveness blocker is closed on the current coverage file. No permission prompt or escalation was requested.

## Confidence statement

Mathematical confidence is high in the corrected scaffold. The zero-based geometric formulas, extended-real cancellation boundaries, monotone-limit hypotheses, both directions of the continuity characterization, completion well-definedness, sigma-finite localization, and ultrafilter/finite-table witnesses were checked explicitly against the cited treatments and the published dependency statements.

What was not verified: the strict proof-contract and citation gates cannot pass until Step 5 creates the items; the manifest has not been spliced, so authoritative plan-order and dependency-source gates have not run on this repaired batch overlay; and no Step-6 reader or paired judge has inspected authored proofs, because no authored proofs exist yet.

## Step-3 fix pass

- **B5-1 — applied.** This is Alpha group b’s finding, not the earlier design amendment with the same local label. The manifest now gives `def-nonnegative-weighted-sum-of-measures` explicit branches for $c=0$, $0<c<+\infty$, and $c=+\infty$, the last taking value zero on $\mu$-null sets and $+\infty$ otherwise. The theorem strategy proves that infinite branch is a measure before applying nonnegative Tonelli. The finite-atomic and countable-discrete strategies use the same convention for infinite weights; the former now declares `lem-finite-choice` and the weighted-sum/Dirac dependencies it actually uses, while the latter separates empty, finite, and countably infinite indexings without repeated-point padding. Their proof contracts now assign separate numbered obligations to the infinite branch, downstream atomic evaluation, coefficient uniqueness, and the relevant empty/zero/infinite boundaries. Declining this repair would leave the finite-atom classification undefined whenever an atom has infinite mass and a measurable set misses that atom.

  The Step-3 commands were rerun from the repository root. `coverage-checklist` and `content-policy --manifest-only` pass cleanly. `validate-plan research/plan-spec.json` passes against the current unspliced plan; as required, this is not claimed as validation of the batch overlay before Step 4. `prosecheck --warnings` reports no errors and only the pre-existing count heuristics in this required audit report. Both batch JSON files parse, the contract/dependency consistency check reports no undeclared citation or unmapped planned step, all external dependency targets are published with eligible Statement provenance, and `git diff --check` is clean.
